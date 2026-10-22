---
title: "18733579 DSAUREV-11067 DT Integração Demonstrativo de análise x PLS"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=821562168"
scraped_at: "2026-03-09T05:34:27.822Z"
depth: 4
anchors: 5
child_links: 123
---

# 18733579 DSAUREV-11067 DT Integração Demonstrativo de análise x PLS

## 01. DADOS GERAIS

| Produto: | TOTVS Saúde Planos |
| --- | --- |
| Linha de Produto: | Linha Protheus |
| Segmento: | Saúde |
| Módulo: | Demonstrativo |
| Função: | gerar demonstrativo |
| País: | Brasil |
| Ticket: | 18733579 |
| Requisito/Story/Issue (informe o requisito relacionado) : | DSAUREV-11067 |

## 02. SITUAÇÃO/REQUISITO

Em situações em que o demonstrativo de análise era extenso, observava-se um consumo elevado de memória RAM pelo navegador. Isso resultava, em alguns casos, no travamento do portal ou na incapacidade de gerar o demonstrativo.

## 03. SOLUÇÃO

Foi constatado que o problema ocorre pois o processamento do pdf era feito totalmente pelo front-end, assim se tinha um consumo elevado de memória RAM pelo navegador. Como solução desenvolvemos uma integração nativa com PLS para geração do demonstrativo de análise, onde todo o processamento será feito pelo back-end, não sofrendo por problemas de desempenho por parte do cliente.

Para o cliente poder utilizar a nova funcionalidade ele irá precisar ter os seguintes fontes na última versão em seu Protheus:

- **HEALTHREST.PRW**
- **PLSTISS.PRW**
- **PLSRELPC.PRW**
- **PLSDEMONSTRATIVOANALISECONTASSERVICE.TLPP**
- **PLSDEMONSTRATIVOANALISECONTASREQUEST.TLPP**

 O cliente também deve ativar o parâmetro **buscaDemonstrativoAnalisePls**, no Autorizador Admin.

![](/download/attachments/821562168/image-2024-1-16_14-21-56.png?version=1&modificationDate=1706106714443&api=v2)

Após isso ao Gerar o demonstrativo de Análise no portal autorizador, com todas as configurações, o mesmo estará realizando a consulta diretamente no PLS.

![](/download/attachments/821562168/image-2024-1-16_14-32-34.png?version=1&modificationDate=1706106714207&api=v2)

## 04. DEMAIS INFORMAÇÕES

Não se aplica.

## 05. ASSUNTOS RELACIONADOS

Não se aplica.


<!-- anchors: id-18733579DSAUREV11067DTIntegraçãoDemonstrativodeanálisexPLS-01.DADOSGERAIS, id-18733579DSAUREV11067DTIntegraçãoDemonstrativodeanálisexPLS-02.SITUAÇÃO/REQUISITO, id-18733579DSAUREV11067DTIntegraçãoDemonstrativodeanálisexPLS-03.SOLUÇÃO, id-18733579DSAUREV11067DTIntegraçãoDemonstrativodeanálisexPLS-04.DEMAISINFORMAÇÕES, id-18733579DSAUREV11067DTIntegraçãoDemonstrativodeanálisexPLS-05.ASSUNTOSRELACIONADOS -->
