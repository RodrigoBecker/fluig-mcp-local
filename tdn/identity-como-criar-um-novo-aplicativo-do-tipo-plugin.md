---
title: "Identity | Como criar um novo aplicativo do tipo Plugin"
url: "https://tdn.totvs.com/display/public/fluig/Identity+%7C+Como+criar+um+novo+aplicativo+do+tipo+Plugin"
scraped_at: "2026-03-09T05:22:46.855Z"
depth: 4
anchors: 26
child_links: 44
---

# Identity | Como criar um novo aplicativo do tipo Plugin

# Falando de aplicativo do tipo Plugin...

---

O tipo Plugin refere-se aplicativos *web* que, geralmente, exigem apenas o preenchimento dos campos nome de usuário e senha para autenticação. O Identity utiliza uma extensão do navegador (Chrome, Firefox, Internet Explorer) para injetar essas credenciais no formulário de acesso.

**oculto**

O passo a passo dessa documentação foi repassado ao artigo [https://totvssuporte.zendesk.com/knowledge/api/articles/360024966414](https://totvssuporte.zendesk.com/knowledge/api/articles/360024966414) (Como criar um novo aplicativo do tipo Plugin)

Quando for feita alguma alteração, lembrar de repassar a esse artigo!

# Obter dados para criação do aplicativo

O primeiro passo para criar o aplicativo é obter os dados do formulário *web* utilizado para autenticação no *site*. Neste guia utilizaremos o serviço de gerenciamento de projetos **JIRA** como exemplo para a criação de um aplicativo Plugin através do navegador Google Chrome. 

Esse mesmo procedimento pode servir de base para outros *sites* (diferentes do JIRA) e realizado através dos demais navegadores homologados para o Identity.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)
- [Passo 6](#)

 - Acesse o *site* do serviço que deseja configurar no aplicativo Plugin, nesse caso o JIRA de sua empresa.

![](/download/attachments/271409159/Image%20002.png?version=1&modificationDate=1486487222000&api=v2)

 - Clique com o botão direito do mouse sobre o campo de texto onde deve ser informado o nome de usuário (login) e selecione a opção **Inspecionar**. O navegador apresentará o código-fonte da página com o campo selecionado já em evidência.

![](/download/attachments/271409159/Inspecionar.gif?version=1&modificationDate=1486487251000&api=v2)

 - Localize o parâmetro *name*, que identifica o nome do campo de login. No exemplo abaixo, o valor do *name* é "os_username".

![](/download/attachments/271409159/Image%20004.png?version=1&modificationDate=1486487310000&api=v2)

**Clique para ampliar**

E se o campo não tem name?

Caso o campo do formulário de autenticação não possua o parâmetro *name*, pode ser utilizado o parâmetro id.

 - Realize o mesmo procedimento com o campo de senha da página e localize o parâmetro *name*. No exemplo abaixo, o valor do *name* é "os_password".

![](/download/attachments/271409159/Image%20005.png?version=1&modificationDate=1486487481000&api=v2)

**Clique para ampliar**

 - Localize no código-fonte da página, próximo aos campos usuário/senha, a tag *form*, que representa o formulário de acesso, e os parâmetros *name* e*action*.

 - No exemplo abaixo, o valor do *name* é "loginform" e do *action* é "#".

![](/download/attachments/271409159/Image%20006.png?version=1&modificationDate=1486488145000&api=v2)

**Clique para ampliar**

 - Ao final desse processo, os seguintes dados do formulário devem ter sido coletados para a criação do aplicativo Plugin:

| Campo | Exemplo |
| --- | --- |
| URL da página de login | http://jira.suaempresa.com.br/secure/Dashboard.jspa |
| Campo Nome do Usuário | os_username |
| Campo Senha | os_password |
| Nome do Formulário de Login | loginform |
| Ação do Formulário de Login | # |

# Criação de um novo aplicativo Plugin

De posse dos dados do formulário, acesse a empresa no Identity para dar continuidade à criação do aplicativo.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)

 - Acesse a empresa no Identity com um usuário administrador. Acione o menu **Aplicativos**.

![](/download/attachments/271409159/Image%20007.png?version=2&modificationDate=1587578603673&api=v2)

 - Acione o botão **Novo aplicativo** e selecione a opção **Padrão**.

 - Na aba **Visão Geral**, informe o nome e uma descrição para o aplicativo, e acione **Salvar**. As demais propriedades do aplicativo, como Categoria e Logo poderão ser definidas futuramente.

 - Acesse a aba **Entrar** e acione o botão **Editar**.

