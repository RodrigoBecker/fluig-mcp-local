---
title: "CON - Como configurar o envio de e-mail na release 1.6"
url: "https://tdn.totvs.com/display/public/fluig/CON+-+Como+configurar+o+envio+de+e-mail+na+release+1.6"
scraped_at: "2026-03-09T03:30:41.823Z"
depth: 2
anchors: 17
child_links: 41
---

# CON - Como configurar o envio de e-mail na release 1.6

Atenção

Esta página foi revisada para considerar as configurações de servidor para a atualização 1.6.

Caso possua atualização 1.7 acesse [Configuração de envio de e-mail](/pages/viewpage.action?pageId=257623560)

Caso possua atualização da 1.5.6 à 1.5.13, acesse: [Como configurar o envio de e-mail da release 1.5.6 à 1.5.13?](https://tdn.totvs.com/x/MmoSCw)

Para atualizações 1.5.6 ou anteriores da plataforma, acesse: [Como configurar o envio de e-mail na release 1.5.6 e inferiores?](https://tdn.totvs.com/x/Pd1bDQ)

# Objetivo

---

O objetivo deste guia é realizar a configuração de envio de *e-mail* no TOTVS Fluig Plataforma. Existem duas formas de configuração de e-mail: **por Empresa** a configuração é feita individualmente e será aplicada apenas para a empresa em questão e a configuração **Global** que, caso for configurado, será obedecido por todas as empresa cadastradas na plataforma. É importante lembrar que prevalecerá a configuração por empresa caso ambas forem realizadas.

# Configuração de envio de e-mail

---

Importante!

Caso você tenha envio de e-mail configurado anterior à atualização 1.6.1, será necessário limpar os dados antigos de conexão do Servidor de e-mail pois a partir da atualização 1.6.1 essas configurações são feitas em tela.

Autentique-se na plataforma com o usuário **wcmadmin** e acesse:**Painel de Controle** → **WCM** → **Configurações do Sistema** → aba **Parâmetros da Plataforma**: 

Edite as opções da seção **Notificações por e-mail**: 

- **Remetente padrão**: ative para habilitar o envio de *e-mail* utilizando o endereço informado no parâmetro **E-mail do remetente**;

- **E-mail do remetente**: informe o endereço de *e-mail* que deve ser utilizado para enviar os *e-mails* do sistema;

- **Nome do remetente**: preencha para definir um nome junto ao *e-mail* de origem, por exemplo, para identificar a empresa;

- **Todas as notificações por e-mail**: ative para que todos os e-mails do produto sejam enviados com o *e-mail* informado no parâmetro **E-mail do remetente**.

- **Agrupar e-mails no envio**: ative para que os *e-mails* a serem enviados sejam agrupados e disparados a cada 2 segundos. Quando desabilitado, cada *e-mail* será disparado individualmente, o que em grandes quantidades pode causar o bloqueio das mensagens por serviços como o Gmail.

Alguns servidores de e-mail podem não suportam o envio de e-mails em nome de outros usuários, ou seja, utilizarão sempre o e-mail configurado nesta tela como remetente padrão no ato do envio das notificações.

![](/download/attachments/555865966/Image%207.jpg?version=1&modificationDate=1595264336497&api=v2)

**Figura 1 - Notificações por e-mail**

****

## Configuração de e-mail global na atualização 1.6.2 e superiores

---

A partir da versão 1.6.2 a plataforma passa a suportar protocolo SSL.

Autentique-se na plataforma com o usuário **wcmadmin** e acesse:** Painel de Controle** → aba **WCM** → **Configurações do Sistema** → aba **Parâmetros da Plataforma**: 

Edite as opções da seção **Configuração de e-mail**: 

- **Segurança:****Não:**Seleciona-o caso não utilize segurança no envio de e-mail.
- **TLS***(Transport Layer Security):*Selecione-o caso deseje utilizar este protocolo de criptografia.
- **SSL***(**Secure Socket Layer): *Selecione-o caso deseje utilizar este protocolo de criptografia.

**Host do Servidor: **Endereço do servidor de envio de *e-mails* (SMTP);**Porta do Servidor:** Porta do servidor de envio de *e-mails* (SMTP). A porta padrão é 25.**Autenticação: **Habilite se for necessário informar um usuário e senha para autenticação no servidor de *e-mail*. Se for habilitado, os campos de usuário e senha deverão ser preenchidos.** **Ao habilitar o recurso, é exibido o indicativo **ON**, informando que o recurso está ativo. Quando esse recurso é desabilitado, é exibido o indicativo **OFF**.**Usuário: ***Login* do usuário utilizado na autenticação do servidor de *e-mail*.**Senha: **Senha utilizada na autenticação do servidor de* e-mail*.
****

Figura 2 - **Configuração Global de E-Mail****na versão 1.6.2**

## Configuração de e-mail global na versão 1.6.1

---

Autentique-se na plataforma com o usuário **wcmadmin** e acesse:** Painel de Controle** → aba **WCM** → **Configurações do Sistema** → aba **Parâmetros da Plataforma**: 

Edite as opções da seção **Configuração de e-mail**: 

- **Host do Servidor: **Endereço do servidor de envio de *e-mails* (SMTP);
- **Porta do Servidor:** Porta do servidor de envio de *e-mails* (SMTP). A porta padrão é 25.
- **Segurança (TLS): **Habilite se o servidor de *e-mail* utilizar TLS. Somente o protocolo TLS é suportado na plataforma. Ao habilitar o recurso, é exibido o indicativo **ON**, informando que o recurso está ativo. Quando esse recurso é desabilitado, é exibido o indicativo **OFF**.
- **Autenticação: **Habilite se for necessário informar um usuário e senha para autenticação no servidor de *e-mail*. Se for habilitado, os campos de usuário e senha deverão ser preenchidos.** **Ao habilitar o recurso, é exibido o indicativo **ON**, informando que o recurso está ativo. Quando esse recurso é desabilitado, é exibido o indicativo **OFF**.
- **Usuário: ***Login* do usuário utilizado na autenticação do servidor de *e-mail*.
- **Senha: **Senha utilizada na autenticação do servidor de* e-mail*.

Atenção!

Tudo que for configurado como global será aplicado para todas as empresas cadastradas na plataforma. Para realizar a configuração para uma única empresa, siga a documentação [por empresa](#CONComoconfiguraroenviodeemailnarelease1.6-empresa).

![](/download/attachments/555865966/Image%203.jpg?version=1&modificationDate=1595264336583&api=v2)

**Figura 3 - Configuração Global de E-Mail na versão 1.6.1**

## Configuração de e-mail global na versão 1.6

---

Para realizar o restante da configuração de envio de *e-mail* na plataforma, é preciso parar todos os serviços iniciados: FLUIG, Fluig_Indexer e Fluig_RealTime.

Depois disso, basta seguir os passos abaixo para configuração de *e-mail* global. Tudo o que for configurado como global será aplicado para todas as empresas cadastradas na plataforma. Para realizar a configuração para uma única empresa, siga a documentação [por empresa](#CONComoconfiguraroenviodeemailnarelease1.6-empresa).

Atenção!

É essencial que os serviços do fluig sejam parados para realizar esta configuração, e que após configurada os serviços podem ser reinicializados normalmente. 

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)

 - Após parar os serviços do fluig acesse o diretório [diretório_instalação]\appserver\domain\configuration.

  - Edite o arquivo domain.xml.

  - Procure por "mail-smtp" para localizar o bloco de configuração abaixo.

  - Altere os parâmetros ***host*** e ***port*** de acordo com as definições do seu servidor de *e-mail.*

[?](#)

| ```````````````` |
| --- |

 - Para configuração do *e-mail* utilizando TLS localize o bloco de configuração "java:jboss/mail/Default".

A plataforma aceita apenas o protocolo de segurança TLS. O padrão SSL não é suportado.

[?](#)

| ```````````````` |
| --- |

 - Substitua o bloco localizado no Passo 3 com o conteúdo do exemplo abaixo.

 - Preencha os dados de autenticação (*username* e *password*), lembrando de adicionar o parâmetro **tls="true"**:

[?](#)

| ```````````````````````````` |
| --- |

 - Salve o arquivo e inicie os serviços do fluig.

****

# Configuração de e-mail por empresa

---

No cadastro por empresa, cada configuração será feita individualmente e será aplicada apenas para a empresa em questão.

A plataforma sempre dará preferência para as configurações aplicadas por empresa, mesmo quando alguma alteração for realizada na configuração global. 

- [Passo 1](#)
- [Passo 2](#)

 - Caso deseje configurar o envio de *e-mail* de uma empresa específica, de forma diferente dos [parâmetros globais](#CONComoconfiguraroenviodeemailnarelease1.6-global), autentique-se na plataforma com o usuário **wcmadmin**.

 - Acesse o **Painel de Controle** → aba **WCM** → **Empresas**. 

 - Selecione a empresa desejada e clique no *link* **Editar**.

 - Acesse a aba ***E-mail**.*

**

**Figuras 4 - Acessando as configurações da empresa**

Preencha os campos de acordo com a orientação a seguir:

 - **Habilitar:** habilita a configuração de e-mail específica para a empresa selecionada;

 - **Agrupar e-mails no envio**: agrupa e dispara a cada 2 segundos os *e-mails* que devem ser enviados. Quando desabilitado, cada *e-mail* será disparado individualmente, o que em grandes quantidades pode causar o bloqueio das mensagens por serviços como o Gmail.

 - **Host:** endereço do servidor de envio de *e-mails* (SMTP);

 - **Porta:** porta do servidor de envio de *e-mails* (SMTP);

 - **Remetente:** endereço de *e-mail* do remetente;

 - **Segurança:** habilite se o servidor de *e-mail* utilizar TLS. Somente o protocolo TLS é suportado na plataforma;

 - **Autenticação:** habilite se for necessário informar um usuário e senha para autenticação no servidor de *e-mail*. Se for habilitado, os campos de usuário e senha serão exibidos em tela.

![](/download/attachments/555865966/007_03_01.png?version=1&modificationDate=1595264335897&api=v2)

**Figura 5 - Exemplo de configuração de e-mail por empresa**


<!-- anchors: CONComoconfiguraroenviodeemailnarelease1.6-Objetivo, CONComoconfiguraroenviodeemailnarelease1.6-Configuraçãodeenviodee-mail, CONComoconfiguraroenviodeemailnarelease1.6-Configuraçãodee-mailglobalnaatualização1.6.2esuperiores, CONComoconfiguraroenviodeemailnarelease1.6-Configuraçãodee-mailglobalnaversão1.6.1, CONComoconfiguraroenviodeemailnarelease1.6-Configuraçãodee-mailglobalnaversão1.6, samples, samples-1, samples-2, highlighter_914653, samples-3, highlighter_610166, samples-4, highlighter_363358, CONComoconfiguraroenviodeemailnarelease1.6-Configuraçãodee-mailporempresa, empresa, empresa-872616687, empresa-872616688 -->
