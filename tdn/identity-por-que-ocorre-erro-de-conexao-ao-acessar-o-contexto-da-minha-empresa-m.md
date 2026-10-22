---
title: "Identity | Por que ocorre erro de conexão ao acessar o contexto da minha empresa, mas outros estão no ar?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=329032235"
scraped_at: "2026-03-09T04:33:34.489Z"
depth: 3
anchors: 0
child_links: 57
---

# Identity | Por que ocorre erro de conexão ao acessar o contexto da minha empresa, mas outros estão no ar?

**Ocorrência**

Por que recebo um erro de conexão ao acessar o contexto da minha empresa, mas outros estão no ar? Ao acessar a URL https://[minhaempresa].fluigidentity.com ocorre o erro abaixo, mas ao tentar acessar [https://totvs.fluigidentity.com](http://totvs.fluigidentity.com), por exemplo, o acesso é realizado normalmente.

![](/download/attachments/329032235/remote_auth_error.png?version=1&modificationDate=1515427582000&api=v2)

**Causa**

O acesso ao contexto da empresa é realizado via [Desktop SSO](/display/fluig/Identity+%7C+Acesso+via+Desktop+SSO), mas um problema na rede interna do cliente está afetando a conexão.

Repare na imagem acima que a URL na barra de endereços do navegador aponta para o arquivo remote_auth.asp do Desktop SSO, que é hospedado no servidor IIS do cliente.

**Solução**

Verificar junto à equipe de infraestrutura da empresa se foi feita alguma alteração ou se há algum bloqueio na rede interna, no servidor IIS, na [configuração do Desktop SSO](/pages/viewpage.action?pageId=146969084), etc.

Dica

A disponibilidade do Identity pode ser verificada a partir do endereço [status.fluigidentity.com](http://status.fluigidentity.com).
