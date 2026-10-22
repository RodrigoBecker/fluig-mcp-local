---
title: "Identity | Por que não consigo desprovisionar um usuário de um aplicativo?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=240296481"
scraped_at: "2026-03-09T04:32:43.755Z"
depth: 3
anchors: 0
child_links: 55
---

# Identity | Por que não consigo desprovisionar um usuário de um aplicativo?

**Ocorrência**

Ao acessar o menu do Identity, opção Usuários, buscar por determinado usuário e abrir o seu cadastro são exibidos os aplicativos em que este usuário está provisionado. Cliquei em Remover no aplicativo em questão, porém o aplicativo não é removido.

**Causa**

O usuário pertence a um grupo que também está vinculado ao aplicativo.

Ao acessar o cadastro de um aplicativo (Menu Principal → Aplicativos) é possível provisionar usuários neste aplicativo de duas formas: através da aba Usuários, onde os usuários são incluídos individualmente e através da aba Grupos, em que os usuários são adicionados a partir dos grupos incluídos. Neste caso, o usuário foi incluído através de um grupo, ou seja, somente será desprovisionado do aplicativo quando o grupo for removido, ou quando o usuário for excluído do grupo.

**Solução**

Você somente poderá desprovisionar o grupo todo do aplicativo ou então remover o seu usuário deste grupo, pois uma vez um grupo adicionado num aplicativo, entende-se que todo o grupo faz parte da permissão e não faz sentido permitir a remoção de apenas um usuário deste aplicativo.

Ao acessar a lista de usuários de um aplicativo é exibido o botão 'Remover' ao lado dos usuários adicionados individualmente, porém, se o usuário foi inserido através de um grupo será exibida a mensagem abaixo:

![](/download/attachments/240296481/Capturar.PNG?version=1&modificationDate=1466445714000&api=v2)

Acesse o Menu → Aplicativos, busque pelo aplicativo, clique na aba Grupos e clique em desprovisionar no grupo que contém o usuário. Se preferir remover o usuário deste grupo, mas manter o grupo no aplicativo em questão, acesse o Menu → Grupos, selecione o grupo, clique em Usuários, e clique em Dissociar no botão ao lado do nome do usuário.