![](/download/attachments/271409159/Novo%20aplicativo.gif?version=3&modificationDate=1503084811000&api=v2)

 - Na aba **Entrar** serão configurados os campos do formulário que devem ser preenchidos automaticamente pelo *plugin* do Identity.

 - Para isso utilize os dados coletados no [passo a passo anterior](#Identity|ComocriarumnovoaplicativodotipoPlugin-dados) e preencha os valores nos respectivos campos. Ao final, clique em **Salvar**.

![](/download/attachments/271409159/Image%20008.png?version=4&modificationDate=1486491363000&api=v2)

**Clique para ampliar**

E se a página usar ID ao invés de name?

Caso o formulário de acesso do *site* utilize parâmetros id para os campos de usuário e senha, ao invés do parâmetro *name*, marque as opções **Campo de Nome do Usuário é ID**e **Campo de Senha é ID**. Se a tag *form* da página também não possuir o parâmetro *name*, e apenas o id, preencha esse último no campo **ID do Formulário de Login**.

 - Uma vez configurado e salvo, o aplicativo pode ser disponibilizado no Launchpad dos usuários.

 - Acesse os helps para verificar como incluir apps [para os usuários](https://tdn.totvs.com/x/xrrHEw#Configura%C3%A7%C3%B5esdeaplicativospadr%C3%A3o-Atribuiroaplicativoaosusu%C3%A1rios) ou [para os grupos](https://tdn.totvs.com/x/xrrHEw#Configuraçõesdeaplicativospadrão-Atribuiroaplicativoaosgrupos). 

![](/download/attachments/271409159/Vincular%20usu%C3%A1rios.gif?version=1&modificationDate=1486493792000&api=v2)

 - Ao invés de atribuir o novo aplicativo diretamente a usuários/grupos, o administrador pode apenas disponibilizá-lo publicamente para que os usuários interessados incluam o aplicativo em seus Launchpads manualmente. Para isso, basta habilitar a opção **Navegável** localizada na aba **Visão Geral** do aplicativo.

![](/download/attachments/271409159/Image%20010.png?version=2&modificationDate=1486494043000&api=v2)

# Utilização do aplicativo

Após a criação do aplicativo, os usuários cadastrados no contexto da empresa no Identity poderão utilizá-lo para autenticar-se no *site*/serviço.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)

 - Se o novo aplicativo criado pelo administrador já estiver disponível no Launchpad do usuário, avance para o Passo 2.

 - Caso o administrador ainda não tenha [vinculado](#Identity|ComocriarumnovoaplicativodotipoPlugin-vincular) o aplicativo ao usuário, ou a algum dos grupos a que ele pertence, o usuário deve clicar no botão **Adicionar App** do Launchpad.

 - Será apresentada a lista de aplicativos navegáveis da empresa. O usuário deve buscar pelo aplicativo desejado (por exemplo, "JIRA Corporativo") e clicar no botão **Adicionar**.

 - O aplicativo será listado no Launchpad do usuário com a observação "Não Configurado".

![](/download/attachments/271409159/Adicionar%20App.gif?version=1&modificationDate=1486555647000&api=v2)

 - Clique sobre o botão em forma de engrenagem no canto do ícone do aplicativo para exibir a barra lateral de propriedades.

![](/download/attachments/271409159/001_08_02.png?version=1&modificationDate=1486552404000&api=v2)

 - Na barra lateral exibida, informe o login e senha de acesso ao *site* configurado no aplicativo e clique no botão **Salvar**.

 - Clique no botão **Esconder**, no canto esquerdo da barra lateral, para retornar ao Launchpad.

![](/download/attachments/271409159/002_08_02.png?version=1&modificationDate=1486552455000&api=v2)

 - Por fim, clique sobre o ícone do aplicativo no Launchpad para acessá-lo. Uma nova aba será aberta no navegador e as credenciais informadas no aplicativo serão injetadas no formulário de acesso ao serviço (neste exemplo, o JIRA).

 - Caso o navegador ainda não possua a extensão do Fluig Identity instalada, um alerta será apresentado orientando o usuário a realizar a instalação. Uma vez concluído esse procedimento, o aplicativo deve ser acessado novamente.

![](/download/attachments/271409159/Adicionar%20extens%C3%A3o.gif?version=1&modificationDate=1486555291000&api=v2)

**Instalação da extensão do Fluig Identity para Google Chrome. A extensão também está disponível para Internet Explorer e Mozilla Firefox.**

****

 - No Google Chrome, especificamente, pode ser exibida uma janela de confirmação como a mostrada abaixo. Caso isso ocorra, deve ser selecionada a opção **Sair**, para que o navegador saia da tela de login e acesse o serviço.

![](/download/attachments/271409159/005_08_02.png?version=1&modificationDate=1486552915000&api=v2)

**Clique no botão Sair, caso uma janela de confirmação como a acima seja apresentada pelo navegador Google Chrome.**

****

# JavaScript customizado

---

Atenção

A partir da versão 1.3.4 do plugin TOTVS Identity não é permitida a utilização de JavaScript customizado. 

Em aplicativos do tipo Plugin, caso a extensão do Identity não seja capaz de incluir as credenciais apenas com os campos HTML informados na [configuração do aplicativo](#Identity|ComocriarumnovoaplicativodotipoPlugin-config), em virtude da forma como a página de login foi desenvolvida, pode ser criado um JavaScript customizado para injetar os dados de acesso no formulário de autenticação.

Quando um código for informado no campo **Javascript Customizado** da aba **Entrar** nas configurações do aplicativo, os demais campos serão ignorados.

![](/download/attachments/271409159/008_08_02.png?version=1&modificationDate=1486558608000&api=v2)

**O código customizado deve ser incluído nas configurações do aplicativo, no campo Javascript Customizado**

Embora não exista um JavaScript padrão, capaz de funcionar com qualquer página de login da *Web*, o exemplo abaixo pode ser utilizado como base para o desenvolvimento. Ele se aplica a formulários que usam botões *submit* para confirmar o acesso.

**Exemplo genérico de JavaScript customizado**

[?](#)

| `// Preencha o formulário com as credenciais do usuário` `document.getElementById(``'username'``).value =``"$(username)"``;``document.getElementById(``'password'``).value =``"$(password)"``;` `// Localize e ative o botão "Entrar"(Submit) do formulário``var` `form = document.getElementsByName(``'logonForm'``)[0];``var` `elements = form.elements;``for` `(i = 0; i `{````var` `field_type = elements[i].type.toLowerCase();````if``(field_type ==``"submit"``)````{````elements[i].click();````}``}` |
| --- |

# Acessando aplicativos do tipo Plugin no Mobile

O **TOTVS Identity** é compatível com os *browsers* mobile e pode ser acessado a partir do seu smartphone, no entanto, o aplicativo do tipo plugin no Identity depende de uma extensão para navegador, que atualmente é desenvolvida apenas para os navegadores Chrome e Firefox. Infelizmente, estes navegadores possuem algumas limitações na versão mobile que não permitem a execução das extensões como em um navegador desktop.

Se você não usa aplicativos plugin, não terá nenhum problema com os navegadores comuns, mas se você usa, não se preocupe, você poderá acessar o **TOTVS Identity** através do [Yandex browser with protect](https://play.google.com/store/apps/details?id=com.yandex.browser). Este browser mobile se comporta como o *browser* Chrome desktop e você poderá instalar a extensão e usar os aplicativos plugin normalmente.


<!-- anchors: Identity|ComocriarumnovoaplicativodotipoPlugin-FalandodeaplicativodotipoPlugin..., Identity|ComocriarumnovoaplicativodotipoPlugin-Obterdadosparacriaçãodoaplicativodados, dados, dados-872616687, dados-872616688, dados-872616689, dados-872616690, dados-872616691, dados-872616692, Identity|ComocriarumnovoaplicativodotipoPlugin-CriaçãodeumnovoaplicativoPlugin, plugin, plugin-872616687, plugin-872616688, plugin-872616689, plugin-872616690, plugin-872616691, Identity|ComocriarumnovoaplicativodotipoPlugin-Utilizaçãodoaplicativo, utilização, utilização-872616687, utilização-872616688, utilização-872616689, utilização-872616690, utilização-872616691, Identity|ComocriarumnovoaplicativodotipoPlugin-JavaScriptcustomizado, highlighter_251023, Identity|ComocriarumnovoaplicativodotipoPlugin-AcessandoaplicativosdotipoPluginnoMobile -->
