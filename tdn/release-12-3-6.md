---
title: "Release 12.3.6"
url: "https://tdn.totvs.com/display/public/fluig/Release+12.3.6"
scraped_at: "2026-03-09T04:36:56.882Z"
depth: 3
anchors: 2
child_links: 39
---

# Release 12.3.6

Este documento contém breves descritivos acerca das implementações e correções efetuadas no pacote **12.3.6**.

## Implementações

#### fluig ESB Plugin e fluig ESB Server

**Recurso: Alta disponibilidade**

**Situação:** Ao configurar o ESB para alta disponibilidade eram apresentadas algumas mensagens de falha no log mesmo ocorrendo a alta disponibilidade.

**Solução:** Foi realizado um tratamento na configuração e execução do ESB em alta disponibilidade.

**Recurso: Compactação de arquivos grandes**

**Situação:** Arquivos textos com mais de 1 GB de extensão não eram lidos pelo componente FILEReceiver nem compactados pelo componente ZIP.

**Solução:** Foi realizada a inclusão de uma funcionalidade para a utilização de mensagens grandes. Essa opção está disponível nos componentes de protocolo FILE e FTP através da propriedade *Big Message*, sendo ela suportada em diagramas que possuam componentes do tipo FILE, FTP ou ZIP.

**Recurso: Parâmetros para consumo de web services via componente WSSender**

**Situação:** O envelope SOAP não era gerado corretamente pelo componente WSSender quando o documento possuía múltiplos *namespaces*.

**Solução:** Foi realizada a inclusão de uma opção para tornar possível o envio de um envelope SOAP completo pelo componente WSSender. Para utilizar o recurso é necessário enviar o envelope como mensagem corrente e escolher o tipo de parâmetro SOAPEnvelope nas configurações do componente.

**Recurso: Transformação de mensagens via XSLT 2.0**

**Situação:** Ao executar transformações via XSLT 2.0 não era possível utilizar extensões na linguagem Java.

**Solução:** Foi atualizada a versão da API XSLT 2.0 para uma versão compatível com extensões na linguagem Java.

**Recurso: Consumo de mensagens da fila do EAI Datasul**

**Situação:** Quando existem muitas mensagens na fila do EAI do produto Datasul em alguns casos a leitura das mesmas pelo componente TOTVSReceiver não ocorre.

**Solução:** Foi implementada uma opção para limitar o número de mensagens retornada em cada consulta a fila do EAI Datasul. Essa opção está disponível através da propriedade *Message Limit* do componente TOTVSReceiver. Se a opção for mantida com valor 0 não haverá limitação de leitura.

**Recurso: Reprocessamento de mensagens**

**Situação:** Ao reprocessar mensagens geradas pelo componente Splitter em casos onde o diagrama não existe mais, a mensagem não era reprocessada corretamente mesmo depois de restaurar o diagrama.

**Solução:** Foi realizado um tratamento para possibilitar novas tentativas de reprocessamento após um diagrama ser restaurado. Onde nesses casos a mensagem não é mais alterada para o status de ERRO, mantendo então seu status de EM REPROCESSAMENTO para ser executada em novas tentativas.


<!-- anchors: Release12.3.6-Implementações, Release12.3.6-fluigESBPluginefluigESBServer -->
