---
title: "WCM - Por que minha página pública está solicitando credenciais?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=223925984"
scraped_at: "2026-03-09T03:37:29.881Z"
depth: 2
anchors: 6
child_links: 46
---

# WCM - Por que minha página pública está solicitando credenciais?

# Índice

# Plataforma

**Produto: **TOTVS Fluig Plataforma

# Ocorrência

Mesmo após configurar uma determinada página como pública, o Fluig Plataforma continua solicitando login e senha na hora de acessá-la.

# Causa

Os usuários estão tentando a acessar a página com o endereço em modo privado: http://[endereço_fluig]/portal**/p**/empresa/[nome_pagina_publica]. O "/p" na URL indica "Privado" e por isso exige as credenciais para acesso;

# Solução

Retirar o "/p" no endereço, assim o Fluig acessará a página em modo público.

# Observações

Configurar uma página como pública não significa que ela será sempre acessada sem pedir credencias, mas simplesmente que foi habilitado um "Modo Público" de acesso a ela.

O "Modo Privado" continua funcionando normalmente. Esse recurso foi pensado dessa forma para que possam ser feitas validações e, se necessário, modificar o comportamento da página dependendo da forma como ela é acessada.

Vale notar que a página em modo público pode apresentar erros que não apresenta quando é acessada em modo privado. Isso vai depender de quais *widgets* foram configuradas nessa página e da forma como elas se comportam em uma página em modo público.


<!-- anchors: WCMPorqueminhapáginapúblicaestásolicitandocredenciais?-Índice, WCMPorqueminhapáginapúblicaestásolicitandocredenciais?-Plataforma, WCMPorqueminhapáginapúblicaestásolicitandocredenciais?-Ocorrência, WCMPorqueminhapáginapúblicaestásolicitandocredenciais?-Causa, WCMPorqueminhapáginapúblicaestásolicitandocredenciais?-Solução, WCMPorqueminhapáginapúblicaestásolicitandocredenciais?-Observações -->
