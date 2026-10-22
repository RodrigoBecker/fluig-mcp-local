---
title: "Modelo de dimensionamento na release 1.6.5 ou anterior"
url: "https://tdn.totvs.com/display/public/fluig/Modelo+de+dimensionamento+na+release+1.6.5+ou+anterior"
scraped_at: "2026-03-09T04:42:24.744Z"
depth: 3
anchors: 14
child_links: 48
---

# Modelo de dimensionamento na release 1.6.5 ou anterior

Atenção

Esta página foi revisada para considerar as configurações do TOTVS Fluig Plataforma até a **atualização Liquid (1.6.5)**.

Se o seu ambiente possui a atualização 1.7.0 ou superior, acesse: [Modelo de dimensionamento](/display/fluig/Modelo+de+dimensionamento)

Atenção

Os modelos abaixo não deverão sofrer nenhum tipo de alteração. Caso o cliente deseje realizar qualquer tipo de alteração, deverá solicitar a homologação do dimensionamento pelos times responsáveis, entrando em contato com os Canais ou parceiros Fluig. 

- Plataforma rodando em servidores próprios: deverá ser acionado o time **TOTVS Infra Services**através do [TIS.COMERCIAL@totvs.com.br](mailto:TIS.COMERCIAL@totvs.com.br)

- Plataforma rodando em servidores do Cloud TOTVS: deverá ser acionado o time **Cloud Projetos Técnicos**através do [cloud.projetostecnicos@totvs.com.br](mailto:cloud.projetostecnicos@totvs.com.br)

# Índice

# Objetivo

O objetivo deste guia é mostrar um ambiente pré homologado para clientes que desejam instalar e executar o TOTVS Fluig Plataforma em servidores próprios.

# Uso da plataforma

|  |  | P | M | G |
| --- | --- | --- | --- | --- |
| Usuários | Máximo de usuários cadastrados | 20 a 100 | 101 a 300 | 301 a 500 |
| Máximo de usuários conectados | 6 a 35 | 36 a 60 | 61 a 100 |  |
| Documentos | Quantidade máxima de publicações diárias | 300 | 500 | 600 |
| Processos | Quantidade máxima de processos desenhados | 5 | 10 | 15 |
| Média de abertura por hora de solicitações | 50 | 100 | 200 |  |
| Integração com ERP? | Sim | Sim | Sim |  |
| ERP na mesma rede da plataforma TOTVS Fluig?* | Sim | Sim | Sim |  |

# Hardware

Nesta seção estão listadas as definições de *hardware* para os servidores de aplicação e de banco de dados.

### Servidor de aplicação

|  |  | P | M | G |
| --- | --- | --- | --- | --- |
| Memória RAM | Quantidade de memória em GB | 8 GB ¹ | 12 GB ² | 16 GB ³ |
| Processador | Bits | 64 | 64 | 64 |
| Core (vCPU) | 2 | 4 | 4 |  |
| Disco | Velocidade | SAS de 15.000/rpm | SAS de 15.000/rpm | SAS de 15.000/rpm |
| Taxa de transferência Rede SAN | 1 GB/s | 1 GB/s | 1 GB/s |  |
| Espaço requerido para instalação | 12 GB | 12 GB | 12 GB |  |
| Espaço requerido para repositório | (Qtde documentos x Tamanho do documento x Qtde versões) x 1,10 |  |  |  |
| Espaço requerido para diretório de cache ** | (Qtde documentos acessados no dia x Tamanho do arquivo x 6) |  |  |  |
| Espaço requerido para banco de dados | Mínimo de 5 GB de disco para a plataforma - Para o sistema operacional e instalação do SGBD verificar a documentação Servidor de banco de dados |  |  |  |
| Sistema de Arquivos Linux | ext4 | ext4 | ext4 |  |
| Sistema de Arquivos Windows | NTFS ou ReFS | NTFS ou ReFS | NTFS ou ReFS |  |

Observações

¹ Sendo que os 8 GB de memória são dedicados à plataforma TOTVS Fluig, da seguinte forma:

- Java (5 GB) – Configuração realizada no host.xml, armazenado em [diretório_instalação]\appserver\domain\configuration. Dentro do arquivo host.xml, localize a seguinte tag:

