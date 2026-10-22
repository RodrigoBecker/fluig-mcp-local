---
title: "Identity | Por que alguns usuários não conseguem acessar o RM pelo Identity?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=274638452"
scraped_at: "2026-03-09T04:33:56.149Z"
depth: 3
anchors: 0
child_links: 55
---

# Identity | Por que alguns usuários não conseguem acessar o RM pelo Identity?

---

Nas configurações do aplicativo no Identity, o campo **Mapeamento ID de Usuário** está definido como "samAccountName".

Os usuários que não conseguem acessar o aplicativo não possuem o samAccountName preenchido (ou preenchido de forma incorreta) em seus cadastros do Active Directory.

![](/download/attachments/274638452/ide_106.png?version=1&modificationDate=1495560405000&api=v2)

**O Mapeamento ID de Usuário define qual informação do AD será utilizada como login**

Para resolver isso, primeiramente, o administrador deve regularizar os cadastros dos usuários no Active Directory, informando corretamente o samAccountName.

Além disso,é preciso verificar o login SAML que foi definido para os usuários no aplicativo do RM. Para isso, deve-se acessar o perfil do usuário no Identity e selecionar **Aplicativos**.

Ao localizar o aplicativo desejado (nesse caso, o RM) acionar **Definir login SAML**. Na janela aberta, verificar se o valor do campo é o samAccountName correto do usuário. Caso não seja, o campo deve ser alterado manualmente pelo administrador.

![](/download/attachments/274638452/ide_106_solucao.gif?version=1&modificationDate=1495562380000&api=v2)

**Definir login SAML**
