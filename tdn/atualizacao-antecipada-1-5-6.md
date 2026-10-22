---
title: "Atualização antecipada 1.5.6"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=224395764"
scraped_at: "2026-03-09T04:24:31.001Z"
depth: 3
anchors: 29
child_links: 63
---

# Atualização antecipada 1.5.6

Este documento contém um breve descritivo acerca das implementações e correções efetuadas.

- **Implementações**: são apresentadas todas as implementações e evoluções da plataforma contidas na atualização **1.5.6**.
- **Correções:** são apresentados todos os ajustes contidos na atualização **1.5.6**. Tais ajustes compreendem aprimoramento de performance e melhorias em processos já existentes.

 Informações detalhadas podem ser obtidas no **Help Online **e aqui mesmo no **http://dev.fluig.com/**.

**Os chamados solucionados em atualizações antecipadas são acumulativos, ou seja, todas as alterações realizadas nas liberações anteriores estarão disponíveis na última atualização.**

# Índice

## Procedimentos para atualização do atualização antecipada

*Por se tratar de uma liberação emergencial são necessários alguns procedimentos diferenciados para atualização do ambiente. Vamos a eles:*

*1 - Faça o download do instalador da atualização antecipada no portal de clientes;*

*2 - Pare a execução dos serviços do **fluig**, **fluig_MemCached** e **fluig_RealTime**;*

*3 - Elimine as pastas data, log e tmp do fluig em: (<instalacao fluig>\jboss\standalone);*

*4 - Execute o instalador e selecione a opção de atualização;*

*5 - Inicie os serviços Memcached e RealTime;*

*6 - Inicie o serviço do fluig.*

*Basta aguardar o serviço do fluig ficar disponível e acessar a plataforma já atualizada.*

*Caso o seu ambiente fluig seja administrado pela nossa equipe de Cloud, você pode entrar em contato através de um chamado ou ligando para 4003-0015 e solicitar a atualização.*

## Atualização antecipada #1

**Alteração no retorno da APIOAuthConsumer**

**Atualização oficial:** fluig 1.5.7

Alterado os retornos de APIOAuthConsumer, para quando houver erro, apresentar o erro de retorno e não apenas a palavra "ERROR".

**Assumir solicitações em pool**

**Atualização oficial:** fluig 1.5.7

Correção no usuário corrente quando tem uma atividade em pool e a segurança de documentos configurada para executor da atividade.

**Visualização da tela de turmas**

**Atualização oficial:** fluig 1.5.7

Não estava sendo possível acessar a tela de turmas, a tela ficava carregando e não permitia sua utilização.

**Tarefas de aprendizado**

**Atualização oficial:** fluig 1.5.7

Ajustado para apresentar somente as tarefas de item de tópico que ainda não possuem notas. As que já foram executadas e possuem notas, não serão mais exibidas.

**Central de tarefas - Meu aprendizado**

**Atualização oficial:** fluig 1.5.7

Ajuste no redirecionamento da página quando clicar em 'ver detalhes' na central de tarefa, o sistema estava redirecionando para uma página incorreta, que dava impressão que não estava carregando as turmas em andamento e responsável. Agora está redirecionando para o Meu Plano, onde o usuário poderá ver os detalhes corretamente.

**Detalhes de uma solicitação**

**Atualização oficial:** fluig 1.5.7

Alteração de “Enviar” para “Movimentar” na tela de detalhes da solicitação da Central de Tarefas.

## Atualização antecipada #2

**Bloqueio da tela de movimentação de solicitações**

**Atualização oficial:** fluig 1.5.7

Após movimentar uma solicitação agora é feito o bloqueio de tela que não era realizado em caso de demora nos scripts de customização. Esta alteração impede que uma solicitação seja movimentada mais de uma vez.

**Estender as imagens da widget slideshow**

**Atualização oficial:** fluig 1.5.7

