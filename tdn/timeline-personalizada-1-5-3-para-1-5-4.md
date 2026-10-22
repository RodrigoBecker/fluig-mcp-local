---
title: "Timeline personalizada 1.5.3 para 1.5.4"
url: "https://tdn.totvs.com/display/public/fluig/Timeline+personalizada+1.5.3+para+1.5.4"
scraped_at: "2026-03-09T03:49:31.838Z"
depth: 2
anchors: 21
child_links: 41
---

# Timeline personalizada 1.5.3 para 1.5.4

# Índice

# Objetivo

Este guia é destinado aos desenvolvedores internos e externos do fluig. O objetivo é identificar e mapear todas as diferenças da *Timeline* personalizada entre as versões 1.5.3 e 1.5.4.

Dica

Sugerimos que ao seguir este guia seja utilizado um programa de comparação (diff), que permita visualizadas as diferenças entre as versões 1.5.3 e 1.5.4.

# application.info

Na versão 1.5.4 foi adicionado o novo componente de visualização de artigo, sendo necessário adicionar esta dependência para *widget*.

A linha abaixo, deve ser **ADICIONADA** para a versão 1.5.3:

[?](#)

| `application.resource.component.X=social/socialarticleview` |
| --- |

Atenção!

Não esquecer de substituir o 'X' pela sequência dos componentes já configurados.

# socialtimeline.properties

Na versão 1.5.4 foi adicionada uma chave de tradução e alterada outra, e devem ser **ADICIONADA/ALTERADA** para versão 1.5.3.

Não esquecer de replicar as alterações para os arquivos: socialtimeline_en_US.properties, socialtimeline_es.properties, socialtimeline_pt_BR.properties.

Veja abaixo:

**Alterar:**

[?](#)

| `details=Ver mais` |
| --- |

**Adicionar:**

[?](#)

| `error.loading.article=Erro ao carregar artigo.` |
| --- |

# view.ftl

Na linha 40 da versão 1.5.4, copiar o código abaixo e **SUBSTITUIR** na versão 1.5.3:

[?](#)

| `` |
| --- |

Na linha 94 da versão 1.5.4, copiar o bloco abaixo e **SUBSTITUIR** na versão 1.5.3:

[?](#)

| `{{#canLike}}````````````{{#supported}}````````{{/supported}}````{{^supported}}````````{{/supported}}````{{numberLikes}}``````````{{/canLike}}``{{#canComment}}````````````````{{numberComments}}``````````{{/canComment}}``{{#canNotify}}````````````{{#watching}}````````{{/watching}}````{{^watching}}````````{{/watching}}````{{numberWatchers}}``````````{{/canNotify}}``{{#canShare}}````````````{{#shared}}````````{{/shared}}````{{^shared}}````````{{/shared}}````{{numberShares}}``````````{{/canShare}}``{{#canDenounce}}``````````````````````{{/canDenounce}}` |
| --- |

Na linha 196 da versão 1.5.4, copiar o bloco abaixo e **SUBSTITUIR** na versão 1.5.3:

[?](#)

| `{{#canLike}}````````````{{#supported}}````````{{/supported}}````{{^supported}}````````{{/supported}}````{{numberLikes}}``````````{{/canLike}}``{{#canDenounce}}``````````````````````{{/canDenounce}}` |
| --- |

Na linha 419 da versão 1.5.4, copiar o código abaixo e **SUBSTITUIR** na versão 1.5.3:

[?](#)

| `````````````{{#hasShareText}}````````{{/hasShareText}}````{{#linkedObject.thumbURL}}````````{{^hasShareText}} {{/hasShareText}}````````````````````````````````{{/linkedObject.thumbURL}}````````{{linkedObject.description}}````````````{{linkedObject.text}}````{{i18n.details}}````````{{#hasShareText}}````````{{/hasShareText}}``````` |
| --- |

# socialtimeline.js

Na linha 24 da versão 1.5.4, copiar o conteúdo abaixo e **ADICIONAR** na versão 1.5.3:

[?](#)

| `commandKey:``false``,` |
| --- |

Copiar a linha 88 da versão 1.5.4 e **ADICIONAR** na versão 1.5.3:

[?](#)

| `'errorLoadingArticle'``:``'${i18n.getTranslation("error.loading.article")}'` |
| --- |

Copiar as linhas 165 até 189 da versão 1.5.4 e **ADICIONAR** na versão 1.5.3:

[?](#)

| `articleLinkAction:``function``(el, ev) {````var` `$el = $(el), that =``this``;````if` `(FLUIGC.utilities.ctrlIsPressed(ev)) {````var` `articleHref = $(el).data(``'href'``);````window.open(articleHref,``'_blank'``);````}``else` `{````var` `articleId = $el.attr(``'data-articleId'``), articleTitle = $el.attr(``'data-articleTitle'``), communityAlias =``this``.socialAlias;````SOCIALBC.viewArticle({````'title'``: articleTitle,````'articleId'``: articleId,````'alias'``: communityAlias,````'instanceId'``: that.instanceId````},``function``(error, data) {````if` `(error) {````FLUIGC.toast({````message: that.i18n.labels[``'errorLoadingArticle'``],````type:``'danger'````});````}````$(``'[data-close-articleview]'``).on(``'click'``,``function``() {````$(``'#articleview-modal-'` `+ that.instanceId).modal(``'hide'``);````});````});````}``},` |
| --- |

Copiar as linhas a partir da linha 294 da versão 1.5.4 e **ADICIONAR** na versão 1.5.3:

[?](#)

| `posts[i].canLike =``this``.hasPermission(posts[i].permissions,``'LIKE'``);``posts[i].canComment =``this``.hasPermission(posts[i].permissions,``'COMMENT'``);``posts[i].canNotify =``this``.hasPermission(posts[i].permissions,``'NOTIFY_POST'``);``posts[i].canShare =``this``.hasPermission(posts[i].permissions,``'SHARE'``);``posts[i].canDenounce =``this``.hasPermission(posts[i].permissions,``'DENOUNCE'``);` |
| --- |

Na a partir da linha 354 da versão 1.5.4, copiar o bloco abaixo e **ADICIONAR** na versão 1.5.3:

[?](#)

| `hasPermission:``function``(permissions, permission){````return` `permissions && permissions.indexOf(permission) > - 1;``},` |
| --- |

Copiar a partir da linha 358 da versão 1.5.4 e **SUBSTITUIR** na versão 1.5.3:

[?](#)

| `showComments:``function``(data, $post, isNew) {````var` `len = data.length, i = 0, html =``''``;````for` `(i; i ```try` `{````data[i].tenantURI =``this``.tenantURI;````data[i].comment =``this``.generateContentTextFormatted(data[i].comment, data[i].mentions);````data[i].i18n =``this``.i18n[``'labels'``];````data[i].allowsRemoveActions =``this``.loggedUserAlias === data[i].user.alias;````data[i].existsNumberLikes =``this``.generateListClass(data[i].numberLikes);````//novos comentários não tem o permissionamento do post````if``(isNew){````if``($post.data(``"post-permissions"``)){````permissions = $post.data(``"post-permissions"``).split(``","``);````data[i].canLike =``this``.hasPermission(permissions,``'LIKE'``);````data[i].canDenounce =``this``.hasPermission(permissions,``'DENOUNCE'``);````}````}````html += Mustache.render(``this``.templates[``'social-timeline-comment-template'``], data[i]);````}``catch` `(err) {````if` `(console) {````console.log(data[i] ||``''``, err);````}````}````}````// Validar se é um novo comentário ou listagem/paginação.````if` `(isNew) {````$post.find(``'[data-timeline-container-comment]'``).after(html);````}``else` `{````$post.find(``'[data-comment-id]:last'``).after(html);````}````this``.showVideos();````this``.showCardPopover();````this``.instanceTimeInteraction();``},` |
| --- |

Copiar a partir da linha 851 da versão 1.5.4, copiar o bloco abaixo e **SUBSTITUIR** na versão 1.5.3:

[?](#)

| `openAnswerFormAction:``function``(el, ev) {````var` `$el = $(el), documentId = $el.data(``'timeline-form-id'``);````if` `(FLUIGC.utilities.ctrlIsPressed(ev)) {````var` `articleHref = $el.attr(``'href'``);````window.open(articleHref,``'_blank'``);````}``else` `{````SOCIALBC.openAnswerForm(documentId);````}``},` |
| --- |

Copiar a partir da linha 1271 da versão 1.5.4, copiar o bloco abaixo e **SUBSTITUIR** na versão 1.5.3:

[?](#)

| `// Template para exibição de artigos.``else` `if` `(obj.linkedObject.objectClass.indexOf(``'com.totvs.technology.social.article'``) !== -1) {````if` `(data.formattedText !==``""``) {````obj.hasShareText =``true``;````}````obj.tlpName =``'social-timeline-content-article-template'``;``` ```return` `obj;``}` |
| --- |


<!-- anchors: Timelinepersonalizada1.5.3para1.5.4-Índice, Timelinepersonalizada1.5.3para1.5.4-Objetivo, Timelinepersonalizada1.5.3para1.5.4-application.info, highlighter_722695, Timelinepersonalizada1.5.3para1.5.4-socialtimeline.properties, highlighter_213776, highlighter_329556, Timelinepersonalizada1.5.3para1.5.4-view.ftl, highlighter_510047, highlighter_989050, highlighter_984580, highlighter_705107, Timelinepersonalizada1.5.3para1.5.4-socialtimeline.js, highlighter_303878, highlighter_345543, highlighter_388253, highlighter_108414, highlighter_358558, highlighter_701249, highlighter_836251, highlighter_92270 -->
