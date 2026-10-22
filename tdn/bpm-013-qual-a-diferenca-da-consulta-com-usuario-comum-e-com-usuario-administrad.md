---
title: "BPM 013 - Qual a diferença da consulta com usuário comum e com usuário administrador?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=208340716"
scraped_at: "2026-03-09T03:34:48.039Z"
depth: 2
anchors: 5
child_links: 132
---

# BPM 013 - Qual a diferença da consulta com usuário comum e com usuário administrador?

# Índice

# Plataforma

**Produto:  **fluig

**Versão: **Todas as versões

# Ocorrência

Consulta de Solicitações não está achando solicitações para usuários comuns quando marcada "Todas as Solicitações Públicas".

# Causa

Há uma diferença no caso da Consulta de Solicitações para usuário administrador e comum. Para usuário administrador, há a flag "Todas as Solicitações", que faz a pesquisa procurar dentre todas as solicitações da plataforma para aquela empresa. Já para usuários comuns, a flag torna-se "Todas as Solicitações Públicas", que busca todas solicitações cujos processos são marcados como "Público" nas configurações do mesmo.

**Observação:** O comportamento acima só muda para o usuário comum, caso ele tenha selecionado a flag "Todas as Solicitações Públicas" e tenha selecionado algum processo na listagem de processos. Neste caso o se o usuário possuir algum processo igual ao selecionado a plataforma irá retorná-lo, mesmo este processo não sendo publico.

# Solução

É um comportamento da plataforma, não um problema real, sendo possível marcar os processos como públicos caso seja realmente necessário que usuários comuns busquem solicitações que os mesmos não tem acesso.


<!-- anchors: BPM013Qualadiferençadaconsultacomusuáriocomumecomusuárioadministrador?-Índice, BPM013Qualadiferençadaconsultacomusuáriocomumecomusuárioadministrador?-Plataforma, BPM013Qualadiferençadaconsultacomusuáriocomumecomusuárioadministrador?-Ocorrência, BPM013Qualadiferençadaconsultacomusuáriocomumecomusuárioadministrador?-Causa, BPM013Qualadiferençadaconsultacomusuáriocomumecomusuárioadministrador?-Solução -->
