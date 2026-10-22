---
title: "Identity | Como obter o objectGUID de um usuário no Active Directory?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=353286054"
scraped_at: "2026-03-09T04:34:41.237Z"
depth: 3
anchors: 0
child_links: 55
---

# Identity | Como obter o objectGUID de um usuário no Active Directory?

**Dúvida**

Como obter o objectGUID de um usuário no Active Directory?

**Solução**

Para localizar o valor do atributo objectGUID de um usuário, siga o procedimento abaixo:

**01.** No servidor do Active Directory, acessar o **Active Directory Users and Computers**.

**02.** No diretório ***Users*** (Usuários), localizar o cadastro do usuário desejado.

**03.** Clicar duas vezes sobre o nome do usuário para exibir a janela de **Properties** (Propriedades).

**04.** Selecionar a aba **Attribute Editor** (Editor de Atributos).

**05.** Localizar na lista o atributo **objectGUID**. O valor será exibido ao lado do nome do atributo.

![](/download/attachments/353286054/objectGUID.png?version=3&modificationDate=1523971486000&api=v2)

O exemplo acima foi criado a partir de um servidor Windows Server 2012 R2 com Active Directory 6.3.9600.16384. Versões diferentes do sistema operacional e/ou do AD podem divergir dos procedimentos descritos nesta página.
