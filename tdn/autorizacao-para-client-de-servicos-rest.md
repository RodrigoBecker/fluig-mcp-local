---
title: "Autorização para client de Serviços REST"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=239041233"
scraped_at: "2026-03-09T04:55:49.620Z"
depth: 3
anchors: 28
child_links: 63
---

# Autorização para client de Serviços REST

# Índice

# Objetivo

---

Para acessar com segurança recursos e serviços externos ao fluig (seja a partir de [Desenvolvimento de Workflow](/display/fluig/Desenvolvimento+de+Workflow) ou desenvolvimentos sobre a plataforma), pode-se utilizar o recurso **Serviços REST** no fluig.

Este consiste em um cadastro de configurações de acesso e segurança do serviço externo a ser consumido, ou seja, para cada caso de protocolo de segurança sendo OAuth 1, OAuth 2 ou *Basic* *Authentication**, *serão informados e cadastrados os *tokens* de acesso, chaves, usuário, senha, etc. 

Na atualização 1.6.2 do fluig disponibilizamos as autorizações *Custom e None Authentication. Com a Custom *é possível realizar o cadastro de acesso e segurança do serviço externo a ser consumido de forma personalizada, não obedecendo o cadastro padrão fixo do protocolo HTTP. Para acessar um serviço interno que não necessite de autenticação, utilize o *None Authentication*. 

# Cadastro de client para chamada a serviços externos

---

Para exibir o cadastro de**serviços REST****, **acesse o fluig com o usuário administrador, acione o menu **Painel de Controle**, localize o agrupador **Desenvolvimento** e acione a opção **Serviços**. O recurso contém opções para inclusão, alteração, exclusão, consulta e teste dos *clients*.

![](/download/attachments/239041233/Servi%C3%A7os%20165.png?version=1&modificationDate=1547224002357&api=v2)

Em atualizações anteriores à **1.6.5 (Liquid)**, esse recurso está disponível no agrupador **Gerais**do **Painel de Controle**. 

Dependendo do *client* de serviço a ser cadastrado, pode-se utilizar mecanismos de autenticação distintos, como OAuth 1, OAuth 2, *Basic, Custom*e até sem autenticação, com o*NONE*. Para cada tipo de autenticação existem informações específicas, que deverão ser preenchidas.

Importante!

A escolha do protocolo a ser utilizado fica a cargo do cliente, bem como a obtenção dos *tokens* e demais informações necessárias para o cadastro do *client*.

## Métodos HTTP suportados

---

- Para tipo de autorização OAuth 1, os métodos HTTP disponíveis são: *PUT, POST, GET, DELETE*.
- Para tipo de autorização OAuth 2, os métodos HTTP disponíveis são: *PUT, POST, GET, DELETE, PATCH*.
- Para tipo de autorização *Basic*, os métodos HTTP disponíveis são: *PUT, POST, GET, DELETE, PATCH*.
- Para tipo de autorização *Custom*, os métodos HTTP disponíveis são: *PUT, POST, GET, DELETE, PATCH*.
- Em Nenhuma Autorização (None), os métodos HTTP disponíveis são: *PUT, POST, GET, DELETE, PATCH*.

## OAuth 1

---

