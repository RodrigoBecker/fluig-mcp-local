---
title: "Atualizações (1.6.5)"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=442961412#Atualiza%C3%A7%C3%B5es(1.6.5)-190219"
scraped_at: "2026-03-09T04:11:38.305Z"
depth: 2
anchors: 197
child_links: 107
---

# Atualizações (1.6.5)

## Ciclo de atualização Fluig

---

Maior destaque para as atualizações evolutivas (**Update **). 

As liberações mais relevantes são identificadas por um selo especial:

![](/download/attachments/442961412/essential.png?version=1&modificationDate=1544550790080&api=v2) **Essential:** incluem correções e pequenas evoluções da plataforma.

![](/download/attachments/442961412/mandatory.png?version=1&modificationDate=1544550790117&api=v2) **Mandatory:**** **atualizações que possuem correções críticas emergenciais.

Veja todos os detalhes em: [Atualização fluig](/pages/viewpage.action?pageId=73078235).

**oculto**

## 

##  ?? de ?? de 2021 

---

## Correções

## 

## 07 de Maio de 2025 

---

Correção Mandatory

Foi identificada uma vulnerabilidade crítica que requer uma atenção especial em seu ambiente.A situação corrigida encontra-se disponível a partir do pacote **Mandatory 1.6.5-250507**.

## 

##  25 de Agosto de 2021 

---

## Correção

- Realizada correção no retorno da API, para que o enddpoint GET /ecm/dataset/search retorne corretamente todos os registros de um dataset interno de formulário.
- Correção de inconsistência na criação de *constraints* de dataset.
- Aplicada tradução dos termos na tela "O que há de novo no Fluig".

## 

##  21 de Maio de 2021 

---

## Correções

- Corrigida inconsistência que permitia uso dos rests de estatísticas sem autenticação.
- Ajuste realizado para apresentar mensagem de aviso ao tentar fazer check-out de um documento que está em aprovação.
- Realizado reforço de segurança para sanar vulnerabilidade em requisições de datasets.
- Correção de inconsistência ao executar a plataforma com o banco de dados Oracle.

**Atualização de segurança**

A equipe do TOTVS Fluig Plataforma, a partir das atualizações **1.6.5-210521 Liquid**, **1.7.0-210518 Lake** e **1.7.1-210518 Crystal Lake**, realizou uma atualização de segurança com o objetivo de tornar sua plataforma ainda mais segura para que você possa realizar todas as suas operações sem precisar se preocupar com ataques maliciosos.

