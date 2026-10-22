---
title: "Componentes de Publicação"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=150635531"
scraped_at: "2026-03-09T03:03:22.492Z"
depth: 1
anchors: 41
child_links: 71
---

# Componentes de Publicação

# Índice

### Social Poster - Componente de Publicação

A Social Poster é um componente de publicação que possibilita a criação de um post, no qual é possível anexar uma imagem, vídeo ou um documento.

Bem como todos os componentes da camada social do TOTVS Fluig Plataforma, a Timeline utiliza o facilitador SuperWidget na camada de Javascript. Para saber mais sobre o funcionamento, consulte o manual [Super Widget](/pages/viewpage.action?pageId=111181988) 

### Bind de elementos HTML a funções

Para associar um evento a um elemento HTML, é preciso seguir o formato abaixo.

O componente HTML deve possuir um atributo **data-** o qual receberá o bind de funções da widget.

#### Exemplo de um bind da função salvar em um botão

**No HTML**

[?](#)

| `Salvar dados` |
| --- |

**No arquivo .js da widget**

[?](#)

| `bindings: {````local: {````'salvar-dados'``: [``'click_salvarDados'``]````}````},` `//implementação da função salvar``salvarDados:``function``(el, ev) {````//escreva a ação do botão salvar-dados aqui``}, ...` |
| --- |

A função atribuída a um elemento HTML possui 2 parâmetros:

- **el:** Representa o próprio botão. No caso do exemplo: <button data-salvar-dados>Salvar dados</button>
- **ev:** representa o objeto do evento disparado

Note que não é necessário adicionar o prefixo **data-**.

O array atribuído é uma string no padrão EVENTO_FUNÇÃO.

Várias combinações de evento x função podem ser atribuídos a um único elemento.

Os bindings feitos no objeto local são referentes a elementos HTML dentro do div da widget. E os binds feitos no objeto global são para elementos fora do div da widget, ou retirados do div da widget por outro script, como é o caso das modais do jQueryUI.

### Funções do componente

Segue abaixo o detalhamento das funções da Social Poster:

| Função | Descrição |
| --- | --- |
| Função | Descrição |
| #### loadSocialPoster(alias) | Esta função centraliza todos os serviços necessários para o carregamento da página, monta um objeto 'view' que é renderizado via Mustache.Mustache é uma especificação de templates que não utiliza lógica, ou seja, não possui declarações com if, for, while etc, toda sua construção é baseada em tags. |
| #### getDocumentEnabled(alias, cb) | Função para verificar se a pasta para cada tipo de recurso está habilitada.Realiza uma chamada REST e recupera os dados da comunidade que são passados para uma "callback".Os tipos verificados são: DOCUMENT, GALLERY_PHOTO e GALLERY_VIDEO. |
| #### findSocialVOByAlias(alias, cb) | Retorna um objeto 'social' de acordo com o alias.Realiza uma chamada REST e recupera os dados "social" que são passados para uma "callback".Pode ser um usuário ou uma comunidade. |
| #### getSocialUserLogged(cb) | Retorna o usuário logado.Realiza uma chamada REST e recupera os dados do usuário logado que são passados para uma "callback". |
| #### isSocialMember(alias, cb) | Retorna um objeto com informação se o usuário é membro da comunidade.Realiza uma chamada REST e recupera informação se o usuárioé membro da comunidade e é passado para uma "callback". |
| isSocialDocumentEnabled(alias, feature, cb) | Retorna objeto com informação se um recurso está habilitado.Realiza uma chamada REST e recupera os dados do recurso de acordo com o 'feature' e é passado para uma "callback".Os tipos de 'feature' são: DOCUMENT, GALLERY_PHOTO e GALLERY_VIDEO. |
| #### serviceSocialVOByAlias(alias, cb) | Realiza uma chamada REST (API Publica) e recupera os dados sociais. |
| #### serviceSocialUserLogged(cb) | Realiza uma chamada REST (API Publica) e recupera os dados do usuário logado. |
| #### serviceSocialMember(alias, cb) | Realiza uma chamada REST (API Publica) e recupera os dados que retornam informação se um usuário é membro de uma comunidade. |
| #### serviceSocialDocumentEnabled(alias, feature, cb) | Realiza uma chamada REST (API Publica) e recupera os dados de pastas de uma comunidade. |
| #### serviceCreatePost(options, cb) | Realiza uma chamada REST (API Publica) que envia dados para criação de um post. |
| #### baseAjax(url, options, cb) | Facilitador de uso do ajax |
| #### preventXSS(str) | Função que utiliza uma expressão regular que sobrescreve sinais de 'maior' e 'menor'. |
| #### mentions() | Função que aplica plugin 'mentionsInput' utilizado para 'menção' de usuários ou comunidades. |
| #### resetMentions() | Função que 'limpa' plugin 'mentionsInput'. |
| #### shareTextFocus(el, ev) | Ação do elemento data-post-share-text.Realiza tratamento quando área de post recebe foco. |
| #### closePostShare(el, ev) | Ação do elemento data-close-post-shareRealiza tratamento ao fechar área de post. |
| #### shareTextBlur(el, ev) | Ação do elemento data-post-share-text.Realiza tratamento quando área de post recebe foco. |
| #### shareTextInput() | Ação do elemento data-post-share-text.Realiza tratamento quando área de post recebe foco. |
| #### shareTextKeyUp(el, ev) | Ação do elemento data-post-share-text.Realiza tratamento quando área de post recebe foco. |
| #### placeholderIE() | Realiza tratamento para criação de 'placeholder' para o navegador internet explorer. |
| #### resetCountText() | Realiza verificação da quantidade de caracteres digitadas no campo de post. |
| #### postFormSubmit(el, ev) | Ação do elemento data-post-share-form.Realiza a recuperação dos dados do post para criá-lo. |
| #### resetPostContent(el) | Ação que faz limpeza de todos os dados informados para criação do post. |
| #### postCreate() | Associa funções a eventos relacionados a recursos que podem ser incluídos no post. (Documentos, fotos e vídeos) |
| #### selectImageOpen() | Função que permite selecionar uma imagem de uma galeria. |
| #### selectImageDone(event, data) | Ação disparada pelo evento "selectImageEvent", que notifica a socialposter para adicionar imagem selecionada no campo de post. |
| #### thumbURL(documentId, version) | Função que faz a montagem do endereço de requisição de um documento de acordo com seu 'Id' e 'versão'. |
| #### selectVideoOpen() | Função que permite selecionar um vídeo de uma galeria. |
| #### selectVideoDone(event, data) | Ação disparada pelo evento "selectVideoEvent", que notifica a socialposter para adicionar vídeo selecionado no campo de post. |
| #### selectDocumentOpen() | Função que permite selecionar um documento da comunidade, do repositório e permite ainda que um documento seja enviado. |
| #### selectDocumentDone(event, object) | Ação disparada pelo evento "selectDocumentEvent", que notifica a socialposter para adicionar documento selecionado no campo de post. |
| #### removeAttachedMedia(el, ev) | Ação que faz tratamento para remoção de um recurso que foi adicionado. |
| #### attachMedia(el, ev) | Ação do elemento data-attach-media, responsável por identificar o tipo de anexo. |
| #### attachType(el) | Função que verifica tipo de anexo e delega para função específica para o tratamento necessário. |


<!-- anchors: ComponentesdePublicação-Índice, ComponentesdePublicação-SocialPoster-ComponentedePublicação, ComponentesdePublicação-BinddeelementosHTMLafunções, ComponentesdePublicação-Exemplodeumbinddafunçãosalvaremumbotão, highlighter_984935, highlighter_18963, ComponentesdePublicação-Funçõesdocomponente, ComponentesdePublicação-loadSocialPoster(alias), ComponentesdePublicação-getDocumentEnabled(alias,cb), ComponentesdePublicação-findSocialVOByAlias(alias,cb), ComponentesdePublicação-getSocialUserLogged(cb), ComponentesdePublicação-isSocialMember(alias,cb), ComponentesdePublicação-serviceSocialVOByAlias(alias,cb), ComponentesdePublicação-serviceSocialUserLogged(cb), ComponentesdePublicação-serviceSocialMember(alias,cb), ComponentesdePublicação-serviceSocialDocumentEnabled(alias,feature,cb), ComponentesdePublicação-serviceCreatePost(options,cb), ComponentesdePublicação-baseAjax(url,options,cb), ComponentesdePublicação-preventXSS(str), ComponentesdePublicação-mentions(), ComponentesdePublicação-resetMentions(), ComponentesdePublicação-shareTextFocus(el,ev), ComponentesdePublicação-closePostShare(el,ev), ComponentesdePublicação-shareTextBlur(el,ev), ComponentesdePublicação-shareTextInput(), ComponentesdePublicação-shareTextKeyUp(el,ev), ComponentesdePublicação-placeholderIE(), ComponentesdePublicação-resetCountText(), ComponentesdePublicação-postFormSubmit(el,ev), ComponentesdePublicação-resetPostContent(el), ComponentesdePublicação-postCreate(), ComponentesdePublicação-selectImageOpen(), ComponentesdePublicação-selectImageDone(event,data), ComponentesdePublicação-thumbURL(documentId,version), ComponentesdePublicação-selectVideoOpen(), ComponentesdePublicação-selectVideoDone(event,data), ComponentesdePublicação-selectDocumentOpen(), ComponentesdePublicação-selectDocumentDone(event,object), ComponentesdePublicação-removeAttachedMedia(el,ev), ComponentesdePublicação-attachMedia(el,ev), ComponentesdePublicação-attachType(el) -->
