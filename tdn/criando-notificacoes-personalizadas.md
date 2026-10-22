---
title: "Criando notificações personalizadas"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=126715128"
scraped_at: "2026-03-09T03:03:27.312Z"
depth: 1
anchors: 23
child_links: 46
---

# Criando notificações personalizadas

# Índice

# Objetivo

---

Além das notificações padrões da plataforma é possível criar novos tipos de notificações personalizadas através da API de Notificações do produto.

É possível criar aplicativos, *widgets* etc., que criem e enviem notificações personalizadas, além de fazer este processo através de aplicações externas, utilizando a API Pública da plataforma Fluig.

Este tutorial tem o objetivo de mostrar passo a passo como criar um aplicativo que cria uma notificação customizada e envia para os usuários da empresa (*tenant*). Para fazer este mesmo processo através da API Pública da plataforma Fluig, consulte a documentação [clicando aqui](https://api.fluig.com). As notificações enviadas pelo aplicativo são exibidas tanto na *web*, como nos dispositivos móveis. 

Fique atento

As notificações da plataforma possuem uma limitação de **até 600** caracteres.

# Projeto de exemplo

---

Para facilitar o entendimento e desenvolvimento deste tutorial, foi gerado um projeto de exemplo. Neste projeto, foi implementado um aplicativo que cria uma notificação customizada, simulando um aviso do RH Online: "Seu holerite já está disponível".

Lembrando que este projeto é apenas um exemplo, não tendo sido implementada nenhuma integração real com o sistema RH Online.

Para testar o projeto, realizar os seguintes passos:

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)

 - Para fazer o *download* da pasta, acesse a página do**git.fluig.com** clicando no repositório **Componentes**, no arquivo **notifications** utilize o exemplo "**alert-creator-sample**".

  - Após obter o projeto, é necessário fazer a compilação.

  - O projeto utiliza o padrão [Maven](http://maven.apache.org/), portanto para compilar execute "*mvn clean install*" na raiz do projeto.

  - Serão gerados os componentes alert-creator-sample-server.ear e holeritweb.rar.

 - Para fazer o *deploy* dos componentes gerados, pare o serviço do Fluig e copie ambos os arquivos na pasta [Instalação do fluig]/appserver/apps. Em seguida, inicie novamente o fluig.

 - A partir de agora, o sistema deverá gerar um novo tipo de alerta. É possível verificar que o evento foi criado corretamente através da tela de [configuração de notificações](https://tdn.totvs.com/x/MIL5DQ).

 - Será apresentado um novo agrupamento, chamado **Notificações do RH**, com um novo tipo de notificação, conforme imagem a seguir:

![](/download/attachments/126715128/config_notifica%C3%A7%C3%A3o_1.6.png?version=1&modificationDate=1491846608000&api=v2)

 - Após a instalação do componente, o sistema enviará de 2 em 2 minutos uma notificação *fake* informando o usuário que o holerit está disponível no RH Online, conforme a imagem a seguir:

![](/download/attachments/126715128/alerta_1.6.png?version=1&modificationDate=1491847137000&api=v2)

É recomendada a leitura de todo este material, mesmo que o desenvolvedor utilize o projeto de exemplo como base. Este tutorial apresenta conceitos importantes para trabalhar corretamente com notificações dentro do TOTVS Fluig Plataforma.

# Entendendo os conceitos para criação de notificações personalizadas

---

### Módulos de Notificações

Os módulos de notificação são apenas agrupadores, para que as notificações semelhantes se apresentem agrupadas para o usuário.

Os módulos padrão do TOTVS Fuig Plataforma são:

**Colaboração:** notificações de apoiar, comentar, etc.

**Documentos:** notificações de indicação de leitura, atualização de versão, etc.

**Processos:** notificações de movimentação de processo, tarefas atrasadas, etc.

**Portal:** notificações de alteração no *layout* de páginas, etc.

É possível criar novos módulos de notificações. No projeto exemplo, é criado um novo módulo chamado "Notificações de RH".

### Eventos de Notificações

Antes de criar notificações personalizadas, é importante que fique claro o conceito de "Eventos de Notificações". Um evento é uma representação de alguma ação que pode gerar notificações na platafdorma Fluig. O evento contém todas as configurações das notificações.

Por exemplo, o evento de notificação "LIKE" possui o formato padrão de todas as notificações do tipo:

- Fulano curtiu o post
- Olha que post bacana...

Através do evento o usuário pode configurar o recebimento de notificações. Por exemplo: é possível configurar o recebimento das notificações do tipo "SHARE" por *e-mail*, as notificações do tipo "LIKE" apenas pela Central de Notificações da plataforma Fluig, e não receber nenhuma notificação do tipo "FOLLOW_REQUEST_ACCEPTED".

Para configurar este recebimento, o usuário deve acessar a tela de [configurações de notificações](https://tdn.totvs.com/x/iPTuDQ):

![](/download/attachments/126715128/config_notifica%C3%A7%C3%A3o_user_1.6.png?version=1&modificationDate=1491847449000&api=v2)

Para criar notificações personalizadas, é necessário criar novos eventos de notificações. No projeto exemplo, é criado um novo evento chamado "Holerit disponível no RH online".

### Atributos de Eventos de Notificações

Como dito anteriormente, um evento contém as configurações das notificações. Estas configurações são:

- **Requerido: **Indica se o usuário pode deixar de receber as notificações relacionadas ao evento. Se o evento for requerido, o usuário deverá obrigatoriamente receber as notificações referentes a ele. Um exemplo de notificação obrigatória é a solicitação de participação em uma comunidade. Obrigatoriamente o moderador da comunidade deve receber todos os pedidos de participação.

- **Agrupado:** Indica se as notificações daquele evento são agrupadas por objeto. Caso a notificação seja agrupada, o sistema irá exibir assim: "Fulano, Beltrano, Ciclano e mais 5 pessoas apoiaram o post 'Post do Fulano de Tal...'". Caso a notificação não seja agrupada, o sistema gerará uma notificação nova para cada vez que uma ação for gerada sobre um objeto. Observação: Notificações agrupadas não podem ter ações associadas.

- **Pode ser removido:** Indica se a notificação pode ser removida pelo usuário. Caso não possa, o sistema não deixará o usuário remover a notificação, até que seja executada alguma das ações disponibilizadas.

- **Remove após executar uma ação:** Se configurada desta forma, após realizar alguma ação, o sistema excluirá automaticamente a notificação. Caso contrário, o sistema exibirá a notificação com uma mensagem informando a ação já executada. Por exemplo: "Fulano quer seguir você. (Você já aceitou esta requisição)". O sistema então permitirá que o usuário remova aquela notificação.

- **Apenas para administradores:** Indica se aquele tipo de notificação é exclusivo para administradores da empresa (*tenant*).

### Notificações

As notificações devem ser criadas obrigatoriamente com um evento associado. Desta forma a [Central de Notificações](https://tdn.totvs.com/x/OPDuDQ) poderá fazer o gerenciamento de criação, envio e exibição da notificação. As notificações criadas contém alguns objetos associados, que são:

- **Usuários que enviaram a notificação:** Uma notificação pode ter nenhum, um ou vários usuários que enviaram a notificação. Na criação da notificação pode ser informado nenhum ou um usuário que está enviando. Caso a notificação seja agrupada, a Central de Notificações fará o agrupamento automaticamente.

- **Objeto associado:** Uma notificação pode ter ou não um objeto associado. O objeto pode ser um post, um documento, ou qualquer objeto existente dentro ou fora do sistema. Na criação da notificação pode ser informado ou não um objeto associado.

- **Lugar onde foi gerada:** Uma notificação pode conter ou não a informação de onde ela foi gerada. Um lugar pode ser uma comunidade, um processo, ou qualquer lugar existente dentro ou fora do sistema. Na criação da notificação pode ser informado ou não um lugar associado.

- **Ações:** São as ações disponibilizadas por uma notificação. Confira a seguir uma documentação detalhada.

- **Metadados:** São dados do tipo chave-valor que podem ser associados à notificação. Eles podem ser utilizados por aplicativos customizados de envio de notificações.

### Ações de Notificações

Uma notificação pode disponibilizar uma ou mais ações. Estas ações são informadas no momento da criação da notificação. As ações são individuais por notificação, não sendo associadas ao evento relacionado à ela. As ações possuem os seguintes atributos:

- **Tipo de integração:** Indica o tipo de integração que será utilizado para executar aquela ação. Atualmente a plataforma Fluig suporta três tipos de integrações:**JMS:**Ao executar aquela ação o sistema irá disparar uma mensagem JMS com os dados da ação. A mensagem JMS disparada é do tipo "EXECUTE_ALERT_ACTION_EVENT". Cabe ao desenvolvedor implementar uma rotina que se conecte ao tópico "TOTVSTechIntegrationListenerTopic", ouça estas mensagens e execute efetivamente as ações.
- **HTTP:**Ao executar aquela ação, o sistema fará uma chamada HTTP a uma URL cadastrada no momento da criação da notificação. Os métodos HTTP suportados atualmente são GET e POST. Cabe ao desenvolvedor disponibilizar um serviço que responda naquela URL e execute efetivamente a ação.
- **NONE:**Ao executar aquela ação o sistema a marcará como executada, mas não realizará nenhuma ação.

- **Tipo:**Existem atualmente dois tipos de ações:**MAIN:**É a ação principal. O sistema exibirá na Central de Notificações esta ação como ação de destaque.
- **DEFAULT:**É uma ação padrão. O sistema exibirá como ação comum, sem destaque.

# Utilizando a API de Notificações para criar eventos customizados

---

Existem duas formas de utilização da API de Notificações do TOTVS Fluig Plataforma: através do módulo interno do Fluig "foundation-alert-api" e através da [API Pública](https://api.fluig.com). Este tutorial contém um exemplo utilizando o módulo "foundation-alert-api". Para mais informações sobre a API Pública, [clique aqui](https://api.fluig.com).

Para criação de um aplicativo interno à plataforma Fluig que utilize a API de Notificações, é necessário criar um projeto Java (padrão Maven) e adicionar o seguinte trecho de código no arquivo "pom.xml":

[?](#)

| `````com.fluig````foundation-alert-api````1.2.0````compile``` |
| --- |

### Cadastrando módulos de Notificações

Para criação de um novo módulo de notificações, é necessário realizar uma chamada ao método **registerModule**, da interface **com.totvs.technology.foundation.alert.service.AlertModuleService**. Um exemplo de chamada deste método segue abaixo:

[?](#)

| `@Singleton``(mappedName =``"MyModuleRegister"``, name =``"MyModuleRegister"``)``public` `class` `ModuleRegister {` ```@EJB``(lookup = AlertModuleService.JNDI_REMOTE_NAME)````private` `AlertModuleService alertModuleService;`  ```public` `void` `registerModule() {``` ```/*````* Cria um novo módulo de notificações. Os módulos padrão do Fluig são:````* 1. DOCUMENT````* 2. PROCESSES````* 3. PORTAL````* 4. COLABORATION````*````* Caso o novo evento de notificações se encaixe em um destes módulos,````* não é necessário criar um novo.````*/````final` `AlertModuleVO myModule = alertModuleService.registerModule(````"RH_MODULE"``,``"Notificações do RH"``, myTenantId);``` ```}``}` |
| --- |

Os parâmetros para execução do método são:

1. moduleKey: Chave única de identificação do módulo
2. description: É a descrição do módulo. Pode ser um texto plano ou uma chave para tradução. Para que a tradução funcione, a chave deve estar previamente cadastrada no serviço I18n, no bundle "foundation_alert".
3. tenantId: Id do tenant para qual o módulo está sendo criado.

### Cadastrando eventos de Notificações

Para criação de um novo evento de notificações, é necessário realizar uma chamada ao método "createEvent", da interface "com.totvs.technology.foundation.alert.service.AlertEventService". Um exemplo de chamada deste método segue abaixo:

[?](#)

| `@Singleton``(mappedName =``"MyEventRegister"``, name =``"MyEventRegister"``)``public` `class` `EventRegister {``` ```@EJB``(lookup = AlertEventService.JNDI_REMOTE_NAME)````private` `AlertEventService alertEventService;```  ```public` `void` `registerEvent() {``` ```alertEventService.createEvent(````"MY_EVENT"``,````Boolean.FALSE,````"Meu evento customizado"``,````"criou"``,````"criaram"``,````"/myapp/myimg.jpg"``,````myModule.getId(),````Boolean.TRUE,````Boolean.TRUE,````Boolean.FALSE,````Boolean.FALSE,````tenantId);``` ```}``}` |
| --- |

Os parâmetros para execução do método são:

1. **eventKey -** String única que representa o evento no Fluig.
2. **required -** Indica se o evento é requerido. Caso seja, o usuário não conseguirá configurar para não receber notificações do evento.
3. **descriptionKey -** Descrição do evento. Pode ser um texto plano ou uma chave para obter descrição traduzida no I18n. Caso queira utilizar a tradução, a chave deve estar previamente cadastrada no I18n, no *bundle* "foundation_alert".
4. **singleDescriptionKey -** Descrição da ação feita por um usuário. Pode ser um texto plano ou uma chave para obter descrição traduzida no I18n. Caso queira utilizar a tradução, a chave deve estar previamente cadastrada no I18n, no *bundle* "foundation_alert".
5. **groupDescriptionKey -** Descrição da ação feita por por vários usuários. Pode ser um texto plano ou uma chave para obter a descrição traduzida no I18n. Caso queira utilizar a tradução, a chave deve estar previamente cadastrada no I18n, no *bundle* "foundation_alert".
6. **eventIcon -** Ícone que representa o evento (opcional). Este ícone será exibido pelo sistema em notificações que não tenham um usuário que a enviou. Caso tenha um usuário "enviador", o sistema exibirá a foto deste usuário. Caso haja mais de um usuário "enviador", o sistema mostrará a foto do último usuário que enviou a notificação.
7. **moduleId -** Módulo ao qual pertence este evento
8. **grouped -** Indica se a notificação pode ser agrupada por ação e objeto.
9. **canRemove -** Indica se a notificação pode ser removida.
10. **removeAfterExecAction -** Indica se a notificação é removida após ser executada uma ação.
11. **onlyAdmin -** Indica se o evento é válido somente para usuários administradores.
12. **tenantId -** Empresa*(tenant*) para a qual o evento está sendo cadastrado.

### Enviando Notificações

Para enviar uma notificação é necessário realizar uma chamada ao método "sendNotification", da interface "com.totvs.technology.foundation.alert.service.AlertService". Um exemplo de chamada deste método segue abaixo:

[?](#)

| `@Stateless``(name =``"AlertCreator"``, mappedName =``"AlertCreator"``)``public` `class` `AlertCreator {``` ```@EJB``(lookup = AlertService.JNDI_REMOTE_NAME)````private` `AlertService alertService;``` ```public` `void` `sendHoleritAlert() {``` ```alertService.sendNotification(``"MY_EVENT"``, loginUserThatSendsTheNotification, loginUserThatIsGoingToReceiveTheNotification, objectAttached, placeWhereTheEventOccurs, actions, metadata);``` ```}``}` |
| --- |

Os parâmetros para execução do método são:

1. **eventKey -** Chave do evento cadastrado para envio de notificações.
2. **loginSender -** login do usuário que envia a notificação. (opcional)
3. **loginReceiver -** login do usuário que irá receber a notificação.
4. **object -** objeto associado à notificação (opcional) - implementação padrão para a interface "AlertObject" é a classe "com.totvs.technology.foundation.alert.GenericAlertObject", da API de Notificações do Fluig.
5. **place -** lugar onde a notificação foi gerada (opcional) - objeto e lugar são tratados com a mesma estrutura de dados - implementação padrão para a interface "AlertObject" é a classe "com.totvs.technology.foundation.alert.GenericAlertObject", da API de Notificações do Fluig.
6. **actions -** ações disponibilizadas pela notificação (opcional) -  implementação padrão para a interface "AlertAction" é a classe "com.totvs.technology.foundation.alert.GenericAlertAction", da API de Notificações do Fluig.
7. **metadata -** metadados da notificação (opcional).

### Desabilitando eventos de Notificações

É possível desabilitar qualquer evento de notificações. Atualmente este serviço está disponível na [API Pública](https://api.fluig.com) da plataforma Fluig. Uma vez desabilitado, o sistema não gerará mais nenhuma notificação para aquele tipo de evento, e também não o exibirá mais na tela de configurações.

Atenção

Obrigatoriamente o valor informado deve ser um formulário. Outros tipos de documentos não serão tratados e ocorrerá erro na execução do evento.


<!-- anchors: Criandonotificaçõespersonalizadas-Índice, Criandonotificaçõespersonalizadas-Objetivo, Criandonotificaçõespersonalizadas-Projetodeexemplo, samples, samples-1, samples-2, samples-3, samples-4, Criandonotificaçõespersonalizadas-Entendendoosconceitosparacriaçãodenotificaçõespersonalizadas, Criandonotificaçõespersonalizadas-MódulosdeNotificações, Criandonotificaçõespersonalizadas-EventosdeNotificações, Criandonotificaçõespersonalizadas-AtributosdeEventosdeNotificações, Criandonotificaçõespersonalizadas-Notificações, Criandonotificaçõespersonalizadas-AçõesdeNotificações, Criandonotificaçõespersonalizadas-UtilizandoaAPIdeNotificaçõesparacriareventoscustomizados, highlighter_362262, Criandonotificaçõespersonalizadas-CadastrandomódulosdeNotificações, highlighter_840218, Criandonotificaçõespersonalizadas-CadastrandoeventosdeNotificações, highlighter_290197, Criandonotificaçõespersonalizadas-EnviandoNotificações, highlighter_914906, Criandonotificaçõespersonalizadas-DesabilitandoeventosdeNotificações -->
