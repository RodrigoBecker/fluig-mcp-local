---
title: "Identity | API de validação de MFA"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=1045013610"
scraped_at: "2026-03-09T04:35:58.019Z"
depth: 3
anchors: 0
child_links: 23
---

# Identity | API de validação de MFA

Para validar o MFA de um usuário no TOTVS Identity, via API ([https://app.fluigidentity.net/api/auth/doc/#!/IDM_Auth_Api_-_V1/totpValidate](https://app.fluigidentity.net/api/auth/doc/#!/IDM_Auth_Api_-_V1/totpValidate)), basta seguir os seguintes passos:

1. Realizar uma chamada para o endpoint post /v1/mfa/totp/validate, passando o Access_token do usuário logado e o código TOTP a ser validado no campo totp_token. A API irá retornar 204 quando o código TOTP for válido.

![](/download/attachments/1045013610/image-2026-2-20_17-58-16.png?version=1&modificationDate=1771621225137&api=v2)

Em caso de código TOTP inválido, será retornado o Response Code 400.

![](/download/attachments/1045013610/image-2026-2-20_17-58-48.png?version=1&modificationDate=1771621225053&api=v2)

ATENÇÃO Para prevenir incidentes, implementamos um limite de taxa (rate limit) de 5 requisições por minuto por endereço IP neste endpoint.
