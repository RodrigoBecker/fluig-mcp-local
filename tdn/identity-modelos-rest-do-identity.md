---
title: "Identity | Modelos REST do Identity"
url: "https://tdn.totvs.com/display/public/fluig/Identity+%7C+Modelos+REST+do+Identity"
scraped_at: "2026-03-09T05:12:54.798Z"
depth: 3
anchors: 27
child_links: 46
---

# Identity | Modelos REST do Identity

# Índice

# Visão Geral

---

A documentação a seguir fornece uma introdução as APIs REST V2 do Identity. As [APIs REST V2](https://app.fluigidentity.com/rest/doc/#/) seguem o padrão de autenticação servidor a servidor OAuth2.0 utilizando JWT.

# Models

---

Esta página contém uma lista de todos os *Models* utilizados pelas APIs REST Identity. Os valores mostrados para cada campo são valores padrões.

### UserAccountDTO

Informações pessoais de um usuário, independente da natureza multicontexto da conta.

[?](#)

| `{````"id": "",````"firstName": "",````"lastName": "",````"password": "",````"address": "",````"phoneNumber": "",````"emailAddress": "",````"dateCreated": "Jan 14, 2014 11:47:03 AM",````"otpPin": "",````"role": "USER",````"verifiedEmails": {},````"companyIds": [],````"companyAccounts": [],````"appStateChanged": false,````"connectedToLinkedIn": false,````"connectedToFacebook": false,````"facebookId": "",````"linkedinId": "",````"userPhones": [],````"userEmails": [],````"tempPassword": "",````"passwordSet": false,````"loginMode": "PERSONAL",````"companyId": ""``}` |
| --- |

### UserCompanyAccountDTO

Informações de um usuário dentro do contexto da empresa.

[?](#)

| `{````"id": "",````"firstName": "",````"lastName": "",````"password": "",````"address": "",````"phoneNumber": "",````"emailAddress": "",````"isADImport": false,````"appStateChanged": false,````"adToken": "",````"jobTitle": "",````"dateCreated": "Jan 14, 2014 11:47:03 AM",````"companyName": "",````"role": "USER",````"userLoginType": "CP_LOGIN",````"userOrigin": "CP_ADMIN",````"assignedAppCount": 0,````"userStatus": "INVITED",````"previousUserStatus": "INVITED",````"resetKey": "",````"companyLogoPath": "",````"enableOTP": false,````"personalId": "",````"department": "",````"customFields": {},````"companyId": ""``}` |
| --- |

### GroupDTO

Entidade que une usuários e aplicativos dentro de uma empresa.

[?](#)

| `{````"itemName": "",````"description": "",````"userCount": 0,````"applicationCount": 0,````"companyId": ""``}` |
| --- |

### CompanyDTO

Informações sobre a empresa.

[?](#)

| `{````"itemName": "",````"dateCreated": "Jan 14, 2014 11:47:03 AM",````"tokenRequired": false,````"companyStatus": "CREATED",````"emailDomains": [],````"customLogo": false,````"selfSignUp": false,````"adLoginEnabled": false,````"adUserActivation": "ACTIVATION_BY_EMAIL",````"adPasswordChangeEnabled": false,````"userActivation": "EMAIL",````"displayAdPwdReqEnabled": false,````"adPwdRequirements": "",````"oauthClientId": "",````"companyId": "",````"loginWithoutEmailEnabled":false``}` |
| --- |

### CustomFieldDTO

Campos customizados de uma empresa.

[?](#)

| `{````"name": "",````"label": "",````"value": "",````"length": "",````"type": "STRING",````"order": 2147483647,````"required": false,````"options": [],````"visibleToUsers": true,````"companyId": ""``}` |
| --- |

### JwtClaimDTO

JWT Claim, necessário para OAuth 2.0.

[?](#)

| `{````"iss": ""``}` |
| --- |

### RefreshToken

Token retornado como resposta para OAuth.

[?](#)

| `{````"refresh_token": "",````"access_token": "",````"client_id": "",````"timeIssuedInMillis": 0,````"expires_in": 3600``}` |
| --- |

### AccessToken

Token utilizado para chamadas REST.

[?](#)

| `{````"access_token": "",````"client_id": "",````"timeIssuedInMillis": 0,````"expires_in": 0``}` |
| --- |

### Application

Informação sobre um determinado aplicativo.

[?](#)

| `{  "appCategory": "",````"itemName": "",````"appDescription": "",````"extensionRev": 0.0,````"formAction": "",````"formId": "",````"formName": "",````"loginPageUrl": "",````"loginType": "FORM_LOGIN",````"passwordField": "",````"usernameField": "",````"passwordFieldIsId": false,````"usernameFieldIsId": false,````"thickAppName": "",````"submitPrefix": "",````"parentAppId": "",````"thickSSOProfile": "",````"domain": "",````"userLoginIdMapping": "USER_EMAIL",````"ssoInitType": "IDP_INITIATED",````"binding": "HTTP_REDIRECT",````"nameIdFormat": "EmailAddress",````"signed": true,````"encrypted": false,````"assertionUrl": "",````"recipient": "",````"audience": "",````"spIssuerName": "",````"provisionEnabled": false,````"entitlementEnabled": false,````"companySpecificIdSecret": false,````"provisionMode": "SCIM",````"provisionAuthType": "OAUTH2",````"provisionUsername": "",````"provisionPassword": "",````"provisionClientId": "",````"provisionClientSecret": "",````"provisionRestUrl": "",````"provisionAuthHeader": "",````"provisionAccessToken": "",````"provisionUserTempPassword": "",````"personal": false,````"browsable": false,````"isCustomApp": false,````"isCompanyApp": false,````"isGlobalApp": false,````"companyId": ""``}` |
| --- |

### UserApplicationLoginDTO

Detalhes de um usuário para um determinado aplicativo dentro de uma empresa.

[?](#)

| `{````"userId": "",````"appId": "",````"username": "",````"password": "",````"order": 2147483647,````"executablePath": "",````"isGroupAssociated": false,````"appUserId": "",````"companyId": ""``}` |
| --- |

### UserLiteDTO

Versão simplificada de UserCompanyAccountDTO para casos em que é necessário uma resposta em grandes quantidades, por exemplo, todos usuários de uma empresa.

[?](#)

| `{````"id": "",````"firstName": "",````"lastName": "",````"role": "",````"userStatus": "",````"emailAddress": "",````"previousUserStatus": "",````"jobTitle": "",````"department": "",````"companyId": ""``}` |
| --- |

### SearchResults

Resposta para consultas que geram listas como “GET em todos usuários de uma empresa”

[?](#)

| `{````"count": 0, // Número total de resultados retornados````"list": [], //Lista de models, por ex: lista de UserLiteDTO no caso de pegar todos os usuários na empresa````"totalCount": 0, // Número total de resultados baseados no critério````"offset": 0, //Offset da página requisitado pelo cliente````"pageSize": 0 //Tamanho da página requisitado pelo cliente``}` |
| --- |


<!-- anchors: Identity|ModelosRESTdoIdentity-Índice, Identity|ModelosRESTdoIdentity-VisãoGeral, Identity|ModelosRESTdoIdentity-Models, Identity|ModelosRESTdoIdentity-UserAccountDTO, highlighter_816232, Identity|ModelosRESTdoIdentity-UserCompanyAccountDTO, highlighter_104855, Identity|ModelosRESTdoIdentity-GroupDTO, highlighter_710683, Identity|ModelosRESTdoIdentity-CompanyDTO, highlighter_419710, Identity|ModelosRESTdoIdentity-CustomFieldDTO, highlighter_552225, Identity|ModelosRESTdoIdentity-JwtClaimDTO, highlighter_793077, Identity|ModelosRESTdoIdentity-RefreshToken, highlighter_501869, Identity|ModelosRESTdoIdentity-AccessToken, highlighter_650002, Identity|ModelosRESTdoIdentity-Application, highlighter_852852, Identity|ModelosRESTdoIdentity-UserApplicationLoginDTO, highlighter_413359, Identity|ModelosRESTdoIdentity-UserLiteDTO, highlighter_17973, Identity|ModelosRESTdoIdentity-SearchResults, highlighter_991119 -->
