---
title: "Chamada de métodos síncrona vs. assíncrona"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=185739298"
scraped_at: "2026-03-09T05:14:24.102Z"
depth: 3
anchors: 8
child_links: 58
---

# Chamada de métodos síncrona vs. assíncrona

# Índice

# Objetivo

O objetivo desse guia é apresentar as características das chamadas de métodos síncrona e assíncrona.

# Chamada de métodos síncrona vs. assíncrona

Sempre que se efetua uma integração por chamada REST/Ajax é possível configurá-la para que o *widget* aguarde ou não o término do processamento no servidor. Salvo quando existe a real necessidade de se esperar pelo retorno da chamada, é recomendado que sempre se faça a integração de forma assíncrona. Abaixo são apresentados dois exemplos de chamada remota - uma para Ajax e outra para REST:

## Ajax

[?](#)

| `chamadaRemotaAjax :``function``() {````$.ajax({````async:``true``,````type:``"GET"``,````url:``"url-do-servico-a-ser-consumido"``,````success :``function``(data) {````// código omitido````},````error:``function` `(msg){````// código omitido````}````});``}` |
| --- |

Onde:

| Elemento | Descrição |
| --- | --- |
| Elemento | Descrição |
| async: | Determina que a chamada seja feita de forma assíncrona (true) ou síncrona (false). |
| success: | Código a ser executado quando a função retorna com sucesso. |
| error: | Código que tratará eventuais erros no processamento remoto. |

## REST

[?](#)

| `chamadaRemotaRest :``function``() {````WCMSpaceAPI.PageService.UPDATEPREFERENCES(````{````async:``true``,````success:``function` `(data) {````// código omitido````},````fail:``function` `(xhr, message, errorData) {````// código omitido````}````},````this``.instanceId,````preferences````);``}` |
| --- |

Onde:

| Elemento | Descrição |
| --- | --- |
| Elemento | Descrição |
| async: | Determina que a chamada seja feita de forma assíncrona (true) ou síncrona (false). |
| success: | Código a ser executado quando a função retorna com sucesso. |
| fail: | Código que tratará eventuais erros no processamento remoto. |

## Componente visual para chamadas assíncronas

Muitas vezes a execução remota de um código demora muito tempo, deixando o usuário com dúvidas sobre o sucesso ou falha do comando enviado ao servidor. Pensando nisso, a plataforma Fluig disponibilizou uma forma para que haja um elemento que visualmente indique que algo está sendo processado. A documentação completa a respeito de sua utilização pode ser encontrada [aqui](https://style.fluig.com/javascript.html#fluig-loading).


<!-- anchors: Chamadademétodossíncronavs.assíncrona-Índice, Chamadademétodossíncronavs.assíncrona-Objetivo, Chamadademétodossíncronavs.assíncrona-Chamadademétodossíncronavs.assíncrona, Chamadademétodossíncronavs.assíncrona-Ajax, highlighter_393824, Chamadademétodossíncronavs.assíncrona-REST, highlighter_150953, Chamadademétodossíncronavs.assíncrona-Componentevisualparachamadasassíncronas -->
