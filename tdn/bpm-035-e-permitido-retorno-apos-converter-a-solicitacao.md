---
title: "BPM 035 - É permitido retorno após converter a solicitação?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=238035887"
scraped_at: "2026-03-09T03:53:45.332Z"
depth: 2
anchors: 4
child_links: 131
---

# BPM 035 - É permitido retorno após converter a solicitação?

# Índice

# Plataforma

**Produto:**fluig

**Versão: **Todas as versões

# Ocorrência

Desenvolvemos um processo cujo os fluxos foram configurados para permitir retorno. Devido a uma necessidade interna da empresa, fizemos uma mudança e tivemos que converter algumas solicitações já existentes, logo depois da conversão a tarefa que podia retornar a anterior começou a não dar mais esta possibilidade.

Criei um fluxo em desenvolvimento para testar e ver se era por causa da conversão e pude identificar que sim. Gostaria de saber qual procedimento devo tomar? Pois estamos com 4 tarefas paradas com o presidente da empresa e o mesmo não consegue voltar a tarefa para onde deve.

# Solução

O fluxo de retorno apenas é possível para a versão do processo corrente durante a movimentação. Por isso, caso uma solicitação seja convertida para uma outra versão, **durante a primeira movimentação da solicitação** **após a conversão, essa solicitação não pode retornar a atividade anterior**, pois neste caso a solicitação terá uma nova movimentação representando sua conversão e portanto perderá a possibilidade de retorno imediato.

Para mais informações, consulte nossa documentação sobre [Fluxos.](https://tdn.totvs.com/x/DRgwDg)


<!-- anchors: BPM035Épermitidoretornoapósconverterasolicitação?-Índice, BPM035Épermitidoretornoapósconverterasolicitação?-Plataforma, BPM035Épermitidoretornoapósconverterasolicitação?-Ocorrência, BPM035Épermitidoretornoapósconverterasolicitação?-Solução -->
