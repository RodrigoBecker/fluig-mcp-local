---
title: "Identity | Atualização do certificado SAML nas aplicações SSO"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=351373338"
scraped_at: "2026-03-09T04:33:21.627Z"
depth: 3
anchors: 10
child_links: 46
---

# Identity | Atualização do certificado SAML nas aplicações SSO

# Falando de atualização do certificado SAML nas aplicações SSO...

---

O certificado no padrão X.509 é usado para configurar o *Single Sign On* (SSO) em aplicações que suportam o padrão [SAML](https://tdn.totvs.com/display/fluig/Como+criar+um+novo+aplicativo+do+tipo+SAML). Por exemplo: ao [integrar o TOTVS Fluig Plataforma e o TOTVS Identity](/pages/viewpage.action?pageId=73080143), o certificado SAML é enviado para a plataforma, o que visa garantir a confiabilidade das operações. Por motivos de segurança, uma data de expiração é atribuída ao certificado.

A duração atual do certificado é de 5 anos a partir da data de criação do contexto. Ao final desse período, é necessário renová-lo e atualizá-lo nas aplicações SSO.

Não é necessário renovar o certificado SAML imediatamente após o aparecimento da mensagem de aviso de expiração, mas é fundamental que ele seja renovado antes da data de expiração.

**oculto**

**Observação interna:**

O conteúdo dessa página foi replicado ao artigo [https://centraldeatendimento.fluig.com/hc/pt-br/articles/360033487714](https://centraldeatendimento.fluig.com/hc/pt-br/articles/360033487714/)

Se for realizado algum ajuste, lembrar de repassar a esse artigo!

## Como fazer a renovação

A renovação do certificado SAML ocorre em duas etapas:

- A primeira etapa é renovar o certificado por um novo período no próprio contexto do Identity. Acesse nossa documentação e observe o passo a passo da renovação do[Certificado SAML](/display/fluig/Identity+%7C+Certificado+SAML) e do [Certificado SAML RSA 2048](https://tdn.totvs.com/x/BwefKQ).
- Após renovar o certificado SAML do contexto, deve-se dar início à segunda etapa: a atualização do certificado nas aplicações SSO integradas ao Identity, como o [TOTVS Fluig Plataforma](#Identity|AtualizaçãodocertificadoSAMLnasaplicaçõesSSO-fluig), [GoodData](#Identity|AtualizaçãodocertificadoSAMLnasaplicaçõesSSO-gooddata) e os [ERPs TOTVS](#Identity|AtualizaçãodocertificadoSAMLnasaplicaçõesSSO-totvs).

### Atualizar o certificado no TOTVS Fluig Plataforma 

---

**Assista ao vídeo**

Para atualizar o certificado SAML na plataforma, basta editar a empresa que está [integrada ao Identity](/pages/viewpage.action?pageId=73080143), testar a conexão e salvar sem alterar nada. O certificado atualizado será baixado automaticamente.

**01.** [Acessar sua plataforma com o usuário **wcmadmin**](https://tdn.totvs.com/pages/viewpage.action?pageId=203767554).

**02.** Acionar **Painel de Controle** → aba **WCM → Empresas**.

**03.** Selecionar a empresa integrada ao Identity e acionar **Editar**.

**04.** Acessar a aba **Autenticação**.

**05.** Abrir o combo **Ações** e acionar **Testar conexão**.

Deve ser apresentada a mensagem "Conexão com o servidor do Identity realizada com sucesso", o que indica que a integração entre a plataforma e o Identity está funcionando corretamente.

**06.** Acionar **Salvar**.

Para confirmar a atualização do certificado, acesse o [Volume](https://tdn.totvs.com/pages/viewpage.action?pageId=233766796) da instalação da plataforma. Dentro desse diretório, na pasta *certs*, é armazenado o certificado SAML. Abra-o para verificar a nova data de validade. ![](/download/attachments/351373338/photo-off.png?version=1&modificationDate=1524751015000&api=v2) **Veja a imagem**

### Atualizar o certificado na GoodData

---

A renovação do certificado na [GoodData](/display/fluig/Identity+%7C+Aplicativos+GoodData) deve ser solicitada através de um *ticket* para a Equipe de Suporte do Identity.

**01.** Acessar o [**Portal do cliente**](https://suporte.totvs.com/).

**02.** Acionar **Central de chamados**.

**03.** Abrir um novo *ticket* solicitando a atualização do certificado na GoodData e informando a URL do contexto da empresa no Identity (Ex.: [http://minhaempresa.fluigidentity.com](http://minhaempresa.fluigidentity.com)).

O analista responsável pelo *ticket* entrará em contato com o suporte da GoodData requisitando a atualização do certificado no projeto GoodData.

### Atualizar o certificado nos ERPs TOTVS

---

Para aplicar o novo certificado SAML nos ERPs Protheus, Logix, Datasul ou RM, basta refazer a integração *One Click* nas configurações da aplicação. Cada ERP possui uma documentação específica detalhando o procedimento de integração:

- [Linha Protheus](https://tdn.totvs.com/pages/viewpage.action?pageId=73892524)

- [Linha RM](/display/LRM/Fluig+OnClick)

- [Linha Datasul](https://tdn.totvs.com/display/public/FRAMJOI/Identity+-+Linha+Datasul)

- [Linha Logix](https://tdn.totvs.com/display/public/FRAMJOI/Identity+-+Linha+Logix)

### Atualizar o certificado no Zendesk

---

Para atualizar a [integração com o Zendesk](/pages/viewpage.action?pageId=356813473), basta informar a Impressão Digital do novo certificado SAML nas configurações de segurança da aplicação.

- [Passo 1](#)
- [Passo 2](#)

 - Fazer o [*download* do certificado](https://tdn.totvs.com/pages/viewpage.action?pageId=273980166#Seguran%C3%A7a-ObterocertificadoSAML) SAML renovado.

 - Abrir o certificado SAML baixado (**Assista**).

 - Acessar a aba **Detalhes**.

 - Localizar **Impressão Digital** na lista de campos apresentada.

 - Copiar o valor da impressão digital do certificado.

 - Acessar o Zendesk da empresa com o administrador.

A página de login do Zendesk pode ser acessada diretamente através da URL https://{domain}.zendesk.com/access/normal.

 - Selecionar **Admin** (ícone de engrenagem) na barra lateral esquerda.

 - Acessar **Segurança**, sob a seção **Configurações**.

 - Localizar as configurações de **SAML** na seção **Single Sign-on (SSO)**.

 - Colar o valor da Impressão Digital copiado do certificado SAML no campo **Impressão digital do certificado*** (**Assista**).

 - Acionar **Salvar**.

### Atualizar o certificado em outros apps

---

Para substituir o certificado SAML em outros aplicativos de terceiros configurados pela empresa no Identity, deve-se entrar em contato com o fornecedor da aplicação e solicitar a atualização do certificado.


<!-- anchors: Identity|AtualizaçãodocertificadoSAMLnasaplicaçõesSSO-FalandodeatualizaçãodocertificadoSAMLnasaplicaçõesSSO..., Identity|AtualizaçãodocertificadoSAMLnasaplicaçõesSSO-Comofazerarenovação, Identity|AtualizaçãodocertificadoSAMLnasaplicaçõesSSO-AtualizarocertificadonoTOTVSFluigPlataformafluig, Identity|AtualizaçãodocertificadoSAMLnasaplicaçõesSSO-AtualizarocertificadonaGoodDatagooddata, Identity|AtualizaçãodocertificadoSAMLnasaplicaçõesSSO-AtualizarocertificadonosERPsTOTVStotvs, Identity|AtualizaçãodocertificadoSAMLnasaplicaçõesSSO-AtualizarocertificadonoZendeskzendesk, zendesk_tutorial, zendesk_tutorial-872616687, zendesk_tutorial-872616688, Identity|AtualizaçãodocertificadoSAMLnasaplicaçõesSSO-Atualizarocertificadoemoutrosapps -->
