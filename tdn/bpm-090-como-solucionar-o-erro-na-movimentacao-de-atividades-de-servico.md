---
title: "BPM 090 - Como solucionar o erro na movimentação de atividades de serviço?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=271655314"
scraped_at: "2026-03-09T03:57:32.816Z"
depth: 2
anchors: 8
child_links: 133
---

# BPM 090 - Como solucionar o erro na movimentação de atividades de serviço?

# Índice

# Plataforma

**Produto:  **fluig

# Ocorrência

Dentro de um processo que utiliza atividades de serviço, estas não são movimentadas automaticamente, ficando a atividade pendente com o usuário System:Auto, nem mesmo o fluxo de contorno pode ser executado.

No log do servidor é exibida a seguinte mensagem:

[?](#)

| `ERROR [com.fluig.startup.service.FluigTransferHandler] (EJB ASYNC -``28``) WorkflowServiceAsyncQueue -- service jboss.naming.context.java.WorkflowServiceAsyncQueue: javax.naming.NameNotFoundException: WorkflowServiceAsyncQueue -- service jboss.naming.context.java.WorkflowServiceAsyncQueue` |
| --- |

# Causa

A fila JMS referente a atividade de serviço não foi criada durante a atualização do fluig

# Solução

Para que esta fila seja criada, será necessário incluir, no arquivo standalone.xml, o seguinte trecho de código:

[?](#)

| ```````````````````true````` |
| --- |

Para tal, busque por "jms-queue" e insira junto com as outras filas.

# Observações

Caso seu ambiente seja cloud, será necessário entrar em contato com o time responsável para atualização.


<!-- anchors: BPM090Comosolucionaroerronamovimentaçãodeatividadesdeserviço?-Índice, BPM090Comosolucionaroerronamovimentaçãodeatividadesdeserviço?-Plataforma, BPM090Comosolucionaroerronamovimentaçãodeatividadesdeserviço?-Ocorrência, highlighter_446679, BPM090Comosolucionaroerronamovimentaçãodeatividadesdeserviço?-Causa, BPM090Comosolucionaroerronamovimentaçãodeatividadesdeserviço?-Solução, highlighter_597422, BPM090Comosolucionaroerronamovimentaçãodeatividadesdeserviço?-Observações -->
