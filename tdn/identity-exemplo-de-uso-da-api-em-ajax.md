---
title: "Identity | Exemplo de uso da API em AJAX"
url: "https://tdn.totvs.com/display/public/fluig/Identity+%7C+Exemplo+de+uso+da+API+em+AJAX"
scraped_at: "2026-03-09T05:12:59.140Z"
depth: 3
anchors: 11
child_links: 38
---

# Identity | Exemplo de uso da API em AJAX

# Índice

# Descrição

---

O exemplo disponibilizado nesta página demonstra como solicitar o token de acesso OAuth e realizar uma chamada à API do Identity via JavaScript (AJAX).

# Autorização

---

Para utilizar os *endpoints*da API com AJAX, primeiramente é necessário solicitar autorização para obter um token de acesso (*access token*). Os passos abaixo usam o Swagger como referência para explanar esse procedimento.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)

 - Acessar a URL da API: https://[contexto].fluigidentity.com/rest/swagger-ui/index.html.

 - O [contexto] é o subdomínio da empresa no Identity. Por exemplo, se a URL de acesso da empresa no Identity for [https://minhaempresa.fluigidentity.com.](https://minhaempresa.fluigidentity.com.) o contexto é "minhaempresa".

Caso seja utilizado o ambiente de [homologação](/pages/viewpage.action?pageId=269090565), a URL da API será https://[contexto].customerfi.com/rest/swagger-ui/index.html.

![](/download/attachments/347449226/Image%2003%2026%20001.png?version=1&modificationDate=1522074356000&api=v2)

 - Expandir o serviço **oauth2**.

 - Acessar o *endpoint***GET /rest/v2/oauth2/clients/{clientId}/assertion**.

 - Preencher o parâmetro **clientId** com o [ID do Cliente](/pages/viewpage.action?pageId=273980166) da empresa.

Para obter o *clientId*, acessar o menu [Configuração](/pages/viewpage.action?pageId=273979704) → aba Segurança → REST API v2 → [ID do Cliente](/download/attachments/347449226/Image%2003%2026%20005.png?version=1&modificationDate=1522075090000&api=v2).

![](/download/attachments/347449226/Image%2003%2026%20002.png?version=1&modificationDate=1522074811000&api=v2)

 - Ao acionar ***Try it out****!***, será gerado o *Client Assertion* no *Responde Body*.

 - O valor do *Client Assertion* deve ser copiado para utilização no próximo passo.

![](/download/attachments/347449226/Image%2003%2026%20003.png?version=2&modificationDate=1522080401000&api=v2)

 - Acessar o *endpoint***POST****/rest/v2/oauth2/auth**.

 - Preencher o valor do *Client Assertion* obtido no passo anterior no campo ***assertion**.*

 - Acionar **Try it out!** para obter o token de acesso (***access token***).

![](/download/attachments/347449226/Image%2003%2026%20004.png?version=1&modificationDate=1522080609000&api=v2)

 - Para utilizar todos os *endpoints* da API do Identity, copiar o *access token* para campo **api_key** no canto superior direito da página e acionar ***Explore**.*

![](/download/attachments/347449226/Image%2003%2026%20007.png?version=2&modificationDate=1522081037000&api=v2)

# Exemplo

---

O exemplo de código-fonte a seguir demonstra como realizar o procedimento de autorização e obtenção do *access token* via AJAX, bem como a chamada de um *endpoint* para recuperar os dados de uma empresa (contexto) através da API do Identity.

O *access_token* obtido a partir da autorização na API deve ser enviado no *header* de todas as requisições.

[?](#)

| 1234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253545556575859 | `// Exemplo de código para obter as informações de uma empresa por AJAX.` `var` `clientId =``''``;``// Substituir '' pelo clientId da empresa``var` `companyId =``''``;``// Substituir '' pelo companyId da empresa``var` `domainUrl =``'https://.fluigidentity.com/'``;``/* Substituir '' pelo contexto da empresa */``var` `apiUrl = domainUrl +``'rest/v2/'``;` `// Get client assertion``function` `getClientAssertion(clientId) {````$.ajax({````url:apiUrl +``'oauth2/clients/'` `+ clientId +``'/assertion'``,````crossDomain:``true` `// se necessário cross domain````})````.done(``function``(data){````getAccessToken(data);````})````.fail(``function``(error){````console.log(error);````});``}` `// Grant a new refresh token``function` `getAccessToken(assertion) {````var` `data = {````'grant_type'``:``'urn:ietf:params:oauth:grant-type:jwt-bearer'``,````'assertion'``:assertion````};````$.ajax({````url:apiUrl +``'oauth2/auth'``,````crossDomain:``true``,``// se necessário cross domain````data:data,````type:``'POST'````})````.done(``function``(data){````getCompany(data.access_token,companyId)````})````.fail(``function``(error){````console.log(error);````});``}` `// Get a company``function` `getCompany(authorization, companyId) {````$.ajax({````url:apiUrl +``'companies/'` `+ companyId,````crossDomain:``true``,``// se necessário cross domain````headers:{````'Authorization'``:authorization````}````})````.done(``function``(data){````console.log(data);````})````.fail(``function``(error){````console.log(error);````});``}` `getClientAssertion(clientId);` |
| --- | --- |


<!-- anchors: Identity|ExemplodeusodaAPIemAJAX-Índice, Identity|ExemplodeusodaAPIemAJAX-Descrição, Identity|ExemplodeusodaAPIemAJAX-Autorização, auth, auth-872616687, auth-872616688, auth-872616689, auth-872616690, auth-872616691, Identity|ExemplodeusodaAPIemAJAX-Exemplo, highlighter_647606 -->
