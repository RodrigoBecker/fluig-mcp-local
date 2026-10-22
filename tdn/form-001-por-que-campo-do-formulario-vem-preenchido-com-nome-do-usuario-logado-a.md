---
title: "FORM 001 - Por que campo do formulário vem preenchido com nome do usuário logado, ao invés da matrícula?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=236591623"
scraped_at: "2026-03-09T04:48:00.012Z"
depth: 3
anchors: 5
child_links: 40
---

# FORM 001 - Por que campo do formulário vem preenchido com nome do usuário logado, ao invés da matrícula?

# Índice

# Plataforma

**Produto:** fluig

**Versão:** 1.6.1 e anteriores

# Ocorrência

Criamos um formulário no editor web do fluig que foi configurado para ser inicializado com o usuário logado, conforme a imagem abaixo, mas quando o formulário é aberto, o campo em questão é preenchido com a matrícula do usuário e não o nome.

![](/download/attachments/236591623/image2016-5-11%2010%3A26%3A2.png?version=1&modificationDate=1462970059000&api=v2)

# Solução

A regra de formulário Usuário Logado retornará apenas matrícula do usuário logado; atualmente o editor de processos web do fluig não possuí uma regra para retornar o nome do usuário logado.

Contudo, o fluig permite que seja desenvolvida uma rotina para preencher o nome do usuário em um campo do formulário. Uma maneira de fazer isto é utilizar o evento de formulário [displayFields](https://tdn.totvs.com/pages/viewpage.action?pageId=75270483#DesenvolvimentodeFormulários-DisplayFields).

Primeiramente execute o método **getValue("WKUser")** para saber o código do usuário logado. Em seguida, consulte o dataset **colleague** passando como parâmetro o código obtido no passo anterior. No retorno do dataset, você deverá pegar apenas o valor do campo **colleagueName**.

Logo abaixo segue um simples exemplo ilustrando os passos descritos acima:

[?](#)

| 123456 | `/* Carrega o nome do usuario logado */``var` `usuarioId = getValue(``"WKUser"``);``var` `const1 = DatasetFactory.createConstraint(``"colleaguePK.colleagueId"``,usuarioId , usuarioId, ConstraintType.MUST);``var` `datasetAttachment = DatasetFactory.getDataset(``"colleague"``,``null``, [const1],``null``);``var` `usuario = datasetAttachment.getValue(0,``"colleagueName"``);``form.setValue(``"nome_usuario_logado"``, usuario);` |
| --- | --- |

O trecho de código acima representa apenas uma das maneiras de obter o resultado desejado, por se tratar de um desenvolvimento sobre a plataforma, você poderá programar da maneira que achar melhor.

Para mais informações, disponibilizamos uma documentação completa para [desenvolvimento de formulários](https://tdn.totvs.com/x/U4l8B)


<!-- anchors: FORM001Porquecampodoformuláriovempreenchidocomnomedousuáriologado,aoinvésdamatrícula?-Índice, FORM001Porquecampodoformuláriovempreenchidocomnomedousuáriologado,aoinvésdamatrícula?-Plataforma, FORM001Porquecampodoformuláriovempreenchidocomnomedousuáriologado,aoinvésdamatrícula?-Ocorrência, FORM001Porquecampodoformuláriovempreenchidocomnomedousuáriologado,aoinvésdamatrícula?-Solução, highlighter_435478 -->
