---
title: "Componente Seleção de usuários"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=185739389"
scraped_at: "2026-03-09T04:21:05.618Z"
depth: 3
anchors: 7
child_links: 63
---

# Componente Seleção de usuários

# Índice

# Objetivo

---

Este guia é destinado aos desenvolvedores internos e externos do TOTVS Fluig Plataforma que desejam utilizar o componente **Seleção de usuários**. O objetivo é apresentar o seu funcionamento e o detalhamento de todos os parâmetros de configuração.

# Pré-requisitos

---

Conhecer os conceitos dos componentes de negócio da plataforma TOTVS Fluig, disponíveis na página [Componentes de Negócio](https://tdn.totvs.com/pages/viewpage.action?pageId=160104507).

# Seleção de usuários

---

O componente **Seleção de usuários** oferece a possibilidade do usuário selecionar um ou mais usuários para alguma necessidade dentro de seu componente ou *widget*.

## Utilização básica

---

Para habilitar o componente de seleção de usuário no seu *widget*, adicione a seguinte propriedade no [application.info](/display/fluig/Arquivo+application.info) do *widget*:

[?](#)

| `application.resource.component.1=wcm/selectuser` |
| --- |

O componente possui as opções:

- **multiselect**: ***true** *para que seja possível selecionar mais de um registro; ***false** *para que seja possível selecionar apenas um registro;

- **required**: ***true** *para que seja possível avançar apenas se algum registro estiver selecionado; ***false ***para obrigar a selecionar algum usuário.

- **onlyActiveUsers**: **true** para que apenas usuários ativos sejam apresentados; **false** para que todos os usuários cadastrados sejam apresentados. O padrão é *false*, portanto se este parâmetro não for informado, todos os usuários serão listados.

A utilização deste componente pode ser feita da seguinte maneira:

[?](#)

| `WCMBC.selectUser(````{````multiselect:``true``/``false``,````required:``true``/``false````onlyActiveUsers:``true``/``false````},````functionfuncaoCallbackSucesso,````funcaoCallbackCancelar``);```  `Exemplo:``` `var` `MyWidget = SuperWidget.extend({````init:``function``() {},``` ```selectUsers:``function``(htmlElement, event) {````var` `options = {multiselect:``true``, required:``true``, onlyActiveUsers:``true``};````WCMBC.selectUser(options,``function``(data){````FLUIGC.toast({````title:``'Usuários selecionados: '` `+ data.length,````message: data[0].login,````type:``'success'````});````console.log(data);````},``function``() {````FLUIGC.toast({````title:``'Cancelar'``,````message:``'Usuário cancelou a seleção'``,````type:``'success'````});````});````}``});` |
| --- |

**Tela exibida ao executar o componente**

![](/download/attachments/185739389/zoom-usuario.png?version=1&modificationDate=1431954352000&api=v2)


<!-- anchors: ComponenteSeleçãodeusuários-Índice, ComponenteSeleçãodeusuários-Objetivo, ComponenteSeleçãodeusuários-Pré-requisitos, ComponenteSeleçãodeusuários-Seleçãodeusuários, ComponenteSeleçãodeusuários-Utilizaçãobásica, highlighter_703276, highlighter_354851 -->
