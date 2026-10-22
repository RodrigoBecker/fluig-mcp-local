---
title: "Ocultar informações no cabeçalho HTTP"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=626350885"
scraped_at: "2026-03-09T04:10:21.736Z"
depth: 2
anchors: 26
child_links: 83
---

# Ocultar informações no cabeçalho HTTP

# Objetivo

---

O objetivo deste guia é alertar quanto ao problema de expor informações nos cabeçalhos HTTP, bem como apresentar o procedimento para ocultar essas informações nos balanceadores de carga homologados para uso no TOTVS Fluig Plataforma.

# Exposição de informações

---

A aplicação retorna informações nos cabeçalhos HTTP que podem ser aproveitadas em tentativas de invasão. Um aspecto importante do desenvolvimento de aplicações seguras é evitar o vazamento de informações: cabeçalhos HTTP podem fornecer a um atacante o conhecimento sobre o funcionamento interno de uma aplicação. 

- [Apache](#)
- [Nginx](#)
- [NLB](#)

![](/download/attachments/626350885/load%20balancer.png?version=2&modificationDate=1624996112440&api=v2)

![](/download/attachments/626350885/load%20balancer%20nginx.png?version=1&modificationDate=1624910827347&api=v2)

 ![](/download/attachments/626350885/load%20balancer%20nlb.png?version=1&modificationDate=1624910878657&api=v2)

# Como ocultar as informações

---

Para evitar essa exposição, sugerimos realizar o tratamento de informações de saída. O procedimento para ocultar as informações depende do *load balancer* utilizado no ambiente: Apache, NGINX ou Microsoft NLB.

## Apache

---

Para remover por completo a informação, acompanhe os passos a seguir:

**01.** Instalar o módulo mod- security.

[?](#)

| `sudo apt install libapache2-mod-security2` |
| --- |

**02.** Adicionar o módulo do Apache.

[?](#)

| `sudo a2enmod security2` |
| --- |

**03.** Editar o arquivo de configuração de segurança:

[?](#)

| `sudo vim /etc/apache2/conf-available/security.conf` |
| --- |

**04.** Adicionar a opção:

- SecServerSignature " "Nota: É possível alterar o conteúdo para qualquer informação. Em vez de adicionar** SecServerSignature " "**, adicionar o texto desejado. Exemplo:SecServerSignature Fluig

Com isso, a opção Server passa a apresentar:

![](/download/attachments/626350885/Apache%203.png?version=1&modificationDate=1624901040630&api=v2)

**05**. Alterar os dois parâmetros para ocultar a informação do **Server**:

- ServerSignature Off
- ServerTokens Prod

**06**. Incluir os dois parâmetros para ocultar a informação do  **X-Powered-By**:

- Header always unset "X-Powered-By"
- Header unset "X-Powered-By"

**07**. Reiniciar o Apache.

Com isso, a opção Server passa a não apresentar nenhuma informação:

![](/download/attachments/626350885/Apache%202.png?version=1&modificationDate=1624901040713&api=v2)

## Nginx

---

Importante!

Somente é possível utilizar o Nginx **até a versão** **1.22** por conta da compatibilidade com o módulo nginx-stick-module-ng.

Para remover por completo a informação, acompanhe os passos a seguir:

**01**. Instalar o módulo ngx_headers_more. A instalação depende de cada sistema operacional. No Debian basta executar o comando abaixo:

**Debian**

[?](#)

| `apt install libnginx-mod-http-headers-more-filter` |
| --- |

**02**. Editar o arquivo de configuração onde está configurado o *proxy* reverso e adicionar as opções abaixo na sessão **location**:

[?](#)

| `location / {````...````more_clear_headers ‘Server’;````more_clear_headers ‘X-Powered-By’;````...``}` |
| --- |

**03**. Reiniciar o NGINX.

Esta configuração limpa mais informações do cabeçalho HTTP. Neste caso irá remover as informações **Server** e **X-Powered-By**.

****

## Microsoft NLB

---

Nesse caso, a solução é um pouco diferente, sendo necessário incluir regras de saída utilizando a reescrita de URL. Acompanhe os passos a seguir:

- [Conceito](#)
- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)
- [Passo 6](#)
- [Passo 7](#)
- [Passo 8](#)
- [Passo 9](#)
- [Passo 10](#)
- [Passo 11](#)
- [Resultado](#)

Existem várias configurações de balanceamento de carga e *proxy* reverso. Diante disto, será necessário avaliar cada caso para identificar o melhor local para configuração. O ideal é criar a regra no servidor de saída que geralmente será o *proxy* reverso. Caso exista apenas o balanceamento de carga sem o *proxy* reverso, será necessário criar a regra em cada servidor IIS que faz parte do cluster.

![](/download/attachments/626350885/nbl%201.png?version=1&modificationDate=1624912115847&api=v2)

Neste caso, deverá ser configurado nos dois servidores, pois não existe um servidor único com *proxy* reverso.

![](/download/attachments/626350885/nbl%202.png?version=2&modificationDate=1624912203613&api=v2)

Já neste segundo caso, basta configurar uma regra de saída no servidor *proxy* reverso.

 - Para realizar a configuração, é necessário criar uma regra de saída na opção URL Rewrite do *site*.

![](/download/attachments/626350885/nlb%20Passo%201.png?version=1&modificationDate=1624967714587&api=v2)

 - Visualizar variáveis do servidor:

![](/download/attachments/626350885/nlb%20Passo%202.png?version=1&modificationDate=1624967725857&api=v2)

 - Adicionar variável:

![](/download/attachments/626350885/nlb%20Passo%203.png?version=1&modificationDate=1624967815560&api=v2)

 - Adicione a varável **RESPONSE_SERVER****:**

****

 - Adicione a variável **RESPONSE_X-POWERED-BY:**

****

 - Adicione uma nova regra de saída:

![](/download/attachments/626350885/nlb%20Passo%206.png?version=1&modificationDate=1624968343610&api=v2)

 - Em regras de saída escolha regra em branco:

![](/download/attachments/626350885/nlb%20Passo%207.png?version=2&modificationDate=1624968569493&api=v2)

 - Escolha um nome para a regra, em correspondência escolha a opção **variável** e no nome da varável preencha com **RESPONSE_SERVER** conforme cadastrado anteriormente.

![](/download/attachments/626350885/nlb%20Passo%208.png?version=1&modificationDate=1624968727297&api=v2)

 - A ação deve ser **reescrita** e o valor deve ser deixado em branco por padrão. Caso escreva algum outro valor, este será apresentado no cabeçalho HTTP.

 - Acione **Aplicar**.

![](/download/attachments/626350885/nlb%20Passo%209.png?version=1&modificationDate=1624968849187&api=v2)

 - Para o cabeçalho X-Powered-By deverá seguir os mesmos passos trocando apenas o nome da varável para **RESPONSE_X-POWERED-BY:**

****

 - Ao final teremos duas regras de saída:

![](/download/attachments/626350885/nlb%20Passo%2011.png?version=1&modificationDate=1624969102543&api=v2)

O resultado esperado aparecerá nos cabeçalhos HTTP:

![](/download/attachments/626350885/nbl%203.png?version=1&modificationDate=1624969149877&api=v2)

A regra do cabeçalho **Server** foi criada porque pode ou não aparecer, dependendo da forma que estão configurados os serviços de *proxy* reverso e balanceamento de carga.


<!-- anchors: OcultarinformaçõesnocabeçalhoHTTP-Objetivo, OcultarinformaçõesnocabeçalhoHTTP-Exposiçãodeinformações, balanceadores, OcultarinformaçõesnocabeçalhoHTTP-Comoocultarasinformações, OcultarinformaçõesnocabeçalhoHTTP-Apache, highlighter_983976, highlighter_558673, highlighter_320764, OcultarinformaçõesnocabeçalhoHTTP-Nginx, highlighter_799326, highlighter_269761, OcultarinformaçõesnocabeçalhoHTTP-MicrosoftNLB, NLB, NLB-0, NLB-1, NLB-2, NLB-3, NLB-4, NLB-5, NLB-6, NLB-7, NLB-8, NLB-9, NLB-10, NLB-11, NLB-12 -->
