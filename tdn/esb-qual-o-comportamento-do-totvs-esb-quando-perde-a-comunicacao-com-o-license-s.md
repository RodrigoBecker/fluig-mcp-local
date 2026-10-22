---
title: "ESB - Qual o comportamento do TOTVS ESB quando perde a comunicação com o License Server?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=210045806"
scraped_at: "2026-03-09T03:39:18.566Z"
depth: 2
anchors: 4
child_links: 37
---

# ESB - Qual o comportamento do TOTVS ESB quando perde a comunicação com o License Server?

# Índice

# Plataforma

**Produto:** TOTVS ESB

# Ocorrência

Gostaria de confirmar o comportamento do TOTVS ESB quando este perde a comunicação com o License Server. O serviço para sozinho ou fica apresentando algum erro no log? O sistema gera alguma notificação em caso de perda de conexão com o LS?

# Solução

A falta de comunicação com o LS é exibida no arquivo de log. Após três tentativas de reconexão o serviço para e é preciso reiniciá-lo assim que o LS estiver disponível.

Na tela do TOTVS ESB não é apresentada nenhuma notificação sobre a perda de conexão com LS.


<!-- anchors: ESBQualocomportamentodoTOTVSESBquandoperdeacomunicaçãocomoLicenseServer?-Índice, ESBQualocomportamentodoTOTVSESBquandoperdeacomunicaçãocomoLicenseServer?-Plataforma, ESBQualocomportamentodoTOTVSESBquandoperdeacomunicaçãocomoLicenseServer?-Ocorrência, ESBQualocomportamentodoTOTVSESBquandoperdeacomunicaçãocomoLicenseServer?-Solução -->
