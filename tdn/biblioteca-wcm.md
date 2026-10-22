---
title: "Biblioteca WCM"
url: "https://tdn.totvs.com/display/public/fluig/Biblioteca+WCM"
scraped_at: "2026-03-09T03:52:02.353Z"
depth: 2
anchors: 20
child_links: 56
---

# Biblioteca WCM

# Índice

# Objetivo

O objetivo deste guia é apresentar as características da biblioteca WCM.

# Conceito

A biblioteca WCM contém os elementos básicos que podem ser inseridos num *layout* na sua montagem, elementos tais como menu, cabeçalho e rodapé da página.

# Importação da biblioteca

Para utilizar a biblioteca WCM é necessário fazer a sua importação no *layout*. A importação é feita inserindo o seguinte código no topo do arquivo do *layout*:

[?](#)

| `` |
| --- |

Após importada, sua utilização é feita da seguinte maneira:

[?](#)

| ```` `Ex:````` |
| --- |

# Funções disponíveis

As funções disponíveis na biblioteca WCM são apresentadas nos quadros a seguir:

- [Header](#)
- [Menu](#)
- [RenderSlot](#)
- [Footer](#)

### Header 

Insere o cabeçalho no *layout*, podendo indicar por parâmetro se é publico ou não.

[?](#)

| `` |
| --- |

| Parâmetro | Valores | Valor padrão | Obrigatório | Descrição |
| --- | --- | --- | --- | --- |
| ```
authenticated
``` | true/false | false | Não | Indica se o cabeçalho é publico ou se o usuário precisa estar logado para visualizá-lo. |

![](/download/attachments/185748245/header.png?version=1&modificationDate=1427298809000&api=v2)

**Figura 1 - Cabeçalho do layout**

### Menu

Insere o menu no *layout* e não possui parâmetros.

[?](#)

| `` |
| --- |

![](/download/attachments/185748245/menu.png?version=1&modificationDate=1427298830000&api=v2)

**Figura 2 - Menu lateral do layout**

### RenderSlot

Insere um *slot* no *layout*. Os parâmetros incluem o id do *slot* e se o *slot* é editável ou não.

[?](#)

| `` |
| --- |

| Parâmetro | Valores | Valor padrão | Obrigatório | Descrição |
| --- | --- | --- | --- | --- |
| id | string | Não possui | Sim | Valor do id do slot. Ex.: "SlotA". |
| decorator | true/false | false | Não | Indica se o título do widget será renderizado. |
| editableSlot | true/false | false | Não | Indica se o slot é editável ou não. |
| class | string | Não possui | Não | Classe CSS a ser inserida no slot. |

![](/download/attachments/185748245/renderSlot.png?version=1&modificationDate=1427298847000&api=v2)

**Figura 2 - Slot do layout**

### Footer

Insere o rodapé no *layout*. Recebe por parâmetro a chave da *label* a ser exibida antes do nome do usuário.

[?](#)

| ```` |
| --- |

| Parâmetro | Valores | Valor padrão | Obrigatório | Descrição |
| --- | --- | --- | --- | --- |
| Parâmetro | Valores | Valor padrão | Obrigatório | Descrição |
| layoutuserlabel | string | Não possui | Sim | Chave i18n da label a ser exibida antes do nome do usuário.Ex.: Usuário: João da Silva |

![](/download/attachments/185748245/footer.png?version=1&modificationDate=1427299215000&api=v2)

**Figura  4 - Rodapé do layout**


<!-- anchors: BibliotecaWCM-Índice, BibliotecaWCM-Objetivo, BibliotecaWCM-Conceito, BibliotecaWCM-Importaçãodabiblioteca, highlighter_7664, highlighter_136406, BibliotecaWCM-Funçõesdisponíveis, 1, 1-1, BibliotecaWCM-Header, highlighter_389459, 1-2, BibliotecaWCM-Menu, highlighter_623524, 1-3, BibliotecaWCM-RenderSlot, highlighter_876508, 1-1, BibliotecaWCM-Footer, highlighter_15401 -->
