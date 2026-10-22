---
title: "Desenvolvendo formulários compatíveis com modo escuro"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=963559484"
scraped_at: "2026-03-09T03:59:20.048Z"
depth: 2
anchors: 18
child_links: 60
---

# Desenvolvendo formulários compatíveis com modo escuro

# Visão geral

---

O Fluig agora oferece suporte nativo ao modo escuro, proporcionando uma experiência visual mais confortável em ambientes com pouca luz.

Essa funcionalidade já está disponível nos formulários da plataforma e é habilitada automaticamente de acordo com o tema escolhido pelo usuário no Fluig.

Importante:

Para que seu formulário fique compatível com o modo escuro, é fundamental seguir as orientações abaixo, principalmente se o formulário possui estilos customizados ou utiliza plugins de terceiros.

## Como o modo escuro funciona internamente

---

O modo escuro é ativado automaticamente pela plataforma quando o usuário escolhe esse tema. Internamente, isso é feito adicionando a classe `theme-dark` na tag `` do formulário.

Com essa classe presente, o navegador passa a utilizar as variáveis CSS definidas dentro do seletor `html.theme-dark { ... }`, substituindo as definidas em `:root`.

**Exemplo simplificado:**

[?](#)

| `/* Variáveis do modo claro */``:root {````--fs-color-neutral-light``-00:` `#ffffff``; // cor branca no modo claro````--fs-color-brand``-01``-base:``#0079b8``; // não tem diferença entre modo claro e escuro````--fs-color-brand``-01``-lightest:``#e3eefb``; // cor de brand tom mais claro``}` `/* Variáveis do modo escuro */``html.theme-dark {````--fs-color-neutral-light``-00:` `#1c1c1c``; // inverte para uma cor escura````--fs-color-brand``-01``-base:``#0079b8``; // não tem diferença entre modo claro e escuro````--fs-color-brand``-01``-lightest:``#051f31``; // inverte cor de bran tom mais escuro``}` |
| --- |

Quando o modo escuro está ativo, os componentes e estilos que utilizam variáveis CSS (como `var(--fs-color-neutral-light-00)`) automaticamente herdam os valores definidos dentro de `html.theme-dark`.

Informação:

Isso permite alternar entre temas sem precisar alterar nenhuma estrutura de código no formulário — basta usar as variáveis CSS corretamente.

## Boas práticas

---

✔ Priorize sempre o uso dos componentes e estilos do Style Guide Fluig.
✔ Evite o uso de cores fixas ou hardcoded no CSS.
✔ Teste o formulário tanto no tema claro quanto no modo escuro antes de publicar.
✔ Consulte periodicamente o Style Guide para novas variáveis e atualizações.

## O que já funciona automaticamente

---

- **Componentes padrão do Style Guide Fluig:**Todos os componentes visuais do Style Guide já estão preparados para o modo escuro. Se seu formulário utiliza apenas esses componentes, **nenhuma ação é necessária**.
- **Ativação automática:**O modo escuro do formulário acompanha automaticamente o tema selecionado pelo usuário no Fluig. Não é necessário alterar código para detectar ou ativar o tema.

## Como adaptar um formulário customizado para o modo escuro

---

### 1. Revisão do CSS Customizado

Caso seu formulário tenha estilos próprios definidos via CSS, é necessário substituir cores fixas por variáveis CSS disponibilizadas pela plataforma.

### Exemplo de substituição:

**Antes:**

[?](#)

| `.custom-style {````background-color``:``#ffffff``;````color``:``#333333``;````box-shadow:``0` `2px` `4px` `rgba(``0``,``0``,``0``,``0.1``);``}` |
| --- |

**Depois (compatível com modo escuro):**

[?](#)

| `.custom-field {````background-color``: var(--fs-color-neutral-light``-00``);````color``: var(--fs-color-neutral-dark``-90``);````box-shadow: var(--fs-shadow-sm);``}` |
| --- |

### 2. Onde encontrar as variáveis CSS

Todas as variáveis disponíveis estão documentadas no **Fluig****Style Guide**, na seção: **CSS > Themes - https://<SEU_DOMINIO>/style-guide/css.html#themes**

Ali você encontra a lista completa de variáveis para cores, sombras, bordas, backgrounds e outros aspectos visuais.

Caso seja necessário definir cores manualmente, **siga estas diretrizes:**

**Direcionamentos Gerais**

| Tipo de Cor | Variável CSS a Utilizar |
| --- | --- |
| Tipo de Cor | Variável CSS a Utilizar |
| Cor de texto "padrão" | var(--fs-color-neutral-dark-90) |
| Cor de texto "padrão" hover ou focus | var(--fs-color-neutral-dark-95) |
| Cor de fundo (geralmente branco) | var(--fs-color-neutral-light-00) |
| Cor de fundo cinza claro | var(--fs-color-neutral-light-05) ou var(--fs-color-neutral-light-10) |
| Cor de fundo cinza com destaque maior | var(--fs-color-neutral-light-20) |
| Cor de borda "padrão" | var(--fs-color-neutral-light-20) ou var(--fs-color-neutral-light-30) |

## Atenção com plugins de terceiros

---

Se o formulário utiliza bibliotecas ou plugins visuais de terceiros, é necessário:

- Verificar se o plugin suporta tema escuro nativamente.
- Caso não suporte, sobrescrever os estilos do plugin utilizando as variáveis CSS do Fluig.

## Exemplo de formatação customizada compatível

---

**HTML:**

[?](#)

| `````Meu Formulário``` |
| --- |

**CSS:**

[?](#)

| `.custom-container {````background-color``: var(--fs-color-brand``-01``-base);````padding``:``16px``;``}` `.custom-title {````color``: var(--fs-color-neutral-light``-00``);````font-size``:``24px``;``}` |
| --- |

## Exemplo de estilo específico para modo claro ou escuro

---

Caso precise definir estilos específicos para o modo claro e para o modo escuro, siga como no exemplo abaixo:

**Exemplo de formatação específica para modo claro ou escuro**

[?](#)

| `/* Definições de variáveis para o modo light */``:root {````--my-custom-``color``:``#0000ff``; // azul``}` `/* Definições de variáveis para o modo dark */``html.theme-dark {````--my-custom-``color``:``#ff0000``; // vermelho``}` `/* uso aplicando a variável em algum elemento */``.my-widget .my-custom-button {````color``: var(--my-custom-color); // se for modo claro será azul, se for modo escuro será vermelho``}` |
| --- |

## Dúvidas ou suporte

---

Em caso de dúvidas, procure o time responsável pelo Fluig ou abra um chamado pela central de suporte.


<!-- anchors: Desenvolvendoformulárioscompatíveiscommodoescuro-Visãogeral, Desenvolvendoformulárioscompatíveiscommodoescuro-Comoomodoescurofuncionainternamente, highlighter_434159, Desenvolvendoformulárioscompatíveiscommodoescuro-Boaspráticas, Desenvolvendoformulárioscompatíveiscommodoescuro-Oquejáfuncionaautomaticamente, Desenvolvendoformulárioscompatíveiscommodoescuro-Comoadaptarumformuláriocustomizadoparaomodoescuro, Desenvolvendoformulárioscompatíveiscommodoescuro-1.RevisãodoCSSCustomizado, Desenvolvendoformulárioscompatíveiscommodoescuro-Exemplodesubstituição:, highlighter_831250, highlighter_60250, Desenvolvendoformulárioscompatíveiscommodoescuro-2.OndeencontrarasvariáveisCSS, Desenvolvendoformulárioscompatíveiscommodoescuro-Atençãocompluginsdeterceiros, Desenvolvendoformulárioscompatíveiscommodoescuro-Exemplodeformataçãocustomizadacompatível, highlighter_13736, highlighter_42653, Desenvolvendoformulárioscompatíveiscommodoescuro-Exemplodeestiloespecíficoparamodoclaroouescuro, highlighter_414232, Desenvolvendoformulárioscompatíveiscommodoescuro-Dúvidasousuporte -->
