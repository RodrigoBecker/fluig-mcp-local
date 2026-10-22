---
title: "Modelos de Armazenamento de Formulários"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=244716710"
scraped_at: "2026-03-09T03:59:15.839Z"
depth: 2
anchors: 11
child_links: 57
---

# Modelos de Armazenamento de Formulários

# Índice

# Objetivo

---

O objetivo deste documento é descrever e diferenciar os tipos de armazenamento de dados de formulários na base do fluig.

## Definição do Modelo de Armazenamento

---

O modelo de armazenamento é definido pelo desenvolvedor durante a [exportação do formulário](/pages/viewpage.action?pageId=239018344) através do [fluig Studio](/pages/viewpage.action?pageId=73078179). Esta opção só é exibida ao exportar um novo formulário para o servidor.

Na imagem abaixo são exibidos os dois modelos disponíveis:

- "Numa única tabela (para pequenas quantidades de registros)", também chamado de modelo "Registros de formulário (Tabela única)".

- "Tabelas de Banco de Dados (recomendado)", também chamado de "Meta Lista (Tabelas múltiplas)".

![](/download/attachments/244716710/Screenshot%2005_08%20002.png?version=1&modificationDate=1470419513000&api=v2)

## Tabelas de Banco de Dados (recomendado)

---

Um formulário configurado para armazenar seus dados em tabelas múltiplas, quando exportado criará uma nova tabela no banco de dados cujo nome seguirá o padrão MLEEELLL, onde EEE representa o código da empresa precedido por zeros e LLL representa o código da lista (gerado de forma sequencial pela plataforma) também precedido por zeros.

Exemplo

Se o código da empresa for "1" e já foram criados 20 formulários previamente, o próximo formulário criado (de nº 21) irá gerar a tabela ML001021.

Os registros destes formulários também serão separados em Meta Listas filhas, que seguirão o mesmo padrão de criação e serão relacionadas através da tabela META_LISTA_REL.

O modelo de tabelas múltiplas, por segmentar os dados dos formulários e tornar mais eficiente a consulta a estes registros, é o **modelo recomendado** e também o padrão para a exportação de novos formulários para o servidor fluig.

### Nomes dos campos

---

Quando em armazenado em tabelas de banco dados, cada campo do formulário vira uma coluna com o mesmo nome.

Isso gera duas limitações quanto ao nome dos campos:

- O tamanho do nome, que é limitado à 30 caracteres;
- Os bancos de dados possuem palavras reservadas, que não podem ser usadas como nome da colunas. Abaixo é apresentada uma lista de termos reservados (além de alguns campos que são usados internamente para o vínculo ao registro do formulário):

 Click here to expand...

