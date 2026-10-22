---
title: "Visualização de Datasets"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=239021220"
scraped_at: "2026-03-09T03:05:41.418Z"
depth: 1
anchors: 12
child_links: 56
---

# Visualização de Datasets

# Índice

# Objetivo

Este guia tem o objetivo de apresentar uma visão geral da consulta e desenvolvimento de datasets com o fluig Studio. 

# Pré-requisitos

Para que se tenha uma compreensão completa destas informações, alguns conhecimentos são considerados pré-requisitos, entre eles:

- Visão geral sobre o fluig e sobre o [Desenvolvimento de Datasets](/display/fluig/Desenvolvimento+de+Datasets).

Atenção

Para que um usuário que não é administrador da empresa possa criar e visualizar datasets via fluig Studio é necessário que ele possua a permissão "Configurar Datasets". Esta permissão pode ser concedida pelo administrador através do item [Permissões](https://tdn.totvs.com/pages/viewpage.action?pageId=234455792) disponível no agrupador "Pessoas" do Painel de Controle do TOTVS Fluig Plataforma.

# Consultando Datasets

Pelo fluig Studio, através da visão Visualização de Dataset, é possível consultar os Datasets disponíveis bem como visualizar o seu conteúdo. Com isto é possível verificar quais os campos disponíveis, tanto para filtros quanto para acesso, bem como fazer testes sobre Datasets avançados.

Os passos para consultar os dados do dataset são apresentados abaixo:

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)

Na perspectiva Fluig, acessa a aba **Visualização de Dataset**, e clique em **Consultar Dataset**.

![](/download/attachments/239021220/Screenshot%2016_06%20001.png?version=4&modificationDate=1466095819000&api=v2)

Na janela aberta, selecione o servidor fluig e escolha o dataset que deseja consultar. O usuário também pode escolher em quantos registros a busca será limitada.

![](/download/attachments/239021220/Screenshot%2016_06%20003.png?version=2&modificationDate=1466095866000&api=v2)

Após clicar em finalizar aguarde o procedimento de consulta ser concluído. A tabela será preenchida com as colunas e os respectivos registros salvos no dataset.

Neste exemplo, é possível visualizar os campos disponíveis (conta, título, natureza e tipo) e os registros retornados pelo Dataset. Note que estas informações são essenciais para o uso dos Datasets, principalmente quando há necessidade de restringir os dados que queremos acessar.

![](/download/attachments/239021220/Dataset1.PNG?version=1&modificationDate=1536608203000&api=v2)

Veja a seguir o vídeo *how to* que demonstra a consulta de dados de um Dataset interno pelo fluig Studio.

****

# Desenvolvimento de Datasets sobre a Plataforma

Datasets desenvolvidos sobre a plataforma são criados utilizando a linguagem JavaScript, sendo possível criar o dataset a partir de valores fixos ou realizar chamadas a outros datasets e serviços externos.

- [Passo 1](#)
- [Passo 2](#)

Para desenvolver um dataset, selecione um projeto fluig, clique com o botão direito do *mouse* e escolha a opção **New** → **Dataset Customizado**.

![](/download/attachments/239021220/Screenshot%2016_06%20005.png?version=1&modificationDate=1466096016000&api=v2)

Preencha dados como o nome do dataset e descrição e clique em **Finish**.

![](/download/attachments/239021220/Screenshot%2016_06%20004.png?version=1&modificationDate=1466095902000&api=v2)

Um arquivo com extensão .js será criado e aberto para edição imediatamente. Neste arquivo deverá ser desenvolvido o dataset.

Veja a seguir o vídeo How To que demonstra a criação de um dataset avançado com dados fixos.

Vídeos How To

Veja mais vídeos how to sobre datasets em: [Datasets - Consulta, criação e registros](/pages/viewpage.action?pageId=270925461).


<!-- anchors: VisualizaçãodeDatasets-Índice, VisualizaçãodeDatasets-Objetivo, VisualizaçãodeDatasets-Pré-requisitos, VisualizaçãodeDatasets-ConsultandoDatasets, samples, samples-1, samples-2, samples-3, VisualizaçãodeDatasets-DesenvolvimentodeDatasetssobreaPlataforma, samples, samples-1, samples-2 -->
