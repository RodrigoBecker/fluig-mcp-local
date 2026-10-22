---
title: "Manipulação de dados dos processos para o Analytics"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=95618104"
scraped_at: "2026-03-09T03:04:13.083Z"
depth: 1
anchors: 2
child_links: 36
---

# Manipulação de dados dos processos para o Analytics

Em todas as movimentações de um processo os dados do mesmo são enviados ao Analytics mantendo sua versão atual. Informações referentes ao processo são enviados automaticamente e informações do formulário podem ser manipuladas no evento **beforeSendData.**

A função para tratar esse evento do processo possui dois parâmetros customFields e customFacts.

O primeiro parâmetro, customField*s,* é um *array* de *String* já instanciado contendo 30 posições (de 0 a 29) . O segundo parâmetro, customFacts, também é um *array* mas de 10 posições onde os dados devem ser do tipo *double* e o seu conteúdo será tratado como um "fato".

Apenas a partir da atualização 1.4.13 existem 30 campos customField

Fique atento a isso em seus códigos.

Abaixo um exemplo de implementação:

**beforeSendData**

[?](#)

| `function` `beforeSendData(customFields, customFacts) {````customFields[0] =``"1"``;````customFields[1] =hAPI.getCardValue(``"campo_do_formulario"``);` ```customFacts[0]=10.53;````customFacts[1]=java.lang.Double.parseDouble(hAPI.getCardValue(``"campo_valor"``));````}` |
| --- |

### Envio de Dados pelo Editor de Formulários

É possível definir os campos de formulário que deverão ser enviados para o Analytics através do editor de formulários *web* da plataforma. 

Para isso, é preciso assinalar a opção **Usar Analytics?**nos campos de formulário que serão remetidos para a ferramenta. O limite no número de posições é o mesmo disponível para envio através do evento beforeSendData. 

Campos de formulário dos tipos Número e Avaliação serão considerados "fatos" no Analytics, enquanto os demais campos são enviados como "atributos".

![](/download/attachments/95618104/Screenshot%2022_06%20001.png?version=1&modificationDate=1466614974000&api=v2)

**O ícone ao lado do nome do campo indica que a opção Usar Analytics? foi marcada**

Formulários desenvolvidos via fluig Studio e exportados para a plataforma não poderão ser alterados pelo editor *web*.


<!-- anchors: highlighter_655878, ManipulaçãodedadosdosprocessosparaoAnalytics-EnviodeDadospeloEditordeFormulários -->
