---
title: "Categorização e caracterização de produtos"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=1037980215"
scraped_at: "2026-03-09T05:30:13.731Z"
depth: 4
anchors: 58
child_links: 170
---

# Categorização e caracterização de produtos

- [Conceitos](#)
- [Set-up](#)
- [Manual de uso](#)
- [FAQ](#)

# Visão conceitual e aplicação

É fundamental compreender os dois pilares que transformam uma simples lista de itens (produtos e/ou serviços) em um catálogo inteligente, navegável e estratégico: a **Categorização** e a **Caracterização**.

Em um sistema de gestão moderno, não basta saber o código e o nome do produto. Para vender melhor, comprar com eficiência e controlar o estoque com precisão, precisamos responder a duas perguntas fundamentais sobre cada item: *"Onde ele se encaixa?"* e *"Quais são os seus detalhes?"*.

Abaixo, exploramos esses conceitos e como eles melhoram a operação do dia a dia.

---

## Categorização: "localização" do produto no catálogo e agrupamento para gestão em massa

**O que é?** A categorização (árvore mercadológica ou árvore de produtos) é a **estrutura hierárquica do seu catálogo**. Ela funciona como os corredores e prateleiras de um supermercado. É a forma como organizamos os produtos em grandes grupos que se dividem em subgrupos cada vez mais específicos.

 - **Conceito Chave:** Cada produto deve pertencer a, preferencialmente, uma única categoria final. É a identidade principal do item.

 - **Exemplo:** `Eletrônicos > Telefonia > Smartphones`.

**No Dia a Dia Operacional:**

 - **Navegação:** Permite que usuários e clientes encontrem o setor correto rapidamente.

 - **Análise de Vendas:** Permite ao gestor saber quanto a empresa faturou especificamente com "Smartphones" versus "Notebooks".

 - **Gestão de suprimentos**: Permite ao analista de compras gerir indicadores de produtos de categorias de sua responsabilidade e promover politicas de ressuprimento e preços específicas por categoria.

---

## Caracterização: "especificação" do produto através de características padronizadas

**O que é?** A caracterização define **como o produto é**. Ela é feita através de **características**(atributos), que são etiquetas ou propriedades específicas que detalham o item (como cor, voltagem, material, tamanho).

 - **Conceito Chave:** Diferente da categoria, um produto pode ter dezenas de atributos. São eles que alimentam os filtros de pesquisa e permitem comparações.

 - **Exemplo:** Para o produto "iPhone 13", os atributos seriam: `Cor: Azul`, `Memória: 128GB`, `Tela: 6.1 polegadas`.

**No Dia a Dia Operacional:**

 - **Busca Avançada:** Permite que um vendedor encontre "todos os produtos *Azuis* de *Algodão*" em segundos.

 - **Redução de Erros:** Garante que informações técnicas críticas (como voltagem ou dimensões) estejam padronizadas e não perdidas em um texto de descrição.

 - **Experiência de Compra:** Permite que o cliente filtre exatamente o que deseja sem ter que ler todos os itens da lista.

---

# Aplicação Prática por Segmento

Para ilustrar a importância de combinar estes dois recursos, veja como diferentes segmentos/subsegmentos utilizam a categorização e a caracterização:

**Varejo de Moda**

 - **O Desafio:** Gerenciar milhares de peças que parecem iguais, mas variam em detalhes.

 - **Categorização:** `Vestuário > Feminino > Calças`.

 - **Caracterização (Atributos):** `Tamanho (P, M, G)`, `Cor (Jeans, Preto)`, `Tecido (Sarja)`, `Modelagem (Skinny)`.

 - **Ganho:** O usuário filtra apenas o tamanho e cor desejados, aumentando a acurácia nas pequisas.

**Home Center (Material de Construção)**

 - **O Desafio:** Venda técnica que exige precisão para evitar problemas na obra.

 - **Categorização:** `Pisos e Revestimentos > Porcelanatos`.

 - **Caracterização (Atributos):** `Acabamento (Polido/Acetinado)`, `Borda (Retificado/Bold)`, `PEI (Resistência)`, `Formato (60x60)`.

 - **Ganho:** O vendedor consegue ofertar rapidamente um produto substituto com as mesmas características técnicas caso o original esteja em falta.

**Indústria e Distribuição Técnica**

 - **O Desafio:** Encontrar peças de reposição compatíveis em um catálogo de peças complexo.

 - **Categorização:** `Fixadores > Parafusos > Sextavados`.

 - **Caracterização (Atributos):** `Diâmetro da Rosca (M6)`, `Comprimento (50mm)`, `Material (Aço Inox)`, `Grau de Resistência (8.8)`.

 - **Ganho:** O comprador industrial localiza a peça exata para a manutenção da máquina sem risco de parada por incompatibilidade.

---

**Resumo**

Utilizar **Categorias** organiza o catálogo. Utilizar **Características** dá inteligência e agilidade ao negócio. Nesta documentação, você aprenderá como configurar e manter essas estruturas para garantir que seu sistema trabalhe a seu favor.

## Pré-requisitos de sistema

 - Versão: 12.1.2510 ou superior

    Para uso no release 12.1.2510 é necessário:

     Estar atualizado com a expedição contínua de XXX/XXXX ou posterior (repositório e dicionários);

     - Adicionar ao(s) menu(s) desejados o acesso a nova interface de Categorização e Caracterização de Produtos, através do programa FATAXXX.

 [Porta multiprotocolo](https://tdn.totvs.com/display/tec/Application+Server+-+Porta+Multiprotocolo) configurada para correto funcionamento do framework PO-UI.

[?](#)

|   |
| --- |

- [Categorias de produtos (FATA142)](#)
- [Cadastro de Produtos (MATA010)](#)

Para uma melhor experiência de uso na gestão de todos os cadastros relacionados ao tema Categorização e Caracterização, está disponível no novo cadastro de Categorias de Produtos (FATA142) uma interface dinâmica e estruturada que permite o acesso a todos os dados de forma contextualizada e relacional. Nesta mesma interface você encontrará todos os recursos necessários para manter estes cadastros organizados e atualizados, permitindo uma gestão eficiente do catálogo de produtos!

Abaixo você encontra, dividas conforme seções da tela, manuais de instruções de uso que vão te auxiliar durante esta jornada.

- [Categorias](#)
- [Características](#)
- [Produtos, Grupos e Grades](#)
- [Códigos de Produtos](#)

# Painel Categorias (seção esquerda da tela)

Nesta seção você terá acesso ao cadastro de categorias através de uma visualização em formato de árvore hierarquizada, recurso este que facilita a administração deste cadastro e a relação entre as categorias (pai, filho, neto e etc.). Todas as ações a serem executadas na jornada de categorização e caracterização serão realizadas tomando como referência o posicionamento nesta árvore. Exemplos:

         - Para incluir uma categoria filha, posiciona-se na categoria pai;

         - Para alterar ou excluir uma categoria, posiciona-se na própria categoria;

         - Para visualizar ou editar as características de uma categoria, posiciona-se na própria categoria;

         - Para vincular produtos em uma categoria, posiciona-se na própria categoria.

Ainda nesta seção, acima da árvore de categorias está disponível uma barra de pesquisa que permite uma busca dinâmica por categorias a partir de sua descrição ou código. A árvore de categorias será sensibilizada pela pesquisa conforme a digitação realizada mostrando apenas os resultados correspondentes ao conteúdo pesquisado.

Sobre o nó "Raiz"

A árvore de categorias é iniciada por um nó de ancoragem nomeado, no padrão do sistema, como "Raiz". Caso você queira mudar esta nomenclatura basta alterar o conteúdo do parâmetro MV_CATSEGM no módulo Configurador.

## Criar uma nova categoria

         1. Na árvore, selecione a categoria na qual se deseja criar uma subcategoria. Caso seja uma categoria de 1º nível, ou seja, uma categoria sem pai, selecione o nó "Raiz";

         2. Acesse o menu de contexto da seção categorias (![](/download/attachments/1037980215/image-2026-2-26_16-23-12.png?version=1&modificationDate=1772133796237&api=v2)) e selecione a opção **Adicionar categoria**(****);

         3. No formulário de cadastro apresentado, preencha os campos;

         4. Confira os dados e confirme; 

            Caso queira criar mais de uma categoria no nó posicionado, utilize a opção "Salvar e Criar Novo" para criar a atual e permanecer no formulário criando novas categorias.

         5. Observe a árvore de categorias atualizada com a(s) categoria(s) criadas.

## Importar categorias

         1. Acesse o menu de contexto da seção categorias (![](/download/attachments/1037980215/image-2026-2-26_16-23-12.png?version=1&modificationDate=1772133796237&api=v2)) e selecione a opção **Importar categorias**(****);

         2. Clique no botão **Baixar planilha modelo** (![](/download/attachments/1037980215/image-2026-3-3_17-20-14.png?version=1&modificationDate=1772569220803&api=v2)) para realizar o download do arquivo de carga;

         3. Preencha o arquivo de carga com os dados das categorias a criar/atualizar conforme leiaute;

         4. Retorne ao assistente de importação e clique no botão **Enviar arquivo preenchido** (![](/download/attachments/1037980215/image-2026-3-3_17-23-45.png?version=1&modificationDate=1772569431827&api=v2));

         5. Selecione o arquivo de carga preenchido e confirme;

         6. Confirme a execução da importação;

         7. Observe a árvore de categorias atualizada com as categorias importadas;

## Editar uma categoria

         1. Na árvore, selecione a categoria qual se deseja editar;

         2. Acesse o menu de contexto da seção categorias (![](/download/attachments/1037980215/image-2026-2-26_16-23-12.png?version=1&modificationDate=1772133796237&api=v2)) e selecione a opção **Editar categoria**(![](/download/attachments/1037980215/image-2026-2-26_16-39-23.png?version=1&modificationDate=1772134766897&api=v2));

         3. No formulário de cadastro apresentado, edite os dados desejados;

         4. Confira os dados e confirme;

         5. Observe a árvore de categorias atualizada com a categoria editada.

## Remover uma categoria

A remoção de uma categoria implicará em sua exclusão, ou seja, ela deixará de existir assim como seus vínculos com características e produtos, grupos e grades. Caso queira apenas indisponibilizar uma categoria para uso bloqueando-a mas mantendo seus vínculos, utilize o recurso de inativar categoria.

Depois de confirmada, uma remoção não poderá ser desfeita. Já uma categoria inativada poderá ser reativada.

         1. Na árvore, selecione a categoria qual se deseja remover;

         2. Acesse o menu de contexto da seção categorias (![](/download/attachments/1037980215/image-2026-2-26_16-23-12.png?version=1&modificationDate=1772133796237&api=v2)) e selecione a opção **Remover categoria**(![](/download/attachments/1037980215/image-2026-2-26_16-41-30.png?version=1&modificationDate=1772134894223&api=v2));

         3. Confira os dados e confirme;

         4. Observe a árvore de categorias atualizada sem a categoria removida. 

            As características e produtos vinculados a uma categoria removida não serão excluídos, serão apenas desvinculados e, portanto, poderão ser vinculados em novas categorias. Para excluí-los, se deve realizar tal ação em seus respectivos cadastros.

## Inativar uma categoria

         1. Na árvore, selecione a categoria qual se deseja inativar;

         2. Acesse o menu de contexto da seção categorias (![](/download/attachments/1037980215/image-2026-2-26_16-23-12.png?version=1&modificationDate=1772133796237&api=v2)) e selecione a opção **Inativar categoria**(![](/download/attachments/1037980215/image-2026-2-26_16-50-5.png?version=1&modificationDate=1772135408840&api=v2));

         3. No formulário de cadastro apresentado, edite os dados desejados;

         4. Confira os dados e confirme;

         5. Observe a árvore de categorias atualizada sem a categoria inativada.

## Reativar uma categoria ou remover vínculo(s) de produto(s), grupo(s) e grade(s) de uma categoria inativada

Uma vez que as categorias inativadas, aquelas bloqueadas para uso, não aparecem na árvore de categorias, quando se fizer necessário retorná-las para uso ou conferir/editar os seus vínculos de produtos, isto deverá ser realizado através do painel de categorias inativas.

         1. Acesse o menu de contexto da seção categorias (![](/download/attachments/1037980215/image-2026-2-26_16-23-12.png?version=1&modificationDate=1772133796237&api=v2)) e selecione a opção **Categorias inativas**(![](/download/attachments/1037980215/image-2026-2-26_17-10-50.png?version=1&modificationDate=1772136654147&api=v2));

         2. Encontre a categoria desejada na relação de categorias inativadas e realize a ação desejada; 

           Para reativar a categoria e seus vínculos, clique na ação **Reativar** (![](/download/attachments/1037980215/image-2026-2-26_17-47-41.png?version=1&modificationDate=1772138864937&api=v2)).

           3. Para visualizar o(s) produto(s), grupo(s) e grade(s) vinculado(s) a ela e, eventualmente, remover este(s) vínculo(s), clique no numeral exibido na coluna **"Qtd. Vínculos"**; 

             Na tela de vínculos da categoria, para desvincular um produto, grupo ou grade localize na lista o produto, grupo ou grade desejado e clique na ação **Desvincular** (![](/download/attachments/1037980215/image-2026-2-26_17-44-32.png?version=1&modificationDate=1772138676577&api=v2));

         As categorias reativadas retornarão a árvore de categorias e estarão disponíveis para uso; 
         Os produtos desvinculados estarão disponíveis para vínculo em outras categorias. 

Documentação técnica: [DT Novo Cadastro de categorias de produtos em árvore](/pages/viewpage.action?pageId=1019325121)

# Painel Características da Categoria (seção direita superior da tela)

Nesta seção você terá acesso ao cadastro das características que estão vinculadas a categoria posicionada. Características vinculadas a uma categoria serão utilizadas para caracterizar os produtos vinculados a esta categoria e, portanto, passarão a serem exibidas no cadastro destes produtos para valoração. A partir disto será possível localizar e identificar produtos em função de sua categoria e valores de características.

Repositório de características

O cadastro de características funciona como um repositório, de modo que uma característica pode ser reutilizada e ser vinculada a diferentes categorias. Exemplo: a característica Voltagem pode ser vinculada às categorias Eletrodomésticos, Eletroportáteis e TV a Áudio. Este recurso permite a padronização dos cadastros e agiliza a atividade cadastral.

Mais detalhes: [Cadastro de características de produtos (ESTA012 - SIGAEST)](/pages/viewpage.action?pageId=1013640222)

Herança

Vale ressaltar que a relação de hierarquia entre as categorias gera o conceito de herança de características, ou seja, uma subcategoria (categoria filha, neta e etc.) recebe automaticamente o vínculo com as características vinculadas às suas categorias superiores (pai, avó e etc.). 

Raiz

É possível criar herança de características desde a raiz da árvore de categorias. Com este recurso as características vinculadas na raiz da árvore de categorias são herdadas por todas as categorias, em todos os níveis. Isto pode ser útil para agilizar e padronizar características verticais, presentes em todas as categorias, tais como Marca ou Fabricante.

As características vinculadas a categoria são exibidas em formato de lista com as seguintes informações em colunas:

         - Nome da característica: identifica a característica, conforme seu cadastro;

         - Herança: quando a característica é herdada pela categoria posicionada de uma categoria superior, exibe o nome da categoria onde o vínculo foi originado;

         - Tipo de dado: identifica o tipo de dado que estrutura os valores que podem ser atribuídos à característica pelos produtos da categoria, podendo ser lista de opções, consulta padrão, número ou livre;

         - Tipo de seleção: identifica se a característica admite apenas um valor ou se admitindo múltiplos valores;

Ainda nesta seção, acima da lista de características está disponível uma barra de pesquisa que permite uma busca dinâmica. A lista de características da categoria será sensibilizada pela pesquisa conforme a digitação realizada mostrando apenas os resultados correspondentes ao conteúdo pesquisado.

## Vincular características a uma categoria

         1. Na árvore da seção Categorias, selecione a categoria qual se deseja vincular características;

         2. Na seção Características da Categoria, clique em **Vincular característica** (![](/download/attachments/1037980215/image-2026-2-27_8-37-58.png?version=1&modificationDate=1772192283113&api=v2));

         3. Na tela de busca de características, utilize a barra de pesquisa ou navegue na lista para localizar as características desejadas. Caso a característica desejada ainda não exista, será possível criá-la através do botão **Criar característica** (detalhes deste fluxo no tópico abaixo);

         4. Marque as características desejadas e confirme;

         5. Observe a lista de características da categoria atualizada com a(s) característica(s) selecionadas;

## Criar uma nova característica vinculada a uma categoria

         1. Na árvore da seção Categorias, selecione a categoria qual se deseja vincular características;

         2. Na seção Características da Categoria, clique em **Vincular característica** (![](/download/attachments/1037980215/image-2026-2-27_8-37-58.png?version=1&modificationDate=1772192283113&api=v2));

         3. Na tela de busca de características, clique no botão **Criar característica**;

         4. No formulário de cadastro apresentado, preencha os campos se atentando aos campos que padronizam e estruturam o repositório de características. Algumas dicas de preenchimento: 

           Nome: utilize nomes curtos e que identifiquem facilmente as características (ex: cor, acabamento, aplicação, montadora compatível, potência, voltagem);

           5. Criar e incluir em todas as categorias: marque esta opção somente quando quiser que a característica criada seja vinculada à raiz da árvore de características, sendo assim herdada por todas as categorias;

           6. Tipo de característica: será usado para delimitar e validar os valores de entrada quando a característica for valorada para cada produto. Valores possíveis: 

             Lista de opções: cria uma lista de valores possíveis e pré-definidos. Estes valores deverão ser especificados na seção Lista de Opções;

             7. Consulta padrão: cria uma lista de valores possíveis e pré-definidos. Estes valores serão obtidos a partir de uma tabela do sistema (padrão ou customizada) que tenha uma consulta padrão, conforme consulta padrão de origem informada no campo Consulta Padrão;

             8. Livre: para características que admitem qualquer valor e será livre de validação;

             9. Número: para características que admitem somente valores numéricos, aceitando somente este tipo de dado;

           Tipo de seleção: será usado para indicar se permite a valoração múltipla da característica, cenário em que a característica pode ter mais de um valor. Ex: montadoras compatíveis para autopeças, aplicação (interna/externa) para pisos e revestimentos; 
           Seção: agrupador em função da finalidade da característica (apenas informativo). 

         Confira os dados e confirme; 
         Observe a lista de características da categoria atualizada com a característica selecionada; 

## Vincular características a raiz (todas as categorias)

         1. Na árvore da seção Categorias, posicione na raiz da árvore;

         2. Na seção Características da Categoria, clique em **Vincular característica** (![](/download/attachments/1037980215/image-2026-2-27_8-37-58.png?version=1&modificationDate=1772192283113&api=v2));

         3. Na tela de busca de características, utilize a barra de pesquisa ou navegue na lista para localizar as características desejadas. Caso a característica desejada ainda não exista, será possível criá-la através do botão **Criar característica** (detalhes deste fluxo no tópico abaixo);

         4. Marque as características desejadas e confirme;

         5. Observe a lista de características da categoria atualizada com a(s) característica(s) selecionadas;

## Criar uma nova característica vinculada a raiz (todas as categorias)

         1. Na árvore da seção Categorias, posicione na raiz da árvore;

         2. Na seção Características da Categoria, clique em **Vincular característica** (![](/download/attachments/1037980215/image-2026-2-27_8-37-58.png?version=1&modificationDate=1772192283113&api=v2));

         3. Na tela de busca de características, clique no botão **Criar característica**;

         4. No formulário de cadastro apresentado, preencha os campos se atentando aos campos que padronizam e estruturam o repositório de características. Algumas dicas de preenchimento: 

           Nome: utilize nomes curtos e que identifiquem facilmente as características (ex: cor, acabamento, aplicação, montadora compatível, potência, voltagem);

           5. Tipo de característica: será usado para delimitar e validar os valores de entrada quando a característica for valorada para cada produto. Valores possíveis: 

             Lista de opções: cria uma lista de valores possíveis e pré-definidos. Estes valores deverão ser especificados na seção Lista de Opções;

             6. Consulta padrão: cria uma lista de valores possíveis e pré-definidos. Estes valores serão obtidos a partir de uma tabela do sistema (padrão ou customizada) que tenha uma consulta padrão, conforme consulta padrão de origem informada no campo Consulta Padrão;

             7. Livre: para características que admitem qualquer valor e será livre de validação;

             8. Número: para características que admitem somente valores numéricos, aceitando somente este tipo de dado;

           Tipo de seleção: será usado para indicar se permite a valoração múltipla da característica, cenário em que a característica pode ter mais de um valor. Ex: montadoras compatíveis para autopeças, aplicação (interna/externa) para pisos e revestimentos; 
           Seção: agrupador em função da finalidade da característica (apenas informativo). 

         Confira os dados e confirme; 
         Observe a lista de características das categorias atualizada com a característica selecionada; 

## Editar uma característica

Como as características fazem parte de um repositório e são reutilizáveis, a alteração dos dados cadastrais afetará todas as categorias e produtos que utilizam a característica.

         1. Na seção Características da Categoria, localize a característica desejada e clique na ação **Editar característica** (![](/download/attachments/1037980215/image-2026-2-27_10-27-16.png?version=1&modificationDate=1772198840993&api=v2));

         2. Leia atentamente a mensagem explicativa de que a alteração de uma característica afetará todas as categorias e produtos que a utilizam. Para prosseguir, confirme;

         3. Confira os dados e confirme;

         4. Observe a lista de características da categoria atualizada com a característica alterada;

## Desvincular uma característica de uma categoria

O desvinculo de uma característica não implica em sua exclusão, ou seja, ela continuará disponível no repositório de características para uso.

A exclusão de uma característica só é possível através do [Cadastro de características de produtos (ESTA012 - SIGAEST)](/pages/viewpage.action?pageId=1013640222)

Ao desvincular uma característica da categoria todos os produtos vinculados a categoria perderão a característica e esta deixará de ser sugerida para produtos da categoria. Se a característica está vinculada à raiz da árvore, o desvinculo será refletido em todas as categorias. Esta ação não pode ser desfeita.

         1. Na seção Características da Categoria, localize a característica desejada e clique na ação **Desvincular característica** (![](/download/attachments/1037980215/image-2026-2-26_17-44-32.png?version=1&modificationDate=1772138676577&api=v2));

         2. Leia atentamente a mensagem explicativa de que o desvinculo afetará todos os produtos da categoria. Para prosseguir, confirme;

         3. Observe a lista de características da categoria atualizada sem a característica desvinculada;

## Boas Práticas

### ✅ Padronize nomes

Use termos claros e objetivos.

### ✅ Use Lista de opções / Consulta Padrão sempre que possível

Evita inconsistência e padroniza as entradas.

### ✅ Evite excesso de Texto Livre

Campos abertos dificultam busca e análise.

### ✅ Pense na busca futura

Pergunte-se: “Vou querer filtrar ou analisar isso depois?”

Documentação Técnica: [DT Novo Cadastro de características por categoria](/pages/viewpage.action?pageId=1019330734)

# Painel Produtos, Grupos e Grades (seção direita inferior da tela)

Nesta seção você terá acesso aos produtos, grupos de produtos e grades de produtos que estão vinculados a categoria posicionada. É a partir deste vínculo que o sistema identifica quais produtos pertencem a quais categorias e aplica as características da categoria aos produtos vinculados. É este vínculo que permitirá a localização e identificação dos produtos através dos conceitos de categorização e caracterização.

Grupos e grades

[Grupos de produtos](https://tdn.totvs.com/pages/viewpage.action?pageId=336397423) e [grades de produtos](https://tdn.totvs.com/pages/viewpage.action?pageId=351385995) são agrupadores de produtos que reúnem produtos de características similares facilitando a gestão de cadastros em massa. Neste contexto, ao vincular um grupo ou grade a uma categoria significa vincular todos os produtos do grupo ou da grade a categoria.

Os produtos, grupos e grades vinculados a categoria são exibidas em formato de lista com as seguintes informações em colunas:

         - Entidade: identifica o tipo da entidade vinculada, se produto, grupo ou grade;

         - Código: código de identificação da entidade vinculada;

         - Descrição: descrição que identifica a entidade vinculada;

Ainda nesta seção, acima da lista de produtos, grupos e grades, está disponível uma barra de pesquisa que permite uma busca dinâmica. A lista de produtos, grupos e grades da categoria será sensibilizada pela pesquisa conforme a digitação realizada mostrando apenas os resultados correspondentes ao conteúdo pesquisado.

## Vincular produtos, grupos ou grades a uma categoria

Para garantia da boa prática de manter os produtos vinculados a uma única categoria, na configuração padrão do sistema um produto pode ser vinculado a uma única categoria (deixando de ser exibido para vínculo quando já vinculado). Para mudar este comportamento e permitir o vínculo com múltiplas categorias, habilite o parâmetro [MV_LJCATPR](https://tdn.totvs.com/display/PROT/DT_MV_LJCATPR) (não recomendado).

         1. Na árvore da seção Categorias, selecione a categoria qual se deseja vincular características;

         2. Na seção Produtos, Grupos e Grades, clique em **Vincular entidade**(![](/download/attachments/1037980215/image-2026-2-27_8-37-58.png?version=1&modificationDate=1772192283113&api=v2));

         3. Na tela de busca de entidades, selecione qual das três entidades você deseja vincular: produtos, grupos de produtos ou grades de produtos;

         4. Utilize a barra de pesquisa ou navegue na lista para localizar o produto, grupo ou grade;

         5. Marque os registros desejados e confirme;

         6. Observe a lista de produtos, grupos e grades atualizada com o(s) registro(s) selecionados;

## Desvincular produto, grupo ou grade de uma categoria

O desvinculo de um produto, grupo ou grade não implica em sua exclusão, ou seja, eles continuam disponíveis para uso.

Ao desvincular um produto, grupo ou grade vinculados a categoria os produtos correspondentes perderão as características daquela categoria. Esta ação não pode ser desfeita.

         1. Na seção Produtos, Grupos e Grades, localize a entidade desejada e clique na ação **Desvincular**(![](/download/attachments/1037980215/image-2026-2-26_17-44-32.png?version=1&modificationDate=1772138676577&api=v2));

         2. Leia atentamente a mensagem explicativa de que o desvinculo afetará a entidade desvinculada. Para prosseguir, confirme;

         3. Observe a lista de produtos, grupos e grades da categoria atualizada sem a entidade desvinculada;

## Desvincular produto(s), grupo(s) e grade(s) de uma categoria inativada

Uma vez que as categorias inativadas, aquelas bloqueadas para uso, não aparecem na árvore de categorias, quando se fizer necessário retorná-las para uso ou conferir/editar os seus vínculos de produtos, isto deverá ser realizado através do painel de categorias inativas.

         1. Acesse o menu de contexto da seção categorias (![](/download/attachments/1037980215/image-2026-2-26_16-23-12.png?version=1&modificationDate=1772133796237&api=v2)) e selecione a opção **Categorias inativas**(![](/download/attachments/1037980215/image-2026-2-26_17-10-50.png?version=1&modificationDate=1772136654147&api=v2));

         2. Encontre a categoria desejada na relação de categorias inativadas e clique no numeral exibido na coluna **"Qtd. Vínculos"**;

         3. Na tela de vínculos da categoria, localize na lista o produto, grupo ou grade desejado e clique na ação **Desvincular** (![](/download/attachments/1037980215/image-2026-2-26_17-44-32.png?version=1&modificationDate=1772138676577&api=v2));

         4. Os produtos desvinculados estarão disponíveis para vínculo em outras categorias.

## Editar valores das características de um produto

Grupos e grades

A edição das características dos produtos vinculados a uma categoria através de grupos de produtos e grades de produtos só será possível através do formulário de cadastro do produto. Veja o tópico "Cadastro de Produtos (MATA010)" deste manual de uso.

         1. Na seção Produtos, Grupos e Grades, localize o produto desejado e clique na ação **Editar características do produto**(![](/download/attachments/1037980215/image-2026-2-27_10-27-16.png?version=1&modificationDate=1772198840993&api=v2));

         2. Na tela de edição das características do produto, preencha cada característica conforme opções apresentadas para cada característica;

         3. Revise os dados e confirme;

Documentação Técnica: [DT Novo Produtos, grupos e grades por categoria](/display/PROT/DT+Novo+Produtos%2C+grupos+e+grades+por+categoria) e [DT Nova Edição de Características de Produto](/pages/viewpage.action?pageId=1039877217)

# Codificação de produtos padronizada por categoria

Com a finalidade de padronizar e organizar a codificação dos produtos e permitir uma identificação visual quanto a categorização (a qual categoria pertence), está disponível recurso que habilita a criação e sugestão de código para os produtos em função da categoria a qual irão pertencer. Assim, para uso deste recurso, deve-se definir e configurar um padrão para formação dos códigos baseando-se na estrutura da árvore de categorias. Os códigos serão formados por um prefixo representando o caminho do produto na árvore de categorias que concatenará identificadores das categorias (chamados de código da categoria para produto) onde o produto será localizado e por um sufixo incrementado de forma sequencial por categoria representando um contador de produtos na categoria.

Exemplo:

**IMAGEM DA ARVORE NUMERADA**

Código da categoria para produto

Com o objetivo de facilitar a navegação e identificação das categorias na árvore, ao habilitar a padronização de códigos dos produtos a árvore de categorias passará a exibir o código identificador da categoria, antes de sua descrição. Este é o mesmo código que será usado para composição do prefixo nos códigos dos produtos.

Estes códigos são gerados de maneira automatizada pelo sistema, de forma sequencial, a medida em que as categorias são cadastradas, e por nó da árvore. Caso se queira utilizar um código diferente, é possível alterá-lo no formulário de edição da categoria.

A padronização dos código é aplicada apenas na criação de novos produtos**, **não havendo alteração de códigos para produtos já cadastrados.

## Habilitando e configurando a padronização de códigos de produtos

         1. Na barra lateral esquerda, selecione a opção **Códigos de produtos** (![](/download/attachments/1037980215/image-2026-3-3_19-2-26.png?version=1&modificationDate=1772575353277&api=v2)) para acessar o assistente de configuração;

         2. Na etapa XXX do assistente, leia atentamente ao exemplo exibido para entendimento do mecanismo de padronização de códigos de produtos;

         3. Na etapa YYY do assistente, habilite a utilização da padronização de códigos de produtos e configure os parâmetros de formação dos códigos: 

           Quantidade de níveis de categorias no prefixo:

           4. Tamanho de cada nível (caracteres):

           5. Tamanho do sequencial (caracteres):

         A medida em que se preenchem os parâmetros, observe um exemplo de formação de código abaixo da lista de parâmetros para melhor compreensão da parametrização realizada; 

Documentação Técnica: [Assistente de configuração de codificação padronizada por categoria](/pages/viewpage.action?pageId=1042925365), [DT Sugestão de código de produto padronizado](/pages/viewpage.action?pageId=1042925588) e [Tratamentos na categoria para código padronizado](/pages/viewpage.action?pageId=1042925703)

     - Caso queira incluir os campos de categoria e subcategoria no formulário de cadastro de produto indique o cadastro **ACV**no **MV_CADPROD**conforme: [PEST018 - MV_CADPROD - Parâmetro para informar quais cadastros complementares devem ser apresentados no cadastro de produto](/pages/viewpage.action?pageId=317003310)

     - Os campos do vínculo de Produtos x Características são exibidos e podem ser preenchidos normalmente, conforme   **DT Amarração Produto x Características**

## Dúvidas Frequentes (FAQ)

   Posso mudar a hierarquia da categoria?

   O que acontece ao trocar um produto de categoria?

   Posso excluir uma categoria com produto?

   Posso reutilizar características?

   Posso mudar o tipo de dado de uma característica?

   Posso mudar o tipo de dado de uma característica?


<!-- anchors: deack, deack-1110015891, Categorizaçãoecaracterizaçãodeprodutos-Visãoconceitualeaplicação, Categorizaçãoecaracterizaçãodeprodutos-Categorização:"localização"doprodutonocatálogoeagrupamentoparagestãoemmassa, Categorizaçãoecaracterizaçãodeprodutos-Caracterização:"especificação"doprodutoatravésdecaracterísticaspadronizadas, Categorizaçãoecaracterizaçãodeprodutos-AplicaçãoPráticaporSegmento, deack--1821969402, Categorizaçãoecaracterizaçãodeprodutos-Pré-requisitosdesistema, highlighter_802306, deack--1786332436, Tela, Tela-280942531, poui, poui--1004985920, Categorizaçãoecaracterizaçãodeprodutos-PainelCategorias(seçãoesquerdadatela), Categorizaçãoecaracterizaçãodeprodutos-Criarumanovacategoria, Categorizaçãoecaracterizaçãodeprodutos-Importarcategorias, Categorizaçãoecaracterizaçãodeprodutos-Editarumacategoria, Categorizaçãoecaracterizaçãodeprodutos-Removerumacategoria, Categorizaçãoecaracterizaçãodeprodutos-Inativarumacategoria, Categorizaçãoecaracterizaçãodeprodutos-Reativarumacategoriaouremovervínculo(s)deproduto(s),grupo(s)egrade(s)deumacategoriainativada, poui-1206857906, Categorizaçãoecaracterizaçãodeprodutos-PainelCaracterísticasdaCategoria(seçãodireitasuperiordatela), Categorizaçãoecaracterizaçãodeprodutos-Vincularcaracterísticasaumacategoria, Categorizaçãoecaracterizaçãodeprodutos-Criarumanovacaracterísticavinculadaaumacategoria, Categorizaçãoecaracterizaçãodeprodutos-Vincularcaracterísticasaraiz(todasascategorias), Categorizaçãoecaracterizaçãodeprodutos-Criarumanovacaracterísticavinculadaaraiz(todasascategorias), Categorizaçãoecaracterizaçãodeprodutos-Editarumacaracterística, Categorizaçãoecaracterizaçãodeprodutos-Desvincularumacaracterísticadeumacategoria, Categorizaçãoecaracterizaçãodeprodutos-BoasPráticas, Categorizaçãoecaracterizaçãodeprodutos-✅Padronizenomes, Categorizaçãoecaracterizaçãodeprodutos-✅UseListadeopções/ConsultaPadrãosemprequepossível, Categorizaçãoecaracterizaçãodeprodutos-✅EviteexcessodeTextoLivre, Categorizaçãoecaracterizaçãodeprodutos-✅Pensenabuscafutura, poui-1304708191, Categorizaçãoecaracterizaçãodeprodutos-PainelProdutos,GruposeGrades(seçãodireitainferiordatela), Categorizaçãoecaracterizaçãodeprodutos-Vincularprodutos,gruposougradesaumacategoria, Categorizaçãoecaracterizaçãodeprodutos-Desvincularproduto,grupoougradedeumacategoria, Categorizaçãoecaracterizaçãodeprodutos-Desvincularproduto(s),grupo(s)egrade(s)deumacategoriainativada, Categorizaçãoecaracterizaçãodeprodutos-Editarvaloresdascaracterísticasdeumproduto, poui--1092244836, Categorizaçãoecaracterizaçãodeprodutos-Codificaçãodeprodutospadronizadaporcategoria, Categorizaçãoecaracterizaçãodeprodutos-Habilitandoeconfigurandoapadronizaçãodecódigosdeprodutos, Tela-1290273781, deack-69366, Categorizaçãoecaracterizaçãodeprodutos-DúvidasFrequentes(FAQ), expander-709894410, expander-control-709894410, expander-1168765481, expander-control-1168765481, expander-908595290, expander-control-908595290, expander-1013045632, expander-control-1013045632, expander-1189567346, expander-control-1189567346, expander-388985560, expander-control-388985560 -->
