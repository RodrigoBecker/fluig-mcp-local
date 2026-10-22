---
title: "Plataforma ❙ Configurar formulário"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=233765763"
scraped_at: "2026-03-09T04:06:39.522Z"
depth: 2
anchors: 2
child_links: 49
---

# Plataforma ❙ Configurar formulário

Consulte a documentação correta:

Esta documentação refere-se ao editor de processos atual da plataforma. Caso esteja utilizando o novo editor de processos, acesse a documentação disponível em [Plataforma | Editor de formulário](https://tdn.totvs.com/x/jH6MNg).

# Falando de configurar formulário...

---

Existem diversas propriedades que podem ser definidas para um formulário que está sendo criado especificamente para um processo. A seguir são detalhados os procedimentos necessários para definir essas configurações.

![](/download/attachments/233765763/Configurar%20formulario.PNG?version=1&modificationDate=1519127998000&api=v2)

## Configurar formulário

---

**01.** Depois de acionar **Criar formulário** a partir das configurações do processo, acionar **Configurações do formulário** na janela exibida.

**02.** Definir as informações solicitadas.

É possível editar o título e a descrição inserida previamente. As demais informações solicitadas são:

**Descrição principal dos registros**
Descrição que será atribuída aos registros do formulário ao criá-los. É possível escolher entre a descrição padrão e a descrição de relatório dos campos incluídos. Se não for incluído nenhum campo no formulário, apenas a opção Descrição padrão estará disponível para seleção. Na descrição padrão é exibida a data, no formato dia mês e ano, seguido do usuário que respondeu o formulário. Se for selecionada a descrição de relatório, será exibido o nome do campo e o valor que o usuário informou.

**Utilizar logo da empresa no formulário**Quando assinalado, determina que o logotipo definido para a empresa será adicionado ao formulário.

**Template**Estilo visual no qual o formulário será criado.

**03.** Em Conteúdo do formulário, inserir os campos desejados - que estão disponíveis na área **Adicionar campos** - para compor o formulário.

Para incluir um campo no formulário, basta clicar sobre ele na lista de campos disponíveis. Os campos podem ser incluídos em qualquer ordem e quantidade. Para alterar a ordem de um campo, basta clicar sobre ele e arrastá-lo para a posição desejada. Para excluir um campo incluído, acionar o ícone representado por um X, localizado canto superior direito do quadro correspondente ao campo. Os tipos de campo disponíveis são:

**Texto**Permite a inclusão de uma linha de texto.

**Número**
Permite a inclusão de dados numéricos.

**Calendário**
Permite a inclusão de uma data formatada, no padrão dd/mm/aaaa.

**Parágrafo**
Permite a inclusão de um texto.

**Combo**
Permite a inclusão de um campo do tipo *combobox* com opções pré-definidas ou com opções carregadas dinamicamente de um *dataset*.

**Lista**
Permite a inclusão de campos do tipo list com opções pré-definidas ou com opções carregadas dinamicamente de um *dataset*.

**Uma escolha**
Permite a inclusão de campos do tipo *radio* *button*, permitindo a seleção de apenas uma opção das cadastradas pelo usuário.

**Múltipla escolha**
Permite a inclusão de campos do tipo *checkbox*, permitindo a seleção de múltiplas opções pelo usuário.

**Múltiplos registros**
Permite a inclusão de uma tabela de múltiplos registros. Essa tabela pode ser utilizada para o cadastro de diversas informações em um único campo, sendo permitido ao usuário incluir quantas linhas for necessário ao preenchimento.

**Pesquisa**
Permite a inclusão de um campo do tipo pesquisa.

**Avaliação**
Permite a inclusão de um campo do tipo *rating star*, onde o usuário pode selecionar uma escala de 0 a 5 estrelas.

**04.** Acionar o ícone de edição, representado por um lápis e localizado no canto superior direito do quadro correspondente ao campo, e definir as configurações desejadas para o campo.

Cada campo possui opções específicas dependendo do tipo de dado que será incluído ou definido como padrão ou fonte de dados.

**Descrição**
Nome que será atribuído campo no formulário.

**Descrição de relatório**
Nome do campo que será exibido nos relatórios e poderá ser utilizado como Descrição principal dos registros, conforme visto anteriormente. Esse campo é preenchido automaticamente com base na descrição, podendo ser alterado.

**Dica de preenchimento**
*Placeholder* do campo, ou seja, a instrução que será exibida no campo quando um usuário estiver preenchendo o formulário.

**Valor**
Valor pré-definido para o campo e que suprime a dica de preenchimento, porém, o usuário poderá alterá-lo.

**Máscara**
Formato pré-definido no qual o valor do campo será exibido.

**Tamanho do campo**
Tamanho no qual o campo será exibido no formulário. As opções disponíveis são:

- Grande;
- Médio;
- Pequeno.

**Obrigatório**
Quando assinalado, determina que o preenchimento do campo será obrigatório e validado. Não está presente em todos os campos.

**Usar Analytics**
Quando assinalado, determina que os dados recebidos por esse campo serão enviados para a ferramenta de análise de dados Analytics. É permitido enviar dez campos do tipo Texto e dez campos do tipo Número. Essa opção não está presente em todos os campos, apenas para campos dos tipos Texto, Número e Parágrafo.

***Dataset***
Permite a seleção de um *dataset* para inclusão dinâmica de dados neles. Está presente nos campos Combo e Pesquisa.

**Valores definidos**
Quando selecionado, determina que as opções do campo serão definidas no formulário.

**Valores de dataset**
Quando selecionado, determina que as opções do campo serão obtidas a partir de um *dataset*.

**Campo descrição**
Colunas disponíveis no *dataset* do sistema.

***Preview***
*Preview* dos dados do *dataset* selecionado.

**Opções**
Opções estarão disponíveis para o usuário selecionar. Está presente nos campos do tipo Combo, Lista, Uma escolha, Múltipla escolha e múltiplos registros.

**Texto de inclusão**
Texto atribuído ao botão que será utilizado para incluir registros em um campo do tipo Múltiplos registros.

**Código para serviço de dados**
Código único para o campo que será utilizado em futuras consultas em desenvolvimentos sobre a plataforma.

**05.** Depois de incluir e configurar todos os campos desejados para o formulário, acionar **Regras do formulário**, localizado em Avançado.

Regras de formulário são eventos que podem ocorrer no formulário criado, em determinada atividade e em um campo específico. Estes eventos ocorrem apenas em atividades normais ou atividade de início de um processo.

Como ações, é possível escolher entre desabilitar um campo, validar valor, definir um valor e desaparecer com o campo na tela. Este procedimento gera um evento de formulário com as configurações definidas.

**06.** Na janela Regras do formulário, acionar **Adicionar**.

**07.** Selecionar as informações solicitadas para definir a regra.

As informações necessárias para definir uma regra são:

**Campo**
Campo para o qual a regra será definida.

**Atividade**
Atividade na qual a regra definida para o campo deve ser executada.

**Ação**
Ação que será executada para o campo na atividade definida. As opções disponíveis são:

- **Desabilitar**: quando selecionada, determina que o campo será exibido desabilitado quando a solicitação estiver na atividade selecionada na regra.
- **Desaparecer**: quando selecionada, determina que o campo não será exibido quando a solicitação estiver na atividade selecionada na regra.
- **Validar**: quando selecionada, determina que será executada uma validação no campo quando a solicitação estiver na atividade selecionada na regra. Ao selecionar essa opção, é necessário definir os critérios que serão considerados na validação do campo. Informações sobre como definir os critérios de validação podem ser obtidas no caminho alternativo Definir critérios de validação.
- **Definir valor**: quando selecionada, determina que será atribuído um valor específico para o campo quando a solicitação estiver na atividade selecionada na regra. Nesse caso, é necessário definir o valor que será atribuído. Informações sobre como definir esse valor podem ser obtidas no caminho alternativo Definir valor para campo.

É possível filtrar as regras inseridas a partir de Filtrar por atividades.

Importante

Campos de Múltiplos registros não permitem utilização de regras de formulário.

**08.** Para as regras em que foi selecionada a ação Validar, acionar o ícone representado por uma lupa que é exibido ao lado direito do campo Ação.

**09.** Na janela Configuração de regras, definir como as condições devem ser consideradas na regra.

**Satisfazer todas as condições**
Quando selecionado, determina que todas as condições definidas precisam ser satisfeitas para que a mensagem de validação seja emitida.

**Satisfazer uma das condições**
Quando selecionado, determina que basta apenas que uma das condições seja satisfeita para que a mensagem de validação seja emitida.

**Qual mensagem deve ser utilizada nesta validação?**
Mensagem que será emitida ao efetuar a validação e as condições definidas forem satisfeitas.

**10.** Selecionar as validações e/ou os campos disponíveis nos quadros Validações e Campos respectivamente para compor as condições que devem ser consideradas na validação, bem como o operador para cada condição.

**11.** Depois de definir todas as condições necessárias, acionar **Salvar** na janela Configuração de regras.

**12.** Para as regras em que foi selecionada a ação Definir valor, acionar o ícone representado por uma lupa que é exibido ao lado direito do campo Ação.

**13.** Na janela Configuração de regras, selecionar a informação que deve ser atribuída ao campo.

As opções disponíveis são:

**Valor específico**
Quando selecionado, determina que um valor predefinido será atribuído ao campo em questão.

O campo em branco vazio, que será exibido ao lado, é um valor específico que será atribuído ao campo em questão. Esse campo somente é exibido quando a opção de atribuição de valor selecionada é Valor customizado.

**Número da solicitação**
Quando selecionado, determina que o número da solicitação será atribuído ao campo em questão.****

**Usuário logado**Quando selecionado, determina que a matrícula do usuário autenticado será atribuída ao campo em questão.

**Data atual**
Quando selecionado, determina que a data corrente será atribuída ao campo em questão.

**Vazio**Quando selecionado, determina se o campo permanecerá igual ou diferente de vazio.

**E-mail**Quando selecionado, permite verificar se o e-mail incluído é um e-mail válido.

**CPF**Quando selecionado, permite verificar se o CPF incluído é um CPF válido.****

**CNPJ**Quando selecionado, permite verificar se o CNPJ incluído é um CNPJ válido.

**IP**Quando selecionado, permite verificar se a máscara do IP é válida.

**14.** Acionar **Salvar** na janela Configuração de regras.

**15.**Depois de definir todas as regras desejadas para o formulário, acionar **Salvar** na janela Regras do formulário.

**16.** Na janela de configuração dos campos do formulário, acionar **Ordenar campos do Analytics**, localizado em Avançado.

**17.** Na janela Ordenar campos do Analytics, definir a ordem de prioridade desejada para os campos nos quadros Campo fato e Campos texto por meio das setas de movimentação para cima e para baixo.

Campos fato são campos do tipo Numérico.

**18.**Depois de definir a ordem desejada para os campos, acionar **Salvar.**

**19**. Em todos os campos, exceto campo Avaliação, é possível configurar o item **Privacidade**, podendo dizer que este campo possui dado pessoal ou sensível, assegurando assim o sigilo da informação e a proteção de acesso a dados pessoais de forma não autorizada, seja acidentalmente ou de forma ilícita. 
Para isso, acione o botão **Adicionar dado pessoal**.

O item **Privacidade** se dá devido a implementação da regulamentação da **Lei Geral de Proteção de Dados Pessoais** (**LGPD** ou **LGPDP**) na organização.

Para mais informações e esclarecimentos de como a organização irá atuar mediante a conduta LGPD, [acesse aqui](https://tdn.totvs.com/x/jYupHg).

**20**. Na tela de **Adicionar dado pessoal**, preencha os campos, configurando de acordo com sua necessidade.

**Tipo:** permite selecionar um tipo de dado que será marcado como sensível ou oculto.
Os tipos disponíveis são: Nome, e-mail, CPF, RG, Carteira habilitação, Carteira trabalho, Título eleitor, Passaporte ou outros, dependendo do tipo de componente o qual a privacidade está sendo configurada.

**Este dado é sensível? **Habilite esta opção, para que o dado seja considerado sensível.****

Indica que o dado é classificado como sensível e que ele será informado no relatório de dados do usuário (Exportação de Dados).

É considerado sensível todo dado de origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização de caráter religioso, filosófico ou político, dado referente a saúde ou a vida sexual, dado genético ou biométrico, quando vinculado a uma pessoa natural.

**É possível anonimizar este dado? **Habilite esta opção, para que o dado possa ser ocultado.

Quando estiver com essa opção marcada, indica que o dado pode ser ocultado do banco de dados, caso o usuário, dono do dado, solicite a anonimização, porém os campos continuam aparecendo normalmente no formulário.

**Classificação e justificativa:**

**Classificação:** A classificação permite selecionar qual dos motivos gerou a necessidade de configuração da privacidade dos dados. 
Os tipos de classificação disponíveis são: Execução de contrato, Obrigação Legal, Consentimento, Execução de políticas públicas, Estudo por órgão de pesquisa, Exercício regular do direito, Para a proteção da vida, Para tutela de saúde, Interesse legítimo e Proteção de crédito.

**Justificativa: **Permite incluir uma justificativa por extenso, do motivo pelo qual o dado é solicitado e para que ele é utilizado.

Para inserir uma nova classificação e sua justificativa, acione o botão **Adicionar**, localizado ao lado do menu de **Classificação e justificativa**.

Para remover, acione o ícone da **Lixeira**, localizado ao lado direito da **Classificação e justificativa**.

**21**. Acione **Salvar,** para incluir a privacidade no campo.

**22.**Finalizadas as configurações desejadas para o formulário, acionar **Visualizar formulário** para verificar como ele será publicado, se desejado.

**23.**Depois de fechar a visualização do formulário, acionar **Salvar** para salvar todas as informações definidas para ele.

Importante!

Depois de acionar **Salvar**, as alterações feitas no formulário já serão válidas para novas solicitações do processo.

Fique atento!

Esta documentação é válida a partir da atualização**Crystal Mist (1.8.2)**. Se você utiliza uma atualização anterior, ela pode conter informações diferentes das quais você vê na sua plataforma.


<!-- anchors: Plataforma❙Configurarformulário-Falandodeconfigurarformulário..., Plataforma❙Configurarformulário-Configurarformulário -->
