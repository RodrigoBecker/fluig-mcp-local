---
title: "Documentação dos Web Services"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=662867789"
scraped_at: "2026-03-09T04:58:42.738Z"
depth: 3
anchors: 264
child_links: 152
---

# Documentação dos Web Services

# Objetivo

O objetivo deste documento é descrever os Web Services Soap do Fluig, com seus métodos, parâmetros e retornos

# Pré-requisitos

Para que se tenha uma compreensão completa destas informações, alguns conhecimentos são considerados pré-requisitos, entre eles:

- Visão geral sobre o fluig
- Visão geral sobre integração de sistemas
- Web Services

Informação:

Chamadas SOAP realizadas dentro de uma página (via widget) utilizam a sessão atual do usuário, ou seja, assumem o usuário logado. Porém, caso um login seja informado na chamada, a plataforma verifica se ele corresponde ao usuário da sessão.

# ECMAttributionMecanismService

Webservice responsável por realizar operações referentes aos mecanismos de atribuição cadastrados no fluig. Pode ser utilizado para pesquisar os mecanismos de atribuição de uma determinada empresa.

#### Métodos 

| getAttributionMecanism | Retorna os mecanismos de atribuição da empresa.Método:getAttributionMecanism(String user, String password, int companyId)Parâmetros:user: login do usuário.password: senha do usuário.companyId: código da empresa.Retorno: AttributionMecanismDto[]. |
| --- | --- |

**Quadro 2: Métodos da****AttributionMecanismService.**

#### Exemplo de utilização

