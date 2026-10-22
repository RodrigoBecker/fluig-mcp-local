---
title: "Utilizando o Guia de Estilos"
url: "https://tdn.totvs.com/display/public/fluig/Utilizando+o+Guia+de+Estilos"
scraped_at: "2026-03-09T03:05:48.062Z"
depth: 1
anchors: 23
child_links: 49
---

# Utilizando o Guia de Estilos

# Sobre

---

Com o **fluig 1.4** lançamos o **fluig Style Guide**, o guia de estilos que ajuda que desenvolvimentos sobre a plataforma sejam mais ágeis e que gerem um visual padrão do fluig mesmo no caso de personalizações.

Este guia é destinado a desenvolvedores que desejam construir páginas, *widgets* e formulários com as folhas de estilos (CSS) do guia de estilos do fluig.

## O Guia

---

Temos um guia para o acesso completo a todos os componentes do guia de estilo, antes de desenvolver observe a documentação e exemplos de uso.

Documentação Online

Acesse [style.fluig.com](https://style.fluig.com/) e confira todos os componentes disponíveis

Documentação no seu fluig

A sua instalação do fluig também possui o style Guide para consult e terá exatamente o que sua atualização permite utilizar, visto que regularmente trazemos novos componentes para o Style Guide.

Acesse **<seu endereço do fluig>/style-guide** para consultar seu Style Guide disponível.

Exemplo de URL: [https://suaempresa.fluig.com/style-guide](https://suaempresa.fluig.com/style-guide)

## Passos para Utilização

---

Os seguintes passos devem ser observados para a utilização do fluig Style Guide:

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)

 - Importe os artefatos necessários no seu desenvolvimento.

  **Artefatos**

[?](#)

| 1234567891011 | `````@font-face {````font-family: 'Fluig Icons';````src: url('../fonts/fluigicons.eot');````src: url('../fonts/fluigicons.eot?#iefix') format('embedded-opentype'), url('../fonts/fluigicons.woff') format('woff'), url('../fonts/fluigicons.ttf') format('truetype'), url('../fonts/fluigicons.svg#icomoon') format('svg');``}````````` |
| --- | --- |

Será necessário ter as fontes locais, pois alguns navegadores impedem carregamento de outros domínios, acrescente no seu ambiente as fontes e altere o CSS acima.

 - **Download das Fontes**

Atenção

Ao ser liberado o Fluig 1.4, todos os *layouts* de páginas do fluig receberão essas linhas por padrão, por isso não será necessário adicionar essas linhas manualmente.

 - Encapsule seu código sobre a classe **fluig-style-guide**. Assim você não afeta outros desenvolvimentos que ainda não usam fluig Style Guide.

  **Colocando seu código dentro da classe**

[?](#)

| 12345 | `` ```` `` |
| --- | --- |

Lembre-se que apesar de ter importado os recursos, caso seu código HTML não esteja dentro dessa classe, o estilo não será aplicado!

 - Utilizando o guia, busque os componentes desejados e monte sua tela.

![](/download/attachments/172295291/style.png?version=2&modificationDate=1413742818000&api=v2)

## Crie seu Design Responsivo

---

Uma das principais funções disponível no fluig Style Guide é a possibilidade de criar páginas responsivas, que se comportam de forma especial se estiverem em *smartphones*, *tablets* e computadores.

![](/download/attachments/172295291/responsive.png?version=1&modificationDate=1413739502000&api=v2)

Criar um design responsivo fará com que sua página, *widget* e formulário adaptem sua visualização dependendo do tamanho da tela que o usuário está utilizando. No exemplo acima quando a tela é maior o usuário vê duas colunas, mas quando o dispositivo tem uma tela pequena os campos ficam um embaixo do outro.

Documentação

Acesse [style.fluig.com/css.html#grid](https://style.fluig.com/css.html#grid) e saiba mais como criar seu design responsivo

## Exemplo de Utilização

---

- [Exemplo de Formulário](#)
- [Código do Exemplo](#)

 - Abaixo temos um exemplo de uma página html com a aplicação do guia de estilos do fluig.

### Exemplo Fluig Style Guide

 ×Close **Fluig Style guide** Acesse [aqui](https://style.fluig.com/javascript.html#alerts). 

 Email 

 Password 

   Remember me  

 Sign in 

 - Você deverá declarar em seu html a carga do arquivo css e js e declarar na sua div `class``=``"fluig-style-guide".`

  **suapagina.html**

[?](#)

| 12345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152535455 | `````````@font-face {````font-family: 'Fluig Icons';````src: url('../fonts/fluigicons.eot');````src: url('../fonts/fluigicons.eot?#iefix') format('embedded-opentype'), url('../fonts/fluigicons.woff') format('woff'), url('../fonts/fluigicons.ttf') format('truetype'), url('../fonts/fluigicons.svg#icomoon') format('svg');``}``````````````` ```````ExemploFluig Style Guide````````````×Close````Fluig Style guide Acesse aqui.````` `````````Email````````````````````````Password```````````````````````````````````` Remember me````````````````````````````Sign in````````````````` |
| --- | --- |

**Downloads:**

[fluig-glyphs.svg](/download/attachments/172295291/fluigicons.ttf?version=1&modificationDate=1414588754000&api=v2)

[fluigicons.ttf](/download/attachments/172295291/fluigicons.ttf?version=1&modificationDate=1414588754000&api=v2)

[fluigicons.woff](/download/attachments/172295291/fluigicons.woff?version=1&modificationDate=1414588751000&api=v2)

[fluigicons.svg](/download/attachments/172295291/fluigicons.svg?version=1&modificationDate=1414588746000&api=v2)

[fluigicons.eot](/download/attachments/172295291/fluigicons.eot?version=1&modificationDate=1414588741000&api=v2)

# Utilizando em Formulários no fluig 1.4

---

O fluig Style Guide estará disponível no Fluig 1.4. Para utilizar em formulários você deve seguir os passos abaixo.

Documentação Online

Acesse [git.fluig.com](https://git.fluig.com/projects/SAMPLES/repos/exercise-style-guide/browse) e confira projeto de exemplo com formulário e Widgets.

## Passos para Utilização

---

Os seguintes passos devem ser observados para a utilização do fluig Style Guide em formulários a partir da release 1.4.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)

 - Importe os artefatos necessários no seu formulário.

  **Artefatos**

[?](#)

| 1234 | ```````` |
| --- | --- |

 - Encapsule seu código sobre a classe **fluig-style-guide**. Assim você não afeta outros desenvolvimentos que ainda não usam fluig Style Guide.

  **Colocando seu código dentro da classe**

[?](#)

| 12345 | `` ```` `` |
| --- | --- |

Lembre-se de que, apesar de ter importado os recursos, se o seu código HTML não estiver dentro dessa classe, o estilo não será aplicado!

 - Utilizando o guia, busque os componentes desejados e monte sua tela.

![](/download/attachments/172295291/style.png?version=2&modificationDate=1413742818000&api=v2)


<!-- anchors: UtilizandooGuiadeEstilos-Sobre, UtilizandooGuiadeEstilos-OGuia, UtilizandooGuiadeEstilos-PassosparaUtilização, passos, passos-872616687, highlighter_597916, passos-872616688, highlighter_832747, passos-872616689, UtilizandooGuiadeEstilos-CrieseuDesignResponsivo, UtilizandooGuiadeEstilos-ExemplodeUtilização, exemplo, exemplo-exemplo1, exemplo-exemplo2, highlighter_95833, UtilizandooGuiadeEstilos-UtilizandoemFormuláriosnofluig1.4, UtilizandooGuiadeEstilos-PassosparaUtilização.1, passos, passos-872616687, highlighter_66320, passos-872616688, highlighter_697098, passos-872616689 -->
