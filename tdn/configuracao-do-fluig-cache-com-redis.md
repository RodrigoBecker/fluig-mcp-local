---
title: "Configuração do fluig cache com Redis"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=205917413"
scraped_at: "2026-03-09T04:01:32.085Z"
depth: 2
anchors: 39
child_links: 96
---

# Configuração do fluig cache com Redis

Atenção!

As informações desta página são válidas para as atualizações 1.6.2 e inferiores.

**Mantenha sua plataforma atualizada!** À partir da atualização Snowflake (1.6.3), o controle e sincronização do cache do fluig é realizado através do banco de dados que, além de já ter uma conexão direta com o fluig em casos de instalações simples, também é compartilhado entre todos os nós (cluster) em casos de balanceamento de carga e alta disponibilidade.

Caso possua uma atualização 1.5.5 ou inferior do fluig acesse: [Como configuro o fluig Cache com Redis?](/pages/viewpage.action?pageId=224124188)

# Índice

# Sobre o Redis

---

O Redis é um banco de dados NoSQL *open source* do modelo chave-valor em memória, que possui [licenciamento BSD](http://redis.io/topics/license) e pode ser utilizado como *cache* para o fluig. Ele possui funcionalidades extras como a possibilidade de ser utilizado em *cluster* com tolerância a falhas (*failover*).

Site oficial: [http://redis.io](http://redis.io)

© Redis, *and the*Redis*logo are the trademarks of Salvatore Sanfilippo in the U.S. and other countries*.

# Pré requisito

---

- Ter o Redis instalado na máquina ou realizar o download do instalador nos links abaixo conforme o sistema operacional da máquina. 

# Download do Redis

---

- O *download* do instalador do Redis para Linux pode ser realizado [neste link](http://redis.io/download).

- O *download* do instalador do Redis para Windows pode ser realizado [neste link](https://github.com/MSOpenTech/redis/releases).

# Instalação do Redis em Modo Single-Server

---

O modo *single-server* significa que apenas um processo do Redis está no ar. Mesmo neste modo ele pode atender mais de um servidor fluig, porém será considerado um ponto de falha.

## Instalação do Redis como Serviço em Linux

---

Verifique também a [documentação oficial](https://redis.io/topics/quickstart).

A forma sugerida de instalar o Redis em Linux é compilá-lo a partir dos fontes, pois não há outras dependências além do compilador GCC e da biblioteca libc.

[?](#)

| `wget http:``//download``.redis.io``/redis-stable``.``tar``.gz``tar` `xvzf redis-stable.``tar``.gz``cd` `redis-stable``make``make` `install` |
| --- |

Vamos supor que você já copiou os executáveis *redis-server* e *redis-cli* em /usr/local/bin ou executou o comando *make install.*

Crie os seguintes diretórios:

[?](#)

| `sudo` `mkdir` `/etc/redis``sudo` `mkdir` `/var/redis` |
| --- |

Copie o script de inicialização disponibilizado no diretório utils para /etc/init.d. Sugerimos renomeá-lo com o nome da porta onde você está executando esta instância do Redis.

[?](#)

| `sudo` `cp` `utils``/redis_init_script` `/etc/init``.d``/redis_6379` |
| --- |

Edite o *script* de inicialização. Certifique-se de modificar o REDISPORT de acordo com a porta que você está usando. Tanto o caminho do arquivo pid quanto o nome do arquivo de configuração dependem do número da porta.

[?](#)

| `sudo` `vi` `/etc/init``.d``/redis_6379` |
| --- |

Copie o arquivo de configuração modelo encontrado no diretório raiz da distribuição Redis em /etc/redis/ utilizando o número da porta como nome:

[?](#)

| `sudo` `cp` `redis.conf``/etc/redis/6379``.conf` |
| --- |

Crie um diretório dentro de /var/redis que funcionará como os dados e diretório de trabalho para esta instância Redis:

[?](#)

| `sudo` `mkdir` `/var/redis/6379` |
| --- |

Edite o arquivo de configuração:

- Defina o pidfile para /var/run/redis_6379.pid (modificar a porta se necessário).

- Altere a porta em conformidade. No nosso exemplo não é necessário, pois a porta padrão já é 6379.

- Defina o seu loglevel preferido.

- Defina o arquivo de log para /var/log/redis_6379.log

- Definir o dir para /var/redis/6379 (passo muito importante!)

## Instalação do Redis como Serviço em Windows

---

Verifique também a [documentação oficial](https://raw.githubusercontent.com/MSOpenTech/redis/3.0/Windows%20Service%20Documentation.md).

Execute o seguinte comando:

[?](#)

| `redis-server.exe --service-install --service-name fluigcache redis.windows.conf` |
| --- |

# Configurando o Redis para uso com o fluig

---

### Memória

Procure no arquivo de configuração, o parâmetro *maxmemory* e certifique-se de configurar para o tamanho máximo desejado, caso contrário, podem ocorrer problemas de falta de memória.

[?](#)

| `maxmemory 1g` |
| --- |

Observação

Se estiver sendo utilizada a versão 2.8 do Redis com o Windows, configure também o parâmetro *maxheap*.

### Persistência

Para que o Redis não salve um *snapshot* da memória periodicamente, procure as linhas iniciadas com a palavra *"save"* no arquivo de configuração...

**Exemplo do config padrão para windows**

[?](#)

| `save 900 1``save 300 10``save 60 10000` |
| --- |

...e altere-as para:

[?](#)

| `# save 900 1``# save 300 10``# save 60 10000``save ""` |
| --- |

### Arquivo PID

Para que o Redis grave um arquivo com o PID, defina o seguinte parâmetro:

[?](#)

| `daemonize yes` |
| --- |

# Configurando o fluig para usar o Redis como Cache

---

A configuração do servidor Redis no fluig pode ser realizada das seguintes formas:

- Arquivo configuration.properties, localizado em [Instalação fluig]\repository\wcmdir\config. Deve ser alterada a propriedade cacheServerAddress para "redis:[endereço IP]:[porta]" e o serviço precisa ser reiniciado para que a mudança seja aplicada;

- Alterar o [parâmetro](https://tdn.totvs.com/pages/viewpage.action?pageId=77299889) CACHE_SERVER_ADDRESS [via API](https://api.fluig.com/resource_ConfigurationServiceRest.html);

[?](#)

| `wcm/cacheServerAddress=redis:127.0.0.1` |
| --- |

- Configuração via wcmadmin, caso o fluig já esteja no ar, através do Painel de controle → aba WCM → Configurações do Sistema → aba Parâmetros da Plataforma.

Observação

Essa configuração também pode ser realizada durante a execução do instalador do fluig.

# Configurando o Redis em Ambientes de Alta Disponibilidade com Tolerância a Falhas

---

O Redis usa o modelo Master-Slave com um processo monitor chamado Sentinel. Os passos indicados anteriormente continuam valendo para cada nó do *cluster* Redis.

![](/download/attachments/205917413/RedisSentinel.png?version=1&modificationDate=1445633705000&api=v2)

### Master

O nó Master não necessita de nenhuma configuração adicional além das configurações dos passos anteriores.

### Slaves

Adicione a seguinte configuração (**redis.conf**) em cada nó Slave*:*

[?](#)

| `slaveof  ` |
| --- |

**Exemplo:**

[?](#)

| `slaveof 127.0.0.1 6379` |
| --- |

### Sentinel

O Sentinel oferece um modelo simples e automático de alta disponibilidade (HA) para Redis usando a estratégia de eleição caso o Master venha a falhar. Inicialmente, tem-se uma replicação do Master para um número indeterminado de Slaves.

Um processo Sentinel deve ser adicionado em cada um dos servidores que terão uma ou mais instâncias do Redis para monitorar a execução dos processos e iniciar uma eleição para promover um Slave para Master caso o Master falhe.

Para isso:

- Crie um arquivo redis.sentinel.conf.

- Defina a propriedade daemonize para *"yes"*.

- Defina a propriedade *sentinel monitor* com o nome do *cluster* Redis, informe o IP e porta do Master e o quórum de sentinelas. O quórum é o número mínimo de sentinelas que avaliam que o Master falhou para iniciar uma eleição. É importante usar o valor correto, pois um número inadequado vai impedir a eleição do novo Master.

Template:

[?](#)

| `daemonize yes``sentinel monitor NOME_DO_CLUSTER IP_MASTER PORTA_MASTER QUORUM``sentinel down-after-milliseconds NOME_DO_CLUSTER 10000` |
| --- |

**Exemplo:**

[?](#)

| `daemonize yes``sentinel monitor fluigcache 127.0.0.1 6379 1``sentinel down-after-milliseconds fluigcache 10000` |
| --- |

Observação

 Durante uma execução em *cluster, o *Sentinel modifica os arquivos de configuração, portanto eles devem ter permissão de escrita.** **

# Instalando o Sentinel como serviço no Windows

---

O executável do Sentinel é o mesmo do servidor do Redis, exceto pelo parâmetro "--sentinel".

[?](#)

| `redis-server.exe --service-install --service-name redissentinel redis.sentinel.conf --sentinel` |
| --- |

# Executar o Redis Sentinel em Servidor Linux

---

A partir da versão 3 o redis-sentinel é instalado por padrão junto do Redis. Para executar o Sentinel:

[?](#)

| `redis-sentinel /etc/redis/sentinel.conf` |
| --- |

Sendo que **/etc/redis/sentinel.conf** é o arquivo de configuração padrão.

# Configurando o fluig para usar o Redis Cluster com Sentinel como cache

---

Atenção!

A configuração do Redis com o fluig foi depreciada a partir da versão 1.6.2 da plataforma. Caso possua uma atualização superior à essa acesse: [Configurações da plataforma](https://tdn.totvs.com/x/7gNbDw). Ou se possuir uma atualização inferior à essas acesse: [Como posso ajustar as configurações da plataforma nas releases 1.5.13 e inferiores?](https://tdn.totvs.com/x/JppbDQ)

Abra o arquivo configuration.properties, localizado em [Instalação fluig]\repository\wcmdir\config e modifique a propriedade cacheServerAddress, ou [use a propriedade via API CACHE_SERVER_ADDRESS](https://tdn.totvs.com/pages/viewpage.action?pageId=224107046). O formato da configuração é "redisc:[nome_cluster]:[IP_Sentinel]:[Porta_Sentinel],[IP_Sentinel_2]:[Porta_Sentinel_2], etc.".

[?](#)

| `wcm/cacheServerAddress=redisc:NOME_DO_CLUSTER:IP_SENTINEL:PORTAL_SENTINEL` |
| --- |

**Exemplo:**

[?](#)

| `wcm/cacheServerAddress=redisc:fluigcache:127.0.0.1:26379` |
| --- |

Também é possível realizar esta configuração via wcmadmin, caso o fluig já esteja no ar, através do Painel de controle → aba WCM → Configurações do Sistema → aba [Parâmetros da Plataforma](https://tdn.totvs.com/x/vLnxF).

Observação

Essa configuração também pode ser realizada durante a execução do instalador do fluig.


<!-- anchors: ConfiguraçãodofluigcachecomRedis-Índice, ConfiguraçãodofluigcachecomRedis-SobreoRedis, ConfiguraçãodofluigcachecomRedis-Prérequisito, ConfiguraçãodofluigcachecomRedis-DownloaddoRedis, ConfiguraçãodofluigcachecomRedis-InstalaçãodoRedisemModoSingle-Server, ConfiguraçãodofluigcachecomRedis-InstalaçãodoRediscomoServiçoemLinux, highlighter_914830, highlighter_967267, highlighter_241135, highlighter_347926, highlighter_953704, highlighter_925479, ConfiguraçãodofluigcachecomRedis-InstalaçãodoRediscomoServiçoemWindows, highlighter_176269, ConfiguraçãodofluigcachecomRedis-ConfigurandooRedisparausocomofluig, ConfiguraçãodofluigcachecomRedis-Memória, highlighter_869469, ConfiguraçãodofluigcachecomRedis-Persistência, highlighter_206405, highlighter_928019, ConfiguraçãodofluigcachecomRedis-ArquivoPID, highlighter_303412, ConfiguraçãodofluigcachecomRedis-ConfigurandoofluigparausaroRediscomoCache, highlighter_598485, ConfiguraçãodofluigcachecomRedis-ConfigurandooRedisemAmbientesdeAltaDisponibilidadecomTolerânciaaFalhas, ConfiguraçãodofluigcachecomRedis-Master, ConfiguraçãodofluigcachecomRedis-Slaves, highlighter_795761, highlighter_913899, ConfiguraçãodofluigcachecomRedis-Sentinel, highlighter_911774, highlighter_986649, ConfiguraçãodofluigcachecomRedis-InstalandooSentinelcomoserviçonoWindows, highlighter_451809, ConfiguraçãodofluigcachecomRedis-ExecutaroRedisSentinelemServidorLinux, highlighter_722573, ConfiguraçãodofluigcachecomRedis-ConfigurandoofluigparausaroRedisClustercomSentinelcomocache, highlighter_941105, highlighter_21567 -->
