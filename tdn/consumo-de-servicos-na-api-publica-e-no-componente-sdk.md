---
title: "Consumo de serviços na API pública e no componente SDK"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=198934765"
scraped_at: "2026-03-09T04:21:36.378Z"
depth: 3
anchors: 28
child_links: 63
---

# Consumo de serviços na API pública e no componente SDK

Atenção

Esta página foi revisada para considerar as novas configurações de server do fluig para a atualização 1.6.

Caso possua uma atualização anterior do fluig escolha a aba da versão 1.5.13 e anteriores nesta página.

# Índice

# Objetivo

---

Para utilizar os recursos do componente SDK, existem alguns pré-requisitos e exigências a serem seguidos, como:

- Esta documentação é destinada ao desenvolvedor cliente e parceiro do fluig que deseja consumir interna e externamente os recursos disponíveis na API Pública e no componente SDK.

- As operações na API Pública estão disponíveis através de chamadas REST, que são consumidas via HTTP.

- As operações no componente SDK estão disponíveis após configuração do **fluig-sdk-api** no **classpath** da aplicação dessa forma, através de um **ServiceLocator**, é realizada a chamada ao serviço desejado. 

# Consumindo um serviço na API pública

---

Para utilizar um serviço da API Pública, deve ser utilizado o **protocolo OAuth** de autenticação, que através das chaves **Consumer Key**, **Consumer Secret**, configurados no **OAuth App** é gerado através do **OAuth Provider** com um novo **Token Access** e um **Token Secret**.

- O **client** deve ser desenvolvido para suportar autenticação **OAuth 1.0a**.

## Consumindo um serviço do componente SDK a partir de eventos de JavaScript

---

Eventos de Workflow e Eventos de Personalização Social

