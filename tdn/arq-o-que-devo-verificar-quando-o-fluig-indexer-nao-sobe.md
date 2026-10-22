---
title: "ARQ - O que devo verificar quando o fluig_Indexer não sobe?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=286017204"
scraped_at: "2026-03-04T03:37:54.055Z"
depth: 4
anchors: 9
child_links: 64
---

# ARQ - O que devo verificar quando o fluig_Indexer não sobe?

# Índice

# Plataforma

**Produto: TOTVS Fluig Plataforma**

**Versão:** 1.6 e superior

# Ocorrência

O que devo verificar quando o fluig_Indexer não sobe?

# Solução

Verifique se as situações abaixo apresentadas estão corretamente configuradas:

Atenção!

Para executar os procedimentos abaixo, é necessário estar com o serviço do Servidor de Indexação **parado**. Certifique-se de que ele não esteja **em pausa** após apresentação da mensagem em tela.

- [Situação 1](#)
- [Situação 2](#)

O endereço do JDK presente no diretório de instalação da plataforma não está configurado corretamente nos arquivos de configuração do Servidor de Indexação.

Importante!

Nas instalações modularizadas ([Windows](/pages/viewpage.action?pageId=274325941) ou [Linux](/pages/viewpage.action?pageId=152797808)) em servidor dedicado, se o servidor não possuir o Java instalado, será instalado o JDK juntamente com o Servidor de Indexação. Portanto, o procedimento abaixo ocorrerá de forma automática. Caso o Java já estiver instalado, basta informar o diretório no arquivo de configuração (install.conf) para a correta configuração no momento da instalação.

**Windows**

1. Localize o arquivo '**solr.in.cmd**' em **[diretório_instalação]/solr/bin** e verifique se está declarado conforme informado abaixo. Em [diretório_instalação] deve ser apresentado o diretório de instalação da plataforma.

  **solr.in.cmd**

[?](#)

| `set SOLR_JAVA_HOME=[diretório_instalação]\jdk-64` |
| --- |

2. Salve as alterações e inicie o serviço.

****

**Linux**

1. Localize o arquivo '**fluig_Indexer.in.sh**' em **/etc/default/ **e verifique se está declarado conforme abaixo. Em [diretório_instalação] deve ser apresentado o diretório de instalação da plataforma.

  **fluig_Indexer.in.sh**

[?](#)

| `SOLR_JAVA_HOME="[diretório_instalação]\jdk-64"` |
| --- |

2. Salve as alterações e inicie o serviço.

A porta utilizada pelo Servidor de Indexação pode estar sendo utilizada portanto, certifique-se de que ela esteja liberada ou [altere a porta usada pelo serviço](/pages/viewpage.action?pageId=234457257).

Confira as portas utilizadas pela plataforma em [Portas e Endereços](/pages/viewpage.action?pageId=275591571).


<!-- anchors: ARQOquedevoverificarquandoofluig_Indexernãosobe?-Índice, ARQOquedevoverificarquandoofluig_Indexernãosobe?-Plataforma, ARQOquedevoverificarquandoofluig_Indexernãosobe?-Ocorrência, ARQOquedevoverificarquandoofluig_Indexernãosobe?-Solução, Sample, Sample-1, highlighter_213251, highlighter_69519, Sample-2 -->
