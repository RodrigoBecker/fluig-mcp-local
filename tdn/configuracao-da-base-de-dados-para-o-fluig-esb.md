---
title: "Configuração da base de dados para o Fluig ESB"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=120784259"
scraped_at: "2026-03-09T03:25:05.590Z"
depth: 2
anchors: 3
child_links: 24
---

# Configuração da base de dados para o Fluig ESB

### Criação da base de dados do ESB

O Fluig ESB utiliza o banco de dados para que possa monitorar as mensagens pelo Monitor. Os bancos de dados homologados são:

| Bancos de Dados | MySQL | 5.6 ou superior |
| --- | --- | --- |
| Oracle | 12C ou inferior |  |
| Microsoft SQL Server | 2012 ou superior |  |

Atenção

Por padrão, a instalação do ESB inclui o banco de dados Derby, que deve ser utilizado apenas na primeira execução do produto ou em ambientes de teste. Não é recomendado utilizá-lo em ambientes de produção.

Assim que definido o banco de dados homologado que será utilizado no ambiente, é necessário que seja criada **manualmente** uma base para que o ESB possa realizar a criação da tabela ESBMESSAGE.

O ESB cria e gerencia automaticamente a tabela ESBMESSAGE sendo necessário a criação deu um usuário para o *schema*/instância do banco de dados com as seguintes permissões:

- Permissão para criar tabelas (CREATE TABLE)
- Permissão para eliminar tabelas (DROP TABLE)
- Permissão para alterar tabelas (ALTER TABLE)
- Permissão para criar índices (CREATE INDEX)
- Permissão para eliminar índices (DROP INDEX)
- Permissão para alterar índices (ALTER INDEX)
- Permissão para criar sequências (CREATE SEQUECE)
- Permissão para alterar sequências (ALTER SEQUENCE)
- Permissão para eliminar sequências (DROP SEQUENCE)

### Gerenciamento manual das permissões do usuário do banco de dados do ESB

Para gerenciar manualmente as permissões do usuário do banco de dados do ESB os seguintes passos devem ser executados:

1. Criar um usuário para a instância/*schema* conforme tabela acima
2. Iniciar o ESB e configurar a base de dados no TDS
3. Realizar um *dump* desta base para o ambiente de produção com as permissões reduzidas para: *INSERT/DELETE/UPDATE/SELECT*

- Permissão para inserir dados (INSERT)
- Permissão para apagar dados (DELETE)
- Permissão para altera dados (UPDATE)
- Permissão para selecionar dados (SELECT)

### Observações

- A manutenção deste banco será feita de forma manual.

- A cada nova alteração, como por exemplo a inclusão de um novo campo, será necessário refazer o procedimento de conceder as permissões para que a tabela possa ser alterada, caso isso não seja realizado a aplicação não funcionará corretamente. Necessário verificar o *Release Notes* a cada nova versão.

- Cada banco de dados terá a sua particularidade que deverá ser atendida.

- Os procedimentos acima são de total responsabilidade do cliente.

- A configuração do banco de dados no servidor ESB é realizada via [plugin ESB](https://tdn.totvs.com/pages/viewpage.action?pageId=238035434), através da aba [Database Configuration](/display/fluig/Database+Configuration) da [Visão ESB Servers](/pages/viewpage.action?pageId=6066531).


<!-- anchors: ConfiguraçãodabasededadosparaoFluigESB-CriaçãodabasededadosdoESB, ConfiguraçãodabasededadosparaoFluigESB-GerenciamentomanualdaspermissõesdousuáriodobancodedadosdoESB, ConfiguraçãodabasededadosparaoFluigESB-Observações -->
