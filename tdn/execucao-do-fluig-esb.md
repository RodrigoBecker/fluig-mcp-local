---
title: "Execução do Fluig ESB"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=6066527"
scraped_at: "2026-03-09T04:37:32.872Z"
depth: 3
anchors: 6
child_links: 27
---

# Execução do Fluig ESB

O Fluig ESB pode ser executado como um programa ou como um serviço do sistema operacional Windows. O benefícios e os procedimentos serão demonstrados a seguir.

O banco de dados configurado para o Fluig ESB deverá estar inicializado para que o mesmo funcione corretamente.

- Caso o banco de dados configurado para o ESB seja o Derby, certificar-se de que o serviço do Windows ESB Derby NT Service esteja operante.

- Caso o Derby não esteja instalado como serviço do Windows, executar o arquivo Startup_DB.bat contido na pasta bin do diretório de instalação do ESB.

- Caso seja a **primeira execução** do Fluig ESB, será utilizado o banco de dados Derby para iniciar as [configurações](#) através do ESB Editor.

# Programa

---

Um dos benefícios da execução como programa é a visualização em tempo real do log no console do sistema operacional. Para executar o Fluig ESB como programa é necessário executar o arquivo **Startup_Esb.bat**que se encontra no diretório ESB_INSTALL\bin onde ESB_INSTALL é o diretório de instalação do Fluig ESB.

Ao executar o arquivo mencionado, será iniciado o processador de mensagens Fluig ESB. Pode-se também utilizar atalhos ou item do menu iniciar **ESB Startup** para executar o Fluig ESB como programa, caso a opção de criação de atalhos tenha sido marcada durante a instalação.

# Serviço do Windows

---

Como serviço do Windows, o principal benefício desse recurso é a inicialização automática ao iniciar o sistema operacional. Para executar o Fluig ESB como serviço no sistema operacional Windows é necessário efetuar os passos abaixo.

- [Instalar](#)
- [Iniciar](#)
- [Parar](#)

Para**instalar** o serviço basta executar o arquivo install-esb-service.bat que se encontra no diretório [Instalação_ESB]\bin. Ao executar o arquivo mencionado, será criado um serviço denominado **TOTVS |** **ESB Service**.

![](/download/attachments/6066527/Image%201.jpg?version=1&modificationDate=1520275150000&api=v2)

Para **inciar** o serviço do Fluig ESB, siga os passos abaixo:

 1. Abra o Gerenciador de Serviços do Windows executando o comando 'services.msc' no menu **Iniciar** opção **Executar.**

 2. Localize o serviço **TOTVS | ESB Service** e de um clique com o botão direito do mouse selecionando '**Iniciar**' na listagem. O serviço também pode ser iniciado selecionando o serviço**TOTVS | ESB Service** na listagem e clicando no link '**Iniciar **o serviço' situado no painel esquerdo.

![](/download/attachments/6066527/arq6.gif?version=1&modificationDate=1520278282000&api=v2)

Para **parar** o serviço do Fluig ESB, siga os passos abaixo:

 1. Abra o Gerenciador de Serviços do Windows executando o comando 'services.msc' no menu **Iniciar** opção **Executar.**

 2. Localize o serviço **TOTVS | ESB Service** e de um clique com o botão direito do mouse selecionando '**Parar**' na listagem. O serviço também pode ser parado selecionando o serviço**TOTVS | ESB Service** na listagem e clicando no link '**Parar**** **o serviço' situado no painel esquerdo.

![](/download/attachments/6066527/arq7.gif?version=1&modificationDate=1520278489000&api=v2)

Configurar um usuário de rede que possua os privilégios de acesso (administrador) necessários.


<!-- anchors: ExecuçãodoFluigESB-Programa, ExecuçãodoFluigESB-ServiçodoWindows, Servicos, Servicos-1, Servicos-2, Servicos-3 -->
