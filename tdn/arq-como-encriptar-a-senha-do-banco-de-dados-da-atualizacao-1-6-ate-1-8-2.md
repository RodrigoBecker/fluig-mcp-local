---
title: "ARQ - Como encriptar a senha do banco de dados da atualização 1.6 até 1.8.2"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=940299992"
scraped_at: "2026-03-09T04:44:20.196Z"
depth: 3
anchors: 27
child_links: 50
---

# ARQ - Como encriptar a senha do banco de dados da atualização 1.6 até 1.8.2

Fique atento!

Esta página é válida para as atualizações **1.6 até 1.8.2**** **do TOTVS Fluig.

Se você utiliza a atualização **Voyager (2.0) ou superior**, acesse a página original [Encriptação de senha do banco de dados](/pages/viewpage.action?pageId=454434362).

# Objetivo

---

Este guia tem como finalidade demonstrar os passos necessários para realizar a encriptação sobre a senha de acesso ao banco de dados.

Esse procedimento pode ser realizado para encriptação da senha de todos os bancos de dados homologados pela [Matriz de Portabilidade](/display/fluig/Matriz+de+Portabilidade) do TOTVS Fluig Plataforma.

# Encriptação de senha

---

A encriptação de senha do banco de dados da plataforma é um procedimento muito importante, para evitar o acesso não autorizado à base de dados e com isso aumentar a segurança das suas informações.

Para realizar esse procedimento, é necessário seguir as etapas abaixo, que consistem em gerar a senha criptografada e, em seguida, criar a política de autenticação da aplicação com essa senha.

**oculto**

**Informação interna:**

