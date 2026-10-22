---
title: "Atualização antecipada 1.5.5"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=223907886"
scraped_at: "2026-03-09T04:24:35.040Z"
depth: 3
anchors: 15
child_links: 49
---

# Atualização antecipada 1.5.5

Este documento contém um breve descritivo acerca das implementações e correções efetuadas.

- **Implementações**: são apresentadas todas as implementações e evoluções da plataforma contidas na atualização **1.5.5**.
- **Correções:** são apresentados todos os ajustes contidos na atualização **1.5.5**. Tais ajustes compreendem aprimoramento de performance e melhorias em processos já existentes.

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

**Atualização oficial:** fluig 1.5.6

Corrigimos a falha que ocasionava a falta de conexões disponíveis com o banco de dados deixando o fluig indisponível.

**Update 1.5.4-1008**

**Atualização oficial:** fluig 1.5.6

Inicie o fluig sem falhas. O update 1008 da atualização 1.5.4 passou a validar a existência da coluna "permissions".

## Atualização antecipada #2

**Remover convites**

**Atualização oficial:** fluig 1.5.6

Remoção de e-mail de usuários da listagem de convites enviados pelo recurso Convite de usuários, localizado na guia Colaboração do Painel de Controle.

**Versionamento de documentos**

**Atualização oficial:** fluig 1.5.6

Geração do número da nova versão de um documento que possui revisões ao editá-lo e definir que seja criada uma nova versão.

**Webdav para documentos em aprovação**

**Atualização oficial:** fluig 1.5.6

Bloqueio da edição do conteúdo de um documento – por Webdav – quando ele está pendente de aprovação.

**Limpar diretório de upload nas publicações múltiplas**

**Atualização oficial:** fluig 1.5.6

Exclusão de arquivo do diretório de upload após publicá-lo a partir do recurso Publicação múltipla assinalando a opção “Limpar diretório de upload ao publicar”.

## Atualização antecipada #3

**Avisos**

**Atualização oficial:** fluig 1.5.6

Não estava sendo possível criar ou editar avisos na página de aprendizado.

## Atualização antecipada #4

**Atualização do Jboss**

**Atualização oficial:** fluig 1.5.6

Verifique se você precisa aplicar esta atualização via instalador, consultando o log do servidor fluig.

Ao iniciar o serviço procure no log pela informação "**Iniciando JBoss EAP**", verifique se a versão informada é a versão: "**6.4.3.GA (AS 7.5.3.Final-redhat-2)"**, caso não seja, seu ambiente precisa ser atualizado.

****

**Consulta utilizando mecanismo de atribuição**

**Atualização oficial:** fluig 1.5.6

Na consulta de usuários quando é utilizado um mecanismo de atribuição do tipo "por papel", a consulta só pesquisava o login do usuário, agora é possível pesquisar também pelo nome dos usuários.

## Atualização antecipada #5

**Edição de formulários em atividades paralelas**

**Atualização oficial:** fluig 1.5.6

Será exibido um aviso caso o formulário ja tenha sido editado por uma movimentação de uma atividade paralela.

****

**Atribuição por campo de formulário em atividades automáticas**

**Atualização oficial:** fluig 1.5.6

Não será mais necessário selecionar o usuário quando em um processo workflow em uma atividade automática estiver configurado um mecanismo de atribuição por campo de formulário e tiver apenas um usuário válido.

**Descartar solicitação**

**Atualização oficial:** fluig 1.5.6

Alterado eventos da página de movimentação de solicitações para que haja um funcionamento padrão para caso o usuário cancele a movimentação antes de selecionar o usuário após uma atividade automática.

**Sincronização de datasets**

**Atualização oficial:** fluig 1.5.6

Melhoria de performance na sincronização de datasets para atender situações onde existe um grande volume de dados a ser sincronizado.

**Layout da página Meu Aprendizado**

**Atualização oficial:** fluig 1.5.6

Ajuste de alinhamento dos itens em andamento (treinamentos e turmas) na página principal de aprendizado quando há mais de 6 itens pendentes.

**Pendências para um grupo**

**Atualização oficial:** fluig 1.5.6

Ajustado nome do grupo quando uma solicitação está pendente na central de tarefas para um grupo.

## Atualização antecipada #6

**Filtro inicial no componente de Zoom**

**Atualização oficial:** fluig 1.5.6

Liberamos um ajuste para que o novo componente de zoom funcione com filtro inicial configurado.

**Eventos de formulário não informam Id do mesmo**

**Atualização oficial:** fluig 1.5.6

Os eventos afterSaveNew e afterProcessing estavam retornando 0 ao buscar as informações do formulário através do método form.getDocumentId().

## Atualização antecipada #7

**Recarregar formulário ao movimentar solicitações com atividades automáticas**

**Atualização oficial:** fluig 1.5.6

Foi liberada uma correção para verificar a versão quando uma solicitação com atividade automática é movimentada, agora não é mais necessário recarregar o formulário nesta situação.

## Atualização antecipada #8

