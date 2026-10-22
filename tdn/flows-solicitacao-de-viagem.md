---
title: "Flows | Solicitação de viagem"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=772028033"
scraped_at: "2026-03-09T04:29:51.982Z"
depth: 3
anchors: 14
child_links: 42
---

# Flows | Solicitação de viagem

# Falando de solicitação de viagem...

---

O *flow* de solicitação de viagem permite que os colaboradores registrem uma solicitação de viagem, definindo o motivo, além de colocar todos os serviços necessários e adiantamentos para então submeter esse pedido para aprovação do gestor.

Depois de adquirido, instalado e configurado, ele cria um processo igual a qualquer outro processo padrão da plataforma, ou seja, a abertura de solicitações é a partir do recurso [Iniciar solicitação](/pages/viewpage.action?pageId=233763157).

			![](https://tdn.totvs.com/download/attachments/563436139/nota.png)

**NOTA:**
Esse *flow* não está integrado a nenhum ERP nem a *Self booking*. Também não controla ou cria pedidos de compra dos serviços necessários para a viagem e não faz reservas automáticas.

Este *flow*segue as leis gerais de proteção de dados - LGPD. O tratamento de dados pessoais realizado, possibilita que o administrador do Fluig faça a anonimização de dados, caso deseje ou seja solicitado. Para isso, basta acessar: **Painel de controle > Segurança e acesso > Anonimizar e exportar dados pessoais.**

![](/download/attachments/772028033/processo-solicita%C3%A7%C3%A3o-viagem.png?version=1&modificationDate=1695385535127&api=v2)

## Como adquirir

---

O *flow* de solicitação de viagem é listado como uma solução paga no recurso [Store](https://tdn.totvs.com/x/frOcEw) do TOTVS Fluig Plataforma a partir da atualização **Mist - 1.8.0-230523**.

Para adquiri-lo, é necessário entrar em contato com o executivo de soluções de negócio responsável por sua conta.

Com o processo de aquisição finalizado, o acesso à instalação do *flow* é liberado, sendo necessário instalá-lo para utilizar. Neste caso, basta seguir os passos descritos em [Instalar e configurar *flow*](#Flows|Solicitaçãodeviagem-instalar).

## Instalação

---

Depois de adquirir esse *flow*, ele estará liberado para instalação a partir do recurso [Store](https://tdn.totvs.com/x/frOcEw).

### Requisito para uso

---

Para instalar e utilizar esse *flow*, é necessário:

- ter o TOTVS Fluig Plataforma instalado e parametrizado a partir da atualização **Mist - 1.8.0-230523**;

- utilização de processo padrão.

### Links externos

---

Esse *flow* faz uso do seguinte *link* externo:

- [https://servicodados.ibge.gov.br/api/v1/localidades/estados](https://servicodados.ibge.gov.br/api/v1/localidades/estados): de onde são obtidos os estados e as cidades para seleção durante a abertura da solicitação.

### Parametrizações

---

Durante a instalação desse *flow*, é necessário definir algumas parametrizações, que são divididas em quatro etapas:

- **Geral**: onde são definidos os dados gerais do processo, como gestor e prazos de expiração e de aviso;

- **Responsáveis**: onde são definidos os responsáveis e o SLA de cada atividade;

- **Cadastros**: onde são definidas as opções que serão selecionadas durante o preenchimento da solicitação: centro de custo, filial, motivo da viagem e adiantamento;

- **Revisão**: onde são listados os principais dados do processo que será criado para conferência.

### Instalar e configurar flow 

---

        Your browser does not support the HTML5 video element

**01.** No menu lateral do TOTVS Fluig Plataforma, clique em **Painel de controle**.

**02.** No agrupador **Aplicativos**, clique em **Store**.

É possível ainda acessar diretamente pelo ícone da **Store** ![](/download/attachments/772028033/flaticon-rocket.png?version=1&modificationDate=1699379721547&api=v2) localizado no menu lateral, para ir diretamente para os aplicativos.

Por padrão, apenas administradores da plataforma tem acesso ao Painel de controle e, consequentemente ao recurso Store. Porém, como as permissões podem ser personalizadas, o acesso a esse recurso segue o que foi definido na sua plataforma.

**03.** Na área **Flows** do recurso Store, [localize](https://tdn.totvs.com/x/frOcEw#Plataforma%E2%9D%99ItensdaStore-Buscarsolu%C3%A7%C3%B5es) e clique no *flow* Solicitação de viagem.

**04.** Clique em **Configurar** – localizado no quadro do *flow*.

A instalação é iniciada e, quando concluída, uma notificação é emitida.

**05.**Na etapa **Geral**, em **Dados gerais**, defina as informações solicitadas.

**Código identificador do processo**
Exibe o código de identificação do processo. Não é possível alterá-lo.

**Nome do processo**
Nome que visa facilitar o reconhecimento do processo e do seu objetivo. Esse nome será exibido posteriormente no recurso [Iniciar solicitação](/pages/viewpage.action?pageId=233763157).

**Descrição**
Breve descrição sobre os detalhes do processo e instruções para os solicitantes utilizarem.

**Categoria**
Categoria na qual o processo se enquadra. Ele será exibido dentro dessa categoria no recurso [Iniciar solicitação](/pages/viewpage.action?pageId=233763157).

**Pessoa gestora do processo**
Pessoa que será definida como gestora do processo, ou seja, na ausência do responsável por alguma atividade, essa pessoa pode substitui-lo e continuar com a movimentação da solicitação. Se não for definida uma pessoa gestora, apenas os responsáveis pelas atividades poderão movimentar a solicitação, ou seja, na ausência de algum responsável, a solicitação permanecerá parada. As opções disponíveis são:

- **Qualquer pessoa**: quando selecionada, determina que qualquer pessoa pode ser gestor da solicitação;
- **Todos de um grupo específico**: quando selecionada, determina que os gestores serão as pessoas que fazem parte de um determinado grupo;
- **Todos de um papel específico**: quando selecionada, determina que os gestores serão as pessoas que fazem parte de um determinado papel;
- **Uma pessoa específica**: quando selecionada, determina que o gestor será uma pessoa específica.

**Grupo, papel ou pessoa específica**Grupo, papel ou pessoa que será definida como gestora do processo, de acordo com a opção que foi selecionada em **Pessoa gestora do processo**.

**Prazo de expiração (em horas)**
Tempo máximo acordado, em horas, durante o qual a solicitação ficará disponível. Ao atingir o tempo máximo, uma notificação é emitida informando que a solicitação expirou. Ao ser configurado, o tempo é calculado levando em conta o expediente padrão cadastrado na plataforma. Esse prazo não pode ser menor que o prazo de notificação.

**Prazo de aviso (em horas)**
Tempo acordado, em horas, para que uma notificação seja enviada antes do prazo de expiração da solicitação. Ao ser configurado, o tempo é calculado levando em conta o expediente padrão cadastrado na plataforma. Esse prazo não pode ser maior que o prazo de expiração.

**06.**Clique em **Avançar**.

**07.** Na etapa **Responsáveis**, em **Solicitante**, defina as informações necessárias para cada atividade de quem vai abrir solicitações.

**1 - ABRIR SOLICITAÇÃO**

**Quem poderá abrir uma solicitação**Pessoas que podem abrir solicitação no processo criado por esse *flow*. As opções disponíveis são:

- **Qualquer pessoa**: quando selecionada, determina que qualquer pessoa pode abrir solicitação;
- **Todos de um grupo específico**: quando selecionada, determina que todas as pessoas que fazem parte de um determinado grupo podem abrir solicitação;
- **Todos de um papel específico**: quando selecionada, determina que todas as pessoas que fazem parte de um determinado papel podem abrir solicitação;
- **Uma pessoa específica**: quando selecionada, determina que apenas uma pessoa específica pode abrir solicitação.

**Grupo, papel ou pessoa específica**
Grupo, papel ou pessoa que pode abrir solicitações nesse processo, de acordo com a opção que foi selecionada em **Quem poderá abrir uma solicitação**.

**Acompanhamento**
Envio de notificação sobre o início da solicitação para as pessoas envolvidas. As opções disponíveis são:

- **Notificar responsável**: quando assinalada, determina que uma notificação sobre o início da solicitação será enviada ao responsável pela primeira atividade;
- **Notificar requisitante**: quando assinalada, determina que uma notificação sobre o início da solicitação será enviada ao requisitante/solicitante;
- **Notificar gestor**: quando assinalada, determina que uma notificação sobre o início da solicitação será enviada ao gestor do processo.

---

**2 - AJUSTAR SOLICITAÇÃO**A responsabilidade por ajustar a solicitação é atribuída à pessoa que abriu a solicitação.

**Acompanhamento**
Envio de notificação sobre o início da atividade de ajuste da solicitação. As opções disponíveis são:

- **Notificar responsável**: quando assinalada, determina que uma notificação sobre o início da atividade de ajuste da solicitação será enviada ao responsável por ela, que neste caso, é o próprio solicitante;
- **Notificar requisitante**: quando assinalada, determina que uma notificação sobre o início da atividade de ajuste da solicitação será enviada ao requisitante/solicitante;
- **Notificar gestor**: quando assinalada, determina que uma notificação sobre o início da atividade de ajuste da solicitação será enviada ao gestor do processo.

**Prazo de conclusão (em horas)**
Tempo, em horas, dentro do qual a atividade de ajuste da solicitação deve ser concluída. Após esse tempo, ela será considerada atrasada. Se configurado, o tempo é calculado levando em conta o expediente padrão cadastrado na plataforma e o momento em que o solicitante recebeu ou assumiu a atividade.

**08.** Em **Gestor do centro de custo**, defina as configurações relacionadas a atividade de aprovação conforme o centro de custo.

**1 - ANALISAR SOLICITAÇÃO**A responsabilidade é definida de acordo com o gestor do centro de custo que será informado na abertura da solicitação.

**Acompanhamento**
Envio de notificação sobre o início da análise da solicitação para as pessoas envolvidas. As opções disponíveis são:

- **Notificar responsável**: quando assinalada, determina que uma notificação sobre o início da análise da solicitação será enviada ao responsável por ela;
- **Notificar requisitante**: quando assinalada, determina que uma notificação sobre o início da análise da solicitação será enviada ao requisitante/solicitante;
- **Notificar gestor**: quando assinalada, determina que uma notificação sobre o início da análise da solicitação será enviada ao gestor do processo.

**Prazo de conclusão (em horas)**
Tempo, em horas, dentro do qual a análise da solicitação deve ser concluída. Após esse tempo, ela será considerada atrasada. Se configurado, o tempo é calculado levando em conta o expediente padrão cadastrado na plataforma e o momento em que o responsável recebeu ou assumiu a atividade.

**09.** Em **Financeiro**, configure os responsáveis e como o setor financeiro deve realizar o atendimento da solicitação.

**1 - PROGRAMAR PAGAMENTO**

**Quem poderá realizar o pagamento?**Pessoas que podem realizar o pagamento dos custos da viagem que precisam ser adiantados. As opções disponíveis são:

- **Uma pessoa de um grupo específico**: quando selecionada, determina que a solicitação será enviada para uma pessoa de um grupo específico e apenas ela pode assumir a atividade;
- **Uma pessoa de um papel específico**: quando selecionada, determina que a solicitação será enviada para uma pessoa de um papel específico e apenas ela pode assumir a atividade;
- **Todos de um grupo específico**: quando selecionada, determina que a solicitação será enviada para um grupo específico e qualquer um do grupo pode assumir a atividade;
- **Todos de um papel específico**: quando selecionada, determina que a solicitação será enviada para um papel específico e qualquer um do papel pode assumir a atividade;
- **Uma pessoa específica**: quando selecionada, determina que apenas uma pessoa específica pode assumir a atividade.

**Grupo, papel ou pessoa específica**
Grupo, papel ou pessoa que pode assumir a programação dos custos da viagem que precisam ser adiantados, de acordo com a opção que foi selecionada em **Quem poderá programar o pagamento?**.

**Acompanhamento**
Envio de notificação sobre o início da programação do pagamento para as pessoas envolvidas. As opções disponíveis são:

- **Notificar responsável**: quando assinalada, determina que uma notificação sobre o início da programação do pagamento será enviada ao responsável por ela;
- **Notificar requisitante**: quando assinalada, determina que uma notificação sobre o início da programação do pagamento será enviada ao requisitante/solicitante;
- **Notificar gestor**: quando assinalada, determina que uma notificação sobre o início da programação do pagamento será enviada ao gestor do processo.

**Prazo de conclusão (em horas)**
Tempo, em horas, dentro do qual a programação do pagamento deve ser concluída. Após esse tempo, ela será considerada atrasada. Se configurado, o tempo é calculado levando em conta o expediente padrão cadastrado na plataforma e o momento em que o responsável recebeu ou assumiu a atividade.

**10.** Ainda na etapa **Responsáveis**, em **Reservas**, defina as informações necessárias para a atividade do setor de reservas da viagem.

**1 - RESERVAR SERVIÇOS**

**Quem poderá reservar os serviços da viagem?**Pessoas que podem reservar os serviços necessários para a viagem. As opções disponíveis são:

- **Uma pessoa de um grupo específico**: quando selecionada, determina que a solicitação será enviada para uma pessoa de um grupo específico e apenas ela pode assumir a atividade;
- **Uma pessoa de um papel específico**: quando selecionada, determina que a solicitação será enviada para uma pessoa de um papel específico e apenas ela pode assumir a atividade;
- **Todos de um grupo específico**: quando selecionada, determina que a solicitação será enviada para um grupo específico e qualquer um do grupo pode assumir a atividade;
- **Todos de um papel específico**: quando selecionada, determina que a solicitação será enviada para um papel específico e qualquer um do papel pode assumir a atividade;
- **Uma pessoa específica**: quando selecionada, determina que apenas uma pessoa específica pode assumir a atividade;

**Grupo, papel ou pessoa específica**
Grupo, papel ou pessoa que pode assumir a reserva dos serviços da viagem, de acordo com a opção que foi selecionada em **Quem poderá reservar os serviços da viagem?**.

**Acompanhamento**
Envio de notificação sobre o início da reserva dos serviços para as pessoas envolvidas. As opções disponíveis são:

- **Notificar responsável**: quando assinalada, determina que uma notificação sobre o início da reserva dos serviços será enviada ao responsável por ela;
- **Notificar requisitante**: quando assinalada, determina que uma notificação sobre o início da reserva dos serviços será enviada ao requisitante/solicitante;
- **Notificar gestor**: quando assinalada, determina que uma notificação sobre o início da reserva dos serviços será enviada ao gestor do processo.

**Prazo de conclusão (em horas)**
Tempo, em horas, dentro do qual a reserva dos serviços deve ser concluída. Após esse tempo, ela será considerada atrasada. Se configurado, o tempo é calculado levando em conta o expediente padrão cadastrado na plataforma e o momento em que o responsável recebeu ou assumiu a atividade.

**11.** Clique em **Avançar**.

Caso queira visualizar o fluxo da solicitação, basta acionar a opção **Visualizar fluxo,** ao lado do botão **Avançar**.

**12.** Na etapa **Cadastros**, em **Centro de custo**, informe os centros de custo e seus respectivos responsáveis por fazer as aprovações de viagem. Esses centros de custo poderão ser selecionados no momento da abertura da solicitação.

**Código**Código do centro de custo. Esse código deve ser único, não pode se repetir para mais de um centro de custo.

**Nome do centro de custo**Nome de identificação do centro de custo.

**Gestor do centro de custo**Gestor que será o responsável pelas aprovações enviadas para o centro de custo.

			![](https://tdn.totvs.com/download/attachments/563436139/importante.png)

**IMPORTANTE!**
Depois de finalizada a configuração do *flow*, as informações relacionadas ao centro de custo não podem ser editadas e nem excluídas. Ou seja, ao editar as configurações do *flow* posteriormente, não será possível alterá-las e nem excluí-las.

Para adicionar mais centros de custo, clique em **Adicionar novo centro de custo** e preencha as informações necessárias. Para excluir um centro de custo adicionado, basta clicar em **Excluir**![](https://tdn.totvs.com/download/attachments/745756064/excluir.png).

**13.** Em **Estabelecimento**, informe os estabelecimentos que existem na sua empresa. Esses estabelecimentos poderão ser selecionados no momento da abertura da solicitação.

**Nome do estabelecimento**Nome do estabelecimento da sua empresa, como matriz, filial, franquia etc.

Para adicionar mais estabelecimentos, clique em **Adicionar novo estabelecimento** e preencha seu nome. Para excluir um estabelecimento adicionado, basta clicar em **Excluir**.

**14.** Em **Motivos para uma viagem**, elenque os motivos pelos quais uma viagem pode ser solicitada. Esses motivos poderão ser selecionados no momento da abertura da solicitação.

**Nome do motivo**Motivo pelo qual a viagem será feita, como visita a cliente, evento, visita a uma filial, capacitação etc.

Para adicionar mais motivos, clique em **Adicionar novo motivo** e preencha seu nome. Para excluir um motivo adicionado, basta clicar em **Excluir**.

**15.** Ainda na etapa **Cadastros**, em **Adiantamento**, defina as diretrizes sobre o adiantamento de custos monetários da viagem.

**Determinar valor fixo**Quando habilitada, determina que será definido um valor fixo diário que será adiantado para o solicitante – multiplicado pelos dias de duração da viagem – para cobrir os custos, como alimentação, locomoção, acomodação etc.
Se não for habilitada, determina que o valor não será fixo e o solicitante precisará informar o valor diário desejado de adiantamento e a moeda na qual será pago no momento da abertura da solicitação.

**Valor fixo diário padrão**
Valor fixo diário que será adiantado para o solicitante para cobrir os custos da viagem. Esse valor será multiplicado pelo número de dias de duração da viagem para determinar o valor total do adiantamento. Esse campo somente é exibido ao habilitar a opção **Determinar valor fixo**.

**Moeda do valor fixo diário padrão**
Moeda na qual o valor fixo diário será pago para o solicitante. Esse campo somente é exibido ao habilitar a opção **Determinar valor fixo**. As opções disponíveis são: 

- **Real (R$)**;
- **Dólar (US$)**;
- **Euro (€)**.

**16.** Clique em **Avançar**.

**17.** Na etapa **Revisão**, em **Dados do processo**, confira as principais informações do processo que será criado.

Se necessário, clique em **Voltar** até a etapa desejada para ajustar alguma configuração.

**18.** Clique em **Instalar** ![](https://tdn.totvs.com/download/attachments/745756064/instalar-flow.png).

Ao finalizar a instalação, um processo com o nome e na categoria definidos na configuração é listado no recurso [Iniciar solicitações](/pages/viewpage.action?pageId=233763157).

### Editar flow

---

        Your browser does not support the HTML5 video element

**01.** No menu lateral do TOTVS Fluig Plataforma, clique em **Painel de controle**.

**02.** No agrupador **Aplicativos**, clique em **Store**.

É possível ainda acessar diretamente pelo ícone da **Store** ![](/download/attachments/772028033/flaticon-rocket.png?version=1&modificationDate=1699379721547&api=v2) localizado no menu lateral, para ir diretamente para os aplicativos.

Por padrão, apenas administradores da plataforma tem acesso ao Painel de controle e, consequentemente ao recurso Store. Porém, como as permissões podem ser personalizadas, o acesso a esse recurso segue o que foi definido na sua plataforma.

**03.** Na área **Flows** do recurso Store, [localize](https://tdn.totvs.com/x/frOcEw#Plataforma%E2%9D%99ItensdaStore-Buscarsolu%C3%A7%C3%B5es) o *flow* Solicitação de viagem.

**04.** Clique em **Configurar** – localizado no quadro do *flow*.

**05.** Altere as informações desejadas em cada etapa e avance até a última.

**06.** Clique em **Atualizar** ![](https://tdn.totvs.com/download/attachments/745756064/instalar-flow.png).

Uma nova versão do processo será criada. As solicitações que estão em andamento continuam com os dados da versão antiga. Apenas as novas solicitações que forem abertas terão as informações que foram alteradas na nova versão.

### Atualizar flow

---

Quando houver atualizações disponíveis, o indicativo ATUALIZAR será exibido no *flow* para informar que ele pode ser atualizado.

**01.** No menu lateral do TOTVS Fluig Plataforma, clique em **Painel de controle**.

**02.** No agrupador **Aplicativos**, clique em **Store**.

É possível ainda acessar diretamente pelo ícone da **Store** ![](/download/attachments/772028033/flaticon-rocket.png?version=1&modificationDate=1699379721547&api=v2) localizado no menu lateral, para ir diretamente para os aplicativos.

Por padrão, apenas administradores da plataforma tem acesso ao Painel de controle e, consequentemente ao recurso Store. Porém, como as permissões podem ser personalizadas, o acesso a esse recurso segue o que foi definido na sua plataforma.

**03.** No recurso **Store**, [localize](https://tdn.totvs.com/x/frOcEw#Plataforma%E2%9D%99ItensdaStore-Buscarsolu%C3%A7%C3%B5es) e clique no **flow Solicitação de viagem**.

**04.** Clique em **Atualizar**.

Para pode utilizar as informações e melhorias da atualização liberada será necessário acessar o configurador do processo clicando em **Configurar **e passar pelas etapas **Geral**, **Responsável**, **Cadastros **e na etapa **Revisão **clicar no botão **Atualizar**.

Ao clicar em atualizar, uma nova versão do processo será criada com todas as correções e melhorias. As solicitações que estão em andamento continuarão com as configurações da versão antiga. Apenas as novas solicitações que forem abertas terão as configurações da nova versão do processo.

Ao realizar estes passos, as novidades e correções serão liberadas para o *flow *Solicitação de viagem.

## Processo criado

---

Ao finalizar a instalação do *flow*, o processo criado é listado juntamente com os demais processos existentes na plataforma, tanto no recurso [Configurar processos](/pages/viewpage.action?pageId=233763153) quanto no [Iniciar solicitações](/pages/viewpage.action?pageId=233763157).

			![](https://tdn.totvs.com/download/attachments/563436139/importante.png)

**IMPORTANTE!**
Como esse *flow* se torna um processo igual a qualquer outro dentro da plataforma, é possível alterá-lo ou até mesmo excluir seus artefatos. Porém, se for feita qualquer alteração no processo, diagrama, formulário ou outro artefato, o direito ao suporte padrão é automaticamente perdido.

As características do processo criado por esse *flow* são detalhadas a seguir.

### Diagrama

---

O diagrama define como o processo funciona, quais atividades o compõem e qual o caminho que a solicitação segue até a sua conclusão.

Este é o diagrama do *flow* de solicitação de viagem:

![](/download/attachments/772028033/solicitacao_viagem.png?version=1&modificationDate=1694560609080&api=v2)

### Atividades

---

As atividades que compõem o processo são:

SOLICITAR VIAGEM

Solicitante inicia o processo, preenche as informações necessárias e envia a solicitação para a atividade "**Analisar solicitação**".

ANALISAR SOLICITAÇÃO

O gestor do centro de custo entende a demanda, podendo aprovar, reprovar ou solicitar mais informações sobre a viagem, tanto pela plataforma Web quanto pelo aplicativo Approval.

Se aprovada, a solicitação avança para as atividades paralelas "**Programar pagamento**" e "**Reservar viagem**".

Se reprovada, a solicitação avança para a atividade "**Ajustar especificações da viagem**", na qual o solicitante precisa ajustar as informações necessárias.

Se cancelada, a solicitação é automaticamente cancelada e finalizada no sistema.

CANCELAR

É executado o processo de cancelamento.

AJUSTAR ESPECIFICAÇÕES DA VIAGEM

O solicitante altera as informações ou complementa os dados, de acordo com a orientação do gestor.

Ao avançar, retorna para a atividade "**Analisar solicitação**".

PROGRAMAR PAGAMENTO

O responsável verifica se todos os dados estão corretos para programar o pagamento.

Ao avançar, a solicitação é finalizada.

RESERVAR SERVIÇOS

O responsável verifica se todos os dados estão corretos para reservar a viagem.

Ao avançar, a solicitação é finalizada.

FINALIZAR

O processo é finalizado com sucesso.

### Restrições

---

O *flow* de Solicitação de viagem possui as seguintes restrições:

- não permite ser integrado a outros sistemas;

- não permite personalização, tais como, adicionar campos ao formulário, alterar o diagrama, adicionar ou remover atividades;

- não integra com *Self booking*;

- não controla ou cria pedido de compras dos serviços necessários para a viagem;

- não faz reservas automáticas.

			![](https://tdn.totvs.com/download/attachments/563436139/importante.png)

**IMPORTANTE!**
Como esse *flow* se torna um processo igual a qualquer outro dentro da plataforma, é possível alterá-lo ou até mesmo excluir seus artefatos. Porém, se for feita qualquer alteração no processo, diagrama, formulário ou outro artefato, o direito ao suporte padrão é automaticamente perdido.

## Abrir solicitação

---

É necessário que o *flow* Solicitação de viagem esteja instalado e devidamente parametrizado para abrir uma solicitação. Os usuários que podem abrir solicitação são os que foram definidos na configuração do *flow*, no campo "Quem poderá abrir uma solicitação?".

        Your browser does not support the HTML5 video element

**01.** No menu lateral do TOTVS Fluig Plataforma, clique em **Processos**.

**02.** Clique em **Iniciar solicitações**.

**03.** Localize e clique no processo de Solicitação de viagem.

O nome do processo e a categoria na qual ele se encontra são os que foram definidos durante a instalação e configuração.

**04.** Em **Dados gerais**, preencha as informações solicitadas.

**Usuário de abertura**
Usuário que está autenticado na plataforma. Não é possível alterá-lo.

**Data**
Data na qual a solicitação está sendo aberta. Não é possível alterá-la.

**Usuário solicitante**
Nome do usuário para o qual a solicitação está sendo feita. O usuário solicitante pode ser diferente do usuário de abertura, visto que o usuário de abertura pode estar abrindo uma solicitação em nome de outra pessoa ou solicitando algo para outra pessoa – que pode ou não ter acesso à plataforma – e não necessariamente para ele.

**E-mail do solicitante**
*E-mail* do usuário para o qual a solicitação está sendo feita. Pode ser diferente do *e-mail* do usuário de abertura, visto que o usuário de abertura pode estar abrindo uma solicitação em nome de outra pessoa ou solicitando algo para outra pessoa – que pode ou não ter acesso à plataforma – e não necessariamente para ele.

**Estabelecimento/Filial**
Nome da unidade, franquia ou filial à qual o usuário solicitante pertence.

**Centro de custo**
Centro de custo da área à qual o usuário solicitante pertence. Esse é o centro de custo no qual as despesas com a viagem serão alocadas.

**Gestor aprovador**
Gestor da área à qual o usuário solicitante pertence e responsável por aprovar as despesas do centro de custo. Ele é preenchido automaticamente ao selecionar o centro de custo e não é possível alterá-lo.

**E-mail do gestor**
*E-mail* do gestor da área à qual o usuário solicitante pertence. Ele é preenchido automaticamente ao selecionar o gestor e não é possível alterá-lo.

**05.** Em **Especificações da viagem**, preencha as informações relacionadas à viagem e sua duração.

**País origem**
País de onde o solicitante iniciará a viagem.

**Estado origem**
Estado de onde o solicitante iniciará a viagem.

**Cidade origem**
Cidade de onde o solicitante iniciará a viagem.

**País destino**
País para onde o solicitante irá viajar

**Estado destino**
Estado para onde o solicitante irá viajar

**Cidade destino**
Cidade para onde o solicitante irá viajar

**Data inicial**
Data a partir da qual o solicitante irá viajar.

**Data final**
Data na qual o solicitante retornará da viagem.

**Motivo**
Motivo pelo qual o solicitante fará a viagem.

**Observações**
Informações adicionais sobre a viagem.

**06.** Em **Serviços**, clique em **Adicionar mais serviços** para selecionar os tipos de serviços que serão necessários para a viagem.

As opções disponíveis são:

- **Voo**;
- **Hotel**;
- **Carro**;
- **Rodoviário**;
- **Seguros**;
- **Outros**.

			![](https://tdn.totvs.com/download/attachments/563436139/importante.png)

**IMPORTANTE!**
É necessário selecionar pelo menos um serviço para prosseguir com a solicitação.

Se a viagem for aprovada, o responsável por reservar os serviços adicionará todas as informações necessárias sobre os serviços reservados.

**07.** Em **Adiantamento**, preencha as informações necessárias para o cálculo do adiantamento monetário para cobrir os custos da viagem.

**Quantidade de dias**
Quantidade de dias de duração da viagem. Ele é preenchido automaticamente ao informar a data de início e fim da viagem e não é possível alterá-lo.

**Moeda**
Moeda na qual o adiantamento para cobrir os custos da viagem deve ser pago. Esse campo somente é habilitado quando não foi definido um valor fixo padrão na configuração do *flow*. As opções disponíveis são: 

- **Real (R$)**;
- **Dólar (US$)**;
- **Euro (€)**.

**Valor diário**
Valor diário desejado para cobrir os custos da viagem. Esse valor será multiplicado pelo número de dias de duração da viagem. Esse campo somente é habilitado quando não foi definido um valor fixo padrão na configuração do *flow*.

**Total**
Valor diário multiplicado pelo número de dias de duração da viagem. Não é possível alterá-lo, é apenas informativo.

**Justificativa do adiantamento**
Detalhamento da necessidade de receber o adiantamento para cobrir os custos da viagem.

**08.** Em **Dados bancários**, preencha as informações relacionadas à conta na qual deseja receber o adiantamento.

**Agência**
Agência bancária da conta na qual deseja receber o adiantamento.

**Número da conta**
Número da conta bancária na qual deseja receber o adiantamento.

**Banco**
Descrição detalhada sobre a situação que levou à abertura da ocorrência.

**Código do banco**
Descrição detalhada sobre a situação que levou à abertura da ocorrência.

			![](https://tdn.totvs.com/download/attachments/563436139/importante.png)

**IMPORTANTE!**
É necessário que o solicitante seja o titular da conta.

Se não for informada uma conta para receber o adiantamento, ele será depositado na conta do solicitante cadastrada no RH da empresa.

**09.** Se necessário, acesse as abas **Histórico** e **Anexos** – localizadas na parte superior – para complementar a solicitação com comentários ou documentos.

Informações mais detalhadas sobre as demais opções existentes podem ser obtidas em [Iniciar solicitações](/pages/viewpage.action?pageId=233763157).

**10.** Clique em **Enviar**.

Sua solicitação será aberta e pode ser acompanhada pela [Central de tarefas](/pages/viewpage.action?pageId=233762817) → [Minhas solicitações](/pages/viewpage.action?pageId=233763398).


<!-- anchors: Flows|Solicitaçãodeviagem-Falandodesolicitaçãodeviagem..., Flows|Solicitaçãodeviagem-Comoadquirir, Flows|Solicitaçãodeviagem-Instalação, Flows|Solicitaçãodeviagem-Requisitoparauso, Flows|Solicitaçãodeviagem-Linksexternos, Flows|Solicitaçãodeviagem-Parametrizações, Flows|Solicitaçãodeviagem-Instalareconfigurarflowinstalar, Flows|Solicitaçãodeviagem-Editarflow, Flows|Solicitaçãodeviagem-Atualizarflow, Flows|Solicitaçãodeviagem-Processocriado, Flows|Solicitaçãodeviagem-Diagrama, Flows|Solicitaçãodeviagem-Atividades, Flows|Solicitaçãodeviagem-Restrições, Flows|Solicitaçãodeviagem-Abrirsolicitação -->
