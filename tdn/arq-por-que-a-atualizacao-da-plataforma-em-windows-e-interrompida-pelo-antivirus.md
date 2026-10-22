---
title: "ARQ - Por que a atualização da plataforma em Windows é interrompida pelo antivírus?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=244423762"
scraped_at: "2026-03-09T04:43:50.377Z"
depth: 3
anchors: 5
child_links: 45
---

# ARQ - Por que a atualização da plataforma em Windows é interrompida pelo antivírus?

# Índice

# Plataforma

**Ambiente:** Windows

# Ocorrência

Renomeamos a pasta de instalação da plataforma no momento da atualização porém, está ocorrendo erro. Mantemos o nome original e após término da *wizard* de atualização, renomeamos a pasta para o nome que desejamos. Portanto, como proceder para renomear a pasta de instalação no momento da atualização?

# Causa

Durante a atualização da plataforma, o instalador renomeia temporariamente a pasta de instalação no servidor. Ao finalizar a atualização, o nome original da pasta é restaurado. O problema ocorre porque o antivírus varre a pasta de instalação durante este processo, acusando que os arquivos estão sendo utilizados pelo Windows.

# Solução

Adicionar uma exceção para o diretório de instalação da plataforma Fluig nas configurações do programa antivírus.


<!-- anchors: ARQPorqueaatualizaçãodaplataformaemWindowséinterrompidapeloantivírus?-Índice, ARQPorqueaatualizaçãodaplataformaemWindowséinterrompidapeloantivírus?-Plataforma, ARQPorqueaatualizaçãodaplataformaemWindowséinterrompidapeloantivírus?-Ocorrência, ARQPorqueaatualizaçãodaplataformaemWindowséinterrompidapeloantivírus?-Causa, ARQPorqueaatualizaçãodaplataformaemWindowséinterrompidapeloantivírus?-Solução -->
