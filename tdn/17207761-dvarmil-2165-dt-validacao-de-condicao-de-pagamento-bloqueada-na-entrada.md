---
title: "17207761 DVARMIL-2165 DT - Validação de Condição de Pagamento bloqueada na Entrada por Compra Veículos, Máquinas e Equipamentos"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=773507132"
scraped_at: "2026-03-09T05:33:50.508Z"
depth: 4
anchors: 8
child_links: 124
---

# 17207761 DVARMIL-2165 DT - Validação de Condição de Pagamento bloqueada na Entrada por Compra Veículos, Máquinas e Equipamentos

## 01. DADOS GERAIS

| Produto: | TOTVS DMS |
| --- | --- |
| Linha de Produto: | Linha Protheus |
| Segmento: | Varejo |
| Módulo: | TOTVS DMS (Linha Protheus) - Veículos (SIGAVEI) |
| Função: | Entrada por Compra (VEIXA001) |
| País: | Brasil |
| Ticket: | 17207761 |
| Requisito/Story/Issue (informe o requisito relacionado) : | DVARMIL-2165 |

****

## 02. SITUAÇÃO/REQUISITO

A rotina de **Entrada por Compra (VEIXA001)** não está validando se a Condição de Pagamento informada está bloqueada (E4_MSBLQL).

## 03. SOLUÇÃO

Alterada a rotina de **Entrada por Compra (VEIXA001)** para validar se a Condição de Pagamento informada está bloqueada (E4_MSBLQL).

### Procedimentos para utilização

                        - [Processo Condição de Pagamento Bloqueada](#tabs-passo1)

- Acessar a rotina de Entrada por Compra (VEIXA001) e clicar no botão "Incluir";
- Prencher os dados necessários do cabeçalho e no campo "Cond.Pgto" (VVF_FORPAG), preencher uma condição de pagamento que está bloqueada (E4_MSBLQL = “1” );
- O sistema validará corretamente o bloqueio da forma de pagamento.

![](/download/attachments/773507132/image2023-6-27_7-26-25.png?version=1&modificationDate=1687861585027&api=v2)

## 04. DEMAIS INFORMAÇÕES

| Pacotes gerados: | 12.1.2210: https://suporte.totvs.com/portal/p/10098/download?e=1110919 12.1.27: https://suporte.totvs.com/portal/p/10098/download?e=1110920 12.1.33: https://suporte.totvs.com/portal/p/10098/download?e=1110921  |
| --- | --- |

## 05. ASSUNTOS RELACIONADOS

- Não há.


<!-- anchors: id-17207761DVARMIL2165DTValidaçãodeCondiçãodePagamentobloqueadanaEntradaporCompraVeículos,MáquinaseEquipamentos-01.DADOSGERAIS, id-17207761DVARMIL2165DTValidaçãodeCondiçãodePagamentobloqueadanaEntradaporCompraVeículos,MáquinaseEquipamentos-02.SITUAÇÃO/REQUISITO, id-17207761DVARMIL2165DTValidaçãodeCondiçãodePagamentobloqueadanaEntradaporCompraVeículos,MáquinaseEquipamentos-03.SOLUÇÃO, id-17207761DVARMIL2165DTValidaçãodeCondiçãodePagamentobloqueadanaEntradaporCompraVeículos,MáquinaseEquipamentos-Procedimentosparautilização, aui-uid-0, tabs-passo1, id-17207761DVARMIL2165DTValidaçãodeCondiçãodePagamentobloqueadanaEntradaporCompraVeículos,MáquinaseEquipamentos-04.DEMAISINFORMAÇÕES, id-17207761DVARMIL2165DTValidaçãodeCondiçãodePagamentobloqueadanaEntradaporCompraVeículos,MáquinaseEquipamentos-05.ASSUNTOSRELACIONADOS -->
