---
title: "Identity | Configurações do usuário"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=280746624"
scraped_at: "2026-03-09T05:02:46.128Z"
depth: 3
anchors: 18
child_links: 47
---

# Identity | Configurações do usuário

# Falando de configurações do usuário...

---

Essa página oferece aos usuários os campos para cadastrar e alterar informações pessoais, mudar a senha pessoal, mudar o e-mail corporativo, obter os plugins dos navegadores e o Desktop Launcher, além da configuração de autenticação multifator.

## Acessar as configurações do usuário

---

**01.** No canto superior direito da tela, acione o ícone ![](/download/attachments/280746624/oie_transparent%20%287%29.png?version=1&modificationDate=1584447243377&api=v2) que representa o perfil do usuário.

**02.** Acione **Meu perfil**ou**Gerenciar conta**.

Na parte esquerda da tela, serão apresentadas as seguintes opções de configuração: Informações pessoais, Autenticação multifator e Plugins.

## Informações pessoais

---

![](/download/attachments/280746624/Informa%C3%A7%C3%B5es%20pessoais.png?version=1&modificationDate=1699305221160&api=v2)

### Alterar nome de usuário

---

![](/download/attachments/280746624/Nome%20de%20usu%C3%A1rio.png?version=1&modificationDate=1699369187613&api=v2)**01.**No menu de configurações do usuário, acesse a opção **Informações pessoais**.

**02.** Localize o campo **Nome do usuário**e acione **Editar**![](/download/attachments/280746624/flaticon-edit.png?version=3&modificationDate=1699360294283&api=v2).

**03**. Na janela aberta, informe o novo nome e acione **Alterar nome**.

### Alterar senha pessoal

---

