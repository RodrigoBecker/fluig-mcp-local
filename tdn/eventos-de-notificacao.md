---
title: "Eventos de Notificação"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=200906235"
scraped_at: "2026-03-09T02:58:53.345Z"
depth: 0
anchors: 13
child_links: 51
---

# Eventos de Notificação

# Índice

# Objetivo

---

Neste guia será apresentada a configuração de um *widget* desenvolvido sobre a plataforma e um evento de notificação.

# Pré-requisitos

---

Conhecimento prévio em determinados pontos, sendo estes:

- Visão geral sobre a plataforma fluig
- [Desenvolvimento de eventos](/display/fluig/Desenvolvimento+de+Eventos)

# Eventos

---

No repositório [samples](https://git.fluig.com/projects/SAMPLES) está disponível o [sample-notification-event](https://git.fluig.com/projects/SAMPLES/repos/projetos/browse/event-notification) que contém o projeto [poster-custom-priority](https://git.fluig.com/projects/SAMPLES/repos/projetos/browse/event-notification/poster-custom-priority).

Esse projeto disponibiliza um *widget* desenvolvido sobre a plataforma para postagem, definindo a notificação, um *dataset* personalizado que é utilizado no *widget* e um evento *beforeSendNotification* que considera o campo metadata da notificação para definir a nova prioridade da notificação.

Vale observar que a notificação não tem sua prioridade alterada automaticamente apenas enviando um parâmetro no *customData*, é preciso personalizar o evento *beforeSendNotification* para isso.

## Passos de implementação

---

A seguir são apresentados os passos para implementar essa customização:

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)
- [Passo 6](#)
- [Passo 7](#)

  - Faça o *download* do projeto [poster-custom-priority](https://git.fluig.com/projects/SAMPLES/repos/projetos/browse/event-notification/poster-custom-priority).  ![](/download/attachments/200906235/sample%20download.png?version=1&modificationDate=1440682344000&api=v2)

**Figura 1 - Download do projeto**

  - Importe o projeto para o TDS.

![](/download/attachments/200906235/import%20tds.png?version=1&modificationDate=1440682343000&api=v2)

**Figura 2 - Importação do projeto**

 - Exporte o evento *beforeSendNotification*. 

![](/download/attachments/200906235/TDS%20EVENTO.png?version=1&modificationDate=1440682344000&api=v2)

**Figura 3 - Exportação do evento**

 - Exporte o *dataset* comunidadesPoster.Obs.: o nome do *dataset* na exportação deve ser **comunidadesPoster**.********

**Figura 4 - Exportação do dataset**

 - Exporte o *widget***custom_poster**. Obs.: o **custom_poster** não é uma extensão da *socialposter*.********

**Figura 5 - Exportação do widget**

 - Edite a página de uma comunidade e adicione o **custom_poster** nela, removendo o *widget* de publicação antiga.

![](/download/attachments/200906235/custom%20na%20comunidade.png?version=1&modificationDate=1440682342000&api=v2)

**Figura 6 - Inclusão do widget na página**

 - Realize uma publicação selecionando a prioridade **Não enviar**. Obs.: nesse caso não deve ser gerada nenhuma notificação, caso a prioridade escolhida seja alta, é possível verificar pela [API pública](https://api.fluig.com/resource_AlertServiceRest.html#path__alert_service_findAll.html) se a prioridade foi alterada. ![](/download/attachments/200906235/nao%20enviar%20.png?version=1&modificationDate=1440682343000&api=v2)

**Figura 7 - Nova publicação**


<!-- anchors: EventosdeNotificação-Índice, EventosdeNotificação-Objetivo, EventosdeNotificação-Pré-requisitos, EventosdeNotificação-Eventos, EventosdeNotificação-Passosdeimplementação, samples, samples-1, samples-2, samples-3, samples-4, samples-5, samples-6, samples-7 -->
