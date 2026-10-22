---
title: "Integrando widget com formulários/datasets do Fluig Plataforma"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=185739337"
scraped_at: "2026-03-09T04:13:42.215Z"
depth: 2
anchors: 7
child_links: 65
---

# Integrando widget com formulários/datasets do Fluig Plataforma

# Índice

# Objetivo

O objetivo deste guia é demonstrar a integração de *widgets* com formulários/datasets do TOTVS Fluig Plataforma.

Exemplo completo

Deseja um exemplo completo de consumo de dados de formulários/datasets no Fluig Plataforma? Faça o *download* dos códigos-fonte do Kit Intranet no [repositório Git](https://git.fluig.com/projects/SAMPLES/repos/kit-intranet/browse).

# Armazenamento

Frequentemente é necessário armazenar dados além daqueles que a plataforma Fluig já guarda nativamente. Pensando nisso, o TOTVS Fluig Plataforma disponibiliza a [personalização de formulários](https://tdn.totvs.com/pages/viewpage.action?pageId=75270483#DesenvolvimentodeFormul%C3%A1rios-Customiza%C3%A7%C3%A3odeFormul%C3%A1rios), uma forma de guardar seus dados de forma simples e ágil:

Esse é um recurso valioso da plataforma Fluig e preparado para realizar soluções completas e complexas. Entretanto, pode ser usado de forma bem fácil para atender as demandas mais simples. Utilizando *datasets*, o processo de armazenamentos de dados torna-se rápido.

Imagine que você deseja guardar o nome, o dia e o mês do aniversário dos colaboradores de sua empresa. Considere os passos abaixo:

- Siga os [passos para criar um formulário](https://tdn.totvs.com/pages/viewpage.action?pageId=75270483#samples-1);

- No [arquivo HTML do formulário](https://tdn.totvs.com/pages/viewpage.action?pageId=75270483#samples-4), inclua três campos. Para mais detalhes sobre a forma de apresentação, veja a sessão [controles visuais](https://tdn.totvs.com/pages/viewpage.action?pageId=75270483#DesenvolvimentodeFormulários-Controlesvisuais):

[?](#)

| `````...````````...````````...````````...``` |
| --- |

Feito isso, basta seguir os [passos de exportação de um artefato Fluig para um servidor Fluig](https://tdn.totvs.com/pages/viewpage.action?pageId=128681226#samples-1) e seu formulário já estará pronto para armazenamento. Uma dica é escolher a pasta padrão "Formulários Fluig" para armazenar os formulários no momento da exportação para a plataforma.

# Utilização

Com seu formulário pronto e preenchido com os dados desejados, basta buscar a identificação do seu formulário no início do arquivo JavaScript.

Dúvidas para criar o *widget*? Siga o [guia](/pages/viewpage.action?pageId=185735401).

De posse da identidade do registro, é simples buscar os dados dele. Em seu [arquivo .js](https://tdn.totvs.com/pages/viewpage.action?pageId=185735923#Meucódigonãoestáfuncionando.Eagora?-MeuarquivoJavascriptnãocarregou) execute uma chamada ao [DatasetFactory](https://tdn.totvs.com/display/fluig/Desenvolvimento+de+Datasets#DesenvolvimentodeDatasets-DatasetFactory). A seguir é apresentado um exemplo simples:

[?](#)

| `var` `datasetReturned = DatasetFactory.getDataset(``"kit_news"``,``null``,``null``,``null``);` |
| --- |

Onde:

| Elemento | Descrição |
| --- | --- |
| Elemento | Descrição |
| datasetReturned | Objeto contendo os registros do formulário retornados. |
| ```
"kit_news"
``` | Código escolhido para o formulário/dataset (definido aqui). |

Datasets Internos

A mesma técnica que é utilizada para consumir datasets de formulários, permite consultar também [datasets internos do Fluig](https://tdn.totvs.com/x/SgKeCQ). Basta substituir o código do dataset e seus respectivos campos.

O consumo desses registros pode ser efetuado da seguinte forma:

[?](#)

| `if``(datasetReturned !=``null` `&& datasetReturned.values !=``null` `&& datasetReturned.values.length > 0){````var` `records = datasetReturned.values;````for` `(``var` `index``in` `records) {````var` `record = records[index];````// ... restante do código omitido````}``}` |
| --- |

Onde:

| Elemento | Descrição |
| --- | --- |
| Elemento | Descrição |
| ```
datasetReturned
``` | Objeto contendo os registros do formulário retornados. |
| ```
records
``` | Um array de objetos (Object[ ]) contendo os registros. |
| ```
index
``` | Índice do registro corrente conforme o laço (for) avança pelo array. |
| ```
record
``` | É o registro, ou seja, o objeto contendo as propriedades de um registro de formulário.Considerando o exemplo do formulário de notícias, podemos assumir para esse caso que as propriedades desse objeto serão as seguintes:record.newTitlerecord.newDescriptionrecord.newsSourceURL |

Veja o exemplo em nosso repositório [aqui](https://git.fluig.com/projects/SAMPLES/repos/style-guide/browse).


<!-- anchors: Integrandowidgetcomformulários/datasetsdoFluigPlataforma-Índice, Integrandowidgetcomformulários/datasetsdoFluigPlataforma-Objetivo, Integrandowidgetcomformulários/datasetsdoFluigPlataforma-Armazenamento, highlighter_943944, Integrandowidgetcomformulários/datasetsdoFluigPlataforma-Utilização, highlighter_551273, highlighter_633635 -->
