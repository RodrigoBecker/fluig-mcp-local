---
title: "Configurações para autenticação em múltiplos servidores AD com protocolo LDAP"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=257623412"
scraped_at: "2026-03-09T04:09:49.351Z"
depth: 2
anchors: 10
child_links: 77
---

# Configurações para autenticação em múltiplos servidores AD com protocolo LDAP

Fique atento!

Esta página foi revisada para considerar as configurações de server do TOTVS Fluig **a partir** da atualização **1.6**.

# Objetivo

---

O objetivo deste guia é apresentar as configurações válidas para a autenticação em múltiplos servidores AD utilizando o protocolo LDAP (*Lightweight Directory Access Protocol*).

# Autenticação em múltiplos servidores AD com protocolo LDAP

---

Para definir as configurações, é necessário efetuar os passos a seguir de acordo com a atualização do Fluig que você utiliza:

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)

 - **A partir da atualização 2.0:**Edite o arquivo **standalone.xml** ([diretório_instalação]/appserver/standalone/configuration/standalone.xml).

 - **Para atualizações 1.6 até 1.8.2**:Edite o arquivo **domain.xml** ([diretório_instalação]/appserver/domain/configuration/domain.xml).

 - No arquivo correspondente à atualização do Fluig que você utiliza (standalone.xml ou domain.xml), procure o trecho de código abaixo:

    [?](#)
| ```````````````````````````````` |
| --- |

  - Substitua a estrutura de *tags* **login-module** pela seguinte estrutura:

     [?](#)
| ```````:/"/>````````````@"/>````"/>````````````````"/>````"/>``````````````````````:/"/>````````````@"/>````"/>````````````````"/>````"/>``````````````` |
| --- |

 - Caso seja necessário utilizar também a autenticação pelos dados do banco de dados, deve ser adicionada também a seguinte estrutura de *tag* **login-module**:

    [?](#)
| ```````````````` |
| --- |


<!-- anchors: ConfiguraçõesparaautenticaçãoemmúltiplosservidoresADcomprotocoloLDAP-Objetivo, ConfiguraçõesparaautenticaçãoemmúltiplosservidoresADcomprotocoloLDAP-AutenticaçãoemmúltiplosservidoresADcomprotocoloLDAP, samples, samples-1, samples-2, highlighter_962926, samples-3, highlighter_101435, samples-4, highlighter_643435 -->
