---
title: "EIC0011_Impostos_no_processo_de_importação_por_Conta_e_Ordem"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=271871355"
scraped_at: "2026-03-09T05:27:27.602Z"
depth: 4
anchors: 1
child_links: 192
---

# EIC0011_Impostos_no_processo_de_importação_por_Conta_e_Ordem

# Impostos no processo de importação por Conta e Ordem

| Produto: | Easy Import Control - SIGAEIC |  |  |
| --- | --- | --- | --- |
| Versões: | V11 e V12 |  |  |
| Ocorrência: | Impostos no Conta e Ordem |  |  |
| Passo a passo: | Parâmetro | Tipo | Descrição |
| MV_EIC0026 | Lógico | Define se o IPI não irá compor a base do IPI no processo de Conta e Ordem. Para compor o conteúdo deve ser .T., para não compor o conteúdo deve ser .F.. |  |
| MV_EIC0027 | Lógico | Define se os valores de PIS e COFINS serão enviados para a Nota Fiscal no SIGACOM. Para enviá-los o conteúdo deve ser .T., para não enviá-los o conteúdo deve ser .F.. |  |
| MV_EIC0029 | Caracter | Define se no cálculo de Carga Tribut. Equivalente de ICMS o valor do ICMS na base de cálculo é obtido pela alíquota normal (N) ou pela alíquota reduzida (R). |  |
| MV_EIC0018 | Lógico | Indica se deve ser considerado o ICMS Reduzido na base de calculo do IPI na Nota Fiscal de Transferência da Importação por Conta e Ordem. |  |

**Cenário: Cliente é o Importador**

 Importador é a empresa que efetivamente responde pela importação da mercadoria, com desembaraço, e responsabilidade sobre a carga.

**1. Formação do Valor FOB**

O valor FOB é formado pelo preço unitário * quantidade de cada item na moeda estrangeira e na moeda corrente, deste documento utilizaremos as moedas Dólar Americano (US$) e Real (R$), ou seja:

| Valor unitário dos itens | US$ 450,00 |
| --- | --- |
| Quantidade dos itens | 2 |
| Valor FOB | US$ 900,00 |
| Taxa | 3,00 |
| Valor FOB | R$ 2700,00 |

O valor CIF é formado pelo valor FOB calculado anteriormente somado ao valor de frete e seguro do processo, somado ao valor de acréscimos do processo e subtraído ao valor de descontos do processo, no caso deste documento usaremos Dólar Americano (US$) e Real (R$), ou seja:

**1.1. Formação do Valor CIF (Base II)**

O valor CIF é formado pelo valor FOB calculado anteriormente somado ao valor de frete e seguro do processo, somado ao valor de acréscimos do processo e subtraído ao valor de descontos do processo, no caso deste documento usaremos Dólar Americano (US$) e Real (R$), ou seja:

| Valor FOB | US$ 900,00 |
| --- | --- |
| Valor Frete | US$ 40,00 |
| Valor Seguro | US$ 30,00 |
| Valor Acréscimos | US$ 40,00 |
| Valor Descontos | US$ 10,00 |
| Valor CIF (Base II) | US$ 1000,00 |
| Taxa | 3,00 |
| Valor CIF (Base II) | R$ 3000,00 |

**1.2. Formação do Valor do II (Imposto de Importação).**

O valor de II é o cálculo de imposto mais simples, porém muito importante, pois será base de todos os outros. O cálculo é o valor da mercadoria multiplicado pela alíquota de II. ((CIF * II% = II US$) * Taxa = II R$).

Observe os resultados a seguir:

| Valor CIF | US$ 3000 |
| --- | --- |
| Alíquota II | 30% |
| Valor II | US$ 900,00 |
| Taxa | 3,00 |
| Valor II | R$ 2700,00 |

**1.3. Formação do Valor de ICMS (Imposto sobre Circulação de Mercadorias e Prestação de Serviços)**

O cálculo de ICMS é um aglomerado de todos os resultados encontrados de impostos. O valor da base é o mesmo utilizado como base do II somando as despesas Base de ICMS, tudo isso dividido por 1 menos a alíquota de ICMS. O  calculo da Base de ICMS é: (Base II US$ + Despesas US$)/(1 – ICMS%). O calculo do valor de ICMS é: (Base ICMS US$  * ICMS%) * Taxa = ICMS R$

| Base II | US$ 3000,00 |
| --- | --- |
| Despesas Base ICMS | US$ 0,00 |
| Alíquota ICMS | 20% |
| Base ICMS | US$ 3750,00 |
| Taxa | 3,00 |
| Base ICMS | R$ 11250,00 |

| Base ICMS | US$ 3750,00 |
| --- | --- |
| Alíquota ICMS | 20% |
| Valor ICMS | US$ 750,00 |
| Taxa | 3,00 |
| Valor ICMS | R$ 2250,00 |

Obs: O sistema atende, também, o cenário onde o ICMS é calculado com a Carga Tributária Equivalente, o calculo é o mesmo utilizado das importações diretas.

**1.4. Formação do Valor do IPI (Imposto sobre Produto Industrializado).**

O valor de IPI é calculado praticamente como o II. O valor da base pode variar em dois cenários diferentes:

