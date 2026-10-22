---
title: "Release 12.2.3"
url: "https://tdn.totvs.com/display/public/fluig/Release+12.2.3"
scraped_at: "2026-03-09T04:36:23.789Z"
depth: 3
anchors: 6
child_links: 39
---

# Release 12.2.3

Este documento contém breves descritivos acerca das implementações e correções efetuadas no pacote **12.2.3**.

## Implementações

#### fluig ESB Plugin

**Recurso: HTTP Sender/Receiver Components**

**Situação:** Ao configurar o usuário e senha nas configurações dos componentes HTTP Receiver e HTTPSender,  a autenticação HTTP básica não funciona.

**Solução:** Foram realizadas alterações no ESB Plugin, para que o usuário possa selecionar o tipo de autenticação desejada: TOTVS-Authorization, BASIC-Authorization ou Both (ambos).

**Recurso: TOTVS Components**

**Situação:** Necessidade de incluir o produto TOTVS MarketPlace como uma opção disponível nos componentes TOTVS Receiver e TOTVS Sender, para não consumir licença de uso quando realizada integração com os produtos da marca TOTVS.

**Solução:** Foram realizadas alterações no ESB Plugin, para disponibilizar as integrações do produto TOTVS MarketPlace com as demais soluções TOTVS sem consumir licença, selecionando a propriedade "Product" com a opção "Paradigma".

#### fluig ESB Server

**Recurso: Custom Components**

**Situação:** Nos componentes customizados não há a possibilidade de marcar as mensagens que passam pelas customizações com status de REPROCESSO, no banco do monitor do ESB.

**Solução:** Foram realizadas alterações no componente Custom, para disponibilizar a constante "**EsbMessage.CUSTOM_REPROCESS_STATUS**" como retorno dos componentes customizados, fazendo com que o status das mensagens sejam modificados para o status de REPROCESSO.

**Recurso: HTTP Sender/Receiver Components**

**Situação:** Ao configurar o usuário e senha nas configurações dos componentes HTTP Receiver e HTTPSender,  a autenticação HTTP básica não funciona.

**Solução:** Foram realizadas alterações nos componentes HTTP, para tratar a situação e realizar a autenticação básica normalmente.

**Observação**: Necessário atualização do ESB Plugin.

**Recurso: TOTVS Components**

**Situação:** Necessidade de incluir o produto TOTVS MarketPlace como uma opção disponível nos componentes TOTVS Receiver e TOTVS Sender, para não consumir licença de uso quando realizada integração com os produtos da marca TOTVS.

**Solução:** Foram realizadas alterações nos componentes TOTVS, para disponibilizar as integrações do produto TOTVS MarketPlace com as demais soluções TOTVS sem consumir licença.

**Observação**: Necessário atualização do ESB Plugin.

## Correções

#### fluig ESB Plugin

**Recurso: Mail Sender/Receiver Components**

**Situação:** Em algumas situações, informando o usuário e senha corretos para envio de email, utilizando protocolo SMTP,  a autenticação com o servidor de email não ocorre com sucesso.

**Solução:** Foram realizadas alterações no ESB Plugin, para criptografar e descriptografar corretamente as senhas informadas nos componentes de email 

#### fluig ESB Server

**Recurso: ESB Installer**

**Situação:** O processo de atualização de versões do fluig | ESB não estava realizando a operação corretamente.

**Solução:** Foram realizadas alterações no Instalador do ESB, para que o processo de atualização de versões funcione corretamente.

Versão mínima para atualização: fluig | ESB 12.2.1

**Recurso: ESB Monitor**

**Situação:** Quando informado no navegador web somente o IP e a porta do ESB Server, o Monitor do ESB não abre. Exemplo: [http://localhost:8085/](http://localhost:8085/)

**Solução:** Foram realizadas alterações no Monitor, para direcionar automaticamente para o contexto /monitor, quando informado apenas o IP e porta do ESB Server. Exemplo: [http://localhost:8085/monitor](http://localhost:8085/monitor).

**Situação:** Em algumas situações, ocorre falha de gravação de registros no banco do Monitor, exibindo em log que o motivo é duplicação de chave (TRANSACTIONID).

**Solução:** Foram realizadas alterações no Monitor, para gravar no campo TRANSACTIONID um valor gerado pelo algoritmo **UUID** ao invés de gravar o valor do UNIQUEID, que era gerado por um algoritmo randômico do ESB e ocorria a duplicação.

**Recurso: FILE Receiver Component**

**Situação:** Em algumas situações, quando definido o diretório do componente FILE Receiver com a "/" ao final, o ESB Server não inicia.

**Solução:** Foram realizadas alterações no componente, para tratar a situação e garantir que o ESB Server inicie corretamente.

**Recurso: FTP Receiver Component**

**Situação:** Em algumas situações, o componente FTP Receiver para de funcionar e não busca mais mensagens do diretório, necessitando reiniciar o ESB Server para que os diagramas voltem a processar.

**Solução:** Foram realizadas alterações no componente, para tratar a situação sem a necessidade de reiniciar o ESB Server.

**Recurso: JMS Receiver Component**

**Situação:** Em algumas situações, não é possível realizar o reprocessamento de mensagens para componentes do tipo JMS Receiver, utilizando o monitor do ESB.

**Solução:** Foram realizadas alterações no ESB para tratar a situação e reprocessar as mensagens corretamente.

**Recurso: MAIL Receiver Component**

**Chamado****:** BYYOUESB-388

**Situação:** Em algumas situações, nem todos os anexos e conteúdo do corpo de email são recebidos corretamente. Os arquivos anexos também não são recebidos com o mesmo nome, principalmente quando possuem caracteres acentuados.

**Solução:** Foram realizadas alterações no componente Mail Receiver, para receber todos os anexos e conteúdo do corpo de email no formato UTF-8, e manter os nomes dos arquivos anexos ao email.

**Recurso: MAIL Sender/Receiver Components**

**Situação:** Em algumas situações, informando o usuário e senha corretos para envio de email, utilizando protocolo SMTP,  a autenticação com o servidor de email não ocorre com sucesso.

**Solução:** Foram realizadas alterações nos componentes para tratar a situação e realizar a autenticação corretamente no servidor de email informado.

**Observação**: Necessário atualização do ESB Plugin.

**Recurso: TCL Transform Component**

**Situação:** Em algumas situações, a transformação de mapas TCL não é realizada corretamente pelo componente.

**Solução:** Foram realizadas alterações no componente TCL Transform para tratar a situação e realizar a transformação dos mapas corretamente.

**Recurso: WS Sender/Receiver Components**

**Situação:** Quando configurado um componente WSReceiver ou WSSender, em ambientes sem privilégios de usuário administrador para o ESB Server, é registrada apenas a informação "null" no log do ESB, o que dificulta a identificação da causa da exceção.

**Solução:** Foram realizadas alterações nos componentes, para registrar corretamente as ocorrências no log do ESB.

**Recurso: WS Sender/TOTVS Sender Components**

**Situação:** Em algumas situações, os componentes WS Sender e TOTVS Sender, quando conectados com serviços web síncronos com alto tempo de resposta, demoram para processar as próximas mensagens enfileiradas.

**Solução:** Foram realizadas alterações nos componentes, para que possam dar maior vazão as mensagens enfileiradas, executando processos simultâneos (novas threads).


<!-- anchors: Release12.2.3-Implementações, Release12.2.3-fluigESBPlugin, Release12.2.3-fluigESBServer, Release12.2.3-Correções, Release12.2.3-fluigESBPlugin.1, Release12.2.3-fluigESBServer.1 -->
