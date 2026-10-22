---
title: "Identity | Aplicativos RM Empresa e Papeis - API Identity"
url: "https://tdn.totvs.com/display/public/fluig/Identity+%7C+Aplicativos+RM+Empresa+e+Papeis+-+API+Identity"
scraped_at: "2026-03-09T05:13:12.182Z"
depth: 3
anchors: 15
child_links: 48
---

# Identity | Aplicativos RM Empresa e Papeis - API Identity

## Autenticação

---

Para autenticação e obtenção do token de acesso, siga o procedimento descrito abaixo:

1. **Obtenção do OAuth Client Assertion:**

- Acesse o seguinte endpoint:[https://app.customerfi.com/rest/swagger-ui/index.html#!/oauth2/getOAuthClientAssertion_get_6](https://app.customerfi.com/rest/swagger-ui/index.html#!/oauth2/getOAuthClientAssertion_get_6)`GET /rest/v2/oauth2/clients/{clientId}/assertion`
- Informe o `clientID```correspondente à empresa. Pode ser obtido no painel de Configurações > Segurança > Token REST API
- Utilize o resultado para obtenção do `assertion`.

2. **Geração do Access Token:**

- Utilize o seguinte endpoint:[https://app.customerfi.com/rest/swagger-ui/index.html#!/oauth2/getToken_post_0](https://app.customerfi.com/rest/swagger-ui/index.html#!/oauth2/getToken_post_0)`POST/rest/v2/oauth2/auth`
- Com o `assertion```obtido no passo anterior, gere o `access_token`.

O `access_token```deverá ser informado no campo `app_key```antes de realizar as consultas seguintes:

![](/download/attachments/910677890/access_token_app_key.png?version=1&modificationDate=1738614927987&api=v2)

## APIs Úteis

---

O `companyId```utilizado na maioria das APIs pode ser obtido através de consulta no painel do Identity Configurações > Segurança > Token REST API 

### Lista todos os Usuários

`GET /rest/v2/companies/{companyId}/users`

- Podendo ser informado o PageSize ou offset para necessidade de paginação.

![](/download/attachments/910677890/users.png?version=2&modificationDate=1738677997437&api=v2)

### Lista todos os Aplicativos

`GET /rest/v2/companies/{companyId}/apps`

![](/download/attachments/910677890/apps.png?version=1&modificationDate=1738614927877&api=v2)

### Listar todas as Roles ou Empresas associadas a um Aplicativo de ERP

`GET /rest/v2/scim/v2/extensions/Resources/Companies/{companyId}/Applications/{appId}`

- Podendo ser informado o `resourceTypes```como `Role```ou `Company```se precisar retornar todos os registros de Papeis e Empresa, respectivamente.

![](/download/attachments/910677890/role.png?version=1&modificationDate=1738614927827&api=v2)

## Gerenciamento de Recursos dos Aplicativos

---

As APIs responsáveis pela manipulação de recursos dos aplicativos estão documentadas no seguinte endpoint:

[https://app.customerfi.com/rest/swagger-ui/index.html#!/scim](https://app.customerfi.com/rest/swagger-ui/index.html#!/scim)

### Consulta de Papeis e Empresas de um Aplicativo (RM ou Protheus)

Para listar os papeis atribuídos a um determinado aplicativo, utilize o seguinte endpoint:

`GET /rest/v2/scim/v2/extensions/Resources/Companies/{companyId}/Applications/{appId}`

- Filtrando apenas os Papeis informando o `resourceTypes```como `Role```ou Empresa passando `resourceTypes```como `Company`

![](/download/attachments/910677890/papeis.png?version=1&modificationDate=1738614927770&api=v2)

![](/download/attachments/910677890/external_id.png?version=1&modificationDate=1738614927720&api=v2)

### Consulta de Papeis ou Empresas Atribuídos a um Usuário

Para consultar os papeis vinculados a um usuário específico, utilize:

`GET /rest/v2/scim/v2/extensions/Entitlements/Companies/{companyId}/Users/{userId}`

- Filtrando apenas os Papeis informando o `resourceTypes```como `Role```ou Empresa passando `resourceTypes```como `Company`

![](/download/attachments/910677890/papeis_user.png?version=1&modificationDate=1738614927670&api=v2)

Para identificar a qual Empresa uma determinada Role está vinculada é possível consultar o `ext.restrictions` informado. Exemplo:

**Papel:**Acesso_H
`id`: “”

**Empresa: **
`ext.restrictions`: “”

Retorno do JSON:

[?](#)

| `{````"dateCreated": "2025-01-29_19:54:23",````"id": "",````"schemas": [````"urn:scim:schemas:core:2.0:ListResponse"````],````"deleted": "N",````"status": "A",````"itemsPerPage": 25,````"totalResults": 1,````"startIndex": 1,````"resourceClass": "com.totvslabs.idm.common.extension.Resource",````"resources": [````{````"dateCreated": "2025-01-15_00:26:01",````"id": "",````"externalId": "Acesso_H",````"meta": {````"dateCreated": "2025-01-29_19:54:23",````"resourceType": "Resource"````},````"schemas": [````"urn:scim:schemas:extension:2.0:Resource"````],````"deleted": "N",````"status": "A",````"companyId": "",````"applicationId": "",````"type": "Role",````"name": {````"en-US": "Acesso_H",````"es-ES": "Acesso_H",````"pt-BR": "Acesso_H",````"pt-PT": "Acesso_H"````},````"description": {````"en-US": "Controle%20de%20usu%C3%A1rios%2Fperfis",````"es-ES": "Controle%20de%20usu%C3%A1rios%2Fperfis",````"pt-BR": "Controle%20de%20usu%C3%A1rios%2Fperfis",````"pt-PT": "Controle%20de%20usu%C3%A1rios%2Fperfis"````},````"displayName": {````"en-US": "Controle%20de%20usu%C3%A1rios%2Fperfis",````"es-ES": "Controle%20de%20usu%C3%A1rios%2Fperfis",````"pt-BR": "Controle%20de%20usu%C3%A1rios%2Fperfis",````"pt-PT": "Controle%20de%20usu%C3%A1rios%2Fperfis"````},````"ext": {````"internalId": "Acesso_H",````"owner": "user",````"direct": "true",````"restrictions": "[\"\"]"````},````"scimResourceTypeEnum": "ROLE"````}````]` |
| --- |

### Estrutura Hierárquica das Empresas no RM

No contexto do RM:

- Os papeis são organizados hierarquicamente abaixo de uma empresa, definido o type como “Role”.
- Cada empresa possui um identificador **resourceID** e um **type** definido como "Company".

No exemplo, a empresa abaixo possui o seguinte `resourceID= 01010101010101__PR`

![](/download/attachments/910677890/resource_id.png?version=1&modificationDate=1738614927620&api=v2)

### Atribuição de Aplicativo a um Usuário

Para atribuir um aplicativo a um usuário, utilize o seguinte endpoint:

`POST /rest/v2/companies/{companyId}/users/{userId}/applications`

Ao efetuar a atribuição, é necessário informar:

- O ID da empresa do usuário
- O ID do usuário
- O ID do aplicativo a ser adicionado ao usuário
- Informe o send-events como true quando desejar que este usuário seja enviado para a fila de provisionamento do ERP. Caso o usuário já esteja ativo  no ERP, não é necessário enviá-lo novamente, então mantenha o send-events como false.

### Atribuição de Papeis a um Usuário

Para atribuir um papel a um usuário, restringindo por empresa, utilize o seguinte endpoint:

`POST /rest/v2/scim/v2/extensions/Entitlements/Companies/{companyId}/Applications/{appId}/Users/{userId}`

Ao efetuar a atribuição, é necessário informar:

- O papel que será vinculado ao usuário
- Se necessário uma empresa a qual o vínculo será restrito
- Informe o send-events como true quando desejar que este evento seja enviado para a fila de provisionamento do ERP.

[?](#)

| `{``resourceIds:[""],``modelRestriction:["01010101010101__PR"]``}` |
| --- |

![](/download/attachments/910677890/atribuir_papeis_user.png?version=1&modificationDate=1738614927567&api=v2)

Com isso será configurado apenas o Papel Acesso_H para empresa exemplo.

![](/download/attachments/910677890/papel_empresa.png?version=1&modificationDate=1738614927510&api=v2)

Se não for informado um `modelRestriction```será ativo o papel para todas as empresas presentes.

Caso seja necessário remover a Role a API é semelhante, pode ser passado o mesm

`POST/rest/v2/scim/v2/extensions/Entitlements/Companies/{companyId}/Applications/{appId}/Users/{userId}/remove`

![](/download/attachments/910677890/remover.png?version=1&modificationDate=1738614927433&api=v2)

### Explicação sobre a Estrutura de Papeis no Identity

Os papeis dentro do Identity não são entidades independentes. A estrutura segue o modelo:

- O Identity possui **usuários, grupos e aplicativos**.
- Quando há integração com um ERP (como Protheus ou RM), é criado um **aplicativo correspondente**.
- No RM, um **grupo de permissão** determina quais itens de menu um usuário pode visualizar.
- Durante a sincronização do RM com o Identity, os **grupos de permissão do RM** são enviados para o aplicativo RM criado na integração.
- Para evitar confusão com os grupos do Identity, esses grupos de permissão são referenciados com o nome de **papeis**.
- Um papel **só existe dentro de um aplicativo** e **não pode ser consultado sem referência ao aplicativo**.
- Caso um aplicativo seja removido, todos os papeis associados também são excluídos.

Portanto, **não é possível obter uma lista global de papeis** sem especificar um aplicativo ou vínculo com o aplicativo. A listagem de papeis deve ser feita por aplicativo, utilizando os endpoints descritos anteriormente.

É possível consultar os Papeis vinculados a um usuário através do endpoint abaixo, filtrando o `resourceTypes=”Role”`, porém note que todo `Role```está vinculado a um `applicationId`:

`GET /rest/v2/scim/v2/extensions/Entitlements/Companies/{companyId}/Users/{userId}`

## Documentações relacionadas

---

- [Identity | Token REST API](/display/fluig/Identity+%7C+Token+REST+API)
- [Identity | Usuários](/pages/viewpage.action?pageId=311633463)
- [Identity | Aplicativos](/display/fluig/Identity+%7C+Aplicativos)


<!-- anchors: Identity|AplicativosRMEmpresaePapeisAPIIdentity-Autenticação, Identity|AplicativosRMEmpresaePapeisAPIIdentity-APIsÚteis, Identity|AplicativosRMEmpresaePapeisAPIIdentity-ListatodososUsuários, Identity|AplicativosRMEmpresaePapeisAPIIdentity-ListatodososAplicativos, Identity|AplicativosRMEmpresaePapeisAPIIdentity-ListartodasasRolesouEmpresasassociadasaumAplicativodeERP, Identity|AplicativosRMEmpresaePapeisAPIIdentity-GerenciamentodeRecursosdosAplicativos, Identity|AplicativosRMEmpresaePapeisAPIIdentity-ConsultadePapeiseEmpresasdeumAplicativo(RMouProtheus), Identity|AplicativosRMEmpresaePapeisAPIIdentity-ConsultadePapeisouEmpresasAtribuídosaumUsuário, highlighter_306143, Identity|AplicativosRMEmpresaePapeisAPIIdentity-EstruturaHierárquicadasEmpresasnoRM, Identity|AplicativosRMEmpresaePapeisAPIIdentity-AtribuiçãodeAplicativoaumUsuário, Identity|AplicativosRMEmpresaePapeisAPIIdentity-AtribuiçãodePapeisaumUsuário, highlighter_243001, Identity|AplicativosRMEmpresaePapeisAPIIdentity-ExplicaçãosobreaEstruturadePapeisnoIdentity, Identity|AplicativosRMEmpresaePapeisAPIIdentity-Documentaçõesrelacionadas -->
