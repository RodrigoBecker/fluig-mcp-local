---
title: "BPM 026 - Como deixar visíveis os processos no menu Iniciar Solicitações?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=235324826"
scraped_at: "2026-03-09T03:33:59.217Z"
depth: 2
anchors: 5
child_links: 132
---

# BPM 026 - Como deixar visíveis os processos no menu Iniciar Solicitações?

# Índice

# Plataforma

**Produto:  **fluig

**Versão: **Todas as versões

****

# Ocorrência

Há vários processos criados no menu Configurar Processos do fluig. No entanto, estes processos não são apresentados no menu [Iniciar Solicitações](https://tdn.totvs.com/x/RvLuDQ).

# Causa

Há mecanismo de atribuição na atividade inicial do processo.

# Solução

Para que uma solicitação apareça para um usuário é necessário que este usuário esteja dentro do mecanismo de atribuição da atividade inicial.

Por exemplo, se na atividade inicial foi configurado um mecanismo de atribuição "Por Grupo" e definido o grupo "TI", apenas os usuários que fazem parte do grupo TI serão capazes de visualizar o processo para iniciá-lo.


<!-- anchors: BPM026ComodeixarvisíveisosprocessosnomenuIniciarSolicitações?-Índice, BPM026ComodeixarvisíveisosprocessosnomenuIniciarSolicitações?-Plataforma, BPM026ComodeixarvisíveisosprocessosnomenuIniciarSolicitações?-Ocorrência, BPM026ComodeixarvisíveisosprocessosnomenuIniciarSolicitações?-Causa, BPM026ComodeixarvisíveisosprocessosnomenuIniciarSolicitações?-Solução -->
