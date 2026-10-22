---
title: "Configurando Integrações via EAI"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=212894462"
scraped_at: "2026-03-09T03:11:24.085Z"
depth: 1
anchors: 24
child_links: 62
---

# Configurando Integrações via EAI

# Índice

Atenção

Os ERPs **TOTVS Vitae,** **TOTVS Educacional** e **TOTVS RH** (Linha Datasul) estão em processo de **descontinuação da integração via EAI com o Fluig LMS,** porém, nesse momento a funcionalidade não será retirada do produto. Caso haja novas mudanças, os usuários serão comunicados previamente. 

# Objetivo

O objetivo deste guia é habilitar e configurar o console EAI para a utilização nas integrações com TOTVS Vitae, TOTVS Educacional e TOTVS RH (Linha Datasul).

# Visão Geral

Existe um conjunto de técnicas e padrões para a integração de ERPs TOTVS, conhecida como “Mensagem Única TOTVS”. Este conjunto de definições estabelece como os produtos TOTVS devem se comunicar e engloba questões como:

- Como definir uma mensagem de integração;
- Como as mensagens são identificadas;
- Como é feita a troca de mensagens;
- Como as mensagens são rastreadas.

O componente EAI 2.0 (Java), do produto Datasul encapsula estas definições e permite que os produtos possam se integrar no novo modelo com um esforço menor para a sua incorporação. Ele define um conjunto de interfaces que devem ser implementadas pelo produto hospedeiro (host application) que tratam, basicamente, da persistência das informações que circulam pelo EAI em banco de dados. Além disso, o EAI também espera que o aplicativo hospedeiro disponibilize um web service que será a porta de entrada para as mensagens enviadas pelos outros aplicativos.

Em contrapartida, o EAI 2.0 fornece toda a lógica de identificação, processamento e rastreabilidade de mensagens além de uma interface web para o gerenciamento da instância.

# Definição de mensagem única TotvsMessage

Durante o processo de consolidação de marcas, iniciado pela TOTVS, várias empresas diferentes foram adquiridas e com elas vários produtos passaram a compor o portfólio de ofertas disponível aos clientes. Esta expansão de ofertas permitiu que clientes de uma marca, antes limitados pelas opções com aquela “etiqueta”, pudesse agora compor o seu ambiente de TI utilizando produtos de origens diferentes (Ex.: TOTVS Educacional + TOTVS Fluig Plataforma, TOTVS RH (Linha Datasul) + TOTVS Fluig Plataforma).

Esta mesma iniciativa já era uma prática comum nos clientes, porém todo o custo envolvido na integração entre estes aplicativos era visto pelo cliente como parte da escolha de utilizar-se de produtos de diferentes fornecedores. Uma vez que estes produtos passam a fazer parte de uma mesma oferta, os clientes TOTVS passam a demandar que estes produtos sejam naturalmente integrados. Isto significa que se antes o cliente arcava com o custo e o risco envolvido em uma integração, ele agora entende que a TOTVS deve prover soluções já integradas, independente da origem dos produtos oferecidos.

Com o objetivo de padronizar a integrações com os produtos TOTVS, foi definida uma nova diretriz para os projetos de integração: A de que todos os produtos TOTVS devam trabalhar com uma mensagem XML únicos evitando, desta forma, o processo de transformação de mensagens. Neste cenário, teríamos o seguinte quadro:

![](/download/attachments/212894462/int1.png?version=1&modificationDate=1447781392000&api=v2)

Neste cenário, qualquer produto TOTVS trabalhará com o mesmo XML para uma mesma entidade, ou seja, supondo que tenhamos um XML correspondente à mensagem de CLIENTES, ela poderá ser enviada para qualquer um dos produtos que suporte o recebimento desta entidade.

Uma vez que os vários produtos TOTVS terão um “idioma” comum (o XML Único), as integrações entre estes produtos não exigirão mais que as mensagens sejam transformadas de um formato para outro. Com isto, será possível conectar diretamente dois produtos, como no diagrama abaixo:

![](/download/attachments/212894462/int2.png?version=1&modificationDate=1447781425000&api=v2)

Além de questões referentes ao formato das mensagens, a mensagem única também torna uniforme o tratamento destas mensagens XML pelos aplicativos, principalmente no que diz respeito à capacidade de rastreamento.

Todos os processos devem respeitar o fluxo normal de troca de mensagens no padrão de Mensagem Única TOTVS. O fluxo de mensagens poderá ocorrer nos seguintes sentidos:

- TOTVS Fluig Plataforma à Educacional: a plataforma TOTVS Fluig irá consumir o webservice da linha RM para recebimento de mensagens únicas. O mesmo também será responsável por encaminhar as mensagens para o EAI RM, que processará a mesma (englobando todas as especificidades requeridas) e encaminhará o retorno de acordo com o tipo de comunicação definida (síncrona ou assíncrona).
- Educacional à TOTVS Fluig Plataforma: os dados serão trafegados pelo fluxo normal até a fila de Integração TBC, onde o mesmo irá consumir o webservice do EAI da plataforma TOTVS Fluig para envio da(s) mensagem(s). Após a resposta da plataforma, o RM atualizará o registro com o status de processamento e demais dados, no Monitor da Fila de Mensagem Única.
- TOTVS Fluig Plataforma à TOTVS RH (Linha Datasul): a plataforma TOTVS Fluig irá consumir o webservice do TOTVS RH (Linha Datasul) para recebimento de mensagens únicas. Ele também será responsável por encaminhar as mensagens para o EAI TOTVS RH (Linha Datasul), que as processará (englobando todas as especificidades requeridas) e encaminhará o retorno de acordo com o tipo de comunicação definida (síncrona ou assíncrona).

Assim como definido no protocolo de comunicação de mensagens únicas, a comunicação pode ser efetuada de duas formas:

- Síncrona: O sistema de origem gera uma mensagem de integração na sua fila e envia ao webservice de destino. O processo na origem aguarda o processamento da mensagem no destino e ao receber o retorno atualiza o status do processamento na fila de integração. (Mensagens síncronas não podem ser processadas/reprocessadas no monitor da fila de integração.)

- Assíncrona: O sistema de origem gera uma mensagem de integração na sua fila, envia ao webservice de destino e aguarda somente a confirmação de recebimento da mensagem. O processo na origem não fica parado aguardando o processamento da mensagem no destino.

Ao término do processamento da mensagem por parte do sistema de destino o mesmo envia outra mensagem de retorno ao sistema de origem com o status do processamento.

As mensagens assíncronas podem ser processadas (status pendente) ou reprocessadas (status erro) manualmente através do monitor da fila de integração.

Nota: Cada linha irá programar a fila de integração a sua maneira, respeitando o protocolo definido para mensagem padrão e guardando o log de processamento de todas as mensagens recebidas ou enviadas.

# EAI vs Arquitetura multi-empresa

Um ponto relevante para a incorporação do EAI 2.0 na plataforma TOTVS Fluig é a sua característica de multi-empresa. Esta arquitetura permite que várias empresas utilizem a mesma instalação do produto de forma independente e transparente, gerando a percepção de que cada um possui uma instância própria do produto.

Isto significa que, do ponto de vista de integração, cada Empresa também deve ser independente e possuir um conjunto próprio de integrações, mensagens, etc. Do ponto de vista lógico, cada empresa teria a sua “instância” do EAI para integração mas, do ponto de vista físico, uma única instância do (componente EAI) deverá gerenciar as integrações de cada uma das empresas individualmente.

Sempre que uma mensagem é recebida na plataforma TOTVS Fluig, ela deve vir com a autenticação de um usuário da empresa e, a partir dessa autenticação, a plataforma realiza o *login* do usuário e sabe a qual empresa a mensagem foi direcionada.

# EAI Console

