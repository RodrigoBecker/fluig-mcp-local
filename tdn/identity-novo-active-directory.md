---
title: "Identity | Novo Active Directory"
url: "https://tdn.totvs.com/display/public/fluig/Identity+%7C+Novo+Active+Directory"
scraped_at: "2026-03-04T02:00:28.185Z"
depth: 2
anchors: 22
child_links: 56
---

# Identity | Novo Active Directory

# Falando de Active Directory...

---

O Identity suporta a vinculação do Active Directory para importação de contas e autenticação via credenciais do AD.

A sincronização de usuários entre a empresa do Identity e o Active Directory é realizada através de uma aplicação chamada SmartSync. Os procedimentos de instalação e configuração estão disponíveis na documentação do [SmartSync](https://tdn.totvs.com/x/meWGKQ).

Os usuários e grupos importados a partir da integração entre o Active Directory devem ser aceitos para que o seu acesso à empresa no Identity seja permitido. 

![](/download/attachments/697263461/Active%20directory.png?version=1&modificationDate=1678132136167&api=v2)

## Ver todos os diretórios

---

**01.**Acione o ícone **Configurações**no canto superior direito.

**02.** Selecione a opção **Active Directory**.

Com isso, os diretórios existentes serão apresentados.

A coluna **Situação**mostra se o diretório está  ou .

A coluna **SmartSync**apresenta a situação da sincronização com o SmartSync, sendo que:

- ![](/download/attachments/697263461/image2023-1-12_19-27-8.png?version=2&modificationDate=1676408032437&api=v2) → **Não configurado**: indica que ainda não foi concluída a configuração do diretório no SmartSync.
- ![](/download/attachments/697263461/image2023-1-13_11-44-37.png?version=2&modificationDate=1676407976817&api=v2)→ **Configurado**: indica que o Identity está conseguindo se conectar com o SmartSync.
- ![](/download/attachments/697263461/image2023-1-12_19-26-48.png?version=2&modificationDate=1676408345647&api=v2)→ **Indisponível**: indica que a configuração do Identity com o SmartSync foi concluída, porém o servidor do SmartSync não está sincronizando no momento.

## Adicionar diretório local

---

**01**. Acione o ícone **Configurações  **no canto superior direito e selecione a opção **Active Directory**.

**02.** Acione**Adicionar** e selecione a opção** Active Directory local**.

**03.** Em Informações, preencha as informações relacionadas ao diretório a ser criado. 

**Nome**Nome para identificar o diretório. 

**Migrar do SmartSync?**

- **Sim:** Ao habilitar essa opção, será feita a migração de todos os usuários e grupos do diretório indicado no campo **Active Directory**, assim que for concluída a configuração do SmartSync.
- **Não:** Ao manter a opção desabilitada, o novo Active Directory será criado sem importar usuários e grupos do SmartSync antigo.

**Deseja habilitar o aceite automático de usuários?**

- **Sim:** Ao habilitar essa opção, todos os usuários importados deste Active Directory pelo SmartSync serão aceitos e provisionados automaticamente nesse contexto do Identity.
- **Não:** Ao manter a opção desabilitada, todos os usuários importados deste Active Directory pelo SmartSync serão incluídos na lista de Pendentes até que sejam manualmente aceitos.

Caso esteja adicionando o primeiro AD, serão apresentados alguns campos de configurações gerais. Para mais detalhes sobre cada opção, consulte o item **Alterar as configurações gerais** desta documentação.

**Filtro de usuários**
Utilize as variáveis do Active Directory para filtrar os usuários que serão sincronizados. Caso o valor tenha sido alterado incorretamente, acione o botão ![](/download/attachments/697263461/flaticon-undo.png?version=1&modificationDate=1657119119100&api=v2) **Restaurar padrão**para retornar aos valores originais.

**Filtro de grupos**
Utilize as variáveis do Active Directory para filtrar os grupos que serão sincronizados. Caso o valor tenha sido alterado incorretamente, acione o botão ![](/download/attachments/697263461/flaticon-undo.png?version=1&modificationDate=1657119119100&api=v2) **Restaurar padrão**para retornar aos valores originais.

Os campos correspondentes ao **Filtro de usuários** e **Filtro de grupos** devem ser preenchidos no **formato LDAP**. Quando for definido um filtro para usuários e/ou grupos, o SmartSync irá reconhecer esse parâmetro e realizará a importação para o Identity dos usuários e grupos de acordo com o filtro informado nestes campos.

Os campos dos filtros vem preenchido com um valor padrão, onde não é passada nenhuma condição para importação, permitindo que todos os usuários e grupos sejam importados. Valor padrão:

- Filtro usuários: (&(objectClass=user)(objectCategory=person))
- Filtro grupos: (objectCategory=group)

Para mais detalhes sobre a criação de filtros, leia a documentação de [Filtros de importação LDAP](/pages/viewpage.action?pageId=221548455).

**04.** Clique em **Adicionar.**

Uma mensagem de confirmação é apresentada e o diretório criado aparece na lista de diretórios. Na coluna SmartSync é exibida a situação ![](/download/attachments/697263461/image2023-1-12_19-27-8.png?version=2&modificationDate=1676408032437&api=v2), indicando que precisa ser realizada a configuração da aplicação que sincroniza com o servidor do Active Directory. Para instalar a aplicação, baixe o instalador do SmartSync conforme indicado a seguir.

### Baixar instalador do SmartSync

---

Essa opção só é necessária para configurar o Active Directory local.

**oculto**

**Observação interna:**

Essa ação foi duplicada para o artigo [https://centraldeatendimento.fluig.com/hc/pt-br/articles/360024963094](https://centraldeatendimento.fluig.com/hc/pt-br/articles/360024963094) (Como configurar o SmartSync) 

Se for feita alguma alteração, lembrar de repassar a esse artigo.

**01.** Acione o ícone **Configurações **no canto superior direito e selecione a opção **Active Directory**.

**02.** Na seção Gerenciar diretórios, clique no botão **Baixar SmartSync** e salve o arquivo com a extensão .msi.

As versões do Windows compatíveis com o SmartSync podem ser consultadas na [Matriz de Portabilidade](https://tdn.totvs.com/x/eDAxE) do TOTVS Identity. Para saber mais sobre a instalação, acesse a documentação técnica do [SmartSync](https://tdn.totvs.com/x/meWGKQ).

### Copiar token do diretório

---

Essa ação é permitida somente para diretórios que ainda não tiveram a configuração no SmartSync concluída.

**01**. Acione o ícone **Configurações  **no canto superior direito e selecione a opção **Active Directory**.

**02.** Localize o diretório desejado e acione o botão **Gerar token**, disponível na coluna Token.

O token gerado é apresentado na coluna Token do respectivo diretório. Para copiá-lo, clique no token gerado. 

Esse token deve ser informado no momento de inclusão do Active Directory no SmartSync. Para mais detalhes, consulte o item Adicionar Active Directory na documentação de [SmartSync](https://tdn.totvs.com/x/meWGKQ). 

O *one time token* foi desenvolvido para que o usuário do SmartSync possa ter mais segurança em relação às suas credencias. A configuração no Active Directory através da utilização do token será de apenas uma vez para realizar a sincronização entre a empresa do Identity e o Active Directory, ou seja, caso seja gerado um novo token, o antigo será invalidado, com isso, aumentando a segurança das credenciais do usuário.

Ao gerar o token, também será trafegada a chave de criptografia, que será usada pelo SmartSync para ler as informações no momento em que o usuário realizar o login no Identity.

## Adicionar diretório do Azure

---

IMPORTANTE!

Quando essa configuração é realizada, está sujeita a **cobranças provindas do fornecedor**. Saiba mais em [Detalhes de preços](https://azure.microsoft.com/pt-br/pricing/details/active-directory/).

Dica!

Gostaria de conhecer a integração com Azure via OIDC e oAuth? [Clique aqui.](https://tdn.totvs.com/pages/releaseview.action?pageId=842293735)

**01**. Acione o ícone **Configurações **no canto superior direito e selecione a opção **Novas contas**, em seguida troque para a aba**Active Directory** (que fica logo ao lado).

**02.** Acione**Adicionar** e selecione a opção** ****Azure Active Directory**.

**03.** Em **Nome**, preencha o nome do diretório.

**04.** Acione**Avançar.**

**05**. Na próxima etapa, copie o valor do campo **URL de Logon**.  [**Veja a imagem**](/download/attachments/697263461/Copiar%20URL%20de%20Logon.png?version=1&modificationDate=1657119117613&api=v2)

**06**. Abra uma nova guia para executar as configurações no **Microsoft Azure**.

**Passos de configuração no Microsoft Azure:**

Os passos abaixo podem apresentar diferenças em relação ao que está demonstrado, devido a atualizações do Microsoft Azure.

**1.**Faça login com uma conta administrador no [portal do **Microsoft Azure**](https://portal.azure.com/#home).

**2.** Abra o Menu (três riscos no canto superior esquerdo) e clique no serviço **Active Directory do Azure***. *[**Veja a****i****magem**](/download/attachments/697263461/azure_doc_01.png?version=1&modificationDate=1657119117767&api=v2)

**3.** Nas opções da lateral esquerda clique em **Aplicativos empresariais***. *[**Veja a****i****magem**](/download/attachments/697263461/azure_doc_02.png?version=1&modificationDate=1657119117680&api=v2)

**4.** Clique em **+ Novo Aplicativo***. *[**Veja a****i****magem**](/download/attachments/697263461/azure_doc_03.png?version=1&modificationDate=1657119117887&api=v2)

**5.** Escolha a opção **Aplicativo Inexistente na Galeria**. **[**Veja a****i****magem**](/download/attachments/697263461/azure_doc_04.png?version=1&modificationDate=1657119117993&api=v2)

**6.** Escolha um nome e crie o aplicativo.

**7.** Selecione **Configurar logon único (obrigatório)***. *[**Veja a****i****magem**](/download/attachments/697263461/azure_doc_05.png?version=1&modificationDate=1657119118123&api=v2)

**8**. Selecione ***SAML**.*

**9.** Na seção **Configuração Básica de SAML** clique no ícone de lápis para editar. **[**Veja a****i****magem**](/download/attachments/697263461/azure_doc_06.png?version=1&modificationDate=1657119118620&api=v2)

**10**. No campo **Identificador (ID de Entidade)** digite exatamente ***TotvsLabs. *****Veja a imagem**

**11**. No campo **URL de Resposta (URL do Serviço do Consumidor de Declaração)** insira o valor copiado que havia sido copiado no **Identity**. ********Veja a imagem**

DICA!

É o endereço **https://[EMPRESA].****fluigidentity.com/cloudpass/SAML/acs** substituindo o texto “**[EMPRESA]**” pelo subdomínio da sua empresa do Identity.

**12**. Na seção **Certificado de Autenticação SAML** baixe o arquivo **XML de Metadados de Federação** e guarde o arquivo.  ********Veja a imagem**

**13**. No menu lateral esquerdo, acesse **Usuários e Grupos** e atribua a este aplicativo aos usuários/grupos desejados. ********Veja a imagem**

**07**. Após concluir a configuração do passo anterior no **Microsoft** **Azure**, retorne ao **Identity**, na configuração do Azure Active Directory acione **Avançar**.  [**Veja a imagem**](/download/attachments/697263461/azure_doc_12b.png?version=1&modificationDate=1657119117367&api=v2)

**08**. Arraste o arquivo **XML de Metadados de Federação**, baixado na **Microsoft Azure** anteriormente, para o espaço indicado e acione **Enviar**.  [**Veja a imagem**](/download/attachments/697263461/azure_doc_13.png?version=1&modificationDate=1657119117543&api=v2)

**09.**Preencha o campo **Identificador Azure AD**com o ID do certificado enviado e acione **Avançar.**

Com isso, o Identity está pronto para receber requisições de login SSO vindas do aplicativo SAML da **Microsoft Azure** criado anteriormente.

**10**. Acesse novamente o **Microsoft Azure**, conforme detalhado a seguir.

Efetue o login de algum dos usuários adicionado no aplicativo SAML e acesse a [página de aplicativos do usuário](https://account.activedirectory.windowsazure.com/r/#/applications). Na listagem de aplicativos irá aparecer o aplicativo criado anteriormente que está configurado para fazer login SSO no Identity.  [**Veja a imagem**](/download/attachments/697263461/azure_doc_14.png?version=1&modificationDate=1657119118550&api=v2)

Clique no aplicativo criado anteriormente e será feito o login no Identity. No primeiro login esse usuário da Microsoft Azure será criado no Identity.

IMPORTANTE!

Esse usuário será criado no TOTVS Identity com base nas informações do usuário já existente no Microsoft Azure. A partir desse momento será possível efetuar login na empresa do Identity usando esse usuário da Microsoft Azure (entrando na Microsoft Azure e clicando no aplicativo TOTVS Identity configurado). Esse login a partir do Microsoft Azure para o Identity não envolve autenticação com Active Directory local via SmartSync. O login envolve apenas a Microsoft Azure e o Identity.

## Editar diretório

---

****

**01.** Acione o ícone **Configurações **no canto superior direito e selecione a opção **Active Directory**.

**02.**Localize o diretório a ser alterado.

**03.** Acione **Editar** localizado ao lado direito da coluna Token.

**04.** Ajuste as informações desejadas, de acordo com o tipo de AD.

AD LOCAL

**Nome**Nome do diretório.

**Deseja habilitar o aceite automático de usuários?****Sim:** Ao habilitar essa opção, todos os usuários importados deste Active Directory pelo SmartSync serão aceitos e provisionados automaticamente nesse contexto do Identity.

**Não:** Ao manter a opção desabilitada, todos os usuários importados deste Active Directory pelo SmartSync serão incluídos na lista de Pendentes até que sejam manualmente aceitos para o contexto pela administração da empresa.

**oculto**

**Aguardar confirmação para ver se retira essa informação ou deixa.**

**Intervalo de sincronização**
Defina o tempo de comunicação entre o SmartSync e o Identity. O intervalo pode ser de 20, 45 ou 60 minutos..

**Notificações**
As opções de notificação são detalhadas abaixo. Acione o botão **Configurar notificações** para acessar as configurações.

**Deseja habilitar as notificações no TOTVS Identity?**
Habilite essa opção para que as notificações sobre a sincronização com o Active Directory sejam apresentadas na área de notificações dos administradores da empresa. Para mais detalhes, consulte a documentação de [Notificações](/pages/viewpage.action?pageId=544712774).

**Deseja habilitar as notificações via e-mail?**
Habilite essa opção para que as notificações sobre a sincronização com o Active Directory sejam enviadas por e-mail. Caso seja habilitada, é necessário informar pelo menos um e-mail válido no campo **E-mail** para que o Identity consiga enviar as notificações. É possível incluir mais campos de e-mail, acionando o botão **Adicionar e-mail**.

**Filtro de usuários**
Utilize as variáveis do Active Directory para filtrar os usuários que serão sincronizados. Caso o valor tenha sido alterado incorretamente, acione o botão ![](/download/attachments/697263461/flaticon-undo.png?version=1&modificationDate=1657119119100&api=v2) **Restaurar padrão**para retornar aos valores originais.

**Filtro de grupos**
Utilize as variáveis do Active Directory para filtrar os grupos que serão sincronizados. Caso o valor tenha sido alterado incorretamente, acione o botão ![](/download/attachments/697263461/flaticon-undo.png?version=1&modificationDate=1657119119100&api=v2) **Restaurar padrão**para retornar aos valores originais.

Os campos correspondentes ao **Filtro de usuários** e **Filtro de grupos** devem ser preenchidos no **formato LDAP**. Quando for definido um filtro para usuários e/ou grupos, o SmartSync irá reconhecer esse parâmetro e realizará a importação para o Identity dos usuários e grupos de acordo com o filtro informado nestes campos.

Os campos dos filtros vem preenchido com um valor padrão, onde não é passada nenhuma condição para importação, permitindo que todos os usuários e grupos sejam importados. Valor padrão:

- Filtro usuários: (&(objectClass=user)(objectCategory=person))
- Filtro grupos: (objectCategory=group)

Para mais detalhes sobre a criação de filtros, leia a documentação de [Filtros de importação LDAP](/pages/viewpage.action?pageId=221548455).

AD AZURE

**Nome**Nome do diretório.

**Identificador Azure AD**ID do Certificado de Autenticação SAML enviado.

**05.** Clique em **Salvar**.

**oculto**

Esse passo a passo Aceitar vários usuários pendentes foi repassado ao artigo [https://centraldeatendimento.fluig.com/hc/pt-br/articles/360026742553](https://centraldeatendimento.fluig.com/hc/pt-br/articles/360026742553)
se for necessário alterar, lembrar de repassar a esse artigo

## Alterar as configurações gerais

---

Essas configurações são válidas para todos os ADs cadastrados.

**01.** Acione o ícone **Configurações **no canto superior direito e selecione a opção **Active Directory**.

**02.** Na seção Configurações gerais, clique em **Configurar parâmetros gerais**para abrir as configurações.

**03**. Na seção **Opções de conta**, defina as configurações necessárias.

As configurações disponíveis são:

**Permitir credenciais do Active Directory**Definir se será permitido aos usuários acessar a empresa no TOTVS Identity utilizando as credenciais do Active Directory (e-mail e senha de rede).

**Salvar as credenciais do Active Directory no TOTVS Identity**
Ao assinalar esta opção, os aplicativos do tipo Plugin podem ser configurados para fazer o acesso utilizando a credenciais do Active Directory.

**Permitir login somente com senha do Active Directory para usuários importados do AD**Possibilita escolher se deve ser bloqueada a autenticação com senha pessoal para usuários importados do Active Directory.****

**04**. Na seção**Opções de sincronização**, defina as configurações necessárias.

As configurações disponíveis são:

**Sincronizar mudanças no estado do usuário do Active Directory**
Ao assinalar esta opção, usuários desativados no Active Directory também serão desativados automaticamente da empresa no Identity. A sincronização do estado é realizada via SmartSync.

**Sincronizar mudanças no estado do usuário do TOTVS Identity**Ao assinalar essa opção, as mudanças no estado do usuário no Identity devem ser sincronizadas para o Active Directory, com isso, os usuários desativados no Identity também serão desativados automaticamente no Active Directory.

IMPORTANTE!

Caso existam ADs sem configuração no contexto, as opções **Sincronizar mudanças no estado do usuário do Active Directory** e **Sincronizar mudanças no estado do usuário do TOTVS Identity** ficam desabilitadas e não podem ser marcadas.

**05**. Na seção**Opções de senha**, defina as configurações necessárias.

As configurações disponíveis são:

**Permitir alteração de senha**Quando esta opção estiver ativa, a alteração da senha do Active Directory poderá ser realizada na página [Meu perfil](/pages/viewpage.action?pageId=280746624) do usuário.

**Salvar o cache de senhas do Active Directory**
Quando esta opção estiver ativa, será salvo um *hash* (que não pode ser decifrado) das senhas dos usuários no TOTVS Identity, o que proporciona mais rapidez na autenticação.

## Desativar diretório

---

Essa opção está disponível somente para o Active Directory local.

**01.** Acione o ícone **Configurações **no canto superior direito e selecione a opção **Active Directory**.

**02.** No diretório desejado, clique em **Mais opções** – localizado no lado direito.

**03**. Clique em **Desativar**.

**04.** Como forma de confirmação, antes de desativar o diretório, o Identity solicita a confirmação da senha pessoal. Digite a senha pessoal e acione **Desativar**.

Com a desativação, a sincronização de usuários é parada e os usuários importados não conseguem utilizar suas credenciais do Active Directory para autenticar-se no Identity. 

Os diretórios inativos são identificados pela situação ![](/download/attachments/697263461/image2023-1-12_19-24-9.png?version=2&modificationDate=1676408252757&api=v2). É possível reativar diretórios inativos a qualquer momento.

## Excluir diretório

---

Recomenda-se desabilitar o parâmetro **Sincronizar mudanças no estado do usuário do Active Directory **que fica nas configurações gerais, antes de efetuar a exclusão do AD.

**01.** Acione o ícone **Configurações **no canto superior direito e selecione a opção **Active Directory**.

**02.** No diretório desejado, clique em **Mais opções** – localizado no lado direito.

**03**. Clique em **Excluir**.

**04.** Como forma de confirmação, antes de excluir o diretório, o Identity solicita a confirmação da senha pessoal. Digite a senha pessoal e acione **Excluir**.

Com a exclusão, a sincronização dos usuários para definitivamente e os usuários importados não podem utilizar suas credenciais do Active Directory para autenticar-se no TOTVS Identity. 

IMPORTANTE!

Após excluir o Active Directory, certifique-se de habilitar o login com senha pessoal (por meio da aba Segurança). Com isso, os usuários criados a partir do AD ainda conseguirão acessar normalmente. Como os usuários não terão mais vínculo com AD, necessitarão se autenticar com e-mail e senha do Identity. Mas como os usuários não tem ainda senha do Identity, todos precisarão redefinir sua senha através da tela de login, opção Esqueceu sua senha. Será enviado um e-mail com o link para o reset de senha do usuário.

**oculto**

**Observação interna:**

Esse passo a passo Aceitar vários usuários pendentes foi repassado ao artigo [https://centraldeatendimento.fluig.com/hc/pt-br/articles/360058618354](https://centraldeatendimento.fluig.com/hc/pt-br/articles/360058618354)
se for necessário alterar, lembrar de repassar a esse artigo

## Visualizar informações do diretório

---

Essa opção está disponível somente para o Active Directory local.

![](/download/attachments/697263461/image2023-1-12_17-28-10.png?version=1&modificationDate=1673555313997&api=v2)

**01.** Acione o ícone **Configurações **no canto superior direito e selecione a opção **Active Directory**.

**02.** Clique no diretório desejado para ver as informações.

Na parte superior é apresentada uma seção de informações sobre a sincronização entre o TOTVS Identity e o SmartSync:

**Última sincronização com SmartSync**Apresenta a data e hora da última comunicação realizada entre SmartSync e Identity. O Identity identifica que o SmartSync está disponível com base no recebimento da comunicação no sentido SmartSync → Active Directory.

**Versão do SmartSync**Informa a versão do SmartSync que está executando a sincronização entre Identity e o Active Directory.

**Servidor do Active Directory**Endereço do servidor Active Directory, conforme configuração do SmartSync.

**DN Raiz**Configuração do SmartSync que indica o diretório raiz utilizado para sincronização dos dados entre Identity e Active Directory.

Em seguida são apresentadas as abas **Usuários** e **Grupos**, que possibilitam a visualização de usuários e grupos importados no diretório escolhido. 

### Usuários importados

---

Os requisitos para importação de usuários são: 1. Possuir usuários cadastrados no Active Directory, ativos e com os seguintes campos preenchidos: nome, sobrenome e e-mail; 2. SmartSync instalado, configurado e em execução; 3. Diretório no Active Directory configurado na empresa do Identity. 

Após as informações sobre a sincronização entre o Identity e o SmartSync, é apresentada a aba **Usuários** onde estão listados todos os usuários importados no diretório escolhido. Os quadros abaixo indicam a quantidade de usuários **pendentes**, **processando**, **aceitos**e **rejeitados**. Você pode clicar sobre cada situação para conferir os usuários.

Usuários importados do Active Directory via SmartSync são apresentados em uma lista de usuários pendentes e precisam ser aceitos antes de serem efetivamente criados no TOTVS Identity.

DICA!

Você pode automatizar o processo de aceite de usuários importados. Para isso, habilite a opção de **Aceite Automático** no diretório.

Não é possível reverter o procedimento de aceite, porém o usuário aceito poderá ser desativado na tela de Usuários. Usuários excluídos do contexto que venham a ser reimportados do Active Directory serão incluídos automaticamente na lista de Rejeitados.

![](/download/attachments/697263461/image2023-1-13_8-40-42.png?version=1&modificationDate=1673610066047&api=v2)

#### Buscar usuário

---

**01**. Na tela de visualização das informações do diretório, certifique-se de estar na aba **Usuários**.

**02.** Localize o campo **Buscar**e digite o nome ou o e-mail do usuário que deseja buscar.

#### Aceitar usuário

---

Essa ação é disponibilizada somente na lista de usuários pendentes e rejeitados.

**01**. Na tela de visualização das informações do diretório, certifique-se de estar na aba **Usuários**.

Existem três formas de aceitar usuário no Identity: um por um, usuários selecionados ou todos os usuários da lista.

ÚNICO USUÁRIO

**02.** Localize o usuário que deseja aceitar.

**03.** Clique em **Aceitar**– localizado no lado direito.

USUÁRIOS SELECIONADOS

**02.** Localize cada usuário que deseja aceitar.

**03.** Clique em ![](/download/attachments/697263461/image2023-1-13_11-54-2.png?version=1&modificationDate=1673621666063&api=v2) para selecionar cada usuário.

**04.** Acione o botão **Aceitar selecionados**.

TODOS OS USUÁRIOS

**02.** Acione o botão **Aceitar todos**.

Com isso, enquanto o aceite de usuários não é concluído, os usuários são apresentados na lista Processando.

Após concluir a ação, caso esteja tudo certo, o usuário passa a ser apresentado na lista de usuários aceitos com o indicativo ![](/download/attachments/697263461/image2023-1-13_12-7-27.png?version=2&modificationDate=1676407930763&api=v2). A partir do momento em que é aceito, o usuário importado é definido como Ativo e o acesso à empresa no TOTVS Identity está liberado. Os usuários passam a ser listados na página de Gerenciamento de Usuários. No perfil do usuário, os campos nome, sobrenome, e-mail, cargo e departamento são automaticamente preenchidos com os dados importados do Active Directory.

No momento do aceite do usuário, o Identity verifica se o e-mail importado já está cadastrado. Se já existir o e-mail no Identity, esse usuário será enviado para a lista de usuários rejeitados com o indicativo de ![](/download/attachments/697263461/image2023-1-13_14-36-7.png?version=2&modificationDate=1676407758883&api=v2), onde pode ser feita a alteração de e-mail do usuário. Para mais detalhes, consulte o item**Corrigir usuário** dessa documentação.

#### Rejeitar usuário

---

Essa ação é disponibilizada somente na lista de usuários pendentes.

**01**. Na tela de visualização das informações do diretório, certifique-se de estar na aba **Usuários**.

Existem duas formas de rejeitar usuário no Identity: um por um ou usuários selecionados.

ÚNICO USUÁRIO

**02.** Localize o usuário que deseja rejeitar.

**03.** Clique em **Rejeitar**– localizado no lado direito.

USUÁRIOS SELECIONADOS

**02.** Localize cada usuário que deseja rejeitar.

**03.** Clique em ![](/download/attachments/697263461/image2023-1-13_11-54-2.png?version=1&modificationDate=1673621666063&api=v2) para selecionar cada usuário.

**04.** Acione o botão **Rejeitar selecionados**.

Após concluir a ação, o usuário passa a ser apresentado na lista de usuários rejeitados com o indicativo ![](/download/attachments/697263461/image2023-1-13_13-55-38.png?version=2&modificationDate=1676407856840&api=v2).

#### Excluir usuário

---

Essa ação é disponibilizada somente na lista de usuários rejeitados.

**01**. Na tela de visualização das informações do diretório, certifique-se de estar na aba **Usuários**.

Existem duas formas de excluir usuário importado: um por um ou usuários selecionados.

**ÚNICO USUÁRIO**

**02.** Localize cada usuário que deseja excluir.

**03.** Clique em **Excluir**– localizado no lado direito.

USUÁRIOS SELECIONADOS

**02.** Localize cada usuário que deseja excluir.

**03.** Clique em ![](/download/attachments/697263461/image2023-1-13_11-54-2.png?version=1&modificationDate=1673621666063&api=v2) para selecionar cada usuário.

**04.** Acione o botão **Excluir selecionados**.

Após concluir a ação, o usuário excluído não é mais apresentado na lista de usuários rejeitados e nem será importado novamente.

#### Corrigir usuário

---

Essa ação é disponibilizada somente na lista de usuários rejeitados. O usuário a ser corrigido é apresentado na lista de usuários com a situação Erro.

**01**. Na tela de visualização das informações do diretório, certifique-se de estar na aba **Usuários**.

**02.** Localize o usuário que deseja corrigir.

**03.** Clique em **Corrigir**– localizado no lado direito.

Ao passar o mouse pelo botão **Corrigir**, será apresentada uma dica com o erro ocorrido.

**04.** Nos campos indicados, corrija as informações necessárias do usuário.

Todos os campos referentes ao usuário são apresentados para edição (nome, sobrenome, e-mail e situação). 

**05.** Acione **Corrigir**.

Após a correção, o usuário passa a ser apresentado na lista de usuários pendentes com as informações corrigidas, e pode ser aceito para que o usuário seja criado no Identity.

### Grupos importados

---

Os requisitos para importação de grupos são: 1. Possuir grupos cadastrados no Active Directory; 2. SmartSync instalado, configurado e em execução; 3. Diretório no Active Directory configurado na empresa do Identity. 

Após as informações sobre a sincronização entre o Identity e o SmartSync, é apresentada a aba **Grupos** onde estão listados todos os grupos de permissão importados no diretório escolhido. Os quadros abaixo indicam a quantidade de grupos **pendentes**, **processando**, **aceitos**e **rejeitados**. Você pode clicar sobre cada situação para conferir os grupos.

Assim como os usuários importados do Active Directory via SmartSync, os grupos também são apresentados em uma lista de grupos pendentes e precisam ser aceitos para que possam ser associados aos aplicativos do Identity.a

![](/download/attachments/697263461/image2023-1-13_14-24-38.png?version=1&modificationDate=1673630701520&api=v2)

#### Buscar grupo

---

**01**. Na tela de visualização das informações do diretório, certifique-se de estar na aba **Grupos**.

**02.** Localize o campo **Buscar**e digite o nome do grupo que deseja buscar.

#### Aceitar grupo

---

Essa ação é disponibilizada somente na lista de grupos pendentes.

**01**. Na tela de visualização das informações do diretório, certifique-se de estar na aba **Grupos**.

Existem duas formas de aceitar grupo no Identity: um por um ou grupos selecionados.

ÚNICO GRUPO

**02.** Localize o grupo que deseja aceitar.

**03.** Clique em **Aceitar**– localizado no lado direito.

GRUPOS SELECIONADOS

**02.** Localize cada grupo que deseja aceitar.

**03.** Clique em ![](/download/attachments/697263461/image2023-1-13_11-54-2.png?version=1&modificationDate=1673621666063&api=v2) para selecionar cada grupo.

**04.** Acione o botão **Aceitar selecionados**.

Com isso, enquanto o aceite de grupos não é concluído, os grupos são apresentados na lista Processando.

Após concluir a ação, caso esteja tudo certo, o grupo passa a ser apresentado na lista de grupos aceitos com o indicativo ![](/download/attachments/697263461/image2023-1-13_12-7-27.png?version=2&modificationDate=1676407930763&api=v2). Os grupos importados do Active Directory e aceitos são listados junto aos demais grupos próprios do Identity na página de Gerenciamento de Grupos.

#### Rejeitar grupo

---

Essa ação é disponibilizada somente na lista de grupos pendentes.

**01**. Na tela de visualização das informações do diretório, certifique-se de estar na aba **Grupos**.

Existem duas formas de rejeitar grupos no Identity: um por um ou grupos selecionados.

ÚNICO GRUPO

**02.** Localize o grupo que deseja rejeitar.

**03.** Clique em **Rejeitar**– localizado no lado direito.

GRUPOS SELECIONADOS

**02.** Localize cada grupo que deseja rejeitar.

**03.** Clique em ![](/download/attachments/697263461/image2023-1-13_11-54-2.png?version=1&modificationDate=1673621666063&api=v2) para selecionar cada grupo.

**04.** Acione o botão **Rejeitar selecionados**.

Após concluir a ação, o grupo passa a ser apresentado na lista de grupos rejeitados com o indicativo ![](/download/attachments/697263461/image2023-1-13_13-55-38.png?version=2&modificationDate=1676407856840&api=v2).

#### Editar grupo

---

Essa ação é disponibilizada somente na lista de grupos pendentes.

**01**. Na tela de visualização das informações do diretório, certifique-se de estar na aba **Grupos**.

**02.** Localize o grupo que deseja editar.

**03.** Clique em **Editar**– localizado no lado direito.

**04.** Digite o novo nome no campo indicado e acione **Salvar**.

O nome de um grupo do importado do Active Directory pode ser alterado no Identity para que, quando este grupo for aceito, ele seja criado com este novo nome de exibição.

Fique atento!

Esta documentação é válida a partir da atualização **5.1.1.0** ou superior do SmartSync. Se você utiliza uma atualização anterior, ela pode conter informações diferentes das quais você vê no seu ambiente.


<!-- anchors: Identity|NovoActiveDirectory-FalandodeActiveDirectory..., Identity|NovoActiveDirectory-Vertodososdiretórios, Identity|NovoActiveDirectory-Adicionardiretóriolocal, Identity|NovoActiveDirectory-BaixarinstaladordoSmartSync, Identity|NovoActiveDirectory-Copiartokendodiretório, Identity|NovoActiveDirectory-AdicionardiretóriodoAzure, Identity|NovoActiveDirectory-Editardiretório, Identity|NovoActiveDirectory-Alterarasconfiguraçõesgerais, Identity|NovoActiveDirectory-Desativardiretório, Identity|NovoActiveDirectory-Excluirdiretório, Identity|NovoActiveDirectory-Visualizarinformaçõesdodiretório, Identity|NovoActiveDirectory-Usuáriosimportados, Identity|NovoActiveDirectory-Buscarusuário, Identity|NovoActiveDirectory-Aceitarusuário, Identity|NovoActiveDirectory-Rejeitarusuário, Identity|NovoActiveDirectory-Excluirusuário, Identity|NovoActiveDirectory-Corrigirusuário, Identity|NovoActiveDirectory-Gruposimportados, Identity|NovoActiveDirectory-Buscargrupo, Identity|NovoActiveDirectory-Aceitargrupo, Identity|NovoActiveDirectory-Rejeitargrupo, Identity|NovoActiveDirectory-Editargrupo -->
