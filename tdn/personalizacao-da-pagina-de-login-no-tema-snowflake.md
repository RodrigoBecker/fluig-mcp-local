---
title: "Personalização da página de login no tema Snowflake"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=427053004"
scraped_at: "2026-03-09T04:55:20.567Z"
depth: 3
anchors: 14
child_links: 40
---

# Personalização da página de login no tema Snowflake

Fique atento!

Esta página é válida para atualizações **1.6.5 (Liquid)** e **superiores** do TOTVS Fluig.

Plataforma em Cloud

Clientes cloud precisam entrar em contato com o time de Cloud com os arquivos já configurados para que seja incluído no diretório do servidor.

# Página de login personalizada

---

Todos os componentes da página de *login* podem ser personalizados, basta que sejam alterados os arquivos indicados nesta documentação. As personalizações exigem que o responsável tenha os conhecimentos básicos em HTML, JavaScript e CSS. 

Importante!

Essa página contém as principais instruções de como efetuar a personalização, servindo como ponto de partida para seu desenvolvimento. Lembrando que qualquer personalização realizada na plataforma é de responsabilidade do cliente e não possui suporte do time TOTVS Fluig.

## Criação da página de login personalizada

---

Para personalizar a página de *login* siga os passos a seguir:

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3 - Mobile](#)
- [Passo 4](#)

 - Acesse o diretório **[Instalação fluig]/repository/wcmdir/**. Dentro dele, crie uma nova pasta chamada **customlogin**.

Importante!

Caso as configurações do Fluig tenham sido alteradas manualmente (por exemplo, para ambientes com alta disponibilidade), abra em um editor de texto o arquivo:

   - **a partir da atualização 2.0:**[diretório_instalação]/appserver/standalone/configuration/**standalone.xml**;

   - **da atualização 1.6.5 até a 1.8.2**: [diretório_instalação]/appserver/domain/configuration/**domain.xml**.

No arquivo correspondente à atualização que você utiliza, localize a propriedade abaixo:

[?](#)

| `` |
| --- |

Neste parâmetro estará informado o caminho alternativo do diretório [diretório_instalação]/repository/wcmdir/.

 - Dentro dessa pasta recém criada, crie um arquivo chamado **loginsnowflake.html.** Nesse arquivo crie o fragmento de conteúdo HTML que será inserido na página de *login*. O conteúdo do arquivo **loginsnowflake****.html** será literalmente inserido dentro do HTML final da página de *login*, dentro de uma tag **<DIV>**. Portanto, não poderá conter as tags **<HTML>**, **<BODY>** ou **<HEAD>**.

 - Opcionalmente, crie na mesma pasta um arquivo chamado **loginhead.html**. Nesse arquivo crie o conteúdo HTML que importa os **CSS** que serão utilizados pela personalização. O conteúdo do arquivo **loginhead.html** será literalmente inserido dentro do HTML final da página de *login*, dentro da tag **<HEAD>**, portanto deverá conter apenas tags que importam recursos como **CSS**.

 - Opcionalmente, crie na mesma pasta um arquivo chamado **loginscript.html**. Nesse arquivo crie o conteúdo HTML que importa os **JS** que serão utilizados pela personalização. O conteúdo do arquivo **loginscript****.html** será literalmente inserido dentro do HTML final da página de *login*, ao final da tag **<BODY>**, portanto deverá conter apenas tags que importam recursos como **JS**.

Importante!

A configuração com o arquivo **loginscript.html** foi adicionada na atualização** Update 1.7.0-210504**. Caso esteja uma atualização anterior, como paliativo o JS pode ser importado no arquivo **loginhead.html**, no entanto podem ocorrer inconsistências no *login* via mobile (aplicativo My Fluig).

 - Caso utilize recursos estáticos, copie-os dentro desta mesma pasta, como arquivos JS, CSS e imagens. Esses recursos estáticos estarão acessíveis abaixo da URL **/portal/resources/customlogin/**.

 - Caso utilize o aplicativo Mobile, a personalização do *login* via Mobile pode ser feita da mesma forma. Basta criar os arquivos mlogin.html**, mloginscript.html** e**mloginhead.html**.

 - Reinicie os serviços do fluig.

Dica!

Sempre que houver o *login* personalizado na empresa, ao acessar a plataforma pelo navegador do dispositivo mobile, esta página de *login* será respeitada e será apresentada no momento de realizar a autenticação.

## Exemplo de personalização

---

Primeiramente foram criados os arquivos descritos acima em "[diretório_instalação]/repository/wcmdir/customlogin/". Em seguida foram executados os seguintes procedimentos:

**01.**Importe o arquivo JavaScript customizado **loginsnowflake.js**e o arquivo de estilo **loginsnowflake.css**.

**loginhead.html**

[?](#)

| 1 | `` |
| --- | --- |

**loginscript.html**

[?](#)

| 1 | `` |
| --- | --- |

**02.** Insira aqui o código HTML de customização da sua página.

**loginsnowflake.html**

[?](#)

| 1 | `` |
| --- | --- |

Importante!

Todo conteúdo HTML deve seguir as normas do Style Guide (definidas aqui: [https://style.fluig.com/](https://style.fluig.com/)).

**03.** O arquivo js, ao terminar de carregar a página, insere a data atual no elemento "login_datetime" 

**loginsnowflake.js**

[?](#)

| 1234567891011121314 | `$(document).ready(``function``(){````var` `today =``new` `Date();````var` `dd = today.getDate();````var` `mm = today.getMonth()+1;````var` `yyyy = today.getFullYear();````if``(dd```dd=``'0'``+dd````}````if``(mm```mm=``'0'``+mm````}````today = dd +``'/'` `+ mm +``'/'` `+ yyyy;````$(``"#login_datetime"``).html(``"Data: "` `+ today);``})` |
| --- | --- |

**04.** O arquivo css deve conter as classes de personalização do seu HTML.

**loginsnowflake.css**

[?](#)

| `#login_datetime {````position``:``absolute``;````text-align``:``center``;````width``:``100%``;````left``:``0px``;````bottom``:``10%``;``}` |
| --- |

**Resultado:**

---

Exibição de data na parte inferior da tela.

![](/download/attachments/427053004/P%C3%A1gina%20login%20personalizada%20165.png?version=2&modificationDate=1656530672113&api=v2)

Importante!

- Todos os arquivos utilizados no exemplo também estão disponíveis abaixo:[loginsnowflake.js](/download/attachments/427053004/loginsnowflake.js?version=1&modificationDate=1540816727720&api=v2)
- [loginsnowflake.html](/download/attachments/427053004/loginsnowflake.html?version=1&modificationDate=1540816727850&api=v2)
- [loginsnowflake.css](/download/attachments/427053004/loginsnowflake.css?version=1&modificationDate=1540816727977&api=v2)

A personalização da página de *login* com o tema Snowflake pode ser feita apenas a partir da **atualização 1.6.5 - Liquid**.


<!-- anchors: PersonalizaçãodapáginadeloginnotemaSnowflake-Páginadeloginpersonalizada, PersonalizaçãodapáginadeloginnotemaSnowflake-Criaçãodapáginadeloginpersonalizada, PersonalizacaoLogin, PersonalizacaoLogin-1, highlighter_343077, PersonalizacaoLogin-2, PersonalizacaoLogin-3, PersonalizacaoLogin-4, PersonalizaçãodapáginadeloginnotemaSnowflake-Exemplodepersonalização, highlighter_359391, highlighter_981046, highlighter_479496, highlighter_688138, highlighter_972949 -->
