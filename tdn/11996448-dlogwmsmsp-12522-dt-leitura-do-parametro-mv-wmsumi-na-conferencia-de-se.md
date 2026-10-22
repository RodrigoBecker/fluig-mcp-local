---
title: "11996448 DLOGWMSMSP-12522 DT Leitura do parâmetro MV_WMSUMI na Conferência de Separação (WMSV001)"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=639933888"
scraped_at: "2026-03-09T05:31:04.872Z"
depth: 4
anchors: 15
child_links: 127
---

# 11996448 DLOGWMSMSP-12522 DT Leitura do parâmetro MV_WMSUMI na Conferência de Separação (WMSV001)

## 01. DADOS GERAIS

| Produto: | TOTVS Logística WMS |
| --- | --- |
| Linha de Produto: | Linha Protheus |
| Segmento: | Logística |
| Módulo: | SIGAWMS - Gestão de Armazenagem |
| Função: | WMSV001 - Coletor |
| País: | Brasil |
| Ticket: | 11996448 |
| Requisito/Story/Issue (informe o requisito relacionado) : | DLOGWMSMSP-12522 |

****

## 02. SITUAÇÃO/REQUISITO

Ainda que configurado o parâmetro MV_WMSUMI com valores '1' ou '2' (utilizar primeira ou segunda unidade de medida, respectivamente), no processo de conferência de expedição é aberta a tela solicitando a unidade de medida.

## 03. SOLUÇÃO

Efetuada leitura do parâmetro MV_WMSUMI. Além disso, somente será solicitada a unidade de medida no processo de conferência via coletor caso o conteúdo do parâmetro seja diferente de '1' e de '2'.

### Exemplo de Utilização

                        - [Passo 01](#tabs-passo1)

                        - [Passo 02](#tabs-passo2)

                        - [Passo 03](#tabs-passo3)

**MATA010**

- Informe as 2 unidades de medida para um produto.

**WMSA030**

- Defina este produto com *picking* para a primeira unidade de medida e pulmão para a segunda unidade de medida. 

**WMSA070**

- Defina  um serviço de separação com tarefa de conferência.

**MATA410**

- Inclua pedido para o produto, de forma que parte seja obtida de um endereço de pulmão e parte de um endereço de *picking*.

**WMSA150**

- Efetue o endereçamento.

**WMSV001**

- Execute a separação.
- A rotina deverá assumir a primeira unidade de medida se *picking,* ou a segunda, se pulmão.
- **Na conferência, se o parâmetro for:** **MV_WMSUMI = '1',**deverá assumir a primeira unidade de medida, sem exibir tela para seleção de unidade de medida.
-  **MV_WMSUMI = '2',** deverá assumir a segunda unidade de medida, sem exibir tela para seleção de unidade de medida.
-  **MV_WMSUMI = '3'**, deverá abrir a tela para que seja selecionada a unidade de medida a ser considerada.

## 04. DEMAIS INFORMAÇÕES

Não se aplica.

## 05. ASSUNTOS RELACIONADOS

- [Parâmetros (Configurações - SIGAWMS)](https://tdn.totvs.com/pages/viewpage.action?pageId=569475584)


<!-- anchors: id-11996448DLOGWMSMSP12522DTLeituradoparâmetroMV_WMSUMInaConferênciadeSeparação(WMSV001)-01.DADOSGERAIS, id-11996448DLOGWMSMSP12522DTLeituradoparâmetroMV_WMSUMInaConferênciadeSeparação(WMSV001)-02.SITUAÇÃO/REQUISITO, id-11996448DLOGWMSMSP12522DTLeituradoparâmetroMV_WMSUMInaConferênciadeSeparação(WMSV001)-03.SOLUÇÃO, id-11996448DLOGWMSMSP12522DTLeituradoparâmetroMV_WMSUMInaConferênciadeSeparação(WMSV001)-ExemplodeUtilização, aui-uid-0, aui-uid-1, aui-uid-2, tabs-passo1, tabs-passo2, tabs-passo3, tabs-passo4, tabs-passo5, tabs-passo6, id-11996448DLOGWMSMSP12522DTLeituradoparâmetroMV_WMSUMInaConferênciadeSeparação(WMSV001)-04.DEMAISINFORMAÇÕES, id-11996448DLOGWMSMSP12522DTLeituradoparâmetroMV_WMSUMInaConferênciadeSeparação(WMSV001)-05.ASSUNTOSRELACIONADOS -->
