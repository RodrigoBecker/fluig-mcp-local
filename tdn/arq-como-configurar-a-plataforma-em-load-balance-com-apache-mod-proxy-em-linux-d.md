---
title: "ARQ - Como configurar a plataforma em load balance com Apache mod_proxy em Linux das releases 1.6.0 a 1.6.2?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=337350257"
scraped_at: "2026-03-09T04:42:55.540Z"
depth: 3
anchors: 33
child_links: 63
---

# ARQ - Como configurar a plataforma em load balance com Apache mod_proxy em Linux das releases 1.6.0 a 1.6.2?

Atenção

Esta página foi revisada para considerar as configurações da atualização 1.6.0 à 1.6.2.

Para atualizações 1.6.3 ou superiores, acesse: [Plataforma em load balance com Apache mod_proxy em Linux](/display/fluig/Plataforma+em+load+balance+com+Apache+mod_proxy+em+Linux).

# Índice

# Plataforma

**Produto:**TOTVS Fluig Plataforma

**Versão:** da 1.6.0 à 1.6.2

# Ocorrência

Como configurar a plataforma com balanceamento de carga (*load balance*) utilizando Apache mod_proxy em Linux das releases 1.6.0 à 1.6.2? 

# Solução

Importante

Antes de prosseguir com as instruções descritas nessa página, siga com atenção as instruções contidas na documentação [ARQ - Como configurar load balance, alta disponibilidade e tolerância a falha na release 1.6.0 a 1.6.2?](/pages/viewpage.action?pageId=337349115)

A configuração em *load balance* é a forma mais simples de se obter distribuição de carga e algum nível de alta disponibilidade.

A grande desvantagem é a necessidade de afinidade de sessão, ou seja, uma vez que o usuário foi autenticado em uma instância, sempre será direcionado para a mesma instância. Nesse caso, se essa instância ficar indisponível, o usuário terá que logar novamente na aplicação.

## Instalando a primeira instância