"ABSOLUTE", "ACCESS", "ACCESSIBLE", "ACCOUNT", "ACTION", "ACTIVATE", "ADD",
 "ADMIN", "ADVISE", "AFTER", "AGGREGATE", "ALIAS", "ALL", "ALLOCATE", "ALL_ROWS", "ALTER", "ANALYZE", "AND",
 "ANY", "ARCHIVE", "ARCHIVELOG", "ARE", "ARRAY", "AS", "ASC", "ASENSITIVE", "ASSERTION", "AT", "AUDIT",
 "AUTHENTICATED", "AUTHORIZATION", "AUTOEXTEND", "AUTOMATIC", "BACKUP", "BECOME", "BEFORE", "BEGIN",
 "BETWEEN", "BFILE", "BIGINT", "BINARY", "BIT", "BITMAP", "BLOB", "BLOCK", "BODY", "BOOLEAN", "BOTH",
 "BREADTH", "BREAK", "BROWSE", "BULK", "BY", "CACHE", "CACHE_INSTANCES", "CALL", "CANCEL", "CASCADE",
 "CASCADED", "CASE", "CAST", "CATALOG", "CFILE", "CHAINED", "CHANGE", "CHAR", "CHARACTER", "CHAR_CS",
 "CHECK", "CHECKPOINT", "CHOOSE", "CHUNK", "CLASS", "CLEAR", "CLOB", "CLOSE", "CLOSE_CACHED_OPEN_CURSORS",
 "CLUSTER", "CLUSTERED", "COALESCE", "COLLATE", "COLLATION", "COLUMN", "COLUMNS", "COMMENT", "COMMIT",
 "COMMITTED", "COMPATIBILITY", "COMPILE", "COMPLETE", "COMPLETION", "COMPOSITE_LIMIT", "COMPRESS",
 "COMPUTE", "CONDITION", "CONNECT", "CONNECTION", "CONNECT_TIME", "CONSTRAINT", "CONSTRAINTS",
 "CONSTRUCTOR", "CONTAINS", "CONTAINSTABLE", "CONTENTS", "CONTINUE", "CONTROLFILE", "CONVERT",
 "CORRESPONDING", "COST", "CPU_PER_CALL", "CPU_PER_SESSION", "CREATE", "CROSS", "CUBE", "CURRENT",
 "CURRENT_DATE", "CURRENT_PATH", "CURRENT_ROLE", "CURRENT_SCHEMA", "CURRENT_TIME", "CURRENT_TIMESTAMP",
 "CURRENT_USER", "CURSOR", "CYCLE", "DANGLING", "DATA", "DATABASE", "DATABASES", "DATAFILE", "DATAFILES",
 "DATAOBJNO", "DATE", "DAY", "DAY_HOUR", "DAY_MICROSECOND", "DAY_MINUTE", "DAY_SECOND", "DBA", "DBCC",
 "DBHIGH", "DBLOW", "DBMAC", "DEALLOCATE", "DEBUG", "DEC", "DECIMAL", "DECLARE", "DEFAULT", "DEFERRABLE",
 "DEFERRED", "DEGREE", "DELAYED", "DELETE", "DENY", "DEPTH", "DEREF", "DESC", "DESCRIBE", "DESCRIPTOR",
 "DESTROY", "DESTRUCTOR", "DETERMINISTIC", "DIAGNOSTICS", "DICTIONARY", "DIRECTORY", "DISABLE",
 "DISCONNECT", "DISK", "DISMOUNT", "DISTINCT", "DISTINCTROW", "DISTRIBUTED", "DIV", "DML", "DOMAIN",
 "DOUBLE", "DROP", "DUAL", "DUMMY", "DUMP", "DYNAMIC", "EACH", "ELSE", "ELSEIF", "ENABLE", "ENCLOSED",
 "END", "END-EXEC", "ENFORCE", "ENTRY", "EQUALS", "ERRLVL", "ESCAPE", "ESCAPED", "EVERY", "EXCEPT",
 "EXCEPTION", "EXCEPTIONS", "EXCHANGE", "EXCLUDING", "EXCLUSIVE", "EXEC", "EXECUTE", "EXISTS", "EXIT",
 "EXPIRE", "EXPLAIN", "EXTENT", "EXTENTS", "EXTERNAL", "EXTERNALLY", "FAILED_LOGIN_ATTEMPTS", "FALSE",
 "FAST", "FETCH", "FILE", "FILLFACTOR", "FIRST", "FIRST_ROWS", "FLAGGER", "FLOAT", "FLOAT4", "FLOAT8",
 "FLOB", "FLUSH", "FOR", "FORCE", "FOREIGN", "FOUND", "FREE", "FREELIST", "FREELISTS", "FREETEXT",
 "FREETEXTTABLE", "FROM", "FULL", "FULLTEXT", "FUNCTION", "GENERAL", "GET", "GLOBAL", "GLOBALLY",
 "GLOBAL_NAME", "GO", "GOTO", "GRANT", "GROUP", "GROUPING", "GROUPS", "HASH", "HASHKEYS", "HAVING",
 "HEADER", "HEAP", "HIGH_PRIORITY", "HOLDLOCK", "HOST", "HOUR", "HOUR_MICROSECOND", "HOUR_MINUTE",
 "HOUR_SECOND", "ID", "IDENTIFIED", "IDENTITY", "IDENTITYCOL", "IDENTITY_INSERT", "IDGENERATORS",
 "IDLE_TIME", "IF", "IGNORE", "IGNORE_SERVER_IDS", "IMMEDIATE", "IN", "INCLUDING", "INCREMENT", "INDEX",
 "INDEXED", "INDEXES", "INDICATOR", "IND_PARTITION", "INFILE", "INITIAL", "INITIALIZE", "INITIALLY",
 "INITRANS", "INNER", "INOUT", "INPUT", "INSENSITIVE", "INSERT", "INSTANCE", "INSTANCES", "INSTEAD", "INT",
 "INT1", "INT2", "INT3", "INT4", "INT8", "INTEGER", "INTERMEDIATE", "INTERSECT", "INTERVAL", "INTO", "IS",
 "ISOLATION", "ISOLATION_LEVEL", "ITERATE", "JOIN", "KEEP", "KEY", "KEYS", "KILL", "LABEL", "LANGUAGE",
 "LARGE", "LAST", "LATERAL", "LAYER", "LEADING", "LEAVE", "LEFT", "LESS", "LEVEL", "LIBRARY", "LIKE",
 "LIMIT", "LINEAR", "LINENO", "LINES", "LINK", "LIST", "LOAD", "LOB", "LOCAL", "LOCALTIME",
 "LOCALTIMESTAMP", "LOCATOR", "LOCK", "LOCKED", "LOG", "LOGFILE", "LOGGING", "LOGICAL_READS_PER_CALL",
 "LOGICAL_READS_PER_SESSION", "LONG", "LONGBLOB", "LONGTEXT", "LOOP", "LOW_PRIORITY", "MANAGE", "MAP",
 "MASTER", "MASTER_HEARTBEAT_PERIOD", "MASTER_SSL_VERIFY_SERVER_CERT", "MATCH", "MAX", "MAXARCHLOGS",
 "MAXDATAFILES", "MAXEXTENTS", "MAXINSTANCES", "MAXLOGFILES", "MAXLOGHISTORY", "MAXLOGMEMBERS", "MAXSIZE",
 "MAXTRANS", "MAXVALUE", "MEDIUMBLOB", "MEDIUMINT", "MEDIUMTEXT", "MEMBER", "MIDDLEINT", "MIN",
 "MINEXTENTS", "MINIMUM", "MINUS", "MINUTE", "MINUTE_MICROSECOND", "MINUTE_SECOND", "MINVALUE", "MLSLABEL",
 "MLS_LABEL_FORMAT", "MOD", "MODE", "MODIFIES", "MODIFY", "MODULE", "MONTH", "MOUNT", "MOVE",
 "MTS_DISPATCHERS", "MULTISET", "NAMES", "NATIONAL", "NATURAL", "NCHAR", "NCHAR_CS", "NCLOB", "NEEDED",
 "NESTED", "NETWORK", "NEW", "NEXT", "NO", "NOARCHIVELOG", "NOAUDIT", "NOCACHE", "NOCHECK", "NOCOMPRESS",
 "NOCYCLE", "NOFORCE", "NOLOGGING", "NOMAXVALUE", "NOMINVALUE", "NONCLUSTERED", "NONE", "NOORDER",
 "NOOVERRIDE", "NOPARALLEL", "NOREVERSE", "NORMAL", "NOSORT", "NOT", "NOTHING", "NOWAIT",
 "NO_WRITE_TO_BINLOG", "NULL", "NULLIF", "NUMBER", "NUMERIC", "NVARCHAR2", "OBJECT", "OBJNO", "OBJNO_REUSE",
 "OF", "OFF", "OFFLINE", "OFFSETS", "OID", "OIDINDEX", "OLD", "ON", "ONLINE", "ONLY", "OPCODE", "OPEN",
 "OPENDATASOURCE", "OPENQUERY", "OPENROWSET", "OPENXML", "OPERATION", "OPTIMAL", "OPTIMIZE",
 "OPTIMIZER_GOAL", "OPTION", "OPTIONALLY", "OR", "ORDER", "ORDINALITY", "ORGANIZATION", "OSLABEL", "OUT",
 "OUTER", "OUTFILE", "OUTPUT", "OVER", "OVERFLOW", "OWN", "PACKAGE", "PAD", "PARALLEL", "PARAMETER",
 "PARAMETERS", "PARTIAL", "PARTITION", "PASSWORD", "PASSWORD_GRACE_TIME", "PASSWORD_LIFE_TIME",
 "PASSWORD_LOCK_TIME", "PASSWORD_REUSE_MAX", "PASSWORD_REUSE_TIME", "PASSWORD_VERIFY_FUNCTION", "PATH",
 "PCTFREE", "PCTINCREASE", "PCTTHRESHOLD", "PCTUSED", "PCTVERSION", "PERCENT", "PERMANENT", "PLAN",
 "PLSQL_DEBUG", "POSTFIX", "POST_TRANSACTION", "PRECISION", "PREFIX", "PREORDER", "PREPARE", "PRESERVE",
 "PRIMARY", "PRINT", "PRIOR", "PRIVATE", "PRIVATE_SGA", "PRIVILEGE", "PRIVILEGES", "PROC", "PROCEDURE",
 "PROFILE", "PUBLIC", "PURGE", "QUEUE", "QUOTA", "RAISERROR", "RANGE", "RAW", "RBA", "READ", "READS",
 "READTEXT", "READUP", "READ_WRITE", "REAL", "REBUILD", "RECONFIGURE", "RECOVER", "RECOVERABLE", "RECOVERY",
 "RECURSIVE", "REF", "REFERENCES", "REFERENCING", "REFRESH", "REGEXP", "RELATIVE", "RELEASE", "RENAME",
 "REPEAT", "REPLACE", "REPLICATION", "REQUIRE", "RESET", "RESETLOGS", "RESIGNAL", "RESIZE", "RESOURCE",
 "RESTORE", "RESTRICT", "RESTRICTED", "RESULT", "RETURN", "RETURNING", "RETURNS", "REUSE", "REVERSE",
 "REVOKE", "RIGHT", "RLIKE", "ROLE", "ROLES", "ROLLBACK", "ROLLUP", "ROUTINE", "ROW", "ROWCOUNT",
 "ROWGUIDCOL", "ROWID", "ROWNUM", "ROWS", "RULE", "SAMPLE", "SAVE", "SAVEPOINT", "SB4", "SCAN_INSTANCES",
 "SCHEMA", "SCHEMAS", "SCN", "SCOPE", "SCROLL", "SD_ALL", "SD_INHIBIT", "SD_SHOW", "SEARCH", "SECOND",
 "SECOND_MICROSECOND", "SECTION", "SEGMENT", "SEG_BLOCK", "SEG_FILE", "SELECT", "SENSITIVE", "SEPARATOR",
 "SEQUENCE", "SERIALIZABLE", "SESSION", "SESSIONS_PER_USER", "SESSION_CACHED_CURSORS", "SESSION_USER",
 "SET", "SETS", "SETUSER", "SHARE", "SHARED", "SHARED_POOL", "SHOW", "SHRINK", "SHUTDOWN", "SIGNAL", "SIZE",
 "SKIP", "SKIP_UNUSABLE_INDEXES", "SLOW", "SMALLINT", "SNAPSHOT", "SOME", "SORT", "SPACE", "SPATIAL",
 "SPECIFIC", "SPECIFICATION", "SPECIFICTYPE", "SPLIT", "SQL", "SQLEXCEPTION", "SQLSTATE", "SQLWARNING",
 "SQL_BIG_RESULT", "SQL_CALC_FOUND_ROWS", "SQL_SMALL_RESULT", "SQL_TRACE", "SSL", "STANDBY", "START",
 "STARTING", "STATE", "STATEMENT", "STATEMENT_ID", "STATIC", "STATISTICS", "STOP", "STORAGE", "STORE",
 "STRAIGHT_JOIN", "STRUCTURE", "SUCCESSFUL", "SWITCH", "SYNONYM", "SYSDATE", "SYSDBA", "SYSOPER", "SYSTEM",
 "SYSTEM_USER", "SYS_OP_ENFORCE_NOT_NULL$", "SYS_OP_NTCIMG$", "TABLE", "TABLES", "TABLESPACE",
 "TABLESPACE_NO", "TABNO", "TEMPORARY", "TERMINATE", "TERMINATED", "TEXTSIZE", "THAN", "THE", "THEN",
 "THREAD", "TIME", "TIMESTAMP", "TIMEZONE_HOUR", "TIMEZONE_MINUTE", "TINYBLOB", "TINYINT", "TINYTEXT", "TO",
 "TOP", "TOPLEVEL", "TRACE", "TRACING", "TRAILING", "TRAN", "TRANSACTION", "TRANSITIONAL", "TRANSLATION",
 "TREAT", "TRIGGER", "TRIGGERS", "TRUE", "TRUNCATE", "TSEQUAL", "TX", "TYPE", "UB2", "UBA", "UID",
 "UNARCHIVED", "UNDER", "UNDO", "UNION", "UNIQUE", "UNKNOWN", "UNLIMITED", "UNLOCK", "UNNEST",
 "UNRECOVERABLE", "UNSIGNED", "UNTIL", "UNUSABLE", "UNUSED", "UPDATABLE", "UPDATE", "UPDATETEXT", "USAGE",
 "USE", "USER", "USING", "UTC_DATE", "UTC_TIME", "UTC_TIMESTAMP", "VALIDATE", "VALIDATION", "VALUE",
 "VALUES", "VARBINARY", "VARCHAR", "VARCHAR2", "VARCHARACTER", "VARIABLE", "VARYING", "VIEW", "WAITFOR",
 "WHEN", "WHENEVER", "WHERE", "WHILE", "WITH", "WITHOUT", "WORK", "WRITE", "WRITEDOWN", "WRITETEXT",
 "WRITEUP", "XID", "XOR", "YEAR", "YEAR_MONTH", "ZEROFILL", "ZONE"

