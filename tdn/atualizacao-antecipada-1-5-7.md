---
title: "Atualização antecipada 1.5.7"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=235313182"
scraped_at: "2026-03-09T04:24:11.179Z"
depth: 3
anchors: 23
child_links: 56
---

# Atualização antecipada 1.5.7

Este documento contém um breve descritivo acerca das implementações e correções efetuadas.

- **Implementações**: são apresentadas todas as implementações e evoluções da plataforma contidas na atualização **1.5.7**.
- **Correções:** são apresentados todos os ajustes contidos na atualização **1.5.7**. Tais ajustes compreendem aprimoramento de performance e melhorias em processos já existentes.

 Informações detalhadas podem ser obtidas no **Help Online **e aqui mesmo no **http://dev.fluig.com/**.

**Os chamados solucionados em atualizações antecipadas são acumulativos, ou seja, todas as alterações realizadas nas liberações anteriores estarão disponíveis na última atualização.**

****

# Índice

# 

## Procedimentos para atualização do atualização antecipada

*Por se tratar de uma liberação emergencial são necessários alguns procedimentos diferenciados para atualização do ambiente. Vamos a eles:*

*1 - Faça o download do instalador da atualização antecipada no portal de clientes;*

*2 - Pare a execução dos serviços do **fluig**, **fluig_MemCached** e **fluig_RealTime**;*

*3 - Elimine as pastas data, log e tmp do fluig em: (<instalacao fluig>\jboss\standalone);*

*4 - Execute o instalador e selecione a opção de atualização;*

*5 - Inicie os serviços Memcached e RealTime;*

*6 - Inicie o serviço do fluig.*

*Basta aguardar o serviço do fluig ficar disponível e acessar a plataforma já atualizada.*

*Caso o seu ambiente fluig seja administrado pela nossa equipe de Cloud, você pode entrar em contato através de um chamado ou ligando para 4003-0015 e solicitar a atualização.*

**

## Atualização antecipada #1

**Arquivo de configuração em branco após atualização de versão**

**Atualização oficial:** fluig 1.5.8

Tratamento para situação em que o arquivo de configuração (*configuration.properties*) não apresentava conteúdo após atualização de uma atualização anterior à 1.5.6 diretamente para a atualização 1.5.7.

**Compatibilidade com mashups**

**Atualização oficial:** fluig 1.5.8

Tratamento para deixar a atualização 1.5.7 compatível com*widgets/mashups* de atualizações antigas que empacotam dependências de autenticação.

## Atualização antecipada #2

**Eventos de formulário**

**Atualização oficial:** fluig 1.5.8

Corrigida situação quando se utilizava eventos de formulário na primeira atividade de solicitações.

**Acesso a turma**

**Atualização oficial:** fluig 1.5.8

Melhoria na performance para acessar as turmas, tópicos e itens de tópico.

**Avaliações**

**Atualização oficial:** fluig 1.5.8

Melhoria na performance na execução da avaliação.

## Atualização antecipada #3

**Muitos arquivos abertos**

**Atualização oficial:** fluig 1.5.8

Tratamento para situações em que diversas mensagens de "Muitos arquivos abertos" eram apresentadas em log e o serviço do fluig era interrompido após determinado tempo.

## Atualização antecipada #4

**Zoom em formulários**

**Atualização oficial:** fluig 1.5.8

Quando se utilizava o caracter "%" em uma URL do zoom em formulários, uma inconsistência ocorria impedindo a listagem dos registros.

## Atualização antecipada #5

**Log**

**Atualização oficial:** fluig 1.5.8

Criado novo nivel de log para identificar erros de Batch update.

## Atualização antecipada #6

**Turma Modelo**

**Atualização oficial:** fluig 1.5.8

Correção no relacionamento de turma modelo.

## Atualização antecipada #7

**Matrícula**

**Atualização oficial:** fluig 1.5.8

Correções em matrícula.

## Atualização antecipada #8

**Finalizar uma solicitação**

**Atualização oficial:** fluig 1.5.8

Gerava erro de NullPointerException ao movimentar uma solicitação para atividade final.

****

**Movimentar solicitações com formulários Pai X Filho**

**Atualização oficial:** fluig 1.5.8

Não estava sendo possível movimentar solicitações quando o formulário Pai x Filho do processo possui campos nulos.

**Template do e-mail "Esqueceu sua senha?"**

**Atualização oficial:** fluig 1.5.8

Ao usar a função "Esqueceu sua senha?" na página de login, o template estava preenchendo o campo login com o e-mail do usuário.

## Atualização antecipada #11

**Central de componentes**

**Atualização oficial:** fluig 1.5.8

Foi corrigida a situação de falha no deploy de artefatos através da central de componentes .

****

**Timeline de Comunidades**

**Atualização oficial:** fluig 1.5.8

Melhoria aplicada a timeline de comunidades para que fique acessível aos usuários.

**Compartilhamento de artigos na timeline da Home**

**Atualização oficial:** fluig 1.5.8

Corrigida a situação em que os compartilhamentos de artigos não eram enviados para a timeline da home.

## Atualização antecipada #12

**Movimentação de solicitação via serviço**

**Atualização oficial:** fluig 1.5.8

Implementado para que, quando via WebService não for informado nenhum usuário para a próxima atividade e esta atividade tenha mecanismo para usuário, para um grupo ou para um papel, o usuário seja preenchido.

