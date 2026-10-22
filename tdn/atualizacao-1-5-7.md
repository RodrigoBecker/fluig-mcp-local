---
title: "Atualização 1.5.7"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=224125350"
scraped_at: "2026-03-09T03:16:36.088Z"
depth: 2
anchors: 18
child_links: 56
---

# Atualização 1.5.7

![](/download/attachments/181966041/espanhol.png?version=2&modificationDate=1422631676000&api=v2) ¿Habla Español? Haga clic [aquí](https://tdn.totvs.com/x/svP7DQ) para ver el Release Notes en Español.

![](/download/attachments/181966041/ingles.png?version=2&modificationDate=1422631693000&api=v2) Do you speak English? Click [here](https://tdn.totvs.com/x/u-37DQ) to view the Release Notes in English.

Confira abaixo as novidades na atualização 1.5.7 do fluig:

Atenção

Se você utiliza o***componente Edição Colaborativa, Gamification, SMS***ou***desenvolveu um componente***utilizando a documentação de [Login Único](/pages/viewpage.action?pageId=185757267) ou [Desenvolvimento de widgets e serviços do fluig](/pages/viewpage.action?pageId=147818425)  atualize para o fluig 1.5.7 - Atualização antecipada #1 ou superior.

## Identity

**Mais segurança com captcha**

Para garantir mais segurança na sua empresa, adicionamos a esta nova atualização do Identity o recurso que bloqueia a automação de formulários para as rotinas de autenticação e alteração de senha.

Para habilitar o recurso de *captcha *na tela de autenticação, basta assinalar a opção “Habilitar segurança por *captcha*” nas Configurações da empresa. na aba Segurança.

Para redefinir a senha é sempre obrigatório informar o *captcha*, tendo em vista que os ataques podem vir de outro contexto para um determinado *e-mail*. Desta forma, ao informar o *e-mail* da conta, é obrigatório informar o *captcha* para receber o *e-mail* de redefinição de senha.

- [Habilitando captcha na autenticação](#)
- [Captcha na redefinição de senha](#)

![](/download/attachments/224125350/FLUIGINV-12695.png?version=1&modificationDate=1458214010000&api=v2)

![](/download/attachments/224125350/FLUIGINV-12695-2.png?version=1&modificationDate=1458214022000&api=v2)

## BPM

**Consulte responsáveis no processo**

Muitas vezes você precisa saber com antecedência quem será o responsável em um processo. 

Pensando nisso e atendendo a necessidades de nossos clientes agora desde a inicialização do processo é possível consultar os responsáveis pelas próximas atividades.

Isso mesmo, a ferramenta de processos do fluig está cada vez melhor!

Para saber quem é o responsável por uma atividade basta clicar em **Detalhes** em uma solicitação e, em seguida, clicar na atividade da qual você deseja ver mais detalhes. Isso inclui tanto a inicialização como a movimentação do processo. Caso o responsável seja um grupo ou papel, basta clicar nele para saber quem são as pessoas que pertencem a esse grupo ou papel.

- [Detalhes da atividade](#)
- [Membros do grupo responsável](#)

![](/download/attachments/224125350/FLUIGINV-9560.PNG?version=1&modificationDate=1457709235000&api=v2)

![](/download/attachments/224125350/FLUIGINV-9560-2.PNG?version=1&modificationDate=1457709277000&api=v2)

**Saiba quando uma solicitação foi iniciada e finalizada**

Agora é possível saber a data de início de uma solicitação na Central de Tarefas - na visualização de atividades - e também na consulta de solicitações, juntamente com a data fim quando a solicitação está finalizada ou cancelada.

- [Listagem de solicitações](#)
- [Consulta de solicitações](#)

![](/download/attachments/224125350/FLUIGINV-9606.PNG?version=2&modificationDate=1458056921000&api=v2)

![](/download/attachments/224125350/FLUIGINV-9606-2.PNG?version=3&modificationDate=1458057404000&api=v2)

![](/download/attachments/224125350/FLUIGINV-9606-3.PNG?version=2&modificationDate=1458057420000&api=v2)

![](/download/attachments/224125350/FLUIGINV-9606-4.PNG?version=1&modificationDate=1458057445000&api=v2)

**Movimente múltiplas solicitações com confirmação de senha em uma única ação**

Agora é possível movimentar múltiplas solicitações que estejam em atividades que requerem confirmação de senha.

Autentique-se no fluig, acesse a Central de tarefas > Tarefas a concluir > selecione as solicitações que requerem senha e que deseja movimentar e, no menu superior da tabela, acione a opção Movimentar em bloco e usufrua de mais essa facilidade!

![](/download/attachments/224125350/FLUIGINV-9661.JPG?version=1&modificationDate=1457981624000&api=v2)

**Novos métodos de proteção de campos de formulário**

Criamos novos métodos que permitem proteger os campos desabilitados via *displayFields* em formulários.

Ao proteger um campo desabilitado, ele não terá o seu valor alterado no registro de formulário. Para isso, informe o valor “*true”* para o parâmetro “*protect*” do método *setEnabled.*

Também é possível utilizar o método *setEnhancedSecurityHiddenInputs* que, quando definido com o valor “*true”*, todos os campos desabilitados pelo método *setEnabled* serão protegidos e seus valores não serão salvos no registro de formulário.

Mais detalhes

Confira mais detalhes em [Desenvolvimento de formulários](https://tdn.totvs.com/pages/viewpage.action?pageId=75270483#DesenvolvimentodeFormulários-FormController).

## ECM

**Verifique as propriedades personalizadas do documento**

Agora, todos os usuários que possuem, pelo menos, permissão de leitura sobre o documento podem verificar as propriedades personalizadas que foram cadastradas e definidas para serem exibidas em todos os documentos ao visualizá-los.

![](/download/attachments/224125350/metadados2.PNG?version=1&modificationDate=1459861104000&api=v2)   ![](/download/attachments/224125350/metadados.PNG?version=2&modificationDate=1459861157000&api=v2)

## Social

**Altere o nome e a imagem de conversas em grupo sempre que desejar**

Agora o Messaging na Web permite alterar a imagem e o nome das conversas em grupo.

É o fluig trabalhando para que você tenha sempre a mesma experiência, tanto na Web quanto em dispositivos móveis. Legal, hein?

- [Alterar imagem do grupo](#)
- [Alterar nome do grupo](#)
- [Resultado](#)

![](/download/attachments/224125350/FLUIGINV-8228.png?version=1&modificationDate=1457958287000&api=v2)

 ![](/download/attachments/224125350/FLUIGINV-8228-2.png?version=1&modificationDate=1457958319000&api=v2)

  ![](/download/attachments/224125350/FLUIGINV-8228-3.png?version=1&modificationDate=1457958473000&api=v2)

****

**Desative as notificações de uma conversa**

Agora você pode desativar as notificações *push* e na área de trabalho de uma conversa individual ou em grupo sempre que desejar. Você ainda receberá as mensagens enviadas, mas não receberá notificação quando as mensagens são recebidas, tanto na Web como no Mobile.

![](/download/attachments/224125350/FLUIGINV-8215.PNG?version=2&modificationDate=1457976688000&api=v2)

**Conversa e reunião vinculadas no Messaging**

Quando você inicia uma reunião a partir de um grupo de conversa no Messaging, a reunião e a conversa agora ficam vinculadas uma a outra. Na conversa, é possível visualizar as informações da reunião, entrar na reunião e, também, visualizar a gravação da reunião depois que ela é finalizada.

- [Conversa e reunião vinculadas](#)
- [Informações da reunião na conversa](#)
- [Reunião encerrada](#)
- [Gravação da reunião](#)

![](/download/attachments/224125350/FLUIGINV-8182.PNG?version=1&modificationDate=1457971341000&api=v2)

 ![](/download/attachments/224125350/FLUIGINV-8182-2.PNG?version=1&modificationDate=1457971424000&api=v2)

![](/download/attachments/224125350/FLUIGINV-8182-3.PNG?version=1&modificationDate=1457971467000&api=v2)

![](/download/attachments/224125350/FLUIGINV-8182-4.PNG?version=1&modificationDate=1458037073000&api=v2)

## WCM

**Precisa de ajuda com os widgets?**

Fique tranquilo. Agora os *widgets* Consulta rápida, Acesso centralizado e Analytics possuem um ícone de ajuda em seu cabeçalho. Sempre que você precisar, basta clicar no ícone e contar com toda a estrutura de ajuda e documentação de uso do fluig para sanar suas dúvidas.

- [Consulta rápida](#)
- [Analytics](#)
- [Acesso centralizado](#)

![](/download/attachments/224125350/FLUIGINV-8204.PNG?version=1&modificationDate=1458558323000&api=v2)

 ![](/download/attachments/224125350/FLUIGINV-8204-2.png?version=1&modificationDate=1458558493000&api=v2)

![](/download/attachments/224125350/FLUIGINV-8204-3.png?version=1&modificationDate=1458558361000&api=v2)

## Mobile

**Acesse o conteúdo adicional de uma comunidade de forma fácil e rápida**

Antes você colocava em sua comunidade diversos *widgets* que davam acesso a mais informações sobre o que estava acontecendo na comunidade.

Nessa nova atualização do App do fluig você pode acessar os gráfico de indicadores de um projeto (usando o fluig Analytics), a lista de aniversariantes (do Kit Intranet) ou qualquer outro conteúdo disponível por meio de *widgets*.

Para acessar os *widgets* da sua comunidade, logo antes das publicações você verá uma opção "Visualizar conteúdo adicional", bem como em qualquer lugar da comunidade acessando o menu lateral para visualizar o "Conteúdo adicional".

Não perca tempo, adicione novos recursos às suas comunidades no fluig Mobile.

![](/download/attachments/224125350/FLUIGINV-10875.png?version=1&modificationDate=1458128548000&api=v2)![](/download/attachments/224125350/FLUIGINV-10875-3.png?version=1&modificationDate=1458128550000&api=v2)![](/download/attachments/224125350/FLUIGINV-10875-2.png?version=1&modificationDate=1458128549000&api=v2)

**Que tal visualizar a página Home no fluig Mobile?**

Agora, a página Home pode ser acessada pelo item **Home** do menu principal.

![](/download/attachments/221556052/FLUIGINV-3139.png?version=2&modificationDate=1455198558000&api=v2)

Observação

O item Home só aparecerá no menu principal se a página possuir *widgets* preparados para a exibição no fluig Mobile. Para mais informações acesse [Suporte a páginas e *widgets* no aplicativo Mobile](https://tdn.totvs.com/x/UJ5bDQ).

****

**Messaging muito mais rápido!**

Sua produtividade vai aumentar ainda mais, pois o Messaging está com maior desempenho. Deixamos o aplicativo 75% mais rápido! Excelente notícia, não é mesmo? Atualize para versão 1.5.5.6 do Android e 1.5.48 do iOS e confira!

![](/download/attachments/224125350/FLUIGINV-10883.png?version=3&modificationDate=1458135822000&api=v2)

**Trabalhe com o XMLRPC de forma única na Web e no Mobile**

Já que temos um formulário único, nada melhor do que ter XMLRPC único também!

Agora você pode desenvolver seu formulário utilizando o XMLRPC único, ou seja, o esforço para desenvolver para o Mobile e para a Web é o mesmo. Fantástico, hein?

Fique por dentro

Confira mais informações em [Desenvolvimento de formulário Mobile](https://tdn.totvs.com/pages/viewpage.action?pageId=146181573#DesenvolvimentodeformulárioMobile-ConsumodeDatasetsviaxmlRPC).

**Mude a tela inicial do fluig Mobile de acordo com a sua necessidade**

Nós sabemos que cada aplicação do fluig é diferente em cada empresa. Pensando nisso, agora o administrador tem mais opções para configurar a tela inicial no Mobile.

Você pode configurar sua tela inicial com:

- Central de Tarefas;
- Tela de inicialização de processos;
- Social;
- Documentos;
- Comunidade específica;
- Página Específica.

Assim o administrador pode colocar na tela inicial do App uma página com a agenda de eventos da empresa, aquela comunidade que está super movimentada ou todos os documentos que são muito acessados pelos usuários no celular.

Observação

Se o administrador não configurou essa opção e na *Home* existem *widgets* para o Mobile, então a *Home* passará a ser a tela inicial do aplicativo. Caso contrário, fica do jeito que sempre foi, abrindo a Central de Tarefas como tela inicial no aplicativo fluig Mobile.

Mais detalhes

Obtenha mais detalhes em [Personalização da tela inicial do fluig Mobile](https://tdn.totvs.com/x/DJHbCw).

![](/download/attachments/224125350/FLUIGINV-10904.png?version=2&modificationDate=1458135856000&api=v2)

![](/download/attachments/224125350/FLUIGINV-10904-2.png?version=2&modificationDate=1458135887000&api=v2)

**Recuperação de senha no fluig Mobile**

Esqueceu sua senha e só tem um dispositivo móvel em mãos? Não se preocupe, agora você pode recuperar seu acesso ao fluig quando há integração ativa com o Identity a partir do fluig Mobile.

![](/download/attachments/224125350/FLUIGINV-12571.png?version=2&modificationDate=1458758886000&api=v2)

## Arquitetura

**Ponto de entrada para alterar a exibição de páginas no fluig**

Criamos um ponto de entrada para alterar o comportamento para exibição de páginas no fluig.

Os pontos disponíveis são:

- Inserir conteúdo imediatamente antes de fechar a tag <head> da página a ser exibida;
- Inserir conteúdo imediatamente antes de fechar a tag <body> da página a ser exibida.

Quando este recurso está ativo, o fluig exibe uma das duas mensagens abaixo em seu *log*:

- custompagehead.ftl is enabled;
- custompage.ftl is enabled.

A mensagem a ser exibida está condicionada ao uso do código da empresa ou não no nome do arquivo que é usado para a customização.

Saiba mais

Acompanhe mais detalhes em [Personalização de páginas](https://tdn.totvs.com/x/woDgDQ).

## LMS

**Cálculo da pontuação de questões objetivas revisado**

Revisamos o cálculo da pontuação de questões objetivas quando são atribuídos valores para cada uma de suas alternativas.

Dica!

Entenda o cálculo da pontuação de uma questão objetiva.

Quando se cadastra várias alternativas com valores para cada uma delas, a pontuação final da questão irá variar de 0 a 1, dependendo do valor da alternativa escolhida. A alternativa com maior valor representa 100% da questão (alternativa de referência) e as outras assumem uma porcentagem diferente, de acordo com a alternativa de referência.****

**Exemplo:** se uma questão objetiva possui quatro alternativas e seus respectivos valores a seguir:

- A1 – 10;
- A2 – 5;
- A3 – 4;
- A4 – 0.

A maior alternativa é a alternativa A1, pois ela tem o maior valor. Se a alternativa A2 for escolhida, então o aluno receberá 0.5 (50%) de pontuação na questão. Se ele escolher a alternativa A3, ele receberá 0.4 e, se escolher a A4, terá a pontuação 0 na questão.

A única forma de acertar a questão por completo é assinalar a alternativa A1.

## fluig Studio

**Confirmação de senha do servidor ao exportar processo**

Agora é possível solicitar a confirmação de senha para o servidor ao exportar um processo no fluig Studio. Essa confirmação visa garantir, por exemplo, que uma exportação que deveria ser feita para um ambiente de testes não seja enviada para um ambiente de produção equivocadamente, já que o fluig Studio sugere o mesmo servidor do qual a importação previa foi realizada.

- [Opção para solicitar ou não a confirmação de senha](#)
- [Confirmação de senha na exportação](#)

![](/download/attachments/224125350/SOCIALECMSUST-5844.png?version=1&modificationDate=1458749358000&api=v2)

![](/download/attachments/224125350/SOCIALECMSUST-5844-2.png?version=1&modificationDate=1458749432000&api=v2) 

## Novidades em documentação

- Confira a documentação [Desenvolvimento de formulários](https://tdn.totvs.com/x/U4l8B) atualizada.
- Outras documentações atualizadas: [Personalização de todas as páginas da plataforma](/pages/viewpage.action?pageId=232816834)
- [Guia de Utilização fluig - Mobile](/pages/viewpage.action?pageId=107940624)
- Utilizando o fluig Messaging 
- [Personalização da tela inicial do fluig Mobile](/pages/viewpage.action?pageId=198938892)
- [Widgets de Experiência de Uso](/pages/viewpage.action?pageId=149880912) 
- [Widget Acesso centralizado](/display/fluig/Widget+Acesso+centralizado)
- [Widget Analytics](/display/fluig/Widget+Analytics)

## Correções

Nessa sessão listamos alguns *bugs* que matamos nessa atualização que garantem que tudo corra bem na sua plataforma.

- Exibição da listagem de documentos de uma comunidade.

- Inclusão de arquivo como anexo em um processo *workflow*.

- Encerramento de um treinamento do qual o pós-teste possui questão dissertativa.

- Obtenção do código de processo a partir do método *getValue("WKDef")* quando ele possui caracteres especiais ou acentuação e é utilizado o banco de dados Oracle.

- Cancelamento de solicitações pelo usuário gestor – a partir da tela de consulta de solicitações – quando este possui letras maiúsculas em sua matrícula.

- Ordenação de usuários por nome no gerenciamento de matrículas de aprendizado do LMS.

- Transferência de solicitação pelo gestor do processo quando ela já foi assumida por outro usuário.

- Tradução para os idiomas Inglês e Espanhol do processo AdHoc, da pasta Meus documentos, botões da aba Anexos da movimentação de solicitações e do filtro Ações pendentes.

- Retorno do método *getChildrenIndexes* quando é utilizado o banco de dados Oracle.

- Acesso à última versão de um formulário que foi alterado na Web pelo processo ao qual está relacionado.

- Execução do evento *displayFields* quando o formulário de processo contém alguma regra de permissão.

- Replicação de propriedades herdadas de uma pasta que é copiada e colada em outro local.

- Aprovação de uma nova versão de um documento por um usuário comum após ele ter aprovado a primeira versão.

- Exibição das turmas em andamento do menu Aprendizado, facilitando a leitura e a identificação de cada turma.

- Inicialização de solicitações que possuem um processo AdHoc como atividade inicial.

- Cancelamento de questões a partir da aba de estatísticas da avaliação.

- Cancelamento de questões a partir da aba de estatísticas da avaliação.

- Utilização do mesmo anexo da solicitação anterior ao abrir uma nova solicitação a partir do botão Iniciar novas solicitações, localizado na mensagem de confirmação de abertura que permite iniciar outras solicitações com os dados da anterior.

- Direcionamento do *link* de acesso a um item de aprendizado a partir da Central de Tarefas.

- Exibição de barra de rolagem – quando necessário – na página que lista os Webservices do fluig - [seufluig]/services.

- Gravação da resposta anterior ao alternar entre as questões de uma avaliação que contém questões dos tipos objetiva e dissertativa.

- Exportação de formulário para pastas que possuem o valor zero como propriedade do documento em seu registro.

- Encerramento da visualização de um conteúdo de texto a partir da opção Encerrar visualização em um item de aprendizado.

- Importação de dois *datasets*iguais que pertencem a formulários diferentes em componentes diferentes.

- Exibição da mensagem de confirmação de que o servidor está atualizado quando o administrador se autentica na plataforma.

- Criação de usuários a partir da API Pública quando o recurso Controle de cotas está ativo.

- Exibição de usuários ativos nos filtros de coordenadores e responsáveis para turmas e disciplinas.

- Definição de dias para expiração de documentos publicados por *drag and drop* na navegação de documentos.

- Busca de anexos de uma solicitação sem diferenciar letras maiúsculas e minúsculas.

- Exibição das datas de matrícula e conclusão no relatório Matrículas por trilha e treinamento.

- Retorno de um documento que foi reprovado para o publicar efetuar os devidos ajustes.

- Exibição de tarefas de aprendizado como pendentes mesmo depois de ajustar a pontuação do aluno.

- Acesso às turmas depois de incluir alunos por meio da API Pública.

- Exibição das tarefas de aprendizado para o aluno ao matriculá-lo em turmas que possuem itens com pontuação manual.

- Exibição das opções disponíveis em Ações do documento ao visualizar um documento em PDF sem utilizar o visualizador interno no navegador Internet Explorer.

- Gravação da propriedade “Notificar?” – presente na aba Informações Gerais – de documentos publicados na navegação de documentos.

- Exibição em negrito dos itens de tópicos de uma turma em que o aluno está matriculado que ainda não foram visualizados.

- Exibição do botão Ver detalhes, nos itens de aprendizado de turmas da central de tarefas, apenas para os usuários que possuem permissão para visualizar mais detalhes do catálogo de disciplinas e turmas.

- Visualização de registros de formulário publicados na navegação de documentos criados a partir de um *widget* que chama o serviço do formulário.

- Utilização de dois *widgets*Acesso centralizado em uma mesma página.

- Importação de processo *workflow* quando ele possui um mecanismo de atribuição para usuário.

- Exibição do horário de movimentação de solicitações no histórico quando utilizado o banco de dados Oracle.

- Envio de *e-mail* de notificação para o requisitante na atividade final de uma solicitação quando a atividade anterior é do tipo Automática.

- Exibição do *link* no número e na descrição da solicitação sublinhado na tela de consulta de solicitações.

- Exibição de ícone para diferenciar as questões certas e erradas ao visualizar o desempenho em cada questão de uma avaliação.

- Busca de dados em *widgets* com *datasets*que utilizam mais de um campo para filtrar os dados.

- Exibição dos dados de *zoom* externo de formulário ao filtrar por grupo de usuários quando o nome do grupo possui caractere especial.

- Movimentação de solicitação após preencher seu formulário e enviar para a próxima atividade após a exibição de uma mensagem de validação.

- Exibição de mensagem do tipo *Toast* ao movimentar uma solicitação que possui validações que apresentam esse tipo de mensagem.

- Movimentação de solicitação que contém anexo incluído por *upload* após a exibição de uma mensagem de validação.

- Importação de processos no fluig Studio que possuem atividades que não têm a propriedade *stateName* no XML de definição do processo.

- Acesso de um *dataset* a um formulário no momento em que o formulário está sendo salvo.

- Utilização do componente de calendário em formulários quando é utilizado o navegador Mozilla Firefox.

- Envio de notas de avaliações do fluig para o TOTVS RM quando há integração com o Identity ativa.

- Exibição de mensagens de acompanhamento de eventos durante a movimentação de solicitações.

- Exibição da descrição e acesso a um documento na área de favoritos quando ele é um relatório do tipo *rptdesign*.

- Visualização de processos que contêm acentuação em seu código a partir do *link* criado para ele no navegador Internet Explorer.

- Criação de turma e disciplina quando definido para criar também a comunidade correspondente.

- Edição de conteúdos que possuem a opção “Tornar o conteúdo de uso privativo para o usuário proprietário” assinalada apenas por seu proprietário e pelo administrador da empresa.

- Exibição de turmas encerradas no quadro de responsáveis da área de início das atividades de aprendizado.

- Ordenação das solicitações pela coluna Prazo na Central de Tarefas.

- Movimentação de solicitações após uma atividade que possui mecanismo de atribuição por campo de formulário ser movimentada por um fluxo automático do agendador de tarefas e movimentação de tarefas por fluxo automático de forma independente.

- Permissão para recortar pastas da raiz da navegação de documentos para usuários com papel de administrador.

- Acesso aos itens do menu Aprendizado quando utilizado o navegador Internet Explorer.

- Edição de formulário de processo para inclusão de um campo do tipo caixa de texto.

- Registro da movimentação de uma solicitação em seu histórico quando ela está pendente para um grupo ou papel e é movimentada pelo gestor do processo.

- Visualização da política de uso a partir do Painel de Controle depois que ela foi excluída da pasta da navegação de documentos na qual estava publicada.

- Alteração da configuração do servidor do fluig no Connect ao abri-lo quando no servidor anteriormente configurado o seu uso foi desabilitado.

- Removida a opção de *download* múltiplo para pastas que estão na raiz da navegação de documentos, pois essa ação não é permitida.

- Ajuste no cadastro de turmas para não permitir que os dias de validade das matrículas ultrapassem a data final definida para a turma.

- Configuração do fluig para enviar *e-mails* quando é utilizado um servidor para SMTP e outro para POP3.Atenção! Se houver alguma divergência no envio de *e-mails* após essa atualização, verifique a configuração para SMTP e para POP3 no arquivo “standalone.xml”. Se você utiliza **o mesmo** servidor para os dois protocolos, nas configurações é necessário informá-lo para cada protocolo.Mais detalhes você pode obter em [Configuração de envio de *e-mail*](https://tdn.totvs.com/x/MmoSCw).

- Exibição da *timeline* de uma comunidade que possui o caractere “**:**” (dois pontos) em seu nome.

- Tempo de exibição de disciplinas e turmas quando há uma grande quantidade de disciplinas (mais de 100) em uma mesma pasta do catálogo.

- Visualização de atividades de um processo no fluig Mobile difere das mesmas atividades quando visualizadas em um navegador.

- Ordenação alfabética na busca de responsáveis para a próxima atividade ao movimentar uma solicitação.

- Foi alterado o serviço de autenticação do Identity para que não exista uma dependência síncrona entre autenticação e indexação de dados, garantido que, mesmo que ocorra indisponibilidade no serviço de indexação, experiências de uso ou outros, não haverá impacto na autenticação de usuários.

- Exibição dos aniversariantes do dia no *widget* Aniversariantes do Kit Intranet quando há integração com o TOTVS RM ao utilizar o navegador Internet Explorer.

- Geração do relatório de formulários de comunidades mantendo a mesma ordem de exibição das questões ao responder o formulário.Observação Será mantida a ordem das questões da primeira versão do formulário.

- Exibição de arquivos que foram anexados e excluídos ao efetuar uma busca na aba Anexos da uma solicitação que está sendo movimentada.

- Movimentação de solicitação aberta ao acionar a opção “Iniciar nova solicitação”, que é apresentada na confirmação de abertura da solicitação anterior.

- Exibição dos nomes das atividades de um processo ao consultar a aba Complementos deio uma solicitação.

- Edição do campo “Provisionamento *Just in time*” na aba Autenticação do cadastro de empresas.

- Edição em bloco de registros de formulários publicados na navegação de documentos.

- Compartilhamento de publicação da *timeline* que contém aspas simples em seu conteúdo.

- Conteúdo da mensagem que é exibida ao excluir uma nuvem de relacionamento que contenha usuários associados a ela.

- Cancelar matrícula de aluno em trilha a partir do gerenciamento de matrículas.

- Consulta de *datasets* de formulário desenvolvidos sobre a plataforma quando utilizado *zoom*.

- Renderização de formulário quando um campo receba uma *string* utilizando o hAPI.setCardValue() representando a definição de uma tabela HTML onde em uma das colunas exista "on" ao adicionar o conteúdo do campo como “inner html” de algum elemento como um “span” ou “div”.

- Performance no catálogo de disciplinas e turmas ao utilizar a API para criar uma turma.

- Melhorias de desempenho ao incluir um item de tópico para uma turma no ambiente de aprendizado.

- Exibição do ícone de carregamento para indicar que a exibição das turmas ou treinamentos está em andamento na janela inicial do ambiente de aprendizado.

- Possibilidade de escolher o número de registros para visualizar na tela Pontuação manual ao acessar uma turma como responsável.


<!-- anchors: Atualização1.5.7-Identity, samples, Atualização1.5.7-BPM, samples, samples, Atualização1.5.7-ECM, Atualização1.5.7-Social, samples, samples, Atualização1.5.7-WCM, samples, Atualização1.5.7-Mobile, Atualização1.5.7-Arquitetura, Atualização1.5.7-LMS, Atualização1.5.7-fluigStudio, samples, Atualização1.5.7-Novidadesemdocumentação, Atualização1.5.7-Correções -->
