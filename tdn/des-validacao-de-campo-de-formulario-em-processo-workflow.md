---
title: "DES - Validação de campo de formulário em processo workflow"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=189305564"
scraped_at: "2026-03-09T04:45:13.739Z"
depth: 3
anchors: 5
child_links: 56
---

# DES - Validação de campo de formulário em processo workflow

# Índice

# Plataforma

**Produto:** TOTVS Fluig Plataforma

# Ocorrência

Após preencher todos os campos do formulário no processo e clicar em "Salvar e Enviar" é exibida a mensagem de que um dos campos não foi preenchido.

# Causa

O campo que está sendo validado no evento validateForm não existe no formulário.

# Solução

Acesse o evento validateForm.js do seu formulário e verifique qual é o campo que ele está validando. O campo deve existir no formulário. 

Para corrigir basta confirmar o campo no formulário e alterá-lo no evento. 

Após fazer isso, exporte o evento para a plataforma novamente. Ao inicializar uma nova solicitação, a validação utilizará o evento atualizado.


<!-- anchors: DESValidaçãodecampodeformulárioemprocessoworkflow-Índice, DESValidaçãodecampodeformulárioemprocessoworkflow-Plataforma, DESValidaçãodecampodeformulárioemprocessoworkflow-Ocorrência, DESValidaçãodecampodeformulárioemprocessoworkflow-Causa, DESValidaçãodecampodeformulárioemprocessoworkflow-Solução -->
