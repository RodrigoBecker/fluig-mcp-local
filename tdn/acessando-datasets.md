---
title: "Acessando Datasets"
url: "https://tdn.totvs.com/display/public/fluig/Acessando+Datasets"
scraped_at: "2026-03-09T03:12:08.347Z"
depth: 1
anchors: 36
child_links: 66
---

# Acessando Datasets

# Índice

# Objetivo

---

Um Dataset pode ser acessado de várias formas: no desenvolvimento de widgets, formulários, *webservices*, eventos globais, eventos de formulários e eventos de processos.
O objetivo desse guia é mostrar como acessar o Dataset nestes cenários.

# Pré-requisitos

---

Para que se tenha uma compreensão completa destas informações, alguns conhecimentos são considerados pré-requisitos, entre eles:

- Visão geral sobre o TOTVS Fluig Plataforma e sobre o [Desenvolvimento de Datasets](/display/fluig/Desenvolvimento+de+Datasets).

Atenção!

A partir das atualizações **1.6.5 Liquid**, **1.7.0 Lake** e **1.7.1 Crystal Lake**, os *select* passados por *constraint* em dataset serão bloqueados pelo serviço. Orientamos a leitura da documentação [Datasets acessando banco de dados externo](https://tdn.totvs.com/x/OgFlDw) que contém um exemplo da correta utilização do procedimento.

# Acessando um Dataset

---

Vários locais da plataforma podem fazer uso dos dados retornados pelos *Datasets*. Serão apresentadas abaixo as variações na forma de acessá-los ou de manuseá-los.

## Widgets

No desenvolvimento de um widget, é possível acessar dados de *Datasets*, através da linguagem *Javascript*, utilizando a biblioteca *DatasetFactory*.

Consulte a documentação [Integrando widget com formulários/datasets da plataforma](/pages/viewpage.action?pageId=185739337).

## Via pontos de customização

Quando um *Dataset* é acessado via um ponto de customização como eventos globais, eventos de processos, eventos de formulário ou mesmo em outros *Datasets*, isto é feito através de chamadas JavaScript que serão executadas no lado servidor.

O exemplo abaixo apresenta um exemplo simples de chamada a um *Dataset*:

[?](#)

| 1234 | `function` `doTest1() {````var` `dataset = DatasetFactory.getDataset(``"group"``,``null``,``null``,``null``);````return` `dataset.rowsCount;``}` |
| --- | --- |

No exemplo acima, o código JavaScript faz o acesso ao Dataset interno [*group*](https://tdn.totvs.com/display/fluig/Datasets+internos+fluig#Datasetsinternosfluig-group-Gruposdeusu%C3%A1rios), e retorna a quantidade de linhas disponíveis (rowsCount). O objeto **DatasetFactory** é a "porta de entrada" para o acesso a qualquer *Dataset*. Além de permitir a carga de um *Dataset*, ela também permite navegar entre todos os *Datasets* disponíveis no sistema.

O acesso a um *Dataset* é feito através do método **getDataset** do objeto **DatasetFactory**, onde seus parâmetros são:

- **Nome do Dataset:** Nome do Dataset a ser buscado;
- **Campos:** Array com os campos do Dataset que serão retornados. Caso seja informado null, retorna todos os campos do Dataset;
- **Constraints:** Array com os condições de busca do Dataset. Caso seja informado null, retorna todos os registros do Dataset.
- **Ordem:** Array com os campos para ordenação dos registros do Dataset. Caso seja informado null, retorna os registros com a ordenação padrão.

Já para a criação das constraints é utilizado o método **createConstraint **do objeto **DatasetFactory**, onde seus parâmetros são:

- **Campo:** Nome do campo que será filtrado;
- **Valor Inicial:** Valor inicial da faixa de valores do filtro
- **Valor Final:** Valor final da faixa de valores do filtro
- **Tipo:** Tipo da condição, podendo ser:**MUST:** indica que todos os registros do Dataset devem satisfazer a esta condição.
- **SHOULD:** indica que os registros do Dataset podem ou não atender à condição. Esse tipo é mais comum quando se necessita que um mesmo campo tenha valores A ou B (onde cada um será uma condição de busca com tipo SHOULD).
- **MUST_NOT:** indica que nenhum dos registros pode satisfazer a condição.

Após a criação da constraint, é possível informar que esta será utilizada na consulta em formato de LIKE, ou seja, o valor retornado poderá conter qualquer letra ou sequência de letras no lugar do símbolo '%'. Isso é feito chamando o método setLikeSearch(true) para a constraint que se deseja este comportamento, conforme exemplificado na implementação abaixo, na constraint c5, onde pretende-se retornar todos os registros que NÃO possuam (pois é uma constraint MUST_NOT) a palavra "teste" na descrição do documento.

Exemplo:

[?](#)

| 1234567891011121314151617181920 | `function` `doTest2() {````//Monta as constraints para consulta````var` `c1 = DatasetFactory.createConstraint(``"activeVersion"``,``"true"``,``"true"``, ConstraintType.MUST);````var` `c2 = DatasetFactory.createConstraint(``"publisherId"``,``"adm"``,``"adm"``, ConstraintType.MUST_NOT);````var` `c3 = DatasetFactory.createConstraint(``"documentType"``,``"1"``,``"1"``, ConstraintType.SHOULD);````var` `c4 = DatasetFactory.createConstraint(``"documentType"``,``"2"``,``"2"``, ConstraintType.SHOULD);````var` `c5 = DatasetFactory.createConstraint(``"documentDescription"``,``"%teste%"``,``"%teste%"``, ConstraintType.MUST_NOT);````c5.setLikeSearch(``true``);````var` `constraints   =``new` `Array(c1, c2, c3, c4, c5);``` ```//Define os campos para ordenação````var` `sortingFields =``new` `Array(``"documentPK.documentId"``);``` ```//Busca o dataset````var` `dataset = DatasetFactory.getDataset(``"document"``,``null``, constraints, sortingFields);``` ```for``(``var` `i = 0; i ```log.info(dataset.getValue(i,``"documentPK.documentId"``));````}``}` |
| --- | --- |

Após a criação da constraint, utiliza-se a função likeSearch utilizando a biblioteca vcXMLRPC.js, deve ser adicionado mais um parâmetro no método DatasetFactory.createConstraint, e não utilizar o método setLikeSearch(true). Exemplo:

[?](#)

| 1 | `var` `c5 = DatasetFactory.createConstraint(``"documentDescription"``,``"%teste%"``,``"%teste%"``, ConstraintType.MUST_NOT,``true``);` |
| --- | --- |

Isto é válido apenas para a utilização da biblioteca vcXMLRPC.js.

Aqui é feito o uso de duas constrainsts do tipo SHOULD. A primeira indica que o campo 'documentType' pode retornar os registros do tipo 2. Já a segunda constraint indica que o campo documentDescription pode retornar todos os registros que possuam pelo menos a palavra teste em seu corpo, e isso se deve ao like estar habilitado por meio de "setLikeSearch(true)"

##### Exemplo:

[?](#)

| 1234567891011121314 | `function` `doTest3() {````//Monta as constraints para consulta````var` `c1 = DatasetFactory.createConstraint(``"documentType"``,``"2"``,``"2"``, ConstraintType.SHOULD);````var` `c2 = DatasetFactory.createConstraint(``"documentDescription"``,``"%teste%"``,``"%teste%"``, ConstraintType.SHOULD);````c2.setLikeSearch(``true``);````var` `constraints =``new` `Array(c1, c2);` ```//Define os campos para ordenação````var` `sortingFields =``new` `Array(``"documentPK.documentId"``);` ```//Busca o dataset````var` `dataset = DatasetFactory.getDataset(``"document"``,``null``, constraints, sortingFields);````return` `dataset;``}` |
| --- | --- |

##### Constraints Avançadas 

Existe uma constraint em especial que é utilizada para limitar o número de registros na consulta SQL chamada de **sqlLimit**. Então é possível definir o número máximo de registros que uma consulta SQL pode retornar, porém o número de registros pode ser menor que o esperado, devido algumas validações que são feitas após o retorno dos dados. Por exemplo: O **sqlLimit** tem um valor 100 e é feita uma consulta em um serviço de dados de uma definição de formulário, esta consulta retornará os 100 registros, porém após isso são executadas validações para verificar se o formulário está ativo e se o usuário corrente tem permissão para visualizar os dados fazendo com que o retorno possa ser menor que 100. Para o **sqlLimit** é utilizada a seguinte sintaxe:

[?](#)

| 1 | ```DatasetFactory.createConstraint(``"sqlLimit"``,``"10"``,``"10"``, ConstraintType.MUST);` |
| --- | --- |

Importante

O valor considerado no sqlLimit é sempre o **initialValue**, o que for informado no finalValue não será considerado.

Existe outra constraint especial utilizada somente para acesso a Datasets de definições de formulário, ela indica se ao buscar o serviço de dados devem ser retornados APENAS os dados dos formulários da definição de formulário principal. A constraint é a **onlyMainCards** e por padrão seu valor é false, ou seja, são retornados os dados dos formulários da definição de formulário principal e das definições de formulários filhas.

[?](#)

| 1 | `DatasetFactory.createConstraint(``"onlyMainCards"``,``"true"``,``"true"``, ConstraintType.MUST);` |
| --- | --- |

Observação

O valor considerado no onlyMainCards é sempre o initialValue, o que for informado no finalValue não será considerado.

Existe ainda, outra constraint especial que é a **checkSecurity** essa constraint é válida somente para Datasets de formulário e quando utilizada, fará o retorno dos registros do formulário validarem a segurança, ou seja, o Dataset retornará somente os registros de formulário que o usuário possua permissão para visualização.

[?](#)

| 1 | `DatasetFactory.createConstraint(``"checkSecurity"``,``"true"``,``"true"``, ConstraintType.MUST);` |
| --- | --- |

Atenção

As constraints são aplicáveis apenas a Datasets internos. Em Datasets avançados, elas podem não ser suportadas, pois os dados provêm de fontes externas. No entanto, é possível implementar filtros na codificação do Dataset, desde que o desenvolvedor tenha preparado o código para aceitar e processar essas restrições, manipulando o objeto retornado para remover informações desnecessárias.

Dica

A constraint 'offset' define o ponto de início da pesquisa no dataset, permitindo a implementação de paginação.

[?](#)

| `DatasetFactory.createConstraint("offset", "10", "10", ConstraintType.MUST);` |
| --- |

A constraint *offset* permite definir quantos registros iniciais devem ser ignorados no resultado da consulta, retornando os próximos registros.

Exemplo: Ao usar a constraint *offset* com o valor *10*, os primeiros 10 registros encontrados na consulta serão ignorados, e os próximos registros serão retornados conforme o limite definido.

##### Exemplificação de uso de Constraints

Considere os valores da tabela abaixo sendo utilizadas como um serviço de dados a partir de uma definição de formulário para exemplificação dos exemplos:

| Código | Nome | Cidade |
| --- | --- | --- |
| Código | Nome | Cidade |
| 1 | Javier Spiva | São Paulo |
| 2 | Cody Ballow | Rio de Janeiro |
| 3 | Javier Naramore | São Paulo |
| 4 | Max Nevius | Rio de Janeiro |
| 5 | Noemi Roiger | São Paulo |
| 6 | Lonnie Cadwallader | Rio de Janeiro |
| 7 | Lorrie Spece | Brasília |

Verifique os exemplos de retorno de dados abaixo:

- [Exemplo 1](#)
- [Exemplo 2](#)
- [Exemplo 3](#)

Para retornar somente as linhas que os códigos estejam entre 1 á 4 usar a seguinte constraint:

[?](#)

| 1 | `var` `c1 = DatasetFactory.createConstraint(``"Código"``,``"1"``,``"4"``, ConstraintType.MUST);` |
| --- | --- |

Retorno:

| Código | Nome | Cidade |
| --- | --- | --- |
| Código | Nome | Cidade |
| 1 | Javier Spiva | São Paulo |
| 2 | Cody Ballow | Rio de Janeiro |
| 3 | Javier Naramore | São Paulo |
| 4 | Max Nevius | Rio de Janeiro |

Para retornar somente as linhas que os nomes sejam "Noemi Roiger", "Javier Naramore" e "Lonnie Cadwallader" ou que a cidade seja Brasília, usar as seguintes constraints:

[?](#)

| 1234 | `var` `c1 = DatasetFactory.createConstraint(``"nome"``,``"Noemi Roiger"``,``"Noemi Roiger"``, ConstraintType.SHOULD);``var` `c2 = DatasetFactory.createConstraint(``"nome"``,``"Javier Naramore"``,``" Javier Naramore"``, ConstraintType.SHOULD);``var` `c3 = DatasetFactory.createConstraint(``"nome"``,``"Lonnie Cadwallader"``,``"Lonnie Cadwallader"``, ConstraintType.SHOULD);``var` `c4 = DatasetFactory.createConstraint(``"cidade"``,``"Brasília"``,``"Brasília"``, ConstraintType. SHOULD);` |
| --- | --- |

Retorno:

| Código | Nome | Cidade |
| --- | --- | --- |
| 3 | Javier Naramore | São Paulo |
| 5 | Noemi Roiger | São Paulo |
| 6 | Lonnie Cadwallader | Rio de Janeiro |
| 7 | Lorrie Spece | Brasília |

Para retornar todas as linhas exceto onde a cidade seja Brasília, usar a seguinte constraint:

[?](#)

| 1 | `var` `c1 = DatasetFactory.createConstraint(``"cidade"``,``"Brasília"``,``"Brasília"``, ConstraintType.MUST_NOT);` |
| --- | --- |

Retorno:

| Código | Nome | Cidade |
| --- | --- | --- |
| 1 | Javier Spiva | São Paulo |
| 2 | Cody Ballow | Rio de Janeiro |
| 3 | Javier Naramore | São Paulo |
| 4 | Max Nevius | Rio de Janeiro |
| 5 | Noemi Roiger | São Paulo |
| 6 | Lonnie Cadwallader | Rio de Janeiro |

## Formulários

Em formulários, é possível que um ou mais campos possam exibir ou consultar dados de Datasets utilizando Javascript ou tags.

### Via JavaScript em formulário

---

É possível acessar os Datasets via código JavaScript no HTML de uma definição de formulário utilizando a biblioteca **vcXMLRPC.js **para utilização do *DatasetFactory*. Para isto, basta incluir a linha abaixo antes da tag body do HTML:

[?](#)

| 1 | `` |
| --- | --- |

Importante

Este modelo de acesso faz com que o Dataset seja transportado do servidor para o cliente, ou seja, o navegador do usuário. Por isso, é importante observar a quantidade de informações que será manuseada, caso contrário pode-se ter problemas de consumo excessivo de banda ou performance.

**Exemplo:**

[?](#)

| 1234567891011121314151617181920212223242526272829303132333435 | "` `+ dataset.columns[i] +``" |
| --- | --- |
| "` `+ row[dataset.columns[y]] +``" |  |
"``;`

```return` `tabela;`

`}`

No exemplo acima, percebe-se que a forma de se invocar um Dataset é semelhante ao método via pontos de customização, através do DatasetFactory. A função showDataset apresenta um exemplo de código que permite apresentar os dados do Dataset.

Assim como no método via pontos de customização, quando é preciso filtrar um Dataset é preciso criar as constraints que serão utilizadas na busca. Os argumentos utilizados no método getDataset também são os mesmos que apresentados anteriormente:

[?](#)

| 123456789101112131415161718192021 | `function` `showNewDatasetPartial() {````var` `div = document.getElementById(``"datasetDiv"``);``` ```var` `c1 = DatasetFactory.createConstraint(``"parentDocumentId"``,``"5"``,``"5"``, ConstraintType.MUST);````var` `c2 = DatasetFactory.createConstraint(``"documentType"``,``"1"``,``"1"``, ConstraintType.MUST_NOT);````var` `c3 = DatasetFactory.createConstraint(``"activeVersion"``,``"true"``,``"true"``, ConstraintType.MUST);````var` `constraints   =``new` `Array(c1, c2, c3);``` ```//Define os campos para ordenação````var` `fields =``new` `Array(``"documentPK.documentId"``,``"documentDescription"``,````"documentType"``,``"publisherId"``,``"accessCount"``);````var` `sortingFields =``new` `Array(``"accessCount"``,``"documentDescription"``);``` ```//Busca o dataset````try` `{````var` `dataset = DatasetFactory.getDataset(``"document"``, fields, constraints, sortingFields);````div.innerHTML = showDataset(dataset);````}``catch``(erro) {````div.innerHTML = erro;````}``}` |
| --- | --- |

### Via Tags no Formulário

É possível especificar um Dataset em um campo select (combo-box). Quando isto é feito, as opções do combo são automaticamente criadas de acordo com os dados do Dataset. Para isso, é necessário adicionar três propriedades adicionais à tag:

| Propriedade | Descrição |
| --- | --- |
| Propriedade | Descrição |
| dataset | Determina o Dataset utilizado |
| datasetkey | Determina qual coluna do Dataset será utilizada como valor do campo |
| datasetvalue | Determina qual coluna do Dataset será utilizada como rótulo das opções do combo |

No exemplo abaixo, o campo "estado" foi configurado para que as opções do combo sejam criadas a partir do Dataset "estadosBR". Como valor do campo será utilizado o campo "Sigla", embora para o usuário será apresentado o campo "Estado". 

| 1 | `` |
| --- | --- |

Exemplo

Permitir que o usuário selecione treinamentos utilizando o [dataset de Aprendizado](/display/fluig/Datasets+internos#Datasetsinternos-Datasetsdeaprendizado-LMS)

## Webservices

A plataforma disponibiliza um [conjunto de WebServices](/pages/viewpage.action?pageId=73084007) que permitem integrar aplicações de terceiros à plataforma. Dentre os serviços disponibilizados, o serviço ECMDatasetService permite fazer o acesso a um Dataset. Para verificar a lista de serviços disponíveis, acesse a URL http://<servidor>:<porta>/webdesk/services.

A forma de uso de um Web Service varia de acordo com a tecnologia utilizada pela aplicação cliente. Consulte a documentação da tecnologia escolhida pra obter detalhes sobre como acessar Web Services.

## Via DataTable

Para consumir um Dataset dentro de um DataTable, também utilizamos a função DatasetFactory. É necessário incluir a biblioteca **vcXMLRPC.js **no final dos arquivos edit.ftl e view.ftl do *widget* para que seja possível utilizar a função.

[?](#)

| 1 | `` |
| --- | --- |

Após configurado o arquivo **vcXMLRPC.js**, edite o arquivo .js do widget chamando o Dataset que desejar consumir. Abaixo segue um exemplo de uma chamada para o consumo do Dataset *colleague*:

[?](#)

| 123456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960 | `loadTable:``function``() {````var` `that =``this``;````var` `datasetReturned = DatasetFactory.getDataset(``"colleague"``,``null``,``null``,``null``);````if` `(datasetReturned !=``null` `&& datasetReturned.values !=``null` `&& datasetReturned.values.length > 0) {````var` `records = datasetReturned.values;````for` `(``var` `index``in` `records) {````var` `record = records[index];````that.mydata.push({````id: record.userTenantId,````name: record.colleagueName,````email: record.mail````});````}````}````that.myTable = FLUIGC.datatable(``'#idtable'` `+``"_"` `+ that.instanceId, {````dataRequest: that.mydata,````renderContent: [``'id'``,``'name'``,``'email'``],````header: [{````'title'``:``'Code'``,````'dataorder'``:``'name'``,````'size'``:``'col-md-4'````}, {````'title'``:``'Name'``,````'standard'``:``true``,````'size'``:``'col-md-4'````}, {````'title'``:``'EMAIL'``,````'size'``:``'col-md-4'``,````'dataorder'``:``'ASC'````}],````search: {````enabled:``false``,````},````scroll: {````target:``".target"``,````enabled:``true````},````actions: {````enabled:``false``,````},````navButtons: {````enabled:``false``,````},````draggable: {````enabled:``false````},````},``function``(err, data) {````if` `(err) {````FLUIGC.toast({````message: err,````type:``'danger'````});````}````});````that.myTable.on(``'fluig.datatable.loadcomplete'``,``function``() {````if` `(!that.tableData) {````that.tableData = that.myTable.getData();````}````});``},` |
| --- | --- |

Para um exemplo completo do uso de *widget* com DataTable acesse [*Widget* com DataTable](https://git.fluig.com/projects/SAMPLES/repos/style-guide/browse/style-guide-wcm/widget/exemplo3), lembrando de trocar a function *loadTable* do *widget* pela função *loadTable* do exemplo acima.

Para um exemplo completo do uso de modal com Datable acesse [Modal com DataTable e Dataset](https://git.fluig.com/projects/SAMPLES/repos/projetos/browse/form-modal-datatable), lembrando sobre a limitação do datatable, no qual não é possível efetuar paginação pois não possui os recursos de offset e limit.

## Acessar dataset via API

### Via serviço REST

---

Disponibilizamos uma nova forma para acessar os datasets através de API utilizando serviços tipo REST. Para isso apresentamos logo abaixo um exemplo de como realizar essa pesquisa, siga os passos abaixo:

A API que fará a pesquisa é a API Dataset ([servidor_fluig]/dataset/swagger-ui/#/Dataset_handle/searchDatasetValues)

**datasetId**: Nome do dataset onde será realizado a pesquisa, este é o único parâmetro requerido.

**field**: Campos do dataset que serão retornados, caso não seja passado os valores todos os campos serão retornados.

**offset**: Quantos registros serão “pulados” antes de retornar os valores, esse campo é usado junto com o **limit** para realizar a paginação. Caso o dataset chamado for um dataset avançado, esse parâmetro pode ser acessado como uma *constraint* de nome **offset**.

**limit**: Quantidade máxima de registros que serão retornados na pesquisa. Caso o dataset chamado for um dataset avançado, esse parâmetro pode ser acessado como uma *constraint* de nome **sqlLimit**.

Importante

É importante definir o **limit** para evitar uma pesquisa com muitos registros, o que pode resultar em um retorno lento.

**orderby**: Nome do campo onde será feita a ordenação, pode ser adicionado **_ASC**ou **_DESC** para pesquisar em ordem ascendente e descendente respectivamente.

**constraintsField**: Nome do campo onde será passado o valor para pesquisa. Pode ser passado múltiplos campos mas para cada um deles será preciso passar um valor.

**constraintsInitialValue**: Valor que será usado para realizar o filtro de acordo com o campo passado no parâmetro **constraintsField**. Caso tenha passado mais de um campo para pesquisa será preciso passar os valores na mesma ordem para o filtro ser criado corretamente.

**constraintsFinalValue**: Caso o filtro desejado for uma faixa de valores o parâmetro **constraintsInitialValue**será o valor inicial e **constraintsFinalValue** será o valor final. Caso tenha passado mais de um campo para pesquisa será preciso passar os valores na mesma ordem para o filtro ser criado corretamente. Caso for passado o mesmo valor que o parâmetro **constraintsInitialValue**será feito a pesquisa somente por esse valor ignorando a faixa de valores.

**constraintsType**: Tipo de filtro que será aplicado no campo, os valores permitidos são:

- **MUST**: Se utiliza quando os valores retornados precisam ser iguais ao valor passado na **constraintsInitialValue**e**constraintsFinalValue**para o campo **constraintsField.**
- **MUST_NOT**: Se utiliza quando os valores retornados precisam ser diferentes ao valor passado na **constraintsInitialValue**e**constraintsFinalValue**para o campo **constraintsField.**
- **SHOULD**: Assim como o **MUST** os valores retornados precisam ser iguais ao valor passado na **constraintsInitialValue**e**constraintsFinalValue**para o campo **constraintsField.**Esse tipo deve ser utilizado quando for feito mais de um filtro para o mesmo campo. **Por exemplo**: Pesquisar todos os colaboradores com o nome Antônio ou João.

Caso tenha passado mais de um campo para pesquisa será preciso passar os valores na mesma ordem para que o filtro seja criado corretamente.

**constraintsLikeSearch**: Valor booleano que determina se os valores nos campos **constraintsInitialValue**e **constraintsFinalValue**podem ser somente parte do valor total caso o booleano seja verdadeiro ou se os
valores precisam ser exatos caso o booleano seja falso. Quando o valor for verdadeiro poderá ser usado o símbolo **%**para determinar que será aceito qualquer valor a partir desse ponto, **por exemplo**: se na **constraintsInitialValue**for passado o valor “Anderson%” e o **constraintsLikeSearch**estiver como *true* será retornado todos os valores que comecem com “Anderson”. Caso tenha passado mais de um campo para a pesquisa será preciso passar os valores na mesma ordem para que o filtro seja criado corretamente.


<!-- anchors: AcessandoDatasets-Índice, AcessandoDatasets-Objetivo, AcessandoDatasets-Pré-requisitos, AcessandoDatasets-AcessandoumDataset, AcessandoDatasets-Widgets, AcessandoDatasets-eventos-de-formulariosViapontosdecustomização, highlighter_488788, highlighter_5385, highlighter_275988, AcessandoDatasets-Exemplo:, highlighter_417171, AcessandoDatasets-ConstraintsAvançadas, highlighter_23192, highlighter_358252, highlighter_685070, highlighter_944877, AcessandoDatasets-ExemplificaçãodeusodeConstraints, constraintsamples, constraintsamples-1, highlighter_385501, constraintsamples-2, highlighter_438507, constraintsamples-3, highlighter_606650, AcessandoDatasets-Formulários, AcessandoDatasets-ViaJavaScriptemformulário, highlighter_929423, highlighter_601782, highlighter_137346, AcessandoDatasets-ViaTagsnoFormulário, AcessandoDatasets-Webservices, AcessandoDatasets-ViaDataTable, highlighter_945919, highlighter_907450, AcessandoDatasets-AcessardatasetviaAPI, AcessandoDatasets-ViaserviçoREST -->
