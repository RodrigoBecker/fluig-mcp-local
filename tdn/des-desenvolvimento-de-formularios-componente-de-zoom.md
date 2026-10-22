---
title: "DES - Desenvolvimento de formulários - componente de zoom"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=196809616"
scraped_at: "2026-03-09T04:46:23.093Z"
depth: 3
anchors: 10
child_links: 56
---

# DES - Desenvolvimento de formulários - componente de zoom

# Índice

# Plataforma

**Produto: **TOTVS Fluig Plataforma

**Versão:**  Anteriores a 1.5.1

# Ocorrência

A partir da atualização 1.6.1 está disponível o novo componente de zoom de datasets visando uma melhor experiência de uso em dispositivos móveis.

Importante

A técnica antiga de zoom, descrita na documentação abaixo, ainda é suportada pela plataforma. Porém, recomendamos fortemente a utilização da técnica atualizada, descrita na documentação de [Desenvolvimento de Formulários](/pages/viewpage.action?pageId=75270483) que está de acordo com os padrões do Style Guide e permite maior fluidez utilizando o componente.

# Documentação 

Este componente de zoom permite a consulta de entidades e outros formulário criados na plataforma para seleção de dados pelo usuário.

O acesso a este componente é realizado a partir de uma chamada Javascript no HTML da definição de formulário.

[?](#)

| `"/webdesk/zoom.jsp?datasetId="+dataset+"&dataFields="+campos+"&resultFields="+resultFields+"$type="+"&title="+titulo` |
| --- |

Onde:

- **title:** é o título para a janela de zoom.
- **datasetId:** é o nome do dataset (Built-in, CardIndex ou Customized).
- **dataFields:** são os nomes dos campos a serem apresentados.
- **resultFields:** são os campos que devem ser retornados para o registro selecionado pelo usuário.
- **likeField:** o nome do campo para filtro de dados (se necessário).
- **likeValue:** o valor a ser usado no filtro de dados (se necessário).

**ATENÇÃO**: Este parâmetro só é válido para **datasets internos**. Datasets customizados **não** permitem a utilização de filtros.

- Para obter o registro selecionado pelo usuário devemos adicionar a seguinte função JavaScript ao formulário do processo:

[?](#)

| `function setSelectedZoomItem(selectedItem) {``}` |
| --- |

Onde *selectItem* é o registro selecionado pelo usuário na tela de zoom.

Importante

A mesma função “setSelectZoomItem” será usada para receber o resultado de todas as chamadas ao zoom. Assim, para diferenciar cada chamada foi criado o parâmetro *type*. Esse parâmetro é retornado em *selectedItem* e pode ser usado para diferenciar as chamadas ao zoom.

- Para acessar um campo do registro selecionado:

[?](#)

| `selectedItem["fieldName"]` |
| --- |

Onde *fieldName* é o nome do campo de retorno que foi definido na chamada de zoom. O componente de Zoom da plataforma foi desenvolvido para permitir que o recurso de zoom fosse utilizado em definições de formulários.

Para que seja possível visualizar e resgatar informações dos campos *“metadatas”* do formulário, é necessário utilizar a seguinte nomenclatura:

| metadata_id | Retorna o código do registro de formulário |
| --- | --- |
| medatata_version | Retorna a versão do registro de formulário |
| metadata_parent_id | Retorna o código da pasta Pai |
| metadata_card_index_id | Retorna o código do formulário |
| metadata_card_index_version | Retorna a versão do formulário |
| metadata_active | Versão ativa |

Abaixo um exemplo de código utilizado para visualização e resgate destes valores:

[?](#)

| `function zoomFormulario(titulo, dataset, campos, resultFields, type){````window.open("/webdesk/zoom.jsp?datasetId="+dataset+"&dataFields="+campos+````"&resultFields="+resultFields+"&type="+type+"&title="+titulo, "zoom", "status , scrollbars=no ,width=600, height=350 , top=0 , left=0");``}` |
| --- |

A utilização da PK nos filtros ao utilizar dataset de Grupo, Papel ou Colaborador é opcional, porém o mesmo valor utilizado na URL do zoom deve ser utilizado para a obtenção do valor selecionado, conforme exemplo abaixo.

[?](#)

| `function setSelectedZoomItem(selectedItem) {````alert("Grupo: " + selectedItem['groupId'] + " Colaborador: "+ selectedItem['colleagueGroupPK.colleagueId']);``}``` ````  |
| --- |

Para utilizar filtros a chamada, é similar ao de *dataFields*.

[?](#)

| `window.open("/webdesk/zoom.jsp?datasetId=preCad&dataFields=codigo, Código, descricao, Descrição&resultFields=descricao&type=precad&filterValues=metadata_active, false","zoom" , "status, scrollbars=no, width=600, height=350, top=0, left=0");` |
| --- |

Neste exemplo, o zoom irá retornar somente os registros de formulários inativos.


<!-- anchors: DESDesenvolvimentodeformulárioscomponentedezoom-Índice, DESDesenvolvimentodeformulárioscomponentedezoom-Plataforma, DESDesenvolvimentodeformulárioscomponentedezoom-Ocorrência, DESDesenvolvimentodeformulárioscomponentedezoom-Documentação, highlighter_102326, highlighter_922695, highlighter_366801, highlighter_300086, highlighter_907134, highlighter_476656 -->
