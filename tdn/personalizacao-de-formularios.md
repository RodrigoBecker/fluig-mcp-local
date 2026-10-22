---
title: "Personalização de formulários"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=663066946"
scraped_at: "2026-03-09T03:59:07.206Z"
depth: 2
anchors: 34
child_links: 61
---

# Personalização de formulários

# Índice

# Objetivo

---

O objetivo deste guia é descrever algumas personalizações no desenvolvimento de formulários avançados no Fluig, abordando conteúdos como a configuração de máscaras dos campos, utilização de campos *combo* e *zoom*, utilização de serviços de dados e utilização de regras de formulário.

# Pré-requisitos

---

Antes de iniciar, é importante que já tenha visto a documentação de [Desenvolvimento de Formulários](/pages/viewpage.action?pageId=181962950).

# Personalização de formulários

---

Neste capítulo será demonstrado como interagir com alguns tipos de controles do formulário que possuem características especiais, como por exemplo, o preenchimento do conteúdo de um ComboBox através da utilização de Datasets.

O Fluig, por padrão realiza a importação da biblioteca JavaScript jQuery em todos os formulários, exceto nos casos onde o formulário já a realize. Nestes casos o Fluig identificará que o jQuery já está definido e não realizará a importação novamente.

Caso o formulário utilize outra biblioteca que possa entrar em conflito com o jQuery,  será necessário definir no formulário a variável javascript fluigjQuery, com valor false, que o Fluig deixará de fazer tal importação, porem algumas outras funcionalidades como a máscara de campos do Fluig, também serão desabilitadas.

### Máscara de Campos

Muitos campos em um formulário possuem uma formatação específica para o seu conteúdo, como  datas, CEP, CPF entre outros. 

Para auxiliar o desenvolvedor de formulários, o Fluig permite habilitar máscaras por campo, bastando informar o atributo "mask" e a máscara desejada aos objetos **input** do tipo **text**.

**Exemplo de utilização de máscaras**

