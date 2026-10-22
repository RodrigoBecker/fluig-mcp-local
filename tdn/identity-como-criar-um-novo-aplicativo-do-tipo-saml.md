---
title: "Identity | Como criar um novo aplicativo do tipo SAML"
url: "https://tdn.totvs.com/display/public/fluig/Identity+%7C+Como+criar+um+novo+aplicativo+do+tipo+SAML"
scraped_at: "2026-03-09T05:23:00.342Z"
depth: 4
anchors: 12
child_links: 42
---

# Identity | Como criar um novo aplicativo do tipo SAML

# Falando de aplicativo SAML...

---

SAML (*Security Assertion Markup Language*) é um mecanismo de autenticação segura de padrão aberto, baseado em XML para a troca de dados de autenticação e autorização de acesso entre um provedor de identidade (*Identity Provider* ou IDP), que atesta e certifica a identidade dos usuários, e um provedor de serviços (*Service Provider* ou SP).

O Identity suporta o *Single Sign On* (SSO) baseado no SAML 2.0 e a autenticação pode ser iniciada tanto pelo SP quanto pelo IDP.

Dica

Saiba mais sobre o conceito de SAML, cenários de autenticação e veja exemplos de requisição e resposta SAML na página [Single Sign On no Identity via SAML](https://tdn.totvs.com/x/N4MFE).

# Obter dados para a criação do aplicativo

O primeiro passo para realizar a criação de um aplicativo do tipo SAML no Identity é verificar junto ao fornecedor da aplicação que deseja configurar se ela suporta este protocolo na versão 2.0. Alguns exemplos de serviços que suportam a autenticação SAML são o fluig, Zendesk, Box e GoodData.

Neste exemplo utilizaremos o Zendesk para configuração de um aplicativo SAML, portanto é necessário obter os dados de configuração junto ao serviço e realizar os [procedimentos indicados](https://support.zendesk.com/hc/pt-br/articles/203663676-Uso-do-SAML-para-single-sign-on-Professional-e-Enterprise-#topic_1ms_gf3_l3) por ele antes de iniciar a criação do aplicativo no Identity. Cada serviço é responsável por disponibilizar a própria documentação de configuração SAML.

Os dados obtidos para configuração do aplicativo SAML do Zendesk neste exemplo foram:

| Nome do campo | Exemplo |
| --- | --- |
| Nome do campo | Exemplo |
| Domínio | https://empresa.zendesk.com/access/ |
| URL do Consumidor de Asserções | https://empresa.zendesk.com/access/saml/ |
| Destinatário | https://empresa.zendesk.com/access/saml/ |
| Público | https://empresa.zendesk.com/access/saml/ |
| Nome do Emissor SP | https://empresa.zendesk.com/access/saml/ |
| Mapeamento ID de Usuário | E-mail do Usuário |
| Usar URL de Acesso Direto ao Aplicativo | Sim |

Mais informações sobre os campos de configuração de aplicativos SAML podem ser obtidas [abaixo](#Identity|ComocriarumnovoaplicativodotipoSAML-config).

# Criação de um novo aplicativo SAML

 De posse dos dados do serviço, acesse a empresa no Identity para dar continuidade à criação do aplicativo.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)

 - Acesse a empresa no Identity com um usuário administrador. Acione o menu **Aplicativos**.

![](/download/attachments/272170482/passo_1.png?version=2&modificationDate=1587580450297&api=v2)

 - Acione o botão **Novo aplicativo** e selecione a opção **Padrão**.

 - Na aba **Visão Geral**, informe o nome e uma descrição para o aplicativo, e acione **Salvar**. As demais propriedades do aplicativo, como Categoria e Logo poderão ser definidas futuramente.

 - Acesse a aba **Entrar** e acione o botão **Editar**.

![](/download/attachments/272170482/Criar%20App%20Zendesk.gif?version=2&modificationDate=1503086116000&api=v2)

 - Na aba **Entrar**o administrador deve incluir os dados fornecidos pelo serviço que está sendo cadastrado, neste caso, o Zendesk. Mais informações sobre os campos de configuração de aplicativos SAML podem ser obtidas [abaixo](#Identity|ComocriarumnovoaplicativodotipoSAML-config).

 - Por padrão, o ID da Entidade (*Entity* ID) enviado na requisição SAML será "Totvs Labs". Para enviar o URI do contexto como ID da Entidade, marcar a opção **ID da Entidade Específica do Domínio** (HTTP) ou **URL Completa** (HTTPS).

 - Assinalar os campos de acordo com cada necessidade:

**Sincronizar login SAML com e-mail do AD:**Ao assinalar este campo a sincronização do login SAML será realizado com o e-mail do Active Directory. 
**Enviar grupos pelo SAMLResponse:** Ao assinalar este campo, será enviada as tags "GroupId" e "Groupname" na requisição SAML, essas tags conterão os IDs e os nomes dos grupos que o usuário está associado no TOTVS Identity.

 - Ao final, clique em **Salvar**.

****

 - Uma vez configurado e salvo, o aplicativo pode ser disponibilizado no Launchpad dos usuários. 

 - Acesse os helps para verificar como incluir apps [para os usuários](https://tdn.totvs.com/x/xrrHEw#Configura%C3%A7%C3%B5esdeaplicativospadr%C3%A3o-Atribuiroaplicativoaosusu%C3%A1rios) ou [para os grupos](https://tdn.totvs.com/x/xrrHEw#Configura%C3%A7%C3%B5esdeaplicativospadr%C3%A3o-Atribuiroaplicativoaosgrupos). 

![](/download/attachments/272170482/Vincular%20aplicativo.gif?version=1&modificationDate=1490276755000&api=v2)

 - Ao invés de atribuir o novo aplicativo diretamente a usuários/grupos, o administrador pode apenas disponibilizá-lo publicamente para que os usuários interessados incluam o aplicativo em seus Launchpads manualmente. Para isso, basta habilitar a opção **Navegável** localizada na aba **Visão Geral** do aplicativo.

![](/download/attachments/272170482/passo_5.png?version=4&modificationDate=1490276925000&api=v2)

## Configurações de um aplicativo SAML

A tabela a seguir exibe o nome das principais propriedades de um arquivo SAML e os respectivos campos na tela de configuração de um aplicativo SAML no Identity.

| Propriedade | Campo | Descrição |
| --- | --- | --- |
| Propriedade | Campo | Descrição |
| SSOInitType | Tipo Inic SSO | Informa se o aplicativo será iniciado pelo Identity Provider (IDP-Initiated) ou pelo Service Provider (SP-Initiated) |
| NameIdFormat | Formato do Name ID | O formato da autenticação, que pode ser por endereço de e-mail, persistente (persistent), temporário (transient) ou indeterminado (unspecified). |
| Signed | Assinatura do Response | Informa se a requisição XML deve ser assinada com a chave privada do Identity. Por padrão, é sempre assinada. |
| Encrypted | Resposta Criptografia | Informa se o assertion gerado deve ser criptografado. Por padrão, não é criptografado. |
| Assertion Consumer Service URL | URL do Consumidor de Asserções | URL do provedor de serviços (SP) que irá receber o XML da requisição de autenticação enviada pelo Identity. |
| Recipient | Destinatário | Destinatário do assertion |
| Audience | Público | Receptor do assertion |

## Sincronização de login SAML com e-mail do Active Directory

Quando habilitada, a opção **Sincronizar login SAML com e-mail do AD**mantém o login do usuário no aplicativo SAML sincronizado com o e-mail cadastrado no Active Directory. Ou seja, caso o e-mail seja alterado no AD pelo administrador, esta mudança será sincronizada com o Identity através do [SmartSync](https://tdn.totvs.com/x/VIs0DQ) e refletida tanto no perfil do usuário quanto no login do aplicativo SAML.

Na edição das configurações de entrada de um aplicativo, também é possível alterar o nome das propriedades padrão, que são nome, sobrenome e email (conforme destacado na figura a seguir) e essas alterações refletem no SAMLRequest gerado ao se logar neste aplicativo.

![](/download/attachments/272170482/image2023-5-26_12-28-49.png?version=1&modificationDate=1685114933423&api=v2)

# Utilização do aplicativo

Após a criação do aplicativo, os usuários cadastrados no contexto da empresa no Identity poderão utilizá-lo para autenticar-se no *site*/serviço. Se o novo aplicativo criado pelo administrador já estiver disponível no Launchpad do usuário, basta clicar sobre ele para acessar o serviço.

Caso o administrador ainda não tenha vinculado o aplicativo ao usuário, ou a algum dos grupos a que ele pertence, o usuário deve clicar no botão **Adicionar App** do Launchpad. Será apresentada a lista de aplicativos navegáveis da empresa. O usuário deve buscar pelo aplicativo desejado (por exemplo, "Zendesk SAML") e clicar no botão **Adicionar**.

![](/download/attachments/272170482/Adicionar%20aplicativo.gif?version=1&modificationDate=1490284314000&api=v2)

Ao contrário de aplicativos do [tipo Plugin](https://tdn.totvs.com/x/B2AtE), aplicativos do tipo SAML não exigem que o usuário inclua suas credenciais nas configurações do aplicativo ou baixem o *plugin* do Identity para utilizá-lo.


<!-- anchors: Identity|ComocriarumnovoaplicativodotipoSAML-FalandodeaplicativoSAML..., Identity|ComocriarumnovoaplicativodotipoSAML-Obterdadosparaacriaçãodoaplicativo, Identity|ComocriarumnovoaplicativodotipoSAML-CriaçãodeumnovoaplicativoSAML, saml, saml-872616687, saml-872616688, saml-872616689, saml-872616690, saml-872616691, Identity|ComocriarumnovoaplicativodotipoSAML-ConfiguraçõesdeumaplicativoSAMLconfig, Identity|ComocriarumnovoaplicativodotipoSAML-SincronizaçãodeloginSAMLcome-maildoActiveDirectory, Identity|ComocriarumnovoaplicativodotipoSAML-Utilizaçãodoaplicativo -->
