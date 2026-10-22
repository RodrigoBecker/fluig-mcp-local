---
title: "Atualização jQuery - Como identificar o que precisa ser atualizado?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=547229132"
scraped_at: "2026-03-09T03:48:09.637Z"
depth: 2
anchors: 9
child_links: 44
---

# Atualização jQuery - Como identificar o que precisa ser atualizado?

# Índice

Este guia tem por objetivo auxiliar os usuários a seguir o passo a passo necessário para identificação dos pontos onde é necessária a revisão e atualização do código, por conta da atualização de libs que tivemos, Mais uma medida para reforçar ainda mais a segurança do Fluig.

## Identificação do que precisa ser ajustado

---

Com a inclusão do plugin de migração do jQuery, no console do navegador são exibidas mensagens que vão auxiliar neste processo.

- [Passo 1](#)
- [Passo 2](#)

 - Abrir a ferramenta de desenvolvedor no seu browser

   No Chrome ou Firefox pressionar F12

 - Na ferramenta de desenvolvedor, acionar a aba Console

   Nesta aba serão exibidos os logs da página. Todos os log que possuem o prefixo **'JQMIGRATE: ...'** exigem a atenção.

As mensagens apresentadas no log após a inclusão do plugin de migração, estarão disponíveis apenas enquanto o plugin estiver **instalado**. Nas atualizações futuras iremos remover este plugin fazendo com que essas mensagens no log não sejam mais apresentadas.

Atenção

O Fluig também está passando por esse processo de atualização, então é possível que alguns desses LOG's sejam do próprio código do Fluig. Estes não exigirão sua atenção.

**Exemplo de LOG que pode ser exibido: **“JQMIGRATE: jQuery.fn.blur() event shorthand is deprecated” (Isto diz que este código já não é mais compatível)

Como era escrito antes:

[?](#)

| `$(element).blur(function() {});` |
| --- |

Como deve ser escrito agora:

[?](#)

| `$(element).on('blur', function() {});` |
| --- |

## E como encontrar esses impactos?

---

Primeiramente, você precisa identificar todas as mensagens que estão como "**is deprecated**" e caso seja plugins ou libs não precisam ser tratadas nesse momento, porém exigem atenção no futuro.

**Exemplos de código que não estão mais compatíveis**

- Trocar $('<div/>') para $('<div></div>')

**Como era antes**

$('<div/>')

**Como deve ficar**

$('<div></div>')

- Trocar .size() para .length

**Como era antes**

$('.selector1).size()

**Como deve ficar**

$('.selector').length

- Trocar $.parseJSON para JSON.parse

**Como era antes**

$.parseJSON(data);

**Como deve ficar**

JSON.parse(data);

- $(function) não é mais assíncrono

$(function () {

     console.log('ready');

});

console.log('outside ready');

- Trocar .load() para .on(‘load’) e trocar .unload() para .on(‘unload’)

**Como era antes**

$('<IFRAME-SELECTOR>').load(...)

**Como deve ficar**

$('<IFRAME-SELECTOR>').on('load',...)

- Trocar .load() para .on(‘load’) e trocar .unload() para .on(‘unload’)

**Como era antes**

$('<IFRAME-SELECTOR>').load(...)

**Como deve ficar**

$('<IFRAME-SELECTOR>').on('load',...)

- Deprecied: trocar .click() para escutar evento .on(‘click’) e disparar evento .trigger(‘click’)

**Como era antes**

$('.selector').click(...)

**Como deve ficar**

$('.selector').on('click',...)

$('.selector').trigger('click')

- Deprecated: trocar .bind para .on 
- Deprecated: trocar .unbind para .off

**Como era antes**

$('.selector').bind('click',...)

**Como deve ficar **

$('.selector').on('click',...)

### Mais alguns pontos de atenção

---

Bibliotecas de terceiros escritas em jQuery podem trazer impactos na atualização. Confira alguns exemplos:

- jquery.mask.js
- jquery.treeview.js
- jquery.fileupload.js

Esses plugins podem não estar compatíveis com a nova versão. Caso seja esse o cenário, temos algumas opções:

- Atualizar o plugin para uma versão mais recente compatível com a versão 3.x **(mais recomendado)**
- Alterar o código fonte do plugin **(menos recomendado)**

Para mais informações acesse o release notes oficial do jQuery 

- **Guia de atualização jQuery Core 3.0**
- **Guia de atualização jQuery Core 3.5**


<!-- anchors: AtualizaçãojQueryComoidentificaroqueprecisaseratualizado?-Índice, AtualizaçãojQueryComoidentificaroqueprecisaseratualizado?-Identificaçãodoqueprecisaserajustado, id, id-1, id-2, highlighter_986012, highlighter_469320, AtualizaçãojQueryComoidentificaroqueprecisaseratualizado?-Ecomoencontraressesimpactos?, AtualizaçãojQueryComoidentificaroqueprecisaseratualizado?-Maisalgunspontosdeatenção -->
