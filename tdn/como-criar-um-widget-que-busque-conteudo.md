---
title: "Como criar um widget que busque conteúdo"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=185735401#ComocriarumWidgetquebusqueconte%C3%BAdo-Zoom/FilterdeDataset"
scraped_at: "2026-03-09T04:22:46.218Z"
depth: 3
anchors: 27
child_links: 78
---

# Como criar um widget que busque conteúdo

# Índice

# Objetivo

O objetivo deste guia é apresentar todo o processo de desenvolvimento de um *widget* integrado a vários possíveis tipos de fonte de dados. Cada sessão contém apenas o código necessário para o entendimento de cada assunto específico abordado. Para ver o resultado final do desenvolvimento, baixe os projetos abaixo:

**Projeto 01:** [*Widget* de Notícias](https://git.fluig.com/projects/SAMPLES/repos/kit-intranet/browse) (integra-se com [formulário](https://tdn.totvs.com/pages/viewpage.action?pageId=185735401#ComocriarumWidgetquebusqueconte%C3%BAdo-Interno%28formul%C3%A1rios%29)):

- [Imagem 1](#)
- [Imagem 2](#)

****

****

**Projeto 02:** [*Widget* de Aniversariantes](https://git.fluig.com/projects/SAMPLES/repos/kit-intranet/browse) (integra-se com [formulário](https://tdn.totvs.com/pages/viewpage.action?pageId=185735401#ComocriarumWidgetquebusqueconteúdo-Interno(formulários)) ou [serviço soap do RM](https://tdn.totvs.com/pages/viewpage.action?pageId=185735401#ComocriarumWidgetquebusqueconteúdo-ExternoutilizandoserviçosSOAP)):

- [Imagem 1](#)
- [Imagem 2](#)

![](/download/attachments/185735401/aniv1.png?version=1&modificationDate=1437144604000&api=v2)

![](/download/attachments/185735401/aniv2.png?version=1&modificationDate=1437144635000&api=v2)

Vamos desenvolver um *widget* que mostre notícias cadastradas no Fluig Plataforma. Não deixe de conferir o [projeto completo](https://git.fluig.com/projects/SAMPLES/repos/kit-intranet/browse).

# Criar projeto Fluig

Em primeiro lugar, devemos ter disponível um projeto Fluig onde desenvolveremos nosso *widget* utilizando o Fluig Studio. Para isso podemos seguir os [passos para criação de um projeto Fluig](https://tdn.totvs.com/pages/viewpage.action?pageId=185735250).

# Criar widget

Em seguida, criaremos um *widget*. Para isso podemos seguir os [passos para criação de um *widget*](https://tdn.totvs.com/pages/viewpage.action?pageId=113803693#ConstruçãodecomponentesWCMnoFluigStudio-CriaçãodeWidget).

Veja o exemplo em nosso repositório [aqui](https://git.fluig.com/projects/SAMPLES/repos/kit-intranet/browse).

# Desenvolvendo o widget

Agora que temos a estrutura básica, podemos começar a desenvolver o código personalizado e inserir as propriedades que desejamos para esse *widget*.

Para isso, podemos começar com o arquivo de configurações *application.info*. É nele que ficam registradas informações como título, descrição, arquivos de visualização, componentes a serem utilizados etc.

## Arquivo application.info

Abaixo o arquivo application.info detalhado:

**application.info**

[?](#)

| 12345678910111213141516 | `application.type=widget``application.code=news``application.title=Not\u00EDcias da Semana``application.description=Exibe uma lista com as \u00FAltimas not\u00EDcias da semana``application.category=KitIntranet``application.renderer=freemarker``application.icon=icon.png``developer.code=developer``developer.name=TOTVS S.A.``developer.url=http://www.fluig.com``view.file=view.ftl``edit.file=edit.ftl``application.uiwidget=true``application.resource.js.1=/resources/js/news.js``application.resource.css.2=/resources/css/news.css``simple.deploy=false` |
| --- | --- |

Nota

Para saber mais, acesse a documentação [Arquivo application.info](/display/fluig/Arquivo+application.info).

## Uso do conceito Super widget

Iremos utilizar o conceito de Super *widget* na construção de nosso *widget*. Para mais detalhes acesse o guia [Super *widget*](https://style.fluig.com/javascript.html#super-widget).

Precisamos adicionar a classe css *super widget* na *div* que instancia o *widget*, tanto no arquivo de edição (edit.ftl) como no arquivo de visualização (view.ftl).

[?](#)

| ````data-params``=``"KitIntranetNews.instance(${parameters})"``>```````código````-->``` |
| --- |

No arquivo *javascript* devemos construir o código fonte com a seguinte estrutura.

[?](#)

| `var` `KitIntranetNews = SuperWidget.extend({````// código``});` |
| --- |

Importante

Note que é essencial referenciar corretamente o nome da variável *javascript* no "data-params" do arquivo .ftl, ou seja:

Esse código:

[?](#)

| `KitIntranetNews.instance(${parameters})` |
| --- |

Faz referência a essa variável:

[?](#)

| `var` `KitIntranetNews` |
| --- |

Dica

Dispense alguns momentos para entender as diferenças entre o [modo de visualização e o modo de edição](https://tdn.totvs.com/pages/viewpage.action?pageId=185739196) dos *widgets*.

## Interface aplicada com Fluig Style Guide

Para construir a interface do *widget*, vamos utilizar o Fluig Style Guide, que facilita a construção dos componentes visuais. O guia pode ser acessado em [Fluig Style Guide](https://style.fluig.com/).

Para esse *widget* de notícias por exemplo, precisamos utilizar um *form* para cadastro de alguns dados. Para utilizar o padrão visual do Fluig Style Guide, basta adicionar a classe *.form-group. *Assim todos os elementos textuais como <*input*>, <*textarea*>, e <*select*> terão seus tamanhos ajustados para 100%.

[?](#)

| ```````````````` |
| --- |

Para criar um botão no padrão, basta adicionar as classes '*btn btn-default*'.

[?](#)

| ` Salvar ` |
| --- |

## Preferências do widget

A seguir é explicado como salvar as preferências do *widget* da forma como idealizada pela equipe do Fluig Plataforma. É a forma padrão e é desejável que todos os *widgets* utilizem apenas essa técnica quando for necessário guardar algum tipo de informação para [cada instância](https://tdn.totvs.com/pages/viewpage.action?pageId=185735923#Meucódigonãoestáfuncionando,eagora?-Minhaswidgetsestãotodascomasmesmaspreferências,comoresolvo?). Apesar de existirem outras formas de se guardar as preferências de um *widget*, recomendamos fortemente que utilize a forma disponibilizada pelo Fluig Plataforma pelos seguintes motivos:

- não existe preocupação de "quem é propriedade de quem", uma vez que o Fluig guarda de forma independente as preferências para cada instância de *widget*;
- cada página possui controle de versão e as instâncias dos *widgets* contidos nela não são diferentes. Utilizar as preferências padrão minimiza o risco de se perder alguma informação, já que tudo estará sob o controle de versão da plataforma Fluig;
- a busca das informações é feita automaticamente pelo renderizador de página, tornando a consulta dos dados das preferências ágil e simples.

Sobre tipos de dados

Na base da plataforma Fluig as preferências dos *widget* são salvas em uma tabela padrão da plataforma dentro de um campo do tipo texto. Apesar de ser usado um tipo de dado com grande capacidade de armazenamento, não se deve usá-lo para outra fim que não seja armazenar tipos de dados primitivos:

- *Character* / *String*;
- números de todos os tipos;
- datas;
- booleanos;

Sendo todos os dados salvos como *string*, caberá ao desenvolvedor fazer os tratamentos e conversões necessárias conforme a sua necessidade.

### Armazenamento

Para salvar as preferências do *widget*, utilizamos o método *WCMSpaceAPI.PageService.UPDATEPREFERENCES* passando um método para***callback*** (tratamento de retorno), o **id da instância**do *widget* e as **preferências** a serem salvas.

[?](#)

| `var` `preferences = {````newsSource:``"fonte"``,````url:``"/news/feed/url"``,````numberOfArticles: 10``};``` `WCMSpaceAPI.PageService.UPDATEPREFERENCES({````async:``true``,````success:``function` `(data) {````// código````},````fail:``function` `(xhr, message, errorData) {````// código````}``},``this``.instanceId, preferences``);` |
| --- |

### Utilização

No código abaixo podemos observar que o *widget* tem algumas variáveis chamadas *news*, *newsSource*, url e *numberOfArticles*.

[?](#)

| `var` `KitIntranetNews = SuperWidget.extend({````news:``null``,````newsSource:``null``,````url:``null``,````numberOfArticles:``null``,````DATASET:``"dataset"``,````FEED:``"rssfeed"``,````KIT_NEWS:``"kit_news"``,````// código``});` |
| --- |

As preferências do *widget* são recuperadas automaticamente. Basta salvar as preferências com os nomes das variáveis do *widget*, como no tópico [Como salvar as preferências do *widget*](https://tdn.totvs.com/pages/viewpage.action?pageId=185735401#Comocriarumwidgetquebusqueconte%C3%BAdo-Prefer%C3%AAnciasdowidget).

## Integrando o widget com dados

**Interno (formulários)**

Para aprender a integrar seu *widget* com formulários do Fluig Plataforma, acesse [este guia](/pages/viewpage.action?pageId=185739337).

**Externo utilizando serviços REST**

Para fazer a integração de seu *widget* com serviços REST, acesse [este guia](/pages/viewpage.action?pageId=185739330).

**Externo utilizando serviços JSON de terceiros (JSONP)**

Para fazer a integração de seu *widget* com serviços que retornam dados JSONP, acesse [este guia](/pages/viewpage.action?pageId=271180031).

**Externo utilizando serviços SOAP**

Para fazer a integração com serviços SOAP, acesse [este guia](/pages/viewpage.action?pageId=185738974).

## Exportar widget no servidor Fluig

Para exportar o *widget* para o servidor Fluig, basta seguir o guia [Realizando o *deploy* do componente](https://tdn.totvs.com/pages/viewpage.action?pageId=113803693#ConstruçãodecomponentesWCMnoFluigStudio-Realizandoodeploydocomponente).

## Evitar conflito de dependências com o Fluig

Para saber como evitar conflito de dependência entre *widgets* desenvolvidos sobre a plataforma e o Fluig, acesse [este guia](https://tdn.totvs.com/pages/viewpage.action?pageId=203762547).

# Zoom / Filter de Dataset

Para implementar o zoom de datasets em *seu widget*, pode-se usar como referência a forma indicada pelo Fluig [Style Guide para fazer o *filter*/zoom de um serviço externo](https://style.fluig.com/miscellaneous.html#filter). Porém, é necessário atentar-se para alguns detalhes específicos do desenvolvimento de datasets.

Vide abaixo um exemplo que utiliza o dataset *colleague* como base:

**Dataset Filter**

[?](#)

| `var` `settings = {````source: {````url:``'/api/public/ecm/dataset/search?datasetId=colleague&searchField=colleagueName&'``,````/* Também poderia ser informada a URL completa:````'http://{host}:{port}/api/public/ecm/dataset/search?datasetId=colleague&searchField=colleagueName&'````É importante manter o "&" no final da URL, pois os outros parâmetros são montados````sem levar em consideração que já possa haver algo parametrizado no próprio link */````contentType:``'application/json'``,````root:``'content'``,````pattern:``''``,````limit: 10,````offset: 0,````patternKey:``'searchValue'``,````/*Para que a consulta funcione, é importante que o valor do 'patternKey'````seja sempre 'searchValue' para o caso de zoom de dataset */````limitkey:``'limit'``,````offsetKey:``'offset'````},````displayKey:``'colleagueName'``,````/* Para o dataset de colleague optamos por mostrar o nome completo.````É aconselhável escolher o campo que, sozinho, represente melhor o registro*/````multiSelect:``true``,````style: {````autocompleteTagClass:``'tag-gray'``,````tableSelectedLineClass:``'info'````}````};` |
| --- |

Atenção

**Desde que obedecidos os demais itens do tutorial sobre filter do Fluig Style Guide**, basta copiar e colar o código acima diretamente em *seu widget* para observar o seu funcionamento.


<!-- anchors: Comocriarumwidgetquebusqueconteúdo-Índice, Comocriarumwidgetquebusqueconteúdo-Objetivo, noticias, aniversario, Comocriarumwidgetquebusqueconteúdo-CriarprojetoFluig, Comocriarumwidgetquebusqueconteúdo-Criarwidget, Comocriarumwidgetquebusqueconteúdo-Desenvolvendoowidget, Comocriarumwidgetquebusqueconteúdo-Arquivoapplication.info, highlighter_235376, Comocriarumwidgetquebusqueconteúdo-UsodoconceitoSuperwidget, highlighter_541171, highlighter_171237, highlighter_469842, highlighter_477796, Comocriarumwidgetquebusqueconteúdo-InterfaceaplicadacomFluigStyleGuide, highlighter_60596, highlighter_662809, Comocriarumwidgetquebusqueconteúdo-Preferênciasdowidget, Comocriarumwidgetquebusqueconteúdo-Armazenamento, highlighter_397447, Comocriarumwidgetquebusqueconteúdo-Utilização, highlighter_774682, Comocriarumwidgetquebusqueconteúdo-Integrandoowidgetcomdados, Comocriarumwidgetquebusqueconteúdo-ExportarwidgetnoservidorFluig, Comocriarumwidgetquebusqueconteúdo-EvitarconflitodedependênciascomoFluig, Comocriarumwidgetquebusqueconteúdo-Zoom/FilterdeDataset, highlighter_394672 -->
