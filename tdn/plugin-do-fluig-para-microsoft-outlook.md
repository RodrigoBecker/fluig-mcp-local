---
title: "Plugin do fluig para Microsoft Outlook"
url: "https://tdn.totvs.com/display/public/fluig/Plugin+do+fluig+para+Microsoft+Outlook"
scraped_at: "2026-03-09T04:24:45.398Z"
depth: 3
anchors: 8
child_links: 65
---

# Plugin do fluig para Microsoft Outlook

# índice

# Introdução

---

O fluig integrado ao Microsoft® Outlook® permite ao usuário publicar os e-mails na sua pasta particular ou em pastas em que o mesmo possui privilégios de gravação, além de ter a visão da sua Central de Tarefas e Favoritos do fluig dentro de um painel do Outlook®. É possível publicar mais de um e-mail por vez, arrastando-os para o painel com a listagem de pastas, porém para cada e-mail publicado, um novo documento no fluig será criado. O e-mail publicado será salvo no fluig no formato “.msg”, sendo assim, qualquer visualizador que suporte o formato poderá renderizá-lo, além disso anexos do e-mail também são publicados. Além de e-mails, é permitido também publicar arquivos e pastas do computador, bastando arrastá-los para o painel no Outlook®. Também é possível, através do painel do fluig, abrir itens da Central de Tarefas e dos Favoritos para que possam ser visualizados ou movimentados no fluig.

Importante

A integração com o Outlook® funciona somente para as versões Microsoft® Office **2007**, **2010** e **2013**, as versões anteriores não são suportadas. E a integração com o Outlook® está disponível somente no idioma do sistema operacional.

# Instalação - Pré-requisitos

---

Como a solução de integração do Outlook® com o fluig é um plugin, a sua instalação é fácil, bastando apenas atender dois pré-requisitos:

