---
title: "Desenvolvimento de widgets mobile"
url: "https://tdn.totvs.com/display/public/fluig/Desenvolvimento+de+widgets+mobile"
scraped_at: "2026-03-09T04:12:05.244Z"
depth: 2
anchors: 9
child_links: 69
---

# Desenvolvimento de widgets mobile

# Índice

# Widgets Mobile 

No Fluig, agora é possível visualizar widgets por meio das páginas, a partir de aplicativos móveis. Porém existem algumas particularidades que precisam ser lembradas para que o usuário tenha uma boa experiência com este recurso.

Todas as interfaces devem ser desenvolvidas nativamente, com exceção da visualização dos widgets da página que será renderizada pelo *webview* nativo da plataforma.

Qualquer tipo de autenticação requerido pela widget é de inteira responsabilidade do servidor do Fluig (SSO, por exemplo), o Mobile é apenas responsável por mostrar o HTML retornado pelo servidor no *webview*.

A visualização de páginas e widgets *offline* não é suportada no aplicativo Fluig Mobile.

### Recomendações para o desenvolvimento de widgets:

1. **HTML Responsivo:** Hoje no mercado existem variados tamanhos de telas e resoluções, por isso qualquer html desenvolvido para Mobile deve ser responsivo, ou seja, deve se ajustar a qualquer tamanho de tela.
2. **Estética:** A aparência visual e design da widget devem ser atraentes para os usuários, conseguimos isso através de CSS, para isso recomendamos a utilização do [Fluig style guide](https://style.fluig.com). 
3. **Usabilidade:** A widget deve ser fácil de usar, contendo apenas o conteúdo necessário para usuário.
4. **Área de toque:** Os elementos do html devem estar bem posicionados de forma que facilite a área de toque, pois hoje existem dispositivos que as telas são muito pequenas.
5. **Posicionamento das ações: **As ações mais importantes devem estar posicionadas onde o usuário consegue alcançar facilmente, conforme a figura:![](/download/attachments/224113691/image2014-6-23%2012%3A32%3A59.png?version=1&modificationDate=1454489913000&api=v2)![](/download/attachments/224113691/image2014-6-23%2012%3A33%3A7.png?version=1&modificationDate=1454489914000&api=v2)
6. **Converter widgets já existentes para Mobile : **Para agilizar o desenvolvimento focado em mobile e web é necessário utilizar frameworks que tratam a responsividade, recomendamos a utilização do [Fluig Style Guide](https://style.fluig.com/).
7. **Elementos Suportados:**Widgets Mobile suportam os tipos:text
8. textArea
9. radio
10. select
11. combobox
12. checkbox.
13. email (3)
14. tel (3)
15. range (3)
16. date (3)
17. time (1)(3)
18. week (2)(3)
19. number
20. hidden
21. password

(1) Existe um bug no Android Lollipop (5.0) que inviabiliza o uso do tipo *time*. Para mais informações, [clique aqui](https://code.google.com/p/chromium/issues/detail?id=434695).(2) O campo *week* não é suportado pelo iOS.

Não está homologada a implementação de evento que utilizem Swipe.

# Desenvolvendo widgets com suporte a exibição no Fluig Mobile

Cada uma das plataformas utiliza um browser diferente para a renderização de HTML. Esta informação deve ser considerada durante o desenvolvimento para evitar problemas de compatibilidade com os arquivos JavaScript/CSS. A tabela abaixo apresenta a versão mínima dos browsers de cada plataforma que deve ser considerada durante o desenvolvimento:

| Versão mínima da plataforma | Versão mínima do browser |
| --- | --- |
| Versão mínima da plataforma | Versão mínima do browser |
| Android 4.0 (Ice Cream Sandwich) | Webkit 534.30 |
| iOS 7 | Mobile Safari 9537.53 |

Para o desenvolvimento de *widgets* com suporte a dispositivos mobile deve ser adicionado a propriedade **application.mobileapp** no arquivo *application.info com o valor **true**. *

Esta propriedade será processada e persistida na base de dados durante o processo de *deploy *do *widget*.

**application.info**

[?](#)

| 1234567891011121314151617 | `application.type=widget``application.code=news``application.title=Not\u00EDcias da Semana``application.description=Exibe uma lista com as \u00FAltimas not\u00EDcias da semana``application.category=KitIntranet``application.renderer=freemarker``application.icon=icon.png``developer.code=developer``developer.name=TOTVS S.A.``developer.url=http://www.fluig.com``view.file=view.ftl``edit.file=edit.ftl``application.uiwidget=true``application.resource.js.1=/resources/js/news.js``application.resource.css.2=/resources/css/news.css``simple.deploy=false``application.mobileapp=true` |
| --- | --- |

A variável booleana **mobileAppMode** no template do FreeMarker determina se a widget está sendo renderizada através de uma requisição do aplicativo mobile. O Fluig irá verificar o *header* User-Agent da requisição e caso seja oriundo do aplicativo mobile o valor da variável **mobileAppMode** será `true`. Através desta variável é possível modificar o comportamento da widget quando renderizada pelo aplicativo mobile. O valor da variável **mobileAppMode** também está disponível via JavaScript através do método **WCMAPI.isMobileAppMode()**.

[?](#)

| `if` `(WCMAPI.isMobileAppMode()) {````this``.DOM.find(``'a'``).attr(``'href'``,``'#'``);``}` |
| --- |

# API Pública

Está disponível o [serviço na API Pública para realizar a consulta de páginas do Fluig](https://api.fluig.com/resource_PageRest.html#path__2.0_pages_findPages.html). Esta consulta retornará somente as páginas que o usuário tenha permissão de visualização. O retorno do serviço será paginado com uma lista de PageVOs contendo as informações das páginas, entre elas a URL de acesso, URL do ícone, páginas filhas (quando houverem) e se está disponível para o aplicativo mobile. Será possível informar os seguintes filtros:

- **parentPageCode**: Código da página pai. Quando informado, retorna somente as páginas filhas da página informada.

- **isMobile**: Caso informado `true` retorna somente as páginas disponíveis para o aplicativo mobile.

- **pageIndex: **Caso informado, será o *index* da página a ser exibida

- **pageSize: **Caso informado, definirá a quantidade de registros por página.

- **searchLevel: **Caso informado, busca hierarquicamente as páginas filhas .

- **internalPages: **Caso informado true, a consulta de páginas resultará somente em paginas internas da plataforma.

- **filter**: String para filtrar o dados em caso de busca.

## Widgets com exibição de iframe em webviews do iOS

O aplicativo do Fluig, em alguns casos, utiliza *webviews* para visualização de páginas. Os *webviews* utilizam como base o navegador padrão do dispositivo, como por exemplo, o Safari quando o dispositivo em questão utiliza o sistema iOS (iPads e iPhones). 

Quando o navegador Safari de um dispositivo com sistema iOS encontra um *iframe* dentro da página, ele ajusta a largura do iframe tomando como base a largura do conteúdo exibido dentro do *iframe*, e ignora qualquer parâmetro de largura definido pelo desenvolvedor. Esse comportamento só acontece no navegador Safari (e, portanto, em *webviews* que utilizam o Safari como base) de dispositivos com o sistema iOS.

Para contornar esse comportamento, é necessário desenvolver uma técnica de CSS que ajustará o *iframe* com largura de 100% e altura de 100%, sendo essa altura necessária para compensar a ausência de *scroll* no *iframe*, um parâmetro necessário para o funcionamento da técnica de CSS.

**CSS para iframes no Safari do iOS**

[?](#)

| `` |
| --- |


<!-- anchors: Desenvolvimentodewidgetsmobile-Índice, Desenvolvimentodewidgetsmobile-WidgetsMobile, Desenvolvimentodewidgetsmobile-Recomendaçõesparaodesenvolvimentodewidgets:, Desenvolvimentodewidgetsmobile-DesenvolvendowidgetscomsuporteaexibiçãonoFluigMobile, highlighter_973549, highlighter_601852, Desenvolvimentodewidgetsmobile-APIPública, Desenvolvimentodewidgetsmobile-WidgetscomexibiçãodeiframeemwebviewsdoiOS, highlighter_790756 -->
