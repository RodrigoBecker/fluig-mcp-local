---
title: "Personalização de formulários - Nova versão"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=668198714"
scraped_at: "2026-03-09T03:59:29.670Z"
depth: 2
anchors: 23
child_links: 60
---

# Personalização de formulários - Nova versão

# Índice

Objetivo

---

O objetivo deste guia é descrever algumas personalizações no desenvolvimento de formulários avançados no fluig, abordando conteúdos como a configuração de máscaras dos campos, utilização de campos *combo* e *zoom*, utilização de serviços de dados e utilização de regras de formulário.

# Pré-requisitos

---

Antes de iniciar, é importante que já tenha visto a documentação de [Desenvolvimento de Formulários](https://tdn.totvs.com/pages/viewpage.action?pageId=181962950).

Serviços de Dados

---

O fluig possui integração com dois tipos de serviços de dados, são eles: Dataset e Serviços Externos. Ambos podem ser usados em todos os eventos disponíveis para customização de definição de formulário.

Importante

Ao construir formulários utilizando a antiga técnica (formulário avançado) onde se faz o uso de datasets, é necessário atenção quanto aos dados incluídos no mesmo, pois ao marcar o formulário como **Documento público** o dataset respeitará a condição do formulário se **tornando público também**.

Com isso, orientamos o uso da nova técnica de construção de formulário, muito mais prática e dinâmica facilitando o uso e a construção dos formulários. Confira nossa documentação sobre a nova técnica de [construção de formulário](https://tdn.totvs.com/x/2CicG).

### Dataset

É um serviço de dados que fornece acesso às informações, independente da origem dos dados. O fluig fornece [Datasets internos](/display/fluig/Datasets+internos) que permitem acesso as entidades, como Usuários, Grupos de Usuários, entre outros.

Nota

Os exemplos abaixo utilizam a função getDatasetValues, disponível somente para os Datasets de entidade e definição de formulário(quando informado o número da definição de formulário). Para a utilização de Datasets customizados consulte o Guia de Referência Customização de Datasets.

Na função getDatasetValues, NÃO são retornados os valores de todos os campos por questões de segurança. Para obter todos os dados é utilizado o DatasetFactory, exemplificado em [Desenvolvimento de Datasets](/display/fluig/Desenvolvimento+de+Datasets).

Por exemplo, para acessar o Dataset de usuários do fluig no evento *displayFields* de uma definição de formulário:

[?](#)

| `function displayFields(form,customHTML) {````// Obtendo o usuario via dataset````filter = new java.util.HashMap();````filter.put("colleaguePK.colleagueId","adm");````usuario = getDatasetValues('colleague',filter);````form.setValue('RNC_colab_abertura',usuario.get(0).get("colleaguePK.colleagueId"));``}` |
| --- |

Também é possível fazer uma chamada aos Datasets dentro da definição de formulário através de funções JavaScript.

O acesso aos Datasets também pode ser realizado diretamente no formulário da definição de formulário. Por exemplo, para acessar o Dataset de usuário e inserir os valores nos campos do HTML:

[?](#)

| ```````````````Teste XMLRPC````````````function init(){````var filter = new Object();````filter["colleaguePK.colleagueId"] = "adm";````var colleagues = DatasetFactory.getDatasetValues("colleague", filter);````if(colleagues.length > 0){````document.getElementById("colleagueName").value = colleagues[0].colleagueName;````document.getElementById("colleagueId").value = colleagues[0].colleagueId;````document.getElementById("login").value = colleagues[0].login;````document.getElementById("extensionNr").value = colleagues[0].extensionNr;````document.getElementById("groupId").value = colleagues[0].groupId;````document.getElementById("mail").value = colleagues[0].mail;````}else{````alert("Nenhum Usuário Encontrado");````}````}```````````````````````` Nome do Usuário: ```````````` Matricula do Usuário: ````````````Login do Usuário:```````````` Ramal do Usuário: ```````````` Grupo do Usuário: ```````````` E-mail do Usuário: ``````````````````` |
| --- |

Importante

Para atualizações anteriores ao fluig 1.5.6, utilizar da seguinte maneira:

[?](#)

| `(...)``var` `colleagues = getDatasetValues(``"colleague"``, filter);``(...)` |
| --- |

O Dataset para definição de formulário utiliza a mesma chamada do Dataset de entidades, como no caso do usuário. Entretanto ao invés de passarmos como parâmetro o nome do Dataset passaremos o número da definição de formulário, por exemplo:

[?](#)

| `function displayFields(form,customHTML) {````// Obtendo o usuario via dataset````filter = new java.util.HashMap();````filter.put("RNC_nr_solicitacao",new java.lang.Integer(20));````registrosform = DatasetFactory.getDatasetValues(Number(676),filter);````log.info("Usuário de Abertura: "+ registrosform.get(0).get("RNC_colab_abertura"));``}` |
| --- |

Importante

Para atualizações anteriores ao fluig 1.5.6, utilizar da seguinte maneira:

[?](#)

| `function` `displayFields(form,customHTML) {````// Obtendo o usuario via dataset````filter =``new` `java.util.HashMap();````filter.put(``"RNC_nr_solicitacao"``,``new` `java.lang.Integer(20));````registrosform = getDatasetValues(Number(676),filter);````log.info(``"Usuário de Abertura: "``+ registrosform.get(0).get(``"RNC_colab_abertura"``));``}` |
| --- |

*Download de exemplo de Formulário Combobox e Dataset:* [form.html](https://tdn.totvs.com/download/attachments/75270483/form.html?version=1&modificationDate=1379961445000&api=v2)*.*

**

Importante

Apresentação de dados com componentes com múltiplos valores:

Os campos possíveis de selecionar mais de um valor posteriormente são armazenados em um array. Quando são recuperados esses valores, é feito um tratamento para apresentar os valores separados por colchetes. **Exemplo:**[valor1] [valor2].

### DataService

É um serviço de dados que permite o acesso de aplicações de terceiros através do fluig. Este serviço de dados suporta dois tipos de conexão, são eles: AppServer do Progress® e Web Services.

Os serviços de dados são cadastrados e configurados a partir da função Visualização de Serviços do fluig Studio.

Para mais informações sobre o cadastro dos serviços consulte: [Integração Com Aplicativos Externos](/pages/viewpage.action?pageId=73082260). E para informações de utilização dos serviços nos eventos consulte: [Desenvolvimento de Workflow](/display/fluig/Desenvolvimento+de+Workflow).

# Pai x Filho

---

A técnica Pai X Filho foi modificada e agora a posição da tag *tablename* é feita dentro da tag "table" do código html.

No novo modelo implementado agora o parser do formulário aplicará as mudanças do pai filho da seguinte forma:

**<table tablename="teste">** - A propriedade *tablename* determina que Agora abaixo dessa tabela será implementado um sistema de pai filho dentro da definição de formulário. A tag <table> terá seus parâmetros varridos na busca de outros parâmetros relacionados à técnica que serão explicados mais adiante nesse texto. Será criada uma outra <table> ao redor da tabela principal que conterá um  botão que permite adicionar novos filhos. Isso não ocorrerá apenas em casos em que a propriedade *noaddbutton* também seja informada em conjunto com  a propriedade *tablename*.                                                                                                    

**<TR>** (primeiro abaixo do table) - A primeira tag de <TR> encontrada dentro da tabela é visualizada como uma tag que conterá os labels da tabela pai filho a esta tag será adicionada uma coluna <TD> contendo o ícone e a função de eliminar filhos existentes em tela. Está nova coluna será a primeira coluna a esquerda da tabela.

**<TR>** (Segundo abaixo do table) - A técnica pai filho irá ocultar a linha <TR> original e transforma lá no seu “template mestre” para criação dos filhos daquela tabela. Cada vez que o botão “novo” for acionado todo o conjunto de campos existentes dentro desse segundo <TR> será replicado em tela com os dados iniciais definidos para estes campos.

**</table>**  - Fim do escopo da técnica.

Atenção - Trabalhando com tabelas

Não é recomendada a utilização de *underscore* - "___" - na propriedade *name* de uma coluna (tag *<td>*) em formulário que utilizem Pai x Filho pois não é renderizada no Mobile.

A técnica também suporta novos atributos que podem ser passados eu usados para customizar a técnica pai e filho. São elas:

**addbuttonposition** - Este atributo define a posição do botão “Adicionar” na tela durante a edição do formulário. Ele permite ao desenvolvedor especificar onde o botão será exibido no HTML. As opções disponíveis são:

- **down-right**Botão localizado abaixo da tabela, à direita.
- **down-left**Botão localizado abaixo da tabela, à esquerda
- ***up-right***Botão localizado acima da tabela, à direita.
- ***up-left***Botão localizado acima da tabela, à esquerda.******Se o atributo **addbuttonposition** não for informado, o padrão será ***up-left***.

[?](#)

| `` |
| --- |

**deletebuttonposition** - Este atributo define a posição do botão “Lixeira” na tela durante a edição do formulário. Ele permite ao desenvolvedor determinar onde o botão será exibido no HTML. As opções disponíveis são:

- **right**Botão localizado no final da linha da tabela.
- **left**Botão localizado no início da linha da tabela.******Se o atributo **deletebuttonposition** não for informado, o padrão será ***left***.

[?](#)

| `` |
| --- |

**noaddbutton** - Remove o botão “adicionar” da tela no momento da edição do formulário. Isso permite ao desenvolvedor escolher aonde ele vai colocar a função  que criará os filhos em tela podendo amarrar a chamada da função em um link texto ou uma figura ou outro objeto do html.

[?](#)

| `` |
| --- |

**nodeletebutton** - Remove o botão “lixeira” da tela no momento da edição do registro de formulário. Isso permite ao desenvolvedor impedir a eliminação dos registros ou definir outra forma de executar a função que removerá os filhos da tabela.

[?](#)

| ```` |
| --- |

****

**addbuttonlabel** - Determina que texto será posto no botão de adicionar filhos da técnica. Caso não seja informado o botão virá com o texto padrão (Novo Registro).                                    

[?](#)

| ```` |
| --- |

**addbuttonclass**- Permite definir qual classe css será utilizada pelo botão. Essa classe css deverá estar disponível no documento html do formulário.

[?](#)

| ```` |
| --- |

****

**deleteicon** - Permite determinar qual será a imagem que funcionará como ícone da eliminação de filhos em tela. Essa imagem deverá ser um anexo da definição de formulário e deverá ser informada na classe como uma imagem qualquer utilizada como anexo na definição de formulário.

[?](#)

| `` |
| --- |

****

**customFnDelete** - Permite a customização da função que é chamada ao clicar no botão que elimina um filho da tabela. A função customizada deverá estar disponível no documento html da definição de formulário e, obrigatoriamente, chamar a função padrão.****

[?](#)

| `````function fnCustomDelete(oElement){` ```//Customização````alert ("Eliminando filho!");` ```// Chamada a funcao padrao, NAO RETIRAR````fnWdkRemoveChild(oElement);` ```//Customização````alert ("Filho eliminado!");``}` |
| --- |

É possível usar a combinação de um ou mais atributos na mesma tabela pai filho. Contudo se a propriedade *noaddbutton* for utilizada os valores das propriedades *addbuttonlabel* e *addbuttonclass* serão ignoradas. Não será gerada uma mensagem de erro na publicação ou versionamento dessa definição de formulário, porém no momento da edição do formulário a mesma não irá apresentar o botão padrão que permite cadastrar novos filhos na definição de formulário. A propriedade *deleteicon* não é afetada pela propriedade *noaddbutton*. Exemplo de uso combinado de parâmetros:

[?](#)

| `` |
| --- |

Sobre os campos de uma tabela pai e filho:

não estão disponíveis para serem utilizados como descrição dos registros de formulários na configuração do formulário;

não devem ser colocados no "head" ou "footer" de um HTML pois eles não serão considerados, coloque os campos apenas no "body".

****

Atenção

Para mais informações sobre os eventos de formulários PaixFilho acesse [Eventos Formulários](https://tdn.totvs.com/x/fvklE).

Atenção - Trabalhando com tabelas

O índice de formulário pai e filho é utilizado da seguinte forma ex: indice___1. Em input dinâmicos não é recomendado adicionar valores no atributo name após o indice.

****

 A técnica 2.0 do pai Filho não permite o uso de todos os componentes HTML. É possível utilizar apenas:

- *text*
- *radio button*
- *checkbox*
- *select*
- *select multiple*
- *hidden*
- *textarea*
- *image*
- *button*

**Expanda a macro e veja o exemplo:**

  **Formulário Pai x Filho** Expand source

[expand source](#)[?](#)

| 123456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778798081828384858687888990919293949596979899100101102103104 | ```````````````````````Formulario pai e filho`````` Cadastro````````````````Data:````````````````Solicitação:````````````````Atividade:````````````````Processo:````````````````Versão:````````````````Usuário:````````````````Empresa:````````````````Observações:````````````````Autoriza?```````name``=``"aut"````id``=``"aut"````value``=``"branco"````style``=``"display:none"``>````Sim:```````type``=``"radio"````value``=``"aut_yes"` `checked>````Não:```````type``=``"radio"````value``=``"aut_no"``>````````````````Responsáveis:````````````````````Responsável:````````````Check````````````Observação````````````````````````````````````````````````````````````````````````````````` |
| --- | --- |

[Clique aqui](https://git.fluig.com/projects/SAMPLES/repos/style-guide/browse/style-guide-forms) e baixe um exemplo de formulário Pai e Filho usando o [fluig Style Guide](https://style.fluig.com/).

****

## Radio Button

Para utilizar campos radio button, além da definição padrão do componente html, é necessário que seja utilizado o atributo ‘value’ para os dados serem salvos corretamente.

[?](#)

| `````````````Nome````Idade````Sim:````Não:``````````````````````````````````` |
| --- |

# Skin do fluig Style Guide

---

Os formulários renderizados dentro da plataforma vão respeitar a skin do Style Guide selecionada na configuração de tema da empresa, conforme a FAQ [FORM 011 - Como utilizar a skin flat em formulários?](/pages/viewpage.action?pageId=471943339).


<!-- anchors: PersonalizaçãodeformuláriosNovaversão-Índice, PersonalizaçãodeformuláriosNovaversão-Pré-requisitos, PersonalizaçãodeformuláriosNovaversão-Dataset, highlighter_218722, highlighter_113311, highlighter_118950, highlighter_970311, highlighter_458203, PersonalizaçãodeformuláriosNovaversão-DataService, PersonalizaçãodeformuláriosNovaversão-PaixFilho, highlighter_902528, highlighter_207849, highlighter_350877, highlighter_880937, highlighter_302997, highlighter_62357, highlighter_365903, highlighter_179307, highlighter_509225, highlighter_420481, PersonalizaçãodeformuláriosNovaversão-RadioButton, highlighter_721121, PersonalizaçãodeformuláriosNovaversão-SkindofluigStyleGuide -->
