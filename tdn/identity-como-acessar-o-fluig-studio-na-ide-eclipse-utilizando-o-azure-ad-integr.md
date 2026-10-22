---
title: "Identity | Como acessar o Fluig Studio na IDE Eclipse utilizando o Azure AD integrado ao Identity?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=854365319"
scraped_at: "2026-03-09T04:34:37.223Z"
depth: 3
anchors: 6
child_links: 59
---

# Identity | Como acessar o Fluig Studio na IDE Eclipse utilizando o Azure AD integrado ao Identity?

**Dúvida**

Quando o Fluig está integrado ao*Identity*, a autenticação é feita primeiramente no *Identity* e somente depois no *Fluig*. No entanto, quanto se trata do *Azure AD* é o *Identity*que recebe requisições de login SSO vindas do aplicativo *SAML* da*Microsoft Azure.*Como não existe um *"meio de campo"* para que a *IDE Eclipse* entenda que a requisição de autenticação está vindo do *Microsoft Azure*, não é possível logar. Dessa forma, como contornar essa situação e acessar o *Fluig Studio* na*IDE Eclipse* utilizando o *Azure AD* integrado ao *Identity*?

**Solução**

**01.**Na prática, a integração com o *Azure AD* não limita a autenticação ser feita apenas pelo *Azure AD*. Ou seja, ainda é possível ter usuários logando diretamente no *Identity*através da senha pessoal e, consequentemente, o login do *Fluig Studio*funcionará normalmente. **Para habilitar o uso da senha pessoal no contexto, é necessário:**

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)

 - Acessar o *Identity* com um usuário administrador e acionar o botão![](/download/attachments/854365319/image-2024-7-5_11-48-11.png?version=1&modificationDate=1720190891623&api=v2).

**

 - Na opção **Segurança**, acione o botão**"Acessar Configuração".**

![](/download/attachments/854365319/image-2024-7-5_11-53-29.png?version=1&modificationDate=1720191210343&api=v2)

 - No menu de ações acionar as**Credenciais do usuário** e marcar a opção **"****Habilitar senha pessoal"**.

**

Alerta

Caso o administrador do *Identity*opte por desativar a senha pessoal no contexto, essa ação é aplicada apenas aos usuários comuns. Os usuários administradores do*Identity* sempre conseguirão logar utilizando a senha pessoal. Nesse cenário, o usuário utilizado no *Fluig Studio* precisará ser administrador do*Identity.*

**02.** Após habilitar o uso da senha pessoal no contexto, o administrador poderá cadastrar um usuário diretamente no *Identity*com senha temporária ou e-mail de convite. Esse usuário não terá ligação com o *Azure AD* e poderá acessar o *Fluig Studio* na*IDE Eclipse*normalmente. **Ver documentação:**

- [Identity | Usuários](/pages/viewpage.action?pageId=311633463)

**03.**No caso de usuários criados a partir do *Azure AD*, para criar a senha pessoal, esses usuários deverão:

- [Passo 1](#)

 - Acessar a tela de login do *Identity.*

 - Acionar a opção** "Esqueci a senha" **e digitar o e-mail.

 - Um e-mail de reset de senha será enviado para esse usuário.

 - Ao definir uma senha através do e-mail recebido, o usuário criará a **senha pessoal**.

 - **A senha pessoal é diferente da senha do Azure AD**, assim, o usuário poderá logar na *IDE Eclipse*e o plugin*Fluig Studio* validará a autenticação do usuário normalmente.

![](https://totvssuporte.zendesk.com/attachments/token/W8DhgrRSfwzNkLREm1kaI5P9m/?name=Screenshot_1.png)

**Saiba mais em:**

- [Identity | Credenciais de usuário](/pages/viewpage.action?pageId=544182961)
- [Identity | Senha pessoal](https://tdn.totvs.com/display/fluig/Identity+%7C+Senha+pessoal)
- [Guia de instalação Fluig Studio](/pages/viewpage.action?pageId=73078179)


<!-- anchors: identificar, identificar-identificar, identificar-identificar, identificar-identificar, identificar, identificar-identificar -->
