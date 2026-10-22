---
title: "Integrando widget com serviços REST"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=258277714"
scraped_at: "2026-03-09T04:50:01.011Z"
depth: 3
anchors: 8
child_links: 56
---

# Integrando widget com serviços REST

Atenção

Esta página foi revisada para considerar as novas configurações de server do TOTVS Fluig Plataforma para a atualização 1.6.

Caso possua uma atualização anterior do Fluig Plataforma acesse: [WCM 015 - Como integrar um widget com serviços REST?](/pages/viewpage.action?pageId=185739330).

# Índice

# Objetivo

O objetivo desse guia é apresentar a integração de *widgets* com serviços REST.

# Integração de widget com serviços REST

Para obter dados de uma fonte externa à plataforma, a forma mais aconselhável é por chamada REST. Vamos criar um REST  dentro do próprio *widget*, para isso devemos seguir alguns passos.

Dúvidas para criar o *widget*? Siga o [guia](/pages/viewpage.action?pageId=185735401).

Primeiro devemos criar uma classe chamada *ApplicationConfig* que extende a classe *Application*.

[?](#)

| `package` `com.fluig.kitintranet.news.proxy.rest.config;``import` `javax.ws.rs.ApplicationPath;``import` `javax.ws.rs.core.Application;``@ApplicationPath``(``"api/rest"``)``public` `class` `ApplicationConfig``extends` `Application{````//não é necessário código, precisamos apenas para o @ApplicationPath``}` |
| --- |

Depois devemos criar a classe REST que desejamos acessar.

[?](#)

| `package` `com.fluig.kitintranet.news.proxy.rest;` `import` `com.totvs.technology.wcm.sdk.rest.WCMRest;``import` `javax.ws.rs.Consumes;``import` `javax.ws.rs.POST;``import` `javax.ws.rs.Path;``import` `javax.ws.rs.Produces;``import` `javax.ws.rs.core.MediaType;``import` `javax.ws.rs.core.Response;``` `@Path``(``"/news"``)``public` `class` `NewsRest``extends` `WCMRest {` ```@POST````@Path``(``"feed"``)````@Produces``(MediaType.APPLICATION_JSON)````@Consumes``(MediaType.APPLICATION_JSON)````public` `Response getRSSFeedTest(String requestParams) {````//código````}``}` |
| --- |

Em seguida, temos que alterar os arquivos *jboss-web.xml*

Fique atento!

A propriedade **context-root**precisa ser idêntica ao **application.code** fornecido para a sua widget no arquivo *application.info*, precedida por uma "/".

Exemplo: se sua widget possui o código **news**, o *context-root* precisa ser **/news.**

[?](#)

| ```````/news````false````TOTVSTech````````user````totvstech````````````totvstech````totvstech````````````sysadmin````wcmadmin````````````admin````wcmadmin``````` |
| --- |

Também temos que alterar o arquivo *web.xml* para que possamos acessar esse REST.

[?](#)

| ``````xmlns:xsi``=``"http://www.w3.org/2001/XMLSchema-instance"````xsi:schemaLocation``=``"http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_3_0.xsd"````version``=``"3.0"``>````````````30````````````````````REST````````REST````REST````/api/rest/*````````````REST````user````````````````FLUIGAUTH,FORM````TOTVSTech````````/login.jsp````/loginfail.jsp````````````````totvstech````````````user````````````sysadmin````````````index.jsp``````` |
| --- |

Depois disso, é possível utilizar o REST que se encontra dentro do *widget* por meio do método *WCMAPI.Read*, utilizado para fazer chamadas REST.

[?](#)

| `var` `that =``this``;``` `WCMAPI.Read({````type:``"POST"``,````url: WCMAPI.getServerURL() +``'/news/api/rest/news/feed'``,````async:``true``,````data: feed,````success:``function` `funcao(data) {````that.appendNews(data.content.channel.items);````},````error:``function` `() {````that.showLoadingError();````}``});` |
| --- |

O método *WCMAPI.getServerURL()*  traz a URL do servidor que será utilizado para montar a URL da chamada REST. Em seguida, concatenamos o caminho do REST que pretendemos chamar. Neste caso, utilizamos o seguinte caminho: '/news/api/rest/news/feed'. Onde:

- '/news': é o código do *widget*;
- '/api/rest': é o @Path da classe *ApplicationConfig.java;*
- '/news': é o @Path da classe *NewsRest.java*;
- '/feed': é o @Path do método da classe *NewsRest.java* que desejamos chamar.


<!-- anchors: IntegrandowidgetcomserviçosREST-Índice, IntegrandowidgetcomserviçosREST-Objetivo, IntegrandowidgetcomserviçosREST-IntegraçãodewidgetcomserviçosREST, highlighter_293435, highlighter_347545, highlighter_387767, highlighter_650641, highlighter_519774 -->
