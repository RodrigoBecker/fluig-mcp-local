---
title: "ARQ - Como recriar o serviço MemCached nas atualizações 1.6.0 ou 1.6.1?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=377324514"
scraped_at: "2026-03-09T04:54:54.740Z"
depth: 3
anchors: 13
child_links: 46
---

# ARQ - Como recriar o serviço MemCached nas atualizações 1.6.0 ou 1.6.1?

Atenção

Esta FAQ é destinada às atualizações 1.6.0 ou 1.6.1.

A partir da atualização 1.6.2 não é necessário recriar esse serviço.

# Índice

# Plataforma

**Produto:**TOTVS Fluig Plataforma

**Versão:** 1.6.0 ou 1.6.1

# Ocorrência

Como criar, desinstalar e renomear o serviço MemCached nas atualizações 1.6.0 ou 1.6.1

# Solução

- [Criar](#)
- [Desinstalar](#)
- [Renomear](#)

## Criar serviço

Para criar o serviço de memCached na atualização 1.6 e superior, abra o Prompt de Comandos ou Console e execute o comando abaixo:

Em [nome_memCached] substitua pelo nome que deseja colocar no serviço. Exemplo: fluig_memCached

[?](#)

| `[diretório_instalação]\memcached\nssm.exe``install` `[nome_memCached]``"[diretório_instalação]\memcached\memcached.exe"` `"-M"` |
| --- |

## Desinstalar serviço

Para desinstalar o serviço de memCached na atualização 1.6 e superior, execute o seguinte comando:

Em [nome_memCached] substitua pelo nome que atual do serviço. 

[?](#)

| `[diretório_instalação]\memcached\nssm.exe remove [nome_memCached] confirm` |
| --- |

## Renomear serviço

1. Abra o Prompt de Comandos ou Console e [desinstale o serviço](#ARQComorecriaroserviçoMemCachednasatualizações1.6.0ou1.6.1?-des_mem);

2. Edite o comando de[ criar o serviço](#ARQComorecriaroserviçoMemCachednasatualizações1.6.0ou1.6.1?-criar_mem) alterando o [nome_memCached] para o novo nome do serviço;

3. Execute o comando.


<!-- anchors: ARQComorecriaroserviçoMemCachednasatualizações1.6.0ou1.6.1?-Índice, ARQComorecriaroserviçoMemCachednasatualizações1.6.0ou1.6.1?-Plataforma, ARQComorecriaroserviçoMemCachednasatualizações1.6.0ou1.6.1?-Ocorrência, ARQComorecriaroserviçoMemCachednasatualizações1.6.0ou1.6.1?-Solução, passos, passos-criar, ARQComorecriaroserviçoMemCachednasatualizações1.6.0ou1.6.1?-Criarserviço, highlighter_745285, passos-desinstalar, ARQComorecriaroserviçoMemCachednasatualizações1.6.0ou1.6.1?-Desinstalarserviço, highlighter_665857, passos-renomear, ARQComorecriaroserviçoMemCachednasatualizações1.6.0ou1.6.1?-Renomearserviço -->
