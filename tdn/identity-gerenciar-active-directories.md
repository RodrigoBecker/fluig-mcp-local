---
title: "Identity | Gerenciar Active Directories"
url: "https://tdn.totvs.com/display/public/fluig/Identity+%7C+Gerenciar+Active+Directories"
scraped_at: "2026-03-09T05:12:00.856Z"
depth: 3
anchors: 12
child_links: 48
---

# Identity | Gerenciar Active Directories

# Falando de gerenciar Active Directories...

---

O Identity suporta a vinculação do Active Directory para importação de contas e autenticação via credenciais do AD.

A sincronização de usuários entre a empresa do Identity e o Active Directory é realizada através de uma aplicação chamada SmartSync. Os procedimentos de instalação e configuração estão disponíveis em [SmartSync](https://tdn.totvs.com/x/VIs0DQ).

Os usuários importados a partir da integração entre o Active Directory devem ser aceitos pelo administrador para que o seu acesso à empresa no Identity seja permitido. Consulte [Aceitar Usuários Pendentes](https://tdn.totvs.com/x/1L1UE) para obter informações sobre a configuração e utilização deste recurso.

![](/download/attachments/273981019/Active%20Directory%20Vers%C3%A3o%20root-2.0.15-SNAPSHOT.png?version=4&modificationDate=1591017037890&api=v2)

## Gerenciar Active Directories

---

**01.**Acessar as configurações ![](/download/attachments/273981019/flaticon-settings%20%281%29.png?version=1&modificationDate=1585221755703&api=v2) e selecionar a opção **Active Directory**.

**02.** Na seção **Gerenciar Active Directories**, acionar o link **Gerenciar Active Directories**.

## Adicionar Active Directory local

---

**01**. Acessar o **Gerenciamento do Active Directory**conforme item [Gerenciar Active Directories](#Identity|GerenciarActiveDirectories-GerenciarActiveDirectories).

**02.** Acionar**Adicionar** e selecionar a opção** Active Directory local**.

**03.** Em **Nome**, preencher o nome do diretório.

**04.** Definir se o aceite automático de usuários deve ser habilitado para este diretório.

**Sim:** Ao habilitar essa opção, todos os usuários importados deste Active Directory pelo SmartSync serão aceitos e provisionados automaticamente nesse contexto do Identity.

**Não:** Ao manter a opção desabilitada, todos os usuários importados deste Active Directory pelo SmartSync serão incluídos na lista de Pendentes até que sejam manualmente aceitos para o contexto pela administração da empresa.

**05.** Acionar**Avançar.**

**06.** Acionar ![](https://jessica.fluigidentity.com/cloudpass/static/images/copy.png) para copiar o token de configuração do Active Directory.

O token copiado será informado na configuração do Active Directory no SmartSync.

**07.** Acionar **Concluir**.

Após a inclusão de um novo Active Directory na empresa, será apresentado o status **Não Configurado** ao lado direito do nome do Active Directory cadastrado. Esse status indica que este Active Directory ainda não é utilizado em nenhum SmartSync. Para saber como efetuar a instalação e a configuração do SmartSync, consulte [essa documentação](https://tdn.totvs.com/display/fluig/Identity+%7C+SmartSync).

			![](https://tdn.totvs.com/download/thumbnails/286221066/importante.png)

**IMPORTANTE!**
É possível vincular mais de um Active Directory a uma empresa no Identity (quantos forem necessários), mas caso a autenticação seja realizada através do sAMAccountName, o usuário deverá informar o domínio antes do login, separado por uma barra invertida. Por exemplo: SP01\usuario.sobrenome.

## Adicionar Azure Active Directory

---

Importante!

Quando essa configuração é realizada, está sujeita a **cobranças provindas do fornecedor**. Saiba mais em Detalhes de preços.

Dica!

Gostaria de conhecer a integração com Azure via OIDC e oAuth? [Clique aqui.](https://tdn.totvs.com/pages/releaseview.action?pageId=842293735)

**01.**Acesse as configurações ![](/download/attachments/273981019/flaticon-settings%20%281%29.png?version=1&modificationDate=1585221755703&api=v2) e selecione a opção **Active Directory**.

**02.** Na seção **Gerenciar Active Directories**, acione o link **Gerenciar Active Directories**.

**03.** Acione** Adicionar** e selecione a opção** ****Azure Active Directory**.

**04.** Em **Nome**, preencha o nome do diretório.

**05.** Acione** Avançar.**

**06**. Na próxima etapa, copie o valor do campo **URL de Logon**. ![](/download/attachments/273981019/photos.png?version=1&modificationDate=1585597154343&api=v2) [**Veja a imagem**](/download/attachments/273981019/Copiar%20URL%20de%20Logon.png?version=1&modificationDate=1585598977207&api=v2)

**07**. Abra uma nova guia para executar as configurações no **Microsoft Azure**.

Passos de configuração no **Microsoft Azure**:

**1. **Faça login com uma conta administrador no [portal do **Microsoft Azure**](https://portal.azure.com/#home).

**2.** Abra o Menu (três riscos no canto superior esquerdo) e clique no serviço **Active Directory do Azure***. *[**Veja a****i****magem**](/download/attachments/273981019/azure_doc_01.png?version=1&modificationDate=1585599079663&api=v2)

**3.** Nas opções da lateral esquerda clique em **Aplicativos empresariais***. *[**Veja a****i****magem**](/download/attachments/273981019/azure_doc_02.png?version=1&modificationDate=1585599079770&api=v2)

**4.** Clique em **+ Novo Aplicativo***. *[**Veja a****i****magem**](/download/attachments/273981019/azure_doc_03.png?version=1&modificationDate=1585599079813&api=v2)

**5.** Escolha a opção **Aplicativo Inexistente na Galeria**. **[**Veja a****i****magem**](/download/attachments/273981019/azure_doc_04.png?version=1&modificationDate=1585599079947&api=v2)

**6.** Escolha um nome e crie o aplicativo.

**7.** Selecione **Configurar logon único (obrigatório)***. *[**Veja a****i****magem**](/download/attachments/273981019/azure_doc_05.png?version=1&modificationDate=1585599080017&api=v2)

**8**. Selecione ***SAML**.*

**9.** Na seção **Configuração Básica de SAML** clique no ícone de lápis para editar. **[**Veja a****i****magem**](/download/attachments/273981019/azure_doc_06.png?version=1&modificationDate=1585654807330&api=v2)

**10**. No campo **Identificador (ID de Entidade)** digite exatamente ***TotvsLabs. *****Veja a imagem**

**11**. No campo **URL de Resposta (URL do Serviço do Consumidor de Declaração)** insira o valor copiado que havia sido copiado no **Identity**. ********Veja a imagem**

			![](https://tdn.totvs.com/download/thumbnails/286221066/dica.png)

**DICA!**
É o endereço **https://[EMPRESA].fluigidentity.com/cloudpass/SAML/acs** substituindo o texto “**[EMPRESA]**” pelo subdomínio da sua empresa do Identity.

**12**. Certifique-se que o campo **URL de Logon**esteja vazio.

**13.**Na seção **Certificado de Autenticação SAML** baixe o arquivo **XML de Metadados de Federação** e guarde o arquivo.  ********Veja a imagem**

**14**. No menu lateral esquerdo, acesse **Usuários e Grupos** e atribua a este aplicativo aos usuários/grupos desejados. ********Veja a imagem**

**08**. Após concluir a configuração do passo 07 no **Azure**, volte ao **Identity**, na configuração do Azure Active Directory clique em **Avançar**. ![](/download/attachments/273981019/photos.png?version=1&modificationDate=1585597154343&api=v2) [**Veja a imagem**](/download/attachments/273981019/azure_doc_12b.png?version=1&modificationDate=1585597465193&api=v2)

**09**. Arraste o arquivo **XML de Metadados de Federação**, baixado na **Microsoft Azure** anteriormente, para o espaço indicado e clique em **Enviar**. ![](/download/attachments/273981019/photos.png?version=1&modificationDate=1585597154343&api=v2) [**Veja a imagem**](/download/attachments/273981019/azure_doc_13.png?version=1&modificationDate=1585597761887&api=v2)

Com isso, o Identity está pronto para receber requisições de login SSO vindas do aplicativo SAML da **Microsoft Azure** criado anteriormente.

**10**. Acesse novamente o **Microsoft Azure**, conforme detalhado a seguir.

Efetue o login de algum dos usuários adicionado no aplicativo SAML e acesse a [página de aplicativos do usuário](https://account.activedirectory.windowsazure.com/r/#/applications). Na listagem de aplicativos irá aparecer o aplicativo criado anteriormente que está configurado para fazer login SSO no Identity. ![](/download/attachments/273981019/photos.png?version=1&modificationDate=1585597154343&api=v2) [**Veja a imagem**](/download/attachments/273981019/azure_doc_14.png?version=1&modificationDate=1585600895220&api=v2)

Clique no aplicativo criado anteriormente e será feito o login no Identity. No primeiro login esse usuário da Microsoft Azure será criado no Identity.

			![](https://tdn.totvs.com/download/thumbnails/286221066/importante.png)

**IMPORTANTE!**
Esse usuário será criado no TOTVS Identity com base nas informações do usuário já existente no Microsoft Azure. A partir desse momento será possível efetuar login na empresa do Identity usando esse usuário da Microsoft Azure (entrando na Microsoft Azure e clicando no aplicativo TOTVS Identity configurado). Esse login a partir do Microsoft Azure para o Identity não envolve autenticação com Active Directory local via SmartSync. O login envolve apenas a Microsoft Azure e o Identity. 

## Editar Active Directory

---

**01.**Acessar o Gerenciamento do Active Directory conforme item [Gerenciar Active Directories](#Identity|GerenciarActiveDirectories-GerenciarActiveDirectories).

**02.** Acionar **Editar** localizado ao lado direito do nome do Active Directory cadastrado.

**03.** Ajustar as informações desejadas.

Se o AD for local, é possível alterar o nome cadastrado e a opção configurada em Aceite automático. No Azure AD, somente o nome pode ser modificado.

**04.** Acionar **Avançar**.

**oculto**

Esse passo a passo Aceitar vários usuários pendentes foi repassado ao artigo [https://centraldeatendimento.fluig.com/hc/pt-br/articles/360026742553](https://centraldeatendimento.fluig.com/hc/pt-br/articles/360026742553)
se for necessário alterar, lembrar de repassar a esse artigo

## Consultar informações do Active Directory

---

**Veja a imagem**

**01.**Acessar o Gerenciamento do Active Directory conforme item [Gerenciar Active Directories](#Identity|GerenciarActiveDirectories-GerenciarActiveDirectories).

**02.** Acionar ![](/download/attachments/273981019/flaticon-info.png?version=1&modificationDate=1583515004383&api=v2) localizado ao lado direito do nome do Active Directory cadastrado.

As informações são diferentes, dependendo se o AD for local ou Azure. Se for local, serão apresentadas as informações a seguir:

- **Token:**chave utilizada para a configuração do Active Directory no SmartSync, conforme o guia de [Configuração do AD](https://tdn.totvs.com/x/JksGD).
- **DN Raiz:** configuração do SmartSync que indica o diretório raiz utilizado para sincronização dos dados entre TOTVS Identity e Active Directory.
- **Servidor AD:** endereço do servidor Active Directory, conforme configurado do SmartSync.
- **Versão do SmartSync:** informa a versão do SmartSync que está executando a sincronização entre Identity e o Active Directory.
- **Última comunicação do SmartSync:** apresenta a data e hora da última comunicação realizada entre SmartSync e Identity. O Identity identifica que o SmartSync está disponível com base no recebimento da comunicação no sentido SmartSync → Active Directory.

## Remover Active Directory vinculado

---

**01.** Acessar o Gerenciamento do Active Directory conforme item [Gerenciar Active Directories](#Identity|GerenciarActiveDirectories-GerenciarActiveDirectories).

**02.** Acionar **Excluir**![](/download/attachments/273981019/flaticon-trash.png?version=1&modificationDate=1583514810797&api=v2) localizado ao lado direito do nome do Active Directory cadastrado.

**03.** Assinalar a opção apresentada, em que o administrador confirma compreender as consequências da remoção do Active Directory.

Ao excluir o Active Directory, o processo de sincronização dos usuários irá parar definitivamente e os usuários importados não poderão utilizar suas credenciais do Active Directory para autenticar-se no TOTVS Identity. Por esse motivo, antes de desativar o AD, é solicitada a senha pessoal do administrador da empresa. 

Após a exclusão do Active Directory, certifique-se de habilitar o login com senha pessoal (por meio da aba Segurança). Com isso, os usuários criados a partir do AD ainda conseguirão acessar normalmente. Como os usuários não terão mais vínculo com AD, necessitarão se autenticar com e-mail e senha do Identity. Mas como os usuários não tem ainda senha do Identity, todos precisarão redefinir sua senha através da tela de login, opção Esqueceu sua senha. Será enviado um e-mail com o link para o reset de senha do usuário.​

**04.** Acionar **Confirmar**para concluir a remoção do AD.

## Visualizar o status do SmartSync e do Active Directory

---

Essa opção está disponível somente para o Active Directory local.

**01.**Acessar o Gerenciamento do Active Directory conforme item [Gerenciar Active Directories](#Identity|GerenciarActiveDirectories-GerenciarActiveDirectories).

**02.** Visualizar os Active Directories cadastrados para o contexto.

A coluna **SmartSync** apresenta o status de conexão entre o Identity e o SmartSync. Os status disponíveis para o SmartSync são:****

- **Disponível**: exibido quando existe comunicação entre o SmartSync e o Identity.
- **Indisponível**: exibido quando não existe comunicação entre o SmartSync e o Identity.
- **Desabilitado**: exibido quando o domínio do Active Directory em questão está com opção **Enabled** desmarcada nas configurações do SmartSync.

A coluna **AD** apresenta o status de conexão entre o SmartSync e o Active Directory. Os status disponíveis para o AD (Active Directory) são:

- **Disponível**: exibido quando existe comunicação entre o SmartSync e o AD.
- **Indisponível**: exibido quando não existe comunicação entre o SmartSync e o AD.
- **Desconhecido**: exibido quando não existe comunicação entre o SmartSync e o Identity ou quando o SmartSync está desabilitado.

## Visualizar usuários pendentes

---

Essa opção está disponível somente para o Active Directory local.

**01.**Acessar o Gerenciamento do Active Directory conforme item [Gerenciar Active Directories](#Identity|GerenciarActiveDirectories-GerenciarActiveDirectories).

**02.** Acionar a opção **Visualizar**, localizada na coluna **Usuários pendentes** do Active Directory cadastrado.

O administrador será direcionado para a página [Aceitar Usuários Pendentes](https://tdn.totvs.com/x/1L1UE). 

## Visualizar grupos pendentes

---

Essa opção está disponível somente para o Active Directory local.

**01.** Acessar o Gerenciamento do Active Directory conforme item [Gerenciar Active Directories](#Identity|GerenciarActiveDirectories-GerenciarActiveDirectories).

**02.** Acionar a opção **Visualizar**, localizada na coluna **Grupos pendentes** do Active Directory cadastrado.

O administrador será direcionado para a página [Aceitar Grupos Pendentes](https://tdn.totvs.com/display/HF/Aceitar+Grupos+Pendentes).

## Obter token do Active Directory

---

Essa opção está disponível somente para o Active Directory local.

**oculto**

Essa ação foi duplicada para o artigo [https://centraldeatendimento.fluig.com/hc/pt-br/articles/360024963094](https://centraldeatendimento.fluig.com/hc/pt-br/articles/360024963094) (Como configurar o SmartSync) 

Se for feita alguma alteração, lembrar de repassar a esse artigo.

**01.** Acessar o Gerenciamento do Active Directory conforme item [Gerenciar Active Directories](#Identity|GerenciarActiveDirectories-GerenciarActiveDirectories).

**02.** Acionar **Configurações ** localizado na coluna SmartSync referente ao Active Directory cadastrado.

**03**. Acionar **Copiar **![](/download/attachments/273981019/copy.png?version=1&modificationDate=1586806634003&api=v2) para copiar o token.

Ao acionar essa opção, o token desejado é copiado para a área de transferência.

## Fazer o download do SmartSync

---

Essa opção só é necessária para configurar o Active Directory local.

**01.** Acessar o Gerenciamento do Active Directory conforme item [Gerenciar Active Directories](#Identity|GerenciarActiveDirectories-GerenciarActiveDirectories).

**02.** Acionar a opção **Baixar SmartSync**e salvar no diretório desejado.

As versões do Windows compatíveis com o SmartSync podem ser consultadas na [Matriz de Portabilidade](https://tdn.totvs.com/x/eDAxE) do TOTVS Identity. Para saber mais sobre o SmartSync, acesse a documentação técnica [SmartSync](https://tdn.totvs.com/x/VIs0DQ).****

Fique atento!

Esta documentação é válida a partir da **atualização 3.0.4** ou superior do SmartSync. Se você utiliza uma atualização anterior, ela pode conter informações diferentes das quais você vê no seu ambiente.


<!-- anchors: Identity|GerenciarActiveDirectories-FalandodegerenciarActiveDirectories..., Identity|GerenciarActiveDirectories-GerenciarActiveDirectories, Identity|GerenciarActiveDirectories-AdicionarActiveDirectorylocal, Identity|GerenciarActiveDirectories-AdicionarAzureActiveDirectory, Identity|GerenciarActiveDirectories-EditarActiveDirectory, Identity|GerenciarActiveDirectories-ConsultarinformaçõesdoActiveDirectory, Identity|GerenciarActiveDirectories-RemoverActiveDirectoryvinculado, Identity|GerenciarActiveDirectories-VisualizarostatusdoSmartSyncedoActiveDirectory, Identity|GerenciarActiveDirectories-Visualizarusuáriospendentes, Identity|GerenciarActiveDirectories-Visualizargrupospendentes, Identity|GerenciarActiveDirectories-ObtertokendoActiveDirectory, Identity|GerenciarActiveDirectories-FazerodownloaddoSmartSync -->
