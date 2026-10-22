---
title: "Identity | Provedores"
url: "https://tdn.totvs.com/display/public/fluig/Identity+%7C+Provedores"
scraped_at: "2026-03-09T05:02:51.456Z"
depth: 3
anchors: 8
child_links: 49
---

# Identity | Provedores

IDIOMA

# Falando de provedores...

---

Esse recurso permite o cadastro de provedores que serão utilizados para login no Identity. É possível cadastrar provedores como o Google, o Facebook, o Linkedin ou outros, para que a autenticação ocorra por meio das contas dos usuários nesses aplicativos.

Existe a possibilidade de criar o usuário no primeiro login, mas ainda permanece normalmente a criação de usuários pela administração da empresa no menu Usuários.

![](/download/attachments/769987653/Provedores%202025.png?version=1&modificationDate=1758640348163&api=v2)

## Consultar lista de provedores

---

**01. **Clique no ícone **Configurações** no canto superior direito e acione a opção **Segurança**.

**02.** No menu à esquerda, acione a opção**Cadastro de provedor**.

Ao acionar essa opção, será apresentada a lista com os provedores cadastrados na empresa. É possível copiar o link da URL do provedor, editar o provedor ou excluí-lo caso necessário.

## Cadastrar provedor

---

**01. **Clique no ícone **Configurações** no canto superior direito e acione a opção **Segurança**.

**02.** No menu à esquerda, acione a opção**Cadastro de provedor**.

**03**. Acione o botão **Cadastrar novo provedor**.

**04**. Na etapa **Provedor**, inclua as informações necessárias.

**Provedor**As opções de provedores são: Google, Facebook ou Linkedin (não genéricos), ou o genérico (servidor customizado).

**Nome do provedor**
Nome a ser apresentado na tela de login.

PROVEDOR NÃO GENÉRICO

Caso seja incluído um **provedor não genérico**, é necessário informar os seguintes campos:

**Identificador do Aplicativo no Provedor (ClientId)**
ClientId é a identificação do provedor, gerado no Linkedin, Facebook ou Google.

**Senha do Aplicativo no Provedor (ClientSecret)**
ClientId é a senha gerada pelo próprio provedor.

**Auto cadastro (Self registration)**
Indica se é permitido criar o usuário no primeiro login, ou se apenas os usuários criados via menu Usuários poderão autenticar-se.

PROVEDOR GENÉRICO

Caso seja incluído um provedor **genérico**, as próximas etapas precisam ser preenchidas.

**05**. Acione **Salvar**para concluir o cadastro do provedor não genérico, ou acione **Avançar**para prosseguir no cadastro do provedor genérico.

**06**. Na etapa **Dados do aplicativo**, inclua as informações necessárias e acione **Avançar**.

**Identificador do Aplicativo no Provedor (ClientId)**
ClientId é a identificação do provedor que deseja utilizar.

**Senha do Aplicativo no Provedor (ClientSecret)**
ClientId é a senha gerada pelo próprio provedor.

**Auto cadastro (Self registration)**
Indica se é permitido criar o usuário no primeiro login, ou se apenas os usuários criados via menu Usuários poderão autenticar-se.

**Escopos**
Os escopos são rotas que os provedores usam, por exemplo: email, username do usuário. Cada provedor tem seu próprio escopo e normalmente documenta isso para que o usuário possa consultar quando está cadastrando.

DICA!

Na hora de executar o login, olhando o F12 do navegador é possível ver a *request*que vem do seu provedor, e com isso pegar exatamente os parâmetros a serem preenchidos.

**07**. Na etapa**Informações do protocolo**, inclua as informações necessárias e acione **Avançar**.

**Tipo de protocolo**
Pode ser OIDC ou OAUTH2. Caso seja OAUTH2, é necessário o cadastro da URI com as informações de usuário pelo provedor.

**Fluxo utilizado para autenticação (GrantType)**Pode ser Authorize ou Implicit. Por padrão, os provedores usam Authorize, casos mais específicos usam o Implicit, mas nesse caso precisa ser indicado na documentação do provedor.

**08**. Na etapa**Endpoints do provedor**, inclua as informações necessárias e acione **Avançar**.

**Obter Informações dos usuários pelo provedor**
Quando essa opção está marcada, ele sempre chama o /me do provedor, mesmo sendo OIDC.

**Auth URL**
Endereço principal para iniciar a autorização.

**URI de troca de tokens com o Provedor (TokenURI)**
É o endereço para trocar o code por um access token (internamente).

**URI com os certificados do Provedor (JWKS)**Certificado fornecendo URI.

**URI com as informações dos usuários pelo Provedor**
É o endereço do /me. Necessário quando não há estas informações provenientes no IDToken (quando o fluxo ocorre por OAuth2 sem OIDC).

**URI com o e-mail do usuário**O preenchimento desse campo só é necessário em um caso muito específico onde o e-mail não está no profile.****

**09**. Na etapa**Informações de busca de autenticação**, inclua as informações necessárias e acione **Avançar**.

**Parâmetro do provedor que contém o ID Token ou o Access Token **

**Parâmetro do provedor com o Access Token**Caso já haja um ID Token na requisição e o accessToken ainda é necessário para alguma chamada ao provedor.

