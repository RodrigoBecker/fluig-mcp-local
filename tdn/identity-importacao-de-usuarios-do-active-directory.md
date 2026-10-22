---
title: "Identity | Importação de usuários do Active Directory"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=201739710"
scraped_at: "2026-03-09T05:11:43.169Z"
depth: 3
anchors: 4
child_links: 33
---

# Identity | Importação de usuários do Active Directory

**oculto**

**Essa documentação foi repassada para o artigo no KCS: https://centraldeatendimento.fluig.com/hc/pt-br/articles/360026742553**

**Caso for atualizada, lembrar de atualizar o artigo acima!**

---

O Identity permite a constante sincronização das contas de usuários do Active Directory (AD) através do SmartSync. Cabe ao administrador do contexto decidir dentre os usuários importados quais serão aceitos e efetivamente cadastrados no Identity.

# Pré-requisitos

- Possuir usuários cadastrados no Active Directory com os seguintes campos preenchidos: nome, sobrenome e e-mail.

- [SmartSync](https://tdn.totvs.com/x/VIs0DQ) instalado, configurado e em execução.

- [Active Directory configurado](https://tdn.totvs.com/x/JksGD) no contexto da empresa no Identity.

# Usuários pendentes

Uma vez que o SmartSync tenha sido conectado com sucesso ao Active Directory, as contas que possuírem nome, sobrenome e e-mail preenchidos no AD serão importadas automaticamente. Para ativar essas contas importadas no Identity, é necessário que o usuário seja aceito pelo administrador. Esse aceite pode ser realizado de forma automática ou manual.

### Aceite manual de usuários pendentes

Consulte o passo a passo em [Aceitar usuários pendentes](https://tdn.totvs.com/x/1L1UE).

Dica

Para reimportar um único usuário, acesse o cadastro dele no Active Directory, altere o nome ou sobrenome e salve. O SmartSync detectará a mudança e fará uma sincronização. Ao final, basta desfazer a alteração no AD.

### Aceite Automático de Usuários Pendentes

Para consultar o passo a passo, acesse a documentação* *[Gerenciar Active Directories](https://tdn.totvs.com/x/W55UE) e procure pelo item **Editar Active Directory**. Basta definir **Sim** na opção **Deseja habilitar o Aceite Automático?**


<!-- anchors: Identity|ImportaçãodeusuáriosdoActiveDirectory-Pré-requisitos, Identity|ImportaçãodeusuáriosdoActiveDirectory-Usuáriospendentes, Identity|ImportaçãodeusuáriosdoActiveDirectory-Aceitemanualdeusuáriospendentes, Identity|ImportaçãodeusuáriosdoActiveDirectory-AceiteAutomáticodeUsuáriosPendentes -->
