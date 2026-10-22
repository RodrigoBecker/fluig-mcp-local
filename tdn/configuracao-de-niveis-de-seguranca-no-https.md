---
title: "Configuração de níveis de segurança no HTTPS"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=286516627"
scraped_at: "2026-03-09T04:09:58.109Z"
depth: 2
anchors: 20
child_links: 88
---

# Configuração de níveis de segurança no HTTPS

Fique atento!

Esta página é válida a partir da atualização **Voyager (2.0)**do TOTVS Fluig.

Se você utiliza uma atualização anterior, acesse [Como configurar níveis de segurança no HTTPS da atualização **1.6 até 1.8.2**](/pages/viewpage.action?pageId=941241730).

# Objetivo

---

O objetivo deste artigo é descrever os procedimentos necessários para definir o nível de segurança aplicado ao protocolo SSL/TLS em ambientes que possuem o HTTPS habilitado.

# Pré-requisitos

---

Para que se tenha uma compreensão completa destas informações, alguns conhecimentos são considerados pré-requisitos, entre eles:

- visão geral sobre a plataforma TOTVS Fluig;

- visão geral sobre níveis de segurança e certificado digital.

Além disso, é necessário acesso ao servidor onde a plataforma está instalada.

# Níveis de segurança

---

O mercado adota como padrão para definir os níveis de segurança para o protocolo SSL/TLS **níveis de compatibilidade**, que são uma combinação dos *Ciphersuite*, versões do protocolo SSL/TLS, tamanho da chave RSA, assinatura do certificado, entre outros. Esses níveis de compatibilidade são divididos entre compatibilidade **Moderna**, **Intermediária** e **Antiga** e podem ser observados no site de [boas práticas para SSL/TLS](https://wiki.mozilla.org/Security/Server_Side_TLS#Recommended_configurations) mantido pela Mozilla.

Importante!

O nível de segurança aplicado ao HTTPS na plataforma irá definir sua compatibilidade com navegadores (ex. IE, Chrome, Safari, Firefox) e executáveis (ex. Java). Navegadores e executáveis mais antigos podem apresentar falhas de comunicação com a plataforma em virtude deles não suportarem todas as implementações de segurança modernas para realizar a comunicação.

# Configurações recomendadas

---

Para garantir um alto nível de segurança nas configurações HTTPS da plataforma, iremos apresentar alguns cenários com configurações utilizando a **compatibilidade Moderna** descrito no guia de segurança mantido pela Mozilla para o protocolo SSL/TLS.

## HTTPS na plataforma

---

No cenário abaixo, toda a configuração HTTPS é realizada diretamente na plataforma.

Dica!

Você também pode conferir se sua configuração HTTPS está funcionando corretamente na ferramenta: [https://www.sslshopper.com/ssl-checker.html](https://www.sslshopper.com/ssl-checker.html).

Importante!

Todas as configurações abaixo devem ser realizadas com a plataforma fora do ar.

Abaixo seguem as alterações que devem ser realizadas no arquivo de configuração ([diretório_instalação]/appserver/standalone/configuration/**standalone.xml**) para habilitar a compatibilidade **Moderna**.

**standalone.xml**

[?](#)

| `````````````# Se necessário complemente com outras chaves Ciphers ou protocolos suportados``````` |
| --- |

### Recomendação

---

É muito importante utilizar chaves e protocolos mais modernos e seguros como os indicados no exemplo acima.

Porém, outras chaves também são suportadas:

[?](#)

| `TLS_DHE_RSA_WITH_AES_128_GCM_SHA256:TLS_DHE_DSS_WITH_AES_128_GCM_SHA256:TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256:TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256:TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA:TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA` `:TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384:TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384:TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA:TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA:TLS_DHE_RSA_WITH_AES_128_CBC_SHA256:TLS_DHE_RSA_WITH_AES_128_CBC_SHA` `:TLS_DHE_DSS_WITH_AES_128_CBC_SHA256:TLS_DHE_RSA_WITH_AES_256_CBC_SHA256:TLS_DHE_DSS_WITH_AES_256_CBC_SHA:TLS_DHE_RSA_WITH_AES_256_CBC_SHA` |
| --- |

- Preencha a diretiva **enabled-cipher-suites** do **standalone.xml** substituindo pelos valores suportados acima que estejam de acordo com sua política de segurança. As chaves podem ser validadas em [https://ciphersuite.info/](https://ciphersuite.info/).

Os protocolos TLSv1, TLSv1.1 e TLSv1.2 também são suportados.

- Preencha a diretiva **enabled-protocols** do **standalone.xml** substituindo pelos valores suportados acima que estejam de acordo com sua política de segurança.

Atenção!

Conforme informado pela [Microsoft](https://learn.microsoft.com/en-us/windows/win32/secauthn/protocols-in-tls-ssl--schannel-ssp-#tls-protocol-version-support), os servidores Windows inferiores à versão 2022 não suportam o protocolo TLSv1.3.

Abaixo seguem as alterações que devem ser realizadas no arquivo de configuração no Linux ([diretório_instalação]/appserver/bin/standalone.conf) ou Windows ([diretório_instalação]/appserver/bin/standalone.conf.bat) para habilitar a compatibilidade **Moderna**.

#### Linux

**standalone.conf**

[?](#)

| `# Adicione o parâmetro -Djdk.tls.ephemeralDHKeySize=2048``JAVA_OPTS=``"$JAVA_OPTS -Dfile.encoding=utf8 -Djavamelody.disabled=true -Djdk.tls.ephemeralDHKeySize=2048"` |
| --- |

#### Windows

**standalone.conf.bat**

[?](#)

| `rem``# Adicione o parâmetro -Djdk.tls.ephemeralDHKeySize=2048``set` `"JAVA_OPTS=%JAVA_OPTS% -Dfile.encoding=utf8 -Djavamelody.disabled=true -Djdk.tls.ephemeralDHKeySize=2048"` |
| --- |

Importante!

Caso o Fluig esteja **abaixo da versão 1.7.0**, é necessário instalar e habilitar o [Java Cryptography Extension (JCE) Unlimited Strength Jurisdiction Policy Files](https://www.oracle.com/java/technologies/javase-jce-all-downloads.html) junto à plataforma, que permite a utilização de *Ciphersuites* mais modernos e avançados na plataforma.

A instalação consiste em remover os arquivos ${fluig-dir}/jdk-64/jre/lib/security/local_policy.jar e ${fluig-dir}/jdk-64/jre/lib/security/US_export_policy.jar do diretório da plataforma e descompactar os arquivos do JCE no diretório ${fluig-dir}/jdk-64/jre/lib/security.

Opcional:

A porta do HTTPS na plataforma também pode ser alterada para **443**, porta padrão do HTTPS que permite o acesso ao endereço sem a necessidade de informar uma porta de acesso, apenas o protocolo **https://**.

Abaixo seguem as alterações que devem ser realizadas no arquivo de configuração (**standalone.xml**) da plataforma para mudar a porta para **443**.

**standalone.xml**

[?](#)

| ```````````````` `# Em algumas versões, pode estar como abaixo:``# ` |
| --- |

## HTTPS no Apache

---

No cenário abaixo, toda a configuração HTTPS é realizada no Apache. Este é o cenário onde a plataforma é configurada através de um *proxy* reverso.

Abaixo seguem as alterações que devem ser realizadas no arquivo de configuração (geralmente **fluig.conf**) da plataforma no Apache para habilitar a compatibilidade Moderna.

Dica!

Você também pode conferir se sua configuração HTTPS está funcionando corretamente na ferramenta: [https://www.sslshopper.com/ssl-checker.html](https://www.sslshopper.com/ssl-checker.html).

**fluig.conf**

[?](#)

| `````...````SSLProxyEngine On````SSLEngine On````SSLProtocol +TLSv1.3````SSLHonorCipherOrder on````SSLCipherSuite``"ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!3DES:!MD5:!PSK"` `# Se necessário complemente com outras chaves Ciphers suportadas````SSLCompression Off````...``` |
| --- |

### Recomendação

---

É muito importante utilizar chaves e protocolos mais modernos e seguros como os indicados no exemplo acima.

Porém, outras chaves também são suportadas:

[?](#)

| `DHE-RSA-AES128-GCM-SHA256:DHE-DSS-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-DSS-AES128-SHA256:DHE-RSA-AES256-SHA256:DHE-DSS-AES256-SHA:DHE-RSA-AES256-SHA` |
| --- |

- Preencha a diretiva **SSLCipherSuite** do **fluig.conf** substituindo pelos valores suportados acima que estejam de acordo com sua política de segurança. As chaves podem ser validadas em [https://ciphersuite.info/](https://ciphersuite.info/).

Os protocolos TLSv1, TLSv1.1 e TLSv1.2 também são suportados.

- Preencha a diretiva **SSLProtocol** do **fluig.conf** substituindo pelos valores suportados acima que estejam de acordo com sua política de segurança.

Atenção!

Conforme informado pela [Microsoft](https://learn.microsoft.com/en-us/windows/win32/secauthn/protocols-in-tls-ssl--schannel-ssp-#tls-protocol-version-support), os servidores Windows inferiores à versão 2022 não suportam o protocolo TLSv1.3.

# Validação das configurações

---

Você poderá validar as configurações aplicadas em algumas ferramentas que testam e analisam o HTTPS. Recomendamos as duas abaixo para validação.

## Qualys SSL Server Test

---

Ferramenta Web disponível em [https://www.ssllabs.com/ssltest/](https://www.ssllabs.com/ssltest/), que faz uma análise das configurações HTTPS e sugere recomendações com base nos dados coletados.

Importante!

Para a realização desse teste, é mandatório que a plataforma esteja disponível para acesso através da Internet.

## Cipherscan

---

Ferramenta *open-source* para Linux disponível em [https://github.com/jvehent/cipherscan](https://github.com/jvehent/cipherscan), que utiliza mecanismos do OpenSSL para efetuar a validação.


<!-- anchors: ConfiguraçãodeníveisdesegurançanoHTTPS-Objetivo, ConfiguraçãodeníveisdesegurançanoHTTPS-Pré-requisitos, ConfiguraçãodeníveisdesegurançanoHTTPS-Níveisdesegurança, ConfiguraçãodeníveisdesegurançanoHTTPS-Configuraçõesrecomendadas, ConfiguraçãodeníveisdesegurançanoHTTPS-HTTPSnaplataforma, highlighter_199042, ConfiguraçãodeníveisdesegurançanoHTTPS-Recomendação, highlighter_332291, ConfiguraçãodeníveisdesegurançanoHTTPS-Linux, highlighter_383404, ConfiguraçãodeníveisdesegurançanoHTTPS-Windows, highlighter_37019, highlighter_990370, ConfiguraçãodeníveisdesegurançanoHTTPS-HTTPSnoApache, highlighter_827328, ConfiguraçãodeníveisdesegurançanoHTTPS-Recomendação.1, highlighter_564751, ConfiguraçãodeníveisdesegurançanoHTTPS-Validaçãodasconfigurações, ConfiguraçãodeníveisdesegurançanoHTTPS-QualysSSLServerTest, ConfiguraçãodeníveisdesegurançanoHTTPS-Cipherscan -->
