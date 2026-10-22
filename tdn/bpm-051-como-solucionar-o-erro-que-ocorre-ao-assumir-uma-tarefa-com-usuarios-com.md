---
title: "BPM 051 - Como solucionar o erro que ocorre ao assumir uma tarefa com usuários comuns?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=243652800"
scraped_at: "2026-03-09T03:54:55.047Z"
depth: 2
anchors: 6
child_links: 132
---

# BPM 051 - Como solucionar o erro que ocorre ao assumir uma tarefa com usuários comuns?

# Índice

# Plataforma

**Produto:  **fluig

# Ocorrência

Cliente desenvolveu um mecanismo de atribuição em pool e ao assumir a tarefa ocorreu o erro da imagem a seguir somente para usuários comuns.

![](/download/attachments/243652800/Image%207.png?version=1&modificationDate=1553532622880&api=v2)

**Mensagem do erro.**

# Causa

Usuário sem permissão no formulário.

No log, algumas linhas antes de aparecer o primeiro erro, é exibida a seguinte mensagem:

[?](#)

| `17:03:21,506 WARN [com.datasul.technology.webdesk.dataset.MetaListDatasetBuilder] (http-pool-threads - 52) Usuário sem permissão para consultar esse dataset.` |
| --- |

# Solução

Fornecer permissão no formulário para todos os usuários que estiverem com o problema.


<!-- anchors: BPM051Comosolucionaroerroqueocorreaoassumirumatarefacomusuárioscomuns?-Índice, BPM051Comosolucionaroerroqueocorreaoassumirumatarefacomusuárioscomuns?-Plataforma, BPM051Comosolucionaroerroqueocorreaoassumirumatarefacomusuárioscomuns?-Ocorrência, BPM051Comosolucionaroerroqueocorreaoassumirumatarefacomusuárioscomuns?-Causa, highlighter_676791, BPM051Comosolucionaroerroqueocorreaoassumirumatarefacomusuárioscomuns?-Solução -->
