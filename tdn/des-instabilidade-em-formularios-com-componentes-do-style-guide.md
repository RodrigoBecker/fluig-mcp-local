---
title: "DES - Instabilidade em formulários com componentes do Style Guide"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=240288988"
scraped_at: "2026-03-09T04:45:32.169Z"
depth: 3
anchors: 5
child_links: 56
---

# DES - Instabilidade em formulários com componentes do Style Guide

# Índice

# Plataforma

**Produto:**TOTVS Fluig Plataforma

# Ocorrência

Instabilidade em formulários que utilizam componentes do Style Guide, como zooms por exemplo.

# Causa

Nos formulários criados pelo TDS/Eclipse são adicionados por padrão os arquivos http://style.fluig.com/css/fluig-style-guide.min.css e http://style.fluig.com/js/fluig-style-guide.min.js. 
Quando existe algum bloqueio na rede ou instabilidade de conexão, o navegador pode não conseguir acessar esses arquivos através destas URLs.

# Solução

Substituir as URLs pelos caminhos dos arquivos internos do fluig: /portal/resources/style-guide/css/fluig-style-guide.min.css e /portal/resources/style-guide/js/fluig-style-guide.min.js, como o exemplo abaixo:

- <link rel="stylesheet" type="text/css" href="/portal/resources/style-guide/css/fluig-style-guide-carousel.min.css">
- <script src="/portal/resources/style-guide/js/fluig-style-guide-carousel.min.js"></script>
- <link rel="stylesheet" type="text/css" href="/portal/resources/style-guide/css/fluig-style-guide.min.css">
- <script src="/portal/resources/style-guide/js/fluig-style-guide.min.js"></script>

Caso tenha os arquivos dentro da pasta principal do projeto substituir no HTML do seu formulário por, conforme o exemplo abaixo:

- <link rel="stylesheet" type="text/css" href="fluig-style-guide.min.css">
- <link rel="stylesheet" type="text/css" href="fluig-style-guide-carousel.min.css">
- <script type="text/javascript" src="fluig-style-guide.min.js" charset="utf-8"></script>
- <script type="text/javascript" src="fluig-style-guide-carousel.min.js" charset="utf-8"></script>


<!-- anchors: DESInstabilidadeemformulárioscomcomponentesdoStyleGuide-Índice, DESInstabilidadeemformulárioscomcomponentesdoStyleGuide-Plataforma, DESInstabilidadeemformulárioscomcomponentesdoStyleGuide-Ocorrência, DESInstabilidadeemformulárioscomcomponentesdoStyleGuide-Causa, DESInstabilidadeemformulárioscomcomponentesdoStyleGuide-Solução -->
