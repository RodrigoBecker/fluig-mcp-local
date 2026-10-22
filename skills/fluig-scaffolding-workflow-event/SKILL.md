---
name: fluig-scaffolding-workflow-event
description: Gera o esqueleto de um evento de processo (workflow/BPM) do Fluig — beforeStateEntry, beforeTaskSave, afterTaskComplete, beforeStateLeave, afterProcessFinish, servicetaskN e afins — em JavaScript server-side (Rhino/ES5), usando a hAPI e getValue("WK...") com constantes de atividade e campos reais do processo. Use quando o desenvolvedor pedir para criar/iniciar um evento de processo, validar/bloquear a movimentação, preencher campos do formulário a partir do processo ou implementar uma atividade de serviço.
argument-hint: 'processo, evento e regra (ex.: "SolicitacaoCompra, beforeStateEntry: bloquear aprovação acima de 20 mil sem justificativa")'
---

# Scaffolding de Evento de Processo (workflow, server-side)

Esta skill gera o esqueleto de um evento de processo do Fluig. Complementa o pacote oficial
`fluig-agent-skills`, que não cobre BPM. Ela **não duplica** convenções: as regras de runtime vivem em
`context/technologies.md` e as APIs de processo são confirmadas na documentação oficial (TDN), referenciada abaixo.

## Objetivo

Produzir, com responsabilidade única, o **arquivo JavaScript de um evento de processo**, executado no servidor
sobre o Rhino, com a **assinatura exata** que a plataforma invoca, constantes nomeadas para as atividades do
diagrama, leitura/escrita do formulário via **hAPI** e tratamento de erro coerente com o tipo de evento
(bloquear a movimentação, sinalizar falha de serviço ou apenas registrar).

## Quando Usar

- Criar um novo evento de processo a partir de uma regra de negócio por atividade.
- Bloquear a movimentação com mensagem ao usuário (validação no servidor).
- Copiar/derivar valores entre campos do formulário durante o fluxo.
- Implementar uma **atividade de serviço** (`servicetaskN`) que integra com sistema externo.

## Entradas Esperadas

| Entrada | Descrição | Obrigatória |
|---------|-----------|-------------|
| Processo | Código do processo (ex.: `SolicitacaoCompra`) | sim |
| Evento | Nome do evento (ex.: `beforeStateEntry`, `servicetask12`) | sim |
| Regra | O que deve acontecer e em qual(is) atividade(s) | sim |
| Atividades | IDs numéricos das atividades envolvidas | não (obter via MCP) |
| Campos | Campos do formulário lidos/escritos | não (obter via MCP) |
| Serviço externo | `serviceCode` do Cadastro de Serviços, se houver integração | não |

## Contexto de Referência (Fonte de Verdade)

Leia antes de executar. Não reproduza o conteúdo aqui:

- [technologies.md](../../context/technologies.md), seção "Runtime Rhino: sintaxe rígida (não é ES6+)": eventos de
  processo são scripting server-side em **ES5**. Seção "Sem APIs de navegador; HTTP externo via Cadastro de
  Serviços": integrações por `fluigAPI.getAuthorizeClientService()`.
