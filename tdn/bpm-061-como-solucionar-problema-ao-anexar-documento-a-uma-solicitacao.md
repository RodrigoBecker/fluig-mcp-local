---
title: "BPM 061 - Como solucionar problema ao anexar documento à uma solicitação?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=240301110"
scraped_at: "2026-03-09T03:55:35.422Z"
depth: 2
anchors: 6
child_links: 134
---

# BPM 061 - Como solucionar problema ao anexar documento à uma solicitação?

# Índice

# Plataforma

**Produto:  **fluig

**Versão:** 1.5.9 ou inferior

# Ocorrência

Ao tentar movimentar uma solicitação, ocorre o erro "Erro ao salvar os anexos: Erro ao anexar documento à solicitação: JBAS011469: Transação é requerida para executar essa operação (tanto use a transação ou o contexto de persistência estendido).

A mensagem também pode aparecer em inglês: "Erro ao salvar os anexos: Erro ao anexar documento à solicitação: JBAS011469: *Transaction is required to perform this operation (either use a transaction or extended persistente context*).

![](/download/attachments/240301110/erro.PNG?version=1&modificationDate=1466590119000&api=v2)

**Figura 1 - Mensagem de erro ao salvar anexos durante a movimentação da atividade**

# Causa

Este erro geralmente ocorre devido alguns problemas que ocorreram na transação.

# Solução

Para contornar o problema é possível reiniciar os serviços do fluig e do banco de dados para que o sistema limpe a fila do JMS. Após este procedimento o erro não irá mais ocorrer ao movimentar a solicitação.

Para corrigir atualize o fluig para a versão 1.5.10 ou superior.

# Observações

Para saber mais sobre o procedimento de atualização acesse o [Guia de atualização do Fluig](/pages/viewpage.action?pageId=155583041).

Acompanhe as correções do produto e novas funcionalidades acessando o [Plataforma](#).


<!-- anchors: BPM061Comosolucionarproblemaaoanexardocumentoàumasolicitação?-Índice, BPM061Comosolucionarproblemaaoanexardocumentoàumasolicitação?-Plataforma, BPM061Comosolucionarproblemaaoanexardocumentoàumasolicitação?-Ocorrência, BPM061Comosolucionarproblemaaoanexardocumentoàumasolicitação?-Causa, BPM061Comosolucionarproblemaaoanexardocumentoàumasolicitação?-Solução, BPM061Comosolucionarproblemaaoanexardocumentoàumasolicitação?-Observações -->
