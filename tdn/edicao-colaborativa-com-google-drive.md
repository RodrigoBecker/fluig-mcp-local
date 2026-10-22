---
title: "Edição colaborativa com Google Drive"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=219694266"
scraped_at: "2026-03-09T04:22:37.603Z"
depth: 3
anchors: 37
child_links: 71
---

# Edição colaborativa com Google Drive

- [Objetivo](https://tdn.totvs.com/pages/viewpage.action?pageId=219694266#Edi%C3%A7%C3%A3ocolaborativacomGoogleDrive-Objetivo)
- [Pré-requisitos](https://tdn.totvs.com/pages/viewpage.action?pageId=219694266#Edi%C3%A7%C3%A3ocolaborativacomGoogleDrive-Pr%C3%A9-requisitos)
- [Edição colaborativa com Google Drive](https://tdn.totvs.com/pages/viewpage.action?pageId=219694266#Edi%C3%A7%C3%A3ocolaborativacomGoogleDrive-Edi%C3%A7%C3%A3ocolaborativacomGoogleDrive)[Download do pacote](https://tdn.totvs.com/pages/viewpage.action?pageId=219694266#Edi%C3%A7%C3%A3ocolaborativacomGoogleDrive-Downloaddopacote)
- [Instalação do componente](https://tdn.totvs.com/pages/viewpage.action?pageId=219694266#Edi%C3%A7%C3%A3ocolaborativacomGoogleDrive-Instala%C3%A7%C3%A3odocomponente)

[Configurando o seu Google Drive](https://tdn.totvs.com/pages/viewpage.action?pageId=219694266#Edi%C3%A7%C3%A3ocolaborativacomGoogleDrive-ConfigurandooseuGoogleDrive)[Habilitar edição colaborativa na plataforma](https://tdn.totvs.com/pages/viewpage.action?pageId=219694266#Edi%C3%A7%C3%A3ocolaborativacomGoogleDrive-Habilitaredi%C3%A7%C3%A3ocolaborativanaplataforma)[Edição de conteúdo após a conclusão da configuração](https://tdn.totvs.com/pages/viewpage.action?pageId=219694266#Edi%C3%A7%C3%A3ocolaborativacomGoogleDrive-Edi%C3%A7%C3%A3odeconte%C3%BAdoap%C3%B3saconclus%C3%A3odaconfigura%C3%A7%C3%A3o)

# Objetivo

---

Este guia tem o objetivo de apresentar os passos necessários de configuração para uso da edição colaborativa no TOTVS Fluig Plataforma.

# Pré-requisitos

---

- É necessário que a plataforma tenha acesso externo (a partir da internet) para utilizar esta funcionalidade Os endereços [https://www.google.com](https://www.google.com.br) e [https://www.googleapis.com](https://www.google.com/url?q=https://www.googleapis.com&sa=D&source=hangouts&ust=1562088363335000&usg=AFQjCNFpM2yt1vy3OeOd5Q-tIVpTXqA4nw) devem estar liberados na rede.
- A edição em modo colaborativo depende da extensão do arquivo. Arquivos em PDF, por exemplo, não são editáveis, e devem ser convertidos para posterior edição. 

# Edição colaborativa com Google Drive

---

A plataforma disponibiliza o recurso de edição colaborativa de documentos, por meio do Google Drive. Para utilizar esse recurso, é necessário instalar e configurar um componente específico, conforme orientações abaixo.

## Download do pacote

- Para baixar o componente, acesse o [Portal do Cliente](https://suporte.totvs.com)[.](https://suporte.fluig.com/)
- Clique em **Download**(essa é a mesma página onde está disponível a mais recente atualização da plataforma).
- Selecione o produto **Fluig**, acesse o diretório **FLUIG STORE**e selecione** FLUIG**.
- Faça o *download* do arquivo **FLUIG-COLLABORATION-GOOGLEDRIVE.**

![](/download/attachments/219694266/Central_Downloads%20%282%29.png?version=2&modificationDate=1731414235620&api=v2)

## Instalação do componente

Descompacte o arquivo em uma pasta de sua preferência, que aqui chamaremos de **<Diretorio_EdicaoColaborativa>.**

- [Passo1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)
- [Passo 6](#)
- [Passo 7](#)

 - Acesse a plataforma com o perfil de administrador e em seguida acesse : **Painel de Controle** → agrupador **Aplicativos** → **Central de componentes**.

![](/download/attachments/219694266/central%20de%20componentes.png?version=3&modificationDate=1593720683210&api=v2)

 - Acione a opção **Escolher arquivo**, navegue até a pasta descompactada e selecione o arquivo **application-collaboration-googledrive-ear.ear**.

![](/download/attachments/219694266/print-selecionar-arquivo-editado_1.png?version=2&modificationDate=1593720858137&api=v2)

 - Acione a opção **Enviar** e aguarde aproximadamente 1 minuto para a finalização do processo de publicação do componente;

 - Reinicie os serviços fluig_RealTime, fluig_Indexer e fluig.

 - Após reiniciar os serviços, faça uma busca na página de componentes por **collaboration.**

 - Selecione **ecm_collaboration_admin**e acione o botão **Ativar**.

 - Selecione**ecm_collaboration_edit**e acione o botão **Ativar.******

****

 - Acesse **Painel de Controle →**agrupador**Aplicativos**. Uma nova opção de menu chamada **Edição Colaborativa** estará disponível .

![](/download/attachments/219694266/image2015-12-11%2014-30-32.png?version=2&modificationDate=1593721324450&api=v2)

 - Ao clicar na opção **Edição Colaborativa** será apresentada a tela abaixo.

![](/download/attachments/219694266/edicaocolaborativa.png?version=3&modificationDate=1593721500663&api=v2)

A URL de redirecionamento será utilizada na configuração do **Aplicativo WEB** do Google no próximos passos.

 - Reiniciar os serviços da plataforma.

# Configurando o seu Google Drive

---

Para que seja possível a integração entre o TOTVS Fluig Plataforma e o Google Drive será necessário realizar os passos abaixo.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)
- [Passo 6](#)
- [Passo 7](#)
- [Passo 8](#)
- [Passo 9](#)
- [Passo 10](#)
- [Passo 11](#)
- [Passo 12](#)
- [Passo 13](#)
- [Passo 14](#)

 - Acesse a URL [https://console.developers.google.com.](https://console.developers.google.com) Caso não esteja logado no Google, realize o login e crie um projeto, seguindo um dos exemplos abaixo:

   Credenciais > Criar  **Veja a imagem **

   - Criar projeto  **Veja a imagem **

 - Após avançar, escolha um nome para o seu projeto.

 - Em seguida, clique em **Criar**.

****

****

 - Agora você pode aguardar a criação do projeto e acompanhar pela notificação.

 ![](/download/attachments/219694266/passo3.png?version=1&modificationDate=1496266328000&api=v2)

 - Após a criação, selecionar o projeto e em sequência clicar em **Ir para visão geral de APIs**, conforme a imagem:

![](/download/attachments/219694266/passo4.png?version=1&modificationDate=1496266412000&api=v2)

 - Ou você pode acessar diretamente a URL [https://console.developers.google.com.](https://console.developers.google.com/) 

 - Após criar o projeto, você será direcionado para a página abaixo.

 - Selecione a opção **Biblioteca** no menu lateral esquerdo.

![](/download/attachments/219694266/04.PNG?version=1&modificationDate=1473968685000&api=v2)

 - Na página exibida, selecione a opção **Drive API**, na categoria G Suite APIs.

![](/download/attachments/219694266/passo5.png?version=1&modificationDate=1496266555000&api=v2)

 - Acione o botão **Ativar**, caso essa tela apareça. Se não pule para o passo 7.

![](/download/attachments/219694266/google%20drive1.PNG?version=1&modificationDate=1539103739587&api=v2)

 - Com a API ativada, clique no botão **Criar credenciais**.

![](/download/attachments/219694266/passo7.png?version=1&modificationDate=1496266620000&api=v2)

 - Precisamos de credenciais do tipo**ID do cliente OAuth** para realizar a integração, portanto este passo pode ser ignorado clicando no botão **Cancelar**.

![](/download/attachments/219694266/08.PNG?version=1&modificationDate=1473969234000&api=v2)

 - Agora clique no botão **Criar credenciais** e selecione a opção**ID do cliente OAuth**.

![](/download/attachments/219694266/09.PNG?version=1&modificationDate=1473969316000&api=v2)

 - Clique em **Configurar a tela de consentimento**.

![](/download/attachments/219694266/10.PNG?version=1&modificationDate=1473969585000&api=v2)

 - Informe um nome de sua preferência e acione **Salvar**.

![](/download/attachments/219694266/11.PNG?version=1&modificationDate=1473969839000&api=v2)

 - Aqui você terá que adicionar o **Nome** do cliente e a **URL de redirecionamento.**

A URL de redirecionamento autorizada deve ser cadastrada com a **URL de redirecionamento** recuperada no [Passo 6](https://tdn.totvs.com/pages/viewpage.action?pageId=219694266#Componente-6) da instalação do componente.

![](/download/attachments/219694266/13.PNG?version=1&modificationDate=1473970212000&api=v2)

 - Após criar o **Aplicativo WEB**serão apresentadas as chaves OAuth para serem cadastradas no TOTVS Fluig Plataforma.

![](/download/attachments/219694266/chavesoauth.png?version=1&modificationDate=1449860498000&api=v2)

 - Você também pode personalizar seu app de edição colaborativa acessando a opção de menu **Credenciais**na aba**Tela de consentimento OAuth.**

 - Aproveite para adicionar o logo da plataforma.

![](/download/attachments/219694266/consentimento.png?version=3&modificationDate=1450434158000&api=v2)

As telas acima podem apresentar diferenças em relação ao que está demonstrado, devido a constantes atualizações da Google.

# Habilitar edição colaborativa na plataforma

---

Após realizar as configurações necessárias no Google Drive, é necessário fazer as configurações no TOTVS Fluig Plataforma para completar a integração entre a plataforma e o Google Drive.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)

 - Acesse **Painel de Controle >**agrupador**Aplicativos > Edição Colaborativa**e adicione as chaves OAuth adquiridas no [Passo 13](https://tdn.totvs.com/pages/viewpage.action?pageId=219694266#GoogleDrive-13) da configuração do Google Drive.

![](/download/attachments/219694266/edicaocolaborativa.png?version=3&modificationDate=1593721500663&api=v2)

 - Após cadastrar as chaves e habilitar o Google Drive, acesse os Documentos e selecione um documento que deseja editar.

****

 - Selecione a opção **Google Drive**.

![](/download/attachments/219694266/ediatargoole.png?version=3&modificationDate=1593723278217&api=v2)

 - Será apresentada a tela abaixo onde será necessário acionar a opção **Permitir**.

![](/download/attachments/219694266/permitir.png?version=1&modificationDate=1449861634000&api=v2)

 - Com isso, o documento estará disponível para ser editado no**Google Drive** colaborativamente por usuários que tenham permissão de edição no documento.  

# Edição de conteúdo após a conclusão da configuração

---

Após realizar as configurações necessárias no Google Drive e no TOTVS Fluig Plataforma, o passo a passo para editar o conteúdo desejado pode ser consultado na documentação [Editar conteúdo de documento](/pages/viewpage.action?pageId=233765735).

É possível editar pelo Google Drive apenas documentos que possuem uma das seguintes extensões suportadas pelo recurso:

- Documentos: doc, docx, odt;

- Planilhas: xls, xlsx, ods;

- Apresentações: ppt, pptx, odp.


<!-- anchors: EdiçãocolaborativacomGoogleDrive-Objetivo, EdiçãocolaborativacomGoogleDrive-Pré-requisitos, EdiçãocolaborativacomGoogleDrive-EdiçãocolaborativacomGoogleDrive, EdiçãocolaborativacomGoogleDrive-Downloaddopacote, EdiçãocolaborativacomGoogleDrive-Instalaçãodocomponente, Componente, Componente-1, Componente-2, Componente-3, Componente-4, Componente-5, Componente-6, Componente-7, EdiçãocolaborativacomGoogleDrive-ConfigurandooseuGoogleDrive, GoogleDrive, GoogleDrive-1, GoogleDrive-2, GoogleDrive-3, GoogleDrive-4, GoogleDrive-5, GoogleDrive-6, GoogleDrive-7, GoogleDrive-8, GoogleDrive-9, GoogleDrive-10, GoogleDrive-11, GoogleDrive-12, GoogleDrive-13, GoogleDrive-14, EdiçãocolaborativacomGoogleDrive-Habilitarediçãocolaborativanaplataforma, Configuraçãofluig, Configuraçãofluig-1, Configuraçãofluig-2, Configuraçãofluig-3, Configuraçãofluig-4, Configuraçãofluig-5, EdiçãocolaborativacomGoogleDrive-Ediçãodeconteúdoapósaconclusãodaconfiguração -->
