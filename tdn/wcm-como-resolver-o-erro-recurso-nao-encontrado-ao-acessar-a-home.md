---
title: "WCM - Como resolver o erro \"Recurso não encontrado\" ao acessar a Home?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=244911442"
scraped_at: "2026-03-09T03:36:19.759Z"
depth: 2
anchors: 4
child_links: 44
---

# WCM - Como resolver o erro "Recurso não encontrado" ao acessar a Home?

# Índice

# Plataforma

**Produto:**TOTVS Fluig Plataforma

# Ocorrência

A página Home para não está funcionando para usuários comuns (papel *user*). Apenas para os usuários Administradores está funcionando. É apresentado o seguinte erro:

![](/download/attachments/244911442/Image%2013.png?version=2&modificationDate=1553620656040&api=v2)

**"Recurso não foi encontrado. Entre em contato com o administrador para obter mais informações."**

# Solução

Verificamos que o problema está ocorrendo porque foi removida a permissão de acesso a página Home dos usuários comuns, somente os administradores estão com acesso.

Para solucionar o problema, execute os seguintes passos:

- Acesse o **Painel de Controle**, localize o agrupador **Pessoas** e acesse o recurso **Permissões**.
- Na seção **Home** acione o ícone de configuração (engrenagem)
- No item **Home** acione o ícone de configuração novamente (engrenagem)
- Selecione o tipo de permissão **Por papel**, e adicione a permissão de **Visualizar página** para os usuários do papel *user*:

![](/download/attachments/244911442/permiss%C3%B5es%20home.png?version=1&modificationDate=1635340299830&api=v2)

- Feito isso, basta atualizar a página e os usuários com perfil comum terão acesso à página Home.


<!-- anchors: WCMComoresolveroerro"Recursonãoencontrado"aoacessaraHome?-Índice, WCMComoresolveroerro"Recursonãoencontrado"aoacessaraHome?-Plataforma, WCMComoresolveroerro"Recursonãoencontrado"aoacessaraHome?-Ocorrência, WCMComoresolveroerro"Recursonãoencontrado"aoacessaraHome?-Solução -->
