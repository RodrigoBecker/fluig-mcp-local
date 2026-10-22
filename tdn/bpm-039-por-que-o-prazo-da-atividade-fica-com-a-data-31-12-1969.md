---
title: "BPM 039 - Por que o prazo da atividade fica com a data \"31/12/1969\" ?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=239028070"
scraped_at: "2026-03-09T03:54:02.811Z"
depth: 2
anchors: 6
child_links: 134
---

# BPM 039 - Por que o prazo da atividade fica com a data "31/12/1969" ?

# Índice

# Plataforma

**Produto:  **fluig

**Versão: **Todas as versões

# Ocorrência

O prazo da atividade fica com a data "31/12/1969"

# Causa

Foi criado um evento para calcular uma data para o prazo da atividade. Ao gerar uma data para o prazo, é provável que essa data seja inválida e o sistema envia a primeira data válida que seria essa "31/12/1969".

# Solução

Verificar o código fonte desse evento e corrigir o calculo da data.

# Observações

Datas enviadas via mobile são convertidas para o formato (YYYY-MM-DD), datas enviadas através do Chrome já estão nesse mesmo formato (YYYY-MM-DD) e datas enviadas via IE e Firefox são no formato (DD/MM/YYYY).

A maneira correta de tratar diferentes formatos de data é convertendo todas para um único formato, conforme a documentação [Desenvolvimento de Formulários](https://tdn.totvs.com/pages/viewpage.action?pageId=75270483#DesenvolvimentodeFormulários-InputFields).


<!-- anchors: BPM039Porqueoprazodaatividadeficacomadata"31/12/1969"?-Índice, BPM039Porqueoprazodaatividadeficacomadata"31/12/1969"?-Plataforma, BPM039Porqueoprazodaatividadeficacomadata"31/12/1969"?-Ocorrência, BPM039Porqueoprazodaatividadeficacomadata"31/12/1969"?-Causa, BPM039Porqueoprazodaatividadeficacomadata"31/12/1969"?-Solução, BPM039Porqueoprazodaatividadeficacomadata"31/12/1969"?-Observações -->
