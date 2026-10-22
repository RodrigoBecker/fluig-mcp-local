---
title: "Identity | Credenciais de usuário"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=544182961&preview=%2F544182961%2F684009665%2FCredenciais+do+usu%C3%A1rio.JPG"
scraped_at: "2026-03-09T05:23:04.919Z"
depth: 4
anchors: 5
child_links: 48
---

# Identity | Credenciais de usuário

# Falando de credenciais de usuário...

---

Nessa seção é possível parametrizar se o uso da senha pessoal será permitido para acesso dos usuários comuns nessa empresa no Identity. Consulte a documentação completa sobre [Senha pessoal](https://tdn.totvs.com/pages/viewpage.action?pageId=274828593) para mais informações.

Também pode-se definir se os usuários comuns podem trocar seu e-mail por meio da opção [Meu Perfil](/pages/viewpage.action?pageId=280746624).

![](/download/attachments/544182961/image2023-6-15_16-13-51.png?version=1&modificationDate=1686856449307&api=v2)

## Habilitar o uso da senha pessoal

---

**01. **Acione o ícone **Configurações **no canto superior direito e selecione a opção **Segurança**. 

**02**. Acesse o recurso **Credenciais de usuário.**

**03**. Marque a opção **Habilitar senha pessoal** para permitir a definição de uma senha pessoal aos usuários da empresa no Identity.

Com esta opção habilitada, a senha pessoal será cadastrada pelo usuário durante o primeiro acesso dele ao Identity. Para usuários importados do Active Directory, o Identity não exige o cadastro da senha pessoal, mas o usuário poderá fazê-lo através da opção [Meu perfil](/pages/viewpage.action?pageId=280746624).

Multi-contexto

Caso o usuário possua cadastro em mais de uma empresa e tenha utilizado a senha pessoal para autenticar-se no Identity, ao tentar fazer a troca para uma empresa que não permita o login via senha pessoal o acesso será negado e ele deverá autenticar-se utilizando as credenciais de Active Directory da empresa que deseja acessar.

**oculto**

**Observação interna**

Esse passo a passo foi repassado aos artigos [https://centraldeatendimento.fluig.com/hc/pt-br/articles/360034761353](https://centraldeatendimento.fluig.com/hc/pt-br/articles/360034761353) e  [https://centraldeatendimento.fluig.com/hc/pt-br/articles/360034334353](https://centraldeatendimento.fluig.com/hc/pt-br/articles/360034334353)
Se for feita alguma alteração, lembrar de alterar nesse artigo!

## Desabilitar o uso da senha pessoal

---

**01. **Acione o ícone **Configurações **no canto superior direito e selecione a opção **Segurança**. 

**02**. Acesse o recurso **Credenciais de usuário.**

**03**. Desmarque a opção **Habilitar senha pessoal** para impedir a definição de uma senha pessoal, aos usuários da empresa no Identity.

Com esta opção desabilitada, o recurso de [Auto-inscrição](/display/fluig/Identity+%7C+Novas+contas), em que os usuários cadastram-se manualmente na empresa através de um *link* na página de login, será desativado. Os usuários poderão acessar o Identity apenas com a senha do Active Directory e o Launchpad pessoal será desativado.

No entanto, por questões de segurança, mesmo com esta opção desabilitada os administradores sempre podem autenticar-se no contexto utilizando sua senha pessoal. Esta regra também se aplica ao recurso de troca de contextos.

Multi-contexto

Caso o usuário possua cadastro em mais de uma empresa e tenha utilizado a senha pessoal para autenticar-se no Identity, ao tentar fazer a troca para uma empresa que não permita o login via senha pessoal o acesso será negado e ele deverá autenticar-se utilizando as credenciais de Active Directory da empresa que deseja acessar.

## Habilitar troca de e-mail 

---

**01. **Acione o ícone **Configurações **no canto superior direito e selecione a opção **Segurança**. 

**02**. Acesse o recurso **Credenciais de usuário.**

**03**. Marque a opção **Habilitar troca de e-mail** para definir que os usuários da empresa poderão realizar a troca de e-mail.

Será apresentada uma mensagem de confirmação ao administrador, informando os seguintes itens:

- O novo endereço de e-mail não é automaticamente substituído nos aplicativos associados ao usuário.
- O novo endereço de e-mail informado pelo usuário deve ser único no Identity.
- A troca de e-mail não é sincronizada com o Active Directory.
- Caso o usuário esteja cadastrado em mais de uma empresa no Identity, a troca de e-mail só será efetuada se essa opção estiver habilitada em todas elas.

**04.**Acione **Habilitar** para permitir a troca de e-mail.

Com isso, a opção de troca de e-mail será habilitada para os usuários comuns no menu [Meu Perfil](/pages/viewpage.action?pageId=280746624). Essa troca pode ser realizada apenas pelo próprio usuário, não por um administrador.

**oculto**

**Observação interna**

Esse passo a passo foi repassado ao artigo [https://centraldeatendimento.fluig.com/hc/pt-br/articles/360034759753](https://centraldeatendimento.fluig.com/hc/pt-br/articles/360034759753) 
Se for feita alguma alteração, lembrar de alterar nesse artigo!

## Desabilitar a troca de e-mail 

---

**01. **Acione o ícone **Configurações **no canto superior direito e selecione a opção **Segurança**. 

**02**. Acesse o recurso **Credenciais de usuário.**

**03**. Desmarque a opção **Habilitar troca de e-mail** para impedir os usuários da empresa de realizar a troca de e-mail.


<!-- anchors: Identity|Credenciaisdeusuário-Falandodecredenciaisdeusuário..., Identity|Credenciaisdeusuário-Habilitarousodasenhapessoal, Identity|Credenciaisdeusuário-Desabilitarousodasenhapessoal, Identity|Credenciaisdeusuário-Habilitartrocadee-mailtrocaemail, Identity|Credenciaisdeusuário-Desabilitaratrocadee-mailtrocaemail -->
