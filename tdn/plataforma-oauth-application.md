---
title: "Plataforma ❙ Oauth application"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=234455783"
scraped_at: "2026-03-09T04:14:50.540Z"
depth: 2
anchors: 8
child_links: 64
---

# Plataforma ❙ Oauth application

# Falando de OAuth application...

---

OAuth é um protocolo padrão aberto para autorização, que é comumente utilizado para permitir que terceiros acessem os dados de um usuário sem a necessidade de conhecer a senha do mesmo.

A plataforma possui uma API Pública com os principais serviços disponíveis na plataforma. Através da API é possível criar mensagens em nome do usuário, adicionar um contato como favorito, criar artigos e muito mais. Para que aplicativos possam atuar em nome de um usuário ou em nome próprio, a autorização é realizada através do protocolo OAuth, sendo necessário que ele esteja previamente cadastrado na plataforma com suas chaves pública e privada.

Caso seu aplicativo execute ações em nome próprio, você pode criar um usuário aplicativo (Opcional). Se desejar que o usuário aplicativo execute ações em nome de outro usuário cadastrado na plataforma, basta selecionar a opção Permite Impersonalização. Selecionando este recurso, o usuário aplicativo pode, por exemplo, fazer um post em uma comunidade, publicar documentos e movimentar processos. em nome de outro usuário.

O cadastro de OAuth *application* para servidores é uma autorização que o servidor de destino concede pra que o servidor atual possa exportar páginas sem a necessidade de baixar e importar arquivos.

![](/download/attachments/234455783/Oauth%20application%20165.png?version=3&modificationDate=1750873425770&api=v2)

## Ver OAuth applications

---

**01.** No menu principal, clique em ![](/download/attachments/234455783/%C3%ADcone-painel-de-controle.png?version=1&modificationDate=1750871369767&api=v2) **Painel de controle**.

**02**. Localize o agrupador **Parâmetros técnicos**.

**03**. Clique em ![](/download/attachments/234455783/%C3%ADcone-oauth-application.png?version=1&modificationDate=1750871288750&api=v2) **OAuth application**.

**04.** Veja os OAuth *applications* existentes.

## Adicionar OAuth application

---

**01.** No menu principal, clique em ![](/download/attachments/234455783/%C3%ADcone-painel-de-controle.png?version=1&modificationDate=1750871369767&api=v2) **Painel de controle**.

**02**. Localize o agrupador **Parâmetros técnicos**.

**03**. Clique em ![](/download/attachments/234455783/%C3%ADcone-oauth-application.png?version=1&modificationDate=1750871288750&api=v2) **OAuth application**.

**04.** Clique em **Adicionar**.

**05.** Insira a **Consumer Key**.

**06.** Informe a descrição.

**07.** Selecione o **OAuth*****Provide**r*.

**08.** Defina **Consumer Secret.**

**09.** Clique em **Salvar**.

Para mais detalhes sobre o cadastro e o uso, acesse a documentação [Fluig API](/display/fluig/Fluig+API).

## Criar usuário aplicativo (opcional)

---

Importante!

Este usuário será exclusivo para integrações e customizações de aplicativos, por isso não deve ser utilizado para navegação na plataforma. Portanto, não será possível efetuar login com ele na plataforma.

