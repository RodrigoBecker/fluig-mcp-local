---
title: "Migração e Conversão do Oracle ECM para plataforma TOTVS Fluig"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=661871105"
scraped_at: "2026-03-09T04:54:47.722Z"
depth: 3
anchors: 42
child_links: 50
---

# Migração e Conversão do Oracle ECM para plataforma TOTVS Fluig

# Índice

**oculto**

**Obs**: Liberar essa documentação após a liberação do oracle 19 e da issue FFDN-6298

# Objetivo

---

O objetivo deste guia é indicar um método de migração dos dados de uma base do TOTVS ECM 3.00 para o Fluig Plataforma. Utilizando conjunto de caracteres padrão para base através do NLS_CHARACTERSET =  AL32UTF8, eliminando assim a necessidade de converter tabela por tabela.

# Pré-requisitos

---

- Conhecimento em administração de banco de dados Oracle;
- Conhecimento em ferramentas de UI/CLI Oracle.

# Ferramentas Utilizadas

---

- Oracle Database 19C XE
- SQL Plus
- SQL Developer

# Procedimento de Migração e Conversão de Dados

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

 - Gere um **DUMP** desta base de dados do **TOTVS ECM 3.00**, com toda estrutura de tabelas, campos e dados. 

 - É necessário realizar alguns processos para que a exportação ocorra com sucesso, portanto, utilize o procedimento a seguir:

**1)** Criar um diretório no sistema operacional para armazenar os arquivos exportados (Dumps), conforme exemplo abaixo: 

[?](#)

| `$ mkdir -p /home/oracle/dumps/exp_dump` |
| --- |

**2)** Logo em seguida, acesse a ferramenta **sqlplus**, com o seguinte comando: 

[?](#)

| `$ sqlplus / as sysdba` |
| --- |

 **3)** Execute a instrução SQL abaixo, passando o caminho da pasta que você criou anteriormente: 

[?](#)

| `SQL > CREATE OR REPLACE DIRECTORY exp_dumps AS ‘/home/oracle/dumps/exp_dump’;` |
| --- |

**4)** Agora é necessário setar permissão para o usuário que vai realizar a exportação dos dados, para isso, utilize o comando abaixo:

[?](#)

| `SQL > GRANT READ, WRITE on directory exp_dumps TO seu_usuario;` |
| --- |

**5)** Após setar as permissões, saia do SQL Plus com o comando “**exit**” e abra o SQL Developer, para realizarmos a exportação da base;

**6)** Com o banco na ferramenta instalado e uma conexão já configurada, clique no menu **Exibir > DBA** e **selecione** sua conexão. Caso a conexão não apareça, clique no ícone “**+**” para selecionar uma nova:

   Veja a imagem

![](/download/attachments/661871105/Exibir%20DBA.png?version=1&modificationDate=1642710521153&api=v2)

**7)** Em seguida, vá até a opção **Data Pump** > **Jobs de Exportação** > clique no botão** Ações** > **Assistente de Exportação do Data:**

   Veja a imagem

![](/download/attachments/661871105/Assistente%20de%20Exporta%C3%A7%C3%A3o%20do%20Data.png?version=1&modificationDate=1642710521113&api=v2)

**8)** Após realizar os procedimentos mencionados até aqui e com a tela do **Assistente de Exportação do Data**aberta**, **basta seguir os passos abaixo em cada tópico:

 - **Origem**

*-Dados ou DDL:* Dados e DDL 
*-Tipos a serem exportados no Data Pump:* Tabelas

   Veja a imagem

![](/download/attachments/661871105/Origem.png?version=1&modificationDate=1642710521073&api=v2)

 - **Tabelas**

-Selecione o esquema
-Selecione todas as tabelas

   Veja a imagem

![](/download/attachments/661871105/Tabelas.png?version=1&modificationDate=1642710521033&api=v2)

 - **Dados da tabela**

-Selecione todas as tabelas e campos

   Veja a imagem

![](/download/attachments/661871105/Dados%20da%20Tabela.png?version=1&modificationDate=1642710520997&api=v2)

 - **Opções**

-**Ative o log** e selecione a pasta de **exportação de dumps** criada anteriormente

   Veja a imagem

![](/download/attachments/661871105/Op%C3%A7%C3%B5es.png?version=1&modificationDate=1642710520953&api=v2)

 - **Arquivos de Saída**

-Selecione o diretório de exportação criado anteriormente;
-Defina o nome do arquivo, recomendado usar o nome do schema;
-Deixe marcado as opções: *Anexar Timestamp a nomes de Dump, Log e Job; Compactação; Ir para resumo.*

   Veja a imagem

