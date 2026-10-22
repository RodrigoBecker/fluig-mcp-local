---
title: "ESB - Por que ocorre o erro \"elemento inesperado\" ao consumir WS do TOTVS ESB?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=244430948"
scraped_at: "2026-03-09T03:39:23.741Z"
depth: 2
anchors: 6
child_links: 38
---

# ESB - Por que ocorre o erro "elemento inesperado" ao consumir WS do TOTVS ESB?

# Índice

# Plataforma

**Produto:** TOTVS ESB

# Ocorrência

Por que ocorre o erro de "elemento inesperado" ao consumir o WS do TOTVS ESB?

# Causa

A tag "in0" não está recebendo um conteúdo de texto.

# Solução

Colocar o conteúdo da tag entre **<![CDATA[...]>**, conforme o exemplo abaixo. 

[?](#)

| `````...]]>````RMReceiver``` |
| --- |


<!-- anchors: ESBPorqueocorreoerro"elementoinesperado"aoconsumirWSdoTOTVSESB?-Índice, ESBPorqueocorreoerro"elementoinesperado"aoconsumirWSdoTOTVSESB?-Plataforma, ESBPorqueocorreoerro"elementoinesperado"aoconsumirWSdoTOTVSESB?-Ocorrência, ESBPorqueocorreoerro"elementoinesperado"aoconsumirWSdoTOTVSESB?-Causa, ESBPorqueocorreoerro"elementoinesperado"aoconsumirWSdoTOTVSESB?-Solução, highlighter_991834 -->
