---
title: "Integração de aplicativos externos com o Fluig"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=496822391"
scraped_at: "2026-03-09T03:50:12.224Z"
depth: 2
anchors: 23
child_links: 53
---

# Integração de aplicativos externos com o Fluig

# Índice

# Objetivo

O objetivo deste guia é exemplificar a criação de um workflow para ser integrado com um aplicativo externo.

# Caso de uso

A empresa x necessita de um processo de solicitação de compra. A solicitação será iniciada por um usuário “comum” onde será incluído os dados da compra como categoria, justificativa de compra, fornecedor e a lista de produtos. Ao iniciar o processo um email deverá ser disparado para o fornecedor com a URL de acesso para uma página pública contendo os dados dos produtos para cotação. Após informar os valores dos produtos e submeter, o processo deverá ficar pendente com o gestor da área de compra para aprovação. Após aprovado um novo email é enviado para o fornecedor confirmando a solicitação de compra. O processo ficará pendente com o fornecedor até que ele submeta o envio dos produtos. Nesse momento o processo ficará pendente com a equipe de recebimento que fará a conferência dos produtos e finaliza o processo.

**                                                                                        ****Figura 1 - Workflow solicitação de compra.**

# Criação do Workflow (BPM)

Acesse a documentação completa em [http://tdn.totvs.com/x/dPwlE](https://tdn.totvs.com/x/dPwlE)

O workflow base e seu formulário foram criados pelo próprio desenhador de processos do BPM, após isso foi importado no Fluig dev studio e realizado as customizações necessárias. Para criar um novo processo acesse: Processos > Configurar Processos > Adicionar

Workflow

Todo o fluxo do processo foi feito apenas arrastando os componentes em tela. Para dúvidas referentes a processos segue toda documentação detalhada [http://tdn.totvs.com/x/widbB](https://tdn.totvs.com/x/widbB).

Para criar um formulário para o processo acesse a opção Formulário dentro da criação/edição do processo:

![](/download/attachments/496822391/Formulario.png?version=1&modificationDate=1560172865573&api=v2)                                                                                                         **Figura 2 - Criar formulário**

A partir deste ponto foi necessário apenas arrastar os componentes em tela. 

## Customizando o processo

Para customizar o processo e o formulário é necessário ter instalado e configurado o Fluig studio. Acompanhe os passos a seguir:

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)

  - Instalar Fluig studio [http://tdn.totvs.com/x/oxVbB](https://tdn.totvs.com/x/oxVbB)

 - Configurar Fluig studio [http://tdn.totvs.com/x/RYSbC](https://tdn.totvs.com/x/RYSbC)

****

 - Configurar servidor [http://tdn.totvs.com/x/UhgSCw#1-p1](https://tdn.totvs.com/x/UhgSCw)

 - Criar um novo projeto Fluig [http://tdn.totvs.com/x/UhgSCw](https://tdn.totvs.com/x/UhgSCw)

 - Importar o processo criado na sessão "Criação do Workflow (BPM)"

### Envio de e-mail

#### Template de e-mail

Toda documentação referente a customização de templates de e-mail está disponível em  [http://tdn.totvs.com/x/BJLCC](https://tdn.totvs.com/x/BJLCC)

Para criar um novo template simples de e-mail acompanhe os passos a seguir:

- [Passo 1](#)
- [Passo 2](#)

 - Criar um template de email em HTML ([Template HTML](https://github.com/fluig/workflow-solicitacao-de-compra/blob/master/workflow/layout_email/email_universo_totvs.html))

  **Template de e-mail**

[?](#)

| 123456789101112131415161718192021 | ```````Fluig``````` ```````````````````````````${MESSAGE}````````````````````````````` |
| --- | --- |

Na linha 13 adicionamos uma variável **${MESSAGE}**, o valor dessa variável será enviado no script responsável pelo envio de email.

 - Após criar o arquivo html é necessário importa-lo na plataforma.  Acesse o Fluig > Painel de controle > Templates de email > Adicionar . Informar Código do formulário, descrição e selecionar o arquivo html criado no passo 1 para realizar o upload.

![](/download/attachments/496822391/Captura%20de%20tela%20de%202019-06-10%2011-46-15.png?version=1&modificationDate=1560178083583&api=v2)**                                                                                                                                Figura 3 - Adicionar formulário**

#### Script de envio de e-mail

Acesse a documentação de envio de e-mail [http://tdn.totvs.com/x/m4HzCg](https://tdn.totvs.com/x/m4HzCg).

O script mencionado a seguir está disponível em nosso github. Clique [aqui](https://github.com/fluig/workflow-solicitacao-de-compra/blob/master/workflow/scripts/solicitacaodecompra.beforeStateEntry.js) para acessar.

Para criar um script de envio de e-mail acesso o Fluig studio. Clicar com botão direito do mouse na pasta “workflow” > novo > Script Fluig > Script Evento Workflow > beforeStateEntry e relacionar com o processo importado:

Segue abaixo como ficou nosso script de envio de e-mail após codificação:

**Envio de e-mail**

[?](#)

| `function` `beforeStateEntry(sequenceId){``` ```var` `parametros =``new` `java.util.HashMap();``` ```/*Esse valor poderia ser pego do fornecedor selecionado no formulário*/````var` `destinatarios =``new` `java.util.ArrayList();````destinatarios.add(``"jeferson.francisco@fluig.com"``);``` ```/*Etapa de cotação*/````if` `(sequenceId == 2) {``` ```parametros.put(``"MESSAGE"``,``"Nova cotação, acesse: https://wcm.fluig.com/portal///"` `+````"supplier-quotation?isFullScreen=true&WKNumProces="` `+ getValue(``"WKNumProces"``));````notifier.notify(getValue(``"WKUser"``),``"cotacao_fornecedor"``, parametros, destinatarios,``"text/html"``);``` ```/*Etapa de Envio do pedido*/````}``else` `if` `(sequenceId == 6) {``` ```parametros.put(``"MESSAGE"``,``"Cotação Aprovada, aguardando o envio dos produtos. Ao enviar os produtos acesse "` `+````"https://wcm.fluig.com/portal///send-order?isFullScreen=true&WKNumProces="````+ getValue(``"WKNumProces"``));````notifier.notify(getValue(``"WKUser"``),``"cotacao_fornecedor"``, parametros, destinatarios,``"text/html"``);````}` `}` |
| --- |

Onde:

**parametros.put :**

- O primeiro parâmetro é o nome da variável que definimos no template de e-mail
- O segundo parâmetro  é texto que será atribuído a variável “MESSAGE”

**notifier.notify:**

- O primeiro parâmetro que a função notify recebe é o código/matrícula do usuário que irá enviar o e-mail (remetente).
- O segundo parâmetro é o código do template que foi cadastrado no Fluig.
- O terceiro parâmetro é um mapa de dados (java.util.HashMap) que contém os parâmetros que serão utilizados para preencher as variáveis do template.Por padrão, os parâmetros WDK_VirtualDir (diretório virtual) e WDK_AdviceUser (Nome do colaborador remetente) são adicionados ao mapa de parâmetros automaticamente e podem ser utilizados no template, sem que os valores sejam adicionados pela personalização.
- O quarto parâmetro representa a lista de usuários que irão receber o e-mail (java.util.ArrayList). Esta lista de usuários consiste em uma lista de códigos de usuários cadastrados no Fluig e/ou e-mails diretos para caso seja necessário enviar o e-mail a endereços externos de destinatários não cadastrados na plataforma.
- O quinto e último parâmetro especifica qual será o formato do e-mail enviado. Os valores aceitos são "text/html" e "text/plain".

### Customizando o formulário

Para o nosso formulário precisamos da informação do usuário solicitante para exibição, número do processo, e a etapa que o processo se encontra para podermos realizar as tratativas de exibir/ocultar ou bloquear os campos, dependendo da etapa do processo. Para isso vamos inserir o seguinte trecho de código no arquivo [displayFields.js.](https://github.com/fluig/workflow-solicitacao-de-compra/blob/master/forms/94%20-%20Solicita%C3%A7%C3%A3o%20de%20compra/events/displayFields.js)

[?](#)

| 1234567891011 | `function` `displayFields(form,customHTML){``` ```var` `CURRENT_STATE = getValue(``"WKNumState"``) ? getValue(``"WKNumState"``) : 0;````var` `CURRENT_USER  = getValue(``"WKUser"``);` ```customHTML.append(``''` `+````' var NUM_PROCES = '` `+ getValue(``"WKNumProces"``) +``'; '` `+````' var CURRENT_USER = \''`  `+ CURRENT_USER +``'\'; '` `+````' var CURRENT_STATE = '` `+ CURRENT_STATE +``'; '` `+````''``);``}` |
| --- | --- |

Utilizamos o método “getValue()” para pegar informações do workflow e criar no html as variáveis:

- NUM_PROCESS: Número do processo
- CURRENT_USER: Usuário logado
- CURRENT_STATE: Etapa que se encontra o processo

Cada evento possui acesso ao *handle* da API de *workflow* pela variável global hAPI, com ela é possível pegar diversas informações. Saiba mais em [http://tdn.totvs.com/x/8uAlE](https://tdn.totvs.com/x/8uAlE). Com as informações do processo sendo acessadas diretamente no HTML conseguimos manipular nosso formulário para exibir/ocultar e bloquear campos dependendo da etapa que o processo se encontra. No [HTML do nosso formulário](https://github.com/fluig/workflow-solicitacao-de-compra/blob/master/forms/94%20-%20Solicita%C3%A7%C3%A3o%20de%20compra/Solicita%C3%A7%C3%A3o_de_compra.html) vamos adicionar um script chamado [custom.js](https://github.com/fluig/workflow-solicitacao-de-compra/blob/master/forms/94%20-%20Solicita%C3%A7%C3%A3o%20de%20compra/custom.js) para realizar as alterações necessárias.

[?](#)

| 123456789101112131415161718192021 | `$(``function``() {``` ```switch``(CURRENT_STATE) {````case` `0:````case` `1:````solicitOrder();````break``;````case` `2:````toBudget();````break``;````case` `3:````approve();````break``;````case` `6:````sendOrder();````break``;````case` `16:````checkOrder();````break``;````}``});` |
| --- | --- |

O “CURRENT_STATE” pode ser identificado nas propriedades da etapa do processo:

![](/download/attachments/496822391/Captura%20de%20tela%20de%202019-06-10%2013-43-54.png?version=1&modificationDate=1560185097237&api=v2)                                                                                   **Figura 4: Propriedades do processo**

Para deixar nosso campo de “valor” dos produtos no formato monetário vamos utilizar uma biblioteca open source disponivel em [https://github.com/plentz/jquery-maskmoney](https://github.com/plentz/jquery-maskmoney). Fazer o download e adicionar o script no [HTML](https://github.com/fluig/workflow-solicitacao-de-compra/blob/master/forms/94%20-%20Solicita%C3%A7%C3%A3o%20de%20compra/Solicita%C3%A7%C3%A3o_de_compra.html) da mesma forma que adicionamos o [custom.js](https://github.com/fluig/workflow-solicitacao-de-compra/blob/master/forms/94%20-%20Solicita%C3%A7%C3%A3o%20de%20compra/custom.js). Devemos alterar nosso [custom.js](https://github.com/fluig/workflow-solicitacao-de-compra/blob/master/forms/94%20-%20Solicita%C3%A7%C3%A3o%20de%20compra/custom.js) para que a primeira instrução seja a formatação do campo de valor:

[?](#)

| 123 | `$(``function``() {``` ```$(``".price"``).maskMoney({prefix:``'R$ '``, allowNegative:``false``, thousands:``'.'``, decimal:``','``, affixesStay:``true``});` |
| --- | --- |

Para iniciar o processo é necessário selecionar um fornecedor em uma lista. Esta lista de fornecedores está sendo carregada a partir de um [dataset](https://github.com/fluig/workflow-solicitacao-de-compra/blob/master/datasets/fornecedores.js). saiba mais sobre datasets em [http://tdn.totvs.com/x/eitbB](https://tdn.totvs.com/x/eitbB)

**Integração com aplicações externas**

Para realizar chamadas nas APIs do Fluig é necessário ter cadastrado um aplicativo no Fluig. Para realizar esse cadastro acesse o passo a passo na documentação [http://tdn.totvs.com/x/KAFlDw#FluigAPI-app](https://tdn.totvs.com/x/KAFlDw#FluigAPI-app).  O aplicativo web utilizando THF para o estudo de caso encontra-se disponível em nosso [repositório no github](https://github.com/fluig/app-angular-thf). Todos os detalhes de deploy de um aplicativo THF no Fluig encontram-se no README do projeto.

Após gerar as chaves de autenticação foi necessário configurar o aplicativo no arquivo [environment.prod.ts](https://github.com/fluig/app-angular-thf/blob/master/src/main/universo-totvs-app/src/environments/environment.prod.ts).

Para movimentar processos do BPM é necessário que o token seja do usuário responsável pela tarefa. Para gerar token de usuário utilize a [API disponível em nosso portal](https://api.fluig.com/old/resource_WCMServiceRest.html#/wcm/oauth/generateKeysToUser).


<!-- anchors: IntegraçãodeaplicativosexternoscomoFluig-Índice, IntegraçãodeaplicativosexternoscomoFluig-Objetivo, IntegraçãodeaplicativosexternoscomoFluig-Casodeuso, IntegraçãodeaplicativosexternoscomoFluig-CriaçãodoWorkflow(BPM), IntegraçãodeaplicativosexternoscomoFluig-Customizandooprocesso, fluig_studio, fluig_studio-1, fluig_studio-2, fluig_studio-3, fluig_studio-4, fluig_studio-5, IntegraçãodeaplicativosexternoscomoFluig-Enviodee-mail, IntegraçãodeaplicativosexternoscomoFluig-Templatedee-mail, Templateemail, Templateemail-Template email, highlighter_320573, Templateemail-Template email, IntegraçãodeaplicativosexternoscomoFluig-Scriptdeenviodee-mail, highlighter_553027, IntegraçãodeaplicativosexternoscomoFluig-Customizandooformulário, highlighter_820155, highlighter_225356, highlighter_868469 -->
