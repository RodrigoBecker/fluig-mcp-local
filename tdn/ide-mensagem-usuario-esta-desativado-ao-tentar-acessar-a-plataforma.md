---
title: "IDE - Mensagem \"Usuário está desativado\" ao tentar acessar a plataforma"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=330826453"
scraped_at: "2026-03-09T03:38:36.464Z"
depth: 2
anchors: 5
child_links: 46
---

# IDE - Mensagem "Usuário está desativado" ao tentar acessar a plataforma

# Índice

# Plataforma

**Produto: **TOTVS Fluig Plataforma integrado ao TOTVS Identity

**Versão:** 1.6

# Ocorrência

Ao tentar acessar a plataforma, é exibida a mensagem "Usuário está desativado". No Identity seu status está ativo.

![](/download/attachments/330826453/Image%2001%2011%20001.png?version=1&modificationDate=1515676721000&api=v2)

# Causa

Esta mensagem não diz respeito ao Identity, mas à plataforma Fluig. O status do usuário no Identity está ativo, mas no Painel de controle da plataforma está *BLOCKED*. Os status dos usuários no Identity e na plataforma são independentes e não estão integrados. Um usuário pode estar desativado na plataforma e ativo no Identity, pois precisa acessar os demais aplicativos que estão integrados, mas não a plataforma especificamente.

# Solução

Acessar o Painel de Controle, opção [Usuários](https://tdn.totvs.com/pages/viewpage.action?pageId=234455411), buscar pelo usuário e reativa-lo.


<!-- anchors: IDEMensagem"Usuárioestádesativado"aotentaracessaraplataforma-Índice, IDEMensagem"Usuárioestádesativado"aotentaracessaraplataforma-Plataforma, IDEMensagem"Usuárioestádesativado"aotentaracessaraplataforma-Ocorrência, IDEMensagem"Usuárioestádesativado"aotentaracessaraplataforma-Causa, IDEMensagem"Usuárioestádesativado"aotentaracessaraplataforma-Solução -->
