---
title: "Release 12.3.7"
url: "https://tdn.totvs.com/display/public/fluig/Release+12.3.7"
scraped_at: "2026-03-09T04:37:00.775Z"
depth: 3
anchors: 2
child_links: 39
---

# Release 12.3.7

Este documento contém breves descritivos acerca das implementações e correções efetuadas no pacote **12.3.7**.

## Implementações

#### TOTVS | ESB Plugin e TOTVS | ESB Server

**Função: Big Message para FTP**

**Situação:** Ao fazer o deploy de um diagrama com FIleReceiver e Big Message selecionado, o ESB server dispara um erro e não processa nenhum arquivo.

**Solução: **Foi realizado um tratamento na inicialização quando utilizado FTPSender e FILEReceiver em diagramas com opção bigMessage habilitada.

**Função:** **XML de retorno de HTTPSender**

**Situação:** Ao receber o retorno de um serviço HTTPSender com opção Both, o serviço retorna a tag XML o ESB mantém ela, assim ela fica "no meio do xml" e então invalidando a especificação XML.

**Solução:** Tratamento no retorno do tipo Both do componente HTTPSender para que quando o resultado do serviço for um XML, garantir que a mensagem tratada do retorno também seja um XML válido

**Função: Timeout de retorno do WSChannelReceiver para integrações síncronas**

**Situação:** O tempo de timeout de resposta do ESB para chamadas síncronas estava fixa em 2 minutos.

**Solução:** Acrescido tratamento para permitir configurar o timeout de resposta do ESB para a chamada a serviços síncronos

**Função: Consumo de mensagens da fila do EAI Datasul**

**Situação:** Algumas mensagens de tipo em branco estavam sendo retonadas ao componente Datasul EAI.

**Solução:** Acrescido controle para não buscar transações inválidas no Datasul EAI.

**Função: Processamento de mensagens grandes**

**Situação:** Arquivos não são removidos no File Receiver.

**Solução:** Tratamento para correto controle de bigmessage


<!-- anchors: Release12.3.7-Implementações, Release12.3.7-TOTVS|ESBPlugineTOTVS|ESBServer -->
