---
title: "Criação de Relatórios no Analytics"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=243630888"
scraped_at: "2026-03-09T03:03:59.753Z"
depth: 1
anchors: 47
child_links: 52
---

# Criação de Relatórios no Analytics

# Índice

# Objetivo

O objetivo deste guia é demonstrar como é feita a criação de um relatório no Analytics, utilizando as métricas e atributos disponibilizados por padrão pela plataforma. Apresentar também informações sobre os datasets que recebem informações de forma incremental do TOTVS Fluig Plataforma, dashboards e painéis KPIs.

Quer conhecer ainda mais sobre o **Analytics**? Assista o treinamento de **Gestão de Indicadores - Analytics** disponível no **Fluig Academy**.

# Conceitos

| Termo | Descrição | Exemplo |
| --- | --- | --- |
| Termo | Descrição | Exemplo |
| Fatos | Medida numérica individual relacionada a um Data Set. São dados quantitativos, ou seja, campos que tem operações matemáticas.São a menor unidade de dados e sempre são números. | Apoios (Ex.: 325)Documentos (Ex.: 2650) |
| Atributos | Descritores usados para delimitar métricas e contextualizar os dados em um relatório. São dados qualitativos, ou seja, que classificam os dados.Podem ser textos ou números. | por Mês, Marcapor Solicitante |
| Métricas | Agregação de fatos ou contagem de atributos, que são exibidos como números em relatórios. São definidas por cálculos de agregação.Métricas representam o que está sendo medido em um relatório. | Espaço ocupadoSolicitações em atraso |
| Relatório | Visualização de dados em tabelas ou gráficos.Contém pelo menos uma métrica (o que está sendo medido), geralmente classificada por atributos (que dividem a métrica). | Posts / MêsPáginas mais acessadas |

# Alterando o Idioma

Se desejar mudar o idioma da página do seu projeto, acesse o Analytics e siga os passos abaixo:

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)

 - Na barra superior da página, clique sobre o**Nome do Usuário** logado (ao lado do botão Help);

 - Após clique em **Account;**

![](/download/attachments/243630888/1.jpg?version=2&modificationDate=1495717536000&api=v2)

 - Clique sobre o link **Change Language**;

![](/download/attachments/243630888/2.jpg?version=2&modificationDate=1495717824000&api=v2)

 - Clique sobre a listagem e **selecione o idioma** desejado (Exemplo: Português Brasileiro);

 - Após clique em **Save**.

![](/download/attachments/243630888/3.jpg?version=2&modificationDate=1495718188000&api=v2)![](/download/attachments/243630888/4.jpg?version=2&modificationDate=1495718189000&api=v2)

 - **Pronto!** Note que todas palavras da interface da página, passíveis de tradução, foram alteradas para o idioma selecionado.

 ![](/download/attachments/243630888/6.jpg?version=2&modificationDate=1495718911000&api=v2)

# Datasets

No Analytics apenas os dados da plataforma TOTVS Fluig são enviados para análise. Confira abaixo como consultar as informações de cada dataset no Analytics:

