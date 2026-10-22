---
title: "Identity | Ativação de nova conta e entrar"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=273991088"
scraped_at: "2026-03-09T05:12:09.233Z"
depth: 3
anchors: 2
child_links: 34
---

# Identity | Ativação de nova conta e entrar

# Falando de ativação de nova conta e entrar...

---

As configurações desta página são específicas para os usuários criados no contexto do TOTVS Identity através da importação via Active Directory. É possível definir se as credenciais do AD podem ser utilizadas para acessar o domínio da empresa no Identity, se devem ser disponibilizadas para os aplicativos Plugin e se as mudanças de status da conta no Active Directory e na empresa dentro do Identity devem ser sincronizadas.

Usuários importados e aceitos pelo administrador são automaticamente ativados, dispensando a utilização de e-mails de convite ou senhas temporárias.

![](/download/attachments/273991088/Ativa%C3%A7%C3%A3o%20nova%20conta%20vers%C3%A3o%20root-2.0.15-snapshot.png?version=1&modificationDate=1583840215530&api=v2)

## Configurar ativação/autenticação de contas importadas do AD

---

**01. **Acionar o ícone **Configurações **no canto superior direito.

**02.** Selecionar a opção **Active Directory.**

**03**. Na seção **Ativação de nova conta e entrar**, efetuar as configurações necessárias.

As configurações disponíveis são:

**Permitir credenciais do Active Directory**Definir se será permitido aos usuários acessar a empresa no TOTVS Identity utilizando as credenciais do Active Directory (e-mail e senha de rede).

**Salvar as credenciais do Active Directory no Identity**
Ao assinalar esta opção, os aplicativos do tipo Plugin podem ser configurados para fazer o acesso utilizando a credenciais do Active Directory.

**Sincronizar mudanças no estado do usuário do Active Directory para o Identity**
Ao assinalar esta opção, usuários desativados no Active Directory também serão desativados automaticamente da empresa no Identity. A sincronização do estado é realizada via SmartSync.

**Sincronizar mudanças no estado do usuário do Identity para o Active Directory**Ao assinalar essa opção, as mudanças no estado do usuário no Identity devem ser sincronizadas para o Active Directory, com isso, os usuários desativados no Identity também serão desativados automaticamente no Active Directory.

			![](https://tdn.totvs.com/download/thumbnails/286221066/importante.png)

**IMPORTANTE!**

Caso existam ADs sem configuração no contexto, as opções **Sincronizar mudanças no estado do usuário do Active Directory para o Identity** e **Sincronizar mudanças no estado do usuário do Identity para o Active Directory** ficam desabilitadas e não podem ser marcadas.


<!-- anchors: Identity|Ativaçãodenovacontaeentrar-Falandodeativaçãodenovacontaeentrar..., Identity|Ativaçãodenovacontaeentrar-Configurarativação/autenticaçãodecontasimportadasdoAD -->
