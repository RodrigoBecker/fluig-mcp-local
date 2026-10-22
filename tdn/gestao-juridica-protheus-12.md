---
title: "Gestão Jurídica -  Protheus 12"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=239030162"
scraped_at: "2026-03-09T05:25:28.727Z"
depth: 4
anchors: 22
child_links: 294
---

# Gestão Jurídica -  Protheus 12

# Índice

# Objetivo

Atender aos Departamentos Jurídicos de empresas na Administração das Contingências, Gestão de Procurações e Documentos societários, Facilitar o relacionamento com escritórios parceiros e fornecer maior sinergia com as áreas Contábil e Recursos Humanos.

Proporciona ampla organização e gerenciamento de todas as informações pertinentes à área e aos negócios da empresa, elevando a capacidade do Departamento Jurídico, alinhando-o à estratégia de negócios a companhia, tornando-o detentor das informações necessárias à tomada de decisões estratégicas, sem depender de escritórios externos.

Além de realizar o acompanhamento dos processos com informações sempre atualizadas, permite total controle dos valores dos serviços prestados.

Dessa forma, oferece os seguintes resultados:

- Otimização da produção intelectual;
- Gestão efetiva da contingência;
- Melhora na análise de performance dos escritórios externos;
- Facilidade na troca de informações com o RH;
- Informações processuais atualizadas;
- Processo eletrônico e base de conhecimento;

Nota

```
Regras de Preenchimento
```

```
Legenda de rotinas
```

```
Agrupamento de Campos
```

Nota

O sistema dispõe ainda a consulta específica por palavra-chave em algumas rotinas do sistema, e que permite a busca pelas colunas listadas na consulta, sem a necessidade de escolha de índice, uso de acentuação, caracteres especiais ou maiúsculo/minúsculo

# Parâmetros/Configurações 

Nota

O conteúdo dos parâmetros pode ser alterado na rotina **Parâmetros** do módulo **Configurador**.

Os parâmetros utilizados no módulo de **Gestão Jurídica** do Microsiga Protheus® são:

