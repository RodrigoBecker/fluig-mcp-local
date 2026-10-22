---
title: "Como alterar o timeout da plataforma"
url: "https://tdn.totvs.com/display/public/fluig/Como+alterar+o+timeout+da+plataforma"
scraped_at: "2026-03-09T04:02:25.091Z"
depth: 2
anchors: 9
child_links: 76
---

# Como alterar o timeout da plataforma

Fique atento!

Esta página foi revisada para considerar as configurações do TOTVS Fluig **a partir** da atualização **1.6**.

# Objetivo

---

Este guia visa mostrar o procedimento para aumentar o *timeout* na execução de processos que contenham formulários com *datasets*, atividades de serviço, entre outros.

# Como alterar o timeout

---

Para aumentar o *timeout*da plataforma, siga os passos descritos abaixo.

Atenção!

A realização deste procedimento pode causar problemas de performance na plataforma. Recomendamos que seja realizado em ambiente de homologação antes de configurar em produção.

- [A partir da 2.0](#)
- [1.7 até 1.8.2](#)
- [Até a 1.6.5](#)

**01.** Pare os serviços do Fluig.

**02.** Edite o arquivo **standalone.xml**, que está disponível em [diretório_instalação]/appserver/standalone/configuration, alterando o parâmetro **<coordinator-environment default-timeout="300"/>** dentro do subsystem **jboss:domain:transactions:5.0** para o valor que desejar. Se não houver o parâmetro, basta adicionar.

  **standalone.xml**

[?](#)

| `````````````````````````````` |
| --- |

**03.** Salve as alterações.

**04.**Inicie os serviços do Fluig na ordem correta.

**01.** Pare os serviços do Fluig.

**02.** Edite o arquivo **domain.xml**, que está disponível em [diretório_instalação]/appserver/domain/configuration, alterando o parâmetro **<coordinator-environment default-timeout="300"/>** dentro do subsystem **jboss:domain:transactions:5.0**para o valor que desejar. Se não houver o parâmetro, basta adicionar.

  **domain.xml**

[?](#)

| `````````````````````````````` |
| --- |

**03.** Salve as alterações.

**04.**Inicie os serviços do Fluig na ordem correta.

**01.** Pare os serviços do Fluig.

**02.** Edite o arquivo **domain.xml**, que está disponível em [diretório_instalação]/appserver/domain/configuration, alterando o parâmetro **<coordinator-environment default-timeout="300"/>** dentro do subsystem **jboss:domain:transactions:3.0** para o valor que desejar. Se não houver o parâmetro, basta adicionar.

  **domain.xml**

[?](#)

| `````````````````````````````````` |
| --- |

**03.** Salve as alterações.

**04.**Inicie os serviços do Fluig na ordem correta.

Após realizar esse procedimento, o *timeout* da plataforma será alterado conforme o parâmetro definido.


<!-- anchors: Comoalterarotimeoutdaplataforma-Objetivo, Comoalterarotimeoutdaplataforma-Comoalterarotimeout, Exemplos, Exemplos-2, highlighter_321398, Exemplos-1, highlighter_598521, Exemplos-3, highlighter_752343 -->
