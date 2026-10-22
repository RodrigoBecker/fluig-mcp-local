---
title: "Personalização da página de login no tema Clássico"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=258277647"
scraped_at: "2026-03-09T04:55:16.301Z"
depth: 3
anchors: 18
child_links: 40
---

# Personalização da página de login no tema Clássico

Atenção

Esta página é destinada para atualizações 1.6.0 até 1.6.4 do TOTVS Fluig Plataforma.

Plataforma em Cloud

Clientes cloud precisam entrar em contato com o time de Cloud com os arquivos já configurados para que seja incluído no diretório do servidor.

# Índice

# Página de login personalizada

---

Todos os componentes da página de login podem ser personalizados, basta que sejam alterados os arquivos indicados nesta documentação. As personalizações exigem que o responsável tenha os conhecimentos básicos em HTML, JavaScript e CSS. 

Atenção!

Essa página contém as principais instruções de como efetuar a personalização, servindo como ponto de partida para seu desenvolvimento. Lembrando que qualquer personalização realizada na plataforma é de responsabilidade do cliente e não possui suporte do time TOTVS Fluig.

## Passos para personalização

---

Para personalizar a página de login siga os passos abaixo:

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3 - Mobile](#)
- [Passo 4](#)

 - Acesse o diretório **[diretório_instalação]/repository/wcmdir/**. Dentro dele, crie uma nova pasta chamada **customlogin**.

Atenção

Caso as configurações da plataforma tenham sido alteradas manualmente (por exemplo, para ambientes com alta disponibilidade), abra em um editor de texto o arquivo**[diretório_instalação]/appserver/domain/configuration/domain.xml** e localize nele a propriedade abaixo:

[?](#)

| `` |
| --- |

Neste parâmetro estará informado o caminho alternativo do diretório [diretório_instalação]/repository/wcmdir/.

 - Dentro dessa pasta recém criada, crie um arquivo chamado **login.html.** Nesse arquivo crie o fragmento de conteúdo HTML que será inserido na página de login. O conteúdo do arquivo **login.html** será literalmente inserido dentro do HTML final da página de login, dentro de uma tag **<DIV>**, substituindo a logomarca. Portanto, não poderá conter as tags **<HTML>**, **<BODY>** ou **<HEAD>**.

 - Opcionalmente, crie na mesma pasta um arquivo chamado **loginhead.html**. Nesse arquivo crie o conteúdo HTML que importa os **CSS** que serão utilizados pela personalização. O conteúdo do arquivo **loginhead.html** será literalmente inserido dentro do HTML final da página de login, dentro da tag **<HEAD>**, portanto deverá conter apenas tags que importam recursos como **CSS**.

 - Opcionalmente, crie na mesma pasta um arquivo chamado **loginscript.html**. Nesse arquivo crie o conteúdo HTML que importa os **JS** que serão utilizados pela personalização. O conteúdo do arquivo **loginscript****.html** será literalmente inserido dentro do HTML final da página de login, ao final da tag **<BODY>**, portanto deverá conter apenas tags que importam recursos como **JS**.

A configuração com o arquivo **loginscript.html** foi adicionada na atualização**1.7.0-210504**. Caso esteja uma atualização anterior, como paliativo o JS pode ser importado no arquivo **loginhead.html**, no entanto podem ocorrer inconsistências no login via mobile (aplicativo My Fluig).

 - Caso utilize recursos estáticos, copie-os dentro desta mesma pasta, como arquivos JS, CSS e imagens. Esses recursos estáticos estarão acessíveis abaixo da URL **/portal/resources/customlogin/**.

 - Caso utilize o aplicativo Mobile, a personalização do login via Mobile pode ser feita da mesma forma. Basta criar os arquivos **mlogin.html, mloginscript.html** e**mloginhead.html**.

 - Reinicie os serviços do fluig.

Sempre que houver o login personalizado na empresa, ao acessar a plataforma pelo navegador do dispositivo mobile, esta página de login será respeitada e será apresentada no momento de realizar a autenticação.

## Exemplo de personalização

---

Primeiramente foram criados os arquivos descritos acima em "[diretório_instalação]/repository/wcmdir/customlogin/". Em seguida foram executados os seguintes procedimentos:

**1. **Importe o arquivo CSS customizado **login.css**.

**loginhead.html**

[?](#)

| 1 | `` |
| --- | --- |

**2.** Insira a imagem **Sua-Empresa-Horizontal.png**, juntamente com o texto "**logotxt**". Ex:  ![](/download/attachments/258277647/Sua-Empresa-Horizontal.png?version=1&modificationDate=1474483328000&api=v2)

**login.html**

[?](#)

| 12 | ```` |
| --- | --- |

**3**. Importe o arquivo JavaScript customizado **login.js**.

**loginscript.html**

[?](#)

| 1 | `` |
| --- | --- |

Fique atento

Todo conteúdo HTML deve seguir as normas do Style Guide (definidas aqui: [https://style.fluig.com/](https://style.fluig.com/)).

**4.** Ao terminar de carregar a página, substitua o texto "**logotxt**" pela data atual.

**login.js**

[?](#)

| 1234567891011121314 | `$(document).ready(``function``(){````var` `today =``new` `Date();````var` `dd = today.getDate();````var` `mm = today.getMonth()+1;````var` `yyyy = today.getFullYear();````if``(dd```dd=``'0'``+dd````}````if``(mm```mm=``'0'``+mm````}````today = dd +``'/'` `+ mm +``'/'` `+ yyyy;````$(``"#logotxt"``).html(``"Hoje é: "` `+ today);``})` |
| --- | --- |

**5. **Deixe o **"logotxt" **em negrito.

**login.css**

[?](#)

| 123 | `#logotxt {````font-weight``:``bold``;``}` |
| --- | --- |

**6.**Customização também para o mobile.

**mloginhead.html**

[?](#)

| 1 | `` |
| --- | --- |

**mlogin.html**

[?](#)

| 12 | ```` |
| --- | --- |

**mloginscript.html**

[?](#)

| 1 | `` |
| --- | --- |

**Resultado:**

---

Alteração de logomarca e exibição de data.

![](/download/attachments/258277647/Screen%20Shot%202015-12-11%20at%204.05.17%20PM.png?version=1&modificationDate=1474483328000&api=v2)

Importante

- Todos os arquivos utilizados no exemplo também estão disponíveis em [http://git.fluig.com/](https://git.fluig.com/projects/SAMPLES). Para ver o exemplo vejo o arquivo[**login-personalizado**](https://git.fluig.com/projects/SAMPLES/repos/componentes/browse/login-personalizado) do repositório [Componentes](https://git.fluig.com/projects/SAMPLES/repos/componentes/browse)
- A personalização da página de login pode ser feita apenas a partir da atualização 1.5.5


<!-- anchors: PersonalizaçãodapáginadeloginnotemaClássico-Índice, PersonalizaçãodapáginadeloginnotemaClássico-Páginadeloginpersonalizada, PersonalizaçãodapáginadeloginnotemaClássico-Passosparapersonalização, PersonalizacaoLogin, PersonalizacaoLogin-1, highlighter_547786, PersonalizacaoLogin-2, PersonalizacaoLogin-3, PersonalizacaoLogin-4, PersonalizaçãodapáginadeloginnotemaClássico-Exemplodepersonalização, highlighter_258531, highlighter_414253, highlighter_372462, highlighter_48008, highlighter_761934, highlighter_411000, highlighter_706997, highlighter_65926 -->
