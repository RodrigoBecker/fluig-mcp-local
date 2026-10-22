---
title: "Identity | Conhecendo o Identity"
url: "https://tdn.totvs.com/display/public/fluig/Identity+%7C+Conhecendo+o+Identity"
scraped_at: "2026-03-09T04:31:28.307Z"
depth: 3
anchors: 25
child_links: 24
---

# Identity | Conhecendo o Identity

---

O TOTVS Identity é a plataforma de gerenciamento de acessos e identidades da TOTVS. Com um único login, o Identity permite o acesso a aplicações internas e externas em um ambiente seguro, unificado e 100% na nuvem.

Conheça os recursos e saiba tudo o que você pode fazer no Identity!

            ![](https://tdn.totvs.com/download/attachments/543078872/flaticon-widgets.png)

# Aplicativos

Defina os aplicativos disponíveis para acesso.

            ![](https://tdn.totvs.com/download/attachments/543078872/flaticon-person.png)

# Usuários

Gerencie as pessoas que terão acesso em cada aplicativo.

            ![](https://tdn.totvs.com/download/attachments/543078867/flaticon-group-person.png)

# Grupos

Vincule as pessoas em grupos, para facilitar as atribuições de aplicativos.

            ![](https://tdn.totvs.com/download/attachments/543078867/flaticon-settings.png)

# Configurações

Defina parâmetros de segurança para senhas, integrações, personalizações, entre outras configurações.

 **Conheça mais!**

Acesse a apresentação original: [[No Code] Simplifique a gestão de senhas e MFA com o TOTVS Identity.pdf](/download/attachments/851312277/%5BNo%20Code%5D%20Simplifique%20a%20gest%C3%A3o%20de%20senhas%20e%20MFA%20com%20o%20TOTVS%20Identity.pdf?version=2&modificationDate=1719327188620&api=v2)

            ![Universo TOTVS GIF](https://i.postimg.cc/8zv25mb2/GIFuniverso-TOTVS.gif)

        ![Palestrante 1 - Andressa](https://i.postimg.cc/mr9bL0Sh/Andressa.jpg)

Andressa Anton

        ![Palestrante 2 - Lucas](https://i.postimg.cc/RZrpryqg/Lucas.jpg)

Lucas Almeida

### Resumo

Neste artigo você vai encontrar o que é o TOTVS Identity e como ele pode ajudar na gestão de usuários e senhas, e na ativação do MFA para os seus sistemas TOTVS ou não TOTVS, que forem integrados ao Identity. Além disso, é possível entender como funciona integração e login no TOTVS Fluig, TOTVS Agro Multicultivo, TOTVS RM, TOTVS Protheus e TOTVS Datasul. Também demonstraremos a configuração de um provedor de login externo para o Identity, o que permite que você use o seu provedor preferido para logar no seu sistema TOTVS, usando o TOTVS Identity como intermediário. Por fim, mostraremos como é experiência de login de um usuário a partir do launchpad do usuário no Identity.

## O que é o TOTVS Identity e para que serve?

---

- Acesso único a sistemas Internos e Externos
- Crie **aplicativos**, **usuários **e **grupos** e gerencie os **acessos**
- Permite integração com nuvens públicas e privadas
- Segurança e Disponibilidade
- Ambiente 100% monitorado

![](/download/attachments/851312277/image-2024-6-21_10-53-27.png?version=1&modificationDate=1718978008567&api=v2)

## Como o TOTVS Identity vai aumentar a segurança dos acessos?

---

O TOTVS Identity irá atuar como um intermediário no login de todas as aplicações que forem integradas a ele, funcionando como a primeira camada de acesso. Possuímos diversos recursos de segurança e passamos por testes periódicos rigorosos para garantir a robustez da nossa aplicação.

## 

### Filtro de acesso por IPs

Bloqueie o acesso ao domínio da empresa no TOTVS Identity a todos os endereços IP externos, exceto aqueles explicitamente liberados pelo administrador.

## 

### Política de senhas personalizada

Defina a política de senhas conforme a necessidade da sua empresa.

## 

Neste vídeo estamos demonstrando a configuração da política de senha personalizada, com o bloqueio de utilização de números e letras sequenciais e do nome próprio do usuário. Após a configuração da nova política, um usuário que esteja com uma senha que não está de acordo com a política será direcionado para o fluxo de troca de senha. Apenas após definir uma senha que atende aos requisitos configurados é que será possível realizar login.

## Your browser does not support the HTML5 video element

### Autenticação Multi Fator

---

Todo usuário do TOTVS Identity pode ativar o MFA em sua conta, basta ir até o seu perfil e nas configurações de segurança da conta e ativar seu MFA. Além disso, o administrador do Identity tem a possibilidade de definir grupos de usuários com MFA Obrigatório, o grupo Everyone é um grupo que contém todos os usuários do Identity e ele pode ser usado quando há a necessidade de obrigar o acesso com MFA para todos os usuários.

O TOTVS Identity possui uma aplicação própria para a geração dos tokens, que é o My Safe ID, mas também é possível utilizar outros autenticadores.

No vídeo abaixo, estamos definindo MFA Obrigatório para um grupo de usuários do Identity. Dessa forma, no próximo login de um usuário deste grupo, ele será direcionado a definir MFA para conseguir realizar o login.

## Your browser does not support the HTML5 video element

### Protocolos de autenticação seguros

---

SAML 2.0 e OIDC: são protocolos comuns, muito usados por diversas aplicações, que permitem a autenticação dos usuários sem a necessidade do tráfego de suas senhas nas requisições.

As integrações a seguir, com TOTVS Fluig, TOTVS Agro Multicultivo, TOTVS RM, TOTVS Protheus e TOTVS Datasul utilizam o protocolo SAML 2.0. Todas estas configurações possuem documentação de apoio, veja mais em [Integração com ERPs TOTVS](https://tdn.totvs.com/pages/releaseview.action?pageId=344473176). No [Fluig Academy](https://academy.fluig.com/) você também encontra treinamentos com passo a passo detalhado da integração com Fluig, RM e Protheus.

### Configurando a integração entre TOTVS Identity e TOTVS Fluig

## Your browser does not support the HTML5 video element

### Configurando a integração entre TOTVS Identity e TOTVS Agro Multicultivo

## Your browser does not support the HTML5 video element

### Configurando a integração entre TOTVS Identity e TOTVS RM

## Your browser does not support the HTML5 video element

### Configurando a integração entre TOTVS Identity e TOTVS Protheus

## Your browser does not support the HTML5 video element

### Autenticando no TOTVS Datasul com o TOTVS Identity

## Your browser does not support the HTML5 video element

## Integração com MS Active Directory

A integração com o Active Directory usa uma aplicação nossa chamada SmartSync. Essa aplicação precisa ser instalada na rede local onde está o Active Directory, apenas com saída para a internet, pois ela irá realizar chamadas para o TOTVS Identity, mas nunca irá receber chamadas diretas, o que permite que a aplicação não tenha porta de entrada aberta na rede.

![](/download/attachments/851312277/image-2024-6-21_11-37-45.png?version=1&modificationDate=1718980667047&api=v2)

Como vantagens da utilização do SmartSync com o TOTVS Identity podemos citar que: não há limitação de Active Directories a serem configurados; não é requerido VPN para esta configuração; e os usuários e grupos do AD são importados e mantidos sempre sincronizados, ou seja, se você criar um usuário no AD ele será criado no Identity automaticamente, da mesma forma se desativar esse usuário no AD, ele será desativado no Identity, e se adicionar um grupo ao usuário no AD, ele receberá o vínculo do grupo também no Identity. O contrário também é possível, realizar as alterações no Identity e replicá-las no Active Directory.

## Autenticação por provedor externo

É possível usar aplicações como Microsoft Entra ID, Okta, Facebook, Google, LinkedIn e outros provedores que também suportem OAuth2 ou OIDC.

No vídeo abaixo, estamos usando o Microsoft Entra ID como exemplo de configuração. [Clique aqui](https://tdn.totvs.com/pages/releaseview.action?pageId=842293735) para acessar a documentação detalhada desta configuração, ou caso use outro provedor, acesse a documentação completa em [Cadastro de Provedores](/display/fluig/Identity+%7C+Provedores).

        Your browser does not support the HTML5 video element

### Fazendo login na URL direta do TOTVS Fluig com o provedor genérico cadastrado no TOTVS Identity

Neste caso usamos o TOTVS Fluig como exemplo, mas em aplicações que possuam URL direta de acesso o comportamento será o mesmo.

        Your browser does not support the HTML5 video element

## Experiência de login de usuário

Uma vez que todas as aplicações foram configuradas no TOTVS Identity e atribuídas ao usuário, ele poderá se autenticar diretamente na aplicação como já está acostumado a fazer, pois a aplicação irá redirecionar o usuário para login no TOTVS Identity e depois de logado, voltará direto para a aplicação em questão. No entanto, o usuário também tem a possibilidade de acessar a Launchpad do Identity, onde estarão listadas todas as aplicações que o usuário tem acesso e então a partir do Launchpad, acessar as aplicações desejadas, assim todos os aplicativos de acesso ficam listados em um único local, facilitando a visualização do usuário.

        Your browser does not support the HTML5 video element

## Recapitulando

![](/download/attachments/851312277/image-2024-6-21_12-11-26.png?version=1&modificationDate=1718982688257&api=v2)

O custo de licenciamento do TOTVS Identity é baixo comparado a outros sistemas de gestão de identidade do mercado, entre em contato com seu EAR para mais informações a respeito.


<!-- anchors: content_1, Identity|ConhecendooIdentity-Resumo, Identity|ConhecendooIdentity-OqueéoTOTVSIdentityeparaqueserve?, Identity|ConhecendooIdentity-ComooTOTVSIdentityvaiaumentarasegurançadosacessos?, Identity|ConhecendooIdentity-FiltrodeacessoporIPs, Identity|ConhecendooIdentity-Políticadesenhaspersonalizada, Identity|ConhecendooIdentity-100%5%, Identity|ConhecendooIdentity-AutenticaçãoMultiFator, Identity|ConhecendooIdentity-100%5%.1, Identity|ConhecendooIdentity-Protocolosdeautenticaçãoseguros, Identity|ConhecendooIdentity-ConfigurandoaintegraçãoentreTOTVSIdentityeTOTVSFluig, Identity|ConhecendooIdentity-100%5%.2, Identity|ConhecendooIdentity-ConfigurandoaintegraçãoentreTOTVSIdentityeTOTVSAgroMulticultivo, Identity|ConhecendooIdentity-100%5%.3, Identity|ConhecendooIdentity-ConfigurandoaintegraçãoentreTOTVSIdentityeTOTVSRM, Identity|ConhecendooIdentity-100%5%.4, Identity|ConhecendooIdentity-ConfigurandoaintegraçãoentreTOTVSIdentityeTOTVSProtheus, Identity|ConhecendooIdentity-100%5%.5, Identity|ConhecendooIdentity-AutenticandonoTOTVSDatasulcomoTOTVSIdentity, Identity|ConhecendooIdentity-100%5%.6, Identity|ConhecendooIdentity-IntegraçãocomMSActiveDirectory, Identity|ConhecendooIdentity-Autenticaçãoporprovedorexterno, Identity|ConhecendooIdentity-FazendologinnaURLdiretadoTOTVSFluigcomoprovedorgenéricocadastradonoTOTVSIdentity, Identity|ConhecendooIdentity-Experiênciadelogindeusuário, Identity|ConhecendooIdentity-Recapitulando -->