![](/download/attachments/661871105/Arquivo%20de%20sa%C3%ADda.png?version=1&modificationDate=1642710520913&api=v2)

 - Confira o resumo e clique em **finalizar** para gerar o Dump

     Veja a imagem

    ![](/download/attachments/661871105/Resumo.png?version=1&modificationDate=1642710520867&api=v2)

 - Agora vamos configurar o banco de dados que irá receber os dados e a instalação do Fluig Plataforma.        

         Primeiramente, acesse a documentação de [configuração do banco de dados Oracle](https://tdn.totvs.com/x/uAVbDw) disponível no TDN , crie o usuário/schema + tablespace e realize as configurações necessárias para funcionamento da plataforma. 

 - Após realizar as configurações indicadas no passo 2, crie uma conexão no SQL Developer para essa nova base, e acesse o Assistente de Importação do Data Pump na palheta **DBA** > **Data Pump** > **Jobs de Importação** > clique no botão**Ações** > **Assistente de Importação:**

 - **Tipo **

-Dados e DDL
-Tipo de importação: Tabelas
-Escolha o diretório IMP_DUMPS criado anteriormente e insira o nome do arquivo de dump gerado.

   Veja a imagem

![](/download/attachments/661871105/Imp%20-%201%20-%20Tipo.png?version=5&modificationDate=1642710520807&api=v2)

 - **Filtrar**

-Selecione todas as tabelas do schema desejado

   Veja a imagem

![](/download/attachments/661871105/Imp%20-%202%20-%20Filtrar.png?version=1&modificationDate=1642710520753&api=v2)

 - **Remapeamento**

-**Remapear Esquemas***Origem:* Schema da base original
*Destino:* Novo Schema

-**Remapear Tablespaces**Mesma lógica dos esquemas

   Veja a imagem

![](/download/attachments/661871105/Imp%20-%203%20-%20Remapeamento.png?version=1&modificationDate=1642710520693&api=v2)

 - **Opções**

-Clicar na opção **Ativar Log**-Selecione o diretório de importação e defina o nome do arquivo de log
-Clicar em **Anexar Timestamp a nomes de Log e Job** e **Ir para resumo.**

   Veja a imagem

![](/download/attachments/661871105/Imp%20-%204%20-%20Op%C3%A7%C3%B5es.png?version=1&modificationDate=1642710520643&api=v2)

 - **Resumo**

-Confira os dados e clique em **finalizar** para executar o Job

   Veja a imagem

![](/download/attachments/661871105/Imp%20-%205%20-%20Resumo.png?version=1&modificationDate=1642710520570&api=v2)

 - Instalar a versão **1.5.13** (Última EP) do Fluig e apontar a configuração para esta base de dados (fluig).

 - Inicializar o serviço Fluig, e acompanhar o LOG, para se certificar de que toda a inicialização foi bem sucedida. Caso apresente alguma inconsistência, como por exemplo, falha na conexão com a base de dados, basta seguir o passo 6. 

 - Retornar ao processo de [c](https://tdn.totvs.com/x/qANbDw)[onversão TOTVS ECM para plataforma TOTVS Fluig](https://tdn.totvs.com/x/qANbDw) se for este o caso, ou então, realizar as validações desejadas e uso da nova instalação.


<!-- anchors: MigraçãoeConversãodoOracleECMparaplataformaTOTVSFluig-Índice, MigraçãoeConversãodoOracleECMparaplataformaTOTVSFluig-Objetivo, MigraçãoeConversãodoOracleECMparaplataformaTOTVSFluig-Pré-requisitos, MigraçãoeConversãodoOracleECMparaplataformaTOTVSFluig-FerramentasUtilizadas, MigraçãoeConversãodoOracleECMparaplataformaTOTVSFluig-ProcedimentodeMigraçãoeConversãodeDados, 1, 1-1, highlighter_204493, highlighter_930034, highlighter_648402, highlighter_163146, expander-1907584820, expander-control-1907584820, expander-525624882, expander-control-525624882, expander-233532504, expander-control-233532504, expander-531466623, expander-control-531466623, expander-106031161, expander-control-106031161, expander-1384460941, expander-control-1384460941, expander-1825376940, expander-control-1825376940, expander-779694384, expander-control-779694384, 1-2, 1-3, expander-39160681, expander-control-39160681, expander-1262371927, expander-control-1262371927, expander-1239137980, expander-control-1239137980, expander-1171619018, expander-control-1171619018, expander-533863135, expander-control-533863135, 1-4, 1-5, 1-6 -->
