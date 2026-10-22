#!/usr/bin/env node
/**
 * fluig-mcp-local — MCP de demonstração para o hands-on.
 * Expõe dados mockados do Fluig (datasets, processos, formulários) e
 * geradores de código que usam esse contexto real (IDs de atividade,
 * campos do formulário) para o agente não "inventar" nada.
 *
 * Transporte: stdio. Nunca escreva em stdout fora do protocolo — log vai em stderr.
 */
import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { TdnIndex, norm } from "./docs.js";
import { lint, detectKind, RULE_CATALOG, type Kind } from "./lint.js";

type Row = Record<string, string>;
interface Dataset { description: string; type: string; columns: string[]; rows: Row[] }
interface Activity { id: number; name: string; type: string; assignee?: string; rule?: string; event?: string }
interface Process { description: string; version: number; form: string; activities: Activity[]; events: string[] }
interface Field { name: string; type: string; required?: boolean; zoom?: string; children?: string[] }
interface Form { process: string; fields: Field[] }
interface FluigData { datasets: Record<string, Dataset>; processes: Record<string, Process>; forms: Record<string, Form> }

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..");
const dataPath = process.env.FLUIG_MOCK_DATA ?? join(root, "data", "fluig.json");
const tdnDir = process.env.FLUIG_TDN_DIR ?? join(root, "tdn");
// Pacote oficial TOTVS (fluig-agent-skills) embutido sem alterações em vendor/ — preserva os caminhos relativos.
const pkgDir = process.env.FLUIG_SKILLS_PKG ?? join(root, "vendor", "fluig-agent-skills");
// Ordem = precedência: skills locais (incrementos do time) sobrescrevem as oficiais de mesmo nome.
const localSkillsDir = process.env.FLUIG_SKILLS_DIR ?? join(root, "skills");
const skillDirs = [localSkillsDir, join(pkgDir, "skills")];
const contextDir = pkgDir; // fluig_context expõe context/, examples/ e docs/ do pacote
const db: FluigData = JSON.parse(readFileSync(dataPath, "utf-8"));

const json = (v: unknown) => ({ content: [{ type: "text" as const, text: JSON.stringify(v, null, 2) }] });
const text = (t: string) => ({ content: [{ type: "text" as const, text: t }] });
const fail = (msg: string) => ({ isError: true, content: [{ type: "text" as const, text: msg }] });

const server = new McpServer(
  { name: "fluig-mcp-local", version: "0.2.0" },
  {
    instructions:
      "Servidor de apoio ao desenvolvimento TOTVS Fluig. Antes de gerar ou revisar código: " +
      "(1) consulte a fonte de verdade com fluig_context (architecture, conventions, style-guide, technologies); " +
      "(2) confirme APIs na documentação oficial com fluig_docs_search/fluig_docs_read e cite a URL; " +
      "(3) rode fluig_lint no código produzido ou revisado; (4) use dados reais (fluig_get_process, fluig_get_form, fluig_query_dataset) em vez de supor IDs e campos.",
  },
);
const tdn = new TdnIndex(tdnDir);

// ---------------------------------------------------------------- datasets
server.registerTool(
  "fluig_list_datasets",
  {
    title: "Listar datasets",
    description: "Lista os datasets disponíveis (INTERNAL, CUSTOM, FORM) com descrição e colunas.",
    inputSchema: {},
    annotations: { readOnlyHint: true },
  },
  async () =>
    json(Object.entries(db.datasets).map(([id, d]) => ({ id, type: d.type, description: d.description, columns: d.columns }))),
);

const Constraint = z.object({
  field: z.string().describe("Nome da coluna"),
  initialValue: z.string(),
  finalValue: z.string().optional().describe("Se informado, filtra por faixa [initial, final]"),
  type: z.enum(["MUST", "SHOULD", "MUST_NOT"]).default("MUST"),
  likeSearch: z.boolean().default(false).describe("Equivale a setLikeSearch(true): usa % como curinga"),
});

