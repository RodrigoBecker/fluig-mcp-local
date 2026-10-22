---
title: "ARQ - Como configurar load balance, alta disponibilidade e tolerância a falha na release 1.6.0 a 1.6.2?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=337349115"
scraped_at: "2026-03-09T03:30:05.178Z"
depth: 2
anchors: 12
child_links: 67
---

# ARQ - Como configurar load balance, alta disponibilidade e tolerância a falha na release 1.6.0 a 1.6.2?

Atenção

Esta página foi revisada para considerar as configurações entre a atualização 1.6.0 e 1.6.2.

Caso possua uma atualização 1.6.3 ou superior, acesse: [Balanceamento de carga, Alta disponibilidade e Tolerância a falha - Cluster](/display/fluig/Alta+disponibilidade+e+balanceamento+de+carga)

# Índice

# Plataforma

**Produto:**TOTVS Fluig Plataforma

**Versão:** da 1.6.0 à 1.6.2

# Ocorrência

Como configurar balanceamento de carga,alta disponibilidade e tolerância a falha (cluster) da atualização 1.6.0 à 1.6.2?

# Solução

Veja abaixo os procedimentos necessários para a criação de um ambiente em *cluster*, onde é possível ter balanceamento de carga, alta disponibilidade e tolerância a falha.

## Considerações iniciais

- O [serviço de indexação](/pages/viewpage.action?pageId=269425760) (Solr) é compartilhado por todas as instâncias, podendo ser único ou [em cluster](/pages/viewpage.action?pageId=257623206);

- Um servidor de cache externo deve ser utilizado. Recomenda-se o [Redis](https://tdn.totvs.com/pages/viewpage.action?pageId=205917413).

- O repositório de arquivos da plataforma ([Volume](https://tdn.totvs.com/pages/viewpage.action?pageId=233766796)) deve estar em uma pasta compartilhada por todas as instâncias;

- A pasta de aplicativos "[Instalação fluig]/appserver/apps" deve estar em um diretório compartilhado por todas as instâncias;

- O banco de dados dever ser único para todas as instâncias;

- Todas as instâncias devem estar atualizadas com a mesma versão da plataforma.

## Preparando ambiente

Antes de começar a instalação, é preciso estar com o ambiente preparado.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)

 - Instale o banco de dados e crie uma instância.

 - Instale e configure o servidor de cache externo ([Redis](https://tdn.totvs.com/pages/viewpage.action?pageId=205917413))

 - Escolha uma pasta em um servidor (chamaremos de GLOBAL_DATA_DIR) e torne-a acessível para todas as máquinas. Dentro dessa pasta compartilhada, crie uma nova pasta:  "apps".

Atenção!

Nas versões anteriores a 1.6.0, deverá também ser criada a pasta "wcmdir" dentro da GLOBAL_DATA_DIR.

 - Escolha uma pasta em um servidor (chamaremos aqui de VOLUME_DIR) e torne-a acessível para todas as máquinas. Será usada para salvar os volumes das empresas.

## Tipos de configuração

Há dois modelos de configuração: apenas balanceamento de carga e alta disponibilidade com tolerância a falha.

- Configuração de balanceamento de carga: [Plataforma em Load Balance com Apache mod_cluster em Linux](https://tdn.totvs.com/display/fluig/Fluig+em+Load+Balance+com+Apache+mod_proxy+em+Linux) ou [Plataforma em Load Balance com Microsoft NLB](https://tdn.totvs.com/display/fluig/Fluig+em+Load+Balance+com+Microsoft+NLB).

- Configuração de alta disponibilidade com tolerância a falha: [Plataforma em alta disponibilidade com tolerância a falha](https://tdn.totvs.com/pages/viewpage.action?pageId=269072543).

Caso tiver dificuldades na [Configuração do Realtime para execução em Load Balance](https://tdn.totvs.com/pages/viewpage.action?pageId=257623378) clique no link para acesso a documentação.


<!-- anchors: ARQComoconfigurarloadbalance,altadisponibilidadeetolerânciaafalhanarelease1.6.0a1.6.2?-Índice, ARQComoconfigurarloadbalance,altadisponibilidadeetolerânciaafalhanarelease1.6.0a1.6.2?-Plataforma, ARQComoconfigurarloadbalance,altadisponibilidadeetolerânciaafalhanarelease1.6.0a1.6.2?-Ocorrência, ARQComoconfigurarloadbalance,altadisponibilidadeetolerânciaafalhanarelease1.6.0a1.6.2?-Solução, ARQComoconfigurarloadbalance,altadisponibilidadeetolerânciaafalhanarelease1.6.0a1.6.2?-Consideraçõesiniciais, ARQComoconfigurarloadbalance,altadisponibilidadeetolerânciaafalhanarelease1.6.0a1.6.2?-Preparandoambiente, Samples, Samples-1, Samples-2, Samples-3, Samples-4, ARQComoconfigurarloadbalance,altadisponibilidadeetolerânciaafalhanarelease1.6.0a1.6.2?-Tiposdeconfiguração -->
