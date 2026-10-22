---
title: "Plataforma ❙ Serviços"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=243660796"
scraped_at: "2026-03-09T05:05:59.229Z"
depth: 3
anchors: 13
child_links: 58
---

# Plataforma ❙ Serviços

# Falando de serviços...

---

Os serviços permitem acessar com segurança recursos e serviços externos à plataforma, utilizando os protocolos de autenticação OAuth 1, OAuth 2 e *Basic authentication*. Nesse recurso é possível cadastrar e configurar os serviços. Informações mais técnicas e detalhadas podem ser obtidas em [Autorização para client de Serviços REST](/pages/viewpage.action?pageId=239041233).

![](/download/attachments/243660796/nova%20lista%20de%20servi%C3%A7os.png?version=2&modificationDate=1750702685703&api=v2)

## Ver serviços

---

**01.** No menu principal, clique em ![](/download/attachments/243660796/%C3%ADcone-painel-de-controle.png?version=1&modificationDate=1750699952600&api=v2) **Painel de controle**.

**02**. Localize o agrupador **Desenvolvimento**.

**03**. Clique em ![](/download/attachments/243660796/%C3%ADcone-servi%C3%A7os.png?version=1&modificationDate=1750699763073&api=v2) **Serviços**.

**04.** Veja os serviços existentes.

## Filtrar por tipo

---

**01**. Selecione os tipos de serviços que deseja ver: **SOAP**, **JDBC** ou **REST**.

**02**. Os serviços correspondentes aos filtros escolhidos serão listados abaixo.

## Adicionar serviço

---

![](/plugins/servlet/confluence/placeholder/unknown-macro?name=tooltip&locale=en_US&version=2)

**01.** No menu principal, clique em ![](/download/attachments/243660796/%C3%ADcone-painel-de-controle.png?version=1&modificationDate=1750699952600&api=v2) **Painel de controle**.

**02**. Localize o agrupador **Desenvolvimento**.

**03**. Clique em ![](/download/attachments/243660796/%C3%ADcone-servi%C3%A7os.png?version=1&modificationDate=1750699763073&api=v2) **Serviços**.

**04.** Clique em **Novo serviço**.

**05**. Selecione o tipo de serviço que deseja adicionar: **SOAP**, **JDBC** ou **REST.**

**06.** Insira as informações solicitadas.

Os campos destacados com um asterisco (*) são de preenchimento obrigatório.

