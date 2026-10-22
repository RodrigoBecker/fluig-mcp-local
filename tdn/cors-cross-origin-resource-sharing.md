---
title: "CORS (Cross-origin Resource Sharing)"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=621778238"
scraped_at: "2026-03-09T04:02:48.370Z"
depth: 2
anchors: 25
child_links: 83
---

# CORS (Cross-origin Resource Sharing)

# Objetivo

---

O objetivo deste guia é apresentar os procedimentos necessários para a configuração de CORS (Compartilhamento de Recursos de Origem Cruzada).

# Considerações iniciais

---

O CORS (Cross-origin Resource Sharing) é um mecanismo utilizado pelos navegadores para compartilhar recursos entre diferentes origens. O CORS é uma especificação do [W3C](https://fetch.spec.whatwg.org/) e faz uso de headers do HTTP para informar aos navegadores se determinado recurso pode ser ou não acessado.

# CORS no TOTVS Fluig Plataforma

---

O TOTVS Fluig Plataforma já contém as configurações necessárias para tratar o CORS. Porém, por padrão aceita conexões de qualquer origem.

## Bloqueando conexão de qualquer origem

---

Para impedir o acesso ao TOTVS Fluig Plataforma de qualquer origem que não seja o próprio produto, faça a seguinte configuração:

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)

 - **A partir da atualização 2.0:**Abra o arquivo **standalone.xml** que está disponível em **[diretório_instalação]/appserver/standalone/configuration** em um editor de texto.

 - **Para atualizações 1.6 até 1.8.2**:Abra o arquivo **domain.xml** que está disponível em **[diretório_instalação]/appserver/domain/configuration** em um editor de texto.

 - No arquivo correspondente à atualização do Fluig que você utiliza (**standalone.xml** ou **domain.xml**), procure pela seguinte linha:<response-header header-name="Access-Control-Allow-Origin" header-value="*" name="Access-Control-Allow-Origin"/>

