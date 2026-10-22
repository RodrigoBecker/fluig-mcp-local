---
title: "Configuração de banco de dados MySQL"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=257623464"
scraped_at: "2026-03-09T04:10:35.489Z"
depth: 2
anchors: 27
child_links: 70
---

# Configuração de banco de dados MySQL

Fique atento!

Esta página é válida para atualizações **1.6** e **superiores** do TOTVS Fluig.

Caso possua uma atualização anterior acesse: [Como configurar o banco de dados MySQL na release 1.5.13 ou inferior?](/pages/viewpage.action?pageId=128681321)

# Versões homologadas do MySQL

---

Para verificar as versões homologadas do MySQL acesse a [Matriz de Portabilidade](https://tdn.totvs.com/display/fluig/Matriz+de+Portabilidade).

# Passo a passo para configuração do MySQL

---

As configurações apresentadas abaixo devem ser realizadas antes da criação do banco de dados da plataforma.

Atenção!

A **atualização** para versão **MySQL 8.0**, ou seja, quando já existe um banco criado em versões anteriores, é um processo complexo que envolve diversas configurações e requer muita atenção.

Recomendamos consultar um especialista em banco de dados para executar esses procedimentos devido a complexidade das configurações.

Contudo, listamos alguns materiais de apoio que indicamos a leitura antes de prosseguir com a atualização:

- [https://dev.mysql.com/doc/refman/8.0/en/upgrading.html](https://dev.mysql.com/doc/refman/8.0/en/upgrading.html)

- [https://dev.mysql.com/blog-archive/inplace-upgrade-from-mysql-5-7-to-mysql-8-0/](https://dev.mysql.com/blog-archive/inplace-upgrade-from-mysql-5-7-to-mysql-8-0/)

Importante!

Por questões de segurança é altamente recomendável efetuar a encriptação da senha conforme o procedimento informado na documentação [encriptação de senha do banco de dados](https://tdn.totvs.com/x/Oh4WGw).

## Criação do usuário e concessão de privilégios

---

Para a criação de um novo usuário em banco de dados MySQL usamos a instrução CREATE USER, conforme sintaxe abaixo:

[?](#)

| `CREATE` `USER` `'sha2user'``@``'localhost'``IDENTIFIED``WITH` `caching_sha2_password``BY` `'password'``;` |
| --- |

Onde:

- sha2user: Nome do usuário que será criado;
- localhost: Host que irá acessar;
- password: Senha do usuário que será criado;

Após criado o usuário é necessário conceder os privilégios de sistema necessários para ele, conforme sintaxe abaixo:

[?](#)

| `GRANT` `all` `ON` `fluig.*``TO` `'sha2user'``@``'localhost'``;` |
| --- |

Onde:

- sha2user: Nome do usuário criado anteriormente;
- localhost: Host do usuário criado anteriormente;

## Parâmetro de conexão

---

Nessa etapa, é realizada uma configuração específica para a versão do **MySQL 8.0. **Para as demais versões do MySQL permanece o que foi configurado por padrão.

Caso a configuração seja para a versão **MySQL 8.0**, é necessário alterar o parâmetro de conexão no arquivo de configurações.

Para isso:

- [A partir da 2.0](#)
- [1.6 até 1.8.2](#)

 - Acesse o diretório **\appserver\standalone\configuration** e edite o arquivo **standalone.xml**.

 - Localize as *tags* **<connection-url>**.

 - O parâmetro dessa *tag* deve ser alterado de: **?useSSL=false** para **?allowPublicKeyRetrieval=true&amp;useSSL=false**.

 - Acesse o diretório **\appserver\domain\configuration** e edite o arquivo **domain.xml**.

 - Localize as *tags* **<connection-url>**.

 - O parâmetro dessa *tag* deve ser alterado de: **?useSSL=false** para **?allowPublicKeyRetrieval=true&amp;useSSL=false**.

## Case sensitive

---

Por padrão, *aliases* de tabelas são *case sensitive* no Unix, mas não são no Windows. Para evitar problemas causados por esta característica, no MySQL é necessário adicionar a variável de sistema **lower_case_table_names **no arquivo de configuração do MySQL.

**MySQL em versões anteriores a 8.0**

Se você utiliza o banco de dados MySQL em versões anteriores a 8.0, basta incluir essa variável no arquivo **my.ini**(Windows) ou**my.cnf**(Linux)**.**

[?](#)

| `lower_case_table_names=1` |
| --- |

**MySQL na versão 8.0**

Se você utiliza o banco de dados MySQL na versão 8.0, no **Windows** você não precisa efetuar nenhuma configuração. A variável *lower_case_table_names*****já vem configurada por padrão com o valor 1.

No **Linux**, é OBRIGATÓRIO realizar essa configuração na instalação do servidor MySQL, alterando a variável *lower_case_table_names* para o valor 1.

Por se tratar de uma variável de sistema, que não pode ser alterada posteriormente, é muito importante configurá-la corretamente na instalação.

Para mais informações sobre o uso e configuração do *case sensitive* na versão 8.0, [consulte aqui](https://dev.mysql.com/doc/refman/8.0/en/identifier-case-sensitivity.html).

## Engines

---

Além disso é necessário confirmar que as tabelas serão criadas corretamente no banco de dados. Para isso, no *Command Line Client*do MySQL verifique a *engine* utilizada informando o comando:  

[?](#)

| `SHOW ENGINES\G` |
| --- |

Localize a *engine* InnoDB, conforme a imagem abaixo:

![](/download/attachments/257623464/mysql.png?version=1&modificationDate=1474479398000&api=v2)

Se a *engine*InnoDB não for apresentada como *Default*, o parâmetro *default_storage_engine *também deve ser adicionado ao arquivo, conforme segue:

  **Arquivo de configuração do MySQL (Normalmente Linux: my.cnf / Windows: my.ini**

[?](#)

| `default_storage_engine=InnoDB` |
| --- |

## Memória

---

Também é possível definir a quantidade de memória a ser usada pelo MySQL. Em um servidor dedicado, a boa prática é alocar de 75% a 80% da memória disponível para o banco de dados:

**Arquivo de configuração do MySQL (Normalmente Linux: my.cnf / Windows: my.ini**

[?](#)

| `innodb_buffer_pool_size=` |
| --- |

- Por exemplo, para alocar 128 MB de memória teríamos: innodb_buffer_pool_size=134217728.

## Criação de tabelas

---

Caso sejam criados formulários com muitos campos, sendo a maioria deles do tipo TEXT, o MySQL pode restringir a criação de tabelas em que o tamanho somado dos campos ultrapasse o limite permitido. 

Recomendamos efetuar as seguintes configurações no banco de dados para solucionar essa restrição:

**Arquivo de configuração do MySQL (Normalmente Linux: my.cnf / Windows: my.ini**

[?](#)

| `innodb_log_file_size=512M #Somente para MySQL em versões anteriores a 8.0``innodb_log_buffer_size=800M``innodb_strict_mode=0` |
| --- |

## Confirmar alterações

---

Após realizar as configurações expostas nos passos anteriores, é necessário reiniciar o MySQL e confirmar a aplicação das alterações.

Para verificar se a configuração *case sensitive* foi efetuada com sucesso, execute o comando SQL abaixo. Se no resultado a coluna *value *possuir o valor 1 a configuração está correta.

[?](#)

| `SHOW``GLOBAL` `VARIABLES``LIKE` `'lower_case_table_names'``;` |
| --- |

Confirme também a alteração do *Engine* para InnoDB, caso tenha adicionado o parâmetro *default_storage_engine *ao arquivo*:*

[?](#)

| `SHOW ENGINES\G` |
| --- |

Se a* engine*InnoDB aparecer como* Default *a configuração foi aplicada com sucesso.

Importante!

- ***Timezone***: o banco de dados MySQL possui validação de *timezone*, sendo assim, para a instalação da plataforma com MySQL, é necessário que o servidor onde está instalada a plataforma tenha o *timezone* válido (reconhecido pelo MySQL).

- **SSL**: se for necessário usar SSL, é preciso alterar o parâmetro *useSSL* para *true*. Esse parâmetro é encontrado na *string* de conexão dentro do arquivo ***standalone.xml*** (**a partir da 2.0**) ou do**domain.xml** (**da 1.6 até 1.8.2**)*.*

# Criação do banco de dados com codificação UTF-8

---

A plataforma necessita de uma base de dados com *charset* **UTF-8**. Para criar o banco com esta característica utilize o seguinte comando SQL, substituindo "nome_do_banco" pelo nome do banco a ser criado:

**MySQL em versões anteriores a 8.0**

[?](#)

| `CREATE` `DATABASE` `nome_do_banco``CHARACTER` `SET` `utf8``COLLATE` `utf8_general_ci;` |
| --- |

**MySQL na versão 8.0**

[?](#)

| `CREATE` `DATABASE` `nome_do_banco``CHARACTER` `SET` `utf8mb4``COLLATE` `utf8mb4_general_ci;` |
| --- |

Atenção!

A partir da versão 8.0 o charset utf8 e collate utf8_general_ci estão descontinuados e em breve não poderão ser mais utilizados.

Caso esteja atualizando para a versão 8.0, ou seja, já tenha um banco criado com o charset utf8 e collate utf8_general_ci, é necessário planejar a conversão do banco e tabelas para o charset utf8mb4 e collate utf8mb4_general_ci.

Recomendamos consultar um especialista em banco de dados para executar esses procedimentos. Existem ferramentas que realizam essa conversão e também comandos SQL que podem ser executados manualmente em seu banco de dados.

Atenção!

A partir da release 2.0 do TOTVS Fluig, será obrigatório a utilização do MySQL na versão 8. Em uma atualização, caso as **tabelas padrão** do produto não se encontrem com o charset utf8mb4 e collate utf8mb4_general_ci, o TOTVS Fluig efetuará a conversão automaticamente na primeira inicialização, não sendo necessário nenhuma conversão manual. 

Para tabelas customizadas e tabelas ML*, a conversão não será realizada automaticamente. Caso seja necessário, essa alteração deverá ser realizada manualmente.

Nota:

Não há um padrão para "nome_do_banco", cada cliente pode colocar o nome que desejar, por exemplo: *fluig*, *fluig-homologacao* ou *minhaempresa*.

# Download do driver

---

Para utilização do banco de dados MySQL, é necessário fazer o download do *driver* MySQL separadamente. 

Por isso, antes de iniciar a instalação/atualização da plataforma, siga os passos a seguir:

**01**. Faça o download do *driver* diretamente no [site do MySQL](http://dev.mysql.com/downloads/connector/j/);

Fique atento!

O driver do MySQL deve estar na mesma versão do banco MySQL que você tem instalado. Para saber quais são as versões homologadas acesse a [Matriz de Portabilidade](https://tdn.totvs.com/display/fluig/Matriz+de+Portabilidade).

**02**. No campo **Select Platform** acione a opção **Platform Independent**;

**03**. Clique no botão **Download **ao lado da versão em arquivo ZIP;

**04**. Clique em ***No thanks, just start my download*** e será iniciado o download de um arquivo chamado **mysql-connector-java-XX.Y.ZZ.zip**ou**mysql-connector-j-XX.Y.ZZ.zip**, onde XX.Y.ZZ é a versão atual do *driver*;

**05**. Descompacte o arquivo baixado. Será criada uma pasta chamada **mysql-connector-java-XX.Y.ZZ**ou**mysql-connector-j-XX.Y.ZZ.zip***;*

**06**. Nesta pasta há um arquivo chamado***mysql-connector-java-XX.Y.ZZ-bin.jar**ou**mysql-connector-j-XX.Y.ZZ.jar***. Esse arquivo é o *driver*.

Durante a instalação da plataforma, será necessário indicar o caminho onde o *driver* do MySQL foi armazenado.

Como atualizar?

A atualização do Fluig não permite atualizar o *driver* pelo instalador. Esse procedimento deve ser executado manualmente, seguindo os passos abaixo:

**01**. Acesse a pasta *<instalação Fluig>\appserver\modules\com\mysql\main.*

**02**. Exclua o arquivo *mysql-connector-java.jar* dessa pasta.

**03**. Copie o arquivo *mysql-connector-java-XX.Y.ZZ-bin.jar ou mysql-connector-j-XX.Y.ZZ.jar*(baixado do site e descompactado) para a pasta *<instalação Fluig>\appserver\modules\com\mysql\main.*

**04**. Renomeie o arquivo copiado (*mysql-connector-java-XX.Y.ZZ-bin.jar ou mysql-connector-j-XX.Y.ZZ.jar)* para *mysql-connector-java.jar.*

# Otimizando a performance do banco de dados MySQL

---

Atenção!

O limite default do banco **MySQL** para campos tipo *text* é de 195. Dentro deste padrão são realizados todos os testes com formulários no Fluig.

**Não recomendamos** a alteração do parâmetro **innodb_log_file_size** para exportação de campos, pois pode comprometer o desempenho da aplicação.

Quando trabalhamos com um volume elevado de dados e usuários, o banco de dados pode apresentar problemas de baixo desempenho. Um investimento em capacidade física dos servidores é sempre bom, porém há momentos que o *tuning *irá representar ganhos expressivos de performance.

Para mais informações sobre *tunning* e otimização de performance do MySQL consulte a documentação oficial disponível em [MySQL Optimization](http://dev.mysql.com/doc/refman/5.5/en/optimization.html).


<!-- anchors: ConfiguraçãodebancodedadosMySQL-VersõeshomologadasdoMySQL, ConfiguraçãodebancodedadosMySQL-PassoapassoparaconfiguraçãodoMySQL, ConfiguraçãodebancodedadosMySQL-Criaçãodousuárioeconcessãodeprivilégios, highlighter_782558, highlighter_195916, ConfiguraçãodebancodedadosMySQL-Parâmetrodeconexão, Versão, Versão-1, Versão-2, ConfiguraçãodebancodedadosMySQL-Casesensitive, highlighter_265157, ConfiguraçãodebancodedadosMySQL-Engines, 60810833, highlighter_215636, highlighter_198732, ConfiguraçãodebancodedadosMySQL-Memória, highlighter_785828, ConfiguraçãodebancodedadosMySQL-Criaçãodetabelas, highlighter_937086, ConfiguraçãodebancodedadosMySQL-Confirmaralterações, highlighter_908972, highlighter_438849, ConfiguraçãodebancodedadosMySQL-CriaçãodobancodedadoscomcodificaçãoUTF-8, highlighter_377696, highlighter_149038, ConfiguraçãodebancodedadosMySQL-Downloaddodriver, ConfiguraçãodebancodedadosMySQL-OtimizandoaperformancedobancodedadosMySQL -->
