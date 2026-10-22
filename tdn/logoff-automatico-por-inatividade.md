---
title: "Logoff automático por inatividade"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=626639952"
scraped_at: "2026-03-09T04:02:52.387Z"
depth: 2
anchors: 8
child_links: 79
---

# Logoff automático por inatividade

# Índice

# Objetivo

O objetivo deste guia é apresentar os procedimentos necessários para a configuração de um Logoff automático por inatividade no TOTVS Fluig Plataforma.

# Considerações iniciais

Nativamente, o TOTVS Fluig Plataforma não possui logoff automático, pelo contrário, uma sessão permanece válida enquanto uma página do produto estiver aberta no navegador.

Porém é simples de implementar, utilizando uma customização.

# Implementando Logoff automático

O  logoff automático demonstrado aqui utiliza a técnica de [Personalização de todas as páginas da plataforma](/pages/viewpage.action?pageId=232816834).

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)

Baixe o arquivo [custompagehead.ftl](/download/attachments/626639952/custompagehead.ftl?version=3&modificationDate=1690292714787&api=v2) e procure a seguinte linha:

var TEMPO_EM_MINUTOS = 30;

Altere o valor para o tempo (em minutos) desejado. Por padrão, o tempo de vida da sessão vem configurado como 30 minutos.

Por padrão também, quando o usuário estiver visualizando um documento, o logoff nunca será feito. Se desejar mudar esse comportamento também para efetuar o logoff mesmo quando visualizando documento, procure pela seguinte linha:

var NAO_EXPIRAR_VISUALIZANDO_DOCUMENTO = true;

e altere o valor de true para false:

var NAO_EXPIRAR_VISUALIZANDO_DOCUMENTO = false;

Copie o arquivo para a pasta **[diretório_instalação]/repository/wcmdir/custompage,** mantendo o nome custompagehead.ftl.

**Obs:** Não é necessário reiniciar a plataforma. A alteração entra em vigor imediatamente.


<!-- anchors: Logoffautomáticoporinatividade-Índice, Logoffautomáticoporinatividade-Objetivo, Logoffautomáticoporinatividade-Consideraçõesiniciais, Logoffautomáticoporinatividade-ImplementandoLogoffautomático, Logoffautomatico, Logoffautomatico-1, Logoffautomatico-2, Logoffautomatico-3 -->