- [Passo 1](#)
- [Passo 2](#)

 - Na barra superior do Analytics, clique na opção **Administrar** (*Manage*). Nesta tela será apresentado a listagem de **datasets** do projeto selecionado, a data e hora do último *upload* de dados da plataforma, o autor e o Status.

Para consultar os campos de cada dataset acesse a página [Dados para Relatórios](/pages/viewpage.action?pageId=107941778).

![](/download/attachments/243630888/Image%2016.jpg?version=1&modificationDate=1521747825000&api=v2)

 - Clicando sobre cada dataset é possível consultar o histório de*uploads* que exibe as últimas atualizações enviadas pela plataforma para os datasets do Analytics. Também são apresentados os **Objetos de Conjunto de Dados** separados por Atributos e Fatos.

 - Entendendo os Objetos que compões cada dataset fica mais simples desenvolver relatórios e KPIs personalizados gerando conhecimento relevante para tomada de decisão do seu negócio.

 - Siga os tópicos abaixo e veja como é simples e rápido criar relatórios no Analytics.

![](/download/attachments/243630888/Image%2017.jpg?version=1&modificationDate=1521750283000&api=v2)

# Criando o Relatório

Para iniciar a criação de um novo relatório, acesse o Analytics e siga os passos abaixo:

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)

 - Na barra superior do Analytics, clique na opção **Relatórios** (*Reports*).

![](/download/attachments/243630888/Image%202.jpg?version=1&modificationDate=1521659619000&api=v2)

 - Nesta página serão exibidos todos os relatórios existentes na ferramenta, inclusive aqueles disponibilizados por padrão, como TOP Usuários, Acessos, Número de Solicitações, etc.

 - Para criar um novo relatório, clique no botão **Criar Relatório** (*Create Report*).

![](/download/attachments/243630888/Image%203.jpg?version=3&modificationDate=1521660399000&api=v2)

 - Será exibida a página padrão para criação dos relatórios no Analytics. A partir deste momento, o administrador poderá selecionar as métricas, atributos e filtros que deseja incluir no relatório.

 - Para isso serão utilizados os painéis**O Quê** (*What*), [**Como**](#CriaçãodeRelatóriosnoAnalytics-how) *(How*) e **Filtrar** (*Filter*).

![](/download/attachments/243630888/Image%206.jpg?version=2&modificationDate=1521660383000&api=v2)

# Definindo as Métricas (What)

Neste painel é realizada a seleção das métricas, ou seja, dos números que o administrador deseja exibir no relatório.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)

 - Ao clicar no botão O Quê (*What*), todas as métricas são exibidas na coluna central, pois por padrão a pasta Todas as Métricas (*All Metrics*) virá selecionada.

 - Na coluna à esquerda, é possível filtrar pelas pastas (Documentos, Processos, Social e WCM) as métricas que são incluídas por padrão no Analytics.

![](/download/attachments/243630888/Image%207.jpg?version=1&modificationDate=1521660544000&api=v2)

 - Para escolher uma métrica, basta marcar a caixa de seleção que fica ao lado do nome.

 - Clicando diretamente sobre o nome da métrica é possível visualizar detalhes sobre o cálculo dos fatos que a compõe e o formato de exibição da métrica no relatório.

![](/download/attachments/243630888/Image%208.jpg?version=2&modificationDate=1521660741000&api=v2)

 - Nesse ponto já é possível gerar um relatório simplificado, apenas com métricas. Basta clicar no botão **Concluído** (*Done*) e o relatório exibirá os dados das métricas selecionadas em formato de tabela.

 - Contudo, para criar relatórios mais elaborados e relevantes, convém aplicar os atributos disponíveis no painel **Como** (*How*).

![](/download/attachments/243630888/Image%209.jpg?version=1&modificationDate=1521661306000&api=v2)

# Definindo os Atributos (How)

Neste painel é realizada a seleção dos atributos, ou seja, como os dados do relatório serão segmentados.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)

 - Ao clicar no botão **Como** (*How*) será exibido o painel com os atributos disponíveis de acordo com a métrica escolhida na seção **O Quê** (*What*).

Veja [aqui](/pages/viewpage.action?pageId=107941778)o detalhamento dos atributos existentes.

Atributos incompatíveis com a métrica selecionada não serão habilitados.

![](/download/attachments/243630888/Image%2010.jpg?version=1&modificationDate=1521663750000&api=v2)

 - Clicando sobre o nome do atributo é possível obter mais informações, bem como mais opções de visualização no relatório.

 - O botão **L/T** determina se o atributo será exibido à esquerda (*Left*) ou no topo (*Top*), caso o modo de visualização do relatório esteja definido como tabela (*Table*).

![](/download/attachments/243630888/Image%2011.jpg?version=2&modificationDate=1521663960000&api=v2)

 - Após selecionar o atributo desejado, clique no botão **Concluído** (*Done*)****para aplicar as configurações ao relatório. O resultado deverá ser exibido em formato Tabela.

 - Para alterar o formato, utilize os botões no canto superior direito para exibir gráficos de linha, barras, pizza, etc.

****

**Tabela**

****

![](/download/attachments/243630888/Image%2013.jpg?version=1&modificationDate=1521665231000&api=v2)

**Gráfico de Linha**

****

![](/download/attachments/243630888/Image%2014.jpg?version=1&modificationDate=1521665246000&api=v2)

**Gráfico de** **Barras**

****

![](/download/attachments/243630888/Image%2015.jpg?version=1&modificationDate=1521665270000&api=v2)

**Gráfico de Pizza**

# Adicionando Filtros (Filter)

O painel de filtros possibilita a inclusão e remoção de determinados conjuntos de dados do relatório. É possível escolher entre os seguintes tipos de filtros:

