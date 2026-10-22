---
title: "BPM 034 - O usuário que não é responsável pela tarefa consegue movimentá-la?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=236429573"
scraped_at: "2026-03-09T03:53:40.733Z"
depth: 2
anchors: 5
child_links: 132
---

# BPM 034 - O usuário que não é responsável pela tarefa consegue movimentá-la?

# Índice

# Plataforma

**Produto: **fluig

**Versão: **Todas as versões

# Ocorrência

Usuário que não é responsável pela tarefa está conseguindo acessar a solicitação e movimentá-la.

# Causa

Quando definido um usuário Gestor do processo, este usuário terá permissão de movimentar todas as solicitações do processo, em qualquer atividade, inclusive terá permissão de cancelamento da solicitação. Isto não é uma falha de segurança e sim uma regra de negócio do fluig.

O usuário Gestor, poderá visualizar todas as solicitações do processo do qual é gestor pela aba 'Minhas tarefas sob gerência' da Central de tarefas. O cadastro de um usuário Gestor é útil para as situações onde algum usuário é impossibilitado de movimentar uma atividade, e para processos onde algum usuário sempre será responsável e precisará estar ciente de todas as movimentações.

# Solução

Para que não seja possível que outro usuário, além do usuário responsável pela atividade, possa movimentar uma solicitação, remova o usuário Gestor do processo.

Faça isto através do menu 'Configurar Processos': edite o processo em questão e na opção 'Propriedades', aba 'Geral', campo 'Gestor', remova o mecanismo deixando 'Selecione um Mecanismo' e salve.

![](/download/attachments/236429573/Sem%20t%C3%ADtulo.png?version=1&modificationDate=1462477447000&api=v2)


<!-- anchors: BPM034Ousuárioquenãoéresponsávelpelatarefaconseguemovimentála?-Índice, BPM034Ousuárioquenãoéresponsávelpelatarefaconseguemovimentála?-Plataforma, BPM034Ousuárioquenãoéresponsávelpelatarefaconseguemovimentála?-Ocorrência, BPM034Ousuárioquenãoéresponsávelpelatarefaconseguemovimentála?-Causa, BPM034Ousuárioquenãoéresponsávelpelatarefaconseguemovimentála?-Solução -->
