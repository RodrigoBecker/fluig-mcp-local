---
title: "BPM 101 - Por que algumas movimentações de processos realizados no fluig estão sendo bloqueados?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=198954218"
scraped_at: "2026-03-09T03:58:12.519Z"
depth: 2
anchors: 5
child_links: 132
---

# BPM 101 - Por que algumas movimentações de processos realizados no fluig estão sendo bloqueados?

# Índice

# Plataforma

**Produto:  **fluig

# Ocorrência

Por que ao realizar movimentações em processos no fluig, tanto pela web como por dispositivo móveis através de rede externa da empresa, as chamadas estão sendo bloqueadas?

# Causa

Ao realizar movimentações em processos no fluig, tanto pela web como por dispositivo móveis através de rede externa da empresa, dependendo das configurações do firewall, as chamadas podem ser bloqueadas. 

O Firewall de aplicação, pode identificar erroneamente a chamada REST feita como um possível ataque de SQL injection.

# Solução

Será necessário que adicionar no firewall exceções para as URLs do fluig, especialmente para as URLs que contenham “/api/rest”.


<!-- anchors: BPM101Porquealgumasmovimentaçõesdeprocessosrealizadosnofluigestãosendobloqueados?-Índice, BPM101Porquealgumasmovimentaçõesdeprocessosrealizadosnofluigestãosendobloqueados?-Plataforma, BPM101Porquealgumasmovimentaçõesdeprocessosrealizadosnofluigestãosendobloqueados?-Ocorrência, BPM101Porquealgumasmovimentaçõesdeprocessosrealizadosnofluigestãosendobloqueados?-Causa, BPM101Porquealgumasmovimentaçõesdeprocessosrealizadosnofluigestãosendobloqueados?-Solução -->
