---
title: "ARQ - Como verificar se o MemCached foi iniciado corretamente e não está populado"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=280736456"
scraped_at: "2026-03-04T03:37:07.261Z"
depth: 4
anchors: 9
child_links: 42
---

# ARQ - Como verificar se o MemCached foi iniciado corretamente e não está populado

# Índice

# Plataforma

**Produto: **TOTVS Fluig Plataforma

**Versão:** 1.5.x  até 1.6.2

# Ocorrência

Como verificar se o Servidor de Cache (MemCached) do Fluig foi iniciado corretamente e não está populado?

# Solução

Importante

Este procedimento pode ser realizado tanto em sistemas operacionais Windows como em Linux.

No Windows, certifique-se que o recurso Telnet esteja ativado pois, para executar os procedimentos desta FAQ, será necessário este recurso estar ativo.

No Prompt de Comandos ou Console, conectar o telnet e digitar o IP e a porta do servidor de cache (MemCached) configurado na plataforma. Em seguida, execute o comando “stats”. Portanto, siga os passos abaixo:

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)

 - Inicie o serviço de MemCached e, antes de iniciar os serviços de RealTime, Indexer (se tiver na versão 1.6 da plataforma) e Fluig, siga os demais passos.

  - Digite no Prompt de Comandos ou Console: **telnet <IP MemCached> <porta MemCached>**. Por padrão o serviço de MemCached vem configurado para utilizar a porta 11211, conforme informado na documentação [Portas e Endereços](/pages/viewpage.action?pageId=275591571). Exemplo:

![](/download/attachments/280736456/1.png?version=1&modificationDate=1497894697000&api=v2)

 - Após acessar o recurso de Telnet, digite o comando: '**stats**'

****

 - Antes do Fluig ser iniciado o valor apresentado na propriedade “**curr_items**” deve ser igual a zero. Se tiver um valor diferente, o servidor de cache está populado e pode apresentar problemas ao iniciar o Fluig. Estando populado, deve ser reiniciado.

![](/download/attachments/280736456/3.png?version=1&modificationDate=1497894697000&api=v2)


<!-- anchors: ARQComoverificarseoMemCachedfoiiniciadocorretamenteenãoestápopulado-Índice, ARQComoverificarseoMemCachedfoiiniciadocorretamenteenãoestápopulado-Plataforma, ARQComoverificarseoMemCachedfoiiniciadocorretamenteenãoestápopulado-Ocorrência, ARQComoverificarseoMemCachedfoiiniciadocorretamenteenãoestápopulado-Solução, samples, samples-1, samples-2, samples-3, samples-4 -->
