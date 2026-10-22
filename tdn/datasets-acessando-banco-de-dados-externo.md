---
title: "Datasets acessando banco de dados externo"
url: "https://tdn.totvs.com/display/public/fluig/Datasets+acessando+banco+de+dados+externo"
scraped_at: "2026-03-09T03:12:26.180Z"
depth: 1
anchors: 10
child_links: 51
---

# Datasets acessando banco de dados externo

Fique atento!

Esta página é válida para atualizações **1.6** e **superiores** do TOTVS Fluig.

# Objetivo

---

O objetivo desse guia é apresentar os procedimentos necessários para criar *datasets* que acessem banco de dados externos ao TOTVS Fluig.

Importante!

A partir da atualização **Liquid (1.6.5)**, os *select* passados por *constraint* em *dataset* serão bloqueados pelo serviço. Abaixo temos um exemplo da correta utilização do procedimento.

Atenção!

Ao realizar um desenvolvimento usando o *datasource* da plataforma a partir da **atualização 1.6.5-190514** é indispensável usar o **AppDS** em vez do **FluigDS** ou **FluigDSRO**.

# Datasets acessando banco de dados externo

---

Para que seja possível criar um *dataset* que acesse uma base externa à plataforma, é necessário, primeiramente, configurar o serviço JDBC.

