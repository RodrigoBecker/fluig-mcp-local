---
title: "Identity | Por que os usuários não estão recebendo e-mails de convite do Identity?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=201744095"
scraped_at: "2026-03-09T04:32:39.218Z"
depth: 3
anchors: 0
child_links: 56
---

# Identity | Por que os usuários não estão recebendo e-mails de convite do Identity?

**Ocorrência**

Ao incluir novos usuários na empresa, o Identity deveria enviar emails de convite para estas contas, porém os usuários não estão recebendo as mensagens.

**Solução**

Para verificar se as mensagens estão sendo retidas pela infraestrutura de rede da empresa, deve ser realizado um teste de envio de e-mail.

- Acessar o contexto da empresa no Identity com o administrador.

- Acionar **Configurações **e acionar a opção [**Notificações via E-mail**](/pages/viewpage.action?pageId=273980172).

- Acionar **Enviar E-mail** localizado no final da página.

- Informar o endereço de e-mail para onde a mensagem de teste deverá ser enviada.

Recomenda-se utilizar o procedimento acima para realizar, pelo menos, dois testes: o primeiro com um endereço de e-mail corporativo e o segundo com um e-mail pessoal (Gmail, Outlook, Yahoo), externo à empresa.

Caso a mensagem não seja recebida pelo e-mail corporativo, mas seja entregue no pessoal, deve-se entrar em contato com a equipe de infraestrutura interna de rede da companhia para verificar o motivo do bloqueio.

Importante

O e-mail recebido deve ser usado exclusivamente para validar o envio de mensagens. O usuário **não deve** tentar registrar-se no contexto com o *link* recebido no e-mail de teste.
