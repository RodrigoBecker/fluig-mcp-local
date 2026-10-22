---
title: "Desenvolvimento de Formulários - Editor WEB"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=668198911"
scraped_at: "2026-03-09T03:46:55.607Z"
depth: 2
anchors: 6
child_links: 43
---

# Desenvolvimento de Formulários - Editor WEB

# Índice

# Objetivo

---

O objetivo deste guia é descrever o desenvolvimento de formulários pelo editor web no fluig.

# Pré-requisitos

---

Antes de iniciar o desenvolvimento de formulários entenda como [criar processos pela web](/display/fluig/Desenvolvimento+de+Workflow).

# Regras de formulário

---

No editor web de formulário é possível criar validações avançadas para os campos, dependendo da atividade.

Para isso, no editor, clique em “Regras de formulário”, Adicionar, selecione o campo e a atividade e em ação, escolha “Validar”. Clique na lupinha.

Essa validação serve para **bloquear** alguns valores. O usuário não vai informar quais são os valores permitidos, pelo contrário, ele vai configurar quais os valores **proibidos**.

Por exemplo, se quiser configurar para que um campo **idade** só permita valores maiores que **18**, a configuração deve ser: **idade menor 18**. Ou seja, é uma validação **restritiva** e não **permissiva**.

No caso de uma combinação de fatores, como idade entre 12 e 18 anos:

[?](#)

| `Satisfazer UMA das condições``idade menor que 12``idade maior que 18` |
| --- |

Ou então, caso queira excluir um determinado grupo intermediário, ou seja, ninguém com idades entre 18 e 60:

[?](#)

| `Satisfazer TODAS as condições``idade maior que 18``idade menor que 60` |
| --- |


<!-- anchors: DesenvolvimentodeFormuláriosEditorWEB-Índice, DesenvolvimentodeFormuláriosEditorWEB-Objetivo, DesenvolvimentodeFormuláriosEditorWEB-Pré-requisitos, DesenvolvimentodeFormuláriosEditorWEB-Regrasdeformulário, highlighter_818445, highlighter_231503 -->
