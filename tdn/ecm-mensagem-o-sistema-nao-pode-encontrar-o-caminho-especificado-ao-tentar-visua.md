---
title: "ECM - Mensagem \"O sistema não pode encontrar o caminho especificado\" ao tentar visualizar documento"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=266982513"
scraped_at: "2026-03-09T03:32:10.283Z"
depth: 2
anchors: 6
child_links: 38
---

# ECM - Mensagem "O sistema não pode encontrar o caminho especificado" ao tentar visualizar documento

# Índice

# Plataforma

**Produto**: TOTVS Fluig Plataforma

**Versão:** 1.5.11

# Ocorrência

Ao abrir algum documento na plataforma ocorre o erro "null\999\1000\Documento.pdf (O sistema não pode encontrar o caminho especificado)".

No arquivo de log ocorrem os erros abaixo o erro abaixo:

[?](#)

| `13:33:36,856 INFO  [com.datasul.technology.webdesk.dm.business.DocumentBO] (http-pool-threads - 87) getDocumentInfo - path - c:\fluig\volume/public/999/1000/Documento.pdf``13:33:37,278 ERROR [com.datasul.technology.webdesk.foundation.business.GlobalParamBO] (http-pool-threads - 87) Failed to read GlobalParam: : java.lang.StringIndexOutOfBoundsException: String index out of range: -1``[...]``13:33:37,294 ERROR [com.totvs.technology.ecm.services.documentview.DocumentViewRest] (http-pool-threads - 87) null\999\1000\Documento.pdf (O sistema não pode encontrar o caminho especificado): java.io.FileNotFoundException: null\999\1000\Documento.pdf (O sistema não pode encontrar o caminho especificado)` |
| --- |

![](/download/attachments/266982513/image2016-10-7%2016%3A19%3A30.png?version=1&modificationDate=1475868326000&api=v2)

**Figura 1 - Erro ao visualizar documento**

# Causa

O volume da plataforma pode estar vazio.

# Solução

Acesse a plataforma com o usuário wcmadmin e acesse Painel de Controle > Gerais > Volumes.

Edite o volume cadastrado e verifique o caminho definido. Acesse o caminho e verifique se ele está de acordo com a estrutura da imagem abaixo.

Converse com o responsável pela plataforma da sua empresa para saber onde está o conteúdo do volume. Uma nova versão da plataforma pode ter sido instalada e esqueceram de mover o conteúdo do volume para o novo local.

![](/download/attachments/266982513/image2016-10-7%2016%3A20%3A42.png?version=1&modificationDate=1475868326000&api=v2)

**Figura 2 - Estrutura do volume**


<!-- anchors: ECMMensagem"Osistemanãopodeencontrarocaminhoespecificado"aotentarvisualizardocumento-Índice, ECMMensagem"Osistemanãopodeencontrarocaminhoespecificado"aotentarvisualizardocumento-Plataforma, ECMMensagem"Osistemanãopodeencontrarocaminhoespecificado"aotentarvisualizardocumento-Ocorrência, highlighter_10488, ECMMensagem"Osistemanãopodeencontrarocaminhoespecificado"aotentarvisualizardocumento-Causa, ECMMensagem"Osistemanãopodeencontrarocaminhoespecificado"aotentarvisualizardocumento-Solução -->
