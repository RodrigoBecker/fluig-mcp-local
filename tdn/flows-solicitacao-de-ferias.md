---
title: "Flows | Solicitação de férias"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=759952674"
scraped_at: "2026-03-09T04:30:08.007Z"
depth: 3
anchors: 13
child_links: 40
---

# Flows | Solicitação de férias

# Falando de solicitação de férias...

---

O *flow* de solicitação de férias permite aos seus colaboradores abrir solicitação de férias de forma otimizada, onde o colaborador poderá solicitar suas férias diretamente ao seu superior imediato, enviando a solicitação para aprovação. Passando então pela validação da área de Recursos Humanos, programando o pagamento com o financeiro e assegurando toda a documentação para assinatura. 

Depois de adquirido, instalado e configurado, ele cria um processo igual a qualquer outro processo padrão da plataforma, ou seja, a abertura de solicitações é a partir do recurso [Iniciar solicitação](https://tdn.totvs.com/pages/viewpage.action?pageId=233763157).

			![](https://tdn.totvs.com/download/attachments/563436139/nota.png)

**NOTA:**
Esse *flow* não está integrado a nenhum ERP ou qualquer outro sistema de RH. Além disso, não efetua nenhuma geração de documentação de férias e não consiste os dados de vencimento de férias.

Este *flow*segue as leis gerais de proteção de dados - LGPD. O tratamento de dados pessoais realizado, possibilita que o administrador do Fluig faça a anonimização de dados, caso deseje ou seja solicitado. Para isso, basta acessar: **Painel de controle > Segurança e acesso > Anonimizar e exportar dados pessoais.**

![](/download/attachments/759952674/formul%C3%A1rio%20de%20solicita%C3%A7%C3%A3o%20de%20f%C3%A9rias.PNG?version=1&modificationDate=1687467620750&api=v2)

## Como adquirir

---

O *flow* de solicitação de férias é listado como uma solução paga no recurso [Store](https://tdn.totvs.com/x/frOcEw) do TOTVS Fluig Plataforma a partir da atualização **Mist - 1.8.0-230523**.

Para adquiri-lo, é necessário entrar em contato com o executivo de soluções de negócio responsável por sua conta.

Com o processo de aquisição finalizado, o acesso à instalação do *flow* é liberado, sendo necessário instalá-lo para utilizar. Neste caso, basta seguir os passos descritos em [Instalar e configurar *flow*](#Flows|Solicitaçãodeférias-instalar).

## Instalação

---

Depois de adquirir esse *flow*, ele estará liberado para instalação a partir do recurso [Store](https://tdn.totvs.com/x/frOcEw).

### Requisitos para uso

---

Para instalar e utilizar esse *flow*, é necessário:

- Ter o TOTVS Fluig Plataforma instalado e parametrizado a partir da atualização **Mist - 1.8.0-230523**.

### Parametrizações

---

Durante a instalação desse *flow*, é necessário definir as seguintes parametrizações, que serão divididas em quatro etapas:

- **Geral**: onde são definidas as informações de apresentação e identificação;

- **Responsáveis**: onde são definidas as informações do solicitante, gestor do solicitante, recursos humanos e financeiro;

- **Cadastros**: onde são definidos os dados consumíveis pelo processo (centro de custo e departamentos);

- **Revisão**: onde serão listados os principais dados do processo que será criado para conferência.

### Instalar e configurar flow 

---

        Your browser does not support the HTML5 video element

**01.** No menu lateral do TOTVS Fluig Plataforma, clique em **Painel de controle**.

**02.** No agrupador **Aplicativos**, clique em **Store**.

É possível ainda acessar diretamente pelo ícone da **Store** ![](/download/attachments/759952674/flaticon-rocket.png?version=1&modificationDate=1702042168247&api=v2) localizado no menu lateral, para ir diretamente para os aplicativos.

Por padrão, apenas administradores da plataforma tem acesso ao Painel de controle e, consequentemente ao recurso Store. Porém, como as permissões podem ser personalizadas, o acesso a esse recurso segue o que foi definido na sua plataforma.

**03.** Na área **Flows** do recurso **Store**, [localize](https://tdn.totvs.com/x/frOcEw#Plataforma%E2%9D%99ItensdaStore-Buscarsolu%C3%A7%C3%B5es) e clique no **flow Solicitação de férias**.

**04.** Clique em **Configurar**.

A instalação é iniciada e, quando concluída, uma notificação é emitida.

**05.**Na etapa **Geral**, em **Dados gerais**, defina as informações de apresentação e identificação.

**Código identificador do processo**
Exibe o código de identificação do processo. Não é possível alterá-lo.

**Nome do processo**
Nome que visa facilitar o reconhecimento do processo e do seu objetivo. Esse nome será exibido posteriormente no recurso [Iniciar solicitação](/pages/viewpage.action?pageId=233763157).

**Descrição**
Breve descrição sobre os detalhes do processo e instruções para os solicitantes utilizarem.

**Categoria**
Categoria na qual o processo se enquadra. Ele será exibido dentro dessa categoria no recurso [Iniciar solicitação](/pages/viewpage.action?pageId=233763157).

**Atribuição da pessoa gestora do processo**
Pessoa que será definida como gestora do processo, ou seja, na ausência do responsável por alguma atividade, essa pessoa pode substitui-lo e continuar com a movimentação da solicitação.  Se não for definida uma pessoa gestora, apenas os responsáveis pelas atividades poderão movimentar a solicitação, ou seja, na ausência de algum responsável, a solicitação permanecerá parada. As opções disponíveis são:

- **Todos de um grupo específico**: quando selecionada, determina que os gestores serão as pessoas que fazem parte de um determinado grupo;
- **Todos de um papel específico**: quando selecionada, determina que os gestores serão as pessoas que fazem parte de um determinado papel;
- **Por uma pessoa**: quando selecionada, determina que o gestor será uma pessoa específica.

**Grupo, papel ou pessoa específica**Grupo, papel ou pessoa específica que poderá ser definida como gestora do processo, de acordo com a opção que foi selecionada em **Pessoa gestora do processo**.

**Prazo de expiração (em horas)**
Tempo máximo acordado, em horas, durante o qual a solicitação ficará disponível. Ao atingir o tempo máximo, uma notificação é emitida informando que a solicitação expirou. Ao ser configurado, o tempo é calculado levando em conta o expediente padrão cadastrado na plataforma. Esse prazo não pode ser menor que o prazo de notificação.

**Prazo de aviso (em horas)**
Tempo acordado, em horas, para que uma notificação seja enviada antes do prazo de expiração da solicitação. Ao ser configurado, o tempo é calculado levando em conta o expediente padrão cadastrado na plataforma. Esse prazo não pode ser maior que o prazo de expiração.

**06. **Clique em **Avançar**.

**07.**Na etapa **Responsáveis**, em **Solicitante**, defina a pessoa responsável por abrir a solicitação e como ela deve interagir com as atividades sob sua demanda.

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

**2 - COMPLEMENTAR DADOS**

**Acompanhamento**
Envio de notificação sobre o início da atividade de complemento de informações para as pessoas envolvidas. As opções disponíveis são:

- **Notificar responsável**: quando assinalada, determina que uma notificação sobre o início da atividade de complemento de informações será enviada ao responsável por ela;
- **Notificar solicitante**: quando assinalada, determina que uma notificação sobre o início da atividade de complemento de informações será enviada ao solicitante;
- **Notificar gestor**: quando assinalada, determina que uma notificação sobre o início da atividade de complemento de informações será enviada ao gestor do processo.

**Prazo de conclusão (em horas)**
Tempo, em horas, dentro do qual essa atividade deve ser concluída. Após esse tempo, ela será considerada atrasada. Se configurado, o tempo é calculado levando em conta o expediente padrão cadastrado na plataforma e o momento em que o solicitante iniciou a solicitação.

---

**3 - ASSINAR DOCUMENTAÇÃO**

**Acompanhamento**
Envio de notificação sobre o início da análise do serviço para as pessoas envolvidas. As opções disponíveis são:

- **Notificar responsável**: quando assinalada, determina que uma notificação sobre o início da análise do serviço será enviada ao responsável por ela;
- **Notificar solicitante**: quando assinalada, determina que uma notificação sobre o início da análise do serviço será enviada ao solicitante;
- **Notificar gestor**: quando assinalada, determina que uma notificação sobre o início da análise do serviço será enviada ao gestor do processo.

**Prazo de conclusão (em horas)**
Tempo, em horas, dentro do qual essa atividade deve ser concluída. Após esse tempo, ela será considerada atrasada. Se configurado, o tempo é calculado levando em conta o expediente padrão cadastrado na plataforma e o momento em que o solicitante iniciou a solicitação.

**08.**Na etapa **Responsáveis**, em **Gestor do solicitante**, defina as configurações relacionadas a atividade de aprovação conforme o gestor do solicitante.

**1 - ANALISAR SOLICITAÇÃO DE FÉRIAS**

**Acompanhamento**
Envio de notificação sobre o início da atividade de complemento de informações para as pessoas envolvidas. As opções disponíveis são:

- **Notificar responsável**: quando assinalada, determina que uma notificação sobre o início da atividade de complemento de informações será enviada ao responsável por ela;
- **Notificar solicitante**: quando assinalada, determina que uma notificação sobre o início da atividade de complemento de informações será enviada ao solicitante;
- **Notificar gestor**: quando assinalada, determina que uma notificação sobre o início da atividade de complemento de informações será enviada ao gestor do processo.

**Prazo de conclusão (em horas)**
Tempo, em horas, dentro do qual essa atividade deve ser concluída. Após esse tempo, ela será considerada atrasada. Se configurado, o tempo é calculado levando em conta o expediente padrão cadastrado na plataforma e o momento em que o solicitante iniciou a solicitação.

**09.**Na etapa **Responsáveis**, em **RH**, defina em cada atividade os responsáveis e como o setor de RH deve realizar o atendimento da solicitação.

**01. ANALISAR VIABILIDADE DAS FÉRIAS**

**Quem poderá analisar a viabilidade das férias?**Pessoas que podem analisar a solicitação de férias. As opções disponíveis são:

- **Todos de um grupo específico**: quando selecionada, determina que a solicitação será enviada para um grupo específico e qualquer um do grupo pode aprovar ou reprovar a solicitação;
- **Todos de um papel específico**: quando selecionada, determina que a solicitação será enviada para um papel específico e qualquer um do papel pode aprovar ou reprovar a solicitação;
- **Uma pessoa de um grupo específico**: quando selecionada, determina que a solicitação será enviada para uma pessoa de um grupo específico e apenas ela pode aprovar ou reprovar a solicitação;
- **Uma pessoa de um papel específico**: quando selecionada, determina que a solicitação será enviada para uma pessoa de um papel específico e apenas ela aprovar ou reprovar a solicitação;
- **Uma pessoa específica**: quando selecionada, determina que apenas uma pessoa específica pode aprovar ou reprovar a solicitação;
- **Qualquer pessoa**: quando selecionada, determina que qualquer pessoa pode aprovar ou reprovar a solicitação;

**Grupo, papel, usuário ou atividade**
Grupo, papel, pessoa ou atividade da qual o executor será considerado para analisar a solicitação, de acordo com a opção que foi selecionada em **Quem poderá analisar a viabilidade das férias?**. 

**Acompanhamento**
Envio de notificação sobre o início da atividade de complemento de informações para as pessoas envolvidas. As opções disponíveis são:

- **Notificar responsável**: quando assinalada, determina que uma notificação sobre o início da atividade de complemento de informações será enviada ao responsável por ela;
- **Notificar solicitante**: quando assinalada, determina que uma notificação sobre o início da atividade de complemento de informações será enviada ao solicitante;
- **Notificar gestor**: quando assinalada, determina que uma notificação sobre o início da atividade de complemento de informações será enviada ao gestor do processo.

**Prazo de conclusão (em horas)**
Tempo, em horas, dentro do qual essa atividade deve ser concluída. Após esse tempo, ela será considerada atrasada. Se configurado, o tempo é calculado levando em conta o expediente padrão cadastrado na plataforma e o momento em que o solicitante iniciou a solicitação.

---

**2 - GERAR DOCUMENTAÇÃO NOS PRAZOS LEGAIS**

**Quem poderá gerar as documentações nos prazos legais?**Pessoas que podem verificar problema na solicitação do processo criado por esse *flow*. As opções disponíveis são:

- **Todos de um grupo específico**: quando selecionada, determina que a solicitação será enviada para um grupo específico e qualquer um do grupo pode verificar a solicitação;
- **Todos de um papel específico**: quando selecionada, determina que a solicitação será enviada para um papel específico e qualquer um do papel pode verificar a solicitação;
- **Uma pessoa de um grupo específico**: quando selecionada, determina que a solicitação será enviada para uma pessoa de um grupo específico e apenas ela pode verificar a solicitação;
- **Uma pessoa de um papel específico**: quando selecionada, determina que a solicitação será enviada para uma pessoa de um papel específico e apenas ela pode verificar a solicitação;
- **Uma pessoa específica**: quando selecionada, determina que apenas uma pessoa específica pode verificar a solicitação;
- **Qualquer pessoa**: quando selecionada, determina que apenas uma pessoa específica pode verificar a solicitação;
- **Atribuição por executor de atividade:** quando selecionada, determina que o executor de uma atividade anterior pode verificar a solicitação.

**Acompanhamento**Envio de notificação sobre o início da atividade de complemento de informações para as pessoas envolvidas. As opções disponíveis são:

- **Notificar responsável**: quando assinalada, determina que uma notificação sobre o início da atividade de complemento de informações será enviada ao responsável por ela;
- **Notificar solicitante**: quando assinalada, determina que uma notificação sobre o início da atividade de complemento de informações será enviada ao solicitante;
- **Notificar gestor**: quando assinalada, determina que uma notificação sobre o início da atividade de complemento de informações será enviada ao gestor do processo.

**Prazo de conclusão (em horas)**
Tempo, em horas, dentro do qual essa atividade deve ser concluída. Após esse tempo, ela será considerada atrasada. Se configurado, o tempo é calculado levando em conta o expediente padrão cadastrado na plataforma e o momento em que o solicitante iniciou a solicitação.

---

**3 - ENCAMINHAR DOCUMENTAÇÃO PARA ASSINATURA**

**Quem poderá encaminhar a documentação para assinatura?**Pessoas que podem verificar a solicitação criada por esse *flow*. As opções disponíveis são:

- **Todos de um grupo específico**: quando selecionada, determina que a solicitação será enviada para um grupo específico e qualquer um do grupo pode verificar a solicitação;
- **Todos de um papel específico**: quando selecionada, determina que a solicitação será enviada para um papel específico e qualquer um do papel pode verificar a solicitação;
- **Uma pessoa de um grupo específico**: quando selecionada, determina que a solicitação será enviada para uma pessoa de um grupo específico e apenas ela pode verificar a solicitação;
- **Uma pessoa de um papel específico**: quando selecionada, determina que a solicitação será enviada para uma pessoa de um papel específico e apenas ela pode verificar a solicitação;
- **Uma pessoa específica**: quando selecionada, determina que apenas uma pessoa específica pode verificar a solicitação;
- **Qualquer pessoa**: quando selecionada, determina que apenas uma pessoa específica pode verificar a solicitação;
- **Atribuição por executor de atividade:** quando selecionada, determina que o executor de uma atividade anterior pode verificar a solicitação.

**Acompanhamento**
Envio de notificação sobre o início da atividade de complemento de informações para as pessoas envolvidas. As opções disponíveis são:

- **Notificar responsável**: quando assinalada, determina que uma notificação sobre o início da atividade de complemento de informações será enviada ao responsável por ela;
- **Notificar solicitante**: quando assinalada, determina que uma notificação sobre o início da atividade de complemento de informações será enviada ao solicitante;
- **Notificar gestor**: quando assinalada, determina que uma notificação sobre o início da atividade de complemento de informações será enviada ao gestor do processo.

**Prazo de conclusão (em horas)**
Tempo, em horas, dentro do qual essa atividade deve ser concluída. Após esse tempo, ela será considerada atrasada. Se configurado, o tempo é calculado levando em conta o expediente padrão cadastrado na plataforma e o momento em que o solicitante iniciou a solicitação.

**10.**Ainda na etapa **Responsáveis**, em **Financeiro**, defina em cada atividade os responsáveis e como o setor financeiro deve realizar o atendimento da solicitação.

**01 - PROGRAMAR PAGAMENTO**

**Quem poderá programar o pagamento?**Pessoas que podem verificar a solicitação criada por esse *flow*. As opções disponíveis são:

- **Todos de um grupo específico**: quando selecionada, determina que a solicitação será enviada para um grupo específico e qualquer um do grupo pode verificar a solicitação;
- **Todos de um papel específico**: quando selecionada, determina que a solicitação será enviada para um papel específico e qualquer um do papel pode verificar a solicitação;
- **Uma pessoa de um grupo específico**: quando selecionada, determina que a solicitação será enviada para uma pessoa de um grupo específico e apenas ela pode verificar a solicitação;
- **Uma pessoa de um papel específico**: quando selecionada, determina que a solicitação será enviada para uma pessoa de um papel específico e apenas ela pode verificar a solicitação;
- **Uma pessoa específica**: quando selecionada, determina que apenas uma pessoa específica pode verificar a solicitação;
- **Qualquer pessoa**: quando selecionada, determina que apenas uma pessoa específica pode verificar a solicitação;

**Acompanhamento**
Envio de notificação sobre o início da atividade de complemento de informações para as pessoas envolvidas. As opções disponíveis são:

- **Notificar responsável**: quando assinalada, determina que uma notificação sobre o início da atividade de complemento de informações será enviada ao responsável por ela;
- **Notificar solicitante**: quando assinalada, determina que uma notificação sobre o início da atividade de complemento de informações será enviada ao solicitante;
- **Notificar gestor**: quando assinalada, determina que uma notificação sobre o início da atividade de complemento de informações será enviada ao gestor do processo.

**Prazo de conclusão (em horas)**
Tempo, em horas, dentro do qual essa atividade deve ser concluída. Após esse tempo, ela será considerada atrasada. Se configurado, o tempo é calculado levando em conta o expediente padrão cadastrado na plataforma e o momento em que o solicitante iniciou a solicitação.

---

**02 - LIBERAR PAGAMENTO**

**Quem poderá liberar o pagamento?**Pessoas que podem verificar a solicitação criada por esse *flow*. As opções disponíveis são:

- **Todos de um grupo específico**: quando selecionada, determina que a solicitação será enviada para um grupo específico e qualquer um do grupo pode verificar a solicitação;
- **Todos de um papel específico**: quando selecionada, determina que a solicitação será enviada para um papel específico e qualquer um do papel pode verificar a solicitação;
- **Uma pessoa de um grupo específico**: quando selecionada, determina que a solicitação será enviada para uma pessoa de um grupo específico e apenas ela pode verificar a solicitação;
- **Uma pessoa de um papel específico**: quando selecionada, determina que a solicitação será enviada para uma pessoa de um papel específico e apenas ela pode verificar a solicitação;
- **Uma pessoa específica**: quando selecionada, determina que apenas uma pessoa específica pode verificar a solicitação;
- **Qualquer pessoa**: quando selecionada, determina que apenas uma pessoa específica pode verificar a solicitação;
- **Atribuição por executor de atividade:** quando selecionada, determina que o executor de uma atividade anterior pode verificar a solicitação.

**Acompanhamento**
Envio de notificação sobre o início da atividade de complemento de informações para as pessoas envolvidas. As opções disponíveis são:

- **Notificar responsável**: quando assinalada, determina que uma notificação sobre o início da atividade de complemento de informações será enviada ao responsável por ela;
- **Notificar solicitante**: quando assinalada, determina que uma notificação sobre o início da atividade de complemento de informações será enviada ao solicitante;
- **Notificar gestor**: quando assinalada, determina que uma notificação sobre o início da atividade de complemento de informações será enviada ao gestor do processo.

**Prazo de conclusão (em horas)**
Tempo, em horas, dentro do qual essa atividade deve ser concluída. Após esse tempo, ela será considerada atrasada. Se configurado, o tempo é calculado levando em conta o expediente padrão cadastrado na plataforma e o momento em que o solicitante iniciou a solicitação.

**11**. Clique em **Avançar**.

**12.** Na etapa **Cadastros**, em **Centro de custo**, defina as informações de centro de custo e seus responsáveis.

**Código:**código do centro de custo de itens. Não é possível gerar códigos repetidos. Após ser salvo, ele não poderá ser editado ou excluído. 

**Nome do centro de custo:**definir um nome para o centro de custo.

**Gestor do centro de custo:**definir um gestor responsável pelo centro de custo.

Para adicionar um novo centro de custo, basta acionar o item **+ Adicionar novo centro de custo.**

**13.** Ainda na etapa **Cadastros**, em **Departamento**, defina o nome dos departamentos (compras, RH, TI) de sua empresa ou organização.

**Departamento**

Defina o nome do departamento (compras, RH, TI) de sua empresa ou organização.

Para adicionar um novo departamento, basta acionar o item **+ Adicionar novo departamento.**

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

**03.** Na área **Flows** do recurso Store, [localize](https://tdn.totvs.com/x/frOcEw#Plataforma%E2%9D%99ItensdaStore-Buscarsolu%C3%A7%C3%B5es) o *flow* Solicitação de férias.

**04.** Clique em **Configurar** – localizado no quadro do *flow*.

**05.** Altere as informações desejadas em cada etapa e avance até a última.

**06.** Clique em **Atualizar** ![](https://tdn.totvs.com/download/attachments/745756064/instalar-flow.png).

O processo será atualizado com as alterações efetuadas e sua versão será incrementada.

### Atualizar flow

---

**Quando houver atualizações disponíveis, o indicativo ATUALIZAR será exibido no flow para informar que ele pode ser atualizado.**

**01.** No menu lateral do TOTVS Fluig Plataforma, clique em **Painel de controle**.

**02.** No agrupador **Aplicativos**, clique em **Store**.

Por padrão, apenas administradores da plataforma tem acesso ao Painel de controle e, consequentemente ao recurso Store. Porém, como as permissões podem ser personalizadas, o acesso a esse recurso segue o que foi definido na sua plataforma.

**03.** No recurso **Store**, [localize](https://tdn.totvs.com/x/frOcEw#Plataforma%E2%9D%99ItensdaStore-Buscarsolu%C3%A7%C3%B5es) e clique no **flow Solicitação de férias**.

**04.** Clique em **Atualizar**.

Para pode utilizar as informações e melhorias da atualização liberada será necessário acessar o configurador do processo clicando em **Configurar **e passar pelas etapas **Geral**, **Responsável**, **Cadastros **e na etapa **Revisão **clicar no botão **Atualizar**.

Ao clicar em atualizar, uma nova versão do processo será criada com todas as correções e melhorias. As solicitações que estão em andamento continuarão com as configurações da versão antiga. Apenas as novas solicitações que forem abertas terão as configurações da nova versão do processo.

Ao realizar estes passos, as novidades e correções serão liberadas para o *flow *Solicitação de férias.

## Processo criado

---

Ao finalizar a instalação do *flow*, o processo criado é listado juntamente com os demais processos existentes na plataforma, tanto no recurso [Configurar processos](/pages/viewpage.action?pageId=233763153) quanto no [Iniciar solicitações](/pages/viewpage.action?pageId=233763157).

As características do processo criado por esse *flow* são detalhadas a seguir.

### Diagrama

---

O diagrama define como o processo funciona, quais atividades o compõem e qual o caminho que a solicitação segue até a sua conclusão.

Este é o diagrama do *flow* de solicitação de férias:

![](/download/attachments/759952674/diagrama%20solicita%C3%A7%C3%A3o%20de%20f%C3%A9rias.png?version=1&modificationDate=1687383156483&api=v2)

### Atividades

---

As atividades que compõem o processo são:

INÍCIO

Solicitante inicia o processo, preenche as informações necessárias e envia a solicitação de férias.

ANALISAR SOLICITAÇÃO DE FÉRIAS

O gestor do solicitante entende a demanda e pode tomar ações no processo.

Se solicitado ajuste nas informações do solicitante, avança para a atividade de **Complementar dados.**

Se aprovado, avança para a atividade "**Aprovar viabilidade das férias**".

Se reprovado, a solicitação é cancelada.

COMPLEMENTAR DADOS

O solicitante complementa os dados, ou altera, de acordo com a orientação do gestor.

A solicitação pode ser enviada para aprovação ou ser descartada.

Ao aprovar, avança para a atividade de "**Aprovar solicitação de férias**". Se descartado, o processo é cancelado.

APROVAR VIABILIDADE DAS FÉRIAS

O RH verifica se o solicitante é elegível ao período de férias desejado, podendo aprovar ou reprovar a solicitação de férias.

Ao reprovar,  avança para a atividade de "**Cancelar**", notificando os participantes. Se aprovado, avança para a atividade "**Programar pagamento**".

PROGRAMAR PAGAMENTO

O responsável faz a programação do pagamento de todos impostos e encargos envolvidos no processo de férias do colaborador.

Ao avançar, o processo avança para a atividade "**Gerar documentação nos prazos legais**".

GERAR DOCUMENTAÇÃO NOS PRAZOS LEGAIS

O responsável deve gerar, dentro dos prazos que determinam a lei e o regime de contratação do colaborador, toda a documentação necessária ao processo.

Ao avançar, o processo avança para a atividade "**Encaminhar documentação para assinatura**".

ENCAMINHAR DOCUMENTAÇÃO PARA ASSINATURA

O responsável deve encaminhar a documentação gerada ao colaborador solicitante.

Ao avançar, o processo avança para a atividade "**Assinar documentação**".

ASSINAR DOCUMENTAÇÃO

O colaborador solicitante deve assinar a documentação anexada ao processo e anexá-la novamente, devidamente assinada.

Ao avançar, o processo avança para a atividade "**Liberar pagamento**".

LIBERAR PAGAMENTO

O responsável pelo pagamento, confirma que o pagamento foi efetuado e finaliza o processo

Ao avançar, o processo avança para a atividade "**Finalizar**".

FIM

O processo é finalizado.

### Restrições

---

O *flow* de solicitação de férias possui as seguintes restrições:

- Não permite integrações com outros sistemas;

- Não é customizável.

			![](https://tdn.totvs.com/download/attachments/563436139/importante.png)

**IMPORTANTE!**
Como esse *flow* se torna um processo igual a qualquer outro dentro da plataforma, é possível alterá-lo ou até mesmo excluir seus artefatos. Porém, se for feita qualquer alteração no processo, diagrama, formulário ou outro artefato, o direito ao suporte padrão é automaticamente perdido.

## Abrir solicitação

---

É necessário que o *flow* Solicitação de férias esteja instalado e devidamente parametrizado para abrir uma solicitação. Os usuários que podem abrir solicitação são os que foram definidos na configuração do *flow*, no campo "Quem poderá abrir uma solicitação?".

        Your browser does not support the HTML5 video element

**01.** No menu lateral do TOTVS Fluig Plataforma, clique em **Processos**.

**02.** Clique em **Iniciar solicitações**.

**03.** Localize e clique no processo de abertura de solicitação de férias.

O nome do processo e a categoria na qual ele se encontra são os que foram definidos durante a instalação e configuração.

**04.** Em **Dados gerais**, preencha as informações solicitadas.

**Usuário de abertura**Usuário que está autenticado na plataforma. Não é possível alterá-lo.****

**Data**
Data na qual a solicitação está sendo aberta. Não é possível alterá-la.

**Usuário solicitante**
Nome do usuário para o qual a solicitação está sendo feita. O usuário solicitante pode ser diferente do usuário de abertura, visto que o usuário de abertura pode estar abrindo uma solicitação em nome de outra pessoa ou solicitando algo para outra pessoa – que pode ou não ter acesso à plataforma – e não necessariamente para ele.

**E-mail do solicitante**
*E-mail* do usuário para o qual a solicitação está sendo feita. Pode ser diferente do *e-mail* do usuário de abertura, visto que o usuário de abertura pode estar abrindo uma solicitação em nome de outra pessoa ou solicitando algo para outra pessoa – que pode ou não ter acesso à plataforma – e não necessariamente para ele.

**Gestor do solicitante**Busque pelo gestor da área à qual o usuário solicitante pertence.

**E-mail do gestor**
*E-mail* do gestor da área à qual o usuário solicitante pertence. Ele é preenchido automaticamente ao selecionar o gestor.

**Centro de custo**Busque pelo número ou nome do centro de custo do usuário solicitante.

**Departamento**Busque pelo nome do departamento do usuário solicitante.

**05.** Em **Dados das férias**, preencha as informações relacionadas as férias.

**Abono de férias?**Informe se haverá abono de férias.

**Dias de abono**A quantidade de dias de abono serão preenchidos automaticamente, de acordo com a resposta em "**Abono de férias?**".

**Adiantamento 13°?**Informe se haverá adiantamento do 13° salário.

**Data início**Informa a data de início das férias. Não sendo possível preencher com datas anteriores a data atual.

**Quantidade de dias**O cálculo da quantidade de dias é feito com base na quantidade de dias disponíveis e dias de abono, caso houver.****

**Data fim**A inclusão da data fim é preenchida automaticamente, com base na quantidade de dias já calculados.

**06.** Se necessário, acesse as abas **Histórico** e **Anexos** – localizadas na parte superior – para complementar a solicitação com comentários ou documentos.

**07.** Clique em **Enviar**.

Sua solicitação será aberta e pode ser acompanhada pela [Central de tarefas](/pages/viewpage.action?pageId=233762817) → [Minhas solicitações](/pages/viewpage.action?pageId=233763398).


<!-- anchors: Flows|Solicitaçãodeférias-Falandodesolicitaçãodeférias..., Flows|Solicitaçãodeférias-Comoadquirir, Flows|Solicitaçãodeférias-Instalação, Flows|Solicitaçãodeférias-Requisitosparauso, Flows|Solicitaçãodeférias-Parametrizações, Flows|Solicitaçãodeférias-Instalareconfigurarflowinstalar, Flows|Solicitaçãodeférias-Editarflow, Flows|Solicitaçãodeférias-Atualizarflow, Flows|Solicitaçãodeférias-Processocriado, Flows|Solicitaçãodeférias-Diagrama, Flows|Solicitaçãodeférias-Atividades, Flows|Solicitaçãodeférias-Restrições, Flows|Solicitaçãodeférias-Abrirsolicitação -->
