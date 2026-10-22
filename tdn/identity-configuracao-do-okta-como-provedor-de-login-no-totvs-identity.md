---
title: "Identity | Configuração do Okta como provedor de login no TOTVS Identity"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=1036760805"
scraped_at: "2026-03-09T04:35:54.012Z"
depth: 3
anchors: 13
child_links: 27
---

# Identity | Configuração do Okta como provedor de login no TOTVS Identity

# Falando de configuração do Okta como provedor de login...

---

Essa documentação aborda os passos necessários para configurar o Okta como provedor de login no TOTVS Identity.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)
- [Passo 6](#)
- [Passo 7](#)
- [Passo 8](#)
- [Passo 9](#)

Acesse seu contexto TOTVS Identity com usuário administrador e abra o menu **Configurações > Segurança > Cadastro de provedor e clique em Cadastrar novo provedor**, selecione o tipo Generic.

**Na aba Provedor:** 

 - Preencha o campo **Nome do provedor** com o nome que será exibido na tela de login para os usuários.

**Na aba Dados do Aplicativo**:

 - Preencha o campo **Identificador do Aplicativo no Provedor (Client ID)** com o ID do aplicativo que foi criado no OKTA para acessar o TOTVS Identity;

 - Preencha o campo **ClientSecret** com a chave que foi criada no aplicativo do OKTA.

 - Marque o campo Self registration para que os usuários sejam criados no TOTVS Identity no primeiro acesso que fizerem pelo OKTA.

 - No campo **Escopos**, preencha **openid**, **profile** e **email**, que são os valores necessários para esta autenticação.

**Na aba Informações de Protocolo:**

 - Preencha o campo Tipo de protocolo com OIDC;

 - E marque o valor Authorize no campo Fluxo utilizado para autenticação.

**Na aba Endpoints:**

 - Para preencher a aba Endpoints do provedor, você precisará acessar o arquivo de well-known do seu ambiente Okta, para abrí-lo, acesse a seguinte url, substituindo o domínio pelo seu domínio na Okta: [https://meusubdominio.com/.well-known/openid-configuration](https://meusubdominio.com/.well-known/openid-configuration).

 - Essa url é aberta, não é necessário ter usuário logado para visualizar.

O formato do arquivo é conforme exemplo abaixo e ele contém algumas informações necessárias para esta configuração:

[?](#)

| `{"issuer":"https://meusubdominio.com","authorization_endpoint":"https://meusubdominio.com/oauth2/v1/authorize","token_endpoint":"https://meusubdominio.com/oauth2/v1/token","userinfo_endpoint":"https://meusubdominio.com/oauth2/v1/userinfo","registration_endpoint":"https://meusubdominio.com/oauth2/v1/clients","jwks_uri":"https://meusubdominio.com/oauth2/v1/keys","response_types_supported":["code","id_token","code id_token","code token","id_token token","code id_token token"],"response_modes_supported":["query","fragment","form_post","okta_post_message"],"grant_types_supported":["authorization_code","implicit","refresh_token","password","urn:ietf:params:oauth:grant-type:device_code","urn:openid:params:grant-type:ciba","urn:okta:params:oauth:grant-type:otp","http://auth0.com/oauth/grant-type/mfa-otp","urn:okta:params:oauth:grant-type:oob","http://auth0.com/oauth/grant-type/mfa-oob"],"subject_types_supported":["public"],"id_token_signing_alg_values_supported":["RS256"],"id_token_encryption_alg_values_supported":["RSA-OAEP-256","RSA-OAEP-384","RSA-OAEP-512"],"id_token_encryption_enc_values_supported":["A256GCM"],"scopes_supported":["openid","email","profile","address","phone","offline_access","groups"],"token_endpoint_auth_methods_supported":["client_secret_basic","client_secret_post","client_secret_jwt","private_key_jwt","none"],"claims_supported":["iss","ver","sub","aud","iat","exp","jti","auth_time","amr","idp","nonce","name","nickname","preferred_username","given_name","middle_name","family_name","email","email_verified","profile","zoneinfo","locale","address","phone_number","picture","website","gender","birthdate","updated_at","at_hash","c_hash"],"code_challenge_methods_supported":["S256"],"introspection_endpoint":"https://meusubdominio.com/oauth2/v1/introspect","introspection_endpoint_auth_methods_supported":["client_secret_basic","client_secret_post","client_secret_jwt","private_key_jwt","none"],"revocation_endpoint":"https://meusubdominio.com/oauth2/v1/revoke","revocation_endpoint_auth_methods_supported":["client_secret_basic","client_secret_post","client_secret_jwt","private_key_jwt","none"],"end_session_endpoint":"https://meusubdominio.com/oauth2/v1/logout","request_parameter_supported":true,"request_object_signing_alg_values_supported":["HS256","HS384","HS512","RS256","RS384","RS512","ES256","ES384","ES512"],"device_authorization_endpoint":"https://meusubdominio.com/oauth2/v1/device/authorize","pushed_authorization_request_endpoint":"https://meusubdominio.com/oauth2/v1/par","backchannel_token_delivery_modes_supported":["poll"],"backchannel_authentication_request_signing_alg_values_supported":["HS256","HS384","HS512","RS256","RS384","RS512","ES256","ES384","ES512"],"dpop_signing_alg_values_supported":["RS256","RS384","RS512","ES256","ES384","ES512"]}` |
| --- |

**Voltando ao Identity:**

 - Deixe o campo Chamada da API /me para busca de usuário autenticado **desmarcado;**

 - Preencha o campo **Auth URL** com o valor do campo **"authorization_endpoint"** do arquivo acima;

 - Preencha o campo **URI de troca de tokens com o Provedor**com o valor do campo **"token_endpoint";**

 - Preencha o campo **URI com os certificados do Provedor**com o valor do campo **"jwks_uri";**

 - Preencha o campo**URI com as informações dos usuários pelo Provedor**com o valor do campo******"registration_endpoint";**

 - O campo**URI com o e-mail do usuário deixe vazio.**

**Na aba Configuração do Identity:**

Seguindo para a próxima aba na configuração do Identity,**Informações de busca de autenticação:**

 - Preencha o campo**Parâmetro do provedor que contém o ID Token ou o Access Token**com o valor *id_token***;**

 - Deixe vazios os campos**Parâmetro do provedor com o Access Token, Variável com nome do usuário e Variável com sobrenome do usuário;**

 - Preencha o campo**Variável com nome completo do usuário**com o valor*****name***;**

 - Marque o parâmetro**Identificador de nome completo;**

 - O campo**E-mail do usuário, preencha com o valor***preferred_username;*

 - Deixe o campo **Code deve ser enviado por Form Param**vazio**;**

 - Marque o valor******Form Param******no campo**Como os parâmetros de autenticação são enviados para o /code.**

**Na aba Validadores de Segurança:**

 - Preencha o campo**Emissor do token padrão**com o valor do campo****"issuer" do arquivo well-known;

 - No campo **Receptor do token padrão,**preencha o valor do ID do aplicativo criado no OKTA para acessar o TOTVS Identity;

 - Após salvar a configuração, será listado na aba **Cadastro de provedores** este novo provedor criado;

 - Clique no campo  ![](/download/attachments/1036760805/image-2026-1-23_17-36-23.png?version=1&modificationDate=1769200561513&api=v2)e será copiada a URL de Redirect que deverá ser colocada no aplicativo dentro do OKTA;

 - Clique no campo  ![](/download/attachments/1036760805/image-2026-1-23_17-37-17.png?version=1&modificationDate=1769200616337&api=v2)e será possível adicionar uma imagem customizada para exibição do provedor na tela de login.

**Na aba Dados do Aplicativo:**

 - Caso seja necessário alterar o**ClientSecret deste provedor,**edite o provedor criado e preencha o campo**Alterar Senha do Aplicativo no Provedor(ClientSecret)** na aba******Dados do aplicativo**. Caso você edite os demais campos do Provedor, mas o ClientSecret se mantiver o mesmo ainda, não é necessário preencher este campo, apenas preencha quando houver necessidade de alterar o valor.

## Documentações relacionadas

---

- [Identity | Provedores](/display/fluig/Identity+%7C+Provedores)
- [Identity | Login](/display/fluig/Identity+%7C+Login)


<!-- anchors: Identity|ConfiguraçãodoOktacomoprovedordeloginnoTOTVSIdentity-FalandodeconfiguraçãodoOktacomoprovedordelogin..., Okta, Okta-872616687, Okta-872616688, Okta-872616689, Okta-872616690, Okta-872616691, highlighter_871821, Okta-872616692, Okta-872616693, Okta-872616694, Okta-872616695, Identity|ConfiguraçãodoOktacomoprovedordeloginnoTOTVSIdentity-Documentaçõesrelacionadas -->
