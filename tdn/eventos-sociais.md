---
title: "Eventos Sociais"
url: "https://tdn.totvs.com/display/public/fluig/Eventos+Sociais"
scraped_at: "2026-03-09T02:59:23.957Z"
depth: 0
anchors: 92
child_links: 72
---

# Eventos Sociais

## Conhecendo e utilizando eventos sociais

---

Veja a seguir o vídeo *How to* demonstrando a utilização de eventos sociais.

## Eventos

---

### beforeSocialShare

Este evento é disparado sempre antes da efetivação do compartilhamento de um objeto social.

Observação

Pode-se alterar a mensagem de compartilhamento passando uma String para o método setText( <valor> ) do objeto "share".

**Estrutura do Evento**

[?](#)

| 123 | `function` `beforeSocialShare(companyId, share){``` `}` |
| --- | --- |

**Parâmetros da função**

| Propriedade | Descrição | Tipo |
| --- | --- | --- |
| Propriedade | Descrição | Tipo |
| companyId | Código da Empresa | int |
| share | objeto de socialização | SocialShareEventVO |

****

**Exemplo de Implementação**

[?](#)

| 123456789101112 | `function` `beforeSocialShare(companyId, share){``` ```var` `lastUpd = share.getSociable().getLastUpdateDate().getTime();````log.info(``"lastUpd: "` `+ lastUpd);````var` `daysAgo =``new` `Date();````daysAgo.setDate(daysAgo.getDate()-3);````log.info(``"daysAgo: "` `+ daysAgo);``` ```if` `(lastUpd ```throw` `"You could not share old socials (more than 3 days old)"``;````}``}` |
| --- | --- |

### afterSocialShare

Esse evento é disparado sempre após a efetivação de um compartilhamento.

**Estrutura do Evento**

[?](#)

| 123 | `function` `afterSocialShare(companyId, share){``` `}` |
| --- | --- |

**Parâmetros da função**

| Propriedade | Descrição | Tipo |
| --- | --- | --- |
| Propriedade | Descrição | Tipo |
| companyId | Código da Empresa | int |
| share | objeto de socialização | SocialShareEventVO |

****

**Exemplo de Implementação**

[?](#)

| 123 | `function` `afterSocialShare(companyId, share){````log.info(share.getUser() +``" has shared the sociable "` `+ share.getSociable().getId() +``" with text "` `+ share.getText());``}` |
| --- | --- |

### beforeSocialComment

Esse evento é disparado sempre antes da efetivação de um comentário.

Observação

Pode-se alterar a mensagem de compartilhamento passando uma String para o método setText( <valor> ) do objeto "comment".

**Estrutura do Evento**

[?](#)

| 123 | `function` `beforeSocialComment(companyId, comment){``` `}` |
| --- | --- |

**Parâmetros da função**

| Propriedade | Descrição | Tipo |
| --- | --- | --- |
| Propriedade | Descrição | Tipo |
| companyId | Código da Empresa | int |
| comment | objeto de comentário | SocialCommentEventVO |

****

**Exemplo de Implementação**

[?](#)

| 12345 | `function` `beforeSocialComment(companyId, comment){````if` `(comment.getSociable().getNumberLikes() ```throw` `"You can not comment a post that was not liked."``;````}``}` |
| --- | --- |

### afterSocialComment

Esse evento é disparado sempre após a efetivação de um comentário.

**Estrutura do Evento**

[?](#)

| 123 | `function` `afterSocialComment(companyId, comment){``` `}` |
| --- | --- |

**Parâmetros da função**

| Propriedade | Descrição | Tipo |
| --- | --- | --- |
| Propriedade | Descrição | Tipo |
| companyId | Código da Empresa | int |
| comment | objeto de comentário | SocialCommentEventVO |

**Exemplo de Implementação**

[?](#)

| 123 | `function` `afterSocialComment(companyId, comment){````log.info(comment.getUser() +``" has done the comment "` `+ comment.getText());``}` |
| --- | --- |

### beforeSocialPost

Esse evento é disparado sempre antes da efetivação de um post.

Observação

Pode-se alterar o conteúdo da publicação passando uma String para o método setText( <valor> ) do objeto "post".

**Estrutura do Evento**

[?](#)

| 123 | `function` `beforeSocialPost(companyId, post){``` `}` |
| --- | --- |

**Parâmetros da função**

| Propriedade | Descrição | Tipo |
| --- | --- | --- |
| Propriedade | Descrição | Tipo |
| companyId | Código da Empresa | int |
| post | Objeto que representa a publicação | SocialPostEventVO |

**Exemplo de Implementação**

[?](#)

| 123456789101112 | `function` `beforeSocialPost(companyId, post){``` ```if``(post.getText().indexOf(``" fluid "``) > -1) {````post.setText(post.getText().replace(``" fluid "``,``" fluig "``));````}``` ```var` `sociables = post.getSociables();````for` `(``var` `i = 0; i ```var` `sociable = sociables.get(i);````log.info(``"sociable id: "` `+ sociable.getId());````}``}` |
| --- | --- |

### afterSocialPost

Esse evento é disparado sempre após a efetivação de um comentário.

**Estrutura do Evento**

[?](#)

| 123 | `function` `afterSocialPost(companyId, post){``` `}` |
| --- | --- |

**Parâmetros da função**

| Propriedade | Descrição | Tipo |
| --- | --- | --- |
| Propriedade | Descrição | Tipo |
| companyId | Código da Empresa | int |
| post | objeto de post | SocialPostEventVO |

**Exemplo de Implementação**

[?](#)

| 12345 | `function` `afterSocialPost(companyId, post){````if` `(post.getText().toLowerCase().indexOf(``"#minhacampanha"``) > -1) {````log.info(post.getUser() +``" has published a content."``);````}``}` |
| --- | --- |

### beforeSocialPostRemove

Esse evento é disparado sempre antes da efetivação de uma remoção de um post.

**Exemplo de Implementação**

[?](#)

| 123 | `function` `beforeSocialPostRemove(companyId, post){``` `}` |
| --- | --- |

**Parâmetros da função**

| Propriedade | Descrição | Tipo |
| --- | --- | --- |
| Propriedade | Descrição | Tipo |
| companyId | Código da Empresa | int |
| post | objeto de post | SocialPostEventVO |

**Exemplo de Implementação**

[?](#)

| 12345 | `function` `beforeSocialPostRemove(companyId, post){````if` `(post.getText().toLowerCase().indexOf(``"#important"``) > -1) {````throw` `"You cannot remove a post marked as important."``;````}``}` |
| --- | --- |

### afterSocialPostRemove

Esse evento é disparado sempre após a efetivação de uma remoção de um post.

**Estrutura do Evento**

[?](#)

| 123 | `function` `afterSocialPostRemove(companyId, post){``` `}` |
| --- | --- |

**Parâmetros da função**

| Propriedade | Descrição | Tipo |
| --- | --- | --- |
| Propriedade | Descrição | Tipo |
| companyId | Código da Empresa | int |
| post | objeto de post | SocialPostEventVO |

**Exemplo de Implementação**

[?](#)

| 123 | `function` `afterSocialPostRemove(companyId, post){````log.info(post.getUser() +``" has removed the post "` `+ post.getPostId());``}` |
| --- | --- |

### beforeSocialDenounce

O evento é disparado quando um *Sociable* é denunciado porém antes que a ação seja efetivada.

**Exemplo de uso:**

- Em uma comunidade em que as publicações não podem ser denunciadas pode-se utilizar este evento para bloquear a ação de denúncia.
- Pode-se limitar a quantidade de denúncias que um usuário pode efetuar por dia para evitar que alguma pessoa mal intencionada denuncie todas as publicações.

**Estrutura do Evento**

[?](#)

| 123 | `function` `beforeSocialDenounce(companyId, denounce){``` `}` |
| --- | --- |

**Parâmetros da função**

| Propriedade | Descrição | Tipo |
| --- | --- | --- |
| Propriedade | Descrição | Tipo |
| companyId | Código da Empresa | int |
| ```
denounce
``` | objeto de post | SocialDenounceEventVO |

**Exemplo de Implementação**

[?](#)

| 12345 | `function` `beforeSocialDenounce(companyId, denounce){````if` `(denounce.getSociable().getText().toLowerCase().indexOf(``"#cipa"``) > -1) {````throw` `"You cannot denounce posts about CIPA."``;````}``}` |
| --- | --- |

### afterSocialDenounce

O evento é disparado após a efetivação de uma ação de denúncia de um *sociable*.

**Estrutura do Evento**

[?](#)

| 123 | `function` `afterSocialDenounce(companyId, denounce){``` `}` |
| --- | --- |

**Parâmetros da função**

| Propriedade | Descrição | Tipo |
| --- | --- | --- |
| Propriedade | Descrição | Tipo |
| companyId | Código da Empresa | int |
| ```
denounce
``` | objeto de post | SocialDenounceEventVO |

**Exemplo Prático:**

Registrar em log as denúncias efetuadas para auditoria.

****

**Exemplo de Implementação**

[?](#)

| 123 | `function` `afterSocialDenounce(companyId, denounce){````log.info(denounce.getUser() +``" has denounced the sociable "` `+ denounce.getSociable().getId() +``" with comment "` `+ denounce.getText());``}` |
| --- | --- |

### beforeSocialLike

O evento é disparado antes de ser efetivada uma ação de "curtir" de um *sociable*.

**Estrutura do Evento**

[?](#)

| 123 | `function` `beforeSocialLike(companyId, like){``` `}` |
| --- | --- |

**Parâmetros da função**

| Propriedade | Descrição | Tipo |
| --- | --- | --- |
| Propriedade | Descrição | Tipo |
| companyId | Código da Empresa | int |
| ```
like
``` | Objeto com dados do sociable curtido | SocialLikeEventVO |

**Exemplo de Implementação**

[?](#)

| 12345 | `function` `beforeSocialLike(companyId, like){````if` `(like.getSociable().getText().toLowerCase().indexOf(``"#greve"``) > -1) {````throw` `"You can not like a post that has this type of comment."``;````}``}` |
| --- | --- |

### afterSocialLike

O evento é disparado após a efetivação de uma ação de "curtir" de um *sociable*.

**Estrutura do Evento**

[?](#)

| 123 | `function` `afterSocialLike(companyId, like){``` `}` |
| --- | --- |

**Parâmetros da função**

| Propriedade | Descrição | Tipo |
| --- | --- | --- |
| Propriedade | Descrição | Tipo |
| companyId | Código da Empresa | int |
| ```
like
``` | Objeto com dados do sociable curtido | SocialLikeEventVO |

****

**Exemplo Prático:**

Registrar em log para auditoria todas as publicações curtidas.

**Exemplo de Implementação**

[?](#)

| 123 | `function` `afterSocialLike(companyId, like){````log.info(like.getUser() +``" has liked the "` `+ like.getSociable().getUrl());``}` |
| --- | --- |

### beforeSocialUnlike

O evento é disparado antes de ser efetivada uma ação de "descurtir" de um *sociable*.

****

**Estrutura do Evento**

[?](#)

| 123 | `function` `beforeSocialUnlike(companyId, unlike){``` `}` |
| --- | --- |

**Parâmetros da função**

| Propriedade | Descrição | Tipo |
| --- | --- | --- |
| Propriedade | Descrição | Tipo |
| companyId | Código da Empresa | int |
| ```
unlike
``` | Objeto com dados do sociable descurtido | SocialLikeEventVO |

****

**Exemplo de Implementação**

[?](#)

| 123 | `function` `beforeSocialUnlike(companyId, unlike){````throw` `"You can not unlike a post."``;``}` |
| --- | --- |

### afterSocialUnlike

O evento é disparado após a efetivação de uma ação de "descurtir" de um *sociable*.

**Estrutura do Evento**

[?](#)

| 123 | `function` `afterSocialUnlike(companyId, unlike){``` `}` |
| --- | --- |

**Parâmetros da função**

| Propriedade | Descrição | Tipo |
| --- | --- | --- |
| Propriedade | Descrição | Tipo |
| companyId | Código da Empresa | int |
| ```
unlike
``` | Objeto com dados do sociable descurtido | SocialLikeEventVO |

****

**Exemplo Prático:**

Registrar em log para auditoria todas as publicações que deixaram de ser apoiadas.

****

**Exemplo de Implementação**

[?](#)

| 123 | `function` `afterSocialUnlike(companyId, unlike){````log.info(unlike.getUser() +``" has unliked the "` `+ unlike.getSociable().getUrl());``}` |
| --- | --- |

### beforeSocialCommentRemove

O evento é disparado antes da efetivação da remoção de um comentário de um *sociable*.

****

**Estrutura do Evento**

[?](#)

| 123 | `function` `beforeSocialCommentRemove(companyId, comment){``` `}` |
| --- | --- |

**Parâmetros da função**

| Propriedade | Descrição | Tipo |
| --- | --- | --- |
| Propriedade | Descrição | Tipo |
| companyId | Código da Empresa | int |
| ```
comment
``` | Objeto que contém as informações do comentário | SocialCommentEventVO |

****

**Exemplo Prático:**

Evitar que usuários removam seus comentários em uma publicação de campanha interna da empresa.

****

**Exemplo de Implementação**

[?](#)

| 12345 | `function` `beforeSocialCommentRemove(companyId, comment){````if` `(comment.getSociable().getText().toLowerCase().indexOf(``"#bolao"``) > -1) {````throw` `"You cannot change your guess."``;````}``}` |
| --- | --- |

### afterSocialCommentRemove

O evento é disparado após a efetivação da ação de remover o comentário de um *sociable*.

****

**Estrutura do Evento**

[?](#)

| 123 | `function` `afterSocialCommentRemove(companyId, comment){``` `}` |
| --- | --- |

**Parâmetros da função**

| Propriedade | Descrição | Tipo |
| --- | --- | --- |
| Propriedade | Descrição | Tipo |
| companyId | Código da Empresa | int |
| ```
comment
``` | Objeto que contém as informações do comentário | SocialCommentEventVO |

****

**Exemplo Prático:**

Registrar em log para auditoria todos os comentários com a hashtag "protesto". 

****

**Exemplo de Implementação**

[?](#)

| 12345 | `function` `afterSocialCommentRemove(companyId, comment){````if` `(comment.getText().toLowerCase().indexOf(``"#protesto"``) > -1) {````log.info(comment.getUser() +``" has removed the comment "` `+ comment.getText() +``" of the sociable "` `+ comment.getSociable().getId());````}``}` |
| --- | --- |

### beforeSocialCommentEdit

Esse evento é disparado sempre antes da edição de um comentário.

**Estrutura do Evento**

**Estrutura do Evento**

[?](#)

| `function` `beforeSocialCommentEdit(companyId, comment){``` `}` |
| --- |

****

**Parâmetros da função**

| Propriedade | Descrição | Tipo |
| --- | --- | --- |
| Propriedade | Descrição | Tipo |
| companyId | Código da Empresa | int |
| ```
comment
``` | Objeto que contém as informações do comentário | SocialCommentEventVO |

**Exemplo de Implementação**

[?](#)

| `function` `beforeSocialCommentEdit(companyId, comment){````comment.setText(comment.getText() +``" \n --- Conteúdo editado ---"``);``}` |
| --- |

### afterSocialCommentEdit

Esse evento é disparado sempre após a edição de um comentário.

**Estrutura do Evento**

[?](#)

| `function` `afterSocialCommentEdit(companyId, comment){``` `}` |
| --- |

****

**Parâmetros da função**

| Propriedade | Descrição | Tipo |
| --- | --- | --- |
| Propriedade | Descrição | Tipo |
| companyId | Código da Empresa | int |
| ```
comment
``` | Objeto que contém as informações do comentário | SocialCommentEventVO |

**Exemplo de Implementação**

[?](#)

| `function` `afterSocialCommentEdit(companyId, comment){````System.out.println(comment.getUser() +``" editou o conteúdo do post: "` `+ comment.getCommentId());``}` |
| --- |

### beforeSocialPostEdit

Esse evento é disparado sempre antes da edição de um post.

**Estrutura do Evento**

**Estrutura do Evento**

[?](#)

| `function` `beforeSocialPostEdit(companyId, post){``` `}` |
| --- |

****

**Parâmetros da função**

| Propriedade | Descrição | Tipo |
| --- | --- | --- |
| Propriedade | Descrição | Tipo |
| companyId | Código da Empresa | int |
| post | objeto de post | SocialPostEventVO |

**Exemplo de Implementação**

[?](#)

| `function` `beforeSocialPostEdit(companyId, post){````post.setText(post.getText() +``" \n --- Conteúdo editado ---"``);``}` |
| --- |

### afterSocialPostEdit

Esse evento é disparado sempre após a edição de um post.

**Estrutura do Evento**

[?](#)

| `function` `afterSocialPostEdit(companyId, post){``` `}` |
| --- |

****

**Parâmetros da função**

| Propriedade | Descrição | Tipo |
| --- | --- | --- |
| Propriedade | Descrição | Tipo |
| companyId | Código da Empresa | int |
| post | objeto de post | SocialPostEventVO |

**Exemplo de Implementação**

[?](#)

| `function` `afterSocialPostEdit(companyId, post){````log.info(post.getUser() +``" editou o conteúdo do post: "` `+ post.getPostId());``}` |
| --- |

### beforeCommunityParticipation

O evento é disparado antes da efetivação da participação em uma comunidade.

**Estrutura do Evento**

[?](#)

| 123 | `function` `beforeCommunityParticipation(companyId, relation){``` `}` |
| --- | --- |

**Parâmetros da função**

| Propriedade | Descrição | Tipo |
| --- | --- | --- |
| Propriedade | Descrição | Tipo |
| companyId | Código da Empresa | int |
| ```
relation
``` | Objeto que contém as informações de participação | SocialCommunityRelationEventVO |

**Exemplo de Implementação**

[?](#)

| 123456 | `function` `beforeCommunityParticipation(companyId, relation){````if` `(relation.getCommunity().getAlias() ==``"economia"``) {````throw` `"Comunidade temporariamente indisponível!"``;````}````log.info(``"beforeCommunityParticipation Social Alias: "` `+ relation.getSocial().getAlias() +``" Community Alias: "` `+ relation.getCommunity().getAlias());``}` |
| --- | --- |

### afterCommunityParticipation

O evento é disparado após a efetivação da participação em uma comunidade.

**Estrutura do Evento**

[?](#)

| 123 | `function` `afterCommunityParticipation(companyId, relation){``` `}` |
| --- | --- |

**Parâmetros da função**

| Propriedade | Descrição | Tipo |
| --- | --- | --- |
| Propriedade | Descrição | Tipo |
| companyId | Código da Empresa | int |
| ```
relation
``` | Objeto que contém as informações de participação | SocialCommunityRelationEventVO |

**Exemplo de Implementação**

[?](#)

| 123 | `function` `afterCommunityParticipation(companyId, relation){````log.info(``"afterCommunityParticipation Social Alias: "` `+ relation.getSocial().getAlias() +``" Community Alias: "` `+ relation.getCommunity().getAlias());``}` |
| --- | --- |

### beforeCommunityLeave

O evento é disparado antes da efetivação da exclusão de participação em uma comunidade.

[?](#)

| 123 | `function` `beforeCommunityLeave(companyId, relation){``` `}` |
| --- | --- |

**Parâmetros da função**

| Propriedade | Descrição | Tipo |
| --- | --- | --- |
| Propriedade | Descrição | Tipo |
| companyId | Código da Empresa | int |
| ```
relation
``` | Objeto que contém as informações de participação | SocialCommunityRelationEventVO |

**Exemplo de Implementação**

[?](#)

| 123456 | `function` `beforeCommunityLeave(companyId, relation){````if` `(relation.getCommunity().getAlias() ==``"eventos"``) {````throw` `"Não é permitido deixar essa comunidade"``;````}````log.info(``"beforeCommunityLeave Social Alias: "` `+ relation.getSocial().getAlias() +``" Community Alias: "` `+ relation.getCommunity().getAlias());``}` |
| --- | --- |

### afterCommunityLeave

O evento é disparado após a efetivação da exclusão de participação em uma comunidade.

**Estrutura do Evento**

[?](#)

| 123 | `function` `afterCommunityLeave(companyId, relation){``` `}` |
| --- | --- |

**Parâmetros da função**

| Propriedade | Descrição | Tipo |
| --- | --- | --- |
| Propriedade | Descrição | Tipo |
| companyId | Código da Empresa | int |
| ```
relation
``` | Objeto que contém as informações de participação | SocialCommunityRelationEventVO |

**Exemplo de Implementação**

[?](#)

| 123 | `function` `afterCommunityLeave(companyId, relation){````log.info(``"afterCommunityLeave Social Alias: "` `+ relation.getSocial().getAlias() +``" Community Alias: "` `+ relation.getCommunity().getAlias());``}` |
| --- | --- |

### beforeSocialFollow

O evento é disparado antes da efetivação de seguir uma pessoa.

**Estrutura do Evento**

[?](#)

| 123 | `function` `beforeSocialFollow(companyId, follow){``` `}` |
| --- | --- |

**Parâmetros da função**

| Propriedade | Descrição | Tipo |
| --- | --- | --- |
| Propriedade | Descrição | Tipo |
| companyId | Código da Empresa | int |
| ```
follow
``` | Objeto que contém as informações de seguir | SocialFollowEventVO |

**Exemplo de Implementação**

[?](#)

| 123 | `function` `beforeSocialFollow(companyId, follow){````log.info(``"beforeSocialFollow Social Alias: "` `+ follow.getSocial().getAlias() +``" Followed Alias: "` `+ follow.getFollowed().getAlias());``}` |
| --- | --- |

### afterSocialFollow

O evento é disparado após a efetivação de seguir uma pessoa.

**Estrutura do Evento**

[?](#)

| 123 | `function` `afterSocialFollow(companyId, follow){``` `}` |
| --- | --- |

**Parâmetros da função**

| Propriedade | Descrição | Tipo |
| --- | --- | --- |
| Propriedade | Descrição | Tipo |
| companyId | Código da Empresa | int |
| ```
follow
``` | Objeto que contém as informações de seguir | SocialFollowEventVO |

**Exemplo de Implementação**

[?](#)

| 123 | `function` `afterSocialFollow(companyId, follow){````log.info(``"afterSocialFollow Social Alias: "` `+ follow.getSocial().getAlias() +``" Followed Alias: "` `+ follow.getFollowed().getAlias());``}` |
| --- | --- |

### beforeSocialUnfollow

O evento é disparado antes da efetivação de deixar de seguir uma pessoa.

**Estrutura do Evento**

[?](#)

| 123 | `function` `beforeSocialUnfollow(companyId, follow){``` `}` |
| --- | --- |

**Parâmetros da função**

| Propriedade | Descrição | Tipo |
| --- | --- | --- |
| Propriedade | Descrição | Tipo |
| companyId | Código da Empresa | int |
| ```
follow
``` | Objeto que contém as informações de seguir | SocialFollowEventVO |

**Exemplo de Implementação**

[?](#)

| 123 | `function` `beforeSocialUnfollow(companyId, follow){````log.info(``"beforeSocialUnfollow Social Alias: "` `+ follow.getSocial().getAlias() +``" Followed Alias: "` `+ follow.getFollowed().getAlias());``}` |
| --- | --- |

### afterSocialUnfollow

O evento é disparado após a efetivação de deixar de seguir uma pessoa.

**Estrutura do Evento**

[?](#)

| 123 | `function` `afterSocialUnfollow(companyId, follow){``` `}` |
| --- | --- |

**Parâmetros da função**

| Propriedade | Descrição | Tipo |
| --- | --- | --- |
| Propriedade | Descrição | Tipo |
| companyId | Código da Empresa | int |
| ```
follow
``` | Objeto que contém as informações de seguir | SocialFollowEventVO |

**Exemplo de Implementação**

[?](#)

| 123 | `function` `afterSocialUnfollow(companyId, follow){````log.info(``"afterSocialUnfollow Social Alias: "` `+ follow.getSocial().getAlias() +``" Followed Alias: "` `+ follow.getFollowed().getAlias());``}` |
| --- | --- |

### beforeSocialPictureChange

O evento é disparado antes da imagem de um usuário/comunidade ser alterada. 

**Estrutura do Evento**

[?](#)

| `function` `beforeSocialPictureChange(companyId, vo){` `}` |
| --- |

****

**Parâmetros da função**

| Propriedade | Descrição | Tipo |
| --- | --- | --- |
| Propriedade | Descrição | Tipo |
| companyId | Código da Empresa | int |
| ```
vo
``` | Objeto contendo os dados da imagem a ser alterada | SocialPictureEventVO |

**Exemplo de Implementação**

[?](#)

| `function` `beforeSocialPictureChange(companyId, vo){````log.info(vo.getAlias());````log.info(vo.getPath());````log.info(vo.getPictureName());````log.info(vo.getWidth());````log.info(vo.getHeight());``}` |
| --- |

### afterSocialPictureChange

O evento é disparado após a efetivação da troca de imagem do perfil de um usuário/comunidade.

**Estrutura do Evento**

[?](#)

| `function` `afterSocialPictureChange(companyId, vo){` `}` |
| --- |

****

**Parâmetros da função**

| Propriedade | Descrição | Tipo |
| --- | --- | --- |
| Propriedade | Descrição | Tipo |
| companyId | Código da Empresa | int |
| ```
vo
``` | Objeto contendo os dados da imagem a ser alterada | SocialPictureEventVO  |

**Exemplo de Implementação**

[?](#)

| `function` `afterSocialPictureChange(companyId, vo){````log.info(``"afterSocialPictureChange: "` `+ vo.getPath()+vo.getPictureName());``}` |
| --- |


<!-- anchors: EventosSociais-Conhecendoeutilizandoeventossociais, EventosSociais-Eventos, EventosSociais-beforeSocialShare, highlighter_921844, highlighter_415680, EventosSociais-afterSocialShare, highlighter_332843, highlighter_479608, EventosSociais-beforeSocialComment, highlighter_628481, highlighter_303547, EventosSociais-afterSocialComment, highlighter_570288, highlighter_665245, EventosSociais-beforeSocialPost, highlighter_569164, highlighter_828008, EventosSociais-afterSocialPost, highlighter_153998, highlighter_365957, EventosSociais-beforeSocialPostRemove, highlighter_92296, highlighter_742942, EventosSociais-afterSocialPostRemove, highlighter_482733, highlighter_381548, EventosSociais-beforeSocialDenounce, highlighter_760229, highlighter_567340, EventosSociais-afterSocialDenounce, highlighter_199910, highlighter_619633, EventosSociais-beforeSocialLike, highlighter_139326, highlighter_65680, EventosSociais-afterSocialLike, highlighter_318922, highlighter_295347, EventosSociais-beforeSocialUnlike, highlighter_975692, highlighter_200823, EventosSociais-afterSocialUnlike, highlighter_47650, highlighter_489743, EventosSociais-beforeSocialCommentRemove, highlighter_955368, highlighter_894652, EventosSociais-afterSocialCommentRemove, highlighter_353217, highlighter_958106, EventosSociais-beforeSocialCommentEdit, highlighter_506206, highlighter_765493, EventosSociais-afterSocialCommentEdit, highlighter_281768, highlighter_59033, EventosSociais-beforeSocialPostEdit, highlighter_32016, highlighter_819572, EventosSociais-afterSocialPostEdit, highlighter_214097, highlighter_887345, EventosSociais-beforeCommunityParticipation, highlighter_600075, highlighter_774683, EventosSociais-afterCommunityParticipation, highlighter_413327, highlighter_368652, EventosSociais-beforeCommunityLeave, highlighter_573934, highlighter_387277, EventosSociais-afterCommunityLeave, highlighter_825154, highlighter_976185, EventosSociais-beforeSocialFollow, highlighter_727814, highlighter_86647, EventosSociais-afterSocialFollow, highlighter_488866, highlighter_473181, EventosSociais-beforeSocialUnfollow, highlighter_883375, highlighter_496381, EventosSociais-afterSocialUnfollow, highlighter_456604, highlighter_641996, EventosSociais-beforeSocialPictureChange, highlighter_659306, highlighter_623113, EventosSociais-afterSocialPictureChange, highlighter_386096, highlighter_62688 -->
