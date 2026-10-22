---
title: "FORM 006 - Por que o evento beforeMovementOptions não está executando?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=201721249"
scraped_at: "2026-03-09T04:48:12.545Z"
depth: 3
anchors: 5
child_links: 41
---

# FORM 006 - Por que o evento beforeMovementOptions não está executando?

# Índice

# Plataforma

**Produto:  **fluig

**Versão:** Todas

# Ocorrência

Evento beforeMovementOptions não está executando.

# Causa

O evento beforeMovementOptions **não **executa se a atividade **não abrir o modal de seleção de usuários.** Caso a atividade já selecione o usuário, ou seja uma automática que já tenha o usuário selecionado por padrão na atividade destino, dentre outros casos onde não há seleção de usuários, o evento não é executado.

# Solução

Utilizar beforeSendValidate, outro evento de pré-envio de solicitação para formulários executado pelo fluig, verificar documentação a seguir: [Desenvolvimento de Workflow#Eventosparavalidaçãodeformulário](/display/fluig/Desenvolvimento+de+Workflow#DesenvolvimentodeWorkflow-Eventosparavalidaçãodeformulário)


<!-- anchors: FORM006PorqueoeventobeforeMovementOptionsnãoestáexecutando?-Índice, FORM006PorqueoeventobeforeMovementOptionsnãoestáexecutando?-Plataforma, FORM006PorqueoeventobeforeMovementOptionsnãoestáexecutando?-Ocorrência, FORM006PorqueoeventobeforeMovementOptionsnãoestáexecutando?-Causa, FORM006PorqueoeventobeforeMovementOptionsnãoestáexecutando?-Solução -->
