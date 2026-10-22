---
title: "Identity | Configuração do Microsoft Entra ID como Provedor no TOTVS Identity"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=842293735"
scraped_at: "2026-03-09T04:35:50.005Z"
depth: 3
anchors: 28
child_links: 30
---

# Identity | Configuração do Microsoft Entra ID como Provedor no TOTVS Identity

# Falando de configuração do Microsoft Entra ID como Provedor no TOTVS Identity...

---

Essa documentação reúne os passos para a configuração do Microsoft Entra ID como provedor no Identity, que consiste na criação do aplicativo no Microsoft Entra ID, preenchimento dos campos para cadastro do provedor no Identity e então a configuração da autenticação do aplicativo novamente no Microsoft Entra ID.

## Criação do aplicativo no Microsoft Entra ID

---

Para a criação do aplicativo, acesse o Microsoft Entra ID e siga os passos abaixo:

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)

Dentro do Microsoft Entra ID, acesse a opção de **Aplicativos Empresariais,** crie um novo aplicativo que não está na galeria, adicione o Nome para identificar que é o TOTVS Identity e clique em **Criar**.

![](/download/attachments/842293735/image21.png?version=2&modificationDate=1715340754293&api=v2)

Depois selecione quem poderá usar a aplicação, isso fica a critério do administrador, clique em** Registrar**:

![](/download/attachments/842293735/image12.png?version=2&modificationDate=1715340750580&api=v2)

Será exibida a mensagem de aplicativo criado:

![](/download/attachments/842293735/image16.png?version=2&modificationDate=1715340752020&api=v2)

Depois disto, abra o aplicativo criado e copie o valor de **ID do aplicativo**:

![](/download/attachments/842293735/image20.png?version=2&modificationDate=1715340753853&api=v2)

## Configuração do provedor no TOTVS Identity

---