server.registerTool(
  "fluig_query_dataset",
  {
    title: "Consultar dataset",
    description:
      "Executa uma consulta no dataset com a mesma semântica de DatasetFactory.getDataset(id, fields, constraints, order). " +
      "Use antes de escrever código que dependa do formato real dos dados.",
    inputSchema: {
      datasetId: z.string(),
      fields: z.array(z.string()).optional().describe("Colunas a retornar (null = todas)"),
      constraints: z.array(Constraint).optional(),
      order: z.array(z.string()).optional().describe("Colunas de ordenação; sufixo ';desc' para decrescente"),
    },
    annotations: { readOnlyHint: true },
  },
  async ({ datasetId, fields, constraints = [], order = [] }) => {
    const ds = db.datasets[datasetId];
    if (!ds) return fail(`Dataset '${datasetId}' não existe. Disponíveis: ${Object.keys(db.datasets).join(", ")}`);

    const match = (row: Row, c: z.infer<typeof Constraint>) => {
      const v = row[c.field] ?? "";
      if (c.likeSearch) return new RegExp("^" + c.initialValue.split("%").map((s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join(".*") + "$", "i").test(v);
      if (c.finalValue !== undefined) return v >= c.initialValue && v <= c.finalValue;
      return v === c.initialValue;
    };
    const must = constraints.filter((c) => c.type === "MUST");
    const should = constraints.filter((c) => c.type === "SHOULD");
    const mustNot = constraints.filter((c) => c.type === "MUST_NOT");

    let rows = ds.rows.filter(
      (r) => must.every((c) => match(r, c)) && mustNot.every((c) => !match(r, c)) && (should.length === 0 || should.some((c) => match(r, c))),
    );
    for (const o of [...order].reverse()) {
      const [col, dir] = o.split(";");
      rows = [...rows].sort((a, b) => (a[col] ?? "").localeCompare(b[col] ?? "", "pt-BR", { numeric: true }) * (dir === "desc" ? -1 : 1));
    }
    const cols = fields?.length ? fields : ds.columns;
    return json({ columns: cols, rowsCount: rows.length, values: rows.map((r) => Object.fromEntries(cols.map((c) => [c, r[c] ?? null]))) });
  },
);

// ---------------------------------------------------------------- processos e formulários
server.registerTool(
  "fluig_get_process",
  {
    title: "Detalhar processo",
    description: "Retorna atividades (com IDs numéricos reais), gateways, responsáveis, formulário vinculado e eventos já implementados.",
    inputSchema: { processId: z.string() },
    annotations: { readOnlyHint: true },
  },
  async ({ processId }) => {
    const p = db.processes[processId];
    return p ? json({ processId, ...p }) : fail(`Processo '${processId}' não existe. Disponíveis: ${Object.keys(db.processes).join(", ")}`);
  },
);

server.registerTool(
  "fluig_get_form",
  {
    title: "Detalhar formulário",
    description: "Retorna os campos do formulário (tipo, obrigatoriedade, zoom e tabelas pai-filho).",
    inputSchema: { formId: z.string() },
    annotations: { readOnlyHint: true },
  },
  async ({ formId }) => {
    const f = db.forms[formId];
    return f ? json({ formId, ...f }) : fail(`Formulário '${formId}' não existe. Disponíveis: ${Object.keys(db.forms).join(", ")}`);
  },
);

// ---------------------------------------------------------------- geradores (aceleram o dev)
server.registerTool(
  "fluig_scaffold_workflow_event",
  {
    title: "Gerar evento de workflow",
    description:
      "Gera o esqueleto JS de um evento de processo (beforeTaskSave, beforeStateEntry, validateForm, servicetaskN...) " +
      "já com as constantes das atividades reais e os campos do formulário do processo.",
    inputSchema: {
      processId: z.string(),
      event: z.string().describe("Ex.: beforeTaskSave, validateForm, servicetask12"),
    },
    annotations: { readOnlyHint: true },
  },
  async ({ processId, event }) => {
    const p = db.processes[processId];
    if (!p) return fail(`Processo '${processId}' não existe.`);
    const form = db.forms[p.form];
    const constName = (a: Activity) =>
      "ATV_" + a.name.normalize("NFD").replace(/[̀-ͯ]/g, "").toUpperCase().replace(/[^A-Z0-9]+/g, "_").replace(/^_|_$/g, "");
    const consts = p.activities.map((a) => `var ${constName(a)} = ${a.id};`).join("\n");
    const reads = (form?.fields ?? [])
      .filter((f) => f.type !== "paiFilho")
      .map((f) => `    var ${f.name} = hAPI.getCardValue("${f.name}");`)
      .join("\n");
    // Assinaturas conforme TDN "Eventos de Processos" e "Atividade de serviço".
    const sig: Record<string, string> = {
      beforeTaskSave: "function beforeTaskSave(colleagueId, nextSequenceId, userList)",
      beforeTaskComplete: "function beforeTaskComplete(colleagueId, nextSequenceId, userList)",
      beforeStateLeave: "function beforeStateLeave(sequenceId)",
      afterStateEntry: "function afterStateEntry(sequenceId)",
      afterProcessCreate: "function afterProcessCreate(processId)",
      beforeStateEntry: "function beforeStateEntry(sequenceId)",
      afterTaskComplete: "function afterTaskComplete(colleagueId, nextSequenceId, userList)",
      afterProcessFinish: "function afterProcessFinish(processId)",
      validateForm: "function validateForm(form)",
    };
    const header = sig[event] ?? `function ${event}(attempt, message)`;
    const isService = /^servicetask\d+$/.test(event);
    const body =
      isService
        ? reads + `\n\n    try {\n        // TODO: integração via Cadastro de Serviços (fluigAPI.getAuthorizeClientService)\n        return true;\n    } catch (e) {\n        log.error("[${processId}] ${event}: " + e);\n        throw "Falha na integração: " + e;\n    }`
        : event === "validateForm"
        ? (form?.fields ?? [])
            .filter((f) => f.required && f.type !== "paiFilho")
            .map((f) => `    if (isEmpty(form.getValue("${f.name}"))) msg += "Campo '${f.name}' é obrigatório.\\n";`)
            .join("\n")
        : reads;
    const code = `// ${processId} v${p.version} — evento ${event} (gerado por fluig-mcp-local)
${consts}

${header} {
    var atividade = getValue("WKNumState");
${event === "validateForm" ? '    var msg = "";\n' + body + '\n    if (msg !== "") throw msg;' : isService ? body : body + "\n\n    // TODO: regra de negócio por atividade\n    if (atividade == " + constName(p.activities[1] ?? p.activities[0]) + ") {\n        log.info(\"[" + processId + "] " + event + " na atividade \" + atividade);\n    }"}
}
${event === "validateForm" ? "\nfunction isEmpty(v) { return v == null || String(v).trim() === \"\"; }" : ""}`;
    const already = p.events.includes(event);
    const warn = [
      already ? `⚠️ O evento ${event} já existe no processo; revise antes de sobrescrever.` : "",
      event === "beforeTaskComplete" ? "⚠️ TDN: em beforeTaskComplete o throw NÃO interrompe a movimentação. Para bloquear, use beforeTaskSave ou beforeStateLeave." : "",
      !sig[event] && !isService ? `⚠️ Evento '${event}' fora da lista conhecida: confirme a assinatura com fluig_docs_search.` : "",
    ].filter(Boolean).join("\n");
    return text((warn ? warn + "\n\n" : "") + code);
  },
);

server.registerTool(
  "fluig_scaffold_custom_dataset",
  {
    title: "Gerar dataset customizado",
    description: "Gera um dataset customizado (createDataset) com defineStructure/onSync para sincronização mobile e tratamento de constraints.",
    inputSchema: {
      datasetId: z.string().regex(/^ds_[a-z0-9_]+$/, "Use o padrão ds_nome_em_snake_case"),
      columns: z.array(z.string()).min(1),
      restEndpoint: z.string().optional().describe("Endpoint REST de origem (ex.: /rest/api/fornecedores do Protheus)"),
    },
    annotations: { readOnlyHint: true },
  },
  async ({ datasetId, columns, restEndpoint }) => {
    const add = columns.map((c) => `    dataset.addColumn("${c}");`).join("\n");
    const struct = columns.map((c) => `    dataset.addColumn("${c}", DatasetFieldType.STRING);`).join("\n");
    const code = `// ${datasetId}.js — gerado por fluig-mcp-local
function defineStructure() {
${struct}
    dataset.setKey(["${columns[0]}"]);
}

function onSync(lastSyncDate) {
    return createDataset(null, null, null);
}

function createDataset(fields, constraints, sortFields) {
    var dataset = DatasetBuilder.newDataset();
${add}

    var filtros = {};
    if (constraints != null) {
        for (var i = 0; i < constraints.length; i++) {
            filtros[constraints[i].getFieldName()] = constraints[i].getInitialValue();
        }
    }

    try {
${
  restEndpoint
    ? `        var clientService = fluigAPI.getAuthorizeClientService();
        var resp = clientService.invoke(JSON.stringify({
            companyId: getValue("WKCompany") + "",
            serviceCode: "PROTHEUS_REST",
            endpoint: "${restEndpoint}",
            method: "get",
            timeoutService: "30"
        }));
        var itens = JSON.parse(resp.getResult()).items || [];
        for (var j = 0; j < itens.length; j++) {
            dataset.addRow([${columns.map((c) => `itens[j].${c}`).join(", ")}]);
        }`
    : "        // TODO: origem dos dados"
}
    } catch (e) {
        log.error("[${datasetId}] " + e);
        dataset = DatasetBuilder.newDataset();
        dataset.addColumn("ERRO");
        dataset.addRow([String(e)]);
    }
    return dataset;
}`;
    return text(code);
  },
);

// ---------------------------------------------------------------- prompt reutilizável
server.registerPrompt(
  "fluig_implementar_regra",
  {
    title: "Implementar regra de processo",
    description: "Fluxo guiado: inspecionar processo + formulário + dados antes de gerar código.",
    argsSchema: { processId: z.string(), regra: z.string() },
  },
  ({ processId, regra }) => ({
    messages: [
      {
        role: "user",
        content: {
          type: "text",
          text:
            `Implemente no processo ${processId} a regra: "${regra}".\n` +
            `1) Chame fluig_get_process e fluig_get_form. 2) Consulte os datasets de zoom envolvidos com fluig_query_dataset. ` +
            `3) Proponha a spec (atividade, evento, campos) e ESPERE minha aprovação. 4) Só então gere o código com fluig_scaffold_workflow_event.`,
        },
      },
    ],
  }),
);

// ================================================================ v0.2 — documentação oficial (TDN)
server.registerTool(
  "fluig_docs_search",
  {
    title: "Buscar na documentação TDN",
    description:
      "Busca (BM25) nas páginas oficiais do TDN Fluig. Use para confirmar assinaturas de API (hAPI, DatasetFactory, WCMAPI, FLUIGC), " +
      "eventos, configurações e erros conhecidos antes de afirmar algo. Retorna slug, título, URL e trecho.",
    inputSchema: { query: z.string().min(2), limit: z.number().int().min(1).max(20).default(8) },
    annotations: { readOnlyHint: true },
  },
  async ({ query, limit }) => {
    if (!tdn.available) return fail(`Base TDN não encontrada em ${tdnDir}. Defina FLUIG_TDN_DIR.`);
    return json({ query, results: tdn.search(query, limit) });
  },
);

server.registerTool(
  "fluig_docs_read",
  {
    title: "Ler página TDN",
    description: "Lê uma página do TDN pelo slug (de fluig_docs_search). Sem `section`, devolve o índice de seções + início do texto; com `section`, só aquela seção.",
    inputSchema: {
      slug: z.string(),
      section: z.string().optional().describe("Trecho do título da seção, ex.: 'beforeTaskSave'"),
      maxChars: z.number().int().min(500).max(40000).default(12000),
    },
    annotations: { readOnlyHint: true },
  },
  async ({ slug, section, maxChars }) => {
    const r = tdn.read(slug, section, maxChars);
    return r ? json(r) : fail(`Página '${slug}' não encontrada. Use fluig_docs_search.`);
  },
);

server.registerTool(
  "fluig_internal_datasets",
  {
    title: "Catálogo de datasets internos",
    description: "Lista os datasets internos documentados no TDN (id, descrição, versão mínima, colunas). Filtre por `filter` (id ou descrição).",
    inputSchema: { filter: z.string().optional() },
    annotations: { readOnlyHint: true },
  },
  async ({ filter }) => {
    let all = tdn.internalDatasets();
    if (filter) all = all.filter((d) => norm(d.id + " " + d.description).includes(norm(filter)));
    return json({ source: "https://tdn.totvs.com/display/public/fluig/Datasets+internos", count: all.length, datasets: all });
  },
);

server.registerResource(
  "tdn-page",
  new ResourceTemplate("tdn://{slug}", { list: undefined }),
  { title: "Página TDN", description: "Página da documentação oficial TDN Fluig (markdown)", mimeType: "text/markdown" },
  async (uri, { slug }) => {
    const p = tdn.get(String(slug));
    return { contents: [{ uri: uri.href, mimeType: "text/markdown", text: p ? `<!-- ${p.url} -->\n${p.body}` : "Página não encontrada" }] };
  },
);

// ================================================================ v0.2 — contexto (fonte de verdade das skills)
const listFiles = (dir: string): string[] =>
  existsSync(dir)
    ? readdirSync(dir).flatMap((f) => (statSync(join(dir, f)).isDirectory() ? listFiles(join(dir, f)) : [join(dir, f)]))
    : [];
const contextFiles = () =>
  ["context", "examples", "docs"].flatMap((d) => listFiles(join(contextDir, d))).map((f) => relative(contextDir, f).replace(/\\/g, "/"));

for (const rel of contextFiles()) {
  server.registerResource(
    `context:${rel}`,
    `fluig://pkg/${rel}`,
    { title: rel, description: "Pacote oficial fluig-agent-skills (TOTVS): contexto, exemplos e prompts de uso", mimeType: rel.endsWith(".md") ? "text/markdown" : "text/plain" },
    async (uri) => ({ contents: [{ uri: uri.href, text: readFileSync(join(contextDir, rel), "utf-8") }] }),
  );
}

server.registerTool(
  "fluig_context",
  {
    title: "Ler contexto (fonte de verdade)",
    description:
      "Lê a fonte de verdade do pacote oficial fluig-agent-skills (TOTVS): context/architecture.md, conventions.md, style-guide.md, technologies.md, " +
      "examples/** e docs/** (prompts de uso). Sem `file`, lista o que existe. Com `section`, devolve só a seção (match por título). " +
      "As refs do fluig_lint usam o formato 'arquivo § seção'.",
    inputSchema: { file: z.string().optional(), section: z.string().optional() },
    annotations: { readOnlyHint: true },
  },
  async ({ file, section }) => {
    const files = contextFiles();
    if (!file) return json({ dir: contextDir, files });
    const rel = files.find((f) => f === file || f.endsWith("/" + file) || f === file + ".md");
    if (!rel) return fail(`'${file}' não existe no contexto. Disponíveis: ${files.join(", ")}`);
    const txt = readFileSync(join(contextDir, rel), "utf-8");
    if (!section) return text(txt);
    const hs = [...txt.matchAll(/^(#{1,4})\s+(.+)$/gm)];
    const i = hs.findIndex((h) => norm(h[2]).includes(norm(section)));
    if (i < 0) return fail(`Seção '${section}' não encontrada. Seções: ${hs.map((h) => h[2]).join(" | ")}`);
    const lvl = hs[i][1].length;
    const end = hs.slice(i + 1).find((h) => h[1].length <= lvl)?.index ?? txt.length;
    return text(txt.slice(hs[i].index, end));
  },
);

// ================================================================ v0.2 — lint determinístico
const KINDS = ["auto", "dataset", "workflow-event", "form-event", "widget-js", "form-js", "ftl", "html", "css"] as const;
server.registerTool(
  "fluig_lint",
  {
    title: "Lint Fluig",
    description:
      "Checagens determinísticas em código Fluig: ES6 no Rhino (servidor), HTTP direto no servidor, eval/innerHTML sem sanitização, " +
      "i18n como objeto JS, texto fixo no markup, escape FreeMarker, cor fixa (dark mode), classes obrigatórias do widget, jQuery+ES6 misturado. " +
      "Cada achado traz linha, severidade e a regra do contexto. Use ANTES de entregar código e como primeira etapa das revisões.",
    inputSchema: {
      code: z.string().min(1),
      filename: z.string().optional().describe("Ajuda a detectar o tipo (ex.: ds_filiais.js, view.ftl, style.css)"),
      kind: z.enum(KINDS).default("auto"),
    },
    annotations: { readOnlyHint: true },
  },
  async ({ code, filename, kind }) => json(lint(code, (kind === "auto" ? detectKind(code, filename) : kind) as Kind)),
);

server.registerResource(
  "lint-rules",
  "fluig://lint/rules",
  { title: "Catálogo de regras do fluig_lint", mimeType: "application/json" },
  async (uri) => ({ contents: [{ uri: uri.href, text: JSON.stringify(RULE_CATALOG, null, 2) }] }),
);

// ================================================================ v0.2 — skills como MCP prompts
// Clientes sem suporte nativo a skills (Cursor, Copilot, etc.) recebem o mesmo playbook via prompts.
const skillNames: string[] = [];
const skillOrigins: { name: string; origin: string }[] = [];
for (const skillsDir of skillDirs.filter((d) => existsSync(d))) {
  for (const name of readdirSync(skillsDir)) {
    const p = join(skillsDir, name, "SKILL.md");
    if (skillNames.includes(name)) continue;
    if (!existsSync(p)) continue;
    const raw = readFileSync(p, "utf-8");
    const fm = raw.match(/^---\n([\s\S]*?)\n---\n/);
    const description = fm?.[1].match(/^description:\s*(.+)$/m)?.[1].replace(/^["']|["']$/g, "") ?? name;
    const body = (fm ? raw.slice(fm[0].length) : raw)
      // as skills referenciam ../../context/x.md: no MCP isso vira a tool fluig_context
      .replace(/\]\((?:\.\.\/)*(context|examples)\/([^)]+)\)/g, "](fluig://pkg/$1/$2)");
    skillNames.push(name);
    const origin = skillsDir === localSkillsDir
      ? (existsSync(join(pkgDir, "skills", name)) ? "incremento local sobre a oficial" : "skill local")
      : "oficial TOTVS";
    skillOrigins.push({ name, origin });
    server.registerPrompt(
      name,
      { title: name, description: description.slice(0, 1000), argsSchema: { alvo: z.string().optional().describe("Código, arquivo ou pedido alvo") } },
      ({ alvo }) => ({
        messages: [{
          role: "user",
          content: {
            type: "text",
            text:
              `Siga a skill abaixo. Os arquivos de contexto citados estão disponíveis pela tool fluig_context ` +
              `(arquivo + seção) ou pelos resources fluig://pkg/.... Rode fluig_lint no código final.\n\n${body}` +
              (alvo ? `\n\n---\n## Alvo\n${alvo}` : ""),
          },
        }],
      }),
    );
  }
}

server.registerTool(
  "fluig_list_skills",
  {
    title: "Listar skills",
    description: "Lista as skills disponíveis como prompts e a origem de cada uma (oficial TOTVS, incremento local, skill local).",
    inputSchema: {},
    annotations: { readOnlyHint: true },
  },
  async () => json(skillOrigins),
);

await server.connect(new StdioServerTransport());
console.error(
  `[fluig-mcp-local] pronto — ${Object.keys(db.datasets).length} datasets mock, ${Object.keys(db.processes).length} processos, ` +
  `TDN ${tdn.available ? "ok" : "ausente"}, ${contextFiles().length} arquivos de contexto, ${skillNames.length} skills como prompts (${skillOrigins.filter((s) => s.origin !== "oficial TOTVS").length} locais/incrementos)`,
);
