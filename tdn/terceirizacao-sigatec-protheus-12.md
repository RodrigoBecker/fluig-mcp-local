---
title: "Terceirização (SIGATEC) - Protheus 12"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=236601804"
scraped_at: "2026-03-09T05:25:34.323Z"
depth: 4
anchors: 79
child_links: 202
---

# Terceirização (SIGATEC) - Protheus 12

Search

# Índice

# Objetivo

O objetivo deste módulo é gerenciar diversos tipos de serviços prestados ao cliente, tais como: Manutenção, Conservação, Segurança, Limpeza e outros. Dentre as principais ações está o gerenciamento de serviços de manutenção e consertos, mantidos pelas grandes empresas industriais ou comerciais para os produtos e equipamentos por elas fabricados ou vendidos, bem como as regras que norteiam todo o processo de manutenção e consertos.

Baseada nestes princípios, a TOTVS® desenvolveu o ambiente Gestão de Serviços, que tem como principal objetivo administrar os Orçamentos, os Contratos e os Serviços de Atendimentos, sejam eles em campo ou dentro de uma Central de Serviços.

Assim, controla todo o processo de administração e manutenção das bases de atendimento, que podem ser equipamentos (produtos) ou localizações físicas, além do corpo técnico envolvido, tais como Técnicos e/ou Atendentes.

