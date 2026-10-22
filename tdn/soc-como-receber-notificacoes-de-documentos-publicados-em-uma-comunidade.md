---
title: "SOC - Como receber notificações de documentos publicados em uma comunidade?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=269068084"
scraped_at: "2026-03-09T04:47:43.731Z"
depth: 3
anchors: 12
child_links: 39
---

# SOC - Como receber notificações de documentos publicados em uma comunidade?

# Índice

# Plataforma

**Produto: **TOTVS Fluig Plataforma

# Ocorrência

Quando um post é publicado em uma comunidade todos os usuários estão recebendo notificação e e-mail, porém quando um documento é publicado ninguém é notificado. Por que isso acontece e como resolver?

# Causa

As notificações da plataforma, push ou e-mail sobre as novas publicações em comunidades são enviadas quando a opção **Notificação de publicação na comunidade** está marcada na aba **Colaboração **na tela **Configurar notificações**(do Painel de Controle) e em **Configuração de Notificações** (na central de notificações do usuário) .

![](/download/attachments/269068084/screencapture-10-80-81-59-8080-portal-p-1-tenantalertconfig-1479894317492.png?version=1&modificationDate=1479903082000&api=v2)

**Figura 1 - Configuração de notificação de novas publicações no Painel de Controle**

![](/download/attachments/269068084/configuracao_de_notificacoes.png?version=1&modificationDate=1479903082000&api=v2)

**Figura 2 - Configuração de notificação de novas publicações no perfil do usuário**

Quando a comunidade permite a publicação de documentos e um usuário faz um post adicionando um documento, todos que possuírem a notificação de publicação habilitada receberão um aviso. Se o documento é publicado diretamente na aba Documentos, a notificação é enviada apenas se as notificações de Documentos estiverem devidamente configuradas.

Confira abaixo como configurar essa notificação.

# Solução

- [Passo 1 - Configurar notificações](#)
- [Passo 2 - Configurar Assunto](#)
- [Passo 3 - Criar novo Assunto](#)
- [Passo 4 - Editar perfil do usuário](#)
- [Passo 5 - Publicar documento](#)
- [Passo 5 - Visualização da notificação](#)

Com um usuário administrador do fluig acesse **Painel de Controle > Colaboração > Notificações > aba Documentos**;

Ative a notificação por e-mail do item **Documento publicado com o assunto que acompanho**.

![](/download/attachments/269068084/imagem1.png?version=3&modificationDate=1553109367523&api=v2)

**Figura 3 - Configuração de notificações no Painel de Controle**

Agora configure o assunto que poderá ser utilizado nos documentos.

Acesse **Painel de Controle > Documentos > Assuntos**. Acione **Adicionar** para incluir um novo.

![](/download/attachments/269068084/imagem2.png?version=2&modificationDate=1553109490657&api=v2)

**Figura 4 - Configurar Assunto**

Na tela de novo assunto preencha o campo **Nome**.

Se quiser que os usuários sejam notificados também quando um documento for atualizado ou removido marque as opções **Notifica atualização** e **Notifica eliminação**.

Defina para quem o assunto é destinado. Escolha **Todos Usuários** ou clique em **Adicionar** para escolher entre os grupos de usuários já cadastrados na plataforma.

Se o assunto precisar ser obrigatório, marque a opção **Obrigatório** ao lado do grupo correspondente.

Quando o assunto é obrigatório, ele será automaticamente configurado no perfil dos usuários do grupo como assunto que eles acompanham. Isso significa que eles não podem alterar manualmente essa configuração e deixar de acompanhar esse assunto.

Caso o assunto não seja obrigatório, usuários que pertencem aos grupos selecionados pelo administrador poderão habilitar o assunto através da opção Editar perfil (vide Passo 4).

![](/download/attachments/269068084/imagem3.png?version=1&modificationDate=1479903082000&api=v2)

**Figura 5 - Criar novo Assunto obrigatório**

No [perfil do usuário](https://tdn.totvs.com/display/HF/Editar+perfil) serão exibidos todos os Assuntos que ele tem permissão para acompanhar. Porém é necessário que o próprio usuário selecione de quais assuntos disponíveis ele deseja receber notificações, conforme apresentado na tela a baixo:

Quando o assunto é obrigatório, ele será automaticamente configurado no perfil dos usuários do grupo como assunto selecionado que eles acompanham.

Isso significa que eles não podem alterar manualmente essa configuração e deixar de receber notificações desse assunto.

Na imagem abaixo mostramos um exemplo de configuração de "Assuntos que acompanho" sendo eles:

 - Assuntos disponíveis: que podem ter as notificações habilitadas pelo usuário;

 - Assuntos selecionados: habilitados pelo usuário para receber notificações.

![](/download/attachments/269068084/Image%209.jpg?version=1&modificationDate=1480687085000&api=v2)

**Figura 6 - Edição do perfil do usuários para Assuntos que acompanho**

Durante a publicação de um documento tanto na tela Documentos quanto na aba Documentos de uma comunidade, o usuário poderá configurar o Assunto do mesmo.

Se existir apenas um assunto cadastrado na plataforma ele será selecionado automaticamente, caso contrário o usuário precisa escolher qual deseja.

É importante lembrar de marcar a opção **Notificar?** para que as notificações desse documento sejam enviadas.

Para que os campos **Notificar?** e **Assunto** estejam preenchidos automaticamente, basta configurar as propriedades herdadas da pasta onde eles serão publicados. [Saiba mais aqui](https://tdn.totvs.com/x/afvuDQ).

Na imagem abaixo mostramos um exemplo de publicação de documento quando existe um assunto a mais cadastrado e as propriedades herdadas da pasta não estão configuradas.

![](/download/attachments/269068084/imagem4.png?version=1&modificationDate=1479903082000&api=v2)

**Figura 6 - Publicação de documento para o assunto desejado**

Quando o documento for publicado o usuário receberá um e-mail e notificação conforme as imagens abaixo.

![](/download/attachments/269068084/imagem5.png?version=1&modificationDate=1479903082000&api=v2)

**Figura 7 - Notificação recebida por e-mail**

![](/download/attachments/269068084/imagem6.png?version=2&modificationDate=1553110214133&api=v2)

**Figura 8 - Notificação da plataforma**


<!-- anchors: SOCComorecebernotificaçõesdedocumentospublicadosemumacomunidade?-Índice, SOCComorecebernotificaçõesdedocumentospublicadosemumacomunidade?-Plataforma, SOCComorecebernotificaçõesdedocumentospublicadosemumacomunidade?-Ocorrência, SOCComorecebernotificaçõesdedocumentospublicadosemumacomunidade?-Causa, SOCComorecebernotificaçõesdedocumentospublicadosemumacomunidade?-Solução, samples, samples-1, samples-2, samples-3, samples-4, samples-5, samples-5 -->
