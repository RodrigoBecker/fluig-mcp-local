---
title: "LMS 025 - Por que não é possível excluir um treinamento?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=268826298"
scraped_at: "2026-03-09T04:48:55.360Z"
depth: 3
anchors: 5
child_links: 71
---

# LMS 025 - Por que não é possível excluir um treinamento?

# Índice

# Plataforma

**Produto:**TOTVS Fluig Plataforma

**Card:** LMS

# Ocorrência

Ao tentar excluir um treinamento é exibida a mensagem "Não é possível remover o Treinamento, existem matrículas ativas ou finalizadas".

# Causa

O treinamento possui matrículas ou requisição de matrícula.

# Solução

Um treinamento só pode ser excluído se nenhuma requisição de matrícula foi realizada. Caso uma matrícula ou requisição de matrícula tenha sido realizada, o treinamento não pode ser excluído, pois fica salvo como histórico. Nem mesmo cancelando as matrículas o treinamento pode ser excluído, pois este procedimento também fica registrado em histórico.

**O que pode ser feito?**

Uma alternativa é ocultar o treinamento do catálogo. Para isso, é necessário que:

- nas [configurações de trilhas e treinamentos](/pages/viewpage.action?pageId=234458366), a opção **Permite visualizar treinamentos e trilhas arquivados** esteja configurada com a opção **Não**;
- o campo **Situação** do cadastro do [treinamento](/pages/viewpage.action?pageId=233766426) esteja configurado com a opção **Arquivado**.

Assim, os treinamentos arquivados não serão exibidos no catálogo.

Importante!

A partir da atualização **1.6.5-190219**, o **LMS** não faz mais parte da plataforma para **novas instalações**.

Mas, não se preocupe: se você adquiriu a plataforma com o **LMS incluso**, entre em contato com o [Suporte Fluig](https://suporte.fluig.com/) para que você consiga utiliza-lo normalmente – mesmo após a atualização **1.6.5-190219**. Se você não lembra se o LMS está incluso ou não no seu pacote, consulte sua proposta comercial ou entre em contato com o seu ESN.


<!-- anchors: LMS025Porquenãoépossívelexcluirumtreinamento?-Índice, LMS025Porquenãoépossívelexcluirumtreinamento?-Plataforma, LMS025Porquenãoépossívelexcluirumtreinamento?-Ocorrência, LMS025Porquenãoépossívelexcluirumtreinamento?-Causa, LMS025Porquenãoépossívelexcluirumtreinamento?-Solução -->
