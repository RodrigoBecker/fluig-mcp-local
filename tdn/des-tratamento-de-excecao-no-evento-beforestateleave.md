---
title: "DES - Tratamento de exceção no evento beforeStateLeave"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=224448709"
scraped_at: "2026-03-09T04:50:17.579Z"
depth: 3
anchors: 5
child_links: 41
---

# DES - Tratamento de exceção no evento beforeStateLeave

# Índice

# Plataforma

**Produto:** TOTVS Fluig Plataforma

# Ocorrência

Em um processo usamos o evento *beforeStateLeave* para executar um dataset que envia dados a um *web service*. O que precisamos é que, caso haja algum erro na execução deste método, o sistema não deixe movimentar a solicitação e apresente um erro. 

Porém, hoje o erro é apresentado somente no log e o *throw* não funciona em eventos de processo. Como fazemos neste caso?

# Solução

Existem alguns eventos de processos que não permitem a execução do *throw*. Isto ocorre devido ao tempo de execução do próprio evento.

Neste caso, é recomendado o envio dos dados no evento *beforeTaskSave*, que é executado antes da tarefa ser salva / movimentada, pois neste evento, é possível utilizar o *throw*.

# Observações

A documentação sobre o tratamento de exceções pode ser consultada em [Desenvolvimento de Workflow.](https://tdn.totvs.com/display/public/fluig/Desenvolvimento+de+Workflow#DesenvolvimentodeWorkflow-Tratamentodeexceções)


<!-- anchors: DESTratamentodeexceçãonoeventobeforeStateLeave-Índice, DESTratamentodeexceçãonoeventobeforeStateLeave-Plataforma, DESTratamentodeexceçãonoeventobeforeStateLeave-Ocorrência, DESTratamentodeexceçãonoeventobeforeStateLeave-Solução, DESTratamentodeexceçãonoeventobeforeStateLeave-Observações -->
