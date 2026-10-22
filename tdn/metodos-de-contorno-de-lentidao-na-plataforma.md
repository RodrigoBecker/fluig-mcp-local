---
title: "Métodos de contorno de lentidão na plataforma"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=817650828"
scraped_at: "2026-03-09T04:54:34.600Z"
depth: 3
anchors: 22
child_links: 68
---

# Métodos de contorno de lentidão na plataforma

Fique atento!

Esta página é válida a partir da atualização **Voyager (2.0)**do TOTVS Fluig.

Se você utiliza uma atualização anterior, acesse [Métodos de contorno de lentidão da plataforma da atualização **1.6 até 1.8.2**](/pages/viewpage.action?pageId=941662164).

# Objetivo

---

Problemas de lentidão no TOTVS Fluig podem acontecer por diversos motivos, por isso, reunimos alguns métodos e ações que podem auxiliar o administrador do ambiente a reduzir ou sanar a lentidão.

Plataforma TOTVS Fluig em Cloud

Clientes Cloud precisam entrar em contato com o time de Cloud para que os procedimentos sejam realizados.

# Pré-requisitos

---

- Servidores respeitando o [Modelo de dimensionamento](/display/fluig/Modelo+de+dimensionamento).
- Plataforma de acordo com os padrões da [Matriz de portabilidade](/display/fluig/Matriz+de+Portabilidade).
- Ambiente em conformidade com os ciclos de [Atualização da plataforma](/pages/viewpage.action?pageId=73078235).
- Conferir outras [Especificações técnicas](/pages/viewpage.action?pageId=144409649) necessárias.
- Conhecimento prévio referente às documentações [Avaliação de lentidão na plataforma](/pages/viewpage.action?pageId=268597232) e [Performance e análise do servidor](/pages/viewpage.action?pageId=185758720).

# Limpeza de arquivos temporários e pastas keys

---

Realizar a limpeza dos arquivos temporários e pastas *keys*, conforme o passo a passo abaixo:

**01.** Parar a execução dos serviços do Fluig: (1) fluig, (2) fluig_Indexer e (3) fluig_RealTime.

**02.**Acessar o diretório: <**diretório de instalação do Fluig>\appserver\standalone**.

**03.**Eliminar as pastas: **data, log, servers** e **tmp**.

Atenção!

Nesse diretório existe a pasta **configuration**, que** não deve ser excluída**, pois se trata de uma pasta fundamental para o funcionamento da plataforma. As demais pastas são todas temporárias. Caso a plataforma não as encontre, ela automaticamente recria as pastas.

Nota:

Esse procedimento reiniciará a plataforma e limpará os arquivos de *log* do ambiente.

**04.**Apagar as pastas *keys* disponíveis nos caminhos:

- **<diretório de instalação do Fluig>\repository\wcmdir**
- **<volume do Fluig>\keys**

**05.**Verificar se existem arquivos que **NÃO**estejam nos formatos **.war**, **.ear** ou **.jar** dentro das pastas **apps**, **core**e **system**. Caso existam, é necessário remover esses arquivos **fora do formato** das pastas:

- **<diretório de instalação do Fluig>\appserver\apps**
- **<diretório de instalação do Fluig>\appserver\core**
- **<diretório de instalação do Fluig>\appserver\system**

Importante!

Os arquivos temporários gerados nestas pastas são excluídos no momento da finalização dos serviços, porém, em casos de desligamentos forçados do ambiente estes arquivos podem não ser excluídos automaticamente. Assim, é necessário fazer a exclusão manualmente. Geralmente, **os arquivos temporários estão no formato .tmp ou são diretórios como o mesmo nome**.

**06.**Iniciar novamente os serviços do Fluig: (1) fluig_Indexer, (2) fluig_RealTime e (3) fluig.

# Utilização do Agendador de tarefas

---

**01.** Recomendamos a configuração da** limpeza de notificações** e da **limpeza de arquivos temporários de documentos **por meio do Agendador de tarefas do Fluig. Saiba mais em [Agendador de tarefas](/pages/viewpage.action?pageId=234455387).

**02.** Em casos **extremos**de lentidão, é possível reduzir o tamanho das tabelas de alerta no banco de dados através da instrução **DELETE** ou **TRUNCATE**. No entanto, **NÃO** recomendamos a manipulação recorrente do banco, o correto é a ativação do Agendador de tarefas. 

