---
title: "Integração plataforma x Analytics"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=244921190"
scraped_at: "2026-03-09T03:03:53.034Z"
depth: 1
anchors: 13
child_links: 49
---

# Integração plataforma x Analytics

# Índice

# Objetivo

Os objetivos deste documento são:

- Resumir que é o Analytics e quais os recursos disponíveis.
- Detalhar como funciona a integração do Analytics com o TOTVS Fluig Plataforma.
- Informar as vantagens e recomendações quanto à utilização do mesmo.

# GoodData Analytics

![](/download/attachments/244921190/ANA-1.png?version=1&modificationDate=1472145516000&api=v2)

### O que é?

O GoodData Analytics é uma ferramenta de *BI (Business Intelligence) *fornecida pela GoodData. É uma plataforma em *Cloud* que fornece meios de integração, armazenamento, acompanhamento e análise de dados através da geração de relatórios e serviços *REST* através de protocolo seguro *HTTPS*.

### Para que serve?

Sendo uma ferramenta de BI, a principal função do Analytics é facilitar a análise visual de grandes volumes de dados através de armazenamento dimensional, ou seja, facilitar a visualização de cargas de dados extensas a fim de auxiliar em ações de tomada de decisões e acompanhamento de fluxo de dados.

### Como funciona?

O Analytics utiliza o conceito de *datasets *para agrupar os dados em registros, os quais são formados por dois tipos macros de valores: atributos e fatos.

![](/download/attachments/244921190/ANA-2.png?version=1&modificationDate=1472145505000&api=v2)

**

*Datasets: *Datasets são os grupos de dados como são enviados para o Analytics. Possuem um conjunto de atributos e fatos que juntos formam a composição de seus registros. O conjunto dos datasets de um projeto é chamado de *Model *e pode ser visualizado de maneira gráfica de dentro do Analytics.

![](/download/attachments/244921190/ANA-3.png?version=1&modificationDate=1472145640000&api=v2)

*Attributes: *Atributos são os dados brutos enviados ao Analytics, ou seja, todo dado não sumarizável que faz parte de um registro de um determinado dataset, cujos quais complementam as dimensões dos dados.

*Facts: *Fatos são semelhantes aos atributos, porém ao invés de complementar uma dimensão de dados, eles compõem dados numéricos que são utilizados para mensurar os conjuntos de dados pesquisados nos relatórios.

*Metrics: *Apesar de fatos serem dados utilizados para sumarizações, em muitos casos eles tendem a ser insuficientemente tratados para que possam ser exibidos de modo adequado em um relatório, desta forma eles devem ser utilizados para a geração de uma métrica. Métricas podem ser apenas uma passagem para os fatos ou, de maneira mais comum, ser utilizadas como um filtro para tornar os dados numéricos mais fáceis de serem interpretados pelo usuário. Assim, as métricas são a forma como relatórios são sumarizados dentro da GoodData, portanto todo fato enviado, para ser utilizado em um relatório, deve estar contido dentro de uma métrica.

*Variables: *Em casos onde é necessário atribuir valores específicos por usuário para a constituição de uma métrica, é possível criar uma variável. Variáveis podem ser criadas e atribuídas através da aba Manage do Analytics, possuindo um valor definido por padrão e podendo ser atribuída a cada usuário específico através de uma tabela, no formato de dado numérico para ser calculado juntamente a fatos, formando uma métrica, ou então um atributo definido a fim de agrupar os usuários ou realizar funções durante o processamento dos relatórios de maneira diferenciada.

### Como utilizar?

A maneira mais comum de se utilizar o Analytics é através da criação de *Dashboards* e *Reports*.

![](/download/attachments/244921190/ANA-6.png?version=1&modificationDate=1472146884000&api=v2)

*Dashboard: *Dashboard nada mais é que uma espécie de página constituída por um conjunto de *Reports, *servindo para agrupar relatórios que compreendem um mesmo contexto, facilitando a visualização das informações e sua interpretação.

*Reports: *A maneira como o Analytics sumariza e agrupa os dados brutos a fim de apresentá-los aos seus usuários é através de relatórios. Os relatórios são criados pelo usuário tendo como base as métricas e atributos dos datasets carregados no Analytics.

![](/download/attachments/244921190/ANA-4.png?version=1&modificationDate=1472147123000&api=v2)
Através da visão de criação do relatório, é possível definir:

*What: *O que vai ser mensurado, ou seja, as métricas utilizadas para se criar o relatório. Nesta visão também é possível criar métricas novas ou alterar métricas existentes.

