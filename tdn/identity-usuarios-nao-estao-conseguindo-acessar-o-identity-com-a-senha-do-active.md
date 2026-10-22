---
title: "Identity | Usuários não estão conseguindo acessar o Identity com a senha do Active Directory. Como resolver?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=201743983"
scraped_at: "2026-03-09T04:35:23.023Z"
depth: 3
anchors: 0
child_links: 55
---

# Identity | Usuários não estão conseguindo acessar o Identity com a senha do Active Directory. Como resolver?

**Dúvida**

O contexto do Identity está integrado ao Active Directory (AD) e meus usuários sempre utilizam a senha do AD para se autenticar, porém hoje não estão conseguindo. O que pode estar acontecendo?

**Solução**

O problema deve estar na conexão entre o Identity e o Active Directory, que é realizada através do SmartSync.

Para verificar o status da conexão, siga os seguintes passos:

**01**. Acessar o contexto no Identity com o administrador.

**02**. Acionar o ícone **Configurações **![](/download/attachments/201743983/flaticon-settings.png?version=1&modificationDate=1584021009973&api=v2) no canto superior direito.

**03**. Acessar a opção [**Active Directory**](https://tdn.totvs.com/x/AptUE).

**04**. Acionar o *link*[**Gerenciar Active Diretories**](https://tdn.totvs.com/x/W55UE).

**05**. Acionar **Atualizar listagem**.

**06**. Verifique o status exibido ao lado dos ADs vinculados.

Se o status do diretório não for **Disponível** tanto para o **SmartSync** quanto para **AD**, entre em contato com a sua equipe de infraestrutura interna para verificar se o servidor em que o SmartSync e/ou o Active Directory está instalado está indisponível. Em caso de dúvidas, consulte a documentação de configuração do [SmartSync](https://tdn.totvs.com/x/VIs0DQ).

Caso o Active Directory esteja indisponível, os usuários podem utilizar a [Senha Pessoal](https://tdn.totvs.com/x/MY1hE), própria do Identity, como paliativo para realizar o acesso.
