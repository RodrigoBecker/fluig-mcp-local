---
title: "Plataforma em load balance com Apache mod_proxy em Linux"
url: "https://tdn.totvs.com/display/public/fluig/Plataforma+em+load+balance+com+Apache+mod_proxy+em+Linux"
scraped_at: "2026-03-09T04:09:32.346Z"
depth: 2
anchors: 40
child_links: 92
---

# Plataforma em load balance com Apache mod_proxy em Linux

Fique atento!

Esta página foi revisada para considerar as configurações de *server* do TOTVS Fluig para a atualização **1.6.3** ou **superiores**.

Para atualizações entre 1.6.0 e 1.6.2 acesse: [Como configurar a plataforma em load balance com Apache mod_proxy em Linux das releases 1.6.0 à 1.6.2?](/pages/viewpage.action?pageId=337350257)

# Pré-requisitos

---

Para atualizar os parâmetros de configuração, deve-se obedecer aos seguintes pré-requisitos:

- O usuário deve ser administrador da plataforma;

- O usuário deve ter acesso aos arquivos de configuração da plataforma.

Atenção!

Antes de prosseguir com as instruções descritas nessa página, siga com atenção as instruções contidas na documentação [Alta disponibilidade e Balanceamento de carga](https://tdn.totvs.com/pages/viewpage.action?pageId=257622931)

# Considerações iniciais

---

A configuração de balanceamento de carga (*load balance)* é a forma mais simples de se obter distribuição de carga e algum nível de alta disponibilidade.

Importante!

Em ambientes com *load balance*, é muito importante manter todos os servidores com o horário sincronizado.

A grande desvantagem é a necessidade de afinidade de sessão, ou seja, uma vez que o usuário foi autenticado em uma instância, sempre será direcionado para a mesma instância. Nesse caso, se essa instância ficar indisponível, o usuário terá que logar novamente na aplicação.

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

 - **A partir da atualização 2.0**:Abra o arquivo **standalone.xml** que está disponível em **[diretório_instalação]/appserver/standalone/configuration** em um editor de texto.

 - **Para atualizações 1.6.3 até 1.8.2**:Abra o arquivo **domain.xml** que está disponível em **[diretório_instalação]/appserver/domain/configuration** em um editor de texto.

 - No arquivo correspondente à atualização do Fluig que você utiliza (**standalone.xml** ou **domain.xml**), localize a propriedade de *binding* "java:global/wcm/globalDataDir" e altere-a informando o caminho da pasta compartilhada entre as instâncias;

[?](#)

| `` |
| --- |

 - Localize o *subsystem* "urn:com.totvs.technology.wcm:1.0" e altere-o informando o caminho da pasta compartilhada entre as instâncias;

[?](#)

| `` |
| --- |

 - Mova o conteúdo da pasta **[diretório_instalação]/repository/wcmdir** para a pasta **GLOBAL_DATA_DIR/wcmdir**

 - Mova o conteúdo da pasta **[diretório_instalação]/appserver/apps** para a pasta **GLOBAL_DATA_DIR****/apps**

 - Configure o servidor de indexação (fluig Indexer) para ser executado em servidor separado, conforme instruções [aqui](https://tdn.totvs.com/pages/viewpage.action?pageId=257623442).

 - Inicie os serviços **fluig_Indexer,** **fluig_RealTime** e em seguida, inicie o **fluig**.

 - Acesse a plataforma com o usuário "wcmadmin", crie uma nova empresa (*tenant*) e realize as configurações necessárias.

 - Pare o **fluig** e os serviços do **fluig_RealTime**e **fluig_Indexer.**

# Criando uma segunda instância na mesma instalação

---

O Fluig permite executar uma segunda instância na mesma instalação, ou seja, sem a necessidade de instalar tudo novamente.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)

 - Abra em um editor de texto o arquivo **[diretório_instalação]/appserver/domain/configuration/host.xml**

 - Localize a *tag***<servers>**

 - Dentro dela haverão *tags*chamadas **<server>**

 - Adicione uma nova tag **<server>**, conforme exemplo:

  **host.xml**

[?](#)

| ```````````````````````````````````````````` |
| --- |

 - Certifique-se que o atributo **name** contenha um valor que jamais será repetido em outra instância.

 - A primeira instância **sempre** deverá se chamar "fluig1", enquanto as demais instâncias podem ter qualquer nome definido.

 - O atributo **auto-start** indica se a instância deve (true) ou não (false) ser iniciada imediatamente quando o Fluig for iniciado. Se informado **false**, será preciso iniciá-la manualmente posteriormente usando a ferramenta **jboss-cli**. A recomendação é que a primeira instância seja iniciada sozinha e posteriomente sejam iniciadas as demais instâncias.

 - Caso desejar ou for necessário, altere o atributo **port-offset** da *tag***socket-bindings**. Cada nova instância precisa de um valor diferente (múltiplos de 150 são uma boa indicação).

 - Ajuste as configurações de memória na *tag***heap**.

É possível adicionar mais instâncias na mesma instalação. Basta replicar toda a seção **<server>** e tomar o cuidado de alterar, pelo menos, os atributos **port-offset** e **name**.

As instâncias que forem configuradas para não iniciar automaticamente (auto-start="false") devem ser iniciadas manualmente utilizando a ferramenta jboss-cli, que se encontra em **[diretório_instalação]/****appserver/bin**, com o seguinte comando:

No Linux:

**Linux**

[?](#)

| `.``/jboss-cli``.sh --controller=``":9990"` `--connect --``command``=``"/host=master/server-config=fluig2:start"` |
| --- |

No Windows:

**Windows**

[?](#)

| `jboss-cli.bat --controller=``":9990"` `--connect --``command``=``"/host=master/server-config=fluig2:start"` |
| --- |

Onde <ip-da-maquina> é o endereço IP/hostname configurado no arquivo **host.xml** (localizado em [diretório_instalação]/appserver/domain/configuration), na seção:

[?](#)

| ```````` |
| --- |

```

```

# Criando uma instância em outra máquina

---

- [Passo 1](#)
- [Passo 2](#)

 - Instale a aplicação pelo [procedimento normal](/pages/viewpage.action?pageId=257622732) e siga as instruções até o procedimento antes de iniciar o servidor.

 - Abra em um editor de texto o arquivo **[diretório_instalação]/appserver/domain/configuration/host.xml**.

 - Localize a *tag***<servers>**.

 - Dentro dela haverão *tags*chamadas **<server>**. Altere o atributo **name** dessas *tags*. O valor desse atributo precisa ser diferente em cada instância.

# Configurando o balanceador (mod_proxy)

---

O Fluig homologa o Apache com o módulo mod_proxy para fazer o balanceamento de carga.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)

 - Instale o servidor [HTTP Apache](https://httpd.apache.org/download.cgi), versão 2.4.x.

 - Configure o Apache para carregar os módulos necessários (comumente feito através do arquivo **/etc/apache2/mods-enabled/mod_proxy.load**), conforme abaixo.

A ordem de carregamento dos módulos é extremamente importante.

[?](#)

| `LoadModule lbmethod_bybusyness_module /usr/lib/apache2/modules/mod_lbmethod_bybusyness.so``LoadModule proxy_module /usr/lib/apache2/modules/mod_proxy.so``LoadModule slotmem_shm_module /usr/lib/apache2/modules/mod_slotmem_shm.so``LoadModule proxy_balancer_module /usr/lib/apache2/modules/mod_proxy_balancer.so``LoadModule proxy_http_module /usr/lib/apache2/modules/mod_proxy_http.so``LoadModule headers_module /usr/lib/apache2/modules/mod_headers.so``LoadModule lbmethod_byrequests_module /usr/lib/apache2/modules/mod_lbmethod_byrequests.so` |
| --- |

   - A primeira linha indica o tipo de balanceamento que será feito. No exemplo acima, ele é feito por carga do servidor. Para conhecer outras formas, [consulte o manual](https://httpd.apache.org/docs/2.4/mod/mod_proxy_balancer.html) do Apache.

 - Habilite o mod_proxy (em geral isso é feito criando o arquivo **/etc/apache2/sites-enabled/mod_proxy.conf**).

[?](#)

| `Header add Set-Cookie "FLUIGCOOKIE=%{UNIQUE_ID}e.%{BALANCER_WORKER_ROUTE}e; path=/" env=!VARCOOKIE``````ProxyRequests Off````ProxyPreserveHost On` ```````BalancerMember http://{ip servidor 1}:8080 route=fluig1````BalancerMember http://{ip servidor 1}:8230 route=fluig2````BalancerMember http://{ip servidor 2}:8230 route=fluig3````ProxySet stickysession=FLUIGCOOKIE````` ```````SetHandler balancer-manager````Order Deny,Allow````Allow from all````````````Order allow,deny````Allow from all````` ```ProxyPass / balancer://mycluster/ stickysession=FLUIGCOOKIE nofailover=Off````ProxyPassReverse / balancer://mycluster/``` |
| --- |

Atenção!

   - Cada “BalancerMember” indica um servidor e deve apontar para o IP e porta corretos.

   - Um *cookie* chamado “FLUIGCOOKIE” é criado para manter a afinidade da sessão. Sem o *cookie*, o procedimento não irá funcionar.

Atenção!

O procedimento abaixo deve ser realizado para utilizar o serviço de Realtime em Load balance.

## Passos para usar o Load Balance do Realtime

---

 - Realizar a configuração do Realtime para Load Balance conforme apresentado em [Configurando o fluig Realtime para execução em Load Balance](/pages/viewpage.action?pageId=257623378).

 - Adicionar o módulo abaixo, ao final dos demais módulos citados no passo 2.

[?](#)

| `LoadModule rewrite_module /usr/lib/apache2/modules/mod_proxy_wstunnel.so` |
| --- |

 - Realizadas as configurações acima, adicionar o código abaixo ao arquivo de configuração do servidor (Passo 3).

[?](#)

| `Listen 8888``Header add Set-Cookie "SERVERID=sticky.%{BALANCER_WORKER_ROUTE}e; path=/" env=BALANCER_ROUTE_CHANGED``AllowConnect 8888``````` ```ProxyRequests Off````ProxyPreserveHost On```  ```````BalancerMember http://{ip servidor realtime1}:8888 route=load1````BalancerMember http://{ip servidor realtime2}:8888 route=load2````ProxySet stickysession=SERVERID``````` ```````SetHandler balancer-manager````Order Deny,Allow````Allow from all````````````Order allow,deny````Allow from all`````  ```ProxyPass / balancer://mycluster1/ stickysession=SERVERID nofailover=Off````ProxyPassReverse / balancer://mycluster1/```   `Listen 7777``Header add Set-Cookie "SERVERID=sticky.%{BALANCER_WORKER_ROUTE}e; path=/" env=BALANCER_ROUTE_CHANGED``AllowConnect 7777``````` ```ProxyRequests Off````ProxyPreserveHost On`  ```````BalancerMember http://{ip servidor realtime1}:7777 route=read1````BalancerMember http://{ip servidor realtime2}:7777 route=read2````ProxySet stickysession=SERVERID``````` ```````BalancerMember ws://{ip servidor realtime1}:7777 route=read1````BalancerMember ws://{ip servidor realtime2}:7777 route=read2````ProxySet stickysession=SERVERID``````` `` ```RewriteEngine On````RewriteCond %{HTTP:Upgrade} =websocket [NC]````RewriteRule /(.*) balancer://nodes_ws/$1 [P,L]````RewriteCond %{HTTP:Upgrade} !=websocket [NC]````RewriteRule /(.*) balancer://nodes_polling/$1 [P,L]` `` `` |
| --- |

# Ambientes HTTPS

---

Quando o usuário estiver usando um ambiente HTTPS, é necessário que as *flags* de segurança "*Secure*" e "*HttpOnly*" dos *cookies* estejam habilitadas na sessão. Para isso, siga a instrução abaixo:

- Editar o arquivo **/etc/apache2/sites-enabled/mod_proxy.conf** e adicionar a seguinte linha no final do arquivo:

[?](#)

| `Header edit Set-Cookie ^(.*)$ $1;HttpOnly;Secure` |
| --- |

Importante!

Ao utilizar balanceamento de carga em ambientes com HTTPS, a [configuração de HTTPS](https://tdn.totvs.com/pages/viewpage.action?pageId=354472893#Configura%C3%A7%C3%A3oHTTPSdaplataforma-Configura%C3%A7%C3%A3odeHTTPSmanual) deve ser replicada manualmente para todos os servidores do Fluig.


<!-- anchors: PlataformaemloadbalancecomApachemod_proxyemLinux-Pré-requisitos, PlataformaemloadbalancecomApachemod_proxyemLinux-Consideraçõesiniciais, PlataformaemloadbalancecomApachemod_proxyemLinux-Instalandoaprimeirainstância, FirstNode, FirstNode-1, FirstNode-2, FirstNode-3, highlighter_575341, highlighter_990805, FirstNode-4, FirstNode-5, FirstNode-6, PlataformaemloadbalancecomApachemod_proxyemLinux-Criandoumasegundainstâncianamesmainstalação, SecondInstance, SecondInstance-1, highlighter_322622, SecondInstance-2, SecondInstance-3, SecondInstance-4, SecondInstance-5, highlighter_521418, highlighter_962866, highlighter_258215, PlataformaemloadbalancecomApachemod_proxyemLinux-Criandoumainstânciaemoutramáquina, ThirdInstance, ThirdInstance-1, ThirdInstance-2, PlataformaemloadbalancecomApachemod_proxyemLinux-Configurandoobalanceador(mod_proxy), ModProxy, ModProxy-1, ModProxy-2, highlighter_467849, ModProxy-3, highlighter_866407, ModProxy-4, PlataformaemloadbalancecomApachemod_proxyemLinux-PassosparausaroLoadBalancedoRealtime, highlighter_740581, highlighter_215455, PlataformaemloadbalancecomApachemod_proxyemLinux-AmbientesHTTPS, highlighter_860787 -->
