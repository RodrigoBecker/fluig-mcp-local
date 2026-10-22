---
title: "Identity | Exceções"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=240309191"
scraped_at: "2026-03-09T05:13:30.376Z"
depth: 3
anchors: 15
child_links: 49
---

# Identity | Exceções

# Índice

# HTTP Status

---

Referência: [https://httpstatuses.com/](https://httpstatuses.com/)

## Códigos de Sucesso

| Código | Descrição | Resultado | Quando ocorre |
| --- | --- | --- | --- |
| Código | Descrição | Resultado | Quando ocorre |
| 200 | OK | Operação executada com sucesso. | Quando a operação foi realizada com sucesso, e há um retorno no corpo da resposta. |
| 201 | CREATED | Operação de criação de recursos realizada com sucesso. | Utilizado para indicar que uma criação de recursos foi feita com sucesso.Em seu retorno, deve incluir os dados que foram criados, bem como um link de acesso ao recurso recém criado. |
| 202 | ACCEPTED | Utilizado para indicar que uma requisição foi aceita pelo servidor e será processada eventualmente. | Em operações em lote, ou operações cujo processamento será feito de forma assíncrona.Essa resposta deve conter em seu retorno um link para que seja possível consultar o andamento/resultado da execução. |
| 204 | NO CONTENT | Operação executada com sucesso. | Quando a operação foi realizada com sucesso, mas não existem dados de retorno. |

## Códigos de Erros do Cliente

| Código | Descrição | Resultado | Quando ocorre |
| --- | --- | --- | --- |
| Código | Descrição | Resultado | Quando ocorre |
| 400 | BAD REQUEST | Indica um erro de sintaxe na requisição. | Quando a requisição não foi montada corretamente.Pode ocorrer devido à parâmetros informados incorretamente. |
| 401 | UNAUTHORIZED | A requisição não foi executada por falta de autorização. | Pode ser causada por :Falta de credenciais de autenticaçãoCredenciais inválidasCredenciais válidas, porém sem acesso ao recurso solicitado |

## Códigos de Erros do Servidor

| Código | Descrição | Resultado | Quando ocorre |
| --- | --- | --- | --- |
| Código | Descrição | Resultado | Quando ocorre |
| 500 | INTERNAL SERVER ERROR | Erro interno do servidor. | Algum componente do sistema está falhando, favor verificar os logs da aplicação. |

# OAuth2Exception

---

Exceções lançadas pela API de autenticação OAuth2.

### IDM_OAUTH_0001

Companhia não encontrada para o subdomínio informado.

Informe o subdomínio da companhia onde deseja obter o token de acesso. O subdomínio é a parte inicial do domínio de sua empresa. (**subdominio**.[dominio.com.br](http://dominio.com.br))

Exemplo: Para o domínio **totvs.fluigidentity.com**, o subdominio é**totvs**.

### IDM_OAUTH_0002

Acesso não autorizado.

Verifique se os dados de acesso (nome e senha) estão corretos, bem como o domínio da empresa para o qual deseja acesso.

# SecurityException

---

Exceções lançadas em virtude de validações de segurança do Identity.

### IDM_SECURITY_0001

Acesso não permitido a partir do IP de origem do *request*.

Este erro ocorre quando a empresa estiver configurada para validar o IP de origem das requisições e o IP de ode foi realizado o *request* não estiver na relação de IPs aceitos pela respectiva empresa.

# Company Exceptions

---

| Type | Code | Description |
| --- | --- | --- |
| Type | Code | Description |
| NOT_FOUND | IDM_COMPANY_00001 | Company not found |
| CAN_NOT_UPDATE_DEFAULT_COMPANY | IDM_COMPANY_00002 | Can not update the default company |
| CAN_NOT_BE_VALIDATED | IDM_COMPANY_00003 | Object cannot be validated. Check object fields. |
| DUPLICATE_COMPANY_NAME | IDM_COMPANY_00004 | Duplicate company name |
| DUPLICATE_SUBDOMAIN_NAME | IDM_COMPANY_00005 | Duplicate subdomain name |

# Desktop SSO Exceptions

---

| Type | Code | Description |
| --- | --- | --- |
| Type | Code | Description |
| NOT_FOUND | IDM_DESKTOPSSO_00001 | Desktop SSO not found |

# Role Exceptions

---

| Type | Code | Description |
| --- | --- | --- |
| Type | Code | Description |
| INVALID | IDM_ROLE_00001 | Invalid role |

# User Account Exceptions

---

| Type | Code | Description |
| --- | --- | --- |
| Type | Code | Description |
| USER_ACCOUNT_NOT_FOUND | IDM_USERACCOUNT_00001 | User account not found |

# User Company Account Exceptions

---

| Type | Code | Description |
| --- | --- | --- |
| Type | Code | Description |
| USER_COMPANY_ACCOUNT_NOT_FOUND | IDM_USERCOMPANYACCOUNT_00001 | User company account not found |


<!-- anchors: Identity|Exceções-Índice, Identity|Exceções-HTTPStatus, Identity|Exceções-CódigosdeSucesso, Identity|Exceções-CódigosdeErrosdoCliente, Identity|Exceções-CódigosdeErrosdoServidor, Identity|Exceções-OAuth2Exception, Identity|Exceções-IDM_OAUTH_0001IDM_OAUTH_0001, Identity|Exceções-IDM_OAUTH_0002IDM_OAUTH_0002, Identity|Exceções-SecurityException, Identity|Exceções-IDM_SECURITY_0001IDM_SECURITY_0001, Identity|Exceções-CompanyExceptions, Identity|Exceções-DesktopSSOExceptions, Identity|Exceções-RoleExceptions, Identity|Exceções-UserAccountExceptions, Identity|Exceções-UserCompanyAccountExceptions -->