O EAI Console é a ferramenta, fornecida pelo EAI 2.0, que permite gerenciar todos os aspectos relativos à gestão da integração, desde a configuração da instância do EAI, a ativação de mensagens, o cadastro de aplicativos externos e a consulta de mensagens enviadas/recebidas.

O acesso ao EAI Console é restrito ao administrador da empresa e pode ser feito a partir de **Aprendizado** → **Administrar** → **Console EAI**.

# Recebimento de mensagem

Quando um aplicativo externo envia uma mensagem a um aplicativo hospedeiro do EAI ele deverá informar um usuário e senha que deverá ser validado contra os usuários cadastrados na plataforma TOTVS Fluig. Para que o e-learning permita que este usuário receba esta mensagem ele deverá ter um papel específico configurado no produto (Recurso "LMSEAI - Aprendizado - EAI" permissão "Acessar"). Isto torna flexível o modelo de autenticação uma vez que o cliente poderá utilizar o usuário administrador (que possui todas as roles, inclusive para recebimento de mensagens), criar um usuário específico para integrações (usuário eai, por exemplo) ou, ainda, criar usuários específicos para cada produto integrado.

Vale lembrar que além da permissão específica para o recebimento de mensagens, o usuário utilizado também deverá ter permissões que o habilitam a efetuar a transação que a mensagem pretende fazer. Por exemplo, para que a mensagem de criação de matrícula na turma seja processada com sucesso, o usuário utilizado deverá ter permissão para realizar matrícula na turma, ou seja, permissão de execução na turma.

