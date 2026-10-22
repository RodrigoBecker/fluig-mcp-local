---
title: "CON - Como configurar o envio de e-mail na release 1.5.6 ou anterior?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=224124221"
scraped_at: "2026-03-09T03:30:47.098Z"
depth: 2
anchors: 11
child_links: 35
---

# CON - Como configurar o envio de e-mail na release 1.5.6 ou anterior?

Atenção

Página destinada a atualizações 1.5.6 e inferiores do TOTVS Fluig Plataforma.

Caso possua uma atualização 1.6 ou superior, acesse: [Configuração de envio de e-mail](/pages/viewpage.action?pageId=257623560)

Para atualizações 1.5.6 a 1.5.13, acesse: [CON - Como configurar o envio de e-mail da release 1.5.6 à 1.5.13?](/pages/viewpage.action?pageId=185756210)

# Índice

# Objetivo

O objetivo desta página é realizar a configuração de envio de *e-mail* no TOTVS Fluig Plataforma.

Importante

Clientes que possuem a plataforma hospedada no Cloud não terão acesso para verificar as configurações abaixo.

Nesse caso entre em contato com o Atendimento ou com o Cloud através de *ticket* ou e-mail para que a equipe verifique.

# Configuração de envio de e-mail

Para realizar a configuração de envio de*e-mail* na plataforma é preciso, em primeiro lugar, parar todos os serviços iniciados: FLUIG, Fluig_MemCached e Fluig_RealTime. Depois disso, basta seguir os passos abaixo:

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)

 - Após **parar os serviços** do fluig acesse o diretório [diretório_instalação]\jboss\standalone\configuration.

  - Edite o arquivo **standalone.xml**. Procure pelos seguintes parâmetros:

    **fluig/mail.defaultSender**: informe "**true**" para habilitar o envio de *e-mail* utilizando o *e-mail* informado no parâmetro "fluig/mail.from";

    - **fluig/mail.from**: informe o endereço de *e-mail* que deve ser utilizado para enviar os *e-mails* do sistema;

    - **fluig/mail.personal**: preencha para definir um nome junto ao *e-mail* de origem, por exemplo para identificar a empresa. Exemplo da exibição: NOME_DA_EMPRESA [adm@fluig.com](mailto:adm@fluig.com);

    - **fluig/mail.allNotification**: informe "**true**" para que todos os *e-mails* do produto sejam enviados com o *e-mail* informado no parâmetro "fluig/mail.from".

Procure por "**mail-smtp**" para encontrar o bloco de configuração abaixo e altere "**host**" e "**port**" de acordo com a necessidade: 

     **standalone.xml**

[?](#)

| ```````````````` |
| --- |

 - Para configuração do *e-mail* utilizando TLS procure por "**java:jboss/mail/Default**" para encontrar o bloco de configuração abaixo:

    **standalone.xml**

    [?](#)
| ```````````````` |
| --- |

 - Substitua esse bloco de acordo com o exemplo abaixo e preencha os dados, lembrando de adicionar o parâmetro **tls="true"**:

    **standalone.xml**

    [?](#)
| ```````````````````````````````````````````` |
| --- |

  Salve o arquivo e inicie os três serviços do fluig.


<!-- anchors: CONComoconfiguraroenviodeemailnarelease1.5.6ouanterior?-Índice, CONComoconfiguraroenviodeemailnarelease1.5.6ouanterior?-Objetivo, CONComoconfiguraroenviodeemailnarelease1.5.6ouanterior?-Configuraçãodeenviodee-mail, samples, samples-1, samples-2, highlighter_264174, samples-3, highlighter_726848, samples-4, highlighter_479999 -->
