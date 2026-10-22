---
title: "Plataforma ❙ Cálculo da nota de avaliações"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=234457209"
scraped_at: "2026-03-09T04:41:37.775Z"
depth: 3
anchors: 10
child_links: 52
---

# Plataforma ❙ Cálculo da nota de avaliações

# Índice

## Falando de cálculo da nota de avaliações...

O valor máximo de uma questão em uma avaliação será sempre de 1,0 ponto. Para atingir esse valor, o aluno deve marcar todas as alternativas corretas (100%) da questão.

A soma dos pontos atribuídos às alternativas representa 100% da nota de uma questão. A partir desse total é possível calcular a nota através da proporção de cada alternativa selecionada pelo aluno.

Por exemplo, em uma questão em que a soma das alternativas é 20, os 20 pontos representam 100% (1,0). Se o aluno acertar metade das alternativas, receberá metade do total de pontos (10) e portanto, 50% do valor da questão (0,5).

![](/download/attachments/234457209/pontua%C3%A7%C3%A3o.jpg?version=7&modificationDate=1515766825000&api=v2)

Em determinados tipos de questões é possível definir valores distintos para as alternativas. Este valor, aliado à quantidade de alternativas incluídas na questão, define a proporção de cada uma em relação à pontuação máxima (1,0).

#### Questão objetiva / lista suspensa

O peso da questão é definido por uma regra de três que considera os pontos da alternativa **com maior valor** como 100% e o peso da alternativa selecionada pelo usuário em relação a este valor.

Por exemplo:

- A questão objetiva/lista suspensa possui 4 alternativas.
- A alternativa correta vale 10 pontos. As outras três alternativas valem zero (10 + 0 + 0 + 0).
- A alternativa de maior valor (10 pontos) equivale a 100% do valor da questão, ou seja, 1,0 ponto.
- Em uma questão objetiva ou de lista suspensa, **só é possível selecionar uma única alternativa**.
- Portanto, se selecionar a alternativa correta o aluno terá acertado 100% da questão e receberá 1,0 ponto.
- Se selecionar uma alternativa incorreta o aluno receberá zero.

****

**E se forem atribuídos pontos a mais de uma alternativa?**

Para questões do tipo Objetiva/Lista Suspensa em que sejam atribuídos pontos para mais de uma alternativa, novamente a questão com maior pontuação representará 100% do valor da questão.

Por exemplo:

- Uma questão do tipo Objetiva será utilizada como avaliação de reação de um treinamento.
- São criadas 5 alternativas: Ótimo (100 pontos), Bom (75), Regular (50), Ruim (25) e Péssimo (zero).
- Se o aluno selecionar Ótimo, que vale 100 pontos, o valor da questão será 100/100 (1,0).
- Se o aluno selecionar Regular, que vale 50 pontos, o valor da questão será 50/100 (0,50).

Caso queira atribuir pontos a mais de uma alternativa e permitir que o aluno selecione várias respostas, recomenda-se a utilização de questões do tipo **Múltipla Escolha**.

#### Questão múltipla escolha

A soma dos pontos das alternativas selecionadas pelo aluno em relação ao valor total da questão define qual será a pontuação obtida em questões do tipo Múltipla Escolha.

Atenção

É importante atentar-se para a opção **"Avaliar como um todo"** disponível neste tipo de questão. Se estiver selecionada, o aluno deverá marcar as alternativas corretas, mas não poderá marcar nenhuma das alternativas incorretas, pois se o fizer, toda a questão é considerada incorreta.

Por exemplo:

- A questão possui 5 alternativas e a opção "Avaliar como um todo" está marcada.
- Duas alternativas estão corretas, as outras três estão erradas.
- As alternativas corretas valem 5 pontos, enquanto as erradas valem zero, ou seja, (5 + 5 + 0 + 0 + 0) = 10 pontos.
- A soma das alternativas (10 pontos) equivale a 100% do valor da questão, ou seja, 1,0 ponto.
- Se o aluno marcar as duas alternativas corretas, mas também selecionar uma das incorretas, a pontuação será zero, pois toda a questão é considerada, não apenas as respostas corretas.
- Se o aluno marcar apenas uma das alternativas corretas, a pontuação será zero, pois neste caso todas as alternativas corretas da questão devem ser selecionadas.

**E se a opção "Avaliar como um todo" não tiver sido selecionada?**