[?](#)

| `` |
| --- |

 - Substitua o "*" pela URL de acesso ao TOTVS Fluig Plataforma. Por exemplo, se a URL de acesso ao Fluig for "[https://www.minhaempresa.com.br](https://www.minhaempresa.com.br)", ficaria assim:

[?](#)

| `` |
| --- |

 - Reinicie os serviços da plataforma.

## Permitindo a conexão de uma única origem

---

Para permitir o acesso ao TOTVS Fluig Plataforma de uma origem confiável que não seja o próprio produto, faça a seguinte configuração:

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)

 - **A partir da atualização 2.0:**Abra o arquivo **standalone.xml** que está disponível em **[diretório_instalação]/appserver/standalone/configuration** em um editor de texto.

 - **Para atualizações 1.6 até 1.8.2**:Abra o arquivo **domain.xml** que está disponível em **[diretório_instalação]/appserver/domain/configuration** em um editor de texto.

 - No arquivo correspondente à atualização do Fluig que você utiliza (**standalone.xml** ou **domain.xml**), procure pela seguinte linha:

[?](#)

| `` |
| --- |

 - Substitua o "*" pela URL origem que terá permissão de acessar o TOTVS Fluig Plataforma. Por exemplo, se a URL de acesso ao fluig for "[https://www.minhaempresa.com.br](https://www.minhaempresa.com.br)" e deseja-se liberar acesso a um site cuja URL de acesso seja "[https://www.outrosite.com.br](https://www.minhaempresa.com.br)", ficaria assim:

[?](#)

| `` |
| --- |

 - Reinicie os serviços da plataforma

## Permitindo a conexão de múltiplas origens

---

O TOTVS Fluig Plataforma não possui uma forma interna de permitir a conexão de múltiplas origens diferentes.

Mas há uma solução: usar ferramentas de terceiros (como NGINX ou Apache), construindo uma rede DMZ. Inclusive a maneira mais segura de utilizar o TOTVS Fluig Plataforma é não expô-lo diretamente na internet, mas sim através de uma DMZ (Veja mais informações [aqui](/display/fluig/Proxy+reverso)).

Atenção!

Nesse caso, é necessário também **REMOVER** as seguintes linhas do arquivo **standalone.xml** (**a partir da 2.0**) ou **domain.xml** (**1.6 até 1.8.2**):

[?](#)

| ```````` `````````` |
| --- |

### Utilizando NGINX para configurar CORS

---

Importante!

Somente é possível utilizar o NGINX **até a versão** **1.22** por conta da compatibilidade com o módulo nginx-stick-module-ng.

A seguir um exemplo de configuração para o NGINX que pode ser usado como base para configurá-lo para fazer a validação de CORS:

**fluig.conf**

[?](#)

| `upstream fluig-http {````server 192.168.2.100:8080;``}` `server {````listen                    443 ssl;````server_name               *.minhaempresa.com;````server_tokens             off;````ssl_certificate           fullchain.pem;````ssl_certificate_key       privkey.pem;````ssl_protocols             TLSv1.3;````ssl_ciphers               ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!3DES:!MD5:!PSK; # Se necessário complemente com outras chaves Ciphers suportadas;````ssl_prefer_server_ciphers on;````ssl_session_cache         shared:SSL:10m;` ```location / {````set $CORS "";````# Lista de origens permitidas````if ($http_origin ~* "^https://(www.minhaempresa.com|empresa1.com|api.empresa2.com)$") {````set $CORS "O";````}````if ($request_method = 'OPTIONS') {````set $CORS "${CORS}O";````}` ```if ($CORS = "OO") {````add_header Access-Control-Allow-Origin $http_origin;````add_header Access-Control-Allow-Methods 'GET, POST, OPTIONS, PUT';````add_header Access-Control-Allow-Headers 'Accept,Authorization,DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type';````add_header Access-Control-Allow-Credentials 'true';````add_header Access-Control-Max-Age 3600;````add_header Content-Type 'text/plain charset=UTF-8';````add_header Content-Length 0;` ```return 204;````}` ```if ($CORS = "O") {````add_header Access-Control-Allow-Origin $http_origin;````add_header Access-Control-Allow-Methods 'GET, POST, OPTIONS, PUT';````add_header Access-Control-Allow-Headers 'Accept,Authorization,Content-Type,X-Requested-With,User-Agent,If-Modified-Since,Cache-Control';````add_header Access-Control-Allow-Credentials 'true';````add_header Access-Control-Max-Age 3600;````}` ```proxy_pass http://fluig-http;````proxy_ssl_verify    off;````proxy_ssl_ciphers   HIGH:!aNULL:!MD5;` ```proxy_set_header X-Forwarded-Host $host:443;````proxy_set_header X-Forwarded-Server $host;````proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;````proxy_set_header X-Forwarded-Proto https;````proxy_set_header X-Real-IP $remote_addr;``` ```client_max_body_size       880m;````client_body_buffer_size    256k;` ```proxy_connect_timeout      800;````proxy_send_timeout         800;````proxy_read_timeout         800;` ```proxy_buffer_size          8k;````proxy_buffers              8 32k;````proxy_busy_buffers_size    64k;````proxy_temp_file_write_size 64k;````}``}` |
| --- |

Importante!

Recomendamos o uso de chaves e protocolos mais modernos e seguros como os indicados no exemplo.

Porém, outras chaves também são suportadas:

DHE-RSA-AES128-GCM-SHA256:DHE-DSS-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-DSS-AES128-SHA256:DHE-RSA-AES256-SHA256:DHE-DSS-AES256-SHA:DHE-RSA-AES256-SHA

Preencha a diretiva **ssl_ciphers** do fluig.conf substituindo pelos valores suportados acima que estejam de acordo com sua política de segurança. As chaves podem ser validadas em [https://ciphersuite.info/](https://ciphersuite.info/).

E também os protocolos: TLSv1, TLSv1.1 e TLSv1.2

Preencha a diretiva **ssl_protocols** do fluig.conf substituindo pelos valores suportados acima que estejam de acordo com sua política de segurança.

### Utilizando Apache para configurar CORS

---

A seguir um exemplo de configuração para o Apache que pode ser usado como base para configurá-lo para fazer a validação de CORS. Essa configuração é um aprimoramento da configuração descrita em [Proxy reverso](/display/fluig/Proxy+reverso) - Configuração do Apache (SSL) + Fluig (HTTP)

**fluig.conf**

[?](#)

| `SetEnvIf Origin "http(s)?://(www.minhaempresa.com|empresa1.com|api.empresa2.com)$" AccessControlAllowOrigin=$0``Header add Access-Control-Allow-Origin %{AccessControlAllowOrigin}e env=AccessControlAllowOrigin` `Header set Access-Control-Allow-Headers: "Accept,Authorization,DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type"``Header set Access-Control-Allow-Methods: "GET, PUT, POST, OPTIONS, DELETE"``Header Set Access-Control-Request-Method: "GET, PUT, POST, OPTIONS, DELETE"``Header Set Access-Control-Allow-Credentials: "true"``Header Set Access-Control-Max-Age "3600"` `````RewriteEngine On````RewriteCond %{HTTPS} off````RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI}``` `````ServerName minhaempresa.com````RequestHeader set X-Forwarded-Host 192.168.2.100:443````RequestHeader set X-Forwarded-Proto https````SSLProxyEngine On````SSLEngine On````SSLCertificateFile "conf/cert1.pem"````SSLCertificateKeyFile "conf/privkey1.pem"````SSLCertificateChainFile "conf/fullchain1.pem"````ProxyPreserveHost On````ProxyPass / http://192.168.2.100:8080/````ProxyPassReverse / https://minhaempresa.com/````` `````ServerName minhaempresa.com````ProxyPreserveHost On````ProxyPass / ftp://192.168.2.100/````ProxyPassReverse / ftp://192.168.2.100:21/``` |
| --- |


<!-- anchors: CORS(CrossoriginResourceSharing)-Objetivo, CORS(CrossoriginResourceSharing)-Consideraçõesiniciais, CORS(CrossoriginResourceSharing)-CORSnoTOTVSFluigPlataforma, CORS(CrossoriginResourceSharing)-Bloqueandoconexãodequalquerorigem, samples, samples-1, samples-2, highlighter_105837, samples-3, highlighter_15082, samples-4, CORS(CrossoriginResourceSharing)-Permitindoaconexãodeumaúnicaorigem, samples, samples-1, samples-2, highlighter_670504, samples-3, highlighter_900659, samples-4, CORS(CrossoriginResourceSharing)-Permitindoaconexãodemúltiplasorigens, highlighter_466967, CORS(CrossoriginResourceSharing)-UtilizandoNGINXparaconfigurarCORS, highlighter_939010, CORS(CrossoriginResourceSharing)-UtilizandoApacheparaconfigurarCORS, highlighter_356766 -->
