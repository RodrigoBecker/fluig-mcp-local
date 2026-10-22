---
title: "IDE - Configuração de autenticação com o Identity via API"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=273295605"
scraped_at: "2026-03-09T03:39:08.000Z"
depth: 2
anchors: 8
child_links: 44
---

# IDE - Configuração de autenticação com o Identity via API

# Índice

# Plataforma

**Produto:** TOTVS Fluig Plataforma integrado ao TOTVS Identity

**Versão:** 1.5.11 ou superior

**Tipo de API:** WCMAdminTenantRest

# Ocorrência

Como realizar a configuração de autenticação do TOTVS Fluig Plataforma com o TOTVS Identity através da API Pública?

# Solução

É possível realizar a integração do Identity com a plataforma através da API Pública.

**1.** O primeiro passo, é autenticar-se na plataforma com um usuário administrador (pode ser wcmadmin).

**2.** Em seguida, deve-se chamar o *endpoint* [[URL fluig]/api/public/admin/tenant/identityConfig/v2](https://api.fluig.com/resource_WCMAdminTenantRest.html#resource_WCMAdminTenantRest_setIdentityConfigurationV2_POST)**.**

**3.** O método que deve ser utilizado é do tipo POST e os parâmetros a serem informados são:

| name | type | description | constraints |
| --- | --- | --- | --- |
| name | type | description | constraints |
| configurationToken | query | identity application configuration token (Ex: "NDI6Om4zbTQxMG52MHkyNXd5cmExNDE2OTQ1MjE0OTM3"). |  |
| enableIdentity | query | ('true' to enable / 'false' to disable). Default: false. | boolean |
| identityUrl | query | Identity Base URL |  |
| useJustInTimeProvisioning | query | to provisioning users (true / false). Default: false. | boolean |

Estes parâmetros podem ser obtidos nas configurações do aplicativo "Fluig" no Identity.

Para realizar a configuração utilizando o wcmadmin é necessário que seja informado também o código da empresa e o ID da empresa.

| name | type | description |
| --- | --- | --- |
| name | type | description |
| ```
tenantId
``` | query | Identificador da empresa |
| tenantCode | query | Código da empresa. |

Estes parâmetros podem ser obtidos nas configurações da própria empresa na plataforma Fluig.

Exemplo de requisição usando administrador de empresa:

**Request**

[?](#)

| 1 | `(HOST)/api/public/admin/tenant/identityConfig/v2?configurationToken=TOKEN&enableIdentity=true&identityUrl=https://DOMINIO.IDENTITY/&useJustInTimeProvisioning=true` |
| --- | --- |

Exemplo de requisição usando wcmadmin:

**Request**

[?](#)

| 1 | `(HOST)/api/public/admin/tenant/identityConfig/v2?configurationToken=TOKEN&enableIdentity=true&identityUrl=https://DOMINIO.IDENTITY/&useJustInTimeProvisioning=true&tenantId=1&tenantCode=CODIGOEMPRESA` |
| --- | --- |

O retorno é um application/json:

**Retorno de ativação da integração**

[?](#)

| 1234 | `{````"content"``:``"Fluig Identity has been enabled with success"``,````"message"``:``null``}` |
| --- | --- |

ou

**Retorno de desativação da integração**

[?](#)

| 1234 | `{````"content"``:``"Fluig Identity has been disabled with success"``,````"message"``:``null``}` |
| --- | --- |

As alterações serão aplicadas imediatamente, não sendo necessário reiniciar o servidor.


<!-- anchors: IDEConfiguraçãodeautenticaçãocomoIdentityviaAPI-Índice, IDEConfiguraçãodeautenticaçãocomoIdentityviaAPI-Plataforma, IDEConfiguraçãodeautenticaçãocomoIdentityviaAPI-Ocorrência, IDEConfiguraçãodeautenticaçãocomoIdentityviaAPI-Solução, highlighter_915431, highlighter_603680, highlighter_685530, highlighter_513467 -->
