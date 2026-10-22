---
title: "Atualização Antecipada 1.6.1"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=281985834"
scraped_at: "2026-03-09T04:21:26.621Z"
depth: 3
anchors: 14
child_links: 43
---

# Atualização Antecipada 1.6.1

Este documento contém um breve descritivo acerca das implementações e correções efetuadas.

- **Implementações**: são apresentadas todas as implementações e evoluções da plataforma contidas na atualização **1.6.1**.
- **Correções:** são apresentados todos os ajustes contidos na atualização **1.6.1**. Tais ajustes compreendem aprimoramento de performance e melhorias em processos já existentes.

Informações detalhadas podem ser obtidas no **Help Online **e aqui mesmo no **http://dev.fluig.com/**.

**Os chamados solucionados em atualizações antecipadas são acumulativos, ou seja, todas as alterações realizadas nas liberações anteriores estarão disponíveis na última atualização.**

****

O que é? Como atualizar?

Para entender o processo de liberação de uma atualização antecipada e o procedimento para atualizar, acesse [Atualização fluig - Atualização antecipada (EP).](/pages/viewpage.action?pageId=73078235)[.](#)

## Atualização antecipada #1

**Central de Tarefas - Minhas solicitações**

**Atualização Oficial**: fluig 1.6.2

Problemas ao exibir a aba Minhas solicitações em SQL Server.

**Mecanismo de atribuição em atividade automática**

**Atualização Oficial**: fluig 1.6.2

Quando uma atividade automática está com mecanismo para um pool e a próxima atividade está sem mecanismo, não estava sendo possível movimentar a solicitação.

**O campo Marca d'Água está desabilitado na tela de impressão de cópia controlada.**

**Atualização Oficial**: fluig 1.6.2

Tratamento realizado para habilitar o campo Marca d'Água quando possuir documentos que a aceitam.

## Atualização antecipada #2

**Componente Zoom - Tabela pai x filho**

**Atualização Oficial**: fluig 1.6.2

Tratamento realizado para que carregue a biblioteca do zoom antes da chamada, ao renderizar tabelas pai e filho que contenham linhas e zoom.

**Atualização de variáveis de cópia controlada - publicação**

**Atualização Oficial**: fluig 1.6.2

Correção da inconsistência das variáveis na propriedade de cópia controlada, sendo possível visualizar as variáveis ao publicar e aprovar o documento.

**Atualização de variáveis de cópia controlada - aprovação**

**Atualização Oficial**: fluig 1.6.2

Ajuste realizado para que as variáveis *Document.ApproversN* e *Document.LeveIN.ApproversN* sejam consideradas e atualizadas ao enviar um documento para aprovação.

**Atualização de variáveis de cópia controlada - visualização**

**Atualização Oficial**: fluig 1.6.2

 Realizado tratamento, para que ao publicar um documento com a opção "Atualiza propriedades de cópia controlada" marcada seja possível visualizá-lo de forma correta não apresentando inconsistências.

**Problema na exclusão de chave estrangeira no banco de dados MySql**

**Atualização Oficial**: fluig 1.6.2

Correção no processo de atualização do fluig 1.6.0 EP8 para 1.6.1 em ambiente com banco de dados MySQL. Uma nova condição garante a remoção de chaves estrangeiras (FK) não mapeadas antes da exclusão de uma coluna na base.

## Atualização antecipada #3

**Problema nas regras do formulário com campo tipo avaliação**

**Atualização Oficial**: fluig 1.6.2

Tratamento realizado para que os campos *“input” avaliação* sejam apresentados nas regras do formulário.

**Tratamento na exibição de colunas no componente zoom**

**Atualização Oficial**: fluig 1.6.2

Ajustes realizado no componente de zoom, para que mostre apenas as colunas definidas no campo *“fields”* quando utiliza-se datasets customizados.

**Tratamento na ordenação de colunas no componente zoom**

**Atualização Oficial**: fluig 1.6.2

Ajuste realizado no fonte para que ao renderizar o zoom, as colunas carreguem corretamente respeitando a ordenação definida pelo usuário.

**Melhoria em documentos com a versão inicial 0.000**

**Atualização Oficial**: fluig 1.6.2

Realizada melhoria para que documentos com a versão inicial a partir de 0.000 sejam considerados válidos.

**Exibição de conteúdo publicado na timeline de comunidade**

**Atualização Oficial**: fluig 1.6.2

Correção na exibição de publicações na *timeline* de comunidades e no compartilhamento de publicações para outras comunidades.

**Sincronização do método synchronizeDataset**

**Atualização Oficial**: fluig 1.6.2

Ajustada inconsistência na sincronização de dataset do método synchronizeDataset da api pública através de serviço rest.

## Atualização antecipada #4

**Máscara do tipo data em campos de formulário **

**Atualização Oficial:** 1.6.2

Ajuste na visualização de registros de formulários para que aplique a máscara de data somente em campos explicitamente definidos como data.

**Processo de atualização do fluig 1.6.0 EP8 para 1.6.1 **

**Atualização Oficial:** 1.6.2

Correção no processo de atualização do fluig 1.6.0 EP8 para 1.6.1 em ambientes com banco de dados MySQL. Uma nova condição garante a remoção de chaves estrangeiras (FK) não mapeadas antes da exclusão de uma coluna na base.

****

**Imagem do treinamento**

**Atualização Oficial:** 1.6.2

Ajustada a exibição da imagem do treinamento no espaço Meu aprendizado, evitando que a imagem seja exibida distorcida.

**Desabilitar campos do tipo zoom**

**Atualização Oficial:** 1.6.2

 Realizado ajuste para que seja possível desabilitar o campo zoom após a atualização 1.6.1.

## Atualização antecipada #5

**Gestor de processo**

**Atualização Oficial:** 1.6.2

Não estava apresentando o botão de cancelar solicitação para o gestor do processo.

**Contador de tarefas atrasadas na aba tarefas em pool**

**Atualização Oficial:** 1.6.2

Na aba tarefas em pool, estava sendo apresentado incorretamente o número de tarefas em atraso.

**Cópia controlada com Applet habilitado**

**Atualização Oficial:** 1.6.2

Realizada correção para que ao utilizar cópia controlada com o Applet habilitado, o fluig continue usando o MS Office para que a formatação do documento não fique comprometida.

**Execução da avaliação na turma**

**Atualização Oficial:** 1.6.2

Corrigida a execução de uma avaliação que é um item de tópico de uma turma para não ocorrer inconsistência no momento de efetuar o acesso a ela.

## Atualização antecipada #6

**Execução da avaliação na turma**

**Atualização Oficial:** 1.6.2

Alterada a execução de avaliações para que uma avaliação que faz parte de uma turma seja iniciada corretamente e sem apresentar baixo desempenho quando ela é acessada pela primeira vez por um usuário.

**Consultar as tarefas sob gerencia na central de tarefas**

**Atualização Oficial:** 1.6.2

Corrigida situação que não listava as tarefas sob gerencia quando na central de tarefas o gestor possuía uma atividade parada em um sub processo.

**Controle de log por usuário**

**Atualização Oficial:** 1.6.2

Corrigida inconsistência no controle de log por usuário fazendo com que o arquivo de log seja gerado. Desta forma, após ativado este recurso, no próximo login do usuário será gerado o arquivo de log ficando disponível para download do administrador.

**Avaliação que possui muitos blocos**

**Atualização Oficial:** 1.6.2

Otimizada a execução de avaliações para aumentar o desempenho e não ocorrer inconsistências ao responder as questões quando as avaliações possuem muitos blocos e poucas questões em cada um – 15 blocos com 2 questões em cada um, por exemplo.

**Imagens da timeline**

**Atualização Oficial:** 1.6.2

Realizada melhoria para que imagens da *timeline* não afetem as imagens do artigo publicado, e para que link de imagens importadas no momento da edição, seja montado corretamente.

**Quebra de linha no widget Editor de conteúdo.**

**Atualização Oficial:**1.6.2****

O comportamento da quebra de linha nos textos publicados pelo *widget* Editor de conteúdo foi ajustado para que, após a publicação, as palavras ao final de cada linha não sejam divididas ao meio.

**Inicialização do fluig em ambientes com banco de dados Oracle**

**Atualização Oficial:**1.6.2****

Corrigida inconsistência que contribuía para lentidão do procedimento de inicialização do serviço fluig em ambientes com banco de dados Oracle.

**Busca da aba Segurança **

**Atualização Oficial:** 1.6.2

Ajustada a busca de grupos e usuários da aba Segurança de trilhas e treinamentos para exibir o item buscado, independentemente de ele estar escrito com letras maiúsculas ou minúsculas.

**Widget Mural de avisos. **

**Atualização Oficial:** 1.6.2

O comportamento da quebra de imagens na *widget mural de avisos,* corrigido a inconsistência ao carregar imagens.

**Tabela Pai-filho aplicativo mobile. **

**Atualização Oficial:** 1.6.2

Ajustado no fluig mobile para que ao enviar dados de formulário com o componente pai e filho, os novos dados sejam carregados corretamente.

**Concluir treinamento. **

**Atualização Oficial:** 1.6.2

Corrigida a execução de treinamento para permitir concluí-lo corretamente em um cenário onde o conteúdo que o compõe é do tipo PDF.

**Gateway inclusivo **

**Atualização Oficial:** 1.6.2

Adicionada lógica que permite os Gateways inclusivos, seu correto funcionamento ao utilizar qualquer um dos mecanismos de atribuição.

**Filtro por campo de formulário**

**Atualização Oficial:** 1.6.2

Nos filtros da Central de Tarefas, ao selecionar uma coluna de campo de formulário, não estava sendo apresentada a opção para filtrar por estes campos.

**Informações de data nos complementos**

**Atualização Oficial:** 1.6.2

Estava sendo apresentada incorretamente a data de inicialização e de assumir tarefa na aba complementos para solicitações já finalizadas.

## Atualização antecipada #7

**Falha na exclusão do usuário do grupo**

**Atualização Oficial:** 1.6.2

Corrigido o processo de matrícula de grupos para não matricular usuários que foram excluídos do grupo ao efetuar uma requisição de matrícula em turmas depois que a exclusão desses usuários do grupo já foi efetivada.

**Falha na matrícula por grupo nas turmas**

**Atualização Oficial:** 1.6.2

Corrigido o processo de matrícula de grupos para permitir efetuar a matrícula de grupos que são compostos por mais de 100 usuários sem que ocorram inconsistências que abortem a efetivação da matrícula para uma parte dos usuários.

**Excluir bloco da avaliação**

**Atualização Oficial:** 1.6.2

Corrigida a edição de avaliações para permitir a exclusão de blocos de questões em um cenário onde os blocos foram duplicados incorretamente.

**Evento beforeSendValidate**

**Atualização Oficial:** 1.6.2

Ajustada a inconsistência do evento beforeSendValidate que retornava valor false e encaminhava a solicitação para a próxima atividade, ao invés de permanecer na mesma.

**Visualização de anexos da solicitação**

**Atualização Oficial:** 1.6.2

Solucionada a inconsistência gerada ao tentar visualizar um documento publicado na movimentação de processos, devido à sua versão.

**Transferências de pendências "Solicitações de Workflow Abertas"**

**Atualização Oficial:** 1.6.2

Realizado o ajuste do range do número da solicitação, na tela de transferência de pendência, onde todas as solicitações estavam sendo transferidas para o usuário que as iniciou.

****

**Herança de aprovadores de pendências "Solicitações de Workflow Abertas"**

**Atualização Oficial:** 1.6.2

Realizado o ajuste de herança em pasta com permissão de aprovação, sendo possivel remover o nivel de aprovação corretamente em 3 nivel de hierarquia.

**Componente ZOOM  "Retorno de fields função setSlectedZoomItem"**

**Atualização Oficial:** 1.6.2

Tratamento realizado para manter campos do componente zoom no retorno da função *setSelectedZoomItem*

**

**Acessar pós e pré-teste de treinamentos**

**Atualização Oficial:** 1.6.2

Ajustado o cadastro de avaliações para relacionar os blocos com a empresa ao salvar a avaliação quando não é criada uma nova versão, o que ocasionava inconsistências ao executar essa avaliação a partir de um treinamento.

**Lentidão na execução de avalição e matrícula de usuários**

** Atualização Oficial:** 1.6.2

Efetuadas diversas correções e melhorias para aumentar o desempenho dos recursos de aprendizado e avaliações, tais como execução e histórico de avaliações, matrícula de usuários, exibição de conteúdos SCORM, dentre outras.

**Permissões de matrícula**

** Atualização Oficial:** 1.6.2

Remoção das opções de permissão “Matricular usuários do mesmo grupo”, “Matricular em turmas” e “Matricular em itens do catálogo” do recurso **LMSENC -Aprendizado – Matrículas** existente nas permissões do Painel de Controle. Agora, basta que o usuário tenha permissão de execução no item para que ele possa se matricular.

## Atualização antecipada #8

**Criada a função removedZoomItem**

**Atualização Oficial:** 1.6.2

Criada a função *removedZoomItem* para que seja disparada ao remover um item do campo zoom em tela.

**Função setSelectZoomItem **

**Atualização Oficial:** 1.6.2

Efetuada correção no componente de zoom para que dispare o evento *setSelectZoomItem* corretamente, quando for utilizado os métodos *setValue* ou *SetValues* via script.

**Carregamento do Zoom**

**Atualização Oficial:** 1.6.2

Melhoria realizada para que o usuário seja informado que o zoom está buscando valores em um dataset, onde existem muitos dados.

**wdkAddChild em tabela Pai x Filho **

**Atualização Oficial:** 1.6.2

Ajuste efetuado para que ao executar a *wdkAddChild* adicione os valores corretamente aos campos da tabela Pai x Filho.

**Pai x Filho com mais de 1000 campos**

**Atualização Oficial:** 1.6.2

Correção da inconsistência, para que não considere os campos do pai e filho em formulários com mais de 1000 campos.

**Visualização de conteúdos SCORM no navegador IE**

**Atualização Oficial:** 1.6.2

Alterada a exibição de um conteúdo SCORM que utiliza um motor SWF antigo para que seja visualizado no navegador Internet Explorer nas versões 10 e 11.

**Pré-visualização e execução de avaliações**

**Atualização Oficial:** 1.6.2

Corrigida a pré-visualização e a execução de avaliações, pois não estava sendo considerada a empresa ao salvar os blocos, o que ocasionava inconsistências no momento de efetuar essas ações.

**FluigAPI na atividade de serviço**
**Atualização Oficial:** 1.6.2
Ajustado erro que ocorria ao utilizar serviços da FluigAPI dentro da tarefa de serviço assíncrono.

**Cancelamento de solicitações**
**Atualização Oficial:** 1.6.2
Solucionada inconsistência que era gerada ao tentar cancelar uma solicitação que possuía um subprocesso adhoc já finalizado.

**Tarefa conjunta na Central de Tarefas**
**Atualização Oficial:** 1.6.2
Realizado ajuste para corrigir inconsistência gerada na aba Tarefas a concluir, onde uma tarefa conjunta não apresentava todos os usuários responsáveis na coluna correspondente.

**Mecanismo por associação não retornando todos os usuários possíveis**
**Atualização Oficial:** 1.6.2
Não estava retornando usuários que estão em comum no mecanismo por associação, onde um dos mecanismos é por grupo do colaborador.

## Atualização antecipada #9

**Versão da questão**

**Atualização Oficial:** 1.6.2

Ajustada a edição de questões, pois eram exibidas inconsistências ao buscar a última versão da questão para edição.

**Visualização de avaliações**

**Atualização Oficial:** 1.6.2

Corrigida a pré-visualização e a execução de avaliações, pois não estava sendo considerada a empresa ao salvar os blocos, o que ocasionava inconsistências no momento de efetuar essas ações.

****

**Recurso ShowCamera**

**Atualização Oficial:** 1.6.2

Ao utilizar o método showCamera em um formulário com diversos campos, o mesmo não navega até a aba de anexos, fazendo o usuário não compreender o que acontecia. Essa inconsistência foi ajustada fazendo com que o formulário volte ao topo, focando na aba de anexo.

## Atualização antecipada #10

**Aprovação de documentos**

**Atualização Oficial:** 1.6.2

Realizado tratamento onde ao modificar as propriedades de uma pasta, com aprovadores, os mesmos não sejam removidos. 

**Consulta de Dataset no Painel de Controle**

**Atualização Oficial: **1.6.2

Tratamento realizado na página de apresentação dos datasets do Painel de Controle ocultando o ícone de erro apresentado ao habilitar a opção *offline mobile* no dataset do tipo *builtin*.

**Destravar solicitações**

**Atualização Oficial:** 1.6.2

Corrigida inconsistência que deixava a atividade de serviço parada ao executar os eventos agendados da atividade de serviço juntamente com a atividade de fluxo automático. 

****

**Filtro para adicionar ou remover colunas em campos zoom**

**Atualização Oficial:** 1.6.2

Melhoria realizada para que seja possivel adicionar ou remover  colunas do zoom para melhor visualização dos dados.

**Documentos com herança de aprovação**

**Atualização Oficial:** 1.6.3

Correção realizada para que documentos com herança de aprovação, possam ser aprovados corretamente em pastas que não possuem aprovador ou nível de aprovação.

****

**Cadastrar disciplinas**

**Atualização Oficial:** 1.6.3

Corrigida a criação de disciplinas para não exibir inconsistências ao salvar quando existe um campo adicional cadastrado.

**Cadastrar tópicos de questões**

**Atualização Oficial:** 1.6.3

Corrigida a criação de tópicos de questões para não exibir inconsistências ao salvar quando existe um campo adicional cadastrado.

**Cadastrar links em pastas de trilhas e treinamentos**

**Atualização Oficial:** 1.6.3

Corrigida a criação de links para pastas de trilhas e treinamentos para não exibir inconsistências ao salvar quando existe um campo adicional cadastrado.

**Grupo de alternativas em questões**

**Atualização Oficial:** 1.6.3

Efetuadas correções para exibir os grupos de alternativas para seleção no momento da criação de uma questão no catálogo de tópicos e questões.

## Atualização antecipada #11

**Componentes de tabelas PaixFilho**

**Atualização Oficial:** 1.6.3

Realizado ajuste para que ao gravar formulários que contenham vários componentes de tabela pai x filho, não sejam perdidos os dados ao movimentar solicitações.

## Atualização antecipada #12

**Pós-teste de uma trilha**

**Atualização Oficial:** 1.6.3

Corrigido o acesso ao pós-teste de uma trilha quando ela é composta por pré-teste, dois treinamentos e o pós-teste, pois estava exibindo uma mensagem de inconsistência.

**Rotina de log de acesso**

**Atualização Oficial:** 1.6.3

Reparada inconsistência na rotina de log fazendo com que os logins realizados na plataforma sejam gravados no momento do acesso.

**Idioma do Template de e-mail**

**Atualização Oficial:** 1.6.3

Tratamento realizado no envio de e-mail de recuperação de senha para considerar o idioma configurado pelo usuário no fluig.

## Atualização antecipada #13

**Automática duplicando dados**

**Atualização Oficial:**1.6.2

Corrigido problema de duplicação de atividades, quando o processo está em uma automática.

**Notificação de Cancelamento está Síncrona**

**Atualização Oficial: **1.6.3

Realizado ajuste na notificação de cancelamento que estava síncrona, causando lentidão. Foi ajustada para funcionar de forma assíncrona.

**Datas erradas na central de tarefas**

**Atualização Oficial: **1.6.3

Quando é criado um filtro na central de tarefas para exibir na central um campo de formulário com datas, sendo que em seu valor tem dois formatos de datas (xx/xx/xxxx e xxxx-xx-xx), estava convertendo os valores e gerando uma data incorreta. Essa situação foi corrigida.

**Assumir em bloco ocasionalmente faz assumir para dois usuários**

**Atualização Oficial: **1.6.3

Resolvida inconsistência ao assumir em bloco simultaneamente. Sistema criava uma transação indevida ao assumir em bloco, que faziam commits simultâneos em transações diferentes e causavam divergências de verificação.

**Problema na ordenação das atividades para montar excel**

**Atualização Oficial:** 1.6.3

Corrigida a situação onde uma atividade que estava em pool e era movimentada, na pesquisa da consulta no excel, mostrava que o responsável que aparecia era o pool e não o usuário que fez a movimentação. Agora a consulta passou a ser ordenada por assingDate.

**Exportação e importação de treinamentos**

**Atualização Oficial:** 1.6.3

Efetuadas alterações nos processos de exportação e importação de treinamentos para que não ocorram inconsistências.

## Atualização antecipada #14

**Problema na criaçao do tópico raiz do catálogo de tópicos e questões**

**Atualização Oficial:** 1.6.4

Corrigida a rotina de criação do tópico raiz do catálogo de tópicos e questões para verificar a sua existência no primeiro acesso. Caso ele não exista, será criado.


<!-- anchors: AtualizaçãoAntecipada1.6.1-Atualizaçãoantecipada#1, AtualizaçãoAntecipada1.6.1-Atualizaçãoantecipada#2, AtualizaçãoAntecipada1.6.1-Atualizaçãoantecipada#3, AtualizaçãoAntecipada1.6.1-Atualizaçãoantecipada#4, AtualizaçãoAntecipada1.6.1-Atualizaçãoantecipada#5, AtualizaçãoAntecipada1.6.1-Atualizaçãoantecipada#6, AtualizaçãoAntecipada1.6.1-Atualizaçãoantecipada#7, AtualizaçãoAntecipada1.6.1-Atualizaçãoantecipada#8, AtualizaçãoAntecipada1.6.1-Atualizaçãoantecipada#9, AtualizaçãoAntecipada1.6.1-Atualizaçãoantecipada#10, AtualizaçãoAntecipada1.6.1-Atualizaçãoantecipada#11, AtualizaçãoAntecipada1.6.1-Atualizaçãoantecipada#12, AtualizaçãoAntecipada1.6.1-Atualizaçãoantecipada#13, AtualizaçãoAntecipada1.6.1-Atualizaçãoantecipada#14 -->
