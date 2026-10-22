---
title: "Plataforma ❙ Agendador de tarefas"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=234455387"
scraped_at: "2026-03-09T04:09:09.871Z"
depth: 2
anchors: 5
child_links: 60
---

# Plataforma ❙ Agendador de tarefas

# Falando de agendador de tarefas...

---

No Agendador de tarefas é possível configurar a emissão de alertas aos responsáveis quando houver documentos expirados ou tarefas atrasadas. Na configuração, é possível determinar o horário e a frequência desses alertas.

Esse recurso possibilita o envio de *e-mails* aos usuários responsáveis pelas tarefas que estão em atraso e/ou aos usuários que iniciaram as solicitações *workflow*. Dessa forma, é possível garantir que o usuário foi informado de que está com tarefas em atraso ou, ainda, que o usuário que iniciou a solicitação foi informado que existem tarefa em atraso e quem é o responsável.

Para que a atividade seja considerada, é necessário que tenham sido definidas as informações de quais usuários devem receber as notificações (requisitante e/ou responsável) e também as informações sobre “Tolerância” e “Frequência” das notificações.

Além disso, é possível agendar tarefas para serem executadas automaticamente, de acordo com a periodicidade definida, tais como a indexação de documentos, o recálculo de volumes, a exclusão de notificações, dentre outras.

Dicas!

Algumas tarefas são **padrão** e veem automaticamente configuradas na plataforma, não sendo possível cadastra-las no agendador. Para conhecê-las, acesse [Tarefas padrão](/pages/viewpage.action?pageId=271857399).

Para que o fluxo automático funcione corretamente, além de incluir o *job*do fluxo automático, é necessário incluir o job de Tarefas atrasadas. O fluxo automático é acionado quando uma tarefa está atrasada, mas caso não tenha sido criado o *job*de tarefa atrasada no agendador, o fluxo não será movimentado.

![](/download/attachments/234455387/Agendador.png?version=3&modificationDate=1750269241243&api=v2)

## Ver agendamentos

---

**01.** No menu principal, clique em ![](/download/attachments/234455387/%C3%ADcone-painel-de-controle.png?version=1&modificationDate=1750269889247&api=v2) **Painel de controle**.

**02**. Localize o agrupador **Parâmetros técnicos**.

**03**. Clique em ![](/download/attachments/234455387/%C3%ADcone-agendador-tarefas.png?version=1&modificationDate=1750267152913&api=v2) **Agendador de tarefas**.

**04.** Veja todos os agendamentos de tarefas existentes.

## Adicionar agendamento de tarefa

---

Antes de criar um agendamento, é importante avaliar que as tarefas podem ter alto consumo de recursos, e nesses casos, as rotinas devem ser executadas preferencialmente em momentos com baixa utilização da plataforma. ![](/plugins/servlet/confluence/placeholder/unknown-macro?name=tooltip&locale=en_US&version=2)

**01.** No menu principal, clique em ![](/download/attachments/234455387/%C3%ADcone-painel-de-controle.png?version=1&modificationDate=1750269889247&api=v2) **Painel de controle**.

**02**. Localize o agrupador **Parâmetros técnicos**.

**03**. Clique em ![](/download/attachments/234455387/%C3%ADcone-agendador-tarefas.png?version=1&modificationDate=1750267152913&api=v2) **Agendador de tarefas**.

**04.** Clique em **Adicionar**.

**05.** Insira as informações solicitadas para a tarefa que será agendada.

As informações solicitadas são:

**Descrição**Descrição do agendamento da tarefa.

**Tipo**Tipo da tarefa que será agendada. Os tipos disponíveis são:

- **Expiração de documentos**: utilizado quando existe a necessidade de descobrir se já passou a data de expiração de algum documento, caso exista, os documentos expirarão após uma tarefa de expiração de documento ser executada. ![](/plugins/servlet/confluence/placeholder/unknown-macro?name=tooltip&locale=en_US&version=2)

- **Expiração de solicitações**: utilizado quando existe a necessidade de verificar se já passou a data de expiração de alguma solicitação. Caso existam solicitações para expirar, é emitida uma notificação para os colaboradores que foram configurados para receber o aviso de expiração naquele processo.

- **Expiração de tarefas**: utilizado quando existe a necessidade de alertar os usuários que o prazo de alguma atividade de um processo *workflow* está para expirar. Caso existam tarefas para expirar, é emitida uma notificação para os colaboradores que foram configurados para receber o aviso de expiração naquele processo.

