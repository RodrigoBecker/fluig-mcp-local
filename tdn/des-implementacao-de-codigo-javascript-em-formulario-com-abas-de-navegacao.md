---
title: "DES - Implementação de código Javascript em formulário com abas de navegação"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=255755875"
scraped_at: "2026-03-09T03:31:38.775Z"
depth: 2
anchors: 8
child_links: 44
---

# DES - Implementação de código Javascript em formulário com abas de navegação

# Índice

# Plataforma

**Produto**: TOTVS Fluig Plataforma

**Versão:** Todas as versões

# Ocorrência

Código JavaScript não funciona em nav-tabs nas abas secundárias.

# Causa

O código JavaScript é criado em tempo de carregamento da página. Como a <div> com código está em uma aba secundária, ela não é visível neste momento.

# Solução

Para resolver este caso dispomos de duas documentações no Style Guide: [Navs](https://style.fluig.com/components.html#nav) e [Togglable tabs](https://style.fluig.com/javascript.html#tabs).

Como exemplo, vamos colocar um componente [*Chart*](https://style.fluig.com/chart.html) em uma aba secundária.

As *tabs* aceitam eventos, portanto para mostrar um componente em uma aba não selecionada, é necessário adicionar:

[?](#)

| `$(``'a[data-toggle="tab"]'``).on(``'shown.bs.tab'``,``function``(e) {``e.target;``// activated tab``e.relatedTarget;``// previous tab``});` |
| --- |

O comando $('a[data-toggle="tab"]') pode ser alterado para $('a[href="#id_tab"]') aonde você vai utilizar o *id* da sua *tab*.

Para aplicar o gráfico em uma aba diferente da primeira, ficaria assim:

**Script**

[?](#)

| `$(document).ready(``function``(){` `$(``'a[href="#teste"]'``).on(``'shown.bs.tab'``,``function` `(e){` `var` `chart = FLUIGC.chart(``'#MY_SELECTOR'``);` `var` `data = {``labels: [``"January"``,``"February"``,``"March"``,``"April"``,``"May"``,``"June"``,``"July"``],``datasets: [``{``label:``"My First dataset"``,``fillColor:``"rgba(220,220,220,0.5)"``,``strokeColor:``"rgba(220,220,220,0.8)"``,``highlightFill:``"rgba(220,220,220,0.75)"``,``highlightStroke:``"rgba(220,220,220,1)"``,``data: [65, 59, 80, 81, 56, 55, 40]``},``{``label:``"My Second dataset"``,``fillColor:``"rgba(151,187,205,0.5)"``,``strokeColor:``"rgba(151,187,205,0.8)"``,``highlightFill:``"rgba(151,187,205,0.75)"``,``highlightStroke:``"rgba(151,187,205,1)"``,``data: [28, 48, 40, 19, 86, 27, 90]``}``]``};` `// call the bar function``var` `barChart = chart.bar(data,``null``);``});``});` |
| --- |

**HTML**

[?](#)

| `` |
| --- |


<!-- anchors: DESImplementaçãodecódigoJavascriptemformuláriocomabasdenavegação-Índice, DESImplementaçãodecódigoJavascriptemformuláriocomabasdenavegação-Plataforma, DESImplementaçãodecódigoJavascriptemformuláriocomabasdenavegação-Ocorrência, DESImplementaçãodecódigoJavascriptemformuláriocomabasdenavegação-Causa, DESImplementaçãodecódigoJavascriptemformuláriocomabasdenavegação-Solução, highlighter_605417, highlighter_743986, highlighter_745344 -->