**Utilização do getCardValue com formulário configurado com único registro**

**Atualização oficial:** fluig 1.5.8

Corrigida a situação em que o hAPI.getCardValue não considerava os dados corretamente do registro de formulário que era salvo se o processo estiver configurado para gravar em um único registro.

## Atualização antecipada #13

**Erro no treinamentos do LMS**

**Atualização oficial:** fluig 1.5.8

Corrigido erro que estava ocorrendo na execução de Treinamentos do LMS.

**Ajuste no histórico de avaliações**

**Atualização oficial:** fluig 1.5.8

Corrigido o histórico de avaliações para mostrar corretamente o histórico do usuário selecionado.

## Atualização antecipada #14

**Sincronização de dataset offline**

**Atualização oficial:** fluig 1.5.8

Na data da última sincronização de um Dataset offline é apresentada a data e hora que foi iniciada a execução. Por exemplo: começou a fazer a sincronização dos dados às 17:05 e terminou às 17:08, a data de última sincronização será 17:05 horas.

**Limpar dados de dataset offline**

**Atualização oficial:** fluig 1.5.8

Ao limpar os dados de dataset offline no painel de controle, na proxima sincronização, o valor da variável lastSyncDate no evento onsync é zerado.

## Atualização antecipada #15

**Performance na atualização de ambientes**

**Atualização oficial:** fluig 1.5.8

Alteração para que a atualização de ambientes com grande volume de dados ocorra de forma mais rápida.

## Atualização antecipada #16

**Edição de turmas**

**Atualização oficial:** fluig 1.5.8

Correção para permitir editar turmas que contenham descrição com mais de 40 caracteres.

**Deploy em ambientes com pasta apps compartilhada**

**Atualização oficial:** fluig 1.5.8

Tratamento para não efetuar deploy de artefatos múltiplas vezes quando a pasta apps estiver compartilhada com mais de uma instância do fluig.

**Histórico**

**Atualização oficial:** fluig 1.5.8

Correção da visualização de histórico dos alunos

## Atualização antecipada #17

**Finalização de turmas**

**Atualização oficial:** fluig 1.5.8

Correção para permitir finalizar turmas.

## Atualização antecipada #18

**Campo incremental notas**

**Atualização oficial:** fluig 1.5.8

Alteração realizada para que o dataset *enrollmentDataset* retorne o campo incremental de notas.

## Atualização antecipada #19

**Edição de usuário**

**Atualização oficial:** fluig 1.5.8

Tratamento para mensagem de erro apresentada ao tentar atualizar dados de usuários que não tinham a propriedade de idioma definida. 

## Atualização antecipada #20

**Edição de usuário**

**Atualização oficial:** fluig 1.5.8

Corrigida a situação em que na widget de editor de conteúdo era apresentada a opção para upload de imagem local. Agora é possível copiar o link de uma imagem da navegação de documentos e ao adicionar no editor de conteúdo a mesma é apresentada automaticamente.

## Atualização antecipada #21

**Método getHistories**

**Atualização oficial:** fluig 1.5.8

Utilização do método *getHistories* do *webservice* "WorkflowEngineService" quando o login e a matrícula dos usuários são diferentes.

## Atualização antecipada #22

**Relatórios BIRT**

**Atualização oficial:** fluig 1.5.9

Tratamento para erro de ClassNotFound ao utilizar alguns relatórios.


<!-- anchors: Atualizaçãoantecipada1.5.7-Índice, Atualizaçãoantecipada1.5.7-2, Atualizaçãoantecipada1.5.7-Procedimentosparaatualizaçãodoatualizaçãoantecipada, Atualizaçãoantecipada1.5.7-Atualizaçãoantecipada#1, Atualizaçãoantecipada1.5.7-Atualizaçãoantecipada#2, Atualizaçãoantecipada1.5.7-Atualizaçãoantecipada#3, Atualizaçãoantecipada1.5.7-Atualizaçãoantecipada#4, Atualizaçãoantecipada1.5.7-Atualizaçãoantecipada#5, Atualizaçãoantecipada1.5.7-Atualizaçãoantecipada#6, Atualizaçãoantecipada1.5.7-Atualizaçãoantecipada#7, Atualizaçãoantecipada1.5.7-Atualizaçãoantecipada#8, Atualizaçãoantecipada1.5.7-Atualizaçãoantecipada#11, Atualizaçãoantecipada1.5.7-Atualizaçãoantecipada#12, Atualizaçãoantecipada1.5.7-Atualizaçãoantecipada#13, Atualizaçãoantecipada1.5.7-Atualizaçãoantecipada#14, Atualizaçãoantecipada1.5.7-Atualizaçãoantecipada#15, Atualizaçãoantecipada1.5.7-Atualizaçãoantecipada#16, Atualizaçãoantecipada1.5.7-Atualizaçãoantecipada#17, Atualizaçãoantecipada1.5.7-Atualizaçãoantecipada#18, Atualizaçãoantecipada1.5.7-Atualizaçãoantecipada#19, Atualizaçãoantecipada1.5.7-Atualizaçãoantecipada#20, Atualizaçãoantecipada1.5.7-Atualizaçãoantecipada#21, Atualizaçãoantecipada1.5.7-Atualizaçãoantecipada#22 -->
