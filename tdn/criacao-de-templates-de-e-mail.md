---
title: "Criação de templates de e-mail"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=852917268"
scraped_at: "2026-03-09T04:55:07.805Z"
depth: 3
anchors: 12
child_links: 49
---

# Criação de templates de e-mail

# Índice

# Introdução

O Fluig permite você [criar seus próprios templates de e-mail](/pages/viewpage.action?pageId=234455436) e envia-los através dos scripts de personalização pelo método **notifier.notify**.

Está documentação vai ensinar você como adicionar os seus parâmetros no template e como criar templates complexos de envio de e-mail.

# Template

Para a criação de templates de e-mails no TOTVS Fluig, utilizamos a linguagem de templates Freemarker. Ele permite a inserção de lógica em templates HTML, proporcionando uma grande flexibilidade na customização de e-mails. Com isso, você pode utilizar:

- **Variáveis**: Inserção de valores dinâmicos no conteúdo do e-mail.
- **Condicionais**: Criação de diferentes partes do template com base em condições específicas.
- **Loops**: Iteração sobre listas para gerar conteúdo repetitivo dinamicamente.

O Fluig 1.8.1 utiliza a versão 2.3.28 Freemarker.

# Exemplos de Template

## E-mail simples com uso de dois parâmetros, conforme este exemplo

[?](#)

| `Olá,` `Aqui está o link para a documentação: ${descricao}.` `Atenciosamente,``Equipe TOTVS` |
| --- |

## E-mail simples com dados do formulário este exemplo

[?](#)

| `Olá,` `Aqui estão os detalhes do formulário atualizado:``````Autor: ${WDK_DocumentAuthor}````Descrição: ${WDK_DocumentDescription}````Número do Formulário: ${WDK_DocumentNumber}````Data de Atualização: ${WDK_DocumentUpdatedDate}````Versão: ${WDK_DocumentVersion}````Acesse o Formulário: Clique aqui``` `Atenciosamente,``Equipe TOTVS` |
| --- |

## Criando um e-mail sobre aprovação do pedido com comportamentos diferentes caso seja aprovado ou reprovado

[?](#)

| `Olá,` `````Seu pedido foi aprovado!``````Infelizmente seu pedido foi reprovado.``` `````````Observação: ${observacao}``````` `Atenciosamente,``Equipe TOTVS` |
| --- |

## Utilizando um parâmetro que é uma lista de tarefas

[?](#)

| `Olá,` ```Você tem as seguintes tarefas pendentes:````````${tarefa}````````Você não tem tarefas pendentes.``` `Atenciosamente,``Equipe TOTVS` |
| --- |


<!-- anchors: Criaçãodetemplatesdeemail-Índice, Criaçãodetemplatesdeemail-Introdução, Criaçãodetemplatesdeemail-Template, Criaçãodetemplatesdeemail-ExemplosdeTemplate, Criaçãodetemplatesdeemail-E-mailsimplescomusodedoisparâmetros,conformeesteexemplo, highlighter_238540, Criaçãodetemplatesdeemail-E-mailsimplescomdadosdoformulárioesteexemplo, highlighter_918458, Criaçãodetemplatesdeemail-Criandoume-mailsobreaprovaçãodopedidocomcomportamentosdiferentescasosejaaprovadooureprovado, highlighter_177239, Criaçãodetemplatesdeemail-Utilizandoumparâmetroqueéumalistadetarefas, highlighter_876405 -->
