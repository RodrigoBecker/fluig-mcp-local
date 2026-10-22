# Merge das skills: TOTVS oficial + time

Data: 2026-10-21 · Base oficial: `fluig-agent-skills` (registry 1.0.0, testado com Fluig 2.0.0 Voyager+)

## 1. Comparação das 16 skills recebidas × repo oficial

| Resultado | Skills | Decisão |
|---|---|---|
| Idênticas byte a byte | 14 | Mantida a oficial |
| `fluig-scaffolding-form` | versão recebida é **anterior**; a oficial adicionou Pai x Filho (`tablename`, linha-base no `<tbody>`, `wdkAddChild`/`wdkRemoveChild`, consumo via `documentid` + `tablename` + `metadata#active`) | Mantida a oficial |
| `fluig-review-security` | versão recebida é **anterior**; a oficial migrou para OWASP Top 10 **2025** (A05 Injection, A02 Security Misconfiguration, A04 Cryptographic Failures) | Mantida a oficial |
| `fluig-code-review/assets` | idênticos | — |

Verificação linha a linha: **nenhuma linha existe só nas versões recebidas** além do texto que o oficial
substituiu (numeração OWASP 2021 e procedimento sem Pai x Filho). Não havia conteúdo próprio a preservar.

## 2. Incrementos do time (overlay em `skills/`)

| Skill | Tipo | Por quê |
|---|---|---|
| `fluig-scaffolding-workflow-event` | nova, categoria `bpm` | O pacote oficial praticamente não cobre BPM (1 menção a workflow). Assinaturas, `throw`, `servicetaskN(attempt, message)`, `getValue("WK…")`, `hAPI` e depreciações confirmadas no TDN, com links |
| `fluig-dev` | nova, categoria `bpm` | Orquestra SDD com aprovação humana usando o MCP; delega geração às skills oficiais e à de workflow |

Regra do overlay: **mesmo nome de uma oficial = incremento** (sobrescreve); **nome novo = skill do time**.
`vendor/fluig-agent-skills/` nunca é editado, então atualizar para uma nova versão TOTVS é trocar a pasta e
rodar `npm run pack-skills`.

## 3. Achados no pacote oficial (para reportar à TOTVS, se quiser)

- `skills/fluig-dark-mode` e `skills/fluig-style-guide-helpers` citam
  `references/helpers-and-variables-css/{css-variables.md,helper-classes.md}`, que não existem no repo.
- `examples/form/form.example.js` aponta para a seção "i18n — Formulários" de `conventions.md`; o título real é
  "Internacionalização (i18n) em formulários".
- `fluig_lint` sobre os 11 exemplos oficiais: **0 erros**; 7 alertas legítimos pelas regras do próprio pacote
  (6× texto fixo em `<th>` sem i18n em `form-parent-child.example.html`; 1× `innerHTML` com template literal em
  `form.example.js`).

## 4. Saída

- `npm run pack-skills` → `dist-skills/`: 16 oficiais + 2 do time, `context/`, `examples/`, `docs/`,
  `skills-registry.json` mesclado (categoria `bpm`) e `OVERLAY.md`.
- MCP: as 18 skills como prompts; `fluig_list_skills` mostra a origem de cada uma.
