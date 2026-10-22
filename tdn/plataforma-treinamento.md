---
title: "Plataforma ❙ Treinamento"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=233766426"
scraped_at: "2026-03-09T04:17:37.671Z"
depth: 3
anchors: 16
child_links: 73
---

# Plataforma ❙ Treinamento

Importante!

A partir de **Abril de 2025**, o [suporte ](https://totvscst.zendesk.com/hc/pt-br/#home)ofertado ao LMS será descontinuado. Não havendo mais evoluções após este período. O LMS não estará mais disponível para acesso nos ambientes a partir da **próxima releas**e do TOTVS Fluig Plataforma, prevista para o primeiro semestre de 2025.

# Índice

## Falando de treinamento...

Treinamentos são itens do catálogo que podem conter diversos tipos de conteúdo, organizados em sequência, formando a estrutura de auto aprendizado sobre um determinado tema. Esses conteúdos podem ser textos, imagens, vídeos, documentos, PDFs, apresentações, SCORM, dentre outros.

Os treinamentos podem possuir outros treinamentos, trilhas e disciplinas como pré-requisitos e, nesse caso, não é possível efetuar a matrícula para ele até que todos os seus pré-requisitos tenham sido concluídos com êxito.

É possível definir um pré-teste para o treinamento e indicar se ele será ou não um critério de aprovação, ou seja, se o aluno pode ser aprovado no treinamento executando apenas o pré-teste, sem precisar assistir todo o conteúdo.

Quando não é definido o pré-teste como critério de aprovação, a conclusão, com ou sem êxito é determinada pela nota obtida no pós-teste, que dever ser igual ou superior à pontuação exigida para aprovação. A aprovação em um treinamento também pode ser determinada por um conteúdo SCORM, quando for definido em sua configuração que ele deve ser usado como critério de aprovação. Apenas um conteúdo SCORM pode ser configurado como critério de aprovação.

Um treinamento pode ser vinculado a uma turma como um item de tópico, prevalecendo, nesse caso, as parametrizações definidas na turma.

Os treinamentos podem conter ainda avaliação de reação – como pesquisa de satisfação – e um certificado, que será emitido para o aluno quando ele concluir o curso com êxito.

![](/download/attachments/233766426/treinamento.PNG?version=3&modificationDate=1600200602057&api=v2)

### Criar treinamento

---

**01.** Depois de acionar **Novo**, **Treinamento **no local onde o treinamento será criado, acionar **Adicionar** – localizado no canto inferior esquerdo do quadro da imagem – para inserir uma imagem para o treinamento.

**02.** Localizar e selecionar a imagem desejada.

O tamanho máximo permitido para a imagem é 4MB.

**03.** Na janela exibida, definir o corte para a imagem*.*

**04.** Acionar **Salvar**.

Para remover a imagem inserida, basta acionar o ícone **Remover** – localizado no canto inferior direito do quadro da imagem.

**05.** Inserir as informações solicitadas para o treinamento.

As informações solicitadas são:

**Sigla**
Sigla de identificação do treinamento.

**Nome**
Nome de identificação do treinamento.

**Situação**
Situação atual do treinamento. As opções disponíveis são:

- **Disponível**: quando selecionada, determina que o treinamento está disponível no catálogo, sendo possível efetuar matrícula e associá-lo a itens de tópicos em turmas;
- **Obsoleto**: quando selecionada, determina que o treinamento está em processo de descontinuação, porém, ainda é permitido efetuar matrículas e associá-lo a itens de tópicos em turmas;
- **Em encerramento**: quando selecionada, determina que não é possível efetuar matrícula no treinamento e nem associá-lo a itens de tópicos em turmas. As matrículas que estão ativas no momento em que o treinamento recebe esse *status* permanecem ativas e o acesso do aluno a ele ocorre normalmente. Para os demais usuários que possuem, pelo menos, permissão de leitura no treinamento, ele somente será exibido no catálogo se a opção **Permite visualizar treinamentos e trilhas em encerramento** das [Configurações de trilhas e treinamentos](/pages/viewpage.action?pageId=234458366) estiver definida com **Sim**;
- **Arquivado**: quando selecionada, determina que não é possível solicitar matrícula no treinamento. Para os alunos que já estão matriculados, o treinamento continua sendo exibido e o aluno continua matriculado, porém, não pode mais acessar o seu conteúdo. Para os demais usuários que possuem, pelo menos, permissão de leitura no treinamento, ele somente será exibido no catálogo se a opção **Permite visualizar treinamentos e trilhas arquivados**das [Configurações de trilhas e treinamentos](/pages/viewpage.action?pageId=234458366) estiver definida com **Sim**.

**Autor**Nome do autor do treinamento.

**Custo**
Custo de matrícula do treinamento que será descontado da conta à qual o aluno está relacionado no ato da matrícula.

**Carga horária (em minutos)**
Duração do treinamento em minutos.

**Tema**
Tema ou área do conhecimento à qual o treinamento pertence.

**Objetivo**Descrição dos objetivos do treinamento.

**06.** Acionar a aba **Conteúdos e avaliações**.

**07.** Em Pré-teste, acionar o ícone **Buscar** para relacionar um pré-teste ao treinamento.

**08.** Na janela exibida, localizar e selecionar a avaliação que será o pré-teste do treinamento.

É possível localizar a avaliação desejada a partir do campo Buscar – localizado no canto superior direito da janela – ou a partir da paginação das avaliações – setas localizadas no canto inferior direito.

**09.** Acionar **Adicionar**.

Para remover a avaliação inserida como pré-teste basta acionar **Remover**, localizado ao lado do ícone de busca.

**10.** Definir as demais informações solicitadas para o pré-teste.

As informações solicitadas são:

**Permitir a continuidade do treinamento mesmo que o pré-teste não tenha sido corrigido**
Quando assinalado, determina que o aluno poderá assistir o treinamento – visualizar seus conteúdos, responder suas avaliações e finalizá-lo – mesmo quando o pré-teste ficar pendente de correção por possuir questões dissertativas. Ao assinalar essa opção, as opções "Aprovar no pré-teste" e "Reprovar no pré-teste" são desabilitadas.

**Aprovar no pré-teste**
Quando assinalado, determina que o aluno pode ser aprovado diretamente no pré-teste, ou seja, se ele atingir a pontuação definida para aprovação, ele será considerado aprovado sem precisar assistir os conteúdos do treinamento.

**Pontuação de aprovação no pré-teste**
Pontuação exigida para que o aluno seja considerado aprovado no treinamento executando apenas o pré-teste.

**Reprovar no pré-teste**
Quando assinalado, determina que o aluno pode ser reprovado diretamente no pré-teste, ou seja, se ele atingir uma pontuação menor que a definida para reprovação, ele é automaticamente reprovado na trilha, não podendo assistir aos seus conteúdos sem antes obter o conhecimento necessário para cursar esse treinamento.

**Pontuação de reprovação no pré-teste**
Pontuação que o aluno precisa superar para não ser considerado reprovado no treinamento executando apenas o pré-teste.

**Pré-teste é obrigatório**
Quando assinalado, determina que a execução do pré-teste é obrigatória para prosseguir no treinamento. Quando não é definido que o pré-teste é obrigatório, o aluno pode finalizar o treinamento mesmo quando o pré-teste ou o pós-teste está pendente de correção por possuir questões dissertativas. Nesse caso, o treinamento é exibido no histórico do aluno com o *status* "Aguardando correção". Assim que os testes forem corrigidos, o *status* é alterado e as notas são exibidas no histórico. Porém, os itens relacionados ao treinamento, como habilidades, certificados ou que tenha esse treinamento como pré-requisito, somente serão liberados quando os testes forem corrigidos. ****

**11.** Em Conteúdos, acionar **Novo conteúdo**para inserir conteúdos no treinamento.

**12.** Na janela exibida, localizar e selecionar o conteúdo que comporá o treinamento.

É possível localizar o conteúdo desejado a partir do campo Buscar – localizado no canto superior direito da janela – ou a partir da paginação dos conteúdos – setas localizadas no canto inferior direito.

Também é possível selecionar mais de um conteúdo de uma única vez.

**13.** Acionar **Adicionar**.

**14.** Ao finalizar a inclusão dos conteúdos desejados, acionar **Fechar**.

Para remover um conteúdo incluído para o treinamento, basta acionar o ícone **Remover**, localizado no lado direito da linha correspondente ao conteúdo.

**15.** Para visualizar o conteúdo inserido, basta acionar o ícone **Pré-visualizar**, localizado ao lado da coluna Tipo do conteúdo.

**16.** Acionar o ícone **Configurações do conteúdo**, localizado ao lado de Pré-visualizar.****

**17.** Na janela exibida, definir as características para o conteúdo dentro do treinamento.

Essa configuração pode ser efetuada para cada conteúdo incluído no treinamento.

**Conteúdo obrigatório**
Quando assinalado, determina que o conteúdo é de execução obrigatória.

**Ordem de exibição**
Ordem de exibição do conteúdo dentro do treinamento.

**Modo de visualização**
Modo como o conteúdo SCORM será visualizado pelo aluno. Esse campo somente é exibido quando o conteúdo é do tipo SCORM. As opções disponíveis são:

- Somente visualizar;
- Visualizar e pré-visualizar;
- Visualizar e rever;
- Todos.

**Usar este SCORM como critério de aprovação**
Quando assinalado, determina que o aluno pode ser aprovado diretamente após executar o conteúdo SCORM, ou seja, se ele atingir a pontuação definida para aprovação, ele será considerado aprovado sem precisar assistir os demais conteúdos do treinamento. Esse campo somente é exibido quando o conteúdo é do tipo SCORM.

**Usar a pontuação para aprovação do treinamento como pontuação para aprovação no SCORM**
Quando assinalado, determina que a pontuação necessária para aprovação no conteúdo SCORM é a mesma necessária para aprovação no treinamento. Esse campo somente é exibido quando o conteúdo é do tipo SCORM.

**Usar esse tempo como tempo mínimo de execução para o pacote**
Tempo mínimo de visualização do conteúdo SCORM. Se o conteúdo for finalizado antes de atingir o tempo mínimo, ele será considerado como executado e o aluno não receberá a nota específica desse conteúdo, caso exista. Deve seguir o formato 9999:59:59. Esse campo somente é exibido quando o conteúdo é do tipo SCORM.

**Usar esse tempo como tempo máximo de execução para o pacote**
Tempo máximo em que será permitida a visualização do conteúdo SCORM. Deve seguir o formato 9999:59:59. Esse campo somente é exibido quando o conteúdo é do tipo SCORM.

**Ação ao exceder o tempo**
Ação que será realizada quando a visualização do conteúdo SCORM exceder o tempo máximo determinado. Esse campo somente é exibido quando o conteúdo é do tipo SCORM. As opções disponíveis são:

- Finalizar e enviar mensagem;
- Finalizar e não enviar mensagem;
- Continuar e enviar mensagem;
- Continuar e não enviar mensagem. 

**Controle de exibição**
Opções de exibição do conteúdo SCORM dentro do treinamento. Esse campo somente é exibido quando o conteúdo é do tipo SCORM. As opções disponíveis são:

- **Exibir árvore SCORM**: quando assinalada, determina que será exibida a estrutura de itens no canto superior esquerdo da janela durante a visualização do conteúdo SCORM, que permite expandir e contrair os itens que o compõem.
- **Exibir navegador SCORM**: quando assinalada, determina que serão exibidos os botões **Anterior** e **Próximo **no canto inferior direito, para avançar ou retornar no conteúdo SCORM quando ele permite.
- **Exibir status de execução (SCORM lesson status)**: quando assinalada, determina que será exibido o *status* de execução do conteúdo SCORM – tais como navegado ou completo – no canto superior direito da janela durante a sua visualização.
- **Exibir tempo máximo para execução (SCORM max time allowed)**: quando assinalada, determina que será exibido o tempo máximo permitido para a execução do conteúdo SCORM no canto superior direito da janela durante a sua visualização. Esse tempo é definido no campo Usar esse tempo como tempo máximo de execução para o pacote. Caso nenhum tempo tenha sido definido e essa opção esteja assinalada, o tempo máximo será exibido como zero (0000:00:00).
- **Exibir percentual de progresso da execução (SCORM score raw)**: quando assinalada, determina que será exibido o percentual de progresso da execução do conteúdo SCORM no canto superior direito da janela durante a sua visualização.
- **Exibir tempo decorrido durante a execução (SCORM total time)**: quando assinalada, determina que será exibida uma contagem de tempo durante o qual o colaborador permanece visualizando o conteúdo SCORM. Caso a janela seja fechada e aberta posteriormente, a nova contagem será somada à contagem anterior.EXEMPLO:Um colaborador permaneceu visualizando o conteúdo por 10 minutos e, por algum motivo, fechou a janela. Ao retornar para o conteúdo, a contagem iniciará em 10 minutos e o novo tempo que ele passar visualizando o conteúdo será somado a esses 10 minutos.

**18.** Acionar **Salvar**.

**19.** Em Pós-teste, acionar o ícone **Buscar** para relacionar um pós-teste ao treinamento.

**20.** Na janela exibida, localizar e selecionar a avaliação que será o pós-teste do treinamento.

É possível localizar a avaliação desejada a partir do campo Buscar – localizado no canto superior direito da janela – ou a partir da paginação das avaliações – setas localizadas no canto inferior direito.

**21.** Acionar **Adicionar**.

Para remover a avaliação inserida como pós-teste basta acionar **Remover**, localizado ao lado do ícone de busca.

**22.** Inserir a pontuação exigida para aprovação no pós-teste.

Essa é a pontuação mínima que o aluno precisa atingir para ser aprovado no pós-teste. Ela deve estar entre 0 e 100 e separada por ponto se for decimal.
**Exemplo**: 50.5.
Esse campo somente é exibido depois de selecionar um pós-teste.

**23.** Em Avaliação de reação, acionar o ícone **Buscar** para relacionar uma avaliação de reação ao treinamento.

**24.** Na janela exibida, localizar e selecionar a avaliação que será a avaliação de reação do treinamento.

É possível localizar a avaliação desejada a partir do campo Buscar – localizado no canto superior direito da janela – ou a partir da paginação das avaliações – setas localizadas no canto inferior direito.

**25.** Acionar **Adicionar**.

Para remover a avaliação inserida como avaliação de reação basta acionar **Remover**, localizado ao lado do ícone de busca.

**26.** Acionar a aba **Informações adicionais**.

**27.** Selecionar o certificado que será emitido para o aluno quando ele finalizar o treinamento com êxito.

**28.** Em Habilidades, acionar **Adicionar** **habilidade** para relacionar habilidades ao treinamento, se desejado.

**29.** Na janela exibida, localizar e selecionar a habilidade que será adquirida pelo aluno ao concluir o treinamento com êxito.

É possível localizar a habilidade desejada a partir do campo Buscar – localizado no canto superior direito da janela – ou a partir da paginação das habilidades – setas localizadas no canto inferior direito.

Também é possível selecionar mais de uma habilidade de uma única vez.

**30.** Acionar **Adicionar**.

**31.** Ao finalizar a inclusão das habilidades desejadas, acionar **Fechar**.

Para remover uma habilidade incluída na trilha, basta acionar o ícone **Remover**, localizado no lado direito da linha correspondente à habilidade.

**32.** Nas colunas Mínimo de pontos (0) e Máximo de pontos (100) inserir os valores correspondentes de pontos da habilidade que o aluno pode conquistar ao concluir o treinamento com êxito.

Os pontos devem ser de 0 a 100.

Esses valores definem quantos pontos o aluno receberá nesta habilidade baseado na diferença proporcional entre a sua nota final e a nota mínima para aprovação no treinamento. Detalhes sobre o cálculo e exemplos podem ser conferidos em [Habilidades](/pages/viewpage.action?pageId=233766527).

**33.** Inserir o conteúdo programático do treinamento e qual é o seu público alvo.

**34.** Em Pré-requisitos, acionar **Novo pré-requisito**para definir pré-requisitos para o treinamento, se desejado.

**35.** Na janela exibida, localizar e selecionar o item que será pré-requisito para que esse treinamento seja cursado.

É possível localizar o item desejado a partir do campo Buscar – localizado no canto superior direito da janela – ou a partir da paginação dos itens – setas localizadas no canto inferior direito.

Também é possível selecionar mais de um item de uma única vez.

**36.** Acionar **Adicionar**.

**37.** Ao finalizar a inclusão dos pré-requisitos desejados, acionar **Fechar**.

Para remover um pré-requisito incluído no treinamento, basta acionar o ícone **Remover**, localizado no lado direito da linha correspondente ao pré-requisito.

**38.** Acionar a aba **Segurança**. 

**39.** Definir se o treinamento deve herdar as permissões de sua pasta pai.

As opções disponíveis são:

**Herda permissões**
Quando selecionado, determina que as permissões e restrições atribuídas ao treinamento serão as mesmas de sua pasta pai. Mesmo quando o treinamento herda as permissões, é possível definir outras permissões ou restrições específicas para ele, além das já herdadas.

**Não herda permissões**
Quando selecionado, determina que as permissões e restrições da pasta pai não serão atribuídas ao treinamento.

**Utiliza padrão**
Quando selecionado, determina que será considerado o que foi definido na opção "Herdar automaticamente permissões de trilhas e treinamentos" das [Configurações de trilhas e treinamentos](/pages/viewpage.action?pageId=234458366) do Painel de Controle.

**40.** Em Permissões, acionar **Adicionar** para definir permissões de acesso ao treinamento, se desejado.

**41.** Na janela exibida, localizar e selecionar o usuário, o grupo de usuários, a turma ou a disciplina para a qual se deseja atribuir permissão.

É possível localizar o item desejado a partir do campo Buscar – localizado no canto superior direito da janela – ou a partir da paginação dos itens – setas localizadas no canto inferior direito.

Também é possível selecionar mais de um item de uma única vez.

**42.** Acionar **Adicionar**.

**43.** Na coluna Nível – localizada ao lado do item inserido – selecionar a opção que determina o nível de permissão que será atribuído a ele.

As opções disponíveis são:

- Leitura;
- Execução;
- Escrita;
- Modificação;
- Exclusão;
- Completo.

Informações detalhadas sobre cada opção de permissão podem ser obtidas em [Permissões e restrições no catálogo](/pages/viewpage.action?pageId=235575851).

Para editar a permissão de um item inserido, basta selecionar a nova opção que será atribuída a ele na coluna Nível.

Para remover um item inserido, basta acionar o ícone **Remover** – localizado na linha correspondente ao item e ao lado direito da coluna Nível.

**44.** Se desejado, em Restrições, acionar **Adicionar** para definir restrições de acesso ao treinamento.

**45.** Na janela exibida, localizar e selecionar o usuário, o grupo de usuários, a turma ou a disciplina para a qual se deseja atribuir restrição.

É possível localizar o item desejado a partir do campo Buscar – localizado no canto superior direito da janela – ou a partir da paginação dos itens – setas localizadas no canto inferior direito.

Também é possível selecionar mais de um item de uma única vez.

**46.** Acionar **Adicionar**.

**47.** Na coluna Nível – localizada ao lado do item inserido – selecionar a opção que determina o nível de restrição que será atribuído a ele.

As opções disponíveis são:

- Leitura;
- Execução;
- Escrita;
- Modificação;
- Exclusão;
- Completo.

Informações detalhadas sobre cada opção de restrição podem ser obtidas em [Permissões e restrições em catálogos](/pages/viewpage.action?pageId=235575851).

Para editar a restrição de um item inserido, basta selecionar a nova opção que será atribuída a ele na coluna Nível.

Para remover um item inserido, basta acionar o ícone **Remover** – localizado na linha correspondente ao item e ao lado direito da coluna Nível.

**48.**Acionar **Salvar** para confirmar a criação do treinamento; ou **Cancelar** para desistir da ação, se desejado.

### Editar treinamento

---

Essa ação é permitida para usuários que possuam, pelo menos, permissão de modificação no treinamento. 

**01.** No catálogo, acessar o local onde o treinamento se encontra.

**02.** Acionar o ícone **Editar**, localizado ao lado direito do nome do treinamento.

Também é possível acionar a opção **Editar** depois de acessar o treinamento, que estará localizado no canto superior direito da janela. 

**03.** Alterar as informações desejadas. Detalhes sobre os campos exibidos podem ser obtidos no caminho básico.

**04.** Acionar **Salvar**; ou **Cancelar** para descartar as alterações, se desejado.

### Copiar treinamento

---

É necessário ter, pelo menos, permissão de escrita na pasta de destino para efetuar essa ação. 

**01.** No catálogo, acessar o local onde o treinamento se encontra.

**02.** Acionar o ícone **Copiar**, localizado ao lado direito do nome do treinamento.

Também é possível acionar a opção **Copiar**depois de acessar o treinamento, acionando a seta localizada ao lado de **Editar**, no canto superior direito da janela. Para acessar um treinamento, basta acionar o seu nome. 

**03.** Na janela exibida, inserir o nome da pasta para a qual o treinamento será copiado no campo Buscar.

**04.** Na listagem exibida, selecionar a pasta para a qual o treinamento será copiado.

**05.** Acionar **Copiar**.

Ao acionar essa opção, a cópia do treinamento é criada na pasta definida, desde que existam as permissões necessárias para efetuar essa ação.

### Mover treinamento

---

É necessário ter, pelo menos, permissão de exclusão na pasta onde se encontra o treinamento e de modificação na pasta de destino para efetuar essa ação. 

**01.** No catálogo, acessar o local onde o treinamento se encontra.

**02.** Acionar o ícone **Mover**, localizado ao lado direito do nome do treinamento.

Também é possível acionar a opção **Mover**depois de acessar o treinamento, acionando a seta localizada ao lado de **Editar**, no canto superior direito da janela.

**03.** Na janela exibida, inserir o nome da pasta para a qual o treinamento será movido no campo Buscar.

**04.** Na listagem exibida, selecionar a pasta para a qual o treinamento será movido.

**05.** Acionar **Mover**.

Ao acionar essa opção, o treinamento é movido para a pasta definida, desde que existam as permissões necessárias para efetuar essa ação. 

### Remover treinamento

---

É necessário ter, pelo menos, permissão de exclusão na pasta onde se encontra o treinamento para efetuar essa ação. 

**01.** No catálogo, acessar o local onde o treinamento se encontra.

**02.** Acionar o ícone **Remover**, localizado ao lado direito do nome do treinamento.

Também é possível acionar a opção **Remover**depois de acessar o treinamento, acionando a seta localizada ao lado de **Editar**, no canto superior direito da janela. 

**03.** Na mensagem exibida, acionar **Sim** para confirmar a exclusão do treinamento; ou **Não** para desistir da ação, se desejado.

### Visualizar informações e conteúdo do treinamento

---

Para visualizar o conteúdo de um treinamento o usuário precisa ter, pelo menos, permissão de leitura definida para ele.

**01.** No catálogo, acessar o treinamento do qual se deseja visualizar as informações e seu conteúdo. É possível acessar o treinamento localizando-o a partir da navegação pelo catálogo ou diretamente pela sua URL, informando-a no navegador.

**02.** Na janela exibida, visualizar as informações gerais e o conteúdo que compõe o treinamento.

**03.** Acionar o ícone localizado ao lado do objetivo do treinamento para visualizar suas informações adicionais, que são o conteúdo programático e o público-alvo. Depois de visualizar, acionar **Fechar** para retornar à janela principal.

**04.** Acionar **Pré-requisitos do treinamento** e visualizar os itens que precisam ser concluídos para que seja possível iniciar o treinamento. Depois de visualizar, acionar **Fechar** para retornar à janela principal.

Essa opção somente é exibida quando o treinamento possui pré-requisitos.

**05. **Acionar **Habilidades conquistadas** **com esse treinamento** e visualizar quais são as habilidades que o aluno obterá ao concluir o treinamento com êxito.

Essa opção somente é exibida quando o treinamento possui habilidades relacionadas a ele.

**06.** Para pré-visualizar um conteúdo do treinamento, acionar o ícone **Pré-visualizar**, localizado ao lado direito do nome do conteúdo.

Para pré-visualizar um conteúdo é necessário ter, pelo menos, permissão de modificação no treinamento.

### Localizar conteúdo do treinamento

---

Essa busca permite filtrar os conteúdos que existem dentro do treinamento. 

**01.** No catálogo, acessar o treinamento do qual se deseja encontrar um conteúdo. É possível acessar o treinamento localizando-o a partir da navegação pelo catálogo ou diretamente pela sua URL, informando-a no navegador.

**02.** Inserir o nome do conteúdo desejado no campo Buscar, localizado no canto superior direito.

**03.** Visualizar o resultado da busca realizada.

### Matricular usuários em treinamento

---

Para que um usuário possa matricular outros usuários, é necessário que, nas [permissões](/pages/viewpage.action?pageId=234455792) do Painel de Controle – recurso **Aprendizado - Matrículas** – a****opção **Matricular todos usuários**esteja ativa.

**01.** No catálogo, acessar o treinamento no qual os usuários serão matriculados. É possível acessar o treinamento localizando-o a partir da navegação pelo catálogo ou diretamente pela sua URL, informando-a no navegador.

**02.** Acionar **Matricular usuários**, localizado no canto superior direito.

**03.** Na mensagem exibida, acionar **Sim **para confirmar.

Ao confirmar, é exibida a janela que permite efetuar a matrícula de usuários. Mais informações sobre as ações disponíveis podem ser obtidas em [Matricular](/pages/viewpage.action?pageId=233766545).

### Matricular-se em treinamento

---

Para que um usuário possa se matricular, é necessário que ele possua, pelo menos, permissão de execução no treinamento.

**01.** No catálogo, acessar o treinamento no qual deseja matricular-se. É possível acessar o treinamento localizando-o a partir da navegação pelo catálogo ou diretamente pela sua URL, informando-a no navegador.

**02.** Acionar **Requisitar matrícula**, localizado no canto superior direito.

Quando o usuário possui permissão para matricular outros usuários, a opção exibida será **Matricular usuários**. Nesse caso, é necessário acionar a seta ao lado para visualizar a opção **Requisitar matrícula**.

Ao acionar a opção **Requisitar matrícula**, se o treinamento não possui pré-requisitos ou possui mas eles já foram concluídos pelo aluno, a requisição de matrícula é automaticamente aprovada ou enviada para aprovação do responsável quando a conta a qual o usuário está vinculado exigir aprovação de requisição de matrícula. Se existir pré-requisitos não finalizados com êxito pelo aluno, eles serão exibidos e a matrícula não será requisitada, pois será necessário finalizá-los primeiro.

### Cancelar requisição de matrícula em treinamento

---

Para que um usuário possa cancelar sua requisição de matrícula, é necessário que ele possua permissão para cancelar matrícula em treinamentos definida nas [permissões](/pages/viewpage.action?pageId=234455792) do Painel de Controle – recurso: **Aprendizado - Matrículas**; opção: **Cancelar matrícula em treinamento/trilhas** ativa. 

**01.** No catálogo, acessar o treinamento do qual a requisição de matrícula será cancelada. É possível acessar o treinamento localizando-o a partir da navegação pelo catálogo ou diretamente pela sua URL, informando-a no navegador.

**02.** Acionar **Cancelar requisição de matrícula**, localizado no canto superior direito.

Quando o usuário possui permissão para matricular outros usuários, a opção exibida será **Matricular usuários**. Nesse caso, é necessário acionar a seta ao lado para visualizar a opção **Cancelar requisição de matrícula**. 

**03.** Na mensagem exibida, acionar **Sim** para confirmar o cancelamento da requisição de matrícula; ou **Não** para desistir da ação se desejado.

Ao confirmar, a requisição de matrícula é cancelada.

### Cancelar matrícula em treinamento

---

Para que um usuário possa cancelar sua matrícula, é necessário que ele possua permissão para cancelar matrícula em treinamentos definida nas [permissões](/pages/viewpage.action?pageId=234455792) do Painel de Controle – recurso: **Aprendizado - Matrículas**; opção: **Cancelar matrícula em treinamento/trilhas** ativa.

**01.** No catálogo, acessar o treinamento do qual a matrícula será cancelada. É possível acessar o treinamento localizando-o a partir da navegação pelo catálogo ou diretamente pela sua URL, informando-a no navegador.

**02.** Acionar **Cancelar matrícula**, localizado no canto superior direito.

Quando o usuário possui permissão para matricular outros usuários, a opção exibida será **Matricular usuários**. Nesse caso, é necessário acionar a seta ao lado para visualizar a opção **Cancelar matrícula**. 

**03.** Na mensagem exibida, acionar **Sim** para confirmar o cancelamento da matrícula; ou **Não** para desistir da ação se desejado.

Ao confirmar, a matrícula é cancelada e o usuário perde o acesso ao treinamento.

Essa opção também é exibida no plano de aprendizado do aluno. Mais informações sobre como cancelar a matrícula a partir do plano de aprendizado podem ser obtidas em [Meu aprendizado](/pages/viewpage.action?pageId=233765875).

### Adicionar treinamento à lista de desejos

---

**01.** No catálogo, acessar o treinamento que se deseja adicionar à lista de desejos. É possível acessar o treinamento localizando-o a partir da navegação pelo catálogo ou diretamente pela sua URL, informando-a no navegador.

**02.** Acionar a seta localizada ao lado de **Requisitar matrícula**, localizado no canto superior direito.

Quando o usuário possui permissão para matricular outros usuários, a opção exibida no lugar de **Requisitar matrícula** será **Matricular usuários**. 

**03.** Acionar **Adicionar à lista de desejos**.

**04.** Na mensagem exibida, acionar **Sim** para confirmar a inclusão do treinamento na lista de desejos; ou **Não** para desistir da ação se desejado.

Ao confirmar, o treinamento é adicionado à lista de desejos do aluno.

Os treinamentos adicionados podem ser visualizados no *widget* Lista de desejos, que pode ser adicionado em páginas da plataforma para que o usuário possa visualizar os itens que incluiu em sua lista de desejos, ou seja, itens que ele pretende se matricular posteriormente. Informações sobre o *widget* podem ser obtidas em [Lista de desejos](https://tdn.totvs.com/x/qYP5DQ#Plataforma%E2%9D%99Widgets-ListadeDesejos) e informações sobre a inclusão de *widgets* em páginas podem ser obtidas em [Adicionar página](/pages/viewpage.action?pageId=234455933).

### Remover treinamento da lista de desejos

---

**01.** No catálogo, acessar o treinamento que se deseja remover da lista de desejos. É possível acessar o treinamento localizando-o a partir da navegação pelo catálogo ou diretamente pela sua URL, informando-a no navegador.

**02.** Acionar a seta localizada ao lado de **Requisitar matrícula**, localizado no canto superior direito.

Quando o usuário possui permissão para matricular outros usuários, a opção exibida no lugar de **Requisitar matrícula** será **Matricular usuários**.

**03.** Acionar **Remover da lista de desejos**.

**04.** Na mensagem exibida, acionar **Sim** para confirmar a remoção do treinamento da lista de desejos; ou **Não** para desistir da ação se desejado.

Ao acionar essa opção o treinamento é removido da lista de desejos do aluno.

## Perguntas frequentes

---

[É possível bloquear o pós-teste para o aluno que ainda não concluiu o treinamento?](/pages/viewpage.action?pageId=244444077)

[É possível refazer o pós-teste de um treinamento em caso de reprovação?](/pages/viewpage.action?pageId=236586988)

[Por que é exibida a mensagem de aprovado no pós-teste sem atingir a nota de aprovação do treinamento?](/pages/viewpage.action?pageId=269087357)

[Por que não é possível excluir um treinamento?](/pages/viewpage.action?pageId=268826298)

[Por que uma avaliação existente não é listada na criação de um treinamento?](/pages/viewpage.action?pageId=269080341)

| Veja mais |
| --- |
| Veja mais |


<!-- anchors: Plataforma❙Treinamento-Índice, Plataforma❙Treinamento-Falandodetreinamento..., Plataforma❙Treinamento-Criartreinamento, Plataforma❙Treinamento-Editartreinamento, Plataforma❙Treinamento-Copiartreinamento, Plataforma❙Treinamento-Movertreinamento, Plataforma❙Treinamento-Removertreinamento, Plataforma❙Treinamento-Visualizarinformaçõeseconteúdodotreinamento, Plataforma❙Treinamento-Localizarconteúdodotreinamento, Plataforma❙Treinamento-Matricularusuáriosemtreinamento, Plataforma❙Treinamento-Matricular-seemtreinamento, Plataforma❙Treinamento-Cancelarrequisiçãodematrículaemtreinamento, Plataforma❙Treinamento-Cancelarmatrículaemtreinamento, Plataforma❙Treinamento-Adicionartreinamentoàlistadedesejos, Plataforma❙Treinamento-Removertreinamentodalistadedesejos, Plataforma❙Treinamento-Perguntasfrequentes -->
