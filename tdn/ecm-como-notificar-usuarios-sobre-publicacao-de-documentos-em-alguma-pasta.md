---
title: "ECM - Como notificar usuários sobre publicação de documentos em alguma pasta?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=270904604"
scraped_at: "2026-03-09T03:32:25.699Z"
depth: 2
anchors: 10
child_links: 39
---

# ECM - Como notificar usuários sobre publicação de documentos em alguma pasta?

# Índice

# Plataforma

**Produto**: TOTVS Fluig Plataforma

# Ocorrência

Como faço para notificar os usuários quando algum documento é publicado em alguma pasta?

# Solução

- [Passo 1 - Configurar notificações](#)
- [Passo 2 - Configurar Assunto](#)
- [Passo 3 - Criar novo Assunto](#)
- [Passo 4 - Editar perfil do usuário](#)
- [Confirmação da notificação](#)

 - Com um usuário administrador acesse o menu **Painel de controle**, localize o agrupador**Pessoas**e acione o recurso**Notificações.**

Em atualizações anteriores à **1.6.5 (Liquid)** esse recurso se encontra no **Painel de controle**, na aba **Colaboração.**

 - Na tela de Notificações, acesse a aba **Documentos.**

 - Ative a notificação por e-mail do item **Documento publicado com o assunto que acompanho**.

![](/download/attachments/269068084/imagem1.png?version=3&modificationDate=1553109367523&api=v2)

**Figura 1 - Configuração de notificações no Painel de Controle**

Agora configure o assunto que poderá ser utilizado nos documentos.

Acesse **Painel de Controle**, localize o agrupador**Personalização**e acione o recurso **Assuntos**. Acione **Adicionar** para incluir um novo.

Em atualizações anteriores à **1.6.5 (Liquid)** esse recurso se encontra no **Painel de controle**, na aba **Documentos****.**

![](/download/attachments/269068084/imagem2.png?version=2&modificationDate=1553109490657&api=v2)

**Figura 2 - Configurar Assunto**

Na tela de novo assunto preencha o campo **Nome**.

Se quiser que os usuários sejam notificados também quando um documento for atualizado ou removido marque as opções **Notifica atualização** e **Notifica eliminação**.

Defina para quem o assunto é destinado. Escolha **Todos Usuários** ou clique em **Adicionar** para escolher entre os grupos de usuários já cadastrados na plataforma.

Se o assunto precisar ser obrigatório, marque a opção **Obrigatório** ao lado do grupo correspondente.

Quando o assunto é obrigatório, ele será automaticamente configurado no perfil dos usuários do grupo como assunto que eles acompanham. Isso significa que eles não podem alterar manualmente essa configuração e deixar de acompanhar esse assunto.

Caso o assunto não seja obrigatório, usuários que pertencem aos grupos selecionados pelo administrador poderão habilitar o assunto através da opção Editar perfil (vide Passo 4).

![](/download/attachments/269068084/imagem3.png?version=1&modificationDate=1479903082000&api=v2)

**Figura 3 - Criar novo Assunto obrigatório**

No [perfil do usuário](https://tdn.totvs.com/display/HF/Editar+perfil) serão exibidos todos os Assuntos que ele tem permissão para acompanhar. Porém é necessário que o próprio usuário selecione de quais assuntos disponíveis ele deseja receber notificações, conforme apresentado na tela a baixo:

Quando o assunto é obrigatório, ele será automaticamente configurado no perfil dos usuários do grupo como assunto selecionado que eles acompanham.

Isso significa que eles não podem alterar manualmente essa configuração e deixar de receber notificações desse assunto.

Na imagem abaixo mostramos um exemplo de configuração de "Assuntos que acompanho" sendo eles:

 - Assuntos disponíveis: que podem ter as notificações habilitadas pelo usuário;

 - Assuntos selecionados: habilitados pelo usuário para receber notificações.

![](/download/attachments/269068084/Image%209.jpg?version=1&modificationDate=1480687085000&api=v2)

**Figura 4 - Edição do perfil do usuários para Assuntos que acompanho**

Quando o documento for publicado o usuário receberá um e-mail e notificação conforme as imagens abaixo.

![](/download/attachments/269068084/imagem5.png?version=1&modificationDate=1479903082000&api=v2)

**Figura 7 - Notificação recebida por e-mail**

![](/download/attachments/269068084/imagem6.png?version=2&modificationDate=1553110214133&api=v2)

**Figura 8 - Notificação da plataforma**

Lembrando que, se no cadastro do assunto o grupo não estiver com a opção **Obrigatório** habilitada, será necessário que cada usuário acesse seu perfil e edite para receber notificação das publicações. Para saber como realizar essa alteração, consulte a ação de definir assuntos que acompanho no help [Plataforma ❙ Editar perfil](/pages/viewpage.action?pageId=233762774) e também a [Configuração de notificações](/pages/viewpage.action?pageId=233763976).


<!-- anchors: ECMComonotificarusuáriossobrepublicaçãodedocumentosemalgumapasta?-Índice, ECMComonotificarusuáriossobrepublicaçãodedocumentosemalgumapasta?-Plataforma, ECMComonotificarusuáriossobrepublicaçãodedocumentosemalgumapasta?-Ocorrência, ECMComonotificarusuáriossobrepublicaçãodedocumentosemalgumapasta?-Solução, samples, samples-1, samples-2, samples-3, samples-4, samples-6 -->
