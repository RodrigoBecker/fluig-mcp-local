---
title: "ARQ - Por que na indexação gera erro no log ao indexar arquivos com extensão '.dwg'?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=210054631"
scraped_at: "2026-03-04T03:38:09.712Z"
depth: 4
anchors: 6
child_links: 61
---

# ARQ - Por que na indexação gera erro no log ao indexar arquivos com extensão '.dwg'?

# Índice

# Plataforma

**Produto:** TOTVS Fluig Plataforma

**Tipo de API:** SOLR

# Ocorrência

Por que ao tentar indexar arquivos com extensão '.dwg', gerados via AutoCAD, ocorre o erro em log abaixo?

**Arquivo de log**

[?](#)

| `Unsupported AutoCAD drawing version: AC1027` |
| --- |

# Causa

A API Tika não dá suporte a este tipo de arquivo (.dwg).

Existe um chamado para o time responsável pela API no Apache, segue o link: [https://issues.apache.org/jira/browse/TIKA-1735](https://issues.apache.org/jira/browse/TIKA-1735)

# Solução

Atualmente não há solução, porém não é um erro impeditivo, pois os metadados do arquivo são indexados.


<!-- anchors: ARQPorquenaindexaçãogeraerronologaoindexararquivoscomextensão'.dwg'?-Índice, ARQPorquenaindexaçãogeraerronologaoindexararquivoscomextensão'.dwg'?-Plataforma, ARQPorquenaindexaçãogeraerronologaoindexararquivoscomextensão'.dwg'?-Ocorrência, highlighter_383591, ARQPorquenaindexaçãogeraerronologaoindexararquivoscomextensão'.dwg'?-Causa, ARQPorquenaindexaçãogeraerronologaoindexararquivoscomextensão'.dwg'?-Solução -->