- No primeiro cenário, onde o parâmetro MV_EIC0026 está habilitado, o calculo é o valor da base do II subtraindo o valor do IPI calculado dos itens, tudo isso dividido por 1 menos a alíquota de IPI. O calculo da base de IPI, neste cenário é: (Base II – Valor IPI)/(1 – ICMS%).
- No segundo cenário, onde o parâmetro MV_EIC0026 está desabilitado, é utilizado como base do IPI, o valor da base do ICMS.

O calculo do valor de IPI é (Base IPI US$ * IPI%) * Taxa = IPI R$.

Observe os resultados a seguir, efetuando o calculo a partir do segundo cenário apresentado:

| Valor Base ICMS | US$ 3750,00 |
| --- | --- |
| Alíquota IPI | 10% |
| Valor IPI | US$ 375,00 |
| Taxa | 3,00 |
| Valor IPI | R$ 1125,00 |

**Cenário: Cliente é o Adquirente**

Adquirente é a empresa que solicita os serviços de importação a outra, chamada de Importador.

**1. Formação do Valor FOB**

O valor FOB é formado pelo preço unitário * quantidade de cada item na moeda estrangeira e na moeda corrente, deste documento utilizaremos as moedas Dólar Americano (US$) e Real (R$), ou seja:

| Valor unitário dos itens | US$ 450,00 |
| --- | --- |
| Quantidade dos itens | 2 |
| Valor FOB | US$ 900,00 |
| Taxa | 3,00 |
| Valor FOB | R$ 2700,00 |

**1.1. Formação do Valor CIF**

O valor CIF é formado pelo valor FOB calculado anteriormente somado ao valor de frete e seguro do processo, somado ao valor de acréscimos do processo e subtraído ao valor de descontos do processo, no caso deste documento usaremos Dólar Americano (US$) e Real (R$), ou seja:

| Valor FOB | US$ 900,00 |
| --- | --- |
| Valor Frete | US$ 40,00 |
| Valor Seguro | US$ 30,00 |
| Valor Acréscimos | US$ 40,00 |
| Valor Descontos | US$ 10,00 |
| Valor CIF (Base II) | US$ 1000,00 |
| Taxa | 3,00 |
| Valor CIF (Base II) | R$ 3000,00 |

**1.2. Formação do Valor do II**

O valor de II é o cálculo de imposto mais simples, porém muito importante, pois será base de todos os outros. O cálculo é o valor da mercadoria multiplicado pela alíquota de II. ((CIF * II% = II US$) * Taxa = II R$).

Observe os resultados a seguir:

| Valor CIF | US$ 3000 |
| --- | --- |
| Alíquota II | 30% |
| Valor II | US$ 900,00 |
| Taxa | 3,00 |
| Valor II | R$ 2700,00 |

**1.3. Formação do Valor de ICMS (Imposto sobre Circulação de Mercadorias e Prestação de Serviços)**

O cálculo de ICMS é um aglomerado de todos os resultados encontrados de impostos. O valor da base é o mesmo utilizado como base do II somando as despesas Base de ICMS, tudo isso dividido por 1 menos a alíquota de ICMS. O  calculo da Base de ICMS é: (Base II US$ + Despesas US$)/(1 – ICMS%). O calculo do valor de ICMS é: (Base ICMS US$  * ICMS%) * Taxa = ICMS R$

| Base II | US$ 3000,00 |
| --- | --- |
| Despesas Base ICMS | US$ 0,00 |
| Alíquota ICMS | 20% |
| Base ICMS | US$ 3750,00 |
| Taxa | 3,00 |
| Base ICMS | R$ 11250,00 |

| Base ICMS | US$ 3750,00 |
| --- | --- |
| Alíquota ICMS | 20% |
| Valor ICMS | US$ 750,00 |
| Taxa | 3,00 |
| Valor ICMS | R$ 2250,00 |

Obs: O sistema atende, também, o cenário onde o ICMS é calculado com a Carga Tributária Equivalente, o calculo é o mesmo utilizado das importações diretas.

**1.4. Formação do Valor do IPI (Imposto sobre Produto Industrializado).**

O valor de IPI é calculado praticamente como o II. O valor da base pode variar em dois cenários diferentes:

- No primeiro cenário, onde o parâmetro MV_EIC0026 está habilitado, o calculo é o valor da base do II subtraindo o valor do IPI calculado dos itens, tudo isso dividido por 1 menos a alíquota de ICMS. O calculo da base de IPI, neste cenário é: (Base II – Valor IPI)/(1 – ICMS%).
- No segundo cenário, onde o parâmetro MV_EIC0026 está desabilitado, é utilizado como base do IPI, o valor da base do ICMS.

O calculo do valor de IPI é (Base IPI US$ * IPI%) * Taxa = IPI R$.

Observe os resultados a seguir, efetuando o calculo a partir do segundo cenário apresentado:

| Valor Base ICMS | US$ 3750,00 |
| --- | --- |
| Alíquota IPI | 10% |
| Valor IPI | US$ 375,00 |
| Taxa | 3,00 |
| Valor IPI | R$ 1125,00 |

Lembrando que estes valores são fictícios, apenas para exemplificar o calculo de cada imposto, isoladamente.


<!-- anchors: EIC0011_Impostos_no_processo_de_importação_por_Conta_e_Ordem-ImpostosnoprocessodeimportaçãoporContaeOrdem -->