MAIS CONFIGURAÇÕES
**Notificar somente dentro do expediente:** possibilita configurar o recebimento das notificações somente em horário de trabalho, de acordo com o [expediente](https://tdn.totvs.com/x/uP-uDQ) já configurado.

- **Tarefas atrasadas:** utilizado quando existe a necessidade de descobrir se o prazo de alguma atividade de um processo *workflow* já foi ultrapassado, caso existam tarefas atrasadas, é emitida uma notificação para os usuários que foram configurados para receber notificações de atraso naquele processo.

MAIS CONFIGURAÇÕES
**Notificar somente dentro do expediente:** possibilita configurar o recebimento das notificações somente em horário de trabalho, de acordo com o [expediente](https://tdn.totvs.com/x/uP-uDQ) já configurado.

- **Fluxo automático**: utilizado para cadastrar um fluxo alternativo no processo de *workflow* para que, quando um usuário não realiza uma tarefa no prazo estipulado, a solicitação seja encaminhada automaticamente para o fluxo alternativo.

- **Indexação de documentos:** utilizado para indexar documentos que ainda não foram indexados.

MAIS CONFIGURAÇÕES
**Iniciar pelos documentos:**forma como será iniciada a indexação de documentos. As opções disponíveis são: Mais antigos ou Mais recentes.

- **Recalcular volumes:** utilizado para recalcular o tamanho físico dos volumes cadastrados.Importante! Para o correto funcionamento do controle de cotas é obrigatório executar esta tarefa.
- **Compactar solicitações finalizadas**: utilizado para compactar os registros de formulários vinculados a processos finalizados. Após a finalização do processo, os registros de formulários são apenas mantidos em sua última versão, as versões anteriores são eliminadas, aumentando a performance da plataforma.

- **Converter documentos (visualizador interno)**: utilizado para converter arquivos de uma determinada pasta para o formato PDF no período estipulado com a finalidade de serem visualizados internamente a partir do visualizador interno que utiliza o motor Open Office. Se a empresa utiliza o novo visualizador de documentos este agendamento não se aplica.

MAIS CONFIGURAÇÕES
**Tipo de conversão:** tipo de conversão de documentos a ser realizada. As opções disponíveis são: Todos ou Somente não convertidos.
**Iniciar pelos documentos**: forma como será iniciada a conversão de documentos. As opções disponíveis são: Mais antigos ou Mais recentes.

- **Limpar arquivos temporários de documentos**: utilizado para remover arquivos temporários gerados pela plataforma na pasta "temp" do sistema operacional no período estipulado. Este procedimento também ocorre quando o servidor da plataforma é parado, porém, com o agendamento configurado é possível antecipar o intervalo para remoção dos arquivos, ainda com a plataforma no ar, afim de liberar espaço em disco no servidor.

- **Limpar lixeira**: utilizado para remover permanentemente os itens que estão na [Lixeira](/pages/viewpage.action?pageId=243636051).

MAIS CONFIGURAÇÕES
**Excluir documentos enviados a lixeira a mais de:** quantidade de dias que o item deve permanecer na lixeira antes de ser excluído pela execução do agendamento.

- **Limpeza de notificações:** utilizado para excluir todas as notificações de todos os usuários da empresa - com exceção daquelas que exigem uma ação por parte do usuário, como as de solicitação de participação em comunidades, por exemplo - seguindo a periodicidade definida na tela de [Notificações](/pages/viewpage.action?pageId=234455600).

- **Monitor de métricas:** utilizado para emitir uma notificação de alerta para os administradores quando alguma métrica interna de tempo de execução dos componentes e rotinas ultrapasse o tempo definido como limítrofe aceitável. O limite configurado é em milissegundos.

MAIS CONFIGURAÇÕES
**Limite**: tempo limite de execução dos componentes a partir do qual é emitida uma notificação de alerta.

- **Sincronização de datasets**: utilizado para configurar a frequência de sincronização do *dataset* selecionado. A sincronização de *datasets* tem como objetivo reduzir o número de acessos a serviços de dados fornecidos por produtos externos ao TOTVS Fluig Plataforma. Para saber mais detalhes sobre a sincronização, consulte a nossa documentação técnica de [Sincronização de Datasets](/pages/viewpage.action?pageId=212899013).

MAIS CONFIGURAÇÕES
**Dataset:**dataset para o qual será criado o agendamento da tarefa de sincronização.

- **Cálculo de cota para pastas zeradas**: utilizado nos casos em que o controle de cotas das pastas está ativo, para verificar se existem pastas sem o cálculo de cota e realizar o cálculo.

**Executar somente após as**Horário a partir do qual a tarefa deve ser executada.

**Frequência**Periodicidade na qual a tarefa deve ser executada. As opções disponíveis são:

- **Diária**: nesta opção pode-se configurar se a tarefa será executada uma ou mais vezes ao dia, ou até se elas serão executadas com um intervalo de dias. É possível configurar de quatro formas:**a cada “X” minutos**: nesta opção a frequência será de acordo com o intervalo de minutos especificado. Observação: os minutos devem ser divisíveis por 60 (1, 2, 3, 4, 5, 6, 10, 12, 15, 20 e 30) e somente é possível configurar a hora no campo horário padrão; os minutos não podem ser configurados.
- **a cada “X” horas**: nesta opção a frequência será de acordo com as horas especificadas.
- **a cada “X” dias**: nesta opção a tarefa será executada de acordo com os dias especificados e no horário padrão informado.
- **todos os dias da semana**: nesta opção a tarefa será executada todos os dias da semana no horário padrão informado. Observação: o cálculo da frequência é baseado no horário padrão informado. Informando 00:00 será calculada a próxima frequência válida após a hora atual.

- **Mensal**: nesta opção pode-se configurar se a tarefa será executada em uma data específica do mês. É possível configurar duas formas:**dia “X” de cada mês**: nesta opção a tarefa será executada no dia especificado de cada mês e no horário padrão informado.
- **em um dia de uma das semanas**: nesta opção a tarefa será executada no dia especificado de uma das semanas do mês e no horário padrão informado.

**06.** Clique em **Confirmar**.

## Excluir agendamento de tarefa

---

**01.** No menu principal, clique em ![](/download/attachments/234455387/%C3%ADcone-painel-de-controle.png?version=1&modificationDate=1750269889247&api=v2) **Painel de controle**.

**02**. Localize o agrupador **Parâmetros técnicos**.

**03**. Clique em ![](/download/attachments/234455387/%C3%ADcone-agendador-tarefas.png?version=1&modificationDate=1750267152913&api=v2) **Agendador de tarefas**.

**04.** Selecione o agendamento de tarefa a ser excluído.

**05.** Clique em **Deletar**.

**06.** Na mensagem apresentada, clique em **Sim** para confirmar a exclusão; ou **Não** para desistir da ação.

## Executar tarefa manualmente

---

**01.** No menu principal, clique em ![](/download/attachments/234455387/%C3%ADcone-painel-de-controle.png?version=1&modificationDate=1750269889247&api=v2) **Painel de controle**.

**02**. Localize o agrupador **Parâmetros técnicos**.

**03**. Clique em ![](/download/attachments/234455387/%C3%ADcone-agendador-tarefas.png?version=1&modificationDate=1750267152913&api=v2) **Agendador de tarefas**.

**04.** Selecione o agendamento de tarefa a ser executado.

**05.** Clique em **Executar**.

Ao acionar esta opção, a tarefa será executada manualmente no horário atual e posteriormente, será executada normalmente no horário que foi configurado no agendador.

Mesmo executadas manualmente, as tarefas continuam seguindo suas regras de configuração. Por exemplo, nas tarefas de "Limpeza de todas as notificações" e "Limpeza de notificações lidas" a plataforma irá executar o comando de limpeza das notificações que se encaixam nos horários previamente definidos na tela de [Notificações](/pages/viewpage.action?pageId=234455600).

Fique atento!

Esta documentação é válida a partir da atualização **Voyager (2.0)**. Se você utiliza uma atualização anterior, ela pode conter informações diferentes das quais você vê na sua plataforma.


<!-- anchors: Plataforma❙Agendadordetarefas-Falandodeagendadordetarefas..., Plataforma❙Agendadordetarefas-Veragendamentos, Plataforma❙Agendadordetarefas-Adicionaragendamentodetarefa, Plataforma❙Agendadordetarefas-Excluiragendamentodetarefa, Plataforma❙Agendadordetarefas-Executartarefamanualmente -->