Se a questão não for avaliada como um todo, para cada alternativa incorreta que for assinalada pelo aluno, o sistema irá desconsiderar, **entre as alternativas corretas marcadas**, a que tiver a pontuação mais baixa. Isso evita, por exemplo, que o aluno marque todas as alternativas em uma questão, receba os pontos e não seja penalizado.

Por exemplo:

- A questão possui 5 alternativas e a opção "Avaliar como um todo" não está marcada.
- Duas alternativas estão corretas, as outras três estão erradas.
- As alternativas corretas valem 5 pontos, enquanto as erradas valem zero, ou seja, (5 + 5 + 0 + 0 + 0) = 10 pontos.
- Se o aluno marcar as duas alternativas corretas, mas também selecionar uma das incorretas, a pontuação será 5/10 (0,5), pois a escolha errada irá anular a alternativa correta assinalada que tenha o menor valor (5 + 5 - 5).
- Se o aluno marcar apenas uma das corretas e alguma das incorretas, a pontuação será 5/10 (0,5), pois apenas a alternativa marcada corretamente será considerada.
- Se o aluno marcar apenas as alternativas incorretas, a pontuação será zero.

![](/download/attachments/234457209/multipla_nao_avalia_todo.png?version=3&modificationDate=1515779857000&api=v2)

#### Questão lacuna / lacuna selecionável

Nas questões do tipo Lacuna ou Lacuna Selecionável se aplica o princípio da proporcionalidade entre a soma dos pontos das alternativas corretas e o peso total da questão.

**Exemplo 1**:

- A questão possui 3 lacunas selecionáveis e a opção "Avaliar como um todo" não está marcada.
- Cada uma das lacunas possui 4 alternativas, sendo que apenas uma está correta.
- A opção correta de cada uma das 3 lacunas vale 50 pontos (3 x 50), as erradas valem zero. Sendo assim, cada lacuna corresponderá a 1/3 da nota da questão.
- Se o aluno marcar 2 lacunas corretamente, fará 100 pontos, ou seja 2/3 do total (0,67).

![](/download/attachments/234457209/lacuna.png?version=3&modificationDate=1515781607000&api=v2)

**Exemplo 2:**

Vamos considerar uma questão com 4 lacunas selecionáveis e duas alternativas cada, com as seguintes pontuações:

- Lacuna 1Alternativa A → **100 pontos**
- Alternativa B → 0 pontos

Lacuna 2
- Alternativa A → **200 pontos**
- Alternativa B → 0 pontos

Lacuna 3
- Alternativa A → **300 pontos**
- Alternativa B → 0 pontos

Lacuna 4
- Alternativa A → **400 pontos**
- Alternativa B → 0 pontos

Neste caso o total de pontos da questão, ou seja, o 100% da questão é **1000** pontos. Esse valor é a soma da pontuação da alternativa correta de cada lacuna, pois cada lacuna pode ter apenas uma alternativa correta (com pontuação maior que zero).

O peso de cada lacuna dentro da questão é:

- Lacuna 1 → **10%**
- Lacuna 2 → **20%**
- Lacuna 3 → **30%**
- Lacuna 4 → **40%**

Nota

Neste tipo de questão não há desconto no total da nota caso alguma resposta esteja incorreta, ou seja, nenhuma lacuna preenchida corretamente será descartada caso uma outra lacuna seja preenchida incorretamente.

#### Questão escala / valor

As questões de Escala / Valor seguem as mesmas regras das questões Objetivas (citadas acima).

Só há uma resposta correta possível e o aluno poderá selecionar apenas uma alternativa. Se a alternativa selecionada for a correta, o aluno ganha 1,0 ponto da questão. Se estiver errada, o aluno não marca nenhum ponto.

#### Questão correlação / multivalorada

Em uma questão de correlação ou multivalorada, é possível definir pontuações diferentes para cada alternativa.

Se opção "Avaliar como um todo" estiver marcada, todas as alternativas deverão ser respondidas corretamente para que o aluno receba a pontuação da questão. Se uma ou mais alternativas forem respondidas incorretamente, o aluno não pontua.

Se a opção "Avaliar como um todo" não estiver marcada, o aluno recebe os pontos das alternativas que estiverem marcadas corretamente, mas não há desconto no total da nota caso alguma resposta esteja incorreta.

Por exemplo:

- A questão do tipo multivalorada possui 4 alternativas com pesos distintos.
- Os valores das questões serão: (1) 40 pontos, (2) 30 pontos, (3) 20 pontos e (4) 10 pontos. Total: 100 pontos
- Se o aluno marcar as alternativas 1, 3 e 4 corretamente, receberá 70/100 pontos, ou seja, a nota 0,70 para esta questão.

