---
title: "Identity | Mensagem \"Credenciais de acesso inválidas\" ao realizar login"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=817648697"
scraped_at: "2026-03-09T04:32:20.541Z"
depth: 3
anchors: 0
child_links: 57
---

# Identity | Mensagem "Credenciais de acesso inválidas" ao realizar login

**Dúvida**

Como proceder ao acessar o Identity e aparecer o erro "Credenciais de acesso inválidas"?

****

**Solução**

Esse erro ocorre ao realizar login no Identity. É um dos erros genéricos mais comuns e possui várias causas associadas. Listamos abaixo os principais motivos para que essa situação ocorra e seu, respectivos, modos de resolução:

**01. Senha do usuário incorreta:**

**a)** Caso a senha esteja incorreta, o usuário poderá fazer a redefinição, conforme a documentação: [Identity | Login | Recuperação de senha pessoal](https://tdn.totvs.com/display/fluig/Identity+%7C+Login#Identity|Login-Recupera%C3%A7%C3%A3odesenhapessoal)

**02. Usuário desativado no Identity:**

**a)** Se o usuário estiver **desativado** no Identity, também ocorrerá o erro de "Credenciais de acesso inválidas".

**b)** Se for o caso, o Administrador Corporativo deve ir em **Usuários**.

**c)** Pesquisar o e-mail do usuário na tela **Gerenciar usuários**.

**d)** Acessar o cadastro do usuário e clicar em **Mais Opções**.

**e)** Acionar **Ativar usuário**.

![](/download/attachments/817648697/image-2024-1-18_14-40-45.png?version=1&modificationDate=1705599645387&api=v2)

**03. Mecanismo de expiração de senha no Active Directory:**

**a)** O Identity respeita a configuração do Active Directory local e impede o login do usuário se a senha estiver expirada.

**b)** É necessário que o usuário defina uma nova senha no Active Directory local para efetuar o login. Saiba mais em: [Identity | Senha pessoal x senha de rede](https://tdn.totvs.com/display/fluig/Identity+%7C+Senha+pessoal#Identity|Senhapessoal-Senhapessoalxsenhaderede)

**04. Usuário preso na lista de aceitos do Active Directory:**

**a)**Com um usuário Administrador Corporativo no Identity, acesse a aba **Usuários**.

**b)** Pesquise o e-mail completo e verifique se aparece na lista de usuários do Identity **(Gerenciar usuários)**.

**c)** Caso o e-mail **NÃO**seja encontrado, acesse **Configurações**.

**d)** Clique em**Active Directory**. * *

**e)** Acione **Gerenciar Active Directories**.

![](/download/attachments/817648697/image-2024-1-18_14-45-54.png?version=1&modificationDate=1705599954417&api=v2)**f)** Busque pelo e-mail do usuário dentro do Active Directory.

**g)** Por vezes, ocorre **duplicidade** na base do Identity e o usuário não aparece na listagem principal, porém, dentro do Active Directory, consta como **aceito**.

![](/download/attachments/817648697/image-2024-1-18_14-48-55.png?version=1&modificationDate=1705600135620&api=v2)

**h)** Se isso ocorrer, solicite a alteração através de um ticket na [Central de Atendimento](https://centraldeatendimento.fluig.com/hc/pt-br), através das opções **Nova Solicitação** → **Suporte Técnico**. Assim, o time de suporte moverá o usuário para pendente através das APIs disponíveis.

**05. SmartSync e/ou Active Directory indisponíveis no contexto:**

**a)** Com um usuário Administrador Corporativo no Identity, acesse **Configurações**.

**b)**Clique em**Active Directory**. * *

**c)** Acione **Gerenciar Active Directories**.

**d)** Verifique se as colunas SmartSync e AD estão com status **Disponível**.

**e)** Quando o usuário estiver provisionado em um Active Directory via SmartSync, é necessário que esses servidores estejam disponíveis no Identity.

**f)**Caso o SmartSync ou Active Directory estiver**indisponível**, inicie-o localmente.

**g)** Enquanto o status **Disponível**não aparecer nas configurações, ninguém da empresa conseguirá logar com a senha de rede.

![](/download/attachments/817648697/image-2024-1-2_13-52-44.png?version=1&modificationDate=1704214364773&api=v2)

**06. Valor de objectGUID divergente entre o Active Directory local e o Identity:**

**a)**Com um usuário Administrador Corporativo no Identity, acesse a aba **Usuários**.

**b)**Pesquisar o e-mail do usuário na tela **Gerenciar usuários**.

**c)** Acessar o cadastro do usuário, ir nas**informações de provisionamento** e clicar em **Mais detalhes**.

![](/download/attachments/817648697/image-2024-1-18_14-57-53.png?version=1&modificationDate=1705600673940&api=v2)

**d)** Esse é o valor de **objectGUID**que está cadastrado no **Identity**.

**e)** Para encontrar o valor de**objectGUID** cadastrado no **Active Directory local**, acesse a documentação: [Identity | Como obter o objectGUID de um usuário no Active Directory?](/pages/viewpage.action?pageId=353286054)

**f)** Os valores de objectGUID tanto no Identity, como no Active Directory local, precisam ser**iguais**. Do contrário, é necessário forçar uma sincronização para atualizar esse valor. Saiba como em: [Identity | Como forçar sincronização entre o Active Directory e o Identity?](/pages/viewpage.action?pageId=817650295)
