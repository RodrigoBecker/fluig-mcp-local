---
title: "Componente de recorte de imagem"
url: "https://tdn.totvs.com/display/public/fluig/Componente+de+recorte+de+imagem"
scraped_at: "2026-03-09T04:58:59.954Z"
depth: 3
anchors: 12
child_links: 63
---

# Componente de recorte de imagem

# Índice

# Objetivo

---

Este guia é destinado aos desenvolvedores internos e externos da plataforma que desejam utilizar o componente de**recorte de imagem**. O objetivo é apresentar o seu funcionamento e o detalhamento de todos os parâmetros de configuração.

# Pré-requisitos

---

- Conhecer os conceitos dos componentes de negócio do TOTVS Fluig Plataforma, disponíveis na página [Componentes de Negócio](https://tdn.totvs.com/pages/viewpage.action?pageId=160104507).

# Recorte de imagem

---

O componente de **recorte de imagem** tem como objetivo facilitar o processo de atualização de imagens encapsulando todas as configurações básicas necessárias para essa atualização, restando para o desenvolvedor somente configurar o *plugin* e utilizar o *callback* para montar sua lógica de negócio.

## Estrutura Básica

---

**Estrutura básica do componente**

[?](#)

| `WCMBC.cropImage(config, callback);` |
| --- |

Como pode-se notar na estrutura básica, o componente recebe basicamente dois parâmetros:

- o primeiro, um objeto **config** com as configurações do componente;
- e o segundo uma função **callback** contendo o erro e/ou o sucesso da atualização.

O primeiro parâmetro espera um objeto contendo sete atributos: **alias**, ***title**,* ***types**,**imageShape**,**imageSrc**,**saveCallback** e**cancelCallback***, onde os parâmetros são opcionais*.*

**Parâmetro config**

[?](#)

| `var` `config = {````alias:``'bruno.quadrotti'``,``//alias do usuário/comunidade que será atualizada - Valor default: alias do usuário logado.````title:``'Atualização de imagem de comunidade'``,``//título do modal de troca de imagem. - Valor default: Editar foto````types:``'gif|jpg|jpeg|tiff|png'``,``//string contendo as extensões permitidas para atualização separado por pipeline "|". - Valor default: jpg|jpeg|png````imageShape:``'rounded'``,``//string com o formato de imagem a ser apresentado, conforme os formatos do guia de estilos('rounded', 'circle' ou '')````imageSrc:``'http://www.fluig.com/assets/images/logo_fluig.png'``, //url da imagem````saveCallback:``function``(data){},``//função callback para a ação de salvar imagem, onde "data" são as coordenadas definidas para o recorte da imagem````cancelCallback:``function``(){}``//função callback callback para cancelar a função de crop``};` |
| --- |

O segundo parâmetro espera uma função que recebe dois valores: ***error*** e **data**.

**Parâmetro callback**

[?](#)

| `function``(error, data) {````if``(error) {````//tratamento de erro...````}``` ```//lógica do sucesso...``}` |
| --- |

## Utilização Básica

---

**minhawidget.js**

[?](#)

| `var` `UserPreferences = SuperWidget.extend({` ```alias:``null``,````type:``null``,``` ```bindings: {````local: {````'update-image'``: [``'click_updateImage'``]````}````},``` ```init:``function``() {````this``.type =``'gif|jpg|jpeg|png'``;````},``` ```updateImage:``function``(el, ev) {````var` `that =``this``;````WCMBC.cropImage({````alias:``this``.alias,````types:``this``.type````},``function``(err, data) {````if``(err) {````return` `alert(err.responseText);````}``` ```that.someFunc(data);````});````},``` ```someFunc:``function``(data) {````//Qualquer coisa com o retorno de sucesso...````}``});` |
| --- |

No [application.info](http://application.info) de seu *widget*, adicione o componente como dependência:

**application.info**

[?](#)

| `application.resource.component.1=wcm``/cropimage` |
| --- |

### Tela exibida ao chamar o componente

![](/download/attachments/161352230/Captura%20de%20Tela%202014-09-24%20%C3%A0s%2017.48.51.png?version=1&modificationDate=1411591547000&api=v2)


<!-- anchors: Componentederecortedeimagem-Índice, Componentederecortedeimagem-Objetivo, Componentederecortedeimagem-Pré-requisitos, Componentederecortedeimagem-Recortedeimagem, Componentederecortedeimagem-EstruturaBásica, highlighter_179448, highlighter_735896, highlighter_452382, Componentederecortedeimagem-UtilizaçãoBásica, highlighter_105664, highlighter_139856, Componentederecortedeimagem-Telaexibidaaochamarocomponente -->
