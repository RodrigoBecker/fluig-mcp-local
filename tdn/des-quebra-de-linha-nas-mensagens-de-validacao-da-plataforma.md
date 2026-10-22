---
title: "DES - Quebra de linha nas mensagens de validação da plataforma"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=243007632"
scraped_at: "2026-03-09T03:31:28.623Z"
depth: 2
anchors: 4
child_links: 44
---

# DES - Quebra de linha nas mensagens de validação da plataforma

# Índice

# Plataforma

**Produto**: TOTVS Fluig Plataforma

# Ocorrência

Após atualização da plataforma percebemos que a mensagem exibida para validação dos campos obrigatórios no validateForms não está mais aceitando quebra de linha.

Gostaria de saber qual é o procedimento para quebrar linhas nas mensagens de validação.

![](/download/attachments/243007632/image2016-7-4%2018%3A2%3A9.png?version=1&modificationDate=1467666390000&api=v2)

# Solução

Conforme a o guia de [Desenvolvimento de Formulários](https://tdn.totvs.com/pages/viewpage.action?pageId=75270483#DesenvolvimentodeFormulários-ValidateForm), as mensagens de erro, bem como os componentes de mensagem do Guia de Estilo (alertas, confirmação e erro) devem utilizar **\n**para quebra de linha em mensagens.


<!-- anchors: DESQuebradelinhanasmensagensdevalidaçãodaplataforma-Índice, DESQuebradelinhanasmensagensdevalidaçãodaplataforma-Plataforma, DESQuebradelinhanasmensagensdevalidaçãodaplataforma-Ocorrência, DESQuebradelinhanasmensagensdevalidaçãodaplataforma-Solução -->
