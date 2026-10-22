---
title: "Log de acesso aos recursos"
url: "https://tdn.totvs.com/display/public/fluig/Log+de+acesso+aos+recursos"
scraped_at: "2026-03-09T03:51:53.244Z"
depth: 2
anchors: 8
child_links: 52
---

# Log de acesso aos recursos

Fique atento!

Esta página é válida para atualizações **1.7.0-210504** e **superiores** do TOTVS Fluig.

# Objetivo

---

O objetivo deste guia é auxiliar o suporte e desenvolvedores da plataforma a ativar as mensagens de *log* que trazem informações relevantes sobre os acessos a algumas URLs importantes do produto. Essencialmente, esse *log* ajuda a identificar se a plataforma está lenta porque está recebendo muitas requisições.

# Pré-requisitos

---

Para ativar e monitorar as mensagens de *log*, é importante conhecer o procedimento de [Gestão de *logs*](/pages/viewpage.action?pageId=203764136).  

# Ativando o modo DEBUG

---

Para habilitar, siga os passos abaixo:

- [A partir da 2.0](#)
- [1.7.0 até 1.8.2](#)

**01**. Acesse o arquivo **standalone.xml**localizado em **[diretório_instalação]/appserver/standalone/configuration/** e procure por:

[?](#)

| ```````````````````````` |
| --- |

**02**. Em seguida, altere a linha: **<level name="WARN" />** para: **<level name="DEBUG" />**.

**03**. Reinicie os serviços do Fluig.

**01**. Acesse o arquivo **domain.xml**localizado em **[diretório_instalação]/appserver/domain/configuration/** e procure por:

[?](#)

| ```````````````````````` |
| --- |

**02**. Em seguida, altere a linha: **<level name="WARN" />** para: **<level name="DEBUG" />**.

**03**. Reinicie os serviços do Fluig.

Com isso, será criado um novo arquivo na pasta de *logs*, chamado **logurl.log**.

Importante!

A ativação do modo Debug pode causar impacto na performance da plataforma, portanto habilite-a apenas quando necessário e desative-a ao concluir a análise.


<!-- anchors: Logdeacessoaosrecursos-Objetivo, Logdeacessoaosrecursos-Pré-requisitos, Logdeacessoaosrecursos-AtivandoomodoDEBUG, Versão, Versão-1, highlighter_493169, Versão-2, highlighter_64038 -->