Para realizar o cadastro de um provedor genérido no TOTVS Identity, siga os passos abaixo:

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)
- [Passo 6](#)
- [Passo 7](#)
- [Passo 8](#)
- [Passo 9](#)
- [Passo 10](#)
- [Passo 11](#)
- [Passo 12](#)
- [Passo 13](#)
- [Passo 14](#)

Acesse o menu Segurança > **Cadastro de provedor**, clique em Cadastrar novo provedor e selecione a opção **Generic**:

![](/download/attachments/842293735/image13.png?version=2&modificationDate=1715340750953&api=v2)

Preencha o nome do provedor com o nome desejado, lembre-se que isso será exibido na tela de login, por exemplo, se você colocar o nome ‘Azure’, será exibido um botão ‘Logar com Azure’ na tela de login. Avance a configuração e no campo Identificador do aplicativo no Provedor, preencha com o valor de ID do aplicativo que foi criado no Microsoft:

![](/download/attachments/842293735/image1.png?version=2&modificationDate=1715340848897&api=v2)

![](/download/attachments/842293735/image22.png?version=2&modificationDate=1715340754650&api=v2)

No Microsoft, clique em **Credenciais de cliente **para cadastrar um ClientSecret:

![](/download/attachments/842293735/image6.png?version=2&modificationDate=1715340757683&api=v2)

Em seguida clique em**Novo segredo do cliente. **Preencha com a descrição que desejar e selecione a expiração, o máximo possível é 24 meses. Lembre-se de que será necessário trocar a chave na configuração do Identity quando a mesma expirar. Clique em **Adicionar**e copie o valor do secret gerado, importante que ao sair dessa tela e voltar, a informação do valor não será mais exibida em tela.

![](/download/attachments/842293735/image7.png?version=2&modificationDate=1715340758123&api=v2)

Cole o valor do secret no campo **Senha do Aplicativo**no Provedor na configuração do Identity e preencha o campo de**Escopos**conforme orientado pelo seu provedor. Os escopos mais comuns são: openid, profile e email. Marque o parâmetro **Auto Cadastro**para que os usuários sejam criados no momento em que tentarem o login a partir do Microsoft.

![](/download/attachments/842293735/image15.png?version=2&modificationDate=1715340751617&api=v2)

Na tela seguinte, selecione o Tipo de protocolo OIDC e o GrantType Authorize e clique em **Avançar**:

![](/download/attachments/842293735/image8.png?version=2&modificationDate=1715340758487&api=v2)

Volte ao aplicativo criado no Microsoft Entra ID e clique em **Pontos de extremidade**:

![](/download/attachments/842293735/image23.png?version=2&modificationDate=1715340755053&api=v2)

Copie o valor do campo **Ponto de extremidade de autorização OAuth 2.0 (v2)** e cole no campo **Auth URL**:

![](/download/attachments/842293735/image9.png?version=2&modificationDate=1715340758857&api=v2)

Faça o mesmo com o parâmetro **Ponto de extremidade de token OAuth 2.0 (v2) **e cole no campo **Token URI do Identity**.

Siga os passos abaixo para obter e configurar o endereço JWKS:

 1. No painel do Microsoft Azure, copie a URL do campo **Documento de metadados do OpenID Connect**.

 2. **Abra** essa URL em uma nova aba do seu navegador.

 3. Na página de texto (JSON) que aparecer, localize o parâmetro `"jwks_uri"` e **copie somente o valor da URL dele**.

   *O valor será algo parecido com: `https://login.microsoftonline.com/seu-tenant-id/discovery/v2.0/keys`*

 4. Agora, você irá **modificar a URL** que acabou de copiar. Ao final dela, **acrescente** o texto **`?appId=`** seguido pelo seu **Client ID** (ID do Aplicativo).

 5. **Cole** a URL completa e modificada no campo **URI com os certificados do Provedor (JWKS)** da plataforma Identity.**Exemplo Prático:**

   - **URL copiada do `jwks_uri`:** `https://login.microsoftonline.com/00000xxx-xxx0000-0000-0x0x0x0x/discovery/v2.0/keys`

   - **Seu Client ID:** `000xxx-x00-000-000x-0x0xxx000`

   - **URL final (para colar no campo JWKS):** `https://login.microsoftonline.com/00000xxx-xxx0000-0000-0x0x0x0x/discovery/v2.0/keys?appId=000xxx-x00-000-000x-0x0xxx000`

![](/download/attachments/842293735/image18.png?version=2&modificationDate=1715340753010&api=v2)

Clique em **Avançar **na configuração do Identity e no bloco de** Informações de busca de autenticação **preencha o campo **Parâmetro do provedor **que contém o ID Token ou o Access Token com o valor ‘**id_token**’, esse valor pode mudar dependendo do provedor:

![](/download/attachments/842293735/image10.png?version=2&modificationDate=1715340759207&api=v2)

Desça a tela até o campo **Variável com nome completo do usuário** e preencha com ‘**name**’, em seguida marque o campo** Identificador de nome completo**:

![](/download/attachments/842293735/image3.png?version=2&modificationDate=1715340756377&api=v2)

Nessa mesma tela, preencha o campo **E-mail do usuário**com o valor ‘**preferred_username**’ e marque o parâmetro **Code deve ser enviado por Form Param**, em seguida clique em **Avançar**.

![](/download/attachments/842293735/image11.png?version=2&modificationDate=1715340750033&api=v2)

Volte ao metadado do aplicativo do Microsoft Entra ID e copie o valor do campo **issuer**:

![](/download/attachments/842293735/image17.png?version=2&modificationDate=1715340752580&api=v2)

Cole esse valor no campo **Emissor do token padrão** da configuração no Identity, substituindo o valor **{tenantid}** pelo ID da sua organização no Microsoft Entra ID. Caso tenha dificuldade em encontrar essa informação, utilize a [documentação da própria Microsoft](https://learn.microsoft.com/en-us/entra/fundamentals/how-to-find-tenant) (em inglês).

Por fim, preencha o campo **Receptor do token padrão** com o Audience do provedor, neste caso é o ID da aplicação do Microsoft Entra ID e clique em **Salvar**:

![](/download/attachments/842293735/image14.png?version=2&modificationDate=1715340751313&api=v2)

Na tela de provedores cadastrados, clique em **Copiar URL **no provedor que foi cadastrado:

![](/download/attachments/842293735/image5.png?version=2&modificationDate=1715340757220&api=v2)

Atenção!

No caso de edição do provedor, o campo **Alterar senha** só deve ser preenchido caso haja necessidade de alteração da senha do aplicativo no provedor do login social.

## Configuração da autenticação no Microsoft Entra ID

---

Volte a aplicação no Microsoft Entra ID e siga os passos abaixo:

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)

Clique em **URIs de Redirecionamento:**

![](/download/attachments/842293735/image4.png?version=2&modificationDate=1715340756847&api=v2)

Em seguida Adicione uma plataforma WEB e adicione a URL do Identity como URL de Redirecionamento, em seguida Salve as alterações:

![](/download/attachments/842293735/image19.png?version=2&modificationDate=1715340753440&api=v2)

![](/download/attachments/842293735/image2.png?version=2&modificationDate=1715340755997&api=v2)

Após isto, é necessário vincular os usuários dentro do Microsoft a este novo aplicativo TOTVS Identity, para que eles possam efetivamente fazer a autenticação no Identity.

## Documentações relacionadas

---

- [Identity | Provedores](/display/fluig/Identity+%7C+Provedores)
- [Microsoft - Como encontrar seu tenant ID (em Inglês)](https://learn.microsoft.com/en-us/entra/fundamentals/how-to-find-tenant)
- [Identity | Quais as diferenças entre configuração do Azure (Entra ID) como Azure AD e como Provedor de login genérico?](/pages/viewpage.action?pageId=908350424)


<!-- anchors: Identity|ConfiguraçãodoMicrosoftEntraIDcomoProvedornoTOTVSIdentity-FalandodeconfiguraçãodoMicrosoftEntraIDcomoProvedornoTOTVSIdentity..., Identity|ConfiguraçãodoMicrosoftEntraIDcomoProvedornoTOTVSIdentity-CriaçãodoaplicativonoMicrosoftEntraID, Microsoft, Microsoft-872616687, Microsoft-872616688, Microsoft-872616689, Identity|ConfiguraçãodoMicrosoftEntraIDcomoProvedornoTOTVSIdentity-ConfiguraçãodoprovedornoTOTVSIdentity, identity, identity-872616687, identity-872616688, identity-872616689, identity-872616690, identity-872616691, identity-872616692, identity-872616693, identity-872616694, identity-872616695, identity-1281313569, identity-1281313570, identity-1281313571, identity-1281313572, identity-1281313573, Identity|ConfiguraçãodoMicrosoftEntraIDcomoProvedornoTOTVSIdentity-ConfiguraçãodaautenticaçãonoMicrosoftEntraID, autenticacao, autenticacao-872616687, autenticacao-872616688, autenticacao-872616689, Identity|ConfiguraçãodoMicrosoftEntraIDcomoProvedornoTOTVSIdentity-Documentaçõesrelacionadas -->