Faça o download da classe [ECMAttributionMecanismService.java](https://git.fluig.com/projects/SAMPLES/repos/samples-webservice/browse/src/samples/ECMAttributionMecanismService.java), esta exemplifica a utilização dos principais métodos da classe AttributionMecanismService.

# ECMBusinessPeriodService

Webservice responsável por realizar operações referentes aos expedientes cadastrados no fluig. Pode ser utilizado para pesquisar os expedientes de uma determinada empresa.

#### Métodos

| getBusinessPeriods | Retorna os expedientes da empresa.Método:getBusinessPeriods(String user, String password, int companyId)Parâmetros:user: login do usuário.password: senha do usuário.companyId: código da empresa.Retorno: BusinessPeriodDto[]. |
| --- | --- |

**Quadro 3: Métodos da BusinessPeriodService.**

****

#### Exemplo de utilização

Faça o download da classe [ECMBusinessPeriodService.java](https://git.fluig.com/projects/SAMPLES/repos/componentes/browse/webservice/src/samples/ECMBusinessPeriodService.java), esta exemplifica a utilização dos principais métodos da classe BusinessPeriodService.

# ECMCardIndexService

Webservice responsável por realizar operações referentes aos formulários cadastrados no fluig.

#### Métodos

| createSimpleCardIndex | Criação simples de um formulário.Método:createSimpleCardIndex (String user, String password, int companyId, int parentDocumentId, String publisherId, String documentDescription, String cardDescription, AttachmentArray attachments, CardEventDtoArray customEvents)Parâmetros:user: login do usuário.password: senha do usuário.companyId: código da empresa.parentDocumentId: número do formulário.publisherId: código do autor.documentDescription: descrição.cardDescription: nome.attachments: arquivo anexo.customEvents: eventos.Retorno: WebServiceMessageArray.Estrutura de retorno com sucesso
?`````````1````Cadastro de clientes````271````1000````ok``````` |
| --- | --- |

Estrutura de retorno com erro

[?](#)

| `````````0````````0````0````Usuário sem permissão para publicar documento nesta pasta!``````` |
| --- |

createSimpleCardIndexWithDataset

Criação simples de um formulário com datasets.

Método:

createSimpleCardIndexWithDataset (String user, String password, int companyId, int parentDocumentId, String publisherId, String documentDescription, String cardDescription, String datasetName, AttachmentArray attachments, CardEventDtoArray customEvents)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- parentDocumentId: número do formulário.
- publisherId: código do autor.
- documentDescription: descrição.
- cardDescription: nome.
- datasetName: nome do dataset.
- attachments: arquivo anexo.
- customEvents: eventos.

Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WebServiceMessageArray).

Estrutura de retorno com sucesso

[?](#)

| `````````1````Cadastro de clientes````271````1000````ok``````` |
| --- |

Estrutura de retorno com erro

[?](#)

| `````````0````````0````0````Usuário sem permissão para publicar documento nesta pasta!``````` |
| --- |

createSimpleCardIndexWithDatasetPersisteType

Criação simples de um formulário com datasets determinando o tipo da persistência (Formulário ou Lista).

createSimpleCardIndexWithDatasetPersisteType (String user, String password, int companyId, int parentDocumentId, String publisherId, String documentDescription, String cardDescription, String datasetName, AttachmentArray attachments, CardEventDtoArray customEvents, Integer persistenceType)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa;
- parentDocumentId: número do formulário.
- publisherId: código do autor.
- documentDescription: descrição.
- cardDescription: nome.
- datasetName: nome do dataset.
- attachments: arquivo anexo.
- customEvents: eventos.
- persistenceType: tipo da persistência que será utilizada (0 = Formulário / 1 = Lista).

Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WebServiceMessageArray) .

Estrutura de retorno com sucesso

[?](#)

| `````````1````Cadastro de clientes````271````1000````ok``````` |
| --- |

Estrutura de retorno com erro

[?](#)

| `````````0````````0````0````Usuário sem permissão para publicar documento nesta pasta!``````` |
| --- |

getActiveCardIndex

Retorna o formulário ativo.

Método:

getActiveCardIndex (String user, String password, int companyId, int documentId, String colleagueId)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- documentId: número do formulário.
- colleagueId: número do usuário.

Retorno: [DocumentDtoArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto).

getAttachmentsList

Retorna a lista de anexos do formulário.

Método:

getAttachmentsList (String user, String password, int companyId, int documentId)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- documentId: número do formulário.

Retorno: StringArray, com o nome dos anexos.

getCardIndexContent

Retorna o conteúdo de um formulário.

Método:

getCardIndexContent (String user, String password, int companyId, int documentId, String colleagueId, int version, String nomeArquivo)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- documentId: número do formulário.
- colleagueId : matrícula do usuário para a verificação de permissão nos formulários.
- version: número da versão do formulário.
- nomeArquivo: nome do arquivo anexo.

Retorno: Uma lista de byte[]. 

getCardIndexesWithoutApprover

Retorna os formulários sem aprovadores que o usuário tenha permissão.

Método:

getCardIndexesWithoutApprover(String user, String password, int companyId, String colleagueId)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- colleagueId : matrícula do usuário para a verificação de permissão nos formulários.

Retorno: [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)[].

getCustomizationEvents

Retorna os eventos do formulário.

Método:

getCustomizationEvents (String user, String password, int companyId, int documentId)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- documentId: número do formulário.

Retorno: [CardEventDtoArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-CardEventDtoArray).

getFormFields

Retorna os campos do formulário.

Método:

getFormFields(String user, String password, int companyId, int documentId)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- documentId: número do formulário.

Retorno: Lista de String[] com o ID de cada campo do formulário.

updateSimpleCardIndex

Atualização simples do formulário.

Método:

updateSimpleCardIndex (String user, String password, int companyId, int documentId, String publisherId, String cardDescription, String descriptionField, AttachmentArray attachments, CardEventDtoArray customEvents)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- documentId: número do formulário.
- publisherId: código do autor.
- cardDescription: nome.
- descriptionField: descrição.
- attachments: arquivo anexo.
- customEvents: eventos.

Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WebServiceMessageArray).

Estrutura de retorno com sucesso

[?](#)

| `````````1````Cadastro de clientes````271````1000````ok``````` |
| --- |

Estrutura de retorno com erro

[?](#)

| `````````0````````0````0````Usuário sem permissão para publicar documento nesta pasta!``````` |
| --- |

updateSimpleCardIndexWithDataset

Atualização simples do formulário com datasets.

Método:

updateSimpleCardIndexWithDataset (String user, String password, int companyId, int documentId, String publisherId, String cardDescription, String descriptionField, String datasetName, AttachmentArray attachments, CardEventDtoArray customEvents)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- documentId: número do formulário.
- publisherId: código do autor.
- cardDescription: nome.
- descriptionField: descrição.
- datasetName: nome do dataset.
- attachments: arquivo anexo.
- customEvents: eventos.

Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WebServiceMessageArray).

Estrutura de retorno com sucesso

[?](#)

| `````````1````Cadastro de clientes````265````3000````ok``````` |
| --- |

Estrutura de retorno com erro

[?](#)

| `````````0````````0````0````Usuário sem permissão para publicar documento nesta pasta!``````` |
| --- |

**Quadro 4: Métodos da CardIndexService.**

****

#### Exemplo de utilização

Faça o download da classe [CardIndexServiceClient.java](/download/attachments/73084007/CardIndexServiceClient.java?version=1&modificationDate=1378474739000&api=v2), esta exemplifica a utilização dos principais métodos da classe CardIndexService.

# ECMCardService

Webservice responsável por realizar operações referentes a formulários no fluig. Pode ser utilizado para criar, alterar, excluir e pesquisar formulários, entre outros recursos.

#### Exemplos de utilização

Faça o download da classe [CardServiceClient.java](/download/attachments/73084007/CardServiceClient.java?version=1&modificationDate=1378474773000&api=v2), esta exemplifica a utilização dos principais métodos da classe CardService, que identifica os parametros a serem passados no carddtos.

Para visualizar um exemplo de montagem do xml, clique em [download](/download/attachments/73084007/cardService.xml?version=1&modificationDate=1526308021000&api=v2).

#### Métodos

| create | Cria um registro de formulário.Método:create(int companyId, String user, String password, CardDto[] carddtos)Parâmetros:companyId: código da empresa.user: login do usuário.password: senha do usuário.carddtos: formulário que será criado.Retorno: WebServiceMessageArray.Estrutura de retorno com sucesso
?`````````1````Cliente 01````287````1000````ok``````` |
| --- | --- |

Estrutura de retorno com erro

[?](#)

| `````````0````````0````0````Usuário sem permissão para publicar documento nesta pasta!``````` |
| --- |

deleteCard

Exclui um formulário e envia para a lixeira.

Método:

deleteCard(int companyId, String user, String password, int cardId)

Parâmetros:

- companyId: código da empresa.
- user: login do usuário.
- password: senha do usuário.
- cardId: número do formulário.

Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WebServiceMessageArray).

Estrutura de retorno com sucesso

[?](#)

| `````````1````````286````0````ok``````` |
| --- |

Estrutura de retorno com erro

[?](#)

| `````````0````````0````0````Ficha não encontrada: 287``````` |
| --- |

getCardVersion

Retorna a versão de um formulário.

Método:

getCardVersion(int companyId, String user, String password, int nrDocumentId, int version, String colleagueId)

Método:

Parâmetros:

- companyId: código da empresa.
- user: login do usuário.
- password: senha do usuário.
- nrDocumentId: número do formulário.
- version: versão do formulário.
- colleagueId: matrícula do usuário.

Retorno: CardDto[], lista com ID do campo e seus valores.

updateCard

Altera os metadados de um formulário.

Método:

updateCard(int companyId, String user, String password, CardDto[] cardDtos, Attachment[] attachs, [DocumentSecurityConfigDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentSecurityConfigDto)[] docsecurity, ApproverDto[] docapprovers, RelatedDocumentDto[] reldocs)

Parâmetros:

- companyId: código da empresa.
- user: login do usuário.
- password: senha do usuário.
- cardDtos: formulário que será alterado.
- attachs: anexos do formulário.
- docsecurity: segurança do formulário.
- docapprovers: aprovadores do formulário.
- reldocs: documentos relacionados do formulário.

Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WebServiceMessageArray).

Estrutura de retorno com sucesso

[?](#)

| `````````1````Cliente 01````287````2000````ok``````` |
| --- |

Estrutura de retorno com erro

[?](#)

| `````````0````````0````0````Usuário sem permissão para publicar documento nesta pasta!``````` |
| --- |

updateCardData

Altera os campos de um formulário.

Método:

updateCardData(int companyId, String user, String password, int cardId, CardFieldDto[] [cardData](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-cardData))

Parâmetros:

- companyId: código da empresa.
- user: login do usuário.
- password: senha do usuário.
- cardId: número do formulário.
- [cardData](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-cardData): campos do formulário que serão alterados.

Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WebServiceMessageArray).

Estrutura de retorno com sucesso

[?](#)

| `````````1````Cliente 01````287````2000````ok``````` |
| --- |

Estrutura de retorno com erro

[?](#)

| `````````0````````0````0````Usuário sem permissão para publicar documento nesta pasta!``````` |
| --- |

**Quadro 5: Métodos da CardService.**

****

# ECMColleagueGroupService

Webservice responsável por realizar operações referentes aos grupos de usuários no fluig. Pode ser utilizado para relacionar um usuário a um grupo de usuários e serve também para alterar, excluir e pesquisar esses relacionamentos criados.

#### Métodos

| createColleagueGroup | Associa um usuário a um grupo.Método:createColleagueGroup(String username, String password, int companyId, ColleagueGroupDto[] grupo_colaborador)Parâmetros:username: login do usuário.password: senha do usuário.companyId: código da empresa;grupo_colaborador: grupo que estará associado a um usuário.Retorno: String.Estrutura de retorno com sucesso
?`ok` |
| --- | --- |

Estrutura de retorno com erro

[?](#)

| `nok null` |
| --- |

deleteColleagueGroup

Exclui um usuário de um grupo.

Método:

deleteColleagueGroup(String username, String password, int companyId, String groupId, String colleagueId)

Parâmetros:

- username: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- groupId: código do grupo.
- colleagueId: matrícula do usuário.

Retorno: String.

Estrutura de retorno com sucesso

[?](#)

| `ok` |
| --- |

Estrutura de retorno com erro

[?](#)

| `nok Não foi possível remover o colaborador: Administrador` |
| --- |

getAllColleagueGroups

Retorna todos os grupos que possuem usuários relacionados.

Método:

getAllColleagueGroups(String username, String password, int companyId)

Parâmetros:

- username: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.

Retorno: ColleagueGroupDto[].

getColleagueGroup

Retorna somente um grupo que determinado usuário participa.

Método:

getColleagueGroup(String username, String password, int companyId, String groupId, String colleagueId)

Parâmetros:

- username: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- groupId: código do grupo.
- colleagueId: matrícula do usuário.

Retorno: ColleagueGroupDto[].

Atributos de Retorno:

- colleagueId
- companyId
- groupId

getColleagueGroupsByColleagueId

Retorna os grupos que um usuário participa.

Método:

getColleagueGroupsByColleagueId(String username, String password, int companyId, String colleagueId)

Parâmetros:

- username: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- colleagueId: matrícula do usuário.

Retorno: ColleagueGroupDto[].

Atributos de Retorno:

- colleagueId
- companyId
- groupId

 getColleagueGroupsByGroupId

Retorna os usuários que participam de um grupo de usuários.

Método:

getColleagueGroupsByGroupId(String username, String password, int companyId, String groupId)

Parâmetros:

- username: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- groupId: código do grupo.

Retorno: ColleagueGroupDto[].

Atributos de Retorno:

- colleagueId
- companyId
- groupId

updateColleagueGroup

Atenção

O método updateColleagueGroup foi depreciado, portanto não é recomendada a sua utilização em desenvolvimentos sobre a plataforma.

Altera a associação de um usuário a um grupo.

Método:

updateColleagueGroup(String username, String password, int companyId, ColleagueGroupDto[] grupo_colaborador)

Parâmetros:

- username: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- grupo_colaborador: grupo de usuários que será alterado.

Retorno: String.

Estrutura de retorno com sucesso

[?](#)

| `ok` |
| --- |

Estrutura de retorno com erro

[?](#)

| `nok null` |
| --- |

**Quadro 6: Métodos da ColleagueGroupService.**

****

#### Exemplo de utilização

Faça o download da classe [ColleagueGroupServiceClient.java](/download/attachments/73084007/GroupServiceClient.java?version=1&modificationDate=1409227367000&api=v2), esta exemplifica a utilização dos principais métodos da classe ColleagueGroupService.

# ECMColleagueReplacementService

Webservice responsável por realizar operações referentes a usuários substitutos no fluig. Pode ser utilizado para criar, alterar, excluir e pesquisar usuários substitutos, entre outros recursos.

#### Métodos

| createColleagueReplacement | Cria um substituto.Método:createColleagueReplacement (String username, String password, int companyId, ColleagueReplacementDto crDto)Parâmetros:username: login do usuário.password: senha do usuário.companyId: código da empresa.crDto: cadastro do substituto.Retorno: String.Estrutura de retorno com sucesso
?`OK` |
| --- | --- |

Estrutura de retorno com erro

[?](#)

| `NOK Não foi possível criar o Substituto: Data de início do período deve ser menor que a data final!` |
| --- |

deleteColleagueReplacement

Exclui o cadastro de um substituto.

Método:

deleteColleagueReplacement(String username, String password, int companyId, String colleagueId, String replacementId)

Parâmetros:

- username: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- colleagueId: matrícula do usuário origem.
- replacementId: matrícula do usuário substituto.

Retorno: String.

Estrutura de retorno com sucesso

[?](#)

| `OK` |
| --- |

Estrutura de retorno com erro

[?](#)

| `result>NOK Não foi encontrado o substituto com os parâmetros informados!` |
| --- |

getColleagueReplacement

Retorna um substituto de um usuário.

Método:

getColleagueReplacement(String username, String password, int companyId, String colleagueId, String replacementId)

Parâmetros:

- username: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- colleagueId: matrícula do usuário origem.
- replacementId: matrícula do usuário substituto.

Retorno: [ColleagueReplacementDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ColleagueReplacementDto).

 getReplacementsOfUser

Retorna todos os substitutos de um usuário.

Método:

getReplacementsOfUser(String username, String password, int companyId, String colleagueId)

Parâmetros:

- username: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- colleagueId: matrícula do usuário origem.

Retorno: [ColleagueReplacementDto[]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ColleagueReplacementDto).

getValidReplacedUsers

Retorna todos os usuário substituídos por um substituto válido.

Método:

getValidReplacedUsers(String username, String password, int companyId, String replacementId)

Parâmetros:

- username: login do usuário.
- password: senha do usuário.
- companyId: código da empresa;
- replacementId: matrícula do usuário substituto.

Retorno: [ColleagueReplacementDto[]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ColleagueReplacementDto).

getValidReplacement

Retorna um substituto válido de um usuário.

Método:

getValidReplacement(String username, String password, int companyId, String colleagueId, String replacementId)

Parâmetros:

- username: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- colleagueId: matrícula do usuário origem.
- replacementId: matrícula do usuário substituto.

Retorno: [ColleagueReplacementDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ColleagueReplacementDto).

getValidReplacementsOfUser

Retorna todos os substitutos válidos de um usuário.

Método:

getValidReplacementsOfUser(String username, String password, int companyId, String colleagueId)

Parâmetros:

- username: login do usuário.
- password: senha do usuário.
- companyId: código da empresa;
- colleagueId: matrícula do usuário origem.

Retorno: [ColleagueReplacementDto[]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ColleagueReplacementDto).

updateColleagueReplacement

Altera o cadastro de um substituto.

Método:

updateColleagueReplacement (String username, String password, int companyId, [ColleagueReplacementDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ColleagueReplacementDto) crDto)

Parâmetros:

- username: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- crDto: cadastro do usuário.

Retorno: String.

Estrutura de retorno com sucesso

[?](#)

| `OK` |
| --- |

Estrutura de retorno com erro

[?](#)

| `NOK Não foi encontrado o substituto com os parâmetros informados!` |
| --- |

**Quadro 7: Métodos da ColleagueReplacementService**

****

#### Exemplo de utilização

Faça o download da classe [ECMColleagueReplacementService.java](https://git.fluig.com/projects/SAMPLES/repos/samples-webservice/browse/src/samples/ECMColleagueReplacementService.java), esta exemplifica a utilização dos principais métodos da classe ColleagueReplacementService.

# ECMColleagueService

Webservice responsável por realizar operações referentes a usuários no fluig. Pode ser utilizado para criar, alterar, excluir e pesquisar usuários, entre outros recursos.

Atenção!

Os métodos createColleague, createColleaguewithDependencies, updateColleague e updateColleaguewithDependencies, em um dos seus parâmetros, recebe uma lista de [ColleagueDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ColleagueDto), nos objetos destas listas os valores para os campos de senha (*password*) devem ser criptografados com o algoritmo de *hash *MD5, exceto no caso de possuir o identity configurado, neste caso a senha deverá ser passada normalmente sem a criptografia.

Utilizado o *hash *MD5 no e-mail contendo os dados do usuário criado, é regra de negócio o campo senha ser apresentado em branco.

#### Métodos

| createColleague | Cria um usuário.Método:createColleague(String username, String password, int companyId, ColleagueDto[] colleagues)Parâmetros:username: login do usuário.password: senha do usuário.companyId: código da empresa.colleagues: usuários.Retorno: String.Estrutura de retorno com sucesso
?`ok` |
| --- | --- |

Estrutura de retorno com erro

[?](#)

| `nok Administrador já cadastrado.` |
| --- |

createColleaguewithDependencies

Cria um usuário com grupos e papéis.

Método:

createColleaguewithDependencies(String username, String password, int companyId, [ColleagueDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ColleagueDto)[] colleagues, [GroupDto](/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-GroupDto)[] grupos, [WorkflowRoleDto[]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WorkflowRoleDto) papeis)

Parâmetros:

- username: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- colleagues: usuários.
- grupos: grupos.
- papeis: papéis.

Retorno: String.

Estrutura de retorno com sucesso

[?](#)

| `ok` |
| --- |

Estrutura de retorno com erro

[?](#)

| `nok Administrador já cadastrado.` |
| --- |

getColleague

Retorna um usuário.

Método:

getColleague(String username, String password, int companyId, String colleagueId)

Parâmetros:

- username: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- colleagueId: matrícula do usuário.

Retorno: [ColleagueDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ColleagueDto)[].

getColleagueByLogin 

Retorna o usuário a partir do login.

Método:

getColleagueByLogin(String username, String password)

Parâmetros:

- username: login do usuário.
- password: senha do usuário.

Retorno: [ColleagueDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ColleagueDto)[].

getColleagues

Retorna todos os usuários ativos.

Método:

getColleagues(String username, String password, int companyId)

Parâmetros:

- username: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.

Retorno: [ColleagueDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ColleagueDto)[].

getColleaguesMail

Retorna um usuário utilizando um e-mail.

Método:

getColleaguesMail(String username, String password, int companyId, String mail)

Parâmetros:

- username: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- mail: e-mail do usuário.

Retorno: [ColleagueDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ColleagueDto)[].

Estrutura de retorno com sucesso

[?](#)

| `````````true````true````adm````Administrador````1````pt_BR````PT_BR````3.0.35.0````true````true````Informática````adm````adm@mail.com````0````````0````0.0````Default``````` |
| --- |

getColleagueWithMap

Retorna uma mensagem informando se o usuário foi criado corretamente.

Método:

getColleagueWithMap(String colleagueXML, String username, String password)

Parâmetros:

- username: login do usuário.
- password: senha do usuário.
- colleagueXML: lista normalizada de documentos.

Retorno: String.

getGroups

Retorna os grupos que o usuário participa.

Método:

getGroups(String username, String password, int companyId, String colleagueId)

Parâmetros:

- username: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- colleagueId: matrícula do usuário.

Retorno: [GroupDto](/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-GroupDto)[].

getSimpleColleague

Retorna o usuário.

Método:

getSimpleColleague(String username, String password)

Parâmetros:

- username: login do usuário.
- password: senha do usuário.

Retorno: [ColleagueDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ColleagueDto)[].

getSummaryColleagues

Retorna todos os usuários ativos.

Método:

getSummaryColleagues(int companyId)

Parâmetros:

- companyId: código da empresa.

Retorno: [ColleagueDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ColleagueDto)[].

removeColleague

Desativa um usuário.

Método:

removeColleague(String username, String password, int companyId, String colleagueId)

Parâmetros:

- username: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- colleagueId: matrícula do usuário.

Retorno: String.

Estrutura de retorno com sucesso

[?](#)

| `ok` |
| --- |

Estrutura de retorno com erro

[?](#)

| `Usuários do tipo 'administrador' não podem ser desativados!` |
| --- |

activateColleague

Ativa um usuário.

Método:

activateColleague(String username, String password, int companyId, String colleagueId)

Parâmetros:

- username: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- colleagueId: matrícula do usuário.

Retorno: String.

Estrutura de retorno com sucesso

[?](#)

| `ok` |
| --- |

Estrutura de retorno com erro

[?](#)

| `Login e senha inválidos` |
| --- |

updateColleague

Altera um usuário.

Método:

updateColleague(String username, String password, int companyId, [ColleagueDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ColleagueDto)[] colleagues)

Parâmetros:

- username: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- colleagues: usuários.

Retorno: String.

Estrutura de retorno com sucesso

[?](#)

| `ok` |
| --- |

Estrutura de retorno com erro

[?](#)

| `nok Volume Físico inexistente ou não é do tipo Meus Documentos` |
| --- |

updateColleaguewithDependencies

Esse método altera um usuário com grupos e papéis, permite adicionar os papéis a um usuário. 

Método:

updateColleaguewithDependencies(String username, String password, int companyId, [ColleagueDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ColleagueDto)[] colleagues, [GroupDto](/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-GroupDto)[] grupos, [WorkflowRoleDto[]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WorkflowRoleDto)papeis)

Parâmetros:

- username: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- colleagues: usuários.
- grupos: grupos.
- papeis: papéis.

Retorno: String.

Estrutura de retorno com sucesso

[?](#)

| `ok` |
| --- |

Estrutura de retorno com erro

[?](#)

| `nok null` |
| --- |

validateColleagueLogin

Valida o acesso de um usuário no produto.

Método:

validateColleagueLogin(int companyId, String colleagueId, String password)

Parâmetros:

- companyId: código da empresa.
- colleagueId: matrícula do usuário.
- password: senha do usuário.

Retorno: String.

Estrutura de retorno com sucesso

[?](#)

| `ok` |
| --- |

Estrutura de retorno com erro

[?](#)

| `NOK Login e senha inválidos` |
| --- |

getRoles
Retorna os papéis associados ao usuário

Método:

getRoles(String username, String password, int companyId, String colleagueId)

Parâmetros:

- username: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- colleagueId: matrícula do usuário.

Retorno: [WorkflowRoleDto[]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WorkflowRoleDto).

**Quadro 8: Métodos da ColleagueService.**

****

#### Exemplo de utilização

Faça o download da classe [ColleagueServiceClient.java](/download/attachments/73084007/ColleagueServiceClient.java?version=4&modificationDate=1453899861000&api=v2), esta exemplifica a utilização dos principais métodos da classe ColleagueService.

# ECMCompanyService

Webservice responsável por realizar operações referentes à empresa no fluig. Pode ser utilizado para criar, alterar, excluir e pesquisar empresas, entre outros recursos.

#### Métodos

| createCompany | Cria uma empresa no fluig.Método:createCompany(String username, String password, String companyId, String description, String urlAccessName, String phisicalPath, String webdeskServer, String webPort)Parâmetros:username: login do usuário.password: senha do usuário.companyId: código da empresa.description: descrição da empresa.urlAccessName: URL de acesso.phisicalPath: caminho físico.webdeskServer: servidor.webPort: porta.Retorno: String.Estrutura de retorno com sucesso
?`OK` |
| --- | --- |

Estrutura de retorno com erro

[?](#)

| `NOK: Empresa com o Id 1 já cadastrado.` |
| --- |

getCompanies

Retorna todas as empresas cadastradas no fluig.

Método:

getCompanies(String username, String password, String companyId)

Parâmetros:

- username: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.

Retorno: CompanyDto[].

getCompany

Retorna uma empresa cadastrada no fluig.

Método:

getCompany(int companyId)

Parâmetros:

- companyId: código da empresa.

Retorno: CompanyDto.

updateCompany

Altera uma empresa no fluig.

Método:

updateCompany(String username, String password, String companyId, String description, String urlAccessName, String phisicalPath, String webdeskServer, String webPort)

Parâmetros:

- username: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- description: descrição da empresa.
- urlAccessName: URL de acesso.
- phisicalPath: caminho físico.
- webdeskServer: servidor.
- webPort: porta.

Retorno: String.

Estrutura de retorno com sucesso

[?](#)

| `OK` |
| --- |

Estrutura de retorno com erro

[?](#)

| `NOK:Login e senha inválidos` |
| --- |

**Quadro 9: Métodos da CompanyService**

****

#### Exemplo de utilização

Faça o download da classe [CompanyServiceClient.java](/download/attachments/73084007/CompanyServiceClient.java?version=1&modificationDate=1378474967000&api=v2), esta exemplifica a utilização dos principais métodos da classe CompanyService.

# ECMCustomFieldsService

Webservice responsável por interagir com os campos customizados do fluig. Pode ser utilizado para criar, alterar, excluir e pesquisar campos customizados, entre outros recursos.

#### Métodos

| createCustomFields | Cria um campo customizado.Método:createCustomFields(String user, String password, int companyId, CustomFieldsDto[] customFieldsDto)Parâmetros:user: login do usuário.password: senha do usuário.companyId: código da empresa.customFieldsDto: campo customizado que será criado.Retorno: String, retorna OK caso os parâmetros da requisição estejam corretos.Estrutura de retorno com sucesso
?`OK` |
| --- | --- |

Estrutura de retorno com erro

[?](#)

| `ERROR: Ja existe um metadado customizado com este código!` |
| --- |

getAllCustomField

Retorna todos os campos customizados.

Método:

getAllCustomField(String user, String password, int companyId)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.

Retorno: [CustomFieldsDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-CustomFieldsDto).

getAllDocumentCustomField

Retorna todos os campos customizados de um documento.

Método:

getAllDocumentCustomField(String user, String password, int companyId, int documentId, int version)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- documentId: número do documento.
- version: versão do documento.

Retorno: [DocumentCustomFieldsDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentCustomFieldsDto).

removeCustomField

Exclui um campo customizado.

Método:

removeCustomField(String user, String password, int companyId, String customFieldsId)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- customFieldsId: código do campo customizado.

Retorno: String, retorna OK caso os parâmetros da requisição estejam corretos. 

Estrutura de retorno com sucesso

[?](#)

| `OK` |
| --- |

Estrutura de retorno com erro

[?](#)

| `ERROR: Metadado customizado não pode ser encontrado!` |
| --- |

removeDocumentCustomField

Exclui um campo customizado de um documento.

Método:

removeDocumentCustomField(String user, String password, int companyId, String customFieldsId, int documentId, int version)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- customFieldsId: código do campo customizado.
- documentId: número do documento.
- version: versão do documento.

Retorno:

Retorno: String, retorna OK caso os parâmetros da requisição estejam corretos.

.

Estrutura de retorno com sucesso

[?](#)

| `OK` |
| --- |

Estrutura de retorno com erro

[?](#)

| `ERROR: Metadado customizado não podem ser encontrado para este documento!` |
| --- |

setDocumentCustomFields

Cria ou altera um campo customizado em um documento.

Método:

setDocumentCustomFields(String user, String password, int companyId, [DocumentCustomFieldsDto](/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentCustomFieldsDto)[] documentCustomFieldsDto)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- documentCustomFieldsDto: documento com campo customizado.

Retorno: String, retorna OK caso os parâmetros da requisição estejam corretos. 

Estrutura de retorno com sucesso

[?](#)

| `OK` |
| --- |

Estrutura de retorno com erro

[?](#)

| `ERROR: Não foi possível incluir a entidade: Não existe metadado customizado cadastrado com este código` |
| --- |

updateCustomFields

Altera um campo customizado.

Método:

updateCustomFields(String user, String password, int companyId, [CustomFieldsDto](/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-CustomFieldsDto)[] customFieldsDto)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- customFieldsDto: campo customizado que será alterado.

Retorno: String, retorna OK caso os parâmetros da requisição estejam corretos. 

Estrutura de retorno com sucesso

[?](#)

| `OK` |
| --- |

Estrutura de retorno com erro

[?](#)

| `ERROR: Metadado customizado não podem ser encontrado!` |
| --- |

**Quadro 10: Métodos da CustomFieldsService**

****

#### Exemplo de utilização

Faça o download da classe [CustomFieldsServiceClient.java](/download/attachments/73084007/CustomFieldsClient.java?version=1&modificationDate=1378475008000&api=v2), esta exemplifica a utilização dos principais métodos da classe CustomFieldsService.

# ECMDashBoardService

Webservice responsável por interagir com a central de tarefas do fluig. Pode ser utilizado para pesquisar as informações que estão disponíveis na central de tarefas.

#### Métodos

| findMyDocuments | Retorna os documentos do usuário que precisam ser aprovados.Método:findMyDocuments(String user, String password, int companyId, String colleagueId)Parâmetros:user: login do usuário.password: senha do usuário.companyId: código da empresa.colleagueId: matrícula do usuário.Retorno: DocumentDto[]. |
| --- | --- |
| findMyDocumentsOnDemand | Retorna os documentos do usuário que precisam ser aprovados, paginados.Método:findMyDocumentsOnDemand(String user, String password, int companyId, String colleagueId, int limit, int lastRowId)Parâmetros:user: login do usuário.password: senha do usuário.companyId: código da empresa.colleagueId: matrícula do usuário.limit: número de registros a serem retornados.lastRowId: última linha retornada.Retorno: DocumentDto[]. |
| findDocumentsToApprove | Retorna os documentos que o usuário precisa aprovar.Método:findDocumentsToApprove(String user, String password, int companyId, String colleagueId)Parâmetros:user: login do usuário.password: senha do usuário.companyId: código da empresa.colleagueId: matrícula do usuário.Retorno: DocumentDto[]. |
| findDocumentsToApproveOnDemand | Retorna os documentos que o usuário precisa aprovar, paginados.Método:findDocumentsToApproveOnDemand(String user, String password, int companyId, String colleagueId, int limit, int lastRowId)Parâmetros:user: login do usuário.password: senha do usuário.companyId: código da empresa.colleagueId: matrícula do usuário.limit: número de registros a serem retornados.lastRowId: última linha retornada.Retorno: DocumentDto[]. |
| findAgreementDocuments | Retorna os documentos do usuário que estão em consenso.Método:findAgreementDocuments(String user, String password, int companyId, String colleagueId)Parâmetros:user: login do usuário.password: senha do usuário.companyId: código da empresa.colleagueId: matrícula do usuário.Retorno: DocumentDto[]. |
| findCheckoutDocuments | Retorna os documentos do usuário que estão em checkout.Método:findCheckoutDocuments(String user, String password, int companyId, String colleagueId)Parâmetros:user: login do usuário.password: senha do usuário.companyId: código da empresa.colleagueId: matrícula do usuário.Retorno: DocumentDto[]. |
| findCancelledTasks | Retorna as tarefas atribuidas ao usuário que foram canceladas.Método:findCancelledTasks(String user, String password, int companyId, String colleagueId)Parâmetros:user: login do usuário.password: senha do usuário.companyId: código da empresa.colleagueId: matrícula do usuário.Retorno: WorkflowProcessDto[]. |
| findCompletedTasks | Retorna as tarefas atribuidas ao usuário que foram finalizadas.Método:findCompletedTasks(String user, String password, int companyId, String colleagueId)Parâmetros:user: login do usuário.password: senha do usuário.companyId: código da empresa.colleagueId: matrícula do usuário.Retorno: WorkflowProcessDto[]. |
| findConsensusTasks | Retorna as tarefas atribuidas ao usuário que estão em consenso.Método:findConsensusTasks(String user, String password, int companyId, String colleagueId)Parâmetros:user: login do usuário.password: senha do usuário.companyId: código da empresa.colleagueId: matrícula do usuário.Retorno: WorkflowProcessDto[]. |
| findTransferredTasks | Retorna as tarefas atribuidas ao usuário que foram transferidas.Método:findTransferredTasks(String user, String password, int companyId, String colleagueId)Parâmetros:user: login do usuário.password: senha do usuário.companyId: código da empresa.colleagueId: matrícula do usuário.Retorno: WorkflowProcessDto[]. |
| findWorkflowTasks | Retorna as tarefas do usuário que estão abertas.Método:findWorkflowTasks(String user, String password, int companyId, String colleagueId)Parâmetros:user: login do usuário.password: senha do usuário.companyId: código da empresa.colleagueId: matrícula do usuário.Atenção! O colleagueId pode ser preenchido com Pool:Role:Id ou Pool:Group:Id substituindo o Id pelo código de um papel ou de um grupo, respectivamente, para retornar as solicitações referentes a eles.Retorno: WorkflowProcessDto[]. |
| findWorkflowTasksOnDemand | Retorna as tarefas do usuário que estão abertas, paginadas.Método:findWorkflowTasksOnDemand(String user, String password, int companyId, String colleagueId, int limit, int lastRowId)Parâmetros:user: login do usuário.password: senha do usuário.companyId: código da empresa.colleagueId: matrícula do usuário.limit: número de registros a serem retornados.lastRowId: última linha retornada.Atenção! O colleagueId pode ser preenchido com Pool:Role:Id ou Pool:Group:Id substituindo o Id pelo código de um papel ou de um grupo, respectivamente, para retornar as solicitações referentes a eles.Retorno: WorkflowProcessDto[]. |
| findMyRequests | Retorna as solicitações abertas que foram inicializadas pelo usuário.Método:findMyRequests(String user, String password, int companyId, String colleagueId)Parâmetros:user: login do usuário.password: senha do usuário.companyId: código da empresa.colleagueId: matrícula do usuário.Retorno: WorkflowProcessDto[]. |
| findMyRequestsOnDemand | Retorna as solicitações abertas que foram inicializadas pelo usuário, paginadas.Método:findMyRequestsOnDemand(String user, String password, int companyId, String colleagueId, int limit, int lastRowId)Parâmetros:user: login do usuário.password: senha do usuário.companyId: código da empresa.colleagueId: matrícula do usuário.limit: número de registros a serem retornados.lastRowId: última linha retornada.Retorno: WorkflowProcessDto[]. |
| findMyManagerTasks | Retorna as tarefas gerenciadas pelo usuário.Método:findMyManagerTasks(String user, String password, int companyId, String colleagueId)Parâmetros:user: login do usuário.password: senha do usuário.companyId: código da empresa.colleagueId: matrícula do usuário.Retorno: WorkflowProcessDto[]. |
| findExpiredWorkflowTasks | Retorna as tarefas do usuário que estão em atrasoMétodo: findExpiredWorkflowTasks(String user, String password, int companyId, String colleagueId)Parâmetros:user: login do usuário.password: senha do usuário.companyId: código da empresa.colleagueId: matrícula do usuário.Atenção! O colleagueId pode ser preenchido com Pool:Role:Id ou Pool:Group:Id substituindo o Id pelo código de um papel ou de um grupo, respectivamente, para retornar as solicitações referentes a eles.Retorno: WorkflowProcessDto[]. |
| fillStatusTask | Retorna a quantidade de tarefas atrasadas, no prazo e sem prazo de um usuário.Método:fillStatusTask(String user, String password, int companyId, String colleagueId)Parâmetros:user: login do usuário.password: senha do usuário.companyId: código da empresa.colleagueId: matrícula do usuário.Atenção! O colleagueId pode ser preenchido com Pool:Role:Id ou Pool:Group:Id substituindo o Id pelo código de um papel ou de um grupo, respectivamente, para retornar as solicitações referentes a eles.Retorno: List de int[], com a quantidade de tarefas atrasadas. |
| fillChronoTasks | Retorna a quantidade de tarefas com prazo de conclusão que foram atribuídas ao usuário e não foram finalizadas.Método:fillChronoTasks(String user, String password, int companyId, String colleagueId, int yearIni, int yearFin, int mounthIni, int mounthFin, int dayIni, int dayFin, int kindTask)Parâmetros:user: login do usuário.password: senha do usuário.companyId: código da empresa.colleagueId: matrícula do usuário.yearIni: ano inicial.yearFin: ano final.mounthIni: mês inicial.mounthFin: mês final.dayIni: dia inicial.dayFin: dia final.kindTask: tipo da tarefa.Atenção! O colleagueId pode ser preenchido com Pool:Role:Id ou Pool:Group:Id substituindo o Id pelo código de um papel ou de um grupo, respectivamente, para retornar as solicitações referentes a eles.Retorno: : Lista de int[], com a quantidade de tarefas com prazo de conclusão atribuída ao usuário. |
| fillTypeTasks | Retorna os tipos de tarefas que o usuário possui.Método:fillTypeTasks(String user, String password, int companyId, String colleagueId)Parâmetros:user: login do usuário.password: senha do usuário.companyId: código da empresa.colleagueId: matrícula do usuário.Retorno: TaskVODto[]. |
| fillTypeTasksOfReplacement | Retorna os tipos de tarefas que o usuário substituto possui.Método:fillTypeTasksOfReplacement(String user, String password, int companyId, String colleagueId, String replacementId)Parâmetros:user: login do usuário.password: senha do usuário.companyId: código da empresa.colleagueId: matrícula do usuário.replacementId: matrícula do usuário substituto.Retorno: TaskVODto[]. |
| getOpenTasksByColleagueGroups | Retorna as tarefas atribuídas a um grupo que o usuário participa.Método:getOpenTasksByColleagueGroups(String user, String password, int companyId, String colleagueId)Parâmetros:user: login do usuário.password: senha do usuário.companyId: código da empresa.colleagueId: matrícula do usuário.Retorno: WorkflowTaskDto[]. |
| getOpenTasksByColleagueGroupsOnDemand | Retorna as tarefas atribuídas a um grupo que o usuário participa, paginadas.Método:getOpenTasksByColleagueGroupsOnDemand(String user, String password, int companyId, String colleagueId, int limit, int lastRowId)Parâmetros:user: login do usuário.password: senha do usuário.companyId: código da empresa.colleagueId: matrícula do usuário.limit: número de registros a serem retornados.lastRowId: última linha retornada.Retorno: WorkflowTaskDto[]. |
| getOpenTasksByColleagueRoles | Retorna as tarefas atribuídas a um papel que o usuário participa.Método:getOpenTasksByColleagueRoles(String user, String password, int companyId, String colleagueId)Parâmetros:user: login do usuário.password: senha do usuário.companyId: código da empresa.colleagueId: matrícula do usuário.Retorno: WorkflowTaskDto[]. |
| getOpenTasksByColleagueRolesOnDemand | Retorna as tarefas atribuídas a um papel workflow que o usuário participa, paginadas.Método:getOpenTasksByColleagueRolesOnDemand(String user, String password, int companyId, String colleagueId, int limit, int lastRowId)Parâmetros:user: login do usuário.password: senha do usuário.companyId: código da empresa.colleagueId: matrícula do usuário.limit: número de registros a serem retornados.lastRowId: última linha retornada.Retorno: WorkflowTaskDto[]. |
| getSummaryRequests | Retorna os contadores de pendências da Home.Método:getSummaryRequests(int companyId, String user, String password, String colleagueId)Parâmetros:companyId: código da empresa.user: login do usuário.password: senha do usuário.colleagueId: matrícula do usuário.Atenção! O colleagueId pode ser preenchido com Pool:Role:Id ou Pool:Group:Id substituindo o Id pelo código de um papel ou de um grupo, respectivamente, para retornar as solicitações referentes a eles.Retorno: HomeRequestSummaryDto[]. |
| getUrlEcm | Retorna a url do servidor.Método:getUrlEcm(long companyId)Parâmetros:companyId: código da empresa.Retorno: String , com a url da empresa.  |

**Quadro 11: Métodos da ECMDashBoardService**

****

#### Exemplo de utilização

Faça o download da classe [ECMDashBoardService.java](https://git.fluig.com/projects/SAMPLES/repos/samples-webservice/browse/src/samples/ECMDashBoardService.java), esta exemplifica a utilização dos principais métodos da classe ECMDashBoardService.

# ECMDataServiceService

Webservice responsável por interagir com os serviços externos do fluig. Pode ser utilizado para criar, alterar, excluir e pesquisar os serviços externos existentes.

#### Métodos

| createDataService | Cria um serviço externo.Método:createDataService(int companyId, String user, String password, DataServiceDto[] dataServiceDto)Parâmetros:companyId: código da empresa.user: login do usuário.password: senha do usuário.dataServiceDto: serviço externo que será criado.Retorno: String. |
| --- | --- |
| deleteDataService  | Remove um serviço externo.Método:deleteDataService(int companyId, String user, String password, String dataServiceName)Parâmetros:companyId: código da empresa.user: login do usuário.password: senha do usuário.dataServiceName: nome do serviço externo que será removido.Retorno: void. |
| getAllServices | Retorna todos os serviços externos cadastrados.Método:getAllServices(int companyId, String user, String password)Parâmetros:companyId: código da empresa.user: login do usuário.password: senha do usuário.Retorno: dataServiceDto[]. |
| loadDataService | Retorna um serviço externo.Método:loadDataService(int companyId, String user, String password, String dataServiceName)Parâmetros:companyId: código da empresa.user: login do usuário.password: senha do usuário.dataServiceName: nome do serviço externo.Retorno: dataServiceDto. |
| updateDataService | Atualiza um serviço externo.Método:updateDataService(int companyId, String user, String password, DataServiceDto[] dataServiceDto)Parâmetros:companyId: código da empresa.user: login do usuário.password: senha do usuário.dataServiceDto: serviço externo que será atualizado.Retorno: void. |
| createDataServiceAuthenticated | Cria um serviço externo com autenticaçãoMétodo:createDataServiceAuthenticated(int companyId, String user, String password, DataServiceDto[] dataServiceDto, OauthDTO oauthDTO)Parâmetros:companyId: código da empresa.user: login do usuário.password: senha do usuário.dataServiceDto: serviço externo que será criado.oauthDTO:  objeto com as configurações para a autenticação no serviço.Retorno: String. |
| updateDataServiceAuthenticated | Atualiza um serviço externo com autenticaçãoMétodo:updateDataServiceAuthenticated(int companyId, String user, String password, DataServiceDto[] dataServiceDto, OauthDTO oauthDTO)Parâmetros:companyId: código da empresa.user: login do usuário.password: senha do usuário.dataServiceDto: serviço externo que será atualizado.oauthDTO:  objeto com as configurações para a autenticação no serviço.Retorno: void. |

**Quadro 12: Métodos da DataServiceService.**

****

# ECMDatasetService

Webservice responsável por interagir com os datasets do fluig. Pode ser utilizado para pesquisar os datasets existentes.

#### Métodos

| addDataset | Cria um dataset.Método:addDataset(int companyId, String user, String password, String datasetName, String description, String impl)Parâmetros:companyId: código da empresa.user: login do usuário.password: senha do usuário.datasetName: nome do dataset que será criado.description: descrição do dataset.impl: implementação para criação do dataset.Retorno: String. |
| --- | --- |
| deleteDataset | Remove um dataset.Método:deleteDataset(int companyId, String user, String password, String datasetName)Parâmetros:companyId: código da empresa.user: login do usuário.password: senha do usuário.datasetName: nome do dataset que será removido.Retorno: void. |
| getAvailableDatasets | Retorna todos os datasets disponíveis.Método:getAvailableDatasets(int companyId, String user, String password)Parâmetros:companyId: código da empresa.user: login do usuário.password: senha do usuário.Retorno: Object[]. |
| getDataset | Retorna as informações de um dataset.Método:getDataset(int companyId, String user, String password, String name, String[] fields, SearchConstraintDto[] constraintsDto, String[] order)Parâmetros:companyId: código da empresa.user: login do usuário.password: senha do usuário.name: nome do dataset.fields: campos que serão retornados do dataset.constraintsDto: filtro dos registros que irão compor o dataset.order: campos utilizados para ordenar o dataset.Retorno: DatasetDto. |
| updateDataset | Atualiza um dataset.Método:updateDataset(int companyId, String user, String password, String datasetName, String description, String impl)Parâmetros:companyId: código da empresa.user: login do usuário.password: senha do usuário.datasetName: nome do dataset que será atualizado.description: descrição do dataset.impl: implementação do dataset.Retorno: void. |

**Quadro 13: Métodos da DatasetService**

****

#### Exemplo de utilização

Faça o download da classe [DatasetServiceClient.java](/download/attachments/73084007/DatasetServiceClient.java?version=2&modificationDate=1378475205000&api=v2), esta exemplifica a utilização dos principais métodos da classe DatasetService.

# ECMDocumentService

Webservice responsável por realizar operações referentes a documentos do fluig. Pode ser utilizado para criar, alterar, excluir e procurar documentos, entre outros recursos.

Dica!

Para transferir arquivos para a pasta de upload é recomendado a utilização do protocolo FTP. Para mais detalhes sobre o procedimento acesse a documentação [Utilizando o protocolo FTP](https://tdn.totvs.com/x/zABlDw).

Não recomendamos passar *via webservice* arquivos convertidos em base 64 na tag *<filecontent>* pois existe uma limitação de quantidade da String. Indicamos a utilização em arquivos pequenos de no máximo 5mb

Faça[download](https://git.fluig.com/projects/SAMPLES/repos/componentes/browse/soap-xml-document-service) do exemplo contido em nosso repositório utilizando o arquivo **soap-xml-document-service**.

#### Métodos

| approveDocument | Aprova ou reprova documento pendente de aprovação.Metodo:approveDocument(int companyId, String userId, String password, int documentId, int version, String approverId, boolean approved, String observation)Parâmetros:user: código do usuário de integração.password: senha do usuário de integração.companyId: código da empresa.documentId: código do documento a ser aprovado.version: versão do documento a ser aprovado.approverId: código do aprovadorapproved: true se aprova o documento e false caso o documento sera reprovado.observation: observação da aprovação ou rejeição.Retorno: WebServiceMessageArray.Estrutura de retorno com sucesso
?`````````1````````293````0````ok``````` |
| --- | --- |

Estrutura de retorno com erro

[?](#)

| `````````0````````0````0````Documento já está aprovado.``````` |
| --- |

copyDocumentToUploadArea

Copia os arquivos (principal e anexos) de um documento para a area de upload do usuário. Isto permite que os documentos tornem-se acessíveis via FTP.

Método:

copyDocumentToUploadArea(String user, String password, int companyId, int documentId, int version, String colleagueId)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- documentId: número do documento que será copiado.
- version: versão do documento
- colleagueId: matrícula do usuário cuja área de upload será utilizada

Retorno: String[] nome dos arquivos que foram disponibilizados na área de upload

Estrutura de retorno com sucesso

[?](#)

| `````Política de uso.pdf``` |
| --- |

Estrutura de retorno com erro

[?](#)

| `O usuário não tem permissão para acessar o documento ou a versão do documento é inválida.` |
| --- |

createDocument  

Cria um documento.

Método:

createDocument(String user, String password, int companyId, [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)[] docDtos, [Attachment](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-Attachment)[] attachs,  [DocumentSecurityConfigDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentSecurityConfigDto)[] docSecurity, [ApproverDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ApproverDto)[] docApprovers, [RelatedDocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-RelatedDocumentDto)[] relDocs)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- docDtos: documento que será publicado (mais detalhes do parâmetro [aqui](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)).
- attachs: arquivo anexado na publicação (mais detalhes do parâmetro [aqui](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-Attachment)).
- docSecurity: segurança do documento que será publicado (mais detalhes do parâmetro [aqui](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentSecurityConfigDto)).
- docApprovers: aprovadores do documento que será publicado (mais detalhes do parâmetro [aqui](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ApproverDto)).
- relDocs: documentos relacionados ao documento que será publicado (mais detalhes do parâmetro [aqui](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-RelatedDocumentDto)).

[Exemplo de XML](/download/attachments/73084007/createDocument.xml?version=1&modificationDate=1559583184060&api=v2).

Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WebServiceMessageArray).

Estrutura de retorno com sucesso

[?](#)

| `````````1````Política de uso````295````1000````ok````````` |
| --- |

Estrutura de retorno com erro

[?](#)

| `````````0````````0````0````Arquivo principal do documento deve ser informado!``````` |
| --- |

Veja nosso exemplo no [repositório do fluig](https://git.fluig.com/projects/SAMPLES). Utilize o arquivo **dataset-create-document**.

createDocumentWithApprovementLevels

Cria um documento com nível de aprovação.

Método:

createDocumentWithApprovementLevels(String user, String password, int companyId, [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)[] docDtos, Attachment[] attachs, [DocumentSecurityConfigDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentSecurityConfigDto)[] docSecurity, [ApproverWithLevelDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ApproverWithLevelDto)[] docApproversLevels, [ApprovalLevelDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ApprovalLevelDto)[] levels, RelatedDocumentDto[] relDocs)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- docDtos: documento que será publicado.
- attachs: arquivo anexado na publicação.
- docSecurity: segurança do documento que será publicado.
- docApproversLevel: nível de aprovação que os aprovadores do documento estão inseridos.
- levels: níveis de aprovação que o documento terá.
- relDocs: documentos relacionados ao documento que será publicado.

Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WebServiceMessageArray).

Estrutura de retorno com sucesso

[?](#)

| `````````1````Política de uso````296````1000````ok``````` |
| --- |

Estrutura de retorno com erro

[?](#)

| `````````0````````0````0````Nao foi informado um ApprovalLevelDto com o levelId 1``````` |
| --- |

createSimpleDocument

Cria um documento simples.

Método:

createSimpleDocument(String user, String password, int company, int parentDocumentId, String publisherId, String documentDescription, Attachment[] attachments)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- parentDocumentId: número da pasta pai.
- publisherId: matrícula do usuário que publicará o documento.
- documentDescription: descrição do documento.
- attachments: arquivo anexado na publicação (para utilização via TDS é necessário instanciar a classe Attachment. Confira um exemplo de utilização em [Criação de documento a partir do método createSimpleDocument](https://tdn.totvs.com/pages/viewpage.action?pageId=223914729)).

Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WebServiceMessageArray).

Estrutura de retorno com sucesso

[?](#)

| `````````1````oioioi````299````1000````ok``````` |
| --- |

Estrutura de retorno com erro

[?](#)

| `````````0````````0````0````Arquivo Principal não encontrado C:\fluig\volume\upload\adm\Política de uso.pdf\``````` |
| --- |

createSimpleDocumentPrivate

Cria um documento simples na pasta particular.

Método:

createSimpleDocumentPrivate(String colleagueId, String password, int companyId, int parentDocumentId, String documentDescription, Attachment[] attachments)

Parâmetros:

- colleagueId: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- parentDocumentId: número da pasta pai.
- documentDescription: descrição do documento.
- attachments: arquivo anexado na publicação.

Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WebServiceMessageArray).

Estrutura de retorno com sucesso

[?](#)

| `````````1````oioioi````300````1000````ok``````` |
| --- |

Estrutura de retorno com erro

[?](#)

| `````````0````````0````0````Arquivo Principal não encontrado C:\fluig\volume\upload\adm\Política de uso.pdf\``````` |
| --- |

deleteDocument

Exclui um documento e o envia para a lixeira.

Método:

deleteDocument(String user, String password, int companyId, int documentId, String colleagueId)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- documentId: número do documento que será excluído.
- colleagueId: matrícula do usuário.

Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WebServiceMessageArray).

Estrutura de retorno com sucesso

[?](#)

| `````````1````oioioi````300````1000````ok``````` |
| --- |

Estrutura de retorno com erro

[?](#)

| `````````0````````0````0````Documento inexistente ou permissão insuficiente.``````` |
| --- |

destroyDocument

Exclui um documento da lixeira.

Método:

destroyDocument(String user, String password, int companyId, int documentId, String colleagueId)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- documentId: número do documento que será excluído.
- colleagueId: matrícula do usuário.

Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WebServiceMessageArray).

Estrutura de retorno com sucesso

[?](#)

| `````````1````oioioi````300````1000````ok``````` |
| --- |

Estrutura de retorno com erro

[?](#)

| `````````0````````0````0````Por segurança, não é possível destruir o documento sem antes excluí-lo.``````` |
| --- |

destroyDocumentApproval

Exclui documento pendente de aprovação.

Metodo:

destroyDocumentApproval(String userId, String password, int companyId, int documentId, String publisherId)

Parâmetros:

- user: código do usuário de integração.
- password: senha do usuário de integração.
- companyId: código da empresa.
- documentId: código do documento a excluido.
- publisherId: código do publicador.

Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WebServiceMessageArray).

Estrutura de retorno com sucesso

[?](#)

| `````````1````oioioi````298````1000````ok``````` |
| --- |

Estrutura de retorno com erro

[?](#)

| `````````0````````0````0````Documento não encontrado.``````` |
| --- |

findMostPopularDocuments

Retorna os documentos mais acessados no fluig que o usuário tenha permissão de acesso.

Método:

findMostPopularDocuments(String user, String password, int companyId, String colleagueId, int nr_resultados)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- colleagueId: matrícula do usuário.
- nr_resultados: quantidade de documentos que serão retornados.

Retorno: [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)[].

Atributos de Retorno:

- accesCount
- activeVersion
- additionalComments
- allowMuiltiCardsPerUser
- approved
- colleagueId
- companyId
- crc
- createDate
- datasetName
- deleted
- documentDescription
- documentId
- documentType
- documentTypeId
- downloadEnabled
- draft
- expirationDate
- expires
- iconId
- imutable
- indexed
- inheritSecurity
- isEncrypted
- keyWord
- lastModifiedDate
- metaListId
- metaListRecordId
- parentDocumentId
- permissionType
- phisicalFile
- phisicalFileSize
- privateDocument
- protectedCopy
- publisherId
- restrictionType
- rowId
- securityLevel
- topicId
- translated
- UUID
- updateIsoProperties
- userNotify
- validationStartDate
- version
- versionDescription
- volumeId

findMostPopularDocumentsOnDemand

Retorna os documentos mais acessados no fluig que o usuário tenha permissão de acesso, paginados.

Método:

findMostPopularDocuments(int companyId, String user, String password, String colleagueId, int limit, int lastRowId)

Parâmetros:

- companyId: código da empresa.
- user: login do usuário.
- password: senha do usuário.
- colleagueId: matrícula do usuário.
- limit: número de registros a serem retornados.
- lastRowId: última linha retornada.

Retorno: [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)[].

Atributos de Retorno:

- accesCount
- activeVersion
- additionalComments
- allowMuiltiCardsPerUser
- approved
- colleagueId
- companyId
- crc
- createDate
- datasetName
- deleted
- documentDescription
- documentId
- documentType
- documentTypeId
- downloadEnabled
- draft
- expirationDate
- expires
- iconId
- imutable
- indexed
- inheritSecurity
- isEncrypted
- keyWord
- lastModifiedDate
- metaListId
- metaListRecordId
- parentDocumentId
- permissionType
- phisicalFile
- phisicalFileSize
- privateDocument
- protectedCopy
- publisherId
- restrictionType
- rowId
- securityLevel
- topicId
- translated
- UUID
- updateIsoProperties
- userNotify
- validationStartDate
- version
- versionDescription
- volumeId

findRecycledDocuments

Retorna os documentos da lixeira.

Método:

findRecycledDocuments(String user, String password, int companyId, String colleagueId)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- colleagueId: matrícula do usuário.

Retorno: [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)[].

Atributos de Retorno:

- accesCount
- activeVersion
- additionalComments
- allowMuiltiCardsPerUser
- approved
- colleagueId
- companyId
- crc
- createDate
- datasetName
- deleted
- documentDescription
- documentId
- documentType
- documentTypeId
- downloadEnabled
- draft
- expirationDate
- expires
- iconId
- imutable
- indexed
- inheritSecurity
- isEncrypted
- keyWord
- lastModifiedDate
- metaListId
- metaListRecordId
- parentDocumentId
- permissionType
- phisicalFile
- phisicalFileSize
- privateDocument
- protectedCopy
- publisherId
- restrictionType
- rowId
- securityLevel
- topicId
- translated
- UUID
- updateIsoProperties
- userNotify
- validationStartDate
- version
- versionDescription
- volumeId

getActiveDocument

Retorna um documento ativo.

Método:

getActiveDocument(String user, String password, int companyId, int nrDocumentId, String colleagueId)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- nrDocumentId: número do documento.
- colleagueId: matrícula do usuário.

Retorno: [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)[].

getApprovers

Retorna os aprovadores de um documento.

Método:

getApprovers(String user, String password, int companyId, int nrDocumentId, int version)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- nrDocumentId: número do documento.
- version: número da versão do documento.

Retorno: [ApproverWithLevelDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ApproverWithLevelDto)[].

Atributos de Retorno:

- approverType
- colleagueId
- companyId
- documentId
- levelId
- version

getDocumentApprovalHistory

Retorna o histórico de aprovações do documento solicitado.

Metodo:

getDocumentApprovalHistory(String user, String password, int companyId, int documentId, int version)

Parâmetros:

- user: código do usuário de integração.
- password: senha do usuário de integração.
- companyId: código da empresa.
- documentId: código do documento que se deseja visualizar o status.
- version: versão do documento (caso seja informada a versão 0 sera solicitada a ultima versão do documento).

Retorno: [DocumentApprovementHistoryDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentApprovementHistoryDto).

Atributos de Retorno:

- colleagueId
- documentVersion
- iterationSequence
- levelId
- movementSequence
- observation
- signed
- status

getDocumentApprovalStatus

Retorna o status do documento com relação a aprovação. O status do documento pode ser:

0 - Aprovado.

1 - Rejeitado.

2- Em aprovação.

Método:

getDocumentApprovalStatus(String user, String password, int companyId, int documentId, int version)

Parâmetros:

- user: código do usuário de integração.
- password: senha do usuário de integração.
- companyId: código da empresa.
- documentId: código do documento que se deseja visualizar o status.
- version: versão do documento (caso seja informada a versão 0 sera solicitada a ultima versão do documento).

Retorno: [DocumentApprovalStatusDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentApprovalStatusDto).

Atributos de Retorno:

- companyId
- documentId
- status
- version

getDocumentByExternalId

Retorna um documento pelo código externo.

Método:

getDocumentByExternalId(String user, String password, int companyId, String externalDocumentId, String colleagueId)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- externalDocumentId: código externo do documento.
- colleagueId: matrícula do usuário.

Retorno: [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)[].

getDocumentContent

Retorna o byte do arquivo físico de um documento, caso o usuário tenha permissão para acessá-lo.

Método:

getDocumentContent(String user, String password, int companyId, int nrDocumentId, String colleagueId, int documentoVersao, String nomeArquivo)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- nrDocumentId: número do documento.
- colleagueId: matrícula do usuário.
- documentVersao: número da versão do documento.
- nomeArquivo: nome do arquivo.

Retorno: Lista de byte[].

getDocumentVersion

Retorna a versão de um documento.

Método:

getDocumentVersion(String user, String password, int companyId, int nrDocumentId, int version, String colleagueId)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- nrDocumentId: número do documento.
- version: número da versão do documento.
- colleagueId: matrícula do usuário.

Retorno: [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)[].

Atributos de Retorno:

- accesCount
- activeVersion
- additionalComments
- allowMuiltiCardsPerUser
- approved
- colleagueId
- companyId
- crc
- createDate
- datasetName
- deleted
- documentDescription
- documentId
- documentType
- documentTypeId
- downloadEnabled
- draft
- expirationDate
- expires
- iconId
- imutable
- indexed
- inheritSecurity
- isEncrypted
- keyWord
- lastModifiedDate
- metaListId
- metaListRecordId
- parentDocumentId
- permissionType
- phisicalFile
- phisicalFileSize
- privateDocument
- protectedCopy
- publisherId
- restrictionType
- rowId
- securityLevel
- topicId
- translated
- UUID
- updateIsoProperties
- userNotify
- validationStartDate
- version
- versionDescription
- volumeId

getRelatedDocuments

Retorna todos os documentos relacionados de um documento.

Método:

getRelatedDocuments(String user, String password, int companyId, int nrDocumentId, int version)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- nrDocumentId: número do documento.
- version: número da versão do documento.

Retorno: [RelatedDocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-RelatedDocumentDto.1).

Atributos de Retorno:

- companyId
- documentId
- relatedDocumentId
- version

getReportSubjectId

Retorna o código do assunto de relatórios dentro do fluig.

Método:

getReportSubjectId(String user, String password, int companyId)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.

Retorno: topicId : int.

getSecurity

Retorna a segurança de um documento.

Método:

getSecurity(String user, String password, int company, int nrDocumentId, int version)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- nrDocumentId: número do documento.
- version: número da versão do documento.

Retorno: [DocumentSecurityConfigDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentSecurityConfigDto)[].

Atributos de Retorno:

- attributionType
- attributionValue
- companyId
- documentId
- permission
- securityLevel
- sequence
- showContent
- version

getUserPermissions

Retorna as permissões do usuário sobre um documento.

Método:

getUserPermissions(int companyId, String user, int nrDocumentId, int version)

Parâmetros:

- companyId: código da empresa.
- user: login do usuário.
- nrDocumentId: número do documento.
- version: número da versão do documento.

Retorno: Integer, retorna o valor correspondente a permissão..

Atributos de Retorno:

- result

moveDocument

Move documentos para pasta destino.

Método:

moveDocument(String user, String password, int companyId, int[] documentIds, String colleagueId, int destfolder)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- documentIds: lista com os números dos documentos que serão movidos.
- colleagueId: matrícula do usuário com permissão para mover o documento
- destFolder: número da pasta de destino.

Retorno: Lista String[].

Estrutura de retorno com sucesso

[?](#)

| `[OK] - 299` |
| --- |

Estrutura de retorno com erro

[?](#)

| `[NOK] - Usuário sem permissão para movimentar esse documento! Documento: 299.` |
| --- |

removeSecurity

Remove a segurança de um documento.

Método:

removeSecurity(String user, String password, int companyId, int documentId, int version)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- documentId: número do documento.
- version: número da versão do documento.

Retorno: Não há retorno.

restoreDocument

Restaura um documento da lixeira.

Método:

restoreDocument(String user, String password, int companyId, int documentId, String colleagueId)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- documentId: número do documento que será restaurado.
- colleagueId: matrícula do usuário.

Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WebServiceMessageArray).

Estrutura de retorno com sucesso

[?](#)

| `````````1````oioioi````297````1000````ok``````` |
| --- |

Estrutura de retorno com erro

[?](#)

| `````````0````````0````0````Usuário john não possui permissão para restaurar o documento 297``````` |
| --- |

updateDocument

Altera um documento.

Método:

updateDocument(String user, String password, int companyId, [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)[] docDtos, [Attachment](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-Attachment)[] attachs,  [DocumentSecurityConfigDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentSecurityConfigDto)[] docSecurity,[ApproverDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ApproverDto)[] docApprovers, [RelatedDocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-RelatedDocumentDto)[] relDocs)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- docDtos: documento que será publicado (mais detalhes do parâmetro [aqui](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)).
- attachs: arquivo anexado na publicação (mais detalhes do parâmetro [aqui](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-Attachment)).
- docSecurity: segurança do documento que será publicado  (mais detalhes do parâmetro [aqui](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentSecurityConfigDto) ).
- docApprovers: aprovadores do documento que será publicado  (mais detalhes do parâmetro [aqui](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ApproverDto) ).
- relDocs: documentos relacionados ao documento que será publicado  (mais detalhes do parâmetro [aqui](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-RelatedDocumentDto) ).

Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WebServiceMessageArray).

Estrutura de retorno com sucesso

[?](#)

| `````````1````Política de uso````295````2000````ok````````` |
| --- |

Estrutura de retorno com erro

[?](#)

| `````````0````````0````0````O usuário john não tem permissão para acessar o documento 295.``````` |
| --- |

updateDocumentWithApprovementLevels

Altera um documento com nível de aprovação.

Métodos:

updateDocumentWithApprovementLevels(String user, String password, int companyId, [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)[] docDtos, Attachment[] attach, [DocumentSecurityConfigDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentSecurityConfigDto)[] docSecutiry, ApproverWithLevelDto[]  docApprovers, [ApprovalLevelDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ApprovalLevelDto)[] levels, RelatedDocumentDto[] relDocs)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- docDtos: documento que será alterado.
- attachs: arquivo anexado na alteração.
- docSecurity: segurança do documento que será alterado.
- docApprovers: nível de aprovação que os aprovadores do documento estão inseridos.
- levels: níveis de aprovação que o documento terá.
- relDocs: documentos relacionados ao documento que será alterado.

Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WebServiceMessageArray).

Estrutura de retorno com sucesso

[?](#)

| `````````1````Política de uso````295````2000````ok``````` |
| --- |

Estrutura de retorno com erro

[?](#)

| `````````0````````0````0````O usuário john não tem permissão para acessar o documento 295.``````` |
| --- |

updateGroupSecurityType

Modifica o tipo da segurança dos grupos na permissão e na restrição. Existem duas opções que são representadas por um inteiro:

0 - TODOS os usuários dos Grupos.

1 - SOMENTE usuários comuns dos grupos.

Método:

updateGroupSecurityType(String user, String password, int companyId, int documentId, int version, int permissionType, int restrictionType, String colleagueId)

Parâmetros:

- user: código do usuário de integração.
- password: senha do usuário de integração.
- companyId: código da empresa.
- documentId: código do documento.
- version: versão do documento.
- permissionType: tipo da permissão (0 - TODOS os usuários dos Grupos / 1 - SOMENTE usuários comuns dos grupos)
- restrictionType: tipo da restrição (0 - TODOS os usuários dos Grupos / 1 - SOMENTE usuários comuns dos grupos)
- colleagueId: matrícula do usuário

Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WebServiceMessageArray).

Estrutura de retorno com sucesso

[?](#)

| `````````1````Política de uso````295````2000````ok``````` |
| --- |

Estrutura de retorno com erro

[?](#)

| `````````0````````0````0````O Documento herda segurança do pai, desmarque a opção para alterar esta propriedade!``````` |
| --- |

updateSimpleDocument

Altera de forma simples um documento.

Método:

updateSimpleDocument(String username, String password, int companyId, int documentId, String publisherId, String documentDescription, Attachment[] attachments)

Parâmetros:

- username: login do usuário de integração.
- password: senha do usuário de integração.
- companyId: código da empresa.
- documentId: número do documento que será alterado.
- publisherId: matrícula do usuário que realizará a alteração do documento.
- documentDescription: descrição do documento.
- attachments: arquivos anexados na alteração.

Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WebServiceMessageArray).

Estrutura de retorno com sucesso

[?](#)

| `````````1````Política de uso````295````3000````ok``````` |
| --- |

Estrutura de retorno com erro

[?](#)

| `````````0````````0````0````O usuário john não tem permissão para acessar o documento 295.``````` |
| --- |

validateIntegrationRequirements

Verifica a integração do usuário no fluig.

Método:

validateIntegrationRequirements (String user, String password, int companyId)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.

Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WebServiceMessageArray).

Estrutura de retorno com sucesso

[?](#)

| `````````1````Política de uso````295````3000````ok``````` |
| --- |

Estrutura de retorno com erro

[?](#)

| `````````0````````0````0````O usuário john não tem permissão para acessar o documento 295.``````` |
| --- |

**Quadro 14: Métodos da DocumentService**

#### Exemplo de utilização

Faça o download da classe [DocumentServiceClient.java](/download/attachments/73084007/DocumentServiceClient.java?version=10&modificationDate=1435167467000&api=v2), esta exemplifica a utilização dos principais métodos da classe DocumentService.

Nota

Alguns campos, entre eles *Approved*, *ApprovedDate*, *CreateDate*, *LastModifiedDate*, apesar de aparecerem no exemplo disposto não podem ser modificados, pois se tratam de campos de uso interno do sistema.
Os campos são mantidos no objeto do Documento pois são necessários para o resgate dessas informações.

Integrações

Para os métodos de criação de documento (createDocument, createSimpleDocument, etc...) pode-se utilizar um usuário para autenticação e outro para publicação, pois pode ser necessário validar a permissão de outro usuário no momento de criar o documento no fluig.

Neste caso, quando o arquivo a ser publicado não é enviado na requisição (campo filecontent do parâmetro Attachment), ele poderá ser obtido na pasta de upload do usuário publicador, ou do usuário utilizado para autenticar no fluig via WS. Para isso, o documento deve estar na pasta de upload do usuário em questão, o que pode ser feito via FTP. Isso pode ser útil em integrações que utilizam o mesmo usuário (integrador) para autenticar no FTP e nos serviços.

# ECMFavoritesService

Webservice responsável por interagir com os documentos e processos favoritos do fluig. Pode ser utilizado para pesquisar os documentos e processos favoritos de cada usuário.

#### Métodos

| addDocumentToFavorites | Adiciona um documento aos favoritos do usuário informado.Método:addDocumentToFavorites(String username, String password, int companyId, int nrDocument, int nrVersao,  String colleagueId)Parâmetros:username: login do usuário.password: senha do usuário.companyId: código da empresa.nrDocument: número do documentonrVersao: versão do documentocolleagueId : matrícula do usuário.Retorno: void. |
| --- | --- |
| addProcessToFavorites | Adiciona um processo aos favoritos do usuário informado.Método:addProcessToFavorites(String username, String password, int companyId,String processId, String colleagueId)Parâmetros:username: login do usuário.password: senha do usuário.companyId: código da empresa.processId: código do processocolleagueId : matrícula do usuário.Retorno: void. |
| findFavorites | Retorna os documentos favoritos do usuário.Método:findFavorites(String user, String password, int companyId, String colleagueId)Parâmetros:user: login do usuário.password: senha do usuário.companyId: código da empresa.colleagueId : matrícula do usuário.Retorno: DocumentDto[]. |
| findFavoritesOnDemand | Retorna os documentos favoritos do usuário, paginados.Método:findFavoritesOnDemand(String user, String password, int companyId, String colleagueId, int limit, int lastRowId)Parâmetros:user: login do usuário.password: senha do usuário.companyId: código da empresa.colleagueId : matrícula do usuário.limit: número de registros a serem retornados.lastRowId: última linha retornada.Retorno: DocumentDto[]. |
| findFavoritesProcess | Retorna os processos favoritos do usuário.Método:findFavoritesProcess (String user, String password, int companyId, String colleagueId)Parâmetros:user: login do usuário.password: senha do usuário.companyId: código da empresa.colleagueId : matrícula do usuário.Retorno: ProcessDefinitionVersionDto[] . |
| findFavoritesProcessOnDemand | Retorna os processos favoritos do usuário, paginados.Método:findFavoritesProcess (String user, String password, int companyId, String colleagueId)Parâmetros:user: login do usuário.password: senha do usuário.companyId: código da empresa.colleagueId : matrícula do usuário.limit: número de registros a serem retornados.lastRowId: última linha retornada.Retorno: ProcessDefinitionVersionDto[] . |
| isFavoriteDocument | Verifica se documento é favorito.Método:isFavoriteDocument(String username, String password, int companyId, int nrDocument, String colleagueId)Parâmetros:username: login do usuário de integração.password: senha do usuário.companyId: código da empresa.nrDocument: código do documento.colleagueId: matricula do usuário.Retorno: Boolean, documento favoritado. |
| removeFavoriteDocument | Remove um documento dos favoritos do usuário informado.Método:removeFavoriteDocument (String username, String password, int companyId, int nrDocument,  String colleagueId)Parâmetros:username: login do usuário.password: senha do usuário.companyId: código da empresa.nrDocument: número do documentocolleagueId : matrícula do usuário.Retorno: void. |
| removeFavoriteProcess | Remove um processo dos favoritos do usuário informado.Método:addProcessToFavorites(String username, String password, int companyId,String processId, String colleagueId)Parâmetros:username: login do usuário.password: senha do usuário.companyId: código da empresa.processId: código do processo.colleagueId : matrícula do usuário.Retorno: void. |

**Quadro 15: Métodos da FavoritesService**

****

#### Exemplo de utilização

Faça o download da classe [ECMFavoritesService.java](https://git.fluig.com/projects/SAMPLES/repos/samples-webservice/browse/src/samples/ECMFavoritesService.java), esta exemplifica a utilização dos principais métodos da classe FavoritesService.

# ECMFolderService

Webservice responsável por realizar operações referentes a pastas no fluig. Pode ser utilizado para criar, alterar, excluir e pesquisar pastas, entre outros recursos.

#### Métodos

| createFolder | Cria uma pasta.Método:createFolder(String user, String password, int companyId, DocumentDto[] docdtos, DocumentSecurityConfigDto[] docsecurity, ApproverDto[] docapprovers )Parâmetros:user: login do usuário.password: senha do usuário.companyId: código da empresa.docdtos: pasta que será criada.docsecurity: segurança da pasta.docapprovers: aprovadores da pasta.Retorno: WebServiceMessageArray.Estrutura de retorno com sucesso
?`````````1````Clientes````303````1000````ok``````` |
| --- | --- |

Estrutura de retorno com erro

[?](#)

| `````````0````````0````0````Login e senha inválidos``````` |
| --- |

createFolderWithApprovementLevels

Cria uma pasta com nível de aprovação.

Método:

createFolderWithApprovementLevels(String user, String password, int companyId, [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)[] docdtos, [DocumentSecurityConfigDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentSecurityConfigDto)[] docsecurity, [ApproverWithLevelDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ApproverWithLevelDto)[] docapprovers, [ApprovalLevelDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ApprovalLevelDto)[] levels)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- docdtos: pasta que será criada.
- docsecurity: segurança da pasta.
- docapprovers: aprovadores em níveis.
- levels: níveis de aprovação da pasta.

Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-CardEventDtoArray).

Estrutura de retorno com sucesso

[?](#)

| `````````1````Clientes````303````1000````ok``````` |
| --- |

Estrutura de retorno com erro

[?](#)

| `````````0````````0````0````Nao foi informado um ApprovalLevelDto com o levelId 1``````` |
| --- |

createSimpleFolder

Cria uma pasta simples.

Método:

createSimpleFolder(String user, String password, int companyId, int parentDocumentId, String publisherId, String documentDescription)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- parentDocumentId: número do documento pai.
- publisherId: matrícula do usuário publicador.
- documentDescription: descrição da pasta.

Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-CardEventDtoArray).

Estrutura de retorno com sucesso

[?](#)

| `````````1````Clientes````303````1000````ok``````` |
| --- |

Estrutura de retorno com erro

[?](#)

| `````````0````````0````0````Documento Pai Inválido``````` |
| --- |

deleteDocument

Exclui uma pasta e envia para a lixeira.

Método:

deleteDocument(String user, String password, int companyId, int documentId, String colleagueId)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- documentId: número da pasta.
- colleagueId: matrícula do usuário.

Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-CardEventDtoArray).

Estrutura de retorno com sucesso

[?](#)

| `````````1````Clientes````303````1000````ok``````` |
| --- |

Estrutura de retorno com erro

[?](#)

| `````````0````````0````0````Documento não encontrado: 303``````` |
| --- |

destroyDocument

Exclui uma pasta da lixeira.

Método:

destroyDocument(String user, String password, int companyId, int documentId, String colleagueId)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- documentId: número da pasta.
- colleagueId: matrícula do usuário.

Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-CardEventDtoArray).

Estrutura de retorno com sucesso

[?](#)

| `````````1````Clientes````303````1000````ok``````` |
| --- |

Estrutura de retorno com erro

[?](#)

| `````````0````````0````0````Por segurança, não é possível destruir o documento sem antes excluí-lo.``````` |
| --- |

findRecycledDocuments

Retorna todos os documentos da lixeira de um usuário.

Método:

findRecycledDocuments(String user, String password, int companyId, String colleagueId)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- colleagueId: matrícula do usuário.

Retorno: [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)[].

getApprovers

Retorna os aprovadores de uma pasta.

Método:

getApprovers(String user, String password, int companyId, int nrDocumentId)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- nrDocumentId: número da pasta.

Retorno: [ApproverWithLevelDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ApproverWithLevelDto)[].

getChildren

Retorna todos os documentos de uma pasta.

Método:

getChildren(String user, String password, int companyId, int documentId, String colleagueId)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- documentId: número da pasta.
- colleagueId: matrícula do usuário.

Retorno: [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)[].

getFolder

Retorna uma pasta.

Método:

getFolder(String user, String password, int companyId, int nrDocumentId, String colleagueId )

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- nrDocumentId: número da pasta.
- colleagueId: matrícula do usuário origem.

Retorno: [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)[].

getPrivateChildren

Retorna todos os documentos de uma pasta particular.

Método:

getPrivateChildren(String user, String password, int companyId, int parentDocumentId)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- documentId: número da pasta.

Retorno: [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)[].

getRootFolders

Retorna as pastas root que um usuário tem acesso, exceto a pasta particular.

Método:

getRootFolders(String user, String password, int companyId, String colleagueId)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- colleagueId: matrícula do usuário.

Retorno: [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)[].

getSecurity

Retorna a segurança de uma pasta.

Método:

getSecurity(String user, String password, int companyId, int nrDocumentId)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- nrDocumentId: número da pasta.

Retorno: [DocumentSecurityConfigDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentSecurityConfigDto)[].

getSubFolders

Retorna todas as subpastas e arquivos de um pasta.

Método:

getSubFolders(String user, String password, int companyId, int documentId, String colleagueId)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- documentId: número da pasta.
- colleagueId: matrícula do usuário.

Retorno: [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)[].

getSubFoldersOnDemand

Retorna todas as subpastas e arquivos de uma pasta, paginados.

Método:

getSubFoldersOnDemand(int companyId, String user, String password, int documentId, boolean privatefolder, String[] documenttypes, int limit , int lastRowId, String colleagueId)

Parâmetros:

- companyId: código da empresa.
- user: login do usuário.
- password: senha do usuário.
- documentId: número da pasta.
- privatefolder: identifica se é uma pasta particular.
- documenttypes: tipos de documentos das pastas.
- limit: número de registros a serem retornados.
- lastRowId: última linha retornada.
- colleagueId: matrícula do usuário.

Retorno: [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)[].

getSubFoldersPermission

Retorna todas as subspastas em que o usuário tenha a permissão informada.

Método:

getSubFoldersPermission(String user, String password, int companyId, int documentId, String colleagueId, int permission)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- documentId: número da pasta particular.
- colleagueId: matrícula do usuário.
- permission: permissão sobre a pasta.

Retorno: [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)[].

getSubPrivateFolders

Retorna todas as subpastas de uma pasta particular.

Método:

getSubPrivateFolders(String colleagueId, String password, int companyId, int documentId)

Parâmetros:

- colleagueId: matrícula do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- documentId: número da pasta particular.

Retorno: [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)[].

getUserPermissions

Retorna a permissão de um usuário sobre uma pasta.

Método:

getUserPermissions(int companyId, String user, int nrDocumentId, int version)

Parâmetros:

- companyId: código da empresa.
- user: matrícula do usuário.
- nrDocumentId: número da pasta.
- version: versão da pasta.

Retorno: Integer, referente ao nível de permissão do usuário.

restoreDocument

Restaura uma pasta da lixeira.

Método:

restoreDocument(String user, String password, int companyId, int documentId, String colleagueId)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- documentId: número da pasta.
- colleagueId: matrícula do usuário.

Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WebServiceMessageArray).

Estrutura de retorno com sucesso

[?](#)

| `````````1````````310````0````ok``````` |
| --- |

Estrutura de retorno com erro

[?](#)

| `````````0````````0````0````Documento não encontrado: 303``````` |
| --- |

updateFolder

Altera uma pasta.

Método:

updateFolder(String user, String password, int companyId, [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)[] docdtos, [DocumentSecurityConfigDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentSecurityConfigDto)[] docsecurity, ApproverDto[] docapprovers)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- docdtos: pasta que será alterada.
- docsecurity: segurança da pasta.
- docapprovers: aprovadores da pasta.

Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WebServiceMessageArray).

Estrutura de retorno com sucesso

[?](#)

| `````````1````````310````0````ok``````` |
| --- |

Estrutura de retorno com erro

[?](#)

| `````````0````````0````0````Documento não encontrado: 303``````` |
| --- |

updateFolderWithApprovementLevels

Altera uma pasta com nível de aprovação.

Método:

updateFolderWithApprovementLevels(String user, String password, int companyId, [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)[] docdtos, [DocumentSecurityConfigDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentSecurityConfigDto)[] docsecurity, ApproverWithLevelDto[] docapprovers, [ApprovalLevelDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ApprovalLevelDto)[] levels)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- docdtos: pasta que será alterada.
- docsecurity: segurança da pasta.
- docapprovers: aprovadores em níveis.
- levels: níveis de aprovação da pasta.

Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WebServiceMessageArray).

Estrutura de retorno com sucesso

[?](#)

| `````````1````````310````0````ok``````` |
| --- |

Estrutura de retorno com erro

[?](#)

| `````````0````````0````0````Documento não encontrado: 303``````` |
| --- |

updateSimpleFolder

Altera de forma simples uma pasta.

Método:

updateSimpleFolder(String user, String Password, int companyId, [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)[] docdtos)

Parâmetros:

- user: login do usuário
- password: senha do usuário
- companyId: código da empresa
- docdtos: pasta que será alterada.

Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WebServiceMessageArray).

Estrutura de retorno com sucesso

[?](#)

| `````````1````````310````0````ok``````` |
| --- |

Estrutura de retorno com erro

[?](#)

| `````````0````````0````0````Documento não encontrado: 303``````` |
| --- |

**Quadro 16: Métodos da FolderService**

****

#### Exemplo de utilização

Faça o download da classe [FolderServiceClient.java](/download/attachments/73084007/FolderServiceClient.java?version=1&modificationDate=1378475537000&api=v2), esta exemplifica a utilização dos principais métodos da classe FolderService.

# ECMGlobalParamService

Webservice responsável por interagir com as configurações dos parâmetros gerais do fluig. Pode ser utilizado para criar, alterar e pesquisar os parâmetros gerais.

#### Métodos

| createGlobalParam | Cria parâmetros gerais para uma empresa.Método:createGlobalParam(String username, String password, int companyId, GlobalParamDto[] global)Parâmetros:username: login do usuário.password: senha do usuário.companyId: código da empresa.global: parâmetros gerais da empresa.Retorno: String. |
| --- | --- |
| getGlobalParam | Retorna os parâmetros gerais de uma empresa.Método:getGlobalParam(String username, String password, int companyId)Parâmetros:username: login do usuário.password: senha do usuário.companyId: código da empresa.Retorno: GlobalParamDto[]. |
| getVolumes | Retorna os volumes da empresa.Método:getVolumes(String user, String password, int companyId)Parâmetros:user: login do usuário.password: senha do usuário.companyId: código da empresa.Retorno: VolumeDto[]. |
| updateConfigurations | Altera as configurações do sistema.Método:updateConfigurations( String username,String password, int companyId, String dbDriver, String dbUser, String dbPassword, String dbServer,String dbPort,String dbScheme, String dbInstance, String emailServer, String emailPort, String emailSender, boolean emailDefaultSender, String emailUser, String emailPassword, boolean emailTLS,String paramsRMTPTPort, String lsType, String paramsLSHost, String paramsLSPort, String paramsOpenOfficeDir, String paramsOpenOfficePorts, String portsSetName)Parâmetros:username: login do usuário.password: senha do usuário.companyId: código da empresa.dbDriver: driver do banco de dados (MySql- com.mysql.jdbc.Driver. SQLServer - net.sourceforge.jtds.jdbc.Driver. Oracle -oracle.jdbc.driver.OracleDriver)dbUser: username banco de dados.dbPassword: password banco de dados.dbServer: servidor de conexão do banco de dados.dbPort: porta servidor banco de dados.dbScheme: database.dbInstance: instância do banco, utilizada para SQLServer, caso não seja o caso passar em branco ("").mailServer: nome do servidor SMTP.emailSender: e-mail do remetente padrão do produto.emailPort: porta do servidor SMTP.emailDefaultSender:emailUser: usuário de email, somente se o servidor necessitar de autenticação.emailPassword: password do email, somente se o servidor necessitar de autenticação.emailTLS: servidor utilizará criptografia no envio de email (true/false)paramsRMTPTPort: porta utilizada pelo Flex.lsType: tipo de licença utilizada, LM/LS.paramsLSHost: servidor de licenças.paramsLSPort: porta servidor de licenças.paramsOpenOfficeDir: diretório de instalação do OpenOfficeparamsOpenOfficePorts: porta utilizado pelo OpenOfficeportsSetName: portas utilizadas pelo sistema (ports-default, ports-01, ports-02)Retorno: String.Atenção Método depreciado e não mais utilizável no fluig. |
| updateGlobalParam | Altera parâmetros gerais de uma empresa.Método:updateGlobalParam(String username, String password, int companyId, GlobalParamDto[] global)Parâmetros:username: login do usuário.password: senha do usuário.companyId: código da empresa.global: parâmetros gerais da empresa.Retorno: String. |

**Quadro 17: Métodos da GlobalParamService.**

****

#### Exemplo de utilização

Faça o download da classe [GlobalParamServiceClient.java](/download/attachments/73084007/GlobalParamServiceClient.java?version=1&modificationDate=1378475581000&api=v2), esta exemplifica a utilização dos principais métodos da classe GlobalParamService.

# ECMGroupService

Webservice responsável por realizar operações referentes a grupos no fluig. Pode ser utilizado para criar, alterar, excluir e procurar grupos, entre outros recursos.

#### Métodos

| createGroup | Cria um grupo no fluig.Método:createGroup(String username, String password, int companyId, GroupDto[] grupos)Parâmetros:username: login do usuário.password: senha do usuário.companyId: código da empresa.grupos: grupo que será criado.Retorno: String.Estrutura de retorno com sucesso
?`ok` |
| --- | --- |

Estrutura de retorno com erro

[?](#)

| `nok` |
| --- |

deleteGroup

Exclui um grupo do fluig.

Método:

deleteGroup(String username, String password, int companyId, String groupId)

Parâmetros:

- username: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- GroupId: código do grupo.

Retorno: String.

Estrutura de retorno com sucesso

[?](#)

| `````````1````````310````0````ok``````` |
| --- |

Estrutura de retorno com erro

[?](#)

| `````````0````````0````0````Documento não encontrado: 303``````` |
| --- |

getGroup

Retorna um grupo cadastrado no fluig.

Método:

getGroups(String username, String password, int companyId, String groupId)

Parâmetros:

- username: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- groupId: código do grupo.

Retorno: GroupDto[].

Atributos de Retorno:

- companyId
- groupDescription
- groupId

getGroups

Retorna todos os grupos cadastrados no fluig.

Método:

getGroups(String username, String password, int companyId)

Parâmetros:

- username: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.

Retorno: GroupDto[].

Atributos de Retorno:

- companyId
- groupDescription
- groupId

getGroupsByDescription

Retorna um grupo pela descrição.

Método:

getGroupsByDescription(String username, String password, int companyId, String desc)

Parâmetros:

- username: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- desc: descrição do grupo.

Retorno: GroupDto[].

Atributos de Retorno:

- companyId
- groupDescription
- groupId

getOcurrenceByKey

Retorna se existe configuração de segurança para atribuição e valor da atribuição.

Método:

getOcurrenceByKey(String username, String password, int companyId, int pIdiAtribuic, String pDesValAtribuic)

Parâmetros:

- username: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- pIdiAtribuic: código da atribuição.
- pDesValAtribuic: valor da atribuição.

Retorno: boolean.

updateGroup

Altera um grupo no fluig.

Método:

updateGroup(String username, String password, int companyId, GroupDto[] grupos)

Parâmetros:

- username: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- grupos: grupo que será alterado.

Retorno: String.

Estrutura de retorno com sucesso

[?](#)

| `ok` |
| --- |

Estrutura de retorno com erro

[?](#)

| `nok Não foi possível eliminar o grupo.` |
| --- |

**Quadro 18: Métodos da GroupService.**

****

#### Exemplo de utilização

Faça o download da classe [GroupServiceClient.java](/download/attachments/73084007/GroupServiceClient.java?version=1&modificationDate=1409227367000&api=v2), esta exemplifica a utilização dos principais métodos da classe GroupService.

# ECMOutstandingService

 Webservice responsável por interagir com as transferências de pendências do fluig. Pode ser utilizado para transferir pendências de um usuário para outro usuário.

#### Métodos 

| transfer | Transfere pendências de um usuário para outro usuário.Método:transfer(String user, String password, int companyId, String colleagueIdFrom, String colleagueIdTo, String[] parameters)Parâmetros:user: login do usuário.password: senha do usuário.companyId: código da empresa.colleagueIdFrom: matrícula do usuário origem (suas pendências serão tranferidas para o usuário destino).colleagueIdTo: matrícula do usuário destino (receberá as pendências do usuário origem).parameters: array de pendências que serão transferidas para o usuário destino.Retorno: String.Estrutura de retorno com sucesso
?`````Verificando Transferência de Permissão de Gravação em Pastas````[INFO] Todas as permissões foram transferidas.````================================================================================````Verificando Transferência de Documentos Ativos````[INFO] Transferido o documento 1 - XXXXX````[INFO] Transferido o documento 2 - YYYYY````================================================================================````Verificando Transferência de Documentos Aguardando Aprovação````[WARN] Nenhum registro encontrado.````================================================================================````Verificando Transferência de Tarefas Workflow Pendentes````[INFO] Tarefa pendente do workflow (Atividade - Solicitação: X) foi transferida para o colaborador user.````================================================================================````Verificando Transferência de Aprovador de Pastas/Documentos````[INFO] Transferido o aprovador do documento 293````================================================================================````Verificando Transferência de Aprovação de Documento````[WARN] Nenhum registro encontrado.````================================================================================````Verificando Transferência de Tasks da Central de Tarefas````================================================================================``` |
| --- | --- |

Estrutura de retorno com erro

[?](#)

| `ERROR: Usuário origem e destino não podem ser iguais, TRANSFERÊNCIA NÃO REALIZADA` |
| --- |

**Quadro 19: Métodos da OutstandingService.**

****

Exemplo de utilização

Faça o download da classe [OutstandingServiceClient.java](/download/attachments/73084007/OutstandingServiceClient.java?version=1&modificationDate=1378475645000&api=v2), esta exemplifica a utilização dos principais métodos da classe OutstandingService.

# ECMReportService

 Webservice responsável por realizar operações referentes a relatórios no fluig. Pode ser utilizado para criar, alterar, excluir e procurar relatórios, entre outros recursos.

#### Métodos

| createSimpleReport | Cria um relatório de maneira simplificada no fluig.Método:createSimpleReport(String username, String password, int companyId, int parentDocId, String reportDescription, Attachment[] attachments)Parâmetros:username: login do usuário.password: senha do usuário.companyId: código da empresa.parentDocId: código da pasta pai.reportDescription: descrição do relatório.attachments: anexos do relatório.Retorno: WebServiceMessageArray.Estrutura de retorno com sucesso
?`````````1````Colleague Report````312````1000````ok``````` |
| --- | --- |

Estrutura de retorno com erro

[?](#)

| `````````0````````0````0````Registro de Pasta Pai Inexistente no Banco de Dados!``````` |
| --- |

getActiveReport

Retorna um relatório ativo no fluig.

Método:

getActiveReport(int companyId, String username, String password, String documentId)

Parâmetros:

- companyId: código da empresa.
- username: login do usuário.
- password: senha do usuário.
- documentId: código do documento.

Retorno: [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto).

getAttachmentsList

Retorna uma lista de anexos do relatório no fluig.

Método:

getAttachmentsList(String username, String password, int companyId, String documentId)

Parâmetros:

- username: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- documentId: código do documento.

Retorno: Retorna lista de String[], com nome dos anexos.

getReportContent

Retorna o arquivo físico de um relatório.

Método:

getReportContent(String username, String password, int companyId, int nrDocumentId, String colleagueId, int documentoVersao, String fileName)

Parâmetros:

- username: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- nrDocumentId: número do documento.
- colleagueId: matrícula do usuário.
- documentoVersao: versão do documento.
- fileName: nome do arquivo.

Retorno: byte[].

getRepots

Retorna os relatórios disponíveis.

Método:

getRepots(String username, String password, int companyId)

Parâmetros:

- username: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.

Retorno: [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)[].

updateSimpleReport

Atualiza um relatório de maneira simplificada no fluig.

Método:

updateSimpleReport(String username, String password, int companyId, int docId, String reportDescription, Attachment[] attachments, String versionOption)

Parâmetros:

- username: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- docId: código da pasta pai.
- reportDescription: descrição do relatório.
- attachments: anexos do relatório.
- versionOption: informa se deseja atualizar a versão do relatório.

Retorno: [WebServiceMessageArray](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WebServiceMessageArray).

Estrutura de retorno com sucesso

[?](#)

| `````````1````Colleague Report````313````2000````ok``````` |
| --- |

Estrutura de retorno com erro

[?](#)

| `````````0````````0````0````Documento inexistente ou permissão insuficiente.``````` |
| --- |

**Quadro 20: Métodos da ReportService.**

****

#### Exemplo de utilização

Faça o download da classe [ReportServiceClient.java](/download/attachments/73084007/ReportService.java?version=1&modificationDate=1378476011000&api=v2), esta exemplifica a utilização dos principais métodos da classe ReportService.

# ECMSearchDocumentService

Webservice responsável por realizar operações referentes às buscas no fluig. Pode ser utilizado para buscar documentos utilizando a busca simples e avançada.

#### Métodos

| advancedSearchDocuments | Utiliza busca avançada.Método:advancedSearchDocuments(String user, String password, int companyId, String colleagueId, String content, boolean  findAllDocumentTypes, boolean  findFolders, boolean  findDocuments, boolean  findCardIndex, boolean  findCards, boolean  findExternalDocument, int  documentParentId, Date  startDate, Date  finalDate)Parâmetros:user: login do usuário.password: senha do usuário.companyId: código da empresa.colleagueId: matrícula do usuário.content: conteúdo da busca.findAllDocumentTypes: indica se deve buscar todos os tipos de documentos.findFolders: indica se deve buscar pastas.findDocuments: indica se deve buscar documentos.findCardIndex: indica se deve buscar formulários.findCards: indica se deve buscar registros de formulários.findExternalDocument: indica se deve buscar documentos externos.documentParentId: número do documento pai.startDate: data inicial.finalDate: data final.Retorno: SearchResultDto. |
| --- | --- |
| advancedSearchDocumentsWithMetadata | Utiliza busca avançada através das opções de metadados e campos customizados.Método:advancedSearchDocuments(String user, String password, int companyId, String colleagueId, String content, SearchFields[] metadata, SearchFields[] customfields, boolean  findAllDocumentTypes, boolean  findFolders, boolean  findDocuments, boolean  findCardIndex, boolean  findCards, boolean  findExternalDocument, int  documentParentId, Date  startDate, Date  finalDate)Parâmetros:user: login do usuário.password: senha do usuário.companyId: código da empresa.colleagueId: matrícula do usuário.content: conteúdo da busca.metadata: informações para busca a partir de metadados do arquivo, como publicador (usando o fieldName publisher), autor (author), descrição (description), descrição da versão/revisão (versionDescription), comentários (additionalComments), tags (tags), data de criação (createDate) e data da última alteração (lastUpdateDate).customfields: informações para busca a partir de metadados de campos customizados, informando o código do campo customizado como fieldName e valor a ser utilizado como filtro.findAllDocumentTypes: indica se deve buscar todos os tipos de documentos.findFolders: indica se deve buscar pastas.findDocuments: indica se deve buscar documentos.findCardIndex: indica se deve buscar formulários.findCards: indica se deve buscar registros de formulários.findExternalDocument: indica se deve buscar documentos externos.documentParentId: número do documento pai.startDate: data inicial.finalDate: data final.Retorno: SearchResultDto. |
| searchDocuments | Utiliza busca simples.Método:searchDocuments(String user, String password, int companyId, String colleagueId, String content)Parâmetros:user: login do usuário.password: senha do usuário.companyId: código da empresa.colleagueId: matrícula do usuário.content: conteúdo da busca.Retorno: SearchResultDto. |
| searchFavoritesDocuments | Busca documentos favoritos.Metodo:searchFavoritesDocuments(String user, String Password, int companyId, String colleagueId, String content)Parametros:user: login do usuário.password: senha do usuário.companyId: código da empresa.colleagueId: matrícula do usuário.contente: conteúdo a ser buscadoRetorno: SearchResultDto. |

**Quadro 21: Métodos da SearchDocumentService**

****

#### Exemplo de utilização

Faça o download da classe [SearchDocumentServiceClient.java](/download/attachments/73084007/SearchDocumentServiceClient.java?version=2&modificationDate=1422438607000&api=v2), esta exemplifica a utilização dos principais métodos da classe SearchDocumentService.

# ECMSignalService

Webservice responsável por interagir com os sinais criados no fluig. Pode ser utilizado para criar, remover, enviar sinais ou consultar os sinais existentes.

#### Métodos

| createSignal | Cria um sinal no fluig.Método:createSignal(String login, String password, int companyId, String description)Parâmetros:login: login do usuário.password: senha do usuário.companyId: código da empresa.description: descrição do sinal.Retorno: String. |
| --- | --- |
| deleteSignal | Remove um sinal criado no fluig.Método:deleteSignal(String login, String password, int companyId, int signalId)Parâmetros:login: login do usuário que será gerado pelo token.password: senha do usuário.companyId: código da empresa.signalId: código do sinal.Retorno: String. |
| fireSignal | Envia/ Dispara o sinal existente.Método:fireSignal (String login, String password, int companyId, int signalId)Parâmetros:login: login do usuário que será gerado pelo token.password: senha do usuário.companyId: código da empresa.signalId: código do sinal.Retorno: String. |
| getSignals | Retorna os sinais existentes no fluig.Método:getSignals(String login, String password, int companyId)Parâmetro:login: login do usuário.password: senha do usuário.companyId: código da empresa.Retorno: Signal[]. |

**Quadro 22: Métodos da SignalService.**

****

#### Exemplo de utilização

Faça o download da classe [ECMSignalService.java](https://git.fluig.com/projects/SAMPLES/repos/samples-webservice/browse/src/samples/ECMSignalService.java), esta exemplifica a utilização dos principais métodos da classe SignalService.

# ECMTokenService

Webservice responsável por interagir com os token’s do fluig. Pode ser utilizado para pesquisar e validar os token’s existentes.

#### Métodos

| getToken | Retorna um token de segurança.Método:getToken(String login, String password)Parâmetros:login: login do usuário.password: senha do usuário.Retorno: String. |
| --- | --- |
| getTokenByLogin | Retorna um token de segurança para o login solicitado.Método:getTokenByLogin(int companyId, String colleagueId, String password, String login)Parâmetros:companyId: código da empresa.colleagueId: matrícula do usuário.password: senha do usuário.login: login do usuário que será gerado pelo token.Retorno: String. |
| getTokenEmail | Retorna um token de segurança para o e-mail solicitado.Método:getTokenEmail(int companyId, String email, String password)Parâmetros:companyId: código da empresa.email: e-mail do usuário.password: senha do usuário.Retorno: String. |
| validateToken | Valida o token de segurança e retorna o login do usuário.Método:validateToken(String token)Parâmetro:token: token do usuário.Retorno: String. |

**Quadro 23: Métodos da TokenService.**

****

#### Exemplo de utilização

Faça o download da classe  [TokenServiceClient.java](/download/attachments/73084007/TokenServiceClient.java?version=1&modificationDate=1378475769000&api=v2), esta exemplifica a utilização dos principais métodos da classe TokenService.

# ECMWorkflowEngineService

Webservice responsável por realizar operações referentes a workflow no fluig. Pode ser utilizado para movimentar solicitações, entre outros recursos.

#### Métodos

| calculateDeadLineHours | Calcula um prazo a partir de uma data com base no expediente e feriados cadastrados no produto passando o prazo em horas.Método:calculateDeadLineHours(String username, String password, int companyId, String userId, String data, int segundos, int prazo, String periodId)Parâmetros:username - Usuário de Integraçãopassword - Senha de IntegraçãocompanyId - Código da empresauserId - Matrícula do usuáriodata - data (Tipo String no formato "yyyy-MM-dd").segundos - Quantidade de segundos após a meia noiteprazo - Prazo que será aplicado em horas (Variável int).periodId - Código de ExpedienteRetorno: Objeto DeadLineDto que contem variáveis com a data e hora.Estrutura de retorno com sucesso
?`````2015-05-08````43201``` |
| --- | --- |

Estrutura de retorno com erro

[?](#)

| `NOK Não foi encontrado expediente para o código informado: Default*` |
| --- |

calculateDeadLineTime

Calcula um prazo a partir de uma data com base no expediente e feriados cadastrados no produto passando o prazo em minutos.

Método:

calculateDeadLineHours(String username, String password, int companyId, String userId, String data, int segundos, int prazo, String periodId)

Parâmetros:

- username - Usuário de Integração
- password - Senha de Integração
- companyId - Código da empresa
- userId - Matrícula do usuário
- data - data (Tipo String no formato "yyyy-MM-dd").
- segundos - Quantidade de segundos após a meia noite
- prazo - Prazo que será aplicado em minutos (Variável int).
- periodId - Código de Expediente

Retorno: Objeto [DeadLineDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DeadLineDto) que contem variáveis com a data e hora.

Estrutura de retorno com sucesso

[?](#)

| `````2015-03-20````32400``` |
| --- |

Estrutura de retorno com erro

[?](#)

| `NOK Não foi encontrado expediente para o código informado: Default*` |
| --- |

cancelInstance

Cancela uma solicitação.

Método:

cancelInstance(String user, String password, int companyId, int processInstanceId, String userId, String cancelText)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- processInstanceId: número da solicitação.
- userId: mátricula do usuário.
- cancelText: comentários do cancelamento.

Retorno: String.

Estrutura de retorno com sucesso

[?](#)

| `OK` |
| --- |

Estrutura de retorno com erro

[?](#)

| `Processo não encontrado.` |
| --- |

cancelInstanceByReplacement

Cancela uma solicitação utilizando usuário substituto.

Método:

cancelInstanceByReplacement(String user, String password, int companyId, int processInstanceId, String userId, String cancelText, String replacementId)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- processInstanceId: número da solicitação.
- userId: mátricula do usuário.
- cancelText: comentários do cancelamento.
- replacementId: matrícula do usuário substituto.

Retorno: String.

Estrutura de retorno com sucesso

[?](#)

| `OK` |
| --- |

Estrutura de retorno com erro

[?](#)

| `Processo não encontrado.` |
| --- |

createWorkFlowProcessVersion

Cria nova versão do processo workflow.

Método:

createWorkFlowProcessVersion(String user, String password, int companyId, int processId)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- processId: número da solicitação.

Retorno: String.

Estrutura de retorno com sucesso

[?](#)

| `{swimlane=Nova Versão das SwimLanes, processLinkAssoc=Nova Versão das Associações, conditionProcessState=Nova Versão das Condições das Atividades Automáticas, ok=true, flow=Nova Versão dos Fluxos do Processo, end=Versão criada com sucesso, processComponGraf=Nova Versão dos Componentes Gráficos, activity=Nova Versão das Atividades, begin=Criando versão '2' do processo 'Solicitação de férias'}` |
| --- |

Estrutura de retorno com erro

[?](#)

| `{error=Processo não existente}` |
| --- |

exportProcess

Retorna o processo selecionado em uma String.

Método:

*exportProcess* (String username, String password, int companyId, String processId)

Parâmetros:

- username - Usuário de Integração
- password - Senha de Integração
- companyId - Código da empresa
- processId - Código do processo

Retorno: String que contém a definição do processo.

exportProcessInZipFormat
Retorna o processo selecionado no formato zip.

Método:

exportProcessInZipFormat(String username, String password, int companyId, String processId)

Parâmetros:

- username - Usuário de Integração
- password - Senha de Integração
- companyId - Código da empresa
- processId - Código do processo

Retorno: byte[] que contém a definição do processo.

getActualThread

Retorna a sequência da thread de uma solicitação.

Método:

getActualThread(String user, String password, int companyId, int processInstanceId, int stateSequence)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- userId: matrícula do usuário.
- stateSequence: sequência do estado.

Retorno: int.

getAllActiveStates

Retorna o número da atividade em que uma solicitação esta.

Método:

getAllActiveStates(String user, String password, int companyId, String userId, int processInstanceId)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- userId: matrícula do usuário.
- processInstanceId: número da solicitação.

Retorno: Integer[].

getAllProcessAvailableToExport

Retorna uma lista de processos disponíveis para serem exportados.

Método:

getAllProcessAvailableToExport (String username, String password, int companyId)

Parâmetros:

- username - Usuário de Integração
- password - Senha de Integração
- companyId - Código da empresa

Retorno: [ProcessDefinitionDto[]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ProcessDefinitionDto).

getAllProcessAvailableToImport

Retorna uma lista de processos disponíveis para serem importados.

Método:

getAllProcessAvailableToImport (String username, String password, int companyId)

Parâmetros:

- username - Usuário de Integração
- password - Senha de Integração
- companyId - Código da empresa

Retorno: [ProcessDefinitionDto[]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ProcessDefinitionDto)

getAttachments

Retorna os anexos de uma solicitação.

Método:

getAttachments(String user, String password, int companyId, String userId, int processInstanceId)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- userId: matrícula do usuário.
- processInstanceId: número da solicitação.

Retorno: [ProcessAttachmentDto[]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ProcessAttachmentDto).

getAvailableProcess

Retorna os processos que o usuário pode iniciar uma solicitação.

Método:

getAvailableProcess(String username, String password, int companyId, String userId)

Parâmetros:

- username: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- userId: matrícula do usuário.

Retorno: [ProcessDefinitionVersionDto[]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ProcessDefinitionVersionDto).

getAvailableProcessOnDemand

Retorna os processos que o usuário pode iniciar uma solicitação, paginados.

Método:

getAvailableProcessOnDemand(String username, String password, int companyId, String userId, int limit, int lastRowId)

Parâmetros:

- username: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- userId: matrícula do usuário.
- limit: número de registros a serem retornados.
- lastRowId: última linha retornada.

Retorno: [ProcessDefinitionVersionDto[]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ProcessDefinitionVersionDto).

getAvailableStates

Retorna o número da próxima atividade de uma solicitação.

Método:

getAvailableStates(String user, String password, int companyId, String processId, int processInstanceId, int threadSequence)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- processId: código do processo.
- processInstanceId: número da solicitação.
- threadSequence: Indica se existe atividade paralela no processo. Se não existir o valor é 0 (zero), caso exista, este valor pode ser de 1 a infinito dependendo da quantidade de atividade paralelas existentes no processo.

Retorno: Integer[].

getAvailableStatesDetail

Retorna detalhes das atividades disponíveis para seleção...

Atenção

Caso haja necessidade de utilizar este método na primeira instância do processo, favor consultar a [hAPI](/display/fluig/Desenvolvimento+de+Workflow).

Método:

getAvailableStatesDetail(String user, String password, int companyId, String processId, int processInstanceId, int threadSequence)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- processId: código do processo.
- processInstanceId: número da solicitação.
- threadSequence: Indica se existe atividade paralela no processo. Se não existir o valor é 0 (zero), caso exista, este valor pode ser de 1 a infinito dependendo da quantidade de atividade paralelas existentes no processo.

Retorno: [ProcessStateDto[]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ProcessStateDto).

getAvailableUsers

Retorna os usuários que podem executar a tarefa corrente de uma solicitação.

Método:

getAvailableUsers(String username, String password, int companyId, int processInstanceId, int state, int threadSequence)

Parâmetros:

- username: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- processInstanceId: número da solicitação.
- state: número da atividade.
- threadSequence: Indica se existe atividade paralela no processo. Se não existir o valor é 0 (zero), caso exista, este valor pode ser de 1 a infinito dependendo da quantidade de atividade paralelas existentes no processo.

Retorno: String[].

getAvailableUsersOnDemand

Retorna os usuários que podem executar a tarefa corrente de uma solicitação, paginados e com busca.

Método:

getAvailableUsersOnDemand(String username, String password, int companyId, int processInstanceId, int state, int threadSequence, int limit, int initialUser, String userSearch)

Parâmetros:

- username: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- processInstanceId: número da solicitação.
- state: número da atividade.
- threadSequence: Indica se existe atividade paralela no processo. Se não existir o valor é 0 (zero), caso exista, este valor pode ser de 1 a infinito dependendo da quantidade de atividade paralelas existentes no processo.
- limit: número de registros a serem retornados.
- initialUser: última linha retornada.
- userSearch: texto a ser buscado.

Retorno: [AvailableUsersDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-AvailableUsersDto).

getAvailableUsersStart

Retorna os usuários disponíveis na abertura de uma solicitação.

Método:

getAvailableUsersStart (String username, String password, int companyId, String processId, int state, int threadSequence)

Parâmetros:

- username: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- processId: código do processo.
- state: número da atividade.
- threadSequence: Indica se existe atividade paralela no processo. Se não existir o valor é 0 (zero), caso exista, este valor pode ser de 1 a infinito dependendo da quantidade de atividade paralelas existentes no processo.

Retorno: String[].

getAvailableUsersStartOnDemand

Retorna os usuários disponíveis na abertura de uma solicitação, paginados e com busca.

Método:

getAvailableUsersStart (String username, String password, int companyId, String processId, int state, int threadSequence, int limit, int initialUser, String userSearch)

Parâmetros:

- username: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- processId: código do processo.
- state: número da atividade.
- threadSequence: Indica se existe atividade paralela no processo. Se não existir o valor é 0 (zero), caso exista, este valor pode ser de 1 a infinito dependendo da quantidade de atividade paralelas existentes no processo.
- limit: número de registros a serem retornados.
- initialUser: última linha retornada.
- userSearch: texto a ser buscado.

Retorno: [AvailableUsersDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-AvailableUsersDto).

getCardValue

Retorna o valor de um campo do registro de formulário.

Método:

getCardValue(String user, String password, int companyId, int processInstanceId, String userId, String cardFieldName)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- processInstanceId: número da solicitação.
- userId: mátricula do usuário.
- cardFieldName: nome do campo do registro de formulário.

Retorno: String.

getHistories

Retorna a lista de históricos de um processo, exceto os comentários adicionados pelos usuários nas atividades.

Método:

getHistories (String username, String password, int companyId)

Parâmetros:

- username - Usuário de Integração
- password - Senha de Integração
- companyId - Código da empresa
- userId - Matrícula do usuário
- processInstanceId - número da solicitação workflow

Retorno: [ProcessHistoryDto[]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ProcessHistoryDto).

getInstanceCardData

Retorna o valor dos campos do registro de formulário de uma solicitação.

Método:

getInstanceCardData(String user, String password, int companyId, String userId, int processInstanceId)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- userId: matrícula do usuário.
- processInstanceId: número da solicitação.

Retorno: String[][].

getProcessFormId
Retorna o código do formulário vinculado ao processo.

Método:

getProcessFormId(String user, String password, int companyId, string processId)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- processId: código do processo.

Retorno: int.

getWorkFlowProcessVersion
Retorna a versão de um processo.

Método:

getWorkFlowProcessVersion(String user, String password, int companyId, int processId)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- processId: número da solicitação.

Retorno: int.

importProcess

Importa processos workflow.

Método:

importProcess(String user, String password, int companyId, String processId, Attachment file, boolean newProcess, boolean overWrite, String colleagueId)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- processId: código do processo.
- file: arquivo a ser importado.
- newProcess: indica se deve ser criado um processo ou atualizado o existente.
- overWrite: indica se as atividades e fluxos do processo existentes devem ser sobrescritas.
- colleagueId : matrícula do usuário.

Retorno: String.

Estrutura de retorno com sucesso

[?](#)

| `OK` |
| --- |

Estrutura de retorno com erro

[?](#)

| `Não foi possível importar os dados do arquivo: Solicitação de férias` |
| --- |

importProcessWithCard

Importa processos workflow e formulário.

Método:

importProcessWithCard(String user, String password, int companyId, String processId, Attachment[] processAttachs, boolean newProcess, boolean overWrite, String colleagueId, int parentDocId, String docDescription, String cardDescription, String datasetName, Attachment[] cardAttachs, CardEventDto[] customEvents, boolean update)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- processId: código do processo.
- processAttachs: anexos do processo.
- newProcess: indica se deve ser criado um processo ou atualizado o existente.
- overWrite: indica se as atividades e fluxos do processo existentes devem ser sobrescritas.
- colleagueId : matrícula do usuário.
- parentDocId: número do formulário.
- docDescription: descrição.
- cardDescription: nome.
- datasetName: nome do dataset.
- cardAttachs: arquivo anexo.
- customEvents: eventos.
- update: caso verdadeiro ('true'), informa que será uma atualização.

Retorno: String.

Estrutura de retorno com sucesso

[?](#)

| `OK` |
| --- |

Estrutura de retorno com erro

[?](#)

| `Não foi possível importar os dados do arquivo: Solicitação de férias` |
| --- |

releaseProcess

Libera processos workflow.

Método:

releaseProcess(String user, String password, int companyId, String processId)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- processId: código do processo.

Retorno: String.
Estrutura de retorno com sucesso

[?](#)

| `{activityError=[], subProcess=[Sub-processos], subProcessError=[], attachmentSecurityError=[], attachmentSecurity=[Segurança de Anexos], ok=true, flow=[Fluxos], flowError=[], activity=[Atividades], end=Versão liberada para utilização., begin=Liberação da versão 2 do processo Solicitação de férias}` |
| --- |

Estrutura de retorno com erro

[?](#)

| `Login e senha inválidos` |
| --- |

saveAndSendTask

Movimenta solicitação para próxima atividade.

Caso possua os campos preenchidos na solicitação e os valores não forem repassados no cardData ou estiverem vazios, a solicitação também ficará com o valor vazio, onde os valores preenchidos serão apagados caso não seja passado o valor.

Método:

saveAndSendTask(String user, String password, int companyId, int processInstanceId, int choosedState, String[] colleagueIds, String comments, String userId, boolean completeTask, [ProcessAttachmentDto[]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ProcessAttachmentDto) attachments, String[][] [cardData](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-cardData), [ProcessTaskAppointmentDto[]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ProcessTaskAppointmentDto) appointment, boolean managerMode, int threadSequence)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- processInstanceId: número da solicitação.
- choosedState: número da atividade.
- colleagueIds: usuário que receberá a tarefa.
- comments: comentários.
- userId: matrícula do usuário que vai executar a tarefa.
- completeTask: indica se deve completar a tarefa (true) ou somente salvar (false).
- attachments: anexos da solicitação.
- [cardData](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-cardData): dados do registro de formulário.
- appointment: apontamentos da tarefa.
- managerMode: indica se usuário esta executando a tarefa como gestor do processo.
- threadSequence: Indica se existe atividade paralela no processo. Se não existir o valor é 0 (zero), caso exista, este valor pode ser de 1 a infinito dependendo da quantidade de atividade paralelas existentes no processo.

Retorno: String[][].

Estrutura de retorno com sucesso

[?](#)

| `````````iTask````4````````````cDestino````[adm]``````` |
| --- |

Estrutura de retorno com erro

[?](#)

| `````````ERROR:````Erro ao salvar/completar a tarefa: Usuário destino não foi informado!``````` |
| --- |

Exemplo de utilização com exclusão de anexo:

[?](#)

| `````````````````adm````adm````1````1780````4````````adm````````movimentação removendo anexo````adm````true````````````3012334````````````adm````adm````1````true````arquivo.docx````3012334````docx````arquivo.docx````false````1````1780````1000````````>````````````````````false````0``````````` |
| --- |

O exemplo de movimentação com exclusão de anexo está excluindo apenas um anexo, caso necessário excluir mais de um, adicione uma nova tag <item>

saveAndSendTaskByReplacement

Movimenta solicitação para próxima atividade utilizando usuário substituto.

Caso possua os campos preenchidos na solicitação e os valores não forem repassados no cardData ou estiverem vazios, a solicitação também ficará com o valor vazio, onde os valores preenchidos serão apagados caso não seja passado o valor.

Método:

saveAndSendTaskByReplacement (String user, String password, int companyId, int processInstanceId, int choosedState, String[] colleagueIds, String comments, String userId, boolean completeTask, [ProcessAttachmentDto[]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ProcessAttachmentDto) attachments, String[][] [cardData](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-cardData), [ProcessTaskAppointmentDto[]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ProcessTaskAppointmentDto) appointment, boolean managerMode, int threadSequence, String replacementId)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- processInstanceId: número da solicitação.
- choosedState: número da atividade.
- colleagueIds: usuário que receberá a tarefa.
- comments: comentários.
- userId: matrícula do usuário que vai executar a tarefa.
- completeTask: indica se deve completar a tarefa (true) ou somente salvar (false).
- attachments: anexos da solicitação.
- [cardData](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-cardData): dados do registro de formulário.
- appointment: apontamentos da tarefa.
- managerMode: indica se usuário esta executando a tarefa como gestor do processo.
- threadSequence: Indica se existe atividade paralela no processo. Se não existir o valor é 0 (zero), caso exista, este valor pode ser de 1 a infinito dependendo da quantidade de atividade paralelas existentes no processo.
- replacementId: matrícula do usuário substituto.

Retorno: String[][].

Estrutura de retorno com sucesso

[?](#)

| `````````iTask````4````````````cDestino````[adm]``````` |
| --- |

Estrutura de retorno com erro

[?](#)

| `````````ERROR:````Erro ao salvar/completar a tarefa: Usuário destino não foi informado!``````` |
| --- |

saveAndSendTaskClassic

Movimenta solicitação para próxima atividade e retorna um array de objeto com chave e valor.

Caso possua os campos preenchidos na solicitação e os valores não forem repassados no cardData ou estiverem vazios, a solicitação também ficará com o valor vazio, onde os valores preenchidos serão apagados caso não seja passado o valor.

Método:

saveAndSendTaskClassic(String user, String password, int companyId, int processInstanceId, int choosedState, String[] colleagueIds, String comments, String userId, boolean completeTask, [ProcessAttachmentDto[]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ProcessAttachmentDto) attachments, [KeyValueDto[]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-KeyValueDto) [cardData](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-cardData), [ProcessTaskAppointmentDto[]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ProcessTaskAppointmentDto) appointment, boolean managerMode, int threadSequence)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- processInstanceId: número da solicitação.
- choosedState: número da atividade.
- colleagueIds: usuário que receberá a tarefa.
- comments: comentários.
- userId: matrícula do usuário que vai executar a tarefa.
- completeTask: indica se deve completar a tarefa (true) ou somente salvar (false).
- attachments: anexos da solicitação.
- [cardData](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-cardData): dados do registro de formulário.
- appointment: apontamentos da tarefa.
- managerMode: indica se usuário esta executando a tarefa como gestor do processo.
- threadSequence: Indica se existe atividade paralela no processo. Se não existir o valor é 0 (zero), caso exista, este valor pode ser de 1 a infinito dependendo da quantidade de atividade paralelas existentes no processo.

Estrutura mínima para movimentação com anexo

**Exemplo usando SoapUI**

[?](#)

| ``xmlns:ws``=``"http://ws.workflow.ecm.technology.totvs.com/"``>````````````````adm````adm````1````48````2````````al01````````movimentação com anexo````adm````true````````````0````````true````true````pdf_para_teste.pdf````true````````adm````adm````1````false````pdf usado para teste````pdf````true````47````````````````````````````false````0``````````` |
| --- |

O exemplo de movimentação com anexo foi criado considerando do uso da pasta de *upload* do volume. Sendo assim, o arquivo para transferência deverá estar contido na pasta de *upload* do usuário.

Considerando o exemplo acima, o arquivo pdf_para_teste.pdf deverá estar contido na pasta do usuário, que fica localizada dentro do diretório *upload*no volume do fluig.

Caso não queira utilizar este tipo de transferência para anexo e sim a transferência via *Bytes*, devem ser adicionadas à estrutura, abaixo da *tag* <fileName>, as seguintes *tags*:

```
 = para indicar o tamanho do arquivo
```

```
 = que deverá conter os bytes referentes ao arquivo
```

Adicionando *estas* tags será ignorada a busca no diretório de *upload* do usuário, sendo considerado o arquivo contido na *tag* <filecontent>.

Retorno: [KeyValueDto[]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-KeyValueDto).

Estrutura de retorno com sucesso

[?](#)

| `````````iTask````4````````````cDestino````[adm]``````` |
| --- |

Estrutura de retorno com erro

[?](#)

| `````````ERROR:````Erro ao salvar/completar a tarefa: Usuário destino não foi informado!``````` |
| --- |

searchProcess

Busca processo disponíveis para inicialização.

Método:

searchProcess(String user, String Password, int companyId, String colleagueId, String content, boolean favorite)

Parametros

- user - Usuário de Integração
- password - Senha de Integração
- companyId - Código da empresa
- colleagueId - Matrícula do usuário
- content – nome do processo a ser pesquisado
- favorite – busca da lista de processos favoritos ou da listagem padrão.

Retorno: [ProcessDefinitionVersionDto[]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ProcessDefinitionVersionDto)

setAutomaticDecisionClassic

Seleciona usuário(s) e avança atividade automática.

Método:

setAutomaticDecisionClassic(String user, String password, int companyId, int processInstanceId, int iTaskAutom, int iTask, int condition, String[] colleagueIds, String comments, String userId, boolean managerMode, int threadSequence)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- processInstanceId: número da solicitação.
- iTaskAutom: número da atividade automática.
- iTask: número da atividade atual.
- condition: número da condição da atividade automática.
- colleagueIds: usuário que receberá a tarefa.
- comments: comentários.
- userId: matrícula do usuário que vai executar a tarefa.
- managerMode: indica se usuário esta executando a tarefa como gestor do processo.
- threadSequence: Indica se existe atividade paralela no processo. Se não existir o valor é 0 (zero), caso exista, este valor pode ser de 1 a infinito dependendo da quantidade de atividade paralelas existentes no processo.

Retorno: [KeyValueDto[]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-KeyValueDto)

Estrutura de retorno com sucesso

[?](#)

| `````````iTask````4````````````cDestino````[adm]``````` |
| --- |

Estrutura de retorno com erro

[?](#)

| `````````ERROR````Nenhum colaborador foi informado.``````` |
| --- |

setDueDate

Altera a data de prazo da tarefa.

Método:

setDueDate(String user, String password, int companyId, int processInstanceId, String userId, int threadSequence, String newDueDate, int timeInSeconds)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- processInstanceId: número da solicitação.
- userId: matrícula do usuário. Quando é Para um Grupo ou Para um Papel deve ser passado da seguinte forma:Papel: "Pool:Role:CodigoDoPapel";Grupo: "Pool:Group:CodigoDoGrupo".
- threadSequence: Indica se existe atividade paralela no processo. Se não existir o valor é 0 (zero), caso exista, este valor pode ser de 1 a infinito dependendo da quantidade de atividade paralelas existentes no processo.
- newDueDate: nova data de prazo da tarefa. Exemplo: "2014-08-20".
- timeInSeconds: quantidade de segundos após a meia noite. Exemplo: "32000".

Retorno: String.

Estrutura de retorno com sucesso

[?](#)

| `Data da solicitação: 26 do usuário: adm da empresa: 1 foi alterada com sucesso!` |
| --- |

Estrutura de retorno com erro

[?](#)

| `Não foi possível encontrar histórico de processo para empresa 1 solicitação 263 thread 0` |
| --- |

setTasksComments

Altera os comentários da tarefa.

Método:

setTasksComments(String user, String password, int companyId, int processInstanceId, String userId, int threadSequence, String comments)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- processInstanceId: número da solicitação.
- userId: mátricula do usuário.
- threadSequence: Indica se existe atividade paralela no processo. Se não existir o valor é 0 (zero), caso exista, este valor pode ser de 1 a infinito dependendo da quantidade de atividade paralelas existentes no processo.
- comments: comentários.

Retorno: String.

Estrutura de retorno com sucesso

[?](#)

| `OK` |
| --- |

Estrutura de retorno com erro

[?](#)

| `Não foi possível encontrar histórico de processo para empresa 1 solicitação 263 thread 0` |
| --- |

simpleStartProcess

Inicia uma solicitação simples.

Método:

simpleStartProcess(String user, String password, int companyId, String processId, String comments, [ProcessAttachmentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ProcessAttachmentDto)[] attachments, String [cardData](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-cardData)[][])

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- processId: código do processo.
- comments: comentários.
- attachments: anexos da solicitação.
- [cardData](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-cardData): dados do registro de formulário.

Retorno: String[].

Estrutura de retorno com sucesso

[?](#)

| `````iTask=2````WDNrVersao=1000````WDNrDocto=0````iProcess=28````cDestino=[adm]``` |
| --- |

Estrutura de retorno com erro

[?](#)

| `Versão do processo não encontrada. processId: 263` |
| --- |

Para utilização do método, acesse o exemplo a seguir:

[Exemplo](https://tdn.totvs.com/download/attachments/73084007/ws.zip?version=1&modificationDate=1506447690000&api=v2).

startProcess

Inicia uma solicitação.

Método:

startProcess(String user, String password, int companyId, String processId, int choosedState, String[] colleagueIds, String comments, String userId, boolean completeTask, [ProcessAttachmentDto[]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ProcessAttachmentDto) attachments, String[][] [cardData](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-cardData), [ProcessTaskAppointmentDto[]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ProcessTaskAppointmentDto) appointment, boolean managerMode)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- processId: código do processo.
- choosedState: número da atividade.
- colleagueIds: usuário que receberá a tarefa. Caso a solicitação esteja sendo atribuída "Para um Papel" ou "Para um Grupo", o parâmetro colleagueIds deve ser informado da seguinte forma:Papel: Pool:Role:Nome_do_papelGrupo: Pool:Group:Nome_do_grupo
- comments: comentários.
- userId: matrícula do usuário que vai iniciar a solicitação.
- completeTask: indica se deve completar a tarefa (true) ou somente salvar (false).
- attachments: anexos da solicitação.
- [cardData](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-cardData): dados do registro de formulário.
- appointment: apontamentos da tarefa.
- managerMode: indica se usuário esta iniciando a solicitação como gestor do processo.

Retorno: String[][].

Estrutura de retorno com sucesso

[?](#)

| `````````iTask````2````````````WDNrVersao````1000````````````WDNrDocto````0````````````iProcess````29````````````cDestino````[adm]``````` |
| --- |

Estrutura de retorno com erro

[?](#)

| `````````ERROR````Processo informado não foi encontrado.``````` |
| --- |

Para utilização do método, acesse o exemplo a seguir:

[Exemplo](/download/attachments/73084007/ws.zip?version=1&modificationDate=1506447690000&api=v2).

startProcessClassic

Inicia uma solicitação e retorna um array de objeto com chave e valor.

Método:

startProcessClassic(String user, String password, int companyId, String processId, int choosedState, String[] colleagueIds, String comments, String userId, boolean completeTask, [ProcessAttachmentDto[]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ProcessAttachmentDto) attachments, [KeyValueDto[]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-KeyValueDto) [cardData](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-cardData), [ProcessTaskAppointmentDto[]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ProcessTaskAppointmentDto) appointment, boolean managerMode)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- processId: código do processo.
- choosedState: número da atividade.
- colleagueIds: usuário que receberá a tarefa.
- comments: comentários.
- userId: matrícula do usuário que vai iniciar a solicitação.
- completeTask: indica se deve completar a tarefa (true) ou somente salvar (false).
- attachments: anexos da solicitação.
- [cardData](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-cardData): dados do registro de formulário.
- appointment: apontamentos da tarefa.
- managerMode: indica se usuário esta iniciando a solicitação como gestor do processo.

Retorno: String[][].

Estrutura de retorno com sucesso

[?](#)

| `````````iTask````2````````````WDNrVersao````1000````````````WDNrDocto````0````````````iProcess````30````````````cDestino````[adm]``````` |
| --- |

Estrutura de retorno com erro

[?](#)

| `````````ERROR````Processo informado não foi encontrado.``````` |
| --- |

Para utilização do método, acesse o exemplo a seguir:

[Exemplo](https://tdn.totvs.com/download/attachments/73084007/ws.zip?version=1&modificationDate=1506447690000&api=v2).

takeProcessTask

Assume uma tarefa.

Método:

takeProcessTask(String user, String password, int companyId, String userId, int processInstanceId, int threadSequence)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- userId: matrícula do usuário.
- processInstanceId: número da solicitação.
- threadSequence: Indica se existe atividade paralela no processo. Se não existir o valor é 0 (zero), caso exista, este valor pode ser de 1 a infinito dependendo da quantidade de atividade paralelas existentes no processo.

Retorno: String.

Estrutura de retorno com sucesso

[?](#)

| `OK` |
| --- |

Estrutura de retorno com erro

[?](#)

| `Tarefa não encontrada` |
| --- |

takeProcessTaskByReplacement

Assume uma tarefa utilizando usuário substituto.

Método:

takeProcessTask(String user, String password, int companyId, String userId, int processInstanceId, int threadSequence, String replacementId)

Parâmetros:

- user: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- userId: matrícula do usuário.
- processInstanceId: número da solicitação.
- threadSequence: Indica se existe atividade paralela no processo. Se não existir o valor é 0 (zero), caso exista, este valor pode ser de 1 a infinito dependendo da quantidade de atividade paralelas existentes no processo.
- replacementId: matrícula do usuário substituto.

Retorno: String.

Estrutura de retorno com sucesso

[?](#)

| `OK` |
| --- |

Estrutura de retorno com erro

[?](#)

| `Usuário não possui permissão para assumir a tarefa` |
| --- |

updateWorkflowAttachment

Atualiza um documento do tipo 7.

Retorna uma string contendo a descrição de sucesso ou falha da operação.

Método:

updateWorkflowAttachment(String username, String password, int companyId, int processInstanceId, String usuario, [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-DocumentDto)[] docdtos, Attachment[] attach)

Parâmetros:

- username: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- processInstanceId: número da solicitação workflow.
- usuario: usuário responsável pela edição do documento.
- documents: documento ou documentos que serão publicados.
- attachments: arquivo(s) anexado(s) na publicação.

Observação:

Caso necessite atualizar somente o título do anexo, basta enviar a tag attachments vazio, exemplo:

<attachments></attachments>

Caso queira atualizar o arquivo do anexo será preciso informar o filename. Caso não tenha enviado o arquivo na pasta upload via FTP informe também o filecontent, exemplo:

<attachments>
            <item>
             <fileName>arquivo.pdf</fileName>
             <filecontent>cid:884394243078</filecontent>
            </item>
  </attachments>

Retorno: String.

Estrutura de retorno com sucesso

[?](#)

| `Documento editado com sucesso` |
| --- |

Estrutura de retorno com erro

[?](#)

| `DOCUMENTO NÃO É ANEXO WORKFLOW` |
| --- |

**Quadro 24: Métodos da WorkflowEngineService**

****

#### Exemplo de utilização

Faça o download da classe [ECMWorkflowEngineService.java](https://git.fluig.com/projects/SAMPLES/repos/componentes/browse/webservice/src/samples/ECMWorkflowEngineService.java), esta exemplifica a utilização dos principais métodos da classe WorkflowEngineService.

# ECMWorkflowRoleService

Webservice responsável por realizar operações referentes a papéis no fluig. Pode ser utilizado para criar, alterar, excluir e procurar papéis, entre outros recursos.

#### Métodos

| createWorkflowRole | Cria um papel no fluig.Método:createWorkflowRole(String username, String password, int companyId, workflowRoleDto role)Parâmetros:username: login do usuário.password: senha do usuário.companyId: código da empresa.role: papel que será criado.Retorno: String.Estrutura de retorno com sucesso
?`ok` |
| --- | --- |

Estrutura de retorno com erro

[?](#)

| `nok` |
| --- |

deleteWorkflowRole

Exclui um papel do fluig.

Método:

deleteWorkflowRole(String username, String password, int companyId, String roleId)

Parâmetros:

- username: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- roleId: código do papel a ser excluído.

Retorno: String.

Estrutura de retorno com sucesso

[?](#)

| `ok` |
| --- |

Estrutura de retorno com erro

[?](#)

| `nok` |
| --- |

getWorkflowRole

Retorna um papel cadastrado no fluig.

Método:

getWorkflowRole(String username, String password, int companyId, String roleId)

Parâmetros:

- username: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- roleId: código do papel.

Retorno: [WorkflowRoleDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WorkflowRoleDto).

Atributos de Retorno:

- companyId
- roleDescription
- roleId

getWorkflowRoles

Retorna todos os papéis cadastrados no fluig.

Método:

getWorkflowRoles(String username, String password, int companyId)

Parâmetros:

- username: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.

Retorno: [WorkflowRoleDto[]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WorkflowRoleDto).

Atributos de Retorno:

- companyId
- roleDescription
- roleId

updateWorkflowRole

Atualiza um papel no fluig.

Método:

updateWorkflowRole(String username, String password, int companyId, [workflowRoleDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-WorkflowRoleDto) role)

Parâmetros:

- username: login do usuário.
- password: senha do usuário.
- companyId: código da empresa.
- role: papel que será criado.

Retorno: String.

Estrutura de retorno com sucesso

[?](#)

| `ok` |
| --- |

Estrutura de retorno com erro

[?](#)

| `nok` |
| --- |

**Quadro 25: Métodos da WorkflowRoleService**


<!-- anchors: DocumentaçãodosWebServices-Objetivo, DocumentaçãodosWebServices-Pré-requisitos, DocumentaçãodosWebServices-ECMAttributionMecanismService, DocumentaçãodosWebServices-Métodos, content_1, DocumentaçãodosWebServices-Exemplodeutilização, DocumentaçãodosWebServices-ECMBusinessPeriodService, DocumentaçãodosWebServices-Métodos.1, content_2, DocumentaçãodosWebServices-Exemplodeutilização.1, DocumentaçãodosWebServices-ECMCardIndexService, DocumentaçãodosWebServices-Métodos.2, content_3, highlighter_977281, highlighter_473527, highlighter_500841, highlighter_273178, highlighter_206086, highlighter_157158, highlighter_803968, highlighter_523111, highlighter_153664, highlighter_923228, DocumentaçãodosWebServices-Exemplodeutilização.2, DocumentaçãodosWebServices-ECMCardService, DocumentaçãodosWebServices-Exemplosdeutilização, DocumentaçãodosWebServices-Métodos.3, content_4, highlighter_407067, highlighter_93474, highlighter_143392, highlighter_803401, highlighter_319173, highlighter_897435, highlighter_754359, highlighter_93190, DocumentaçãodosWebServices-ECMColleagueGroupService, DocumentaçãodosWebServices-Métodos.4, content_5, highlighter_515504, highlighter_726865, highlighter_10631, highlighter_722676, highlighter_103516, highlighter_8063, DocumentaçãodosWebServices-Exemplodeutilização.3, DocumentaçãodosWebServices-ECMColleagueReplacementService, DocumentaçãodosWebServices-Métodos.5, content_6, highlighter_859434, highlighter_261394, highlighter_719577, highlighter_710502, highlighter_861497, highlighter_456919, DocumentaçãodosWebServices-Exemplodeutilização.4, DocumentaçãodosWebServices-ECMColleagueService, DocumentaçãodosWebServices-Métodos.6, content_7, highlighter_385213, highlighter_40005, highlighter_315463, highlighter_317105, highlighter_118871, highlighter_326010, highlighter_2153, highlighter_36901, highlighter_72680, highlighter_848083, highlighter_716156, highlighter_996632, highlighter_19735, highlighter_858572, highlighter_558631, DocumentaçãodosWebServices-Exemplodeutilização.5, DocumentaçãodosWebServices-ECMCompanyService, DocumentaçãodosWebServices-Métodos.7, content_8, highlighter_263148, highlighter_918577, highlighter_407738, highlighter_680733, DocumentaçãodosWebServices-Exemplodeutilização.6, DocumentaçãodosWebServices-ECMCustomFieldsService, DocumentaçãodosWebServices-Métodos.8, content_9, highlighter_331215, highlighter_799924, highlighter_318293, highlighter_549579, highlighter_265512, highlighter_745636, highlighter_336176, highlighter_15080, highlighter_702934, highlighter_956789, DocumentaçãodosWebServices-Exemplodeutilização.7, DocumentaçãodosWebServices-ECMDashBoardService, DocumentaçãodosWebServices-Métodos.9, content_10, DocumentaçãodosWebServices-Exemplodeutilização.8, DocumentaçãodosWebServices-ECMDataServiceService, DocumentaçãodosWebServices-Métodos.10, content_11, DocumentaçãodosWebServices-ECMDatasetService, DocumentaçãodosWebServices-Métodos.11, content_12, DocumentaçãodosWebServices-Exemplodeutilização.9, DocumentaçãodosWebServices-ECMDocumentService, DocumentaçãodosWebServices-Métodos.12, content_13, highlighter_335918, highlighter_713922, highlighter_418394, highlighter_837878, highlighter_182104, highlighter_380515, highlighter_717208, highlighter_492766, highlighter_496841, highlighter_665270, highlighter_769017, highlighter_374924, highlighter_972361, highlighter_642061, highlighter_267459, highlighter_812308, highlighter_317098, highlighter_331282, highlighter_434937, highlighter_628214, highlighter_262616, highlighter_375949, highlighter_757147, highlighter_869786, highlighter_478787, highlighter_616437, highlighter_113657, highlighter_33150, highlighter_772469, highlighter_416647, highlighter_298727, highlighter_636749, DocumentaçãodosWebServices-Exemplodeutilização.10, DocumentaçãodosWebServices-ECMFavoritesService, DocumentaçãodosWebServices-Métodos.13, content_14, DocumentaçãodosWebServices-Exemplodeutilização.11, DocumentaçãodosWebServices-ECMFolderService, DocumentaçãodosWebServices-Métodos.14, content_15, highlighter_517506, highlighter_11884, highlighter_555184, highlighter_123807, highlighter_879480, highlighter_687260, highlighter_381164, highlighter_75141, highlighter_19513, highlighter_576280, highlighter_476227, highlighter_594193, highlighter_134865, highlighter_634558, highlighter_735540, highlighter_588060, highlighter_435068, highlighter_704449, DocumentaçãodosWebServices-Exemplodeutilização.12, DocumentaçãodosWebServices-ECMGlobalParamService, DocumentaçãodosWebServices-Métodos.15, content_16, DocumentaçãodosWebServices-Exemplodeutilização.13, DocumentaçãodosWebServices-ECMGroupService, DocumentaçãodosWebServices-Métodos.16, content_17, highlighter_637658, highlighter_251350, highlighter_716321, highlighter_899097, highlighter_121828, highlighter_284639, DocumentaçãodosWebServices-Exemplodeutilização.14, DocumentaçãodosWebServices-ECMOutstandingService, DocumentaçãodosWebServices-Métodos.17, content_18, highlighter_322561, highlighter_880538, DocumentaçãodosWebServices-ECMReportService, DocumentaçãodosWebServices-Métodos.18, content_19, highlighter_93670, highlighter_387687, highlighter_890976, highlighter_375906, DocumentaçãodosWebServices-Exemplodeutilização.15, DocumentaçãodosWebServices-ECMSearchDocumentService, DocumentaçãodosWebServices-Métodos.19, content_20, DocumentaçãodosWebServices-Exemplodeutilização.16, DocumentaçãodosWebServices-ECMSignalService, DocumentaçãodosWebServices-Métodos.20, content_21, DocumentaçãodosWebServices-Exemplodeutilização.17, DocumentaçãodosWebServices-ECMTokenService, DocumentaçãodosWebServices-Métodos.21, content_22, DocumentaçãodosWebServices-Exemplodeutilização.18, DocumentaçãodosWebServices-ECMWorkflowEngineService, DocumentaçãodosWebServices-Métodos.22, content_23, highlighter_522836, highlighter_149496, highlighter_589057, highlighter_838772, highlighter_270865, highlighter_881091, highlighter_193523, highlighter_153612, highlighter_573291, highlighter_466494, highlighter_409975, highlighter_210754, highlighter_110001, highlighter_807743, highlighter_210809, highlighter_815357, highlighter_125670, highlighter_134952, highlighter_357265, highlighter_794631, highlighter_91896, highlighter_608283, highlighter_104467, highlighter_880486, highlighter_87919, highlighter_65056, highlighter_710770, highlighter_315833, highlighter_722228, highlighter_58417, highlighter_837816, highlighter_280807, highlighter_407465, highlighter_63407, highlighter_587859, highlighter_653693, highlighter_469605, highlighter_185029, highlighter_936881, highlighter_893697, highlighter_894148, highlighter_723876, DocumentaçãodosWebServices-Exemplodeutilização.19, DocumentaçãodosWebServices-ECMWorkflowRoleService, DocumentaçãodosWebServices-Métodos.23, content_24, highlighter_720023, highlighter_205346, highlighter_447968, highlighter_402964, highlighter_785512, highlighter_451388 -->