Foi adicionado as configurações da widget de slideshow um novo parâmetro para que o usuário defina se quer estender as imagens na apresentação de slide. A docuemntação está disponível aqui: [http://tdn.totvs.com/x/nbBICw](https://tdn.totvs.com/x/nbBICw)

**Utilização da função getChildrenIndexes com base de dados Oracle**

**Atualização oficial:** fluig 1.5.7

Ao utilizar a função getChildrenIndexes com base de dados Oracle nenhum registro era retornado. Essa situação foi solucionada.

**Filtros em datasets**

**Atualização oficial:** fluig 1.5.7

A pesquisa em datasets não funcionava quando era utilizado mais de um campo para realização do filtro dos dados.

**Encerrar visualização de um conteúdo de um treinamento**

**Atualização oficial:** fluig 1.5.7

A opção "Encerrar Visualização" apresentada quando o usuário estava visualizando um conteúdo de texto (PDF ou DOC) em uma trilha/treinamento não estava fechando a tela corretamente.

**Segurança de anexo workflow por executor da segunda atividade**

**Atualização oficial:** fluig 1.5.7

Não era possível acessar e movimentar uma solicitação que estava com segurança de anexo workflow por executor de atividade configurada.

**Acompanhamento de eventos**

**Atualização oficial:** fluig 1.5.7

A função de acompanhamento de eventos não estava sendo executada corretamente.

**Throw em eventos de processos com anexos workflow**

**Atualização oficial:** fluig 1.5.7

Após ocorrer um throw em algum evento do processo, os arquivos anexos estavam sendo deletados, com isso a movimentação da solicitação não era realizada.

**Widget Acesso Centralizado**

**Atualização oficial:** fluig 1.5.7

Não era possível incluir mais de uma widget de acesso centralizado na mesma página.

## Atualização antecipada #3

**Executar displayFields após alterar regras de permissão**

**Atualização oficial:** fluig 1.5.7

Evento displayFields não era executado após alterar o formulário e alterar as regras de segurança.

****

**Aprovação/reprovação de documentos**

**Atualização oficial:** fluig 1.5.7

Corrigido processo de reprovação de documento que enviava o mesmo para o usuário que reprovou e não para o publicador do documento.

**Dataset**

**Atualização oficial:** fluig 1.5.7

Corrigida inconsistência que impedia que um dataset acessasse dados de um formulário no momento que ele estava sendo salvo, pois o dataset estava acessando a metalista de fora de sua transação, o que impedia que enxergasse os dados do formulário em salvamento.

**Web Service método createSimpleCardIndexWithDataset**

**Atualização oficial:** fluig 1.5.7

Tratado erro de nullPointerException no método createSimpleCardIndexWithDataset.

## Atualização antecipada #4

**Resposta "perdida" em uma avaliação**

**Atualização oficial:** fluig 1.5.7

Ao avançar de uma questão já respondida para outra, a resposta da questão era perdida, sendo necesssário responder a questão novamente.

**Ordenação na tela de gerenciamento de matrículas**

**Atualização oficial:** fluig 1.5.7

Foi corrigida a ordenação de usuários por nome na tela de gerenciamento de matrículas.

**Finalizar treinamentos**

**Atualização oficial:** fluig 1.5.7

Agora é possível finalizar treinamentos com pós-teste que possuem questões dissertativas.

**Criação de usuário via API**

**Atualização oficial:** fluig 1.5.7

Ao criar novos usuários utilizando a API do fluig a pasta particular dos usuários não estava sendo criada. Isso so acontecia quando a funcionalidade de Cotas estava habilitada.

**Criação de usuário via API**

**Atualização oficial:** fluig 1.5.7

Na tela de movimentação de solicitações, ao acessar a aba de anexos e tentar fazer uma busca, o texto digitado estava sendo comparado diferenciando letras maiúsculas de minúsculas, o que dificultava a realização da pesquisa.

**Confirmação de plataforma atualizada**

**Atualização oficial:** fluig 1.5.7

Modificado o comportamento para caso a plataforma esteja atualizada não abra o modal com a mensagem confirmando que o servidor esta atualizado no momento do login de um usuário administrador.

## Atualização antecipada #5

**Recuperar dados após throw em uma movimentação workflow**

**Atualização oficial:** fluig 1.5.7

Após ocorrer algum throw na movimentação de uma solicitação, não era mais possível recuperar alguns dados do formulário.

**Associar um novo volume a uma pasta**

**Atualização oficial:** fluig 1.5.7

Ao criar uma pasta e associar ela a um novo volume criado via painel de controle, quando era publicado um documento nesta pasta ocorria um erro dizendo que o arquivo não pode ser encontrado.

## Atualização antecipada #6 e #7

**Melhoria de performance com catálogo**

**Atualização oficial:** fluig 1.5.7

Melhoria de performance quando um alto número de disciplinas estava cadastrado para um catálogo.

****

**Visualização de turma no IE9**

**Atualização oficial:** fluig 1.5.7

Tratamento para o browser Internet Explorer© 9 apresentar as turmas corretamente na tela de aprendizado.

**Horário no histórico do processo**

**Atualização oficial:** fluig 1.5.7

Exibição do horário de movimentação de solicitações no histórico quando utilizado o banco de dados Oracle.

## Atualização antecipada #8

**Tarefas de apredizado**

**Atualização oficial:** fluig 1.5.7

Exibição das tarefas de aprendizado para o aluno ao matriculá-lo em turmas que possuem itens com pontuação manual.

**Dias de validade da turma**

**Atualização oficial:** fluig 1.5.7

Ajuste no cadastro de turmas, quando houver data final de turma, e os dias de validade, ultrapassarem estes dias, o sistema apresenta uma mensagem informando a situação.

## Atualização antecipada #9

**Visualização de turma no IE9**

**Atualização oficial:** fluig 1.5.7

Novos ajustes para o browser Internet Explorer© 9 apresentar as turmas corretamente na tela de aprendizado.

**Zoom**

**Atualização oficial:** fluig 1.5.7

Melhorias no novo componente de zoom.

## Atualização antecipada #10

**Editar um formulário na configuração de processos**

**Atualização oficial:** fluig 1.5.7

Edição de formulário de processo para inclusão de um campo do tipo caixa de texto.

**Visualização de comunidades**

**Atualização oficial:** fluig 1.5.7

Ajustada visualização de comunidades para caso o nome delas possuam dois pontos (:).

**Visualização de comunidades**

**Atualização oficial:** fluig 1.5.7

Correção na ordem dos valores inicial e final de constraints para consultas de datasets feitas a partir da api pública ou do vcXMLRPC.js.

## Atualização antecipada #11

**Visualização de atividades no fluig Mobile**

**Atualização oficial:** fluig 1.5.7

Alteramos a visualização de atividades de um processo no fluig Mobile para serem as mesmas atividades quando visualizadas em um navegador.

## Atualização antecipada #12

**vcXMLRPC**

**Atualização oficial:** fluig 1.5.7

Tratamento para quando o vcXMLRPC.js é carregado antes do jQuery no formulário.

## Atualização antecipada #13

**Versão de formulário**

**Atualização oficial:** fluig 1.5.7

Acesso à última versão de um formulário que foi alterado na Web pelo processo ao qual está relacionado.

****

**Performance na busca de usuários para movimentar uma solicitação**

**Atualização oficial:** fluig 1.5.7

Melhoria na tela de busca e seleção de usuários na movimentação de solicitações.

**Item de tópico**

**Atualização oficial:** fluig 1.5.7

Melhora na performance ao acessar um item de tópico.

## Atualização antecipada #14

**Pontuação manual**

**Atualização oficial:** fluig 1.5.7

Alteração pra tornar configurável a quantidade de registros apresentados nos subitens de Pontuar (Pontuação manual e Ajustar pontuação) no menu do responsável.

****

**Turmas/treinamentos em andamento**

**Atualização oficial:** fluig 1.5.7

Melhorias no carregamento das suas turmas/treinamentos em andamento na tela inicial do LMS. Inclusão de mensagem indicativa "Carregando".

## Atualização antecipada #15

**Mecanismo de atribuição por campo de formulário**

**Atualização oficial:** fluig 1.5.8

Correção no mecanismo de atribuição por campo de fomulário na movimentação de solicitação via mobile.

## Atualização antecipada #16

**Criação de registro de formulário utilizando a API**

**Atualização oficial:** fluig 1.5.8

Ao utilizar o método "/api/public/2.0/cards/create" da api pública, quando o usuário tem o login e matrícula diferentes, estava apresentando um erro.

**Sincronização de dataset offline**

**Atualização oficial:** fluig 1.5.8

Agora na data da última sincronização de um Dataset offline é apresentada a data e hora que foi iniciada a execução. Por exemplo: começou a fazer a sincronização dos dados às 17:05 e terminou às 17:08, a data de última sincronização será 17:05 horas.

**Limpar dados de dataset offline**

**Atualização oficial:** fluig 1.5.8

Agora ao limpar os dados de dataset offline no painel de controle, na proxima sincronização, o valor da variável lastSyncDate no evento onsync é zerada. 

**Atividade em pool assumida por 2 usuários**

**Atualização oficial:** fluig 1.5.8

Corrigida situação que permitia dois usuários assumirem a mesma tarefa.

**UpdateCardData **

**Atualização oficial:** fluig 1.5.8

Corrigido ECMCardService.updateCardData quando o formulário possuía validação de dados de formulário.

## Atualização antecipada #17

**Eventos de formulário**

**Atualização oficial:** fluig 1.5.8

Corrigida situação quando se usava eventos de formulário na primeira atividade de solicitações.

## Atualização antecipada #18 e #19

**Eventos de formulário**

**Atualização oficial:** fluig 1.5.8

Corrigida situação de erro ao carregar arquivo em um terceiro nível de pasta com aprovação.

## Atualização antecipada #21

**Criação da configuração de alertas do usuário**

**Atualização oficial:** fluig 1.5.8

Melhoria de performance na configuração de alertas do usuário.

## Atualização antecipada #22

**NullPointer ao atualizar ambiente com volume muito grande de dados**

**Atualização oficial:** fluig 1.5.9

Tratamento para evitar erro que ocorre esporadicamente ao atualizar ambientes com alto volume de dados.

**Notificação em atividades finais**

**Atualização oficial:** fluig 1.5.8

Envio de e-mail de notificação para o requisitante na atividade final de uma solicitação quando a atividade anterior é do tipo Automática.

## Atualização antecipada #23

**Permissionamento em comunidades**

**Atualização oficial:** fluig 1.5.9

Validação para garantir que o usuário que está tentando compartilhar um item com uma comunidade participa dela e tenha permissão de publicação.

**Erro ao adicionar usuário na nuvem de relacionamento**

**Atualização oficial:** fluig 1.5.9

Solucionado problema de adicionar usuário a nuvem, pois estava com a referência errada no social.

## Atualização antecipada #24 e #25

**Posts em comunidades repetidos na timeline do usuário**

**Atualização oficial:** fluig 1.5.9

Solucionado problema ao exibir os posts na timeline do usuário.

****

**Evento BeforeDocumentPublisher não é executado corretamente**

**Atualização oficial:** fluig 1.5.9

Realizado ajuste no recurso de recortar e colar um documento.

**Evento afterCreateUser com problemas**

**Atualização oficial:** fluig 1.5.9

Correção no processamento do evento afterCreateUser.

**Problema ao fazer menções nas comunidades**

**Atualização oficial:** fluig 1.5.9

Envio de notificação quando um usuário é mencionado em uma comunidade oculta ou privada mas ele não participa da comunidade.

**Problema ao inserir grupos de usuários (sub grupos) dentro de um grupo de usuários**

**Atualização oficial:** fluig 1.5.9

Criação de grupos de usuários que contenham outros grupos quando esses também possuem outros grupos em sua formação, ou seja, 3 níveis de grupos.

**Evento BeforeDocumentPublisher não é executado corretamente**

**Atualização oficial:** fluig 1.5.9

Execução do evento “BeforeDocumentPublisher” ao copiar e colar um documento na navegação de documentos.

**Widget analytics com problemas de autenticação**

**Atualização oficial:** fluig 1.5.9

Solicitação de autenticação ao utilizar o widget Analytics em uma página quando há integração com o fluig Identity.

## Atualização antecipada #26

**Envio de informações de solicitações para o Analytics**

**Atualização oficial:** fluig 1.5.9

Envio de informações de solicitações para o Analytics quando:
1 - A tarefa é movimentada por fluxo automático. 
2 - A tarefa é movimentada por job (atividade Timer ou Condicional).
3 - A tarefa é movimentada de um sub processo para o processo pai.

## Atualização antecipada #27

**Acesso as publicações**

**Atualização oficial:** fluig 1.5.9

Bloqueio de acesso às publicações removidas a partir do link de notificação.

## Atualização antecipada #28

**URL de compartilhamento **

**Atualização oficial:** fluig 1.5.9

Ajuste no redirecionamento da URL gerada pela opção Compartilhar para publicações realizadas por usuários em comunidades.

## Atualização antecipada #28

**Dataset **

**Atualização oficial:** fluig 1.5.9

Ao consultar um dataset offline utilizando constraint com MUST e SHOULD estava ocorrendo um erro.

## Atualização antecipada #30

**Zoom**

**Atualização oficial:** fluig 1.5.7

Exibição dos dados de zoom externo de formulário ao filtrar por grupo de usuários quando o nome do grupo possui caractere especial.

## Atualização antecipada #31

**Transferir solicitação**

**Atualização oficial:** fluig 1.5.7

Ao transferir uma solicitação, escolhendo a atividade Transferir e informando um usuário de destino, logo após enviar, é retornado o erro " Ops! Aconteceu um erro inesperado. Entre em contato com o administrador. " que impede a transferência.


<!-- anchors: Atualizaçãoantecipada1.5.6-Índice, Atualizaçãoantecipada1.5.6-Procedimentosparaatualizaçãodoatualizaçãoantecipada, Atualizaçãoantecipada1.5.6-Atualizaçãoantecipada#1, Atualizaçãoantecipada1.5.6-Atualizaçãoantecipada#2, Atualizaçãoantecipada1.5.6-Atualizaçãoantecipada#3, Atualizaçãoantecipada1.5.6-Atualizaçãoantecipada#4, Atualizaçãoantecipada1.5.6-Atualizaçãoantecipada#5, Atualizaçãoantecipada1.5.6-Atualizaçãoantecipada#6e#7, Atualizaçãoantecipada1.5.6-Atualizaçãoantecipada#8, Atualizaçãoantecipada1.5.6-Atualizaçãoantecipada#9, Atualizaçãoantecipada1.5.6-Atualizaçãoantecipada#10, Atualizaçãoantecipada1.5.6-Atualizaçãoantecipada#11, Atualizaçãoantecipada1.5.6-Atualizaçãoantecipada#12, Atualizaçãoantecipada1.5.6-Atualizaçãoantecipada#13, Atualizaçãoantecipada1.5.6-Atualizaçãoantecipada#14, Atualizaçãoantecipada1.5.6-Atualizaçãoantecipada#15, Atualizaçãoantecipada1.5.6-Atualizaçãoantecipada#16, Atualizaçãoantecipada1.5.6-Atualizaçãoantecipada#17, Atualizaçãoantecipada1.5.6-Atualizaçãoantecipada#18e#19, Atualizaçãoantecipada1.5.6-Atualizaçãoantecipada#21, Atualizaçãoantecipada1.5.6-Atualizaçãoantecipada#22, Atualizaçãoantecipada1.5.6-Atualizaçãoantecipada#23, Atualizaçãoantecipada1.5.6-Atualizaçãoantecipada#24e#25, Atualizaçãoantecipada1.5.6-Atualizaçãoantecipada#26, Atualizaçãoantecipada1.5.6-Atualizaçãoantecipada#27, Atualizaçãoantecipada1.5.6-Atualizaçãoantecipada#28, Atualizaçãoantecipada1.5.6-Atualizaçãoantecipada#28.1, Atualizaçãoantecipada1.5.6-Atualizaçãoantecipada#30, Atualizaçãoantecipada1.5.6-Atualizaçãoantecipada#31 -->
