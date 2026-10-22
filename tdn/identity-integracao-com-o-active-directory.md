---
title: "Identity | Integração com o Active Directory"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=146969024"
scraped_at: "2026-03-09T04:13:07.860Z"
depth: 2
anchors: 7
child_links: 31
---

# Identity | Integração com o Active Directory

---

O Identity permite três formas de integração com o Active Directory (AD):

1. Integração para sincronização de usuários e acesso com credenciais do AD, via [SmartSync](https://tdn.totvs.com/x/VIs0DQ).
2. Integração para *Single Sign On*, via [Desktop SSO](https://tdn.totvs.com/x/-JHCC).
3. Integração para provisionamento e revogação de acessos no AD, feito via administração no Identity.

Nos dois primeiros casos, utilizamos componentes de apoio, que viabilizam essa integração. O SmartSync é um componente *desktop* construído em .NET onde configura-se a conexão entre o Identity e os domínios do Active Directory com o qual deseja-se realizar a integração. Nesta configuração, devem ser informados os dados de conexão:

- Endereços do servidor AD.
- Base DN.
- Usuário com permissão administrativa do AD para leitura e gravação.
- Senha do usuário Administrador.
- Token de conexão, criado pelo Identity.

Por conta destes detalhes, é fundamental que o cliente destaque um colaborador com conhecimento da infraestrutura do Active Directory da empresa para providenciar estas informações.

No caso do Desktop SSO, trata-se de um *script*, que deve ser instalado no IIS e exposto de forma que o Identity possa acessá-lo.

Este *script* será responsável por viabilizar o *Single Sign On* (SSO) para o Identity. Desde que o usuário tenha entrado com suas credenciais de rede, no login do Windows, quando ele tentar acessar o Identity, ou qualquer aplicação que esteja integrada com o Identity, nenhum usuário e senha será requisitado para o usuário.

# Arquitetura

O Identity possui um componente chamado SmartSync, que funciona como um agente entre o Identity e o Active Directory do cliente e cujas responsabilidades consistem em:

- Executar a importação inicial de usuários do AD.
- Permitir que um usuário do Identity possa utilizar suas credenciais do AD para autenticação.
- Efetuar a sincronização de dados entre o Active Directory e o Identity, incluindo informações da conta de usuários existentes e novas contas que venham a ser criadas no AD.

É importante que o SmartSync esteja sempre disponível para que ele possa prover os serviços de sincronização e autenticação com credenciais AD. No caso deste componente estar *offline*, usuários do Identity possuem uma contingência para continuar com acesso aos seus aplicativos, que consiste em utilizar uma credencial própria (senha pessoal) que é definida no momento da ativação do usuário.

Abaixo relacionamos exemplos de alguns dos cenários possíveis:

Importante!

O SmartSync **não** suporta o protocolo LDAPS, apenas o LDAP pode ser usado.

- [Cenário 1](#)
- [Cenário 2](#)
- [Cenário 3](#)
- [Cenário 4](#)

 - Um servidor com SmartSync instalado, provendo sincronização e autenticação com credenciais AD.

 - Este cenário contempla a integração entre Identity e Active Directory, abrangendo a sincronização de usuários e autenticação utilizando credenciais do AD.

 - Não inclui alta disponibilidade.

![](/download/attachments/146969024/1.JPG?version=4&modificationDate=1586539797017&api=v2)

**Cenários simples, sem SSO e alta disponibilidade.**

 - Dois servidores, cada um com o SmartSync instalado, contemplando alta disponibilidade para sincronização e autenticação com credenciais AD.

 - Neste cenário, temos dois servidores atendendo a sincronização de usuários e a autenticação com credenciais AD. Se um dos dois servidores ficar *offline*, o outro servidor continua sustentando a sincronização e autenticação dos usuários.

 - Não há necessidade de *Load Balancer* porque o SmartSync possui um comportamento ativo, consumindo uma fila de requisições disponibilizadas pelo Identity.

 - *Single Sign On* não está disponível neste cenário.

![](/download/attachments/146969024/2.JPG?version=4&modificationDate=1586539832223&api=v2)

**Cenário contemplando alta disponibilidade de sincronização e autenticação com credencial AD, sem contemplar Single Sign On.**

 - Um servidor com SmartSync e Desktop SSO instalados, provendo sincronização de usuários e *Single Sign On* para o Identity, utilizando credenciais AD informadas no login do Windows.

 - Neste cenário temos o SmartSync fornecendo sincronização de usuários e o Desktop SSO fornecendo *Single Sign On*. Desde que o usuário tenha informado suas credenciais corretamente na tela de login do Windows, ele poderá acessar o Identity sem entrar com credenciais novamente.

 - Este cenário não contempla alta disponibilidade.

 - Se o Desktop SSO estiver *offline*, o usuário poderá autenticar-se no Identity com suas credenciais do AD.

 - Se o SmartSync estiver *offline*, o usuário poderá acessar o Identity utilizando credenciais que ele informou na ativação da conta. Trata-se de uma credencial de contingência.

![](/download/attachments/146969024/3.JPG?version=4&modificationDate=1586539857897&api=v2)

**Cenário onde temos sincronização de usuários e Single Sign On para acesso ao Identity, sem alta disponibilidade**

 - Três servidores, onde dois possuem SmartSync e Desktop SSO instalados, contemplando um ambiente de alta disponibilidade, e o terceiro servidor agindo como *Load Balancer*.

 - Neste cenário temos o SmartSync fornecendo sincronização de usuários e o Desktop SSO fornecendo *Single Sign On*. Desde que o usuário tenha informado suas credenciais corretamente na tela de login do Windows, ele poderá acessar o Identity sem entrar com credenciais novamente.

 - Este cenário contempla alta disponibilidade.

 - Se um Desktop SSO estiver *offline*, o *Load Balancer* se encarrega de direcionar a requisição para o servidor que está online.

 - Se um SmartSync estiver *offline*, a outra instalação continua provendo o serviço de sincronização de usuários.

![](/download/attachments/146969024/4.JPG?version=4&modificationDate=1586539891133&api=v2)

**Cenário onde temos sincronização de usuários e Single Sign On, com alta disponibilidade**

# Pré-requisitos

Consideramos que o ideal é providenciar um ambiente de alta disponibilidade, com duas máquinas dedicadas para o SmartSync e Desktop SSO e uma terceira máquina, utilizada para balanceamento de carga, no caso do Desktop SSO.

O cliente pode também optar por utilizar apenas uma máquina, onde ficará instalado o SmartSync e o Desktop SSO, eliminando a máquina de redundância e o *Load Balancer*.

Consulte na [Matriz de Portabilidade - TOTVS Identity](https://tdn.totvs.com/x/eDAxE) os requisitos de *hardware* e *software* necessários para manter o serviço de sincronização de usuários com o AD, autenticação com credenciais do AD e *Single Sign On*.

Este servidor, ou servidores caso se opte por alta disponibilidade, devem atender mais alguns requisitos:

- Acesso à internet, para conexão ao Identity.
- Acesso ao domínio ou domínios a serem configurados no SmartSync.
- Usuário com privilégios administrativos do AD para fins de sincronização e autenticação de usuários e/ou provisionamento e revogação de usuários no AD.
- A máquina onde será instalado o SmartSync / Desktop SSO não deve ser a máquina onde está instalado o AD / controlador de domínio, evitando expor a mesma à internet.

Caso possua o Active Directory [integrado diretamente com o TOTVS Fluig Plataforma](https://tdn.totvs.com/x/74eqCQ), ou seja, sem o intermédio do Identity, **essa configuração precisa ser desativada antes da integração do AD no Identity**. Se isso não for feito, poderão ocorrer conflitos de acesso e erros de usuário inválido em tela durante o uso do Fluig.


<!-- anchors: Identity|IntegraçãocomoActiveDirectory-Arquitetura, cenários, cenários--567939445, cenários--567939444, cenários--567939443, cenários--567939442, Identity|IntegraçãocomoActiveDirectory-Pré-requisitos -->
