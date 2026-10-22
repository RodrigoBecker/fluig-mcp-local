---
title: "Fluig Identity Partner"
url: "https://tdn.totvs.com/display/public/fluig/Fluig+Identity+Partner?utm_campaign=wcmhelp&utm_source=identitypartnerpage&utm_medium=eugenioadm_mail.com#FluigIdentityPartner-ObterCredenciaiseLicen%C3%A7anofluigIdentity"
scraped_at: "2026-03-09T05:14:54.894Z"
depth: 3
anchors: 20
child_links: 84
---

# Fluig Identity Partner

# Índice

# Objetivo

---

O objetivo deste guia é mostrar como configurar o licenciamento controlado pelo Identity. O Fluig Identity Partner é um modelo de licenciamento que utiliza o TOTVS Identity na nuvem para controlar o acesso a plataforma TOTVS Fluig.

# Pré-requisitos

---

Este recurso é disponibilizado apenas para clientes que são **parceiros TOTVS**.

Para utilizar este licenciamento não é preciso ter a plataforma Fluig integrada com o Identity.

# Configuração na plataforma

---

Para realizar a configuração do licenciamento controlado pelo Identity, siga os passos abaixo:

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)

 - Acesse a plataforma com um usuário que contenha perfil de administrador;

  - Clique sobre o menu em**Painel de Controle** e localize a opção **Identity Partner Admin**.

 - Acesse o Identity e obtenha o License ID, Client ID e Cliente Secret para preencher nos campos solicitados na página de configuração do Identity Partner Admin. Caso tiver dúvidas em como realizar este procedimento no Identity [clique](#FluigIdentityPartner-identity)[aqui](#FluigIdentityPartner-identity).

 - Se este ambiente for de homologação, a opção "Utilizar ambiente de homologação" deve ser ativada.

 - Finalizado a inclusão dos IDs, clique em **Ativar**.

![](/download/attachments/281141190/Licen%C3%A7a8.jpg?version=1&modificationDate=1497993210000&api=v2)

 - Caso a plataforma esteja utilizando o License Server, será necessário desativá-lo no painel administrativo da plataforma. Dúvidas em realizar este procedimento, [clique aqui](#FluigIdentityPartner-ls).

# Obter Credenciais e Licença no Identity

---

Siga os passos abaixo para obter as informações solicitadas na plataforma para configuração do Identity Partner Admin.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)

 - Acesse o Identity com um usuário que contenha perfil de administrador;

 - Acione o menu **Aplicativos**;

 - Pesquise pelo aplicativo do Fluig;

 - Clique sobre o aplicativo Fluig que deseja configurar o Identity Partner Admin;

  - Acesse a aba **Credenciais OAuth 2.0**.

  - Clique sobre o botão**Gerar Nova Credencial;**

****

****

  - Informe uma descrição;****

  - Clique em **Salvar**.

![](/download/attachments/281141190/Licen%C3%A7a3.jpg?version=1&modificationDate=1497989222000&api=v2)

  - Copie o Client ID e Client Secret e cole na tela de configuração do Identity Partner Admin no Fluig.

![](/download/attachments/281141190/Licen%C3%A7a4.jpg?version=1&modificationDate=1497989222000&api=v2)

 - Acesse a aba **Licenças** para copiar o ID da Licença gerada pelo seu parceiro TOTVS.

 - Basta clicar no ícone de copiar (![](/download/attachments/281141190/salvar.png?version=1&modificationDate=1497989222000&api=v2)) localizado ao lado do ID.

 - Cole o ID na tela de configuração do Identity Partner Admin no Fluig.

****

# Desativar License Server da plataforma

---

Atenção!

Clientes hospedados em Cloud TOTVS deverão abrir um ticket para a Equipe de Atendimento Cloud solicitando a desativação do License Server.

Para realizar este procedimento, acesse a plataforma com o usuário 'wcmadmin' e siga os passos abaixo:

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)

 - Clique sobre o menu **Painel de Controle**e acione a opção **Configurações do Sistema**;  

 - Acesse a aba **Parâmetros da Plataforma** onde estão localizados os parâmetros de configuração da plataforma;

  - Localize na página o item Servidor de Licença;

  - Clique sobre o botão **Habilitar License Server** para Desativá-lo;![](/download/attachments/281141190/Image%2011.jpg?version=1&modificationDate=1497989222000&api=v2)

 - No topo da página clique em Salvar para desativar o License Server. Para que a desativação seja reconhecida pela plataforma será necessário reiniciar os serviços do Fluig.

 - Reinicie os serviços do Fluig na ordem correta.

**Parar**: fluig, fluig_RealTime, luig_Indexer e fluig_MemCached (caso utilizar).
**Iniciar**: fluig_MemCached (caso utilizar), fluig_Indexer, fluig_RealTime e fluig.


<!-- anchors: FluigIdentityPartner-Índice, FluigIdentityPartner-Objetivo, FluigIdentityPartner-Pré-requisitos, FluigIdentityPartner-Configuraçãonaplataforma, fluig, fluig-1, fluig-2, fluig-3, fluig-4, FluigIdentityPartner-ObterCredenciaiseLicençanoIdentity, identity, identity-1, identity-2, identity-3, FluigIdentityPartner-DesativarLicenseServerdaplataforma, wcmadmin, wcmadmin-1, wcmadmin-2, wcmadmin-3, wcmadmin-4 -->
