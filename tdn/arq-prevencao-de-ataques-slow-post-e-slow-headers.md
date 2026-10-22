---
title: "ARQ - Prevenção de ataques Slow post e Slow headers"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=546254855"
scraped_at: "2026-03-09T03:29:25.197Z"
depth: 2
anchors: 12
child_links: 56
---

# ARQ - Prevenção de ataques Slow post e Slow headers

# Índice

# Plataforma

**Produto:**TOTVS Fluig Plataforma

**Versão:** 1.6.x ou superiores

# Ocorrência

Como prevenir os ataques Http Slow Post & Http Slow Headers na plataforma?

# Solução

A natureza desse tipo de ataque DDoS é tentar bloquear os serviços, ocupando o servidor com o uso de poucos recursos do atacante. Isso é realizado atrasando o tempo total da requisição: os cabeçalhos ou dados são enviados em blocos e se camuflam de uma requisição lenta. Mesmo que esta seja inválida, somente quando estiver completa é que será feita a validação e a liberação dos recursos. Infelizmente, esse tipo de ataque ainda é muito eficaz, porque além de utilizar poucos recursos do atacante, ele é difícil de filtrar por parecer de fato uma requisição lenta.

O ideal para prevenir esse tipo de ataque é reduzir o limite de tempo das requisições lentas, que é bem grande por padrão. Isso é realizado nas configurações do Load Balancer (servidor de aplicação). Realizamos testes específicos utilizando o Load Balancer Ngix na frente das requisições, e constatamos que a arquitetura da própria ferramenta reduz a eficácia desse tipo de ataque. Veja mais detalhes sobre a a recomendação de configuração da própria ferramenta no [site oficial](https://www.nginx.com/blog/mitigating-ddos-attacks-with-nginx-and-nginx-plus/), na seção **Closing Slow Connections**.

Importante!

Somente é possível utilizar o NGINX **até a versão** **1.22** por conta da compatibilidade com o módulo nginx-stick-module-ng.

## Testes efetuados com o Nginx

Em testes realizados no ambiente local, com a configuração recomendada, é possível verificar que, após o tempo determinado, as conexões são encerradas. A configuração equivalente no *undertow(read-)* não limita o tempo total do envio dos headers, somente o tempo entre cada requisição, o que permite manter a conexão aberta por bastante tempo.

Abaixo os resultados dos testes com a configuração ativa:

- [Configuração do NGINX](#)
- [Verificação das portas em uso](#)
- [Comportamento da ferramenta de simulação de ataque](#)

Importante notar que os valores configurados não representam uma situação de uso real, portanto devem ser ajustados para uso.

[?](#)

| `server {````listen   80;````...````client_body_timeout 10s;````client_header_timeout 5s;````...``}` |
| --- |

A contagem de portas em uso está duplicada porque o cliente e servidor são locais.

[?](#)

| `$ date && netstat -nalt | grep ":80" | grep ESTABLISHED -c``ter abr 14 18:09:33 -03 2020``300``$ date && netstat -nalt | grep ":80" | grep ESTABLISHED -c``ter abr 14 18:09:34 -03 2020``0` |
| --- |

É possível visualizar que, após o tempo definido, as conexões existentes foram encerradas.

[?](#)

| `$ slowloris -v --sleeptime 1 fluig.local``[14-04-2020 18:09:28] Attacking fluig.local with 150 sockets.``[14-04-2020 18:09:28] Creating sockets...``[14-04-2020 18:09:28] Creating socket nr 0``...``[14-04-2020 18:09:28] Creating socket nr 149``[14-04-2020 18:09:28] Sending keep-alive headers... Socket count: 150``[14-04-2020 18:09:28] Sleeping for 1 seconds``[14-04-2020 18:09:29] Sending keep-alive headers... Socket count: 150``[14-04-2020 18:09:29] Sleeping for 1 seconds``[14-04-2020 18:09:30] Sending keep-alive headers... Socket count: 150``[14-04-2020 18:09:30] Sleeping for 1 seconds``[14-04-2020 18:09:31] Sending keep-alive headers... Socket count: 150``[14-04-2020 18:09:31] Sleeping for 1 seconds``[14-04-2020 18:09:32] Sending keep-alive headers... Socket count: 150``[14-04-2020 18:09:32] Sleeping for 1 seconds``[14-04-2020 18:09:33] Sending keep-alive headers... Socket count: 150``[14-04-2020 18:09:33] Sleeping for 1 seconds``[14-04-2020 18:09:34] Sending keep-alive headers... Socket count: 150``[14-04-2020 18:09:35] Recreating socket...``...``[14-04-2020 18:09:35] Recreating socket...``[14-04-2020 18:09:35] Sleeping for 1 seconds``[14-04-2020 18:09:36] Sending keep-alive headers... Socket count: 150``[14-04-2020 18:09:36] Sleeping for 1 seconds``[14-04-2020 18:09:37] Stopping Slowloris` |
| --- |


<!-- anchors: ARQPrevençãodeataquesSlowposteSlowheaders-Índice, ARQPrevençãodeataquesSlowposteSlowheaders-Plataforma, ARQPrevençãodeataquesSlowposteSlowheaders-Ocorrência, ARQPrevençãodeataquesSlowposteSlowheaders-Solução, ARQPrevençãodeataquesSlowposteSlowheaders-TestesefetuadoscomoNginx, Testes, Testes-c1, highlighter_407252, Testes-c2, highlighter_232356, Testes-c3, highlighter_121573 -->
