---
title: "Conversão TOTVS ECM para plataforma TOTVS Fluig"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=257622952"
scraped_at: "2026-03-09T04:54:43.341Z"
depth: 3
anchors: 14
child_links: 61
---

# Conversão TOTVS ECM para plataforma TOTVS Fluig

Atenção

Esta página foi revisada para considerar as configurações de servidor do TOTVS Fluig Plataforma para a **atualização 1.6 ou superiores**.

- [Objetivo](https://tdn.totvs.com/pages/viewpage.action?pageId=257622952#Convers%C3%A3oTOTVSECMparaFluig-Objetivo)
- [Pré-requisitos](https://tdn.totvs.com/pages/viewpage.action?pageId=257622952#Convers%C3%A3oTOTVSECMparaFluig-Pr%C3%A9-requisitosantes)
- [Conversão para o Fluig](https://tdn.totvs.com/pages/viewpage.action?pageId=257622952#Convers%C3%A3oTOTVSECMparaFluig-Convers%C3%A3oparaoFluig)[Iniciando o Fluig](https://tdn.totvs.com/pages/viewpage.action?pageId=257622952#Convers%C3%A3oTOTVSECMparaFluig-IniciandooFluig)[Sobre a reinicialização do serviço](https://tdn.totvs.com/pages/viewpage.action?pageId=257622952#Convers%C3%A3oTOTVSECMparaFluig-Sobreareinicializa%C3%A7%C3%A3odoservi%C3%A7o)

[Conversão](https://tdn.totvs.com/pages/viewpage.action?pageId=257622952#Convers%C3%A3oTOTVSECMparaFluig-Convers%C3%A3o)[Pós-conversão ou migração](https://tdn.totvs.com/pages/viewpage.action?pageId=257622952#Convers%C3%A3oTOTVSECMparaFluig-P%C3%B3s-convers%C3%A3ooumigra%C3%A7%C3%A3o)

# Objetivo

---

O objetivo deste guia é instruir os administradores de sistemas que desejam realizar a conversão do TOTVS ECM para a plataforma TOTVS Fluig.

# Pré-requisitos

---

Importante

Para que o processo de conversão seja realizado com sucesso, é necessário que o TOTVS ECM esteja na versão mais atual dos pacotes de atualização, disponível no [Portal de Clientes](https://suporte.totvs.com). Caso o ambiente esteja desatualizado é recomendado realizar a atualização e posteriormente prosseguir com as etapas para conversão.

Antes de realizar a conversão é necessário realizar alguns procedimentos:

**1)** Realize as cópias de segurança, conforme orientações abaixo:

A fim de preservar os recursos e dados do TOTVS ECM caso ocorra algum erro durante o processo de conversão é importante realizar uma cópia de segurança dos seguintes itens:

- **Recursos utilizados no TOTVS ECM:** como Fichários, Datasets customizados, Processos workflow, Eventos de fichários, Eventos de Processos, Eventos Globais, Serviços, Aplicativos, Parâmetros Gerais, Templates de e-mail, Mecanismos de Atribuição, e demais customizações utilizadas no TOTVS ECM. É importante exportar o máximo destes recursos, para melhor manipulação durante o processo de homologação após a conversão do TOTVS ECM para o Fluig além de possibilitar a importação no Fluig caso necessário posteriormente.

- **Banco de dados:** Importante possuir uma cópia de segurança do banco de dados para caso seja necessário a restauração do último estado válido da instalação do TOTVS ECM. Se desejar manter a instalação antiga é válido realizar a duplicação da base de dados de forma que o mesmo conteúdo assuma um novo nome. Por exemplo, a base de dados do TOTVS ECM, por padrão chama-se **totvsecm**, enquanto para o Fluig são nomeadas como **fluig**.

- **Volume:** Caso deseje-se manter a instalação antiga do TOTVS ECM, após a conversão os volumes cadastrados no TOTVS ECM ainda serão utilizados. Com isto, os dados nos mesmos poderão sofrer mudanças na utilização do Fluig, e este compartilhamento entre os dois sistemas pode causar conflitos e erros na utilização. Para evitar esta situação é necessária a cópia dos volumes para um novo local. A cópia de segurança dos volumes também é necessário para caso seja necessário a restauração do último estado válido da instalação do TOTVS ECM.

Realize as cópias de segurança acima e, caso uma nova base de dados for utilizada, restaure a cópia de segurança da base de dados sobre esta nova base.

**2)** Certifique-se de que o Fluig será disponibilizado no mesmo endereço IP e porta HTTP/HTTPS que a versão atual do TOTVS ECM. Caso não for utilizar estes mesmos critérios de acesso inicie o serviço TOTVS ECM, para esta nova base de dados, se for o caso.** **Ao iniciar o serviço do TOTVS ECM, acesse o cadastro das empresas do TOTVS ECM e altere as configurações de acesso, sendo os campos **Servidor Web** e **Porta Web**, como ilustrado abaixo.

****

**Parâmetros da Empresa no ECM.**

**3)** Caso deseje alterar a localização dos volumes, é importante que a mudança seja feita antes da conversão. Para isso, acesse a aba Volumes e realize as alterações necessárias no caminho do diretório do volume.

A migração fará a conversão completa do ECM para o Fluig, ou seja, todos os documentos que estiverem no ECM serão migrados para o Fluig. Se desejar, faça também uma verificação no ECM para remover o que não precisa, antes de migrar para o Fluig.

![](/download/attachments/257622952/volume.png?version=1&modificationDate=1474467996000&api=v2)

**Volume(s) de dados do TOTVS ECM.**

**4)** Confira a quantidade de** colaborações ativos** no TOTVS ECM. 

Importante!

O **número de colaboradores ativos** no TOTVS ECM não pode ser superior ao **número de usuários disponíveis na licença** do Fluig cadastrada no License Server. Se o número de usuários no ECM for maior do que as licenças adquiridas para a plataforma Fluig, será necessário desativar os usuários no ECM primeiro, via tela. Se necessário, pode ser utilizado o recurso de Transferir pendências, para os usuários que são responsáveis por algum processo/documento.

Para entender melhor como funciona o licenciamento da plataforma, consulte [essa documentação](/display/fluig/Licenciamento+da+plataforma).

**5)** Certifique-se que todos os colaboradores cadastrados no TOTVS ECM atendam os seguintes requisitos:

