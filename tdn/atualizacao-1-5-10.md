---
title: "Atualização 1.5.10"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=239028873"
scraped_at: "2026-03-09T03:16:13.502Z"
depth: 2
anchors: 14
child_links: 68
---

# Atualização 1.5.10

![](/download/attachments/181966041/espanhol.png?version=2&modificationDate=1422631676000&api=v2) ¿Habla Español? Haga [clic aquí](https://tdn.totvs.com/pages/viewpage.action?pageId=244441065) para ver el Release Notes en Español.

![](/download/attachments/181966041/ingles.png?version=2&modificationDate=1422631693000&api=v2) Do you speak English? [Click here](https://tdn.totvs.com/display/fluigeng/Update+1.5.10) to view the Release Notes in English.

Confira abaixo as novidades na atualização 1.5.10 do fluig:

**Utiliza Microsoft SQL Server 2008?**

![](/download/attachments/239028873/SQL_Server_2008.png?version=1&modificationDate=1469213634000&api=v2)

Atenção!

A atualização 1.5.10 do fluig não é compatível com o banco de dados **Microsoft SQL Server 2008**, como avisado anteriormente (em [28/11/2014](https://suporte.totvs.com/portal/p/10098/suporte-fluig-noticias?id=107) e [22/06/2016](https://suporte.totvs.com/portal/p/10098/suporte-fluig-noticias?id=349)), portanto a inicialização da plataforma será [bloqueada](https://tdn.totvs.com/x/r7CRDg) em instalações que utilizam esta versão.

Se você utiliza SQL Server, é necessário atualizar para a versão 2012 ou superior, conforme exposto em nossa [Matriz de Portabilidade](/display/fluig/Matriz+de+Portabilidade).

Para mais detalhes, [veja o comunicado](https://suporte.totvs.com/portal/p/10098/suporte-fluig-noticias?id=367) emitido pelo time de Estratégia de Negócio fluig.

## Arquitetura

**Mais praticidade e segurança no acesso a serviços externos**

Desenvolvedores e administradores da plataforma agora contam com uma nova opção no Painel de Controle para gerenciar as configurações de acesso e segurança de serviços REST, tornando a comunicação entre a plataforma e estes recursos muito mais simples e prática.

![](/download/attachments/239028873/servi%C3%A7os_rest_painel_controle.png?version=5&modificationDate=1469544242000&api=v2)

É possível configurar a autenticação de serviços externos utilizando os protocolos *Basic*, OAuth1 e OAuth2 e testar a validade das informações cadastradas, tudo em um só lugar!

- [Cadastrar Serviço](#)
- [Testar Serviço](#)

![](/download/attachments/239028873/cadastrar_servi%C3%A7o_REST.png?version=2&modificationDate=1469218690000&api=v2)

**Cadastre o client para chamada de serviços externos.**

![](/download/attachments/239028873/testar_servi%C3%A7o.gif?version=2&modificationDate=1469218539000&api=v2)

**Após o cadastro, faça um teste de comunicação com o serviço.**

Para conhecer em detalhes o potencial dessa novidade, acesse a documentação que preparamos pra você em [Autorização para client de Serviços REST](/pages/viewpage.action?pageId=239041233).

## LMS

**Mais praticidade com matrículas automáticas em treinamentos de trilhas**

Para tornar o acesso aos treinamentos muito mais ágil, ao realizar uma matrícula em uma trilha, o aluno será automaticamente matriculado em todos os treinamentos que a compõe.

Se algum desses treinamentos possuir pré-requisitos, não se preocupe! A matrícula automática só será efetuada caso esses pré-requisitos também façam parte da trilha. Quando este não for o caso, a matrícula será realizada somente se o aluno já atender aos pré-requisitos.

Importante

Para não afetar o desempenho da plataforma, o processo de matrícula automática é realizado de forma assíncrona, ou seja, ocorrerá em segundo plano para que você não tenha que aguardar até o fim desse procedimento para continuar usufruindo do fluig. Quando estiver tudo pronto, os usuários matriculados receberão notificações de confirmação.

## BPM

**Novas regras para utilização de mensagens personalizadas**

As mensagens personalizadas de confirmação, alerta ou erro do [Guia de estilo](https://style.fluig.com/) aceitam a inclusão de códigos HTML, porém esta não é uma prática homologada pelo fluig, visto que pode causar instabilidade na movimentação de solicitações.

Para que suas movimentações fluam bem, recomendamos que seja feito uso do caractere **\n** para quebra de linha nos textos e que demais códigos HTML em mensagens personalizadas sejam removidos.

Fique ligado!

Por questões de segurança, já está planejada a remoção da interpretação de códigos HTML em mensagens personalizadas. Esta mudança deve ocorrer **em breve**, por isso recomendamos que você avalie desde já as alterações necessárias em seus desenvolvimentos.

Veja abaixo um exemplo de como adaptar a quebra de linha nas mensagens para o padrão recomendado:

- [Recomendado](#)
- [Não homologado](#)

[?](#)

| `function` `validateForm(form) {````if` `(form.getValue(``'codigo_produto'``) ==``'A8973'``) {````throw` `"Atenção! \n Este código de produto não é válido. \n Por favor informe outro código."````}``}` |
| --- |

[?](#)

| `function` `validateForm(form) {````if` `(form.getValue(``'codigo_produto'``) ==``'A8973'``) {````throw` `"Atenção! Este código de produto não é válido. Por favor informe outro código."````}``}` |
| --- |

## Style Guide

**Mais uma forma de utilizar o autocompletar**

Confira em nosso [Guia de estilo](https://style.fluig.com/) um novo exemplo de implementação do componente *Autocomplete* utilizando um *array*, sem a necessidade chamadas REST a *Web Services*.

![](/download/attachments/239028873/example_autocomplete.png?version=1&modificationDate=1468956344000&api=v2)

Mais informações

Acesse o componente [*Autocomplete*](https://style.fluig.com/javascript.html#fluig-autocomplete) no Guia de estilo e obtenha informações mais detalhadas.

## Novidades em documentação

**Conheça o novo Help Online!**

A documentação de Ajuda da plataforma agora está nas nuvens. Mas fique tranquilo, o caminho para acessá-la continua o mesmo: clique no menu Configurações no topo da página, ao lado do nome do usuário, selecione Ajuda e pronto!

Você será direcionado para o novo *Help Online*, um portal que reúne conceitos, dicas e passo a passos de utilização dos recursos da plataforma. Para acessá-lo diretamente do seu navegador, [clique aqui](https://tdn.totvs.com/x/w4f5DQ)!

![](/download/attachments/239028873/ajuda.gif?version=1&modificationDate=1469725114000&api=v2)

- Confira os passos para [iniciar os serviços do fluig](https://tdn.totvs.com/pages/viewpage.action?pageId=146181961#Instala%C3%A7%C3%A3oFluig(Instalador)-Linux-Inicializa%C3%A7%C3%A3o) em ambientes com o sistema operacional Linux.

Aproveite e conheça a documentação com [configurações sugeridas](https://tdn.totvs.com/pages/viewpage.action?pageId=242389225) para servidores Linux. 

- Guia de Uso do fluig Studio atualizado com o [conteúdo disponível](https://tdn.totvs.com/display/fluig/Fluig+Studio) no Portal do Desenvolvedor Fluig.

- Utiliza cópia controlada? Informe-se sobre esta [configuração](https://tdn.totvs.com/pages/viewpage.action?pageId=239037566), para caso ocorra alguma inconsistência na impressão dos documentos.

- Confira o novo [Guia de Atualização fluig Studio](https://tdn.totvs.com/pages/viewpage.action?pageId=240298991), criado especificamente para orientá-lo sobre como manter o plugin fluig Studio atualizado.

- Complementadas as informações sobre [propriedades dos Objetos](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos) utilizados para [envio e retorno de *Web Services*](https://tdn.totvs.com/pages/viewpage.action?pageId=73084007).

- Alerta sobre a dispensa de instalação do *Internet Information Services* (IIS) para utilização do [fluig Viewer 10.5](https://tdn.totvs.com/pages/viewpage.action?pageId=200910842#Instala%C3%A7%C3%A3oeconfigura%C3%A7%C3%A3ofluigViewernoWindows-Pr%C3%A9-requisitos) em servidores Windows.

- Atualizamos os [requisitos](https://tdn.totvs.com/pages/viewpage.action?pageId=185737338#Guiadeinstala%C3%A7%C3%A3ofluigConnect-Requisitos) para instalação e utilização do fluig Connect.

- Novos filtros para consultar todas as versões da avaliação através dos [*Datasets* de aprendizado](https://tdn.totvs.com/display/fluig/Datasets+internos+fluig#Datasetsinternosfluig-assessmentApplicationCatalogPreExamDataset-Execu%C3%A7%C3%A3odeavalia%C3%A7%C3%B5esdepr%C3%A9-teste).

- Veja o detalhamento das propriedades dos objetos *Attachment* e *ProcessAttachmentDto*utilizados em métodos de *Web Services.*

- Incluída descrição da variável *WKReplacement* e seu funcionamento no evento *displayFields.*

- Adicionados os parâmetros de requisição do [método *transfer*](https://api.fluig.com/resource_TasksRest.html#path__2.0_tasks_transfer.html)**na documentação da fluig API.

## Correções

Nessa sessão listamos alguns *bugs* que matamos nessa atualização que garantem que tudo corra bem na sua plataforma.

- Execução de alerta de confirmação JavaScript no evento *beforeSendValidate* em dispositivos iPhone/iPad.

Não deixe de conhecer as recomendações para o [desenvolvimento de formulários Mobile](https://tdn.totvs.com/pages/viewpage.action?pageId=146181573#Desenvolvimentodeformul%C3%A1rioMobile-Recomenda%C3%A7%C3%B5esparaprocessoscomformul%C3%A1rioMobile) e os [exemplos de implementação](https://tdn.totvs.com/display/fluig/Desenvolvimento+de+Workflow#DesenvolvimentodeWorkflow-Eventosparavalida%C3%A7%C3%A3odeformul%C3%A1rio) do evento *beforeSendValidate*.

- Exibição de solicitações que estão finalizadas no fluig Mobile quando o sistema operacional utilizado é o Android.

- Padronização de nomenclatura do *widget* Central de Tarefas com a página Resumo de Tarefas.

- Persistência das informações incluídas em componentes Pai x Filho nos rascunhos salvos via fluig Mobile.

- Exibição do nome da conta no fluig Messaging quando o nome da empresa é muito extenso.

- Validação do plano de assinatura do fluig Messaging na utilização com fluig Connect.

**Dica:** Confira no [Guia de instalação fluig Connect](https://tdn.totvs.com/pages/viewpage.action?pageId=185737338#Guiadeinstala%C3%A7%C3%A3ofluigConnect-ComohabilitarofluigConnectnofluig) como configurá-lo para acompanhar as conversas do Messaging a partir do *desktop*.

- Seleção automática de administrador ao executar a conversão de base TOTVS | ECM 3.0.

- Ajuste no status de usuários desabilitados importados via conversão do TOTVS | ECM 3.0.

- Exibição dos dados de avaliações anônimas em datasets de pós-teste, pré-teste e reação.

- Envio de notificação ao movimentar o fluxo de uma atividade automática para um componente *Join*.

- Mensagem aprimorada ao informar o código de um processo inexistente no método *getAvaliableStates* do *Web Service* *WorkflowEngineService*.

- Comportamento do teclado virtual ao movimentar uma solicitação aperfeiçoado em dispositivos iPhone/iPad.

- Exibição do botão Concluído na seleção de ferramentas de Anotação do fluig Messaging.

- Exibição do formulário ao iniciar subprocesso a partir de uma solicitação pai.

- Movimentação de tarefa com mecanismo de atribuição por executor de atividade após conversão da solicitação.

- Inclusão do usuário aos grupos informados como parâmetros no método *createColleagueGroup* do *Web Service ColleagueGroupService*.

- Acesso às opções de artigos na comunidade utilizando o navegador Internet Explorer 11.

- Gravação das configurações de integração com o Google *Drive* no recurso de Edição Colaborativa do Painel de Controle.

- Validação de caracteres especiais no campo *Login* no cadastro de usuários.

- Remoção de *widgets* internos da tela de Permissões do Painel de Controle.

- Configuração para abertura de imagens exibidas no *Banner Slideshow* em uma nova janela.

- Padronização do dimensionamento do *widget* Endereço Web em relação aos demais *widgets* padrão da plataforma.

- Exibição em páginas públicas do tema e logo configurados na empresa.

- Ajuste na exibição dos dados do indivíduo conectado à plataforma no rodapé das páginas.

- Utilização do *widget* Editor de Conteúdo na página Home em ambientes com fluig Messaging configurado.

- Reprodução de vídeos incluídos em artigos criados a partir de comunidades, através do aplicativo fluig Mobile para iPhone/iPad.

Fique ligado

Saiba como aplicar esta correção em artigos preexistentes acessando [esta FAQ](https://tdn.totvs.com/x/9-yFDg).

- Publicação na *timeline* de comunidade que possua o mesmo ID externo, *login* ou matrícula de um usuário.

- Exibição da versão atual de um artigo acessado a partir da página Documentos Favoritos.

- Ativação de usuários através da integração TOTVS RM x fluig LMS.

- Exibição de artigos em *widgets* via fluig Mobile em dispositivos que utilizam sistema operacional Android e iPhone/iPad.

- Associação automática de usuários criados ou importados no fluig Identity ao grupo *EVERYONE*.

- Bloqueio de acesso às publicações removidas a partir do *link* de notificação.

- Suporte à utilização de *arrays* vazios para *constraints* no método *onMobileSync*.

- Publicação de *e-mails* e pastas através do *plug-in* do fluig para Microsoft Outlook (64 bits).

Esta correção aplica-se apenas para ambientes que utilizam o Microsoft Office 64 bits.

- Corrigidas as requisições adicionais do fluig Messaging que eram realizadas ao navegar em pastas e documentos.

- Mensagem informativa ao tentar visualizar um documento e o serviço do fluig Viewer não está iniciado no servidor.

- Exclusão de pastas da navegação de documentos que contenham documentos reprovados na Lixeira.

- Contagem das solicitações abertas em cada atividade na página de Conversão de Solicitações.

- Configuração do responsável por iniciar solicitações em processos iniciados com o componentes *Timer*.

- Ajuste na exibição da lista de substitutos na Central de Tarefas para quando há uma grande quantidade de usuários.

- Autenticação para *download* de documentos através da URL: http://[servidorfluig]/webdesk/webdownload?documentId=[id_documento]&version=[versão_documento]&tenantId=[id_empresa].

- Filtro por código da solicitação ilimitado no recurso Consulta de Solicitações, reduzido para 14 caracteres.

- Consulta de solicitações cujo código contém caracteres especiais devido à conversão a partir do TOTVS | ECM 3.0.

- Exibição do nome do publicador na aba Detalhes dos documentos visualizados pelo fluig Mobile para iPhone/iPad.

- Revisão dos campos obrigatórios para consumo do método *updateColleaguewithDependencies* do *Web Service* *ECMColleagueService*.

- Exibição da última versão aprovada de um documento acessado a partir dos resultados de busca.

- Intervalo do filtro de busca de solicitações preenchido, por padrão, de 0 (zero) até o número de solicitações existentes.

- Exportação e visualização de diagramas de processos que utilizam o componente *Swimlane* do tipo *Pool*.

- Utilização do *Web Service* *ECMCustomFieldsService* para consultar os campos customizados de documentos.

- Exibição dos membros de um grupo a partir da opção “Ver usuários” no histórico de uma solicitação, quando o nome do grupo possui hífen.

- Verificação das configurações de aprovação do documento para atualização de arquivo.

- Configuração para desabilitar os alertas sonoros no aplicativo fluig Messaging para iPhone/iPad.

- Recriação da tarefa agendada para processos que utilizam o componente Timer, quando a última versão do processo é removida.

- Importação de arquivos do tipo XPDL através do fluig Studio.

- Correção do posicionamento da janela de configuração para os campos tipo Pesquisa e Número no editor de formulários.

- Exibição das imagens de perfil dos usuários e de aplicativos no fluig Identity.

- Reposicionamento da página após usuário realizar apoio em fotos incluídas nas galerias de imagens das comunidades.

- Mensagem de alerta ao tentar visualizar vídeo do YouTube através do aplicativo fluig Mobile em conexões lentas.

- Remoção da tarefa agendada criada por eventos intermediários quando a solicitação é cancelada.

- Inicialização de solicitações de um subprocesso via hAPI utilizando o método *startProcess*.

- Bloqueio do envio de solicitações para um grupo inválido utilizando o mecanismo de atribuição por campo de formulário.

- *Check-in* de documentos cujos aprovadores tenham sido removidos durante o período em *checkout*.

- Inclusão de complemento via hAPI utilizando o método *setTaskComments* na atividade inicial.

- Exibição do widget Endereço *Web* em páginas publicadas sem que tenha sido incluída a URL nas configurações.

- Exportação de solicitações finalizadas em formato XLS na página de Consulta de Solicitações.

- Exibição da listagem de usuários no Gerenciador de Matrículas após desmatricular um aluno.

- Melhorada mensagem em caso de inconsistência ao pesquisar uma grande quantidade de solicitações.

- Acesso às atividades do subprocesso através de um *link* no histórico da solicitação principal.

- Busca por usuários na movimentação de solicitações quando for utilizado um mecanismo de atribuição personalizado.

- Exportação e liberação de versão para processos que contenham atividades iniciais do tipo Condicional ligadas a um fluxo de entrada.

Saiba mais

Dentre os eventos iniciais, apenas o tipo Inicial de processo comum suporta fluxos de entrada. Os tipos Condicional, Sinal, *Timer* e Múltiplo não suportam este recurso. Obtenha mais informações sobre cada tipo em [Eventos Iniciais](/display/fluig/Eventos+Iniciais).

- Exibição atualizada das contas adicionais no fluig Messaging, após a exclusão de uma conta através da opção Gerenciamento de contas.

- Gravação das alterações realizadas via fluig Mobile em itens de tabela Pai x Filho durante a movimentação de processo.

- Execução do evento *beforeDocumentPublisher* ao recortar e colar um documento.

- Retorno de registros ativos e inativos na filtragem de *datasets* com o parâmetro *metadata#active* definido como *false*.

- Utilização do método hAPI.*setCardValue* no evento *afterTaskSave* para casos em que o formulário Pai x Filho possui um segundo formulário pai e este contém mais filhos que o primeiro.

- Verificação para desativar versões mais antigas de formulários, caso exista uma versão ativa mais nova.

- Ajuste na visualização de campos de formulários que possuem regras de exibição específicas configuradas.

- Revisão do termo utilizado na página de Configuração de regras do formulário de “Usuário Logado” para “Matrícula do Usuário Logado” a fim de tornar mais claro qual informação será preenchida.

- Melhorada a mensagem exibida quando ocorre inconsistência na autenticação através do aplicativo [fluig Mobile em ambientes HTTPS](https://tdn.totvs.com/display/fluig/Configurar+HTTPS#ConfigurarHTTPS-CertificadoDigitalMobile) devido ao certificado utilizado ser inválido.

- Verificação de expressões vazias informadas como condições de atividades automáticas.

Atenção

Caso uma expressão em branco seja adicionada às condições de uma atividade automática, a plataforma assume “*false”* como expressão definida.

- Exportação dos registros de solicitações pela Central de Tarefas quando campos do formulário são utilizados como colunas de um filtro.

- Visualização de documentos em dispositivos móveis, quando acessados através do *widget* Documentos Populares no aplicativo fluig Mobile para Android e iPhone/iPad.

- Ajuste no redirecionamento da URL gerada pela opção Compartilhar para publicações realizadas por usuários em comunidades.

- Aprimorada a mensagem de inconsistência ao tentar remover de mecanismos de atribuição personalizados.

- Retorno à solicitação ao incluir um complemento no processo, acionar o botão Enviar e fechar a tela de confirmação.

- Formatação das tarefas atrasadas exibidas na Central de Tarefas quando aplicado um filtro personalizado.

- Aprimorada a mensagem exibida em caso de acesso ao item de tópico fora do prazo de vigência da turma.

- Visualização de documentos no formato PDF através do visualizador interno de documentos da plataforma.

- Redimensionamento de imagens selecionadas para exibição no *widget* *Slideshow* do [Kit *Intranet*](/display/fluig/Kit+Intranet).

- Aprimoramento na exibição da lista de substituídos na tela Resumo de Tarefas, quando há um grande número de usuários cadastrados.

- Eliminação de tabulações (TAB) e espaços desnecessários no início e final do código do processo no momento da criação.

- Exibição do histórico de solicitação cancelada, que tenha sido movimentada para uma das atividades a partir de um *Fork*.

- Correção para tornar síncrona a ação de assumir uma atividade, evitando que usuários distintos assumam a mesma tarefa simultaneamente. Este processo pode ocasionar leve lentidão, caso muitas tarefas sejam assumidas rapidamente, mas é essencial para a correta atribuição das atividades.

Atenção

A correção acima não se aplica às instalações da plataforma em *cluster*.

- Transferência de solicitações em que a atividade está configurada com mecanismo de atribuição por campo de formulário e cujo usuário destino seja um *Pool*.

- Movimentação de solicitações acompanhadas de formulários Pai x Filho com múltiplos registros através do aplicativo fluig Mobile.

- Verificação dos documentos enviados para impressão de cópia controlada para garantir a compatibilidade do recurso com o formato do documento selecionado e ajuste na exibição da listagem de impressoras através da opção Mais → Imprimir cópia controlada.

- Exibição das repostas marcadas pelos alunos na revisão das avaliações.

- Exibição da data de solicitação ao movimentar atividades através do aplicativo fluig Mobile para iPhone/iPad.

- Visualização de um documento aberto a partir dos resultados da pesquisa global.

- Ajuste no número de chamadas ao componente *Zoom* do [Guia de estilo](https://style.fluig.com/) quando utilizado o evento *reloadZoomFilterValues*.

- Verificação de processo ativo executada antes do cancelamento de solicitações.

- Exibição na Consulta de Solicitações do último responsável por uma atividade em *Pool* ou Consenso quando a solicitação estiver cancelada.

Observação

O responsável pela atividade em *Pool* também será exibido no fluig Analytics, enquanto para atividades em consenso será mostrado o termo “*Consensus*”.

- Consulta de *datasets* em ambientes que utilizam banco de dados Oracle, desconsiderando caracteres em caixa alta.

- Utilização do atributo *downloadEnabled* na criação de pastas via [docAPI](https://tdn.totvs.com/display/fluig/Desenvolvimento+de+Workflow#DesenvolvimentodeWorkflow-docAPI).

- Restauração para versões anteriores de um registro de formulário através da navegação de documentos.

- Inclusão de mensagem sugerindo a gravação do texto informado como complemento ao salvar a solicitação.

- Cadastro de usuário no fluig Identity que utilize endereço de e-mail previamente informado como secundário em outro perfil, mas que não tenha sido confirmado.

- Aprimoramento na renderização do componente *Zoom* do Guia de estilo.

- Atribuição de atividades conjuntas via campo de formulário para múltiplos *Pools*.

Importante

Não será permitido atribuir uma atividade conjunta para mais de um *Pool* de usuários.

- Gerenciamento de requisições e recursos computacionais durante a utilização de serviços em tempo real.

- Gravação do complemento informado através do parâmetro *comments* no método *startProcess* do *Web Service**WorkflowServiceEngine* e cujo parâmetro *completeTask* seja definido como *false*.

- Limpeza de memória do sistema operacional enquanto o usuário corrige um problema apontado pela validação do formulário e então tenta movimentar a solicitação.

- Melhorada mensagem exibida em atividades automáticas quando nenhuma das condições cadastradas é atendida.

- Configuração de processo em que, após *o Join*, uma atividade automática seja seguida de um evento final.

- Confirmação de que *hostname* configurado para a plataforma tenha sido adicionado ao arquivo *hosts* do servidor. [Saiba mais](https://tdn.totvs.com/pages/viewpage.action?pageId=244420208).

- Exibição do número total de mensagens não lidas no ícone da aba de Conversas do aplicativo fluig Messaging para o sistema operacional Android.

- [Instalação do fluig Studio](https://tdn.totvs.com/pages/viewpage.action?pageId=73078179) sem o repositório adicional de dependências no TOTVS *Developer Studio* 11.3 e últimas versões do Eclipse.

- Exibição da imagem de perfil da última pessoa a apoiar, comentar ou compartilhar uma publicação no alerta da central de notificações do usuário.

- Envio de notificações *PUSH* após reinstalar o aplicativo fluig Mobile.

- Exibição do campo Impressora no Log de Cópia Controlada quando o ambiente está configurado para não utilizar *applet* ou o recurso não é suportado pelo navegador.

- Restrição do compartilhamento de páginas *Web* através do navegador em dispositivos móveis que utilizam sistema operacional Android.

- Configuração do tempo de espera de retorno do servidor durante o procedimento de exportação de processos a partir do fluig Studio. [Saiba mais](https://tdn.totvs.com/display/fluig/BPM+131+-+SocketTimeOutException+ao+exportar+processos+pelo+fluig+Studio).

- Verificação para garantir, antes da liberação do processo, que a atividade destino de um fluxo automático possua, pelo menos, mais um fluxo de entrada.

- Envio de notificações de Aprendizado e Avaliações para usuários cadastrados antes da atualização 1.5, em ambientes atualizados diretamente para 1.5.6 ou superior.

- Validação para evitar a desativação de comunidades relacionadas às Disciplinas ou Turmas de Aprendizado.

- Melhorada mensagem exibida quando ocorre falta de espaço em disco no servidor do banco de dados.

- Corrigida a verificação de atualização do fluig Connect em ambientes que possuam a atualização mais recente instalada.

- Envio de atividade com mecanismo de atribuição por campo de formulário que tenha sido salva previamente com o campo do responsável preenchido.

- Atualização do formulário pai e recriação dos registros filhos em um formulário Pai X Filho via *Web Service*, caso o processo esteja com a opção Versão única de formulário habilitada.

- Exibição dos conteúdos e avaliações do LMS em ambientes cujo endereço de acesso à plataforma inclui o número da porta.

- Exibição do tipo de servidor de cache na página de Configurações do Sistema quando for configurado o tipo Redis ou Redis Cluster.


<!-- anchors: Atualização1.5.10-Arquitetura, REST, REST-1418983874, REST-603901798, Atualização1.5.10-LMS, Atualização1.5.10-BPM, HTML, HTML--1410204225, highlighter_182612, HTML-156443214, highlighter_921949, Atualização1.5.10-StyleGuide, Atualização1.5.10-Novidadesemdocumentação, Atualização1.5.10-Correções -->
