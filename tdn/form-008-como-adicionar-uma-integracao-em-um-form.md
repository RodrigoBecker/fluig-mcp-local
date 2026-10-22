---
title: "FORM 008 - Como adicionar uma integração em um Form?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=439708944"
scraped_at: "2026-03-09T04:48:16.745Z"
depth: 3
anchors: 6
child_links: 40
---

# FORM 008 - Como adicionar uma integração em um Form?

# Índice

# Plataforma

**Produto:  **fluig

**Versão:** 1.6.0 e anteriores

Abaixo você acompanha o passo a passo sobre como adicionar uma integração ao seu Form. A integração é um recurso que precisa de pré configurações em outros recursos da plataforma pra que tenha um funcionamento pleno.

### Cadastrando um serviço

---

Os passos para o cadastro de serviço serão vistos logo abaixo:

Para saber mais sobre como cadastrar Serviços confira nossa documentação [aqui](https://tdn.totvs.com/x/-PeFDg).

**01.** Acionar o **Painel de Controle** no menu principal da plataforma, logo depois verificar o agrupador **Desenvolvimento** e acionar o recurso **Serviços**.

**02.** Acionar Novo serviço, e selecionar o tipo de serviço desejado. Dentre eles temos: SOAP, REST e JDBC.

**03.** Inserir as informações solicitadas para cadastro do serviço. As informações solicitadas são:

- **Nome:** adicione um nome para o serviço que deseja cadastrar;
- **Descrição:** adicione uma descrição para o serviço;
- **URL:** adicione a URL do *webservice* que deseja utilizar.
- **Arquivo de binding:** Somente será utilizado o arquivo de *binding* para serviços criados utilizando a API CXF. Para incluir, basta acionar **Escolher arquivo** e selecioná-lo no desktop.

**04.** Acionar **Salvar**.

### Cadastrando uma operação

---

Após cadastrar o serviço é a hora de cadastrar a operação deste serviço. Acompanhe nos passos abaixo:

Para saber mais sobre como cadastrar Operações confira nossa documentação [aqui](https://tdn.totvs.com/x/gFV-Fw).

**01.** Acionar o **Painel de Controle** no menu principal da plataforma, logo depois verificar o agrupador **Desenvolvimento** e acionar o recurso **Operações**.

**02.** Acionar **Nova operação** e inserir as informações solicitadas:

- **Nome:** adicione um nome para a operação que deseja cadastrar;
- **Descrição:** adicione uma descrição para a operação que deseja cadastrar;
- **Serviço:** neste campo, escolha o serviço cadastrado anteriormente;
- **Operação do serviço:** escolha a operação no serviço que deseja;
- **Parâmetros de entrada:** os parâmetros variam de acordo com a Operação do serviço escolhida.
- **Parâmetros de saída:**os parâmetros variam de acordo com a Operação do serviço escolhida.

**03.** Acionar **Salvar**.

### Adicionar a integração ao Form

---

Apos o cadastro do Serviço e o cadastro da Operação será a hora de adicionar esta integração ao Form que está sendo criado. Acompanhe nos passos abaixo:

**01.** Acionar a configuração do formulário por meio do ícone ![](/download/attachments/439708944/engrenagem.png?version=1&modificationDate=1543863393057&api=v2) e acionar o recurso **Integrações externas**e acionar**Adicionar**.

**02.** Será apresentada a tela para a seleção da operação, neste momento, todas as operações já cadastradas na plataforma na mesma empresa que o form está sendo criado serão apresentadas para seleção. Escolher a operação desejada e acionar **Próximo**.

**03.** Selecionar os campos de entrada que serão enviados para a integração.

Os campos de entrada são os valores que são enviados para a integração. Eles são as informações necessárias para que a integração seja executada com sucesso.

Por exemplo, para uma operação cuja ação é iniciar um processo, é necessário informar o ID do processo e entre outras informações. Cada operação terá seus próprios campos de entrada variando conforme a operação utilizada e podem ser atrelados à campos do seu formulário ou informado valores fixos.

- [Veja um exemplo de como adicionar uma integração ao Form](#)

![](/download/attachments/439708944/Exemplo%20para%20adicionar%20integra%C3%A7%C3%A3o.gif?version=1&modificationDate=1544203012583&api=v2)

**04.** Após definir os campos de entrada acionar**Próximo.**

**05.** Após configurar os campos de entrada. É necessário definir as mensagens de alerta:

- **Usar mensagem de alerta padrão?**

Ao desabilitar este recurso é possível definir uma mensagem personalizada para que seja informado ao usuário que a integração não foi realizada com sucesso ou que ocorreu algum erro inesperado. Habilitando o recurso a mensagem padrão será apresentada quando ocorrer alguma inconsistência na integração realizada.

- **Usar mensagem de acompanhamento padrão?**

Ao desabilitar este recurso é possível definir uma mensagem personalizada para que o usuário possa acompanhar a execução da integração caso ela demore mais que o esperado para ser executada.

**06.** Depois de definir as mensagens acionar **Próximo**.

**07.** Conferir o resumo apresentado das configurações dos campos e das mensagem, se tudo estiver correto, acionar **Confirmar**.

**08.** O Form será apresentado novamente com a integração já adicionada à ele.


<!-- anchors: FORM008ComoadicionarumaintegraçãoemumForm?-Índice, FORM008ComoadicionarumaintegraçãoemumForm?-Plataforma, FORM008ComoadicionarumaintegraçãoemumForm?-Cadastrandoumserviço, FORM008ComoadicionarumaintegraçãoemumForm?-Cadastrandoumaoperação, FORM008ComoadicionarumaintegraçãoemumForm?-AdicionaraintegraçãoaoForm, 1 -->
