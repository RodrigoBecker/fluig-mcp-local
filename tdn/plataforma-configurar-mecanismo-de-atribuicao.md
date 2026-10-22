---
title: "Plataforma ❙ Configurar mecanismo de atribuição"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=265783517"
scraped_at: "2026-03-09T03:08:27.353Z"
depth: 1
anchors: 11
child_links: 58
---

# Plataforma ❙ Configurar mecanismo de atribuição

Consulte a documentação correta:

Esta documentação refere-se ao editor de processos atual da plataforma. Caso esteja utilizando o novo editor de processos, acesse a documentação disponível em [Plataforma | Mecanismo de atribuição](https://tdn.totvs.com/x/OXjAMw). 

# Falando de configurar mecanismo de atribuição...

---

Mecanismos de atribuição são componentes que permitem selecionar determinados usuários para permitir determinadas ações, tais como, a função de gestor de um processo, o recebimento de tarefas de processos, ações sobre anexos de solicitações.

![](/download/attachments/265783517/Configurar%20mecanismo%20de%20atribui%C3%A7%C3%A3o.png?version=1&modificationDate=1519127796000&api=v2)

## Atribuição por associação

---

Esse tipo de atribuição permite associar diversos mecanismos, possibilitando a criação de lógicas mais complexas e elaboradas para a seleção de usuários para os quais será atribuída determinada ação. Ao associar diversos mecanismos é possível tanto selecionar todos os usuários ou apenas os usuários presentes em todos os mecanismos (conceito de intersecção).

**01.**Após selecionar a opção Atribuição por associação, na janela exibida ao acionar **Configurar**, selecionar o mecanismo que será utilizado na associação.

**02.** Acionar **Incluir**.

**03.**No quadro Associação, selecionar o mecanismo inserido e acionar**Editar**.

Para excluir um mecanismo incluído, basta selecioná-lo e acionar **Remover**.

**04.**Selecionar o item desejado, de acordo com o tipo de mecanismo escolhido, e acionar **Confirmar**.

**05.**Depois de incluir todos os mecanismos desejados para a associação, definir como ela deve ser efetuada.

**Tipo de associação**
Forma como será efetuada a associação dos mecanismos incluídos para definição dos gestores do processo. As opções disponíveis são:

- **Todos os usuários selecionados em qualquer um dos mecanismos**: quando selecionada, determina que todos os usuários de todos os mecanismos incluídos serão definidos como gestores do processo;
- **Somente os usuários selecionados em todos os mecanismos**: quando selecionada, determina que somente os usuários que fazem parte de todos os mecanismos incluídos serão definidos como gestores do processo, ou seja, essa opção utiliza o conceito de intersecção.

**06.** Após inserir e configurar todos os mecanismos desejados para a associação, acionar **Confirmar**.

## Atribuição por grupo

---

Esse tipo de mecanismo permite atribuir determinada ação para todos os usuários de um grupo.

**01.**Após selecionar a opção Atribuição por grupo e acionar **Configurar**, selecionar o grupo desejado na janela exibida.

**02.**Acionar **Confirmar**.

## Atribuição para grupo

---

Esse tipo de mecanismo permite atribuir uma atividade para um *pool* de recursos onde todos os usuários do grupo determinado podem assumi-la.

**01.**Após selecionar a opção Atribuição para grupo e acionar **Configurar**, selecionar o grupo desejado na janela exibida.

**02.**Acionar **Confirmar**.

## Atribuição por papel

---

Esse tipo de mecanismo permite atribuir determinada ação a todos os usuários de um papel.

**01.**Após selecionar a opção Atribuição por papel e acionar **Configurar**, selecionar o papel desejado na janela exibida.

**02.**Acionar **Confirmar**.

## Atribuição para papel

---

Esse tipo de mecanismo permite atribuir uma atividade para um *pool* de recursos onde todos os usuários do papel determinado podem assumi-la.

**01.**Após selecionar a opção Atribuição para papel e acionar **Configurar**, selecionar o papel desejado na janela exibida.

**02.**Acionar **Confirmar**.

## Atribuição por usuário

---

Esse tipo de mecanismo permite atribuir determinada ação para um usuário específico.

**01.**Após selecionar a opção Atribuição por usuário e acionar **Configurar**, selecionar o usuário desejado na janela exibida.

**02.**Acionar **Confirmar**.

## Atribuição por campo de formulário

---

Esse tipo de mecanismo permite atribuir determinada ação para um usuário específico que será informado em um determinado campo do formulário associado a um processo.

Importante

Não é possível utilizar esse mecanismo para a atividade inicial de um processo, pois ele depende do preenchimento do formulário e, na atividade inicial, ainda não existe esse registro.

**01.**Após selecionar a opção Atribuição por campo de formulário e acionar **Configurar**, selecionar o campo de formulário desejado na janela exibida.

**02.**Acionar **Confirmar**.

## Atribuição por executor de atividade

---

Esse tipo de mecanismo permite atribuir determinada ação para um usuário específico que executou uma determinada atividade do processo.

**01.**Após selecionar a opção Atribuição por executor de atividade e acionar **Configurar**, definir as informações solicitadas.

**Atividade executada**
Atividade da qual será considerado o seu executor para a atribuição de uma ação.

**Retorna**
Usuário que executou a atividade e que será considerado no mecanismo de atribuição. As opções disponíveis são:

- **Primeira execução:** quando selecionada, determina que o usuário que será considerado no mecanismo de atribuição é o primeiro executor da atividade selecionada;
- **Última execução:** quando selecionada, determina que o usuário que será considerado no mecanismo de atribuição é o que executou a atividade selecionada pela última vez no processo. Essa opção somente faz sentido se a atividade selecionada é executada mais de uma vez ao longo do processo.
- **Todas as execuções:** quando selecionada, determina que serão considerados no mecanismo de atribuição todos os usuários que têm permissão para executar a tarefa selecionada. Essa opção somente faz sentido se a atividade selecionada é executada mais de uma vez ao longo do processo.

**02.**Acionar **Confirmar**.

## Atribuição por grupos do colaborador

---

Esse tipo de mecanismo permite atribuir determinada ação para os usuários que participam dos mesmos grupos do usuário que iniciou uma solicitação do processo ou do usuário autenticado (corrente).

**01.**Após selecionar a opção Atribuição por grupos do colaborador e acionar **Configurar**, definir as informações solicitadas.

**Busca usuários nos grupos**
Usuário do qual os grupos serão considerados no mecanismo de atribuição. As opções disponíveis são:

- **Do solicitante**: quando selecionada, determina que os usuários que pertencem aos mesmos grupos do usuário que iniciou a solicitação serão considerados no mecanismo;
- **Do usuário corrente**: quando selecionada, determina que os usuários que pertencem aos mesmos grupos do usuário autenticado serão considerados no mecanismo.

**Apenas grupos de trabalho**Quando assinalado, determina que serão considerados apenas os grupos de trabalho, sem considerar os grupos de comunidades aos quais o usuário pertence.

**Incluir grupos de comunidade**
Quando assinalado, determina que serão considerados, além dos grupos de trabalho, os grupos de comunidades aos quais o usuário pertence.

**02.**Acionar **Confirmar**.

## Atribuição por todos os usuários

---

Esse tipo de mecanismo permite atribuir critérios de segurança dos documentos anexados às solicitações de um processo para todos os usuários ativos na plataforma.

Esse mecanismo está disponível apenas para a definição de segurança de anexos em processos e não há nenhuma configuração disponível para ele.

**01.** Na aba**Segurança anexos** das propriedades do processo, selecionar a opção Atribuição por todos os usuários e definir os critérios de segurança que serão atribuídos a todos os usuários ativos da plataforma.

Informações detalhadas sobre os critérios de segurança disponíveis para documentos anexados às solicitações de processos podem ser obtidas em [Configuração do processo](/pages/viewpage.action?pageId=263784090).

Importante saber!

Um mecanismo de atribuição customizado, não serve para associações.

Nestes casos, utilizar o mecanismo de atribuição por associação. Se necessário lógicas mais complexas, utilizar associações de mecanismos customizados.

Para detalhes mais técnicos sobre esse assunto, acesse a documentação de [Mecanismo de atribuição personalizado](https://tdn.totvs.com/x/vQSDC).

Fique atento!

Esta documentação é válida a partir da atualização**Crystal Mist (1.8.2)**. Se você utiliza uma atualização anterior, ela pode conter informações diferentes das quais você vê na sua plataforma.


<!-- anchors: Plataforma❙Configurarmecanismodeatribuição-Falandodeconfigurarmecanismodeatribuição..., Plataforma❙Configurarmecanismodeatribuição-Atribuiçãoporassociação, Plataforma❙Configurarmecanismodeatribuição-Atribuiçãoporgrupo, Plataforma❙Configurarmecanismodeatribuição-Atribuiçãoparagrupo, Plataforma❙Configurarmecanismodeatribuição-Atribuiçãoporpapel, Plataforma❙Configurarmecanismodeatribuição-Atribuiçãoparapapel, Plataforma❙Configurarmecanismodeatribuição-Atribuiçãoporusuário, Plataforma❙Configurarmecanismodeatribuição-Atribuiçãoporcampodeformulário, Plataforma❙Configurarmecanismodeatribuição-Atribuiçãoporexecutordeatividade, Plataforma❙Configurarmecanismodeatribuição-Atribuiçãoporgruposdocolaborador, Plataforma❙Configurarmecanismodeatribuição-Atribuiçãoportodososusuários -->
