---
title: "Criando um aplicativo para enviar notificações"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=126714991"
scraped_at: "2026-03-09T03:49:15.996Z"
depth: 2
anchors: 9
child_links: 39
---

# Criando um aplicativo para enviar notificações

# Índice

# Objetivo

---

No TOTVS Fluig Plataforma é possível criar novas formas de envio de notificações para os usuários. Isto pode ser feito através de aplicativos que podem ser instalados no Fluig Plataforma. A partir daí o sistema utilizará o aplicativo para enviar notificações. Este guia visa orientar e mostrar passo-a-passo como criar, instalar e utilizar um aplicativo de envio de notificações no Fluig Plataforma.

# Projeto de exemplo

---

Para facilitar o entendimento e desenvolvimento de aplicativos, foi gerado um projeto de exemplo. Neste projeto, foi implementado um aplicativo que mostra no LOG a mensagem recebida. Para testá-lo, basta seguir os passos abaixo:

1. Baixar o projeto: [Clique aqui](/download/attachments/126714991/alert-sender-sample.zip?version=4&modificationDate=1416914490000&api=v2) (projeto "alert-sender-sample").
2. Compilar o projeto (é um projeto padrão maven, para compilar, executar "mvn clean install" na raíz do projeto)
3. Fazer *deploy *do arquivo "/alert-sender-sample-server/target/alert-sender-sample-server.ear" em um servidor com o Fluig instalado
4. Acessar a plataforma Fluig e gerar eventos que enviem notificações (ex. apoiar um post).Deverá aparecer no LOG do Fluig os dados do alerta.

Este projeto de exemplo pode servir de base para implementação de aplicativos reais de envio de notificações.

# Cadastro de aplicativos no Fluig Plataforma através da API de Notificações

---

Para que um aplicativo possa ser utilizado pelo TOTVS Fluig Plataforma para enviar notificações, este deve ser cadastrado na **Central de Notificações** do sistema. Para isto, é necessário postar uma mensagem em uma fila JMS. Abaixo um exemplo de código que realiza esta chamada, que pode ser encontrado em **alert-sender-sample/impl/src/main/java/com/fluig/StartupLoader.java**:

