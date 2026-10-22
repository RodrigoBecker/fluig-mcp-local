---
title: "Release 12.3.5"
url: "https://tdn.totvs.com/display/public/fluig/Release+12.3.5"
scraped_at: "2026-03-09T04:36:52.959Z"
depth: 3
anchors: 2
child_links: 39
---

# Release 12.3.5

Este documento contém breves descritivos acerca das implementações e correções efetuadas no pacote **12.3.5**.

## Implementações

#### fluig ESB Plugin e fluig ESB Server

****

**Recurso: Link entre componente Aggregator e Receiver**

**Situação:** O link entre componentes Aggregator e receiver não informa comportamento inadequado na execução.

**Solução:** Foi realizada uma alteração no plugin para bloquear o link entre estes componentes.

**Recurso: Transformação de mensagens via XSLT 2.0**

**Situação:** As funções para cálculo de data no XSLT 2.0 não eram suportadas pela API de XSLT 2.0 do ESB.

**Solução:** Foi realizada a atualização da API de XSLT 2.0 do ESB para uma versão mais recente compatível com as funções de cálculo de data.

**Recurso: Parâmetros para consumo de web services via componente WSSender**

**Situação:** Não era possível informar o caractere ";" no valor de um parâmetro para consumo de web services no componente WSSender.

**Solução:** Foi realizado um tratamento para permitir informar o caractere ";" em parâmetros para consumo de Web Services via componente WSSender.

**Recurso: Problema na comunicação do ESB com o License Server**

**Situação:** Quando ocorre erro de LS -6 (Erro interno inesperado), o ESB não tenta a reconexão com o servidor licença.

**Solução:** Na ocorrência de [LS Error -6], serão efetuadas 5 novas tentativas de conexão com o LS, com intervalo de 2 minutos entre cada uma delas.

**Recurso: Usuários com domínio em componentes FTP**

**Situação:** Componentes FTP não funcionam quando é informado usuário com domínio.

**Solução:** Foram modificados os componentes de FTP para permitir usuários com domínio.

**Recurso:** **Reprocessamento do mensagens**

**Situação:** Ao reprocessar mensagens o componente FTPSender não mantém o nome original do arquivo

**Solução:** Foi realizado um tratamento para que o componente FTPSender mantenha o nome original do arquivo nas mensagens reprocessadas.

**Recurso: Reprocessamento de mensagens no ESB em ambientes de Alta Disponibilidade**

**Situação:** As mensagens são reprocessadas duas vezes em ambientes de alta disponibilidade.

**Solução:** Foi implementada uma melhoria no tratamento para o reprocessamento de mensagens, atendendo situações em que o ESB é utilizado em *cluster*.

****


<!-- anchors: Release12.3.5-Implementações, Release12.3.5-fluigESBPluginefluigESBServer -->
