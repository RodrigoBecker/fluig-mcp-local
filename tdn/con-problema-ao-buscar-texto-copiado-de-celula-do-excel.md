---
title: "CON - Problema ao buscar texto copiado de célula do Excel"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=438298847"
scraped_at: "2026-03-09T03:30:57.644Z"
depth: 2
anchors: 5
child_links: 35
---

# CON - Problema ao buscar texto copiado de célula do Excel

# Índice

# Plataforma

**Produto:**TOTVS Fluig Plataforma

# Ocorrência

Ao copiar o conteúdo de uma célula de planilha e colar no campo de busca da plataforma, estando com a tela de Documentos aberta, é carregado um arquivo PNG na pasta atual. Conforme demonstrado abaixo: 

![](/download/attachments/438298847/C%C3%A9lula%20excel.gif?version=1&modificationDate=1542993927547&api=v2)

# Causa

A plataforma tem esse comportamento porque foi copiada a célula da planilha, e não apenas o texto. Com isso, é copiado o texto juntamente com a formatação da célula e, nesta formatação, quando colado ao componente de *upload* existente na tela de Documentos, a plataforma entende como uma imagem.

# Solução

Para realizar a colagem apenas do texto da célula, deve-se utilizar o atalho "**Ctrl + Shift + V**", que cola o texto sem a formatação.


<!-- anchors: CONProblemaaobuscartextocopiadodecéluladoExcel-Índice, CONProblemaaobuscartextocopiadodecéluladoExcel-Plataforma, CONProblemaaobuscartextocopiadodecéluladoExcel-Ocorrência, CONProblemaaobuscartextocopiadodecéluladoExcel-Causa, CONProblemaaobuscartextocopiadodecéluladoExcel-Solução -->
