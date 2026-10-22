---
title: "14315446 DVARMIL-604 DT - Correção error.log ao alterar data de entrega pela rotina Controle Ent. Veic (VEICC610)"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=687753146"
scraped_at: "2026-03-09T05:32:17.780Z"
depth: 4
anchors: 8
child_links: 125
---

# 14315446 DVARMIL-604 DT - Correção error.log ao alterar data de entrega pela rotina Controle Ent. Veic (VEICC610)

## 01. DADOS GERAIS

| Produto: | TOTVS DMS |
| --- | --- |
| Linha de Produto: | Linha Protheus |
| Segmento: | Varejo |
| Módulo: | TOTVS DMS (Linha Protheus) - Veículos (SIGAVEI) |
| Função: | Controle Ent. Veic (VEICC610) |
| País: | Brasil |
| Ticket: | 14315446 |
| Requisito/Story/Issue (informe o requisito relacionado) : | DVARMIL-604 |

****

## 02. SITUAÇÃO/REQUISITO

Ao utilizar a rotina **Controle Ent. Veic (VEICC610)** e tentar alterar a data da entrega, o sistema exibe o error.log abaixo:

*"THREAD ERROR ([14720], leand, DESKTOP-04JIL10)   23/05/2022 16:29:13*
*array out of bounds [13] of [12]  on VEIXX006(VEIXX006.PRW) 19/11/2019 15:26:44 line : 70"*

## 03. SOLUÇÃO

Alterada a rotina **Controle Ent. Veic (VEICC610) **para que ao tentar alterar a data da entrega, o processo seja executado sem apresentação do error.log.

### Procedimentos para execução

                        - [Passo 01](#tabs-passo1)

                        - [Passo 02](#tabs-passo2)

- Acessar a rotina Controle Ent. Veic (VEICC610), selecione a filial de entrega e posicione no veículo faturado;
- Vá em "Outras Ações" e selecione a opção "Alt. Data de Entrega";
- A rotina será aberta e não exibirá o error log.

![](/download/attachments/687753146/image2022-5-23_17-31-34.png?version=1&modificationDate=1653338132000&api=v2)

## 04. DEMAIS INFORMAÇÕES

| Pacotes gerados: | 12.1.27: https://suporte.totvs.com/portal/p/10098/download?e=106878912.1.33: https://suporte.totvs.com/portal/p/10098/download?e=1068790 |
| --- | --- |

## 05. ASSUNTOS RELACIONADOS

- Não há.


<!-- anchors: id-14315446DVARMIL604DTCorreçãoerror.logaoalterardatadeentregapelarotinaControleEnt.Veic(VEICC610)-01.DADOSGERAIS, id-14315446DVARMIL604DTCorreçãoerror.logaoalterardatadeentregapelarotinaControleEnt.Veic(VEICC610)-02.SITUAÇÃO/REQUISITO, id-14315446DVARMIL604DTCorreçãoerror.logaoalterardatadeentregapelarotinaControleEnt.Veic(VEICC610)-03.SOLUÇÃO, id-14315446DVARMIL604DTCorreçãoerror.logaoalterardatadeentregapelarotinaControleEnt.Veic(VEICC610)-Procedimentosparaexecução, aui-uid-0, tabs-passo1, id-14315446DVARMIL604DTCorreçãoerror.logaoalterardatadeentregapelarotinaControleEnt.Veic(VEICC610)-04.DEMAISINFORMAÇÕES, id-14315446DVARMIL604DTCorreçãoerror.logaoalterardatadeentregapelarotinaControleEnt.Veic(VEICC610)-05.ASSUNTOSRELACIONADOS -->
