---
title: "Integração da plataforma com o Identity"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=73080143"
scraped_at: "2026-03-09T04:12:59.224Z"
depth: 2
anchors: 28
child_links: 63
---

# Integração da plataforma com o Identity

# Pré-requisitos

---

- Possuir o TOTVS Fluig Plataforma em**atualização 1.6.x ou superior** instalado e configurado conforme as orientações do [Guia de Instalação fluig](https://tdn.totvs.com/x/zAJbDw). O endereço de acesso à plataforma será solicitado durante a configuração da integração com o TOTVS Identity.

- Solicitar um contexto no Identity ao suporte, conforme as orientações da página [Criação de Conta no Identity](https://tdn.totvs.com/x/sAzMCg).

- Possuir uma empresa cadastrada no Fluig.

Tanto para o cadastro da empresa no Fluig quanto para a criação do contexto no Identity é necessário definir um administrador. O endereço de e-mail deste administrador deve ser o mesmo para ambos os casos.

- Caso já existam usuários cadastrados na empresa do Fluig que será sincronizada, **deve-se garantir que todos estes usuários** possuam um endereço de e-mail cadastrado e que este endereço seja válido e único, ou seja, não tenha sido usado no cadastro de outro usuário.

**oculto**

Esse procedimento foi repassado ao artigo [https://centraldeatendimento.fluig.com/hc/pt-br/articles/360024961374](https://centraldeatendimento.fluig.com/hc/pt-br/articles/360024961374) (Como integrar a plataforma ao Identity)

Caso seja feita alguma alteração, lembrar de repassar a esse artigo.

# Configurar a integração com o Identity

---

Importante!

Para realizar a integração com o Identity, recomendamos que o ambiente fluig esteja em HTTPS. Acesse nossa documentação e confira mais detalhes e informações sobre a [configuração HTTPS da plataforma.](https://tdn.totvs.com/x/vdMgFQ)

De posse dos dados de acesso ao contexto no Identity e um usuário administrador, é possível iniciar a integração com o Fluig.

**oculto**

Esse procedimento foi repassado ao artigo [https://centraldeatendimento.fluig.com/hc/pt-br/articles/360024961374](https://centraldeatendimento.fluig.com/hc/pt-br/articles/360024961374) (Como integrar a plataforma ao Identity)

Caso seja feita alguma alteração, lembrar de repassar a esse artigo.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)
- [Passo 6](#)

O primeiro procedimento da integração é preencher a URL de acesso ao Fluig no aplicativo Fluig do Identity.

 - Acessar o contexto criado no Identity, por exemplo, https://[suaempresa].fluigidentity.com, com as credenciais do administrador.

 - Acionar o menu **Aplicativos**.

 - Acionar **Fluig** na lista de aplicativos. É possível localizá-lo utilizando o campo Pesquisar no canto superior esquerdo.

 - Selecionar a aba **Entrar**.

 - Acionar **Editar** localizado no canto superior direito.

![](/download/attachments/73080143/Passo%201.gif?version=1&modificationDate=1657219231827&api=v2)

 - Informar o endereço de acesso ao Fluig no campo **Domínio**.

 - Ao final da URL de acesso deve ser incluído o caminho **/portal/idp**, por exemplo: [http://meufluig.com:8080/**portal/idp**.](http://ENDERECO_FLUIGPORTA)

 - Marcar a opção **Sincronizar login SAML com e-mail do AD** (Recomendado).

 - Acionar **Salvar** no final da página.

Ao acessar o aplicativo Fluig pelo Identity, o usuário será direcionado para o endereço informado neste campo (Domínio), portanto ele precisa ser preenchido com a URL da aplicação Fluig.

![](/download/attachments/73080143/Passo%202.JPG?version=3&modificationDate=1657914515187&api=v2)

Em seguida, deve-se copiar o token do aplicativo.

 - Selecionar a aba **Visão Geral**.

 - Acionar **Token de Configuração**.

 - Copiar o valor do token, pois será utilizado posteriormente para configuração da empresa no Fluig (Passo 5).

![](/download/attachments/73080143/Passo%203.gif?version=1&modificationDate=1657224535637&api=v2)

A partir de agora, a configuração será realizada no fluig.

 - Acessar o Fluig com o usuário **wcmadmin**.

 - Acessar o **Painel de Controle** → agrupador **WCM** → **Empresas**.

 - Assinalar a empresa desejada e acionar **Editar**.

Para cada contexto do Identity é suportada a integração com apenas uma empresa do Fluig.

![](/download/attachments/73080143/Passo%204.JPG?version=1&modificationDate=1657224860027&api=v2)

 - Acessar a aba **Autenticação**.

 - Assinalar a opção** **"**Deseja habilitar o acesso com Identity?**"

 - Informar a URL do contexto da empresa no Identity, por exemplo, [https://suaempresa.fluigidentity.com.](https://suaempresa.fluigidentity.com.)

 - Informar o token de configuração obtido no Passo 3.

![](/download/attachments/73080143/Passo%205.JPG?version=6&modificationDate=1657915128497&api=v2)

Integração entre o Fluig No-Code e Fluig Plataforma

Nesta página é possível habilitar o botão para ativação da integração entre o [Fluig No-Code e Fluig Plataforma](/download/attachments/73080143/Integra%C3%A7%C3%A3o%20Fluig%20No-Code%20e%20Fluig%20Plataforma.JPG?version=2&modificationDate=1719345563183&api=v2), caso o usuário tenha o pacote adquirido. Para saber mais a respeito desta integração, acesse a documentação sobre a [Ativação da oferta TOTVS Fluig No-Code.](https://tdn.totvs.com/x/YW10Ig) 

O usuário também poderá observar os [Parâmetros do Identity](/download/attachments/73080143/Parametros%20do%20Identity.JPG?version=1&modificationDate=1657226691087&api=v2) nesta mesma página.

 - Para garantir que os dados informados estão corretos e a conexão com o Identity está disponível, acionar **Ações** → **Testar conexão**.

 - Se a mensagem "Conexão com o servidor do Identity realizada com sucesso" for apresentada, a configuração está correta e pode ser concluída.

 - Acionar **Salvar**. A empresa exibirá o status "Habilitado" na coluna Identity da página Empresas.

E os usuários?

Após a integração, é possível [enviar os usuários](#IntegraçãodaplataformacomoIdentity-enviar) cadastrados no Fluig automaticamente para o contexto da empresa no Identity ou [adicioná-los manualmente](https://tdn.totvs.com/x/NyaTEg).

![](/download/attachments/73080143/Testar%20conex%C3%A3o.gif?version=1&modificationDate=1657282647227&api=v2)

**oculto**

****

# Enviar usuários do Fluig para o Identity

---

Para criar contas no Identity para usuários previamente existentes na empresa do Fluig, está disponível nas propriedades da empresa a opção **Enviar usuários**. Ao utilizar este recurso, as contas do usuário no Fluig e no Identity serão vinculadas automaticamente.

**oculto**

Esse procedimento foi repassado ao artigo [https://centraldeatendimento.fluig.com/hc/pt-br/articles/360024961374](https://centraldeatendimento.fluig.com/hc/pt-br/articles/360024961374) (Como integrar a plataforma ao Identity)

Caso seja feita alguma alteração, lembrar de repassar a esse artigo.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)

 - Acionar **Ações** → **Enviar usuários**.

     Condições de preenchimento do campo idp_id no banco de dados do TOTVS Fluig Plataforma

A rotina de integração das contas no Fluig e Identity funciona de acordo com as seguintes condições:

**01.** Se no banco de dados do Fluig, o registro do usuário já tiver o campo idp_id preenchido, ele não será sincronizado.

**02.** Se o idp_id não estiver preenchido, o usuário será enviado ao Identity:

**2.1** Caso o e-mail deste usuário já esteja cadastrado em uma conta no domínio do cliente no Identity, o seu ID é preenchido na coluna idp_id da tabela fdn_usertenant.

**2.2** Caso o e-mail deste usuário já esteja cadastrado em uma conta no Identity, mas atrelado a um outro domínio, ele também será adicionado ao domínio do cliente e o seu ID é preenchido na coluna idp_id da tabela fdn_usertenant.

**2.3** Se ele não estiver cadastrado em nenhum domínio, o usuário é criado no Identity, vinculado ao domínio do cliente e o seu ID é preenchido na coluna idp_id da tabela fdn_usertenant.

Uma vez utilizado o recurso Enviar usuários, é possível verificar quais contas foram efetivamente criadas e integradas no Identity através do *log* de envio.

 - Acionar **Ações** → **Exportar log de envio**.

![](/download/attachments/73080143/Exportar%20log.gif?version=1&modificationDate=1657282842830&api=v2)

 - Será gerado um arquivo CSV contendo as colunas **login**,**e-mail**,**data de envio** e o **status** da operação de criação do usuário.

![](/download/attachments/73080143/log_envio_usuarios.png?version=1&modificationDate=1498674108000&api=v2)

 - Os usuários enviados são automaticamente atrelados ao aplicativo Fluig no Identity.

![](/download/attachments/73080143/Passo%204..JPG?version=1&modificationDate=1657754861583&api=v2)

 - Quando o processo for terminado, os usuários enviados poderão acessar o Fluig pelo Identity.

 - A senha destes usuários no Identity será composta da seguinte forma: [primeiro nome com a primeira letra maiúscula]@123. Por exemplo:

**Nome do usuário:** John Steel

**Login no Identity:** [john.steel@empresa.com.br](mailto:john.steel@empresa.com.br)

**Senha no Identity:** John@123

 - Se um usuário enviado pelo Fluig possuir uma conta prévia no Identity, sua senha de acesso não será alterada.

 - Caso o primeiro nome do usuário possua 13 caracteres ou mais, a senha será criada usando apenas os 12 primeiros caracteres do nome + @123. Por exemplo, se o nome do usuário for Joriscleidson, a senha gerada será Joriscleidso@123.

 - Se o primeiro nome do usuário for muito curto, o Fluig irá adicionar números ao final da senha até atingir o tamanho mínimo exigido pelo Identity (8 caracteres). Por exemplo, se o nome da usuária for Lu, a senha gerada será Lu@12345.

 - Os usuários podem alterar a senha do Identity através da página Meu Perfil a qualquer momento.

Atenção!

Caso tenha alguma dúvida durante esse processo, verifique a documentação [IDE - Por que novos usuários não são provisionados no fluig?](/pages/viewpage.action?pageId=267788725).

****

# Múltiplas Empresas

---

Quando a instalação do TOTVS Fluig Plataforma possui múltiplas empresas e uma ou mais empresas tiverem a integração com o Identity habilitada, será feita a autenticação por contexto.

Na autenticação por contexto o usuário deverá acessar o Fluig através da URL com o código da empresa, por exemplo, **http://meufluig.com/portal/empresa1**, para que o Fluig identifique em qual empresa o usuário está se autenticando. Caso não seja informado o código da empresa na URL, será apresentada a página de seleção de empresa (vide abaixo) para que o usuário informe o código antes de prosseguir com a autenticação.

A URL de acesso com o código da empresa é válida somente para o acesso à plataforma Fluig, e não deve ser adicionada na configuração do aplicativo no TOTVS Identity.  No Identity permanece a URL normal, que é: [http://meufluig.com/portal/idp](http://meufluig.com/portal/idp).

![](/download/attachments/73080143/empresa%20nao%20encontrada.png?version=1&modificationDate=1439293722000&api=v2)

Em empresas cuja integração com o Identity está habilitada, o usuário será direcionado para a página de login do Identity. Nas demais a página padrão de login do Fluig será carregada para autenticação.

Aviso

Cada contexto do Identity suporta a integração com apenas uma empresa do Fluig. As demais empresas de uma mesma instalação do Fluig não poderão ser integradas ao mesmo contexto do Identity.

# Consultar token de integração

---

**Veja o vídeo**

Para consultar o token de integração, siga os passos abaixo:

**01**. Acessar o contexto criado no Identity, por exemplo, https://[suaempresa].[fluigidentity.com](http://fluigidentity.com), com as credenciais do administrador.

**02**. Acionar o menu **Aplicativos**.

**03**. Acionar **Fluig** na lista de aplicativos. É possível localizá-lo utilizando o campo Pesquisar no canto superior esquerdo.

**04**. Na aba **Visão geral**, acionar **Token de Configuração** e copiar o valor do token.

**oculto**

Página Aplicativos para widgets de Experiências de Uso

---

Após a configuração da integração entre Fluig e Identity, uma página chamada Aplicativos será automaticamente criada e incluída no menu principal do Fluig. Essa página contém os *widgets* de Experiência de Uso e Analytics dispostos no seguinte *layout*:

![](/download/attachments/73080143/layout.png?version=1&modificationDate=1480438221000&api=v2)

Os 3 primeiros *slots* destinam-se às *widgets* de **Acesso Centralizado**, exibidas nesta ordem: Geral, Favoritos e Mais Acessados. O *slot* inferior à esquerda destina-se ao*widget* de **Consulta Rápida** e o inferior à direita apresenta o *widget* **Analytics**.

- [Acesso centralizado](#)
- [Consulta rápida](#)
- [Analytics](#)

 - Os *widgets* de Acesso Centralizado serão automaticamente configurados caso um ERP já esteja integrado ao Identity.

![](/download/attachments/73080143/acesso%20centralizado%20-%20novo.png?version=1&modificationDate=1464797720000&api=v2)

 - Para configurar o *widget* de Consulta Rápida, é necessário editar a página e seguir os procedimentos descritos na documentação [Widgets de Experiência de Uso](https://tdn.totvs.com/x/UADvC).

![](/download/attachments/73080143/consulta%20r%C3%A1pida%20apresenta%C3%A7ao.png?version=1&modificationDate=1464797761000&api=v2)

 - Para configurar o *widget* Analytics, é necessário editar a página e seguir os procedimentos descritos na documentação [Widgets de Experiência de Uso](https://tdn.totvs.com/x/UADvC).

![](/download/attachments/73080143/analytics.png?version=1&modificationDate=1464797942000&api=v2)

 Desativar página Aplicativos e Experiências de Uso

Para que a página Aplicativos não seja exibida no menu principal do Fluig, deve-se acessar o **Painel de controle** → agrupador **WCM** → **Minhas Páginas**e excluir a página.****

Para desabilitar as Experiências de Uso, deve-se acessar as propriedades da empresa através do Painel de Controle do usuário wcmadmin (agrupador **WCM** → **Empresas** → **Editar** → **Cadastrar dados adicionais**) e alterar o valor do parâmetro USER-EXPERIENCE-ACTIVE para ***false**.*


<!-- anchors: IntegraçãodaplataformacomoIdentity-Pré-requisitos, IntegraçãodaplataformacomoIdentity-ConfiguraraintegraçãocomoIdentity, samples, samples-872616687, samples-872616688, samples-872616689, samples-872616690, samples-872616691, samples-872616692, IntegraçãodaplataformacomoIdentity-EnviarusuáriosdoFluigparaoIdentityenviar, enviar, enviar-872616687, expander-734488492, expander-control-734488492, expander-content-734488492, enviar-872616688, enviar-872616689, enviar-872616690, enviar-872616691, IntegraçãodaplataformacomoIdentity-MúltiplasEmpresas, IntegraçãodaplataformacomoIdentity-Consultartokendeintegração, A, A-1, A-2, A-3, expander-1897825586, expander-control-1897825586, expander-content-1897825586 -->
