---
title: "Identity | Quais as diferenças entre configuração do Azure (Entra ID) como Azure AD e como Provedor de login genérico?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=908350424"
scraped_at: "2026-03-09T04:35:27.542Z"
depth: 3
anchors: 0
child_links: 57
---

# Identity | Quais as diferenças entre configuração do Azure (Entra ID) como Azure AD e como Provedor de login genérico?

**Dúvida**

Quais as diferenças entre configuração do Azure (Entra ID) como Azure AD e como Provedor de login genérico?

**Solução**

No Identity existem duas formas de configurar login com o Microsoft Azure (Entra ID). A mais antiga é a integração que usa SAML que é aquela feita no menu **Active Directory**do Identity, ela é específica para o Azure ([veja a documentação](https://tdn.totvs.com/display/public/fluig/Identity+%7C+Gerenciar+Active+Directories#Identity|GerenciarActiveDirectories-AdicionarAzureActiveDirectory)); a mais recente é a integração que usa OIDC, que não é específica para o Azure, pois permite o cadastro de qualquer Provedor de Identidade, usando a opção **Provedor Genérico** na configuração  ([veja a documentação](/pages/viewpage.action?pageId=842293735)).
Em termos gerais, os protocolos apesar de serem diferentes, tem um mesmo objetivo, que é realizar o Single Sign On do usuário de maneira segura, mas na prática a utilização deles no TOTVS Identity tem diferenças:

- A configuração usando SAML, requer que haja um aplicativo SAML configurado no Azure e que os usuários acessem o MyApps da Microsoft para a partir de lá acessaram o aplicativo TOTVS Identity. Não haverá redirect do usuário para o Azure ao acessar a url de login direta do Identity. Isto impacta diretamente no login do TOTVS Fluig, por exemplo, pois ao acessar a url direta do Fluig, há o redirect para o login via Identity quando a integração está habilitada,  mas não haverá o redirect para a Microsoft e nenhum indicativo em tela avisando o usuário que deverá ir até o MyApps para se logar no Identity.
- A configuração usando OIDC irá criar um botão Logar com 'Azure' na tela de login do TOTVS Identity, com isto, o usuário que tentar abrir a tela de login do Identity verá esse botão como opção e clicando nele será redirecionado para o login na Microsoft, que após concluído, já voltará logado para a tela home do Identity. Considerando o login Fluig novamente como exemplo, o usuário que digitar a url direta do Fluig, será redirecionado para a tela de login do Identity, onde irá clicar no botão Logar com 'Azure' e será redirecionado para o login Microsoft, que após realizado, voltará a sessão para o Identity, que por sua vez irá realizar o SAML no Fluig, redirecionando o usuário para a url origem que é a url do Fluig nesse caso, isto acaba tornando a experiência do usuário final mais fluída.
