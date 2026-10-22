---
title: "ARQ - Como alterar a porta de acesso na atualização 1.5.13 ou anterior"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=201751064"
scraped_at: "2026-03-04T03:36:59.596Z"
depth: 4
anchors: 6
child_links: 42
---

# ARQ - Como alterar a porta de acesso na atualização 1.5.13 ou anterior

Atenção

Esta página foi revisada para considerar as configurações para a atualização 1.5.13 e anteriores.

Caso possua uma atualização 1.6 ou superior, acesse: [Como alterar a porta de acesso em HTTP ou HTTPS](/pages/viewpage.action?pageId=274317351).

# Índice

# Plataforma

**Produto: ** TOTVS Fluig Plataforma

**Versão:** 1.5.13 e anteriores

# Ocorrência

Como faço para alterar a porta de acesso ao TOTVS Fluig Plataforma nas versões anteriores a 1.6?

# Solução

Para alterar a porta de acesso siga os seguintes passos: 

1- Logar com o wcmadmin e editar a URL de acesso, em configurações do sistema. 
2 - Parar os serviços (FLUIG, MemCached, RealTime). 
3 - Verificar dentro dos arquivos abaixo o nome do servidor e da porta antiga e mudar para a nova:

**[diretório_instalação]\jboss\standalone\configuration\standalone.xml**

 Parâmetros a ser alterados:

[?](#)

| ```````` |
| --- |

**[diretório_instalação]\jboss\solr\solr.xml**

 Parâmetros a ser alterados:

- hostPort = "PORTA"

Se o servidor de Indexação (Solr) estiver hospedado em um servidor diferente da plataforma, não altere o parâmetro hostPort no arquivo solr.xml.

# Observações

Caso seu ambiente seja integrado com o Identity você precisa alterar a URL de acesso também lá, após realizar essa alteração deve-se entrar novamente com o wcmadmin, ir em autenticação, realizar teste de conexão novamente e salvar as informações, assim ele vai atualizar os dados.


<!-- anchors: ARQComoalteraraportadeacessonaatualização1.5.13ouanterior-Índice, ARQComoalteraraportadeacessonaatualização1.5.13ouanterior-Plataforma, ARQComoalteraraportadeacessonaatualização1.5.13ouanterior-Ocorrência, ARQComoalteraraportadeacessonaatualização1.5.13ouanterior-Solução, highlighter_328210, ARQComoalteraraportadeacessonaatualização1.5.13ouanterior-Observações -->
