---
title: "ESB - Alto consumo de memoria e CPU"
url: "https://tdn.totvs.com/display/public/fluig/ESB+-+Alto+consumo+de+memoria+e+CPU"
scraped_at: "2026-03-09T03:39:50.029Z"
depth: 2
anchors: 10
child_links: 38
---

# ESB - Alto consumo de memoria e CPU

# Índice

# Plataforma

**Produto: **TOTVS ESB

# Ocorrência

Consumo excessivo de memória e CPU pelo Java do serviço do TOTVS ESB.

# Causa

O montante de memória em megabytes que a JVM deve alocar não é suficiente.

# Solução

Alocar mais memória para o TOTVS ESB pelo campo Maximum Memory.

Confira o passo a passo para configurar a memoria do TOTVS ESB.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)

 - Entrar no TOTVS Developer Studio.

![](/download/attachments/190515357/image2015-6-22%2017%3A51%3A1.png?version=1&modificationDate=1435008013000&api=v2)

  - Entrar no TOTVS ESB servers e escolher o ESB desejado.

![](/download/attachments/190515357/image2015-6-22%2017%3A53%3A10.png?version=1&modificationDate=1435008013000&api=v2)

 - Na aba System Properties, selecionar as opções de Memory.

![](/download/attachments/190515357/image2015-6-22%2018%3A13%3A13.png?version=1&modificationDate=1435008013000&api=v2)

 - Configurar o uso de memória do TOTVS ESB.

| Campo | Descrição |
| --- | --- |
| Maximum Memory (MB) | Tamanho máximo em megabytes do pool de alocação de memória. |
| Initial Memory (MB) | Tamanho inicial em megabytes do pool de alocação de memória. |
| Allocation Memory by Thread (MB) | Tamanho em kilobytes de alocação de memória por thread. |


<!-- anchors: ESBAltoconsumodememoriaeCPU-Índice, ESBAltoconsumodememoriaeCPU-Plataforma, ESBAltoconsumodememoriaeCPU-Ocorrência, ESBAltoconsumodememoriaeCPU-Causa, ESBAltoconsumodememoriaeCPU-Solução, samples, samples-1, samples-2, samples-3, samples-4 -->
