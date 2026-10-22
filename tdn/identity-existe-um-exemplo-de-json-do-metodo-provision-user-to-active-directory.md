---
title: "Identity | Existe um exemplo de JSON do método \"Provision user to Active Directory\"?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=320378585"
scraped_at: "2026-03-09T04:34:24.836Z"
depth: 3
anchors: 1
child_links: 55
---

# Identity | Existe um exemplo de JSON do método "Provision user to Active Directory"?

---

Segue um exemplo do JSON que irá no body do método "Provision user to Active Directory".

[?](#)

| `{``"id":"w11yo00x2sqfs0i71513023868916",``"firstName":"Carol",``"lastName":"Silva",``"email":"carolsilva@gmail.com",``"dateCreated":"Dec 11, 2017 6:25:24 PM",``"userStatus":"ACCEPTED",``"directoryId":"62cc4fc9-cfaf-43e2-8032-99297c586200",``"adToken":"62cc4fc9-cfaf-43e2-8032-99297c586200",``"adTempPassword":"Senha@123",``"organizationalUnit":"CN=USERS,DC=FLUIG,DC=TEST,DC=COM",```será provisionado o usuário. -->``"companyId":"labs0da4110ba377d100f050cb4440db",``"cn":"mariasilva"````}` |
| --- |

Esse JSON pertence ao REST POST - /rest/v2/companies/{companyId}/active-directories/{adId}/users.


<!-- anchors: highlighter_770989 -->
