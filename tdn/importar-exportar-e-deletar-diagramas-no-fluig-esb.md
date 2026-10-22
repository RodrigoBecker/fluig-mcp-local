---
title: "Importar, exportar e deletar diagramas no Fluig ESB"
url: "https://tdn.totvs.com/display/public/fluig/Importar%2C+exportar+e+deletar+diagramas+no+Fluig+ESB"
scraped_at: "2026-03-09T03:25:22.131Z"
depth: 2
anchors: 16
child_links: 24
---

# Importar, exportar e deletar diagramas no Fluig ESB

# Índice

# Objetivo

---

A partir da versão 12 do Fluig ESB há um novo conceito de importação, exportação e exclusão de diagramas. O objetivo desse manual é demonstrar como exportar, importar e deletar os diagramas da versão 12 através do TDS (TOTVS Developer Studio) utilizando o plugin Fluig ESB.

O processo de exportação e importação de diagramas é muito utilizado quando é necessário compartilhar integrações sem precisar acessar um Fluig ESB Server. É necessário que o usuário tenha [instalado o TDS](/pages/viewpage.action?pageId=73078179) juntamente com o plugin Fluig ESB.

# Exportação de diagramas

---

- [Passo 1](#)
- [Passo 2](#)

 - Para exportar diagramas do Fluig ESB utilizando o TDS, deve-se acionar o menu **File → Export...** e selecionar a opção **General → Archieve File** e clique sobre o botão **Next**.

![](/download/attachments/238036968/Img%2001.PNG?version=1&modificationDate=1464882562000&api=v2)

 - Selecione o projeto que deseja exportar e informe o local desejado para criar o arquivo de exportação. Por padrão, o projeto será exportado no formato ZIP, mas também é possível salvar o projeto no formato TAR. Clique em *Finish* para concluir o processo de exportação.Agora seu projeto exportado em formato ZIP ou TAR pode ser compartilhado entre equipes de trabalho sem necessitar acessar um Fluig ESB Server.

![](/download/attachments/238036968/Img%2002.PNG?version=1&modificationDate=1464882753000&api=v2)

# Importação de diagramas

---

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)

 - Para importar diagramas exportados do Fluig ESB utilizando o TDS, deve-sePara saber o caminho correto do diretório *workspace* que o TDS está utilizando, acesse o menu **File → Switch Workspace → Other...**

****

 - Descompacte o conteúdo do arquivo ZIP exportado no passo anterior dentro do diretório *workspace* do TDS.Utilizando o TDS, acione o menu **File → Import...** e selecionar a opção **General → Existing Projets into Workspace** e clique sobre o botão **Next**.

![](/download/attachments/238036968/Img%2004.PNG?version=1&modificationDate=1464883015000&api=v2)

 - Clique sobre o botão **Browse** e selecione o diretório que foi descompactado no passo anterior conforme imagem abaixo. Deixe o projeto selecionado na opção **Projects** e clique em no botão **Finish** para concluir o processo de importação.

![](/download/attachments/238036968/Img%2005.PNG?version=1&modificationDate=1464883110000&api=v2)

 - Após concluir a importação é possível **visualizar**, **alterar** e fazer **deploy** para um Fluig ESB server disponível na rede.

![](/download/attachments/238036968/Img%2006.PNG?version=1&modificationDate=1464883230000&api=v2)

# Deletar diagramas do ESB Server

---

Para remover um diagrama importado para o servidor do Fluig ESB siga os passos abaixo:

- [Passo 1](#)
- [Passo 2](#)

 1. Acesse a aba ESB Servers;

 2. Clique sobre Servers;

 3. Dê um duplo clique sobre o servidor cadastrado;

 4. Clique sobre a aba **Diagrams** no Painel Central, conforme imagem abaixo:

![](/download/attachments/238036968/Image%202.jpg?version=1&modificationDate=1518730965000&api=v2)

 1. Clique sobre a tag do diagrama que deseja deletar;

 2. Acione o botão Delete;

 3. Clique em **OK** para confirmar a exclusão;

 4. Salve o procedimento clicando sobre o ícone Save.

![](/download/attachments/238036968/Image%205.jpg?version=1&modificationDate=1518731467000&api=v2)

5. **Pronto!**


<!-- anchors: Importar,exportaredeletardiagramasnoFluigESB-Índice, Importar,exportaredeletardiagramasnoFluigESB-Objetivo, Importar,exportaredeletardiagramasnoFluigESB-Exportaçãodediagramas, 1, 1-1, 1-2, Importar,exportaredeletardiagramasnoFluigESB-Importaçãodediagramas, samples, samples-1, samples-2, samples-3, samples-4, Importar,exportaredeletardiagramasnoFluigESB-DeletardiagramasdoESBServer, removeDiag, removeDiag-1, removeDiag-2 -->
