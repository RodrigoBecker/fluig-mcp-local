---
title: "Como configurar o arquivo robots.txt"
url: "https://tdn.totvs.com/display/public/fluig/Como+configurar+o+arquivo+robots.txt"
scraped_at: "2026-03-09T04:01:08.891Z"
depth: 2
anchors: 3
child_links: 77
---

# Como configurar o arquivo robots.txt

# Objetivo

---

Este guia visa mostrar como configurar o arquivo robots.txt. 

# Detalhes técnicos

---

Conforme informado no guia de [boas práticas de segurança](https://tdn.totvs.com/x/yUZrJ), é importante configurar o arquivo robots.txt. Esse arquivo é constituído por regras que controlam quais arquivos os rastreadores podem acessar em um site.

A partir da atualização **1.7.1-211207** o arquivo robots.txt é instalado por padrão na plataforma, no diretório [instalação_fluig]/repository/wcmdir, o qual já encontra-se configurado para bloquear todos os agentes de rastreamento de arquivos. É recomendável alterar esse arquivo, incluindo todas as configurações necessárias para ser indexado.

Caso a utilização do arquivo robots.txt seja via configuração de proxy, o usuário poderá continuar usando via proxy ou mover a configuração ou o arquivo existente para o diretório [instalação_fluig]/repository/wcmdir robots.txt.

Por questões de segurança é recomendável que a configuração permita liberar somente as páginas que realmente devem ser indexadas.

# Permitir o rastreamento dos arquivos

---

Caso queira permitir o rastreamento dos arquivos no seu site por todos os agentes, deve-se alterar o arquivo robots.txt para:

User-agent: * Allow: /

Lembrando que o procedimento acima não é recomendado, pois torna de conhecimento público a existência do seu site, expondo algumas informações de acesso. Para mais informações de como configurar o arquivo robots.txt, [acesse aqui](https://developers.google.com/search/docs/advanced/robots/create-robots-txt?hl=pt-br).


<!-- anchors: Comoconfiguraroarquivorobots.txt-Objetivo, Comoconfiguraroarquivorobots.txt-Detalhestécnicos, Comoconfiguraroarquivorobots.txt-Permitirorastreamentodosarquivos -->