[?](#)

| `` |
| --- |

- Abaixo desta tag, altere as seguintes propriedades:

size="1g" - Quantidade inicial de memória alocada

max-size="4g" - Quantidade máxima de memória alocada

-XX:MaxMetaspaceSize=1g

- Sistema Operacional (3 GB);

² Sendo que os 12 GB de memória são dedicados à plataforma, da seguinte forma:

- Java (8 GB) – Configuração realizada no host.xml, armazenado em [diretório_instalação]\appserver\domain\configuration. Dentro do arquivo host.xml, localize a seguinte tag:

[?](#)

| `` |
| --- |

- Abaixo desta tag, altere as seguintes propriedades:

size="2g" - Quantidade inicial de memória alocada

max-size="7g" - Quantidade inicial de memória alocada

-XX:MaxMetaspaceSize=1g

- Sistema operacional (4 GB)

³ Sendo que os 16 GB de memória são dedicados à plataforma, da seguinte forma:

- Java (13 GB) – Configuração realizada no host.xml, armazenado em [diretório_instalação]\appserver\domain\configuration. Dentro do arquivo host.xml, localize a seguinte tag:

[?](#)

| `` |
| --- |

- Abaixo desta tag, altere as seguintes propriedades:

size="4g" - Quantidade inicial de memória alocada

max-size="12g" - Quantidade máxima de memória alocada

-XX:MaxMetaspaceSize=1g

- Sistema operacional (3 GB)

* Para sistemas externos que não estão na mesma VLAN que se encontra a plataforma TOTVS Fluig, deve ser levado em consideração a latência entre as redes, pois isso afeta diretamente a performance da plataforma.

** O *cache* expira e é eliminado após 24 horas de acesso.

*** O atributo name*=*"fluig1" da tag <server> é padrão da plataforma, mas pode ter sido alterado pelo administrador do ambiente.

### Repositório / Storage

Toda a empresa na plataforma terá um volume, que será onde as informações de documentos serão salvos, não só os documentos de ECM mas também dentro de processos BPM. Apesar de suportarmos sistemas de Storage, mapeados no sistema operacional, é necessário observar a latência entre o servidor de aplicação e o Storage. Qualquer variação nesse canal de comunicação causará grande lentidão na plataforma.

Aviso

Devido a grandes latências, não deve ser configurada a plataforma TOTVS Fluig para utilizar repositórios em outros *Datacenters*

### Servidor de banco de dados

#### Recomendações dos fabricantes

| Banco de dados | Descrição | Link das documentações oficiais | Data da consulta |
| --- | --- | --- | --- |
| Oracle | Recomendações de hardware | https://docs.oracle.com/database/121/NTDBI/reqs.htm#NTDBI2689 | 15/08/2016 |
| Recomendações de software | https://docs.oracle.com/database/121/NTDBI/reqs.htm#NTDBI2698 | 15/08/2016 |  |
| SQL Server  | Recomendações de hardware e software | https://msdn.microsoft.com/en-us/library/ms143506(v=sql.120).aspx | 15/08/2016 |
| MySQL 5.7 | Sistemas operacionais suportados | http://www.mysql.com/support/supportedplatforms/database.html | 15/08/2016 |

#### Recomendação do time TOTVS Fluig

| Banco de dados | Descrição |
| --- | --- |
| Oracle | Requisitos mínimo para executar os bancos de dados homologados |
| SQL Server  |  |
| MySQL 5.7 |  |

O servidor de aplicação deve ser separado do servidor de banco de dados, sendo 2 servidores no mínimo.

Para garantir a performance da plataforma os servidores devem ser dedicados:

- O servidor de aplicação deve conter somente o sistema operacional e a instalação da plataforma;

- O servidor de banco de dados deve conter somente o sistema operacional e a instalação do banco de dados utilizado pelo cliente;

# Desenho lógico

Este desenho tem como objetivo mostrar como o ambiente virtual será estruturado.

Este desenho representa fielmente o ambiente que deverá montado no cliente. Se o ambiente do cliente estiver construído num modelo inferior ao exibido neste documento, ele será considerado fora do padrão, e em desacordo com o escopo de atendimento e suporte do produto.

- [fluig sem fluig Viewer](#)
- [fluig com fluig Viewer Cloud](#)

![](/download/attachments/244735798/Ambiente%20Produ%C3%A7%C3%A3o.jpg?version=2&modificationDate=1555592578583&api=v2)

![](/download/attachments/244735798/VIEWER%20CLOUD%20-%20Ambiente%20Produ%C3%A7%C3%A3o.jpg?version=2&modificationDate=1555593900460&api=v2)


<!-- anchors: Modelodedimensionamentonarelease1.6.5ouanterior-Índice, Modelodedimensionamentonarelease1.6.5ouanterior-Objetivo, Modelodedimensionamentonarelease1.6.5ouanterior-Usodaplataforma, Modelodedimensionamentonarelease1.6.5ouanterior-Hardware, Modelodedimensionamentonarelease1.6.5ouanterior-Servidordeaplicação, highlighter_874894, highlighter_429715, highlighter_826755, Modelodedimensionamentonarelease1.6.5ouanterior-Repositório/Storage, Modelodedimensionamentonarelease1.6.5ouanterior-Servidordebancodedados, Modelodedimensionamentonarelease1.6.5ouanterior-Recomendaçõesdosfabricantes, Modelodedimensionamentonarelease1.6.5ouanterior-RecomendaçãodotimeTOTVSFluig, Modelodedimensionamentonarelease1.6.5ouanterior-Desenhológico, desenho_logico -->
