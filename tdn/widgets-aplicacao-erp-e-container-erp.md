---
title: "Widgets Aplicação ERP e Container ERP"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=204965658"
scraped_at: "2026-03-09T04:55:45.395Z"
depth: 3
anchors: 9
child_links: 51
---

# Widgets Aplicação ERP e Container ERP

# Índice

# Objetivo

O objetivo deste guia é apresentar brevemente a configuração dos *widgets* Aplicação ERP e Container ERP e seus detalhes técnicos de funcionamento.

# Introdução

Os *widgets* Aplicação ERP e Container ERP permitem que telas do ERP que usem tecnologia do Framework HTML sejam exibidas dentro do fluig. O primeiro é utilizado para aplicações (telas) e o segundo para *widgets* do ERP.

# Funcionamento e configuração

A configuração e o funcionamento de ambos é simples, bastando suprir o contexto do ERP para possibilitar o carregamento dos dados.

## Aplicação ERP

Neste *widget* é possível configurar o contexto na edição de página e informar o valor padrão, se houver parâmetros no restante da URL neste formato: /portal/p/[Código de Empresa]/[Página]#/[Contexto do ERP]/[Restante da Página]/ i.e.: /portal/p/empresa/erpapp#/erp1/path/to/application, este valor vai suprimir a configuração.

Se for necessário obter a URL da página a partir da qual a aplicação ERP foi chamada para incluir um botão Voltar / Cancelar, por exemplo, a partir do **fluig 1.5.6** é possível por meio do seguinte comando javascript:

[?](#)

| `WCMAPI.getSessionAttribute(``'ERPApplication_referrer'``);` |
| --- |

## Container ERP

Neste *widget* somente é configurada a URL na edição de página, isso permite colocar vários *widgets* em uma página e montar um painel com informações relevantes ou em uma comunidade onde estes dados possam ser relevantes.

Para funcionar corretamente, o *framework* tem que ser disponibilizado junto ao contexto do ERP. Aqui, como exemplo, será usado o valor /erp1 e segue a estrutura:

| Hierarquia de pastas | Descrição |
| --- | --- |
| Hierarquia de pastas | Descrição |
| /* | Contexto do TOTVS Fluig Plataforma. |
| /erp1 <- contexto do erp1 | Contexto do ERP. |
|        /totvs-html-framework |  |
|                /js | Dependências javascript. |
|                    /setup/config-app.js | Configuração do BASE_URL usado como referência pelo RequireJS. |
|                /fluig | Arquivos de configuração do TOTVS Fluig Plataforma. |
|                        /main.js | Carregamento do RequireJS e definição das dependências. |
| /erp2 <- contexto do erp2 | Contexto do ERP |
|        /totvs-html-framework |  |
|              /... | Mesmo padrão de estrutura. |

O *framework* desenvolvido é baseado no RequireJs para o gerenciamento das dependências do Javascript, então para evitar conflito com as dependências do próprio Fluig Plataforma, estas devem ser carregadas somente ao final do carregamento da página.

Após as configurações e RequireJs, são carregadas as dependências do Angular e finalmente o conteúdo do ERP.

A chamada a seguir realiza a injeção do componente em um div pré-existente na página.

[?](#)

| `login.checkLogin( html , error, url, angular, that.widgetLink)` |
| --- |

Após a injeção do componente na página todo o comportamento da tela é de responsabilidade do ERP.

Caso haja algum problema no carregamento será exibida uma mensagem na tela e o log do browser vai informar mais detalhes, além disso é possível usar as ferramentas disponibilizadas pelo browser para identificar os arquivos indisponíveis e possíveis problemas de lentidão.

# Proxy reverso

Como o Fluig Plataforma e o ERP são servidores distintos, cada um atendente em um domínio distinto, o que fere a política *Same-Origin* dos *browsers*, deve ser configurada uma ferramenta de *proxy* reverso pare evitar esta situação, i.e. Apache Server.

Os mapeamentos devem ser feitos de forma que o Fluig Plataforma fique na raiz do domínio e o ERP fique em um contexto abaixo, conforme demonstrado na tabela de hierarquia de pastas.

A configuração do proxy é de responsabilidade do ERPs, estes são os mapeamentos informados:

| Produto | Contexto | Destino |
| --- | --- | --- |
| Produto | Contexto | Destino |
| Fluig | / | <HOST fluig>:<PORTA FLUIG> |
| Logix | Não foi definido | <HOST LOGIX>:<PORTA LOGIX> |
| Datasul | /dts*/josso | <HOST DATASUL>:<PORTA DATASUL> |
| RM | /rm | <HOST RM>:<PORTA RM> |


<!-- anchors: WidgetsAplicaçãoERPeContainerERP-Índice, WidgetsAplicaçãoERPeContainerERP-Objetivo, WidgetsAplicaçãoERPeContainerERP-Introdução, WidgetsAplicaçãoERPeContainerERP-Funcionamentoeconfiguração, WidgetsAplicaçãoERPeContainerERP-AplicaçãoERP, highlighter_816025, WidgetsAplicaçãoERPeContainerERP-ContainerERP, highlighter_408633, WidgetsAplicaçãoERPeContainerERP-Proxyreverso -->
