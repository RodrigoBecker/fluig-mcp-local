---
title: "Como alterar a porta de acesso à plataforma em HTTP e HTTPS"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=507971056"
scraped_at: "2026-03-09T04:02:34.516Z"
depth: 2
anchors: 30
child_links: 81
---

# Como alterar a porta de acesso à plataforma em HTTP e HTTPS

Fique atento!

Esta página foi revisada para considerar as configurações do TOTVS Fluig **a partir** da atualização **1.6**.

# Objetivo

---

Este guia visa mostrar o procedimento para alterar a porta de acesso à plataforma em HTTP e HTTPS. Se desejar trocar o conjunto de portas padrão, acesse [Como alterar o conjunto de portas padrão da plataforma](/pages/viewpage.action?pageId=507972900).

**oculto**

A informação dessa página foi replicada para o artigo: [https://centraldeatendimento.fluig.com/hc/pt-br/articles/360027791251](https://centraldeatendimento.fluig.com/hc/pt-br/articles/360027791251)

Se fizer qualquer alteração aqui, é importante lembrar de atualizar esse artigo!

# Alterando a porta de acesso

---

Para alterar a porta de acesso da URL da plataforma, verifique os passos conforme a configuração do seu ambiente: HTTP, HTTPS ou integrado ao TOTVS Identity.

## Alterar porta com protocolo HTTP

---

Siga os passos abaixo:

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)
- [Passo 6](#)
- [Passo 7](#)
- [Passo 8](#)

 - Logar com o usuário **wcmadmin** e acessar **Painel de Controle →** **WCM** **→** **Configurações do Sistema**. 

![](/download/attachments/507971056/Image%2018.jpg?version=1&modificationDate=1566215747967&api=v2)

  - Em **Configuração do Sistema** **→ Aba Portal,** no campo **URL do Portal,** altere para a nova porta.

  - Ao finalizar a alteração clique em**Salvar.**

![](/download/attachments/507971056/Image%2019.jpg?version=1&modificationDate=1566215748463&api=v2)

 - Pare os serviços do Fluig em sua ordem correta (fluig, fluig_Indexer e fluig_RealTime).

 - **A partir da atualização 2.0**:Acesse [diretório_instalação]/appserver/standalone/configuration e edite o arquivo **standalone.xml**.

 - **Para atualizações 1.6 até 1.8.2**:Acesse [diretório_instalação]/appserver/domain/configuration e edite o arquivo **domain.xml**.

 - No arquivo editado (standalone.xml ou domain.xml, de acordo com a atualização do Fluig que você utiliza), localize o trecho abaixo e altere para a mesma porta informada no passo 2.

[?](#)

| `` |
| --- |

 - Localize o trecho abaixo. A variável deve conter o IP interno do servidor do Fluig com a porta interna. Altere para a **mesma porta** informada no **passo 2**.

[?](#)

| `` |
| --- |

 - Localize o trecho abaixo e verifique se o endereço IP configurado na variável FLUIG_URL consta na variável NETWORK_IP_ADDRESSES. Inclua-o se necessário.

[?](#)

| `` |
| --- |

 - Ao finalizar **salve** o arquivo.

Pronto! Agora é só iniciar os serviços do Fluig na ordem correta (fluig_RealTime, fluig_Indexer e fluig), e então acessá-lo pela nova porta.

## Alterar porta com protocolo HTTPS

---

Siga os passos abaixo:

Para saber mais informações sobre configuração HTTPS, acesse [essa documentação](/pages/viewpage.action?pageId=354472893).

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)
- [Passo 6](#)

 - Logar com o usuário **wcmadmin** e acessar **Painel de Controle →** **WCM** **→** **Configurações do Sistema**. 

![](/download/attachments/507971056/Image%2018.jpg?version=1&modificationDate=1566215747967&api=v2)

 - Em **Configuração do Sistema** **→ Aba Portal,** no campo **URL do Portal,**altere para a nova URL.****É importante mencionar que as portas padrões deste protocolo são a **443** e **8443** sendo que, a porta 8443 vem por *default* na instalação da plataforma. Se desejar alterar para a porta **443**, informe a URL conforme o exemplo: **https://<HOST>/portal**, sem informar a porta.

 - Ao finalizar a alteração clique em**Salvar.**

![](/download/attachments/507971056/Image%202.jpg?version=1&modificationDate=1566215748930&api=v2)

 - Pare os serviços do Fluig em sua ordem correta (fluig, fluig_Indexer e fluig_RealTime).

 - **A partir da atualização 2.0**:Acesse [diretório_instalação]/appserver/standalone/configuration e edite o arquivo **standalone.xml**.

 - **Para atualizações 1.6 até 1.8.2**:Acesse [diretório_instalação]/appserver/domain/configuration e edite o arquivo **domain.xml**.

 - No arquivo editado (standalone.xml ou domain.xml, de acordo com a atualização do Fluig que você utiliza), localize o trecho abaixo e altere para a porta**443**.

[?](#)

| `` |
| --- |

 - Ao finalizar salve o arquivo.

** **

**Pronto!** **Agora é só iniciar os serviços do Fluig e acessá-lo pela nova URL**.

 - Inicie os serviços do **Fluig** na ordem recomendada: **fluig_RealTime, fluig_Indexer e fluig**.

## Alterar porta com TOTVS Identity integrado

---

Caso seu ambiente tenha integração com o **TOTVS Identity** é necessário seguir os procedimentos abaixo:

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)

 - Acessar o contexto criado no Identity, por exemplo, https://[suaempresa].fluigidentity.com, com as credenciais do administrador.

 - Acionar o menu **Aplicativos**.

 - Acionar **Fluig** na lista de aplicativos. É possível localizá-lo utilizando o campo Pesquisar no canto superior esquerdo.

 - Selecionar a aba **Entrar**.

 - Acionar **Editar** localizado no canto superior direito.

![](/download/attachments/507971056/editar_fluig_app.gif?version=1&modificationDate=1566215749020&api=v2)

 - Informar o novo endereço de acesso à plataforma no campo **Domínio**.

 - Ao final da URL de acesso deve ser sempre incluído o caminho **/portal/idp.**

  **Exemplos:**

http://meufluig.com:8080/portal/idp (Protocolo HTTP)

https://meufluig.com:8443/portal/idp (Protocolo HTTPS com a porta *default*)

https://meufluig.com/portal/idp (Protocolo HTTPS com a porta for 443)

 - Acionar **Salvar** no final da página.

![](/download/attachments/507971056/dom%C3%ADnio.png?version=2&modificationDate=1599073983413&api=v2)

Clique no link e acesse a documentação completa referente a [Integração da plataforma com o Identity](/pages/viewpage.action?pageId=73080143).

A partir de agora, a configuração será realizada na plataforma.

 - Acessar a plataforma com o usuário '**wcmadmin**'.

 - Acessar o **Painel de Controle** → **WCM** → **Empresas**.

 - Assinalar a empresa desejada e acionar **Editar**.

![](/download/attachments/507971056/editar_empresa2.gif?version=1&modificationDate=1566215749683&api=v2)

 - Acessar a aba **Autenticação**.

 - Para garantir que os dados informados serão atualizados no Identity, acionar **Ações**→ **Testar conexão**.

 - Se a mensagem "Conexão com o servidor do Identity realizada com sucesso" for apresentada, a configuração está correta e pode ser concluída.

 - Acionar **Salvar**. 

![](/download/attachments/507971056/testar_conexao.gif?version=1&modificationDate=1566215750263&api=v2)


<!-- anchors: ComoalteraraportadeacessoàplataformaemHTTPeHTTPS-Objetivo, ComoalteraraportadeacessoàplataformaemHTTPeHTTPS-Alterandoaportadeacesso, ComoalteraraportadeacessoàplataformaemHTTPeHTTPS-AlterarportacomprotocoloHTTP, samples, samples-1, samples-2, samples-3, samples-4, samples-5, highlighter_326784, samples-6, highlighter_841346, samples-7, highlighter_281465, samples-8, ComoalteraraportadeacessoàplataformaemHTTPeHTTPS-AlterarportacomprotocoloHTTPS, samples1, samples1-1, samples1-2, samples1-3, samples1-4, samples1-5, highlighter_856824, samples1-6, ComoalteraraportadeacessoàplataformaemHTTPeHTTPS-AlterarportacomTOTVSIdentityintegrado, identity, identity-1, identity-2, identity-3, identity-4 -->
