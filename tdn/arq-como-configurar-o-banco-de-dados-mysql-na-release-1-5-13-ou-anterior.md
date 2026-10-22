---
title: "ARQ - Como configurar o banco de dados MySQL na release 1.5.13 ou anterior?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=128681321"
scraped_at: "2026-03-09T04:44:05.344Z"
depth: 3
anchors: 17
child_links: 53
---

# ARQ - Como configurar o banco de dados MySQL na release 1.5.13 ou anterior?

Atenção

Página destinada a atualizações 1.5.13 ou anteriores.

Acesse a página original a partir da atualização 1.6: [Configuração de banco de dados MySQL](/pages/viewpage.action?pageId=257623464).

# Índice

# Versões homologadas do MySQL

Para verificar as versões homologadas do MySQL acesse a [Matriz de Portabilidade](https://tdn.totvs.com/display/fluig/Matriz+de+Portabilidade).

# Configuração do MySQL

Atenção

Esta configuração deve ser realizada antes da criação do banco de dados do TOTVS Fluig Plataforma.

### Configurações

Por padrão, *aliases* de tabelas são *case sensitive* no Unix, mas não no Windows. Para evitar problemas causados por esta característica, no MySQL é necessário adicionar a variável de sistema *lower_case_table_names* no arquivo de configuração do MySQL.

Veja o parâmetro a seguir:

**Linux: my.cnf / Windows: my.ini**

[?](#)

| `lower_case_table_names=1` |
| --- |

Para verificar se a alteração foi aplicada com sucesso, execute o seguinte comando no MySQL:

**Linux: my.cnf / Windows: my.ini**

[?](#)

| `show global variables like 'lower%';` `+------------------------+-------+``| Variable_name          | Value |``+------------------------+-------+``| lower_case_file_system | OFF   |``| lower_case_table_names | 1     |``+------------------------+-------+` |
| --- |

Além disso é necessário confirmar que as tabelas serão criadas corretamente no banco de dados.

Para isso, no *Command Line Client do MySQ*L verifique a *engine* utilizada informando o comando:  

[?](#)

| `mysql>  SHOW ENGINES\G` |
| --- |

 * *

![](/download/attachments/128681321/mysql.png?version=1&modificationDate=1404913459000&api=v2)

Se a *Engine InnoDB* não aparecer como *Default*, o parâmetro *default_storage_engine *também deve ser adicionado ao arquivo, conforme segue:

**Linux: my.cnf / Windows: my.ini**

[?](#)

| `default_storage_engine=InnoDB` |
| --- |

Também é possível definir a quantidade de memória a ser usada pelo MySQL. Em servidor dedicado a boa prática é alocar 75% da memória disponível para o banco de dados:

**Linux: my.cnf / Windows: my.ini**

[?](#)

| `innodb_buffer_pool_size=` |
| --- |

Por exemplo, para alocar 128 MB de memória teríamos innodb_buffer_pool_size=134217728.

Caso sejam criados formulários com muitos campos, sendo a maioria deles do tipo TEXT, o MySQL pode restringir a criação de tabelas em que o tamanho somado dos campos ultrapasse o limite configurado. Recomendamos efetuar as seguintes configurações no banco de dados para solucionar essa restrição:

**Linux: my.cnf / Windows: my.ini**

[?](#)

| `innodb_log_file_size=512M``innodb_log_buffer_size=800M``innodb_strict_mode=0` |
| --- |

Após estas configurações é necessário reiniciar o MySQL.

Hey, atenção!

O serviço da plataforma não pode estar em execução durante a alteração destes parâmetros. Somente formulários publicados após esta alteração utilizarão a nova configuração.

### Confirmar alterações aplicadas

Para verificar se a configuração *case sensitive* foi efetuada com sucesso, execute o seguinte comando SQL:

[?](#)

| ```SHOW``GLOBAL` `VARIABLES``LIKE` `'lower_case_table_names'``;` |
| --- |

Se no resultado a coluna **value **possuir o valor 1 a configuração está correta.

Confirme também a alteração do *Engine* para *InnoDB*, caso tenha adicionado o parâmetro *default_storage_engine *ao arquivo*:*

[?](#)

| `SHOW ENGINES\G` |
| --- |

Se a* engine InnoDB* aparecer como* Default *a configuração foi aplicada com sucesso.

# Criação do banco de dados com codificação UTF-8

A plataforma necessita de uma base de dados com codificação UTF-8, para criar o banco com esta característica utilize o seguinte comando SQL:

[?](#)

| `CREATE` `DATABASE` `nome_do_banco``CHARACTER` `SET` `utf8``COLLATE` `utf8_general_ci;` |
| --- |

Onde **nome_do_banco** é o nome do banco a ser criado.

# Download do Driver

Para utilização do banco de dados MySQL, é necessário fazer o download do driver MySQL separadamente. 

Por isso, antes de iniciar a instalação da plataforma, siga os passos a seguir:

1. Faça o download do Driver em diretamente no site do MySQL: [http://dev.mysql.com/downloads/connector/j/](http://dev.mysql.com/downloads/connector/j/);
2. No campo **Select Platform** acione a opção **Platform Independent;**
3. Clique no botão **Download **ao lado da versão em arquivo ZIP;
4. Clique em **No thanks, just start my download** e será iniciado o download de um arquivo chamado **mysql-connector-java-xx.y.zz.zip**, onde xx.y.zz é a versão corrente do Driver;
5. Descompacte o arquivo baixado, será criada uma pasta chamada **mysql-connector-java-xx.y.zz***;*
6. Nesta pasta há um arquivo chamado*** mysql-connector-java-xx.y.zz-bin.jar***. Esse arquivo é o Driver.

# Otimizando a performance do banco de dados MySQL

Quando trabalhamos com um volume elevado de dados, o banco de dados pode apresentar problemas de baixo desempenho. Um investimento em capacidade física dos servidores é sempre bom. Porém há momentos que o *tuning *irá representar ganhos expressivos de performance.

Dica

Para a utilização da plataforma com um número elevado de usuários e dados é recomendado realizar o *tuning* do banco de dados.

Para mais informações sobre *tunning* e otimização de performance do MySQL consulte a documentação oficial disponível em [MySQL Optimization](http://dev.mysql.com/doc/refman/5.5/en/optimization.html).


<!-- anchors: ARQComoconfigurarobancodedadosMySQLnarelease1.5.13ouanterior?-Índice, ARQComoconfigurarobancodedadosMySQLnarelease1.5.13ouanterior?-VersõeshomologadasdoMySQL, ARQComoconfigurarobancodedadosMySQLnarelease1.5.13ouanterior?-ConfiguraçãodoMySQL, ARQComoconfigurarobancodedadosMySQLnarelease1.5.13ouanterior?-Configurações, highlighter_458894, highlighter_302225, highlighter_320794, highlighter_448726, highlighter_592333, highlighter_384158, ARQComoconfigurarobancodedadosMySQLnarelease1.5.13ouanterior?-Confirmaralteraçõesaplicadas, highlighter_354863, highlighter_720705, ARQComoconfigurarobancodedadosMySQLnarelease1.5.13ouanterior?-CriaçãodobancodedadoscomcodificaçãoUTF-8, highlighter_864149, ARQComoconfigurarobancodedadosMySQLnarelease1.5.13ouanterior?-DownloaddoDriver, ARQComoconfigurarobancodedadosMySQLnarelease1.5.13ouanterior?-OtimizandoaperformancedobancodedadosMySQL -->
