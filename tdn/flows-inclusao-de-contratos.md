---
title: "Flows | Inclusão de contratos"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=772028407"
scraped_at: "2026-03-09T04:30:29.243Z"
depth: 3
anchors: 13
child_links: 40
---

# Flows | Inclusão de contratos

# Falando de inclusão de contratos...

---

O *flow* inclusão de contratos permite ao colaborador registrar os dados cadastrais de um contrato, tais como: fornecedor ou cliente, itens do contrato, data de validade e valor do contrato. Quando aprovada a etapa de Análise do contrato, o documento será publicado no ECM e herdará as propriedades de validade e notificação.

Depois de adquirido, instalado e configurado, ele cria um processo igual a qualquer outro processo padrão da plataforma, ou seja, a abertura de solicitações é a partir do recurso [Iniciar solicitação](/pages/viewpage.action?pageId=233763157).

			![](https://tdn.totvs.com/download/attachments/563436139/nota.png)

**NOTA:**
Esse *flow* não está integrado a nenhum ERP. Também não contempla a Gestão do Contrato: medições, cronograma financeiro, cláusulas, aditivo, paralisação ou suspensão.

Este *flow*segue as leis gerais de proteção de dados - LGPD. O tratamento de dados pessoais realizado, possibilita que o administrador do Fluig faça a anonimização de dados, caso deseje ou seja solicitado. Para isso, basta acessar: **Painel de controle > Segurança e acesso > Anonimizar e exportar dados pessoais.**

![](/download/attachments/772028407/flow%20inclus%C3%A3o%20de%20contrato.png?version=1&modificationDate=1703011822563&api=v2)

## Como adquirir

---

O *flow* de inclusão de contrato é listado como uma solução paga no recurso [Store](https://tdn.totvs.com/x/frOcEw) do TOTVS Fluig Plataforma a partir da atualização **Mist - 1.8.0-230523**.

Para adquiri-lo, é necessário entrar em contato com o executivo de soluções de negócio responsável por sua conta.

Com o processo de aquisição finalizado, o acesso à instalação do *flow* é liberado, sendo necessário instalá-lo para utilizar. Neste caso, basta seguir os passos descritos em [Instalar e configurar *flow*](#Flows|Inclusãodecontratos-instalar).

## Instalação

---

Depois de adquirir esse *flow*, ele estará liberado para instalação a partir do recurso [Store](https://tdn.totvs.com/x/frOcEw).

### Requisito para uso

---

Para instalar e utilizar esse *flow*, é necessário:

- ter o TOTVS Fluig Plataforma instalado e parametrizado a partir da versão **Mist - 1.8.0-230523**;

- utilização de processo padrão.

### Parametrizações

---

Durante a instalação desse *flow*, é necessário definir algumas parametrizações, que são divididas em quatro etapas:

- **Geral**: onde são definidos os dados gerais do processo, como gestor e prazos de expiração e de aviso;

- **Responsáveis**: onde são definidos os responsáveis e o SLA de cada atividade;

- **Cadastros**: onde são definidas as opções que serão selecionadas durante o preenchimento da solicitação: cadastro de centro de custo e tipo de contrato;

- **Revisão**: onde são listados os principais dados do processo que será criado para conferência.

### Instalar e configurar flow 

---

        Your browser does not support the HTML5 video element

**01.** No menu lateral do TOTVS Fluig Plataforma, clique em **Painel de controle**.

**02.** No agrupador **Aplicativos**, clique em **Store**.

É possível ainda acessar diretamente pelo ícone da **Store** ![](/download/attachments/772028407/flaticon-rocket.png?version=1&modificationDate=1699620253190&api=v2) localizado no menu lateral, para ir diretamente para os aplicativos.

Por padrão, apenas administradores da plataforma tem acesso ao Painel de controle e, consequentemente ao recurso Store. Porém, como as permissões podem ser personalizadas, o acesso a esse recurso segue o que foi definido na sua plataforma.

**03.** Na área **Flows** do recurso Store, [localize](https://tdn.totvs.com/x/frOcEw#Plataforma%E2%9D%99ItensdaStore-Buscarsolu%C3%A7%C3%B5es) e clique no *flow* **Inclusão de contrato**.

**04.** Clique em **Configurar** – localizado no quadro do *flow*.

**06.**Na etapa **Geral**, em **Dados gerais**, defina as informações de apresentação e comportamento geral deste processo.

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

**2 - AJUSTAR DADOS DO CONTRATO**A responsabilidade por ajustar dados do contrato é atribuída à pessoa que abriu a solicitação.

**Acompanhamento**
Envio de notificação sobre o início da atividade de ajuste da solicitação. As opções disponíveis são:

- **Notificar responsável**: quando assinalada, determina que uma notificação sobre o início da atividade de ajuste da solicitação será enviada ao responsável por ela, que neste caso, é o próprio solicitante;
- **Notificar requisitante**: quando assinalada, determina que uma notificação sobre o início da atividade de ajuste da solicitação será enviada ao requisitante/solicitante;
- **Notificar gestor**: quando assinalada, determina que uma notificação sobre o início da atividade de ajuste da solicitação será enviada ao gestor do processo.

**Prazo de conclusão (em horas)**
Tempo, em horas, dentro do qual a atividade de ajuste da solicitação deve ser concluída. Após esse tempo, ela será considerada atrasada. Se configurado, o tempo é calculado levando em conta o expediente padrão cadastrado na plataforma e o momento em que o solicitante recebeu ou assumiu a atividade.

**09.** Ainda na etapa **Responsáveis**, em **Contratos**, defina o perfil responsável pelo setor de contratos e configure sua atividade

**1 - ANALISAR CONTRATO**

**Quem poderá analisar o contrato.**
Pessoas que podem analisar o contrato neste *flow*. As opções disponíveis são:

- **Qualquer pessoa**: quando selecionada, determina que qualquer pessoa poderá analisar o contrato;
- **Todos de um grupo específico**: quando selecionada, determina que todas as pessoas que fazem parte de um determinado grupo podem analisar o contrato;
- **Todos de um papel específico**: quando selecionada, determina que todas as pessoas que fazem parte de um determinado papel podem analisar o contrato;
- **Uma pessoa específica**: quando selecionada, determina que apenas uma pessoa específica poderão analisar o contrato.
- **Uma pessoa de um papel específico:** quando selecionada, determina que apenas uma pessoa de um papel específico e apenas ela poderá analisar o contrato;
- **Uma pessoa de um grupo específico:**quando selecionada, determina que apenas uma pessoa de um grupo específico e apenas ela poderá analisar o contrato;

**Acompanhamento**
Envio de notificação sobre o início da atividade de análise do contrato. As opções disponíveis são:

- **Notificar responsável**: quando assinalada, determina que uma notificação sobre o início da atividade de análise do contrato será enviada ao responsável por ela, que neste caso, é o próprio solicitante;
- **Notificar requisitante**: quando assinalada, determina que uma notificação sobre o início da atividade de análise do contrato será enviada ao requisitante/solicitante;
- **Notificar gestor**: quando assinalada, determina que uma notificação sobre o início da atividade de análise do contrato será enviada ao gestor do processo.

**Prazo de conclusão (em horas)**
Tempo, em horas, dentro do qual a atividade de análise do contrato deve ser concluída. Após esse tempo, ela será considerada atrasada. Se configurado, o tempo é calculado levando em conta o expediente padrão cadastrado na plataforma e o momento em que o solicitante recebeu ou assumiu a atividade.

**10. **Para visualizar o fluxo da solicitação, clique em **Visualizar fluxo**.

**11**. Clique em **Avançar**.

**12.** Na etapa **Cadastros**, em **Centro de custo**, determine os centros de custos e seus responsáveis.

**Código**Código do centro de custo do contrato. Não é possível gerar códigos repetidos. Após ser salvo, ele não poderá ser editado ou excluído. ****

**Nome do centro de custo**Definir um nome para o centro de custo.****

**Gestor do centro de custo**Definir um gestor responsável pelo centro de custo.****

Para adicionar mais centros de custo, clique em **Adicionar novo centro de custo** e preencha as informações necessárias. Para excluir um centro de custo adicionado, basta clicar em **Excluir**![](https://tdn.totvs.com/download/attachments/745756064/excluir.png).

**13.** Ainda na etapa **Cadastros**, em **Estabelecimento**, insira o nome dos estabelecimentos e filiais de sua empresa ou organização.

**Nome do estabelecimento**Insira um nome para o estabelecimento.

Para adicionar mais estabelecimentos, clique em **Adicionar novo estabelecimento** e informe o nome do estabelecimento. Para excluir um estabelecimento adicionado, basta clicar em **Excluir**![](https://tdn.totvs.com/download/attachments/745756064/excluir.png).

**14.** Ainda na etapa **Cadastros**, em **Tipo de contrato,** insira o nome dos contratos que poderão ser adicionados na abertura da solicitação.

**Nome do tipo**Insira um nome para o tipo de contrato.

Para adicionar mais tipos de contrato, clique em **Adicionar novo tipo de contrato**e informe o nome do novo tipo. Para excluir um tipo de contrato já adicionado, basta clicar em **Excluir**![](https://tdn.totvs.com/download/attachments/745756064/excluir.png).

**15.** Clique em **Avançar**.

**16.** Na etapa **Revisão**, em **Dados do processo**, confira as principais informações do processo que será criado.

Se necessário, clique em **Voltar** até a etapa desejada para ajustar alguma configuração.

**17.** Clique em **Configurar processo**.

Ao finalizar a instalação, um processo com o nome e na categoria definidos na configuração é listado no recurso [Iniciar solicitações](/pages/viewpage.action?pageId=233763157).

### Editar flow

---

        Your browser does not support the HTML5 video element

**01.** No menu lateral do TOTVS Fluig Plataforma, clique em **Painel de controle**.

**02.** No agrupador **Aplicativos**, clique em **Store**.

É possível ainda acessar diretamente pelo ícone da **Store** ![](/download/attachments/772028407/flaticon-rocket.png?version=1&modificationDate=1699620253190&api=v2) localizado no menu lateral, para ir diretamente para os aplicativos.

Por padrão, apenas administradores da plataforma tem acesso ao Painel de controle e, consequentemente ao recurso Store. Porém, como as permissões podem ser personalizadas, o acesso a esse recurso segue o que foi definido na sua plataforma.

**03.** Na área **Flows** do recurso Store, [localize](https://tdn.totvs.com/x/frOcEw#Plataforma%E2%9D%99ItensdaStore-Buscarsolu%C3%A7%C3%B5es) o *flow* Inclusão de contrato.

**04.** Clique em **Configurar** – localizado no quadro do *flow*.

**05.** Altere as informações desejadas em cada etapa e avance até a última.

**06.** Clique em **Atualizar**.

Uma nova versão do processo será criada. As solicitações que estão em andamento continuam com os dados da versão antiga. Apenas as novas solicitações que forem abertas terão as informações que foram alteradas na nova versão.

### Atualizar flow

---

Quando houver atualizações disponíveis, o indicativo ATUALIZAR será exibido no *flow* para informar que ele pode ser atualizado.

**01.** No menu lateral do TOTVS Fluig Plataforma, clique em **Painel de controle**.

**02.** No agrupador **Aplicativos**, clique em **Store**.

É possível ainda acessar diretamente pelo ícone da **Store** ![](/download/attachments/772028407/flaticon-rocket.png?version=1&modificationDate=1699620253190&api=v2) localizado no menu lateral, para ir diretamente para os aplicativos.

Por padrão, apenas administradores da plataforma tem acesso ao Painel de controle e, consequentemente ao recurso Store. Porém, como as permissões podem ser personalizadas, o acesso a esse recurso segue o que foi definido na sua plataforma.

**03.** No recurso Store, [localize](https://tdn.totvs.com/x/frOcEw#Plataforma%E2%9D%99ItensdaStore-Buscarsolu%C3%A7%C3%B5es) e clique no *flow* de Inclusão de contrato.

**04.** Clique em **Atualizar**.

Para pode utilizar as informações e melhorias da atualização liberada será necessário acessar o configurador do processo clicando em **Configurar **e passar pelas etapas **Geral**, **Responsável**, **Cadastros **e na etapa **Revisão **clicar no botão **Atualizar**.

Ao clicar em atualizar, uma nova versão do processo será criada com todas as correções e melhorias. As solicitações que estão em andamento continuarão com as configurações da versão antiga. Apenas as novas solicitações que forem abertas terão as configurações da nova versão do processo.

Ao realizar estes passos, as novidades e correções serão liberadas para o **flow Inclusão de contrato.**

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

Este é o diagrama do *flow* de Inclusão de contratos:

![](/download/attachments/772028407/inclusao_contratos.png?version=1&modificationDate=1700501164263&api=v2)

### Atividades

---

As atividades que compõem o processo são:

LANÇAR CONTRATO

Solicitante abre o processo, preenche as informações necessárias como dados gerais, dados do contrato, justificativa e anexa o contrato.

ANALISAR CONTRATO

O Responsável pelos contratos analisa as informações do contrato e o contrato anexado. Podendo aprovar, reprovar ou devolver para o solicitante ajustar os dados do contrato.

CANCELAR

Executa o cancelamento do processo.

AJUSTAR DADOS DO CONTRATO

O solicitante recebe notificação informando que é necessário dados adicionais ou ajustes das informações para atender a análise da solicitação.

O solicitante precisará colocar informações adicionais no campo Justificativa para poder complementar o entendimento acerca de sua demanda. 

Esse complemento poderá ser com informações adicionais em texto ou anexo de documentos e imagens, conforme a informação recebida do gestor do centro de custo.

FIM

O processo é finalizado com sucesso.

### Restrições

---

O *flow* de Inclusão de contratos possui as seguintes restrições:

- não possui integrações com outros sistemas;

- não é customizável.

			![](https://tdn.totvs.com/download/attachments/563436139/importante.png)

**IMPORTANTE!**
Como esse *flow* se torna um processo igual a qualquer outro dentro da plataforma, é possível alterá-lo ou até mesmo excluir seus artefatos. Porém, se for feita qualquer alteração no processo, diagrama, formulário ou outro artefato, o direito ao suporte padrão é automaticamente perdido.

## Abrir solicitação

---

É necessário que o *flow*Inclusão de contratos esteja instalado e devidamente parametrizado para abrir uma solicitação. Os usuários que podem abrir solicitação são os que foram definidos na configuração do *flow*, no campo "**revisar**".

        Your browser does not support the HTML5 video element

**01.** No menu lateral do TOTVS Fluig Plataforma, clique em **Processos**.

**02.** Clique em **Iniciar solicitações**.

**03.** Localize e clique no processo de **Inclusão de contratos**.

O nome do processo e a categoria na qual ele se encontra são os que foram definidos durante a instalação e configuração.

**04.** Em **Dados gerais**, preencha os dados referentes aos responsáveis pela abertura e pela solicitação do atual processo.

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

**05.** Em **Dados do contrato**, insira os dados referentes ao contrato que será incluído.

**Início do contrato**Insira a data de início do contrato.

**Fim do contrato**Insira a data de fim do contrato.

**Tipo de Contrato**Digite ou busque por um tipo de contrato.

**Nome ou razão social do fornecedor**Insira o nome ou razão social do fornecedor

**CNPJ**Insira o CNPJ do fornecedor

**Objeto do contrato**Insira o objeto do contrato. É o objeto que define os limites como qualidade, tipo e quantidade do serviço que será prestado ou do produto que será adquirido. Essa informação pode ser encontrada no próprio contrato.

**Índice de reajuste do contrato**Insira o índice de reajuste. O Indice de reajuste e uma forma de atualizar os valores do contrato para refletir a variação efetiva dos custos e tornar justa a remuneração do contratado. Essa informação pode ser encontrada no próprio contrato.

**Pasta no ECM para armazenar o contrato**Selecione uma pasta no ECM para armazenas o contrato. Acione o botão **Selecionar pasta**.

**Item do contrato**Insira o item do contrato.
Para adicionar um novo item, basta acionar **Adicionar novo item.**Para excluir um item já adicionado, basta clicar em **Excluir**![](https://tdn.totvs.com/download/attachments/745756064/excluir.png).

**Quantidade**Insira a quantidade de itens.

**Unidade de medida**Definir a unidade de medida do item, dentre as já pré-definidas.

**Valor unitário**Insira o valor unitário do item do contrato.

**Total**Total da quantidade de itens definidos. Valor preenchido automaticamente.

**Valor total do contrato**
Soma do valor total de todos os itens do contrato. Valor preenchido automaticamente

**Anexar contrato**Utilize a aba anexos para anexar o contrato ou acione o botão **Anexar contrato.**O Anexo é obrigatório.

**Notificar expiração da validade do contrato**Defina quantos dias antes da data de expiração do contrato você deseja receber uma notificação.

**06.** Em **Justificativa**, no campo**Qual o motivo da solicitação?**, insira os motivos para a inclusão do contrato e as possíveis informações complementares.

07. Clique em **Enviar**.

**08.** Em **Análise do contrato**, insira as informações complementares sobre a análise do contrato pelo setor responsável por contratos.

**Responsável por contratos**Nome do responsável por contratos, preenchido automaticamente.

**Data**Data da análise do contrato, preenchido automaticamente.

**Justificativa**insira os motivos para a análise do contrato e as possíveis informações complementares.****

**09.** Se necessário, acesse as abas **Histórico** e **Anexos** – localizadas na parte superior – para complementar a solicitação com comentários ou documentos.

**10.** Clique em **Enviar**.

Informações mais detalhadas sobre as demais opções existentes podem ser obtidas em [Iniciar solicitações](/pages/viewpage.action?pageId=233763157).

Sua solicitação será aberta e pode ser acompanhada pela [Central de tarefas](/pages/viewpage.action?pageId=233762817) → [Minhas solicitações](/pages/viewpage.action?pageId=233763398).


<!-- anchors: Flows|Inclusãodecontratos-Falandodeinclusãodecontratos..., Flows|Inclusãodecontratos-Comoadquirir, Flows|Inclusãodecontratos-Instalação, Flows|Inclusãodecontratos-Requisitoparauso, Flows|Inclusãodecontratos-Parametrizações, Flows|Inclusãodecontratos-Instalareconfigurarflowinstalar, Flows|Inclusãodecontratos-Editarflow, Flows|Inclusãodecontratos-Atualizarflow, Flows|Inclusãodecontratos-Processocriado, Flows|Inclusãodecontratos-Diagrama, Flows|Inclusãodecontratos-Atividades, Flows|Inclusãodecontratos-Restrições, Flows|Inclusãodecontratos-Abrirsolicitação -->
