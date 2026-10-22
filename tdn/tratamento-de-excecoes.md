---
title: "Tratamento de exceções"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=270921008"
scraped_at: "2026-03-09T02:58:57.799Z"
depth: 0
anchors: 2
child_links: 47
---

# Tratamento de exceções

As exceções podem ser tratadas nos seguintes eventos: *beforeStateEntry, beforeTaskSave* e *beforeCancelProcess*. O tratamento de exceção no evento *beforeStateEntry* pode ser utilizado na inicialização de solicitações, pois ele impede que a solicitação seja iniciada. Em contrapartida o tratamento de exceção no evento *beforeTaskSave* pode ser utilizado somente se a solicitação já estiver inicializada.

Abaixo é apresentado os modelos para utilização em cada um dos eventos:

[?](#)

| 1234567891011121314151617181920 | `function` `beforeStateEntry(sequenceId) {````var` `activity = getValue(``"WKNumState"``);````if` `(activity == 0 || activity == 1) {````//Outra condição.````throw` `"TRATAMENTO DE EXCEÇÃO"``;````}``}` `function` `beforeTaskSave(colleagueId, nextSequenceId, userList) {````var` `activity = getValue(``"WKNumState"``);````if` `(activity != 0 && activity != 1) {````//Outra condição````throw` `"TRATAMENTO DE EXCEÇÃO"``;````}``}` `function` `beforeCancelProcess(colleagueId, processId) {````//Condição.````throw` `"TRATAMENTO DE EXCEÇÃO"``;``}` |
| --- | --- |

É possível consultar o campo Observação de uma solicitação de processo, verificando se ele foi preenchido ou não. Para isto, é necessário validar a propriedade *WKUserComment* no evento *beforeTaskSave* ou no evento *beforeCancelProcess*.

**Exemplo:**

[?](#)

| 1234567891011 | `function` `beforeTaskSave(colleagueId, nextSequenceId, userList) {````if` `(getValue(``"WKUserComment"``) ==``null` `|| getValue(``"WKUserComment"``) ==``""``) {````throw` `"A observação deve ser preenchida"``;````}``}` `function` `beforeCancelProcess(colleagueId, processId) {````if` `(getValue(``"WKUserComment"``) ==``null` `|| getValue(``"WKUserComment"``) ==``""``) {````throw` `"A observação deve ser preenchida"``;````}``}` |
| --- | --- |


<!-- anchors: highlighter_773024, highlighter_647454 -->