Essa opção só é permitida caso o uso de senha pessoal esteja habilitado nas [configurações de segurança](https://tdn.totvs.com/x/sZJvI) da empresa.

****

**01.**Nas configurações do usuário, acesse a opção **Informações pessoais**.

**02.** Localize o campo **Senha Pessoal**e acione **Editar senha**![](/download/attachments/280746624/flaticon-edit.png?version=3&modificationDate=1699360294283&api=v2).

**03.** Informe a senha atual e a nova senha, de acordo com os requisitos apresentados à direita.

Para mais detalhes sobre os requisitos, consulte a documentação de [Política de senha](/pages/viewpage.action?pageId=801329923).

Importante!

A complexidade de senha é definida por empresa, mas a senha pessoal é única para cada usuário. Quando o usuário for resetar sua senha, precisa definir uma senha que atenda aos critérios de todas as empresas onde está cadastrado.

**04.** Acione **Editar senha**para confirmar a alteração.

### Alterar e-mail corporativo

---

Essa opção é disponibilizada apenas quando a troca de e-mail for habilitada pelo administrador nas [configurações de segurança](https://tdn.totvs.com/x/sZJvI).![](/download/attachments/280746624/E-mail%20corporativo.png?version=1&modificationDate=1699383676793&api=v2)**01. **Nas configurações do usuário, acesse a opção **Informações pessoais**.

**02**. Localize o campo **E-mail corporativo**e acione **Editar**![](/download/attachments/280746624/flaticon-edit.png?version=3&modificationDate=1699360294283&api=v2).

**03.** Informe o novo e-mail corretamente nos dois campos.

**04**. Acione **Alterar e-mail**para salvar a informação.

Uma mensagem de confirmação é apresentada assim que o e-mail for alterado em tela. O link de confirmação será enviado para o novo endereço de e-mail cadastrado, e tem validade de 24 horas. Após a confirmação pelo usuário, a alteração do e-mail é concluída.

Enquanto a mudança não for confirmada, ao lado do novo e-mail aparece o ícone ![](/download/attachments/280746624/flaticon-alert.png?version=1&modificationDate=1699366073920&api=v2) (que indica a pendência de confirmação) e o ícone ![](/download/attachments/280746624/flaticon-undo.png?version=1&modificationDate=1699366140987&api=v2) que pode ser acionado para desfazer a alteração de e-mail.

Caso a mudança não seja confirmada no link em até 24 horas, a alteração do e-mail é cancelada.

### Alterar a senha do Active Directory

---

Essa opção só é permitida caso a troca de senha do Active Directory tenha sido habilitada na [Política de Senha](https://tdn.totvs.com/pages/viewpage.action?pageId=273992622) do contexto.

![](/download/attachments/280746624/Senha%20do%20AD.png?version=1&modificationDate=1699370031663&api=v2)**01.**Nas configurações do usuário, acesse a opção **Informações pessoais**.

**02**. Na seção Minhas empresas, localize a empresa e acione a opção **Alterar senha do Active Directory**.

Essa opção é apresentada ao lado do nome das empresas em que o recurso de alteração de senha do Active Directory esteja habilitado.

**03.** Informe a senha atual e a nova senha, de acordo com os requisitos apresentados à direita.

Para mais detalhes sobre os requisitos, consulte a documentação de [Política de senha](/pages/viewpage.action?pageId=801329923).

**04.** Acione **Editar senha**para confirmar a alteração.

### Consultar empresas

---

**01.**Nas configurações do usuário, acesse a opção **Informações pessoais**.

Na seção Minhas empresas são listadas as empresas do Identity em que o usuário está cadastrado através do seu e-mail.

### Definir empresa principal

---

Essa opção está disponível somente para usuários que estejam vinculados em várias empresas.

******01.**Nas configurações do usuário, acesse a opção **Informações pessoais**.

Na seção Minhas empresas são listadas as empresas do Identity em que o usuário está cadastrado através do seu e-mail.

**02.** Localize a empresa que deseja definir como principal para acesso.

**03.** Acione o ícone ![](/download/attachments/280746624/flaticon-more-vert.png?version=1&modificationDate=1722340380087&api=v2)e então **Selecionar como empresa principal**.

Para facilitar a identificação, a empresa definida como principal recebe o ícone ![](/download/attachments/280746624/favorite_icon.png?version=1&modificationDate=1722341174560&api=v2).

Após definir a empresa principal, ao autenticar-se pelo endereço genérico ([app.fluigidentity.com](https://app.fluigidentity.com)) o acesso é direto para a empresa definida, eliminando a necessidade de escolher em qual empresa deseja entrar.

### Retirar seleção de empresa principal

---

Essa opção está disponível somente para usuários que estejam vinculados em várias empresas e que tenham uma empresa principal definida.

**01.**Nas configurações do usuário, acesse a opção **Informações pessoais**.

Na seção Minhas empresas são listadas as empresas do Identity em que o usuário está cadastrado através do seu e-mail.

**02.** Localize a empresa principal (está identificada com o ícone ![](/download/attachments/280746624/favorite_icon.png?version=1&modificationDate=1722341174560&api=v2)).

**03.** Acione o ícone ![](/download/attachments/280746624/flaticon-more-vert.png?version=1&modificationDate=1722340380087&api=v2)e então **Retirar seleção de empresa principal**.

Após remover a empresa principal, ao autenticar-se pelo endereço genérico ([app.fluigidentity.com](https://app.fluigidentity.com)), a cada login será necessário escolher em qual empresa deseja entrar.

## Autenticação multifator

---

A autenticação multifator (do inglês *Multi-factor authentication* ou MFA) oferece uma camada adicional de segurança no acesso ao Identity, através da exigência de um código gerado no seu celular pelo aplicativo [My Safe id](/display/MOBILE/TOTVS+My+Safe+Id). Ao habilitar o recurso de MFA em sua conta, também recomenda-se copiar e guardar os códigos de recuperação, que serão solicitados em caso de troca de aparelho.

Para mais informações sobre a configuração deste recurso na empresa, acesse [Multi-Factor Authentication](/display/fluig/Identity+%7C+Multi-Factor+Authentication).

### Configurar autenticação multifator

---

****

**01.** Nas configurações do usuário, acesse a opção **Autenticação multifator**.

**02.** Baixe o aplicativo My Safe id pela [App Store](https://itunes.apple.com/br/app/safe-id/id1304505629?mt=8) ou [Play Store](https://play.google.com/store/apps/details?id=com.fluig.mfa) no seu dispositivo móvel.

Recomendamos o uso do aplicativo My Safe id, mas existem outros aplicativos autenticadores no mercado e eles são compatíveis, pode-se optar pelo autenticador de sua preferência.

**03.** Abra o aplicativo **My Safe id**.

**04.** Pressione ![](/download/attachments/280746624/icon-plus.png?version=1&modificationDate=1699306923213&api=v2) no aplicativo.

Com isso, será aberta a câmera do dispositivo.

**05.** Aponte a câmera do aparelho para o código (QR CODE) exibido pelo Identity.

Caso prefira, você pode configurar a autenticação multifator manualmente, acionando a opção **Adicionar manualmente** e informando os dados necessários:

- Título: Nome da empresa
- Conta: e-mail do usuário (o mesmo e-mail utilizado para autenticar-se no Identity).
- Chave: Chave exibida pelo Identity.

No entanto, recomendamos o uso do QR CODE, pois essas informações já são trazidas automaticamente.

No momento em que a câmera reconhecer o código, a conta será cadastrada no My Safe id e um código de 6 dígitos será gerado e exibido na tela do dispositivo. Este código é renovado automaticamente a cada 30 segundos.

**06.** Preencha o código gerado pelo My Safe id na página de configuração da autenticação multifator do Identity no campo indicado.

O código informado será verificado e, caso esteja correto, uma mensagem de sucesso será apresentada pelo Identity. A partir de agora, sempre será solicitado o código gerado pelo My Safe id, após informar as credenciais de acesso, para autenticação na empresa no Identity.

É importante guardar os [códigos de recuperação](#Identity|Configuraçõesdousuário-Obtercódigosderecuperação), para redefinir a configuração da autenticação multifator em caso de troca de aparelho ou exclusão dos dados no My Safe id.

Importante!

Para que o MFA funcione corretamente, é necessário que o dispositivo a partir do qual está sendo realizado o login e o dispositivo gerador do token estejam exatamente no mesmo horário. A variação de horário, mesmo que seja pouco tempo (1 minuto) já causa erro de token.

### Obter códigos de recuperação

---

Os códigos de recuperação serão solicitados na tela de login para redefinir a configuração de MFA, em caso de troca de aparelho ou exclusão dos dados no aplicativo autenticador.

![](/download/attachments/280746624/Configura%C3%A7%C3%A3o%20ativa%20por%20grupo.png?version=1&modificationDate=1699384503983&api=v2)

**01.** Nas configurações do usuário, acesse a opção **Autenticação multifator**.

**02**. No item **Códigos de recuperação**, acione a opção de sua preferência.

As opções disponíveis são:

![](/download/attachments/280746624/flaticon-download.png?version=1&modificationDate=1699306923333&api=v2) **Baixar códigos**: um arquivo .txt será baixado e deve ser armazenado em um lugar seguro.

![](/download/attachments/280746624/flaticon-copy.png?version=1&modificationDate=1699306923453&api=v2) **Copiar códigos**: os códigos serão copiados para a área de transferência, e podem ser colados e enviados para seu e-mail, por exemplo.

Caso queira, também é possível acionar a opção **Visualizar**, para conferir os códigos e suas respectivas ordens em tela.  **Veja a imagem**

As instruções para utilizar os códigos de recuperação para restaurar a configuração de MFA podem ser consultadas na documentação de [Login](/display/fluig/Identity+%7C+Login).

### Desativar autenticação multifator

---

**01.** Nas configurações do usuário, acesse a opção **Autenticação multifator**.

**02**. No item **Autenticação multifator ativa**, acione o botão **Desativar**.

**03**. Preencha a senha para confirmar a ação.

**04**. Acione **Desativar**.

Com essa opção desativada, não será mais exigido o código de autenticação multifator na tela de login do Identity. 

Caso o usuário faça parte de um grupo com MFA obrigatório, será obrigatório configurar novamente o MFA para autenticar-se na empresa.

## Plugins

---

### 

### Obter o plugin do navegador

---

O plugin do Identity é necessário para que o serviço possa preencher automaticamente as credenciais em aplicativos do tipo Plugin. Para mais detalhes, consulte a documentação [Como criar um novo aplicativo do tipo Plugin](/display/fluig/Identity+%7C+Como+criar+um+novo+aplicativo+do+tipo+Plugin).

**01. **Nas configurações do usuário, acesse a opção **Plugins**.

**02.** Localize a opção **Plugin do Navegador.**

**03.**Passe o mouse pelo ícone do plugin e acione **Iniciar download**.

Com isso, o usuário será direcionado para o repositório de *plugins* do navegador.

### Obter o Desktop Launcher

---

O Desktop Launcher é necessário para que o serviço possa preencher automaticamente as credenciais em aplicativos do tipo Thick. Para mais detalhes, consulte a documentação [Configuração do Desktop Launcher](/pages/viewpage.action?pageId=235592303).

**01. **Nas configurações do usuário, acesse a opção **Plugins**.

**02**. Localize a opção **Desktop Launcher**.

**03.** Passe o mouse pelo ícone do plugin e acione **Iniciar download**.****

Com isso, será aberta uma nova guia para o download do arquivo .msi.

### Obter o aplicativo My Safe id

---

**01. **Nas configurações do usuário, acesse a opção **Plugins**.

**02. **Localize a opção desejada: My Safe ID para Android ou iOS.

O usuário será direcionado para a página da loja correspondente ao sistema operacional selecionado. Para mais detalhes, consulte a [documentação do aplicativo](/display/MOBILE/TOTVS+My+Safe+Id) e também o item **Autenticação multifator **desta documentação.


<!-- anchors: Identity|Configuraçõesdousuário-Falandodeconfiguraçõesdousuário..., Identity|Configuraçõesdousuário-Acessarasconfiguraçõesdousuário, Identity|Configuraçõesdousuário-Informaçõespessoais, Identity|Configuraçõesdousuário-Alterarnomedeusuário, Identity|Configuraçõesdousuário-Alterarsenhapessoal, Identity|Configuraçõesdousuário-Alterare-mailcorporativo, Identity|Configuraçõesdousuário-AlterarasenhadoActiveDirectory, Identity|Configuraçõesdousuário-Consultarempresas, Identity|Configuraçõesdousuário-Definirempresaprincipal, Identity|Configuraçõesdousuário-Retirarseleçãodeempresaprincipal, Identity|Configuraçõesdousuário-Autenticaçãomultifator, Identity|Configuraçõesdousuário-Configurarautenticaçãomultifator, Identity|Configuraçõesdousuário-Obtercódigosderecuperação, Identity|Configuraçõesdousuário-Desativarautenticaçãomultifator, Identity|Configuraçõesdousuário-Plugins, Identity|Configuraçõesdousuário-Obteroplugindonavegador, Identity|Configuraçõesdousuário-ObteroDesktopLauncher, Identity|Configuraçõesdousuário-ObteroaplicativoMySafeid -->
