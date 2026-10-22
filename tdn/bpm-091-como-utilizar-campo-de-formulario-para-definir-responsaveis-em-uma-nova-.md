---
title: "BPM 091 - Como utilizar campo de formulário para definir responsáveis em uma nova solicitação?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=271677851"
scraped_at: "2026-03-09T03:57:37.630Z"
depth: 2
anchors: 11
child_links: 132
---

# BPM 091 - Como utilizar campo de formulário para definir responsáveis em uma nova solicitação?

# Índice

# Plataforma

**Produto:  **fluig

# Ocorrência

Em alguns casos, se tem a necessidade de definir os responsáveis de uma atividade de forma personalizada, considerando os dados do formulário. A partir da Atualização 1.5.12, disponibilizamos o uso da hAPI no [Mecanismo de atribuição personalizado](https://tdn.totvs.com/pages/viewpage.action?pageId=142804157), entretando, é indicada apenas para solicitações já iniciadas, uma vez que a hAPI depende dos dados do formulário gravado na solicitação.

# Solução

Quando é necessário considerar os dados do formulário no momento que está iniciando uma solicitação, aconselhamos customizar já no script do formulário, como é exemplificado abaixo.

Definindo os responsáveis conforme dados do formulário

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)

 - Como exemplo, estaremos utilizando os Grupos "group1" e "group2" que devem ser alterados conforme grupo utilizado na plataforma.

 - Criando o html, onde o usuário poderá escolher entre pegar os usuários de um grupo, ou, simplesmente enviar para o Pool de um Grupo.

  **formulario.html**

[?](#)

| 1234567891011121314151617181920212223242526272829303132333435363738394041424344454647 | `````````````````````````````````````````````````````````````Selecione o Grupo```````````````````````````` Grupo 1```````````````````` Grupo 2```````````````````````````` Enviar para Pool````````````````````````````````````` |
| --- | --- |

  **formulario.js**

[?](#)

| 12345678910111213141516171819202122232425262728293031 | `$(``function``() {````changeGroup(``false``);````FLUIGC.switcher.init(``'#isPool'``);````FLUIGC.switcher.onChange(``'#isPool'``,``function``(event, state) {````changeGroup(state);````});````$(``".radio"``).change(``function``() {````var` `isPool = FLUIGC.switcher.getState(``'#isPool'``);````changeGroup(isPool);````});````function` `changeGroup(isPool) {````var` `group = $(``'input[name=list_group]:checked'``).val();````if` `(isPool) {````$(``"#group_selected"``).val(``"Pool:Group:"` `+ group);````}``else` `{````setColleaguesByGroup(group);````}````}````function` `setColleaguesByGroup(group) {````var` `filter =``new` `Object();````var` `colleagueIds =``""``;````filter[``"colleagueGroupPK.groupId"``] = group;````var` `colleagues = DatasetFactory.getDatasetValues(``"colleagueGroup"``, filter);````for` `(colleague``in` `colleagues) {````if` `(colleagueIds) colleagueIds +=``","``;``` ```colleagueIds += colleagues[colleague][``"colleagueGroupPK.colleagueId"``];````}````$(``"#group_selected"``).val(colleagueIds);````}``});` |
| --- | --- |

  - Após publicar o arquivo HTML e JS como formulário fluig, o resultado será esse.![](/download/attachments/271677851/Selection_021.png?version=1&modificationDate=1487697098000&api=v2)**Figura 1 - Visualizando o formulário.**

 - Criar e vincular o Processo com o Formulário, publicado anteriormente.

 - Definir a atividade para utilizar o Mecanismo "Atribuição por Campo de Formulário" e selecionar o campo "group_selected", campo *hidden* presente no HTML, que terá o valor dos responsáveis pela atrividade.

****

**Figura 2 - Configurando Mecanismo de Atribuição.**

****

 - Feito os passos, a solicitação estará preparada para difinir os responsáveis conforme dados selecionados no formulário, neste exemplo, temos dois casos

   Selecionar o grupo e deixar o botão "Enviar para Pool" desligado: Será consultado o Dataset "colleagueGroup" para retornar os colaboradores do grupo;

   - Selecionar o grupo e deixar o botão "Enviar para Pool" ligado: Não será consultado nenhum Dataset, o campo hidden ficará com o valor "Pool:Group:group_code", com isso, a atividade estará para em Pool, esperando que algum colaborador do grupo assuma a atividade.

![](/download/attachments/271677851/Selection_023.png?version=1&modificationDate=1487697098000&api=v2)

**Figura 2 - Configurando Mecanismo de Atribuição.**


<!-- anchors: BPM091Comoutilizarcampodeformulárioparadefinirresponsáveisemumanovasolicitação?-Índice, BPM091Comoutilizarcampodeformulárioparadefinirresponsáveisemumanovasolicitação?-Plataforma, BPM091Comoutilizarcampodeformulárioparadefinirresponsáveisemumanovasolicitação?-Ocorrência, BPM091Comoutilizarcampodeformulárioparadefinirresponsáveisemumanovasolicitação?-Solução, samples, samples-1, highlighter_217431, highlighter_30340, samples-2, samples-3, samples-4 -->
