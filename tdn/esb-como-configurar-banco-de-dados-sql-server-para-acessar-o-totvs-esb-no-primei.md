---
title: "ESB - Como configurar banco de dados SQL Server para acessar o TOTVS ESB no primeiro acesso em vez do Derby?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=331858145"
scraped_at: "2026-03-09T03:39:34.195Z"
depth: 2
anchors: 9
child_links: 43
---

# ESB - Como configurar banco de dados SQL Server para acessar o TOTVS ESB no primeiro acesso em vez do Derby?

# Índice

# Plataforma

**Produto:** TOTVS ESB

# Ocorrência

É possível configurar o banco de dados MS SQL Server para acessar o TOTVS ESB diretamente sem a necessidade de iniciar pelo default (Derby)?

# Solução

Por padrão, a instalação do TOTVS ESB inclui o banco de dados Derby, que deve ser utilizado apenas na primeira execução do produto ou em ambientes de teste. Não é recomendado utilizá-lo em ambientes de produção.

Assim que definido o banco de dados homologado que será utilizado no ambiente, é necessário que seja criada **manualmente** uma base exclusiva para que o TOTVS ESB possa realizar a criação da tabela ESBMESSAGE. Para mais detalhes, acesse a documentação completa [aqui](/pages/viewpage.action?pageId=120784259).

É possível, após a instalação, alterar para o banco de dados de sua preferência, sendo ele homologado para o TOTVS ESB.[Clique aqui](/display/fluig/Matriz+de+Portabilidade+Fluig+ESB) para acessar a Matriz de Portabilidade do TOTVS ESB.

Para isso, siga os passos abaixo:

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)

Após finalizar a instalação do TOTVS ESB, incluir no diretório**[Instalação ESB]/lib/custom**o driver de conexão com o banco de dados escolhido.

Clique no link sugerido referente ao banco de dados escolhido para fazer download:

 - **Oracle**

Link sugerido para [download](http://www.oracle.com/technetwork/apps-tech/jdbc-10201-088211.html) do *driver* para a versão Oracle 10g R2.

 - **MS SQL Server**

Link sugerido para [download](https://www.microsoft.com/pt-BR/download/details.aspx?id=11774) do *driver* para a versão MS SQL Server 2012.

 - **MySQL**

 1. Faça o download do *driver* em diretamente no [site do MySQL](http://dev.mysql.com/downloads/connector/j/);

 2. No campo **Select Platform** acione a opção **Platform Independent**;

 3. Clique no botão **Download **ao lado da versão em arquivo ZIP;

 4. Clique em ***No thanks, just start my download*** e será iniciado o download de um arquivo chamado **mysql-connector-java-xx.y.zz.zip**, onde xx.y.zz é a versão atual do *driver*;

 5. Descompacte o arquivo baixado. Será criada uma pasta chamada **mysql-connector-java-xx.y.zz***;*

 6. Nesta pasta há um arquivo chamado*** mysql-connector-java-xx.y.zz-bin.jar***. Esse arquivo é o *driver*.

 - Inicie o serviço do TOTVS ESB. Pode ser feito de três formas:

**1.** Pelo atalho criado ao finalizar a instalação.

![](/download/attachments/331858145/Image%206.jpg?version=1&modificationDate=1516632532000&api=v2)

**2.** Pelos Gerenciamento de Serviços do Sistema Operacional (Windows).

![](/download/attachments/331858145/Image%204.jpg?version=1&modificationDate=1516632552000&api=v2)

**3.** Pelo arquivo de execução do serviço (.bat), localizado em **[Instalação ESB]/bin/startup-esb.bat**

![](/download/attachments/331858145/Image%207.jpg?version=1&modificationDate=1516632646000&api=v2)

Para realizar este procedimento é necessário ter instalado o [fluig Studio](/pages/viewpage.action?pageId=73078179) e o [plugin TOTVS ESB](/pages/viewpage.action?pageId=238035434), como também ter configurado o seu [Licencianamento](/display/fluig/License+Configuration).

**1.** Após iniciar o fluig Studio, abra a perspectiva do **TOTVS ESB;**

**2.** Selecione a aba '**ESB Servers**':

**3.** Clique em **Servers.**

Para saber os passos para a criação de um Server ESB, acesse a página **Instalação do plugin fluig ESB** → Tópico**Instalação TDS + Plugin ESB** → **Passo 9**.

**4.** Faça um duplo clique sobre o**servidor** do TOTVS ESB criado;

**5.** Clique sobre a aba **Database Configuration:**

****

**6. Database**: Selecione o Banco de Dados escolhido;

**7.** **URL**: Configura a URL de conexão com o banco de dados. Cada banco de dados selecionado no campo **Database** possui uma URL específica. Assim, ao selecionar o banco de dados esse campo irá demonstrar a URL modelo solicitando que o usuário complete com informações específicas. Exemplo do MS SQL Server: jdbc:jtds:sqlserver://localhost:1433;DatabaseName=esb

**8.** **User**: Nome do usuário de banco de dados.

**9.** **Password**: Senha do usuário de banco de dados. 

**10.** **Test Connection**: Realiza um teste de conexão com o banco de dados levando em consideração os dados inseridos nos campos anteriores.

**11.** **Salvar**.

 - Reinicie o serviço do TOTVS ESB.

 - **Pronto!**

Observação

Em caso de dúvidas, acesse a documentação completa do TOTVS ESB clicando [aqui](/display/fluig/TOTVS+ESB).


<!-- anchors: ESBComoconfigurarbancodedadosSQLServerparaacessaroTOTVSESBnoprimeiroacessoemvezdoDerby?-Índice, ESBComoconfigurarbancodedadosSQLServerparaacessaroTOTVSESBnoprimeiroacessoemvezdoDerby?-Plataforma, ESBComoconfigurarbancodedadosSQLServerparaacessaroTOTVSESBnoprimeiroacessoemvezdoDerby?-Ocorrência, ESBComoconfigurarbancodedadosSQLServerparaacessaroTOTVSESBnoprimeiroacessoemvezdoDerby?-Solução, samples, samples-1, samples-2, samples-3, samples-4 -->
