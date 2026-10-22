---
title: "ARQ - Por que ocorre o erro \"Unsupported version\" ao configurar uma nova versão do MS SQL Server?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=267782633"
scraped_at: "2026-03-04T03:38:17.437Z"
depth: 4
anchors: 8
child_links: 62
---

# ARQ - Por que ocorre o erro "Unsupported version" ao configurar uma nova versão do MS SQL Server?

# Índice

# Plataforma

**Produto:** TOTVS Fluig Plataforma

# Ocorrência

Possuo duas versões do MS SQL Server instalados na mesma máquina, a versão 2008 e a atual 2012. Ao tentar apontar para a instalação da plataforma para o banco de dados compatível com a versão 2012, ocorre o erro abaixo. Como proceder?

[?](#)

| `ERROR [stderr] (Thread-75) java.lang.RuntimeException: Unsupported version.` |
| --- |

# Causa

A instalação da plataforma está apontando para o banco de dados da versão 2008.

# Solução

Será necessário garantir que as configurações da porta TCP/IP de cada versão sejam distintas para que não ocorram conflitos.

Em seguida, verifique se no arquivo **standalone.xml**, localizado em [diretório_instalação]/jboss/standalone/configuration, a porta esteja coerente com a configurada para a versão do banco de dados. Para isso, localize a linha abaixo e confira a porta:

**standalone.xml**

[?](#)

| `jdbc:sqlserver://[HOST FLUIG]:1433;databaseName=[NOME DO BANCO]` |
| --- |

Para atualizações 1.6 até 1.8.2, verifique o arquivo **domain.xml**, localizado em [diretório_instalação]/appserver/domain/configuration, se a porta está de acordo com a configurada no banco de dados da versão 2012. Para isso, procure o código abaixo e compare:

**domain.xml**

[?](#)

| `jdbc:sqlserver://[HOST FLUIG]:1433;databaseName=[NOME DO BANCO]` |
| --- |

Atenção!

O banco de dados MS SQL Server 2008 só é suportado até a atualização 1.5.9 conforme descrito na [Matriz de Portabilidade](/display/fluig/Matriz+de+Portabilidade), pois a Microsoft não disponibiliza mais atualizações e canais de suporte para este produto. A partir da atualização 1.5.10 será necessário atualizar para o banco de dados SQL Server 2012 ou superior.


<!-- anchors: ARQPorqueocorreoerro"Unsupportedversion"aoconfigurarumanovaversãodoMSSQLServer?-Índice, ARQPorqueocorreoerro"Unsupportedversion"aoconfigurarumanovaversãodoMSSQLServer?-Plataforma, ARQPorqueocorreoerro"Unsupportedversion"aoconfigurarumanovaversãodoMSSQLServer?-Ocorrência, highlighter_845161, ARQPorqueocorreoerro"Unsupportedversion"aoconfigurarumanovaversãodoMSSQLServer?-Causa, ARQPorqueocorreoerro"Unsupportedversion"aoconfigurarumanovaversãodoMSSQLServer?-Solução, highlighter_519994, highlighter_829331 -->
