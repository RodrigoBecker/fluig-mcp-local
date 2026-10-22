---
title: "DES - Utilização do hAPI.getCardValue() com campos tipo multipla escolha"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=190519175"
scraped_at: "2026-03-09T04:45:23.027Z"
depth: 3
anchors: 8
child_links: 57
---

# DES - Utilização do hAPI.getCardValue() com campos tipo multipla escolha

# Índice

# Plataforma

**Produto:**TOTVS Fluig Plataforma

# Ocorrência

Utilização do hAPI.getCardValue() com campos tipo múltipla escolha.

# Causa

Campos do tipo múltipla escolha tem um tratamento diferente dos campos simples.

Um campo do tipo 'checkbox', 'radio' ou um 'select' (combo-box) por exemplo, no banco de dados fica armazenado o valor da propriedade 'value' no campo, mas caso não houver esta propriedade, os campos 'radio' e 'checkbox' ficam com o valor "on" no banco de dados, enquanto o 'select' fica com o valor da descrição de uma das opções.

Assim como um campo simples, caso o mesmo não for preenchido ou não for selecionado uma opção em um campo, o retorno no hAPI.getCardValue() será vazio.

# Solução

Uma boa prática no desenvolvimento de formulários é sempre utilizar a propriedade 'value'!

Isto faz com que seja armazenado exatamente o valor desejado, sendo possível assim **tratar os dados** posteriormente **em workflows e relatórios** por exemplo. 
Abaixo tem um exemplo especificamente da propriedade 'value' em alguns campos para melhor entendimento:

[?](#)

| `Atendimento Faturado?````` `Cartão:````````` `Cartão:``````Visa````Master````Elo`````  |
| --- |

Para recuperar as informações nos wofklows, basta utilizar o hAPI.getCardValue("campoNameNoHTML"). Quando for consultado o valor do campo "Cartão" como no exemplo acima, o retorno será o do 'value', por exemplo: "visa" ou "master". No caso do campo 'ckAtendimentoFaturado' ocorre a mesma coisa, exemplo:

[?](#)

| `if` `(hAPI.getCardValue(``"ckAtendimentoFaturado"``) ==``"sim"``){``` ```//Se foi faturado o atendimento, segue o procedimento``` ```if` `(hAPI.getCardValue(``"cartaoRadio"``) ==``"visa"``){````//Então aqui pode ter o desenvolvimento de uma rotina qualquer...````}``}` |
| --- |

# Observações

Apesar de não ser utilizado aqui, pois é somente um exemplo, é **muito importante seguir a Style Guide para o desenvolvimento de formulários!**

Para mais detalhes sobre desenvolvimentos sobre a plataforma, verifique as documentações de [formulários](https://tdn.totvs.com/x/U4l8B) e [processos](https://tdn.totvs.com/x/widbB).


<!-- anchors: DESUtilizaçãodohAPI.getCardValue()comcampostipomultiplaescolha-Índice, DESUtilizaçãodohAPI.getCardValue()comcampostipomultiplaescolha-Plataforma, DESUtilizaçãodohAPI.getCardValue()comcampostipomultiplaescolha-Ocorrência, DESUtilizaçãodohAPI.getCardValue()comcampostipomultiplaescolha-Causa, DESUtilizaçãodohAPI.getCardValue()comcampostipomultiplaescolha-Solução, highlighter_423075, highlighter_985813, DESUtilizaçãodohAPI.getCardValue()comcampostipomultiplaescolha-Observações -->
