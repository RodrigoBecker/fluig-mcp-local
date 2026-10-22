---
title: "Plataforma ❙ Mecanismos de atribuição"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=868251705"
scraped_at: "2026-03-09T04:15:39.003Z"
depth: 3
anchors: 40
child_links: 68
---

# Plataforma ❙ Mecanismos de atribuição

Consulte a documentação correta:

Esta documentação refere-se ao novo editor de processos da plataforma. Caso esteja utilizando o editor de processos atual, acesse [Configurar mecanismo de atribuição](/pages/viewpage.action?pageId=265783517). 

IDIOMA

# Falando de mecanismos de atribuição...

---

Os mecanismos de atribuição são instrumentos que permitem definir as possíveis pessoas que podem ser responsáveis em um processo, de acordo com os critérios estabelecidos pelo próprio mecanismo escolhido.

Os mecanismos podem ser utilizados para:

- **definir os gestores do processo**: configurado no próprio [processo](https://tdn.totvs.com/pages/viewpage.action?pageId=860245005#Plataforma%E2%9D%99Editordeprocesso-Definirgestorparaoprocesso), permite definir quais são as pessoas que terão o poder de representar qualquer outra pessoa envolvida no processo, bem como receber notificações de acompanhamento das solicitações;

- **definir quem pode abrir solicitações do processo**: configurado na etapa inicial do processo – componente [Início](/pages/viewpage.action?pageId=862118990), permite definir quais são as pessoas que podem abrir solicitações do processo;

- **definir os responsáveis por cada etapa do processo**: configurado em cada etapa do processo – componente [Atividade](/pages/viewpage.action?pageId=862123505), permite definir quais são as pessoas que podem ser responsáveis por receber a solicitação quando ela chegar em cada uma das etapas do processo.

Importante!

Quando não há um mecanismo de atribuição configurado em uma etapa do processo:

- **se for a etapa inicial**: qualquer pessoa com cadastro ativo na plataforma pode abrir solicitações desse processo;

- **se for uma etapa comum**: ao movimentar a solicitação para essa etapa, é necessário selecionar uma pessoa para recebê-la, sendo permitido selecionar qualquer pessoa com cadastro ativo na plataforma.

![](/download/attachments/868251705/mecanismos-de-atribui%C3%A7%C3%A3o.png?version=5&modificationDate=1742579323800&api=v2)

## Objetivo dos mecanismos

---

Os mecanismos de atribuição têm como principal objetivo direcionar as solicitações de processos de forma automatizada, facilitando a atribuição de responsabilidades.

Eles visam agilizar o andamento das solicitações, atribuindo cada etapa aos respectivos responsáveis, evitando gargalos, distribuindo as etapas entre grupos de pessoas e definindo responsabilidades claras.

## Tipos de mecanismos

---

Por padrão, existem cinco tipos de mecanismos de atribuição disponíveis para uso atualmente: Qualquer pessoa, Grupo específico, Papel específico, Por campo de formulário e Pessoa específica.

A seguir é detalhado o funcionamento de cada um dos mecanismos.

### Qualquer pessoa

---

Esse mecanismo permite definir que qualquer pessoa com cadastro ativo na plataforma pode ser a responsável pela etapa na qual foi configurado, ou seja, qualquer pessoa pode receber a solicitação quando ela for enviada para essa etapa ou qualquer pessoa pode abrir solicitações do processo, caso seja a etapa inicial.

Quando a solicitação for movimentada da etapa anterior para a etapa que possui esse mecanismo configurado, é necessário selecionar uma pessoa para recebê-la.

Nota:

Esse mecanismo não pode ser utilizado na definição de gestor do processo.

BENEFÍCIOS DO USO
Oferece flexibilidade para processos simples ou de baixo impacto, onde o próprio solicitante sabe para quem deve enviar a solicitação.

CUIDADOS COM O USO
Não é recomendado para etapas críticas ou com alta prioridade, pela falta de responsabilidade clara, ou para etapas que envolvem dados confidenciais.

EXEMPLO DE USO
Em um processo de **Suporte técnico** para a área de TI, é permitido que qualquer pessoa que encontre dificuldades ou tenha algum problema com qualquer ferramenta utilizada na empresa abra um chamado, podendo ser de erro, de permissão, de dúvida, solicitando ajuda etc.

Neste caso, podemos definir o mecanismo de atribuição dessa etapa – componente [Início](/pages/viewpage.action?pageId=862118990) do processo – como:

| Etapa | Tipo de mecanismo |
| --- | --- |
| Etapa | Tipo de mecanismo |
| Abrir chamado | Qualquer pessoa |

→ Significa que qualquer pessoa da empresa pode abrir um chamado para solicitar suporte.

****

        Your browser does not support the HTML5 video element

### Grupo específico

---

Esse mecanismo permite definir:

- **na gestão do processo**: que apenas um grupo específico de pessoas são as gestoras do processo, ou seja, podem representar qualquer outra pessoa envolvida no processo, bem como receber notificações de acompanhamento das solicitações;

- **nas etapas do processo**: que apenas um grupo específico de pessoas são as responsáveis pela etapa na qual foi configurado, ou seja, apenas essas pessoas podem receber a solicitação quando ela for enviada para essa etapa ou apenas essas pessoas podem abrir solicitações do processo, caso seja a etapa inicial.

Ao selecionar esse mecanismo na gestão do processo ou nas configurações de uma etapa, é necessário informar qual é o grupo específico de pessoas.

Em seguida, para a etapa, também é necessário definir como deve ser a sua execução – se individual ou conjunta.

Nota:

A forma de execução – individual ou conjunta – não está disponível para definição na etapa inicial do processo, visto que a solicitação somente pode ser aberta por uma única pessoa, nem para a definição de gestor do processo.

#### Individual

---

A etapa deve ser executada por uma única pessoa, ou seja, apenas uma pessoa do grupo específico deve executar essa etapa. Nesse caso, é necessário definir, também, se apenas uma pessoa do grupo deve receber a solicitação quando ela for movimentada ou se a solicitação deve ser enviada para todas as pessoas do grupo e a primeira que a assumir se torna a responsável por executar a etapa:

- **Seleção de uma pessoa do grupo**: quando a solicitação for movimentada da etapa anterior para a etapa que possui esse mecanismo e essa forma de execução configurados, é necessário selecionar uma pessoa do grupo para recebê-la;

- **Envio para todos do grupo (pool)**: quando a solicitação for movimentada da etapa anterior para a etapa que possui esse mecanismo e essa forma de execução configurados, ela será automaticamente enviada para todas as pessoas do grupo e a primeira que a assumir se torna a responsável por executar essa etapa.

#### Conjunta

---

A etapa deve ser executada por várias pessoas, ou seja, mais de uma pessoa do grupo específico deve executar a etapa. Nesse caso, é necessário definir, também, se várias pessoas do grupo devem receber a solicitação quando ela for movimentada ou se a solicitação deve ser enviada para todas as pessoas do grupo para que possa ser executada por quaisquer pessoas até que o percentual de consenso seja atingido:

- **Seleção de múltiplas pessoas**: quando a solicitação for movimentada da etapa anterior para a etapa que possui esse mecanismo e essa forma de execução configurados, é necessário selecionar mais de uma pessoa do grupo para recebê-la;

- **Atribuição para todos do grupo**: quando a solicitação for movimentada da etapa anterior para a etapa que possui esse mecanismo e essa forma de execução configurados, ela será automaticamente enviada para todas as pessoas do grupo para que a etapa possa ser executada por quaisquer pessoas até que o percentual de consenso seja atingido.

Ao definir essa forma de execução para a etapa, é necessário definir, também, o percentual de consenso para conclusão: 

- **Consenso para conclusão:** percentual de consenso que é necessário atingir para que a etapa seja considerada concluída, ou seja, percentual de pessoas que devem assumir a etapa e tomar a mesma decisão para que a solicitação possa ser movimentada para a próxima. Por padrão, o consenso é definido em 100%.

BENEFÍCIOS DO USO
Indicado para processos que envolvem vários departamentos, garantindo que qualquer integrante das equipes possa assumir as solicitações e evitar gargalos.

CUIDADOS COM O USO
Quando exige consenso, pode deixar o andamento do processo um pouco mais lento.

EXEMPLO DE USO
Em um processo de **Pagamento de fornecedor**, a última etapa é executada pela área de Contas a pagar da empresa, que é formada por 5 colaboradores. Todos eles são aptos a assumir essa etapa e efetuar o pagamento propriamente dito, mas a solicitação deve ser assumida por apenas uma pessoa.

Desta forma, podemos definir o mecanismo de atribuição dessa etapa – componente [Atividade](/pages/viewpage.action?pageId=862123505) – como:

| Etapa | Tipo de mecanismo | Possíveis responsáveis pela etapa | Forma de execução da etapa | Forma de envio da solicitação |
| --- | --- | --- | --- | --- |
| Efetuar pagamento | Grupo específico | Integrantes do grupo Contas a pagar | Atividade individual | Envio para todos do grupo (pool) |

→ Significa que, quando a solicitação for enviada para a etapa Efetuar pagamento, todas as pessoas do grupo Contas a pagar verão a solicitação como pendente e ela pode ser assumida por qualquer uma das pessoas. Assim que uma pessoa assumir a solicitação, ela se torna responsável por efetuar o pagamento e a solicitação deixa de ser exibida como uma pendência para o restante das pessoas do grupo. Portanto, o mecanismo de atribuição facilita a distribuição das atividades entre o grupo, permitindo que, quando uma pessoa finalizar sua atividade atual, ela pode assumir a próxima pendente, dando vazão constante às solicitações.

****

        Your browser does not support the HTML5 video element

### Papel específico

---

Esse mecanismo permite definir:

- **na gestão do processo**: que apenas as pessoas que exercem um papel específico são as gestoras do processo, ou seja, podem representar qualquer outra pessoa envolvida no processo, bem como receber notificações de acompanhamento das solicitações;

- **nas etapas do processo**: que apenas as pessoas que exercem um papel específico são as responsáveis pela etapa na qual foi configurado, ou seja, apenas essas pessoas podem receber a solicitação quando ela for enviada para essa etapa ou apenas essas pessoas podem abrir solicitações do processo, caso seja a etapa inicial.

Ao selecionar esse mecanismo na gestão do processo ou nas configurações de uma etapa, é necessário informar qual é o papel específico.

Em seguida, para a etapa, também é necessário definir como deve ser a sua execução – se individual ou conjunta.

Nota:

A forma de execução – individual ou conjunta – não está disponível para definição na etapa inicial do processo, visto que a solicitação somente pode ser aberta por uma única pessoa, nem para a definição de gestor do processo.

#### Individual

---

A etapa deve ser executada por uma única pessoa, ou seja, apenas uma pessoa que exerce o papel específico deve executar essa etapa. Nesse caso, é necessário definir, também, se apenas uma pessoa que exerce o papel deve receber a solicitação quando ela for movimentada ou se a solicitação deve ser enviada para todas as pessoas que exercem o papel e a primeira que a assumir se torna a responsável por executar a etapa:

- **Seleção de uma pessoa do papel**: quando a solicitação for movimentada da etapa anterior para a etapa que possui esse mecanismo e essa forma de execução configurados, é necessário selecionar uma pessoa que exerce o papel para recebê-la;

- **Envio para todos do papel (pool)**: quando a solicitação for movimentada da etapa anterior para a etapa que possui esse mecanismo e essa forma de execução configurados, ela será automaticamente enviada para todas as pessoas que exercem o papel e a primeira que a assumir se torna a responsável por executar essa etapa.

#### Conjunta

---

A etapa deve ser executada por várias pessoas, ou seja, mais de uma pessoa que exercem o papel específico deve executar a etapa. Nesse caso, é necessário definir, também, se várias pessoas que exercem o papel devem receber a solicitação quando ela for movimentada ou se a solicitação deve ser enviada para todas as pessoas que exercem o papel para que possa ser executada por quaisquer pessoas até que o percentual de consenso seja atingido:

- **Seleção de múltiplas pessoas**: quando a solicitação for movimentada da etapa anterior para a etapa que possui esse mecanismo e essa forma de execução configurados, é necessário selecionar mais de uma pessoa que exerce o papel para recebê-la;

- **Atribuição para todos do papel**: quando a solicitação for movimentada da etapa anterior para a etapa que possui esse mecanismo e essa forma de execução configurados, ela será automaticamente enviada para todas as pessoas que exercem o papel para que a etapa possa ser executada por quaisquer pessoas até que o percentual de consenso seja atingido.

Ao definir essa forma de execução para a etapa, é necessário definir, também, o percentual de consenso para conclusão: 

- **Consenso para conclusão:** percentual de consenso que é necessário atingir para que a etapa seja considerada concluída, ou seja, percentual de pessoas que devem assumir a etapa e tomar a mesma decisão para que a solicitação possa ser movimentada para a próxima. Por padrão, o consenso é definido em 100%.

BENEFÍCIOS DO USO
Indicado para etapas que exigem determinadas competências ou experiência para executar a ação necessária, tornando as responsabilidades claras e usufruindo da expertise e das habilidades de cada função dentro da empresa.

CUIDADOS COM O USO
É recomendado revisar e atualizar regularmente os papéis para que não fiquem obsoletos, fazendo com que as solicitações se percam ou sejam direcionadas para pessoas que não exercem mais o papel definido.

EXEMPLO DE USO
Em um processo de **Lançamento de campanha de marketing**, é necessário que os vice-presidentes da empresa estejam de acordo com o conteúdo e com a abordagem da campanha para que ela seja lançada ao mercado. Sendo assim, uma das etapas do processo é a Aprovação dos vice-presidentes.

Desta forma, podemos definir o mecanismo de atribuição dessa etapa – componente [Atividade](/pages/viewpage.action?pageId=862123505) – como:

| Etapa | Tipo de mecanismo | Possíveis responsáveis pela etapa | Forma de execução da etapa | Forma de envio da solicitação | Consenso |
| --- | --- | --- | --- | --- | --- |
| Aprovação VPs | Grupo específico | Integrantes do grupo Vice-presidentes | Atividade conjunta | Envio para todos do grupo (pool) | 80% |

→ Significa que, quando a solicitação for enviada para a etapa Aprovação VPs, todas as pessoas do grupo Vice-presidentes verão a solicitação como pendente e ela poderá ser assumida por qualquer uma das pessoas. É necessário que 80% das pessoas do grupo assumam a etapa e tomem a mesma ação (aprovar) para que o consenso seja atingido e a solicitação siga adiante. Assim, o mecanismo de atribuição garante que a maioria dos vice-presidentes estejam cientes e de acordo com a campanha para que ela seja lançada ao mercado, evitando qualquer tipo de desencontro de informações ou mal-entendidos.

****

        Your browser does not support the HTML5 video element

### Por campo de formulário

---

Esse mecanismo permite definir que apenas a pessoa informada em um campo do formulário da solicitação em alguma etapa anterior é a responsável pela etapa na qual foi configurado, ou seja, apenas essa pessoa recebe a solicitação quando ela for enviada para essa etapa.

Ao selecionar esse mecanismo nas configurações de uma etapa, é necessário informar qual é o campo do formulário de onde será obtida essa pessoa.

Importante!

É possível utilizar alguns tipos de campo – aberto para digitação, combo, pesquisa – na configuração do mecanismo. Porém, alguns talvez não façam sentido para quem vai responder o formulário, pelo fato do mecanismo interpretar apenas códigos ou IDs (código do usuário, código do papel, código do grupo etc.), ou seja, o mecanismo precisa receber um código como resposta do formulário.

EXEMPLO
O campo **Gestor** é do tipo **Texto simples** (aberto para digitação) e será utilizado no mecanismo de atribuição. Para que o mecanismo consiga interpretar a pessoa que será informada no campo para direcionar a solicitação, a resposta no campo teria que ser o código da matrícula do gestor, ao invés do seu nome, o que dificulta bastante o preenchimento.

Por isso, a forma mais simples de configurar esse mecanismo é utilizando um campo de seleção – combo ou pesquisa – configurando um *dataset* para ele – padrão ou desenvolvido sobre a plataforma – e selecionando sempre um **código** (ID) como **Valor**. Assim, quem responder o formulário vai selecionar um nome, mas o mecanismo automaticamente vai considerar o código da matrícula desse nome selecionado para direcionar a solicitação.

Se o formulário vinculado ao processo não foi criado no novo editor de formulários e o campo for do tipo Pesquisa, ao configurar um *dataset* para ele, automaticamente é criada uma cópia oculta do campo com o prefixo **hidden_** no **nome** e no **código**. Portanto, é esse **campo cópia** que deve ser selecionado no mecanismo de atribuição.

EXEMPLO
O campo de pesquisa que será utilizado no mecanismo de atribuição é o **Gestor direto**, com o código **gestor**. Ao configurar o *dataset* para o campo, automaticamente será criado um campo oculto com nome e código **hidden_gestor**, sendo esse o campo que deve ser selecionado ao configurar o mecanismo de atribuição.

Isso não ocorre quando o formulário vinculado ao processo foi criado no novo editor de formulários.

Quando a solicitação for movimentada da etapa anterior para a etapa que possui esse mecanismo configurado, ela é enviada automaticamente para a pessoa que consta no campo do formulário que foi definido no mecanismo.

Nota:

Esse mecanismo não pode ser utilizado na etapa inicial do processo, visto que ele depende de uma definição vinda de uma etapa anterior à etapa na qual ele está configurado, nem para a definição de gestor do processo.

BENEFÍCIOS DO USO
Por permitir a atribuição dinâmica de responsabilidade, é recomendado para etapas onde a responsabilidade varia de acordo com as informações fornecidas ao longo do processo.

CUIDADOS COM O USO
Por depender da informação que consta em um campo, o formulário precisa estar bem construído, precisa solicitar a informação de forma objetiva e instruir o solicitante a preencher a informação correta para que ela seja útil no direcionamento da etapa.

EXEMPLO DE USO
Em um processo de **Solicitação de acesso à sistema**, o solicitante precisa informar quem é o seu gestor e por qual motivo ele precisa do acesso à ferramenta para a qual ele está solicitando. Antes de ser encaminhada para a área de TI, responsável por liberar os acessos, a solicitação será enviada para o gestor do solicitante para que ele aprove ou não a liberação do acesso. O gestor responsável pela aprovação varia de acordo com o solicitante.

Desta forma, podemos definir o mecanismo de atribuição da aprovação do acesso – componente [Atividade](/pages/viewpage.action?pageId=862123505) – como:

| Etapa | Tipo de mecanismo | Responsável pela etapa |
| --- | --- | --- |
| Aprovação do gestor | Por campo de formulário | Pessoa informada no campo Gestor |

→ Significa que, quando a solicitação for enviada para a etapa Aprovação do gestor, a pessoa responsável por ela e que receberá a solicitação será a que foi informada no campo Gestor do formulário do processo. Assim, o mecanismo de atribuição garante que cada solicitação seja direcionada diretamente à pessoa responsável, facilitando a gestão e a aprovação dos pedidos de acesso.

****

        Your browser does not support the HTML5 video element

### Pessoa específica

---

Esse mecanismo permite definir que apenas uma pessoa específica é a responsável pela etapa na qual foi configurado, ou seja, apenas essa pessoa recebe a solicitação quando ela for enviada para essa etapa ou apenas essa pessoa pode abrir solicitações do processo, caso seja a etapa inicial.

Ao selecionar esse mecanismo nas configurações de uma etapa, é necessário informar quem é a pessoa específica.

Quando a solicitação for movimentada da etapa anterior para a etapa que possui esse mecanismo configurado, ela é enviada automaticamente para a pessoa específica que foi definida no mecanismo.

Nota:

Se a pessoa específica definida nesse mecanismo estiver inativa quando a solicitação for movimentada para a etapa, a solicitação é enviada para o gestor do processo.

BENEFÍCIOS DO USO
Por direcionar para uma pessoa específica, é recomendado para etapas que lidam com informações confidenciais, dados críticos ou sigilosos ou para aprovações que apenas uma pessoa é autorizada a fazer.

CUIDADOS COM O USO
Se a etapa não é crítica nem sigilosa, definir apenas uma pessoa responsável pode gerar gargalos e fazer com que a solicitação fique parada por muito tempo, pode sobrecarregar a pessoa responsável com tarefas que poderiam ser distribuídas entre várias pessoas, além do risco de atrasos no processo se a pessoa não estiver disponível em algum período ou dia.

EXEMPLO DE USO
Em um processo de **Aprovação de contrato**, a pessoa responsável por aprovar e liberar a assinatura do contrato é o diretor da área de Contratos da empresa. Apenas esse diretor pode ter acesso às informações necessárias para aprovar ou não a assinatura dos contratos.

Desta forma, podemos definir o mecanismo de atribuição da aprovação do contrato – componente [Atividade](/pages/viewpage.action?pageId=862123505) – como:

| Etapa | Tipo de mecanismo | Responsável pela etapa |
| --- | --- | --- |
| Aprovação do diretor | Pessoa específica | Maria da Cunha |

→ Significa que, quando a solicitação for enviada para a etapa Aprovação do diretor, a pessoa responsável por ela e que receberá a solicitação é a Maria da Cunha, apenas ela pode decidir essa aprovação. Sendo assim, o mecanismo de atribuição garante que a responsabilidade pela aprovação do contrato seja claramente definida e que apenas a pessoa configurada possa executar essa etapa, assegurando eficiência, responsabilidade e sigilo das informações no processo.

****

        Your browser does not support the HTML5 video element

## Exemplos de uso

---

Reunimos aqui vários cenários nos quais podem ser aplicados os diferentes mecanismos de atribuição. Os exemplos contam com o mecanismo, o cenário onde será aplicado e o que acontece quando a solicitação for movimentada para a etapa no qual foi configurado.

São demonstrados exemplos com alguns tipos de mecanismos de atribuição. Clique em cada cenário para ver seus detalhes.

[Abrir/fechar todos os exemplos](#)

#### Apenas pessoas que fazem parte de um grupo podem solicitar a compra de um equipamento.

---

MECANISMO

→ **Grupo específico**

CENÁRIO

Em um processo de **Compra de equipamento eletrônico**, como *notebooks*, monitores, *mouse*, teclado, fones de ouvido, dentre outros, apenas algumas pessoas da área de Infraestrutura têm autorização para solicitar a compra para a área de Compras da empresa. Ou seja, o colaborador que tem alguma necessidade de equipamento, deve, primeiramente, entrar em contato com a área de infraestrutura para notificá-los sobre sua necessidade. Eles analisarão se já possuem o equipamento solicitado ou se será necessário comprá-lo. Sendo necessário comprá-lo, as pessoas que exercem a função de gerenciar os equipamentos – compra, troca, controle de inventário, descarte etc. – da área de Infraestrutura podem abrir uma solicitação de compra do equipamento necessário.

Desta forma, podemos definir o mecanismo de atribuição dessa etapa – componente [Início](/pages/viewpage.action?pageId=862118990) do processo – como:

| Etapa | Tipo de mecanismo | Possíveis responsáveis pela etapa |
| --- | --- | --- |
| Solicitar compra de equipamento | Papel específico | Integrantes do grupo Gestão de equipamentos |

→ Significa que apenas as pessoas que exercem a função de gerenciar os equipamentos eletrônicos da empresa podem abrir solicitações para a área de Compras. Assim, o mecanismo de atribuição garante que apenas as pessoas autorizadas e que possuem as informações necessárias para decidirem se uma compra deve ser solicitada ou não abram solicitações, evitando assim, compras desnecessárias, informações desencontradas, inventário desatualizado, dentre outras questões.

#### A aprovação de despesas precisa ser feita pelo responsável de acordo com a sua categoria.

---

MECANISMO

→ **Por campo de formulário**

CENÁRIO

Em um processo de **Aprovação de despesas**, o solicitante preenche algumas informações, tais como o valor, a justificativa e a categoria da despesa. A aprovação dessa despesa varia de acordo com sua categoria (viagem, equipamento, *marketing*, contratação etc.), ou seja, dependendo da categoria, a aprovação precisa ser enviada para o gestor responsável por ela. Quando o solicitante escolhe a categoria, o campo Gestor responsável é automaticamente preenchido.

Desta forma, podemos definir o mecanismo de atribuição dessa etapa – componente [Atividade](/pages/viewpage.action?pageId=862123505) do processo – como:

| Etapa | Tipo de mecanismo | Possíveis responsáveis pela etapa |
| --- | --- | --- |
| Aprovação do gestor | Por campo de formulário | Pessoa informada no campo Gestor responsável |

→ Significa que, quando a solicitação for enviada para a etapa Aprovação do gestor, a pessoa responsável por ela e que receberá a solicitação será a que foi informada no campo Gestor responsável do formulário, que foi preenchido automaticamente ao selecionar a categoria da despesa. Assim, o mecanismo de atribuição garante que cada solicitação seja direcionada diretamente à pessoa responsável, facilitando a gestão e a aprovação das despesas e, também, evitando transtornos de ter que transferir a solicitação para outra pessoa, por exemplo.

#### Apenas as pessoas que fazem parte da gestão podem solicitar a abertura de vagas para o RH

---

MECANISMO

→ **Papel específico**

CENÁRIO

Em um processo de **Solicitação de abertura de vaga**, somente os gestores das áreas podem abrir solicitações quando identificam a necessidade devido ao aumento de demanda, saída de um colaborador ou uma nova posição estratégica na equipe. Essa solicitação precisa passar por algumas aprovações, como o RH, diretores e gestores executivos.

Desta forma, podemos definir o mecanismo de atribuição dessa etapa – componente [Início](/pages/viewpage.action?pageId=862118990) do processo – como:

| Etapa | Tipo de mecanismo | Possíveis responsáveis pela etapa |
| --- | --- | --- |
| Solicitar abertura de vaga | Papel específico | Pessoas que exercem o papel Gestores |

→ Significa que apenas quem exerce o papel de gestão de pessoas dentro das áreas da empresa pode abrir uma solicitação de abertura de vaga. Assim, o mecanismo de atribuição garante que apenas as pessoas autorizadas e que possuem as informações necessárias para a abertura de uma vaga abram solicitações.

#### A recompra de ações precisa ser aprovada por 90% dos conselheiros da empresa.

---

MECANISMO

→ **Grupo específico**

CENÁRIO

Em um processo de **Recompra de ações**, é necessário que os membros do conselho da empresa estejam de acordo com a estratégia apresentada pela equipe executiva, bem como com o preço que será pago por cada ação e com a proposta de valor que essa decisão trará para a companhia. Sendo assim, uma das etapas do processo é a Aprovação do conselho.

Desta forma, podemos definir o mecanismo de atribuição dessa etapa – componente [Atividade](/pages/viewpage.action?pageId=862123505) do processo – como:

| Etapa | Tipo de mecanismo | Possíveis responsáveis pela etapa | Forma de execução da etapa | Forma de envio da solicitação | Consenso |
| --- | --- | --- | --- | --- | --- |
| Aprovação do conselho | Grupo específico | Integrantes do grupo Conselheiros | Atividade conjunta | Envio para todos do grupo (pool) | 90% |

→ Significa que, quando a solicitação for enviada para a etapa Aprovação do conselho, todas as pessoas do grupo Conselheiros verão a solicitação como pendente e ela poderá ser assumida por qualquer uma das pessoas. É necessário que 90% das pessoas do grupo assumam a etapa e tomem a mesma ação (aprovar) para que o consenso seja atingido e a solicitação siga adiante. Assim, o mecanismo de atribuição garante que a maioria dos conselheiros esteja ciente e de acordo com a proposta de recompra para que ela seja aplicada no mercado, evitando qualquer tipo de desencontro de informações ou mal-entendidos.

#### O responsável por aprovar um orçamento varia de acordo com o valor.

---

MECANISMO

→ **Por campo de formulário**

CENÁRIO

Em um processo de **Aprovação de orçamento**, é necessário informar alguns dados, dentre eles, o valor total do orçamento a ser aprovado. O responsável por aprovar esse orçamento varia de acordo com o valor, visto que existem alçadas de aprovação para o gestor, para o gestor executivo e para o diretor. Ao ser informado o valor no formulário, o campo Responsável pela aprovação é automaticamente preenchido e a etapa Aprovação deve ser enviada para essa pessoa.

Desta forma, podemos definir o mecanismo de atribuição dessa etapa – componente [Atividade](/pages/viewpage.action?pageId=862123505) do processo – como:

| Etapa | Tipo de mecanismo | Possíveis responsáveis pela etapa |
| --- | --- | --- |
| Aprovação | Por campo de formulário | Pessoa informada no campo Responsável pela aprovação |

→ Significa que, quando a solicitação for enviada para a etapa Aprovação, a pessoa responsável por ela e que receberá a solicitação será a que foi informada no campo Responsável pela aprovação do formulário, que foi preenchido automaticamente ao informar o valor do orçamento a ser aprovado. Assim, o mecanismo de atribuição garante que cada solicitação seja direcionada diretamente à pessoa responsável, facilitando a gestão e a aprovação dos orçamentos e, também, evitando que os gestores recebam solicitações fora da sua alçada de aprovação e tenham que transferi-las para outro responsável.

## Dúvidas frequentes

---

Confira aqui algumas dúvidas frequentes sobre os mecanismos de atribuição.

[Abrir/fechar todas as dúvidas](#)

#### O que acontece se a pessoa específica configurada no mecanismo não estiver disponível?

---

A solicitação ficará parada na etapa. Se o processo possuir gestores, apenas eles poderão fazer alguma ação no lugar da pessoa específica.

#### Posso atribuir uma etapa do processo a mais de um grupo simultaneamente?

---

Não. No momento não é possível definir mais de um grupo como responsável por uma etapa ou pela gestão de um processo.

#### O que acontece se a etapa for atribuída a um papel e nenhuma pessoa exerce esse papel no momento?

---

A solicitação ficará parada nessa etapa e ninguém conseguirá assumi-la, a menos que o processo possua gestores, pois eles conseguem assumir a solicitação. Por essa razão, é muito importante sempre revisar e atualizar os papéis para que eles representem a atual organização das funções dentro da empresa.

#### É possível alterar o mecanismo de atribuição depois que a atividade/etapa foi criada e configurada?

---

Sim, é possível. Porém, se o processo já possui uma versão publicada, essa alteração implicará em uma nova versão do processo. E, para que a alteração seja aplicada nas próximas solicitações abertas, é necessário publicar o processo novamente.

Importante!

As solicitações que já estavam abertas e em andamento antes da alteração, permanecem com as configurações da versão antiga. Apenas novas solicitações que forem abertas depois da publicação da nova versão do processo terão as alterações.

#### Como garantir que a solicitação não fique parada por muito tempo em uma etapa sem ser assumida?

---

Não há como ter essa garantia. Porém, existem recursos e boas práticas que podem contribuir para que isso não aconteça, tais como:

- **configurar a etapa para notificar o responsável**: assim, quando a solicitação chegar na etapa, o responsável é notificado e fica ciente de que existe uma pendência sob sua responsabilidade;

- **definir pelo menos um gestor para o processo**: assim, caso o solicitante não esteja disponível no momento em que a solicitação chegar na etapa (está ausente, por exemplo), o gestor consegue assumir ou transferir a solicitação para outra pessoa;

- **sempre revisar grupos e papéis**: assim, garante-se que eles estejam sempre refletindo a atual organização da empresa, evitando que as solicitações se percam ao longo do processo.

#### É possível utilizar o mecanismo Qualquer pessoa em etapas que envolvem dados confidenciais?

---

Sim, é possível utilizar, mas **não é recomendado**. Etapas que lidam com dados confidenciais ou críticos devem ser encaminhadas para as pessoas autorizadas a ter acesso e a tomar alguma decisão com base neles.

#### O que acontece se o campo utilizado para atribuição for excluído do formulário?

---

Existem duas situações que podem ocorrer nesse cenário:

- **Quando o formulário pertence ao processo em questão, ou seja, foi criado para esse processo:**uma mensagem informando que o mecanismo de atribuição de determinada etapa não possui o campo de formulário informado e não será possível publicar o processo contendo essa alteração no formulário, a menos que o mecanismo seja alterado. Isso ocorre, porque, ao editar o formulário do processo, automaticamente é gerada uma nova versão, tanto do formulário quanto do processo, sendo necessário publicá-las para que as alterações sejam aplicadas nas próximas solicitações que serão abertas.

- **Quando o formulário já existia e foi apenas relacionado ao processo em questão**: ocorrerá uma inconsistência quando o responsável tentar movimentar a solicitação da etapa anterior para a etapa que possui o mecanismo por campo de formulário configurado, informando que não foi possível encontrar o responsável pela próxima etapa e a solicitação não será movimentada.

Fique atento!

Esta documentação é válida a partir da atualização** Voyager (2.0)**. Se você utiliza uma atualização anterior, ela pode conter informações diferentes das quais você vê na sua plataforma.


<!-- anchors: Plataforma❙Mecanismosdeatribuição-Falandodemecanismosdeatribuição..., Plataforma❙Mecanismosdeatribuição-Objetivodosmecanismos, Plataforma❙Mecanismosdeatribuição-Tiposdemecanismos, Plataforma❙Mecanismosdeatribuição-Qualquerpessoa, Plataforma❙Mecanismosdeatribuição-Grupoespecífico, Plataforma❙Mecanismosdeatribuição-Individual, Plataforma❙Mecanismosdeatribuição-Conjunta, Plataforma❙Mecanismosdeatribuição-Papelespecífico, Plataforma❙Mecanismosdeatribuição-Individual.1, Plataforma❙Mecanismosdeatribuição-Conjunta.1, Plataforma❙Mecanismosdeatribuição-Porcampodeformulário, Plataforma❙Mecanismosdeatribuição-Pessoaespecífica, Plataforma❙Mecanismosdeatribuição-Exemplosdeuso, toggleAll-1, Plataforma❙Mecanismosdeatribuição-@1Apenaspessoasquefazempartedeumgrupopodemsolicitaracompradeumequipamento., content_@1, Plataforma❙Mecanismosdeatribuição-@2Aaprovaçãodedespesasprecisaserfeitapeloresponsáveldeacordocomasuacategoria., content_@2, Plataforma❙Mecanismosdeatribuição-@3ApenasaspessoasquefazempartedagestãopodemsolicitaraaberturadevagasparaoRH, content_@3, Plataforma❙Mecanismosdeatribuição-@4Arecompradeaçõesprecisaseraprovadapor90%dosconselheirosdaempresa., content_@4, Plataforma❙Mecanismosdeatribuição-@5Oresponsávelporaprovarumorçamentovariadeacordocomovalor., content_@5, Plataforma❙Mecanismosdeatribuição-Dúvidasfrequentes, toggleAll-2, Plataforma❙Mecanismosdeatribuição-@saiba-mais-1Oqueaconteceseapessoaespecíficaconfiguradanomecanismonãoestiverdisponível?, content_@saiba-mais-1, Plataforma❙Mecanismosdeatribuição-@saiba-mais-2Possoatribuirumaetapadoprocessoamaisdeumgruposimultaneamente?, content_@saiba-mais-2, Plataforma❙Mecanismosdeatribuição-@saiba-mais-3Oqueaconteceseaetapaforatribuídaaumpapelenenhumapessoaexerceessepapelnomomento?, content_@saiba-mais-3, Plataforma❙Mecanismosdeatribuição-@saiba-mais-4Épossívelalteraromecanismodeatribuiçãodepoisqueaatividade/etapafoicriadaeconfigurada?, content_@saiba-mais-4, Plataforma❙Mecanismosdeatribuição-@saiba-mais-5Comogarantirqueasolicitaçãonãofiqueparadapormuitotempoemumaetapasemserassumida?, content_@saiba-mais-5, Plataforma❙Mecanismosdeatribuição-@saiba-mais-6ÉpossívelutilizaromecanismoQualquerpessoaemetapasqueenvolvemdadosconfidenciais?, content_@saiba-mais-6, Plataforma❙Mecanismosdeatribuição-@saiba-mais-7Oqueaconteceseocampoutilizadoparaatribuiçãoforexcluídodoformulário?, content_@saiba-mais-7 -->
