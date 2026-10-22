---
title: "ARQ - Diminuindo o tamanho de log da plataforma"
url: "https://tdn.totvs.com/display/public/fluig/ARQ+-+Diminuindo+o+tamanho+de+log+da+plataforma"
scraped_at: "2026-03-09T03:29:39.491Z"
depth: 2
anchors: 12
child_links: 42
---

# ARQ - Diminuindo o tamanho de log da plataforma

# Índice

# Plataforma

**Produto: **TOTVS Fluig Plataforma

**Versão:** 1.5.7, 1.6, 2.0

**Ambiente:** Linux ou Windows

# Ocorrência

O log da plataforma está ocupando muito espaço em disco.

# Causa

A configuração padrão do log da plataforma está definida como "INFO", fazendo que sejam registradas informações de qualquer ação realizada pelos usuários. Com isso o log acaba ficando com um tamanho considerável quando a plataforma possui uma grande utilização.

# Solução

- [A partir da 2.0](#)
- [1.6 até 1.8.2](#)
- [1.5.7 a 1.5.13](#)

 - Pare o serviço do Fluig.

 - Faça um *backup* do arquivo de configuração: **[diretório_instalação]\appserver\standalone\configuration\standalone.xml** em um diretório de sua preferência.

 - Abra o arquivo [diretório_instalação]\appserver\standalone\configuration\standalone.xml e efetue as configurações abaixo:

 - Procure por "<console-handler name="CONSOLE">" e altere "<level name="INFO"/>" para "<level name="WARN"/>"

   - Procure por "<root-logger>" e altere "<level name="INFO"/>" para <level name="WARN"/>

   - Procure a tag logger cuja propriedade "category" seja igual a "com.totvs.technology.foundation.common.Chrono", e altere o "<level name="INFO"/>" para "<level name="DEBUG"/>"

   - Acima da tag "<root-logger>", adicione as tags abaixo:

      [?](#)
| `````````````````````` |
| --- |

 Salve as alterações e inicie novamente o serviço do Fluig.

Hey, cuidado!

Após salvar as alterações, é necessário verificar se a estrutura do XML está ok. Para isso, é possível abrir o standalone.xml no navegador. Caso a estrutura do arquivo XML não esteja ok, o navegador mostrará uma mensagem e a linha do arquivo que está com inconsistência.

Após realizar as configurações acima, somente as mensagens de erro ou advertência de eventos da plataforma (documentos, processos, social, etc) mensagens de *deploy* de componentes do WCM serão exibidas. Caso você possua componentes que registrem informações no *log*, será necessário criar um novo "<logger>" no seu arquivo de configuração standalone.xml.

 - Pare o serviço do fluig.

 - Faça um backup do arquivo de configuração: **[diretório_instalação]\appserver\domain\configuration\domain.xml** em um diretório de sua preferência.

 - Abra o arquivo [diretório_instalação]\appserver\domain\configuration\domain.xml e efetue as configurações abaixo:

   Procure por "<console-handler name="CONSOLE">" e altere "<level name="INFO"/>" para "<level name="WARN"/>"

   - Procure por "<root-logger>" e altere "<level name="INFO"/>" para <level name="WARN"/>

   - Procure a tag logger cuja propriedade "category" seja igual a "com.totvs.technology.foundation.common.Chrono", e altere o "<level name="INFO"/>" para "<level name="DEBUG"/>"

   - Acima da tag "<root-logger>", adicione as tags abaixo:

      [?](#)
| `````````````````````` |
| --- |

 - Salve as alterações e inicie novamente o serviço do fluig.

Hey, cuidado

Após salvar as alterações, é necessário verificar se a estrutura do XML está ok. Para isso, é possível abrir o domain.xml no navegador. Caso a estrutura do arquivo XML não esteja ok, o navegador mostrará uma mensagem e a linha do arquivo que está com problema.

Após realizar as configurações acima, somente as mensagens de erro ou advertência de eventos da plataforma (documentos, processos, social, etc) mensagens de deploy de componentes do WCM serão exibidas. Caso você possua componentes que registrem informações no log, será necessário criar um novo "<logger>" no seu arquivo de configuração domain.xml.

 - Pare o serviço do Fluig.

 - Faça um backup do arquivo de configuração **[diretório_instalação]\jboss\standalone\configuration\standalone.xml** em um diretório de sua preferência.

 - Abra o arquivo **[diretório_instalação]\jboss\standalone\configuration\standalone.xml** e efetue as configurações abaixo:

 - Procure por "<console-handler name="CONSOLE">" e altere "<level name="INFO"/>" para "<level name="WARN"/>"

   - Procure por "<root-logger>" e altere "<level name="INFO"/>" para <level name="WARN"/>

   - Procure a tag logger cuja propriedade "category" seja igual a "com.totvs.technology.foundation.common.Chrono", e altere o "<level name="INFO"/>" para "<level name="DEBUG"/>"

   - Acima da tag "<root-logger>", adicione as tags abaixo:

      [?](#)
| `````````````````````` |
| --- |

 Salve as alterações e inicie novamente o serviço do Fluig.

Hey, cuidado

Após salvar as alterações, é necessário verificar se a estrutura do XML está ok. Para isso, é possível abrir o standalone.xml no navegador. Caso a estrutura do arquivo XML não esteja ok, o navegador mostrará uma mensagem e a linha do arquivo que está com problema.

Após realizar as configurações acima, somente as mensagens de erro ou advertência de eventos da plataforma (documentos, processos, social, etc) mensagens de deploy de componentes do WCM serão exibidas. Caso você possua componentes que registrem informações no log, será necessário criar um novo "<logger>" no seu arquivo de configuração standalone.xml.


<!-- anchors: ARQDiminuindootamanhodelogdaplataforma-Índice, ARQDiminuindootamanhodelogdaplataforma-Plataforma, ARQDiminuindootamanhodelogdaplataforma-Ocorrência, ARQDiminuindootamanhodelogdaplataforma-Causa, ARQDiminuindootamanhodelogdaplataforma-Solução, Versão, Versão-1, highlighter_442403, Versão-2, highlighter_424566, Versão-2, highlighter_13770 -->
