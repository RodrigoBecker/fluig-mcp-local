---
title: "Identity | O que fazer quando eu não receber o e-mail de \"Esqueceu sua senha\"?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=498448911"
scraped_at: "2026-03-09T04:33:39.201Z"
depth: 3
anchors: 0
child_links: 56
---

# Identity | O que fazer quando eu não receber o e-mail de "Esqueceu sua senha"?

**Ocorrência**

Ao tentar usar o [Esqueceu Sua Senha](/display/fluig/Identity+%7C+Login), o usuário não está recebendo o e-mail com o *link* para redefinir a senha.

**Causa**

Essa situação pode ocorrer por alguns motivos, dentre eles:

- A mensagem foi classificada como spam pelo provedor de e-mail;

- O endereço "support@fluigidentity.com" não foi adicionado à *whitelist* do servidor de e-mail;

- O template de e-mail de redefinição de senha da empresa foi apagado pelo administrador.

**Solução**

**Usuários comuns**

Para resolver essa situação, o usuário deve:

- Verificar a caixa de spam da conta de e-mail para checar se a mensagem não foi automaticamente encaminhada pra lá;

- Adicionar o endereço "support@fluigidentity.com" à *whitelist* do servidor de e-mail;

**Administradores do Identity**

Os procedimentos abaixo são exclusivos para os administradores do Identity e não podem ser realizados por usuários comuns:

- Acessar **Menu** > **Configuração** > aba **Notificações via E-mail**. Selecionar "Redefinir Senha" no combo **Template** e "Português" no combo **Idioma** para certificar-se de que o conteúdo do template não foi apagado. Caso tenha sido, acionar o botão **Redefinir template**;

- Nessa mesma tela, acionar **Enviar E-mail** e preencher o campo com um endereço de teste (@gmail.com, por exemplo). Em seguida, acessar a caixa de entrada ou spam desse endereço e verificar se a mensagem foi recebida.

![](/download/attachments/498448911/esqueceu_senha.gif?version=1&modificationDate=1561565360647&api=v2)
