---
title: "WCM - Por que meu widget não aparece na lista para ser adicionado a uma página?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=237386495"
scraped_at: "2026-03-09T03:36:28.547Z"
depth: 2
anchors: 4
child_links: 45
---

# WCM - Por que meu widget não aparece na lista para ser adicionado a uma página?

# Índice

# Plataforma

**Produto:**TOTVS Fluig Plataforma

# Ocorrência

Meu *widget* não aparece na lista para ser adicionado a uma página

# Solução

Verifique no [arquivo application.info](https://tdn.totvs.com/display/fluig/Arquivo+application.info) se existe a propriedade **application.uiwidget** e se o valor dela é *"true"*. Caso não exista, adicione-a com valor *"true"*. Se já existir e o valor for *"false"*, apenas mude-o para *"true"*.


<!-- anchors: WCMPorquemeuwidgetnãoaparecenalistaparaseradicionadoaumapágina?-Índice, WCMPorquemeuwidgetnãoaparecenalistaparaseradicionadoaumapágina?-Plataforma, WCMPorquemeuwidgetnãoaparecenalistaparaseradicionadoaumapágina?-Ocorrência, WCMPorquemeuwidgetnãoaparecenalistaparaseradicionadoaumapágina?-Solução -->
