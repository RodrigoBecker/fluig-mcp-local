---
title: "Como configurar a plataforma para passar por um Proxy"
url: "https://tdn.totvs.com/display/public/fluig/Como+configurar+a+plataforma+para+passar+por+um+Proxy"
scraped_at: "2026-03-09T03:10:01.046Z"
depth: 1
anchors: 11
child_links: 53
---

# Como configurar a plataforma para passar por um Proxy

Fique atento!

Esta página é válida para atualizações **1.6** e **superiores** do TOTVS Fluig.

# Objetivo

---

O objetivo deste guia é detalhar como configurar o serviço do Fluig para se autenticar em um servidor de *proxy*.

# Configuração

---

É possível configurar a plataforma para se autenticar em um servidor de *proxy*. Essa configuração é necessária para utilização de algumas soluções, como por exemplo *Push* e SMS, que possuem requisições HTTP*e*HTTPS para aplicações externas.

A seguir são apresentadas as configurações a serem executadas.

- [A partir da 2.0](#)
- [1.6 até 1.8.2](#)

**01**. Pare o serviço do Fluig.

**02**. Acesse [diretório_instalação]\appserver\standalone\configuration, localize o arquivo “standalone.xml” e faça um *backup.*

**03**.****Acesse [diretório_instalação]\appserver\standalone\configuration e edite o arquivo “standalone.xml”.

**04**.****Na tag **<system-properties>**, adicione as seguintes linhas e substitua os valores dos parâmetros *value* pelos dados do *proxy* de seu ambiente.

[?](#)

| ```````````` |
| --- |

**05**.****Caso seja necessário também utilizar conexões HTTPS através do *proxy*, no **<system-properties>** adicione as seguintes linhas e substitua o valor dos parâmetros *value* pelos dados do *proxy* de seu ambiente:

[?](#)

| ```` |
| --- |

**06**.****Caso seja necessário que algum endereço não passe pelo *proxy*, no **<system-properties>** adicione a seguinte linha e substitua o valor do parâmetro *value* pelos endereços IPs que não devem passar pelo *proxy*:

[?](#)

| `` |
| --- |

**07**. Inicie o serviço do Fluig novamente.

**01**. Pare o serviço do Fluig.

**02**. Acesse [diretório_instalação]\appserver\domain\configuration, localize o arquivo “domain.xml” e faça um *backup.*

**03**.****Acesse [diretório_instalação]\appserver\domain\configuration e edite o arquivo “domain.xml”.

**04**.****Na tag **<system-properties>**, adicione as seguintes linhas e substitua os valores dos parâmetros *value* pelos dados do *proxy* de seu ambiente.

[?](#)

| ```````````` |
| --- |

**05**.****Caso seja necessário também utilizar conexões HTTPS através do *proxy*, no **<system-properties>** adicione as seguintes linhas e substitua o valor dos parâmetros *value* pelos dados do *proxy* de seu ambiente:

[?](#)

| ```` |
| --- |

**06**.****Caso seja necessário que algum endereço não passe pelo *proxy*, no **<system-properties>** adicione a seguinte linha e substitua o valor do parâmetro *value* pelos endereços IPs que não devem passar pelo *proxy*:

[?](#)

| `` |
| --- |

**07**. Inicie o serviço do Fluig novamente.


<!-- anchors: ComoconfiguraraplataformaparapassarporumProxy-Objetivo, ComoconfiguraraplataformaparapassarporumProxy-Configuração, Versão, Versão-1, highlighter_945442, highlighter_445653, highlighter_371675, Versão-2, highlighter_610260, highlighter_904839, highlighter_543431 -->
