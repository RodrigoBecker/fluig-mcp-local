---
name: fluig-dev
description: Use ao criar ou alterar lógica de PROCESSO (BPM/workflow) no TOTVS Fluig — eventos de processo (beforeTaskSave, beforeStateEntry, afterTaskComplete, servicetaskN), uso de hAPI, regras por atividade e integrações em service tasks — e quando uma mudança atravessa processo + formulário + dataset. Aplica SDD com aprovação humana. Para widget, layout, form e dataset isolados, prefira as skills oficiais fluig-* (pacote fluig-agent-skills).
---

# Desenvolvimento de processos Fluig com SDD

Complementa o pacote oficial `fluig-agent-skills` (TOTVS), que cobre frontend, form e dataset
mas não eventos de processo. A fonte de verdade continua sendo o `context/` oficial; para BPM,
confirme as APIs no TDN.

## Fluxo obrigatório (human in the loop)
1. **Contexto antes de código.** Com o MCP `fluig-mcp-local` conectado:
   - `fluig_get_process` e `fluig_get_form`: IDs reais de atividade e campos.
   - `fluig_query_dataset` / `fluig_internal_datasets`: dados de zoom e datasets envolvidos.
   - `fluig_docs_search` + `fluig_docs_read` (ex.: "hAPI setCardValue", "beforeStateEntry"): assinatura e
     comportamento oficiais. **Cite a URL do TDN** em toda API usada.
   Nunca invente ID de atividade, nome de campo, coluna de dataset ou método da hAPI.
2. **Spec curta** em `specs/<processo>-<regra>.md`: atividade(s), evento, campos lidos/escritos,
   datasets, critérios de aceite (Dado/Quando/Então) e fontes TDN.
3. **Pare e peça aprovação** da spec. Não gere código antes do "ok".
4. Gere o código seguindo a skill `fluig-scaffolding-workflow-event` (eventos) e as oficiais
   `fluig-scaffolding-form` / `fluig-scaffolding-dataset` (form e dataset). Use os `fluig_scaffold_*` como ponto de partida.
5. Rode `fluig_lint` no resultado; corrija tudo com severidade `erro`.
6. Entregue listando os critérios de aceite cobertos e os achados de lint restantes.

## Convenções de processo (convenção do time)
- Eventos de processo rodam no servidor (Rhino, ES5): ver `context/technologies.md` §
  "Runtime Rhino: sintaxe rígida (não é ES6+)". `var`, `function`, concatenação com `+`.
- Constantes de atividade no topo: `var ATV_APROVACAO_GESTOR = 5;`. Nunca número solto no `if`.
- Integrações: `fluigAPI.getAuthorizeClientService()` com `serviceCode` cadastrado. Nunca credencial no código.
- Log com prefixo do processo: `log.info("[SolicitacaoCompra] ...")`. Nunca dado sensível em log.
- Validação: acumule mensagens e faça um único `throw`.

## Checklist
- [ ] IDs de atividade conferem com a versão publicada do processo
- [ ] Cada API da hAPI usada tem link do TDN na spec
- [ ] Campos pai-filho lidos com `hAPI.getChildrenIndexes`
- [ ] `fluig_lint` sem erros
- [ ] Critérios de aceite atendidos
