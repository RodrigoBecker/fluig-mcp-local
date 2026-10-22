---
title: "IDE - Mensagem \"Ocorreu um erro ao tentar conectar ao servidor do Identity.\" Como corrigir?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=224132873"
scraped_at: "2026-03-09T03:38:41.306Z"
depth: 2
anchors: 8
child_links: 46
---

# IDE - Mensagem "Ocorreu um erro ao tentar conectar ao servidor do Identity." Como corrigir?

# Índice

# Plataforma

**Produto: **TOTVS Fluig Plataforma integrado ao TOTVS Identity

**Versão:** 1.5.5

# Ocorrência

Ao tentar integrar a plataforma ao Identity seguindo a documentação de [Integração da plataforma com o Identity](/pages/viewpage.action?pageId=73080143) e testar a conexão antes de salvar, a plataforma exibe a mensagem "Ocorreu um erro ao tentar conectar ao servidor do Identity. Verifique se as informações estão corretas". Além disso, o log registra a mensagem abaixo:

- [Imagem](#)
- [Log](#)

![](/download/attachments/224132873/erroConexaoIdentity.png?version=1&modificationDate=1455544406000&api=v2)

[?](#)

| `16``:``05``:``35``,``025` `INFO``[com.totvs.technology.foundation.integration.idp.service.IdentityClientServiceBean]````(http-pool-threads -``47``) ### IDM TEST ### : Starting Identity``connection test...``16``:``05``:``56``,``056` `ERROR``[com.totvs.technology.foundation.integration.idp.service.IdentityClientServiceBean]````(http-pool-threads -``47``) ### IDM TEST ### : ERROR: java.net.ConnectException: Connection timed out: connect: com.sun.jersey.api.client.ClientHandlerException: java.net.ConnectException: Connection timed out: connect` |
| --- |

# Causa

O erro "*Connection timed out*" indica que o tempo de conexão entre a plataforma e o Identity expirou. Isso pode acontecer devido a configuração de *proxy*, por exemplo.

# Solução

Verifique se o servidor da plataforma Fluig utiliza *proxy*. Se utilizar, desabilite o *proxy* e faça um novo teste de conexão. Se conseguir se conectar no Identity e finalizar a integração, uma mensagem de sucesso será exibida. Entre em contato com o administrador da rede para verificar a configuração do *proxy*.


<!-- anchors: IDEMensagem"OcorreuumerroaotentarconectaraoservidordoIdentity."Comocorrigir?-Índice, IDEMensagem"OcorreuumerroaotentarconectaraoservidordoIdentity."Comocorrigir?-Plataforma, IDEMensagem"OcorreuumerroaotentarconectaraoservidordoIdentity."Comocorrigir?-Ocorrência, erro, erro-76580, highlighter_550054, IDEMensagem"OcorreuumerroaotentarconectaraoservidordoIdentity."Comocorrigir?-Causa, IDEMensagem"OcorreuumerroaotentarconectaraoservidordoIdentity."Comocorrigir?-Solução -->
