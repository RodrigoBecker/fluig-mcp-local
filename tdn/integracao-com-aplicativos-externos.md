---
title: "Integração com Aplicativos Externos"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=73082260"
scraped_at: "2026-03-09T03:52:19.492Z"
depth: 2
anchors: 40
child_links: 72
---

# Integração com Aplicativos Externos

# Índice

# Considerações Gerais

---

As informações contidas neste documento têm por objetivo demonstrar como realizar a integração entre o TOTVS Fluig Plataforma e aplicativos externos. Para que se tenha uma compreensão completa destas informações, alguns conhecimentos são considerados pré-requisitos, entre eles:

- Visão geral sobre o TOTVS Fluig Plataforma
- Visão geral sobre integração de sistemas
- JavaScript
- WebServices
- SOAP
- Datasets (Fluig)
- Java™
- Apache Flex®

Em várias partes deste documento serão apresentados trechos de códigos em diferentes linguagens de programação, com o intuito de demonstrar o uso das capacidades de integração do Fluig Plataforma. Entretanto, este documento não tem por objetivo capacitar o leitor no uso destas tecnologias além do propósito acima descrito, sendo responsabilidade do leitor buscar informações aprofundadas sobre estas linguagens.

Com o objetivo de facilitar o entendimento das informações apresentadas e a simulação dos conceitos apresentados, os exemplos citados neste documento utilizam a funcionalidade de [Datasets](/display/fluig/Desenvolvimento+de+Datasets) como exemplo de uso das capacidades de integração do produto. Entretanto, é importante ressaltar que outros pontos da plataforma possuem disponíveis as mesmas características de integração existentes nos [Datasets](/display/fluig/Desenvolvimento+de+Datasets), em especial as personalizações de processos e formulários.

# Visão Geral

---

Ainda que empíricos, toda empresa possui processos de negócios que permitem à empresa cumprir o seu objetivo, seja ele a prestação de um serviço, a produção de bens materiais ou o comércio de mercadorias. Uma empresa possui uma infinidade de processos, sendo que cada pessoa na organização obrigatoriamente participa em pelo menos um destes processos, e todos eles trocam informações entre si em algum momento. Os processos podem ser formais (como a contratação de um profissional) ou informais (como um incentivo à inovação), críticos (faturamento) ou satélites (controle de envio de cartões de aniversários).

Com o advento das tecnologias de Sistema da Informação, vários sistemas passaram a dar apoio a estes processos de negócio, especialmente aqueles considerados mais críticos para a operação da empresa. O melhor exemplo disto é a adoção dos sistemas de ERP que dão suporte aos processos de várias áreas da empresa.

O Fluig tem como objetivo ser uma plataforma agnóstica de gestão de processos, documentos e identidades através de uma interface de comunicação colaborativa. Isto pode ser percebido em maior ou menor grau em cada uma das suas funcionalidades, desde as mais simples (como colaboração) até as mais complexas (como BPM).

Entretanto, parte destes processos têm alta dependência dos sistemas de informação já existentes na empresa e, por isso, a arquitetura da plataforma Fluig é planejada para permitir integrar-se a estes sistemas, possibilitando que os processos modelados tenham maior valor agregado.

O Fluig permite tanto o acesso pelo produto aos sistemas externos (para consultar ou alimentar informações), bem como aceita que outros sistemas venham a conectar-se para a consulta de informações ou para execução de operações transacionais.

![](/download/attachments/73082260/image2013-8-20%2015%3A33%3A42.png?version=1&modificationDate=1377284793000&api=v2)

O principal canal de integração da plataforma é através de [WebServices](/pages/viewpage.action?pageId=73084007), que vêm se tornando o padrão mais comum de integração com qualquer aplicativo. Através deles, é possível ter acesso às funcionalidades do Fluig Plataforma e dar acesso à aplicativos externos. Este documento dedica uma seção específica sobre integração via [WebServices](/pages/viewpage.action?pageId=73084007).

# WebServices

---

A integração via [WebServices](/pages/viewpage.action?pageId=73084007) utiliza o protocolo SOAP e, por ser um padrão aberto, permite que sistemas desenvolvidos em plataformas totalmente diferentes como Java™, Microsoft® .Net, C, C++, PHP, Ruby, Pearl, Python, entre outras, possam trocar informações entre si de forma transparente.

### Acessando os WebServices do TOTVS Fluig Plataforma

O Fluig disponibiliza um conjunto de [WebServices](/pages/viewpage.action?pageId=73084007) que permitem o acesso às informações da plataforma ou a execução de tarefas, como iniciar solicitações de processos por exemplo. Para ter a lista dos [WebServices](/pages/viewpage.action?pageId=73084007)disponíveis, acesse o endereço: 

```
http://:
/services
```

Cada link apresentado direciona o navegador para a URL do WSDL do serviço. O WSDL (Web Service Description Language) possui a descrição do serviço no formato XML e é utilizado pelas ferramentas de desenvolvimento para a criação dos componentes que representarão este serviço.

Atente para cada tipo de atributo que é esperado, por exemplo, o atributo expirationDate do objeto DocumentDto[] é uma data, porém cada linguagem interpreta de maneira diferente, veja alguns exemplos abaixo:

- C#: **dateTime**
- Java™: **XMLGregorianCalendar**
- Progress®: **DATETIME-TZ**

##### Via Apache Flex®

