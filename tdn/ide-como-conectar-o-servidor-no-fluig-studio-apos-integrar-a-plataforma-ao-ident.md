---
title: "IDE - Como conectar o servidor no Fluig Studio após integrar a plataforma ao Identity?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=244722420"
scraped_at: "2026-03-09T04:50:21.597Z"
depth: 3
anchors: 6
child_links: 45
---

# IDE - Como conectar o servidor no Fluig Studio após integrar a plataforma ao Identity?

# Índice

# Plataforma

**Produto:**TOTVS Fluig Plataforma integrado ao TOTVS Identity

# Ocorrência

Realizamos a integração da plataforma com o Identity e após isto passou a ser exibido o erro abaixo ao tentar conectar o Fluig Studio ao servidor da plataforma.

[?](#)

| `ERROR [com.totvs.technology.wcm.web.rest.WCMUserServiceRest](http-pool-threads - 81) Generic error on WCMUserServiceRest.get: javax.servlet.ServletException: JBWEB000053: Failed to authenticate a principal: org.jboss.resteasy.spi.ApplicationException:``javax.servlet.ServletException: JBWEB000053: Failed to authenticate a principal` |
| --- |

# Causa

Isto ocorre quando o e-mail utilizado para conexão do Fluig Studio está duplicado na base. Neste caso, foi cadastrado o mesmo e-mail para o usuário wcmadmin, da empresa 0. Assim, ao realizar a conexão, a plataforma Fluig encontra o usuário na empresa 0, onde o Identity não está habilitado, e não é possível autenticar.

# Solução

Nenhum e-mail pode estar duplicado na base do Fluig Plataforma ao realizar a integração com o Identity, este é um pré-requisito da configuração. Altere o e-mail do wcmadmin para um e-mail que não esteja cadastrado na plataforma.

Este cenário pode ocorrer em outros recursos da plataforma como por exemplo o Fluig Connect. Portanto, identificando este erro, verifique os e-mails cadastrados seguindo o pré-requisito de configuração da integração.


<!-- anchors: IDEComoconectaroservidornoFluigStudioapósintegraraplataformaaoIdentity?-Índice, IDEComoconectaroservidornoFluigStudioapósintegraraplataformaaoIdentity?-Plataforma, IDEComoconectaroservidornoFluigStudioapósintegraraplataformaaoIdentity?-Ocorrência, highlighter_158714, IDEComoconectaroservidornoFluigStudioapósintegraraplataformaaoIdentity?-Causa, IDEComoconectaroservidornoFluigStudioapósintegraraplataformaaoIdentity?-Solução -->
