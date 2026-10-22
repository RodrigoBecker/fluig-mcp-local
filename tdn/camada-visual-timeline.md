---
title: "Camada visual Timeline"
url: "https://tdn.totvs.com/display/public/fluig/Camada+visual+Timeline"
scraped_at: "2026-03-09T03:49:22.236Z"
depth: 2
anchors: 19
child_links: 52
---

# Camada visual Timeline

# Índice

## Arquivos básicos da Timeline

Como todos os componentes do TOTVS Fluig Plataforma, a Timeline é desenvolvida baseada no *framework* de *templates* [FreeMarker](http://freemarker.org/) (.ftl). O FreeMarker é responsável pela camada de visualização, onde sobre ele é escrito todo HTML do componente. Bem como o(s) arquivo(s) de [FreeMarker](http://freemarker.org/), todos os componentes possuem arquivos próprios de CSS (.css) e JavaScript (.js).

## Ação de edição

No modo de edição da *timeline* você pode configurar as opções de visualização.

![](/download/attachments/113804460/Image%2022.png?version=1&modificationDate=1507557429000&api=v2)

![](/download/attachments/113804460/Image%202.png?version=1&modificationDate=1508249253000&api=v2)

## Ação de visualização

Após gerar uma nova publicação, esse conteúdo é exibido na Timeline em diferentes tipos de visualização:

### Estrutura básica de templates Mustache na timeline

**No HTML**

[?](#)

| `````````````````````{{#postHeader}}````````...````````{{/postHeader}}````{{#text}}````{{{text}}}````{{/text}}````{{#variableContent}}````{{>postContent}}````{{/variableContent}}````````````````````````...````````````````````````{{#comments}}````{{>postComments}}````{{/comments}}````{{#existsMoreComments}}````{{>postMoreComments}}````{{/existsMoreComments}}``````````` |
| --- |

### Tipos de Publicação

Segue abaixo os tipos de Publicação disponíveis na Timeline.

#### Novo Artigo criado

![](/download/attachments/113804460/pic-new-article.png?version=2&modificationDate=1414614740000&api=v2)

#### Publicação na Comunidade

![](/download/attachments/113804460/pic-post-in-community.png?version=2&modificationDate=1414615770000&api=v2)

#### Publicação Compartilhada

![](/download/attachments/113804460/Image%2023.png?version=1&modificationDate=1507557483000&api=v2)

#### Publicação com Imagem

![](/download/attachments/113804460/Image%2024.png?version=1&modificationDate=1507557529000&api=v2)

#### Publicação com vídeo

![](/download/attachments/113804460/Image%2031.png?version=1&modificationDate=1507557569000&api=v2)

#### Publicação com vídeo do YouTube

![](/download/attachments/113804460/Image%2026.png?version=1&modificationDate=1507557604000&api=v2)

#### Publicação com Menção e Hashtag

![](/download/attachments/113804460/Image%2028.png?version=1&modificationDate=1507557672000&api=v2)

#### Modal para Compartilhamento da Publicação

![](/download/attachments/113804460/Image%2037.png?version=1&modificationDate=1507557821000&api=v2)

### Estrutura básica de template Mustache de comentário em uma Publicação

**No HTML**

[?](#)

| `````````````````...````````````````...````````{{{comment}}}````````````````````````````...``````````````````````` |
| --- |

### Comentário

Segue abaixo o tipo de Comentário de Publicação disponível na Timeline.

#### Comentário de uma Publicação

![](/download/attachments/113804460/Image%2029.png?version=1&modificationDate=1507557843000&api=v2)


<!-- anchors: CamadavisualTimeline-Índice, CamadavisualTimeline-ArquivosbásicosdaTimeline, CamadavisualTimeline-Açãodeedição, CamadavisualTimeline-Açãodevisualização, CamadavisualTimeline-EstruturabásicadetemplatesMustachenatimeline, highlighter_199844, CamadavisualTimeline-TiposdePublicação, CamadavisualTimeline-NovoArtigocriado, CamadavisualTimeline-PublicaçãonaComunidade, CamadavisualTimeline-PublicaçãoCompartilhada, CamadavisualTimeline-PublicaçãocomImagem, CamadavisualTimeline-Publicaçãocomvídeo, CamadavisualTimeline-PublicaçãocomvídeodoYouTube, CamadavisualTimeline-PublicaçãocomMençãoeHashtag, CamadavisualTimeline-ModalparaCompartilhamentodaPublicação, CamadavisualTimeline-EstruturabásicadetemplateMustachedecomentárioemumaPublicação, highlighter_79216, CamadavisualTimeline-Comentário, CamadavisualTimeline-ComentáriodeumaPublicação -->
