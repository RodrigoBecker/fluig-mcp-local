---
title: "Identity | Como formatar o relatório de parceiros para exibição em colunas no Microsoft Excel?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=279171926"
scraped_at: "2026-03-09T04:34:33.143Z"
depth: 3
anchors: 0
child_links: 56
---

# Identity | Como formatar o relatório de parceiros para exibição em colunas no Microsoft Excel?

**Dúvida**

Como formatar o relatório de parceiros para exibição em colunas no Microsoft Excel?

**Solução**

O relatório de parceiros extraído do Identity é tabulado por vírgula. 

Para configurar o Microsoft Excel 2013 para exibi-lo em colunas, siga os passos abaixo:

1. Abrir o **Microsoft Excel 2013**.
2. Selecionar a primeira célula do relatório (**A1**).
3. Selecionar a aba **Dados**.
4. Acionar **Texto para Colunas**.
5. Na primeira tela do *wizard* acionar **Avançar**.
6. Assinalar a opção **Vírgula** na seção Delimitadores e acionar **Avançar**.
7. Acionar **Concluir**.

![](/download/attachments/279171926/tabulacao_virgula.gif?version=1&modificationDate=1497449770000&api=v2)

**oculto**

Conforme informação repassada pela Andressa em 17/03/2020:

Parceiros é um tipo de empresa no Identity que consegue criar outras empresas. Isso foi feito pra canais fluig, por exemplo a TOTVS Curitiba, vamos dizer que eles vendem fluig lá eles são uma empresa tipo *partner* dentro do Identity. Com isso eles tem permissão pra criar outras empresas e eles também tem permissão para distribuir licença do fluig para esses clientes (que são todas empresas filhas da *partner*). O usuário administrador dessa empresa *partner* consegue gerar um relatório de todas as empresas que ele tem cadastrado e de quantidade de licenças.

No [Release notes](https://tdn.totvs.com/pages/releaseview.action?pageId=269063445) versão master-66 essa funcionalidade foi liberada, como na imagem abaixo. Reforçando que só quem vende fluig pode ser parceiro, então os clientes mesmo nem devem saber dessa opção. E em produção, por enquanto tem só uma empresa parceira que vende fluig.

![](https://lh3.googleusercontent.com/-7xXVrrqz4ZQ/XnEtfhO4xTI/AAAAAAAAASg/RX_iJNaFTnA2gl52NnIAc-Mq7fWeqYVMwCK8BGAsYHg/s0/Capturar.PNG)
