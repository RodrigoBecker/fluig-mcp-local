---
title: "ARQ - Plataforma em load balance com NGINX em Linux da atualização 1.6.3 até 1.8.2"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=955498748"
scraped_at: "2026-03-09T04:43:12.751Z"
depth: 3
anchors: 43
child_links: 66
---

# ARQ - Plataforma em load balance com NGINX em Linux da atualização 1.6.3 até 1.8.2

Fique atento!

Esta página é válida para as atualizações **1.6.3 até 1.8.2**** **do TOTVS Fluig.

Se você utiliza a atualização **Voyager (2.0) ou superior**, acesse a página original [Plataforma em *load balance* com NGINX em Linux](/display/fluig/Plataforma+em+load+balance+com+NGINX+em+Linux).

# Pré-requisitos

---

Para atualizar os parâmetros de configuração, deve-se obedecer aos seguintes pré-requisitos:

- O usuário deve ser administrador da plataforma;
- O usuário deve ter acesso aos arquivos de configuração da plataforma;
- Possuir o NGINX na versão 1.20.1 ou superior instalado. Detalhes de instalação e configuração do NGINX estão disponíveis na [documentação oficial](https://docs.nginx.com/);Importante! Somente é possível utilizar o NGINX **até a versão** **1.22** por conta da compatibilidade com o módulo nginx-stick-module-ng.
- Possuir a configuração de [*proxy* reverso](/pages/viewpage.action?pageId=736971727);
- Possuir o [nginx-sticky-module-ng](https://bitbucket.org/nginx-goodies/nginx-sticky-module-ng/src/master/) (módulo externo), para implementar o comportamento de *sticky sessions* sem o uso do NGINX Plus. Esse procedimento só é necessário realizar na versão *open-source* do NGINX.

Atenção!

Antes de prosseguir com as instruções descritas nessa página, siga com atenção as instruções contidas na documentação [Alta disponibilidade e Balanceamento de carga](https://tdn.totvs.com/pages/viewpage.action?pageId=257622931).

# Considerações iniciais

---

A configuração de balanceamento de carga (*load balance*) é a forma mais simples de se obter distribuição de carga e algum nível de alta disponibilidade.

Importante!

Em ambientes com *load balance*, é muito importante manter todos os servidores com o horário sincronizado.

A grande desvantagem é a necessidade de afinidade de sessão, ou seja, uma vez que o usuário foi autenticado em uma instância, sempre será direcionado para a mesma instância. Nesse caso, se essa instância ficar indisponível, o usuário terá que se autenticar novamente na aplicação.

# Instalando a primeira instância

---

Siga os procedimentos abaixo para realizar a instalação da primeira instância do Fluig em um ambiente*load balance.*

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)
- [Passo 6](#)

 - Faça uma instalação normal, conforme o [Guia de instalação da plataforma](/pages/viewpage.action?pageId=257622732), mas **não** inicie os serviços do Fluig.

 - Abra o arquivo **domain.xml** que está disponível em **[diretório_instalação]/appserver/domain/configuration** em um editor de texto.

 - Localize a propriedade de *binding* "java:global/wcm/globalDataDir" e altere-a informando o caminho da pasta compartilhada entre as instâncias.

    [?](#)
| `` |
| --- |

 - Localize também o *subsystem* "urn:com.totvs.technology.wcm:1.0" e altere-o informando o caminho da pasta compartilhada entre as instâncias.

    [?](#)
| `` |
| --- |

 - Mova o conteúdo da pasta **[diretório_instalação]/repository/wcmdir** para a pasta **GLOBAL_DATA_DIR/wcmdir**.

 - Mova o conteúdo da pasta **[diretório_instalação]/appserver/apps** para a pasta **GLOBAL_DATA_DIR****/apps**.

 - Configure o servidor de indexação (Fluig Indexer) para ser executado em servidor separado, conforme instruções descritas em [Servidor de indexação único](/pages/viewpage.action?pageId=257623442).

 - Inicie os serviços **fluig_Indexer,** **fluig_RealTime** e em seguida, inicie o **Fluig**.

 - Acesse a plataforma com o usuário "wcmadmin", crie uma nova empresa (*tenant*) e realize as configurações necessárias.

 - Pare o **Fluig** e os serviços do **fluig_RealTime**e **fluig_Indexer**.

# Criando uma segunda instância na mesma instalação

---

O Fluig permite executar uma segunda instância na mesma instalação, ou seja, sem a necessidade de instalar tudo novamente.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)

 - Abra o arquivo **[diretório_instalação]/appserver/domain/configuration/host.xml** em um editor de texto.

 - Localize a *tag***<servers>**. Dentro dela existem *tags*chamadas **<server>**.

 - Adicione uma nova tag **<server>**, conforme o exemplo:

  **host.xml**

[?](#)

| ```````````````````````````````````````````` |
| --- |

 - Certifique-se de que o atributo **name** contenha um valor que jamais será repetido em outra instância.

 - A primeira instância **sempre** deverá se chamar "fluig1", enquanto as demais instâncias podem ter qualquer nome definido.

 - O atributo **auto-start** indica se a instância deve (*true*) ou não (*false*) ser iniciada imediatamente quando o Fluig for iniciado. Se informado ***false***, será preciso iniciá-la manualmente posteriormente, usando a ferramenta **jboss-cli**.A recomendação é que a primeira instância seja iniciada sozinha e posteriormente sejam iniciadas as demais instâncias.

 - Se desejar ou for necessário, altere o atributo **port-offset** da *tag***socket-bindings**. Cada nova instância precisa de um valor diferente (múltiplos de 150 são uma boa indicação).

 - Ajuste as configurações de memória na *tag***heap**.

É possível adicionar mais instâncias na mesma instalação. Basta replicar toda a seção **<server>** e tomar o cuidado de alterar, pelo menos, os atributos **port-offset** e **name**.

As instâncias que forem configuradas para não iniciar automaticamente (auto-start="false"), devem ser iniciadas manualmente utilizando a ferramenta jboss-cli, que se encontra em **[diretório_instalação]/****appserver/bin**, com o comando abaixo, de acordo com o sistema operacional:

- **no Linux**:**Linux**
[?](#)
| `.``/jboss-cli``.sh --controller=``":9990"` `--connect --``command``=``"/host=master/server-config=fluig2:start"` |
| --- |
- **no Windows**:**Windows**
[?](#)
| `jboss-cli.bat --controller=``":9990"` `--connect --``command``=``"/host=master/server-config=fluig2:start"` |
| --- |

Onde <ip-da-maquina> é o endereço IP/hostname configurado no arquivo **host.xml** (localizado em [diretório_instalação]/appserver/domain/configuration), na seção:

[?](#)

| ```````` |
| --- |

# Criando uma instância em outra máquina

---

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)

 - Instale a aplicação pelo [procedimento normal](/pages/viewpage.action?pageId=257622732) e siga as instruções até o procedimento antes de iniciar o servidor.

 - Abra o arquivo **[diretório_instalação]/appserver/domain/configuration/host.xml** em um editor de texto.

 - Localize a *tag***<servers>**. Dentro dela existem *tags*chamadas **<server>**.

 - Altere o atributo **name** dessas *tags*. O valor desse atributo precisa ser diferente em cada instância.

 - Abra o arquivo **domain.xml** que está disponível em **[diretório_instalação]/appserver/domain/configuration** em um editor de texto.

 - Localize a propriedade de *binding* "java:global/wcm/globalDataDir" e altere-a informando o caminho da pasta compartilhada entre as instâncias;

    [?](#)
| `` |
| --- |

 - Localize também o *subsystem* "urn:com.totvs.technology.wcm:1.0" e altere-o informando o caminho da pasta compartilhada entre as instâncias.

    [?](#)
| `` |
| --- |

# Configurando o balanceador

---

O Fluig homologa o NGINX com o *upstream* para fazer o balanceamento de carga.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)

 - Instale o servidor [NGINX](https://nginx.org/en/), versão 1.20.1 ou superior.

 - Configure o módulo [nginx-sticky-module-ng](https://bitbucket.org/nginx-goodies/nginx-sticky-module-ng/src/master/) no NGINX para utilizar a afinidade de sessão.

 - Habilite o balanceamento com o parâmetro **upstream** (geralmente é feito criando o arquivo**/etc/nginx/nginx.conf** ou **/etc/nginx/conf.d**).

   Atenção! 

    Cada “**BalancerMember**” indica um servidor e deve apontar para o IP e a porta corretos.Um *cookie* chamado “**FLUIGCOOKIE**” é criado para manter a afinidade da sessão. Sem o *cookie*, o procedimento não irá funcionar.

    **nginx.conf**

    [?](#)
| `upstream mycluster {````server {Ip do servidor 1}:{PORTA};````server {Ip do servidor 2}:{PORTA};````server {Ip do servidor 3}:{PORTA};````sticky name=FLUIGCOOKIE expires=1h path=/ domain=.exemplo.com;``}` `server {````listen 80;````server_name fluig.exemplo.com;``` ```server_tokens off;` ```add_header 'Access-Control-Allow-Origin' 'http://mycluster';````add_header 'Access-Control-Allow-Methods' 'GET, PUT, POST, OPTIONS, DELETE';````add_header 'Access-Control-Request-Method' 'GET, PUT, POST, OPTIONS, DELETE';````add_header 'Access-Control-Allow-Headers' 'Content-Type, X-Requested-With, accept-version';````add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;` ```location / {````proxy_pass http://mycluster;````add_header Set-Cookie "FLUIGCOOKIE=$request_id.$upstream_addr; Path=/";` ```proxy_pass_request_headers on;````proxy_set_header Host $http_host;````proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;````proxy_set_header X-Forwarded-Proto $scheme;````proxy_set_header X-Forwarded-Server $host;````proxy_set_header X-Forwarded-Host $host:$server_port;````proxy_set_header X-Real-IP $remote_addr;` ```client_max_body_size       880m;````client_body_buffer_size    256k;` ```proxy_connect_timeout      800;````proxy_send_timeout         800;````proxy_read_timeout         800;` ```proxy_buffer_size          8k;````proxy_buffers              8 32k;````proxy_busy_buffers_size    64k;````proxy_temp_file_write_size 64k;````}` `}` |
| --- |

Importante!

O procedimento abaixo deve ser realizado para utilizar o serviço de Realtime em Load balance.

**Passos para usar o Load Balance do Realtime**

 - Faça a configuração do Realtime para Load Balance conforme descrito em [Configurando o Fluig Realtime para execução em Load Balance](/pages/viewpage.action?pageId=257623378).

 - Feitas as configurações acima, adicione o código abaixo no arquivo de configuração do servidor (Passo 3).

    **nginx.conf**

    [?](#)
| `upstream nodeCluster1 {````sticky name=SERVERID expires=1h path=/ domain=exemplo.com  httponly;` ```server {ip_servidor_realtime1}:8888;````server {ip_servidor_realtime2}:8888;``}` `server {````listen 8888;` ```add_header Set-Cookie "SERVERID=sticky.$upstream_cookie_SERVERID; Path=/";` ```location / {````proxy_pass http://nodeCluster1;````proxy_cookie_path / "/; HTTPOnly; Secure";````}``}` `upstream nodes_polling {````sticky name=SERVERID expires=1h path=/ domain=exemplo.com httponly;` ```server {ip_servidor_realtime1}:7777;````server {ip_servidor_realtime2}:7777;``}` `upstream nodes_ws {````sticky name=SERVERID expires=1h path=/ domain=exemplo.com httponly;` ```server {ip_servidor_realtime1}:7777;````server {ip_servidor_realtime2}:7777;``}` `server {````listen 7777;` ```add_header Set-Cookie "SERVERID=sticky.$upstream_cookie_SERVERID; Path=/";` ```location / {````set $upstream "nodes_polling";``` ```if ($http_upgrade = "websocket") {````set $upstream "nodes_ws";````}````proxy_pass http://$upstream;` ```}``}` |
| --- |

 - Após efetuar os passos anteriores, o arquivo "/etc/nginx/conf.d" estará desta forma:

    **nginx.conf**

    [?](#)
| `upstream mycluster {````server {Ip do servidor 1}:{PORTA};````server {Ip do servidor 2}:{PORTA};````server {Ip do servidor 3}:{PORTA};````sticky name=FLUIGCOOKIE expires=1h path=/ domain=.exemplo.com;``}` `server {````listen 80;````server_name fluig.exemplo.com;``` ```server_tokens off;` ```add_header 'Access-Control-Allow-Origin' 'http://mycluster';````add_header 'Access-Control-Allow-Methods' 'GET, PUT, POST, OPTIONS, DELETE';````add_header 'Access-Control-Request-Method' 'GET, PUT, POST, OPTIONS, DELETE';````add_header 'Access-Control-Allow-Headers' 'Content-Type, X-Requested-With, accept-version';````add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;` ```location / {````proxy_pass http://mycluster;````add_header Set-Cookie "FLUIGCOOKIE=$request_id.$upstream_addr; Path=/";` ```proxy_pass_request_headers on;````proxy_set_header Host $http_host;````proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;````proxy_set_header X-Forwarded-Proto $scheme;````proxy_set_header X-Forwarded-Server $host;````proxy_set_header X-Forwarded-Host $host:$server_port;````proxy_set_header X-Real-IP $remote_addr;` ```client_max_body_size       880m;````client_body_buffer_size    256k;` ```proxy_connect_timeout      800;````proxy_send_timeout         800;````proxy_read_timeout         800;` ```proxy_buffer_size          8k;````proxy_buffers              8 32k;````proxy_busy_buffers_size    64k;````proxy_temp_file_write_size 64k;````}` `}` `upstream nodeCluster1 {````sticky name=SERVERID expires=1h path=/ domain=exemplo.com  httponly;` ```server {ip_servidor_realtime1}:8888;````server {ip_servidor_realtime2}:8888;``}` `server {````listen 8888;` ```add_header Set-Cookie "SERVERID=sticky.$upstream_cookie_SERVERID; Path=/";` ```location / {````proxy_pass http://nodeCluster1;````proxy_cookie_path / "/; HTTPOnly; Secure";````}``}` `upstream nodes_polling {````sticky name=SERVERID expires=1h path=/ domain=exemplo.com httponly;` ```server {ip_servidor_realtime1}:7777;````server {ip_servidor_realtime2}:7777;``}` `upstream nodes_ws {````sticky name=SERVERID expires=1h path=/ domain=exemplo.com httponly;` ```server {ip_servidor_realtime1}:7777;````server {ip_servidor_realtime2}:7777;``}` `server {````listen 7777;` ```add_header Set-Cookie "SERVERID=sticky.$upstream_cookie_SERVERID; Path=/";` ```location / {````set $upstream "nodes_polling";``` ```if ($http_upgrade = "websocket") {````set $upstream "nodes_ws";````}````proxy_pass http://$upstream;` ```}``}` |
| --- |

# Ambiente HTTPS

---

Quando o Fluig estiver configurado em HTTPS, é necessário que as *flags* de segurança "*Secure*" e "*HttpOnly*" dos *cookies* estejam habilitadas na sessão. Para isso, siga a instrução abaixo:

[?](#)

| `sticky name=SERVERID expires=1h path=/ domain=exemplo.com  httponly secure;` |
| --- |

Importante!

Ao utilizar balanceamento de carga em ambientes com HTTPS, a [configuração de HTTPS](https://tdn.totvs.com/pages/viewpage.action?pageId=354472893#Configura%C3%A7%C3%A3oHTTPSdaplataforma-Configura%C3%A7%C3%A3odeHTTPSmanual) deve ser replicada manualmente para todos os servidores do Fluig.


<!-- anchors: ARQPlataformaemloadbalancecomNGINXemLinuxdaatualização1.6.3até1.8.2-Pré-requisitos, ARQPlataformaemloadbalancecomNGINXemLinuxdaatualização1.6.3até1.8.2-Consideraçõesiniciais, ARQPlataformaemloadbalancecomNGINXemLinuxdaatualização1.6.3até1.8.2-Instalandoaprimeirainstância, FirstNode, FirstNode-1, FirstNode-2, FirstNode-3, highlighter_218587, highlighter_826995, FirstNode-4, FirstNode-5, FirstNode-6, ARQPlataformaemloadbalancecomNGINXemLinuxdaatualização1.6.3até1.8.2-Criandoumasegundainstâncianamesmainstalação, SecondInstance, SecondInstance-1, highlighter_713738, SecondInstance-2, SecondInstance-3, SecondInstance-4, SecondInstance-5, highlighter_611920, highlighter_686294, highlighter_337241, ARQPlataformaemloadbalancecomNGINXemLinuxdaatualização1.6.3até1.8.2-Criandoumainstânciaemoutramáquina, ThirdInstance, ThirdInstance-1, ThirdInstance-2, ThirdInstance-3, ThirdInstance-4, highlighter_936426, highlighter_212224, ARQPlataformaemloadbalancecomNGINXemLinuxdaatualização1.6.3até1.8.2-Configurandoobalanceador, ModProxy, ModProxy-1, ModProxy-2, ModProxy-3, highlighter_804259, ModProxy-4, highlighter_891661, ModProxy-5, highlighter_966630, ARQPlataformaemloadbalancecomNGINXemLinuxdaatualização1.6.3até1.8.2-AmbienteHTTPS, highlighter_850009 -->
