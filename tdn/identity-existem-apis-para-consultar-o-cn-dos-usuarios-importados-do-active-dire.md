---
title: "Identity | Existem APIs para consultar o CN dos usuários importados do Active Directory?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=346490172"
scraped_at: "2026-03-09T04:34:07.983Z"
depth: 3
anchors: 0
child_links: 57
---

# Identity | Existem APIs para consultar o CN dos usuários importados do Active Directory?

---

Existem duas APIs disponíveis para consulta de CN dos usuários aceitos: uma individual e outra para todos os usuários aceitos.

**Obter usuário AD pelo e-mail**

| Serviço | Companies |
| --- | --- |
| Descrição | Get an AD user by email |
| Operação | GET |
| Endpoint | /rest/v2/companies/{companyId}/active-directories/{adId}/users/email/{email} |
| Parâmetros | companyIdadIdemail |

**companyId:** o ID da Empresa está disponível na aba [Segurança](/pages/viewpage.action?pageId=273980166) do menu de Configuração do Identity.

**adId:** token de configuração do Active Directory gerado pelo Identity. Disponível na página [Gerenciar Active Directories](/display/fluig/Identity+%7C+Gerenciar+Active+Directories).

**email:** endereço de e-mail do usuário aceito.

****

**Obter todos os usuários AD aceitos**

| Serviço | Companies |
| --- | --- |
| Descrição | Get all accepted AD Users |
| Operação | GET |
| Endpoint | /rest/v2/companies/{companyId}/active-directories/{adId}/accepted-users |
| Parâmetros | companyIdadId |
