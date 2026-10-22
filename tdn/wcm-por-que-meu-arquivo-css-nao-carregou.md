---
title: "WCM - Por que meu arquivo CSS não carregou?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=237386447"
scraped_at: "2026-03-09T03:36:59.305Z"
depth: 2
anchors: 4
child_links: 44
---

# WCM - Por que meu arquivo CSS não carregou?

# Índice

# Plataforma

**Produto:**TOTVS Fluig Plataforma

# Ocorrência

Por que meu arquivo CSS não carregou?

# Solução

Da mesma forma que acontece quando o [arquivo JavaScript não carrega](/pages/viewpage.action?pageId=237386421), verifique se existe a propriedade **application.resource.css.{número}={caminho/do/seu/css}**. Na atual estrutura do Studio é esperado que propriedade seja algo como o exemplo abaixo:

- **application.resource.css.1=/resources/css/minhawidget.css**

Da mesma forma que o JavaScript, verifique se os números não se repetem.


<!-- anchors: WCMPorquemeuarquivoCSSnãocarregou?-Índice, WCMPorquemeuarquivoCSSnãocarregou?-Plataforma, WCMPorquemeuarquivoCSSnãocarregou?-Ocorrência, WCMPorquemeuarquivoCSSnãocarregou?-Solução -->
