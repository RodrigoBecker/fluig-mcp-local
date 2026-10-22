---
title: "Identity | Por que ocorre erro de permissão ao tentar utilizar o método email da API REST v2?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=272716205"
scraped_at: "2026-03-09T04:34:12.156Z"
depth: 3
anchors: 1
child_links: 56
---

# Identity | Por que ocorre erro de permissão ao tentar utilizar o método email da API REST v2?

**Ocorrência**

Estou tentando utilizar o método rest/v2/users/email para obter usuários cadastrados no meu contexto do Identity através do e-mail e está dando erro de falta de permissão para usar o mesmo:

[?](#)

| `{````"errorCode": 401,````"errorMessage": "Provided access token does not have permissions to access this resource. Only PARTNERS can access this api",````"possibleResponsibleField": "clientId: 93db5410-c4fe-48bd-9d06-0f88bab4663b"``}` |
| --- |

**Causa**

Este método da API REST v2 é restrito a parceiros.

**Solução**

Utilizar o método GET [/rest/v2/companies/{companyId}/users/email/{email}](https://app.fluigidentity.com/rest/swagger-ui/index.html#!/companies/getUserInCompanyByEmail_get_56).

O companyId (ID da Empresa) pode ser obtido na aba **Segurança** do menu de **Configurações** do Identity. Para saber mais, consulte o help [Token REST API](/display/fluig/Identity+%7C+Token+REST+API).


<!-- anchors: highlighter_436658 -->
