---
title: "Plataforma ❙ Configuração do processo"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=263784090"
scraped_at: "2026-03-09T03:08:18.950Z"
depth: 1
anchors: 2
child_links: 51
---

# Plataforma ❙ Configuração do processo

Consulte a documentação correta:

Esta documentação refere-se ao editor de processos atual da plataforma. Caso esteja utilizando o novo editor de processos, acesse a documentação disponível em [Plataforma | Editor de processo](https://tdn.totvs.com/x/DUxGMw). 

# Falando de configuração do processo...

---

Essa janela permite definir todas as propriedades disponíveis para um processo, relacionar um formulário a ele, modelar o seu diagrama configurando as atividades e os fluxos, exportá-lo e, também, liberá-lo para utilização.

![](/download/attachments/263784090/configura%C3%A7%C3%A3o%20do%20processo.PNG?version=2&modificationDate=1648556623970&api=v2)

Compatibilidade no modo escuro

Este recurso ainda não é compatível com o modo escuro lançado na atualização [Voyager 2.0](https://tdn.totvs.com/pages/viewpage.action?pageId=878935272#Atualiza%C3%A7%C3%A3oVoyager(2.0)-Oqueaindan%C3%A3oest%C3%A1dispon%C3%ADvelnomodoescuro?). 

## Configuração do processo

---

**01.**Depois de acionar **Salvar e editar** na janela de inclusão de processos, acionar **Propriedades**, localizado na barra lateral esquerda da janela.

**02.** Na aba **Geral**, inserir as informações solicitadas.

As informações solicitadas são:

**Descrição**
Descrição do processo. É possível editar a descrição previamente inserida para o processo.

**Instruções**Instruções que auxiliem o entendimento do processo de quem vai utilizá-lo. Ao preparar as instruções de uma atividade ou de um processo, é comum precisar buscar informações de outros arquivos ou sites. A plataforma possui o conceito de *hiperlink* que permite incluir acessos para documentos da plataforma e também para endereços na Internet por intermédio de documentos externos, evitando a replicação de informações e facilitando a navegação. Para isso, é necessário inserir a *tag* [WD:999999], onde 999999 deve ser substituído pelo código do documento na plataforma.

**Tags**Rótulos atribuídos ao processo para facilitar a busca posteriormente. As *tags* funcionam como palavras-chave e permitem etiquetar o processo de maneira mais informal e pessoal. É possível encontrar o processo por navegação ou na busca. Inserir com ou sem o caractere "#" para ativar o auto complete das *tags* no campo de *tags*. O auto complete exibe uma lista suspensa com as cinco *tags* mais utilizadas a partir dos caracteres digitados depois do caractere "#". Para inserir uma *tag* a partir do auto complete, basta selecioná-la e pressionar **Enter**. Para incluir uma nova *tag*, basta digitá-la e pressionar **Espaço**.

**Ativo**
Quando assinalado, determina o processo está ativo na plataforma. Nesse caso, a última versão liberada do processo estará disponível para utilização em [Iniciar solicitações](/pages/viewpage.action?pageId=233763157). Caso contrário, o processo não é exibido nessa área.

**Público**
Quando assinalado, determina que as solicitações desse processo podem ser consultadas por qualquer usuário da plataforma. Caso contrário, somente pelo solicitante, os usuários que participaram do processo ou gestores do processo. podem efetuar consultas nas solicitações desse processo.

**Categoria**
Categoria à qual o processo será relacionado. Esse campo é opcional e serve para agrupar processos em categorias. Dessa forma, em Iniciar solicitações os processos são agrupados em pastas e subpastas que representam suas categorias e subcategorias, facilitando a sua localização pelos usuários. Para incluir uma subcategoria, basta apenas inserir a categoria, um ponto e a subcategoria. **Exemplo**: categoria RH e subcategoria Benefícios: **RH.Benefícios**.

**Complementar solicitações**
Quando habilitado, determina que é possível incluir complementos em forma de comentários ou anexos em solicitações desse processo. Quando o recurso está habilitado, o botão correspondente é identificado com **Sim**. Os complementos em solicitações permitem que um usuário adicione comentários ou anexos em uma solicitação aberta sendo ou não responsável pela tarefa corrente com a finalidade de evitar comunicação por outros meios que não ficarão registrados no histórico do processo.

*Quando desabilitado, somente usuários responsável da tarefa podem incluir comentários.

**Disponível para mobile**
Quando habilitado, determina que o processo pode ser executado no aplicativo mobile da plataforma. Ao ser habilitado, o botão correspondente é identificado como **Sim** e fica preenchido na cor verde. Quando desabilitado, determina que não é possível utilizar o processo no aplicativo da plataforma. Ao ser desabilitado, o botão correspondente é identificado como **Não**.

**Volume**
Volume no qual serão armazenados os arquivos, como anexos, adicionados às solicitações do processo. São exibidos para seleção apenas os volumes do tipo *Default* e Anexo *workflow*.

**Gestor**
Mecanismo utilizado para atribuição de um gestor para o processo. São exibidos apenas os tipos de mecanismo de atribuição que podem ser utilizados para definir o gestor do processo, sendo que ele será definido com base no mecanismo escolhido. O gestor do processo tem o poder de representar qualquer um dos demais usuários envolvidos no fluxo. Quando o gestor do processo realizar algum tipo de movimentação, em nome de um outro usuário, um informativo a esse respeito é adicionado ao histórico das movimentações de processo. O gestor do processo também pode receber notificações de acompanhamento da atividade. As opções disponíveis são:

- **Atribuição por associação**: quando selecionada, determina que os gestores do processo serão os usuários resultantes da junção de grupo, papel e/ou usuário específico;
- **Atribuição por campo de formulário**: quando selecionada, permiti escolher um campo do formulário que irá definir o prazo da tarefa que se está alterando a propriedade;
- **Atribuição por executor de atividade**: quando selecionada, determina que a atividade será enviada para o executor de uma determinada atividade anterior do processo;

A partir de agora, sempre que editar as propriedades de um processo e alterar o Gestor, o cache atual será limpo e um novo cache de atualização será criado no Agendador de tarefas. Com isso, as atualizações serão aplicadas em blocos de forma que não sobrecarregue o servidor. Assim, em pouquíssimo tempo a central de tarefas e a consulta de solicitações serão atualizadas.
Os mecanismos que geram o cache são os do tipo Atribuição por associação, Atribuição por campo de formulário e Atribuição por executor de atividade.
Para maior compreensão, acesse o release [Atualização Liquid (1.6.5)](https://tdn.totvs.com/x/4YPCF) e veja o vídeo explicativo.

- **Atribuição por grupo**: quando selecionada, determina que os gestores do processo serão todos os usuários que pertencem a um grupo;
- **Atribuição por papel**: quando selecionada, determina que os gestores do processo serão todos os usuários que pertencem a um papel;
- **Atribuição por usuário**: quando selecionada, determina que o gestor do processo será um usuário específico.

**Expediente**Expediente cadastrado na plataforma ao qual o processo será relacionado. O [expediente](/pages/viewpage.action?pageId=233766840) é utilizado para os cálculos de prazos e atrasos das atividades de processo. Por exemplo, se o expediente informado foi configurado como sendo de segunda à sexta das 8:00h às 18:00h e existe uma atividade com duração de 1 hora que foi criada às 17:30h de uma terça, seu prazo de conclusão será quarta às 8:30h em decorrência do Expediente. O expediente selecionado será utilizado para todas as atividades do processo em questão, exceto as atividades que possuem expediente próprio configurado.

**Prazo de expiração**
Prazo que indica que no tempo configurado pelo usuário, a solicitação ficará disponível até expirar. Após expirado, será enviada uma notificação informando que o prazo foi atingido.

**Prazo de aviso**
Prazo que indica que no tempo configurado pelo usuário, será emitida uma notificação informando o status da solicitação até atingir o prazo de expiração.

A configuração do Prazo de expiração e Prazo de aviso se referem ao controle do SLA.

**Exemplo**:

Ao configurar um processo com Prazo de expiração para daqui a 5 horas, deve-se preencher da seguinte forma: 005:00. Na configuração do Prazo de aviso, se desejar receber uma notificação 10 minutos antes da solicitação expirar, deve-se preencher da seguinte forma: 000:10. Isso garantirá que somente no período definido no Prazo de aviso, as notificações serão recebidas. Ou seja, até as 04 horas e 50 minutos a solicitação ficará em aberto, após isso, entrará no período "Em alerta" e receberá as notificações (conforme configurado no Agendador de tarefas) até atingir o prazo de 10 minutos. Ao chegar em 5 horas, uma única notificação será enviada, informando que a solicitação expirou e passará para o status "Expirado".

**03.** Se habilitado o uso de complementos, acionar **Configurar** – localizado em Complementar solicitações – para definir quem poderá complementar solicitações.

**04.** Na aba **Geral** da janela exibida, definir quais usuários poderão incluir complementos em solicitações abertas.

As opções disponíveis são:

**Solicitante, responsáveis por atividade e gestor**
Quando selecionada, determina que o usuário que abriu a solicitação, os responsáveis por atividades e o gestor do processo podem interagir no processo por meio de complementos.

**Todos os participantes do processo e gestor**
Quando selecionada, determina que todos os usuários que participaram em algum momento podem interagir no processo por meio de complementos. **Exemplo:** o usuário A responsável por uma determinada tarefa transferiu ela para o usuário B. Mesmo não sendo mais responsável por nenhuma tarefa no processo, o usuário A ainda pode incluir complementos, pois em um determinado momento foi um participante do processo.

**Todos os usuários (somente quando o processo for público)**
Quando selecionada, determina que qualquer usuário da plataforma pode interagir no processo por meio de complementos. Essa opção somente é habilitada quando o processo é público.

**05.** Acionar a aba **Acompanhamento** e definir quem deve receber notificações quando um complemento é adicionado à solicitação.

As opções disponíveis são:

**Notifica responsável**
Quando assinalada, determina que os responsáveis por atividades do processo serão notificados;

**Notifica requisitante**
Quando assinalada, determina que o requisitante, ou seja, quem abriu a solicitação será notificado.

**Notifica gestor**
Quando assinalada, determina que o gestor do processo será notificado.

**06.** Acionar a aba **Acompanhamento** e definir quem deve receber notificações quando um complemento é adicionado à solicitação.

**07.** Acionar **Configurar** para configurar o mecanismo de atribuição de gestor selecionado para o processo.

Informações sobre a configuração de mecanismos de atribuição podem ser obtidas em [Configuração de mecanismos de atribuição](/pages/viewpage.action?pageId=265783517).

**08.** Acionar a aba **Formulário** para relacionar um formulário já existente e publicado na navegação de documentos ao processo.****

**09.** Definir as informações solicitadas para relacionar um formulário ao processo.

**Formulário**
Formulário que será relacionado ao processo. Os formulários são utilizados para que os usuários possam, durante o andamento das solicitações do processo, informar ou consultar dados de uma maneira simples e estruturada. São exibidos os formulários já existentes na navegação de documentos. Para criar um formulário específico para esse processo, é necessário configurá-lo a partir da opção **Formulário**, localizado na barra lateral esquerda da janela. Nesse caso, não deve ser selecionado nenhum formulário nesse campo.

**Registro único de formulário**
Quando assinalado, determina que o registro de formulário criará uma versão a cada alteração feita na solicitação, como acontece normalmente em formulários não vinculados a processos. 
Ao ativar a opção "Registro único de formulário", as alterações no registro de formulário não criam uma nova versão, sendo sempre sobrescritas.

**Registros de formulário herdam segurança**
Quando assinalado, o permite que outros usuários possam consultar os registros de formulário, mesmo que não tenham participado do processo, caso seja configurada esta permissão no formulário.

**10.** Acionar a aba **Versão**e definir as informações solicitadas.

**Descrição**
Descrição da versão do processo.

**Atualiza anexo**
Quando assinalado, determina que todos os anexos de solicitação que forem atualizados e versionados na plataforma serão atualizados automaticamente para a última versão na solicitação. Caso contrário, o anexo permanece com a versão na qual foi incluído na solicitação.

**Confirma senha**
Quando assinalado, determina que todas as atividades do processo que forem executadas por usuários solicitarão a confirmação de senha do usuário. O recurso de confirmação de senha tem por objetivo reafirmar a presença de determinado usuário na execução de uma atividade do processo.

**11.** Acionar a aba **Segurança anexos** e definir os critérios de segurança para os anexos do processo.

**Controlar segurança**
Quando selecionado, determina que haverá controle na visualização e manipulação dos documentos anexados ao processo, controle este que é definido nessa aba.

**Não controlar segurança**
Quando selecionado, determina que não haverá controle dos documentos anexados ao processo.

**Mecanismo**
Mecanismo utilizado para definir os critérios de segurança dos documentos anexados ao processo. As opções disponíveis são:

- **Atribuição por associação**: quando selecionada, determina que os critérios de segurança dos documentos anexados ao processo serão atribuídos para os usuários resultantes da junção de grupo, papel e/ou usuário específico;
- **Atribuição por campo de formulário**: quando selecionada, determina que os critérios de segurança dos documentos anexados ao processo serão atribuídos para o usuário que é informado em um campo do formulário relacionado ao processo;
- **Atribuição por executor da atividade**: quando selecionada, determina que os critérios de segurança dos documentos anexados ao processo serão atribuídos para o executor de uma determina atividade do processo;
- **Atribuição por grupos**: quando selecionada, determina que os critérios de segurança dos documentos anexados ao processo serão atribuídos para os usuários que pertencem a um grupo de usuários;
- **Atribuição por grupos do colaborador**: quando selecionada, determina que os critérios de segurança dos documentos anexados ao processo serão atribuídos para os usuários que pertencem aos mesmos grupos do usuário autenticado ou do usuário que iniciou a solicitação, conforme for configurado no mecanismo;
- **Atribuição por papel**: quando selecionada, determina que os critérios de segurança dos documentos anexados ao processo serão atribuídos para os usuários que pertencem a um papel;
- **Atribuição por todos os usuários**: quando selecionada, determina que os critérios de segurança dos documentos anexados ao processo serão atribuídos para todos os usuários ativos na plataforma;
- **Atribuição por usuário**: quando selecionada, determina que os critérios de segurança dos documentos anexados ao processo serão atribuídos para um usuário específico.

**12.** Depois de selecionar o mecanismo de atribuição desejado, acionar **Incluir**.

Para excluir um mecanismo de atribuição incluído, basta selecioná-lo e acionar **Remover**.

**13.** Selecionar o mecanismo e acionar **Editar mecanismo** para configurá-lo.

Informações sobre a configuração de mecanismos de atribuição podem ser obtidas em [Configuração de mecanismos de atribuição](/pages/viewpage.action?pageId=265783517).

**14.** Depois de configurar o mecanismo de atribuição selecionado, definir os critérios de segurança dos documentos anexados ao processo que serão atribuídos a ele.

As opções disponíveis são:

**Publicar anexos**
Quando assinalada, determina que os usuários resultantes da configuração do mecanismo de atribuição podem anexar documentos em solicitações do processo.

**Ver anexos outros usuários**
Quando assinalada, determina que os usuários resultantes da configuração do mecanismo de atribuição podem visualizar os documentos anexados por outros usuários nas solicitações do processo.

**Editar anexos próprios**
Quando assinalada, determina que os usuários resultantes da configuração do mecanismo de atribuição podem editar os documentos que eles anexaram nas solicitações do processo.

**Editar anexos outros usuários**
Quando assinalada, determina que os usuários resultantes da configuração do mecanismo de atribuição podem editar os documentos anexados por outros usuários nas solicitações do processo.

**Remover anexos próprios**
Quando assinalada, determina que os usuários resultantes da configuração do mecanismo de atribuição podem remover os documentos que eles anexaram nas solicitações do processo.

**Remover anexos outros usuários**
Quando assinalada, determina que os usuários resultantes da configuração do mecanismo de atribuição podem remover os documentos anexados por outros usuários nas solicitações do processo.

**15.** Acionar a aba **Avançado** para relacionar propriedades avançadas ao processo.

As propriedades avançadas são utilizadas para prover dados que podem ser requisitados durante os eventos do processo.

**16.** Na janela exibida, acionar **Adicionar**.

**17.** Inserir as informações solicitadas.

As informações solicitadas são:

**Nome**
Nome que será atribuído à propriedade avançada.

**Valor**
Valor que será atribuído à propriedade avançada.

**18.** Acionar **Confirmar** na janela de inclusão de propriedades avançadas.

Para editar ou excluir uma propriedade avançada, basta selecioná-la e acionar **Editar** ou **Remover**.

**19.** Depois de definir todas as propriedades desejadas para o processo nas abas disponíveis, acionar **Confirmar** para salvá-las.

**20.** Acionar **Formulário**, localizado na barra lateral esquerda da janela, para criar e configurar um formulário específico para esse processo.

Somente é possível criar e configurar um formulário a partir dessa opção quando não é selecionado nenhum formulário já publicado na navegação de documentos no campo Formulário, localizado na aba **Formulário** nas propriedades do processo.

Ao editar um processo, somente é possível editar o formulário quando ele foi criado a partir dessa opção.

**21.** Inserir as informações solicitadas para o formulário.

As informações solicitadas são:

**Título**
Título do formulário que será relacionado ao processo.

**Descrição**
Descrição do formulário que será relacionada ao processo.

**Pasta destino**
Pasta da navegação de documentos na qual o formulário será publicado. Não é permitido alterar a pasta destino do formulário ao editá-lo.

**22.** Acionar **Criar formulário**.

Ao acionar essa opção é exibida a janela na qual é possível criar e configurar um formulário. Mais informações podem ser obtidas em [Configurar formulário](/pages/viewpage.action?pageId=233765763).

**23.** Depois de criar e configurar o formulário que será relacionado ao processo, modelar o fluxo do processo utilizando os itens disponíveis na barra lateral esquerda da janela.

Os itens disponíveis para a modelagem do fluxo do processo são:

- Início;
- Fim;
- Atividade;
- Automático;
- Documento
- Anotação;
- *Swimlane*;
- Subprocesso;
- Subprocesso Ad Hoc;
- *Fork*;
- *Join*.

Informações detalhadas sobre a configuração de cada um dos itens podem ser obtidas em [Configurar atividades e fluxos](/pages/viewpage.action?pageId=233763197).

**24.** Depois de definir as propriedades, o formulário e o diagrama do processo, acionar **Salvar** – para apenas salvar as informações definidas para o processo sem liberá-lo para utilização – ou **Liberar versão** – para salvar as informações e liberar essa versão do processo para utilização.

Mais detalhes sobre a opção de liberação do processo podem ser obtidos no caminho Liberar versão de processo em [Configurar processos](/pages/viewpage.action?pageId=233763153).

Fique atento!

Esta documentação é válida a partir da **atualização 1.6.5 - Liquid**. Se você utiliza uma atualização anterior, ela pode conter informações diferentes das quais você vê na sua plataforma.


<!-- anchors: Plataforma❙Configuraçãodoprocesso-Falandodeconfiguraçãodoprocesso..., Plataforma❙Configuraçãodoprocesso-Configuraçãodoprocesso -->
