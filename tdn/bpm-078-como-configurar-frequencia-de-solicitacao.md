---
title: "BPM 078 - Como configurar frequência de solicitação?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=268571267"
scraped_at: "2026-03-09T03:56:46.534Z"
depth: 2
anchors: 5
child_links: 132
---

# BPM 078 - Como configurar frequência de solicitação?

# Índice

# Plataforma

**Produto:  **fluig

**Versão:** 1.5.11 Ep3

**Ambiente:** 

**Banco de Dados:** 

**Tipo de API:** Webservice

# Ocorrência

Como configurar uma frequência de cobrança para realização de uma atividade no workflow. 
em que o usuário responsável receba a notificação de tempo em tempo.

# Solução

Na atividade em que deseja notificar o responsável, configure o prazo de conclusão na aba Geral.

![](/download/attachments/268571267/salvar%20print%201.PNG?version=1&modificationDate=1477331660000&api=v2)

Na aba Atraso, Configure a notificação de responsável adicionando os valores para os prazos de Tolerância, Frequência e  Aviso de expiração.

![](/download/attachments/268571267/salvar%20print%202.PNG?version=1&modificationDate=1477331660000&api=v2)

Após o processo configurado, é necessário configurar o agendador de tarefas, para o tipo Expiração de Tarefas.

![](/download/attachments/268571267/salvar%203.PNG?version=1&modificationDate=1477331660000&api=v2)

Feito essa configuração o responsável será notificado até o momento em que a atividade não estiver atrasada.

# Observações

para atividades atrasadas é necessário criar o agendador do tipo Tarefas atrasadas.


<!-- anchors: BPM078Comoconfigurarfrequênciadesolicitação?-Índice, BPM078Comoconfigurarfrequênciadesolicitação?-Plataforma, BPM078Comoconfigurarfrequênciadesolicitação?-Ocorrência, BPM078Comoconfigurarfrequênciadesolicitação?-Solução, BPM078Comoconfigurarfrequênciadesolicitação?-Observações -->