**a)** **Instrução DELETE:** é usada para excluir as linhas de uma tabela, porém, não libera o espaço ocupado por essas linhas.

[?](#)

| `DELETE` `FROM` `FDN_ALERTSENDER;``DELETE` `FROM` `FDN_ALERTACTION;``DELETE` `FROM` `FDN_ALERTMETADATA;``DELETE` `FROM` `FDN_ALERT;``DELETE` `FROM` `FDN_ALERTOBJECT;` |
| --- |

**b) Instrução TRUNCATE:** é usada para excluir as linhas de uma tabela e liberar o espaço ocupado por essas linhas.

[?](#)

| `TRUNCATE` `TABLE` `FDN_ALERTSENDER;``TRUNCATE` `TABLE` `FDN_ALERTACTION;``TRUNCATE` `TABLE` `FDN_ALERTMETADATA;``TRUNCATE` `TABLE` `FDN_ALERT;``TRUNCATE` `TABLE` `FDN_ALERTOBJECT;` |
| --- |

# Datasets utilizando datasources nativos do Fluig

---

**01.**Executar as consultas abaixo no banco de dados e enviar os resultados em *prints* ou formato **.csv**para a equipe de Suporte Fluig. Para isso, é necessária abrir um *ticket* na [Central do cliente](https://suporte.totvs.com), a partir da opção **Abrir ticket**.

[?](#)

| `select` `COD_DATASET``from` `serv_dataset``where` `DSL_DATASET``like` `'%FluigDS%'``;` `select` `nr_documento, COD_EVENT``from` `event_ficha``where` `DSL_EVENT``like` `'%FluigDS%'``;` `select` `COD_EVENT``from` `event_geral``where` `DSL_EVENT``like` `'%FluigDS%'``;` `select` `event_proces.COD_DEF_PROCES, COD_EVENT``from` `event_proces``where` `DSL_EVENT``like` `'%FluigDS%'``;` |
| --- |

## O que o resultado das consultas dizem?

---

→ Se as *queries* retornarem vazias, sem nenhum resultado, significa que as práticas de desenvolvimento do seu ambiente estão corretas e não necessitam de ajustes.

→ Caso alguma *query* retorne resultados, é sinal que existem *datasets* personalizados utilizando os* datasources* nativos da plataforma **FluigDS** e **FluigDSRO**. No exemplo abaixo, uma das queries retornou 36 resultados:

![](https://totvssuporte.zendesk.com/attachments/token/P1ItdxVLOYXWPjPhtcnpCNH3I/?name=image.png)

→ Essa prática de desenvolvimento **não é recomendada**, pois o Fluig disputa o *pool* de conexões no banco de dados com os *datasets* que utilizam os *datasources* nativos. O resultado disso é lentidão, queda e/ou indisponibilidade do ambiente, até que este, seja reinicializado ou ocorra a liberação da conexão com o banco novamente. 

→ A partir da atualização 1.6.5-190514, sempre que realizar um desenvolvimento usando o *datasource* da plataforma, é **indispensável**utilizar o **AppDS**.

→ Verificar cada *dataset* retornado pelas *queries* e realizar o **ajuste no desenvolvimento**para que utilize o **AppDS**, conforme documentação: [*Datasets* acessando banco de dados externo](https://tdn.totvs.com/display/public/fluig/Datasets+acessando+banco+de+dados+externo).

# Arquivos de instalação relacionados à lentidão

---

Os arquivos de instalação abaixo são os mais solicitados pela equipe de Suporte Fluig. Caso necessário, abra um *ticket* na [Central do cliente](https://suporte.totvs.com), a partir da opção **Abrir ticket***,*****e anexe esses arquivos ao chamado. Essa ação agilizará todo o processo de atendimento:

- **<diretório de instalação do Fluig>\appserver\standalone\configuration\standalone.xml**
- **<diretório de instalação do Fluig>\appserver\bin\standalone.conf (Linux)**
- **<diretório de instalação do Fluig>\appserver\bin\standalone.conf.bat (Windows)**
- **<diretório de instalação do Fluig>\appserver\standalone\log\server.log**
- **<diretório de instalação do Fluig>\node\fluig.rt\package.json**
- **<diretório de instalação do Fluig>\node\fluig.rt\logs**
- **<fluig.conf> (Arquivo que fica dentro do servidor do Proxy reverso)**

No entanto, recomendamos que nossos usuários tenham autonomia para detectar as causas de lentidão do seu ambiente. Assim, disponibilizamos uma série de achados nos arquivos de instalação e que podem ocasionar lentidão.

## server.log

---

**01.**O server.log pode ser consultado em: **<diretório de instalação do Fluig>\appserver\standalone\log\server.log**.

**02.** Geralmente, o server.log é um arquivo extenso e sugerimos que consulte [Ferramentas de Análise de Log | Ferramentas indicadas | glogg](https://tdn.totvs.com/pages/viewpage.action?pageId=235336390#FerramentasdeAn%C3%A1lisedeLog-glogg).

**03.** Termos de buscas mais comuns no **glogg:**

- *ERROR;*
- *ja esta sendo executado por;*
- *executou por;*
- *invokeFunction.servicetask64;*
- *invokeFunction.createDataset;*
- Thread em execução (ex.: *default task-39*).

**04.**Principais achados no**server.log:**

**a)** Sincronização de *d**atasets* levando mais tempo que o tolerável para finalizar as sincronizações. No exemplo, os *datasets* estão sincronizando por mais de **2500 segundos**:

**server.log**

[?](#)

| `2023``-``05``-``29` `10``:``42``:``00``,``740` `WARN com.fluig.monitoring.jschronos.JSChronos DatasetMetaListServiceBean.datasetSync executou por``2520` `segundos` `2023``-``05``-``29` `10``:``42``:``00``,``740` `INFO com.fluig.bpm.service.DatasetMetaListServiceBean Fim da sincronização``do` `Dataset : dsFuncionario` `2023``-``05``-``29` `11``:``08``:``39``,``167` `WARN com.fluig.monitoring.jschronos.JSChronos DatasetMetaListServiceBean.datasetSync executou por``2318` `segundos` `2023``-``05``-``29` `11``:``08``:``39``,``168` `INFO com.fluig.bpm.service.DatasetMetaListServiceBean Fim da sincronização``do` `Dataset : dsEmpresas` |
| --- |

**b)** Execução de *datasets* personalizados com tempo maior que **5 segundos**. Normalmente, essa situação está relacionada com a utilização dos *datasources* nativos do Fluig nesses desenvolvimentos. Exemplos:

**server.log**

[?](#)

| `2022``-``11``-``23` `15``:``59``:``03``,``511` `WARN  [com.fluig.monitoring.jschronos.JSChronos] (JSChronos.CustomizationManagerImpl.invokeFunction.createDataset) CustomizationManagerImpl.invokeFunction.createDataset ja esta sendo executado por``2211` `segundos params: [[[Ljava.lang.String;``@268d1e17``,``null``,``null``], Thread =``default` `task-``6727``, datasetId = dsDatabase]``2.211` `segundos` `2022``-``11``-``24` `08``:``51``:``22``,``088` `WARN  [com.fluig.monitoring.jschronos.JSChronos] (JSChronos.CustomizationManagerImpl.invokeFunction.createDataset) CustomizationManagerImpl.invokeFunction.createDataset ja esta sendo executado por``60` `segundos params: [[[Ljava.lang.String;``@7cec0760``, [Lcom.totvs.technology.foundation.dataset.SearchConstraint;``@64de871c``,``null``], Thread =``default` `task-``35``, datasetId = dsChecklistCRUD]` `2023``-``02``-``14` `09``:``17``:``47``,``722` `WARN  [com.fluig.monitoring.jschronos.JSChronos] (JSChronos.CustomizationManagerImpl.invokeFunction.createDataset) CustomizationManagerImpl.invokeFunction.createDataset ja esta sendo executado por``300` `segundos params: [[``null``, [Lcom.totvs.technology.foundation.dataset.SearchConstraint;``@67eb8082``,``null``], Thread =``default` `task-``389``, datasetId = ds_sql_update]` `2023``-``02``-``14` `09``:``17``:``56``,``587` `WARN  [com.fluig.monitoring.jschronos.JSChronos] (JSChronos.CustomizationManagerImpl.invokeFunction.servicetask64) CustomizationManagerImpl.invokeFunction.servicetask64 ja esta sendo executado por``120` `segundos params: [[Process id =  alteracao_de_preco, Process Version =``23``, Process Current UserId = usuario.user], Thread =``default` `task-``413``, datasetId = workflowColleagueRole]` |
| --- |

**c)** Os termos**"invokeFunction.servicetask64"****e **"****invokeFunction.createDataset"**,****geralmente, possuem relação com *datasets* de **Workflow (Processos)**:

**server.log**

[?](#)

| `2023``-``02``-``14` `08``:``39``:``38``,``114` `WARN  [com.fluig.monitoring.jschronos.JSChronos] (``default` `task-``323``) CustomizationManagerImpl.invokeFunction.servicetask64 executou por``565` `segundos` `2023``-``02``-``14` `08``:``39``:``38``,``114` `WARN  [com.fluig.monitoring.jschronos.JSChronos] (``default` `task-``323``) params: [[Process id =  alteracao_de_preco, Process Version =``23``, Process Current UserId = usuario.user], Thread =``default` `task-``323``, datasetId = workflowColleagueRole]` |
| --- |

**d****)** Busca pela *thread* em execução**(****default task-39)***:*

**server.log**

[?](#)

| `2023``-``05``-``29` `09``:``30``:``53``,``414` `WARN  [com.fluig.monitoring.jschronos.JSChronos] (``default` `task-``39``) CustomizationManagerImpl.invokeFunction.createDataset executou por``32` `segundos``2023``-``05``-``29` `09``:``30``:``53``,``414` `WARN  [com.fluig.monitoring.jschronos.JSChronos] (``default` `task-``39``) params: [[[Ljava.lang.String;``@6c45e716``, [Lcom.totvs.technology.foundation.dataset.SearchConstraint;``@a1b6a73``,``null``], Thread =``default` `task-``39``, datasetId = ds_RMConsulta]``2023``-``05``-``29` `09``:``30``:``53``,``437` `WARN  [com.fluig.monitoring.jschronos.JSChronos] (``default` `task-``39``) DatasetFactory.getDataset.ds_RMConsulta executou por``32` `segundos``2023``-``05``-``29` `09``:``30``:``53``,``437` `WARN  [com.fluig.monitoring.jschronos.JSChronos] (``default` `task-``39``) params: [[TBC012.``05``,``1``, T], [FIELD_NAME=COLIGADA; INITIAL_VALUE=``1``; FINAL_VALUE=``1``; CONSTRAINT_TYPE=MUST; IS_LIKE_SEARCH=``false``; ],``null``]``2023``-``05``-``29` `09``:``31``:``24``,``672` `INFO  [com.datasul.technology.webdesk.dataset.business.DatasetBO] (``default` `task-``39``) Executando Dataset com ID ds_RMConsulta``do` `tipo Avançado.``2023``-``05``-``29` `09``:``31``:``24``,``672` `INFO  [com.datasul.technology.webdesk.dataset.business.DatasetBO] (``default` `task-``39``) Builder rodando sem o mobile``2023``-``05``-``29` `09``:``31``:``24``,``719` `INFO  [com.datasul.technology.webdesk.customization.ScriptingLog] (``default` `task-``39``) uf-log | Chamada``do` `DataSet ds_RMConsulta``2023``-``05``-``29` `09``:``31``:``24``,``734` `INFO  [com.datasul.technology.webdesk.dataset.business.DatasetBO] (``default` `task-``39``) Executando Dataset com ID ds_RMConecta``do` `tipo Avançado.``2023``-``05``-``29` `09``:``31``:``24``,``735` `INFO  [com.datasul.technology.webdesk.dataset.business.DatasetBO] (``default` `task-``39``) Builder rodando sem o mobile``2023``-``05``-``29` `09``:``31``:``24``,``786` `INFO  [org.apache.cxf.wsdl.service.factory.ReflectionServiceFactoryBean] (``default` `task-``39``) Creating Service {http:``//www.totvs.com/}wsConsultaSQL from WSDL: http://peg54p-prd-ws.totvscloud.com.br:8083/wsConsultaSQL/MEX?wsdl``2023``-``05``-``29` `09``:``31``:``24``,``800` `WARNING [org.apache.cxf.wsdl.service.factory.ReflectionServiceFactoryBean] (``default` `task-``39``) No method was found``for` `the WSDL operation {http:``//www.totvs.com/}RealizarConsultaSQLContexto.``2023``-``05``-``29` `09``:``31``:``24``,``805` `INFO  [org.apache.cxf.wsdl.service.factory.ReflectionServiceFactoryBean] (``default` `task-``39``) Creating Service {http:``//www.totvs.com/}IwsConsultaSQLService from class com.totvs.IwsConsultaSQL``2023``-``05``-``29` `09``:``31``:``24``,``812` `INFO  [com.datasul.technology.webdesk.customization.ScriptingLog] (``default` `task-``39``) uf-log | Dados da chamada ao serviço wsConsultaSQL:``2023``-``05``-``29` `09``:``31``:``24``,``812` `INFO  [com.datasul.technology.webdesk.customization.ScriptingLog] (``default` `task-``39``) uf-log | CODSENTECA: TBC012.``03``2023``-``05``-``29` `09``:``31``:``24``,``812` `INFO  [com.datasul.technology.webdesk.customization.ScriptingLog] (``default` `task-``39``) uf-log | CODCOLIGADA:``1``2023``-``05``-``29` `09``:``31``:``24``,``812` `INFO  [com.datasul.technology.webdesk.customization.ScriptingLog] (``default` `task-``39``) uf-log | APLICACAO: T``2023``-``05``-``29` `09``:``31``:``24``,``812` `INFO  [com.datasul.technology.webdesk.customization.ScriptingLog] (``default` `task-``39``) uf-log | PARAMETRO:``2023``-``05``-``29` `09``:``31``:``24``,``922` `INFO  [com.datasul.technology.webdesk.customization.ScriptingLog] (``default` `task-``39``) uf-log | Chamada realizada com sucesso.``2023``-``05``-``29` `09``:``31``:``24``,``923` `INFO  [com.datasul.technology.webdesk.customization.ScriptingLog] (``default` `task-``39``) uf-log | Quantidade de registros retornados:``57` |
| --- |

## standalone.xml

---

**01.**O standalone.xml pode ser consultado em: **<diretório de instalação do Fluig>\appserver\standalone\configuration\standalone.xml.**

**02.** O **<max-pool-size>** pode ser ajustado entre **50-200** nos *datasources*. É possível utilizar um **<max-pool-size>** menor, quando houver mais de um banco de dados no mesmo servidor.

**standalone.xml**

[?](#)

| `````````jdbc:mysql://localhost:3306/fluig_mysql?useSSL=false&nullDatabaseMeansCurrent=true````mysqlDriver````TRANSACTION_READ_COMMITTED````````10````100````````````admin````admin````````````````true````false````````````false````````````````jdbc:mysql://localhost:3306/fluig_mysql?useSSL=false&nullDatabaseMeansCurrent=true````mysqlDriver````TRANSACTION_READ_COMMITTED````````5````50````````````admin````admin````````````````true````false````````````30000````````````false````````````````jdbc:mysql://localhost:3306/fluig_mysql?useSSL=false&nullDatabaseMeansCurrent=true````mysqlDriver````TRANSACTION_READ_COMMITTED````````5````150````````````admin````admin````````````````true````false````````````30000````````````false````````````````````com.mysql.jdbc.Driver``````````` |
| --- |

## standalone.conf (Linux)

---

**01.**O standalone.conf pode ser consultado em: **<diretório de instalação do Fluig>\appserver\bin\standalone.conf.**

**02.**Por padrão. o tamanho de memória que o servidor consome vem ajustado em: **-Xmx4g **e **-Xms2g**, porém, é possível alterar esses valores:

**standalone.conf**

[?](#)

| `#``# Specify options to pass to the Java VM.``#``JAVA_OPTS=``"-Xms3g -Xmx8g -XX:MetaspaceSize=96M -XX:MaxMetaspaceSize=1024m -Djava.net.preferIPv4Stack=true"` `JAVA_OPTS=``"$JAVA_OPTS -Dfile.encoding=utf8 -Djavamelody.disabled=true -Djdk.tls.ephemeralDHKeySize=2048"` |
| --- |

**03.**O Fluig suporta **até 16 GB de memória**, sendo essa, uma limitação do JBoss. Caso o seu servidor de aplicação tenha mais de 16 GB de memória, recomendamos o uso de um**cluster**para distribuir os recursos. Saiba mais em [Alta disponibilidade e balanceamento de carga](/display/fluig/Alta+disponibilidade+e+balanceamento+de+carga)

**04.** Não é preciso alterar a quantidade inicial (mínima) de memória alocada **(-Xms2g)**, pois a plataforma alocará memória de acordo com a necessidade. Saiba mais em [Modelo de dimensionamento](/display/fluig/Modelo+de+dimensionamento).

## standalone.conf.bat (Windows)

---

**01.**O standalone.conf.bat pode ser consultado em: **<diretório de instalação do Fluig>\appserver\bin\standalone.conf.bat.**

**02.**Por padrão. o tamanho de memória que o servidor consome vem ajustado em: **-Xmx4g **e **-Xms2g**, porém, é possível alterar esses valores:

**standalone.conf.bat**

[?](#)

| `rem``# JVM memory allocation pool parameters - modify as appropriate.``set` `"JAVA_OPTS=%JAVA_OPTS% -Xms3g -Xmx8g -XX:MetaspaceSize=96M -XX:MaxMetaspaceSize=1024m"` `set` `"JAVA_OPTS=%JAVA_OPTS% -Dfile.encoding=utf8 -Djavamelody.disabled=true -Djdk.tls.ephemeralDHKeySize=2048"` |
| --- |

**03.**O Fluig suporta **até 16 GB de memória**, sendo essa, uma limitação do JBoss. Caso o seu servidor de aplicação tenha mais de 16 GB de memória, recomendamos o uso de um**cluster**para distribuir os recursos. Saiba mais em [Alta disponibilidade e balanceamento de carga](/display/fluig/Alta+disponibilidade+e+balanceamento+de+carga)

**04.** Não é preciso alterar a quantidade inicial (mínima) de memória alocada **(-Xms2g)**, pois a plataforma alocará memória de acordo com a necessidade. Saiba mais em [Modelo de dimensionamento](/display/fluig/Modelo+de+dimensionamento).

# Outros interferentes no desempenho da plataforma

---

**01.** Execução de *backups* da aplicação e/ou banco de dados em horários de maior utilização da plataforma.

**02.**Personalizações onerosas no diretório: **<diretório de instalação do Fluig>\appserver\apps**.

**03.** Plataforma desatualizada.

**04.** Problemas na [Configuração HTTPS da plataforma](/pages/viewpage.action?pageId=354472893).

**05.**Problemas no [*Proxy* reverso](/display/fluig/Proxy+reverso).

**06.**Excesso de consultas em *datasets*, pois podem gerar estresse desnecessário ao banco de dados.


<!-- anchors: Métodosdecontornodelentidãonaplataforma-Objetivo, Métodosdecontornodelentidãonaplataforma-Pré-requisitos, Métodosdecontornodelentidãonaplataforma-Limpezadearquivostemporáriosepastaskeys, Métodosdecontornodelentidãonaplataforma-UtilizaçãodoAgendadordetarefas, highlighter_822828, highlighter_237861, Métodosdecontornodelentidãonaplataforma-DatasetsutilizandodatasourcesnativosdoFluig, highlighter_660838, Métodosdecontornodelentidãonaplataforma-Oqueoresultadodasconsultasdizem?, Métodosdecontornodelentidãonaplataforma-Arquivosdeinstalaçãorelacionadosàlentidão, Métodosdecontornodelentidãonaplataforma-server.log, highlighter_206751, highlighter_298248, highlighter_513346, highlighter_271405, Métodosdecontornodelentidãonaplataforma-standalone.xml, highlighter_716215, Métodosdecontornodelentidãonaplataforma-standalone.conf(Linux), highlighter_864791, Métodosdecontornodelentidãonaplataforma-standalone.conf.bat(Windows), highlighter_550371, Métodosdecontornodelentidãonaplataforma-Outrosinterferentesnodesempenhodaplataforma -->
