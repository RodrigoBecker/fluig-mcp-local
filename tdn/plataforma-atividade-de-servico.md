---
title: "Plataforma ❙ Atividade de serviço"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=919050491"
scraped_at: "2026-03-09T05:06:36.481Z"
depth: 3
anchors: 22
child_links: 83
---

# Plataforma ❙ Atividade de serviço

# Falando de componente Atividade de serviço...

---

![](/download/attachments/919050491/componente-atividade-servi%C3%A7o.png?version=1&modificationDate=1741020395907&api=v2) O componente **Atividade de serviço** representa um ponto do processo onde será feita uma consulta aos dados de um serviço externo repassando esses dados para o processo.

A principal característica desse componente é sua capacidade de automatizar a execução de tarefas, facilitando a integração com sistemas externos e promovendo a eficiência do processo.

Ao configurar esse componente, é necessário selecionar um serviço já cadastrado na plataforma e editar um *script* JavaScript que fará o acesso aos métodos e dados desse serviço.

Dica!

Os serviços são cadastrados no recurso [Serviços](/pages/viewpage.action?pageId=243660796) do Painel de controle.

Com o uso das APIs hAPI e um formulário, é possível passar os dados obtidos na consulta do serviço para o processo.

Uma atividade de serviço pode ter apenas um fluxo de saída e deve ter um evento intermediário de captura de erro para onde a solicitação será enviada se ocorrer alguma inconsistência na execução do *script*.

Importante!

