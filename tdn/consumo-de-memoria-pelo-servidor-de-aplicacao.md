---
title: "Consumo de memória pelo servidor de aplicação"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=244925501"
scraped_at: "2026-03-09T05:20:05.415Z"
depth: 4
anchors: 8
child_links: 41
---

# Consumo de memória pelo servidor de aplicação

# Objetivo

---

O objetivo deste guia é mostrar a configuração correta para evitar problemas quanto ao consumo de memória pelo servidor de aplicação.

# Memória alocada pela JVM

---

O total de memória utilizado pela JVM depende de diversos fatores, como: Java Heap Space, Coletor de lixo, Cache de código, Compilador, Metadados, *Threads*, etc. Como são muitos os fatores envolvidos, não existe uma maneira garantida de estimar o total de memória que será utilizada por um processo Java.

[?](#)

| `Total memory = Heap + Code Cache + Metaspace + Symbol tables + Other JVM structures + Thread stacks + Direct buffers + Mapped files + Native Libraries + Malloc overhead + ...` |
| --- |

O parâmetro XMX define o quanto de memória estará disponível para o Java Heap Space (memória dinâmica) que é uma das áreas de memória utilizada pela JVM (*Java Virtual Machine*).

Devido a um uso mais alto temos um consumo mais elevado das *threads* tanto de HTTP, como de EJB.

É possível verificar que a configuração de *threads* está desta forma:

- [A partir da 2.0](#)
- [1.6 até a 1.8.2](#)

No arquivo **standalone.xml** em produção (localizado em [diretório_instalação]/appserver/standalone/configuration):

  **standalone.xml**

[?](#)

| `````````````````````````````````````````````````````````````````````` |
| --- |

No arquivo **domain.xml** em produção (localizado em [diretório_instalação]/appserver/domain/configuration):

  **domain.xml**

[?](#)

| `````````````````````````````````````````````````````````````````````` |
| --- |

Quanto maior o uso, mais alto será o consumo de memória. Os espaços de memória são configurados separadamente, o valor máximo é definido pela soma das variáveis (como explicado acima) e o uso real vai variar conforme a carga de processamento atual.


<!-- anchors: Consumodememóriapeloservidordeaplicação-Objetivo, Consumodememóriapeloservidordeaplicação-MemóriaalocadapelaJVM, highlighter_90043, Versão, Versão-2, highlighter_765120, Versão-1, highlighter_416823 -->
