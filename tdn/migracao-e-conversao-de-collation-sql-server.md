---
title: "Migração e Conversão de Collation (SQL Server)"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=118882384"
scraped_at: "2026-03-09T04:54:38.762Z"
depth: 3
anchors: 19
child_links: 51
---

# Migração e Conversão de Collation (SQL Server)

# Objetivo

---

O objetivo deste guia é indicar um método de migração dos dados de uma base com agrupamento de caracteres (*collation*) diferente do padrão "Latin1_General_CI_AS" necessário para a correta utilização da base Fluig.

# Procedimento de migração e conversão de dados

---

Atenção!

Esta operação deve ocorrer antes da conversão de uma base TOTVS ECM para TOTVS Fluig Plataforma. Mesmo com a alteração do agrupamento padrão, os campos existentes permanecem incorretos, podendo assim, causar comportamentos inesperados na utilização da plataforma.

Acompanhe a seguir o checklist para a conversão.

- [Passo 01](#)
- [Passo 02](#)
- [Passo 03](#)
- [Passo 04](#)
- [Passo 05](#)
- [Passo 06](#)
- [Passo 07](#)
- [Passo 08](#)
- [Passo 09](#)

 - Gere um **DUMP** desta base de dados do **TOTVS ECM 3.00**, com toda estrutura de tabelas e campos.

 - Para o SGBD **Microsoft SQL Server** utilize o procedimento a seguir:

   Clique com o botão direito do mouse sobre a base de dados.

   - No menu suspenso escolha a opção **Tarefas > Gerar Scripts...**

   - Clique no botão **Próximo >** para passar a apresentação da Introdução do assistente para **Gerar e Publicar Scripts**.

   - Deixe selecionada a opção para **Gerar script de todo o banco de ****dados** e **todos os objetos de banco de dados** e clique no botão **Próximo >**.

   - Na tela seguinte, no grupo **Tipo de Saída** e no grupo abaixo selecione a opção **Salvar** na nova janela de consulta.

   - Clique no botão **Avançado**.

   - Na tela de **Opções de Script Avançadas** altere a opção **Agrupamento de Scripts** para **True** e clique no botão **OK**.

   - Ao retornar a tela **Gerar e Publicar Scripts **clique no botão **Próximo >**.

   - Na etapa a seguir revise as configurações para geração do script da base. Clique no botão **Próximo >**.

   - Torne à janela do **Microsoft SQL Server Management Studio**.

   - Na nova janela aberta com o script, altere as seguintes linhas e proceda com as alterações abaixo citadas:

     Substituir todas as ocorrências do nome antigo do banco de dados para **fluig**. (Aproximadamente 39 ocorrências).

        [?](#)
| 12345678 | `-- antes````CREATE` `DATABASE` `[byyouecm_ofi]` `-- depois````CREATE` `DATABASE` `[fluig]` `-- comando``-- replaceAll apenas na palavra  byyouecm_ofi` |
| --- | --- |

     - Substituir no nome do arquivo .**mdf** e do arquivo .**log** para **fluig**, bem como a label dos arquivos.

        [?](#)
| 1234567891011121314 | `-- antes````ON`  `PRIMARY``(``NAME` `= N``'Webdesk300_Data'``, FILENAME = N``'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\byyouecm_ofi.MDF'` `,``SIZE` `= 5098688KB , MAXSIZE = UNLIMITED, FILEGROWTH = 10%)````LOG``ON``(``NAME` `= N``'Webdesk300_Log'``, FILENAME = N``'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\byyouecm_ofi_1.LDF'` `,``SIZE` `= 52352KB , MAXSIZE = UNLIMITED, FILEGROWTH = 10%)` `-- depois````ON`  `PRIMARY``(``NAME` `= N``'Fluig_Data'``, FILENAME = N``'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\fluig.MDF'` `,``SIZE` `= 5098688KB , MAXSIZE = UNLIMITED, FILEGROWTH = 10%)````LOG``ON``(``NAME` `= N``'Fluig_Log'``, FILENAME = N``'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\fluig.LDF'` `,``SIZE` `= 52352KB , MAXSIZE = UNLIMITED, FILEGROWTH = 10%)` `-- comando``-- replaceAll apenas na palavra Webdesk300` |
| --- | --- |

     - Substituir a ocorrência da versão do banco de dados para o valor **110**.

        [?](#)
| 12345 | `-- antes``ALTER` `DATABASE` `[fluig]``SET` `COMPATIBILITY_LEVEL = 100` `-- depois``ALTER` `DATABASE` `[fluig]``SET` `COMPATIBILITY_LEVEL = 110` |
| --- | --- |

     - Substituir a ocorrência do instantâneo de leitura de commit para **ON**.

        [?](#)
| 12345 | `-- antes``ALTER` `DATABASE` `[fluig]``SET` `READ_COMMITTED_SNAPSHOT``OFF` `-- depois``ALTER` `DATABASE` `[fluig]``SET` `READ_COMMITTED_SNAPSHOT``ON` |
| --- | --- |

     - Substituir todas as ocorrências do **collation** antigo pelo novo **Latin1_General_CI_AS**. (Aproximadamente 444 ocorrências).

       Importante! 

        Independentemente da **collation** que a base ECM tenha, é necessário converter para '**Latin1_General_CI_AS**', pois é o que o TOTVS Fluig espera como padrão, conforme descrito na documentação [Configuração do banco de dados SQL Server](/pages/viewpage.action?pageId=257623499).

       **CI** significa **Case Insensitive**, não diferenciando letras maiúsculas de minúsculas em suas queries.

       - **AS** significa **Accept Signal**, diferenciado acentuação nos campos de texto em suas queries.

          [?](#)
| 12345678 | `-- antes``COLLATE` `SQL_Latin1_General_CP1_CI_AI` `-- depois``COLLATE` `Latin1_General_CI_AS` `-- comando``-- replaceAll apenas na palavra SQL_Latin1_General_CP1_CI_AI` |
| --- | --- |

   - Execute o script por inteiro.

   - Atualize o explorador de objetos do SQL Management Studio.

   - Deverá aparecer o novo banco **fluig**.

 - Proceda com a desativação das chaves (*constraints*) nas tabelas da base de dados **fluig**. Para o SGBD Microsoft SQL Server utilize a instrução a seguir:

   Abra uma janela de Nova Consulta (menu **Arquivo > Novo > Consulta do Mecanismo de Banco de Dados**);.

   - Insira a consulta abaixo e a execute na nova base de dados.

[?](#)

| `DECLARE` `@TABLENAME``VARCHAR``(8000)``DECLARE` `@TABLENAME_HEADER``VARCHAR``(8000)``DECLARE` `TNAMES_CURSOR``CURSOR` `FOR``` `SELECT` `[``name``]``from` `[sys].[tables]``` `OPEN` `TNAMES_CURSOR````FETCH` `NEXT` `FROM` `TNAMES_CURSOR``INTO` `@TABLENAME````WHILE (@@FETCH_STATUS <> -1)````BEGIN````IF (@@FETCH_STATUS <> -2)````BEGIN````SELECT` `@TABLENAME_HEADER =``'ALTER TABLE '` `+ RTRIM(``UPPER``(@TABLENAME)) +``' NOCHECK CONSTRAINT ALL;'````--Alterar o NOCHECK para CHECK para depois habilitar as constraints````PRINT @TABLENAME_HEADER````END````FETCH` `NEXT` `FROM` `TNAMES_CURSOR``INTO` `@TABLENAME``END``` `SELECT` `@TABLENAME_HEADER =``'--************* Fim das Tabelas *************--'``PRINT @TABLENAME_HEADER PRINT``' '``DEALLOCATE` `TNAMES_CURSOR` |
| --- |

3. Copie o resultado e cole em uma janela de Nova Consulta e execute (na nova base de dados) usando o bando de dados **TOTVS Fluig Plataforma**.

 - Exclua o índice **CENTRAL_TC** que fica na tabela **TAR_CTRAL**. Para excluir o índice pelo SQL Studio:

   Abra o **SQL Server Management Studio (SSMS)**.

   - Conecte-se ao servidor de banco de dados.

   - No painel do **Object Explorer**, localize a base de dados onde a tabela está armazenada.

   - Expanda a base de dados e navegue até a tabela chamada **TAL_CTRAL**.

   - Clique com o botão direito na tabela **TAL_CTRAL** e selecione a opção **Indexes**.

   - A lista de índices associados à tabela será exibida.

   - Identifique o índice **CENTRAL_TC**.

   - Clique com o botão direito sobre o índice selecionado e escolha a opção **Delete**.

   - Confirme a exclusão para apagar o índice atrelado à tabela.

 - Realize a importação dos dados a partir da base de dados antiga, com um assistente de importação e exportação de dados, por exemplo. Para o SGBD Microsoft SQL Server utilize o procedimento:

   Clique com o botão direito do mouse sobre a nova base de dados.

   - No menu suspenso selecione a opção **Tarefas > Importar Dados...**

   - Na tela de apresentação do Assistente de Importação e Exportação do SQL Server clique no botão **Avançar >**.

   - No campo **Fonte** de dados selecione a opção **SQL Server Native Client** (ao final é exibido o número da versão, utilize a mesma equivalente à versão do serviço de banco de dados).

   - No campo **Nome** do servidor indique (digite ou selecione na caixa suspensa) o servidor e instância que possui a base de dados anterior (que deverá ser compatibilizada / normalizada). 

   - No grupo **Autenticação** utilize o método que permite acesso a todos os dados desta base de dados anterior. É recomendado o uso de um usuário com permissão de **db_owner**.

   - Selecione ou digite, no campo **Banco de dados**, a base antiga e clique no botão **Avançar >**.

   - Na tela com título (para) **Escolher um Destino** devem vir preenchidos os campos com informações de acesso a esta nova base de dados. Se as informações estiverem incorretas ou incompletas, corrija-as, e clique no botão **Avançar >**.

   - A seguir na tela com título **Especificar Cópia** ou **Consulta de Tabela** selecione a opção **Copiar** dados de uma ou mais tabelas ou exibições e clique no botão **Avançar >**.

   - Na tela de título **Selecionar Tabelas** e **Exibições de Origem**, clique na primeira caixa de seleção que está nos títulos da listagem de **Tabelas e exibições**.

   - Com todos selecionados clique no botão **Editar Mapeamentos...**

   - Na caixa **Configurações de Transferência **marque a caixa de seleção **Habilitar inserção de identidade** e, então, no botão OK.

     Atenção! 

      Não deixe de marcar esta opção para que não ocorram falhas na cópia dos dados.

   - Retornando à janela anterior, **Selecionar Tabelas** e **Exibições de Origem**, clique no botão **Avançar >**.

   - Na tela com título **Revisar Mapeamento** de **Tipo de Dados** clique no botão **Avançar**.

   - Na tela com título **Executar Pacote **marque a caixa de seleção **Executar imediatamente** e clique no botão **Avançar >**.

   - Na tela com título **Concluir Assistente**, após revisar as ações clique no botão **Avançar**.

   - Na tela a seguir de execução das ações ao final deve ser exibida a informação de que a importação foi realizada com sucesso.

   - Execute o *script* para habilitar as *constraints* que foram desativadas no **Passo 02 **alterando de **NOCHECK** para **CHECK**.

 - Conferir procedimentos para o serviço/instância do SGBD Microsoft SQL Server, descritos na página [Configuração do banco de dados SQL Server](/pages/viewpage.action?pageId=73078837), a partir da sessão **Configuração do banco**.

 - As configurações de agrupamento de caracteres (*Collate/Collation*) das bases de dados podem ser consultadas utilizando a instrução:

[?](#)

| `SELECT` `[``name``] , [is_read_committed_snapshot_on] , [collation_name] , suser_sname([owner_sid])``as` `'owner'``FROM` `[sys].[databases]``WHERE` `[``name``]``LIKE` `'fluig%'``;` |
| --- |

IMPORTANTE

   - Verificar o nome do proprietário (owner) do novo banco criado. Deverá ser o mesmo usuário a ser informado na instalação do **Fluig.**

 - Verificar o repasse das permissões de acesso aos devidos usuários na nova base de dados. Estas podem ter sido perdidas. 

 - Instalar a **versão 1.5.13 (Última EP)** do **Fluig** e configurar para apontar para esta base de dados (**fluig**).

 - Inicializar o serviço **Fluig**, e acompanhar o LOG, para se certificar de que toda a inicialização foi bem sucedida, sem erros graves, como falha na conexão com o SGBD.

 - Retornar ao processo de conversão **TOTVS ECM 3.00 para TOTVS Fluig Plataforma** se for este o caso, ou então, realizar as validações desejadas e uso da nova instalação.


<!-- anchors: MigraçãoeConversãodeCollation(SQLServer)-Objetivo, MigraçãoeConversãodeCollation(SQLServer)-Procedimentodemigraçãoeconversãodedados, 1, 1-1, highlighter_215895, highlighter_91573, highlighter_416119, highlighter_574816, highlighter_479261, 1-2, highlighter_455402, 1-3, 1-4, 1-5, highlighter_133523, 1-6, 1-7, 1-8, 1-9 -->
