---
title: "ARQ - Por que está ocorrendo o aviso \"Diretório Físico não é um diretório válido!\" ao alterar diretório do volume?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=269436043"
scraped_at: "2026-03-09T03:30:25.927Z"
depth: 2
anchors: 6
child_links: 42
---

# ARQ - Por que está ocorrendo o aviso "Diretório Físico não é um diretório válido!" ao alterar diretório do volume?

# Índice

# Plataforma

**Produto: ** TOTVS Fluig Plataforma

# Ocorrência

Por que ao tentar editar o caminho do volume na plataforma, ocorre o aviso "Diretório Físico não é um diretório válido!"?

![](/download/attachments/269436043/diret%C3%B3rio.PNG?version=2&modificationDate=1553784222537&api=v2)

# Causa

A pasta do novo diretório não está vazia. Conforme erro demonstrado no arquivo de log:

**Arquivo de log**

[?](#)

| 1024 | `11:51:09,120 ERROR [com.totvs.technology.ecm.services.volume.VolumeRest] (http-/10.1.1.10:8080-6) Error adding volume: com.totvs.technology.foundation.common.exception.FDNInvalidDefaultDirException: Diretório Físico informado não esta vazio, por favor escolha outro diretório!` |
| --- | --- |

# Solução

Para solucionar este problema, a pasta do diretório que está sendo informado deverá estar vazia. Após informar o novo diretório do volume no painel administrativo, os arquivos referentes ao volume da plataforma deverão ser copiados para esta pasta.


<!-- anchors: ARQPorqueestáocorrendooaviso"DiretórioFísiconãoéumdiretórioválido!"aoalterardiretóriodovolume?-Índice, ARQPorqueestáocorrendooaviso"DiretórioFísiconãoéumdiretórioválido!"aoalterardiretóriodovolume?-Plataforma, ARQPorqueestáocorrendooaviso"DiretórioFísiconãoéumdiretórioválido!"aoalterardiretóriodovolume?-Ocorrência, ARQPorqueestáocorrendooaviso"DiretórioFísiconãoéumdiretórioválido!"aoalterardiretóriodovolume?-Causa, highlighter_942437, ARQPorqueestáocorrendooaviso"DiretórioFísiconãoéumdiretórioválido!"aoalterardiretóriodovolume?-Solução -->
