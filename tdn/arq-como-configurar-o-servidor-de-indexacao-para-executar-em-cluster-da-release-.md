---
title: "ARQ - Como configurar o Servidor de indexação para executar em cluster da release 1.6.4 à 1.8.1?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=804798298"
scraped_at: "2026-03-09T04:42:59.870Z"
depth: 3
anchors: 24
child_links: 64
---

# ARQ - Como configurar o Servidor de indexação para executar em cluster da release 1.6.4 à 1.8.1?

Atenção

Esta página é válida da atualização **1.6.4** à **1.8.1** do TOTVS Fluig Plataforma.

Caso possua uma atualização **1.6.0** à **1.6.3** acesse: [ARQ - Como configurar o Servidor de indexação para executar em cluster da release 1.6.0 a 1.6.3?](/pages/viewpage.action?pageId=344470997).

Caso possua a **Atualização Crystal Mist (1.8.2)**, acesse: [Servidor de indexação em alta disponibilidade](https://tdn.totvs.com/pages/viewpage.action?pageId=257623206).

**oculto**

Para atualizações 1.5.6 à 1.5.13 acesse: [Como configurar o fluig Indexer para executar em cluster da release 1.5.6 à 1.5.13?](https://tdn.totvs.com/x/zhy7K). *[essa página está arquivada, mas caso seja necessário, solicitar para alguém de Gestão do Conhecimento].*

# Índice

# Introdução

---

As instruções a seguir completarão a instalação de um fluig Indexer em um *cluster* de servidores dedicados, continuando as instruções iniciadas na página [Servidor de indexação dedicado](/pages/viewpage.action?pageId=269425760).

Na maioria dos cenários, uma máquina bem dimensionada executando o serviço de indexação é suficiente para atender as demandas de indexação e busca da plataforma. 

Sendo assim, as configurações apresentadas nesta página são consideradas avançadas, com maior necessidade de administração do ambiente e recomendadas apenas em casos específicos, quando a busca é uma funcionalidade crítica, ou quando se faz necessário garantir a alta disponibilidade deste serviço.

# Redundância

---

O serviço de indexação na plataforma é realizado pelo Apache® Solr. Em um ambiente de alta disponibilidade, são necessárias mais máquinas com este serviço rodando para, no caso de uma delas falhar, ter outra(s) para continuar processando as requisições e, neste caso, o gerenciamento destas requisições será realizado pelo Apache® ZooKeeper.

Para garantir a alta disponibilidade desta funcionalidade, é necessário que exista redundância em ambos os serviços: Apache® Solr para indexação/busca e Apache® ZooKeeper para gerenciamento das configurações de indexação e das requisições. Também é necessário que todas as máquinas do *cluster* sejam acessíveis entre si (estejam na mesma rede).

O princípio de funcionamento do Apache® ZooKeeper é baseado em *quorum*, ou seja, é necessário que a maioria (>50%) dos servidores estejam disponíveis para o processamento das requisições.

Por exemplo, se existirem apenas dois servidores e um deles ficar indisponível, apenas 50% dos servidores estarão saudáveis e, como isso não é a maioria, o *cluster* será incapaz de processar as requisições. Por outro lado, se existirem três servidores e um ficar indisponível, ainda restarão dois saudáveis, ou 66%, atendendo ao critério de maioria. Por esse motivo é recomendado um número ímpar de servidores executando o Apache® ZooKeeper.

# Configurando o Apache® ZooKeeper

---

O primeiro passo é efetuar o *download* da versão 3.4.10 do Apache® ZooKeeper, que pode ser obtida no endereço [https://archive.apache.org/dist/zookeeper/zookeeper-3.4.10/](https://archive.apache.org/dist/zookeeper/zookeeper-3.4.10/)

Após efetuar o *download* e extrair o arquivo compactado no diretório de sua preferência [ZOOKEEPER_HOME] em cada uma das máquinas do *cluster*, é necessário criar, caso ainda não exista, o arquivo [ZOOKEEPER_HOME]/conf/zoo.cfg com o seguinte conteúdo:

**zoo.cfg**

[?](#)

| `tickTime=2000``dataDir=C:``/zookeeper/data``clientPort=2181``initLimit=5``syncLimit=2``server.1=:2888:3888``server.2=:2888:3888``server.3=:2888:3888` |
| --- |

- **tickTime:** corresponde ao tempo em milisegundos entre cada *tick*, sendo que uma das validações para determinar se um nó está disponível é de dois *ticks* (similar ao *ping* para verificar se uma máquina é encontrada na rede). Se dois *ticks* consecutivos não obtiverem resposta, ocorre *timeout* e a máquina é considerada indisponível.
- **dataDir**: aponta o diretório onde serão armazenadas as informações referentes ao*cluster.* No início, este diretório deve estar vazio e com permissão de escrita pelo usuário que irá iniciar o ZooKeeper. **O mapeamento deve ser feito sempre com o caracter '/', mesmo em ambientes windows.**
- **clientPort**: corresponde à porta que será utilizada pelo Apache® Solr.
- **initLimit**: quantidade de tempo (em *ticks*) para que uma máquina com ZooKeeper se conecte e sincronize com a máquina que foi eleita líder. Neste caso, são 5 *ticks* com 2000 milisegundos cada, totalizando 10 segundos. Este valor pode ser incrementado sob demanda se a quantidade de informações gerenciadas pelo ZooKeeper for elevada.
- **syncLimit**: quantidade de tempo (em *ticks*) que uma máquina com ZooKeeper pode estar atrasada em relação à líder. Se uma máquina não conseguir sincronizar com a líder neste intervalo, ela será descartada do *cluster*.
- **server.X**: são os IDs e localização (endereço na rede interna) de todos os nós do *cluster*, e as portas nas quais eles comunicam-se entre si. O ID identifica cada nó do *cluster*, precisando ser referenciado em um arquivo de nome 'myid', dentro do diretório definido na propriedade 'dataDir'. Neste exemplo seria necessário criar o arquivo '/var/lib/zookeeperdata/myid' com o conteúdo '1' (sem aspas) para a máquina configurada na propriedade 'server.1', o mesmo arquivo com conteúdo '2' (sem aspas) para a máquina configurada na propriedade 'server.2', e assim por diante, para cada máquina existente no *cluster*. As portas **2888** e **3888** serão utilizadas para comunicação entre cada uma das máquinas do *cluster* e podem ser alteradas de acordo com a necessidade, desde que informadas na linha correspondete ao servidor em questão, no arquivo 'zoo.cfg' de todas as máquinas do *cluster*.

**Certifique-se que o arquivo "myid" foi criado corretamente em cada máquina (na pasta definida pela propriedade dataDir), tendo o ID numérico do servidor como conteúdo.**

Com essa configuração em cada máquina do *cluster*, basta iniciá-las com o seguinte comando: 

**No Linux**

[?](#)

| `cd` ```/bin``zkServer.sh start zoo.cfg` |
| --- |

**No Windows**

[?](#)

| `cd` ```/bin``zkServer.cmd` |
| --- |

# Configurando o Apache® Solr

---

A instalação do Apache® Solr pode ser realizada através da instalador do fluig no modo caractere, seguindo o passo a passo para instalar somente o servidor de indexação em [Windows](https://tdn.totvs.com/pages/viewpage.action?pageId=274325941#Instala%C3%A7%C3%A3oWindows-ModoCaractere-PassoapassoparainstalarsomenteoServidordeIndexa%C3%A7%C3%A3o) ou [Linux](https://tdn.totvs.com/pages/viewpage.action?pageId=152797808#Instala%C3%A7%C3%A3oLinux-ModoCaractere-PassoapassoparainstalarsomenteoServidordeIndexa%C3%A7%C3%A3o).

Para existir redundância, devem conter no mínimo duas máquinas executando este serviço de indexação, podendo estas serem as mesmas máquinas que executam o serviço de gerenciamento (ZooKeeper) ou máquinas distintas na mesma rede, dependendo da arquitetura desejada de tolerância à falhas.

O Solr possui dois modos de inicialização: Standalone e Cloud. Em um ambiente de alta disponibilidade, é necessário utilizar o modo Cloud, apontando para os servidores onde estão sendo executados os serviços de gerenciamento das configurações e requisições (ZooKeeper). Para isso, basta incluir o parâmetro ZK_HOST no arquivo de configuração do servidor de indexação, conforme exemplo abaixo:

**Inicializando o Solr no modo cloud**

[?](#)

| `ZK_HOST=``":2181,:2181,:2181"``SOLR_HOST=``""` |
| --- |

Neste caso, os endereços <server1_address>, <server2_address> e <server3_address> no item ZK_HOST, são os mesmo informados anteriormente nos parâmetros '**server.X'** do arquivo '**zoo.cfg'**, e a porta 2181 corresponde ao parâmetro **clientPort** informado nesse mesmo arquivo. As aspas devem ser mantidas.

O parâmetro <server> utilizado no item SOLR_HOST se refere ao endereço ou ip do próprio servidor que está configurando. As aspas devem ser mantidas.

A localização deste arquivo de configuração varia de acordo com o sistema operacional, e pode ser verificada na tabela abaixo:

| Sistema Operacional | Arquivo de Configuração | Localização |
| --- | --- | --- |
| Sistema Operacional | Arquivo de Configuração | Localização |
| Linux | fluig_Indexer.in.sh | /etc/default/ |
| Windows | solr.in.cmd | [Instalação fluig Indexer]/solr/bin/ |

**Após esta configuração, é necessário iniciar os serviços do Solr (fluig_Indexer) em todas as máquinas que o executarão para seguir com os próximos passos.**

Atenção!

É importante que o serviço de gerenciamento (ZooKeeper) seja iniciado antes do serviço de indexação (Solr), caso contrário, este último irá considerar que não há serviço de gerenciamento disponível.

# Configurações de indexação

---

Quando o Apache® Solr é executado no modo Cloud, as configurações do índice são armazenadas e gerenciadas pelo Apache® ZooKeeper. Por isso, primeiramente é necessário publicar as configurações utilizadas pela plataforma. Estas configurações são instaladas juntamente com o serviço de indexação e para publicá-las no serviço de gerenciamento (ZooKeeper), pode-se utilizar o comando abaixo: 

**Publicando configurações de indexação da plataforma**

[?](#)

| ```/bin/solr` `zk upconfig -d fluig -n fluig -z :2181,:2181,:2181` |
| --- |

- O parâmetro '**-d** fluig' corresponde ao nome do diretório onde estão armazenadas as configurações utilizadas pela plataforma, instaladas por padrão juntamente com o serviço de indexação, no diretório 'fluig'. O comando irá efetuar o *upload* deste diretório para os endereços informados no parâmetro '**-z**'.
- O parâmetro '**-n** fluig' corresponde ao nome que esta configuração irá receber no serviço de gerenciamento (ZooKeeper) e será utilizado no próximo passo (criação da *collection*).
- O parâmetro '**-z'** informa a lista de serviços de gerenciamento (ZooKeeper) onde serão publicadas estas cofigurações, conforme detalhado anteriormente.

Atenção!

Como existe o ZooKeeper para gerenciar o cluster, este comando precisa ser executando apenas em uma das máquinas do Solr.

# Criação de collection

---

Cada empresa (*tenant*) criada no fluig é mapeada para uma ***collection*** no Apache® Solr. Quando em *cluster*, é necessário definir a quantidade de nós (*shards*) em que o índice será dividido e o fator de replicação (*replicationFactor*) das informações referentes à esta *collection*, através do seguinte comando:

**Criando collection**

[?](#)

| ```/bin/solr` `create_collection -c  -d fluig -shards 1 -replicationFactor 2` |
| --- |

- Informe o código numérico que será usado para a empresa criada no fluig em <ID do Tenant>.
- Neste caso o parâmetro '**-d**' corresponde ao nome da configuração armazenada no ZooKeeper (parâmetro '**-n**' do comando utilizado anteriormente para *upload*).
- Informe o número total de instâncias do Apache® Solr após o parâmetro '-replicationFactor'**.**

Atenção!

Como existe o ZooKeeper para gerenciar o cluster, este comando precisa ser executando apenas em uma das máquinas do Solr, mas**as outras máquinas precisam estar com o Solr em execução**.

# Configurando o fluig para usar o Indexer

---

Se o fluig tiver em **execução**, siga os passos abaixo:

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)

 - Acesse o fluig com o usuário '**wcmadmin**':

![](/download/attachments/804798298/1.JPG?version=1&modificationDate=1699894652430&api=v2)

 - Clique no menu **Painel de Controle → Aba WCM → Configurações do Sistema**:

![](/download/attachments/804798298/2.JPG?version=1&modificationDate=1699894651870&api=v2)

 - Clique na Aba **Parâmetros da Plataforma** e localize as configurações do Servidor de**Indexação**:

![](/download/attachments/804798298/3.jpg?version=1&modificationDate=1699894651970&api=v2)

 - **Configure** da seguinte forma:

   **URL de acesso ao Solr**:  Devem ser informados os endereços dos servidores onde estão sendo executados os serviços de gerenciamento (ZooKeeper), em uma lista de endereços separados por vírgula, da mesma forma que foram informados no parâmetro '**-z**' ao iniciar os serviços de indexação (Solr).

   - **Solr em Servidor Remoto**: Deve estar ativado (ON).

   - **Solr em Cluster**: Deve estar ativado (ON). Esta opção ativa o Solr em *Cluster*, necessária para ambientes em *Cluster*.

![](/download/attachments/804798298/image2018-3-13_10-50-17.png?version=1&modificationDate=1699894652343&api=v2)

 - As alterações nos parâmetros exigem a reinicialização da plataforma. Portanto inicie os serviços na ordem correta.

- Se o fluig estiver **parado**, siga os passos abaixo:

- [Passo 1](#)
- [Passo 2](#)

 - No servidor onde está instalado o fluig, acesse o diretório [Instalação fluig]/repository/wcmdir/config e edite o arquivo **configuration.properties**. Caso o arquivo configuration.properties não exista, crie um novo arquivo com este nome.

  **configuration.properties**

[?](#)

| `totvs/solrURL=10.171.70.21:2181,10.171.70.22:2181,10.171.70.23:2181``totvs/solrCloud=``true``totvs/solrRemote=``true` |
| --- |

 - Modifique o parâmetro '**totvs/solrURL**' informando a lista de endereços dos servidores onde estão sendo executados os serviços de gerenciamento, da mesma forma que foram informados no parâmetro '**-z**' ao iniciar os serviços de indexação (Solr). Deverá ser informado **apenas** o **IP**ou** hostname** do servidor e a **porta**, sem o protocolo e contexto.

O parâmetro '**totvs/solrCloud**' irá condicionar o fluig para ativar a opção do Solr em *Cluster*, necessária para ambientes em *Cluster*.

 - Iniciar os serviços de fluig na ordem correta.


<!-- anchors: ARQComoconfiguraroServidordeindexaçãoparaexecutaremclusterdarelease1.6.4à1.8.1?-Índice, ARQComoconfiguraroServidordeindexaçãoparaexecutaremclusterdarelease1.6.4à1.8.1?-Introdução, ARQComoconfiguraroServidordeindexaçãoparaexecutaremclusterdarelease1.6.4à1.8.1?-Redundância, ARQComoconfiguraroServidordeindexaçãoparaexecutaremclusterdarelease1.6.4à1.8.1?-ConfigurandooApache®ZooKeeper, highlighter_677935, highlighter_211098, highlighter_678815, ARQComoconfiguraroServidordeindexaçãoparaexecutaremclusterdarelease1.6.4à1.8.1?-ConfigurandooApache®Solr, highlighter_265328, ARQComoconfiguraroServidordeindexaçãoparaexecutaremclusterdarelease1.6.4à1.8.1?-Configuraçõesdeindexação, highlighter_656185, ARQComoconfiguraroServidordeindexaçãoparaexecutaremclusterdarelease1.6.4à1.8.1?-Criaçãodecollection, highlighter_841637, ARQComoconfiguraroServidordeindexaçãoparaexecutaremclusterdarelease1.6.4à1.8.1?-ConfigurandoofluigparausaroIndexer, fi, fi-1, fi-2, fi-3, fi-4, fi-5, fi2, fi2-1, highlighter_317604, fi2-2 -->
