---
title: "Timeline personalizada 1.4.x para 1.5.0"
url: "https://tdn.totvs.com/display/public/fluig/Timeline+personalizada+1.4.x+para+1.5.0"
scraped_at: "2026-03-09T03:49:27.105Z"
depth: 2
anchors: 49
child_links: 44
---

# Timeline personalizada 1.4.x para 1.5.0

# Índice

# Objetivo

Este guia é destinado aos desenvolvedores internos e externos do fluig. O objetivo é identificar e mapear todas as diferenças da *Timeline* personalizada entre as versões 1.4.x e 1.5.0.

Dica

Sugerimos que ao seguir este guia seja utilizado um programa de comparação (diff), que permita visualizadas as diferenças entre as versões 1.4.x e 1.5.0.

# application.info

Na versão 1.5.0 foi melhorado o componente de compartilhamento, sendo necessário adicionar estas dependências para *widget*.

As linhas abaixo, da versão 1.5.0, devem ser **ADICIONADAS** para a versão 1.4.x:

[?](#)

| `application.resource.component.X=social/socialshare``application.resource.component.X=social/socialsharelist``application.resource.component.X=social/socialformanswer` |
| --- |

Atenção!

Não esquecer de substituir o 'X' pela sequência dos componentes já configurados.

# edit.ftl

Na versão 1.5.0 foi adicionado mais um tipo de ordenação (mais *likes*), causando uma pequena alteração na estrutura do HTML.

Copiar o bloco abaixo que se encontra a partir da linha 34 da versão 1.5.0 e **SUBSTITUIR** na versão 1.4.x:

[?](#)

| `````````${i18n.getTranslation('options.ordenation')}````````${i18n.getTranslation('last.publications')}````${i18n.getTranslation('recently.publication')}````${i18n.getTranslation('more.like')}``````````` |
| --- |

# socialtimeline.properties

Na versão 1.5.0 foram adicionadas algumas chaves de tradução e devem ser **ADICIONADAS** para versão 1.4.x.

Não esquecer de replicar as alterações para os arquivos: socialtimeline_en_US.properties, socialtimeline_es.properties, socialtimeline_pt_BR.properties.

Veja abaixo:

[?](#)

| `this.form=um formulário``anwser=responder``message.error.video.not.supported=Ops, esse vídeo não é suportado pelo seu navegador. Faça o download do vídeo ou utilize outro navegador.``post.denounced= O conteúdo foi denunciado por conter palavras restritas e não está mais disponível``options.ordenation=Ordenação padrão``more.like=Mais curtidos``message.video.not.supported=Esse vídeo não é suportado pelo seu navegador.``message.video.not.supported.download=Faça o download do vídeo``message.video.not.supported.sulfix=ou utilize outro navegador.` |
| --- |

# view.ftl

Na linha 40 da versão 1.5.0, copiar o código abaixo e **SUBSTITUIR** na versão 1.4.x:

[?](#)

| `` |
| --- |

Na linha 124 da versão 1.5.0, copiar o bloco abaixo e **SUBSTITUIR** na versão 1.4.x:

[?](#)

| `{{#shared}}``````{{/shared}}``{{^shared}}``````{{/shared}}``{{numberShares}}` |
| --- |

Na linha 231 da versão 1.5.0, copiar o bloco abaixo e **SUBSTITUIR** na versão 1.4.x:

[?](#)

| `{{^removeText}}````{{#originalText}}````````````{{{originalText}}}````````````{{/originalText}}``{{/removeText}}` |
| --- |

Na linha 257 da versão 1.5.0, copiar o código abaixo e **SUBSTITUIR** na versão 1.4.x:

[?](#)

| `` |
| --- |

Na linha 268 da versão 1.5.0, copiar o código abaixo e **ADICIONAR** na versão 1.4.x:

[?](#)

| `` |
| --- |

Na linha 279 da versão 1.5.0, copiar o código abaixo e **SUBSTITUIR** na versão 1.4.x:

[?](#)

| `` |
| --- |

Na linha 293 da versão 1.5.0, copiar o código abaixo e **ADICIONAR** na versão 1.4.x:

[?](#)

| `` |
| --- |

Na linha 308 da versão 1.5.0, copiar o bloco abaixo e **SUBSTITUIR** na versão 1.4.x:

[?](#)

| `{{linkedObject.description}}``{{^isFolder}}````{{i18n.version}}/{{i18n.revision}}: {{documentVersion}}``{{/isFolder}}` |
| --- |

Na linha 329 da versão 1.5.0, copiar o bloco abaixo e **SUBSTITUIR** na versão 1.4.x:

[?](#)

| `{{linkedObject.description}}``{{^isFolder}}````{{i18n.version}}/{{i18n.revision}}: {{documentVersion}}``{{/isFolder}}` |
| --- |

Na linha 342 da versão 1.5.0, copiar o bloco abaixo e **ADICIONAR** na versão 1.4.x:

[?](#)

| `````````````````````````````````````{{linkedObject.description}}````````````{{i18n.anwser}}````````````````````````````````````````````````````{{linkedObject.description}}````````````{{i18n.details}}``````````````` |
| --- |

Na linha 481 da versão 1.5.0, copiar o bloco abaixo e **SUBSTITUIR** na versão 1.4.x:

[?](#)

| ````Se o navegador possuir o flash player instalado é utilizada a técnica de "object"````para exibir os vídeos, se não, é utilizado "iframe" por motivos de bugs no IE9.``` ```O IE9 não sabe se o flash está habilitado ou não, então ele exibe um thumb "quebrado".``` ```Não foi utilizada essa técnica em todos os navegadores pois no chrome acontece erros de requests.``` ```http://stackoverflow.com/questions/24490323/google-chrome-cast-sender-error-if-chrome-cast-extension-is-not-installed-or-usi``-->``{{#hasFlash}}```````````````````````````allowfullscreen``=``"true"````allowscriptaccess``=``"always"````wmode``=``"transparent"``>``````````{{/hasFlash}}``{{^hasFlash}}```````src``=``"https://www.youtube.com/embed/{{youtubeVideoId}}"````frameborder``=``"0"` `allowfullscreen``=``"allowfullscreen"``/>``{{/hasFlash}}` |
| --- |

Na linha 531 da versão 1.5.0, copiar o bloco abaixo e **SUBSTITUIR** na versão 1.4.x:

[?](#)

| `{{#hasFlash}}```````````````````````````allowfullscreen``=``"true"````allowscriptaccess``=``"always"````wmode``=``"transparent"``>``````````{{/hasFlash}}``{{^hasFlash}}```````src``=``"https://www.youtube.com/embed/{{youtubeVideoId}}"````frameborder``=``"0"` `allowfullscreen``=``"allowfullscreen"``/>``{{/hasFlash}}` |
| --- |

Na linha 635 da versão 1.5.0, copiar o código abaixo e **SUBSTITUIR** na versão 1.4.x:

[?](#)

| `{{name}}` |
| --- |

Na linha 650 da versão 1.5.0, copiar o bloco abaixo e **ADICIONAR** na versão 1.4.x:

[?](#)

| `````````````````Ops!````{{i18n.videoNotSupported}}````````````{{i18n.videoNotSupportedDownload}} {{i18n.videoNotSupportedSulfix}}``````````` |
| --- |

# image-video-error.svg

Atualizar arquivo 1.4.x.

Copiar a imagem image-video-error.svg da versão 1.5.0 para a versão 1.4.x no seguinte caminho:

timeline/src/main/webapp/resources/images/

# socialtimeline.js

Na linha 9 da versão 1.5.0, copiar o conteúdo abaixo e **ADICIONAR** na versão 1.4.x:

[?](#)

| `hasFlash:``null``,` |
| --- |

Copiar as linhas 50, 60 e 85 da versão 1.5.0 e **ADICIONAR** na versão 1.4.x:

[?](#)

| `'this.form'``:``'${i18n.getTranslation("this.form")}'``,``'MORE_LIKE'``:``'${i18n.getTranslation("more.like")}'``,``'anwser'` `:``'${i18n.getTranslation("anwser")}'``,` |
| --- |

Copiar as linhas 95 até 101 da versão 1.5.0 e **ADICIONAR** na versão 1.4.x:

[?](#)

| `'video.not.supported'``:``'${i18n.getTranslation("message.error.video.not.supported")}'``,``'post.denounced'``:``'${i18n.getTranslation("post.denounced")}'``,``'denounce.reason.empty'``:``'${i18n.getTranslation("alert.message.denounce.reason.empty")}'``,``'denounce.content.invalid'``:``'${i18n.getTranslation("alert.message.denounce.content.invalid")}'``,``'videoNotSupported'``:``'${i18n.getTranslation("message.video.not.supported")}'``,``'videoNotSupportedDownload'``:``'${i18n.getTranslation("message.video.not.supported.download")}'``,``'videoNotSupportedSulfix'``:``'${i18n.getTranslation("message.video.not.supported.sulfix")}'` |
| --- |

Copiar a linha 111 da versão 1.5.0 e **ADICIONAR** na versão 1.4.x:

[?](#)

| `'fluig-share'``: [``'click_share'``]` |
| --- |

Na linha 123 da versão 1.5.0, copiar o bloco abaixo e **ADICIONAR** na versão 1.4.x:

[?](#)

| `// Validação para verificar se o flash está instalado para a renderização de vídeos.``try` `{````this``.hasFlash = (``typeof` `navigator.plugins ==``'undefined'` `|| navigator.plugins.length == 0) ? !!(``new` `ActiveXObject(``'ShockwaveFlash.ShockwaveFlash'``)) : navigator.plugins[``'Shockwave Flash'``];``}``catch` `(ex) {````this``.hasFlash =``false``;``}` |
| --- |

Copiar a linha 145 da versão 1.5.0 e **SUBSTITUIR** na versão 1.4.x:

[?](#)

| ```if``(``this``.continueScroll && !``this``.isEditMode &&``this``.style !==``'singlepost'``) {` |
| --- |

Na linha 219 da versão 1.5.0, copiar o bloco abaixo e **SUBSTITUIR** na versão 1.4.x:

[?](#)

| `findPost:``function``(postId, isNew) {````var` `that =``this``,````dataPost = []````;``` ```this``.serviceFindPost(postId,``function``(err, data) {````if``(err) {````that.showListPostsMessage(err);````return` `false``;````}````// foi adicionado um tratamento para quando o post estiver denunciado````if``(data && data.content && data.content.numberDenouncements == 0) {````dataPost.push(data.content);````that.showPosts(dataPost, isNew);````}````else` `{````that.showListPostsMessage();````}``` ```if``(data && data.content && data.content.numberDenouncements != 0){````that.showFeedbackMessage(that.i18n.messages[``'post.denounced'``],``'warning'``);````}````});``},` |
| --- |

Na linha 244 da versão 1.5.0, copiar o bloco abaixo e **SUBSTITUIR** na versão 1.4.x:

[?](#)

| `showPosts:``function``(posts, isNew) {````var` `data = {},````html =``''``,````len = posts.length,````i = 0,````comLen,````j````;``` ```// Validar se o post a ser exibido já está na listagem.````if``(isNew && $(``'[data-post-id="'` `+ posts[0].postId +``'"]'``,``this``.DOM).length) {````return` `false``;````}``` ```// Responsável por manipular os dados de posts retornados no objeto "posts" e enviar````// os mesmos prontos para o mustache montar o post.````for``(i; i ```// Garantir que a timeline apresente algum post sem quebrar o script.````try` `{````posts[i].tenantURI =``this``.tenantURI;````posts[i].locale =``this``.locale;````posts[i].text =``this``.generateContentTextFormatted(posts[i].text, posts[i].mentions);````posts[i].variableContent =``this``.generateTemplateVariableContent(posts[i]);````posts[i].postHeader =``this``.generatePostHeader(posts[i]);````posts[i].i18n =``this``.i18n[``'labels'``];````posts[i].allowsRemoveActions =``this``.loggedUserAlias === posts[i].user.alias;````posts[i].existsNumberLikes =``this``.generateListClass(posts[i].numberLikes);````posts[i].existsNumberComments =``this``.generateListClass(posts[i].numberComments);````posts[i].existsNumberWatchers =``this``.generateListClass(posts[i].numberWatchers);````posts[i].existsNumberShares =``this``.generateListClass(posts[i].numberShares);````posts[i].existsMoreComments = posts[i].numberComments > 2;````posts[i].shared =``'fs-display-inline-block'` `== posts[i].existsNumberShares;````posts[i].hasFlash =``this``.hasFlash ?``true` `:``false``;``` ```comLen = posts[i].comments.length;````j = 0;``` ```// Responsável por manipular os dados de comentários retornados no objeto "posts".````for``(j; j ```posts[i].comments[j].allowsRemoveActions =``this``.loggedUserAlias === posts[i].comments[j].user.alias;````posts[i].comments[j].existsNumberLikes =``this``.generateListClass(posts[i].comments[j].numberLikes);````posts[i].comments[j].comment =``this``.generateContentTextFormatted(posts[i].comments[j].comment, posts[i].comments[j].mentions);````}``` ```// Esse tratamento é feito pois quando um post é criado, o serviço de acompanhar````// automaticamente é assincrono, então ao exibir o post na tela o mesmo não está````// acompanhado pelo usuário criador ainda.````if``(isNew &&``this``.loggedUserAlias === posts[i].user.alias) {````posts[i].watching =``true``;````posts[i].numberWatchers = 1;````posts[i].existsNumberWatchers =``'fs-display-inline-block'``;````}``` ```html += Mustache.render(``this``.templates[``'social-timeline-post-template'``], posts[i], {````postComments:``this``.templates[``'social-timeline-comment-template'``],````postMoreComments:``this``.templates[``'social-timeline-show-more-comments-template'``],````postContent:``this``.templates[posts[i].variableContent.tlpName]````});````}````catch``(err) {````if``(console) console.log(posts[i] ||``''``, err);````}````}``` ```// Validar se é um novo post ou listagem/paginação.````if``(isNew) {````$(``'[data-timeline-content-message]'``,``this``.DOM).remove();````this``.$listPostDOM.prepend(html);````}````else` `{````this``.$listPostDOM.append(html);````}``` ```$(``'#timeline-ordering-posts'``,``this``.DOM).removeAttr(``'disabled'``);``` ```if``(``this``.$btnShowMore) {````this``.$btnShowMore.removeAttr(``'disabled'``);````}``` ```this``.showVideos();````this``.showCardPopover();````this``.instanceTimeInteraction();````this``.entityRetrieveUndergoing =``false``;``},` |
| --- |

Na linha 469 da versão 1.5.0, copiar o bloco abaixo e **SUBSTITUIR** na versão 1.4.x:

[?](#)

| `showVideos:``function``() {````var` `that =``this``,````videos = document.querySelectorAll(``'.video-js'``),````isLoaded =``false````;````[].forEach.call(videos,``function``(item, idx) {````isLoaded = item.getAttribute(``'data-is-loaded'``);````if``(!isLoaded) {````// esse tratamento é feito para vídeos com problemas de renderização````// na timeline. A única maneira encontrada de capturar esse erro foi````// adicionar "na mão" o listener do evento error do vídeo.````document.getElementById(item.id).addEventListener(``'error'``,``function``(ev) {````var` `isError = ev.path ?``false` `:``true``;``` ```if``(isError) {````$(``this``)````.parents(``'[data-container-media-video]'``)````.append(Mustache.render(that.templates[``'social-timeline-video-not-supported-template'``], {````i18n: that.i18n[``'messages'``]````}));````}````},``true``);``` ```videojs(item.id, {````width:``'100%'``,````height:``'100%'````});``` ```item.setAttribute(``'data-is-loaded'``,``'true'``);````}````});``},` |
| --- |

Na linha 551 da versão 1.5.0, copiar o bloco abaixo e **ADICIONAR** na versão 1.4.x:

[?](#)

| `downloadVideoAction:``function``(el, ev, id) {````var` `$el = $(el),````$post = $el.parents(``'[data-post-id="'` `+ id +``'"]'``),````restUrl = $post.find(``'[data-video-rest-url]'``).data(``'video-rest-url'``)````;``` ```window.location = restUrl;``},` |
| --- |

Na linha 788 da versão 1.5.0, copiar o bloco abaixo e **ADICIONAR** na versão 1.4.x:

[?](#)

| `listSharesAction:``function``(el, ev, id) {````SOCIALBC.shareListModal({````sociableId : id,````instanceId: Date.now()````});``},` |
| --- |

Na linha 871 da versão 1.5.0, copiar o bloco abaixo e **ADICIONAR** na versão 1.4.x:

[?](#)

| `openAnswerFormAction:``function``(el, ev) {````var` `$el = $(el),````documentId = $el.data(``'timeline-form-id'``)````;``` ```SOCIALBC.openAnswerForm(documentId);``},` |
| --- |

Na linha 967 da versão 1.5.0, copiar o bloco abaixo e **SUBSTITUIR** na versão 1.4.x:

[?](#)

| `shareAction:``function``(el, ev, id) {````var` `$el = $(el),````preview =``this``.processPreview($el),````loggedUserAlias = WCMAPI.getUserLogin(),````id = $el.parents(``'[data-comment-id]'``).data(``'comment-id'``) || $el.parents(``'[data-post-id]'``).data(``'post-id'``),````onlyLink = $el.parents(``'[data-post-community-hidden]'``).data(``'post-community-hidden'``),````url = WCMAPI.getServerURL() + WCMAPI.getProtectedContextPath() +``"/"` `+ WCMAPI.getTenantCode() +``'/post/'` `+ loggedUserAlias +``'/'` `+ id````;````SOCIALBC.share($el, {````showOnlyLink: onlyLink,````shareType:``'SOCIABLE'``,````type:``'POST'``,````preview: preview,````link: url,````paramId: id,````widthNoFlash:``'200px'````});``},` |
| --- |

Na linha 987 da versão 1.5.0, copiar o bloco abaixo e **ADICIONAR** na versão 1.4.x:

[?](#)

| `processPreview:``function``($el) {````var` `$previewVideo = $el.parents(``'.timeline-list-posts-item'``).find(``'[data-url-media]'``),````imgEl, miniature, preview````;``` ```if``($previewVideo.length) {````imgEl = $(``''``);````imgEl.attr(``'src'``, $previewVideo.data(``'url-media'``));````imgEl.addClass(``'media-photo'``);````return` `imgEl.wrap(``''``).parent().html();````}``else` `{````miniature = $el.parents(``'.timeline-list-posts-item'``).find(``'.panel-body'``);````preview = $(miniature).find(``'.timeline-recommendation-content'``);````if``(preview.length) {````preview = preview.clone().wrap(``''``).parent().html();````preview = preview.replace(/well+/,``''``);````return` `preview;````}````return` `miniature.clone().wrap(``''``).parent().html();````}``},` |
| --- |

Na linha 1009 da versão 1.5.0, copiar o bloco abaixo e **SUBSTITUIR** na versão 1.4.x:

[?](#)

| `controlInteractionActions:``function``($el, interactionType) {````var` `numberInteraction = +$el.text();``` ```if``(interactionType ===``'add'``) {````++numberInteraction;````}````else` `{````--numberInteraction;````}``` ```if``(numberInteraction > 0) {````$el````.text(numberInteraction)````.removeClass(``'hidden'``)````.addClass(``'fs-display-inline-block'``);````}````else` `{````$el````.text(numberInteraction)````.removeClass(``'fs-display-inline-block'``)````.addClass(``'hidden'``);````}``},` |
| --- |

Na linha 1033 da versão 1.5.0, copiar o bloco abaixo e **ADICIONAR** na versão 1.4.x:

[?](#)

| `returnOthersOrderTypes:``function``() {````var` `index, allOrderTypes;``` ```allOrderTypes = [``'CREATION_DATE'``,``'LAST_UPDATE'``,``'MY_PUBLICATIONS'``,``'MORE_LIKE'``];````index = allOrderTypes.indexOf(``this``.orderType);````allOrderTypes.splice(index,1);````return` `allOrderTypes;``` `},` |
| --- |

Na linha 1044 da versão 1.5.0, copiar o bloco abaixo e **SUBSTITUIR** na versão 1.4.x:

[?](#)

| `generateOrderAction:``function``() {````var` `orderType =``this``.orderType,````otherOrderType =``this``.returnOthersOrderTypes(),````permissionOrder =``this``.permissionOrder,````actions = []````;``` ```switch``(orderType) {````case` `'MY_PUBLICATIONS'``:````if``(permissionOrder) {````for` `(``var` `i = 0; i ```var` `optionOrderType = otherOrderType[i];````actions.push({````orderType: optionOrderType,````orderName:``this``.i18n.labels[optionOrderType]````});````}````}``else` `{````actions.push({````orderType:``this``.configOrderType,````orderName:``this``.i18n.labels[``this``.configOrderType]````});````}``` ```break``;``` ```case` `'CREATION_DATE'``:````if``(permissionOrder) {````for` `(``var` `i = 0; i ```var` `optionOrderType = otherOrderType[i];````actions.push({````orderType: optionOrderType,````orderName:``this``.i18n.labels[optionOrderType]````});````}````}``else` `{````actions.push({````orderType:``'MY_PUBLICATIONS'``,````orderName:``this``.i18n.labels[``'MY_PUBLICATIONS'``]````});````}``` ```break``;``` ```case` `'LAST_UPDATE'``:````if``(permissionOrder) {````for` `(``var` `i = 0; i ```var` `optionOrderType = otherOrderType[i];````actions.push({````orderType: optionOrderType,````orderName:``this``.i18n.labels[optionOrderType]````});````}````}``else` `{````actions.push({````orderType:``'MY_PUBLICATIONS'``,````orderName:``this``.i18n.labels[``'MY_PUBLICATIONS'``]````});````}````break``;````case` `'MORE_LIKE'``:````if``(permissionOrder) {````for` `(``var` `i = 0; i ```var` `optionOrderType = otherOrderType[i];````actions.push({````orderType: optionOrderType,````orderName:``this``.i18n.labels[optionOrderType]````});````}````}``else` `{````actions.push({````orderType:``'MY_PUBLICATIONS'``,````orderName:``this``.i18n.labels[``'MY_PUBLICATIONS'``]````});````}````break``;````}````return` `actions;``},` |
| --- |

Na linha 1125 da versão 1.5.0, copiar o bloco abaixo e **SUBSTITUIR** na versão 1.4.x:

[?](#)

| `generatePostHeader:``function``(data) {````var` `obj = {};``` ```obj.person = {````personName: data.user.name,````personAlias: data.user.alias,````personPage: data.user.page````};``` ```if``(data.type ===``'RECOMMENDATION'``) {````obj.verb =``this``.i18n.labels[``'recommended'``];``` ```if``(!data.linkedObject || !data.linkedObject.objectClass || data.linkedObject.objectClass ===``'POST'``) {````obj.object = {````objectType:``this``.i18n.labels[``'this.publication'``],````objectUrl: data.linkedObject.url || data.url````};````}````else` `if``(data.linkedObject && data.linkedObject.objectClass) {````if``(data.linkedObject.objectClass.indexOf(``'com.totvs.technology.social.relation.entity.Social'``) !== -1) {````obj.object = {````objectType:``this``.i18n.labels[``'this.connection'``],````objectUrl: data.linkedObject.url || data.url````};````}````else` `if``(data.linkedObject.objectClass.indexOf(``'com.totvs.technology.social.article'``) !== -1) {````obj.object = {````objectType:``this``.i18n.labels[``'this.article'``],````objectUrl: data.linkedObject.url || data.url````};````}````else` `if``(data.linkedObject.objectClass.indexOf(``'com.totvs.technology.social.form'``) !== -1) {````obj.object = {````objectType:``this``.i18n.labels[``'this.form'``],````objectUrl: data.linkedObject.url || data.url````};````}````else` `{````obj.object = {````objectType:``this``.i18n.labels[``'this.document'``],````objectUrl: data.linkedObject.url || data.url````};````}````}````else` `{````obj.object = {````objectType:``this``.i18n.labels[``'this.content'``],````objectUrl: data.linkedObject.url || data.url````};````}``` ```if``(data.originShare && data.originShare.type ===``'COMMUNITY'``) {````obj.viaThe = {````viaTheName: data.originShare.name,````viaTheAlias: data.originShare.alias,````viaThePage: data.originShare.page````};````}````}``` ```if``(data.social.type ===``'COMMUNITY'``) {````obj.place = {````placeName: data.social.name,````placeAlias: data.social.alias,````placePage: data.social.page````};````}````else` `if``(data.originShare && data.originShare.type ===``"COMMUNITY"``) {````obj.place = {````placeName: data.originShare.name,````placeAlias: data.originShare.alias,````placePage: data.originShare.page````};````}``` ```return` `obj;``},` |
| --- |

Na linha 1203 da versão 1.5.0, copiar o bloco abaixo e **SUBSTITUIR** na versão 1.4.x:

[?](#)

| `generateListClass:``function``(numberActions) {````if``(+numberActions > 0) {````return` `'fs-display-inline-block'``;````}````else` `{````return` `'hidden'``;````}``},` |
| --- |

Na linha 1212 da versão 1.5.0, copiar o bloco abaixo e **SUBSTITUIR** na versão 1.4.x:

[?](#)

| `generateTemplateVariableContent:``function``(data) {````var` `obj = {},````documentId,````shareMentionVO,````that =``this````;``` ```obj.thumbEnum =``this``.thumbEnum;``` ```if``(data.type ===``'RECOMMENDATION'``) {````obj.isRecommendation =``true``;````}````else` `{````obj.isRecommendation =``false``;````}``` ```// Diferencia se o conteúdo compartilhado é um post ou não.````if``(data.type ===``'RECOMMENDATION'` `&&````(!data.linkedObject || !data.linkedObject.objectClass || data.linkedObject.objectClass ===``'POST'``)) {````obj.linkedObject = data.linkedObject.linkedObject;``` ```// Se o post compartilhado possui texto, o mesmo precisa ser formatado.````if``(data.linkedObject && data.linkedObject.text) {````shareMentionVO = data.shareMentionVO || {};````obj.originalText =``this``.generateContentTextFormatted(data.linkedObject.text, shareMentionVO.mentions);````}``` ```// Se possui linkedObject e o mesmo foi removido retorna.````if``(data.linkedObject && data.linkedObject.removed) {````// Template para exibição de conteúdo removido.````obj.tlpName =``'social-timeline-content-removed-template'``;````return` `obj;````}````// Se o post compartilhado tiver um link do youtube, retorna.````else` `if``(obj.linkedObject && obj.linkedObject.youtubeLink) {````// Template para exibição de vídeo do youtube````obj.tlpName =``'social-timeline-content-youtube-template'``;````return` `obj;````}````// Se o post compartilhado não tiver anexado nenhuma media retorna o template genérico.````else` `if``(!obj.linkedObject) {````// Template para exibição de conteúdo genérico.````obj.tlpName =``'social-timeline-content-generic-template'``;````return` `obj;````}````}````else` `{````obj.linkedObject = data.linkedObject;````// Se possui linkedObject e o mesmo foi removido retorna.````if``(obj.linkedObject && obj.linkedObject.removed) {````// Template para exibição de conteúdo removido.````obj.tlpName =``'social-timeline-content-removed-template'``;````return` `obj;````}````// Se for vídeo do youtube retorna.````else` `if``(data.youtubeLink) {````// Template para exibição de vídeo do youtube.````obj.tlpName =``'social-timeline-content-youtube-template'``;````return` `obj;````}````}``` ```if``(obj.linkedObject && (obj.linkedObject.url || data.urlOrigin) && obj.linkedObject.objectId) {````if``(!obj.linkedObject.removed) {````// Necessário para buscar a url correta do conteúdo.````obj.linkedObject.url = obj.linkedObject.url || data.urlOrigin;``` ```// Necessário para buscar o id do documento se existir.````obj.documentId = obj.linkedObject.objectClass ? obj.linkedObject.objectClass.match(/(?:.*)\.(.+)/)[1] :``''``;``` ```if``(obj.linkedObject.objectClass.indexOf(``'com.totvs.technology.social.document'``) !== -1) {````// Template para exibição de imagens.````if``(obj.linkedObject.thumbURL &&````this``.validateFilesTypes(obj.linkedObject.thumbURL.toLowerCase(),``'validImagesFilesTypes'``)) {````if``(data.linkedObject.sociableType ==``"SocialObject"``){````obj.removeText =``true``;````}````obj.tlpName =``'social-timeline-content-media-image-template'``;````return` `obj;````}````// Template para exibição de vídeos.````else` `if``(obj.linkedObject.thumbURL &&````obj.linkedObject.description &&````this``.validateFilesTypes(obj.linkedObject.thumbURL.toLowerCase(),``'validVideosFilesTypes'``) ||````this``.validateFilesTypes(obj.linkedObject.description.trim().toLowerCase(),``'validVideosFilesTypes'``)) {````obj.tlpName =``'social-timeline-content-media-video-template'``;````return` `obj;````}````// Template para exibição de documentos.````else` `{````// Se tiver uma url de origem````if``(data.urlOrigin){````// Template para exibição de categoria e galeria da comunidade.````obj.tlpName =``'social-timeline-content-gallery-template'``;````return` `obj;````}````// isFolder (atribuído nesse momento baseando-se com 'contains' no````//           atributo thumbUrl pois o objectType sempre vem como documento).````obj.isFolder = obj.linkedObject.thumbURL.toLowerCase().indexOf(``"folder"``) > -1;````obj.documentVersion = FLUIGC.utilities.parseVersion(obj.linkedObject.objectId || 1000);````obj.tlpName =``'social-timeline-content-media-document-template'``;````return` `obj;````}````}````// Template para exibição de socials.````else` `if``(obj.linkedObject.objectClass.indexOf(``'com.totvs.technology.social.relation.entity.Social'``) !== -1) {````if``(obj.linkedObject.thumbURL) {````obj.tlpName =``'social-timeline-content-social-template'``;````return` `obj;````}````}````// Template para exibição de artigos.````else` `if``(obj.linkedObject.objectClass.indexOf(``'com.totvs.technology.social.article'``) !== -1) {````if``(obj.linkedObject.thumbURL) {````obj.tlpName =``'social-timeline-content-article-template'``;````return` `obj;````}````}````// Template para resposta de formulários.````else` `if``(obj.linkedObject.objectClass.indexOf(``'com.totvs.technology.social.form'``) !== -1) {````obj.tlpName =``'social-timeline-content-form-template'``;````return` `obj;````}````// Template para exibição de documentos genéricos não tratados.````if``(obj.linkedObject.thumbURL) {````obj.tlpName =``'social-timeline-content-generic-media-template'``;````return` `obj;````}````}````// Template para exibição de conteúdo removido.````else` `{````obj.tlpName =``'social-timeline-content-removed-template'``;````return` `obj;````}````}``` ```obj.tlpName =``false``;``` ```return` `obj;``},` |
| --- |

Na linha 1391 da versão 1.5.0, copiar o bloco abaixo e **SUBSTITUIR** na versão 1.4.x:

[?](#)

| `formatLink:``function``(text) {````var` `html = Mustache.render(``this``.templates[``'social-timeline-link-template'``]);````var` `htmlResult = text.replace(/((((https?|ftp|file):\/\/)|(www))[-A-Z0-9+&@``#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, html);````htmlResult = htmlResult.replaceAll(``'href="www'``,``'href="http://www'``);````return` `htmlResult;``},` |
| --- |

Na linha 1592 da versão 1.5.0, copiar o bloco abaixo e **SUBSTITUIR** na versão 1.4.x:

[?](#)

| `textComplaintValidate:``function``(text) {````var` `listWords = text.match(/(\w+){3,}/g) || [];````if``(text ===``''``) {````socialGlobal.alert(``this``.i18n.messages[``'denounce.reason.empty'``]);````return` `true``;````}````if``(listWords.length ```socialGlobal.alert(``this``.i18n.messages[``'denounce.content.invalid'``]);````return` `true``;````}````return` `false``;``}` |
| --- |

# socialtimelineedit.js

Na linha 123 da versão 1.5.0, copiar o bloco abaixo e **SUBSTITUIR** na versão 1.4.x:

[?](#)

| `setOrderType:``function``() {````$(``'[data-order-type]'``,``this``.DOM).find(``"option[value='"``+``this``.orderType +``"']"``).prop(``'selected'``,``this``.orderType);``},` |
| --- |


<!-- anchors: Timelinepersonalizada1.4.xpara1.5.0-Índice, Timelinepersonalizada1.4.xpara1.5.0-Objetivo, Timelinepersonalizada1.4.xpara1.5.0-application.info, highlighter_836007, Timelinepersonalizada1.4.xpara1.5.0-edit.ftl, highlighter_376458, Timelinepersonalizada1.4.xpara1.5.0-socialtimeline.properties, highlighter_527138, Timelinepersonalizada1.4.xpara1.5.0-view.ftl, highlighter_349525, highlighter_579706, highlighter_736006, highlighter_504536, highlighter_789197, highlighter_156251, highlighter_675902, highlighter_511829, highlighter_266250, highlighter_492011, highlighter_310775, highlighter_311432, highlighter_34367, highlighter_802809, Timelinepersonalizada1.4.xpara1.5.0-image-video-error.svg, Timelinepersonalizada1.4.xpara1.5.0-socialtimeline.js, highlighter_760375, highlighter_149789, highlighter_588549, highlighter_381193, highlighter_228762, highlighter_371207, highlighter_844376, highlighter_176215, highlighter_32356, highlighter_434483, highlighter_297492, highlighter_979972, highlighter_588454, highlighter_116952, highlighter_876776, highlighter_505318, highlighter_261686, highlighter_898404, highlighter_54409, highlighter_947604, highlighter_168246, highlighter_974504, Timelinepersonalizada1.4.xpara1.5.0-socialtimelineedit.js, highlighter_653989 -->