- [Fluxos](#)
- [Integrações](#)

**Fluxo Operacional**

****

**Fluxo de Integração**

![](/download/attachments/236601804/Fluxo-Integra%C3%A7%C3%B5es-SIGATEC_temp.jpg?version=2&modificationDate=1464888805000&api=v2)

**Gestão de Serviços e Gestão de Contratos**

A Integração Gestão de Contratos com Gestão de Serviços atende as necessidades resultantes da prestação de Serviço de Locação de Equipamentos. A integração consolida a geração da base instalada e a ordem de serviço para instalação da base de forma automática no **Gestão de Serviços** sempre que um contrato com um ou mais itens da planilha, configurados para gerar base instalada, tiver seu *status* alterado para vigente.

**Gestão de Serviços e Gestão de Pessoal**

A Integração Gestão de Pessoal com Gestão de Serviços atende as necessidades resultantes dos atendentes técnicos relacionado ao cadastro de funcionários. A integração consolida a amarração com o funcionário para controle de turnos, escalas, agendas no **Gestão de Serviços** e realizadas as alocações dos atendentes pelos Contratos gerados.

**Gestão de Serviços e Ponto Eletrônico**

A Integração do Ponto Eletrônico com Gestão de Serviços atende as necessidades dos atendentes / funcionários com a geração de suas marcações no ponto eletrônico. A integração consolida a geração das marcações dos atendimentos das ordens de serviços realizadas pelos atendentes dos clientes relacionados com suas devidas bases de atendimento no **Gestão de Serviços.**

****

**Gestão de Serviços e Controle de Não-Conformidades**

A Integração de Controle de Não-Conformidades com Gestão de Serviços atende as necessidades resultantes dos atendimentos dos técnicos com uma ficha de não-conformidade. A integração consolida a geração da identificação por uma ocorrência relatada na Ordem de Serviço no **Gestão de Serviços** que consta as ocorrências vinculada ao produto referente da base de atendimento do cliente.

**Gestão de Serviços e Faturamento**

A Integração do Faturamento com Gestão de Serviços atende as necessidades resultantes da efetivação das Ordens de Serviço com o pedido de venda. A integração consolida a geração do pedido de venda referente ao atendimento da ordem de serviço do **Gestão de Serviços.**

****

**Gestão de Serviços e Estoque e Custos**

Possibilita o controle do estoque apontado no Serviço e a TES com Atualiza estoque = Não para não baixar duas vezes na efetivação da OS.

**Gestão de Serviços e Manutenção de Ativos**

A Integração de Manutenção de Ativos com Gestão de Serviços atende as necessidades entre o processo de locação de equipamentos do módulo **Gestão de Serviços** (SIGATEC) com o **Manutenção de Ativos** (SIGAMNT) para utilizar o cadastro dos **Bens** e de **Ordens de Serviços** **de Manutenção.**A integração acontece considerando equipamento a equipamento, portanto, pode utilizar bases de atendimento que possuem a integração com o **Manutenção de Ativos** e que não possuam o vínculo.

# Parâmetros/Configurações 

O sistema Microsiga Protheus® utiliza em suas rotinas configurações padronizadas ou específicas chamadas de parâmetros. Ele é uma variável que atua como elemento chave na execução de determinados processamentos e, de acordo com seu conteúdo, é possível obter diferentes resultados.
Todas as variáveis são iniciadas pelo prefixo **MV_** e agem sobre diversas operações, como por exemplo, o **MV_JUROS** que define um padrão para a taxa de financiamento negociada com os fornecedores durante a negociação do processo de cotação.
O módulo de **Gestão de Serviços** utiliza vários parâmetros, sendo que, alguns deles também são comuns a outros módulos e, caso sejam alterados, o novo conteúdo é considerado para todos os envolvidos. 
Existem parâmetros que são apenas configurações genéricas, como: configuração de periféricos (impressoras), datas de abertura, nomenclaturas de moedas etc.

Nota

Os parâmetros iniciados com números, após o prefixo **MV_**, devem ser consultados no item **#**. 
O conteúdo dos parâmetros pode ser alterado na rotina **Parâmetros** do módulo **Configurador**.

Os parâmetros utilizados no módulo de **Gestão de Serviços** do Microsiga Protheus® são:

- [A](#)
- [B](#)
- [C](#)
- [D](#)
- [E](#)
- [F](#)
- [G](#)
- [I](#)
- [L](#)
- [M](#)
- [N](#)
- [O](#)
- [Q](#)
- [R](#)
- [S](#)
- [T](#)
- [U](#)
- [V](#)
- [W](#)
- [Z](#)

| Nome | Descrição | Conteúdo |
| --- | --- | --- |
| Nome | Descrição | Conteúdo |
| MV_ALOCTEC | Indica se o Atendente será alocado automaticamente a partir da inclusão de uma Ordem de Serviço. | F |
| MV_ATCUSGE | Indica se o custo do equipamento deve ser calculado (somado) para todas as filiais (T) ou apenas para a filial corrente (F - Default). |  F |
| MV_ATDIAS | Indica o número de dias que deve ser somado na alocação do Atendente. | 1 |
| MV_ATESTCL | Indica o cliente padrão para a transferência de equipamento da Base de Atendimento quando a nota fiscal de saída é excluída. | Código do cliente estorno |
| MV_ATESTLJ | Indica a loja padrão para a transferência de equipamento da Base de Atendimento quando a nota fiscal de saída é excluída. | Código do cliente estorno |
| MV_ATGARCS | Indica se os atendimentos em garantia serão considerados para efeito de custo de manutenção. | T |
| MV_ATHORAS | Indica o número de horas que devem ser somadas na alocação do Atendente. | 0 |
| MV_ATHRNUT | Indica o número de horas que devem ser consideradas no final de semana. | 16 |
| MV_ATHRPR | Indica se o valor hora do serviço será calculado pelo preço do produto atendido (T) ou pelo valor hora do Atendente (F- Por Defeito). | F |
| MV_ATMTCAN | Motivo de cancelamento a ser usado na substituição da alocação devido a conflito com o RH |  |
| MV_ATOCIOS |  Configura o tempo em segundos para que o listener do help desk considere o atendimento ocioso. | 60 |
| MV_ATONCLC | Indica que o cálculo dos campos totalizadores ocorrerão a cada edição dos campos editáveis. Se o valor do parâmetro for configurado como falso (.F.), o cálculo ocorrerá apenas mediante ao acionamento do botão Calcular, presente nas abas Recursos Humanos e Impostos. | .F. |
| MV_ATREGHD | Indica a Regra de Alocação para Help Desk. A string deve ser preenchida com '1' ou '0', para indicar a utilização de Habilidade e Nível. | 00 |
| MV_ATSTATI | Indica se o cálculo de estatísticas de MTBF e MTTR será realizado ON-LINE. | T |
| MV_ATTALC1 | Indica o tempo decorrido desde a abertura do chamado/ OS e que ainda não alocado que configura um alerta (em horas). | 0 |
| MV_ATTALC2 | Indica o tempo decorrido desde a abertura do chamado/ OS e que ainda não alocado que configura um alerta máximo (em horas). | 0 |
| MV_ATTATE1 | Indica o tempo decorrido desde a abertura do chamado/ OS até a confirmação do atendimento na agenda que configura um alerta. (em horas). |  |
| MV_ATTATE2 | Indica o tempo decorrido desde a abertura do chamado/ OS até a confirmação de atendimento na agenda que configura um alerta máximo (em horas). |  |
| MV_ATTCHG1 | Indica o tempo entre o atendimento e a chegada do Atendente que configura um alerta (em horas). | 0 |
| MV_ATTCHG2 | Indica o tempo entre o atendimento e a chegada do Atendente que configura um alerta máximo (em horas). | 0 |
| MV_ATTMAX1 | Indica o tempo entre a abertura do chamado/ OS e a alocação que configura um alerta (em horas). | 0 |
| MV_ATTMAX2 | Indica o tempo entre a abertura do chamado/ OS e a alocação que configura um alerta (em horas). | 0 |
| MV_ATTMPOS | Indica o intervalo, em minutos, a ser considerado para a atualização do Monitor de Ordem de Serviço. | 1 |
| MV_ATTSAI1 | Indica o tempo entre a abertura do chamado/ OS e o atendimento efetivo (laudo) que configura um alerta (em horas). | 0 |
| MV_ATTSAI2 | Indica o tempo entre a abertura do chamado/ OS e o atendimento efetivo (laudo) que configura um alerta máximo (em horas). | 0 |
| MV_ATVREVI | Indica se valida o contrato de locação para não permitir realizar quando o mesmo estiver na etapa de picking. .T. Valida; .F. Não Valida. | .F. |
| MV_ATVTABB | Habilita a Integração Vistoria e Agendamento. | .T. |
| MV_ATMTCAN | Motivo de cancelamento a ser utilizado na substituição da alocação, devido a conflito do RH. |  |
| MV_ATHISPA | Indica se será exibida a tela de parâmetros de filtros quando o histórico de cliente/equipamento e disparado através do chamado técnico 1=Sim,2=Não. | 2 |
| MV_ATBSPRF | Prefixo da combinação do identificador único utilizado na geração automática da base de atendimento.                                                  | AUTO |
| MV_ATBSSEQ | Sequencial da combinação do identificador único utilizado na geração automática da base de atendimento.                                                  |  |
| MV_ATHDMULT | Se ao selecionar o chamado de Help-Desk para o técnico. "1" = Retorna somente um ou "2" = Retorna  todos.                                            | "1" |
| MV_AGEINF1 | Define os dados que serão exibidos na primeira coluna da agenda do técnico. Os dados devem ser separados por vírgula.                               | "" |
| MV_AGEINF2 | Define os dados que serão exibidos na primeira coluna da agenda do técnico. Os dados devem ser separados por vírgula.     | "" |
| MV_ATOPIMP | Define se o valor calculado para imposto será incorporado ao total dos itens no orçamento de serviços, planilha do contrato e medição/apuracão | .T. |
| MV_ATBLTOT | Controla o bloqueio do campo preço de venda da aba recursos humanos no orçamento de serviços. .T. = bloqueado, .F. = desbloqueado. | .F. |
| MV_ATDFTGY | Atualiza o campo TGY_DTFIM para a data da última desalocação ao desalocar atendentes que não tenham agendas depois da data da última desalocação | .F. |
| MV_ATSTPLA | Verifica se o status da ordem de serviço está diferente de aberto para expandir o plano de manutenção valor .T., senão verifica se está como Encerrado .F. mantendo o comportamento padrão do sistema | .F. |
| MV_ATALOC | Indica se o campo AA1_ALOCA deve ser validado possibilitando o uso do atendente. Caso o parâmetro possua valor .T. e p campo AA1_ALOCA possua valor 1, atendente poderá ser utilizado, caso o campo possua valor 2 será exibido um help informando que o atendente esta bloqueado para uso. O parâmetro estando como .F. o sistema permanece com o comportamento antigo, permitindo uso do atendente independente do valor do campo na AA1. | .F. |
| MV_AGLPROD | Aglutina produto no apontamento de ordem de serviço |  |
| MV_ATCSTAB | Tabela de preço padrão para ordem de serviço |  |
| MV_ATLITMP | Tempo inativo de help-desk |  |
| MV_ATPRPOS | Se a movimentação é por orçamento ou nivel |  |

| Nome | Descrição | Conteúdo  |
| --- | --- | --- |
| MV_BLQREVI | Valida a revisão do contrato com tipo realinhamento e com a modalidade decréscimo ou ambos, não permitindo a revisão..T. Valida ou .F. Não Valida | .F. |

| Nome | Descrição | Conteúdo  |
| --- | --- | --- |
| MV_CNBTEXC | Indica se é permitido o faturamento de excedentes na medição do contrato. | N  |
| MV_CNINTFS | Indica se a integração entre os módulos Gestão de Contratos (SIGAGCT) e Gestão de Serviços (SIGATEC) está ativa.Se ativar o parâmetro será efetuado a manutenção da Base Instalada e Ordens de Serviço para os itens da Planilha do contrato. |  .F. |
| MV_CNREALM | Informa se as medições são realinhadas junto com o contrato no SIGAGCT. |    N |
| MV_CONTRPV | Indica se os pedidos de venda devem ou não ser gerados automaticamente, a partir dos contratos de manutenção, na entrada no Módulo Gestão de Serviços. |   T |
| MV_CONTRSR | Indica se os pedidos de venda devem ou não ser gerados automaticamente a partir dos contratos de serviço. |   T |
| MV_CRMXGC | Geração de contrato do SIGAGCT ao ganhar uma oportunidade de venda. | .T. |
| MV_CRMXECM | Habilita a integração entre as rotinas de CRM e o ECm (Ex.: Liberação da proposta). | .F. |
| MV_CNVIGCP | Data de vigência das parcelas para Contrato com vigência indeterminada.                            | 31/12/2049 |
| MV_CVDEPTO | Código do departamento padrão para as convocações geradas automaticamente | "" |

| Nome | Descrição | Conteúdo  |
| --- | --- | --- |
| MV_DESPROD | Indica o produto que deve ser utilizado para o lançamento das despesas de deslocamento. |  "" |
| MV_DIFSTD | Indica a Diferença Padrão entre uma alocação e outra. |  00:15 |

| Nome | Descrição | Conteúdo  |
| --- | --- | --- |
| MV_ESTADO | Sigla do estado da empresa usuária do Sistema para efeito de cálculo de ICMS (7, 12 ou 18%), | SP |

| Nome | Descrição | Conteúdo  |
| --- | --- | --- |
| MV_FATFORE | Dias previstos para término das negociações .(FORECAST da Oportunidade de Venda) | 30|60|90 |
| MV_FATMNTP | Exibição prod. na oportunidade:1-Apaga registro manual ao inserir proposta; 2-Mostra todos; 3-Mostra os inseridos manualmente; 4-Agrupadores | 1 |
| MV_FATPROP | Define se cria Orçamento ou Proposta Comercial ao clicar no botão FORECAST na tela de Oportunidade (O=Orçamento; P=Proposta). | P |
| MV_FORMGAR | Indica a fórmula utilizada para o cálculo da data de garantia do Produto/Equipamento. | dDataBase+90 |
| MV_FTMSDOC | Define se a proposta comercial será vinculada ao banco de conhecimento. | .F.  |
| MV_FTREVIS | Indica o tratamento quanto à criação de revisões na alteração da Oportunidade de Venda:1- Nunca cria / 2- Pergunta e 3-  Sempre cria | 2 |

| Nome | Descrição | Conteúdo  | Documento de referência |
| --- | --- | --- | --- |
| MV_GSAGCFL | Gera Agenda de Conflito no Job de Alocação Automática? | .F. |  |
| MV_GRADE | T= Utiliza Grade / F= Não Utiliza Grad.Caso contrário ative grade incluir tabelas 18 e 19. | .T. |  |
| MV_GSLOCOC | Define qual ocorrência será utilizada na geração da O.S. para manutenção preventiva de equipamento para locação. | <Código da Ocorrência> |  |
| MV_GSSVMNT | Código do serviço para geração das O.S. pós locação no módulo SIGAMNT. | <Código do Serviço (SIGAMNT)> |  |
| MV_GSXINT | Define com qual sistema de RH o Gestão de Serviços deve se integrar. (1=Integração Genérica, 2=RH Protheus, 3=RH RM) | 2 |  |
| MV_GSXNFE | Ativa a integração entre a NFE e a gestão de armamentos no Gestão de Serviços. | .T. |  |
| MV_GSDSGCN | Indica se desagrupará os itens do contrato gerado pelo Gestão de serviços. 1=Sim;2=Não | 2 | GS0065 Orçamento de Serviços Agrupado x Desagrupado (MV_GSDSGCN) |
| MV_GSLOCPV | Envia informações de Localização ( Número de Série, Lote e Endereçamento) informadas no apontamento da Ordem de Serviço para o Pedido de Venda na  Efetivação da OS | .T. |  |
| MV_GSOUT | Tipo de Saida da Integracao RH: 1=Protheus,2=Ponto de Entrada,3=Arquivo CSV. Quando houver mais de um a informar entre virgulas. Exemplo 2,3   | 1 |  |
| MV_GSPOSTO | Define se na rotina de Apuracao/Medicao o valor da medicao para RH e Locacao de Equipamento serao iniciados com o valor zero para postos encerrados. Este parâmetro também influencia na rotina de Medição Automática (CNTA260)  | .F. |  |
| MV_GSRHDIR | Diretório de gravacao dos arquivos CSV da Integração RH. O local é gravado a partir do indicado na seção RootPath do servidor Protheus  |  |  |
| MV_GSISS | Define se as funcionalidades de agrupamento de Produto de Serviço (CNB_PRODSV) e agrupamento de  Pedido de Venda (CNB_IDPED) estão ativas.Para mais informações, acesse Assistente de Contratos - TECA850 - Gestão de Serviços - P12  | .F. |  |
| MV_GRVTWZ | Define se a gravação do custo de alocação será realizada na remoção da agenda do atendente, o parâmetro é utilizado na rotina de Gestão de Escalas. |                        .T. |  |
| MV_GSALCDT | Define se, ao projetar a agenda na Mesa Operacional, a data inicial e data final da projeção devem ser modificadas automaticamente de forma que fiquem contidas dentro do período do Posto (TFF). .F. = Não ; .T. = Sim | .F. |  |
| MV_GSPWDIN | Senha (password) utilizado na autenticação da integração entre o GS e o RH de outras marcas. |  |  |
| MV_GSUSRIN | Usuário (username) utilizado na autenticação da integração entre o GS e o RH de outras marcas. |  |  |
| MV_GSURLIN | URL do webservice do sistema de RH de outras marcas que integrará com o Gestão de Serviços. |  |  |
| MV_GSCOLMA | Define a quantidade de colunas de entrada e saída do template HTML utilizado na impressão do relatório de batidas | 4 |  |
| MV_GSHRPON | Define se a integração com os APP´s será ativado, com isso as batidas apuradas através do APP Meu Posto serão exportadas para o modulo do ponto eletrônico.Valor "1"  : "SIM"Pega o campo de integração para preenchimento de horas.Valor Padrão "2" : "NÃO"Segue o padrão pega os campos de entrada e saída da ABB( ABB_HRINI e ABB_HRFIM). | 2 |  |
| MV_GSVERHR | Define o criterio de conflito de agenda no Gestao de Escala. (.T.)Verifica horario trabalhado + dia trabalhado;(.F.)Verifica apenas o dia trabalhado)  | .F. |  |
| MV_GSPNMTA | Define se utilizará as definições de RH(PNMTABC01) sem o mesmo estar com o patch aplicado.Desativado(Default) - .F.Ativado - .T.Mesmo com o parâmetro ativo, ele utilizara o PNMTABC01 se o mesmo estiver no RPO. |  |  |
| MV_GSNPERM | Nega permissão de acesso quando não encontrar o  grupo ou a regraQuando verdadeiro os acessos serão negados quando não houver regra cadastrada.Quando Falso os acessos serão permitidos quando não houver regra cadastrada, mantendo o comportamento atual.Importante:Quando houver regra cadastrada é ela que será a mandatária, assim o parâmetro não terá efeito. | .F. |  |
| MV_GSMSFIL | Define se a mesa operacional deve ser executada em modo multi-filial (.T. = Sim ; .F. = Não) | .F. |  |
| MV_GSTECLO | Define se as validações de integridade devem ser executadas ao acessar o Gestão de Serviços. (.T.) As validações de integridade não são executadas ou;(.F.) As validações de integridade são executadas.OBS: Para que as validações sejam executadas apenas uma vez, após as execução o parâmetro é alterado para .T. | .F. |  |
| MV_GSLOG | Habilita a geração de arquivos de Log em processos do módulo Prestadores de Serviços (.T. = Habilitado ; .F. = Desabilitado).Para mais detalhes, verificar DSERSGS-8891 DT Implementação do parâmetro MV_GSLOG | .F. |  |
| MV_GSOSENC | Valida atendimento da O.S para ordens de serviços com o Status encerrada(AB7_TIPO = 5) . Valor Default .F.Para mais detalhes, Clique Aqui | .F. |  |
| MV_GSAPMAT | Parâmetro para habilitar a geração de solicitação ao armazém no apontamento de materiais   | .F. |  |
| MV_GSITORC | Parâmetro para habilitar orçamento integrado com precificação | 1 |  |
| MV_GSRTAUT | Define se as movimentações serão de atendentes efetivos ou de atendentes de rota de cobertura. O Parâmetro estando como .F. indica que as movimentações serão de atendentes efetivos e como .T. indica que as movimentações serão de atendentes rotistas. | .F. |  |
| MV_GSDTENC | Define se a data de encerramento vai pegar a database ou a data fim do item de RH(TFF). Default .F. pega o valor da database.T. pega a data de encerramento do item de RH(TFF) | .F. |  |
| MV_GSGEROS  | Define se o Gestão de Serviços ira ter integração com o modulo de Field Services, sendo assim, criando base instalada e ordem de serviço para as agendas geradas.1 Liga a integração com o Field services2 Desliga a integração com o Field services | 2 |  |
| MV_GSUNORC | Define se a rotina de Gestão de Uniformes (TECA894) tem integração com o Contrato de Serviços:Default .T. - Integração ligada: A movimentação do uniforme tem vínculo com o Contrato e produto de RH. | .T. |  |
| MV_GSINTER | Gerar convocação automaticamente, após a criação de agendas, usando a mesa operacional1 = Desabilitado2 = Habilitado | "1" |  |

| Nome | Descrição | Conteúdo  |
| --- | --- | --- |
| MV_ITMPSTD | Indica se deverá ser informado, na inclusão da OS, o prazo médio de atendimento. | T  |

| Nome | Descrição | Conteúdo  |
| --- | --- | --- |
| MV_LIBVINC | Indica se deve ou não liberar a edição dos itens do pedido de venda vinculado a uma O.S.. |  .T. |
| MV_LOCALIZ | Indica se produtos poderão usar controle de localização física ou não (S)im ou (N)ão, | S |

| Nome | Descrição | Conteúdo  |
| --- | --- | --- |
| MV_MASCGRD | Indica a máscara da grade 1o Parâmetro - Tamanho do Código Fixo 2o e 3o  Parâmetros - Tamanho dos Códigos Variáveis. | 26,02,02 |
| MV_MODPROD | Indica o produto que deve ser utilizado no apontamento da Ordem de Serviço para o lançamento da mão de obra. Se vazio, não será lançado. |  "" |
| MV_MODSERV | Indica o código do serviço que deve ser utilizado no apontamento da Ordem de Serviço para lançamento da mão de obra. Se vazio, não haverá lançamento. |  "" |
| MV_MULVIST | Permite múltiplas vistorias técnicas para a oportunidade de venda e proposta comercial. |   .F. |

| Nome | Descrição | Conteúdo |
| --- | --- | --- |
| MV_NUMPARC | Número máximo de parcelas na condição de pagamento TIPO 9. Máximo permitido =26 | 4 |
| MV_NG2GS | Parâmetro de integração entre o SIGAMDT x SIGATEC. O Parâmetro .F. indica que não haverá integração. | .F. |

| Nome | Descrição | Conteúdo  |
| --- | --- | --- |
| MV_OCOGCT | Ocorrência padrão para a inclusão da OS na geração do atendimento dos contratos gerados pelo GCT.    |  |
| MV_OCORROS | Código da ocorrência para gerar a ordem de serviço automaticamente na integração entre os módulos Gestão de Contratos (SIGAGCT) e Gestão de Serviços (SIGATEC). |  |
| MV_OPORXPV | Indica se gera pedido de venda no encerramento da oportunidade de venda. | .V. |
| MV_ORCLIPD | Código do Cliente + Loja Padrão para Orçamentos | 00000101 |
| MV_OSXCTRT | Define se a ordem de serviço aberta manualmente será amarrada ao contrato, sendo que  .T. habilita a amarração e .F. mantém o legado. |   .F. |
| MV_ORCPRC | Representa a tabela de precificação configurada. |  .T. |
| MV_ORCSIMP | Altera o fluxo do processo de venda, de modo a iniciar pela geração do Orçamento de Serviços, sem a necessidade da geração de Oportunidade de Venda e Proposta Comercial | 1 |

| Nome | Descrição | Conteúdo  |
| --- | --- | --- |
| MV_QNCDDES | Define o código do Departamento Destino das Fichas N.C. geradas através da Integração com o ambiente Controle de Não-Conformidades. | <Código Departamento> |
| MV_QNCDDIG | Define na Integração com QNC o Departamento do Digitador da FNC. | <Código Departamento> |
| MV_QNCDORI | Define o código do Departamento Origem das Fichas N.C. geradas através da Integração com o ambiente Controle de Não-Conformidades. | <Código Departamento> |
| MV_QNCFDES | Define o código da Filial do Departamento Destino da Ficha N.C. gerada através da Integração com o ambiente Controle de Não-Conformidades. | <Filial> |
| MV_QNCFDIG | Define o código da Filial do Usuário Digitador da Ficha N.C. gerada através da Integração com o ambiente Controle de Não-Conformidades. | <Filial> |
| MV_QNCFORI | Define o código da Filial do Departamento Origem da Ficha N.C. gerada através da Integração com o ambiente Controle de Não-Conformidades. | <Filial> |
| MV_QNCFRES | Define o código da Filial do Usuário Responsável pela Ficha N.C. gerada através da Integração com o ambiente Controle de Não-Conformidades. | <Filial> |
| MV_QNCMDIG | Define o código do Usuário Digitador da Ficha N.C. gerada pela integração com o ambiente Controle de Não-conformidades. | <Código do Usuário> |
| MV_QNCMRES | Define na Integração com QNC a Matrícula do Responsável da FNC. | <Código do Usuário> |

| Nome | Descrição | Conteúdo  |
| --- | --- | --- |
| MV_RASTRO | Determina a utilização ou não da rastreabilidade dos lotes de produção (Informar S para Sim ou N para Não). | S |
| MV_REGRAAL | Indica a Regra de Alocação. A String deve ser preenchida com '1' ou '0' para indicar a utilização de: Região, Prioridade, Habilidade e Nível. | 0000 |
| MV_RELAPSW | Senha para autenticação no servidor de e-mail. |  |
| MV_RELAUSR | Usuário para autenticação no servidor de e-mail. |  |
| MV_RELAUTH | Servidor de EMAIL necessita de Autenticacão ?    | .F. |
| MV_RELFROM | E-mail utilizado no campo FROM no envio de relatórios por e-mail.                                 |  |
| MV_RELSERV | Nome do Servidor de Envio de E-mail utilizado nos relatórios.                                         |  |
| MV_RELSSL | Define se o envio e recebimento de e-mails na rotina SPED utilizará conexão segura (SSL).            |  .F. |
| MV_RELTIME |  Timeout no Envio de EMAIL.                         |  |
| MV_RELTLS |  Informe se o servidor de SMTP possui conexão do tipo segura ( SSL/TLS ).                           | .F. |
| MV_REVPROP | Indica se haverá o controle de revisão para proposta comercial. | .T. |

| Nome | Descrição | Conteúdo  |
| --- | --- | --- |
| MV_SABFERI | Considerar sábados como Feriado quando da utilização da DataValida().                | S |
| MV_SALTPAG | Indica se o salto de página deverá ser dado antes ou depois da impressão do relatório. Saltar página no início da impressão? (S/N).                      | S |
| MV_SEQFIFO | Número sequencial para gravação do Custo FIFO. |  0 |
| MV_SEQ_LI |  Número de Sequência da L.I. do Easy Import Control. | 0000001 |
| MV_SERCUP | Séries de Notas Fiscais utilizadas como Cupom Fiscal.                          | CP |
| MV_SIMB1 | Símbolo utilizado pela moeda 1 do Sistema.                 | R$ |
| MV_SIMB2 | Símbolo utilizado pela moeda 2 do Sistema.            |  US$ |
| MV_SIMB3 |  Símbolo utilizado pela moeda 3 do Sistema.                         | UFIR |
| MV_SIMB4 |  Símbolo utilizado pela moeda 4 do Sistema.                       | MARCO |
| MV_SIMB5 | Símbolo utilizado pela moeda 5 do Sistema. | IENE |

| Nome | Descrição | Conteúdo  |
| --- | --- | --- |
| MV_TECBLAT | Define se bloqueia a inclusão do atendimento da OS que superar o valor máximo para atendimento no contrato de manutenção. |  .T. |
| MV_TECOCOA | Indica a ocorrência padrão da ordem de serviço criada para a entrega. |  |
| MV_TECOCOM | Indica a  ocorrência padrão da ordem de serviço criada para a montagem. |  |
| MV_TECPCON | Define se o contrato de permissionamento é obrigatório. | .F. |
| MV_TECXRH | Define se o Gestão de Serviços está integrado com o RH do Microsiga Protheus®. | .F. |
| MV_TEMPWRD | Cria um modelo de integração Word para Template de proposta comercial | .F. |
| MV_TMPAD | Tipo de movimentação padrão para produção PCP. |  010 |
| MV_TMKESTA | Estágio do processo de vendas utilizado na geração da oportunidade de vendas no faturamento. | 000001 |
| MV_TMKPROC | Processo de vendas utilizado na geração da oportunidade de vendas no faturamento. | 000001 |
| MV_TPCOMIS |  Flag de sistema utilizado para informar se o cálculo da comissão será On-Line (O) ou em Batch (B).    |  O |
| MV_TPHR |  Define a unidade padrão para tempos utilizados pelo sistema de PCP e ESTOQUE. O tipo de hora pode  ser "N" -> Normal ou "C" -> Centesimal.   | C |
| MV_TPSALDO | Tipo de Saldo a ser considerado nos movimentos internos: (S) Utiliza a função Saldo SB2() (Q) Utiliza o valor B2_QATU-B2_QACLASS-B2_RESERVA    | Q |
| MV_TTS | Indica a utilização do controle de transação (válido somente para a versão AXS). Este parâmetro não trabalha com contabilização on-line quando a transação no banco de dados possui mais de uma tabela para contabilização. |  N |
| MV_TECDOT | Indica o nome do modelo .dot para impressão do protocolo de entrega de armamentos, separados por vírgula e com a sequência Arma,Colete,Munição. |  |
| MV_TECGUIA |  Armazena a URL para emissão da guia de tráfego.     | http://www.sgte.eb.mil.br/guiatrafego/index.jsp |
| MV_TECNOME | Indica o nome dado ao arquivo em que será salvo o protocolo de entrega de armamentos. |  |
| MV_TECPATH | Indica em qual diretório está localizado o modelo .dot para impressão do protocolo de entrega de armamentos. |  |
| MV_TECWORD | Indica o diretório em que será salvo o protocolo de entrega de armamentos. |  C:\Protocolo de Entrega Armamentos\ |
| MV_TECXML | Diretório em que serão gravados os arquivos GESP XML. |  C:\XML Gesp |
| MV_TRVMED | Trava a escolha do tipo de medição no cabeçalho do Orçamento, vazio permite o usuário mudar, se não, deve conter um dos tipos escolhidos 1,2,3,4 ou 5. | Vazio ou 1,2,3,4 ou 5. |
| MV_TECPRMF | Controla as permissões para deletar filtros, utilizados para listar atendentes do Gestão de Serviços.Importante: Esse parâmetro sub-escreve a parametrização da rotina Grupo de Acessos (TECA680) | .F. |
| MV_TPUNIF | Indica quais tipos de produtos(B1_TIPO) serão considerados para a gestão de uniforme, os tipos devem ser separados por ponto e virgula( ; ) |  |
| MV_TECAPPM | Indica se a funcionalidade de envio de marcações dentro do APP Meu posto será ativado | 2 |
| MV_TECXNAT | Indica qual natureza será utilizada na criação de titulos financeiros | TEC |
| MV_TECRESC | Avalia se considera oportunidades com contrato ja gerado | F |

| Nome | Descrição | Conteúdo  |
| --- | --- | --- |
| MV_ULMES | Indica a data do último fechamento do estoque. |  |
| MV_ULRESER | Indica a data da última atualização automática de reservas. |  |
| MV_UNIDMOD | Indica a unidade de medida de mão de obra na estrutura do produto. ""H"" (Horas por peça) ""P"" (Peças por hora"). |  H |
| MV_USAQTEM | Indica se, na explosão da necessidade de material, a quantidade por embalagens/lote mínimo deve ser utilizada como quantidade válida, antes de tentar o lote econômico (S/N). |  N |
| MV_ULCTDIA | Indica se deve gerar PV no ultimo dia do mes | F |

| Nome | Descrição | Conteúdo  |
| --- | --- | --- |
| MV_VALGRP | Quanto .T. impede a utilização de produtos de categorias diferentes. | .T. |
| MV_VENCIRF | Indica se o título do IRRF será gerado a partir da data de emissão ""E"", vencimento ""V"" ou contabilização ""C"". |  V |
| MV_VENDPAD | Código do Vendedor padrão que será assumido na tela de atendimento. | 000001 |
| MV_VLDALMO | Indica se deve validar a existência do armazém destino do movimento. |  S |
| MV_VLRETIR | Indica o valor mínimo para dispensar a retenção IRRF. |  10 |
| MV_VLDAGD | Valida entraga e coleta, 1-Entrega<=Inicio/Coleta>=Fim 2-Entrega>=Inicio/Coleta<=Fim 3-Entrega>=Inicio/Coleta>=Fim 4-Entrega<=Inicio/Coleta<=Fim | 1 |

| Nome | Descrição | Conteúdo  |
| --- | --- | --- |
| MV_WNCALC | É utilizado no Advanced for Windows para informar qual diretório e arquivo serão utilizados para a calculadora. Se vazio, será assumida a calculadora do Windows. |  |
| MV_WNSCHED | É utilizado no Advanced for Windows para informar qual diretório e arquivo serão utilizados para a agenda. Se vazio, será executado na ToolBar. |  |

| Nome | Descrição | Conteúdo  |
| --- | --- | --- |
| MV_ZERADEM | Indica se a rotina de virada de saldos deve zerar os valores acumulados no arquivo de demandas para o mês seguinte à data do fechamento. |  S |
| MV_ZERASAL | Indica se a rotina de Reprocessamento deve zerar os saldos de períodos que já possuam os lançamentos correspondentes no SI2. |  N |

# Atualizações

As opções de Menu disponíveis são:

- [Cadastros](#)
- [Cenários de Venda](#)
- [Crm Adm Vendas](#)
- [Crm Simulador](#)
- [Crm Int. Word](#)
- [Cadastros/Serviços](#)
- [Cadastros/RH](#)
- [Atendentes](#)
- [Base Atendimento](#)
- [Contratos](#)
- [Locação](#)
- [Manutenção](#)
- [Gestão de Contrato](#)
- [Projetos](#)
- [Atendimento](#)
- [Orçamentos](#)
- [Centro de Serviços](#)
- [Alocação](#)
- [Efetivo Operacional](#)
- [Portal](#)
- [Armamentos](#)
- [Eventos](#)
- [Disciplina](#)

 - Fornecedores

 - Clientes

 - Produtos

 - Contatos

 - Grupos de Produtos

 - Complemento de Produtos

 - Estruturas

 - Unidades de Medida

 - Tipos de Entrada e Saída

 - Condições de Pagamento

 - Moedas

 - Fórmulas

 - M-messenger

 - Banco de Conhecimento

 - Vendedores

 - Tipos de Vistoria

 - Acessórios

 - Categorias

 - Escalas

 - Feriados

 - Características

 - Tabelas de Preços

 - Processos de Venda

 - Prospects

 - Grupo de Representantes

 - Estruturas de Venda

 - Grupos Societários

 - Responsáveis x Grupos

 - Concorrentes

 - Categorias de Produtos

 - Categorias de Produtos x Produtos

 - Unidades de Venda

 - [Oportunidades](https://tdn.totvs.com/pages/viewpage.action?pageId=265781596)

 - Apontamentos

 - Representantes

 - Despesa Financeira

 - Planilhas de Preços de Serviços

 - Vistorias Técnicas

 - Tabelas de Precificação

 - Perfil 360

 - Componentes

 - Tipos de Tarefa

 - Componentes x Tarefas

 - Itens de Complexidade

 - Composições

 - Modelos

 - Modelos

 - Componentes

 - Ocorrências

 - Produtos x Ocorrências

 - Grupos de Atendimento

 - Kits de Atendimento

 - Serviços

 - Faq

 - Obsolescências

 - Equipamentos x Obsolescências

 - [Grupo de Comunicação](https://tdn.totvs.com/pages/viewpage.action?pageId=243643857)

 - [Facilitador de Orçamento](http://tdn.totvs.com.br/pages/viewpage.action?pageId=243646979)

 - Funções

 - Turnos de Trabalho

 - Tabelas de Horário Padrão

 - Transferências de Funcionários

 - Programação de Rateio

 - Exceções por Funcionários

 - Exceções por Período

 - Exceções por Cliente

 - Feriados

 - [Atendentes](http://tdn.totvs.com.br/pages/viewpage.action?pageId=240301564)

 - [Restrições](http://tdn.totvs.com.br/pages/viewpage.action?pageId=266964437)

 - Atendentes x Regiões

 - Habilidades de Atendentes

 - Equipes

 - Equipes x Atendentes

 - Atendentes x Equipes

 - [Bases de Atendimento](http://tdn.totvs.com.br/pages/viewpage.action?pageId=239018487)

 - Pendências da Base

 - Área de Supervisão

 - [Locais de Atendimento](https://tdn.totvs.com/pages/viewpage.action?pageId=244714409)

 - Localizações Físicas

 - Kits para Alocação

 - Manutenção

 - Pedidos de Venda por Contrato de Manutenção

 - Prestação de Serviços

 - Preventivas

 - [Assistente para Serviços](http://tdn.totvs.com.br/pages/viewpage.action?pageId=240976599)

 - Assistente para Cancelamento de Contratos

 - Assistente para Implantação de Contrato

 - Área de Trabalho

 - Grupos de Cobertura

 - Taxas de Índices

 - Índices

 - Permissões da Área de Trabalho

 - [Reserva de Equipamento](http://tdn.totvs.com.br/pages/viewpage.action?pageId=243662073)

 - Requisição a Atendente

 - [Separação](http://tdn.totvs.com.br/pages/viewpage.action?pageId=239018487)

 - [Movimentações](http://tdn.totvs.com.br/pages/viewpage.action?pageId=241697129)

 - [Consulta Base de Locação](http://tdn.totvs.com.br/pages/viewpage.action?pageId=263193350)

 - [Checklist](http://tdn.totvs.com.br/pages/viewpage.action?pageId=243654699)

 - Planos de Manutenção

 - Expansão do Plano

 - Permissões da Área de Trabalho

 - Movimentos do Plano

 - Programação do Plano

 - [Assistente de Contrato](https://tdn.totvs.com/pages/viewpage.action?pageId=266964440)

 - [Gestão dos Contratos](https://tdn.totvs.com/pages/viewpage.action?pageId=244716917)

 - Tipo de Revisão de Contratos

 - Aprovação de Revisões

 - [Apurações e Medições](https://tdn.totvs.com/pages/editpage.action?pageId=238036013)

 - [Gestão de Escalas](https://tdn.totvs.com/pages/viewpage.action?pageId=244428156)

 - [Hab.Caract.Cursos do Local de Atendimento](https://tdn.totvs.com/pages/viewpage.action?pageId=239039513)

 - [Indenização](http://tdn.totvs.com.br/pages/viewpage.action?pageId=257622226)

 - Projetos

 - Chamados Técnicos

 - Help Desk

 - Fila de Help Desk

 - Orçamentos

 - Ordens de Serviço

 - Requisições das Ordens de Serviço

 - [Atendimento das Ordens de Serviço](http://tdn.totvs.com.br/pages/viewpage.action?pageId=244422164)

 - Despesas Financeiras

 - [Apontamento de Materiais](https://tdn.totvs.com/pages/viewpage.action?pageId=239041448)

 - [Controle de Alocações](https://tdn.totvs.com/pages/viewpage.action?pageId=244425146)

 - Agenda

 - Monitor de Check-In/Out

 - [Conflitos de Alocação](https://tdn.totvs.com/pages/viewpage.action?pageId=244426690)

 - Motivos de Manutenção

 - [Mesa Operacional - Visão de Contratos](https://tdn.totvs.com/pages/viewpage.action?pageId=244441046)

 - [Mesa Operacional - Visão de Atendentes](https://tdn.totvs.com/pages/viewpage.action?pageId=244443785)

 - Consulta de Atendentes

 - [Tipos de Alocação](https://tdn.totvs.com/pages/viewpage.action?pageId=244428156)

 - Grupo de Acesso / Perfil

 - [Geração de Atendimentos de Ordens de Serviços](https://tdn.totvs.com/pages/viewpage.action?pageId=240296236)

 - Geração de Marcações

 - Geração de Benefícios para RH

 - Env. Adic.Per. Insal.

 - Envio Programação Rateio

 - Usuários

 - Menus dos Portais

 - Web Services

 - Armas

 - Coletes

 - Munições

 - Locais Internos

 - Motivos de Ocorrências

 - Manutenções de Armamento

 - Ocorrências Operacionais

 - Movimentações

 - Disponibilidade de Armas e Coletes

 - Disponibilidade de Munições

 - Listas de E-mail

 - Eventos

 - Log de Eventos

 - Disciplinas

 - Tipos de Disciplinas

 - Pontuação

 - Gestão Disciplinar

 - Gestão de Investigação

 - Consultar Disciplinas

# Consultas

As opções de Menu disponíveis são:

- [Cadastros](#)
- [Crm - Adm Vendas](#)
- [Consultas](#)
- [Gesp](#)

 - Genéricos

 - Gen. Relacional

 - Funil de Venda

 - Posição de Clientes

 - Histórico de Clientes

 - Histórico de Produtos

 - Faq

 - Monitor de Ordens de Serviços

 - Rastreador de Serviços

 - Relatório de Admitidos

 - Rel. Admitidos

 - Rel. Afastados Inss

 - Relatório de demitidos

 - Efetivos

 - Gesp Xml (pessoas/locais/armas)

 - [Armas Movimentadas](https://tdn.totvs.com/pages/viewpage.action?pageId=263193986)

 - Gesp Xml

# Relatórios

As opções de Menu disponíveis são:

- [Cadastros](#)
- [Crm - Adm Vendas](#)
- [Financeiro](#)
- [Manutenção](#)
- [Atendimento](#)
- [Alocação](#)
- [Orçamentos](#)
- [Serviços](#)
- [Visitas](#)
- [Estatísticas](#)
- [Pendências](#)
- [Help Desk](#)
- [Projeto](#)
- [Contratos](#)
- [Locação](#)
- [Gesp](#)

 - Produtos

 - Clientes

 - Bases de Atendimento

 - Planos de Manutenção

 - Propostas Comerciais

 - Oportunidades x Processos de Venda

 - Vistorias Técnicas

 - Despesas Financeiras

 - Movimentos do Plano

 - Chamados

 - Relação de Chamados

 - Chamados x Produto

 - [Escala x Efetivo por atendente](https://tdn.totvs.com/pages/viewpage.action?pageId=244735687)

 - [Escala x Cliente e contrato manutenção](https://tdn.totvs.com/pages/viewpage.action?pageId=263782530)

 - Escala x Região

 - [Escala x Cliente e Contrato GCT](https://tdn.totvs.com/pages/viewpage.action?pageId=244739959)

 - Fichas de Orçamento

 - Orçamentos

 - [Entregas Cif](http://tdn.totvs.com.br/pages/viewpage.action?pageId=243630867)

 - Fichas de Ordens de Serviço

 - Relação das Ordens de Serviço

 - Ordens de Serviço x Produtos

 - Serviços Efetuados

 - Serviços x Ordens de Serviço

 - Fichas de Atendimento

 - Agenda dos Atendentes

 - Ordens de Serviço x Agenda

 - Histograma do Atendimento

 - Markup para Ordens de Serviço

 - Pendências da Base

 - Fichas Help Desk

 - Help Desk

 - Histograma Help Desk

 - Acompanhamento de Projeto

 - Orçado x Realizado

 - Status do Contrato

 - Prestação de Serviços

 - Manutenções

 - [Consulta Indenizações](https://tdn.totvs.com/pages/viewpage.action?pageId=243012860)

 - Conferência de Faturamento

 - Detalhe da Fatura

 - Fatura da Locação

 - Romaneio de Entrega

 - Equipamentos x Locais

 - [Entrega e Coleta](http://tdn.totvs.com.br/pages/viewpage.action?pageId=243640338)

 - [Impressão Checklist](http://tdn.totvs.com.br/pages/viewpage.action?pageId=243638231)

 - [Picking](http://tdn.totvs.com.br/pages/viewpage.action?pageId=243636560)

 - [Armas Movimentadas](https://tdn.totvs.com/pages/viewpage.action?pageId=263193986)

 - Efetivos

 - Afastados Inss

 - Admitidos

 - Demitidos

 - Gesp Xml

# Miscelanea

As opções de Menu disponíveis são:

- [Processamento](#)

 - Recálculo Mtbf

 - Recálculo Mttr

 - Planilha Excel

**


<!-- anchors: Terceirização(SIGATEC)Protheus12-Índice, Terceirização(SIGATEC)Protheus12-Objetivo, samples, samples-1, samples-2, Terceirização(SIGATEC)Protheus12-Parâmetros/Configurações, parametros, parametros-1, parametros-2, parametros-3, parametros-4, parametros-5, parametros-6, parametros-7, parametros-8, parametros-9, parametros-10, parametros-11, parametros-12, parametros-13, parametros-14, parametros-15, parametros-16, parametros-17, parametros-18, parametros-19, parametros-20, Terceirização(SIGATEC)Protheus12-Atualizações, samples, samples-1, samples-2, samples-3, samples-4, samples-5, samples-6, samples-7, samples-8, samples-9, samples-10, samples-11, samples-12, samples-13, samples-14, samples-15, samples-16, samples-17, samples-18, samples-19, samples-20, samples-2, samples-22, samples-23, Terceirização(SIGATEC)Protheus12-Consultas, samples, samples-1, samples-2, samples-3, samples-4, Terceirização(SIGATEC)Protheus12-Relatórios, samples, samples-1, samples-2, samples-3, samples-4, samples-5, samples-6, samples-7, samples-8, samples-9, samples-10, samples-11, samples-12, samples-13, samples-14, samples-15, samples-16, Terceirização(SIGATEC)Protheus12-Miscelanea, samples, samples-1 -->
