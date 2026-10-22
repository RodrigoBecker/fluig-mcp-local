---
title: "Identity | Mensagem \"Acesso restrito\" ao tentar acessar o Identity"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=546690348"
scraped_at: "2026-03-09T04:33:16.972Z"
depth: 3
anchors: 0
child_links: 55
---

# Identity | Mensagem "Acesso restrito" ao tentar acessar o Identity

---

**Ocorrência**

Ao tentar acessar o Identity é apresentada a seguinte mensagem de erro:

![](/download/attachments/546690348/Acesso%20negado.png?version=1&modificationDate=1731606520700&api=v2)

**Causa**

Quando o filtro de acesso por IPs estiver configurado e habilitado, usuários que tentarem realizar o acesso a partir de endereços IP não cadastrados pelo administrador da empresa no Identity serão bloqueados.****

**Solução**

Para liberar o acesso do usuário, o endereço IP externo informado na mensagem deve ser incluído no filtro de IPs pelo administrador do Identity, conforme descrito na documentação [Filtrar acesso por IPs externos](https://tdn.totvs.com/x/2pNvI).
