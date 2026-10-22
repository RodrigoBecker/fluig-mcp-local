---
title: "Recriar Serviços do Fluig"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=285662306"
scraped_at: "2026-03-09T03:46:11.756Z"
depth: 2
anchors: 38
child_links: 58
---

# Recriar Serviços do Fluig

Atenção!

Esta página foi revisada para considerar as novas configurações do Fluig para a atualização 1.6.x.

Caso possua uma atualização anterior, acesse: [Como recriar os serviços do Fluig na versão 1.5.13 e anteriores?](/pages/viewpage.action?pageId=198954857)

# Índice

# Objetivo

---

O objetivo deste guia é informar os passos para criar, desinstalar, recriar e renomear os serviços do Fluig, sendo eles: memCached, fluig_Indexer, fluig_RealTime e fluig.

# Localização dos arquivos

---

Para cada tipo de serviço existe um arquivo correspondente que deve ser executado. 

Atenção!

Em uma instalação padrão do Fluig 1.6.1, os serviços de RealTime e Servidor de Indexação são instalados juntamente com o servidor de aplicação no mesmo diretório. Caso a instalação seja em módulos, será necessário informar seus respectivos diretórios.

| Serviço | Executável | Localização |
| --- | --- | --- |
| Serviço | Executável | Localização |
| fluig | service.bat | [Instalação fluig]/appserver/bin/service |
| fluig_RealTime | nodeSetup.bat | Raíz da pasta de instalação do Fluig |
| fluig_Indexer | solrSetup.bat | Raíz da pasta de instalação do Fluig |

# Criar serviços

---

Navegue nos passos abaixo para conhecer os procedimentos de criação dos serviços do Fluig:

- [Fluig](#)
- [RealTime](#)
- [Indexer](#)

**1)** Abra o prompt de comando e acesse a [pasta correspondente](/pages/viewpage.action?pageId=285662306) ao serviço que deseja criar:

[?](#)

| `cd` `[Instalação fluig]\appserver\bin\service` |
| --- |

**2)** Para criar o serviço, digite:

[?](#)

| `service.bat``install` |
| --- |

**1)** Acesse o prompt de comando e acesse a [pasta correspondente](/pages/viewpage.action?pageId=285662306) ao serviço que deseja criar:

[?](#)

| `cd` `[Instalação fluig]` |
| --- |

**2)** Para criar o serviço, digite:

[?](#)

| `nodeSetup.bat``install` |
| --- |

**1)** Acesse o prompt de comando e acesse a[pasta correspondente](/pages/viewpage.action?pageId=285662306) ao serviço que deseja criar:

[?](#)

| `cd` `[Instalação fluig]` |
| --- |

**2)** Para criar o serviço, digite:

[?](#)

| `solrSetup.bat``install` |
| --- |

Atenção

Para recriar os serviços em **servidor Linux**, o caminho das pastas são os mesmos, basta apenas substituir o **.bat** por**.sh**nos comandos. 

Desinstalar

---

Siga os passos abaixo para desinstalar os serviços do Fluig:

- [Fluig](#)
- [RealTime](#)
- [Indexer](#)

**1)** Abra o prompt de comando e acesse a [pasta correspondente](/pages/viewpage.action?pageId=285662306) ao serviço que deseja desinstalar:

[?](#)

| `cd` `[Instalacao fluig]\appserver\bin\service` |
| --- |

**2)** Para desinstalar o serviço, digite:

[?](#)

| `service.bat uninstall` |
| --- |

**1)** Acesse o prompt de comando e acesse a [pasta correspondente](/pages/viewpage.action?pageId=285662306) ao serviço que deseja desinstalar:

[?](#)

| `cd` `[Instalação fluig]` |
| --- |

**2)** Para desinstalar o serviço, digite:

[?](#)

| `nodeSetup.bat uninstall` |
| --- |

**1)** Acesse o prompt de comando e acesse a [pasta correspondente](/pages/viewpage.action?pageId=285662306) ao serviço que deseja desinstalar:

[?](#)

| `cd` `[Instalação fluig]` |
| --- |

**2)** Para desinstalar o serviço, digite:

[?](#)

| `solrSetup.bat uninstall` |
| --- |

# Recriar

---

Navegue nos passos abaixo para conhecer os procedimentos de recriar os serviços do Fluig:

- [Fluig](#)
- [RealTime](#)
- [Indexer](#)

 1. Abra o Prompt de Comandos ou Console e [localize a pasta](#RecriarServiçosdoFluig-Local) correspondente do serviço Fluig;

 2. Execute o comando para [Desinstalar o Serviço Fluig](#RecriarServiçosdoFluig-des_fluig);

 3. Execute o comando para [Criar o serviço Fluig](#RecriarServiçosdoFluig-criar_fluig);

 1. Abra o Prompt de Comandos ou Console e [localize a pasta](#RecriarServiçosdoFluig-Local) correspondente do serviço RealTime;

 2. Execute o comando para [Desinstalar o Serviço do fluig_RealTime](#RecriarServiçosdoFluig-des_Real) (nodejs);

 3. Execute o comando para [Criar o serviço fluig_RealTime](#RecriarServiçosdoFluig-criar_Real);

 1. Abra o Prompt de Comandos ou Console e [localize a pasta](#RecriarServiçosdoFluig-Local) correspondente do serviço do Servidor de Indexação;

 2. Execute o comando para [Desinstalar o Serviço do fluig_Indexer](#RecriarServiçosdoFluig-des_Indexer) (solr);

 3. Execute o comando para [Criar o serviço fluig_Indexer](#RecriarServiçosdoFluig-criar_Indexer);

**oculto**

O conteúdo desse passo foi repassado ao artigo: [https://centraldeatendimento.fluig.com/hc/pt-br/articles/360033246754](https://centraldeatendimento.fluig.com/hc/pt-br/articles/360033246754) (Como recriar os serviços)

Lembrar de atualizar esse artigo caso tenha alguma alteração!

# Renomear

---

Siga os passos abaixo para renomear os serviços do Fluig:

- [Fluig](#)
- [RealTime](#)
- [Indexer](#)

1. Abra o Prompt de Comandos ou Console e [localize a pasta](#RecriarServiçosdoFluig-Local) correspondente do serviço Fluig;

2. Execute o comando para [Desinstalar o Serviço Fluig](#RecriarServiçosdoFluig-des_fluig);

3. Edite o arquivo**service.bat** localizado em [Instalação fluig]/appserver/bin/service;

4. Procure pelo trecho de configuração abaixo e altere o nome dos serviços nas variáveis SHORTNAME, DISPLAYNAME e DESCRIPTION:

[?](#)

| `set SHORTNAME=fluig2``set DISPLAYNAME="fluig2"``set DESCRIPTION="fluig Application Server"` |
| --- |

5. Em seguida, salve o arquivo.

6. Execute o comando para [Criar o serviço Fluig](#RecriarServiçosdoFluig-criar_fluig);

1. Abra o Prompt de Comandos ou Console e [localize a pasta](#RecriarServiçosdoFluig-Local) correspondente do serviço RealTime;

2. Execute o comando para [Desinstalar o Serviço do fluig_RealTime](#RecriarServiçosdoFluig-des_Real) (nodejs);

3. Acesse o diretório da nova instalação **[Instalação fluig]** e localize o arquivo “**nodeSetup.bat**” para editá-lo.

4. Procure pelo trecho de configuração abaixo e altere o nome dos serviços nas variáveis SVCNAME, SVCDISP e SVCDESC:

[?](#)

| `set SVCNAME=fluig_RealTime2``set SVCDISP=fluig_RealTime2``set SVCDESC=fluig Realtime2` |
| --- |

5. Em seguida, salve o arquivo.

6. Execute o comando para [Criar o serviço fluig_RealTime](#RecriarServiçosdoFluig-criar_Real);

1. Abra o Prompt de Comandos ou Console e [localize a pasta](#RecriarServiçosdoFluig-Local) correspondente do serviço do Servidor de Indexação;

2. Execute o comando para [Desinstalar o Serviço do fluig_Indexer](#RecriarServiçosdoFluig-des_Indexer) (solr);

3. Acesse o diretório da nova instalação **[Instalação fluig]** e localize o arquivo “**solrSetup.bat**” para editá-lo.

4. Procure pelo trecho de configuração abaixo e altere o nome dos serviços nas variáveis SVCNAME, SVCDISP e SVCDESC:

[?](#)

| `set SVCNAME=fluig_Indexer2``set SVCDISP=fluig_Indexer2``set SVCDESC=fluig_Indexer2` |
| --- |

5. Em seguida, salve o arquivo.

6. Execute o comando para [Criar o serviço fluig_Indexer](#RecriarServiçosdoFluig-criar_Indexer);

# Serviço de Cache (memCached)

---

A partir da atualização 1.6.2, não é necessário configurar o serviço de memCached.

Atenção!

Caso possua a atualização 1.6.0 ou 1.6.1, acesse: [Como recriar o serviço MemCached nas atualizações 1.6.0 ou 1.6.1?](/pages/viewpage.action?pageId=377324514)

Caso possua uma atualização anterior a 1.6.0, acesse: [Como recriar os serviços do Fluig na versão 1.5.13 e anteriores?](/pages/viewpage.action?pageId=198954857)


<!-- anchors: RecriarServiçosdoFluig-Índice, RecriarServiçosdoFluig-Objetivo, RecriarServiçosdoFluig-Localizaçãodosarquivos, RecriarServiçosdoFluig-Criarserviços, criar, criar-1, highlighter_150681, highlighter_208633, criar-2, highlighter_549299, highlighter_722732, criar-3, highlighter_890567, highlighter_901337, desinstalar, desinstalar-1, highlighter_413208, highlighter_970558, desinstalar-2, highlighter_582443, highlighter_277689, desinstalar-3, highlighter_225661, highlighter_907568, RecriarServiçosdoFluig-Recriar, recriar, recriar-1, recriar-2, recriar-3, RecriarServiçosdoFluig-Renomear, recriar, recriar-1, highlighter_466104, recriar-2, highlighter_14262, recriar-3, highlighter_526251, RecriarServiçosdoFluig-ServiçodeCache(memCached) -->
