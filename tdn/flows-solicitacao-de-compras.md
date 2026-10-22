---
title: "Flows | Solicitação de compras"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=745756104"
scraped_at: "2026-03-09T04:30:02.901Z"
depth: 3
anchors: 13
child_links: 40
---

# Flows | Solicitação de compras

# Falado de solicitação de compras...

---

O *flow* de solicitação de compras permite aos seus colaboradores abrir pedidos de compras de forma otimizada, podendo informar qual item será comprado, direcionando para as devidas aprovações da gestão e área de compras. Permite realizar o cadastro de itens e o centro de custo que consumirá no processo.

Depois de adquirido, instalado e configurado, ele cria um processo igual a qualquer outro processo padrão da plataforma, ou seja, a abertura de solicitações é a partir do recurso [Iniciar solicitação](https://tdn.totvs.com/pages/viewpage.action?pageId=233763157).

			![](https://tdn.totvs.com/download/attachments/563436139/nota.png)

**NOTA:**
Esse *flow* não está integrado a nenhum ERP ou qualquer outro sistema de compras.

Este *flow*segue as leis gerais de proteção de dados - LGPD. O tratamento de dados pessoais realizado, possibilita que o administrador do Fluig faça a anonimização de dados, caso deseje ou seja solicitado. Para isso, basta acessar: **Painel de controle > Segurança e acesso > Anonimizar e exportar dados pessoais.**

![](/download/attachments/745756104/solicita%C3%A7%C3%A3o%20de%20compra.png?version=1&modificationDate=1687544429937&api=v2)

## Como adquirir

---

O *flow* de solicitação de compras é listado como uma solução paga no recurso [Store](https://tdn.totvs.com/x/frOcEw) do TOTVS Fluig Plataforma a partir da atualização **Mist - 1.8.0-230523**.

Para adquiri-lo, é necessário entrar em contato com o executivo de soluções de negócio responsável por sua conta.

Com o processo de aquisição finalizado, o acesso à instalação do *flow* é liberado, sendo necessário instalá-lo para utilizar. Neste caso, basta seguir os passos descritos em [Instalar e configurar *flow*](#Flows|Solicitaçãodecompras-instalar).

## Instalação

---

Depois de adquirir esse *flow*, ele estará liberado para instalação a partir do recurso [Store](https://tdn.totvs.com/x/frOcEw).

### Requisitos para uso

---

Para instalar e utilizar esse *flow*, é necessário:

- Ter o TOTVS Fluig Plataforma instalado e parametrizado a partir da atualização **Mist - 1.8.0-230523**.

### Parametrizações

---

Durante a instalação desse *flow*, é necessário definir as seguintes parametrizações:

- **Geral**: onde são definidos os dados gerais do processo, como gestor e prazos de expiração e de aviso;

- **Responsáveis**: onde são definidos os responsáveis e o SLA de cada atividade;

- **Cadastros**: onde são definidas as opções que serão selecionadas durante a abertura de solicitação do processo que, nesse caso, são os tipos de ocorrência;

- **Revisão**: onde são listados os principais dados do processo que será criado para conferência.

### Instalar e configurar flow 

---

        Your browser does not support the HTML5 video element

**01.** No menu lateral do TOTVS Fluig Plataforma, clique em **Painel de controle**.

**02.** No agrupador **Aplicativos**, clique em **Store**.

É possível ainda acessar diretamente pelo ícone da **Store** ![](/download/attachments/745756104/flaticon-rocket.png?version=1&modificationDate=1701956224527&api=v2) localizado no menu lateral, para ir diretamente para os aplicativos.

Por padrão, apenas administradores da plataforma tem acesso ao Painel de controle e, consequentemente ao recurso Store. Porém, como as permissões podem ser personalizadas, o acesso a esse recurso segue o que foi definido na sua plataforma.

**03.** Na área **Flows** do recurso Store, [localize](https://tdn.totvs.com/x/frOcEw#Plataforma%E2%9D%99ItensdaStore-Buscarsolu%C3%A7%C3%B5es) e clique no **flow Solicitação de compra**.

**04.** Clique em **Configurar**.

A instalação é iniciada e, quando concluída, uma notificação é emitida.

**05.**Na etapa **Geral**, em **Dados gerais**, defina as informações de apresentação e identificação.

**Código identificador do processo**
Exibe o código de identificação do processo. Não é possível alterá-lo.

**Nome do processo**
Nome que visa facilitar o reconhecimento do processo e do seu objetivo. Esse nome será exibido posteriormente no recurso [Iniciar solicitação](/pages/viewpage.action?pageId=233763157).

**Descrição**
Breve descrição sobre os detalhes do processo, informando qual item será comprado e direcionado para as aprovações corretas.

**Categoria**
Categoria na qual o processo se enquadra. Ele será exibido dentro dessa categoria no recurso [Iniciar solicitação](/pages/viewpage.action?pageId=233763157).

**Pessoa gestora do processo**
Pessoa que será definida como gestora do processo, ou seja, na ausência do responsável por alguma atividade, essa pessoa pode substitui-lo e continuar com a movimentação da solicitação. Se não for definida uma pessoa gestora, apenas os responsáveis pelas atividades poderão movimentar a solicitação, ou seja, na ausência de algum responsável, a solicitação permanecerá parada. As opções disponíveis são:

- **Todos de um grupo específico**: quando selecionada, determina que os gestores serão as pessoas que fazem parte de um determinado grupo;
- **Todos de um papel específico**: quando selecionada, determina que os gestores serão as pessoas que fazem parte de um determinado papel;
- **Uma pessoa específica**: quando selecionada, determina que o gestor será uma pessoa específica.

**Grupo, papel ou pessoa específica**Grupo, papel ou pessoa específica que poderá ser definida como gestora do processo, de acordo com a opção que foi selecionada em **Pessoa gestora do processo**.

**Prazo de expiração (em horas)**
Tempo máximo acordado, em horas, durante o qual a solicitação ficará disponível. Ao atingir o tempo máximo, uma notificação é emitida informando que a solicitação expirou. Ao ser configurado, o tempo é calculado levando em conta o expediente padrão cadastrado na plataforma. Esse prazo não pode ser menor que o prazo de notificação.

**Prazo de aviso (em horas)**
Tempo acordado, em horas, para que uma notificação seja enviada antes do prazo de expiração da solicitação. Ao ser configurado, o tempo é calculado levando em conta o expediente padrão cadastrado na plataforma. Esse prazo não pode ser maior que o prazo de expiração.

**06. **Clique em **Avançar**.

**07.**Na etapa **Responsáveis**, em **Solicitante**, defina a pessoa responsável por abrir a solicitação e aplique as regras necessárias.

**1 - ABRIR SOLICITAÇÃO**

**Quem poderá abrir uma solicitação**Pessoas que podem abrir solicitação no processo criado por esse *flow*. As opções disponíveis são:

- **Todos de um grupo específico**: quando selecionada, determina que todas as pessoas que fazem parte de um determinado grupo podem abrir solicitação;
- **Todos de um papel específico**: quando selecionada, determina que todas as pessoas que fazem parte de um determinado papel podem abrir solicitação;
- **Uma pessoa específica**: quando selecionada, determina que apenas uma pessoa específica pode abrir solicitação;
- **Qualquer pessoa**: quando selecionada, determina que qualquer pessoa pode abrir solicitação.

**Grupo, papel ou usuário específico**
Grupo, papel ou pessoa que pode abrir solicitações nesse processo, de acordo com a opção que foi selecionada em **Quem poderá abrir uma solicitação**.

**Acompanhamento**
Envio de notificação sobre o início da solicitação para as pessoas envolvidas. As opções disponíveis são:

- **Notificar responsável**: quando assinalada, determina que uma notificação sobre o início da solicitação será enviada ao responsável pela primeira atividade;
- **Notificar solicitante**: quando assinalada, determina que uma notificação sobre o início da solicitação será enviada ao solicitante;
- **Notificar gestor**: quando assinalada, determina que uma notificação sobre o início da solicitação será enviada ao gestor do processo.

---

**2 - RECEBER E VALIDAR SERVIÇO/PRODUTO RECEBIDO**A responsabilidade por receber e validar produto/serviço recebido é atribuída à pessoa que abriu a solicitação.

**Acompanhamento**
Envio de notificação sobre o início da atividade de complemento de informações para as pessoas envolvidas. As opções disponíveis são:

- **Notificar responsável**: quando assinalada, determina que uma notificação sobre o início da atividade de complemento de informações será enviada ao responsável por ela;
- **Notificar solicitante**: quando assinalada, determina que uma notificação sobre o início da atividade de complemento de informações será enviada ao solicitante;
- **Notificar gestor**: quando assinalada, determina que uma notificação sobre o início da atividade de complemento de informações será enviada ao gestor do processo.

**Prazo de conclusão (em horas)**
Tempo, em horas, dentro do qual a atividade de complemento de informações deve ser concluída.

**08**. Na etapa **Responsáveis**, em **Gestor do centro de custo**, defina as configurações necessárias a atividade de aprovação, conforme o centro de custo.

**1 - ANALISAR CENTRO DE CUSTO DA SOLICITAÇÃO**A responsabilidade é definida de acordo com o centro de custo que será informada na abertura da solicitação.****

**Acompanhamento**
Envio de notificação sobre o início da análise do serviço para as pessoas envolvidas. As opções disponíveis são:

- **Notificar responsável**: quando assinalada, determina que uma notificação sobre o início da análise do serviço será enviada ao responsável por ela;
- **Notificar solicitante**: quando assinalada, determina que uma notificação sobre o início da análise do serviço será enviada ao solicitante;
- **Notificar gestor**: quando assinalada, determina que uma notificação sobre o início da análise do serviço será enviada ao gestor do processo.

**Prazo de conclusão (em horas)**
Tempo, em horas, dentro do qual a análise do serviço deve ser concluída.

**09**. Na etapa **Responsáveis**, em **Compras**, defina em cada atividade os responsáveis e como o setor de compras deve realizar o atendimento da solicitação.

**1 - ANALISAR SOLICITAÇÃO**

**Quem poderá analisar a solicitação?**Pessoas que podem assumir e analisar a solicitação do processo criado por esse *flow*. As opções disponíveis são:

- **Qualquer pessoa**: quando selecionada, determina que qualquer pessoa pode analisar a solicitação.
- **Uma pessoa de um grupo específico**: quando selecionada, determina que a solicitação será enviada para uma pessoa de um grupo específico e apenas ela pode analisá-la;
- **Uma pessoa de um papel específico**: quando selecionada, determina que a solicitação será enviada para uma pessoa de um papel específico e apenas ela pode analisá-la;
- **Todos de um grupo específico**: quando selecionada, determina que a solicitação será enviada para um grupo específico e qualquer um do grupo pode analisá-la;
- **Todos de um papel específico**: quando selecionada, determina que a solicitação será enviada para um papel específico e qualquer um do papel pode analisá-la;
- **Uma pessoa específica**: quando selecionada, determina que apenas uma pessoa específica pode abrir solicitação;

**Acompanhamento**
Envio de notificação sobre o início da atividade de complemento de informações para as pessoas envolvidas. As opções disponíveis são:

- **Notificar responsável**: quando assinalada, determina que uma notificação sobre o início da atividade de complemento de informações será enviada ao responsável por ela;
- **Notificar solicitante**: quando assinalada, determina que uma notificação sobre o início da atividade de complemento de informações será enviada ao solicitante;
- **Notificar gestor**: quando assinalada, determina que uma notificação sobre o início da atividade de complemento de informações será enviada ao gestor do processo.

**Prazo de conclusão (em horas)**
Tempo, em horas, dentro do qual a atividade de complemento de informações deve ser concluída.

---

**2 - REALIZAR COMPRA**

**Quem será o responsável por realizar a compra?**Pessoas que podem realizar a compra do processo criado por esse *flow*. As opções disponíveis são:

- **Qualquer pessoa**: quando selecionada, determina que qualquer pessoa pode analisar a solicitação.
- **Atribuição por executor de atividade:** quando selecionada, determina que o executor de uma atividade anterior pode realizar a compra.
- **Uma pessoa de um grupo específico**: quando selecionada, determina que a solicitação será enviada para uma pessoa de um grupo específico e apenas ela pode analisá-la;
- **Uma pessoa de um papel específico**: quando selecionada, determina que a solicitação será enviada para uma pessoa de um papel específico e apenas ela pode analisá-la;
- **Todos de um grupo específico**: quando selecionada, determina que a solicitação será enviada para um grupo específico e qualquer um do grupo pode analisá-la;
- **Todos de um papel específico**: quando selecionada, determina que a solicitação será enviada para um papel específico e qualquer um do papel pode analisá-la;
- **Uma pessoa específica**: quando selecionada, determina que apenas uma pessoa específica pode abrir solicitação;

**Atividade**Caso tenha definido a opção "**Atribuição por executor de atividade**" na etapa anterior de responsável pela compra, será necessário definir qual atividade anterior determinará o responsável da atividade atual.

**Acompanhamento**
Envio de notificação sobre o início da atividade de complemento de informações para as pessoas envolvidas. As opções disponíveis são:

- **Notificar responsável**: quando assinalada, determina que uma notificação sobre o início da atividade de complemento de informações será enviada ao responsável por ela;
- **Notificar solicitante**: quando assinalada, determina que uma notificação sobre o início da atividade de complemento de informações será enviada ao solicitante;
- **Notificar gestor**: quando assinalada, determina que uma notificação sobre o início da atividade de complemento de informações será enviada ao gestor do processo.

**Prazo de conclusão (em horas)**
Tempo, em horas, dentro do qual a atividade de complemento de informações deve ser concluída.

---

**3 - VERIFICAR PROBLEMA**

**Quem será o responsável por verificar problema**Pessoas que podem verificar problema na solicitação do processo criado por esse *flow*. As opções disponíveis são:

- **Qualquer pessoa**: quando selecionada, determina que qualquer pessoa pode analisar a solicitação.
- **Atribuição por executor de atividade:** quando selecionada, determina que o executor de uma atividade anterior pode realizar a compra.
- **Uma pessoa de um grupo específico**: quando selecionada, determina que a solicitação será enviada para uma pessoa de um grupo específico e apenas ela pode analisá-la;
- **Uma pessoa de um papel específico**: quando selecionada, determina que a solicitação será enviada para uma pessoa de um papel específico e apenas ela pode analisá-la;
- **Todos de um grupo específico**: quando selecionada, determina que a solicitação será enviada para um grupo específico e qualquer um do grupo pode analisá-la;
- **Todos de um papel específico**: quando selecionada, determina que a solicitação será enviada para um papel específico e qualquer um do papel pode analisá-la;
- **Uma pessoa específica**: quando selecionada, determina que apenas uma pessoa específica pode abrir solicitação;

**Atividade**Caso tenha definido a opção "**Atribuição por executor de atividade**" na etapa anterior de responsável pela compra, será necessário definir qual atividade anterior determinará o responsável da atividade atual.

**Acompanhamento**
Envio de notificação sobre o início da atividade de complemento de informações para as pessoas envolvidas. As opções disponíveis são:

- **Notificar responsável**: quando assinalada, determina que uma notificação sobre o início da atividade de complemento de informações será enviada ao responsável por ela;
- **Notificar solicitante**: quando assinalada, determina que uma notificação sobre o início da atividade de complemento de informações será enviada ao solicitante;
- **Notificar gestor**: quando assinalada, determina que uma notificação sobre o início da atividade de complemento de informações será enviada ao gestor do processo.

**Prazo de conclusão (em horas)**
Tempo, em horas, dentro do qual a atividade de complemento de informações deve ser concluída.

**10**. Clique em **Avançar**.

**11.** Na etapa **Cadastros**, em **Centro de custo**, defina os centros de custo e seus responsáveis.

**Código:**código que identifica o centro de custo de itens. Não é possível gerar códigos repetidos. Após concluído o processo de instalação, ele não poderá ser editado ou excluído.

**Nome do centro de custo:**definir um nome para o centro de custo.

**Gestor do centro de custo:**definir um gestor responsável pelo centro de custo.

Para adicionar um novo centro de custo, basta acionar o item **+ Adicionar novo centro de custo.**

**12.**Na etapa **Cadastros**, em **Estabelecimento**, defina a denominação dos estabelecimentos (matriz, franquias e filiais) de sua empresa ou organização.

Para adicionar um novo estabelecimento, basta acionar o item **+ Adicionar novo estabelecimento.**

**13.**Na etapa **Cadastros**, em **Itens de compra**, defina os tipos de itens que os solicitantes podem pedir.

**Código:**código que identifica o produto. Não é possível gerar códigos repetidos. Após concluído o processo de instalação, ele não poderá ser editado ou excluído.

**Nome do item:**definir um nome para item.

**Unidade de medida:**definir a unidade de medida a ser utilizada.

Para adicionar mais itens, defina a quantidade que deseja e acione **Confirmar**.

**14**. Clique em **Avançar**.

**15.** Na etapa **Revisão**, em **Dados do processo**, confira as principais informações do processo que será criado.

Se necessário, clique em **Voltar** até a etapa desejada para ajustar alguma configuração.

**16.** Clique em **Instalar** ![](https://tdn.totvs.com/download/attachments/745756064/instalar-flow.png).

Ao finalizar a instalação, um processo com o nome e na categoria definidos na configuração é listado no recurso [Iniciar solicitações](/pages/viewpage.action?pageId=233763157).

### Editar flow

---

        Your browser does not support the HTML5 video element

**01.** No menu lateral do TOTVS Fluig Plataforma, clique em **Painel de controle**.

**02.** No agrupador **Aplicativos**, clique em **Store**.

Por padrão, apenas administradores da plataforma tem acesso ao Painel de controle e, consequentemente ao recurso Store. Porém, como as permissões podem ser personalizadas, o acesso a esse recurso segue o que foi definido na sua plataforma.

**03.** Na área **Flows** do recurso Store, [localize](https://tdn.totvs.com/x/frOcEw#Plataforma%E2%9D%99ItensdaStore-Buscarsolu%C3%A7%C3%B5es) o *flow* Solicitação de compras.

**04.** Clique em **Configurar** – localizado no quadro do *flow*.

**05.** Altere as informações desejadas em cada etapa e avance até a última.

**06.** Clique em **Atualizar** ![](https://tdn.totvs.com/download/attachments/745756064/instalar-flow.png).

O processo será atualizado com as alterações efetuadas e sua versão será incrementada.

### Atualizar flow

---

Quando houver atualizações disponíveis, o indicativo ATUALIZAR será exibido no *flow* para informar que ele pode ser atualizado.

**01.** No menu lateral do TOTVS Fluig Plataforma, clique em **Painel de controle**.

**02.** No agrupador **Aplicativos**, clique em **Store**.

Por padrão, apenas administradores da plataforma tem acesso ao Painel de controle e, consequentemente ao recurso Store. Porém, como as permissões podem ser personalizadas, o acesso a esse recurso segue o que foi definido na sua plataforma.

**03.** No recurso **Store**, [localize](https://tdn.totvs.com/x/frOcEw#Plataforma%E2%9D%99ItensdaStore-Buscarsolu%C3%A7%C3%B5es) e clique no **flow de Solicitação de compras**.

**04.** Clique em **Atualizar**.

Para pode utilizar as informações e melhorias da atualização liberada será necessário acessar o configurador do processo clicando em **Configurar**e passar pelas etapas **Geral**, **Responsável**, **Cadastros**e na etapa **Revisão**clicar no botão **Atualizar**.

Ao clicar em atualizar, uma nova versão do processo será criada com todas as correções e melhorias. As solicitações que estão em andamento continuarão com as configurações da versão antiga. Apenas as novas solicitações que forem abertas terão as configurações da nova versão do processo.

Ao realizar estes passos, as novidades e correções serão liberadas para o *flow*Solicitação de compras.

## Processo criado

---

Ao finalizar a instalação do *flow*, o processo criado é listado juntamente com os demais processos existentes na plataforma, tanto no recurso [Configurar processos](/pages/viewpage.action?pageId=233763153) quanto no [Iniciar solicitações](/pages/viewpage.action?pageId=233763157).

As características do processo criado por esse *flow* são detalhadas a seguir.

### Diagrama

---

O diagrama define como o processo funciona, quais atividades o compõem e qual o caminho que a solicitação segue até a sua conclusão.

Este é o diagrama do *flow* de solicitação de compras:

![](/download/attachments/745756104/diagrama-solicita%C3%A7%C3%A3o-compra.png?version=1&modificationDate=1684248540540&api=v2)

### Atividades

---

As atividades que compõem o processo são:

ABRIR SOLICITAÇÃO

Solicitante abre o processo, preenche as informações necessárias e envia a solicitação.

ANALISAR CENTRO DE CUSTO DA SOLICITAÇÃO

O gestor aprova ou reprova a solicitação de compras.

Essa aprovação ou reprovação pode ser feita via *Approval*.

Se reprovado, avança para a atividade de **Cancelar**. Se aprovado, avança para a atividade "**Analisar solicitação de compra**".

ANALISAR SOLICITAÇÃO DE COMPRA

O responsável da área de compras deverá verificar se os itens escolhidos, centro de custo e demais informações estão corretas e de acordo com a política da empresa, para então aprovar ou reprovar.

Essa aprovação ou reprovação pode ser feita via *Approval*.

Se reprovado, avança para a atividade de **Cancelar**. Se aprovado, avança para a atividade "**Realizar compra**".

REALIZAR COMPRA

O responsável realiza a compra e coloca informações que considera relevantes.

Ao avançar o processo, avança para a atividade "**Receber e validar o produto/serviço**"

RECEBER E VALIDAR PRODUTO/SERVIÇO

O solicitante é responsável por validar o produto ou serviço que foi comprado, verificando se as necessidades iniciais foram atendidas e se foram entregues em boa qualidade, para então aprovar ou reprovar a compra recebida.

Essa aprovação ou reprovação pode ser feita via *browser*.

Se reprovado, avança para a atividade "**Verificar problema**".

Se aprovado, avança para a atividade "**Finalizar**".

VERIFICAR PROBLEMA

O responsável pela compra recebe o retorno do solicitante e verifica qual é o problema, informando as providências tomadas.

Ao avançar, o processo retorna para a atividade "**Receber e validar produto/serviço**".

VERIFICAR RECEBER E VALIDAR O PRODUTO/SERVIÇO

O solicitante é responsável por validar se o problema reportado foi resolvido, verificando se as necessidades inicias foram atendidas, podendo aprovar ou reprovar a compra recebida novamente.

Essa aprovação ou reprovação pode ser feita somente via *browser*.

Se reprovado, avança para a atividade "**Verificar problema**".

Se aprovado, avança para a atividade "**Finalizar**".

Nessa atividade de retorno, deve conter os campos preenchidos na atividade "**Verificar problema**".

Nessa atividade deve habilitar os campos de validação dos itens, para edição.

FIM

O processo é finalizado.

### Restrições

---

O *flow* de solicitação de compra possui as seguintes restrições:

- Não permite ser integrado a outros sistemas;

- Não permite personalização, tais como, adicionar campos ao formulário, alterar o diagrama, adicionar ou remover atividades.

			![](https://tdn.totvs.com/download/attachments/563436139/importante.png)

**IMPORTANTE!**
Como esse *flow* se torna um processo igual a qualquer outro dentro da plataforma, é possível alterá-lo ou até mesmo excluir seus artefatos. Porém, se for feita qualquer alteração no processo, diagrama, formulário ou outro artefato, o direito ao suporte padrão é automaticamente perdido.

## Abrir solicitação

---

        Your browser does not support the HTML5 video element

É necessário que o *flow* Solicitação de compras esteja instalado e devidamente parametrizado para abrir uma solicitação. Os usuários que podem abrir solicitação são os que foram definidos na configuração do *flow*, no campo "Quem poderá abrir uma solicitação?".

**01.** No menu lateral do TOTVS Fluig Plataforma, clique em **Processos**.

**02.** Clique em **Iniciar solicitações**.

**03.** Localize e clique no processo de solicitação de compras.

O nome do processo e a categoria na qual ele se encontra são os que foram definidos durante a instalação e configuração.

**04.** Em **Dados gerais**, preencha as informações referente aos responsáveis pela abertura e pela solicitação do atual processo.

**Usuário de abertura**Usuário que está autenticado na plataforma. Não é possível alterá-lo.****

**Data**
Data na qual a solicitação está sendo aberta. Não é possível alterá-la.

**Usuário solicitante**
Nome do usuário para o qual a solicitação está sendo feita. O usuário solicitante pode ser diferente do usuário de abertura, visto que o usuário de abertura pode estar abrindo uma solicitação em nome de outra pessoa ou solicitando algo para outra pessoa – que pode ou não ter acesso à plataforma – e não necessariamente para ele.

**E-mail do solicitante**
*E-mail* do usuário para o qual a solicitação está sendo feita. Pode ser diferente do *e-mail* do usuário de abertura, visto que o usuário de abertura pode estar abrindo uma solicitação em nome de outra pessoa ou solicitando algo para outra pessoa – que pode ou não ter acesso à plataforma – e não necessariamente para ele.

**Estabelecimento/Filial**
Nome da unidade, franquia ou filial à qual o usuário solicitante pertence.

**Centro de custo**
Centro de custo da unidade, franquia ou filial à qual o usuário solicitante pertence.

**Gestor aprovador do centro de custo**Gestor da área à qual o usuário solicitante pertence.

**E-mail do gestor**
E-mail do gestor da área à qual o usuário solicitante pertence. Ele é preenchido automaticamente ao selecionar o gestor.

**Endereço do solicitante**Endereço do usuário solicitante.

**Complemento**
Complemento sobre a localização do usuário solicitante, como prédio, andar, bloco ou mesa.

**05.** Em **Itens**, preencha os dados referente aos itens de compra necessários para o solicitante.

**Item de compra**Buscar pelo item de compra.

**Quantidade**Informe a quantidade em números.

**Unidade de medida**Informe a unidade de medida em metro.

Para adicionar mais itens, acione **+ Adicionar novo item**.

**06.** Em **Justificativa**, preencha com motivo da compra dos itens e as possíveis informações complementares.

**07.** Se necessário, acesse as abas **Histórico** e **Anexos** – localizadas na parte superior – para complementar a solicitação com comentários ou documentos.

Informações mais detalhadas sobre as demais opções existentes podem ser obtidas em [Iniciar solicitações](/pages/viewpage.action?pageId=233763157).

**08.** Clique em **Enviar**.

Sua solicitação será aberta e pode ser acompanhada pela [Central de tarefas](/pages/viewpage.action?pageId=233762817) → [Minhas solicitações](/pages/viewpage.action?pageId=233763398).


<!-- anchors: Flows|Solicitaçãodecompras-Faladodesolicitaçãodecompras..., Flows|Solicitaçãodecompras-Comoadquirir, Flows|Solicitaçãodecompras-Instalação, Flows|Solicitaçãodecompras-Requisitosparauso, Flows|Solicitaçãodecompras-Parametrizações, Flows|Solicitaçãodecompras-Instalareconfigurarflowinstalar, Flows|Solicitaçãodecompras-Editarflow, Flows|Solicitaçãodecompras-Atualizarflow, Flows|Solicitaçãodecompras-Processocriado, Flows|Solicitaçãodecompras-Diagrama, Flows|Solicitaçãodecompras-Atividades, Flows|Solicitaçãodecompras-Restrições, Flows|Solicitaçãodecompras-Abrirsolicitação -->
