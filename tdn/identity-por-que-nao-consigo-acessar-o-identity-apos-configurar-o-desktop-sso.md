---
title: "Identity | Por que não consigo acessar o Identity após configurar o Desktop SSO?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=201745850"
scraped_at: "2026-03-09T04:32:57.320Z"
depth: 3
anchors: 3
child_links: 56
---

# Identity | Por que não consigo acessar o Identity após configurar o Desktop SSO?

**Dúvida**

Por que não consigo acessar o Identity após configurar o Desktop SSO?

**Solução**

Provavelmente os endereços IP externos das máquinas utilizadas para acessar o Identity não estão cadastrados na lista de IPs permitidos na configuração do Desktop SSO.

Fique atento

Os endereços IP permitidos devem ser apenas **IPs externos**, não internos.

Para identificar o IP externo da estação de trabalho e adicioná-lo à lista de IPs permitidos, siga os procedimentos abaixo:

- [Identificar o IP externo](#)
- [Permitir o IP no Desktop SSO](#)

 - Acessar o site [Meu Endereço IP](http://www.meuenderecoip.com/) (ou similar) a partir da estação de trabalho para verificar o endereço do IP externo.

 - O endereço IP será apresentado em **Meu IP neste momento é**.

![](/download/attachments/201745850/meu_ip.png?version=2&modificationDate=1514382785000&api=v2)

 - Acessar o contexto da empresa no Identity com o administrador.

 - Acessar a configuração do Desktop SSO conforme instruído no help [Identity | Acesso via Desktop SSO](/display/fluig/Identity+%7C+Acesso+via+Desktop+SSO).

 - Incluir o endereço IP externo da estação de trabalho obtido pelo site [Meu Endereço IP](http://www.meuenderecoip.com/), ou uma faixa de IPs que inclua esse endereço.

 - Salvar as alterações.

****

Importante

Não é necessário atualizar o arquivo remote_auth.asp no servidor do IIS ao acrescentar um novo endereçou ou nova faixa de IP ao Desktop SSO.


<!-- anchors: desktopsso, desktopsso-1480954639, desktopsso-1214297880 -->
