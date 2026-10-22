---
title: "BPM 002 - Como movimentar automaticamente uma atividade com o Fluxo Automático?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=189308862"
scraped_at: "2026-03-09T03:33:42.999Z"
depth: 2
anchors: 4
child_links: 131
---

# BPM 002 - Como movimentar automaticamente uma atividade com o Fluxo Automático?

# Índice

# Plataforma

**Produto:  **fluig

**Versão: **Todas as versões

# Ocorrência

Gostaria de saber se há alguma maneira de concluir automaticamente uma atividade (e movimentar para a próxima) sem haver a necessidade do usuário interagir com o fluxo e também sem utilizar a funcionalidade de decisão automática.

# Solução

Para esta necessidade pode ser utilizando um recurso chamado Fluxo Automático. 

Quando assinalado, o Fluxo Automático determina que uma atividade atrasada será movimentada automaticamente para a atividade destino. 

Para que isto aconteça, é necessário configurar um agendamento do tipo Fluxo Automático, a partir da funcionalidade Agendador de Tarefas. 

Para configurar um fluxo automático:

- Acesse o Fluig e clique no menu Processos > Configurar Processos.
- Selecione o processo que deseja alterar e clique em Editar.
- Passe o mouse sobre a seta do fluxo que deseja automatizar e clique no botão em formato de engrenagem para abrir as propriedades do fluxo.

![](/download/attachments/189308862/fluxo_automatico%20%281%29.png?version=1&modificationDate=1433268443000&api=v2)
- Marque o checkbox Fluxo Automático e confirme.

![](/download/attachments/189308862/fluxo_automatico%20%282%29.png?version=1&modificationDate=1433268443000&api=v2)
- Salve e libere a versão do processo.

**Importante:** Além de um fluxo automático, é necessário definir um fluxo comum partindo desta atividade para outra tarefa (ou até mesmo para a mesma tarefa).

Para que o fluxo automático funcione corretamente, além de incluir o *job*do fluxo automático, é necessário incluir o *job*de Tarefas atrasadas.
O fluxo automático é acionado quando uma tarefa está atrasada, mas caso o cliente não tenha criado o *job*de tarefa atrasada no agendador, o fluxo não será movimentado.

Em seguida, acesse Painel de Controle > Gerais > Agendador de Tarefas.

- Clique em Adicionar.

- Preencha a descrição do agendamento e selecione o tipo Fluxo Automático.

- Defina a frequência com a qual esta tarefa será executada de acordo com sua necessidade.

![](/download/attachments/189308862/fluxo_automatico%20%284%29.png?version=3&modificationDate=1553284995117&api=v2)

A partir de agora, cada vez que a tarefa for executada, os processos que possuírem atividades em atraso e que tenham sido configurados com o Fluxo automático serão movimentados.


<!-- anchors: BPM002ComomovimentarautomaticamenteumaatividadecomoFluxoAutomático?-Índice, BPM002ComomovimentarautomaticamenteumaatividadecomoFluxoAutomático?-Plataforma, BPM002ComomovimentarautomaticamenteumaatividadecomoFluxoAutomático?-Ocorrência, BPM002ComomovimentarautomaticamenteumaatividadecomoFluxoAutomático?-Solução -->
