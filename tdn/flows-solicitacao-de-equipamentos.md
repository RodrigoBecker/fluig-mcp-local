---
title: "Flows | Solicitação de equipamentos"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=775483565"
scraped_at: "2026-03-09T04:30:39.565Z"
depth: 3
anchors: 13
child_links: 40
---

# Flows | Solicitação de equipamentos

# Falando de solicitação de equipamentos...

---

O *flow* de solicitação de equipamentos permite que um funcionário registre a sua solicitação de equipamentos para o almoxarifado. Podendo ainda definir uma alçada de aprovação com o teto de valor do equipamento que poderá ser aprovado automaticamente. Ou seja, se o valor estiver dentro do limite alçado, não é necessária a aprovação do gestor do centro de custo, indo diretamente para o responsável por fornecer o equipamento.

Depois de adquirido, instalado e configurado, ele cria um processo igual a qualquer outro processo padrão da plataforma, ou seja, a abertura de solicitações é a partir do recurso [Iniciar solicitação](https://tdn.totvs.com/pages/viewpage.action?pageId=233763157).

			![](https://tdn.totvs.com/download/attachments/563436139/nota.png)

**NOTA:**
Esse *flow* não valida se o item está disponível em estoque, se existem ordens de compras em aberto para determinado equipamento e não contempla os processos relativos a ativos fixos: registro, plaqueta, responsável, depreciação, entre outros.

Este *flow*segue as leis gerais de proteção de dados - LGPD. O tratamento de dados pessoais realizado, possibilita que o administrador do Fluig faça a anonimização de dados, caso deseje ou seja solicitado. Para isso, basta acessar: **Painel de controle > Segurança e acesso > Anonimizar e exportar dados pessoais.**

![](/download/attachments/775483565/tela%20flow%20de%20equipamentos.png?version=1&modificationDate=1701784493203&api=v2)

## Como adquirir

---

O *flow* de solicitação de equipamentos é listado como uma solução paga no recurso [Store](https://tdn.totvs.com/x/frOcEw) do TOTVS Fluig Plataforma a partir da atualização **Mist - 1.8.0-230523**.

Para adquiri-lo, é necessário entrar em contato com o executivo de soluções de negócio responsável por sua conta.

Com o processo de aquisição finalizado, o acesso à instalação do *flow* é liberado, sendo necessário instalá-lo para utilizar. Neste caso, basta seguir os passos descritos em [Instalar e configurar *flow*](#Flows|Solicitaçãodeequipamentos-instalar).

## Instalação

---

Depois de adquirir esse *flow*, ele estará liberado para instalação a partir do recurso [Store](https://tdn.totvs.com).

### Requisitos para uso

---

Para instalar e utilizar esse *flow*, é necessário:

- Ter o TOTVS Fluig Plataforma instalado e parametrizado a partir da atualização **Mist - 1.8.0-230523;**
- Utilização de processo padrão.

### Parametrizações

---

Durante a instalação desse *flow*, é necessário definir as seguintes parametrizações, que serão divididas em quatro etapas:

- **Geral**:** **onde são definidos os dados gerais do processo, gestor e prazos de expiração e de aviso;

- **Responsáveis**: onde são definidos os responsáveis e o SLA de cada atividade;

- **Cadastros**: onde são definidas as opções que serão consumidas durante o preenchimento da solicitação como centro de custo, estabelecimento, valor teto e equipamentos;

- **Revisão**: onde são listados os principais dados do processo que será criado para conferência.

### Instalar e configurar flow 

---

        Your browser does not support the HTML5 video element

**01.** No menu lateral do TOTVS Fluig Plataforma, clique em **Painel de controle**.

**02.** No agrupador **Aplicativos**, clique em **Store**.

É possível ainda acessar diretamente pelo ícone da **Store** ![](/download/attachments/775483565/flaticon-rocket.png?version=1&modificationDate=1700131644010&api=v2) localizado no menu lateral, para ir diretamente para os aplicativos.

Por padrão, apenas administradores da plataforma tem acesso ao Painel de controle e, consequentemente ao recurso Store. Porém, como as permissões podem ser personalizadas, o acesso a esse recurso segue o que foi definido na sua plataforma.

**03.** Na área **Flows** do recurso Store, [localize](https://tdn.totvs.com/x/frOcEw#Plataforma%E2%9D%99ItensdaStore-Buscarsolu%C3%A7%C3%B5es) e clique no *flow* **Solicitação de equipamentos**.

**04.** Clique em **Configurar**.

A configuração é iniciada e, quando concluída, uma notificação é emitida.

**05.**Na etapa **Geral**, em **Dados gerais**, defina as informações de apresentação e identificação.

**Código identificador do processo**
Exibe o código de identificação do processo. Não é possível alterá-lo.

**Nome do processo**
Nome que visa facilitar o reconhecimento do processo e do seu objetivo. Esse nome será exibido posteriormente no recurso [Iniciar solicitação](/pages/viewpage.action?pageId=233763157).

**Descrição**
Breve descrição sobre os detalhes do processo e instruções para os solicitantes utilizarem.

**Categoria**
Categoria na qual o processo se enquadra. Ele será exibido dentro dessa categoria no recurso [Iniciar solicitação](/pages/viewpage.action?pageId=233763157).

**Perfil do gestor do processo**Pessoa que será definida como gestora do processo, ou seja, na ausência do responsável por alguma atividade, essa pessoa pode substitui-lo e continuar com a movimentação da solicitação.  Se não for definida uma pessoa gestora, apenas os responsáveis pelas atividades poderão movimentar a solicitação, ou seja, na ausência de algum responsável, a solicitação permanecerá parada. As opções disponíveis são:

- **Todos de um grupo específico**: quando selecionada, determina que os gestores serão as pessoas que fazem parte de um determinado grupo;
- **Todos de um papel específico**: quando selecionada, determina que os gestores serão as pessoas que fazem parte de um determinado papel;
- **Por uma pessoa**: quando selecionada, determina que o gestor será uma pessoa específica.
- **Qualquer pessoa**: quando selecionada, determina que o gestor pode ser qualquer pessoa.

**Grupo, papel ou pessoa específica**Grupo, papel ou pessoa específica que poderá ser definida como gestora do processo, de acordo com a opção que foi selecionada em **Pessoa gestora do processo**.

**Prazo de expiração (em horas)**
Tempo máximo acordado, em horas, durante o qual a solicitação ficará disponível. Ao atingir o tempo máximo, uma notificação é emitida informando que a solicitação expirou. Ao ser configurado, o tempo é calculado levando em conta o expediente padrão cadastrado na plataforma. Esse prazo não pode ser menor que o prazo de notificação.

**Prazo de aviso (em horas)**
Tempo acordado, em horas, para que uma notificação seja enviada antes do prazo de expiração da solicitação. Ao ser configurado, o tempo é calculado levando em conta o expediente padrão cadastrado na plataforma. Esse prazo não pode ser maior que o prazo de expiração.

**06.**Clique em **Avançar**.

**07.**Na etapa **Responsáveis**, em **Solicitante**, defina a pessoa responsável por abrir a solicitação e como ela deve interagir com as atividades sob sua responsabilidade, aplicando as regras necessárias de acordo com o seu modelo de negócio.

**1 - ABRIR SOLICITAÇÃO**

**Quem poderá abrir uma solicitação**Pessoas que podem abrir solicitação no processo criado por esse *flow*. As opções disponíveis são:

- **Qualquer pessoa**: quando selecionada, determina que qualquer pessoa pode abrir solicitação.
- **Todos de um grupo específico**: quando selecionada, determina que todas as pessoas que fazem parte de um determinado grupo podem abrir solicitação;
- **Todos de um papel específico**: quando selecionada, determina que todas as pessoas que fazem parte de um determinado papel podem abrir solicitação;
- **Uma pessoa específica**: quando selecionada, determina que apenas uma pessoa específica pode abrir solicitação;

**Grupo, papel ou usuário específico**
Grupo, papel ou pessoa que pode abrir solicitações nesse processo, de acordo com a opção que foi selecionada em **Quem poderá abrir uma solicitação**.

**Acompanhamento**
Envio de notificação sobre o início da solicitação para as pessoas envolvidas. As opções disponíveis são:

- **Notificar responsável**: quando assinalada, determina que uma notificação sobre o início da solicitação será enviada ao responsável pela primeira atividade;
- **Notificar solicitante**: quando assinalada, determina que uma notificação sobre o início da solicitação será enviada ao solicitante;
- **Notificar gestor**: quando assinalada, determina que uma notificação sobre o início da solicitação será enviada ao gestor do processo.

---

**2 - RECEBER E VALIDAR EQUIPAMENTO**A responsabilidade da atividade receber e validar equipamento é atribuída à pessoa que abriu a solicitação.

**Acompanhamento**
Envio de notificação sobre o início da atividade para as pessoas envolvidas. As opções disponíveis são:

- **Notificar responsável**: quando assinalada, determina que uma notificação sobre o início da atividade será enviada ao responsável por ela;
- **Notificar solicitante**: quando assinalada, determina que uma notificação sobre o início da atividade será enviada ao solicitante;
- **Notificar gestor**: quando assinalada, determina que uma notificação sobre o início da atividade será enviada ao gestor do processo.

**Prazo de conclusão (em horas)**
Tempo, em horas, dentro do qual essa atividade deve ser concluída. Após esse tempo, ela será considerada atrasada. Se configurado, o tempo é calculado levando em conta o expediente padrão cadastrado na plataforma e o momento em que o solicitante iniciou a solicitação.

---

**Gestor do centro de custo**Defina as configurações relacionadas a atividade de aprovação, conforme centro de custo. O cadastro do centro de custo é definido no próximo passo, juntamente com o responsável.

**1 - Análise de centro de custo**A responsabilidade da atividade é definida de acordo com o gestor do centro de custo que será informado na abertura da solicitação.

**Acompanhamento**
Envio de notificação sobre o início da atividade para as pessoas envolvidas. As opções disponíveis são:

- **Notificar responsável**: quando assinalada, determina que uma notificação sobre o início da atividade será enviada ao responsável por ela;
- **Notificar solicitante**: quando assinalada, determina que uma notificação sobre o início da atividade será enviada ao solicitante;
- **Notificar gestor**: quando assinalada, determina que uma notificação sobre o início da atividade será enviada ao gestor do processo.

**Prazo de conclusão (em horas)**
Tempo, em horas, dentro do qual essa atividade deve ser concluída. Após esse tempo, ela será considerada atrasada. Se configurado, o tempo é calculado levando em conta o expediente padrão cadastrado na plataforma e o momento em que o solicitante iniciou a solicitação.

---

**Almoxarifado**Configure na atividade os responsáveis pelo equipamento e como o setor de almoxarifado deve realizar o atendimento da solicitação.

**01 - Disponibilizar equipamentos**

**Quem poderá disponibilizar os equipamentos**Pessoas que podem disponibilizar equipamentos para este *flow*. As opções disponíveis são:

- **Qualquer pessoa**: quando selecionada, determina que qualquer pessoa poderá disponibilizá-lo;
- **Uma pessoa específica**: quando selecionada, determina que apenas uma pessoa específica pode disponibilizá-lo.
- **Todos de um papel específico**: quando selecionada, determina que todas as pessoas que fazem parte de um determinado papel podem disponibilizá-lo;
- **Todos de um grupo específico**: quando selecionada, determina que todas as pessoas que fazem parte de um determinado grupo podem disponibilizá-lo;
- **Uma pessoa específica**: quando selecionada, determina que apenas uma pessoa específica pode disponibilizá-lo;
- **Uma pessoa de um papel específico**: quando selecionada, determina que a solicitação será enviada para uma pessoa de um papel específico e apenas ela pode assumir a atividade;
- **Uma pessoa de um grupo específico**: quando selecionada, determina que a solicitação será enviada para uma pessoa de um grupo específico e apenas ela pode assumir a atividade.

**Grupo, papel ou usuário específico**
Grupo, papel ou pessoa que pode abrir solicitações nesse processo, de acordo com a opção que foi selecionada em **Quem poderá disponibilizar os equipamentos**.

**Acompanhamento**
Envio de notificação sobre o início da atividade para as pessoas envolvidas. As opções disponíveis são:

- **Notificar responsável**: quando assinalada, determina que uma notificação sobre o início da atividade será enviada ao responsável por ela;
- **Notificar solicitante**: quando assinalada, determina que uma notificação sobre o início atividade será enviada ao solicitante;
- **Notificar gestor**: quando assinalada, determina que uma notificação sobre o início da atividade será enviada ao gestor do processo.

**Prazo de conclusão (em horas)**
Tempo, em horas, dentro do qual essa atividade deve ser concluída. Após esse tempo, ela será considerada atrasada. Se configurado, o tempo é calculado levando em conta o expediente padrão cadastrado na plataforma e o momento em que o solicitante iniciou a solicitação.

---

**02 - Analisar problema**

**Quem poderá analisar o problema**Pessoas que podem analisar o problema deste *flow*. As opções disponíveis são:

- **Qualquer pessoa**: quando selecionada, determina que qualquer pessoa pode analisar o problema;
- **Uma pessoa específica**: quando selecionada, determina que apenas uma pessoa específica pode analisar o problema.
- **Uma pessoa de um grupo específico**: quando selecionada, determina que a solicitação será enviada para uma pessoa de um grupo específico e apenas ela pode assumir a atividade;
- **Uma pessoa de um papel específico**: quando selecionada, determina que a solicitação será enviada para uma pessoa de um papel específico e apenas ela pode assumir a atividade;
- **Todos de um grupo específico**: quando selecionada, determina que todas as pessoas que fazem parte de um determinado grupo podem analisar o problema;
- **Todos de um papel específico**: quando selecionada, determina que todas as pessoas que fazem parte de um determinado papel podem analisar o problema;
- **Atribuição por executor de atividade:**quando selecionada, determina que o responsável pela atividade será o mesmo pré-definido em uma atividade anterior.

**Grupo, papel ou usuário específico**
Grupo, papel ou pessoa que pode abrir solicitações nesse processo, de acordo com a opção que foi selecionada em **Quem poderá analisar o problema**.

**Acompanhamento**
Envio de notificação sobre o início da atividade para as pessoas envolvidas. As opções disponíveis são:

- **Notificar responsável**: quando assinalada, determina que uma notificação sobre o início da atividade será enviada ao responsável por ela;
- **Notificar solicitante**: quando assinalada, determina que uma notificação sobre o início da atividade será enviada ao solicitante;
- **Notificar gestor**: quando assinalada, determina que uma notificação sobre o início da atividade será enviada ao gestor do processo.

**Prazo de conclusão (em horas)**
Tempo, em horas, dentro do qual essa atividade deve ser concluída. Após esse tempo, ela será considerada atrasada. Se configurado, o tempo é calculado levando em conta o expediente padrão cadastrado na plataforma e o momento em que o solicitante iniciou a solicitação.

**08.** Para visualizar o fluxo da solicitação, clique em **Visualizar fluxo**.

**09**. Clique em **Avançar**.

**10.**Na etapa **Cadastros**, em **Centro de custo** determine os centros de custos e seus responsáveis.

**Código:**código do centro de custo de itens. Não é possível gerar códigos repetidos. Após ser salvo, ele não poderá ser editado ou excluído. 

**Nome do centro de custo:**definir um nome para o centro de custo.

**Gestor do centro de custo:**definir um gestor responsável pelo centro de custo.

Para adicionar um novo centro de custo, basta acionar o item **+ Adicionar novo centro de custo.**

**11.**Ainda na etapa **Cadastros**, em **Estabelecimento**, insira o nome dos estabelecimentos (matriz, franquias e filiais) de sua empresa ou organização.

**Nome do estabelecimento: **defina o nome do estabelecimento.

Para adicionar um novo estabelecimento, basta acionar o item **+ Adicionar novo estabelecimento.**

**12.** Ainda na etapa **Cadastros**, em **Valor teto**, defina um valor que determinará se a solicitação precisa do centro de custo (superior ao valor teto) ou irá direto para a atividade disponibilizar equipamentos (inferior ao valor teto).

**Valor teto**: insira um valor em reais.

**13.** Ainda na etapa **Cadastros**, em **Equipamentos**, determine os tipos de equipamentos que os solicitantes podem solicitar.

**Código:** insira um código para o equipamento.

**Nome do item:** insira um nome para o equipamento.

**UN de medida:** insira a unidade de medida do equipamento.

**Valor:** insira um valor por equipamento.

Para adicionar mais equipamentos à lista, determine a quantidade que deseja e acione **Confirmar**.

**14**. Clique em **Avançar**.

**15.** Na etapa **Revisão**, em **Dados do processo**, confira as principais informações do processo que será criado..

Se necessário, clique em **Voltar** até a etapa desejada para ajustar alguma configuração.

**16.** Clique em **Instalar** ![](https://tdn.totvs.com/download/attachments/745756064/instalar-flow.png).

Ao finalizar a instalação, um processo com o nome e na categoria definidos na configuração é listado no recurso [Iniciar solicitações](/pages/viewpage.action?pageId=233763157).

### Editar flow

---

        Your browser does not support the HTML5 video element

**01.** No menu lateral do TOTVS Fluig Plataforma, clique em **Painel de controle**.

**02.** No agrupador **Aplicativos**, clique em **Store**.

Por padrão, apenas administradores da plataforma tem acesso ao Painel de controle e, consequentemente ao recurso Store. Porém, como as permissões podem ser personalizadas, o acesso a esse recurso segue o que foi definido na sua plataforma.

**03.** Na área **Flows** do recurso Store, [localize](https://tdn.totvs.com/x/frOcEw#Plataforma%E2%9D%99ItensdaStore-Buscarsolu%C3%A7%C3%B5es) o *flow* Solicitação de equipamentos.

**04.** Clique em **Configurar** – localizado no quadro do *flow*.

**05.** Altere as informações desejadas em cada etapa e avance até a última.

**06.** Clique em **Atualizar** ![](https://tdn.totvs.com/download/attachments/745756064/instalar-flow.png).

Ao editar e atualizar o processo, uma nova versão será criada. As solicitações que estão em andamento continuarão com as configurações da versão antiga. Apenas as novas solicitações que forem abertas terão as configurações da nova versão.

### Atualizar flow

---

**Quando houver atualizações disponíveis, o indicativo ATUALIZAR será exibido no flow para informar que ele pode ser atualizado.**

**01.** No menu lateral do TOTVS Fluig Plataforma, clique em **Painel de controle**.

**02.** No agrupador **Aplicativos**, clique em **Store**.

Por padrão, apenas administradores da plataforma tem acesso ao Painel de controle e, consequentemente ao recurso Store. Porém, como as permissões podem ser personalizadas, o acesso a esse recurso segue o que foi definido na sua plataforma.

**03.** No recurso **Store**, [localize](https://tdn.totvs.com/x/frOcEw#Plataforma%E2%9D%99ItensdaStore-Buscarsolu%C3%A7%C3%B5es) e clique no *flow* de **Solicitação de equipamentos**.

**04.** Clique em **Atualizar**.

Para pode utilizar as informações e melhorias da atualização liberada será necessário acessar o configurador do processo clicando em **Configurar **e passar pelas etapas **Geral**, **Responsável**, **Cadastros **e na etapa **Revisão **clicar no botão **Atualizar**.

Ao clicar em atualizar, uma nova versão do processo será criada com todas as correções e melhorias. As solicitações que estão em andamento continuarão com as configurações da versão antiga. Apenas as novas solicitações que forem abertas terão as configurações da nova versão do processo.

Ao realizar estes passos, as novidades e correções serão liberadas para o **flow Solicitação de equipamento.**

## Processo criado

---

Ao finalizar a configuração do *flow*, o processo criado é listado juntamente com os demais processos existentes na plataforma, tanto no recurso [Configurar processos](/pages/viewpage.action?pageId=233763153) quanto no [Iniciar solicitações](/pages/viewpage.action?pageId=233763157).

			![](https://tdn.totvs.com/download/attachments/563436139/importante.png)

**IMPORTANTE!**
Como esse *flow* se torna um processo igual a qualquer outro dentro da plataforma, é possível alterá-lo ou até mesmo excluir seus artefatos. Porém, se for feita qualquer alteração no processo, diagrama, formulário ou outro artefato, o direito ao suporte padrão é automaticamente perdido.

As características do processo criado por esse *flow* são detalhadas a seguir.

### Diagrama

---

O diagrama define como o processo funciona, quais atividades o compõem e qual o caminho que a solicitação segue até a sua conclusão.

Este é o diagrama do *flow* de solicitação de equipamentos:

![](/download/attachments/775483565/solicitacao_equipamentos.png?version=1&modificationDate=1694560814103&api=v2)

### Atividades

---

As atividades que compõem o processo são:

INÍCIO

O processo é iniciado

SOLICITAR EQUIPAMENTO

Solicitante abre o processo, preenche as informações necessárias como dados gerais, dados do equipamento e justificativa.

ANÁLISE DE CENTRO DE CUSTO

O Gestor do centro de custo analisa as informações da solicitação, podendo aprovar ou reprovar.

CANCELAR

Executa o cancelamento do processo.

DISPONIBILIZAR EQUIPAMENTOS

O responsável pelo almoxarifado analisa os dados e prepara o produto para ser disponibilizado para o solicitante.

REVISAR E VALIDAR EQUIPAMENTOS

O Solicitante confirma o recebimento do equipamento e faz a validação.

ANALISAR PROBLEMA

O responsável pelo almoxarifado analisa o problema descrito pelo solicitante.

FIM

O processo é finalizado.

### Restrições

---

O *flow* de solicitação de equipamentos possui as seguintes restrições:

- Não permite integrações com outros sistemas;

- Não é customizável.

			![](https://tdn.totvs.com/download/attachments/563436139/importante.png)

**IMPORTANTE!**
Como esse *flow* se torna um processo igual a qualquer outro dentro da plataforma, é possível alterá-lo ou até mesmo excluir seus artefatos. Porém, se for feita qualquer alteração no processo, diagrama, formulário ou outro artefato, o direito ao suporte padrão é automaticamente perdido.

## Abrir solicitação

---

É necessário que o *flow* Solicitação de equipamentos esteja instalado e devidamente parametrizado para abrir uma solicitação. Os usuários que podem abrir solicitação são os que foram definidos na configuração do *flow*, no campo "Quem poderá abrir uma solicitação?".

        Your browser does not support the HTML5 video element

**01.** No menu lateral do TOTVS Fluig Plataforma, clique em **Processos**.

**02.** Clique em **Iniciar solicitações**.

**03.** Localize e clique no processo de abertura de Solicitação de equipamentos.

O nome do processo e a categoria na qual ele se encontra são os que foram definidos durante a instalação e configuração.

**04.** Em **Dados gerais**, preencha as informações solicitadas.

**Usuário de abertura**Usuário que está autenticado na plataforma. Não é possível alterá-lo.****

**Data**
Data na qual a solicitação está sendo aberta. Não é possível alterá-la.

**Usuário solicitante**
Nome do usuário para o qual a solicitação está sendo feita. O usuário solicitante pode ser diferente do usuário de abertura, visto que o usuário de abertura pode estar abrindo uma solicitação em nome de outra pessoa ou solicitando algo para outra pessoa – que pode ou não ter acesso à plataforma – e não necessariamente para ele.

**E-mail do solicitante**
*E-mail* do usuário para o qual a solicitação está sendo feita. Pode ser diferente do *e-mail* do usuário de abertura, visto que o usuário de abertura pode estar abrindo uma solicitação em nome de outra pessoa ou solicitando algo para outra pessoa – que pode ou não ter acesso à plataforma – e não necessariamente para ele.

**Estabelecimento/Filial**Busque pelo nome do estabelecimento ou filial do usuário solicitante.

**Centro de custo**Busque pelo número ou nome do centro de custo do usuário solicitante.

**Gestor aprovador do centro de custo**Busque pelo gestor da área à qual o usuário solicitante pertence.

**E-mail do gestor**
*E-mail* do gestor da área à qual o usuário solicitante pertence. Ele é preenchido automaticamente ao selecionar o gestor.

**05.**Em **Equipamentos**, preencha os dados referentes aos equipamentos que serão solicitados.

**Data de entrega desejada**Informe a data da entrega.

**Item de equipamento**Informe o nome do item de equipamento.

**Quantidade**Informe a quantidade de itens desejados.

**Unidade de medida**Unidade de medida deste item. Campo preenchido automaticamente conforme o cadastro do tipo de equipamento.

**Valor unitário**Valor unitário deste item. Campo preenchido automaticamente conforme o cadastro do tipo de equipamento.

**Total**Mostra o valor total dos itens. Campo preenchido automaticamente conforme o cadastro do tipo de equipamento.

**Valor total dos itens**Mostra o valor final de todos os itens cadastrados

Para adicionar um novo item, basta acionar o item **+ Adicionar novo item.**

**06.** Em **Justificativa**, preencha com os motivos para a sua solicitação de equipamentos e as possíveis informações complementares.

**07.** Clique em **Enviar**

**08**.Na atividade **Análise do centro de custo**, preencha as informações complementares sobre a análise do centro de custo da solicitação.

**Gestor aprovador do centro de custo**Nome do gestor aprovador do centro de custo.

**Data**Informe a data da análise da solicitação.

**Justificativa**Informe a justificativa da análise da solicitação.

**09**. Clique em **Enviar.**

**10**. Na atividade **Disponibilizar equipamento**, preencha as informações complementares sobre a disponibilização e entrega do equipamento ao solicitante.

**Responsável por equipamentos**Nome do responsável.

**Data**Informe a data da entrega.

**Considerações**Informe as considerações, caso houver.

**11.**Clique em **Enviar.**

**12**. Na atividade **Analise do equipamento**, preencha as informações referente ao recebimento e validação dos equipamentos solicitados.

**Usuário de abertura**Nome do usuário responsável pela abertura da solicitação.

**Data**Data da entrega do equipamento.

**Houve algum problema com os equipamentos?**Selecione através das opções disponíveis, se houve ou não algum problema com o equipamento. 

**Considerações**Informe as considerações, caso houver.

**13.**Clique em **Enviar.**

**14**. Na atividade **Analisar problema**, preencha as informações complementares sobre a disponibilização e entrega do equipamento ao solicitante.

**Responsável por equipamentos**Nome do usuário responsável pelos equipamentos.

**Data**Data da análise do equipamento.

**Considerações**Informe as considerações, caso houver.

**15.** Clique em **Enviar.**

**16.** Se necessário, acesse as abas **Histórico** e **Anexos** – localizadas na parte superior – para complementar a solicitação com comentários ou documentos.

Sua solicitação será aberta e pode ser acompanhada pela [Central de tarefas](/pages/viewpage.action?pageId=233762817) → [Minhas solicitações](/pages/viewpage.action?pageId=233763398).


<!-- anchors: Flows|Solicitaçãodeequipamentos-Falandodesolicitaçãodeequipamentos..., Flows|Solicitaçãodeequipamentos-Comoadquirir, Flows|Solicitaçãodeequipamentos-Instalação, Flows|Solicitaçãodeequipamentos-Requisitosparauso, Flows|Solicitaçãodeequipamentos-Parametrizações, Flows|Solicitaçãodeequipamentos-Instalareconfigurarflowinstalar, Flows|Solicitaçãodeequipamentos-Editarflow, Flows|Solicitaçãodeequipamentos-Atualizarflow, Flows|Solicitaçãodeequipamentos-Processocriado, Flows|Solicitaçãodeequipamentos-Diagrama, Flows|Solicitaçãodeequipamentos-Atividades, Flows|Solicitaçãodeequipamentos-Restrições, Flows|Solicitaçãodeequipamentos-Abrirsolicitação -->
