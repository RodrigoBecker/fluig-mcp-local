---
title: "Atualização 1.5.8"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=234606895"
scraped_at: "2026-03-09T03:16:24.611Z"
depth: 2
anchors: 12
child_links: 49
---

# Atualização 1.5.8

![](/download/attachments/181966041/espanhol.png?version=2&modificationDate=1422631676000&api=v2) ¿Habla Español? Haga [clic aquí](https://tdn.totvs.com/x/NQgaDg) para ver el Release Notes en Español.

![](/download/attachments/181966041/ingles.png?version=2&modificationDate=1422631693000&api=v2) Do you speak English? [Click here](https://tdn.totvs.com/x/3wgaDg) to view the Release Notes in English.

Confira abaixo as novidades na atualização 1.5.8 do fluig:

## LMS

**Saiba quais itens estão pendentes ao finalizar um treinamento**

Quando um treinamento ainda possui itens pendentes e um aluno tentar finalizá-lo, agora é exibida uma mensagem listando quais são esses itens e o tipo de cada um, facilitando a compreensão sobre a ação que deve ser tomada.

![](/download/attachments/234606895/FLUIGMAN-1439.PNG?version=2&modificationDate=1461072156000&api=v2)

**Mais usabilidade e desempenho na aba Início do ambiente de aprendizado**

Agora a área de início de aprendizado conta com painéis separados – um para turmas em andamento e outro para treinamentos/trilhas em andamento – o que proporciona uma melhor visualização e maior desempenho na exibição dos itens de aprendizado.

![](/download/attachments/234606895/FLUIGMAN-1747.PNG?version=2&modificationDate=1461072195000&api=v2)

**Liberação de treinamentos com pré-teste pendente de correção**

O pré-teste é importante para avaliar como o aluno está antes do treinamento. Por isso normalmente ele é obrigatório antes de assistir o treinamento, mas e se no pré-teste tem uma questão dissertava? Antes ele só deixava o aluno prosseguir após a correção por um instrutor, o que poderia levar um tempo. 

Atendendo aos pedidos de nossos clientes criamos uma nova opção que faz com que o aluno possa prosseguir mesmo sem ter sua questão corrigida. Isso permite maior rapidez na execução do treinamento quando a opção “Permitir a continuidade do treinamento mesmo que o pré-teste não tenha sido corrigido” está habilitada no cadastrado do treinamento.

Fique por dentro

Quando o pré-teste **não é obrigatório**, o aluno também pode assistir e finalizar o treinamento sem que ele seja corrigido.

- [Opção para liberar treinamento com pré-teste pendente de correção](#)
- [Treinamento liberado](#)
- [Treinamento não liberado](#)

![](/download/attachments/234606895/FLUIGINV-9263-1.PNG?version=1&modificationDate=1461073514000&api=v2)

![](/download/attachments/234606895/FLUIGINV-9263-2.PNG?version=1&modificationDate=1461073570000&api=v2)

![](/download/attachments/234606895/FLUIGINV-9263-3.PNG?version=1&modificationDate=1461093539000&api=v2)

**Novos métodos para bloquear/desbloquear matrículas na API Pública**

Para você desenvolvedor na plataforma disponibilizamos na [API Pública](https://api.fluig.com) do fluig os novos métodos que permitem bloquear e desbloquear a matrícula de um aluno, podendo ser utilizados quando um aluno deseja trancar, desistir ou retornar a uma disciplina ou treinamento. Confira:

- Bloquear matrícula: [/lms/enrollment/block/{enrollmentId}](https://api.fluig.com/resource_EnrollmentServiceRest.html#path__lms_enrollment_block_-enrollmentId-.html);
- Desbloquear matrícula: [/lms/enrollment/unblock/{enrollmentId}](https://api.fluig.com/resource_EnrollmentServiceRest.html#path__lms_enrollment_unblock_-enrollmentId-.html).

**Matrícula por grupo de usuários em treinamentos, trilhas e turmas**

Está disponível na API de matrículas do LMS o novo método “*createGroupRequest”. *Esse método permite efetivar a matrícula de um grupo de usuários em uma turma, trilha ou treinamento. Mais detalhes sobre a utilização do método podem ser obtidos na [API Pública](https://api.fluig.com/resource_EnrollmentServiceRest.html#path__lms_enrollment_createGroupRequest.html).

## Social

**Escolha se o novo usuário terá o wizard de usuário**

O *wizard* de usuário é um recurso padrão, que é o primeiro passo do seu usuário dentro do fluig depois do primeiro acesso a ele e foi especialmente feito para casos onde você está utilizando o *card* Social do fluig.

Agora você administrador pode habilitar ou desabilitar o *wizard*. Para isso, como administrador fluig acesse o **Painel de Controle**, aba **Gerais**, **Parâmetros** e assinale ou não a opção **Habilita exibição do wizard de primeiro acesso do usuário**.

![](/download/attachments/234606895/FLUIGMAN-530.png?version=2&modificationDate=1461064489000&api=v2)

**Exclusão de notificações antigas**

Com o objetivo de proporcionar maior performance na Central de Notificações e liberar espaço em disco, disponibilizamos o recurso para agendamento da exclusão de notificações. Para utilizá-lo, acesse o **Painel de Controle** > **Social** > **Notificações** e configure o período e as regras para eliminação de notificações antigas de todos os usuários da plataforma.

Atenção!

Após a atualização para a 1.5.8, a plataforma irá apagar todas as notificações lidas pelos usuários com mais de seis meses de existência.

**Administrador, se você não quiser que essas notificações sejam apagadas, desabilite o recurso.**

![](/download/attachments/234606895/FLUIGINV-11367.png?version=1&modificationDate=1462296694000&api=v2)

**Artigos com vídeos no formato FLV**

Agora, além de todos os recursos que você já conhece para criar conteúdos ricos no formato de artigos em comunidades, você ainda pode utilizar vídeos no formato FLV. Bacana, não é mesmo?

![](/download/attachments/234606895/FLUIGINV-12264.PNG?version=1&modificationDate=1462359497000&api=v2)

**Mais flexibilidade na edição da imagem do perfil**

Estão disponíveis os novos eventos *beforeSocialPictureChange* e *afterSocialPictureChange* para interceptar a troca de imagem de usuários e comunidades e personalizar o comportamento.

Confira mais detalhes

Acesse o guia [Eventos sociais](/display/fluig/Eventos+Sociais#EventosSociais-beforeSocialPictureChange)e obtenha mais detalhes.

**SDK: suporte a eventos sociais**

Agora é possível consumir um serviço do componente SDK a partir de eventos de personalização social.

Saiba mais

Obtenha mais informações em [Consumo de Serviços na API Pública e no componente SDK](https://tdn.totvs.com/x/7YDbCw).

## BPM

**Movimentação de solicitações mais dinâmica**

Muitas vezes você deseja complementar aquela solicitação que você criou ou que você está acompanhando, por exemplo para citar um novo método de contato, ou alertar o responsável que o processo precisa avançar mais rápido. Agora no fluig a comunicação em processos ficou mais dinâmica e instantânea, sendo que independentemente da atividade do processo será possível deixar seu texto ou adicionar novos anexos na solicitação.

Essa configuração é feita por processo e o responsável do processo pode escolher o que melhor atende cada demanda na aba **Geral** das **Propriedades** do processo habilitando a opção "**Complementar solicitações?**". Nas configurações existem as opções:

- Solicitante, responsável(eis) por atividade e gestor;
- Todos os participantes do processo e gestor;
- Todos os usuário (somente quando o processo for público).

Não deixe de confirmar na aba **Acompanhamento** quais notificações serão geradas ao criar uma nova mensagem como complemento do processo.

- [Habilitar e configurar complementos em solicitações](#)
- [Complementos no histórico da solicitação](#)

![](/download/attachments/234606895/FLUIGINV-13221.PNG?version=1&modificationDate=1461084821000&api=v2)

![](/download/attachments/234606895/FLUIGINV-13221-2.PNG?version=1&modificationDate=1461084838000&api=v2)

![](/download/attachments/234606895/FLUIGINV-13221-3.PNG?version=1&modificationDate=1461091432000&api=v2)

**Exportação fácil de processos no fluig**

Muitas vezes você quer compartilhar rapidamente um processo que você criou no fluig. Agora você administrador do fluig pode exportar processos diretamente pelo seu navegador. Na janela de configuração de processos, basta selecionar o processo a ser exportado e acionar a nova opção **Exportar**. Serão exportados:

- o desenho e configuração do processo;
- seus subprocessos (e os subprocessos destes subprocessos);
- formulários associados a qualquer um destes processos;
- todos os eventos de processo e de formulário;
- *datasets* associados a estes formulários informado no cadastro.

Todos esses artefatos são compactados em arquivo ZIP que também pode ser importado no fluig Studio: clicando com o botão direito na navegação de projetos, em **Importar**, opção **Importar um processo**, onde é possível importar dados diretamente em um projeto já existente ou criar um novo projeto.

Atendimento mais ágil

Caso você precise de ajuda no seu processo, seja para enviar para seu desenvolvedor fluig ou para enviar para o atendimento do fluig, utilize esse ZIP para acelerar o entendimento do processo.

- [Seleção do processo](#)
- [Arquivo gerado](#)
- [Importação no fluig Studio](#)

![](/download/attachments/234606895/FLUIGINV-13380.PNG?version=2&modificationDate=1461761374000&api=v2)

 ![](/download/attachments/234606895/FLUIGINV-13380-2.PNG?version=1&modificationDate=1461761461000&api=v2)

 ![](/download/attachments/234606895/FLUIGINV-13380-3.PNG?version=2&modificationDate=1461761622000&api=v2)

## ECM

**fluig Viewer 11 disponível!**

Já está disponível o instalador da nova atualização do fluig Viewer 11. Essa atualização traz melhorias significativas na visualização de arquivos de *e-mail* do tipo EML e MSG e, também, documentos dos tipos DOC, DOCX, XLS e XLSX. Também foram efetuadas grandes evoluções de desempenho.

Fique atento!

Para usufruir de todas as novidades do fluig Viewer 11, é necessário desinstalar a versão antiga e realizar a instalação desta nova.

Mais detalhes você encontra em [Sobre o fluig Viewer](https://tdn.totvs.com/x/8af5Cw).

## Arquitetura

**Log por usuário - encontre aquele erro mais facilmente**

Quanto maior o uso da plataforma, mais informações são registradas em seu *log*, o que torna difícil saber qual usuário efetuou a ação que acarretou em um erro.

Para facilitar a vida do administrador do fluig, agora é possível acompanhar as ações de usuários específicos a partir de um arquivo de *log* separado contendo tudo que aquele usuário fez depois da sua próxima autenticação. Depois de habilitar é possível efetuar o *download*deste arquivo de *log* nessa mesma página, bem como do arquivo de *log* completo do servidor.

Por isso, agora quando um usuário relatar que está com problemas e você está com dúvidas do que está acontecendo, ative essa nova opção e acompanhe todas as informações que vão te auxiliar a fazer o diagnóstico de situações que estejam prejudicando o uso da plataforma para esse usuário. Para conferir, acesse **Painel de Controle** > **Gerais** > **Controle de*****log**.*

Os usuários da plataforma também podem habilitar a geração de *log* para si, ativando o recurso no menu **Configurações** > **Editar perfil** > **Dados adicionais**.**

Fique por dentro

Quando o administrador habilita o *log* para o usuário, o log será criado apenas após a próxima autenticação desse usuário na plataforma. Por isso, solicite para seu usuário que ele faça *logoff* e *login* novamente para gravar tudo o que está acontecendo. O administrador também pode configurar o tempo de expiração para o *log* do usuário.

Já quando o próprio usuário habilita seu *log*, ele é válido até as 23:59 do dia em foi habilitado e começa a ser gerado logo após a habilitação.

- [Log habilitado pelo administrador](#)
- [Log habilitado pelo usuário](#)

![](/download/attachments/234606895/FLUIGINV-13485.PNG?version=1&modificationDate=1461676818000&api=v2)

![](/download/attachments/234606895/FLUIGINV-13485-2.png?version=3&modificationDate=1462280901000&api=v2)

## Mobile

**Widgets do Kit Intranet no fluig Mobile**

Agora você pode visualizar os *widgets* do componente Kit Intranet no fluig Mobile, podendo usufruir da mesma experiência que já conhece no fluig.

Saiba mais

O Kit Intranet está disponível na [fluig Store](http://www.fluigstore.com/). Mais informações sobre ele podem ser obtidas [aqui](https://tdn.totvs.com/x/nbBICw).

![](/download/attachments/234606895/FLUIGINV-14702.png?version=1&modificationDate=1462297191000&api=v2)

## Novidades em documentação

- Atualização dos pré-requisitos em [Sobre o fluig Viewer](https://tdn.totvs.com/x/8af5Cw).
- Atualização dos atributos em [/wcm/location/associateUsers](https://api.fluig.com/resource_LocationServiceRest.html#path__wcm_location_associateUsers.html) e [/wcm/location/associateUsersByGroup](https://api.fluig.com/resource_LocationServiceRest.html#path__wcm_location_associateUsersByGroup.html) na API Pública do fluig.
- Atualizadas informações sobre a propriedade “*AutomaticTasks*” em [Desenvolvimento de Workflow](https://tdn.totvs.com/x/widbB).
- Atualização de informações para o *widget*Endereço Web na página de *Widgets*.
- Adição dos eventos *beforeSocialPictureChange* e *afterSocialPictureChange*- [Eventos de Personalização Social](/pages/viewpage.action?pageId=172296472).
- Integração do Microsoft Active Directory utilizando o fluig Identity SmartSync - [Configuração do AD.](/pages/viewpage.action?pageId=201739046)
- Consumo de um serviço do componente SDK agora também está disponível para eventos javascript de personalização social -[Consumo de Serviços na API Pública e no componente SDK.](/pages/viewpage.action?pageId=198934765)
- Servidor de autenticação CAS - [Autenticação CAS](/pages/viewpage.action?pageId=235337765).
- Atualizada técnica de personalização favicon -****[Personalização de favicon](/pages/viewpage.action?pageId=187831456).****

## Correções

Nessa sessão listamos alguns *bugs* que matamos nessa atualização que garantem que tudo corra bem na sua plataforma.

- Exibição do tempo decorrido após a execução de atividades que pertencem a processos AdHoc no histórico da solicitação.

- Visualização dos conteúdos de treinamentos ou disciplinas quando o aluno está com a matrícula bloqueada.

- Tarefa em *pool* sendo assumida por dois usuários simultaneamente.

- Utilização do método “/api/public/2.0/cards/create” quando o usuário tem a matrícula e o *login*diferentes.

- Exibição da data e hora nas quais se iniciou o processamento de sincronização de *datasets* *off-line* como sendo a data da última sincronização, evitando que os dados alterados entre o início e o fim do processamento não sejam desconsiderados na próxima sincronização.

- Ordenação de disciplinas e usuários matriculados pelo seu nome no recurso Gerenciamento de matrículas, do menu Matrículas, no ambiente de aprendizado.

- Utilização da regra para desabilitar um campo de formulário de um processo na primeira atividade quando o formulário é criado no próprio editor do fluig.

- Execução do evento “*beforeStateEntry*” antes da execução de condição das atividades automáticas de processos.

- Utilização do caractere “%” na montagem de uma URL em um *zoom* de formulário.

- Execução de avaliações ao utilizar o navegador Internet Explorer na versão 9.

- Exibição de artigos compartilhados em comunidades na *timeline* dos usuários que participam delas.

- Publicação de componentes – *widgets* ou *layouts* – a partir da Central de Componentes ou através do fluig Studio.

- Indisponibilidade da *timeline* de comunidades para seus membros depois de atualizar o fluig para a 1.5.7.

- Exibição de usuários inativos no *widget*Aniversariantes do Kit Intranet quando há integração com o TOTVS RM.

- Utilização de turmas modelos em turmas de disciplinas.

- Exibição de dados no *template* do *e-mail* que é enviado ao usuário quando ele utiliza o recurso “Esqueceu sua senha?”.

- Publicação de documentos em uma pasta que está no terceiro nível de pastas com aprovação e herda a aprovação da pasta pai.

- Alterado o campo de “Digite um novo nome para documento” para “Digite uma nova descrição para o documento” na opção "Renomear", disponível para um documento publicado na Navegação de Documentos.

- Utilização do método “*updateCardData*” do serviço “*ECMCardService*” quando o formulário de um processo possui validação de dados.

- Exportação das tarefas que estão em *pool* a partir da Central de Tarefas.

- Melhoria de desempenho ao navegar pelo fluig quando é utilizado o *widget Banner slide show* do Kit Intranet.

- Possibilidade de retirar a permissão de visualização do *widget* Dados gerais na edição do perfil para usuários comuns.

- Possibilidade de atribuir as ações “Gerenciar Turma por usuários" e "Gerenciar Turma por Tópicos" da permissão "Gerência de Turmas" a usuários comuns.

- Utilização de campos adicionais – cadastrados no Painel de Controle, Aprendizado, Campos adicionais – em itens de tópicos de turmas.

- Visualização do histórico de execução de avaliações ao efetuar a busca por um executor específico.

- Utilização dos recursos de aprendizado quando o usuário possui um *login* que inicia com letra maiúscula e as demais são minúsculas e, ao autenticar-se, ele utiliza todas as letras maiúsculas ou todas minúsculas.

- Geração do relatório de respostas de formulários que possuem perguntas idênticas publicados em comunidades.

- Alteração do nome de uma comunidade por um moderador quando outro moderador editou a página sem publicá-la, mantendo-a como rascunho pendente.

- Exibição de ações sociais – apoiar e comentar – em publicações na*timeline* de usuários que se seguem.

- Associação de gatilho a uma conquista no recurso Gamificação.

- Utilização de grupos que possuem o caractere “/” em seu nome na segurança de pastas da navegação de documentos.

- Consumo de licenças do fluig considerando o usuário wcmAdmin indevidamente.

- Complementadas as informações existentes na API Pública para os seguintes serviços:[/2.0/communities/addUser/{communityId}](https://api.fluig.com/resource_CommunityRest.html);
- [/2.0/groups/addUsers/{groupCode}](https://api.fluig.com/resource_GroupRest.html#path__2.0_groups_addUsers_-groupCode-.html).

- Alterado o tempo que a plataforma espera após cada letra digitada pelo usuário em um campo de busca antes de, efetivamente, executar a busca.

- Efetivação de matrícula em itens de aprendizado quando há integração com o TOTVS RM.

- Verificação de matrícula ativa de aluno em alguma turma de uma disciplina.

- Emissão de notificação para os membros ao compartilhar um documento em uma comunidade.

- Edição de conteúdo a partir do código-fonte HTML no *widget* Editor de conteúdo.

- Definição de título para *widgets* quando utilizado o *layout* de página com abas.

- Exclusão da data da última sincronização de um *dataset off-line* ao eliminar seus dados.

- Utilização de *getValue* e do objeto *OAuthUtil* nos eventos *onNotify* de processos.

- Removida a opção de *upload* de imagem local do *widget* Editor de conteúdo.

- Exibição do *auto complete* ao movimentar solicitações de um processo quando utilizado o navegador Mozilla Firefox.

- Utilização de idiomas diferentes quando o mesmo usuário acessa o fluig a partir de um navegador e do aplicativo móvel simultaneamente.

- Atribuição do valor “*null*” nos dados adicionais de um usuário.

- Movimentação de solicitação de um processo em que a primeira atividade está configurada com o mecanismo de atribuição por campo de formulário a partir do fluig Mobile.

- Desempenho ao utilizar os recursos de aluno do ambiente de aprendizado e na execução de avaliações.

- Inicialização de solicitações em que a segunda atividade do processo é automática após efetuar a atualização do fluig para a 1.5.7.

- Movimentação de solicitações que utilizam o mecanismo de atribuição por campo de formulário no fluig Mobile.

- Utilização do recurso "Esqueci minha senha" do fluig Identity.

- Exibição do *layout* da tela de inicialização de solicitações ao utilizar o navegador Internet Explorer 9.

- Utilização de “*getvalue*” e “*setvalue*” em eventos de formulário na primeira atividade de um processo.

- Resolução de condições de atividades automáticas considerando os dados do registro de formulário quando o processo está configurado para ser salvo em um único registro.

- Personalização do ícone exibido no navegador Internet Explorer.Documentação atualizada Acesse [Personalização de favicon](https://tdn.totvs.com/x/oBQyCw) e confira as atualizações.

- Inicialização de solicitações por *Webservice* quando o processo possui uma atividade com mecanismo de atribuição para usuário, para grupo ou para papel.

- Verificação de compatibilidade e disponibilidade de servidores ao iniciar o fluig Studio quando a versão do fluig e do fluig Studio são diferentes.

- Exibição dos filtros da Central de Tarefas ao movimentar solicitações com um usuário substituto.

- Desempenho das requisições de matrícula e possibilidade de matricular um número maior de alunos simultaneamente.

- Retirados os *widgets* e páginas que pertencem ao Painel de Controle da listagem de itens que podem ter permissões específicas no recurso Permissões.

- Edição do nome de turmas de aprendizado quando são utilizados mais de 61 caracteres.

- Exclusão de pastas que possuem documentos que necessitam de aprovação e foram reprovados.

- Exclusão de galerias e seus conteúdos em comunidades.

- Exclusão de usuários do AD mantendo os dados do usuário na lista de usuários pendentes de aceite ou usuários rejeitados no Identity.

- Movimentação de solicitações quando o formulário do tipo Pai x Filho do processo possui campos nulos.

- Incluída coluna que exibe as notas parciais no resultado do *dataset* “*enrollmentDataset*”.

- Envio de notificação de publicação de um documento que pertence a um assunto de interesse do usuário.

- Exportação de processos que possuem o componente Documentos (BPMN 2.0) do fluig Studio para o fluig.

- *Deploy* de artefatos múltiplas vezes quando a pasta “apps” está compartilhada com mais de uma instância do fluig.

- Emissão de notificações mesmo após encerrar a sessão no fluig Mobile quando é utilizado o sistema operacional Windows Phone na versão 8.1.

- Utilização da função “*showCamera*” em dispositivos iOS.

- Valor do campo “*Dataset*” ao trocar o formulário de um processo a partir do fluig Studio.

- Quebra de linha em textos inseridos no *widget* Editor de conteúdo.

- Inclusão de vários grupos definidos como obrigatórios no cadastro de assuntos no Painel de Controle.

- Edição da página Home quando ela possui um *widget*desenvolvido sobre a plataforma.

- Movimentação de solicitação quando a próxima atividade foi previamente definida para um usuário ou um grupo sem a necessidade de selecionar esse usuário ou grupo no fluig Mobile.

- Edição de dados de um usuário que não possui uma definição de idioma em seu cadastro.

- Inicialização de solicitação quando o processo possui segurança de anexo e mecanismo Executor atividade na primeira atividade.

- Atualização do fluig da 1.4.13 para a 1.5.0 quando é utilizado o banco de dados SQL Server 2008 R2.

- Exibição das questões de uma avaliação ao consultar suas estatísticas.

- Dimensionamento de imagens por percentual (%) no *widget*Edição de conteúdo.

- Tempo de *timeout* ao movimentar solicitações a partir do fluig Mobile.

- Exibição de imagem anexada a um processo por desenvolvimento Javascript em formulários HTML ao utilizar o fluig Mobile.

- Ajuste da nota dos itens de aprendizado ao anular a versão de uma questão quando a opção “Permitir que as avaliações sofram apenas aumento da nota (nunca alterar a nota para baixo)” estiver assinalada.

- Emissão de notificações ao movimentar a solicitação de um processo que possui um gestor e está configurado para notifica-lo.

- Exclusão de anexos de solicitações de um processo que permite retorná-las para o solicitante.

- Ajustes para melhorar o desempenho de utilização da Central de Tarefas com tarefas de aprendizado.

- Exibição de resultados parciais ao efetuar uma busca em um campo de formulário de um processo quando utilizado o componente “*filterValues*”.

- Exportação de processos que possuem uma atividade do tipo Timer configurada para repetir todos os dias.

- Redirecionamento da página ao encerrar uma avaliação de um treinamento ou trilha.

- Consulta de agendamentos de tarefas após realizar uma busca que não encontra nenhum registro correspondente.

- Movimentação de solicitações que possuem um arquivo vazio como anexo ao utilizar o método “*docAPI.copyDocumentToUploadArea*” em eventos do processo.

- Finalização de um treinamento que pertence a uma trilha após se rematricular na trilha para executá-la novamente.

- Exibição dos valores de notas de avaliação no *dataset* “*assessmentApplicationGenericDataset*”.

- Exibição de telas do tipo “modal” nas configurações do processo quando acessada a partir de *notebooks*.

- Duplicação de publicações na *timeline* ao rolar a página.

- Transferência de pendências entre usuários quando o número de solicitações é elevado – mais de 1000.

- Utilização do método “*getHistories*” do *webservice* “*WorkflowEngineService*” quando o *login* e a matrícula dos usuários são diferentes.

- Criação de registros de formulário de um processo quando ele possui a opção Registro único de formulário assinalada.


<!-- anchors: Atualização1.5.8-LMS, Opçãoparaliberarotreinamentocompré-testependentedecorreção, Atualização1.5.8-Social, Atualização1.5.8-BPM, Opçãoparaliberarotreinamentocompré-testependentedecorreção, Opçãoparaliberarotreinamentocompré-testependentedecorreção, Atualização1.5.8-ECM, Atualização1.5.8-Arquitetura, Opçãoparaliberarotreinamentocompré-testependentedecorreção, Atualização1.5.8-Mobile, Atualização1.5.8-Novidadesemdocumentação, Atualização1.5.8-Correções -->
