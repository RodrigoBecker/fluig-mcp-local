---
title: "Plataforma ❙ Configurar atividades e fluxos"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=233763197"
scraped_at: "2026-03-09T04:06:45.363Z"
depth: 2
anchors: 13
child_links: 62
---

# Plataforma ❙ Configurar atividades e fluxos

Acesse a documentação correta:

Esta documentação refere-se ao editor de processos atual da plataforma. Caso esteja utilizando o novo editor de processos, acesse a documentação disponível em [Plataforma | Componentes de processos](https://tdn.totvs.com/x/wmdGMw).

# Falando de configurar atividades e fluxos...

---

Nesta configuração de atividades e fluxos, são definidas as principais informações a serem consideradas durante uma solicitação de processo. Dessa forma, é necessário definir com atenção essas informações, garantindo assim o correto funcionamento do processo.

É possível definir a disposição das atividades, subprocessos, atividades automáticas e demais elementos para uma melhor visualização e entendimento de todo o processo. Ao definir os mecanismos de atribuição dos itens do processo, somente são exibidos os tipos de mecanismo que podem ser utilizados conforme o tipo de atividade. Para a atividade do tipo Início, por exemplo, os mecanismos "Para um grupo" e "Para um papel" não são exibidos como opção, pois esses tipos não podem ser utilizados nesse tipo de atividade.

No menu lateral da tela de configuração são disponibilizados os elementos para a criação do processo: Início, Fim, Atividade, Automático, Documento, Anotação, *Swinlane*, Subprocesso, *Fork* e *Join*. Também é disponibilizado o acesso à tela de configuração do processo através do item Propriedades.

Outra forma de adicionar elementos é através do menu disponível quando movido o mouse sobre um determinado elemento. Quando se utiliza deste recurso, o fluxo (ou associação caso o elemento selecionado seja um Documento ou Anotação) entre os dois elementos também é criado.

Também é possível exportar a documentação do processo, gerando um documento com informações referentes ao processo e suas atividades, ou a imagem do fluxo do processo.

![](/download/attachments/233763197/configura%C3%A7%C3%A3o%20do%20processo.PNG?version=1&modificationDate=1519128816000&api=v2)

## Configurar Início

---

**01.** Arrastar o elemento **Início** do menu lateral para o local desejado da área de modelagem do fluxo do processo.

O elemento Início é a atividade inicial de um processo e indica onde o fluxo é iniciado. Quando iniciada uma nova solicitação do processo esta será a primeira atividade a ser executada.

**02.**Posicionar o *mouse* sobre o elemento e acionar **Configurar**, representado por uma engrenagem.

Para remover o elemento do diagrama do processo, basta acionar **Excluir**, representado por uma lixeira.

**03.** Na aba **Geral** definir as informações solicitadas.

As informações solicitadas são:

**Descrição**
Descrição da atividade inicial do processo.

**Instruções**
Instruções que facilitam o entendimento da atividade no processo. 

**Expediente**
Expediente ao qual o início será relacionado. Os [expedientes](/pages/viewpage.action?pageId=233766840) são cadastrados na plataforma e são utilizados para os cálculos de prazos e atrasos das atividades de processo. Por exemplo, se o expediente informado foi configurado como sendo de segunda à sexta das 8:00h às 18:00h e existe uma atividade com duração de 1 hora que foi criada às 17:30h de uma terça, seu prazo de conclusão será quarta às 8:30h em decorrência do expediente.

**Mecanismo de atribuição**
Forma como serão selecionados os usuários para executar a atividade início. São exibidos apenas os tipos de mecanismo de atribuição que podem ser utilizados em atividades do tipo Início. Quando selecionado um mecanismo de atribuição para uma atividade do tipo Início, somente os usuários retornados pelo mecanismo poderão iniciar uma solicitação do processo. Os mecanismos disponíveis são:

- **Atribuição por associação**: quando selecionado, determina que os usuários que podem executar essa atividade serão os resultantes da junção de grupo, papel e/ou usuário específico;
- **Atribuição por grupo**: quando selecionado, determina que os usuários que podem executar essa atividade serão todos os usuários que pertencem a um grupo;
- **Atribuição por papel**: quando selecionado, determina que os usuários que podem executar essa atividade serão todos os usuários que pertencem a um papel;
- **Atribuição por usuário**: quando selecionado, determina que um usuário específico pode executar essa atividade. 

**Prazo conclusão**

- **Por valor fixo**: Tempo dentro do qual a atividade deve ser concluída. O valor em horas informado é considerado, junto com o expediente selecionado, para calcular o prazo limite de conclusão da atividade. Este prazo é considerado a partir do momento do recebimento da atividade.
- **Por campo de formulário**: Quando selecionado, permiti escolher um campo do formulário que irá definir o prazo da tarefa que se está alterando a propriedade.

**Valores válidos para o campo**:

- 999...:99 = Formato padrão.

Seguirá a mesma lógica do valor fixo, considerando os expedientes e feriados do usuário responsável.

**Para os demais valores utilizar os formatos a seguir**:

- 9999-99-99 = ano, mês e dia;
- 9999-99-99 99:99 = ano, mês, dia, hora e minuto;
- 99/99/9999 = ano, mês e dia;
- 99/99/9999 99:99 = ano, mês, dia, hora e minuto;
- 9999999999 = data em milisegundos.

Não serão considerados expedientes e feriados, seguindo exatamente o que for informado.

**Solicitar assinatura digital**
Quando assinalado, determina que será solicitada assinatura digital para conclusão da atividade.

**Confirma senha**
Quando assinalado, determina que o usuário precisa inserir sua senha para concluir a tarefa. Se na configuração do processo já está assinalado, esta opção virá desabilitada. Ao enviar a atividade que possui confirmação de senha adiante, será solicitada a senha do usuário que está executando a tarefa. Caso a senha seja inválida, o executor da atividade pode tentar o número de vezes que forem necessárias. A movimentação do processo só ocorrerá quando o executor informar sua senha corretamente. No histórico do processo haverá uma indicação de que o usuário confirmou sua senha na movimentação da atividade na solicitação.**Importante**: as atividades assinaladas para utilização de confirmação de senha não podem ser automatizadas por Web *services*.

**Inibe opção Transferir**
Quando assinalado, determina que a execução da atividade não pode ser transferida para outro usuário.

**Atividade conjunta**
Quando assinalado, determina que a atividade deve ser executada por mais de um usuário. Desta maneira a atividade somente será considerada encerrada e a solicitação movimentada quando o % de consenso informado for alcançado.

**% Consenso**
Percentual de consenso necessário para considerar a atividade como encerrada. Esse campo somente é habilitado quando for assinalada a opção Atividade conjunta.

**Quando conjunta, nunca seleciona colaboradores**Quando selecionada, determina que essa atividade será atribuída para todos os usuários listados pelo mecanismo de atribuição definido. Quando selecionada essa opção o campo Atividade conjunta é assinalado automaticamente, sendo necessário informar o % Consenso também.

**04.** Se um mecanismo foi selecionado, acionar **Configurar**, localizado ao lado do campo Mecanismo de atribuição, e definir as informações desejadas para ele.

Informações sobre a configuração de mecanismos de atribuição podem ser obtidas em [Configurar mecanismo de atribuição](/pages/viewpage.action?pageId=265783517).

**05.** Acionar aba **Regras de anexos**.

**06**. Acione **Adicionar** para incluir uma nova regra de anexo.

Ao adicionar uma nova regra, é preciso preencher os seguintes campos:

**Operador**Nenhum
Igual
Maior
Maior ou igual
Menor
Menor ou igual
Qualquer

**Quantidade**Número da quantidade de anexos que deseja incluir.

**Nome**Nome padrão ou nome do arquivo. Ex: server.log ou *.log

**Mensagem**Frase ou aviso configurado, a respeito dos anexos. Ex: Anexar um arquivo.

**07.**Acionar**Confirmar.**

**08**. Acionar a aba **Acompanhamento.**

**09.** Definir as informações solicitadas.

As informações solicitadas são:

**Notifica responsável**
Quando assinalado, determina que o responsável pela atividade será notificado por *e-mail* sobre o seu início.

**Notifica requisitante**
Quando assinalado, determina que o requisitante da solicitação será notificado por *e-mail* sobre o início dessa atividade.

**Notifica gestor**
Quando assinalado, determina que o gestor do processo será notificado por *e-mail* sobre o início dessa atividade.

**10.** Acionar a aba **Atraso**.

**11.** Definir as informações solicitadas.

As informações solicitadas são:

**Notifica responsável**
Quando assinalado, determina que o responsável pela atividade será notificado por *e-mail* quando ela estiver atrasada.

**Tolerância**
Tempo durante o qual a plataforma irá aguardar após o vencimento do prazo da atividade para começar a enviar o *e-mail* de notificação de atraso para o responsável, requisitante ou gestor, conforme as opções assinaladas.

**Frequência**
Intervalo de tempo entre cada envio de *e-mail* de notificação de atraso para o responsável, requisitante ou gestor, conforme as opções assinaladas.

**Aviso de expiração**
Tempo antes da expiração da tarefa a partir do qual será enviado *e-mail* de notificação de que a tarefa está para expirar para o responsável, requisitante ou gestor, conforme as opções assinaladas.

**Notifica requisitante**
Quando assinalado, determina que o requisitante da solicitação será notificado por *e-mail* quando essa atividade estiver atrasada.

**Notifica gestor**
Quando assinalado, determina que o gestor do processo será notificado por *e-mail* quando essa atividade estiver atrasada.

**12.**Acionar a aba **Esforço**.

**13.**Definir as informações solicitadas.

As informações solicitadas são:

**Cálculo**
Forma de cálculo do esforço da atividade. As opções disponíveis são:

- **Não controlar esforço**: quando selecionada, determina que o esforço não é controlado.
- **Baseado no esforço estimado**: quando selecionada, determina que seja considerado o esforço estimado para o cálculo. Este valor é proveniente do campo Esforço previsto.
- **Baseado no apontamento de horas**: quando selecionada, determina que seja considerado o esforço informado no apontamento de horas. Nessa situação, para concluir a tarefa, o usuário é obrigado a informar a quantidade de horas trabalhadas na atividade.
- **Baseado no tempo de conclusão**: quando selecionada, determina que seja considerado o tempo de conclusão como esforço da atividade. É considerado como tempo de conclusão o tempo em que a atividade permaneceu com o usuário, considerando o expediente e feriados.

**Esforço previsto**
Quantidade de horas previstas para a realização da atividade. Não é necessário informar esse esforço quando foi definido que ele não será controlado.

**14.**Depois de finalizar a configuração do início, acionar Nenhum **Confirmar**.

## Configurar Fim

---

**01.** Arrastar o elemento **Fim** do menu lateral para o local desejado da área de modelagem do fluxo do processo.

O elemento Fim indica a finalização do fluxo do processo. Todo processo deve ter pelo menos um fim.

**02.** Posicionar o *mouse* sobre o elemento e acionar **Configurar**, representado por uma engrenagem.

Para remover o elemento do diagrama do processo, basta acionar **Excluir**, representado por uma lixeira.

**03.** Definir as informações solicitadas.

As informações solicitadas são:

**Nome**
Nome que será atribuído ao fim do processo.

**Notifica requisitante**
Quando assinalado, determina que o requisitante da solicitação será notificado por *e-mail* sobre o fim da solicitação.

**Notifica gestor**
Quando assinalado, determina que o gestor do processo será notificado por *e-mail* sobre o fim da solicitação.

**04.** Acionar **Confirmar**.

## Configurar Atividade

---

**01.** Arrastar o elemento **Atividade** do menu lateral para o local desejado da área de modelagem do fluxo do processo.

A atividade é uma tarefa ou ação que deve ser realizada dentro do fluxo do processo. 

**02.** Posicionar o *mouse* sobre o elemento e acionar **Configurar**, representado por uma engrenagem.

Para remover o elemento do diagrama do processo, basta acionar **Excluir**, representado por uma lixeira.

**03.** Acessar aba Geral

As informações solicitadas são:

**Descrição**
Descrição da atividade que comporá o processo.

**Instruções**
Instruções que facilitam o entendimento da atividade no processo. Ao preparar as instruções de uma atividade, é comum precisar buscar informações de outros arquivos ou sites. Existe o conceito de hiperlink que permite incluir acessos para documentos da plataforma e também para endereços na Internet por intermédio de documentos externos, evitando a replicação de informações e facilitando a navegação. Para isso, é necessário inserir a *tag* [WD:999999], onde 999999 deve ser substituído pelo código do documento na navegação de documentos.

**Expediente**
Expediente ao qual a atividade será relacionada. Os [expedientes](/pages/viewpage.action?pageId=233766840) são cadastrados na plataforma e são utilizados para os cálculos de prazos e atrasos das atividades de processo. Por exemplo, se o expediente informado foi configurado como sendo de segunda à sexta das 8:00h às 18:00h e existe uma atividade com duração de 1 hora que foi criada às 17:30h de uma terça, seu prazo de conclusão será quarta às 8:30h em decorrência do expediente.

**Mecanismo de atribuição**
Forma como serão selecionados os usuários para executar a atividade. São exibidos apenas os tipos de mecanismo de atribuição que podem ser utilizados em atividades comuns. Os mecanismos disponíveis são:

- **Atribuição por associação**: quando selecionado, determina que os usuários que podem executar essa atividade e serão exibidos para seleção são os resultantes da junção de vários mecanismos de atribuição;
- **Atribuição por campo de formulário**: quando selecionado, determina que a atividade será enviada para o usuário que é informado em um campo do formulário relacionado ao processo;
- **Atribuição por executor de atividade**: quando selecionado, determina que a atividade será enviada para o executor de uma determinada atividade anterior do processo;
- **Atribuição por grupo**: quando selecionado, determina que os usuários que podem executar essa atividade e serão exibidos para seleção são todos os usuários que pertencem a um grupo;
- **Atribuição por grupos do colaborador**: quando selecionado, determina que os usuários que podem executar essa atividade e serão exibidos para seleção são os que pertencem aos mesmos grupos do usuário autenticado ou do usuário que iniciou a solicitação, conforme for configurado no mecanismo;
- **Atribuição por papel**: quando selecionado, determina que os usuários que podem executar essa atividade e serão exibidos para seleção são todos os usuários que pertencem a um papel;
- **Atribuição para um grupo**: quando selecionado, determina que a atividade será enviada para um *pool* de recursos, contendo os usuários pertencentes ao grupo. Nesse caso, qualquer usuário do grupo pode assumir a atividade;
- **Atribuição para um papel**: quando selecionado, determina que a atividade será enviada para um *pool* de recursos, contendo os usuários pertencentes ao papel. Nesse caso, qualquer usuário do papel pode assumir a atividade;
- **Atribuição por usuário**: quando selecionado, determina que a atividade será enviada para um usuário específico.

**Prazo conclusão**

- **Por valor fixo**: Tempo dentro do qual a atividade deve ser concluída. O valor em horas informado é considerado, junto com o expediente selecionado, para calcular o prazo limite de conclusão da atividade. Este prazo é considerado a partir do momento do recebimento da atividade.
- **Por campo de formulário**: Quando selecionado, permiti escolher um campo do formulário que irá definir o prazo da tarefa que se está alterando a propriedade.

Importante

A configuração no campo somente é usada no momento em que a **atividade** é criada, então salvar o formulário mudando o prazo configurado não surte efeito no prazo já estipulado na criação da atividade.

**Valores válidos para o campo**:

- 999...:99 = Formato padrão.

Seguirá a mesma lógica do valor fixo, considerando os expedientes e feriados do usuário responsável.

**Para os demais valores utilizar os formatos a seguir**:

- 9999-99-99 = ano, mês e dia;
- 9999-99-99 99:99 = ano, mês, dia, hora e minuto;
- 99/99/9999 = ano, mês e dia;
- 99/99/9999 99:99 = ano, mês, dia, hora e minuto;
- 9999999999 = data em milisegundos.

Não serão considerados expedientes e feriados, seguindo exatamente o que for informado

Importante

Ao informar uma data sem a hora, será considerado o ultimo horário do dia, que é 23:59.

**Solicitar assinatura digital**
Quando assinalado, determina que essa atividade deve ser assinada digitalmente pelo seu usuário executor. Nesse caso, ao finalizar a atividade é exibida uma janela na qual o usuário executor precisa inserir sua assinatura digital e, só então, a solicitação pode ser enviada para a próxima atividade.

**Confirma senha**
Quando assinalado, determina que o usuário precisa inserir sua senha para concluir a atividade. Se na configuração do processo já está assinalado, esta opção virá desabilitada. Ao enviar a atividade que possui confirmação de senha adiante, será solicitada a senha do usuário que está executando a tarefa. Caso a senha seja inválida, o executor da atividade pode tentar o número de vezes que forem necessárias. A movimentação do processo só ocorrerá quando o executor informar sua senha corretamente. No histórico do processo haverá uma indicação de que o usuário confirmou sua senha na movimentação da atividade na solicitação.**Importante**: as atividades assinaladas para utilização de confirmação de senha não podem ser automatizadas por Web *services*.

**Inibe opção Transferir**
Quando assinalado, determina que a execução da atividade não pode ser transferida para outro usuário.

**Atividade conjunta**
Quando assinalado, determina que a atividade deve ser executada por mais de um usuário. Desta maneira a atividade somente será considerada encerrada e a solicitação movimentada quando o % de consenso informado for alcançado.

**% Consenso**
Percentual de consenso necessário para considerar a atividade como encerrada. Esse campo somente é habilitado quando for assinalada a opção Atividade conjunta.

**Quando conjunta, nunca seleciona colaboradores**Quando selecionada, determina que essa atividade será atribuída para todos os usuários listados pelo mecanismo de atribuição definido. Quando selecionada essa opção o campo Atividade conjunta é assinalado automaticamente, sendo necessário informar o % Consenso também.

**04.** Se um mecanismo foi selecionado, acionar **Configurar**, localizado ao lado do campo Mecanismo de atribuição, e definir as informações desejadas para ele.

Informações sobre a configuração de mecanismos de atribuição podem ser obtidas em [Configurar mecanismo de atribuição](/pages/viewpage.action?pageId=265783517).

**05.** Acessar aba**Regras de anexos.**

Regras de anexo são eventos que irão ocorrer ao movimentar a atividade. Estes eventos ocorrem apenas em atividades normais ou atividade de início de um processo.

Você pode definir regras sobre quantidade e tipos de anexos que devem (ou não) ser anexados nesta atividade. Independente dos anexos já existentes na solicitação, estas regras irão validar apenas o que for anexado nesta atividade.

Então, caso seja obrigatório anexar um arquivo pdf, o responsável pela atividade será obrigado a anexar um arquivo pdf, não importando se já existe um arquivo deste tipo na solicitação.

**06. **Acione **Adicionar** para incluir uma nova regra de anexo.

Ao adicionar uma nova regra, é preciso preencher os seguintes campos:

**Operador**Nenhum
Igual
Maior
Maior ou igual
Menor
Menor ou igual
Qualquer

**Quantidade**Número da quantidade de anexos que deseja incluir.

**Nome**Nome padrão ou nome do arquivo. Ex: server.log ou *.log

**Mensagem**Frase ou aviso configurado, a respeito dos anexos. Ex: Anexar um arquivo.

**Ordem de resolução das regras**

Para permitir a movimentação, **todas as regras** criadas devem ser atendidas e **todos os arquivos** anexados devem ser validados por uma regra. Quando o arquivo é considerado válido por uma regra, ele não valida as regras seguintes. Por isso, é preciso ficar atento à ordem de criação e execução das regras.

**Ordem**

As regras serão validadas da seguinte maneira:

- Verifica se existem regras do tipo **Nenhum**. Caso algum arquivo viole essa regra, a movimentação é bloqueada
- Verifica as regras do tipo igual, maior, maior ou igual, menor e menor ou igual e quando encontrar o primeiro válido, incrementa o número de anexos válidos para tal condição e não valida as próximas regras
- Caso não viole nenhuma regra do tipo **Nenhum** nem atenda as regras dos tipos citados na opção acima, verifica as regras do tipo "Qualquer".Caso não exista nenhuma regra do tipo qualquer, o arquivo é considerado inválido já que não atendeu nenhuma regra.

**Proibir anexar arquivos na atividade**

| Nenhum |  |  | Proibido anexar |
| --- | --- | --- | --- |
| Nenhum |  |  | Proibido anexar |
| = | 0 |  | Proibido anexar |

**Resultados esperados:**Nenhum arquivo: OK;
Um arquivo .pdf: erro;
Um arquivo .zip: erro;
Um arquivo .pdf e um .zip: erro;
Um arquivo .jpg: erro;
Um arquivo .pdf, um .zip e um .jpg: erro;

**Obrigar a anexar arquivos na atividade**

| > | 0 |  | Anexe um arquivo |
| --- | --- | --- | --- |
| > | 0 |  | Anexe um arquivo |

**Resultados esperados:**Nenhum arquivo: erro;
Um arquivo .pdf: OK;
Um arquivo .zip: OK;
Um arquivo .pdf e um .zip: OK;
Um arquivo .jpg: OK;
Um arquivo .pdf, um .zip e um .jpg: OK;

**Anexar um arquivo zip na atividade**

| = | 1 | *.zip | Anexe um arquivo .zip |
| --- | --- | --- | --- |
| = | 1 | *.zip | Anexe um arquivo .zip |

**Resultados esperados:**Nenhum arquivo: erro;
Um arquivo .pdf: erro;
Um arquivo .zip: OK;
Um arquivo .pdf e um .zip: erro;
Um arquivo .jpg: erro;
Um arquivo .pdf, um .zip e um .jpg: erro;

**Anexar um arquivo zip e um pdf na atividade**

| = | 1 | *.zip | Anexe um arquivo *.zip |
| --- | --- | --- | --- |
| = | 1 | *.zip | Anexe um arquivo *.zip |
| = | 1 | *.pdf | Anexe um arquivo *.pdf |

**Resultados esperados:**
Nenhum arquivo: erro;
Um arquivo .pdf: erro;
Um arquivo .zip: erro;
Um arquivo .pdf e um .zip: OK;
Um arquivo .jpg: erro;
Um arquivo .pdf, um .zip e um .jpg: erro;

**Anexar um arquivo zip ou um pdf na atividade**

| = | 1 | .zip|.pdf | Anexar um arquivo .zip ou .pdf |
| --- | --- | --- | --- |
| = | 1 | .zip|.pdf | Anexar um arquivo .zip ou .pdf |

**Resultados esperados:**Nenhum arquivo: erro;
Um arquivo .pdf: OK;
Um arquivo .zip: OK;
Um arquivo .pdf e um .zip: erro;
Um arquivo .jpg: erro;
Um arquivo .pdf, um .zip e um .jpg: erro;

**Anexar um arquivo zip e deixar livre para anexar ou não outros tipos de arquivo na atividade**

| = | 1 | *.zip | Anexe um arquivo .zip |
| --- | --- | --- | --- |
| = | 1 | *.zip | Anexe um arquivo .zip |
| Qualquer |  |  |  |

**Resultados esperados:**Nenhum arquivo: erro;
Um arquivo .pdf: erro;
Um arquivo .zip: OK;
Um arquivo .pdf e um .zip: OK;
Um arquivo .jpg: erro;
Um arquivo .pdf, um .zip e um .jpg: OK;

**Proibir anexar um arquivo zip e deixar livre para anexar ou não outros tipos de arquivos na atividade**

| Nenhum |  | *.zip | Arquivos .zip não são permitidos |
| --- | --- | --- | --- |
| Nenhum |  | *.zip | Arquivos .zip não são permitidos |
| Qualquer |  |  |  |

| = | 0 | *.zip | Arquivos .zip não são permitidos |
| --- | --- | --- | --- |
| = | 0 | *.zip | Arquivos .zip não são permitidos |
| Qualquer |  |  |  |

**Resultados esperados:**Nenhum arquivo: OK;
Um arquivo .pdf: OK;
Um arquivo .zip: erro;
Um arquivo .pdf e um .zip: erro;
Um arquivo .jpg: OK;
Um arquivo .pdf, um .zip e um .jpg: erro;

**Obrigar a anexar um arquivo zip e obrigar ao menos um outro tipo de arquivo na atividade**

| = | 1 | *.zip | Anexe um arquivo .zip |
| --- | --- | --- | --- |
| = | 1 | *.zip | Anexe um arquivo .zip |
| >= | 1 | !*.zip | Anexe um arquivo diferente de zip |

**Resultados esperados:**Nenhum arquivo: erro;
Um arquivo .pdf: erro;
Um arquivo .zip: erro;
Um arquivo .pdf e um .zip: OK;
Um arquivo .jpg: erro;
Um arquivo .pdf, um .zip e um .jpg: OK;

**Anexar um ou mais arquivos do tipo imagem**

| >= | 1 | .png|.jp*g!*.gif | Anexe um arquivo .jpg, .png ou .gif |
| --- | --- | --- | --- |
| >= | 1 | .png|.jp*g!*.gif | Anexe um arquivo .jpg, .png ou .gif |

**Resultados esperados:**Nenhum arquivo: erro;
Um arquivo .pdf: erro;
Um arquivo .zip: erro;
Um arquivo .pdf e um .zip: erro;
Um arquivo .jpg: OK;
Um arquivo .pdf, um .zip e um .jpg: erro;

**Permitir somente arquivo do tipo imagem mas sem tornar o anexo obrigatório**

| >= | 0 | .png|.jp*g|*.gif | Apenas arquivo .jpg, .png ou .gif são permitidos |
| --- | --- | --- | --- |
| >= | 0 | .png|.jp*g|*.gif | Apenas arquivo .jpg, .png ou .gif são permitidos |

**Resultados esperados:**Nenhum arquivo: OK;
Um arquivo .pdf: erro;
Um arquivo .zip: erro;
Um arquivo .pdf e um .zip: erro;
Um arquivo .jpg: OK;
Um arquivo .pdf, um .zip e um .jpg: erro;

**Obrigar anexar um arquivo com um nome específico**

| = | 1 | server.log | Adicione um arquivo server.log |
| --- | --- | --- | --- |
| = | 1 | server.log | Adicione um arquivo server.log |

**Permitido:** server.log
**Não permitido:**sem anexos ou abcserver.log, server-2018.log, server.txt, server.log.zip, server.zip

**Obrigar anexar um arquivo com parte de um nome**

| = | 1 | server*.log | Adicione um arquivo server.log |
| --- | --- | --- | --- |
| = | 1 | server*.log | Adicione um arquivo server.log |

**Permitido****:** server.log, server-2018.log
**Não permitido****:** sem anexos ou abcserver.log, server.txt, server.log.zip, server.zip

| = | 1 | server*.log* | Adicione um arquivo server.log |
| --- | --- | --- | --- |
| = | 1 | server*.log* | Adicione um arquivo server.log |

**Permitido****:** server.log, server-2018.log, server.log.zip
**Não permitido****:** sem anexos ou abcserver.log, server.txt, server.zip

| = | 1 | *server*.log* | Adicione um arquivo server.log |
| --- | --- | --- | --- |
| = | 1 | *server*.log* | Adicione um arquivo server.log |

**Permitido****:** abcserver.log, server.log, server-2018.log, server.log.zip
**Não permitido****:** sem anexos ou server.txt, server.zip

****

**Proibir anexar um arquivo com parte de um nome**

| Nenhum |  | *server* | Arquivos com nome server não são válidos |
| --- | --- | --- | --- |
| Nenhum |  | *server* | Arquivos com nome server não são válidos |
| Qualquer |  |  |  |

| = | 0 | *server* | Arquivos com nome server não são válidos |
| --- | --- | --- | --- |
| = | 0 | *server* | Arquivos com nome server não são válidos |
| Qualquer |  |  |  |

**Permitido****:** sem anexos ou outroarquivo.qlqrcoisa
**Não permitido****:** server.log, abcserver.log, server-2018.log, server.txt, server.log.zip, server.zip

**Proibir anexar um arquivo com parte de um nome e exigir arquivo com outro nome**

| = | 1 | !*server* | Você deve anexar um arquivo que não possua server no nome |
| --- | --- | --- | --- |
| = | 1 | !*server* | Você deve anexar um arquivo que não possua server no nome |

**Permitido:** outroarquivo.qlqrcoisa
**Não permitido****:** sem anexos, server.log, abcserver.log, server-2018.log, server.txt, server.log.zip, server.zip

**Permitir arquivo de uma extensão somente com um nome específico**

| = | 1 | server.log|!*.log | Você deve anexar um arquivo server.log ou algum arquivo de extensão diferente de .log |
| --- | --- | --- | --- |
| = | 1 | server.log|!*.log | Você deve anexar um arquivo server.log ou algum arquivo de extensão diferente de .log |

**Permitido:** server.log, server.txt, server.log.zip, server.zip
**Não permitido****:** sem anexos, abcserver.log, server-2018.log

| = | 1 | server*.log|!*.log | Você deve anexar o arquivo server.log ou algum arquivo de extensão diferente de .log |
| --- | --- | --- | --- |
| = | 1 | server*.log|!*.log | Você deve anexar o arquivo server.log ou algum arquivo de extensão diferente de .log |

**Permitido:** server.log, server-2018.log, server.txt, server.log.zip, server.zip, server.txt, server.log.zip, server.zip
**Não permitido****:** sem anexos ou abcserver.log

****

**Diferença entre usar "Nenhum" ou "=0"**

Sim, existe diferença. O nenhum é uma regra prioritária, ou seja, vai ser executada antes das demais. Confira no exemplo abaixo:

| = | 1 | server* |  |
| --- | --- | --- | --- |
| = | 1 | server* |  |
| Nenhum |  | *.zip | Proibido anexar arquivo .zip |

| = | 1 | server* | Proibido anexar |
| --- | --- | --- | --- |
| = | 1 | server* | Proibido anexar |
| = | 0 | *.zip | Proibido anexar arquivo .zip |

Se o usuário adicionar um arquivo chamado server.zip, no primeiro caso esse anexo não vai ser aceito. No segundo caso, como a primeira regra é atendida pelo nome do arquivo, será aceito.

**A regra nenhum não deve ser usada sozinha**

Conforme explicado, **todos os arquivos** anexados devem ser validados por uma regra. Quando é adicionado apenas regras de "nenhum", os anexos serão todos considerados inválidos. Tentando um exemplo onde a expectativa do usuário é bloquear apenas os arquivos que tenham a palavra IRPF

| Nenhum |  | *irpf* | Arquivos com nome IRPF não são válidos |
| --- | --- | --- | --- |
| Nenhum |  | *irpf* | Arquivos com nome IRPF não são válidos |

Dessa forma, os arquivos com o nome IRPF serão bloqueados, mas como não existe nenhuma outra regra, todos os outros anexos serão bloqueados também, porque nenhuma regra considera-os válidos. Para bloquear apenas os arquivos que contenham a palavra, você deve adicionar outras regras como o "Qualquer":

| Nenhum | 0 | *irpf* | Arquivos com nome IRPF não são válidos |
| --- | --- | --- | --- |
| Nenhum | 0 | *irpf* | Arquivos com nome IRPF não são válidos |
| Qualquer |  |  |  |

**Permitido****:** server.log, abcserver.log, server-2018.log, server.txt, server.log.zip, server.zip ou outroarquivo.qlqrcoisa

**Não permitido****:** IRPF.pdf, declaracaoIRPF.zip

| Nenhum | 0 | *irpf* | Arquivos com nome IRPF não são válidos |
| --- | --- | --- | --- |
| Nenhum | 0 | *irpf* | Arquivos com nome IRPF não são válidos |
| Qualquer |  | *.zip |  |

**Permitido****:** server.log.zip ou server.zip

**Não permitido****:** IRPF.pdf, declaracaoIRPF.zip, server.log, abcserver.log, server-2018.log, server.txt ou outroarquivo.qlqrcoisa

**07.** Acionar **Confirmar**.

**08.**Acessar aba **Mobile**.

As informações solicitadas nesta aba, serão utilizadas como base no aplicativo Approval. Seu correto preenchimento irá disponibilizar as informações necessárias ao utilizar o aplicativo, bem como o correto funcionamento de suas respectivas funções.

**09**. Definir as informações solicitadas.

Os campos solicitados são:

**Título**Defina um nome para o título da solicitação, ou escolha um campo de formulário. Padrão: Descrição do processo.

**Destaque**Defina um campo do formulário para preencher esse campo. O campo deve ser o destaque e não pode ser muito extenso. Padrão: Nome da atividade.

**Descrição**Defina um texto para a descrição prévia da solicitação e/ou escolha campos de formulário. As informações que excederem o limite ficarão disponíveis na solicitação. Padrão: Instrução da atividade e processo + Identificador.

As ações disponíveis:

**Rejeitar**Selecione 'Desabilitar' ou 'Problema resolvido'.

**Aprovar**Selecione 'Desabilitar' ou 'Problema resolvido'.

**Substituto**:

Foi implementado o mecanismo que possibilita a movimentação de solicitações com o usuário substituto. Esta função permite que o usuário selecione a pessoa que estará substituindo e visualize suas tarefas que se encontram em pendência. Isso facilitará o acesso e a conclusão das tarefas com mais eficiência.

**10.** Acessar aba **Acompanhamento**.

**11.** Definir as informações solicitadas.

As informações solicitadas são:

**Notifica responsável**
Quando assinalado, determina que o responsável pela atividade será notificado por *e-mail* sobre o seu início.

**Notifica requisitante**
Quando assinalado, determina que o requisitante da solicitação será notificado por *e-mail* sobre o início dessa atividade.

**Notifica gestor**
Quando assinalado, determina que o gestor do processo será notificado por *e-mail* sobre o início dessa atividade.

Independente da configuração realizada, o usuário não recebe notificações de ações que ele mesmo realizou.

Caso o usuário movimente uma atividade para outra atividade que ele é responsável, ainda que esteja com a configuração de "Notifica requisitante" ele não receberá notificação.

Outro exemplo é se o usuário é gestor e movimentar a atividade (como responsável ou gestor), e a próxima atividade estiver marcado a opção "Notifica Gestor" ele não receberá notificação (apesar que outros gestores irão receber)

Isso é válido para todos os tipos de notificação, incluindo como Substituto. Se o usuário 'A' é substituto de usuário 'B' e movimenta uma atividade para o usuário 'B', ele não será notificado. Apenas o usuário 'B' e outros usuários substitutos dele serão notificados.

**12.** Acessar aba **Atraso**.

**13.** Definir as informações solicitadas.

As informações solicitadas são:

**Notifica responsável**
Quando assinalado, determina que o responsável pela atividade será notificado por *e-mail* quando ela estiver atrasada.

**Tolerância**
Tempo durante o qual a plataforma irá aguardar após o vencimento do prazo da atividade para começar a enviar o *e-mail* de notificação de atraso para o responsável, requisitante ou gestor, conforme as opções assinaladas.

**Frequência**
Intervalo de tempo entre cada envio de *e-mail* de notificação de atraso para o responsável, requisitante ou gestor, conforme as opções assinaladas.

**Aviso de expiração**
Tempo antes da expiração da tarefa a partir do qual será enviado *e-mail* de notificação de que a tarefa está para expirar para o responsável, requisitante ou gestor, conforme as opções assinaladas.

**Notifica requisitante**
Quando assinalado, determina que o requisitante da solicitação será notificado por e-mail quando essa atividade estiver atrasada.

**Notifica gestor**
Quando assinalado, determina que o gestor do processo será notificado por e-mail quando essa atividade estiver atrasada.

**14.**Acessar aba **Esforço**.

**15.**Definir as informações solicitadas.

As informações solicitadas são:

**Cálculo**
Forma de cálculo do esforço da atividade. As opções disponíveis são:

- **Não controlar esforço**: quando selecionada, determina que o esforço não é controlado.
- **Baseado no esforço estimado**: quando selecionada, determina que seja considerado o esforço estimado para o cálculo. Este valor é proveniente do campo Esforço previsto.
- **Baseado no apontamento de horas**: quando selecionada, determina que seja considerado o esforço informado no apontamento de horas. Nessa situação, para concluir a tarefa, o usuário é obrigado a informar a quantidade de horas trabalhadas na atividade.
- **Baseado no tempo de conclusão**: quando selecionada, determina que seja considerado o tempo de conclusão como esforço da atividade. É considerado como tempo de conclusão o tempo em que a atividade permaneceu com o usuário, considerando o expediente e feriados.

**Esforço previsto**
Quantidade de horas previstas para a realização da atividade. Não é necessário informar esse esforço quando foi definido que ele não será controlado.

**16.**Depois de finalizar a configuração da atividade, acionar **Confirmar**.

## Configurar Atividade automática

---

 **Assista ao vídeo**

O fluxo padrão indica uma ação da atividade automática, que acontecerá quando nenhuma das condições definidas forem atendidas. Para mais detalhes, acesse [Fluxos](https://tdn.totvs.com/x/DRgwDg#Fluxos-FluxoPadr%C3%A3o).

**01.** Arrastar o elemento **Automático**do menu lateral para o local desejado da área de modelagem do fluxo do processo.

A atividade automática é um mecanismo que, dependendo do resultado obtido, determina para qual atividade, dentre as possíveis, o fluxo do processo deve ser encaminhado.

**02.** Posicionar o *mouse* sobre o elemento e acionar **Configurar**, representado por uma engrenagem.

Para remover o elemento do diagrama do processo, basta acionar **Excluir**, representado por uma lixeira.

**03.** Inserir um nome para a atividade automática.

**04**. Ao acionar o botão **Adicionar**, para incluir uma condição, o usuário irá selecionar umas das opções: **Condição**ou **Condição avançada**.

A opção **Condição**, permite ao usuário configurar a atividade automática sem necessidade de utilizar programação ou codificação, apenas criando regras. Já na opção **Condição avançada**, o usuário que possui perfil técnico e que desejar codificar, terá essa possibilidade, conforme já era realizado anteriormente.

**05.** Selecionar **Condição**.

Aqui deverão ser cadastradas as regras para que a condição seja atendida, além da atividade de destino desta condição e o mecanismo de atribuição, sendo este último opcional. São as regras criadas na  condição que farão a atividade ter comportamento automático.

Definir as informações solicitadas:

**-Adicionar uma regra**Neste campo, serão configuradas as entradas, operador e atribuição da regra. Também é possível editar uma regra da condição acionando **Editar** ou remover uma regra por meio do **Remover**.

**-Atividade destino**Atividade para a qual a solicitação será movimentada quando a expressão lógica em questão for verdadeira.

**-Mecanismo**
É a forma como serão selecionados os usuários para execução da atividade destino. São exibidos apenas os tipos de mecanismo de atribuição que podem ser utilizados em atividades do tipo Automático. A configuração de um mecanismo de atribuição para uma condição é opcional. Caso seja selecionado um mecanismo de atribuição, ele será utilizado em conjunto com o mecanismo de atribuição da atividade destino para definir o responsável pela atividade, retornando um conjunto de usuários comuns entre os dois mecanismos de atribuição. Caso não seja selecionado um mecanismo de atribuição, será utilizado
somente o mecanismo de atribuição da atividade destino.

Se um mecanismo foi selecionado, acionar **Configurar**, localizado ao lado do campo Mecanismo de atribuição, e definir as informações desejadas para ele.

- **Atribuição por associação**: quando selecionado, determina que os usuários que podem executar a atividade destino e serão exibidos para seleção são os resultantes da junção de vários mecanismos de atribuição;
- **Atribuição por campo de formulário**: quando selecionado, determina que a atividade destino será enviada para o usuário que é informado em um campo do formulário relacionado ao processo;
- **Atribuição por executor de atividade**: quando selecionado, determina que a atividade destino será enviada para o executor de uma determinada atividade anterior do processo;
- **Atribuição por grupo**: quando selecionado, determina que os usuários que podem executar a atividade destino e serão exibidos para seleção são todos os usuários que pertencem a um grupo;
- **Atribuição por grupos do colaborador**: quando selecionado, determina que os usuários que podem executar a atividade destino e serão exibidos para seleção são os que pertencem aos mesmos grupos do usuário autenticado ou do usuário que iniciou a solicitação, conforme for configurado no mecanismo;
- **Atribuição por papel**: quando selecionado, determina que os usuários que podem executar a atividade destino e serão exibidos para seleção são todos os usuários que pertencem a um papel;
- **Atribuição para um grupo**: quando selecionado, determina que a atividade destino será enviada para um *pool* de recursos, contendo os usuários pertencentes ao grupo. Nesse caso, qualquer usuário do grupo pode assumir a atividade;
- **Atribuição para um papel**: quando selecionado, determina que a atividade será enviada para um *pool* de recursos, contendo os usuários pertencentes ao papel. Nesse caso, qualquer usuário do papel pode assumir a atividade;
- **Atribuição por usuário**: quando selecionado, determina que a atividade será enviada para um usuário específico.

Informações sobre a configuração de mecanismos de atribuição podem ser obtidas em [Configurar mecanismo de atribuição](/pages/viewpage.action?pageId=265783517).

**06.** Selecionar **Condição avançada**.

Aqui deverá ser incluída a condição em formato de código, além da atividade de destino desta condição e o mecanismo de atribuição, sendo este último opcional.

Importante!

Os fluxos de saída da atividade automática já devem estar definidos para que seja possível configurar suas condições. Se uma condição não for informada, a plataforma assumirá esta condição como "*false*".

**Definir as informações solicitadas:**

**-Adicionar uma regra**Neste campo, serão configuradas as entradas, operador e atribuição da regra. Também é possível editar uma regra da condição acionando Editar ou remover uma regra por meio do Remover.

**-Atividade destino**Atividade para a qual a solicitação será movimentada quando a expressão lógica em questão for verdadeira.

**-Mecanismo**
É a forma como serão selecionados os usuários para execução da atividade destino. São exibidos apenas os tipos de mecanismo de atribuição que podem ser utilizados em atividades do tipo Automático. A configuração de um mecanismo de atribuição para uma condição é opcional. Caso seja selecionado um mecanismo de atribuição, ele será utilizado em conjunto com o mecanismo de atribuição da atividade destino para definir o responsável pela atividade, retornando um conjunto de usuários comuns entre os dois mecanismos de atribuição. Caso não seja selecionado um mecanismo de atribuição, será utilizado
somente o mecanismo de atribuição da atividade destino.

Se um mecanismo foi selecionado, acionar **Configurar**, localizado ao lado do campo Mecanismo de atribuição, e definir as informações desejadas para ele.

- **Atribuição por associação**: quando selecionado, determina que os usuários que podem executar a atividade destino e serão exibidos para seleção são os resultantes da junção de vários mecanismos de atribuição;
- **Atribuição por campo de formulário**: quando selecionado, determina que a atividade destino será enviada para o usuário que é informado em um campo do formulário relacionado ao processo;
- **Atribuição por executor de atividade**: quando selecionado, determina que a atividade destino será enviada para o executor de uma determinada atividade anterior do processo;
- **Atribuição por grupo**: quando selecionado, determina que os usuários que podem executar a atividade destino e serão exibidos para seleção são todos os usuários que pertencem a um grupo;
- **Atribuição por grupos do colaborador**: quando selecionado, determina que os usuários que podem executar a atividade destino e serão exibidos para seleção são os que pertencem aos mesmos grupos do usuário autenticado ou do usuário que iniciou a solicitação, conforme for configurado no mecanismo;
- **Atribuição por papel**: quando selecionado, determina que os usuários que podem executar a atividade destino e serão exibidos para seleção são todos os usuários que pertencem a um papel;
- **Atribuição para um grupo**: quando selecionado, determina que a atividade destino será enviada para um *pool* de recursos, contendo os usuários pertencentes ao grupo. Nesse caso, qualquer usuário do grupo pode assumir a atividade;
- **Atribuição para um papel**: quando selecionado, determina que a atividade será enviada para um *pool* de recursos, contendo os usuários pertencentes ao papel. Nesse caso, qualquer usuário do papel pode assumir a atividade;
- **Atribuição por usuário**: quando selecionado, determina que a atividade será enviada para um usuário específico.

Informações sobre a configuração de mecanismos de atribuição podem ser obtidas em [Configurar mecanismo de atribuição](/pages/viewpage.action?pageId=265783517).

**07. **Depois de finalizar a configuração do mecanismo de atribuição, acionar **Confirmar** na janela Condição.

**08.** Incluir quantas condições for desejado, configurá-las e acionar **Confirmar**.

## Configurar Serviço

---

**01.** Arrastar o elemento **Serviço***** ***do menu lateral para o local desejado da área de modelagem do fluxo do processo.

**02.** Posicionar o *mouse* sobre o elemento e acionar **Configurar**, representado por uma engrenagem.

**03**. Na aba **Geral,** insira as informações solicitadas.

- **Descrição**: Permite inserir um nome ou um título para a atividade.
- **Execução:**Selecionar o modo de configuração que deseja:**Automatizada -**modelo de execução assíncrona. Utilizada quando a execução não necessita de um feedback imediato de que a operação foi ou não, realizada com êxito.
- **Imediata -**modelo de execução síncrona. Utilizada quando a execução retorna um feedback imediato da operação.
- **Manual** - modelo de execução exibida em processos que foram configurados antes da atualização 1.6.5. Recomenda-se atualizar a configuração para o modelo imediato.

Acesse a documentação de [Integração assíncrona via processos workflow](https://tdn.totvs.com/x/9mUmDg) para mais detalhes sobre os dois modelos de execução.

- **Tentativas**: Inserir a quantidade de vezes que o serviço poderá ser executado.
- **Frequência**: Inserir o tempo em que o serviço ficará em execução.
- **Frequência****por**: selecionar o tipo de unidade de tempo em que o serviço ficará em execução, podendo selecionar entre **minutos**, **horas** e **dias**.
- **Mensagem**: Inserir uma mensagem que será exibida na conclusão da execução do serviço.

Exemplo de utilização:

| Tentativas | Frequência | Frequência por | Mensagem |
| --- | --- | --- | --- |
| Tentativas | Frequência | Frequência por | Mensagem |
| 10 | 1 | hora | Integração realizada com sucesso!!! |

**04**. Na aba **Serviço,** insira as informações solicitadas.

- **Serviço**Selecione um serviço do tipo **Soap**, já cadastrado através do item Serviços, localizado no Painel de controle, aba Gerais.

Para saber como criar um serviço, acesse a documentação [aqui](https://tdn.totvs.com/x/-PeFDg).

- **Operação**Ao selecionar o ícone de lupa, permitirá selecionar uma das operações disponíveis. As operações estarão listadas por Nome e PortType (ColleagueService).
- **Configurar**Nas configurações da operação selecionada, podem ser configuradas as Propriedades e SOAP Headers.

**Propriedades**

- Autenticação Básica - selecionar se deseja ou não de autenticação. Podendo definir um usuário e senha.
- SSL - habilitar quando o serviço soap exigir utilização de ssl.
- Desabilitar Chunking - desabilitar o envio do envelope soap inteiro.
- Listar mensagens SOAP - habilitar para mostrar as mensagens de envio e recebimento no log.
- Tempo de resposta - habilitar para mostrar o tempo que a requisição aguarda pela resposta.

**SOAP Headers**Permite adicionar um header(cabeçalho).

Acionar **Salvar** para concluir a configuração.

**Parâmetros**Preencha os parâmetros de acordo com o solicitado:

**Atribuição**- Valor, Formulário, Variável ou Nulo (Ao selecionar Nulo, o campo Valor é automaticamente dispensado. Para a opção Formulário ser exibida, é necessário ter um formulário atrelado ao processo).

**Valor**- Serão visualizadas quando o campo de atribuição for selecionado como Variável. São elas: WKCompany, WKUser, WKCardId, WKCurrentState, WKDef, WKFormId, WKNextState, WKNumProcess, WKNumState e WKUserComment.

**Retorno**
Preencha os retornos de acordo com o solicitado:

**Atribuição**- Descartar, Formulário e Observação (Ao selecionar Descartar, o campo Valor é automaticamente dispensado. Na opção Formulário, é possível buscar e incluir um formulário no campo Valor. Já na opção Observação, é possível incluir uma mensagem de observação, acionando Editar objeto como ícone de lápis, no campo Valor).

**05**. Acionar **Confirmar**.

## Configurar Documento

---

**01.** Arrastar o elemento **Documento********do menu lateral para o local desejado da área de modelagem do fluxo do processo.

O elemento Documento é utilizado para prover o acesso a um determinado documento publicado na plataforma a partir do diagrama do processo.

**02.** Posicionar o *mouse* sobre o elemento e acionar **Configurar**, representado por uma engrenagem.

Para remover o elemento do diagrama do processo, basta acionar **Excluir**, representado por uma lixeira.

**03.** Selecionar um documento.

Para selecionar um documento, basta acionar o ícone presente abaixo do campo Documento, que representa uma lupa. Na janela exibida, localizar o documento desejado, assinalá-lo e acionar **Selecionar**.

**04.** Acionar **Confirmar**.

## Configurar Anotação

---

**01.** Arrastar o elemento **Anotação********do menu lateral para o local desejado da área de modelagem do fluxo do processo.

O elemento Anotação é utilizado para prover informações adicionais no diagrama do processo.

**02.** Posicionar o *mouse* sobre o elemento e acionar **Configurar**, representado por uma engrenagem.

No momento que a anotação é adicionada na área de modelagem é exibida uma caixa de texto onde é possível inserir o texto correspondente à anotação.

Para remover o elemento do diagrama do processo, basta acionar **Excluir**, representado por uma lixeira.

**03.** Definir a anotação conforme desejado.

**Nome**
Nome da anotação.

**Documento**
Texto que corresponde à anotação propriamente dita.

**04.** Acionar **Confirmar**.

## Configurar Swimlane

---

**01.** Arrastar o elemento **Swimlane********do menu lateral para o local desejado da área de modelagem do fluxo do processo.

O elemento *Swinlane* é utilizado para representar visualmente uma entidade participante do fluxo do processo. Desta maneira, é possível organizar as atividades de acordo com a entidade responsável pela sua execução, facilitando a visualização e entendimento do fluxo do processo.

**02.** Posicionar o *mouse* sobre o elemento e acionar **Configurar**, representado por uma engrenagem.

Para remover o elemento do diagrama do processo, basta acionar **Excluir**, representado por uma lixeira.

**03.** Definir as informações solicitadas.

**Nome**
Nome do *swinlane* que representará uma entidade participante do fluxo do processo.

**Cor**
Cor desejada para o *swinlane*.

**04.** Acionar **Confirmar**.

## Configurar Subprocesso

---

**01.** Arrastar o elemento **Subprocesso**do menu lateral para o local desejado da área de modelagem do fluxo do processo.

O elemento Subprocesso representa outros processos que fazem parte de um processo principal.

**02.** Posicionar o *mouse* sobre o elemento e acionar **Configurar**, representado por uma engrenagem.

Para remover o elemento do diagrama do processo, basta acionar **Excluir**, representado por uma lixeira.

**03.** Definir as informações solicitadas para o subprocesso da aba **Geral**.

**Nome**
Nome que será atribuído ao subprocesso dentro do processo que está sendo modelado.

**Descrição**
Descrição que será atribuída ao subprocesso dentro do processo que está sendo modelado.

**Subprocesso**
Subprocesso que será incluído dentro do processo que está sendo modelado. Qualquer processo existente na plataforma pode ser utilizado como subprocesso. Quando a solicitação é movimentada para o subprocesso, a solicitação do processo principal é pausada e uma nova solicitação do subprocesso é criada. Caso o fluxo permita retorno, quando a solicitação do processo principal for movida para o subprocesso, a solicitação do processo principal ficará bloqueada até o término da solicitação do subprocesso. Após a finalização do subprocesso, a solicitação do processo principal retornará para que sua execução seja retomada.

**Transfere anexos**
Quando assinalado, determina que todos os anexos presentes na solicitação do processo principal serão copiados para a nova solicitação que será criada para o subprocesso em questão.

**Cancelamento conjunto com solicitação principal**
Quando assinalado, determina que se a solicitação principal for cancelada, a solicitação do subprocesso também será. Porém, o contrário não é verdadeiro, ou seja, se a solicitação do subprocesso for cancelada, a solicitação principal não será.

**Movimentar para a próxima atividade**
Quando assinalado, determina que ao movimentar a solicitação será possível iniciar a solicitação do subprocesso imediatamente - sem a necessidade de acessar a Central de Tarefas para isso. Ou seja, quando a solicitação for movimentada para o subprocesso, será exibida a primeira atividade do subprocesso para seleção (ou as primeiras atividades, caso o fluxo do subprocesso seja alternativo), sendo possível também definir o responsável pela atividade selecionada.

**04. **Definir as informações solicitadas para o subprocesso da aba **Campos**.

Esta aba permite ao usuário a possibilidade de configurar o envio de valores de campos do formulário entre um processo e um subprocesso. Determinando assim, campos que sairão do processo pai e irão para o processo filho e do processo filho que irão para o processo pai. Ambos processos, pai e filho, deverão ter um formulário criado para que o envio de valores e suas respectivas direções possam ser definidas.
Isso permite ao usuário, realizar a passagem de informações entre processo pai e processo filho de forma simples e transparente.

A seguir, exemplo das direções que indicam origem e o destino das informações:

**1°** passar valor do campo pai(origem) para o campo filho(destino): Nome **->** Nome do usuário.
**2°** passar valor do campo filho(origem) para o campo pai(destino): Nome **<-** Nome do usuário.
**3°** passar e retornar o valor do campo(ambos passam valor um para o outro): Nome **<->** Nome do usuário.

As informações das colunas são:

**Campos processo**
São os campos que serão utilizados do formulário criado no processo pai. Selecionar um campo do formulário pai para fazer a relação dos campos.

**Direção**
É a direção que indica o fluxo da informação dos campos entre processo e subprocesso. Ao clicar sobre ela, é alterada a origem e destino da relação com os campos.

**Campos subprocesso**
São os campos que serão utilizados do formulário criado no processo filho. Selecionar um campo do formulário filho para fazer a relação dos campos.

**Status**
Indica a confirmação da criação da nova relação dos campos de processo e subprocesso.

Através do botão **Novo** é possível incluir um novo envio de valores entre processo e subprocesso. É possível também **Editar** ou **Excluir** uma relação de campos através dos ícones localizados no canto direito da aba. O sistema não permitirá relacionar dois campos de processo com a mesma direção.

**05.** Acionar **Confirmar**.

## Configurar Fork

---

**01.** Arrastar o elemento ***Fork***do menu lateral para o local desejado da área de modelagem do fluxo do processo.

O *Fork* representa o início de atividades paralelas. Todas as atividades e fluxos que estão após o *Fork* e antes do *Join* serão executadas paralelamente.

**02.** Posicionar o *mouse* sobre o elemento e acionar **Configurar**, representado por uma engrenagem.

Para remover o elemento do diagrama do processo, basta acionar **Excluir**, representado por uma lixeira.

**03.** Inserir um nome, se desejado.

**04.** Acionar **Confirmar**.

## Configurar Join

---

**01.** Arrastar o elemento ***Join***do menu lateral para o local desejado da área de modelagem do fluxo do processo.

O *Join* representa o fim de atividades paralelas. Todo fluxo que veio de um *Fork* em algum momento do processo deve ir para um *Join*. Quando existem atividades paralelas pendentes, o processo fica posicionado no *Join* até que todas as atividades sejam concluídas. Quando as tarefas forem concluídas, o processo é movimentado automaticamente para a próxima atividade.

**02.** Posicionar o *mouse* sobre o elemento e acionar **Configurar**, representado por uma engrenagem.

Para remover o elemento do diagrama do processo, basta acionar **Excluir**, representado por uma lixeira.

**03.** Inserir um nome, se desejado.

**04.** Acionar **Confirmar**.

## Configurar Fluxos

---

**01.** Posicionar o *mouse* sobre o elemento origem do fluxo.

**02.** Acionar a opção **Fluxo**, representada por uma seta, do elemento de origem até o elemento destino.

Fluxos são mecanismos que definem para qual atividade o processo pode seguir.

Importante!

O elemento Fim apenas pode ser utilizado como atividade destino.

Quando realizado este procedimento nos elementos Documento e Anotação não será criado um fluxo, e sim uma associação, visto que os mesmos não são considerados atividades de processo.

**03.** Posicionar o *mouse* sobre o elemento Fluxo e acionar **Configurar**, representado por uma engrenagem.

Para remover o elemento do diagrama do processo, basta acionar **Excluir**, representado por uma lixeira.

**04.** Configurar aba **Geral.**

Na aba**Geral**, definir as informações solicitadas:

**Nome**
Nome que será atribuído ao fluxo.

**Ativ. fluxo**
Texto que será utilizado para identificar a ação de avanço da atividade origem para a atividade destino no fluxo do processo. O texto informado é exibido como opção de ação ao usuário no momento da execução da atividade origem. Ele é opcional e caso não seja informado será utilizado o nome da atividade destino.

**Fluxo automático**
Quando assinalado, determina que a atividade será movimentada automaticamente para a atividade destino quando seu prazo de conclusão vencer. Para que isto aconteça, é necessário configurar um agendamento do tipo Fluxo Automático. Mais detalhes sobre como configurar um agendamento podem ser obtidos em [Agendador de tarefas](/pages/viewpage.action?pageId=234455387).

**Permite retorno**
Quando assinalado, determina que é possível retornar a solicitação da atividade destino para a atividade origem.

**Fluxo padrão**Quando assinalado, determina que o fluxo, mesmo em uma atividade comum, não poderá ser configurado como fluxo automático e nem permitir retorno.

**Ativ. retorno**
Texto que será utilizado para identificar a ação de retorno da atividade destino para a atividade origem no fluxo do processo. O texto informado é exibido como opção de ação ao usuário no momento da execução da atividade destino. Ele é opcional e caso não seja informado será utilizado o nome da atividade origem. Esse campo somente é habilitado quando a opção Permite retorno estiver assinalada.

Para mais detalhes, acesse a documentação completa de [Fluxos](https://tdn.totvs.com/x/DRgwDg).

**05.**Configurar aba**Mensagem da movimentação.**

Na aba **Mensagem da movimentação**, é possível definir uma mensagem configurada de início e movimentação de processo. 

 **Assista ao vídeo**

É permitido configurar a mensagem de sucesso principal "Solicitação aberta com o número XXX" . Caso nenhuma mensagem seja cadastrada será mantida a mensagem padrão atual. É possível também adicionar o numero da solicitação dentro da frase utilizando o @. Após inserir, basta clicar em **Id da solicitação** para que o numero seja incluído.

**Título**Adicione um título para sua movimentação, utilizando no máximo 70 caracteres.

**Descrição**Adicione uma descrição contendo os detalhes principais, utilizando no máximo 255 caracteres.

**Título do link da descrição**Adicione um título para o link da descrição, utilizando no máximo 70 caracteres.

**06**. Acionar **Confirmar**.

Fique atento!

Esta documentação é válida a partir da atualização**Crystal Mist (1.8.2)**. Se você utiliza uma atualização anterior, ela pode conter informações diferentes das quais você vê na sua plataforma.


<!-- anchors: Plataforma❙Configuraratividadesefluxos-Falandodeconfiguraratividadesefluxos..., Plataforma❙Configuraratividadesefluxos-ConfigurarInício, Plataforma❙Configuraratividadesefluxos-ConfigurarFim, Plataforma❙Configuraratividadesefluxos-ConfigurarAtividade, Plataforma❙Configuraratividadesefluxos-ConfigurarAtividadeautomática, Plataforma❙Configuraratividadesefluxos-ConfigurarServiço, Plataforma❙Configuraratividadesefluxos-ConfigurarDocumento, Plataforma❙Configuraratividadesefluxos-ConfigurarAnotação, Plataforma❙Configuraratividadesefluxos-ConfigurarSwimlane, Plataforma❙Configuraratividadesefluxos-ConfigurarSubprocesso, Plataforma❙Configuraratividadesefluxos-ConfigurarFork, Plataforma❙Configuraratividadesefluxos-ConfigurarJoin, Plataforma❙Configuraratividadesefluxos-ConfigurarFluxos -->
