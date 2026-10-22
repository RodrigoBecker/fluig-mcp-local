---
title: "IDE - Por que novos usuários não são provisionados na plataforma?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=267788725"
scraped_at: "2026-03-09T03:38:18.111Z"
depth: 2
anchors: 5
child_links: 45
---

# IDE - Por que novos usuários não são provisionados na plataforma?

# Índice

# Plataforma

**Produto: **TOTVS Fluig Plataforma integrado ao TOTVS Identity

# Ocorrência

Após logar no Identity, os novos usuários tentam usar o aplicativo Fluig, porém recebem a mensagem de que o acesso não é permitido. O que fazer para corrigir esta situação?

# Causa

A opção **Provisionamento "Just in Time" **do cadastro da empresa está desabilitada. Esta opção realiza a criação automática dos usuários no momento do primeiro acesso a partir do aplicativo Fluig do Identity.

# Solução

Para habilitar o provisionamento, seguir as instruções abaixo:

**01.** Acessar a plataforma com o usuário wcmadmin (http://[endereço_fluig]:[porta]/wcmadmin). 

**02.** Editar o cadastro da empresa com a qual o Identity está integrado (**Painel de Controle → WCM → Empresas**).

**03.** Na aba **Autenticação**, marcar a opção **Provisionamento "Just in Time"**.

**04.** Acionar**Salvar**.

Após a alteração, fazer um novo teste de acesso com um dos usuários afetados.

Atenção!

Cada usuário vinculado ao Identity será criado automaticamente na plataforma após autenticar-se pela primeira vez.

![](/download/attachments/267788725/Image%2001%2008%20001.png?version=1&modificationDate=1515420892000&api=v2)


<!-- anchors: IDEPorquenovosusuáriosnãosãoprovisionadosnaplataforma?-Índice, IDEPorquenovosusuáriosnãosãoprovisionadosnaplataforma?-Plataforma, IDEPorquenovosusuáriosnãosãoprovisionadosnaplataforma?-Ocorrência, IDEPorquenovosusuáriosnãosãoprovisionadosnaplataforma?-Causa, IDEPorquenovosusuáriosnãosãoprovisionadosnaplataforma?-Solução -->
