---
title: "Release 12.3.1"
url: "https://tdn.totvs.com/display/public/fluig/Release+12.3.1"
scraped_at: "2026-03-09T04:36:40.267Z"
depth: 3
anchors: 7
child_links: 39
---

# Release 12.3.1

Este documento contém breves descritivos acerca das implementações e correções efetuadas no pacote **12.3.1**.

## Implementações

#### fluig ESB Plugin e fluig ESB Server

****

**Recurso: Plugin e Motor**

**Situação:** Não é informado ao usuário sobre incompatibilidade de versões entre o plugin e o motor do ESB, causando transtornos ao modificar os diagramas.

**Solução:** Realizada verificação das versões utilizadas no plugin e motor ESB. Caso exista incompatibilidade é informado ao usuário solicitando que o mesmo realize atualização do fluig ESB.

**Recurso: Monitor**

**Situação:** É necessário incluir segurança para acesso ao monitor do ESB.

**Solução:** Criado uma tela de login que verifica um arquivo XML (/conf/users.xml) contendo usuário e senha criptografada em MD5. Será possível incluir mais de um usuário, conforme exemplo abaixo:

[?](#)

| `````````esbAdm````b09c600fddc573f117449b3723f23d64````````````esbUser1````b09c600fddc573f117449b3723f23d64``````` |
| --- |

Para auxiliar na criptografia MD5 pode ser utilizado o site: [http://www.md5online.org/md5-encrypt.html](http://www.md5online.org/md5-encrypt.html).

**Recurso: WSClient**

**Situação:** O tempo de *timeout* de execução para componente WebService são 2 minutos e não possível alterar esta configuração no produto.

**Solução:** Foram efetuadas alterações no recurso, permitindo agora a configuração do tempo de *timeout*. A parametrização ocorre no arquivo “timeout.xml localizado na pasta /conf, sendo 2 minutos o padrão. O conteúdo da tag “*timeout*” é sempre em milissegundos. Por exemplo, caso seja necessário aumentar o tempo para 3 minutos é necessário modificar a tag *timeout* para “180000” milissegundos conforme abaixo:

[?](#)

| `````````180000````` |
| --- |

****

## Correções

#### fluig ESB Plugin

**Recurso: Server**

**Situação:** Na configuração de bando de dados, o driver “JDBC/ODBC Bridge” não está mais sendo utilizado e suportado pelo produto.

**Solução:** Retirado o *driver* “JDBC/ODBC Bridge”, pois já existem drivers para os três bancos homologados: Oracle, SQL Server e MySQL.

****

**Recurso: Importação de Diagramas**

**Situação:** Caso no diagrama exista componente Splitter ligados a componentes de transformação/Identificação e seja utilizado o recurso "*Import diagrams from ESB 12 Server (remote)*", o diagrama não é importado corretamente.

**Solução:** Incluído na rotina de importação a verificação do componente do tipo "Splitter".

#### fluig ESB Server

****

**Recurso: FTPReceiver**

**Situação:** Ao utilizar o componente FTP para recebimento de mensagens, em determinadas situações após um longo período de verificação o componente não efetua mais a leitura dos arquivos no servidor FTP.

**Solução:** Foram efetuadas correções no componente para a correta verificação de novas mensagens no servidor FTP.

****

**Recurso: TOTVSReceiver**

**Situação:** Ao reprocessar uma mensagem pelo monitor do ESB de um diagrama que possua o componente TOTVSReceiver e este estiver recebendo um *webservice*, a mensagem é exibida no monitor como “Recebida” e não é reprocessada.

**Solução:** Foram efetuas correções no recurso, modificando a rota de reprocessamento do componente para que a mensagem seja consumida e o problema não ocorra mais.

**Recurso: WSClient**

**Situação:** Ao utilizar os *webservices* do produto WebEnsino (tipo RPC-Encoded) ocorre erro na criação do cliente: "no source files java.lang.IllegalStateException: no source files"

**Solução:** Modificado a biblioteca para tratamento deste tipo de *webservice*

****

**Recurso:** **TOTVSReceiver**

**Situação:** A criação do Envelope SOAP não estava correta ao utilizar o type “EsbMessage” nos parâmetros quando o *webservice* é do tipo “RPC-Encoded”.

**Solução:** Modificado a criação do Envelope SOAP, passando a utilizar a API Apache Axis2 .


<!-- anchors: Release12.3.1-Implementações, Release12.3.1-fluigESBPluginefluigESBServer, highlighter_521439, highlighter_119537, Release12.3.1-Correções, Release12.3.1-fluigESBPlugin, Release12.3.1-fluigESBServer -->
