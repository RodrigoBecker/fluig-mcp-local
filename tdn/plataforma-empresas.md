---
title: "Plataforma ❙ Empresas"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=235597350"
scraped_at: "2026-03-09T04:38:30.308Z"
depth: 3
anchors: 7
child_links: 56
---

# Plataforma ❙ Empresas

# Falando de empresas...

---

Esse recurso permite cadastrar e definir as características das empresas no TOTVS Fluig Plataforma, tais como: seu administrador, volume, se haverá ou não integração com o [TOTVS IDENTITY](/display/fluig/TOTVS+IDENTITY), entre outras informações.

O cadastro e a configuração das empresas são realizados pelo usuário **wcmadmin**.

- [Empresas](#)
- [Aba Geral](#)
- [Aba Administrador](#)
- [Aba Autenticação](#)
- [Aba E-mail](#)

![](/download/attachments/235597350/empresa1.png?version=4&modificationDate=1750444596380&api=v2)

![](/download/attachments/235597350/Aba%20Geral%20171.png?version=2&modificationDate=1750444699420&api=v2)

![](/download/attachments/235597350/Aba%20Administrador%20171.png?version=2&modificationDate=1750444747120&api=v2)

![](/download/attachments/235597350/Aba%20Autentica%C3%A7%C3%A3o%20171.png?version=5&modificationDate=1750444839010&api=v2)

![](/download/attachments/235597350/E-mail.png?version=2&modificationDate=1750444881757&api=v2)

## Acessar empresas

---

**01.** Acesse a plataforma com o usuário **wcmadmin**.

**02.** No menu principal, clique em ![](/download/attachments/235597350/%C3%ADcone-painel-de-controle.png?version=1&modificationDate=1750444134997&api=v2) **Painel de controle**.

**03**. Localize o agrupador **WCM**.

**04**. Clique em ![](/download/attachments/235597350/%C3%ADcone-empresas.png?version=1&modificationDate=1750444008797&api=v2) **Empresas**.

**05.** Veja as empresas existentes.

As empresas existentes na plataforma serão apresentadas na listagem.

## Adicionar empresa

---

**01.** Acesse a plataforma com o usuário **wcmadmin**.

**02.** No menu principal, clique em ![](/download/attachments/235597350/%C3%ADcone-painel-de-controle.png?version=1&modificationDate=1750444134997&api=v2) **Painel de controle**.

**03**. Localize o agrupador **WCM**.

**04**. Clique em ![](/download/attachments/235597350/%C3%ADcone-empresas.png?version=1&modificationDate=1750444008797&api=v2) **Empresas**.

**05.** Clique em **Adicionar**.

**06.** Na aba **Geral**, insira as informações solicitadas.

As informações solicitadas são:

**Identificador**Número de identificação da empresa.

**Código**Código de identificação da empresa. Não é permitido inserir acentuação e caracteres especiais.

**Descrição**Nome ou razão social da empresa.

**CNPJ**CNPJ da empresa.

**Diretório default**Localização física (caminho) do diretório que será utilizado como volume padrão da empresa (por exemplo, *D:\Volume*). Este diretório deve estar vazio, não deve ser utilizado em nenhuma outra empresa da plataforma, e não deve ser criado no diretório de instalação da sua plataforma. Seu nome não deve ter acentos e caracteres especiais.

Importante: se a plataforma estiver instalada em ambiente *cloud*, é necessário acionar o time de atendimento *cloud* para realizar essa configuração.

Deseja habilitar o encerramento de sessão no Identity?****Quando assinalado, determina que ao encerrar a sessão na plataforma também será encerrada a sessão no Identity.

**Deseja habilitar a geração de thumbnails?**Quando assinalado, determina que a geração de *thumbnails* (miniaturas) será habilitada na empresa.

**Deseja habilitar a remoção do volume ao excluir empresa?**Quando assinalado, determina que ao excluir uma empresa também será excluído o volume padrão utilizado por ela.

**07.** Clique em **Cadastrar dados adicionais** para incluir informações adicionais para a empresa, se desejado.

Na janela **Dados adicionais **os campos destacados com um asterisco (*) são de preenchimento obrigatório. 

As informações solicitadas são:

**Chave**Identificador do dado adicional que será relacionado à empresa.

**Valor**Valor do dado adicional que será relacionado à empresa.

Importante!

Se utilizar um valor do tipo **senha **recomendamos clicar no botão Esconder Senha (*hide password*) levando em consideração a Segurança da Informação. Utilizando este recurso, mesmo logado com usuário administrador e acessando os Dados Adicionais ou executando uma requisição REST a senha apresentada permanecerá em segredo.

Após preencher os campos, é necessário clicar em **Adicionar**e então em **Salvar **para que a informação seja vinculada à empresa. 

Para remover um dado adicional incluído, basta selecioná-lo e clicar em **Remover**.

**08.** Clique na aba **Administrador** e insira as informações solicitadas para o administrador da empresa.

As informações solicitadas são:

**E-mail***E-mail* do usuário que será o administrador da empresa na plataforma.

**Login**Usuário com o qual o administrador da empresa acessará a plataforma.

**Senha**Senha do usuário que será o administrador da empresa na plataforma.

**Confirmar senha**Confirmação da senha do usuário que será o administrador da empresa na plataforma.

**Nome**Nome do usuário que será o administrador da empresa.

**Sobrenome**Sobrenome do usuário que será o administrador da empresa na plataforma.

**09.** Clique na aba **E-mail**e insira as configurações de envio de e-mails específicas para a empresa em questão. Seguir as instruções de preenchimento conforme o item *Configuração de e-mail por empresa*da página* *[Configuração de envio de e-mail](/pages/viewpage.action?pageId=257623560).

**10.** Clique em **Salvar**.

## Editar empresa

---

**01.** Acesse a plataforma com o usuário **wcmadmin**.

**02.** No menu principal, clique em ![](/download/attachments/235597350/%C3%ADcone-painel-de-controle.png?version=1&modificationDate=1750444134997&api=v2) **Painel de controle**.

**03**. Localize o agrupador **WCM**.

**04**. Clique em ![](/download/attachments/235597350/%C3%ADcone-empresas.png?version=1&modificationDate=1750444008797&api=v2) **Empresas**.

**05.** Selecione a empresa a ser editada.

**06.** Clique em **Editar**.

**07.** Altere as informações desejadas na aba **Geral**.

Mais informações sobre os campos apresentados e que permitem alteração podem ser obtidas no item [Adicionar empresa](#Plataforma❙Empresas-Adicionarempresa).

**08.** Veja as informações da aba **Administrador**.

Na edição da empresa, a aba Administrador serve apenas para visualização. Caso seja necessário alterar alguma informação, é preciso acessar a plataforma com o login de um usuário com papel de administrador, e seguir as instruções da tela de [Usuários](/pages/viewpage.action?pageId=234455411). 

Se o usuário não faz mais parte da empresa, basta removê-lo do [papel](/pages/viewpage.action?pageId=234455398)de administrador e desativá-lo do sistema. Assim que este usuário deixar de ter o papel, ele não aparecerá mais nesta tela, e será apresentado outro usuário administrador em seu lugar.

**09.** Clique na aba **Autenticação** e defina as informações solicitadas.

As informações solicitadas são:

**Deseja habilitar o acesso com Identity?**Quando assinalado, determina que a integração da plataforma com o TOTVS Identity está ativa.

**URL**URL do Identity ao qual a plataforma será integrada. Esse campo somente é habilitado ao assinalar a opção **Deseja habilitar o acesso com Identity?**.

**Token**Token de configuração da plataforma obtido pelo administrador da empresa no Identity. Esse campo somente é habilitado ao assinalar a opção **Deseja habilitar o acesso com Identity?**.

**Deseja habilitar o provisionamento Just in time?**Quando assinalado, determina que qualquer usuário do Identity que se autenticar na plataforma será criado nela caso ainda não exista.

**10.** Clique em **Ações** e efetue as ações desejadas.

As ações disponíveis são:

- **Testar conexão**: quando acionada, permite conectar e obter as configurações no servidor do Identity com os dados informados nos campos URL e *Token*. É apresentada uma mensagem informando se a conexão foi realizada com sucesso ou se ocorreu alguma inconsistência.

- **Enviar usuários**: quando acionada, permite enviar os usuários existente na plataforma para o Identity, criando o vínculo entre eles. Essa opção somente é habilitada quando a autenticação pelo Identity está ativa.

- **Exportar log de envio**: quando acionada, permite gerar um arquivo XLS contendo o *log* do envio dos usuários existentes na plataforma para o Identity. Essa opção somente é habilitada quando a autenticação pelo Identity está ativa e foi efetuado o envio dos usuários existentes na plataforma para o Identity.

**11.** Clique em **Parâmetros do Identity** para ver os dados de configuração importados do TOTVS Identity ao habilitar a integração, se desejado.

**12.** Clique na aba **E-mail **e insira as configurações de envio de e-mails específicas para a empresa em questão. Seguir as instruções de preenchimento conforme o item *Configuração de e-mail por empresa *da página* *[Configuração de envio de e-mail](/pages/viewpage.action?pageId=257623560).

**13.** Clique em **Salvar**.

## Desativar empresa

---

**01.** Acesse a plataforma com o usuário **wcmadmin**.

**02.** No menu principal, clique em ![](/download/attachments/235597350/%C3%ADcone-painel-de-controle.png?version=1&modificationDate=1750444134997&api=v2) **Painel de controle**.

**03**. Localize o agrupador **WCM**.

**04**. Clique em ![](/download/attachments/235597350/%C3%ADcone-empresas.png?version=1&modificationDate=1750444008797&api=v2) **Empresas**.

**05.** Selecione a empresa a ser desativada.

**06**. Clique em **Desativar**.

**07**. Informe o código da empresa a ser desativada.

Atenção!

O processo de desativação da empresa é**irreversível**, portanto não será possível recuperá-la, nem os dados referentes aos usuários, processos, comunidades, etc. existentes na empresa desativada.

**08**. Clique em **Desativar**

A licença do administrador cadastrado durante a criação da empresa não será mais consumida pelo servidor de licenças quando a empresa for desativada.

## Alterar administrador da empresa

---

No campo **E-mail**da aba **Administrador** irá apenas listar um usuário administrador existente na plataforma. O que define um usuário administrador na plataforma é o papel ao qual ele está atribuído, que no caso é o papel **admin**. A empresa pode ter diversos usuários administradores, mas somente um deles será exibido nesse campo informativo. Para que um determinado usuário deixe de ser administrador, você deve removê-lo do papel **admin**. Para mais informações, acesse a documentação de [Papéis](/pages/viewpage.action?pageId=234455398).

**oculto**

Essa informação é apresentada no artigo [https://centraldeatendimento.fluig.com/hc/pt-br/articles/360026152753](https://centraldeatendimento.fluig.com/hc/pt-br/articles/360026152753)
Se houver alteração, lembrar de atualizar esse artigo.

Fique atento!

Esta documentação é válida a partir da atualização **Voyager (2.0)**. Se você utiliza uma atualização anterior, ela pode conter informações diferentes das quais você vê na sua plataforma.


<!-- anchors: Plataforma❙Empresas-Falandodeempresas..., Empresas, Plataforma❙Empresas-Acessarempresas, Plataforma❙Empresas-Adicionarempresa, Plataforma❙Empresas-Editarempresa, Plataforma❙Empresas-Desativarempresa, Plataforma❙Empresas-Alteraradministradordaempresa -->
