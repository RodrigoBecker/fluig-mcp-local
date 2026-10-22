---
title: "Componente Seleção de comunidades"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=189309230"
scraped_at: "2026-03-09T04:25:26.451Z"
depth: 3
anchors: 11
child_links: 62
---

# Componente Seleção de comunidades

# Índice

# Objetivo

---

Este guia é destinado aos desenvolvedores internos e externos do fluig que desejam utilizar o componente **Seleção de comunidades**para recuperar a comunidade desejada e utilizá-la em seu componente ou *widget*. O objetivo é apresentar o seu funcionamento e o detalhamento de todos os parâmetros de configuração.

# Pré-requisitos

---

Conhecer os conceitos dos componentes de negócio do fluig, disponíveis na página [Componentes de Negócio](https://tdn.totvs.com/pages/viewpage.action?pageId=160104507).

# Seleção de comunidades

---

O componente **Seleção de comunidades** tem como objetivo facilitar a etapa de seleção de uma ou mais comunidades, encapsulando todas as configurações básicas necessárias para essa operação, restando para o desenvolvedor somente configurar o *plugin* e utilizar o *callback* para montar sua lógica de negócio.

## Estrutura Básica

---

A seguir é apresentada a estrutura básica do componente:

**Estrutura básica do componente**

[?](#)

| `SOCIALBC.selectCommunity(config, callback);` |
| --- |

O componente recebe dois parâmetros:

- o primeiro, um objeto **config** com as configurações do componente;
- e o segundo, uma função **callback** contendo o erro e/ou o sucesso da seleção.

O primeiro parâmetro espera um objeto contendo dois atributos: **multiselect**, e ***required***, sendo os dois opcionais*.*

**Parâmetro config**

[?](#)

| `var` `config - {````multiselect:``true``,``//opção que determina se é possível a seleção de uma ou mais comunidades do componente. - Valor default: true````required:``true` `//opção que determina se a seleção de comunidade é uma etapa obrigatório no fluxo. - Valor default: false``};` |
| --- |

O segundo parâmetro espera uma função que recebe dois valores: ***error*** e **data**.

**Parâmetro callback**

[?](#)

| `function``(error, data) {````if``(error) {````//tratamento de erro...````}``` ```//lógica do sucesso...``}` |
| --- |

## Utilização Básica

---

A utilização básica do componente é apresentada a seguir:

**minhawidget.js**

[?](#)

| `var` `GlobalSearch = SuperWidget.extend({` ```alias:``null``,``` ```bindings: {````local: {````'select-comunity'``: [``'click_selectCommunity'``]````}````},``` ```init:``function``() {````//init essential params````},``` ```selectCommunity:``function``(el, ev) {````var` `that =``this``;` ```SOCIALBC.selectCommunity({````multiselect :``false``,````required :``true````},``function``(data) {````that.someFunc(data);````});````},` ```someFunc:``function``(data) {````//Qualquer coisa com o retorno de sucesso...````}``});` |
| --- |

No [application.info](http://application.info/) de seu *widget*, adicione o componente como dependência:

**application.info**

[?](#)

| `application.resource.component.1=social``/selectcommunity` |
| --- |

**Tela exibida ao chamar o componente**

![](/download/attachments/189309230/print-select-community.png?version=1&modificationDate=1433340023000&api=v2)


<!-- anchors: ComponenteSeleçãodecomunidades-Índice, ComponenteSeleçãodecomunidades-Objetivo, ComponenteSeleçãodecomunidades-Pré-requisitos, ComponenteSeleçãodecomunidades-Seleçãodecomunidades, ComponenteSeleçãodecomunidades-EstruturaBásica, highlighter_51811, highlighter_64349, highlighter_588657, ComponenteSeleçãodecomunidades-UtilizaçãoBásica, highlighter_312754, highlighter_732059 -->
