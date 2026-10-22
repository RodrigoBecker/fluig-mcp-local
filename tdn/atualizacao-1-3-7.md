---
title: "Atualização 1.3.7"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=161350377"
scraped_at: "2026-03-09T03:19:16.813Z"
depth: 2
anchors: 6
child_links: 37
---

# Atualização 1.3.7

Confira abaixo as novidades na atualização 1.3.7 do Fluig:

# BPM

**Processos com mais rastreabilidade**

As informações das solicitações estão mais completas. No histórico de solicitações, dentro da consulta da solicitação, é possível saber o que aconteceu nos subprocessos e se possui alguma observação. 

![](/download/attachments/161350377/SOCIALECMSUST-2874.png?version=1&modificationDate=1411070336000&api=v2)

**Novo componente BPMN 2.0 - Tarefa de Usuário**

Agora seus diagramas estão mais ricos, defina claramente que atividades serão executadas por pessoas (*user tasks*) usando o padrão definido na notação BPMN. 

![](/download/attachments/161350377/SOCIALECMSUST-2585.jpg?version=2&modificationDate=1411396912000&api=v2)

**Movimentação de processos com mais integridade**

Foi aprimorada a movimentação de processos para garantir a integridade do fluxo e das informações referentes a eles. Agora não é permitido enviar o fluxo diretamente de um *fork* para um *join*.

![](/download/attachments/161350377/SOCIALECMSUST-2674.png?version=1&modificationDate=1410964328000&api=v2)

****

**Utilização de datasets aperfeiçoada e mais íntegra**

A  utilização de *datasets* está mais eficiente a partir dessa atualização:

- a consulta está mais íntegra quando são utilizadas *constraints* no SQL *Server;*
- *zoom* de *datasets* internos está mais completo.

**Retorno de datas mais preciso em formulários**

Foram aprimoradas as regras de formatação de data, tornando-as mais precisas nos retornos em formulários.

**Movimentação em blocos melhorada**

A movimentação de solicitações em blocos quando elas possuem formulários ou validações está mais eficiente.

![](/download/attachments/161350377/SOCIALECMSUST-2702.png?version=1&modificationDate=1411045694000&api=v2)

****

**Encontrar tarefas está mais rápido**

A busca de tarefas está mais ágil. Agora o Fluig permite alternar a visualização entre as tarefas em *pool* na central de tarefas, proporcionando mais agilidade para encontrá-las.

![](/download/attachments/161350377/SOCIALECMSUST-2904.png?version=1&modificationDate=1411127156000&api=v2)

****

**Mais precisão no dataset de anexos**

Fizemos com que o *dataset* de anexos *"processAttachment*" apresente em qual movimentação da tarefa foi incluído anexo em processos que possuem fluxo de retorno.

Nota

Informações adicionais podem ser obtidas em [Customização de *Datasets*](/display/fluig/Desenvolvimento+de+Datasets).

**Mais qualidade na exportação de processos**

A exportação da documentação ou da imagem do processo conta com mais qualidade, gerando os artefatos desejados com maior precisão.

Nota

Agora é necessário salvar o diagrama antes de efetuar a exportação para garantir a qualidade dos artefatos.

** **

**Método aperfeiçoado** 

O método "*setCardValue"* foi aprimorado, garantindo o correto funcionamento independente da forma de armazenamento dos formulários.

# Social

**Inclusão de usuários em comunidades**

Aumentamos a confiabilidade no processo de inclusão de usuários em comunidades quando essas e os participantes estão na mesma nuvem de acesso.

![](/download/attachments/161350377/SOCIALECMSUST-2870.png?version=1&modificationDate=1411128316000&api=v2)

# Arquitetura

**Conversão de base ECM/Fluig mais segura**

Foi aperfeiçoada a conatualização de base do ECM para o Fluig para aceitar caracteres especiais, aumentando a abrangência e, também, validando caracteres inválidos.

**Atualização mais simples**

A partir dessa atualização, o instalador durante a atualização detecta e mantém as configurações de portas utilizadas previamente. A configuração das portas *Realtime* e *Chat*agora não são perdidas durante a atualização.

**Criação de empresas com mais integridade**

O procedimento de criação de empresas está mais íntegro. Quando o *Identity* está habilitado, os procedimentos corretos para a criação de empresas são:

- Nova empresa no Fluig:

1. Solicite a criação do contexto no *Identity*;
2. Crie a empresa no Fluig;
3. Configure a integração entre o contexto do *Identity* e a empresa do Fluig.

- Empresa já existente no Fluig:

1. Crie a empresa no *Identity;*
2. Integre com a empresa do Fluig;
3. Envie os usuários do Fluig para o *Identity*.

Nota

Mais informações podem ser obtidas em [Integração do Fluig com o*Identity*](https://tdn.totvs.com/x/Tx1bB)*.*

# WCM

**Mensagens de eventos mais claras e objetivas**

As mensagens de validação de eventos existentes no Fluig foram aprimoradas, tornando-se mais claras e objetivas para facilitar o entendimento do usuário.

**Widget Editor de Conteúdo - Link Popup**

A *widget* Editor de Conteúdos agora permite configurar *links* para abrirem o conteúdo em uma janela *popup*.

![](/download/attachments/161350377/SOCIALECMSUST-2772.png?version=1&modificationDate=1411126839000&api=v2)

# Fluig Studio

**Cliente de Webservices mais customizado**

Agora é possível alterar algumas configurações do cliente *Webservices* utilizado para fazer requisições aos serviços cadastrados no Fluig.

Nota

Mais informações sobre o funcionamento podem ser obtidas em [Integração com Aplicativos Externos](https://tdn.totvs.com/x/lCVbB), no item **Webservice com Client Customizado**.

**Cadastro de Webservices independente de servidor**

Para facilitar a utilização do mesmo código fonte em servidores de teste e produção, agora é possível especificar o nome dos pacotes inseridos. Recomenda-se, ao cadastrar um serviço no Fluig Studio, colocar um *package* igual para todos os servidores.

![](/download/attachments/161350377/SOCIALECMSUST-2567.jpg?version=1&modificationDate=1411386398000&api=v2)

# Mobile

**Listagem de comunidades aprimorada**

Foi aperfeiçoada a apresentação de comunidades para que sejam apresentadas as comunidades ocultas em que o usuário participa no Fluig Mobile.

**Formulário mais confiável**

Agora o registro do formulário é exibido em mais situações na movimentação de processos.

Também foi aprimorada a integração entre o movimento de solicitações Web x Mobile quando elas possuem formulários pai x filho, tornando o procedimento mais eficiente.

****


<!-- anchors: Atualização1.3.7-BPM, Atualização1.3.7-Social, Atualização1.3.7-Arquitetura, Atualização1.3.7-WCM, Atualização1.3.7-FluigStudio, Atualização1.3.7-Mobile -->