**a)** O colaborador não pode possuir login, e-mail ou matrícula duplicada;

**b)** A matrícula do colaborador deve possuir somente caracteres alfanuméricos, ponto (.), hífen ( - ) e traço inferior (_);

**c)** O login do colaborador deve possuir somente caracteres alfanuméricos, ponto (.), hífen ( - ) e traço inferior (_);

**d)** O nome do colaborador não pode ultrapassar o limite máximo de 255 caracteres;

**e)** O e-mail do colaborador deve ser um e-mail válido;

**f)** A senha do colaborador não pode ser em branco;

Caso algum dos colaboradores não atenda aos requisitos informados é necessário adequá-lo a estes requisitos.

**6)** Remova qualquer evento global ou outra customização que manipule a publicação de documentos ou outras funcionalidades do TOTVS ECM. Por exemplo: um evento global *beforeDocumentPublisher* que não permita publicar na pasta raiz.

**7)** Remova todos os agendamentos de tarefas cadastrados no TOTVS ECM.

**8)** Desconecte e pare o serviço do TOTVS ECM.

**9)** Providencie o instalador para a** atualização 1.5.13 (última EP)** do Fluig.

Importante

**A conversão somente pode ser realizada até a atualização 1.5.13 (última EP) do Fluig**, para posteriormente aplicar a atualização mais recente da plataforma.****

