---
title: "Release 12.3.10"
url: "https://tdn.totvs.com/display/public/fluig/Release+12.3.10"
scraped_at: "2026-03-09T04:37:12.638Z"
depth: 3
anchors: 2
child_links: 39
---

# Release 12.3.10

Este documento contém breves descritivos acerca das implementações e correções efetuadas no pacote **12.3.10**.

## Implementações

#### TOTVS | ESB Plugin e TOTVS | ESB Server

**Função: Login no ESB**

**Situação**: Quando ocorria queda do servidor ou perda de comunicação na rede, o monitor ESB retornava para tela de login, mas ao acessar ocorria erro *ViewStateException.*

**Solução**: Realizada correção para salvar o estado das *views* no lado do *client*, permitindo realizar o login sem erros*.*

**

**Função**: **Componente HTTPSender**

**Situação**: Lentidão no retorno de requisições HTTP do componente HTTPSender.

**Solução**: Realizada alteração da lógica de captura das respostas do componente HTTPSender.

**Função: Servidor de licenças**

**Situação**: Ao iniciar o ESB com o servidor de licenças não respondendo, o ESB fica congelado e não realiza nenhuma integração.

**Solução**: Incluída verificação ao iniciar para que, caso o servidor de licença não esteja respondendo, o ESB avise sobre o erro de licença e finalize sua execução.

**Função: XSLTDesigner**

**Situação**: Ao utilizar o XSD from Database com o banco SQL Server, o *plugin* ESB tenta mudar a sessão do usuário para o *schema* escolhido, o que causa erro, pois somente o usuário administrador do banco tem essa permissão.

**Solução**: Corrigido para que o *plugin* ESB não altere a sessão do usuário, apenas utilize a sessão que foi configurada por padrão pelo administrador do banco.

**Função**: **Servidor de licenças**

**Situação**: O teste de conexão não é realizado no lado *server* do ESB, o que causa inconsistências na visualização do consumo de licenças.

**Solução**: Inclusão de um método de teste de conexão com o servidor de licenças do lado *server.*Ele deve ser chamado via WS pelo *plugin* do Studio.

**Função: Componente WSSender**

**Situação**: Ao tentar listar as operações no componente WSSender, não são utilizados os parâmetros de login e senha da autenticação http.

**Solução**: Realizada alteração no *plugin* ESB para considerar os parâmetros de login e senha da autenticação http no momento em que forem listadas as operações do componente WSSender.


<!-- anchors: Release12.3.10-Implementações, Release12.3.10-TOTVS|ESBPlugineTOTVS|ESBServer -->
