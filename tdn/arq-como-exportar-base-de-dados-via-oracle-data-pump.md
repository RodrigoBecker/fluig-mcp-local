---
title: "ARQ - Como exportar base de dados via Oracle Data Pump?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=274309484"
scraped_at: "2026-03-09T04:44:24.176Z"
depth: 3
anchors: 5
child_links: 46
---

# ARQ - Como exportar base de dados via Oracle Data Pump?

# Índice

# Plataforma

**Versão:** A partir da 1.6

**Ambiente:** Linux/Windows

**Banco de Dados:** Oracle

# Ocorrência

Como exportar (dump) uma base de dados utilizando o Oracle Data Pump?

# Solução

Para exportar uma base de dados Oracle, utilize o seguinte comando:

[?](#)

| `expdp system DIRECTORY=EXP_DIR DUMPFILE=fluig.dmp SCHEMAS=SCHEMA_FLUIG VERSION=``'12.1'` `LOGFILE=fluig.log` |
| --- |

Onde **EXP_DIR** é o diretório configurado no Oracle para armazenamento dos dumps e **SCHEMA_FLUIG** o schema do banco a ser exportado.


<!-- anchors: ARQComoexportarbasededadosviaOracleDataPump?-Índice, ARQComoexportarbasededadosviaOracleDataPump?-Plataforma, ARQComoexportarbasededadosviaOracleDataPump?-Ocorrência, ARQComoexportarbasededadosviaOracleDataPump?-Solução, highlighter_824950 -->