- Microsoft® .NET Framework 4.0 ([Clique aqui](https://www.microsoft.com/pt-br/download/details.aspx?id=42642)) Normalmente este pacote já vem pré-instalado no Windows®, verifique nos Programas e Recursos do Windows® se ele está ativo.
- VisualStudio Tools ([Clique aqui](https://www.microsoft.com/pt-br/download/confirmation.aspx?id=48217))Após atender este requisito é necessário executar o instalador do plugin de integração gerado pelo fluig.

Importante

**1)**Antes de iniciar a instalação do plugin, certifique-se que não tenha nenhum aplicativo do pacote Microsoft® Office sendo executado. Caso o plugin tenha sido instalado com algum aplicativo Office em execução, e a opção de integração com o fluig não esteja disponível no menu do Outlook®, o plugin deverá ser desinstalado e instalado novamente **sem nenhum aplicativo Office em execução**.

**2) **Para utilizar o novo plugin do Outlook® é necessário ter a versão “1.5.4” ou superior do fluig instalada.

# Instalação do Plugin

---

Para realizarmos a instalação do Plugin do fluig no Outlook® é necessário realizar o download, a partir do [Portal do Cliente](https://suporte.totvs.com/portal/p/10098/download#000035).

Selecione a linha de produto "fluig" e a versão "fluig 1.6". O arquivo para download está disponível no item "PLUGIN_DO_FLUIG_PARA_MS_OUTLOOK".

- Após realizar o download, descompacte o arquivo .zip em um diretório do seu computador.

Verifique se todos os usuários tem permissão total sobre o documento compactado, caso contrário é possível que ocorram erros durante a instalação do plugin.

Para dar permissão total ao documento, edite suas propriedades e na aba Segurança dê permissão total para o grupo de usuários Everyone ou Todos.

- O processo de instalação poder ser iniciado ao clicar duas vezes no item PLUGIN_DO_FLUIG_PARA_MS_OUTLOOK.msi que encontra-se na pasta salva em seu ambiente.

Nota

Algumas telas de solicitação de instalação de componentes adicionais poderão aparecer, caso isto aconteça, instale-os e a instalação do Plugin prosseguirá normalmente.

- Uma tela de confirmação para instalação deverá aparecer, clique na opção **Seguinte **para iniciar a instalação.

![](/download/attachments/215483892/1.png?version=1&modificationDate=1449238225000&api=v2)

- Em seguida uma tela de confirmação para aceitar a licença deverá aparecer, clicando em **Seguinte** a instalação estará concluída.
- Clique em **Concluir** para finalizar.

![](/download/attachments/215483892/2.png?version=1&modificationDate=1449238235000&api=v2)

Importante

Para instalar o plugin do **Outlook via GPO** será necessário que o próprio usuário da plataforma instale o plugin **utilizando a documentação oficial da Microsoft®**.

# Configuração do Plugin

---

A próxima etapa é a configuração do plugin do fluig para realizarmos a publicação de e-mail na navegação de documentos ou visualizar as pendências da central de tarefas do fluig.

Inicie o Outlook® clique no **menu fluig**, em seguida, clique em **Conta** e depois em **Configurações de Acesso**. A tela de login será exibida em seguida.

Defina o endereço do servidor e clique em **Começar***, *após isso defina seu usuário e senha*. *Para mais detalhes consulte o administrador do fluig.

****

# Utilização

---

Após a configuração do Plugin para realizar o acesso ao fluig as demais funcionalidades estarão liberadas. Clique no **Menu fluig > Mostrar/Fechar Painel**.

### Publicação de Arquivos e E-mails no fluig

Para realizar a publicação o usuário deverá arrastar os seus arquivos ou pastas do computador ou e-mails para dentro da árvore de diretórios, para isso clique em **Publicar arquivos no fluig** e arraste e solte os emails/arquivos sobre a pasta desejada, porém cada arquivo não pode exceder o limite de 100 MB. Para cada e-mail enviado, será criado um documento no fluig e no caso de envio de pastas, a mesma estrutura de pastas e arquivos enviada será criada dentro da navegação de documentos do fluig.

![](/download/attachments/215483892/Captura_de_tela_031116_020120_PM.jpg?version=1&modificationDate=1457709582000&api=v2)

- Ao final da publicação, será exibido um alerta de confirmação da publicação dos itens ou então uma mensagem indicando os arquivos que, por algum motivo (falha na conexão, limite excedido, etc.) não foram enviados.
- Para confirmar a publicação basta acessar o fluig pelo navegador e verificar se o arquivo ou e-mail foi publicado na pasta desejada.

![](/download/attachments/215483892/5.png?version=1&modificationDate=1449238188000&api=v2)

### Central de tarefas

- Para visualizar as tarefas pendentes clique em **Central de tarefas**.

![](/download/attachments/215483892/Captura_de_tela_031116_024839_PM.jpg?version=1&modificationDate=1457711649000&api=v2)

- Ao clicar em qualquer um dos links disponíveis, abrirá um novo painel no mesmo lugar, com a listagem das respectivas tarefas e suas principais informações.
- Ao dar um duplo clique em qualquer item da listagem, abrirá o fluig com a respectiva tarefa.

- Para visualizar seus processos e documentos favoritos, clique em **Favoritos**.

![](/download/attachments/215483892/Captura_de_tela_031116_021638_PM.jpg?version=1&modificationDate=1457709611000&api=v2)

- Ao clicar em um dos itens da lista de documentos e processos favoritos, abrirá o fluig para visualização do documento ou inicialização da solicitação.


<!-- anchors: PlugindofluigparaMicrosoftOutlook-índice, PlugindofluigparaMicrosoftOutlook-Introdução, PlugindofluigparaMicrosoftOutlook-Instalação-Pré-requisitos, PlugindofluigparaMicrosoftOutlook-InstalaçãodoPlugin, PlugindofluigparaMicrosoftOutlook-ConfiguraçãodoPlugin, PlugindofluigparaMicrosoftOutlook-Utilização, PlugindofluigparaMicrosoftOutlook-PublicaçãodeArquivoseE-mailsnofluig, PlugindofluigparaMicrosoftOutlook-Centraldetarefas -->