Este passo a passo foi duplicado para o artigo: [https://centraldeatendimento.fluig.com/hc/pt-br/articles/360033268194](https://centraldeatendimento.fluig.com/hc/pt-br/articles/360033268194)

Se for feita alguma atualização, lembrar de repassar pra lá.

## Encriptação da senha da base de dados (DataSource)

---

Nessa etapa, a senha da base de dados é encriptada usando o método principal da classe **SecureIdentityLoginModule**, passando como parâmetro a senha em texto plano do banco de dados utilizado. Para fazer a configuração, siga os passos abaixo:

- [Passo 01](#)
- [Passo 02](#)

Navegue até a pasta raiz de instalação, e acesse a pasta**appserver.**

**Linux**              ==> /opt/fluig/appserver

**Windows**        ==> c:\fluig\appserver

Gere a senha encriptada.

**Linux:**

  **A partir da atualização 1.7**

[?](#)

| `../jdk-64/bin/java -cp modules/system/layers/base/org/jboss/logging/main/jboss-logging-3.3.0.Final.jar:modules/system/layers/base/org/picketbox/main/picketbox-5.0.3.Final.jar org.picketbox.datasource.security.SecureIdentityLoginModule senha#do#banco@123!` |
| --- |

  **Até a atualização 1.6.5**

[?](#)

| `../jdk-64/bin/java -cp modules/system/layers/base/org/jboss/logging/main/jboss-logging-3.3.0.Final.jar:modules/system/layers/base/org/picketbox/main/picketbox-4.9.6.Final.jar org.picketbox.datasource.security.SecureIdentityLoginModule senha#do#banco@123!` |
| --- |

**Windows**:

  **A partir da atualização 1.7**

[?](#)

| `java -cp modules/system/layers/base/org/picketbox/main/picketbox-5.0.3.Final.jar org.picketbox.datasource.security.SecureIdentityLoginModule senha-do-banco` |
| --- |

  **Até a atualização 1.6.5**

[?](#)

| `java -cp modules/system/layers/base/org/picketbox/main/picketbox-4.9.6.Final.jar org.picketbox.datasource.security.SecureIdentityLoginModule senha-do-banco` |
| --- |

Neste caso**senha-do-banco**, será a senha de acesso ao banco de dados, e o resultado será:

**Encoded password: 4c5ab21b9ec71385f5e13f39fd754340**

## Criar a política de autenticação da aplicação com a senha encriptada

---

Nessa etapa é mostrado onde fica o arquivo de configuração para acesso ao banco de dados (**domain.xml**), a aplicação da política de autenticação pelo aplicativo e a sua respectiva configuração.

Importante!

Antes de fazer qualquer alteração, é importante manter uma cópia do arquivo domain.xml original, caso seja necessário retornar alguma configuração.

- [Passo 01](#)
- [Passo 02](#)
- [Passo 03](#)

Navegue até a pasta raiz de instalação do TOTVS Fluig Plataforma e acesse a pasta de configuração onde está o arquivo**domain.xml**. Abra esse arquivo****em modo administrador ou root.

**Linux**              ==> /opt/fluig/appserver/domain/configuration

**Windows**        ==> c:\fluig\appserver\domain\configuration

Edite o arquivo**domain.xml**incluindo o bloco que contém a política de autenticação e a senha encriptada gerada na etapa anterior. Ao abrir o arquivo domain.xml, procure pela tag:

[?](#)

| `` |
| --- |

Dentro da tag **<security-domains>** é necessário inserir o seguinte bloco:

  **A partir da versão 1.6.5-190514**

[?](#)

| `````````````````````````````````````` |
| --- |

  **Até a versão 1.6.5-190507**

[?](#)

| `````````````````````````````````````` |
| --- |

O atributo  **security-domain name**, será usado posteriormente na configuração de acesso ao banco de dados.

Edite o arquivo**domain.xml** alterando o bloco de acesso ao banco de dados. Ao abrir o arquivo, procure pelas tags:

  **A partir da versão 1.6.5-190514**

[?](#)

| `````````````````` |
| --- |

  **Até a versão 1.6.5-190507**

[?](#)

| `````````````` |
| --- |

No primeiro *datasource* cujo *pool-name* é **FluigDS**, é necessário eliminar o seguinte bloco:

[?](#)

| ```admin``senhaDeTextoPlano``` |
| --- |

Após remover o bloco acima, substituí-lo pelo bloco abaixo:

[?](#)

| `````encrypted-FluigDS``` |
| --- |

No segundo *datasource* cujo *pool-name* é **FluigDSRO**, é necessário eliminar o seguinte bloco:

[?](#)

| ```admin``senhaDeTextoPlano``` |
| --- |

Após remover o bloco acima, substituí-lo pelo bloco abaixo.

[?](#)

| `````encrypted-FluigDS``` |
| --- |

**A partir da versão 1.6.5-190514**

No terceiro *datasource* cujo *pool-name* é **AppDS**, é necessário eliminar o seguinte bloco:

[?](#)

| ```admin``senhaDeTextoPlano``` |
| --- |

Após remover o bloco acima, substituí-lo pelo bloco abaixo.

[?](#)

| `````encrypted-FluigDS``` |
| --- |

## Pronto!

---

Após estes procedimentos, sua plataforma pode ser iniciada e passa a operar com a senha do banco encriptada, evitando acessos não autorizados e trazendo mais segurança para as suas informações.


<!-- anchors: ARQComoencriptarasenhadobancodedadosdaatualização1.6até1.8.2-Objetivo, ARQComoencriptarasenhadobancodedadosdaatualização1.6até1.8.2-Encriptaçãodesenha, ARQComoencriptarasenhadobancodedadosdaatualização1.6até1.8.2-Encriptaçãodasenhadabasededados(DataSource), Encriptação, Encriptação-01, Encriptação-02, highlighter_65980, highlighter_615366, highlighter_488350, highlighter_243933, ARQComoencriptarasenhadobancodedadosdaatualização1.6até1.8.2-Criarapolíticadeautenticaçãodaaplicaçãocomasenhaencriptada, Política, Política-01, Política-02, highlighter_990837, highlighter_982203, highlighter_599708, Política-03, highlighter_916414, highlighter_208341, highlighter_772412, highlighter_875286, highlighter_116340, highlighter_261038, highlighter_342258, highlighter_308148, ARQComoencriptarasenhadobancodedadosdaatualização1.6até1.8.2-Pronto! -->
