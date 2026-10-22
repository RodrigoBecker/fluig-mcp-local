---
title: "Formulários - Campo Pesquisa (zoom)"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=872686733"
scraped_at: "2026-03-09T03:59:34.080Z"
depth: 2
anchors: 35
child_links: 69
---

# Formulários - Campo Pesquisa (zoom)

O campo de pesquisa (ou campo zoom) é uma ferramenta poderosa para otimizar a seleção e visualização de dados em formulários. Com um simples campo, o usuário passa a ter acesso à dados de uma forma ágil, podendo filtrar e selecionar valores de outros componentes e formulários do Fluig ou mesmo de aplicativos externos através de Datasets.

---

# Nesta documentação

 Click here to expand...

# Pré-requisitos

Essa documentação é indicada para desenvolvedores familiarizados com html e javascript, e com o uso de [Datasets](/display/fluig/Desenvolvimento+de+Datasets) no Fluig.

# Sintaxe

[?](#)

| `` |
| --- |

[?](#)

| `` |
| --- |

# Atributos

**zoomvalue**

Uma string com o nome de um campo do dataset que pode ser armazenado além do texto visível em tela.

O campo de pesquisa pode ser usado para armazenar uma informação para o usuário (como nome de uma pessoa ou empresa) mas a solicitação precisa de um código de identificação (como id do usuário, cpf, cnpj) para alguma integração ou mesmo mecanismo de atribuição. Quando não utilizado o atributo zoomvalue, apenas o valor que é exibido após a seleção é gravado.

Ao utilizar o zoomvalue, o formulário deve conter um campo com nome e id iguais ao do campo de pesquisa com o prefixo "**hidden_**" (por exemplo, campo "**pessoa**" precisa do campo "**hidden_pessoa**"). Assim, ao selecionar um registro, o Fluig irá automaticamente preencher o **hidden_campo** com o campo do dataset definido no atributo.

Importante: O campo definido no zoomvalue deve estar entre os campos listados em **fields** no atributo **data-zoom**

**Data-zoom**

O atributo data-zoom recebe um objeto onde a maior parte das configurações possíveis para o campo pesquisa são feitas. Ele é um objeto complexo onde é definido qual o dataset, qual campo deste dataset será usado para preencher o campo, se permite mais de uma item selecionado e quais os campos podem ser usados de filtro. Consulte mais sobre ele [neste documentação](/display/fluig/Data-zoom).

# Métodos

---

O campo zoom invoca algumas funções que podem ser sobrescritos para uma maior personalização do formulário.

**setSelectedZoomItem (Object item)**

Esta função é chamada sempre que um item é selecionado em um campo pesquisa. Pode ser utilizado para armazenar outra informação do item de dataset selecionado em outro campo, validações ou mesmo para atualizar os filtros de outros componentes e campos pesquisa do formulário.

**removedZoomItem (Object item)**

Esta função é chamada sempre que um item é removido do campo pesquisa. Normalmente é usado em conjunto com setSelectedZoomItem para "desfazer" as ações.

**reloadZoomFilterValues (String inputName, String filterValues)**

Esta função é usada para atualizar o **filterValues*** *da configuração realizada no atributo **data-zoom**, e pode ser utilizado para adicionar filtros extras conforme outros dados do formulário ou outras opções selecionadas em outros campos pesquisa. Por exemplo, o usuário selecionou um cliente em um campo pesquisa e eu posso adicionar esta seleção como um novo filtro no campo de pedido.

# Dependências

---

Para o funcionamento correto do componente, o seu formulário deve carregar as seguintes bibliotecas

[?](#)

| ```````` |
| --- |

# Exemplos de uso

---

### Consulta simples ao cadastro de usuários buscando e ordenando pelo nome

[?](#)

| `````Usuário```````{````'displayKey':'colleagueName',````'placeholder': 'Selecione o usuário do Fluig',````'datasetId':'colleague',````'fields':[{````'field':'colleagueName',````'label':'colleagueName',````'standard':true````}]````}">``` |
| --- |

### Consulta simples ao cadastro de usuários buscando e ordenando pelo nome, mas exibindo o e-mail após a seleção

[?](#)

| `````Usuário```````{````'displayKey':'mail',````'placeholder': 'Selecione o usuário do Fluig',````'datasetId':'colleague',````'fields':[{````'field':'colleagueName',````'label':'colleagueName',````'standard':true````}]````}">``` |
| --- |

### Consulta ao cadastro de usuários buscando e exibindo o nome do usuário selecionado e o código em outro campo

[?](#)

| `````Usuário```````{````'displayKey':'colleagueName',````'datasetId':'colleague',````'fields':[{````'field':'colleagueId',````'label':'colleagueId',````'visible': 'false'````},{````'field':'colleagueName',````'label':'colleagueName',````'standard':true````},{````'field':'mail',````'label':'mail'````}]````}">````````` |
| --- |

### Consulta à solicitação de um determinado processo

[?](#)

| `````Solicitação relacionada```````{````'displayKey':'processInstanceId',````'placeholder': 'Selecione a solicitação relacionada',````'datasetId':'workflowProcess',````'filterValues': 'processId,FLUIGADHOC',````'fields':[{````'field':'processInstanceId',````'label':'Solicitação',````'standard':true````},{````'field':'active',````'label':'Em andamento?'````}]````}">``` |
| --- |

### Consulta à solicitação de um determinado processo, após selecionar um processo em outro campo pesquisa

[?](#)

| `````Selecione o processo```````{````'displayKey':'processId',````'placeholder': 'Selecione o processo',````'datasetId':'processDefinition',````'fields':[{````'field':'processId',````'label':'Código do Processo'````},{````'field':'processDescription',````'label':'Descrição',````'standard': true````}]````}">``` `````Solicitação relacionada```````{````'displayKey':'processInstanceId',````'placeholder': 'Selecione a solicitação relacionada',````'datasetId':'workflowProcess',````'fields':[{````'field':'processInstanceId',````'label':'Solicitação',````'standard':true````},{````'field':'active',````'label':'Em andamento?'````}]````}">``` |
| --- |

[?](#)

| `function` `setSelectedZoomItem(item) {````if``(item.inputId ==``"user"``) {````reloadZoomFilterValues(``"solicitacaoRelacionada"``,``"process,"` `+ item.processId);````}``}` `function` `removedZoomItem(item) {````if``(item.inputId ==``"user"``) {````reloadZoomFilterValues(``"solicitacaoRelacionada"``,``""``);````}``}` |
| --- |

### Consulta aos usuários permitindo selecionar até 5 usuários

[?](#)

| `````Usuário```````{````'displayKey':'colleagueName',````'datasetId':'colleague',````'maximumSelectionLength': 5,````'fields':[{````'field':'colleagueId',````'label':'colleagueId'````},{````'field':'colleagueName',````'label':'colleagueName',````'standard':true````},{````'field':'mail',````'label':'mail'````}]````}">``` |
| --- |

### Consulta à solicitação limitando a quantidade de registros retornados

[?](#)

| `````Solicitação anterior```````{````'displayKey':'processInstanceId',````'placeholder': 'Selecione o chamado que você irá avaliar',````'datasetId':'workflowProcess',````'resultLimit': 10,````'fields':[{````'field':'processInstanceId',````'label':'Solicitação',````'standard':true````},{````'field':'processId',````'label':'Código do processo'````},{````'field':'active',````'label':'Em andamento?'````}]````}">``` |
| --- |

### Consulta ao cadastro de usuários buscando e exibindo o nome do usuário selecionado e o código em outro campo via métodos

[?](#)

| `````Usuário```````{````'displayKey':'colleagueName',````'datasetId':'colleague',````'fields':[{````'field':'colleagueId',````'label':'colleagueId',````'visible': 'false'````},{````'field':'colleagueName',````'label':'colleagueName',````'standard':true````},{````'field':'mail',````'label':'mail'````}]````}">````````` |
| --- |

[?](#)

| `function` `setSelectedZoomItem(item) {````if``(item.inputId ==``"user"``) {````$(``"#selected_userCode"``).val(item.colleagueId);````}``}` `function` `removedZoomItem(item) {````if``(item.inputId ==``"user"``) {````$(``"#selected_userCode"``).val(``""``);````}``}` |
| --- |

# Outros exemplos de uso em nossos repositórios

## Smart Zoom

Um exemplo com 3 campos zooms interagindo uns com os outro, modificando os valores atribuídos nos demais conforme a seleção de dados

## Integração com serviços de terceiros

Um exemplo simples consultando datasets personalizados.

## Solicitação de Compra de RM

Um exemplo consultando datasets personalizados onde a seleção de um dado no campo de pesquisa filtra os resultados do campo pesquisa seguinte.


<!-- anchors: FormuláriosCampoPesquisa(zoom)-Nestadocumentação, expander-1145175651, expander-control-1145175651, expander-content-1145175651, FormuláriosCampoPesquisa(zoom)-Pré-requisitos, FormuláriosCampoPesquisa(zoom)-Sintaxe, highlighter_651848, highlighter_411921, FormuláriosCampoPesquisa(zoom)-Atributos, FormuláriosCampoPesquisa(zoom)-Métodos, FormuláriosCampoPesquisa(zoom)-Dependências, highlighter_734399, FormuláriosCampoPesquisa(zoom)-Exemplosdeuso, FormuláriosCampoPesquisa(zoom)-Consultasimplesaocadastrodeusuáriosbuscandoeordenandopelonome, highlighter_811549, FormuláriosCampoPesquisa(zoom)-Consultasimplesaocadastrodeusuáriosbuscandoeordenandopelonome,masexibindooe-mailapósaseleção, highlighter_28005, FormuláriosCampoPesquisa(zoom)-Consultaaocadastrodeusuáriosbuscandoeexibindoonomedousuárioselecionadoeocódigoemoutrocampo, highlighter_847108, FormuláriosCampoPesquisa(zoom)-Consultaàsolicitaçãodeumdeterminadoprocesso, highlighter_718238, FormuláriosCampoPesquisa(zoom)-Consultaàsolicitaçãodeumdeterminadoprocesso,apósselecionarumprocessoemoutrocampopesquisa, highlighter_499841, highlighter_869840, FormuláriosCampoPesquisa(zoom)-Consultaaosusuáriospermitindoselecionaraté5usuários, highlighter_219419, FormuláriosCampoPesquisa(zoom)-Consultaàsolicitaçãolimitandoaquantidadederegistrosretornados, highlighter_1408, FormuláriosCampoPesquisa(zoom)-Consultaaocadastrodeusuáriosbuscandoeexibindoonomedousuárioselecionadoeocódigoemoutrocampoviamétodos, highlighter_227940, highlighter_664708, FormuláriosCampoPesquisa(zoom)-Outrosexemplosdeusoemnossosrepositórios, FormuláriosCampoPesquisa(zoom)-SmartZoom, FormuláriosCampoPesquisa(zoom)-Integraçãocomserviçosdeterceiros, FormuláriosCampoPesquisa(zoom)-SolicitaçãodeCompradeRM -->
