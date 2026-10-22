---
title: "Plataforma ❙ Consultar solicitações"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=233763161"
scraped_at: "2026-03-09T04:06:01.689Z"
depth: 2
anchors: 5
child_links: 48
---

# Plataforma ❙ Consultar solicitações

# Falando de consultar solicitações...

---

É possível consultar solicitações de processos em andamento, finalizadas ou canceladas. Dessa forma é possível, por exemplo, verificar em qual tarefa uma determinada solicitação se encontra, qual o usuário responsável pela inicialização da solicitação, o *status* da solicitação, os históricos de cada atividade, o fluxo de atividades do processo, além de outras informações.

Um usuário comum somente consegue visualizar as solicitações que iniciou, participou ou, ainda, as solicitações de processos públicos.

Um usuário definido como gestor de um processo consegue também visualizar as solicitações que participou como gestor e as solicitações sob sua gerência. Somente um usuário administrador tem permissão para visualizar todas as solicitações de processos.

![](/download/attachments/233763161/Consulta%20de%20solicita%C3%A7%C3%B5es.png?version=1&modificationDate=1755092335297&api=v2)

Precisa de ajuda?

Acesse a central de ajuda da plataforma através do ícone ![](/download/attachments/233763161/question-off.png?version=1&modificationDate=1554227321910&api=v2), localizado no canto superior direito das páginas do menu Processos, para obter informações específicas sobre este recurso, além de*links* com documentações relacionadas. [Saiba mais](https://tdn.totvs.com/x/ZMhSDg).

## Consultar solicitações

---

**01.** No menu principal, clique em ![](/download/attachments/233763161/process.png?version=1&modificationDate=1755092407820&api=v2)**Processos**.

**02.** Clique em ![](/download/attachments/233763161/flaticon-search%20%281%29.png?version=1&modificationDate=1755092368313&api=v2)**Consultar solicitações**.

**03.** Defina os parâmetros desejados para a seleção das solicitações que devem ser exibidas. A consulta pode ser filtrada **Por processos** ou **Por solicitações.**

As informações solicitadas no filtro **Por processos** são:

**A partir desta data / Até**
Data inicial e final que estabelecem um período dentro do qual as solicitações serão consideradas na consulta.

**A partir da solicitação / Até**
Situação na qual estão as solicitações que devem ser consideradas na consulta. As opções disponíveis são:

**Status**Assinalar o tipo de solicitação que deseja consultar.

- **Abertas**: quando assinalada, determina que as solicitações em andamento serão consideradas na consulta.
- **Finalizadas**: quando assinalada, determina que as solicitações já finalizadas ou canceladas serão consideradas na consulta;
- **Canceladas**: quando assinalada, determina que as solicitações já canceladas serão consideradas na consulta.

**Solicitações**Tipo das solicitações que se deseja consultar. Somente é possível inserir um tipo de solicitação para consulta, ou então selecione a opção todas as solicitações, para a consulta trazer a pesquisa completa, contendo todas as solicitações.****

- **Que inicializei:**Quando selecionado, determina que serão consideradas as solicitações iniciadas pelo usuário autenticado na consulta.
- **Que participei:**Quando selecionado, determina que serão consideradas as solicitações nas quais o usuário autenticado teve alguma participação.
- **Que participei como gestor/substituto:**Quando selecionado, determina que serão consideradas as solicitações nas quais o usuário autenticado participou como gestor ou substituto.
- **Sob minha gerência:**Quando selecionado, determina que serão consideradas as solicitações de processos dos quais o usuário autenticado é o gestor.
- **Todas as solicitações:**Quando selecionado, determina que todas as solicitações do processo devem ser consideradas na consulta. Somente um usuário Administrador tem permissão para visualizar todas as solicitações de processos. Os processos definidos como públicos podem ser visualizados por todos os usuários.

Serão consideradas apenas as solicitações com permissão de visualização.

**Buscar pela descrição**No campo de busca – localizado ao lado do filtro Por processos, digite a descrição do processo que deseja buscar. Ou então, clique sobre o campo para que os processos sejam listados abaixo.

As informações solicitadas no filtro **Por solicitações** são:

No campo de busca – localizado ao lado do filtro Por processos, digite o número da solicitação que deseja e pressione a tecla *Enter* para selecionar, ou clique em **Buscar**.

No campo **Selecionados** são exibidos os números das solicitações pesquisadas.

Serão consideradas apenas as solicitações com permissão de visualização.

**04.** Clique em **Buscar** para visualizar o resultado da consulta em tela.

## Resultados encontrados

---

**01.** Após selecionar o tipo das solicitações que deseja visualizar e clicar em **Buscar**, a listagem com os resultados encontrados será carregada. 

**02.** É possível visualizar as solicitações e para voltar ao início da tela clique em ![](/download/attachments/233763161/volta%20ao%20inicio.png?version=1&modificationDate=1755093221197&api=v2).

**03.**Após localizar a solicitação desejada, clique sobre ela para ser direcionado à página com seus detalhes. A solicitação será aberta em uma nova guia.

Ao abrir a solicitação é possível visualizar os seus detalhes, tais como o diagrama do processo, o formulário, os anexos dentre outros. Mais informações podem ser obtidas em [Visualizar detalhes da solicitação](/pages/viewpage.action?pageId=233763188).

## Exportar

---

**01.** Selecione as solicitações que deseja exportar e clique em ![](/download/attachments/233763161/exportar%20solicita%C3%A7%C3%A3o.png?version=1&modificationDate=1755093787720&api=v2)**Exportar**.

A exportação das solicitações é executada em segundo plano. Ao ser concluída, a plataforma publica o arquivo *Resultado da consulta de solicitações.xlsx* na pasta particular do usuário (que deve estar habilitada) e envia uma notificação por e-mail. O arquivo exportado conterá, obrigatoriamente, as seguintes colunas:

- **Solicitação**: número da solicitação;
- **Descrição**: descrição do processo;
- **Situação**: *status* da solicitação;
- **Matricula requisitante**: matrícula do requisitante da solicitação;
- **Requisitante**: nome do usuário requisitante da solicitação;
- **Localização**: atividade na qual se encontra a solicitação;
- **Responsável**: nome dos usuários responsáveis pela movimentação da atividade (No caso de múltiplas passagens, todos os usuários que movimentaram, e em consenso todos os usuários que poderiam ter movimentado, exceto transferências);
- **Início**: data em que a solicitação foi iniciada;
- **Fim**: data em que a solicitação foi finalizada (caso esteja finalizada).
- **Prazo da tarefa**: prazo para finalização da tarefa;
- **Identificador**: identificador da solicitação.

As colunas acima são padrão e sempre serão exibidas no início do arquivo exportado. Neste mesmo arquivo também podem ser incluídos os dados de atividades e formulários, porém a ordem de exibição dessas colunas não é fixa e deve variar de acordo com a quantidade de solicitações, atividades movimentadas e campos de formulários que foram definidos nos parâmetros da consulta.

Quando a opção **Incluir dados de atividades** está assinalada, para a atividade corrente será exibido o atual responsável por ela e a coluna data de conclusão estará em branco. Apenas serão listadas as atividades pelas quais alguma solicitação da consulta passou. As demais atividades do processo não serão exibidas. O arquivo exportado incluirá dados referentes às movimentações das atividades dos processos selecionados para consulta. Apenas atividades movimentadas serão incluídas, portanto a movimentação da solicitação poderá gerar um maior número de colunas. Cada atividade é representada por duas colunas:

- Atividade - [Nome da atividade] - Responsável: Nome do responsável.
- Atividade - [Nome da atividade] - Conclusão: Data da última movimentação.

Quando a opção **Incluir dados de formulário** está assinalada, o arquivo incluirá os campos dos formulários atrelados aos processos selecionados para consulta. Os campos de formulários são incluídos no arquivo exportado a cada processo encontrado, formando uma cascata de informações e a ordem das colunas para cada formulário depende do seu [modelo de armazenamento](https://tdn.totvs.com/x/phSWDg).

- Caso o formulário seja armazenado em tabela única: os campos serão exibidos em ordem alfabética nas colunas do arquivo;
- Caso o formulário seja armazenado em tabelas múltiplas: os campos serão exibidos na ordem em que foram adicionados ao formulário. Em uma primeira versão, serão mostrados na ordem em que foram adicionados durante a criação do formulário. Nas versões subsequentes, cada novo campo adicionado ao formulário será incluído no final do arquivo.

## Exportação avançada

---

**01**. Clique na seta – localizada ao lado do botão Exportar ![](/download/attachments/233763161/exportar%20avan%C3%A7ado%20%282%29.png?version=1&modificationDate=1755111841767&api=v2). Após, clique em **Exportação avançada**.

**02**. Na janela **Exportação avançada**, selecione os tipos de dados que deseja visualizar ao exportar a consulta.

As opções disponíveis para seleção, são:

- **Incluir dados das atividades**:****Quando assinalado, determina que serão exibidos o nome do responsável e a data de conclusão de todas as atividades pelas quais o processo já passou. Ao assinalar esta opção não será possível visualizar o resultado da consulta em tela, apenas a exportação ficará habilitada. Para a atividade corrente, será exibido o atual responsável por ela e a coluna data de conclusão estará em branco. Apenas serão listadas as atividades pelas quais alguma solicitação da consulta passou. As demais atividades do processo não serão exibidas.

- **Incluir dados do prazo das solicitações**: Quando assinalado, determina que serão exibidos os dados dos prazos definidos para a finalização das solicitações.

- **Incluir dados do formulário**:****Quando assinalado, determina que os dados informados nos campos do formulário de cada solicitação serão incluídos no resultado da consulta. Ao assinalar esta opção não será possível visualizar o resultado da consulta em tela, apenas a exportação ficará habilitada.

- **Incluir múltiplos registros**:****Quando assinalado, determina que também serão incluídos os dados dos campos filhos do formulário. Essa opção somente é habilitada quando a opção Incluir dados do formulário está assinalada.

- **Agrupar múltiplos registros**:****Quando assinalado, determina que os dados dos campos filhos do formulário serão agrupados em uma única célula da planilha gerada. Essa opção somente é habilitada quando a opção Incluir múltiplos registros está assinalada.

A exportação das solicitações é executada em segundo plano. Ao ser concluída, a plataforma publica o arquivo *Resultado da consulta de solicitações.xlsx* na pasta particular do usuário (que deve estar habilitada) e envia uma notificação por e-mail. O arquivo exportado conterá, obrigatoriamente, as seguintes colunas:

- **Solicitação**: número da solicitação;
- **Descrição**: descrição do processo;
- **Situação**: *status* da solicitação;
- **Matricula requisitante**: matrícula do requisitante da solicitação;
- **Requisitante**: nome do usuário requisitante da solicitação;
- **Localização**: atividade na qual se encontra a solicitação;
- **Responsável**: nome do responsável pela atividade na qual se encontra a solicitação;
- **Início**: data em que a solicitação foi iniciada;
- **Fim**: data em que a solicitação foi finalizada (caso esteja finalizada).
- **Prazo da tarefa**: prazo para finalização da tarefa;
- **Identificador**: identificador da solicitação.

As colunas acima são padrão e sempre serão exibidas no início do arquivo exportado. Neste mesmo arquivo também podem ser incluídos os dados de atividades e formulários, porém a ordem de exibição dessas colunas não é fixa e deve variar de acordo com a quantidade de solicitações, atividades movimentadas e campos de formulários que foram definidos nos parâmetros da consulta.

Quando a opção **Incluir dados de atividades** está assinalada, para a atividade corrente será exibido o atual responsável por ela e a coluna data de conclusão estará em branco. Apenas serão listadas as atividades pelas quais alguma solicitação da consulta passou. As demais atividades do processo não serão exibidas. O arquivo exportado incluirá dados referentes às movimentações das atividades dos processos selecionados para consulta. Apenas atividades movimentadas serão incluídas, portanto a movimentação da solicitação poderá gerar um maior número de colunas. Cada atividade é representada por duas colunas:

- Atividade - [Nome da atividade] - Responsável: Nome do responsável.
- Atividade - [Nome da atividade] - Conclusão: Data de movimentação.

Quando a opção **Incluir dados de formulário** está assinalada, o arquivo incluirá os campos dos formulários atrelados aos processos selecionados para consulta. Os campos de formulários são incluídos no arquivo exportado a cada processo encontrado, formando uma cascata de informações e a ordem das colunas para cada formulário depende do seu [modelo de armazenamento](https://tdn.totvs.com/x/phSWDg).

- Caso o formulário seja armazenado em tabela única: os campos serão exibidos em ordem alfabética nas colunas do arquivo;
- Caso o formulário seja armazenado em tabelas múltiplas: os campos serão exibidos na ordem em que foram adicionados ao formulário. Em uma primeira versão, serão mostrados na ordem em que foram adicionados durante a criação do formulário. Nas versões subsequentes, cada novo campo adicionado ao formulário será incluído no final do arquivo.

**03**. Clique em **Exportar**.

Informação:

Caso a exportação de consulta de solicitações não tenha sido gerada, siga os passos abaixo.

**Problema**
Ao exportar uma consulta de solicitações, a notificação na Plataforma não é entregue, o e-mail de conclusão não é recebido e o arquivo não é gerado.

**Possível causa**
A pasta Meus Documentos – onde o arquivo é salvo – pode não estar habilitada para o usuário.

**Solução**

**01.** Acesse o recurso **Parâmetros** no **Painel de Controle**.

**02.** Marque a opção **Habilita meus documentos**.

**03.** Verifique se a pasta **Meus Documentos** foi criada.

**04.** Caso a pasta ainda não apareça:

- Solicite a realização de um Insert no banco de dados.
- Abra um chamado para a equipe de suporte informando:

- Tipo do banco de dados.
- Versão do banco.
- Se foi convertido de ECM para Fluig.

Fique atento!

Esta documentação é válida a partir da atualização** Voyager (2.0)**. Se você utiliza uma atualização anterior, ela pode conter informações diferentes das quais você vê na sua plataforma.


<!-- anchors: Plataforma❙Consultarsolicitações-Falandodeconsultarsolicitações..., Plataforma❙Consultarsolicitações-Consultarsolicitações, Plataforma❙Consultarsolicitações-Resultadosencontrados, Plataforma❙Consultarsolicitações-Exportar, Plataforma❙Consultarsolicitações-Exportaçãoavançada -->
