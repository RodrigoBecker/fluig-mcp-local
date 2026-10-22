---
title: "BPM 044 - Por que certo usuário não aparece na lista de pessoas disponíveis para transferência de tarefa?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=240296836"
scraped_at: "2026-03-09T03:54:24.646Z"
depth: 2
anchors: 6
child_links: 133
---

# BPM 044 - Por que certo usuário não aparece na lista de pessoas disponíveis para transferência de tarefa?

# Índice

# Plataforma

**Produto:  **fluig

**Versão:** todas

# Ocorrência

Ao tentar transferir uma solicitação para um usuário, o mesmo não aparece na lista de pessoas disponíveis. Apenas após colocar o usuário como Gestor do processo foi possível realizar a transferência.

# Causa

Usuário para o qual se deseja transferir a tarefa não se encaixa no mecanismo de atribuição da atividade.

# Solução

Somente será possível transferir uma solicitação para um usuário pertencente ao mecanismo de atribuição da atividade em questão. Por exemplo, o processo X está na atividade2, esta atividade está configurada para atribuição por executor de atividade1, ou seja, somente o usuário que executou a atividade1 (e o gestor) será apto a executar a atividade2.

Para que seja possível transferir a atividade2 para outro usuário, você precisará alterar o mecanismo de atribuição desta atividade, colocando atribuição por papel, por exemplo, será possível transferir a atividade para qualquer usuário cadastrado no papel. Após alterar esta atividade, você precisará liberar uma nova versão do processo e realizar a conversão da solicitação em questão através do menu Converter solicitações.

# Observações

Este comportamento não foi alterado na versão 1.5, desde as primeiras versões do fluig não é possível transferir uma atividade para um usuário que não se encaixa no mecanismo de atribuição da mesma.


<!-- anchors: BPM044Porquecertousuárionãoaparecenalistadepessoasdisponíveisparatransferênciadetarefa?-Índice, BPM044Porquecertousuárionãoaparecenalistadepessoasdisponíveisparatransferênciadetarefa?-Plataforma, BPM044Porquecertousuárionãoaparecenalistadepessoasdisponíveisparatransferênciadetarefa?-Ocorrência, BPM044Porquecertousuárionãoaparecenalistadepessoasdisponíveisparatransferênciadetarefa?-Causa, BPM044Porquecertousuárionãoaparecenalistadepessoasdisponíveisparatransferênciadetarefa?-Solução, BPM044Porquecertousuárionãoaparecenalistadepessoasdisponíveisparatransferênciadetarefa?-Observações -->
