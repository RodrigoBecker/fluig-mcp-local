---
title: "Identity | Integração com o Deskbee"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=704920970"
scraped_at: "2026-03-09T04:58:11.830Z"
depth: 3
anchors: 10
child_links: 36
---

# Identity | Integração com o Deskbee

## Falando da Integração do TOTVS Identity com o Deskbee...

---

O objetivo deste guia é informar sobre os pré requisitos e as configurações necessárias para realizar a integração do TOTVS Identity com o Deskbee.

## Pré-requisitos

---

Para realizar a integração do TOTVS Identity com o Deskbee, são necessários os seguintes itens:

- Ambiente próprio do cliente cadastrado no Deskbee com permissões de administração.
- Usuários cadastrados no Deskbee e no Identity com o mesmo e-mail.

Importante!

A integração entre o aplicativo Deskbee e o TOTVS Identity suporta apenas o acesso [*Single Sign On*](https://tdn.totvs.com/x/N4MFE)[ (SSO)](https://tdn.totvs.com/x/N4MFE) e não o provisionamento automático de usuários. O administrador deve cadastrar os usuários no Deskbee antes de [atribuir o aplicativo do Desko](/pages/viewpage.action?pageId=311633463) a eles no Identity.

## Criar e configurar o aplicativo Deskbee no TOTVS Identity

---

**Veja ao vídeo**

**01**. Acessar o contexto da empresa no Identity como administrador.

**02**. Acionar o menu **Aplicativos**.

**03**. Clicar em **Novo aplicativo**> **Padrão.**

**04**. Informar o nome do aplicativo, uma descrição e **Salvar**.

**05**. Após salvar o aplicativo acessar a aba **Entrar**. 

**06**. Acionar **Editar** no canto superior direito da página.

No campo **Modo de login**, selecionar **SAML**.

Marcar o **Tipo Init SSO** como **IDP_INITIATED**.

Marcar o campo **URL Completa.**

Desmarcar o campo **Assinatura do Assertion**.

Em**URL do Consumidor de Asserções**, substituir {domain} pela URL de Resposta ACS (URL do Serviço do Consumidor de Declaração) no Deskbee.

Exemplo: https://api.stage.desko.com.br/v1/saml2/{minhaempresa}/acs/55c96f65-9f57-4243-b9c1-xxxxxxxxxxxx

Em **Destinatário**, substituir {domain} pela URL de Resposta ACS (URL do Serviço do Consumidor de Declaração) no Deskbee. 

Exemplo: https://api.stage.desko.com.br/v1/saml2/{minhaempresa}/acs/55c96f65-9f57-4243-b9c1-xxxxxxxxxxxx

Em **Público**, informar a URL do campo Identificador (ID da Entidade) do Deskbee.

Exemplo: https://api.stage.desko.com.br/v1/saml2/{minhaempresa}/metadata/55c96f65-9f57-4243-b9c1-xxxxxxxxxxxx

 Em**Nome do Emissor SP**, informar a URL do campo Identificador (ID da Entidade) do Deskbee. 

Exemplo: https://api.stage.desko.com.br/v1/saml2/{minhaempresa}/metadata/55c96f65-9f57-4243-b9c1-xxxxxxxxxxxx

No campo **Mapeamento ID** **de Usuário** selecionar a opção **E-mail do Usuário.**

Marcar o parâmetro **Enviar grupos pelo SAMLResponse. **

Atenção!

Campos que não foram citados nos passos acima não devem ser alterados.

**06**. Acionar **Salvar**e em seguida**Confirmar.**

**07**. Após salvar, acione o botão **Baixar metadados do IDP** no canto superior direito.

**08**. Acesse a aba **Usuários/Grupos** do aplicativo e adicione os usuários/grupos que poderão acessar esta aplicação do Identity.

## Configurar segurança no Deskbee

---

A integração com o Deskbee exige o preenchimento de informações nas configurações de segurança do ambiente. Confira a seguir os passos para realizar as configurações:

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)

 - Acessar o contexto da empresa no Identity e fazer [*download*](/download/attachments/704920970/Baixar%20certificado%20SAML.gif?version=1&modificationDate=1660827493817&api=v2)do certificado SAML.

 - Abrir o certificado SAML baixado.

 - Acessar a aba **Detalhes**.

 - Clicar em **Copiar para Arquivo** e em seguida **Avançar.**

 - Selecione o formato **X.509 codificado na base 64 (*.cer)**e em seguida **Avançar.**

 - Procurar o nome do arquivo para exportar o arquivo,****clicar em**Avançar**e posteriormente em**Concluir.**

**Veja a imagem**

 - Acessar o Deskbee da empresa como administrador.

 - Selecionar****o menu**Integrações > Autenticação**e habilitar o parâmetro**Permitir Acesso SSO por SAML.**

 - Preencher os campos de **Nome da conexão** e **Texto exibido no Botão de Conexão** conforme desejar.

 - Abra o arquivo **Metadata**do aplicativo criado no Identity e copie o valor **EntityID**que fica na segunda linha do arquivo.

 - No campo **ID da Identidade (Url do identificador)**, informe o valor copiado do arquivo metadata.

 - No campo **URL de Login**, informe a URL do Location que está na linha 23 do arquivo metadata.

 - No campo **URL de Logout**, informe a URL do seu Identity com **/cloudpass/login/logout** no final.

**Veja a imagem**

 - No campo de**Upload do certificado**, inclua o arquivo .cer criado no passo anterior.

 - No campo **Atributo de Nome do Usuário** preencha como **firstname**.

 - No campo **Atributo de Sobrenome do usuário**preencha como **lastname**.

** Veja a imagem**

 - No campo de **Atributo de E-mail do Usuário** preencha como **email**.

 - No campo **Atributo de Matrícula do Usuário** preencha como **userId**.

 - No campo **Atributo de Departamento (Grupo)** preencha com **groupId**.

** Veja a imagem**

 - Os valores do bloco **Dados Provedor de Acesso** são as URLs que devem ser preenchidas dentro do aplicativo no Identity.

 - Clique em **Salvar** **Configurações**e o acesso já irá funcionar via TOTVS Identity.


<!-- anchors: Identity|IntegraçãocomoDeskbee-FalandodaIntegraçãodoTOTVSIdentitycomoDeskbee..., Identity|IntegraçãocomoDeskbee-Pré-requisitos, Identity|IntegraçãocomoDeskbee-CriareconfiguraroaplicativoDeskbeenoTOTVSIdentity, Identity|IntegraçãocomoDeskbee-ConfigurarsegurançanoDeskbee, Observeospassosaseguir:, Observeospassosaseguir:-872616687, Observeospassosaseguir:-872616688, Observeospassosaseguir:-872616689, Observeospassosaseguir:-872616690, Observeospassosaseguir:-872616691 -->
