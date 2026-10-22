---
title: "Integração com o G Suite"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=382557334"
scraped_at: "2026-03-09T04:58:17.625Z"
depth: 3
anchors: 20
child_links: 42
---

# Integração com o G Suite

# Índice

# Pré-requisitos

---

- Fazer o *download* do certificado SAML do contexto ([veja como baixar](https://tdn.totvs.com/pages/viewpage.action?pageId=273980166#Seguran%C3%A7a-ObterocertificadoSAML)). Será necessário enviar o certificado para o Google durante a configuração do *Single Sign On* (SSO).

Importante

Ao contrário do [Gmail para empresas](https://gsuite.google.com/products/gmail/), a versão gratuita para consumidores do [Gmail](https://mail.google.com/) não suporta autenticação via protocolo SAML e portanto **não** é coberta pelos procedimentos descritos nessa documentação.

# Gmail para empresas

---

O fluig Identity dispõe de um aplicativo padrão chamado Gmail Enterprise que pode ser utilizado pelo administrador do contexto para configurar o serviço de e-mail corporativo do Google, o Gmail para empresas.

### Autenticação

A configuração de autenticação SSO (*Single Sign On*) é realizada no aplicativo e também no [Google Admin Console](https://admin.google.com). Confira o procedimento a seguir:

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)

**01.** Acessar o menu **Configuração** → **Aplicativos**.

**02.** Pesquisar pelo aplicativo **Gmail Enterprise** e clicar sobre o nome para abrir as configurações.

   Your browser does not support the HTML5 video element 

**01.** Selecionar a aba **Entrar**.

**02.** Acionar a opção **Editar** no canto superior direito.

**03.** Informe o **Domínio** da empresa no G Suite (essa informação foi definida pelo administrador ao [inscrever a empresa no G Suite](https://support.google.com/a/answer/182080)).

**04.** Acionar **Salvar**.

**05.** Fazer o *download* dos metadados do IDP do aplicativo. Uma informação contida neste arquivo será usada na configuração de SSO do Google Admin Console.

   Your browser does not support the HTML5 video element 

**01.** Acessar o Google Admin Console ([https://admin.google.com](https://admin.google.com)).

**02.** Selecionar a opção **Segurança**.

**03.** Expandir **Configurar logon único (SSO, na sigla em inglês)**.

   Your browser does not support the HTML5 video element 

**01.** Descer a página até a seção **Configurar Logon único de provedor de identidade de terceiros** e marcar o *checkbox* ao lado do título para habilitá-lo.

**02.** Preencher o campo **URL da página de login** usando a URL "SPInitRedirect" contida no arquivo de metadados ([como esse aqui](/download/attachments/382557334/metadados.png?version=1&modificationDate=1532003370000&api=v2)) obtido no Passo 2. Exemplo:

[https://minhaempresa.fluigidentity.com/cloudpass/SPInitRedirect/receiveSSORequest/wl19iwktbzegl4cd1426778621960/1](https://joitrei01.customerfi.com/cloudpass/SPInitRedirect/receiveSSORequest/wl19iwktbzegl4cd1426778621960/1)

**03.** Preencher o campo **URL da página de logout** com o endereço "https://[URL do contexto Identity]/cloudpass/login/logout", substituindo [URL do contexto Identity] pelo endereço de acesso à sua empresa no Identity. Exemplo:

[https://minhaempresa.fluigidentity.com/cloudpass/login/logout](https://minhaempresa.fluigidentity.com/cloudpass/login/logout)

**04.** Preencher o campo **URL para alteração de senha** com o endereço "https://[URL do contexto Identity]/cloudpass/login/forgotPassword", substituindo [URL do contexto Identity] pelo endereço de acesso à sua empresa no Identity. Exemplo:

[https://minhaempresa.fluigidentity.com/cloudpass/login/forgotPassword](https://minhaempresa.fluigidentity.com/cloudpass/login/forgotPassword)

**05.** Para enviar o certificado de confirmação, conforme exigido nos [pré-requisitos](#IntegraçãocomoGSuite-requisitos) dessa documentação, acionar **Escolher arquivo**, selecionar o certificado e acionar **Fazer Upload**.

**06.** Acionar **Salvar** para finalizar a configuração.

   Your browser does not support the HTML5 video element 

Dica

Ao final desse processo, não esqueça de tornar o aplicativo navegável ou de atribui-lo aos usuários que possuem contas no G Suite.

### Provisionamento

A configuração de provisionamento faz com que usuários do fluig Identity que ainda não possuem contas no G Suite sejam automaticamente criados na ferramenta ao serem atribuídos ao aplicativo.

**01.** Nas configurações do aplicativo Gmail Enterprise, selecionar a aba **Provisionar**.

**02.** Acionar a opção **Editar** no canto superior direito.

**03.** Marcar a opção **Habilitar Provisionamento**.

**04.** Em **Tipo de Autenticação**, selecionar **OAuth 2.0 JWT**.

**05.** No campo **URL REST**, informar [https://www.googleapis.com/admin/directory/v1/users](https://www.googleapis.com/admin/directory/v1/users).

**06.** Em **ID do Cliente**, informar o ID do cliente OAuth gerado pelo Google ao cadastrar uma credencial no [API Console](https://console.developers.google.com/apis/credentials).

A chave privada não precisa ser informada, pois foi definida diretamente no código-fonte do produto.

**07.** Preencher o campo **Nome do usuário do Administrador do Domínio** com o e-mail de um administrador do G Suite.

**08.** No campo **Senha Temporária do Usuário**, definir a senha padrão temporária para os usuários provisionados no G Suite.****

**09.** Acionar **Salvar**.

![](/download/attachments/382557334/provisionamento.png?version=1&modificationDate=1532026758000&api=v2)

# Agenda

---

O fluig Identity dispõe de um aplicativo padrão chamado Calendar Enterprise que pode ser utilizado pelo administrador do contexto para configurar a Agenda, o serviço de calendário do Google.

### Autenticação

Além da configuração de autenticação SSO (*Single Sign On*) no aplicativo Calendar Enterprise, é necessário habilitar o SSO no [Google Admin Console](https://admin.google.com), como descrito nos Passos 3 e 4 do procedimento de configuração do Gmail Enterprise ([acima](#IntegraçãocomoGSuite-gmail)).

- [Passo 1](#)
- [Passo 2](#)

**01.** Acessar o menu **Configuração** → **Aplicativos**.

**02.** Pesquisar pelo aplicativo **Calendar Enterprise** e clicar sobre o nome para abrir as configurações.

   Your browser does not support the HTML5 video element 

**01.** Selecionar a aba **Entrar**.

**02.** Acionar a opção **Editar** no canto superior direito.

**03.** Informe o **Domínio** da empresa no G Suite (essa informação foi definida pelo administrador ao [inscrever a empresa no G Suite](https://support.google.com/a/answer/182080)).

**04.** Acionar **Salvar**.

   Your browser does not support the HTML5 video element 

Dica

Ao final desse processo, não esqueça de tornar o aplicativo navegável ou de atribui-lo aos usuários que possuem contas no G Suite.

# Drive

---

O fluig Identity dispõe de um aplicativo padrão chamado Drive Enterprise que pode ser utilizado pelo administrador do contexto para configurar o Drive, serviço de armazenamento do Google.

### Autenticação

Além da configuração de autenticação SSO (*Single Sign On*) no aplicativo Drive Enterprise, é necessário habilitar o SSO no [Google Admin Console](https://admin.google.com), como descrito nos Passos 3 e 4 do procedimento de configuração do Gmail Enterprise ([acima](#IntegraçãocomoGSuite-gmail)).

- [Passo 1](#)
- [Passo 2](#)

**01.** Acessar o menu **Configuração** → **Aplicativos**.

**02.** Pesquisar pelo aplicativo **Drive Enterprise** e clicar sobre o nome para abrir as configurações.

   Your browser does not support the HTML5 video element 

**01.** Selecionar a aba **Entrar**.

**02.** Acionar a opção **Editar** no canto superior direito.

**03.** Informe o **Domínio** da empresa no G Suite (essa informação foi definida pelo administrador ao [inscrever a empresa no G Suite](https://support.google.com/a/answer/182080)).

**04.** Acionar **Salvar**.

   Your browser does not support the HTML5 video element 

Dica

Ao final desse processo, não esqueça de tornar o aplicativo navegável ou de atribui-lo aos usuários que possuem contas no G Suite.


<!-- anchors: IntegraçãocomoGSuite-Índice, IntegraçãocomoGSuite-Pré-requisitosrequisitos, IntegraçãocomoGSuite-Gmailparaempresas, IntegraçãocomoGSuite-Autenticaçãogmail, gmail_auth, gmail_auth-872616687, gmail_auth-872616688, gmail_auth-872616689, gmail_auth-872616690, IntegraçãocomoGSuite-Provisionamento, IntegraçãocomoGSuite-Agenda, IntegraçãocomoGSuite-Autenticação, calendar_auth, calendar_auth-872616687, calendar_auth-872616688, IntegraçãocomoGSuite-Drive, IntegraçãocomoGSuite-Autenticação.1, drive_auth, drive_auth-872616687, drive_auth-872616688 -->
