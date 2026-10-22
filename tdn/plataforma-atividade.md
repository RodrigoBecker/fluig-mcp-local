---
title: "Plataforma ❙ Atividade"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=862123505#Plataforma%E2%9D%99Atividade-Configuraraprova%C3%A7%C3%A3oparaoMyApproval"
scraped_at: "2026-03-09T05:06:21.171Z"
depth: 3
anchors: 14
child_links: 83
---

# Plataforma ❙ Atividade

Consulte a documentação correta:

Esta documentação refere-se ao novo editor de processos da plataforma. Caso esteja utilizando o editor de processos atual, acesse [Configurar atividades e fluxos](/pages/viewpage.action?pageId=233763197). 

IDIOMA

# Falando de componente Atividade...

---

![](/download/attachments/862123505/componente-atividade.png?version=1&modificationDate=1723206990507&api=v2)O componente **Atividade** é a unidade básica de separação de um processo em etapas, ou seja, uma atividade comum. Ele indica que uma tarefa ou ação deve ser realizada nesta etapa do fluxo do processo.

É uma etapa que precisa ser executada por uma pessoa para que a solicitação possa ser enviada adiante.

A definição de quem pode executar essa etapa do processo é feita por meio do mecanismo de atribuição do componente.

Nesse componente, também é possível configurar algumas características gerais, definir regras de anexo, prazo para conclusão, dentre outras características.

![](/download/attachments/862123505/diagrama-completo-atividade.png?version=5&modificationDate=1742579036900&api=v2)

## Ver tour guiado do componente Atividade

---

****

        Your browser does not support the HTML5 video element

**01.** No [diagrama](/pages/viewpage.action?pageId=860252119) do processo, clique no componente **Atividade** ****.

**02.** Na lateral direita, onde foram exibidas as configurações do componente, clique em ![](/download/attachments/862123505/guia-de-uso.png?version=1&modificationDate=1743096991490&api=v2) **Guia de uso** – localizado na parte inferior.

**03.** Veja a apresentação do recurso destacado.

**04.** Clique em **Próximo** para seguir para a apresentação do próximo recurso.

Quando há recursos anteriores, é possível clicar em **Voltar** para revê-los.

**05.** Ao finalizar o *tour* guiado, clique em **Concluir**.

Se desejar, é possível clicar em **Voltar** para rever os recursos anteriores antes de concluir.

## Configurar componente Atividade

---

****

        Your browser does not support the HTML5 video element

**01.** No [diagrama](/pages/viewpage.action?pageId=860252119) do processo, clique no componente **Atividade** que deseja configurar.

As configurações disponíveis são exibidas na lateral direita.

**02.** Na aba **Geral**, defina as informações gerais para o componente que representa uma etapa do processo.

**Título**
Nome da etapa ou atividade do processo. O nome também pode ser alterado diretamente no componente, clicando sobre ele e depois em **Editar**![](/download/attachments/862123505/editar.png?version=1&modificationDate=1726489680687&api=v2)– localizado no canto superior direito.

EXEMPLO DE USO
Em um processo de **Solicitação de férias**, essa etapa poderia receber o nome **Aprovar férias** e ser de responsabilidade de um gestor.

**Instruções para atividade**
Instruções que visam facilitar o entendimento de quem vai executar essa etapa, tais como dados que precisam ser informados para agilizar o entendimento e resolução da solicitação. As instruções são exibidas na aba **Informações** da solicitação.

Dica!

Ao preparar as instruções de uma etapa, é comum precisar buscar informações de outros documentos ou *sites*. A plataforma possui o conceito de *hiperlink*, que permite incluir um documento de instruções e também endereços da Internet por meio de documentos externos, ambos armazenados no recurso [Documentos](/pages/viewpage.action?pageId=233762797), evitando a replicação de informações e facilitando a navegação. Para isso, basta utilizar o formato **[WD:codigodoc]**, substituindo **codigodoc** pelo código numérico do documento.

