---
title: "IDE - Mensagem \"SAML message intended destination endpoint did not match recipient endpoint\" ao acessar a plataforma"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=240298017"
scraped_at: "2026-03-09T03:38:02.950Z"
depth: 2
anchors: 6
child_links: 46
---

# IDE - Mensagem "SAML message intended destination endpoint did not match recipient endpoint" ao acessar a plataforma

# Índice

# Plataforma

**Produto: **TOTVS Fluig Plataforma integrado ao TOTVS Identity

**Versão:** 1.5 ou superior

# Ocorrência

Ao tentar realizar o acesso na plataforma a partir do Identity, é apresentada a mensagem abaixo na tela de login:

[?](#)

| `Exception extracting SAML message from the request: SAML message intended destination endpoint did not match recipient endpoint` |
| --- |

![](/download/attachments/240298017/saml-message.png?version=2&modificationDate=1466510176000&api=v2)

# Causa

Foi configurado o *proxy* reverso (sem SSL), porém não foi realizada a configuração do conector no arquivo **standalone.xml** (a partir da atualização 2.0), **domain.xml** (da atualização 1.6 até a 1.8.2) ou  **standalone.xml** (até a atualização 1.5.13).

# Solução

Revisar a configuração do *proxy* reverso, de acordo com o tópico "Configuração do Apache (sem SSL)" conforme a documentação de [Configuração de proxy reverso Apache](/pages/viewpage.action?pageId=877162376).

Verificar se o protocolo é HTTP ou HTTPS. Esses protocolos devem ser iguais na plataforma (wcmadmin) e no Identity (nas configurações do aplicativo).


<!-- anchors: IDEMensagem"SAMLmessageintendeddestinationendpointdidnotmatchrecipientendpoint"aoacessaraplataforma-Índice, IDEMensagem"SAMLmessageintendeddestinationendpointdidnotmatchrecipientendpoint"aoacessaraplataforma-Plataforma, IDEMensagem"SAMLmessageintendeddestinationendpointdidnotmatchrecipientendpoint"aoacessaraplataforma-Ocorrência, highlighter_194346, IDEMensagem"SAMLmessageintendeddestinationendpointdidnotmatchrecipientendpoint"aoacessaraplataforma-Causa, IDEMensagem"SAMLmessageintendeddestinationendpointdidnotmatchrecipientendpoint"aoacessaraplataforma-Solução -->