### Tipos de campos e imutabilidade

---

Independente da quantidade de versões de um formulário, sempre é utilizada a mesma tabela. Assim, em um formulário com 50 versões, terão registros de formulários, possivelmente, das 50 versões do formulário.

Por esta razão, uma vez criado um campo este campo não é mais modificado nem removido.

Então, mesmo com valores pequenos como um checkbox, radio ou select, são criados como um campo texto armazenamento grande, porque, por mais que nesta versão eles são apenas um select, nada impede que no futuro ele se torne um text area.

Sendo assim, todos os campos do formulário fluig possuem um limite de 4000 caracteres.

### Quantidade de campos por formulário

---

Como já falado, cada campo do formulário vira uma coluna. Isso acaba esbarrando em duas outras limitações: Quantidade de campos por linha e tamanho da linha. A primeira, que seria de 1000 campos, acaba não sendo atingido pela segunda limitação: Tamanho da linha. Esse limite é em torno de 400 campos dependendo do banco de dados e versão. Por mais que o seu formulário não tenha essa quantidade no momento, pode ser que em outras versões houvessem outros campos que estão ocupando espaço na tabela e impedindo a criação de novos campos

## Numa única tabela (para pequenas quantidades de registros)

---

Um formulário configurado para armazenar seus dados em tabela única terá as informações de cada registro gravadas na tabela FICHA do banco de dados. Por acumular muitos registros rapidamente, dependendo do fluxo de uso dos formulários e das solicitações que os utilizam, esse modelo é pouco eficiente e **não é recomendado** para a construção de formulários atualmente, sendo mantido seu suporte para situações específicas e para manter formulários importados de versões anteriores. Quando se utiliza formulários pai x filho, também não é recomendado a configuração para utilização de tabela única, pois o filtro de registros *(query constrains)* não trará como resultado os registros do formulário filho.


<!-- anchors: ModelosdeArmazenamentodeFormulários-Índice, ModelosdeArmazenamentodeFormulários-Objetivo, ModelosdeArmazenamentodeFormulários-DefiniçãodoModelodeArmazenamento, ModelosdeArmazenamentodeFormulários-TabelasdeBancodeDados(recomendado), ModelosdeArmazenamentodeFormulários-Nomesdoscampos, expander-2120367861, expander-control-2120367861, expander-content-2120367861, ModelosdeArmazenamentodeFormulários-Tiposdecamposeimutabilidade, ModelosdeArmazenamentodeFormulários-Quantidadedecamposporformulário, ModelosdeArmazenamentodeFormulários-Numaúnicatabela(parapequenasquantidadesderegistros) -->
