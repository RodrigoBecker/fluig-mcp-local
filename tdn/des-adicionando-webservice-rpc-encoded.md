---
title: "DES - Adicionando webservice RPC/encoded"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=265783369"
scraped_at: "2026-03-09T03:31:17.199Z"
depth: 2
anchors: 6
child_links: 40
---

# DES - Adicionando webservice RPC/encoded

# Índice

# Plataforma

**Produto:**TOTVS Fluig Plataforma

**Tipo de API:** Webservice

# Ocorrência

Não é possível adicionar webservice na plataforma, está ocorrendo o seguinte erro no log:

[?](#)

| `18:45:10,876 ERROR [com.datasul.technology.webdesk.integration.business.ECMWsdlToJava] (http-pool-threads - 82) WSDLToJava Error: Rpc/encoded wsdls are not supported with CXF` |
| --- |

# Causa

O modelo CXF não dá suporte a Web Services RPC/encoded.

# Solução

É necessário recriar o webservice de forma padrão ou criar o serviço via Axis.


<!-- anchors: DESAdicionandowebserviceRPC/encoded-Índice, DESAdicionandowebserviceRPC/encoded-Plataforma, DESAdicionandowebserviceRPC/encoded-Ocorrência, highlighter_224002, DESAdicionandowebserviceRPC/encoded-Causa, DESAdicionandowebserviceRPC/encoded-Solução -->
