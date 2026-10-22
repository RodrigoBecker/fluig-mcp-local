---
title: "Identity | Grupos"
url: "https://tdn.totvs.com/display/public/fluig/Identity+%7C+Grupos?draft=true#Identity|Grupos-Removergrupo"
scraped_at: "2026-03-09T05:23:14.280Z"
depth: 4
anchors: 15
child_links: 39
---

# Identity | Grupos

# Falando de grupos...

---

Os grupos do TOTVS Identity são úteis para vincular aplicativos em lote para os usuários da empresa, e também são usados na configuração do recurso de [autenticação multifator](/display/fluig/Identity+%7C+Multi-Factor+Authentication).

O grupo *EVERYONE* está disponível em todas as empresas do Identity e inclui todos os usuários ativos. Não é possível remover os usuários deste grupo e ele não pode ser excluído e nem renomeado. Um aplicativo atribuído pelo administrador do contexto ao grupo *EVERYONE* é adicionado ao [Launchpad](https://tdn.totvs.com/x/8ppUE) de todos os usuários.

Os [grupos importados do Active Directory](/display/fluig/Identity+%7C+Novo+Active+Directory) também são listados e apresentam informações adicionais abaixo do nome do grupo. São informados o nome original do grupo no Active Directory e a partir de qual domínio o grupo em questão foi importado. Os usuários incluídos via Identity nos grupos importados do Active Directory não são sincronizados com o grupo original no AD. Contudo, se a inclusão for realizada via Active Directory, o usuário é adicionado automaticamente ao grupo no Identity após ser importado e aceito pelo administrador.

Todos os eventos de criação, alteração, exclusão ou consulta de grupos são registrados no [Relatório de Auditoria](/display/fluig/Identity+%7C+Auditoria) do Identity.

![](/download/attachments/330138408/2025-Grupos.png?version=1&modificationDate=1737030802660&api=v2)

## Acessar grupos

---

**01.** Acione o menu **Grupos**.

É apresentada uma lista com todos os grupos cadastrados no contexto da empresa no TOTVS Identity, tanto os importados do Active Directory quanto criados manualmente. Ao lado do nome de cada grupo é exibida a quantidade de aplicativos associados.

## Buscar grupos

---

****

        Your browser does not support the HTML5 video element

**01.** Acione o menu **Grupos**.

**02**. No campo Buscar, insira o nome do grupo que deseja buscar.

É possível buscar apenas por grupos importados do Active Directory, para isso modifique o campo **Todos** e busque pelo AD desejado.

## Visualizar grupo

---

****

**01.** Acione o menu **Grupos**.

**02**. Localize o grupo que deseja visualizar.

**03**. Clique sobre o botão **Visualizar** ![](/download/attachments/330138408/flaticon-view.png?version=1&modificationDate=1730320860997&api=v2).

Com essa ação, é aberta a tela de Dados do grupo, onde é possível visualizar os usuários e aplicativos associados e o nome do Active Directory referente ao qual o grupo foi importado. Outras ações permitidas nessa tela são: associar ou remover usuários, associar ou remover aplicativos e editar ou remover o grupo.

Atenção:

Não é possível editar, excluir ou remover usuários do grupo *EVERYONE*.

## Criar novo grupo

---

**01.** Acione o menu **Grupos**.

**02**. Clique no botão **Criar novo grupo**.

**03.** Preencha as informações necessárias na aba **Dados do grupo**.

**Nome do grupo**
Nome para identificar o grupo.

**Descrição**
Descrição opcional para detalhamento do grupo.

**04**. Na aba **Usuários**, marque os usuários que devem fazer parte do grupo.

**05**. Na aba **Aplicativos**, marque os aplicativos que devem ser apresentados no Launchpad dos usuários do grupo.

**06**. Clique no botão **Criar grupo**para finalizar a criação.

Após a criação do grupo, os usuários associados visualizam em seu Launchpad os aplicativos que foram selecionados para o grupo.

## Editar grupo

---

**01.** Acione o menu **Grupos**.

**02.** Localize o grupo desejado na lista.

**03.** Clique no botão **Editar**![](/download/attachments/330138408/flaticon-edit%20%281%29.png?version=1&modificationDate=1730320164730&api=v2).

É possível editar o nome e a descrição do grupo.

Atenção:

A mudança no nome do grupo não é sincronizada com o Active Directory. 

**04.** Acione Editar para confirmar a alteração do grupo.

## Remover grupo

---

**01. **Acione o menu **Grupos.**

**02**. Localizar o grupo que deseja remover.

**03.**Clique sobre o botão **Visualizar** ![](/download/attachments/330138408/flaticon-view.png?version=1&modificationDate=1730320860997&api=v2) para abrir a tela de Dados do grupo.

**04**. Acione o botão **Excluir**![](/download/attachments/330138408/flaticon-trash%20%281%29.png?version=1&modificationDate=1730321806557&api=v2).

Uma mensagem é apresentada informando ao administrador que os usuários associados ao grupo perdem acesso aos aplicativos vinculados.

**05.** Clique em **Excluir** para confirmar a exclusão.

Após a confirmação, apenas o grupo é removido, os usuários e aplicativos associados permanecem no TOTVS Identity.

## Usuários associados ao grupo

---

### Associar usuários

**01.** Acione o menu **Grupos.**

**02.** Clique em **Mais opções** ****e acione a opção **Associar usuários**.

É apresentada a listagem de usuários. É possível usar o campo de pesquisa para buscar os usuários pelo nome.

**03. **Marque os usuários que devem ser associados ao grupo.

Dica:

Podem ser associados usuários em lote, através do domínio de e-mail. Ao inserir o domínio de e-mail, uma mensagem de confirmação é apresentada, informando que todos os usuários com o domínio em questão devem ser associados ao grupo.

**04**. Clique em **Associar** para confirmar.

Os usuários associados ao grupo passam a ter os aplicativos vinculados no Launchpad. Usuários incluídos via TOTVS Identity em grupos importados do Active Directory não são sincronizados com o grupo original no AD.

### Remover usuários

**01. **Acione o menu **Grupos.**

**02.** Clique em **Mais opções** ****e acione a opção **Gerenciar usuários**.

É apresentada uma lista com os usuários associados ao grupo.

**03**. Localizar o usuário a ser removido e acionar **Remover usuário** ![](/download/attachments/330138408/flaticon-remove-user.png?version=1&modificationDate=1730375884747&api=v2).

Após remover o usuário do grupo, ele deixa de ter acesso aos aplicativos vinculados por aquele grupo.

### Consultar usuários

**01.** Acione o menu **Grupos**.

**02**. Localize o grupo que deseja consultar os usuários.

**03**. Clique sobre o botão **Visualizar** ![](/download/attachments/330138408/flaticon-view.png?version=1&modificationDate=1730320860997&api=v2).

É apresentada a página de Dados do grupo, com os usuários associados na aba **Usuários**.

## Aplicativos associados ao grupo

---

### Associar aplicativos

**01.** Acione o menu **Grupos.**

**02.** Clique em **Mais opções** ****e acione a opção **Associar aplicativos**.

**03.** Marque os aplicativos que deseja associar ao grupo.

É possível usar o campo de busca para buscar pelos aplicativos desejados. 

**04**. Clique em **Associar**para confirmar.

Após a confirmação, os aplicativos marcados são adicionados automaticamente ao Launchpad de todos os usuários associados.

### Remover aplicativos

**01. **Acione o menu **Grupos.**

**02.** Clique em **Mais opções** ****e acione a opção **Gerenciar aplicativos**.

É apresentada uma lista com os aplicativos vinculados ao grupo. 

**03**. Localizar o aplicativo a ser removido e acionar **Remover aplicativo**.

Após remover o aplicativo do grupo, todos os usuários do grupo deixam de ter acesso ao aplicativo.

### Consultar aplicativos

**01. **Acione o menu **Grupos**.

**02**. Localize o grupo que deseja consultar os aplicativos.

**03**. Clique sobre o botão **Visualizar** ![](/download/attachments/330138408/flaticon-view.png?version=1&modificationDate=1730320860997&api=v2).

É apresentada a página de Dados do grupo, com os aplicativos associados na aba **Aplicativos**.


<!-- anchors: Identity|Grupos-Falandodegrupos..., Identity|Grupos-Acessargrupos, Identity|Grupos-Buscargrupos, Identity|Grupos-Visualizargrupo, Identity|Grupos-Criarnovogrupo, Identity|Grupos-Editargrupo, Identity|Grupos-Removergrupo, Identity|Grupos-Usuáriosassociadosaogrupo, Identity|Grupos-Associarusuários, Identity|Grupos-Removerusuários, Identity|Grupos-Consultarusuários, Identity|Grupos-Aplicativosassociadosaogrupo, Identity|Grupos-Associaraplicativos, Identity|Grupos-Removeraplicativos, Identity|Grupos-Consultaraplicativos -->
