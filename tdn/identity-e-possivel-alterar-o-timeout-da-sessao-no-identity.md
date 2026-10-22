---
title: "Identity | É possível alterar o timeout da sessão no Identity?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=192100755"
scraped_at: "2026-03-09T04:33:07.131Z"
depth: 3
anchors: 0
child_links: 56
---

# Identity | É possível alterar o timeout da sessão no Identity?

**Dúvida**

É possível alterar o timeout da sessão no Identity?

**Solução**

**Não**. Por padrão, as sessões do Identity em **inatividade** duram em torno de **4 dias**, podendo se estender por mais tempo quando estiver em plena utilização.

O Identity é executado em várias máquinas, simultaneamente. No entanto, o usuário realiza login em apenas uma máquina. Nesse período, caso o usuário seja direcionado para outra máquina, o Identity também solicitará novo login.

Saiba mais em [Login](/display/fluig/Identity+%7C+Login).
