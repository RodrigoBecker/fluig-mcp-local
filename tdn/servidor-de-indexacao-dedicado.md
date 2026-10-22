---
title: "Servidor de indexação dedicado"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=269425760"
scraped_at: "2026-03-09T04:01:50.177Z"
depth: 2
anchors: 23
child_links: 87
---

# Servidor de indexação dedicado

# Índice

# Introdução

---

Em ambientes onde a quantidade de documentos é consideravelmente grande, é aconselhado a utilização de um servidor dedicado para indexação, podendo inclusive ser configurado um *cluster* com dois ou mais servidores para garantir a disponibilidade do serviço.

# Considerações iniciais

---

O acesso ao repositório de documentos do Fluig ([Volume](https://tdn.totvs.com/x/jP-uDQ)) pelo Servidor de indexação executando em servidor separado, é opcional. Porém, é importante notar que a performance de extração é superior quando o servidor de indexação tem acesso ao repositório. Se este for o caso, todas as instâncias do servidor de indexação deverão ter acesso compartilhado ao repositório.

Também é fundamental que esta pasta compartilhada esteja localizada no endereço informado nas configurações da empresa do Fluig.

# Preparando o ambiente

---

Antes de começar a configuração, siga os passos da atualização correspondente:

- [A partir da 1.6.1](#)
- [1.6.0 ou anteriores](#)

 - Realize a instalação somente do módulo do Servidor de indexação seguindo a documentação conforme seu sistema operacional.

   [Instalação Windows - Modo Caractere](/pages/viewpage.action?pageId=274325941)

   - [Instalação Linux - Modo Caractere](/pages/viewpage.action?pageId=152797808)

 - Realize uma [instalação padrão](/pages/viewpage.action?pageId=257622732) do Fluig no servidor dedicado.

# Configurações do Servidor de indexação

---

O arquivo onde as configurações do Servidor de indexação devem ser realizadas dependem da forma como é feita a inicialização do serviço de indexação.

Por padrão, estes valores já vem preenchidos na instalação. Porém, dependendo do dimensionamento do ambiente, será necessário alterar estas configurações.

| Sistema operacional | Arquivo de configuração | Localização |
| --- | --- | --- |
| Sistema operacional | Arquivo de configuração | Localização |
| Linux | fluig_Indexer.in.sh | /etc/default/ |
| Windows | solr.in.cmd | [Instalação fluig Indexer]/solr/bin/ |

No arquivo de configuração do Solr devem ser efetuados os seguintes ajustes:

- [Memória](#)
- [Java](#)
- [Endereço](#)
- [Porta](#)

**Definindo a quantidade de memória disponível para o Solr**

A configuração padrão do Solr reserva 512 MB de memória, o que pode ser pouco para a maioria dos casos. Para aumentar a memória disponível, remova a marcação de comentário (#) e altere os valores das propriedades **SOLR_HEAP** (Linux) e/ou **SOLR_JAVA_MEM** (Linux / Windows).

  **No Linux**

[?](#)

| `SOLR_HEAP=``"512m"``#SOLR_JAVA_MEM="-Xms512m -Xmx1024m"` |
| --- |

  **No Windows**

[?](#)

| `set` `SOLR_JAVA_MEM=-Xms512m -Xmx1024m` |
| --- |

Importante!

O estouro na memória do Solr pode ocasionar inconsistências no TOTVS Fluig Plataforma, como erros na busca ou em algumas APIs de documento. No entanto, não é possível estabelecer previamente o valor de memória a ser reservado, pois o uso de memória no ambiente muda devido ao número de documentos, extensão dos arquivos e utilização. Por exemplo um arquivo XLS e um CSV serão processados de forma diferente, e o mesmo ocorre com um PDF e um DOC.

Por esse motivo, recomendamos acompanhar o consumo de memória durante os horários de maior utilização da plataforma e realizar o dimensionamento adicionando entre 25 a 50% acima. É uma boa prática reanalisar periodicamente os *logs* ou monitorar com relatórios de métricas para ver se o uso de memória mudou e a memória deve ser aumentada. Para mais detalhes, consulte a documentação do [Solr](https://solr.apache.org/guide/8_8/jvm-settings.html).

**Definindo o caminho do Java**

Se o executável Java não estiver configurado na variável de ambiente *Path* do sistema operacional, configure o caminho do executável através do arquivo de configuração, removendo a marcação de comentário (#) e alterando a variável **SOLR_JAVA_HOME**. Exemplo: "C:\[fluig Indexer]\jdk-64\bin\java.exe".

  **No Linux**

[?](#)

| `#SOLR_JAVA_HOME=""` |
| --- |

    **No Windows**

[?](#)

| `REM``set` `SOLR_JAVA_HOME=` |
| --- |

**Definindo o IP do Servidor de indexação - (Opcional)**

Caso queira fixar o IP do servidor no qual o Solr ouve as conexões, remova a marcação de comentário (# ou REM) e altere a variável **SOLR_HOST**.

  **No Linux**

[?](#)

| `#SOLR_HOST="192.168.1.1"` |
| --- |

  **No Windows**

[?](#)

| `REM``set` `SOLR_HOST=192.168.1.1` |
| --- |

**Alteração da porta [Default: 8983] - (Opcional)**

Caso queira alterar a porta na qual o Solr ouve as conexões, remova a marcação de comentário (# ou REM) e altere a variável **SOLR_PORT**.

  **No Linux**

[?](#)

| `#SOLR_PORT=8983` |
| --- |

   **No Windows**

[?](#)

| `REM``set` `SOLR_PORT=8983` |
| --- |

# Alta disponibilidade

---

Se desejar implementar servidores para o serviço de indexação na configuração Master/Slave, continue a instalação conforme os procedimentos descritos na documentação [Servidor de indexação em alta disponibilidade](/pages/viewpage.action?pageId=257623206).

# Atualizando o Servidor de indexação

---

A atualização do Servidor de indexação deve ser realizada conforme o [Guia de atualização da plataforma](/pages/viewpage.action?pageId=271666186) atentando-se para o item [Atualização com balanceamento de carga, alta disponibilidade e tolerância à falha - *Cluster*](https://tdn.totvs.com/pages/viewpage.action?pageId=271666186#Guiadeatualiza%C3%A7%C3%A3odaplataforma-Atualiza%C3%A7%C3%A3ocombalanceamentodecarga,altadisponibilidadeetoler%C3%A2ncia%C3%A0falha-Cluster).

Após a atualização, inicie o serviço do servidor de indexação dedicado.


<!-- anchors: Servidordeindexaçãodedicado-Índice, Servidordeindexaçãodedicado-Introdução, Servidordeindexaçãodedicado-Consideraçõesiniciais, Servidordeindexaçãodedicado-Preparandooambiente, IndexerConfig, IndexerConfig-1, IndexerConfig-2, Servidordeindexaçãodedicado-ConfiguraçõesdoServidordeindexação, SolrConfig, SolrConfig-1, highlighter_961541, highlighter_715800, SolrConfig-2, highlighter_662032, highlighter_236250, SolrConfig-3, highlighter_246745, highlighter_975004, SolrConfig-4, highlighter_699690, highlighter_873706, Servidordeindexaçãodedicado-Altadisponibilidade, Servidordeindexaçãodedicado-AtualizandooServidordeindexação -->
