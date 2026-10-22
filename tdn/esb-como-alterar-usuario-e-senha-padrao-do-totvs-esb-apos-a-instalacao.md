---
title: "ESB - Como alterar usuário e senha padrão do TOTVS ESB após a instalação?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=208340727"
scraped_at: "2026-03-09T03:39:44.042Z"
depth: 2
anchors: 4
child_links: 37
---

# ESB - Como alterar usuário e senha padrão do TOTVS ESB após a instalação?

# Índice

# Plataforma

**Produto: **TOTVS ESB

# Ocorrência

Ao instalar o TOTVS ESB, o mesmo vem com um usuário e senha padrão. Como alterar a senha?

# Solução

- Acesse o diretório de instalação do TOTVS ESB e a pasta **conf**;
- Edite o arquivo **users.xml**;
- Procure pela tag **<md5 password>**. Nessa tag a senha fica armazenada.

Importante

A senha informada nesse arquivo deve ser criptografada em **md5**.

Você pode procurar pelo termo "gerador hash md5" na internet para encontrar serviços que possam criptografar a senha.

- Após o procedimento a senha sua senha será alterada.


<!-- anchors: ESBComoalterarusuárioesenhapadrãodoTOTVSESBapósainstalação?-Índice, ESBComoalterarusuárioesenhapadrãodoTOTVSESBapósainstalação?-Plataforma, ESBComoalterarusuárioesenhapadrãodoTOTVSESBapósainstalação?-Ocorrência, ESBComoalterarusuárioesenhapadrãodoTOTVSESBapósainstalação?-Solução -->
