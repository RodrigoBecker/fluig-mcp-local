---
title: "DES - Alterar dados do formulário de uma solicitação a partir de outro formulário"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=243640027"
scraped_at: "2026-03-09T04:45:53.149Z"
depth: 3
anchors: 4
child_links: 57
---

# DES - Alterar dados do formulário de uma solicitação a partir de outro formulário

# Índice

# Plataforma

**Produto:**TOTVS Fluig Plataforma

# Ocorrência

Como alterar o valor de um campo de formulário de uma solicitação já aberta a partir de determinada ação em um novo formulário criado?

# Solução

Para alterar um outro formulário, além do formulário do processo atual, a partir da movimentação de uma solicitação, você poderá utilizar o webservice ECMCardService, método updateCardData, conforme documentação [Utilização de Webservices](/pages/viewpage.action?pageId=73084007). Com este método é possível alterar dados de um formulário diferente do formulário da solicitação aberta em tela. A chamada do webservice deverá estar em um evento do processo que seja executado após o salvamento da alteração do formulário. Para mais informações sobre eventos do processo e desenvolvimento de workflow acesse [Desenvolvimento de Workflow](/display/fluig/Desenvolvimento+de+Workflow).


<!-- anchors: DESAlterardadosdoformuláriodeumasolicitaçãoapartirdeoutroformulário-Índice, DESAlterardadosdoformuláriodeumasolicitaçãoapartirdeoutroformulário-Plataforma, DESAlterardadosdoformuláriodeumasolicitaçãoapartirdeoutroformulário-Ocorrência, DESAlterardadosdoformuláriodeumasolicitaçãoapartirdeoutroformulário-Solução -->
