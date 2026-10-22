---
title: "ARQ - Como exportar base de dados MySQL?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=684009476"
scraped_at: "2026-03-09T03:30:09.942Z"
depth: 2
anchors: 5
child_links: 46
---

# ARQ - Como exportar base de dados MySQL?

# Índice

# Plataforma

**Versão:** A partir da 1.6

**Ambiente:** Linux/Windows

**Banco de Dados:** MySQL

# Ocorrência

Como exportar (dump) uma base de dados MySQL?

# Solução

Para exportar uma base de dados MyQL, utilize o seguinte comando:

[?](#)

| `mysqldump -u user -p db_name --``set``-gtid-purged=OFF > C:\dumps\db_name.sql` |
| --- |

- Substitua **user** pelo usuário do banco que deseja acessar
- Substitua **db_name **pelo nome do banco de dados que deseja gerar o dump.
- Substitua **C:\dumps\db_name.sql **pelo (diretorio + nome do arquivo) de onde deseja salvar.


<!-- anchors: ARQComoexportarbasededadosMySQL?-Índice, ARQComoexportarbasededadosMySQL?-Plataforma, ARQComoexportarbasededadosMySQL?-Ocorrência, ARQComoexportarbasededadosMySQL?-Solução, highlighter_414183 -->
