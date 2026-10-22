---
title: "Atualização antecipada 1.5.11"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=255263616"
scraped_at: "2026-03-09T04:23:04.135Z"
depth: 3
anchors: 7
child_links: 41
---

# Atualização antecipada 1.5.11

Este documento contém um breve descritivo acerca das implementações e correções efetuadas.

- **Implementações**: são apresentadas todas as implementações e evoluções da plataforma contidas na atualização **1.5.11**.
- **Correções:** são apresentados todos os ajustes contidos na atualização **1.5.11**. Tais ajustes compreendem aprimoramento de performance e melhorias em processos já existentes.

 Informações detalhadas podem ser obtidas no **Help Online **e aqui mesmo no **http://dev.fluig.com/**.

**Os chamados solucionados em atualizações antecipadas são acumulativos, ou seja, todas as alterações realizadas nas liberações anteriores estarão disponíveis na última atualização.**

****

# Índice

# 

O que é? Como atualizar?

Para entender o processo de liberação de uma atualização antecipada e o procedimento para atualizar, acesse [Atualização fluig - Atualização antecipada (EP).](/pages/viewpage.action?pageId=73078235#Atualizaçãodaplataforma-Atualiza%C3%A7%C3%A3oantecipada(EP))

**

## Atualização antecipada #1

**Eventos de customização utilizando hAPI.getCardValue e hAPI.setCardValue**

**Atualização oficial:** fluig 1.5.12

Problema ao atribuir/resgatar valores dos campos do formulário (métodos setCardValue e getCardValue da hAPI)

**Dataset de formulários**

**Atualização oficial:** fluig 1.5.12

Criado lógica para retornar apenas registros de formulário ativos na consulta do seu dataset (caso esteja marcada a opção "Listar apenas registros ativos" nas informações gerais do formulário).

**Experiências de uso em espanhol**

**Atualização oficial:** fluig 1.5.12

Tratamento para apresentação correta dos dados de experiências de uso, quando utilizado o idioma espanhol.

**Performance do painel Responsável no menu Aprendizado**

**Atualização oficial:** fluig 1.5.12

Melhoria na performance da consulta para exibição das turmas que o usuário logado é responsável.

## Atualização antecipada #2

**Exportação da consulta de solicitações**

**Atualização oficial:** fluig 1.5.12

Corrigido problema que fazia com que dados de tabelas filhas viessem sempre na consulta da solicitação quando utilizado banco de dados ORACLE.

**Serviço realtime com instalador modo caractere**

**Atualização oficial:** fluig 1.5.12

Tratamento no instalador / atualizador modo caractere que estava fazendo a cópia das pastas do realtime indevidamente.

**Travamento ao utilizar nuvem de tags**

**Atualização oficial:** fluig 1.5.12

Ajuste na widget de nuvem de tags para que não ocorra mais o travamento ao acessar o solr.

## Atualização antecipada #3

**Autenticação via fluig Studio**

**Atualização oficial: **fluig 1.5.12

Melhoradas as verificações de autenticação durante os procedimentos executados através do fluig Studio, como consulta a datasets e exportação de formulários.

**Check-out de documentos**

**Atualização oficial: **fluig 1.5.12

Corrigido problema que fazia com que o processo de check-out de documentos apresentasse mensagem de erro inesperado.

**Visualização de documentos**

**Atualização oficial: **fluig 1.5.12

Revisto comportamento que impedia a visualização de um documento mesmo para usuários com permissão, sendo exibida a página inicial do fluig ao tentar realizar a ação de visualização.

**Salvar anexos de registro de formulário**

**Atualização oficial: **fluig 1.5.12

Aplicada correção para correta visualização de anexos de registros de formulário.

## Atualização antecipada #4

**Notificações de solicitações canceladas**

**Atualização oficial: **fluig 1.5.12

Ajustada notificação no mobile para informar o usuário que a solicitação está cancelada.

**Movimentação workflow via Webservices para atividades finais**

**Atualização oficial:** fluig 1.5.12

Adequação na movimentação workflow via Webservices (SOAP), para solicitações que possuem atividades finais com complementos.

**Tamanho das mensagens de notificação**

**Atualização oficial:** fluig 1.5.12

Exibição das mensagens de notificação exibem no máximo 255 caracteres.

**Conversão de documentos em aprovação**

**Atualização oficial: **fluig 1.5.12

Em caso de utilização do conversor externo, a conversão agora também é efetuada quando um documento vai para aprovação.

**Cadastro de Tópicos**

**Atualização oficial:** fluig 1.5.12

Correção no cadastro de tópicos para evitar os pré-requisitos cíclicos entre os tópicos.

**Compartilhamento de Galeria de Imagens**

**Atualização oficial:** fluig 1.5.12

Correção no link de compartilhamento de galerias de comunidades, que tenham sido compartilhadas em outras comunidades. 

Nota

Para aplicar esta correção, é necessário compartilhar novamente as galerias afetadas.

**Imagem em questões**

**Atualização oficial:** fluig 1.5.12

Correção na publicação de imagens em questões criadas através do menu Avaliações.

**Exibição de vídeos em treinamentos e trilhas**

**Atualização oficial:** fluig 1.5.12

Vídeos em MP4 ou AVI anexados a treinamentos não estavam sendo reproduzidos para os usuários matriculados. A correção garante a execução dos vídeos.

****

**Movimentação de solicitação com notificação de atraso**

**Atualização oficial:** fluig 1.5.12

Correção do problema gerado ao movimentar uma solicitação enquanto estava ocorrendo a notificação de atraso da mesma.

**Limite de tamanho para uploads de arquivos em comunidades**

**Atualização oficial:** fluig 1.5.12

Correção no upload de arquivos em comunidades para que passem a considerar a configuração de tamanho máximo de upload pela web definida nos parâmetros gerais.

**Notificações de solicitações em Pool**

**Atualização oficial: **fluig 1.5.12

Corrigido link nas notificações mobile para atividades em Pool.

**Fluxo de retorno para atividade com mecanismo de atribuição em Pool**

**Atualização oficial: **fluig 1.5.12

Correção para permitir fluxos de retorno em atividades cujo mecanismo de atribuição tenha sido configurado 'Para um Grupo' ou 'Para um Papel'.

**Abrir e executar os conteúdos de itens de tópico em Turmas**

**Atualização oficial: **fluig 1.5.12

Ajuste no carregamento da página ao visualizar o conteúdo de um item de tópico para que, caso o navegador bloqueie o pop-up, o usuário seja informado.

**Abrir e executar os conteúdos de Treinamentos**

**Atualização oficial: **fluig 1.5.12

Ajuste no carregamento da página ao visualizar os conteúdos de um treinamento para que, caso o navegador bloqueie o pop-up, o usuário seja informado.

**Acesso a variável processInstanceId em um mecanismo personalizado**

**Atualização oficial: **fluig 1.5.12

Agora o mecanismo personalizado sempre retorna os dados da solicitação na variável "process".

**Tratamento para inicialização do fluig quando ocorre instabilidade no servidor de versões**

**Atualização oficial: **fluig 1.5.12

Tratamento para instabilidade do serviço de versão (https://version.fluig.com) não impactar a inicialização do fluig.

**Conteúdo inacessível na timeline de comunidades após atualização**

**Atualização oficial: **fluig 1.5.12

Ajuste na exibição de imagens compartilhadas, a partir da galeria de imagens da comunidade, na timeline.

**Correção no processo de exclusão de um tópico**

**Atualização oficial: **fluig 1.5.12

Foi incluída uma validação adicional para verificar, durante a exclusão de um tópico, se ele não está atrelado a blocos de avaliações ou blocos avulsos, a fim de evitar erros de transação nesse procedimento.

**Atualizado editor para que permita quebras de linha em sequência**

**Atualização oficial: **fluig 1.5.12

O widget 'Editor de Conteúdo' foi atualizado para permitir a quebra de linhas utilizando a tecla 'Enter'.

**Correção no processo de edição de conteúdos no LMS**

**Atualização oficial: **fluig 1.5.12

Correção na edição de conteúdos quando inserido um caractere de espaço em branco no final do nome do conteúdo.

**Envio de notificações utilizando notifier.notify**

**Atualização oficial: **fluig 1.5.13

Agora, as notificações enviadas pela função notifier.notify serão enviadas de forma assíncrona.

**Edição de processo removendo a relação com o formulário**

**Atualização oficial: **fluig 1.5.13

Ao editar um processo e remover a relação dele com o formulário, as solicitações já abertas com base em versões anteriores deste mesmo processo apresentavam erro.

**Visualização de anexos workflow em dispositivos mobile**

**Atualização oficial: **fluig 1.5.12

Ajustado o método de busca de anexo, para validar o diretório do substituto quando o mesmo existir.

**Movimentar uma solicitação com anexo com um novo usuário via dispositivo mobile**

**Atualização oficial: **fluig 1.5.12

Agora antes de colocar o documento na pasta de upload do usuário, é verificado se a pasta existe, caso não exista, será criada.

**Problema ao receber mensagem de criação de usuário admin através da integração fluig x RM Vitae**

**Atualização oficial: **fluig 1.5.13

Corrigido problema na criação de usuários com papel administrador através da integração via Console EAI.

## Atualização antecipada #5

**Envio de Dados do fluig Analytics**

**Atualização oficial:** fluig 1.6.1

Tratamento realizado no fluig Analytics para envio eficiente de dados para a GoodData.


<!-- anchors: Atualizaçãoantecipada1.5.11-Índice, Atualizaçãoantecipada1.5.11-2, Atualizaçãoantecipada1.5.11-Atualizaçãoantecipada#1, Atualizaçãoantecipada1.5.11-Atualizaçãoantecipada#2, Atualizaçãoantecipada1.5.11-Atualizaçãoantecipada#3, Atualizaçãoantecipada1.5.11-Atualizaçãoantecipada#4, Atualizaçãoantecipada1.5.11-Atualizaçãoantecipada#5 -->
