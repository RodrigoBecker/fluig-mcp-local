---
title: "Identity | Política de senha"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=801329923"
scraped_at: "2026-03-09T05:02:41.837Z"
depth: 3
anchors: 4
child_links: 45
---

# Identity | Política de senha

# Falando de política de senha...

---

Nessa tela é realizada a configuração da complexidade de senha exigida para os usuários da empresa no Identity. O administrador pode escolher se os usuários devem configurar suas senhas usando os requisitos de senha padrão, ou se uma política de senha específica deve ser definida, e nessa política podem ser configurados requisitos como a quantidade de caracteres, tempo de expiração, senhas proibidas, entre outras configurações. 

![](/download/attachments/801329923/Pol%C3%ADtica%20de%20senha.png?version=1&modificationDate=1699464550747&api=v2)

## Acessar política de senha

---

**01. **Acione o ícone **Configurações **no canto superior direito e selecione a opção **Segurança**. 

**02**. Acesse o recurso **Política de senha**.

É possível escolher se deve ser aplicada a política de senha padrão ou uma política personalizada.

Importante

Por padrão, a senha precisa atender aos seguintes requisitos:

- ser composta por no mínimo **8**caracteres;
- conter pelo menos uma letra minúscula (**a-z**);
- conter pelo menos uma letra maiúscula (**A-Z**);
- conter pelo menos um número (**0-9**);
- conter pelo menos um caractere especial (**! @ # &** etc.).

### Personalizar a política de senha

---

**01**. Na tela de Política de senha, marque a opção **Personalizado**.

Ao fazer isso, os campos das abas **Complexidade de senha** e **Senhas proibidas** são automaticamente habilitados. Conforme as opções de tela forem modificadas, o indicativo de classificação da senha também se modifica, desde a senha muito fraca até a muito forte.

**02.** Configure os requisitos de senha na aba **Complexidade de senha**.

**Tamanho mínimo da senha**
Indica o número mínimo de caracteres exigidos para a senha. É possível informar um número entre 8 a 99 como valor mínimo de caracteres a ser preenchido.

**Requisitos de senha**
Indica os caracteres que devem ser informados para que a senha seja considerada válida. As opções a serem configuradas na política são:

- Conter pelo menos um número
- Conter pelo menos um caractere especial
- Conter pelo menos uma letra maiúscula
- Conter pelo menos uma letra minúscula

**Segurança de senha**
São oferecidas algumas configurações de senha para segurança adicional, sendo elas:

- **Prazo de validade para senha**: Quando habilitado, os usuários devem redefinir a senha no prazo de dias determinado pelo administrador. Por padrão, a cada 90 dias.
- **Disparar e-mail de notificação aos usuários:** Quando habilitado, com 5 dias de antecedência os usuários recebem um e-mail de notificação sobre a expiração da senha.
- **Reutilização de senhas**: Quando habilitado, os usuários só podem utilizar a mesma senha após a quantidade determinada de trocas ser efetuada.
- **Tentativas de acesso**: Quando esse parâmetro estiver habilitado, os usuários que ultrapassem a quantidade estabelecida de tentativas de login são bloqueados, até serem novamente ativados por um usuário administrador. Para mais detalhes, consulte a documentação de [Usuários](/pages/viewpage.action?pageId=311633463).

Dica:

É possível customizar os e-mails enviados nos casos de expiração de senha e bloqueio de usuário. Para mais detalhes, consulte a documentação de [Notificações via e-mail](/pages/viewpage.action?pageId=273980172).

**03.** Configure as combinações que não podem ser informadas como senha na aba **Senhas proibidas**.

**Verificar se a senha**
São oferecidas algumas opções de bloqueio de combinação de caracteres. São elas:

- **Contém mais de 3 números sequenciais:**Quando habilitado, não deixa com que o usuário crie senhas com mais de três números consecutivos (em sequência crescente ou decrescente).
- **Contém mais de 3 letras sequenciais:** Quando habilitado, não deixa com que o usuário crie senhas com mais de três letras consecutivas em sequência.
- **Contém o nome do usuário**: Quando habilitado, não permite que o usuário crie sua senha com o próprio nome de usuário.
- **Contém o e-mail do usuário**: Quando habilitado, não permite que o usuário crie sua senha com o próprio e-mail.

**Listagem de senhas proibidas**Quando habilitado, os usuários não podem utilizar as senhas indicadas como proibidas. Podem ser incluídas quantas senhas forem necessárias, utilizando o separador "," (vírgula).

As senhas proibidas são apresentadas em uma listagem ao final da tela. Para excluir as combinações, utilize o botão **Excluir**![](/download/attachments/801329923/flaticon-trash.png?version=1&modificationDate=1699471457677&api=v2).

Importante!

A complexidade de senha é definida por empresa, mas a senha pessoal é única para cada usuário. Quando o usuário for resetar sua senha, precisa definir uma senha que atenda aos critérios de todas as empresas onde está cadastrado.

A cada tentativa de autenticação realizada pelos usuários, o Identity verifica se a senha atual está atendendo a todos os critérios estabelecidos, e caso não esteja, o usuário é direcionado para a alteração de senha.

### Restaurar a política de senha padrão

---

******01**. Na tela de Política de senha, marque a opção **Política de senha padrão Identity**.

**02**. Na mensagem de confirmação, acione **Descartar**.

Ao realizar essa ação, as políticas de senha da empresa são alteradas para o padrão do Identity, e todas as configurações personalizadas serão descartadas.


<!-- anchors: Identity|Políticadesenha-Falandodepolíticadesenha..., Identity|Políticadesenha-Acessarpolíticadesenha, Identity|Políticadesenha-Personalizarapolíticadesenha, Identity|Políticadesenha-Restaurarapolíticadesenhapadrão -->
