---
title: "Configuração do banco de dados SQL Server"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=257623499"
scraped_at: "2026-03-09T04:10:44.217Z"
depth: 2
anchors: 19
child_links: 66
---

# Configuração do banco de dados SQL Server

Fique atento!

Esta página é válida para atualizações **1.6** e **superiores** do TOTVS Fluig.

Caso possua uma atualização anterior acesse: [ARQ - Como configurar o banco de dados SQL Server na release 1.5.13 ou anterior?](/pages/viewpage.action?pageId=73078837)

# Versões homologadas do SQL Server

---

Para verificar as versões homologadas do Microsoft SQL Server, acesse a [Matriz de Portabilidade](https://tdn.totvs.com/display/fluig/Matriz+de+Portabilidade).

# Criação do banco de dados com codificação Latin1_General_CI_AS

---

Importante!

Por questões de segurança, é altamente recomendável efetuar a encriptação da senha conforme o procedimento descrito em [encriptação de senha do banco de dados](https://tdn.totvs.com/x/Oh4WGw).

A plataforma necessita de uma base de dados com *charset* **Latin1_General_CI_AS**. Só serão aceitos caracteres com codificação Latin1_General_CI_AS, pois caracteres não pertencentes a esta codificação não são homologados para a plataforma, estando sujeito a inconsistências de banco de dados. Na versão 2012 e inferiores do SQL server, a codificação é regionalizada, podendo causar inconsistências quando utilizado, por exemplo, a UTF8.

Para criar o banco com esta característica, autentique-se no SQL Server com o usuário que será utilizado pela plataforma e execute o seguinte comando SQL, onde "nome_do_banco" é o nome do banco a ser criado.

[?](#)

| `CREATE` `DATABASE` `nome_do_banco``COLLATE` `Latin1_General_CI_AS;` |
| --- |

Outra alternativa para a criação do banco de dados é utilizar o **Microsoft SQL Server Management Studio, **seguindo o seguintes passos:

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)

 - Conecte na instância do SQL Server por meio do **Microsoft SQL Server Management Studio.**

 - Clique com o botão direito do*mouse* na pasta **Bancos de Dados** e selecione a opção **Novo Banco de Dados...**

![](/download/attachments/257623499/1.png?version=1&modificationDate=1474479654000&api=v2)

 - Ao abrir a tela do assistente, selecione a opção **Geral**em **Selecionar uma página.**Em seguida, informe o nome desejado para o banco de dados no campo **Nome do banco de dados**e selecione o usuário que será utilizado pela plataforma no campo **Proprietário.**

![](/download/attachments/257623499/2.png?version=1&modificationDate=1474479654000&api=v2)

 - Seguindo, selecione a opção **Opções**em **Selecionar uma página.**Em seguida, selecione o valor **Latin1_General_CI_AS**no campo **Agrupamento**.

![](/download/attachments/257623499/Image%208.jpg?version=1&modificationDate=1506715866000&api=v2)

 - Para finalizar, encontre a opção **O Instantâneo de Leitura Confirmada Está Ativo** (*Is Read Committed Snapshot On* em inglês) e altere seu valor para **True.**Clique no botão **OK** para finalizar a criação do banco de dados.

![](/download/attachments/257623499/Image%206.jpg?version=1&modificationDate=1506715182000&api=v2)

# Configuração do banco

---

Após a criação do banco de dados é necessário realizar as verificações a seguir.

## Proprietário do banco

---

O usuário utilizado pela plataforma para conexão com o banco de dados deve ser **proprietário (db_owner)** do banco utilizado pela plataforma. Para verificar qual usuário é o proprietário do banco, execute o seguinte comando SQL:

[?](#)

| ```SELECT` `suser_sname(owner_sid)``FROM` `sys.databases``WHERE` `name` `=``'nome_do_banco'``;` |
| --- |

Onde **nome_do_banco** é o nome do banco para consulta do proprietário.

Caso o proprietário do banco não seja o usuário utilizado pela plataforma para conexão com o banco de dados, execute o seguinte comando T-SQL para definir este usuário como **proprietário (db_owner):**

[?](#)

| ```USE nome_do_banco``EXEC` `sp_changedbowner``'nome_usuario'``;` |
| --- |

Onde **nome_do_banco** é o nome do banco e **nome_usuario **o usuário que se tornará proprietário do banco de dados.

## Parâmetros de conexão

---

Veja a seguir alguns parâmetros que podem ser utilizados na URL de conexão.

### Parâmetro para evitar lentidão

---

Para evitar lentidão em algumas consultas da plataforma, é necessário adicionar um parâmetro de conexão no arquivo de configurações.

Para isso:

**01.** Acesse o arquivo de configurações da plataforma de acordo com a atualização utilizada no seu ambiente:

- **a partir da atualização 2.0:** acesse o arquivo **standalone.xml** ([diretório_instalação]/appserver/standalone/configuration/standalone.xml);

- **da atualização 1.6 até a 1.8.2**: acesse o arquivo **domain.xml** ([diretório_instalação]/appserver/domain/configuration/domain.xml).

**02.** Localize as *tags* **<connection-url>**.

**03.** Adicione o parâmetro **;sendStringParametersAsUnicode=false**em todas as *tags* **<connection-url>**.

Atenção!

Nas atualizações mais recentes, esse parâmetro já é adicionado automaticamente na URL de conexão ao instalar a plataforma com o SQL Server. Por isso, verifique se o parâmetro já está configurado antes de adicioná-lo.

### Conexão criptografada por padrão

---

Por questões de segurança, a partir da atualização **Voyager (2.0)**, a comunicação com o banco de dados SQL Server passa a ser criptografada por padrão.

Mas, não se preocupe, se a configuração de criptografia não foi alterada em nenhum momento, o parâmetro **trustServerCertificate** será adicionado automaticamente com o valor **true** na URL de conexão ao atualizar a plataforma.

Caso você tenha configurado manualmente o parâmetro **encrypt** ou o ***trustServerCertificate***, a atualização não modificará a URL de conexão e a configuração já existente será mantida.

## Alteração do nível de isolamento

---

Para verificar se a opção de isolamento READ_COMMITTED_SNAPSHOT está habilitado para o banco de dados, execute o seguinte comando SQL:

[?](#)

| ```SELECT` `is_read_committed_snapshot_on``FROM` `sys.databases``WHERE` `name``=``'nome_do_banco'``;` |
| --- |

Onde **nome_do_banco** é o nome do banco para consulta do proprietário.

Caso o retorno da consulta anterior seja o valor **0**, é necessário executar o seguinte comando SQL:

[?](#)

| `ALTER` `DATABASE` `nome_do_banco``SET` `READ_COMMITTED_SNAPSHOT``ON``;` |
| --- |

Onde **nome_do_banco** é o nome do banco de dados a ser utilizado para a plataforma.

Importante!

Esta operação de alteração do nível de isolamento padrão do SQL Server é realizada automaticamente pela plataforma. Porém, é importante atentar-se para o seguinte fator: na criação do banco de dados, é executada uma ação de alteração na base. É normal visualizar no *log* algumas mensagens de erro, tratando-se de um processo padrão para atualização. A situação será normalizada após o término da operação.

Assim que o servidor Fluig estiver no ar, recomendamos que ele seja reinicializado.

## Configuração da porta TCP 1433

---

Para liberação do protocolo TCP/IP e conexão do banco com o Fluig através da porta 1433, basta seguir os seguintes passos:

- Executar o **SQL Server Configuration Manager**, no caminho SQL Server Network Configuration > Protocols for <instância> > TCP/IP.
- Certificar-se de que o protocolo TCP/IP esteja ativo e habilitado.Na sessão **IPAll** verifique se não há nenhuma porta dinâmica configurada diferente da 1433 e configure apenas a porta estática padrão **1433 em TCP Port**.
- **TCP Dynamic Ports precisa estar vazio**, caso esteja 0, será criada uma nova porta dinâmica na próxima inicialização do serviço.
- Após salvar as configurações, será necessário reiniciar o serviço do banco de dados para aplicar as alterações.
- Para validar se a porta correta está sendo escutada no servidor, pode-se executar um **netstat -an** no cmd.

![](/download/attachments/257623499/TCP1433.png?version=1&modificationDate=1666880394893&api=v2)


<!-- anchors: ConfiguraçãodobancodedadosSQLServer-VersõeshomologadasdoSQLServer, ConfiguraçãodobancodedadosSQLServer-CriaçãodobancodedadoscomcodificaçãoLatin1_General_CI_AS, highlighter_468862, create-db-studio, create-db-studio-1, create-db-studio-2, create-db-studio-3, create-db-studio-4, ConfiguraçãodobancodedadosSQLServer-Configuraçãodobanco, ConfiguraçãodobancodedadosSQLServer-Proprietáriodobanco, highlighter_640915, highlighter_974890, ConfiguraçãodobancodedadosSQLServer-Parâmetrosdeconexão, ConfiguraçãodobancodedadosSQLServer-Parâmetroparaevitarlentidão, ConfiguraçãodobancodedadosSQLServer-Conexãocriptografadaporpadrão, ConfiguraçãodobancodedadosSQLServer-Alteraçãodoníveldeisolamento, highlighter_986878, highlighter_156459, ConfiguraçãodobancodedadosSQLServer-ConfiguraçãodaportaTCP1433 -->
