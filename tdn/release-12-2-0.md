---
title: "Release 12.2.0"
url: "https://tdn.totvs.com/display/public/fluig/Release+12.2.0"
scraped_at: "2026-03-09T04:36:10.398Z"
depth: 3
anchors: 4
child_links: 39
---

# Release 12.2.0

Este documento contém breves descritivos acerca das implementações e correções efetuadas no pacote**12.2.0**.

## Implementações

**Recurso: Nomenclatura de arquivos de diagrama (.esb)**

**Chamado****:** BYYOUESB-149

**Situação:** Nas versões anteriores, não havia possibilidade de alterar o nome do diagrama, que automaticamente era atribuído com o mesmo nome do componente Receiver.

**Solução:** Foram efetuadas alterações no produto para possibilitar informar um nome para o diagrama (.esb) e outro para o componente Receiver.

****

**Recurso: Cluster de alta disponibilidade e balanceamento de carga**

**Situação:** Disponibilizar configuração de alta disponibilidade para o fluig ESB.

**Solução:** Foi criada nova aba nas configurações do servidor chamada “Cluster Configuration”, para atender as configurações de alta disponibilidade e balanceamento de carga do fluig ESB. Disponibilizado manual de configuração de alta disponibilidade do fluig ESB no diretório “/docs-ESB/Configuracao de Ambiente/pt/ Guia de Configuracao de Alta Disponibilidade fluig ESB.pdf”.

## Correções

#### 

#### fluig ESB Server

**Recurso: Padronização fluig ESB**

**Situação:** Padronização do produto, substituindo o antigo termo by You ESB.

**Solução:** Foram efetuadas alterações nos textos, logomarcas e imagens alterando as ocorrências do termo by You ESB para fluig ESB.

**Recurso: fluig ESB XSLT Designer – Histórico de conexões de banco de dados**

**Situação:** O botão a direita do campo “Connection Name” deveria abrir uma caixa de diálogo contendo as configurações de conexões gravadas pelo usuário.

**Solução:** Foram efetuadas alterações no wizard para persistir as conexões de banco após a finalização do wizard.

**Recurso: fluig ESB XSLT Designer – Geração do arquivo de XM exemplo**

**Situação:** O arquivo XML gerado como exemplo da estrutura do schema XML criado pelo wizard contém valores fixos (zeros).

**Solução:** Foram efetuadas alterações na funcionalidade do wizard para popular o arquivo XML de exemplo com os 05 primeiros registros retornados pela query ou pela tabela de banco.

**Recurso: Componente WSSender**

**Situação:** Permitir ao usuário informar um arquivo de customização JAXB, quando na geração do client ocorrer erros de conflitos de nomes reservados da linguagem Java.

**Solução:** Foram efetuadas alterações na tela de configuração do componente WSSender permitindo ao usuário informar arquivo de configuração JAXB.

**Recurso: Deploy de diagramas**

**Situação:** Ao realizar deploy de diagramas com muitos projetos na mesma workspace, a finalização do deploy  torna-se lenta.

**Solução:** Foram efetuadas alterações na funcionalidade de deploy para realizar atualização (refresh) somente do projeto autal.

**Recurso: Importação de diagramas**

**Situação:** Ao importar o arquivo “esb-config.xml” da versão 5.1.124 a descrição do problema é exibido como "Unknown", na aba “Problems”.

**Solução:** Foram efetuadas alterações na funcionalidade de importação de diagramas para exibir o tipo do problema corretamente na aba “Problems”.

**Recurso: Importação de diagramas**

**Situação:** Ao importar um diagrama que contém um componente TOTVSReceiver e o mesmo não está utilizando a opção WebEnsino, não está sendo possível alterar para a opção WebEnsino. Mesmo após salvo o diagrama volta a configuração anterior. O problema não ocorre ao criar um diagrama novo.

**Solução:** Foram efetuadas alterações na funcionalidade de importação de diagramas para resolver o problema.

**Recurso: SOA Server**

**Situação:**Quando é cadastrado um serviço utilizando caracteres especiais nos campos “Group” e “Comments” como *Acentuação*, na página “Mock Operations”****aparece como “*AcentuaÃ£Ã£o”*.

**Solução:** Foram efetuadas alterações na funcionalidade para tratamento de caracteres especiais.

**Situação:**O procedimento de “deploy” não está verificando se a operação é do serviço selecionado.

