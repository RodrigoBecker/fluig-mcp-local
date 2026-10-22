---
title: "ARQ - Como executar jobs em apenas uma instância do Fluig?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=862608345"
scraped_at: "2026-03-09T03:29:54.039Z"
depth: 2
anchors: 7
child_links: 57
---

# ARQ - Como executar jobs em apenas uma instância do Fluig?

# Índice

# Plataforma

**Produto: ** TOTVS Fluig Plataforma

**Versão:** 1.8.1 ou superior

# Ocorrência

Duplicação dos *jobs* de tarefas intermediárias no [Agendador de tarefas](/pages/viewpage.action?pageId=234455387) devido a uma inconsistência de concorrência específica de fluxos similares ao exemplificado abaixo:

![](/download/attachments/862608345/processo-alterado.png?version=1&modificationDate=1723576865647&api=v2)

**Sobre o fluxo:**

1 - A intermediária adiciona um agendamento.

2 - O agendamento é executado e envia para o *gateway*. Depois disso, o agendamento é removido.

3 - A condição do *gateway* volta para a intermediária.

# Causa

Ocorre uma inconsistência de concorrência ao tentar adicionar e remover um mesmo agendamento quando feito em múltiplas *threads*e com múltiplas instâncias do Fluig quando existem solicitações sendo executadas paralelamente.

# Solução

Existem duas possibilidades de solução para esse caso.

**→ Alterar o processo.**

- Em vez de adicionar uma condição no *gateway* para retornar para a atividade intermediária, adicione a mesma condição na intermediária e utilize o "*return false;*" para reagendar o agendamento sem que o sistema precise removê-lo.

![](/download/attachments/862608345/script.png?version=2&modificationDate=1723577342723&api=v2)

**→ Limitar o agendamento para executar em apenas uma thread e uma instância.**

- Para isso, acesse o diretório **[diretório_instalação]\repository\wcmdir\config** e verifique se existe o arquivo **configuration.properties**.

- Se existir, abra-o com um editor de texto e adicione os parâmetros abaixo com seus respectivos valores. Se os parâmetros já existirem, verifique se os valores são os indicados abaixo. Se não forem, é necessário alterá-los.**configuration.properties**
[?](#)
| `fluig.schedule.thread.poolsize=``1``fluig.schedule.single.instance=``true` |
| --- |
- Se o arquivo de configurações não existir, é necessário criá-lo manualmente com o nome **configuration** e a extensão **.properties**. Adicione os parâmetros acima e seus respectivos valores.

- Em seguida, reinicie os serviços do Fluig.Nota: Não se preocupe se o arquivo for excluído, pois a plataforma faz a leitura dele, atualiza a tabela "fdn_paramgeral" e, em seguida, remove o arquivo automaticamente.

Dica!

Se desejar voltar o valor dos parâmetros para o padrão:

- Basta alterá-los para os indicados abaixo no arquivo **configuration.properties**.**configuration.properties**
[?](#)
| `fluig.schedule.thread.poolsize=``5``fluig.schedule.single.instance=``false` |
| --- |
- Reinicie os serviços do Fluig.


<!-- anchors: ARQComoexecutarjobsemapenasumainstânciadoFluig?-Índice, ARQComoexecutarjobsemapenasumainstânciadoFluig?-Plataforma, ARQComoexecutarjobsemapenasumainstânciadoFluig?-Ocorrência, ARQComoexecutarjobsemapenasumainstânciadoFluig?-Causa, ARQComoexecutarjobsemapenasumainstânciadoFluig?-Solução, highlighter_333076, highlighter_893058 -->
