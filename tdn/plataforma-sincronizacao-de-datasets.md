---
title: "Plataforma ❙ Sincronização de datasets"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=398756810"
scraped_at: "2026-03-09T04:04:23.546Z"
depth: 2
anchors: 5
child_links: 54
---

# Plataforma ❙ Sincronização de datasets

# Falando de sincronização de datasets...

---

A sincronização de datasets tem como objetivo reduzir o número de acessos a serviços de dados fornecidos por produtos externos ao TOTVS Fluig Plataforma. É uma prática comum trazer dados de sistemas externos para complementar informações do formulário de um processo ou realizar validações em eventos com base nas informações retornadas por este dataset.

Na tela de [Datasets](/pages/viewpage.action?pageId=235598394), ao localizar o dataset para o qual será configurada a sincronização, é possível acessar a tela de sincronização acionando o *link* da coluna **Sincronização**. Esse recurso não está disponível para datasets internos.

![](/download/attachments/398756810/Sincroniza%C3%A7%C3%A3o%20de%20dataset.png?version=4&modificationDate=1750787023977&api=v2)

## Sincronizar dados do dataset

---

**01.** Para habilitar a sincronização, ative a opção **Sincronizar com o servidor**.

**02.** Clique em **Sincronizar agora**.

Ao acionar essa opção, os dados do *dataset* gravados na plataforma são sincronizados com os dados correspondentes do sistema externo.

Somente é possível habilitar a sincronização de dados para *datasets* desenvolvidos sobre a plataforma. Ao habilitar a sincronização, ela será efetuada de acordo com o agendamento criado no [Agendador de tarefas](/pages/viewpage.action?pageId=234455387).

## Visualizar detalhes da última sincronização

---

**01.** Para habilitar a sincronização, ative a opção **Sincronizar com o servidor**.

**02.** Clique em **Mais detalhes**, abaixo do item **Última sincronização**.

Ao acionar essa opção, será apresentado o detalhamento do que foi executado, com a contagem de comandos que foram rodados para inserir, atualizar e excluir dados.

## Editar agendamento de sincronização

---

**01.** Para habilitar a sincronização, ative a opção **Sincronizar com o servidor**.

**02.** Clique em **Editar agendamento**.

**03.** Na janela Configurações do agendamento, altere as informações desejadas.

Informações sobre os campos apresentados podem ser obtidas em [Agendador de tarefas](/pages/viewpage.action?pageId=234455387).

**04.** Clique em **Confirmar**.

Após a configuração do agendamento, a tarefa de sincronização agendada será apresentada no Agendador de tarefas do Painel de Controle.

## Apagar dados

---

**01. **Para habilitar a sincronização, ative a opção **Sincronizar com o servidor**.

**02.** Clique em **Apagar dados**.

**03.** Na mensagem apresentada, clique em **Apagar.**

Ao acionar essa opção, todos os dados contidos no *dataset* são apagados.

Fique atento!

Esta documentação é válida a partir da atualização **Voyager (2.0)**. Se você utiliza uma atualização anterior, ela pode conter informações diferentes das quais você vê na sua plataforma.


<!-- anchors: Plataforma❙Sincronizaçãodedatasets-Falandodesincronizaçãodedatasets..., Plataforma❙Sincronizaçãodedatasets-Sincronizardadosdodataset, Plataforma❙Sincronizaçãodedatasets-Visualizardetalhesdaúltimasincronização, Plataforma❙Sincronizaçãodedatasets-Editaragendamentodesincronização, Plataforma❙Sincronizaçãodedatasets-Apagardados -->
