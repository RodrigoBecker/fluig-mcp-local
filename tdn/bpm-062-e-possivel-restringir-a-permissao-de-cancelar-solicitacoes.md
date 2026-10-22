---
title: "BPM 062 -  É possível restringir a permissão de cancelar solicitações?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=244742883"
scraped_at: "2026-03-09T03:55:39.977Z"
depth: 2
anchors: 4
child_links: 133
---

# BPM 062 -  É possível restringir a permissão de cancelar solicitações?

# Índice

# Plataforma

**Produto:  **fluig

# Ocorrência

Gostaria de restringir a permissão de cancelar solicitações para o usuário que inicializou a mesma.

# Solução

Não é possível restringir o cancelamento de solicitação para o usuário que a abriu.

Pelo comportamento padrão do produto, o usuário que iniciou uma solicitação sempre terá permissão para realizar cancelamento. Contudo, através do desenvolvimento sobre a plataforma, é possível bloquear a ação de cancelamento utilizando o evento beforeCancelProcess. Este evento é ativado antes do cancelamento de uma solicitação.

É necessário incluir uma validação neste evento para definir se o usuário poderá ou não cancelar a solicitação e, caso o objetivo seja não permitir o cancelamento, utilizar um *throw***.**

Em [Desenvolvimento de Workflow](https://tdn.totvs.com/pages/viewpage.action?pageId=270921008) há mais detalhes sobre como utilizar o beforeCancelProcess.

No fluig Help há informações sobre o [cancelamento de solicitações](https://tdn.totvs.com/pages/releaseview.action?pageId=233763398).


<!-- anchors: BPM062Épossívelrestringirapermissãodecancelarsolicitações?-Índice, BPM062Épossívelrestringirapermissãodecancelarsolicitações?-Plataforma, BPM062Épossívelrestringirapermissãodecancelarsolicitações?-Ocorrência, BPM062Épossívelrestringirapermissãodecancelarsolicitações?-Solução -->
