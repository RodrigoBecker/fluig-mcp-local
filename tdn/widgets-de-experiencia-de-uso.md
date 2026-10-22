---
title: "Widgets de experiência de uso"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=149880912"
scraped_at: "2026-03-09T03:47:59.801Z"
depth: 2
anchors: 30
child_links: 58
---

# Widgets de experiência de uso

![](/download/attachments/149880912/espanhol.png?version=1&modificationDate=1593111177237&api=v2) ¿Habla Español? Haga [clic aquí](https://tdn.totvs.com/x/b4nYCg) para ver la documentación en Español.

![](/download/attachments/149880912/ingles.png?version=1&modificationDate=1593111177320&api=v2) Do you speak English? [Click here](https://tdn.totvs.com/x/WDASCw) to view the documentation in English.

# Consulta Rápida

![](/download/attachments/149880912/widget_acesso_centralizado.png?version=3&modificationDate=1501011414000&api=v2)

### Requisitos

- Possuir as experiências de uso configuradas.
- Provisão do permissionamento no Identity.

### Benefícios

- Acesso rápido ao conteúdo dos sistemas em consultas típicas
- Agilidade para tomada de ações
- Uma única tela de acesso para o usuário

### Configuração do widget Consulta Rápida no Fluig Plataforma

Acompanhe, movimentando-se nas abas abaixo, o passo a passo para configuração do *widget* Consulta Rápida no Fluig.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)

 - Na edição da página em que deseja adicionar o *widget*, clique em **Adicionar novo widget** para incluí-lo no *slot*.

![](/download/attachments/149880912/adicionar_novo_widget.png?version=3&modificationDate=1501011838000&api=v2)

**Inclui novo widget.**

 - Na janela Adicionar novo *widget*, o filtro Integrações separa os *widgets* relacionados às experiências de uso. Neste exemplo iremos adicionar o *widget* de Consulta Rápida, que permite ter acesso rápido aos relatórios simplificados.

![](/download/attachments/149880912/Image%2007%2020%20002.png?version=1&modificationDate=1500584416000&api=v2)

**Adicionar novo widget ao slot da página.**

****

 - Ao adicionar o *widget,* a plataforma Fluig detecta as empresas do ERP vinculadas através do Identity.

 - Iremos configurar o *widget* para retornar um relatório simplificado de pedidos por item da empresa "Matriz".**Título:** Definir um título**Consulta Rápida:** Posição de títulos em aberto A RECEBER**Selecionar versão da API:** selecionar qual versão da API deseja utilizar**Empresa:** Matriz

 - Após configurar o *widget*, deve-se clicar em **Salvar** para guardar e aplicar as configurações.

![](/download/attachments/149880912/consulta%20rapida.png?version=1&modificationDate=1570556313113&api=v2)

**Configuração widget de consulta rápida.**

****

 - Publique a página para que o novo *widget* configurado possa ser visualizado por todos os usuários.

![](/download/attachments/149880912/publicar_pagina.png?version=2&modificationDate=1501012128000&api=v2)

**Publicação da página com o widget Consulta Rápida****.**

****

 - Ao visualizar a página, o relatório da consulta rápida será exibido.

 - Caso necessário, é possível acessar a ajuda do *widget* através do ícone ![(question)](/s/5bn9pn/8804/xgjkrn/_/images/icons/emoticons/help_16.svg) localizado no canto superior direito.

![](/download/attachments/149880912/consulta%20r%C3%A1pida%20apresenta%C3%A7ao.PNG?version=1&modificationDate=1455722540000&api=v2)

**Visualização do widget de consulta rápida.**

****

# Analytics

![](/download/attachments/149880912/widget_analytics.png?version=4&modificationDate=1501011399000&api=v2)

### Requisitos

- Instalação do TOTVS Fluig Plataforma integrada ao Identity.
- Aplicativo [Fluig Analytics](/display/fluig/Identity+%7C+Aplicativos+GoodData) configurado no Identity.

### Benefícios

- Dashboards dinâmicos
- Dados de análise utilizados onde são necessários
- Acesso compartilhado com perfis de usuários
- Novas visões em minutos

### Configuração do widget Analytics no Fluig Plataforma

Acompanhe, movimentando-se nas abas abaixo, o passo a passo para configuração do *widget* Analytics no Fluig.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)

 - Na edição da página em que deseja adicionar o *widget*, clique em **Adicionar novo widget** para incluí-lo no *slot*.

![](/download/attachments/149880912/adicionar_novo_widget.png?version=3&modificationDate=1501011838000&api=v2)

**Incluir novo widget.**

 - Na janela Adicionar novo *widget*, o filtro Integrações separa os *widgets* relacionados às experiências de uso. Neste exemplo iremos adicionar o *widget*Analytics que permite visualizar gráficos e *dashboards* do Analytics de forma fácil e rápida.

![](/download/attachments/149880912/adicionar_analytics.png?version=1&modificationDate=1501013438000&api=v2)

**Adicionar novo widget ao slot da página.**

****

 - Após a inclusão do *widget* na página, é necessário informar os dados de configuração para que o *widget* possa apresentar os gráficos do projeto Fluig Analytics ou TOTVS Analytics.

 - Informar o nome desejado para o *widget* Analytics no **Título**. No exemplo a seguir, o relatório apresentado será de comunidades mais acessadas, por isso o título do *widget* será definido como "TOP - Comunidades".

