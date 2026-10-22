---
title: "BPM 070 - Como importar processos de forma que seja selecionada a empresa correta?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=266963850"
scraped_at: "2026-03-09T03:56:13.625Z"
depth: 2
anchors: 5
child_links: 132
---

# BPM 070 - Como importar processos de forma que seja selecionada a empresa correta?

# Índice

# Plataforma

**Produto:**fluig 

# Ocorrência

- Nossa empresa padrão é de número 1.
- Criamos a empresa número 2.
- Exportamos os processos da empresa 1 e tentamos importá-los na empresa 2 via Eclipse.

Acontece que, ao tentar importar os processos, o Eclipse apresenta o erro "Formulários estão vinculados a outro servidor". Como faremos para definir ou selecionar a empresa 2 no ato da importação (Eclipse) ou mesmo o seu servidor?

# Causa

Formulário está apontando para servidor da empresa "1".

# Solução

Quando importado um projeto de um servidor "1" o formulário fica atrelado a este servidor, por padrão. Para poder exportar para um servidor "2" é necessário acessar o processo no Eclipse → *Properties* → Formulário → Definição do formulário (Alterar para Local) → selecionar o formulário e salvar.

 Após você pode exportá-lo para o servidor.


<!-- anchors: BPM070Comoimportarprocessosdeformaquesejaselecionadaaempresacorreta?-Índice, BPM070Comoimportarprocessosdeformaquesejaselecionadaaempresacorreta?-Plataforma, BPM070Comoimportarprocessosdeformaquesejaselecionadaaempresacorreta?-Ocorrência, BPM070Comoimportarprocessosdeformaquesejaselecionadaaempresacorreta?-Causa, BPM070Comoimportarprocessosdeformaquesejaselecionadaaempresacorreta?-Solução -->