**Banner slideshow**

**Atualização oficial:** fluig 1.5.6

Ajuste para que a widget banner slideshow seja renderizada corretamente.

**Movimentação de solicitação com formulário de versão única**

**Atualização oficial:** fluig 1.5.6

Não era possível movimentar uma solicitação quando o formulário do processo está configurado para utilizar versão única.

## Atualização antecipada #9

**Consulta de datasets**

**Atualização oficial:** fluig 1.5.6

Alteração para funcionar a consulta de datasets que utilizam metalistas com campos TEXT.

**APIs do LMS**

**Atualização oficial:** fluig 1.5.6

As APIs do LMS não retornavam o ID do objeto criado. Agora esse ID é retornado.

**Dataset de turma**

**Atualização oficial:** fluig 1.5.6

Foi adicionado o campo disciplineId no dataset de turmas.

**Notificações**

**Atualização oficial:** fluig 1.5.6

Um volume alto de notificações no sistema, poderia causar timeout no processo de notificação e a rotina não era finalizada, com isso alguns usuários não erão notificados sobre ações no fluig.

**Grupos de comunidades em mecanismos de atribuição**

**Atualização oficial:** fluig 1.5.6

Agora é possível utilizar os grupos de comunidade em mecanismos de atribuição de processos workflow.

## Atualização antecipada #10

**Zoom**

**Atualização oficial:** fluig 1.5.6

Melhorias no componente de zoom quando são utilizados dois componentes no mesmo formuláio.

**Upload de documentos com volume customizado**

**Atualização oficial:** fluig 1.5.6

Não era possível fazer upload de documentos quando a pasta estava configurada para utilizar um volume customizado.

## Atualização antecipada #11

**Resposta "perdida" em uma avaliação**

**Atualização oficial:** fluig 1.5.7

Ao avançar de uma questão já respondida para outra, a resposta da questão era perdida, sendo necesssário responder a questão novamente.

**Ordenação na tela de gerenciamento de matrículas**

**Atualização oficial:** fluig 1.5.7

Foi corrigida a ordenação de usuários por nome na tela de gerenciamento de matrículas.

**Finalizar treinamentos**

**Atualização oficial:** fluig 1.5.7

Agora é possível finalizar treinamentos com pós-teste que possuem questões dissertativas.

**Dataset**

**Atualização oficial:** fluig 1.5.7

Corrigida inconsistência que impedia que um dataset acessasse dados de um formulário no momento que ele estava sendo salvo, pois o dataset estava acessando a metalista de fora de sua transação, o que impedia que enxergasse os dados do formulário em salvamento.

## Atualização antecipada #12

**Throw em eventos de processos com anexos workflow**

**Atualização oficial:** fluig 1.5.7

Após ocorrer um throw em algum evento do processo, os arquivos anexos estavam sendo excluídos, com isso a movimentação da solicitação não era realizada.

****

**Busca de anexos**

**Atualização oficial:** fluig 1.5.7

Foi ajustada a pesquisa de anexos na tela de movimentação de solicitações na aba de anexos para não ser case sensitive (Não diferenciar letras maiúsculas de minúsculas).

**Mensagem de ambiente atualizado**

**Atualização oficial:** fluig 1.5.7

Exibição da mensagem de confirmação de que o servidor está atualizado quando o administrador se autentica na plataforma.

**Zoom de usuários**

**Atualização oficial:** fluig 1.5.7

Foi ajustado o zoom externo de usuários para que funcione corretamente o filtro por grupo quando o id do grupo possui caractere com acento.

## Atualização antecipada #13

**Busca de usuários**

**Atualização oficial:** fluig 1.5.7

Melhoria de performance na tela de busca e seleção de usuários na movimentação de solicitações.


<!-- anchors: Atualizaçãoantecipada1.5.5-Índice, Atualizaçãoantecipada1.5.5-Procedimentosparaatualizaçãodoatualizaçãoantecipada, Atualizaçãoantecipada1.5.5-Atualizaçãoantecipada#1, Atualizaçãoantecipada1.5.5-Atualizaçãoantecipada#2, Atualizaçãoantecipada1.5.5-Atualizaçãoantecipada#3, Atualizaçãoantecipada1.5.5-Atualizaçãoantecipada#4, Atualizaçãoantecipada1.5.5-Atualizaçãoantecipada#5, Atualizaçãoantecipada1.5.5-Atualizaçãoantecipada#6, Atualizaçãoantecipada1.5.5-Atualizaçãoantecipada#7, Atualizaçãoantecipada1.5.5-Atualizaçãoantecipada#8, Atualizaçãoantecipada1.5.5-Atualizaçãoantecipada#9, Atualizaçãoantecipada1.5.5-Atualizaçãoantecipada#10, Atualizaçãoantecipada1.5.5-Atualizaçãoantecipada#11, Atualizaçãoantecipada1.5.5-Atualizaçãoantecipada#12, Atualizaçãoantecipada1.5.5-Atualizaçãoantecipada#13 -->
