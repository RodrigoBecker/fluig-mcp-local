---
title: "Identity | Aplicativos GoodData"
url: "https://tdn.totvs.com/display/public/fluig/Identity+%7C+Aplicativos+GoodData"
scraped_at: "2026-03-09T03:49:59.472Z"
depth: 2
anchors: 40
child_links: 46
---

# Identity | Aplicativos GoodData

# Falando de aplicativos GoodData...

---

Aplicativos GoodData são uma categoria específica de aplicativo disponibilizada pelo Identity. Diferente dos aplicativos do tipo Padrão, que são genéricos e podem ser configurados com virtualmente qualquer serviço, os aplicativos GoodData são pré-configurados para esta aplicação. Para isso, foram definidos dois tipos de aplicativos GoodData: (1) Fluig Analytics e (2) TOTVS Analytics.

# Pré-requisitos

Para configurar um aplicativo GoodData no Identity, é necessário atentar-se aos seguintes requisitos:

- Obter o código de um projeto existente no [Fluig Analytics](https://analytics.fluig.com) ou [TOTVS Analytics](http://analytics.totvs.com.br).

Este código é fornecido no [*ticket* de criação do projeto](https://tdn.totvs.com/pages/viewpage.action?pageId=107381593) Analytics. Ele também pode ser obtido através da URL de acesso ao projeto no Fluig Analytics, conforme demonstrado [nesta FAQ](https://tdn.totvs.com/pages/viewpage.action?pageId=286211256).

- Para aplicativos do tipo Fluig Analytics, o usuário [analytics@fluig.com](mailto:analytics@fluig.com.) deve constar no painel de usuários do projeto com permissão Admin.

- Para aplicativos do tipo TOTVS Analytics, o usuário [gooddata@totvs.com.br](mailto:gooddata@totvs.com.br) deve constar no painel de usuários do projeto com permissão Admin.

# Novo aplicativo Fluig Analytics

O procedimento abaixo demonstra a criação de um novo aplicativo do tipo Fluig Analytics.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)

 - Acesse a empresa no Identity com um usuário administrador. Acione o menu **Aplicativos**.

![](/download/attachments/286207374/fluig_1.png?version=1&modificationDate=1502978851000&api=v2)

 - Acionar **Novo aplicativo** e selecionar o tipo **GoodData**.

![](/download/attachments/286207374/fluig_2.png?version=2&modificationDate=1502979120000&api=v2)

 - Na aba Configurações, selecionar o tipo de aplicativo **Fluig Analytics**.

![](/download/attachments/286207374/fluig_3.gif?version=7&modificationDate=1506511901000&api=v2)

 - Informar o código do projeto do Fluig Analytics.

 - Acionar **Validar informações**. O Identity dará início à verificação do código informado junto à GoodData.

A utilização do código de um projeto em mais de um aplicativo na mesma empresa do Identity não é suportada.

![](/download/attachments/286207374/fluig_5.png?version=4&modificationDate=1506511785000&api=v2)

 - Caso o código seja válido, será apresentada a mensagem "Projeto validado com sucesso" e o Identity irá preencher automaticamente os campos **Nome do aplicativo** e **Descrição** com as informações do projeto.

 - O administrador pode alterar o nome e descrição do aplicativo, caso deseje.

 - Acionar **Salvar**.

Importante

Após a criação do aplicativo, o administrador deve abrir um ticket para o [Suporte Identity](https://suporte.totvs.com/portal/p/10098/suporte-fluig-home) para que seja habilitada a integração SSO (Single Sign On) entre o projeto Fluig Analytics e o contexto da empresa no Identity. Apenas após este procedimento será possível vincular usuários, grupos e acessar o projeto através do Identity. Saiba mais em [Configurações](#Identity|AplicativosGoodData-config).

![](/download/attachments/286207374/fluig_6.png?version=3&modificationDate=1505499242000&api=v2)

 O Código do projeto informado é inválido

Caso o código do projeto não seja válido, o administrador deve verificar se o código foi preenchido corretamente, se o projeto não foi excluído do Analytics e se todos os [pré-requisitos](#Identity|AplicativosGoodData-requisitos) de configuração foram atendidos.

# Novo aplicativo TOTVS Analytics

O procedimento abaixo demonstra a criação de um novo aplicativo do tipo TOTVS Analytics.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)

 - Acesse a empresa no Identity com um usuário administrador. Acione o menu **Aplicativos**.

![](/download/attachments/286207374/fluig_1.png?version=1&modificationDate=1502978851000&api=v2)

 - Acionar **Novo aplicativo** e selecionar o tipo **GoodData**.

![](/download/attachments/286207374/fluig_2.png?version=2&modificationDate=1502979120000&api=v2)

 - Na aba Configurações, selecionar o tipo de aplicativo **TOTVS Analytics**.

![](/download/attachments/286207374/totvs_3.gif?version=4&modificationDate=1506512124000&api=v2)

 - Informar o código do projeto do TOTVS Analytics.

 - Acionar **Validar informações**. O Identity dará início à verificação do código informado junto à GoodData.

A utilização do código de um projeto em mais de um aplicativo na mesma empresa do Identity não é suportada.

![](/download/attachments/286207374/totvs_4.png?version=4&modificationDate=1506512134000&api=v2)

 - Caso o código seja válido, será apresentada a mensagem "Projeto validado com sucesso" e o Identity irá preencher automaticamente os campos **Nome do aplicativo** e **Descrição** com as informações do projeto.

 - O administrador pode alterar o nome e descrição do aplicativo, caso deseje.

 - Acionar **Salvar**.

Importante

Após a criação do aplicativo, o administrador deve abrir um ticket para o [Suporte Identity](https://suporte.totvs.com/portal/p/10098/suporte-fluig-home) para que seja habilitada a integração SSO (Single Sign On) entre o projeto TOTVS Analytics e o contexto da empresa no Identity. Apenas após este procedimento será possível vincular usuários, grupos e acessar o projeto através do Identity. Saiba mais em [Configurações](#Identity|AplicativosGoodData-config).

![](/download/attachments/286207374/totvs_5.png?version=3&modificationDate=1505500798000&api=v2)

 O Código do projeto informado é inválido

Caso o código do projeto não seja válido, o administrador deve verificar se o código foi preenchido corretamente, se o projeto não foi excluído do Analytics e se todos os [pré-requisitos](#Identity|AplicativosGoodData-requisitos) de configuração foram atendidos.

# Configurações

Uma vez criado o aplicativo do tipo GoodData, a primeira aba exibida ao administrador é a de configurações, onde são listadas as informações do projeto e opções adicionais de utilização do aplicativo.

**Baixar metadados IDP**

Os metadados do aplicativo são utilizados para realizar a autenticação SSO (*Single Sign On*) entre o Identity e a GoodData. Após criar o novo aplicativo, o administrador deve baixar os metadados do IDP e enviá-los via *ticket* para o [Suporte Identity](https://suporte.totvs.com/portal/p/10098/suporte-fluig-home) para que seja configurado o SSO.

**Mais informações**

Ao acionar esta opção são apresentadas informações adicionais sobre o aplicativo, como o código do aplicativo, URL de acesso direto e URL de *logout* direto.

**Permitir que usuários se associem ao aplicativo**

Ao acionar esta opção o aplicativo torna-se navegável, ou seja, pode ser adicionado diretamente pelos usuários aos seus respectivos Launchpads sem depender do administrador do contexto

# Usuários

Após a configuração do aplicativo com o projeto do Fluig Analytics ou TOTVS Analytics é possível atrelar usuários do Identity neste aplicativo para que uma conta correspondente seja criada automaticamente na GoodData.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Status de Sincronização](#)

 - Acesse a empresa no Identity com um usuário administrador. Acione o menu **Aplicativos**.

É possível pesquisar pelo aplicativo ou selecionar a opção **Aplicativo GoodData** no filtro para visualizar apenas os aplicativos do tipo GoodData.

![](/download/attachments/286207374/usuarios_1.gif?version=2&modificationDate=1506512664000&api=v2)

 - Acessar a aba **Usuários**.

![](/download/attachments/286207374/usuarios_2.png?version=3&modificationDate=1506512677000&api=v2)

 - Acionar **Adicionar usuários**. 

 - Será carregada a lista com os nomes dos usuários cadastrados neste contexto do Identity junto ao e-mail e status.

![](/download/attachments/286207374/usuarios_3.gif?version=2&modificationDate=1506514334000&api=v2)

 - Acionar o botão **Adicionar** localizado ao lado dos usuários que devem ser atrelados ao aplicativo.

 - O Identity irá solicitar ao Fluig/TOTVS Analytics a criação da conta deste usuário na GoodData e a associação dele ao projeto configurado no aplicativo. Usuários pré-existentes no projeto não são sincronizados com o Identity; todas as contas criadas a partir de aplicativos GoodData serão novas.

Usuários criados no Fluig/TOTVS Analytics através do Identity **só poderão acessar estes sistemas pelo aplicativo**.

![](/download/attachments/286207374/usuarios_4.gif?version=2&modificationDate=1506513316000&api=v2)

 - Na aba Usuários dos aplicativos do tipo GoodData são apresentados ao lado dos nomes, os status dos usuários em relação ao projeto na GoodData.

| Status | Descrição |
| --- | --- |
| Sincronizado | O usuário foi criado na GoodData e associado ao projeto. |
| Processando | O usuário foi adicionado ao aplicativo e uma solicitação para a criação do usuário e associação ao projeto foi enviada à GoodData. |
| Removido | O usuário foi removido do aplicativo e uma solicitação para desassociá-lo do projeto foi enviada à GoodData. A conta do usuário não é excluída do Fluig/TOTVS Analytics. |
| Erro | Não foi possível criar o usuário na GoodData. |

Usuário desativado ou excluído da empresa?

Ao desativar um usuário da empresa no Identity, a conta deste usuário no Fluig/TOTVS Analytics não é excluída, apenas desassociada do(s) projeto(s).

Ao excluir um usuário da empresa no Identity, a conta deste usuário no Fluig/TOTVS Analytics também será excluída.

# Grupos

As propriedades de um aplicativo do tipo GoodData também contam com uma aba específica para o gerenciamento dos grupos atribuídos ao aplicativo. O comportamento é similar ao da página de Usuários, demonstrada acima.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)

 - Acesse a empresa no Identity com um usuário administrador. Acione o menu **Aplicativos**.

É possível pesquisar pelo aplicativo ou selecionar a opção **Aplicativo GoodData** no filtro para visualizar apenas os aplicativos do tipo GoodData.

![](/download/attachments/286207374/usuarios_1.gif?version=2&modificationDate=1506512664000&api=v2)

 - Acessar a aba **Grupos**.

![](/download/attachments/286207374/grupos_2.png?version=2&modificationDate=1506514679000&api=v2)

 - Acionar **Adicionar grupos**.

 - Será carregada a lista com os nomes dos grupos cadastrados neste contexto do Identity.

![](/download/attachments/286207374/grupos_3.gif?version=2&modificationDate=1506514641000&api=v2)

 - Acionar o botão **Adicionar** localizado ao lado dos grupos que devem ser atrelados ao aplicativo.

 - O Identity irá solicitar ao Fluig/TOTVS Analytics que seja realizada a criação da conta dos integrantes deste(s) grupo(s) na GoodData e a associação ao projeto configurado no aplicativo.

Usuários criados no Fluig/TOTVS Analytics através do Identity **só poderão acessar estes sistemas pelo aplicativo**.

![](/download/attachments/286207374/grupos_4.gif?version=2&modificationDate=1506515121000&api=v2)

 - Para visualizar os integrantes de um grupo associado ao aplicativo, acionar **Ver usuários**.

 - O administrador será redirecionado para a aba Usuários do aplicativo, onde o filtro será automaticamente preenchido com o nome do grupo selecionado.

Fique atento!

Os integrantes de um grupo associado a um aplicativo do tipo GoodData não podem ser removidos individualmente do aplicativo. É necessário desassociar o usuário em questão do grupo para que o vínculo com o aplicativo seja removido.

# Operações

É possível acompanhar o *status* das operações de sincronização dos usuários em relação ao projeto na GoodData, bem como visualizar as inconsistências que podem ter ocorrido e reprocessar a sincronização em caso de erro.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)

 - Acesse a empresa no Identity com um usuário administrador. Acione o menu **Aplicativos**.

É possível pesquisar pelo aplicativo ou selecionar a opção **Aplicativo GoodData** no filtro para visualizar apenas os aplicativos do tipo GoodData.

![](/download/attachments/286207374/usuarios_1.gif?version=2&modificationDate=1506512664000&api=v2)

 - Acessar a aba **Operações**.

![](/download/attachments/286207374/operacoes_2.png?version=3&modificationDate=1506511100000&api=v2)

 - Visualizar as operações realizadas.

É possível filtrar as operações por usuários ou por e-mail.

Além disso, também é possível filtrá-las pelo *status* – Processando, Erro, Pendente ou Sincronizado – e por operação realizada – Adição ou Remoção do usuário no aplicativo ou, ainda, Remoção do usuário da empresa.

Os possíveis *status* que as operações realizadas podem ter são detalhados [aqui](#Identity|AplicativosGoodData-status).

![](/download/attachments/286207374/operacoes_3.png?version=1&modificationDate=1506508226000&api=v2)

 - Para visualizar a inconsistência ocorrida na sincronização de um determinado usuário, acionar **Erro**, localizado na linha do usuário em questão.

 - Na janela exibida, acionar **Mostrar detalhes**.

![](/download/attachments/286207374/operacoes_4.gif?version=1&modificationDate=1506508835000&api=v2)

 - Para reprocessar a operação para um determinado usuário, acionar **Reprocessar**, localizado na linha do usuário em questão.

Somente é possível reprocessar uma operação se ela estiver com o status **Processando** ou **Erro**.

Ao reprocessar uma operação, uma nova solicitação de criação e associação do usuário ao projeto é enviada à GoodData.

![](/download/attachments/286207374/operacoes_5.gif?version=1&modificationDate=1506510387000&api=v2)

# Remover aplicativo do tipo GoodData

Ao remover um aplicativo do tipo GoodData, os usuários vinculados ao aplicativo diretamente ou através de grupos são desassociados do projeto Fluig/TOTVS Analytics configurado.

![](/download/attachments/286207374/remover_app.gif?version=4&modificationDate=1506515832000&api=v2)

# Múltiplos projetos

Usuários que estiverem vinculados a mais de um projeto Fluig/TOTVS Analytics, ao acessarem o aplicativo pelo Launchpad, não são direcionados necessariamente ao projeto configurado no aplicativo. Isso ocorre porque o comportamento definido pela GoodData é direcionar o usuário para o último projeto acessado e esta regra não pode ser alterada pelo Identity.

No primeiro acesso pelo aplicativo é apresentada uma lista com todos os projetos aos quais o usuário está vinculado para que ele possa selecionar qual deseja acessar.


<!-- anchors: Identity|AplicativosGoodData-FalandodeaplicativosGoodData..., Identity|AplicativosGoodData-Pré-requisitosrequisitos, Identity|AplicativosGoodData-NovoaplicativoFluigAnalytics, fluig, fluig-872616687, fluig-872616688, fluig-872616689, fluig-872616690, fluig-872616691, Identity|AplicativosGoodData-NovoaplicativoTOTVSAnalytics, totvs, totvs-872616687, totvs-872616688, totvs-872616689, totvs-872616690, totvs-872616691, Identity|AplicativosGoodData-Configuraçõesconfig, Identity|AplicativosGoodData-Usuários, usuarios, usuarios-872616687, usuarios-872616688, usuarios-872616689, usuarios-872616690, usuarios-553806179, Identity|AplicativosGoodData-Grupos, grupos, grupos-872616687, grupos-872616688, grupos-872616689, grupos-872616690, grupos-872616691, Identity|AplicativosGoodData-Operações, operações, operações-872616687, operações-872616688, operações-872616689, operações-872616690, operações-872616691, Identity|AplicativosGoodData-RemoveraplicativodotipoGoodData, Identity|AplicativosGoodData-Múltiplosprojetos -->
