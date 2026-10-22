---
title: "Identity | Associação entre usuários e grupos"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=211063158"
scraped_at: "2026-03-09T05:11:52.070Z"
depth: 3
anchors: 3
child_links: 32
---

# Identity | Associação entre usuários e grupos

---

A associação de usuários a grupos no Identity facilita a vinculação de permissões de acesso e aplicativos pelo administrador. Por exemplo: ao atrelar determinado aplicativo a um grupo, automaticamente todos os usuários associados passam a ter acesso ao aplicativo.

Os procedimentos abaixo referem-se à ação de associar usuários a grupos, porém também se aplicam ao procedimento de desassociação.

# Associar usuário a grupos

Os passos para associar um usuário a grupos através da página de Usuários estão no item [Associar um usuário a grupos](https://tdn.totvs.com/x/NyaTEg#Usu%C3%A1rios-Associarumusu%C3%A1rioagrupos).

# Adicionar usuários a um grupo

Os passos para associar diversos usuários a um grupo através da página de Grupos estão no item [Associar usuários a um grupo](https://tdn.totvs.com/x/KIOtEw#Grupos-Associarusu%C3%A1riosaumgrupo).

# Sincronização com o Active Directory

As associações entre usuários e grupos realizadas através do Identity podem ser sincronizadas com o Active Directory, desde que ambos estejam vinculados ao mesmo diretório LDAP. O Identity automaticamente envia para o SmartSync um comando para que cada associação entre usuários e grupos seja replicada no Active Directory.

Além disso, as associações realizadas entre usuários e grupos no Active Directory também podem ser automaticamente sincronizadas com o Identity.

As regras de sincronização acima também se aplicam ao procedimento de desassociação entre usuários e grupos tanto no Identity quanto no Active Directory.

Para importar os grupos do Active Directory para o Identity, deve ser realizado o procedimento descrito na documentação de [importação de grupos do Active Directory.](https://tdn.totvs.com/x/TbD5Cw)


<!-- anchors: Identity|Associaçãoentreusuáriosegrupos-Associarusuárioagrupos, Identity|Associaçãoentreusuáriosegrupos-Adicionarusuáriosaumgrupo, Identity|Associaçãoentreusuáriosegrupos-SincronizaçãocomoActiveDirectory -->
