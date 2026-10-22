---
title: "Identity | Introdução à API REST"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=235321507"
scraped_at: "2026-03-09T05:12:50.383Z"
depth: 3
anchors: 30
child_links: 51
---

# Identity | Introdução à API REST

# Visão Geral

---

O objetivo deste guia é apresentar a API REST para desenvolvedores. A documentação a seguir fornece uma introdução às APIs REST V2 do TOTVS Identity.

#### Para quem é voltada esta documentação?

Desenvolvedores de uma empresa que seja cliente do Identity. Desenvolvedores podem consumir APIs REST básicas para criar seus próprios clientes ou para fazer uma melhor integração entre seus softwares aplicativos e o Identity.

Atenção

Esta documentação é voltada à API REST específica do TOTVS Identity. Para consultar a documentação da API do TOTVS Fluig Plataforma, acesse [Fluig API](/display/fluig/Fluig+API).

#### O que eu devo saber?

O esquema de autenticação e autorização das APIs REST V2 do Identity são baseadas no padrão de autenticação servidor a servidor OAuth 2.0 utilizando JWT (JSON Web Token). 

Dependendo do caso de uso, o cliente (empresas ou parceiros) terá suas chaves privadas dedicadas para assinar/criptografar seu token JWT e enviá-lo para autorização para conseguir um access_token e um refresh_token.

Para mais detalhes, sinta-se à vontade para pesquisar sobre OAuth 2.0 e JWT.

