---
title: "Atualização 1.5.4"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=208340369"
scraped_at: "2026-03-09T03:17:08.214Z"
depth: 2
anchors: 18
child_links: 52
---

# Atualização 1.5.4

![](/download/attachments/181966041/espanhol.png?version=2&modificationDate=1422631676000&api=v2) ¿Habla Español? Haga [clic aquí](https://tdn.totvs.com/pages/viewpage.action?pageId=215484235) para ver el Release Notes en Español.

![](/download/attachments/181966041/ingles.png?version=2&modificationDate=1422631693000&api=v2) Do you speak English? [Click here](https://tdn.totvs.com/display/fluigeng/Update+1.5.4) to view the Release Notes in English.

Confira abaixo as novidades na atualização 1.5.4 do fluig:

## Arquitetura

**Quer o fluig direcionado para o seu negócio? Deixe o Assistente de implantação rápida ajudar você!**

Para facilitar a implantação e deixar o fluig com a cara da sua empresa e com componentes direcionados ao seu segmento é simples. Basta deixar o Assistente de Implantação Rápida lhe direcionar. Ele sugere uma série de recursos – tais como componentes, processos, páginas dentre outros – baseados no seu negócio, permitindo que você instale o fluig já com recursos adaptados ao perfil da sua empresa. Além disso, ele permite configurar o tema do fluig para deixa-lo com a aparência da sua empresa, alterando cores e logotipo.

Como acessar?

O Assistente de implantação rápida é exclusivo para novas implementações do fluig.

Para se beneficiar das sugestões do assistente de implantação rápida, é necessário assinalar a opção **Utilizar assistente de Implantação rápida no primeiro acesso** no cadastro da empresa.

Importante!

Recurso disponível da atualização 1.5.4 até a 1.6.1 da plataforma fluig.

- [Criação da empresa](#)
- [Assistente - Início](#)
- [Assistente - Sugestões](#)
- [Assistente - Personalização do tema](#)

![](http://tdn.totvs.com/download/attachments/208340369/FLUIGINV-1170-1.png?version=2&modificationDate=1448476710000&api=v2)

![](http://tdn.totvs.com/download/attachments/208340369/FLUIGINV-1170-2.png?version=3&modificationDate=1448480198000&api=v2)

![](http://tdn.totvs.com/download/attachments/208340369/--FLUIGINV-1170-3.png?version=1&modificationDate=1448480261000&api=v2)

![](http://tdn.totvs.com/download/attachments/208340369/FLUIGINV-1170-4.png?version=2&modificationDate=1448476968000&api=v2)

Veja na prática:

**Alerta na criação de usuários**

Agora, ao preencher os campos *Login* e Matrícula – no Cadastro de usuários – é emitido um alerta solicitando que sejam preenchidos com atenção, pois esses campos não podem ser alterados posteriormente.

![](http://tdn.totvs.com/download/attachments/208340369/SOCIALECMSUST-5290.PNG?version=2&modificationDate=1448466300000&api=v2)

**Autenticação mais rápida**

O fluxo de autenticação quando há integração com o fluig Identity foi otimizado, reduzindo a quantidade de redirecionamento, o que permite que seu acesso ao fluig seja mais rápido.

**Notificações instantâneas (realtime) com alta disponibilidade**

Para deixar seu fluig com alta disponibilidade, a parte que entrega notificações instantaneamente está disponível para configuração em *Load balancing*. Se desejar colocar esse componente, habilite o *Realtime* em *scale* em conjunto com o *redis* no arquivo de configuração, possibilitando a comunicação entre múltiplas instâncias. Assim, o processamento fica distribuído, diminuindo o gargalo e consequentemente melhorando a resposta ao usuário. E em caso de queda de um servidor, o *Realtime* continua funcionando em outro servidor de forma transparente.

Também é possível interromper, caso não estejam sendo utilizados, os serviços do *chat* do nodejs no arquivo de configuração, diminuindo assim consumo de recursos desnecessários.

Se interessou?

Acesse [Configurando o fluig *Realtime* para execução em *Load balancing*](https://tdn.totvs.com/x/gq-5Cw) e [Configurações para o funcionamento do *chat*](https://tdn.totvs.com/x/hwFGCQ) para conferir mais detalhes a respeito.

## ECM

**Plugin do Outlook remodelado!**

Remodelamos o *plugin* do Outlook para torná-lo mais moderno. Os recursos continuam os mesmos que você já conhece:

- *Drag and drop* de arquivos direto da área de trabalho;
- *Drag and drop* de *e-mails* e pasta de *e-mails*;
- Pendências da Central de Tarefas com:

Tarefas a concluir;Tarefas em consenso;Minhas solicitações;Meus documentos;Documentos a aprovas;Documentos em consenso;Documentos em *checkout*;Tarefas em *pool* para grupos;Tarefas em *pool* para papéis.

Mais informações

Confira os detalhes em: [Plugin do fluig para Microsoft Outlook](/display/fluig/Plugin+do+fluig+para+Microsoft+Outlook).

Atenção!

Para utilizar o novo *plugin* do fluig para MS Outlook, primeiramente certifique-se que o antigo *plugin* esteja desinstalado.

- [Plugin Outlook](#)
- [Plugin Outlook - Documentos](#)
- [Plugin Outlook - Central de tarefas](#)

![](http://tdn.totvs.com/download/attachments/208340369/01.png?version=1&modificationDate=1448571060000&api=v2)

![](http://tdn.totvs.com/download/attachments/208340369/02.png?version=1&modificationDate=1448571132000&api=v2)

![](http://tdn.totvs.com/download/attachments/208340369/06.png?version=1&modificationDate=1448571287000&api=v2)

## Mobile

**Escolha o que ver primeiro**

Para você ficar em dia com suas pendências, a tela inicial do fluig Mobile é a Central de Tarefas. Mas, agora, você pode trocá-la de forma simples e rápida. [Clique aqui](https://tdn.totvs.com/x/DJHbCw) e veja como é fácil.

## Social

**Faça reuniões com videoconferência!**

Gostaria de fazer uma reunião com videoconferência? Agora é possível! Ao iniciar uma sessão, é possível utilizar a câmera do seu equipamento durante a reunião, habilitando-a no ícone presente na barra superior da janela.

![](/download/attachments/208340369/SOCIALECMSUST-4931.PNG?version=2&modificationDate=1449500184000&api=v2)

**Iniciou uma reunião e esqueceu de alguém? Convide-o durante a reunião**

Você iniciou uma reunião e quer convidar outros participantes além dos já convocados? Simples! Agora você pode convidar pessoas para participar de reuniões a qualquer momento, mesmo quando a reunião já foi iniciada. Aproveita e dá uma olhada como ficou!

- [Convidando participantes para a reunião iniciada](#)
- [Participantes adicionados à reunião](#)

![](/download/attachments/208340369/FLUIGINV-4060-1.png?version=2&modificationDate=1449500232000&api=v2)

![](/download/attachments/208340369/FLUIGINV-4060-2.png?version=2&modificationDate=1449500266000&api=v2)

Obsevação

Para reuniões iniciadas a partir de um documento não é permitido convidar participantes após o início da reunião.

![](/download/attachments/208340369/FLUIGINV-4060-3.png?version=2&modificationDate=1449500302000&api=v2)

Adicione fluigers em reuniões que estão em andamento:

****

**Mais flexibilidade em desenvolvimentos sobre a plataforma**

Nossos serviços RESTs para social ficaram ainda mais robustos. Agora você pode, além do tradicional *alias*, enviar a matrícula, o código externo ou o identificador do Identity para realizar as ações ou buscar dados de um usuário. É ainda mais flexibilidade para suas integrações e desenvolvimentos.

Saiba mais

Veja a atualização do método em [/social/user/{genericId}](https://api.fluig.com/resource_UserServiceRest.html#path__social_user_-genericId-.html).

Exemplos de uso

****

  **Matrícula** Expand source

[expand source](#)[?](#)

| `function beforeDocumentPublisher()````{ var FLUIG_HOST ="http://SEU_FLUIG";` ```// OAuth variables````var OAUTH_APP_PUBLIC = "OAUTH_APP_PUBLIC";````var OAUTH_APP_PRIVATE = "OAUTH_APP_PRIVATE";````var OAUTH_USER_APP_PUBLIC = "OAUTH_USER_APP_PUBLIC";````var OAUTH_USER_APP_SECRET = "OAUTH_USER_APP_SECRET";` ```//matrícula````var user = getValue("WKUser");````var consumer = oauthUtil.getGenericConsumer(OAUTH_APP_PUBLIC, OAUTH_APP_PRIVATE, OAUTH_USER_APP_PUBLIC, AUTH_USER_APP_SECRET);````var data = consumer.post(FLUIG_HOST+"/api/public/social/user/"+user,jsonString);}` |
| --- |

  **Alias** Expand source

[expand source](#)[?](#)

| `function afterSocialLike(companyId, like)````{ var FLUIG_HOST ="http://SEU_FLUIG";``` ```// OAuth variables````var OAUTH_APP_PUBLIC = "OAUTH_APP_PUBLIC";````var OAUTH_APP_PRIVATE = "OAUTH_APP_PRIVATE";````var OAUTH_USER_APP_PUBLIC = "OAUTH_USER_APP_PUBLIC";````var OAUTH_USER_APP_SECRET = "OAUTH_USER_APP_SECRET";` ```//alias````var user = like.getUser();````var consumer = oauthUtil.getGenericConsumer(OAUTH_APP_PUBLIC, OAUTH_APP_PRIVATE, OAUTH_USER_APP_PUBLIC, OAUTH_USER_APP_SECRET);````var data = consumer.post(FLUIG_HOST+"/api/public/social/user/"+user,jsonString);}` |
| --- |

**Nova forma de gerenciar permissões em comunidades**

Você deseja ter mais controle sobre a forma como as pessoas utilizam as comunidades de sua empresa? Atendendo a pedidos, turbinamos as permissões para comunidades. Agora você pode definir quais pessoas ou grupos podem:

- realizar publicações em determinada comunidade;
- comentar publicações em determinada comunidade;
- efetuar apoios em determinada comunidade;
- efetuar denúncias em determinada comunidade;
- seguir publicações em determinada comunidade;
- compartilhar publicações em determinada comunidade.

Tudo isso é gerenciável no atual painel de permissões que você já conhece. Acesse e confira!

![](http://tdn.totvs.com/download/attachments/208340369/FLUIGINV-2470.PNG?version=1&modificationDate=1448029412000&api=v2)

Veja como configurar permissões para ações em comunidades:

**Crie publicações mais ricas com artigos**

Nessa atualização trabalhamos muito para revolucionar a forma como você interage com artigos em comunidades. São muitas novidades e estamos ansiosos para lhe contar:

- mudamos completamente a forma como você cria seus artigos. Você pode adicionar imagem de capa em seus artigos para dar aquele destaque especial;
- compartilhe seus artigos em comunidades e veja como ficou bacana a publicação, com um resumo do artigo, a imagem de capa e o título com destaque mais que especial;
- visualização rápida de artigo: viu um artigo legal compartilhado em uma comunidade? Leia ele sem sair da comunidade!
- compartilhou um artigo e notou algo para ser alterado ou a imagem de capa não ficou como você queria? Atualize o artigo e todas as publicações nas quais você o compartilhou serão instantaneamente atualizadas.

- [Criação do artigo](#)
- [Publicação do artigo](#)
- [Visualização do artigo na timeline](#)

![](http://tdn.totvs.com/download/attachments/208340369/FLUIGINV-1400-1.PNG?version=1&modificationDate=1448034122000&api=v2)

![](http://tdn.totvs.com/download/attachments/208340369/FLUIGINV-1400-2.PNG?version=1&modificationDate=1448034146000&api=v2)

![](http://tdn.totvs.com/download/attachments/208340369/FLUIGINV-1400-3.PNG?version=1&modificationDate=1448034178000&api=v2)

Veja como aumentar o engajamento dos usuários com os artigos em comunidades:

## LMS

**Pesquise por habilidades para encontrar responsáveis para suas turmas e disciplinas**

Agora é possível pesquisar por habilidades dos usuários quando você precisar encontrar responsáveis para relacionar a uma turma ou disciplina. Dessa forma, fica muito mais fácil encontrar o usuário melhor habilitado para ser o responsável por determinada turma ou disciplina.

![](http://tdn.totvs.com/download/attachments/208340369/FLUIGINV-3522.png?version=1&modificationDate=1447966446000&api=v2)

**Execute avaliações a partir de um e-mail!**

Agora você pode agendar a execução de uma avaliação do aprendizado e enviar para qualquer pessoa, informando apenas o *e-mail* dela! Assim, o executante da avaliação receberá um *link* em seu *e-mail* por meio do qual ele pode acessar e executar a avaliação. E mais, ao término o executante poderá receber um *e-mail* informando seu *status* de aprovação e sua nota – quando a avaliação permite visualizar essas informações.

- [Agendamento para execução por e-mail](#)
- [E-mail para acesso à avaliação](#)
- [Execução da avaliação a partir do e-mail](#)
- [E-mail de finalização da avaliação](#)

![](http://tdn.totvs.com/download/attachments/208340369/FLUIGINV-5231-1.png?version=1&modificationDate=1447968162000&api=v2)

![](http://tdn.totvs.com/download/attachments/208340369/--FLUIGINV-5231-2.png?version=1&modificationDate=1448484643000&api=v2)

![](http://tdn.totvs.com/download/attachments/208340369/FLUIGINV-5231-3.png?version=1&modificationDate=1447968207000&api=v2)

![](http://tdn.totvs.com/download/attachments/208340369/FLUIGINV-5231-4.png?version=1&modificationDate=1447968232000&api=v2)

As avaliações com questões dissertativas também podem enviar um *e-mail* com o *status* final do executante depois de corrigida pelo corretor.

![](http://tdn.totvs.com/download/attachments/208340369/FLUIGINV-5231-5.png?version=2&modificationDate=1447968406000&api=v2)

Disponibilizamos também, via API, o *link* de revisão da avaliação, onde o usuário com permissão pode ver com detalhes uma avaliação que foi executada a partir do *e-mail*.

Obtenha mais detalhes

O método da API Pública que permite criar o *link* para revisão da avaliação é o [/lms/assessmentApplication/getFinishedApplicationId/{email}/{scheduleId}](https://tdn.totvs.com/api.fluig.com/resource_AssessmentApplicationServiceRest.html#path__lms_assessmentApplication_getFinishedApplicationId_-email-_-scheduleId-.html).

![](http://tdn.totvs.com/download/attachments/208340369/FLUIGINV-5231-6.png?version=2&modificationDate=1448460695000&api=v2)

****

**Integrações no fluig LMS**

Disponibilizamos nesta atualização uma nova interface para configurações de integrações no aprendizado por meio de mensageria, trata-se do **EAI **(*Enterprise Application Integration*). Com o EAI você pode integrar os cadastros e processos do aprendizado com outros produtos. Fique por dentro das integrações disponíveis:

**TOTVS RM Vitae > fluig LMS**

- Usuários;

- Matrículas;
- Buscas de cursos do aprendizado.

**fluig LMS > TOTVS RM Vitae**

- Notas de usuários.

**TOTVS RM Educacional > fluig LMS **

- Usuários;
- Parâmetros de integração (campos de disciplina como por exemplo objetivo e ementa);
- Turmas;
- Disciplinas;
- Complementos de disciplina (valores dos campos ementa, objetivo, bibliografia, etc.);
- Matrículas.

**fluig LMS > TOTVS RM Educacional **

- Notas;
- Buscas de avaliações do TOTVS RM Educacional.

Para acessar e habilitar integrações pelo **Console EAI **você deve acessar o Painel de Controle e direcionar-se para a aba **Aprendizado. **Lá está disponível a nova opção Console EAI, onde é possível gerenciar as integrações do aprendizado.

- [Console EAI no Painel de Controle](#)
- [Configuração do Console EAI](#)
- [Console EAI](#)

![](http://tdn.totvs.com/download/attachments/208340369/FLUIGINV-3526-1.png?version=1&modificationDate=1447970300000&api=v2)

![](http://tdn.totvs.com/download/attachments/208340369/FLUIGINV-3526-2.png?version=1&modificationDate=1447970329000&api=v2)

![](http://tdn.totvs.com/download/attachments/208340369/FLUIGINV-3526-3.png?version=1&modificationDate=1447970349000&api=v2)

Saiba mais

Confira mais informações em [Configurando integrações via EAI](https://tdn.totvs.com/pages/viewpage.action?pageId=212894462).

**Novos datasets para acompanhamento de alunos em turmas**

Disponibilizamos nessa atualização novos *datasets* de aprendizado em Turmas, que você pode utilizar em seus formulários, portais e relatórios.

Acompanhe a relação completa a seguir:

- [Execução de tópicos de turmas](https://tdn.totvs.com/display/fluig/Datasets+internos+Fluig#DatasetsinternosFluig-enrollmentTopicDataset-Execu%C3%A7%C3%B5esemT%C3%B3picos);
- [Execução de itens de tópicos de turmas](https://tdn.totvs.com/display/fluig/Datasets+internos+Fluig#DatasetsinternosFluig-enrollmentTopicItemDataset-Execu%C3%A7%C3%B5esemItensdeT%C3%B3picos).

Mais informações

Se desejar obter mais informações, acesse [*Datasets* internos fluig](https://tdn.totvs.com/display/fluig/Datasets+internos+Fluig).

Criamos e disponibilizamos para você um relatório como exemplo de uso destes dois novos *datasets*. Em apenas um relatório os dois *datasets* são utilizados para que você possa acompanhar o andamento de alunos em tópicos e itens de tópicos de suas turmas de aprendizado.

![](http://tdn.totvs.com/download/attachments/208340369/FLUIGINV-3564.png?version=2&modificationDate=1447971837000&api=v2)

Exemplo de uso

Consulte o exemplo clicando [aqui](https://git.fluig.com/projects/SAMPLES/repos/sample-lms-reports/browse).

**Novos métodos na API Pública para aprovação e reprovação de matrículas**

Criamos dois novos métodos em nossa API Pública que vai tornar ainda mais fácil a integração dos processos de aprendizado com seus *widgets* personalizados. Com estes novos métodos você pode aprovar e reprovar as matrículas em treinamentos, trilhas e turmas, informando parâmetros básicos como o identificador da requisição da matrícula e o motivo da rejeição – somente para o método de reprovação.

Mais detalhes

Consulte a API Pública do fluig para obter mais informações de uso dos novos métodos:

- aprovação: [/lms/enrollment/approveRequest/{enrollmentRequestId}](https://tdn.totvs.com/api.fluig.com/resource_EnrollmentServiceRest.html#path__lms_enrollment_approveRequest_-enrollmentRequestId-.html);
- reprovação: [/lms/enrollment/reproveRequest](https://tdn.totvs.com/api.fluig.com/resource_EnrollmentServiceRest.html#path__lms_enrollment_reproveRequest.html).

## Plataforma

**Atualização na API Pública**

Nossa API Pública não para de crescer. E nesta atualização liberamos a possibilidade de você administrar as permissões de recursos por meio de nossos serviços REST.

Confira

Acesse a API Pública e confira: *Security*.

Exemplos de uso

****

  **Matrícula** Expand source

[expand source](#)[?](#)

| `function beforeDocumentPublisher() {````var FLUIG_HOST ="http://SEU_FLUIG";` ```// OAuth variables````var OAUTH_APP_PUBLIC = "OAUTH_APP_PUBLIC";````var OAUTH_APP_PRIVATE = "OAUTH_APP_PRIVATE";````var OAUTH_USER_APP_PUBLIC = "OAUTH_USER_APP_PUBLIC";````var OAUTH_USER_APP_SECRET = "OAUTH_USER_APP_SECRET";` ```//matrícula````var user = getValue("WKUser");````var consumer = oauthUtil.getGenericConsumer(OAUTH_APP_PUBLIC, OAUTH_APP_PRIVATE, OAUTH_USER_APP_PUBLIC, OAUTH_USER_APP_SECRET);````var data = consumer.post(FLUIG_HOST+"/api/public/social/user/"+user,jsonString);` |
| --- |

  **Alias** Expand source

[expand source](#)[?](#)

| `function afterSocialLike(companyId, like){````var FLUIG_HOST ="http://SEU_FLUIG";` ```// OAuth variables````var OAUTH_APP_PUBLIC = "OAUTH_APP_PUBLIC";````var OAUTH_APP_PRIVATE = "OAUTH_APP_PRIVATE";````var OAUTH_USER_APP_PUBLIC = "OAUTH_USER_APP_PUBLIC";````var OAUTH_USER_APP_SECRET = "OAUTH_USER_APP_SECRET";` ```//alias````var user = like.getUser();````var consumer = oauthUtil.getGenericConsumer(OAUTH_APP_PUBLIC, OAUTH_APP_PRIVATE, OAUTH_USER_APP_PUBLIC, OAUTH_USER_APP_SECRET);````var data = consumer.post(FLUIG_HOST+"/api/public/social/user/"+user,jsonString);` |
| --- |

## Novidades em documentação

- Confira a nova documentação [*Datasets* acessando banco de dados externos](https://tdn.totvs.com/display/fluig/Datasets+acessando+banco+de+dados+externo).
- Novos datasets fluig LMS [Datasets internos](/display/fluig/Datasets+internos)
- Messaging para todos! Guia de utilização fluig Messaging mobile
- Guia de estilos off-line [Desenvolvimento de formulário Mobile - Guia de estilos off-line](/pages/viewpage.action?pageId=146181573#Desenvolvimentodeformuláriomobile-Guiadeestilosoff-line)
- LMS - Integrações via EAI [Configurando Integrações via EAI](/pages/viewpage.action?pageId=212894462)
- Plugin fluig para Outlook remodelado [Plugin do fluig para Microsoft Outlook](/display/fluig/Plugin+do+fluig+para+Microsoft+Outlook)

## Correções

Nessa sessão listamos alguns *bugs* que matamos nessa atualização que garantem que tudo corra bem na sua plataforma.

- Exibição da opção Editar conteúdo, na aba Anexos de uma solicitação, quando o documento que está anexo foi publicado a partir da opção Novo documento (avançado) e sua extensão não consta em sua Descrição.

- Edição de formulário de processo que possui campos definidos para utilizarem o Analytics.

- Visualização e movimentação de solicitações mais rápida na Central de Tarefas.

- Movimentação de solicitações para uma atividade que é responsável por mover outra solicitação para a próxima atividade.

- Anexo de arquivos do tipo PDF em uma solicitação que está atrasada e que foi convertida para uma nova versão que possui um formulário diferente da versão anterior.

- Alteração do perfil de administrador para usuário comum no Identity ao modificar o usuário no Painel de Controle do fluig quando há integração ativa.

- Exibição das tarefas pendentes na Central de Tarefas quando o usuário autenticado não faz parte de nenhum grupo existente na plataforma.

- Desativação de usuário no fluig quando há integração com o Identity.

- Utilização de variáveis de eventos, como por exemplo WKNumState, em formulários de processos definidos para serem utilizados no fluig Mobile. 

- Utilização de variáveis do objeto *WorkflowProcess* dentro de mecanismo de atribuição desenvolvido sobre a plataforma.

- Exibição do ícone Favorito marcado no recurso de favoritos do *widget* Acesso centralizado.

- Exportação de treinamentos por usuários que possuem matrícula numérica.

- Utilização da opção “Copiar um bloco existente” ao editar as questões de uma avaliação.

- *Download* de documentos que foram publicados na pasta particular do usuário – Meus documentos – quando a opção "Permite *download* e impressão" está assinalada.

- Execução de atividades do tipo serviço ao iniciar uma solicitação, mesmo quando a atividade serviço não é a primeira no fluxo do processo.

- Validação de licenças no provisionamento pelo Identity e na criação de novos usuários no Painel de Controle do fluig.

- Exibição do *status* do processo junto à descrição na janela Conversão de solicitações.

- Gravação dos registros de um sub formulário que pertence a um formulário do tipo Pai x Filho.

- Exibição de *thumbnail* de imagens com *encoded* CMYK, utilizado em imagens geradas na ferramenta Adobe InDesign.

- Execução de pré ou pós teste de um treinamento após já ter sido executado uma vez.

- Desempenho da exibição do gráfico e dos dados de cada aba da Central de Tarefas.

- Exibição de solicitações que não possuem nenhum histórico do processo ativo e ordenação na janela de Conversão de solicitações quando há mais de 1500 solicitações de um mesmo processo.

- Transferência de tarefas – que inicialmente estavam atribuídas para um Pool e foram assumidas por um usuário – entre usuários do mesmo papel.

- Exibição do nome definido no fluig Studio na descrição da atividade do tipo Timer no diagrama do processo após exportá-lo para o fluig.

- Edição da categoria do processo após exportá-lo do fluig Studio e publicá-lo no fluig.

- Visualização dos dados de solicitações mesmo quando ocorreu alguma inconsistência com o mecanismo de atribuição por Pool, permitindo a movimentação pelo gestor e o cancelamento pelo solicitante.

- Extração de dados com o fluig Analytics quando é utilizada autenticação com proxy.

- Melhorias para deixar a criação de processos *workflow* mais rápida.

- Utilização de aspas duplas (“”) na descrição de campos de preenchimento obrigatório de formulários de processos.

- Exibição de tarefas que estão dentro do prazo definido para conclusão como atrasadas no gráfico da Central de Tarefas quando é utilizado o banco de dados Oracle.

- Ajustada a *query* de consulta de formulário pai e filho para situações em que existem mais de 1000 registros e o banco de dados utilizado é Oracle.

- Inclusão de nuvens de relacionamento no cadastro de usuários no momento de sua criação.

- Concessão de permissão de visualização do *widget* Nova publicação para usuários comuns depois que a permissão de visualização foi retirada.

- Visualização das informações ao posicionar o *mouse* sobre o nome de um usuário ou comunidade em uma *timeline*.

- Iniciar nova sessão de reunião virtual no Messaging após ter finalizado a sessão anterior.

- Número de usuários excedido mesmo quando ainda há licenças disponíveis, impossibilitando a criação de novos usuários.

- Movimentação de atividades na modelagem do diagrama de processos para determinados pontos da tela.

- Utilização do novo estilo de *zoom* em formulários de processos.

- Visualização das telas de *zoom* ao efetuar qualquer procedimento na plataforma que as utilize quando a variável “WCMUserLang”, correspondente ao idioma do usuário, possui um valor inválido.

- Geração de links que contêm ancora (#) em comentários de publicações.

- Exibição dos aniversariantes do dia corrente no topo da lista resumida no *widget* Aniversariantes do Kit intranet.

- Exibição de documentos duplicados no resultado de uma busca realizada utilizando tag (#).

- *Timeout* atingido ao selecionar um processo para que suas solicitações sejam convertidas quando há muitas solicitações em aberto.

- Exibição do gráfico de estatísticas de questões de avaliação, independentemente do tamanho das alternativas das questões.

- Exibição do tempo para responder a avaliação decorrido e das questões já respondidas ao abrir novamente a janela de execução, após ter iniciado a avaliação e fechado a janela.

- Exibição da mensagem informando que já existe uma nova atualização do fluig apenas para administradores enquanto não decorrer 30 dias após a liberação da atualização.

- Bloqueio de edição dos campos Nome e Descrição em processo AdHoc somente depois que uma atividade pertencente a ele foi iniciada.

- Validação para não permitir que sejam removidos grupos que pertencem a uma comunidade existente na plataforma.

- Movimentação de solicitações de uma atividade que solicita a confirmação de senha para uma atividade automática.

- Exibição de campos do tipo Pai x Filho de formulário no fluig *Mobile*.

- Alteração da opção **Trabalho individual** – presente no menu **Atividades extraclasse** – para **Correção de atividades** quando se acessa uma disciplina como responsável.

- Exportação de treinamentos por usuários que não tenham permissões no catálogo de tópicos e questões.

- Exibição do nome completo do usuário no resultado de uma busca para definir o corretor das questões dissertativas de uma avaliação.

- Exibição das lacunas de uma questão do tipo Lacuna quando elas estão alinhadas verticalmente.

- Exibição das alternativas de correlação ao editar uma questão do tipo Multi valorada/correção.

- Indexação - após editar uma pasta - dos seus documentos e de documentos que ainda não foram indexados, sem indexar processos e artefatos sociais.

- Exibição da data e do horário das ações “Solicitação iniciada”, “Solicitação finalizada” e “Solicitação cancelada” no histórico do processo.

- Movimentação de solicitações que contêm uma atividade do tipo *Timer* depois de uma atividade do tipo Join.

- Movimentação de solicitações quando é utilizado o método “*beforeTaskSave*” que altere a lista de usuário em uma atividade do processo.

- Exibição das informações do cancelamento quando um usuário tenta movimentar uma solicitação que foi cancelada pelo gestor do processo.

- Exportação do Relatório de Conquistas por Colaborador do recurso Gamificação, salvando o arquivo na pasta Meus documentos do usuário autenticado. É emitida uma notificação avisando sobre a conclusão da exportação.

- Exportação de solicitações mais rápida e com *log* detalhado para análise do desempenho.

- Exibição dos ícones que representam as conquistas do usuário no *widget* Conquistas do recurso Gamificação.

- Quebra de linha automática na exibição de questões – de todos os tipos – que possuem um texto longo como enunciado ou nas suas alternativas durante a execução de uma avaliação.

- Exclusão de notificações mais rápida a partir da opção Excluir todas – presente na Central de Notificações – e com maior usabilidade.

- Execução de avaliação por usuários que não estão relacionados a nenhum fuso horário.


<!-- anchors: Atualização1.5.4-Arquitetura, samples, Atualização1.5.4-ECM, samples, Atualização1.5.4-Mobile, Atualização1.5.4-Social, samples, highlighter_569966, highlighter_390414, samples, Atualização1.5.4-LMS, samples, samples, Atualização1.5.4-Plataforma, highlighter_406452, highlighter_451547, Atualização1.5.4-Novidadesemdocumentação, Atualização1.5.4-Correções -->
