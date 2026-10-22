---
title: "EIC0013_Formação de Valores no pré cálculo"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=286016575"
scraped_at: "2026-03-09T05:27:31.971Z"
depth: 4
anchors: 23
child_links: 217
---

# EIC0013_Formação de Valores no pré cálculo

****

## VISÃO GERAL

A rotina de pré-calculo tem o objetivo de realizar a previsão de cálculo das despesas e impostos a partir da tabela de pré-calculo utilizada no processo.

O sistema realiza a impressão do mesmo por item e por P.O. (Purchase Order). O valores são apurados de acordo com a moeda da despesa cadastrada na tabela e são apresentadas no relatório nas moedas "Real(R$)" e "Dolar(US$)". Caso o purchase order esteja utilizando moeda diferente das citadas anteriormente, o sistema realiza as devidas conversões e apresenta os valores calculados.

## EXEMPLO DE UTILIZAÇÃO

- Acesse o menu "Atualizações->Financeiro->Pre-Calculo". 
- Na tela de parâmetros, informe o pedido para qual deseja imprimir o pré-calculo e clique em "Ok".
- Na tela de montagem do pré-calculo, informe a tabela desejada e clique em "Confirmar".
- Na tela seguinte, acessando o botão "Outras ações", será possivel imprimir o pré-calculo por Item ou por P.O., escolha uma das opções e clique em "Ok" para impressão do relatório.

## FORMAÇÃO DE VALORES

#### FOB

O sistema inicia o processamento do Pré-Cálculo criando a tabela SWH que grava os valores por item de cada Purchase Order a ser gerado.

Há uma regra específica para a procura de cotação da moeda para o Pré-Cálculo:

Se existir taxa gravada para esse processo no campo de taxa do desembraço é buscada desse campo. Já se não existir registro nesse campo, o sistema irá buscar a taxa da moeda no dia corrente do sistema (Data Base). Além disso, se não houver cotação para o dia corrente, o sistema irá buscar a ultima cotação da moeda em questão e fará os cálculos.

A despesa FOB (101) só será emitida no relatório se a condição de pagamento do Purchase Order em questão possuir Cobertura Cambial.

O valor FOB é formado pelo preço unitário * quantidade de cada item na moeda estrangeira e na moeda corrente, no caso, Dólar Americano (US$) e Real (R$).

![](/download/attachments/554660153/image2020-7-8_13-57-30.png?version=1&modificationDate=1594227451033&api=v2)

Resumindo, no exemplo acima citado, o sistema deverá apresentar os valores em US$ e em R$ de todos os itens (se for escolhida a opção de geração do relatório por item) ou apenas o total do Purchase Order (se for escolhida a opção de geração do relatório por PO).

#### Formação do valor FOB agrupado por data de embarque

Através do campo **"Ger. Prov."** na aba financeiro é possível agrupar a formação do Valor FOB por data de embarque.