# Configuração do Console EAI

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)
- [Passo 6](#)
- [Passo 7](#)
- [Passo 8](#)
- [Passo 9](#)
- [Passo 10](#)

 - Efetue o login na plataforma TOTVS Fluig utilizando o usuário **administrador da empresa**, e então acesse **Aprendizado → Administrar → Console EAI**.

![](/download/attachments/212894462/cons-01.png?version=1&modificationDate=1500320382000&api=v2)

 - A primeira tela se refere a tela de boas vindas, clique em **Next** para continuar.

![](/download/attachments/212894462/console%201.JPG?version=2&modificationDate=1500321962000&api=v2)

 - Na segunda tela informe o **host** da aplicação.

![](/download/attachments/212894462/console%202.JPG?version=2&modificationDate=1500321993000&api=v2)

 - Na terceira tela deve ser preenchido o nome da aplicação, o usuário e senha do usuário integrador (usuário da plataforma), uma descrição (opcional) e se o xml das mensagens devem ser validadas com os xmls do EAI. Essa validação não é para valores dos campos da mensagem e sim para o formato do XML.

![](/download/attachments/212894462/console%203.JPG?version=2&modificationDate=1500322033000&api=v2)

 - Nessa tela é possível buscar todas as mensagens recebidas e enviadas através do console EAI. É possível buscar através de um UUID específico da mensagem, pela aplicação (externa ou host), pelo status da mensagem, pelo tipo da transação ou informando um intervalo de datas.

![](/download/attachments/212894462/console%204.JPG?version=2&modificationDate=1500322056000&api=v2)

 - Nessa tela o usuário habilita quais as transações que estão disponíveis para as integrações. Deve ser selecionado se a transação esta habilitada para enviar (send), para receber (receive) ou para os dois (both).

![](/download/attachments/212894462/console%205.JPG?version=2&modificationDate=1500322082000&api=v2)

 - Nessa tela o usuário configura os aplicativos externos que farão a integração com o TOTVS Fluig Plataforma. Para adicionar um novo aplicativo externo clique em **Add new external application.**Caso já tenha algum aplicativo cadastrado é possível selecionar o registro e atualizá-lo clicando no botão **Connection information**ou visualizar as transações disponíveis no aplicativo externo clicando em **Transactions list.**

![](/download/attachments/212894462/console%206.JPG?version=2&modificationDate=1500322108000&api=v2)

 - Após clicar em **Add new external application**o usuário deve adicionar o endereço WSDL do aplicativo externo, a porta e o usuário e senha de um usuário integrador válido no aplicativo externo (Usuário do aplicativo externo. Ex Usuário do RM). Esse usuário deve estar cadastrado no aplicativo externo e não na plataforma TOTVS Fluig.

![](/download/attachments/212894462/console%207.JPG?version=2&modificationDate=1500322134000&api=v2)

 - Após preencher as informações do aplicativo externo e clicar em **Next,**serão exibidas todas as transações habilitadas do aplicativo externo. Caso esteja tudo correto, clique em **Finish** para finalizar o cadastro do aplicativo externo.

![](/download/attachments/212894462/console%208.JPG?version=2&modificationDate=1500322153000&api=v2)

 - Depois de concluída a inclusão de um aplicativo externo, clique em **Host application > Send routes**, selecione o **External application** cadastrado e serão listadas todas as mensagem que a plataforma envia. Selecione todas para habilitá-las e clique em **Save changes.**

![](/download/attachments/212894462/console%209.JPG?version=2&modificationDate=1500322174000&api=v2)

# Carga inicial de treinamentos do TOTVS Fluig Plataforma ao TOTVS RH (Linha Datasul)

- [Passo 1](#)
- [Passo 2](#)

 - Efetue o login na plataforma TOTVS Fluig utilizando o usuário **administrador da empresa** e então acesse **Aprendizado → Administrar → Configuração de treinamentos e trilhas**.

![](/download/attachments/212894462/01.png?version=1&modificationDate=1500319948000&api=v2)

 - Nesta tela é possível exportar os treinamentos já cadastrados na plataforma utilizando o botão **Exportar**.

 - Também é possível configurar se os usuários poderão finalizar pela plataforma sua matrícula integrada com o TOTVS RH (Linha Datasul) (Sim / Não).

![](/download/attachments/212894462/02.PNG?version=1&modificationDate=1500319918000&api=v2)

# Integração na inclusão de dados

Todos os registros da plataforma TOTVS Fluig criados através da integração com sistemas externos ficam ligados aos registros externos.

Exemplo:

- Quando o RM Vitae envia um usuário para o TOTVS Fluig Plataforma através da integração, esse usuário fica ligado ao registro no RM Vitae. Quando houver uma alteração nesse usuário no RM Vitae, essa alteração será replicada no TOTVS Fluig Plataforma. Se o usuário é inativado no RM Vitae ele será inativado no TOTVS Fluig Plataforma também.
- Quando o RM Educacional envia uma turma para a plataforma TOTVS Fluig através da integração, essa turma fica ligada ao registro no RM Educacional. Quando houver uma alteração nessa turma no RM Educacional, essa alteração será replicada na plataforma TOTVS Fluig. Se a turma se chamava "Matemática" e passa a se chamar "Matemática - Noturno" no RM Educacional esta alteração também ocorrerá na plataforma.
- Quando o RM Educacional envia uma matrícula em uma turma para a plataforma TOTVS Fluig através da integração, essa matrícula fica vinculada ao registro no RM Educacional. A matrícula só poderá ser finalizada no RM Educacional e quando isso acontecer, uma nova mensagem é enviada para a plataforma para que a matrícula seja finalizada nela também. Da mesma forma, se a matrícula for cancelada ou bloqueada no RM Educacional a matrícula da plataforma também será cancelada/bloqueada.
- Quando o RM Vitae envia uma matrícula em uma trilha/treinamento para plataforma TOTVS Fluig através da integração, essa matrícula fica vinculada ao registro no RM Vitae. A matrícula só poderá ser finalizada no RM Vitae e quando isso acontecer, uma nova mensagem é enviada para a plataforma para que a matrícula seja finalizada nela também. Da mesma forma, se a matrícula for cancelada ou bloqueada no RM Vitae a matrícula da plataforma também será cancelada/bloqueada.
- As requisições de matrículas nos treinamentos podem ser solicitadas pelos usuários na plataforma TOTVS Fluig desde que eles possuam permissão de Matricular em Treinamentos/Trilhas e de Executar no item trilha ou treinamento). Ao solicitar a matrícula de um treinamento na plataforma, a matrícula não é feita automaticamente, e sim enviada para o TOTVS RH (Linha Datasul) e então a plataforma aguarda uma mensagem de matrícula do usuário no TOTVS RH (Linha Datasul). A matrícula só poderá ser finalizada no TOTVS RH (Linha Datasul) e, quando isso acontecer, uma nova mensagem é enviada para a plataforma para que a matrícula seja finalizada nela também. Da mesma forma, se a matrícula for cancelada ou bloqueada no TOTVS RH (Linha Datasul), a matrícula da plataforma também será cancelada/bloqueada.
- Quando o TOTVS Fluig Plataforma envia um treinamento para o TOTVS RH (Linha Datasul) através da integração, esse treinamento fica ligado ao registro TOTVS RH (Linha Datasul). Quando houver uma alteração nesse treinamento na plataforma, a alteração será replicada no TOTVS RH (Linha Datasul). Os treinamentos não podem ser cadastrados nem editados no TOTVS RH (Linha Datasul). As trilhas não são integradas.

Essa condição acontece com todos os registros integrados.

Exemplo: Usuários, Disciplinas, Turmas, Complementos de Disciplina, Treinamentos, Requisição de Matrículas, Matrículas em Turmas, Matrículas em Treinamentos, etc.

Na mensagem de integração de usuários é permitido o envio de uma lista de papéis e outra lista de grupos. Quando o usuário estiver sendo criado na plataforma TOTVS Fluig, esses papéis e grupos são listados e os papéis/grupos que não existem na plataforma são criados e associados ao usuário. Os papéis e grupos já existentes na plataforma serão apenas associados ao usuário não havendo nenhum tipo de atualização dos mesmo.

Caso seja uma atualização de usuários e na mensagem conste papéis ou grupos não existentes na plataforma TOTVS Fluig, os mesmos serão ignorados, sendo associados ao usuário apenas os existentes na plataforma. O processo de atualização não cria nem grupos e nem papéis.

Importante!

A partir da atualização **1.6.5-190219**, o **LMS** não faz mais parte da plataforma para **novas instalações**.

Mas, não se preocupe: se você adquiriu a plataforma com o **LMS incluso**, entre em contato com o [Suporte Fluig](https://suporte.fluig.com/) para que você consiga utiliza-lo normalmente – mesmo após a atualização **1.6.5-190219**. Se você não lembra se o LMS está incluso ou não no seu pacote, consulte sua proposta comercial ou entre em contato com o seu ESN.


<!-- anchors: ConfigurandoIntegraçõesviaEAI-Índice, ConfigurandoIntegraçõesviaEAI-Objetivo, ConfigurandoIntegraçõesviaEAI-VisãoGeral, ConfigurandoIntegraçõesviaEAI-DefiniçãodemensagemúnicaTotvsMessage, ConfigurandoIntegraçõesviaEAI-EAIvsArquiteturamulti-empresa, ConfigurandoIntegraçõesviaEAI-EAIConsole, ConfigurandoIntegraçõesviaEAI-Recebimentodemensagem, ConfigurandoIntegraçõesviaEAI-ConfiguraçãodoConsoleEAI, fluig-config, fluig-config-1, fluig-config-2, fluig-config-3, fluig-config-4, fluig-config-5, fluig-config-6, fluig-config-7, fluig-config-8, fluig-config-9, fluig-config-10, ConfigurandoIntegraçõesviaEAI-CargainicialdetreinamentosdoTOTVSFluigPlataformaaoTOTVSRH(LinhaDatasul), fluig-config, fluig-config-1, fluig-config-2, ConfigurandoIntegraçõesviaEAI-Integraçãonainclusãodedados -->
