---
title: "Instalação do plugin Fluig ESB"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=238035434"
scraped_at: "2026-03-09T03:24:55.619Z"
depth: 2
anchors: 23
child_links: 22
---

# Instalação do plugin Fluig ESB

# Índice

# Objetivo

---

Com a liberação da versão 12 do Fluig ESB houve mudanças estruturais que introduz um novo conceito nas metodologias para implantação e configuração nos servidores. O objetivo desse manual é demonstrar como instalar e configurar um ambiente funcional utilizando o TDS (TOTVS Developer Studio) em conjunto com o Fluig ESB.

A primeira etapa para a montagem desse ambiente é a instalação do plugin Fluig ESB. O TDS é uma ferramenta que possibilita realizar tarefas diferenciadas de administração e desenvolvimento com auxílio de plugins específicos para cada finalidade. O plugin Fluig ESB é responsável pela configuração e diagramação do servidor Fluig ESB.

# Pré-requisitos

---

Um dos pré-requisitos é realizar o download e instalar o TDS. As instruções para realizar o download e instalação do TDS se encontram no link [http://ds.totvs.com/](https://ds.totvs.com/). Não é necessária a instalação de todos os opcionais (plugins), apenas a instalação do plugin Fluig ESB que será descrito os procedimentos em pormenores logo a seguir. 

Outro pré-requisito é realizar o download e instalar o Fluig ESB. O download do Fluig ESB é realizado através do portal do suporte ([http://suporte.fluig.com](https://suporte.totvs.com)). Após o login, acessar a página  **Downloads e Atualizações** e selecionar a pasta ESB > FLUIG.

Selecionar a mídia correspondente ao sistema operacional em que se deseja instalar e imediatamente será redirecionado para baixar o arquivo desejado. Deve-se descompactar o arquivo e seguir as instruções contidos na pasta *docs/Configuracao de Ambiente/pt/Guia de Instalação do fluig ESB.pdf* para a instalação do produto.

Atenção!

Para o correto funcionamento do plugin ESB, Eclipse ou TDS os mesmos devem estar utilizando o **Java 8**, versões acima desta, não terão seu funcionamento garantido.

# Instalação TDS + Plugin ESB

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
- [Passo 15](#)
- [Passo 16](#)
- [Passo 17](#)
- [Passo 18](#)

Com o TDS aberto, deve-se selecionar o item de menu **Help → Install New Software **e acessar a opção **Available Software Sites.**

****

Na tela **Available Software Sites,**mantenha habilitadas apenas as opções da imagem abaixo. Para confirmar a operação clique em **OK**.

![](/download/attachments/238035434/disableOptions.png?version=1&modificationDate=1565956627340&api=v2)

Ainda na tela aberta **Available Software**, clique no botão **Add...** 

![](/download/attachments/238035434/Available%20software%20-%20Copia.png?version=1&modificationDate=1565962117993&api=v2)

Preencha os campos conforme abaixo. Dessa forma, permitirá que o TDS atualize o plugin do ESB juntamente com as outras atualizações. Clique em **OK** para efetivar a operação.

**Nome:** Fluig ESB

**Localização:** [http://update.fluig.com/esb/](https://update.fluig.com/esb/)

![](/download/attachments/238035434/fluig%20ESB%20updatesite.png?version=1&modificationDate=1470427516000&api=v2)

A tela sofrerá uma atualização e na listagem central aparecerá o plugin do Fluig ESB com o resultado semelhante à imagem a seguir. Na listagem superior, o plugin Fluig ESB deve ser selecionado bem como o item *Contact all update sites during install to find required software*. Caso esse último não seja selecionado, o TDS não irá buscar outros pacotes necessários para o devido funcionamento do plugin ESB. Ao clicar o botão Next é possível que haja uma lentidão para verificar e buscar os pacotes dependentes, dependendo da conexão à Internet.

![](/download/attachments/238035434/fluig%20ESB%20updatesite%202.png?version=1&modificationDate=1470427585000&api=v2)

Após o término desse processo, aparecerá uma tela solicitando a confirmação da instalação do plugin Fluig ESB, mencionando uma pequena descrição e a versão a ser instalada no TDS.

![](/download/attachments/238035434/Img%2004.PNG?version=1&modificationDate=1464811045000&api=v2)

Após clicar em **Next** será exibido um termo de licença que deverá ser aprovado para prosseguir com a instalação. Para iniciar os procedimentos de instalação deve-se clicar em **Finish**.

![](/download/attachments/238035434/Img%2005.PNG?version=1&modificationDate=1464811046000&api=v2)

Imediatamente, o TDS realizará o download dos pacotes necessários para o funcionamento do plugin Fluig ESB. Nessa etapa, é possível que haja uma lentidão no processo dependendo da conexão à Internet. Durante o download um aviso é exibido com os dizeres abaixo. O aviso pode ser ignorado por clicar no botão **OK**.

*You are installing software that contains unsigned content. The authenticity or validity of this software cannot be established. Do you whant tocontinue with the installation?*

![](/download/attachments/238035434/Img%2007.PNG?version=1&modificationDate=1464811049000&api=v2)

Finalizando a instalação do plugin, é solicitado para reiniciar o TDS. Esse procedimento é recomendado para o bom funcionamento do produto. Com isso, o plugin Fluig ESB se encontra devidamente instalado no TDS e pronto para configurar o servidor Fluig ESB e realizar a diagramação dos processos.

![](/download/attachments/238035434/Img%2008.PNG?version=1&modificationDate=1464811050000&api=v2)

Para que o plugin Fluig ESB se comunique com o servidor Fluig ESB, é necessário que o último esteja iniciado.

Para a primeira configuração deve-se acessar o diretório de instalação do Fluig ESB e acessar a pasta bin. Executar os arquivos nessa ordem: startup-db.bat (banco de dados) e startup-esb.bat (serviço do ESB). Uma alternativa seria acessar o menu principal do sistema operacional e acessar os ícones Database Startup e ESB Startup.

Espere até que a mensagem **[STARTED]**seja exibida**.**

****

Voltando ao TDS, selecione o menu **Window → Open Perspective → Other...** Abrirá uma caixa de diálogo, semelhante ao exibido abaixo, com todas as perspectivas possíveis para o TDS. Seleciona-se a opção **TOTVS ESB** e clica-se em **OK**.

![](/download/attachments/238035434/perspecitva_2.png?version=1&modificationDate=1465583587000&api=v2)

A área de trabalho do TDS sofrerá modificações se adequando à perspectiva selecionada. No painel esquerdo denominado de **ESB Servers**, será visualizado uma lista com um item raiz com a descrição **Servers**. Deverá clicar com o botão direito do mouse em cima do item raiz e selecionar o item de menu Fluig ESB → ESB Server.

![](/download/attachments/238035434/new_esb_server.png?version=1&modificationDate=1465583669000&api=v2)

Em seguida será aberto uma tela solicitando informações para conexão ao servidor Fluig ESB. As informações para se comunicar inicialmente com o servidor Fluig ESB são:

 - **Server Name:** Identificador do servidor para identificação por parte do usuário.

 - **Host:** Nome ou número IP do servidor Fluig ESB. Nesse caso utilizaremos localhost.

 - **Port:** Porta de comunicação com o servidor Fluig ESB. O padrão é 8085.

![](/download/attachments/238035434/new_esb_server_wizard.png?version=1&modificationDate=1465583709000&api=v2)

Finalizando o cadastro, um novo item será mostrado no painel **ESB Servers** (1). Deve-se executar um duplo clique em cima do item que foi cadastrado para que o TDS se comunique com o servidor Fluig ESB capturando as informações necessárias. No painel central, abrirá uma tela (2) com todas as configurações do servidor Fluig ESB (3) que incluem banco de dados, servidor de licença, servidor HTTP, etc. Após as configurações serem realizadas, deve-se clicar no botão “Save (Ctrl+S)” (4), situado no painel superior, para enviar os dados para o ESB.

Atenção

As configurações aqui mencionadas não são imediatamente aplicadas. Para que as configurações sejam aplicadas ao produto,**deve-se reiniciar o serviço do Fluig ESB,**caso contrário, pode apresentar falha na conexão.

![](/download/attachments/238035434/Image%201.jpg?version=3&modificationDate=1518729011000&api=v2)

Nesse momento é importante realizar as configurações na aba **License Configuration**, especialmente em integrações que não envolvem produtos TOTVS (componentes TOTVS) e que fazem uso de outros componentes como FileSender, MockReceiver, etc.

Caso as integrações façam uso de componentes TOTVS, essa configuração não é necessária. A tela abaixo mostra as configurações do servidor Fluig ESB.

![](/download/attachments/238035434/Img%2014.PNG?version=1&modificationDate=1464879200000&api=v2)

Com o servidor ESB configurado e conectado, é possível construir e publicar diagramas. No painel esquerdo, o **ESB Navigator** conterá os projetos com os diagramas do ESB.
Clicando com o botão direito no centro do **ESB Navigator** selecione o item de menu New → ESB Project. Ao exibir a tela, preencha com todas as informações e clique no botão Finish para criar um projeto.

![](/download/attachments/238035434/new_esb_project.png?version=1&modificationDate=1465583824000&api=v2)

No painel **ESB Navigator** aparecerá o **projeto** criado contendo uma estrutura de pastas padrão, sendo elas: ***maps**, **resources*** e ***validators***. Dentro desse projeto serão criados os diagramas para o Fluig ESB. Para criar um diagrama, clique com o botão direito em cima do projeto e selecione o item New → ESB Diagram. Será aberta a tela abaixo solicitando o nome do arquivo e, após digitar, clica-se no botão Finish para concluir a criação do arquivo de diagrama.

![](/download/attachments/238035434/new_esb_diagram.png?version=1&modificationDate=1465583889000&api=v2)

Na parte central da área de trabalho do TDS, será aberto um editor próprio para construir diagramas com os componentes ESB situados no painel esquerdo do editor. Assim, o mesmo é utilizado para definir os receptores, transformadores e enviadores de mensagens. As propriedades de cada componente incluído no diagrama serão exibidas no painel **Properties** situado na parte inferior do TDS.

![](/download/attachments/238035434/Img%2017.PNG?version=1&modificationDate=1464880177000&api=v2)

Após a constituição do diagrama, deve-se publicar o mesmo no servidor Fluig ESB. Para isso, deve-se clicar no meio do diagrama com o botão direito e acessar o menu **Deploy to ESB Server...** conforme figura ao lado.

![](/download/attachments/238035434/Img%2018.PNG?version=1&modificationDate=1464880383000&api=v2)

Com isso aparecerá uma tela permitindo ao usuário selecionar o servidor Fluig ESB cadastrado anteriormente. Ainda possibilita que o usuário opte por somente adicionar o diagrama atual aos diagramas existentes no servidor ESB ou se deseja substituir todos os diagramas existentes no servidor pelo que está sendo publicado. Ao clicar no botão **Finish**, o processo de *deploy* será iniciado.

Com esses procedimentos, o diagrama relacionado encontra-se disponível no servidor Fluig ESB, porém, não estará habilitado. O diagrama somente estará funcional após o **reinício** do servidor Fluig ESB.

![](/download/attachments/238035434/deploy.png?version=1&modificationDate=1465584179000&api=v2)


<!-- anchors: InstalaçãodopluginFluigESB-Índice, InstalaçãodopluginFluigESB-Objetivo, InstalaçãodopluginFluigESB-Pré-requisitos, InstalaçãodopluginFluigESB-InstalaçãoTDS+PluginESB, samples, samples-1, samples-2, samples-3, samples-4, samples-5, samples-6, samples-7, samples-8, samples-9, samples-10, samples-11, samples-12, samples-13, samples-14, samples-15, samples-16, samples-17, samples-18 -->
