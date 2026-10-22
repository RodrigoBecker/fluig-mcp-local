---
title: "BPM 005 - Por que ocorre erro ao abrir solicitação de processo com atividade inicial tipo timer?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=198940049"
scraped_at: "2026-03-09T03:52:41.179Z"
depth: 2
anchors: 5
child_links: 132
---

# BPM 005 - Por que ocorre erro ao abrir solicitação de processo com atividade inicial tipo timer?

# Índice

# Plataforma

**Produto:  **fluig

**Versão: **Todas as versões

# Ocorrência

Ao tentar abrir uma solicitação de um processo que possui apenas uma atividade inicial do tipo timer é apresentado a mensagem: Ops! "Não é possível iniciar manualmente um processo com atividade de início do tipo timer. Se mesmo assim deseja fazer isso, é necessário que o processo também possua uma atividade de início normal configurada. Saiba mais sobre, consultando a documentação técnica."

![](/download/attachments/198940049/Capturar_ops.PNG?version=1&modificationDate=1440508609000&api=v2)

# Causa

Uma atividade do tipo Timer sempre será executada automaticamente pelo fluig e nunca poderá ser executada manualmente pelo usuário. No caso de uma atividade inicial ser do tipo Timer, esta solicitação somente poderá ser iniciada pelo fluig e será bloqueado o início manual.

![](/download/attachments/198940049/Capturar.JPG?version=1&modificationDate=1439304238000&api=v2)

# Solução

Para permitir que um processo possa ser iniciado tanto manualmente quanto automaticamente pelo fluig será preciso modelar o processo com uma atividade inicial normal além da inicial Timer.

![](/download/attachments/198940049/Capturar2.JPG?version=1&modificationDate=1439304238000&api=v2)


<!-- anchors: BPM005Porqueocorreerroaoabrirsolicitaçãodeprocessocomatividadeinicialtipotimer?-Índice, BPM005Porqueocorreerroaoabrirsolicitaçãodeprocessocomatividadeinicialtipotimer?-Plataforma, BPM005Porqueocorreerroaoabrirsolicitaçãodeprocessocomatividadeinicialtipotimer?-Ocorrência, BPM005Porqueocorreerroaoabrirsolicitaçãodeprocessocomatividadeinicialtipotimer?-Causa, BPM005Porqueocorreerroaoabrirsolicitaçãodeprocessocomatividadeinicialtipotimer?-Solução -->