Este recurso está disponível para eventos javascript de Workflow (que podem ser encontrados [aqui](https://tdn.totvs.com/display/fluig/Desenvolvimento+de+Workflow)) e também para Eventos Sociais (que podem ser encontrados [aqui](/display/fluig/Eventos+Sociais)).

## Exemplos para utilização do componente SDK via eventos de JavaScript

---

**Exemplo 1**

[?](#)

| `function beforeTaskCreate(colleagueId){````log.info(fluigAPI.getUserService().getCurrent());``}` |
| --- |

****

**Exemplo 2 **

[?](#)

| `function beforeStateEntry(sequenceId) {````if` `(sequenceId ==``4``) {````var groupService = fluigAPI.getGroupService();``` ```var cardData = hAPI.getCardData(getValue(``"WKNumProces"``));````var groupId = hAPI.getCardValue(``"groupId"``);````var users =``new` `java.util.ArrayList();``` ```var it = cardData.keySet().iterator();````while``(it.hasNext()) {````var field = it.next();````if` `(field.startsWith(``"userName__"``)) {````var user = cardData.get(field);````if` `(!groupService.containsUser(groupId, user)) {````users.add(user);````}````}````}````if` `(!users.isEmpty()) {````groupService.addUsers(groupId, users);````}````}``}` |
| --- |

Observação

Veja também o [exemplo de uma aplicação web utilizando o fluig SDK](https://git.fluig.com/projects/SAMPLES/repos/componentes/browse/web-sdk) através do artefato**web-sdk**. Diponível no**git.fluig**.

****

# Consumindo um serviço no componente SDK

---

Para utilizar o recursos do componente SDK, existem alguns pré-requisitos e exigências a serem seguidos, como:

- Incluir as configurações do servidor do nexus no Maven para realizar o *download* de artefatos de dependência.Importante! Para que as dependências sejam baixadas corretamente, é necessário fazer a autenticação no Nexus. Para isso, basta solicitar as credenciais de acesso ao Nexus para o time de Atendimento Fluig. [Clique aqui](/pages/viewpage.action?pageId=870389961) e saiba como solicitar e utilizar as credenciais.

**settings.xml**

[?](#)

| ``````xmlns:xsi``=``"http://www.w3.org/2001/XMLSchema-instance"````xsi:schemaLocation``=``"http://maven.apache.org/SETTINGS/1.0.0 http://maven.apache.org/xsd/settings-1.0.0.xsd"``>````````````nexus````inserir_o_usuário_fornecido````inserir_a_senha_fornecida````````````````````nexus````*````Fluig Nexus Repository.````http://nexus.fluig.com/content/groups/public``````````` |
| --- |

- Configurar o componente **fluig-sdk-api** no **classpath**.
- No caso de criação de um novo projeto WEB ou Widget, seguir o seguinte padrão de projeto Maven** fluigsdk.sample**.
- O novo projeto Maven deve ter por padrão as seguintes configurações no **pom.xml**:

- [fluig 1.6](#)
- [fluig 1.5.13](#)

  **pom.xml**

[?](#)

| ````xsi:schemaLocation``=``"http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd"``>``` ```````````````com.fluig````fluig-sdk-bom````1.6.0````pom````import````````````````````````com.fluig````fluig-sdk-api````````````com.fluig````fluig-sdk-common````````````javax````javaee-api````provided````````````````fluigsdk.sample````````````org.apache.maven.plugins````maven-war-plugin````2.2````````true````false````````````org.slf4j, com.fluig.api, com.fluig.api.common``````````````````````````` |
| --- |

  **pom.xml**

[?](#)

| ````xsi:schemaLocation``=``"http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd"``>``` ```````````````com.fluig````fluig-sdk-bom````1.5.0````pom````import````````````````````````com.fluig````foundation-security-authentication-saml````compile````````````com.fluig````fluig-sdk-api````````````com.fluig````fluig-sdk-common````````````javax````javaee-api````provided````````````````fluigsdk.sample````````````org.apache.maven.plugins````maven-war-plugin````2.2````````true````false````````````org.slf4j, com.fluig.api, com.fluig.api.common``````````````````````````` |
| --- |

- Se atentar para as configurações**padrão de autenticação** e **security-role** localizadas no** jboss-web.xml** e **web.xml **conforme abaixo:

- [fluig 1.6](#)
- [fluig 1.5.13](#)

  **jboss-web.xml**

[?](#)

| ```````/sample````false````TOTVSTech````````user````totvstech````````````totvstech````totvstech````````````sysadmin````wcmadmin````````````admin````wcmadmin``````` |
| --- |

  **jboss-web.xml**

[?](#)

| ```````/sample````false````TOTVSTech````````user````totvstech````````````totvstech````totvstech````````````sysadmin````wcmadmin````````````admin````wcmadmin````````````com.totvs.technology.auth.saml.TOTVSAuthenticatorValve``````` |
| --- |

- No arquivo**web.xml:**

- [fluig 1.6](#)
- [fluig 1.5.13](#)

  **web.xml**

[?](#)

| `````REST````````REST````REST````/api/rest/*````````````REST````user````````````````FORM,FLUIGAUTH````TOTVSTech````````/login.jsp````/loginfail.jsp``````````` ```````totvstech````````````user````````````sysadmin````` |
| --- |

  **web.xml**

[?](#)

| `````totvstech````````````user````````````sysadmin````` |
| --- |

- Realizar **lookup** do serviço via **ServiceLocator**. Seguir padrão da **Super Classe fluigAPI**.

## Serviços disponíveis no componente SDK

---

- [ArticleService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/ArticleService.html)
- [CardIndexService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/CardIndexService.html)
- [CardService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/CardService.html)
- [CollaborationSDKService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/CollaborationSDKService.html)
- [CommunityService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/CommunityService.html)
- [ContentFilesService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/ContentFilesService.html)
- [DocumentService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/DocumentService.html)
- [FavoritesService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/FavoritesService.html)
- [FolderDocumentService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/FolderDocumentService.html)
- [GlobalParameterService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/GlobalParameterService.html)
- [GroupService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/GroupService.html)
- [I18NService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/I18NService.html)
- [PageService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/PageService.html)
- [PostService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/PostService.html)
- [SecurityService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/SecurityService.html)
- [SocialBreadcrumbService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/SocialBreadcrumbService.html)
- [TasksService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/TasksService.html)
- [TenantService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/TenantService.html)
- [UserService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/UserService.html)
- [WorkflowService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html)

## Exemplo para Instanciar Serviço do SDK

---

Veja a seguir o exemplo para a chamado ao serviço no SDK:

[?](#)

| `private` `UserService getUserServiceSDK()``throws` `SDKException {````return` `new` `FluigAPI().getUserService();``}` |
| --- |

# Auto completar eventos da fluigAPI

---

Este serviço permite visualizar no **Studio** uma lista com todos os métodos disponíveis no **fluigAPI**. Digitando "**fluigAPI.**" e em seguida apertando o atalho **CTRL + Espaço**, a lista de métodos será apresentada.

Por exemplo, ao usar um método com retorno, **fluigAPI.getWorkflowService()** o usuário poderá listar os métodos deste retorno, como **fluigAPI.getWorkflowService().createObervation()**.

Também é possível criar facilmente os objetos que são utilizados nos métodos.

Para isso, basta digitar, por exemplo, **new ProcessObservationVO** e acionar **CTRL + Espaço** que o plugin irá alterar o trecho automaticamente para **new com.fluig.sdk.api.workflow.ProcessObservationVO();**

![](/download/attachments/198934765/fluigAPI.png?version=1&modificationDate=1482492811000&api=v2)

Atenção!

Este serviço está disponível a partir da [Atualização 1.5.13](/pages/viewpage.action?pageId=267801630) da plataforma. Siga os procedimentos do [Guia de atualização fluig Studio](/pages/viewpage.action?pageId=240298991) para atualizar o plugin.


<!-- anchors: ConsumodeserviçosnaAPIpúblicaenocomponenteSDK-Índice, ConsumodeserviçosnaAPIpúblicaenocomponenteSDK-Objetivo, ConsumodeserviçosnaAPIpúblicaenocomponenteSDK-ConsumindoumserviçonaAPIpública, ConsumodeserviçosnaAPIpúblicaenocomponenteSDK-ConsumindoumserviçodocomponenteSDKapartirdeeventosdeJavaScript, ConsumodeserviçosnaAPIpúblicaenocomponenteSDK-ExemplosparautilizaçãodocomponenteSDKviaeventosdeJavaScript, highlighter_376217, highlighter_360718, ConsumodeserviçosnaAPIpúblicaenocomponenteSDK-ConsumindoumserviçonocomponenteSDK, highlighter_682904, samples1, samples1-1, highlighter_501137, samples1-2, highlighter_743997, samples2, samples2-1, highlighter_58390, samples2-2, highlighter_807936, samples3, samples3-1, highlighter_722980, samples3-2, highlighter_563558, ConsumodeserviçosnaAPIpúblicaenocomponenteSDK-ServiçosdisponíveisnocomponenteSDK, ConsumodeserviçosnaAPIpúblicaenocomponenteSDK-ExemploparaInstanciarServiçodoSDK, highlighter_676527, ConsumodeserviçosnaAPIpúblicaenocomponenteSDK-AutocompletareventosdafluigAPI -->
