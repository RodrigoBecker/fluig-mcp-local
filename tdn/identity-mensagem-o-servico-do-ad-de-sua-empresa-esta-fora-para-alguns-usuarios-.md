---
title: "Identity | Mensagem \"O serviço do AD de sua empresa está fora\" para alguns usuários ao acessar o Identity"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=338377625"
scraped_at: "2026-03-09T04:32:25.234Z"
depth: 3
anchors: 1
child_links: 56
---

# Identity | Mensagem "O serviço do AD de sua empresa está fora" para alguns usuários ao acessar o Identity

---

**Ocorrência**

Alguns usuários não estão conseguindo acessar o contexto da empresa no Identity utilizando o endereço de e-mail e a senha do Active Directory. É apresentado o seguinte alerta:

[?](#)

| `Desculpe, seu endereço de e-mail ou senha estão incorretos.` |
| --- |

**Causa**

Na aba Conta do cadastro destes usuários no Active Directory, o campo Domínio está preenchido incorretamente apenas com uma "@" ao invés do domínio completo de e-mail, por exemplo, "@empresa.com.br".

**Solução**

Corrigir o campo Domínio nos cadastros dos usuários no Active Directory com o domínio completo.

Dica

Você pode consultar o status dos diretórios Active Directory através da página [Gerenciar Active Directories](/display/fluig/Identity+%7C+Gerenciar+Active+Directories).


<!-- anchors: highlighter_381123 -->
