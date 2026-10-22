---
title: "Atualização antecipada 1.6"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=272422428"
scraped_at: "2026-03-09T04:18:00.867Z"
depth: 3
anchors: 12
child_links: 39
---

# Atualização antecipada 1.6

Este documento contém um breve descritivo acerca das implementações e correções efetuadas.

- **Implementações**: são apresentadas todas as implementações e evoluções da plataforma contidas na atualização **1.5.13**.
- **Correções:** são apresentados todos os ajustes contidos na atualização **1.5.13**. Tais ajustes compreendem aprimoramento de performance e melhorias em processos já existentes.

Informações detalhadas podem ser obtidas no **Help Online **e aqui mesmo no **http://dev.fluig.com/**.

**Os chamados solucionados em atualizações antecipadas são acumulativos, ou seja, todas as alterações realizadas nas liberações anteriores estarão disponíveis na última atualização.**

****

# Índice

# 

O que é? Como atualizar?

Para entender o processo de liberação de uma atualização antecipada e o procedimento para atualizar, acesse [Atualização fluig - Atualização antecipada (EP).](/pages/viewpage.action?pageId=73078235#Atualizaçãodaplataforma-Atualiza%C3%A7%C3%A3oantecipada(EP))

## Atualização antecipada #1

**Horário do servidor diferente do horário no dispositivo móvel**

**Atualização Oficial**: fluig 1.6.1

Incluída mensagem informando ao usuário que o horário configurado no dispositivo móvel em que o aplicativo fluig Mobile está instalado é diferente do horário definido no servidor de aplicação.

**Sincronização de datasets**

**Atualização Oficial**: fluig 1.6.1

Corrigida inconsistência de permissão e incluído o ID da empresa nos parâmetros enviados pelo recurso de Sincronização de datasets.

**Alerta de senha inválida**

**Atualização Oficial**: fluig 1.6.1

Exibição do alerta "Usuário ou senha inválida" ao tentar acessar a plataforma informando um usuário válido e a senha incorreta.

**Indexação de anexos de processos**

**Atualização Oficial**: fluig 1.6.1

Ajuste na tarefa de indexação realizada via agendamento para que o procedimento seja finalizado corretamente em empresas que possuem anexos de processos cadastrados.

**Download de log**

**Atualização Oficial**: fluig 1.6.1

Restaurada a ação do botão Baixar *log*, disponível na opção Controle de log do Painel de Controle.

**Melhoria em mensagem de erro no mobile ao enviar anexos******

**Atualização Oficial**: fluig 1.6.1

Utilizando a rede de dados móveis, ao tentar incluir arquivos em um processo era apresentada uma inconsistência em tela. Melhorada a mensagem para ela seja apresentada de forma mais amigável e mais clara.

**Criação de comunidades para disciplinas/turmas na atualização do fluig para versão 1.6.0******

**Atualização Oficial**: fluig 1.6.1

Correção no processo de criar as comunidades de disciplinas/turmas ao atualizar o fluig.

## Atualização antecipada #2

**Ajuste no prosseguimento de solicitações**

**Atualização Oficial:**fluig 1.6.1

Corrigida inconsistência que travava a movimentação do processo após movimentar para um *join* caso houvesse recursão(*looping*) em um dos fluxos paralelos.

## Atualização antecipada #3

**Ajuste na busca de datasets customizados.**

**Atualização Oficial: **fluig 1.6.1

Ajuste realizado na lógica de busca de datasets para respeitar o limite de registros retornados ao utilizar datasets customizados com Zoom.

**Ajuste em campos do tipo Select.**

**Atualização Oficial: **fluig 1.6.1

Ajuste realizado em campos select do formulário para que a descrição seja exibida corretamente.

**É possível iniciar uma avaliação após a data final do seu agendamento.**

**Atualização Oficial: **fluig 1.6.1

Impedir iniciar a avaliação agendada quando a data final do agendamento estiver expirada.

**Ajuste no envio de notificações de aprovação de documentos.**

**Atualização Oficial: **fluig 1.6.1

Ajuste realizado para que a notificação de aprovação seja enviada apenas quando o documento for realmente aprovado e não no momento que for enviado para a aprovação.

**Mecanismo de atribuição por associação 1.6.0**

**Atualização Oficial: **fluig 1.6.1

Corrigida a inconsistência que ocorria no mecanismo de atribuição por associação com mecanismo grupos de colaborador.

**Integração LMS RM x FLUIG**

**Atualização Oficial: **fluig 1.6.1

Efetuado ajuste para atualizar o campo ID Externo do cadastro do usuário do fluig quando houver atualização do identificador único de integrações (IDP_ID) em um cenário onde há integração do fluig LMS com RM e com fluig Identity.

**Ajuste Usuários aprovadores por Herança**

**Atualização Oficial: **fluig 1.6.1

Ajuste realizado para normalizar rotina de aprovação, pois usuários que já foram aprovadores e hoje não são mais, ainda estavam conseguindo aprovar documentos.

**JBOSS_HOME - Fluig não cria serviço nem inicializa**

**Atualização Oficial: **fluig 1.6.1

Tratamento para garantir a criação e inicialização do serviço "fluig" em ambientes cuja variável de ambiente JBOSS_HOME referencie o servidor de outra aplicação instalada.

## Atualização antecipada #4

**Ajuste na limitação de caracteres em campos de formulário**

**Atualização Oficial: **fluig 1.6.1

Tratamento para campos do tipo textarea e text possam ser salvos contendo mais de 4000 caracteres.

****

**Suporte a proxy autenticado no envio de dados para o Analytics**

**Atualização Oficial: **fluig 1.6.1

Inclusão de suporte para proxy autenticado com usuário e senha, no envio de dados para o fluig Analytics.

**Descrição do widget Editor de Conteúdo**

**Atualização Oficial: **fluig 1.6.1

Ajustada a edição de páginas que contenham widgets do tipo Editor de Conteúdo incluídas, mas que não tenham a descrição preenchida, para que não ocorram mais inconsistências ao editá-las.

**Tamanho do token de sessão no Messaging**

**Atualização Oficial: **fluig 1.6.1

Aumento do espaço reservado em banco de dados para o armazenamento do token de sessão no fluig Messaging para evitar perda de sessão.

**Ajuste nas configurações de datasource para detecção do banco de dados utilizado**

**Atualização Oficial:** fluig 1.6.1

Corrigido as configurações do *datasource* específico do fluig que impedia a mídia de detectar o banco de dados utilizado.

## Atualização antecipada #5

**Criação de nova conta do fluig Messaging**

**Atualização Oficial:** fluig 1.6.1

Corrigida a inconsistência "*Invalid ID*", que impedia a criação de uma nova conta após a desativação da configuração anterior.

**Melhoria na busca por usuários**

**Atualização Oficial:** fluig 1.6.1

Ajustada a relevância e ordenação dos resultados na pesquisa por usuários durante a criação de uma conversa no fluig Messaging.

**Indexação automática na publicação**

**Atualização Oficial:** fluig 1.6.1

Correção para indexar documentos automaticamente na publicação.

**Novo botão para iniciar conversa**

**Atualização Oficial:** fluig 1.6.1

Um novo botão chamado "Mensagem", criado para iniciar uma conversa via fluig Messaging, foi incluído no cartão e na página de perfil dos usuários da plataforma. O cartão é exibido ao passar o cursor do *mouse* sobre o nome de um usuário e a página do perfil é carregada ao clicar sobre o mesmo.

**Inclusão de usuários homônimos em grupos**

**Atualização Oficial:** fluig 1.6.1

Corrigida a inclusão de usuários com nomes idênticos em uma mesma conversa em grupo no fluig Messaging.

**Exibição do nome do contato no título da conversa**

**Atualização Oficial:** fluig 1.6.1

Aplicativos móveis do fluig Messaging (iPhone/iPad e Android) ajustados para sempre exibir o nome do contato no título da conversa.

**Imagem de exibição de um novo grupo**

**Atualização Oficial:** fluig 1.6.1

Corrigido o carregamento da imagem de exibição de uma nova conversa em grupo no aplicativo do fluig Messaging para iPhone/iPad, para que não seja apresentada a imagem da conversa listada logo abaixo do novo grupo.

**Paginação de resultados na pesquisa por usuários**

**Atualização Oficial:** fluig 1.6.1

Para tornar a pesquisa por usuários mais eficiente no aplicativo do fluig Messaging para dispositivos Android, os resultados serão carregados em lotes de 50 usuários. Ao atingir o último resultado da lista, um novo lote de usuários será apresentado.

**Mensagem de senha incorreta mais amigável**

**Atualização Oficial:** fluig 1.6.1

A mensagem exibida ao usuário quando este informa o usuário e/ou senha incorretos no aplicativo fluig Messaging para Android foi ajustada para ficar mais clara.

**Renovação de sessão do fluig Messaging mais eficaz**

**Atualização Oficial:** fluig 1.6.1

Além de verificar a data de expiração da sessão, o fluig Messaging agora também verifica a validez do token junto ao fornecedor, mesmo que este ainda esteja dentro do período de validade. Essa ação visa garantir o acesso ininterrupto dos usuários às suas conversas no Messaging.

**Redirecionamento do aplicativo fluig para o fluig Messaging**

**Atualização Oficial:** fluig 1.6.1

Em dispositivos iOS, ao tocar em uma notificação de nova conversa, enviada pelo aplicativo fluig, o usuário será redirecionado para o aplicativo fluig Messaging.

**Tempo de prova pausa quando navegador é fechado**

**Atualização Oficial:** fluig 1.6.1

Agora é possível definir como será a contagem de tempo de execução de uma avaliação quando o aluno iniciar e, por algum motivo, fechar a janela da avaliação.

**Problema na visualização dos comentários da avaliação anônima**

**Atualização Oficial:** fluig 1.6.1

Corrigida a consulta de comentários das questões de uma avaliação anônima, pois não estavam sendo exibidos.

**Datasets customizados em relatórios BIRT**

**Atualização Oficial:** fluig 1.6.1

Correção na chamada de datasets customizados em relatórios BIRT. 

## Atualização antecipada #6

**Permissões específicas de documentos estão sendo perdidas ao realizar checkin**

**Atualização Oficial:** fluig 1.6.1

Alterada regras para buscar as permissões do documento antigo.

**Documentos relacionados em checkout**

**Atualização Oficial:** fluig 1.6.1

Realizado tratamento para que ao atualizar documentos em checkout, que possuem documentos relacionados, a operação seja possível.

**Erro ao iniciar o fluig na versão 1.6.0 com banco de dados Oracle**

**Atualização Oficial:** fluig 1.6.1

Foi diminuído o nome de uma coluna da tabela AMS_ASSESSMENT que tinha mais de 30 caracteres, o que causava inconsistências ao iniciar a plataforma quando utilizado o banco de dados Oracle.

**Transferência de anexos da solicitação**

**Atualização Oficial:** fluig 1.6.1

Ao eliminar um anexo de um subprocesso que foi transferido do processo pai, estava removendo o documento (anexo) fisicamente, não permitindo ser mais visualizado no processo pai.

**Autenticação Identity - Connect/Plugin Outlook**

**Atualização Oficial:** fluig 1.6.1

Ajuste realizado para que o Connect/ Plugin do Outlook autentique perfeitamente ao Identity em ambientes que não são multi-empresa.

**Publicação via TOTVS Developer Studio**

**Atualização Oficial:** fluig 1.6.1

Adicionado o tratamento para a migração de configuração do WSDL entre versões da plataforma.

## Atualização antecipada #7

**Sessão do usuário é invalidada por requisição OAuth**

**Atualização Oficial:** fluig 1.6.1

Correção no controle de sessão quando houver cabeçalhos OAuth indevidos.

**Inconsistências ao consultar API de tarefas de Aprendizado**

**Atualização Oficial:** fluig 1.6.1

Incluída validação de dias de validade da matrícula na turma para evitar inconsistências na consulta do serviço "/api/public/lms/tasks/count" utilizando o SQL Server e também corrigido o *lock* na tabela de tarefas do LMS.

## Atualização antecipada #8

**Ordenação de widgets permanece após publicação da página**

**Atualização Oficial:** fluig 1.6.1

O mecanismo de ordenação de *widgets* foi ajustado para corrigir situações onde a alteração manual do posicionamento dos *widgets* nos *slots* não estava sendo respeitada após a publicação da página.

**Rolagem automática para o final da conversa**

**Atualização Oficial:** fluig 1.6.1

Implementada a rolagem automática para o final da conversa ao enviar uma nova mensagem através do fluig Messaging (*Web*).

**Envio de múltiplas imagens em uma conversa do fluig Messaging**

**Atualização Oficial:** fluig 1.6.1

Seleção de múltiplas imagens habilitada nas conversas do fluig Messaging (*Web*) para permitir o envio de várias imagens em uma mesma mensagem.

**Miniaturas na lista de conversas**

**Atualização Oficial:** fluig 1.6.1

Adicionadas miniaturas (*thumbnails*) à lista de conversas do fluig Messaging (*Web*) para garantir o carregamento de todas as conversas iniciadas.

**Filtros no CommunityDataset**

**Atualização Oficial:** fluig 1.6.1

Criados filtros no [CommunityDataset](https://tdn.totvs.com/display/public/fluig/Datasets+internos+fluig#Datasetsinternosfluig-CommunityDataset:Datasetdascomunidades) para que sejam retornados apenas os valores correspondentes à coluna selecionada, como a coluna *name*, sem que sejam retornados também os participantes da comunidade.

**Liberação de processos**

**Atualização Oficial:** fluig 1.6.1

Ajustada a liberação de processos novos e antigos, para que a validação de tarefas abertas (Agendador de Tarefas) seja efetuada de forma mais rápida não retornando timeout para tela do usuário.

**Assumir atividades de um papel**

**Atualização Oficial:** fluig 1.6.1

Feito tratamento na lógica para validar a segurança do usuário no momento de assumir uma tarefa.

**Problemas visuais utilizando o componente switch no formulário**

**Atualização Oficial:** fluig 1.6.1

Atualizado o componente do style-guide para que não apresente problemas ao navegador na plataforma quando se utiliza o componente switch em um formulário.

**Movimentação de atividade intermediária com gestor do processo**

**Atualização Oficial: fluig 1.6.1**

Tratamento realizado para que atividades intermediárias que não adicionavam uma observação quando movimentadas pelo gestor do processo, agora possam ser adicionadas.

**Consultar serviços de tarefas do LMS**

**Atualização Oficial: fluig 1.6.1**

Alteradas transações de métodos de dataset e tarefas de aprendizado para permitir utilizar o webservice /api/public/lms/tasks em um widget desenvolvido sobre a plataforma.

## Atualização antecipada #9

**Atribuição de mecanismo por executor da atividade no Subprocesso**

**Atualização Oficial:** fluig 1.6.1

O mecanismo de atribuição foi ajustado para corrigir uma situação onde o subprocesso não estava atribuindo o usuário por Executor da atividade.

**Problema no upload de conteúdos do LMS**

**Atualização Oficial:** fluig 1.6.1

Alterada a forma de efetuar upload de um arquivo, que será cadastrado como um conteúdo de aprendizado, para otimizar o processo e evitar inconsistências quando o arquivo não é salvo corretamente.

**Reprodução de vídeos na galeria e timeline de comunidades**

**Atualização Oficial:** fluig 1.6.2

A reprodução de vídeos no formato FLV publicados em comunidades foi reparada para que seja possível visualizá-los diretamente pela galeria e na *timeline*. A reprodução dos vídeos FLV através da navegação de documentos não foi afetada.

**Configuração do componente Notificações SMS da fluig Store**

**Atualização Oficial:** fluig 1.6.2

Exibição do botão para ativar/desativar o envio de notificações por SMS quando o componente Notificações SMS estiver instalado na plataforma. Apresentação de uma mensagem informativa para o usuário caso o teste de envio de SMS não seja bem sucedido devido aos dados de login e token estarem incorretos.

**Mecanismos de autenticação SAML **

**Atualização Oficial:** 1.6.2

Tratamento realizado nos mecanismos de autenticação SAML para ambientes fluig em cluster (balanceamento de carga, alta disponibilidade e tolerância a falha).

**Máscara do tipo data em campos de formulário **

**Atualização Oficial:** 1.6.2

Ajuste na visualização de registros de formulários para que aplique a máscara de data somente em campos explicitamente definidos como data.

**Widget Editor de Conteúdo**

**Atualização Oficial:** 1.6.3

Aumentado a capacidade de armazenamento da widget Editor de Conteúdo.

## Atualização antecipada #10

**Usuários que pertencem a vários grupos**

**Atualização Oficial:** fluig 1.6.1

Corrigidas inconsistências que ocorriam com usuários que pertenciam a vários grupos, causadas pela diferença no número de grupos existente na integração da plataforma fluig com o card LMS.


<!-- anchors: Atualizaçãoantecipada1.6-Índice, Atualizaçãoantecipada1.6-2, Atualizaçãoantecipada1.6-Atualizaçãoantecipada#1, Atualizaçãoantecipada1.6-Atualizaçãoantecipada#2, Atualizaçãoantecipada1.6-Atualizaçãoantecipada#3, Atualizaçãoantecipada1.6-Atualizaçãoantecipada#4, Atualizaçãoantecipada1.6-Atualizaçãoantecipada#5, Atualizaçãoantecipada1.6-Atualizaçãoantecipada#6, Atualizaçãoantecipada1.6-Atualizaçãoantecipada#7, Atualizaçãoantecipada1.6-Atualizaçãoantecipada#8, Atualizaçãoantecipada1.6-Atualizaçãoantecipada#9, Atualizaçãoantecipada1.6-Atualizaçãoantecipada#10 -->
