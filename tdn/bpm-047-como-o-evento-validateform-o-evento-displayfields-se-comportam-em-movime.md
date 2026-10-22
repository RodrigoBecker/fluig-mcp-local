---
title: "BPM 047 - Como o evento validateForm o evento displayFields se comportam em movimentação em bloco?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=243011198"
scraped_at: "2026-03-09T03:54:37.557Z"
depth: 2
anchors: 5
child_links: 134
---

# BPM 047 - Como o evento validateForm o evento displayFields se comportam em movimentação em bloco?

# Índice

# Plataforma

**Produto:  **fluig

**Versão:** Todas as versões

# Ocorrência

Ao realizar uma movimentação em bloco o evento validateForm é executado, porém o evento displayFields não. Esse é o comportamento padrão do produto?

# Solução

O **validateForm** é executado durante a movimentação em bloco para salvar ou gerar uma nova versão do formulário, já que é possível que outro evento seja executado antes da movimentação alterando o valor de um campo. 

O **displayFields** não é executado na movimentação em bloco porque ele só é executado quando o formulário é visualizado.

# Observações

Para saber mais acesse a documentação sobre [Desenvolvimento sobre a plataforma](https://tdn.totvs.com/display/fluig/Desenvolvimento+sobre+a+plataforma) e [Desenvolvimento de Formulários](https://tdn.totvs.com/pages/viewpage.action?pageId=75270483).


<!-- anchors: BPM047ComooeventovalidateFormoeventodisplayFieldssecomportamemmovimentaçãoembloco?-Índice, BPM047ComooeventovalidateFormoeventodisplayFieldssecomportamemmovimentaçãoembloco?-Plataforma, BPM047ComooeventovalidateFormoeventodisplayFieldssecomportamemmovimentaçãoembloco?-Ocorrência, BPM047ComooeventovalidateFormoeventodisplayFieldssecomportamemmovimentaçãoembloco?-Solução, BPM047ComooeventovalidateFormoeventodisplayFieldssecomportamemmovimentaçãoembloco?-Observações -->
