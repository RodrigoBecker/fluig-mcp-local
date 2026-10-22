---
title: "20843236 DSERTSS1-24058 DT TSS NT 2020.001 - NFE - Rejeição 353 em notas de devolução com o CST 51"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=866051122"
scraped_at: "2026-03-09T05:35:09.346Z"
depth: 4
anchors: 5
child_links: 123
---

# 20843236 DSERTSS1-24058 DT TSS NT 2020.001 - NFE - Rejeição 353 em notas de devolução com o CST 51

## 01. DADOS GERAIS

| Produto: | TSS |
| --- | --- |
| Linha de Produto: | TRANSMISSÃO DE DOCUMENTOS ELETRÔNICOS |
| Segmento: | Backoffice |
| Módulo: | TSS Transmissão de Documentos Eletrônicos |
| Função: | tssnfesefaz.prwnfesefaz.prw |
| Ticket: | 20843236 |
| Requisito/Story/Issue (informe o requisito relacionado) : | DSERTSS1-24058 |

## 02. SITUAÇÃO/REQUISITO

Rejeição 353 em notas de devolução com o CST 51. Foi identificado que a rejeição ocorre pois o valor da tag vICMS na nota de devolução está indo sem abater o diferimento, porem, na nota de origem o valor é gerado corretamente considerando o diferimento.

XML da nota de Origem:

<ICMS51>
<orig>0</orig>
<CST>51</CST>
<modBC>3</modBC>
<pRedBC>0</pRedBC>
<vBC>1000.00</vBC>
<pICMS>12.0000</pICMS>
<vICMSOp>120.00</vICMSOp>
<pDif>29.4100</pDif>
<vICMSDif>35.29</vICMSDif>
**<vICMS>84.71</vICMS>**
</ICMS51>
</ICMS>

XML da nota de Devolução:

<ICMS51>
<orig>0</orig>
<CST>51</CST>
<modBC>3</modBC>
<pRedBC>0</pRedBC>
<vBC>1000.00</vBC>
<pICMS>12.0000</pICMS>
<vICMSOp>120.00</vICMSOp>
<pDif>29.4100</pDif>
<vICMSDif>35.29</vICMSDif>
**<vICMS>120.00</vICMS>**
</ICMS51>
</ICMS>

## 03. SOLUÇÃO

Realizado ajuste para levar o valor correto da tag <vICMS> quando for nota de devolução com CST 51.

## 04. DEMAIS INFORMAÇÕES

Não há

## 05. ASSUNTOS RELACIONADOS

Não há.


<!-- anchors: id-20843236DSERTSS124058DTTSSNT2020.001NFERejeição353emnotasdedevoluçãocomoCST51-01.DADOSGERAIS, id-20843236DSERTSS124058DTTSSNT2020.001NFERejeição353emnotasdedevoluçãocomoCST51-02.SITUAÇÃO/REQUISITO, id-20843236DSERTSS124058DTTSSNT2020.001NFERejeição353emnotasdedevoluçãocomoCST51-03.SOLUÇÃO, id-20843236DSERTSS124058DTTSSNT2020.001NFERejeição353emnotasdedevoluçãocomoCST51-04.DEMAISINFORMAÇÕES, id-20843236DSERTSS124058DTTSSNT2020.001NFERejeição353emnotasdedevoluçãocomoCST51-05.ASSUNTOSRELACIONADOS -->