**Solicitar senha**
Quando ativada, determina que o responsável precisa informar sua senha no momento de executar essa etapa. Se a senha estiver incorreta, é permitido que o solicitante a informe quantas vezes forem necessárias. A solicitação somente poderá ser enviada para a próxima etapa quando a senha for informada corretamente. A confirmação da senha fica registrada no histórico da solicitação. Se a opção **Confirmar senha** da aba **Segurança** das [configurações](https://tdn.totvs.com/pages/viewpage.action?pageId=860245005#Plataforma%E2%9D%99Editordeprocesso-Definirop%C3%A7%C3%B5esdeseguran%C3%A7aparaoprocessoseguran%C3%A7a-processo) do processo já estiver ativada, essa opção estará desabilitada.

Nota:

Etapas configuradas para solicitar a senha não podem ser automatizadas por *Web services*.

**Transferir responsável**
Quando ativada, determina que é possível transferir a responsabilidade por executar essa etapa para outra pessoa.

**03.** Clique em **Configurações de anexo** – localizado na parte inferior – para definir as regras para os anexos necessários nessa etapa do processo.

As regras para anexos não são obrigatórias. Quando não são definidas, é permitido deixar a etapa sem anexos ou adicionar qualquer tipo e qualquer quantidade de anexos, visto que nenhuma validação é feita.

Dica!

[Clique aqui](/pages/viewpage.action?pageId=860252092) para entender como as regras para anexos funcionam antes de configurá-las.

**04.** Para definir que a etapa não deve receber anexos, ative a opção **Proibir anexos**.

**Proibir anexos**
Quando ativada, determina que não é permitido anexar nenhum arquivo nessa etapa.

**05.** Se a etapa permitirá anexos, clique em ![](/download/attachments/862123505/adicionar.png?version=1&modificationDate=1724417107993&api=v2) **Adicionar regra de anexo na atividade** para definir a regra.

**06.** Em **Regra geral**, escolha como o anexo deve ser, selecionando uma **condição** e informando uma **quantidade**, caso a condição permita.

As condições disponíveis são:

- **igual a**;
- **maior que**;
- **maior ou igual a**;
- **menor que**;
- **menor ou igual a**;
- **qualquer um**.

 CLIQUE AQUI E VEJA ALGUNS EXEMPLOS

→ O anexo dever ser **maior ou igual a** **2**.

Significa que é **obrigatório** anexar **pelo menos dois** anexos – podendo adicionar **mais** – nessa etapa.

→ O anexo dever ser **menor que 4**.

Significa que é permitido adicionar **até três** anexos nessa etapa ou deixá-la sem anexo.

→ O anexo deve ser **qualquer um**.

Significa que é permitido adicionar **qualquer tipo** e **quantidade** de anexo nessa etapa ou deixá-la sem anexo.

Dica!

Veja mais exemplos de utilização das **regras gerais** [clicando aqui](https://tdn.totvs.com/pages/viewpage.action?pageId=860252092#Plataforma%E2%9D%99Regrasparaanexosemsolicita%C3%A7%C3%B5es-Regrageral).

**07.** Se desejar, clique em **Adicionar regra específica** para determinar algumas características exigidas para o anexo.

**08.** Escolha a **característica** do anexo para compor a regra específica.

As condições disponíveis são:

- **a extensão**;
- **o nome do arquivo**;
- **o nome e a extensão**;
- **condição avançada:** quando selecionada, é necessário criar a regra a partir de uma expressão que utiliza os caracteres ***** (**asterisco**), **|** (**pipe**) e **!** (**exclamação**). Mais detalhes sobre essa opção podem ser obtidos no **passo 11**.

**09.** Agora, escolha a **condição** que essa característica precisa atender.

As condições disponíveis são:

- **igual a**;
- **diferente de**;
- **contendo**.

Se a condição selecionada for **contendo**, ainda é possível escolher:

- **início**;
- **meio**;
- **fim**.

**10.** Por fim, informe os **termos** que precisam ou não constar no nome ou na extensão do anexo, de acordo com a **característica** e a **condição** selecionadas. 

 CLIQUE AQUI E VEJA ALGUNS EXEMPLOS

→ O anexo deve ser **qualquer um** com **a extensão igual a** **.zip**.

Significa que é obrigatório adicionar qualquer anexo que tenha a extensão **.zip**.

→ O anexo deve ser **maior ou igual a 0** com **a extensão igual a** **.log**.

Significa que é permitido adicionar **um** ou **mais** anexos com a extensão **.log** ou deixar a etapa sem anexos.

→ O anexo deve ser **igual a 1** com **o nome e extensão contendo** no nome o termo **boleto** no**início** e na extensão o termo **.pdf**no**fim**.

Significa que é obrigatório adicionar **um** anexo que tenha o termo **boleto** no **início** do seu **nome** e que seja um documento do tipo **PDF**.

Dica!

Veja mais exemplos de utilização das **regras específicas**[clicando aqui](https://tdn.totvs.com/pages/viewpage.action?pageId=860252092#Plataforma%E2%9D%99Regrasparaanexosemsolicita%C3%A7%C3%B5es-Regraespec%C3%ADfica).

Para remover as condições selecionadas para a regra específica, clique em **Remover** ![](/download/attachments/862123505/remover.png?version=1&modificationDate=1724417108093&api=v2) – localizado no fim da composição da regra.

**11.** Se a opção selecionada para a regra específica for **condição avançada**, é possível definir a regra utilizando uma expressão que pode conter os caracteres ***** (**asterisco**), **|** (**pipe**) e **!** (**exclamação**).  

- ***** (**asterisco**): permite deixar livre para ter ou não quaisquer caracteres antes ou depois dele.

- **|** (**pipe**): significa "**ou**" e permite definir múltiplos padrões.

- **!** (**exclamação**): significa "**diferente de**" ou "**proibido**" e permite barrar um padrão.

 CLIQUE AQUI E VEJA ALGUNS EXEMPLOS

→ O anexo deve ser **qualquer um** com **condição avançada** **!*.zip**.

É permitido adicionar **qualquer tipo **de anexo com a extensão **diferente** de **.zip** ou deixar a etapa sem anexos. A extensão **.zip** é **proibida**.

→ O anexo deve ser **maior ou igual a 2** com **condição avançada** ***.pdf|*.jpg**.

É obrigatório adicionar **pelo menos 2** anexos que tenham uma das extensões permitidas: **.pdf ou .jpg**.

→ O anexo deve ser **igual a 1** com **condição avançada *fatura*.pdf.**

É obrigatório adicionar **um** anexo que contenha o termo **fatura** no nome e com a extensão **.pdf**.

Dica!

Veja mais detalhes e mais exemplos de utilização das **regras avançadas**[clicando aqui](https://tdn.totvs.com/pages/viewpage.action?pageId=860252092#Plataforma%E2%9D%99Regrasparaanexosemsolicita%C3%A7%C3%B5es-Regraavan%C3%A7ada).

Para remover as condições definidas para a regra avançada, clique em **Remover** ![](/download/attachments/862123505/remover.png?version=1&modificationDate=1724417108093&api=v2) – localizado no fim da composição da regra.

**12.** Em **Mensagem de erro caso não atenda a regra**, defina uma mensagem ou uma instrução para ajudar o responsável que está executando essa etapa quando o anexo que ele adicionou não está atendendo a essa regra.

 CLIQUE AQUI E VEJA ALGUNS EXEMPLOS

→ **Se a regra for**: O anexo deve ser **maior ou igual a 1**.

**A mensagem pode ser**: Você precisa anexar pelo menos 1 arquivo de qualquer tipo. Se desejar, pode anexar mais de 1.

→ **Se a regra for**: O anexo deve ser **igual a 2**.

**A mensagem pode ser**: Você precisa anexar 2 arquivos de qualquer tipo. Não é permitido adicionar mais de 2.

→ **Se a regra for**: O anexo deve ser **maior ou igual a 3** com **a extensão igual a** **.pdf**.

**A mensagem pode ser**: Você precisa anexar pelo menos 3 documentos do tipo PDF. Se desejar, pode anexar mais de 3.

**13.** Clique em **Salvar**.

Ao salvar, a regra passa a ser exibida em **Regras criadas**. As regras são exibidas em ordem de criação, da mais recente para a mais antiga.

É possível editar ou remover as regras criadas clicando em **Ações**![](/download/attachments/862123505/a%C3%A7%C3%B5es.png?version=1&modificationDate=1724270817640&api=v2)– localizado no lado direito da regra – e, em seguida, em **Editar** ou **Excluir**. Ao editar ou excluir uma regra, a ordem de exibição não é alterada, ou seja, elas continuam sendo exibidas em ordem de criação, da mais recente para a mais antiga.

Para adicionar mais regras, clique em ![](/download/attachments/862123505/adicionar.png?version=1&modificationDate=1724417107993&api=v2) **Adicionar regra de anexo na atividade**.

**14.** Ao concluir a configuração de todas as regras desejadas, clique em **Fechar**![](/download/attachments/862123505/cancelar.png?version=1&modificationDate=1739295940193&api=v2)– localizado no canto superior direito.

**15.** Clique na aba **Atribuição** e defina como deve ser a atribuição do responsável pela solicitação quando ela chegar nessa etapa.

**Tipo de atribuição**
Como deve ser feita a definição do responsável por essa etapa do processo, ou seja, quem pode receber essa etapa quando a solicitação for movimentada para ela. As opções disponíveis são:

- **Qualquer pessoa**: quando selecionada, determina que qualquer pessoa pode receber e executar essa etapa, ou seja, ao movimentar a solicitação para essa etapa, é possível selecionar qualquer pessoa existente na plataforma para recebê-la.

- **Grupo específico**: quando selecionada, determina que apenas as pessoas de um grupo específico podem receber e executar essa etapa. É possível definir se a etapa será individual – executada por uma única pessoa do grupo – ou se ela será conjunta – executada por mais de uma pessoa do grupo. Essa definição é feita selecionando uma das opções Atividade individual ou Atividade conjunta.

- **Papel específico**: quando selecionada, determina que apenas as pessoas que exercem um papel específico podem receber e executar essa etapa. É possível definir se a etapa será individual – executada por uma única pessoa que exerce esse papel – ou se ela será conjunta – executada por mais de uma pessoa que exerce papel. Essa definição é feita selecionando uma das opções Atividade individual ou Atividade conjunta.

- **Campo de formulário**: quando selecionada, determina que apenas a pessoa informada em um campo do formulário da solicitação em alguma etapa anterior pode receber e executar essa etapa, ou seja, ao movimentar a solicitação para essa etapa, ela será enviada automaticamente para essa pessoa.

- **Pessoa específica**: quando selecionada, determina que apenas uma pessoa específica pode receber e executar essa etapa, ou seja, ao movimentar a solicitação para essa etapa, ela será enviada automaticamente para essa pessoa.Nota: Se essa pessoa for inativada em algum momento, somente o gestor do processo poderá movimentar a solicitação em seu lugar.

**Grupo específico**
Grupo específico de pessoas que podem receber essa etapa quando a solicitação for movimentada para ela. Esse campo somente é exibido ao selecionar a opção Grupo específico em Tipo de atribuição. Para ver as pessoas que fazem parte do grupo selecionado, basta clicar em **Visualizar** ![](/download/attachments/862123505/ver.png?version=1&modificationDate=1725538213600&api=v2) e, para remover o grupo selecionado, basta clicar em **Remover** ![](/download/attachments/862123505/remover.png?version=1&modificationDate=1724417108093&api=v2) – ambos localizados no lado direito do nome do grupo.

**Papel específico**
Papel específico exercido pelas pessoas que podem receber essa etapa quando a solicitação for movimentada para ela. Esse campo somente é exibido ao selecionar a opção Papel específico em Tipo de atribuição. Para ver as pessoas que exercem o papel selecionado, basta clicar em **Visualizar** ![](/download/attachments/862123505/ver.png?version=1&modificationDate=1725538213600&api=v2) e, para remover o papel selecionado, basta clicar em **Remover** ![](/download/attachments/862123505/remover.png?version=1&modificationDate=1724417108093&api=v2) – ambos localizados no lado direito do nome do papel.

**Selecione um campo**
Campo do formulário no qual foi informada a pessoa que pode receber essa etapa quando a solicitação for movimentada para ela. Esse campo somente é exibido ao selecionar a opção Campo de formulário em Tipo de atribuição. Para remover o campo selecionado, basta clicar em **Remover** ![](/download/attachments/862123505/remover.png?version=1&modificationDate=1724417108093&api=v2) – localizado no lado direito do nome do campo.

**Pessoa específica**
Pessoa específica que pode receber essa etapa quando a solicitação for movimentada para ela. Esse campo somente é exibido ao selecionar a opção Pessoa específica em Tipo de atribuição. Para remover a pessoa selecionada, basta clicar em **Remover** ![](/download/attachments/862123505/remover.png?version=1&modificationDate=1724417108093&api=v2) – localizado no lado direito do nome da pessoa.

**16.** Ainda na aba **Atribuição**, se o tipo de atribuição escolhido foi **Grupo específico** ou **Papel específico**, defina como deve ser a execução dessa etapa, se individual ou conjunta.

**Atividade individual**Quando selecionada, determina que a etapa deve ser executada por uma única pessoa. Neste caso, é possível definir se apenas uma pessoa do grupo ou que exerce o papel pode ser selecionada para receber a solicitação quando ela for movimentada ou se a solicitação deve ser enviada para todas as pessoas do grupo ou que exercem o papel e a primeira que a assumir se torna a responsável por executar essa etapa. Essa opção somente é exibida quando o tipo de atribuição escolhido for Grupo específico ou Papel específico.

**Atividade conjunta**Quando selecionada, determina que a etapa deve ser executada por mais de uma pessoa. Desta forma, somente será possível concluir a etapa e movimentar a solicitação para a próxima quando o percentual de consenso de conclusão definido for atingido. Essa opção também permite definir se várias pessoas do grupo ou que exercem o papel podem ser selecionadas para receber a solicitação quando ela for movimentada ou se a solicitação deve ser enviada para todas as pessoas do grupo ou que exercem o papel para que possa ser executada por quaisquer pessoas até que o percentual de consenso seja atingido. Essa opção somente é exibida quando o tipo de atribuição escolhido for Grupo específico ou Papel específico.

**Movimentação da atividade**
Como deve ser a definição do responsável pela etapa quando a solicitação for movimentada para ela, de acordo com a forma de execução escolhida: individual ou conjunta.
Para atividade **individual**, as opções disponíveis são:

- **Seleção de uma pessoa do grupo**: quando selecionada, determina que será necessário selecionar uma pessoa do grupo ou do papel ao movimentar a solicitação para essa etapa.

- **Envio para todos do grupo/papel (pool)**: quando selecionada, determina que ao movimentar a solicitação para essa etapa, ela será automaticamente enviada para todas as pessoas do grupo ou que exercem o papel e a primeira que a assumir se torna a responsável por executar essa etapa.

Para atividade **conjunta**, as opções disponíveis são:

- **Seleção de múltiplas pessoas**: quando selecionada, determina que será necessário selecionar mais de uma pessoa do grupo ou que exerce o papel ao movimentar a solicitação para essa etapa.

- **Atribuição para todos do grupo/papel**: quando selecionada, determina que ao movimentar a solicitação para essa etapa, ela será automaticamente enviada para todas as pessoas do grupo ou que exercem o papel para que a etapa possa ser executada por quaisquer pessoas até que o percentual de consenso seja atingido.

**Consenso para conclusão**
Percentual de consenso que é necessário atingir para que a etapa seja considerada concluída, ou seja, percentual de pessoas que devem assumir a etapa e tomar a mesma decisão para que a solicitação possa ser movimentada para a próxima. Por padrão, o consenso é definido em 100%. Esse campo somente é exibido ao selecionar a opção Atividade conjunta.

**17.** Em **Acompanhamento**, assinale as opções que representam quem deve ser notificado quando a solicitação chegar ou sair dessa etapa.

As opções disponíveis são:

- **Notificar responsável**: quando assinalada, determina que uma notificação sobre o início dessa etapa será enviada ao responsável por ela.

- **Notificar solicitante**: quando assinalada, determina que uma notificação sobre o início dessa etapa será enviada ao solicitante.

- **Notificar gestor**: quando assinalada, determina que uma notificação sobre o início dessa etapa será enviada ao gestor do processo.

Importante!

Independentemente das opções assinaladas, a notificação não é enviada para quem realizou a ação.

EXEMPLO 1
Uma pessoa movimenta a solicitação para uma etapa na qual ela mesma é a responsável. Mesmo que a opção **Notificar responsável** esteja assinalada, ela não receberá a notificação, visto que a ação foi feita por ela mesma.

EXEMPLO 2
O gestor do processo movimenta a solicitação (como responsável ou gestor) para uma etapa na qual a opção **Notificar gestor** está assinalada. Neste caso, ele não receberá a notificação, apenas os outros gestores do processo receberão.

O mesmo ocorre para todos os tipos de notificação, incluindo a de substituto.

EXEMPLO
Se a pessoa A é substituta da pessoa B e movimenta a solicitação para uma etapa onde a pessoa B é responsável, a pessoa A (substituta) não será notificada. Apenas a pessoa B e outras pessoas substitutas dela serão notificadas.

Nota:

As notificações podem ser enviadas na [Central de notificações](/pages/viewpage.action?pageId=233763951) ou por *e-mail*, dependendo de como foi feita a [configuração](/pages/viewpage.action?pageId=233763976) das opções de envio no perfil pessoal, bem como quais opções estão disponíveis para uso na empresa, que podem ter sido configuradas de forma [global](/pages/viewpage.action?pageId=235597328) – para todas as empresas – ou por [empresa](/pages/viewpage.action?pageId=235597350).

**18.** Clique na aba **Prazo** e defina as informações relacionadas à conclusão dessa etapa do processo.

**Expediente**
Expediente que será considerado na execução dessa etapa. O expediente é utilizado nos cálculos de prazo final e atraso da etapa. São exibidos para seleção os expedientes que existem no recurso [Expediente](/pages/viewpage.action?pageId=233766840).

**Prazo por tempo**
Tempo, em horas, dentro do qual essa etapa precisa ser concluída. Essas horas, juntamente com o expediente selecionado, também são consideradas para determinar o prazo final de conclusão da etapa. Esse tempo começa a ser contado a partir do momento no qual a solicitação chega nessa etapa.

EXEMPLO DE CÁLCULO
→ O expediente selecionado está configurado como: de **Segunda à Sexta das 8:00 às 18:00**.
→ O tempo para conclusão da etapa é **1 hora**.
→ A solicitação chegou nessa etapa às **17:30** de uma **Terça-feira**.
→ Sendo assim, o prazo final de conclusão da etapa será **Quarta-feira** às **8:30**. Depois das 08:30, a etapa será considerada atrasada.

**19.** Clique em **Salvar rascunho** – localizado no lado direito da barra superior – para salvar as configurações feitas no componente **Atividade**.

**20.** Na mensagem exibida, clique em **Ok, entendi**.

## Configurar regras para anexos

---

****

        Your browser does not support the HTML5 video element

**01.** No [diagrama](/pages/viewpage.action?pageId=860252119) do processo, clique no componente **Atividade**para o qual deseja configurar as regras para os anexos das solicitações.

**02.** Na aba **Geral**, clique em **Configurações de anexo** – localizado na parte inferior – para definir as regras para os anexos necessários nessa etapa do processo.

As regras para anexos não são obrigatórias. Quando não são definidas, é permitido deixar a etapa sem anexos ou adicionar qualquer tipo e qualquer quantidade de anexos, visto que nenhuma validação é feita.

Dica!

[Clique aqui](/pages/viewpage.action?pageId=860252092) para entender como as regras para anexos funcionam antes de configurá-las.

**03.** Para definir que a etapa não deve receber anexos, ative a opção **Proibir anexos**.

**Proibir anexos**
Quando ativada, determina que não é permitido anexar nenhum arquivo nessa etapa.

**04.** Se a etapa permitirá anexos, clique em ![](/download/attachments/862123505/adicionar.png?version=1&modificationDate=1724417107993&api=v2) **Adicionar regra de anexo na atividade** para definir a regra.

**05.** Em **Regra geral**, escolha como o anexo deve ser, selecionando uma **condição** e informando uma **quantidade**, caso a condição permita.

As condições disponíveis são:

- **igual a**;
- **maior que**;
- **maior ou igual a**;
- **menor que**;
- **menor ou igual a**;
- **qualquer um**.

 CLIQUE AQUI E VEJA ALGUNS EXEMPLOS

→ O anexo dever ser **maior ou igual a** **2**.

Significa que é **obrigatório** anexar **pelo menos dois** anexos – podendo adicionar **mais** – nessa etapa.

→ O anexo dever ser **menor que 4**.

Significa que é permitido adicionar **até três** anexos nessa etapa ou deixá-la sem anexo.

→ O anexo deve ser **qualquer um**.

Significa que é permitido adicionar **qualquer tipo** e **quantidade** de anexo nessa etapa ou deixá-la sem anexo.

Dica!

Veja mais exemplos de utilização das **regras gerais** [clicando aqui](https://tdn.totvs.com/pages/viewpage.action?pageId=860252092#Plataforma%E2%9D%99Regrasparaanexosemsolicita%C3%A7%C3%B5es-Regrageral).

**06.** Se desejar, clique em **Adicionar regra específica** para determinar algumas características exigidas para o anexo.

**07.** Escolha a **característica** do anexo para compor a regra específica.

As condições disponíveis são:

- **a extensão**;
- **o nome do arquivo**;
- **o nome e a extensão**;
- **condição avançada:** quando selecionada, é necessário criar a regra a partir de uma expressão que utiliza os caracteres ***** (**asterisco**), **|** (**pipe**) e **!** (**exclamação**). Mais detalhes sobre essa opção podem ser obtidos no **passo 10**.

**08.** Agora, escolha a **condição** que essa característica precisa atender.

As condições disponíveis são:

- **igual a**;
- **diferente de**;
- **contendo**.

Se a condição selecionada for **contendo**, ainda é possível escolher:

- **início**;
- **meio**;
- **fim**.

**09.** Por fim, informe os **termos** que precisam ou não constar no nome ou na extensão do anexo, de acordo com a **característica** e a **condição** selecionadas.

 CLIQUE AQUI E VEJA ALGUNS EXEMPLOS

→ O anexo deve ser **qualquer um** com **a extensão igual a** **.zip**.

Significa que é obrigatório adicionar qualquer anexo que tenha a extensão **.zip**.

→ O anexo deve ser **maior ou igual a 0** com **a extensão igual a** **.log**.

Significa que é permitido adicionar **um** ou **mais** anexos com a extensão **.log** ou deixar a etapa sem anexos.

→ O anexo deve ser **igual a 1** com **o nome e extensão contendo** no nome o termo **boleto** no**início** e na extensão o termo **.pdf**no**fim**.

Significa que é obrigatório adicionar **um** anexo que tenha o termo **boleto** no **início** do seu **nome** e que seja um documento do tipo **PDF**.

Dica!

Veja mais exemplos de utilização das **regras específicas**[clicando aqui](https://tdn.totvs.com/pages/viewpage.action?pageId=860252092#Plataforma%E2%9D%99Regrasparaanexosemsolicita%C3%A7%C3%B5es-Regraespec%C3%ADfica).

Para remover as condições selecionadas para a regra específica, clique em **Remover** ![](/download/attachments/862123505/remover.png?version=1&modificationDate=1724417108093&api=v2) – localizado no fim da composição da regra.

**10.** Se a opção selecionada para a regra específica for **condição avançada**, é possível definir a regra utilizando uma expressão que pode conter os caracteres ***** (**asterisco**), **|** (**pipe**) e **!** (**exclamação**).  

- ***** (**asterisco**): permite deixar livre para ter ou não quaisquer caracteres antes ou depois dele.

- **|** (**pipe**): significa "**ou**" e permite definir múltiplos padrões.

- **!** (**exclamação**): significa "**diferente de**" ou "**proibido**" e permite barrar um padrão.

 CLIQUE AQUI E VEJA ALGUNS EXEMPLOS

→ O anexo deve ser **qualquer um** com **condição avançada** **!*.zip**.

É permitido adicionar **qualquer tipo **de anexo com a extensão **diferente** de **.zip** ou deixar a etapa sem anexos. A extensão **.zip** é **proibida**.

→ O anexo deve ser **maior ou igual a 2** com **condição avançada** ***.pdf|*.jpg**.

É obrigatório adicionar **pelo menos 2** anexos que tenham uma das extensões permitidas: **.pdf ou .jpg**.

→ O anexo deve ser **igual a 1** com **condição avançada *fatura*.pdf.**

É obrigatório adicionar **um** anexo que contenha o termo **fatura** no nome e com a extensão **.pdf**.

Dica!

Veja mais detalhes e mais exemplos de utilização das **regras avançadas**[clicando aqui](https://tdn.totvs.com/pages/viewpage.action?pageId=860252092#Plataforma%E2%9D%99Regrasparaanexosemsolicita%C3%A7%C3%B5es-Regraavan%C3%A7ada).

Para remover as condições definidas para a regra avançada, clique em **Remover** ![](/download/attachments/862123505/remover.png?version=1&modificationDate=1724417108093&api=v2) – localizado no fim da composição da regra.

**11.** Em **Mensagem de erro caso não atenda a regra**, defina uma mensagem ou uma instrução para ajudar o responsável que está executando essa etapa quando o anexo que ele adicionou não está atendendo a essa regra.

 CLIQUE AQUI E VEJA ALGUNS EXEMPLOS

→ **Se a regra for**: O anexo deve ser **maior ou igual a 1**.

**A mensagem pode ser**: Você precisa anexar pelo menos 1 arquivo de qualquer tipo. Se desejar, pode anexar mais de 1.

→ **Se a regra for**: O anexo deve ser **igual a 2**.

**A mensagem pode ser**: Você precisa anexar 2 arquivos de qualquer tipo. Não é permitido adicionar mais de 2.

→ **Se a regra for**: O anexo deve ser **maior ou igual a 3** com **a extensão igual a** **.pdf**.

**A mensagem pode ser**: Você precisa anexar pelo menos 3 documentos do tipo PDF. Se desejar, pode anexar mais de 3.

**12.** Clique em **Salvar**.

Ao salvar, a regra passa a ser exibida em **Regras criadas**. As regras são exibidas em ordem de criação, da mais recente para a mais antiga.

É possível editar ou remover as regras criadas clicando em **Ações**![](/download/attachments/862123505/a%C3%A7%C3%B5es.png?version=1&modificationDate=1724270817640&api=v2)– localizado no lado direito da regra – e, em seguida, em **Editar** ou **Excluir**. Ao editar ou excluir uma regra, a ordem de exibição não é alterada, ou seja, elas continuam sendo exibidas em ordem de criação, da mais recente para a mais antiga.

Para adicionar mais regras, clique em ![](/download/attachments/862123505/adicionar.png?version=1&modificationDate=1724417107993&api=v2) **Adicionar regra de anexo na atividade**.

**13.** Ao concluir a configuração de todas as regras desejadas, clique em **Fechar**![](/download/attachments/862123505/cancelar.png?version=1&modificationDate=1739295940193&api=v2)– localizado no canto superior direito.

**14.** Clique em **Salvar rascunho** – localizado no lado direito da barra superior – para salvar as alterações feitas no componente **Atividade**.

**15.** Na mensagem exibida, clique em **Ok, entendi**.

### Editar regra para anexos

---

****

        Your browser does not support the HTML5 video element

**01.** No [diagrama](/pages/viewpage.action?pageId=860252119) do processo, clique no componente **Atividade** do qual deseja editar as regras para os anexos das solicitações.

**02.** Na aba **Geral**, clique em **Configurações de anexo** – localizado na parte inferior.

**03.** Em **Regras criadas**, localize a regra que deseja editar e clique em **Ações**![](/download/attachments/862123505/a%C3%A7%C3%B5es.png?version=1&modificationDate=1724270817640&api=v2)– localizado no lado direito da regra.

**04.** Clique em **Editar**.

**05.** Modifique as condições da regra conforme desejado.

**06.** Clique em **Salvar edição**.

A edição de uma regra não altera a ordem de exibição delas, ou seja, elas continuam sendo exibidas em ordem de criação, da mais recente para a mais antiga.

**07.** Ao concluir a edição de todas as regras desejadas, clique em **Fechar**![](/download/attachments/862123505/cancelar.png?version=1&modificationDate=1739295940193&api=v2)– localizado no canto superior direito.

**08.** Clique em **Salvar rascunho** – localizado no lado direito da barra superior – para salvar as alterações feitas no componente **Atividade**.

**09.** Na mensagem exibida, clique em **Ok, entendi**.

### Excluir regra para anexos

---

****

        Your browser does not support the HTML5 video element

**01.** No [diagrama](/pages/viewpage.action?pageId=860252119) do processo, clique no componente **Atividade** do qual deseja excluir as regras para os anexos das solicitações.

**02.** Na aba **Geral**, clique em **Configurações de anexo** – localizado na parte inferior.

**03.** Em **Regras criadas**, localize a regra que deseja excluir e clique em **Ações**![](/download/attachments/862123505/a%C3%A7%C3%B5es.png?version=1&modificationDate=1724270817640&api=v2)– localizado no lado direito da regra.

**04.** Clique em **Excluir**.

**05.** Na mensagem de confirmação exibida, clique em **Excluir regra**.

Não é possível restaurar uma regra que foi excluída.

A exclusão de uma regra não altera a ordem de exibição das demais, ou seja, elas continuam sendo exibidas em ordem de criação, da mais recente para a mais antiga.

**06.** Ao concluir a exclusão de todas as regras desejadas, clique em **Fechar**![](/download/attachments/862123505/cancelar.png?version=1&modificationDate=1739295940193&api=v2)– localizado no canto superior direito.

**07.** Clique em **Salvar rascunho** – localizado no lado direito da barra superior – para salvar as alterações feitas no componente **Atividade**.

**08.** Na mensagem exibida, clique em **Ok, entendi**.

Fique atento!

Esta documentação é válida a partir da atualização** Voyager (2.0)**. Se você utiliza uma atualização anterior, ela pode conter informações diferentes das quais você vê na sua plataforma.


<!-- anchors: Plataforma❙Atividade-FalandodecomponenteAtividade..., Plataforma❙Atividade-VertourguiadodocomponenteAtividade, Plataforma❙Atividade-ConfigurarcomponenteAtividade, content_@gerais, content_@especificas, content_@avancadas, content_@mensagens, Plataforma❙Atividade-Configurarregrasparaanexos, content_@gerais-2, content_@especificas-2, content_@avancadas-2, content_@mensagens-2, Plataforma❙Atividade-Editarregraparaanexos, Plataforma❙Atividade-Excluirregraparaanexos -->
