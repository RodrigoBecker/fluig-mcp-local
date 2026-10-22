---
title: "Plataforma ❙ Fluxos"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=864347102"
scraped_at: "2026-03-09T05:17:27.614Z"
depth: 4
anchors: 10
child_links: 73
---

# Plataforma ❙ Fluxos

Consulte a documentação correta:

Esta documentação refere-se ao novo editor de processos da plataforma. Caso esteja utilizando o editor de processos atual, acesse [Configurar atividades e fluxos](/pages/viewpage.action?pageId=233763197). 

IDIOMA

# Falando de fluxos...

---

![](/download/attachments/864347102/fluxo-comum.png?version=2&modificationDate=1737053351323&api=v2)Os fluxos são os mecanismos que definem para qual atividade a solicitação deve seguir. São eles que determinam o caminho que a solicitação percorrerá conforme as etapas ou atividades vão sendo concluídas.

Os fluxos são representados por setas que indicam o sentido da movimentação, que pode ser apenas de ida – da atividade de origem para a atividade destino – ou de retorno – da atividade destino para a atividade de origem.

Os tipos de fluxos disponíveis para utilização são detalhados a seguir.

![](/download/attachments/864347102/diagrama-completo-fluxo.png?version=8&modificationDate=1742579230600&api=v2)

## Fluxo comum

---

![](/download/attachments/864347102/fluxo-comum.png?version=2&modificationDate=1737053351323&api=v2) O fluxo comum é o fluxo padrão para movimentação da solicitação entre as atividades. É o fluxo mais utilizado, que permite movimentar a solicitação de uma atividade para outra sem a possibilidade de retornar para a atividade anterior.

O fluxo comum é representado por uma seta que indica a direção para onde a solicitação será movimentada.

![](/download/attachments/864347102/diagrama-fluxo-comum.png?version=3&modificationDate=1737053278443&api=v2)

## Fluxo automático

---

![](/download/attachments/864347102/fluxo-autom%C3%A1tico.png?version=3&modificationDate=1737053407617&api=v2) O fluxo automático movimenta a solicitação automaticamente para a atividade destino quando o prazo da atividade de origem foi atingido e ela ainda não foi concluída, ou seja, a solicitação ainda não foi movimentada para a próxima etapa.

O fluxo automático é representado por um relógio no meio da seta que indica a direção para onde a solicitação será movimentada. 

Para que o fluxo automático funcione corretamente, é necessário que:

- a atividade de origem tenha um **prazo** definido;

- exista um agendamento do tipo **Fluxo automático** no [Agendador de tarefas](/pages/viewpage.action?pageId=234455387), determinando um intervalo de tempo a partir do qual são verificadas e movimentadas as solicitações que estão paradas em atividades com fluxo automático.

Notas:

→ Como o fluxo automático somente movimenta a solicitação depois que o prazo da atividade de origem foi atingido, **é necessário configurar também um fluxo comum** na atividade de origem para permitir a movimentação convencional, ou seja, para permitir que a solicitação seja movimentada antes de atingir o prazo de conclusão da atividade de origem.

→ Durante a execução de um fluxo automático, **não há um usuário autenticado realizando a movimentação**. Portanto, eventos que utilizam o usuário autenticado por meio de APIs devem considerar esse fato para evitar inconsistências na execução.

EXEMPLO DE USO
Em um processo de **Abertura de chamado** para o suporte técnico, o solicitante tem um **prazo definido** para avaliar a solução proposta e retornar positiva ou negativamente, ou seja, informar se a solução atendeu ou não a sua necessidade. Se ele não retornar dentro desse prazo, o chamado será automaticamente encerrado. Neste caso, é recomendado utilizar um **fluxo automático** entre a etapa **Avaliar solução** – de responsabilidade do solicitante – e a etapa **Finalizar chamado**, que é o fim do processo. Assim, evita-se que existam muitos chamados pendentes ainda abertos por falta de retorno dos solicitantes.

