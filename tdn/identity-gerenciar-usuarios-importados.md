---
title: "Identity | Gerenciar usuários importados"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=273989076"
scraped_at: "2026-03-09T04:12:48.615Z"
depth: 2
anchors: 10
child_links: 47
---

# Identity | Gerenciar usuários importados

# Falando de gerenciar usuários importados...

---

Usuários importados do Active Directory via SmartSync são apresentados em uma lista de usuários pendentes e precisam ser aceitos pelo administrador da empresa antes de serem efetivamente criados no TOTVS Identity.

Usuários importados do Active Directory que contenham e-mails com formato inválido não terão o aceite efetivado e permanecerão na lista de Usuários Pendentes. O endereço de e-mail do usuário em questão deverá ser corrigido no Active Directory para que o aceite possa ser realizado.

Não é possível reverter o procedimento de aceite, porém o usuário aceito poderá ser desativado pelo administrador. Usuários excluídos do contexto que venham a ser reimportados do Active Directory serão incluídos automaticamente na lista de [Rejeitados](#Identity|Gerenciarusuáriosimportados-lista-rejeitados).

Aceite Automático

É possível automatizar o processo de aceite de usuários editando o Active Directory e habilitando a opção Aceite Automático. Saiba mais em [Gerenciar Active Directories](https://tdn.totvs.com/x/W55UE).

## Acessar lista de usuários pendentes

---

**01.** Acionar o ícone **Configurações **no canto superior direito e selecionar a opção **Active Directory**.

**02.** Na seção [Gerenciar Active Directories](/display/fluig/Identity+%7C+Gerenciar+Active+Directories), acionar o link **Gerenciar Active Directories**.

**03**. Acionar a opção **Visualizar**, localizada na coluna **Usuários pendentes** do Active Directory desejado.

**oculto**

Acessar lista de usuários importados

---

**01.** Acionar o ícone **Configurações **no canto superior direito e selecionar a opção **Active Directory**.

**02.** Acionar **Visualizar **![](/download/attachments/273989076/flaticon-view.png?version=1&modificationDate=1606252823867&api=v2) localizado ao lado direito do nome do Active Directory cadastrado.

Na parte de baixo da tela são apresentadas as abas **Usuários** e **Grupos**, que possibilitam uma visualização da quantidade de usuários e grupos importados por meio da sincronização com o AD em questão. Para mais detalhes sobre os grupos, consulte a documentação [Gerenciar grupos importados](/display/fluig/Identity+%7C+Gerenciar+grupos+importados).

**03**. Visualizar os usuários importados.

Na tela é apresentada a quantidade total de usuários importados no período, e também as quantidades de usuários em cada status: pendentes, processando, aceitos e rejeitados.

			![](https://tdn.totvs.com/download/thumbnails/286221066/dica.png)

**DICA!**
Utilize os recursos da tela para trazer uma visualização mais precisa:

	- **Filtrar por um período**: Utilize as opções disponíveis para visualizar os usuários importados em todos os dias, hoje, nos últimos 7 dias, nos últimos 30 dias ou por um período personalizado.No período personalizado, é possível selecionar uma data inicial e final no calendário, ou selecionar a opção **Somente data inicial**, para trazer os dados até a data atual.

	- **Filtrar por situação**: As situações apresentadas em destaque na tela são filtros, por meio deles é possível selecionar a situação desejada (usuários pendentes, processando, aceitos e rejeitados)

	- **Buscar por usuário**: Utilize a busca para pesquisar pelo nome ou e-mail do usuário.É importante notar que a busca remove a seleção dos filtros acima, trazendo todos os resultados.

**oculto**

Exportar dados

---

**01.** Acessar a lista conforme apresentado no item [Acessar lista de usuários importados](#Identity|Gerenciarusuáriosimportados-Acessarlistadeusuáriosimportados).

**02**. Acionar o botão **Exportar dados**.

**03**. Na mensagem de confirmação, acionar **Exportar**.

Os dados de importação dos usuários serão exportados em um arquivo CSV, conforme o período apresentado em tela.

**oculto**

Aceitar usuários pendentes

---

**01.** Acessar a lista conforme apresentado no item [Acessar lista de usuários importados](#Identity|Gerenciarusuáriosimportados-Acessarlistadeusuáriosimportados).

**02**. Selecionar o quadro**Pendentes**. 

**03**. Localizar o usuário que deve ser importado para a empresa.

			![](https://tdn.totvs.com/download/thumbnails/286221066/dica.png)

**DICA!**
Existem três formas de aceitar usuários:

	1. **Individualmente**: Acione o botão ![](https://tdn.totvs.com/download/thumbnails/273989076/flaticon-accept.png) ao lado direito do usuário para aceitá-lo individualmente.

	2. **Usuários selecionados**: Selecione os usuários desejados na caixa de seleção (à esquerda do nome) e acione o botão **Aceitar selecionados**.

	3. **Todos os usuários**: Acione o botão **Aceitar todos**.

A partir do momento em que é aceito, o status do usuário importado é definido como Ativo e o acesso à empresa no TOTVS Identity está liberado. Uma vez aceitos por um administrador, os usuários serão listados na página de Gerenciamento de Usuários com status Ativo. No perfil do usuário, os campos nome, sobrenome, e-mail, cargo e departamento são automaticamente preenchidos com os dados importados do Active Directory.

A ação de aceitar todos os usuários pode levar algum tempo para ser concluída caso exista uma grande quantidade de usuários para serem importados. Usuários que não puderem ser aceitos devido a inconsistências no cadastro serão enviados para a lista de Rejeitados.

## Aceitar usuário pendente

---

**01.** Acessar a lista de usuários pendentes, conforme item [Acessar lista de usuários pendentes](#Identity|Gerenciarusuáriosimportados-listapendentes).

**02.**Localizar o usuário que deve ser importado para a empresa no Identity na lista de usuários pendentes.

**03.** Acionar **Aceitar** localizado ao lado direito do nome do usuário pendente.

A partir do momento em que é aceito, o status do usuário importado é definido como Ativo e o acesso à empresa no TOTVS Identity está liberado. Uma vez aceitos por um administrador, os usuários serão listados na página de Gerenciamento de Usuários com status Ativo. No perfil do usuário, os campos nome, sobrenome, e-mail, cargo e departamento são automaticamente preenchidos com os dados importados do Active Directory.

## Aceitar vários usuários pendentes

---

**01.** Acessar a lista de usuários pendentes, conforme item [Acessar lista de usuários pendentes](#Identity|Gerenciarusuáriosimportados-listapendentes).

**02.**Assinalar os usuários que devem ser importados para a empresa no Identity na lista de usuários pendentes.

**03.** Acionar **Aceitar** localizado no topo da lista de usuários pendentes.

Após selecionar os usuários e acionar uma das opções de aceite, os botões **Aceitar** da página serão desabilitados e uma barra de status indicará quantos usuários estão em processo de aceite pela aplicação. Apenas após o fim deste processo, o administrador poderá aceitar outros usuários.

**oculto**

**Observação interna**

Esse passo a passo Aceitar vários usuários pendentes foi repassado ao artigo [https://centraldeatendimento.fluig.com/hc/pt-br/articles/360026742553](https://centraldeatendimento.fluig.com/hc/pt-br/articles/360026742553)
se for necessário alterar, lembrar de repassar a esse artigo

## Aceitar todos os usuários pendentes

---

**01.** Acessar a lista de usuários pendentes, conforme item [Acessar lista de usuários pendentes](#Identity|Gerenciarusuáriosimportados-listapendentes).

**02.** Acionar **Aceitar Todos os Usuários Pendentes** localizado no topo da lista de usuários pendentes.

Após selecionar os usuários e acionar uma das opções de aceite, os botões **Aceitar** da página serão desabilitados e uma barra de status indicará quantos usuários estão em processo de aceite pela aplicação. Apenas após o fim deste processo, o administrador poderá aceitar outros usuários.

Usuários que não puderem ser aceitos devido a inconsistências no cadastro serão enviados para a lista de [Rejeitados](#Identity|Gerenciarusuáriosimportados-lista-rejeitados).

**oculto**

Rejeitar usuários pendentes

---

**01.** Acessar a lista conforme apresentado no item [Acessar lista de usuários importados](#Identity|Gerenciarusuáriosimportados-Acessarlistadeusuáriosimportados).

**02**. Selecionar o quadro**Pendentes**. 

**03**. Localizar os usuários que devem ser rejeitados.

			![](https://tdn.totvs.com/download/thumbnails/286221066/dica.png)

**DICA!**
Existem três formas de rejeitar usuários:

	1. **Individualmente**: Acione o botão ![](https://tdn.totvs.com/download/thumbnails/273989076/flaticon-cancel.png) ao lado direito do usuário para rejeitá-lo individualmente.

	2. **Usuários selecionados**: Selecione os usuários desejados na caixa de seleção (à esquerda do nome) e acione o botão **Rejeitar selecionados**.

	3. **Todos os usuários**: Acione o botão **Rejeitar todos**.

Usuários rejeitados ainda podem ser aceitos futuramente através da lista de usuários rejeitados.

**oculto**

Aceitar usuários rejeitados

---

**01.** Acessar a lista conforme apresentado no item [Acessar lista de usuários importados](#Identity|Gerenciarusuáriosimportados-Acessarlistadeusuáriosimportados).

**02**. Selecionar o quadro** Rejeitados**. 

**03**. Localizar o usuário que deve ser importado para a empresa.

			![](https://tdn.totvs.com/download/thumbnails/286221066/dica.png)

**DICA!**
Existem três formas de aceitar usuários:

	1. **Individualmente**: Acione o botão ![](https://tdn.totvs.com/download/thumbnails/273989076/flaticon-accept.png) ao lado direito do usuário para aceitá-lo individualmente.

	2. **Usuários selecionados**: Selecione os usuários desejados na caixa de seleção (à esquerda do nome) e acione o botão **Aceitar selecionados**.

	3. **Todos os usuários**: Acione o botão **Aceitar todos**.

A partir do momento em que é aceito, o status do usuário importado é definido como Ativo e o acesso à empresa no TOTVS Identity está liberado. Uma vez aceitos por um administrador, os usuários serão listados na página de Gerenciamento de Usuários com status Ativo. No perfil do usuário, os campos nome, sobrenome, e-mail, cargo e departamento são automaticamente preenchidos com os dados importados do Active Directory.

**oculto**

Excluir usuários rejeitados

---

**01.** Acessar a lista conforme apresentado no item [Acessar lista de usuários importados](#Identity|Gerenciarusuáriosimportados-Acessarlistadeusuáriosimportados).

**02**. Selecionar o quadro**Rejeitados**. 

**03**. Localizar o usuário que deve ser excluído.

			![](https://tdn.totvs.com/download/thumbnails/286221066/dica.png)

**DICA!**
Existem três formas de excluir usuários:

	1. **Individualmente**: Acione o botão ![](https://tdn.totvs.com/download/thumbnails/273989076/flaticon-trash.png) ao lado direito do usuário para excluí-lo individualmente.

	2. **Usuários selecionados**: Selecione os usuários desejados na caixa de seleção (à esquerda do nome) e acione o botão **Excluir selecionados**.

	3. **Todos os usuários**: Acione o botão **Excluir todos**.

**oculto**

Corrigir usuário rejeitado

---

Essa ação pode ser efetuada quando a situação do usuário for Erro.

**01.** Acessar a lista conforme apresentado no item [Acessar lista de usuários importados](#Identity|Gerenciarusuáriosimportados-Acessarlistadeusuáriosimportados).

**02**. Selecionar o quadro**Rejeitados**. 

**03**. Localizar o usuário que deve ser corrigido e acionar a opção **Corrigir** ![](/download/attachments/273989076/flaticon-build.png?version=1&modificationDate=1606316646260&api=v2).

			![](https://tdn.totvs.com/download/thumbnails/286221066/nota.png)

**NOTA:**
Será apresentada uma mensagem informando o motivo do erro. Alguns motivos para o erro podem ser:

	- **Usuário já cadastrado**: O e-mail já está cadastrado no TOTVS Identity. A correção realizada é a exclusão do usuário antigo e substituição pelo novo.

	- **E-mail inválido**: O e-mail cadastrado para o usuário está em um formato inválido. A correção realizada é o preenchimento do e-mail correto.

**04**. Efetuar a correção caso necessário, e acionar **Corrigir **para confirmar.

Com essa confirmação, o Identity fará a correção do erro e permitirá que o administrador aceite novamente o usuário em questão.

## Rejeitar um usuário

---

**01.** Acessar a lista de usuários pendentes, conforme item [Acessar lista de usuários pendentes](#Identity|Gerenciarusuáriosimportados-listapendentes).

**02.**Localizar na lista de usuários pendentes o usuário que deve ser rejeitado.

**03.** Acionar **Rejeitar** localizado ao lado direito do nome do usuário pendente.

Usuários rejeitados ainda podem ser aceitos futuramente através da [lista de usuários rejeitados](#Identity|Gerenciarusuáriosimportados-lista-rejeitados).

## Rejeitar vários usuários pendentes

---

**01.** Acessar a lista de usuários pendentes, conforme item [Acessar lista de usuários pendentes](#Identity|Gerenciarusuáriosimportados-listapendentes).

**02.**Assinalar os usuários que não devem ser importados para a empresa no Identity na lista de usuários pendentes.

**03.** Acionar **Rejeitar** localizado no topo da lista de usuários pendentes.

Usuários rejeitados ainda podem ser aceitos futuramente através da [lista de usuários rejeitados](#Identity|Gerenciarusuáriosimportados-lista-rejeitados).

## Pesquisar usuário na lista de usuários pendentes

---

**01.** Acessar a lista de usuários pendentes, conforme item [Acessar lista de usuários pendentes](#Identity|Gerenciarusuáriosimportados-listapendentes).

**02.** Informar o nome do usuário desejado no campo **Nome de Usuário**.

**03.** Visualizar os resultados apresentados na lista de usuários.

## Visualizar lista de usuários rejeitados 

---

**01.** Acessar a lista de usuários pendentes, conforme item [Acessar lista de usuários pendentes](#Identity|Gerenciarusuáriosimportados-listapendentes).

**02.** Acionar o filtro **Pendentes** para exibir as demais opções de filtro da lista.

**03.** Selecionar **Rejeitados**.

**04.** Visualizar os resultados apresentados na lista de usuários.

Usuários rejeitados podem ser aceitos através da opção **Aceitar** localizada ao lado direito do nome do usuário.

**oculto**

**Observação interna**

Esse passo a passo Aceitar vários usuários pendentes foi repassado ao artigo [https://centraldeatendimento.fluig.com/hc/pt-br/articles/360031301354](https://centraldeatendimento.fluig.com/hc/pt-br/articles/360031301354)
se for necessário alterar, lembrar de repassar a esse artigo

## Visualizar lista de usuários aceitos

---

**01.** Acessar a lista de usuários pendentes, conforme item [Acessar lista de usuários pendentes](#Identity|Gerenciarusuáriosimportados-listapendentes).

**02.** Acionar o filtro **Pendentes** para exibir as demais opções de filtro.

**03.** Selecionar **Aceito**.

**04.** Visualizar os resultados apresentados na lista de usuários.


<!-- anchors: Identity|Gerenciarusuáriosimportados-Falandodegerenciarusuáriosimportados..., Identity|Gerenciarusuáriosimportados-Acessarlistadeusuáriospendentes, Identity|Gerenciarusuáriosimportados-Aceitarusuáriopendente, Identity|Gerenciarusuáriosimportados-Aceitarváriosusuáriospendentes, Identity|Gerenciarusuáriosimportados-Aceitartodososusuáriospendentes, Identity|Gerenciarusuáriosimportados-Rejeitarumusuário, Identity|Gerenciarusuáriosimportados-Rejeitarváriosusuáriospendentes, Identity|Gerenciarusuáriosimportados-Pesquisarusuárionalistadeusuáriospendentes, Identity|Gerenciarusuáriosimportados-Visualizarlistadeusuáriosrejeitadoslista-rejeitados, Identity|Gerenciarusuáriosimportados-Visualizarlistadeusuáriosaceitos -->
