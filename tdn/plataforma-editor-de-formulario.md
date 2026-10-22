---
title: "Plataforma ❙ Editor de formulário"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=915177100"
scraped_at: "2026-03-09T04:38:21.511Z"
depth: 3
anchors: 11
child_links: 62
---

# Plataforma ❙ Editor de formulário

Consulte a documentação correta:

Esta documentação refere-se ao Editor de formulário atual da plataforma. Caso esteja utilizando o Editor de formulário clássico, acesse a documentação disponível em [Plataforma | Configurar formulário](https://tdn.totvs.com/x/g-vuDQ).

# Falando de editor de formulário...

---

O editor de formulários conta com diversos recursos, campos e propriedades para os formulários que são criados especificamente para um processo. A seguir, são detalhados todos os campos e procedimentos necessários para a construção de um formulário seguindo as boas práticas de desenvolvimento. O editor de formulários é dividido em quatro partes distintas que serão detalhadas nesta documentação.

![](/download/attachments/915177100/novo%20editor%20de%20formul%C3%A1rios.png?version=1&modificationDate=1761231108700&api=v2)

## Configurações iniciais

---

Algumas configurações iniciais como título, versão, configuração e visualização estão localizados no topo do editor de formulários. Abaixo detalharemos cada um destes itens.

- **Título do formulário**: insira um título para o formulário que está sendo criado.
- **Versão**: rascunho ou o número da versão liberada. Exemplo V. 01.
- **Regras do formulário**: clique no ícone para visualizar ou incluir novas regras para o formulário.
- **Histórico de versões**: utilizado para acessar o histórico de versões e modificações do formulário. **Saiba mais aqui**.
- **Visualizar formulário**: clique no ícone de pré-visualização
- **Configurações do formulário**: define se a descrição dos campos será padrão ou campo de formulário.
- **Criar com IA**: utilizado para solicitar a criação de formulários de forma facilitada.
- **Salvar**: utilizado para salvar o formulário pertencente ao processo.

Informação

Nos formulários criados a partir dos novos editores,****não existe a opção ou botão de publicação individual. Isso porque a publicação do formulário ocorre automaticamente quando o diagrama de processo ao qual ele está vinculado é publicado.

Assim, não é possível publicar um formulário de forma isolada — ele só se torna disponível após a publicação do processo relacionado.

## Adicionar campos ao formulário

---

Os campos do formulário estão à esquerda do editor e podem ser adicionados em qualquer ordem e quantidade. Para reorganizar a posição de um campo, basta clicar sobre ele e arrastá-lo para o local desejado. Os campos disponíveis são:

- **Campo simples**: validar propósito de uso
- **Área de texto**: permite a inclusão de texto no formulário que está sendo criado.
- **Texto**: permite a inclusão de texto.
- **Combo**: permite a inclusão de um campo do tipo combobox com opções pré-definidas no formulário ou com opções carregadas dinamicamente de um *dataset*.
- **Lista**: permite a inclusão de campos do tipo *list* com opções pré-definidas no formulário ou com opções carregadas dinamicamente de um *dataset*.
- **Seleção única**: permite a inclusão de campos do tipo *radio* *button*, permitindo a seleção de apenas uma opção das cadastradas pelo usuário.
- **Múltipla escolha**: permite a inclusão de campos do tipo *checkbox*, permitindo a seleção de múltiplas opções pelo usuário.
- **Pesquisa**: permite a inclusão de um campo do tipo pesquisa com informações carregadas a partir do dataset selecionado.
- **Avaliação**: permite a inclusão de um campo do tipo *rating star*, onde o usuário pode selecionar uma escala de 0 a 5 estrelas.
- **Tabela**: permite a inclusão dos outros campos disponíveis para a construção do formulário.
- **Painel**: permite agrupar diferentes campos dentro de uma mesma área, facilitando a organização e a leitura das informações. Este recurso é utilizado para criar seções ou delimitar conjuntos de campos por contexto.
- **Abas**: permite a inclusão de abas dentro do formulário que está sendo criado, é possível incluir os outros campos disponíveis para a construção do formulário.
- **Imagem**: permite a inclusão de uma imagem diretamente do desktop do usuário. O tamanho máximo suportado para upload é de 10MB.
- **Divisor**: adiciona uma linha horizontal para separar visualmente os campos do formulário.

Informação

Todos os campos possuem a propriedade **Código**, preenchida automaticamente para facilitar sua identificação. Essa propriedade é editável e pode ser alterada conforme a necessidade. No entanto, **não é permitido atribuir o mesmo código a dois campos diferentes**. Caso isso ocorra, o campo duplicado será destacado em vermelho para sinalizar o ajuste necessário. Além disso, não é possível salvar o formulário enquanto houver campos com códigos repetidos.

## Duplicar campos

---

Todos os campos possuem a ação de duplicação, acessível por meio do ícone ![](/download/attachments/915177100/flaticon-copy%20%281%29.png?version=2&modificationDate=1772743386367&api=v2). Para campos que têm regras configuradas, uma mensagem é exibida perguntando se deseja copiar as regras do campo original para o campo duplicado. Caso desejado, clique em **Sim**.

## Propriedade dos campos

---

Todos os campos disponíveis para a construção do formulário possuem propriedades que podem ser configuradas no momento da inclusão do campo ao formulário. A seguir, detalharemos todas as propriedades disponíveis para cada tipo de campo.

| Campo | Propriedades |
| --- | --- |
| Campo | Propriedades |
| Campo simples | Configurações gerais do campo
Códigocódigo único de identificação do campo. Este código pode ser editado para o valor desejado, sendo apenas necessário ser um código único, ou seja, que não se repita. Pode ser usado em personalizações via código.Tipodefine se o campo será do tipo texto, numérico ou calendário. Campos definidos como numéricos permitem a criação de fórmulas de cálculo. Saiba mais aqui.Títulotítulo que será atribuído ao campo do formulário.Tamanho do campousado para definir o tamanho do campo no formulário.
Ajuda e preenchimento
Texto de ajudautilizado para diversas funcionalidades do formulário.Dica de preenchimentodica que descreve o valor esperado para o campo.Limite de caractereso limite de caracteres do campo pode ser ajustado usando os ícones de seta ou inserindo o valor diretamente na propriedade. Se nenhum valor for definido, o limite padrão é 4.000 caracteres.Máscaraformato no qual o valor do campo será exibido. As opções da máscara são:Sem máscaraCPFCNPJCEPDataHoraData e HoraTelefone fixoTelefone celularPlaca de carroIP
Privacidade e dados
Usar Analytics? Quando assinalado, os dados recebidos por este campo serão enviados ao Analytics. Este campo pode ser usado para coletar dados sensíveis. Saiba mais aqui. |
| Área de texto | Configurações gerais do campo
Códigocódigo único de identificação do campo. Este código pode ser editado para o valor desejado, sendo apenas necessário ser um código único, ou seja, que não se repita. Pode ser usado em personalizações via código.Títulotítulo que será atribuído ao campo do formulário.Alturausado para definir a altura do campo no formulário. O tamanho inicial padrão é 6. Tamanho do campousado para definir o tamanho do campo no formulário.
Ajuda e preenchimento
Texto de ajudainstruções para o usuário preencher o formulário.Dica de preenchimentodica que descreve o valor esperado para o campo.Limite de caracteresO limite de caracteres do campo pode ser ajustado usando os ícones de seta ou inserindo o valor diretamente na propriedade. Se nenhum valor for definido, o limite padrão é 4.000 caracteres.
Privacidade e dados
Usar Analytics?Quando assinalado, os dados recebidos por este campo serão enviados ao Analytics. Este campo pode ser usado para coletar dados sensíveis. Saiba mais aqui |
| Texto | Configurações gerais do campo
Códigocódigo único de identificação do campo. Este código pode ser editado para o valor desejado, sendo apenas necessário ser um código único, ou seja, que não se repita. Pode ser usado em personalizações via código.Textopossível incluir parágrafos utilizando a tecla Enter.Tamanho do campousado para definir o tamanho do campo no formulário.
Personalização
Alinhamento e estilodefine os alinhamentos que o campo vai receber, assim como os estilos aplicáveis negrito, itálico e sublinhado.Tamanho do textodefine o tamanho da fonte utilizada no campo. Sendo possível definir entre o tamanho do parágrafo 7 ao 1.Cor do textodefine a cor do texto incluído no campoCor do lado esquerdo do fundocor que define o lado esquerdo do campo.Cor do lado direito do fundocor que define o lado direito do campo. Altura do espaço internodefine a altura do espaço interno do campo. Quanto maior o valor, maior será o espaço interno do campo. O valor máximo suportado é 100.Arredondar bordasusado para arredondar as bordas do campo. |
| Combo | Configurações gerais do campo
Códigocódigo único de identificação do campo. Este código pode ser editado para o valor desejado, sendo apenas necessário ser um código único, ou seja, que não se repita. Pode ser usado em personalizações via código.Títulotítulo que será atribuído ao campo do formulário.Tamanho do campousado para definir o tamanho do campo no formulário.
Ajuda e preenchimento
Texto de ajudainstruções para o usuário preencher o formulário.Valor do campodetermina se as opções para seleção do campo serão definidas a partir de um dataset ou pré-definidas diretamente na construção do formulário.Para usar informações pré-definidas no formulário, selecione a opção Valores manuais.Para usar informações pré-definidas no formulário, selecione a opção Valores dinâmicos. 
Ao escolher obter os valores manuais, será necessário incluir os valores nos campos Título da opção e Valor.Ao escolher obter os valores dinâmicos a partir de um dataset, é necessário clicar no botão Configurar dataset e preencher os campos abaixo:DatasetDefine o dataset que será utilizado para fornecer os valores.OpçõesDefine uma coluna para que suas linhas sejam opções do campo para o usuário final.OrdenaçãoDefine uma coluna para ordenar as opções disponíveis.ValorValor que será atribuído à opção do campo.Após preencher todos os campos necessários, clique em Salvar.Também é possível editar as informações no ícone  e excluir no ícone .

Privacidade e dados
Usar Analytics?Quando assinalado, os dados recebidos por este campo serão enviados ao Analytics. Este campo pode ser usado para coletar dados sensíveis. Saiba mais aqui |
| Listas | Configurações gerais do campo
Códigocódigo único de identificação do campo. Este código pode ser editado para o valor desejado, sendo apenas necessário ser um código único, ou seja, que não se repita. Pode ser usado em personalizações via código.Títulotítulo que será atribuído ao campo do formulário.Tamanho do campousado para definir o tamanho do campo no formulário.
Ajuda e preenchimento
Texto de ajudainstruções para o usuário preencher o formulário.Valor do campodetermina se as opções para seleção do campo serão definidas a partir de um dataset ou pré-definidas diretamente na construção do formulário.Para usar informações pré-definidas no formulário, selecione a opção Definidos. Para usar informações de um dataset escolha a opção Dataset.
Ao escolher obter os valores manuais, será necessário incluir os valores nos campos Título da opção e Valor.Ao escolher obter os valores dinâmicos a partir de um dataset, é necessário clicar no botão Configurar dataset e preencher os campos abaixo:DatasetDefine o dataset que será utilizado para fornecer os valores.OrdenaçãoDefine uma coluna para ordenar as opções disponíveis.OpçõesDefine uma coluna para que suas linhas sejam opções do campo para o usuário final.ValorDefine um identificador único da opção e não é exibido para o usuário final. Pode ser utilizado em personalizações via código.Após preencher todos os campos necessários, clique em Salvar.Também é possível editar as informações no ícone  e excluir no ícone .

Privacidade e dados
Usar AnalyticsQuando assinalado, os dados recebidos por este campo serão enviados ao Analytics. Este campo pode ser usado para coletar dados sensíveis. Saiba mais aqui |
| Seleção única | Configurações gerais do campo
Códigocódigo único de identificação do campo. Este código pode ser editado para o valor desejado, sendo apenas necessário ser um código único, ou seja, que não se repita. Pode ser usado em personalizações via código.Títulotítulo que será atribuído ao campo do formulário.Número de colunasdefine o número de colunas que o campo terá.Tamanho do campousado para definir o tamanho do campo no formulário.
Ajuda e preenchimento
Texto de ajudainstruções para o usuário preencher o formulário.
Opções
Título da opçãoinsira as opções que irão compor o campo. É possível alternar a posição das opções e excluí-las.Valorpropriedade que poderá ser utilizada para integrações ou tratativas no código. Não será exibido para o usuário final.
É possível adicionar quantas opções forem necessárias.

Privacidade e dados
Usar analytics?Quando assinalado, os dados recebidos por este campo serão enviados ao Analytics. Este campo pode ser usado para coletar dados sensíveis. Saiba mais aqui |
| Múltipla escolha | Configurações gerais do campo
Códigocódigo único de identificação do campo. Este código pode ser editado para o valor desejado, sendo apenas necessário ser um código único, ou seja, que não se repita. Pode ser usado em personalizações via código.Títulotítulo que será atribuído ao campo do formulário.Número de colunasdefine o número de colunas que o campo terá.Tamanho do campousado para definir o tamanho do campo no formulário.
Ajuda e preenchimento
Texto de ajudainstruções para o usuário preencher o formulário.
Opções
Título da opçãoinsira as opções que irão compor o campo. É possível alternar a posição das opções e excluí-las.Valorpropriedade que poderá ser utilizada para integrações ou tratativas no código. Não será exibido para o usuário final.
É possível adicionar quantas opções forem necessárias.

Privacidade e dados
Usar analytics?Quando assinalado, os dados recebidos por este campo serão enviados ao Analytics. Este campo pode ser usado para coletar dados sensíveis. Saiba mais aqui |
| Pesquisa | Configurações gerais do campo
Códigocódigo único de identificação do campo. Este código pode ser editado para o valor desejado, sendo apenas necessário ser um código único, ou seja, que não se repita. Pode ser usado em personalizações via código.Títulotítulo que será atribuído ao campo do formulário.Tamanho do campousado para definir o tamanho do campo no formulário.
Ajuda e preenchimento
Texto de ajudainstruções para o usuário preencher o formulário.
Configurar dataset
Abaixo do campo Texto de ajuda é exibido o botão Configurar dataset para realizar a configuração da pesquisa. Para isso, é necessário preencher os campos abaixo:DatasetDefine o dataset que será utilizado para fornecer os valores.OpçõesDefine uma coluna para que suas linhas sejam opções do campo para o usuário final.ValorDefine um identificador único da opção e não é exibido para o usuário final. Pode ser utilizado em personalizações via código.OrdenaçãoDefine uma coluna para ordenar as opções disponíveis.Limite de resultadosDefine o número máximo de registros retornados por consulta. Limitado a cem (100) registros.Limite de seleção de registrosDefine o número máximo que podem ser selecionados pelo usuário no momento do preenchimento do formulário. Limitado a cem (100) seleções de registros.Após preencher todos os campos necessários, clique em Salvar.Também é possível editar as informações no ícone  e excluir no ícone .
Privacidade e dados
Usar analytics?Quando assinalado, os dados recebidos por este campo serão enviados ao Analytics. Este campo pode ser usado para coletar dados sensíveis. Saiba mais aqui |
| Avaliação | Configurações gerais do campo
Códigocódigo único de identificação do campo. Este código pode ser editado para o valor desejado, sendo apenas necessário ser um código único, ou seja, que não se repita. Pode ser usado em personalizações via código.Títulotítulo que será atribuído ao campo do formulário.Tamanho do campousado para definir o tamanho do campo no formulário.
Ajuda e preenchimento
Texto de ajudainstruções para o usuário preencher o formulário.Íconeescolha entre os ícones disponíveis, que são: EstrelaSeleçãoFelizTristeCoraçãoEscala defina entre zero (0) ou dez (10).Exibir numeraçãoative essa opção para exibir valores numéricos correspondentes a cada etapa da escala.Marcadoresative para adicionar textos descritivos que contextualizam o início e o final da escala.Marcador inicialdefina o marcador de início. Por exemplo: Ruim.Marcador finaldefina o marcador de fim. Por exemplo: Bom.
Privacidade e dados
Usar analytics?Quando assinalado, os dados recebidos por este campo serão enviados ao Analytics. Este campo pode ser usado para coletar dados sensíveis. Saiba mais aqui |
| Tabela | Configurações gerais do campo
Códigocódigo único de identificação do campo. Este código pode ser editado para o valor desejado, sendo apenas necessário ser um código único, ou seja, que não se repita. Pode ser usado em personalizações via código.Títulotítulo que será atribuído ao campo do formulário.Nome do botão de inclusãobotão utilizado para adicionar novos registros na tabela, ou seja, uma nova linha.Ocultar título?quando habilitado o título da tabela ficará oculto.
Tabela principal
Tabela principalTitulo do campo será atribuído ao campo do formulário.
Privacidade e dados
O botão Enviar ao Analytics não é exibido neste campo, pois o campo em si não é enviado ao Analytics. Somente os campos adicionados dentro do campo Tabela podem ter essa configuração. Já o botão Adicionar dado sensível define apenas como as informações serão armazenadas na tabela. Este campo pode ser usado para coletar dados sensíveis. Saiba mais aqui |
| Painel | Configurações gerais do campo
Códigocódigo único de identificação do campo. Este código pode ser editado para o valor desejado, sendo apenas necessário ser um código único, ou seja, que não se repita. Pode ser usado em personalizações via código.Títulotítulo que será atribuído ao campo do formulário.
Personalização
Cor do títulodefine a cor que será utilizada no título.Cor do lado esquerdo do fundodefine a cor de fundo do lado esquerdo que será utilizada no painel.Cor do lado direito do fundodefine a cor de fundo do lado direito que está utilizada no painel. Íconeselecione um ícone para ser atribuído ao lado do título do painel.Permite abrir e fechar?habilite ou desabilite para que seja possível expandir e recolher o painel. Saiba mais sobre como configurar corretamente este recurso.Ícones para abrir e fechardefina o conjunto de ícones que representarão as ações de expandir e recolher os campos inseridos no painel |
| Abas | Configurações gerais do campo
Códigoo código é uma propriedade que poderá ser utilizada para integrações ou tratativas no código. Não será exibido para o usuário final.Títulopor padrão o campo é aberto com três abas, sendo necessário incluir título para cada uma das abas. 
Abas
Título da abadefina o título que será atribuído a aba.Códigopropriedade que poderá ser utilizada para integrações ou tratativas no código. Não será exibido para o usuário final.É possível ordenar as abas conforme a ordem necessária. Bastando clicar e segurar no ícone.É possível excluir uma aba clicando no ícone de lixeira. |
| Imagem | Configurações gerais do campo
Códigocódigo único de identificação do campo. Este código pode ser editado para o valor desejado, sendo apenas necessário ser um código único, ou seja, que não se repita. Pode ser usado em personalizações via código.Títulotítulo que será atribuído ao campo do formulárioTamanho do campousado para definir o tamanho do campo no formulário.
Upload
Selecione o arquivo através do botão Selecionar arquivo, ou arraste e solte o arquivo na área indicada.Alturadefine a altura da imagem adicionada ao campo.Larguradefine a largura da imagem adicionada ao campo.Manter proporçãoquando utilizado, mantém as proporções de altura e largura da imagem adicionada.Alinhamentodefine o alinhamento a imagem adicionada ao campo, sendo alinhamento à direita, central e à esquerda.ComportamentoPreencher: A imagem será ampliada para se ajustar a todo o espaço disponível. Podendo destorcer.Conter: A imagem será reduzida para se ajustar ao espaço disponível, mantendo suas proporções.Cobrir: A imagem ocupará todo o espaço disponível, sendo cortada se necessário. |
| Divisor | Configurações gerais do campo
Códigocódigo único de identificação do campo. Este código pode ser editado para o valor desejado, sendo apenas necessário ser um código único, ou seja, que não se repita. Pode ser usado em personalizações via código.Títulotítulo que será exibido junto ao divisor.
Ajuda e preenchimento
Texto de ajudasubtexto que será exibido abaixo do divisor.
Personalização
Espessuraespessura da linha do divisor, podendo ser pequena, média ou grandeCor do divisorusado para definir a cor do divisorÍconeícone que será exibido ao lado do divisor. |

## Mais ações em campos

---

Ao incluir campos no formulário, cada campo apresenta ações disponíveis no editor para auxiliar em sua configuração e manipulação. Veja abaixo quais são:

![](/download/attachments/915177100/calcular%20formula.png?version=1&modificationDate=1772742982170&api=v2)**Calcular fórmula**: Permite que campos **Simples** do tipo **Numérico** utilizem fórmulas para realizar cálculos com outros campos do formulário. Ao posicionar o cursor sobre o campo, o ícone é exibido. Ao clicar no ícone, a área **Calcular fórmula** é apresentado ao lado direito da tela. Nesse espaço, é possível montar fórmulas utilizando operações matemáticas básicas, como **soma**,**subtração**,**multiplicação** e **divisão**. Para iniciar a fórmula, digite **@** e informe o nome ou código do campo, ou utilize parênteses. Em seguida, adicione um operador matemático e continue a construção da fórmula conforme necessário.

![](/download/attachments/915177100/flaticon-copy%20%281%29.png?version=2&modificationDate=1772743386367&api=v2) **Duplicar campo**: Ao clicar neste ícone, é possível duplicar o campo selecionado, escolhendo entre copiar o campo com as regras já definidas ou duplicar somente o campo.

![](/download/attachments/915177100/flaticon-trash.png?version=1&modificationDate=1741797735310&api=v2) **Remover campo**: Ao clicar neste ícone, o campo selecionado será removido. Antes da exclusão, uma mensagem de confirmação será exibida.

## Regras do formulário

---

Ao criar ou editar um formulário de processo, é possível adicionar regras para serem validadas no momento de preenchimento. Abaixo vamos detalhar o conceito e como utilizar esse recurso:

**O que são as regras do formulário**

Regras de formulário são mecanismos que permitem configurar eventos específicos dentro de um formulário, acionados em determinadas atividades e campos. Esses eventos ocorrem exclusivamente em atividades normais ou na atividade inicial de um processo.

As ações disponíveis para esses eventos incluem:

- **Desabilitar um campo**: Impede que o usuário interaja com determinado campo.
- **Validar um valor**: Verifica se o valor inserido atende a critérios pré-definidos.
- **Definir um valor**: Atribui automaticamente um valor específico ao campo.
- **Ocultar um campo**: Remove temporariamente o campo da interface do usuário.

Ao configurar essas ações, um evento de formulário é gerado com os parâmetros estabelecidos, garantindo um comportamento automatizado e personalizado no preenchimento do formulário.

**01.** Depois de incluir e configurar todos os campos desejados para o formulário, clique no ícone ![](/download/attachments/915177100/flaticon-news.png?version=1&modificationDate=1743180836210&api=v2);

**02.** Clique em **Adicionar regra** para incluir uma nova regra e selecione as informações para definir a regra.

**Quando a solicitação chegar na atividade**Selecione a atividade na qual a regra será definida.

**o campo**Selecione o campo no qual irá receber a regra.

**do formulário será****Ocultado**: quando selecionada, determina que o campo será ocultado quando a solicitação estiver na atividade selecionada na regra.

**Exibido**: quando selecionada, determina que o campo será exibido somente quando a solicitação estiver na atividade selecionada na regra.

**Desabilitado**: quando selecionada, determina que o campo será exibido desabilitado quando a solicitação estiver na atividade selecionada na regra.

**Habilitado**: quando selecionada, determina que o campo será exibido habilitado quando a solicitação estiver na atividade selecionada na regra.

**Obrigatório**: quando selecionada, determina que o campo será de preenchimento obrigatório quando a solicitação estiver na atividade selecionada na regra.

**Opcional**: quando selecionada, determina que o campo será de preenchimento opcional quando a solicitação estiver na atividade selecionada na regra.

**Definido valor**: quando selecionada, determina que será atribuído um valor específico para o campo quando a solicitação estiver na atividade selecionada na regra. Nesse caso, é necessário definir o valor que será atribuído. Os valores são divididos em três categorias distintas, Usuário atual, Solicitação e Outros.

- Código do usuário
- Nome
- Nome completo
- E-mail
- Data atual
- Código da atividade
- Código da solicitação
- Usuário solicitante
- E-mail do solicitante
- Valor fixo

**Validado valor**: quando selecionada, determina que será executada uma validação no valor do campo quando a solicitação estiver na atividade selecionada na regra. Ao selecionar essa opção, é necessário definir os critérios que serão considerados na validação do campo.

**Validado formato**: quando selecionada, determina que será validado o formato satisfazendo as condições definidas.

**Executado eventos**: quando selecionada, determinada que um evento ocorrerá no campo quando a solicitação estiver na atividade selecionada na regra. Saiba mais sobre [Eventos de formulário](https://tdn.totvs.com/x/fvklE).

É possível filtrar regras já criadas no ícone ![](/download/attachments/915177100/flaticon-filter.png?version=1&modificationDate=1743793981083&api=v2)

## Usar Analytics?

---

Ao habilitar esta opção, os dados recebidos por este campo serão enviados ao Analytics, permitindo a realização das análises necessárias.

## Adicionar dado pessoal / sensível

---

Em alguns campos é possível marcar como dado sensível nos casos onde é necessário. Os seguintes campos apresentam essa característica. Abaixo, vamos detalhar como utilizar esta opção.

- Campo simples;
- Área de texto;
- Combo;
- Listas;
- Seleção única;
- Múltipla escolha;
- Tabela.

Mas o que são dados sensíveis?

Os dados sensíveis são um tipo específico de dado pessoal que, por sua natureza, exigem maior proteção. Eles revelam informações sobre a pessoa e, se forem expostos ou mal utilizados, podem causar discriminação, constrangimento, ou danos à liberdade e à privacidade do indivíduo.

EXEMPLO Para coletar o CPF de um indivíduo é necessário que o campo que realizará a coleta deste dado esteja protegido, marcando a opção **É um dado sensível?** no campo necessário.

**01.** Adicione o campo desejado no editor de formulários;

**02.** Nas propriedades do campo, localize o agrupador **Privacidade e dados** e clique em **Adicionar dado pessoal**;

**03.** Em **Tipo do dado**, selecione o tipo do dado que será coletado entre as opções abaixo:

- Nome
- E-mail
- CPF
- RG
- Carteira de habilitação
- Título de eleitor
- Carteira de trabalho
- Passaporte
- Outros

**04.** Defina se o dado coletado é sensível e precisa ser anonimizado. Nas opções **É um dado sensível?** e **Anonimizar este dado?** selecione sim, caso seja necessário. Ficará como nas imagens abaixo:

- [Habilitado](#)
- [Desabilitado](#)

![](/download/attachments/915177100/dado%20sens%C3%ADvel.png?version=1&modificationDate=1741789269447&api=v2)

![](/download/attachments/915177100/dado%20sens%C3%ADvel%20negativo.png?version=1&modificationDate=1741797229910&api=v2)

**05.** Em **Classificação** selecione uma das classificações disponíveis. Entre:

- Execução de contrato;
- Obrigação legal;
- Consentimento;
- Execução de políticas públicas;
- Estudo por órgão de pesquisa;
- Exercício regular de direito;
- Para a proteção da vida;
- Para tutela de saúde;
- Interesse legítimo;
- Proteção de credito.

**06.** Em**Justificativa**, informe uma justificativa para o dado ter sido considerado sensível.

**07.** No ícone ![](/download/attachments/915177100/flaticon-add-plus.png?version=1&modificationDate=1762545225423&api=v2) é possível adicionar mais de uma classificação e justificativa para o campo. Também é possível Remover o conjunto de classificação e justificativa através do botão **Remover**.

**08.** Após todas as configurações realizadas, clique em **Salvar**.

## Publicar o formulário

---

Para publicar um formulário criado no novo editor, é preciso **primeiro publicar o processo ao qual ele está vinculado**. Somente então a versão salva do formulário será efetivamente publicada.

Fique atento!

Esta documentação é válida a partir da atualização **Voyager (2.0)**. Se você utiliza uma atualização anterior, ela pode conter informações diferentes das quais você vê na sua plataforma.


<!-- anchors: Plataforma❙Editordeformulário-Falandodeeditordeformulário..., Plataforma❙Editordeformulário-Configuraçõesiniciais, Plataforma❙Editordeformulário-Adicionarcamposaoformulário, Plataforma❙Editordeformulário-Duplicarcampos, Plataforma❙Editordeformulário-Propriedadedoscampos, Plataforma❙Editordeformulário-Maisaçõesemcampos, Plataforma❙Editordeformulário-Regrasdoformulário, Plataforma❙Editordeformulário-UsarAnalytics?, Plataforma❙Editordeformulário-Adicionardadopessoal/sensível, sample, Plataforma❙Editordeformulário-Publicaroformulário -->
