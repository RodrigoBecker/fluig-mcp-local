---
title: "Identity | Operações RAC pendentes de um usuário"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=550330927"
scraped_at: "2026-03-09T05:13:20.527Z"
depth: 3
anchors: 4
child_links: 33
---

# Identity | Operações RAC pendentes de um usuário

# Índice

# Operações RAC pendentes de um usuário

A API que mostra as operações RAC pendentes de um usuário (**/pending-user-operations**) retornava as informações necessárias para que a aplicação externa conclua a operação, mas não incluía o autor da operação no Identity, e nem a data.

Essas informações foram acrescentadas no retorno dessa API na forma do campo “**author**” e “**date**”.

Exemplo do que era retornado antes para uma operação de adicionar usuário a um papel (*role*):

**Retorno anterior**

[?](#)

| `[````{````"operationName"``:``"ADD_ENTITLEMENTS"``,````"operationId"``:``"8151c965-8e69-4c94-911f-332212b5b3c9"``,````"dataType"``:``"RAC_RESOURCES_DTO_LIST"``,````"data"``: [````{````"parentResourceId"``:``""``,````"resourceIdList"``: [````"f3dc0bf3c4e944be8a4ea9ce7926931e"````],````"linkagePath"``: [],````"modelRestriction"``: [],````"companyId"``:``""````}````],````"companyId"``:``"x3fvzp6wqhqciuka1529086244246"````}``]` |
| --- |

Exemplo do que é retornado atualmente para a operação de adicionar um usuário a um papel (*role*). Note o campo novo “**author**”:

**Retorno atual**

[?](#)

| `[````{````"operationName"``:``"ADD_ENTITLEMENTS"``,````"operationId"``:``"8151c965-8e69-4c94-911f-332212b5b3c9"``,````"dataType"``:``"RAC_RESOURCES_DTO_LIST"``,````"data"``: [````{````"parentResourceId"``:``""``,````"resourceIdList"``: [````"f3dc0bf3c4e944be8a4ea9ce7926931e"````],````"linkagePath"``: [],````"modelRestriction"``: [],````"companyId"``:``""````}````],````"author"``: {````"author"``: {````"userId"``:``"cac195b67a7811ea9633b2ba86c4567c"``,````"userEmail"``:``"admin@totvs.com"``,````"userName"``:``"TOTVS Administrator"``,````"companyId"``:``"x3fvzp6wqhqciuka1529086244246"``,````"role"``:``"COMPANY_ADMIN"``,````"roles"``: [````"COMPANY_ADMIN"````]````}````},````“date”: “2020-01-30T22:58:57+0000”````"companyId"``:``"x3fvzp6wqhqciuka1529086244246"````}``]` |
| --- |

API em questão:

- Endpoint: [https://app.fluigidentity.com/rest/v2/companies/](https://app.fluigidentity.com/rest/v2/companies/)**{COMPANY_ID}**/users/**{USER_ID}**/applications/**{APPLICATION_ID}**/pending-user-operations
- Método HTTP: **GET**

Descrição no [Swagger](https://app.fluigidentity.com/rest/swagger-ui/index.html#!/companies): *“get pending user operations for an application”*


<!-- anchors: Identity|OperaçõesRACpendentesdeumusuário-Índice, Identity|OperaçõesRACpendentesdeumusuário-OperaçõesRACpendentesdeumusuário, highlighter_577633, highlighter_216955 -->