![](/download/attachments/234457209/multivalorada.png?version=3&modificationDate=1515781614000&api=v2)

#### Questão dissertativa

As questões dissertativas são as únicas em que é necessário um responsável para correção, ou seja, não são avaliadas automaticamente pelo sistema.

O corretor pode atribuir uma pontuação de 0 a 100 para uma questão dissertativa, mas o valor máximo deste tipo de questão no cálculo da nota da avaliação também é de 1,0 ponto.

#### Questão ordenada

Nas questões ordenadas, a pontuação é dividida igualmente entre as alternativas (não é possível definir pesos específicos).

Se a opção "Avaliar como um todo" não estiver marcada, o aluno recebe os pontos das alternativas que estiverem marcadas corretamente, mas não há desconto no total da nota caso alguma resposta esteja incorreta.

Por exemplo:

- Questão ordenada possui 8 alternativas.
- Cada alternativa valerá 0,125 (1 / 8).
- Caso o aluno ordene 5 alternativas corretamente, sua nota será 5 x 0,125 = 0,62 (a plataforma faz o arredondamento da nota).

![](/download/attachments/234457209/ordenada.png?version=4&modificationDate=1515781625000&api=v2)

#### Blocos de questões

Blocos de questões podem ter pesos diferentes dentro de uma avaliação. O peso das questões incluídas em um bloco, porém, será igual para todas e irá considerar o peso do bloco e a quantidade de questões.

Por exemplo, se em um bloco forem incluídas 8 questões e o peso do bloco for 20, o peso de cada questão será 20 / 8 = 2,5.

O princípio para calcular o valor de cada bloco dentro de uma avaliação é semelhante ao utilizado em questões x alternativas. O peso dos blocos incluídos em uma avaliação é somado, e esse total corresponde a 100% da pontuação da avaliação. A partir desse valor, a proporção de cada bloco é consolidada.

Por exemplo:

- Uma avaliação possui 3 blocos de questões: Bloco (a), (b) e (c).
- O peso do bloco (a) é 20, do bloco (b) é 30 e do bloco (c) também é 30. Total: 80.
- O bloco (a) portanto valerá 25% da nota
- Os blocos (b) e (c) valerão 37,5% da nota cada.

![](/download/attachments/234457209/estrutura.jpg?version=3&modificationDate=1515766818000&api=v2)

O campo "Mínimo de acertos" define a quantidade de questões mínima que um aluno deve acertar para que o bloco seja considerado na nota da avaliação. Caso não conquiste o mínimo de acertos, a nota do aluno neste bloco será zero.

Se a opção "Permitir zerar no bloco" não estiver marcada, ao tirar zero no bloco, **a nota total da avaliação também será zero**, independentemente dos resultados obtidos nos demais blocos de questões da avaliação.

![](/download/attachments/234457209/bloco.PNG?version=2&modificationDate=1515781716000&api=v2)

Importante!

A partir da atualização **1.6.5-190219**, o **LMS** não faz mais parte da plataforma para **novas instalações**.

Mas, não se preocupe: se você adquiriu a plataforma com o **LMS incluso**, entre em contato com o [Suporte Fluig](https://suporte.fluig.com/) para que você consiga utiliza-lo normalmente – mesmo após a atualização **1.6.5-190219**. Se você não lembra se o LMS está incluso ou não no seu pacote, consulte sua proposta comercial ou entre em contato com o seu ESN.


<!-- anchors: Plataforma❙Cálculodanotadeavaliações-Índice, Plataforma❙Cálculodanotadeavaliações-Falandodecálculodanotadeavaliações..., Plataforma❙Cálculodanotadeavaliações-Questãoobjetiva/listasuspensa, Plataforma❙Cálculodanotadeavaliações-Questãomúltiplaescolha, Plataforma❙Cálculodanotadeavaliações-Questãolacuna/lacunaselecionável, Plataforma❙Cálculodanotadeavaliações-Questãoescala/valor, Plataforma❙Cálculodanotadeavaliações-Questãocorrelação/multivalorada, Plataforma❙Cálculodanotadeavaliações-Questãodissertativa, Plataforma❙Cálculodanotadeavaliações-Questãoordenada, Plataforma❙Cálculodanotadeavaliações-Blocosdequestões -->