[?](#)

| `` |
| --- |

Para elaborar a máscara é possível utilizar:

| Código | Descrição |
| --- | --- |
| Código | Descrição |
| 0 | Somente Números. |
| 9 | Somente números mais opcional. |
| # | Somente números mais recursivo. |
| A | Números ou letras. |
| S | Somente letras entre A-Z e a-z. |

**Outros exemplos de utilização de máscaras**

[?](#)

| `` ```Data:``"00/00/0000"````Horário:``"00:00:00"````Data e Hora:``"00/00/0000 00:00:00"````CEP:``"00000-000"````Telefone:``"0000-0000"````Telefone(ddd):``"(00) 0000-0000"``Telefone(ddd + 9ºdígitos):``"(00) 90000-0000"````Placa de carro:``"SSS 0000"````CPF:``"000.000.000-00"````CNPJ:``"00.000.000/0000-00"````IP:``"099.099.099.099"````porcentagem:``"#00.000,00%"````Valor:``"#00.000.000.000.000,00"` |
| --- |

O My Fluig não suporta o atributo **mask**.

Atenção!

Caso a importação da biblioteca jQuery esteja desabilitada através da variável fluigjQuery, a funcionalidade de máscaras também estará desabilitada.

### ComboBox

Geralmente é necessário popular um ComboBox de um formulário com um determinado grupo de valores.

No Fluig isto é possível através da utilização de *Datasets.* Os Datasets são serviços de dados padrão disponibilizados pelo Fluig, como por exemplo, o serviço de “Volumes” do produto.

Para habilitar o Dataset no ComboBox basta usar a seguinte construção:

[?](#)

| `` |
| --- |

**Onde:**

- **dataset:** é o nome do Dataset.
- **datasetkey:** é a chave do registro.
- **datasetvalue:** é o valor de um determinado campo do registro.
- **addBlankLine:** é o que define se a primeira linha do combo será um valor em branco.

**Exemplo:**

[?](#)

| `` |
| --- |

No exemplo acima estamos listando em um ComboBox todos os Volumes cadastrados no Fluig.

Caso necessário a ordenação dos dados provindos de um [dataset interno](/display/fluig/Datasets+internos), indicamos a criação de um dataset (simples ou avançado) que execute o interno e ordene os dados, antes de alimentar o componente combobox.

Para utilizar um ComboBox com somente **uma opção** não deve ser utilizado caracteres especiais e espaço no *value*da tag option.

**Exemplos:**

- *Forma correta*

[?](#)

| `````Teste``` |
| --- |

- *Forma Incorreta*

[?](#)

| `````Teste``` |
| --- |

### Zoom

Permite a consulta de entidades e outros formulários criados no Fluig para seleção de dados pelo usuário. Para utilizar este componente basta inserir um campo de texto com alguns parâmetros específicos.

Atenção!

Para utilizar o zoom do Fluig, é necessário estar utilizando o Fluig Style Guide, para mais informações acesse [https://style.fluig.com/](https://style.fluig.com/)

Veja o exemplo em nosso repositório [aqui](https://git.fluig.com/projects/SAMPLES/repos/style-guide/browse).

[?](#)

| ````type``=``"zoom"````id` `=``"c7_total"````name``=``"c7_total"````data-zoom="{````'displayKey':'colleagueName',````'datasetId':'colleague',````'maximumSelectionLength':'2',````'placeholder':'Escolha o usuário',````'fields':[````{````'field':'colleagueId',````'label':'ID'````},{````'field':'colleagueName',````'label':'Nome',````'standard':'true'````},{````'field':'login',````'label':'Login'````}````]````}"``/>` |
| --- |

**Onde:**

- **type**: o atributo type para este componente obrigatoriamente é 'zoom'
- **name**: nome do campo
- **data-zoom**: parâmetros do zoom em formato json onde:**maximumSelectionLength**: limite de registros selecionáveis, caso não seja informado, o valor padrão é 1.
- **resultLimit**: número máximo de resultados que serão listados na busca, o valor padrão é 300.

- **placeholder**: texto de placeholder, que irá aparecer no zoom. Pode ser utilizado para instrução.**displayKey**: coluna filtrável e de exibição após selecionado o registro
- **filterValues**: atributo do dataset e valor para serem filtrados. Devem ser colocados em pares, separados por vírgula (,) onde o primeiro valor é o nome do campo e o segundo refere-se ao valor do campo.

**datasetId** ou **cardDatasetId**: opte por uma das opções:

- **datasetId**:  é o nome do dataset.
- **cardDatasetId**: é o numero de outro formulário para consulta.
- **fields**: Estrutura do filtro**field**: atributo do dataset que será utilizado.
- **label**: descrição da coluna.
- **standard**: a coluna que será utilizada como ordenação padrão e valor do registro selecionado.

**ATENÇÃO**: Este parâmetro só é válido para datasets internos. Datasets desenvolvidos sobre a plataforma não permitem a utilização de filtros a menos que sejam desenvolvidos utilizando *constraints* para realizar estas ações.

Importante

 O limite padrão de resultados listados é de 300 e pode ser alterado de acordo com a necessidade do cliente. Não são listados todos os registros por questões de performance e processamento de dados.

Para o caso de alguns datasets que o nome dos campos são compostos de duas partes com separação por ponto, somente deve ser usado o nome da parte após o ponto. Por exemplo, no dataset de colleagueGroup aonde será o filtrado pelo campo "colleagueGroupPK.colleagueId" o código ficaria dessa maneira:

[?](#)

| ````type``=``"zoom"````id` `=``"nome"````name``=``"nome"````data-zoom="{````'displayKey':'colleagueId',````'datasetId':'colleagueGroup',````'maximumSelectionLength':'1',````'placeholder':'Selecione o solicitante',````'fields':[````{````'field':'colleagueId',````'label':'Usuário'````}````]````}"``/>` |
| --- |

Para obter outros atributos do registro selecionado pelo usuário, pode ser adicionada a seguinte função JavaScript ao formulário do processo:

[?](#)

| `function setSelectedZoomItem(selectedItem) {``}` |
| --- |

Onde *selectItem* é o registro selecionado pelo usuário na tela de zoom.

Esta função será disparada ao eliminar uma tag (valor) do zoom. A partir deste evento, o valor eliminado poderá ser manipulado, por exemplo, para controlar outros campos que dependem deste valor eliminado. 

[?](#)

| ```function removedZoomItem(removedItem) {``}` |
| --- |

**Acesse o exemplo completo (form-smart-zoom) em nosso Git aqui.** 

Para acessar um campo do registro selecionado:

[?](#)

| `selectedItem["fieldName"]` |
| --- |

Onde *fieldName* é o nome do campo de retorno que foi definido na chamada de zoom. Caso a 'label' do campo tenha sido declarada, ela deverá ser utilizada.

Para acessar o tipo de zoom selecionado:

[?](#)

| `selectedItem.inputId = "c7_total"``selectedItem.inputName = "c7_total"` |
| --- |

Onde *inputId *é o id do campo e *i**nputName *é o nome do campo de retorno que foi definido no input zoom. Estes parâmetros possuem a mesma funcionalidade do *type *da antiga técnica de zoom.

Para recarregar o valor do *filterValues *no formulário a fim de torná-lo mais dinâmico, é possível utilizar o método a seguir:

[?](#)

| `reloadZoomFilterValues(inputName, filterValues);` |
| --- |

Este método é padrão durante a execução de um formulário dentro do Fluig a partir da atualização 1.5.5 e recarrega o Zoom por inteiro, colocando os novos valores de filterValues. Em que:

*inputName:* refere-se ao nome do campo de zoom, ou seja, o valor *name *na sua declaração;

*filterValues:* espera-se um valor literal separado por vírgula, sendo que o primeiro valor refere-se ao campo a ser filtrado e o segundo valor refere-se ao valor que irá filtrar.

Observação

Foi criado um exemplo (**form-smart-filter**) de como utilizar o método **reloadZoomFilterValues**, que você pode acompanhar clicando **aqui**.

#### Definir valor baseado na troca de valor de outro campo/zoom

Para realizar a busca de um valor em um campo de tipo zoom, com valores obtidos de outros campo zoom, deve-se ser utilizada primeiramente a função *setSelectedZoom*, que por parâmetro receberá o item selecionado pelo usuário no campo (selectedItem).

[?](#)

| `function setSelectedZoomItem(selectedItem) {}` |
| --- |

Dentro desta função, verificaremos o campo no qual vai pegar o valor do primeiro zoom, que no caso complementará o segundo:

[?](#)

| `if(selectedItem.inputId == "id do campo"){}` |
| --- |

Os id's dos campos de tipo zoom serão retornados em *selectedItem.inputId*, por este motivo devemos inserir esta validação, para que apenas o valor do campo certo seja retornado. Após o valor do campo estiver de acordo com sua opção, deverá ser utilizada a função *reloadZoomFilterValues* dentro da validação do nome do campo, que aplicará o filtro e recarregará o zoom.

Aplicando os valores:

[?](#)

| `reloadZoomFilterValues("nome_do_campo_de_zoom_que_receberá_o_filtro", "campo_a_ser_filtrado," + selectedItem["valor_que_ira_filtrar"]);` |
| --- |

Código do exemplo completo:

[?](#)

| `function setSelectedZoomItem(selectedItem) {````if(selectedItem.inputId == "id do campo"){````reloadZoomFilterValues("nome_do_campo_de_zoom_que_receberá_o_filtro", "campo_a_ser_filtrado," + selectedItem["valor_que_ira_filtrar"]);````}``}` |
| --- |

#### Bloquear e habilitar novo zoom baseado em algum campo

Para bloquear e desbloquear um campo de tipo zoom, com base em outro campo, devemos implementar no campo a ser validado, o evento onBLur no HTML apontando para uma função que fará toda a validação e realizará o bloqueio dos campos. Utilizaremos como exemplo o evento onBlur.

Evento onBlur no input passando na função 'this.value', que vai mandar o valor que foi preenchido no campo para a função:

[?](#)

| `` |
| --- |

Dentro desta função, será validado se o valor recebido pela função for nulo, e caso seja, bloqueie o campo zoom. Caso este valor não esteja nulo, deverá ser adicionado a condição *else* para re-habilitar o campo zoom.

[?](#)

| `function validateFieldIsNull(valor){````if(valor != ""){````window["zoomfield"].disable(false);````} else {````window["zoomfield"].disable(true);````}``}` |
| --- |

O exemplo do recurso de bloquear e habilitar zoom com base em outro campo somente é suportado para a atualização **1.6.1 ou acima**.

É possível definir manualmente um valor para campos do tipo zoom utilizando a técnica demonstrada neste [exemplo](https://git.fluig.com/projects/SAMPLES/repos/projetos/browse/form-smart-zoom) (**form-smart-zoom**), que está disponível em nosso repositório [Git](https://git.fluig.com/projects/SAMPLES).

A [antiga técnica para zoom](https://tdn.totvs.com/pages/viewpage.action?pageId=196809616) ainda é suportada pela plataforma. Porém, recomendamos a utilização da técnica descrita acima que está de acordo com os padrões do Fluig Style Guide e permite maior fluidez utilizando o componente.

#### Filtrar colunas do Zoom 

O campo Pesquisa também conhecido como Zoom, agora traz o botão “Filtrar colunas” que irá facilitar a aplicação de filtros no campo de pesquisa do registro de formulário, possibilitando realizar buscas por colunas específicas. Esta ação tornará o resultado de busca mais fácil e rápido.

O botão Filtrar colunas irá possibilitar que todas as colunas do zoom sejam exibidas, porém será possível selecionar quais colunas serão apresentadas ao preencher um registro de formulário, através da seleção do indicativo ON e OFF.

**Por exemplo:** ao definir a coluna Código como OFF ela não será apresentada no formulário, da mesma forma que, ao defini-la como ON a coluna será apresentada. 

![](/download/attachments/663066946/Filtrar%20colunas%20do%20zoom.gif?version=1&modificationDate=1643306801727&api=v2)

Atenção!

O zoom utilizará a coluna com o nome destacado na cor verde como base para sua pesquisa sendo assim, recomendamos que esta coluna esteja com o indicativo ON ligado. Pois ao deixar o indicativo desta coluna como OFF o zoom não conseguirá realizar a busca dos resultados e não irá apresentá-los no registro de formulário.

#### Zoom Externo

Em situações aonde os dados dos elementos externos ao Fluig são muito volumosos é recomendada a construção de uma aplicação externa ao Fluig que fará o papel de zoom para o usuário. Abaixo será descrita uma técnica JavaScript aonde será possível chamar uma aplicação externa e a mesma poderá devolver o dado solicitado pelo usuário para um campo do formulário do Fluig.

O primeiro passo para implementação dessa técnica é criar uma lógica em JavaScript que irá abrir uma nova janela chamando a aplicação externa que irá se comportar como zoom para o formulário. Vamos utilizar e explanar o comando*window.open* neste exemplo:

[?](#)

| `Window.open(URL Aplicação Externa, Nome da Janela que será aberta, comandos adicionais)` |
| --- |

**Onde:**

**URL Aplicação Externa:** É a url da aplicação externa que funcionará como zoom para o Fluig. Ex: [http://servidor/applications/forneczoom.asp](http://servidor-ecm/applications/forneczoom.asp).

**Nome da Janela:** Nome da janela que será utilizado pelo navegador do usuário como identificador. Para evitar a sobreposição de conteúdo em janela é recomendado que para cada zoom chamado por um mesmo formulário seja adicionado um nome diferente. Ex: “ZoomFormec”.

**Comandos Adicionais:** Comandos adicionais utilizados para a criação da janela que irá conter a aplicação zoom. Ex: “width=230, height=230”.

Nota

Devido a uma restrição dos navegadores a url do programa de zoom externo ao Fluig deverá estar no mesmo domínio em que o Fluig se encontra. Caso contrário não será possível atribuir ao campo do formulário o valor escolhido para o zoom. Este problema ocorrerá por que os navegadores proíbem a pratica de codificação JavaScript cross-domain.

O código abaixo irá programar um formulário do Fluig contendo um campo e um botão lateral que irá invocar a janela da aplicação externa:

[?](#)

| `````Código do Fornecedor:``````````` `````Function mostraLista() {````Window.open(“fornecedores.html”, “list”,”width=230,height=230”);````}``` |
| --- |

O segundo passo é programar dentro da aplicação externa uma função JavaScript que devolva para o campo do formulário o valor escolhido para o usuário na aplicação externa. Essa aplicação externa poderá ser desenvolvida em qualquer tecnologia de desenvolvimento web existente no mercado de que a mesma possa realizar a execução de scripts JavaScript no lado do cliente. Segue exemplo de uma função JavaScript que passa o valor para o campo do formulário:

[?](#)

| `````function escolha(valor) {````// A linha abaixo testa se a janela do formulário do fluig que abriu a janela de zoom ainda está aberta````if (window.opener && !window.opener.close) {````// seta o valor passando para o campo````window.opener.document.(id do form no formulário fluig).(nome do campo).value = valor;````}````// Fecha a janela da aplicação zoom````window.close();````}``` |
| --- |

**Onde:**

**Id do form no formuário Fluig:** Caso algum id tenha sido definido para a tag *<form>* no formulário do Fluig é interessante referenciar neste comando. Pode ser utilizada também a referência de coleção *forms* dentro do comando *(forms[posição])*. 
Ex: *FornecedorForm, forms[0]*.

**Nome do Campo:** Nome do campo que irá receber o valor passado para a função. 
Ex: *cod_fornec*.

**Valor:** Dado que será passado para o campo do formulário do Fluig.

O exemplo a seguir irá programar um exemplo de zoom externo feito inteiramente em HTML com dados estáticos apenas para ilustração. Os dados de zoom podem provir de qualquer fonte seja ela interna ou externa ao Fluig.

[?](#)

| `````````Lista de fornecedores`  ```function escolha(valor) {````// Teste de validade do Opener````if (window.opener && !window.opener.closed) {````// gravando o valor do campo cod_fornec````window.opener.document.forms[0].cod_fornec.value = valor;````}````window.close();``}````` ```````` ```` ```````Exemplo aplicacao ECM````CodigoNASDAQ````TOTVS````TOTVSv3````RM````RM1````Datasul````Dts3````Logix````Lgx2````````` ```` `````` |
| --- |

Para colocar o exemplo em prática no produto, basta publicar a definição de formulário a seguir informando o arquivo do zoom externo como anexo da definição de formulário.

[Exemplo de Zoom.zip](/download/attachments/75270483/Exemplo%20de%20Zoom.zip?version=1&modificationDate=1379957815000&api=v2)

Ao clicar em um dos itens da tela de zoom será chamada a função JavaScript escolha que ira enviar o valor para o campo *cod_fornec* no formulário do Fluig.


<!-- anchors: Personalizaçãodeformulários-Índice, Personalizaçãodeformulários-Objetivo, Personalizaçãodeformulários-Pré-requisitos, Personalizaçãodeformulários-Personalizaçãodeformulários, Personalizaçãodeformulários-MáscaradeCampos, highlighter_438183, highlighter_9394, Personalizaçãodeformulários-ComboBox, highlighter_306324, highlighter_336043, highlighter_837191, highlighter_541414, Personalizaçãodeformulários-Zoom, highlighter_806221, highlighter_847757, highlighter_736172, highlighter_184767, highlighter_791911, highlighter_116791, highlighter_824088, Personalizaçãodeformulários-Definirvalorbaseadonatrocadevalordeoutrocampo/zoom, highlighter_331489, highlighter_578709, highlighter_908967, highlighter_668947, Personalizaçãodeformulários-Bloquearehabilitarnovozoombaseadoemalgumcampo, highlighter_454025, highlighter_918252, Personalizaçãodeformulários-FiltrarcolunasdoZoom, Personalizaçãodeformulários-ZoomExterno, highlighter_395656, highlighter_40692, highlighter_806803, highlighter_289165 -->
