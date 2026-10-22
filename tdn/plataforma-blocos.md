---
title: "Plataforma ❙ Blocos"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=233766580"
scraped_at: "2026-03-09T04:20:51.574Z"
depth: 3
anchors: 10
child_links: 51
---

# Plataforma ❙ Blocos

Importante!

A partir de **Abril de 2025**, o [suporte ](https://totvscst.zendesk.com/hc/pt-br/#home)ofertado ao LMS será descontinuado. Não havendo mais evoluções após este período. O LMS não estará mais disponível para acesso nos ambientes a partir da **próxima releas**e do TOTVS Fluig Plataforma, prevista para o primeiro semestre de 2025.

# Índice

## Falando de blocos...

Blocos são conjuntos de questões de determinado tópico ou tópicos, definidos por um filtro, que podem ser associados às avaliações, podendo ser avaliados separadamente e possuem um determinado peso dentro da avaliação.

É possível inserir, editar e remover blocos de questões e gerenciar suas versões.

A opção de remoção, localizada na janela Tópicos, permite desconsiderar determinadas questões. Por exemplo, ao incluir um tópico para ser considerado no bloco, é possível desconsiderar todas as questões dele que possuem um determinado nível de dificuldade. Ou incluir todas as questões de um tópico com sub tópicos, desconsiderando apenas um dos sub tópicos.

**Exemplo de cálculo:**

Supondo que uma avaliação possui vários blocos e todos possuem o peso 1, sendo que há blocos com apenas uma questão e outros com mais questões:

- Em um bloco que possui duas questões, se o aluno acertar as duas, ele obtém 100% do bloco; se ele acertar uma questão ele obtém 50% do bloco; e se não acertar nenhuma ele obtém 0%.
- Em um bloco que possui apenas uma questão, se o aluno acertar essa questão, ele obtém 100% do bloco; se errar ele obtém 0% do bloco.

Sendo assim, o aluno obtém o percentual proporcional ao número de questões que ele acertou no bloco (considerando o total de questões do bloco).

Por isso podem existir notas diferentes para alunos que erraram a mesma quantidade de questões em uma **avaliação**, porém, questões de **blocos diferentes**. Se os alunos errassem as mesmas questões dos mesmos blocos, as notas seriam iguais. Porém, a quantidade de acertos em uma avaliação não significa a mesma nota, visto que pode ocorrer que o aluno que tirou a menor nota, errou uma questão sozinha dentro de um bloco, tendo obtido 0% de aproveitamento no bloco, já outro aluno errou 50% de um bloco, pois há duas questões nesse bloco.

**Exemplo**:
O peso de um bloco é 1: se houver 10 questões nesse bloco, cada questão vale 0.1. Se esse mesmo bloco tem apenas 2 questões, cada questão vale 0.5.

Portanto, se um bloco possui o peso 1 e tem apenas 1 questão, ela vale 1 (100% do bloco). Por isso ela vale mais do que as questões de um bloco que possui várias questões.

![](/download/attachments/233766580/blocos.PNG?version=3&modificationDate=1600263063060&api=v2)

### Visualizar blocos

---

**01.** No menu principal, posicionar o *mouse* sobre **Avaliações**.

**02.** Acionar **Blocos**.

**03.**Visualizar os blocos de questões existentes.

### Criar bloco

---

**01.** Acionar **Novo**.

**02.** Inserir o título do bloco de questões.

**03.** Em Tópicos, acionar **Adicionar** para incluir os tópicos e definir o filtro de questões que farão parte do bloco.

**04.** Na janela exibida, definir as informações para filtrar as questões a serem inseridas no bloco.

**Ação**
Tipo de ação que será efetuada. As opções disponíveis são:

- **Adicionar**: quando selecionada, determina que as questões do tópico selecionado serão incluídas no bloco.
- **Remover**: quando selecionada, determina que as questões do tópico selecionado serão excluídas do bloco, ou seja, não serão consideradas.

**Tópico raiz**Árvore de tópicos de questões existentes e disponíveis para uso. É necessário localizar e selecionar o tópico desejado.

**Dificuldade**
Intervalo de dificuldade a ser considerado ao filtrar as questões do tópico que devem ser inseridas ou removidas do bloco.

**Somente as tags**
*Tags* a serem consideradas ao filtrar as questões que devem ser inseridas ou removidas do bloco.

**05.** Acionar **Adicionar**.

É possível inserir mais de um tópico de questões para efetuar a seleção delas posteriormente.

Para remover um tópico incluído no bloco, basta acionar o ícone **Remover**, localizado no lado direito da linha correspondente ao tópico.

**06.** Em Questões, definir quais questões devem ser incluídas no bloco.

**Todas as questões**
Quando selecionada, determina que todas as questões do tópico farão parte do bloco e serão apresentadas na avaliação para a qual esse bloco será importado.

**Algumas questões selecionadas**
Quando selecionada, determina que apenas as questões selecionadas farão parte do bloco e serão apresentadas na avaliação para a qual esse bloco será importado.

**Algumas questões aleatórias**
Quando selecionada, determina que apenas um determinado número de questões do tópico fará parte do bloco e elas serão apresentadas na avaliação que utilizar esse bloco aleatoriamente. Ao selecionar essa opção, é apresentado o campo no qual deve ser inserido o número de questões do tópico que devem fazer parte do bloco.

**Quantidade**
Quantidade de questões aleatórias que deve ser incluída no bloco e serão apresentadas na avaliação que utilizar esse bloco. Esse campo somente é exibido quando é selecionada a opção Algumas questões aleatórias.

**07.** Selecionar as questões que devem fazer parte do bloco caso tenha sido definido que ele utilizará apenas algumas questões selecionadas.

**08.** Acionar **Salvar**, para apenas salvar o bloco; ou **Liberar versão** para salvar e liberar a versão do bloco juntamente.

### Liberar versão de bloco

---

**01.** Na janela Blocos, selecionar o bloco que terá sua versão liberada.

**02.** Acionar **Editar**.

**03.** Acionar **Liberar versão**, localizado no canto superior direito da janela.

Essa opção somente é exibida para blocos que possuem uma versão em edição.

**04.** Na janela exibida, inserir a descrição da versão que será liberada para uso.

**05.** Acionar **Liberar versão**.

Ao acionar essa opção, a versão liberada se torna a versão ativa e atual do bloco, ficando disponível para ser utilizada em avaliações.

Também é enviada uma notificação a todos os usuários criadores de avaliações informando sobre a nova versão liberada.

### Criar nova versão de bloco

---

**01.** Na janela Blocos, selecionar o bloco para o qual será criada uma nova versão.

**02.** Acionar **Editar**.

**03.** Acionar **Criar versão**, localizado no canto superior direito da janela.

Essa opção somente é exibida para blocos que estão com a última versão já liberada.

**04.** Efetuar as alterações desejadas no bloco para compor a nova versão.

**05.** Acionar **Salvar**.

### Cancelar versão de bloco

---

**01.** Na janela Blocos, selecionar o bloco que terá sua versão cancelada.

**02.** Acionar **Editar**.

**03.** Acionar **Cancelar versão**, localizado no canto superior direito da janela.

Essa opção somente é exibida para blocos que possuem uma versão em edição, pois somente é possível cancelar uma versão ainda não liberada.

**04.** Na mensagem exibida, acionar **Sim** para confirmar o cancelamento da versão que está em edição; ou **Não** para desistir da ação, se desejado.

### Editar bloco

---

**01.** Na janela blocos, selecionar o bloco a ser editado.

**02.** Acionar **Editar**.

**03.** Alterar as informações desejadas. Detalhes sobre os campos exibidos podem ser obtidos em Criar bloco.

**04.** Acionar **Salvar** para confirmar; ou **Cancelar** para descartar as alterações efetuadas, se desejado.

### Remover bloco

---

**01.** Na janela Blocos, selecionar o bloco a ser removido.

**02.** Acionar **Remover**.

**03.** Na mensagem apresentada, acionar **Sim** para confirmar a remoção do bloco; ou **Não **para desistir da ação, se desejado.

## Perguntas frequentes

---

[Por que algumas questões de tópicos não aparecem na criação de um bloco?](/pages/viewpage.action?pageId=244725056)

[Por que um bloco existente não é exibido na criação de uma avaliação?](/pages/viewpage.action?pageId=244725110)


<!-- anchors: Plataforma❙Blocos-Índice, Plataforma❙Blocos-Falandodeblocos..., Plataforma❙Blocos-Visualizarblocos, Plataforma❙Blocos-Criarbloco, Plataforma❙Blocos-Liberarversãodebloco, Plataforma❙Blocos-Criarnovaversãodebloco, Plataforma❙Blocos-Cancelarversãodebloco, Plataforma❙Blocos-Editarbloco, Plataforma❙Blocos-Removerbloco, Plataforma❙Blocos-Perguntasfrequentes -->
