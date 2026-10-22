---
title: "Configuração de certificado para consultar serviço com conexão HTTPS"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=539698864"
scraped_at: "2026-03-09T05:00:53.765Z"
depth: 3
anchors: 19
child_links: 60
---

# Configuração de certificado para consultar serviço com conexão HTTPS

# Índice

# Objetivo

---

Essa documentação apresenta os passos necessários para realizar a importação do certificado de outros sistemas nas pastas de configuração do JDK do TOTVS Fluig Plataforma.

# Visão geral

---

Cada JVM possui uma configuração de certificados digitais reconhecidos. Ao consumir algum serviço ou endereço disponíveis em HTTPS via JAVA, podem ocorrer falhas de *handshake*ou comunicação ao consumir um endereço com certificado não reconhecido *(PKIX)*.

Normalmente os certificados ficam armazenados no arquivo **<path>\jdk-64\lib\security\cacerts**. Atenção, cada instalação de JAVA possui um arquivo *cacerts*. Ao trabalhar com certificados na JVM, importante especificar o caminho do arquivo *cacerts* correto.

Para interagir com o arquivo *cacerts*, existe uma ferramenta padrão JAVA chamada *keytool*. Para interagir com o arquivo *cacerts* via *keytool*, é preciso especificá-lo bem como a senha de acesso.  A senha padrão é **changeit**.

# Listar os certificados instalados

---

A partir da atualização 1.7:

[?](#)

| `\jdk-64\bin\keytool -list -v -keystore \jdk-64\lib\security\cacerts` |
| --- |

Até a atualização 1.6.5:

[?](#)

| `\jdk-64\jre\bin\keytool -list -v -keystore \jdk-64\jre\lib\security\cacerts` |
| --- |

Sendo que:

- **<path> **é o caminho da raiz de instalação do fluig (por exemplo: /opt/fluig ou C:\fluig)

Importante!

É importante rodar o console de execução em modo administrador. A senha padrão é **changeit**.

# Adicionar certificados

---

A partir da atualização 1.7:

[?](#)

| `\jdk-64\bin\keytool -import -alias  -keystore \jdk-64\lib\security\cacerts -file ` |
| --- |

Até a atualização 1.6.5:

[?](#)

| `\jdk-64\jre\bin\keytool -import -alias  -keystore \jdk-64\jre\lib\security\cacerts -file ` |
| --- |

Sendo que:

- **<path> **é o caminho da raiz de instalação do Fluig (por exemplo: /opt/fluig ou C:\fluig)
- **<alias do certificado>**é um nome para referência, por exemplo caso você precise apagar o certificado posteriormente.
- **<caminho do arquivo certificado.cer>** é o caminho completo do arquivo de certificado que você fará importação.

Importante!

É importante rodar o console de execução em modo administrador. A senha padrão é **changeit**.

Para ter efeito, após a configuração é necessário reiniciar os serviços da plataforma.

# Remover certificados

---

A partir da atualização 1.7:

[?](#)

| `\jdk-64\bin\keytool -delete -alias  -keystore \jdk-64\lib\security\cacerts` |
| --- |

Até a atualização 1.6.5:

[?](#)

| `\jdk-64\jre\bin\keytool -delete -alias  -keystore \jdk-64\jre\lib\security\cacerts` |
| --- |

Sendo que:

- **<path> **é o caminho da raiz de instalação do Fluig (por exemplo: /opt/fluig ou C:\fluig)
- **<alias do certificado>**é um nome para referência, por exemplo caso você precise apagar o certificado posteriormente.

Importante!

É importante rodar o console de execução em modo administrador. A senha padrão é **changeit**.

# Como obter o certificado para adicionar à keystore?

---

Para saber qual certificado precisa ser adicionado, siga o passo a passo abaixo:

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)

 - Acessar a URL do serviço no Chrome e clicar no Cadeado.

![](/download/attachments/539698864/image1.png?version=1&modificationDate=1616003905827&api=v2)

 - Clicar na opção do **Certificado**, para exibir suas propriedades.

![](/download/attachments/539698864/image2.png?version=2&modificationDate=1616004047840&api=v2)

 - Na aba **Detalhes**, clicar em **Copiar para Arquivo.**

![](/download/attachments/539698864/image3.png?version=1&modificationDate=1616003905290&api=v2)

 - Exportar com a opção de binário codificado.

![](/download/attachments/539698864/image4.png?version=1&modificationDate=1616003905113&api=v2)

# Saiba mais

---

Mais informações podem ser obtidas em:

- *Keytool command examples Java - add view ssl certificate in keyStore trustStore* (em Inglês);

- [Resolução de inconsistência (PKIX *path validation failed*) ao cadastrar serviço](https://centraldeatendimento.fluig.com/hc/pt-br/articles/4404174167575-Fluig-Plataforma-DES-Ao-cadastrar-servi%C3%A7o-retorna-o-erro-PKIX-path-validation-failed).


<!-- anchors: ConfiguraçãodecertificadoparaconsultarserviçocomconexãoHTTPS-Índice, ConfiguraçãodecertificadoparaconsultarserviçocomconexãoHTTPS-Objetivo, ConfiguraçãodecertificadoparaconsultarserviçocomconexãoHTTPS-Visãogeral, ConfiguraçãodecertificadoparaconsultarserviçocomconexãoHTTPS-Listaroscertificadosinstalados, highlighter_259103, highlighter_824812, ConfiguraçãodecertificadoparaconsultarserviçocomconexãoHTTPS-Adicionarcertificados, highlighter_58540, highlighter_259653, ConfiguraçãodecertificadoparaconsultarserviçocomconexãoHTTPS-Removercertificados, highlighter_420833, highlighter_298203, ConfiguraçãodecertificadoparaconsultarserviçocomconexãoHTTPS-Comoobterocertificadoparaadicionaràkeystore?, Obter, Obter-872616687, Obter-872616688, Obter-872616689, Obter-872616690, ConfiguraçãodecertificadoparaconsultarserviçocomconexãoHTTPS-Saibamais -->
