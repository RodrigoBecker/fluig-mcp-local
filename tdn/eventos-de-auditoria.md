---
title: "Eventos de auditoria"
url: "https://tdn.totvs.com/display/public/fluig/Eventos+de+auditoria"
scraped_at: "2026-03-09T02:59:32.727Z"
depth: 0
anchors: 8
child_links: 83
---

# Eventos de auditoria

Atenção!

Esse recurso está disponível a partir da **atualização 1.6.4 - Waterdrop**. Leia abaixo como obtê-lo.

# Objetivo

Esse guia tem o objetivo de apresentar uma visão geral do recurso Eventos de auditoria no TOTVS Fluig Plataforma. Será abordado como obtê-lo, como utilizá-lo e como funciona.

# Visão geral

O recurso **Eventos de Auditoria** permite registrar alterações realizadas na plataforma em recursos específicos como Papel, Usuários, Grupos, Processos, Documentos, entre outros.

# Como obter

Para obter as licenças para uso do recurso **Eventos de Auditoria **é necessário entrar em contato com o time comercial solicitando uma proposta, através do e-mail [fluig.prime@fluig.com](mailto:fluig.prime@fluig.com). Com isso, o time comercial irá passar as instruções sobre a ativação da licença no [Servidor de Licenças (License Server)](/pages/viewpage.action?pageId=142805338).

# Como ativar os eventos de auditoria

A ativação de registro dos eventos de auditoria é realizada para cada empresa *(tenant)* individualmente, acessando a plataforma com o usuário wcmadmin. Consulte a documentação de [Configuração de eventos de auditoria](/pages/viewpage.action?pageId=544206930) para saber os passos detalhados sobre como configurar a gravação dos eventos de auditoria.

# Como consultar os eventos e exportar os resultados

O recurso de Eventos de auditoria permite ao administrador da plataforma consultar os dados registrados, filtrando por usuário, recurso e período da atividade.

 Com o objetivo de oferecer uma análise mais detalhada, é possível exportar os dados de auditoria no formato CSV (compatível com softwares de planilha eletrônica como o Microsoft₢ Excel).

Os passos detalhados para consultar os eventos registrados e gerar o relatório podem ser consultados na documentação de [Plataforma ❙ Eventos de auditoria](/pages/viewpage.action?pageId=286511885).

# Como saber os eventos que geram log

Todos os eventos em Papéis, Usuários, Grupos, Processos, Documentos geram log na plataforma. O registro dos eventos foi dividido em dois tipos específicos: **eventos gerais para auditoria** e **eventos de dados pessoais**. A estrutura dos dois tipos é semelhante, mas o objetivo é bem diferente. 

A diferença básica entre eles é que nos eventos gerais de auditoria foram previamente definidos os pontos de monitoramento. No caso dos dados pessoais, foram elencados os pontos que podem ter dados pessoais, monitorados a partir do mapeamento desses campos ([veja aqui](https://tdn.totvs.com/x/OfheI)).

## Eventos gerais que registram log para auditoria

Nos eventos gerais, o foco de realizar uma auditoria é saber quem criou ou editou um registro. Por isso, são auditadas as ações relacionadas abaixo:

**Plataforma**

[Dataset](/pages/viewpage.action?pageId=235598394) - criação, edição, remoção, alteração em código-fonte, cache mobile, sincronização.

[Usuário](/pages/viewpage.action?pageId=234455411) - criação, edição, recuperação de senha pessoal.

[Grupo](/pages/viewpage.action?pageId=234455392) - inclusão, edição e remoção de grupo; inclusão e remoção de usuário no grupo.

[Papel](/pages/viewpage.action?pageId=234455398) - inclusão, edição e remoção de papel; inclusão e remoção de usuário no papel; inclusão e remoção de papel no grupo.

**Processos**

[Substituto](/pages/viewpage.action?pageId=234455459) - criação, edição e remoção; criação, edição e remoção no processo.

[Versão de processo](/pages/viewpage.action?pageId=233763153) - criação, liberação, edição, remoção de versão de processo.

[Configuração de processo](/pages/viewpage.action?pageId=263784090)- criação, edição, remoção de processo.

[Solicitação de processo](/pages/viewpage.action?pageId=233763157) - criação, edição, conversão, remoção, transferência de atividade, assumir atividade.

[Mecanismo de atribuição](/pages/viewpage.action?pageId=265783517)- criação, edição, remoção.

[Anexos do processo](/pages/viewpage.action?pageId=233763191) - criação, edição, remoção de anexo do processo.

**Documentos**

[Plataforma ❙ Documento](/pages/viewpage.action?pageId=233763101) - criação, edição, nova revisão, nova versão, restaurar revisão, restaurar versão, exclusão de documento da navegação, espelhar documento, marcar e desmarcar como favorito, *download*, mover de pasta, copiar.

[Pasta](/pages/viewpage.action?pageId=233763099)- criação, edição de pasta, mover, copiar.

[Plataforma ❙ Aplicativo](/pages/viewpage.action?pageId=233763116) - criação, edição de aplicativo.

[Formulário](/pages/viewpage.action?pageId=233763113) - criação, edição de formulário.

[Registro de formulário](/pages/viewpage.action?pageId=243645686) - criação, edição de registro de formulário.

[Arquivo físico](/pages/viewpage.action?pageId=233765728) - criação, edição de arquivo físico, remoção, mover.

[Plataforma ❙ Artigo](/pages/viewpage.action?pageId=233763104) - criação, edição de artigo.

[Plataforma ❙ Documento externo](/pages/viewpage.action?pageId=233763110) - criação, edição de documento externo, mover, copiar.

[Relatório](/pages/viewpage.action?pageId=242392150) - criação, edição de relatório, mover, copiar.

[Lixeira](/pages/viewpage.action?pageId=243636051)- limpeza da lixeira, exclusão de item da lixeira, restaurar item da lixeira, inclusão de tarefa de agendamento de limpeza da lixeira.

## Eventos de dados pessoais que registram log para auditoria

Nos eventos de dados pessoais, o foco é facilitar o atendimento à [LGPD](https://tdn.totvs.com/pages/releaseview.action?pageId=514427789), informando ao usuário quem teve acesso às informações dele. Por isso, a visualização de registros que contenham dados pessoais é controlada, o que envolve os recursos abaixo:

[Usuário](/pages/viewpage.action?pageId=234455411) - criação, edição, visualização de usuário (ação realizada por outro usuário).

Registro de formulários - criação, edição, visualização (via tela ou webservice).

Lembrando que, no caso dos dados de formulário, podem ser incluídos como dados pessoais :

- Formulários criados com o Forms, 
- Formulários avançados, criados no fluig Studio, 
- Formulários de processos e 
- Formulários de comunidades.


<!-- anchors: Eventosdeauditoria-Objetivo, Eventosdeauditoria-Visãogeral, Eventosdeauditoria-Comoobter, Eventosdeauditoria-Comoativaroseventosdeauditoria, Eventosdeauditoria-Comoconsultaroseventoseexportarosresultados, Eventosdeauditoria-Comosaberoseventosquegeramlog, Eventosdeauditoria-Eventosgeraisqueregistramlogparaauditoria, Eventosdeauditoria-Eventosdedadospessoaisqueregistramlogparaauditoria -->
