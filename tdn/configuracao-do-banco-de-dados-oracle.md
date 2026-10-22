---
title: "Configuração do banco de dados Oracle"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=257623480"
scraped_at: "2026-03-09T04:10:39.725Z"
depth: 2
anchors: 12
child_links: 62
---

# Configuração do banco de dados Oracle

Fique atento!

Esta página é válida para atualizações **1.6** e **superiores** do TOTVS Fluig.

Caso possua uma atualização anterior acesse: [ARQ - Como configurar o banco de dados Oracle na release 1.5.13 ou anterior?](/pages/viewpage.action?pageId=142811225)

# Versões homologadas do Oracle

---

Para verificar as versões homologadas do Oracle acesse a [Matriz de Portabilidade.](/display/fluig/Matriz+de+Portabilidade)

# Configuração do banco

---

**Pré-requisitos**

- É necessário que o administrador do banco Oracle® (DBA) efetue algumas alterações de segurança no banco de dados Oracle®, fazendo com que o usuário (*schema*) informado na instalação da plataforma não possua permissão de leitura/alteração em outros *schemas* do banco Oracle®, caso existam.

- Deve possuir permissão de leitura/alteração somente no usuário (*schema*) utilizado pela plataforma.

Importante!

Por questões de segurança é altamente recomendável efetuar a encriptação da senha conforme o procedimento informado na documentação [encriptação de senha de banco do dados](https://tdn.totvs.com/x/Oh4WGw).

## Criação do usuário e concessão de privilégios

---

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)

Para a criação de um novo usuário em banco de dados Oracle usamos a instrução CREATE USER, conforme sintaxe abaixo:

