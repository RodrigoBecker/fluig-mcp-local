---
title: "DES - Na consulta de dataset offline pelo mobile, os valores retornam 'null' ou 'undefined'"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=315906495"
scraped_at: "2026-03-09T03:31:07.519Z"
depth: 2
anchors: 7
child_links: 43
---

# DES - Na consulta de dataset offline pelo mobile, os valores retornam 'null' ou 'undefined'

# Índice

# Plataforma

**Produto**: TOTVS Fluig Plataforma

# Ocorrência

Percebemos que, se na declaração dos campos de um dataset, a grafia do nome dos campos está em minúsculo, o dataset é consumido normalmente na web ou no mobile online. Porém, quando consumindo no mobile jornalizado (*offline*) temos que usar o nome dos campos em maiúsculo para que a consulta não retorne 'null'.

Neste cenário, o que podemos fazer para sempre retornar os valores corretos?

# Solução

Esse comportamento ocorre em virtude da criação das tabelas no banco de dados, que por padrão utiliza as colunas com nomes todo em maiúsculo. Em alguns pontos do desenvolvimento sobre a plataforma é possível que as colunas sejam acessadas somente usando a definição do nome da mesma no banco de dados, ou seja, todo em maiúsculo.

Para evitar esta situação é sugerido que a definição das colunas **seja sempre** **em maiúsculo**, assim indiferente de onde realizemos a consulta, estará sempre respeitando o “padrão“.

Veja os exemplos abaixo:

Note que nesta forma de definição, os campos estão em **minúsculo**portanto, **não recomendada**:

[?](#)

| `function` `defineStructure() {````addColumn(``"cod_cliente"``);````addColumn(``"nom_cliente"``);``` ```setKey([``"cod_cliente"``]);``}` |
| --- |

**Recomendamos** a definição das colunas de forma padronizada, com caracteres em **MAIÚSCULO,**veja:

[?](#)

| `function` `defineStructure() {````addColumn(``"COD_CLIENTE"``);````addColumn(``"NOM_CLIENTE"``);``` ```setKey([``"COD_CLIENTE"` `]);``}` |
| --- |

**Indiferente da funcionalidade usada, o acesso a coluna será sempre da mesma forma e, por esse motivo, é importante que a definição e a consulta estejam padronizadas.**

Confira abaixo o exemplo de **acesso a coluna via desenvolvimento sobre a plataforma**, que funcionará tanto na web quanto no mobile, online e offline:

[?](#)

| `var` `dataset = DatasetFactory.getDataset(``'dataset'``,``new` `Array(),``new` `Array(),``new` `Array());``var` `dados = dataset.values;``for` `(``var` `i``in` `dados ) {````var` `dado= dados[i];````var` `codigo = dado[``"COD_CLIENTE"``];````var` `nome = dado[``"NOM_CLIENTE"``];``}` |
| --- |


<!-- anchors: DESNaconsultadedatasetofflinepelomobile,osvaloresretornam'null'ou'undefined'-Índice, DESNaconsultadedatasetofflinepelomobile,osvaloresretornam'null'ou'undefined'-Plataforma, DESNaconsultadedatasetofflinepelomobile,osvaloresretornam'null'ou'undefined'-Ocorrência, DESNaconsultadedatasetofflinepelomobile,osvaloresretornam'null'ou'undefined'-Solução, highlighter_428592, highlighter_589526, highlighter_196510 -->
