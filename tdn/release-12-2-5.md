---
title: "Release 12.2.5"
url: "https://tdn.totvs.com/display/public/fluig/Release+12.2.5"
scraped_at: "2026-03-09T04:36:31.772Z"
depth: 3
anchors: 7
child_links: 39
---

# Release 12.2.5

Este documento contém breves descritivos acerca das implementações e correções efetuadas no pacote **12.2.5**.

## Implementações

#### fluig | ESB Plugin

****

**Recurso: FileSender**

**Situação:** Ao utilizar o padrão de nome de arquivo "[date:now:yyyyMMdd](http://datenowyyyyMMdd)", informando o mês como "MM" em minúsculo acusa erro somente na execução do ESB Server.

**Solução:** O campo fileName do componente FileServer pode conter vários formatos como nomes de arquivos,não podendo ser validado essa formatação. Foi realizada uma atualização da documentação deste recurso detalhando esta situação.** **

****

#### fluig | ESB Server

**Recurso: Monitor**

**Situação:** No ESB 5, o nome do diagrama era automaticamente o nome do componente Receiver, sendo que agora na versão 12 isto não é mais realidade, pois é permitido informar um determinado nome para o diagrama (.esb) e outro nome para o componente Receiver.

**Solução:** Realizada alteração para a criação do campo DIAGRAMNAME na tabela ESBMessage. Também foi incluído uma coluna a mais no monitor do ESB contendo como informação o nome do diagrama.

**Recurso: Monitor**

**Situação:** Atualmente é possível fazer filtro de status apenas no gráfico e caso tenha um grande volume de mensagens no total e um número baixo de mensagens de um determinado status fica difícil clicar na área do gráfico.

**Solução:** Criado um filtro por Status na aba *Filter Advanced*.

****

## Correções

#### fluig | ESB Plugin

****

**Recurso: Componente Transformer**

**Situação:** No momento do *deploy*, caso o componente Transformer possuir um arquivo XSL configurado no diagrama que esteja "somente leitura" no sistema operacional, é exibido mensagem que o *Deploy* foi realizado com sucesso, porém o arquivo não é enviado para o motor ESB ocasionando problemas de execução do diagrama.

**Solução:** Implementada validação dos arquivos XSL do componente Transformer verificando se os mesmos encontram-se como "Somente Leitura" no sistema operacional.

**Recurso: WSSender**

**Situação:** Nos parâmetros do componente WSSender não é possível utilizar um Xpath com a forma $XPATH conforme documentação do produto, sendo necessário utilizar o caractere "#", mas desta forma é enviado o XML inteiro não atendendo situação de passar apenas o ID ou outras Tags

**Solução:** Realizada alteração incluindo a funcionalidade de utilizar um Xpath ou string como parâmetro do componente de acordo com a documentação do produto..** **

#### fluig ESB Server

****

**Recurso: Componente Transformer**

**Situação:** Caso o XSL não esteja em UTF-8 não é informado nenhum erro para o usuário e neste caso o arquivo não é enviado para o servidor.

**Solução:** Criada rotina para verificar se o *encoding* do arquivo xsl do componente Transformer não é UTF-8, gerando a ocorrência de erro na aba "*Errors*" do TDS.

**Recurso: Mock Service**

**Situação:** Estão ocorrendo erros na criação de Mockservices quando as operações WebServices tem o caractere *Underline* (_) em seus nomes.

**Solução:** Foi realizado alteração para que a geração do serviço e das classes ocorram de forma correta, modificando o pacote para com.totvs.esb e retirando o caracter “_” do nome das classes geradas. Desta forma a geração do serviço foi realizada corretamente não ocorrendo o problema relatado.

****

**Recurso: Instalador Linux**

**Situação:** Ocasionalmente em ambientes Linux os componentes de *Web Service* do fluig | ESB 12 não funcionam corretamente. No TDS, a configuração ocorre sem problema algum, mas ao executar o ESB Server ocorre erro no log.

**Solução:** Foi constatado que nos instaladores para ambientes Linux 32 e 64 bits faltavam os arquivos javac e tools.jar,sendo que os mesmos foram incluídos corretamente nas mídias Linux

**Recurso: Monitor**

**Situação:** Situação: Ao acessar a URL do monitor “http://<servidor>:8085” ocorre um redirecionamento para a tela do monitor do ESB utilizando o primeiro IP da lista de hosts da maquina e não para o IP do servidor onde está instalado o ESB Server. Este problema gera erro de página não encontrada para o monitor ESB.

**Solução:** Realizada alteração a rotina de geração da URL do monitor passando apenas “/monitor” e não mais a URL inteira, corrigindo dessa forma a situação reportada.

**Recurso: TOTVS Receiver**

**Situação:** Quando há mensagens com LOCK na fila EAI ocorre o erro:

[?](#)

| `java.sql.SQLException:[DataDirect][OpenEdge JDBC Driver][OpenEdge] Failure getting record lock on a record from table PUB.fila-eai.` |
| --- |

Devido ao erro acima nenhuma mensagem que está no EAI é processada.

**Solução:** Realizada alteração para modificação da *query* que faz a busca dos registros do EAI, onde a mesma passa a ignorar somente os registros presos (com *lock*) do banco de Dados do EAI (DATASUL-EMS) e busca os demais registros que não apresentam travamento. Desta forma as mensagens que estão disponíveis são processadas não causando mais o problema relatado.

IMPORTANTE: A solução descrita acima faz com que o componente TOTVS Receiver apenas ignore as mensagens do EAI que estão "presas" (com *lock*) e passe a ler as demais mensagens que não tem problema de lock. Caso alguma mensagem do EAI fique apresentando problema constante de travamento de registro, deve ser verificado com o suporte EAI a origem do problema.

**Recurso: Mail Receiver**

**Situação:** Em algumas situações ocorrem problemas na leitura de e-mails utilizando o servidor de e-mail Microsoft Exchange 2010 na qual é apresentado o erro "*Unable to load BODYSTRUCTURE*".

**Solução:** Realizada alteração na rotina de leitura de e-mails corrigindo o problema citado acima.


<!-- anchors: Release12.2.5-Implementações, Release12.2.5-fluig|ESBPlugin, Release12.2.5-fluig|ESBServer, Release12.2.5-Correções, Release12.2.5-fluig|ESBPlugin.1, Release12.2.5-fluigESBServer, highlighter_830528 -->
