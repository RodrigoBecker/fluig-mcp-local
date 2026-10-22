---
title: "Plataforma ❙ Transferir pendências"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=234455444"
scraped_at: "2026-03-09T04:05:16.808Z"
depth: 2
anchors: 2
child_links: 58
---

# Plataforma ❙ Transferir pendências

# Falando de transferir pendências...

---

Esse recurso proporciona a facilidade da transferência de múltiplas atividades entre usuários. Essa transferência é de grande utilidade nas situações de desligamento, saída de férias, promoção de determinado usuário responsável pelas atividades.

Para efetuar a transferência de pendências é necessário informar a matrícula do usuário origem e do usuário destino, além de selecionar quais os tipos de pendências devem ser transferidas.

Serão verificadas as regras de negócio (mecanismos de atribuição) para validações de transferências das tarefas Workflow pendentes para o usuário e processos abertos pelo usuário que ainda não foram encerrados. A transferência de Pendências não transfere as tarefas Workflow já executadas.

![](/download/attachments/234455444/TRANSFERIR%20PENDENCIAS.png?version=4&modificationDate=1748540278140&api=v2)

## Transferir pendências

---

**01.** No menu principal, clique em ![](/download/attachments/234455444/%C3%ADcone-painel-de-controle.png?version=1&modificationDate=1748540449637&api=v2) **Painel de controle**.

**02**. Localize o agrupador **Pessoas**.

**03**. Clique em ![](/download/attachments/234455444/%C3%ADcone-transferir-pend%C3%AAncias.png?version=1&modificationDate=1748540235980&api=v2) **Transferir pendências**.

**04.** Informe os colaboradores relacionados à transferência.

**Origem**
Usuário que possui a pendência.

**Destino**
Usuário que receberá a pendência.

Para localizar usuários, utilizar a lupa.

Nota:

Para a transferência de tarefas, o usuário destino deve fazer parte do mecanismo de atribuição da atividade. Caso esteja configurado por **campo de formulário** será necessário a alteração no campo para depois realizar a transferência. Para os mecanismos por **executor de atividade** ou **por** **usuário**, somente é possível transferir alterando as configurações no processo e a convertendo a solicitação para a nova versão.

**05.** Em **Pendências de processos**, preencha as informações necessárias.

**Solicitação**Faixa de solicitações que deseja transferir.

**Solicitações abertas** 
Quando assinalada esta opção, determina a transferência do **requisitante** das solicitações que foram iniciadas pelo usuário de origem.

**Tarefas pendentes**Quando assinalada esta opção, determina a transferência das tarefas de responsabilidade do usuário de origem.

**06.** Em **Pendências de documentos**, preencha as informações necessárias.

**Documento**Faixa de documentos que deseja transferir.****

**Permissão de gravação em pastas/documentos**Quando assinalada esta opção, determina a transferência de permissão de segurança de gravação das pastas e documentos informados.

Nota:

Quando assinalada esta opção, o usuário destino deve possuir permissão de leitura.

**Documentos aguardando aprovação**Quando assinalada esta opção, determina a transferência dos documentos publicados pelo usuário de origem e que estão aguardando a aprovação do usuário aprovador da pasta/documento.

**Documentos em aprovação**Quando assinalada esta opção, determina a transferência dos documentos de responsabilidade do usuário de origem.

Nota:

Para a transferência de tarefas, o usuário destino deve fazer parte do grupo de usuários aprovadores. Caso não estiver parametrizado, será necessário defini-lo como aprovador dessa pasta. Para isso, é necessário configurar a partir da Definição de aprovadores.

**Aprovado****r de pastas/documentos**Quando assinalada esta opção, determina a transferência da permissão de aprovação que o usuário de origem tem sobre as pastas/documentos.

**Autoria de documentos**Quando assinalada esta opção, determina a transferência dos documentos de autoria do usuário de origem.

**07.** Clique em **Confirmar**.

Após confirmar, as pendências que se encaixam nos parâmetros selecionados serão transferidas para o colaborador de destino. Em seguida, será apresentada uma mensagem de confirmação, onde será possível visualizar o log da transferência realizada. ![](/plugins/servlet/confluence/placeholder/unknown-macro?name=tooltip&locale=en_US&version=2)****

Fique atento!

Esta documentação é válida a partir da atualização **Voyager (2.0)**. Se você utiliza uma atualização anterior, ela pode conter informações diferentes das quais você vê na sua plataforma.


<!-- anchors: Plataforma❙Transferirpendências-Falandodetransferirpendências..., Plataforma❙Transferirpendências-Transferirpendências -->