Usuários aplicativos são considerados na contagem de [usuários](/pages/viewpage.action?pageId=234455411) da plataforma e também na contagem de licenças quando estão ativos. Mais informações podem ser obtidas em [Licenciamento da plataforma](https://tdn.totvs.com/display/fluig/Licenciamento+da+plataforma).

**01.** No menu principal, clique em ![](/download/attachments/234455783/%C3%ADcone-painel-de-controle.png?version=1&modificationDate=1750871369767&api=v2) **Painel de controle**.

**02**. Localize o agrupador **Parâmetros técnicos**.

**03**. Clique em ![](/download/attachments/234455783/%C3%ADcone-oauth-application.png?version=1&modificationDate=1750871288750&api=v2) **OAuth application**.

**04.** Selecione um Oauth *application* existente.

**05.** Clique em **Usuário aplicativo**.

**06**. Clique em **Gerar token**.

Neste momento é criado um *token* e um usuário na plataforma para que o aplicativo possa atuar em nome de um usuário ou em nome próprio.

**07**. Para gerenciar as informações de cadastro, entenda seu conceito abaixo:

**Nome do usuário**Nome do usuário criado pelo sistema. Este campo vem preenchido com o valor da Descrição cadastrada na tela Adicionar Oauth *Application*. Este nome pode ser alterado para um de sua preferência.

**Permite impersonalização**Selecionando esta opção, permite que o usuário aplicativo execute ações em nome de outro usuário.

**Escolher imagem**Altera a foto padrão do sistema que identifica o usuário cadastrado.

**08.** Clique em **Alterar.**

## Cadastrar OAuth application para servidores

---

![](/plugins/servlet/confluence/placeholder/unknown-macro?name=tooltip&locale=en_US&version=2)

**01.** No menu principal, clique em ![](/download/attachments/234455783/%C3%ADcone-painel-de-controle.png?version=1&modificationDate=1750871369767&api=v2) **Painel de controle**.

**02**. Localize o agrupador **Parâmetros técnicos**.

**03**. Clique em ![](/download/attachments/234455783/%C3%ADcone-oauth-application.png?version=1&modificationDate=1750871288750&api=v2) **OAuth application**.

**04.** Clique em **Adicionar.**

**05.** Defina **Consumer Key.**

Quem administra a empresa pode escolher o valor da *Consumer Key.*

**06.** Informe uma descrição.

A descrição não pode conter acentos e caracteres especiais.

**07.** Selecione o **OAuth Provider**cadastrado com as especificações descritas em [Cadastrar OAuth Provider para servidores](https://tdn.totvs.com/pages/viewpage.action?pageId=234455787#Plataforma%E2%9D%99OAuthprovider-CadastrarOAuthProviderparaservidores).

**08.** Defina **Consumer Secret.**

Quem administra a empresa pode escolher o valor da Consumer Secret.

**09.** Clique em **Salvar**.

Após o cadastro do OAuth *application* é necessário habilitar as opções de Usuário aplicativo.

**10.** Selecione o OAuth *application* criado e acionar **Usuário aplicativo.**

**11.** Clique em **Gerar token.**

**12**. Habilite opção de impersonalização.

**13.** Clique em **Alterar. **

**14.** Clique em**Painel de controle**, agrupador **Pessoas**, ![](/download/attachments/234455783/%C3%ADcone-usu%C3%A1rios.png?version=1&modificationDate=1750871866620&api=v2) **Usuários**.

**15.**Selecione o usuário Aplicativo OAuth criado e clique em **Editar**.

**16.** Conceda o papel de administração ao usuário. 

Não pare por aqui!

Confira a [documentação](https://tdn.totvs.com/x/jYtJF)para saber mais sobre o cadastro de servidores.

## Renovar token

---

**01. **Para alterar os valores ***Access token*** e**Token secret** , clique em **Renovar token**.

**Access token***Token* de acesso para autenticação de requisições gerado pela servidor de aplicação de forma automática.

**Token secret**Chave para autenticação de requisições gerado pela servidor de aplicação de forma automática.

## Editar OAuth application

---

**01.** No menu principal, clique em ![](/download/attachments/234455783/%C3%ADcone-painel-de-controle.png?version=1&modificationDate=1750871369767&api=v2) **Painel de controle**.

**02**. Localize o agrupador **Parâmetros técnicos**.

**03**. Clique em ![](/download/attachments/234455783/%C3%ADcone-oauth-application.png?version=1&modificationDate=1750871288750&api=v2) **OAuth application**.

**04.** Selecione o OAuth *application* que deseja editar.

**05.** Clique em **Editar**.

**06.** Efetue as alterações desejadas.

A plataforma não permite que o campo OAuth *Provider* seja editado.

**07.** Clique em **Salvar.**

## Excluir OAuth application

---

**01.** No menu principal, clique em ![](/download/attachments/234455783/%C3%ADcone-painel-de-controle.png?version=1&modificationDate=1750871369767&api=v2) **Painel de controle**.

**02**. Localize o agrupador **Parâmetros técnicos**.

**03**. Clique em ![](/download/attachments/234455783/%C3%ADcone-oauth-application.png?version=1&modificationDate=1750871288750&api=v2) **OAuth application**.

**04.** Selecione o OAuth *application* que deseja remover.

**05.** Clique em **Remover**.

**06.** Clique em **OK**.

Fique atento!

Esta documentação é válida a partir da atualização **Voyager (2.0)**. Se você utiliza uma atualização anterior, ela pode conter informações diferentes das quais você vê na sua plataforma.


<!-- anchors: Plataforma❙Oauthapplication-FalandodeOAuthapplication..., Plataforma❙Oauthapplication-VerOAuthapplications, Plataforma❙Oauthapplication-AdicionarOAuthapplication, Plataforma❙Oauthapplication-Criarusuárioaplicativo(opcional), Plataforma❙Oauthapplication-CadastrarOAuthapplicationparaservidores, Plataforma❙Oauthapplication-Renovartoken, Plataforma❙Oauthapplication-EditarOAuthapplication, Plataforma❙Oauthapplication-ExcluirOAuthapplication -->
