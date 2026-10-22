---
title: "FORM 005 - Por que datas em registros de formulários estão perdendo formatação em formatos distintos na base de dados?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=189301985"
scraped_at: "2026-03-09T04:48:08.656Z"
depth: 3
anchors: 6
child_links: 41
---

# FORM 005 - Por que datas em registros de formulários estão perdendo formatação em formatos distintos na base de dados?

# Índice

# Plataforma

**Produto:  **Fluig

**Ambiente:** Fluig Studio

**Versão: Todas**

# Ocorrência

Ao salvar registros de formulários que contenham datas, ou movimentar solicitações com formulários que contenham datas, em algumas situações as datas estão sendo salvas nas metalistas/registros de formulário (tabela única) com padrões diferentes.

# Causa

Isso ocorre quando o navegador utilizado pelos usuários diverge entre Chrome e Firefox/IE. No Chrome, toda e qualquer data é persistida com o padrão americano (yyyy-mm-dd) caso seja utilizado o campo do tipo "date". No caso do Firefox/IE, campos do tipo "date" são substituídos por campos do tipo "text" e então é adicionado a função datePicker do jQuery para os mesmos, sendo assim o campo fica com o padrão brasileiro e é persistido como tal.

# Solução

Caso seja utilizada a versão 1.4.12 ou superior do sistema e o formulário fora criado pelo sistema (através do gerenciamento de processos), basta salvar o formulário novamente (editar e salvar) pra que o formulário inclua o evento inputFields com a formatação de data por padrão. Caso seja um formulário próprio do cliente, pode-se utilizar o evento de formulário inputFields conforme exemplificado no link a seguir: [Exemplo de uso de inputFields](https://tdn.totvs.com/pages/viewpage.action?pageId=75270483#DesenvolvimentodeFormulários-InputFields):

**Código para Datas**

[?](#)

| `function` `inputFields(form) {````if` `(form.getValue(``"NOME_DO_CAMPO_DATA"``).match(``"^[0-3]?[0-9]/[0-3]?[0-9]/(?:[0-9]{2})?[0-9]{2}$"``)) {````var` `split = form.getValue(``"NOME_DO_CAMPO_DATA"``).split(``'/'``);````form.setValue(``"NOME_DO_CAMPO_DATA"``, split[2] +``'-'` `+ split[1] +``'-'` `+ split[0]);````}``}` |
| --- |


<!-- anchors: FORM005Porquedatasemregistrosdeformuláriosestãoperdendoformataçãoemformatosdistintosnabasededados?-Índice, FORM005Porquedatasemregistrosdeformuláriosestãoperdendoformataçãoemformatosdistintosnabasededados?-Plataforma, FORM005Porquedatasemregistrosdeformuláriosestãoperdendoformataçãoemformatosdistintosnabasededados?-Ocorrência, FORM005Porquedatasemregistrosdeformuláriosestãoperdendoformataçãoemformatosdistintosnabasededados?-Causa, FORM005Porquedatasemregistrosdeformuláriosestãoperdendoformataçãoemformatosdistintosnabasededados?-Solução, highlighter_314159 -->
