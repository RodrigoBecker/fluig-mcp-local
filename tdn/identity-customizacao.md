---
title: "Identity | Customização"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=273980170"
scraped_at: "2026-03-09T04:38:56.149Z"
depth: 3
anchors: 9
child_links: 38
---

# Identity | Customização

# Falando de customização...

---

Essa página oferece opções para personalizar a aparência do contexto através da alteração da imagem de logo exibida no topo da página e na tela de login, bem como a inclusão de campos customizados no perfil dos usuários cadastrados. Para desenvolvedores, são disponibilizados métodos na [API REST](https://app.fluigidentity.com/rest/swagger-ui/index.html#!/companies) do TOTVS Identity para criar, atualizar e consultar campos customizados.

Se o dado a ser inserido no campo customizado for um dado pessoal ou sensível, é recomendável sinalizá-lo como pessoal, assegurando assim o sigilo da informação e a proteção de acesso a dados pessoais de forma não autorizada, seja acidentalmente ou de forma ilícita.

## Logo da empresa

---

### Alterar logo da empresa

---

**01.** Acione o ícone **Configurações** ![](/download/attachments/273980170/flaticon-settings.png?version=1&modificationDate=1583865864373&api=v2) no canto superior direito e selecione a opção **Customização**.

**02.** No recurso **Logo da empresa**, clique no botão **Selecionar arquivo**.

**03**. Na tela aberta, clique em **Selecionar arquivo** e navegue para localizar a imagem desejada, ou arraste a imagem e solte na área indicada.

A imagem deve estar de acordo com as especificações informadas em tela, em relação ao formato suportado (png) e o tamanho máximo (1MB). O tamanho da imagem no cabeçalho é de 200 x 60 pixels.

Assim que a imagem for apresentada em tela, é possível configurar a visualização dela no Identity (rotacionar, espelhar horizontal ou verticalmente, além de selecionar a parte que deve ser apresentada). 

**04.**Clique em **Salvar**para alterar a imagem de logo.

Após a alteração, podem demorar alguns minutos até que a imagem seja carregada no *header* (ao lado esquerdo do menu superior).

****

### Alterar logo da tela de login

---

**01.** Acione o ícone **Configurações** ![](/download/attachments/273980170/flaticon-settings.png?version=1&modificationDate=1583865864373&api=v2) no canto superior direito e selecione a opção **Customização**.

**02.** No recurso **Logo da empresa tela de login**, clique no botão **Selecionar arquivo**.

**03**. Na tela aberta, clique em **Selecionar arquivo** e navegue para localizar a imagem desejada, ou arraste a imagem e solte na área indicada.

A imagem deve estar de acordo com as especificações informadas em tela, em relação ao formato suportado (png) e o tamanho máximo (1MB). O tamanho da imagem é de 50 x 50 pixels.

Assim que a imagem for apresentada em tela, é possível configurar a visualização dela no Identity (rotacionar, espelhar horizontal ou verticalmente, além de selecionar a parte que deve ser apresentada). 

**04.**Clique em **Salvar**para alterar a imagem de logo.

Após a alteração, podem demorar alguns minutos até que a imagem seja carregada na tela de login (ao lado do nome da empresa).

## Campos customizados

---

### Criar campos customizados

---

****

        Your browser does not support the HTML5 video element

**01.** Acione o ícone **Configurações** ![](/download/attachments/273980170/flaticon-settings.png?version=1&modificationDate=1583865864373&api=v2) no canto superior direito e selecione a opção **Customização**.

**02.** Clique no recurso **Campos customizados**.

**03.** Acione o botão **Adicionar campo** para incluir um campo customizado no perfil dos usuários.

**04.** Na aba **Configuração**, informe os dados do novo campo.

**Nome do campo**
O nome representa a descrição do conteúdo do campo nas páginas onde o perfil do usuário é exibido e não pode ser alterado após a criação.

**Tipo do campo**
Tipo de campo que deve ser apresentado para preenchimento. As opções disponíveis são:

- **Texto**: qualquer tipo de texto. 
- **Número**: números decimais.
- **Data**: datas do calendário.
- **Lista**: lista de opções para seleção.

→ Quando o tipo de campo for **Lista**, será necessário informar as opções disponíveis para seleção. Clique em **Adicionar opções**![](/download/attachments/273980170/flaticon-add-plus.png?version=1&modificationDate=1726692341533&api=v2) ou em **Remover**![](/download/attachments/273980170/flaticon-trash.png?version=1&modificationDate=1576603533360&api=v2) para configurar as opções de seleção do campo.

**Tornar obrigatório para o cadastro de usuários.**Quando marcado, determina que o preenchimento do campo é obrigatório.

**Tornar visível apenas através da API REST. Não irá ser exibido ao usuário.**Quando marcado, determina que o campo não será exibido em tela durante o cadastro do usuário, nem no perfil. O campo poderá ser preenchido ou consultado apenas através da [API REST](https://app.fluigidentity.com/rest/swagger-ui/index.html#%21/companies).

**05.** Na aba **Dados pessoais**, inclua as informações de privacidade do campo, caso necessário.

Nota:

Com a configuração de dados pessoais, o campo é adicionado à [listagem de dados pessoais](/display/fluig/Identity+%7C+Dados+e+privacidade) do Identity. 

A configuração de Dados pessoais deve ser realizada para atender à regulamentação da **Lei Geral de Proteção de Dados Pessoais** (**LGPD** ou **LGPDP**) na organização. Para mais  esclarecimentos sobre a atuação da organização mediante a conduta LGPD, acesse o [guia da LGPD no site da TOTVS](https://espacolegislacao.totvs.com/lgpd/).

**Tipo do dado**Permite selecionar um tipo de dado que será marcado como sensível ou oculto.
Os tipos disponíveis são: Nome, E-mail, CPF, RG, Carteira de habilitação, Carteira de trabalho, Título de eleitor, Passaporte ou outros, dependendo do tipo de componente para o qual a privacidade está sendo configurada.

**É um dado sensível? **
Quando marcada como Sim, o dado é considerado sensível.

Nota:

É considerado sensível todo dado de origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização de caráter religioso, filosófico ou político, dado referente a saúde ou à vida sexual, dado genético ou biométrico, quando vinculado a uma pessoa natural.

**Classificação e justificativa**Especifica para que o dado está sendo solicitado e para quais fins será utilizado.

- **Classificação**: A classificação permite selecionar qual dos motivos gerou a necessidade de configuração da privacidade dos dados.Os tipos de classificação disponíveis são: Execução de contrato, Obrigação Legal, Consentimento, Execução de políticas públicas, Estudo por órgão de pesquisa, Exercício regular de direito, Para a proteção da vida, Para tutela de saúde, Interesse legítimo e Proteção de crédito.
- **Justificativa: **Permite informar uma justificativa em texto, do motivo pelo qual o dado é solicitado e para que ele é utilizado. Para inserir numa nova classificação e sua justificativa, acione o botão **Adicionar **, localizado abaixo de **Classificação e justificativa**.Para remover, acione o botão **Remover**, localizado abaixo da respectiva classificação e justificativa.

**06.** Após incluir as informações, clique em **Salvar**.

Os campos customizados serão exibidos nas páginas de gerenciamentos dos usuários e durante a criação de novas contas. Para mais detalhes, consulte a documentação [Identity | Usuários](/pages/viewpage.action?pageId=311633463).

Atenção

Após a criação do campo customizado, não é possível editar seu nome e tipo.

### Configurar privacidade do campo customizado 

---

**01.** Acione o ícone **Configurações** ![](/download/attachments/273980170/flaticon-settings.png?version=1&modificationDate=1583865864373&api=v2) no canto superior direito e selecione a opção **Customização**.

**02.** Clique no recurso **Campos customizados**.

**03**. Localize na lista o recurso que deve receber a configuração e clique em **Adicionar dado sensível**.

Será aberta a tela para configuração da privacidade, já preenchida com o nome definido para o campo customizado. O nome e o tipo do campo não podem ser alterados.

Para mais detalhes sobre as informações solicitadas, procure por **Dados pessoais**nesta documentação (passo 05 do item anterior).

**04.** Preencha as informações solicitadas e clique em **Salvar**.

Com essa configuração, o campo é adicionado à [listagem de dados pessoais](/display/fluig/Identity+%7C+Dados+e+privacidade) do Identity. 

### Excluir campo customizado

---

**01.** Acionar o ícone ![](/download/attachments/273980170/flaticon-trash.png?version=1&modificationDate=1576603533360&api=v2)localizado ao lado do campo adicionado.

As configurações de privacidade informadas para o campo customizado serão removidas. Ao excluir esse dado, ele deixará de ser considerado pessoal e não será mais monitorado. Porém, todos os registros existentes sobre ele serão mantidos como histórico para auditoria.

### Visualizar campos customizados com configuração de privacidade

---

Ao definir os campos customizados com dados pessoais ou sensíveis, é possível visualizá-los por meio da tela [Dados e privacidade](/display/fluig/Identity+%7C+Dados+e+privacidade), na aba **Segurança**.


<!-- anchors: Identity|Customização-Falandodecustomização..., Identity|Customização-Logodaempresa, Identity|Customização-Alterarlogodaempresa, Identity|Customização-Alterarlogodateladelogin, Identity|Customização-Camposcustomizados, Identity|Customização-Criarcamposcustomizados, Identity|Customização-Configurarprivacidadedocampocustomizadoconfigurarprivacidade, Identity|Customização-Excluircampocustomizadoexcluirprivacidade, Identity|Customização-Visualizarcamposcustomizadoscomconfiguraçãodeprivacidade -->
