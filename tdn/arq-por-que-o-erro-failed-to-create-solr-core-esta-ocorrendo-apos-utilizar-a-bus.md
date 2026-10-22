---
title: "ARQ - Por que o erro \"Failed to create Solr core\" está ocorrendo após utilizar a busca da plataforma?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=268596664"
scraped_at: "2026-03-04T03:38:25.360Z"
depth: 4
anchors: 9
child_links: 61
---

# ARQ - Por que o erro "Failed to create Solr core" está ocorrendo após utilizar a busca da plataforma?

# Índice

# Plataforma

**Produto:** TOTVS Fluig Plataforma

# Ocorrência

Por que ao tentar utilizar a busca da barra superior da plataforma aparece o erro abaixo no log?

**Arquivo de log**

[?](#)

| 10241025102610271028 | `Failed to perform search: com.totvs.technology.foundation.indexer.IndexerException: Failed to create Solr core: ``(...)``Caused by: java.lang.IllegalArgumentException: Illegal character in path at index 29: http://172.0.0.1:8080/indexer /admin/cores?action=STATUS&core=1&indexInfo=true&wt=javabin&version=2``(...)``Caused by: java.net.URISyntaxException: Illegal character in path at index 29: http://172.0.0.1:8080/indexer /admin/cores?action=STATUS&core=1&indexInfo=true&wt=javabin&version=2` |
| --- | --- |

# Causa

Ao cadastrar a URL de acesso ao Solr nos Parâmetros da plataforma (wcmadmin), foi salvo com um caractere espaço ' ' no final (ex.: "http://172.0.0.1:8080/indexer ").

![](/download/attachments/268596664/oie_transparent%20%2818%29.png?version=1&modificationDate=1571060547843&api=v2)

# Solução

Corrigir a **URL de acesso ao Solr**, removendo o espaço ao fim do parâmetro e reinicializar a plataforma a seguir. Para isso, siga os passos a seguir:

- [Passo 1](#)
- [Passo 2](#)

 - Faça login na plataforma com o usuário **wcmadmin**. Lembrando que os clientes Cloud TOTVS deverão abrir um ticket solicitando esta alteração.

 - Acesse o menu **Painel de controle** e acione o recurso **Configurações do sistema**.

Em atualizações anteriores à **Liquid - 1.6.5**, esse recurso está localizado na aba **WCM** do **Painel de controle**.

![](/download/attachments/268596664/Image%203.png?version=1&modificationDate=1553088464923&api=v2)

 1. Em **Configurações do Sistema** clique na Aba **Parâmetros da Plataforma**.

 2. Verifique se no campo **URL de acesso ao Solr** contém uma caractere espaço no final da URL. Caso tenha, apague o espaço e salve as configurações.

 3. Será necessário **reiniciar os serviços do fluig** para salvar a edição.

![](/download/attachments/268596664/Image%206.png?version=1&modificationDate=1553088614643&api=v2)


<!-- anchors: ARQPorqueoerro"FailedtocreateSolrcore"estáocorrendoapósutilizarabuscadaplataforma?-Índice, ARQPorqueoerro"FailedtocreateSolrcore"estáocorrendoapósutilizarabuscadaplataforma?-Plataforma, ARQPorqueoerro"FailedtocreateSolrcore"estáocorrendoapósutilizarabuscadaplataforma?-Ocorrência, highlighter_76345, ARQPorqueoerro"FailedtocreateSolrcore"estáocorrendoapósutilizarabuscadaplataforma?-Causa, ARQPorqueoerro"FailedtocreateSolrcore"estáocorrendoapósutilizarabuscadaplataforma?-Solução, Sample, Sample-1, Sample-2 -->
