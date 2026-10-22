---
title: "Integrando widget com serviços SOAP - utilizando o ERP RM"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=185738974"
scraped_at: "2026-03-09T05:14:32.859Z"
depth: 3
anchors: 7
child_links: 57
---

# Integrando widget com serviços SOAP - utilizando o ERP RM

# Índice

# Objetivo

O objetivo deste guia é apresentar a forma de integração de *widgets* com serviços SOAP.

# Pré-requisitos

Antes de tudo, é necessário [desenvolver o *widget*](/pages/viewpage.action?pageId=185735401) para, então, realizar a integração com o ERP RM utilizando o protocolo SOAP.

# Criando os arquivos para utilização SOAP

Primeiramente precisamos gerar os arquivos que serão utilizados para consultar o serviço. Neste exemplo, utilizaremos os serviços do ERP RM para obter os dados de aniversariantes.

Para gerar os arquivos, basta executar o comando no console:

[?](#)

| `wsimport -p pacote -Xnocompile http:``//endereco-do-server``?WSDL``` `Exemplo:``` `wsimport -p com.fluig.kitintranet.proxy.soap -Xnocompile http:``//servidor-rm/web/wsGlbSSL``.asmx?WSDL` |
| --- |

Onde:

- **"servidor-rm":** deve ser substituído pelo endereço do servidor onde se encontra o ERP RM;
- **"com.fluig.kitintranet.proxy.soap":** deve ser substituído pelo pacote onde desejamos que o código seja gerado.

Após a execução deste comando, os arquivos são gerados na estrutura de pastas conforme o pacote informado.

![](/download/attachments/185738974/Selection_016.png?version=1&modificationDate=1425661952000&api=v2)

Conforme apresentado na imagem, foram gerados vários arquivos que são necessários para a consulta de aniversariantes no ERP RM.

Neste caso, utilizaremos apenas uma classe chamada "WsGlbSSL", conforme exemplificado a seguir:

[?](#)

| `package` `com.fluig.kitintranet.proxy.rest;``import` `com.fluig.kitintranet.proxy.soap.WsGlbSSL;``import` `com.totvs.technology.wcm.sdk.rest.WCMRest;``import` `javax.ejb.TransactionAttribute;``import` `javax.ejb.TransactionAttributeType;``import` `javax.ws.rs.GET;``import` `javax.ws.rs.Path;``import` `javax.ws.rs.Produces;``import` `javax.ws.rs.QueryParam;``import` `javax.ws.rs.core.MediaType;``import` `javax.ws.rs.core.Response;` `@Path``(``"/birthdays"``)``@TransactionAttribute``(TransactionAttributeType.NOT_SUPPORTED)``public` `class` `BirthdayProxy``extends` `WCMRest {````@GET````@Path``(``"today"``)````@Produces``(MediaType.APPLICATION_JSON)````public` `Response today(``@QueryParam``(``"month"``) String month,``@QueryParam``(``"day"``) String day,``@QueryParam``(``"user"``) String user,``@QueryParam``(``"password"``) String password) {````WsGlbSSL wsGlbSSL =``new` `WsGlbSSL();````String param =``""` `+ month +``""` `+ day +``""``;````String resultSQL = wsGlbSSL.getWsGlbSSLSoap().getResultSQL(user, password,``0``,``"V"``,``"INTEGR_FLG.02"``, param,``false``);````return` `buildJSONResponse(resultSQL);````}``}` |
| --- |

Esta classe BirthdayProxy*.*java deve ser chamada via JavaScript utilizando REST. Para saber como criar um serviço REST dentro de um *widget*, acesse [este guia](/pages/viewpage.action?pageId=185739330).

O resultado será o seguinte:

[?](#)

| `getBirthdays:``function``(month, day, user, password) {````WCMAPI.Read({````type:``"GET"``,````url: WCMAPI.getServerURL() +``'/aniversariantes/api/rest/birthdays/today?month='` `+ month +``"&day="` `+ day +``"&user="` `+ user +``"&password="` `+ password,````async:``false``,````success:``function` `funcao(data) {````// código````},````error:``function` `(msg){````// código````}````});``}` |
| --- |


<!-- anchors: IntegrandowidgetcomserviçosSOAPutilizandooERPRM-Índice, IntegrandowidgetcomserviçosSOAPutilizandooERPRM-Objetivo, IntegrandowidgetcomserviçosSOAPutilizandooERPRM-Pré-requisitos, IntegrandowidgetcomserviçosSOAPutilizandooERPRM-CriandoosarquivosparautilizaçãoSOAP, highlighter_539592, highlighter_79557, highlighter_927868 -->