- TDN [Eventos de Processos](https://tdn.totvs.com/display/public/fluig/Eventos+de+Processos): lista de eventos,
  parâmetros e quando cada um dispara.
- TDN [hAPI](https://tdn.totvs.com/display/public/fluig/hAPI): métodos disponíveis nos eventos.
- TDN [Atividade de serviço](https://tdn.totvs.com/pages/releaseview.action?pageId=919050491): contrato de `servicetaskN`.
- Com o MCP `fluig-mcp-local`: `fluig_docs_search` / `fluig_docs_read` (TDN), `fluig_get_process` e
  `fluig_get_form` (IDs e campos reais), `fluig_scaffold_workflow_event` (esqueleto) e `fluig_lint` (verificação).

## Regras Aplicáveis (Resumo Executivo)

- **Assinaturas exatas** (TDN, Eventos de Processos):
  `beforeStateEntry(sequenceId)`, `afterStateEntry(sequenceId)`, `beforeStateLeave(sequenceId)`,
  `beforeTaskSave(colleagueId, nextSequenceId, userList)`, `beforeTaskComplete(colleagueId, nextSequenceId, userList)`,
  `afterTaskComplete(colleagueId, nextSequenceId, userList)`, `afterProcessCreate(processId)`,
  `afterProcessFinish(processId)`, `servicetaskN(attempt, message)`. Para outro evento, confirme no TDN antes de gerar.
- **Bloquear a movimentação:** `throw "mensagem";` nos eventos *before*. **Exceção:** em `beforeTaskComplete`
  o `throw` **não** interrompe a movimentação (TDN). Use `beforeTaskSave` ou `beforeStateLeave` para validar.
- **Atividade de serviço:** `return true;` em caso de sucesso; `throw "erro";` para sinalizar falha.
- **Variáveis do processo** via `getValue("WK...")`: `WKNumState` (atividade atual), `WKNumProces`
  (número da solicitação), `WKUser` (usuário corrente), `WKCompany`.
- **Formulário** via `hAPI.getCardValue("campo")` / `hAPI.setCardValue("campo", "valor")`. Checkbox retorna
  `"on"` ou `""`. **Não** funciona na atividade inicial do processo, só a partir da segunda (TDN, hAPI).
- **Pai x Filho no processo:** `hAPI.getChildrenIndexes("tablename")` + `hAPI.getCardValue("campo___" + i)`;
  os dados só ficam disponíveis **após salvos** (eventos *after*).
- **Depreciado:** `hAPI.setAutomaticDecision` (sem suporte desde a 1.5.9). Não use em código novo.
- **Constantes de atividade** no topo (`var ATV_APROVACAO_GESTOR = 5;`): nunca número solto no `if`.
- **Rhino/ES5:** `var` e `function`; sem arrow, template literal, `let`/`const`, classes, `Promise`/`async`.
- **Log** com prefixo do processo (`log.info("[SolicitacaoCompra] ...")`), sem dados sensíveis.

## Procedimento

1. Obter o diagrama real: `fluig_get_process` (IDs de atividade, gateways, eventos já existentes) e
   `fluig_get_form` (campos). Sem MCP, pedir esses dados ao desenvolvedor: **nunca** inventar IDs ou campos.
2. Escolher o evento certo para a regra (validação bloqueante → *before* exceto `beforeTaskComplete`;
   efeito após salvar → *after*; integração → `servicetaskN`) e confirmar a assinatura no TDN.
3. Se o evento já existir no processo, **avisar** e propor a alteração em vez de sobrescrever.
4. Gerar o arquivo com: constantes de atividade, assinatura exata, leitura de `WKNumState`, ramificação por
   atividade e a regra. Validações acumulam mensagens e fazem um único `throw`.
5. Para integração, usar o Cadastro de Serviços (`serviceCode`), `try/catch` e `throw` com mensagem útil.
6. Rodar `fluig_lint` (tipo `workflow-event`) e corrigir todos os achados de severidade `erro`.
7. Validar com o checklist abaixo e listar as fontes TDN usadas.

## Saída Esperada

- Arquivo `<processo>.<evento>.js` (ou o nome que o Fluig Studio gerar para o evento) com a função do evento.
- Constantes de atividade, regra implementada por atividade e tratamento de erro adequado ao tipo de evento.
- Lista curta: atividades afetadas, campos lidos/escritos e links TDN consultados.

## Exemplo de Uso

```javascript
// SolicitacaoCompra — beforeTaskSave
var ATV_INICIO = 4;
var ATV_APROVACAO_GESTOR = 5;
var LIMITE_ALCADA = 20000;

function beforeTaskSave(colleagueId, nextSequenceId, userList) {
    var atividade = getValue("WKNumState");
    if (atividade != ATV_INICIO) return;

    var msg = "";
    var valor = parseFloat(hAPI.getCardValue("valorTotal") || "0");
    var justificativa = String(hAPI.getCardValue("justificativa") || "");
    if (valor > LIMITE_ALCADA && justificativa.length < 50) {
        msg += "Compras acima de " + LIMITE_ALCADA + " exigem justificativa com 50+ caracteres.\n";
    }
    if (msg !== "") throw msg;
}
```

## Checklist de Validação

- [ ] Assinatura do evento idêntica à documentada no TDN.
- [ ] IDs de atividade conferidos no processo publicado e declarados como constantes.
- [ ] Validação bloqueante **não** está em `beforeTaskComplete`.
- [ ] Nenhum `getCardValue`/`setCardValue` dependente da atividade inicial.
- [ ] Pai x Filho lido com `getChildrenIndexes` apenas em eventos *after*.
- [ ] Sem `setAutomaticDecision` nem outras APIs depreciadas.
- [ ] Código ES5 (Rhino) e `fluig_lint` sem erros.
- [ ] Integrações via `serviceCode`, sem credenciais no código; log sem dados sensíveis.
