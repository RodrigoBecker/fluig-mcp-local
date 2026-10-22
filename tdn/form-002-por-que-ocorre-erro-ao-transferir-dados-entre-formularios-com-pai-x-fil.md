---
title: "FORM 002 - Por que ocorre erro ao transferir dados entre formulários com pai x filho?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=243658026"
scraped_at: "2026-03-09T03:33:22.394Z"
depth: 2
anchors: 6
child_links: 40
---

# FORM 002 - Por que ocorre erro ao transferir dados entre formulários com pai x filho?

# Índice

# Plataforma

**Produto:  fluig**

**Versão: Todas**

# Ocorrência

Ao mover a tarefa de um subprocesso recebemos o erro abaixo e não podemos mover de um estado para o outro:

[?](#)

| `Transaction TransactionImple  is not in a valid state to be invoking` |
| --- |

# Causa

A situação reportada ocorre pois no formulário pai há um campo do tipo Pai X Filho e na função implementada para copiar os dados do formulário pai para o formulário do subprocesso, não estão sendo adicionadas linhas no novo Pai x Filho. Sendo assim, o fluig tenta incluir dados em campos que não existem.

# Solução

Para corrigir esta situação, deve ser utilizada a função wdkAddChild('[nome-do-paifilho]') antes de definir os valores, [conforme exemplo](https://tdn.totvs.com/x/AhBbCw).


<!-- anchors: FORM002Porqueocorreerroaotransferirdadosentreformulárioscompaixfilho?-Índice, FORM002Porqueocorreerroaotransferirdadosentreformulárioscompaixfilho?-Plataforma, FORM002Porqueocorreerroaotransferirdadosentreformulárioscompaixfilho?-Ocorrência, highlighter_851317, FORM002Porqueocorreerroaotransferirdadosentreformulárioscompaixfilho?-Causa, FORM002Porqueocorreerroaotransferirdadosentreformulárioscompaixfilho?-Solução -->
