---
title: "Atualização 1.5.6"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=221556052"
scraped_at: "2026-03-09T03:16:46.460Z"
depth: 2
anchors: 20
child_links: 73
---

# Atualização 1.5.6

![](/download/attachments/181966041/espanhol.png?version=2&modificationDate=1422631676000&api=v2) ¿Habla Español? Haga clic [aquí](https://tdn.totvs.com/x/-vtbDQ) para ver el Release Notes en Español.

![](/download/attachments/181966041/ingles.png?version=2&modificationDate=1422631693000&api=v2) Do you speak English? Click [here](https://tdn.totvs.com/x/fgBgDQ) to view the Release Notes in English.

Confira abaixo as novidades na atualização 1.5.6 do fluig:

## Identity

**Autoatendimento de recuperação e desbloqueio de senha**

*Chega de chamados de Help Desk. Agora seus colaboradores podem realizar o desbloqueio automático de usuários.*

Nós sabemos que a maior parte de seus chamados da área de TI na empresa são sobre gerenciamento de senhas e agora o fluig Identity vai ajudar ainda mais no seu dia a dia.

Caso seu usuário perca a senha, pensamos em algo muito moderno para ele confirmar que é ele mesmo que está solicitando a recuperação da senha. Sua empresa cadastra várias imagens secretas que serão apresentadas para os usuários e configuradas suas diretrizes de segurança como número de imagens que serão cadastradas pelo usuário, imagens apresentadas na seleção, tempo de expiração de tentativas e muito mais.

Para que ele faça isso em seu próprio equipamento, criamos um assistente que, após configurado, irá nativamente integrar-se com seu Windows 7 ou superior e apresentar diretamente na tela de autenticação do Windows, um *link* que permite que o usuário *reset* sua senha ou desbloqueie seu usuário sem necessidade de falar com o time de TI.

Saiba mais como instalar esse recurso em sua rede consultando nosso guia [clicando aqui.](https://tdn.totvs.com/x/yoRbDQ)

Além disso, você já conta com 40 imagens pré-cadastradas para que você possa configurar rapidamente.

![](/download/attachments/221556052/desbloq_tiago.png?version=2&modificationDate=1456150984000&api=v2)

![](/download/attachments/221556052/Imagens_Identity.png?version=1&modificationDate=1456145287000&api=v2)

**SmartSync - Tempo de sincronismo configurável**

*O uso de rede é um fator crítico para sua empresa?*

Você pediu e nós atendemos. Com a nova versão**3.0.1** do SmartSync você pode configurar o tempo de sincronismo entre seus servidores LDAP, e o melhor, por domínio. Com isso você reduz o consumo de banda e recursos do seu servidor e define qual o tempo de atualização.

Além disto, você também pode configurar o tempo de verificação de dados com o servidor do fluig Identity na nuvem.

![](/download/attachments/221556052/3.png?version=1&modificationDate=1455645887000&api=v2)![](/download/attachments/221556052/4.png?version=1&modificationDate=1455645888000&api=v2)

**

**Fique tranquilo: agora você pode alterar o e-mail no LDAP**

*Segurança e flexibilidade na integração com LDAP.*

Agora, mesmo ao alterar seu *e-mail* no Microsoft Active Directory ou openLDAP, todos os seus aplicativos configurados são mantidos e a sua identidade no Identity fica garantida.

**![](/download/attachments/221556052/5.png?version=1&modificationDate=1455645888000&api=v2)

## Arquitetura

**Mais facilidade nas configurações da plataforma**

Agora as configurações do sistema permitem editar os parâmetros em tela, sem a necessidade de alterar diretamente os arquivos de configuração. Autentique-se no fluig com o usuário “**wcmadmin**”, acesse **Painel de Controle** > **WCM** > **Configurações do sistema** > aba **Parâmetros da plataforma** e confira mais essa facilidade!

Observação

A alteração de alguns parâmetros exige que o serviço do fluig seja reiniciado.

![](/download/attachments/221556052/FLUIGINV-8468.PNG?version=2&modificationDate=1454508327000&api=v2)

Saiba mais

As seguintes documentações foram atualizadas para contemplar as facilidades de configuração na plataforma. Fique por dentro:

- [Parâmetros de configuração do fluig](/pages/viewpage.action?pageId=77299889)
- [Múltiplas Instâncias](/pages/viewpage.action?pageId=113804679)
- [Utilizando o protocolo FTP no fluig](/pages/viewpage.action?pageId=118884864)
- [Configurações para o funcionamento do chat](/pages/viewpage.action?pageId=155582855)
- [Configuração de envio de email](/pages/viewpage.action?pageId=185756210)
- [ARQ 068 - Como configurar o fluig em Load Balance com Apache mod_proxy em Linux na release 1.5.6 à 1.5.13?](/pages/viewpage.action?pageId=73894749)
- [Configuração do Fluig Cache com Redis](/pages/viewpage.action?pageId=205917413)
- [Configurando o fluig Realtime para execução em load balancer](/pages/viewpage.action?pageId=200912770)
- [Configuração HTTPS para fluig das releases 1.5.6 à 1.5.13](/pages/viewpage.action?pageId=127959055)
- [Monitor de Serviços fluig](/pages/viewpage.action?pageId=142811200)

## LMS

**Novos datasets para exibir a execução de uma avaliação, detalhando blocos e questões**

Disponibilizamos nessa atualização novos *datasets* de execução de avaliações, blocos e questões. Veja a seguir:

- *Dataset* de questões executadas em uma avaliação: [assessmentAppQuestionDataset](https://tdn.totvs.com/display/fluig/Datasets+internos+Fluig#Datasetsinternosfluig-assessmentAppQuestionDataset-Datasetdequest%C3%B5esaplicadasemumaavalia%C3%A7%C3%A3o);
- *Dataset* de blocos em uma avaliação: [assessmentAppBlockDataset](https://tdn.totvs.com/display/fluig/Datasets+internos+Fluig#Datasetsinternosfluig-assessmentAppBlockDataset-Datasetdeblocosemumaavalia%C3%A7%C3%A3o);
- *Dataset* de execução de avaliações por trilha \ treinamento: [assessmentApplicationByTrack](https://tdn.totvs.com/display/fluig/Datasets+internos+Fluig#Datasetsinternosfluig-assessmentApplicationByTrack-Datasetdeexecu%C3%A7%C3%A3odeavalia%C3%A7%C3%B5esportrilha%28contendopr%C3%A9,p%C3%B3s,rea%C3%A7%C3%A3o%29) e [assessmentApplicationByTraining](https://tdn.totvs.com/display/fluig/Datasets+internos+Fluig#Datasetsinternosfluig-assessmentApplicationByTraining-Datasetdeexecu%C3%A7%C3%A3odeavalia%C3%A7%C3%B5esportreinamento%28contendopr%C3%A9teste,p%C3%B3steste,avalia%C3%A7%C3%A3oderea%C3%A7%C3%A3o%29);
- *Dataset* de execução de avaliações por turma: [assessmentClassApplicationDataset](https://tdn.totvs.com/display/fluig/Datasets+internos+Fluig#Datasetsinternosfluig-assessmentClassApplicationDataset-Datasetdeexecu%C3%A7%C3%A3odeavalia%C3%A7%C3%B5esporturma).

Mais informações

Acesse [*Datasets* internos fluig](https://tdn.totvs.com/x/SgKeCQ) para obter mais detalhes.

Informações relacionadas

Os *datasets* a seguir passaram por algumas alterações:

- *assessmentApplicationGenericDataset –*adicionados os seguintes campos:*“userMail”, “startDate”, “finishDate”, “requiredScore”, “assessmentApplicationId”;*
- *assessmentApplicationCatalogPreExamDataset –*campo *“assessmentId”*renomeado para*“assessmentApplicationId”;*
- *assessmentApplicationCatalogPosExamDataset –*campo *“assessmentId”*renomeado para *“assessmentApplicationId”;*
- *assessmentApplicationCatalogReactionExamDataset –*campo *“assessmentId”*renomeado para*“assessmentApplicationId”.*

**Novos exemplos de relatórios**

Também criamos e disponibilizamos para você alguns relatórios como exemplo de uso dos novos *datasets*. Confira:

- Relatório de execuções de avaliações;
- Relatório de execuções de avaliações por trilha;
- Relatório de execuções de avaliações por treinamento;
- Relatório de execuções de avaliações por turmas.

![](/download/attachments/221556052/FLUIGINV-7416.PNG?version=1&modificationDate=1453799868000&api=v2)

Exemplos de uso

Consulte exemplos de uso [clicando aqui](https://git.fluig.com/projects/SAMPLES/repos/sample-lms-reports/browse).

Saiba mais

Para mais informações sobre relatórios, acesse [Modelos de relatórios fluig](https://tdn.totvs.com/x/IaOwD).

**Defina um tempo mínimo de visualização de conteúdos SCORM**

Agora você pode definir um tempo mínimo de visualização de um conteúdo SCORM em treinamentos e turmas.

Durante a execução de um treinamento ou item de tópico de uma turma, se o aluno tentar encerrar a execução de um conteúdo SCORM antes do tempo mínimo definido, ele é advertido com a informação de quanto tempo ainda falta para atingir o tempo mínimo de visualização. Se ele encerrar mesmo assim, o conteúdo é considerado como executado sem atribuição de nota – se for um conteúdo SCORM que tenha uma avaliação embutida e que gere uma pontuação.

Dica

Se não deseja utilizar um tempo mínimo de visualização, basta deixar o campo em branco ou preenchido com zeros.

- [Treinamentos](#)
- [Turmas](#)
- [Advertência](#)

![](/download/attachments/221556052/FLUIGINV-7651.png?version=1&modificationDate=1453804400000&api=v2)

![](/download/attachments/221556052/FLUIGINV-7651-2.png?version=1&modificationDate=1453804418000&api=v2) 

![](/download/attachments/221556052/FLUIGINV-7651-4.PNG?version=1&modificationDate=1454515141000&api=v2)

**Novos itens para disciplinas, pastas e turmas na API Pública**

Agora a gama de manipulação de disciplinas e pastas do catálogo de disciplinas e turmas está maior, com novos itens na [API Pública](https://api.fluig.com/).

- [Disciplinas](https://api.fluig.com/resource_DisciplineServiceRest.html):  criação, edição, remoção e movimentação (de uma pasta para outra);
- [Pastas do catálogo de disciplina:](https://api.fluig.com/resource_FolderDisciplineServiceRest.html) criação, edição, remoção e movimentação (de uma pasta para outra);
- [Turmas](https://api.fluig.com/resource_NormalClassServiceRest.html): adicionados métodos para edição e remoção.

## ECM

**Gestão de ambiente do fluig Viewer mais fácil**

Para quem utiliza o fluig em ambiente Windows, a gestão do fluig Viewer ficou muito mais simples: não é mais necessário ter *Internet Information Services*(IIS) instalado. Também não é mais necessário instalar o fluig Viewer no mesmo servidor do fluig, basta configurar o endereço do servidor nos dados adicionais da empresa.

Fique por dentro

Para obter mais informações acesse [Instalação e configuração no Windows](https://tdn.totvs.com/pages/viewpage.action?pageId=200910842).

- [Informando o servidor do fluig Viewer](#)
- [Visualização de documentos](#)

![](/download/attachments/221556052/FLUIGINV-8331.PNG?version=1&modificationDate=1453817750000&api=v2)

 ![](/download/attachments/221556052/FLUIGINV-6403.PNG?version=1&modificationDate=1453817770000&api=v2)

Observação!

Melhorias válidas a partir da liberação da atualização 10.5 do fluig Viewer, prevista para 24/02/2016.

**Fluig Connect e Messaging juntos para facilitar seu dia a dia**

Já imaginou juntar o fluig Connect e o fluig Messaging e dar ainda mais agilidade ao seu dia a dia? Então aproveite, porque isso já é realidade! Agora você pode utilizar o Messaging diretamente do fluig Connect, iniciando conversas, recebendo notificações de mensagens individuais, de grupo e de documentos enviados e, também, participar de reuniões.

- [Acesso ao Messaging a partir do Connect](#)
- [Messaging acessado a partir do Connect](#)

![](/download/attachments/221556052/FLUIGINV-7727.png?version=3&modificationDate=1454510373000&api=v2)

![](/download/attachments/221556052/FLUIGINV-7727-2.png?version=2&modificationDate=1454510237000&api=v2)

Confira:

Se interessou?

Se você gostou dessa novidade (provalvemente sim), não perca tempo: habilite agora! Disponível somente para o plano pago do fluig Messaging.

**Baixe pastas e arquivos de uma única vez e agilize suas tarefas** 

Precisa baixar mais de um arquivo ou pasta de uma única vez? Fique tranquilo, agora isso é possível. Você pode baixar várias pastas, vários documentos de uma pasta ou, ainda, pastas e documentos de uma única vez.

- [Vários documentos](#)
- [Várias pastas](#)
- [Documentos e pastas](#)
- [Conteúdo baixado](#)

![](/download/attachments/221556052/FLUIGINV-8330.PNG?version=1&modificationDate=1453821359000&api=v2)

![](/download/attachments/221556052/FLUIGINV-8330-2.PNG?version=1&modificationDate=1453821383000&api=v2)

![](/download/attachments/221556052/FLUIGINV-8330-3.PNG?version=1&modificationDate=1453821449000&api=v2)

![](/download/attachments/221556052/FLUIGINV-8330-4.PNG?version=2&modificationDate=1454510577000&api=v2)

Fique por dentro

Ao finalizar a compactação, é emitida uma notificação informando que o *download* está concluído e o *link* para acesso do conteúdo.

![](/download/attachments/221556052/FLUIGINV-8330-5.PNG?version=1&modificationDate=1453822227000&api=v2)

**Notificações de assunto mais detalhadas**

Agora a notificação de acompanhamento de assunto exibe o nome do documento que foi criado ou atualizado, o que facilita quando você possui muitos assuntos de interesse.

****

****

****

## BPM

**Encontre um processo específico de forma simples e rápida**

Precisa iniciar um processo e não sabe em qual categoria ele está? Não se preocupe, faça uma busca pelo processo que você precisa rapidamente. Você pode pesquisar pelo nome do processo, pela sua categoria ou, ainda, pela sua subcategoria. Pronto! Agora é só iniciar sua solicitação.

- [Localização do processo](#)
- [Busca pela subcategoria do processo](#)

![](/download/attachments/221556052/FLUIGINV-8328.PNG?version=2&modificationDate=1453824647000&api=v2)

![](/download/attachments/221556052/FLUIGINV-8328-2.PNG?version=1&modificationDate=1453824667000&api=v2)

**Sincronização de datasets pela API pública**

Agora é possível adiantar a sincronização de um *dataset*pelo método *dataset/synchronizeDataset/* da API Pública, sem precisar aguardar a próxima execução definida no Agendador de Tarefas.

Mais detalhes

Acesse [fluig API](https://tdn.totvs.com/display/fluig/Fluig+API) e [API Pública](https://api.fluig.com/resource_DatasetServiceRest.html#path__ecm_dataset_synchronizeDataset.html) e confira mais detalhes.

**Tenha a visão do cenário exato de solicitações**

A Central de Tarefas evoluiu para agilizar e facilitar suas atividades diárias. Agora, as abas de tarefas pendentes exibem o número exato, mesmo quando esse número é elevado – mais de 999 tarefas. Ao acessar as abas **Tarefas a concluir** ou **Tarefas em pool** – **grupo ou papel** – é possível visualizar o número de tarefas atrasadas, o número de tarefas pendentes no prazo e o número total de tarefas pendentes (atrasadas + no prazo). Assim, você fica por dentro do cenário real das solicitações nas quais está envolvido.

Além disso, localizar uma determinada tarefa ficou muito mais rápido e fácil. Com o novo campo de localização, você pode pesquisar uma tarefa por um valor de qualquer campo da solicitação – apenas entre as tarefas da página corrente – ou pesquisar pelo número ou identificador da solicitação – nesse caso, em todas as tarefas pendentes, independentemente de qual página estejam. É uma facilidade e tanto, hein!

- [Número exato de tarefas pendentes](#)
- [Número de atrasadas, no prazo e total](#)
- [Localização de tarefa](#)

![](/download/attachments/221556052/FLUIGINV-8323.PNG?version=2&modificationDate=1454512808000&api=v2)

![](/download/attachments/221556052/FLUIGINV-8323-2.PNG?version=2&modificationDate=1454512822000&api=v2)

![](/download/attachments/221556052/FLUIGINV-8323-3.PNG?version=2&modificationDate=1454512902000&api=v2)

**API para transferência de pendências**

Agora é possível utilizar a API Pública para transferir as pendências de um usuário para outro. Informando os *logins*dos usuários é possível transferir todas as pendências de processos *workflow* e de documentos. Como resultado da operação é gerado um *log*da transferência.

Saiba mais

Acesse a [API pública](https://api.fluig.com/resource_TasksRest.html#path__2.0_tasks_transfer.html) e obtenha mais informações a respeito.

## Social

**Salve suas conversas do Messaging para consultas futuras**

Agora você pode salvar o histórico de mensagens de qualquer conversa do Messaging em um arquivo PDF, salvando o arquivo em sua pasta Meus documentos ou em qualquer pasta de sua escolha, dentro da estrutura de pastas do fluig da sua empresa a qual você possui permissão de gravação.

É possível exportar todo o histórico de mensagens de uma conversa ou, se preferir, somente as mensagens enviadas em um determinado período. Também é possível escolher entre exportar tudo – textos e arquivos anexos da conversa – ou somente os textos. Legal, hein? 

- [Opção para salvar conversas](#)
- [Opções de exportação](#)
- [Arquivo gerado](#)

![](/download/attachments/221556052/FLUIGINV-7721.PNG?version=1&modificationDate=1453890818000&api=v2)

![](/download/attachments/221556052/FLUIGINV-7721-2.PNG?version=1&modificationDate=1453890832000&api=v2) 

![](/download/attachments/221556052/FLUIGINV-7721-3.PNG?version=1&modificationDate=1453890851000&api=v2) 

 **Notificações do Messaging na área de trabalho!**

O Messaging está ainda mais moderno e interativo. Agora você pode receber notificações na área de trabalho quando novas mensagens de conversas individuais ou em grupo forem enviadas para você, mesmo que você não esteja com a janela do Messaging aberta ou esteja com a plataforma minimizada. Além disso, também é possível configurá-lo para exibir o número de mensagens não lidas no título do navegador.

Dica!

Obtenha detalhes sobre como configurar o *Messaging* para usufruir desses novos recursos no **Help Online** do fluig – menu **Configurações** > **Ajuda** > **fluig Store**>***Messaging*** >**Painel de controle** > **Messaging** – ou em Configuração fluig *Messaging*.

- [Notificação na área de trabalho](#)
- [Número de mensagens não lidas no título do navegador](#)

![](/download/attachments/221556052/FLUIGINV-7583.PNG?version=2&modificationDate=1454519172000&api=v2)

![](/download/attachments/221556052/FLUIGINV-7583-2.PNG?version=4&modificationDate=1454000683000&api=v2)

**Crie artigos mais ricos em conteúdo com vídeos**

Que tal um vídeo para ilustrar o conteúdo do seu artigo? Como no velho ditado, imagens valem mais do que palavras. A criação e edição de artigos em comunidades agora contam com o recurso de adicionar vídeos para dar mais vida aos seus artigos e torná-los ainda mais ricos em conteúdo. Basta clicar, escolher o vídeo e acionar *play*. Luz, câmera e ação!

- [Criação do artigo](#)
- [Visualização do artigo na comunidade](#)
- [Artigo publicado na timeline](#)

![](/download/attachments/221556052/FLUIGINV-8353.PNG?version=1&modificationDate=1453996148000&api=v2)

![](/download/attachments/221556052/FLUIGINV-8353-2.PNG?version=1&modificationDate=1453996178000&api=v2)

![](/download/attachments/221556052/FLUIGINV-8353-3.PNG?version=1&modificationDate=1453996220000&api=v2)

## Mobile

**Notificações push no fluig. Agora nativas!**

As notificações *push* – que antes eram solicitadas na fluig Store e instaladas na Central de Componentes – agora são um recurso nativo da plataforma. Elas permitem acompanhar em tempo real o que acontece no fluig ao utilizá-lo em *smartphone* ou *tablet* que operam com os sistemas iOS e Android, proporcionando mais agilidade e interatividade nas ações do dia a dia.

Fique tranquilo!

Se você já utiliza as notificações *push*, não precisa se preocupar com nada, nenhum procedimento é necessário por conta dessa novidade. É só continuar utilizando!

- [Ativação das notificações push na plataforma](#)
- [Recebimento de notificações push em dispositivos móveis](#)

![](/download/attachments/221556052/FLUIGINV-7666.PNG?version=1&modificationDate=1453892528000&api=v2)

![](/download/attachments/221556052/FLUIGINV-7666-2.png?version=1&modificationDate=1455198349000&api=v2)

**Que tal visualizar páginas no fluig Mobile?**

Sim, agora você pode visualizar páginas nos seus dispositivos móveis! Sabemos que você esperava **muito** por isso, pois agora um mundo possibilidades e personalizações chegou às suas mãos. Você pode fazer uma infinidade de coisas com páginas no fluig Mobile [só não pode fazer café...].

As páginas e sub-páginas podem ser acessadas pelo item **Páginas** do menu principal.

Se interessou?

Obtenha mais detalhes em[Suporte a páginas e *widgets* no aplicativo *mobile*](https://tdn.totvs.com/pages/viewpage.action?pageId=224108112).

- [Acesso a páginas](#)
- [Visualização](#)

![](/download/attachments/221556052/FLUIGINV-3139-2.png?version=2&modificationDate=1455198694000&api=v2)

![](/download/attachments/221556052/FLUIGINV-3139-3.png?version=2&modificationDate=1455200336000&api=v2)

**Criar tarefas no fluig Mobile**

Precisa criar e delegar tarefas? Você pode usar o fluig Mobile! Agora você pode criar e acompanhar as tarefas do processo Listar Tarefas pelo fluig Mobile e aproveitar a facilidade de delegar as tarefas na palma das suas mãos.

Observação

Atualmente a criação de tarefas está restrita apenas à inicialização do processo. Em breve teremos novidades!

![](/download/attachments/221556052/FLUIGINV-6980.png?version=1&modificationDate=1453975801000&api=v2)

****

**Faça anotações em documento de forma fácil!**

Anotações em documento nunca foram tão fluidas. Sim, agora você pode anotar em documentos por meio do fluig Messaging. Acesse o fluig Mobile e toque em **Iniciar notas**. Uma conversa será criada no fluig Messaging e você pode fazer anotações no documento e, ainda, incluir outros usuários para colaborar.

![](/download/attachments/221556052/FLUIGINV-7073.png?version=2&modificationDate=1455199375000&api=v2)

**Personalize a vista inicial da sua janela!**

A personalização da tela inicial do fluig Mobile agora também pode ser feita para Windows Phone. Se você já havia configurado para Android e iOS não se preocupe, após atualizar seu aplicativo fluig Mobile para Windows Phone ele já estará com a tela inicial personalizada.

Fique por dentro

Mais informações sobre esse recurso você encontra em [Personalização da tela inicial do fluig Mobile](https://tdn.totvs.com/pages/viewpage.action?pageId=198938892).

![](/download/attachments/221556052/FLUIGINV-7042.png?version=1&modificationDate=1453978842000&api=v2)

**Permissões em comunidades aplicadas ao fluig Mobile**

Você definiu permissão de publicação em comunidades e gostaria que elas fossem aplicadas ao *mobile*? Fique tranquilo, seu desejo já é realidade! Agora as permissões para publicar, comentar, apoiar e excluir publicações definidas no fluig são refletidas no seu *smartphone* ou *tablet*.

![](/download/attachments/221556052/FLUIGINV-7033.png?version=2&modificationDate=1455200076000&api=v2)

**A movimentação de processo off-line chegou ao Windows Phone!**

Dê andamento em suas atividades por meio de sua Janela mesmo sem conexão ativa. Agora continuar com suas atividades mesmo em lugares onde não existe conexão com a internet. Você pode:

- tornar processos *off-line*: fazendo com que as solicitações possam ser criadas mesmo sem internet;
- tornar uma ou mais solicitações *off-line*: antes de sair para fazer suas atividades, torne as solicitações *off-line* para poder continuar mesmo sem conexão.

**Caixa de saída:** depois de iniciar e movimentar solicitações *off-line*, elas ficam na caixa de saída até sincronizar novamente quando existir conexão. A opção pode ser manual ou automática, de acordo com a configuração de sua preferência.

![](/download/attachments/221556052/FLUIGINV-7056-1.png?version=2&modificationDate=1455199811000&api=v2)![](/download/attachments/221556052/FLUIGINV-7056.png?version=2&modificationDate=1455199811000&api=v2)

## Novidades em documentação

- Atualizamos a documentação [Utilização de *Webservices*](https://tdn.totvs.com/x/ZyxbB) sobre o método “*createSimpleDocument*” e disponibilizamos a página [Criação de documento a partir do método “*createSimpleDocument*”](https://tdn.totvs.com/x/6apYDQ) para auxiliar o entendimento do parâmetro “*attachments”*quando utilizado pelo fluig Studio.

- Obtenha mais informações sobre o [Modo demonstração](https://tdn.totvs.com/x/S5hbDQ) do fluig e [Como configurar servidor de licença no fluig](https://tdn.totvs.com/x/XAJrD).  
- Outras documentações atualizadas: [Datasets internos fluig](https://tdn.totvs.com/display/fluig/Datasets+internos+fluig)
- [Modelos de relatórios fluig](https://tdn.totvs.com/pages/viewpage.action?pageId=212902689)
- [Desenvolvimento de Formulários](https://tdn.totvs.com/pages/viewpage.action?pageId=75270483)
- [Desenvolvimento de formulário Mobile](https://tdn.totvs.com/pages/viewpage.action?pageId=146181573)
- [Guia de Utilização fluig - Mobile](https://tdn.totvs.com/pages/viewpage.action?pageId=107940624)
- Configuração fluig Messaging
- [Guia de instalação fluig Connect](https://tdn.totvs.com/pages/viewpage.action?pageId=185737338)
- [Sobre o fluig Connect](https://tdn.totvs.com/display/fluig/Sobre+o+fluig+Connect)
- [Sobre o fluig Viewer](https://tdn.totvs.com/display/fluig/Sobre+o+fluig+Viewer)
- [Suporte a páginas e widgets no aplicativo Mobile](/pages/viewpage.action?pageId=224108112)
- [Desenvolvimento de widgets mobile](/display/fluig/Desenvolvimento+de+widgets+mobile)

## Correções

Nessa sessão listamos alguns *bugs* que matamos nessa atualização que garantem que tudo corra bem na sua plataforma.

- Remoção de e-mail de usuários da listagem de convites enviados pelo recurso Convite de usuários, localizado na guia Colaboração do Painel de Controle.

- Geração do número da nova versão de um documento que possui revisões ao editá-lo e definir que seja criada uma nova versão.

- Bloqueio da edição do conteúdo de um documento – por Webdav – quando ele está pendente de aprovação.

- Exclusão de arquivo do diretório de *upload* após publicá-lo a partir do recurso Publicação múltipla assinalando a opção “Limpar diretório de *upload* ao publicar”.

- O protocolo para envio de notificações *realtime* agora é o *websocket* e não mais o *polling*. Também é possível desabilitar o *polling*, o que muitas vezes é necessário em ambientes com muitos clientes Internet Explorer 9 devido as suas inconsistências que sobrecarregam o servidor.

- Serviço de retorno da URL utilizada pelo fluig Connect para receber as notificações e entrega de notificações em ambientes com AD quando existe diferença de *case sensitive* entre o *login* no AD e o *login* no fluig.

- Envio de notificação de nova publicação em comunidades para membros que são usuários comuns e possuem as configurações necessárias para receber a notificação.

- Envio de e-mail de notificação de acompanhamento para os demais usuários de um *pool* quando a tarefa é assumida por um membro do *pool* e tem a opção “Notifica responsável” desmarcada.

- Restrição de visualização de registros de formulário por membros da comunidade na qual o formulário está publicado no resultado de uma busca feita em toda a plataforma.

- Exibição do número total de tarefas pendentes nas abas da Central de Tarefas.

- Exibição da tradução da data de um certificado que permite sua geração em vários idiomas e que foi atribuído a um treinamento.

- Visualização de formulário de processo que possui campos do tipo área de texto ao acessá-lo a partir de uma notificação recebida.

- Visualização apenas das publicações em comum quando um usuário administrador acessar a *timeline* de outro usuário.

- Perda de informações já preenchidas ao alternar entre as abas Informações gerais e Versão de uma questão quando algum campo obrigatório não foi preenchido.

- Disponibilizado o *template* de página Básico (*slot* inteiro com 3 *slots* à direita) para ser utilizado como *template* de *layout* personalizado no fluig Studio.

- Inclusão de alternativas para uma questão do tipo lacuna sem precisar mover a página para posicionar o cursor a cada alternativa incluída.

- Exibição de alerta informando que os compartilhamentos se tornarão indisponíveis ao eliminar um documento que foi compartilhado da navegação de documentos.

- Execução de tarefa agendada para eliminar notificações quando há usuários inativos que possuem notificações na empresa.

- Exibição de data e hora exatas no histórico de movimentação de solicitações na Central de Tarefas.

- Grafia da mensagem exibida logo após iniciar uma solicitação questionando se o usuário deseja iniciar novas solicitações.

- Exportação da consulta de solicitações quando o volume de solicitações é elevado – em torno de 4000 solicitações.

- Consulta de solicitações determinando um intervalo de solicitações ao utilizar o navegador Internet Explorer.

- Utilização de *layout* padrão com abas – que foi criado no fluig Studio e exportado – em páginas do fluig.

- Busca de usuários por seu nome ao movimentar uma solicitação que utiliza mecanismo de atribuição por grupo ou por papel.

- Revisão de conteúdo SCORM de treinamentos ou de item de tópico em turmas ao utilizar o navegador Chrome no sistema operacional MAC OS X.

- Utilização do widget Aniversariantes – do Kit Intranet – integrado ao RM quando o banco de dados é Oracle.

- Utilização das opções de formatação no editor de textos do LMS – existente em treinamentos, disciplinas, avaliações, dentre outros – quando se utiliza o navegador Internet Explorer.

- Busca por nome e sobrenome do responsável que será atribuído a uma disciplina ao cadastrá-la.

- Movimentação de solicitações pelo fluig Mobile quando o processo em questão possui dois formulários do tipo Pai x Filho.

- Opções para alteração da quantidade de tarefas exibidas por página na Central de Tarefas.

- Utilização de *zoom* que exibe valore previamente filtrados em um formulário de processo movimentado pelo fluig Mobile.

- Movimentação de solicitação que possui formulário e uma atividade automática na qual o mecanismo de atribuição é por campo de formulário.

- Efetivação da ação Descartar, na movimentação de solicitações, antes de selecionar um usuário de destino após uma atividade automática.

- Exibição dos treinamentos e turmas na página Início do ambiente de aprendizado quando há mais de seis itens em andamento.

- Busca de avaliação para defini-la como pré ou pós-teste de um treinamento que está sendo cadastrado quando é utilizado o banco de dados Oracle.

- Edição do nome de uma comunidade quando ele é extenso – mais de 40 caracteres.

- Anexo do vídeo de gravação de reunião virtual junto ao documento que foi utilizado na reunião após finalizá-la.

- *Upload* de documentos que contêm acentuação do nome quanto utilizado sistema operacional Linux ou MAC OS.

- Exibição dos alunos matriculados em uma turma que se baseia em uma turma modelo ao acessar o recurso **Pontuação manual**para atribuir ou ajustar a pontuação dos alunos.

- Sincronização de documentos com o fluig Connect que foram publicados no fluig e que possuem aspas simples em seu nome.

- Exibição de atributo incluído na Matriz de Conhecimento do recurso Gamificação quando o usuário autenticado ainda não possui pontos nesse atributo.

- Exibição da listagem de tarefas pendentes que pertencem a um *pool* por grupo quando o nome do grupo possui o caractere "&".

- Utilização de caracteres especiais – como o "$" - em *links* de publicações e comentários na *timeline* de comunidades.

- Validação da atualização do formulário do processo ao movimentar a solicitação em atividades paralelas.

- Exibição de funcionários ativos no *widget* Aniversariantes – do Kit Intranet – quando integrado ao RM.

- Finalização de avaliação que tem um tempo máximo de execução configurado ao expirar esse tempo.

- Acesso à *timeline* de um usuário quando o banco de dados utilizado é Oracle ou SQL Server, tanto no fluig quanto no fluig Mobile.

- Exportação de solicitações que contenham um campo com mais de 32.000 caracteres quando assinalada a opção “Incluir dados do formulário”.

- Liberação dos conteúdos e do pós-teste de um treinamento para visualização quando o seu pré-teste é obrigatório e tem questões dissertativas.

- Exibição indevida de mensagem de inconsistência ao acessar o fluig com o usuário administrador da empresa logo após sua instalação quando utilizado o banco de dados Oracle.

- Movimentação de solicitação de processo que foi iniciada, salva, atualizada e só então é enviada para a próxima etapa.

- Envio de *e-mail* de notificação de assunto quando o usuário pertence a um grupo relacionado ao assunto, porém, o assunto não é obrigatório e não é um assunto de interesse do usuário.

- Autenticação por *token* ao efetuar consulta de *sub-folder* por meio do *webservice* *ECMTokenService* e o método *getToken* informando o *token* a partir do método *getSubFolder* do *webservice* *ECMFolderService*.

- Validação do usuário destino da solicitação de um processo que é iniciado a partir de um *webservice* quando a atividade de início deve ser direcionada para um *pool* para grupo, onde o grupo pode ser diferente para cada solicitação, sendo determinado pelo ERP envolvido.

- Retorno do método *getDocumentId* quando utilizado nos eventos *afterSaveNew*e *afterProcessingem* de formulário de processo.

- Exibição do título do *widget* Editor de Conteúdo ao publicar a página na qual ele se encontra.

- Exclusão da mensagem informando que o filtro foi modificado e não foi salvo ao alternar entre filtros criados na Central de Tarefas.

- Consulta de *datasets* nos formulários (*web* e *mobile*), implementação de chamadas assíncronas para *datasets*e melhoria no *log* para facilitar a visualização de inconsistências em chamadas a *dataset.*

- Utilização do “*updatehotfix*” para alterar o *e-mail* e o IDP do usuário, mantendo a integração deste *e-mail* entre o fluig e o Identity.

- Alteração de “Enviar” para “Movimentar” na tela de consulta de solicitações da Central de Tarefas.

- Visualização de documento que está em *checkout* na Navegação de Documentos.

- O *job* do Analytics agora é executado aos 10 e aos 40 minutos de cada hora (mantendo o intervalo de 30 minutos a cada atualização),depois que o *dataset* de tarefas atrasadas que é enviado para o Analytics está atualizado.Mais informações Confira mais informações sobre o envio de dados para o Analytics em [Guia de Implantação Fluig Analytics.](https://tdn.totvs.com/pages/viewpage.action?pageId=107381593)

- Criação de registro de formulário utilizando o método *createCard*da API Pública.

- Montagem da *query* de *datasets* de forma exclusiva para banco de dados Oracle ao utilizar o Kit Intranet.

- Extração dos dados do relatório de eventos por colaborador do recurso Gamificação por período.

- Navegação entre as páginas do recurso Pontuação manual da turma de uma disciplina.

- Alteração da porta utilizada pelo Monitor de serviços fluig.Nota Obtenha mais informações em [Alterando as portas JMX Native no fluig (9999)](https://tdn.totvs.com/x/ZZ5bDQ).

- Sincronização quando há mais de 50.000 *datasets* a partir da opção **Sincronizar agora** ou pela tarefa programada no Agendador de tarefas.

- Inclusão de *link*no texto de um artigo de comunidades utilizando o navegador Google Chrome.

- Processamento do envio das tarefas atrasadas para o Analytics.

- Obtenção da página que direcionou para o *widget* ERP *Application* por meio do seguinte comando Javascript: WCMAPI.getSessionAttribute('ERPApplication_referrer').Mais detalhes Obtenha mais detalhes em [*Widgets* Aplicação ERP e Container ERP](https://tdn.totvs.com/x/Goc3D).

- Exibição do conteúdo do *widget* Slideshow, do Kit Intranet, quando ele é adicionado na página Home ao utilizar o navegador Google Chrome.

- Utilização dos *widgets* Mural de aviso e Endereço Web juntos em uma mesma página.

- Movimentação de solicitações de um processo em que o fluig consulta um *dataset* enviando alguns campos do formulário.

- Inclusão de alternativas para questão do tipo multivalorada mantendo os dados preenchidos previamente.

- Utilização do *dataset* de Turmas retornando a disciplina a qual a turma pertence.

- Retorno do código criado pelas APIs *NormalClass* e *Enrollment* do LMS.

- Gravação do valor informado para o fuso horário do usuário no LMS.

- Publicação na navegação de documentos ao utilizar um volume diferente do padrão.

- Utilização de grupos de comunidade em mecanismos de atribuição por grupos de colaborador.

- Utilização de aspas (“”) no texto do *widget* Notícias do Kit Intranet.


<!-- anchors: Atualização1.5.6-Identity, Atualização1.5.6-Arquitetura, Atualização1.5.6-LMS, samples, Atualização1.5.6-ECM, samples, samples, samples, Atualização1.5.6-BPM, samples, samples, Atualização1.5.6-Social, samples, samples, samples, Atualização1.5.6-Mobile, samples, samples, Atualização1.5.6-Novidadesemdocumentação, Atualização1.5.6-Correções -->