É possível fazer o download do instalador através do nosso portal [Suporte fluig](https://suporte.totvs.com/), dentro da Central de Downloads, clicando [aqui](https://suporte.totvs.com/portal/p/10098/suporte-fluig-download#000035/). 

Caso o banco de dados do TOTVS ECM seja Microsoft SQL Server com agrupamento de caracteres (*collation*) diferente do padrão do Fluig "**Latin1_General_CI_AS**", será necessário seguir os procedimentos descritos em [Migração e Conversão de Collation (SQL Server)](/pages/viewpage.action?pageId=118882384).

# Conversão para o Fluig

---

Após executados os procedimentos acima, pode ser realizada a instalação do Fluig (**atualização 1.5.13-última EP**) conforme instruções disponíveis no guia [Instalação Fluig (Instalador) - Windows](https://tdn.totvs.com/pages/viewpage.action?pageId=257622840) ou  [Instalação Fluig (Instalador) - Linux](https://tdn.totvs.com/pages/viewpage.action?pageId=257622802).

## Iniciando o Fluig

---

Para o processo de migração, quando o Fluig é inicializado sobre uma base de dados utilizada pelo TOTVS ECM, as estruturas das tabelas deste último permanecem da mesma forma. Entretanto, o Fluig irá criar suas próprias tabelas, separadamente. 

Importante

É obrigatório que o usuário utilizado para inicializar o Fluig, tanto pelo modo console quanto como serviço do sistema operacional, possua permissão de modificação nas pastas da instalação e volume(s) utilizado(s) pelos Fluig.

Verifique os modos de inicialização abaixo e escolha aquele que deseja utilizar para iniciar o Fluig:

- [Modo Console (Windows)](#)
- [Modo Serviço (Windows)](#)
- [Modo Console (Linux)](#)

 - Execute o arquivo [Instalação_fluig]\jboss\bin\standalone.bat.

 - Uma janela do Prompt de Comando será aberta exibindo as informações da inicialização e mensagens do servidor de aplicação. Quando houver necessidade de parar a execução do sistema pressione as teclas CTRL+C.

 - Acesse os Serviços do Windows através do Painel de Controle → Sistema → Ferramentas Administrativas ou execute o comando **services.msc** no **Prompt de Comando**.

 - Localize o serviço **fluig** e clique sobre ele com o botão direito do *mouse*. Selecione a opção **Iniciar**.

![](/download/attachments/257622952/servico.png?version=2&modificationDate=1493847193000&api=v2)

**Janela de Serviços do Windows. Serviço do fluig selecionado e inicializado.**

 - A inicialização pode ser acompanhada através do *log* armazenado em [Instalação_fluig]\jboss\standalone\log\server.log. Quando esse arquivo possuir cerca de 1,0 MB e contiver a inscrição abaixo, o Fluig está pronto para ser utilizado. O tempo para inicialização do serviço pode variar de acordo com os recursos do servidor em que o Fluig será executado.

  **server.log**

[?](#)

| `HH:MM:SS,mmm INFO [com.fluig.startup.service.fluigStartupBean] (EJB default - x) ===============================================``HH:MM:SS,mmm INFO [com.fluig.startup.service.fluigStartupBean] (EJB default - x) == fluig is up and running right now. ==``HH:MM:SS,mmm INFO [com.fluig.startup.service.fluigStartupBean] (EJB default - x) ===============================================` |
| --- |

 - Execute o arquivo [Instalação_fluig]\jboss\bin\standalone.sh.

 - O *log* de inicialização, que contém as informações e mensagens do servidor de aplicação, será exibido no terminal. Quando houver necessidade de parar a execução do sistema, pressione as teclas CTRL+C.

### Sobre a reinicialização do serviço

---

No caso de uma nova inicialização do serviço ou falhas na reinicialização, pode ser necessário encerrar os processos do [OpenOffice.org](http://OpenOffice.org).

1. Clique com o botão direito sobre a barra de tarefas do Windows e selecione a opção **Iniciar o Gerenciador de tarefas** (ou use o atalho do teclado CTRL + SHIFT + ESC).
2. Localize na coluna "Nome da Imagem" os processos **soffice.bin**. Confirme que tratam-se dos processos referentes ao Fluig através da coluna "Nome do Caminho da Imagem", que exibe o diretório de origem do processo.
3. Caso afirmativo, selecione os processos e clique sobre o botão **Finalizar Processo** no canto inferior da janela para encerrá-los.

![](/download/attachments/257622952/Image%205.jpg?version=1&modificationDate=1493847824000&api=v2)

**Processo soffice.bin*32 em execução no Gerenciador de Tarefas**

## Conversão

---

Importante

- Este é um processo irreversível, pois o Fluig irá realizar a leitura das tabelas do TOTVS ECM e transportar seus dados para as respectivas tabelas do Fluig. Algumas tabelas do TOTVS ECM serão excluídas neste processo de conversão.

- Durante o processo podem ocorrer falhas que comprometam a base de dados. Caso isto aconteça, utilize a cópia de segurança criada anteriormente para restaurar a base de dados.

- No caso de utilização do banco de dados SQL Server, atente-se para a documentação de [configuração do banco de dados SQL Server](https://tdn.totvs.com/pages/viewpage.action?pageId=257623499).

- Os documentos do tipo **Portal** e **PortalPage** não serão convertidos. Sua conversão deverá ser realizada manualmente, ou seja, será necessário criar as páginas manualmente no Fluig, através do item **Minhas páginas**presente na guia **Painel de** **Controle**, aba **WCM**.

Acompanhe os passos a seguir para iniciar a conversão:

**1)** Após inicializar o Fluig, é necessário realizar login utilizando o usuário **wcmadmin**e senha **adm**;

**2)** Depois de feito o login, acessar o item de menu **Painel de controle** e acionar a aba **ECM**. Nesta aba, acessar a opção **Conversor de Base;**

**3)** Com isto, será realizada uma validação da base para verificar se a conversão pode ser iniciada;

![](/download/attachments/257622952/image2016-10-19%207%3A23%3A4.png?version=1&modificationDate=1476872608000&api=v2)**Processo de conversão da base TOTVS ECM para Fluig.**

**4)** Caso não sejam encontradas inconformidades, deve-se clicar em **Converter;**

**5)** Ao clicar em **Converter**é exibida uma mensagem indicando o inicio da conversão;

![](/download/attachments/257622952/image2016-10-19%207%3A26%3A53.png?version=1&modificationDate=1476872836000&api=v2)**Processo de conversão Iniciado.**

**6)** Para acompanhar o processo de conversão, deve ser acessado o arquivo [Instalação_fluig]\jboss\standalone\log\conversion.log;

**7)** A frase "Conversão finalizada com sucesso!!!" apresentada no final do arquivo de *log* indica o término do processo de conversão;

**8)** Neste momento é necessário reiniciar o serviço **Fluig**, para que os updates de banco de dados sejam efetuados. Isto acontece pois o processo de conversão adiciona novas estruturas de banco de dados, bem como alterando e eliminando algumas pré-existentes.

