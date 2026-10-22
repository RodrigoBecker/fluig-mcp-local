---
title: "Identity | Notificações via e-mail"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=273980172"
scraped_at: "2026-03-09T04:39:00.800Z"
depth: 3
anchors: 7
child_links: 35
---

# Identity | Notificações via e-mail

# Falando de notificações via e-mail...

---

O conteúdo das mensagens de e-mail enviadas pelo TOTVS Identity pode ser visualizado e editado pelo administrador da empresa. Os *templates* de e-mail podem ser alterados diretamente pelo editor *online* disponibilizado na página de Notificações via e-mail. O editor possui opções de formatação de fonte, tabulação, cores, inclusão de imagens, *links*, etc.

O idioma da mensagem é definido pelo Identity de acordo com o dialeto configurado no navegador do usuário que executou a ação. Por exemplo, a mensagem "Redefinir Senha via código" é enviada no idioma do usuário que solicitou a redefinição. Já o e-mail de convite "Novo Usuário" é enviado no idioma utilizado pelo administrador que adicionou a nova conta.

Também é possível bloquear o envio de determinados tipos de mensagens, como o convite para novos usuários e redefinição de senha removendo o conteúdo do respectivo *template*.

![](/download/attachments/273980172/Notifica%C3%A7%C3%B5es%20via%20E-mail.png?version=1&modificationDate=1727112661273&api=v2)

## Visualizar template de e-mail

---

**01.** Acione o ícone **Configurações** ![](/download/attachments/273980172/flaticon-settings.png?version=1&modificationDate=1583942978380&api=v2) no canto superior direito e selecione a opção **Notificações via e-mail**.

**02.** Escolha o *template* que deseja visualizar.

Os *templates* de e-mail disponíveis por padrão são:

- **Novo Usuário**
- **Redefinir Senha (Desativado)**
- **Redefinir Senha via código**
- **E-mail de Teste**
- **E-mail de Verificação**
- **Auto-inscrição**
- **Sucesso na Alteração de Senha**
- **Sucesso no Desbloqueio do Usuário**
- **Erro na alteração/desbloqueio de senha**
- **Recurso de Segurança Bloqueado**
- **Geração de relatório iniciada**
- **Geração de relatório concluída**
- **Confirmação de troca de e-mail**
- **Aviso de e-mail alterado**
- **Aviso de expiração de senha**
- **Usuário bloqueado**

Nota:

Os *templates***Aviso de expiração de senha** e **Usuário bloqueado** são criados automaticamente quando as regras são habilitadas na [Política de senha](/pages/viewpage.action?pageId=801329923) da empresa.

**03.** Selecione o idioma em que deseja visualizar o *template*. Os idiomas disponíveis por padrão são: **Inglês**, **Português**ou **Espanhol**.

Após a seleção do *template,* o assunto e o conteúdo do *template* de e-mail são apresentados para visualização em seus respectivos campos.

## Editar template de e-mail

---

****

        Your browser does not support the HTML5 video element

**01.** Acione o ícone **Configurações** ![](/download/attachments/273980172/flaticon-settings.png?version=1&modificationDate=1583942978380&api=v2) no canto superior direito e selecione a opção **Notificações via e-mail**.

**02.** Escolha o *template* que deseja alterar.

**03.** Selecione o idioma do *template* de e-mail.

**04.** Clique em **Editar**e faça as alterações necessárias no *template*.****

Os campos **Assunto**** **e **Conteúdo**são habilitados para a edição do *template* de e-mail selecionado.

No conteúdo, é possível utilizar variáveis específicas para incluir mais informações na mensagem (por exemplo, o nome da empresa, usuário e IP da máquina do usuário). Para isso, posicione a barra de digitação onde deseja inserir a informação e clique em **Ver variáveis**, marque os itens necessários e clique em **Salvar**para adicioná-los ao conteúdo do template.

 CLIQUE AQUI E VEJA AS VARIÁVEIS

| Item | Variável |
| --- | --- |
| Nome da Empresa | COMPANY_NAME |
| Nome do Usuário | USER_FIRST_NAME |
| Sobrenome do Usuário | USER_LAST_NAME |
| Nome completo do Usuário | FULL_NAME |
| URL de Ativação | NAV_URL |
| IP da Máquina do Usuário | IP_MACHINE |
| Tentativa de alteração/desbloqueio de senha | ATTEMPT_NUMBER |
| Código para reset de senha | RESET_CODE |
| URL de redirecionamento | REDIRECT_URL |
| E-mail atual | CURRENT_EMAIL |
| Novo e-mail | NEW_EMAIL |
| Data de expiração da senha | PASSWORD_DTEXPIRATION |

**05.** Acione **Salvar**para salvar as alterações.

Ao salvar as alterações, os próximos e-mails já devem ser enviados com o novo conteúdo. 

É necessário repetir os passos acima para todos os *templates* e idiomas desejados.

## Testar o envio do template de e-mail

---

**01.** Acione o ícone **Configurações** ![](/download/attachments/273980172/flaticon-settings.png?version=1&modificationDate=1583942978380&api=v2) no canto superior direito e selecione a opção **Notificações via e-mail**.

**02.** Escolha o *template* que deseja testar o envio.

**03.** Selecione o idioma do *template* de e-mail.

**04.** Clique em **Enviar E-mail**.

**05.** Informe o endereço de e-mail para o qual a mensagem de teste deve ser enviada.

**06.** Acione **Enviar**.

Com isso, é enviada uma mensagem de e-mail de teste com o conteúdo do *template* no idioma selecionado para o endereço informado.

## Reverter as alterações do template

---

****

        Your browser does not support the HTML5 video element

**01.** Acione o ícone **Configurações** ![](/download/attachments/273980172/flaticon-settings.png?version=1&modificationDate=1583942978380&api=v2) no canto superior direito e selecione a opção **Notificações via e-mail**.

**02.** Escolha o *template* que deseja redefinir.

**03.** Selecione o idioma do *template* de e-mail.

**04.** Clique **Redefinir template**.

Com isso, o conteúdo e o assunto do *template* selecionado são revertidos para o texto original e todas as alterações são descartadas.

É necessário repetir os passos acima para todos os *templates* e idiomas desejados.

## Desabilitar o envio de e-mail 

---

****

        Your browser does not support the HTML5 video element

**01.** Acione o ícone **Configurações** ![](/download/attachments/273980172/flaticon-settings.png?version=1&modificationDate=1583942978380&api=v2) no canto superior direito e selecione a opção **Notificações via e-mail**.

**02.** Escolha o *template* que deseja redefinir.

**03.** Selecione o idioma do *template* de e-mail.

**04.** Clique em **Editar Template**.****

**05.** Apague todo o conteúdo (caracteres e espaços) do campo **Assunto**e do campo** ****Conteúdo**.

**06.** Clique em **Salvar**para desabilitar o envio.

Ao remover o assunto e o conteúdo de um *template*, os e-mails relacionados a esse *template* não são mais enviados aos usuários.

É necessário repetir os passos acima para todos os *templates* e idiomas desejados.


<!-- anchors: Identity|Notificaçõesviaemail-Falandodenotificaçõesviae-mail..., Identity|Notificaçõesviaemail-Visualizartemplatedee-mail, Identity|Notificaçõesviaemail-Editartemplatedee-mail, content_@gerais, Identity|Notificaçõesviaemail-Testaroenviodotemplatedee-mail, Identity|Notificaçõesviaemail-Reverterasalteraçõesdotemplate, Identity|Notificaçõesviaemail-Desabilitaroenviodee-maildesabilitarenvio -->
