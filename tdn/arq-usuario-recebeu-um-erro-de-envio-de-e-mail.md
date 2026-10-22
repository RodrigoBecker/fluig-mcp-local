---
title: "ARQ - Usuário recebeu um erro de envio de e-mail"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=223926925"
scraped_at: "2026-03-09T04:43:04.284Z"
depth: 3
anchors: 5
child_links: 56
---

# ARQ - Usuário recebeu um erro de envio de e-mail

# Índice

# Plataforma

**Produto:**  TOTVS Fluig Plataforma

# Ocorrência

Uma atividade foi atribuída para um usuário, o usuário recebeu a notificação de atividade na plataforma, mas não recebeu o e-mail informativo.

Além disso, o usuário que enviou a atividade recebeu um erro de envio de e-mail (Figura 1).

![](/download/attachments/223926925/mailError.PNG?version=2&modificationDate=1597171777323&api=v2)

**Figura 1 - Mensagem contendo o erro do servidor de e-mail.**

# Causa

O e-mail recebido pelo usuário que enviou a atividade é uma resposta do servidor de e-mail.

O código SMTP 550 retornado pelo servidor de email geralmente significa que o e-mail do destinatário não existe. Esta é uma descrição genérica desse código, pois depende de como o servidor de e-mail trata os erros. Em alguns casos existem algumas diferenças, como por exemplo o servidor de email tenha ficado *offline*, ou indisponível por algum motivo.

Mas de maneira geral, o código 550 significa que o usuário não existe/não foi encontrado.

# Solução

Verificar no cadastro de usuários se o e-mail do destinatário existe e é válido e também checar a disponibilidade e estabilidade do servidor de e-mail.


<!-- anchors: ARQUsuáriorecebeuumerrodeenviodeemail-Índice, ARQUsuáriorecebeuumerrodeenviodeemail-Plataforma, ARQUsuáriorecebeuumerrodeenviodeemail-Ocorrência, ARQUsuáriorecebeuumerrodeenviodeemail-Causa, ARQUsuáriorecebeuumerrodeenviodeemail-Solução -->
