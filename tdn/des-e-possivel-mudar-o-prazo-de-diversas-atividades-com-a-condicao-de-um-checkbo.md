---
title: "DES - É possível mudar o prazo de diversas atividades, com a condição de um checkbox no formulário?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=266963735"
scraped_at: "2026-03-09T04:46:06.338Z"
depth: 3
anchors: 4
child_links: 56
---

# DES - É possível mudar o prazo de diversas atividades, com a condição de um checkbox no formulário?

# Índice

# Plataforma

**Produto:**TOTVS Fluig Plataforma

# Ocorrência

Gostaria de saber se é possível mudar o prazo de conclusão de diversas atividades, com a condição de um *checkbox* no formulário.

# Solução

Você pode implementar os *checkbox*es no formulário e utilizar o método setDueDate:

setDueDate(numProcesso, numThread, "userId", dataConclusao, tempoSeg)

Este método permite alterar o prazo de conclusão para uma determinada atividade do processo, onde:

- numProcesso: número da solicitação;
- numThread: número da thread (normalmente 0, quando não se utiliza atividades paralelas);
- userId: o usuário responsável pela tarefa;
- dataConclusao: a nova data de conclusão;
- tempoSeg: tempo que representa a nova hora de conclusão, calculado em segundos após a meia-noite.

Você pode encontrar exemplos em:[Desenvolvimento de Workflow.](/display/fluig/Desenvolvimento+de+Workflow)


<!-- anchors: DESÉpossívelmudaroprazodediversasatividades,comacondiçãodeumcheckboxnoformulário?-Índice, DESÉpossívelmudaroprazodediversasatividades,comacondiçãodeumcheckboxnoformulário?-Plataforma, DESÉpossívelmudaroprazodediversasatividades,comacondiçãodeumcheckboxnoformulário?-Ocorrência, DESÉpossívelmudaroprazodediversasatividades,comacondiçãodeumcheckboxnoformulário?-Solução -->
