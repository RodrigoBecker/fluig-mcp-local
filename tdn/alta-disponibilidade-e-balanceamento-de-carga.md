---
title: "Alta disponibilidade e balanceamento de carga"
url: "https://tdn.totvs.com/display/public/fluig/Alta+disponibilidade+e+balanceamento+de+carga"
scraped_at: "2026-03-09T04:21:30.987Z"
depth: 3
anchors: 8
child_links: 87
---

# Alta disponibilidade e balanceamento de carga

Fique atento!

Esta página foi revisada para considerar as configurações de server para a atualização **1.6.3** ou **superior**.

Caso possua uma atualização entre **1.6.0** à **1.6.2**, acesse: [Como configurar load balance, alta disponibilidade e tolerância a falha na atualização 1.6 a 1.6.2?](/pages/viewpage.action?pageId=337349115)

# Objetivo

---

O objetivo deste guia é apresentar os procedimentos necessários para a criação de um ambiente TOTVS Fluig com balanceamento de carga, afim de ter uma alta disponibilidade.

# Considerações iniciais

---

Atenção!

Em ambientes com servidores **Windows**, o uso de pastas compartilhadas ou unidades mapeadas está apresentando inconsistências na rotina de *deploy* de alguns componentes. Já estamos avaliando essa situação para que seja corrigida o mais breve possível. No momento, como forma paliativa, é necessário realizar a atualização individualmente de cada servidor e reiniciá-los.

Lembrando que a nossa **recomendação** é utilizar servidores **Linux** em ambientes configurados com **Load balance** para um melhor desempenho.

- O [serviço de indexação](/pages/viewpage.action?pageId=269425760) (Solr) é compartilhado por todas as instâncias, podendo ser único ou [em cluster](/pages/viewpage.action?pageId=257623206);

- O repositório de arquivos da plataforma ([Volume](https://tdn.totvs.com/pages/viewpage.action?pageId=233766796)) deve estar em uma pasta compartilhada por todas as instâncias;

- A pasta de aplicativos "[diretório_instalação]/appserver/apps" deve estar em um diretório compartilhado por todas as instâncias;

- O banco de dados dever ser único para todas as instâncias;

- Todas as instâncias devem estar atualizadas com a mesma versão do TOTVS Fluig.

- Ao utilizar balanceamento de carga em ambientes com HTTPS, a [configuração de HTTPS](https://tdn.totvs.com/pages/viewpage.action?pageId=354472893#Configura%C3%A7%C3%A3oHTTPSdaplataforma-Configura%C3%A7%C3%A3odeHTTPSmanual) deve ser replicada manualmente para todos os servidores do Fluig.

Importante!

- A partir da atualização Snowflake (1.6.3), o controle e sincronização do cache da plataforma é realizado através do banco de dados e é compartilhado entre todos os nós de um cluster.

- É necessário reiniciar todos os servidores depois de finalizar as configurações.

# Preparando ambiente

---

Antes de começar a instalação, é preciso estar com o ambiente preparado.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)

 - Instale o banco de dados e crie uma instância.

 - Escolha uma pasta em um servidor (chamaremos de GLOBAL_DATA_DIR) e torne-a acessível para todas as máquinas. Dentro dessa pasta compartilhada, crie uma nova pasta:  "apps".

Atenção!

Nas versões anteriores a 1.6.0, deverá também ser criada a pasta "wcmdir" dentro da GLOBAL_DATA_DIR.

 - Escolha uma pasta em um servidor (chamaremos aqui de VOLUME_DIR) e torne-a acessível para todas as máquinas. Será usada para salvar os volumes das empresas.

# Configuração

---

- [Fluig em Load Balance com Apache mod_cluster em Linux](/display/fluig/Plataforma+em+load+balance+com+Apache+mod_proxy+em+Linux)

- [Plataforma em load balance com NGINX em Linux](https://tdn.totvs.com/x/SQI6N)

- [Plataforma em load balance com Microsoft NLB](/display/fluig/Plataforma+em+load+balance+com+Microsoft+NLB)

Nota:

Se tiver dificuldades na [Configuração do Fluig Realtime para execução em Load Balance](/pages/viewpage.action?pageId=257623378), clique no *link* para acessar a documentação.


<!-- anchors: Altadisponibilidadeebalanceamentodecarga-Objetivo, Altadisponibilidadeebalanceamentodecarga-Consideraçõesiniciais, Altadisponibilidadeebalanceamentodecarga-Preparandoambiente, samples, samples-1, samples-2, samples-3, Altadisponibilidadeebalanceamentodecarga-Configuração -->
