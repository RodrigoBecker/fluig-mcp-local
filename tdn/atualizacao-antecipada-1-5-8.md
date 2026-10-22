---
title: "Atualização antecipada 1.5.8"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=236604668"
scraped_at: "2026-03-09T04:23:53.023Z"
depth: 3
anchors: 5
child_links: 39
---

# Atualização antecipada 1.5.8

Este documento contém um breve descritivo acerca das implementações e correções efetuadas.

- **Implementações**: são apresentadas todas as implementações e evoluções da plataforma contidas na atualização **1.5.8**.
- **Correções:** são apresentados todos os ajustes contidos na atualização **1.5.8**. Tais ajustes compreendem aprimoramento de performance e melhorias em processos já existentes.

 Informações detalhadas podem ser obtidas no **Help Online **e aqui mesmo no **http://dev.fluig.com/**.

**Os chamados solucionados em atualizações antecipadas são acumulativos, ou seja, todas as alterações realizadas nas liberações anteriores estarão disponíveis na última atualização.**

****

# Índice

# 

O que é? Como atualizar?

Para entender o processo de liberação de uma atualização antecipada e o procedimento para atualizar, acesse [Atualização fluig - Atualização antecipada (EP).](/pages/viewpage.action?pageId=73078235#Atualizaçãodaplataforma-Atualiza%C3%A7%C3%A3oantecipada(EP))

**

## Atualização antecipada #1

**Sincronização de dataset**

**Atualização oficial:** fluig 1.5.9

Em um dataset, quando a coluna da ordenação tinha em seu nome o caractere sublinhado ( _ ), estava ocorrendo um erro na ordenação quando utilizado o dataset em um zoom.

**Inicialização de solicitação com atividade Timer como inicial**

**Atualização oficial:** fluig 1.5.9

A situação em que não era permitido iniciar uma nova solicitação quando a atividade inicial fosse do tipo Timer foi solucionada.

**Sincronizar datasets simultaneamente**

**Atualização oficial:** fluig 1.5.9

Correção para o problema que impedia a sincronização de qualquer dataset customizado enquanto outro dataset estivesse sendo sincronizado.

**Correção em formulários Pai X Filho**

**Atualização oficial:** fluig 1.5.9

Na utilização do método setCardValues, preencher os valores corretamente para formulários com diversos filhos.

****

**Movimentação duplicando registros de formulários**

**Atualização oficial:** fluig 1.5.9

Ao movimentar as solicitações, estavam sendo duplicados os registros de formulários.

**Correção de updates SQLServer **

**Atualização oficial:** fluig 1.5.9

Ao atualizar o fluig a partir de instalações antigas com base SQLServer, ocorria um problema no campo DATA_VALUE do WCM_APPLICATIONDATA.

## Atualização antecipada #2

**Atividade Timer**

**Atualização oficial:** fluig 1.5.9

Criada nova opção na tela de timer, que permite configurar este tipo de atividade por dia da semana (ex.: toda segunda-feira; toda terça-feira e quarta-feira; todo domingo; e assim por diante). É necessária a atulização do servidor fluig e também do plugin ([http://update.fluig.com/](https://update.fluig.com/14131)[1581](https://update.fluig.com/1581))

**Descrição da disciplina**

**Atualização oficial:** fluig 1.5.9

Agora as informações adicionais sobre Disciplinas serão exibidas também para os alunos.

**Relatórios BIRT**

**Atualização oficial:** fluig 1.5.9

Tratamento para erro de ClassNotFound ao utilizar alguns relatórios.

**Cadastro de disciplinas via RM**

**Atualização oficial:** fluig 1.5.9

Tratamento para melhorar performance no cadastro de disciplinas via RM.

**Cancelar questões**

**Atualização oficial:** fluig 1.5.9

Correção da rotina de execução de estatísticas e bloqueio do botão para que não seja executado mais de uma vez o cancelamento de questão.

## Atualização antecipada #3

**Permissão em apoio e denuncia de comentários**

**Atualização oficial:** fluig 1.5.9

Corrigida a situação em que ao carregar mais comentários não eram apresentadas as opções de apoio e denuncia conforme a permissão da publicação.

**Desempenho na central de tarefas do LMS**

**Atualização oficial:** fluig 1.5.9

Corrigida a situação em que ao carregar várias tarefas de aprendizado a central de tarefas não abria

**beforeStateEntry **

**Atualização oficial:** fluig 1.5.9

Alteração para que o evento beforeStateEntry seja executado em uma atividade final após passar por uma atividade automática

**Dataset**

**Atualização oficial:** fluig 1.5.9

Corrigido o problema que impedia o retorno correto de dados ao realizar uma busca de registros usando campos do tipo Number de um dataset que teve seus dados sincronizados em bancos do fluig.

**Perda de dataset ao exportar Projeto**

**Atualização oficial:** fluig 1.5.9

Alteração para que a exportação de formulários no studio não perca configuração de datasets.

**Complementos após assumir atividade em pool**

**Atualização oficial:** fluig 1.5.9

Os complementos de uma solicitação estavam sendo exibidos de forma incompleta após um usuário assumir uma atividade que estava em pool.

**Turmas**

**Atualização oficial:** fluig 1.5.9

Validação das datas de início e fim da matrícula e início e fim da turma ao cadastrar uma turma para uma disciplina de aprendizado.

**Execução de serviço**

**Atualização oficial:** fluig 1.5.9

Correção na execução de serviços do tipo Progress em um script de atividade condicional.

**Constraints vazias no método onMobileSync**

**Atualização oficial:** fluig 1.5.10

Método onMobileSync do dataset, agora aceita arrays vazios para constraints.

**Transferência de solicitações**

**Atualização oficial:** fluig 1.5.10

Correção na transferência de solicitações quando utilizado mecânismo de atribuição por campo de formulário e tendo como usuário destino um Pool.

**Degradação de Performance na navegação de documentos**

**Atualização oficial:** fluig 1.5.10

Tratamento para que os dados referentes ao messaging sejam chamados uma única vez na tela de navegação de documentos.


<!-- anchors: Atualizaçãoantecipada1.5.8-Índice, Atualizaçãoantecipada1.5.8-2, Atualizaçãoantecipada1.5.8-Atualizaçãoantecipada#1, Atualizaçãoantecipada1.5.8-Atualizaçãoantecipada#2, Atualizaçãoantecipada1.5.8-Atualizaçãoantecipada#3 -->
