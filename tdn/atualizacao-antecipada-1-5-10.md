---
title: "Atualização antecipada 1.5.10"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=244733123"
scraped_at: "2026-03-09T04:23:33.147Z"
depth: 3
anchors: 5
child_links: 39
---

# Atualização antecipada 1.5.10

Este documento contém um breve descritivo acerca das implementações e correções efetuadas.

- **Implementações**: são apresentadas todas as implementações e evoluções da plataforma contidas na atualização **1.5.10**.
- **Correções:** são apresentados todos os ajustes contidos na atualização **1.5.10**. Tais ajustes compreendem aprimoramento de performance e melhorias em processos já existentes.

 Informações detalhadas podem ser obtidas no **Help Online **e aqui mesmo no **http://dev.fluig.com/**.

**Os chamados solucionados em atualizações antecipadas são acumulativos, ou seja, todas as alterações realizadas nas liberações anteriores estarão disponíveis na última atualização.**

****

# Índice

# 

O que é? Como atualizar?

Para entender o processo de liberação de uma atualização antecipada e o procedimento para atualizar, acesse [Atualização fluig - Atualização antecipada (EP).](/pages/viewpage.action?pageId=73078235#Atualizaçãodaplataforma-Atualiza%C3%A7%C3%A3oantecipada(EP))

**

## Atualização antecipada #1

**Dados do formulários não são salvos após movimentar uma solicitação**

**Atualização oficial:** fluig 1.5.11

Ao movimentar uma solicitação de um processo que possui a opção Registro único de formulário assinalada, os dados do formulário não estavam sendo salvos.

**Performance na movimentação de solicitações**

**Atualização oficial:** fluig 1.5.11

Melhoria de performance na movimentação de solicitações quando o usuário possui uma grande quantidade de grupos associados

## Atualização antecipada #2

**Moderador não consegue adicionar usuários a uma comunidade oculta**

**Atualização oficial:** fluig 1.5.11

Permitir inclusão de indivíduos em comunidades ocultas por moderadores que não sejam administradores da plataforma.

**Solicitações que iniciam com atividade do tipo timer**

**Atualização oficial:** fluig 1.5.11

Corrigido problema que impedia movimentar processos iniciados através atividades do tipo timer.

**Código JSON aparece ao expandir linha de tabela em dispositivos móveis**

**Atualização oficial:** fluig 1.5.11

Tratamento para mostrar a label das propriedades e não mais o código quando a linha de uma tabela é expandida em dispositivos móveis.

## Atualização antecipada #3

**Ambiente exibe mensagem de visualizador indisponível sempre que abre um documento.**
**Atualização oficial:** fluig 1.5.11
Correção de verificação do serviço do fluig Viewer.

****

**Permissão em páginas do painel de controle**
**Atualização oficial:** fluig 1.5.12
Possibilidade de permissionamento nas páginas "Denúncias", "Palavras Restritas" e "Log de cópia controlada" do painel de controle.

**Exportação da consulta de solicitações**

**Atualização oficial:** fluig 1.5.12

Corrigido problema que fazia com que dados de tabelas filhas viessem sempre na consulta da solicitação quando utilizado banco de dados ORACLE.

**Movimentação workflow via Webservices para atividades finais**

**Atualização oficial:** fluig 1.5.12

Movimentação via Webservices (SOAP) para atividades finais com complementos não estava sendo possível de ser feita.

**Tratamento para inicialização do fluig quando ocorre instabilidade no servidor de versões**

**Atualização oficial: **fluig 1.5.12

Tratamento para instabilidade do serviço de versão (https://version.fluig.com) não impactar a inicialização do fluig.

**Envio de notificações utilizando notifier.notify**

**Atualização oficial: **fluig 1.5.13

Agora, as notificações enviadas pela função notifier.notify serão enviadas de forma assíncrona.


<!-- anchors: Atualizaçãoantecipada1.5.10-Índice, Atualizaçãoantecipada1.5.10-2, Atualizaçãoantecipada1.5.10-Atualizaçãoantecipada#1, Atualizaçãoantecipada1.5.10-Atualizaçãoantecipada#2, Atualizaçãoantecipada1.5.10-Atualizaçãoantecipada#3 -->