- [SOAP](#)
- [REST](#)
- [JDBC](#)

Ao selecionar o tipo **SOAP**, os campos a serem preenchidos são:

**Nome**Neste campo, adicione um nome para o serviço que deseja cadastrar.

**Descrição**Neste campo, adicione uma descrição para o serviço.

**URL**Neste campo, adicione a URL do *webservice* que deseja utilizar.

**Arquivo de binding**Somente será utilizado o arquivo de *binding *para serviços criados utilizando a API CXF. Para incluir, basta acionar **Escolher arquivo** no campo **Arquivo de Binding** e incluir.

Nota:

Mais detalhes referente a *binding*você encontra na nossa documentação técnica de [Integração com Aplicativos Externos](https://tdn.totvs.com/pages/releaseview.action?pageId=73082260#Integra%C3%A7%C3%A3ocomAplicativosExternos-ResolvendoconflitosutilizandoarquivosdebindJAXB).

**Package**Neste campo, informe o local onde as classes do serviço devem ser geradas.

EXEMPLO
com.fluig

Nota:

Se não for informando um local, as classes serão geradas dentro do local padrão indicado pelo wsdl do serviço.

**Tipo de autenticação**Neste campo, selecione o tipo de autenticação que deseja:

 - **None**: quando selecionado, determina que não haverá autenticação na requisição do serviço;

 - **Basic**: quando selecionado, determina que a autenticação será feita a partir de um usuário e uma senha enviados no *header* da requisição do serviço.

**Usuário**Neste campo, informe o usuário que será enviado no *header* da requisição do serviço para ser utilizado na autenticação. Esse campo somente é exibido ao selecionar o tipo de autenticação Basic.

**Senha**Neste campo, informe a senha do usuário que será enviada no *header* da requisição do serviço para ser utilizada na autenticação. Esse campo somente é exibido ao selecionar o tipo de autenticação Basic.

Ao selecionar o tipo **REST**, os campos a serem preenchidos são:

**Nome**Neste campo, adicione um nome para o serviço que deseja cadastrar.

**Descrição**Neste campo, adicione uma descrição para o serviço.

***Swagger***Neste campo, adicione um endereço para um arquivo no formato JSON.

Nota:

O campo *Swagger* só será preenchido quando o serviço criado for do tipo REST. Neste campo será incluído o caminho *swagger* da API que será utilizada. ![](/plugins/servlet/confluence/placeholder/unknown-macro?name=tooltip&locale=en_US&version=2)****

**Domínio**Neste campo, adicione o domínio do serviço.

**Tipo de autenticação**Neste campo, selecione o tipo de autenticação que deseja:

 - None;

 - Rest oauth 1;

 - Rest oauth 2;

 - Custom;

 - Basic.

Nota:

Para mais detalhes de como preencher corretamente as configurações de autenticação, acesse a documentação técnica [Fluig API](https://tdn.totvs.com/x/KAFlDw).

**URL para teste de serviço**Neste campo, insira o *endpoint* GET para teste de autenticação *provider*.

Ao selecionar o tipo **JDBC**, os campos a serem preenchidos são:

**Nome**Neste campo, adicione um nome para o serviço que deseja cadastrar.

**Descrição**Neste campo, adicione uma descrição para o serviço.

**Driver**
Neste campo, será selecionado o *driver* desejado: MySQL, SQL Server ou Oracle. Após a gravação do serviço, o *driver* não pode ser editado.

**URL**Neste campo, adicione a URL do *webservice* que deseja utilizar.

**Usuário**Usuário de acesso ao banco de dados.

**Senha**Senha de acesso ao banco de dados.

**07.** Após realizar todas as configurações necessárias, clique em **Salvar**.

## Editar serviço

---

**01.** No menu principal, clique em ![](/download/attachments/243660796/%C3%ADcone-painel-de-controle.png?version=1&modificationDate=1750699952600&api=v2) **Painel de controle**.

**02**. Localize o agrupador **Desenvolvimento**.

**03**. Clique em ![](/download/attachments/243660796/%C3%ADcone-servi%C3%A7os.png?version=1&modificationDate=1750699763073&api=v2) **Serviços**.

**04.** Localize o serviço a ser editado.

**05.** Clique em **Ações**![](/download/attachments/243660796/flaticon-more-vert%20%281%29.png?version=1&modificationDate=1703172090420&api=v2), localizado no lado direito.

**06.** Clique em **Editar**.

**06.** Altere as informações desejadas.

**07.** Clique em **Salvar** para confirmar as alterações.

## Testar serviço

---

**01.** No menu principal, clique em ![](/download/attachments/243660796/%C3%ADcone-painel-de-controle.png?version=1&modificationDate=1750699952600&api=v2) **Painel de controle**.

**02**. Localize o agrupador **Desenvolvimento**.

**03**. Clique em ![](/download/attachments/243660796/%C3%ADcone-servi%C3%A7os.png?version=1&modificationDate=1750699763073&api=v2) **Serviços**.

**04**. Localize o serviço a ser testado.

**05.** Clique em **Ações**![](/download/attachments/243660796/flaticon-more-vert%20%281%29.png?version=1&modificationDate=1703172090420&api=v2), localizado no lado direito.

**06.** Clique em **Testar Serviço**.

O teste só é realizado para serviços REST ou JDBC. A janela de Testar serviço irá apresentar um campo contendo o retorno do teste, em caso de sucesso ou erro.

## Configurar log

---

**01.** No menu principal, clique em ![](/download/attachments/243660796/%C3%ADcone-painel-de-controle.png?version=1&modificationDate=1750699952600&api=v2) **Painel de controle**.

**02**. Localize o agrupador **Desenvolvimento**.

**03**. Clique em ![](/download/attachments/243660796/%C3%ADcone-servi%C3%A7os.png?version=1&modificationDate=1750699763073&api=v2) **Serviços**.

**04**. Localize o serviço para o qual deseja configurar o *log*.

**05.** Clique em **Ações**![](/download/attachments/243660796/flaticon-more-vert%20%281%29.png?version=1&modificationDate=1703172090420&api=v2), localizado no lado direito.

**06**. Clique em **Configurar log***.*

**07.** Na janela apresentada, defina o botão como **ON** para ativar a configuração de *log*.

**08.** Após ativar o botão é preciso definir o tempo de expiração do *log*. Podendo ser definido em horas entre 1 hora até 24 horas.

**09.** Clique em **Salvar** para confirmar a configuração do *log*.

Com o *log* habilitado, será apresentada a quantidade de requisições realizadas pelo serviço específico.

## Excluir serviço

---

**01.** No menu principal, clique em ![](/download/attachments/243660796/%C3%ADcone-painel-de-controle.png?version=1&modificationDate=1750699952600&api=v2) **Painel de controle**.

**02**. Localize o agrupador **Desenvolvimento**.

**03**. Clique em ![](/download/attachments/243660796/%C3%ADcone-servi%C3%A7os.png?version=1&modificationDate=1750699763073&api=v2) **Serviços**.

**04**. Localize o serviço a ser excluído.

**05.** Clique em **Ações**![](/download/attachments/243660796/flaticon-more-vert%20%281%29.png?version=1&modificationDate=1703172090420&api=v2), localizado no lado direito.

**06.**Clique em**Excluir serviço**.

**07.** Na mensagem exibida, clique em **Sim, remover o serviço** para efetivar a remoção.

## Baixar log

---

**01.** No menu principal, clique em ![](/download/attachments/243660796/%C3%ADcone-painel-de-controle.png?version=1&modificationDate=1750699952600&api=v2) **Painel de controle**.

**02**. Localize o agrupador **Desenvolvimento**.

**03**. Clique em ![](/download/attachments/243660796/%C3%ADcone-servi%C3%A7os.png?version=1&modificationDate=1750699763073&api=v2) **Serviços**.

**04**. Clique em **Download do log**.

Ao clicar nessa opção, é possível baixar o arquivo de *log* do servidor, apresentando os erros que ocorreram na integração com algum sistema externo.

Fique atento!

Esta documentação é válida a partir da atualização **Voyager (2.0)**. Se você utiliza uma atualização anterior, ela pode conter informações diferentes das quais você vê na sua plataforma.


<!-- anchors: Plataforma❙Serviços-Falandodeserviços..., Plataforma❙Serviços-Verserviços, Plataforma❙Serviços-Filtrarportipo, Plataforma❙Serviços-Adicionarserviço, servico, servico-1, servico-2, servico-3, Plataforma❙Serviços-Editarserviço, Plataforma❙Serviços-Testarserviço, Plataforma❙Serviços-Configurarlog, Plataforma❙Serviços-Excluirserviço, Plataforma❙Serviços-Baixarlog -->
