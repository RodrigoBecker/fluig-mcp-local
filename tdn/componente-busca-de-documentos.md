---
title: "Componente Busca de documentos"
url: "https://tdn.totvs.com/display/public/fluig/Componente+Busca+de+documentos"
scraped_at: "2026-03-09T04:58:51.416Z"
depth: 3
anchors: 12
child_links: 62
---

# Componente Busca de documentos

# Índice

# Objetivo

---

Este guia é destinado aos desenvolvedores internos e externos da plataforma que desejam utilizar o componente **Busca de documentos**. O objetivo é apresentar o seu funcionamento e o detalhamento de todos os parâmetros de configuração.

# Pré-requisitos

---

Conhecer os conceitos dos componentes de negócio da plataforma, disponíveis na página [Componentes de Negócio](https://tdn.totvs.com/pages/viewpage.action?pageId=160104507).

# Busca de documentos

---

O componente **Busca de documentos** tem como objetivo facilitar a busca de documentos e pastas da plataforma, restando para o desenvolvedor somente configurar o **plugin** e utilizar o **callback** para montar sua lógica de negócio.

## Estrutura Básica

---

Como pode-se notar na estrutura básica, o componente recebe basicamente dois parâmetros:

- o primeiro, um objeto **config** com as configurações do componente;
- e o segundo uma função **callback** contendo o erro e/ou o sucesso.

Veja o exemplo abaixo:

**Estrutura básica do componente**

[?](#)

| `ECMBC.searchDocument(config, callback);` |
| --- |

O primeiro parâmetro espera um objeto contendo até dez atributos, onde nenhum é obrigatório:

**Parâmetro config**

[?](#)

| `var` `config = {````form:``false``,``// (opcional) caso passar o valor true, irá renderizar uma versão antiga com suporte à usar dentro de formulários````title:``'Selecione um arquivo'` `// valor default 'Selecionar registro'. Título da modal.````parentId: 0,``// valor default 0. Id do diretório inicial da busca, com breadcrumb completo````docTypeId:``'1-2-8'``,``// valor default '1-2-8'. Id dos tipos de documentos que devem aparecer na busca, separados por -````showPrivate:``false``,``// mostrar ou não aquivos privados````minPermission: 0,``// id da permissão mínima para mostrar o arquivo````showCheckOutDocs:``false``,``// mostrar ou não arquivos em checkout````socialDocId: 0,``// id da pasta onde a busca vai iniciar, o breadcrumb será apenas desta pasta em diante````selectableDocTypeId:``'1-2-8'` `// valor default '1-2-8'. Id dos tipos de documentos que podem ser selecionados na busca, separados por -``};` |
| --- |

O parâmetro "form" deve ser passado nas opções da chamada ECMBC.searchDocument, como true ou false, para que funcione trazendo as opções antigas de busca.

**Parâmetro config**

[?](#)

| `var` `config = {````form:``true``,``// Valida se a chamada é feita via formulário ou widgets no fluig para que exiba tela correta.````title:``'Selecione um arquivo'` `// valor default 'Selecionar registro'. Título da modal.````parentId: 0,``// valor default 0. Id do diretório inicial da busca, com breadcrumb completo````docTypeId:``'1-2-8'``,``// valor default '1-2-8'. Id dos tipos de documentos que devem aparecer na busca, separados por -````showPrivate:``false``,``// mostrar ou não aquivos privados````minPermission: 0,``// id da permissão mínima para mostrar o arquivo````showCheckOutDocs:``false``,``// mostrar ou não arquivos em checkout````socialDocId: 0,``// id da pasta onde a busca vai iniciar, o breadcrumb será apenas desta pasta em diante````selectableDocTypeId:``'1-2-8'` `// valor default '1-2-8'. Id dos tipos de documentos que podem ser selecionados na busca, separados por -``};` |
| --- |

Tipos de documento

O tipo de documento, no campo docTypeId, segue o padrão:

1 - Pasta2 - Documento normal3 - Documento externo4 - Formulário5 - Registro de formulário7 - Anexo Workflow8 - Novo conteúdo9 - Aplicativo10 - Relatório

O segundo parâmetro espera uma função que recebe dois valores: ***error*** e **data**. O valor data contém o objeto do arquivo/pasta selecionado.

**Parâmetro callback**

[?](#)

| `function``(error, data) {````if``(error) {````//tratamento de erro...````}``` ```//lógica do sucesso...``}` |
| --- |

## Utilização Básica

---

Um exemplo da utilização básica abaixo:

**minhawidget.js**

[?](#)

| `var` `EcmDocumentUpdate = SuperWidget.extend({` ```width:``null``,````docTypeId:``null``,``` ```bindings: {````local: {````'search-document'``: [``'click_searchDocument'``]````}````},``` ```init:``function``() {````this``.width = 900;````this``.docTypeId=``'1-2'``;````},``` ```searchDocument:``function``(el, ev) {````var` `that =``this``;````ECMBC.searchDocument({````width: that.width,````docTypeId: that.docTypeId````},``function``(err, data) {````if``(err) {````return` `alert(err.responseText);````}``` ```that.someFunc(data);````});````},``` ```someFunc:``function``(data) {````//Qualquer coisa com o retorno de sucesso...````}``});` |
| --- |

- No arquivo application.info de seu *widget*, adicione o componente como dependência. Como no exemplo abaixo:

**application.info**

[?](#)

| `application.resource.component.1=ecm``/searchdocument` |
| --- |

**Tela exibida ao chamar o componente**

![](/download/attachments/505770336/image2023-2-24_15-40-24.png?version=1&modificationDate=1677264027357&api=v2)


<!-- anchors: ComponenteBuscadedocumentos-Índice, ComponenteBuscadedocumentos-Objetivo, ComponenteBuscadedocumentos-Pré-requisitos, ComponenteBuscadedocumentos-Buscadedocumentos, ComponenteBuscadedocumentos-EstruturaBásica, highlighter_517909, highlighter_760146, highlighter_205449, highlighter_205243, ComponenteBuscadedocumentos-UtilizaçãoBásica, highlighter_200646, highlighter_698477 -->
