---
title: "Release 12.3.0"
url: "https://tdn.totvs.com/display/public/fluig/Release+12.3.0"
scraped_at: "2026-03-09T04:36:36.240Z"
depth: 3
anchors: 5
child_links: 39
---

# Release 12.3.0

Este documento contém breves descritivos acerca das implementações e correções efetuadas no pacote **12.3.0**.

## Implementações

#### fluig ESB Plugin e fluig ESB Server

****

**Recurso: Componente Splitter**

**Situação:** Não era possível fazer a divisão de mensagens no formato texto (TXT), somente no formato XML através do componente ForEach.

**Solução:** Criado o componente Splitter em substituição ao componente ForEach, onde agora é possível fazer a divisão de mensagens tanto no formato texto (TXT) quanto no formato XML.

A divisão pode ser feita utilizando-se um TOKEN (identificador) para ambos os formatos ou em um XPATH para o formato XML.

Para maiores detalhes, verificar a documentação do componente no manual do produto.

Importante

Os diagramas antigos que possuíam o componente ForEach serão automaticamente convertidos para o componente Splitter utilizando as configurações previamente realizadas, não afetando o funcionamento do mesmo.

****

**Recurso: Componente Aggregator**

**Situação:** Não era possível fazer a agregação (junção) de mensagens nos formatos texto (TXT) e XML.

**Solução:** Criado o componente Aggregator onde é possível fazer a agregação de mensagens nos formatos TXT e XML.

A agregação poder ser feita utilizando-se:

- Um identificador no conteúdo da mensagem para o formato TXT;
- O valor de um XPATH para o formato XML;
- Agregação geral de todas as mensagens de entrada de acordo com o formato selecionado (TXT ou XML);

Para maiores detalhes, verificar a documentação do componente no manual do produto.

**Recurso: Suporte a Web Services que utilizem segurança de SAML Tokens por meio de STS (Secure Token Service).**

**Situação:** Os componentes de Web Services não permitiam consumir *Web Services* que utilizem segurança de SAML *Tokens* por meio de STS.

**Solução**: Adicionado o suporte a configuração de consumo de STS nos componentes WSReceiver, WSSender, TOTVSReceiver e TOTVSSender.

Essa configuração deve ser feita na aba "STS *Security Settings*" do componente de Web Services a ser utilizado.

Para maiores detalhes, verificar a documentação dos componentes citados acima no manual do produto.

## Correções

#### fluig ESB Plugin

****

**Recurso: Componentes WSSender e TOTVSSender**

**Situação**: Nos componentes WSSender e TOTVSSender não é possível consumir um Web Service sem configurar nenhum parâmetro para o mesmo.

**Solução:** Realizada a exclusão da validação dos referidos componentes que exigiam a configuração de no mínimo um parâmetro para consumir um Web Service.

**Recurso: Componente WSReceiver**

**Situação:** Ao inserir uma operação manualmente no componente WSReceiver que estivesse configurado, a mesma não é gravada e consequentemente não é enviada para o ESB.

**Solução:** Efetuada a alteração para que ao informar manualmente uma operação esta seja gravada corretamente.

**Recurso: Componentes TOTVS e WS**

**Situação:** Ao informar um valor em branco ou com espaços no campo “*Value*” dos parâmetros dos componentes TOTVS e WS a mensagem não é enviada corretamente.

**Solução:** Criado uma validação para informar ao usuário se o parâmetro está em branco e também para retirar possíveis espaços que foram configurados no parâmetro.

#### fluig ESB Server

**Recurso: Máquina Virtual Java (JVM)**

**Situação:** A versão da JVM distribuída com ESB é a versão 6, sendo que esta versão atingiu o final dos *releases* públicos (EOL).

**Solução:** Realizado atualização da JVM distribuída com ESB para a versão 7.

**Recurso: Componentes TOTVS e WS**

**Situação:** Quando uma mensagem é configurada com o parâmetro do tipo “EsbMessage”, a mesma é enviada como envelope SOAP completo aumentando o tamanho da mensagem. Nos casos em que o tamanho da mensagem for muito grande isto ocasiona problemas no Protheus que possui limite de tamanho para receber a mensagem. ** **

**Solução:** As mensagens enviadas com o parâmetro do tipo EsbMessage passam a ser transportadas como CDATA não aumentando mais o tamanho da mensagem.

**Recurso: Componentes TOTVS (Server e Plugin)**

**Situação:** Necessidade de incluir o produto TOTVS Segurança e Acesso (TSA) como uma opção disponível nos componentes TOTVS Receiver e TOTVS Sender, para não consumir licença de uso quando realizada integração com os produtos da marca TOTVS.

**Solução:** Foram realizadas alterações no ESB Plugin e no ESB Server para disponibilizar as integrações do produto TOTVS Segurança e Acesso (TSA) com as demais soluções TOTVS sem consumir licença.

**Recurso: TOTVSReceiver (Plugin e motor)**

**Situação:** O componente TOTVSReceiver precisa ter parâmetro que possibilite ter comportamento síncrono ou assíncrono quando estiver recebendo mensagens da fila EAI do produto Datasul.

**Solução:** Foi alterado o componente TOTVSReceiver incluindo uma *flag* “Synchronous” que quando selecionada indica que o processo será síncrono, ou seja, espera uma resposta da requisição. O comportamento padrão deste componente é o mesmo de antes desta implementação, ou seja, comportamento assíncrono.

** **

**Recurso: FTPReceiver**

**Situação:** Ao utilizar o componente FTP para recebimento de mensagens, ocorre em alguns casos a conexão estar indisponível não gerando erros, porem não copiando os arquivos para a pasta de destino

**Solução:** Modificado *pooling* de mensagens do componente FTP por agendamento, passando a utilizar o componente timer para a tarefa.


<!-- anchors: Release12.3.0-Implementações, Release12.3.0-fluigESBPluginefluigESBServer, Release12.3.0-Correções, Release12.3.0-fluigESBPlugin, Release12.3.0-fluigESBServer -->
