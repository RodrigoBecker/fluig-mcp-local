---
title: "Flows | Lançamento de atestado"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=805975088"
scraped_at: "2026-03-09T04:30:24.149Z"
depth: 3
anchors: 13
child_links: 40
---

# Flows | Lançamento de atestado

# Falando de lançamento de atestado...

---

O *flow* de Lançamento de atestado permite ao colaborador encaminhar um atestado, indicando o período de afastamento.

Depois de adquirido, instalado e configurado, ele cria um processo igual a qualquer outro processo padrão da plataforma, ou seja, a abertura de solicitações é a partir do recurso [Iniciar solicitação](https://tdn.totvs.com/pages/viewpage.action?pageId=233763157).

			![](https://tdn.totvs.com/download/attachments/563436139/nota.png)

**NOTA:**
Esse *flow* não efetua registros em sistemas de folha.

Este *flow*segue as leis gerais de proteção de dados - LGPD. O tratamento de dados pessoais realizado, possibilita que o administrador do Fluig faça a anonimização de dados, caso deseje ou seja solicitado. Para isso, basta acessar: **Painel de controle > Segurança e acesso > Anonimizar e exportar dados pessoais.**

![](/download/attachments/805975088/lan%C3%A7amento%20atestado.png?version=1&modificationDate=1701088459097&api=v2)

## Como adquirir

---

O *flow* de Lançamento de atestado é listado como uma solução paga no recurso [Store](https://tdn.totvs.com/x/frOcEw) do TOTVS Fluig Plataforma a partir da atualização **Mist - 1.8.0-230523**.

Para adquiri-lo, é necessário entrar em contato com o executivo de soluções de negócio responsável por sua conta.

Com o processo de aquisição finalizado, o acesso à instalação do *flow* é liberado, sendo necessário instalá-lo para utilizar. Neste caso, basta seguir os passos descritos em [Instalar e configurar *flow*](#Flows|Lançamentodeatestado-instalar).

## Instalação

---

Depois de adquirir esse *flow*, ele estará liberado para instalação a partir do recurso [Store](https://tdn.totvs.com/x/frOcEw).

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

- **Cadastros**: onde são definidas as opções que serão consumidas durante o preenchimento da solicitação como centro de custo, gestor do processo e tipo de atestado.

- **Revisão**: onde são listados os principais dados do processo que será criado para conferência.

### Instalar e configurar flow 

---

        Your browser does not support the HTML5 video element

**01.** No menu lateral do TOTVS Fluig Plataforma, clique em **Painel de controle**.

**02.** No agrupador **Aplicativos**, clique em **Store**.

É possível ainda acessar diretamente pelo ícone da **Store** ![](/download/attachments/805975088/flaticon-rocket.png?version=1&modificationDate=1700158432037&api=v2) localizado no menu lateral, para ir diretamente para os aplicativos.

Por padrão, apenas administradores da plataforma tem acesso ao Painel de controle e, consequentemente ao recurso Store. Porém, como as permissões podem ser personalizadas, o acesso a esse recurso segue o que foi definido na sua plataforma.

**03.** Na área **Flows** do recurso Store, [localize](https://tdn.totvs.com/x/frOcEw#Plataforma%E2%9D%99ItensdaStore-Buscarsolu%C3%A7%C3%B5es) e clique no *flow* **Lançamento de atestado**.

**04.** Clique em **Configurar**.

A configuração é iniciada e, quando concluída, uma notificação é emitida.

**05.**Na etapa **Geral**, em **Dados gerais**, defina as informações de apresentação e comportamento geral deste processo

**Código identificador do processo**
Exibe o código de identificação do processo. Não é possível alterá-lo.

**Nome do processo**
Nome que visa facilitar o reconhecimento do processo e do seu objetivo. Esse nome será exibido posteriormente no recurso [Iniciar solicitação](/pages/viewpage.action?pageId=233763157).

**Descrição**
Breve descrição sobre os detalhes do processo e instruções para os solicitantes utilizarem.

**Categoria**
Categoria na qual o processo se enquadra. Ele será exibido dentro dessa categoria no recurso [Iniciar solicitação](/pages/viewpage.action?pageId=233763157).

**Perfil gestor do processo**Pessoa que será definida como gestora do processo, ou seja, na ausência do responsável por alguma atividade, essa pessoa pode substitui-lo e continuar com a movimentação da solicitação.  Se não for definida um perfil gestor, apenas os responsáveis pelas atividades poderão movimentar a solicitação, ou seja, na ausência de algum responsável, a solicitação permanecerá parada. As opções disponíveis são:

- **Todos de um grupo específico**: quando selecionada, determina que os gestores serão as pessoas que fazem parte de um determinado grupo;
- **Todos de um papel específico**: quando selecionada, determina que os gestores serão as pessoas que fazem parte de um determinado papel;
- **Uma pessoa específica**: quando selecionada, determina que o gestor será uma pessoa específica;
- **Qualquer pessoa**: quando selecionada, determina que o gestor pode ser qualquer pessoa.

**Grupo, papel ou pessoa específica**Grupo, papel ou pessoa específica que poderá ser definida como gestora do processo, de acordo com a opção que foi selecionada em **Perfil gestor do processo.**

**Prazo de expiração (em horas)**
Tempo máximo acordado, em horas, durante o qual a solicitação ficará disponível. Ao atingir o tempo máximo, uma notificação é emitida informando que a solicitação expirou. Ao ser configurado, o tempo é calculado levando em conta o expediente padrão cadastrado na plataforma. Esse prazo não pode ser menor que o prazo de notificação.

**Prazo de aviso (em horas)**
Tempo acordado, em horas, para que uma notificação seja enviada antes do prazo de expiração da solicitação. Ao ser configurado, o tempo é calculado levando em conta o expediente padrão cadastrado na plataforma. Esse prazo não pode ser maior que o prazo de expiração.

**06.**Clique em **Avançar**.

**07.**Na etapa **Responsáveis**, em **Solicitante**, defina o perfil responsável por abrir a solicitação e configure suas atividades.

**1 - ABRIR SOLICITAÇÃO**

**Quem poderá abrir uma solicitação**Pessoas que podem abrir solicitação no processo criado por esse *flow*. As opções disponíveis são:

- **Qualquer pessoa**: quando selecionada, determina que qualquer pessoa pode abrir solicitação;
- **Uma pessoa específica**: quando selecionada, determina que apenas uma pessoa específica pode abrir solicitação;
- **Todos de um grupo específico**: quando selecionada, determina que todas as pessoas que fazem parte de um determinado grupo podem abrir solicitação;
- **Todos de um papel específico**: quando selecionada, determina que todas as pessoas que fazem parte de um determinado papel podem abrir solicitação.

**Grupo, papel ou usuário específico**
Grupo, papel ou pessoa que pode abrir solicitações nesse processo, de acordo com a opção que foi selecionada em **Quem poderá abrir uma solicitação**.

**Acompanhamento**
Envio de notificação sobre o início da solicitação para as pessoas envolvidas. As opções disponíveis são:

- **Notificar responsável**: quando assinalada, determina que uma notificação sobre o início da solicitação será enviada ao responsável pela primeira atividade;
- **Notificar solicitante**: quando assinalada, determina que uma notificação sobre o início da solicitação será enviada ao solicitante;
- **Notificar gestor**: quando assinalada, determina que uma notificação sobre o início da solicitação será enviada ao gestor do processo.

---

**2 - AJUSTAR DADOS**A responsabilidade por ajustar dados do atestado é atribuída à pessoa que abriu a solicitação.

**Acompanhamento**
Envio de notificação sobre o início da atividade para as pessoas envolvidas. As opções disponíveis são:

- **Notificar responsável**: quando assinalada, determina que uma notificação sobre o início da atividade será enviada ao responsável por ela;
- **Notificar solicitante**: quando assinalada, determina que uma notificação sobre o início da atividade será enviada ao solicitante;
- **Notificar gestor**: quando assinalada, determina que uma notificação sobre o início da atividade será enviada ao gestor do processo.

**Prazo de conclusão (em horas)**
Tempo, em horas, dentro do qual essa atividade deve ser concluída. Após esse tempo, ela será considerada atrasada. Se configurado, o tempo é calculado levando em conta o expediente padrão cadastrado na plataforma e o momento em que o solicitante iniciou a solicitação.

**08.**Ainda na etapa **Responsáveis,**em **RH,** defina os perfis responsáveis pelo setor de RH e configure suas atividades.

**01 - ANALISAR ATESTADO**

**Quem poderá analisar o atestado**Pessoas que podem analisar o atestado para esse *flow*. As opções disponíveis são:

- **Qualquer pessoa**: quando selecionada, determina que qualquer pessoa pode analisar o atestado;
- **Uma pessoa específica**: quando selecionada, determina que apenas uma pessoa específica pode analisar o atestado;
- **Todos de um grupo específico**: quando selecionada, determina que todas as pessoas que fazem parte de um determinado grupo podem analisar o atestado;
- **Todos de um papel específico**: quando selecionada, determina que todas as pessoas que fazem parte de um determinado papel podem analisar o atestado.
- **Uma pessoa de um grupo específico:**quando selecionada, determina que uma pessoa de um grupo específico pode analisar o atestado.
- **Uma pessoa de um papel específico:**  quando selecionada, determina que uma pessoa de um papel específico pode analisar o atestado.

**Grupo, papel ou usuário específico**
Grupo, papel ou pessoa que pode analisar o atestado nesse processo, de acordo com a opção que foi selecionada em **Quem poderá analisar o atestado**.

**Acompanhamento**
Envio de notificação sobre o início da solicitação para as pessoas envolvidas. As opções disponíveis são:

- **Notificar responsável**: quando assinalada, determina que uma notificação sobre o início da solicitação será enviada ao responsável pela primeira atividade;
- **Notificar solicitante**: quando assinalada, determina que uma notificação sobre o início da solicitação será enviada ao solicitante;
- **Notificar gestor**: quando assinalada, determina que uma notificação sobre o início da solicitação será enviada ao gestor do processo.

**Prazo de conclusão (em horas)**
Tempo, em horas, dentro do qual essa atividade deve ser concluída. Após esse tempo, ela será considerada atrasada. Se configurado, o tempo é calculado levando em conta o expediente padrão cadastrado na plataforma e o momento em que o solicitante iniciou a solicitação.

---

**02 - REGISTRAR ABONO**

**Quem poderá registrar o abono**Pessoas que podem registrar o abono para esse *flow*. As opções disponíveis são:

- **Qualquer pessoa**: quando selecionada, determina que qualquer pessoa pode registrar o abono;
- **Uma pessoa específica**: quando selecionada, determina que apenas uma pessoa específica pode registrar o abono;
- **Todos de um grupo específico**: quando selecionada, determina que todas as pessoas que fazem parte de um determinado grupo podem registrar o abono;
- **Todos de um papel específico**: quando selecionada, determina que todas as pessoas que fazem parte de um determinado papel podem registrar o abono.
- **Uma pessoa de um grupo específico:**quando selecionada, determina que uma pessoa de um grupo específico pode registrar o abono.
- **Uma pessoa de um papel específico:**  quando selecionada, determina que uma pessoa de um papel específico pode registrar o abono.
- **Atribuição por executor de atividade:**quando selecionada, determina que o responsável pela atividade será o mesmo pré-definido em uma atividade anterior.

**Grupo, papel ou usuário específico**
Grupo, papel ou pessoa que pode registrar o abono nesse processo, de acordo com a opção que foi selecionada em **Quem poderá registrar o abono**.

**Acompanhamento**
Envio de notificação sobre o início da atividade para as pessoas envolvidas. As opções disponíveis são:

- **Notificar responsável**: quando assinalada, determina que uma notificação sobre o início da atividade será enviada ao responsável por ela;
- **Notificar solicitante**: quando assinalada, determina que uma notificação sobre o início da atividade será enviada ao solicitante;
- **Notificar gestor**: quando assinalada, determina que uma notificação sobre o início da atividade será enviada ao gestor do processo.

**Prazo de conclusão (em horas)**
Tempo, em horas, dentro do qual essa atividade deve ser concluída. Após esse tempo, ela será considerada atrasada. Se configurado, o tempo é calculado levando em conta o expediente padrão cadastrado na plataforma e o momento em que o solicitante iniciou a solicitação.

---

**03 - TRAMITAR VIA INSS**

**Quem poderá tramitar via INSS**Pessoas que podem tramitar via INSS para esse *flow*. As opções disponíveis são:

- **Qualquer pessoa**: quando selecionada, determina que qualquer pessoa pode tramitar via INSS;
- **Uma pessoa específica**: quando selecionada, determina que apenas uma pessoa específica pode tramitar via INSS;
- **Todos de um grupo específico**: quando selecionada, determina que todas as pessoas que fazem parte de um determinado grupo podem tramitar via INSS;
- **Todos de um papel específico**: quando selecionada, determina que todas as pessoas que fazem parte de um determinado papel podem tramitar via INSS.
- **Uma pessoa de um grupo específico:**quando selecionada, determina que uma pessoa de um grupo específico pode tramitar via INSS.
- **Uma pessoa de um papel específico:**  quando selecionada, determina que uma pessoa de um papel específico pode tramitar via INSS.
- **Atribuição por executor de atividade:** quando selecionada, determina que o responsável pela atividade será o mesmo pré-definido em uma atividade anterior.

**Grupo, papel ou usuário específico**
Grupo, papel ou pessoa que pode tramitar via INSS nesse processo, de acordo com a opção que foi selecionada em **Quem poderá tramitar via INSS**.

**Acompanhamento**
Envio de notificação sobre o início da atividade para as pessoas envolvidas. As opções disponíveis são:

- **Notificar responsável**: quando assinalada, determina que uma notificação sobre o início da atividade será enviada ao responsável por ela;
- **Notificar solicitante**: quando assinalada, determina que uma notificação sobre o início da atividade será enviada ao solicitante;
- **Notificar gestor**: quando assinalada, determina que uma notificação sobre o início da atividade será enviada ao gestor do processo.

**Prazo de conclusão (em horas)**
Tempo, em horas, dentro do qual essa atividade deve ser concluída. Após esse tempo, ela será considerada atrasada. Se configurado, o tempo é calculado levando em conta o expediente padrão cadastrado na plataforma e o momento em que o solicitante iniciou a solicitação.

**09.** Para visualizar o fluxo da solicitação, clique em **Visualizar fluxo**.

**10**. Clique em **Avançar**.

**11.** Na etapa **Revisão**, em **Dados do processo**, confira as principais informações do processo que será criado..

Se necessário, clique em **Voltar** até a etapa desejada para ajustar alguma configuração.

**12.** Clique em **Instalar**.

Ao finalizar a instalação, um processo com o nome e na categoria definidos na configuração é listado no recurso [Iniciar solicitações](/pages/viewpage.action?pageId=233763157).

### Editar flow

---

        Your browser does not support the HTML5 video element

**01.** No menu lateral do TOTVS Fluig Plataforma, clique em **Painel de controle**.

**02.** No agrupador **Aplicativos**, clique em **Store**.

Por padrão, apenas administradores da plataforma tem acesso ao Painel de controle e, consequentemente ao recurso Store. Porém, como as permissões podem ser personalizadas, o acesso a esse recurso segue o que foi definido na sua plataforma.

**03.** Na área **Flows** do recurso Store, [localize](https://tdn.totvs.com/x/frOcEw#Plataforma%E2%9D%99ItensdaStore-Buscarsolu%C3%A7%C3%B5es) o *flow* **Lançamento de atestado**.

**04.** Clique em **Configurar** – localizado no quadro do *flow*.

**05.** Altere as informações desejadas em cada etapa e avance até a última.

**06.** Clique em **Atualizar processo**.

Ao editar e atualizar o processo, uma nova versão será criada. As solicitações que estão em andamento continuarão com as configurações da versão antiga. Apenas as novas solicitações que forem abertas terão as configurações da nova versão.

### Atualizar flow

---

**Quando houver atualizações disponíveis, o indicativo ATUALIZAR será exibido no flow para informar que ele pode ser atualizado.**

**01.** No menu lateral do TOTVS Fluig Plataforma, clique em **Painel de controle**.

**02.** No agrupador **Aplicativos**, clique em **Store**.

Por padrão, apenas administradores da plataforma tem acesso ao Painel de controle e, consequentemente ao recurso Store. Porém, como as permissões podem ser personalizadas, o acesso a esse recurso segue o que foi definido na sua plataforma.

**03.** No recurso **Store**, [localize](https://tdn.totvs.com/x/frOcEw#Plataforma%E2%9D%99ItensdaStore-Buscarsolu%C3%A7%C3%B5es) e clique no *flow* de **Lançamento de atestado**.

**04.** Clique em **Atualizar**.

Para pode utilizar as informações e melhorias da atualização liberada será necessário acessar o configurador do processo clicando em **Configurar **e passar pelas etapas **Geral**, **Responsável**, **Cadastros **e na etapa **Revisão **clicar no botão **Atualizar**.

Ao clicar em atualizar, uma nova versão do processo será criada com todas as correções e melhorias. As solicitações que estão em andamento continuarão com as configurações da versão antiga. Apenas as novas solicitações que forem abertas terão as configurações da nova versão do processo.

Ao realizar estes passos, as novidades e correções serão liberadas para o **flow****Lançamento de atestado**.

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

Este é o diagrama do *flow* de Lançamento de atestado:

![](/download/attachments/805975088/FlowEssentials_LancamentoDeAtestado.png?version=1&modificationDate=1700748957233&api=v2)

### Atividades

---

As atividades que compõem o processo são:

LANÇAR ATESTADO

Solicitante abre o processo, lança os dados do atestado para abono.

ANALISAR ATESTADO

RH analisa o atestado e pode aprovar, reprovar ou solicitar ajustes. 

AJUSTAR ATESTADO

Solicitante altera as informações ou complementa os dados, de acordo com a orientação do RH.

REGISTRAR ABONO

RH registra o abono

TRAMITAR VIA INSS

RH faz as devidas notificações com o INSS.

FIM

A solicitação é finalizada.

### Restrições

---

O *flow* de Lançamento de atestado possui as seguintes restrições:

- Não permite integrações com outros sistemas;

- Não é customizável.

			![](https://tdn.totvs.com/download/attachments/563436139/importante.png)

**IMPORTANTE!**
Como esse *flow* se torna um processo igual a qualquer outro dentro da plataforma, é possível alterá-lo ou até mesmo excluir seus artefatos. Porém, se for feita qualquer alteração no processo, diagrama, formulário ou outro artefato, o direito ao suporte padrão é automaticamente perdido.

## Abrir solicitação

---

É necessário que o *flow* Lançamento de atestado esteja instalado e devidamente parametrizado para abrir uma solicitação. Os usuários que podem abrir solicitação são os que foram definidos na configuração do *flow*, no campo "Quem poderá abrir uma solicitação".

        Your browser does not support the HTML5 video element

**01.** No menu lateral do TOTVS Fluig Plataforma, clique em **Processos**.

**02.** Clique em **Iniciar solicitações**.

**03.** Localize e clique no processo de abertura de **Lançamento de atestado**.

O nome do processo e a categoria na qual ele se encontra são os que foram definidos durante a instalação e configuração.

**04.** Em **Dados gerais**, preencha os dados referentes aos responsáveis pela abertura e pela solicitação do atual processo.

**Usuário de abertura**Usuário que está autenticado na plataforma. Não é possível alterá-lo.****

**Data**
Data na qual a solicitação está sendo aberta. Não é possível alterá-la.

**Usuário solicitante**
Nome do usuário para o qual a solicitação está sendo feita. O usuário solicitante pode ser diferente do usuário de abertura, visto que o usuário de abertura pode estar abrindo uma solicitação em nome de outra pessoa ou solicitando algo para outra pessoa – que pode ou não ter acesso à plataforma – e não necessariamente para ele.

**E-mail do solicitante**
*E-mail* do usuário para o qual a solicitação está sendo feita. Pode ser diferente do *e-mail* do usuário de abertura, visto que o usuário de abertura pode estar abrindo uma solicitação em nome de outra pessoa ou solicitando algo para outra pessoa – que pode ou não ter acesso à plataforma – e não necessariamente para ele.

**Gestor ou líder**Busque pelo gestor ou líder da área à qual o usuário solicitante pertence.

**E-mail**
*E-mail* do gestor ou líder da área à qual o usuário solicitante pertence. Ele é preenchido automaticamente ao selecionar o gestor ou líder.

**05.**Em **Dados do atestado**, preencha os dados referentes ao atestado do solicitante e possíveis informações complementares.

**Tipo de atestado**Buscar pelo tipo de atestado, através das opções disponíveis.

**Início do atestado**Insira a data de início do atestado.

**Fim do atestado**Insira a data de fim do atestado.

**Hora de início**Insira a hora de início do atestado. Campo habilitado apenas para atestados do tipo: **Atestado médico - Horas**, **Acompanhamento dependente (conforme CCT)**, **Atestado odontológico** e **Atestado médico de 1 e 2 dias**.

**Hora fim**Insira a hora de fim do atestado. Campo habilitado apenas para atestados do tipo: **Atestado médico - Horas**, **Acompanhamento dependente (conforme CCT)**, **Atestado odontológico** e **Atestado médico de 1 e 2 dias**.

**Dias de atestado**Quantidade de dias de atestado. O campo é preenchido automaticamente, conforme a data de início e fim do atestado.

**CID (se houver)**Informe o número do CID (Código Internacional de Doença). Não é obrigatório, mas desejável, principalmente em atestados superiores a 3 dias ou que podem gerar afastamento previdenciário.

**Nome do profissional de saúde**Informe o nome do profissional de saúde que o atendeu, conforme consta do atestado.

**Registro do profissional**Informe o número de registro (CRM) do profissional de saúde que o atendeu, conforme consta do atestado.****

**Anexar atestado**Utilize a aba anexos ou o botão **Anexar atestado** para anexar o arquivo com o atestado. **Anexo obrigatório**.

**06.** Em **Observações**, no campo **Observações sobre o atestado**, preencha com as observações sobre o lançamento de atestado e as possíveis informações complementares.

**07.** Clique em **Enviar**

**08**.Na atividade **Análise do atestado**, preencha as informações complementares sobre a análise do atestado pelo setor de RH.

**Responsável do RH por analisar atestado**Nome do responsável do RH pela análise do atestado.

**Data**Data e hora da análise do atestado.

**Considerações**Descreva as considerações sobre a análise do atestado.

**09**. Clique em **Enviar.**

**10**. Na atividade **Registro do abono**, preencha as informações complementares sobre o registro do abono de horas pelo setor de RH.

**Responsável do RH por registrar abono**Nome do responsável do RH por registrar o abono.

**Data**Data  e hora do registro do abono.

**Situação do atestado**Selecione o tipo de atestado. Caso selecione o atestado superior a 15 dias, ele avança para o **Trâmite via INSS**. E caso selecione o atestado inferior a 15 dias, o abono é registrado e a solicitação é finalizada.

**Considerações**Descreva as considerações sobre o registro do abono.

**11.**Clique em **Enviar.**

**12**. Na atividade **Trâmite via INSS**, preencha as informações complementares sobre o trâmite do atestado via INSS pelo setor de RH.

**Responsável do RH por tramitar via INSS**Nome do responsável do RH por tramitar via INSS.

**Data**Data e hora do envio do trâmite do atestado via INSS.

**Considerações**Descreva as considerações sobre o trâmite do atestado via INSS.

**13.** Clique em **Enviar.**

**14.** Se necessário, acesse as abas **Histórico** e **Anexos** – localizadas na parte superior – para complementar a solicitação com comentários ou documentos.

Sua solicitação será aberta e pode ser acompanhada pela [Central de tarefas](/pages/viewpage.action?pageId=233762817) → [Minhas solicitações](/pages/viewpage.action?pageId=233763398).


<!-- anchors: Flows|Lançamentodeatestado-Falandodelançamentodeatestado..., Flows|Lançamentodeatestado-Comoadquirir, Flows|Lançamentodeatestado-Instalação, Flows|Lançamentodeatestado-Requisitosparauso, Flows|Lançamentodeatestado-Parametrizações, Flows|Lançamentodeatestado-Instalareconfigurarflowinstalar, Flows|Lançamentodeatestado-Editarflow, Flows|Lançamentodeatestado-Atualizarflow, Flows|Lançamentodeatestado-Processocriado, Flows|Lançamentodeatestado-Diagrama, Flows|Lançamentodeatestado-Atividades, Flows|Lançamentodeatestado-Restrições, Flows|Lançamentodeatestado-Abrirsolicitação -->