- [E](#)
- [J](#)
- [M](#)
- [S](#)
- [W](#)

| Nome | Descrição | Conteúdo |
| --- | --- | --- |
| Nome | Descrição | Conteúdo |
| MV_ECMEMP | Código da empresa para integração com o ECM. |  |
| MV_ECMEMP2 | Empresa auxiliar integração SIGAJURI x Fluig. |  |
| MV_ECMPSW | Informe a senha do usuário com privilégio de administração no ECM. |  |
| MV_ECMURL | Informe a URL de integração com o ECM. |  |
| MV_ECMUSER | Usuário com privilégio de administração no ECM. |  |

| Nome do Parâmetro | Descrição | Conteúdo Padrão |
| --- | --- | --- |
| MV_JADTNAT | Este parâmetro define a natureza utilizada para criar o título de adiantamento. |  |
| MV_JADTPRF | Defina o conteúdo do parâmetro com o prefixo do título de adiantamento. | NWF |
| MV_JAJUENC | Define qual motivo de justificativa deve ser informado para incluir andamentos em processos encerrados.Quando houver integração com o Fluxo de aprovação do Fluig Jurídico, o sistema utilizará a Justificativa definida como Justificativa de alteração do processo encerrado.Importante: Configure este parâmetro pelo módulo Gestão Jurídica em Atualizações / Configuração / Pesquisa, aba Parâmetros. |  |
| MV_JALCADA | Utiliza controle de alçadas do módulo Compras? 1-Sim 2-Não | 2 |
| MV_JALTCT | Ajusta as informações do contrato, ao alterar as informações padrão do cliente? .T. True/Verdadeiro - Ajusta .F. False/Falso – Não ajusta | .T. |
| MV_JALTREG | Indica quais tipos de registros serão abertos em modo de alteração após a inclusão (1=Processos, 2=Follow-up, 3=Garantias, 4=Andamentos, 5=Desp, 6=Docto) | 1 |
| MV_JANDAUT | Recebe andamentos de forma automática. 1-Sim; 2-NãoImportante: Configure este parâmetro pelo módulo Gestão Jurídica em Atualizações / Configuração / Pesquisa, aba Parâmetros. | 2 |
| MV_JANDCAN | Restringe a manipulação de lançamentos referente a andamentos? 1- Sim; 2- Não. | 2  |
| MV_JANDEXC | Define se para de receber andamentos automaticamente quando o processo for encerrado 1-Sim; 2-Não.Importante: Configure este parâmetro pelo módulo Gestão Jurídica em Atualizações / Configuração / Pesquisa, aba Parâmetros. | 1 |
| MV_JAPROVE | Informe o Grupo de Aprovação default (padrão) a utilizar na aprovação de Garantias. |  |
| MV_JAREAC | Código da Área que será indicada automaticamente no campo NSZ_CAREAJ no momento da inclusão |  |
| MV_JATLIMI | Exibe mensagem para confirmar a atualização dos campos, ao cadastrar um andamento como liminar? 1- Sim; 2- Não. | 1 |
| MV_JATOAUT | Código do Ato processual que será utilizado para incluir os Andamentos de forma automática.Importante: Configure este parâmetro pelo módulo Gestão Jurídica em Atualizações / Configuração / Pesquisa, aba Parâmetros. |  |
| MV_JATOPUB | Parâmetro que indica o código do Ato Processual a ser utilizado no tombamento automático. |  |
| MV_JAVALIA | Habilita a avaliação da participação de Advogados, Credenciados, Envolvidos e Prepostos, no follow-up? 1- Sim; 2- Não. | 1 |
| MV_JBLQDIS | Bloqueia a inclusão /alteração de registro quando a data é inferior à data de distribuição? 1-Sim; 2-Não. |  |
| MV_JBLQDTF | Bloqueia a inclusão/ alteração de registro quando a data é maior que a data atual? 1-Sim; 2-Não. | 2 |
| MV_JBLQEMB | Utiliza-se como trava de embargos.Obriga a inclusão de justificativa ao alterar o prognóstico, sair da condição de provável, ou se houver alteração no valor envolvido.1-Sim ou 2-Não | 2 |
| MV_JBLQFER | Permite incluir follow-up aos finais de semana e feriados? 1- Sim; 2- Não. | 2 |
| MV_JBLQINC | Bloqueia a edição dos campos Prognóstico e Objeto quando o processo é um Incidente? .T. True/Verdadeiro – Bloqueia; .F. False/Falso – Não bloqueia. | .F. |
| MV_JBSIZE | Define o percentual para o grid em uma FWMBrowse no SIGAJURI, para as resoluções 800, 1024 e 120 DPIs. | 60,70,80 |
| MV_JCAFENC | Código da agência bancária a ser indicado na criação de levantamento automático com a integração financeira/contábil ativada. |  |
| MV_JCAGENC | Informe o código da agência bancária indicada na criação de levantamentos automáticos tendo a integração financeira / contábil ativada. |  |
| MV_JCASO1 | Defina a sequência da numeração do Caso. 1-Por cliente; 2-Independente do cliente. | 1 |
| MV_JCASO2 | Reaproveita lacunas existentes na numeração? .T. True/Verdadeiro - Reaproveita ou .F. False/Falso - Não reaproveita | .F. |
| MV_JCASO3 | Preserva o número do Caso de origem no remanejamento do Caso? .T. True/Verdadeiro – Preserva; .F. False/Falso – Não preserva. | .F. |
| MV_JCAWFCO | Caminho modelo do html de workflow de aceite de correspondente. | \WORKFLOW\MODELOS\ACEITE_CORRESPONDENTE.HTM |
| MV_JCBANCO | Informe o código do banco na criação do levantamento automático com a integração financeira / contábil ativada. Ex.: 033 (Banco Santander) |  |
| MV_JCCONTA | Informe o número da conta corrente indicada na criação de levantamentos automáticos tendo a integração financeira / contábil ativada. |  |
| MV_JCDWFCO | Código do processo de workflow do aceite de correspondente, que foi cadastrado no configurador em workflow. | 000001 |
| MV_JCFGFIX | Indique se a configuração da pesquisa tem campos Fixos ou Configuráveis. .T. True/Verdadeiro - Fixos .F. False/Falso – Configuráveis. | .F. |
| MV_JCFORNT | Código do fornecedor a ser indicado na criação de levantamento automático com a integração financeira/ contábil ativada. |  |
| MV_JCLDTFP | Informe a quantidade de meses anteriores à data de vencimento da outorga, para calcular a data final do protocolo. | 12 |
| MV_JCLDTIP | Informe a quantidade de meses anteriores à data de vencimento da outorga, para calcular a data inicial do protocolo. | 6 |
| MV_JCMOPRO | Código da moeda de provisão que será utilizada na atualização de provisão, quando a moeda não estiver preenchida, no Assunto Jurídico. | 01 |
| MV_JCNATUT | Qual a natureza financeira dos valores de correção e juros dos levantamentos? Ex.: 01NATLEV |  |
| MV_JCOLID | Matrícula do usuário configurado no parâmetro MV_ECMUSER para que não seja necessário ir até o Fluig em cada solicitação. |  |
| MV_JCONFUN | Define como será feita a consulta de funcionários no SIGAJURI (1=Consulta funcionários da filial logada; 2= Consulta funcionários com multi filiais).A funcionalidade multi filiais, está disponível apenas a partir da versão 12.1.17.Para as versões anteriores à 12.1.17 a consulta a funcionários será efetuada pela filial logada. | 1 |
| MV_JCRYSER | Defina a forma de geração dos relatórios Crystal, se pelo Server ou SmartClient. .T. True/Verdadeiro – Server; .F. False/Falso – Smartclient. (Descontinuado com a implementação da tecnologia FWMSPrinter) | .F. |
| MV_JCTBFIN | A contabilização dos levantamentos será feita via Contábil ou via módulo Financeiro? 1- Contábil; 2 - Financeiro. | 1 |
| MV_JCTIPOT | Qual é o tipo de título para os valores de correção e juros dos levantamentos? | NDF |
| MV_JDESCLI | Informe a Conta Contábil utilizada para as despesas de Clientes. |  |
| MV_JDISPWD | Password do WebService que deve ser utilizado para baixar as distribuições. |  |
| MV_JDISURL | URL do WebService da empresa que enviará as distribuições. | http://www.kurier.com.br/wsdistribuicao/wsDistribuicao.asmx |
| MV_JDISTOT | Define se a Distribuição TOTVS está ativa.1-Totvs; 2-Kurier ou 3-OITO | 2 |
| MV_JDISUSR | Login do WebService que dever ser utilizado para receber as distribuições. |  |
| MV_JDOCPAI | Código ID do documento na pasta raiz onde será criada a estrutura de documentos do Jurídico. |  |
| MV_JDOCUME | Informe qual é o tipo de integração de anexos: 1-Worksite; 2-Base de conhecimento. 3-Fluig. | 1 |
| MV_JDTENCE | Informe a quantidade de dias para lançamento da data de encerramento. |  |
| MV_JDTENTR | Informe a quantidade de dias para lançamento da data de entrada. | 0 |
| MV_JDTVLMO | É obrigatório o preenchimento dos campos: Data, Moeda e Valor? Sim; Não. | 1 |
| MV_JENCACR | Define o tipo de encerramento do processo, ao cadastrar um Acordo. 1- Automático; 2- Manual | 2 |
| MV_JENCAUT | O encerramento é automático ao encerrar o processo? 1- Sim; 2- Não. | 2 |
| MV_JENCFLW | Bloqueio de encerramento quando existir Follow-up onde tipo do Resultado seja diferente de concluído.1-Ativo ou 2-Desativado | 2 |
| MV_JENCINC | Encerra automaticamente os Incidentes? 1- Sim; 2- Não.Veja também o funcionamento deste parâmetro associado ao MV_JFTJURI no encerramento de Incidentes ou consulte DT em MJUR-419 DT Encerramento automático de Incidentes | 1 |
| MV_JENVENT | Habilita o cadastro tabelado de envolvidos a partir de informações de entidades externas? 1-Sim; 2-Não. | 1 |
| MV_JENVTAB | Indica se o cadastro de Envolvidos é tabelado, obrigando o preenchimento de Cliente e Loja. 1 - Sim; 2 - Não. | 2 |
| MV_JEXCFLH | Exclui os registros vinculados ao processo (1=Sim, 2=Não) | 1 |
| MV_JEXPPTA | Habilita a exportação personalizada por tipo de Assunto Jurídico? 1- Sim; 2- Não. | 1 |
| MV_JFLSUBP | Nome das pastas que serão criadas a partir da pasta de Caso. (separar os nomes com ;) |  |
| MV_JFLTPED | O campo Pedido Verba do cadastro de Pedido com Valor é filtrado pelo objeto do Assunto Jurídico? 1- Sim; 2- Não. | 2 |
| MV_JFLUIGA | Integração com o Fluig está ativada ? 1=Sim; 2=Não | 2 |
| MV_JFLXCOR | Fluxo de correspondente por Follow-up ou Assunto Jurídico? 1 - Follow-up; 2 - Assunto Jurídico | 1 |
| MV_JFORVAR | Foro e Vara são obrigatórios no Processo? 1- Sim / 2- Não. Para maiores informações acesse o Link. | 1 |
| MV_JFTJURI | Pela integração entre o JURI e PFS é obrigatório informar o Escritório de Faturamento e a Tabela de Honorários no Cadastro de Cliente? 1 - Sim; 2 - Não.Veja também o parâmetro MV_JENCINC no encerramento automático de Incidentes. | 1 |
| MV_JGEDATU | Habilita a atualização de documentos entre bases? 1- Sim; 2- Não. | 1 |
| MV_JGEDBMA | Há desdobramento da nota quando o valor supera o do contrato? .T. True/Verdadeiro – Pergunta ao operador; .F. False/Falso - Não pergunta ao operador. | .T. |
| MV_JGEDBME | Há desdobramento da nota quando o valor é inferior ao do Contrato? .T. True/Verdadeiro – Pergunta ao operador; .F. False/Falso - Não pergunta ao operador. | .T. |
| MV_JGEDDAN | Defina o nome do Database para documentos em Andamento. |  |
| MV_JGEDDEN | Defina o nome do Database para documentos Encerrados. |  |
| MV_JGEDDLL | Defina a .dll para a integração com o GED (Worksite). | SIGAGEDW.dll |
| MV_JGEDSEN | Defina o Server para documentos encerrados. |  |
| MV_JGEDSER | Defina o Server GED (WORKSITE). |  |
| MV_JGEDTL | Habilita o Trust Login na integração com o GED (WORKSITE)? .T. True/Verdadeiro; .F. False/Falso | .T. |
| MV_JGERDES | Habilitar a geração de despesa com base nos valores (1=Negociações; 2= Valor Final da causa) |  |
| MV_JHBPESA | Habilita a tela de pesquisa de Andamentos? 1- Sim; 2- Não. | 1 |
| MV_JHBPESD | Habilita a tela de pesquisa de Despesas e Custas? 1-Sim; 2-Não | 2 |
| MV_JHBPESF | Habilita a tela de pesquisa de Follow-up? 1- Sim; 2- Não. | 1 |
| MV_JHBPESG | Habilita a tela de pesquisa de Garantias/Alvarás? 1- Sim; 2- Não. | 2 |
| MV_JHBPESS | Habilita a Tela de Pesquisa de Solicit.Documentos? 1-Sim; 2-Não | 1 |
| MV_JHEXPO | Retira o hífen e utiliza a linha de agrupamento na exportação personalizada? 1 - Sim; 2 - Não. | 1 |
| MV_JIMPAUT | Habilita a importação automática de documentos? 1 - Sim; 2 - Não. |  |
| MV_JIMWFCO | Caminho com o logo da imagem que será apresentada no html de workflow de aceite de correspondente. | http://www.totvs.com/sites/all/themes/totvs/logo.png |
| MV_JINDPSW | Indica a senha que será utilizada para baixar as atualizações de índices no repositório da TOTVS.Exemplo: sigajuri |  |
| MV_JINDUSR | Indica o usuário/login que deve ser usado para baixar as atualizações de índices no repositório da TOTVS.Exemplo: sigajuri |  |
| MV_JINFIRM | Define que a integração financeira (títulos a pagar) entre SIGAJURI e RM está ativa..V. (True/Verdadeiro) Ativa; ou .F. (False/Falso) Não Ativa | .F. |
| MV_JINSATU | Habilita a exibição dos processos do usuário atual independente da instância atual estar como SIM ou NÃO (1-Habilita; 2-Desabilita) | 2 |
| MV_JINSTST | A publicação importada para o Cadastro de Andamento como Sentença, terá o campo Instância preenchido com a Instância atual? 1- Sim; 2- Não. | 2 |
| MV_JINTERH | Integra com o RH? 1- Sim; 2- Não. | 2 |
| MV_JINTJUR | Habilita a integração jurídica de bases? 1 – Ativada; 2 – Desativada. | 2 |
| MV_JINTVAL | Utiliza a integração de valores com os módulos Financeiro e Contábil? 1- Sim; 2- Não | 2 |
| MV_JKPASS | Defina a senha para conexão com o Webservice da Kurier. |  |
| MV_JKURL | Defina a URL do Webservice da Kurier para efetuar a conexão. |  |
| MV_JKURXML | Indica se a integração da Kurier e no modelo de base de dados ou envio de XML completo, usando busca de nomes pela Kurier 1-XML; 2-Base | 2 |
| MV_JKUSER | Defina o usuário na conexão com o Webservice da Kurier. |  |
| MV_JLEVGAR | Encerra o processo apenas quando o valor em juízo da Garantia é igual a zero (0)? 1-Sim; 2-Não. |  |
| MV_JLFORNT | Qual é a loja do fornecedor a indicar na criação dos levantamentos automáticos com a integração financeira / contábil ativada? |  |
| MV_JMULLIM | Define se ativa a regra de Múltiplas Liminares..T. True/Verdadeiro - Sim ; .F. False/Falso – Não | .T. |
| MV_JNATDES | Indica a natureza da despesa utilizada na gravação do título no Contas a Pagar. |  |
| MV_JNATGAR | Indica a natureza da garantia utilizada na gravação do título no Contas a Pagar. | IRF |
| MV_JNRCCAS | Defina o código do campo Custom do Caso GED (WORKSITE). |  |
| MV_JNRCCLI | Defina o código do campo Custom do Cliente GED (WORKSITE). |  |
| MV_JNT4CLI | Devem ser mostrados para o cliente os andamentos quando feita a importação da publicação? 1-Sim; 2-Não.O conteúdo = 1 efetua a conciliação sem qualquer interação do usuário; o conteúdo = 2 solicita a interação para registro de informações complementares. |  |
| MV_JNT4FAS | Informe o código da Fase Processual usado na importação de publicação. | 001 |
| MV_JNUCLI | Utiliza as lacunas na numeração de Clientes? .T. True/Verdadeiro – Utiliza; .F. False/Falso – Não utiliza. | .T. |
| MV_JNUMCNJ | Realiza validação do número do CNJ no número do processo? 1= Sim; 2= Não.Importante: Configure este parâmetro pelo módulo Gestão Jurídica em Atualizações / Configuração / Pesquisa, aba Parâmetros. | 2 |
| MV_JNUMPRO | Habilita travamento de inclusão duplicada para número de processo? 1- Habilita; 2- Desabilita. | 2 |
| MV_JOBRENC | Os campos da aba Encerramento são de preenchimento obrigatório? 1- Sim; 2- Não | 2 |
| MV_JOBRENV | Está habilitada a obrigatoriedade de preenchimento dos campos Cliente e Loja no Envolvido: 1-Habilitada; 2-Desabilitada. | 2 |
| MV_JORDENA | Informe a ordenação de pesquisa e relatório do processo: 1-Cliente\Loja\Caso; 2-Autor\Réu. | 1 |
| MV_JPERLEV | Qual é o percentual de valor permitido no levantamento, superior ao valor da garantia. |  |
| MV_JPESPEC | Habilita campo Pesquisa Geral para filtrar informações do Núm Processo; Nome Envolvido e Detalhamento do Objeto na pesquisa de processos. 1 - Sim; 2 - Não.Importante: Configure este parâmetro pelo módulo Gestão Jurídica em Atualizações / Configuração / Pesquisa, aba Parâmetros. | 2 |
| MV_JPREEXT | Prefixo que será utilizado para gerar o título a pagar que for gerado a partir do extrato de correspondente. | NZF |
| MV_JPRIPRG | Prioridade do Prognóstico. 1=Provável; 2=Possível; 3=Remoto; 4=Incontroverso | 1243 |
| MV_JPROCFW | Sugerir a inclusão de um follow-up após o cadastro do processo? | 2 |
| MV_JPSWRM | Senha do usuário que será utilizado para conectar no WebService da RM (wsDataServer) |  |
| MV_JPUBNUM | Habilita a atualização do número do processo a partir da publicação vinculada (1=Sim; 2=Não) | 1 |
| MV_JPUBTOT | Indica se será utilizado o serviço de publicações da TOTVS (1=Sim, 2=Não) | 2 |
| MV_JPWDEXT | Senha do usuário para anexar documentos no worksite através do SmartClientHTML (Externo). |  |
| MV_JQMES1A | Quantidade de meses para cálculo da previsão de término do processo, a partir da data da sentença de 1ª instância. |  |
| MV_JQMES2A | Quantidade de meses para cálculo da previsão de término do processo, a partir da data da sentença de 2ª instância. |  |
| MV_JQMESDT | Quantidade de meses para cálculo da previsão de término do processo, a partir da data da distribuição. |  |
| MV_JQMESTS | Quantidade de meses para cálculo da previsão de término do processo, a partir da data da sentença do Tribunal Superior. |  |
| MV_JQTDIAC | Quantidade de dias para aceite do correspondente quando for enviado um follow-up para ele. | 5 |
| MV_JRELCON | Informe o código do tipo de envolvimento a considerar no relatório. Se mais que um código, separe-os entre barras (/). |  |
| MV_JRESUFW | Defina para a inclusão, o código padrão de resultado do follow-up. | 001 |
| MV_JRSTCAD | Informe se está ativa a restrição de cadastros básicos. 1-Sim; 2-Não. | 1 |
| MV_JRTPAS | Executa restrição por Tipo de Assunto Jurídico ao pesquisar processos para vínculo? 1-Sim; 2-Não. |  |
| MV_JSIWFCO | Caminho do site que será aberto quando clicado na imagem no html de workflow de aceite de correspondente. | http://www.totvs.com/ |
| MV_JSOCAND | Informe o código do cadastro de Situação do Envolvido como: Em Andamento. |  |
| MV_JSUGPRO | Sugere o prognóstico automaticamente, de acordo com o objeto? 1- Sim; 2- Não. | 2 |
| MV_JTER95B | Informe o código de Tipo de Envolvimento para o relatório do societário. Se mais que um código, separe-os entre barras (/). Ex.: 01/02/03. |  |
| MV_JTETVCO | Informe o código do tipo de envolvimento para trava de concessões. Se mais que um código, separe-os entre barras (/).    Ex: 01/02/03/04 |  |
| MV_JTHEDTM | Grava as Horas Extras (HE) na data da primeira marcação, quando o tipo de HE do próximo dia for equivalente e o conteúdo do parâmetro MV_APHEDTM for S? 1- Sim; 2- Não. |  |
| MV_JTLATVR | Informe qual a tela de valores o sistema exibe para atualização, ao cadastrar um andamento como sentença. 1-Valores do processo; 2-Valores em discussão. |  |
| MV_JTPANAU | Modo de funcionamento da rotina de andamento automático. 1-Por processo; 2-Por instância.Importante: Configure este parâmetro pelo módulo Gestão Jurídica em Atualizações / Configuração / Pesquisa, aba Parâmetros. | 1 |
| MV_JTPDOC | Informe o tipo de documento jurídico: <R> Rede; <G> GED (Worksite). | G |
| MV_JTPENAC | Informe qual código de motivo de encerramento será sugerido, ao cadastrar um novo acordo. |  |
| MV_JTPIMP | Informe o tipo utilizado na importação de arquivos: 1-XML; 2-Kurier; 3-Ambos; |  |
| MV_JTPLEAU | Informe o código do Tipo utilizado no Levantamento Automático de Garantias. |  |
| MV_JTPTTB | Tipo do título dos valores de tarifas bancárias e impostos. |  |
| MV_JTRFWDR | Bloqueia follow-up com data retroativa? 1- Sim; 2- Não; | 1 |
| MV_JTRVADT | Bloqueia a inclusão de Andamentos com data futura ou inferior à data de distribuição? 1- Sim; 2- Não. | 1 |
| MV_JTRVEMP | Trava o campo Empresa na tela de Envolvidos, quando a opção Cliente está marcada como Não? 1-Sim; 2-Não. | 2 |
| MV_JTOMAUT | Parâmetro que indica se será realizado o tombamento automático das publicações localizadas. | 2 |
| MV_JTVCONC | Habilita a trava de Concessões por Sócio? 1-Sim; 2-Não. |  |
| MV_JTVENAN | Bloqueia as operações na tela de Andamento, quando o processo está encerrado? 1- Sim; 2- Não. | 1 |
| MV_JTVENDP | Bloqueia as operações na tela de Despesas quando o processo está encerrado? 1-Sim; 2-Não. | 1 |
| MV_JTVENFW | Bloqueia as operações na tela de Follow-up quando o processo está encerrado? 1- Sim; 2- Não. | 1 |
| MV_JTVENGA | Bloqueia as operações na tela de Garantias quando o processo está encerrado? 1- Sim; 2- Não. | 1 |
| MV_JTVENJF | Permite alterar com justificativa as telas bloqueadas no Encerramento do Processo? 1- Sim; 2- Não. | 1 |
| MV_JTVENPD | Bloqueia as operações na tela de Pedidos quando o processo está encerrado? 1- Sim; 2- Não. | 1 |
| MV_JTVENPH | Bloqueia as operações na tela de Pedidos Docs. RH quando o processo está encerrado? 1-Sim; 2-Não. | 1 |
| MV_JTVENPR | Bloqueia as operações na tela de Processo quando já está encerrado? 1- Sim; 2- Não. | 1 |
| MV_JVLPROV | Indica se o valor de provisão será o valor indicado no Processo (1 ou se virá da tela de valores dos pedidos 2)Importante: Configure este parâmetro pelo módulo Gestão Jurídica em Atualizações / Configuração / Pesquisa, aba Parâmetros. |  |
| MV_JTVRSEN | O sistema exibe a mensagem de confirmação para atualização de valores ao cadastrar um Andamento como Sentença? 1- Sim; 2- Não. | 1 |
| MV_JURHS1 | Habilita a gravação dos Históricos? .T. True/Verdadeiro - Sim ; .F. False/Falso – Não | .T. |
| MV_JURHS2 | Altera cadastros / ajusta histórico do mês anterior? .T. True/Verdadeiro – Ano-Mês anterior ao atual. .F. False/Falso – Ano-Mês atual e históricos maiores atualizado, são apagados. | .T. |
| MV_JURHS3 | Utiliza o histórico para participações de Clientes/Casos? .T. True/Verdadeiro – Utiliza; .F. False/Falso – Não utiliza. | .T. |
| MV_JURLAN1 | Informe a quantidade de dias úteis para digitar as despesas para casos encerrados. | 10 |
| MV_JURLRM | Informar a URL do WebService da RM e sua portaExemplo:http://127.0.0.1:8051 |  |
| MV_JUSREXT | Usuário para anexar documentos no worksite através do SmartClientHTML (Externo). |  |
| MV_JUSRRM | Nome so usuário que será utilizado para conectar no WebService da RM (wsDataServer) |  |
| MV_JUSTVIN | Indica se deve ser solicitado ao usuário uma justificativa ao vincular um processo (1-Indicentes; 2-Vinculados; 3-Relacionados ou 4-Todos) |  |
| MV_JVINCAF | Habilita o vínculo entre Andamento e Follow-ups? 1- Sim; 2- Não. | 1 |
| MV_JVLENOB | É obrigatório o preenchimento do campo Valor Envolvido? 1- Sim; 2- Não. | 2 |
| MV_JVLHIST | Indica se serão gravados os valores históricos da correção monetária, 1-Sim, 2-Não. | 1 |
| MV_JVLPROV | Indica se o valor de provisão será o valor indicado no Processo (1) ou se virá da tela de valores dos pedidos (2). | 1 |
| MV_JVLRCO | Define se na tela de valores/pedidos será utilizada a versão simplificada ou completa com todas as abas. 1-Completa; 2-Simplificada.Importante: Configure este parâmetro pelo módulo Gestão Jurídica em Atualizações / Configuração / Pesquisa, aba Parâmetros. | 2 |
| MV_JVLENC  |  Valida o  encerramento de processo onde se o parâmetro estiver habilitado, o sistema só permitirá  o encerramento quando os valores de risco dos pedidos estiverem zerados. |                                              .F. |
| MV_JWFAPRV | Parâmetro que guardará o ID do workflow de aprovação de atividades criado no Fluig. |  |
| MV_JWFCONS | Parâmetro que guardará o ID do workflow de inclusão de Consultas/Pareceres de atividades criado no FLUIG. |  |
| MV_JWSPESQ | Ativa o filtro de Cliente/Caso na pesquisa GED (WORKSITE)? 1- Sim; 2- Não. | 2 |

| Nome | Descrição | Conteúdo |
| --- | --- | --- |
| MV_MCUSTO | A moeda utilizada para verificação do limite de crédito é a mesma informada no Cadastro de Clientes? 1- Sim; 2- Não. | 2 |

| Nome | Descrição | Conteúdo |
| --- | --- | --- |
| MV_SABFERI | Considerar sábados como feriado quando da utilização da DataValida() | S |

| Nome | Descrição | Conteúdo |
| --- | --- | --- |
| MV_WFBFERI | IP ou nome do servidor HTTP                       | 127.0.01 |
| MV_WFBRWSR | IP ou nome do Servidor HTTP | 127.0.0.1 |

**

# Atualizações

As opções de Menu disponíveis são:

- [Administrativo](#)
- [Jurídico](#)
- [Assuntos Jurídicos](#)
- [Correção Monetária](#)
- [Configuração](#)
- [Gráficos](#)

 - [Escritórios](https://tdn.totvs.com/pages/viewpage.action?pageId=237398738)

   - Centros de Custo

   - [Áreas Jurídicas](https://tdn.totvs.com/pages/viewpage.action?pageId=238027255)

   - [Sub-áreas Jurídicas](https://tdn.totvs.com/pages/viewpage.action?pageId=238028100)

   - Moedas

   - Bancos

   - [Idiomas](https://tdn.totvs.com/pages/viewpage.action?pageId=238029474)

   - [Categorias de Participantes](https://tdn.totvs.com/pages/viewpage.action?pageId=238030410)

   - [Participantes](https://tdn.totvs.com/pages/viewpage.action?pageId=238031597)

   - [Clientes](https://tdn.totvs.com/pages/viewpage.action?pageId=238032817)

   - [Casos](https://tdn.totvs.com/pages/viewpage.action?pageId=238035924)

   - Contatos

   - [Grupos de Empresas](https://tdn.totvs.com/pages/viewpage.action?pageId=238038591)

   - [Rateios](https://tdn.totvs.com/pages/viewpage.action?pageId=271852571)

   - [Redutores](https://tdn.totvs.com/pages/viewpage.action?pageId=353283662)

**Assuntos Jurídicos**

 - [Ritos](https://tdn.totvs.com/pages/viewpage.action?pageId=239010183)

 - [Assunto](https://tdn.totvs.com/pages/viewpage.action?pageId=239010514)

 - [Prognósticos](https://tdn.totvs.com/pages/viewpage.action?pageId=239011164)

 - [Naturezas](https://tdn.totvs.com/pages/viewpage.action?pageId=239011258)

 - [Tipos de Ação](https://tdn.totvs.com/pages/viewpage.action?pageId=239015296)

 - [Comarcas](https://tdn.totvs.com/pages/viewpage.action?pageId=239016135)

 - [Decisões](https://tdn.totvs.com/pages/viewpage.action?pageId=239016667)

 - [Motivos de Encerramento](https://tdn.totvs.com/pages/viewpage.action?pageId=239016734)

 - [Motivos de Alteração](https://tdn.totvs.com/pages/viewpage.action?pageId=239016754)

 - [Classes](https://tdn.totvs.com/pages/viewpage.action?pageId=239016828)

 - [Tipos de Aditivo](https://tdn.totvs.com/pages/viewpage.action?pageId=239016866)

 - [Tipos de Contrato](https://tdn.totvs.com/pages/viewpage.action?pageId=239023739)

 - [Critérios de Julgamento](https://tdn.totvs.com/pages/viewpage.action?pageId=239017874)

 - [Modalidades de Licitação](https://tdn.totvs.com/pages/viewpage.action?pageId=239017919)

 - [Tipos de Marca](https://tdn.totvs.com/pages/viewpage.action?pageId=239018021)

 - [Situações da Marca](https://tdn.totvs.com/pages/viewpage.action?pageId=239018127)

 - [Naturezas da Marca](https://tdn.totvs.com/pages/viewpage.action?pageId=239018140)

 - [Áreas de Negócio](https://tdn.totvs.com/pages/viewpage.action?pageId=239018548)

 - [Tipos de Solicitação](https://tdn.totvs.com/pages/viewpage.action?pageId=239020226)

 - [Status Acordo](https://tdn.totvs.com/pages/viewpage.action?pageId=239020573)

 - [Tipos de Garantia](https://tdn.totvs.com/pages/viewpage.action?pageId=239020918)

 - [Tipos de Despesas](https://tdn.totvs.com/pages/viewpage.action?pageId=239021547)

 - [Tipos de Objetos](https://tdn.totvs.com/pages/viewpage.action?pageId=239023664)

 - [De/Para Comarca](/pages/viewpage.action?pageId=244919318)

 - [Divulgação](https://tdn.totvs.com/pages/viewpage.action?pageId=271865060)

 - [Causa Raiz](https://tdn.totvs.com/pages/viewpage.action?pageId=271865323)

 - [Base de Decisão](https://tdn.totvs.com/pages/viewpage.action?pageId=271865405)

 - [Fundamentos do Prognóstico](https://tdn.totvs.com/pages/viewpage.action?pageId=271865335)

 - [Campos Complementares NV3](http://tdn.totvs.com.br/pages/viewpage.action?pageId=318606623)

 - [Estimativa Término](https://tdn.totvs.com/pages/viewpage.action?pageId=345540382)

 - ```
Tipo de Documentos
```

 - [Tipos de Liminar](https://tdn.totvs.com/pages/viewpage.action?pageId=364928891)

 - [Redutores](https://tdn.totvs.com/pages/viewpage.action?pageId=353283662)

**Envolvidos**

 - [Tipos de Envolvimento](https://tdn.totvs.com/pages/viewpage.action?pageId=239023923)

 - [Advogados da Parte Contrária](https://tdn.totvs.com/pages/viewpage.action?pageId=239024534)

 - [Cargos](https://tdn.totvs.com/pages/viewpage.action?pageId=239024776)

 - [Funções](https://tdn.totvs.com/pages/viewpage.action?pageId=239024883)

 - [Locais de Trabalho](https://tdn.totvs.com/pages/viewpage.action?pageId=239025153)

 - [Negociações](https://tdn.totvs.com/pages/viewpage.action?pageId=239026015)

 - [Situações](https://tdn.totvs.com/pages/viewpage.action?pageId=239026038)

**Andamentos**

 - [Atos Processuais](https://tdn.totvs.com/pages/viewpage.action?pageId=239026303)

 - [Fases Processuais](https://tdn.totvs.com/pages/viewpage.action?pageId=239026649)

 - [Especialidades](https://tdn.totvs.com/pages/viewpage.action?pageId=239026658)

 - [Especialistas](https://tdn.totvs.com/pages/viewpage.action?pageId=239026948)

 - [Juizes](https://tdn.totvs.com/pages/viewpage.action?pageId=239035255)

 - [Tipos de Serviços](https://tdn.totvs.com/pages/viewpage.action?pageId=239035482)

**Follow-ups**

 - [Equipe](https://tdn.totvs.com/pages/viewpage.action?pageId=239035935)

 - [Tipos](https://tdn.totvs.com/pages/viewpage.action?pageId=239036012)

 - [Prepostos](https://tdn.totvs.com/pages/viewpage.action?pageId=239038767)

 - [Resultados](https://tdn.totvs.com/pages/viewpage.action?pageId=239038879)

 - [Modelos](https://tdn.totvs.com/pages/viewpage.action?pageId=239039035)

**Concessões**

 - [Abrangências](https://tdn.totvs.com/pages/viewpage.action?pageId=240297669)

 - [Gêneros](https://tdn.totvs.com/pages/viewpage.action?pageId=240297976)

 - [Espécies](https://tdn.totvs.com/pages/viewpage.action?pageId=240297987)

 - [Tipos de Outorga](https://tdn.totvs.com/pages/viewpage.action?pageId=240298042)

 - [Pesquisas](https://tdn.totvs.com/pages/viewpage.action?pageId=240299443)

 - [Andamentos](https://tdn.totvs.com/pages/viewpage.action?pageId=243632191)

 - [Follow-ups](https://tdn.totvs.com/pages/viewpage.action?pageId=243632731)

 - [Garantias e Alvarás](https://tdn.totvs.com/pages/viewpage.action?pageId=243633944)

 - [Despesas e Custas](https://tdn.totvs.com/pages/viewpage.action?pageId=243639934)

 - [Solicitação de Documentos](https://tdn.totvs.com/pages/viewpage.action?pageId=341215386)

 - [Importação de Publicações](https://tdn.totvs.com/pages/viewpage.action?pageId=243641938)

 - [Contabilização](https://tdn.totvs.com/pages/viewpage.action?pageId=243662584)

 - [Auditoria](https://tdn.totvs.com/pages/viewpage.action?pageId=351387298)

 - [Campos Complementares](https://tdn.totvs.com/pages/viewpage.action?pageId=351387336)

 - [Marcas](https://tdn.totvs.com/pages/viewpage.action?pageId=351387355)

 - [Gerar](https://tdn.totvs.com/pages/viewpage.action?pageId=351387365)

 - [Comparar](https://tdn.totvs.com/pages/viewpage.action?pageId=351387380)

 - [Auditoria Provisão](https://tdn.totvs.com/pages/viewpage.action?pageId=305929641)

 - [Distribuições](https://tdn.totvs.com/pages/viewpage.action?pageId=286021332)

**Correspondente**

 - [Tipos de Contrato Correspondente](https://tdn.totvs.com/pages/viewpage.action?pageId=239023739)

 - [Correspondentes](https://tdn.totvs.com/pages/viewpage.action?pageId=266967826)

**Extratos**

 - [Processamento](https://tdn.totvs.com/pages/viewpage.action?pageId=269080446)

 - [Conferência](https://tdn.totvs.com/pages/viewpage.action?pageId=269078816)

 - [Relatório](https://tdn.totvs.com/pages/viewpage.action?pageId=269082092)

 - [Pagamentos](https://tdn.totvs.com/pages/viewpage.action?pageId=269082041)

**Serviços**

 - [Wizard Andamentos Automáticos](https://tdn.totvs.com/pages/viewpage.action?pageId=244744027)

 - [Relatório Uso Andamentos](https://tdn.totvs.com/pages/viewpage.action?pageId=244927072)

 - # Índices

 - [Valores dos índices](https://tdn.totvs.com/pages/viewpage.action?pageId=286024988&moved=true)

 - [Formas de Correção](https://tdn.totvs.com/pages/viewpage.action?pageId=306841393)

 - [Valores Atualizáveis](https://tdn.totvs.com/pages/viewpage.action?pageId=306841817)

 - [Log Atualização](https://tdn.totvs.com/pages/viewpage.action?pageId=287077368)

 - [Pesquisas](https://tdn.totvs.com/pages/viewpage.action?pageId=243636380)

 - [Exportação Personalizada](https://tdn.totvs.com/pages/viewpage.action?pageId=307828346)

 - [Envio de e-mail](https://tdn.totvs.com/pages/viewpage.action?pageId=307828658)

 - [Anexos Worksite](https://tdn.totvs.com/pages/viewpage.action?pageId=307829154)

 - [Restrições de Cadastros Básicos](https://tdn.totvs.com/pages/viewpage.action?pageId=307829546)

 - **Relatórios**

   [Relatório de Assunto Jurídico](https://tdn.totvs.com/pages/viewpage.action?pageId=287079731)

   - [Parâmetros dos relatórios](https://tdn.totvs.com/pages/viewpage.action?pageId=287079931)

   - [Configuração dos Relatórios](https://tdn.totvs.com/pages/viewpage.action?pageId=287080028)

   - [Layout dos Relatórios ](https://tdn.totvs.com/pages/viewpage.action?pageId=287080195)

   - [Textos](https://tdn.totvs.com/pages/viewpage.action?pageId=287080238)

   - [Variáveis](https://tdn.totvs.com/pages/viewpage.action?pageId=287080283)

 Integrações

   - [Integrações Financeiras](https://tdn.totvs.com/pages/viewpage.action?pageId=357602829)

   - [Integração Fluig](https://tdn.totvs.com/pages/viewpage.action?pageId=367232771)

 - [Casos Aber Enc Mensal](https://tdn.totvs.com/pages/viewpage.action?pageId=287079302)

 - [Casos Abertos Período](https://tdn.totvs.com/pages/viewpage.action?pageId=287079461)

# Consultas

As opções de Menu disponíveis são:

- Genéricos

# Miscelânea

As opções de Menu disponíveis são:

- [Configurações](#)

 - [Regras de Preenchimento](https://tdn.totvs.com/pages/viewpage.action?pageId=287078594)

 - [Legendas de Rotinas](https://tdn.totvs.com/pages/viewpage.action?pageId=287078876)

 - [Agrupamentos de Campos](https://tdn.totvs.com/pages/viewpage.action?pageId=287078981)

 - [Log de Integração Jurídica](https://tdn.totvs.com/pages/viewpage.action?pageId=287079054)

 - [Log Importação Publicações](https://tdn.totvs.com/pages/viewpage.action?pageId=287079091)

 - [Atualização Base Conhecimento](https://tdn.totvs.com/pages/viewpage.action?pageId=287079180)


<!-- anchors: GestãoJurídicaProtheus12-Índice, GestãoJurídicaProtheus12-Objetivo, GestãoJurídicaProtheus12-Parâmetros/Configurações, samples, samples-1, samples-2, samples-3, samples-4, samples-5, GestãoJurídicaProtheus12-Atualizações, samples, samples-1, samples-2, samples-3, samples-4, GestãoJurídicaProtheus12-Índices, samples-5, samples-6, GestãoJurídicaProtheus12-Consultas, GestãoJurídicaProtheus12-Miscelânea, samples, samples-1 -->
