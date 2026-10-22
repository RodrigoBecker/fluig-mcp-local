---
title: "DES - Por que está ocorrendo o erro \"Read Timed Out\" ao chamar um WebService CXF em desenvolvimentos sobre a plataforma?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=201732064"
scraped_at: "2026-03-09T03:31:54.829Z"
depth: 2
anchors: 6
child_links: 41
---

# DES - Por que está ocorrendo o erro "Read Timed Out" ao chamar um WebService CXF em desenvolvimentos sobre a plataforma?

# Índice

# Plataforma

**Produto: **TOTVS Fluig Plataforma

**Tipo de API:** Web service

# Ocorrência

Ocorre o erro "*Read Timed Out"* ao acessar um *WebService* CXF via desenvolvimento sobre a plataforma. O método parece executar internamente, porém demora demais e esse erro aparece antes de terminar o processamento do método em questão. ~Poderiam me ajudar?

# Causa

O Web Service está configurado para um tempo menor que o necessário ou utilizando o tempo padrão de trinta segundos, que não está sendo o suficiente.

# Solução

Conforme exemplo abaixo, deve-se configurar o WebService CXF antes de enviar a execução do método.

[?](#)

| `MyWebService service =``new` `MyWebService();``MyWebServicePortType client = service.MyWebServicePort();` `org.apache.cxf.endpoint.Client cl = org.apache.cxf.frontend.ClientProxy.getClient(client);``` `org.apache.cxf.transport.http.HTTPConduit http = (org.apache.cxf.transport.http.HTTPConduit) cl.getConduit();``` `org.apache.cxf.transports.http.configuration.HTTPClientPolicy httpClientPolicy =``new` `org.apache.cxf.transports.http.configuration.HTTPClientPolicy();``httpClientPolicy.setConnectionTimeout(0);``httpClientPolicy.setReceiveTimeout(0);``` `http.setClient(httpClientPolicy);` `client.doSomething(...);` |
| --- |

Outra forma possível é utilizando o método getCustomClient, conforme documentado segundo o link: [Integração com Aplicativos Externo.](/pages/viewpage.action?pageId=73082260#IntegraçãocomAplicativosExternos-WebServicecomclientpersonalizado)

Este código foi retirado de um tutorial nos blogs de auxílio de desenvolvimento ao Apache CXF ([link](http://lhein.blogspot.com.br/2008/09/apache-cxf-and-time-outs.html)) e serve apenas para envios de requisições via *stubs*, não servindo para envios de XML puros, ou seja, fora do padrão da plataforma de envio de requisições a serviços.


<!-- anchors: DESPorqueestáocorrendooerro"ReadTimedOut"aochamarumWebServiceCXFemdesenvolvimentossobreaplataforma?-Índice, DESPorqueestáocorrendooerro"ReadTimedOut"aochamarumWebServiceCXFemdesenvolvimentossobreaplataforma?-Plataforma, DESPorqueestáocorrendooerro"ReadTimedOut"aochamarumWebServiceCXFemdesenvolvimentossobreaplataforma?-Ocorrência, DESPorqueestáocorrendooerro"ReadTimedOut"aochamarumWebServiceCXFemdesenvolvimentossobreaplataforma?-Causa, DESPorqueestáocorrendooerro"ReadTimedOut"aochamarumWebServiceCXFemdesenvolvimentossobreaplataforma?-Solução, highlighter_830886 -->
