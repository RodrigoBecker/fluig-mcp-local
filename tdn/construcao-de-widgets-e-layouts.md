---
title: "Construção de Widgets e Layouts"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=113803693"
scraped_at: "2026-03-09T03:47:44.701Z"
depth: 2
anchors: 39
child_links: 63
---

# Construção de Widgets e Layouts

# Índice

# Objetivo

O objetivo deste guia é possibilitar ao desenvolvedor criar componentes WCM via Eclipse ou Fluig Studio.

# Vídeos How To

Assista!

Confira os vídeos How To sobre [Criação de páginas com layouts e widgets](/pages/viewpage.action?pageId=270925442).

Compatibilidade no modo escuro

Este recurso ainda não é compatível com o modo escuro lançado na atualização [Voyager 2.0](https://tdn.totvs.com/x/6HxjN). Para mais detalhes, consulte a documentação em: add link

# Construção de componentes WCM no Eclipse

Para iniciar o desenvolvimento de um componente WCM no Eclipse ou [Fluig Studio](/pages/viewpage.action?pageId=73078179), é necessário acessar a perspectiva Fluig e criar um novo projeto.

- [Abrir perspectiva](#)
- [Criar projeto](#)

 - Acionar o menu ***Window*** na barra de menu.

 - Selecionar ***Perspective*** → ***Open Perspective*** → **Other...**.

 - Selecionar **Fluig** e acionar **OK**.

![](/download/attachments/113803693/open_fluig_perspective.gif?version=1&modificationDate=1499092634000&api=v2)

**Perspectiva Fluig no Eclipse**

 - Clicar com o botão direito do *mouse* no espaço *Package Explorer*.

 - Selecionar **New** → **Projeto Fluig**.

 - Informar o nome do projeto no campo *Project name*.

 - Acionar **Finish**.

![](/download/attachments/113803693/create_new_project.gif?version=1&modificationDate=1499096266000&api=v2)

**Criação de um novo projeto Fluig**

### Criação do Widget

Com o ambiente de desenvolvimento preparado, pode ser iniciada a criação do *widget* no projeto conforme os passos a seguir.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)

 - Clicar com o botão direito do *mouse* sobre o projeto Fluig criado.

 - Selecionar ***New*** → ***Widget***.

![](/download/attachments/113803693/new_widget_1.png?version=1&modificationDate=1499101395000&api=v2)

 - Informar o código do *widget* no campo **Código**. Este campo é uma **chave única** e obrigatório.

O campo Código aceita apenas letras, números e sublinhado.

 - Informar o nome do *widget* no campo **Nome**.

 - Informar uma breve descrição do *widget* no campo **Descrição**.

 - Escolher um dos *templates* disponíveis para o desenvolvimento do *widget* no campo **Template** ou manter o padrão "Nenhum" para não utilizar um modelo de desenvolvimento.

 - Acionar ***Next*** para avançar.

![](/download/attachments/113803693/new_widget_2.png?version=1&modificationDate=1499101476000&api=v2)

 - Informar o código, nome e URL para identificação do desenvolvedor do componente (Opcional).

 - Informar a categoria do *widget* (Opcional).

As categorias funcionam como filtros para localizar *widgets* mais rapidamente e são listadas no painel esquerdo da janela de seleção de *widgets* exibido ao incluir novos *widgets* em um *slot*.

 - Apenas um renderizador é disponibilizado atualmente (FreeMarker).

 - Acionar ***Finish***para concluir a criação do *widget*.

![](/download/attachments/113803693/new_widget_3.png?version=1&modificationDate=1499102229000&api=v2)

 - Concluída a etapa de criação do *widget*, uma estrutura de diretórios será gerada abaixo da pasta "wcm/widget" do projeto.

A descrição dos arquivos gerados está disponível no item [Estrutura dos diretórios de *widgets*](#ConstruçãodeWidgetseLayouts-tabelaestruturawidget).

![](/download/attachments/113803693/new_widget_4.png?version=1&modificationDate=1499102387000&api=v2)

### Estrutura dos diretórios de widgets

| Arquivo/Pasta | Descrição |
| --- | --- |
| Arquivo/Pasta | Descrição |
| [código_do_widget] | Nome/Identificador do widget. |
| src/main/java | Localização das classes Java, caso exista alguma regra de negócio específica do widget. |
| src/main/resources/application.info | Arquivo de configuração do widget onde são gravados o código, título e desenvolvedor do widget, entre outros dados.Este arquivo será detalhado nas próximas páginas deste documento. |
| src/main/resources/view.ftl | Arquivo de template do FreeMarker que será interpretado durante a renderização do widget. |
| src/main/resources/edit.ftl | Arquivo que será interpretado durante a renderização do widget em modo de edição. Usado para configurar opções específicas para renderização do widget, como por exemplo, filtros de data, cotação do dólar, etc.Este arquivo é opcional. Caso não exista, será considerado que o widget não possui modo de edição, somente visualização. |
| src/main/resources/[código_do_widget].properties | Arquivo de strings traduzíveis utilizadas pelo widget. Deve possuir derivações de acordo com o idioma suportado pelo widget.O padrão será sempre o código do widget seguido do sufixo referente à sua linguagem. Por exemplo: um arquivo de tradução para o idioma inglês ficaria “código-do-widget_EN_US.properties”. |
| src/main/webapp/icon.png | Ícone utilizado para representar o widget no menu lateral da aplicação, ou em qualquer tela que necessite de uma representação visual do componente. Deve possuir a dimensão 55 x 30 pixels. |
| src/main/webapp/WEB-INF/web.xml | Descritor padrão de uma aplicação Java para web. |
| src/main/webapp/WEB-INF/jboss-web.xml | Descritor específico para o servidor de aplicação. Deve conter obrigatoriamente a propriedade “context-root”. O context-root representa o contexto web do widget e o recomendado é que o valor seja o próprio código do widget. |
| src/main/webapp/resources/css/[código_do_widget].css | Folha de estilo do widget. |
| src/main/webapp/resources/js/[código_do_widget].js | Arquivo JavaScript do widget (caso seja necessário). |
| src/main/webapp/resources/images | Pasta específica de imagens do widget, caso necessário. |
| src/test/java | Pasta específica para a construção de testes unitários. |

Atenção!

**01.** Não devem ser criadas novas pastas no diretório *"*src/main/resources*"*. O recomendado é que sejam utilizadas as pastas já existentes no projeto.

**02.** Ao criar um *widget*, os itens abaixo devem possuir o mesmo nome. Este nome deve ser **único**, ou seja, não pode ser utilizado em nenhum outro *widget*, pois a duplicidade pode causar problemas durante o *deploy* dos componentes:

- Nome do *widget*.
- Propriedade "context-root" do arquivo jboss-web.xml.
- Propriedade "application.code" do arquivo application.info.

### Exemplo de código JavaScript

[?](#)

| `var` `HelloWorld = SuperWidget.extend({````message:``null``,````init:``function` `() {````//code````},````bindings: {````local: {````'show-message'``: [``'click_showMessage'``]````}````},````showMessage:``function` `() {````$div = $(``'#helloMessage_'` `+``this``.instanceId);````$message = $(``''``).addClass(``'message'``).append(``this``.message);````$div.append($message);````}``});```  |
| --- |

### Exemplo de código HTML com FreeMarker (view.ftl)

[?](#)

| ````data-params``=``"HelloWorld.instance({message: 'Hello world'})"``>`````   ```${i18n.getTranslation('hello.example.hello')}````````${i18n.getTranslation('hello.button.showMessage')}``````````````` `` |
| --- |

### Criação de Layout

Com o ambiente de desenvolvimento preparado, pode ser iniciada a criação do *layout* no projeto conforme os passos a seguir.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)

 - Clicar com o botão direito do *mouse* sobre o projeto Fluig criado.

 - Selecionar ***New*** → **Layout**.

![](/download/attachments/113803693/new_layout_1.png?version=2&modificationDate=1499106350000&api=v2)

 - Informar o código do *layout* no campo **Código**. Este campo é uma chave única e obrigatório.

O campo Código aceita apenas letras, números e sublinhado.

 - Informar o nome do *layout* no campo **Nome**.

 - Informar uma breve descrição do *layout* no campo **Descrição**.

 - Escolher um dos *templates* disponíveis para o desenvolvimento do *layout* no campo **Template** ou manter o padrão "Nenhum" para não utilizar um modelo de desenvolvimento.

 - Acionar ***Next*** para avançar.

![](/download/attachments/113803693/new_layout_2.png?version=1&modificationDate=1499106211000&api=v2)

 - Informar o código, nome e URL para identificação do desenvolvedor do componente (Opcional).

 - Informar a categoria do *layout* (Opcional).

 - Apenas um renderizador é disponibilizado atualmente (FreeMarker).

 - Acionar ***Finish***para concluir a criação do *layout*.

![](/download/attachments/113803693/new_layout_3.png?version=1&modificationDate=1499106229000&api=v2)

 - Concluída a etapa de criação do *layout*, uma estrutura de diretórios será gerada abaixo da pasta "wcm/layout" do projeto.

Observação

A estrutura de pastas e arquivos de um componente *Layout* é praticamente a mesma de um componente *Widget*. A principal diferença encontra-se no caminho src/main/resources/ onde os arquivos view.ftl e edit.ftl são substituídos pelo arquivo layout.ftl.

![](/download/attachments/113803693/new_layout_4.png?version=1&modificationDate=1499106249000&api=v2)

### Exemplo de código FreeMarker (layout.ftl)

[?](#)

| `````````````````````````````````````````````````````````````````````${pageRender.renderInstanceNoDecorator(id)}````````````````````````````````````````````${pageRender.renderInstanceNoDecorator(id)}````````````````````````````````````````````````````````````````````````````````${i18n.getTranslation('wcm.layoutdefault.title')}````${pageTitle}````````````````````````${pageRender.renderInstanceNoDecorator(id)}````````````````````````````````${pageRender.renderInstanceNoDecorator(id)}````````````````````````````````````${pageRender.renderInstance(id)}````````````````````````````````````````` |
| --- |

Dica

Para compreender melhor os elementos de um código de layout, leia a [sessão de layouts](https://tdn.totvs.com/display/fluig/Layouts).

### Exemplo de código JavaScript

[?](#)

| `var` `HelloWorld = SuperWidget.extend({````message:``null``,````init:``function` `() {````//code````},````bindings: {````local: {````'show-message'``: [``'click_showMessage'``]````}````},````showMessage:``function` `() {````$div = $(``'#helloMessage_'` `+``this``.instanceId);````$message = $(``''``).addClass(``'message'``).append(``this``.message);````$div.append($message);````}``});` |
| --- |

### Exemplo de códigos para inclusão de componentes nos layouts (view.ftl)

Os *layouts* customizados do Fluig Plataforma permitem que o desenvolvedor reutilize alguns componentes padrão da plataforma, como o cabeçalho contendo as informações do usuário, campo de busca e notificações globais, rodapé, menu e outros componentes.

Quando o desenvolvedor inicia a criação de um *layout* pelo Eclipse ou Fluig Studio, é possível utilizar alguns exemplos de *layouts* existentes. Em alguns destes *layouts* pré definidos é necessário verificar quais componentes estão presentes e quais foram inseridos, pois algumas vezes é necessário configurar o *slots* no arquivo "src/main/resources/application.info".

Abaixo estão disponíveis alguns exemplos de trechos de código para montagem de componentes no *layout*. Cada um destes códigos possui particularidades e não podem apenas ser incluídos no arquivo view.ftl, pois precisam estar dentro de tags <div> para funcionar de forma correta.

**Inclusão do componente de busca**

- O trecho abaixo deve ser inserido dentro da *tag* <div class="header-grouper-right">, que por sua vez deverá estar dentro da *tag* <div id="wcm_header" class="wcm-header-background wcm-header">.

- No arquivo src/main/resources/application.info o desenvolvedor deverá incluir: slot.SlotInstantSearch=suggestsearch.

**Componente de Busca**

[?](#)

| `````````${pageRender.renderInstanceNoDecorator(id)}``````` |
| --- |

****

**Inclusão do componente de notificação/alerta global**

- O trecho abaixo deve ser inserido dentro da *tag* <div class="header-grouper-right">, que por sua vez deverá estar dentro da *tag* <div id="wcm_header" class="wcm-header-background wcm-header">.

- No arquivo src/main/resources/application.info o desenvolvedor deverá incluir: slot.SlotGlobalAlert=alertpopover.

**Componente de Notificação**

[?](#)

| `````````${pageRender.renderInstanceNoDecorator(id)}``````` |
| --- |

# Snippets

A opção Snippets fornece ao desenvolvedor um pequeno trecho de código-exemplo relacionado a um determinado recurso. O objetivo é fornecer um modo rápido e simples para que o desenvolvedor visualize um exemplo de código e dê início à construção do componente.

- Acionar o menu ***Window*** na barra de menu.

- Selecionar **Show View** → **Other...**

- Expandir a pasta ***General***, selecionar ***Snippets***e acionar **OK**.

![](/download/attachments/113803693/show_view_snippets.gif?version=1&modificationDate=1499111578000&api=v2)

A visão Snippets apresentará as opções para Componentes WCM conforme o tipo de arquivo em foco (JavaScript ou FTL):

- [JavaScript](#)
- [FTL](#)

![](/download/attachments/113803693/snippets_javascript.png?version=1&modificationDate=1499111967000&api=v2)

![](/download/attachments/113803693/snippets_ftl.png?version=1&modificationDate=1499111975000&api=v2)

# Autocompletar para FreeMarker e JavaScript

Os arquivos Freemarker (extensão ".ftl"), quando abertos com o editor Freemarker do Fluig Plataforma, dispõe do recurso autocompletar para as diretivas básicas do FTL (iniciadas em "<#") e para as variáveis de contexto nas interpolações do Freemarker ("${}"). Os nomes contextuais disponíveis para o autocompletar são widgetRender e pageRender.

Os arquivos JavaScript (extensão ".js"), quando abertos em um Projeto Fluig, também dispõe do recurso autocompletar para as APIs nativas do JavaScript e do Fluig Plataforma.

Utilize o atalho do teclado CTRL + Barra de espaço para forçar a exibição do autocompletar no Eclipse ou Fluig Studio.

- [JavaScript](#)
- [FTL](#)

![](/download/attachments/113803693/autocomplete_javscript.png?version=1&modificationDate=1499113568000&api=v2)

![](/download/attachments/113803693/autocomplete_ftl.gif?version=1&modificationDate=1499113509000&api=v2)

****

# Exportar componente para o servidor Fluig

A partir deste momento é possível gerar o pacote e instalar o componente no servidor, ou seja, fazer o *deploy*.

- Selecionar a pasta do *widget* ou *layout* que será exportado e clicar sobre ela com o botão direito do *mouse*.

- Acionar **Export...**

- Selecionar a opção **Exportar para servidor Fluig** e acionar ***Next**.*****

- Selecionar o servidor desejado dentre os servidores cadastrados no Eclipse ou Fluig Studio.

- Acionar ***Finish***.

Após a exportação, o componente estará disponível para utilização na [criação](https://tdn.totvs.com/pages/viewpage.action?pageId=234455933) e [edição](https://tdn.totvs.com/pages/viewpage.action?pageId=234455936) de páginas do Fluig Plataforma.

![](/download/attachments/113803693/deploy_widget.gif?version=1&modificationDate=1499170394000&api=v2)

 Third Party Trademarks

*JavaScript is a trademark of Oracle Corporation.*

*Firefox and Mozilla are registered trademarks of the Mozilla Foundation.*

*Google, Android and Google Chrome are trademarks of the Google Inc.*

*Oracle, Java and OpenOffice.org are registered trademarks of Oracle and/or its affiliates. Other names may be trademarks of their respective owners.*

*Red Hat and JBoss are registered trademarks of Red Hat, Inc. in the United States and other countries.*

*Any other third party trademarks are the property of their respective owners.*


<!-- anchors: ConstruçãodeWidgetseLayouts-Índice, ConstruçãodeWidgetseLayouts-Objetivo, ConstruçãodeWidgetseLayouts-VídeosHowTo, ConstruçãodeWidgetseLayouts-ConstruçãodecomponentesWCMnoEclipse, iniciar_dev, iniciar_dev--1248322478, iniciar_dev-1798757742, ConstruçãodeWidgetseLayouts-CriaçãodoWidget, criacao_widget, criacao_widget-872616687, criacao_widget-872616688, criacao_widget-872616689, criacao_widget-872616690, ConstruçãodeWidgetseLayouts-Estruturadosdiretóriosdewidgetstabelaestruturawidget, ConstruçãodeWidgetseLayouts-ExemplodecódigoJavaScript, highlighter_810614, ConstruçãodeWidgetseLayouts-ExemplodecódigoHTMLcomFreeMarker(view.ftl), highlighter_82948, ConstruçãodeWidgetseLayouts-CriaçãodeLayout, create_layout, create_layout-872616687, create_layout-872616688, create_layout-872616689, create_layout-872616690, ConstruçãodeWidgetseLayouts-ExemplodecódigoFreeMarker(layout.ftl), highlighter_436068, ConstruçãodeWidgetseLayouts-ExemplodecódigoJavaScript.1, highlighter_665900, ConstruçãodeWidgetseLayouts-Exemplodecódigosparainclusãodecomponentesnoslayouts(view.ftl), highlighter_744261, highlighter_498466, ConstruçãodeWidgetseLayouts-Snippets, snippets, ConstruçãodeWidgetseLayouts-AutocompletarparaFreeMarkereJavaScript, autocomplete, ConstruçãodeWidgetseLayouts-ExportarcomponenteparaoservidorFluig, expander-1807874518, expander-control-1807874518, expander-content-1807874518 -->
