---
title: "WCM - Por que o erro \"403 Forbidden\" é exibido ao consultar a API do Fluig em widgets de páginas públicas?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=272715572"
scraped_at: "2026-03-09T03:37:16.769Z"
depth: 2
anchors: 6
child_links: 45
---

# WCM - Por que o erro "403 Forbidden" é exibido ao consultar a API do Fluig em widgets de páginas públicas?

# Índice

# Plataforma

**Produto:**TOTVS Fluig Plataforma

# Ocorrência

Erro "403 forbidden" ao consultar API REST do Fluig em widgets de páginas públicas, ou seja, sem usuário autenticado.

# Causa

Ao fazer uma requisição REST é necessário passar a URL completa do servidor no parâmetro URL da requisição.

# Solução

Concatenar a URL do servidor com a URL da API REST que deseja consumir. 

**Exemplo**

[?](#)

| `var` `url = WCMAPI.getServerURL();``var` `request_data = {````url: url+``'/api/public/ecm/dataset/datasets'``,````method:``'POST'``,````ajaxData: JSON.stringify(````{ name :``"ds_teste"``,````fields : [],````constraints : [{````_field :``"metadata#active"``,````_initialValue:``"true"``,````_finalValue :``"true"``,````_type: 0,````_likeSearch:``false````}],````order : []}),````data: {}``};` |
| --- |


<!-- anchors: WCMPorqueoerro"403Forbidden"éexibidoaoconsultaraAPIdoFluigemwidgetsdepáginaspúblicas?-Índice, WCMPorqueoerro"403Forbidden"éexibidoaoconsultaraAPIdoFluigemwidgetsdepáginaspúblicas?-Plataforma, WCMPorqueoerro"403Forbidden"éexibidoaoconsultaraAPIdoFluigemwidgetsdepáginaspúblicas?-Ocorrência, WCMPorqueoerro"403Forbidden"éexibidoaoconsultaraAPIdoFluigemwidgetsdepáginaspúblicas?-Causa, WCMPorqueoerro"403Forbidden"éexibidoaoconsultaraAPIdoFluigemwidgetsdepáginaspúblicas?-Solução, highlighter_420031 -->