Por isso, orientamos que a leitura da documentação [Datasets acessando banco de dados externo](https://tdn.totvs.com/x/OgFlDw) seja feita para que você possa ficar por dentro do modo correto de utilização deste procedimento.

Estamos sempre trabalhando para que a sua experiência com a gente seja cada vez mais fluída e agradável.

## 

##  08 de Março de 2021 

---

Correção Mandatory

Foi identificada uma vulnerabilidade crítica que requer uma atenção especial em seu ambiente.
A situação corrigida encontra-se disponível em **Mandatory 1.6.5-210308**.

Saiba quais são os impactos:

- Esta situação permitia a leitura de arquivos que estejam no sistema operacional. Foram realizados ajustes para sanar falha de segurança relacionada.

Para mais detalhes sobre a situação confira o **comunicado oficial** no portal de clientes.

## 

##  10 de Fevereiro de 2021 

---

## Correções

- Correção de inconsistência ao atualizar a plataforma da 1.5.13. para a 1.6.5 diretamente.
- Correção de inconsistência nas permissões da pasta e do documento.
- Ajustes no cadastro do e-mail do usuário, para validar se existe e-mail duplicado considerando apenas as empresas ativas na plataforma.
- Ajustes na autenticação do usuário no aplicativo Fluig Mobile, nos casos em que há mais de um usuário com o mesmo e-mail, para que ocorra informando o login de usuário e não o e-mail. Caso seja informado um e-mail duplicado, a mensagem apresentada será de "Usuário não encontrado".
- Realizado ajuste nos complementos da solicitação, para que as informações não sejam duplicadas, sempre que inseridas.
- Ajuste aplicado no aplicativo Approval para IOS, a fim de corrigir a visualização do histórico das solicitações.
- Corrigida a inconsistência ao iniciar um formulário público no Forms Beta com integração iniciada por um processe através do startProcess.

## 

##  30 de Dezembro de 2020 

---

## Correções

- Efetuados ajustes para que os campos do formulário de um processo – que foi exportado do Fluig Studio – sejam exibidos em Campos de Filtro ao editar o processo, permitindo que as configurações sejam salvas corretamente.

## 

##  22 de Dezembro de 2020 

---

## Correções

- Corrigida a inconsistência nos complementos do processo.
- Realizado ajuste ao acessar o Approval, a fim de corrigir a inconsistência na tela de tarefas.
- Realizada correção no fluig mobile para que ao acessar a central de Tarefas, a lista de solicitações do usuário substituído seja carregada corretamente.
- Correção de inconsistência no envio de e-mail contendo anexos em solicitações de processos.

## 

##  11 de Novembro de 2020 

---

## Correções

- Efetuados ajustes no processo de inicialização para que a plataforma TOTVS Fluig seja atualizada corretamente.
- Correção de inconsistência na assinatura digital de documentos e processos.

## 

##  29 de Outubro de 2020 

---

## Correções

- Correção realizada para que a importação de dados históricos seja processada corretamente no Analytics.
- Realizada correção na exportação do Forms plataforma para que os registros possam ser visualizados corretamente.
- Corrigida inconsistência para que ao realizar uma consulta com datasets de formulários, sejam retornados os valores corretamente, com todos os caracteres presentes na *constraint*.
- Realizado ajuste para que ao utilizar o setTaskComments em eventos de processo, as mensagens sejam gravadas corretamente sem duplicidade.
- Realizada a conversão do fluig versão 1.5 para 1.6 no LMS, a fim de sanar inconsistências da migração do ECM para o fluig que apresentavam erros nos *updates* do banco de dados.

## 

##  15 de Setembro de 2020 

---

## Correções

- Correção realizada tornando possível a consulta de datasets internos em formulários avançados.
- Correção realizada para que a empresa não seja criada caso a plataforma encontre alguma inconsistência no preenchimento dos campos.
- Corrigida a pré-visualização de questões para que a descrição da questão seja exibida corretamente durante o seu cadastro.

## 

##  28 de Agosto de 2020 

---

## Correções

- Realizado ajuste para não enviar e-mail de criação de usuário no TOTVS Fluig Plataforma quando o ambiente estiver integrado ao TOTVS Identity.
- Ajuste realizado para que seja exibido o número de notificações no aplicativo Approval, em dispositivos com sistema operacional iOS.
- Realizada correção no componente documento no diagrama de processos pelo plugin fluig, para que ao incluir este componente, ele seja ligado corretamente a uma atividade.
- Realizada correção para sanar a lentidão na Central de Tarefas e Consultar Solicitações.

## 

##  19 de Agosto de 2020 

---

## Correções

- Realizada correção na central de tarefas para que apresente o nome do usuário corretamente quando visualizado através do Internet Explorer.
- Realizada correção nas regras de formulário, para que ao adicionar uma regra com filtro e salvar, e adicionar mais regras com filtros, sejam todas gravadas e cadastradas corretamente.
- Realizada correção ao enviar ou movimentar um processo no fluig mobile, para que não haja inconsistências no cabeçalho do formulário.
- Corrigida inconsistência no Forms que não permitia excluir um registro de formulário através da busca.
- Ajuste realizado para apresentar corretamente a justificativa da reprovação do documento na [visualização das propriedades do documento](https://tdn.totvs.com/display/HF/Visualizar+propriedades+do+documento).

##  11 de Agosto de 2020 

---

## Correções

- Correção realizada para que os documentos em Check-out continuem aparecendo em sua pasta original.
- Efetuados ajustes no Pages para que os componentes sejam exibidos corretamente ao criar ou editar uma página.
- Realizada correção para sanar inconsistência ao editar um processo via Configurar processos.

## 

##  30 de Julho de 2020 

---

## Correções

- Efetuada correção na rotina de login para o banco de dados SQL Server.

## 

##  28 de Julho de 2020 

---

## Correções

- Correção de inconsistência no envio de e-mail "Esqueceu sua senha" quando as opções "Todas as notificações por e-mail" e "Remetente padrão" estivessem desabilitadas na configuração global de envio de e-mail.
- Excluída a chamada a uma API depreciada na visualização de documentos que causava erros no *log* a cada documento visualizado.
- Removido o recurso de reuniões *on-line* que funcionava integrado ao antigo recurso Messaging, que foi [descontinuado](https://tdn.totvs.com/pages/viewpage.action?pageId=442961412#Atualiza%C3%A7%C3%B5es(1.6.5)-191122) há um tempo.
- Atualizada a documentação sobre como acessar as [APIs do LMS](/display/fluig/APIs+LMS).
- Realizada verificação para identificar quando é web e quando é mobile para que a troca do arquivo ocorra usando o documento específico.
- Realizada correção no aplicativo Approval para que sempre que o usuário acessar a central de tarefas e não possuir nenhuma tarefa, o SQL não apresente erro.
- Realizada correção no aplicativo Approval para que não retorne erro ao usuário sempre que consultar o histórico utilizando Oracle.
- Realizada correção no cálculo do parâmetro *deadlineSpecification,* para que calcule corretamente o tempo de prazo do expediente.

## 

##  30 de Junho de 2020 

---

## Correção

- Realizada correção no mecanismo de atribuição customizado para que permita que os usuários possam assumir as atividades a qualquer momento, sem necessidade de seguir a ordem de inserção.

## 

##  23 de Junho de 2020 

---

## Correções

- Realizados ajustes na visualização de formulários do Forms, para que chamadas desnecessários não sejam exibidas, a fim de melhorar o desempenho do aplicativo.
- Realizada correção no Forms para sanar inconsistência que ocorria na consulta de dataset de uma tabela filha de um formulário pai x filho.
- Realizada correção para sanar a lentidão na consulta de solicitações.

## 

##  16 de Junho de 2020 

---

## Correções

- Ajuste realizado para que seja possível publicar um artigo contendo uma imagem de capa.
- Correção na passagem de parâmetros ao solicitar recuperação de senha.
- Correção de inconsistência no controle de cotas da pasta, com a cota padrão configurada como 0 (ilimitada).

## 

##  09 de Junho de 2020 

---

## Correções

- Correção de inconsistência que impedia a utilização do app Approval após a configuração de encriptação de senha com LDAP.
- Realizada correção para apresentar normalmente os registros na lista de Empresas, após a criação de empresa com usuários com o mesmo e-mail.
- Corrigido o acesso às páginas do LMS para que sejam exibidas corretamente.

## 

##  02 de Junho de 2020 

---

## Correções

- Correção de inconsistência na criação de Templates de e-mail em volumes ocultos na rede.
- Ajuste realizado para que os widgets do Analytics sejam autenticados corretamente juntos ao Fluig no momento da autenticação, não apresentando mais a tela para acesso nos widgets.
- Realizada correção no fluig plataforma para que as integrações externas realizadas através do Forms, possam ser excluídas.
- Realizado ajuste para que ao selecionar um registro na widget de cadastro e tentar removê-lo, a modal de confirmação de exclusão seja apresentada corretamente.
- Corrigida a falha no histórico de solicitações configuradas com atividades com mecanismo de atribuição para pool de um grupo, que não permitia visualizar os usuários.
- Corrigida a tela de criação de novo processo, para que seja possível informar o código e o nome do processo sem apresentar inconsistências.
- Corrigido espaçamento no componente Collapse, nos formulários de exemplo do [Style Guide](https://git.fluig.com/projects/SAMPLES/repos/style-guide/browse). Clique [aqui](https://tdn.totvs.com/x/MDLeI) para mais detalhes.

## 

##  26 de Maio de 2020 

---

## Correções

- Efetuada correção na edição de conteúdo do documento por meio do protocolo WebDav.
- Correção de inconsistência que impedia a abertura do documento em aprovação pela Central de Tarefas do usuário aprovador.
- Realizado ajuste na API REST que cria os registros de formulário, para que retorne corretamente as mensagens do validateForm.
- Corrigido o fluxo de informações entre um processo e um subprocesso para que as condições de uma atividade automática do processo principal sejam validadas corretamente utilizando dados do subprocesso.
- Efetuados ajustes para exibir corretamente todos os documentos de uma pasta ao selecioná-la no momento de incluir um anexo a um processo.
- Corrigida inconsistência no mecanismo de atribuição por campo de formulário utilizando dataset de colleague, cujo erro ocorria quando era informado no campo de descrição, um campo diferente de colleagueId.
- Realizada correção no usuário substituto para que após ter incluído um substituto na solicitação e descartar todo o processo, e logo em seguida tentar refazer o mesmo a fim de alterá-lo, possa ser permitida a mudança de usuário para que o envio da solicitação ocorra normalmente.
- Correção realizada permitindo o *deploy* de componentes com arquivos "js" que tenham menos de 3 caracteres.

## 

##  19 de Maio de 2020 

---

## Correções

- Realizado ajuste na nacionalização do fluig, para que os processos sejam definidos corretamente quando o idioma estiver diferente do Português.
- Corrigida a documentação de API REST no swagger a fim de auxiliar o usuário a compreender de forma mais simples como criar e atualizar formulários com eventos.
- Ajuste realizado para situações onde um usuário está ativo em mais de uma empresa no Fluig. Agora, no cadastro de usuário, edição de usuário, reativação de usuário e durante o login, será apresentada uma mensagem ao administrador informando que este usuário não poderá acessar a plataforma utilizando um e-mail já cadastrado em outra empresa, ficando a critério do administrador continuar ou não os procedimentos acima listados.

## 

##  12 de Maio de 2020 

---

## Correções

- Corrigida a movimentação de tópicos e questões para permitir selecionar corretamente o item que será movido e o item de destino.
- Ajuste realizado no produto para que exista uma validação de conexão LDAP sem o uso de credenciais.
- Corrigida inconsistência que não permitia mostrar os usuários de um grupo, quando utilizado o mecanismo de atribuição customizado em uma solicitação.

## 

##  05 de Maio de 2020 

---

## Correções

- Corrigida a edição de contas para salvar corretamente a inclusão e remoção de membros.
- Efetuados ajustes na inclusão de tópicos de questões ao criar um bloco para que todas as questões que compõem o tópico selecionado sejam exibidas corretamente.
- Foram excluídos os recursos importar e exportar treinamentos do catálogo de trilhas e treinamentos.
- Correção realizada na API "/ecm/dataset/synchronizeDataset" para que apresente o correto funcionamento.
- Realizado ajuste na consulta de solicitações para que que os processos que não possuem State possam ser visualizados corretamente.
- Realizada uma melhoria no campo complementos da solicitação, para que o corretor mostre quais palavras necessitam de ajustes ortográficos.
- Realizada correção na exportação de formulários com colunas duplicadas no Excel.
- Corrigidas falhas que não permitiam a exportação de um formulário em formato Excel.

## 

##  28 de Abril de 2020 

---

## Correções

- Corrigida a conversão de campos de data para que sejam exibidos com o tipo Data ao consultar um *dataset* tanto pelo Fluig quanto pelo Fluig Studio.

## 

##  22 de Abril de 2020 

---

## Correções

- Corrigida a conversão de solicitações para que uma solicitação que está em uma versão antiga do processo seja convertida para a versão mais atual sem que ocorram inconsistências.
- Efetuados ajustes para que mecanismos de atribuição customizados identifiquem corretamente uma lista ou um *pool* de usuários no momento da transferência de uma solicitação.
- Corrigida a movimentação de solicitações em bloco quando há campos relacionados a um formulário do tipo pai-filho para que os campos sejam exibidos corretamente.
- Efetuadas correções para que o *layout* da tela de *login* seja exibido corretamente, permitindo assim, que a autenticação seja efetivada.
- Realizado tratamento na passagem de parâmetros no servlet de internacionalização.
- Adicionada a tag *autocomplete=Off* no formulário de login na plataforma.Atenção! Para completo funcionamento dessa tag, caso a organização tenha configurado uma política de uso nos navegadores, é necessário revisar essa política pois ela sobrescreve as tags adicionadas.

## 

##  14 de Abril de 2020 

---

## Correções

- Corrigida a exibição dos usuários do grupo de tarefas em pool.
- Efetuadas melhorias de segurança no fluxo de processos.
- Efetuadas correções para exibir campos do tipo *zoom* como campos descritores quando um formulário exportado pelo fluig Studio for editado na plataforma fluig.

## 

##  07 de Abril de 2020 

---

## Correções

- Efetuados ajustes para que os botões existentes em conteúdos SCORMs funcionem corretamente e as ações possam ser efetivadas.
- Correção realizada para que o filtro MUST_NOT funcione corretamente em datasets customizados utilizando o banco de dados Oracle.
- Correção realizada para que o tamanho do layout da widget seja respeitado ao inserir uma descrição com mais de 180 caracteres.

## 

##  25 de Março de 2020 

---

## Correções

- Correção nos parâmetros gravados no server.log por conta de vulnerabilidade de segurança.
- Correção de inconsistência nas permissões da pasta, quando o documento incluído nela tenha aprovador.
- Ajuste na visualização do histórico de aprovação da versão/revisão do documento, para que as observações muito extensas sejam apresentadas em uma pop up, facilitando a leitura.
- Correção realizada para que seja possível consultar um dataset de formulário em ambientes que utilizam o banco de dados Oracle. 
- Ajuste realizado para que o ícone de Ajuda do fluig volte a funcionar corretamente.
- Correção realizada tornando possível a publicação de uma imagem junto com um vídeo na timeline.
- Corrigido o FLUIGC.toast no forms, permitindo assim que a movimentação e utilização do formulário de forma correta.
- Realizada correção no componente style guide do calendário fluig, para que o formato de calendário seja apresentado corretamente nos formulários de processos.
- Realizada correção na consulta de solicitações para que permita verificar em qual atividade está a solicitação quando for finalizada.

## 

##  18 de Março de 2020 

---

## Correções

- Realizados ajustes para sanar inconsistência ao acessar as páginas de Aprendizado e Avaliações.
- Realizada correção na tabela thread_proces para que seja possível realizar a movimentação de uma tarefa com mecanismo de atribuição que retorne mais de 255 caracteres.
- Corrigida inconsistência no mobile para que ao acessar a central de tarefas como substituto de um usuário e clicar em tarefas a concluir, a quantidade de tarefas mostrada seja correta.
- Correção nos parâmetros gravados no server.log por conta de vulnerabilidade de segurança.
- Correção realizada para que seja possível consultar um dataset de formulário em ambientes que utilizam o banco de dados Oracle. 
- Ajuste realizado para que o ícone de Ajuda do fluig volte a funcionar corretamente.

## 

##  10 de Março de 2020 

---

## Correções

- Correção realizada para que ao compartilhar uma imagem, o número de compartilhamentos e as informações de quem a compartilhou sejam exibidas corretamente.
- Ajuste realizado na Central de componentes que utilizam a classe de ativação.
- Correção de inconsistência ao atualizar arquivos em pastas com aprovadores.
- Corrigida inconsistência na conversão de solicitações, para que sejam convertidas e visualizadas corretamente para a versão solicitada.

## 

##  26 de Fevereiro de 2020 

---

## Correções

- Efetuados ajustes para que os serviços da plataforma possam ser iniciados corretamente após aplicar a atualização 1.6.5-200204 quando o banco de dados ainda possui referências ao antigo comunicador instantâneo.
- Realizado ajuste para que ao iniciar uma solicitação, a versão do processo se mantenha atualizada, sem exibir versões anteriores.
- Criadas APIs para gerenciamento de formulários do ECM e seus registros. Para conhecer, basta acessar [APIs](https://api.fluig.com/).

## 

##  18 de Fevereiro de 2020 

---

## Correções

- Efetuados ajustes no cálculo de notas das avaliações.
- Corrigida a ordenação de questões na execução de avaliações para seguir a mesma ordem definida no tópico durante a criação delas.
- Ajuste realizado para que os registros do campo select sejam retornados corretamente em dispositivos mobile onde contém processos offline.
- Correção realizada para tornar a ação de expandir ou recolher um formulário possível em dispositivos que utilizam IOS, fazendo com que o Accordion funcione corretamente.
- Realizado algumas melhorias relacionadas à vídeos no fluig:Adicionar vídeo pelo editor de conteúdo na home
- Adicionar vídeos no formato FLV
- Exibir mensagem caso o usuário tente adicionar vídeos nos formatos não suportados. Somente MP4 e FLV são suportados.

Realizado ajustes nas widgets **Timeline**, **Nova publicação** e **Galeria de imagens**, para que o correto rotacionamento das imagens ocorra.Realizada correção no fluxo de um processo, para que o gateway considere o usuário de um mecanismo, permitindo movimentar a atividade.Realizado ajuste para que sejam desconsideradas as tarefas inativas, mesmo que o status esteja Pendente em Consenso, permitindo desativar o usuário.Corrigida inconsistência no mobile para permitir que o substituto possa visualizar corretamente as solicitações do processo o qual foi cadastrado.Realizada correção para que a consulta de solicitações retorne os valores corretamente.

## 

## 11 de Fevereiro de 2020 

## Correções

---

- Correção realizada para que as páginas do Fluig sejam exibidas corretamente. Encerrando a inconsistência das páginas que eram exibidas em branco em uma sessão iniciada.
- Realizada correção para que as notificações que utilizam o agendador de tarefas funcionem corretamente.
- Corrigida a inconsistência no Tasks para que ao movimentar o status de uma tarefa com prazo,  sejam apresentados os dados corretos.
- Realizado ajuste para que as notificações do aplicativo Tasks sejam enviadas corretamente.
- Correção realizada para tornar possível a ação de copiar link corretamente, encerrando a inconsistência de não copiar o conteúdo.
- Correção realizada para que o layout da widget padrão de tarefas pendentes seja apresentado corretamente, não apresentando mais a inconsistência de layout quebrado.
- Correção realizada na API para que funcione corretamente, permitindo alterar o artigo.

## 

##  04 de Fevereiro de 2020 

---

## Correções

- Correção realizada para que o título configurado seja exibido corretamente na widget **Listar registros de datasets**, ao ser inserida em uma página.
- Realizada correção na consulta de solicitações para que ao realizar uma consulta, sejam trazidas todas as solicitações, inclusive as que foram convertidas.
- Realizado ajuste na movimentação de processos, para que ao movimentar uma atividade para um subprocesso, ele seja reconhecido sem gerar inconsistência.
- Aplicada correção na consulta de solicitações para que ao consultar, os resultados sejam trazidos corretamente.
- Corrigida inconsistência na consulta de solicitações para que a tela com *loading* apresente os resultados da consulta normalmente.
- Corrigida inconsistência ocorrida ao tentar realizar uma consulta em um dataset de formulário com filtros *MUST_NOT*.
- Aplicada correção para sanar as falhas de download de pastas, causadas pelo limite de cotas.
- Realizado ajuste para que pastas criadas com nome utilizando espaço, sejam permitidas, possibilitando assim realizar o download.
- Correção aplicada para que ao remover um documento, imagem ou formulário de uma comunidade, seja atualizada a quantidade de anexos.

## 

##  28 de Janeiro de 2020 

---

## Correções

- Realizada a atualização do JQuery para a versão 1.9.0, evitando assim a falha de segurança mencionada.
- Correção realizada para que a consulta a um dataset a partir do plugin do eclipse funcione corretamente.
- Ajuste realizado para que adicionar uma estrutura de pastas com arquivo .zip por meio do drag and drop, o upload dos arquivos seja realizado corretamente, não apresentando mais a mensagem de inconsistência.
- Correção realizada para que remover o papel de *admin* de um usuário administrador, tornando possível a ação de desativar este usuário.
- Realizada correção de *push* para dispositivos móveis.
- Correção realizada para que não haja a replicação de dados em ambientes *cloud*.
- Realizada correção na central de tarefas para que ao exportar um relatório utilizando determinado filtro, os campos do cabeçalho do relatório sejam apresentados traduzidos corretamente para o Português e a data seja apresentada em formato DD/MM/AAAA.
- Aplicado ajuste para que a consulta de solicitações funcione corretamente no navegador Internet Explorer 11.
- Reforçada a informação que diz respeito a documentos compartilhados, onde a opção de Compartilhamento externo está disponível apenas para documentos comuns como docx, odt, pdf, entre outros. Documentos do fluig como pastas e formulários não permitem esse tipo de compartilhamento.

## 

##  21 de Janeiro de 2020 

---

## Correções

- Efetuadas correções para que a nota obtida pelos usuários seja exibida corretamente no Histórico de avaliações e no Relatório de execução de avaliações.
- Sanada inconsistência na consulta de solicitações para que a mensagem de erro visualizada sempre que buscava por uma solicitação já excluída, não seja mais apresentada.
- Corrigido  o método attachDocument da hAPI, para que fique registrado no histórico da solicitação os anexos inseridos.
- Implementada correção na consulta de solicitações, para que ao exportar os dados e realizar o download, as informações da coluna Data de conclusão informem a data e hora corretas.
- Corrigida a mensagem disparada para o usuário ao executar o método getFolder do webservice ECMFolderService, onde ao informar a matrícula de um usuário que não esta na segurança da pasta, a mensagem informe apenas que o usuário não possui permissão.
- Realizada alteração para não seja mais permitido retirar a permissão do usuário que está alterando o documento, quando possui aprovador.
- Realizado ajuste da mensagem mostrada ao usuário para informá-lo que o código do grupo não existe ou não foi encontrado.
- Corrigida inconsistência nas colunas da tela de inclusão de usuários no cadastro de grupos, que não estava mantendo a ordenação dos registros de forma correta.
- Realizada correção para que ao tentar redefinir a senha do sistema, um link seja enviado ao email do usuário corretamente e a senha seja recuperada.

## 

##  14 de Janeiro de 2020 

---

## Correções

- Correção realizada para que ao criar uma comunidade e posteriormente renomeá-la, a mesma seja criada na tela de comunidades corretamente e não na tela de Minhas páginas.
- Efetuado ajustes no agendador de tarefas para que a frequência de dias inserida pelo usuário, seja respeitada. Incluído ícone informativo ao lado da opção, contendo detalhes do correto funcionamento.
- Ajustado comportamento do filtro de data final da consulta de solicitações para exibir os resultados corretamente.
- Realizado ajuste nos downloads, para que somente usuários com permissão consigam efetuar download dos anexos de uma solicitação.
- Corrigida a inconsistência ocorrida ao ligar um gateway exclusivo a uma atividade utilizando fluxo padrão.
- Correção efetuada para que o comando *WKUserComment* retorne corretamente as observações inseridas ao cancelar uma solicitação.

## 

##  07 de Janeiro de 2020 

---

## Correções

- Corrigida inconsistência no mobile, para que nos complementos da solicitação, seja mostrado corretamente e por completo as informações e o texto adicionado na movimentação.
- Realizada correção nos componentes Aba e Busca usuário no forms, para que seja possível salvar o formulário corretamente, quando utilizado esses componentes.
- Ajustes realizados para que ao informar a quota de uma pasta como zero, uma mensagem seja exibida informando o usuário o quanto de espaço foi utilizado na pasta.
- Ajustes realizados para que um documento ao ser reprovado, volte para a central de tarefas do usuário publicador, para que seja possível realizar o check out do documento e realizar as alterações necessárias nesta versão do documento que ainda está em processo de aprovação.
- Ajuste realizado para que os usuários consigam realizam o login na plataforma utilizando o e-mail, em casos onde a autenticação LDAP é utilizada.
- Correção realizada para que o evento *afterDocumentPublisher* seja disparado quando houver alguma mudança de propriedade no documento ou quando o mesmo for recortado e colado em outra pasta.
- Realizada alteração para atualizar a relação de apoiadores quando se deixa de apoiar uma publicação.
- No recurso "Importar e Exportar Páginas" do painel de controle foi realizado ajuste para listar a relação de páginas a serem exportadas.

## 

##  17 de Dezembro de 2019 

---

## Correções

- Correção realizada para que ao acionar o Delete do campo Comentário em um documento em check out, o comentário deste documento seja deletado corretamente.
- Realizada correção no botão de **Comentar** tornando possível incluir comentários em pastas novamente.
- Correção realizada para que ao realizar o check in de um documento o mesmo seja mantido na versão ao qual o arquivo realmente está.
- Correção realizada para que o contador utilizado no volume do fluig passe a atualizar o valor e mostrar o valor do volume corretamente.
- Definição de evento para que finalize o processo em situações onde existem dois grupos iguais nas permissões do documento.
- Efetuadas correções para salvar a imagem do certificado e permitir configurá-lo corretamente.

## 

##  10 de Dezembro de 2019 

---

## Correções

- Corrigido o conflito existente com o nome de *widgets* e *slots* de páginas que impedia que a plataforma fosse iniciada corretamente após atualizá-la.
- Correção realizada para que torne possível o correto acesso e carregamento da tela de Substitutos na plataforma.
- Ajuste na mensagem da opção "Compartilhar externamente?", informando que tal recurso é valido por versão de documento. Isto é, se o documento é publicado na versão 1000 e uma nova versão do documento é criada, mesmo desligando a opção nesta segunda versão, a primeira ainda continuará sendo compartilhada.
- Realizada correção no forms para que o loading da página fique visível, não permitindo que o usuário envie mais de uma vez, evitando duplicidade.
- Corrigidas inconsistências na visualização de formulários com custom.
- Realizada correção nos detalhes da solicitação, para que seja feita paginação ao mostrar todos os usuários pertencentes ao papel.
- Correção de redirecionamento realizada para levar corretamente à documentação contextual da plataforma.

## 

##  03 de Dezembro de 2019 

---

## Correções

- Efetuadas alterações para não permitir acessar um conteúdo a partir de sua URL sem estar autenticado na plataforma.
- Corrigida mensagem de arquivo duplicado ao carregar anexos iguais em iniciar solicitação.
- Realizada correção para sanar inconsistência na página de consulta de solicitações.
- Realizada correção nas APIs de processos para que sejam exibidos os resultados quando utilizado mais de um formField.
- Realizada a criação de filtro para ocultar ou exibir arquivos quando a prioridade 'Exibir conteúdo' é desabilitada ou habilitada. Resolvendo a situação dos documentos que eram listados na pasta, mesmo para usuários básicos que não possuíam a permissão para visualizá-los.
- Adicionada validação para em casos de não encontrar o *timeZone* para o usuário que está buscando a lista de *jobs*, pegue como padrão default o fuso: America/São_Paulo.

## 

##  28 de Novembro de 2019 

---

## Correções

- Realizada correção para que ao visualizar um documento em tela cheia, através da tecla F11, a modal de visualização acompanhe o redimensionamento. Não ocorrendo mais os espaços em brancos.
- Realizada correção incluindo o parâmetro JDBC para que liste estes serviços. E para que os serviços REST sejam inclusos é necessário que o swagger esteja cadastrado no mesmo. O fluig Studio não faz a listagem de todos os serviços, listando apenas os serviços SOAP. A listagem de serviços acima desenvolvida, é específica para web.
- Correção realizada para que a pasta Meus documentos seja criada aos usuários da plataforma e caso a mesma não exista, é necessário que o usuário realize o login e acesse o item Documentos. Dessa forma a pasta será criada.
- Realizada correção no menu listar tarefas, para que ao visualizar o formulário, a barra de rolagem seja exibida corretamente e o formulário seja exibido por completo.
- Corrigida inconsistência ao cancelar um processo utilizando um usuário solicitante ou gestor.
- Realizada correção na central de tarefas, para aumento de espaço entre o *checkbox* de seleção e o link da solicitação.
- Realizada correção para sanar inconsistência ocorrida ao atribuir uma atividade ao executor quando possui mecanismo de atribuição configurado.
- Realizada correção para sanar inconsistência na tradução dos fluxos de processos.
- Corrigida inconsistência ocorrida ao configurar um processo simples com mecanismo de atribuição por grupo.
- Realizada correção na movimentação de processo com atividade automática, para que não apresente mais inconsistência do tipo null point.
- Corrigida inconsistência onde a hAPI setAutomaticDecision seguida de uma atividade automática atribuía o usuário responsável como System:Auto.
- Corrigidas inconsistências na página de consulta de solicitações que não permitiam visualizar nenhuma informação referente a solicitação.
- Efetuadas correções para que a plataforma seja iniciada corretamente depois de atualizá-la quando é utilizado o banco de dados SQL Server 2012.
- Corrigido o conflito existente com o nome de *slots* de páginas que impedia que a plataforma fosse iniciada corretamente após atualizá-la.

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

## 

##  19 de Novembro de 2019 

---

## Correções

- Realizado ajuste na execução das constrainsts MUST_NOT e SHOULD para que os mesmos sejam executados corretamente.
- Correção na validação de um processo com fluxo automático que utiliza banco de dados Oracle.
- Corrigida a falha na integração e finalização de um processo ao utilizar o SetAutomaticDecision.
- Realizado ajuste na página de consulta de solicitações para que os processos configurados com fork/join e um subprocesso, sejam executados corretamente.
- Correção realizada para que ao publicar um artigo ou documento e compartilhá-lo na comunidade, o mesmo seja apresentado corretamente para os participantes desta comunidade.
- Realizada correção no download de pastas, tornando possível o download de várias pastas ao mesmo tempo.
- Correção realizada para que seja possível a correta criação de um usuário utilizando o serviço de API "/api/public/wcm/user/create"

## 

##  12 de Novembro de 2019 

---

## Correções

- Removidos caracteres que apareciam em frente ao número da solicitação, na central de tarefas.
- Realizada correção para que o parâmetro *WKIsTransfer* não retorne valores nulos.****
- Realizada correção ao movimentar uma solicitação em bloco quando a mesma não possui formulário.
- Realizada alteração para que seja possível desativar um usuário quando o mesmo tem um substituto já expirado.
- Realizado ajuste no carregamento dos módulos de dataset na API do fluig, para que o funcionamento dos relatórios BIRT ocorra corretamente.

## 

##  05 de Novembro de 2019 

---

## Correções

- Corrigida a visualização de avaliações no Histórico que são formadas por blocos que utilizam todas as questões de um tópico e, por algum motivo, uma das questões do tópico foi movida para outro.
- Corrigida inconsistência no mecanismo de atribuição por campo de formulário no fluig mobile.
- Aplicada tradução nos eventos de *workflow* em processos, para que as mensagens possam ser visualizadas de acordo com o idioma selecionado.
- Realizada correção no pacote de instalação 1.6.5 para que copie corretamente todos os artefatos do sdk para o forms.
- Corrigida inconsistência na movimentação de um processo com campos pai filho, onde ao movimentar em bloco, os campos não permaneciam com os valores.
- Criada nova API para o fluig mobile para retorne as informações do usuário logado.
- Realizada correção para não seja permitido mais de um servidor como master por vez. Inconsistência tornava-se perceptível quando o ambiente possuía vários nós.
- Criado novo serviço para identificação de url, a fim de verificar se a página criada possui suporte mobile.

## 

## 29 de Outubro de 2019 

---

## Correções

- Efetuados ajustes para que avaliações finalizadas sejam exibidas corretamente no Histórico de avaliações e no relatório de Execução de avaliações, evitando a inconsistência intermitente em que alguns usuários ficavam sem o registro de execução em seu histórico.
- Removida a notificação emitida ao finalizar a avaliação de reação em treinamentos, trilhas e turmas.
- Ajuste realizado para que seja considerado primeiro o texto exato que foi digitado na busca.
- Tratamento realizado no gerenciamento de contexto, evitando que ele se duplique e que cause problemas de carregamento nas paginas que eram apresentadas em branco nas situações de: 

1. Navegação de documentos
2. Central de tarefas
3. Formulários

- Realizado ajustes no carregamento de classes do Birt para que ocorra a correta geração de relatórios.

## 

## 22 de Outubro de 2019 

---

## Correções

- Corrigida a inconsistência na confirmação de senha do processo, para que não apresente mais a mensagem de senha inválida.
- Realizada correção no mecanismo de atribuição customizado, para que os usuários sejam mostrados corretamente após configurado o processo.
- Corrigido o recurso Conteúdos para não permitir alterar o tipo de conteúdo durante a edição.
- Efetuado ajuste na exibição da hora em publicações/comentários e movimentação de solicitações. Em alguns casos, a hora era exibida incorretamente (1h a mais).

## 

##  15 de Outubro de 2019 

---

## Correções

- Aplicada a tradução nas literais de processos, para que as mensagens apresentadas ao movimentar tarefas em bloco e visualizar detalhes da solicitação sejam visualizadas no idioma correto.
- Realizado ajuste na data e hora do servidor , para que mostre as informações corretas ao exportar e consultar solicitações.
- Corrigida inconsistência na consulta de solicitações, para que mostre corretamente todas as solicitações do período solicitado.
- Corrigida inconsistência no componente zoom de forms, para que não salve valores aleatórios mesmo após ter sido removido.
- Correção realizada para que ao apoiar um documento onde o código é o mesmo em duas empresas, apenas os usuários pertencentes a empresa que teve o documento apoiado recebam a notificação do GED.
- Correção na validação do usuário que verificava se existia um usuário com o código *undefined* na atualização, o que permitia existir um usuário com o código *undefined*. A edição dos usuários está funcionando corretamente após essa correção.

## 

##  08 de Outubro de 2019 

---

## Correções

- Incluída validação para identificar se a senha do usuário cadastrado no serviço se encontra como null. Caso a senha do usuário esteja como null, a chamada para desencriptação não será feita e a criação do dataset ocorra com sucesso.
- Incluído o campo 'Selecionar versão da API' na widget de Consulta rápida, para que o novo framework seja contemplado.
- Corrigido evento *afterLogin* para evitar executar o evento quando é feito o login de um usuário aplicativo, impedindo o loop de eventos.
- Realizada correção na central de tarefas, para que todas as solicitações sejam carregadas corretamente quando acessadas pelo navegador Internet Explorer.
- Corrigida inconsistência para sanar lentidão no retorno das APIs de processos.
- Reparada a inconsistência no ambiente mobile, onde ao movimentar uma atividade com mecanismo executor de atividade, não apresentava correto funcionamento.
- Corrigida inconsistência ocorrida ao realizar a movimentação de uma solicitação para uma atividade automática com atribuição para um grupo, onde nenhum usuário era apresentado.
- Realizada correção no ambiente mobile para sanar inconsistência com componente de formulário pai x filho.

## 

##  01 de Outubro de 2019 

---

## Correções

- Corrigida a inconsistência nas mensagens de erro, para que sejam mostradas aos usuários, ao tentarem liberar processos através da web ou plugin.
- Realizada correção na consulta de solicitações, para que mostre corretamente o status das atividades.
- Realizado ajuste no componente de texto do forms, para que mostre corretamente todo o conteúdo escrito contido neste componente.
- Realizada correção para que ao utilizar uma *hashtag* contendo uma URL, o link da mesma seja criado normalmente.
- Correção da inconsistência no botão de Avançar/Voltar na publicação de várias imagens onde não era apresentado o correto comportamento no IE. Essa situação foi corrigida e a ação de avançar/voltar as imagens é concluída corretamente.
- Realizada correção para que não ocorra mais a inconsistência com as datas das pastas adicionadas. Ao incluir uma pasta a data de atualização da mesma é exibida corretamente.
- Corrigida a rotina de leitura de tabelas do banco durante o processo de inativar um usuário, restabelecendo assim o comportamento do evento "beforeDeactivateUser"

## 

##  24 de Setembro de 2019 

---

## Correções

- Corrigida a liberação de permissões para gerenciar blocos de questões para que as ações sejam exibidas corretamente.
- Ajustados os tipos de questão Escala e Valor para permitir que seja selecionado ou inserido qualquer valor existente no intervalo de valores definido para a questão.
- Corrigida inconsistência ao acessar propriedades de um processo com componentes BPMN 2.0 que não permitia configurar a opção 'Complementar solicitações'.
- Realizada correção da *constraint Should*, para que o filtro seja aplicado corretamente, indicando quando um mesmo campo possuir valores diferentes.
- Corrigida inconsistência na *API syncronizeDataset*, para que execute o dataset e traga mensagem de retorno de sucesso ou erro, de forma assertiva.
- Realizado ajuste do método *UpdateColleagueWithDependencies* do WebService do fluig *ECMColleagueService*, para que retorne o serviço corretamente de acordo com a atribuição de grupos e papéis definido.

## 

##  17 de Setembro de 2019 

---

## Correções

- Corrigido o redirecionamento para a página principal do treinamento após concluir o seu pré-teste.
- Realizada correção para que as atividades automáticas do processo não sejam movimentadas com o primeiro usuário listado na base.
- Corrigida situação ao tentar adicionar usuários em uma comunidade com mais de 20 integrantes que eram apresentados duplicados. Agora os usuários são buscados diretamente na base de dados não ocorrendo mais a duplicidade.
- Correção da inconsistência onde as páginas do fluig eram apresentadas em branco não permitindo o acesso a formulários. Essa situação foi corrigida e as páginas são apresentadas corretamente.

## 

##  11 de Setembro de 2019 

---

Clientes que não conseguem criar empresa

Clientes que não conseguem criar empresa devem atualizar para o **Update Mandatory 1.6.5-190911**, que contém a correção da situação apontada:

- Corrigida inconsistência que era apresentada no serviço default ao realizar a criação de uma nova empresa.

## Correções

- Realizada correção no evento hAPI setAutomaticDecision para que a movimentação de tarefa automática seja efetuada corretamente.
- Efetuados ajustes para não exibir informações relacionadas a eventos não utilizados pelo LMS no *log*, evitando que cause confusão durante a avaliação do *log* para detectar alguma inconsistência.]
- Realizada padronização em rotinas de integrações com o identity, de modo que o campo "matrícula", de um usuário do fluig, receba o valor do campo "idp", fornecido pelo Identity.
- Corrigida inconsistência na reativação de usuários do fluig quando os mesmos eram reprovisionados no Identity.

## 

##  10 de Setembro de 2019 

---

## Correções

- Corrigida inconsistência na movimentação de solicitação para que ao movimentar as que possuem um campo select já setado, seja mostrado seu valor correto ao visualizar.
- Realizado tratamento para que a área de clique na seta de expandir e recolher dados, seja aumentada, facilitando o uso do cliente ao clicar nesta opção.
- Realizado ajuste para que conversão de solicitação em grupo seja realizada sem inconsistências de atribuição ou versão.
- Corrigida inconsistência com usuário substituto, para que receba somente as notificações sobre os processos configurados para estar sob sua responsabilidade.
- Realizada correção para que os detalhes, os complementos e anexos de uma solicitação sejam mostrados corretamente quando acessados através do navegador Mozila Firefox.
- Realizada correção na exportação de arquivos literais de processos, para que ao invés de utilizar “.” ponto como separador, utilizar o “_” underline, para que a exportação ocorra normalmente.
- Corrigida a página de Consulta de solicitações para que ordene alfabeticamente os processos.
- Pensando em atender à necessidade dos clientes em realizar operações de criação, consulta, atualização e distribuição de processos via API, apresentamos as novas APIs criadas especialmente para facilitar a rotina do cadastro de processos workflow. Para mais detalhes, acesse API Processes.
- Realizada correção na atividade de serviço para que a transação seja efetivada e seu mecanismo de atribuição por campo de formulário seja executado corretamente.
- Correção da inconsistência no botão de Avançar/Voltar na publicação de várias imagens onde não era apresentado o correto comportamento no IE. Essa situação foi corrigida e a ação de avançar/voltar as imagens está correto.
- Corrigida inconsistência onde não era possível realizar a conexão com o banco MYSQL quando o mesmo era cadastrado como externo e a plataforma estava em SQL Server ou Oracle. 

## 

##  04 de Setembro de 2019 

---

## Correção

- Realizada correção para sanar inconsistência ocorrida ao acessar a tela de Iniciar solicitação.
- Melhoria na segurança de visualização de documentos.

## 

##  03 de Setembro de 2019 

---

## Correções

- Realizada correção para sanar inconsistência ocorrida ao criar um novo registro, onde um formulário que possuía um caractere especial no nome fosse inserido.
- Efetuados ajustes para exibir corretamente as páginas públicas sem perder sua versão de rascunho.
- Implementado um script para recalcular a quantidade de seguidores de uma comunidade, resolvendo a situação da quantidade dos seguidores da comunidade que era apresentado incorretamente.

## 

## 28 de Agosto de 2019 

---

## Correções

- Corrigida inconsistência apresentada ao consultar uma solicitação como gestor do processo.
- Corrigida inconsistência onde ao assinar documentos digitalmente e acionar o botão Aprovar nada acontecia e o documento não era aprovado. Essa situação foi resolvida com a atualização da midia pela Certisign e recomendamos que a atualização da plataforma seja feita para corrigir essa situação.
- Corrigida situação onde ao tentar aprovar um documento com assinatura digital a mensagem (Uncaught TypeError: Cannot read property 'message' of null) era apresentada. Essa situação foi resolvida pois o pacote com a cadeia de certificados raiz da ICP-Brasil foram atualizados.

## 

## 27 de Agosto de 2019 

---

## Correções

- Corrigida inconsistência ao exportar um novo formulário via fluig Studio, para que o campo do nome do formulário esteja disponível para preenchimento.
- Corrigida acentuação da palavra substituído, no item Substitutos no painel de controle.
- Realizado ajuste para que os campos de formulário criados fora da modal  de forms, possam ser buscados.
- Realizada correção na exportação avançada da consulta de solicitações, onde o item responsável da atividade não era mostrado corretamente.
- Novos métodos implementados na API pública para formulários html.
- Corrigida inconsistência ocorrida ao selecionar um filtro como favorito na central de tarefas.
- Realizada correção para que ao listar o responsável por uma tarefa na tela de consultar solicitações, o responsável correto seja exibido.
- Realizado ajuste para permitir o login do usuário no fluig Studio, nos casos em que ele possui o mesmo e-mail utilizado no cadastro do usuário wcmadmin.
- Efetuado ajuste para possibilitar a inclusão de palavras com acentuação na descrição dos registros de [Plataforma ❙ Oauth application](/pages/viewpage.action?pageId=234455783).
- Criada validação para que consulte o arquivo *domain.xml* quando houver aumento de limite de upload a partir da tela de [parâmetros](https://tdn.totvs.com/x/goH5DQ) da plataforma. Caso o valor esteja divergente na tela de parâmetros com o arquivo, uma mensagem informando o usuário será exibida para que as alterações sejam feitas no arquivo *domain.xml* também.

## 

## 20 de Agosto de 2019 

---

**Novo componente Busca de Documentos**

A nova busca de documentos é um componente que facilita na hora de realizar uma busca por pastas e documentos publicados na plataforma. Esse componente para ser utilizado em desenvolvimentos sobre a plataforma, visa auxiliar os usuários que precisam encontrar documentos ou pasta em ambientes que possuem um grande volume de conteúdo publicado. 

Acesse nossa documentação e confira os detalhes em **Componente busca de documentos**.

## Correções

- Corrigida mensagem de alerta apresentada ao tentar desativar usuário substituto.
- Realizada correção para que os usuários de um papel sejam exibidos corretamente ao visualizar os dados de uma atividade, na inicialização de um processo.
- Corrigida inconsistência que ocorria ao selecionar uma atividade em pool, e ao clicar para exibir a lista de usuários do grupo/papel, o resultado seja carregado corretamente.
- Ajustada as validações da atividade de serviço, para que seja possível exportar um processo com a versão liberada, contendo a atividade de serviço sem script.
- Realizada correção nas bibliotecas importadas, para que sejam validadas automaticamente e não mostre mais a mensagem, quando o formulário utiliza o Style Guide.

##  13 de Agosto de 2019 

---

**Novidades na busca da Central de tarefas**

Realizada melhoria na busca da central de tarefas do fluig. Agora é possível buscar tarefas a partir de todos os registros contidos na central do usuário, utilizando o filtro criado especialmente para esse refinamento.

**E tem mais!** As abas de **Tarefas a concluir** e **Tarefas em pool** tem novo formato de visualização: exibindo a quantidade atualizada de tarefas totais, no prazo e as em atraso.

Já a lista de usuários substitutos ganhou destaque e encontra-se agora no menu fixo da central de tarefas.

- [Filtro](#)
- [Substituto](#)

![](/download/attachments/442961412/atualiza%C3%A7%C3%A3o_imagem.PNG?version=1&modificationDate=1565613457453&api=v2)

![](/download/attachments/442961412/substitutos.PNG?version=1&modificationDate=1565702339880&api=v2)

## Correções

- Corrigida inconsistência no desenho do processo para que ele fique disponível normalmente na página de complementos da solicitação do cliente, mesmo que o usuário x ou y não possua acesso.
- Realizado ajuste na mensagem de alerta ao assumir tarefas de um processo, a fim de esclarecer para o usuário do que se trata o erro ocorrido.
- Ajuste no componente [datatable](https://style.fluig.com/javascript.html#fluig-datatable) da style guide, que passa a permitir valores diferentes nas propriedades *renderContent* e *header*.

##  06 de Agosto de 2019 

---

## Correções

- Realizada adequação no padrão data/hora, para evitar que a plataforma seja impactada com a [suspensão do horário de verão](http://www.mme.gov.br/web/guest/pagina-inicial/outras-noticas/-/asset_publisher/32hLrOzMKwWb/content/horario-de-verao-e-suspenso-em-todo-o-pais?redirect=http%3A%2F%2Fwww.mme.gov.br%2Fweb%2Fguest%2Fpagina-inicial%2Foutras-noticas%3Fp_p_id%3D101_INSTANCE_32hLrOzMKwWb%26p_p_lifecycle%3D0%26p_p_state%3Dnormal%26p_p_mode%3Dview%26p_p_col_id%3Dcolumn-1%26p_p_col_count%3D2%26_101_INSTANCE_32hLrOzMKwWb_advancedSearch%3Dfalse%26_101_INSTANCE_32hLrOzMKwWb_keywords%3D%26_101_INSTANCE_32hLrOzMKwWb_delta%3D20%26p_r_p_564233524_resetCur%3Dfalse%26_101_INSTANCE_32hLrOzMKwWb_cur%3D5%26_101_INSTANCE_32hLrOzMKwWb_andOperator%3Dtrue).
- Corrigida inconsistência que não permitia exibir os valores dos campos de um formulário.
- Realizada correção para que processos com mecanismo de atribuição customizado tenham o mesmo comportamento no ambiente web e mobile.
- Removida a opção de mecanismo de atribuição customizado da atribuição por associação.
- Corrigida inconsistência na movimentação de uma solicitação para um subprocesso, para que seja possível atribuir um subprocesso a um mecanismo de atribuição “para grupo”.
- Corrigida inconsistência que impossibilitava o usuário de converter solicitações do processo.
- Realizada correção na consulta de solicitações, para que ao exportar solicitações, sejam exportadas somente as solicitações do status selecionado, respeitando a opção selecionada pelo usuário: abertas, finalizadas ou canceladas.
- Corrigida inconsistência com a senha do usuário configurada e cadastrada em uma atividade do processo, para que senha informada corretamente, seja aceita pelo ambiente que utiliza Identity.
- Realizado ajuste na validação de atividades paralelas para que considere os processos com fork criados no Studio.
- Ajuste de *query* para que ao acessar o aplicativo Approval contendo banco de dados Oracle ou SQLserver o mesmo abra corretamente e não apresente mensagem inconsistente.
- Realizada correção na consulta de solicitações, para que ao exportar solicitações, sejam exportadas somente as solicitações do status selecionado, respeitando a opção selecionada pelo usuário: abertas, finalizadas ou canceladas.

##  30 de Julho de 2019 

---

**Nova configuração de tabela nos seus artigos**

A partir dessa atualização, ao inserir tabelas nos seus artigos criados na plataforma, você pode configurar a largura da borda da tabela. Você pode inclusive incluir o valor 0, caso não deseje que ela seja apresentada. Altere as propriedades das suas tabelas para apresentar os conteúdos da forma que desejar. 

Confira a diferença:

- [Com borda](#)
- [Sem borda](#)

![](/download/attachments/442961412/Borda%20001.png?version=2&modificationDate=1563991102650&api=v2)

![](/download/attachments/442961412/Borda%20002.png?version=2&modificationDate=1563991102463&api=v2)

**Saiba mais!**

Conheça mais sobre os **artigos** acessando a [documentação](/pages/viewpage.action?pageId=233763104). 

## Correções

- Tratamento realizado para os casos em que o usuário tinha a pasta 'Meus documentos' duplicada, e com isso não conseguia acessar a navegação de documentos ou ter seus dados de usuário editados.
- Alterado o recurso Tarefas para redirecionar corretamente para o recurso Matrículas ao acessar uma tarefa de requisição de matrícula pendente.
- Corrigida validação entre a empresa do usuário adm e a empresa ao qual o novo usuário será relacionado, ambos no xml, tornando possível a utilização do web-service **ECMColleagueService** para a criação de usuários via Soap em empresas que possuem matrículas com 6 dígitos ou mais.
- Realizada correção no recurso de geolocalização para que as tarefas tenham seu fuso horário atualizado nos complementos da solicitação.
- Corrigida regra de negócio da API v2/requests para que retorne as solicitações de grupos e papéis de usuários comuns ao consultar solicitações.
- Corrigida inconsistência na consulta SQL executada ao abrir a tela de iniciar solicitações.
- Corrigida inconsistência nos registros de formulário, para que ao salvar um registro com o campo de pesquisa incluído, esse registro seja salvo corretamente.

##  23 de Julho de 2019 

---

## Correções

- Corrigida situação que ocasionava lentidão no carregamento do menu em ambientes com banco de dados SQL Server.
- Ajuste realizado para exibir e atualizar corretamente a quantidade de usuários que estão seguindo, após aceitar uma solicitação para seguir.
- Incluída validação na exibição de publicação com imagens, para desconsiderar as imagens que já foram excluídas pela pasta no ECM. 
- Realizado ajuste para que as conversões de solicitação sejam realizadas mesmo com grande quantidade de dados.
- Realizada correção para que a mensagem de erro da aba anexos possa ser ocultada através do botão “ocultar” corretamente.
- Efetuado tratamento nas mensagens de falha no log, para que não ocorra a inserção de caracteres especiais inválidos.
- Correção de inconsistência na execução do método *toResultSet* nos datasets.
- Tratamento realizado para que ao gerar um domínio, a porta inserida esteja definida corretamente fazendo com que os valores sejam retornados corretamente ao domínio.

##  16 de Julho de 2019 

---

## Correções

- Correção realizada para apresentar o botão "Esqueceu sua senha?" na tela de login em ambientes com o AD sem o login combinado.
- Corrigida situação que impedia páginas localizadas no 3º nível de sub-páginas de serem visualizadas pelo mobile. 
- Correção de inconsistência na URL das APIs relacionadas ao Gamification.
- Correção de inconsistência nas permissões de edição na página.
- Realizada correção no kit intranet para que a widget Aniversariantes tenha seu diretório de *uploads* limpo sempre que for inserido um novo registro com foto.
- Corrigida inconsistência na API de formulários, para que ao exportar um formulário do Studio e criar registro de ficha única, ao realizar busca, sejam trazidas informações do formulário corretamente.
- Corrigida inconsistência na visualização de usuários de um grupo quando definido via mecanismo customizado.
- Realiza correção na aba Mobile da atividade, para que as alterações feitas sejam efetivamente atualizadas e visualizadas no aplicativo.

##  09 de Julho de 2019 

---

## Correções

- Realizada atualização para corrigir inconsistência na migração de formulários, para que sejam atualizados e visualizados corretamente.
- Realizado ajuste na classe de busca de arquivos de formulário através da tela de iniciar solicitações.
- Efetuados ajustes para permitir incluir um grupo de usuários como membros ao editar uma conta do LMS.
- Corrigida inconsistência na restauração de versão/revisão de documentos em ambientes com banco de dados Oracle.
- Corrigida situação que causava a duplicação de páginas criadas com o Pages em ambientes com lentidão.
- Ajuste realizado para que seja emitida mensagem de alerta ao clicar em uma notificação de um post que já foi excluído.

##  02 de Julho de 2019 

---

**Novas validações de configuração em banco de dados!**

A partir da atualização **Essential 1.6.5-190702** a plataforma passará a fazer uma validação de *charset* e *collate* do banco de dados antes da inicialização para verificar se as configurações estão corretas. Caso seja identificada alguma divergência, o processo de inicialização **será interrompido**. Recomendamos que um especialista em banco de dados revise as configurações e faça os ajustes necessários de acordo com as documentações:

- **Configuração do banco de dados SQL Server**
- **Configuração do banco de dados MySQL**
- **Configuração do banco de dados Oracle**

**Para mais informações acesse:** [Como realizar a configuração do banco de dados após a release Essential 1.6.5-190702?](https://tdn.totvs.com/x/5ZG5HQ)

## Correções

- Correção de inconsistências nas publicações em comunidades, quando fizessem menção a outros usuários.
- Ajustes para que o e-mail de aprovação ou reprovação do documento seja enviado para quem o alterou por último, em vez de ir para o usuário publicador.
- Ajustes para apresentar uma mensagem alertando o usuário, ao tentar realizar publicação múltipla com um documento compactado que possua mais de 600 arquivos.
- Corrigida situação que impedia a atualização do fluig para a versão mais recente da release Liquid em ambientes com banco de dados MySQL.
- Correção do *beforeUpdateUser* para que a mensagem de erro seja apresentada em tela informando ao usuário da situação.
- Realizada correção na API substituteUser/remove para que os substituídos que já passaram do prazo possam ser deletados.
- Realizado ajuste na tela de consulta de solicitações, para que seja mostrado o número de registros em tela dos tipos de solicitação: abertas, finalizadas ou canceladas.
- Realizada correção na tela de consulta de solicitações, para que sejam mostradas todas as atividades existentes em uma solicitação que constam entre um fork/join.
- Realizada limpeza do cache de subprocesso para que não ocorra interferências ao lançar uma exceção.
- Corrigida inconsistência que ocorria em uma atividade intermediária (timer, condicional) para uma atividade em consenso e era selecionado somente um dos usuários possíveis ao invés de todos.
- Corrigida a inconsistência que ocorria quando selecionada a opção de Movimentar para a próxima atividade e a atividade anterior era um Inclusivo.
- Realizado ajuste no plugin para sanar inconsistência no uso do fork inclusivo e paralelo, na validação do eclipse e exportação fluig.
- Realizada limpeza do cache de subprocesso para que não ocorra interferências ao lançar uma exceção.
- Realizada correção na central de tarefas, para que ao filtrar tarefas por campo de formulário, as informações sejam carregadas completamente e ao trocar de paginação, sejam mostrados os campos corretos.
- Inconsistência corrigida tornando possível a criação de pastas via API.
- Corrigida inconsistência no componente Calendar para que permita que o componente de texto possa ter seu valor alterado no evento displayFields.
- Realizada correção para que, ao realizar uma integração externa e configurar uma mensagem customizada de alerta, ela seja atualizada e visualizada.

## 

##  25 de Junho de 2019 

---

## Correções

- Correção realizada para manter os valores dos campos de entrada nas integrações externas na edição do formulário após a publicação.
- Correção de layout do menu de opções na tela de Iniciar solicitações.
- Ajustes para anexar arquivos corretamente na solicitação utilizando o navegador Internet Explorer.
- Corrigida inconsistência onde o campo de configuração da condição automática aparecia vazio, após exportar o formulário em um ambiente e importar em outro.
- Realizada correção na modelagem de processos web, para que a swinlane possa ser ajustada verticalmente de acordo com a necessidade do usuário.
- Corrigida inconsistência que não permitia o cliente de editar ou remover um registro de substituto, devido ao seu grande volume de dados em ambientes com base oracle.
- Realizado ajuste para sanar inconsistência que não permitia o usuário de iniciar uma solicitação quando configurado um fork ou automática, informando que o usuário destino não havia sido informado.
- Realizado ajuste para exibir a lista de usuários substitutos em ordem alfabética na Central de tarefas.

## 

##  17 de Junho de 2019 

---

## Correções

- Correção de inconsistência ao iniciar solicitação que contém validação de usuários.
- Efetuados ajustes na execução de avaliações para que seja traduzida corretamente para o idioma Espanhol.
- Liberada API para consultar as configurações de segurança do documento a partir do código e da versão do documento.
- Corrigida inconsistência na função de Desfazer/Refazer ação no formulário.

## 

##  11 de Junho de 2019 

---

## Correções

- Tratamento realizado para emitir alerta caso o usuário tente movimentar uma solicitação para usuário inativo ou inexistente.

- Realizada correção para que não sejam enviadas notificações de atraso quando a *task* já estiver concluída.

- Realizada melhoria de segurança nas telas de Detalhes da atividade e de Detalhes da solicitação.

- Correção de inconsistência ao visualizar os usuários quando utilizado o mecanismo de atribuição por campo de formulário para um grupo.

- Correção realizada para que a seleção de registros da tela de Minhas solicitações não seja perdida ao alternar entre janelas.

- Incluída validação para remover espaços em branco no campo URL do Portal, e com isso, corrigir a dificuldade de acesso à plataforma em aparelhos iOS.

- Inconsistência solucionada para que ao restaurar a versão do documento por meio de sua visualização a ação seja concluída corretamente.

- Solucionada a inconsistência no histórico de datasets para que seja exibida apenas uma versão ativa por vez.

- Efetuados ajustes para que o Messaging funcione corretamente no navegador Internet Explorer.

## 

##  04 de Junho de 2019 

---

## Correções

- Realizada correção para sanar inconsistência ao configurar envio de e-mail via empresa, para que as configurações de e-mail sejam coletadas corretamente.
- Corrigido evento de processo *afterProcessCreate*para que seja possível capturar o valor do dataset das tarefas no momento da criação da solicitação.
- Corrigida inconsistência na consulta da API *documentHitsByVersion.*
- Ajustes no cadastro de template de e-mail, para limitar o campo código a 50 caracteres.
- Correção da inconsistência ao editar os *templates* de e-mail tornando possível editá-los e acionar o botão Fechar corretamente.
- Realizado ajuste para que os eventos sociais sejam registrados corretamente com a data de criação. 

## 

##  28 de Maio de 2019 

---

## Correções

- Correção de inconsistência na movimentação em bloco de documentos para usuários com matrícula numérica.
- Realizado ajuste para não ser apresentada a opção de download para formulários e registros de formulário.
- Realizada correção para que a busca de solicitações possa ser feita utilizando ponto e vírgula para separar as solicitações.
- Realizada correção para sanar inconsistência ao movimentar uma solicitação com consenso. Permitindo agora que o usuário selecione os usuários responsáveis pelo consenso e a atividade seja movimentada normalmente.
- Corrigida inconsistência para que ao criar um novo registro de formulário pela api cardservice, e o valor informado para o atributo documentType não seja salvo, seja possível criar um novo registro de formulário.
- Realizada correção nos anexos da solicitação, para que arquivos com mesmo nome e extensão não sejam aceitos, gerando um alerta ao usuário.
- Corrigida inconsistência ao movimentar tarefa com usuário substitutos, para que seja exibida a imagem de perfil do substituto e não do substituído.
- Realizada correção para melhorar o desempenho do carregamento do histórico de uma solicitação que contenha descrições ou comentários extensos.

## 

##  21 de Maio de 2019 

---

## Correções

- Efetuadas correções no processo de matrícula em treinamentos para considerar o usuário autenticado no momento da requisição.
- Realizada validação de segurança na tela de Atualização de arquivo.
- Correção de inconsistência que ocorria no componente [Radio da Style guide](https://style.fluig.com/components.html#custom-checkbox-and-radio), na impressão do formulário preenchido.
- Correção de inconsistência apresentada ao tentar acessar a solução Pages.
- Realizado ajuste no fluig app, para que não sejam duplicadas as linhas do pai e filho ao movimentar uma solicitação via mobile.

##  14 de Maio de 2019 

---

**Novo datasource para acesso ao banco de dados**

Ao realizar um desenvolvimento na plataforma fluig, a partir dessa atualização você pode utilizar o *datasource* **AppDS** em vez do FluigDS ou FluigDSRO. Esse *datasource* é específico para desenvolvimentos sobre a plataforma e seu uso trará mais performance ao fluig, pois sua execução irá ocorrer de forma independente e não irá interferir nos *datasources* padrão da plataforma.

## Correções

- Ajustes no texto da mensagem informativa apresentada no ícone de publicação futura dos documentos.
- Corrigida a execução de uma avaliação a partir do *link* recebido por *e-mail*.
- Corrigida inconsistência nos processos que possuem atividade de decisão, para que a modal seja visualizada permitindo selecionar o usuário.
- Realizada correção para que seja utilizado o login de usuário na busca de sua localidade e não o código, permitindo assim que o envio do e-mail de cancelamento de solicitação seja enviado corretamente.

##  07 de Maio de 2019 

---

## Correções

- Realizado ajuste para que, quando realizada uma transferência, a solicitação atualize o responsável na busca.
- Corrigida inconsistência que ocorria em ambientes com nuvem de relacionamento ativada, ao tentar mencionar uma pessoa em comentário ou publicação.

##  30 de Abril de 2019 

---

## Documentos

**Visualize seus fluxogramas no fluig**

Agora a visualização de fluxogramas gerados a partir do programa Microsoft Visio se tornou muito mais fácil! A partir desta atualização você poderá ver seus fluxogramas com o fluig Viewer diretamente pela plataforma, evitando a obrigatoriedade de efetuar o *download* do arquivo e, com isso, agilizando as suas atividades. Importe os seus arquivos VSD ou VSDX para o fluig e aproveite essa facilidade!

**Saiba mais!**

Conheça mais sobre o fluig Viewer e os tipos de documentos suportados consultando [essa documentação](/display/fluig/Sobre+o+Fluig+Viewer).

![](/download/attachments/442961412/2019-04-24.png?version=1&modificationDate=1556112357463&api=v2)

## Correções

- Realizado ajuste na validação de limpeza da pasta de upload, para corrigir inconsistência ao alterar documento. 
- Ajuste no filtro "tipo de documento" para que filtre corretamente os documentos, não apresentando outros tipos de documentos na geração da lista mestra. 
- Correção de inconsistência na aba Geral da tela de edição de perfil.
- Realizada correção na central de tarefas para sanar inconsistência que ocasionava a quebra de layout ao redimensionar colunas.
- Realizado ajuste na configuração de processo, para que ao editar um processo e ele possuir conexões com a swimlane, as mesmas sejam removidas.

##  23 de Abril de 2019 

---

## Correções

- Realizados ajustes para corrigir inconsistência que gerava registros duplicados na central de tarefas sempre que utilizado um mecanismo customizado com usuários duplicados.
- Realizada correção no editor web de processos, para sanar inconsistência que não permitia salvar anotações no processo.
- Realizada alteração de lógica no parâmetro de transferência de atividade WKIsTransfer, para que seja enviado como true quando realizada uma transferência.
- Retirada de caracter inválido na consulta, para que os apps dentro de Solution possam ser abertos em Oracle.

##  16 de Abril de 2019 

---

## Correções

- Realizada correção para que ao realizar o cancelamento de uma solicitação, o botão “Assumir tarefa” não seja mais apresentado.
- Corrigida inconsistência na central de tarefas quando acessada via Internet Explorer 11, onde as datas iniciais e finais de determinadas solicitações eram apresentadas com inválidas.
- Correção realizada para possibilitar a publicação de textos com caracteres especiais ("%" por exemplo) quando habilitado o recurso de [Plataforma ❙ Restrição de conteúdo indesejado](/pages/viewpage.action?pageId=234455608).
- Realizado ajuste no título da widget Analytics, para deixar de exibir o texto "Empresa" antes da descrição.
- Correção do arquivo *cardPublisher.js*, fazendo com que a mensagem apresentada em tela na validação de campos de formulário seja apresentada corretamente, trazendo todos os caracteres.
- Correção realizada para tratar a cópia de várias pastas simultaneamente, tornando possível concluir o processamento quando o servidor cair no momento da copia.

## 

##  10 de Abril de 2019 

---

## Portal

**Sua plataforma já está utilizando a skin flat, lançada na atualização Liquid?**

Agora seus formulários também serão apresentados neste mesmo layout! Atualize sua plataforma e torne a aparência dos seus formulários muito mais moderna e fluída, além de contar com novos componentes web. Confira a diferença de layout abaixo:

- [Skin flat](#)
- [Skin clássico](#)

![](/download/attachments/442961412/flat.png?version=2&modificationDate=1554742675140&api=v2)

![](/download/attachments/442961412/cl%C3%A1ssico.png?version=2&modificationDate=1554742663960&api=v2)

**Saiba mais!**

Para saber mais detalhes sobre essa alteração, consulte a FAQ [FORM - Como utilizar a skin flat em formulários?](/pages/viewpage.action?pageId=471943339) e o help [Plataforma ❙ Temas](/pages/viewpage.action?pageId=234455751).

Assista também ao vídeo de divulgação do [layout flat](https://youtu.be/FSR1jR3yVw8).

## Correções

- Realizado ajuste na tela de Consulta de solicitação para que, quando o usuário permanecer o ponteiro do mouse sobre um campo, a *tag* seja exibida corretamente com a informação completa.

- Realizada correção para sanar inconsistência ocorrida no Monitoramento de processos sob gerencia, onde ao realizar uma consulta era exibido somente o ícone e não a descrição do processo.****

- Realizado tratamento no Tasks para que o campo descrição da tarefa permita inserir até 10 linhas de texto, ajustando-se automaticamente ao espaço do campo.****

- Realizado ajustes para que seja possível iniciar solicitações através do Internet Explorer.

- Realizado ajuste no widget cardápio do dia, do kit intranet, a fim de corrigir erro de versão dos registros.

- Realizada correção para que todas as widgets sejam carregadas na edição do layout colaborativo.

- Corrigida a paginação de usuários nas estatísticas de uma avaliação para não exibir dados duplicados sobre a sua execução.

- Ajustada a pré-visualização de conteúdos do tipo SCORM no recurso Conteúdos.

- Efetuados ajustes para salvar corretamente a dificuldade das questões informada no filtro dos tópicos que compõem os blocos de uma avaliação.

- Corrigida a inclusão de imagens no enunciado de questões.

- Corrigido o formato das datas inicial e final no agendamento de avaliações.

- Realizada correção no token de reset de senha via mobile. 

- Efetuado tratamento para trazer melhorias de segurança nos cadastros do fluig.

- Realizada correção nos registros de formulário para que ao tentar atualizar a descrição, os registros sejam salvos corretamente.

## 

##  26 de Março de 2019 

---

## Portal

**Sua página personalizada está demorando para carregar?**

Essa situação ficou no passado! Fizemos uma otimização no carregamento das páginas, para tornar suas páginas elaboradas com o **layout comunicativo** muito mais rápidas. Na prática, essa alteração faz com que somente o conteúdo da primeira aba seja carregado no momento em que a página for acessada, e o conteúdo inserido nas demais abas só seja carregado conforme o usuário for alternando de aba. Esse comportamento diminui a quantidade de requisições ao servidor e, com isso, melhora consideravelmente a performance das suas páginas.

Aproveite essa melhoria e aprimore sempre suas páginas personalizadas, produzindo conteúdos ricos e atrativos!

## Correções

- Ajustada a caixa de envio de mensagens do Messaging Web para não exibir a mensagem que foi escrita para uma conversa mas não foi enviada na caixa de mensagens de outra conversa que foi iniciada ou continuada posteriormente.

- Inconsistências ao atualizar da versão 1.6.4 para a 1.6.5 devido às transações feitas no banco. Com isso, o processo de atualização foi divido em dois *updates*.

- Ajustes na documentação do componente [Rich Editor](https://style.fluig.com/miscellaneous.html#rich-editor) do Style Guide.

- Ajustes na documentação do componente [Filter](https://style.fluig.com/miscellaneous.html#filter) do Style Guide.

- Correção da inconsistência onde não era possível alterar o administrador de uma comunidade pois o usuário estava duplicado no grupo da comunidade, não permitindo a alteração. Junto à isso, foi ajustado a mensagem para informar esta situação, já que a mensagem anterior mencionava o recurso nuvens de relacionamento.

- Realizado ajuste para que a notificação seja marcada como visualizada quando o usuário clicar em qualquer área da notificação.

- Correção de inconsistências no recurso de Nuvens de relacionamento. Agora o administrador de uma comunidade, ao trocar de nuvem de relacionamento, tem a possibilidade de mudar a nuvem da comunidade.

- Efetuados ajustes no processo de versionamento de questões do tipo lacuna.

- Efetuadas melhorias de segurança nos recursos do LMS que possuem editor de texto.

- Corrigida uma inconsistência que ocorria ao atualizar a plataforma da 1.6.4 para a 1.6.5.

- Realizado ajuste no carregamento da central de tarefas, para que os processos retornem a versão atual em que se encontram.

- Realizada correção ao consultar solicitações finalizadas, para que sejam exibidas as atividades atuais, seguindo a ordem de conclusão dessas atividades.

- Realizada correção no identificador na consulta de solicitações. Corrigido para que mostre corretamente o código do formulário criado.

- Corrigida inconsistência que ocorria na base Oracle ao publicar um formulário que continha números iniciando o nome do campo.

- Corrigida inconsistência ocorrida ao tentar migrar formulários utilizando ambiente SQL Server 1.6.4 para 1.6.5.

## 14 de Março de 2019 

---

Clientes que utilizam o fluig Mobile

Clientes que não conseguem acessar seus processos via Mobile ou que estejam com dificuldade em autenticar-se no aplicativo devem atualizar para a **Update Mandatory 1.6.5-190314**, que contém a correção da situação apontada:

- Realizada alteração no formato de data das [APIs do fluig](https://api.fluig.com/), para evitar a mensagem "Invalid date" em algumas telas da plataforma.

## Correções

- Realizado ajuste para que os campos dentro de abas e seções no forms, sejam considerados na seleção de campos de entrada de integração. Corrigido ainda a inconsistência que possibilitava selecionar componentes que não eram de entrada de dados.

- Realizada correção para que seja possível consultar datasets dentro de um formulário criado no Studio.

##  06 de Março de 2019 

---

## Portal

**Novos ícones no seu ambiente**

A fluig Liquid já trouxe muita evolução de layout com a skin flat, tornando a aparência no fluig muito mais moderna. A partir desta Update Essencial **1.6.5-190306**você pode conferir novos ícones de menu no tema **Snowflake**, para dar continuidade a essa evolução de layout e estar aderente aos novos ícones de design flat do Style Guide.

Atualize já sua plataforma e confira a mudança!

**Fique atento!**

Se esse tema está em vigor no seu ambiente, você deve notar que essa mudança impacta nos ícones de suas páginas personalizadas. Para saber mais detalhes sobre essa mudança, acesse a documentação sobre [Ícones de menu](/pages/viewpage.action?pageId=463803148).

- [Menu com os novos ícones](#)
- [Seleção de ícone para a página](#)

![](/download/attachments/442961412/%C3%8Dcones%201.6.5-190306.png?version=1&modificationDate=1551903203387&api=v2)

![](/download/attachments/442961412/Image%20001.png?version=1&modificationDate=1551903827653&api=v2)

## LMS

**Recursos depreciados**

A partir desta atualização (**1.6.5-190306**), os recursos relacionados ao AMS – avaliações externas – foram depreciados e não estão mais presentes no LMS da plataforma.

**Entenda o impacto:**

**→** Ao aplicar esta atualização no seu ambiente, os recursos abaixo não são mais exibidos no menu e não podem mais ser utilizados:

- Configuração AMS;
- Avaliações AMS;
- Estatísticas AMS.

**→**Novas instalações da plataforma que terão o LMS [ativado](#Atualizações(1.6.5)-nova-instalacao-lms) também não contarão mais com esses recursos.

## Correções

- Efetuadas atualizações de segurança nos recursos do LMS.

- Ajustado o *layout* do recurso Agendamento de avaliações para exibir o campo *E-mails* corretamente.

- Corrigida a inclusão de conteúdos do tipo URL no recurso Conteúdos do LMS.

- Realizada correção para que ao executar uma atividade com usuário substituto, esse usuário seja considerado na execução e seu nome seja mostrado nos complementos da solicitação.

- Realizado ajuste nas APIs para que ao informar o userCode os dados sejam retornados normalmente.

- Realizada correção para que a tarefa seja salva mesmo quando marcada a opção “Inibi opção transferência”.

- Realizada correção para sanar o erro que ocorria ao acessar a Central de tarefas através do aplicativo fluig.

- Corrigida inconsistência ocorrida ao tentar iniciar um processo via API V2. Alterado para que seja buscado o colleague completo ao invés de somente utilizar PK.

- Realizada correção no envio de notificação de transferência, onde ao transferir uma tarefa para um novo dono, a notificação chegue corretamente.

- Corrigida situação que impedia a inclusão de um grupo como filho de outro grupo.

- Alteração realizada para situações onde a constraint *must_not* receber um valor em branco e o banco de dados for Oracle, o db do banco não aceitará um valor em branco e gravará como Null, neste caso a query será montada corretamente.

##  27 de Fevereiro de 2019 

---

## Correções

- Corrigida inconsistência ao salvar ou liberar um processo criado pelo modelador web contendo atividade de serviço.

- Realizado ajuste para que as categorias de processos fiquem ordenadas em ordem alfabética.

##  19 de Fevereiro de 2019 

---

Importante!

A partir desta atualização (**1.6.5-190219**), o **LMS** não faz mais parte da plataforma para **novas instalações**.

Mas, não se preocupe:

- **se você já possui a plataforma instalada com o LMS**: pode aplicar esta atualização no seu ambiente normalmente, pois o seu LMS continuará ativo e apto para utilização;

- **se você adquiriu a plataforma com o LMS incluso e ela ainda será instalada**: entre em contato com o [Suporte Fluig](https://suporte.fluig.com/) para que você consiga utiliza-lo normalmente – mesmo após a atualização **1.6.5-190219**. Se você não lembra se o LMS está incluso ou não no seu pacote, consulte sua proposta comercial ou entre em contato com o seu ESN.

## Correções

- Tratamento realizado para evitar travamentos ao iniciar os serviços do fluig.

- Incluído tratamento para possibilitar a utilização do caractere porcentagem (%) na senha do administrador que acessa o fluig Studio.

- Corrigido o processo de inclusão de usuários em grupos via SOAP para que todos os usuários incluídos sejam matriculados em um item de aprendizado ao selecionar o grupo.

- Realizado ajuste nos grupos de usuário, para que respeitem a hierarquia e os usuários cadastrados não sejam todos adicionados com o mesmo papel em uma solicitação.

- Realizado ajuste na data de inicialização do processo, para que mostre a verdadeira data de inicialização do processo e não a data atual em todas as solicitações.

- Realizado ajuste nas sub-categorias de processos para que seja respeitada a categoria e os processos sejam agrupados abaixo da sub-categoria correta.

##  12 de Fevereiro de 2019 

---

## Correções

- Realizada correção na tela de iniciar solicitações, para sanar inconsistência com os arquivos que não foram traduzidos corretamente ao atualizar a versão.

- Realizada correção para que os processos com versão já liberadas, e configurados para estarem disponíveis no mobile, funcionem corretamente no aplicativo fluig.

- Realizado ajuste de performance para sanar a lentidão que ocorria na consulta de processos por usuário.

- Corrigida lógica no Tasks que adicionava cor nos ícones de pendência e impedia visualização do usuário. Os ícones foram ajustados e voltaram a ser exibidos.

- Realizado ajuste para que os processos com atividade de serviço que utilizam o *ECMWorkflowEngineService – ImportProcess*, possam ser importados via *webservice*.

- Ajuste realizado para que não seja permitido remover o papel do único usuário administrador da plataforma, visto que é necessário ter sempre um usuário com papel administrador para que seja concedida as permissões da plataforma.

- Correção de inconsistência na consulta de dataset avançado contendo *constraints* MUST ou MUST_NOT.

##  06 de Fevereiro de 2019 

---

## Correções

- Correção da inconsistência onde ao desinstalar o aplicativo do fluig sem realizar *logoff*, as notificações eram apresentadas em duplicidade.

- Realizada correção para que a sessão do fluig também seja encerrada, assim que o usuário efetuar o *logoff* no Identity.

- Ajuste realizado na criação do dataset avançado, para que o editor seja aberto em uma nova guia mesmo com o bloqueio de *pop-up* do navegador ativado.

- Ajuste no método de busca utilizado pelo webservice, para trazer o que está no banco de dados em vez de buscar em *cache*.

- Inclusão de limite de registros para consulta do dataset interno *document*, pois a quantidade muito grande de registros retornados pode causar lentidão no ambiente.

- Corrigida inconsistência na autenticação da assinatura digital em processos, quando utilizado o navegador Firefox.****

- Realizada correção na consulta de tarefas e atividades, para que os usuários comuns que abriram ou participaram de uma solicitação, consigam visualizá-la no seu status atual.****

- Realizada correção para que uma tarefa possa ser transferida para um pool.****

- Realizado ajuste no forms para que possa ser selecionado um registro do zoom quando utilizado dataset jornalizado.****

- Realizada atualização nos microsserviços para sanar lentidão no carregamento das páginas de Forms e Tasks.

##  29 de Janeiro de 2019 

---

## Correções

- Realizado ajuste na visualização do workflow do processo, que apresentava imagem desconfigurada e que dificultava o entendimento.****

- Corrigida inconsistência no mecanismo de atribuição por papel em uma atividade, a fim de sanar inconsistência na qual informava que o usuário não estava apto para receber determinada tarefa.****

- Realizado ajuste para não permitir que uma atividade de serviço tenha fluxo de erro apontando para ele mesmo, seja na web ou Studio.

- Corrigida inconsistência que não permitia o usuário de visualizar a notificação das atividades, traduzidas de acordo com o idioma definido.

- Realizada correção na consulta de solicitações, onde ao pesquisar por uma solicitação, o usuário consiga visualizar a situação atual da solicitação.

- Realizada correção na importação e exportação das mensagens personalizadas no Studio.

- Realizado tratamento e adicionada a mensagem no Forms, informando ao usuário que não é possível salvar o componente de "incorporar formulário".

- Realizada correção no migrador de formulários, para que suporte formulários iniciados na versão zero ‘0’.

- Corrigida inconsistência que não permitia visualizar os botões na widget Cadastro ao atualizar o fluig para a versão mais recente.

- Alterada a máscara de IP para que seja possível incluir apenas dois dígitos nas sessões, tanto na execução do form quanto no filtro de pesquisa.

- Correção realizada na consulta de datasets de formulário, que estava gerando log.

- Corrigida situação que impedia a consulta, importação e exportação de datasets com o banco de dados Oracle.

- Efetuadas correções no serviço que permite adicionar usuários em grupos por meio da API.

- Ajustada a importação de grupos de alternativas na criação de questões.

- Alterado o relatório de Matrículas em trilhas e treinamentos para corrigir a exibição do horário de matrícula e de conclusão de treinamentos que são concluídos pelos usuários no mesmo dia em que eles foram matriculados.

##  22 de Janeiro de 2019 

---

## Correções

- Tratamento realizado na interface utilizada pelo BIRT, para corrigir inconsistência nos relatórios que acessam formulários.

- Correção realizada no cadastro de usuário no fluig, para validar caso o usuário já esteja vinculado no Identity.

- Correção de dificuldade na alteração de senha, em casos específicos onde um usuário tem o valor *user_code* igual ao *login* de outro usuário.

- Corrigida situação que gerava log na validação de IP.

- Correção na visualização de arquivos DOCX com formatações ou elementos específicos, em ambientes onde o server não tem o pacote Office instalado.

- Tratamento realizado para sanar inconsistência no acesso ao menu Soluções em ambientes em *cloud*.

- Correção de dificuldade na importação do kit intranet com usuários cuja matrícula fosse diferente do login cadastrado.

- Correção de inconsistência que impedia a exportação de páginas que tivessem *widget*.

- Efetuada correção para possibilitar a visualização de uma página filha que o usuário tenha permissão, mesmo que esse usuário não tenha permissão de acesso à página agrupadora.

- Ajuste realizado para trazer corretamente as publicações recentes, ao ordenar a *timeline* pela opção "Últimas publicações".

- Corrigido o relatório de andamento em treinamentos para exibir os dados corretamente.

- Realizada correção na importação e exportação das mensagens personalizadas na movimentação das solicitações no Studio.

##  15 de Janeiro de 2019 

---

## Correções

- Correção realizada para sanar inconsistência que gerava mensagem de log após instalar atualização 1.6.5 190102.

- Corrigida situação que impedia a reinicialização dos serviços do fluig.

- Realizado ajuste para efetuar o login na plataforma utilizando o endereço de e-mail vinculado ao usuário.

- Corrigida situação que impedia a execução do relatório Colleague_report (Relatório de Usuários).

- Ajuste no tamanho do nome do slot no layout, para permitir informar texto com mais de 9 caracteres.

- Correção no texto da janela de alteração "Trocar URL personalizada para acesso" na configuração da página.

- Realizada correção para evitar que apareça a mensagem de "Conteúdo removido" na publicação, ao deletar imagens pela galeria de mídia.

- Adicionada validação para que, ao possuir mais de 100 conversas no Messaging e realizar uma busca, as conversas sejam carregadas corretamente.

- Corrigida a exibição de notificações do Messaging na área de trabalho e no título do navegador.

- Corrigida inconsistência encontrada na validação dos campos de formulário, que impossibilitava sua exportação quando haviam campos com dados iguais.****

- Realizada correção na inconsistência gerada na função exportar excel na widget de cadastros.

- Realizada correção para incluir o campo de título formulário nas métricas do NewForms e NewFormsRules, para que possam ser populados através do Analytics.

- Realizados ajustes para que os feriados pertencentes há uma localidade sejam considerados no método hAPI.calculateDeadLineHours.

##  08 de Janeiro de 2019 

---

## Correções

- Correção de inconsistência no download de pasta quando o usuário não tinha pasta criada dentro do upload. 

- Realizada correção nos filtros de consulta de datasets dos tipos "*holiday*" ou "*globalCalendar*”, para que as informações requisitadas no filtro sejam exibidas.

- Corrigida inconsistência que gerava lentidão ao abrir uma solicitação a partir da página de iniciar solicitações.

- Corrigida inconsistência que permite acesso de configuração de processos a usuários comuns, porém ao salvar o processo, é informada a falta de permissão. Situação ajustada para sanar os problemas ocorridos.

- Realizada tratativa para que caso o formulário tenha mais de um campo Escolha Única e os valores não sejam desmarcados ao selecionar outro campo de Escolha Única.

##  02 de Janeiro de 2019 

---

## Correções

- Correção no módulo de login via LDAP que estava esgotando os recursos do banco de dados.

- Ajuste realizado para que os relatórios gerados de processos que controlam SLA considerem a data e hora de finalização da solicitação.

##  26 de Dezembro de 2018 

---

## Correções

- Padronização da exibição das mensagens referentes ao evento *beforeCommunityParticipation* nas diversas interfaces da plataforma.

- Efetuados ajustes no *rollback* da transação da API de adicionar usuários em comunidades, para evitar futuras inconsistências nas transações de serviço.

- Efetuados ajustes para acesso aos itens do menu Soluções, em ambientes com banco de dados Oracle. Para acessar corretamente, é necessário efetuar uma configuração no arquivo domain.xml. Saiba mais sobre essa configuração [clicando aqui](/pages/viewpage.action?pageId=445664942).

- Efetuados ajustes para que o Messaging emita uma mensagem informativa ao tentar conectar-se a uma conta inexistente.

- Corrigida inconsistência nas operações de serviço REST, pois quando havia um objeto do tipo Map dentro de um objeto lista, na configuração da integração com Forms, não era apresentado este objeto como Map.****

- Realizada correção na widget Cadastro, para que a modal com a mensagem apresentada, seja apresentada no versão atualizada.

- Corrigida exibição da consulta de solicitação que possuem formulários que utilizam o Style Guide, permitindo que a consulta exiba os valores alinhados corretamente.

- Realizado ajuste no mecanismo de atribuição por associação, para que os registros da solicitação que possui o mecanismo configurado, sejam apresentados corretamente ao usuários cadastrados.

- Realizado ajuste na tela de cadastro de substituto, para que ao redimensionar a tela, os campos zoom não fiquem sobrepostos.

- Aplicado tratamento para corrigir inconsistência na consulta de datasets, que ao realizar uma consulta com filtro de um dataset gerado a partir de um formulário, não retornava os valores do dataset de maneira correta.

- Realizada correção na tradução das literais, para que aplique corretamente a tradução nas mensagens quando não existe um*.svg* em um processo BPM 2.0.

- Corrigida situação na central de tarefas, para que a ordenação por campo de formulário, nos filtros customizados, funcione corretamente quando utilizado banco de dados Oracle.

- Corrigida a extensão do objeto de Data nas APIs, para que retorne no formato correto.

- Foram realizadas algumas correções nas tarefas de serviços para sanar erros que aconteciam após a atualização para o fluig 1.6.5. Entre elas estão:Ajuste do erro que não permitia nomes de atividades muito grandes;
- Ícone do evento de captura de erro foi ajustado para que fique disponível para visualização ao configurar o processo;
- A atividade de serviço agora possui a cor laranja quando está em execução;
- Corrigido erro geral, que permite a execução de tarefas automáticas ou com eventos após uma tarefa de serviço.

- Realizado ajuste para que todas as subcategorias de cada categoria sejam apresentadas na tela de Inicialização de processos.

##  18 de Dezembro de 2018 

---

## Correções

- Corrigida inconsistência que impedia o acesso ao Pages Beta, ocasionando a renderização em HTML em vez da página.

- Correção de inconsistência em que o rodapé ficava sem cor, mesmo tendo a cor de fundo configurada.

- Corrigida inconsistência na criação de uma publicação, onde ao clicar no botão de múltiplas imagens e tentar inserir uma imagens apenas, a miniatura da imagem não era apresentada.

- Incluído bloqueio enquanto a plataforma está processando outra publicação, para evitar a criação de publicações duplicadas.

- Correção na imagem do componente "collapse", que não estava sendo apresentado nos formulários.

- Correção de inconsistências que geravam mensagens no console do navegador ao acessar a Style Guide.

- Correção realizada no disparo do evento *fluig.filter.loadComplete* ou *fluig.filter.load.complete.*

- Tratamento realizado para evitar erros ao retornar uma operação de serviço SOAP em formato *array*.

- Efetuados ajustes no Messaging Web para marcar como lidas as mensagens que são visualizadas no aplicativo Messaging Desktop.

- Realizada correção para que sejam exibidas corretamente as subcategorias em um processo, que anteriormente não era expandido na tela de iniciar solicitações.****

- Realizado ajuste para que o tamanho do anexo seja ampliado na atualização para a versão 1.6.5 do fluig.

- Corrigidas inconsistências com a exportação de solicitações, para garantir que a data de inicio e fim sejam atualizados para o valor correto ao serem exportados.

- Realizado ajuste para que, ao utilizar um webservice para popular um campo zoom, seja possível inserir mais de um valor nesse campo através do método updateCardData.

- Realizada correção na tela de modelagem do formulário, para que ao concluir uma integração, essa tela não seja bloqueada e a integração possa ser confirmada com sucesso.

- Corrigida inconsistência no filtro do formulário, que impossibilitava a atualização do contador de paginação dos registros de um formulário.

- Realizada correção na atualização 1.6.5 para sanar inconsistência com imagens nos formulários utilizando banco de dados SQL Server.

- Efetuada correção para bloquear a inclusão de dataset via webservice SOAP, quando a empresa informada nos dados do dataset não for localizada.

- Correção realizada para recuperar na base de dados o host para a comunicação correta entre os serviços.


<!-- anchors: Atualizações(1.6.5)-CiclodeatualizaçãoFluig, Atualizações(1.6.5)-??de??de2021, Atualizações(1.6.5)-Correções, Atualizações(1.6.5)-07deMaiode2025, Atualizações(1.6.5)-25deAgostode2021, Atualizações(1.6.5)-Correção, Atualizações(1.6.5)-21deMaiode2021, Atualizações(1.6.5)-Correções.1, Atualizações(1.6.5)-08deMarçode2021, Atualizações(1.6.5)-10deFevereirode2021, Atualizações(1.6.5)-Correções.2, Atualizações(1.6.5)-30deDezembrode2020, Atualizações(1.6.5)-Correções.3, Atualizações(1.6.5)-22deDezembrode2020, Atualizações(1.6.5)-Correções.4, Atualizações(1.6.5)-11deNovembrode2020, Atualizações(1.6.5)-Correções.5, Atualizações(1.6.5)-29deOutubrode2020, Atualizações(1.6.5)-Correções.6, Atualizações(1.6.5)-15deSetembrode2020, Atualizações(1.6.5)-Correções.7, Atualizações(1.6.5)-28deAgostode2020, Atualizações(1.6.5)-Correções.8, Atualizações(1.6.5)-19deAgostode2020, Atualizações(1.6.5)-Correções.9, Atualizações(1.6.5)-11deAgostode2020, Atualizações(1.6.5)-Correções.10, Atualizações(1.6.5)-30deJulhode2020, Atualizações(1.6.5)-Correções.11, Atualizações(1.6.5)-28deJulhode2020, Atualizações(1.6.5)-Correções.12, Atualizações(1.6.5)-30deJunhode2020, Atualizações(1.6.5)-Correção.1, Atualizações(1.6.5)-23deJunhode2020, Atualizações(1.6.5)-Correções.13, Atualizações(1.6.5)-16deJunhode2020, Atualizações(1.6.5)-Correções.14, Atualizações(1.6.5)-09deJunhode2020, Atualizações(1.6.5)-Correções.15, Atualizações(1.6.5)-02deJunhode2020, Atualizações(1.6.5)-Correções.16, Atualizações(1.6.5)-26deMaiode2020, Atualizações(1.6.5)-Correções.17, Atualizações(1.6.5)-19deMaiode2020, Atualizações(1.6.5)-Correções.18, Atualizações(1.6.5)-12deMaiode2020, Atualizações(1.6.5)-Correções.19, Atualizações(1.6.5)-05deMaiode2020, Atualizações(1.6.5)-Correções.20, Atualizações(1.6.5)-28deAbrilde2020, Atualizações(1.6.5)-Correções.21, Atualizações(1.6.5)-22deAbrilde2020, Atualizações(1.6.5)-Correções.22, Atualizações(1.6.5)-14deAbrilde2020, Atualizações(1.6.5)-Correções.23, Atualizações(1.6.5)-07deAbrilde2020, Atualizações(1.6.5)-Correções.24, Atualizações(1.6.5)-25deMarçode2020, Atualizações(1.6.5)-Correções.25, Atualizações(1.6.5)-18deMarçode2020, Atualizações(1.6.5)-Correções.26, Atualizações(1.6.5)-10deMarçode2020, Atualizações(1.6.5)-Correções.27, Atualizações(1.6.5)-26deFevereirode2020, Atualizações(1.6.5)-Correções.28, Atualizações(1.6.5)-18deFevereirode2020, Atualizações(1.6.5)-Correções.29, Atualizações(1.6.5)-11deFevereirode2020, Atualizações(1.6.5)-Correções.30, Atualizações(1.6.5)-04deFevereirode2020, Atualizações(1.6.5)-Correções.31, Atualizações(1.6.5)-28deJaneirode2020, Atualizações(1.6.5)-Correções.32, Atualizações(1.6.5)-21deJaneirode2020, Atualizações(1.6.5)-Correções.33, Atualizações(1.6.5)-14deJaneirode2020, Atualizações(1.6.5)-Correções.34, Atualizações(1.6.5)-07deJaneirode2020, Atualizações(1.6.5)-Correções.35, Atualizações(1.6.5)-17deDezembrode2019, Atualizações(1.6.5)-Correções.36, Atualizações(1.6.5)-10deDezembrode2019, Atualizações(1.6.5)-Correções.37, Atualizações(1.6.5)-03deDezembrode2019, Atualizações(1.6.5)-Correções.38, Atualizações(1.6.5)-28deNovembrode2019, Atualizações(1.6.5)-Correções.39, Atualizações(1.6.5)-22deNovembrode2019, Atualizações(1.6.5)-19deNovembrode2019, Atualizações(1.6.5)-Correções.40, Atualizações(1.6.5)-12deNovembrode2019, Atualizações(1.6.5)-Correções.41, Atualizações(1.6.5)-05deNovembrode2019, Atualizações(1.6.5)-Correções.42, Atualizações(1.6.5)-29deOutubrode2019, Atualizações(1.6.5)-Correções.43, Atualizações(1.6.5)-22deOutubrode2019, Atualizações(1.6.5)-Correções.44, Atualizações(1.6.5)-15deOutubrode2019, Atualizações(1.6.5)-Correções.45, Atualizações(1.6.5)-08deOutubrode2019, Atualizações(1.6.5)-Correções.46, Atualizações(1.6.5)-01deOutubrode2019, Atualizações(1.6.5)-Correções.47, Atualizações(1.6.5)-24deSetembrode2019, Atualizações(1.6.5)-Correções.48, Atualizações(1.6.5)-17deSetembrode2019, Atualizações(1.6.5)-Correções.49, Atualizações(1.6.5)-11deSetembrode2019, Atualizações(1.6.5)-Correções.50, Atualizações(1.6.5)-10deSetembrode2019, Atualizações(1.6.5)-Correções.51, Atualizações(1.6.5)-04deSetembrode2019, Atualizações(1.6.5)-Correção.2, Atualizações(1.6.5)-03deSetembrode2019, Atualizações(1.6.5)-Correções.52, Atualizações(1.6.5)-28deAgostode2019, Atualizações(1.6.5)-Correções.53, Atualizações(1.6.5)-27deAgostode2019, Atualizações(1.6.5)-Correções.54, Atualizações(1.6.5)-20deAgostode2019, Atualizações(1.6.5)-Correções.55, Atualizações(1.6.5)-13deAgostode2019, forms, Atualizações(1.6.5)-Correções.56, Atualizações(1.6.5)-06deAgostode2019, Atualizações(1.6.5)-Correções.57, Atualizações(1.6.5)-30deJulhode2019, borda, Atualizações(1.6.5)-Correções.58, Atualizações(1.6.5)-23deJulhode2019, Atualizações(1.6.5)-Correções.59, Atualizações(1.6.5)-16deJulhode2019, Atualizações(1.6.5)-Correções.60, Atualizações(1.6.5)-09deJulhode2019, Atualizações(1.6.5)-Correções.61, Atualizações(1.6.5)-02deJulhode2019, Atualizações(1.6.5)-Correções.62, Atualizações(1.6.5)-25deJunhode2019, Atualizações(1.6.5)-Correções.63, Atualizações(1.6.5)-17deJunhode2019, Atualizações(1.6.5)-Correções.64, Atualizações(1.6.5)-11deJunhode2019, Atualizações(1.6.5)-Correções.65, Atualizações(1.6.5)-04deJunhode2019, Atualizações(1.6.5)-Correções.66, Atualizações(1.6.5)-28deMaiode2019, Atualizações(1.6.5)-Correções.67, Atualizações(1.6.5)-21deMaiode2019, Atualizações(1.6.5)-Correções.68, Atualizações(1.6.5)-14deMaiode2019, Atualizações(1.6.5)-Correções.69, Atualizações(1.6.5)-07deMaiode2019, Atualizações(1.6.5)-Correções.70, Atualizações(1.6.5)-30deAbrilde2019, Atualizações(1.6.5)-Documentos, Atualizações(1.6.5)-Correções.71, Atualizações(1.6.5)-23deAbrilde2019, Atualizações(1.6.5)-Correções.72, Atualizações(1.6.5)-16deAbrilde2019, Atualizações(1.6.5)-Correções.73, Atualizações(1.6.5)-10deAbrilde2019, Atualizações(1.6.5)-Portal, forms, Atualizações(1.6.5)-Correções.74, Atualizações(1.6.5)-26deMarçode2019, Atualizações(1.6.5)-Portal.1, Atualizações(1.6.5)-Correções.75, Atualizações(1.6.5)-14deMarçode2019, Atualizações(1.6.5)-Correções.76, Atualizações(1.6.5)-06deMarçode2019, Atualizações(1.6.5)-Portal.2, ícones, Atualizações(1.6.5)-LMS, Atualizações(1.6.5)-Correções.77, Atualizações(1.6.5)-27deFevereirode2019, Atualizações(1.6.5)-Correções.78, Atualizações(1.6.5)-19deFevereirode2019, Atualizações(1.6.5)-Correções.79, Atualizações(1.6.5)-12deFevereirode2019, Atualizações(1.6.5)-Correções.80, Atualizações(1.6.5)-06deFevereirode2019, Atualizações(1.6.5)-Correções.81, Atualizações(1.6.5)-29deJaneirode2019, Atualizações(1.6.5)-Correções.82, Atualizações(1.6.5)-22deJaneirode2019, Atualizações(1.6.5)-Correções.83, Atualizações(1.6.5)-15deJaneirode2019, Atualizações(1.6.5)-Correções.84, Atualizações(1.6.5)-08deJaneirode2019, Atualizações(1.6.5)-Correções.85, Atualizações(1.6.5)-02deJaneirode2019, Atualizações(1.6.5)-Correções.86, Atualizações(1.6.5)-26deDezembrode2018, Atualizações(1.6.5)-Correções.87, Atualizações(1.6.5)-18deDezembrode2018, Atualizações(1.6.5)-Correções.88 -->
