---
title: "Eventos de Formulário - Exemplo de novo modelo"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=849548258"
scraped_at: "2026-03-09T03:06:24.928Z"
depth: 1
anchors: 59
child_links: 75
---

# Eventos de Formulário - Exemplo de novo modelo

## Índice

# Objetivo

---

O objetivo deste guia é descrever os eventos de formulários avançados no Fluig, abordando criar validações e manipulações do seu formulário.

# Pré-requisitos

---

Antes de iniciar, é importante que leia a documentação sobre [Desenvolvimento de Formulários](/pages/viewpage.action?pageId=75270483) e, durante a leitura você vai sentir a necessidade de entender um pouco mais sobre o parâmetro *form* ([FormController](/pages/viewpage.action?pageId=662892312))

# Como criar eventos de formulário

---

Após a criação de uma definição de formulário é possível realizar a criação de scripts para customização. O eventos para formulários são criados conforme os passos a seguir:

- [Passo1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)
- [Passo 6](#)
- [Passo 7](#)

 - Para a criação de um script de formulário no Fluig, na visão **Explorador de pacotes (Package Explorer)** deve-se acessar a pasta **forms** do **Projeto Fluig**, clicar com o botão direito e no menu acessar **Novo (New) > Outras (Other)***.*![](/download/attachments/849548258/formulario%20fluig.png?version=1&modificationDate=1718287736447&api=v2)

**Figura 5 - Criação de script evento da definição de formulário.**

 - Abra a pasta Fluig e selecione a opção **Script Fluig** e clique no botão **Avançar (Next >)**.

![](/download/attachments/849548258/scrpt%20fluig.png?version=1&modificationDate=1718287736797&api=v2)

**Figura 6 - Criação de script evento da definição de formulário.**

****

 - Selecione o tipo de script e clique em **Avançar (Next >)**.

![](/download/attachments/849548258/novo%20script.png?version=1&modificationDate=1718287736693&api=v2)

 - Nesta tela é necessário informar os campos pertinentes ao evento que deseja adicionar e clicar no botão **Concluir**.

Após a criação de uma definição de formulário é possível realizar a criação de scripts para customização. O eventos para formulários são criados conforme passos a seguir:

 - Para a criação de um script de formulário no Fluig, na visão **Explorador de pacotes (Package Explorer)** deve-se acessar a pasta**forms** do **Projeto Fluig**, clicar com o botão direito e no menu acessar **Novo (New) > Outras (Other)**.

 - Abra a pasta Fluig e selecione a opção Script Fluig e clique no botão Avançar (Next > ).

 - Selecione o tipo e clique em Avançar (Next >).

![](/download/attachments/849548258/image2013-9-23%2010%3A41%3A52.png?version=1&modificationDate=1718287737113&api=v2)

**Figura 7 - Criação de script evento da definição de formulário.**

****

 - No exemplo selecionamos o evento *validateForm*, e o relacionamos a definição de formulário *form_exemplo_fluig*.

![](/download/attachments/849548258/image2013-9-23%2010%3A43%3A23.png?version=1&modificationDate=1718287737010&api=v2)

**Figura 8 - Criação de script evento da definição de formulário.**

 - Ao concluir a estrutura principal do método estará disponível no editor.

![](/download/attachments/849548258/image2013-9-23%2010%3A44%3A38.png?version=1&modificationDate=1718287736900&api=v2)

**Figura 9 - Criação de script evento da definição de formulário.**

 - Configure seu script. Para entender mais sobre os eventos e algumas dicas continue lendo essa documentação

![](/download/attachments/849548258/image2013-9-23%2010%3A45%3A56.png?version=1&modificationDate=1718287737213&api=v2)

**Figura 10 - Criação de script evento da definição de formulário.**

# LOGs

---

Uma das funções mais importantes para entender o que está acontecendo no código e rastreamento futuro é o log. Tanto em eventos de formulário, eventos de processo, datasets, o fluig permite fazer log em quatro níveis:

## log.info

Usado para apresentar alguma mensagem de rastreamento do código ou dos campos

[?](#)

| `log.info(“Testando o log info”);` |
| --- |

[?](#)

| `log.info(“O campo código contém o valor: ” + form.getValue(``"codigo"``));` |
| --- |

## log.warn

---

Usado para indicar algum ponto de atenção ou problema eminente no código

[?](#)

| `if` `(form.getValue(``"codigo"``) ==``""``) {````log.warn(“O campo código está em branco e pode apresentar problemas com as integrações”);``}` |
| --- |

## log.debug

---

Os logs, se não usados com moderação, podem mais atrapalhar do que ajudar. Por isso, caso necessário, algumas informações podem ser utilizadas como debug, que são ativas somente quando o usuário realmente ver elas

[?](#)

| `log.debug(``"verificando o conteúdo do campo código"``)``if` `(form.getValue(``"codigo"``) ==``""``) {````log.debug(``"o campo código está em branco"``);``}``else` `{````log.debug(``"o campo código está preenchido: "` `+ form.getValue(``"codigo"``));``}` |
| --- |

## log.error

---

Usado para imprimir um log de erro

[?](#)

| `if` `(form.getValue(``"codigo"``) ==``""``) {````log.error(``"O campo código não foi preenchido"``);````throw` `"Preencha o campo código"``;``}` |
| --- |

## log.dir

---

Este log não é um tipo diferente, na verdade é um log.info turbinado. Serve para fazer o log de objetos mais complexos que simples strings

[?](#)

| `var` `objeto = {``'codigo'``: form.getValue(``"codigo"``),``'nome'``: form.getValue(``"nome"``)};``log.dir(objeto);` |
| --- |

# Eventos

---

Os eventos de formulários são um conjunto de scripts carregados pela API de Formulários, os quais são desenvolvidos utilizando Javascript e são chamados durante a execução de ação em formulários ou em momentos específicos de interação em formulários.

## beforeProcessing

---

Esse evento é o primeiro a ser disparado. Ocorre antes de qualquer outro evento da definição de formulário. O evento recebe como parâmetro um objeto do tipo [FormController](/pages/viewpage.action?pageId=662892312).

Neste contexto, o FormControler deve ser usado apenas para consulta de dados, alterações nos dados não serão persistidas.

[?](#)

| `function` `beforeProcessing(form){``}` |
| --- |

No contexto deste evento a variável *form* pode ser usada somente para consulta aos campos da definição de formulário, seus valores e estado de apresentação.

## displayFields

---

Esse evento é disparado no momento em que os objetos do formulário são apresentados. O evento recebe como parâmetro um objeto do tipo [FormController](/pages/viewpage.action?pageId=662892312) e um parâmetro *customHTML*que serve para personalizar e inserir dados diretamente do servidor no formulário. 

Esse evento pode ser utilizado para alterar os valores a serem apresentados no campo do formulário e é o único que permite a alteração antes da renderização. Para isto basta usar o seguinte procedimento:

**Ao modificar um registro, preenche o campo com o valor 1**

[?](#)

| 12345 | `function` `displayFields(form, customHTML) {````if` `( form.getFormMode() == “MOD” ) {````form.setValue(``'RNC_colab_abertura'``,``new` `java.lang.Integer(1));````}``}` |
| --- | --- |

Você pode também ocultar campos pelo nome ou pelo id:

[?](#)

| `function` `displayFields(form, customHTML) {````form.setVisible(``"campoA"``,``false``);````form.setVisibleById(``"linha___1"``,``false``);``}` |
| --- |

Outras funções interessantes que podem ser usados neste evento são:

- Para visualizar o formulário no formato original com os campos desabilitados, deve-se utilizar o método *setShowDisabledFields*.

- Para habilitar ou desabilitar o botão de excluir nas linhas do formulário filho, que por padrão é habilitado, deve-se utilizar o método *setHideDeleteButton*.

- Para ocultar o os botões** ***Imprimir*** **e *Imprimir em nova Janela*,** **deve-se utilizar o método *setHidePrintLink*.

| Sem customizações | Com customização |
| --- | --- |
|  | ?`function` `displayFields(form, customHTML) {````form.setShowDisabledFields(``true``);````form.setHidePrintLink(``true``);``}` |

![](http://tdn.totvs.com/download/attachments/75270483/comdelete.png?version=1&modificationDate=1393532591000&api=v2)

![](/download/attachments/849548258/semdelete.png?version=1&modificationDate=1718287736587&api=v2)

[?](#)

| `function` `displayFields(form, customHTML) {````form.setHideDeleteButton(``false``);``}` |
| --- |

Formulário funcional com exemplos de utilização de setVisible*, **setVisibleById**, setHideDeleteButton e setHidePrintLink**:*

  **Formulário - Clique para expandir** Expand source

[expand source](#)[?](#)

| 12345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152535455565758596061626364656667686970717273747576777879808182838485 | ```````````````````````````Ao Salvar  escolha o que ocultar ao salvar o formulário````````````````````Ocultar toda tabela````````````````````````Ocultar campo A````````````````````````Ocultar campo N da primeira linha````````````````````````Ocultar campo M da segunda linha````````````````````````Ocultar linha 1````````````````````````Ocultar botão de excluir````````````````````````Ocultar botão de imprimir````````````````````````Ocultar Lorem Ipsum````````````````````````Tabela de registros````````````````N````M````````````````````````````````````````````````Lorem Ipsum: Proin eget purus non mauris vehicula aliquam vitae sed est````````````` |
| --- | --- |

  **displayFields.js - Clique para expandir** Expand source

[expand source](#)[?](#)

| 12345678910111213141516171819202122232425262728293031323334 | ```function` `displayFields(form,customHTML){````var` `ocultarTodaTabela = form.getValue(``"ocultarTabela"``) ==``"on"``;``// Ocultar toda tabela````var` `ocultarCampoA = form.getValue(``"ocultarCampoA"``) ==``"on"``;``// Ocultar campo A````var` `ocultarCampoN1 = form.getValue(``"ocultarCampoN1"``) ==``"on"``;``// Ocultar campo N da primeira linha````var` `ocultarCampoM2 = form.getValue(``"ocultarCampoM2"``) ==``"on"``;``// Ocultar campo M da segunda linha````var` `ocultarLinha1 = form.getValue(``"ocultarLinha1"``) ==``"on"``;``// Ocultar linha 1````var` `ocultarExclusao = form.getValue(``"ocultarExclusao"``) ==``"on"``;``// Ocultar botão de excluir````var` `ocultarImpressao = form.getValue(``"ocultarImpressao"``) ==``"on"``;``// Ocultar botão de imprimir````var` `ocultarLoremIpsum = form.getValue(``"ocultarLoremIpsum"``) ==``"on"``;``// Ocultar a div Lorem Ipsum````if` `( ocultarTodaTabela ) {````form.setVisibleById(``"minhaTabela"``,``false``);``// bloqueia o campo, tabela ou div cujo id seja "minhaTabela"````}````if` `( ocultarCampoA ) {````form.setVisible(``"campoA"``,``false``);``// bloqueia o campo com name "campoA"````}````if` `( ocultarCampoN1 ) {````form.setVisible(``"campoN___1"``,``false``);``// bloqueia o campo com name "campoN___1"````}````if` `( ocultarCampoM2 ) {````form.setVisible(``"campoM___2"``,``false``);``// bloqueia o campo com name "campoM___2"````}````if` `( ocultarLinha1 ) {````form.setVisibleById(``"linha___1"``,``false``);``// bloqueia o campo, tabela ou div cujo id seja "linha___1"````}````if` `( ocultarLoremIpsum ) {````form.setVisibleById(``"loremIpsum"``,``false``);``// bloqueia o campo, tabela ou div cujo id seja "loremIpsum"````}````if` `( ocultarExclusao ) {````form.setHideDeleteButton(``true``);``// bloqueia o botão de exclusão de linha````}````if` `( ocultarImpressao ) {````form.setHidePrintLink(``true``);``// bloqueia botão de imprimir````}``}` |
| --- | --- |

Conforme explicado, o *customHTML* permite personalizar o formulário diretamente pelo método displayFields. Este exemplo, adaptado dos nos [Exemplos Avançados](/pages/viewpage.action?pageId=603097079), mostra como usar o displayFields para, no formulário, ter acesso ao modo de visualização, código do solicitante e número da atividade. Além de preencher alguns campos da solicitação com a data atual e o nome do solicitante:

[?](#)

| `function` `displayFields(form,customHTML){````// getValue("WKNumState"); -> Número da atividade atual de acordo com o diagrama````var` `numeroAtividadeAtual = getValue(``"WKNumState"``);` ```/*````* form.getFormMode();````* ADD - Momento inicial do formulário antes de iniciar e/ou salvar o processo````* MOD - Momento a qual os campos estão editavéis para o usuário modificar após iniciar e/ou salvar o processo````* VIEW - Modo de visualização do formulário````*/````var` `modoDeVisualizacaoDoFormulario = form.getFormMode();` ```// getValue("WKUser"); ->  Retorno o código do usuário logado````var` `codigoSolicitante = getValue(``"WKUser"``);` ```if` `(modoDeVisualizacaoDoFormulario !=``"VIEW"``) {````if` `(numeroAtividadeAtual == Atividades.ZERO || numeroAtividadeAtual == Atividades.INICIO) {``//Antes do processo ser iniciado ou salvo o número da primera ativade é 0````form.setValue(``"codigoSolicitante"``, codigoSolicitante);````form.setValue(``"nomeSolicitante"``, buscaNomeDeUsuarioPeloIdentificador(codigoSolicitante));````form.setValue(``"dataSolicitacao"``, retornaDataAtual());````}````}` ```// Exemplo de injeção de javascript pelo evento de formulário displayFields````customHTML.append(``""``);````customHTML.append(``"var modoDeVisualizacaoDoFormulario = '"` `+ modoDeVisualizacaoDoFormulario +``"';"``);````customHTML.append(``"var numeroAtividadeAtual = "` `+ numeroAtividadeAtual +``";"``);````customHTML.append(``"var codigoSolicitante = '"` `+ codigoSolicitante +``"';"``);````customHTML.append(``""``);``}` `/**``* Função para retornar a data atual``* @returns data atual``*/``function` `retornaDataAtual() {````return` `(``new` `java.text.SimpleDateFormat(``'dd/MM/yyyy'``)).format(``new` `Date());``}` `/**``*``* @param {*} codigoSolicitante``* @returns retorno o nome do usuário``*/``function` `buscaNomeDeUsuarioPeloIdentificador(codigoSolicitante) {````var` `constraint = DatasetFactory.createConstraint(``"colleaguePK.colleagueId"``, codigoSolicitante , codigoSolicitante, ConstraintType.MUST);````var` `dataset = DatasetFactory.getDataset(``"colleague"``,``null``, [constraint],``null``);` ```return` `dataset.getValue(0,``"colleagueName"``);``}` |
| --- |

Para que os dados sejam carregados e apresentados em tela, principalmente em dispositivos *mobile*, é necessário chamar as funções que irão carregá-los dentro de uma estrutura de *read*.

A invocação dos métodos que irão popular o formulário deve estar contida dentro de uma chamada $(function(), garantindo assim o carregamento dos arquivos exigidos pelo formulário antes das funções.

Por exemplo, deseja-se carregar dados de produtos em um formulário. Para que isto ocorra, foi criada uma função *loadProdutos()* que irá preencher um *grid* inserido no formulário HTML. Neste caso a chamada desta função dentro do *displayFields* ficaria:

[?](#)

| `customHTML.append(``''``);``customHTML.append(``'$(function(){'``);``customHTML.append(``"loadProdutos();"``);``customHTML.append(``'});'``);``customHTML.append(``''``);` |
| --- |

Mas, exceto em situações onde há mais coisas no *customHTML* que justifiquem isso, o mais recomendado é que você faça isso dentro dos próprios scripts javascript do formulário

## enableFields

---

Esse evento é disparado no momento em que os objetos do formulário são habilitados. O evento recebe como parâmetro um objeto do tipo [FormController](/pages/viewpage.action?pageId=662892312). 

**Exemplo de como tornar campo desativado conforme o modo do formulário**

[?](#)

| 123456 | ```function` `enableFields(form) {````if` `( form.getFormMode() !=``'ADD'` `){````form.setEnabled(``"rnc_area"``,``false``);````form.setEnabled(``"rnc_tipo_ocorrencia"``,``false``);````}``}` |
| --- | --- |

Outra forma de desabilitar os campos é utilizando comandos JavaScript implementados diretamente em funções do formulário. Porém, neste caso, não é permitido utilizar a propriedade *disabled*, pois os campos não serão gravados ao salvar o registro de formulário. Para esta situação, deve-se utilizar a propriedade *readonly* conforme exemplo abaixo:

[?](#)

| `document.forms[``'nomeForm'``].nomeCampo.setAttribute(``'readonly'``,``true``);` |
| --- |

Fique atento!

Mesmo utilizando a função **setEnable**, ainda existe a possibilidade de algum usuário conseguir visualizar informações do campo formulário oculto, utilizando de recursos como a ferramenta de inspeção de código dos navegadores.

Atenção

Ao utilizar o evento *enableFields* para proteger os campos, é adicionado o caractere underline (_) nas propriedade **name** e **id**. Com isso as manipulações via JavaScript puro ou pela biblioteca *jQuery* não terão efeitos, devido a alteração destas propriedades:

Exemplo enableFields.js:

[?](#)

| `function enableFields(form) {````var atividade = parseInt(getValue('WKNumState'));``` ```if(atividade == 0 || atividade == 4){````form.setEnabled('loginsolicitante', false);````}``` ```if(atividade == 5){````form.setEnabled('nomesolicitante', false);````}``}` |
| --- |

HTML:

[?](#)

| `````````````````Login````````````````````````Solicitante``````````````````` |
| --- |

Resultado no navegador/console, onde o campo ***loginsolicitante** agora é _**loginsolicitante*** e o campo **nomesolicitante** permanece igual, pois a lógica implementada indica que será bloqueado na próxima movimentação:

![](/download/attachments/849548258/001.png?version=1&modificationDate=1718287737317&api=v2)

****

### Protegendo campos desabilitados

Ao proteger um campo desabilitado, ele não terá o seu valor alterado no registro de formulário. Para isso, informe o valor true para o parâmetro *protect* do método *setEnabled* conforme o exemplo abaixo:

[?](#)

| ```function` `enableFields(form) {````if` `( form.getFormMode() !=``'ADD'` `){````form.setEnabled(``"rnc_cod_ocorrencia"``,``false``,``true``);````}``}` |
| --- |

Também é possível utilizar o método *setEnhancedSecurityHiddenInputs*, que faz com que todos os campos desabilitados pelo método *setEnabled* fiquem protegidos:

[?](#)

| `function` `enableFields(form) {````if` `( form.getFormMode() !=``'ADD'` `){````form.setEnhancedSecurityHiddenInputs(``true``);````form.setEnabled(``"rnc_cod_ocorrencia"``,``false``);````}``}` |
| --- |

Atenção!

O método *setEnhancedSecurityHiddenInputs* só protegerá campos desabilitados após a sua execução no evento e quando o formulário estiver no contexto de uma execução de processo.

## inputFields

---

Esse evento é disparado no momento em que os dados do formulário são passados para a BO responsável por formulário do fluig. O evento recebe como parâmetro uma referência ao formulário da definição de formulário. 

**Exemplo:**

[?](#)

| `function` `inputFields(form){``}` |
| --- |

Atenção!

O evento *inputFields*não foi criado para ser utilizado na "Movimentação em Bloco", seu foco é o tratamento de campos que vem do navegador.

Esse evento é disparado no momento em que os dados do formulário são passados para a BO responsável por formulário do fluig. O evento recebe como parâmetro um objeto do tipo [FormController](/pages/viewpage.action?pageId=662892312). 

O getValue não é utilizado em evento de formulário inputFields.

Este evento pode ser usado para que as datas persistidas por formulários customizados sejam salvas corretamente. Hoje no sistema as datas salvas através de formulários pelo navegador Chrome tem o padrão americano (yyyy-mm-dd), enquanto as datas nos demais navegadores tem o padrão brasileiro (dd/mm/yyyy). Para empresas que utilizam múltiplos navegadores e querem que os dados de data estejam padronizados, recomendamos a utilização do evento *inputFields* com o seguinte trecho de código.

**Código para Datas**

[?](#)

| `function` `inputFields(form) {````var` `regEx = /^\d{4}-\d{2}-\d{2}$/;` ```if` `(form.getValue(``"dt_solicitacao"``).match(regEx)) {````var` `split = form.getValue(``"dt_solicitacao"``).split(``'-'``);````form.setValue(``"dt_solicitacao"``, split[2] +``'-'` `+ split[1] +``'-'` `+ split[0]);````}``}` |
| --- |

## validateForm

---

Esse evento é disparado antes da gravação dos dados do formulário. O evento recebe como parâmetro um objeto do tipo [FormController](/pages/viewpage.action?pageId=662892312). 

Ele é utilizado para fazer validações nos campos.

**Exemplo da validação do campo de formulário**

[?](#)

| 12345 | `function` `validateForm(form) {````if` `(form.getValue(``'RNC_colab_abertura'``) ==``null``){````throw` `"O colaborador de abertura não foi informado"``;````}``}` |
| --- | --- |

**Exemplo da validação do campo de formulário com mensagem com quebra de linha**

[?](#)

| 12345 | `function` `validateForm(form) {````if` `(form.getValue(``'RNC_colab_abertura'``) ==``null``){````throw` `"O colaborador de abertura não foi informado\nFavor preencher o campo e tentar novamente"``;````}``}` |
| --- | --- |

## afterSaveNew

---

Esse evento é disparado após a criação de um formulário. O evento recebe como parâmetro um objeto do tipo [FormController](/pages/viewpage.action?pageId=662892312). 

Este evento pode ser feito para criar algum tipo de log ou disparar algum evento:

**Exemplo de uso para imprimir log**

[?](#)

| 123 | `function` `afterSaveNew(form) {````log.info(``"Colaborador de abertura: "` `+ form.getValue(``"RNC_colab_abertura"``));``}` |
| --- | --- |

## afterProcessing

---

Este é último evento disparado no formulário. O evento recebe como parâmetro um objeto do tipo [FormController](/pages/viewpage.action?pageId=662892312). 

Neste contexto, o FormControler deve ser usado apenas para consulta de dados, alterações nos dados não serão persistidas. Assim como o *afterSaveNew* pode ser usado para log ou disparo de algum tipo de evento.

[?](#)

| `function` `afterProcessing(form){``}` |
| --- |

## beforeMovementOptions

---

Diferentemente dos outros eventos que precisam de um script próprio e são executados no servidor, este evento acontece ao clicar em "enviar" no navegador antes de abrir a tela de movimentação. Por isso, esse código deve ser implementado em um arquivo javascript vinculado ao formulário html. Ele recebe o parâmetro da atividade atual e é muito útil para algumas validações de campos antes mesmo de ser enviado para o servidor.

**Exemplo de implementação em um arquivo.js**

[?](#)

| 123456 | `var` `beforeMovementOptions =``function``(numState) {````if` `(document.form.codigo.value ==``''``) {````throw` `(``"Erro: O código não foi preenchido"``);````}````return` `true``;``}` |
| --- | --- |

Fique atento!

Este método só é executado caso haja a abertura da tela de movimentação, o que leva em consideração se há mais de uma atividade destino ou o mecanismo de atribuição da próxima tarefa. E também não é considerada em movimentações via api, ou diretamente no formulário pela navegação de documento. Utilize o validateForm em conjunto com esse método para garantir a integridade das validações

## beforeSendValidate

---

Assim como beforeMovementOptions, este evento acontece ao clicar em "enviar" no navegador para executar a movimentação em si. Ou seja, depois do *beforeMovementOptions* e independente da tela de seleção de atividade/usuário destino.

Esse código deve ser implementado em um arquivo javascript vinculado ao formulário html. Ele recebe o parâmetro da atividade atual e da atividade destino (ou seja, pra qual atividade está sendo enviado essa solicitação) e é muito útil para algumas validações de campos antes mesmo de ser enviado para o servidor.

Ocorre antes da solicitação ser movimentada, após já ter sido selecionada a atividade destino o usuário e demais informações necessárias à solicitação.

**Exemplo de implementação em um arquivo.js**

[?](#)

| 123456 | `var` `beforeSendValidate =``function``(numState, nextState) {````if` `(numState == 1 && nextState == 2 && document.form.codigo.value ==``''``) {````throw` `(``"Erro: Para movimentar para a atividade 2, o código deve ser preenchido"``);````}````return` `true``;``}` |
| --- | --- |

## setEnable

---

Este evento está depreciado e não é mais utilizado.


<!-- anchors: EventosdeFormulárioExemplodenovomodelo-Índice, EventosdeFormulárioExemplodenovomodelo-Objetivo, EventosdeFormulárioExemplodenovomodelo-Pré-requisitos, EventosdeFormulárioExemplodenovomodelo-Comocriareventosdeformulário, samples, samples-1, samples-2, samples-3, samples-4, samples-5, samples-6, samples-7, EventosdeFormulárioExemplodenovomodelo-LOGs, EventosdeFormulárioExemplodenovomodelo-log.info, highlighter_878072, highlighter_614567, EventosdeFormulárioExemplodenovomodelo-log.warn, highlighter_407329, EventosdeFormulárioExemplodenovomodelo-log.debug, highlighter_231129, EventosdeFormulárioExemplodenovomodelo-log.error, highlighter_37945, EventosdeFormulárioExemplodenovomodelo-log.dir, highlighter_31996, EventosdeFormulárioExemplodenovomodelo-Eventos, EventosdeFormulárioExemplodenovomodelo-beforeProcessing, highlighter_651676, EventosdeFormulárioExemplodenovomodelo-displayFields, highlighter_751171, highlighter_442456, highlighter_394716, highlighter_283832, highlighter_776844, highlighter_404623, highlighter_810205, highlighter_691818, EventosdeFormulárioExemplodenovomodelo-enableFields, highlighter_191423, highlighter_593331, highlighter_285240, highlighter_833616, EventosdeFormulárioExemplodenovomodelo-Protegendocamposdesabilitados, highlighter_268037, highlighter_618460, EventosdeFormulárioExemplodenovomodelo-inputFields, highlighter_173996, highlighter_907463, EventosdeFormulárioExemplodenovomodelo-validateForm, highlighter_710496, highlighter_936926, EventosdeFormulárioExemplodenovomodelo-afterSaveNew, highlighter_123899, EventosdeFormulárioExemplodenovomodelo-afterProcessing, highlighter_880262, EventosdeFormulárioExemplodenovomodelo-beforeMovementOptions, highlighter_679049, EventosdeFormulárioExemplodenovomodelo-beforeSendValidate, highlighter_543040, EventosdeFormulárioExemplodenovomodelo-setEnable -->
