---
title: "Atualizações (1.6.4)"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=353278726"
scraped_at: "2026-03-09T04:18:06.930Z"
depth: 3
anchors: 111
child_links: 81
---

# Atualizações (1.6.4)

Novo ciclo de atualização fluig

---

A partir da **Waterdrop**** **contaremos com apenas 2 grandes atualizações por ano. Dessa forma, os nossos clientes ganharão mais estabilidade em suas operações e menos janelas de atualização da plataforma.

Outra novidade é o destaque maior para as atualizações evolutivas (**Update **). 

A partir de agora, as liberações mais relevantes serão identificadas por um selo especial:

![](/download/attachments/353278726/essential2.png?version=1&modificationDate=1530206065000&api=v2) **Essential:** incluem correções e pequenas evoluções da plataforma.

![](/download/attachments/353278726/mandatory2.png?version=1&modificationDate=1530206065000&api=v2) **Mandatory:**** **atualizações que possuem correções críticas emergenciais.

Veja todos os detalhes em: [Atualização fluig](/pages/viewpage.action?pageId=73078235).

**oculto**

## 

##  XX de Dezembro de 2019 

---

## Correções

**Card**

**Chamado**

- Descrição

**Card**

**Chamado**

- Descrição

## 

##  08 de Março de 2021 

---

Correção Mandatory

Foi identificada uma vulnerabilidade crítica que requer uma atenção especial em seu ambiente.
A situação corrigida encontra-se disponível em **Mandatory 1.6.4-210308**.

Saiba quais são os impactos:

- Esta situação permitia a leitura de arquivos que estejam no sistema operacional. Foram realizados ajustes para sanar falha de segurança relacionada.

Para mais detalhes sobre a situação confira o **comunicado oficial** no portal de clientes.

## 

##  10 de Dezembro de 2019 

---

## Correções

- Corrigido o conflito existente com o nome de *widgets* e *slots* de páginas que impedia que a plataforma fosse iniciada corretamente após atualizá-la.

- Efetuadas alterações para não permitir acessar o conteúdo de um treinamento a partir de sua URL sem estar autenticado na plataforma

## 

##  29 de Novembro de 2019 

---

## Correção

- Efetuadas correções para que a plataforma seja iniciada corretamente depois de atualizá-la quando é utilizado o banco de dados SQL Server 2012.

## 

##  22 de Novembro de 2019 

---

**Fluig Messaging desativado**

A partir desta atualização, o recurso fluig Messaging não faz mais parte da plataforma fluig. Todos os serviços relacionados a ele foram desativados: correções, atualizações, atendimento e documentações.

**Saiba quais são os impactos:**

**Barra superior**: o ícone do fluig Messaging foi excluído e não é mais possível utilizá-lo para se comunicar com os usuários da plataforma.

**Eventos**: as sessões virtuais de eventos no LMS deixam de existir.

**Reuniões**: não é mais possível iniciar reuniões virtuais.

**Mensagens**: a troca de mensagens entre usuários a partir da *timeline* ou de comunidades foi desativada.

**Mobile**: o aplicativo fluig Messaging foi removido das lojas Google Play e App Store.

Em breve teremos novidades...

Estamos trabalhando em parceria com uma empresa especialista em comunicação para possibilitarmos o uso de uma ferramenta de comunicação corporativa integrada à plataforma fluig. Em breve divulgaremos mais detalhes.

##  05 de Novembro de 2019 

---

## Correção

- Removida a notificação emitida ao finalizar a avaliação de reação em treinamentos, trilhas e turmas.

- Criada nova API para o fluig mobile para que retorne as informações do usuário logado.

## 13 de Agosto de 2019 

---

## Correção

- Liberadas correções gerais em recursos sociais da plataforma.

##  20 de Maio de 2019 

---

## Correção

- Corrigida a exibição de membros e responsáveis no recurso Contas.

##  15 de Maio de 2019 

---

## Correção

- Efetuadas correções no processo de matrícula em treinamentos para considerar o usuário autenticado no momento da requisição.

##  26 de Março de 2019 

---

Clientes que utilizam o fluig Mobile

Clientes que não conseguem acessar seus processos via Mobile ou que estejam com dificuldade em autenticar-se no aplicativo devem atualizar para a **Update Mandatory 1.6.4-190326**, que contém a correção da situação apontada:

