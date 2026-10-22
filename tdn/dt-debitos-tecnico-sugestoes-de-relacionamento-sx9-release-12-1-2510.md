---
title: "DT Débitos técnico - Sugestões de relacionamento SX9 - release 12.1.2510"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=916421119"
scraped_at: "2026-03-09T05:36:09.982Z"
depth: 4
anchors: 6
child_links: 126
---

# DT Débitos técnico - Sugestões de relacionamento SX9 - release 12.1.2510

## 01. DADOS GERAIS

| Produto: | TOTVS Gestão Jurídica - Linha SISJURI |
| --- | --- |
| Linha de Produto: | Linha Protheus |
| Segmento: | Jurídico |
| País: | Brasil |
| Ticket: | Não há |
| Story: | DJURFAT1-20804 |

## 02. SITUAÇÃO/REQUISITO

Necessário ajustes no dicionário para corrigir os débitos técnicos sinalizado no relatório da Engenharia.

## 03. SOLUÇÃO

Ajuste no relacionamento (SX9) abaixo:

| OWNER | X9_DOM | X9_CDOM | X9_LIGDOM | X9_LIGCDOM | X9_EXPDOM | X9_EXPCDOM | ATRIBUTO |
| --- | --- | --- | --- | --- | --- | --- | --- |
| OWNER | X9_DOM | X9_CDOM | X9_LIGDOM | X9_LIGCDOM | X9_EXPDOM | X9_EXPCDOM | ATRIBUTO |
| SIGAPFS | ACY | NX0 | 1 | N | ACY_GRPVEN | NX0_CGRUPO | INIPAD |
| SIGAPFS | ACY | NXA | 1 | N | ACY_GRPVEN | NXA_CGRPCL | INIPAD |
| SIGAPFS | CTO | NUG | 1 | N | CTO_MOEDA | NUG_CMOEDA | INIPAD |
| SIGAPFS | CTO | NXA | 1 | N | CTO_MOEDA | NXA_CMOEDA | INIPAD |
| SIGAPFS | CTO | NX0 | 1 | N | CTO_MOEDA | NX0_CMOEDA | INIPAD |
| SIGAPFS | CTO | NXF | 1 | N | CTO_MOEDA | NXF_CMOEDA | INIPAD |
| SIGAPFS | NRH | NYW | 1 | N | NRH_COD | NYW_TIPO | INIPAD |
| SIGAPFS | NS7 | NX0 | 1 | N | NS7_COD | NX0_CESCR | INIPAD |
| SIGAPFS | NT0 | NX0 | 1 | N | NT0_COD | NX0_CCONTR | INIPAD |
| SIGAPFS | NT0 | NX1 | 1 | N | NT0_COD | NX1_CCONTR | INIPAD |
| SIGAPFS | NT0 | NXA | 1 | N | NT0_COD | NXA_CCONTR | INIPAD |
| SIGAPFS | NT0 | NXC | 1 | N | NT0_COD | NXC_CCONTR | INIPAD |
| SIGAPFS | NW2 | NX8 | 1 | N | NW2_COD | NX8_CJCONT | INIPAD |
| SIGAPFS | NXV | NUF | 1 | N | NXV_COD | NUF_CMOTEM | INIPAD |
| SIGAPFS | OHU | NX0 | 1 | N | OHU_CODIGO | NX0_TPFECH | INIPAD |
| SIGAPFS | RD0 | NXA | 1 | N | RD0_CODIGO | NXA_USRALT | INIPAD |
| SIGAPFS | RD0 | NXA | 1 | N | RD0_CODIGO | NXA_USRCAN | INIPAD |
| SIGAPFS | SA1 | NXA | 1 | N | A1_COD+A1_LOJA | NXA_CLIPG+NXA_LOJPG | INIPAD |
| SIGAPFS | SA1 | NX1 | 1 | N | A1_COD+A1_LOJA | NX1_CCLIENT+NX1_CLOJA | INIPAD |

## 04. DEMAIS INFORMAÇÕES

# IMPORTANTE!

Executar atualização de dicionário via UPDDISTR com o pacote de expedição contínua com data igual ou superior a 13/03/2025.

## 05. ASSUNTOS RELACIONADOS

- [NX0 - Pré-Fatura](/pages/viewpage.action?pageId=510514339)
- [NXA - Fatura](/display/PROT/NXA+-+Fatura)
- [NUG - WO Casos](/display/PROT/NUG+-+WO+Casos)
- [NUF - WO](/display/PROT/NUF+-+WO)
- [NX1 - Casos da Pré-Fatura](/pages/viewpage.action?pageId=510514370)
- [NX8 - Contratos da Pré-Fatura](/pages/viewpage.action?pageId=553333870)


<!-- anchors: DTDébitostécnicoSugestõesderelacionamentoSX9release12.1.2510-01.DADOSGERAIS, DTDébitostécnicoSugestõesderelacionamentoSX9release12.1.2510-02.SITUAÇÃO/REQUISITO, DTDébitostécnicoSugestõesderelacionamentoSX9release12.1.2510-03.SOLUÇÃO, DTDébitostécnicoSugestõesderelacionamentoSX9release12.1.2510-04.DEMAISINFORMAÇÕES, DTDébitostécnicoSugestõesderelacionamentoSX9release12.1.2510-IMPORTANTE!, DTDébitostécnicoSugestõesderelacionamentoSX9release12.1.2510-05.ASSUNTOSRELACIONADOS -->
