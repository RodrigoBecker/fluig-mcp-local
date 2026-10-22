---
title: "Identity | Por que o usuário recebe um e-mail de convite mesmo quando seleciono a opção Senha Temporária durante a criação?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=192091701"
scraped_at: "2026-03-09T04:32:29.785Z"
depth: 3
anchors: 0
child_links: 56
---

# Identity | Por que o usuário recebe um e-mail de convite mesmo quando seleciono a opção Senha Temporária durante a criação?

**Dúvida**

Por que o usuário recebe um e-mail de convite mesmo quando seleciono a opção Senha Temporária durante a criação?

**Solução**

Este tipo de situação ocorre quando o usuário que foi adicionado já estava cadastrado em outra empresa do Identity com o mesmo e-mail. Nesse caso, mesmo selecionando a opção de ativação por senha temporária, o e-mail de convite será enviado.

Ao receber o e-mail de convite, o recomendado é que usuário faça a autenticação utilizando a senha pessoal (ou seja, a senha própria do Identity):

1. Acessar o Identity através do *link* enviado na mensagem de e-mail.
2. Informar a senha pessoal para acessar o Identity.

A conta do usuário será vinculada a ambas as empresas e ele poderá alternar entre elas utilizando o menu localizado no canto superior direito, conforme explicado na documentação de [Troca de contextos](/display/fluig/Identity+%7C+Troca+de+contextos).

Atenção

Caso o administrador do novo contexto permita a autenticação utilizando a senha do Active Directory, e esta seja informada pelo usuário, a conta será vinculada a ambas as empresas, mas ele não poderá fazer a troca de contextos pelo menu, apenas pela URL.
