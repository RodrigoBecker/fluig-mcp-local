---
title: "ARQ - Notificações via e-mail não estão sendo enviadas"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=237398691"
scraped_at: "2026-03-04T03:37:46.281Z"
depth: 4
anchors: 7
child_links: 63
---

# ARQ - Notificações via e-mail não estão sendo enviadas

# Índice

# Plataforma

**Produto:  **TOTVS Fluig Plataforma

**Versão:** 1.5.x e 1.6

# Ocorrência

Notificações via e-mail mesmo após configurado, não estão sendo realizados.

[?](#)

| `O endereço de configuração do do e-mail está incorreto ou inacessível: javax.mail.MessagingException: Could not connect to SMTP host: smtp.locaweb.com.br, port: 587;` |
| --- |

# Causa

Servidor de e-mail configurado sem inserir os dados de autenticação do servidor SMTP.

# Solução

1. Acessar a plataforma com o usuário wcmadmin e acessar WCM > Empresas > Editar > E-mail.
2. Configurar o e-mail com os dados de autenticação do servidor STMP, conforme a documentação de [Configuração de envio de e-mail](/pages/viewpage.action?pageId=257623560)
3. Reiniciar o serviço do fluig.

# Observação

Ao preencher os dados nas configurações de e-mail da empresa via wcmadmin, a plataforma irá sobrescrever o XML automaticamente após a reinicialização do serviço.


<!-- anchors: ARQNotificaçõesviaemailnãoestãosendoenviadas-Índice, ARQNotificaçõesviaemailnãoestãosendoenviadas-Plataforma, ARQNotificaçõesviaemailnãoestãosendoenviadas-Ocorrência, highlighter_12598, ARQNotificaçõesviaemailnãoestãosendoenviadas-Causa, ARQNotificaçõesviaemailnãoestãosendoenviadas-Solução, ARQNotificaçõesviaemailnãoestãosendoenviadas-Observação -->
