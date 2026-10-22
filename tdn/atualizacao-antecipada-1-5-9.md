---
title: "Atualização antecipada 1.5.9"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=240302021"
scraped_at: "2026-03-09T04:23:40.631Z"
depth: 3
anchors: 4
child_links: 38
---

# Atualização antecipada 1.5.9

Este documento contém um breve descritivo acerca das implementações e correções efetuadas.

- **Implementações**: são apresentadas todas as implementações e evoluções da plataforma contidas na atualização **1.5.9**.
- **Correções:** são apresentados todos os ajustes contidos na atualização **1.5.9**. Tais ajustes compreendem aprimoramento de performance e melhorias em processos já existentes.

 Informações detalhadas podem ser obtidas no **Help Online **e aqui mesmo no **http://dev.fluig.com/**.

**Os chamados solucionados em atualizações antecipadas são acumulativos, ou seja, todas as alterações realizadas nas liberações anteriores estarão disponíveis na última atualização.**

****

# Índice

# 

O que é? Como atualizar?

Para entender o processo de liberação de uma atualização antecipada e o procedimento para atualizar, acesse [Atualização fluig - Atualização antecipada (EP).](/pages/viewpage.action?pageId=73078235#Atualizaçãodaplataforma-Atualiza%C3%A7%C3%A3oantecipada(EP))

**

## Atualização antecipada #1

**Atualização do fluig com banco de dados SQLServer 2008**

**Atualização oficial:** fluig 1.5.10

Após atualizar o fluig para a versão 1.5.9 não era mais possível iniciar o serviço. Isso ocorre apenas com a utilização do banco de dados SQLServer 2008.

No dia 30/09/2015 a Microsoft parou de dar suporte ao MS SQL Server 2008. Desde esta data também não é mais suportado pelo fluig.

A partir da atualização 1.5.10 o fluig não permitirá mais a atualização do ambiente que utilize banco de dados MS SQL Server 2008.

Notícia completa aqui: [https://suporte.totvs.com/portal/p/10098/suporte-fluig-noticias?id=349](https://suporte.totvs.com/portal/p/10098/suporte-fluig-noticias?id=349)

**Constraints vazias no método onMobileSync**

**Atualização oficial:** fluig 1.5.10

Método onMobileSync do dataset, agora aceita arrays vazios para constraints.

**Consumo de recursos pelo NodeJS (Realtime)** 

**Atualização oficial:** fluig 1.5.10 

Tratamento para melhorar o gerenciamento de recursos computacionais em funcionalidades de tempo real

**Conversão do ECM para o fluig**

**Atualização oficial:** fluig 1.5.10

Tratamento para conversão do ECM em bases onde o usuário administrador possui matrícula diferente de "adm"

## Atualização antecipada #2

**Configuração do endereço do servidor de cache - Redis Cluster**

**Atualização oficial:** fluig 1.5.10

Correção na tela de configurações da plataforma, que não configurava corretamente a opção redis e redis-cluster.

**Filtro em dataset de formulários**

**Atualização oficial: **fluig 1.5.11

Problema na montagem da query do dataset de formulário metalista quando há mais de 1000 registros filtrando pelo campo metadata#active"

**Fluxo automático como único fluxo de entrada**

**Atualização oficial: **fluig 1.5.10

Correção na validação de liberação de um processo que possuía fluxo automático como único fluxo de entrada para uma atividade.

**Consultas lentas no banco de dados (slow queries)**

**Atualização oficial: **fluig 1.5.11

Melhoria de performance geral. Tratamento de queries consideradas lentas para o banco de dados (slow queries).

****

**Autenticação via fluig Studio**

**Atualização oficial: **fluig 1.5.12

Melhoradas as verificações de autenticação durante os procedimentos executados através do fluig Studio, como consulta a datasets e exportação de formulários.

**Desativar componentes com páginas filhas**

**Atualização oficial: **fluig 1.5.12

Tratamento na inativação de componentes quando ele tinha páginas com filhas

**Acesso a variável processInstanceId em um mecanismo customizado**

**Atualização oficial: **fluig 1.5.12

Agora o mecanismo customizado sempre retorna os dados da solicitação na variável "process".

**Erro ao excluir conteúdo do Aprendizado**

**Atualização oficial: **fluig 1.5.13

Corrigido validação na exclusão de um conteúdo que já foi executado por alunos/usuários.


<!-- anchors: Atualizaçãoantecipada1.5.9-Índice, Atualizaçãoantecipada1.5.9-2, Atualizaçãoantecipada1.5.9-Atualizaçãoantecipada#1, Atualizaçãoantecipada1.5.9-Atualizaçãoantecipada#2 -->
