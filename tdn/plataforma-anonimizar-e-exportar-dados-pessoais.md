---
title: "Plataforma ❙ Anonimizar e exportar dados pessoais"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=544205496"
scraped_at: "2026-03-09T04:05:21.127Z"
depth: 2
anchors: 5
child_links: 57
---

# Plataforma ❙ Anonimizar e exportar dados pessoais

# Falando de anonimizar e exportar dados pessoais...

---

Nessa tela são realizadas as buscas de dados pessoais, para que seja possível a exportação ou anonimização conforme necessidade.

A busca pode ser realizada por usuário ou por tipo de dado pessoal.

Nota:

Esse item se dá devido a implementação da regulamentação da **Lei Geral de Proteção de Dados Pessoais** (**LGPD** ou **LGPDP**) na organização.

Para mais informações e esclarecimentos de como a organização irá atuar mediante a conduta LGPD, [acesse aqui](https://tdn.totvs.com/x/jYupHg).

![](/download/attachments/544205496/anonimizar%20e%20exportar.png?version=4&modificationDate=1750250018913&api=v2)

## Buscar dado pessoal por usuário

---

**01.** No menu principal, clique em ![](/download/attachments/544205496/%C3%ADcone-painel-de-controle.png?version=1&modificationDate=1750248151570&api=v2) **Painel de controle**.

**02**. Localize o agrupador **Segurança e acesso**.

**03**. Clique em ![](/download/attachments/544205496/%C3%ADcone-anonimizar-exportar-dados.png?version=1&modificationDate=1750248081557&api=v2) **Anonimizar e exportar dados pessoais**.

**04.** Verifique que o campo **Buscar por** tem selecionada a opção **Usuário**.

**05**. No campo de texto referente à busca, digite o nome até que o usuário desejado seja apresentado.

A busca por usuário ocorre nos dados pessoais nativos registrados na plataforma (nome, sobrenome, nome completo e e-mail), ou nos dados adicionais do usuário.

Importante!

Apenas usuários ativos são buscados.

**06**. Pressione **ENTER** ou clique no usuário desejado.

Caso sejam encontrados dados pessoais referentes ao usuário em questão, a plataforma irá oferecer a opção de [anonimizar](#Plataforma❙Anonimizareexportardadospessoais-anonimizar)ou [exportar](#Plataforma❙Anonimizareexportardadospessoais-exportar) esses dados.

## Buscar dado pessoal por tipo de dado

---

**01.** No menu principal, clique em ![](/download/attachments/544205496/%C3%ADcone-painel-de-controle.png?version=1&modificationDate=1750248151570&api=v2) **Painel de controle**.

**02**. Localize o agrupador **Segurança e acesso**.

**03**. Clique em ![](/download/attachments/544205496/%C3%ADcone-anonimizar-exportar-dados.png?version=1&modificationDate=1750248081557&api=v2) **Anonimizar e exportar dados pessoais**.

**04.** Verifique que o campo**Buscar por** tem selecionada a opção **Tipo de dado**.

**05**. No campo referente ao tipo de dado, escolha o tipo de dado a ser buscado.

Os tipos disponíveis são: Nome, E-mail, CPF, RG, Carteira de habilitação, Carteira de trabalho, Título de eleitor, Passaporte ou outros.

Importante!

A busca por tipo de informação ocorre apenas nos dados pessoais registrados em formulários, ou seja, quando for realizada a busca por um dado do tipo CPF, por exemplo, não será localizado nos dados nativos ou adicionais do usuário.

**06**. No campo de texto referente à busca, digite o valor a ser buscado.

**07**. Pressione **ENTER** para buscar.

Caso sejam encontrados dados pessoais, a plataforma irá oferecer a opção de [anonimizar](#Plataforma❙Anonimizareexportardadospessoais-anonimizar) ou [exportar](#Plataforma❙Anonimizareexportardadospessoais-exportar) esses dados.

## Anonimizar os dados encontrados

---

Essa opção só será disponibilizada caso os dados pessoais encontrados tenham sido configurados para possibilitar a anonimização. Saiba mais na documentação de [Dados pessoais](https://tdn.totvs.com/x/OfheI#Dadospessoais-Adicionardadopessoal). ![](/plugins/servlet/confluence/placeholder/unknown-macro?name=tooltip&locale=en_US&version=2)

**01.** Realize a busca pelo [usuário](#Plataforma❙Anonimizareexportardadospessoais-buscausuario) ou [tipo de dado](#Plataforma❙Anonimizareexportardadospessoais-buscatipo).

**02**. Clique em **Anonimizar**.

Será apresentada uma mensagem de aviso que, ao anonimizar estes dados, eles não serão mais exibidos em seus respectivos cadastros e não será possível reverter esta ação. 

**03**. Na mensagem de confirmação, clique em **Anonimizar**.

Após a confirmação, a plataforma irá iniciar o processo de anonimização dos dados. Este procedimento pode demorar dependendo do volume de dados. ![](/plugins/servlet/confluence/placeholder/unknown-macro?name=tooltip&locale=en_US&version=2)

## Exportar os dados encontrados

---

Essa opção só será permitida caso a pasta "Meus documentos" esteja habilitada para os usuários da plataforma. Saiba mais na documentação de [Parâmetros](/pages/viewpage.action?pageId=234455426). ![](/plugins/servlet/confluence/placeholder/unknown-macro?name=tooltip&locale=en_US&version=2)

**01.** Realize a busca pelo [usuário](#Plataforma❙Anonimizareexportardadospessoais-buscausuario) ou [tipo de dado](#Plataforma❙Anonimizareexportardadospessoais-buscatipo).

**02**. Clique em **Exportar**.

Será apresentada uma mensagem para avisar que uma cópia contendo os dados encontrados na busca será criada na pasta Meus documentos do usuário que solicitou a exportação. 

**03**. Caso seja desejada a visualização das informações do log de auditoria dos dados, na mensagem de confirmação, marque a opção **Exportar com log**.

Para a geração do log, existem os seguintes requisitos:

- a licença para geração de log precisa estar ativa no [Servidor de Licenças (License Server)](/pages/viewpage.action?pageId=142805338);

- o ambiente precisa estar [configurado para geração dos eventos de auditoria](/pages/viewpage.action?pageId=544206930), ação realizada pelo usuário wcmadmin.

**04**. Na mensagem de confirmação, clique em **Exportar**. 

Após a confirmação, a plataforma irá iniciar o processo de exportação dos dados. Este procedimento pode demorar dependendo do volume de dados. Após a geração do arquivo, ele é disponibilizado na pasta Meus documentos do usuário que solicitou o relatório. Caso tenha sido selecionada a exportação com log, esse conteúdo é incluído no mesmo arquivo JSON.

Fique atento!

Esta documentação é válida a partir da atualização **Voyager (2.0)**. Se você utiliza uma atualização anterior, ela pode conter informações diferentes das quais você vê na sua plataforma.


<!-- anchors: Plataforma❙Anonimizareexportardadospessoais-Falandodeanonimizareexportardadospessoais..., Plataforma❙Anonimizareexportardadospessoais-Buscardadopessoalporusuário, Plataforma❙Anonimizareexportardadospessoais-Buscardadopessoalportipodedado, Plataforma❙Anonimizareexportardadospessoais-Anonimizarosdadosencontrados, Plataforma❙Anonimizareexportardadospessoais-Exportarosdadosencontrados -->
