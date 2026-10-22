---
title: "DES - Por que ocorre o erro 401 - Unauthorized ao utilizar alguns exemplos de desenvolvimento?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=870389961"
scraped_at: "2026-03-09T04:14:28.482Z"
depth: 2
anchors: 7
child_links: 46
---

# DES - Por que ocorre o erro 401 - Unauthorized ao utilizar alguns exemplos de desenvolvimento?

# Índice

# Plataforma

**Produto:  **TOTVS Fluig

# Ocorrência

Ao utilizar alguns exemplos de desenvolvimento disponibilizados no [repositório de exemplos](/display/fluig/GitHub+-+Exemplos+de+desenvolvimento), ocorre a inconsistência **401 - Unauthorized** e a execução é interrompida.

# Causa

Isso ocorre porque alguns exemplos utilizam bibliotecas que são disponibilizadas no repositório de artefatos do Fluig no Nexus, que agora é privado e passou a exigir autenticação.

# Solução

É necessário solicitar as credenciais de acesso ao Nexus, que permitirá que as dependências dos exemplos sejam baixadas corretamente.

Para isso, abra um [*ticket*](https://centraldeatendimento.fluig.com/hc/pt-br) para o time de Atendimento Fluig.

## Como utilizar as credenciais?

Com as credenciais em mãos, adicione o bloco de código abaixo no arquivo **settings.xml** do projeto, substituindo:

- "inserir_o_usuário_fornecido" pelo **usuário enviado** pelo atendimento;

- "inserir_a_senha_fornecida" pela **senha enviada** pelo atendimento.

[?](#)

| `````````nexus````inserir_o_usuário_fornecido````inserir_a_senha_fornecida``````` |
| --- |


<!-- anchors: DESPorqueocorreoerro401Unauthorizedaoutilizaralgunsexemplosdedesenvolvimento?-Índice, DESPorqueocorreoerro401Unauthorizedaoutilizaralgunsexemplosdedesenvolvimento?-Plataforma, DESPorqueocorreoerro401Unauthorizedaoutilizaralgunsexemplosdedesenvolvimento?-Ocorrência, DESPorqueocorreoerro401Unauthorizedaoutilizaralgunsexemplosdedesenvolvimento?-Causa, DESPorqueocorreoerro401Unauthorizedaoutilizaralgunsexemplosdedesenvolvimento?-Solução, DESPorqueocorreoerro401Unauthorizedaoutilizaralgunsexemplosdedesenvolvimento?-Comoutilizarascredenciais?, highlighter_22169 -->
