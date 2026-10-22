---
title: "Identity | Provisionar usuário para o Active Directory"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=201739116"
scraped_at: "2026-03-09T05:11:56.083Z"
depth: 3
anchors: 2
child_links: 32
---

# Identity | Provisionar usuário para o Active Directory

---

O Identity permite que usuários criados dentro do serviço sejam provisionados em um domínio Active Directory vinculado ao contexto.

Usuários provisionados terão informações como nome, sobrenome, e-mail e grupos sincronizadas entre o Identity e o Active Directory, além de poderem utilizar a senha do AD para acessar o Identity.

Este recurso não se aplica aos usuários que foram importados do Active Directory para o Identity, pois estas contas já estão sincronizadas.

# Pré-requisitos

- [SmartSync](https://tdn.totvs.com/x/VIs0DQ)instalado, configurado e em execução.

- [Active Directory configurado](https://tdn.totvs.com/pages/viewpage.action?pageId=201739046) no contexto da empresa no Identity.

- Usuários que tenham sido cadastrados diretamente no Identity, sem ter sido importados do Active Directory.

# Provisionamento

O passo a passo para realizar o provisionamento de um usuário do Identity para o Active Directory pode ser consultado na documentação [Identity | Usuários](/pages/viewpage.action?pageId=311633463).


<!-- anchors: Identity|ProvisionarusuárioparaoActiveDirectory-Pré-requisitos, Identity|ProvisionarusuárioparaoActiveDirectory-Provisionamento -->