Siga os procedimentos abaixo para realizar a instalação da primeira instância da plataforma em um ambiente Load Balance.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)
- [Passo 6](#)

 - Faça uma instalação normal, conforme o [Guia de instalação](/pages/viewpage.action?pageId=257622732), mas **não** inicie os serviços da plataforma.

 - Abra em um editor de texto o arquivo **[Instalação fluig]/appserver/domain/configuration/domain.xml** e altere as seguintes configurações:

 - Localize a propriedade de *binding* "java:global/wcm/globalDataDir" e altere-a informando o caminho da pasta compartilhada entre as instâncias;

[?](#)

| `` |
| --- |

 - Localize o *subsystem* "urn:com.totvs.technology.wcm:1.0" e altere-o informando o caminho da pasta compartilhada entre as instâncias;

[?](#)

| `` |
| --- |

 - Abra em um editor de texto o arquivo **[Instalação fluig]/repository/wcmdir/config/configuration.properties** e altere a seguinte configuração:

 - Localize a chave "wcm/cacheServerAddress" e altere o valor com o endereço do servidor de cache configurado conforme [recomendação](https://tdn.totvs.com/pages/viewpage.action?pageId=205917413).

 - Mova o conteúdo da pasta **[Instalação fluig]/repository/wcmdir** para a pasta **GLOBAL_DATA_DIR/wcmdir**

 - Mova o conteúdo da pasta **[Instalação fluig]/appserver/apps** para a pasta **GLOBAL_DATA_DIR****/apps**

 - Configure o fluig Indexer (Solr) para ser executado em servidor separado, conforme instruções [aqui](https://tdn.totvs.com/pages/viewpage.action?pageId=257623442).

 - Inicie os serviços do cache, **fluig_Indexer** e **fluig_RealTime** e em seguida inicie o **fluig**.

 - Acesse a plataforma com o usuário "wcmadmin", crie uma nova empresa (*tenant*) e realize as configurações necessárias.

 - Derrube a plataforma e os serviços do **fluig_RealTime**, **fluig_Indexer** e do *cache*.

## Criando uma segunda instância na mesma instalação

É possível executar uma segunda instância na mesma instalação, ou seja, sem a necessidade de instalar tudo novamente.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)

 - Abra em um editor de texto o arquivo **[Instalação fluig]/appserver/domain/configuration/host.xml**

 - Localize a *tag***<servers>**

 - Dentro dela haverão *tags*chamadas **<server>**

 - Adicione uma nova tag **<server>**, conforme exemplo:

[?](#)

| ```````````````````````````````````````````` |
| --- |

 - Certifique-se que o atributo **name** contenha um valor que jamais será repetido em outra instância.

 - A primeira instância **sempre** deverá se chamar "fluig1", enquanto as demais instâncias podem ter qualquer nome definido.

 - O atributo **auto-start** indica se a instância deve ser iniciada imediatamente quando a plataforma for iniciada. Se informado **false**, será preciso iniciá-la manualmente posteriormente usando o painel de controle do servidor de aplicação.

 - Caso desejar ou for necessário, altere o atributo **port-offset** da *tag***socket-bindings**. Cada nova instância precisa de um valor diferente (múltiplos de 150 são uma boa indicação).

 - Ajuste as configurações de memória na *tag***heap**.

É possível adicionar mais instâncias na mesma instalação. Basta replicar toda a seção **<server>** e tomar o cuidado de alterar, pelo menos, os atributos **port-offset** e **name**.

## Criando uma instância em outra máquina

- [Passo 1](#)
- [Passo 2](#)

 - Instale a aplicação pelo procedimento normal e siga as instruções até o procedimento antes de iniciar o servidor.

 - Abra em um editor de texto o arquivo **[Instalação fluig]/appserver/domain/configuration/host.xml**.

 - Localize a *tag***<servers>**.

 - Dentro dela haverão *tags*chamadas **<server>**. Altere o atributo **name** dessas *tags*. O valor desse atributo precisa ser diferente em cada instância.

## Configurando o balanceador (mod_proxy)

A plataforma homologa o Apache com o módulo mod_proxy para fazer o balanceamento de carga.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)

 - Instale o servidor [HTTP Apache](https://httpd.apache.org/download.cgi), versão 2.4.x.

 - Configure o Apache para carregar os módulos necessários (comumente feito através do arquivo **/etc/apache2/mods-enabled/mod_proxy.load**), conforme abaixo.

A ordem de carregamento dos módulos é extremamente importante.

[?](#)

| `LoadModule lbmethod_bybusyness_module /usr/lib/apache2/modules/mod_lbmethod_bybusyness.so``LoadModule proxy_module /usr/lib/apache2/modules/mod_proxy.so``LoadModule slotmem_shm_module /usr/lib/apache2/modules/mod_slotmem_shm.so``LoadModule proxy_balancer_module /usr/lib/apache2/modules/mod_proxy_balancer.so``LoadModule proxy_http_module /usr/lib/apache2/modules/mod_proxy_http.so` |
| --- |

 - A primeira linha indica o tipo de balanceamento que será feito. No exemplo acima, ele é feito por carga do servidor. Para conhecer outras formas, [consulte o manual](https://httpd.apache.org/docs/2.4/mod/mod_proxy_balancer.html) do Apache.

 - Habilite o mod_proxy (em geral isso é feito criando o arquivo **/etc/apache2/sites-enabled/mod_proxy.conf**).

[?](#)

| `````ProxyRequests Off````ProxyPreserveHost On` ```````BalancerMember http://{ip servidor 1}:8080 route=fluig1````BalancerMember http://{ip servidor 1}:8230 route=fluig2````BalancerMember http://{ip servidor 2}:8230 route=fluig3` ```` ```````SetHandler balancer-manager````Order Deny,Allow````Allow from all````````````Order allow,deny````Allow from all````` ```ProxyPass / balancer://mycluster/ stickysession=FLUIGCOOKIE nofailover=Off````ProxyPassReverse / balancer://mycluster/``` |
| --- |

Atenção

   - Cada “BalancerMember” indica um servidor e deve apontar para o IP e porta corretos.

   - Um *cookie* chamado “FLUIGCOOKIE” é criado para manter a afinidade da sessão. Sem o *cookie*, o procedimento não irá funcionar.


<!-- anchors: ARQComoconfiguraraplataformaemloadbalancecomApachemod_proxyemLinuxdasreleases1.6.0a1.6.2?-Índice, ARQComoconfiguraraplataformaemloadbalancecomApachemod_proxyemLinuxdasreleases1.6.0a1.6.2?-Plataforma, ARQComoconfiguraraplataformaemloadbalancecomApachemod_proxyemLinuxdasreleases1.6.0a1.6.2?-Ocorrência, ARQComoconfiguraraplataformaemloadbalancecomApachemod_proxyemLinuxdasreleases1.6.0a1.6.2?-Solução, ARQComoconfiguraraplataformaemloadbalancecomApachemod_proxyemLinuxdasreleases1.6.0a1.6.2?-Instalandoaprimeirainstância, FirstNode, FirstNode-1, FirstNode-2, highlighter_126579, highlighter_616044, FirstNode-3, FirstNode-4, FirstNode-5, FirstNode-6, ARQComoconfiguraraplataformaemloadbalancecomApachemod_proxyemLinuxdasreleases1.6.0a1.6.2?-Criandoumasegundainstâncianamesmainstalação, SecondInstance, SecondInstance-1, highlighter_834952, SecondInstance-2, SecondInstance-3, SecondInstance-4, SecondInstance-5, ARQComoconfiguraraplataformaemloadbalancecomApachemod_proxyemLinuxdasreleases1.6.0a1.6.2?-Criandoumainstânciaemoutramáquina, ThirdInstance, ThirdInstance-1, ThirdInstance-2, ARQComoconfiguraraplataformaemloadbalancecomApachemod_proxyemLinuxdasreleases1.6.0a1.6.2?-Configurandoobalanceador(mod_proxy), ModProxy, ModProxy-1, ModProxy-2, highlighter_890505, ModProxy-3, highlighter_286967 -->
