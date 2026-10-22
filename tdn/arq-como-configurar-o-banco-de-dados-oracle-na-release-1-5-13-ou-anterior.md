---
title: "ARQ - Como configurar o banco de dados Oracle na release 1.5.13 ou anterior?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=142811225"
scraped_at: "2026-03-09T04:44:10.806Z"
depth: 3
anchors: 9
child_links: 45
---

# ARQ - Como configurar o banco de dados Oracle na release 1.5.13 ou anterior?

Atenção

Página destinada a atualizações 1.5.13 e anteriores.

Acesse a página original a partir da atualização 1.6: [Configuração do banco de dados Oracle](https://tdn.totvs.com/pages/viewpage.action?pageId=257623480).

## Versões homologadas do Oracle

Para verificar as versões homologadas do Oracle acesse a [Matriz de Portabilidade.](/display/fluig/Matriz+de+Portabilidade)

## Configuração do banco

É necessário que o administrador do banco Oracle® (DBA) efetue algumas alterações de segurança no banco de dados Oracle®, fazendo com que o usuário (schema) informado na instalação do TOTVS Fluig Plataforma não possua permissão de leitura/alteração em outros schemas do banco Oracle®, caso existam.
Deve possuir permissão de leitura/alteração somente no usuário (*schema*) utilizado pela plataforma.

## Criação do usuário e concessão de privilégios

Para a criação de um novo usuário em banco de dados Oracle usamos a instrução CREATE USER, conforme sintaxe abaixo:

[?](#)

| `CREATE` `USER` `userid IDENTIFIED``BY` `password` `[``DEFAULT` `TABLESPACE tablespace] [``TEMPORARY` `TABLESPACE tablespace_temporaria];` |
| --- |

Onde:

- **userid:** Nome do usuário que será criado;
- **password:** Senha do usuário que será criado;
- **tablespace (opcional):** Tablespace padrão onde os objetos do banco de dados serão armazenados. Se essa opção for omitida, o Oracle assume a tablespace SYSTEM padrão;
- **temp_tablespace (opcional):** Tablespace padrão onde são armazenados os objetos temporários, como por exemplo tabelas temporárias. Se essa opção for omitida, o Oracle assume um tablaspace temporário TEMP.

Após criado o usuário é necessário conceder os privilégios de sistema (conexão e instruções DLL por exemplo) necessários para ele, conforme sintaxe abaixo:

[?](#)

| `GRANT` `CONNECT``,RESOURCE``TO` `userid;``GRANT` `CREATE` `VIEW` `TO` `userid;``GRANT` `CREATE` `TABLE` `TO` `userid;` |
| --- |

Onde:

- **userid:** Nome do usuário criado anteriormente;

Neste momento é necessário executar os procedimentos SQL abaixo com o usuário **userid** no banco de dados a ser usado para a plataforma:

Atenção!

- É imprescindível conectar no banco de dados com o usuário **userid** para a execução dos procedimentos abaixo, a fim de garantir o isolamento e integridade da operação.
- O servidor deve estar parado no momento da execução do script.

[?](#)

| `DECLARE` `AUX_USERCONNECTED VARCHAR2(30);``BEGIN````SELECT` `USER````INTO` `AUX_USERCONNECTED````FROM` `DUAL;````IF (AUX_USERCONNECTED <>``'SYS'``)``AND` `(AUX_USERCONNECTED <>``'SYSTEM'``)``THEN````EXECUTE` `IMMEDIATE (``'CREATE OR REPLACE VIEW '` `||AUX_USERCONNECTED||``'.ALL_OBJECTS AS'` `||````' SELECT * FROM SYS.ALL_OBJECTS WHERE OWNER IN (SELECT USER FROM DUAL)'``);````EXECUTE` `IMMEDIATE (``'CREATE OR REPLACE VIEW '` `||AUX_USERCONNECTED||``'.ALL_SYNONYMS AS'` `||````' SELECT * FROM SYS.ALL_SYNONYMS WHERE OWNER IN (SELECT USER FROM DUAL)'``);````EXECUTE` `IMMEDIATE (``'CREATE OR REPLACE VIEW '` `||AUX_USERCONNECTED||``'.ALL_SEQUENCES AS'` `||````' SELECT * FROM SYS.ALL_SEQUENCES WHERE SEQUENCE_OWNER IN (SELECT USER FROM DUAL)'``);````EXECUTE` `IMMEDIATE (``'CREATE OR REPLACE VIEW '` `||AUX_USERCONNECTED||``'.ALL_CONSTRAINTS AS'` `||````' SELECT * FROM SYS.ALL_CONSTRAINTS WHERE OWNER IN (SELECT USER FROM DUAL)'``);````EXECUTE` `IMMEDIATE (``'CREATE OR REPLACE VIEW '` `||AUX_USERCONNECTED||``'.ALL_CONS_COLUMNS AS'` `||````' SELECT * FROM SYS.ALL_CONS_COLUMNS WHERE OWNER IN (SELECT USER FROM DUAL)'``);````EXECUTE` `IMMEDIATE (``'CREATE OR REPLACE VIEW '` `||AUX_USERCONNECTED||``'.ALL_INDEXES AS'` `||````' SELECT * FROM SYS.ALL_INDEXES WHERE OWNER IN (SELECT USER FROM DUAL)'``);````EXECUTE` `IMMEDIATE (``'CREATE OR REPLACE VIEW '` `||AUX_USERCONNECTED||``'.ALL_IND_COLUMNS AS'` `||````' SELECT * FROM SYS.ALL_IND_COLUMNS WHERE TABLE_OWNER IN (SELECT USER FROM DUAL)'``);````EXECUTE` `IMMEDIATE (``'CREATE OR REPLACE VIEW '` `||AUX_USERCONNECTED||``'.ALL_TABLES AS'` `||````' SELECT * FROM SYS.ALL_TABLES WHERE OWNER IN (SELECT USER FROM DUAL)'``);````EXECUTE` `IMMEDIATE (``'CREATE OR REPLACE VIEW '` `||AUX_USERCONNECTED||``'.ALL_TAB_COLUMNS AS'` `||````' SELECT * FROM SYS.ALL_TAB_COLUMNS WHERE OWNER IN (SELECT USER FROM DUAL)'``);````END` `IF;``END``;` |
| --- |

**Oracle 12c**

Caso seja utilizado Oracle 12c ou superior é necessário alterar o arquivo **<INSTALL_FLUIG>\jboss\bin\standalone.conf.bat**(standalone.conf em ambientes Linux) e incluir a seguinte linha:

[?](#)

| `set` `"JAVA_OPTS=%JAVA_OPTS% -Dhibernate.dialect=org.hibernate.dialect.Oracle10gDialect"` |
| --- |

Observação

**NLS** (National Language Support) é utilizado para definir datas, números, moeda e configurações de idioma.

O *NLS_CHARACTERSET* para a plataforma é **AL32UTF8**.

![](/download/attachments/142811225/oracle.png?version=1&modificationDate=1427305107000&api=v2)

# Datasource - Finalidade da Tag new-connection-sql

No arquivo de configuração **standalone.xml** ([Instalação fluig]/jboss/standalone/configuration) da plataforma é incluído pela wizard de instalação, quando selecionado o banco de dados Oracle, a tag abaixo, tendo a seguinte finalidade:

**standalone.xml**

[?](#)

| `alter session set nls_comp = 'LINGUISTIC' nls_sort = 'BINARY_CI'` |
| --- |

- O parâmetro **nls_comp** especifica o comportamento de agrupamento da sessão do banco de dados. É utilizado como *LINGUISTIC*, aonde as comparações irão ignorar maiúsculos e minúsculos inclusive quando utilizamos *LIKE*, pois a busca passa a ser alfabética, e não a padrão binária.
- O parâmetro **nls_sort** especifica a sequência de agrupamento para consultas *ORDER BY*. É usado como *BINARY_CI*, ou seja valor *BINARY.* Significa que a ordenação dos caracteres seguirão de acordo com a ordem em que os caracteres aparecem no *Character Set* em uso, e o CI é para ignorar maiúsculas e minusculas.


<!-- anchors: ARQComoconfigurarobancodedadosOraclenarelease1.5.13ouanterior?-VersõeshomologadasdoOracle, ARQComoconfigurarobancodedadosOraclenarelease1.5.13ouanterior?-Configuraçãodobanco, ARQComoconfigurarobancodedadosOraclenarelease1.5.13ouanterior?-Criaçãodousuárioeconcessãodeprivilégios, highlighter_552649, highlighter_430286, highlighter_19950, highlighter_632263, ARQComoconfigurarobancodedadosOraclenarelease1.5.13ouanterior?-Datasource-FinalidadedaTagnew-connection-sql, highlighter_80203 -->
