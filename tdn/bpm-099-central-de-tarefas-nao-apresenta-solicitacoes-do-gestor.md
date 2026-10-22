---
title: "BPM 099 - Central de tarefas não apresenta solicitações do gestor"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=442958143"
scraped_at: "2026-03-09T03:58:08.165Z"
depth: 2
anchors: 4
child_links: 131
---

# BPM 099 - Central de tarefas não apresenta solicitações do gestor

# Índice

# Plataforma

**Produto: **fluig

# Ocorrência

Após alterar o gestor da solicitação para o mecanismo **Por campo de formulário**, **Por executor de atividade** ou **Mecanismos customizados** (gerados através do Studio), algumas solicitações não ficam disponíveis para visualização na central de tarefas e na consulta de solicitações.

Confira a solução a seguir para entender melhor.

# Solução

O gestor do fluig é normalmente configurado por processo. Porém, existem situações onde se deseja configurar o gestor por solicitação e a única forma possível era através do mecanismo customizado, o que gerava muita lentidão na consulta, já que era necessário carregar solicitação por solicitação.

A solução se deu com a implementação do cache, que consiste basicamente em criar um cache dessa informação que será utilizada em consultas e na Central de tarefas, o qual será alimentado sempre que a solicitação for salva.

Sempre que editar as propriedades de um processo e alterar o Gestor, o cache atual será limpo e um novo cache de atualização será criado no Agendador de tarefas. Com isso, as atualizações serão aplicadas em blocos de forma que não sobrecarregue o servidor. Assim, em pouquíssimo tempo a central de tarefas e a consulta de solicitações serão atualizadas.

Então, se elas ainda não estão sendo exibidas, é porque o cache deve estar sendo gerado.

Fique por dentro!

Para conhecer mais sobre os mecanismos de atribuição que utilizam o cache, acesse nossa documentação de [Configuração do processo](https://tdn.totvs.com/x/mga5Dw) no nosso manual do usuário.


<!-- anchors: BPM099Centraldetarefasnãoapresentasolicitaçõesdogestor-Índice, BPM099Centraldetarefasnãoapresentasolicitaçõesdogestor-Plataforma, BPM099Centraldetarefasnãoapresentasolicitaçõesdogestor-Ocorrência, BPM099Centraldetarefasnãoapresentasolicitaçõesdogestor-Solução -->
