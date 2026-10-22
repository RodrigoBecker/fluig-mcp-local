/**
 * fluig_lint — checagens determinísticas e baratas. Não substitui a revisão da skill:
 * entrega achados objetivos (com linha e regra) para o LLM julgar o resto.
 */
export type Kind = "dataset" | "workflow-event" | "form-event" | "widget-js" | "form-js" | "ftl" | "html" | "css";
export type Severity = "erro" | "alerta" | "info";
export interface Finding { rule: string; severity: Severity; line: number; excerpt: string; message: string; ref: string }

interface Rule {
  id: string; severity: Severity; kinds: Kind[]; message: string; ref: string;
  test: (line: string, ctx: { all: string; lines: string[]; i: number }) => boolean;
}

const SERVER: Kind[] = ["dataset", "workflow-event", "form-event"];
const CLIENT: Kind[] = ["widget-js", "form-js", "html"];
const MARKUP: Kind[] = ["ftl", "html"];

const isComment = (l: string) => /^\s*(\/\/|\*|\/\*|<#--|<!--)/.test(l);

const RULES: Rule[] = [
  // ---- servidor (Rhino / ES5)
  { id: "RHINO-LET-CONST", severity: "erro", kinds: SERVER, ref: "technologies.md § Runtime Rhino: sintaxe rígida (não é ES6+)", message: "`let`/`const` no servidor (Rhino é ES5): use `var`.", test: (l) => /(^|[^\w.])(let|const)\s+[\w$[{]/.test(l) },
  { id: "RHINO-ARROW", severity: "erro", kinds: SERVER, ref: "technologies.md § Runtime Rhino: sintaxe rígida (não é ES6+)", message: "Arrow function no servidor: use `function () {}`.", test: (l) => /=>/.test(l) },
  { id: "RHINO-TEMPLATE", severity: "erro", kinds: SERVER, ref: "technologies.md § Runtime Rhino: sintaxe rígida (não é ES6+)", message: "Template literal no servidor: concatene com `+`.", test: (l) => /`/.test(l) },
  { id: "RHINO-ES6-OTHER", severity: "erro", kinds: SERVER, ref: "technologies.md § Runtime Rhino: sintaxe rígida (não é ES6+)", message: "Recurso ES6+ (class/async/await/Promise/spread) não suportado no Rhino.", test: (l) => /\bclass\s+[A-Z]\w*|\basync\s+function|\bawait\s|\bnew Promise\b|\.\.\.[\w$[]/.test(l) },
  { id: "SRV-HTTP-DIRETO", severity: "erro", kinds: SERVER, ref: "technologies.md § Sem APIs de navegador; HTTP externo via Cadastro de Serviços", message: "Sem `fetch`/XHR no servidor: use `fluigAPI.getAuthorizeClientService()` + Cadastro de Serviços.", test: (l) => /\bfetch\s*\(|XMLHttpRequest/.test(l) },
  { id: "DS-CALLBACK-SERVIDOR", severity: "alerta", kinds: SERVER, ref: "architecture.md § API pública de Dataset — assinaturas", message: "`getDataset` no servidor é síncrono: não passe callback.", test: (l) => /getDataset\s*\([^;]*,\s*(function|\{)/.test(l) },
  { id: "SEC-CREDENCIAL", severity: "erro", kinds: [...SERVER, ...CLIENT], ref: "conventions.md § Segurança (APIs públicas)", message: "[A04:2025 Cryptographic Failures] Possível credencial no código: use `serviceCode` do Cadastro de Serviços.", test: (l) => /\b(password|senha|secret|token|apikey|api_key)\b\s*[:=]\s*["'][^"']{3,}["']/i.test(l) },
  { id: "WF-NUMERO-MAGICO", severity: "info", kinds: ["workflow-event", "form-event"], ref: "fluig-dev § Convenções (convenção do time)", message: "Comparação de atividade com número solto: declare constante (`var ATV_APROVACAO = 5;`).", test: (l) => /(WKNumState|atividade|activity|numState|sequenceId)\s*={2,3}\s*\d+/.test(l) },
  { id: "BPM-API-DEPRECIADA", severity: "alerta", kinds: ["workflow-event"], ref: "TDN § hAPI (setAutomaticDecision depreciado desde 1.5.9)", message: "`hAPI.setAutomaticDecision` está depreciado (sem suporte desde a 1.5.9).", test: (l) => /setAutomaticDecision\s*\(/.test(l) },
  { id: "LOG-DADO-SENSIVEL", severity: "alerta", kinds: SERVER, ref: "conventions.md § Segurança (APIs públicas)", message: "[A09:2025 Logging & Alerting] Log possivelmente com dado sensível (cpf/senha/token).", test: (l) => /log\.(info|warn|error|debug)\s*\(.*\b(cpf|senha|password|token)\b/i.test(l) },

  // ---- cliente
  { id: "SEC-EVAL", severity: "erro", kinds: [...CLIENT, ...SERVER], ref: "conventions.md § Segurança (APIs públicas)", message: "[A05:2025 Injection] `eval`/`new Function` com dados dinâmicos é proibido.", test: (l) => /\beval\s*\(|new\s+Function\s*\(/.test(l) },
  { id: "SEC-INNERHTML", severity: "alerta", kinds: CLIENT, ref: "conventions.md § Segurança (APIs públicas)", message: "[A05:2025 Injection] `innerHTML`/`insertAdjacentHTML`/`.html()` sem `DOMPurify.sanitize` na mesma expressão.", test: (l) => /(\.innerHTML\s*\+?=(?!\s*(''|""|``)\s*;?\s*$)|insertAdjacentHTML\s*\(|\.html\s*\(\s*[^)\s])/.test(l) && !/DOMPurify\.sanitize|validateXSS/.test(l) },
  { id: "SEC-TRIPLE-STACHE", severity: "alerta", kinds: [...CLIENT, ...MARKUP], ref: "conventions.md § Segurança (APIs públicas)", message: "[A05:2025 Injection] Mustache `{{{ }}}` desabilita escape: só com conteúdo sanitizado.", test: (l) => /\{\{\{|\{\{&/.test(l) },
  { id: "CONV-AJAX-DIRETO", severity: "alerta", kinds: CLIENT, ref: "conventions.md § Chamadas REST internas", message: "[A02:2025 Security Misconfiguration] REST interna via `$.ajax`/`fetch` direto: use `FLUIGC.ajax` (ES6+) ou `WCMAPI.Read/Create/...` (legado).", test: (l) => /\$\.(ajax|get|post)\s*\(|\bfetch\s*\(\s*["'`]\/(api|ecm|portal|process-management|content-management)/.test(l) },
  { id: "CONV-VAR-CLIENTE", severity: "info", kinds: ["widget-js"], ref: "conventions.md § JavaScript Moderno (ES6+)", message: "`var` no cliente: use `const`/`let` (exceção: variável raiz da SuperWidget).", test: (l) => /(^|[^\w.])var\s+\w/.test(l) && !/=\s*SuperWidget\.extend/.test(l) },
  { id: "I18N-OBJETO-JS", severity: "erro", kinds: CLIENT, ref: "conventions.md § Internacionalização (i18n) — Widgets e Layouts", message: "`i18n` como objeto JS não funciona: em widget use `[=i18n.getTranslation('chave')]`; em form, `i18n.translate(\"chave\")`.", test: (l) => (/\bi18n\.getTranslation\w*\s*\(/.test(l) && !/\[=\s*i18n|\$\{\s*i18n/.test(l)) || /\bi18n\s*\[|\bi18n\.(?!getTranslation|translate)\w+\b(?!\s*\()/.test(l) },
  { id: "PERF-DOM-EM-LOOP", severity: "info", kinds: CLIENT, ref: "skill fluig-optimize-performance", message: "Inserção no DOM dentro de laço: monte em `DocumentFragment` e insira uma vez.", test: (l, c) => /appendChild\s*\(|\.append\s*\(/.test(l) && c.lines.slice(Math.max(0, c.i - 4), c.i).some((x) => /\bfor\s*\(|\.forEach\s*\(/.test(x)) },


  { id: "SEC-API-LEGADA", severity: "alerta", kinds: CLIENT, ref: "conventions.md § Segurança (APIs públicas)", message: "`FLUIGC.utilities.preventXSS/decodeHTML` são legadas: use `WCMAPI.validateXSS` ou `DOMPurify.sanitize`.", test: (l) => /FLUIGC\.utilities\.(preventXSS|decodeHTML)/.test(l) },
  { id: "WIDGET-INSTANCEID-PROIBIDO", severity: "erro", kinds: ["ftl"], ref: "conventions.md § Convenções de Widget (`SuperWidget.extend`)", message: "`instanceId` só em atributos `id` — nunca em `data-*` ou `class`.", test: (l) => /(data-[\w-]+|class)\s*=\s*"[^"]*\$\{\s*instanceId/.test(l) },
  { id: "WIDGET-INSTANCEID-SEPARADOR", severity: "alerta", kinds: ["ftl"], ref: "conventions.md § Convenções de Widget (`SuperWidget.extend`)", message: "Antes do `${instanceId}` use exatamente um `_` (nunca `-` nem mais de um `_`).", test: (l) => /id\s*=\s*"([^"]*_[^"]*_|[^"]*-)\$\{\s*instanceId/.test(l) },
  { id: "WIDGET-INSTANCE-COM-ID", severity: "alerta", kinds: ["ftl"], ref: "conventions.md § Convenções de Widget (`SuperWidget.extend`)", message: "`.instance()` deve ser chamado sem o instanceId (o framework injeta).", test: (l) => /\.instance\(\s*\$\{\s*instanceId/.test(l) },

  { id: "FORM-PAIFILHO-SUFIXO-MANUAL", severity: "alerta", kinds: ["html", "form-js"], ref: "conventions.md § Tabela Pai x Filho (Form)", message: "Campo com sufixo `___n` escrito à mão: use o nome base; o Fluig gera `___<índice>` (e use `wdkAddChild`).", test: (l) => /name\s*=\s*["'][\w-]+___\d+["']/.test(l) },
  { id: "FORM-PAIFILHO-SEM-TBODY", severity: "info", kinds: ["html"], ref: "conventions.md § Tabela Pai x Filho (Form)", message: "`<table tablename>` precisa de `<tbody>` com a linha-base (template das linhas filhas).", test: (l, c) => /<table[^>]*\btablename=/.test(l) && !c.lines.slice(c.i, c.i + 15).some((x) => /<tbody/.test(x)) },

  // ---- markup (FreeMarker / HTML de formulário)
  { id: "FTL-SEM-ESCAPE", severity: "alerta", kinds: ["ftl"], ref: "conventions.md § Segurança (APIs públicas)", message: "Interpolação FreeMarker sem `?html`/`?js_string`.", test: (l) => /\$\{(?!\s*(i18n\.|(instanceId|pageCode|divMasterId|wcm\w*|\w*Class)\s*(!""\s*)?\}))[^}?]+\}/.test(l) },
  { id: "I18N-TEXTO-FIXO", severity: "alerta", kinds: MARKUP, ref: "conventions.md § Internacionalização (i18n) — Widgets e Layouts", message: "Texto visível fixo no markup: externalize para chave de i18n.", test: (l) => />\s*[A-Za-zÀ-ú][A-Za-zÀ-ú ,.:!?]{3,}\s*</.test(l) && !/\$\{|\[=|<script|<style|<option value/.test(l) },
  { id: "A11Y-IMG-ALT", severity: "alerta", kinds: MARKUP, ref: "skill fluig-review-accessibility", message: "`<img>` sem `alt`.", test: (l) => /<img\b(?![^>]*\balt=)/i.test(l) },

  // ---- CSS
  { id: "STYLE-COR-FIXA", severity: "alerta", kinds: ["css", "ftl", "html"], ref: "style-guide.md § Theming e dark mode (variáveis CSS)", message: "Cor fixa (hex/rgb): use `var(--fs-color-*)` para acompanhar tema/dark mode.", test: (l) => /(color|background|border|fill|stroke|shadow)[\w-]*\s*:[^;]*(#[0-9a-f]{3,8}\b|rgba?\()/i.test(l) && !/var\(--fs-/.test(l) },
  { id: "STYLE-IMPORTANT", severity: "info", kinds: ["css"], ref: "style-guide.md § Quando criar CSS customizado", message: "`!important`: costuma indicar briga com o Style Guide; prefira classe utilitária.", test: (l) => /!important/.test(l) },
];

/** Regras de arquivo inteiro (metadados; a checagem fica em fileRules). */
type FileRule = Omit<Rule, "test">;
const FILE_RULES: FileRule[] = [
  { id: "DS-SEM-CREATEDATASET", severity: "erro", kinds: ["dataset"], ref: "architecture.md § API pública de Dataset — assinaturas", message: "Dataset sem `createDataset(fields, constraints, sortFields)`." },
  { id: "DS-ERRO-COMO-DADO", severity: "info", kinds: ["dataset"], ref: "architecture.md § API pública de Dataset — assinaturas", message: "Sem try/catch: devolva o erro como linha/coluna `ERROR`, não exceção solta." },
  { id: "DS-CONSTRAINT-PROPRIEDADE", severity: "info", kinds: ["dataset"], ref: "architecture.md § API pública de Dataset — assinaturas", message: "Leia constraints com `getFieldName()`/`getInitialValue()` (métodos)." },
  { id: "BPM-THROW-NAO-BLOQUEIA", severity: "alerta", kinds: ["workflow-event"], ref: "TDN § Eventos de Processos — beforeTaskComplete", message: "`throw` em beforeTaskComplete NÃO interrompe a movimentação (TDN). Valide em beforeTaskSave/beforeStateLeave." },
  { id: "WIDGET-SEM-SUPERWIDGET", severity: "alerta", kinds: ["widget-js"], ref: "architecture.md § Widget (SuperWidget)", message: "Widget sem `SuperWidget.extend({...})`." },
  { id: "CONV-JQUERY-ES6-MISTURADO", severity: "alerta", kinds: ["widget-js"], ref: "conventions.md § JavaScript Moderno (ES6+)", message: "jQuery e ES6+ misturados no mesmo arquivo." },
  { id: "WIDGET-CLASSE-OBRIGATORIA", severity: "erro", kinds: ["ftl"], ref: "conventions.md § Convenções de Widget (`SuperWidget.extend`)", message: "Raiz do widget sem a classe obrigatória `fluig-style-guide`/`super-widget`/`wcm-widget-class`." },
];

function fileRules(kind: Kind, src: string): Finding[] {
  const out: Finding[] = [];
  const add = (id: string, message?: string) => {
    const r = FILE_RULES.find((x) => x.id === id)!;
    out.push({ rule: id, severity: r.severity, line: 1, excerpt: "", message: message ?? r.message, ref: r.ref });
  };
  if (kind === "dataset") {
    if (!/function\s+createDataset\s*\(/.test(src)) add("DS-SEM-CREATEDATASET");
    if (!/\btry\s*\{/.test(src)) add("DS-ERRO-COMO-DADO");
    if (/constraints\[\w+\]\.(fieldName|initialValue)\b/.test(src)) add("DS-CONSTRAINT-PROPRIEDADE");
  }
  if (kind === "workflow-event" && /function\s+beforeTaskComplete\s*\(/.test(src) && /\bthrow\b/.test(src)) add("BPM-THROW-NAO-BLOQUEIA");
  if (kind === "widget-js") {
    if (!/SuperWidget\.extend\s*\(/.test(src) && /bindings\s*:/.test(src)) add("WIDGET-SEM-SUPERWIDGET");
    if (/\$\(|jQuery\(/.test(src) && /(^|[^\w.])(const|let)\s|=>/.test(src)) add("CONV-JQUERY-ES6-MISTURADO");
  }
  if (kind === "ftl" && /super-widget|wcm-widget-class|SuperWidget/.test(src)) {
    for (const c of ["fluig-style-guide", "super-widget", "wcm-widget-class"])
      if (!src.includes(c)) add("WIDGET-CLASSE-OBRIGATORIA", `Raiz do widget sem a classe obrigatória \`${c}\`.`);
  }
  return out;
}

export function detectKind(src: string, filename = ""): Kind {
  const f = filename.toLowerCase();
  if (f.endsWith(".css")) return "css";
  if (f.endsWith(".ftl")) return "ftl";
  if (f.endsWith(".html") || f.endsWith(".htm")) return "html";
  if (/function\s+createDataset\s*\(/.test(src) || /^ds_/.test(f)) return "dataset";
  if (/function\s+(validateForm|displayFields|enableFields|inputFields|beforeProcessing)\s*\(/.test(src)) return "form-event";
  if (/hAPI\.|function\s+(beforeTaskSave|beforeTaskComplete|afterTaskSave|afterTaskComplete|beforeStateEntry|afterStateEntry|beforeStateLeave|afterStateLeave|afterProcessCreate|afterProcessFinish|servicetask\d+)\s*\(/.test(src)) return "workflow-event";
  if (f.endsWith(".js")) return /SuperWidget|\.widget\.js$/.test(src + " " + f) ? "widget-js" : "form-js";
  if (/<[a-z][\s\S]*>/i.test(src) && !/SuperWidget/.test(src)) return /<#|\$\{/.test(src) ? "ftl" : "html";
  if (/^\s*[.#]?[\w-]+\s*\{[^}]*:[^}]*\}/m.test(src) && !/function|=>/.test(src)) return "css";
  return /SuperWidget/.test(src) ? "widget-js" : "form-js";
}

export function lint(src: string, kind: Kind) {
  const lines = src.split(/\r?\n/);
  const findings: Finding[] = [...fileRules(kind, src)];
  lines.forEach((line, i) => {
    if (isComment(line)) return;
    for (const r of RULES) {
      if (!r.kinds.includes(kind)) continue;
      if (r.test(line, { all: src, lines, i }))
        findings.push({ rule: r.id, severity: r.severity, line: i + 1, excerpt: line.trim().slice(0, 140), message: r.message, ref: r.ref });
    }
  });
  const order = { erro: 0, alerta: 1, info: 2 } as const;
  findings.sort((a, b) => order[a.severity] - order[b.severity] || a.line - b.line);
  const count = (s: Severity) => findings.filter((f) => f.severity === s).length;
  return { kind, summary: { erro: count("erro"), alerta: count("alerta"), info: count("info") }, findings };
}

export const RULE_CATALOG = [
  ...RULES.map(({ id, severity, kinds, message, ref }) => ({ id, severity, kinds, message, ref, scope: "linha" })),
  ...FILE_RULES.map((r) => ({ ...r, scope: "arquivo" })),
];
