---
title: "Transparent Data Encryption (TDE)"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=773891064"
scraped_at: "2026-03-09T04:10:52.648Z"
depth: 2
anchors: 24
child_links: 61
---

# Transparent Data Encryption (TDE)

# Índice

# Objetivo

---

Descrever a utilização de TDE (*Transparent Data Encryption*) nos bancos de dados homologados para o TOTVS Fluig.

# Visão geral

---

Após a análise da viabilidade de uso de TDE (*Transparent Data Encryption*) nos bancos de dados homologados para o TOTVS Fluig, concluiu-se que é possível utilizar este recurso em todos os bancos de dados, mas apenas as versões pagas.

Os bancos possuem algumas características que se diferem entre eles, como por exemplo performance, mas todos possuem a mesma finalidade de criptografar os dados em repouso. Os procedimentos de ativação do TDE listados a seguir foram realizados em todos os bancos homologados.

# TDE em MySQL

---

O MySQL Enterprise TDE é um recurso disponível na edição *Enterprise* do MySQL que fornece criptografia de dados em nível de arquivo. Ele permite criptografar automaticamente os dados armazenados nos arquivos do banco de dados MySQL, protegendo as informações confidenciais contra acesso não autorizado, violações de segurança física e acesso indevido aos arquivos do banco de dados.

Para habilitar a criptografia dos arquivos de banco de dados é necessário incluir as seguintes linhas no arquivo de configuração do MySQL, **my.cnf** (ou um arquivo cnf customizado):

