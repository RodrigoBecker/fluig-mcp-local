---
title: "CON - Como configurar o envio de e-mail da release 1.5.6 à 1.5.13?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=185756210"
scraped_at: "2026-03-09T03:30:52.602Z"
depth: 2
anchors: 13
child_links: 38
---

# CON - Como configurar o envio de e-mail da release 1.5.6 à 1.5.13?

Atenção

Página destina a atualização 1.5.6 à 1.5.13 do TOTVS Fluig Plataforma.

Acesse a página original a partir da atualização 1.6: [Configuração de envio de e-mail](/pages/viewpage.action?pageId=257623560).

Caso possua uma atualização anterior à 1.5.6 acesse: [Como configurar o envio de e-mail na release 1.5.6 e inferiores?](/pages/viewpage.action?pageId=224124221)

# Índice

# Objetivo

O objetivo desta página é realizar a configuração de envio de *e-mail* no TOTVS Fluig Plataforma.

Importante

Clientes que possuem a plataforma hospedada no Cloud não terão acesso para verificar as configurações abaixo.

Nesse caso entre em contato com o Atendimento ou com o Cloud através de um *ticket* ou *e-mail* para que a equipe verifique.

# Configuração de envio de e-mail

Logado com o usuário **wcmadmin**, na tela de configurações clique em **Painel de Controle** → aba **WCM** → **Configurações do Sistema** → aba **Parâmetros da Plataforma**:
Edite as opções da seção **Notificações por e-mail**: 

- **Remente padrão**: ative para habilitar o envio de *e-mail* utilizando o *e-mail* informado no parâmetro "**E-mail do remetente**";
- **E-mail do remetente**: informe o endereço de *e-mail* que deve ser utilizado para enviar os *e-mails* do sistema;
- **Nome do remetente**: preencha para definir um nome junto ao *e-mail* de origem, por exemplo para identificar a empresa. Exemplo da exibição: NOME_DA_EMPRESA [adm@fluig.com](mailto:adm@fluig.com);
- **Todas notificações por e-mail**: ative para que todos os *e-mails* do produto sejam enviados com o *e-mail* informado no parâmetro "**E-mail do remetente**".

![](/download/attachments/185756210/image2016-2-5%2011_21_24.png?version=1&modificationDate=1523365875000&api=v2)

### Configuração de e-mail global

Para realizar o restante da configuração de envio de *e-mail* na plataforma é preciso, parar todos os serviços iniciados: FLUIG, Fluig_MemCached e Fluig_RealTime. 

Depois disso, basta seguir os passos abaixo para configuração de e-mail global (desta maneira, todas as empresas terão a mesma configuração de envio de *e-mail*).

Tudo o que for configurado como global, se extenderá para todas as empresas cadastradas. Para um cadastro individual, utiliza-se então a configuração de *e-mail* [por empresa](#CONComoconfiguraroenviodeemaildarelease1.5.6à1.5.13?-empresa).

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)

 - Após **parar os serviços do fluig** acesse o diretório [diretório_instalação]\jboss\standalone\configuration.

  - Edite o arquivo **standalone.xml**. Procure por "**mail-smtp**" para encontrar o bloco de configuração abaixo e altere "**host**" e "**port**" de acordo com a necessidade: 

     **standalone.xml**

     [?](#)
| ```````````````` |
| --- |

 - Para configuração do *e-mail* utilizando TLS procure por "**java:jboss/mail/Default**" para encontrar o bloco de configuração abaixo:

    **standalone.xml**

    [?](#)
| ```````````````` |
| --- |

A plataforma aceita apenas o protocolo de segurança TLS. O padrão SSL não é suportado.

 - Substitua esse bloco de acordo com o exemplo abaixo e preencha os dados, lembrando de adicionar o parâmetro **tls="true"**:

    **standalone.xml**

    [?](#)
| ```````````````````````````````````````````` |
| --- |

  Salve o arquivo e inicie os três serviços do fluig.

### Configuração de e-mail por empresa

Caso desejar configurar o envio de*e-mail* de uma empresa específica diferente dos parâmetros globais, acesse o cadastro da Empresa → aba "*E-mail*".

No cadastro por empresa, cada configuração será feita individualmente e as ações só valerão para a empresa em questão.

Caso alguma alteração seja feita no configuração global, o sistema sempre dará preferência para as configurações aplicadas por empresa.

Preencha os campos de acordo com a orientação a seguir:

- **Host:** endereço do servidor de envio de*e-mails* (SMTP);
- **Porta:** porta para SSL ou TLS;
- **Remetente:** endereço de *e-mail* do remetente;
- **Segurança:** habilite se o servidor de e-mail utilizar TLS. Somente o protocolo TLS é suportado na plataforma;
- **Autenticação:** habilite se for necessário informar um usuário e senha para autenticação no servidor de *e-mail*. Se for habilitado, os campos de usuário e senha serão exibidos em tela.

![](/download/attachments/185756210/configuracaoEmail.gif?version=1&modificationDate=1484855705000&api=v2)

Observação

É importante lembrar que os dados variam de acordo com o servidor de envio de *e-mail* utilizado. 

Se tiver dúvidas consulte a documentação do fornecedor ou entre em contato com o administrador de TI da sua empresa.


<!-- anchors: CONComoconfiguraroenviodeemaildarelease1.5.6à1.5.13?-Índice, CONComoconfiguraroenviodeemaildarelease1.5.6à1.5.13?-Objetivo, CONComoconfiguraroenviodeemaildarelease1.5.6à1.5.13?-Configuraçãodeenviodee-mail, CONComoconfiguraroenviodeemaildarelease1.5.6à1.5.13?-Configuraçãodee-mailglobal, samples, samples-1, samples-2, highlighter_321048, samples-3, highlighter_877126, samples-4, highlighter_269706, CONComoconfiguraroenviodeemaildarelease1.5.6à1.5.13?-Configuraçãodee-mailporempresa -->
