---
title: "Guia de Implantação do Analytics"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=107381593"
scraped_at: "2026-03-09T03:03:48.796Z"
depth: 1
anchors: 13
child_links: 41
---

# Guia de Implantação do Analytics

# Índice

# Objetivo

O objetivo deste guia é demonstrar como é realizada a implantação do Analytics, apresentando os passos para habilitar o ambiente e configurar os eventos. 

Quer conhecer ainda mais sobre o **Analytics**? Assista o treinamento sobre um projeto **GoodData** disponível no **Fluig Academy**.

# Descrição

O TOTVS Fluig Plataforma possui o Analytics, que permite a criação de Dashboards e Relatórios para acompanhamento de indicadores de informações que acontecem dentro da plataforma. O serviço está disponível apenas na nuvem, o que garante que todo o grande processamento de novas informações e análise dos dados aconteça com grande escalabilidade.

# Pré-requisitos

Nota

Como o serviço de Analytics está na nuvem, o servidor deverá estar habilitado para comunicação na porta **443** para **analytics.fluig.com**, caso não esteja habilitado não será possível enviar os dados.

# Habilitar o Analytics na plataforma

Para habilitar o Analytics no seu ambiente, os seguintes passos devem ser seguidos:

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)
- [Vídeo](#)

Obter um **projeto Analytics**. Nele será possível criar o conjunto de um ou mais *dashboards*no Analytics.

Abra um ticket através do [Portal de Clientes](https://suporte.totvs.com/) em "**Suporte → Entre em contato e fale conosco!**" preenchendo os seguintes campos:

| Organização | Selecionar a organização/Empresa |
| --- | --- |
| Assunto | Criação de projeto Analytics |
| Descrição | Informações para criação do contexto: 

      Nome da Empresa;
      CNPJ;
      Código do cliente TOTVS;
      Código do contexto a ser criado (normalmente nome da empresa, pode conter espaço, caracteres sem acentuação e números);
      Nome e sobrenome do administrador;
      E-mail do administrador do ambiente Analytics;
      Release do TOTVS Fluig Plataforma (ex: 1.6.4-180904) |
| Tipo de Solicitação | Suporte Técnico |
| Impacto | Dúvida sobre o produto |
| País | Brasil |
| Agrupador de serviços | fluig |
| Produto | fluig |
| Módulo | Ambiente |
| Agrupador de Rotina | Acesso |
| Ambiente | fluig → Informar o tipo de Ambiente (Produção ou Homologação) |
| Versão | Informar a release da plataforma TOTVS Fluig |

 - Ao receber o ticket com as informações acima, a equipe de atendimento TOTVS Fluig criará o projeto solicitado, podendo ser um para produção e outro para homologação se este também for solicitado.

 - O administrador receberá por e-mail um convite para participar do projeto no Analytics e como resposta no ticket, receberá o código do(s) projeto(s) criado(s).

 - Ao receber o e-mail com a resposta do ticket, você poderá seguir para o **passo 2** onde poderá configurar a integração do Analytics à plataforma TOTVS Fluig de forma simples e ágil.

 - Para que a integração ocorra o e-mail informado na criação do projeto precisa ser do administrador do Fluig.

Importante!

Se você é cliente Cloud, porém não tem acesso à senha do usuário **wcmadmin** entre em contato com time de suporte Cloud para que a senha seja disponibilizada.

No ambiente da plataforma que se deseja ligar a integração com o Analytics, será necessário acessar com o usuário '**wcmadmin**', acionar o menu **P****ainel de controle** > agrupador**WCM**e acionar a opção******Empresas**.

Selecione a**empresa** que deseja habilitar o Analytics e acione**editar**.

É permitido integrar apenas uma empresa (*tenant*) por projeto no Analytics.

Clique em **Cadastrar dados adicionais** e na tela adicione as seguintes chaves e valores:

| Chave | Valor |
| --- | --- |
| analytics.gd.project.id | <seu código de projeto retornado pelo suporte> |
| analytics.gd.user | <e-mail que recebeu o convite do suporte> |
| analytics.gd.pass | <senha cadastrada após o convite> |
| analytics.gd.active | true |

![](/download/attachments/107381593/image2013-12-9%200%3A13%3A41.png?version=2&modificationDate=1543408299000&api=v2)

Importante!

Se utilizar um valor do tipo **senha**recomendamos clicar no botão Esconder Senha (hide password) levando em consideração a Segurança da Informação.

![](/download/attachments/107381593/Image%202.jpg?version=2&modificationDate=1503516180000&api=v2)

![](/download/attachments/107381593/Image%203.jpg?version=2&modificationDate=1503516029000&api=v2)

Utilizando este recurso, mesmo logado com usuário administrador e acessando os Dados Adicionais ou executando uma requisição REST a senha apresentada permanecerá em segredo.

![](/download/attachments/107381593/Image%204.jpg?version=2&modificationDate=1503516029000&api=v2)

Com o convite recebido por e-mail, faça seu cadastro no Analytics. Com esse usuário e senha será possível acompanhar os dados enviados ao Analytics.

![](/download/attachments/107381593/ANA-6.png?version=1&modificationDate=1495542260000&api=v2)

Aviso

Não divulgue seu código de projeto, esse é a chave para acesso ao seu projeto.

# Envio dos Dados

Os dados são enviados em **intervalos regulares de 30 minutos,** sendo que são enviados apenas dados alterados durante o período. A comunicação sempre é feita do servidor da plataforma para o Analytics**, **sendo necessária a**liberação do firewall** para acesso aos endereços abaixo:

- [https://analytics.fluig.com](https://analytics.fluig.com)
- [https://secure.gooddata.com](https://secure.gooddata.com/)
- [https://na1.secure.gooddata.com](https://na1.secure.gooddata.com/)
- [https://na1-di.gooddata.com](https://na1-di.gooddata.com/)
- [https://secure-di.gooddata.com](https://secure-di.gooddata.com/)

Para enviar dados específicos de processos Workflow, o evento beforeSendData deve ser utilizado para configuração dos dados que são enviados para o Analytics. 

O primeiro parâmetro, **customField**, é um array de String já instanciado contendo 30 posições (de 0 a 29) . O segundo parâmetro, **customFact***,*também é um array com mais de 10 posições onde os dados devem ser do tipo double e o seu conteúdo será tratado como um "fato"*.*

A grande **diferença** entre um campo **customField** e **customFact** é que um campo fato (customFact), por se tratar de um número, pode realizar operações como soma, média, máximo e mínimo portanto, poderá ser calculado. segue alguns exemplos de tipos de campos e em qual valor deveria ficar:

| Campo | Campo a ser enviado | Justificativa |
| --- | --- | --- |
| Região do pedido de compra | customField | Como só se deseja contar em que regiões foram solicitados os pedidos, não é necessário ser um campo fato. |
| Nome do solicitante | customField | Apenas será usado como agrupador. |
| Valor total do pedido | customFact | Para tirar informações como valor de pedido médio de uma região. |
| Número de itens no pedido | customFact | Somar quantos itens foram solicitados por um solicitante. |

Abaixo um exemplo de implementação do evento preenchendo dois campos:

Atenção

Note a conversão do campo customFact para Double. Além disso, deve-se ressaltar que **campos do tipo "fato" não suportam a utilização de máscaras**.

**Exemplo de Evento do Workflows**

[?](#)

| `function` `beforeSendData(customFields, customFacts) {````customFields[0] =``"1"``;````customFields[1] =hAPI.getCardValue(``"campo_do_formulario"``);` ```customFacts[0]=10.53;````customFacts[1]=java.lang.Double.parseDouble(hAPI.getCardValue(``"campo_valor"``));``}` |
| --- |

Atenção

Para obter mais informações acesse [Criação de Relatórios no Analytics](/pages/viewpage.action?pageId=243630888). Nesta página são apresentadas definições e um passo a passo para criação de relatórios.


<!-- anchors: GuiadeImplantaçãodoAnalytics-Índice, GuiadeImplantaçãodoAnalytics-Objetivo, GuiadeImplantaçãodoAnalytics-Descrição, GuiadeImplantaçãodoAnalytics-Pré-requisitos, GuiadeImplantaçãodoAnalytics-HabilitaroAnalyticsnaplataforma, enable-analytics-steps, enable-analytics-steps-1, enable-analytics-steps-2, enable-analytics-steps-3, enable-analytics-steps-4, enable-analytics-steps-5, GuiadeImplantaçãodoAnalytics-EnviodosDados, highlighter_22909 -->
