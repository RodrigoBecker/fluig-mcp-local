---
title: "BPM 058 - Por que a solicitação fica presa/parada em uma atividade automática?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=244434299"
scraped_at: "2026-03-09T03:55:23.273Z"
depth: 2
anchors: 6
child_links: 133
---

# BPM 058 - Por que a solicitação fica presa/parada em uma atividade automática?

# Índice

# Plataforma

**Produto:  **fluig

# Ocorrência

Usuário tem uma solicitação que ficou parada em uma atividade automática e não consegue movimentar.

# Causa

Se esta atividade for seguida de outra atividade automática, na sequência houver uma atividade atribuída Por Campo de Formulário configurada para "Sempre" selecionar destinatários e a movimentação não foi feita pela interface do fluig, a solicitação pode ficar parada na atividade automática.

**Exemplo: Atividade Automática 1 → Automática 2 → Atividade por campo de formulário.**

****

****

**Atribuição "por Campo de Formulário" e Seleciona Colaboradores "Sempre".**

# Solução

1. Configurar um gestor para o processo.
2. Na Central de tarefas do usuário que foi selecionado como gestor, acessar a aba **Minhas tarefas sob gerência** e localizar a solicitação.
3. Abrir a solicitação e clicar no botão **Enviar**.
4. Selecionar a atividade de destino e enviá-la para a próxima atividade.

# Observações

Para futuros casos, [consulte esta FAQ](https://tdn.totvs.com/x/XeyFDg)[.](https://tdn.totvs.com/x/XeyFDg)


<!-- anchors: BPM058Porqueasolicitaçãoficapresa/paradaemumaatividadeautomática?-Índice, BPM058Porqueasolicitaçãoficapresa/paradaemumaatividadeautomática?-Plataforma, BPM058Porqueasolicitaçãoficapresa/paradaemumaatividadeautomática?-Ocorrência, BPM058Porqueasolicitaçãoficapresa/paradaemumaatividadeautomática?-Causa, BPM058Porqueasolicitaçãoficapresa/paradaemumaatividadeautomática?-Solução, BPM058Porqueasolicitaçãoficapresa/paradaemumaatividadeautomática?-Observações -->