*How: *Pelo quê está sendo mensurado, ou seja, quais dados serão utilizados para agrupar as sumarizações. São os atributos em si dos datasets relacionados às métricas utilizadas. Os atributos passíveis de serem utilizados aparecerão em destaque em uma fonte mais escura. Ao selecionar um atributo, será exibido se ele será listado de forma lateral (L) ou no topo (T), para que a tabela seja formada da maneira que o usuário deseja.

*Filter: *Nesta fase o relatório já está disponível para o usuário, porém é possível filtrar os dados tendo como base os atributos dos dataset, por exemplo, para que os registros que contém determinado atributo não sejam sumarizados. Também é possível realizar *drilldowns* e formatações de dados apresentados nos formulários e alterar a apresentação dos mesmos entre tipos de tabelas e gráficos.

Dica

Consulte nossa documentação sobre [Criação de Relatórios no Analytics](/pages/viewpage.action?pageId=243630888).

Como mencionado, a GoodData disponibiliza um conjunto de serviços REST para suas funções. Para um determinado projeto, é possível acessar a biblioteca REST padrão através do *link* https://analytics.fluig.com/gdc/projects/[CODIGO_DO_PROJETO].

![](/download/attachments/244921190/ANA-5.png?version=1&modificationDate=1472148137000&api=v2)

