---
title: "BPM 084 - Como definir o usuário a ser atribuído ao utilizar um Gateway Paralelo?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=269421617"
scraped_at: "2026-03-09T03:57:11.213Z"
depth: 2
anchors: 4
child_links: 131
---

# BPM 084 - Como definir o usuário a ser atribuído ao utilizar um Gateway Paralelo?

# Índice

# Plataforma

**Produto:**fluig

# Ocorrência

Tenho um atividade que é enviada para um *Gateway* Paralelo (*Fork*) e o mecanismo de atribuição não está configurado na atividade seguinte. Porém o mesmo não permite escolher o usuário para o envio.

# Solução

Pelo comportamento padrão do produto, ao utilizar um *Gateway* Paralelo e não definir um mecanismo de atribuição na próxima atividade, o fluxo será enviado para o primeiro usuário dentre os possíveis para o processo.

Essa mesma regra é aplicada aos componentes *Join*, Sinal e Envio de Email.


<!-- anchors: BPM084ComodefinirousuárioaseratribuídoaoutilizarumGatewayParalelo?-Índice, BPM084ComodefinirousuárioaseratribuídoaoutilizarumGatewayParalelo?-Plataforma, BPM084ComodefinirousuárioaseratribuídoaoutilizarumGatewayParalelo?-Ocorrência, BPM084ComodefinirousuárioaseratribuídoaoutilizarumGatewayParalelo?-Solução -->