[?](#)

| `CREATE` `USER` `userid IDENTIFIED``BY` `password` `[``DEFAULT` `TABLESPACE tablespace] [``TEMPORARY` `TABLESPACE tablespace_temporaria];` |
| --- |

Onde:

 - userid: Nome do usuário que será criado;

 - password: Senha do usuário que será criado;

 - tablespace (opcional): Tablespace padrão onde os objetos do banco de dados serão armazenados. Se essa opção for omitida, o Oracle assume a tablespace SYSTEM padrão;

 - temp_tablespace (opcional): Tablespace padrão onde são armazenados os objetos temporários, como por exemplo tabelas temporárias. Se essa opção for omitida, o Oracle assume um tablespace temporário TEMP.

Após criado o usuário é necessário conceder os privilégios de sistema (conexão e instruções DLL por exemplo) necessários para ele, conforme sintaxe abaixo:

[?](#)

| `GRANT` `CONNECT``,RESOURCE``TO` `userid;``GRANT` `CREATE` `VIEW` `TO` `userid;``GRANT` `CREATE` `TABLE` `TO` `userid;` `ALTER` `USER` `userid QUOTA UNLIMITED``ON` `USERS;` |
| --- |

Onde:

 - userid: Nome do usuário criado anteriormente;

OBS: 

 - O alter user foi necessário na hora de subir o Fluig para criar as tabelas;

Neste momento é necessário executar os procedimentos SQL abaixo com o usuário **userid** no banco de dados a ser usado para a plataforma:

Atenção!

   - É imprescindível conectar no banco de dados com o usuário userid para a execução dos procedimentos acima, a fim de garantir o isolamento e integridade da operação.

   - O servidor Fluig deve estar parado no momento da execução do *script*.

[?](#)

| `DECLARE` `AUX_USERCONNECTED VARCHAR2(30);``BEGIN````SELECT` `USER````INTO` `AUX_USERCONNECTED````FROM` `DUAL;````IF (AUX_USERCONNECTED <>``'SYS'``)``AND` `(AUX_USERCONNECTED <>``'SYSTEM'``)``THEN````EXECUTE` `IMMEDIATE (``'CREATE OR REPLACE VIEW '` `||AUX_USERCONNECTED||``'.ALL_OBJECTS AS'` `||````' SELECT * FROM SYS.ALL_OBJECTS WHERE OWNER IN (SELECT USER FROM DUAL)'``);````EXECUTE` `IMMEDIATE (``'CREATE OR REPLACE VIEW '` `||AUX_USERCONNECTED||``'.ALL_SYNONYMS AS'` `||````' SELECT * FROM SYS.ALL_SYNONYMS WHERE OWNER IN (SELECT USER FROM DUAL)'``);````EXECUTE` `IMMEDIATE (``'CREATE OR REPLACE VIEW '` `||AUX_USERCONNECTED||``'.ALL_SEQUENCES AS'` `||````' SELECT * FROM SYS.ALL_SEQUENCES WHERE SEQUENCE_OWNER IN (SELECT USER FROM DUAL)'``);````EXECUTE` `IMMEDIATE (``'CREATE OR REPLACE VIEW '` `||AUX_USERCONNECTED||``'.ALL_CONSTRAINTS AS'` `||````' SELECT * FROM SYS.ALL_CONSTRAINTS WHERE OWNER IN (SELECT USER FROM DUAL)'``);````EXECUTE` `IMMEDIATE (``'CREATE OR REPLACE VIEW '` `||AUX_USERCONNECTED||``'.ALL_CONS_COLUMNS AS'` `||````' SELECT * FROM SYS.ALL_CONS_COLUMNS WHERE OWNER IN (SELECT USER FROM DUAL)'``);````EXECUTE` `IMMEDIATE (``'CREATE OR REPLACE VIEW '` `||AUX_USERCONNECTED||``'.ALL_INDEXES AS'` `||````' SELECT * FROM SYS.ALL_INDEXES WHERE OWNER IN (SELECT USER FROM DUAL)'``);````EXECUTE` `IMMEDIATE (``'CREATE OR REPLACE VIEW '` `||AUX_USERCONNECTED||``'.ALL_IND_COLUMNS AS'` `||````' SELECT * FROM SYS.ALL_IND_COLUMNS WHERE TABLE_OWNER IN (SELECT USER FROM DUAL)'``);````EXECUTE` `IMMEDIATE (``'CREATE OR REPLACE VIEW '` `||AUX_USERCONNECTED||``'.ALL_TABLES AS'` `||````' SELECT * FROM SYS.ALL_TABLES WHERE OWNER IN (SELECT USER FROM DUAL)'``);````EXECUTE` `IMMEDIATE (``'CREATE OR REPLACE VIEW '` `||AUX_USERCONNECTED||``'.ALL_TAB_COLUMNS AS'` `||````' SELECT * FROM SYS.ALL_TAB_COLUMNS WHERE OWNER IN (SELECT USER FROM DUAL)'``);````END` `IF;``END``;` |
| --- |

O**NLS** (*National Language Support*) é utilizado para definir datas, números, moeda e configurações de idioma. O *NLS_CHARACTERSET* (charset) para a plataforma é **AL32UTF8**.

![](/download/attachments/257623480/oracle.png?version=1&modificationDate=1474479526000&api=v2)

# Datasource - finalidade da tag new-connection-sql

---

Ao instalar a plataforma selecionando o banco de dados Oracle, o instalador inclui a *tag* abaixo no arquivo de configuração, de acordo com a atualização:

- **a partir da atualização 2.0: **no arquivo **standalone.xml** ([diretório_instalação]/appserver/standalone/configuration/standalone.xml);

- **da atualização 1.6 até a 1.8.2**:** **no arquivo **domain.xml** ([diretório_instalação]/appserver/domain/configuration/domain.xml).

[?](#)

| `alter session set nls_comp = 'LINGUISTIC' nls_sort = 'BINARY_CI'` |
| --- |

Onde:

- o parâmetro **nls_comp** especifica o comportamento de agrupamento da sessão do banco de dados. É utilizado como *LINGUISTIC*, onde as comparações irão ignorar maiúsculos e minúsculos, inclusive quando utilizamos*LIKE*, pois a busca passa a ser alfabética e não mais a padrão binária;

- o parâmetro **nls_sort** especifica a sequência de agrupamento para consultas *ORDER BY*. É usado como BINARY_CI, ou seja, valor *BINARY*. Significa que a ordenação dos caracteres seguirão de acordo com a ordem em que os caracteres aparecem no *Character Set* em uso e o CI é para ignorar maiúsculas e minúsculas.


<!-- anchors: ConfiguraçãodobancodedadosOracle-VersõeshomologadasdoOracle, ConfiguraçãodobancodedadosOracle-Configuraçãodobanco, ConfiguraçãodobancodedadosOracle-Criaçãodousuárioeconcessãodeprivilégios, oracle, oracle-872616687, highlighter_172936, oracle-872616688, highlighter_557209, oracle-872616689, highlighter_156625, ConfiguraçãodobancodedadosOracle-Datasource-finalidadedatagnew-connection-sql, highlighter_903043 -->
