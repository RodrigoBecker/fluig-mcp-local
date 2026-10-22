---
title: "Conversão de legado Fluig ESB"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=238034806"
scraped_at: "2026-03-09T03:25:57.623Z"
depth: 2
anchors: 9
child_links: 21
---

# Conversão de legado Fluig ESB

# Índice

# Objetivo

---

A partir da versão 12 do Fluig ESB há a necessidade de converter os diagramas e arquivos de configuração para um novo formato, devido ao novo conceito de implantação e configuração nos servidores.

O objetivo desse manual é demonstrar como converter os diagramas da versão 5 para dentro do TDS (TOTVS Developer Studio) utilizando o plugin Fluig ESB. É necessário que o usuário tenha instalado o TDS juntamente com o plugin Fluig ESB.

# Importação de diagramas

---

Para importar os diagramas oriundos da versão 5 do ESB para dentro do TDS, deve-se acionar o menu **Window → Open Perspective → Other...**, selecionar a perspectiva TOTVS ESB e clicar em OK.

A área de trabalho será atualizada e no painel esquerdo será exibido o **ESB Navigator** que conterá os projetos com os diagramas do ESB.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)

Clicando com o botão direito no centro do **ESB Navigator** selecione o item de menu **New → ESB Project**. Ao exibir a tela, preencha com todas as informações e após clicar no botão **Finish** para criar um projeto.

![](/download/attachments/238034806/Img%2001.PNG?version=1&modificationDate=1464803689000&api=v2)

No painel **ESB Navigator** aparecerá o projeto criado com uma estrutura de pastas padrão. Dentro desse projeto serão criados os diagramas para o Fluig ESB. Para importar os diagramas da versão 5, clique com o botão direito em cima do projeto e selecione o item **Import → Import File**.

Abrirá a tela semelhante ao abaixo solicitando que o usuário identifique o arquivo dos diagramas em que se deseje importar. Através do botão **Browse**... seleciona-se o arquivo esb-config.xml da versão 5 do Fluig ESB para importar. Clique em **Finish** para finalizar o procedimento e iniciar os procedimentos de importação.

![](/download/attachments/238034806/Img%2002.PNG?version=1&modificationDate=1464803690000&api=v2)

O resultado é exibido no painel **ESB Navigator**. Cada diagrama contido no arquivo esb-config.xml se tornou um arquivo diferente com a extensão .esb dentro do projeto selecionado previamente. Os arquivos correlatos também foram importados (.xsl, .tcl, etc.) para o projeto facilitando o manuseio desses arquivos.

A seguir tem-se um comparativo do diagrama da versão 5 do Fluig ESB com a versão atual dentro do TDS.

![](/download/attachments/238034806/Img%2003.PNG?version=1&modificationDate=1464803691000&api=v2)

![](/download/attachments/238034806/Img%2004.PNG?version=1&modificationDate=1464803692000&api=v2)

Cabe salientar que o Fluig ESB 12 não utiliza mais nenhum arquivo da versão 5, somente os arquivos que foram importados para o TDS. Ainda, os arquivos com a extensão STD (.std) referenciados pelos componentes Identifier, não são mais necessários, pois as informações foram extraídas e impostas nas propriedades do componente.

Para que os diagramas sejam ativados no servidor ESB, os mesmos deverão ser publicados. Certifique-se de que o servidor Fluig ESB se encontra em execução. Com o servidor “no ar”, o usuário deverá abrir um dos diagramas (arquivo .esb) dentro do TDS e clicar no meio do diagrama com o botão direito e acessar o menu **Deploy to ESB Server...** conforme figura ao lado.

![](/download/attachments/238034806/Img%2005.PNG?version=1&modificationDate=1464803693000&api=v2)

Com isso será exibida uma tela permitindo ao usuário selecionar o servidor Fluig ESB cadastrado anteriormente. Ainda permite que o usuário opte por somente adicionar o diagrama atual aos diagramas existentes no ESB ou se deseja substituir todos os diagramas existentes pelo selecionado. Ao clicar no botão **Finish**, o processo de *deploy* será iniciado.

![](/download/attachments/238034806/Img%2006.PNG?version=1&modificationDate=1464803694000&api=v2)

O mesmo procedimento deverá ser realizado para os outros diagramas até que todos arquivos .esb estejam devidamente publicados no Fluig ESB. Para habilitar a execução dos diagramas deverá reiniciar o servidor ESB. Não é necessário enviar manualmente os arquivos correlatos (.xsl, .tcl, etc.) pois o processo de *deploy* se encarrega de enviar esses arquivos.


<!-- anchors: ConversãodelegadoFluigESB-Índice, ConversãodelegadoFluigESB-Objetivo, ConversãodelegadoFluigESB-Importaçãodediagramas, samples, samples-1, samples-2, samples-3, samples-4, samples-5 -->
