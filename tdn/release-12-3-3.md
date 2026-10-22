---
title: "Release 12.3.3"
url: "https://tdn.totvs.com/display/public/fluig/Release+12.3.3"
scraped_at: "2026-03-09T04:36:49.002Z"
depth: 3
anchors: 2
child_links: 39
---

# Release 12.3.3

Este documento contém breves descritivos acerca das implementações e correções efetuadas no pacote **12.3.3**.

## Implementações

#### fluig ESB Plugin e fluig ESB Server

****

**Recurso: Compatibilidade com o TDS 11.3**

**S****ituação:** Uma nova versão do TDS foi liberada e o produto não era compatível com esta nova versão.

**Solução:** Foi realizada uma alteração no produto para ser compatível com o novo TDS.

**Recurso: Integração com o LS Cloud Lock**

**Situação:** Uma nova versão do LS foi liberada e o produto não era compatível com esta nova versão.

**Solução:** Foi realizada uma alteração no produto para ser compatível com o novo LS.

**Recurso: Retorno do componente HTTPSender**

**Situação:** Ao utilizar o componente HTTPSender enviando para mais de um componente, a mensagem a mensagem correta estava passando apenas para um deles.

**Solução:** Foi realizado um tratamento para garantir os componentes após o HTTPSender recebam a mensagem corretamente.

**Recurso: ESB com Oracle**

**Situação:** Ao deixar o ESB no ar por muito tempo, utilizando banco de dados Oracle, estourava a capacidade de cursores abertos do Oracle.

**Solução:** Foi realizado um tratamento para diminuir a necessidade de conexão com o banco e também para fechar os cursores após a utilização.

**Recurso: Envio de arquivos via FTP**

**Situação:** O FTP não funciona com arquivos grandes (200 MB, por exemplo).

**Solução:** Foram realizadas alterações no processamento de mensagens, garantindo o envio via FTP sem limite de tamanho do arquivo.

**Recurso: Configuração de proxy**

**Situação:** O componente WSSender não estava considerando as configurações de proxy do TDS / eclipse para listar as operações do WS.

**Solução:** Foi realizado um tratamento para utilizar o proxy configurado no TDS / eclipse.

**Recurso: Configuração do parâmetro wrapper.port**

**Situação:** Não estava sendo considerado o parâmetro wrapper.port que permite especificar uma porta diferente.

**Solução:** Agora definindo uma porta específica na propriedade wrapper.port do arquivo esb-service.conf vai permitir o funcionamento nesta nova porta.

****

**Recurso: Chamada a Web Service**

**Situação:** Ao fazer uma requisição a um WS sem passar todos os parâmetros necessários, ocorrem erros no log e a mensagem permanece marcada como RECEIVED, não caindo no componente OnError do diagrama.

**Solução:** Foi realizado um tratamento para garantir que estas exceções sejam identificadas pelo componente OnError.


<!-- anchors: Release12.3.3-Implementações, Release12.3.3-fluigESBPluginefluigESBServer -->
