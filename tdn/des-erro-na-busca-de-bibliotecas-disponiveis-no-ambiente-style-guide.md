---
title: "DES - Erro na busca de bibliotecas disponíveis no ambiente Style Guide"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=240296972"
scraped_at: "2026-03-09T03:31:44.358Z"
depth: 2
anchors: 6
child_links: 44
---

# DES - Erro na busca de bibliotecas disponíveis no ambiente Style Guide

# Índice

# Plataforma

**Produto**: TOTVS Fluig Plataforma

# Ocorrência

Há indisponibilidade no ambiente [style.fluig.com](https://style.fluig.com), assim não estamos conseguindo puxar os arquivos CSS e Javascript oriundos dele, nossos formulários não estão conseguindo abrir por causa disso.

# Solução

Alterar as chamadas de JS e CSS do Style Guide para acessar arquivos locais da própria instalação da plataforma. Abaixo lista de *imports* padrão:

[?](#)

| ```````````` |
| --- |

# Observação

Em termos de performance, ao realizar a chamada das bibliotecas disponibilizadas pela própria plataforma o desempenho será melhor do que chamar uma biblioteca publicada externamente.


<!-- anchors: DESErronabuscadebibliotecasdisponíveisnoambienteStyleGuide-Índice, DESErronabuscadebibliotecasdisponíveisnoambienteStyleGuide-Plataforma, DESErronabuscadebibliotecasdisponíveisnoambienteStyleGuide-Ocorrência, DESErronabuscadebibliotecasdisponíveisnoambienteStyleGuide-Solução, highlighter_24811, DESErronabuscadebibliotecasdisponíveisnoambienteStyleGuide-Observação -->
