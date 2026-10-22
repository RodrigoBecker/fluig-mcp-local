---
title: "BPM 038 - Como faço para utilizar somente o último complemento de uma atividade?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=239026841"
scraped_at: "2026-03-09T03:53:58.813Z"
depth: 2
anchors: 6
child_links: 132
---

# BPM 038 - Como faço para utilizar somente o último complemento de uma atividade?

# Índice

# Plataforma

**Produto:**fluig

**Versão:** 1.5.X

# Ocorrência

Gostaríamos de usar somente a última observação (complemento) da atividade com o campo WKUserComment. Isto funciona na versão 1.4. Na versão 1.5 está aparecendo mais de um complemento.

# Causa

Foi alterado o comportamento.

# Solução

Esse é o real comportamento do produto. Houveram mudanças com a parte de complementos e todo histórico é retornado ao movimentar uma atividade, porém existe um desenvolvimento sobre a plataforma em que é executado um filtro trazendo somente o último complemento:

[?](#)

| `function` `beforeStateEntry(sequenceId){` `//log.info ("#####" + getValue('WKUserComment'));`  `var` `complemento = getValue(``"WKUserComment"``);` `if``(complemento){``complemento = complemento.split(``'``'``);``complemento = complemento[0];` `log.info(``"#################"``+complemento)` `}``}` |
| --- |


<!-- anchors: BPM038Comofaçoparautilizarsomenteoúltimocomplementodeumaatividade?-Índice, BPM038Comofaçoparautilizarsomenteoúltimocomplementodeumaatividade?-Plataforma, BPM038Comofaçoparautilizarsomenteoúltimocomplementodeumaatividade?-Ocorrência, BPM038Comofaçoparautilizarsomenteoúltimocomplementodeumaatividade?-Causa, BPM038Comofaçoparautilizarsomenteoúltimocomplementodeumaatividade?-Solução, highlighter_921982 -->
