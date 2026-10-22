---
title: "Identity | Por que o Chrome não abre aplicativos do tipo Desktop?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=243649873"
scraped_at: "2026-03-09T04:33:47.597Z"
depth: 3
anchors: 0
child_links: 55
---

# Identity | Por que o Chrome não abre aplicativos do tipo Desktop?

**Ocorrência**

Foi criado um aplicativo no Identity que executa um programa *desktop*, que fica instalado na estação de trabalho do usuário. Contudo, ao tentar abrir este aplicativo a partir do Launchpad utilizando o navegador Google Chrome, o programa não é executado.

**Causa**

Não foi concedida permissão no navegador Google Chrome para que o aplicativo seja executado.

**Solução**

Ao tentar executar um aplicativo do tipo Desktop, o Chrome irá solicitar a autorização do usuário, conforme a mensagem exibida abaixo. A opção **Iniciar aplicativo** deve ser selecionada para que o aplicativo seja executado.

![](/download/attachments/243649873/mensagem.png?version=3&modificationDate=1468524911000&api=v2)

Caso tenha sido marcada a opção **Lembre-me da minha opção para todos os links deste tipo** e acionado o botão **Não fazer nada**, o Chrome não irá armazenar esta preferência e jamais executará os aplicativos tipo Desktop a partir do Identity. Para reverter esta configuração será necessário reinstalar o Google Chrome na estação de trabalho do usuário.
