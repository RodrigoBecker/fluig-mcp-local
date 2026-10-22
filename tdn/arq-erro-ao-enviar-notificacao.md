---
title: "ARQ - Erro ao enviar notificação"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=198945093"
scraped_at: "2026-03-04T03:37:38.268Z"
depth: 4
anchors: 7
child_links: 63
---

# ARQ - Erro ao enviar notificação

# Índice

# Plataforma

**Produto:  **TOTVS Fluig Plataforma

**Versão:** 1.5.x e 1.6

# Ocorrência

No log da plataforma é apresentada a mensagem 'Error sending notification to...' e não é enviada notificação para a central de notificações do usuário.

# Causa

Esta mensagem é apresentada quando a plataforma não conseguiu enviar a notificação para o serviço Realtime.

# Solução

#### Atualização 1.6 ou superiores

Verifique se o serviço Realtime está iniciado. No caso de erro ao iniciar o serviço, recrie os serviços do Fluig no sistema operacional, conforme procedimento abaixo:

- Acessar a pasta raiz de instalação da plataforma via linha de comando;
- Digitar: nodeSetup.bat uninstall (para desinstalar os serviços);
- Digitar: nodeSetup.bat install (para reinstalar os serviços).

#### Atualização 1.5.x

Verifique se o serviço Realtime está rodando. No caso de erro ao iniciar o serviço, recrie os serviços do Fluig no sistema operacional, conforme procedimento abaixo:

- Acessar a pasta /jboss/bin do diretório de instalação da plataforma via linha de comando;
- Digitar: service64.bat uninstall (para desinstalar os serviços);
- Digitar: service64.bat install (para reinstalar os serviços).


<!-- anchors: ARQErroaoenviarnotificação-Índice, ARQErroaoenviarnotificação-Plataforma, ARQErroaoenviarnotificação-Ocorrência, ARQErroaoenviarnotificação-Causa, ARQErroaoenviarnotificação-Solução, ARQErroaoenviarnotificação-Atualização1.6ousuperiores, ARQErroaoenviarnotificação-Atualização1.5.x -->
