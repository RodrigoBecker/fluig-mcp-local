---
title: "Configuração Redis para uso do Load balance Realtime"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=555277701"
scraped_at: "2026-03-09T04:02:43.695Z"
depth: 2
anchors: 34
child_links: 81
---

# Configuração Redis para uso do Load balance Realtime

# Sobre o Redis

---

O Redis é um banco de dados NoSQL *open source* do modelo chave-valor em memória, que possui [licenciamento BSD](http://redis.io/topics/license) e pode ser utilizado como *cache* para o TOTVS Fluig Plataforma. Ele possui funcionalidades extras como a possibilidade de ser utilizado em *cluster* com tolerância a falhas (*failover*).

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

O modo *single-server* significa que apenas um processo do Redis está no ar. Mesmo neste modo ele pode atender mais de um servidor Fluig, porém será considerado um ponto de falha.

## Instalação do Redis como Serviço em Linux

---

Verifique também a [documentação oficial](https://redis.io/topics/quickstart).

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)
- [Passo 6](#)
- [Passo 7](#)
- [Passo 8](#)

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

 - Procurar pelo parâmetro **bind** onde deve estar: bind 127.0.0.1 

Altere esta linha para o IP externo de acesso para as instâncias do RealTime, exemplo :

Caso o IP da máquina seja 192.168.0.19 fica:

bind 192.168.0.19 127.0.0.1

Configuração

Caso não seja feito o bind para acesso dos servidor externo (máquinas que possuem a instalação do RealTime) as instâncias do Realtime não irão funcionar.

Importante

No arquivo de configuração por padrão a proteção de acesso está ativa, como configuramos o bind direto para o IP, este parâmetro deve ser setado para no:

protected-mode no

Após feitas as alterações:

Para subir o Redis no Linux execute o comando abaixo:

[?](#)

| `sudo /etc/init.d/redis_6379 start` |
| --- |

Após subir, verifique no arquivo de log se não ocorreu nenhum erro: /var/log/redis_6379.log

Para parar o serviço, execute o comando:

[?](#)

| `sudo /etc/init.d/redis_6379 stop` |
| --- |

## Instalação do Redis como Serviço em Windows

---

Verifique também a [documentação oficial](https://raw.githubusercontent.com/MSOpenTech/redis/3.0/Windows%20Service%20Documentation.md).

Execute o seguinte comando:

[?](#)

| `redis-server.exe --service-install --service-name fluigcache redis.windows.conf` |
| --- |

# Configurando o Redis para uso com o Fluig

---

- [Passo 1 - Memória](#)
- [Passo 2 - Persistência](#)
- [Passo 3 - Arquivo PID](#)
- [Passo 4 - Reiniciar serviços](#)

Procure no arquivo de configuração, o parâmetro *maxmemory* e certifique-se de configurar para o tamanho máximo desejado, caso contrário, podem ocorrer problemas de falta de memória.

[?](#)

| `maxmemory 1g` |
| --- |

Observação

Se estiver sendo utilizada a versão 2.8 do Redis com o Windows, configure também o parâmetro *maxheap*.

Para que o Redis não salve um *snapshot* da memória periodicamente, procure as linhas iniciadas com a palavra *"save"* no arquivo de configuração:

  **Exemplo do config padrão para Windows**

[?](#)

| `save 900 1``save 300 10``save 60 10000` |
| --- |

Altere-as para:

[?](#)

| `# save 900 1``# save 300 10``# save 60 10000``save ""` |
| --- |

Para que o Redis grave um arquivo com o PID, defina o seguinte parâmetro:

[?](#)

| `daemonize yes` |
| --- |

Após efetuar as configurações para uso no servidor Fluig, é necessário parar e subir o serviço do Redis, para que sejam aplicadas as configurações.


<!-- anchors: ConfiguraçãoRedisparausodoLoadbalanceRealtime-SobreoRedis, ConfiguraçãoRedisparausodoLoadbalanceRealtime-Prérequisito, ConfiguraçãoRedisparausodoLoadbalanceRealtime-DownloaddoRedis, ConfiguraçãoRedisparausodoLoadbalanceRealtime-InstalaçãodoRedisemModoSingle-Server, ConfiguraçãoRedisparausodoLoadbalanceRealtime-InstalaçãodoRediscomoServiçoemLinux, Linux, Linux-872616687, highlighter_55662, Linux-872616688, highlighter_304433, Linux-872616689, highlighter_430876, Linux-872616690, highlighter_998701, Linux-872616691, highlighter_950059, Linux-872616692, highlighter_441140, Linux-872616693, Linux-872616694, highlighter_220082, highlighter_689421, ConfiguraçãoRedisparausodoLoadbalanceRealtime-InstalaçãodoRediscomoServiçoemWindows, highlighter_501614, ConfiguraçãoRedisparausodoLoadbalanceRealtime-ConfigurandooRedisparausocomoFluig, Fluig, Fluig-1483799769, highlighter_820997, Fluig--28073151, highlighter_499059, highlighter_641959, Fluig--1684342026, highlighter_364112, Fluig-1256509553 -->
