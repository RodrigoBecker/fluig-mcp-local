---
title: "BPM 033 - É possível editar o subprocesso do Listar Tarefas (Ad Hoc)?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=235589424"
scraped_at: "2026-03-09T03:53:36.589Z"
depth: 2
anchors: 5
child_links: 132
---

# BPM 033 - É possível editar o subprocesso do Listar Tarefas (Ad Hoc)?

# Índice

# Plataforma

**Produto:  **fluig

**Versão: **Todas as versões

# Ocorrência

Não é possível alterar o subprocesso do Listar Tarefas (Ad Hoc), nem importá-lo através do Studio.

Isso ocorre apenas com o subprocesso, o formulário e o processo "pai" podem ser editados normalmente.

# Causa

O subprocesso do Listar Tarefas (Ad Hoc) foi bloqueado para edições.

# Solução

Em situações onde o subprocesso Listar Tarefas não atende as necessidades, por ser um processo simples, com apenas a atividade inicial, atividade comum e atividade final, pode ser desenvolvido um novo subprocesso.

Este subprocesso pode ser iniciado a partir da chamada de um *Web Service* ou API, e sempre que finalizada uma solicitação do subprocesso, este irá alterar o seu 'Status' na solicitação pai, informando a conclusão. O processo pai precisará ter uma validação onde somente após a conclusão de todos os subprocessos, permita continuar o fluxo da solicitação pai.


<!-- anchors: BPM033ÉpossíveleditarosubprocessodoListarTarefas(AdHoc)?-Índice, BPM033ÉpossíveleditarosubprocessodoListarTarefas(AdHoc)?-Plataforma, BPM033ÉpossíveleditarosubprocessodoListarTarefas(AdHoc)?-Ocorrência, BPM033ÉpossíveleditarosubprocessodoListarTarefas(AdHoc)?-Causa, BPM033ÉpossíveleditarosubprocessodoListarTarefas(AdHoc)?-Solução -->