A etapa posterior à captura de erro não é atribuída automaticamente a quem enviou a solicitação para a etapa correspondente à atividade de serviço. Por isso, é importante definir quem será a pessoa responsável pela etapa de tratamento do erro. Se não for definido um responsável, a etapa é enviada automaticamente para a primeira pessoa encontrada na lista de pessoas com [cadastro](https://tdn.totvs.com/pages/viewpage.action?pageId=234455411) ativo na plataforma em ordem alfabética, mesmo que essa pessoa não tenha nenhuma participação ou envolvimento no processo em questão.

Esse componente permite utilizar dois tipos de execução da consulta aos dados do serviço externo: a execução **Automatizada** e a execução **Imediata**, que são detalhadas a seguir.

![](/download/attachments/919050491/diagrama-completo-atividade-servi%C3%A7o-rest.png?version=5&modificationDate=1758282605393&api=v2)

EXEMPLO DE USO
Em um processo de **Aprovação de contrato**, o solicitante preenche um formulário solicitando a criação do contrato com informações como o nome do fornecedor, o tipo e o número do contrato, a validade do contrato, dentre outras. Em seguida, o contrato passa por algumas etapas de aprovação e, depois de aprovado, precisa ser armazenado no recurso [Documentos](/pages/viewpage.action?pageId=233762797). É nesse ponto que pode ser incluído o componente atividade de serviço, para que uma pasta seja criada automaticamente para armazenar o contrato e os documentos relacionados.

Desta forma, quando a última etapa de aprovação for concluída, a solicitação seguirá para uma atividade de serviço que, utilizando as APIs da plataforma, criará a pasta no recurso Documentos com base nas informações fornecidas e nas permissões de acesso definidas no formulário, garantindo que a pasta será única para cada contrato.

Um exemplo de código que poderia ser utilizado como *script* na atividade de serviço é:

Importante!

Esse é um exemplo que fica disponível no repositório [SAMPLES](https://git.fluig.com/projects/SAMPLES) e, por isso, ele pode ser atualizado lá a qualquer momento. Para ver sua versão mais recente e sempre atualizada, acesso-o a partir do repositório **clicando aqui**.

[?](#)

| `function` `servicetask9(attempt, message) {``` ```//Variáveis globais com os dados do formulário````var` `FOLDER_NAME = hAPI.getCardValue(``"txtFolderName"``);````var` `PARENT_FOLDER_CODE = hAPI.getCardValue(``"txtFolderCode"``);````var` `GROUP_CODE = hAPI.getCardValue(``"txtGroupCode"``);````var` `INHERIT_SECURITY = hAPI.getCardValue(``"cbxInheritSecurity"``) ==``"true"``;``` ```//Tipo de documento pasta````var` `DOCUMENT_TYPE_FOLDER =``"1"``;``` ```//Usuário logado````var` `USER_LOGGED = getValue(``"WKUser"``);``` ```//Número da solicitação para comentário uso na descrição da pasta criada````var` `REQUEST_NUMBER = getValue(``"WKNumProces"``);``` ```// Descrição da pasta criada````var` `ADDITIONAL_COMMENTS =``"This folder was created automatically from fluig BPM - request "``;``` ```//Atribuições de segurança````var` `USER_ATTRIBUTION_TYPE = 1;````var` `GROUP_ATTRIBUTION_TYPE = 2;````var` `ALL_USER_ATTRIBUTION_TYPE = 3;``` ```//Níveis de segurança````var` `READING = 0;````var` `RECORDING = 1;````var` `MODIFICATION = 2;````var` `ALL = 3;``` ```try` `{``` ```//Instancia um novo documento e define as propriedades básicas````var` `dto = docAPI.newDocumentDto();````dto.setDocumentDescription(FOLDER_NAME);````dto.setAdditionalComments(ADDITIONAL_COMMENTS + REQUEST_NUMBER);````dto.setDocumentType(DOCUMENT_TYPE_FOLDER);````dto.setParentDocumentId(parseInt(PARENT_FOLDER_CODE));````dto.setInheritSecurity(INHERIT_SECURITY);``` ```/*````Como é possível definir várias permissões, é necessário criar um array com todas as permissões````que serão aplicadas. Cada item do array é uma permissão ou restrição````*/````var` `dtosSecurity =``new` `Array();``` ```//Definindo permissão total para grupo````var` `dtoGroupSecurity = docAPI.newDocumentSecurityConfigDto();````dtoGroupSecurity.setAttributionType(GROUP_ATTRIBUTION_TYPE);````dtoGroupSecurity.setAttributionValue(GROUP_CODE);````dtoGroupSecurity.setPermission(``true``);````dtoGroupSecurity.setShowContent(``true``);````dtoGroupSecurity.setSecurityLevel(ALL);` ```//Definindo permissão total para usuário````var` `dtoUserSecurity = docAPI.newDocumentSecurityConfigDto();````dtoUserSecurity.setAttributionType(USER_ATTRIBUTION_TYPE);````dtoUserSecurity.setAttributionValue(USER_LOGGED);````dtoUserSecurity.setPermission(``true``);````dtoUserSecurity.setShowContent(``true``);````dtoUserSecurity.setSecurityLevel(ALL);``` ```//Definindo permissão de modificação para todos os usuários````var` `dtoAllUsersSecurity = docAPI.newDocumentSecurityConfigDto();````dtoAllUsersSecurity.setAttributionType(ALL_USER_ATTRIBUTION_TYPE);````dtoAllUsersSecurity.setAttributionValue(``""``);``//Para todos os usuários deve-se passar vazio````dtoAllUsersSecurity.setPermission(``true``);````dtoAllUsersSecurity.setShowContent(``true``);````dtoAllUsersSecurity.setSecurityLevel(MODIFICATION);` ```//Definindo restrição para usuário````var` `dtoGroupRestrictionSecurity = docAPI.newDocumentSecurityConfigDto();````dtoGroupRestrictionSecurity.setAttributionType(GROUP_ATTRIBUTION_TYPE);````dtoGroupRestrictionSecurity.setAttributionValue(GROUP_CODE);````dtoGroupRestrictionSecurity.setPermission(``false``);````dtoGroupRestrictionSecurity.setShowContent(``true``);````dtoGroupRestrictionSecurity.setSecurityLevel(MODIFICATION);``` ```//Definindo restrição para todos os usuários````var` `dtoAllUsersRestrictionSecurity = docAPI.newDocumentSecurityConfigDto();````dtoAllUsersRestrictionSecurity.setAttributionType(ALL_USER_ATTRIBUTION_TYPE);````dtoAllUsersRestrictionSecurity.setAttributionValue(``""``);````dtoAllUsersRestrictionSecurity.setPermission(``true``);````dtoAllUsersRestrictionSecurity.setShowContent(``true``);````dtoAllUsersRestrictionSecurity.setSecurityLevel(RECORDING);``` ```//Adicionando permissões no array de segurança````dtosSecurity.push(dtoGroupSecurity);````dtosSecurity.push(dtoUserSecurity);````dtosSecurity.push(dtoAllUsersSecurity);` ```//Adicionando restrições no array de segurança````dtosSecurity.push(dtoGroupRestrictionSecurity);````dtosSecurity.push(dtoAllUsersRestrictionSecurity);``` ```var` `FOLDER = docAPI.createFolder(dto, dtosSecurity,``null``);````log.info(``"Folder successfully createad: ID :"` `+ FOLDER.getDocumentId());``` ```}``catch` `(e) {````log.error(``"Could not create folder: \n"` `+ e);````}``}` |
| --- |

## Execução automatizada

---

A execução automatizada determina que a execução do *script* será feita de forma assíncrona e sem a necessidade de uma interação manual de uma pessoa. Nesse tipo de execução, é possível definir o número de tentativas de execução e uma mensagem de sucesso que será exibida quando a execução for concluída sem inconsistências.

Quando a solicitação chega em uma atividade de serviço com execução automatizada, ela fica parada nesse ponto até que o *scritp* seja executado com sucesso ou até que ele seja executado o número de vezes definido como tentativas de execução.

Se o *script* for executado com sucesso, a atividade de serviço é considerada concluída e a solicitação segue o seu fluxo de saída padrão. Porém, se o número de tentativas for atingido sem que haja uma execução do *script* com sucesso, a solicitação é movimentada para o evento intermediário de captura de erro que, por sua vez, movimentará a solicitação para o fluxo correspondente à etapa de tratamento do erro.

Em atividades de serviço com a forma de execução automatizada, é obrigatório o uso do evento intermediário de captura de erro anexado a ela, bem como um fluxo de saída deste evento, para permitir que o processo seja desviado quando o *script* de integração não for executado com sucesso em nenhuma das tentativas feitas.

O *script* da próxima execução – depois de uma execução com inconsistência – pode receber a quantidade de tentativas de execução e a mensagem da última execução como parâmetros, podendo ser utilizados dentro do *script*. Dessa forma, o *script* ficaria conforme o exemplo abaixo:

[?](#)

| `function` `servicetask9(attempt, message) {````log.info(``"Exemplo servicetask"``);````var` `a = hAPI.getCardValue(``"campo_no_formulario"``);````if` `(a ==``"1"``) {````return` `true``;````}``else` `{````throw` `"Exemplo de Erro"``;````}``}` |
| --- |

Tanto a mensagem de sucesso quanto as mensagens de inconsistências são salvas no histórico da solicitação como complementos, podendo ser vistas por quem tiver acesso à solicitação.

INDICAÇÃO DE USO
A execução automatizada deve ser utilizada quando a execução não necessita de um retorno imediato sobre a operação ter sido ou não executada com êxito. Essa execução é mais indicada para integração com serviços que podem ficar indisponíveis ou externos e que, necessariamente, devem ser assíncronos, fornecendo um fluxo de contingência quando a integração não for concluída com sucesso em nenhuma tentativa por qualquer motivo.

O fluxo de contingência é criado anexando um evento intermediário de captura de erro à atividade de serviço (o evento deve ser colocado em cima da atividade). Esse fluxo de saída será utilizando quando todas as tentativas de integração falharem.

## Execução imediata

---

A execução imediata determina que a execução do *script* será feita de forma síncrona, logo depois do evento *afterStateEntry*do processo em questão, ou seja, será executado no momento em que a solicitação chegar na atividade de serviço.

Quando o *script* for executado com sucesso, a solicitação é enviada imediatamente da atividade de serviço para a próxima etapa, dando continuidade ao fluxo de saída padrão. Porém, se ocorrer alguma inconsistência, esta forma de execução apenas retornará a inconsistência encontrada, mantendo a solicitação parada até que uma pessoa interaja na solicitação para averiguar e corrigir as inconsistências que ocorreram.

Esse é um exemplo de código para iniciar a integração com o serviço configurado no componente:

[?](#)

| `try` `{````var` `Service = ServiceManager.getService(``'rm'``);````var` `serviceHelper = Service.getBean();````var` `serviceLocator = serviceHelper.instantiate(``'classe.locator'``);``}``catch``(erro) {````log.error(erro);``}` |
| --- |

INDICAÇÃO DE USO
A execução imediata deve ser utilizada quando a execução necessita de um retorno imediato sobre a operação para que o processo possa seguir adiante.

Nota:

Atualmente, o tipo de execução imediata não é muito recomendado por ter seu desempenho reduzido.

## Headers 

---

No contexto do componente Atividade de serviço, os **headers** (cabeçalhos) representam **informações adicionais**ou**metadados** que são enviados junto com a requisição de um serviço. Eles são usados para fornecer contexto ou parâmetros extras que o serviço ou a operação que está sendo chamada pode precisar para processar a requisição.

Os *headers* são frequentemente usados em chamadas de APIs REST ou SOAP e permitem adicionar informações cruciais para a comunicação entre sistemas. Cada chave/valor tem um propósito específico e a definição correta desses *headers* pode ser fundamental para o sucesso da integração com o serviço. Eles permitem personalizar ou configurar as requisições e, muitas vezes, podem ser obrigatórios para que o serviço funcione corretamente.

Esses *headers* podem ser usados para várias finalidades, dependendo do tipo de serviço e da operação. Alguns exemplos comuns de *headers* são:

- **Autenticação e autorização**: pode ser um *token* de autenticação, uma chave de API ou credenciais de um usuário.

```
EXEMPLO
```
**Chave**: `Authorization`**Valor**: `Bearer token_de_acesso`
- **Informações de rastreio**: dados sobre a requisição que podem ser usados para monitoramento ou rastreamento da chamada do serviço.
EXEMPLO**Chave**: `X-Request-ID`**Valor**: `12345`
- **Informações de contexto**: dados que definem o contexto da requisição, tais como o idioma, a localidade ou a versão da API.
EXEMPLO**Chave**: `Accept-Language`**Valor**: `pt-BR`
- **Formato dos dados**: definição sobre como os dados devem ser interpretados ou enviados, como o tipo de conteúdo (*Content-Type*) ou a versão da API.
EXEMPLO**Chave**: `Content-Type`**Valor**: `application/json`

## Parâmetros

---

No contexto do componente Atividade de serviço, os **parâmetros** são **valores** ou **variáveis** que o método/operação precisa receber para funcionar corretamente. Cada método/operação de um serviço geralmente tem uma lista de parâmetros que precisam ser fornecidos para que a execução da ação seja bem-sucedida. Sendo assim, o objetivo de configurar esses parâmetros é fornecer as informações necessárias para que o método/operação seja executado.

Esses parâmetros podem ser de diversos tipos, como números, textos, datas ou até mesmo objetos, que são uma estrutura de dados mais complexa.

EXEMPLO 1
Ao chamar um método/operação para criar um usuário, é necessário passar o **nome**, o ***e-mail*** e uma **senha** provisória para o novo usuário como parâmetros de entrada.

**Nome**: `Angelina Reek`

***E-mail***: `angelina.reek@email.com`

**Senha**: `senha123@45`

EXEMPLO 2
Ao chamar um método/operação para criar um pedido de compra, é necessário passar o **identificador (ID)** do cliente, os **itens do pedido** e o **valor total** como parâmetros de entrada.

**ID do cliente**: `78956`

**Itens do pedido**: `monitor; mouse; teclado; fone de ouvido`

**Valor total**: `1800`

Além de fornecer os dados essenciais para a execução do método/operação, outros objetivos da configuração dos parâmetros podem envolver:

- **a definição do contexto da execução**: os parâmetros podem determinar o contexto no qual a operação será executada.
EXEMPLOUm parâmetro de "idioma" pode ser usado para alterar o idioma de uma resposta ou para personalizar a resposta do serviço com base na localização do usuário.
- **a comunicação eficiente entre sistemas**: quando diferentes sistemas estão interagindo, é essencial que os parâmetros estejam corretamente configurados para que a comunicação e o entendimento entre eles se estabeleça corretamente.
EXEMPLOSe um serviço externo precisa de um código de produto para retornar informações sobre ele, esse código precisa ser passado corretamente como um parâmetro.
- **o mapeamento de dados**: permite mapear valores provenientes de outras etapas do processo.
EXEMPLOUm parâmetro pode ser alimentado com o valor presente no formulário do processo preenchido em uma etapa anterior, como um número de pedido ou o ID de um cliente.

Por isso, a configuração dos parâmetros do método/operação é essencial para a correta execução da ação e comunicação entre os sistemas envolvidos.

## Retorno

---

No contexto do componente Atividade de serviço, o **retorno** são os dados que a operação retorna depois de ser executada. Ao chamar um método/operação dentro de uma atividade de serviço, em muitos casos, a operação não só executa uma ação, mas também retorna um ou mais valores que podem ser usados em outras partes do processo. Esse retorno pode ser uma resposta simples – como um código de *status* ou uma mensagem – ou dados mais complexos – como um objeto JSON, uma lista ou um valor calculado.

Quando o método/operação é chamado, ele processa os dados de entrada, que são os [parâmetros](#Plataforma❙Atividadedeserviço-parametros). Durante sua execução, o método/operação pode realizar cálculos, consultas a um banco de dados ou algum outro processamento de dados. Depois de processar os parâmetros e realizar suas funções internas, o serviço gera um retorno. Esse retorno pode ser algo simples – como um código de sucesso – ou pode ser um conjunto de dados mais complexo – como o resultado de uma busca ou a confirmação de que uma ação foi realizada.

O retorno do serviço pode ser utilizado de várias formas no processo:

- **de forma condicional**: se o retorno for um código de *status*que indica sucesso ou falha, por exemplo, é possível direcionar o fluxo para diferentes caminhos dependendo do valor desse retorno;

- **como entrada para outras etapas**: pode "alimentar" outra etapa do processo, como o ID de um pedido retornado por um serviço Criar pedido, que pode ser passado para uma etapa/atividade Enviar notificação;

- **ser armazenado para uso futuro**: pode ser armazenado em variáveis ou campos de formulário para ser utilizado em uma fase posterior, como um ID de usuário gerado após sua criação.

Alguns exemplos de retorno de uma operação são:

- **criação de um registro**:
EXEMPLOAo chamar um método/operação para criar o cadastro de um novo usuário, o retorno pode ser o identificador (ID) do usuário gerado pelo sistema.**Retorno da execução**: `78956`
- **resposta de sucesso ou falha**:
EXEMPLOEm operações simples, o retorno pode ser apenas um *status*– como sucesso ou falha – ou um código que indica o resultado da execução.**Retorno da execução**: `sucesso`
- **dados complexos**:
EXEMPLOSe o objetivo de uma operação é buscar informações de um usuário, o retorno pode ser um objeto complexo com vários campos.**Retorno da execução**: `{ "id": 12345, "nome": "Alonso da Cunha", "email": "alonso.cunha@email.com" }`

- **valor calculado**:
EXEMPLOUma operação pode realizar cálculos e retornar um valor como resultado, como o preço final de um pedido com base em itens, descontos e impostos, onde o retorno pode ser o valor total.**Retorno da execução**: `5000`

Dessa forma, o retorno de uma operação é essencial para capturar os resultados de um serviço e usá-los de maneira eficaz dentro do fluxo do processo. Ele pode ser utilizado para tomar decisões, realizar ações subsequentes ou simplesmente para fornecer informações úteis para a continuação do processo.

## Configurar componente Atividade de serviço – REST

---

****

        Your browser does not support the HTML5 video element

**01.** No [diagrama](/pages/viewpage.action?pageId=860252119) do processo, clique no componente **Atividade de serviço** **** que deseja configurar com um serviço do tipo REST.

As configurações disponíveis são exibidas na lateral direita.

**02.** Na aba **Geral**, defina as informações gerais para o componente que representa a execução de um serviço externo.

**Título**
Nome da etapa que representa a execução de um serviço externo. O nome também pode ser alterado diretamente no componente, clicando sobre seu nome atual e depois em **Editar**![](/download/attachments/919050491/editar.png?version=1&modificationDate=1741020395973&api=v2)– localizado no lado direito.

EXEMPLO DE USO
Em um processo de **Aprovação de contrato**, o componente poderia receber o nome **Criar pasta e armazenar contrato**, visto que ele servirá para criar uma pasta específica para armazenar esse contrato no recurso [Documentos](/pages/viewpage.action?pageId=233762797).

**Selecione o serviço**
Serviço externo que será utilizado para executar alguma ação. É possível selecionar serviços do tipo **REST**que já existem no recurso [Serviços](/pages/viewpage.action?pageId=243660796) do Painel de controle.

**Tipo de execução**
Forma como a requisição do serviço externo será executada. As opções disponíveis são:

- **Automatizado**: a requisição é executada de forma assíncrona. Deve ser utilizado quando a execução não necessita de um retorno imediato sobre a operação ter sido ou não executada com êxito;

- **Imediato**: a requisição é executada de forma síncrona. Deve ser utilizado quando a execução necessita de um retorno imediato sobre a operação para que o processo possa seguir adiante.

Dica!

Saiba mais sobre os tipos de execução em [Integração assíncrona via processos *workflow*](/pages/viewpage.action?pageId=237397494).

**Tentativas**
Número de vezes que o componente deve tentar executar a operação do serviço antes que seja encaminhado para o evento intermediário de captura de erro. Esse campo somente é exibido ao selecionar o tipo de execução **Automatizado**.

**A cada**Intervalo que o componente deve considerar entre uma tentativa e outra de execução. Esse campo somente é exibido ao selecionar o tipo de execução **Automatizado**.

**Frequência**Unidade de tempo que o componente deve considerar para fazer os intervalos e as tentativas de execução. Esse campo somente é exibido ao selecionar o tipo de execução **Automatizado**. As opções disponíveis são:

- **Minuto**;
- **Hora**;
- **Dia**.

EXEMPLO DE CONFIGURAÇÃO DE TENTATIVAS
→ O componente deve tentar executar o *script* por **10** vezes, tentando **1** vez  a cada **hora**. Sendo assim, a configuração deve ser feita como:

| Tentativas | A cada | Frequência |
| --- | --- | --- |
| Tentativas | A cada | Frequência |
| 10 | 1 | Hora |

**Mensagem**
Mensagem que será exibida na conclusão da execução da operação do serviço.

**03.** Clique em**Configurar integração**.

**04.** Na aba **Geral**, defina as informações solicitadas para configurar a execução do serviço. 

**Selecione a ação (operação)**
Método do serviço correspondente à ação que será feita a partir da integração.

**Defina o tempo de resposta**Tempo que a requisição pode aguardar para obter resposta sobre a execução da operação do serviço.

**Ativar conexão segura (SSL)**Quando ativada, determina que a comunicação com o serviço será segura e evitará que terceiros acessem os dados trocados durante a integração.

**05.** Em ***Header***, clique em **Adicionar header** para adicionar informações adicionais à requisição do serviço.

Os *headers* ou cabeçalhos são informações adicionais ou metadados que são enviados juntos com a requisição do serviço para que a integração funcione corretamente. Mais detalhes e exemplos podem ser obtidos em [*Headers*](#Plataforma❙Atividadedeserviço-headers).

**06.** Informe os dados necessários para cada *header*.

**Chave**
Chave de identificação do parâmetro.

**Valor**
Valor que deve ser atribuído ao parâmetro.

EXEMPLO

**Chave**: `Content-Type`

**Valor**: `application/json`

Veja mais exemplos em [*Headers*](#Plataforma❙Atividadedeserviço-headers).

Para excluir o *header* adicionado, basta clicar em **Excluir header**– localizado no lado direito.

**07.** Clique na aba **Parâmetros** para configurar os parâmetros do método/operação do serviço. 

Os parâmetros exibidos são os que pertencem ao método/operação que foi selecionado em **Selecione a ação (operação)** na aba **Geral**.

Esses parâmetros são os dados que o método/operação precisa receber para ser executado. Mais detalhes e exemplos podem ser obtidos em [Parâmetros](#Plataforma❙Atividadedeserviço-parametros).

**08.** Na coluna **Origem do valor** de cada parâmetro, selecione de onde será obtido o valor que será passado para esse parâmetro do método/operação.

As opções disponíveis são:

- **Campo de formulário**: quando selecionada, determina que o valor que será passado para o parâmetro será obtido de um campo do formulário do processo. Essa opção somente é exibida quando existe um formulário vinculado ao processo e não é exibida para parâmetros do tipo lista ou objeto;

- **Variável**: quando selecionada, determina que o valor que será passado para o parâmetro será obtido de uma variável padrão existente no contexto do processo. Essa opção não é exibida para parâmetros do tipo lista ou objeto;

- **Nulo**: quando selecionada, determina que nenhum valor será passado para esse parâmetro;

- **Fixo**: quando selecionada, determina que o valor que será passado para o parâmetro é um valor fixo que será informado no componente.

**09.** Na coluna **Valor** de cada parâmetro, selecione ou insira o valor que será passado de acordo com a origem selecionada.

Se a origem selecionada foi:

- **Campo de formulário**: selecione o campo do formulário do processo do qual será obtido o valor que será passado para o parâmetro. São exibidos todos os campos que pertencem ao formulário vinculado ao processo;

- **Variável**: selecione a variável padrão do contexto do processo da qual será obtido o valor que será passado para o parâmetro. As variáveis disponíveis são:WKCompany;
- WKUser;
- WKCardId;
- WKCurrentState;
- WKDef;
- WKFormId;
- WKNextState;
- WKNumProcess;
- WKNumState;
- WKUserComment;

- **Fixo**: informe o valor fixo que será passado para o parâmetro.

**10.** Se um dos parâmetros for do tipo objeto, na coluna **Ação**, clique em **Editar objeto** ![](/download/attachments/919050491/editar.png?version=1&modificationDate=1741020395973&api=v2) para configurar os parâmetros do objeto.

Os parâmetros exibidos são os que pertencem ao objeto em questão. É possível configurar todos os parâmetros do objeto da mesma forma que é feito para os demais parâmetros.

Se um dos parâmetros do objeto também for do tipo objeto, é possível configurar seus respectivos parâmetros da mesma forma, clicando em **Editar objeto** ![](/download/attachments/919050491/editar.png?version=1&modificationDate=1741020395973&api=v2) e configurando os respectivos valores para cada parâmetro. E assim sucessivamente para cada parâmetro que for do tipo objeto.

Se um dos parâmetros do objeto for do tipo lista, é possível configurar seus parâmetros clicando em **Adicionar via lista** ![](/download/attachments/919050491/adicionar.png?version=1&modificationDate=1741020396167&api=v2) e configurando os respectivos valores para cada parâmetro da lista.

**11.** Ao finalizar a configuração dos parâmetros do objeto, clique em **Salvar**, para voltar para a aba **Parâmetros**.

**12.** Se um dos parâmetros for do tipo lista, na coluna **Ação**, clique em **Adicionar via lista** ![](/download/attachments/919050491/adicionar.png?version=1&modificationDate=1741020396167&api=v2) para adicionar os valores para os parâmetros da lista.

**13.** Clique em **Adicionar valor** ![](/download/attachments/919050491/adicionar.png?version=1&modificationDate=1741020396167&api=v2).

Os parâmetros exibidos são os que pertencem à lista em questão. É possível configurar todos os parâmetros da lista da mesma forma que é feito para os demais parâmetros.

Se um dos parâmetros da lista for do tipo objeto, é possível configurar seus parâmetros clicando em **Editar objeto** ![](/download/attachments/919050491/editar.png?version=1&modificationDate=1741020395973&api=v2) e configurando os respectivos valores para cada parâmetro do objeto. E assim sucessivamente para cada parâmetro que for do tipo objeto.

Para excluir um valor adicionado, basta clicar em **Excluir** ![](/download/attachments/919050491/excluir.png?version=1&modificationDate=1757011389317&api=v2)– localizado na coluna **Ação**.

**14.** Ao finalizar a configuração dos parâmetros da lista, clique em **Salvar**, para voltar para a aba **Parâmetros**.

**15.** Para os tipos de parâmetros Objeto ou Map, é possível adicionar atributos clicando em **Adicionar atributos** ![](/download/attachments/919050491/adicionar.png?version=1&modificationDate=1741020396167&api=v2) – localizado ao lado do parâmetro.

**16.** Clique em **Adicionar atributos** ![](/download/attachments/919050491/adicionar.png?version=1&modificationDate=1741020396167&api=v2).

**17.** Na coluna **Chave**, insira uma chave para identificar o atributo.

**18.** Na coluna **Atribuição**, selecione como será a atribuição de valor para o atributo.

As opções disponíveis são:

- **Campo de formulário**: quando selecionada, determina que o valor para esse atributo será obtido de um campo do formulário do processo. Essa opção somente é exibida quando existe um formulário vinculado ao processo;

- **Variável**: quando selecionada, determina que o valor para esse atributo será obtido de uma variável padrão existente no contexto do processo;

- **Fixo**: quando selecionada, determina que o valor para esse atributo é um valor fixo que será informado no componente.

**19.**Na coluna **Valor**, selecione ou insira o valor para o atributo de acordo com a origem selecionada.

Se a origem selecionada foi:

- **Campo de formulário**: selecione o campo do formulário do processo do qual será obtido o valor para o atributo. São exibidos todos os campos que pertencem ao formulário vinculado ao processo;

- **Variável**: selecione a variável padrão do contexto do processo da qual será obtido o valor para o atributo. As variáveis disponíveis são:WKCompany;
- WKUser;
- WKCardId;
- WKCurrentState;
- WKDef;
- WKFormId;
- WKNextState;
- WKNumProcess;
- WKNumState;
- WKUserComment;

- **Fixo**: informe o valor fixo para o atributo.

**20.** Ao finalizar a configuração dos atributos, clique em **Salvar** até voltar para a aba **Parâmetros**.

**21.** Clique na aba **Retorno** para configurar o destino dos dados retornados pelo método/operação. 

Os dados de retorno exibidos são os que pertencem ao método/operação que foi selecionado em **Selecione a ação (operação)** na aba **Geral**.

Eles são os dados que a operação retorna depois de ser executada. Mais detalhes e exemplos podem ser obtidos em [Retorno](#Plataforma❙Atividadedeserviço-retorno).

**22.** Na coluna **Atribuição** de cada retorno, selecione para onde o dado retornado pelo método/operação deve ser enviado ou armazenado para ser usado no processo.

As opções disponíveis são:

- **Descartar**: quando selecionada, determina que o valor que será retornado por esse parâmetro do método/operação não será utilizado em nenhum momento no processo e, por isso, pode ser descartado. Essa opção somente é exibida quando existe um formulário vinculado ao processo;

- **Formulário**: quando selecionada, determina que o valor que será retornado por esse parâmetro do método/operação deve ser armazenado em um campo do formulário do processo. Essa opção somente é exibida quando existe um formulário vinculado ao processo.

**23.** Na coluna **Valor** de cada retorno, defina onde o dado retornado deve ser armazenado ou utilizado, de acordo com o destino selecionado.

Se o destino selecionado foi:

- **Formulário**: selecione o campo do formulário do processo no qual o valor retornado pelo método/operação deve ser armazenado. São exibidos todos os campos que pertencem ao formulário vinculado ao processo.

**24.** Se um dos parâmetros de retorno for do tipo complexo, como objeto ou lista, na coluna **Ação**, clique em **Editar objeto** ![](/download/attachments/919050491/editar.png?version=1&modificationDate=1741020395973&api=v2) para configurar o destino dos valores de retorno.

Os parâmetros exibidos são os que pertencem ao objeto retornado em questão. É possível configurar todos os parâmetros do objeto retornado da mesma forma que é feito para os demais parâmetros de retorno.

Se um dos parâmetros do objeto retornado também for do tipo complexo, como objeto ou lista, é possível configurar seus respectivos parâmetros da mesma forma, clicando em **Editar objeto** ![](/download/attachments/919050491/editar.png?version=1&modificationDate=1741020395973&api=v2). E assim sucessivamente para cada parâmetro do objeto retornado que for do tipo complexo, como objeto ou lista.

**25.** Ao finalizar a configuração dos parâmetros do objeto retornado, clique em **Salvar**, para voltar para a aba **Retorno**.

**26.** Clique em **Salvar**para salvar todas as configurações feitas para o serviço, operação, parâmetros e retorno.

**27.** Clique em **Salvar rascunho** – localizado no lado direito da barra superior – para salvar as configurações feitas no componente **Atividade de serviço**.

**28.** Na mensagem exibida, clique em **Ok, entendi**.

## Configurar componente Atividade de serviço – SOAP

---

****

        Your browser does not support the HTML5 video element

**01.** No [diagrama](/pages/viewpage.action?pageId=860252119) do processo, clique no componente **Atividade de serviço** **** que deseja configurar com um serviço do tipo SOAP.

As configurações disponíveis são exibidas na lateral direita.

**02.** Na aba **Geral**, defina as informações gerais para o componente que representa a execução de um serviço externo.

**Título**
Nome da etapa que representa a execução de um serviço externo. O nome também pode ser alterado diretamente no componente, clicando sobre seu nome atual e depois em **Editar**![](/download/attachments/919050491/editar.png?version=1&modificationDate=1741020395973&api=v2)– localizado no lado direito.

EXEMPLO DE USO
Em um processo de **Aprovação de crédito**, o componente poderia receber o nome **Consultar crédito**, visto que ele servirá para consultar o serviço de crédito do cliente para que a compra liberada.

**Selecione o serviço**
Serviço externo que será utilizado para executar alguma ação. É possível selecionar serviços do tipo **SOAP **que já existem no recurso [Serviços](/pages/viewpage.action?pageId=243660796) do Painel de controle.

**Tipo de execução**
Forma como a requisição do serviço externo será executada. As opções disponíveis são:

- **Automatizado**: a requisição é executada de forma assíncrona. Deve ser utilizado quando a execução não necessita de um retorno imediato sobre a operação ter sido ou não executada com êxito;

- **Imediato**: a requisição é executada de forma síncrona. Deve ser utilizado quando a execução necessita de um retorno imediato sobre a operação para que o processo possa seguir adiante.

Dica!

Saiba mais sobre os tipos de execução em [Integração assíncrona via processos *workflow*](/pages/viewpage.action?pageId=237397494).

**Tentativas**
Número de vezes que o componente deve tentar executar a operação do serviço antes que seja encaminhado para o evento intermediário de captura de erro. Esse campo somente é exibido ao selecionar o tipo de execução **Automatizado**.

**A cada**Intervalo que o componente deve considerar entre uma tentativa e outra de execução. Esse campo somente é exibido ao selecionar o tipo de execução **Automatizado**.

**Frequência**Unidade de tempo que o componente deve considerar para fazer os intervalos e as tentativas de execução. Esse campo somente é exibido ao selecionar o tipo de execução **Automatizado**. As opções disponíveis são:

- **Minuto**;
- **Hora**;
- **Dia**.

EXEMPLO DE CONFIGURAÇÃO DE TENTATIVAS
→ O componente deve tentar executar o *script* por **10** vezes, tentando **1** vez  a cada **hora**. Sendo assim, a configuração deve ser feita como:

| Tentativas | A cada | Frequência |
| --- | --- | --- |
| Tentativas | A cada | Frequência |
| 10 | 1 | Hora |

**Mensagem**
Mensagem que será exibida na conclusão da execução da operação do serviço.

**03.** Clique em**Configurar integração**.

**04.** Na aba **Geral**, defina as informações solicitadas para configurar a execução do serviço. 

**Selecione a ação (operação)**
Método do serviço correspondente à ação que será feita a partir da integração.

**Defina o tempo de resposta**Tempo que a requisição pode aguardar para obter resposta sobre a execução da operação do serviço.

**Ativar conexão segura (SSL)**Quando ativada, determina que a comunicação com o serviço será segura e evitará que terceiros acessem os dados trocados durante a integração.

**Ativar Chunking**
Quando ativada, determina que a resposta do serviço será dividida em partes menores, evitando que o processo fique pesado ou apresente inconsistências.

**05.** Em ***Header***, clique em **Adicionar header** para adicionar informações adicionais à requisição do serviço.

Os *headers* ou cabeçalhos são informações adicionais ou metadados que são enviados juntos com a requisição do serviço para que a integração funcione corretamente. Mais detalhes e exemplos podem ser obtidos em [*Headers*](#Plataforma❙Atividadedeserviço-headers).

**06.** Informe os dados necessários para cada *header*.

**Nome do header**
Nome para identificação do *header* que será adicionado.

**Objeto**
Objeto do serviço que possui informações que precisam ser enviadas junto com a requisição. São exibidos para seleção apenas os objetos que possuem campos.

**07.** Na coluna **Valor** de cada propriedade do objeto, insira o valor que será enviado para essa propriedade na requisição do serviço.

**08.** Ao finalizar a configuração das propriedades do objeto do *header*, clique em **Salvar**.

Para editar as configurações do *header* adicionado, basta clicar em **Editar header** ![](/download/attachments/919050491/editar.png?version=1&modificationDate=1741020395973&api=v2)– localizado no lado direito.

Também é possível excluir o *header* adicionado clicando em **Excluir header** ![](/download/attachments/919050491/excluir.png?version=1&modificationDate=1757011389317&api=v2).

**09.** Clique na aba **Parâmetros** para configurar os parâmetros do método/operação do serviço. 

Os parâmetros exibidos são os que pertencem ao método/operação que foi selecionado em **Selecione a ação (operação)** na aba **Geral**.

Esses parâmetros são os dados que o método/operação precisa receber para ser executado. Mais detalhes e exemplos podem ser obtidos em [Parâmetros](#Plataforma❙Atividadedeserviço-parametros).

**10.** Na coluna **Origem do valor** de cada parâmetro, selecione de onde será obtido o valor que será passado para esse parâmetro do método/operação.

As opções disponíveis são:

- **Campo de formulário**: quando selecionada, determina que o valor que será passado para o parâmetro será obtido de um campo do formulário do processo. Essa opção somente é exibida quando existe um formulário vinculado ao processo e não é exibida para parâmetros do tipo lista ou objeto;

- **Variável**: quando selecionada, determina que o valor que será passado para o parâmetro será obtido de uma variável padrão existente no contexto do processo. Essa opção não é exibida para parâmetros do tipo lista ou objeto;

- **Nulo**: quando selecionada, determina que nenhum valor será passado para esse parâmetro;

- **Fixo**: quando selecionada, determina que o valor que será passado para o parâmetro é um valor fixo que será informado no componente.

**11.** Na coluna **Valor** de cada parâmetro, selecione ou insira o valor que será passado de acordo com a origem selecionada.

Se a origem selecionada foi:

- **Campo de formulário**: selecione o campo do formulário do processo do qual será obtido o valor que será passado para o parâmetro. São exibidos todos os campos que pertencem ao formulário vinculado ao processo;

- **Variável**: selecione a variável padrão do contexto do processo da qual será obtido o valor que será passado para o parâmetro. As variáveis disponíveis são:WKCompany;
- WKUser;
- WKCardId;
- WKCurrentState;
- WKDef;
- WKFormId;
- WKNextState;
- WKNumProcess;
- WKNumState;
- WKUserComment;

- **Fixo**: informe o valor fixo que será passado para o parâmetro.

**12.** Se um dos parâmetros for do tipo objeto, na coluna **Ação**, clique em **Editar objeto** ![](/download/attachments/919050491/editar.png?version=1&modificationDate=1741020395973&api=v2) para configurar os parâmetros do objeto.

Os parâmetros exibidos são os que pertencem ao objeto em questão. É possível configurar todos os parâmetros do objeto da mesma forma que é feito para os demais parâmetros.

Se um dos parâmetros do objeto também for do tipo objeto, é possível configurar seus respectivos parâmetros da mesma forma, clicando em **Editar objeto** ![](/download/attachments/919050491/editar.png?version=1&modificationDate=1741020395973&api=v2) e configurando os respectivos valores para cada parâmetro. E assim sucessivamente para cada parâmetro que for do tipo objeto.

Se um dos parâmetros do objeto for do tipo lista, é possível configurar seus parâmetros clicando em **Adicionar via lista** ![](/download/attachments/919050491/adicionar.png?version=1&modificationDate=1741020396167&api=v2) e configurando os respectivos valores para cada parâmetro da lista.

**13.** Ao finalizar a configuração dos parâmetros do objeto, clique em **Salvar**, para voltar para a aba **Parâmetros**.

**14.** Se um dos parâmetros for do tipo lista, na coluna **Ação**, clique em **Adicionar via lista** ![](/download/attachments/919050491/adicionar.png?version=1&modificationDate=1741020396167&api=v2) para adicionar os valores para os parâmetros da lista.

**15.** Clique em **Adicionar valor** ![](/download/attachments/919050491/adicionar.png?version=1&modificationDate=1741020396167&api=v2).

Os parâmetros exibidos são os que pertencem à lista em questão. É possível configurar todos os parâmetros da lista da mesma forma que é feito para os demais parâmetros.

Se um dos parâmetros da lista for do tipo objeto, é possível configurar seus parâmetros clicando em **Editar objeto** ![](/download/attachments/919050491/editar.png?version=1&modificationDate=1741020395973&api=v2) e configurando os respectivos valores para cada parâmetro do objeto. E assim sucessivamente para cada parâmetro que for do tipo objeto.

Para excluir um valor adicionado, basta clicar em **Excluir** ![](/download/attachments/919050491/excluir.png?version=1&modificationDate=1757011389317&api=v2)– localizado na coluna **Ação**.

**16.** Ao finalizar a configuração dos parâmetros da lista, clique em **Salvar**, para voltar para a aba **Parâmetros**.

**17.** Para os tipos de parâmetros Objeto ou Map, é possível adicionar atributos clicando em **Adicionar atributos** ![](/download/attachments/919050491/adicionar.png?version=1&modificationDate=1741020396167&api=v2) – localizado ao lado do parâmetro.

**18.** Clique em **Adicionar atributos** ![](/download/attachments/919050491/adicionar.png?version=1&modificationDate=1741020396167&api=v2).

**19.** Na coluna **Chave**, insira uma chave para identificar o atributo.

**20.** Na coluna **Atribuição**, selecione como será a atribuição de valor para o atributo.

As opções disponíveis são:

- **Campo de formulário**: quando selecionada, determina que o valor para esse atributo será obtido de um campo do formulário do processo. Essa opção somente é exibida quando existe um formulário vinculado ao processo;

- **Variável**: quando selecionada, determina que o valor para esse atributo será obtido de uma variável padrão existente no contexto do processo;

- **Fixo**: quando selecionada, determina que o valor para esse atributo é um valor fixo que será informado no componente.

**21.**Na coluna **Valor**, selecione ou insira o valor para o atributo de acordo com a origem selecionada.

Se a origem selecionada foi:

- **Campo de formulário**: selecione o campo do formulário do processo do qual será obtido o valor para o atributo. São exibidos todos os campos que pertencem ao formulário vinculado ao processo;

- **Variável**: selecione a variável padrão do contexto do processo da qual será obtido o valor para o atributo. As variáveis disponíveis são:WKCompany;
- WKUser;
- WKCardId;
- WKCurrentState;
- WKDef;
- WKFormId;
- WKNextState;
- WKNumProcess;
- WKNumState;
- WKUserComment;

- **Fixo**: informe o valor fixo para o atributo.

**22.** Ao finalizar a configuração dos atributos, clique em **Salvar** até voltar para a aba **Parâmetros**.

**23.** Clique na aba **Retorno** para configurar o destino dos dados retornados pelo método/operação. 

Os dados de retorno exibidos são os que pertencem ao método/operação que foi selecionado em **Selecione a ação (operação)** na aba **Geral**.

Eles são os dados que a operação retorna depois de ser executada. Mais detalhes e exemplos podem ser obtidos em [Retorno](#Plataforma❙Atividadedeserviço-retorno).

**24.** Na coluna **Atribuição** de cada retorno, selecione para onde o dado retornado pelo método/operação deve ser enviado ou armazenado para ser usado no processo.

As opções disponíveis são:

- **Descartar**: quando selecionada, determina que o valor que será retornado por esse parâmetro do método/operação não será utilizado em nenhum momento no processo e, por isso, pode ser descartado. Essa opção somente é exibida quando existe um formulário vinculado ao processo;

- **Formulário**: quando selecionada, determina que o valor que será retornado por esse parâmetro do método/operação deve ser armazenado em um campo do formulário do processo. Essa opção somente é exibida quando existe um formulário vinculado ao processo.

**25.** Na coluna **Valor** de cada retorno, defina onde o dado retornado deve ser armazenado ou utilizado, de acordo com o destino selecionado.

Se o destino selecionado foi:

- **Formulário**: selecione o campo do formulário do processo no qual o valor retornado pelo método/operação deve ser armazenado. São exibidos todos os campos que pertencem ao formulário vinculado ao processo.

**26.** Se um dos parâmetros de retorno for do tipo complexo, como objeto ou lista, na coluna **Ação**, clique em **Editar objeto** ![](/download/attachments/919050491/editar.png?version=1&modificationDate=1741020395973&api=v2) para configurar o destino dos valores de retorno.

Os parâmetros exibidos são os que pertencem ao objeto retornado em questão. É possível configurar todos os parâmetros do objeto retornado da mesma forma que é feito para os demais parâmetros de retorno.

Se um dos parâmetros do objeto retornado também for do tipo complexo, como objeto ou lista, é possível configurar seus respectivos parâmetros da mesma forma, clicando em **Editar objeto** ![](/download/attachments/919050491/editar.png?version=1&modificationDate=1741020395973&api=v2). E assim sucessivamente para cada parâmetro do objeto retornado que for do tipo complexo, como objeto ou lista.

**27.** Ao finalizar a configuração dos parâmetros do objeto retornado, clique em **Salvar**, para voltar para a aba **Retorno**.

**28.** Clique em **Salvar**para salvar todas as configurações feitas para o serviço, operação, parâmetros e retorno.

**29.** Clique em **Salvar rascunho** – localizado no lado direito da barra superior – para salvar as configurações feitas no componente **Atividade de serviço**.

**30.** Na mensagem exibida, clique em **Ok, entendi**.

## Configurar integração

---

****

        Your browser does not support the HTML5 video element

**01.** No [diagrama](/pages/viewpage.action?pageId=860252119) do processo, clique no componente **Atividade de serviço** para o qual deseja configurar a integração depois de selecionar o serviço desejado.

**02.** Clique em **Configurar integração**.

**03.** Defina as configurações desejadas para a integração nas abas **Geral**, **Parâmetros** e **Retorno**, de acordo com o tipo de serviço selecionado.

Obtenha informações detalhadas sobre as opções disponíveis de configuração para cada serviço em [REST](#Plataforma❙Atividadedeserviço-rest) e [SOAP](#Plataforma❙Atividadedeserviço-soap).

**04.** Depois de definir todas as configurações desejadas em cada aba, clique em **Salvar**.

**05.** Clique em **Salvar rascunho** – localizado no lado direito da barra superior – para salvar as alterações feitas no componente **Atividade de serviço**.

**06.** Na mensagem exibida, clique em **Ok, entendi**.

### Editar integração

---

****

        Your browser does not support the HTML5 video element

**01.** No [diagrama](/pages/viewpage.action?pageId=860252119) do processo, clique no componente **Atividade de serviço** para o qual deseja editar as configurações da integração.

**02.** Clique em **Editar** ![](/download/attachments/919050491/editar-azul.png?version=1&modificationDate=1756928567207&api=v2) – localizado no quadro da integração configurada.

**03.** Edite as configurações desejadas para a integração nas abas **Geral**, **Parâmetros** e **Retorno**, de acordo com o tipo de serviço selecionado.

Obtenha informações detalhadas sobre as opções disponíveis de configuração para cada serviço em [REST](#Plataforma❙Atividadedeserviço-rest) e [SOAP](#Plataforma❙Atividadedeserviço-soap).

**04.** Depois de editar todas as configurações desejadas em cada aba, clique em **Salvar**.

**05.** Clique em **Salvar rascunho** – localizado no lado direito da barra superior – para salvar as alterações feitas no componente **Atividade de serviço**.

**06.** Na mensagem exibida, clique em **Ok, entendi**.

### Excluir integração

---

****

        Your browser does not support the HTML5 video element

**01.** No [diagrama](/pages/viewpage.action?pageId=860252119) do processo, clique no componente **Atividade de serviço** do qual deseja excluir a integração configurada.

**02.** Clique em **Excluir** ![](/download/attachments/919050491/excluir-azul.png?version=1&modificationDate=1756928676390&api=v2) – localizado no quadro da integração configurada.

**03.** Na mensagem exibida, clique em **Excluir** para confirmar a exclusão da integração.

**04.** Clique em **Salvar rascunho** – localizado no lado direito da barra superior – para salvar as alterações feitas no componente **Atividade de serviço**.

**05.** Na mensagem exibida, clique em **Ok, entendi**.

## Dúvidas frequentes

---

Confira aqui algumas dúvidas frequentes sobre o componente Atividade de serviço.

[Abrir/fechar todas as dúvidas](#)

#### Quando se deve usar uma atividade de serviço?

---

A atividade de serviço é indicada quando o processo depende de dados externos oriundos de uma ação automatizada que pode ser executada sem a necessidade de interação direta de uma pessoa, tais como uma consulta a um banco de dados, uma chamada a uma API externa ou um cálculo automatizado.

#### Qual é a diferença da atividade de serviço e o evento de mensagem?

---

A principal diferença entre esses dois componentes é o papel de cada um. Enquanto a atividade de serviço executa uma ação específica – como uma consulta a um sistema externos – o evento de mensagem envia ou recebe uma mensagem durante o andamento do processo, o que pode desencadear uma ação em outro processo ou sistema.

Sendo assim, pode-se dizer que o evento de mensagem é mais voltado para a comunicação entre processos ou sistemas e a atividade de serviço tem como objetivo automatizar uma ação dentro do processo.

####  O que acontece se uma atividade de serviço falhar ou gerar um erro?

---

Se a atividade de serviço foi configurada com a execução **automatizada**, é obrigatório que ela contenha um evento intermediário de captura de erro e um fluxo alternativo para onde a solicitação será direcionada em caso de falhas. Desta forma, quando a execução da atividade de serviço falhar, a solicitação será direcionada para o evento de captura de erro e, posteriormente, para o fluxo alternativo que direciona para uma etapa de tratamento da falha. Depois que a falha for solucionada, a solicitação volta para a atividade de serviço de origem e, assim que ela for executada com sucesso, segue o fluxo principal de saída.

Se a atividade de serviço foi configurada com a execução **imediata**, quando o *script* for executado com sucesso, a solicitação é enviada imediatamente da atividade de serviço para a próxima etapa, dando continuidade ao fluxo de saída padrão. Porém, se ocorrer alguma inconsistência, ela apenas retornará a inconsistência encontrada, mantendo a solicitação parada até que uma pessoa interaja na solicitação para averiguar e corrigir as inconsistências que ocorreram.

Fique atento!

Esta documentação é válida a partir da atualização** Voyager (2.0)**. Se você utiliza uma atualização anterior, ela pode conter informações diferentes das quais você vê na sua plataforma.


<!-- anchors: Plataforma❙Atividadedeserviço-FalandodecomponenteAtividadedeserviço..., highlighter_822889, Plataforma❙Atividadedeserviço-Execuçãoautomatizada, highlighter_799689, Plataforma❙Atividadedeserviço-Execuçãoimediata, highlighter_842788, Plataforma❙Atividadedeserviço-Headersheaders, Plataforma❙Atividadedeserviço-Parâmetrosparametros, Plataforma❙Atividadedeserviço-Retornoretorno, Plataforma❙Atividadedeserviço-ConfigurarcomponenteAtividadedeserviço–RESTrest, Plataforma❙Atividadedeserviço-ConfigurarcomponenteAtividadedeserviço–SOAPsoap, Plataforma❙Atividadedeserviço-Configurarintegração, Plataforma❙Atividadedeserviço-Editarintegração, Plataforma❙Atividadedeserviço-Excluirintegração, Plataforma❙Atividadedeserviço-Dúvidasfrequentes, toggleAll-3, Plataforma❙Atividadedeserviço-@saiba-mais-1Quandosedeveusarumaatividadedeserviço?, content_@saiba-mais-1, Plataforma❙Atividadedeserviço-@saiba-mais-2Qualéadiferençadaatividadedeserviçoeoeventodemensagem?, content_@saiba-mais-2, Plataforma❙Atividadedeserviço-@saiba-mais-3Oqueaconteceseumaatividadedeserviçofalharougerarumerro?, content_@saiba-mais-3 -->
