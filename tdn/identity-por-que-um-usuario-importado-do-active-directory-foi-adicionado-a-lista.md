---
title: "Identity | Por que um usuário importado do Active Directory foi adicionado à lista de Rejeitados?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=224120968"
scraped_at: "2026-03-09T04:35:10.575Z"
depth: 3
anchors: 0
child_links: 56
---

# Identity | Por que um usuário importado do Active Directory foi adicionado à lista de Rejeitados?

**Dúvida**

Por que um usuário importado do Active Directory foi adicionado à lista de Rejeitados?

**Solução**

Um usuário importado do Active Directory é enviado para a lista de Rejeitados em duas situações:

1. Um dos administradores do contexto intencionalmente rejeitou o usuário a partir da lista de Pendentes.
2. O usuário foi previamente excluído do mesmo contexto em que está sendo importado.

Para provisionar um usuário nesta situação, basta aceitá-lo a partir da lista de [Rejeitados](/pages/viewpage.action?pageId=273989076).
