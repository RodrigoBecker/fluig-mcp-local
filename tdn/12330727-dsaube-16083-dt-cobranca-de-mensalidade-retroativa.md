---
title: "12330727 DSAUBE-16083 DT Cobrança de Mensalidade Retroativa"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=640688752"
scraped_at: "2026-03-09T05:31:00.424Z"
depth: 4
anchors: 6
child_links: 123
---

# 12330727 DSAUBE-16083 DT Cobrança de Mensalidade Retroativa

## 01. DADOS GERAIS

| Produto: | TOTVS Saúde Planos |
| --- | --- |
| Linha de Produto: | Linha Protheus |
| Segmento: | Saúde |
| Módulo: | GESTÃO DE CONTRATOS / FAMÍLIAS |
| Função: | GRUPO FAMILIAR / BENEFICIÁRIOS |
| País: | Brasil |
| Ticket: | 12330727 |
| Requisito/Story/Issue (informe o requisito relacionado) : | DSAUBE-16083 |

****

## 02. SITUAÇÃO/REQUISITO

Quando selecionávamos um beneficiário com o Grupo Empresas - PJ (em Atualizações / Contrato/Família / Grupo Familiar/Beneficiário) para alteração, nos casos antigos em que o beneficiário já era salvo previamente com o campo BA3_DIARET = 0, não era possível modificar a data de corte do retroativo com a última configuração atualizada na tela de subcontrato, pois uma não conformidade no sistema impedia de trazer esse dado que vêm da BQC_DIARET.

## 03. SOLUÇÃO

Foi implementando um ajuste para permitir a alteração do valor contido no campo BA3_DIARET (para grupo empresas PJ), quando ele for igual a zero, o sistema irá pegar o valor da BQC_DIARET, permitindo ao usuário salvar esse novo dado pelo cadastro da família.

# IMPORTANTE!

É importante ressaltar que além dos campos BA3_COBRET/BA3_COBRAT estarem marcados como 1 - Sim, é preciso informar o dia de corte do retroativo para que o cálculo proporcional do retroativo funcione corretamente. LEMBRE-SE: o dia de corte significa que o cálculo do retroativo só irá considerar os beneficiários que têm a data de inclusão após o dia informado, por exemplo, para um beneficiário cadastrado em "29/07/2021", o dia de corte do retroativo (BQC_DIARET) mínimo a ser considerado deve ser o dia 28.

## 04. DEMAIS INFORMAÇÕES

Não se aplica.

## 05. ASSUNTOS RELACIONADOS

```
Não se aplica.
```


<!-- anchors: id-12330727DSAUBE16083DTCobrançadeMensalidadeRetroativa-01.DADOSGERAIS, id-12330727DSAUBE16083DTCobrançadeMensalidadeRetroativa-02.SITUAÇÃO/REQUISITO, id-12330727DSAUBE16083DTCobrançadeMensalidadeRetroativa-03.SOLUÇÃO, id-12330727DSAUBE16083DTCobrançadeMensalidadeRetroativa-IMPORTANTE!, id-12330727DSAUBE16083DTCobrançadeMensalidadeRetroativa-04.DEMAISINFORMAÇÕES, id-12330727DSAUBE16083DTCobrançadeMensalidadeRetroativa-05.ASSUNTOSRELACIONADOS -->
