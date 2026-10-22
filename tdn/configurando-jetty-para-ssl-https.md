---
title: "Configurando Jetty para SSL (https)"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=185730415"
scraped_at: "2026-03-09T03:10:37.823Z"
depth: 1
anchors: 22
child_links: 63
---

# Configurando Jetty para SSL (https)

# Índice

# Objetivo

---

Serviços em HTTPS tem como objetivo garantir maior segurança no tráfego de arquivos entre cliente-servidor. Neste documento abordaremos a configuração SSL do servidor de aplicação **jetty,**utilizado na [Replicação de Documentos](https://tdn.totvs.com/pages/viewpage.action?pageId=172297964), que será utilizado juntamente com o Fluig quando o WildFly estiver com o certificado SSL também ativo.

Atenção

Os procedimentos descritos neste guia foram testados e homologados na versão 9.4.8.v20171121 do [Jetty](https://www.eclipse.org/jetty/documentation/)

# Configurar SSL para Jetty

---

Para configurar o SSL no Jetty, é necessário:

- Gerar as chaves e os certificados auto-assinados (caso não possua o certificado).
- Carregar chaves e certificados.
- Configurar *sslContextFactory*.

# Gerando as chaves e os certificados auto-assinados

---

O caminho mais fácil para gerar as chaves e os certificados é usar a ferramenta *keytool *que vem na instalação da JDK.

Nota

Se você já possui as chaves e os certificados vá direto para o passo,** Carregando as chaves e certificados**, afim de verificar como carregá-los para dentro do *keystore* JSSE. Esta seção também se aplica no caso de renovação de certificados onde você deseja substituir um certificado que está expirando.

O exemplo abaixo gera somente chaves e certificados básicos. Você deve acessar a [documentação do Jetty](https://www.eclipse.org/jetty/documentation/) se precisar especificar o seguintes itens:

- O tamanho da chave
- A data de expiração do certificado
- Alterar a segurança dos providers

### Gerando chaves e certificados com keytool do JDK

O comando a seguir gera as chaves e o certificado diretamente no arquivo `keystore` :

[?](#)

| `$ keytool -keystore keystore -alias jetty -genkey -keyalg RSA` |
| --- |

- Preencha todos as informações solicitadas e ao final digite **sim** e pressione **Enter** para confirmar.

Estes certificados auto-assinados não são válidos externamente.

# Carregando chaves e certificados

---

Se um certificado CA lhe foi enviado, ou se você gerou o seu próprio certificado sem `keytool` , você precisa carregá-lo em um keystore JSSE.

### Carregando Certificados com keytool

Você pode usar o `keytool` para carregar um certificado no formato PEM diretamente em um keystore. O formato PEM é uma codificação de texto de certificados; é produzido pela OpenSSL, e é devolvido por alguns CAs. Um exemplo de arquivo PEM é:

[?](#)

| `jetty.crt``----- BEGIN CERTIFICATE -----``MIICSDCCAfKgAwIBAgIBADANBgkqhkiG9w0BAQQFADBUMSYwJAYDVQQKEx1Nb3J0``IEJheSBDb25zdWx0aW5nIFB0eS4gTHRkLjEOMAwGA1UECxMFSmV0dHkxGjAYBgNV``BAMTEWpldHR5Lm1vcnRiYXkub3JnMB4XDTAzMDQwNjEzMTk1MFoXDTAzMDUwNjEz``MTk1MFowVDEmMCQGA1UEChMdTW9ydCBCYXkgQ29uc3VsdGluZyBQdHkuIEx0ZC4x``DjAMBgNVBAsTBUpldHR5MRowGAYDVQQDExFqZXR0eS5tb3J0YmF5Lm9yZzBcMA0G``CSqGSIb3DQEBAQUAA0sAMEgCQQC5V4oZeVdhdhHqa9L2 / ZnKySPWUqqy81riNfAJ``7uALW0kEv / LtlG34dOOcVVt / PK8 / bU4dlolnJx1SpiMZbKsFAgMBAAGjga4wgasw``HQYDVR0OBBYEFFV1gbB1XRvUx1UofmifQJS / MCYwMHwGA1UdIwR1MHOAFFV1gbB1``XRvUx1UofmifQJS / MCYwoVikVjBUMSYwJAYDVQQKEx1Nb3J0IEJheSBDb25zdWx0``aW5nIFB0eS4gTHRkLjEOMAwGA1UECxMFSmV0dHkxGjAYBgNVBAMTEWpldHR5Lm1v``cnRiYXkub3JnggEAMAwGA1UdEwQFMAMBAf8wDQYJKoZIhvcNAQEEBQADQQA6NkaV``OtXzP4ayzBcgK / qSCmF44jdcARmrXhiXUcXzjxsLjSJeYPJojhUdC2LQKy + p4ki8``Rcz6oCRvCGCe5kDB``----- END CERTIFICATE -----` |
| --- |

```

```

### Utilizando certificados com extensão .crt

Se você já possui um certificado com a extensão .crt e a senha para acessá-lo utilize o comando abaixo. Este comando a seguir carrega o conteúdo do arquivo .crt para dentro do arquivo keystore JSSE:

[?](#)

| `$ keytool -keystore keystore -import -alias jetty -file [nome_do_arquivo].crt -trustcacerts` |
| --- |

Ao executar o comando acima digite uma senha '**não pode ser deixado em branco'**. Esta é a senha de acesso ao arquivo keystore.

### Utilizando certificados com extensão .p12

Se você possui um certificado com a extensão .p12 utilize o comando abaixo. Este comando a seguir carrega o conteúdo do arquivo .crt para dentro do arquivo keystore JSSE:

[?](#)

| `$ keytool -importkeystore -srckeystore [nome_do_arquivo].p12 -srcstoretype PKCS12 -destkeystore keystore` |
| --- |

Ao executar o comando acima lhe será solicitado uma senha '**não pode ser deixado em branco'**. Esta é a senha de acesso ao arquivo keystore.

Será solicito uma segunda senha, esta é a de acesso ao certificado, guarde as duas senha.

É necessário copiar o arquivo *keystore* do local onde foi gerado para dentro da pasta **[instalação do jetty]/etc**

****

# Configurando SslContextFactory

---

O Jetty permite que seja criado um diretório específico para realizar as configurações, assim é possível manter uma separação entre os arquivos binários de instalação ($JETTY_HOME) e as configurações personalizadas ($JETTY_BASE). Veja mais detalhes em [Gerenciando Jetty Home e Jetty Base](https://www.eclipse.org/jetty/documentation/9.4.x/startup-base-and-home.html)

## Configuração em sistemas Linux:

---

- [Passo 1](#)
- [Passo 2](#)

Primeiramente crie o diretório base:

[?](#)

| 123 | `$ JETTY_BASE=``/opt/jetty_fluig``$``mkdir` `$JETTY_BASE``$``cd` `$JETTY_BASE` |
| --- | --- |

Em seguida, será preciso habilitar alguns módulos, execute os comandos:

[?](#)

| 12 | `$ java -jar $JETTY_HOME``/start``.jar --create-startd``$ java -jar $JETTY_HOME``/start``.jar --add-to-start=http,deploy,ssl,https` |
| --- | --- |

Com isso, os diretórios etc, start.d e webapps devem ser criados.

Agora faremos as configurações para o Jetty funcionar em HTTPS, abra o arquivo $JETTY_BASE/start.d/ssl.ini e edite as seguintes configurações:

**jetty.ssl.host** - Endereço/IP de conexão

**jetty.ssl.port** - porta de conexão

**jetty.sslContext.keyStorePath** - Caminho e nome do arquivo keystore (relativo ao $JETTY_BASE)

**jetty.sslContext.trustStorePath**- Caminho e nome do arquivo Truststore (relativo ao $JETTY_BASE)

**jetty.sslContext.keyStorePassword**- Senha de acesso ao keystore

**jetty.sslContext.keyManagerPassword**- Senha de acesso ao keymanager

**jetty.sslContext.trustStorePassword**- Senha de acesso ao truststore

Ofuscar senhas de acesso

Por questões de segurança, recomendamos que as senhas de acesso ao keystore, keymanager e truststore sejam ofuscadas.

O Jetty possuí uma [biblioteca](https://www.eclipse.org/jetty/documentation/9.4.x/configuring-security-secure-passwords.html) que possibilita ofuscar senhas, basta executar os comandos:

[?](#)

| 123456789101112 | `$``export` `JETTY_VERSION=9.0.0-SNAPSHOT``$ java -``cp` `lib``/jetty-util-``$JETTY_VERSION.jar org.eclipse.jetty.util.security.Password [SENHA]`  `# Exemplo de uso:``$ java -``cp` `lib``/jetty-util-``$JETTY_VERSION.jar org.eclipse.jetty.util.security.Password blah``OBF:20771x1b206z``MD5:639bae9ac6b3e1a84cebb7b403297b79``CRYPT:me``/ks90E221EY` `# Ao utilizar o método de ofuscação OBF, a configuração das senhas ficará à semelhante abaixo:``# jetty.sslContext.keyStorePassword=OBF:20771x1b206z` |
| --- | --- |

# Configuração específica para Jetty no Windows

---

É necessário adicionar o parâmetro abaixo no momento em que o Jetty será iniciado:

*-Dfile.encoding=UTF-8 -Djavax.net.ssl.trustStore=**[caminho do arquivo keystore gerado]***

Para iniciar o Jetty basta digitar no terminal do Windows o seguinte comando:

*java -Dfile.encoding=UTF-8 -Djavax.net.ssl.trustStore=**[caminho do arquivo keystore gerado]** -jar start.jar *


<!-- anchors: ConfigurandoJettyparaSSL(https)-Índice, ConfigurandoJettyparaSSL(https)-Objetivo, ConfigurandoJettyparaSSL(https)-ConfigurarSSLparaJetty, ConfigurandoJettyparaSSL(https)-Gerandoaschaveseoscertificadosauto-assinados, ConfigurandoJettyparaSSL(https)-GerandochavesecertificadoscomkeytooldoJDK, highlighter_549228, ConfigurandoJettyparaSSL(https)-Carregandochavesecertificados, ConfigurandoJettyparaSSL(https)-CarregandoCertificadoscomkeytool, highlighter_491031, ConfigurandoJettyparaSSL(https)-Utilizandocertificadoscomextensão.crt, highlighter_670088, ConfigurandoJettyparaSSL(https)-Utilizandocertificadoscomextensão.p12, highlighter_184742, ConfigurandoJettyparaSSL(https)-ConfigurandoSslContextFactory, ConfigurandoJettyparaSSL(https)-ConfiguraçãoemsistemasLinux:, samples, samples-1, highlighter_745664, highlighter_957540, samples-2, highlighter_681354, ConfigurandoJettyparaSSL(https)-ConfiguraçãoespecíficaparaJettynoWindows -->