**9)** A partir deste momento é possível acessar o Fluig com os usuários e senhas que existiam no TOTVS ECM. Para gerenciar empresas é utilizado o usuário wcmadmin, e não mais o usuário wdkAdmin.

![](/download/attachments/257622952/image2016-10-19%207%3A24%3A8.png?version=1&modificationDate=1476872671000&api=v2)**Tela de login do Fluig.**

****

## Pós-conversão ou migração

---

Quando um processo de conversão é realizado, alguns procedimentos são necessários para que os serviços do Fluig possam executar suas atividades corretamente. São recomendados os seguintes passos:

- Indexação do(s) Volume(s).

- Atualização dos serviços de dados do TOTVS ECM. Isto é, a modificação destes serviços para que sejam recriados os *stubs*, no caso de alteração das URLs dos *Web Services* utilizados.

- Para migrações em que o TOTVS ECM era integrado ao TOTVS EMS/HCM, deve ser verificado se na pasta [Instalação_fluig]\jboss\modules\com, encontram-se os diretórios progress\main com as bibliotecas (JAR) do respectivo Progress.

Atenção

As bibliotecas citadas acima não correspondem ao JAR gerado pelo ProxyGen (Proxy Generator), mas sim às bibliotecas do antigo ambiente cadastrado no TOTVS ECM. Este procedimento é necessário, pois nesta versão do produto não existe mais tal cadastro de ambientes e indicação das bibliotecas. O servidor de aplicação requer que estas classes Java comuns do Progress sejam inicializadas como um módulo do servidor de aplicação.

Dentro desta pasta, junto às bibliotecas, deve existir um arquivo chamado "module.xml". Todas estas bibliotecas devem ser relacionadas em seu conteúdo. Lembrando que o arquivo deve ser salvo com a codificação UTF-8 (sem BOM).

**Modelo do arquivo module.xml**

