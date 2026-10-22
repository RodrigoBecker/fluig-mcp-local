---
title: "BPM 069 - Por que solicitações iniciadas via startProcess definem o usuário que realizou a chamada do método como responsável?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=266962926"
scraped_at: "2026-03-09T03:56:09.613Z"
depth: 2
anchors: 4
child_links: 131
---

# BPM 069 - Por que solicitações iniciadas via startProcess definem o usuário que realizou a chamada do método como responsável?

# Índice

# Plataforma

**Produto:**fluig

# Ocorrência

Estou tentando utilizar o método startProcess para iniciar uma solicitação para diversos usuários de forma automática.

Ao utilizar o método informado na documentação, foi possível criar solicitações mas ocorreu que todas as solicitações que foram criadas dessa forma, tiveram como responsável o usuário que realizou a chamada do método e não o usuário desejado.

Na assinatura do método, startProcess(processId, ativDest, listaColab, "obs", completarTarefa, valoresForm, modoGestor), o terceiro parâmetro, listaColab, recebe uma lista de usuários. E eu imaginava que essa lista seriam os responsáveis pelas atividades criadas. Estou certo? 

# Solução

A definição do usuário que realiza a chamada do método como responsável pode ocorrer pelos seguintes motivos:

- O completarTarefa está definido como*false.*

- Está sendo enviado mais de um usuário no parâmetro listaColab, mas a próxima atividade exige apenas um responsável.


<!-- anchors: BPM069PorquesolicitaçõesiniciadasviastartProcessdefinemousuárioquerealizouachamadadométodocomoresponsável?-Índice, BPM069PorquesolicitaçõesiniciadasviastartProcessdefinemousuárioquerealizouachamadadométodocomoresponsável?-Plataforma, BPM069PorquesolicitaçõesiniciadasviastartProcessdefinemousuárioquerealizouachamadadométodocomoresponsável?-Ocorrência, BPM069PorquesolicitaçõesiniciadasviastartProcessdefinemousuárioquerealizouachamadadométodocomoresponsável?-Solução -->
