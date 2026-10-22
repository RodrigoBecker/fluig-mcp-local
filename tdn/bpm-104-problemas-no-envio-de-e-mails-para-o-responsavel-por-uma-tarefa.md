---
title: "BPM 104 - Problemas no envio de e-mails para o responsável por uma tarefa"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=239037911"
scraped_at: "2026-03-09T03:58:25.641Z"
depth: 2
anchors: 4
child_links: 131
---

# BPM 104 - Problemas no envio de e-mails para o responsável por uma tarefa

# Índice

# Plataforma

**Produto: **fluig

# Ocorrência

Nosso fluig não está enviando as notificações via e-mail quando o usuário recebe uma tarefa. Verificamos e o processo está configurado corretamente para notificar o responsável. 

O servidor de e-mail está OK, pois criamos um novo processo com e-mail personalizado (notifier.notify()) e estes são enviados normalmente. 

# Solução

Verificamos que o problema descrito neste chamado ocorreu porque, nas configurações de notificações do fluig, o e-mail não estava ativo.  

Para solucionar a situação, com o usuário administrador, foi necessário acessar o Painel de Controle → Colaboração → Notificações e marcar o item E-mail, conforme a imagem a seguir:

![](/download/attachments/239037911/image2016-6-15%2019%3A57%3A30.png?version=1&modificationDate=1553535615593&api=v2)


<!-- anchors: BPM104Problemasnoenviodeemailsparaoresponsávelporumatarefa-Índice, BPM104Problemasnoenviodeemailsparaoresponsávelporumatarefa-Plataforma, BPM104Problemasnoenviodeemailsparaoresponsávelporumatarefa-Ocorrência, BPM104Problemasnoenviodeemailsparaoresponsávelporumatarefa-Solução -->
