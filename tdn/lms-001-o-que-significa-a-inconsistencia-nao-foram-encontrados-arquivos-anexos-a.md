---
title: "LMS 001 - O que significa a inconsistência \"Não foram encontrados arquivos anexos\" ao publicar um conteúdo SCORM?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=187534700"
scraped_at: "2026-03-09T04:48:21.529Z"
depth: 3
anchors: 5
child_links: 69
---

# LMS 001 - O que significa a inconsistência "Não foram encontrados arquivos anexos" ao publicar um conteúdo SCORM?

# Índice

# Plataforma

**Produto: **TOTVS Fluig Plataforma

**Card:** LMS

# Ocorrência

É apresentada a mensagem de inconsistência "Não foram encontrados arquivos anexos" ao publicar um conteúdo do tipo SCORM.

# Causa

Essa mensagem é apresentada quando um arquivo anexado está declarado com o nome errado no arquivo *imsmanifest.xml*.

# Solução

É necessário corrigir o nome do arquivo no *imsmanifest.xml.*

Abaixo está o projeto do conteúdo SCORM, um dos arquivos é o*story.swf* que deve estar declarado no arquivo*imsmanifest.xml.*

**

![](/download/attachments/187534700/1.png?version=1&modificationDate=1431035372000&api=v2)

**

Analisando o arquivo *imsmanifest.xml* vamos encontrar a estrutura abaixo. O erro será apresentado por que o nome do arquivo *history.swf* está diferente do arquivo original, o *story.swf* na imagem acima.

![](/download/attachments/187534700/2.png?version=1&modificationDate=1431035379000&api=v2)

Importante!

A partir da atualização **1.6.5-190219**, o **LMS** não faz mais parte da plataforma para **novas instalações**.

Mas, não se preocupe: se você adquiriu a plataforma com o **LMS incluso**, entre em contato com o [Suporte Fluig](https://suporte.fluig.com/) para que você consiga utiliza-lo normalmente – mesmo após a atualização **1.6.5-190219**. Se você não lembra se o LMS está incluso ou não no seu pacote, consulte sua proposta comercial ou entre em contato com o seu ESN.


<!-- anchors: LMS001Oquesignificaainconsistência"Nãoforamencontradosarquivosanexos"aopublicarumconteúdoSCORM?-Índice, LMS001Oquesignificaainconsistência"Nãoforamencontradosarquivosanexos"aopublicarumconteúdoSCORM?-Plataforma, LMS001Oquesignificaainconsistência"Nãoforamencontradosarquivosanexos"aopublicarumconteúdoSCORM?-Ocorrência, LMS001Oquesignificaainconsistência"Nãoforamencontradosarquivosanexos"aopublicarumconteúdoSCORM?-Causa, LMS001Oquesignificaainconsistência"Nãoforamencontradosarquivosanexos"aopublicarumconteúdoSCORM?-Solução -->
