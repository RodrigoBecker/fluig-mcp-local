---
title: "ARQ - Como alterar o endereço do servidor de licenças?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=233757620"
scraped_at: "2026-03-04T03:37:11.199Z"
depth: 4
anchors: 7
child_links: 45
---

# ARQ - Como alterar o endereço do servidor de licenças?

# Índice

# Plataforma

**Produto: ** TOTVS Fluig Plataforma

**Versão:** 1.5.6 ou superior

# Ocorrência

Realizamos a instalação da plataforma e após iniciar os serviços e tentar acessar com o usuário wcmadmin, está ocorrendo o erro: ERROR: 4012. Como faço para alterar o endereço do servidor de licenças?

![](/download/attachments/233757620/Error%204012.jpg?version=1&modificationDate=1504099686000&api=v2)

**Figura 1 - Mensagem apresentada na versão 1.6.0 e anteriores**

![](/download/attachments/233757620/demo1.png?version=1&modificationDate=1504099750000&api=v2)

**Figura 2 - Mensagem apresentada na versão 1.6.1 e superiores**

# Causa

Esta mensagem de erro é exibida quando a plataforma não consegue localizar o slot 4012 no servidor de licenças que foi configurado na instalação.

# Solução

1. Execute os passos da página [Como configurar servidor de licença na plataforma?](/pages/viewpage.action?pageId=208339548) Se os procedimentos realizados não corrigirem a inconsistência de endereço, siga os passos abaixo.  Neste caso, será necessário acessar o diretório [diretório_instalação]\repository\wcmdir\config e verificar se existe o arquivo **configuration.properties**.
2. Se existir, abra o mesmo com um editor de textos e localize os parâmetros webdesk/LSHost e webdesk/LSPort, verifique se os valores atribuídos estão corretos.
3. Caso o arquivo não exista, será necessário criá-lo manualmente. Crie um arquivo com o nome configuration e salve com a extensão .properties
4. Em seguida, abra o mesmo com um editor de textos e adicione as seguintes linhas:

**configuration.properties**

[?](#)

| `webdesk/LSHost=``webdesk/LSPort=` |
| --- |

Por exemplo, se o endereço do servidor de licenças fosse 172.168.0.1 e a porta 5555, o arquivo ficaria da seguinte forma:

**configuration.properties**

[?](#)

| `webdesk/LSHost=``172.168``.``0.1``webdesk/LSPort=``5555` |
| --- |

Em seguida, será preciso reiniciar os serviços do Fluig. Não se preocupe se o arquivo for deletado, pois a plataforma faz a leitura do mesmo, atualiza a tabela fdn_paramgeral e em seguida, remove o arquivo automaticamente.


<!-- anchors: ARQComoalteraroendereçodoservidordelicenças?-Índice, ARQComoalteraroendereçodoservidordelicenças?-Plataforma, ARQComoalteraroendereçodoservidordelicenças?-Ocorrência, ARQComoalteraroendereçodoservidordelicenças?-Causa, ARQComoalteraroendereçodoservidordelicenças?-Solução, highlighter_903151, highlighter_732846 -->
