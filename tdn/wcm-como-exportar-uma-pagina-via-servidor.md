---
title: "WCM - Como exportar uma página via servidor?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=341230588"
scraped_at: "2026-03-09T04:51:00.658Z"
depth: 3
anchors: 27
child_links: 10
---

# WCM - Como exportar uma página via servidor?

# Índice

# Plataforma

**Produto: **TOTVS Fluig Plataforma

**Versão:** 1.6.4 ou superiores

**Ambiente:** Windows e Linux

# Ocorrência

Como faço para exportar uma página diretamente de um servidor para o outro?

# Solução

Para exportar uma página via servidor é necessário cadastrar um servidor de destino na plataforma e acioná-lo na hora da exportação.

Confira abaixo o passo a passo para realizar cada etapa do cadastro e exportação. 

Atenção!

Os procedimentos 1 e 2 são realizados no servidor destino e 3 e 4 no servidor original.

### 01. Cadastrar OAuth Provider

Para realizar a exportação de uma página via servidor, antes é preciso cadastrá-lo. Para efetuar o cadastro de um servidor na plataforma Fluig é necessário primeiramente criar uma Chave OAuth específica no**servidor de destino.**

- [Passo 1](#)
- [Passo 2](#)

 - Acionar o menu **Painel de controle**, localizar o agrupador**Parâmetros técnicos** e acessar o recurso **OAuth provider**.

Em atualizações anteriores à **1.6.5 (Liquid)**, esse recurso está localizado na aba **WCM** do **Painel de controle**.

****

****

 - Acionar **Adicionar.**

 - Inserir um código.

 - Selecionar o OAuth *Provider*** WCM.**

 - Informar a descrição.

 - Selecionar o *Request Method **Get.***

 - Selecionar o *Signature Method  **HMAC-SHA1*****.**

 - Acionar **Salvar**.

![](/download/attachments/341230588/servidores_2.png?version=1&modificationDate=1520270735000&api=v2)

### 02. Cadastrar OAuth App

Realizado o cadastro do OAuth Provider, é necessário criar também um Usuário Aplicativo no **servidor de destino.**

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)
- [Passo 6](#)
- [Passo 7](#)

 - Acionar o menu **Painel de controle**, localizar o agrupador**Parâmetros técnicos** e acessar o recurso **OAuth application**.

Em atualizações anteriores à **1.6.5 (Liquid)**, esse recurso está localizado na aba **WCM** do **Painel de controle**.

****

 - Acionar **Adicionar.**

 - Definir **Consumer Key.**

O administrador pode escolher o valor da *Consumer Key*

 - Informar a descrição.

A descrição não pode conter acentos e carecteres especiais.

 - Selecionar o **OAuth Provider **cadastrado no passo anterior.

 - Definir ***Consumer Secret***.

O administrador pode escolher o valor da Consumer Secret.

 - Acionar **Salvar**.

![](/download/attachments/341230588/servidores_4.png?version=2&modificationDate=1521567125000&api=v2)

 - Selecionar o OAuth App criado e acionar **Usuário Aplicativo.**

****

****

 - Acionar **Gerar Token**.

****

****

 - Habilitar opção de impersonalização.

 - Acionar** Alterar. **

****

****

 - Acionar o menu **Painel de controle**, localizar o agrupador**Pessoas** e acessar o recurso **Usuários**.

Em atualizações anteriores à **1.6.5 (Liquid)**, esse recurso está localizado na aba **Gerais**do **Painel de controle**.

![](/download/attachments/341230588/Passo%206.png?version=2&modificationDate=1553621515127&api=v2)****

 - Selecionar o usuário Aplicativo OAuth criado e acionar editar.

 - Conceder papel de administrador ao usuário. 

![](/download/attachments/341230588/servidores_9.png?version=1&modificationDate=1520270813000&api=v2)

### 03. Cadastrar Servidor

Cadastrados a  Chave OAuth e um Usuário Aplicativo, acesse o Painel de Controle da sua plataforma para cadastrar o servidor de destino.

- [Passo 1](#)
- [Passo 2](#)

 - Acionar o menu **Painel de controle**, localizar o agrupador**Desenvolvimento**e acessar o recurso **Servidores**.

Em atualizações anteriores à **1.6.5 (Liquid)**, esse recurso está localizado na aba **Gerais**do **Painel de controle**.

****

****

 - Acionar **Novo.**

 - Definir um **Nome**.

 - Informar o **Endereço** do servidor a ser cadastrado.

 - Informar a** Consumer key** do OAuth App cadastrado no servidor de destino.

A Consumer Key pode ser localizada no servidor de destino ao acessar Painel de controle > aba WCM > OAuth App.

 - Informar a **Consumer Secret ** do OAuth App cadastrado no servidor de destino.

A *Consumer Secret* pode ser localizada no servidor de destino ao acessar Painel de controle > aba WCM > OAuth App, selecionar o OAuth App cadastrado e acionar editar.

 - Informar o **Access Token** do Usuário Aplicativo cadastrado no servidor de destino.

O *Access Token *pode ser localizado no servidor de destino ao acessar Painel de controle > aba WCM > OAuth App, selecionar o OAuth App cadastrado e acionar Usuário Aplicativo.

 - Informar o **Secret Token** do Usuário Aplicativo cadastrado no servidor de destino.

 O *Secret Token** *pode ser localizado no servidor de destino ao acessar Painel de controle > aba WCM > OAuth App, selecionar o OAuth App cadastrado e acionar Usuário Aplicativo.

 - Acionar **Cadastrar.**

****

****

### 04. Exportar página via Servidor

Realizado o cadastro, sua plataforma está pronta para exportar uma página automaticamente entre servidores.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)

 - Acionar o menu **Painel de controle**, localizar o agrupador**Personalização**e acessar o recurso **Importar e exportar páginas**.

Em atualizações anteriores à **1.6.5 (Liquid)**, esse recurso está localizado na aba **WCM**do **Painel de controle**.

![](/download/attachments/341230588/exportar%20Passo%201.png?version=2&modificationDate=1553621631450&api=v2)

 - Na estrutura apresentada, assinalar as páginas que serão exportadas.

São apresentadas apenas as páginas editáveis. Páginas pais e filhas são sempre exportadas juntas para garantir que a estrutura original seja mantida, não é possível exportar apenas uma página pai ou apenas uma página filha.

 - Acionar **Exportar páginas**.

![](/download/attachments/341230588/servidores_13.png?version=3&modificationDate=1553621699553&api=v2)

 - Selecionar** Enviar para outro Servidor.**

****

 - Selecionar o servidor desejado.

 - Acionar** Exportar.**

Ao acionar a exportação, as páginas selecionadas anteriormente são automaticamente publicadas no servidor de destino.

![](/download/attachments/341230588/servidores_15.png?version=3&modificationDate=1553621797730&api=v2)


<!-- anchors: WCMComoexportarumapáginaviaservidor?-Índice, WCMComoexportarumapáginaviaservidor?-Plataforma, WCMComoexportarumapáginaviaservidor?-Ocorrência, WCMComoexportarumapáginaviaservidor?-Solução, WCMComoexportarumapáginaviaservidor?-01.CadastrarOAuthProvider, provider, provider-872616687, provider-872616688, WCMComoexportarumapáginaviaservidor?-02.CadastrarOAuthApp, app, app-872616687, app-872616688, app-872616689, app-872616690, app-872616691, app-872616692, app-872616693, WCMComoexportarumapáginaviaservidor?-03.CadastrarServidor, servidor, servidor-872616687, servidor-872616688, WCMComoexportarumapáginaviaservidor?-04.ExportarpáginaviaServidor, exportar, exportar-872616687, exportar-872616688, exportar-872616689, exportar-872616690 -->
