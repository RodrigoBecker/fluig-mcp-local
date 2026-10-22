---
title: "Personalização de todas as páginas da plataforma"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=232816834"
scraped_at: "2026-03-09T03:46:33.585Z"
depth: 2
anchors: 9
child_links: 40
---

# Personalização de todas as páginas da plataforma

![](https://tdn.totvs.com/download/thumbnails/286221066/pratica.png)

**COLOQUE EM PRÁTICA!**
Essa página contém as instruções principais e exemplos de implementação, servindo como ponto de partida para seu desenvolvimento. Os exemplos devem ser analisados e adaptados para cada cenário e necessidade específica, lembrando que as implementações realizadas são de responsabilidade do cliente e não possuem suporte do time TOTVS Fluig.

Plataforma em Cloud

Clientes cloud precisam entrar em contato com o time de Cloud com os arquivos já configurados para que seja incluído no diretório do servidor.

# Objetivo

---

Este guia tem por objetivo indicar como é feita a personalização de páginas do TOTVS Fluig Plataforma.

# Personalização de todas as páginas

---

Para personalizar todas as páginas da plataforma siga os passos a seguir:

- [Passo 1](#)
- [Passo 2](#)

 - Procure pela pasta **[diretório_instalação]/repository/wcmdir.**Dentro dela, crie uma nova pasta chamada **custompage**.

Atenção

Caso as configurações da plataforma tenham sido alteradas manualmente (por exemplo, para ambientes com alta disponibilidade), abra em um editor de texto o arquivo **[diretório_instalação]/appserver/domain/configuration/standalone.xml** e procure nele pela propriedade **<simple name="java:global/wcm/globalDataDir"**, neste parâmetro estará indicado o caminho alternativo ao caminho **[diretório_instalação]/repository/wcmdir/.**

 - Os arquivos criados devem utilizar a codificação (*charset*) UTF-8.

 - Dentro da pasta **custompage**, crie um arquivo chamado **custompagehead.ftl.** Nesse arquivo crie o fragmento de conteúdo HTML que será inserido nas páginas.

   Atenção 

    O conteúdo do arquivo **custompagehead.ftl** será literalmente inserido imediatamente antes de fechar a tag </head>. O mesmo se aplica ao **custompagehead<codigo-do-tenante>.ftl**, porém nesse caso, o mesmo apenas será inserido para o tenant em questão

 - Opcionalmente, crie na mesma pasta um arquivo chamado **custompage.ftl**. Nesse arquivo crie o fragmento de conteúdo HTML que será inserido nas páginas.

   Atenção 

    O conteúdo do arquivo **custompage.ftl** será literalmente inserido imediatamente antes de fechar a tag **</body>**. O mesmo se aplica ao **custompage****<codigo-do-tenante>.ftl**, porém nesse caso, o mesmo apenas será inserido para o tenant em questão.

         **Ilustração:**

![](/download/attachments/232816834/local-do-arquivo-ilustra%C3%A7%C3%A3o.png?version=1&modificationDate=1656703476173&api=v2)

# Exemplo simples de personalização

---

**1.**Após a etapa de criação dos arquivos, importe o código abaixo para dentro do arquivo **custompagehead.ftl**:

**custompagehead.ftl**

[?](#)

| 12345 | `````.menu-item a, .wcm-menu-item a {````color: cyan !important;````}``` |
| --- | --- |

**Resultado:**

---

A cor dos itens no menu lateral irão mudar para ciano nos temas **R****esponsivo** e **S****nowflake**, já no tema **C****lássico** irá mudar apenas o label do item, conforme apresentado nas imagens abaixo:

![](/download/attachments/232816834/exemplo1-responsivetheme.png?version=2&modificationDate=1656701291443&api=v2)

![](/download/attachments/232816834/exemplo1-liquidtheme.png?version=1&modificationDate=1656701108857&api=v2)

![](/download/attachments/232816834/exemplo1-themedefault.png?version=1&modificationDate=1656701109877&api=v2)

# Exemplo avançado de personalização

---

**1.**Após a etapa de criação dos arquivos, importe o código abaixo para dentro do arquivo **custompage.ftl**:

**custompage.ftl**

[?](#)

| 12345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152535455565758 | `````````````` `````.alert-custom-example {````position: fixed;````top: 0;````left: 0;````width: 100vw;````z-index: 10000;````}` ```.alert-custom-example .alert {````margin: 0;````}` ```````div[appcode="liquid_header"] {````margin-top: 64px;````}` ```.liquid-menu-widget div.menu-main {````height: calc(100vh - 64px);````}````` ```````.wcm-header, .wcm-all-content {````top: 64px;````}` ```.wcm-navigation {````height: calc(100% - 124px);````top: 124px;````}````` ```````.responsive-header-widget, .wcm-all-content {````top: 64px;````}` ```.responsive-menu-widget div.menu-main {````top: 144px;````height: calc(100% - 144px);````}``````` `````````Atenção!````amanhã o Fluig estará fora do ar para atualização``````` |
| --- | --- |

**Resultado:**

---

Será apresentado um componente de alerta fixado acima do header principal em todas as páginas dos temas **Responsivo**, **Snowflake** e **Clássico**, conforme nas imagens abaixo:

![](/download/attachments/232816834/exemplo2-responsivetheme.png?version=1&modificationDate=1656702395227&api=v2)

![](/download/attachments/232816834/exemplo2-liquidtheme.png?version=1&modificationDate=1656702393860&api=v2)

![](/download/attachments/232816834/exemplo2-themedefault.png?version=1&modificationDate=1656702396387&api=v2)


<!-- anchors: Personalizaçãodetodasaspáginasdaplataforma-trueÍndicenoneObjetivo, Personalizaçãodetodasaspáginasdaplataforma-Personalizaçãodetodasaspáginas, PersonalizacaoLogin, PersonalizacaoLogin-1, PersonalizacaoLogin-2, Personalizaçãodetodasaspáginasdaplataforma-Exemplosimplesdepersonalização, highlighter_760840, Personalizaçãodetodasaspáginasdaplataforma-Exemploavançadodepersonalização, highlighter_666764 -->