![](/download/attachments/149880912/config_widget_analytics.png?version=2&modificationDate=1511463304000&api=v2)

 - O campo **URL** refere-se à URL do relatório no Analytics. Para obter esta informação, acessar o Analytics e navegar até o gráfico que será incluído na plataforma Fluig. Clicar na opção **Embed**, copiar o conteúdo do campo URI e colar no campo **URL** das configurações do *widget*.  **Veja o passo a passo** 

 - O código da aplicação deve ser obtido no Identity. Para isso, acesse o menu **Aplicativos** e filtre pelos aplicativos GoodData. Acesse as propriedades do aplicativo GoodData configurado no Identity com o projeto Fluig/TOTVS Analytics e acione a opção **Mais informações**. Será apresentada uma janela com o código do aplicativo. Esse código deve ser copiado e colado no campo **Código da aplicação** das configurações do *widget*.  **Veja o passo a passo** 

 - Publicar a página para que o novo *widget* configurado possa ser visualizado por todos os usuários.

![](/download/attachments/149880912/publicar_pagina.png?version=2&modificationDate=1501012128000&api=v2)

**Publicação da página com o widget Consulta Rápida****.**

****

 - Ao visualizar a página, o relatório do Analytics será exibido.

 - Caso necessário, é possível acessar a ajuda do *widget* através do ícone ![(question)](/s/5bn9pn/8804/xgjkrn/_/images/icons/emoticons/help_16.svg) localizado no canto superior direito.

![](/download/attachments/149880912/image2016-3-8%2014%3A29%3A0.png?version=1&modificationDate=1457451003000&api=v2)

**Widget Analytics exibindo o relatório TOP - Comunidades**

# Acesso Centralizado

![](/download/attachments/149880912/widget_acesso_centralizado.png?version=3&modificationDate=1501011414000&api=v2)

### Requisitos

- Possuir as experiências de uso configuradas.
- Provisão do permissionamento no Identity.

### Benefícios

- Visão das rotinas disponibilizadas
- Acesso em ambientes locais e na nuvem
- Criação de listas de rotinas ligadas a um contexto

### Configuração do widget Acesso Centralizado no Fluig Plataforma

Acompanhe, movimentando-se nas abas abaixo, o passo a passo para configuração do *widget* Acesso Centralizado no Fluig.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)

 - Na edição da página em que deseja adicionar o *widget*, clique em **Adicionar novo widget** para incluí-lo no *slot*.

![](/download/attachments/149880912/adicionar_novo_widget.png?version=3&modificationDate=1501011838000&api=v2)

**Incluir novo widget.**

  - Na janela Adicionar novo *widget*, o filtro Integrações separa os *widgets* relacionados às experiências de uso. Neste exemplo iremos adicionar o *widget* de Acesso Centralizado que permite ter acesso fácil à rotinas de sistemas integrados ao Fluig.

![](/download/attachments/149880912/adicionar_acesso_centralizado.png?version=1&modificationDate=1501014026000&api=v2)

**Adicionar novo widget ao slot da página.**

****

 - Ao adicionar o *widget*, o Fluig detecta as empresas do ERP vinculadas através do Identity.

 - Iremos definir o título do *widget* como "Acesso centralizado".

 - Na sequencia, informamos a quantidade de itens por página da lista. Ex: 8, 15, 30 ou 50.

 - É possível configurar para acesso centralizado os seguintes tipos de menu:

**Completo:**exibe todas as rotinas de Menu do usuário na empresa selecionada.

**Favoritos:**exibe todas as rotinas de Menu do usuário na empresa selecionada que foram marcadas como favoritas.

**Mais acessados:**exibe as rotinas na ordem das mais acessadas para as menos acessadas.

**Lista personalizada:**permite que o administrador da página selecione a partir de uma lista as rotinas que serão exibidas para os usuários.

 - Após configurar o *widget*, deve-se clicar em **Salvar** para guardar e aplicar as configurações.

![](/download/attachments/149880912/image2016-3-8%2012%3A0%3A57.png?version=1&modificationDate=1457442121000&api=v2)

**Configuração Widget de acesso centralizado.**

 - Publique a página para que o novo *widget* configurado possa ser visualizado por todos os usuários.

![](/download/attachments/149880912/publicar_pagina.png?version=2&modificationDate=1501012128000&api=v2)

**Publicação da página com o widget Acesso Centralizado****.**

****

 - Ao visualizar a página, a página do menu será exibida.

 - Caso necessário, é possível acessar a ajuda do *widget* através do ícone ![(question)](/s/5bn9pn/8804/xgjkrn/_/images/icons/emoticons/help_16.svg) localizado no canto superior direito.

![](/download/attachments/149880912/acesso%20centralizado%20-%20novo.PNG?version=2&modificationDate=1455722046000&api=v2)

**Visualização do widget de acesso centralizado.**

****


<!-- anchors: Widgetsdeexperiênciadeuso-ConsultaRápida, Widgetsdeexperiênciadeuso-Requisitos, Widgetsdeexperiênciadeuso-Benefícios, Widgetsdeexperiênciadeuso-ConfiguraçãodowidgetConsultaRápidanoFluigPlataforma, samples, samples-1, samples-2, samples-3, samples-4, samples-5, Widgetsdeexperiênciadeuso-Analytics, Widgetsdeexperiênciadeuso-Requisitos.1, Widgetsdeexperiênciadeuso-Benefícios.1, Widgetsdeexperiênciadeuso-ConfiguraçãodowidgetAnalyticsnoFluigPlataforma, samples, samples-1, samples-2, samples-3, samples-4, samples-5, Widgetsdeexperiênciadeuso-AcessoCentralizado, Widgetsdeexperiênciadeuso-Requisitos.2, Widgetsdeexperiênciadeuso-Benefícios.2, Widgetsdeexperiênciadeuso-ConfiguraçãodowidgetAcessoCentralizadonoFluigPlataforma, samples, samples-1, samples-2, samples-3, samples-4, samples-5 -->
