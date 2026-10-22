---
title: "Identity | Gerenciar grupos importados"
url: "https://tdn.totvs.com/display/public/fluig/Identity+%7C+Gerenciar+grupos+importados"
scraped_at: "2026-03-09T05:12:05.052Z"
depth: 3
anchors: 11
child_links: 49
---

# Identity | Gerenciar grupos importados

# Falando de gerenciar grupos importados...

---

Essa página permite ao administrador aceitar ou rejeitar a criação dos grupos importados do Active Directory para a empresa no TOTVS Identity.

A importação de grupos permite replicar no Identity a estrutura de grupos existente no Active Directory. Usuários adicionados e removidos dos grupos são sincronizados, através do SmartSync, entre o Identity e o Active Directory.

Usuários atrelados a um grupo no Active Directory e aceitos pelo administrador são automaticamente atrelados ao mesmo grupo no Identity, caso este tenha sido importado.

## Acessar lista de grupos pendentes

---

**01. **Acessar as configurações ![](/download/attachments/285663545/flaticon-settings%20%281%29.png?version=1&modificationDate=1591018537847&api=v2) e selecionar a opção [Active Directory](https://tdn.totvs.com/x/AptUE).

**02.** Na seção [Gerenciar Active Directories](https://tdn.totvs.com/display/TIdentity/Gerenciar+Active+Directories), acionar o link **Gerenciar Active Directories**.

**03**. Acionar a opção **Visualizar**, localizada na coluna **Grupos pendentes** do Active Directory desejado.

**oculto**

Acessar lista de grupos importados

---

**01.** Acionar o ícone **Configurações **no canto superior direito e selecionar a opção **Active Directory**.

**02.** Acionar **Visualizar **![](/download/attachments/285663545/flaticon-view.png?version=1&modificationDate=1606318196977&api=v2) localizado ao lado direito do nome do Active Directory cadastrado.

Na parte de baixo da tela são apresentadas as abas **Usuários** e **Grupos**, que possibilitam uma visualização da quantidade de usuários e grupos importados por meio da sincronização com o AD em questão. Para mais detalhes sobre os usuários, consulte a documentação [Gerenciar usuários importados](/pages/viewpage.action?pageId=273989076).

**03**. Acionar a aba **Grupos** e visualizar os grupos importados.

Na tela é apresentada a quantidade total de grupos de permissão importados no período, e também as quantidades de grupos em cada status: pendentes, processando, aceitos e rejeitados.

			![](https://tdn.totvs.com/download/thumbnails/286221066/dica.png)

**DICA!**
Utilize os recursos da tela para trazer uma visualização mais precisa:

	- **Filtrar por um período**: Utilize as opções disponíveis para visualizar os grupos importados em todos os dias, hoje, nos últimos 7 dias, nos últimos 30 dias ou por um período personalizado.No período personalizado, é possível selecionar uma data inicial e final no calendário, ou selecionar a opção **Somente data inicial**, para trazer os dados até a data atual.

	- **Filtrar por situação**: As situações apresentadas em destaque na tela são filtros, por meio deles é possível selecionar a situação desejada (grupos pendentes, processando, aceitos e rejeitados)

	- **Buscar por grupo**: Utilize a busca para pesquisar pelo nome do grupo.É importante notar que a busca remove a seleção dos filtros acima, trazendo todos os resultados.

**oculto**

Exportar dados

---

**01.** Acessar a lista conforme apresentado no item [Acessar lista de grupos importados](#Identity|Gerenciargruposimportados-Acessarlistadegruposimportados).

**02**. Acionar o botão **Exportar dados**.

**03**. Na mensagem de confirmação, acionar **Exportar**.

Os dados de importação dos grupos serão exportados em um arquivo CSV, conforme o período apresentado em tela.

**oculto**

Aceitar grupos pendentes

---

**01.** Acessar a lista conforme apresentado no item [Acessar lista de grupos importados](#Identity|Gerenciargruposimportados-Acessarlistadegruposimportados).

**02**. Selecionar o quadro**Pendentes**. 

**03**. Localizar os grupos que devem ser importados para a empresa.

			![](https://tdn.totvs.com/download/thumbnails/286221066/dica.png)

**DICA!**
Existem três formas de aceitar grupos:

	1. **Individualmente**: Acione o botão ![](https://tdn.totvs.com/download/thumbnails/273989076/flaticon-accept.png) ao lado direito do grupo para aceitá-lo individualmente.

	2. **Grupos selecionados**: Selecione os grupos desejados na caixa de seleção (à esquerda do nome) e acione o botão **Aceitar selecionados**.

	3. **Todos os grupos**: Acione o botão **Aceitar todos**.

Os grupos importados do Active Directory e aceitos são listados junto aos demais grupos próprios do Identity na página de Grupos.

A ação de aceitar todos os grupos pode levar algum tempo para ser concluída caso exista uma grande quantidade de grupos para serem importados.

## Aceitar grupo

---

**01.** Acessar a lista de grupos pendentes, conforme item [Acessar lista de grupos pendentes](#Identity|Gerenciargruposimportados-listagrupospendentes).

**02.**Localizar o grupo que deve ser importado para a empresa no Identity na lista de grupos pendentes.

**03.** Acionar **Aceitar** localizado ao lado direito do nome do grupo pendente.

Os grupos importados do Active Directory e aceitos são listados junto aos demais grupos próprios do Identity na página de Gerenciamento de Grupos.

## Aceitar vários grupos pendentes

---

**01.** Acessar a lista de grupos pendentes, conforme item [Acessar lista de grupos pendentes](#Identity|Gerenciargruposimportados-listagrupospendentes).

**02. **Assinalar os grupos que devem ser importados para a empresa no TOTVS Identity na lista de grupos pendentes.

**03.** Acionar **Aceitar** localizado no topo da lista de grupos pendentes.

## Aceitar todos os grupos pendentes

---

**01.** Acessar a lista de grupos pendentes, conforme item [Acessar lista de grupos pendentes](#Identity|Gerenciargruposimportados-listagrupospendentes).

**02. ** Acionar **Aceitar Todos os Grupos Pendentes** localizado no topo da lista de grupos pendentes.

Este procedimento pode levar algum tempo para ser concluído caso exista uma grande quantidade de grupos para serem importados.

**oculto**

Rejeitar grupos pendentes

---

**01.** Acessar a lista conforme apresentado no item [Acessar lista de grupos importados](#Identity|Gerenciargruposimportados-Acessarlistadegruposimportados).

**02**. Selecionar o quadro**Pendentes**. 

**03**. Localizar os grupos que devem ser rejeitados.

			![](https://tdn.totvs.com/download/thumbnails/286221066/dica.png)

**DICA!**
Existem três formas de rejeitar grupos:

	1. **Individualmente**: Acione o botão ![](https://tdn.totvs.com/download/thumbnails/273989076/flaticon-cancel.png) ao lado direito do grupo para rejeitá-lo individualmente.

	2. **Grupos selecionados**: Selecione os grupos desejados na caixa de seleção (à esquerda do nome) e acione o botão **Rejeitar selecionados**.

	3. **Todos os grupos**: Acione o botão **Rejeitar todos**.

Grupos rejeitados ainda podem ser aceitos futuramente através da lista de grupos rejeitados.

**oculto**

Aceitar grupos rejeitados

---

**01.** Acessar a lista conforme apresentado no item [Acessar lista de grupos importados](#Identity|Gerenciargruposimportados-Acessarlistadegruposimportados).

**02**. Selecionar o quadro** Rejeitados**. 

**03**. Localizar os grupos que devem ser importados para a empresa.

			![](https://tdn.totvs.com/download/thumbnails/286221066/dica.png)

**DICA!**
Existem três formas de aceitar grupos:

	1. **Individualmente**: Acione o botão ![](https://tdn.totvs.com/download/thumbnails/273989076/flaticon-accept.png) ao lado direito do grupo para aceitá-lo individualmente.

	2. **Grupos selecionados**: Selecione os grupos desejados na caixa de seleção (à esquerda do nome) e acione o botão **Aceitar selecionados**.

	3. **Todos os grupos**: Acione o botão **Aceitar todos**.

Os grupos importados do Active Directory e aceitos são listados junto aos demais grupos próprios do Identity na página de Gerenciamento de Grupos.

**oculto**

Excluir grupos rejeitados

---

**01.** Acessar a lista conforme apresentado no item [Acessar lista de grupos importados](#Identity|Gerenciargruposimportados-Acessarlistadegruposimportados).

**02**. Selecionar o quadro**Rejeitados**. 

**03**. Localizar os grupos que devem ser excluídos.

			![](https://tdn.totvs.com/download/thumbnails/286221066/dica.png)

**DICA!**
Existem três formas de excluir grupos:

	1. **Individualmente**: Acione o botão ![](https://tdn.totvs.com/download/thumbnails/273989076/flaticon-trash.png) ao lado direito do grupo para excluí-lo individualmente.

	2. **Grupos selecionados**: Selecione os grupos desejados na caixa de seleção (à esquerda do nome) e acione o botão **Excluir selecionados**.

	3. **Todos os grupos**: Acione o botão **Excluir todos**.

**oculto**

Corrigir grupo rejeitado

---

Essa ação pode ser efetuada quando a situação do grupo for Erro.

**01.** Acessar a lista conforme apresentado no item [Acessar lista de grupos importados](#Identity|Gerenciargruposimportados-Acessarlistadegruposimportados).

**02**. Selecionar o quadro**Rejeitados**. 

**03**. Localizar o grupo que deve ser corrigido e acionar a opção **Corrigir** ![](/download/attachments/285663545/flaticon-build.png?version=1&modificationDate=1606332407750&api=v2).

			![](https://tdn.totvs.com/download/thumbnails/286221066/nota.png)

**NOTA:**
Será apresentada uma mensagem informando o motivo do erro. Alguns motivos para o erro podem ser:

	- **Grupo já cadastrado**: Este grupo já está cadastrado no TOTVS Identity. A correção realizada é a exclusão do grupo antigo e substituição pelo novo.

**04**. Efetuar a correção caso necessário, e acionar **Corrigir**para confirmar.

Com essa confirmação, o Identity fará a correção do erro e permitirá que o administrador aceite novamente o grupo em questão.

## Rejeitar um grupo

---

**01.** Acessar a lista de grupos pendentes, conforme item [Acessar lista de grupos pendentes](https://tdn.totvs.com/display/TIdentity/Identity+%7C+Gerenciar+grupos+importados#Identity|Gerenciargruposimportados-Acessarlistadegrupospendentes).

**02. **** **Localizar na lista de grupos pendentes o grupo que deve ser rejeitado.

**03.** Acionar **Rejeitar** localizado ao lado direito do nome do grupo pendente.

Grupos rejeitados ainda podem ser aceitos futuramente através da [lista de grupos rejeitados](#Identity|Gerenciargruposimportados-rejeitados).

## Rejeitar vários grupos pendentes

---

**01.** Acessar a lista de grupos pendentes, conforme item [Acessar lista de grupos pendentes](https://tdn.totvs.com/display/TIdentity/Identity+%7C+Gerenciar+grupos+importados#Identity|Gerenciargruposimportados-Acessarlistadegrupospendentes).

**02. **Assinalar os grupos que não devem ser importados para a empresa no TOTVS Identity na lista de grupos pendentes.

**03.** Acionar **Rejeitar** localizado no topo da lista de grupos pendentes.

Grupos rejeitados ainda podem ser aceitos futuramente através da [lista de grupos rejeitados](#Identity|Gerenciargruposimportados-rejeitados).

## Pesquisar grupo na lista de grupos pendentes

---

**01.** Acessar a lista de grupos pendentes, conforme item [Acessar lista de grupos pendentes](https://tdn.totvs.com/display/TIdentity/Identity+%7C+Gerenciar+grupos+importados#Identity|Gerenciargruposimportados-Acessarlistadegrupospendentes).

**02.**Informar o nome do grupo desejado no campo **Nome do Grupo**.

**03.** Visualizar os resultados apresentados na lista de grupos.

## Visualizar lista de grupos rejeitados   

---

**01.** Acessar a lista de grupos pendentes, conforme item [Acessar lista de grupos pendentes](https://tdn.totvs.com/display/TIdentity/Identity+%7C+Gerenciar+grupos+importados#Identity|Gerenciargruposimportados-Acessarlistadegrupospendentes).

**02. **Acionar o filtro **Pendentes** para exibir as demais opções de filtro da lista.

**03.** Selecionar **Rejeitados**.

**04.** Visualizar os resultados apresentados na lista de grupos.

## Visualizar lista de grupos aceitos

---

**01.** Acessar a lista de grupos pendentes, conforme item [Acessar lista de grupos pendentes](https://tdn.totvs.com/display/TIdentity/Identity+%7C+Gerenciar+grupos+importados#Identity|Gerenciargruposimportados-Acessarlistadegrupospendentes).

**02. **Acionar o filtro **Pendentes** para exibir as demais opções de filtro.

**03.** Selecionar **Aceito**.

**04.** Visualizar os resultados apresentados na lista de grupos.

## Alterar o nome de exibição de um grupo

---

**01.** Acessar a lista de grupos pendentes, conforme item [Acessar lista de grupos pendentes](https://tdn.totvs.com/display/public/fluig/Identity+%7C+Gerenciar+grupos+importados#Identity|Gerenciargruposimportados-listagrupospendentes).

**02. **Localizar na lista de grupos pendentes o grupo que terá o nome alterado.

**03.** Posicionar o *mouse* sobre o nome do grupo.

**04.** Acionar **Nome de exibição**.

**05.** Informar o novo nome de exibição do grupo.

**06.** Acionar **OK**.

A alteração no nome de exibição do grupo é válida apenas para referenciar o grupo após o aceite pelo administrador no TOTVS Identity. Esta alteração não se aplica ao nome do grupo no Active Directory.

**oculto**

**Obs:** Atualizar e liberar essa informação no item acima após a liberação do novo Smartsync!

Alterar o nome de exibição de um grupo

---

**01.** Acessar a lista de grupos pendentes, conforme item [Acessar lista de grupos pendentes](https://tdn.totvs.com/display/TIdentity/Identity+%7C+Gerenciar+grupos+importados#Identity|Gerenciargruposimportados-Acessarlistadegrupospendentes).

**02. **Localizar na lista de grupos pendentes o grupo que terá o nome alterado.

**03.** Acionar **Editar**![](/download/attachments/285663545/flaticon-edit%20%281%29.png?version=1&modificationDate=1647352502507&api=v2) localizado ao lado direito na última coluna. ** Veja a imagem**

**04.** Editar o **Nome.  Veja a imagem**

**05.** Acionar **Salvar**.

A alteração no nome de exibição do grupo é válida apenas para referenciar o grupo após o aceite pelo administrador no TOTVS Identity. Esta alteração não se aplica ao nome do grupo no Active Directory.

Atenção

Será possível realizar a alteração do nome de um grupo no Active Directory, somente após a liberação do Novo SmartSync.


<!-- anchors: Identity|Gerenciargruposimportados-Falandodegerenciargruposimportados..., Identity|Gerenciargruposimportados-Acessarlistadegrupospendentes, Identity|Gerenciargruposimportados-Aceitargrupo, Identity|Gerenciargruposimportados-Aceitarváriosgrupospendentes, Identity|Gerenciargruposimportados-Aceitartodososgrupospendentes, Identity|Gerenciargruposimportados-Rejeitarumgrupo, Identity|Gerenciargruposimportados-Rejeitarváriosgrupospendentes, Identity|Gerenciargruposimportados-Pesquisargruponalistadegrupospendentes, Identity|Gerenciargruposimportados-Visualizarlistadegruposrejeitadosrejeitados, Identity|Gerenciargruposimportados-Visualizarlistadegruposaceitos, Identity|Gerenciargruposimportados-Alteraronomedeexibiçãodeumgrupo -->
