---
title: "Componente Compartilhar"
url: "https://tdn.totvs.com/display/public/fluig/Componente+Compartilhar"
scraped_at: "2026-03-09T04:58:55.410Z"
depth: 3
anchors: 11
child_links: 62
---

# Componente Compartilhar

# Índice

# Objetivo

---

Este guia é destinado aos desenvolvedores internos e externos da plataforma que desejam utilizar o componente **Compartilhar**. O objetivo é apresentar o seu funcionamento e o detalhamento de todos os parâmetros de configuração.

# Pré-requisitos

---

- Conhecer os conceitos dos componentes de negócio do TOTVS Fluig Plataforma, disponíveis na página [Componentes de Negócio](https://tdn.totvs.com/pages/viewpage.action?pageId=160104507).

# Compartilhar

---

O componente **Compartilhar** tem como objetivo facilitar o processo de compartilhamento de conteúdo encapsulando todas as configurações básicas necessárias para o compartilhamento, restando para o desenvolvedor somente configurar o *plugin*.

## Estrutura Básica

---

A seguir é apresentada a estrutura básica do componente:

**Estrutura básica do componente**

[?](#)

| `SOCIALBC.share(target, config);` |
| --- |

O componente recebe dois parâmetros:

- o primeiro, um objeto **target** que pode ser um objeto ou uma *string;*
- e o segundo as configurações para o componente.

O primeiro parâmetro espera um objeto ou uma *string*:

**Parâmetro config**

[?](#)

| `// Pode ser um objeto resultante de um seletor jquery:``var` `obj = $(``'#meu_seletor'``);``` `// Pode ser uma string de um seletor jquery:``var` `obj =``'#meu_seletor'``;` |
| --- |

O segundo parâmetro espera um objeto com os valores: ***showOnlyLink**,**sourceType**,**type**,**preview**,**link*** e **paramId**.

**Parâmetro callback**

[?](#)

| `{````showOnlyLink:``"exibe apenas o link ex.:true or false,"````sourceType:``"tipo ex.:SOCIABLE,"````type:``"tipo do conteúdo ex.:POST,"````preview:``"uma miniatura do conteúdo que será compartilhado,"````link:``"url para acessar o recurso,"````paramId:``"id social"``}` |
| --- |

## Utilização Básica

---

A utilização básica do componente é apresentada a seguir:

**minhawidget.js**

[?](#)

| `SOCIALBC.share(``'#seletor'``, {````showOnlyLink:``false``,````sourceType:``'SOCIABLE'``,````type:``'POST'``,````preview:``'Miniatura'``,````link:``'http://servidor/portal/p/1/post/usuario/12'``,````paramId: 12``});` |
| --- |

No [application.info](http://application.info) de seu *widget*, adicione o componente como dependência:

**application.info**

[?](#)

| `application.resource.component.2=social``/socialshare` |
| --- |

**Tela exibida ao chamar o componente**

![](/download/attachments/185751355/Captura%20de%20tela%20de%202015-04-01%2017%3A07%3A51.png?version=1&modificationDate=1427918919000&api=v2)

****

**Tela exibida ao selecionar a opção compartilhar**

![](/download/attachments/185751355/Captura%20de%20tela%20de%202015-04-01%2017%3A08%3A09.png?version=1&modificationDate=1427919011000&api=v2)

****

**Mensagem exibida ao selecionar a opção copiar link**

![](/download/attachments/185751355/Captura%20de%20tela%20de%202015-04-01%2017%3A11%3A24.png?version=1&modificationDate=1427919062000&api=v2)

****

**Tela exibida ao selecionar a opção compartilhar quando não existe o Flash no navegador**

![](/download/attachments/185751355/Captura%20de%20tela%20de%202015-04-01%2017%3A18%3A51.png?version=1&modificationDate=1427919520000&api=v2)


<!-- anchors: ComponenteCompartilhar-Índice, ComponenteCompartilhar-Objetivo, ComponenteCompartilhar-Pré-requisitos, ComponenteCompartilhar-Compartilhar, ComponenteCompartilhar-EstruturaBásica, highlighter_357158, highlighter_333657, highlighter_544613, ComponenteCompartilhar-UtilizaçãoBásica, highlighter_170224, highlighter_153560 -->
