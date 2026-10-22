---
title: "ARQ - Por que o erro \"fluig.foundation.service\" está ocorrendo ao subir a plataforma?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=301172458"
scraped_at: "2026-03-04T03:38:29.189Z"
depth: 4
anchors: 6
child_links: 61
---

# ARQ - Por que o erro "fluig.foundation.service" está ocorrendo ao subir a plataforma?

# Índice

# Plataforma

**Produto:**TOTVS Fluig Plataforma

**Versão:** 1.6.2

# Ocorrência

Ao subir a plataforma na atualização 1.6.2 está ocorrendo o erro abaixo, o que devo fazer?

**Arquivo de log**

[?](#)

| 1 | `2017``-``09``-``22` `15``:``00``:``44``,``554` `ERROR [org.jboss.as.ejb3.timer] (EJB TIMER -``40``) WFLYEJB0029: Could not restore timer from /outsourcing/totvs/fluig/appserver/domain/servers/fluig2/data/timer-service-data/fluig.foundation.service-I18N/bb38c8b4-d1db-4b49-92d1-025b980bc0bd.xml:com.ctc.wstx.exc.WstxEOFException: Unexpected EOF in prolog at [row,col{unknown-source}]: [``1``,``0``]` |
| --- | --- |

# Causa

Provavelmente a plataforma foi parada de forma inesperada fazendo com que os arquivos da pasta 'data' não fossem apagados de forma automática.

# Solução

**01.** **Parar os serviços** do fluig;

**02.** **Apagar o conteúdo** da pasta '**data**' localizado em [diretório_instalação]/appserver/domain/servers/[nome do servidor]/data

**03.** **Inciar os serviços** em sua ordem correta.


<!-- anchors: ARQPorqueoerro"fluig.foundation.service"estáocorrendoaosubiraplataforma?-Índice, ARQPorqueoerro"fluig.foundation.service"estáocorrendoaosubiraplataforma?-Plataforma, ARQPorqueoerro"fluig.foundation.service"estáocorrendoaosubiraplataforma?-Ocorrência, highlighter_548038, ARQPorqueoerro"fluig.foundation.service"estáocorrendoaosubiraplataforma?-Causa, ARQPorqueoerro"fluig.foundation.service"estáocorrendoaosubiraplataforma?-Solução -->
