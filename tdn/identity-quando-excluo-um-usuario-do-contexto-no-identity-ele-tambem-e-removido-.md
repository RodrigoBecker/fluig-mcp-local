---
title: "Identity | Quando excluo um usuário do contexto no Identity, ele também é removido do ERP?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=354451822"
scraped_at: "2026-03-09T04:32:34.849Z"
depth: 3
anchors: 0
child_links: 57
---

# Identity | Quando excluo um usuário do contexto no Identity, ele também é removido do ERP?

**Ocorrência**

Nosso ambiente possui a [integração entre a Linha RM e o Identity](https://tdn.totvs.com/display/LRM/Identity+-+Linha+RM) configurada. Quando um usuário é desprovisionado do aplicativo do RM no Identity, ele também é removido do ERP. Porém, se o usuário é excluído ou desativado do Identity, essa ação não é reproduzida no ERP.

Isso é um erro na integração? Esse comportamento é o mesmo para todas as integrações entre o Identity e os ERPs TOTVS?

**Causa**

Este sempre foi o comportamento padrão da integração entre todos os ERPs TOTVS (como RM, Protheus, Datasul, etc.) e o Identity. As ações de criação ou exclusão de usuários no ERP são sincronizadas apenas quando executadas dentro do próprio aplicativo do ERP no Identity.

O exemplo abaixo utiliza a Linha RM como base, mas a mesma regra se aplica a todos os ERPs TOTVS.****

**Criação:** Quando o aplicativo do RM está com o Modo PULL ativado e é [atribuído ao usuário](https://tdn.totvs.com/pages/viewpage.action?pageId=317306108#GerenciarUsu%C3%A1rio-Atribuiraplicativosaousu%C3%A1rio), o Identity disponibiliza um comando REST para provisionamento em uma fila. Essa fila deverá ser lida pelo ERP para que o usuário seja provisionado no RM.

**Exclusão:** Quando o usuário é desatrelado do aplicativo RM e o Modo PULL está ativado, o Identity envia diretamente ao ERP uma requisição REST solicitando que o usuário seja desprovisionado.

Aviso

Se o ERP não estiver disponível na internet para receber a requisição de desprovisionamento, o comando enviado pelo Identity não é recebido, nem executado.

Essa integração não ocorre com ações realizadas no restante do contexto do Identity, como a desativação ou exclusão do usuário do contexto. Contudo, vale notar que um usuário que foi desativado do Identity não conseguirá acessar sua conta no contexto e, consequentemente, nem o aplicativo do ERP.

**Solução**

Para excluir o usuário do ERP através do Identity, basta [remover o aplicativo do ERP](https://tdn.totvs.com/pages/viewpage.action?pageId=317306108#GerenciarUsu%C3%A1rio-Gerenciarosaplicativosdousu%C3%A1rio)da lista de aplicativos atribuídos ao usuário.
