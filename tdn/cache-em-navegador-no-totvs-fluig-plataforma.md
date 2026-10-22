---
title: "Cache em navegador no TOTVS Fluig Plataforma"
url: "https://tdn.totvs.com/display/public/fluig/Cache+em+navegador+no+TOTVS+Fluig+Plataforma"
scraped_at: "2026-03-09T03:48:17.743Z"
depth: 2
anchors: 12
child_links: 49
---

# Cache em navegador no TOTVS Fluig Plataforma

# Índice

# Objetivo

Esse guia tem o objetivo de detalhar o uso da técnica de cache em navegador, passando pelos benefícios da técnica e exemplos.

## O que é Cache?

Cache é uma técnica utilizada para guardar uma cópia do dado recurso e quando requisitada, essa cópia do dado é apresentada. Quando temos um web cache com um recurso requerido anteriormente armazenado, ele intercepta a solicitação devolvendo sua cópia não sendo necessário fazer o download novamente do servidor original, facilitando em vários pontos como por exemplo: o balanceamento do servidor não precisando servir todos os *clients* sozinho, proximidade com o *client* levando menos tempo para transmitir o recurso de volta.

São muitas vantagens ao se utilizar a técnica de cache, porém precisa essa técnica precisa de uma configuração correta pois os recursos armazenados podem mudar ao longo do tempo, isso faz com que seja retornado um recurso obsoleto. O importante é sempre lembrar: um recurso só cabe no cache somente até que ele sofra alterações.

Ao utilizar cache, a performance de aplicações e websites podem melhorar significativamente pois o reuso de recursos buscados previamente diminui bastante o tempo de retorno da resposta.

## Benefícios

**Redução do tráfego**Menos requisições e respostas precisam trafegar na rede. O objeto é recuperado do servidor somente uma vez, reduzindo a quantidade de banda usada pelo cliente. Pode-se conseguir taxas de acerto de até 60%.

**Redução de carga dos servidores**Menos requisições para o servidor WWW atender. Exemplificando, alguns sites ficam extremamente congestionados quando do lançamento de novos produtos. Um servidor proxy pode resolver o problema.

**Redução da latência**As respostas de requisições aos objetos "cacheados" são feitas a partir do cache local, não pelo servidor WWW original, ou seja, o acesso tende a ser bastante rápido.

## Uso do cache na plataforma

### Imagem na timeline - API de Thumbnail antiga

[?](#)

| `/webdesk/streamcontrol/?WDCompanyId=1&WDNrDocto=1074&WDNrVersao=1000&thumbnail=640_AUTO&replicationServer=false````Headers:````Cache-Control: max-age=3600, public (tempo de expiração: 1 hora)` |
| --- |

### Resources de Widgets - JavaScript e CSS

Atualização de uma widget e/ou layout através da Central de Componentes ou via Fluig Studio

[?](#)

| `/portal/resources/(*.js | *.css)````- Não tem controle de cache porém agora os browsers estão começando a cachear esses arquivos````Headers:````Cache-Control: no-cache` |
| --- |

### Imagem de perfil

[?](#)

| `/social/api/rest/social/image/profile/adm/SMALL_PICTURE````Headers:````Cache-Control: no-transform, max-age=60000 (tempo de expiração: 16 horas)` |
| --- |

## Como forçar a limpeza?

Existem algumas formas de forçar a limpeza do cache nos navegadores, confira a seguir:

- Limpeza manual via configuração dos browsers:Google Chrome: Pressionar ao mesmo tempo as teclas**CTRL + Shift + R** ou pressionar **CTRL + Shift + Del**e, na pop-up aberta, marcar a opção **Cookies e outros dados do site** e acionar **Limpar dados**.
- Mozilla Firefox: Pressionar ao mesmo tempo as teclas **Ctrl + Shift + Del **e, na pop-up aberta, marcar a opção **Cookies e Cache**e acionar **Limpar agora**.
- Internet Explorer: Pressionar ao mesmo tempo as teclas **Ctrl + Shift + Del** e, na pop-up aberta, marcar a opção **Arquivos de Internet Temporários e Cookies **e acionar **Excluir**.

Também é possível acessar a plataforma sem cache, para isso é necessário autenticar-se a partir de uma**janela anônima**. Nesse caso, o cache é mantido no navegador habitual.

Dica!

Recomendamos a leitura da documentação oficial do Mozilla® sobre [Cache](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/HTTP).


<!-- anchors: CacheemnavegadornoTOTVSFluigPlataforma-Índice, CacheemnavegadornoTOTVSFluigPlataforma-Objetivo, CacheemnavegadornoTOTVSFluigPlataforma-OqueéCache?, CacheemnavegadornoTOTVSFluigPlataforma-Benefícios, CacheemnavegadornoTOTVSFluigPlataforma-Usodocachenaplataforma, CacheemnavegadornoTOTVSFluigPlataforma-Imagemnatimeline-APIdeThumbnailantiga, highlighter_47585, CacheemnavegadornoTOTVSFluigPlataforma-ResourcesdeWidgets-JavaScripteCSS, highlighter_24505, CacheemnavegadornoTOTVSFluigPlataforma-Imagemdeperfil, highlighter_347807, CacheemnavegadornoTOTVSFluigPlataforma-Comoforçaralimpeza? -->
