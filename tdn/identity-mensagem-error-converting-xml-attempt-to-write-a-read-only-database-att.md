---
title: "Identity | Mensagem \"Error converting XML. Attempt to write a read-only database attempt to write a readonly database.\" ao executar o Smartsync"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=391552192"
scraped_at: "2026-03-09T04:34:53.958Z"
depth: 3
anchors: 1
child_links: 55
---

# Identity | Mensagem "Error converting XML. Attempt to write a read-only database attempt to write a readonly database." ao executar o Smartsync

---

**Ocorrência**

Ao executar o SmartSync é apresentada a seguinte mensagem de erro:

[?](#)

| `Error converting XML. Attempt to write a read-only database attempt to write a readonly database.` |
| --- |

**Causa**

O usuário do sistema operacional utilizado para executar o SmartSync não possui permissão de escrita na pasta de instalação do SmartSync da aplicação, "C:\ProgramData\SmartSync" (esta pasta é oculta).

**Solução**

Acessar o sistema operacional e executar o SmartSync com um usuário que possua permissão de escrita no diretório de instalação ("C:\ProgramData\SmartSync").

**Observações**

Para identificar qual usuário do sistema está executando o SmartSync, basta abrir o menu **Serviços** do Windows, localizar o serviço **SmartSync** na listagem, clicar com o botão direito e selecionar **Propriedades**. Na aba Logon será exibido o usuário que executa o SmartSync. Este usuário deve possuir permissão de escrita no diretório "C:\ProgramData\SmartSync".


<!-- anchors: highlighter_267914 -->
