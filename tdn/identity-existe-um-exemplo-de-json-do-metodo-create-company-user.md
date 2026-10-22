---
title: "Identity | Existe um exemplo de JSON do método \"Create Company User\"?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=321293932"
scraped_at: "2026-03-09T04:34:20.185Z"
depth: 3
anchors: 1
child_links: 55
---

# Identity | Existe um exemplo de JSON do método "Create Company User"?

---

Segue um exemplo do JSON, com o mínimo necessário, para ser incluído no *body* do método "Create Company User".

[?](#)

| `{``"firstName":"Pedro",``"lastName":"Silva",``"emailAddress":"pedro.silva@gmail.com",````"password":"Senha@123",``"role":"USER",````"companyId":"qycshwjp78ow7fun1495133511988"``}` |
| --- |

Caso o usuário deva acessar sem e-mail, acrescentar o campo *login* em vez de *emailAddress*. Apenas um desses campos pode ser preenchido *(login* ou *emailAddress).*

Esse JSON pertence ao REST POST - /rest/v2/companies/{companyId}/users.


<!-- anchors: highlighter_689667 -->
