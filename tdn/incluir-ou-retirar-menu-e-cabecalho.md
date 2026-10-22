---
title: "Incluir ou retirar menu e cabeçalho"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=185749423"
scraped_at: "2026-03-09T05:01:06.312Z"
depth: 3
anchors: 7
child_links: 50
---

# Incluir ou retirar menu e cabeçalho

# Índice

# Objetivo

O objetivo desse guia é apresentar as alterações que devem ser feitas ao criar um *layout* personalizado.

# Personalizando um layout

Quando se personaliza um *layout* e é necessário retirar o cabeçalho ou o menu padrão da plataforma, há um elemento cuja edição é necessária. Procure pelo elemento "wcm-all-content" no código:

[?](#)

| `````...``` |
| --- |

Caso não deseje colocar o menu *(tag*"<@wcm.menu />"*)*, modifique o *style* da div acima, conforme código a seguir:

[?](#)

| `````...``` |
| --- |

Se, pelo contrário, for necessário retirar o cabeçalho, então o código ficará assim:

[?](#)

| `````...``` |
| --- |

No último cenário, quando não se deseja nem menu e nem cabeçalho, utilize os seguintes parâmetros:

[?](#)

| `````...``` |
| --- |


<!-- anchors: Incluirouretirarmenuecabeçalho-Índice, Incluirouretirarmenuecabeçalho-Objetivo, Incluirouretirarmenuecabeçalho-Personalizandoumlayout, highlighter_651942, highlighter_83373, highlighter_142953, highlighter_242371 -->
