---
title: "BPM 004 - Por que os campos de formulário não aparecem na criação de filtro na Central de Tarefas?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=195301957"
scraped_at: "2026-03-09T03:52:36.854Z"
depth: 2
anchors: 4
child_links: 131
---

# BPM 004 - Por que os campos de formulário não aparecem na criação de filtro na Central de Tarefas?

# Índice

# Plataforma

**Produto: **fluig

**Versão: **Todas as versões

# Ocorrência

Na Central de tarefas, ao tentar adicionar o filtro 'Campos de Formulário' de um processo com formulário, não é apresentado nenhum campo para seleção.

![](/download/attachments/195301957/Capturar1.JPG?version=1&modificationDate=1438117577000&api=v2)

# Solução

Na exportação do diagrama do processo para o fluig é preciso selecionar os campos descritores na aba Formulário das Propriedades do Diagrama no TDS. Estes campos serão considerados no momento da criação de um filtro.

![](/download/attachments/195301957/Capturar.JPG?version=1&modificationDate=1438117576000&api=v2)

Caso tenha desenvolvido o seu processo pela interface gráfica web do fluig, nas Propriedades do Processo, aba Formulário, selecione os campos a serem utilizados como filtro conforme exemplo abaixo. Salve as alterações e libere uma nova versão.

![](/download/attachments/195301957/Capturar2.JPG?version=1&modificationDate=1438117577000&api=v2)


<!-- anchors: BPM004PorqueoscamposdeformulárionãoaparecemnacriaçãodefiltronaCentraldeTarefas?-Índice, BPM004PorqueoscamposdeformulárionãoaparecemnacriaçãodefiltronaCentraldeTarefas?-Plataforma, BPM004PorqueoscamposdeformulárionãoaparecemnacriaçãodefiltronaCentraldeTarefas?-Ocorrência, BPM004PorqueoscamposdeformulárionãoaparecemnacriaçãodefiltronaCentraldeTarefas?-Solução -->