[?](#)

| `early-plugin-``load``=keyring_encrypted_file.so``keyring_encrypted_file_data=/var/lib/mysql-keyring/keyring-encrypted``keyring_encrypted_file_password=SeuP4ssw0rdAqui` |
| --- |

Onde:

- **early-plugin-load:** especifica o *plug-in* a ser carregado;
- **keyring_encrypted_file_data:** configura o local do arquivo usado pelo *plug-in* para armazenamento de dados;
- **keyring_encrypted_file_password:** especifica a senha para criptografar o arquivo de dados do conjunto de chaves.

Após habilitado, é possível criptografar as tabelas do banco de dados. Não é necessário criptografar todas as tabelas, podem ser criptografadas apenas as tabelas mais relevantes.

Para criptografar uma tabela, seja ela nova ou já existente, usa-se CREATE TABLE ou ALTER TABLE, juntamente com ENCRYPTION=”Y”.

EXEMPLO:

[?](#)

| `ALTER` `TABLE` `banco.tabela ENCRYPTION=``"Y"``;` |
| --- |

É possível criptografar todas as tabelas do banco de dados durante sua criação.

EXEMPLO:

[?](#)

| `CREATE` `SCHEMA` `fluig``DEFAULT` `CHARACTER` `SET` `utf8``DEFAULT` `ENCRYPTION``'Y'``;` |
| --- |

É possível verificar quais tabelas estão criptografadas usando a seguinte consulta SQL:

[?](#)

| `SELECT` `TABLE_SCHEMA, TABLE_NAME, CREATE_OPTIONS``FROM` `INFORMATION_SCHEMA.TABLES``WHERE` `CREATE_OPTIONS =``'ENCRYPTION="Y"'``;` |
| --- |

A criptografia dos arquivos de banco de dados é transparente. Portanto, não é necessária nenhuma mudança na aplicação.

É importante mencionar que requisitos legais e regulatórios exigem uma rotação periódica da chave mestra de criptografia. Também é recomendado rotacionar a chave mestra sempre que suspeitar de uma violação de segurança. A rotação da chave mestra de criptografia altera apenas a chave mestra e criptografa novamente as chaves de *tablespace*.

Outro fator importante é que a chave mestra de criptografia é armazenada na memória do *keyring* do MySQL. Utilizando um cofre de chaves, esse *keyring* é tanto persistido quanto protegido. Nem a chave mestra e nenhuma das chaves do *tablespace* são gravadas em disco em texto simples.

Existem diversos cofres de chaves disponíveis no mercado e também há um protocolo comum da indústria suportado pela maioria dos cofres. O protocolo é o KMIP e ele é originado da OASIS.

Perder chaves – seja por acidente, má gestão ou invasão – significa perder seus dados. Para garantir que suas chaves estejam disponíveis, seguras, auditáveis etc., é recomendado utilizar um *software* de gerenciamento de cofres de chaves, como o Oracle Key Vault. O Oracle Key Vault permite implantar rapidamente soluções de criptografia e outras soluções de segurança, gerenciando centralmente as chaves de criptografia para o MySQL.

A utilização do MySQL Enterprise Transparent Data Encryption pode ter um impacto no desempenho do sistema devido ao processamento adicional necessário para a criptografia e descriptografia dos dados. No entanto, o impacto real depende de vários fatores, incluindo a capacidade de processamento do servidor, o volume de dados, a complexidade dos algoritmos de criptografia utilizados e a carga de trabalho do sistema.

Além do impacto no desempenho, os dados criptografados podem ocupar mais espaço em disco do que os dados não criptografados. Isso ocorre porque a criptografia geralmente adiciona informações extras aos dados para garantir sua integridade e segurança. Portanto, é importante considerar o impacto no armazenamento quando se utiliza o TDE.

Levando em consideração tais fatores, recomenda-se realizar testes de desempenho em um ambiente de desenvolvimento para avaliar o impacto real antes de implementar o TDE em um ambiente de produção.

Dica!

Saiba mais sobre o **MySQL Enterprise TDE** em:

- [MySQL Enterprise Transparent Data Encryption (TDE) - provides at-rest encryption for physical InnoDB tablespace data files](https://dev.mysql.com/blog-archive/mysql-enterprise-transparent-data-encryption-tde-provides-at-rest-encryption-for-physical-innodb-tablespace-data-files/)

- [MySQL Enterprise Transparent Data Encryption (TDE)](https://www.mysql.com/products/enterprise/tde.html)

- [File-Per-Table Tablespace Encryption](https://dev.mysql.com/doc/refman/8.0/en/innodb-data-encryption.html#innodb-data-encryption-enabling-disabling)

# TDE em SQL Server

---

A criptografia de dados transparente (TDE) criptografa os arquivos de dados SQL Server, Banco de Dados SQL do Azure e Azure Synapse Analytics. Essa criptografia é conhecida como criptografia de dados em repouso. Esse recurso não está disponível na versão Express.

Para ajudar a proteger um banco de dados de usuário, você pode tomar precauções como:

- projetar um sistema seguro;
- criptografar ativos confidenciais;
- criar um *firewall* em todos os servidores de banco de dados.

No entanto, uma parte mal intencionada que rouba mídia física, como unidades ou fitas de *backup*, pode restaurar ou anexar o banco de dados e procurar seus dados.

Uma solução é criptografar dados confidenciais em um banco de dados e usar um certificado para proteger as chaves que criptografam os dados. Essa solução impede que alguém sem as chaves use os dados. Mas você deve planejar esse tipo de proteção com antecedência.

A TDE realiza a criptografia e a descriptografia de E/S em tempo real dos arquivos de *log* e de dados. A criptografia usa uma DEK – chave de criptografia de banco de dados. O registro de inicialização do banco de dados armazena a chave para disponibilidade durante a recuperação. O DEK é uma chave simétrica. Ele é protegido por um certificado que o banco de dados do *master* servidor armazena ou por uma chave assimétrica que um módulo EKM protege.

A TDE protege os dados "em repouso", que são os dados e os arquivos de *log*. Ela permite que você siga muitas leis, regulamentos e diretrizes estabelecidos em vários setores. Isso possibilita que os desenvolvedores de *software* criptografem dados usando algoritmos de criptografia AES e 3DES, sem alterar os aplicativos existentes.

Ao contrário do que acontece no MySQL, a TDE não aumenta o tamanho do banco de dados criptografado no SQL Server.

Para realizar o procedimento no SQL Server, utilize:

[?](#)

| `USE master;``GO` `CREATE` `MASTER``KEY` `ENCRYPTION``BY` `PASSWORD` `=``'p4ssw0Rd'``;``GO` `CREATE` `CERTIFICATE Certificado``WITH` `SUBJECT =``'NomeDoCert'``;``GO` `USE fluigDatabase;``GO` `CREATE` `DATABASE` `ENCRYPTION``KEY``WITH` `ALGORITHM = AES_256``ENCRYPTION``BY` `SERVER CERTIFICATE Certificado;``GO` `ALTER` `DATABASE` `fluigDatabase``SET` `ENCRYPTION``ON``;``GO` `Use master;``GO` `BACKUP CERTIFICATE Certificado``TO` `FILE =``'diretorio\de\sua\preferencia\cert'````WITH````PRIVATE``KEY`  ```(````FILE =``'diretorio\de\sua\preferencia\key'` `,````ENCRYPTION``BY` `PASSWORD` `=``'p4ssw0Rd'````)` |
| --- |

Dica!

Saiba mais sobre o **SQL Server TDE** em:

- [TDE (*Transparent Data Encryption*)](https://learn.microsoft.com/pt-br/sql/relational-databases/security/encryption/transparent-data-encryption?view=sql-server-ver16)

- [Fazer *backup* da chave privada do EFS (Sistema de Arquivos de Criptografia) do agente de recuperação no Windows](https://learn.microsoft.com/pt-br/troubleshoot/windows-server/identity/back-up-recovery-agent-efs-private-key)

- [Criptografia de *backup*](https://learn.microsoft.com/pt-br/sql/relational-databases/backup-restore/backup-encryption?view=sql-server-ver16)

- [Backup certificate (Transact-SQL)](https://learn.microsoft.com/pt-br/sql/t-sql/statements/backup-certificate-transact-sql?view=sql-server-ver16)

# TDE em Oracle

---

O *Transparent Data Encryption* (TDE) permite criptografar dados confidenciais armazenados em tabelas e espaços de tabela.

Depois que os dados são criptografados, esses dados são descriptografados de forma transparente para usuários ou aplicativos autorizados quando eles acessam esses dados. O TDE ajuda a proteger os dados armazenados na mídia – também chamados de dados em repouso – caso a mídia de armazenamento ou o arquivo de dados seja roubado.

O Oracle Database usa mecanismos de autenticação, autorização e auditoria para proteger os dados no banco de dados, mas não nos arquivos de dados do sistema operacional onde os dados são armazenados. Para proteger esses arquivos de dados, o Oracle Database fornece *Transparent Data Encryption* (TDE). TDE criptografa dados confidenciais armazenados em arquivos de dados. Para impedir a descriptografia não autorizada, o TDE armazena as chaves de criptografia em um módulo de segurança externo ao banco de dados, denominado *keystore*.

É possível configurar o Oracle Key Vault como parte da implementação do TDE. Isso permite gerenciar de forma centralizada os *keystores* TDE (chamados de carteiras TDE no Oracle Key Vault). Por exemplo, é possível fazer *upload* de um *keystore* de *software* para o Oracle Key Vault e, em seguida, disponibilizar o conteúdo desse *keystore* para outros bancos de dados habilitados para TDE. Consulte o Guia do Administrador do Oracle Key Vault para obter mais informações.

Para configurar o TDE no banco de dados Oracle, faça o seguinte procedimento:

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)
- [Passo 6](#)

 - Acesse o **sqlplus**:

    [?](#)
| `sqlplus /``as` `sysdba` |
| --- |

 - Configure o **wallet_root**:

    [?](#)
| `system``set` `wallet_root=``'/u01/app/oracle/product/19.0.0/db_1/admin/ORCLCDB/wallet'` `scope=spfile sid=``'*'``;` |
| --- |

 - Após configurar o **wallet_root**, é necessário reiniciar o banco de dados:

 - Configure o **TDE_CONFIGURATION**:

    [?](#)
| `alter` `system``set` `tde_configuration=``"KEYSTORE_CONFIGURATION=FILE"` `scope=both sid=``'*'``;` |
| --- |

 - Crie um **Protected-Password KeyStore**:

    [?](#)
| `administer``key` `management``create` `keystore identified``by` `your_p4ssw0rd;` |
| --- |

 - Crie um **auto-login**:

    [?](#)
| `administer``key` `management``create` `auto_login keystore``from` `keystore identified``by` `your_p4ssw0rd;` |
| --- |

 - Configure o **TDE_MASTERKEY**:

    [?](#)
| `administer``key` `management``set` `keystore``open` `force` `keystore identified``by` `your_p4ssw0rd;``administer``key` `management``set` `key` `force` `keystore identified``by` `your_p4ssw0rd``with` `backup;``administer``key` `management``set` `keystore``close` `identified``by` `your_p4ssw0rd;` |
| --- |

Após os procedimentos mencionados acima, é possível criptografar uma ou mais tabelas do banco de dados utilizando algoritmos AES128 ou AES256. A sobrecarga de desempenho do uso do AES256 é considerada aproximadamente 40% mais lenta do que o AES128. Portanto, o uso do AES128 pode ser considerado uma solução balanceada.

Dica!

Saiba mais sobre o **Oracle TDE** em:

- [Part I Using Transparent Data Encryption](https://docs.oracle.com/database/121/ASOAG/asopart1.htm#ASOAG600)


<!-- anchors: TransparentDataEncryption(TDE)-Índice, TransparentDataEncryption(TDE)-Objetivo, TransparentDataEncryption(TDE)-Visãogeral, TransparentDataEncryption(TDE)-TDEemMySQL, highlighter_804577, highlighter_115095, highlighter_309393, highlighter_364742, TransparentDataEncryption(TDE)-TDEemSQLServer, highlighter_268542, TransparentDataEncryption(TDE)-TDEemOracle, TDEemOracle, TDEemOracle-1, highlighter_682241, TDEemOracle-2, highlighter_77913, TDEemOracle-3, highlighter_854600, TDEemOracle-4, highlighter_587368, TDEemOracle-5, highlighter_522005, TDEemOracle-6, highlighter_684031 -->