- [JDBC pelo painel de controle](#)
- [JDBC pelo arquivo standalone.xml ou domain.xml](#)

 - Acesse o TOTVS Fluig com usuário administrador a opção **Painel de controle**, agrupador **Desenvolvimento** e **Serviços**. Selecione a opção **Novo serviço**:

![](/download/attachments/258277690/image2021-10-11_11-16-45.png?version=1&modificationDate=1633961806310&api=v2)

 - Selecione o tipo de serviço JDBC e insira as informações solicitadas:

   **Nome: **adicione um nome para o serviço que deseja cadastrar.

   - **Descrição: **adicione uma descrição para o serviço.

   - **Driver**: neste campo, será selecionado o *driver* desejado: MySQL, SQL Server ou Oracle. Após a gravação do serviço, o *driver* não pode ser editado.

   - **URL**: informe os dados do servidor de banco de dados.

   - **Usuário**: usuário de acesso ao banco de dados.

   - **Senha**: senha de acesso ao banco de dados.

![](/download/attachments/258277690/image2021-10-11_11-53-29.png?version=1&modificationDate=1633964010540&api=v2)

 - Acionar opção **Salvar.**

**Testando o serviço JDBC**

---

No serviço criado, selecione a opção **Testar conexão** ![](/download/attachments/258277690/fluigicon-computernetwork.png?version=1&modificationDate=1633964733937&api=v2) :

![](/download/attachments/258277690/image2021-10-11_12-7-14.png?version=1&modificationDate=1633964834887&api=v2)

**01.** Edite o arquivo de configuração de acordo com a atualização que você utiliza:

 - **a partir da atualização 2.0**: acesse [diretório_instalação]/appserver/standalone/configuration e edite o arquivo **standalone.xml**.

 - **para atualizações 1.6 até 1.8.2**: acesse [diretório_instalação]/appserver/domain/configuration e edite o arquivo **domain.xml**.

**02.** No arquivo editado (**standalone.xml** ou **domain.xml**), procure pela linha que contém a *tag* **<datasources>**. Esta *tag* é responsável pelo agrupamento das conexões criadas na aplicação.

A seguir é apresentado um exemplo da *tag* no arquivo:

  **Tag datasource**

[?](#)

| 12 | `````` |
| --- | --- |

Dentro desta *tag* terá uma outra *tag* chamada **<datasource>**, responsável pelas configurações de uma conexão com um banco de dados.

O exemplo abaixo apresenta o uso da *tag* **<datasource>** (conexão) criado dentro da primeira *tag* **<datasources>** (responsável pelo agrupamento das conexões), sendo que seu arquivo já possuirá alguns **<datasource>** configurados, que são responsáveis pela comunicação com o banco de dados da plataforma.

[?](#)

| 12345678910111213141516171819202122232425262728 | `````````jdbc:mysql://localhost:3306/fluig````mysqlDriver````TRANSACTION_READ_COMMITTED````````10````20````````````root````admin````````````````true````false````````````false````````````````````com.mysql.jdbc.Driver``````````` |
| --- | --- |

Importante!

**Não orientamos remover** ou **alterar** as conexões (**<datasource>**) **que já existem** no arquivo de configuração editado. Estas conexões são essenciais para o correto funcionamento da plataforma. Somente **as novas conexões** criadas com a finalidade de acesso aos *datasets* podem ser manipuladas.

No exemplo apresentado, além do *datasource*, existem duas outras *tags* que ficam dentro da estrutura da *tag* **<datasources>** que são as **<drivers>** e **<driver>**. A *tag* **<drivers>** é responsável pelo agrupamento das configurações de *driver*. Já a *tag* **<driver>** é responsável pela comunicação com o banco de dados. Pode haver uma ou várias configurações de *driver* caso mais de um banco seja acessado (Oracle, MySQL, SQLServer).

Importante!

   - O exemplo apresentado tem configurado somente o *driver* para uso do banco de dados MySQL. Se outro banco for utilizado, verifique a configuração do *driver* necessária para seu uso.

   - Não remova o *driver* já configurado ou substitua ele por outro. Caso necessário, configure um novo *driver* seguindo a estrutura já descrita.

**03.** Neste caso, para criar um *dataset* que acesse uma determinada base de dados, é necessário acrescentar uma nova conexão **<datasource>** dentro da *tag* **<datasources>**.

EXEMPLO
Para acessar uma base de dados em MySQL cujo nome da base seja **minhabase**, a configuração do novo *datasource* ficará da seguinte forma:

[?](#)

| 123456789101112131415161718192021222324 | ```````jdbc:mysql://localhost:3306/minhabase````mysqlDriver````````5````15````````````root````admin````````````````true````false````````````30000````````````false`````````  |
| --- | --- |

A partir do código gerado acima, vale destacar`:`

 - **jndi-name** = deve seguir a sintaxe "**java:/jdbc/**" onde após a / é necessário informar um *alias* para conexão. No exemplo, foi dado o nome de **MeuDataset** ficando "[java:/jdbc/MeuDataset](http://java/jdbc/MeuDataset)".

 - **pool-name**= usar o mesmo nome dado no *alias* para conexão. No exemplo definimos como **MeuDataset**.

 - **<connection-url>**= dentro desta *tag* deve ser informada a conexão com a base de dados, sendo que o exemplo mostra uma conexão com o banco de dados MySQL. Se outro banco for usado, deve ser verificada a forma correta de conexão *datasource* com o banco ao qual se pretende conectar.

 - **<user-name>**= usuário de acesso ao banco de dados.

 - **<password>** = senha de acesso ao banco de dados.

Importante!

Para garantir a integridade da base de dados que será acessada, é importante que o usuário configurado para acesso ao banco seja criado com privilégios somente de **leitura**, garantindo assim que nenhum registro possa ser alterado.

**04.** Após criado o *datasource*, salve o arquivo editado e reinicie o serviço do Fluig para que o servidor de aplicação (Wildfly) consiga mapear a nova conexão criada.

# Construindo o dataset para acesso à nova conexão

---

Neste tópico será apresentado o código necessário para criar um novo *dataset* com base nos dados da nova conexão. Caso haja dúvidas a respeito da criação de *datasets*, é aconselhável a leitura do tópico [Desenvolvimento de *datasets*](/display/fluig/Desenvolvimento+de+Datasets) antes de continuar esta etapa.

O exemplo abaixo apresenta o acesso ao *datasource* **MeuDataSet** criado anteriormente no arquivo**standalone.xml** (a partir da 2.0) ou **domain.xml** (1.6 até 1.8.2).

[?](#)

| 12345678910111213141516171819202122232425262728293031323334353637383940414243444546 | `function` `createDataset(fields, constraints, sortFields) {````var` `newDataset = DatasetBuilder.newDataset();````log.info(``"QUERY: "` `+ myQuery);````var` `dataSource =``"/jdbc/MeuDataSet"``;````var` `ic =``new` `javax.naming.InitialContext();````var` `ds = ic.lookup(dataSource);````var` `created =``false``;````var` `myQuery =``"select * from pessoas"``;````try` `{````var` `conn = ds.getConnection();````var` `stmt = conn.createStatement();````var` `rs = stmt.executeQuery(myQuery);````var` `columnCount = rs.getMetaData().getColumnCount();````while` `(rs.next()) {````if` `(!created) {````for` `(``var` `i = 1; i ```newDataset.addColumn(rs.getMetaData().getColumnName(i));````}````created =``true``;````}````var` `Arr =``new` `Array();````for` `(``var` `i = 1; i ```var` `obj = rs.getObject(rs.getMetaData().getColumnName(i));````if` `(``null` `!= obj) {````Arr[i - 1] = rs.getObject(rs.getMetaData().getColumnName(i)).toString();````}``else` `{````Arr[i - 1] =``"null"``;````}````}````newDataset.addRow(Arr);````}````}``catch` `(e) {````log.error(``"ERRO==============> "` `+ e.message);````} finally {````if` `(rs !=``null``) {````rs.close();````}````if` `(stmt !=``null``) {````stmt.close();````}````if` `(conn !=``null``) {````conn.close();````}````}````return` `newDataset;``}` |
| --- | --- |

A partir do código gerado acima, vale destacar:

- na linha 4 manter todo o código, alterando somente o nome **MeuDataSet** pelo nome dado ao criar seu *datasource*;

- na linha 8 adicionar a *query* para acesso à tabela contida no banco, cuja conexão foi criada.

Para validar o novo *dataset*, consulte o tópico [Visualizando *datasets*](/display/fluig/Desenvolvimento+de+Datasets#DesenvolvimentodeDatasets-consultando).


<!-- anchors: Datasetsacessandobancodedadosexterno-Objetivo, Datasetsacessandobancodedadosexterno-Datasetsacessandobancodedadosexterno, Exemplo1, Exemplo1-1, Exemplo1-2, highlighter_312189, highlighter_479986, highlighter_322358, Datasetsacessandobancodedadosexterno-Construindoodatasetparaacessoànovaconexão, highlighter_388460 -->
