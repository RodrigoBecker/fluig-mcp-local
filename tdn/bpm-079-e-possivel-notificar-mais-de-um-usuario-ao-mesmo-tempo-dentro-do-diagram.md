---
title: "BPM 079 - É possível notificar mais de um usuário ao mesmo tempo dentro do diagrama de processo?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=268573083"
scraped_at: "2026-03-09T03:56:50.550Z"
depth: 2
anchors: 4
child_links: 132
---

# BPM 079 - É possível notificar mais de um usuário ao mesmo tempo dentro do diagrama de processo?

# Índice

# Plataforma

**Produto:**fluig

# Ocorrência

É possível, dentro do diagrama de processo, notificar mais de um usuário ao mesmo tempo?

Por exemplo: o solicitante inicia a solicitação, que vai para o aprovador e se for aprovado notifica um usuário. Esse usuário não pode finalizar o processo, apenas ser notificado. E uma outra notificação vai para o setor Fiscal que continua o processo

# Solução

Por padrão, no acompanhamento do processo existem três opções de notificação:

- Notifica responsável;

- Notifica requisitante;

- Notifica Gestor;

Para notificar qualquer outro usuário que esteja ou não no processo é necessário desenvolver sobre a plataforma utilizando o evento [onNotify](https://tdn.totvs.com/display/fluig/Desenvolvimento+de+Eventos#DesenvolvimentodeEventos-onNotify).


<!-- anchors: BPM079Épossívelnotificarmaisdeumusuárioaomesmotempodentrododiagramadeprocesso?-Índice, BPM079Épossívelnotificarmaisdeumusuárioaomesmotempodentrododiagramadeprocesso?-Plataforma, BPM079Épossívelnotificarmaisdeumusuárioaomesmotempodentrododiagramadeprocesso?-Ocorrência, BPM079Épossívelnotificarmaisdeumusuárioaomesmotempodentrododiagramadeprocesso?-Solução -->
