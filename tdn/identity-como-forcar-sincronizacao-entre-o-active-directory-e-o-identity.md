---
title: "Identity | Como forçar sincronização entre o Active Directory e o Identity?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=817650295"
scraped_at: "2026-03-09T04:32:11.130Z"
depth: 3
anchors: 0
child_links: 55
---

# Identity | Como forçar sincronização entre o Active Directory e o Identity?

**Dúvida**

Como forçar uma sincronização entre o *Active Directory* (*AD*) e o*Identity*?

** **

**Solução**

As sincronizações entre o *Active Directory* (*AD*) e o *Identity*via *SmartSync* só ocorrem quando há alguma alteração no cadastro do usuário. Assim, para **forçar uma sincronização**, é necessário:

**01.**Acesse o *Identity* com um usuário administrador, acione a aba **Usuários**e pesquise pelo e-mail do(s) usuário(s) que se deseja alterar:

![](/download/attachments/817650295/image-2024-6-27_11-26-6.png?version=1&modificationDate=1719498366327&api=v2)

**02.** Exclua o(s) usuário(s) com problema cadastrado(s) no Identity:

![](/download/attachments/817650295/image-2024-6-27_11-32-14.png?version=1&modificationDate=1719498734847&api=v2)

**03.** Abra o cadastro do(s) usuário(s) no **Active Directory local**;

**04**. Adicione uma letra a mais no nome do(s) usuário(s);

**05.** Clique em **"Salvar"**;

**06.** Volte no cadastro do(s) usuário(s) e exclua essa letra a mais;

**07.**Clique em **"Salvar"** novamente;

**08.** No **Identity**, acesse a lista de usuários **rejeitados/pendentes** e aceite o usuário novamente.

Com essa ação, atualizará o status do(s) usuário(s) no cadastro do Identity e ele(s) poderá(ão) logar novamente.

A alteração deve ser realizada sempre no **nome** **(name/firstName)** do(s) usuário(s) e nunca no nome para exibição (*displayName*). Saiba mais em:

- [Identity | Por que um usuário do Active Directory não está sendo importado pelo SmartSync?](/pages/viewpage.action?pageId=329032272)

![](https://totvssuporte.zendesk.com/attachments/token/8GR5HtxIxQr7cKVX2HL4xpB01/?name=inline762386398.png)​​

Caso, por algum motivo, o(s) usuário(s) continue(m) apresentando a mesma situação, nos envie a pasta de logs do* SmartSync *disponível no caminho:

- *C:\ProgramData\SmartSync\logs*

**Observação:** A pasta *ProgramData* é uma pasta restrita, então, é necessário habilitar a opção de exibição de pastas omitidas na configuração da pasta C.
