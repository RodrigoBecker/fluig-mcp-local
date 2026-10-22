---
title: "ARQ - Mensagem \"Atenção, não constam no banco de dados as configurações da plataforma\", como resolver?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=233765477"
scraped_at: "2026-03-04T03:37:42.477Z"
depth: 4
anchors: 15
child_links: 63
---

# ARQ - Mensagem "Atenção, não constam no banco de dados as configurações da plataforma", como resolver?

# Índice

# Plataforma

**Produto:** TOTVS Fluig Plataforma

**Banco de Dados:** Oracle, MySQL

# Ocorrência

Após a atualização da plataforma, ao tentar iniciar os serviços são exibidos avisos e erros no arquivo de log, como no exemplo abaixo:

  **server.log** Expand source

[expand source](#)[?](#)

| 12345678910111213141516171819202122232425262728293031323334353637383940414243444546474849 | `16``:``49``:``25``,``787` `WARN  [org.jboss.jca.core.connectionmanager.pool.strategy.OnePool] (Thread-``69``) IJ000604: Throwable``while` `attempting to get a``new` `connection:``null``: javax.resource.ResourceException: Could not create connection````at org.jboss.jca.adapters.jdbc.local.LocalManagedConnectionFactory.getLocalManagedConnection(LocalManagedConnectionFactory.java:``351``)````at org.jboss.jca.adapters.jdbc.local.LocalManagedConnectionFactory.createManagedConnection(LocalManagedConnectionFactory.java:``299``)````at org.jboss.jca.core.connectionmanager.pool.mcp.SemaphoreArrayListManagedConnectionPool.createConnectionEventListener(SemaphoreArrayListManagedConnectionPool.java:``873``)````at org.jboss.jca.core.connectionmanager.pool.mcp.SemaphoreArrayListManagedConnectionPool.getConnection(SemaphoreArrayListManagedConnectionPool.java:``418``)````at org.jboss.jca.core.connectionmanager.pool.AbstractPool.getSimpleConnection(AbstractPool.java:``467``)````at org.jboss.jca.core.connectionmanager.pool.AbstractPool.getConnection(AbstractPool.java:``439``)````at org.jboss.jca.core.connectionmanager.AbstractConnectionManager.getManagedConnection(AbstractConnectionManager.java:``354``)````at org.jboss.jca.core.connectionmanager.AbstractConnectionManager.getManagedConnection(AbstractConnectionManager.java:``327``)````at org.jboss.jca.core.connectionmanager.AbstractConnectionManager.allocateConnection(AbstractConnectionManager.java:``510``)````at org.jboss.jca.adapters.jdbc.WrapperDataSource.getConnection(WrapperDataSource.java:``143``)````at com.totvs.technology.wcm.WCMService.validateConfigurations(WCMService.java:``686``) [wcm-deploy.jar:]````at com.totvs.technology.wcm.WCMService.doStartUp(WCMService.java:``411``) [wcm-deploy.jar:]````at com.totvs.technology.wcm.WCMService.access$``300``(WCMService.java:``86``) [wcm-deploy.jar:]````at com.totvs.technology.wcm.WCMService$StandAloneScanner.run(WCMService.java:``931``) [wcm-deploy.jar:]````at java.lang.Thread.run(Thread.java:``745``) [rt.jar:``1.7``.0_76]``Caused by: java.sql.SQLRecoverableException: Listener refused the connection with the following error:``ORA-``12514``, TNS:listener does not currently know of service requested in connect descriptor``` ```at oracle.jdbc.driver.T4CConnection.logon(T4CConnection.java:``673``)````at oracle.jdbc.driver.PhysicalConnection.(PhysicalConnection.java:``715``)````at oracle.jdbc.driver.T4CConnection.(T4CConnection.java:``385``)````at oracle.jdbc.driver.T4CDriverExtension.getConnection(T4CDriverExtension.java:``30``)````at oracle.jdbc.driver.OracleDriver.connect(OracleDriver.java:``564``)````at org.jboss.jca.adapters.jdbc.local.LocalManagedConnectionFactory.getLocalManagedConnection(LocalManagedConnectionFactory.java:``323``)````...``14` `more``Caused by: oracle.net.ns.NetException: Listener refused the connection with the following error:``ORA-``12514``, TNS:listener does not currently know of service requested in connect descriptor``` ```at oracle.net.ns.NSProtocolStream.negotiateConnection(NSProtocolStream.java:``272``)````at oracle.net.ns.NSProtocol.connect(NSProtocol.java:``263``)````at oracle.jdbc.driver.T4CConnection.connect(T4CConnection.java:``1360``)````at oracle.jdbc.driver.T4CConnection.logon(T4CConnection.java:``486``)````...``19` `more``16``:``49``:``25``,``803` `INFO  [stdout] (Thread-``69``) ===============================================================``16``:``49``:``25``,``803` `INFO  [stdout] (Thread-``69``) == Atenção, não constam no banco de dados as configurações   ==``16``:``49``:``25``,``803` `INFO  [stdout] (Thread-``69``) == da plataforma. Certifique-se que a instalação/atualização ==``16``:``49``:``25``,``803` `INFO  [stdout] (Thread-``69``) == foi realizada através``do` `instalador gráfico ou linha     ==``16``:``49``:``25``,``803` `INFO  [stdout] (Thread-``69``) == de comando.                                               ==``16``:``49``:``25``,``803` `INFO  [stdout] (Thread-``69``) ===============================================================``16``:``49``:``25``,``803` `ERROR [stderr] (Thread-``69``) com.totvs.technology.wcm.WCMService$NoConfigException``16``:``49``:``25``,``803` `ERROR [stderr] (Thread-``69``)     at com.totvs.technology.wcm.WCMService.validateConfigurations(WCMService.java:``705``)``16``:``49``:``25``,``803` `ERROR [stderr] (Thread-``69``)     at com.totvs.technology.wcm.WCMService.doStartUp(WCMService.java:``411``)``16``:``49``:``25``,``803` `ERROR [stderr] (Thread-``69``)     at com.totvs.technology.wcm.WCMService.access$``300``(WCMService.java:``86``)``16``:``49``:``25``,``803` `ERROR [stderr] (Thread-``69``)     at com.totvs.technology.wcm.WCMService$StandAloneScanner.run(WCMService.java:``931``)``16``:``49``:``25``,``803` `ERROR [stderr] (Thread-``69``)     at java.lang.Thread.run(Thread.java:``745``)``16``:``49``:``25``,``803` `INFO  [stdout] (Thread-``69``) ***************************************``16``:``49``:``25``,``803` `INFO  [stdout] (Thread-``69``) Startup stoped.``16``:``49``:``25``,``803` `INFO  [stdout] (Thread-``69``) ***************************************` |
| --- | --- |

# Causa

No arquivo de log, o aviso*"Throwable while attempting to get a new connection: null: javax.resource.ResourceException: Could not create connection"* indica que não foi possível realizar a conexão com o banco de dados.

Logo abaixo é exibido o aviso *"Caused by: java.sql.SQLRecoverableException: Listener refused the connection with the following error: ORA-12514, TNS:listener does not currently know of service requested in connect descriptor"* indicando que a instância do banco foi iniciada antes do *listener* ou que o Oracle não reconhece o serviço configurado.

# Solução

Verifique as configurações do banco e se as informações estão corretas no arquivo de configuração da plataforma.

- [A partir da 2.0](#)
- [1.6.5-190514 a 1.8.2](#)
- [1.6.0 a 1.6.5-190507](#)
- [Até a versão 1.5.13](#)

 - Acesse o diretório **[diretório_instalação****]****\appserver\standalone\configuration** e edite o arquivo **standalone****.xml**;

 - Procure pelo bloco **<****datasources>**;

 - Nesse bloco verifique todas as informações relacionadas à conexão com o banco, como por exemplo, usuário, senha e nome da base.

Exemplo de configuração com banco de dados Oracle:

 **standalone.xml** Expand source 

[expand source](#)[?](#)

| `````````jdbc:oracle:thin:@192.168.0.1:1521:FLUIG````oracleDriver````alter session set nls_comp = 'LINGUISTIC' nls_sort = 'BINARY_CI'````TRANSACTION_READ_COMMITTED````````10````20````````````usuario````senha````````````````true````false````````````false````````````````jdbc:oracle:thin:@192.168.0.1:1521:FLUIG````oracleDriver````alter session set nls_comp = 'LINGUISTIC' nls_sort = 'BINARY_CI'````TRANSACTION_READ_COMMITTED````````5````15````````````usuario````senha````````````````true````false````````````30000````````````false````````````````jdbc:oracle:thin:@192.168.0.1:1521:FLUIG````oracleDriver````alter session set nls_comp = 'LINGUISTIC' nls_sort = 'BINARY_CI'````TRANSACTION_READ_COMMITTED````````5````15````````````usuario````senha````````````````true````false````````````30000````````````false````````````````````oracle.jdbc.driver.OracleDriver``````````` |
| --- |

 - Acesse o diretório **[diretório_instalação****]****\appserver\domain\configuration** e edite o arquivo **domain****.xml**;

 - Procure pelo bloco **<****datasources>**;

 - Nesse bloco verifique todas as informações relacionadas à conexão com o banco, como por exemplo, usuário, senha e nome da base.

Exemplo de configuração com banco de dados Oracle:

 **domain.xml** Expand source 

[expand source](#)[?](#)

| `````````jdbc:oracle:thin:@192.168.0.1:1521:FLUIG````oracleDriver````alter session set nls_comp = 'LINGUISTIC' nls_sort = 'BINARY_CI'````TRANSACTION_READ_COMMITTED````````10````20````````````usuario````senha````````````````true````false````````````false````````````````jdbc:oracle:thin:@192.168.0.1:1521:FLUIG````oracleDriver````alter session set nls_comp = 'LINGUISTIC' nls_sort = 'BINARY_CI'````TRANSACTION_READ_COMMITTED````````5````15````````````usuario````senha````````````````true````false````````````30000````````````false````````````````jdbc:oracle:thin:@192.168.0.1:1521:FLUIG````oracleDriver````alter session set nls_comp = 'LINGUISTIC' nls_sort = 'BINARY_CI'````TRANSACTION_READ_COMMITTED````````5````15````````````usuario````senha````````````````true````false````````````30000````````````false````````````````````oracle.jdbc.driver.OracleDriver``````````` |
| --- |

 - Acesse o diretório **[diretório_instalação****]****\appserver\domain\configuration** e edite o arquivo **domain****.xml**;

 - Procure pelo bloco **<****datasources>**;

 - Nesse bloco verifique todas as informações relacionadas à conexão com o banco, como por exemplo, usuário, senha e nome da base.

Exemplo de configuração com banco de dados Oracle:

 **domain.xml** Expand source 

[expand source](#)[?](#)

| `````````jdbc:oracle:thin:@192.168.0.1:1521:FLUIG````oracleDriver````alter session set nls_comp = 'LINGUISTIC' nls_sort = 'BINARY_CI'````TRANSACTION_READ_COMMITTED````````10````20````````````usuario````senha````````````````true````false````````````false````````````````jdbc:oracle:thin:@192.168.0.1:1521:FLUIG````oracleDriver````alter session set nls_comp = 'LINGUISTIC' nls_sort = 'BINARY_CI'````TRANSACTION_READ_COMMITTED````````5````15````````````usuario````senha````````````````true````false````````````30000````````````false````````````````````oracle.jdbc.driver.OracleDriver``````````` |
| --- |

 - Acesse o diretório **[diretório_instalação****]\jboss\standalone\configuration** e edite o arquivo **standalone.xml**;

 - Procure pelo bloco **<****datasources>**;

 - Nesse bloco verifique todas as informações relacionadas à conexão com o banco, como por exemplo, usuário, senha e nome da base.

Exemplo de configuração com banco de dados Oracle:

 **standalone.xml** Expand source 

[expand source](#)[?](#)

| `````````jdbc:oracle:thin:@192.168.0.1:1521:FLUIG````oracleDriver````alter session set nls_comp = 'LINGUISTIC' nls_sort = 'BINARY_CI'````TRANSACTION_READ_COMMITTED````````10````20````````````usuario````senha````````````````true````false````````````false````````````````jdbc:oracle:thin:@192.168.0.1:1521:FLUIG````oracleDriver````alter session set nls_comp = 'LINGUISTIC' nls_sort = 'BINARY_CI'````TRANSACTION_READ_COMMITTED````````5````15````````````usuario````senha````````````````true````false````````````30000````````````false````````````````````oracle.jdbc.driver.OracleDriver``````````` |
| --- |

Observações!

Para saber mais sobre como configurar o banco de dados Oracle acesse [Configuração do banco de dados Oracle](/pages/viewpage.action?pageId=257623480).

Consulte também a página [Alterar informação de conexão com banco de dados da plataforma](/pages/viewpage.action?pageId=243654987).


<!-- anchors: ARQMensagem"Atenção,nãoconstamnobancodedadosasconfiguraçõesdaplataforma",comoresolver?-Índice, ARQMensagem"Atenção,nãoconstamnobancodedadosasconfiguraçõesdaplataforma",comoresolver?-Plataforma, ARQMensagem"Atenção,nãoconstamnobancodedadosasconfiguraçõesdaplataforma",comoresolver?-Ocorrência, highlighter_984045, ARQMensagem"Atenção,nãoconstamnobancodedadosasconfiguraçõesdaplataforma",comoresolver?-Causa, ARQMensagem"Atenção,nãoconstamnobancodedadosasconfiguraçõesdaplataforma",comoresolver?-Solução, sample, sample-4, highlighter_70280, sample-3, highlighter_981501, sample-1, highlighter_991111, sample-2, highlighter_125460 -->