- [Cadastro](#)
- [Imagem](#)

 - Para cadastrar *client* com o tipo de autorização OAuth 1, informar os campos:

| Campo | Condição |
| --- | --- |
| Campo | Condição |
| Código do Serviço | Obrigatório |
| Domínio | Obrigatório |
| Tipo de Autenticação | Obrigatório |
| Consumer Key | Obrigatório |
| Consumer Secret | Obrigatório |
| Token de acesso | Obrigatório |
| Token secreto | Obrigatório |
| URL Token de acesso | Obrigatório |
| URL solicitação de Token | Obrigatório |
| URL Autorização de Usuário | Obrigatório |
| URL para teste de Serviço | Opcional |

![](/download/attachments/239041233/image2016-6-17%208%3A55%3A15.png?version=1&modificationDate=1466160933000&api=v2)

![](/download/attachments/239041233/image2016-6-17%208%3A55%3A51.png?version=1&modificationDate=1466160969000&api=v2)

## OAuth 2

---

- [Cadastro](#)
- [Imagem](#)

O uso de Refresh Token e da URL Refresh Token se fazem obrigatório para o OAuth 2.0 quando utilizado com um access Token passivo de expiração.

 - Para cadastrar *client* com o tipo de autorização OAuth 2, informar os campos:

| Campo | Condição |
| --- | --- |
| Campo | Condição |
| Código do Serviço | Obrigatório |
| Domínio | Obrigatório |
| Tipo de Autenticação | Obrigatório |
| Id Cliente | Obrigatório |
| Client Secret | Obrigatório |
| Refresh Token | Apenas se disponibilizado pelo Serviço |
| Token de acesso | Obrigatório |
| URL Refresh Token | Apenas se disponibilizado pelo Serviço |
| URL para teste de Serviço | Opcional |

Nota

Para o OAuth 2 utilizamos a autenticação do tipo Baerer

![](/download/attachments/239041233/cadastro_1.png?version=1&modificationDate=1466528118000&api=v2)

![](/download/attachments/239041233/cadastro_2.png?version=1&modificationDate=1466528185000&api=v2)

## Basic Authentication

---

- [Cadastro](#)
- [Imagem](#)

 - Para cadastrar *client* com o tipo de autorização *Basic*, informar os campos:

| Campo | Condição |
| --- | --- |
| Campo | Condição |
| Código do Serviço | Obrigatório |
| Domínio | Obrigatório |
| Tipo de Autenticação | Obrigatório |
| Usuário | Obrigatório |
| Senha | Obrigatório |
| Confirmação da Senha | Obrigatório |
| URL para teste do Serviço | Opcional |

![](/download/attachments/239041233/image2016-6-17%209%3A20%3A29.png?version=1&modificationDate=1466162447000&api=v2)

## Custom Authentication

---

- [Cadastro](#)
- [Imagem](#)

 - Para cadastrar *client* com o tipo de autorização *Custom*, informar os campos:

| Campo | Condição |
| --- | --- |
| Campo | Condição |
| Código do Serviço | Obrigatório |
| Domínio | Obrigatório |
| Tipo de Autenticação | Obrigatório |
| Personalizado | Obrigatório |
| URL para teste do Serviço | Opcional |

![](/download/attachments/239041233/customAuthentication.jpg?version=1&modificationDate=1506459368000&api=v2)

## None Authentication

---

- [Cadastro](#)
- [Imagem](#)

 - Para cadastrar *client* com o tipo Nenhuma *(None*) autorização, informar os campos:

| Campo | Condição |
| --- | --- |
| Campo | Condição |
| Código do Serviço | Obrigatório |
| Domínio | Obrigatório |
| Tipo de Autenticação | Obrigatório |
| URL para teste do Serviço | Opcional |

![](/download/attachments/239041233/Image%209.jpg?version=1&modificationDate=1506459368000&api=v2)

**

# Testando configurações de autorização do client cadastrado

---

Após o cadastro do *client*, é possível testar as configurações de acesso utilizando a URL para teste do Serviço (*Endpoint GET*) cadastrado. Basta selecionar o *client* e clicar no botão** Testar Serviço:**

![](/download/attachments/239041233/TesteServi%C3%A7oRest.PNG?version=1&modificationDate=1511292552000&api=v2)

# Consumindo o serviço com autenticação OAuth 1, OAuth 2, Basic Authentication, Custom Authentication e None Authentication

---

### Chamada via JavaScript

Para consumo do serviço a partir do [desenvolvimento de *workflows*](/display/fluig/Desenvolvimento+de+Workflow) ou de desenvolvimento sobre a plataforma, deve-se informar os seguintes parâmetros no Javascript:

#### Como montar os parâmetros?

Para envio dos parâmetros no JSON, é obrigatório utilizar o nome das chaves conforme descrito abaixo.

- ***companyId:** Id da empresa. (sempre com o valor: getValue("WKCompany") + '') em versões recentes este parâmetro é opcional.*
- **serviceCode:** Chave única cadastrada.
- **endpoint:** *Endpoint* que será chamado.
- **timeoutService:** definir limite de tempo (em segundos) durante a chamada ao serviço, parâmetro opcinal.

Para *endpoint*'s que recebem QueryParam e PathParam, os parâmetros devem ser incluídos diretamente no *endpoint*. (endpoint : '/api/public/2.0/users/create?queryParam=exemple',)

- **method:** Método HTTP do serviço. (opcional, padrão sendo GET)
- **params:** Existem duas maneiras de utilizar este parâmetro, sendo: **params** utilizado para passar o valor em JSON e **strParams**, no caso da utilização deste, o valor a ser passado precisa estar em String. 
- **options:** Parâmetros em formato JSON para configuração do *request* (se o mesmo não for definido ele vai com as opções padrões que seria encoding: UTF-8 e mediaType: application/json).
- **headers:** Parâmetros em formato JSON para configuração do *header*do*request*

**

Para habilitar a utilização de serviços REST pelo protocolo SSL, na propriedade **options**é necessário informar **useSSL: true.**

#### Exemplo de chamada aos serviços com HTTP methodPOST no JavaScript do desenvolvimento

[?](#)

| 1234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253545556575859606162636465666768 | `try``{````var` `clientService = fluigAPI.getAuthorizeClientService();````var` `data = {````companyId : getValue(``"WKCompany"``) +``''``,````serviceCode :``'bamboo'``,````endpoint :``'/api/public/2.0/users/create'``,````method :``'post'``,``// 'delete', 'patch', 'put', 'get'````timeoutService:``'100'``,``// segundos````params : {````login :``'authorize.client'``,````email :``'authorize.client@fluig.com'``,````code :``'authorize.client'``,````firstName :``'authorize'``,````lastName :``'client'``,````fullName :``'authorize client'``,````password :``'123'``,````extData :{````'addicional-data'``:``'123456'````}````},````options : {````encoding :``'UTF-8'``,````mediaType:``'application/json'``,````useSSL :``true````},````headers: {````Content-Type:``'application/json;charset=UTF-8'````}````}````// OU````var` `data = {````companyId : getValue(``"WKCompany"``) +``''``,````serviceCode :``'google'``,````endpoint :``'/userinfo/v2/me'``,````method :``'get'``,````timeoutService:``'100'` `// segundos````}````// OU````var` `data = {````companyId : getValue(``"WKCompany"``) +``''``,````serviceCode :``'fluig-local-basic'``,````endpoint :``'/api/public/2.0/testauthorizeclient/put'``,````method :``'put'``,``// 'delete', 'patch', 'post', 'get'````timeoutService:``'100'``,``// segundos````params : {````teste :``'teste'`                                    ```}````}````// OU````var` `data = {````companyId : getValue(``"WKCompany"``) +``''``,````serviceCode :``'fluig-local-basic'``,````endpoint :``'/api/public/2.0/testauthorizeclient/put'``,````method :``'put'``,``// 'delete', 'patch', 'post', 'get'````timeoutService:``'100'``,``// segundos````strParams :``'{ "teste" : "teste" }'`                                                                    ```}``` ```var` `vo = clientService.invoke(JSON.stringify(data));` ```if``(vo.getResult()==``null` `|| vo.getResult().isEmpty()){````throw` `new` `Exception(``"Retorno está vazio"``);````}``else``{````log.info(vo.getResult());````}``}``catch``(err) {````throw` `new` `Exception(err);``}` |
| --- | --- |

#### Retorno da chamada

A chamada "clientService.invoke(JSON.stringify(data));" retorna um objeto com os parâmetros abaixo:

- ***companyId:** Id da empresa. (sempre com o valor: getValue("WKCompany") + '')***
- **serviceCode:** Chave única cadastrada.
- **description:** Informa o *serviceCode* e se obteve sucesso. Ex: "google:SUCCESS".
- **endopint:** *Endpoint* chamado.
- **result:** *String* com o resultado retornado.
- **method:** Método http do serviço.
- **strParams:** Parâmetros em formato *String*.
- **params:** Parâmetros em formato *Map*<*String*, *Object*> utilizados.

### Chamada via componente SDK

O recurso para consumo do serviço externo também está disponível no componente SDK através do [AuthorizeClientSdkService.](https://api.fluig.com/old/sdk/com/fluig/sdk/service/AuthorizeClientSdkService.html)

Veja a seguir o exemplo para a chamado ao serviço no SDK:

[?](#)

| 123 | `private` `getAuthorizeClientSdkService getAuthorizeClientSdkService()``throws` `SDKException {````return` `new` `FluigAPI().getAuthorizeClientSdkService();``}` |
| --- | --- |


<!-- anchors: AutorizaçãoparaclientdeServiçosREST-Índice, AutorizaçãoparaclientdeServiçosREST-Objetivo, AutorizaçãoparaclientdeServiçosREST-Cadastrodeclientparachamadaaserviçosexternos, AutorizaçãoparaclientdeServiçosREST-MétodosHTTPsuportados, AutorizaçãoparaclientdeServiçosREST-OAuth1, OAuth1, OAuth1--346242983, AutorizaçãoparaclientdeServiçosREST-OAuth2, OAuth2, OAuth2--346242983, AutorizaçãoparaclientdeServiçosREST-BasicAuthentication, BasicAuth, BasicAuth--346242983, AutorizaçãoparaclientdeServiçosREST-CustomAuthentication, Custom, Custom-1, AutorizaçãoparaclientdeServiçosREST-NoneAuthentication, None, None-1, AutorizaçãoparaclientdeServiçosREST-Testandoconfiguraçõesdeautorizaçãodoclientcadastrado, AutorizaçãoparaclientdeServiçosREST-ConsumindooserviçocomautenticaçãoOAuth1,OAuth2,BasicAuthentication,CustomAuthenticationeNoneAuthentication, AutorizaçãoparaclientdeServiçosREST-ChamadaviaJavaScript, AutorizaçãoparaclientdeServiçosREST-Comomontarosparâmetros?, AutorizaçãoparaclientdeServiçosREST-ExemplodechamadaaosserviçoscomHTTPmethodPOSTnoJavaScriptdodesenvolvimento, highlighter_856290, AutorizaçãoparaclientdeServiçosREST-Retornodachamada, AutorizaçãoparaclientdeServiçosREST-ChamadaviacomponenteSDK, highlighter_855127 -->