- Para verificar a documentação da API, acesse [GoodData API](http://developer.gooddata.com/api)

- Para informações mais detalhadas sobre o funcionamento e recursos do Analytics, segue o link (em inglês): [GoodData Help](https://help.gooddata.com/display/doc/GoodData+Help)

# TOTVS Fluig Plataforma X GoodData Analytics

### O que é?

Para facilitar o monitoramento de dados trafegados pela plataforma, é oferecida a possibilidade de integração com a GoodData Analytics, onde é fornecido um *Model *padrão, bem como um ambiente Analytics, um conjunto de relatórios, métricas e *dashboards* pré programados.

A lista de relatórios e *dashboards* do modelo padrão pode ser encontrada em [Relatórios Analytics](https://tdn.totvs.com/x/6pE3D) e a lista de dados de datasets em [Dados para Relatórios.](https://tdn.totvs.com/x/kg9vBg)

Fique atento

Se a widget Analytics estiver habilitada para a visualização no aplicativo Fluig mobile considere os passos descritos na documentação: [Suporte a páginas e widgets no aplicativo mobile](https://tdn.totvs.com/x/UJ5bDQ).

### Para que serve?

A integração da plataforma com o GoodData Analytics serve para facilitar a análise de determinados dados referentes ao uso da plataforma. Ao todo, a plataforma possui quatro grandes grupos de datasets:

| Dataset | Finalidade |
| --- | --- |
| Dataset | Finalidade |
| Processos | Monitorar o andamento das solicitações. Os dados gravados na GoodData são referentes sempre ao estado atual da solicitação como um todo e servem para sumarizar o andamento e os dados de conclusão de cada solicitação. |
| Documentos | Monitorar os documentos publicados no ECM |
| Hits | Monitorar o acesso dos usuários a cada página da plataforma, possuindo dados como páginas mais acessadas por usuários e horários de acesso (conforme relógio do servidor) |
| Social | Monitorar os dados referentes a eventos sociais, comunidades e publicações. |

### Como funciona?

Para ativar a integração da plataforma com o GoodData Analytics é necessário seguir os passos conforme a documentação: [Guia de Implantação Analytics.](https://tdn.totvs.com/x/WYNmBg)

Caso deseje enviar os dados anteriores à integração com o Analytics, é necessário executar a rotina de importação de dados históricos. Para maiores informações, acesse [Importação de dados históricos.](https://tdn.totvs.com/x/k4_NBw)

O procedimento acima envia todos os dados históricos para o Analytics referentes a documentos, solicitações e eventos sociais, entretanto os dados dos formulários das solicitações não são enviados por padrão, para tal é necessário verificar a documentação [Enviando dados do formulário.](https://tdn.totvs.com/x/7o_NBw)

Por fim, é importante ressaltar que **dados do dataset HitPages não são enviados como histórico.**

Assim que ativada a integração, movimentações de processos, acessos a páginas, publicações e alterações de documentos, bem como utilização de recursos sociais irão disparar eventos JMS para um serviço do própria plataforma que irá gravar estes dados em uma tabela chamada ANL_SENDDATA.

Caso a utilização do servidor seja muito alta, é necessário que haja um aumento na quantidade de requisições possíveis na fila JMS para impedir que a fila entre em sobrecarga e ocorram problemas na gravação do registro na ANL_SENDDATA, causando inconsistências nos dados do Analytics.

Quando o servidor atinge os minutos **10 **e **40 **de cada hora (Por exemplo: 10:40, 11:10, 11:40, 12:10, etc.), a rotina de envio de dados ao Analytics é iniciada. Nesta rotina o servidor coleta os dados da tabela ANL_SENDDATA e monta arquivos separados por dataset para serem compactados e enviados ao serviço de importação de dados do Analytics, sendo que a cada arquivo enviado com sucesso, os dados daquele dataset são apagados da tabela ANL_SENDDATA. Caso ocorra um problema durante o envio dos dados o servidor retornará um erro e os dados daquele dataset específico não são apagados, ficando na fila para o próximo envio.

### Que erro é esse?

Além de indisponibilidade do servidor Analytics, outros problemas que podem ocorrer durante o envio de dados para o Analytics são:

| Erro | Descrição |
| --- | --- |
| Erro | Descrição |
| 400 Bad Request | Esse erro costuma ocorrer quando os dados do dataset não correspondem aos dados esperados pelo Analytics. Pode ocorrer caso o modelo do projeto informado esteja desatualizado ou alguma informação esteja formatada de maneira errada no arquivo do dataset. |
| 401 Unauthorized | Erro caso o login e senha informados na configuração na plataforma estejam errados. |
| 403 Forbidden | Erro caso o servidor não tenha acesso ao ambiente Analytics. É importante lembrar que a porta 443 do servidor onde a plataforma está hospedada deve estar liberada para acesso aos endereços informados no Guia de Implantação do Analytics. |

Outro erro comum ocorre quando o usuário do Analytics configurado na plataforma teve algum problema de acesso e ativou o CAPTCHA de segurança do Analytics, sendo necessário autenticar-se novamente e de forma manual no servidor do Analytics e informar o CAPTCHA para que a integração volte a funcionar. Por isso é recomendado que o usuário que visualiza os dados e monta os relatórios do Analytics não seja o mesmo configurado na plataforma para realizar a integração de dados, evitando assim falha humana e uma possível dessincronização dos dados.

Os datasets que o modelo padrão da plataforma configura no modelo do Analytics possuem dados incrementais, ou seja, os dados são apenas adicionados e atualizados, nunca removidos. A única exceção é o dataset de solicitações em atraso, sendo que este sempre é apagado e regerado a cada envio dos dados para o Analytics.

É importante ressaltar que, em ambientes em Cluster, o ideal é que apenas um dos ambientes seja o responsável pelo envio de dados para o Analytics, assim evitando que dois ambientes realizem o envio das mesmas informações e acabe ocasionando problemas de sincronia, principalmente no dataset de solicitações em atraso.

Após enviados os dados, as informações quanto ao sucesso do upload podem ser consultadas através da aba Manage do Analytics, dentro das opções de cada dataset, sendo que caso um ícone de aviso apareça ao lado do informativo de *upload*, significa que ocorreu algum problema com aquela atualização em específico.

Para verificar os logs do Analytics, é necessário consultá-lo através das APIs da própria GoodData, conforme explicado anteriormente. Caso ocorra um erro de comunicação entre a plataforma e o Analytics, ele estará explicitado no log da plataforma entre os informativos de início e fim do procedimento de envio de dados, respectivamente *Starting Analytics file upload *e *Completed Analytics file upload*.

### Como utilizar?

É possível utilizar os relatórios padrões construídos a partir do modelo importado para a utilização com a plataforma bem como criar novos relatórios e dashboards.

A partir daqui, toda a utilização fica a cargo da GoodData. Caso seja detectada alguma inconsistência de dados, é possível realizar a importação de dados históricos a fim de ressincronizá-los, porém é importante lembrar que a importação de histórico **apaga os dados de acesso às páginas e os dados de formulários das solicitações, **sendo assim as documentações de importação devem ser revistas e um [modelo de importação](https://tdn.totvs.com/pages/viewpage.action?pageId=126717934) precisa ser criado para que não hajam problemas de perda de dados.


<!-- anchors: IntegraçãoplataformaxAnalytics-Índice, IntegraçãoplataformaxAnalytics-Objetivo, IntegraçãoplataformaxAnalytics-GoodDataAnalytics, IntegraçãoplataformaxAnalytics-Oqueé?, IntegraçãoplataformaxAnalytics-Paraqueserve?, IntegraçãoplataformaxAnalytics-Comofunciona?, IntegraçãoplataformaxAnalytics-Comoutilizar?, IntegraçãoplataformaxAnalytics-TOTVSFluigPlataformaXGoodDataAnalytics, IntegraçãoplataformaxAnalytics-Oqueé?.1, IntegraçãoplataformaxAnalytics-Paraqueserve?.1, IntegraçãoplataformaxAnalytics-Comofunciona?.1, IntegraçãoplataformaxAnalytics-Queerroéesse?, IntegraçãoplataformaxAnalytics-Comoutilizar?.1 -->
