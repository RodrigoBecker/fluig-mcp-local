---
title: "Plataforma ❙ Operações"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=394220928"
scraped_at: "2026-03-09T04:04:50.670Z"
depth: 2
anchors: 8
child_links: 51
---

# Plataforma ❙ Operações

# Falando de operações...

---

As operações são um pré-cadastro para simplificar o uso de uma operação/método de um serviço cadastrado. Esse recurso oferece a possibilidade de gerenciar as operações de serviços, para que outros usuários possam utilizar integrações externas. As operações são utilizadas, por exemplo, na configuração de um Forms Beta, incluindo a operação como integração externa.

Por enquanto, o cadastro de operações é permitido para serviços SOAP ou REST com swagger.

![](/download/attachments/394220928/Opera%C3%A7%C3%B5es.png?version=4&modificationDate=1750705741367&api=v2)

## Ver operações

---

**01.** No menu principal, clique em ![](/download/attachments/394220928/%C3%ADcone-painel-de-controle.png?version=1&modificationDate=1750703494153&api=v2) **Painel de controle**.

**02**. Localize o agrupador **Desenvolvimento**.

**03**. Clique em ![](/download/attachments/394220928/%C3%ADcone-opera%C3%A7%C3%B5es.png?version=1&modificationDate=1750703378713&api=v2) **Operações**.

**04.** Veja as operações existentes.

## Adicionar operação

---

**01.** No menu principal, clique em ![](/download/attachments/394220928/%C3%ADcone-painel-de-controle.png?version=1&modificationDate=1750703494153&api=v2) **Painel de controle**.

**02**. Localize o agrupador **Desenvolvimento**.

**03**. Clique em ![](/download/attachments/394220928/%C3%ADcone-opera%C3%A7%C3%B5es.png?version=1&modificationDate=1750703378713&api=v2) **Operações**.

**04.** Clique em **Nova operação.**

**05.** Insira as informações necessárias.

Os campos destacados com um asterisco (*) são de preenchimento obrigatório.

**Código** Insira o código para a operação.

**Nome**Adicione um nome para a operação.

**Serviço**Selecione****o [serviço](/pages/viewpage.action?pageId=243660796)(SOAP ou REST com swagger) que será utilizado na operação.

- [SOAP](#)
- [REST](#)

Ao selecionar um serviço do tipo **SOAP**, preencha os seguintes campos:

**Operação**Ao selecionar o ícone de lupa, permitirá selecionar uma das operações disponíveis. As operações estarão listadas por Nome e *PortType*.

**Configurar**
Nas configurações da operação selecionada, podem ser configuradas as Propriedades, SOAP *Headers* e Tratamento retorno.

**Propriedades**

 - Autenticação Básica - selecionar se a autenticação for necessária, nesse caso será requisitado usuário e senha.

   - SSL - habilitar quando o serviço SOAP exigir utilização de SSL (camada extra de segurança).

   - Desabilitar *Chunking* - desabilitar o envio do envelope SOAP inteiro.

   - Listar mensagens SOAP - habilitar para mostrar as mensagens de envio e recebimento no log.

   - Tempo de resposta - habilitar para mostrar o tempo que a requisição aguarda pela resposta.

**SOAP Headers**Permite adicionar um *header*(cabeçalho).

**Tratamento Retorno**

 - ****Extrair resultado - permite selecionar esta opção para extrair um relatório em formato XML e incluir uma tag.

Clique em **Salvar** para concluir a configuração.

Ao selecionar o tipo de serviço **REST**, preencha os seguintes campos:

**Operação**Ao selecionar o ícone de lupa, permitirá selecionar uma das operações disponíveis. As operações estarão listadas por Nome, Método(GET) e API.

**Configurar**Nas configurações da operação selecionada, podem ser configuradas as Propriedades, *Headers* e Tratamento retorno.

**Propriedades**

 - SSL - habilitar quando o serviço exigir utilização de SSL (camada extra de segurança).

   - Listar mensagens - habilitar para mostrar as mensagens de envio e recebimento no log.

   - Tempo de resposta - habilitar para mostrar o tempo que a requisição aguarda pela resposta.

***Headers***

Permite adicionar um *header*(cabeçalho).

**Tratamento Retorno**

 - ****Extrair resultado: Permite selecionar esta opção para extrair um relatório em formato JSON e incluir um caminho.

Clique em **Salvar** para concluir a configuração.

Após selecionar a operação, os parâmetros de entrada e de saída serão carregados em tela. Caso necessário, é possível alterar o label desses campos.

**06.** Clique em **Salvar** para concluir a inclusão.

## Editar operação

---

**01.** No menu principal, clique em ![](/download/attachments/394220928/%C3%ADcone-painel-de-controle.png?version=1&modificationDate=1750703494153&api=v2) **Painel de controle**.

**02**. Localize o agrupador **Desenvolvimento**.

**03**. Clique em ![](/download/attachments/394220928/%C3%ADcone-opera%C3%A7%C3%B5es.png?version=1&modificationDate=1750703378713&api=v2) **Operações**.

**04.** Localize a operação a ser editada.

**05.**Clique em **Editar**,** **localizado no canto direito da tela, indicado pelo símbolo de lápis.

**06.** Altere as informações desejadas.

 Essa tela apresenta os mesmos campos para configuração, conforme apresentado na ação Adicionar operação.

**07.** Clique em **Salvar**.

## Remover operação

---

**01.** No menu principal, clique em ![](/download/attachments/394220928/%C3%ADcone-painel-de-controle.png?version=1&modificationDate=1750703494153&api=v2) **Painel de controle**.

**02**. Localize o agrupador **Desenvolvimento**.

**03**. Clique em ![](/download/attachments/394220928/%C3%ADcone-opera%C3%A7%C3%B5es.png?version=1&modificationDate=1750703378713&api=v2) **Operações**.

**04.** Localize a operação a ser removida.

**05.** Clique em **Remover**, localizado no canto direito da tela, indicado pelo símbolo de lixeira.

**06**. Clique em**Sim, remover a operação** para confirmar a exclusão.

Fique atento!

Esta documentação é válida a partir da atualização **Voyager (2.0)**. Se você utiliza uma atualização anterior, ela pode conter informações diferentes das quais você vê na sua plataforma.


<!-- anchors: Plataforma❙Operações-Falandodeoperações..., Plataforma❙Operações-Veroperações, Plataforma❙Operações-Adicionaroperação, 1, 1-soap, 1-rest, Plataforma❙Operações-Editaroperação, Plataforma❙Operações-Removeroperação -->
