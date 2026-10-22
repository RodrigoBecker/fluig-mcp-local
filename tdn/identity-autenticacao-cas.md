---
title: "Identity | Autenticação CAS"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=235337765"
scraped_at: "2026-03-09T04:22:06.370Z"
depth: 3
anchors: 4
child_links: 45
---

# Identity | Autenticação CAS

# Falando de autenticação CAS...

---

Para empresas que possuem um servidor de autenticação CAS *(Centralized Authentication System)*, o Identity permite utilizar o serviço existente de autenticação para autorizar o acesso aos seus recursos. O objetivo é permitir que um servidor CAS seja o responsável pela autenticação e provisionamento de usuários ao Identity.

Nas empresas em que autenticação CAS tenha sido habilitada, o recurso de [Autenticação multifator](https://tdn.totvs.com/x/J5LpEg) não poderá ser utilizado.

![](/download/attachments/235337765/image2023-6-19_13-43-24.png?version=1&modificationDate=1687193039077&api=v2)

## Habilitar autenticação CAS

---

 **Assista ao vídeo**

Para realizar essa configuração, é necessário possuir um servidor CAS instalado e configurado.

**01. **Acione o ícone **Configurações **no canto superior direito e selecione a opção **Segurança**. 

**02**. Acesse o recurso **Autenticação CAS.** 

**03**. Marque o recurso **Habilitar autenticação CAS** para definir se será habilitada a autenticação CAS.

**04.** Caso a autenticação CAS tenha sido habilitada, preencha os campos abaixo.

**Selecione o servidor CAS**
Informe a versão do protocolo a ser utilizada (CAS 2.0 ou CAS 3.0).

**Selecione o Tipo de validação**Informe se o fluxo utilizado será Proxy Validade ou Service Validate.****

**URL do serviço CAS de sua empresa**Informe a url do serviço CAS de sua empresa.

**Campo de seu CAS Response que representa o nome do usuário**Informe o campo que representa o nome do usuário no CAS Response.

**Campo de seu CAS Response que representa o sobrenome do usuário**Informe o campo que representa o sobrenome do usuário no CAS Response.

**Campo de seu CAS Response que representa o e-mail do usuário**Informe o campo que representa o e-mail do usuário no CAS Response.

**O sobrenome do usuário está informado no campo nome**Ao assinalar esta opção, o campo do sobrenome do usuário não ficará visível em tela, podendo ser informado direto pelo campo nome. 

**04.** Após o preenchimento dos campos, acione **Salvar** para confirmar as informações.

Caso haja algum erro relacionado ao redirecionamento do IDM após o login CAS com sucesso, será apresentado uma tela reportando a falha no login. Por exemplo, quando o e-mail principal não estiver corretamente cadastrado no parâmetro de habilitação do CAS, será apresentada a tela demonstrando o motivo da falha no login.******[**Veja a****i****magem**](/download/attachments/235337765/image-2022-05-26-14-57-30-860.png?version=1&modificationDate=1654009732920&api=v2)

Após concluir a configuração, ao abrir a página de login do Identity, a tela do CAS será apresentada no lugar da tela padrão do TOTVS Identity.  **[**Veja a****i****magem**](/download/attachments/235337765/cas_login.png?version=1&modificationDate=1460656254000&api=v2)

Ao efetuar *logoff*, dependendo da configuração do servidor CAS, o usuário será redirecionado para a página de sessão encerrada do CAS.  **[**Veja a****i****magem**](/download/attachments/235337765/cas_logout.png?version=1&modificationDate=1460656241000&api=v2)

## JSON do CAS Response

---

Para que a integração com o CAS seja feita com sucesso, é necessário que o JSON encodado no CAS Response esteja no seguinte formato:

[?](#)

| `{````"rgUf": "SC",````"localidade": "JOINVILLE",````"matricula": "123456",````"nome": "Teste",````"emailCorporativo": "teste@mail.com",````"sobrenome": "Teste,````"nomeComum": "Teste Teste"``}` |
| --- |

Sendo os valores representativos:

| Campo | Descrição |
| --- | --- |
| Campo | Descrição |
| rgUf | União federativa, estado |
| localidade | Cidade de localização |
| matricula | Identificador para o servidor CAS |
| emailCorporativo | E-mail do usuário / Login para o Identity |
| nome | Nome do Usuário |
| sobrenome | Sobrenome do Usuário |
| nomeComum | Nome para o sistema |


<!-- anchors: Identity|AutenticaçãoCAS-FalandodeautenticaçãoCAS..., Identity|AutenticaçãoCAS-HabilitarautenticaçãoCAS, Identity|AutenticaçãoCAS-JSONdoCASResponse, highlighter_820018 -->
