---
title: "BPM 054 - Como solucionar a lentidão em processos mobile?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=243657992"
scraped_at: "2026-03-09T03:55:07.238Z"
depth: 2
anchors: 5
child_links: 133
---

# BPM 054 - Como solucionar a lentidão em processos mobile?

# Índice

# Plataforma

**Produto:  **fluig

# Ocorrência

Nosso fluig interno apresenta muita lentidão ao realizar tarefas pelo Mobile, independente da conexão que esteja ou do aparelho. Existe alguma coisa a fazer para melhorar o desempenho ?

# Causa

Lentidão na movimentação de processo através do mobile normalmente envolve duas situações: 

- A primeira seria a qualidade de conexão do dispositivo, se o mesmo está conectado em uma rede com *proxy* ou *firewall*, ou algo que possa causar essa lentidão.
- Já a segunda se refere ao desenvolvimento do formulário, onde o mesmo utiliza vários datasets.

# Solução

Caso o processo utilize vários datasets, avalie a documentação de  [Sincronização de Datasets](/pages/viewpage.action?pageId=212899013). Nesta documentação é explicado como implementar datasets sincronizados, que aumentam consideravelmente o desempenho do fluig.


<!-- anchors: BPM054Comosolucionaralentidãoemprocessosmobile?-Índice, BPM054Comosolucionaralentidãoemprocessosmobile?-Plataforma, BPM054Comosolucionaralentidãoemprocessosmobile?-Ocorrência, BPM054Comosolucionaralentidãoemprocessosmobile?-Causa, BPM054Comosolucionaralentidãoemprocessosmobile?-Solução -->
