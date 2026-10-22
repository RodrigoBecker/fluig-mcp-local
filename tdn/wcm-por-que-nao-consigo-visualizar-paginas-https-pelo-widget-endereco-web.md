---
title: "WCM - Por que não consigo visualizar páginas HTTPS pelo widget Endereço WEB?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=223180790"
scraped_at: "2026-03-09T03:37:36.053Z"
depth: 2
anchors: 6
child_links: 47
---

# WCM - Por que não consigo visualizar páginas HTTPS pelo widget Endereço WEB?

# Índice

# Plataforma

**Produto: **TOTVS Fluig Plataforma

**Versão:** 1.6.2

**Ambiente:** Windows e Linux

# Ocorrência

Não consigo exibir o conteúdo de páginas HTTPS através do *widget* [Endereço WEB](https://tdn.totvs.com/pages/viewpage.action?pageId=234455977#Widgets.-Endere%C3%A7oWEB) em meu Fluig Plataforma.

# Causa

O problema ocorre porque o Fluig utilizado não possui contexto seguro (ou seja, é HTTP) e está tentando acessar um site com contexto seguro (HTTPS). O depurador do navegador (tecla F12) exibe mensagens semelhantes às relacionadas abaixo:

**Erro**

[?](#)

| `Refused to display``'https://siteseguro.com.br/singin'` `in` `a frame because it set``'X-Frame-Options'` `to``'SAMEORIGIN'``.` `2wcm_global_pt_BR.js?v=1.5.3-EP1:3``Uncaught SecurityError: Sandbox access violation: Blocked a frame at``"http://seu.fluig.com"` `from accessing a frame at``"null"``.``The frame being accessed is sandboxed and lacks the``"allow-same-origin"` `flag.` |
| --- |

# Solução

Existem duas possíveis soluções para este problema: implantar segurança de contexto ([HTTPS](https://tdn.totvs.com/x/D4CgBw)) no Fluig Plataforma conforme a documentação [Configuração HTTPS para fluig das versões 1.6.0 e superiores](/pages/viewpage.action?pageId=286516572) ou, se possível, trocar a página configurada no *widget* Endereço WEB por uma opção sem contexto seguro (HTTP).


<!-- anchors: WCMPorquenãoconsigovisualizarpáginasHTTPSpelowidgetEndereçoWEB?-Índice, WCMPorquenãoconsigovisualizarpáginasHTTPSpelowidgetEndereçoWEB?-Plataforma, WCMPorquenãoconsigovisualizarpáginasHTTPSpelowidgetEndereçoWEB?-Ocorrência, WCMPorquenãoconsigovisualizarpáginasHTTPSpelowidgetEndereçoWEB?-Causa, highlighter_561908, WCMPorquenãoconsigovisualizarpáginasHTTPSpelowidgetEndereçoWEB?-Solução -->
