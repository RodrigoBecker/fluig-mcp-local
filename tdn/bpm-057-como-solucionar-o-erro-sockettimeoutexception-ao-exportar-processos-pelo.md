---
title: "BPM 057 - Como solucionar o erro SocketTimeOutException ao exportar processos pelo fluig Studio?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=244425259"
scraped_at: "2026-03-09T03:55:19.103Z"
depth: 2
anchors: 5
child_links: 134
---

# BPM 057 - Como solucionar o erro SocketTimeOutException ao exportar processos pelo fluig Studio?

# Índice

# Plataforma

**Produto:  **fluig Studio

**Versão:** 1.5.9 ou anterior

# Ocorrência

Ao tentar exportar um processo ou formulário para o servidor fluig através do plugin fluig Studio, é exibido o erro SocketTimeOutException.

# Causa

Este problema costuma ocorrer devido a problemas na rede do servidor ou configuração de proxy.

# Solução

Primeiramente, verifique as configurações de *proxy* definidas no TDS/Eclipse através do procedimento descrito em [ARQ - Como configurar o proxy de rede no TDS?](/pages/viewpage.action?pageId=235330208).

Caso o problema persista, atualize o servidor fluig e o *plugin* fluig Studio para a [Atualização 1.6](/pages/viewpage.action?pageId=271409372).

Esta atualização conta com uma nova opção nas configurações do *plugin*para definir o **Tempo de espera de retorno do servidor (segundos)**, conforme a imagem abaixo:

![](/download/attachments/244425259/2016-07-25.png?version=1&modificationDate=1469453815000&api=v2)

Acesse o menu **Window** → **Preferences** → **Fluig** para visualizar a tela de configuração

Para evitar que problemas de intermitência ou lentidão na rede causem problemas no procedimento de exportação, aumente o tempo de espera de retorno do servidor e realize um novo teste.


<!-- anchors: BPM057ComosolucionaroerroSocketTimeOutExceptionaoexportarprocessospelofluigStudio?-Índice, BPM057ComosolucionaroerroSocketTimeOutExceptionaoexportarprocessospelofluigStudio?-Plataforma, BPM057ComosolucionaroerroSocketTimeOutExceptionaoexportarprocessospelofluigStudio?-Ocorrência, BPM057ComosolucionaroerroSocketTimeOutExceptionaoexportarprocessospelofluigStudio?-Causa, BPM057ComosolucionaroerroSocketTimeOutExceptionaoexportarprocessospelofluigStudio?-Solução -->
