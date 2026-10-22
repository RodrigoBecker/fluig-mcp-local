---
title: "BPM 094 - Quais recomendações devo seguir para reduzir a necessidade de converter solicitações de processos?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=286016090"
scraped_at: "2026-03-09T03:57:51.683Z"
depth: 2
anchors: 5
child_links: 133
---

# BPM 094 - Quais recomendações devo seguir para reduzir a necessidade de converter solicitações de processos?

# Plataforma

**Produto:  **.fluig

# Recomendações

## Transferir código de integração de eventos para datasets

**Situação**: No processo existem integrações que estão sendo realizadas em eventos ou em tarefas de serviço assíncrona. Estas integrações necessitam de manutenção constante. Como necessito realizar manutenções constantes nos processos preciso versionar os mesmos e executar a conversão das solicitações abertas na versão anterior. 

**Solução:** Com o isolamento da integração através de datasets, as integrações poderão ser alteradas sem a necessidade de um novo versionamento do processo. Esses datasets deverão ser chamados nos pontos do processo onde originalmente os códigos das integrações estavam sendo chamados.
Com isso a manutenção nos processos será bem menor. Com menos versões de processos o número de conversão de solicitações também será menor.

## Tarefa de serviço assíncrono para chamar as integrações no lugar dos eventos

**Situação**:  A conversão de solicitações executa os eventos de entrada e saída de atividades executando os códigos de integração indevidamente. 

**Solução**:  Além de todas as vantagens já conhecidas da integração assíncrona como segurança, performance e outras, ao fazer esta alteração o problema de executar integrações no momento da execução de conversão da solicitações irá deixar de existir . Essas novas tarefas podem rodar os datasets indicados na primeira recomendação.

## Dividir múltiplas integrações de um evento em integrações menores distribuídas em tarefas de serviço assíncrono.

**Situação**: Existem várias integrações diferentes sendo feitas no mesmo evento, dificultando o mapeamento de problemas ocorridos nas integrações durante a execução do mesmo.

**Solução**: Separe as várias integrações em diferentes tarefas de serviço, dessa forma fica bem mais fácil gerenciar e detectar os erros na integração.

O principal objetivo dessas modificações é minimizar as dificuldades de constante na detecção dos erros de integração.

Saiba mais

Para maiores detalhes sobre conversão de solicitações, acesse a documentação [Converter Solicitações](https://tdn.totvs.com/x/a-HuDQ).


<!-- anchors: BPM094Quaisrecomendaçõesdevoseguirparareduziranecessidadedeconvertersolicitaçõesdeprocessos?-Plataforma, BPM094Quaisrecomendaçõesdevoseguirparareduziranecessidadedeconvertersolicitaçõesdeprocessos?-Recomendações, BPM094Quaisrecomendaçõesdevoseguirparareduziranecessidadedeconvertersolicitaçõesdeprocessos?-Transferircódigodeintegraçãodeeventosparadatasets, BPM094Quaisrecomendaçõesdevoseguirparareduziranecessidadedeconvertersolicitaçõesdeprocessos?-Tarefadeserviçoassíncronoparachamarasintegraçõesnolugardoseventos, BPM094Quaisrecomendaçõesdevoseguirparareduziranecessidadedeconvertersolicitaçõesdeprocessos?-Dividirmúltiplasintegraçõesdeumeventoemintegraçõesmenoresdistribuídasemtarefasdeserviçoassíncrono. -->
