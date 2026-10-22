---
title: "IDE - Mensagem \"Exception extracting SAML\" ao acessar aplicativo Fluig pelo Launchpad"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=223925541"
scraped_at: "2026-03-09T03:38:47.321Z"
depth: 2
anchors: 6
child_links: 46
---

# IDE - Mensagem "Exception extracting SAML" ao acessar aplicativo Fluig pelo Launchpad

# Índice

# Plataforma

**Produto: **TOTVS Fluig Plataforma integrado ao TOTVS Identity

# Ocorrência

Após configurar a integração da plataforma ao Identity, e apesar de o teste de conexão apontar que a mesma está correta, ao clicar no aplicativo do Fluig é aberta a tela de login da plataforma com o erro abaixo:

[?](#)

| `Exception extracting SAML message from the request: This message decoder only supports the HTTP POST method.` |
| --- |

![](/download/attachments/223925541/tela%20de%20login.jpg?version=1&modificationDate=1453223010000&api=v2)

# Causa

Este erro é gerado devido uma configuração incorreta no aplicativo Fluig no Identity.

# Solução

Na aba **Entrar** da configurações do aplicativo Fluig no Identity, os campos devem ser informados obrigatoriamente da seguinte maneira:

- **Modo de login**: SAML
- **Credencial**: Definido pelo usuário
- **Domínio**: http://[endereço_fluig]:[porta]/portal/idp
- **Mapeamento Id de usuário**: E-mail do usuário

Consulte a documentação completa em [Integração da plataforma com o Identity](/pages/viewpage.action?pageId=73080143).


<!-- anchors: IDEMensagem"ExceptionextractingSAML"aoacessaraplicativoFluigpeloLaunchpad-Índice, IDEMensagem"ExceptionextractingSAML"aoacessaraplicativoFluigpeloLaunchpad-Plataforma, IDEMensagem"ExceptionextractingSAML"aoacessaraplicativoFluigpeloLaunchpad-Ocorrência, highlighter_226767, IDEMensagem"ExceptionextractingSAML"aoacessaraplicativoFluigpeloLaunchpad-Causa, IDEMensagem"ExceptionextractingSAML"aoacessaraplicativoFluigpeloLaunchpad-Solução -->
