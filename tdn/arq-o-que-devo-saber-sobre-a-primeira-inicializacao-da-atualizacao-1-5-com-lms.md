---
title: "ARQ - O que devo saber sobre a primeira inicialização da atualização 1.5 com LMS?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=189305418"
scraped_at: "2026-03-09T04:25:34.286Z"
depth: 3
anchors: 5
child_links: 45
---

# ARQ - O que devo saber sobre a primeira inicialização da atualização 1.5 com LMS?

Atenção

Página destinada a atualizações anteriores a release 1.5.

# Índice

# Objetivo

O objetivo deste guia é apresentar as características da primeira inicialização do TOTVS Fluig Plataforma com o *card* LMS.

# Inicialização LMS

Com a entrada do novo *card* de LMS, a primeira inicialização do servidor da plataforma pode ser afetada.

Existem dois fatores que afetam diretamente a primeira inicialização do *card* de LMS dentro da plataforma:

- criação da estrutura de banco de dados do LMS;
- integração dos dados de empresa, grupos, usuários e volume.

# Sobre a criação do banco de dados LMS

O LMS se une à plataforma com mais de **210** novas tabelas, representando aproximadamente **40%** do tamanho total do banco de dados do produto na versão 1.5.

A criação dessa estrutura pode demorar de acordo com o banco de dados utilizado. Cada banco de dados tem características diferentes para a criação da estrutura.

# Sobre a integração do LMS

Durante a primeira inicialização, o LMS busca todas as informações de empresa, grupos, usuários e volume das tabelas da plataforma.

Todas as informações encontradas são reestruturadas nas tabelas no LMS, com o objetivo de disponibilizar os ambientes de Aprendizado e de Avaliações para todos os usuários e empresas já existentes.


<!-- anchors: ARQOquedevosabersobreaprimeirainicializaçãodaatualização1.5comLMS?-Índice, ARQOquedevosabersobreaprimeirainicializaçãodaatualização1.5comLMS?-Objetivo, ARQOquedevosabersobreaprimeirainicializaçãodaatualização1.5comLMS?-InicializaçãoLMS, ARQOquedevosabersobreaprimeirainicializaçãodaatualização1.5comLMS?-SobreacriaçãodobancodedadosLMS, ARQOquedevosabersobreaprimeirainicializaçãodaatualização1.5comLMS?-SobreaintegraçãodoLMS -->
