---
title: "Identity | Preciso liberar o Identity no proxy ou firewall da empresa?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=240296146"
scraped_at: "2026-03-09T04:33:30.563Z"
depth: 3
anchors: 0
child_links: 56
---

# Identity | Preciso liberar o Identity no proxy ou firewall da empresa?

**Dúvida**

Preciso liberar o Identity no proxy ou firewall da empresa?

**Solução**

Com o objetivo de eliminar pontos únicos de falha e proporcionar melhor disponibilidade e escalabilidade, desde junho de 2016 o Identity utiliza um balanceador com redundâncias que não possui um IP fixo para liberação.

1. Liberar acesso para a URL (*.[fluigidentity.com](http://fluigidentity.com/)) e não mais para o IP (caso seja por *firewall* tipo *next generation* que permite essa funcionalidade);

2. Deixar o acesso ao Identity atrás de um *proxy* interno (tanto os ADs para comunicação via SmartSync, quanto o acesso dos usuários à interface *web*), assim o cliente apenas libera o acesso para o *proxy* e todos são beneficiados com isso;
