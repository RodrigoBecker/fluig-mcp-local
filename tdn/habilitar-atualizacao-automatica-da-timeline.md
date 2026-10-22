---
title: "Habilitar atualização automática da Timeline"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=258277622"
scraped_at: "2026-03-09T03:10:58.450Z"
depth: 1
anchors: 9
child_links: 53
---

# Habilitar atualização automática da Timeline

Atenção

Esta página é destinada para atualizações 1.6 e superiores do TOTVS Fluig Plataforma.

# Índice

# Objetivo

---

A plataforma possui a opção de atualizar automaticamente a *timeline*, assim os novos *posts* aparecem na *timeline* sem a necessidade de recarregar a página.

# Configuração

---

Para habilitar este recurso, é necessário:

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Pronto](#)

 - Acesse a plataforma com o usuário **wcmadmin**:

![](/download/attachments/258277622/image2016-10-19%2016%3A58%3A40.png?version=3&modificationDate=1554235074233&api=v2)

 - Acesse **Painel de controle** → **WCM** →**Empresas.**

![](/download/attachments/258277622/image2016-10-19%2016%3A59%3A48.png?version=2&modificationDate=1554235189347&api=v2)

 - Selecione a empresa em que deseja habilitar a atualização automática da *timeline* e clique em **Editar**.

![](/download/attachments/258277622/image2016-10-19%2017%3A0%3A28.png?version=2&modificationDate=1554235245220&api=v2)

 - Na empresa desejada, clique no botão **Cadastrar dados adicionais** e adicione:

| Chave | Valor |
| --- | --- |
| realtime.enabled | true |

Observação

Para desativar este recurso, altere o valor da chave realtime.enabled para "false".

****

****

 - Pronto. Após isso, os novos posts serão atualizados na Timeline sem recarregar a página.

Importante

Para utilizar este recurso, o serviço fluig_RealTime deve estar iniciado.


<!-- anchors: HabilitaratualizaçãoautomáticadaTimeline-Índice, HabilitaratualizaçãoautomáticadaTimeline-Objetivo, HabilitaratualizaçãoautomáticadaTimeline-Configuração, steps-disable-chat, steps-disable-chat-passo1, steps-disable-chat-passo2, steps-disable-chat-passo3, steps-disable-chat-passo4, steps-disable-chat-fim -->
