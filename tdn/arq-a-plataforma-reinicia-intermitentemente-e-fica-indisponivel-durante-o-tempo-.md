---
title: "ARQ - A plataforma reinicia intermitentemente e fica indisponível durante o tempo de reinicialização"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=190515881"
scraped_at: "2026-03-04T03:37:26.604Z"
depth: 4
anchors: 12
child_links: 61
---

# ARQ - A plataforma reinicia intermitentemente e fica indisponível durante o tempo de reinicialização

# Índice

# Plataforma

**Produto:**TOTVS Fluig Plataforma

**Ambiente:** Windows

**Banco de Dados:** SQL Server

# Ocorrência

O serviço da plataforma reinicia intermitentemente e o sistema fica indisponível durante o tempo de reinicialização.

# Causa

A plataforma pode ter perdido a conexão com o banco de dados e até a conexão ser restabelecida o sistema fica indisponível.

# Solução

- [A partir da 2.0](#)
- [1.6 até 1.8.2](#)
- [1.5.13 e anteriores](#)

 - Acesse o servidor da plataforma e navegue até a pasta de instalação;

 - Acesse [diretório_instalação]\appserver\standalone\log;

 - Edite o arquivo **server.log** e procure por "**Could not create connection**";

 - Se o problema for de conexão com o banco de dados SQL Server, o erro será parecido com o exemplo a seguir:

 **Log "Could not create connection"** Expand source 

[expand source](#)[?](#)

| `04``:``00``:``10``,``559` `WARN  [org.jboss.jca.core.connectionmanager.pool.strategy.OnePool] (QuartzScheduler_WebdeskScheduler-NON_CLUSTERED_MisfireHandler) IJ000604: Throwable``while` `attempting to get a``new` `connection:``null``: javax.resource.ResourceException: Could not create connection````at org.jboss.jca.adapters.jdbc.local.LocalManagedConnectionFactory.getLocalManagedConnection(LocalManagedConnectionFactory.java:``288``)````at org.jboss.jca.adapters.jdbc.local.LocalManagedConnectionFactory.createManagedConnection(LocalManagedConnectionFactory.java:``246``)````at org.jboss.jca.core.connectionmanager.pool.mcp.SemaphoreArrayListManagedConnectionPool.createConnectionEventListener(SemaphoreArrayListManagedConnectionPool.java:``781``)````at org.jboss.jca.core.connectionmanager.pool.mcp.SemaphoreArrayListManagedConnectionPool.getConnection(SemaphoreArrayListManagedConnectionPool.java:``344``)````at org.jboss.jca.core.connectionmanager.pool.AbstractPool.getSimpleConnection(AbstractPool.java:``397``)````at org.jboss.jca.core.connectionmanager.pool.AbstractPool.getConnection(AbstractPool.java:``365``)````at org.jboss.jca.core.connectionmanager.AbstractConnectionManager.getManagedConnection(AbstractConnectionManager.java:``329``)````at org.jboss.jca.core.connectionmanager.AbstractConnectionManager.getManagedConnection(AbstractConnectionManager.java:``302``)````at org.jboss.jca.core.connectionmanager.AbstractConnectionManager.allocateConnection(AbstractConnectionManager.java:``464``)````at org.jboss.jca.adapters.jdbc.WrapperDataSource.getConnection(WrapperDataSource.java:``139``)````at org.quartz.utils.JNDIConnectionProvider.getConnection(JNDIConnectionProvider.java:``159``) [quartz-``1.5``.``2``.jar:``1.5``.``2``]````at org.quartz.utils.DBConnectionManager.getConnection(DBConnectionManager.java:``111``) [quartz-``1.5``.``2``.jar:``1.5``.``2``]````at org.quartz.impl.jdbcjobstore.JobStoreCMT.getNonManagedTXConnection(JobStoreCMT.java:``1431``) [quartz-``1.5``.``2``.jar:``1.5``.``2``]````at org.quartz.impl.jdbcjobstore.JobStoreCMT.doRecoverMisfires(JobStoreCMT.java:``1335``) [quartz-``1.5``.``2``.jar:``1.5``.``2``]````at org.quartz.impl.jdbcjobstore.JobStoreSupport$MisfireHandler.manage(JobStoreSupport.java:``2449``) [quartz-``1.5``.``2``.jar:``1.5``.``2``]````at org.quartz.impl.jdbcjobstore.JobStoreSupport$MisfireHandler.run(JobStoreSupport.java:``2468``) [quartz-``1.5``.``2``.jar:``1.5``.``2``]``Caused by: com.microsoft.sqlserver.jdbc.SQLServerException: The TCP/IP connection to the host fluigdb, port``1433` `has failed. Error:``"connect timed out. Verify the connection properties. Make sure that an instance of SQL Server is running on the host and accepting TCP/IP connections at the port. Make sure that TCP connections to the port are not blocked by a firewall."``.````at com.microsoft.sqlserver.jdbc.SQLServerException.makeFromDriverError(SQLServerException.java:``190``)````at com.microsoft.sqlserver.jdbc.SQLServerException.ConvertConnectExceptionToSQLServerException(SQLServerException.java:``241``)````at com.microsoft.sqlserver.jdbc.SocketFinder.findSocket(IOBuffer.java:``2243``)````at com.microsoft.sqlserver.jdbc.TDSChannel.open(IOBuffer.java:``491``)````at com.microsoft.sqlserver.jdbc.SQLServerConnection.connectHelper(SQLServerConnection.java:``1309``)````at com.microsoft.sqlserver.jdbc.SQLServerConnection.login(SQLServerConnection.java:``991``)````at com.microsoft.sqlserver.jdbc.SQLServerConnection.connect(SQLServerConnection.java:``827``)````at com.microsoft.sqlserver.jdbc.SQLServerDriver.connect(SQLServerDriver.java:``1012``)````at org.jboss.jca.adapters.jdbc.local.LocalManagedConnectionFactory.getLocalManagedConnection(LocalManagedConnectionFactory.java:``260``)````...``15` `more` |
| --- |

Nesse caso:

 - Verifique se as propriedades de conexão com o banco de dados foram alteradas (em caso positivo, é necessário alterar em [diretório_instalação]\appserver\standalone\configuration\standalone.xml);

 - Certifique-se de que uma instância do SQL Server esteja rodando no host e aceitando conexões TCP/IP na porta;

 - Certifique-se também de que as conexões TCP na porta não estejam bloqueadas pelo firewall.

 - Acesse a pasta de instalação da plataforma;

 - Acesse [diretório_instalação]\appserver\domain\servers\[fluig server]\log;

 - Edite o arquivo **server.log** e procure por "**Could not create connection**";

 - Se o problema for de conexão com o banco de dados SQL Server, o erro será parecido com o exemplo a seguir:

 **Log "Could not create connection"** Expand source 

[expand source](#)[?](#)

| `04``:``00``:``10``,``559` `WARN  [org.jboss.jca.core.connectionmanager.pool.strategy.OnePool] (QuartzScheduler_WebdeskScheduler-NON_CLUSTERED_MisfireHandler) IJ000604: Throwable``while` `attempting to get a``new` `connection:``null``: javax.resource.ResourceException: Could not create connection````at org.jboss.jca.adapters.jdbc.local.LocalManagedConnectionFactory.getLocalManagedConnection(LocalManagedConnectionFactory.java:``288``)````at org.jboss.jca.adapters.jdbc.local.LocalManagedConnectionFactory.createManagedConnection(LocalManagedConnectionFactory.java:``246``)````at org.jboss.jca.core.connectionmanager.pool.mcp.SemaphoreArrayListManagedConnectionPool.createConnectionEventListener(SemaphoreArrayListManagedConnectionPool.java:``781``)````at org.jboss.jca.core.connectionmanager.pool.mcp.SemaphoreArrayListManagedConnectionPool.getConnection(SemaphoreArrayListManagedConnectionPool.java:``344``)````at org.jboss.jca.core.connectionmanager.pool.AbstractPool.getSimpleConnection(AbstractPool.java:``397``)````at org.jboss.jca.core.connectionmanager.pool.AbstractPool.getConnection(AbstractPool.java:``365``)````at org.jboss.jca.core.connectionmanager.AbstractConnectionManager.getManagedConnection(AbstractConnectionManager.java:``329``)````at org.jboss.jca.core.connectionmanager.AbstractConnectionManager.getManagedConnection(AbstractConnectionManager.java:``302``)````at org.jboss.jca.core.connectionmanager.AbstractConnectionManager.allocateConnection(AbstractConnectionManager.java:``464``)````at org.jboss.jca.adapters.jdbc.WrapperDataSource.getConnection(WrapperDataSource.java:``139``)````at org.quartz.utils.JNDIConnectionProvider.getConnection(JNDIConnectionProvider.java:``159``) [quartz-``1.5``.``2``.jar:``1.5``.``2``]````at org.quartz.utils.DBConnectionManager.getConnection(DBConnectionManager.java:``111``) [quartz-``1.5``.``2``.jar:``1.5``.``2``]````at org.quartz.impl.jdbcjobstore.JobStoreCMT.getNonManagedTXConnection(JobStoreCMT.java:``1431``) [quartz-``1.5``.``2``.jar:``1.5``.``2``]````at org.quartz.impl.jdbcjobstore.JobStoreCMT.doRecoverMisfires(JobStoreCMT.java:``1335``) [quartz-``1.5``.``2``.jar:``1.5``.``2``]````at org.quartz.impl.jdbcjobstore.JobStoreSupport$MisfireHandler.manage(JobStoreSupport.java:``2449``) [quartz-``1.5``.``2``.jar:``1.5``.``2``]````at org.quartz.impl.jdbcjobstore.JobStoreSupport$MisfireHandler.run(JobStoreSupport.java:``2468``) [quartz-``1.5``.``2``.jar:``1.5``.``2``]``Caused by: com.microsoft.sqlserver.jdbc.SQLServerException: The TCP/IP connection to the host fluigdb, port``1433` `has failed. Error:``"connect timed out. Verify the connection properties. Make sure that an instance of SQL Server is running on the host and accepting TCP/IP connections at the port. Make sure that TCP connections to the port are not blocked by a firewall."``.````at com.microsoft.sqlserver.jdbc.SQLServerException.makeFromDriverError(SQLServerException.java:``190``)````at com.microsoft.sqlserver.jdbc.SQLServerException.ConvertConnectExceptionToSQLServerException(SQLServerException.java:``241``)````at com.microsoft.sqlserver.jdbc.SocketFinder.findSocket(IOBuffer.java:``2243``)````at com.microsoft.sqlserver.jdbc.TDSChannel.open(IOBuffer.java:``491``)````at com.microsoft.sqlserver.jdbc.SQLServerConnection.connectHelper(SQLServerConnection.java:``1309``)````at com.microsoft.sqlserver.jdbc.SQLServerConnection.login(SQLServerConnection.java:``991``)````at com.microsoft.sqlserver.jdbc.SQLServerConnection.connect(SQLServerConnection.java:``827``)````at com.microsoft.sqlserver.jdbc.SQLServerDriver.connect(SQLServerDriver.java:``1012``)````at org.jboss.jca.adapters.jdbc.local.LocalManagedConnectionFactory.getLocalManagedConnection(LocalManagedConnectionFactory.java:``260``)````...``15` `more` |
| --- |

Nesse caso:

 - Verifique se as propriedades de conexão com o banco de dados foram alteradas (em caso positivo, é necessário alterar em [diretório_instalação]\appserver\domain\configuration\domain.xml);

 - Certifique-se de que uma instância do SQL Server esteja rodando no host e aceitando conexões TCP/IP na porta;

 - Certifique-se também de que as conexões TCP na porta não estejam bloqueadas pelo firewall.

 - Acesse o servidor da plataforma e navegue até a pasta de instalação da plataforma;

 - Acesse jboss\standalone\log;

 - Edite o arquivo **server.log** e procure por "**Could not create connection**";

 - Se o problema for de conexão com o banco de dados SQL Server, o erro será parecido com o exemplo a seguir:

 **Log "Could not create connection"** Expand source 

[expand source](#)[?](#)

| `04``:``00``:``10``,``559` `WARN  [org.jboss.jca.core.connectionmanager.pool.strategy.OnePool] (QuartzScheduler_WebdeskScheduler-NON_CLUSTERED_MisfireHandler) IJ000604: Throwable``while` `attempting to get a``new` `connection:``null``: javax.resource.ResourceException: Could not create connection````at org.jboss.jca.adapters.jdbc.local.LocalManagedConnectionFactory.getLocalManagedConnection(LocalManagedConnectionFactory.java:``288``)````at org.jboss.jca.adapters.jdbc.local.LocalManagedConnectionFactory.createManagedConnection(LocalManagedConnectionFactory.java:``246``)````at org.jboss.jca.core.connectionmanager.pool.mcp.SemaphoreArrayListManagedConnectionPool.createConnectionEventListener(SemaphoreArrayListManagedConnectionPool.java:``781``)````at org.jboss.jca.core.connectionmanager.pool.mcp.SemaphoreArrayListManagedConnectionPool.getConnection(SemaphoreArrayListManagedConnectionPool.java:``344``)````at org.jboss.jca.core.connectionmanager.pool.AbstractPool.getSimpleConnection(AbstractPool.java:``397``)````at org.jboss.jca.core.connectionmanager.pool.AbstractPool.getConnection(AbstractPool.java:``365``)````at org.jboss.jca.core.connectionmanager.AbstractConnectionManager.getManagedConnection(AbstractConnectionManager.java:``329``)````at org.jboss.jca.core.connectionmanager.AbstractConnectionManager.getManagedConnection(AbstractConnectionManager.java:``302``)````at org.jboss.jca.core.connectionmanager.AbstractConnectionManager.allocateConnection(AbstractConnectionManager.java:``464``)````at org.jboss.jca.adapters.jdbc.WrapperDataSource.getConnection(WrapperDataSource.java:``139``)````at org.quartz.utils.JNDIConnectionProvider.getConnection(JNDIConnectionProvider.java:``159``) [quartz-``1.5``.``2``.jar:``1.5``.``2``]````at org.quartz.utils.DBConnectionManager.getConnection(DBConnectionManager.java:``111``) [quartz-``1.5``.``2``.jar:``1.5``.``2``]````at org.quartz.impl.jdbcjobstore.JobStoreCMT.getNonManagedTXConnection(JobStoreCMT.java:``1431``) [quartz-``1.5``.``2``.jar:``1.5``.``2``]````at org.quartz.impl.jdbcjobstore.JobStoreCMT.doRecoverMisfires(JobStoreCMT.java:``1335``) [quartz-``1.5``.``2``.jar:``1.5``.``2``]````at org.quartz.impl.jdbcjobstore.JobStoreSupport$MisfireHandler.manage(JobStoreSupport.java:``2449``) [quartz-``1.5``.``2``.jar:``1.5``.``2``]````at org.quartz.impl.jdbcjobstore.JobStoreSupport$MisfireHandler.run(JobStoreSupport.java:``2468``) [quartz-``1.5``.``2``.jar:``1.5``.``2``]``Caused by: com.microsoft.sqlserver.jdbc.SQLServerException: The TCP/IP connection to the host fluigdb, port``1433` `has failed. Error:``"connect timed out. Verify the connection properties. Make sure that an instance of SQL Server is running on the host and accepting TCP/IP connections at the port. Make sure that TCP connections to the port are not blocked by a firewall."``.````at com.microsoft.sqlserver.jdbc.SQLServerException.makeFromDriverError(SQLServerException.java:``190``)````at com.microsoft.sqlserver.jdbc.SQLServerException.ConvertConnectExceptionToSQLServerException(SQLServerException.java:``241``)````at com.microsoft.sqlserver.jdbc.SocketFinder.findSocket(IOBuffer.java:``2243``)````at com.microsoft.sqlserver.jdbc.TDSChannel.open(IOBuffer.java:``491``)````at com.microsoft.sqlserver.jdbc.SQLServerConnection.connectHelper(SQLServerConnection.java:``1309``)````at com.microsoft.sqlserver.jdbc.SQLServerConnection.login(SQLServerConnection.java:``991``)````at com.microsoft.sqlserver.jdbc.SQLServerConnection.connect(SQLServerConnection.java:``827``)````at com.microsoft.sqlserver.jdbc.SQLServerDriver.connect(SQLServerDriver.java:``1012``)````at org.jboss.jca.adapters.jdbc.local.LocalManagedConnectionFactory.getLocalManagedConnection(LocalManagedConnectionFactory.java:``260``)````...``15` `more` |
| --- |

Nesse caso:

 - Verifique se as propriedades de conexão com o banco de dados foram alteradas (em caso positivo, é necessário alterar em [diretório_instalação]\jboss\standalone\configuration\standalone.xml);

 - Certifique-se de que uma instância do SQL Server esteja rodando no host e aceitando conexões TCP/IP na porta;

 - Certifique-se também de que as conexões TCP na porta não estejam bloqueadas pelo firewall.


<!-- anchors: ARQAplataformareiniciaintermitentementeeficaindisponívelduranteotempodereinicialização-Índice, ARQAplataformareiniciaintermitentementeeficaindisponívelduranteotempodereinicialização-Plataforma, ARQAplataformareiniciaintermitentementeeficaindisponívelduranteotempodereinicialização-Ocorrência, ARQAplataformareiniciaintermitentementeeficaindisponívelduranteotempodereinicialização-Causa, ARQAplataformareiniciaintermitentementeeficaindisponívelduranteotempodereinicialização-Solução, sample, sample-1, highlighter_108596, sample-2, highlighter_948150, sample-3, highlighter_952916 -->
