---
title: "Timeline"
url: "https://tdn.totvs.com/display/public/fluig/Timeline"
scraped_at: "2026-03-09T03:03:31.521Z"
depth: 1
anchors: 63
child_links: 96
---

# Timeline

# Índice

A Timeline é um feed de posts realizados por usuários que o usuário segue ou comunidades que ele participa. Através dela é possível interagir com os posts, seja comentando-os, curtindo-os ou os compartilhando. Bem como todos os componentes da camada social do Fluig, a Timeline utiliza o facilitador SuperWidget na camada de Javascript. Para saber mais sobre o funcionamento da SuperWidget consulte o manual em [http://tdn.totvs.com/display/fluig/Super+Widget](https://tdn.totvs.com/display/fluig/Super+Widget).

Atenção

A técnica de extensão da timeline não é homologada para a nova timeline de social lançada em [15 de Dezembro de 2020](https://tdn.totvs.com/x/SGHoI).

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

A função atribuida a um elemento HTML possui 2 parâmetros:

- **el:** Representa o próprio botão. No caso do exemplo: <button data-salvar-dados>Salvar dados</button>
- **ev:** representa o objeto do evento disparado

Note que não é necessário adicionar o prefixo **data-**.
O array atribuido é uma string no padrão EVENTO_FUNÇÃO. Várias combinações de evento x função podem ser atribuidos a um único elemento.
Os bindings feitos no objeto local são referentes a elementos HTML dentro do div da widget. E os binds feitos no objeto global são para elementos fora do div da widget, ou retirados do div da widget por outro script, como é o caso das modais do jQueryUI.

### Internacionalização de literais

Para ficar padronizado, é de boa prática que todas a literais que exigem internacionalização sejam adicionadas em um objeto global para que possam ser reutilizadas posteriormente.

#### Exemplo de internacionalização de literais da widget

**No arquivo .js da widget**

[?](#)

| `i18n: {````'titles'``: {````'denounce'``:``'${i18n.getTranslation("denounce")}'``,````'publication'``:``'${i18n.getTranslation("publication")}'``,````...````},````'labels'``: {````'version'``:``'${i18n.getTranslation("version")}'``,````'revision'``:``'${i18n.getTranslation("revision")}'``,````...````},````...``},` |
| --- |

### Métodos do componente

Segue abaixo o detalhamento dos métodos da Timeline.

#### showTimeline()

Este método é responsável por renderizar e exibir o container principal da timeline na página.

#### listPosts()

Este é um método de controle de listagem de publicação. Ela interage com um outro método "**serviceListPosts**" e com o resultado dos registros retornados (VO da publicações), delega o conteúdo retornado para outra função para ser renderizado e exibido na página (listagem de posts).

#### findPost(postId, isNew)

Responsável pelo controle de busca de uma publicação. Ele interage com outro método "**serviceListFind**" e com o resultado do registro retornado (VO da publicação), delega o conteúdo retornado para outra função para ser renderizado e exibido na página (listagem de posts).

```
postId: Number //id da publicação para ser buscada
```

```
isNew: Boolean //se uma nova publicação ou uma publicação já existente
```

#### showPosts(posts, isNew)

Responsável por formatar e exibir as publicações na página. Ele formata o objeto recebido (posts) e envia o mesmo para o Mustache renderizar as publicações e devolver o html pronto para ser exibido.

```
postId: Object/Array //array com os dados para listar os posts
```

```
isNew: Boolean //se uma nova publicação ou não
```

#### showComments(data, $post, isNew)

Responsável por formatar e exibir os comentários páginados. Ele formata o objeto recebido (data) e envia o mesmo para o Mustache renderizar os comentários e devolver o html pronto para ser exibido.

```
data: Object/Array //array com os dados para listar os comentários
```

```
$post: Object/Selector jQuery //selector jQuery do post em questão
```

```
isNew: Boolean //se é um novo comentário ou não
```

#### showPostedPost(evName, data)

Este método escuta (*listener*) a criação de uma nova publicação (feita pelo usuário logado) e encaminha a mesma para ser exibida na página.

```
evName: String //nome do evento disparado
```

```
data: Number //id do post criado
```

#### showMorePosts(el, ev)

Responsável por exibir novas publicações (paginação).

```
el: Object //elemento que disparou o evento
```

```
ev: Object //evento disparado
```

#### showMoreComments(el, ev)

Responsável por exibir novos comentários em uma publicação (paginação).

```
el: Object //elemento que disparou o evento
```

```
ev: Object //evento disparado
```

#### showListPostsMessage(err)

Responsável por exibir uma mensagem informativa ou de erro na timeline baseada no retorno do serviço de listagem de publicações.

```
err: Object //quando for erro, envia o objeto do erro
```

#### showMessageError(err)

Responsável por exibir uma mensagem (toast) com o erro ocorrido em qualquer serviço (interação com o server) disparado pela timeline.

```
err: Object //objeto do erro
```

#### showFeedbackMessage(message, type)

Responsável por exibir uma mensagem genérica (toast) na página.

```
message: String //mensagem para ser exibida
```

```
type: String //tipo de mensagem (success, danger, warning, etc)
```

#### showBtnShowMore()

Responsável por exibir o botão de exibir mais publicações (show more) na timeline.

#### showVideos()

Responsável por instanciar o plugin de vídeo (videojs) nas publicações com vídeo. Ele faz com que um vídeo seja renderizado e disponível para visualização.

#### showCardPopover()

Responsável por instanciar o plugin de popover de informações de usuários e comunidades.

#### instanceTimeInteraction()

Responsável por instanciar o componente de interação de datas nas publicações. Ex. *há 7 horas atrás*.

#### controlBtnShowMore(postsLen)

Responsável por controlar a exibição do botão de **exibir mais publicações** baseada no retorno do serviço de listagem.

```
postsLen: Number //Recebe a quantidade de registros retornados
```

#### changeStatusOrderButton($el)

Responsável por mudar o status do botão de ordenação/filtragem da timeline baseado na opção selecionada. Renderiza novamente via Mustache o botão de ordenação trocando o botão atual.

```
$el: Object/Selector jQuery //Recebe o selector jQuery do botão de ordenação (dropdown)
```

#### toogleCommentArea($post)

Responsável por fazer o toggle (exibir/ocultar) da área de comentário em uma publicação.

```
$post: Object/Selector jQuery //Recebe o selector jQuery do botão de ordenação
```

#### instanceMentions()

Responsável por instanciar o plugin de menção de usuários e comunidades e auto complete de tags na área de comentário de uma publicação.

#### resetMentions(parent)

Responsável por remover as menções e resetar o plugin no elemento instanciado.

```
parent: Object/Selector //Recebe o selector do post para resetar o plugin de menção
```

#### validateFilesTypes(path, type)

Responsável por validar se a extensão da imagem/vídeo será renderizada ou não em uma publicação.

```
path: String //Recebe a string para analisar e validar.
```

```
type: String //Tipo de media para analisar (image, video).
```

#### textComplaintValidate(text)

Esse método é utilizado na funcionalidade de denúncia. Ela verifica se a descrição da denúncia contém no mínimo 4 palavras com  3 caracteres cada uma.

```
text: String //String a ser analisada pela função.
```

#### controlInteractionActions($el, interactionType)

Esse método controla a exibição do número de interações (apoiadores, acompanhadores, etc) em um comentário / publicação.

```
$el: Object/Selector jQuery //Elemento para controlar a interação
```

```
interactionType: String //add ou remove
```

#### timelineAction(el, ev)

Principal método de ação da timeline. Praticamente todas as ações chamam esse método que encapsula todas as validações necessárias para realizar uma ação e capturar o id do comentário ou publicação. A partir do elemento que houve uma interação, ela delega para o método correto da ação. Ex. (supportAction, shareAction, denounceAction, etc).

```
el: Object //Elemento onde houve a interação
```

```
ev: Object //Evento da interação
```

#### openDocumentAction(el, ev)

Método de ação específico para visualizar documentos/imagens publicados na timeline. Responsável por abrir o referido documento em um modal, sem perder a referência à timeline (quando fechar o documento volta para onde estava).

```
el: Object //Elemento onde houve a interação
```

```
ev: Object //Evento da interação
```

#### orderAction(el, ev)

Este método altera a ordenação das publicações da timeline.

```
el: Object //Elemento onde houve a interação
```

```
ev: Object //Evento da interação
```

#### searchAction(el, ev)

Este método faz a busca de uma tag no sistema a partir do valor da mesma.

```
el: Object //Elemento onde houve a interação
```

```
ev: Object //Evento da interação
```

#### denounceAction(el, ev, id)

Este método chama o modal de denúncia de um comentário / publicação.

```
el: Object //Elemento onde houve a interação
```

```
ev: Object //Evento da interação
```

```
id: Number //id do comentário / publicação
```

#### supportAction(el, ev, id)

Este método executa a ação de apoiar um comentário / publicação.

```
el: Object //Elemento onde houve a interação
```

```
ev: Object //Evento da interação
```

```
id: Number //id do comentário / publicação
```

#### watchAction(el, ev, id)

Este método executa a ação de acompanhar uma publicação. 

```
el: Object //Elemento onde houve a interação
```

```
ev: Object //Evento da interação
```

```
id: Number //id do comentário / publicação
```

#### listLikesAction(el, ev, id)

Este método chama o modal de listagem de apoiadores de um comentário / publicação.

```
el: Object //Elemento onde houve a interação
```

```
ev: Object //Evento da interação
```

```
id: Number //id do comentário / publicação
```

#### listWatchersAction(el, ev, id)

Este método chama o modal de listagem de apoiadores de uma publicação.

```
el: Object //Elemento onde houve a interação
```

```
ev: Object //Evento da interação
```

```
id: Number //id do comentário / publicação
```

#### commentAction(el, ev, id)

Este método executa a ação de exibir a área de comentário em uma publicação.

```
el: Object //Elemento onde houve a interação
```

```
ev: Object //Evento da interação
```

```
id: Number //id do comentário / publicação
```

#### timelineCommentAction(el, ev)

Este método executa a ação de comentar.

```
el: Object //Elemento onde houve a interação
```

```
ev: Object //Evento da interação
```

#### removeAction(el, ev, id)

Este método executa a ação de remover um comentário / publicação.

```
el: Object //Elemento onde houve a interação
```

```
ev: Object //Evento da interação
```

```
id: Number //id do comentário / publicação
```

#### shareAction(el, ev, id)

Este método executa a ação de abrir o modal de compartilhamento de uma publicação.

```
el: Object //Elemento onde houve a interação
```

```
ev: Object //Evento da interação
```

```
id: Number //id do comentário / publicação
```

#### denounce(el, ev)

Este método executa a ação de denunciar um comentário / publicação.

```
el: Object //Elemento onde houve a interação
```

```
ev: Object //Evento da interação
```

#### generateOrderAction()

Responsável por gerar o objeto para montar o botão de ordenação de publicações.

#### generatePostHeader(data)

Responsável por gerar o objeto para montar o header de uma publicação.

#### generateListClass(numberActions)

Responsável por validar se existe interação na publicação e gerar a classe que será adicionada no elemento de exibição de interações.

#### generateTemplateVariableContent(data)

Responsável por validar e gerar o nome do template do conteúdo variável de uma publicação. (publicação com imagem, vídeo, compartilhamento, etc).

#### generateContentTextFormatted(text, mentions)

Responsável por formatar o conteúdo de uma publicação.

#### formatMentions(text, mentions)

Responsável por adicionar o html de menção no conteúdo da publicação.

#### formatTags(text)

Responsável por adicionar o html de tags no conteúdo da publicação.

#### formatLink(text)

Responsável por adicionar o html de links no conteúdo da publicação.

#### formatLineBreak(text)

Responsável por adicionar o html de quebra de linhas no conteúdo da publicação.

#### serviceComment(id, comment, cb)

Este método é responsável por realizar a chamada no servidor para fazer a publicação de um comentário.

#### serviceSupport(id, cb)

Este método é responsável por realizar a chamada no servidor para adicionar ou remover apoio em um comentário ou publicação.

#### serviceWatch(id, isWatched, cb)

Este método é responsável por realizar a chamada no servidor para adicionar ou remover acompanhamento em um comentário ou publicação.

#### serviceRemove(id, type, cb)

Esse método é responsável por realizar a chamada no servidor para remover um comentário ou publicação.

#### serviceListPosts(cb)

Esse método é responsável por realizar a chamada no servidor para buscar várias publicações.

#### serviceFindPost(postId, cb, limit)

Esse método é responsável por realizar a chamada no servidor para buscar uma publicação.

#### serviceListComments(postId, offset, cb, limit)

Esse método é responsável por realizar a chamada no servidor para buscar comentários de uma publicação.

#### baseAjax(options, cb)

Esse método é responsável por encapsular todas as configurações básicas de uma chamada ajax.


<!-- anchors: Timeline-Índice, Timeline-BinddeelementosHTMLafunções, Timeline-Exemplodeumbinddafunçãosalvaremumbotão, highlighter_96635, highlighter_427805, Timeline-Internacionalizaçãodeliterais, Timeline-Exemplodeinternacionalizaçãodeliteraisdawidget, highlighter_494419, Timeline-Métodosdocomponente, Timeline-showTimeline(), Timeline-listPosts(), Timeline-findPost(postId,isNew), Timeline-showPosts(posts,isNew), Timeline-showComments(data,$post,isNew), Timeline-showPostedPost(evName,data), Timeline-showMorePosts(el,ev), Timeline-showMoreComments(el,ev), Timeline-showListPostsMessage(err), Timeline-showMessageError(err), Timeline-showFeedbackMessage(message,type), Timeline-showBtnShowMore(), Timeline-showVideos(), Timeline-showCardPopover(), Timeline-instanceTimeInteraction(), Timeline-controlBtnShowMore(postsLen), Timeline-changeStatusOrderButton($el), Timeline-toogleCommentArea($post), Timeline-instanceMentions(), Timeline-resetMentions(parent), Timeline-validateFilesTypes(path,type), Timeline-textComplaintValidate(text), Timeline-controlInteractionActions($el,interactionType), Timeline-timelineAction(el,ev), Timeline-openDocumentAction(el,ev), Timeline-orderAction(el,ev), Timeline-searchAction(el,ev), Timeline-denounceAction(el,ev,id), Timeline-supportAction(el,ev,id), Timeline-watchAction(el,ev,id), Timeline-listLikesAction(el,ev,id), Timeline-listWatchersAction(el,ev,id), Timeline-commentAction(el,ev,id), Timeline-timelineCommentAction(el,ev), Timeline-removeAction(el,ev,id), Timeline-shareAction(el,ev,id), Timeline-denounce(el,ev), Timeline-generateOrderAction(), Timeline-generatePostHeader(data), Timeline-generateListClass(numberActions), Timeline-generateTemplateVariableContent(data), Timeline-generateContentTextFormatted(text,mentions), Timeline-formatMentions(text,mentions), Timeline-formatTags(text), Timeline-formatLink(text), Timeline-formatLineBreak(text), Timeline-serviceComment(id,comment,cb), Timeline-serviceSupport(id,cb), Timeline-serviceWatch(id,isWatched,cb), Timeline-serviceRemove(id,type,cb), Timeline-serviceListPosts(cb), Timeline-serviceFindPost(postId,cb,limit), Timeline-serviceListComments(postId,offset,cb,limit), Timeline-baseAjax(options,cb) -->
