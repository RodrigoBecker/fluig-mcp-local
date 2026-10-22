---
title: "ARQ - Como resolver o erro ORA-01536 indisponibilidade parcial de recursos da plataforma?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=235327854"
scraped_at: "2026-03-04T03:37:30.614Z"
depth: 4
anchors: 7
child_links: 64
---

# ARQ - Como resolver o erro ORA-01536 indisponibilidade parcial de recursos da plataforma?

# Índice

# Plataforma

**Produto: **TOTVS Fluig Plataforma

**Banco de Dados:** Oracle

# Ocorrência

A plataforma sobe mas não fica funcional, apresentando inconsistências no log do servidor de aplicação. Dentre elas falha na compilação do módulo do LMS. Como resolver esta inconsistência?

# Causa

Política de permissão/cota para a base de dados utilizada na instalação.

**server.log**

[?](#)

| `ERROR [com.fluig.startup.service.DatabaseUpdater] (EJB ASYNC -``6``) ORA-``01536``: cota de espaço excedida para o tablespace``'FLUIG'` |
| --- |

Devido ao fluxo de registro da aplicação, a estrutura de tabelas criada na base de dados consome recurso conforme alocação especificada. O dimensionamento inferior ao especificado pode impedir o registro por completo dessa estrutura, ocasionando erros secundários.

# Solução

Liberar espaço para *tablespace* seguindo os requisitos contidos no [Dimensionamento](/display/fluig/Dimensionamento) e [Configuração do banco de dados Oracle](/pages/viewpage.action?pageId=142811225).****

# Observações

A falta do registro da estrutura de dados da plataforma pode acarretar indisponibilidade total ou mesmo parcial, dependendo do estado que se encontrar a base de dados da aplicação.


<!-- anchors: ARQComoresolveroerroORA01536indisponibilidadeparcialderecursosdaplataforma?-Índice, ARQComoresolveroerroORA01536indisponibilidadeparcialderecursosdaplataforma?-Plataforma, ARQComoresolveroerroORA01536indisponibilidadeparcialderecursosdaplataforma?-Ocorrência, ARQComoresolveroerroORA01536indisponibilidadeparcialderecursosdaplataforma?-Causa, highlighter_85403, ARQComoresolveroerroORA01536indisponibilidadeparcialderecursosdaplataforma?-Solução, ARQComoresolveroerroORA01536indisponibilidadeparcialderecursosdaplataforma?-Observações -->