[?](#)

| ```````````````` `````````````````````````````````````````````````` |
| --- |

Alerta

Depois de realizada esta configuração é obrigatória a reinicialização do Fluig para que estas bibliotecas sejam carregadas no *classpath* do servidor de aplicação. Até que isto seja realizado, as operações irão retornar um erro como "JavaException: java.lang.ClassNotFoundException: com.progress.open4gl.ProDataGraphHolder" ou outra classe, na tentativa de criar um objeto dentro do *package**com.progress.**.

Tratamento alternativo

Uma forma de permitir a utilização destas *classes* pelo *proxy* gerado é incluir o conteúdo destas bibliotecas dentro do pacote deste *proxy*, isto é, os arquivos do tipo e extensão JAR são arquivos compactados como os do tipo ZIP. Cada uma destas bibliotecas pode ser aberta por seu aplicativo de compactação de arquivos preferido (WinZIP, WinRAR, 7-ZIP, dentre outros) e seu conteúdo copiado para dentro do arquivo JAR do *proxy*. Somente as pastas e seu conteúdo “META-INF” devem ser ignoradas, não copiadas.

- Adicione novamente os eventos globais ou outras customizações que foram removidas antes de iniciar a conversão;

- Cadastre novamente os agendamentos de tarefas removidos antes de iniciar a conversão, caso os mesmos ainda sejam necessários;

- Gere as imagens dos diagramas de processo, acessando o **Painel de Controle** da cada empresa, aba **Processos →** **Gerador de imagem de processo**;

- Se ao acessar o Fluig, ocorrer o direcionamento para o [endereço]:[porta] que eram do TOTVS ECM, isso significa que não foi alterado o endereço de acesso antes da conversão (conforme mencionado na sessão **Pré-requisitos**)** **e portanto será necessário alterá-lo no Fluig. Para isso, acesse com o usuário **wcmadmin** e navegue para o**Painel de****Controle**, aba **WCM**, item **Configurações do Sistema.**

- Em alguns desenvolvimentos no ECM utilizava-se **jdbc/webdeskDS** para conexão com o banco de dados. Para o correto funcionamento no Fluig, é necessário utilizar **jdbc/FluigDSRO**, ou seja, desenvolvimentos que estão no formato antigo devem ser atualizados. Abaixo é exibido um exemplo de utilização em *dataset* desenvolvido sobre a plataforma.

[?](#)

| 123456789101112131415161718192021222324252627282930 | `function` `createDataset(fields, constraints, sortFields) {````var` `query =``"SELECT login,email FROM fdn_usertenant LIMIT 100"``;````var` `dataSource =``"jdbc/FluigDSRO"``;````var` `newDataset = DatasetBuilder.newDataset();````var` `ic =``new` `javax.naming.InitialContext();````var` `ds = ic.lookup(dataSource);``` ```try` `{````var` `conn = ds.getConnection();````var` `stmt = conn.createStatement();````var` `rs = stmt.executeQuery(query);``` ```newDataset.addColumn(``"Login"``);````newDataset.addColumn(``"Email"``);``` ```while` `(rs.next()) {````newDataset.addRow([ rs.getString(``"login"``), rs.getString(``"email"``) ]);````}``` ```}``catch``(e) {````newDataset.addColumn(``"erro"``);````newDataset.addRow([e.message]);````} finally {````if``(rs !=``null``) rs.close();````if``(stmt !=``null``) stmt.close();````if``(conn !=``null``) conn.close();````}``` ```return` `newDataset;``}` |
| --- | --- |

Importante

"É necessário **atualizar o sistema para última liberação da versão 1.6.5** para que não ocorra inconsistências de dados e arquivos e depois atualizar para a plataforma para a release mais recente. Seus processos e formulários também precisam revistos e de preferência, adaptados para os padrões do [fluig Style Guide](/display/fluig/Guia+de+Estilos).

Fique atento!

Confira as atualizações já liberadas e as datas futuras de liberações do Fluig acessando a página de [Atualização Fluig](https://tdn.totvs.com/pages/viewpage.action?pageId=73078235). Veja as novidades de cada atualização acessando a página de [Release Notes](http://tdn.totvs.com.br/x/4gGzBQ).


<!-- anchors: ConversãoTOTVSECMparaplataformaTOTVSFluig-Objetivo, ConversãoTOTVSECMparaplataformaTOTVSFluig-Pré-requisitosantes, ConversãoTOTVSECMparaplataformaTOTVSFluig-ConversãoparaoFluig, ConversãoTOTVSECMparaplataformaTOTVSFluig-IniciandooFluig, samples, samples-1, samples-2, highlighter_315173, samples-3, ConversãoTOTVSECMparaplataformaTOTVSFluig-Sobreareinicializaçãodoserviço, ConversãoTOTVSECMparaplataformaTOTVSFluig-Conversão, ConversãoTOTVSECMparaplataformaTOTVSFluig-Pós-conversãooumigração, highlighter_302331, highlighter_155053 -->
