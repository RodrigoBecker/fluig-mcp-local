---
title: "Processo de cadastro de centro de custo no RM"
url: "https://tdn.totvs.com/display/public/fluig/Processo+de+cadastro+de+centro+de+custo+no+RM"
scraped_at: "2026-03-09T04:00:07.206Z"
depth: 2
anchors: 5
child_links: 52
---

# Processo de cadastro de centro de custo no RM

# Índice

# Processo de cadastro de centro de custo no RM

---

Nesse exemplo, vamos utilizar um processo de cadastro de centro de custo no RM que possui um formulário e é composto pelas seguintes atividades: Início → Cadastrar Centro de Custo → Fim ou Cancelar.

Esse processo é iniciado para incluir um centro de custo na base de dados do RM. O formulário do processo tem 3 campos de texto: CODCOLIGADA, CODCCUSTO e NOME.

Para o processo foi criado um *script* de evento *Workflow* do tipo *beforeTaskSave* onde está a codificação para salvar o centro de custo.

## Componentes utilizados

---

Vamos exemplificar o uso dos seguintes componentes que são utilizados nesse processo:

- formulário que permite a inclusão de um centro de custo no RM.

## Diagrama

---

Esse é o diagrama do processo que estamos utilizando como exemplo:

![](/download/attachments/624110229/cadastro_centro_custo.png?version=3&modificationDate=1625224191590&api=v2)

## Desenvolvimento

---

Os desenvolvimentos que foram necessários para criar esse processo estão disponíveis para visualização e *download*. Desta forma, você pode baixá-los, ajustar ao seu negócio ou as suas necessidades e utilizá-los nos processos do seu dia a dia!

****

**Clique aqui** para ver e baixar o código fonte dos desenvolvimentos desse processo.

Dica!

O arquivo **README.md** – existente no repositório – contém informações técnicas mais detalhadas. Ao longo dos próprios códigos fonte também existem várias explicações para auxiliar no entendimento e na utilização desse exemplo.


<!-- anchors: ProcessodecadastrodecentrodecustonoRM-Índice, ProcessodecadastrodecentrodecustonoRM-ProcessodecadastrodecentrodecustonoRM, ProcessodecadastrodecentrodecustonoRM-Componentesutilizados, ProcessodecadastrodecentrodecustonoRM-Diagrama, ProcessodecadastrodecentrodecustonoRM-Desenvolvimento -->
