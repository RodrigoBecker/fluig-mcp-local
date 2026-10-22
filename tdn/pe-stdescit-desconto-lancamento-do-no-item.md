---
title: "PE STDescIt - Desconto lançamento do no item"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=1017425053"
scraped_at: "2026-03-09T05:39:08.275Z"
depth: 4
anchors: 8
child_links: 123
---

# PE STDescIt - Desconto lançamento do no item

## 01. DADOS GERAIS

| Produto: | TOTVS Varejo Lojas |
| --- | --- |
| Linha de Produto: | Linha Protheus |
| Segmento: | Varejo |
| Módulo: | TOTVS Backoffice (Linha Protheus) - Controle de lojas (SIGALOJA) |
| Função: | Registro de Item |
| País: | Brasil |

****

## 02. DESCRIÇÃO

Ponto de entrada que possibilita conceder desconto no item no momento em que o produto é lançado na interface de venda do Totvs PDV.

O ponto de entrada é executado um pouco antes do produto ser registrado, ou seja, após concedido os descontos do sistema.

## 03. DEMAIS INFORMAÇÕES

### Parâmetros:

| Nome | Tipo | Descrição |
| --- | --- | --- |
| Nome | Tipo | Descrição |
| PARAMIXB[1] | Caractere | Código Cliente |
| PARAMIXB[2] | Caractere | Loja Cliente |
| PARAMIXB[3] | Caractere | Código do Produto |
| PARAMIXB[4] | Numérico | Quantidade |
| PARAMIXB[5] | Numérico | Valor Unitário |
| PARAMIXB[6] | Numérico | Valor do Item |
| PARAMIXB[7] | Numérico | Valor ou Percentual de Desconto |
| PARAMIXB[8] | Caractere | Tipo do desconto (V=Valor / P=Percentual) |
| PARAMIXB[9] | Lógico | Indica se o produto lançado é PBM (Programa de Benefícios em Medicamentos)(Obs: Obsoleto, mantido apenas por compatibilidade) |

### Retorno:

Deve ser retornado um array com duas posições:

| Tipo | Descrição |
| --- | --- |
| Tipo | Descrição |
| Array | aRet[1] = Valor de Desconto a ser aplicado no ItemaRet[2] = Percentual de Desconto a ser aplicado no Item |

- Caso o valor retornado na primeira posição do array seja maior que zero, então o sistema aplica este valor como desconto no item
- Caso o valor retornado na segunda posição do array seja maior que zero, então o sistema aplica este percentual como desconto no item.

### Exemplo:

[?](#)

| 123456789101112131415161718192021222324252627282930313233343536373839 | `User Function STDescIt()``Local cCliente  := PARAMIXB[1]  //Codigo Cliente``Local cLojaCli  := PARAMIXB[2]  //Loja Cliente``Local cCodProd  := PARAMIXB[3]  //Codigo do Produto``Local nQuant    := PARAMIXB[4]  //Quantidade``Local nVlrUnit  := PARAMIXB[5]  //Valor Unitario``Local nVlrItem  := PARAMIXB[6]  //Valor do Item``Local nDesconto := PARAMIXB[7]  //Valor ou Percentual de Desconto``Local cTipoDesc := PARAMIXB[8]  //Tipo do desconto (V=Valor / P=Percentual)``Local lIsPBM    := PARAMIXB[9]  //Indica se é PBM` `Local nVlrDescIT:= 0            //Valor desconto Item``Local nPerDescIT:= 0            //Percentual desconto Item``Local aRet      := {}``Local nDescPerc := 0            //Percentual de Desconto a ser considerado no Item``Local nDescVlr  := 0            //Valor de Desconto a ser considerado no Item` `If cTipoDesc == "V" //Desconto por Percentual````nVlrDescIT := nDesconto````nDescVlr   := nVlrDescIT``ElseIf cTipoDesc == "P" //Desconto por Valor````nPerDescIT := nDesconto````nDescPerc  := nPerDescIT``EndIf` `If cCodProd = "000001" //Se for o produto 000001, aplica o desconto````nDescVlr    := 10.00   //Atribua aqui o Valor desejado de desconto no item````nDescPerc   := 9.50    //Atribua aqui o Percentual desejado de desconto no item``EndIf` `/*``Retorna um array com 2 posições, sendo:````aRet[1] = Valor de Desconto a ser aplicado no Item````aRet[2] = Percentual de Desconto a ser aplicado no Item``*/``aAdd(aRet, nDescVlr)``aAdd(aRet, nDescPerc)` `Return aRet` |
| --- | --- |

## 04. ASSUNTOS RELACIONADOS

- FAQ do Varejo: [Conceitos - Controle de Lojas - P12](https://tdn.totvs.com/display/PROT/Conceitos+-+Controle+de+Lojas+-+P12)


<!-- anchors: PESTDescItDescontolançamentodonoitem-01.DADOSGERAIS, PESTDescItDescontolançamentodonoitem-02.DESCRIÇÃO, PESTDescItDescontolançamentodonoitem-03.DEMAISINFORMAÇÕES, PESTDescItDescontolançamentodonoitem-Parâmetros:, PESTDescItDescontolançamentodonoitem-Retorno:, PESTDescItDescontolançamentodonoitem-Exemplo:, highlighter_711154, PESTDescItDescontolançamentodonoitem-04.ASSUNTOSRELACIONADOS -->
