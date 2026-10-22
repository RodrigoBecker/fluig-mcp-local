---
title: "BPM 009 - Como comparar variáveis de tipos \"string\" e \"number\" em eventos com maior e menor?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=201743525"
scraped_at: "2026-03-09T03:52:58.440Z"
depth: 2
anchors: 7
child_links: 132
---

# BPM 009 - Como comparar variáveis de tipos "string" e "number" em eventos com maior e menor?

# Índice

# Plataforma

**Produto:  **fluig

**Versão: **Todas as versões

# Ocorrência

Constantemente há a necessidade de realizar a comparação entre variáveis, ou com valores fixos, principalmente nas condições de atividades automáticas.

# Causa

O JavaScript só reconhece como *number *valores com um único ponto de até 21 casas decimais, ou seja, valores de *string* com milhares como 1.000.02 não serão considerados *number *e falharão em todas as comparações com uma variável de tal tipo.

# Solução

Modificar a variável de comparação para se adequar ao formato necessário.

Abaixo, seguem exemplos de validações que podem ser utilizadas como condições para atividades automáticas:

**Comparar um campos do formulário com um valor fixo**

[?](#)

| 12345 | `var` `i = parseFloat(hAPI.getCardValue(``"[NOME_DO_CAMPO]"``).replace(``"."` `,``""``).replace(``","` `,``"."``).trim());``log.info(``'********** valor do campo um = '` `+ i);``var` `j = parseFloat(5000.00);``log.info(``'********** valor fixo = '` `+ j);``i >= j;` |
| --- | --- |

**Comparar dois campos do formulário**

[?](#)

| 12345 | `var` `i = parseFloat(hAPI.getCardValue(``"[NOME_DO_CAMPO_UM]"``).replace(``"."` `,``""``).replace(``","` `,``"."``).trim());``log.info(``'********** valor do campo um = '` `+ i);``var` `j = parseFloat(hAPI.getCardValue(``"[NOME_DO_CAMPO_DOIS]"``).replace(``"."` `,``""``).replace(``","` `,``"."``).trim());``log.info(``'********** valor do campo dois = '` `+ j);``i >= j;` |
| --- | --- |


<!-- anchors: BPM009Comocompararvariáveisdetipos"string"e"number"emeventoscommaioremenor?-Índice, BPM009Comocompararvariáveisdetipos"string"e"number"emeventoscommaioremenor?-Plataforma, BPM009Comocompararvariáveisdetipos"string"e"number"emeventoscommaioremenor?-Ocorrência, BPM009Comocompararvariáveisdetipos"string"e"number"emeventoscommaioremenor?-Causa, BPM009Comocompararvariáveisdetipos"string"e"number"emeventoscommaioremenor?-Solução, highlighter_317133, highlighter_63304 -->
