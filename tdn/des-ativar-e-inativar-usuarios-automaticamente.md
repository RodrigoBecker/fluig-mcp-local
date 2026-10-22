---
title: "DES - Ativar e Inativar usuários automaticamente"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=240295690"
scraped_at: "2026-03-09T03:31:59.995Z"
depth: 2
anchors: 4
child_links: 38
---

# DES - Ativar e Inativar usuários automaticamente

# Índice

# Plataforma

**Produto:** TOTVS Fluig Plataforma

# Ocorrência

Nosso ambiente ultrapassou a quantidade de licenças de usuários, quando determinado usuário precisa se logar no sistema, outro usuário necessita ser desativado. Teria alguma customização para automatizar este processo de alguma forma?

# Solução

É possível utilizar o *webservice* ECMColleagueService para verificar o status do usuário (método getSimpleColleague), ativar um usuário com o metodo activateColleague deste mesmo *webservice* e desativar outro usuário através do método updateColleague. Veja a documentação destes métodos em [Utilização de Webservices](/pages/viewpage.action?pageId=73084007).

Você também pode utilizar as APIs para realizar este processo. Veja a documentação em [UserServiceRest](https://api.fluig.com/old/resource_UserServiceRest.html#path__social_user.html). Você pode buscar o usuário com a API /social/user/{genericId}, desativar o usuário com a API /social/user/disable/{genericId}, e ativar o usuário com a API /social/user/enable/{genericId}.

Lembrando que não é possível desativar usuários que possuam tarefas pendentes na plataforma.


<!-- anchors: DESAtivareInativarusuáriosautomaticamente-Índice, DESAtivareInativarusuáriosautomaticamente-Plataforma, DESAtivareInativarusuáriosautomaticamente-Ocorrência, DESAtivareInativarusuáriosautomaticamente-Solução -->
