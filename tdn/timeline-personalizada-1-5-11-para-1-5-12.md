---
title: "Timeline personalizada 1.5.11 para 1.5.12"
url: "https://tdn.totvs.com/display/public/fluig/Timeline+personalizada+1.5.11+para+1.5.12"
scraped_at: "2026-03-09T03:49:40.558Z"
depth: 2
anchors: 29
child_links: 41
---

# Timeline personalizada 1.5.11 para 1.5.12

# Índice

# Objetivo

Este guia é destinado aos desenvolvedores internos e externos do fluig. O objetivo é identificar e mapear todas as diferenças da *Timeline* personalizada entre as versões 1.5.11 e 1.5.12.

Dica

Sugerimos que ao seguir este guia seja utilizado um programa de comparação (diff), que permita visualizar as diferenças entre as versões.

# application.info

Na versão 1.5.12 não foi realizada nenhuma modificação nesse arquivo.

# view.ftl

Nas linhas,

42: SUBSTITUIR o conteúdo da linha 42 por:

[?](#)

| ```` |
| --- |

80: ADICIONAR o conteúdo:

[?](#)

| `{{#editionDate}}```` - ``````{{/editionDate}}``{{^editionDate}}``````{{/editionDate}}` |
| --- |

91: SUBSTITUIR o conteúdo da linha 91 por:

[?](#)

| `{{{text}}}` |
| --- |

100: ADICIONAR o conteúdo:

[?](#)

| ```{{#allowsEditActions}}````````````{{/allowsEditActions}}``` |
| --- |

154: ADICIONAR o conteúdo:

[?](#)

| `{{#allowsEditActions}}``````````````````````{{/allowsEditActions}}` |
| --- |

191:SUBSTITUIR o conteúdo da linha 191 por

[?](#)

| ```` |
| --- |

210: ADICIONAR o conteúdo:

[?](#)

| `{{#editionDate}}```` - ``````{{/editionDate}}``{{^editionDate}}``````{{/editionDate}}` |
| --- |

219: SUBSTITUIR o conteúdo da linha 219 por:

[?](#)

| `{{{comment}}}` |
| --- |

221: ADICIONAR o conteúdo:

[?](#)

| ```{{#allowsEditActions}}``````````{{/allowsEditActions}}` |
| --- |

242: ADICIONAR o conteúdo:

[?](#)

| `{{#allowsEditActions}}``````````````````````{{/allowsEditActions}}` |
| --- |

672: ADICIONAR o conteúdo

[?](#)

| `````````{{text}}````````````{{count}}````Cancelar````Publicar```````````` - ``````` |
| --- |

# socialtimeline.js

Nas linhas:

35: ADICIONAR o seguinte conteúdo:

[?](#)

| `mentionsObj:``null``,` |
| --- |

90: ADICIONAR o seguinte conteúdo: 

[?](#)

| `'edit'` `:``'${i18n.getTranslation("edit")}'``,``'edited'` `:``'${i18n.getTranslation("edited")}'``,``'in'` `:``'${i18n.getTranslation("in")}'``,` |
| --- |

111: ADICIONAR o seguinte conteúdo:

[?](#)

| `'post.success.edited'``:``'${i18n.getTranslation("post.success.edited")}'``,``'comment.success.edited'``:``'${i18n.getTranslation("comment.success.edited")}'` |
| --- |

116: ADICIONAR o seguinte conteúdo:

[?](#)

| `'content-text-edit'``: [``'keyup_resetCountText'``,``'focus_resetCountText'``,``'blur_resetCountText'``,``'input_resetCountText'``]` |
| --- |

276: ADICIONAR o seguinte conteúdo:

[?](#)

| `var` `that =``this``;` |
| --- |

309: ADICIONAR o seguinte conteúdo:

[?](#)

| `posts[i].allowsEditActions = ((``this``.loggedUserAlias === posts[i].user.alias) && (``this``.hasPermission(posts[i].permissions,``'EDIT'``)));``posts[i].editionDate =  posts[i].editionDate !=``null` `? that.formatEditionDate(posts[i].editionDate) :``false``;` |
| --- |

323: ADICIONAR o seguinte conteúdo:

[?](#)

| `posts[i].comments[j].editionDate =  posts[i].comments[j].editionDate !=``null` `? that.formatEditionDate(posts[i].comments[j].editionDate) :``false``;` |
| --- |

388: ADICIONAR o seguinte conteúdo:

[?](#)

| `data[i].allowsEditActions = (``this``.loggedUserAlias === data[i].user.alias &&``this``.hasPermission(permissions,``'EDIT'``));` |
| --- |

912: ADICIONAR o seguinte conteúdo:

[?](#)

| `/* --- EDIÇÃO DE POSTS E COMENTÁRIOS --- */``// ação para apendar um textarea e editar o post``editPostAction:``function``(el, ev, id) {````var` `that =``this``;````// clique no botão de editar do mesmo post, ação nula.````if``($(``'[name="content-text-edit-'` `+ id +``'"]'``).length > 0){````return``;````}````this``.cancelEditAction();````$(el).addClass(``'fs-transparent-25'``);````that.mentionsObj =``null``;````var` `postText = $(``'[data-timeline-content-'` `+ id +``']'``,``this``.DOM);````// recupera o conteúdo do post````this``.serviceFindPost(id,``function``(err, data) {````if` `(err) {````that.showListPostsMessage(err);````return` `false``;````}````if` `(data && data.content) {````var` `count = 600 - data.content.text.length;````postText.hide(0,``function``() {````var` `html = Mustache.render(that.templates[``'social-timeline-edit-content-template'``], {````id: id,````text: data.content.text,````count: count,````sociable:``'editPost'````});````$(``'[data-edit-area-'` `+ id +``']'``,``this``.DOM).append(html);````that.mentions();````that.mentionsObj = data.content.mentions;````});````}````});``},``// ação para apendar um textarea e editar o comentário``editCommentAction:``function``(el, ev, id) {````var` `that =``this``;````// clique no botão de editar do mesmo comentário, ação nula.````if``($(``'[name="content-text-edit-'` `+ id +``'"]'``).length > 0){````return``;````}````this``.cancelEditAction();````$(el).addClass(``'fs-transparent-25'``);````that.mentionsObj =``null``;````// recupera o conteúdo do comentário````var` `commentText = $(``'[data-timeline-content-'` `+ id +``']'``,``this``.DOM);````this``.serviceFindComment(id,``function``(err, data) {````if` `(err) {````that.showListPostsMessage(err);````return` `false``;````}````if` `(data && data.content) {````var` `count = 600 - data.content.commentWithoutMention.length;````commentText.hide(0,``function``() {````var` `html = Mustache.render(that.templates[``'social-timeline-edit-content-template'``], {````id: id,````text: data.content.comment,````count: count,````sociable:``'editComment'````});````$(``'[data-edit-area-'` `+ id +``']'``,``this``.DOM).append(html);````that.mentions();````that.mentionsObj = data.content.mentions;````});````}````});``},``// antes de abrir um textarea para edição, remove qualquer outra edição em aberto e volta a exibir o conteúdo atual``// ação padrão``cancelEditAction:``function``(){````$(``'a.fluigicon-pencil'``).removeClass(``'fs-transparent-25'``);````$(``'.timeline-text-content'``).show();````$(``'.timeline-edit-area'``).html(``""``);``},``// publica a edição do posts/comentario``saveEditAction:``function``(el, ev, id){````var` `that =``this``;````var` `newText =``""``;````var` `sociable = $(``'#content-text-edit'``).data(``'sociable-type'``);````$(``'#content-text-edit'``).mentionsInput(``'val'``,``function``(text) {````newText = text;````});``` ```if` `(that.mentionsObj) {````var` `listMentions = Object.keys(that.mentionsObj);````listMentions.forEach(``function``(data, i) {````var` `regex =``new` `RegExp(that.mentionsObj[data],``'g'``);````newText = newText.replace(regex,``'@['` `+ data +``']'``);````});````}````this``.serviceEditPostOrComment(sociable, id, newText,``function``(err, data) {````if` `(err) {````that.showMessageError(err);````return` `false``;````}````var` `msg =``'post.success.edited'``;````if``(sociable ==``'editComment'``){````msg =``'comment.success.edited'``;````};````FLUIGC.toast({````message: that.i18n.messages[msg],````type:``'success'````});````that.getNewContent(id, sociable);````});``},` |
| --- |

1617: ADICIONAR o seguinte conteúdo:

[?](#)

| `formatEditionDate:``function``(date){````var` `d =``new` `Date(date);````return` `d.toLocaleDateString() +``" "` `+ d.toLocaleTimeString([], {hour:``'2-digit'``, minute:``'2-digit'``});``},` |
| --- |

1730: ADICIONAR o seguinte conteúdo:

[?](#)

| `serviceEditPostOrComment:``function``(sociable, postId, text, cb) {````var` `data = {````sociableObjectId: postId,````text: text````};````var` `options = {````url:``'/api/public/2.0/posts/'` `+ sociable,````contentType:``'application/json'``,````dataType:``'json'``,````type:``'POST'``,````data: JSON.stringify(data)````};````this``.baseAjax(options, cb);``},` |
| --- |

# socialtimeline.properties

Na versão 1.5.12 foram adicionadas algumas chaves de tradução.

Não esquecer de replicar as alterações para os arquivos: socialtimeline_en_US.properties, socialtimeline_es.properties, socialtimeline_pt_BR.properties.

Veja abaixo:

[?](#)

| `edit=Editar``edited=Editado``in=em``post.success.edited=Post editado``comment.success.edited=Comentário editado` |
| --- |


<!-- anchors: Timelinepersonalizada1.5.11para1.5.12-Índice, Timelinepersonalizada1.5.11para1.5.12-Objetivo, Timelinepersonalizada1.5.11para1.5.12-application.info, Timelinepersonalizada1.5.11para1.5.12-view.ftl, highlighter_353405, highlighter_587510, highlighter_803772, highlighter_424261, highlighter_20593, highlighter_816370, highlighter_640889, highlighter_388923, highlighter_392078, highlighter_319435, highlighter_771554, Timelinepersonalizada1.5.11para1.5.12-socialtimeline.js, highlighter_122427, highlighter_309411, highlighter_203511, highlighter_411437, highlighter_333776, highlighter_207756, highlighter_700636, highlighter_732954, highlighter_693635, highlighter_115773, highlighter_894589, Timelinepersonalizada1.5.11para1.5.12-socialtimeline.properties, highlighter_906879 -->
