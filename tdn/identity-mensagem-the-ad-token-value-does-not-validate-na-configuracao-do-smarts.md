---
title: "Identity | Mensagem \"The AD Token value does not validate\" na configuração do SmartSync"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=189316902"
scraped_at: "2026-03-09T04:34:58.299Z"
depth: 3
anchors: 1
child_links: 55
---

# Identity | Mensagem "The AD Token value does not validate" na configuração do SmartSync

**Ocorrência**

Ao tentar configurar o SmartSync é apresentada a seguinte mensagem de erro:

[?](#)

| `The AD Token value does not validate. Enter the the token from Fluig Identity AD directories configuration.` |
| --- |

![](/download/attachments/189316902/erro_smartsync.png?version=2&modificationDate=1434649265000&api=v2)

**Causa**

O campo **ADSync Service Server**, localizado na aba FluigIdentity Server das configurações do SmartSync, foi preenchido com a URL do AD Sync do ambiente de homologação, enquanto o Active Directory está vinculado ao ambiente de produção (ou vice versa).

O ambiente de homologação é identificado pelo domínio **customerfi.com** e o ambiente de produção pelo domínio **fluigidentity.com**.

**Solução**

Na aba FluigIdentity Server, informar no campo ADSync Service Server a URL do mesmo ambiente em o AD será utilizado no Identity.

Por exemplo, se o contexto for [https://minhaempresa.fluigidentity.com](https://minhaempresa.fluigidentity.com), informar [https://app.fluigidentity.com/adsync](https://app.fluigidentity.com/adsync). 

Se for [https://minhaempresa.customerfi.com](https://minhaempresa.fluigidentity.com%2C/), informar [https://app.customerfi.com/adsync](https://app.fluigidentity.com/adsync).

Alterar também o campo **HTTPS Type** para **SSL3**.


<!-- anchors: highlighter_166359 -->
