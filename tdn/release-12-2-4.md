---
title: "Release 12.2.4"
url: "https://tdn.totvs.com/display/public/fluig/Release+12.2.4"
scraped_at: "2026-03-09T04:36:27.812Z"
depth: 3
anchors: 5
child_links: 39
---

# Release 12.2.4

Este documento contém breves descritivos acerca das implementações e correções efetuadas no pacote **12.2.4**.

## Implementações

#### fluig ESB Plugin

** **

**Recurso: Componentes TOTVS (Server e Plugin)**

**Situação:** Necessidade de incluir o produto TOTVS Saúde Ocupacional como uma opção disponível nos componentes TOTVS Receiver e TOTVS Sender, para não consumir licença de uso quando realizada integração com os produtos da marca TOTVS.

**Solução:** Foram realizadas alterações no ESB Plugin e no ESB Server, para disponibilizar as integrações do produto TOTVS Saúde Ocupacional com as demais soluções TOTVS sem consumir licença, selecionando a propriedade "*Product*" com a opção "SaudeOcupacional".

****

**fluig ESB Server**

**Recurso: Componente EMS**

**Situação:** Foi solicitado pela equipe do EAI Datasul que seja gravado o código do estabelecimento que vem na mensagem Datasul no campo COD_ESTABELECIMENTO da tabela FILA_EAI.

**Solução:** Foram realizadas alterações no módulo EMS do ESB, para que seja capturado o valor da tag "/DatasulMessage/MessageHeader/CompanyId/BranchCode" no campo COD_ESTABELECIMENTO da tabela FILA_EAI. Caso não venha a tag correspondente na mensagem Datasul, será gravado espaço em branco no respectivo campo.

## Correções

#### fluig ESB Plugin

****

**Recurso: Criação de XSD from Database**

**Situação:** Ao criar um 'XSD *from Database*' não é feita nenhuma validação para verificar se o nome que se deseja dar ao arquivo já não existe no diretório do ESB. Quando as informações são salvas o arquivo é substituído e, antes disso, nenhum alerta é mostrado ao usuário.

**Solução:** Foram realizadas alterações no plugin do ESB para verificação da existência do arquivo na pasta utilizada pelo usuário solicitando ao mesmo que seja informado um nome diferente ao arquivo criado não sobrescrevendo mais o arquivo xsd.

** **

**Recurso: Componentes Identifier e XMLValidator**

**Situação:** Mensagem quando um componente Identifier não bate com nenhum componente When é "Recebido", quando deveria ser algo como "descartado". Necessário validar no deploy se os componentes When possuem ao menos um componente Otherwise

**Solução:** Foram realizadas alterações no plugin do ESB para validar cada componente Identifier ou XMLValidator do diagrama a existência  ao menos um componente When e um componente Otherwise,  para que quando ocorrer a situação descrita acima o usuário seja informado na aba “Problemas” do Totvs Developer Studio, podendo assim realizar a correção.

** **

**Recurso: ESB Server (System Properties)**

**Situação:** O usuário informa que incluindo o caractere vírgula (,) no campo Password na seção Database Configuration do plugin do ESB e ao realizar o deploy, o arquivo /conf/jdbc.properties fica com a propriedade password em branco e não é apresentado nenhuma mensagem ao usuário.

**Solução:** Foram realizadas alterações no plugin do ESB, para que os campos URL, User e Password não permitam a inclusão do caractere vírgula (,)  evitando assim a situação descrita.

** **

**Recurso: Componente Cipher**

**Situação:** O usuário informa que em algumas situações ocorre falha ao descriptografar arquivos utilizando o componente Cipher configurado com modo Assimétrico.

**Solução:** Foram realizadas alterações no módulo CIPHER do ESB e no componente Cipher do ESB Plugin, para quando for utilizada descriptografia no modo assimétrico, o usuário possa informar a senha da chave privada, descriptografando corretamente os arquivos.

#### fluig | ESB Server

**Recurso: Componentes Sender (todos)**

**Situação:** O usuário informa que em algumas situações ao processar diagramas com componentes do tipo Sender com a *flag* "*Persist*" habilitada, as mensagens são processadas corretamente, mas as informações não são gravadas no banco de dados do ESB Monitor.

**Solução****:** Foram realizadas alterações no módulo *PERSISTENCE* do ESB, para quando ocorrer a situação descrita acima, os componentes do tipo Sender persistam corretamente as informações de monitoramento.

** **

**Recurso: Componente FILE Sender**

**Situação:** O usuário informa que em algumas situações o componente FILE Sender não mantém o nome do arquivo original enviado pelo componente FILE Receiver.

**Solução****:** Foram realizadas alterações no módulo CORE do ESB, para quando ocorrer a situação descrita acima, componente FILE Sender mantenha o nome do arquivo enviado pelo componente FILE Receiver.

** **

**Recurso: Componente TOTVS Sender**

**Situação:** O usuário informa que em algumas situações o componente TOTVS Sender do sistema DATASUL não grava corretamente as informações com caracteres especiais na FILA-EAI.

**Solução:** Foram realizadas alterações no módulo ESB-COMPONENT-EMS do ESB, para que quando ocorrer à situação descrita acima, componente TOTVS Sender sempre irá gravar as informações na FILA-EAI com a codificação "ISO-8859-1".

** **

**Recurso: Instalador Linux**

**Situação:** O usuário informa que durante a instalação do ESB Server em Linux Mint 13 ocorre um erro informando que não é possível executar um script chamado “post-update.sh”.

**Solução:** Foram realizadas alterações no módulo INSTALLER do ESB, que o script "post-update.sh" execute corretamente, não exibindo mais a tela de erro.

** **

**Recurso: Componentes WebService**

**Situação:** O usuário informa que em algumas situações ao configurar o proxy,  os componentes de *WebService* não funcionam corretamente.

**Solução:** Foram realizadas alterações nos módulos CORE e WSCLIENT do ESB, para quando ocorrer a situação descrita acima, os componentes de *WebService* autentiquem corretamente com servidores proxy.


<!-- anchors: Release12.2.4-Implementações, Release12.2.4-fluigESBPlugin, Release12.2.4-Correções, Release12.2.4-fluigESBPlugin.1, Release12.2.4-fluig|ESBServer -->
