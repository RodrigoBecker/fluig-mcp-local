---
title: "BPM 048 - Por que o erro \"O processo não existe ou não possui nenhuma versão ativa\" acontece?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=243644160"
scraped_at: "2026-03-09T03:54:41.927Z"
depth: 2
anchors: 5
child_links: 132
---

# BPM 048 - Por que o erro "O processo não existe ou não possui nenhuma versão ativa" acontece?

# Índice

# Plataforma

**Produto:  **fluig

# Ocorrência

Ocorre o erro "O processo [nome do processo] não existe ou não possui nenhuma versão ativa" ao tentar iniciar uma solicitação, mesmo tendo liberado versão para o respectivo processo.

![](/download/attachments/243644160/Error.PNG?version=1&modificationDate=1553532528043&api=v2)

# Causa

O processo foi criado utilizando caracteres especiais no código do processo, especificamente o caractere "tabulação" (Tecla "TAB").

# Solução

Neste caso, não é possível utilizar caracteres especiais no código do processo.


<!-- anchors: BPM048Porqueoerro"Oprocessonãoexisteounãopossuinenhumaversãoativa"acontece?-Índice, BPM048Porqueoerro"Oprocessonãoexisteounãopossuinenhumaversãoativa"acontece?-Plataforma, BPM048Porqueoerro"Oprocessonãoexisteounãopossuinenhumaversãoativa"acontece?-Ocorrência, BPM048Porqueoerro"Oprocessonãoexisteounãopossuinenhumaversãoativa"acontece?-Causa, BPM048Porqueoerro"Oprocessonãoexisteounãopossuinenhumaversãoativa"acontece?-Solução -->
