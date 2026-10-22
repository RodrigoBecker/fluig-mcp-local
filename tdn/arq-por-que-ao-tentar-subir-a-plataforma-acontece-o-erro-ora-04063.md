---
title: "ARQ - Por que ao tentar subir a plataforma acontece o erro ORA-04063?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=287057668"
scraped_at: "2026-03-04T03:38:01.740Z"
depth: 4
anchors: 5
child_links: 62
---

# ARQ - Por que ao tentar subir a plataforma acontece o erro ORA-04063?

# Índice

# Plataforma

**Produto:** TOTVS Fluig Plataforma

**Banco de Dados:**  Oracle

# Ocorrência

Por que ao tentar subir a plataforma acontece o erro ORA-04063: view "FLUIG.ALL_SEQUENCES" has?

# Causa

Isso acontece por que na versão 12.2 do Oracle foi modificado a tabela ALL_SEQUENCES. Uma coluna desta tabela foi retirada sendo que a plataforma utiliza ela para views, conforme a documentação de configuração do Oracle.

# Solução

Dropar as views existentes e recriar as mesmas. O código está na documentação de [Configuração do Banco de Dados Oracle](/pages/viewpage.action?pageId=257623480).


<!-- anchors: ARQPorqueaotentarsubiraplataformaaconteceoerroORA04063?-Índice, ARQPorqueaotentarsubiraplataformaaconteceoerroORA04063?-Plataforma, ARQPorqueaotentarsubiraplataformaaconteceoerroORA04063?-Ocorrência, ARQPorqueaotentarsubiraplataformaaconteceoerroORA04063?-Causa, ARQPorqueaotentarsubiraplataformaaconteceoerroORA04063?-Solução -->
