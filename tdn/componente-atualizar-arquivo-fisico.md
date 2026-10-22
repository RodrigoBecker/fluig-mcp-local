---
title: "Componente Atualizar Arquivo Físico"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=160104509"
scraped_at: "2026-03-09T04:58:46.819Z"
depth: 3
anchors: 14
child_links: 65
---

# Componente Atualizar Arquivo Físico

# Índice

# Objetivo

---

Este guia é destinado aos desenvolvedores internos e externos do TOTVS Fluig Plataforma que desejam utilizar o componente **Atualizar arquivo físico**. O objetivo é apresentar o seu funcionamento e o detalhamento de todos os parâmetros de configuração.

# Pré-requisitos

---

Conhecer os conceitos dos componentes de negócio da plataforma, disponíveis na página [Componentes de Negócio](/pages/viewpage.action?pageId=160104507).

# Atualizar arquivo físico

---

O componente **Atualizar arquivo físico** tem como objetivo facilitar o processo de atualização de arquivos encapsulando todas as configurações básicas necessárias para essa atualização, restando para o desenvolvedor somente configurar o *plugin* e utilizar o *callback* para montar sua lógica de negócio.

## Estrutura Básica

---

**Estrutura básica do componente**

[?](#)

| `ECMBC.updateDocument(config, callback);` |
| --- |

Como pode-se notar na estrutura básica, o componente recebe basicamente dois parâmetros, o primeiro, um objeto **config** com as configurações do componente e o segundo uma função **callback** contendo o erro e/ou o sucesso da atualização.

O primeiro parâmetro espera um objeto contendo três atributos: **id**, ***version*** e ***types***, onde ***types*** não é obrigatório e os demais sim.

**Parâmetro config**

[?](#)

| `var` `config - {````id: 10,``//id do documento para atualização````version: 1000,``//versão ATUAL do documento para atualização````types:``'gif|jpg|jpeg|tiff|png'` `//string contendo as extensões permitidas para atualização separado por pipeline "|"``};` |
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

| `var` `EcmDocumentUpdate = SuperWidget.extend({` ```id:``null``,````version:``null``,````types:``null``,``` ```bindings: {````local: {````'update-document'``: [``'click_updateDocument'``]````}````},``` ```init:``function``() {````this``.id = 10;````this``.version = 1000;````this``.type =``'gif|jpg|jpeg|tiff|png'``;````},``` ```updateDocument:``function``(el, ev) {````var` `that =``this``;````ECMBC.updateDocument({````id: that.id,````version: that.version,````types: that.type````},``function``(err, data) {````if``(err) {````return` `alert(err.responseText);````}``` ```that.someFunc(data);````});````},``` ```someFunc:``function``(data) {````//Qualquer coisa com o retorno de sucesso...````}``});` |
| --- |

No application.info de seu widget, adicione o componente como dependência:

**application.info**

[?](#)

| `application.resource.component.1=ecm``/updatedocument` |
| --- |

### 1 - Tela exibida ao chamar o componente

![](/download/attachments/160104509/Captura%20de%20Tela%202014-09-02%20%C3%A0s%2010.33.43.png?version=1&modificationDate=1409665268000&api=v2)

### 2 - Tela exibida ao selecionar um arquivo para atualização

![](/download/attachments/160104509/update_document.png?version=1&modificationDate=1411049398000&api=v2)

### 3 - Tela exibida quando o id do documento pertence a uma pasta

![](/download/attachments/160104509/Captura%20de%20Tela%202014-09-02%20%C3%A0s%2010.35.19.png?version=1&modificationDate=1409665301000&api=v2)


<!-- anchors: ComponenteAtualizarArquivoFísico-Índice, ComponenteAtualizarArquivoFísico-Objetivo, ComponenteAtualizarArquivoFísico-Pré-requisitos, ComponenteAtualizarArquivoFísico-Atualizararquivofísico, ComponenteAtualizarArquivoFísico-EstruturaBásica, highlighter_352990, highlighter_585649, highlighter_421715, ComponenteAtualizarArquivoFísico-UtilizaçãoBásica, highlighter_95352, highlighter_911471, ComponenteAtualizarArquivoFísico-1-Telaexibidaaochamarocomponente, ComponenteAtualizarArquivoFísico-2-Telaexibidaaoselecionarumarquivoparaatualização, ComponenteAtualizarArquivoFísico-3-Telaexibidaquandooiddodocumentopertenceaumapasta -->
