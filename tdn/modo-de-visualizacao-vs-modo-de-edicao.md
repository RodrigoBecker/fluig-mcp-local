---
title: "Modo de visualização vs. modo de edição"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=185739196"
scraped_at: "2026-03-09T05:14:37.407Z"
depth: 3
anchors: 10
child_links: 61
---

# Modo de visualização vs. modo de edição

# Índice

# Objetivo

O objetivo deste guia é apresentar as características dos modos de visualização e edição de *widgets*.

# Modo de visualização vs. modo de edição

No que poderíamos chamar de "camada de apresentação" de um *widget* (ou seja, as telas), existe a concepção inicial de que ela é formada por dois arquivos FreeMarker (.ftl): um para visualização e outro para edição. Geralmente esta estrutura é composta por um único arquivo JavaScript (.js). A seguir, veremos cada um dos componentes.

## Modo de Visualização

Por padrão, o renderizador de páginas da plataforma Fluig seleciona o arquivo "view.ftl" dentro do *widget* para a renderização do modo de visualização. Caso o desenvolvedor deseje especificar um outro arquivo .ftl como padrão para o modo de visualização, é necessário informá-lo na propriedade [view.file](https://tdn.totvs.com/display/fluig/Arquivo+application.info#Arquivoapplication.info-view.file) no arquivo [application.info](https://tdn.totvs.com/display/fluig/Arquivo+application.info). Por exemplo:

[?](#)

| `view.file=visualizacao.ftl` |
| --- |

## Modo de Edição

Por padrão, o renderizador de páginas da plataforma Fluig seleciona o arquivo "edit.ftl" dentro do *widget* para a renderização do modo de edição. Caso o desenvolvedor deseje especificar um outro arquivo .ftl como padrão para o modo de edição, é necessário informá-lo na propriedade [edit.file](https://tdn.totvs.com/display/fluig/Arquivo+application.info#Arquivoapplication.info-edit.file) no arquivo [application.info](https://tdn.totvs.com/display/fluig/Arquivo+application.info). Por exemplo:

[?](#)

| `edit.file=edicao.ftl` |
| --- |

Importante

Caso não exista uma propriedade [edit.file](https://tdn.totvs.com/display/fluig/Arquivo+application.info#Arquivoapplication.info-edit.file) no application.info e nem um arquivo "edit.ftl" na estrutura do *widget*, o renderizador entenderá que esse *widget* não possui modo de edição.

# Variáveis de ambiente FTL & JS

Quando é utilizada a extensão de [Super Widget](https://style.fluig.com/javascript.html#super-widget) em um arquivo ***.js** (JavaScript), existe uma função herdada chamada *"*isEditMode". Veja o exemplo abaixo:

[?](#)

| `var` `MinhaWidget = SuperWidget.extend({````init:``function``() {````if` `(``this``.isEditMode) {````// código para ser executado quando estiver em modo de edição````}``else` `{````// código para ser executado quando estiver em modo de exibição````}````},````// restante do código omitido``});` |
| --- |

Já no arquivo ***.ftl** (FreeMarker), pode-se usar o seguinte código:

[?](#)

| ```` ```````````````````` `` |
| --- |


<!-- anchors: Mododevisualizaçãovs.mododeedição-Índice, Mododevisualizaçãovs.mododeedição-Objetivo, Mododevisualizaçãovs.mododeedição-Mododevisualizaçãovs.mododeedição, Mododevisualizaçãovs.mododeedição-MododeVisualização, highlighter_607937, Mododevisualizaçãovs.mododeedição-MododeEdição, highlighter_50773, Mododevisualizaçãovs.mododeedição-VariáveisdeambienteFTL&JS, highlighter_740233, highlighter_368408 -->
