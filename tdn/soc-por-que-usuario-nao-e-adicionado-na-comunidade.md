---
title: "SOC - Por que usuário não é adicionado na comunidade?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=192090791"
scraped_at: "2026-03-09T04:47:55.910Z"
depth: 3
anchors: 6
child_links: 40
---

# SOC - Por que usuário não é adicionado na comunidade?

# Índice

# Plataforma

**Produto: **TOTVS Fluig Plataforma

# Ocorrência

Ao adicionar um usuário ou usuários por grupo diretamente na comunidade é apresentada a mensagem de que o usuário foi adicionado com sucesso. Porém o usuário não vai para a lista de participantes da comunidade.

![](/download/attachments/192090791/adicionar%20usu%C3%A1rio.PNG?version=1&modificationDate=1634822495613&api=v2)

**Figura 1 - Opções para adicionar usuários na comunidade**

******

# Causa

Isto ocorre devido à plataforma Fluig fazer uma validação conferindo se o usuário existe no grupo de membros da comunidade antes de inserir. Como o usuário já existe no grupo ele não é adicionado novamente.

# Solução

Acessar o cadastro de grupos no **Painel de Controle**, selecionar o grupo de membros da comunidade com o erro (o nome do grupo será MEMBER_nome-comunidade) e remover do grupo o usuário que não está sendo adicionado na comunidade. Em seguida volte a comunidade e insira o participante novamente.

# Observações

Os grupos MEMBER e MODERATOR que aparecem no **cadastro de grupos** não devem ser alterados por este menu, a menos que isto tenha sido solicitado pela equipe de Suporte Fluig, pois pode causar erros como o citado nesta FAQ. Além disso, a contagem de participantes na comunidade pode ficar diferente da contagem do grupo.


<!-- anchors: SOCPorqueusuárionãoéadicionadonacomunidade?-Índice, SOCPorqueusuárionãoéadicionadonacomunidade?-Plataforma, SOCPorqueusuárionãoéadicionadonacomunidade?-Ocorrência, SOCPorqueusuárionãoéadicionadonacomunidade?-Causa, SOCPorqueusuárionãoéadicionadonacomunidade?-Solução, SOCPorqueusuárionãoéadicionadonacomunidade?-Observações -->
