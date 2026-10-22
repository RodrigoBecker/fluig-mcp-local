---
title: "Modelo de dimensionamento"
url: "https://tdn.totvs.com/display/public/fluig/Modelo+de+dimensionamento"
scraped_at: "2026-03-09T04:16:59.369Z"
depth: 3
anchors: 14
child_links: 53
---

# Modelo de dimensionamento

Atenção

Esta página foi revisada para considerar as configurações do TOTVS Fluig Plataforma a partir da **atualização 1.7.0 (Lake)**.

Se o seu ambiente possui uma atualização anterior, acesse: [Modelo de dimensionamento na release 1.6.5 ou anterior](/display/fluig/Modelo+de+dimensionamento+na+release+1.6.5+ou+anterior)

Atenção

Os modelos abaixo não deverão sofrer nenhum tipo de alteração. Caso o cliente deseje realizar qualquer tipo de alteração, deverá solicitar a homologação do dimensionamento pelos times responsáveis, entrando em contato com os Canais ou parceiros Fluig. 

- Plataforma rodando em servidores próprios: deverá ser acionado o time **TOTVS Infra Services**através do [TIS.COMERCIAL@totvs.com.br](mailto:TIS.COMERCIAL@totvs.com.br)

- Plataforma rodando em servidores do Cloud TOTVS: deverá ser acionado o time **Cloud Projetos Técnicos**através do [cloud.projetostecnicos@totvs.com.br](mailto:cloud.projetostecnicos@totvs.com.br)

# Índice

# Objetivo

O objetivo deste guia é mostrar um ambiente pré homologado para clientes que desejam instalar e executar o TOTVS Fluig Plataforma em servidores próprios.

# Observações

- As recomendações abaixo valem para uso moderado, distribuído entre as diversas funcionalidades. Usos intensos em funcionalidades específicas (por exemplo, publicação de documentos, movimentação de processos, publicação de arquivos muito grandes, etc.) requerem configurações mais específicas que precisam ser avaliadas.
- A configuração ideal para uma instalação da plataforma TOTVS Fluig é ter disponível 12GB de RAM, sendo que 8GB configurado diretamente via parâmetro -Xmx e mais 4GB para uso extra.
- Consulte também a configuração [Alta disponibilidade e balanceamento de carga](/display/fluig/Alta+disponibilidade+e+balanceamento+de+carga).

# Uso da plataforma

|  |  | P | M | G |
| --- | --- | --- | --- | --- |
| Usuários | Máximo de usuários cadastrados | 20 a 100 | 101 a 300 | 301 a 500 |
| Máximo de usuários conectados | 80 | 150 | 220 |  |
| Documentos | Quantidade máxima de publicações diárias | 300 | 500 | 600 |
| Processos | Quantidade máxima de processos desenhados | 5 | 10 | 15 |
| Média de abertura por hora de solicitações | 50 | 100 | 200 |  |
| Integração com ERP? | Sim | Sim | Sim |  |
| ERP na mesma rede da plataforma TOTVS Fluig?* | Sim | Sim | Sim |  |

# Hardware

Nesta seção estão listadas as definições de *hardware* para os servidores de aplicação e de banco de dados.

### Servidor de aplicação

|  |  | P | M (maior performance) | G (alta performance) |
| --- | --- | --- | --- | --- |
| Servidores | Quantidade de instâncias plataforma | 1 | 2¹ | 3¹ |
| Memória RAM | Quantidade de memória em GB por instância | 16 GB ² | 16 GB ² | 16 GB ² |
| Processador | Bits | 64 | 64 | 64 |
| Core (vCPU) | 8 | 8 | 8 |  |
| Disco | Velocidade | SAS de 15.000/rpm | SAS de 15.000/rpm | SAS de 15.000/rpm |
| Taxa de transferência Rede SAN | 1 GB/s | 1 GB/s | 1 GB/s |  |
| Espaço requerido para instalação | 12 GB | 12 GB | 12 GB |  |
| Espaço requerido para repositório | (Qtde documentos x Tamanho do documento x Qtde versões) x 1,10 |  |  |  |
| Espaço requerido para diretório de cache ** | (Qtde documentos acessados no dia x Tamanho do arquivo x 6) |  |  |  |
| Espaço requerido para banco de dados | Mínimo de 5 GB de disco para Fluig - Para o sistema operacional e instalação do SGBD verificar a documentação Servidor de banco de dados |  |  |  |
| Sistema de Arquivos Linux | ext4 | ext4 | ext4 |  |
| Sistema de Arquivos Windows | NTFS ou ReFS | NTFS ou ReFS | NTFS ou ReFS |  |

**oculto**

