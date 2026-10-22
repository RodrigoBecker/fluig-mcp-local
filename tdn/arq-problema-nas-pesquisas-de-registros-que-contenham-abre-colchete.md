---
title: "ARQ - Problema nas pesquisas de registros que contenham \"[\" (abre colchete)"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=435106320"
scraped_at: "2026-03-04T03:38:36.752Z"
depth: 4
anchors: 5
child_links: 61
---

# ARQ - Problema nas pesquisas de registros que contenham "[" (abre colchete)

# Índice

# Plataforma

**Produto:**TOTVS Fluig Plataforma

**Banco de Dados:**SQL Server

# Ocorrência

Os registros que são gravados com o caractere "**[**" (abre colchete) não são localizados na plataforma, ao acionar a opção Filtrar.

A animação abaixo demonstra o problema:

![](/download/attachments/435106320/Erro%20colchetes.gif?version=1&modificationDate=1541795794443&api=v2)

# Solução

Caso você precise pesquisar algum registro que contenha '[' (abre colchete) conforme a situação relatada, deve-se aplicar um "escape" utilizando a sequência de caracteres '[[]' (dois abre colchetes e um fecha colchete). 

**Exemplo:**
Descrição do registro: [e1] Grupo A
Para realizar a busca deve usar assim: [[]e1] Grupo A

# Observação

Esse procedimento só é necessário nas buscas realizadas com o banco de dados SQL Server.


<!-- anchors: ARQProblemanaspesquisasderegistrosquecontenham"["(abrecolchete)-Índice, ARQProblemanaspesquisasderegistrosquecontenham"["(abrecolchete)-Plataforma, ARQProblemanaspesquisasderegistrosquecontenham"["(abrecolchete)-Ocorrência, ARQProblemanaspesquisasderegistrosquecontenham"["(abrecolchete)-Solução, ARQProblemanaspesquisasderegistrosquecontenham"["(abrecolchete)-Observação -->
