---
title: "Configuração de proxy reverso Apache"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=877162376"
scraped_at: "2026-03-09T04:10:11.814Z"
depth: 2
anchors: 27
child_links: 90
---

# Configuração de proxy reverso Apache

Fique atento!

Esta página foi revisada para considerar as configurações de *server* do TOTVS Fluig **a partir** da atualização **1.6**.

# Objetivo

---

O objetivo deste guia é descrever os procedimentos para a configuração de *proxy* reverso utilizando Apache na plataforma.

Dicas!

- Após a configuração do *proxy* reverso, não esqueça de alterar a URL de acesso ao portal nas Configurações do sistema da plataforma. [Clique aqui](https://tdn.totvs.com/x/EO4KDg)e saiba como fazer.

- Obtenha mais informações sobre DMZ em [Topologia DMZ](/display/fluig/Topologia+DMZ).

- [Clique aqui](https://httpd.apache.org/docs/current/platform/windows.html) para ver a documentação do próprio fornecedor sobre a configuração de *proxy* reverso utilizando **Apache no Windows**.

- Se não for configurado, o padrão de *timeout* do *proxy* reverso do Apache é 60 segundos. A configuração recomendada é 300 segundos – que é o *timeout* padrão do TOTVS Fluig – podendo ser ajustado para mais ou para menos de acordo com a necessidade.

Importante!

Salientamos que, ao utilizar um *proxy* reverso, uma prática de segurança recomendada para a plataforma é não expor o servidor de aplicação diretamente na Internet.

[Clique aqui](/pages/viewpage.action?pageId=611010249) e veja outras boas práticas de segurança recomendadas para o seu ambiente.

# Pré-requisitos

---

- Apache™ versão 2.4. O instalador e a documentação oficial do Apache™ podem ser encontrados em [http://httpd.apache.org/](http://httpd.apache.org/).

- Se for utilizar SSL, também será necessário converter o certificado utilizado na configuração da plataforma para os formatos **.cer**, **.key** e **.pem**. O guia para configurar a plataforma em SSL (HTTPS) encontra-se [aqui](https://tdn.totvs.com/x/vdMgFQ).

- Para a porta do realtime (7777) no Apache é necessário habilitar o módulo SSL em todos os vhosts que utilizarem o *realtime*   **SSLEngine On **e **SSLProxyEngine On**.

# Módulos Apache

---

Certifique-se de que os seguintes módulos estão sendo carregados pelo Apache:

Nota:

Na versão 2.4 do Apache no Windows, o módulo **LoadModule proxy_fdpass_module modules/mod_proxy_fdpass.so** não existe.

[?](#)

| `# Módulos para WebDAV``LoadModule dav_module modules/mod_dav.so``LoadModule dav_fs_module modules/mod_dav_fs.so``LoadModule dav_lock_module modules/mod_dav_lock.so` `# Módulos para proxy reverso``LoadModule proxy_module modules/mod_proxy.so``LoadModule proxy_ajp_module modules/mod_proxy_ajp.so``LoadModule proxy_connect_module modules/mod_proxy_connect.so``LoadModule proxy_express_module modules/mod_proxy_express.so``LoadModule proxy_fdpass_module modules/mod_proxy_fdpass.so``LoadModule proxy_ftp_module modules/mod_proxy_ftp.so``LoadModule proxy_http_module modules/mod_proxy_http.so` |
| --- |

Se for utilizar SSL no lado DMZ, certifique-se ainda de que o seguinte módulo está sendo carregado pelo Apache:

[?](#)

| `# Módulo para HTTPS``LoadModule ssl_module modules/mod_ssl.so` |
| --- |

# Configuração do Apache (sem SSL)

---

**01**. Acesse a pasta **/etc/httpd/conf.d.**

Nota:

O caminho da pasta pode variar, esse caminho do exemplo é de uma instalação Linux CentOS.

**02**. Crie um arquivo de configuração para a plataforma (chamado **fluig.conf**, por exemplo), com o seguinte conteúdo:

[?](#)

| `Listen 7777``Listen 21``Header set Access-Control-Allow-Origin: "http://"``Header set Access-Control-Allow-Headers: "Content-Type, X-Requested-With, accept-version"``Header set Access-Control-Allow-Methods: "GET, PUT, OPTIONS, DELETE, POST"``Header Set Access-Control-Request-Method: "GET, PUT, OPTIONS, DELETE, POST"``ProxyRequests Off``ProxyVia On``AllowConnect 7777``AllowConnect 21` |
| --- |

### Listener HTTP

---

[?](#)

| `````ServerName ````ProxyPreserveHost On````ProxyPass / http://:/````ProxyPassReverse / http:///``` |
| --- |

### Listener do RealTime

---

[?](#)

| `````RequestHeader set X-Forwarded-Proto https````RequestHeader set Access-Control-Allow-Origin: "https://"````RequestHeader set X-Forwarded-Host  :7777` ```ServerName  ` ```SSLProxyEngine On````SSLEngine On` ```ProxyRequests Off````ProxyPreserveHost On````Include /etc/letsencrypt/options-ssl-apache.conf````SSLCertificateFile  /cert.pem````SSLCertificateKeyFile /privkey.pem` ```# allow for upgrading to websockets````RewriteEngine On````RewriteCond %{HTTP:Upgrade} =websocket [NC]````RewriteRule /(.*)           ws://:7777/$1 [P,L]````RewriteCond %{HTTP:Upgrade} !=websocket [NC]````RewriteRule /(.*)           http://:7777/$1 [P,L]`  ```ProxyPass "/" "http://:7777"````ProxyPassReverse "/" "http://:7777/"` ```ProxyPass "/" "ws://:7777/"````ProxyPassReverse "/" "ws://:7777/"` `` |
| --- |

### Listener FTP

---

[?](#)

| `````ServerName ````ProxyPreserveHost On````ProxyPass / ftp:///````ProxyPassReverse / ftp://:21/``` |
| --- |

Legenda

**<Nome externo do servidor>**: nome que aparecerá na URL do navegador, por exemplo, http://**meuservidor.com.br**.

**<IP do servidor Fluig>**: endereço IP interno do servidor onde o Fluig está rodando, por exemplo, 10.10.2.35.

```

```

# Configuração do Apache (SSL) + Fluig (HTTP)

---

Se não for utilizado HTTPS na plataforma, deve possuir a seguinte configuração:

[?](#)

| `Header set Access-Control-Allow-Origin: "https://meuservidor.fluig.com/"``Header set Access-Control-Allow-Headers: "Content-Type, X-Requested-With, accept-version"``Header set Access-Control-Allow-Methods: "GET, PUT, OPTIONS, DELETE, POST"``Header Set Access-Control-Request-Method: "GET, PUT, OPTIONS, DELETE, POST"```  `````RewriteEngine On````RewriteCond %{HTTPS} off````RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI}``` `````ServerName ````RequestHeader set X-Forwarded-Host :443````RequestHeader set X-Forwarded-Proto https````SSLProxyEngine On````SSLEngine On````SSLCertificateFile .crt````SSLCertificateKeyFile .key````SSLCertificateChainFile .pem````ProxyPreserveHost On````ProxyPass / http://:/````ProxyPassReverse / https://```` `````ServerName ````ProxyPreserveHost On````ProxyPass / ftp:///````ProxyPassReverse / ftp://:21/``` |
| --- |

Legenda

<**Nome externo do servidor**>: nome que aparecerá na URL do navegador, por exemplo, http://**meuservidor.com.br**.

<**diretorio-certificado**>: diretório e nome do arquivo do certificado de domínio enviado pela entidade certificadora, por exemplo: /etc/httpd/ssl/cert-dominio.crt

<**diretorio-chave-privada**>: diretório e nome do arquivo da chave privada, enviada pela entidade certificadora, por exemplo: /etc/httpd/ssl/chave-privada.key

<**diretorio-cadeia-certificados**>: diretório e nome do arquivo que contém a cadeia de certificados, por exemplo: /etc/httpd/ssl/cert-cadeia-certificados.pem

Nota:

O caminho da pasta pode variar, esse caminho do exemplo é de uma instalação Linux CentOS.

**DICA**: O arquivo referente à cadeia de certificados pode ser criado concatenando os certificados de domínio, intermediários e raiz. No Linux, isto pode ser feito com o comando abaixo:

[?](#)

| `cat` `cert-dominio.crt cert-intermediario.crt cert-raiz.crt > cert-cadeia-certificados.pem` |
| --- |

**OBS:** Os certificados intermediários e raiz normalmente podem ser encontrados para *download* no *site* da entidade certificadora que você escolheu.

<**IP do servidor fluig**>: endereço IP interno do servidor onde o Fluig está rodando, por exemplo, 10.10.2.35.

## Configuração para acessar a plataforma via mobile/OAuth

---

Essa configuração deve ser realizada para garantir que a requisição chega ao conector **HTTP** com o mesmo protocolo a partir do qual a requisição foi originada.

- [A partir da 2.0](#)
- [1.6 até 1.8.2](#)

**01**. Edite o arquivo **standalone.xml** localizado no diretório do servidor de aplicação **[diretório_instalação]/appserver/standalone/configuration/**.

**02**. Localize o seguinte código:

  **standalone.xml**

[?](#)

| `````````````````````````````````````````````` |
| --- |

**03**. Na tag **http-listener** inclua o atributo **proxy-address-forwarding** com valor **true**, conforme mostrado abaixo:

[?](#)

| `` |
| --- |

**01**. Edite o arquivo **domain.xml** localizado no diretório do servidor de aplicação **[diretório_instalação]/appserver/domain/configuration/**.

**02**. Localize o seguinte código:

  **domain.xml**

[?](#)

| `````````````````````````````````````````````` |
| --- |

**03**. Na tag **http-listener** inclua o atributo **proxy-address-forwarding** com valor **true**, conforme mostrado abaixo:

[?](#)

| `` |
| --- |

# Configuração do Apache (SSL) + Fluig (SSL)

---

**01**. Acesse a pasta **/etc/httpd/conf.d**.

Nota:

O caminho da pasta pode variar, esse caminho do exemplo é de uma instalação Linux CentOS.

**02**. Crie um arquivo de configuração para a plataforma (chamado fluig.conf, por exemplo), com o conteúdo abaixo, caso seja utilizado HTTPS também no lado do Fluig.

Importante!

Lembrando que, se o seu ambiente utiliza [balanceamento de carga](/display/fluig/Alta+disponibilidade+e+balanceamento+de+carga), a [configuração de HTTPS](https://tdn.totvs.com/pages/viewpage.action?pageId=354472893#Configura%C3%A7%C3%A3oHTTPSdaplataforma-Configura%C3%A7%C3%A3odeHTTPSmanual) deve ser replicada manualmente para todos os servidores do Fluig.

[?](#)

| `Header set Access-Control-Allow-Origin: "https://"``Header set Access-Control-Allow-Headers: "Content-Type, X-Requested-With, accept-version"``Header set Access-Control-Allow-Methods: "GET, PUT, OPTIONS, DELETE, POST"``Header Set Access-Control-Request-Method: "GET, PUT, OPTIONS, DELETE, POST"`  `````ServerName ````RequestHeader set X-Forwarded-Host :443````RequestHeader set X-Forwarded-Proto https````SSLProxyEngine On````SSLEngine On````SSLCertificateFile .crt````SSLCertificateKeyFile .key````SSLCertificateChainFile .pem````ProxyPreserveHost On````ProxyPass / https://:/````ProxyPassReverse / https:///````` `````ServerName ````ProxyPreserveHost On````ProxyPass / ftp:///````ProxyPassReverse / ftp://:21/``` |
| --- |

# Ocultar informações no cabeçalho HTTP

---

Para prevenir vulnerabilidades, é importante que as informações não fiquem expostas no cabeçalho HTTP. [Clique aqui](/pages/viewpage.action?pageId=626350885) e saiba como ocultá-las.


<!-- anchors: ConfiguraçãodeproxyreversoApache-Objetivo, ConfiguraçãodeproxyreversoApache-Pré-requisitos, ConfiguraçãodeproxyreversoApache-MódulosApache, highlighter_125799, highlighter_552692, ConfiguraçãodeproxyreversoApache-ConfiguraçãodoApache(semSSL), highlighter_226075, ConfiguraçãodeproxyreversoApache-ListenerHTTP, highlighter_316183, ConfiguraçãodeproxyreversoApache-ListenerdoRealTime, highlighter_672321, ConfiguraçãodeproxyreversoApache-ListenerFTP, highlighter_590147, ConfiguraçãodeproxyreversoApache-ConfiguraçãodoApache(SSL)+Fluig(HTTP), highlighter_292532, highlighter_954216, ConfiguraçãodeproxyreversoApache-Configuraçãoparaacessaraplataformaviamobile/OAuth, Versão, Versão-1, highlighter_762551, highlighter_243766, Versão-2, highlighter_29712, highlighter_524595, ConfiguraçãodeproxyreversoApache-ConfiguraçãodoApache(SSL)+Fluig(SSL), highlighter_633091, ConfiguraçãodeproxyreversoApache-OcultarinformaçõesnocabeçalhoHTTP -->
