---
title: "BPM 053 - Como manter os anexos visíveis durante a movimentação de solicitações?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=243657927"
scraped_at: "2026-03-09T03:55:03.437Z"
depth: 2
anchors: 5
child_links: 133
---

# BPM 053 - Como manter os anexos visíveis durante a movimentação de solicitações?

# Índice

# Plataforma

**Produto:  **fluig

**Versão:** 1.5.8 e anteriores

# Ocorrência

Foi implementado em um processo uma validação para que o usuário seja obrigado a preencher o campo "Observação" antes de movimentar a solicitação. Porém, quando o usuário anexa arquivos à solicitação e movimenta o processo sem preencher o campo, a validação funciona corretamente, mas ocorre erro ao enviar os anexos.

# Causa

O erro ocorre pois, quando a solicitação é movimentada, os arquivos anexados são movidos da pasta temporária para serem anexados à solicitação. Quando ocorre a interrupção do processo de movimentação pelo desenvolvimento que valida o preenchimento de campos, os arquivos já foram removidos. Desta forma, na próxima movimentação, a pasta está vazia e os arquivos não são localizados.

# Solução

Atualizar o fluig para a [versão 1.5.9](/pages/viewpage.action?pageId=235596849), onde tal situação foi corrigida ou, caso não seja possível, instruir os usuários a remover os anexos e selecionar os arquivos novamente.


<!-- anchors: BPM053Comomanterosanexosvisíveisduranteamovimentaçãodesolicitações?-Índice, BPM053Comomanterosanexosvisíveisduranteamovimentaçãodesolicitações?-Plataforma, BPM053Comomanterosanexosvisíveisduranteamovimentaçãodesolicitações?-Ocorrência, BPM053Comomanterosanexosvisíveisduranteamovimentaçãodesolicitações?-Causa, BPM053Comomanterosanexosvisíveisduranteamovimentaçãodesolicitações?-Solução -->
