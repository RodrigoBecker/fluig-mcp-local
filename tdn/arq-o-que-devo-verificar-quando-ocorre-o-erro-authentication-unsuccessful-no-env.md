---
title: "ARQ - O que devo verificar quando ocorre o erro 'Authentication unsuccessful' no envio de e-mail?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=243657951"
scraped_at: "2026-03-04T03:37:50.082Z"
depth: 4
anchors: 5
child_links: 61
---

# ARQ - O que devo verificar quando ocorre o erro 'Authentication unsuccessful' no envio de e-mail?

# Índice

# Plataforma

**Produto:** TOTVS Fluig Plataforma

# Ocorrência

A plataforma não está conseguindo mandar e-mail e no log tem-se o seguinte erro:

**Mensagem no arquivo server.log**

[?](#)

| `Falha desconhecida ao enviar email: : javax.mail.AuthenticationFailedException: 535 5.7.3 Authentication unsuccessful` |
| --- |

# Solução

Existem vários problemas que podem causar essa situação:

1. Configuração incorreta de usuário e senha: [verifique os dados informados e tente novamente](/pages/viewpage.action?pageId=257623560);
2. Sua senha expirou: diversos sistemas de e-mail expiram automaticamente a senha após um determinado período. É recomendável a conta definida para o envio de e-mail seja configurada para não ter a senha expirada;
3. Configuração incorreta no servidor de e-mail: normalmente e-mails Exchange possuem uma permissão especial se elas vão enviar e-mail. Verifique com o administrador do servidor de e-mail se as configurações corretas foram estabelecidas para envio de e-mail.


<!-- anchors: ARQOquedevoverificarquandoocorreoerro'Authenticationunsuccessful'noenviodeemail?-Índice, ARQOquedevoverificarquandoocorreoerro'Authenticationunsuccessful'noenviodeemail?-Plataforma, ARQOquedevoverificarquandoocorreoerro'Authenticationunsuccessful'noenviodeemail?-Ocorrência, highlighter_760941, ARQOquedevoverificarquandoocorreoerro'Authenticationunsuccessful'noenviodeemail?-Solução -->