[?](#)

| `package` `com.fluig;``import` `java.util.HashMap;``import` `javax.annotation.PostConstruct;``import` `javax.ejb.Singleton;``import` `javax.ejb.Startup;``import` `javax.jms.JMSException;``import` `javax.jms.ObjectMessage;``import` `javax.jms.Queue;``import` `javax.jms.QueueConnection;``import` `javax.jms.QueueConnectionFactory;``import` `javax.jms.QueueSender;``import` `javax.jms.QueueSession;``import` `javax.naming.InitialContext;``import` `javax.naming.NamingException;``import` `org.slf4j.Logger;``import` `org.slf4j.LoggerFactory;``/**````* Registra o aplicatico como listener para os alertas.````*/``@Startup``@Singleton``public` `class` `StartupLoader {````private` `transient` `Logger log = LoggerFactory.getLogger(StartupLoader.``class``);````/*````* Nome da fila que será usada para receber os alertas.````*/````private` `static` `final` `String QUEUE =``"AlertSenderSampleQueue"``;````/**````* ID do tenante para o qual será registrado. Quando houver mais de um````* tenante, deverá fazer uma chamada para cada tenante.````*/````private` `static` `final` `Long TENANT_ID = 10097l;````@PostConstruct````private` `void` `startup() {````log.info(``"Inicializando aplicativo"``);````try` `{````InitialContext ic =``new` `InitialContext();````Queue q = (Queue) ic````.lookup(``"java:global/TOTVSTechAsyncQueue"``);````QueueConnectionFactory factory = (QueueConnectionFactory) ic````.lookup(``"java:global/FluigRemoteXAConnectionFactory"``);````QueueConnection connection = factory.createQueueConnection();````QueueSession session =``null``;````QueueSender sender =``null``;````try` `{````session = connection.createQueueSession(``false``,````javax.jms.Session.AUTO_ACKNOWLEDGE);````sender = session.createSender(q);````HashMap values =``new` `HashMap();````// Código do aplicativo.````values.put(``"applicationKey"``,``"alert.app.sender.sample"``);````// Chave da descrição do aplicativo.````values.put(``"descriptionKey"``,````"alert.app.sender.sample.description"``);````// ID do tenante.````values.put(``"tenantId"``, TENANT_ID);````ObjectMessage msg = session.createObjectMessage();````msg.setObject(values);````msg.setStringProperty(``"action"``,``"registerAlertAppSender"``);````sender.send(msg);````log.info(``"Inicialização do aplicativo OK"``);````}``finally` `{````if` `(sender !=``null``) {````sender.close();````}````if` `(session !=``null``) {````session.close();````}````if` `(connection !=``null``) {````connection.close();````}````}````}``catch` `(NamingException ex) {````log.error(``"Nao foi possivel registrar o serviço de notificação via whatsapp"``);````ex.printStackTrace();````}``catch` `(JMSException ex) {````log.error(``"Nao foi possivel registrar o serviço de notificação via whatsapp"``);````ex.printStackTrace();````}````}``}` |
| --- |

Os parâmetros necessários são:

1. **applicationKey:** É uma string que será o identificador único para o aplicativo. Através desta string a Central de Notificações fará todo o gerenciamento do aplicativo.
2. **descriptionKey:** É a descrição do aplicativo. Pode ser um texto plano ou uma chave para tradução (ex: app.my.application). Para que seja feita a tradução, a chave deve estar previamente cadastrada no módulo I18n, no bundle "foundation_alert". Caso seja inserido um texto plano, este será exibido sem tradução.
3. **tenantId:** O id do tenant onde o aplicativo será instalado.

Uma boa prática é fazer o cadastro do aplicativo no momento do *deploy* no servidor ou no momento da criação de um novo tenant. O projeto de exemplo já contém código com este comportamento.

# Configurações de envio de notificações por usuário

---

Quando um novo aplicativo for instalado na Central de Notificações, todos os usuários do tenant poderão configurar se desejam ou não receber notificações através do aplicativo. Isto pode ser feito na tela de configurações. Por padrão, ao instalar um novo aplicativo, todos os usuários do tenant passarão a receber notificações através daquele aplicativo. Abaixo o exemplo da tela de configurações depois de instalado o projeto de exemplo.

![](/download/attachments/126714991/configura%C3%A7%C3%A3o%20de%20notifica%C3%A7%C3%B5es.png?version=2&modificationDate=1393431563000&api=v2)

# Enviando notificação através do aplicativo

---

Para que a Central de Notificação do TOTVS Fluig Plataforma invoque o aplicativo para enviar notificações, o aplicativo deve obrigatoriamente criar um MDB que ouve a fila registrada. Abaixo temos um exemplo simples de MDB:

[?](#)

| `package` `com.fluig;``import` `java.io.Serializable;``import` `java.util.Map;``import` `javax.ejb.ActivationConfigProperty;``import` `javax.ejb.EJB;``import` `javax.ejb.MessageDriven;``import` `javax.ejb.TransactionAttribute;``import` `javax.ejb.TransactionAttributeType;``import` `javax.jms.JMSException;``import` `javax.jms.Message;``import` `javax.jms.MessageListener;``import` `javax.jms.ObjectMessage;``import` `org.slf4j.Logger;``import` `org.slf4j.LoggerFactory;``/**````* Esta é a classe que será chamada pela Central de Notificações para enviar````* alertas por este aplicativo.````*/``@MessageDriven``(name =``"topic/FluigNotificationTopic"``, mappedName =``"FluigNotificationTopic"``, activationConfig = {````@ActivationConfigProperty``(propertyName =``"acknowledgeMode"``, propertyValue =``"Auto-acknowledge"``),````@ActivationConfigProperty``(propertyName =``"destinationType"``, propertyValue =``"javax.jms.Topic"``),````@ActivationConfigProperty``(propertyName =``"destination"``, propertyValue =``"FluigNotificationTopic"``)``})``public` `class` `AlertSampleMDBBean``implements` `MessageListener {````private` `static` `final` `Logger log = LoggerFactory````.getLogger(AlertSampleMDBBean.``class``);````@EJB``(lookup = TxtSenderService.JNDI_REMOTE_NAME)````private` `TxtSenderService service;````@Override````@TransactionAttribute``(TransactionAttributeType.NOT_SUPPORTED)````public` `void` `onMessage(``final` `Message message) {````if` `(message``instanceof` `ObjectMessage) {````final` `ObjectMessage msg = (ObjectMessage) message;````try` `{````final` `Serializable obj = msg.getObject();````if` `(log.isDebugEnabled()) {````log.debug(``"AlertSenderSampleQueue.onMessage - obj: "` `+ obj);````}````service.sendAlert((Map) obj);````if` `(log.isDebugEnabled()) {````log.debug(``"AlertSenderSampleQueue.onMessage - FIM"``);````}````}``catch` `(``final` `JMSException ex) {````log.error(ex.getMessage(), ex);````}````}````}``}` |
| --- |

Quando o usuário receber um alerta, a Central de Notificações vai validar se aquele usuário está configurado para receber notificações por este aplicativo. Caso esteja, a Central postará uma mensagem na fila cadastrada para o aplicativo.

# Desabilitando aplicativos de envio de Notificações

---

É possível desabilitar qualquer aplicativo de envio, exceto a própria Central de Notificações da plataforma Fluig. Atualmente este serviço está disponível na [API Pública](https://api.fluig.com/) da plataforma Fluig. Uma vez desabilitado, o sistema não invocará mais o aplicativo para envio de notificações, e também não o exibirá mais na tela de configurações.


<!-- anchors: Criandoumaplicativoparaenviarnotificações-Índice, Criandoumaplicativoparaenviarnotificações-Objetivo, Criandoumaplicativoparaenviarnotificações-Projetodeexemplo, Criandoumaplicativoparaenviarnotificações-CadastrodeaplicativosnoFluigPlataformaatravésdaAPIdeNotificações, highlighter_110859, Criandoumaplicativoparaenviarnotificações-Configuraçõesdeenviodenotificaçõesporusuário, Criandoumaplicativoparaenviarnotificações-Enviandonotificaçãoatravésdoaplicativo, highlighter_513740, Criandoumaplicativoparaenviarnotificações-DesabilitandoaplicativosdeenviodeNotificações -->
