---
title: "ESB - Como consumir informações de um sistema que não possui WS através do TOTVS ESB?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=266979158"
scraped_at: "2026-03-09T03:39:39.146Z"
depth: 2
anchors: 4
child_links: 40
---

# ESB - Como consumir informações de um sistema que não possui WS através do TOTVS ESB?

# Índice

# Plataforma

**Produto: **TOTVS ESB

# Ocorrência

É necessário consumir informações de um determinado sistema que não possui Web Services e cujo banco de dados é ORACLE. É possível consumir as informações via TOTVS ESB, e gerar um WS a partir dele para ser consumido pelo TOTVS Fluig Plataforma e por outras aplicações?

# Solução

É possível disponibilizar as informações em formato TXT ou XML para o TOTVS ESB e ele recebe essas informações, realiza a transformação e envia para o Web Service do TOTVS Fluig Plataforma

Os componentes abaixo serão utilizados:

- [TOTVS Sender](https://tdn.totvs.com/display/fluig/TOTVS+Sender)
- [Transformer](https://tdn.totvs.com/display/fluig/Transformer)
- [FILE Sender](https://tdn.totvs.com/display/fluig/FILE+Sender)


<!-- anchors: ESBComoconsumirinformaçõesdeumsistemaquenãopossuiWSatravésdoTOTVSESB?-Índice, ESBComoconsumirinformaçõesdeumsistemaquenãopossuiWSatravésdoTOTVSESB?-Plataforma, ESBComoconsumirinformaçõesdeumsistemaquenãopossuiWSatravésdoTOTVSESB?-Ocorrência, ESBComoconsumirinformaçõesdeumsistemaquenãopossuiWSatravésdoTOTVSESB?-Solução -->
