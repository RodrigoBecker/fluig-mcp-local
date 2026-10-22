---
title: "Configuração de proxy reverso NGINX com HTTPS"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=736971727"
scraped_at: "2026-03-09T04:10:16.743Z"
depth: 2
anchors: 25
child_links: 85
---

# Configuração de proxy reverso NGINX com HTTPS

# Objetivo

---

O objetivo deste guia é detalhar as configurações necessárias para utilização de *proxy* reverso NGINX com protocolo HTTPS.

# Pré-requisitos

---

- Possuir o NGINX na versão 1.20.1 ou superior instalado. Detalhes de instalação e configuração do NGINX estão disponíveis [na documentação oficial](https://docs.nginx.com/).Importante! Somente é possível utilizar o NGINX **até a versão** **1.22** por conta da compatibilidade com o módulo nginx-stick-module-ng.
- Possuir um host no DNS configurado para a plataforma, com domínio específico.

- Possuir um certificado digital válido.

# Recomendações

---

- Instalar o NGINX em um servidor separado do servidor onde o Fluig está instalado.

- Faça as alterações necessárias na topologia utilizada, para que o acesso funcione corretamente após implantar o *proxy* reverso. Para saber mais sobre a topologia DMZ, [clique aqui](/display/fluig/Topologia+DMZ).
EXEMPLOS DE ALTERAÇÕESApontamento de IP na rede interna, liberação de portas, alteração de endereço de acesso do Fluig (usuário wcmadmin).

# Configurando o NGINX como proxy reverso com HTTPS

---

Siga o passo a passo, conforme descrito abaixo.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)
- [Passo 6](#)
- [Passo 7](#)
- [Passo 8](#)

 - Certifique-se de que a interface de configuração pública esteja preenchida com o IP do servidor (rede interna). Para isso, abra o arquivo **[FLUIG]/appserver/domain/configuration/host.xml,**localize a tag <interface name="public"> e verifique o valor da propriedade "value":

![](/download/attachments/736971727/image2023-2-9_11-29-24.png?version=1&modificationDate=1675952964703&api=v2)

Importante!

Não é recomendado utilizar o valor "0.0.0.0" na interface de configuração pública.

 - Configure o Fluig em HTTPS na plataforma NGINX conforme documentação disponível em [Configuração HTTPS da plataforma](/pages/viewpage.action?pageId=354472893).

   Importante! 

    Lembrando que, se o seu ambiente utiliza [balanceamento de carga](/display/fluig/Alta+disponibilidade+e+balanceamento+de+carga), a configuração de HTTPS deve ser replicada [manualmente](https://tdn.totvs.com/pages/viewpage.action?pageId=354472893#Configura%C3%A7%C3%A3oHTTPSdaplataforma-Configura%C3%A7%C3%A3odeHTTPSmanual) para todos os servidores do Fluig.

 - No servidor NGINX, utilize os certificados e o arquivo gerado para realizar a seguinte configuração:

   Salve os certificados na pasta **/etc/nginx/certs**;

   - Cole o arquivo de configuração gerado no **Passo 2** em **/etc/nginx/conf.d**.

 - Adicione as diretivas para configuração das notificações em tempo real (serviço Realtime) no arquivo gerado no **Passo 3** - "**/etc/nginx/conf.d**":

   Informe o DNS do servidor na diretiva "server_name";

   - Informe o caminho completo dos arquivos de certificado (arquivo .cert) na diretiva ssl_certificate;

   - Informe o caminho completo dos arquivos de certificado (arquivo .key) na diretiva ssl_certificate_key;

   - Informe o IP e a porta onde o serviço do Realtime está em execução, na diretiva "proxy-pass". A porta padrão do Realtime é 7777, caso não tenha sido alterada.

      [?](#)
| `server {````listen 7777 ssl;````server_name fluig.suaempresa.com;````ssl_certificate     /etc/nginx/certs/fluig.cert;````ssl_certificate_key /etc/nginx/certs/fluig.key;``` ```location / {````proxy_pass http://[IP_REALTIME]:[PORTA_REALTIME];````proxy_http_version 1.1;````proxy_set_header Host $host;````proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;````proxy_set_header Upgrade $http_upgrade;````proxy_set_header Connection "upgrade";````}``}` |
| --- |

 - No arquivo "/etc/nginx/conf.d", no contexto "server", que estará ouvindo a porta 443, configure as seguintes diretivas:

   Informe o caminho completo dos arquivos de certificado (arquivo .cert) na diretiva ssl_certificate;

   - Informe o caminho completo dos arquivos de certificado (arquivo .key) na diretiva ssl_certificate_key;

   - Oculte a versão do NGINX no cabeçalho de resposta das requisições, informando o valor "off" na diretiva "server_tokens";

   - Adicione as diretivas de cabeçalho ("add_header") conforme abaixo:

      [?](#)
| `server {````listen 443 ssl http2;````server_name fluig.suaempresa.com;````server_tokens off;``` ```ssl_certificate``/etc/nginx/certs/fluig``.cert;````ssl_certificate_key``/etc/nginx/certs/fluig``.key;````ssl_protocols       TLSv1.3;````ssl_ciphers         ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!3DES:!MD5:!PSK;``# Se necessário complemente com outras chaves Ciphers suportadas````ssl_prefer_server_ciphers on;````ssl_session_cache   shared:SSL:10m;``` ```add_header``'Access-Control-Allow-Origin'` `'https://fluig.suaempresa.com/'``;````add_header``'Access-Control-Allow-Methods'` `'GET, PUT, POST, OPTIONS, DELETE'``;````add_header``'Access-Control-Request-Method'` `'GET, PUT, POST, OPTIONS, DELETE'``;````add_header``'Access-Control-Allow-Headers'` `'Content-Type, X-Requested-With, accept-version'``;````add_header Strict-Transport-Security``"max-age=31536000; includeSubDomains; preload"` `always;` |
| --- |

Importante!

Substitua "**fluig.suaempresa.com**" pelo endereço a partir do qual você deseja acessar o Fluig.

Nota:

Recomendamos o uso de chaves e protocolos mais modernos e seguros como os indicados no exemplo. Porém, outras chaves também são suportadas:

DHE-RSA-AES128-GCM-SHA256:DHE-DSS-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-DSS-AES128-SHA256:DHE-RSA-AES256-SHA256:DHE-DSS-AES256-SHA:DHE-RSA-AES256-SHA

Preencha a diretiva **ssl_ciphers** do conf.d substituindo pelos valores suportados acima que estejam de acordo com sua política de segurança. As chaves podem ser validadas em [https://ciphersuite.info/](https://ciphersuite.info/).

E também os protocolos: TLSv1, TLSv1.1 e TLSv1.2

Preencha a diretiva **ssl_protocols** do conf.d substituindo pelos valores suportados acima que estejam de acordo com sua política de segurança.

 - No contexto "server" que estará ouvindo a porta 443, adicione as seguintes diretivas no contexto "location /", no arquivo "/etc/nginx/conf.d", conforme abaixo:

   Na diretiva "proxy-pass", informe o IP do servidor do Fluig e a porta definida na instalação da plataforma (a porta padrão é 8080);

   - Adicione as diretivas de cabeçalho para "proxy" conforme abaixo:

      [?](#)
| `location / {````proxy_pass          http://[IP_FLUIG]:[PORTA_FLUIG];````proxy_ssl_verify    off;````proxy_ssl_ciphers   HIGH:!aNULL:!MD5;` ```proxy_pass_request_headers on;````proxy_set_header Host $host;````proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;````proxy_set_header X-Forwarded-Proto $scheme;````proxy_set_header X-Forwarded-Server $host;````proxy_set_header X-Forwarded-Host $host:$server_port;````proxy_set_header Upgrade $http_upgrade;````proxy_set_header Connection "upgrade";` |
| --- |

 - Após efetuar os passos anteriores, o arquivo "/etc/nginx/conf.d" estará desta forma:

    [?](#)
| `server {````listen 7777 ssl;````server_name fluig.suaempresa.com;````ssl_certificate     /etc/nginx/certs/fluig.cert;````ssl_certificate_key /etc/nginx/certs/fluig.key;``` ```location / {````proxy_pass http://[IP_FLUIG]:7777;````proxy_http_version 1.1;````proxy_set_header Host $host;````proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;````proxy_set_header Upgrade $http_upgrade;````proxy_set_header Connection "upgrade";````}``}` `server {````listen 443 ssl http2;````server_name fluig.suaempresa.com;````server_tokens off;``` ```ssl_certificate     /etc/nginx/certs/fluig.cert;````ssl_certificate_key /etc/nginx/certs/fluig.key;````ssl_protocols       TLSv1.3;````ssl_ciphers         ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!3DES:!MD5:!PSK; # Se necessário complemente com outras chaves Ciphers suportadas````ssl_prefer_server_ciphers on;````ssl_session_cache   shared:SSL:10m;``` ```add_header 'Access-Control-Allow-Origin' 'https://fluig.empresa.com/';````add_header 'Access-Control-Allow-Methods' 'GET, PUT, POST, OPTIONS, DELETE';````add_header 'Access-Control-Request-Method' 'GET, PUT, POST, OPTIONS, DELETE';````add_header 'Access-Control-Allow-Headers' 'Content-Type, X-Requested-With, accept-version';````add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;` ```location / {````proxy_pass          http://[IP_FLUIG]:[PORTA_FLUIG];````proxy_ssl_verify    off;````proxy_ssl_ciphers   HIGH:!aNULL:!MD5;` ```proxy_pass_request_headers on;````proxy_set_header Host $host;````proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;````proxy_set_header X-Forwarded-Proto $scheme;````proxy_set_header X-Forwarded-Server $host;````proxy_set_header X-Forwarded-Host $host:$server_port;````proxy_set_header Upgrade $http_upgrade;````proxy_set_header Connection "upgrade";` ```client_max_body_size       880m;````client_body_buffer_size    256k;` ```proxy_buffer_size          8k;````proxy_buffers              8 32k;````proxy_busy_buffers_size    64k;````proxy_temp_file_write_size 64k;````}``}` |
| --- |

 - Reinicie os serviços do Fluig e do NGINX em ambos os servidores.

Importante!

Dependendo do ambiente (versão, sistema operacional utilizado, etc.) algumas diretivas detalhadas nesta documentação podem estar presentes na sua instalação do NGINX também. Isso causará o erro "*directive is duplicate*", impossibilitando a inicialização do serviço do NGINX. Caso isso ocorra, verifique qual diretiva será mantida: dos arquivos de configuração do NGINX ou no arquivo de configuração criado com base nessa documentação.

# Troubleshotting

---

Erros de *timeout* ou conexão encerrada pelo NGINX.

Nota:

Se não for configurado, o padrão de *timeout* do *proxy* reverso do NGINX é 60 segundos. A configuração recomendada é 300 segundos – que é o *timeout* padrão do TOTVS Fluig – podendo ser ajustado para mais ou para menos de acordo com a necessidade.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)

 - Abra o arquivo de configuração do NGINX - /etc/nginx/conf.d - e inclua as diretivas de *timeout* no contexto "server" > "location /" conforme abaixo:

    [?](#)
| `proxy_connect_timeout   300;``proxy_send_timeout      300;``proxy_read_timeout      300;``send_timeout            300;` |
| --- |

 - Após incluir as diretivas de *timeout*, o arquivo "/etc/nginx/conf.d" estará desta forma:

    [?](#)
| `server {````listen 7777 ssl;````server_name fluig.suaempresa.com;````ssl_certificate     /etc/nginx/certs/fluig.cert;````ssl_certificate_key /etc/nginx/certs/fluig.key;``` ```location / {````proxy_pass http://[IP_FLUIG]:7777;````proxy_http_version 1.1;````proxy_set_header Host $host;````proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;````proxy_set_header Upgrade $http_upgrade;````proxy_set_header Connection "upgrade";````}``}` `server {````listen 443 ssl http2;````server_name fluig.suaempresa.com;````server_tokens off;``` ```ssl_certificate     /etc/nginx/certs/fluig.cert;````ssl_certificate_key /etc/nginx/certs/fluig.key;````ssl_protocols       TLSv1.3;````ssl_ciphers         ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!3DES:!MD5:!PSK; # Se necessário complemente com outras chaves Ciphers suportadas````ssl_prefer_server_ciphers on;````ssl_session_cache   shared:SSL:10m;``` ```add_header 'Access-Control-Allow-Origin' 'https://fluig.empresa.com/';````add_header 'Access-Control-Allow-Methods' 'GET, PUT, POST, OPTIONS, DELETE';````add_header 'Access-Control-Request-Method' 'GET, PUT, POST, OPTIONS, DELETE';````add_header 'Access-Control-Allow-Headers' 'Content-Type, X-Requested-With, accept-version';````add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;` ```location / {````proxy_pass          http://[IP_FLUIG]:[PORTA_FLUIG];````proxy_ssl_verify    off;````proxy_ssl_ciphers   HIGH:!aNULL:!MD5;` ```proxy_pass_request_headers on;````proxy_set_header Host $host;````proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;````proxy_set_header X-Forwarded-Proto $scheme;````proxy_set_header X-Forwarded-Server $host;````proxy_set_header X-Forwarded-Host $host:$server_port;````proxy_set_header Upgrade $http_upgrade;````proxy_set_header Connection "upgrade";` ```client_max_body_size       880m;````client_body_buffer_size    256k;` ```proxy_connect_timeout   300;````proxy_send_timeout      300;````proxy_read_timeout      300;````send_timeout            300;` ```proxy_buffer_size          8k;````proxy_buffers              8 32k;````proxy_busy_buffers_size    64k;````proxy_temp_file_write_size 64k;````}``}` |
| --- |

 - Reinicie os serviços NGINX para aplicar a alteração realizada.

Atenção:

Caso o problema de *timeout* persista após aplicar a configuração acima, é necessário avaliar o que está ocorrendo ao invés de apenas aumentar o tempo de *timeout*. Se desejar, entre em contato com o seu ESN e solicite uma proposta de consultoria investigativa Fluig.

# Ocultar informações no cabeçalho HTTP

---

Para prevenir vulnerabilidades, é importante que as informações não fiquem expostas no cabeçalho HTTP. [Clique aqui](/pages/viewpage.action?pageId=626350885) e saiba como ocultá-las.


<!-- anchors: ConfiguraçãodeproxyreversoNGINXcomHTTPS-Objetivo, ConfiguraçãodeproxyreversoNGINXcomHTTPS-Pré-requisitos, ConfiguraçãodeproxyreversoNGINXcomHTTPS-Recomendações, ConfiguraçãodeproxyreversoNGINXcomHTTPS-ConfigurandooNGINXcomoproxyreversocomHTTPS, nginx-settings, nginx-settings-step1, nginx-settings-step2, nginx-settings-step3, nginx-settings-step4, highlighter_319833, nginx-settings-step5, highlighter_229017, nginx-settings-step6, highlighter_784558, nginx-settings-step7, highlighter_798444, nginx-settings-step8, ConfiguraçãodeproxyreversoNGINXcomHTTPS-Troubleshotting, nginx-troubleshooting1, nginx-troubleshooting1-t1-step1, highlighter_874888, nginx-troubleshooting1-t1-step2, highlighter_469842, nginx-troubleshooting1-t1-step3, ConfiguraçãodeproxyreversoNGINXcomHTTPS-OcultarinformaçõesnocabeçalhoHTTP -->
