---
title: "Como alterar o conjunto de portas padrão da plataforma"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=507972900"
scraped_at: "2026-03-09T04:02:39.360Z"
depth: 2
anchors: 17
child_links: 78
---

# Como alterar o conjunto de portas padrão da plataforma

Atenção!

Esta página foi revisada para considerar as configurações do TOTVS Fluig Plataforma a partir da atualização 1.6.

# Índice

# Objetivo

---

Este guia visa mostrar o procedimento para alterar o conjunto de portas padrão da plataforma TOTVS Fluig.

# Alterar o conjunto de portas padrão

---

Para alterar todo o conjunto de portas da plataforma siga o procedimento abaixo.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)
- [Passo 6](#)

Pare os serviços do fluig em sua ordem correta (fluig, fluig_Indexer e fluig_RealTime).

Altere as portas da instalação:

 - Para isso, acesse **[diretório_instalação]\appserver\domain\configuration** e localize o arquivo “**host.xml**” para editá-lo.

 - Localize o código abaixo e adicione a linha **<socket-bindings port-offset="${jboss.socket.binding.port-offset:0}" socket-binding-group="full-sockets"/>** no lugar indicado.

 - É necessário definir um valor para a port-offset (Exemplo: 100) e alterá-la no código quando incluída. Este valor será somado a diversas portas definidas nos arquivos de configuração da plataforma alterando-as para valores diferentes automaticamente. 

Aviso

A instalação de Múltiplas Instâncias em um único servidor **não é homologado** **para atualização 1.6 e superiores** do TOTVS Fluig Plataforma, pois gera concorrência pelos recursos e portas do servidor entre as instâncias provocando comportamentos inesperados. A partir desta release não será fornecido suporte quando identificado este cenário. Para mais detalhes, consulte a documentação [Modelo de Dimensionamento](https://tdn.totvs.com/x/lFQ4IQ).

 **** Expand source 

[expand source](#)[?](#)

| ````````````````````````````````````````````````````-->````````````````````` |
| --- |

Importante!

Este passo é válido para instalações realizadas a partir da atualização 1.6.1. Na versão 1.6.0 as linhas de código abaixo deverão ser incluídas e alteradas para o valor da port-offset salva no passo 2.

Altere o valor da port-offset do gerenciamento interno do serviço fluig.

 - Para isso, acesse **[diretório_instalação]/appserver/domain/configuration** e localize o arquivo **"host.xml"** para editá-lo.

 - Localize o código abaixo e altere o valor destacado **somando** o valor do offset declarado no passo 2 desta documentação.

![](/download/attachments/507972900/3.1.png?version=1&modificationDate=1664991943123&api=v2)

 - Ao finalizar as alterações, salve o arquivo.

Repita o mesmo procedimento para o arquivo "**jboss-cli.xml**".

 - Para isso, acesse **[diretório_instalação]/appserver/bin** e localize o arquivo **"jboss-cli.xml"** para editá-lo.

 - Localize o código abaixo e altere o valor destacado **somando** o valor do offset declarado no passo 2 desta documentação.

![](/download/attachments/507972900/3.2.png?version=1&modificationDate=1664992177350&api=v2)

 -  Ao finalizar as alterações, salve o arquivo. 

Altere as portas registradas em banco de dados:

 - Acesse **[diretório_instalação****]****\repository\wcmdir\config **e edite ou crie o arquivo “**configuration.properties**”. Todas as portas listadas nas linhas abaixo terão de ser alteradas:

Importante!

Ao criar um novo arquivo "**configuration.properties**" copiando o código informado neste passo, é muito importante que os comentários sejam apagados, pois eles podem corromper as configurações contidas.

  **configuration.properties**

[?](#)

| `totvs/serverIPPort=8080````fluig/server.url=http://10.80.80.23:8080````webdesk/FTPPort=21``webdesk/FTPPrivateFolderPort=8021``webdesk/OOoPort=15001,15002` |
| --- |

Acesse o diretório **[diretório_instalação]/repository/wcmdir** e crie um arquivo vazio (sem conteúdo) chamado "**database.update**". Este arquivo é necessário para que a atualização do passo 4 ocorra corretamente no banco de dados.

Pronto! Agora é só iniciar os serviços do fluig na ordem correta (fluig_RealTime, fluig_Indexer e fluig).

**oculto**

A informação acima foi duplicada no artigo [https://centraldeatendimento.fluig.com/hc/pt-br/articles/360027497952](https://centraldeatendimento.fluig.com/hc/pt-br/articles/360027497952) (Conflitos de porta ao iniciar o serviço)

Caso seja feita alguma alteração, lembrar de atualizar esse artigo!

Importante!

Importante mencionar que nas alterações acima não estão incluídas as portas do serviço RealTime e Servidor de Indexação. A partir da atualização 1.6.1, a instalação destes serviços pode ser realizada por módulos, em [modo caracteres](/pages/viewpage.action?pageId=257622732), e neste cenários você deve procurar os arquivos abaixo no diretório onde o módulo foi instalado. No entanto, por padrão ele é instalado no mesmo diretório do servidor de aplicação da plataforma.

Se deseja alterar as portas dos serviços, siga os passos abaixo:

**Servidor de Indexação (Solr)**

- **Windows**

1. Acesse **[diretório_instalação]\solr\bin**e localize o arquivo "**solr.in.cmd**" para editá-lo.
2. Localize a linha abaixo e apague o termo "REM" do início. Altere para a nova porta.

**solr.in.cmd**

[?](#)

| `REM set SOLR_PORT=8983` |
| --- |

- **Linux**

1. Acesse**/etc/default/**e localize o arquivo "**fluig_Indexer.in.sh**" para editá-lo.
2. Localize a linha abaixo e altere para a nova porta.

**fluig_Indexer.in.sh**

[?](#)

| `SOLR_PORT="8983"` |
| --- |

3. Ao finalizar, salve o arquivo.

4. Acesse o arquivo **[diretório_instalação****]****\repository\wcmdir\config **e edite ou crie o arquivo “**configuration.properties**”.

**configuration.properties**

[?](#)

| `totvs/solrURL=http://10.80.80.23:8983/solr` |
| --- |

5. Para que o servidor de aplicação reconheça a nova porta do Servidor de Indexação (solr), será necessário alterar a porta também em [Configurações do Sistema](/pages/viewpage.action?pageId=235597328) nos Parâmetros da Plataforma.

**RealTime (nodejs)**

1. Acesse **[diretório_instalação]node\fluig.rt**e localize o arquivo "**package.json**" para editá-lo.
2. Localize as linhas abaixo e altere para as mesmas portas de RealTime Chat e RealTime para as novas portas:

[?](#)

| `"chatPort": 7777,``"realtimePort": 8888,` |
| --- |

3. Ao finalizar, salve o arquivo.

4. Acesse o arquivo **[diretório_instalação****]****\repository\wcmdir\config **e edite ou crie o arquivo “**configuration.properties**”.

[?](#)

| `node.chat.url=10.80.80.23:7777``node.realtime.url=10.80.80.23:8888` |
| --- |

5. Para que o servidor de aplicação reconheça a nova porta do RealTime (nodejs), será necessário alterar a porta também em [Configurações do Sistema](/pages/viewpage.action?pageId=235597328) nos Parâmetros da Plataforma.


<!-- anchors: Comoalteraroconjuntodeportaspadrãodaplataforma-Índice, Comoalteraroconjuntodeportaspadrãodaplataforma-Objetivo, Comoalteraroconjuntodeportaspadrãodaplataforma-Alteraroconjuntodeportaspadrão, Solução, Solução-1, Solução-2, highlighter_199971, Solução-3, Solução-4, highlighter_895866, Solução-5, Solução-6, highlighter_557200, highlighter_35906, highlighter_734729, highlighter_491017, highlighter_27441 -->