- Realizada alteração no formato de data das [APIs do fluig](https://api.fluig.com/), para evitar a mensagem "Invalid date" em algumas telas da plataforma.

##  01 de Março de 2019 

---

## Correção

- Realizada correção para sanar o erro que ocorria ao acessar a Central de tarefas através do aplicativo fluig.

##  13 de Fevereiro de 2019 

---

## Correção

- Realizada correção para que a sessão do fluig também seja encerrada, assim que o usuário efetuar o *logoff*no Identity.

##  22 de Janeiro de 2019 

---

## Correções

- Realizada correção na inconsistência gerada na função exportar excel na widget de cadastros.

- Ajuste realizado para trazer corretamente as publicações recentes, ao ordenar a *timeline* pela opção "Últimas publicações".

##  02 de Janeiro de 2019 

---

## Correções

- Aplicado tratamento para corrigir inconsistência na consulta de datasets, que ao realizar uma consulta com filtro de um dataset gerado a partir de um formulário, não retornava os valores do dataset de maneira correta.

- Ajuste realizado para que os relatórios gerados de processos que controlam SLA considerem a data e hora de finalização da solicitação.

##  26 de Dezembro de 2018 

---

## Correções

- Efetuadas alterações para não permitir que uma nuvem de relacionamento seja atribuída como responsável pela turma de uma disciplina.

- Efetuados ajustes para que o Messaging emita uma mensagem informativa ao tentar conectar-se a uma conta inexistente.

- Correção de inconsistência na publicação de imagens diretamente do computador para uma comunidade.****

- Correção na imagem do componente "collapse", que não estava sendo apresentado nos formulários.

- Corrigida inconsistência na criação de uma publicação, onde ao clicar no botão de múltiplas imagens e tentar inserir uma imagem apenas. A miniatura da imagem não era apresentada.

- Correção de inconsistências que geravam mensagens no console do navegador ao acessar a Style Guide.

- Remoção das opções de acesso às abas "Documentos", "Formulários", "Artigos", "Vídeos" e "Imagens" no controle de permissões do Painel de Controle, pois essas permissões já são controladas na segurança de cada comunidade.

- Padronização da exibição das mensagens referentes ao evento *beforeCommunityParticipation* nas diversas interfaces da plataforma.

- Efetuados ajustes no rollback da transação da API de adicionar usuários em comunidades, para evitar futuras inconsistências nas transações de serviço.

##  04 de Dezembro de 2018 

---

## Correções

- Correção de inconsistência que impedia o carregamento da *timeline* quando o nome do usuário continha o caractere aspas simples (').

- Correção de inconsistência na publicação de uma versão antiga da página.

- Efetuada correção para exibição correta da aba de formulários da comunidade, após excluir um formulário do volume.

- Realizada correção na tela de cadastro de regras de formulários para sanar inconsistência ocorrida quando havia grande quantidade de regras cadastradas, permitindo que o usuário consiga filtrar e aplicar as alterações feitas de forma correta, sem perder registros.

- Realizado ajuste na consulta do dataset document via evento, para que ao realizar um procedimento utilizando tanto um usuário comum quanto um administrador, seja retornada a descrição do documento normalmente

- Realizada correção para sanar inconsistência apresentada no momento que o usuário tenta movimentar uma solicitação que acabou de passar por um gateway, onde a mensagem “Esta tarefa já foi assumida por outro usuário" era apresentada

- Corrigidas inconsistências na validação de regras para campo de formulário(via processo), para que a mensagem de erro não apareça, mesmo após ter sido corrigido.

## 

##  13 de Novembro de 2018 

---

## Correções

- Correção realizada para evitar a criação de páginas com o mesmo nome de uma página interna.

- Realizado ajuste no campo numérico do formulário, para que os números negativos sejam salvos corretamente.****

- Corrigida situação onde, ao utilizar o evento de formulário *beforeSendValidate* e movimentá-lo diretamente para uma atividade exclusiva, o *nextState*, número da atividade destino, seja apresentado de forma correta.

- Corrigida a inconsistência que gerava atraso nas notificações das solicitações em pool.

- Realizados ajustes na movimentação de atividade, onde ao tentar movimentar uma atividade que não possui anexo, era gerada inconsistência e ao realizar nova tentativa, era criado um processo inexistente.

##  26 de Outubro de 2018 

---

## Arquitetura

**Fique por dentro do que acontece no seu ambiente **

Essa atualização trouxe melhorias para otimizar a sua experiência como administrador do fluig de sua empresa, tornando a comunicação mais ágil e aderente aos seus usuários administradores.

O Version recebeu novos recursos para viabilizar a notificação de acontecimentos e atualizações importantes pela própria plataforma, que serão apresentadas em tela a cada login do usuário administrador. 

- [Atualização da plataforma](#)
- [Importante](#)
- [Servidor de licenças](#)

![](/download/attachments/353278726/Image%20001.png?version=1&modificationDate=1540587293387&api=v2)

![](/download/attachments/353278726/Image%20002.png?version=1&modificationDate=1540587297963&api=v2)

![](/download/attachments/353278726/Image%20003.png?version=1&modificationDate=1540587298477&api=v2)

## Correções

- Correção de inconsistência na ação de esvaziar lixeira e ajustes na mensagem apresentada ao restaurar todos os documentos da lixeira

- Incluída validação na tela de Dataset (web) para bloquear a criação de datasets com código ou descrição contendo caracteres especiais.

- Realizados ajustes nos horários, para que fiquem compatíveis com a nova definição de horário de verão no timezone América/São_Paulo, nos complementos da solicitação.****

- Realizada correção no método hAPI.listAttachments, que no momento da validação, vinculava um responsável e paralisava a solicitação. Situação ocorria somente com componente *Gateway* exclusivo.

- Efetuadas correções no Messaging Web para não continuar emitindo notificações de mensagens que já foram lidas.

##  23 de Outubro de 2018 

---

Clientes com inconsistência de horário de verão

Esta é uma atualização considerada **Mandatory** para você, pois corrige a situação informada no [portal de clientes](https://tdn.totvs.com/pages/viewpage.action?pageId=871502812#:~:text=Equipe%20Fluig%20Plataforma.-,23/10/2018,-Incidente%20de%20hor%C3%A1rio) que pode ter adiantado erroneamente em uma hora, o horário da plataforma, neste final de semana (21/10/2018) devido ao horário de verão.

Veja todos os detalhes e possíveis perguntas e resposta, na [notícia oficial](https://tdn.totvs.com/pages/viewpage.action?pageId=871502812#:~:text=Equipe%20Fluig%20Plataforma.-,23/10/2018,-Incidente%20de%20hor%C3%A1rio) publicada no portal.

## Correções

- Ajuste na [documentação](https://api.fluig.com/resource_SearchServiceRest.html) dos parâmetros '*fields*' e '*customFields*' da API  /search/advanced.

- Realizado ajuste para bloquear o *download* de pastas quando a opção "Habilita meus documentos" estiver desmarcada na tela de [Parâmetros](/pages/viewpage.action?pageId=234455426).

- Realizadas correções para permitir que uma atividade que ainda não foi assumida, possa ser movimentada corretamente através do fluxo automático.

- Tratamento realizado para que ao editar um dataset suas chaves sejam recuperadas ao utilizar um serviço JDBC.

- Correção da JDK embarcada no produto que ocasionou alteração errônea do horário de verão. 

## 

##   16 de Outubro de 2018 

---

## Correções

- Ajustes na validação ao atualizar documento, para considerar documentos com versão 0.000 e também validar a permissão do usuário.

- Correção realizada para bloquear a ação de restaurar da lixeira um documento que esteja em *check-out*.

- No método *updateDocument* foram adicionadas validações e realizada a recuperação do *companyId*, quando não informado pelo usuário, para que ao utilizar o método o documento seja atualizado corretamente.

- Correção de inconsistência na extração dos dados de um formulário de comunidade.

- Corrigido problema com bases Oracle onde a segurança dos registros não era respeitada ao enviar o parâmatro *checkSecurity=true* para a consulta de datasets de formulários.****

- Realizado ajuste para sanar inconsistência ao movimentar uma solicitação que possuía atividade automática após uma atividade inicial com escolha de usuário, onde era cancelada a operação de escolha e tentava reenviar, apresentando mensagem de erro.

- Efetuadas correções para exibir o botão Concluir trilha quando o acesso é feito pelo navegador de um dispositivo móvel.

- Ajustada a exibição da imagem de questões na execução e no histórico de avaliações.

- Alterado o cálculo da nota final da avaliação para considerar a nova pontuação de uma questão que foi corrigida novamente.

- Correção realizada ao cancelar a publicação de uma imagem, onde a imagem armazenada em uma pasta temporária era disponibilizada para *upload* na tela de *Incluir Documento Avançado*.

##  02 de Outubro de 2018 

---

## Correções

- Inclusão de mensagem de alerta na tela de Publicação múltipla, para alertar o usuário de que o *upload* pode falhar em decorrência do tamanho e da quantidade de itens de um arquivo ZIP.

- Realizado ajuste na tela de "Detalhamento de versões do documento", para que ao selecionar outras versões do documento na listagem, a lista de "Histórico de aprovação da versão/revisão" seja atualizada corretamente.

- Realizado ajuste para não gerar uma nova versão do documento, ao publicá-lo como anexo em uma solicitação.

- Corrigidas a edição e a exibição da formatação do enunciado de questões de avaliação.

- Realizado ajuste no Approval, para que seja apresentada a mensagem “solicitação necessita ser movimentada individualmente” sempre que houver movimentação de uma solicitação em bloco para a próxima atividade automática.

##  25 de Setembro de 2018 

---

## Correções

- Corrigida a exibição de uma avaliação que foi respondida e finalizada em um tópico de uma turma no Histórico de avaliações.

- Ajustado o recurso Eventos, aba Sessões que participei, para exibir corretamente o horário inicial do evento.

- Corrigidas as opções para expandir e ocultar as questões de um bloco durante a execução de uma avaliação.

- Removida a geração de *log* referente ao serviço de *realtime*, quando o parâmetro realtime.enabled estiver com o valor *false*.

- Ajuste realizado na plataforma para que ao realizar alteração de e-mail em usuário provisionado no fluig a ação ocorra normalmente.

- Realizado ajuste na movimentação do processo para que ao digitar um nome diferente dos usuários configurados no papel da atividade, não retorne nenhum resultado.

- Corrigido o método *possible-assignees* para retornar a listagem de usuários e não apenas um usuário, ao utilizar um processo com mecanismo customizado por campo de formulário no Approval.

- Realizadas alterações para que seja possível retornar os complementos adicionados ao ter uma atividade reprovada no Approval.****

- Realizada correção no layout do cabeçalho das abas de workflow da solicitação, para que não desconfigurem ao utilizar a versão 1.6.4 Snowflake.

##  18 de Setembro de 2018 

---

## Correções

- Corrigida a exibição de horários na agenda considerando o GMT que está sendo utilizado.

- Ajustado o *layout* de treinamento para exibir o botão **Concluir treinamento** ao acessá-lo a partir do navegador de um dispositivo móvel.

- Realizadas alterações para que ao atualizar um valor de campo através da função hAPI.setCardValue em uma atividade de serviço ou um evento de processo, seja atualizado o valor no filtro de processos na central de tarefas.

- Realizada correção na visualização dos complementos da solicitação, que eram mostrados de forma duplicada sempre que utilizado o evento beforeStateEntry em uma atividade automática que direcionava para uma atividade fim.

- Incluída a variável WKReplacement, para ser utilizada em todos os eventos de formulário, auxiliando assim os usuários que necessitam de informações geradas pelos eventos, para manipulá-lo.

- Realizado ajuste no banco de dados Oracle para que, ao realizar uma movimentação em bloco que contenha um formulário, todos os registros sejam salvos.

- Alterado o serviço de consulta de documento do fluig para que ao sincronizar o fluig Connect o mesmo atualize os arquivos com as últimas alterações realizadas corretamente.

- Ajuste no feedback para o usuário ao realizar o check out para evitar registros duplicados tornando possível acessar a aba "documentos em check out" na central de tarefas.

##  11 de Setembro de 2018 

---

## Correções

- Efetuados ajustes para permitir inserir um valor com casas decimais ao responder uma questão do tipo Valor em uma avaliação.

- Realizada correção nos complementos da solicitação principal, para que permita visualizar corretamente os complementos ao cancelar um subprocesso em atividades paralelas.

- Realizada correção para sanar problema com formulários antigos que não possuíam a tag name. Ajustado para que quando não possuir a tag name, o mesmo não seja salvo.

##  04 de Setembro de 2018 

---

## Correções

- Nova estrutura criada para localizar a última versão da página pai, fazendo com que a mesma seja apresentada na listagem de páginas pais no momento de criar uma página filha.

- Ajuste realizado no serviço de listagem de documento, para que ao realizar o download de diretório que contém arquivos e subdiretórios os mesmos sejam baixados para a maquina do usuário corretamente.

- Ajuste na mensagem apresentada na tentativa de acessar o fluig à partir do *Identity*, quando já existe um usuário cadastrado e bloqueado no fluig a fim de tornar a mensagem mais clara.

- Realizada correção no layout de formulários, para sanar inconsistência que gerava desconfiguração em tela, em que os botões se sobrepunham sobre barra de rolagem e demais campos.

- Removida a opção de criação de Formulário pelo Forms beta da pasta Meus Documentos, que após criado não possibilitava editar ou excluir o registro.

- Ao remover o acesso da página Home de um usuário comum, o menu lateral não era exibido. Efetuada correção para que o mesmo apareça normalmente.

##  28 de Agosto de 2018 

---

## Correções

- Realizado ajuste para que as páginas filhas não sejam apresentadas na lista principal de páginas no mobile.

- Renomeada a classe *font family* para que o ícone do collapse seja apresentado corretamente permitindo a ação de expandir/recolher as sessões do accordion.

- Correção no link da tela de URL personalizada de acesso à pagina, que agora direciona para a documentação de [Adicionar página](/pages/viewpage.action?pageId=234455933).

- Correção de inconsistência na permissão para editar uma página utilizando a *widget* "Editor de Conteúdo".

- Alterado o tamanho da coluna *RESOURCE_CODE* nas tabelas *FDN_RESOURCE* e *FDN_RESOLVEDPERMISSION* para solucionar a inconsistência apresentada ao tentar incluir um novo usuário em nuvem.

- Correção realizada na indexação de documentos que ainda estão pendentes de aprovação, para que não sejam listados nos resultados da busca geral da plataforma.

- Corrigido o processo de matrículas em treinamentos para permitir matricular um grupo com mais de 2000 usuários.

- Efetuados ajustes no processo de matrículas de grupos de usuários para desconsiderar usuários bloqueados e não gerar matrícula para eles.

- Realizada correção nos complementos da solicitação, para exibir corretamente as frases completas de textos que possuem hora (date time) incluídas.

- Corrigida situação que não permitia dois ou mais usuários de movimentar e aprovar uma atividade em consenso através do aplicativo Approval, onde somente o primeiro usuário conseguia aprová-la, após isso, era apresentado erro.

- Realizado ajuste para que as notificações de expiração para requisitante, responsável e gestor sejam enviadas corretamente de acordo com o prazo de aviso configurado.

- Realizada correção para que os complementos adicionados em uma atividade antes de um gateway, sejam enviados corretamente no e-mail de movimentação.

##  21 de Agosto de 2018 

---

## Correções

- Correção nos termos referentes ao controle de cotas, os textos das opções são:*"Limite de Cota"* e *"Cota esgotada"*.

- Corrigido o retorno da API *GroupServiceRest*, no serviço [findUsingFilter](https://api.fluig.com/resource_GroupServiceRest.html#resource_GroupServiceRest_findUsingFilter_GET), para trazer na tag *"data"* os dados adicionais cadastrados para cada grupo.

- Tratamento realizado para exclusão de arquivos criados pela plataforma na pasta /*temp* do servidor de instalação, quando os serviços forem parados.

- Correção no campo de configuração da quantidade de registros por página, na tela de Visualizar usuários, para voltar a exibir as opções e a quantidade selecionada.

- Correção realizada no *ID do renderContent* para que os campos numéricos das *widgets* que contenham tabelas, exibam os valores corretamente.

- Solucionada inconsistência ocorrida no evento de sinais, sempre que a segunda tentativa de envio para o sinal era retornado da atividade comum, gerando erro no log e mensagem para o usuário.

- Realizada correção nos complementos da solicitação de um processo, para que uma mensagem seja adicionada no histórico para atividades automáticas que possuem mais de uma saída na atividade final.

- Corrigida inconsistência dos mecanismos de atribuição “por um papel” e "por grupo", onde sempre o primeiro nome da lista era definido como usuário responsável, não importando qual usuário fosse selecionado.

##  14 de Agosto de 2018 

---

## Correções

- Ajustada a pré-visualização de questões para exibir corretamente o enunciado da questão que está sendo cadastrada.

- Corrigida a exibição de questões no cadastro de blocos para exibir todas as questões que os compõem, sem limitar em 10 questões.

- Corrigido o funcionamento do botão **Cadastrar lacunas** – na criação de uma questão do tipo lacuna – para permitir cadastrar corretamente as lacunas que foram inseridas no enunciado da questão.

- Efetuadas alterações no cadastro de questões para exibir as imagens que já existiam em uma questão que está sendo editada.

- Ajustada a emissão de notificações de eventos para não notificar a criação ou a exclusão de sessões do evento para o próprio usuário que está efetuando essas ações.

- Corrigida a exibição do horário de sessões de eventos na agenda.

- Corrigido o redirecionamento de avaliações do tipo pré-teste para direcionar o usuário para a execução do treinamento ao qual ela pertence quando for finalizada.

- Tratamento realizado para que ao fazer a busca e incluir um usuário como substituto, liste apenas os usuários ativos para essa substituição.

- Correção de inconsistência no *plugin* de seleção de *datasets* para importação pelo plugin fluig Designer no Studio/Eclipse.

-  Inclusão de mensagem para alertar o usuário, de que o mesmo deve informar o certificado para a aprovação do documento com assinatura digital ocorrer normalmente.

- Corrigida a busca de documentos em uma pasta com restrição de acesso por um grupo com subgrupos, para que os documentos também possam ser buscados por usuários pertencentes a estes subgrupos.

- Tratamento realizado para utilizar o protocolo *http* corretamente, ao realizar o teste de conexão interna do *realtime* no *WCMAdmin*.

- Realizada correção para sanar inconsistência que não permitia visualizar os campos descritores do formulário, no filtro de processos.****

- Realizada correção no controle de validação do formulário, que apresentava inconsistência no momento de movimentar um processo para um subprocesso.****

- Corrigida inconsistência na data de atualização, quando uma tarefa em pool é assumida.

- Realizada correção nas notificações, que não estavam respeitando o prazo de conclusão e enviando mensagens de alerta de tarefas expiradas, mesmo não tendo sido configurada para envio.

- Realizada correção que altera a descrição de Requisitante para Solicitante na tela de consulta de solicitações.

- Corrigida inconsistência ocorrida ao realizar uma transferência na atividade inicial.

- Corrigida inconsistência apresentada no log, ao acessar a configuração do processo e atribuir permissão de visualização para um grupo.

- Realizado ajuste para que quando realizada a consulta à datasets com a constraint *Should,* considere corretamente a condição entre constraints. A situação ocorria ao exportar um formulário e adicionar um registro como nome e sobrenome, a plataforma solicitava a busca das duas constraints ao invés de validar a primeira que encontrava.

- Ao remover a permissão do *widget* 'Nova publicação' para membros de uma comunidade, os *widgets* que estavam no mesmo slot também ficavam restritos. Efetuada correção para que o permissionamento seja aplicado somente no *widget* escolhido.

##  07 de Agosto de 2018 

---

## Correções

- Ajuste realizado para que ao tentar remover um tipo de documento com arquivos vinculados, a mensagem apresentada na ação seja organizada em forma de lista facilitando a leitura.

- Removida validação que não permitia adicionar grupos que continham MEMBER_ no nome.

- Resolvida inconsistência onde não era apresentado o botão para download dos arquivos.

- Correção realizada para que ao restaurar um documento da lixeira o arquivo possa retornar de forma isolada dentro da pasta a qual pertencia antes da exclusão.

- Corrigida a execução de avaliações a partir do *link* recebido por *e-mail* para exibir corretamente o conteúdo da avaliação.

- Ajustada a mensagem de conclusão de uma avaliação de reação para não exibir nota e nem *status* de aprovação, visto que essas informações não são pertinentes para esse tipo de avaliação.

- Realizada correção no  plugin fluig Designer para sanar inconsistência que ocorria quando um usuário comum tentava configurar um mecanismo de atribuição.

- Realizada correção no filtro da central de tarefas, onde sempre que incluídos os dados de solicitante juntamente com os dados de formulário, ao exibir o filtro, não eram mostrados os dados de formulário.

- Corrigida inconsistência encontrada na exportação de solicitações das tarefas sob minha gerência, quando possui um mecanismo personalizado.

- Realizada correção nas preferências do usuário, que não permitia adicionar um substituto.

- Realizada correção no console do navegador, que exibia uma mensagem de erro para quem possui o widget de documentos favoritos, na página inicial.

- Remoção de métricas que impactavam a execução de serviços do fluig. As métricas depreciadas foram:*LOG_DIR_SIZE_MONITOR*, *TEMPLATE_DIR_SIZE*, *VOLUME_DIR_SIZE *e *TEMPORARY_DIR_SIZE*.

- Corrigida a desativação do serviço do *realtime*, para evitar a geração de alertas no navegador.

##  31 de Julho de 2018 

---

## Correções

- Corrigida inconsistência na gravação do comentário, ao fazer o check in de um documento.

- Implementada validações para informar o usuário que os parâmetros *documentId* ou *version* precisam ser informados no *updateDocument.xml* para que o upload de documentos ocorra normalmente.

- Efetuados ajustes no Messaging Web para que a sessão não seja perdida ao iniciar uma conversa com um usuário que possui um nome relativamente extenso – aproximadamente 40 caracteres, por exemplo.

- Corrigida a informação de tempo mínimo e máximo de execução na tela inicial de avaliações.

- Efetuados ajustes no agendamento de avaliações por *e-mail* para que a URL de acesso à avaliação seja enviada corretamente.

- Realizado ajuste na mensagem exibida ao usuário substituto, quando não possuir mais permissão para visualizar um processo.

- Realizada correção na tela de atribuição de usuário, ao iniciar uma solicitação, onde eram exibidas duas telas para seleção do usuário, sempre que o processo era configurado por campo de formulário.

- Realizada correção na validação das regras de anexos nos processos, onde mesmo realizando o upload de um arquivo na atividade inicial, possuindo regra de anexo e atendendo os requisitos, era exibida a mensagem de que a regra não havia sido aplicada.

- Tratamento realizado para registrar os logins efetivados na plataforma quando já existe uma sessão ativa e a mesma foi fechada no navegador.

- Efetuada correção na criação e edição de páginas para que quando estiver habilitado os *pathparams*para adição de url personalizada, os mesmos não sejam convertidos para letra minúscula na navegação de páginas.

##  24 de Julho de 2018 

---

## LMS

**Vídeos externos em treinamentos: sim, agora é possível!**

Se você tem vídeos armazenados nas plataformas YouTube, Vimeo ou Kaltura e gostaria de utilizá-los em treinamentos, temos uma excelente notícia para você: agora é possível utilizar apenas a URL deles para relacioná-los aos seus treinamentos. Dessa forma, você não precisa baixar o vídeo e cadastrá-lo como um arquivo, evitando assim, a ocupação demasiada de espaço de armazenamento na plataforma. Excelente, não é mesmo?

**Entenda:**

É muito fácil incluir vídeos de plataformas externas em seus treinamentos:

**1** → primeiramente, você cadastra a URL do vídeo como um [conteúdo](https://tdn.totvs.com/pages/viewpage.action?pageId=233766518#Conte%C3%BAdos-URL);

**2** → depois é só incluir esse conteúdo no [treinamento](https://tdn.totvs.com/display/HF/Treinamento#Treinamento-conte%C3%BAdo) desejado.

Pronto! O vídeo externo será exibido como um conteúdo dentro do próprio *player*do treinamento.

Dica!

Além de vídeos, você pode incluir outras URLs para que sejam acessadas a partir da execução do treinamento, tais como um site, um blog, uma página de uma mídia social, dentre outros. Nesse caso, o conteúdo será exibido em uma nova aba do navegador.

- [Cadastro do vídeo](#)
- [Inclusão do vídeo no treinamento](#)
- [Visualização do vídeo no treinamento](#)

![](/download/attachments/353278726/conte%C3%BAdo-url.PNG?version=1&modificationDate=1531915567000&api=v2)

![](/download/attachments/353278726/inclus%C3%A3o-url-treinamento.PNG?version=2&modificationDate=1531915614000&api=v2)

![](/download/attachments/353278726/v%C3%ADdeo-treinamento.PNG?version=1&modificationDate=1531915636000&api=v2)

## Correções

- Realizado ajuste na impressão com marca d'água, para que obedeça corretamente a margem de documentos em PDF.

- Corrigida inconsistência na plataforma, que bloqueava o *download* de pastas criadas pelo recurso *docAPI.CreateFolder*, mesmo que as permissões estivessem devidamente configuradas. 

- Melhorada a mensagem explicativa que é exibida ao solicitar matrícula em uma determinada turma de uma disciplina para um usuário que já está matriculado em outra turma dessa mesma disciplina.

- Efetuados ajustes no cadastro de questões para permitir formatar a descrição utilizando a fonte no tamanho 3 e exibir corretamente essa formatação.

- Removido o *tooltip* que exibia o tipo na listagem de contas por ser desnecessário, visto que o tipo da conta já é exibido na coluna Tipo.

- Corrigido o filtro Categoria, existente na aba Minhas pendências do recurso Gerenciamento de matrículas, para exibir corretamente os resultados de acordo com a opção selecionada.

- Adicionada uma [nova API](https://api.fluig.com/resource_CommunityServiceRest.html#resource_CommunityServiceRest_listMyCommunitiesWithRelevanceByLogin_GET) que lista as publicações da timeline com base no login do usuário, afim de evitar conflitos na listagens dos posts.

- Realizada padronização para os títulos da *widgets* de favoritos aparecerem do mesmo tamanho.

- Ao importar uma página com um ícone, o nome do mesmo era duplicado, ocorrendo de ultrapassar o limite de caracteres permitidos. Efetuada correção para que o nome do ícone permaneça correto.

- Ajustada formatação do menu de opções de artigos publicados em uma comunidade, o qual não respeitava o layout de topo da plataforma.

- Corrigida situação onde usuários que pertenciam a uma determinada comunidade conseguiam compartilhar e publicar mesmo não tendo permissão para a ação.

- Corrigida inconsistência que impedia a exibição correta da tela de login, quando era feita a configuração de Active Directory na criação da empresa.

- Inclusão de verificação de versionamento para que ao criar um artigo pelo ECM e editar na comunidade respeite as características de versionamento quando herdadas da pasta.

- Correção da inconsistência onde eventos assíncronos geravam concorrência ao criar configuração de notificação para o usuário.

- Realizado ajuste no botão que indica o redirecionamento interno da página. Para que ao criar uma página utilizando um navegador com zoom de 90% o botão seja apresentado de forma correta.

- Efetuada correção nas páginas marcadas como 'Agrupadas', pois não estava sendo possível editá-las.

- Corrigida situação para que, quando criado um formulário pela web, seja aplicado o nome do dataset nas propriedades do formulário corretamente.****

- Realizada correção para que toda vez que for realizada uma alteração no campo checkbox do formulário de processo e esse processo for movimentado, a alteração seja salva com sucesso.

##  17 de Julho de 2018 

---

## Correções

- Ajustada a sincronização de usuários para o LMS para emitir uma notificação quando ocorrer alguma inconsistência durante o processo.

- Inconsistência corrigida ao utilizar a função javascript *ReloadZoomFilterValues* dentro do código de um formulário  quando um item informado no campo em tela possuía espaços. Os formulários que apresentassem essas condições, não era retornada nenhuma informação no campo de pesquisa vinculada. Realizado tratamento para que ao utilizar, por exemplo, barras nas datas no formato 01/01/18, estes sejam filtrados corretamente.

- Incluído o campo com a informação do nome do usuário na página de atribuição, onde anteriormente só era possível visualizar a matrícula do usuário.****

- Realizado ajuste para sanar inconsistência ocorrida com o horário de finalização das tarefas em consenso, nos complementos da solicitação, que ao movimentar as tarefas em horários distintos, era apresentado o mesmo horário em todas as movimentações.

- Realizada correção para sanar inconsistências ocorridas nas aprovações de um substituto em atividades em consenso onde o mesmo também exerce o papel de  aprovador nominal/oficial da atividade.

- Realizada correção para que a notificação de tarefa atrasada considere o fuso horário da Localização Padrão da empresa caso o usuário não tenha uma localização própria cadastrada no seu perfil.

- Dependência do Banco de Dados Oracle foi atualizada, para solucionar inconsistências de conexão (*datasource*).

- Incluída mensagem de aviso sobre a especificação CORS (*Cross Origin Resource **Sharing*), que impede a visualização de documentos externos com um endereço de documento externo que utilize o protocolo HTTP, quando o endereço de origem (da plataforma) utiliza o protocolo HTTPS.

- Ajuste realizado para que não seja enviada notificação ao criador do documento quando o evento social de notificação está desativado.

- Corrigida inconsistência ao editar as informações de um *dataset* com conexão ao banco de dados, em que as informações preenchidas não eram exibidas.

- Ícone do painel de controle não era exibido no tema Snowflake. Efetuado ajuste para que o mesmo apareça normalmente.

- Efetuada correção nas chamadas JavaScript que geravam mensagens de erro no console do navegador, quando a experiencia de uso estava ativada no tema Snowflake.

##  10 de Julho de 2018 

---

### Pequenas melhorias

## Arquitetura

**Sem registros duplicados!**

Nessa atualização você poderá definir em um dataset gerado, as chaves que serão utilizadas no momento da sincronização offline, desta forma os registros não serão duplicados a cada sincronização.

Na configuração do Dataset, foi criado uma nova aba, "Chaves do dataset", onde as chaves podem ser definidas conforme a necessidade. Atualize sua plataforma e garanta essa facilidade!

**Saiba mais!**

Para mais detalhes, consulte a documentação [Plataforma ❙ Datasets](/pages/viewpage.action?pageId=235598394).

- [Chaves do Dataset](#)
- [Configuração](#)

![](/download/attachments/353278726/chaves%20do%20dataset.png?version=1&modificationDate=1531168523000&api=v2)

![](/download/attachments/353278726/chaves%20do%20dataset1.png?version=1&modificationDate=1531168541000&api=v2)

## Correções

- Realizada alteração na instrução que faz a busca de sinônimos no SQL para que permita cadastrar um serviço JDBC SQL Server onde o *collate* é *case sensitive* (parâmetro responsável por diferenciar letras maiúsculas e minúsculas).

- Linhas de registro de dados do componente pai e filho eram registrados de forma duplicada em banco de dados Oracle ao movimentar uma solicitação pelo mobile. Essa situação foi corrigida a fim de evitar a duplicidade dos dados quando movimentada a solicitação via mobile.

- Solucionada inconsistência na movimentação de uma atividade automática, onde após abrir a tela de atribuição de um usuário sem selecionar o mesmo em uma primeira vez, não era possível abrir a tela de atribuição novamente.

- Ao abrir a modal das regras na edição de formulários, a última regra cadastrada não era listada. Realizado ajuste para que a lista de regras seja carregada corretamente, mostrando toda as regras cadastradas.

- Ajustado o cadastro de [avaliações](/pages/viewpage.action?pageId=233766578) para exibir todos os blocos que foram criados ou importados, permitindo que todos eles sejam configurados dentro da avaliação.

##  03 de Julho de 2018 

---

## Correções

- Ajustado processo de aprovação de documento com compartilhamento externo, para que a opção de compartilhamento, quando marcada, permaneça habilitada.****

- Ajustados os parâmetros da API *api/public/2.0/users/list*, para retornar a quantidade de usuários ativos na plataforma corretamente.

- Tratamento realizado para que ao atualizar o fluig o *.jar* do *Progress* não seja atualizado ou sobrescrito.

- Solucionada inconsistência na exportação para o formato site de um projeto pelo *fluig Studio*, o qual não exportava dados dos campos de extensão quando eram utilizadas vírgulas ou barras verticais.

- Realizada correção no Histórico de Avaliações, onde ao clicar no campo Avaliação para ordenação, a página ficava em carregamento e exibia mensagem de erro em tela.

- Ajustes realizado na validação da ação Denunciar, para evitar a contagem de espaços em branco nos comentários de denúncias de documentos ou pastas.

##  26 de Junho de 2018 

---

## Correções

- Realizado ajuste na regra para campos de data no formato long, onde eram apresentadas inconsistências com datas dependendo da localidade do servidor.

- Realizado ajuste com a tradução dos menus de monitoramento de processos e tarefas, que estava apresentando a tradução em inglês e espanhol.

- Realizada correção para solucionar a inconsistência que ocorria ao tentar salvar um arquivo de processo em uma pasta do ECM. Pois quando a pasta selecionada possuía um volume exclusivo, não era possível publicar documento através do método*hAPI.publishWorkflowAttachment*.

- Corrigida lentidão ao carregar a lista de *datasets*, na tela de Importar Dataset Customizado no fluig Studio.

- Realizada correção para que não seja exibido erro no console no navegador, ao acessar a tela de edição do usuário.****

- Efetuada adequação na tela de configuração dos filtros do dataset, ao selecionar o tipo *must_not*.

## 

##  19 de Junho de 2018 

---

## Correções

- Correção de erro que causava a duplicação no processamento das métricas de uso.****

- Quando um usuário era bloqueado na plataforma, os demais usuários definidos como substituto continuavam tendo acesso a Central de Tarefas do usuário bloqueado. Essa situação foi corrigida.

## 

##  12 de Junho de 2018 

---

## Correções

- Foram aplicadas as traduções para os idiomas Inglês e Espanhol que estavam faltando nos recursos Contas, Execução de avaliações e Gerenciamento de matrículas.
- Corrigida a descrição de algumas opções de notificação existentes na listagem da aba Aprendizado do recurso Configuração de notificações.
- Efetuados ajustes no cadastro de disciplinas para que um pré-requisito que foi inserido e depois excluído não continue associado à disciplina indevidamente.
- Efetuadas correções para permitir visualizar as propriedades de um formulário desenvolvido por meio do novo criador de formulários.
- Tratamento realizado para mapear corretamente a URL de acesso aos recursos da *widget*.
- Ajuste realizado na *query* para o retorno correto dos usuários de um subgrupo de um grupo pai.
- Corrigida situação de inconsistência onde, ao criar uma nova versão do processo, não estava sendo mantido o mapeamento de campos do subprocesso na nova versão.
- Não estava sendo possível visualizar todos os complementos da solicitação do processo, pois não era apresentada a barra de rolagem. Corrigido para que seja possível visualizar todos os complementos da solicitação.
- Removido espaço em branco abaixo do formulário na movimentação de solicitações, no tema Snowflake. Agora, o formulário utiliza todo o espaço disponível na página.
- Ajustado relacionamento entre os dados de usuário de social e plataforma o qual eventualmente gerava problemas na navegação quando divergentes.

## 

##  06 de Junho de 2018 

---

Clientes que utilizam o fluig Analytics

Esta é uma atualização considerada **Mandatory** para você, pois corrige a situação informada no [portal de clientes](https://tdn.totvs.com/pages/viewpage.action?pageId=871502812#:~:text=Equipe%20fluig.-,05/06/2018,-Interrup%C3%A7%C3%A3o%20no%20envio), que impede a comunicação entre o fluig e o fluig Analytics.

**Importante:****Após aplicar essa atualização**, se você tinha inserido a linha (138.219.88.208 [analytics.fluig.com](https://analytics.fluig.com/)) no *host* conforme solicitamos no [comunicado](https://tdn.totvs.com/pages/viewpage.action?pageId=871502812#:~:text=Equipe%20fluig.-,05/06/2018,-Interrup%C3%A7%C3%A3o%20no%20envio), **você deverá removê-la**. Esse procedimento deve ser efetuado antes de reiniciar os serviços do fluig.

- ### Correções

**Inconsistência no envio de dados do Analytics**

- Efetuado ajustes para que o envio de dados para o fluig Analytics ocorra normalmente.

**Nuvem de tags**

- Ao configurar o *widget* Nuvem de *tags* para "Geral", não eram exibidas as *tags* postadas em comunidades. Efetuada correção para que todas as *tags* sejam apresentadas.

## 

##  05 de Junho de 2018 

---

### Pequenas melhorias

## Arquitetura

Habilitamos novamente o suporte ao *SNI (server name Indication)* para permitir a conexão em servidores com múltiplos certificados instalados em vários domínios.

## Processos

**Telas de Substituto de cara nova**

Foram realizadas melhorias na tela de substituto para garantir melhor usabilidade e permitir selecionar qualquer processo para ser substituto ou até mesmo para todos os processos. O novo layout permite melhor visualização dos usuários substitutos e do período que atuarão. 

**Saiba mais!**

Mais detalhes, acesse a documentação completa em [Substituto](https://tdn.totvs.com/x/o4H5DQ).

- [Nova página de cadastro de Substituto](#)
- [Nova página de listagem dos substitutos](#)

![](/download/attachments/353278726/Substituto1.png?version=1&modificationDate=1531146685000&api=v2)

![](/download/attachments/353278726/Substituto2.png?version=1&modificationDate=1531147523000&api=v2)

## Correções

- Correção realizada na logica da herança de aprovadores para que ao salvar o documento a ação seja realizada corretamente e o documento não fique como pendente para aprovação.
- Ajuste realizado para que o sistema substitua o *non-breaking* por um espaço normal, tornando possível a publicação e a visualização correta dos documentos.
- Correção realizada na logica da herança de aprovadores para que ao salvar o documento a ação seja realizada corretamente e não fique como pendente para aprovação.
- Correção realizada para que seja possível imprimir arquivos PDF com marca d'água.
- Corrigida situação onde a cota era considerada ativa mesmo não estando ativa.
- Ao criar um processo com atividade de início múltiplo e utilizar o mecanismo por condição, o processo não é iniciado. E ao selecionar esta atividade, não está sendo criado o script interno. Realizada correção para corrigir as inconsistências.
- Realizada a correção onde após a conversão do processo e alterada a atividade onde possuem solicitações paradas, era apresentada mensagem de inconsistência.
- Realizado ajuste para que seja permitido realizar transferência de pendências entre usuários do mesmo papel/grupo quando uma atividade está para um pool.
- Efetuados ajustes para que o nome de uma atividade do tipo Fluxo seja atribuído à atividade do tipo *Link* para a qual o fluxo direciona.
- No campo de Tarefas atrasadas do gráfico de resumo de tarefas, estavam sendo consideradas também as tarefas em consenso já movimentadas pelo usuário. Realizadas correções para que neste campo, sejam consideradas apenas as tarefas que estão com o usuário, para serem concluídas e que estejam em atraso.
- A visualização das abas de solicitação estão se perdendo, exibindo de forma incorreta para o usuário. Realizada correção no posicionamento das abas, fazendo com que se não quebre se quebre para as resoluções.
- Não era permitido excluir um processo quando ele mesmo é seu subprocesso. Realizadas alterações para que o processo seja excluído quando o processo seja subprocesso apenas dele e não de outros.
- Ao ter uma atividade em consenso e escolher uma atividade final com destino, nos detalhes da decisão, estava sendo informada a matrícula do usuário que movimentou a tarefa. Criada validação para corrigir esta situação e não exibir o usuário na decisão, estava sendo informada a matrícula do usuário que movimentou a tarefa. Criada validação para corrigir esta situação e não exibir o usuário.
- Corrigida a inconsistência apresentada ao tentar remover um formulário com banco de dados Oracle e que não possui vínculo com nenhum processo. Sendo possível agora, eliminá-lo diretamente, sem apresentar nenhuma mensagem para o usuário.
- Efetuadas correções para permitir consultar os *datasets* do fluig LMS por meio do Eclipse sem que ocorram inconsistências.

## 

##  25 de Maio de 2018 

---

### Pequenas melhorias

## LMS

**Você decide: permitir ou não matrículas a partir do histórico de turmas?**

Gostaria de decidir se será ou não permitido solicitar matrícula em turmas de disciplinas a partir do histórico do usuário?

Bom, agora isso é possível. Assim como já existe para trilhas e treinamentos, criamos a opção **Permitir requisições de matrícula no histórico de turmas** – presente nas [Configurações de aprendizado](/pages/viewpage.action?pageId=234458366). Essa opção possibilita definir se será ou não permitido que os usuários solicitem uma nova matrícula para uma turma de disciplina já finalizada a partir da sua visualização no histórico.

**Observação:**

Renomeamos esse recurso de Configurações de trilhas e treinamentos para **Configurações de aprendizado**, pois a partir de agora ele une diversas configurações, não apenas de trilhas e treinamentos.

- [Configurações de aprendizado](#)
- [Solicitação de matrícula permitida](#)
- [Solicitação de matrícula não permitida](#)

![](/download/attachments/353278726/configura%C3%A7%C3%B5es-aprendizado.PNG?version=2&modificationDate=1526921107000&api=v2)

![](/download/attachments/353278726/matr%C3%ADcula-permitida.PNG?version=1&modificationDate=1526920976000&api=v2)

![](/download/attachments/353278726/matr%C3%ADcula-n%C3%A3o-permitida.PNG?version=1&modificationDate=1526920987000&api=v2)

****

## Formulário

**Regras do formulário - Mais ágil e mais funcional**

As regras de formulário são eventos que podem ocorrer no formulário criado, em determinada atividade e em um campo específico. Para isso, alguns ajustes e melhorias foram realizados, a fim de garantir um ambiente mais fluido e que permita o controle desses eventos de forma clara e constante. Com isso, o campo regras do formulário teve seu carregamento otimizado, possibilitando consultar suas regras de forma mais ágil e organizada; o botão Adicionar e o contador de regras foram movidos para o início da tela, permitindo melhor visualização; Além disso, a ordem das regras foi alterada, deixando as ultimas regras cadastradas no topo da lista.
Tudo isso para proporcionar a você uma maneira fácil e completa de manusear as regras do formulário do seu processo!

**Fique por dentro!**

Para mais informações de como configurar as Regras do formulário, acesse a documentação [Configurar formulário](https://tdn.totvs.com/x/g-vuDQ).

- [Novo layout da tela de Regras do formulário](#)

![](/download/attachments/353278726/regras_formulario1.PNG?version=1&modificationDate=1527190080000&api=v2)

****

## Arquitetura

**Agora você pode testar conexão do Solr e Node**

Apresentamos nessa release os testes que garantirão uma boa usabilidade e estabilidade na plataforma.

- [Teste a conexão com o Solr](#)
- [Teste a conexão com o Node](#)

Agora você tem a facilidade de testar a configuração do Solr  e garantir que o serviço de indexação foi conectado com sucesso. A partir da release Essential você pode realizar esse novo teste acessando a platafroma com o usuário WCMadmin > Painel de Controle > Configuração do sistema > Parâmetros da plataforma > indexação.

![](/download/attachments/353278726/teste%20do%20solr1.png?version=2&modificationDate=1525786489000&api=v2)

Agora você terá a certeza que receberá todas as notificações da plataforma, nessa release apresentamos o teste do Node, onde você poderá validar se o *Realtime* foi conectado ao fluig corretamente, garantindo que você receba todas as notificações esperadas.

Para verificar a conexão do Node é necessário logar na plataforma com o usuário *WCMadmin > Painel de Controle > Configuração do sistema > Parâmetros da plataforma > Realtime.*

**

**

**

## Correções

- Correção realizada na geração de *Stubs* em servidores com Alta Disponibilidade para que o serviço seja atualizado corretamente no Eclipse.
- Ajuste necessário para que seja possível somente sincronizar datasets quando a função *defineStructure* não estiver vazia. Do contrário uma mensagem informando que a ação não pode ser concluída será apresentada.
- Implementada validação para que não permita a atualização de documentos por dois usuários simultaneamente, quando um deles selecionar Manter Versão do documento e o segundo usuário selecionar Criar nova versão, para que não ocorra duplicação das versões ativas.
- Corrigida a validação de avaliação pendente de correção em turmas para que seja executada corretamente e permita finalizar as turmas que não possuem avaliação pendente.
- Efetuados ajustes no recurso Correção de questões de avaliação para não ocorrer inconsistências quando os pontos máximo e mínimo de uma habilidade do treinamento do qual a avaliação faz parte são o mesmo valor.
- Corrigida situação ao configurar um processo onde é atribuído o mecanismo por papel que não possui usuários cadastrados, e nas propriedades atribuir o gestor por grupo e tentar enviar para os usuários apresentados, em que uma mensagem de erro era apresentada: “Usuário selecionado não está apto para receber a tarefa”.
- No formulário, ao utilizar um campo zoom customizado e utilizar o filtro, não é retornado nenhum valor. Realizado ajuste para que os filtros em datasets customizados funcionem corretamente no componente zoom.
- Ajustado dimensionamento do modal do Widget de Noticias para ocupar o tamanho correto na tela ao visualizar um artigo no navegador Internet Explorer.
- Realizado ajuste de performance na inclusão de grupos de usuários em uma comunidade o qual impedia a inclusões de grupos acima de 200 usuários.
- Efetuados ajustes para que o Messaging não apresente inconsistências quando o usuário o acessa após ter recebido uma nova mensagem.
- Adicionado link no e-mail de notificação de um novo post em comunidade.
- Adicionado link no e-mail de notificação de novo comentário em post que direciona para o post comentado.

## 

##  15 de Maio de 2018 

---

### Pequenas melhorias

## Arquitetura

**Visualize todas as permissões já salvas na plataforma!**

Agora você poderá visualizar todas as permissões já salvas na plataforma de uma forma muito simples, implementamos um *Scroll* permitindo que você visualize todas as permissões de uma só vez.

Basta rolar o *scroll* e a lista com as permissões será atualizada. Assim você tem acesso facilitado as permissões da plataforma.

## Correções

- Efetuados ajustes para salvar o usuário substituto como publicador nas propriedades de um documento que ele anexou à uma solicitação que era do usuário que ele está substituindo.
- Efetuados ajustes na central de notificações para não emitir notificação para o usuário quando ele próprio assume uma tarefa.
- Realizado ajuste nos anexos de workflow, onde era gerado erro de permissão ao abrir um documento. Corrigido para desconsiderar a validação implementada para a pasta documento e abrir o arquivo corretamente.
- Efetuadas correções no processo de inicialização da plataforma para não ocorrer inconsistências ao executar o *update* relacionado à página do recurso Gerenciamento de matrículas quando utilizado o banco de dados MySQL.
- Correção da inconsistência onde ao mudar o tipo de documento a partir da pasta, o mesmo não era alterado no banco de dados. Ajustado para que ao alterar o tipo do documento o mesmo seja alterado no banco de dados também.
- Ajuste realizado para que não permita mover pastas pai com controle de cotas ativo, para dentro de outras pastas pai que também contém o controle de cotas ativo. Apenas pastas filhas e sem controle de cotas poderão ser movidas para dentro de outras pastas.

## 

##  8 de Maio de 2018 

---

### Pequenas melhorias

## Portais

**Dê maior destaque às suas páginas no tema Snowflake com o novo pacote de ícones**

No tema Snowflake agora é possível escolher um ícone para representar uma página, proporcionando mais visibilidade e identidade. 

Para aplicar este novo recurso basta editar uma página já existente ou criar uma nova e escolher um ícone a partir da biblioteca disponível.

![](/download/attachments/353278726/cardapio.png?version=1&modificationDate=1524596178000&api=v2)

## Arquitetura

**Informações de log mais completas!**

Agora é possível efetuar o download do arquivo server.log contendo o log completo da plataforma fluig. Para isso basta acionar o botão *"Baixar log do servidor completo" na opção Controle de log no Painel de Controle.*

- [Informações do log](#)
- [Recurso no Painel de controle](#)

  **Arquivo de log**

[?](#)

| 102410251026102710281029103010311032103310341035103610371038103910401041104210431044104510461047104810491050105110521053 | `2018``-``04``-``09` `16``:``28``:``15``,``962` `INFO [com.totvs.technology.foundation.common.logger.ConfigLogger] (``default` `task-``11``) =======================LOG CONFIGS=================================``2018``-``04``-``09` `16``:``28``:``15``,``962` `INFO [com.totvs.technology.foundation.common.logger.ConfigLogger] (``default` `task-``11``) FLUIG_VERSION =``1.6``.``5` `120318``2018``-``04``-``09` `16``:``28``:``15``,``962` `INFO [com.totvs.technology.foundation.common.logger.ConfigLogger] (``default` `task-``11``) INSTALL_ROOT = /opt/fluigX/appserver``2018``-``04``-``09` `16``:``28``:``15``,``962` `INFO [com.totvs.technology.foundation.common.logger.ConfigLogger] (``default` `task-``11``) JBOSS_SERVER_NAME = fluig1``2018``-``04``-``09` `16``:``28``:``15``,``962` `INFO [com.totvs.technology.foundation.common.logger.ConfigLogger] (``default` `task-``11``) OS_NAME = Linux``2018``-``04``-``09` `16``:``28``:``15``,``962` `INFO [com.totvs.technology.foundation.common.logger.ConfigLogger] (``default` `task-``11``) JAVA_HOME = /opt/fluigX/jdk-``64``/jre``2018``-``04``-``09` `16``:``28``:``15``,``962` `INFO [com.totvs.technology.foundation.common.logger.ConfigLogger] (``default` `task-``11``) DATABASE_NAME = MySQL``2018``-``04``-``09` `16``:``28``:``15``,``962` `INFO [com.totvs.technology.foundation.common.logger.ConfigLogger] (``default` `task-``11``) DATABASE_VERSION =``5.7``.``21``-0ubuntu0.``16.04``.``1``2018``-``04``-``09` `16``:``28``:``15``,``962` `INFO [com.totvs.technology.foundation.common.logger.ConfigLogger] (``default` `task-``11``) DRIVER_NAME = MySQL Connector Java``2018``-``04``-``09` `16``:``28``:``15``,``962` `INFO [com.totvs.technology.foundation.common.logger.ConfigLogger] (``default` `task-``11``) DRIVER_VERSION = mysql-connector-java-``5.1``.``44` `( Revision: b3cda4f864902ffdde495b9df93937c3e20009be )``2018``-``04``-``09` `16``:``28``:``15``,``962` `INFO [com.totvs.technology.foundation.common.logger.ConfigLogger] (``default` `task-``11``) SERVER_URL = https:``//suaempresa.fluig.com:443``2018``-``04``-``09` `16``:``28``:``15``,``962` `INFO [com.totvs.technology.foundation.common.logger.ConfigLogger] (``default` `task-``11``) SERVER_IP_ADRESS =``100.17``.``75.21``2018``-``04``-``09` `16``:``28``:``15``,``962` `INFO [com.totvs.technology.foundation.common.logger.ConfigLogger] (``default` `task-``11``) SERVER_IP_PORT =``8080``2018``-``04``-``09` `16``:``28``:``15``,``962` `INFO [com.totvs.technology.foundation.common.logger.ConfigLogger] (``default` `task-``11``) LS_ENABLED =``true``2018``-``04``-``09` `16``:``28``:``15``,``963` `INFO [com.totvs.technology.foundation.common.logger.ConfigLogger] (``default` `task-``11``) LS_HOST =``100.17``.``75.22``2018``-``04``-``09` `16``:``28``:``15``,``963` `INFO [com.totvs.technology.foundation.common.logger.ConfigLogger] (``default` `task-``11``) LS_PORT =``5555``2018``-``04``-``09` `16``:``28``:``15``,``963` `INFO [com.totvs.technology.foundation.common.logger.ConfigLogger] (``default` `task-``11``) NODE_EXTERNAL_URL =``100.17``.``75.21``:``7777``2018``-``04``-``09` `16``:``28``:``15``,``963` `INFO [com.totvs.technology.foundation.common.logger.ConfigLogger] (``default` `task-``11``) NODE_INTERNAL_URL =``100.17``.``75.21``:``8888``2018``-``04``-``09` `16``:``28``:``15``,``963` `INFO [com.totvs.technology.foundation.common.logger.ConfigLogger] (``default` `task-``11``) SOLR_URL = http:``//100.17.75.21:8983/solr``2018``-``04``-``09` `16``:``28``:``15``,``963` `INFO [com.totvs.technology.foundation.common.logger.ConfigLogger] (``default` `task-``11``) SOLR_CLOUD =``false``2018``-``04``-``09` `16``:``28``:``15``,``963` `INFO [com.totvs.technology.foundation.common.logger.ConfigLogger] (``default` `task-``11``) SOLR_REMOTE =``false``2018``-``04``-``09` `16``:``28``:``15``,``963` `INFO [com.totvs.technology.foundation.common.logger.ConfigLogger] (``default` `task-``11``) OO_ENABLED =``false``2018``-``04``-``09` `16``:``28``:``15``,``963` `INFO [com.totvs.technology.foundation.common.logger.ConfigLogger] (``default` `task-``11``) OO_DIRECTORY = /opt/fluigX/OpenOffice-linux-``64``2018``-``04``-``09` `16``:``28``:``15``,``963` `INFO [com.totvs.technology.foundation.common.logger.ConfigLogger] (``default` `task-``11``) OO_PORT =``15001``,``15002``2018``-``04``-``09` `16``:``28``:``15``,``963` `INFO [com.totvs.technology.foundation.common.logger.ConfigLogger] (``default` `task-``11``) FTP_ENABLED =``false``2018``-``04``-``09` `16``:``28``:``15``,``963` `INFO [com.totvs.technology.foundation.common.logger.ConfigLogger] (``default` `task-``11``) FTP_PORT =``21``2018``-``04``-``09` `16``:``28``:``15``,``963` `INFO [com.totvs.technology.foundation.common.logger.ConfigLogger] (``default` `task-``11``) FTP_PORT_RANGE =``2018``-``04``-``09` `16``:``28``:``15``,``963` `INFO [com.totvs.technology.foundation.common.logger.ConfigLogger] (``default` `task-``11``) FTP_PRIVATEFOLDER_PORT =``8021``2018``-``04``-``09` `16``:``28``:``15``,``963` `INFO [com.totvs.technology.foundation.common.logger.ConfigLogger] (``default` `task-``11``) FTP_PRIVATEFOLDER_PORT_RANGE =``2018``-``04``-``09` `16``:``28``:``15``,``963` `INFO [com.totvs.technology.foundation.common.logger.ConfigLogger] (``default` `task-``11``) ===================================================================` |
| --- | --- |

 - Além das mensagens padrão, serão apresentadas no final do log, informações relevantes do ambiente e da infraestrutura do servidor. Facilitando o acesso e a visualização dessas informações.

![](/download/attachments/353278726/controle%20de%20log3.png?version=1&modificationDate=1525787043000&api=v2)

****

****

**Falha no envio do e-mail? Agora você pode conferir todos os detalhes no log!**

A partir dessa *Essential* ao enviar um e-mail e ocorrer alguma inconsistência no envio, você poderá verificar qual foi o template utilizado, também poderá verificar o código do template e o *path* utilizado.

Para ter acesso a essas informações basta consultar o log completo da plataforma.

**Exemplo de como as informações serão dispostas**

[?](#)

| 1 | `Erro na execução do script utilizando o template= default_email_notification_pt_BR, com código DEFAULT_EMAIL_NOTIFICATION e localizado em: volume\templates\tplmail\DEFAULT_EMAIL_NOTIFICATION\pt_BR` |
| --- | --- |

Correções

- Correção da sincronização da abertura das instâncias para que não ocorra inconsistência ao utilizar uma pasta com dois níveis de aprovação.
- Correção realizada para que grave corretamente todos os campos, além dos campos obrigatórios ao criar um documento via API *CreatDocument*. Sendo possível informar os campos habilitados em tela para edição manual.
- Ajuste realizado para tornar o recurso Marca d'água disponível para documentos PDF.
- Ajuste realizado para que seja possível verificar o número do documento quando for impresso um arquivo doc ou docx.
- Corrigido o *upload* de arquivos de formulários da pasta do usuário para recarregar arquivos que possuem o mesmo nome.
- Corrigida a mensagem que é exibida ao tentar excluir um formulário que ainda possui registros para que ela informe que não é possível efetivar a remoção.
- Ao utilizar o formato dd/mm/aaaa com as barras separando a data, na função reloadZoomFilterValues no componente *zoom*, ocorria inconsistência e não permitia filtrar as datas. Realizada correção para que seja utilizado encode na barra que é usada como parâmetro.
- Ao iniciar as solicitações através do listar tarefas com o tema *Snowflake*, os formulários ficavam sobrepostos, quebrando o layout. Realizada correção para que o container do listar tarefas utilize um scroll, solucionando a inconsistência ocorrida nos formulários.
- Ao sincronizar um dataset *off-line* utilizando o método *findCompletedTasks* do *webservice* ECMDashBoardService, é apresentada a mensagem “Esta tarefa não está sob sua responsabilidade”. Realizado tratamento para solucionar a inconsistência apresentada.
- Realizada correção para que, quando um gestor realizar uma movimentação de uma atividade para outra, e que ela já possua um usuário pré-definido, sejam respeitas as configurações, não atribuindo ao gestor.
- Realizada correção da inconsistência na movimentação com mecanismo automático, onde as solicitações apareciam duplicadas na central de tarefas.
- Corrigida a situação que ocorria quando um usuário de uma atividade em *pool* tentava transferir essa atividade para outro usuário, o que ocasionava uma inconsistência informando “usuário não apto a receber a tarefa” quando executava a validação de um formulário antes de tentar transferir.
- Ajustado o envio de notificações e *e-mails* sobre tarefas atrasadas para não emitir as mesmas notificações mais de uma vez.
- Corrigida a situação em que o nome das atividades de finalização permanecia o padrão ao importar novamente um processo no qual o nome das atividades foi alterado previamente no Studio e ele foi exportado para o servidor já com as alterações.
- Alterado o filtro de formatação de datas da API AdHoc para exibir as informações corretamente e não causar inconsistências na exibição dos dados retornados pela API.
- Efetuados ajustes para permitir a publicação de documentos anexos de *workflow* em um volume exclusivo que foi criado para publicações na navegação de documentos.
- Corrigida a movimentação da atividade de processo para a próxima etapa – que é uma atividade automática – depois que um evento de processo ou formulário foi disparado e ocorreu alguma inconsistência.
- Corrigido o recurso Consulta de solicitações para exibir corretamente apenas as solicitações finalizadas quando essa opção for assinalada.
- Efetuado ajuste na documentação do Style Guide, pois a URL para acessar os recurso dos componentes não estava adequada. 
- Realizada correção no componente Rich Editor do fluig Style Guide para que o segundo parâmetro não seja obrigatório em sua instancia.
- Ao realizar a publicação de um artigo com imagem muito grande no tema Snowflake, a largura do slot da timeline não era respeitada. Efetuada correção para que a formatação seja mantida.
- Ajuste efetuado nas configurações do widget timeline pois não estava sendo possível escolher uma comunidade como contexto.
- Ao realizar uma publicação com múltiplas imagens, a largura do slot da timeline não era respeitada. Efetuada correção para que a formatação seja mantida.
- Ao escrever uma publicação com palavras muito grandes a largura do slot da timeline não era respeitada. Efetuado ajuste para que a formatação seja mantida.
- Na criação de uma postagem com múltiplas imagens, o painel que exibe as imagens selecionadas para a publicação ultrapassava a largura do slot. Realizado ajuste para que o tamanho do slot seja respeitado.
- Ajustado ícone que aparece na área de trabalho ao adicionar um atalho para o fluig a partir do navegador.
- Removido o componente Arrastar para atualizar (Pull to Refresh) da navegação das páginas para aprimorar o funcionamento das mesmas no fluig Mobile para Android.
- Ao gerar uma notificação de um documento com o nome muito grande a opção de 'ir para notificações' não aparecia. Realizado ajuste para que a mesma fique sempre visível.
- Removida a opção ‘Suporte ao aplicativo mobile’ que era exibida ao criar um layout pelo plugin fluig no Eclipse. A opção só se aplica a criação de widgets.
- Ao acessar uma comunidade no fluig Mobile para Android, o botão que exibe as informações da comunidade não era apresentado para usuários não participantes da mesma. Efetuado ajuste para que o botão fique sempre visível.
- Efetuadas alterações na forma de geração de relatórios e adicionada a coluna Data de conclusão da avaliação no recurso Histórico de avaliações.
- Criado *update* para acrescentar a opção Cancelar matrículas ao recurso LMSENC: Aprendizado – Matrículas das Permissões do Painel de Controle quando, por alguma inconsistência, essa opção não for criada automaticamente.
- Feitos ajustes na execução de avaliações para considerar apenas o horário do servidor para os cálculos do tempo restante para finalizar a avaliação.
- Corrigida a configuração da data inicial e final para matrícula em turmas para considerar o horário no formato de 24 horas.
- Corrigido o processo de atualização da *Snowflake* (1.6.3) para a *Waterdrop*(1.6.4) para manter as permissões existentes no recurso Gerenciamento de matrículas para usuários comuns.
- Definido o peso de um bloco que foi criado, copiado ou importado para uma avaliação como 1 por padrão.
- Realizado tratamento para manter o espaço na busca de grupos de permissões e exportar o formulário corretamente via Eclipse.
- Substituição do arquivo .*jar* antigo por um novo arquivo no momento da edição de serviços Progress, para que atualize o arquivo .*jar* no volume do fluig corretamente.
- Correção realizada nos Serviços REST fazendo com que ao excluí-lo e posteriormente recriá-lo, utilizando o mesmo nome, não ocorra inconsistência informando que o serviço já existe.
- Correção realizada para que os usuários tenham acesso à perspectiva das listas corretamente e consigam visualizá-la.
- Correção realizada ao exportar um dataset via Studio, além de melhoria na mensagem de inconsistência apresentada na ação.

## 

##  17 de Abril de 2018 

---

### Correções

- Ajuste realizado para impedir que arquivos anexados no processo e não publicados na navegação de documentos possam ser movidos.
- Realizado ajuste para que ao criar um JS com nome que exceda os 25 caracteres, o usuário seja informado que a quantidade ultrapassou o limite.
- Ocorria inconsistência ao atualizar a plataforma quando a coluna COD_EMPRESA da tabela DOCUMENTO recebia o tipo NUMERIC. Ajustado para que o valor padrão seja sempre do tipo BIGINT.
- Ajustes realizados na widget Cadastros para que considere máscaras, formatações de telefone e ajuste de colunas ao exportar dados do novo formulário via Excel ou CSV.
- Ajuste realizado na widget Cadastros para que permita uma formatação de títulos mais ampla. 
- Ajuste realizado para que registros de formulários sejam exibidos na widget com formatação de máscara. 
- Ajustes realizados na widget Cadastros visando melhorar a usabilidade da mesma.
- Correção realizada ao mostrar caracteres especiais ao iniciar um processo, para que traga um valor em cada parâmetro e para que não ocorra mais a transformação *enconding* responsável por quebrar os caracteres especiais.
-  Correção realizada na forma de buscar os dados de um dataset para que seja possível trazer esses dados no Eclipse.
- Ajustada a configuração de avaliação para não reprovar um aluno que tirou 0 em uma avaliação que possui o índice de aprovação como 0.
- Ajustes realizados para sanar a inconsistência gerada nas solicitações que possuíam imagens nos complementos, ocasionando demora no carregamento do sistema.
- Realizadas correções no mobile, para que as tarefas em Pool que não estavam sendo listadas para o usuário, sejam corretamente listadas ao clicar sobre a opção Pool no aplicativo.
- Ao gerar uma notificação de um documento com o nome muito grande a opção de 'Ir para notificações' não aparecia. Realizado ajuste para que a mesma fique sempre visível.


<!-- anchors: Atualizações(1.6.4)-XXdeDezembrode2019, Atualizações(1.6.4)-Correções, Atualizações(1.6.4)-08deMarçode2021, Atualizações(1.6.4)-10deDezembrode2019, Atualizações(1.6.4)-Correções.1, Atualizações(1.6.4)-29deNovembrode2019, Atualizações(1.6.4)-Correção, Atualizações(1.6.4)-22deNovembrode2019, Atualizações(1.6.4)-05deNovembrode2019, Atualizações(1.6.4)-Correção.1, Atualizações(1.6.4)-13deAgostode2019, Atualizações(1.6.4)-Correção.2, Atualizações(1.6.4)-20deMaiode2019, Atualizações(1.6.4)-Correção.3, Atualizações(1.6.4)-15deMaiode2019, Atualizações(1.6.4)-Correção.4, Atualizações(1.6.4)-26deMarçode2019, Atualizações(1.6.4)-01deMarçode2019, Atualizações(1.6.4)-Correção.5, Atualizações(1.6.4)-13deFevereirode2019, Atualizações(1.6.4)-Correção.6, Atualizações(1.6.4)-22deJaneirode2019, Atualizações(1.6.4)-Correções.2, Atualizações(1.6.4)-02deJaneirode2019, Atualizações(1.6.4)-Correções.3, Atualizações(1.6.4)-26deDezembrode2018, Atualizações(1.6.4)-Correções.4, Atualizações(1.6.4)-04deDezembrode2018, Atualizações(1.6.4)-Correções.5, Atualizações(1.6.4)-13deNovembrode2018, Atualizações(1.6.4)-Correções.6, Atualizações(1.6.4)-26deOutubrode2018, Atualizações(1.6.4)-Arquitetura, Fiquepordentro, Atualizações(1.6.4)-Correções.7, Atualizações(1.6.4)-23deOutubrode2018, Atualizações(1.6.4)-Correções.8, Atualizações(1.6.4)-16deOutubrode2018, Atualizações(1.6.4)-Correções.9, Atualizações(1.6.4)-02deOutubrode2018, Atualizações(1.6.4)-Correções.10, Atualizações(1.6.4)-25deSetembrode2018, Atualizações(1.6.4)-Correções.11, Atualizações(1.6.4)-18deSetembrode2018, Atualizações(1.6.4)-Correções.12, Atualizações(1.6.4)-11deSetembrode2018, Atualizações(1.6.4)-Correções.13, Atualizações(1.6.4)-04deSetembrode2018, Atualizações(1.6.4)-Correções.14, Atualizações(1.6.4)-28deAgostode2018, Atualizações(1.6.4)-Correções.15, Atualizações(1.6.4)-21deAgostode2018, Atualizações(1.6.4)-Correções.16, Atualizações(1.6.4)-14deAgostode2018, Atualizações(1.6.4)-Correções.17, Atualizações(1.6.4)-07deAgostode2018, Atualizações(1.6.4)-Correções.18, Atualizações(1.6.4)-31deJulhode2018, Atualizações(1.6.4)-Correções.19, Atualizações(1.6.4)-24deJulhode2018, Atualizações(1.6.4)-LMS, Vídeosemtreinamentos, Atualizações(1.6.4)-Correções.20, Atualizações(1.6.4)-17deJulhode2018, Atualizações(1.6.4)-Correções.21, Atualizações(1.6.4)-10deJulhode2018, Atualizações(1.6.4)-Pequenasmelhorias, Atualizações(1.6.4)-Arquitetura.1, 1, Atualizações(1.6.4)-Correções.22, Atualizações(1.6.4)-03deJulhode2018, Atualizações(1.6.4)-Correções.23, Atualizações(1.6.4)-26deJunhode2018, Atualizações(1.6.4)-Correções.24, Atualizações(1.6.4)-19deJunhode2018, Atualizações(1.6.4)-Correções.25, Atualizações(1.6.4)-12deJunhode2018, Atualizações(1.6.4)-Correções.26, Atualizações(1.6.4)-06deJunhode2018, Atualizações(1.6.4)-Correções.27, Atualizações(1.6.4)-05deJunhode2018, Atualizações(1.6.4)-Pequenasmelhorias.1, Atualizações(1.6.4)-Arquitetura.2, Atualizações(1.6.4)-Processos, 1, Atualizações(1.6.4)-Correções.28, Atualizações(1.6.4)-25deMaiode2018, Atualizações(1.6.4)-Pequenasmelhorias.2, Atualizações(1.6.4)-LMS.1, Configuraçãodeaprendizado, Atualizações(1.6.4)-Formulário, 1, Atualizações(1.6.4)-Arquitetura.3, 1, 1-1, 1-1, Atualizações(1.6.4)-Correções.29, Atualizações(1.6.4)-15deMaiode2018, Atualizações(1.6.4)-Pequenasmelhorias.3, Atualizações(1.6.4)-Arquitetura.4, Atualizações(1.6.4)-Correções.30, Atualizações(1.6.4)-8deMaiode2018, Atualizações(1.6.4)-Pequenasmelhorias.4, Atualizações(1.6.4)-Portais, Atualizações(1.6.4)-Arquitetura.5, 1, 1-1, highlighter_389216, highlighter_76233, Atualizações(1.6.4)-17deAbrilde2018, Atualizações(1.6.4)-Correções.31 -->