**Informação interna:**
Um print da tabela acima foi repassado ao RN da 1.7. Caso tenha alguma alteração, atualizar como uma nova versão do anexo **dimensionamento.png** em [Atualização Lake (1.7.0)](/pages/viewpage.action?pageId=440834439) e [Checklist atualização 1.7](/pages/viewpage.action?pageId=549488105)

Observações

**Dimensionamento**: Entendemos **P** para clientes com poucas integrações e usuários concorrentes, **M** para clientes com mais integrações e usuários concorrentes e que necessitam de uma maior performance, e **G** para clientes com necessidade de alta performance e disponibilidade.
Quando há muitas integrações, é recomendado rever o número de conexões com o banco de dados. Obtenha mais informações em [Como configurar o dimensionamento de *pools* dos *datasources*](https://centraldeatendimento.totvs.com/hc/pt-br/articles/29536983021335-Fluig-Plataforma-CON-Como-configurar-o-dimensionamento-de-pools-dos-datasources).

¹ Utilizar a configuração de balanceamento de carga, conforme descrito em [Alta disponibilidade e balanceamento de carga](/display/fluig/Alta+disponibilidade+e+balanceamento+de+carga)

² Sendo que os 16 GB de memória da instância são distribuídos da seguinte forma:

- Sistema Operacional: 4 GB
- Fluig: 12GB, sendo 8GB configurados no host.xml e mais 4GB disponíveis no SO para uso da plataforma. O host.xml fica armazenado em [diretório_instalação]\appserver\domain\configuration. Dentro do arquivo host.xml, localize a seguinte tag:

[?](#)

| `` |
| --- |

Abaixo desta tag, existe a tag "heap", que deve estar assim:

[?](#)

| `` |
| --- |

Onde:

size="2g" - Quantidade inicial de memória alocada

max-size="8g" - Quantidade máxima de memória alocada

O total de memória utilizado pela JVM depende de diversos fatores como Java Heap Space, Coletor de lixo, Cache de código, Compilador, Metadados, Threads, etc, Para mais detalhes, consulte a documentação [Consumo de memória pelo servidor de aplicação](/pages/viewpage.action?pageId=244925501).

* Para sistemas externos que não estão na mesma VLAN que se encontra a plataforma TOTVS Fluig, deve ser levado em consideração a latência entre as redes, pois isso afeta diretamente a performance da plataforma.

** O *cache* expira e é eliminado após 24 horas de acesso.

*** O atributo name*=*"fluig1" da tag <server> é padrão da plataforma, mas pode ter sido alterado por quem administra o ambiente.

### Repositório / Storage

Toda a empresa na plataforma terá um volume, que será onde as informações de documentos serão salvos, não só os documentos de ECM mas também dentro de processos BPM. Apesar de suportarmos sistemas de Storage, mapeados no sistema operacional, é necessário observar a latência entre o servidor de aplicação e o Storage. Qualquer variação nesse canal de comunicação causará grande lentidão na plataforma.

Aviso

Devido a grandes latências, não deve ser configurada a plataforma TOTVS Fluig para utilizar repositórios em outros *Datacenters.*

### Servidor de banco de dados

#### Recomendações dos fabricantes

| Banco de dados | Descrição | Link das documentações oficiais | Data da consulta |
| --- | --- | --- | --- |
| Oracle | Recomendações de hardware | https://docs.oracle.com/database/121/NTDBI/reqs.htm#NTDBI2689 | 15/08/2016 |
| Recomendações de software | https://docs.oracle.com/database/121/NTDBI/reqs.htm#NTDBI2698 | 15/08/2016 |  |
| SQL Server  | Recomendações de hardware e software | https://msdn.microsoft.com/en-us/library/ms143506(v=sql.120).aspx | 15/08/2016 |
| MySQL 5.7 | Sistemas operacionais suportados | http://www.mysql.com/support/supportedplatforms/database.html | 15/08/2016 |

#### Recomendação do time Fluig

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

![](/download/attachments/557339796/Ambiente%20Produ%C3%A7%C3%A3o.jpg?version=1&modificationDate=1596715260133&api=v2)

![](/download/attachments/557339796/VIEWER%20CLOUD%20-%20Ambiente%20Produ%C3%A7%C3%A3o.jpg?version=1&modificationDate=1596715260247&api=v2)


<!-- anchors: Modelodedimensionamento-Índice, Modelodedimensionamento-Objetivo, Modelodedimensionamento-Observações, Modelodedimensionamento-Usodaplataforma, Modelodedimensionamento-Hardware, Modelodedimensionamento-Servidordeaplicação, highlighter_179765, highlighter_346198, Modelodedimensionamento-Repositório/Storage, Modelodedimensionamento-Servidordebancodedados, Modelodedimensionamento-Recomendaçõesdosfabricantes, Modelodedimensionamento-RecomendaçãodotimeFluig, Modelodedimensionamento-Desenhológico, desenho_logico -->
