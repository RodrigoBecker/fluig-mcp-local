---
title: "BPM 074 - Usuário integrador da plataforma consegue assumir as atividades de um processo em nome do usuário que foi designado como responsável?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=267785788"
scraped_at: "2026-03-09T03:56:29.606Z"
depth: 2
anchors: 4
child_links: 131
---

# BPM 074 - Usuário integrador da plataforma consegue assumir as atividades de um processo em nome do usuário que foi designado como responsável?

# Índice

# Plataforma

**Produto: fluig**

**Versão:** 1.6.1

# Ocorrência

Recentemente foi lançamento uma nota a respeito de uma atualização do Fluig 1.6.1 relativo a segurança. Essa nota informa que:

"Utilizando o método takeProcessTask do serviço ECMWorkflowEngineService, um administrador da plataforma consegue assumir as atividades de um processo em nome do usuário que foi designado como responsável."

Nossa empresa utiliza webservices integrado ao Protheus para interagir com as atividades do Fluig. Nessa integração criamos um usuário "integrador" que "chumbamos" nos parâmetros do webservice "takeProcessTask" para realizar tais chamadas.

Nossa dúvida é que, de acordo com essa nota não poderemos mais usar esse formato?

Seremos obrigados a utilizar os parâmetros (username e password) do usuário que vai assumir a tarefa?

# Solução

É necessário que esse usuário com papel "integrador" tenha o papel de administrador para fazer a autenticação, no webservice você pode ter um grupo e assumir com um usuário que faz parte 

deste pool, ao autenticar com o usuário administrador (requisito) você consegue assumir a tarefa deste usuário.


<!-- anchors: BPM074Usuáriointegradordaplataformaconsegueassumirasatividadesdeumprocessoemnomedousuárioquefoidesignadocomoresponsável?-Índice, BPM074Usuáriointegradordaplataformaconsegueassumirasatividadesdeumprocessoemnomedousuárioquefoidesignadocomoresponsável?-Plataforma, BPM074Usuáriointegradordaplataformaconsegueassumirasatividadesdeumprocessoemnomedousuárioquefoidesignadocomoresponsável?-Ocorrência, BPM074Usuáriointegradordaplataformaconsegueassumirasatividadesdeumprocessoemnomedousuárioquefoidesignadocomoresponsável?-Solução -->
