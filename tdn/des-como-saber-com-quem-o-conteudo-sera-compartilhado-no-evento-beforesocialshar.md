---
title: "DES - Como saber com quem o conteúdo será compartilhado no evento beforeSocialShare?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=235326776"
scraped_at: "2026-03-09T03:37:57.030Z"
depth: 2
anchors: 5
child_links: 39
---

# DES - Como saber com quem o conteúdo será compartilhado no evento beforeSocialShare?

# Índice

# Plataforma

**Produto:** TOTVS Fluig Plataforma

# Ocorrência

Para concluir nossos desenvolvimentos sobre a plataforma, necessitamos saber com quem o conteúdo será compartilhado no evento beforeSocialShare

# Solução

No evento beforeSocialShare, são disponibilizados os parâmetros companyId e share. O share permite acesso ao SocialShareEventVO e nele é possível obter os objetos SocialEventVO e SociableEventVO.

O método share.getSocialPlace() permitirá retornar o objeto que recebe o compartilhamento (SocialEventVO).

Este objeto possuí diversos métodos, como por exemplo getAlias() que retorna o código social do usuário que receberá o compartilhamento. O método getName() que retornará o nome do usuário e o método getType(), que permitirá saber se o compartilhamento é com uma comunidade ou usuário.

Segue um exemplo:

[?](#)

| `var` `user = share.getSocialPlace().getAlias();` |
| --- |


<!-- anchors: DESComosabercomquemoconteúdoserácompartilhadonoeventobeforeSocialShare?-Índice, DESComosabercomquemoconteúdoserácompartilhadonoeventobeforeSocialShare?-Plataforma, DESComosabercomquemoconteúdoserácompartilhadonoeventobeforeSocialShare?-Ocorrência, DESComosabercomquemoconteúdoserácompartilhadonoeventobeforeSocialShare?-Solução, highlighter_262832 -->
