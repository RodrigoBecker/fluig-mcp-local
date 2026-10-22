---
title: "Release 12.3.11"
url: "https://tdn.totvs.com/display/public/fluig/Release+12.3.11"
scraped_at: "2026-03-09T04:37:16.662Z"
depth: 3
anchors: 2
child_links: 39
---

# Release 12.3.11

Este documento contém breves descritivos acerca das implementações e correções efetuadas no pacote **12.3.11**.

## Implementações

#### TOTVS | ESB Plugin e TOTVS | ESB Server

**Função**: **Componente Transformer**

**Situação**: Era apresentado o erro "The entity name must immediately follow the '&' in the entity reference." ao executar o componente DocIdentifier em um XML com o caractere **&** no seu conteúdo, pois esse caractere não é considerado válido para conteúdo de uma tag XML

**Solução**: Realizada correção para substituir o caractere **&** por **E** ao utilizar o componente DocIdentifier e ao utilizar a opção "Remove Special Chars" do componente Transformer.


<!-- anchors: Release12.3.11-Implementações, Release12.3.11-TOTVS|ESBPlugineTOTVS|ESBServer -->
