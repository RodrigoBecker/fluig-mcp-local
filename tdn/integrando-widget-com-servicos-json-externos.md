---
title: "Integrando widget com serviços JSON externos"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=271180031"
scraped_at: "2026-03-09T05:14:28.816Z"
depth: 3
anchors: 7
child_links: 57
---

# Integrando widget com serviços JSON externos

# Índice

# Objetivo

O objetivo desse guia é apresentar a integração de *widgets* com serviços JSON de outras fontes de dados, que estão fora do domínio do servidor Fluig. Utilizaremos a técnica de *Json Padding* - JSONP - para obtermos dados de terceiros com uma função de *callback*. 

# Problema

Se você chegou aqui é porque provavelmente estava desenvolvendo um *widget* e se deparou com uma mensagem similar a apresentada abaixo:

[?](#)

| `XMLHttpRequest cannot load http://pudim.com.br/service.``No ‘Access-Control-Allow-Origin’ header is present on the requested resource. Origin ‘http://pudim.com.br’ is therefore not allowed access.` |
| --- |

Páginas *web* comuns podem utilizar o objeto [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) para enviar e receber dados de servidores remotos, porém as ações que essas páginas poderão realizar são limitadas pela [política de mesma origem](https://en.wikipedia.org/wiki/Same-origin_policy) (*same-origin policy*). 

Este é um conceito muito importante no modelo de segurança dos navegadores atuais, pois define que *scripts* de uma página "A" somente podem acessar dados de uma página "B" **se ambas possuírem a mesma origem**. A origem de uma página é definida pelo seu protocolo, endereço e porta.

Felizmente, nem tudo é afetado pela *same-origin policy*. Por exemplo, é possível carregar uma imagem externa ou um *script* de um domínio diferente da página atual. Entretanto, isso ainda não é o suficiente quando precisa-se obter dados JSON e exibi-los em um *widget* na plataforma Fluig.

# JSONP pode ser a solução

 [JSONP](https://en.wikipedia.org/wiki/JSONP) (*JSON with Padding*) é uma técnica que disponibiliza uma forma de acessar os dados JSON que precisamos. Isto é feito através do empacotamento dos dados em uma função de *callback* (o "*padding*") que será interpretada pelo navegador em JavaScript. Esta função precisa ser definida no *widget* que receberá o retorno JSONP.

# Exemplo

Veja abaixo um exemplo de uma chamada JSONP a um serviço fictício de terceiros:

[?](#)

| `displayPudimData:``function``(){````this``.getPudimData(``function``(error, data){````if``(error){````FLUIGC.toast({````message:``'Error getting pudim data: No dessert for you!'``,````type:``'danger'````});````return` `false``;````}````// Use the variable 'data', Luke!````});``}``` `getPudimData:``function``(callback){````var` `options = {````url:``'http://pudim.com.br/service'``,````async:``true``,````contentType:``'application/json'``,````dataType:``'jsonp'``,````loading:``false````};````FLUIGC.ajax(options, callback);``}` |
| --- |


<!-- anchors: IntegrandowidgetcomserviçosJSONexternos-Índice, IntegrandowidgetcomserviçosJSONexternos-Objetivo, IntegrandowidgetcomserviçosJSONexternos-Problema, highlighter_216264, IntegrandowidgetcomserviçosJSONexternos-JSONPpodeserasolução, IntegrandowidgetcomserviçosJSONexternos-Exemplo, highlighter_723488 -->
