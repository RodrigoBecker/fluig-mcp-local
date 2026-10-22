---
title: "BPM 050 - Como solucionar o erro que ocorre ao Salvar/Completar uma tarefa?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=243651260"
scraped_at: "2026-03-09T03:54:50.482Z"
depth: 2
anchors: 4
child_links: 131
---

# BPM 050 - Como solucionar o erro que ocorre ao Salvar/Completar uma tarefa?

# Índice

# Plataforma

**Produto:**fluig

**Versão:**1.5.9

# Ocorrência

Ao tentar movimentar uma solicitação para a atividade automática, está ocorrendo o erro:

![](/download/attachments/243651260/image2016-7-14%2014%3A43%3A59.png?version=1&modificationDate=1468518760000&api=v2)

# Solução

O problema acima ocorre quando o fluig não consegue localizar usuários comuns para o mecanismo de atribuição definido na **condição da atividade automática** e na **atividade destino**.

Por exemplo, se na atividade automática for definido que o mecanismo é por papel e na atividade destino for definido que a atribuição é por grupo, o fluig enviará a solicitação para o usuário que estiver no grupo e no papel.

Para solucionar o problema, será necessário revisar o fluxo *workflow* para garantir que os mecanismos sejam atendidos.


<!-- anchors: BPM050ComosolucionaroerroqueocorreaoSalvar/Completarumatarefa?-Índice, BPM050ComosolucionaroerroqueocorreaoSalvar/Completarumatarefa?-Plataforma, BPM050ComosolucionaroerroqueocorreaoSalvar/Completarumatarefa?-Ocorrência, BPM050ComosolucionaroerroqueocorreaoSalvar/Completarumatarefa?-Solução -->
