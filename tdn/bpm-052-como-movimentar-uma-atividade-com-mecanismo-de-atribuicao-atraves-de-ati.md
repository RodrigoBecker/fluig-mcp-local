---
title: "BPM 052 - Como movimentar uma atividade com mecanismo de atribuição através de atividades automáticas sem interação com usuário?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=243657821"
scraped_at: "2026-03-09T03:54:59.048Z"
depth: 2
anchors: 5
child_links: 132
---

# BPM 052 - Como movimentar uma atividade com mecanismo de atribuição através de atividades automáticas sem interação com usuário?

# Índice

# Plataforma

**Produto:  **fluig

# Ocorrência

Usuário deseja movimentar uma atividade automaticamente, por meio de eventos de processo ou *Web Service*, através de uma atividade automática para uma outra atividade comum, porém a movimentação não é concluída.

# Causa

Isso ocorre pois a atividade destino está configurada para "Sempre" selecionar destinatários, portanto mesmo havendo só uma opção, ela deve ser selecionada posteriormente e, como não há essa opção em uma movimentação sem ser pela interface do fluig, a solicitação é retornada à atividade anterior.

# Solução

Configurar a atividade destino para "Quando houver mais de uma opção", assim quando houver apenas uma opção o colaborador será atribuído automaticamente.


<!-- anchors: BPM052Comomovimentarumaatividadecommecanismodeatribuiçãoatravésdeatividadesautomáticasseminteraçãocomusuário?-Índice, BPM052Comomovimentarumaatividadecommecanismodeatribuiçãoatravésdeatividadesautomáticasseminteraçãocomusuário?-Plataforma, BPM052Comomovimentarumaatividadecommecanismodeatribuiçãoatravésdeatividadesautomáticasseminteraçãocomusuário?-Ocorrência, BPM052Comomovimentarumaatividadecommecanismodeatribuiçãoatravésdeatividadesautomáticasseminteraçãocomusuário?-Causa, BPM052Comomovimentarumaatividadecommecanismodeatribuiçãoatravésdeatividadesautomáticasseminteraçãocomusuário?-Solução -->
