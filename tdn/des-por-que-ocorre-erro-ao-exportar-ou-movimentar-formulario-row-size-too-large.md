---
title: "DES - Por que ocorre erro ao exportar ou movimentar formulário 'row size too large'?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=270924988"
scraped_at: "2026-03-09T03:31:23.550Z"
depth: 2
anchors: 7
child_links: 55
---

# DES - Por que ocorre erro ao exportar ou movimentar formulário 'row size too large'?

# Índice

# Plataforma

**Produto:**TOTVS Fluig Plataforma

**Versão:**Todas as versões

# Ocorrência

Ao tentar exportar um novo formulário para a plataforma ou movimentar uma solicitação, os erros são apresentados da seguintes formas:

[?](#)

| `com.mysql.jdbc.exceptions.jdbc4.MySQLSyntaxErrorException: Row size too large. The maximum row size``for` `the used table type, not counting BLOBs, is``8126``. This includes storage overhead, check the manual. You have to change some columns to TEXT or BLOBs` |
| --- |

[?](#)

| `ERROR [org.hibernate.engine.jdbc.spi.SqlExceptionHelper] (``default` `task-``25``) Row size too large (>``8126``). Changing some columns to TEXT or BLOB or using ROW_FORMAT=DYNAMIC or ROW_FORMAT=COMPRESSED may help. In current row format, BLOB prefix of``768` `bytes is stored inline.` |
| --- |

# Solução

Identificamos que essa situação ocorre em dois cenários, sendo o primeiro na exportação de formulário devido a quantidade de campos contidos no mesmo, com isto, o banco restringe a criação da tabela do formulário (metalista). O segundo cenário trata-se da movimentação de solicitações, onde o número de caracteres informados ultrapassa o limite do banco e acaba por restringir o envio das informações.

Há uma medida de contorno, a qual poderá ser adotada, mas não é assegurado em todos os casos que a mesma solucionará o incidente, cabe ressaltar que essa limitação é do próprio banco de dados e não uma limitação do produto. A medida consiste em alterar os parâmetros de limitações do MySQL. Para realizar o procedimento, basta inserir (ou alterar) as seguintes chaves no arquivo **my.ini (em Windows)** ou **my.cnf (em Linux):**

[?](#)

| `innodb_log_file_size=8G``innodb_log_buffer_size=800M``innodb_buffer_pool_size=800M``innodb_strict_mode=``0` |
| --- |

Em seguida, é necessário reiniciar o serviço do banco de dados para que as alterações entrem em vigor.

Caso o incidente persista após a alteração dos parâmetros, aconselhamos que seja implementando em seu diagrama o uso de um [Subprocesso](https://tdn.totvs.com/display/public/HF/Configurar+atividades+e+fluxos#Configuraratividadesefluxos-ConfigurarSubprocesso), visando dividir o formulário, seja para sanar a questão do número de campos inseridos no mesmo ou o número de informações a serem enviadas durante a movimentação de uma solicitação.


<!-- anchors: DESPorqueocorreerroaoexportaroumovimentarformulário'rowsizetoolarge'?-Índice, DESPorqueocorreerroaoexportaroumovimentarformulário'rowsizetoolarge'?-Plataforma, DESPorqueocorreerroaoexportaroumovimentarformulário'rowsizetoolarge'?-Ocorrência, highlighter_246104, highlighter_295616, DESPorqueocorreerroaoexportaroumovimentarformulário'rowsizetoolarge'?-Solução, highlighter_855230 -->
