---
title: "BPM 041 - Por que as notificações de tarefas atrasadas estão sendo enviadas fora do horário de expediente?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=239037790"
scraped_at: "2026-03-09T03:54:11.848Z"
depth: 2
anchors: 5
child_links: 133
---

# BPM 041 - Por que as notificações de tarefas atrasadas estão sendo enviadas fora do horário de expediente?

# Índice

# Plataforma

**Produto:  **fluig

**Versão: **Todas as versões

# Ocorrência

Notificações de tarefas atrasadas estão sendo enviadas fora do horário de expediente.

# Solução

O envio dessas notificações, de tarefas atrasadas por exemplo, depende do Agendador de Tarefas. Por gentileza verifique em Painel de Controle → Agendador de Tarefas.

Caso haja agendamento de Tarefas Atrasadas todos os dias, será disparada a notificação, independente de ser fim de semana ou feriado.

Não é possível alterar tarefas previamente cadastradas no Agendador, portanto caso queira alterar o horário de envio das notificações, remova a tarefa e cadastre-a novamente.

# Observações

Através de desenvolvimento sobre a plataforma é possível utilizar o evento beforeSendNotification, que possibilita o cancelamento de notificações. Para mais detalhes acesse [Desenvolvimento de Eventos](/display/fluig/Desenvolvimento+de+Eventos).


<!-- anchors: BPM041Porqueasnotificaçõesdetarefasatrasadasestãosendoenviadasforadohoráriodeexpediente?-Índice, BPM041Porqueasnotificaçõesdetarefasatrasadasestãosendoenviadasforadohoráriodeexpediente?-Plataforma, BPM041Porqueasnotificaçõesdetarefasatrasadasestãosendoenviadasforadohoráriodeexpediente?-Ocorrência, BPM041Porqueasnotificaçõesdetarefasatrasadasestãosendoenviadasforadohoráriodeexpediente?-Solução, BPM041Porqueasnotificaçõesdetarefasatrasadasestãosendoenviadasforadohoráriodeexpediente?-Observações -->
