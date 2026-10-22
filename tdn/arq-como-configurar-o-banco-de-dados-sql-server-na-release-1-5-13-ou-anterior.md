---
title: "ARQ - Como configurar o banco de dados SQL Server na release 1.5.13 ou anterior?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=73078837"
scraped_at: "2026-03-09T04:44:15.969Z"
depth: 3
anchors: 23
child_links: 52
---

# ARQ - Como configurar o banco de dados SQL Server na release 1.5.13 ou anterior?

Atenção

Esta página foi revisada para considerar as configurações da atualização 1.5.13 ou anteriores.

Acesse a página original a partir da atualização 1.6: [Configuração do banco de dados SQL Server](/pages/viewpage.action?pageId=257623499).

# Índice

# Versões homologadas do SQL Server

Para verificar as versões homologadas do Microsoft SQL Server acesse a [Matriz de Portabilidade](https://tdn.totvs.com/display/fluig/Matriz+de+Portabilidade)

# Criação do banco de dados

O TOTVS Fluig Plataforma necessita de uma base de dados com codificação **Latin1_General_CI_AS***,* para criar o banco com esta característica, autentique-se no SQL Server com o usuário que será utilizado pela plataforma e execute o seguinte comando SQL:

[?](#)

| `CREATE` `DATABASE` `nome_do_banco``COLLATE` `Latin1_General_CI_AS;` |
| --- |

Onde **nome_do_banco** é o nome do banco a ser criado.

Outra alternativa para a criação do banco de dados é utilizar o **Microsoft SQL Server Management Studio, **seguindo o seguintes passos:

- [1º Passo](#)
- [2º Passo](#)
- [3º Passo](#)
- [4º Passo](#)

Conecte na instância do SQL Server através **Microsoft SQL Server Management Studio,**e então clique com o botão direito no mouse na pasta Bancos de Dados e selecione a opção **Novo Banco de Dados...**

![](/download/attachments/73078837/1.png?version=1&modificationDate=1403888757000&api=v2)

Ao abrir a tela do assistente, selecione a opção **Geral**em **Selecionar uma página.**Em seguida, informe o nome desejado para o banco de dados no campo **Nome do banco de dados**e selecione o usuário que será utilizado pela plataforma no campo **Proprietário.**

![](/download/attachments/73078837/2.png?version=1&modificationDate=1403888759000&api=v2)

Seguindo, selecione a opção **Opções**em **Selecionar uma página.**Em seguida, selecione o valor **Latin1_General_CI_AS**no campo **Agrupamento**.

![](/download/attachments/73078837/3.png?version=1&modificationDate=1403888762000&api=v2)

Para finalizar, encontra o opção **O Instantâneo de Leitura Confirmada Está Ativo (Is Read Committed Snapsho On** em inglês**)**e altere seu valor para **True.**Clique no botão **OK** para finalizar e criar o banco de dados.

![](/download/attachments/73078837/4.png?version=1&modificationDate=1403888763000&api=v2)

# Configuração do banco

Após a criação do banco de dados é necessário realizar as seguintes verificações:

### Proprietário do Banco

O usuário utilizado pela plataforma para conexão com o banco de dados deve ser **proprietário (db_owner)** do banco utilizado. Para verificar qual usuário é o proprietário do banco execute o seguinte comando SQL:

[?](#)

| ```SELECT` `suser_sname(owner_sid)``FROM` `sys.databases``WHERE` `name` `=``'nome_do_banco'``;` |
| --- |

Onde **nome_do_banco** é o nome do banco para consulta do proprietário.

Caso o proprietário do banco não seja o usuário utilizado pela plataforma Fluig para conexão com o banco de dados execute o seguinte comando T-SQL para definir este usuário como **proprietário (db_owner):**

[?](#)

| ```USE nome_do_banco``EXEC` `sp_changedbowner``'nome_usuario'``;` |
| --- |

Onde **nome_do_banco** é o nome do banco e **nome_usuario **o usuário que se tornará proprietário do banco de dados.

### Alteração do nível de Isolamento

Para verificar se a opção de isolamento READ_COMMITTED_SNAPSHOT está habilitado para o banco de dados execute o seguinte comando SQL: 

[?](#)

| ```SELECT` `is_read_committed_snapshot_on``FROM` `sys.databases``WHERE` `name``=``'nome_do_banco'``;` |
| --- |

Onde **nome_do_banco** é o nome do banco para consulta do proprietário.

Caso o retorno da consulta anterior seja o valor **0** é necessário executar o seguinte comando SQL:

[?](#)

| `ALTER` `DATABASE` `nome_do_banco``SET` `READ_COMMITTED_SNAPSHOT``ON``;` |
| --- |

Onde **nome_do_banco** é o nome do banco de dados a ser utilizado para a plataforma.

Esta operação de alteração do nível de isolamento padrão do SQL Server é realizada automaticamente pela plataforma. Porém é importante atentar para o seguinte fator:

Na criação do banco de dados, é executada uma ação de alteração na base. É normal visualizar no log algumas mensagens de erro, tratando-se de um processo padrão para atualização. A situação será normalizada após o término da operação.

Assim que o servidor estiver no ar recomendamos a reinicialização do mesmo.

### SQL Server 2014

Como você pode verificar na [Matriz de Portabilidade](/display/fluig/Matriz+de+Portabilidade), a plataforma está homologada para o SQL Server 2014 a partir da **atualização 1.6.5 - Liquid**.

Para as  atualizações 1.5.13 ou inferiores, caso seja utilizada a versão 2014 ou superior do SQL Server, é necessário alterar o arquivo **[Instalação fluig]\jboss\bin\standalone.conf.bat **(standalone.conf em ambientes Linux) e incluir a seguinte linha:

- [Windows](#)
- [Linux](#)

  **standalone.conf.bat**

[?](#)

| `set` `"JAVA_OPTS=%JAVA_OPTS% -Dhibernate.dialect=org.hibernate.dialect.SQLServer2008Dialect"` |
| --- |

  **standalone.conf**

[?](#)

| `JAVA_OPTS=``"$JAVA_OPTS -Dhibernate.dialect=org.hibernate.dialect.SQLServer2008Dialect"` |
| --- |

Além disso, é importante setar o nível de compatibilidade do banco de dados para SQL Server 2012 executando o comando abaixo:

[?](#)

| `ALTER` `DATABASE` `nome_do_banco``SET` `COMPATIBILITY_LEVEL = 110` |
| --- |

Este procedimento pode ser realizado através do **Microsoft SQL Server Management Studio.**


<!-- anchors: ARQComoconfigurarobancodedadosSQLServernarelease1.5.13ouanterior?-Índice, ARQComoconfigurarobancodedadosSQLServernarelease1.5.13ouanterior?-VersõeshomologadasdoSQLServer, ARQComoconfigurarobancodedadosSQLServernarelease1.5.13ouanterior?-Criaçãodobancodedados, highlighter_258144, create-db-studio, create-db-studio-1, create-db-studio-2, create-db-studio-3, create-db-studio-4, ARQComoconfigurarobancodedadosSQLServernarelease1.5.13ouanterior?-Configuraçãodobanco, ARQComoconfigurarobancodedadosSQLServernarelease1.5.13ouanterior?-ProprietáriodoBanco, highlighter_401558, highlighter_92854, ARQComoconfigurarobancodedadosSQLServernarelease1.5.13ouanterior?-AlteraçãodoníveldeIsolamento, highlighter_203476, highlighter_803567, ARQComoconfigurarobancodedadosSQLServernarelease1.5.13ouanterior?-SQLServer2014, Linha, Linha-1, highlighter_821817, Linha-2, highlighter_583269, highlighter_131355 -->
