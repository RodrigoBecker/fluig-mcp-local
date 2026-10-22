---
title: "Plataforma ❙ Busca"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=233762865"
scraped_at: "2026-03-09T03:28:14.729Z"
depth: 2
anchors: 7
child_links: 47
---

# Plataforma ❙ Busca

# Falando de busca...

---

A busca permite pesquisar objetos sociais, documentos, pastas, formulários, registros de formulários, pessoas influentes em determinados assuntos – Influenciadores –, artigos, publicações e pessoas a partir de qualquer página da plataforma.

Ela permite que pesquisas possam ser personalizadas e proporcionar critérios de busca definidos pelo usuário, permitindo restringir os locais, tipos, tempo sobre os recursos que estão sendo pesquisados.

Precisa de ajuda?

Acesse a Central de ajuda da plataforma clicando no ícone **Ajuda** ![](/download/attachments/233762865/question-off.png?version=2&modificationDate=1751393426213&api=v2), localizado no lado superior direito do cabeçalho, para obter informações específicas sobre este recurso, além de*links* com documentações relacionadas. [Saiba mais](https://tdn.totvs.com/x/ZMhSDg).

- [Campo de busca](#)
- [Resultado da busca](#)

![](/download/attachments/233762865/Campo_Busca.PNG.jpg?version=1&modificationDate=1751390979343&api=v2)

![](/download/attachments/233762865/Tela_Busca.jpg?version=1&modificationDate=1751390996110&api=v2)

## Realizar busca

---

**01.** No menu principal, clique em ![](/download/attachments/233762865/%C3%ADcone-busca.png?version=1&modificationDate=1751390833340&api=v2) **Buscar**.

**02**. Informe o termo que deseja buscar.

Uma lista de sugestões será exibida. É possível selecionar uma palavra da lista ou digitar uma palavra qualquer.

Por padrão, o indexador da plataforma (Solr) faz a indexação da busca por até 15 caracteres. Essa característica foi definida para não ocupar muito espaço em disco no momento da indexação.

Dica!

Utilize [esses recursos especiais](#Plataforma❙Busca-Consultarcaracterescoringa)para uma busca mais precisa.

**03**. No teclado, pressione **ENTER**.

A tela de resultado da busca será exibida com a aba **Tudo** selecionada. ![](/plugins/servlet/confluence/placeholder/unknown-macro?name=tooltip&locale=en_US&version=2)****

## Filtrar resultados

---

**01.** Acesse o resultado da busca conforme o item [Realizar busca](#Plataforma❙Busca-Realizarbusca).

**02.** No resultado apresentado, clique em ![](/download/attachments/233762865/filtrar.png?version=1&modificationDate=1751466961227&api=v2) **Filtrar**.

A área de filtros será expandida e serão exibidos os filtros disponíveis.

**03.** Selecione o filtro a ser considerado.

Os filtros disponíveis são:

- **Buscar no período**: é possível escolher os seguintes filtros:**no último dia**;
- **na última semana**;
- **no último mês**;
- **no último ano**;
- **informar período**: permite especificar um **período** informando a data de início e fim da pesquisa.

Para cada filtro selecionado, uma etiqueta com o filtro selecionado é exibida acima do filtro, facilitando a visão do que está sendo filtrado. Esta etiqueta possui um botão para remover o filtro, refazendo a busca novamente sem filtro.

**04.**  Se o filtro escolhido foi Informar período, depois de definir as datas inicial e final, clique em **Filtrar**.

Toda busca apresenta o resultado ordenado por relevância. É possível alterar a ordenação do resultado para mais recente ou mais antigo. Para isso, acione a caixa de seleção no canto superior direito da tela de resultado e selecione uma opção.

## Ordenar resultados da busca

---

**01.** Acesse o resultado da busca conforme o item [Realizar busca](#Plataforma❙Busca-Realizarbusca).

**02**. No resultado apresentado, selecione a ordenação desejada na caixa de seleção localizada no lado superior direito.

As opções de ordenação disponíveis são:

- **Ordenar por relevância**: determina que os documentos favoritos serão apresentados primeiro;

- **Ordenar por mais recente**: determina que os documentos serão apresentados pela data de criação de forma decrescente, ou seja, criados mais recentemente primeiro; 

- **Ordenar por mais antigo**: determina que os documentos serão apresentados pela data de criação de forma crescente, ou seja, mais antigos primeiro.

## Adicionar aos favoritos

---

**01.** Acesse o resultado da busca conforme o item [Realizar busca](#Plataforma❙Busca-Realizarbusca).

**02.** No resultado apresentado, clique sobre o ícone **Favorito** ![](/download/attachments/233762865/favorito.png?version=1&modificationDate=1751392407377&api=v2), localizado ao lado direito da pasta ou documento desejado. ![](/plugins/servlet/confluence/placeholder/unknown-macro?name=tooltip&locale=en_US&version=2)

**03.** Uma janela de confirmação será exibida demonstrando que a ação foi realizada com sucesso.

Para mais detalhes sobre esse recurso, acesse a documentação [Favoritos](/pages/viewpage.action?pageId=233762785).

## Consultar caracteres curinga

---

Na tabela abaixo são listados os caracteres curingas e termos especiais que podem ser utilizados na busca do TOTVS Fluig Plataforma.

| ARGUMENTO | EFEITO | EXEMPLO |
| --- | --- | --- |
| ARGUMENTO | EFEITO | EXEMPLO |
| #Hashtags | Permite efetuar a busca por hashtags que contenham a tag digitada.  | #benefícios Retorna publicações com a tag benefícios  |
| ? | Permite efetuar a busca por palavras que tenham qualquer caractere no lugar do sinal de interrogação.Não pode ser utilizado no começo de um termo. | li?ãoRetorna Limão e Lição. |
| * | Permite efetuar busca com partes de uma palavra.Não pode ser utilizado no começo de um termo. | li*ãoRetorna limão, lição e ligação. |
| ~ Proximidade | Permite efetuar a busca de documentos que tenham termos próximos. | “Juros BACEN”~5Retorna todos os documentos onde os termos Juros e BACEN estejam até 5 palavras distantes um do outro. |
| ^ Prioridade | Permite definir prioridade a um termo na busca. | Juros ^2 BACENRetorna primeiro os documentos que tenham mais referência ao termo Juros. |
| OR | Permite efetuar a busca nos documentos que tenham algum dos termos especificados. | Juros OR BACENRetorna os documentos que tenham a palavra Juros ou BACEN. |
| AND | Permite efetuar a busca nos documentos que tenham todos os termos especificados. | Juros AND BACENRetorna os documentos que tenham a palavra Juros e BACEN. |
| + | Torna um termo requerido na busca. | Juros + BACENGarante que todos os documentos retornados tenham o termo BACEN. |
| NOT | Exclui um termo da consulta. | Juros NOT BACENRetorna os documentos que tenham o termo Juros mas não tenham o termo BACEN. |
| - | Exclui um termo da consulta. | Juros -BACENRetorna os documentos que tenham o termo Juros mas não tenham o termo BACEN. |
| () Agrupamento | Permite agrupar argumentos. | (Juros + BACEN) OR COPONRetorna os documentos que tenham o termo Juros (opcional) e BACEN ou que tenham o termo COPON. |
| “” Frase Exata | Permite efetuar a busca nos documentos que contenham a frase exata. | “Juros definidos pelo Banco Central”Retorna somente os documentos que tenham essa frase exata e nessa sequência. |

Fique atento!

Esta documentação é válida a partir da atualização **Voyager (2.0)**. Se você utiliza uma atualização anterior, ela pode conter informações diferentes das quais você vê na sua plataforma.


<!-- anchors: Plataforma❙Busca-Falandodebusca..., Busca, Plataforma❙Busca-Realizarbusca, Plataforma❙Busca-Filtrarresultados, Plataforma❙Busca-Ordenarresultadosdabusca, Plataforma❙Busca-Adicionaraosfavoritos, Plataforma❙Busca-Consultarcaracterescuringa -->
