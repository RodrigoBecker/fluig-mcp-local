---
title: "Visão ESB Servers"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=6066531"
scraped_at: "2026-03-09T04:37:41.431Z"
depth: 3
anchors: 2
child_links: 34
---

# Visão ESB Servers

### ESB Servers

A **visão ESB Servers** dentro da perspectiva TOTVS ESB tem como finalidade realizar configurações específicas para cada o servidor Fluig ESB.

Detalhes como portas, configurações do monitor, logs e memória do Fluig ESB são realizadas através dessa perspectiva. Ainda permite o gerenciamento de vários servidores Fluig ESB localizados remotamente.

### Interface

Ao abrir a **visão ESB Servers**, tem-se duas áreas distintas. O painel à esquerda demonstra uma listagem de servidores Fluig ESB cuja finalidade é cadastrar e conectar ao servidor Fluig ESB para realizar configurações necessárias. Na listagem tem-se um item raiz denominado **Servers**. Para cadastrar deve-se seguir os passos abaixo.

- Clicar com o botão direito em cima do item **Servers**.
- Selecionar o item **ESB**e o subitem **ESB Server**.
- Ao clicar aparecerá uma janela contendo os seguintes campos que deverão ser preenchidos:

| Campo | Descrição |
| --- | --- |
| Campo | Descrição |
| Server Name | Descreve o nome do servidor Fluig ESB. Deverá ser um nome de fácil identificação. |
| Host | Nome ou IP da máquina que se encontra instalado o servidor Fluig ESB. |
| Port | Número da porta de conexão ao servidor Web Service configurado no Fluig ESB. Por padrão, a porta configurada para o servidor Web Service do Fluig ESB é 8085. |

- Após preencher as informações clicar no botão **Finish**.

Com os procedimentos adotados, aparecerá o novo item cadastrado na listagem de servidores Fluig ESB. Para conectar ao servidor ESB cadastrado com finalidade de realizar as configurações necessárias, basta clicar duas vezes sobre o item na listagem.

Ao conectar com o servidor Fluig ESB, irá carregar no painel central do Editor as configurações do servidor ESB. As configurações disponíveis são:

- [System Properties](https://tdn.totvs.com/display/fluig/System+Properties)
- [Database Configuration](/display/fluig/Database+Configuration)
- [License Configuration](/display/fluig/License+Configuration)
- [Internal HTTP Server](/display/fluig/Internal+HTTP+Server)
- [Services Repository](/display/fluig/Services+Repository)
- [Log4j](/display/fluig/Log4j)
- Cluster Configuration
- [Diagrams](/display/fluig/Diagrams)

Após configurar o servidor Fluig ESB conforme desejado, pode-se salvar e aplicar no servidor Fluig ESB através do menu principal **File** e item **Save**.


<!-- anchors: VisãoESBServers-ESBServers, VisãoESBServers-Interface -->
