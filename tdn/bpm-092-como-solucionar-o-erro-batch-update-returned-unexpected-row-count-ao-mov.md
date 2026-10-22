---
title: "BPM 092 - Como solucionar o erro \"Batch update returned unexpected row count\" ao movimentar solicitação?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=258835397"
scraped_at: "2026-03-09T03:57:42.751Z"
depth: 2
anchors: 10
child_links: 132
---

# BPM 092 - Como solucionar o erro "Batch update returned unexpected row count" ao movimentar solicitação?

# Índice

# Plataforma

**Produto:**fluig

# Ocorrência

Ao movimentar uma solicitação, o erro "*Batch update returned unexpected row count from update [0]; actual row count: 0; expected: 1*" é exibido em tela. Essa mensagem impede que a atividade seja movimentada.

![](/plugins/servlet/confluence/placeholder/unknown-attachment?locale=en_US&version=2)

# Causa

A causa desse erro ainda não foi identificada. Cada situação precisa ser analisada individualmente para que a equipe de manutenção providencie uma correção pontual.

# Solução

Se o erro acontecer na atualização 1.5.6 ou anteriores é necessário atualizar o fluig para uma versão mais nova disponível no Portal de Clientes. A partir da versão 1.5.7-EP5 foi criado um log em nível de *debug* para percorrer a sessão em busca de objetos que não foram feitos o *flush*.

- [fluig 1.5.13 ou inferior](#)
- [fluig 1.6.0 ou superior](#)

Para isso, é preciso adicionar a seguinte classe no *debug* do servidor de aplicação com.datasul.technology.webdesk.workflow.business.BatchUpdateLogger

Com o serviço do fluig parado realize os passos abaixo:

 - Editar o arquvo **standalone.xml** disponível em <instalacao_fluig>\jboss\standalone\configuration;

 - Procurar pela tag **<root-logger>**;

 - Adicionar este código logo acima da tag **<root-logger>**;

[?](#)

| `````` |
| --- |

 - Iniciar o serviço do fluig novamente e simular o erro. 

Quando o erro acontecer novamente, abra um chamado para o suporte fluig e envie o arquivo **server.log** e o arquivo **chrono.log** (ambos em <instalacao_fluig>\jboss\standalone\log) para análise.

Para isso, é preciso adicionar a seguinte classe no *debug* do Servidor de Aplicação Wildfly: com.datasul.technology.webdesk.workflow.business.BatchUpdateLogger

Com o serviço do fluig parado realize os passos abaixo:

 - Editar o arquvo **domain.xml** disponível em <instalacao_fluig>\appserver\domain\configuration;

 - Procurar pela tag **<root-logger>**;

 - Adicionar este código logo acima da tag **<root-logger>**;

[?](#)

| `````` |
| --- |

 - Iniciar o serviço do fluig novamente e simular o erro. 

Quando o erro acontecer novamente, abra um chamado para o suporte fluig e envie o arquivo **server.log** e o arquivo **chrono.log** (ambos em <instalacao_fluig>\appserver\domain\servers\<server-fluig>\log) para análise.


<!-- anchors: BPM092Comosolucionaroerro"Batchupdatereturnedunexpectedrowcount"aomovimentarsolicitação?-Índice, BPM092Comosolucionaroerro"Batchupdatereturnedunexpectedrowcount"aomovimentarsolicitação?-Plataforma, BPM092Comosolucionaroerro"Batchupdatereturnedunexpectedrowcount"aomovimentarsolicitação?-Ocorrência, BPM092Comosolucionaroerro"Batchupdatereturnedunexpectedrowcount"aomovimentarsolicitação?-Causa, BPM092Comosolucionaroerro"Batchupdatereturnedunexpectedrowcount"aomovimentarsolicitação?-Solução, samples, samples-1, highlighter_686459, samples-2, highlighter_350774 -->
