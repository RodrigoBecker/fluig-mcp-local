---
title: "WCM - Por que meu arquivo Javascript não carregou?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=237386421"
scraped_at: "2026-03-09T03:37:04.155Z"
depth: 2
anchors: 4
child_links: 45
---

# WCM - Por que meu arquivo Javascript não carregou?

# Índice

# Plataforma

**Produto:**TOTVS Fluig Plataforma

# Ocorrência

Por que meu arquivo Javascript não carregou?

# Solução

Verifique no [arquivo application.info](https://tdn.totvs.com/display/fluig/Arquivo+application.info) se existe a propriedade **application.resource.js.{número}={caminho/do/seu/javascript}**. Veja abaixo um exemplo dessa propriedade, tomando como base a atual estrutura criada pelo Studio:

- **application.resource.js.1=/resources/js/minhawidget.js**

Note que propriedades do tipo "application.resource.*" não podem repetir o número. O [application.info](https://tdn.totvs.com/display/fluig/Arquivo+application.info) **não pode conter**, por exemplo, as propriedades:

- application.resource.js**.1**=...
- application.resource.css**.1**=...

O **correto** é:

- application.resource.js**.1**=...
- application.resource.css**.2**=...


<!-- anchors: WCMPorquemeuarquivoJavascriptnãocarregou?-Índice, WCMPorquemeuarquivoJavascriptnãocarregou?-Plataforma, WCMPorquemeuarquivoJavascriptnãocarregou?-Ocorrência, WCMPorquemeuarquivoJavascriptnãocarregou?-Solução -->
