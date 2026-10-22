---
title: "processes.start"
url: "https://tdn.totvs.com/display/public/fluig/processes.start"
scraped_at: "2026-03-09T05:00:28.917Z"
depth: 3
anchors: 30
child_links: 52
---

# processes.start

O método **start** do objeto [Processes](/display/fluig/Processes) inicia uma solicitação nova, podendo preencher dados e movimentar para a atividade seguinte selecionando quais os usuários irão receber a próxima atividade. 

A solicitação **sempre** será iniciada pelo usuário atual, que está movimentando a solicitação.

# Sintaxe

[?](#)

| `processes.get(processId).start({````"chosenState"``: chosenState,````"colleagues"``: colleagues,````"comments"``: comments,````"completeTask"``: completeTask,````"formData"``: formData,````"managerMode"``: managerMode``})` |
| --- |

## Parâmetros

### processId

A string do id do processo da nova solicitação.

### chosenState

```
(opcional)
```

Um número inteiro representando o sequencial da atividade para qual será encaminhado a solicitação após o início. Deve ser um sequencial de atividade existente no processo *processId* e que seja uma atividade que receba um fluxo da atividade inicial.

Caso não seja enviado ou seja enviado zero, será usado o sequencial da primeira atividade pós atividade inicial.

### colleagues

```
(opcional)
```

Uma string ou uma [lista](/pages/viewpage.action?pageId=781871855) de strings com a(s) matrícula(s) dos usuários que irão receber a atividade.

Este campo é opcional quando *completeTask* é **false** ou quando o mecanismo de atribuição da atividade destino (*chosenState*) possui apenas uma opção de destino. 

### comments

```
(opcional)
```

Uma string com comentários que serão adicionando junto com a abertura da solicitação.

Caso não seja enviado ou seja enviado  **null** ou uma string vazia, nenhum comentário será adicionado.

### completeTask

(opcional)

Um booleano informando se a tarefa vai ser movimentada ou apenas salva.

Caso *true*, a solicitação será salva com os comentários e dados de formulário informados e movimentada para a próxima atividade.

Caso não seja informado ou seja *false*, a solicitação será salva com os comentários e dados de formulário informados **mas** permanecerá na atividade inicial, sem movimentar.

### formData

```
(opcional)
```

Uma [mapa](/pages/viewpage.action?pageId=781871856) com os dados do formulário, composta por chave do tipo String com o nome do campo de formulário e valores do tipo String com o valor respectivo de cada campo.

### managerMode

```
(opcional)
```

Um booleano informando se a tarefa vai ser movimentada como usuário gestor do processo.

Caso *true*a tarefa é movimentada como usuário gestor.

Caso não seja informado ou seja *false* a tarefa é movimentada como usuário normal, responsável pela tarefa.

## Valor de retorno

Um objeto [MovementResultVO](/display/fluig/MovementResultVO) com os dados da solicitação criada

# Exemplos de uso

## Inicialização simples mantendo a solicitação na atividade inicial

[?](#)

| 12345678 | `function` `beforeStateEntry(sequenceId) {````if` `(sequenceId == 5) {` ```processes.get(``"solicitacaoCompras"``).start({````colleagues:``"adm"` `// ou ["adm"]````});````}``}` |
| --- | --- |

## Inicialização simples movimentando a solicitação para a próxima atividade

[?](#)

| 12345678 | `function` `beforeStateEntry(sequenceId) {````if` `(sequenceId == 5) {````processes.get(``"solicitacaoCompras"``).start({````colleagues:``"adm"``,``// ou ["adm"]````completeTask:``true````});````}``}` |
| --- | --- |

## Inicialização simples movimentando a solicitação para a próxima atividade, quando existe mais de uma opção

[?](#)

| 123456789 | `function` `beforeStateEntry(sequenceId) {````if` `(sequenceId == 5) {````processes.get(``"solicitacaoCompras"``).start({````chosenState: 4,````colleagues:``"adm"``,``// ou ["adm"]````completeTask:``true````});````}``}` |
| --- | --- |

## Movimentando uma tarefa que tem mecanismo de atribuição "para um Grupo"

[?](#)

| 123456789 | `function` `beforeStateEntry(sequenceId) {````if` `(sequenceId == 5) {````processes.get(``"solicitacaoCompras"``).start({````chosenState: 4,````colleagues:``"Pool:Group:Compras"``,``// ou ["Pool:Group:Compras"], onde  Compras é o id do grupo````completeTask:``true````});````}``}` |
| --- | --- |

## Movimentando uma tarefa que tem mecanismo de atribuição "para um Papel"

[?](#)

| 123456789 | `function` `beforeStateEntry(sequenceId) {````if` `(sequenceId == 5) {````processes.get(``"solicitacaoCompras"``).start({````chosenState: 4,````colleagues:``"Pool:Role:Supervisao"``,``// ou ["Pool:Role:Supervisao"], onde Supervisao é o id do papel````completeTask:``true````});````}``}` |
| --- | --- |

## Inicialização simples com dados de formulário

[?](#)

| 123456789101112 | `function` `beforeStateEntry(sequenceId) {````if` `(sequenceId == 5) {````processes.get(``"solicitacaoCompras"``).start({````colleagues:``"adm"``,``// ou ["adm"]````completeTask:``true``,````formData: {````"codigo"``:``"1"``,````"nome"``:``"João da Silva"````}````});````}``}` |
| --- | --- |

## Inicialização simples com dados de formulário com registro pai x filho

[?](#)

| 1234567891011121314 | `function` `beforeStateEntry(sequenceId) {````if` `(sequenceId == 5) {````processes.get(``"solicitacaoCompras"``).start({````colleagues:``"adm"``,``// ou ["adm"]````completeTask:``true``,````formData: {````"codigo"``:``"1"``,````"nome"``:``"João da Silva"``,````"email___1"``:``"joao@mail.com"``,````"email___2"``:``"joao.silva@mail.com"` ```}````});````}``}` |
| --- | --- |

## Adicionando comentários na inicialização da solicitação

[?](#)

| 123456789 | `function` `beforeStateEntry(sequenceId) {````if` `(sequenceId == 5) {````processes.get(``"solicitacaoCompras"``).start({````colleagues:``"adm"``,``// ou ["adm"]````comments:``"Solicitação criada automaticamente pelo fluig"``,````completeTask:``true````});````}``}` |
| --- | --- |

## Movimentando para uma atividade em consenso para múltiplos usuários

[?](#)

| 12345678 | `function` `beforeStateEntry(sequenceId) {````if` `(sequenceId == 5) {````processes.get(``"solicitacaoCompras"``).start({````colleagues: [``"adm"``,``"supervisor"``,``"gestor"` `/*, ... */``],````completeTask:``true````});````}``}` |
| --- | --- |


<!-- anchors: processes.start-Sintaxe, highlighter_910651, processes.start-Parâmetros, processes.start-processId, processes.start-chosenState, processes.start-colleagues, processes.start-comments, processes.start-completeTask, processes.start-formData, processes.start-managerMode, processes.start-Valorderetorno, processes.start-Exemplosdeuso, processes.start-Inicializaçãosimplesmantendoasolicitaçãonaatividadeinicial, highlighter_192417, processes.start-Inicializaçãosimplesmovimentandoasolicitaçãoparaapróximaatividade, highlighter_331866, processes.start-Inicializaçãosimplesmovimentandoasolicitaçãoparaapróximaatividade,quandoexistemaisdeumaopção, highlighter_866190, processes.start-Movimentandoumatarefaquetemmecanismodeatribuição"paraumGrupo", highlighter_664027, processes.start-Movimentandoumatarefaquetemmecanismodeatribuição"paraumPapel", highlighter_203326, processes.start-Inicializaçãosimplescomdadosdeformulário, highlighter_483274, processes.start-Inicializaçãosimplescomdadosdeformuláriocomregistropaixfilho, highlighter_314083, processes.start-Adicionandocomentáriosnainicializaçãodasolicitação, highlighter_707128, processes.start-Movimentandoparaumaatividadeemconsensoparamúltiplosusuários, highlighter_682866 -->
