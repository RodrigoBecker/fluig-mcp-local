---
title: "Servidor de indexação único"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=257623442"
scraped_at: "2026-03-09T04:10:30.383Z"
depth: 2
anchors: 7
child_links: 82
---

# Servidor de indexação único

Atenção

Esta página foi revisada para considerar as novas configurações de *server* do Fluig para a atualização 1.6.

# Índice

Importante!

Antes de prosseguir com as instruções descritas nessa página, realize os passos contidos na documentação [Servidor de indexação dedicado](/pages/viewpage.action?pageId=269425760).

# Introdução

---

As instruções a seguir completarão a instalação de um Servidor de indexação em um único servidor dedicado, continuando as instruções iniciadas em [Servidor de indexação dedicado](/pages/viewpage.action?pageId=269425760).

# Configurando o Fluig para usar o Servidor de indexação

---

No servidor onde está instalado o Fluig, acesse o diretório [Instalação fluig]/repository/wcmdir/config e edite o arquivo [configuration.properties](https://tdn.totvs.com/pages/viewpage.action?pageId=257623022). Caso o arquivo configuration.properties não exista, crie um novo arquivo com este nome.

Se o Indexer possuir acesso ao [repositório](https://tdn.totvs.com/pages/viewpage.action?pageId=233766796) do Fluig, adicione/edite a seguinte linha, informando o endereço do servidor de indexação onde o Fluig Indexer foi instalado:

[?](#)

| 1 | `totvs/solrURL=http://:8983/solr` |
| --- | --- |

Isto fará com que os dados do Indexer sejam salvos no [repositório](https://tdn.totvs.com/pages/viewpage.action?pageId=233766796).

Ou se o Indexer **não** possuir acesso ao [repositório](https://tdn.totvs.com/pages/viewpage.action?pageId=233766796) do Fluig, adicione/edite as seguintes linhas:

[?](#)

| 1234 | `totvs/solrURL=/solr``totvs/solrURL=http://:8983/solr``totvs/solrRemote=true``totvs/solrCloud=false` |
| --- | --- |

Isto fará com que o Fluig envie os documentos para extração e indexação neste servidor. Lembramos apenas que sem acesso ao repositório, este processo é mais lento do que o acesso direto via repositório. Os dados do Indexer serão salvos no servidor do Indexer.

Observação

Caso o parâmetro *solrRemote* seja alterado após a criação de empresa, os dados do Indexer continuarão sendo salvos conforme sua configuração inicial, sendo a alteração válida apenas para novas empresas. A reinicialização do servidor de aplicação pode ser necessária.

# Executando o serviço Fluig Indexer

---

- Basta executar o arquivo [Instalação do fluig Indexer]/solr/startStandalone.sh ou [Instalação do fluig Indexer]/solr/startStandalone.bat que o processo será inicializado.

- Para interromper o serviço de indexação, execute o arquivo [Instalação do fluig Indexer]/solr/stopStandalone.sh ou [Instalação do fluig Indexer]/solr/stopStandalone.bat.

Observação

É importante que o Fluig Indexer seja iniciado antes do Fluig, caso contrário este irá considerar que não há serviço de Indexação disponível.

# Registrando o Fluig Indexer como serviço no Windows/Linux

---

Para registrar o Fluig Indexer como serviço, utilize os [procedimentos](/pages/viewpage.action?pageId=285662306) padrão do sistema operacional em questão.


<!-- anchors: Servidordeindexaçãoúnico-Índice, Servidordeindexaçãoúnico-Introdução, Servidordeindexaçãoúnico-ConfigurandooFluigparausaroServidordeindexação, highlighter_390630, highlighter_721698, Servidordeindexaçãoúnico-ExecutandooserviçoFluigIndexer, Servidordeindexaçãoúnico-RegistrandooFluigIndexercomoserviçonoWindows/Linux -->