![](/download/attachments/864347102/diagrama-fluxo-autom%C3%A1tico.png?version=3&modificationDate=1737053298923&api=v2)

## Fluxo de retorno

---

![](/download/attachments/864347102/fluxo-retorno.png?version=2&modificationDate=1737053434247&api=v2) O fluxo de retorno permite voltar a solicitação para a atividade de origem.

Quando a solicitação é movimentada da atividade de origem para a atividade destino por meio de um fluxo que permite retorno, ao concluir a atividade destino, será permitido retornar a solicitação para a atividade anterior, ou seja, a de origem.

O responsável que receberá a solicitação será a mesma pessoa que concluiu a atividade de origem anteriormente, ou seja, que a movimentou para a atividade destino pela última vez.

O fluxo de retorno é representado por uma seta partindo da atividade destino e direcionando para a atividade de origem.

Fluxos automáticos também podem ser configurados para permitir retorno. Neste caso, sua representação também terá um relógio no meio da seta, da seguinte forma: ![](/download/attachments/864347102/fluxo-retorno-autom%C3%A1tico.png?version=2&modificationDate=1737053478997&api=v2).

Nota:

O fluxo de retorno somente pode ser utilizado na versão do processo na qual a solicitação se encontra durante a movimentação. Por isso, se a solicitação é convertida para outra versão do processo, **na sua primeira movimentação depois da conversão, ela não pode retornar para a atividade anterior**, visto que haverá uma movimentação que representa a conversão e, portanto, perderá a possibilidade de retorno imediato.

EXEMPLO DE USO
Em um processo de **Solicitação de férias**, ao enviar a solicitação para a aprovação do gestor, pode ser que ele solicite **algum ajuste** na data de início ou na quantidade de dias solicitados. Nesse caso, é recomendado utilizar o **fluxo de retorno** para permitir que o gestor **retorne** a solicitação para o colaborador **ajustar os dados** e enviar a solicitação para aprovação novamente. Assim, evita-se que o gestor tenha que reprovar a solicitação e o colaborador tenha que abrir uma nova com os ajustes solicitados.

![](/download/attachments/864347102/diagrama-fluxo-retorno.png?version=2&modificationDate=1737053321700&api=v2)

## Mensagem dos fluxos

---

Os fluxos possuem mensagens pré-definidas que são exibidas no momento da movimentação da solicitação da atividade de origem para a atividade destino. Porém, essas mensagens podem ser personalizadas, de acordo com o processo ou etapa.

EXEMPLO DE USO
Em um processo de **Abertura de chamado** para o suporte técnico, a mensagem de movimentação do **Início** para a **Segunda etapa** pode ser definida como "**Seu chamado foi aberto com sucesso!**" ao invés de manter a mensagem padrão "**Solicitação 999 iniciada com sucesso.**".

******

## Configurar fluxo

---

****

        Your browser does not support the HTML5 video element

**01.** No [diagrama](/pages/viewpage.action?pageId=860252119) do processo, clique no componente **Fluxo**que deseja configurar.

As configurações disponíveis são exibidas na lateral direita.

**02.** Na aba **Tipo de fluxo**, defina as informações gerais do fluxo.

**Tipo de fluxo**
Tipo de fluxo que será utilizado entre as duas atividades ou etapas do processo. As opções disponíveis são:

- **Fluxo comum**: quando selecionada, determina que o fluxo será comum, ou seja, é necessário movimentar a solicitação da atividade origem para a atividade destino.

- **Fluxo automático**: quando selecionada, determina que o fluxo será automático, ou seja, a solicitação será movimentada automaticamente da atividade origem para a atividade destino quando o prazo de conclusão da atividade de origem vencer.Importante! Para que o fluxo automático funcione corretamente, é necessário criar um agendamento do tipo **Fluxo automático** no [Agendador de tarefas](/pages/viewpage.action?pageId=234455387).

