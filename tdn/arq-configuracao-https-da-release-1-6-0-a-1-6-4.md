---
title: "ARQ - Configuração HTTPS da release 1.6.0 a 1.6.4"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=286516572"
scraped_at: "2026-03-09T04:50:09.642Z"
depth: 3
anchors: 23
child_links: 52
---

# ARQ - Configuração HTTPS da release 1.6.0 a 1.6.4

Atenção

Esta página foi revisada para considerar as configurações da release 1.6.0 a 1.6.4.

Se possui uma atualização 1.6.5 ou superior, acesse: [Configuração HTTPS na plataforma](/pages/viewpage.action?pageId=354472893).

# Índice

# Objetivo

O objetivo deste guia é expor os passos necessários para utilização da plataforma sobre o protocolo HTTPS.

# Pré-requisitos

- Possuir um certificado digital válido;
- Ter um host no DNS configurado para a plataforma em um domínio específico. 

## Obter um certificado válido

Para o certificado ser válido para a internet, este deve ser emitido para um domínio específico (WildCard) ou para um host deste domínio, o que torna obrigatório configurar a plataforma com o mesmo domínio do certificado caso deseje o uso de HTTPS (ex: *.[suaempresa.com.br](http://suaempresa.com.br)).

Se o certificado for vinculado à plataforma e o acesso continuar sendo via IP (e não pelo domínio), constantes mensagens de certificado não confiável serão apresentadas, pois o navegador tentará validar a URL de acesso com o domínio do certificado, retornando erro.

Caso sua empresa ainda não possua nenhum certificado, o mesmo deve ser adquirido de uma autoridade certificadora. Não é recomendado o uso de certificados *self-signed* (auto-assinado), já que alguns navegadores não aceitam este tipo de certificado e podem provocar comportamentos inesperados durante a utilização da plataforma.

Uma alternativa gratuita é oferecida pela Linux Foundation através do site [Let's Encrypt](https://letsencrypt.org/). Saiba mais acessando a FAQ [Certificado HTTPS (SSL/TLS) Gratuito](/pages/viewpage.action?pageId=269422853).

Caso tenha dúvidas sobre os procedimentos realizados no OpenSSL, consulte a FAQ [Utilizando OpenSSL para configurar HTTPS](/display/fluig/Utilizando+OpenSSL+para+configurar+HTTPS).

# Procedimentos de configuração de SSL

Navegue nos passos abaixo para configuração do SSL no servidor de aplicação:

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)

 - Parar os serviços da plataforma (fluig, fluig_indexer, fluig_RealTime e cache, caso estiver utilizando cache externo e.g: MemCached ou redis).

 1. No arquivo **domain.xml**, localizado em [Instalação fluig]/appserver/domain/configuration, incluir a tag **<https-listener>** no **subsystem "undertow"**. Não deve ser retirado a tag contendo as configurações HTTP.

 2. Na tag HTTP, acrescente o atributo **proxy-address-forwarding="true"**conforme mostrado abaixo:

 3. Caso deseje restringir o tráfego de **cookie****de sessão** em conexões seguras (HTTPS), basta incluir nas configurações do **subsystem undertow** a tag **session-cookie** informando o atributo **secure ="true". (Opcional)**

  **domain.xml**

[?](#)

| `````````````````````````````````````````````````````` |
| --- |

  - No arquivo **host.xml**, localizado em [Instalação fluig]/appserver/domain/configuration, altere o **<security-realm name="TOTVSTech">** incluindo as configurações de certificado.

  Disponibilizamos as instruções de configuração do repositório de certificados no formato **PKCS12** (p12) portanto, siga as instruções abaixo:

   - Incluir a tag **<server-identities></server-identities>** juntamente com**<ssl>** e o**<keystore>**conforme exemplicado no código abaixo;

   - No atributo **path**, informe o diretório do repositório de certificados (keystore.p12).

   - Em **key-password** e **keystore-password**, substitua a valor "suasenha" pela senha utilizada na criação do repositório de certificados (keystore).

Atenção!

Em **<security-realm name="ApplicationRealm"**> também contém as configurações de certificado porém, suas informações não devem ser modificadas, deixando os valores padrões salvos.

   **host.xml**

[?](#)

| ```````````````````````````` |
| --- |

O diretório "certs" é relativo ao diretório de configuração do servidor de aplicação, por exemplo, "C:\fluig\appserver\domain\configuration\certs".

Dúvidas sobre a utilização do OpenSSL ou sobre os comandos de exportação do PKCS12 (p12), consulte a FAQ [Utilizando OpenSSL para configurar HTTPS](/display/fluig/Utilizando+OpenSSL+para+configurar+HTTPS).

 - Iniciar novamente os serviços da plataforma em sua ordem correta (cache, caso estiver utilizando cache externo e.g: MemCached ou redis, fluig_indexer, fluig_RealTime e fluig).

 - **O acesso será realizado via HTTPS, na porta 8443.**

## Configuração para utilização do Fluig Studio com SSL

 A alteração abaixo é necessária para o correto funcionamento do plugin Fluig Studio no TOTVS Developer Studio ou Eclipse quando o SSL está habilitado.

- [Passo 1](#)
- [Passo 2](#)

 1. No diretório em que o Fluig Studio foi instalado, **editar o**arquivo **eclipse.ini**;

 2. Adicione a linha abaixo no final do arquivo.

  **eclipse.ini**

[?](#)

| `-Djsse.enableSNIExtension=``false` |
| --- |

 - Para chamadas de **Web Service** é importante configurar o arquivo de configuração **domain.xml** localizado em [Instalação fluig]/appserver/domain/configuration.

 - Procurar o trecho abaixo:

  **domain.xml**

[?](#)

| `...``````true````10.80.73.203``````...` |
| --- |

 - Alterar para:

  **domain.xml**

[?](#)

| `...``````true````jbossws.undefined.host````https````443``````...` |
| --- |

Alterar a porta da tag "<wsdl-secure-port>443</wsdl-secure-port>" para a porta de acesso utilizada (Portas padrões 443 e 8443).

## Configurar notificações em tempo real

O serviço responsável pelas notificações em tempo real (entrega de dados do servidor para os clientes) também deve ser preparado para funcionar via HTTPS, quando essa configuração for realizada na plataforma.

Atenção!

- Não é permitido utilizar barra invertida ou contra barras "\" para informar os caminhos do certificado e chave privada no arquivo package.json. Caso for utilizada, o serviço de RealTime (Node) não irá subir.
- Caso o certificado possua uma senha na chave informada, é necessário remover a senha. Caso contrário, o Node.js não será iniciado.
- Se o servidor possuir **proxy**, é necessário liberar as portas do serviço de notificações em tempo real para SSL nesse proxy*.*
- Caso seu certificado e chave estiverem no formato de repositório de certificados PKCS12 (p12), consulte a FAQ [Utilizando OpenSSL para configurar HTTPS](/display/fluig/Utilizando+OpenSSL+para+configurar+HTTPS) para obter os comandos de exportação dos mesmos. Para isso, é preciso que o pacote [OpenSSL](https://www.openssl.org/) esteja instalado no servidor.
- Importante mencionar que a linha que contém a porta nas configurações do SSL no arquivo package.json deve ser apagada.

Para isso, o arquivo* *[Instalação node]/fluig.rt**/package.json** deve ser editado, alterando as seguintes informações abaixo. Em sistemas operacionais Linux, o arquivo package.json fica localizado em [Instalação node]/bin/fluig.rt/.

**package.json**

[?](#)

| `"ssl"` `: {````"usessl"``:``true``,````"key"``:``"c:/fluig/certificado/server.key"``,````"cert"``:``"c:/fluig/certificado/server.crt"``,````"ca"``:``"c:/fluig/certificado/server.crt"``}` |
| --- |

Os atributos devem ser alterados conforme abaixo:

| Atributo | Descrição |
| --- | --- |
| usessl | Informar true, para caracterizar a utilização de configuração HTTPS |
| key | Informar o caminho do arquivo de chave |
| cert | Informar o caminho do arquivo de certificado |
| ca | Informar o caminho do arquivo de certificado |

Após a alteração do package.json, o serviço RealTime (Node.js) deve ser reiniciado.

# Certificado digital mobile

As plataformas de dispositivos móveis (iOS, Android) possuem limitações com relação aos certificados digitais. Por padrão, apenas os certificados homologados por elas são reconhecidos como confiáveis.

Para evitar a aquisição de certificados não homologados, é preciso consultar a documentação técnica de cada plataforma sobre a lista de certificados reconhecidos como confiáveis:

| Plataforma | Como consultar |
| --- | --- |
| Plataforma | Como consultar |
| iOS | A lista de certificados confiáveis para o iOS está disponível aqui. |
| Android | É necessário verificar no aparelho em: Configurações > Segurança > Credenciais ConfiáveisNa Aba Sistema existe a lista de certificados confiáveis para aquela versão do Android.Atenção Cada versão do Android pode ter uma lista de certificados confiáveis diferente. |

Em caso de dúvidas, procure a unidade certificadora para assegurar que seu certificado é homologado pelas plataformas mencionadas acima.

Importante

Caso o seu certificado não esteja na lista dos homologados, realize o procedimento descrito no item [Procedimentos de configuração de SSL](https://tdn.totvs.com/pages/viewpage.action?pageId=286516572#Configura%C3%A7%C3%A3oHTTPSnofluigdarelease1.6.0%C3%A0atual(1.6.4-Waterdrop)-Procedimentosdeconfigura%C3%A7%C3%A3odeSSL), mas lembre-se de que o arquivo .p12 que você utilizar deve conter também o certificado intermediário. Para gerar o arquivo .p12 com todos os certificados juntos siga esses passos:

1. Para gerar o Bundle (intermediário + root):cat intermediario.pem root.pem > bundle.pem
2. Para gerar o PEM do [fluig.com](https://fluig.com):cat fluig.crt fluig.key bundle.pem > fluig.pem
3. Para gerar o PKCS#12 do [fluig.com](https://fluig.com):openssl pkcs12 -export -out fluig.p12 -inkey fluig.key -in fluig.crt -certfile bundle.pem

# URL do portal

Após configurar o HTTPS na instalação da plataforma, é necessário ajustar a URL do portal com o novo protocolo.

Para isto, deve-se acessar a plataforma com o **wcmadmin**, abrir o **Painel de controle** → aba **WCM** → **Configurações do Sistema**.

Na aba Portal, definir no campo **URL do portal** da plataforma, agora com o "https".

Caso não esteja utilizando um web server, é necessário informar a porta de acesso da URL. Exemplo: https://[host]:[porta]/portal.

Para acessar a plataforma com HTTPS através do Fluig Mobile, basta [adicionar uma conta](https://tdn.totvs.com/pages/viewpage.action?pageId=107940624#GuiadeUtiliza%C3%A7%C3%A3ofluig-Mobile-AdicionandocontasnofluigMobile) com a nova URL do portal no aplicativo.

![](/download/attachments/286516572/nova%20tela%20de%20configura%C3%A7%C3%A3o%20de%20URL1.png?version=2&modificationDate=1597155502837&api=v2)

**Informar a URL de acesso ao portal utilizando o protocolo https no início do endereço**

****


<!-- anchors: ARQConfiguraçãoHTTPSdarelease1.6.0a1.6.4-Índice, ARQConfiguraçãoHTTPSdarelease1.6.0a1.6.4-Objetivo, ARQConfiguraçãoHTTPSdarelease1.6.0a1.6.4-Pré-requisitos, ARQConfiguraçãoHTTPSdarelease1.6.0a1.6.4-Obterumcertificadoválido, ARQConfiguraçãoHTTPSdarelease1.6.0a1.6.4-ProcedimentosdeconfiguraçãodeSSL, ssl, ssl-1, ssl-2, highlighter_315293, ssl-3, highlighter_226729, ssl-4, ARQConfiguraçãoHTTPSdarelease1.6.0a1.6.4-ConfiguraçãoparautilizaçãodoFluigStudiocomSSL, studio, studio-1, highlighter_43389, studio-2, highlighter_968217, highlighter_969158, ARQConfiguraçãoHTTPSdarelease1.6.0a1.6.4-Configurarnotificaçõesemtemporeal, highlighter_698913, ARQConfiguraçãoHTTPSdarelease1.6.0a1.6.4-Certificadodigitalmobile, ARQConfiguraçãoHTTPSdarelease1.6.0a1.6.4-URLdoportal -->
