---
title: "DES - Erro wdk/MetaList na criação de novos formulários"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=235332201"
scraped_at: "2026-03-09T04:45:36.490Z"
depth: 3
anchors: 7
child_links: 56
---

# DES - Erro wdk/MetaList na criação de novos formulários

# Índice

# Plataforma

**Produto:**TOTVS Fluig Plataforma

**Versão:** 1.5.7

# Ocorrência

Ao exportar um novo formulário do TDS (TOTVS Developer Studio) para a plataforma, é exibido o seguinte erro em tela: JBAS014581: EJB 3.1 FR 13.3.3: *BMT bean wdk/MetaList should complete transaction before returning*.

****

**Figura 1 - Erro ao exportar o novo formulário**

# Causa

O problema está na utilização de palavras reservadas em campos do formulário, por exemplo: version, documentid, companyid, etc. Ao utilizar esses nomes, a plataforma tentará criar duas colunas com o mesmo código, onde gera o erro da **Figura 1**.

**Exemplo de uso incorreto - Campo documentId**

[?](#)

| ```````````````````````````````````````````````````` |
| --- |

# Solução

O problema é resolvido retirando o uso das palavras reservadas no HTML do formulário.

**Exemplo de uso correto - Campo formDocumentId**

[?](#)

| ```````````````````````````````````````````````````` |
| --- |


<!-- anchors: DESErrowdk/MetaListnacriaçãodenovosformulários-Índice, DESErrowdk/MetaListnacriaçãodenovosformulários-Plataforma, DESErrowdk/MetaListnacriaçãodenovosformulários-Ocorrência, DESErrowdk/MetaListnacriaçãodenovosformulários-Causa, highlighter_196346, DESErrowdk/MetaListnacriaçãodenovosformulários-Solução, highlighter_906533 -->