**Solução:** A cada mudança de servidor e/ou serviço, as informações são atualizadas. Isso garante que os serviços são do servidor relacionado e as operações do serviço selecionado durante o processo de “deploy”.

**Recurso: Deploy de diagramas**

**Situação:** Identificado um problema ao ter dois componentes "When" ligados a um mesmo "DocIdentifier", ao fazer o deploy a definição do componente "DocIdentifier" é duplicado no arquivo "esb-config.xml".

**Solução:** Foram efetuadas alterações na funcionalidade de deploy de diagramas, solucionando o problema.

**Recurso: Componente Identifier**

**Situação:** Ao utilzar a expressão XPath "count(/nfeProc)" no componte Identifier, é acusado o seguinte erro: "The property XPath of the component Identifier0 is invalid. Special characters". Tal XPath não é invalido e não contém caracteres especiais.

**Solução:** Foram efetuadas alterações na funcionalidade de validação do componente Identifier, permitindo inserir qualquer caracter na expressão XPath.

#### fluig ESB Server

**Recurso: Padronização fluig ESB**

**Situação:** Padronização do produto, substituindo o antigo termo by You ESB.

**Solução:** Foram efetuadas alterações nos textos, logomarcas e imagens alterando as ocorrências do termo by You ESB para fluig ESB.

**Recurso: Componentes FileSender / FileReceiver**

**Situação:** Os componentes do tipo FILE não acessam diretório de rede contendo barras “/” em sistemas operacionais Windows. Quando informado caminho contento barras “/”, são criados novos diretórios dentro do diretório raiz do fluig ESB.

**Solução:** Foram efetuadas alterações nos componentes FILE para internamente converterem os caminhos que contém barras “/” para barra invertidas “\”. Correção somente para ambiente Windows.

**Recurso: fluig ESB Monitor**

**Situação:** Em ambiente Linux utilizando o navegador Firefox 3.6 a janela do “*Advanced Filter*” aparece com barra de rolagem horizontal e vertical.

**Solução:** Foram efetuadas alterações no fluig ESB Monitor para maximizar a área de tela do “*Advanced Filter*”, fazendo com que as barras de rolagem não sejam renderizadas.

**Recurso: Componente WSSender**

**Situação:** Componente WSSender não consegue enviar mensagens com mais de 1 MB.

**Solução:** Foram efetuadas alterações no componente para corrigir o problema, permitindo o envio de arquivos com mais de 1 MB. Testes de auditoria e liberação realizados enviando arquivos de 10 MB com a instalação padrão sem necessidade de alterar configurações de memória e de container JMS.

**Recurso: Instalador fluig ESB**

**Situação:** A mensagem da tela de finalização da instalação do fluig ESB nem sempre é apresentada.

**Solução:** Foram efetuadas alterações na funcionalidade de tela de finalização para exibir as informações corretamente.

**Recurso: SOA Server**

**Situação:** Quando um diagrama é substituído ou removido, a página **Mock Operations**  continua exibindo as operações referenciadas nos diagramas removidos ([http://localhost:8085/services/](http://localhost:8085/services/)).

**Solução:** Foram efetuadas alterações na funcionalidade exibição das operações SOA Server para solucionar o problema.

**Recurso: Componente WSSender / WSReceiver**

**Situação:** Os componentes WS (WSClient) não estão fazendo autenticação HTTP básica.

**Solução:** Foram efetuadas alterações no componente para corrigir o problema de autenticação básica HTTP.

**Recurso: Componente FTPSender / FTPReceiver**

**Situação:** Foi identificado que a URL de conexão com o servidor FTP dos componentes FTPSender e FTPReceiver são passada na ordem incorreta.

**Solução:** Foram efetuadas alterações na funcionalidade de geração do componente para corrigir o problema de geração da URL de conexão FTP/FTPS dos componentes FTPSender e FTPReceiver.

**Recurso: Log de Execução**

**Situação:** O componente Custom Sender quando ocorre exceção está exibindo o stacktrace no arquivo de log do ESB em configuração INFO.

**Solução:** Foram efetuadas alterações na funcionalidade de geração do arquivo de LOG, para exibir somente a exceção após o número de re-tentativas configuradas no componente, e em nível DEBUG.


<!-- anchors: Release12.2.0-Implementações, Release12.2.0-Correções, Release12.2.0-fluigESBServer, Release12.2.0-fluigESBServer.1 -->
