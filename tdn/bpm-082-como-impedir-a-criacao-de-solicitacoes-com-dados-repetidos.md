---
title: "BPM 082 - Como impedir a criação de solicitações com dados repetidos?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=248582299"
scraped_at: "2026-03-09T03:57:03.002Z"
depth: 2
anchors: 4
child_links: 131
---

# BPM 082 - Como impedir a criação de solicitações com dados repetidos?

# Índice

# Plataforma

**Produto:**fluig

**Versão:** 1.5.0 e 1.6.0

# Ocorrência

Após preencher os campos do formulário e enviar a atividade, quando é clicado no botão "Iniciar Novas solicitações" os formulários continuam preenchidos.

![](/download/attachments/248582299/print.PNG?version=1&modificationDate=1478871743000&api=v2)

# Solução de contorno.

Uma solução provisória para este caso é criar uma validação no formulário, utilizando o evento de formulário *validateForms*. Neste evento é possível consultar o dataset do próprio formulário usando como constraint os campos do formulário que sejam campos chave para o negócio. Caso já exista um registro de formulário criado é possível retornar uma mensagem de erro para o usuário, informando-o de que já existe uma solicitação aberta com esses mesmos dados informados.

Em anexo a seguir, estão disponibilizados um projeto para o plugin Fluig para o Eclipse com uma implementação modelo da solução de contorno citada acima e também um vídeo guia que irá auxiliar na aplicação e desenvolvimento dessa solução no seu processo.

[ValidateForm.zip](/download/attachments/248582299/ValidateForm.zip?version=1&modificationDate=1496318668000&api=v2)[SolicitaçõesRepetidas.mp4](/download/attachments/248582299/Solicita%C3%A7%C3%B5esRepetidas.mp4?version=1&modificationDate=1496318687000&api=v2)


<!-- anchors: BPM082Comoimpediracriaçãodesolicitaçõescomdadosrepetidos?-Índice, BPM082Comoimpediracriaçãodesolicitaçõescomdadosrepetidos?-Plataforma, BPM082Comoimpediracriaçãodesolicitaçõescomdadosrepetidos?-Ocorrência, BPM082Comoimpediracriaçãodesolicitaçõescomdadosrepetidos?-Soluçãodecontorno. -->
