---
title: "Modo de Provisionamento Fluig"
url: "https://tdn.totvs.com/display/public/fluig/Modo+de+Provisionamento+Fluig"
scraped_at: "2026-03-09T04:50:35.068Z"
depth: 3
anchors: 11
child_links: 60
---

# Modo de Provisionamento Fluig

# Índice

# Pré-requisitos

---

- O ambiente Fluig precisa estar em uma**atualização Waterdrop (1.6.4) ou superior**.
- É necessário que tenha sido realizada a configuração de [acesso externo](https://centraldeatendimento.fluig.com/hc/pt-br/articles/360026366992) no ambiente Fluig.

# Sobre o provisionamento Fluig

---

Provisionamento é o processo de criação automática de usuários do Identity em uma outra aplicação ou serviço. Existem tipos distintos de provisionamento disponíveis, como SCIM, Salesforce, Google e Fluig. Nesta página será abordada a configuração do Modo de Provisionamento Fluig.

Em uma [integração padrão](/pages/viewpage.action?pageId=73080143) entre fluig e Identity, o provisionamento do usuário é realizado apenas quando o indivíduo faz o primeiro acesso ao fluig através do Identity. Contudo, é possível configurar o aplicativo para que a criação no fluig seja feita ao atribuir o app para o usuário no Identity.

Por exemplo, ao criar o usuário João de Souza em [http://minhaempresa.fluigidentity.com](http://minhaempresa.fluigidentity.com), o administrador poderá atribuir a ele um aplicativo Fluig. Após a atribuição, o Identity enviará uma requisição via API ao Fluig para que o perfil do usuário João de Souza também seja criado automaticamente na plataforma.

Saiba como fazer atribuição de aplicativos [Gerenciar usuários](https://tdn.totvs.com/pages/viewpage.action?pageId=317306108#Gerenciarusuário-Atribuiraplicativosaousuário).

Atenção

Usuários com status **Convidado** ou **Desativado** não serão provisionados, apenas usuários com status **Ativo**. Para usuários convidados, o provisionamento ocorrerá no momento em que a conta for ativada.

# Configuração de provisionamento no aplicativo

---

Siga o passo a passo para habilitar o provisionamento de usuários em um aplicativo Fluig.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)

 - Acessar o Identity com o Administrador do contexto.

 - Acionar o menu **Aplicativos**.

 - Localizar o aplicativo **Fluig** e clicar sobre o nome para acessar as configurações.

 - Acionar a opção **Clonar** para criar um novo aplicativo com as mesmas propriedades do atual.

![](/download/attachments/235571102/Image%2002%2020%20012.png?version=1&modificationDate=1519237002000&api=v2)

 - Selecionar a aba **Provisionar**.

 - Marcar a opção **Habilitar Provisionamento**.

![](/download/attachments/235571102/Image%2002%2020%20013.png?version=2&modificationDate=1520450776000&api=v2)

 - No item **Modo de Provisionamento**, marcar a opção Fluig.

 - Em **Tipo de Autenticação**, marcar a opção OAuth 1.0a.

 - No campo **URL REST**, informar a URL da API de criação de usuários do Fluig, substituindo {dominio} pelo endereço de acesso ao Fluig:

[?](#)

| `{dominio}/api/public/wcm/user/create` |
| --- |

 - Em **Nome do usuário do Administrador do Domínio**, informar o e-mail de um usuário que seja administrador tanto do Fluig quanto do Identity. Este usuário deve existir em ambas as ferramentas.

 - Informar a senha desse mesmo administrador no campo **Senha do Administrador do Domínio**.

 - Definir uma senha padrão temporária para os usuários que serão criados através do provisionamento em **Senha Temporária do Usuário**.

![](/download/attachments/235571102/Image%2002%2020%20014.png?version=3&modificationDate=1554386794867&api=v2)

 - Para concluir, é preciso atribuir o aplicativo aos usuários. Para saber mais, acesse a documentação [Atribuir aplicativos aos usuários](https://www.google.com/url?q=https://tdn.totvs.com/pages/viewpage.action?pageId%3D203763890&sa=D&source=hangouts&ust=1586283909786000&usg=AFQjCNGKNwXza4hnzGyU6EkDKgl8GH2DlQ).

     ![](https://tdn.totvs.com/download/thumbnails/286221066/importante.png) 

**IMPORTANTE!**
Dependendo da quantidade de usuários que estejam na fila, o processo de provisionamento pode demorar a partir de 15 minutos para ser concluído.

Orientamos que o aplicativo seja configurado, para que seja mantido ativo somente a cópia do padrão navegável.

# Desativação de usuários

---

Quando o usuário for desassociado do aplicativo Fluig no Identity e não possuir pendências na plataforma, ele é desativado na plataforma.

Caso tenha alguma pendência, ele só é desativado do Identity. Nesse caso, o administrador da plataforma deverá fazer a transferência de pendências do usuário e desativá-lo manualmente.

Se o usuário for excluído do Identity, ele não é desativado na plataforma Fluig.

**Saiba mais**

Saiba como fazer a transferência de pendências e a desativação do usuário nos helps [Transferir Pendência](https://tdn.totvs.com/x/lIH5DQ) e [Usuários](https://tdn.totvs.com/x/c4H5DQ))


<!-- anchors: MododeProvisionamentoFluig-Índice, MododeProvisionamentoFluig-Pré-requisitos, MododeProvisionamentoFluig-SobreoprovisionamentoFluig, MododeProvisionamentoFluig-Configuraçãodeprovisionamentonoaplicativo, provisionamento, provisionamento-872616687, provisionamento-872616688, provisionamento-872616689, highlighter_260760, provisionamento-4, MododeProvisionamentoFluig-Desativaçãodeusuários -->