- [Identity API REST](https://app.fluigidentity.com/rest/doc/#/)
- [Biblioteca Java (rest-client-1.5.7.1.jar)](/download/attachments/235321507/rest-client-1.5.7.1.jar?version=1&modificationDate=1459938747000&api=v2)
- [Nova API REST TOTVS Identity (core)](https://app.fluigidentity.com/api/core/doc/#/)
- [Nova API REST TOTVS Identity (auth)](https://app.fluigidentity.com/api/auth/doc/#/)

# Plataforma

---

A plataforma REST do Identity é baseada nos padrões OAuth 2.0 com JWT (JSON Web Token) para estabelecer a comunicação servidor-a-servidor entre aplicativos.

Mais informações sobre JWT e OAuth 2.0 podem ser encontradas nos links a seguir:

- [JWT Draft](http://tools.ietf.org/html/draft-jones-oauth-jwt-bearer-04)
- [OAuth 2.0 Draft](http://tools.ietf.org/html/draft-ietf-oauth-v2-31)
- [Google’s JWT usage with OAuth2.0](https://developers.google.com/accounts/docs/OAuth2ServiceAccount)

## Escopo do Identity para APIs REST

---

O Identity foi desenvolvido ao redor do conceito de "empresas". Cada empresa possui seu próprio subdomínio, por exemplo, [https://totvs.fluigidentity.com](https://totvs.fluigidentity.com), e seu próprio conjunto de dados (Ex: aplicativos, grupos). Cada software aplicativo integrado ao Identity terá acesso **somente aos dados da empresa em que a integração foi configurada**.

Cada empresa possui um Client ID e uma chave privada, que irá permitir o acesso aos dados específicos de sua empresa utilizando nossas REST APIs.

# Começando

---

Para cada empresa são atribuídos recursos que garantem a segurança de acesso aos dados da empresa: identificador do cliente (ID do Cliente/*client Id*), identificador da empresa (ID da Empresa (ID da Empresa/*company Id*) e uma chave privada (*private key*). O administrador corporativo pode consultar esses dados através da aba **Segurança** no menu **Configuração** do Identity.

![](/download/attachments/544184329/Token-REST-API-2025.png?version=1&modificationDate=1738093512707&api=v2)

## Crie/Assine o JWT

---

### Criando JWT

Um JWT (JSON Web Token) possui vários campos (como definidos no padrão) para identificar o cliente que está fazendo a chamada. O único campo obrigatório é o campo "issuer" representado pelo atributo ["iss"](http://self-issued.info/docs/draft-ietf-oauth-json-web-token.html#issDef) no JWT. O campo "iss" deve receber o valor do **client id** da empresa.

O JSON Web Token deverá se parecer com o seguinte:

[?](#)

| `{ “iss”: “INSIRA_O_CLIENT_ID_AQUI”}` |
| --- |

### Assinando o JWT

A assinatura do token JWT demanda vários passos para criptografar e assinar partes específicas do JWT, a fim de gerar o *assertion*. Estes passos são fornecidos como parte do padrão mencionado acima.

Em condições ideais, recomendamos fortemente que sejam utilizadas bibliotecas *open source* que já estejam disponíveis para fazer a assinatura do token JWT. Uma destas bibliotecas é a spring-security-jwt (que o Identity utiliza em seu servidor).

Aqui está um exemplo de código de como criar e assinar um JWT:

[?](#)

| `private` `PrivateKey getPrivateKeyFromPk8File(String pkcs8FilePath)``throws` `fluigIdentityException``{````try````{````FileInputStream fis =``new` `FileInputStream(pkcs8FilePath);````byte``[] buf = IOUtils.toByteArray(fis);````fis.read(buf);````fis.close();````PKCS8EncodedKeySpec kspec =``new` `PKCS8EncodedKeySpec(buf);````KeyFactory kf = KeyFactory.getInstance(``"RSA"``);````return` `kf.generatePrivate(kspec);````}````catch` `(IOException | NoSuchAlgorithmException | InvalidKeySpecException ex)````{````throw` `new` `fluigIdentityException(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode(),````ex.getMessage(),``"generateAssertion clientId: "` `+ clientId);````}``}``String jwtClaim =``"{\"iss\": \"INSIRA_O_CLIENTE_ID_AQUI\"}"``;``Jwt encoded = JwtHelper.encode(jwtClaim,``new` `RsaSigner((RSAPrivateKey)``getPrivateKeyFromPk8File(``"CAMINHO_PARA_O_ARQUIVO_PKCS8_CONTENDO_A_CHAVE_PRIVADA"``));``String assertion = encoded.getEncoded();` |
| --- |

O **JwtHelper** (utilizado no código acima) é uma classe de ajuda da biblioteca **spring-security-jwt **que se encarrega de toda a criptografia base e assina o jwtClaim com a chave privada fornecida pelo desenvolvedor. O uso desta biblioteca ajuda o desenvolvedor a não se preocupar com questões de segurança e se concentrar apenas em fazer as chamadas REST.

A *string **assertion** *deve se parecer com o exemplo abaixo (três partes, cada uma separada por um ponto [.]):

**Exemplo de assertion**

[?](#)

| `eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJmZmYwZGUzOS1hNGI1LTQzOWYtODgwOC01MjIxM2ZjZTc2YjgifQ.aneQAKQ0aO60bUN5WaeG5ZFTb6L4OA_rbO0x5XEV_6pi0bk8B2oW1gegOYtp3TKIRcN1dYr550sX1BnJJgr5WhVQhyiHbGCDDIN_cj2e6uMftqEpc7df900YVm5V-jSQXJLVUJbZb0GlFcuE3Jn3Un6vBoCnziVIcnyG-u-JJ88` |
| --- |

### Enviando/publicando o JWT para o Identity

A ***assertion** *gerada no passo acima precisa ser publicada na URL de autenticação OAuth do Identity juntamente com o **grant_type**, que é definido como**urn:ietf:params:oauth:grant-type:jwt-bearer** pelos padrões JWT.

A URL para publicar estes dados é: http://{hostname}/rest/v2/oauth2/auth

O **{hostname} **para o servidor de produção do Identity será [https://app.fluigidentity.com](https://app.fluigidentity.com/)

![](/download/attachments/235321507/REST_2.png?version=1&modificationDate=1459937875000&api=v2)

O servidor do Identity irá verificar o JWT e sua assinatura e então irá responder com um JSON, onde:

- **refresh_token**: token utilizado para obter um access_token novo, quando o antigo access_token expirar

- **access_token**: token utilizando para fazer todas as chamadas API REST. O access_token faz parte do Cabeçalho de Autenticação em todas as requisições API REST

- **client_id**: REST client-id do Cliente

- **timeIssuedInMillis:** Quando o access_token/refresh_token foi requisitado, em milissegundos.

- **expires_in:** Quando o access_token expira. Atualmente, o access_token expira em 3600 segundos (1 hora)

**Resposta**

[?](#)

| `{````"refresh_token"``:``"f6b54eb7dbd549868790bd94c50ba486"``,````"access_token"``:``"21552c08d0ee48b2a3c6312e49283b36"``,````"client_id"``:``"fff0de39-a4b5-439f-8808-52213fce76b8"``,````"timeIssuedInMillis"``: 1389656667980,````"expires_in"``: 3600``}` |
| --- |

Se em algum momento o cliente perder o refresh_token, os mesmos passos acima podem ser seguidos para obter um refresh_token novo.

## Obtendo um novo Access Token com o Refresh Token fornecido

---

Assim que o access_token expirar após uma hora, o refresh_token gerado na chamada mencionada acima pode ser utilizado para obter um novo access_token. Simplesmente faça uma chamada POST do refresh_token, como exemplificado abaixo, e o servidor do Identity irá responder com um novo access_token.

A URL para publicar o refresh_token é: http://{hostname}/rest/v2/oauth2/token

![](/download/attachments/235321507/REST_3.png?version=1&modificationDate=1459937936000&api=v2)

O servidor irá responder com o seguinte JSON:

**Resposta**

[?](#)

| `{````"access_token"``:``"45c1500f1d0c449d80013adceba9946e"``,````"client_id"``:``"fff0de39-a4b5-439f-8808-52213fce76b8"``,````"timeIssuedInMillis"``: 1389657257807,````"expires_in"``: 3599``}` |
| --- |

## Fazendo as chamadas com o Access Token

---

Uma vez que o access_token for recebido pelo cliente, todas as chamadas subsequentes que precisam ser feitas para acessar os dados da empresa irão exigir o access_token como parte do Cabeçalho de Autenticação. Aqui está um exemplo utilizando o [plugin Poster](https://addons.mozilla.org/pt-br/firefox/addon/poster/) no Firefox:

### Com o cabeçalho de autenticação (access_token)

- [Chamada](#)
- [Resposta](#)

****

**Cabeçalho**

****

**Resposta**

 **Resposta com o cabeçalho de autenticação** Expand source 

[expand source](#)[?](#)

| ```{````"id"``:``"zyfmj7h41ntp556t"``,````"itemName"``:``"TOTVS LABS"``,````"faxNumber"``:``"650-666-6766"``,````"emailAddress"``:``"testCompanyAdmin@test.com"``,````"address"``:``"1161 Castro Street"``,````"city"``:``"Mountain View"``,````"country"``:``"USA"``,````"state"``:``"CA"``,````"zip"``:``"95067"``,````"phoneNumber"``:``"650-666-6766"``,````"dateCreated"``:``"Jan 13, 2014 2:42:17 PM"``,````"createdBy"``:``"7blpjw648d7ocjzo"``,````"createdByName"``:``"TOTVS Administrator"``,````"subDomainName"``:``"totvslabs.fluigidentity.com"``,````"tokenRequired"``:``false``,````"companyStatus"``:``"CREATED"``,````"emailDomains"``:[````],````"customLogo"``:``false``,````"selfSignUp"``:``false``,````"adLoginEnabled"``:``false``,````"adUserActivation"``:``"ACTIVATION_BY_EMAIL"``,````"adPasswordChangeEnabled"``:``false``,````"userActivation"``:``"EMAIL"``,````"displayAdPwdReqEnabled"``:``false``,````"adPwdRequirements"``:``""``,````"oauthClientId"``:``"fff0de39-a4b5-439f-8808-52213fce76b8"``,````"companyId"``:``"zyfmj7h41ntp556t"``}` |
| --- |

****

### Sem o cabeçalho de autenticação (access_token)

****

  **Resposta sem o cabeçalho de autenticação** Expand source

[expand source](#)[?](#)

| `{````"errorCode"``:401,````"errorMessage"``:``"Provided access token is either null or empty or does``not have permissions to access this resource. Only PARTNERS can access this``api"``,````"possibleResponsibleField"``:``"accessToken: null"``}` |
| --- |

## Autenticação para as novas APIs REST

---

Para consultar as novas APIs do TOTVS Identity, não é mais usado o Client ID da empresa no Identity, mas sim usuário e senha de login no Identity;

Acesse o endpoint [https://app.fluigidentity.com/api/auth/doc/#!/IDM_Auth_Api_-_V1/token](https://app.fluigidentity.com/api/auth/doc/#!/IDM_Auth_Api_-_V1/token) e preencha os campos *username*, *password* e *domain* (subdomínio do seu Identity):

![](/download/attachments/235321507/Capturar20.PNG?version=1&modificationDate=1586184123307&api=v2)

Após clicar em *Try it out*, o *response* será semelhante ao valor abaixo:

**Resposta**

[?](#)

| `{````"token_type"``:``"Bearer"``,````"access_token"``:``"146d5dcc023546c58932c3ee6bba735f"``,````"expires_in"``: 600,````"refresh_token"``:``"18da38039b344fc6ac0b1e269ec89f8f"``}` |
| --- |

### Geração do token com usuário com MFA

Quando o usuário escolhido possui MFA a geração de token é feita em 2 etapas, a primeira é como passo anterior porém ao clicar em *Try it out*, o *response* será semelhante ao valor abaixo:

**Resposta**

[?](#)

| `{````"code"``:``"IDM_MFA_0002"``,````"message"``:``"Multifactor authentication required - TOTP"``,````"detailedMessage"``:``""``,````"helpUrl"``:``"http://tdn.totvs.com/display/fluig/MFAException#MFAException-IDM_MFA_0002"``,````"mfa_token"``:``"8fdb4e9cdc2b465988bad06e5d85f48a"``,````"company_id"``:``"zf0y84vo717g8hjx"``}` |
| --- |

Para o segundo passo é usado o mesmo endpoint [https://app.fluigidentity.com/api/auth/doc/#!/IDM_Auth_Api_-_V1/token](https://app.fluigidentity.com/api/auth/doc/#!/IDM_Auth_Api_-_V1/token), porém deve se alterar o grant_type para "[http://fluigidentity.com/api/mfa/totp](http://fluigidentity.com/api/mfa/totp)"

![](/download/attachments/235321507/image2023-6-6_9-56-2.png?version=1&modificationDate=1686056162380&api=v2)

O campo MFA_TOKEN é o token gerado na requisição anterior e o TOTP_TOKEN é o token do aplicativo ao clicar em *Try it out*, o *response* será semelhante ao valor abaixo:

**Resposta**

[?](#)

| `{````"token_type"``:``"Bearer"``,````"access_token"``:``"146d5dcc023546c58932c3ee6bba735f"``,````"expires_in"``: 600,````"refresh_token"``:``"18da38039b344fc6ac0b1e269ec89f8f"``}` |
| --- |

Utilize o valor do *access_token* para realizar consultas nos endpoints da Nova API ([core](https://app.fluigidentity.com/api/core/doc/#/)e [auth](https://app.fluigidentity.com/api/auth/doc/#/)). O valor do *access_token* precisa ser enviado no cabeçalho da requisição, da mesma forma que a requisição para a API antiga (descrito acima), no entanto, deve utilizar o scheme [Bearer](https://tools.ietf.org/html/rfc6750#section-2.1).

Este token terá validade de 10 minutos, para renová-lo, altere o *grant_type* do endpoint para *refresh_token* e preencha o campo *refresh_token* com o valor gerado anteriormente.

****

## APIs adicionais

---

API com as principais funções do TOTVS Identity:
[https://app.fluigidentity.com/api/core/doc/](https://app.fluigidentity.com/api/core/doc/)

API com as consultas de relatórios padrão:
[https://app.fluigidentity.com/api/report/doc/](https://app.fluigidentity.com/api/report/doc/)

API com os eventos padrões de grupos, usuários e aplicativos:
[https://app.fluigidentity.com/api/events/doc/](https://app.fluigidentity.com/api/events/doc/)


<!-- anchors: Identity|IntroduçãoàAPIREST-VisãoGeral, Identity|IntroduçãoàAPIREST-Paraquemévoltadaestadocumentação?, Identity|IntroduçãoàAPIREST-Oqueeudevosaber?, Identity|IntroduçãoàAPIREST-Plataforma, Identity|IntroduçãoàAPIREST-EscopodoIdentityparaAPIsREST, Identity|IntroduçãoàAPIREST-Começando, Identity|IntroduçãoàAPIREST-Crie/AssineoJWT, Identity|IntroduçãoàAPIREST-CriandoJWT, highlighter_846190, Identity|IntroduçãoàAPIREST-AssinandooJWT, highlighter_295544, highlighter_356344, Identity|IntroduçãoàAPIREST-Enviando/publicandooJWTparaoIdentity, highlighter_591057, Identity|IntroduçãoàAPIREST-ObtendoumnovoAccessTokencomoRefreshTokenfornecido, highlighter_603987, Identity|IntroduçãoàAPIREST-FazendoaschamadascomoAccessToken, Identity|IntroduçãoàAPIREST-Comocabeçalhodeautenticação(access_token), ChamadascomAccessToken, ChamadascomAccessToken--1891405939, ChamadascomAccessToken--275674303, highlighter_24830, Identity|IntroduçãoàAPIREST-Semocabeçalhodeautenticação(access_token), highlighter_831548, Identity|IntroduçãoàAPIREST-AutenticaçãoparaasnovasAPIsREST, highlighter_69711, Identity|IntroduçãoàAPIREST-GeraçãodotokencomusuáriocomMFA, highlighter_174073, highlighter_624856, Identity|IntroduçãoàAPIREST-APIsadicionais -->