**Variável com nome do usuário**Contida no ID Token ou na resposta do /me.

**Variável com sobrenome do usuário**Contida no ID Token ou na resposta do /me.

**Variável com nome completo do usuário**Contida no ID Token ou na resposta do /me.****

**Identificado de nome completo**Se o ID Token ou /me só contem a variável que contém o FullName, sem o FirstName e LastName.

**E-mail do usuário**Caso o e-mail não esteja contido no ID Token ou na resposta do /me.****

**10**. Na etapa**Validadores de segurança**, inclua as informações necessárias.

**Emissor do token padrão**
Emissor do token. Valor definido pelo provedor.

**Receptor do token padrão**Destinarário do token, usualmente preenchido com o ClientId do aplicativo no provedor.

**11**. Acione **Salvar**para concluir o cadastro do provedor.

Após incluir o novo provedor, na tela de [login do Identity](/display/fluig/Identity+%7C+Login) será apresentado um botão com o nome do provedor, para que seja permitida a autenticação com a conta do usuário no aplicativo configurado.

## Ocultar campos de login

---

**01. **Clique no ícone **Configurações** no canto superior direito e acione a opção **Segurança**.

**02.** No menu à esquerda, acione a opção**Cadastro de provedor**.

**03**. Marque a opção **Ocultar campos de login com Identity.**

Após marcar essa opção, caso exista um provedor corretamente configurado, na tela de [login do Identity](/display/fluig/Identity+%7C+Login) ao digitar o endereço da empresa, os campos de Usuário e senha não serão mais apresentados, forçando os usuários a realizarem o login pelo botão referente ao provedor configurado. 

## Adicionar logo

---

**01. **Clique no ícone **Configurações** no canto superior direito e acione a opção **Segurança**.

**02.** No menu à esquerda, acione a opção**Cadastro de provedor**.

**03**. Localize o provedor que deve receber a imagem da logo e acione o botão **Adicionar logo**.

Será aberta a tela para seleção do arquivo. A imagem deve estar de acordo com as especificações informadas em tela, em relação ao formato suportado (png) e o tamanho máximo (1MB). O tamanho da imagem é de 50 x 50 pixels. Caso já exista logo definida para o provedor, será apresentada a imagem correspondente. 

**04**. Realize os ajustes necessários para que a imagem seja apresentada conforme desejado.

Os botões ![](/download/attachments/769987653/flaticon-undo%20%281%29.png?version=1&modificationDate=1721680909263&api=v2) e ![](/download/attachments/769987653/flaticon-redo.png?version=1&modificationDate=1721680926273&api=v2) fazem a rotação da imagem. Os botões ![](/download/attachments/769987653/flaticon-flip-vertical.png?version=1&modificationDate=1721681019623&api=v2) e ![](/download/attachments/769987653/flaticon-flip-horizontal.png?version=1&modificationDate=1721681009413&api=v2) fazem o espelhamento da imagem. Também é possível selecionar a parte que deve ser apresentada. 

**05.** Acione **Salvar**para gravar a imagem de logo.

Pode demorar alguns minutos para a atualização da nova logo na tela de login. 

## Editar provedor

---

**01. **Clique no ícone **Configurações** no canto superior direito e acione a opção **Segurança**.

**02.** No menu à esquerda, acione a opção**Cadastro de provedor**.

**03**. Localize o provedor que deseja editar e acione o botão **Editar ambiente**.

Serão abertos os dados do provedor desejado, para que as informações sejam consultadas e alteradas.

Para os provedores genéricos, as informações a serem alteradas são as mesmas do cadastro de provedor, conforme item **Cadastrar provedor** desta documentação.

Atenção!

Na edição do provedor, o campo **Alterar senha** só deve ser preenchido caso haja necessidade de alteração da senha do aplicativo no provedor do login social.

Para os provedores não genéricos (Google, Facebook ou Linkedin) somente o ClientId e o ClientSecret podem ser alterados.

**04**. Acione **Salvar**para gravar as alterações.

## Copiar o link da URL do provedor

---

**01. **Clique no ícone **Configurações** no canto superior direito e acione a opção **Segurança**.

**02.** No menu à esquerda, acione a opção**Cadastro de provedor**.

**03**. Localize o provedor que deseja copiar o link e acione o botão **Copiar URL**.

Ao acionar esse botão, o link de acesso ao provedor é copiado para a área de transferência, para que seja possa ser realizado o cadastro no provedor.

## Excluir provedor

---

**01. **Clique no ícone **Configurações** no canto superior direito e acione a opção **Segurança**.

**02.** No menu à esquerda, acione a opção**Cadastro de provedor**.

**03**. Localize o provedor que deseja excluir o link e acione o botão **Excluir ambiente**.

Após excluir o provedor, o botão com o nome do provedor será removido da tela de [login do Identity](/display/fluig/Identity+%7C+Login).


<!-- anchors: Identity|Provedores-Falandodeprovedores..., Identity|Provedores-Consultarlistadeprovedores, Identity|Provedores-Cadastrarprovedor, Identity|Provedores-Ocultarcamposdelogin, Identity|Provedores-Adicionarlogo, Identity|Provedores-Editarprovedor, Identity|Provedores-CopiarolinkdaURLdoprovedor, Identity|Provedores-Excluirprovedor -->