Como a grande maioria das ferramentas de desenvolvimento, o Apache Flex® permite criar stubs para o acesso a WebServices. Estes stubs encapsulam todas as operações de empacotamento e desempacotamento das informações do padrão XML para os tipos nativos da plataforma.

Utilize o passo-a-passo para visualizar o processo de criação dos stubs para um serviço disponibilizado pelo Fuig Plataforma:

- [1º Passo](#)
- [2º Passo](#)
- [3º Passo](#)
- [4º Passo](#)
- [Resultado](#)

A criação dos stubs no Flex® é feito através do menu **Data** > **Import WebService(WSDL)**, conforme a imagem abaixo.

![](/download/attachments/73082260/image2013-8-21%2010%3A30%3A3.png?version=1&modificationDate=1377284793000&api=v2)

Na primeira janela, é solicitada a pasta dentro do projeto corrente onde devem ser gerados os stubs.

![](/download/attachments/73082260/image2013-8-21%2010%3A34%3A29.png?version=1&modificationDate=1377284793000&api=v2)

Na tela a seguir, deve ser informado o endereço do WSDL onde se encontra o serviço. Também é possível definir se ele será acessado da estação cliente ou do servidor LifeCycle Data Services.

![](/download/attachments/73082260/image2013-8-21%2010%3A36%3A18.png?version=1&modificationDate=1377284793000&api=v2)

Na última tela, deve-se informar o package que será utilizado e qual o nome da classe principal (já sugeridos pelo Flex™ Builder™).

![](/download/attachments/73082260/image2013-8-21%2010%3A39%3A19.png?version=1&modificationDate=1377284793000&api=v2)

Uma vez finalizado o processo, o Flex™ Builder™ adicionará ao projeto um conjunto de classes que serão utilizadas pelo programador para invocar os serviços, conforme a figura abaixo:

![](/download/attachments/73082260/image2013-8-21%2010%3A57%3A40.png?version=1&modificationDate=1377284793000&api=v2)

Para o exemplo apresentado abaixo, foi utilizado a IDE Adobe® Flex™ Builder™ 3.0 com Flex® SDK 3.2. Para outras versões da IDE e/ou SDK, o processo para criação dos stubs pode sofrer algumas variações. 

O trecho de código abaixo apresenta um exemplo de invocação do [WebService](/pages/viewpage.action?pageId=73084007) de acesso aos [Datasets](/display/fluig/Datasets+internos) da plataforma Fluig:

**ECMDatasetServiceClient.mxml**

[?](#)

| 123456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869 | ``````````````import` `generated.webservices.ValuesDto;````import` `generated.webservices.DatasetDto;````import` `generated.webservices.GetDatasetResultEvent;````import` `generated.webservices.SearchConstraintDtoArray;````import` `generated.webservices.StringArray;````import` `generated.webservices.ECMDatasetServiceService;````import` `mx.rpc.events.FaultEvent;````import` `mx.collections.ArrayCollection;``` ```//Cria uma instância do Stub de acesso ao serviço````private` `var` `ds:ECMDatasetServiceService =``new` `ECMDatasetServiceService();` ```public` `function` `start() :``void` `{` ```//Cria tipos auxiliares, que serão utilizados na chamado do serviço````var` `fields:StringArray =``new` `StringArray();````var` `constraints:SearchConstraintDtoArray =``new` `SearchConstraintDtoArray();````var` `order:StringArray =``new` `StringArray();` ```//Define as funções para tratamento do retorno````ds.addEventListener(GetDatasetResultEvent.GetDataset_RESULT, resultGetDataset);````ds.addEventListener(FaultEvent.FAULT,faultGetDataset);``` ```//invoca o método getDataset do serviço````ds.getDataset(``"adm"``,``1``,``"adm"``, constraints, order, fields,``"colleague"``);````}``` ```//Tratamento dos dados retornados do serviço invocado.````public` `function` `resultGetDataset(ev:GetDatasetResultEvent) :``void` `{` ```//Recupera o retorno do serviço, na forma de um DatasetDto````var` `dataset:DatasetDto = ev.result``as` `DatasetDto;` ```//Monta uma string com todos os dados do dataset````var` `line:``String` `=``""``;``` ```//Cabeçalho com o nome dos campos````var` `columnsArray:ArrayCollection =``new` `ArrayCollection(dataset.columns);````for` `(``var` `j:``int` `=``0``; j ```line += columnsArray.getItemAt(j) +``"\t"``;````}` ```//Linha de dados````var` `valuesArray:ArrayCollection =``new` `ArrayCollection(dataset.values);````for` `(``var` `j:``int` `=``0``; j ```var` `row:ValuesDto = valuesArray.getItemAt(j)``as` `ValuesDto;````line +=``"\n"` `+ j +``":"``;``` ```for` `(``var` `i:``int` `=``0``; i ```line += row.getItemAt(i) +``"\t"``;````}````}``` ```//Mostra a string criada em um textarea na tela````this``.sysout.text = line;````}``` ```public` `function` `faultGetDataset(ev:FaultEvent) :``void` `{````this``.sysout.text = ev.fault.faultString;````}````]]>```````````paddingBottom=``"5"` `paddingLeft=``"5"` `paddingRight=``"5"` `paddingTop=``"5"``/>``` |
| --- | --- |

Existe um bug do Flex® que impede o funcionamento correto de serviços que trabalhem com matrizes multidimensionais de dados, como no exemplo acima, onde é retornado um array (de linhas do Dataset) de array (das colunas de cada registro).

Para contornar este problema, é preciso alterar a classe gerada pelo Flex™ Builder™ que irá encapsular o array multidimensional. No exemplo acima, esta classe é a DatasetDto, que deverá ser alterada (linha 11) conforme o exemplo abaixo:

[?](#)

| 123456789101112 | `public` `class` `DatasetDto``{````/**````* Constructor, initializes the type class````*/````public` `function` `DatasetDto() {}``` ```[ArrayElementType(``"String"``)]````public` `var` `columns:``Array``;````[ArrayElementType(``"ValuesDto"``)]````public` `var` `values:``Array` `=``new` `Array``();``//iniciando o array``}` |
| --- | --- |

Outros serviços que não trabalhem com arrays multidimensionais não exigem alterações no código gerado.

##### Via Java™

Existem muitas implementações de uso de WebServices em Java™ e neste exemplo vamos utilizar as bibliotecas disponíveis no Java™ 7.

Da mesma forma como no exemplo anterior, em Apache Flex®, o primeiro passo consiste em utilizar o endereço WSDL para a geração dos stubs em Java™. O comando abaixo apresenta um exemplo de como gerar estes stubs:

```
wsimport -d  
```

Através deste comando são gerados os stubs no diretório de destino (output_directory), conforme a descrição do arquivo wsdl (wsdl_url).

![](/download/attachments/73082260/image2013-8-20%2016%3A0%3A2.png?version=1&modificationDate=1377284793000&api=v2)

A partir dos stubs gerados, é possível consumir o WebService como no exemplo abaixo:

**ECMDatasetServiceClient.java**

[?](#)

| 1234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253545556575859606162636465666768 | `package` `com.fluig.examples;` `import` `javax.xml.ws.BindingProvider;` `import` `net.java.dev.jaxb.array.StringArray;` `import` `com.totvs.technology.ecm.dataservice.ws.DatasetDto;``import` `com.totvs.technology.ecm.dataservice.ws.DatasetService;``import` `com.totvs.technology.ecm.dataservice.ws.ECMDatasetServiceService;``import` `com.totvs.technology.ecm.dataservice.ws.SearchConstraintDtoArray;``import` `com.totvs.technology.ecm.dataservice.ws.ValuesDto;` `/*````* Classe para invocar serviço DatasetService````*/``public` `class` `ECMDatasetServiceClient {` ```//Instancia DatasetServiceService.````private` `ECMDatasetServiceService ecmDatasetServiceService =``new` `ECMDatasetServiceService();````private` `DatasetService service = ecmDatasetServiceService.getDatasetServicePort();``` ```//Inicia execução da classe````public` `static` `void` `main(String[] args) {````ECMDatasetServiceClient client =``new` `ECMDatasetServiceClient();``` ```//Configura acesso ao WebServices.````BindingProvider bp = (BindingProvider) client.service;````bp.getRequestContext().put(BindingProvider.ENDPOINT_ADDRESS_PROPERTY,````"http://localhost:8080/webdesk/ECMDatasetService"``);` ```try` `{````client.getDataset();````}``catch` `(Exception e) {````e.printStackTrace();````}````}` ```public` `void` `getDataset()``throws` `Exception {``` ```//Cria os parâmetros utilizados na chamada````int` `companyId =``1``;````String username =``"adm"``;````String password =``"adm"``;````String name =``"colleague"``;````StringArray fields =``new` `StringArray();````SearchConstraintDtoArray constraints =``new` `SearchConstraintDtoArray();````StringArray order =``new` `StringArray();``` ```//Invoca o serviço de dataset````DatasetDto result = service.getDataset(````companyId, username, password, name, fields, constraints, order);``` ```//Apresenta o cabeçalho````for` `(String columnName : result.getColumns()) {````System.out.print(columnName +``"\t"``);````}````System.out.println();``` ```//Apresenta as linhas do dataset````for` `(ValuesDto row : result.getValues()) {````for` `(Object value : row.getValue()) {````System.out.print(value +``"\t"``);````}````System.out.println();````}````}` `}` |
| --- | --- |

Ao utilizar os WebServices via Java™, deve-se atentar para o tipo de cada atributo e para o tipo de retorno do WebService. Por exemplo, para valores do tipo **data**deve ser utilizado a classe **XMLGregorianCalendar:**

[?](#)

| 1234567891011 | `DocumentDto document =``new` `DocumentDto();` `XMLGregorianCalendar date = DatatypeFactory.newInstance().newXMLGregorianCalendar();``date.setYear(``2013``);``date.setMonth(``10``);``date.setDay(``16``);``date.setHour(``0``);``date.setMinute(``0``);``date.setSecond(``0``);` `document.setExpirationDate(date);` |
| --- | --- |

##### Via Progress® 4GL

Assim como nos exemplos anteriores, o primeiro passo para consumir um WebService em Progress® é usar um utilitário que irá ler o endereço WSDL e gerar as informações necessárias para acessá-lo. Diferente do Java™ e Flex®, o Progress® não gera objetos de stub, mas apenas uma documentação sobre como consumir os serviços descritos no arquivo WSDL. Embora em algumas situações seja possível manipular os tipos nativos do Progress® como parâmetros, dependendo do tipo de dado utilizado é preciso manipular o XML SOAP para extrair ou enviar uma informação.

Para gerar a documentação de um serviço, deve-se empregar o utilitário **bprowsdldoc** como no exemplo abaixo:

```
bprowsdldoc 
```

Com a execução deste utilitário, serão gerados alguns arquivos HTML com as informações sobre como consumir o serviço. Esta documentação apresenta informações e exemplos de como realizar a conexão com o serviço e a utilizar os métodos e datatypes do serviço. 

O código abaixo apresenta um exemplo de como consumir o serviço:

**wsECMDatasetService.p**

[?](#)

| 12345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152535455565758596061626364656667686970717273747576777879808182838485868788899091929394959697 | `/* Parte I - Invocar o WebService */``DEFINE VARIABLE hWebService     AS HANDLE NO-UNDO.``DEFINE VARIABLE hDatasetService AS HANDLE NO-UNDO.` `DEFINE VARIABLE cFields  AS CHARACTER EXTENT``0` `NO-UNDO.``DEFINE VARIABLE cOrder   AS CHARACTER EXTENT``0` `NO-UNDO.``DEFINE VARIABLE cDataset AS LONGCHAR NO-UNDO.` `DEFINE TEMP-TABLE item NO-UNDO````NAMESPACE-URI``""````FIELD contraintType AS CHARACTER````FIELD fieldName     AS CHARACTER````FIELD finalValue    AS CHARACTER````FIELD initialValue  AS CHARACTER.``` `DEFINE DATASET dConstraints NAMESPACE-URI``"http://ws.dataservice.ecm.technology.totvs.com/"````FOR item.` `CREATE SERVER hWebService.``hWebService:CONNECT(``"-WSDL 'http://localhost:8080/webdesk/ECMDatasetService?wsdl'"``).``RUN DatasetService SET hDatasetService ON hWebService.` `RUN getDataset IN hDatasetService(INPUT``1``,````INPUT``"adm"``,````INPUT``"adm"``,````INPUT``"colleague"``,````INPUT cFields,````INPUT DATASET dConstraints,````INPUT cOrder,````OUTPUT cDataset).` `DELETE OBJECT hDatasetService.``hWebService:DISCONNECT().``DELETE OBJECT hWebService.` `/* Parte II - Faz o parser do XML e criar um arquivo texto separado por tabulacao */``DEFINE VARIABLE iCount  AS INTEGER   NO-UNDO.``DEFINE VARIABLE iCount2 AS INTEGER   NO-UNDO.``DEFINE VARIABLE hDoc    AS HANDLE    NO-UNDO.``DEFINE VARIABLE hRoot   AS HANDLE    NO-UNDO.``DEFINE VARIABLE hValues AS HANDLE    NO-UNDO.``DEFINE VARIABLE hEntry  AS HANDLE    NO-UNDO.``DEFINE VARIABLE hText   AS HANDLE    NO-UNDO.``DEFINE VARIABLE cValue  AS CHARACTER NO-UNDO.` `OUTPUT TO c:\dataset.txt.` `CREATE X-DOCUMENT hDoc.``CREATE X-NODEREF hRoot.``CREATE X-NODEREF hEntry.``CREATE X-NODEREF hText.``CREATE X-NODEREF hValues.` `hDoc:LOAD(``"longchar"``, cDataset, FALSE).``hDoc:GET-DOCUMENT-ELEMENT(hRoot).` `/* Percorre as colunas  */``DO iCount =``1` `TO hRoot:NUM-CHILDREN WITH``20` `DOWN:````hRoot:GET-CHILD(hEntry, iCount).````IF hEntry:NAME <>``"columns"` `THEN````NEXT.` ```hEntry:GET-CHILD(hText,``1``).````PUT UNFORMATTED hText:NODE-VALUE``"~t"``.````DOWN.``END.``PUT UNFORMATTED SKIP.` `/* Percorre os registros  */``DO iCount =``1` `TO hRoot:NUM-CHILDREN WITH``20` `DOWN:````hRoot:GET-CHILD(hValues, iCount).````IF hValues:NAME <>``"values"` `THEN````NEXT.` ```/* Percorre os campos  */````DO iCount2 =``1` `TO hValues:NUM-CHILDREN:````hValues:GET-CHILD(hEntry, iCount2).` ```IF hEntry:NUM-CHILDREN =``0` `THEN````cValue =``""``.````ELSE DO:````hEntry:GET-CHILD(hText,``1``).````cValue = hText:NODE-VALUE.````END.````PUT UNFORMATTED cValue``"~t"``.````END.` ```PUT UNFORMATTED SKIP.``END.` `OUTPUT CLOSE.` `DELETE OBJECT hValues.``DELETE OBJECT hText.``DELETE OBJECT hEntry.``DELETE OBJECT hRoot.``DELETE OBJECT hDoc.` |
| --- | --- |

### Acessando WebServices a partir do TOTVS Fluig Plataforma

A plataforma permite fazer chamadas a WebServices de terceiros através do cadastro de **Serviços** na **Visualização de Serviços** do **Fluig Studio**.

Atenção

Para que um usuário que não é administrador da empresa possa criar, editar e remover serviços é necessário que ele possua a permissão "**Configurar Serviços**". Esta permissão pode ser concedida pelo administrador através do item "**Permissões**" disponível no agrupador **Pessoas** do **Painel de Controle** da plataforma Fluig.

Saiba como realizar esse procedimento [clicando aqui](https://tdn.totvs.com/pages/viewpage.action?pageId=269431879).

Para adicionar um novo WebService, é preciso clicar na opção **Incluir Serviço, **abrindo o assistente **Novo Serviço**, e informar o servidor do Fluig onde será adicionado o serviço, um código identificador para ele, sua descrição, a URL para o WSDL e o seu tipo (neste caso WebService). No exemplo abaixo, será utilizado um WebService público para consulta à tabela periódica, cujo endereço do WSDL é [http://www.webservicex.com/periodictable.asmx?wsdl](http://www.webservicex.com/periodictable.asmx?wsdl).

![](/download/attachments/73082260/acesso-ws-1.png?version=4&modificationDate=1443215671000&api=v2)

Com base nestas informações, a plataforma Fluig irá extrair as informações sobre o WebService informado e finalizará o cadastro deste serviço. 

Uma vez que o serviço esteja cadastrado, é possível visualizar as classes e métodos disponíveis neste serviço e que serão utilizados nos códigos JavaScript que farão uso do mesmo. A tela abaixo apresenta um exemplo de visualização de WebService.

![](/download/attachments/73082260/acesso-ws-2.png?version=1&modificationDate=1377284793000&api=v2)

Os serviços adicionados na plataforma podem ser instanciados e utilizados nos pontos onde o produto permite personalização utilizando-se JavaScript, como nos scripts para eventos globais, eventos de processos, eventos de definição de formulário ou Datasets. No exemplo a seguir, será criado um Dataset que fará uso deste serviço para trazer os dados da tabela periódica.

O código abaixo apresenta uma implementação de exemplo do uso de um serviço na construção de um [Dataset](/display/fluig/Desenvolvimento+de+Datasets):

**periodicTable.js**

[?](#)

| 1234567891011121314151617181920212223242526 | `function` `createDataset(fields, constraints, sortFields) {````// Cria o dataset````var` `dataset = DatasetBuilder.newDataset();````dataset.addColumn(``"Element Name"``);````dataset.addColumn(``"Symbol"``);````dataset.addColumn(``"Atomic Number"``);````dataset.addColumn(``"Atomic Weight"``);````// Conecta o servico e busca os livros````var` `periodicService = ServiceManager.getService(``'PeriodicTable'``);````var` `serviceHelper = periodicService.getBean();````var` `serviceLocator = periodicService.instantiate(``'net.webservicex.Periodictable'``);````var` `service = serviceLocator.getPeriodictableSoap();````// Invoca o serviço````try` `{````var` `result = service.getAtomicNumber(``"sodium"``);``// O termo "sodium" corresponde ao parâmetro do tipo String esperado na assinatura do método getAtomicNumber````var` `xml =``new` `XML(result);````for` `(``var` `index``in` `xml.Table) {````var` `element = xml.Table[index];````dataset.addRow(``new` `Array(element.ElementName.toString(), element.Symbol.toString(), element.AtomicNumber````.toString(), element.AtomicWeight.toString()));````}````}``catch` `(erro) {````dataset.addRow(``new` `Array(erro));````}````return` `dataset;``}` |
| --- | --- |

O primeiro passo para invocar o serviço é solicitar à plataforma Fluig que carregue-o, a partir do método **ServiceManager.getService('PeriodicTable')**. O valor passado como parâmetro, deve ser o código utilizado quando cadastrado o serviço.

Uma vez que o serviço tenha sido carregado, é utilizado o método **getBean()** para retornar um utilitário para acesso às classes do serviço, através do método **instantiate**. Através deste utilitário, é possível instanciar as classes disponíveis e que estão listadas no cadastro do Serviço (conforme imagem vista anteriormente).

Uma vez que se tenha instanciado o objeto utilitário do serviço, as classes que devem ser instanciadas e os métodos que devem ser invocados dependem de cada WebService utilizado, e deve-se recorrer à sua documentação para mais informações.

Para o serviço da tabela periódica é necessário realizar os seguintes passos:

[?](#)

| 123 | `var` `serviceLocator = serviceHelper.instantiate(``'net.webservicex.Periodictable'``);``var` `service = serviceLocator.getPeriodictableSoap();``var` `result = service.getAtoms();` |
| --- | --- |

Onde:

- **Passo 1**: Instanciar a classe **net.webservicex.Periodictable** para ter acesso ao localizador do serviço; 
- **Passo 2**: Invocar o método **getPeriodictableSoap** para instanciar o serviço;
- **Passo 3**: Invocar o método **getAtoms** para ter a lista dos elementos.

No caso deste serviço, o método **getAtoms** retorna uma string contendo um XML com a lista de todos os elementos, conforme o exemplo abaixo:

[?](#)

| 123456789 | `````````Actinium````````````Aluminium````````...``` |
| --- | --- |

Fique atento

Caso o WebService seja construído via Axis, o modo de chamar o método muda um pouco. Para acessar o método getAtoms é necessário recuperar a instância de PeriodictableSoap através do ServiceLocator, conforme exemplo abaixo:

[?](#)

| `var` `periodicService = ServiceManager.getService(``'PeriodicTable'``);``var` `serviceHelper = periodicService.getBean();``var` `serviceLocator = serviceHelper.instantiate(``'NET.webserviceX.www.PeriodictableLocator'``);``var` `service = serviceLocator.getperiodictableSoap();``log.info(service.getAtoms());` |
| --- |

Para percorrer o XML e extrair o dados disponíveis, são utilizadas as funcionalidades de tratamento de XML do JavaScript que facilita a manipulação de dados deste tipo. Para mais informações sobre esta funcionalidade, acesse: [http://www.ecma-international.org/publications/standards/Ecma-357.htm](http://www.ecma-international.org/publications/standards/Ecma-357.htm) ou [http://www.xml.com/pub/a/2007/11/28/introducing-e4x.html](http://www.xml.com/pub/a/2007/11/28/introducing-e4x.html).

O exemplo abaixo apresenta o código utilizado para percorrer o XML retornado:

[?](#)

| 12345 | `var` `NewDataSet =``new` `XML(result);``for` `(``var` `index``in` `NewDataSet.Table) {````var` `element = NewDataSet.Table[index];````dataset.addRow(``new` `Array(element.ElementName.toString()));``}` |
| --- | --- |

Uma vez implementado o código do Dataset, é possível visualizá-lo, conforme a figura abaixo:

![](/download/attachments/73082260/acesso-ws-3.png?version=1&modificationDate=1377284793000&api=v2)

Abaixo segue outro exemplo de utilização de serviços, empregando campos complexos na passagem de parâmetros. Este serviço é responsável por alterar o valor do campo de um registro de formulário:

**periodicTable.js**

[?](#)

| 123456789101112131415161718 | `//Servico "/webdesk/ECMCardService?wsdl"cadastrado com o código "CardService"``var` `cardServiceProvider = ServiceManager.getServiceInstance(``"CardService"``);``var` `cardServiceLocator = cardServiceProvider.instantiate(``"com.totvs.technology.ecm.dm.ws.ECMCardServiceServiceLocator"``);``var` `cardService = cardServiceLocator.getCardServicePort();``var` `cardFieldDtoArray = cardServiceProvider.instantiate(``"com.totvs.technology.ecm.dm.ws.CardFieldDtoArray"``);``var` `cardField = cardServiceProvider.instantiate(``"com.totvs.technology.ecm.dm.ws.CardFieldDto"``);` `//Seta valor no campo com name = 'nome'``cardField.setField(``"nome"``);``cardField.setValue(``"Valor alterado via WS dentro de um evento workflow"``);` `var` `vetCardFields =``new` `Array();``vetCardFields.push(cardField);``cardFieldDtoArray.setItem(vetCardFields);` `//Altera o(s) campo(s) do registro de formulário.``//updateCardData(tenantId, login, senha, codRegistroForm, cardFieldDtoArray);``cardService.updateCardData(1,``"adm"``,``"adm"``, 8, cardFieldDtoArray);` |
| --- | --- |

##### WebServices com Autenticação Básica

Atenção

Esta opção é válida apenas para serviços criados utilizando a API CXF.

###### WebServices com Autenticação Básica no acesso ao WSDL

Para criar serviços de WebServices que utilizam Autenticação Básica no acesso ao seu WSDL, é necessário marcar a opção **Requer Autenticação** no cadastro de serviços do Fluig Plataforma, conforme exemplo abaixo:

![](/download/attachments/73082260/autenticacao-basica1.png?version=1&modificationDate=1443213741000&api=v2)

Para finalizar o cadastro será apresentada a janela para autenticação abaixo:

![](/download/attachments/73082260/autenticacao-basica2.png?version=1&modificationDate=1443213805000&api=v2)

###### Consumindo WebServices com Autenticação Básica

Para consumir WebServices que fazem uso de autenticação básica, é necessário utilizar o método **getBasicAuthenticatedClient **localizado no provider do serviço (o mesmo que é obtido via **ServiceManager). **Este método disponibiliza um client autenticado.

Apesar de na hora do cadastro você informar um usuário e senha, ele é exclusivo para o momento do cadastro do serviço buscando os dados do WSDL para gerar os Stubs. As suas chamadas no serviço devem sempre utilizar o método **getBasicAuthenticatedClient.**

Os parâmetros que devem ser informados no método seguem a ordem abaixo:

1. Instância do serviço;
2. Nome da classe do serviço;
3. Usuário para a autenticação;
4. Senha para a autenticação.

Utilizando o exemplo do serviço **PeriodicTable **apresentado anteriormente, o código da chamada teria as alterações abaixo:

[?](#)

| 1234 | `var` `serviceLocator = serviceHelper.instantiate(``'net.webservicex.Periodictable'``);``var` `service = serviceLocator.getPeriodictableSoap();``var` `authenticatedService = serviceHelper.getBasicAuthenticatedClient(service,``"net.webservicex.PeriodictableSoap"``,``'usuario'``,``'senha'``);``var` `result = authenticatedService.getAtoms();` |
| --- | --- |

Atenção

Os métodos estáticos não podem ser chamados através de uma instância de objeto. Portanto, é necessário utilizar o método "serviceHelper.instantiate" para criar uma instância do objeto e atribuir um valor, sendo necessário informar como parâmetros o nome da classe, o método da classe, o tipo do valor e o próprio valor. Veja o exemplo a seguir:

###### Exemplo com Instantiate:

[?](#)

| 123456789101112131415161718192021222324252627 | `// Obtém a instância do serviço 'WorkflowEngineService'``var` `workflowEngineServiceProvider = ServiceManager.getServiceInstance(``"WorkflowEngineService"``);` `// Instância o serviço``var` `workflowEngineServiceLocator = workflowEngineServiceProvider.instantiate(``"com.totvs.technology.ecm.workflow.ws.ECMWorkflowEngineServiceService"``);``var` `workflowEngineService = workflowEngineServiceLocator.getWorkflowEngineServicePort();` `// Instância objeto de Array de anexos``var` `processAttachmentDtoArray = workflowEngineServiceProvider.instantiate(``"com.totvs.technology.ecm.workflow.ws.ProcessAttachmentDtoArray"``);` `//Exemplo executeStaticMethod:` `// Obtém a instância do serviço 'wsTerceiro'``var` `periodicService = ServiceManager.getServiceInstance(``"wsTerceiro"``);``// Instancia o serviço``var` `serviceHelper = periodicService.getBean();``var` `serviceLocator = periodicService.instantiate(``"br.com.webformat.webservices.Retorno"``);``var` `service = serviceLocator.getRetornoSoap();` `// Neste caso, é preciso autenticar no ws``var` `authService = serviceHelper.getBasicAuthenticatedClient(service,``"br.com.webformat.webservices.RetornoSoap"``, usuario, senha);` `// Faz a chamada do método para criar o Enum``var` `loadStatus = serviceHelper.executeStaticMethod(``"br.com.webformat.webservices.LoadStatus"``,``"fromValue"``, [``"java.lang.String"``], [pLoadStatus]);` `//Chamada do ws``var` `response = authService.sendLoadStatusItem(pWsKey, pErpCode, loadStatus, pDescription, pCodSolicitacao);` |
| --- | --- |

##### WebService com client personalizado

Atenção

Esta técnica é válida para o TOTVS Fluig Plataforma 1.3.7 ou superior.

Em integrações que utilizem serviços criados com o CXF com sistemas que não suportam o protocolo HTTP/1.1 (Protheus, por exemplo), é necessário utilizar este método configurando o parâmetro "disable.chunking" com o valor "true".

Para personalizar o client que acessa os serviços, é necessário utilizar o método **getCustomClient**, localizado no provider do serviço (o mesmo que é obtido via **ServiceManager**). Esta configuração exige a criação de um mapa de parâmetros com seus respectivos valores para passar ao método, conforme snippet abaixo:

[?](#)

| `var` `properties = {};``properties[``"basic.authorization"``] =``"true"``;``properties[``"basic.authorization.username"``] =``"username"``;``properties[``"basic.authorization.password"``] =``"password"``;``properties[``"disable.chunking"``] =``"true"``;``properties[``"log.soap.messages"``] =``"true"``;``//A propriedade receive.timeout está disponível a partir da versão 1.4.10``properties[``"receive.timeout"``] =``"60000"``;` `var` `supplierService = ServiceManager.getService(``'[Nome do serviço]'``);``var` `serviceHelper = supplierService.getBean();``var` `serviceLocator = serviceHelper.instantiate(``'net.webservicex.Periodictable'``);``var` `service = serviceLocator.getPeriodictableSoap();``var` `customClient = serviceHelper.getCustomClient(service,``"net.webservicex.PeriodictableSoap"``, properties);``var` `result = customClient.getAtoms();` |
| --- |

Os parâmetros que podem ser definidos são os seguintes:

| Propriedade | Função |
| --- | --- |
| Propriedade | Função |
| ```
basic.authorization
``` | Quando definido como "true", faz o mesmo que o método getBasicAuthenticatedClient, porém permite aplicar as configurações de autenticação juntamente com as demais personalizações abaixo. Para configurar a autenticação, as propriedades com "username" e "password" abaixo também precisam ser definidas. |
| ```
basic.authorization.username
``` | Usuário a ser utilizado para autenticação básica. |
| ```
basic.authorization.password
``` | Senha do usuário utilizado para autenticação básica. |
| ```
disable.chunking
``` | Quando definido como "true", desabilita o envio de requisições grandes em "pedaços" menores. Pode ser útil quando o serviço chamado não suporta este tipo de requisição. |
| ```
log.soap.messages
``` | Quando definido como "true", permite que as mensagens SOAP utilizadas nas requisições feitas aos serviços sejam apresentadas no log do servidor, facilitando a depuração em caso de falhas. |
| receive.timeout | Definir o timeout da requisição. Por default, o tempo de timeout são 30 segundos. Para alterar o valor deve ser informado o valor em milissegundos. Caso queira que o timeout seja ilimitado, atribuir o valor 0 para esta propriedade. * Leia nota abaixo |

Importante

O tempo de timeout de requisição padrão da plataforma deveria ser suficiente para a realização de uma integração convencional. Antes de aumentar o tempo de timeout de integrações da plataforma Fluig verifique o fato que levou a esta decisão.

**Por exemplo,** revise códigos e dimensionamento do servidor que recebe as integrações. Otimizações de códigos podem reduzir o tempo necessário para realizar uma transação e oferecer as pessoas que utilizam a plataformacFluig uma navegação mais fluida.

##### Resolvendo conflitos utilizando arquivos de bind JAXB

Atenção

Esta técnica é válida apenas para serviços criados utilizando a API CXF.

Ao criar serviços no Fluig Plataforma podem ocorrer alguns conflitos impedindo a geração dos stubs. Normalmente isso ocorre quando temos um elemento do schema do WSDL com duas ou mais propriedades com o mesmo identificador ou nome, o que impede a criação da Classe Java desse elemento.

Para resolver esse conflitos podem ser utilizados arquivos de bind JAXB, conforme a figura abaixo:

![](/download/attachments/73082260/Binding.png?version=3&modificationDate=1443215724000&api=v2)

Esse arquivo tem o propósito de personalizar a geração dos stubs alterando o nome das propriedades conflitantes.

- A seguir temos dois exemplos de utilização desses arquivos:

**Exemplo 1 :**

Durante a criação do serviço ocorreu o seguinte erro :

```
Não foi possível salvar os stubs para acesso ao serviço: 
http://localhost:8080/pcliente/CHAMTEC.apw?WSDL [2255,11]: Two declarations cause a collision in the ObjectFactory class.
http://localhost:8080/pcliente/CHAMTEC.apw?WSDL [2245,11]: (Related to above error) This is the other declaration.
```

O que indica que temos duas declarações de propriedades conflitantes, conforme o fragmento do WSDL abaixo:

[?](#)

| 123456789 | `````````...````````...````````...``````` |
| --- | --- |

Os identificadores **"_A1COD_MUN"** e **"_A1CODMUN"** são considerados iguais pela API de geração dos stubs, e fazem parte do mesmo tipo complexo **"STRUCT_SA1"**.

Para resolver esse conflito, pode ser utilizado o arquivo de bind abaixo :

[?](#)

| 12345678 | `````````````````````````` |
| --- | --- |

Esse arquivo faz com que o elemento **"_A1COD_MUN"** contido no tipo complexo **"STRUCT_SA1"** assuma o nome **"_A1COD_MUN2"**, resolvendo assim o conflito na geração dos stubs.

**Exemplo 2 :**

Durante a criação do serviço ocorreu o seguinte erro :

```
Não foi possível salvar os stubs para acesso ao serviço: 
http://localhost:8080/tbc/wsConsultaSQL.asmx?WSDL [49,19]: Property "Any" is already defined. Use  to resolve this conflict.
http://localhost:8080/tbc/wsConsultaSQL.asmx?WSDL [50,19]: The following location is relevant to the above error
http://localhost:8080/tbc/wsConsultaSQL.asmx?WSDL [75,19]: Property "Any" is already defined. Use  to resolve this conflict.
http://localhost:8080/tbc/wsConsultaSQL.asmx?WSDL [76,19]: The following location is relevant to the above error
```

O que indica que temos duas propriedades com a identificação **"any"** no nosso elemento, conforme o fragmento do arquivo WSDL abaixo:

[?](#)

| 1234567891011121314151617181920212223242526272829 | `````````````````````````````````````````````````````...````````````````````````````````````````````````````` |
| --- | --- |

Essa situação ocorre em dois elementos do arquivo WSDL, o **"RealizarConsultaSQLDataTableResponse"** e o **"RealizarConsultaSQLDataTableAuthResponse"**.

Para resolver esse conflito, pode ser utilizado o arquivo de bind abaixo :

[?](#)

| 1234567891011 | `````````````````````````````````````` |
| --- | --- |

Esse arquivo faz com que a segunda propriedade **"any"** de cada um dos elementos assuma o nome **"any2"**, resolvendo assim o conflito na geração dos stubs.

Maiores informações sobre personalizações via JAXB Bindings em [http://docs.oracle.com/javase/tutorial/jaxb/intro/custom.html](http://docs.oracle.com/javase/tutorial/jaxb/intro/custom.html)

Importante

Além de WebServices o Fluig também pode realizar chamadas Progress. Entretanto essa técnica está descontinuada, e nossa recomendação é usar serviços SOAP.

Caso seu projeto já utilize essa técnica acesse a [documentação depreciada](/pages/viewpage.action?pageId=237378575).

# Integrações Assíncronas em Solicitações

---

Para a realização de integrações assíncronas em processos Workflow, a recomendação atual é a utilização de atividades do tipo Serviço configuradas com execução automatizada, onde é possível selecionar a mensagem de sucesso e a quantidade de tentativas que o script tentará executar antes de seguir a um fluxo de erro.

Este tipo de integração comporta a utilização de serviços externos e serve exatamente para que haja a possibilidade de realizar manobras alternativas quando uma solicitação apresentar um erro de integração. Para maiores informações, acessar o link a seguir: [Integração Assíncrona via Processos Workflow.](https://tdn.totvs.com/x/9mUmDg)


<!-- anchors: IntegraçãocomAplicativosExternos-Índice, IntegraçãocomAplicativosExternos-ConsideraçõesGerais, IntegraçãocomAplicativosExternos-VisãoGeral, IntegraçãocomAplicativosExternos-WebServices, IntegraçãocomAplicativosExternos-AcessandoosWebServicesdoTOTVSFluigPlataforma, IntegraçãocomAplicativosExternos-ViaApacheFlex®, stubFlex, stubFlex-1, stubFlex-2, stubFlex-3, stubFlex-4, stubFlex-5, highlighter_271356, highlighter_108191, IntegraçãocomAplicativosExternos-ViaJava™, highlighter_940219, highlighter_971142, IntegraçãocomAplicativosExternos-ViaProgress®4GL, highlighter_530899, IntegraçãocomAplicativosExternos-AcessandoWebServicesapartirdoTOTVSFluigPlataforma, highlighter_434237, highlighter_597369, highlighter_448053, highlighter_806092, highlighter_149976, highlighter_41904, IntegraçãocomAplicativosExternos-WebServicescomAutenticaçãoBásica, IntegraçãocomAplicativosExternos-WebServicescomAutenticaçãoBásicanoacessoaoWSDL, IntegraçãocomAplicativosExternos-ConsumindoWebServicescomAutenticaçãoBásica, highlighter_453482, IntegraçãocomAplicativosExternos-ExemplocomInstantiate:, highlighter_867782, IntegraçãocomAplicativosExternos-WebServicecomclientpersonalizado, highlighter_827917, IntegraçãocomAplicativosExternos-ResolvendoconflitosutilizandoarquivosdebindJAXB, highlighter_910238, highlighter_637439, highlighter_731987, highlighter_436392, IntegraçãocomAplicativosExternos-IntegraçõesAssíncronasemSolicitações -->
