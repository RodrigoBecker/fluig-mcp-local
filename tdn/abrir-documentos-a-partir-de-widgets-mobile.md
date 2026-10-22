---
title: "Abrir documentos a partir de widgets mobile"
url: "https://tdn.totvs.com/display/public/fluig/Abrir+documentos+a+partir+de+widgets+mobile"
scraped_at: "2026-03-09T04:12:30.223Z"
depth: 2
anchors: 7
child_links: 66
---

# Abrir documentos a partir de widgets mobile

# Índice

## Objetivo

Este guia tem por objetivo auxiliar usuários que queiram abrir documentos no mobile por meio de widgets utilizando uma chamada para a função "JSInterface.openDocument".

A partir da versão **1.16.16 do IOS** e da versão **1.6.5.28 do Android** é possível abrir documentos via widgets nos aplicativos Fluig Mobile. Veja o passo a passo abaixo.

## Abrir documentos via widgets mobile

---

Para abrirmos documentos via widgets, basta acrescentarmos uma chamada para a função **JSInterface.openDocument** passando como parâmetro e código do documento no GED, além disso é possível também passarmos o título que será utilizado na janela do documento. Como no exemplo abaixo:

- [Passo 1](#)
- [Passo 2](#)

Será preciso checar se está no mobile realmente.

[?](#)

| `// O primeiro passo é checarmos se estamos no mobile``if (WCMAPI.isMobileAppMode()) {````var config = {````documentId: 83, // Código do documento que será aberto````title: "Meu documento PDF" // Título que será usado na janela (Opcional)````};` ```// Por fim abrimos o documento.````var configString = JSON.stringify(config);````JSInterface.openDocument(configString);``}` |
| --- |

Ao adicionar esta chamada os documentos no Fluig mobile serão abertos via widgets.


<!-- anchors: Abrirdocumentosapartirdewidgetsmobile-Índice, Abrirdocumentosapartirdewidgetsmobile-Objetivo, Abrirdocumentosapartirdewidgetsmobile-Abrirdocumentosviawidgetsmobile, sample, sample-1, highlighter_360456, sample-2 -->
