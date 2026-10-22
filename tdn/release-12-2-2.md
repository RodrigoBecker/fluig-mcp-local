---
title: "Release 12.2.2"
url: "https://tdn.totvs.com/display/public/fluig/Release+12.2.2"
scraped_at: "2026-03-09T04:36:19.517Z"
depth: 3
anchors: 4
child_links: 39
---

# Release 12.2.2

Este documento contém breves descritivos acerca das implementações e correções efetuadas no pacote **12.2.2**.

## Implementações

**Recurso: SOA Server**

**Situação:** A versão 11 do RM não consegue enviar mensagens ao método "*sendMessage*" do fluig ESB 12.2.1. A biblioteca de conexão RM consegue enviar mensagens somente ao método "*sendMessage*" da versão fluig ESB 5.1.124.

**Solução:** Foram disponibilizados serviços web com a mesma assinatura da versão fluig ESB 5.1.124. Para configurar no ambiente RM, basta somente atualizar a URL com o endereço do serviço web: http://[endereco]:[porta]/ws/esb/ESB5WebService.

## Correções

#### fluig ESB Plugin

** **

**Recurso: ESB Navigator**

**Situação:** Em algumas situações ao listar os projetos no ESB Navigator, o recurso de clique com o botão direito sobre o arquivo de diagrama não executa corretamente.

**Solução:** Foram realizadas alterações no fluig ESB Plugin 12.2.2 para corrigir a ocorrência. Alterou-se a identificação interna do Projeto ESB, que estava informada incorretamente. Também foi alterado ícone dos projetos ESB para adequar ao padrão do TOTVS Developer Studio 11.1.

**Recurso: Importação de diagramas**

**Situação:** Utilizando o TOTVS Developer Studio 11.1 e o fluig ESB Plugin  ([http://ds.totvs.com/updates/esb](https://ds.totvs.com/updates/esb)) para Windows 32 bits PT-BR ocorre falha ao tentar importar um arquivo esb-config.xml. A tela de erro de importação informa que não há um diagrama válido.

**Solução:** Foram realizadas alterações no fluig ESB Plugin 12.2.2 para corrigir a ocorrência.

#### fluig ESB Server

**Recurso: Monitor**

**Situação:**  Falha ao reprocessar mensagens no monitor do fluig  ESB 12.1. A mensagem é passada do Status de ERROR para REPROCESSING e em seguida para RECEIVED, e fica com o status RECEIVED eternamente e não reprocessa a mesma.

**Solução:** Foram realizadas alterações na biblioteca "esb-core-12.2.2.jar" para corrigir a ocorrência, garantindo que todo reprocessamento de mensagens seja reenviado ao seu devido componente Receiver.

**Recurso: Componente TOTVSSender**

**Situação:** Para o devido funcionamento do componente TOTVSSender com o produto Datasul tipo EAI é necessário que algumas informações na mensagem a ser inserida na FILA-EAI sejam corretamente informadas. A inexistência dessas informações, leva a um erro genérico que não ajuda a detecção do problema: *Erro for input string: ""*.

**Solução:** Foram realizadas alterações na biblioteca "esb-component-binding-totvs-12.2.2.jar" para realizar uma validação da existência de algumas informações específicas da integração DATASUL. Caso não existam estas informações será exibido um erro possibilitando ao usuário a devida correção do problema.

As informações que serão validadas na mensagem DATASUL serão os informados abaixo (formato XPath):

*/DatasulMessage/MessageHeader/TransactionId/Name/*

*/DatasulMessage/MessageHeader/TransactionId/TrackingId/TrackingNumber*

*/DatasulMessage/MessageHeader/TransactionId/TrackingId/DateTime.*

**Situação:** Em testes realizados integrando o fluig  ESB 12.2.1 com o PIMS, constatou-se que as mensagens estão sendo enviadas para a fila correspondente dentro do servidor de aplicação. Porém, o MDB (Message Driven Bean) do PIMS não está detectando a mensagem devido ao fato de somente aceitar as mensagens tipo TextMessage (jms) e o ESB está enviando como tipo Byte[].

**Solução:** Foram realizadas alterações na biblioteca "esb-component-binding-totvs-12.2.2.jar" para corrigir a ocorrência. Agora em uma integração com o PIMS, o tipo de mensagem enviada é TextMessage (mensagem de texto).

**Recurso: Componente MAILReceiver**

**Situação:** O fluig ESB Server 12.2.1 em Windows 2008 R2, está apresentando erro ao processar uma mensagem: "UnsupportedEncodingException". Mesmo informando um componente OnError no diagrama para tratar a mensagem não consegue capturar a exceção e o fluig  ESB para de receber emails.

**Solução:** Foram realizadas alterações na biblioteca "esb-component-binding-mail-12.2.2.jar" para tratar erros de recebimento de email em conjunto com o componente OnError, e garantir a continuidade do recebimento de emails.

**Recurso: Componente TCL**

**Situação:** Análise de performance e consumo de memória do componente em arquivos grandes.

**Solução:** Foram realizadas alterações na biblioteca "esb-component-transformer-tcl-12.2.2.jar" disponibilizar alternativa de processamento com maior performance e menor alocação de memória por processo.

**Recurso: Componente OnError**

**Situação:** Componente de tratamento de erro não funciona corretamente quando executado em vários diagramas diferentes no mesmo servidor.

**Solução:** Foram realizadas alterações na biblioteca "esb-component-onerror-12.2.2.jar" para corrigir a ocorrência.

**Recurso: ESB Server**

**Situação:** Ao executar o cenário em ambientes com alta carga de processamento de mensagens, o fluig  ESB trava, e apresenta o log abaixo:

*2012-03-16 11:38:39,799 | INFO | [BaseDestination:596] | Usage Manager Memory Limit is full. Producer (ID:TEC-TESTE01-51489-1331908621301-2:10:1:1) stopped to prevent flooding queue://StoreProceduro. See http://activemq.apache.org/producer-flow-control.html for more info (blocking for: 1s).*

**Solução:** O problema relatado ocorre por motivos de enfileiramento no barramento de mensageria do fluig  ESB.  Para balancear a carga nos ambientes standalone e cluster, foi confgurado o broker de mensageria do fluig | ESB para sincronizar em disco as mensagens residentes em memória quando as filas em memórias estiverem cheias, impedindo o travamento do ESB.


<!-- anchors: Release12.2.2-Implementações, Release12.2.2-Correções, Release12.2.2-fluigESBPlugin, Release12.2.2-fluigESBServer -->
