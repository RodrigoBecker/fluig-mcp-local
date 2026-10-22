---
title: "Criar uma biblioteca personalizada"
url: "https://tdn.totvs.com/display/public/fluig/Criar+uma+biblioteca+personalizada"
scraped_at: "2026-03-09T03:52:06.598Z"
depth: 2
anchors: 16
child_links: 55
---

# Criar uma biblioteca personalizada

# Índice

# Objetivo

O objetivo deste guia é apresentar as ações necessárias para a criação de uma biblioteca personalizada.

# Visão Geral

Uma biblioteca personalizada é um arquivo com *snippets* de códigos que podem ser reaproveitados na criação de *layouts*. A [Biblioteca WCM](/display/fluig/Biblioteca+WCM) é parte integrante da plataforma, porém, existe a possibilidade do desenvolvedor criar a sua própria biblioteca.

# Como criar a biblioteca?

Para criar a própria biblioteca, é necessário efetuar os seguintes passos:

- [Passo 1](#)
- [Passo 2](#)

 - Acessar a pasta de *templates* que fica localizada em [Instalação do fluig]/repository/wcmdir/templates.

![](/download/attachments/185748563/diretorio_templates.png?version=1&modificationDate=1499691299000&api=v2)

 - Dentro da pasta templates, criar um arquivo com a extensão ftl. Por exemplo: "custom.ftl".

O arquivo da biblioteca pode conter vários *snippets* de código.

![](/download/attachments/185748563/custom.png?version=1&modificationDate=1499691321000&api=v2)

# Como criar snippets novos?

Para criar *snippets*novos é necessário inserir uma macro nova no arquivo ftl da biblioteca, conforme mostrado a seguir:

[?](#)

| `````````` `````Hello world!``` |
| --- |

## Snippet com parâmetros

Abaixo segue um exemplo de *snippet* que utiliza um parâmetro:

[?](#)

| `````${param1}!``` |
| --- |

# Como utilizar a biblioteca?

A importação da biblioteca personalizada segue o mesmo exemplo da importação da [Biblioteca WCM](/display/fluig/Biblioteca+WCM).

No *layout*, inserir o seguinte código:

[?](#)

| `` |
| --- |

Após importar, a utilização é similar ao da Biblioteca WCM.

[?](#)

| ```` ```` |
| --- |

# Material para referência

Para mais informações sobre como criar *snippets* de código, acessar a [documentação do FreeMarker](http://freemarker.org/docs/dgui_misc_userdefdir.html) e/ou utilizar o código abaixo como exemplo:

  **Abrir Exemplo** Expand source

[expand source](#)[?](#)

| `````````````${pageRender.renderInstanceNoDecorator(id)}````````````````````````````````````````````````````````````````````````````${pageRender.renderInstanceNoDecorator(id)}````````` ```````````````${pageRender.renderInstanceNoDecorator(id)}````````````````````````````${pageRender.renderInstanceNoDecorator(id)}````````````````````````````````````${pageRender.renderInstanceNoDecorator(id)}````````````````````````````````````````````````${pageRender.renderInstanceNoDecorator(id)}``````````````` `````````` ``````````````onmousemove``=``"$(this).children('.wcm_alert_popup').show();"````onmouseout``=``"$(this).children('.wcm_alert_popup').hide();"``>` ```````````${i18n.getTranslation('warninVersion.user.title')}````````${i18n.getTranslation('warninVersion.user1')}````` ``````````````onmousemove``=``"$(this).children('.wcm_alert_popup').show();"````onmouseout``=``"$(this).children('.wcm_alert_popup').hide();"``>` ```````````${i18n.getTranslation('warninVersion.user.title')}````````${i18n.getTranslationP1('warninVersion.user2', wcmVersionInfo.getStatusInfo())}````` ``````````````onmousemove``=``"$(this).children('.wcm_alert_popup').show();"````onmouseout``=``"$(this).children('.wcm_alert_popup').hide();"``>` ```````````${i18n.getTranslation('warninVersion.user.title')}````````${i18n.getTranslation('warninVersion.user3')}````` ```````` ```````${wcmVersionInfo.getVersionName()}````${wcmVersionInfo.getVersionBuild()}````- ${i18n.getTranslation('${layoutuserlabel}')}: ${user.fullName}````` ```````````````${pageRender.renderInstanceNoDecorator(id)}````````````` `````````````` |
| --- |


<!-- anchors: Criarumabibliotecapersonalizada-Índice, Criarumabibliotecapersonalizada-Objetivo, Criarumabibliotecapersonalizada-VisãoGeral, Criarumabibliotecapersonalizada-Comocriarabiblioteca?, 1, 1-1, 1-2, Criarumabibliotecapersonalizada-Comocriarsnippetsnovos?, highlighter_919709, Criarumabibliotecapersonalizada-Snippetcomparâmetros, highlighter_821907, Criarumabibliotecapersonalizada-Comoutilizarabiblioteca?, highlighter_34424, highlighter_337886, Criarumabibliotecapersonalizada-Materialparareferência, highlighter_222863 -->
