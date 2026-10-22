---
title: "Atualização 1.5.11"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=244419267"
scraped_at: "2026-03-09T03:16:07.780Z"
depth: 2
anchors: 31
child_links: 61
---

# Atualização 1.5.11

![](/download/attachments/181966041/espanhol.png?version=2&modificationDate=1422631676000&api=v2) ¿Habla Español? Haga [clic aquí](https://tdn.totvs.com/pages/viewpage.action?pageId=248583704) para ver el Release Notes en Español.

![](/download/attachments/181966041/ingles.png?version=2&modificationDate=1422631693000&api=v2) Do you speak English? [Click here](https://tdn.totvs.com/display/fluigeng/Update+1.5.11) to view the Release Notes in English.

Confira abaixo as novidades na atualização 1.5.11 do fluig:

## BPM

**Assuma múltiplas tarefas em Pool em uma só tacada**

Você pediu mais produtividade e nós atendemos. Assumir a responsabilidade de solicitações enviadas para um grupo ou um papel ficou muito mais prático com a nova opção **Assumir em bloco** da Central de tarefas. Basta acessar a aba de tarefas em Pool para o grupo/papel desejado, selecionar as tarefas e assumi-las com um único clique!

![](/download/attachments/244419267/FLUIGINV-15870.gif?version=1&modificationDate=1470678110000&api=v2)

Não esqueça dos Web Services

Quer automatizar o procedimento de assumir tarefas? Utilize os métodos [*assumeProcessTask*](https://api.fluig.com/resource_WorkflowRest.html#path__2.0_workflows_assumeProcessTask.html) e [*assumeProcessTasks*](https://api.fluig.com/resource_WorkflowRest.html#path__2.0_workflows_assumeProcessTasks.html), disponíveis na fluig API.

**Facilite a publicação de anexos com o novo Mecanismo de Atribuição por Todos os Usuários**

Para** **tornar o controle de Segurança de Anexos mais simples, disponibilizamos o novo mecanismo de atribuição **Por Todos os Usuários**. Este mecanismo permite definir permissões gerais de publicação, edição e remoção de anexos em solicitações, que serão aplicadas para todos os usuários da plataforma de forma muito mais prática.

![](/download/attachments/244419267/FLUIGINV-19201.png?version=2&modificationDate=1472559282000&api=v2)

Fique ligado

O novo mecanismo de atribuição Por Todos os Usuários está disponível apenas para configuração de Segurança de Anexos.

**Utilize as mesmas configurações de segurança para complementos incluídos via Web Service**

Agora, ao incluir complementos em solicitações utilizando o método setTasksComments do *Web Service* [WokflowEngineService](https://tdn.totvs.com/pages/viewpage.action?pageId=73084007#Utiliza%C3%A7%C3%A3odeWebservices-ECMWorkflowEngineService), a plataforma irá considerar as mesmas configurações de segurança de complementos definidas nas propriedades do processo. Dessa forma, é possível permitir que mais indivíduos incluam complementos em uma solicitação via *Web Service*, tornando os processos mais dinâmicos e colaborativos.

Lembrando...

A configuração de segurança de complementos é feita por processo e o responsável do processo pode escolher o que melhor atende cada demanda na aba **Geral** das **Propriedades** do processo habilitando a opção "**Complementar solicitações?**". Nas configurações existem as opções:

- Solicitante, responsável(eis) por atividade e gestor;
- Todos os participantes do processo e gestor;
- Todos os usuário (somente quando o processo for público).

![](/download/attachments/244419267/FLUIGINV-19189.PNG?version=1&modificationDate=1472563459000&api=v2)

## Social

**Descubra as tags mais populares com o novo wigdet Nuvem de Tags**

Para que todos os usuários possam ficar por dentro dos assuntos mais discutidos nas comunidades, criamos um novo *widget:* **Nuvem de****Tags**. Este *widget* será incluído automaticamente em todas as novas comunidades criadas a partir desta atualização, e também pode ser adicionado nas páginas personalizáveis da plataforma, como a Home, por exemplo. 

As *tags* com maior popularidade são apresentadas na nuvem em tamanhos maiores e tons mais escuros. Torne o uso do fluig na sua empresa mais social e interativo com essa novidade!

- [Visualização](#)
- [Configurações](#)
- [Style Guide](#)

![](/download/attachments/244419267/FLUIGINV-17371%20%281%29.png?version=2&modificationDate=1472752627000&api=v2)

**As novas comunidades, criadas a partir desta atualização, já contarão com o novo widget por padrão.  **

![](/download/attachments/244419267/FLUIGINV-17371%20%282%29.png?version=4&modificationDate=1473075222000&api=v2)

**A Nuvem de Tags também pode ser incluída em páginas do fluig, como a Home. **

Além de estar presente como um widget padrão, a Nuvem de Tags também foi disponibilizada como um novo componente do [fluig Style Guide](https://style.fluig.com/miscellaneous.html#tagscloud), permitindo sua utilização no desenvolvimento de formulários e widgets e a personalização de formatos, tamanho e cores!

![](/download/attachments/244419267/FLUIGINV-17371%20%283%29.png?version=1&modificationDate=1472753627000&api=v2)

Dica

Para criar uma *tag*, basta adicionar um # antes da palavra desejada. [Confira o vídeo](https://www.youtube.com/watch?v=tN-SwZiauuE) no nosso canal do YouTube! #dica #fluig #tags

****

**Inclua vídeos do YouTube em publicações, e assista-os em todos os navegadores**

Através da nova API do YouTube utilizada pelo fluig, todos os navegadores homologados contarão com a habilidade de reproduzir vídeos em HTML5 diretamente da*timeline*, ou seja, chega de vídeos em Flash!

![](/download/attachments/244419267/FLUIGMAN-10223%20.png?version=1&modificationDate=1472760549000&api=v2)

Para incluir um conteúdo do YouTube, basta informar a URL do vídeo no campo de compartilhamento. O fluig irá detectá-lo e incluirá automaticamente *o player* de vídeo no momento da publicação do *post*.

## LMS

**Conheça a evolução do Catálogo de Disciplinas e Turmas**

O novo Catálogo de Disciplinas e Turmas foi concebido para tornar o gerenciamento das disciplinas, turmas, tópicos e itens de tópico muito mais ágil e prático, através de um novo visual e com uma navegação semelhante ao da estrutura de pastas e documentos do ECM.

As novas páginas do Catálogo também contam com uma busca contextual, que permite pesquisar um termo rapidamente pelo que estiver sendo apresentado em tela.

Acesse o Help Online do fluig para saber mais sobre os recursos do [Catálogo de Disciplinas e Turmas](https://tdn.totvs.com/display/HF/Disciplinas+e+turmas) e da página [Início](https://tdn.totvs.com/pages/viewpage.action?pageId=233765875) do menu Meu Aprendizado.

- [Catálogo](#)
- [Disciplina](#)
- [Turma](#)

![](/download/attachments/244419267/FLUIGINV-16107%20%281%29.PNG?version=2&modificationDate=1472750582000&api=v2)

![](/download/attachments/244419267/FLUIGINV-16107%20%282%29.PNG?version=2&modificationDate=1472577377000&api=v2)

**Ao acessar uma disciplina, as informações básicas da disciplina e todas as turmas e turmas modelo são apresentadas na mesma página.**

![](/download/attachments/244419267/FLUIGINV-16107%20%283%29.PNG?version=1&modificationDate=1472577364000&api=v2)

**As turmas apresentam todos os tópicos e itens de tópico cadastrados, além de exibir informações básicas, como a situação, a quantidade de vagas e a validade.**

Não se preocupe...

Todas as informações e ações disponíveis no catálogo antigo estarão presentes nestas novas páginas.

**Páginas de Trilhas e Treinamentos de cara nova!**

Com o objetivo de aprimorar a usabilidade e o desempenho, as páginas de execução de trilhas e treinamentos do menu Meu Aprendizado ganharam um novo *design*, muito mais rápido e super intuitivo de usar. 

Ao acessar uma trilha, os treinamentos, testes e avaliações de reação que a compõe agora são apresentados em uma única tela, visando simplificar a navegação e dar maior clareza ao aluno. O mesmo também vale para os treinamentos em andamento, que passam a centralizar os conteúdos e testes que os integram.

![](/download/attachments/244419267/FLUIGINV-15838%20%281%29.PNG?version=1&modificationDate=1472576507000&api=v2)

## Identity

**Mais segurança na redefinição de senha por imagem**

Com o objetivo de dar mais segurança e confiabilidade ao recurso de redefinição de senha por imagens do fluig Identity, a partir de agora, no mínimo 24 imagens serão exibidas na tela de seleção e, por padrão, o usuário deverá selecionar duas imagens corretamente.

O Identity também enviará um novo tipo de notificação por *e-mail*, com informações sobre o procedimento executado e o endereço IP do dispositivo, quando uma tentativa de alteração de senha ou desbloqueio for realizada através deste método.

- [Recurso de Segurança](#)
- [Alteração de senha com sucesso](#)
- [Desbloqueio com sucesso](#)
- [Alteração/Desbloqueio sem sucesso](#)

![](/download/attachments/244419267/recurso_de_seguran%C3%A7a.png?version=1&modificationDate=1473080085000&api=v2)

**Caso deseje, o administrador do contexto no fluig Identity poderá definir uma quantidade maior de imagens exibidas na validação e para seleção.**

![](/download/attachments/244419267/email_alteracao_senha_sucesso.png?version=1&modificationDate=1473073019000&api=v2)

![](/download/attachments/244419267/email_desbloqueio_sucesso.png?version=1&modificationDate=1473073020000&api=v2)

![](/download/attachments/244419267/email_recurso_seguranca_bloqueado.png?version=1&modificationDate=1473073021000&api=v2)

## Style Guide

**O seu guia, agora com muito mais estilo**

O portal de documentação do fluig Style Guide ganhou um novo visual, mais moderno, limpo e fácil de navegar, com o objetivo de tornar a experiência de uso mais fluída e agradável para os desenvolvedores da plataforma.

Este portal também está mais integrado aos demais ambientes de conhecimento do fluig, com *links* disponíveis no topo da página, para os portais de Documentação Técnica, APIs e Ajuda da plataforma.

![](/download/attachments/244419267/Style_Guide.gif?version=1&modificationDate=1472754821000&api=v2)

**Acesse style.fluig.com e confira o novo portal**

## Novidades em documentação 

- Através da documentação de [Integração fluig x Analytics](/pages/viewpage.action?pageId=244921190), obtenha uma visão geral sobre os conceitos, recursos e o funcionamento da integração do fluig com o Analytics.** **

- Criamos também uma nova documentação esclarecendo o procedimento de [criação de relatórios no fluig Analytics](https://tdn.totvs.com/x/KIOFDg) e atualizamos a documentação de [Dados para Relatórios](/pages/viewpage.action?pageId=107941778), onde você pode conferir os detalhes dos atributos de cada dataset enviado para o Analytics.

- Incluído novo item sobre a [quebra de linhas em literais](https://tdn.totvs.com/pages/viewpage.action?pageId=160105353#Tradu%C3%A7%C3%A3odeProcessos-Quebradestringslongasemtradu%C3%A7%C3%A3odeprocessos) para aprimorar a visualização de expressões traduzidas em processos.

- Nova recomendação sobre a utilização dos eventos *beforeMovementOptions* e *beforeSendValidate* no [desenvolvimento de formulários Mobile](https://tdn.totvs.com/pages/viewpage.action?pageId=146181573#Desenvolvimentodeformul%C3%A1rioMobile-Recomenda%C3%A7%C3%B5esparaprocessoscomformul%C3%A1rioMobile).

- Controle a exibição dos recursos da página *Home*, através da definição de permissões, com as informações disponíveis [nesta FAQ](https://tdn.totvs.com/x/gl8-Dg).

- Complementamos a documentação do recurso de Rascunhos no [Guia de Utilização fluig Mobile](https://tdn.totvs.com/pages/viewpage.action?pageId=107940624#GuiadeUtiliza%C3%A7%C3%A3ofluig-Mobile-Rascunhos).

- Incluído no Guia de estilos um exemplo de configuração para implementação de um *Datatable* com um serviço REST e o parâmetro *data*.

- Exemplo de implementação de zoom em *widgets* adicionado à documentação [Como criar um *Widget* que busque conteúdo](https://tdn.totvs.com/pages/viewpage.action?pageId=185735401#ComocriarumWidgetquebusqueconte%C3%BAdo-Zoom/FilterdeDataset).

- Melhorada a descrição sobre o retorno do método [*UserVO* *getUser()*](https://tdn.totvs.com/display/fluig/Layouts#Layouts-Vari%C3%A1veisDispon%C3%ADveisnoFTL) na documentação de *Layouts*.

- Para saber mais sobre permissões de *widgets*, acesse a nova página [Permissões do *widget*](https://tdn.totvs.com/pages/viewpage.action?pageId=244910403) no Help fluig.

- Exemplo de implementação de zoom composto em dataset customizado adicionado à documentação [Desenvolvimento de Datasets](https://tdn.totvs.com/display/fluig/Desenvolvimento+de+Datasets#DesenvolvimentodeDatasets-UtilizandozoomcompostoemDatasetcustomizado).

- Documentações referentes à [Autenticação Integrada](https://tdn.totvs.com/pages/viewpage.action?pageId=162170863) e [via LDAP](https://tdn.totvs.com/pages/viewpage.action?pageId=73080058) complementadas com esclarecimentos sobre a utilização de cada tipo de autenticação.

- Nova recomendação quanto à utilização de eventos de teclado na plataforma Android na página [Desenvolvimento de formulário Mobile](https://tdn.totvs.com/pages/viewpage.action?pageId=146181573#Desenvolvimentodeformul%C3%A1rioMobile-Recomenda%C3%A7%C3%B5esparaprocessoscomformul%C3%A1rioMobile).

- Complementada a documentação [Datasets internos fluig](https://tdn.totvs.com/x/SgKeCQ) com informações sobre o *processTask* - Tarefas das solicitações de processos *workflow*.

Importante!

Se você utiliza o campo *taskObservation* para alguma finalidade – como integrações – em desenvolvimentos sobre a plataforma em atualizações anteriores ao fluig 1.5, é importante conferir essa documentação.

- Saiba como identificar se um campo do tipo *checkbox* do formulário está marcado ou não, utilizando este exemplo do método *getCardValue.*

- Confira através da nova documentação, como configurar e utilizar o [Serviço de *reset* e desbloqueio de usuários do LDAP](https://tdn.totvs.com/pages/viewpage.action?pageId=224101578).

## Correções

Nessa sessão listamos alguns *bugs* que matamos nessa atualização que garantem que tudo corra bem na sua plataforma.

**Arquitetura**

- Remoção da opção “Esqueceu sua senha?” da página de *login* em ambientes com autenticação LDAP.

- Exibição do botão para expandir a janela de visualização da Política de Uso da empresa.

- Melhorado o desempenho das consultas executadas no banco de dados durante o acesso dos usuários à plataforma.

- Ortografia da mensagem exibida logo ao autenticar-se que informa sobre a atualização da plataforma.

- Marcar ou desmarcar todas as notificações por *e-mail* ou *push* nas configurações de notificações do usuário.

- Compilação do artefato do Elucidat na Central de Componentes para permitir o teste de conexão das chaves de ativação do *mashup*.

- Utilização de *widget* desenvolvido sobre a atualização 1.4.12 da plataforma após aplicar a atualização 1.5.9.

- Removida notificação enviada à dispositivos com sistema operacional Windows Phone 8.1 caso não haja mensagens a serem entregues via*Push*.

- Correção na exibição de resultados na busca global de documentos para usuários comuns.

- Ajuste no formato de data suportado pelo método */search/advanced* do serviço *Searches* da fluig API.

- Possibilidade de recuperação da *constraint* *sqlLimit* dentro de datasets customizados.

****

**BPM**

- Inclusão de múltiplos arquivos como anexos nas atividades de uma solicitação utilizando o recurso de arrastar e soltar.

- Verificação prévia dos usuários, grupos e papéis definidos em mecanismos por associação ao liberar uma nova versão de um processo.

- Ajuste no retorno do método *toString* da propriedade *createDate* do objeto *DocumentDTO* para que seja sempre utilizado o mesmo formato de hora.

- Verificação das permissões de segurança ao informar a variável *WKNumProcess* na URL de acesso ao formulário.

- Utilização de caminho relativo nas bibliotecas CSS e JavaScript do editor de formulários na plataforma *web*.

 Saiba mais...

O uso do caminho relativo será aplicado automaticamente para os novos formulários criados pelo editor *web*. Em formulário preexistentes, é preciso editar e salvar o formulário para aplicar esta correção.

- Inclusão de um alerta de confirmação ao movimentar a atividade enquanto os anexos ainda estão sendo transferidos.

- Melhorado o desempenho durante o carregamento da página Iniciar Solicitações. 

- Restauração do *template* para envio dos *e-mails* transmitidos por uma atividade do tipo [Envio de mensagem](https://tdn.totvs.com/x/1oSNBw) configurada em um processo.

- Substituição do código de matrícula pelo nome do usuário ativo como parâmetro na busca por responsáveis para as ações do processo [Listar tarefas](https://tdn.totvs.com/pages/viewpage.action?pageId=142813148).

- Movimentação do fluxo de uma solicitação, via plataforma *web*, para uma atividade destino cuja descrição tenha sido definida como “Transferir”.

- Atualização do *dataset processAttachment* após a remoção de um arquivo anexado à solicitação.

- Ordenação das categorias e processos em ordem alfabética na página de Inicialização de Solicitações do fluig Mobile para Android.

- Ajuste no retorno de consultas de *dataset*de formulários ([Tabela de banco de dados](https://tdn.totvs.com/x/phSWDg)) que filtrem apenas os registros ativos e cuja quantidade seja superior a mil registros.

- Movimentação de processos iniciados automaticamente através de uma atividade do tipo *Timer* e cuja próxima tarefa esteja configurada com o mecanismo de atribuição por usuário.

- Revisão ortográfica da mensagem de notificação por atividade movimentada via fluxo automático.

- Preservação do filtro configurado na Central de Tarefas após a movimentação em bloco de solicitações.

- Exibição do prazo de conclusão da tarefa no *e-mail* de notificação para o responsável, quando a data for atribuída através do método *setDueDate* no evento *afterTaskCreate*.

- Remoção dos mecanismos de atribuição Para um Papel e Para um Grupo das configurações de controle de segurança de anexos.

- Exibição da descrição de campos de formulário que possuem caracteres especiais na aba Formulário das propriedades de um processo.

- Exibição de solicitações em modo de visualização, sem apresentar o botão Descartar.

- Título do *e-mail* de tarefas atrasadas enviado ao gestor do processo.

- Ajuste do método *setTaskComments* da hAPI, para inclusão de dados via JavaScript em eventos  do tipo *Before.*

- Ajustada a exibição da janela de seleção de responsáveis para que não seja apresentada em atividades cujo mecanismo de atribuição tenha sido definido por campo de formulário, mas cujo campo não tenha sido preenchido.

- Exportação de processos após a inclusão do*script* em um evento intermediário condicional.

- Execução do evento de processos *validateAvailableStates* em todos os tipos de atividades do processo, além da atividade inicial.

 Saiba mais...

Confira um [exemplo](https://tdn.totvs.com/display/public/fluig/Desenvolvimento+de+Workflow#DesenvolvimentodeWorkflow-hAPI) de implementação deste evento.

- Correção na descrição de atividades, quando uma tarefa for configurada para ser enviada a uma mesma atividade via fluxo de retorno e fluxo normal.

- Gravação de informações cadastradas em formulários atrelados a processos, que tenham a opção Registro único de formulário assinalada.

- Melhorada mensagem ao tentar acessar um tarefa cancelada através do *link* de um notificação do aplicativo fluig Mobile para iPhone/iPad e Android.

 Saiba Mais...

Além de atualizar a instalação do fluig no servidor, é necessário atualizar o aplicativo para a última versão disponível na [App Store](https://itunes.apple.com/br/app/fluig/id682057015?mt=8) ou [Play Store](https://play.google.com/store/apps/details?id=br.com.fluig&hl=pt_BR).

- Exibição da Central de Tarefas para usuários que possuam tarefas pendentes em solicitações com um estado inexistente no histórico.

- Exibição do horário correto de inicialização para solicitações movimentadas e visualizadas através da Central de Tarefas do fluig Mobile (iPhone/iPad e Android).

**ECM**

- Envio de notificação para o usuário comum que solicitar o download múltiplo de documentos, alertando-o sobre a disponibilização do arquivo compactado na pasta particular.

- Verificação dos *links* para *download* referentes a documentos removidos.

- Edição de formulários restaurados pela navegação de documentos através do editor disponível na plataforma *web*.

- Ajuste no carregamento de dependências necessárias para a utilização do filtro do componente Zoom do [Guia de estilos](https://style.fluig.com/).

- Acesso à página de regras do editor de formulários *web* através do navegador Mozilla Firefox quando houverem mais de 160 regras cadastradas.

- Exibição de formulários criados através do editor *web* que contenham campos tipo *Radio* desabilitados e ocultados na mesma atividade, através da definição de regras.

- Não é aberta mais uma aba ao solicitar o d*ownload* de documentos visualizados através do fluig Viewer utilizando o navegador Internet Explorer 11.

- Substituição do ícone padrão pelo ícone cadastrado no Painel de Controle ao publicar novos documentos na navegação de documentos.

- Exibição do botão Salvar habilitado somente depois que todos os dados de um formulário foram carregados ao editá-lo a partir da navegação de documentos.

- Limitada a publicação múltipla por *drag and drop* [para até 600 arquivos](https://tdn.totvs.com/x/IAKLCQ) dentro de um ZIP para que o desempenho da plataforma não seja comprometido.

- Impressão de cópia controlada de documentos com marca d’água e que possuem páginas com orientação diferente – Retrato e Paisagem.

- Permanência do documento em *check out* quando o *check out* foi realizado a partir do fluig Connect e foram efetuadas diversas alterações e o documento foi salvo várias vezes.

- Acesso ao recurso de impressão de um documento a partir da pasta na qual ele se encontra, selecionando-o, acionando a opção **Mais** e em, seguida, **Imprimir cópia controlada**.

- Validação para não permitir alterar o Código para serviço de dados de campos de formulário do tipo *check box* após inserir regras de formulário para ele.

****

**WCM**

- Extinção do limite no número de indivíduos listados no *widget* Aniversariantes ao acionar o botão Carregar mais.

- Exibição do componente [Organization Chart](https://style.fluig.com/miscellaneous.html#fluig-orgchart) do Guia de estilos em navegadores *web* cujo *zoom* da página tenha sido definido para um valor diferente do padrão (100%).

- Melhorada a exibição quando há um grande número de sub-páginas que ficam abaixo da mesma página pai no menu lateral da plataforma, através de colunas com 8 linhas cada.

- Correção no alinhamento dos ícones abaixo da opção “Mais” no menu lateral da plataforma, quando acessada através do navegador Mozilla Firefox.

- Atualização no Widget de Slideshow corrigindo a conexão com o Instagram via OAuth2 para apresentar as imagens publicadas.

- Exibição e formatação das informações quando utilizado o componente *datatable* em um formulário relacionado a um processo do qual as solicitações serão movimentadas pelo fluig Mobile.

****

**Social**

- Ajuste automático na formatação de palavras e quebras de linha no editor de artigos para comunidades.

- Correção no recurso de alteração da imagem de exibição das conversas no fluig Messaging.

- Inclusão de indivíduos em comunidades ocultas por moderadores que não sejam administradores da plataforma.

- Extração de relatório com as respostas de formulário criado em uma comunidade após atualização do ambiente.

- Redimensionamento do logo personalizado da empresa exibido no canto superior esquerdo da página do fluig Messaging para *web*.

 Saiba mais...

Para atualizar o logo, é necessário desativar e reativar o Messaging através da aba Colaboração do Painel de Controle. Não se preocupe, as conversas e grupos não serão perdidos com este procedimento.

- Ajuste na exibição dos botões “Seguir” e “Pendente” da Central de notificações de acordo com o idioma definido para a plataforma.

- Permissão para o usuário que criou uma galeria em uma comunidade para renomeá-la ou remove-la.

- Busca por *e-mail* na listagem de usuários para os quais foi enviado convite a partir do recurso Convite de usuários existente na guia Colaboração do Painel de Controle.

- Melhorada a mensagem exibida ao usuário durante o primeiro acesso, quando parte do processo de criação ainda não tiver sido concluído pela plataforma.

- Envio de convite para novos usuários conforme o idioma definido pelo administrador da plataforma.

- Correção no *link* de compartilhamento de galerias de comunidades, que tenham sido compartilhadas em outras comunidades.

Para aplicar esta correção, é necessário compartilhar novamente as galerias afetadas.

****

**LMS**

- Verificação para evitar a vinculação de mais de uma matrícula a uma única requisição.

- Restringir a execução múltipla de uma mesma avaliação em um treinamento ou trilha.

- Exibição de conteúdos SCORM e vídeos incluídos como itens de tópico do tipo URL, por exemplo, links do YouTube, em tela cheia (exceto Internet Explorer).

 Saiba mais...

O conteúdo ou vídeo em questão deverá suportar a visualização em tela cheia para que seja reproduzido neste formato pela plataforma.

- *Download* do pacote com os conteúdos criados a partir do [Elucidat](https://tdn.totvs.com/pages/viewpage.action?pageId=221549851), em ambientes que possuam esta integração, após a correção da API pelo Elucidat.

- Exibição da aba Aprendizado na Central de Tarefas apenas quando o usuário possui tarefas de aprendizado pendentes.

- Ajuste do cálculo realizado na integração com o TOTVS Gestão Educacional e que determina a quantidade de [Dias de Validade da Matrícula na Turma](https://tdn.totvs.com/display/HF/Turma) com base na diferença entre a Data Final e a Data Inicial da turma

****

**Identity**

- Verificação dos dados de internacionalização durante o provisionamento de usuários no fluig Analytics através do fluig Identity.

- Mensagens mais claras nas janelas de redefinição de senha e de aceite de convite para ingressar em novo contexto para melhorar o *feedback* e entendimento do usuário quando for informada uma senha que não atende aos requisitos de segurança.

****

**Mobile**

- Exibição dos dados requisitados via API [(/api/public/ecm/dataset/search](https://api.fluig.com/resource_DatasetServiceRest.html#path__ecm_dataset_search.html)) em um *Datatable* do Guia de estilos quando o formulário é acessado através do fluig Mobile para Android.

O serviço [/api/public/ecm/dataset/search](https://api.fluig.com/resource_DatasetServiceRest.html#path__ecm_dataset_search.html) não carregará os dados em Modo *Offline*quando a requisição for realizada através do método POST, conforme descrito na documentação de [Desenvolvimento de formulário Mobile](https://tdn.totvs.com/pages/viewpage.action?pageId=146181573#Desenvolvimentodeformul%C3%A1rioMobile-Recomenda%C3%A7%C3%B5esparaprocessoscomformul%C3%A1rioMobile).

****


<!-- anchors: Atualização1.5.11-BPM, Atualização1.5.11-Social, nuvemdetags, nuvemdetags-1321632206, nuvemdetags-568299919, nuvemdetags--128689267, Atualização1.5.11-LMS, catálogo, catálogo--1941080180, catálogo-81174341, Atualização1.5.11-Identity, identity, identity--624599433, Atualização1.5.11-StyleGuide, Atualização1.5.11-Novidadesemdocumentação, Atualização1.5.11-Correções, expander-2011678904, expander-control-2011678904, expander-content-2011678904, expander-1841620595, expander-control-1841620595, expander-content-1841620595, expander-2110190777, expander-control-2110190777, expander-content-2110190777, expander-1127734579, expander-control-1127734579, expander-content-1127734579, expander-860269373, expander-control-860269373, expander-content-860269373 -->
