---
title: "ARQ - Por que retorna erro do Apache ao consultar um webservice?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=269062138"
scraped_at: "2026-03-04T03:38:33.049Z"
depth: 4
anchors: 7
child_links: 61
---

# ARQ - Por que retorna erro do Apache ao consultar um webservice?

# Índice

# Plataforma

**Produto:**TOTVS Fluig Plataforma

# Ocorrência

Por que ao consultar um determinado método do *Web Service* funciona normalmente em alguns casos, porém ao tentar efetuar uma nova consulta o erro abaixo é disparado?

**Arquivo de log**

[?](#)

| 1024 | `10:19:11,167 WARNING [org.apache.cxf.phase.PhaseInterceptorChain] (http-pool-threads - 32) Interceptor for {http://fco.ws.coi.empresa.com.br/}consultaTabelasGerais#{http://fco.ws.coi.empresa.com.br/}consultarTabelaDeVerbas has thrown exception, unwinding now: org.apache.cxf.interceptor.Fault: Could not send Message.` |
| --- | --- |

# Causa

O nome do host HTTPS URL não corresponde ao *Common Name* (CN) no certificado do servidor.

A resposta do Apache na causa está retornando uma mensagem *Exception* referente ao certificado HTTPS:

[?](#)

| `"Make sure server certificate is correct"``"The https URL hostname does not match the Common Name(CN) on the server certificate"` |
| --- |

# Solução

É necessário corrigir o nome do host HTTPS URL no certificado do servidor. Pois quando acessado o *Web Service* na barra de endereços do navegador, consta um X em HTTPS indicando que ele está incorreto.


<!-- anchors: ARQPorqueretornaerrodoApacheaoconsultarumwebservice?-Índice, ARQPorqueretornaerrodoApacheaoconsultarumwebservice?-Plataforma, ARQPorqueretornaerrodoApacheaoconsultarumwebservice?-Ocorrência, highlighter_332672, ARQPorqueretornaerrodoApacheaoconsultarumwebservice?-Causa, highlighter_525892, ARQPorqueretornaerrodoApacheaoconsultarumwebservice?-Solução -->
