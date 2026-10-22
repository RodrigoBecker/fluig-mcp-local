---
title: "WCM - Meus widgets estão todos com as mesmas preferências, como resolvo?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=237386757"
scraped_at: "2026-03-09T03:36:43.654Z"
depth: 2
anchors: 9
child_links: 46
---

# WCM - Meus widgets estão todos com as mesmas preferências, como resolvo?

# Índice

# Plataforma

**Produto:  **TOTVS Fluig Plataforma

# Ocorrência

Meus widgets estão todos com as mesmas preferências, como resolvo?

# Causa

Geralmente isso ocorre quando há mais de um elemento com o mesmo "id" na página. O risco de isso ocorrer é maior quando, montando uma pagina, use-se mais de uma [instância](/pages/viewpage.action?pageId=237386683) de um *widget* que não esteja com os "ids" de seus elementos nomeados corretamente.

# Solução

Dentro dos arquivos .ftl, sempre que é criado um novo elemento, é importante utilizar a variável *instanceId* como sufixo na hora de nomeá-lo. Abaixo um exemplo:

[?](#)

| `````````````````...``````````````````` |
| --- |

Onde:

| Elemento | Descrição |
| --- | --- |
| Elemento | Descrição |
| ```
${instanceId}
``` | Quando utilizada a técnica de super widget, essa variável contém o "id" único da instância em questão. |

Usar *instanceId* como sufixo é bastante produtivo quando é necessário fazer referência a outros objetos dentro do próprio .ftl, pois quando foi inserida a *label* para o *input*, bastou usar como referência o identificador único do objeto em questão. Ou seja, quando o *input field* foi criado, deu-se um **"id"** único para ele.

[?](#)

| `` |
| --- |

Logo, quando a label para ele foi criada, bastou informar na propriedade **"for"** o mesmo valor.

[?](#)

| `` |
| --- |

Essa forma de nomear seus elementos também ajudará quando for necessário, dentro do arquivo .js, buscar algum valor na tela. Abaixo um exemplo:

[?](#)

| `var` `titulo = $(``"#qualiTitle_"` `+``this``.instanceId).val();` |
| --- |

Onde:

| Elemento | Descrição |
| --- | --- |
| Elemento | Descrição |
| $(...) | Função que inicia a buscar por algum elemento na tela. |
| # | É o prefixo que indica, para o javascript, que se deseja buscar um elemento cuja propriedade "id" seja igual aos caracteres que se seguem a ele. |
| ```
this.instanceId
``` | Quando utilizada a técnica de super widget, essa variável contém o id único da instância em questão. |


<!-- anchors: WCMMeuswidgetsestãotodoscomasmesmaspreferências,comoresolvo?-Índice, WCMMeuswidgetsestãotodoscomasmesmaspreferências,comoresolvo?-Plataforma, WCMMeuswidgetsestãotodoscomasmesmaspreferências,comoresolvo?-Ocorrência, WCMMeuswidgetsestãotodoscomasmesmaspreferências,comoresolvo?-Causa, WCMMeuswidgetsestãotodoscomasmesmaspreferências,comoresolvo?-Solução, highlighter_498183, highlighter_64799, highlighter_80382, highlighter_874944 -->