**Título do fluxo comum**
Nome para identificação do fluxo. Esse nome é exibido acima do fluxo no [diagrama](/pages/viewpage.action?pageId=860252119) do processo.

EXEMPLO DE USO
Em um processo de **Solicitação de pagamento**, o fluxo entre a etapa **Solicitar pagamento** e a etapa **Aprovação** **do gestor** poderia se chamar **Enviar para aprovação**.

**Fluxo de retorno**
Quando ativada, determina que é permitido retornar a solicitação da atividade destino para a atividade de origem.

**Título do fluxo de retorno**
Nome para identificação do fluxo de retorno. Esse nome é exibido abaixo do fluxo no [diagrama](/pages/viewpage.action?pageId=860252119) do processo.

EXEMPLO DE USO
Em um processo de **Solicitação de férias**, o fluxo de retorno entre a etapa **Aprovação do gestor** e a etapa **Solicitar férias** poderia se chamar **Ajustar datas**.

**03.** Clique na aba **Mensagem do fluxo** para personalizar a mensagem exibida quando a solicitação passar por esse fluxo.

A mensagem do fluxo é exibida ao concluir a movimentação da solicitação da atividade de origem para a atividade destino. Essas mensagens já existem por padrão, porém, é possível personalizá-las se desejado.

Dica!

É possível inserir o número da solicitação em qualquer parte da mensagem, seja no **título**, na **descrição** ou no texto do **link**. Para isso:

**01.** Insira o caractere **@**.

**02**. Clique em **nº solicitação**.

**03.** Ao clicar, o **nº solicitação** será substituído por **[request:id]**.

→ Quando a mensagem for exibida, no lugar de **@[request:id]** será exibido o número da solicitação em questão.

 CLIQUE AQUI E VEJA UM EXEMPLO DE MENSAGEM PERSONALIZADA

**Sua solicitação de férias foi enviada para aprovação!**

O número da sua solicitação é **999**. Clique no *link* abaixo e acompanhe o andamento.

[Acompanhar solicitação](http://Acompanhar solicitação).

**Título**
Título da mensagem de movimentação da solicitação. O título pode ter até 70 caracteres. Se nenhum título for inserido, será exibido o padrão.

 CLIQUE AQUI E VEJA O TÍTULO PADRÃO

Ao **abrir** a solicitação:
**→ Solicitação 999 iniciada com sucesso.**

Ao **enviar** a solicitação de uma etapa para outra:
**→ Solicitação 999 movimentada com sucesso.**

**Descrição**
Mensagem de movimentação da solicitação. A mensagem pode ter até 255 caracteres. Se nenhuma mensagem for inserida, será exibida a padrão.

 CLIQUE AQUI E VEJA A DESCRIÇÃO PADRÃO

→ Você pode acessar os detalhes, os anexos e os complementos desta sua solicitação.

**Texto do link da solicitação**
Texto que será exibido no *link* que permite acessar a solicitação. O texto pode ter até 70 caracteres. Se nenhum texto for inserido, será exibido o padrão.

 CLIQUE AQUI E VEJA O LINK PADRÃO

→ [Acessar solicitação #999](http://Acessar solicitação #999).

**04.** Clique em **Salvar rascunho** – localizado no lado direito da barra superior – para salvar as configurações feitas no componente **Fluxo**.

**05.** Na mensagem exibida, clique em **Ok, entendi**.

Fique atento!

Esta documentação é válida a partir da atualização** Voyager (2.0)**. Se você utiliza uma atualização anterior, ela pode conter informações diferentes das quais você vê na sua plataforma.


<!-- anchors: Plataforma❙Fluxos-Falandodefluxos..., Plataforma❙Fluxos-Fluxocomum, Plataforma❙Fluxos-Fluxoautomático, Plataforma❙Fluxos-Fluxoderetorno, Plataforma❙Fluxos-Mensagemdosfluxos, Plataforma❙Fluxos-Configurarfluxo, content_@personalizada, content_@titulo-padrao, content_@descricao-padrao, content_@link-padrao -->
