#!/usr/bin/env node
// Monta dist-skills/: pacote oficial (context, examples, docs, skills) + overlay das skills locais.
// Resultado pronto para copiar em .claude/ (Claude Code) mantendo os caminhos relativos ../../context.
import { cpSync, existsSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
const root = fileURLToPath(new URL("..", import.meta.url));
const pkg = join(root, "vendor", "fluig-agent-skills");
const out = join(root, "dist-skills");
rmSync(out, { recursive: true, force: true });
for (const d of ["context", "examples", "docs", "skills"]) cpSync(join(pkg, d), join(out, d), { recursive: true });
for (const f of ["CLAUDE.md", "AGENTS.md", "README.md", "LICENSE"]) if (existsSync(join(pkg, f))) cpSync(join(pkg, f), join(out, f));
const log = [];
for (const name of readdirSync(join(root, "skills"))) {
  const official = existsSync(join(pkg, "skills", name));
  cpSync(join(root, "skills", name), join(out, "skills", name), { recursive: true });
  log.push(`${official ? "incremento" : "nova      "}  ${name}`);
}
// skills-registry.json: oficial + entradas do overlay (categoria "bpm" para skills de processo)
const regPath = join(pkg, "skills-registry.json");
if (existsSync(regPath)) {
  const reg = JSON.parse(readFileSync(regPath, "utf-8"));
  reg.categories.bpm ??= { name: "BPM (time)", description: "Skills do time para processos workflow: eventos de processo, hAPI e SDD com MCP" };
  for (const name of readdirSync(join(root, "skills"))) {
    const md = readFileSync(join(root, "skills", name, "SKILL.md"), "utf-8");
    const fm = (k) => md.match(new RegExp(`^${k}:\\s*(.+)$`, "m"))?.[1].replace(/^['"]|['"]$/g, "");
    const entry = { name, description: fm("description"), "argument-hint": fm("argument-hint"), category: "bpm", path: `skills/${name}`, files: ["SKILL.md"], source: "overlay" };
    const i = reg.skills.findIndex((s) => s.name === name);
    if (i >= 0) reg.skills[i] = { ...reg.skills[i], ...entry, category: reg.skills[i].category, source: "overlay (incremento)" };
    else reg.skills.push(entry);
  }
  writeFileSync(join(out, "skills-registry.json"), JSON.stringify(reg, null, 2));
}
writeFileSync(join(out, "OVERLAY.md"), "# Overlay sobre fluig-agent-skills (TOTVS)\n\n```\n" + log.join("\n") + "\n```\n");
console.log(`dist-skills/ pronto:\n  ${log.join("\n  ")}`);