1. **Ger.Prov = "1-PO" ** os títulos provisórios (PR's) serão gerados a partir da menor data de embarque dos itens e seu valor será o total dos itens do processo.
2. **Ger.Prov = "2-Embarque/Entrega"** os títulos provisórios (PR's) serão gerados por data de embarque 

Utilizando a tabela acima como exemplo com o campo configurado como "1-PO", será gerado um título de R$4500,00. 

Caso esteja configurado como "2-Embarque/Entrega" e supondo que o Produto 01 tenha uma data de embarque diferente do Produto 02, serão gerados dois títulos provisórios, um no valor de R$2000,00 e outro no valor de R$2500,00, baseados nas respectivas data de embarque.

*Configuração: "MV_EASYFPO" habilitado.*

#### FRETE

Sabemos que no cadastro da tabela de Pré-Calculo existe um campo de porcentagem que será aplicado sobre a despesa base, se for escolhida opção de porcentagem para essa despesa, e também o campo de moeda da despesa.

No frete o cálculo é diferente. Não importa o que você informar nesses campos no cadastro, o sistema irá ignorar.

Primeiramente, é necessário entender as faixas de preço do frete. No cadastro da Via de Transporte existe essa funcionalidade que interfere diretamente no resultado final de frete no Pré-Calculo. Esse controle será usado apenas quando não existir informação de Containers na capa do Purchase Order e no cadastro de Containers na Via de Transporte.

O calculo do frete se inicia com a configuração da moeda a ser tratada. A moeda do frete será a informada na Via de Transporte vinculada ao Purchase Order que está sendo base do relatório.

Depois de configurar a despesa frete do Purchase Order, o sistema irá verificar se os campos de contêiner no Purchase Order estão preenchidos. Se estiverem, o sistema fará os cálculos do frete em cima dessas informações de acordo com o cadastro de taxas dos containers no cadastro de via de transporte.

Por outro lado, se o sistema não encontrar conteúdo nos campos de Contêiner na capa do Purchase Order e no cadastro de taxas de containers, será verificado se existe valor cubado informado no processo.Caso encontrado o cálculo será feito por ele.

Além desses, ainda existem regras mais específicas para o frete no Pré-Calculo. Digamos que temos o cenário em que não temos valores de Containers informados, e nem de valor cubado, o sistema verificará o peso líquido do processo e fará os cálculos de frete em cima dessa informação, de acordo com o cadastro de faixas de preço presente na Via de Transporte.

Nos tratamentos de frete no Pré-Calculo, o sistema tem ainda a funcionalidade de calcular os valores baseado em uma paridade da moeda do processo com a moeda da Via de Transporte, caso sejam diferentes, pois o Pré-Calculo sempre será impresso de acordo com a moeda do processo.

Além de todos esses cálculos, caso do valor do frete seja informado no campo W2_FRETEIN, o sistema não irá calcular o frete e sim assumir o valor informado neste campo.

Outro ponto importante é que os títulos PR são calculados com base do saldo do PO, ou seja, se o PO já possui alguma quantidade embarcada, somente a quantidade que ainda não foi embarcada irá gerar PR. Esse PR terá valor proporcional a este saldo. Isto vale também para o cálculo do PR do frete.

Com isso temos a seguinte ordem de grandeza para que o sistema efetue o cálculo:

Valor informado no W2_FRETEIN > Cálculo por container > Cálculo por valor cubado > Faixa de preço na via de transporte * peso líquido

No caso do campo Fin. Frete do embarque/desembaraço estiver como 2-Emissão da NF, o sistema pegará as informações do frete da capa do processo para gerar o valor do título provisório.

Importante

Mais detalhes sobre o vencimento do frete no tópico abaixo "Data de vencimento das despesas"

#### SEGURO

A despesa de seguro seguirá o valor percentual informado no cadastro da tabela de Pré-Calculo. O calculo é feito, tendo como base o valor FOB (Preço * Quantidade). Vamos imaginar que temos um valor FOB de US$ 2000,00 e na tabela de Pré-Calculo foi informado que o percentual a ser aplicado de seguro é de 5%, logo teremos um valor de seguro de US$ 100,00 e R$ 200,00 se aplicarmos a taxa de conversão. Como o seguro fará parte do valor CIF, muita atenção ao lançamento dessa despesa. ((Despesa base * Percentual = SeguroUS$) * Taxa = SeguroR$).

No caso do campo Fin. Seguro do embarque/desembaraço estiver como 2-Emissão da NF, o sistema pegará as informações do seguro da capa do processo para gerar o valor do título provisório.

Importante

Mais detalhes sobre o vencimento do seguro no tópico abaixo "Data de vencimento das despesas"

#### IMPOSTOS

No cadastro das tabelas de Pré-Calculo sabemos que existem percentuais a serem informados quando o tipo de cálculo da despesa em questão for “Percentual”. No caso dos impostos essa informação também não é relevante assim como no frete. O sistema buscará as alíquotas direto do Cadastro de Ncm do item em questão. Vamos imaginar que temos um processo com US$ 1.000,00 de valor da mercadoria, um valor de frete de US$ 50,00 e um valor de seguro de US$ 5,00. Isso nos dá um total de US$ 1.055,00. A partir dessa informação vejamos como ficariam os cálculos dos impostos, levando em consideração que temos apenas um item no processo. Na tabela abaixo encontra-se as alíquotas de impostos relacionadas à NCM do produto no nosso processo de exemplo:

![](/download/attachments/554660153/image2020-7-8_15-18-37.png?version=1&modificationDate=1594232317583&api=v2)

#### II ( Imposto de Importação)

O valor de II é o cálculo de imposto mais simples, porém muito importante, pois será base de todos os outros. O cálculo é o valor da mercadoria multiplicado pela alíquota de II. ((CIF * II% = II US$) * Taxa = II R$).

Observe os resultados a seguir:

![](/download/attachments/554660153/image2020-7-8_15-26-31.png?version=1&modificationDate=1594232791290&api=v2)

#### IPI (Imposto sobre Produto Industrializado)

O valor de IPI é calculado praticamente como o II, porém o valor de II será integrado ao valor da mercadoria, e servirá como base de cálculo, e depois multiplicado pela alíquota de IPI. (((CIF + II US$) * IPI%) * Taxa = IPI R$).

Observe os resultados a seguir:

![](/download/attachments/554660153/image2020-7-8_15-27-58.png?version=1&modificationDate=1594232878163&api=v2)

#### ICMS para PIS / COFINS

O valor de PIS e Cofins é calculado de uma forma diferente dos demais impostos. Por isso é preciso antes de mais nada calcularmos o valor de ICMS que será utilizado para o cálculo desses dois impostos. Como regra de cálculo, para esses dois impostos se utiliza uma alíquota de ICMS para PIS e Cofins, que pode ser ou não diferente da alíquota de ICMS propriamente dita. O valor é formado pela soma do valor da mercadoria, valor de II e valor de IPI, essa soma dividida por um menos a alíquota de ICMS para PIS e Cofins, e tudo isso se multiplica pela alíquota de ICMS. (((((CIF + II US$ + IPI US$) / (1 – (ICMS%))) * ICMS%)) * Taxa = ICMS’ R$).

![](/download/attachments/554660153/image2020-7-8_15-29-45.png?version=1&modificationDate=1594232985117&api=v2)

#### PIS (Programa de Integração Social)

Agora que já temos o valor de ICMS para PIS/Cofins, podemos calcular o valor de PIS. Esse cálculo se constrói pela soma do valor da mercadoria e o valor de ICMS’ para PIS/Cofins calculado no passo anterior, e essa soma é dividida por um menos alíquota de PIS menos alíquota de Cofins, e esse resultado multiplicado pela alíquota de PIS nos dará o valor pretendido. ((((CIF + ICMS’ US$) / (1 – PIS% - Cofins%)) * PIS%) * Taxa = PIS R$).

![](/download/attachments/554660153/image2020-7-8_15-30-26.png?version=1&modificationDate=1594233026660&api=v2)

#### COFINS (Contribuição para o Financiamento da Seguridade Social)

O cálculo do valor de Cofins é praticamente o mesmo do PIS, porém a alíquota aplicada no cálculo será a do Cofins. O cálculo é montado pela soma do valor da mercadoria e o valor de ICMS para PIS/Cofins, e essa soma é dividida por um menos alíquota de PIS menos alíquota de Cofins, e esse resultado multiplicado pela alíquota de Cofins nos dará o valor pretendido. ((((CIF + ICMS’ US$) / (1 – PIS% - Cofins%)) * Cofins%) * Taxa = Cofins R$).

![](/download/attachments/554660153/image2020-7-8_15-31-11.png?version=1&modificationDate=1594233071263&api=v2)

#### ICMS (Imposto sobre Circulação de Mercadorias e Prestação de Serviços)

O cálculo de ICMS é um aglomerado de todos os resultados encontrados de impostos. O valor é calculado pela soma do valor da mercadoria, valor de II, valor de IPI, valor de PIS e valor de Cofins, tudo isso dividido por 1 menos a alíquota de ICMS. ((((CIF + II US$ + IPI US$ + PIS US$ + Cofins US$) / (1 – ICMS%)) * ICMS%) * Taxa = ICMS R$).

![](/download/attachments/554660153/image2020-7-8_15-31-53.png?version=1&modificationDate=1594233113297&api=v2)

## Formação dos Valores de Despesas

No cadastro de tabelas de Pré-Calculo, podem ser lançadas despesas incluídas pelo usuário. Nesse cadastro o usuário irá informar as regras que deseja para cada despesa vinculada a tabela de Pré-Calculo, e serão essas regras que serão respeitados pelo relatório. Para exemplificar, aqui usaremos quatro despesas, duas do tipo valor com moedas diferentes e outras duas tipo percentual com moedas diferentes.

![](/download/attachments/554660153/image2020-7-8_15-32-34.png?version=1&modificationDate=1594233154050&api=v2)

Se considerarmos o valor CIF que estava sendo usado para o cálculo dos impostos, teremos um valor de US$ 1055,00. Esse valor multiplicado pela taxa de conversão será de R$ 2110,00. Com essa informações, vamos aos cálculos de despesas. Comecemos pelas despesas do tipo percentual.

#### Despesas do tipo percentual:

Seguindo a tabela anteriormente informada, as despesas bases de ambas as despesas do tipo percentual é o CIF.

Despesa 600 e 601: Nesse cenário, teremos o valor CIF multiplicado pelo percentual informado no cadastro da tabela de Pré-Calculo em questão. (CIF * 10% = Despesa 600) e (CIF * 5% = Despesa 601). Há um detalhe importante a ser considerado, não importa a moeda que está sendo informada na tabela de Pré-Calculo, o sistema sempre irá imprimir os valores na moeda estrangeira e na moeda corrente. Então teremos, no casos dessas duas despesas, o valor de US$ 105,50 e R$ 211,00 para a despesa 600 ((US$ 1055,00 * 10% =US$ 105,50) * Taxa = R$ 211,00), e o valor de US$ 52,75 e R$ 105,50 para a despesa 601 ((US$ 1055,00 * 5% =US$ 52,75) * Taxa = R$ 105,50).

Despesa 602 e 603: Já nesse cenário, o sistema irá imprimir exatamente o valor informado no cadastro, porém fará a conversão sobre a taxa corrente para achar os valores corretos das despesas em cada moeda. Teremos então o valor de US$ 100,00 e R$ 200,00 para a despesa 602(US$ 100,00 * Taxa = R$ 200,00), e o valor de US$ 50,00 e R$ 100,00 para a despesa 603 (R$ 100,00 / Taxa = US$ 50,00).

#### Formação dos Valores Totais

Os totais do Pré-Calculo são apenas somas de previsões com ou sem determinados impostos. São informadas combinações de valores, como mostra a tabela abaixo:

![](/download/attachments/554660153/image2020-7-8_15-33-33.png?version=1&modificationDate=1594233213920&api=v2)

#### Despesas base de imposto e base ICMS

As despesas base de imposto e icms definidas na tabela de pré-calculo são obtidas por percentual de outras despesas e não somente por valor fixo. Para isso temos o parâmetro (MV_EIC0068) que irá definir o comportamento das rotinas quanto ao cadastro da tabela e cálculo dos impostos previstos, sendo eles:

0 - Comportamento atual do sistema (não exibe avisos sobre referências circulares no cadastro da tabela quando inseridas despesas base obtidas por percentual de outras despesas e não calcula despesas base de imposto/ICMS quando definidas por percentual)

1 - Dispara avisos sobre referências circulares durante cadastro da tabela / Calcula os impostos considerando as despesas base de Imposto e ICMS por percentual na base de cálculo / Não agrega o valor das despesas base de impostos no valor CIF do relatório de pré-cálculo

2 - Dispara avisos sobre referências circulares durante cadastro da tabela / Calcula os impostos considerando as despesas base de Imposto e ICMS por percentual na base de cálculo / Agrega o valor das despesas base de impostos no valor CIF do relatório de pré-cálculo

#### Pré-calculo de despesas por valor fixo multiplicado pela quantidade de containers

É permitido a inclusão de despesas, calculadas por um valor fixo multiplicado pela quantidade de containers na Tabela de Pré-Calculo (EICTC210).

A despesa poderá ser configurada com tipo 5 = Container no cadastro de despesa e na tabela de pré-cálculo.

Desta maneira, a despesa será calculada através da soma dos valores estipulados por tipo de container na Tabela de Pré-Calculo (EICTC210), multiplicado pela quantidade do respectivo tipo de container informado no Purchase Order (EICPO400) e/ou Embarque (EICDI501).

O cálculo será válido para geração de títulos provisórios PR e PRE no Contas a Pagar (FINA050) do módulo Financeiro (SIGAFIN) e também para os relatórios gerenciais de Pré-Cálculo (EICTP251) e Previsão de Desembolso (EICTP252).

Os cálculos das despesas por quantidade de container são independentes para os títulos provisórios PR e PRE e respeitam a quantidade de containers informada no Pedido e Embarque, e não no saldo dos itens embarcados.

O cálculo dos valores dos relatórios e títulos são realizados com base nos valores inseridos na tabela de pré-cálculo, para facilitar a inclusão dos dados, a moeda e os valores inseridos no cadastro de despesa (EICA110), são gatilhados para a tabela de pré-cálculo.

Quando a despesa for realizada, o valor definitivo deverá ser informado na tela de despesas do desembaraço, para que o título efetivo seja gerado e os títulos provisórios sejam excluídos.

## Data de Vencimento das Despesas da Tabela de Pré-Cálculo

#### Data de Vencimento das Despesas do Purchase Order (PO): PR

A data de vencimento das despesas é determinada com base na data de entrega dos itens do PO. Atualmente, adotamos a menor data de entrega entre todos os itens do pedido para esse propósito.

Quando o parâmetro "MV_EASYFPO" está habilitado, o campo "Gerar Provisório" (W2_GERPROV), com conteúdo "1-PO" ou vazio, determinará o uso da data de vencimento conforme mencionado acima.

No caso de o parâmetro estar configurado como "2-Embarque/Entrega", o sistema utilizará as datas de cada item para agrupar e gerar os títulos provisórios das despesas com base nas datas agrupadas.

Exemplo:  Se houver um processo com três itens no valor de R$500,00 cada, sendo um deles para o dia 15 deste mês e os outros dois para o dia 20 do mesmo mês. Nesse cenário, serão gerados dois títulos provisórios para essas despesas: um no valor de R$500,00 com vencimento no dia 15 e outro no valor de R$1000,00 com vencimento no dia 20.

É importante ressaltar que a inclusão de uma despesa na tabela de pré-cálculo também influenciará a geração do título provisório, levando em conta a data de entrega em vez da data de embarque.

#### Data de Vencimento das Despesas no processo de embarque: PRE

Quando o parâmetro "MV_EASYFDI" estiver habilitado, as datas de vencimento serão adquiridas através de uma hierarquia de possibilidades. Para mais detalhes, acessar o link relacionado no CONTEÚDOS RELACIONADOS.

Vencimentos Frete/Seguro/Invoice

O vencimento do frete, seguro ou invoice  serão calculados conforme o campo Data base da condição de pagamento (frete e seguro fica no embarque ou desembaraço e a invoice na própria invoice).

Este campo Data Base pode ter as seguinte opções:

1-Data do Embarque

 2-Emissão da Invoice

 3-Parâmetro MV_DTB_APD

     Que tem a seguinte regra:

1. Retornar o campo específico, se existir e não estiver vazio.
2. Se o campo específico não existir ou estiver vazio, retornar o conteúdo do parâmetro `MV_DTB_APD`.
3. Se o parâmetro `MV_DTB_APD` estiver vazio, retornar a data do embarque (`W6_DT_EMB`).
4. Se a data do embarque (`W6_DT_EMB`) estiver vazia, retornar a previsão de embarque (`W6_DT_ETD`).

Vencimento na fase do Purchase Order Título PR

O vencimento das despesas na fase do purchase order é calculado somando-se a "Qtde de Dias" da tabela de pré-cálulo à data de entrega. Entretanto, se a data resultante for anterior à data base, o vencimento passa a ser a própria data base. Em outras palavras, primeiro determina-se o vencimento por “data de entrega + dias”; caso esse vencimento fique antes da data base, prevalece a data base como data de vencimento.

## CONTEÚDOS RELACIONADOS

[Tabela de Pré-cálculo (Acervo)](/pages/viewpage.action?pageId=555265254)

[EIC0013_Formação de Valores no pré cálculo](/pages/viewpage.action?pageId=286016575)

[DT DTRADE-9213 Criação de títulos provisórios na fase do PO agrupados por data do embarque](/pages/viewpage.action?pageId=778782928)

[Como o sistema compõe a data de vencimento de títulos PRE?](/pages/viewpage.action?pageId=397378456)


<!-- anchors: EIC0013_FormaçãodeValoresnoprécálculo-VISÃOGERAL, EIC0013_FormaçãodeValoresnoprécálculo-EXEMPLODEUTILIZAÇÃO, EIC0013_FormaçãodeValoresnoprécálculo-FORMAÇÃODEVALORES, EIC0013_FormaçãodeValoresnoprécálculo-FOB, EIC0013_FormaçãodeValoresnoprécálculo-FormaçãodovalorFOBagrupadopordatadeembarque, EIC0013_FormaçãodeValoresnoprécálculo-FRETE, EIC0013_FormaçãodeValoresnoprécálculo-SEGURO, EIC0013_FormaçãodeValoresnoprécálculo-IMPOSTOS, EIC0013_FormaçãodeValoresnoprécálculo-II(ImpostodeImportação), EIC0013_FormaçãodeValoresnoprécálculo-IPI(ImpostosobreProdutoIndustrializado), EIC0013_FormaçãodeValoresnoprécálculo-ICMSparaPIS/COFINS, EIC0013_FormaçãodeValoresnoprécálculo-PIS(ProgramadeIntegraçãoSocial), EIC0013_FormaçãodeValoresnoprécálculo-COFINS(ContribuiçãoparaoFinanciamentodaSeguridadeSocial), EIC0013_FormaçãodeValoresnoprécálculo-ICMS(ImpostosobreCirculaçãodeMercadoriasePrestaçãodeServiços), EIC0013_FormaçãodeValoresnoprécálculo-FormaçãodosValoresdeDespesas, EIC0013_FormaçãodeValoresnoprécálculo-Despesasdotipopercentual:, EIC0013_FormaçãodeValoresnoprécálculo-FormaçãodosValoresTotais, EIC0013_FormaçãodeValoresnoprécálculo-DespesasbasedeimpostoebaseICMS, EIC0013_FormaçãodeValoresnoprécálculo-Pré-calculodedespesasporvalorfixomultiplicadopelaquantidadedecontainers, EIC0013_FormaçãodeValoresnoprécálculo-DatadeVencimentodasDespesasdaTabeladePré-Cálculo, EIC0013_FormaçãodeValoresnoprécálculo-DatadeVencimentodasDespesasdoPurchaseOrder(PO):PR, EIC0013_FormaçãodeValoresnoprécálculo-DatadeVencimentodasDespesasnoprocessodeembarque:PRE, EIC0013_FormaçãodeValoresnoprécálculo-CONTEÚDOSRELACIONADOS -->
