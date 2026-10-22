---
title: "ARQ - Mensagem de erro após o login"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=474185765"
scraped_at: "2026-03-09T03:29:34.778Z"
depth: 2
anchors: 11
child_links: 56
---

# ARQ - Mensagem de erro após o login

# Índice

# Plataforma

**Produto:** Fluig

**Versão:** 1.6.5 e superiores

# Ocorrência

Após efetuar o *login* é exibida a seguinte mensagem ao invés da página inicial: *{"code":"Internal Server Error","success":false,"message":"java.lang.NullPointerException"}*.

No *log* é possível detectar a seguinte mensagem:

[?](#)

| `[Server:fluig1]``10``:``26``:``05``,``834` `ERROR [com.totvs.technology.wcm.web.RequestPipeline] (``default` `task-``28``)``null``: java.lang.NullPointerException``[Server:fluig1]     at com.fluig.jwt.JwtBuilder.builder(JwtBuilder.java:``69``)``[Server:fluig1]     at com.fluig.jwt.JwtManager.createToken(JwtManager.java:``48``)``[Server:fluig1]     at com.fluig.jwt.JwtTokenBuilder.createToken(JwtTokenBuilder.java:``34``)``[Server:fluig1]     at com.totvs.technology.wcm.web.RequestPipeline.addJwtCookie(RequestPipeline.java:``833``)``[Server:fluig1]     at com.totvs.technology.wcm.web.RequestPipeline.doFilter(RequestPipeline.java:``358``)``[Server:fluig1]     at io.undertow.servlet.core.ManagedFilter.doFilter(ManagedFilter.java:``61``)` |
| --- |

# Causa

O módulo de *login* não está configurado corretamente, pois o parâmetro **principalClass** não está presente.

# Solução

- [A partir da 2.0](#)
- [1.6.5 até 1.8.2](#)

Edite o arquivo **standalone.xml**, na seção onde são declarados os módulos de *login*, customizados ou padrão e verifique se a propriedade **principalClass** está presente:

[?](#)

| `````...````````...``` |
| --- |

Edite o arquivo **domain.xml**, na seção onde são declarados os módulos de *login*, customizados ou padrão e verifique se a propriedade **principalClass** está presente:

[?](#)

| `````...````````...``` |
| --- |


<!-- anchors: ARQMensagemdeerroapósologin-Índice, ARQMensagemdeerroapósologin-Plataforma, ARQMensagemdeerroapósologin-Ocorrência, highlighter_835392, ARQMensagemdeerroapósologin-Causa, ARQMensagemdeerroapósologin-Solução, Versão, Versão-1, highlighter_801010, Versão-2, highlighter_114166 -->
