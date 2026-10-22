---
title: "Componente de visualização de documento"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=766954991"
scraped_at: "2026-03-09T03:47:28.332Z"
depth: 2
anchors: 12
child_links: 45
---

# Componente de visualização de documento

# Índice

# Objetivo

---

Este guia é destinado aos desenvolvedores internos e externos da plataforma que desejam utilizar o componente **Visualização de documentos**. O objetivo é apresentar o seu funcionamento e o detalhamento de todos os parâmetros de configuração.

# Pré-requisitos

---

Conhecer os conceitos dos componentes de negócio da plataforma, disponíveis na página [Componentes de Negócio](https://tdn.totvs.com/pages/viewpage.action?pageId=160104507).

# Visualização de documento em comunidade

---

O componente **Visualização de documento** tem como objetivo facilitar a visualização de documentos no Fluig plataforma, restando para o desenvolvedor somente configurar o *plugin*para montar sua lógica de negócio.

Caso a forma antiga estiver sendo utilizada, recomendamos que a atualização seja feita seguindo os passos deste documento.

**Exemplo utilizando a forma antiga**

```
try {    var cfg = {        url: "/ecm_documentview/documentView.ftl",        maximized: true,        title: "Imprimir",        callBack: function () {            parent['ECM'].documentView.getDocument('7', '1000');        },        customButtons: []    };    parent['ECM'].documentView.panel = parent['WCMC'].panel(cfg);} catch (error) {    console.log("error", error);}
```

## Estrutura Básica

---

Como pode-se notar na estrutura básica, o componente recebe basicamente um parâmetro:

- um objeto **config** com as configurações do componente;

**application.info**

[?](#)

| `application.resource.component.1=ecm``/viewDocument` |
| --- |

Veja o exemplo abaixo:

**Estrutura básica do componente**

[?](#)

| `ECMBC.viewDocument(config);` |
| --- |

O parâmetro espera um objeto contendo até quatro atributos, onde apenas um é obrigatório:

**Parâmetro config**

[?](#)

| `var config = {````docId: 999, // valor obrigatório. Código do documento````docVersion: 1000 // valor defaut 0. Versão do documento, se não informar a versão ou ela for 0 (zero) será escolhida a última versão do documento.````title: 'Visualizar documento' // valor default 'Visualização de documento'. Título da modal. O título só será exibido caso o documento não tenha um nome/descrição definida.````sizeModal: 'full' // valor default 'large'. Largura/tamanho do modal. Valores disponivéis: full | large | small``};` |
| --- |

## Utilização Básica

---

Um exemplo da utilização básica abaixo:

**minhawidget.js**

[?](#)

| `minhawidget.js``var` `EcmDocumentUpdate = SuperWidget.extend({``` ```bindings: {````local: {````'open-document'``: [``'click_openDocument'``]````}````},``` ```init:``function``() {````},``` ```openDocument:``function``(el, ev) {````ECMBC.viewDocument({````docId: 46,````sizeModal:``'full'````});````},``});` |
| --- |

- No arquivo [application.info](http://application.info/) de seu *widget*, adicione o componente como dependência. Como no exemplo abaixo:

**application.info**

[?](#)

| `application.resource.component.1=ecm``/viewDocument` |
| --- |

Caso esteja usando em Formulários, importe o arquivo como no exemplo abaixo:

[?](#)

| `` |
| --- |


<!-- anchors: Componentedevisualizaçãodedocumento-Índice, Componentedevisualizaçãodedocumento-Objetivo, Componentedevisualizaçãodedocumento-Pré-requisitos, Componentedevisualizaçãodedocumento-Visualizaçãodedocumentoemcomunidade, Componentedevisualizaçãodedocumento-EstruturaBásica, highlighter_876073, highlighter_889265, highlighter_867287, Componentedevisualizaçãodedocumento-UtilizaçãoBásica, highlighter_285993, highlighter_767037, highlighter_124386 -->