- [List of Values](#)
- [Ranking Filter](#)
- [Numeric Range](#)

 - Permite filtrar os dados do relatório por subcategorias de um atributo. Pode-se optar por valores específicos (Ex.: Abr 16) ou relativos (Ex.: 3 meses atrás).

 - No exemplo abaixo, o filtro será configurado para exibir apenas solicitações cujo nome do solicitante é John Steel (solicitacaoNomeSolicitante *is* "John Steel"):

![](/download/attachments/243630888/Screenshot%2008_07%20001.png?version=1&modificationDate=1467999647000&api=v2)

**Seleção do atributo solicitacaoNomeSolicitante e condição is (1) e do valor "John Steel" (2)**

![](/download/attachments/243630888/Screenshot%2008_07%20006.png?version=2&modificationDate=1468003570000&api=v2)

**Com o filtro aplicado, apenas os processos abertos por este usuário serão considerados no relatório.**

 - Permite escolher os dados exibidos no relatório com base na classificação dos valores de determinado atributo: os maiores (*Top*) ou os menores (*Bottom*).

 - No exemplo abaixo, o filtro será configurado para exibir apenas os 3 meses com maior quantidade de solicitações abertas (*Top* 3).

![](/download/attachments/243630888/Screenshot%2008_07%20005.png?version=2&modificationDate=1468002500000&api=v2)

**Seleção da quantidade de resultados que será exibida no relatório (1); atributo createDate (2); ordenação pelo Número de Solicitações (3).**

![](/download/attachments/243630888/Screenshot%2008_07%20004.png?version=1&modificationDate=1468002515000&api=v2)

**Com o filtro aplicado, apenas o três meses com o maior número de solicitações abertas são exibidos no relatório.**

 - Permite definir um critério para inclusão de dados no relatório, excluindo aqueles que não se encaixam no valor estipulado.

 - No exemplo abaixo, o filtro será configurado para exibir apenas os meses em que o número de solicitações abertas foi maior ou igual a 10.

![](/download/attachments/243630888/Screenshot%2008_07%20003.png?version=2&modificationDate=1468002166000&api=v2)

**Seleção do atributo createDate (1) onde a métrica Número de Solicitações é maior ou igual (is greater than or equal to) a 10 (2).**

![](/download/attachments/243630888/Screenshot%2008_07%20007.png?version=3&modificationDate=1468003779000&api=v2)

**Com o filtro aplicado, apenas os meses em que 10 ou mais solicitações tenham sido criadas são exibidos no relatório.**

# Finalizando o Relatório

Após selecionar as métricas, atributos e filtros, o relatório já pode ser salvo e disponibilizado para visualização em um dashboard.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)

 - Informe um título para o relatório clicando sobre a caixa de texto **Untitled report**e clique**Save.**

![](/download/attachments/243630888/Screenshot%2011_07%20004.png?version=1&modificationDate=1468239453000&api=v2)

 - Clique sobre o botão **Create** para informar os últimos parâmetros para a criação do relatório.

![](/download/attachments/243630888/Screenshot%2011_07%20009.png?version=1&modificationDate=1468241555000&api=v2)

 - Na janela que será exibida informe:

 1. Tags e a pasta em que o relatório será armazenado (opcional);

 2. Visibilidade do relatório: ao marcar esta opção, o relatório poderá ser visualizado por todos os usuários do Analytics;

 3. Permissão de edição: define que tipo de usuário pode editar o relatório. Por padrão, administradores e editores possuem permissão, mas é possível limitar a edição apenas aos administradores.

 - Por fim, clique no botão **Create** na parte inferior para concluir a criação do relatório.

![](/download/attachments/243630888/Screenshot%2011_07%20005.png?version=1&modificationDate=1468239786000&api=v2)

# Incluindo o Relatório em um Dashboard

**Relatórios** são tabelas ou gráficos que apresentam informações sobre uma ou mais métricas, ou seja, sobre os dados que se deseja medir.

**Dashboards** são utilizados para exibir e organizar relatórios, de forma a tornar o acesso à estas informações simples e ágil.

Para incluir um novo relatório em um *dashboard*, siga as instruções abaixo:

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)
- [Passo 6](#)

 - Na barra superior do Analytics, clique na opção **Dashboards**.

![](/download/attachments/243630888/Screenshot%2011_07%20007.png?version=1&modificationDate=1468240447000&api=v2)

 - Selecione em qual aba do *dashboard* deseja incluir o relatório. No exemplo abaixo, a aba será **Processos** (1).

 - Em seguida, clique no botão com ícone de engrenagem, no canto superior direito (2) e selecione **Edit** (3).

![](/download/attachments/243630888/Screenshot%2011_07%20010.png?version=1&modificationDate=1468241694000&api=v2)

 - Na barra superior que será exibida, clique sobre a opção **Report** (1).

 - Serão listados todos os relatórios disponíveis. Selecione o relatório desejado (2).

![](/download/attachments/243630888/Screenshot%2011_07%20011.png?version=1&modificationDate=1468241882000&api=v2)

 - O relatório será adicionado ao *dashboard*.

![](/download/attachments/243630888/Screenshot%2011_07%20012.png?version=1&modificationDate=1468242112000&api=v2)

 - Utilize as bordas da caixa de seleção para ajustar o tamanho dos relatórios. Desmarque a seleção para movê-los para o lugar apropriado.

![](/download/attachments/243630888/Screenshot%2011_07%20013.png?version=1&modificationDate=1468242225000&api=v2)

 - Clique sobre o botão **Save** no canto superior direito para salvar as alterações ao *dashboard*.

![](/download/attachments/243630888/Screenshot%2011_07%20014.png?version=2&modificationDate=1468242476000&api=v2)

# Sobre KPIs

Acesse o link [https://help.gooddata.com](https://help.gooddata.com) e conheça a documentação completa sobre [painéis KPI](https://help.gooddata.com/display/doc/KPI+Dashboards).

Painéis KPIs (*Key Performance Indicators*) ou Indicadores Chaves de Performance são *dashboards* que podem ser utilizados para mostrar/acompanhar o desempenho de fatores críticos levando em consideração os objetivos da sua empresa.

Segundo a GoodData esse recurso permite:

- Rastrear como um KPI é alterado ao longo do tempo e compará-lo com os períodos anteriores.
- Definir alertas e receber notificações quando os KPIs atingirem um limite.
- Vincular KPIs de ligação a outros *dashboards*.
- Obter insights mais importantes próximos aos seu KPI relevantes para ter uma visão geral melhor dos seus processos de negócios.

Você pode adicionar quantos dashboards de KPI quiser ao projeto do Analytics. O painel KPI é compartilhado com todos os usuários do projeto. Qualquer mudança que é feita no painel KPI é imediatamente visível para todos os usuários do projeto. 

Para adicionar, editar ou excluir um painel KPI e necessário ter permissão de Editor ou Administrador do projeto no Analytics.

![](/download/attachments/243630888/Image%2019.jpg?version=1&modificationDate=1521828690000&api=v2)

Você pode configurar alertas de e-mail para receber notificações sobre quando um valor de KPI no painel KPI atingir um limite determinado. Porém, é permitido configurar apenas um alerta em cada KPI. Somente usuários com permissão de Administrador ou Editor do projeto podem configurar o alerta que será ativado para seu e-mail cadastrado no Analytics.

![](/download/attachments/243630888/Image%2020.jpg?version=1&modificationDate=1521828712000&api=v2)


<!-- anchors: CriaçãodeRelatóriosnoAnalytics-Índice, CriaçãodeRelatóriosnoAnalytics-Objetivo, CriaçãodeRelatóriosnoAnalytics-Conceitos, CriaçãodeRelatóriosnoAnalytics-AlterandooIdioma, Report_1, Report_1-1, Report_1-2, Report_1-3, Report_1-4, CriaçãodeRelatóriosnoAnalytics-Datasets, datasets, datasets-1, datasets-2, CriaçãodeRelatóriosnoAnalytics-CriandooRelatório, Idioma, Idioma-1, Idioma-2, Idioma-3, CriaçãodeRelatóriosnoAnalytics-DefinindoasMétricas(What)what, Report_2, Report_2-1, Report_2-2, Report_2-3, CriaçãodeRelatóriosnoAnalytics-DefinindoosAtributos(How)how, Report_3, Report_3-1, Report_3-2, Report_3-3, CriaçãodeRelatóriosnoAnalytics-AdicionandoFiltros(Filter)filter, Report_4, Report_4-1, Report_4-2, Report_4-3, CriaçãodeRelatóriosnoAnalytics-FinalizandooRelatório, Report_5, Report_5-1, Report_5-2, Report_5-3, CriaçãodeRelatóriosnoAnalytics-IncluindooRelatórioemumDashboard, Report_6, Report_6-1, Report_6-2, Report_6-3, Report_6-4, Report_6-5, Report_6-6, CriaçãodeRelatóriosnoAnalytics-SobreKPIs -->
