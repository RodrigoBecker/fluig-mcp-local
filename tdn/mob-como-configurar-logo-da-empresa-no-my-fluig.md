---
title: "MOB - Como configurar logo da empresa no My Fluig?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=208347280"
scraped_at: "2026-03-09T03:39:13.410Z"
depth: 2
anchors: 5
child_links: 38
---

# MOB - Como configurar logo da empresa no My Fluig?

# Índice

# Plataforma

**Produto: **My Fluig

# Dúvida

Como configurar uma imagem de logo da empresa para que seja exibida no aplicativo My Fluig?

# Causa

A imagem atribuída à tela de autenticação, tanto no mobile quanto no navegador, não é a que está configurada no tema.

# Solução

**01.** Autenticar com o usuário *wcmadmin*, e acessar **Painel de Controle** > **WCM** > **Configurações do Sistema** > **Personalização.**

**02.** No ECM, publicar na pasta desejada a imagem de logo. Ir nas propriedades da imagem adicionada e acionar a aba **Segurança** e logo depois acionar a opção **Compartilhar externamente? **Dessa forma a imagem ficará disponível para que seja anexada para ser exibida na autenticação do My Fluig.

![](/download/attachments/208347280/compartilhar%20externo.png?version=1&modificationDate=1634911745893&api=v2)

**03.** Após isso, vá até a pasta onde a imagem foi publicada e copie o link externo da imagem. Como no exemplo abaixo:

![](/download/attachments/208347280/link%20externo.png?version=1&modificationDate=1634911892943&api=v2)

**04.** Agora para cadastrar a imagem para ser exibida no My Fluig acesse a plataforma com o usuário wcmadmin e vá até **Painel de Controle** > **WCM** > **Configurações do Sistema** > **Personalização. **Preencher os campos "URL da imagem de logo (página de login)" e "URL da imagem de logo (página de login mobile)". E acionar **Salvar**.

![](/download/attachments/208347280/Image%203.png?version=2&modificationDate=1551984274307&api=v2)

Após feito esse procedimento a imagem de logo da empresa será exibida no aplicativo My Fluig no momento da autenticação. Além do procedimento que mostramos neste material também é possível incluir qualquer imagem que esteja disponível na web, ou seja, seja uma imagem já publicada para que se possa obter o caminho da mesma e colar nos respectivos campos.


<!-- anchors: MOBComoconfigurarlogodaempresanoMyFluig?-Índice, MOBComoconfigurarlogodaempresanoMyFluig?-Plataforma, MOBComoconfigurarlogodaempresanoMyFluig?-Dúvida, MOBComoconfigurarlogodaempresanoMyFluig?-Causa, MOBComoconfigurarlogodaempresanoMyFluig?-Solução -->
