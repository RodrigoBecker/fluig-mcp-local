---
title: "Flows | Lançamento de documento"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=754249133"
scraped_at: "2026-03-09T04:30:18.660Z"
depth: 3
anchors: 13
child_links: 41
---

# Flows | Lançamento de documento

# Falando de lançamento de documento...

---

O *flow* de Lançamento de documento +permite ao colaborador lançar dados referentes a um documento, seja uma nota, recibo, boleto ou outro que a empresa possua, com a obrigatoriedade de anexar o documento citado.****Quando aprovada a etapa de Análise do documento, o mesmo será publicado no ECM e herdará as propriedades de validade e notificação.

Depois de adquirido, instalado e configurado, ele cria um processo igual a qualquer outro processo padrão da plataforma, ou seja, a abertura de solicitações é a partir do recurso [Iniciar solicitação](/pages/viewpage.action?pageId=233763157).

			![](https://tdn.totvs.com/download/attachments/563436139/nota.png)

**NOTA:**
Esse *flow* não envia o documento ou as informações do documento para o ERP. Também não efetua controle ou geração de pagamentos.

Este *flow*segue as leis gerais de proteção de dados - LGPD. O tratamento de dados pessoais realizado, possibilita que o administrador do Fluig faça a anonimização de dados, caso deseje ou seja solicitado. Para isso, basta acessar: **Painel de controle > Segurança e acesso > Anonimizar e exportar dados pessoais.**

![](/download/attachments/754249133/tela%20flow%20de%20documento.png?version=1&modificationDate=1700681874123&api=v2)

## Como adquirir

---

O *flow* de Lançamento de documento é listado como uma solução paga no recurso [Store](/display/fluig/Plataforma+%7C+Store) do TOTVS Fluig Plataforma a partir da atualização **Mist - 1.8.0-230523**.

Para adquiri-lo, é necessário entrar em contato com o executivo de soluções de negócio responsável por sua conta.

Com o processo de aquisição finalizado, o acesso à instalação do *flow* é liberado, sendo necessário instalá-lo para utilizar. Neste caso, basta seguir os passos descritos em [Instalar e configurar *flow*](#Flows|Lançamentodedocumento-instalar).

## Instalação

---

Depois de adquirir esse *flow*, ele estará liberado para instalação a partir do recurso [Store](https://tdn.totvs.com/x/frOcEw).

### Requisito para uso

---

Para instalar e utilizar esse *flow*, é necessário:

- ter o TOTVS Fluig Plataforma instalado e parametrizado a partir da atualização **Mist - 1.8.0-230523**;

- utilização de processo padrão.

### Parametrizações

---

Durante a instalação desse *flow*, é necessário definir algumas parametrizações, que são divididas em quatro etapas:

- **Geral:**onde são definidos os dados gerais do processo, gestor e prazos de expiração e de aviso;

- **Responsáveis**: onde são definidos os responsáveis e o SLA de cada atividade;

- **Cadastros**: onde são definidas as opções que serão consumidas durante o preenchimento da solicitação como centro de custo e estabelecimento;

- **Revisão**: onde são listados os principais dados do processo que será criado para conferência.

### Instalar e configurar flow 

---

        Your browser does not support the HTML5 video element

**01.** No menu lateral do TOTVS Fluig Plataforma, clique em **Painel de controle**.

**02.** No agrupador **Aplicativos**, clique em **Store**.

É possível ainda acessar diretamente pelo ícone da **Store** ![](/download/attachments/754249133/flaticon-rocket.png?version=1&modificationDate=1699620006080&api=v2) localizado no menu lateral, para ir diretamente para os aplicativos.

Por padrão, apenas administradores da plataforma tem acesso ao Painel de controle e, consequentemente ao recurso Store. Porém, como as permissões podem ser personalizadas, o acesso a esse recurso segue o que foi definido na sua plataforma.

**03.** Na área **Flows** do recurso Store, [localize](https://tdn.totvs.com/x/frOcEw#Plataforma%E2%9D%99ItensdaStore-Buscarsolu%C3%A7%C3%B5es) e clique no *flow* Lançamento de documento.

**04.** Clique em **Configurar** – localizado no quadro do *flow*.

**06.**Na etapa **Geral**, em **Dados gerais**, defina as informações de apresentação e comportamento geral.

**Código identificador do processo**
Exibe o código de identificação do processo. Não é possível alterá-lo.

**Nome do processo**
Nome que visa facilitar o reconhecimento do processo e do seu objetivo. Esse nome será exibido posteriormente no recurso [Iniciar solicitação](/pages/viewpage.action?pageId=233763157).

**Descrição**
Breve descrição sobre os detalhes do processo e instruções para os solicitantes utilizarem.

**Categoria**
Categoria na qual o processo se enquadra. Ele será exibido dentro dessa categoria no recurso [Iniciar solicitação](/pages/viewpage.action?pageId=233763157).

**Perfil gestor do processo**
Pessoa que será definida como gestora do processo, ou seja, na ausência do responsável por alguma atividade, essa pessoa pode substitui-lo e continuar com a movimentação da solicitação. Se não for definida uma pessoa gestora, apenas os responsáveis pelas atividades poderão movimentar a solicitação, ou seja, na ausência de algum responsável, a solicitação permanecerá parada. As opções disponíveis são:

- **Qualquer pessoa**: quando selecionada, determina que qualquer pessoa pode ser gestor da solicitação;
- **Todos de um grupo específico**: quando selecionada, determina que os gestores serão as pessoas que fazem parte de um determinado grupo;
- **Todos de um papel específico**: quando selecionada, determina que os gestores serão as pessoas que fazem parte de um determinado papel;
- **Uma pessoa específica**: quando selecionada, determina que o gestor será uma pessoa específica.

**Grupo, papel ou pessoa específica**Grupo, papel ou pessoa que será definida como gestora do processo, de acordo com a opção que foi selecionada em **Perfil gestor do processo**.

**Prazo de conclusão (em horas)**
Tempo máximo acordado, em horas, durante o qual a solicitação ficará disponível. Ao atingir o tempo máximo, uma notificação é emitida informando que a solicitação expirou. Ao ser configurado, o tempo é calculado levando em conta o expediente padrão cadastrado na plataforma. Esse prazo não pode ser menor que o prazo de notificação.

**Prazo para notificar (em horas)**
Tempo acordado, em horas, para que uma notificação seja enviada antes do prazo de expiração da solicitação. Ao ser configurado, o tempo é calculado levando em conta o expediente padrão cadastrado na plataforma. Esse prazo não pode ser maior que o prazo de expiração.

**07.**Clique em **Avançar**.

**08.** Na etapa **Responsáveis**, em **Solicitante**, defina o perfil responsável por abrir a solicitação e configure suas atividades.

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

**2 - AJUSTAR DADOS DO DOCUMENTO**A responsabilidade por ajustar dados do documento é atribuída à pessoa que abriu a solicitação.

**Acompanhamento**
Envio de notificação sobre o início da atividade. As opções disponíveis são:

- **Notificar responsável**: quando assinalada, determina que uma notificação sobre o início da atividade será enviada ao responsável por ela, que neste caso, é o próprio solicitante;
- **Notificar requisitante**: quando assinalada, determina que uma notificação sobre o início da atividade será enviada ao requisitante/solicitante;
- **Notificar gestor**: quando assinalada, determina que uma notificação sobre o início da atividade será enviada ao gestor do processo.

**Prazo de conclusão (em horas)**
Tempo, em horas, dentro do qual a atividade de ajuste da solicitação deve ser concluída. Após esse tempo, ela será considerada atrasada. Se configurado, o tempo é calculado levando em conta o expediente padrão cadastrado na plataforma e o momento em que o solicitante recebeu ou assumiu a atividade.

**09.** Em **Documentos**, defina o perfil responsável pelo setor de documentos e configure sua atividade.

**01. Quem poderá analisar o documento**Pessoas que podem analisar o documento no processo criado por esse *flow*. As opções disponíveis são:

- **Qualquer pessoa**: quando selecionada, determina que qualquer pessoa pode analisar o documento;
- **Uma pessoa específica**: quando selecionada, determina que apenas uma pessoa específica pode analisar o documento;
- **Uma pessoa de um papel específico**: quando selecionada, determina que a solicitação será enviada para uma pessoa de um papel específico e apenas ela pode analisar o documento;
- **Uma pessoa de um grupo específico**: quando selecionada, determina que a solicitação será enviada para uma pessoa de um grupo específico e apenas ela pode analisar o documento;
- **Todos de um grupo específico**: quando selecionada, determina que todas as pessoas que fazem parte de um determinado grupo podem analisar o documento;
- **Todos de um papel específico**: quando selecionada, determina que todas as pessoas que fazem parte de um determinado papel podem analisar o documento.

**Grupo, papel ou pessoa específica**
Grupo, papel ou pessoa que pode abrir solicitações nesse processo, de acordo com a opção que foi selecionada em **Quem poderá analisar o documento**.

**Acompanhamento**
Envio de notificação sobre o início das atividades para as pessoas envolvidas. As opções disponíveis são:

- **Notificar responsável**: quando assinalada, determina que uma notificação sobre o início da atividade será enviada ao responsável pela primeira atividade;
- **Notificar requisitante**: quando assinalada, determina que uma notificação sobre o início da atividade será enviada ao requisitante/solicitante;
- **Notificar gestor**: quando assinalada, determina que uma notificação sobre o início da atividade será enviada ao gestor do processo.

**Prazo de conclusão (em horas)**
Tempo, em horas, dentro do qual a análise da solicitação deve ser concluída. Após esse tempo, ela será considerada atrasada. Se configurado, o tempo é calculado levando em conta o expediente padrão cadastrado na plataforma e o momento em que o responsável recebeu ou assumiu a atividade.

**10.**Para visualizar o fluxo da solicitação, clique em **Visualizar fluxo**.

**11.** Na etapa **Cadastros**, em **Centro de custo** defina os centros de custo e seus responsáveis.

**Código**Informe o código do centro de custo.

**Nome do centro de custo**Informe o nome do centro de custo.

**Gestor do centro de custo**Informe o gestor responsável pelo centro de custo.

Para adicionar mais centros de custo, clique em **Adicionar novo centro de custo**. Para excluir um centro de custo adicionado, basta clicar em **Excluir**![](https://tdn.totvs.com/download/attachments/745756064/excluir.png).

**12.**Ainda na etapa **Cadastros**, em **Estabelecimento**, insira o nome dos estabelecimentos (Matriz, franquias e filiais) de sua empresa ou organização.

**Nome do estabelecimento**Nome do estabelecimento da sua empresa como matriz, filial, franquia etc.

Para adicionar mais estabelecimentos, clique em **Adicionar novo estabelecimento** e preencha seu nome. Para excluir um estabelecimento adicionado, basta clicar em **Excluir.**

**13.** Clique em **Avançar**.

**14.** Na etapa **Revisão**, em **Dados do processo**, confira as principais informações do processo que será criado.

Se necessário, clique em **Voltar** até a etapa desejada para ajustar alguma configuração.

**15.** Clique em **Criar processo.**

Ao finalizar a instalação, um processo com o nome e na categoria definidos na configuração é listado no recurso [Iniciar solicitações](/pages/viewpage.action?pageId=233763157).

### Editar flow

---

        Your browser does not support the HTML5 video element

**01.** No menu lateral do TOTVS Fluig Plataforma, clique em **Painel de controle**.

**02.** No agrupador **Aplicativos**, clique em **Store**.

É possível ainda acessar diretamente pelo ícone da **Store** ![](/download/attachments/754249133/flaticon-rocket.png?version=1&modificationDate=1699620006080&api=v2) localizado no menu lateral, para ir diretamente para os aplicativos.

Por padrão, apenas administradores da plataforma tem acesso ao Painel de controle e, consequentemente ao recurso Store. Porém, como as permissões podem ser personalizadas, o acesso a esse recurso segue o que foi definido na sua plataforma.

**03.** Na área **Flows** do recurso Store, [localize](https://tdn.totvs.com/x/frOcEw#Plataforma%E2%9D%99ItensdaStore-Buscarsolu%C3%A7%C3%B5es) o *flow* Lançamento de documento.

**04.** Clique em **Configurar** – localizado no quadro do *flow*.

**05.** Altere as informações desejadas em cada etapa e avance até a última.

**06.** Clique em **Atualizar** ![](https://tdn.totvs.com/download/attachments/745756064/instalar-flow.png).

Ao editar e atualizar o processo, uma nova versão será criada. As solicitações que estão em andamento continuarão com as configurações da versão antiga. Apenas as novas solicitações que forem abertas terão as configurações da nova versão.

### Atualizar flow

---

Quando houver atualizações disponíveis, o indicativo ATUALIZAR será exibido no *flow* para informar que ele pode ser atualizado.

**01.** No menu lateral do TOTVS Fluig Plataforma, clique em **Painel de controle**.

**02.** No agrupador **Aplicativos**, clique em **Store**.

É possível ainda acessar diretamente pelo ícone da **Store** ![](/download/attachments/754249133/flaticon-rocket.png?version=1&modificationDate=1699620006080&api=v2) localizado no menu lateral, para ir diretamente para os aplicativos.

Por padrão, apenas administradores da plataforma tem acesso ao Painel de controle e, consequentemente ao recurso Store. Porém, como as permissões podem ser personalizadas, o acesso a esse recurso segue o que foi definido na sua plataforma.

**03.** No recurso Store, [localize](https://tdn.totvs.com/x/frOcEw#Plataforma%E2%9D%99ItensdaStore-Buscarsolu%C3%A7%C3%B5es) e clique no *flow* de Lançamento de documento.

**04.** Clique em **Atualizar**.

Para pode utilizar as informações e melhorias da atualização liberada será necessário acessar o configurador do processo clicando em **Configurar **e passar pelas etapas **Geral**, **Responsável**, **Cadastros **e na etapa **Revisão **clicar no botão **Atualizar**.

Ao clicar em atualizar, uma nova versão do processo será criada com todas as correções e melhorias. As solicitações que estão em andamento continuarão com as configurações da versão antiga. Apenas as novas solicitações que forem abertas terão as configurações da nova versão do processo.

Ao realizar estes passos, as novidades e correções serão liberadas para o **flow Lançamento de documento**.

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

Este é o diagrama do *flow* de Lançamento de documento:

![](/download/attachments/754249133/lancamento_documento%20of.png?version=1&modificationDate=1699623177733&api=v2)

### Atividades

---

As atividades que compõem o processo são:

LANÇAR DOCUMENTO

Solicitante abre o processo, preenche as informações necessárias como dados gerais, dados do documento e justificativa.

ANALISAR DOCUMENTO

Responsável por documentos analisa as informações da solicitação podendo aprovar, cancelar ou mandar para o solicitante ajustar dados do documento.

CANCELAR

Executa o cancelamento do processo.

AJUSTAR DADOS DO DOCUMENTO

Solicitante analisa a justificativa do responsável por documentos e realiza os ajustes necessários.

FIM

O processo é finalizado.

### Restrições

---

O *flow* de Lançamento de documento possui as seguintes restrições:

- não efetua controle ou geração de pagamentos;
- não permite ser integrado a outros sistemas;
- não permite personalização, tais como, adicionar campos ao formulário, alterar o diagrama, adicionar ou remover atividades;

			![](https://tdn.totvs.com/download/attachments/563436139/importante.png)

**IMPORTANTE!**
Como esse *flow* se torna um processo igual a qualquer outro dentro da plataforma, é possível alterá-lo ou até mesmo excluir seus artefatos. Porém, se for feita qualquer alteração no processo, diagrama, formulário ou outro artefato, o direito ao suporte padrão é automaticamente perdido.

## Abrir solicitação

---

É necessário que o *flow* Lançamento de documento esteja instalado e devidamente parametrizado para abrir uma solicitação. Os usuários que podem abrir solicitação são os que foram definidos na configuração do *flow*, no campo "Quem poderá abrir uma solicitação?".

        Your browser does not support the HTML5 video element

**01.** No menu lateral do TOTVS Fluig Plataforma, clique em **Processos**.

**02.** Clique em **Iniciar solicitações**.

**03.** Localize e clique no processo de Lançamento de documentos.

O nome do processo e a categoria na qual ele se encontra são os que foram definidos durante a instalação e configuração.

**04.** Em **Dados gerais**, preencha os dados referente aos responsáveis pela abertura e pela solicitação do atual processo.

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
Centro de custo da área à qual o usuário solicitante pertence. Esse é o centro de custo no qual as despesas serão alocadas.

**05.** Em **Dados do documento**, preencha os dados referentes ao documento que será lançado.

**Emitido por**
Selecione o setor de emissão do documento.

**Entidade responsável pela emissão**Insira o nome da empresa, cliente ou colaborador.

**Tipo de cadastro**Selecione o tipo de cadastro: CPF ou CNPJ.

**Tipo de cadastro - CPF ou CNPJ**
Selecione o tipo de cadastro e insira o número.

**Tipo de documento**Selecionar o tipo de documento a ser incluído. Tipos de documentos que podem ser visualizados em: **Painel de controle - Tipos de documento.**

**Número do documento**Insira o número do documento.

**Valor do documento (se houver)**Insira o valor do documento.

**Anexar documento**Utilize a aba anexos para anexar o documento ou clique diretamente no botão **Anexar documento**.

**Gestão de conteúdo empresarial (ECM)**Selecione se deseja ou não, publicar este documento no ECM.

**Pasta no ECM para publicar o documento**Caso tenha optado por publicar no ECM, selecione a pasta onde o documento será publicado. Clique em **Selecionar pasta.**

**Validade do documento**Defina se o documento possuirá ou não uma data de validade. Caso escolha incluir uma data de validade, insira a data de início e de expiração da validade.

**Notificar expiração da validade do documento**Defina quantos dias antes da data de expiração do documento você deseja receber uma notificação.

**06.** Em **Justificativa**, preencha quais os motivos para o lançamento do documento e as possíveis informações complementares.

**07.** Clique em **Enviar**.

**08**. Na atividade **Análise do documento**, preencha informações sobre a análise do documento pelo setor responsável.

**Responsável pelo lançamento de documento**
Nome do responsável pelo lançamento de documento preenchido automaticamente.

**Data**
Data do lançamento de documento preenchido automaticamente.

**Justificativa**
Informe uma justificativa, caso houver.

**09.** Se necessário, acesse as abas **Histórico** e **Anexos** – localizadas na parte superior – para complementar a solicitação com comentários ou documentos.

**10.** Clique em **Enviar**.

Informações mais detalhadas sobre as demais opções existentes podem ser obtidas em [Iniciar solicitações](/pages/viewpage.action?pageId=233763157).

Sua solicitação será aberta e pode ser acompanhada pela [Central de tarefas](/pages/viewpage.action?pageId=233762817) → [Minhas solicitações](/pages/viewpage.action?pageId=233763398).


<!-- anchors: Flows|Lançamentodedocumento-Falandodelançamentodedocumento..., Flows|Lançamentodedocumento-Comoadquirir, Flows|Lançamentodedocumento-Instalação, Flows|Lançamentodedocumento-Requisitoparauso, Flows|Lançamentodedocumento-Parametrizações, Flows|Lançamentodedocumento-Instalareconfigurarflowinstalar, Flows|Lançamentodedocumento-Editarflow, Flows|Lançamentodedocumento-Atualizarflow, Flows|Lançamentodedocumento-Processocriado, Flows|Lançamentodedocumento-Diagrama, Flows|Lançamentodedocumento-Atividades, Flows|Lançamentodedocumento-Restrições, Flows|Lançamentodedocumento-Abrirsolicitação -->
