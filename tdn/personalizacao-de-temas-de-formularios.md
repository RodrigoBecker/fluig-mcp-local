---
title: "Personalização de Temas de Formulários"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=146965249"
scraped_at: "2026-03-09T04:26:46.355Z"
depth: 3
anchors: 12
child_links: 43
---

# Personalização de Temas de Formulários

# Índice

# Personalização de Temas de Formulários

---

No editor de formulários, disponível no editor de processos, é possível selecionar um estilo personalizado para o formulário que está sendo criado.

Este estilo pode ser personalizado por qualquer usuário que possui permissão ao painel de controle.

![](/download/attachments/146965249/editor.JPG?version=1&modificationDate=1449832076000&api=v2)

Acompanhe, navegando nas abas a seguir, o passo a passo para a criação de um novo tema personalizado.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)

 -  Acessar o **Painel de Controle**pelo menu lateral.

![](/download/attachments/146965249/p1.PNG?version=1&modificationDate=1404223591000&api=v2)

 - Verifique no agrupador **Desenvolvimento** e após clique no item **Temas de Formulários**.

![](/download/attachments/146965249/item%20menu.JPG?version=1&modificationDate=1449832077000&api=v2)

 - Na tela é possível realizar o *download* de temas já cadastrados, definir se o tema está ou não está ativo (quando ativo, o tema é disponibilizado para seleção na edição de formulários) e tema padrão que é o tema pré selecionado ao criar um formulário. Para adicionar um tema novo, clique em **Adicionar**.

![](/download/attachments/146965249/formul%C3%A1rios%20padr%C3%A3o.JPG?version=1&modificationDate=1449832076000&api=v2)

 - Na tela para adicionar um estilo novo, é necessário preencher um código ao tema, a descrição do tema e selecionar o arquivo CSS para realizar o *upload*.

![](/download/attachments/146965249/p4.PNG?version=1&modificationDate=1404223946000&api=v2)

 - Clique em **Salvar**. Após isto o tema está cadastrado e já pode ser utilizado no editor de formulários.

### Recomendações 

Ao fazer o upload de temas é importante seguir as seguintes regras:

1. O tema deve possuir sempre uma regra por linha.
2. Todas as propriedades de cada classe tem que estar na mesma linha, não deve-se pular linha, para melhor interpretação do editor.
3. O arquivo *.css* deve possuir todas as linhas com seletores, não se deve possuir linhas em branco.
4. Todas as classes, elementos e identificadores podem ser modificados, desde que respeitando as regras acima.

É possível obter um exemplo de uma folha de estilos acessando a página de Temas, no Painel de Controle.

Abaixo estão cada uma das classes e estrutura de um formulário gerado a partir do editor.

| Classe | Descrição |
| --- | --- |
| Classe | Descrição |
| .title-form-application | Classe do título do formulário |
| .form-field | DIV que enquadra todo campo do formulário |
| .form-input | DIV do campo |
| .required | Classe do asterisco em campos obrigatórios. |
| .paragraph-is-required | Mensagem de obrigatório |

Em alguns casos é necessário utilizar "**!important**", pois são classes que já são utilizadas pela plataforma e podem ser sobrescritas.

### HTML

O HTML gerado automaticamente pelo editor de formulários com apenas um campo, fica com a seguinte estrutura:

**Formulário**

[?](#)

| 1234567891011121314 | `````Formulário````Todos os campos com * são de preenchimento obrigatório.``` ```````````````Label textbox````*``````````````````` |
| --- | --- |

### Exemplo

A seguir criaremos um tema com um estilo personalizado:

![](/download/attachments/146965249/vizualizar%20formulario%20-%202.JPG?version=1&modificationDate=1449832077000&api=v2)

- Para este resultado, o seguinte CSS deve ser criado e cadastrado nos temas:**exemplo.css**
[?](#)
| 12345678910 | `.t``3` `.title-form-application {``color``:``#fff` `!important``;``font-weight``:``bold` `!important``; }``.t``3` `{``height``:``auto` `!important``;``min-height``:``0` `!important``;``padding``:``0` `5px` `!important``;``background-color``:``#591202``; }``.t``3` `input {``margin-bottom``:``0` `!important``; }``.t``3` `.form-field {``margin-bottom``:``15px` `!important``;}``.t``3` `label {``font-weight``:``normal``;``color``:``#f2a547``; }``.t``3` `.title-form-application {``margin``:``5px` `5px` `20px``;``padding``:``0` `0px` `10px``;``font-size``:``1.5em``;``font-weight``:``normal``;``color``:``#006699``;``border-bottom``:``1px` `dashed` `#ccc``;}``.t``3` `input, .coffeeTheme textarea, .coffeeTheme select {``background-color``:``#f6dec0` `!important``;``border``:``0px` `!important``;}``.t``3` `.required input, .required select, .required textarea {``border-color``:``#eeabad` `!important``; box-shadow:``0px` `0px` `5px` `rgba(``255``,``0``,``0``, .``3``)``!important``;``border``:``0px` `!important``;}``.t``3` `.is-required {``display``:``none``;``color``:``#c43b1d``;``font-size``:``1.2em``; }``.t``3` `.paragraph-is-required {``margin``:``0` `5px` `1em` `!important``; }` |
| --- | --- |
- Toda personalização deve iniciar com a classe t + id. Assim, evita-se que as personalizações interfiram no estilo de outras páginas da plataforma., nesse exemplo, a classe é t3 pois o id do tema é 3.


<!-- anchors: PersonalizaçãodeTemasdeFormulários-Índice, PersonalizaçãodeTemasdeFormulários-PersonalizaçãodeTemasdeFormulários, samples, samples-Passo1, samples-Passo2, samples-Passo3, samples-Passo4, PersonalizaçãodeTemasdeFormulários-Recomendações, PersonalizaçãodeTemasdeFormulários-HTML, highlighter_463142, PersonalizaçãodeTemasdeFormulários-Exemplo, highlighter_575976 -->
