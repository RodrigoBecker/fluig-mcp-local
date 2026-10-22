---
title: "Encriptação de senha do banco de dados"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=454434362"
scraped_at: "2026-03-09T04:10:48.394Z"
depth: 2
anchors: 21
child_links: 63
---

# Encriptação de senha do banco de dados

Fique atento!

Esta página é válida a partir da atualização **Voyager (2.0)**do TOTVS Fluig.

Se você utiliza uma atualização anterior, acesse [Como encriptar a senha do banco de dados da atualização **1.6 até 1.8.2**](/pages/viewpage.action?pageId=940299992).

# Objetivo

---

Este guia tem como finalidade demonstrar os passos necessários para realizar a encriptação sobre a senha de acesso ao banco de dados.

Importante!

Esse procedimento pode ser realizado para encriptação da senha de todos os bancos de dados homologados pela [Matriz de Portabilidade](/display/fluig/Matriz+de+Portabilidade) do TOTVS Fluig.

# Encriptação de senha

---

A encriptação de senha do banco de dados da plataforma é um procedimento muito importante para evitar o acesso não autorizado à base de dados e com isso aumentar a segurança das suas informações.

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

 - Navegue até a pasta raiz de instalação, e acesse a pasta**appserver.**

**Linux**              ==> /opt/fluig/appserver

**Windows**        ==> c:\fluig\appserver

 - Gere a senha encriptada.

**Linux:**

[?](#)

| `../jdk-64/bin/java -cp modules/system/layers/base/org/jboss/logging/main/jboss-logging-3.3.0.Final.jar:modules/system/layers/base/org/picketbox/main/picketbox-5.0.3.Final.jar org.picketbox.datasource.security.SecureIdentityLoginModule senha#do#banco@123!` |
| --- |

**Windows**:

[?](#)

| `java -cp modules/system/layers/base/org/picketbox/main/picketbox-5.0.3.Final.jar org.picketbox.datasource.security.SecureIdentityLoginModule senha-do-banco` |
| --- |

Importante!

Neste caso,**senha-do-banco** será a senha de acesso ao banco de dados e o resultado será:

**Encoded password: 4c5ab21b9ec71385f5e13f39fd754340**

## Criar a política de autenticação da aplicação com a senha encriptada

---

Nessa etapa é mostrado onde fica o arquivo de configuração para acesso ao banco de dados (**standalone.xml**), a aplicação da política de autenticação pelo aplicativo e a sua respectiva configuração.

Importante!

Antes de fazer qualquer alteração, é importante manter uma cópia do arquivo standalone.xml original, caso seja necessário retornar alguma configuração.

- [Passo 01](#)
- [Passo 02](#)
- [Passo 03](#)

 - Navegue até a pasta raiz de instalação do TOTVS Fluig Plataforma e acesse a pasta de configuração onde está o arquivo**standalone.xml**. Abra esse arquivo****em modo administrador ou root.

**Linux**              ==> /opt/fluig/appserver/standalone/configuration

**Windows**        ==> c:\fluig\appserver\standalone\configuration

 - Edite o arquivo**standalone.xml**incluindo o bloco que contém a política de autenticação e a senha encriptada gerada na etapa anterior. Ao abrir o arquivo standalone.xml, procure pela *tag*:

[?](#)

| `` |
| --- |

 - Dentro da *tag* **<security-domains>** é necessário inserir o seguinte bloco:

[?](#)

| `````````````````````````````````````` |
| --- |

 - O atributo **security-domain name** será usados posteriormente na configuração de acesso ao banco de dados.

 - Edite o arquivo**standalone.xml** alterando o bloco de acesso ao banco de dados. Ao abrir o arquivo, procure pelas *tags*:

[?](#)

| `````````````````` |
| --- |

 - No primeiro *datasource* cujo *pool-name* é **FluigDS**, é necessário eliminar o seguinte bloco:

[?](#)

| ```admin``senhaDeTextoPlano``` |
| --- |

 - Após remover o bloco acima, substituí-lo pelo bloco abaixo:

[?](#)

| `````encrypted-FluigDS``` |
| --- |

 - No segundo *datasource* cujo *pool-name* é **FluigDSRO**, é necessário eliminar o seguinte bloco:

[?](#)

| ```admin``senhaDeTextoPlano``` |
| --- |

 - Após remover o bloco acima, substituí-lo pelo bloco abaixo.

[?](#)

| `````encrypted-FluigDS``` |
| --- |

## Pronto!

---

Após estes procedimentos, sua plataforma pode ser iniciada e passa a operar com a senha do banco encriptada, evitando acessos não autorizados e trazendo mais segurança para as suas informações.


<!-- anchors: Encriptaçãodesenhadobancodedados-Objetivo, Encriptaçãodesenhadobancodedados-Encriptaçãodesenha, Encriptaçãodesenhadobancodedados-Encriptaçãodasenhadabasededados(DataSource), Encriptação, Encriptação-01, Encriptação-02, highlighter_883850, highlighter_28438, Encriptaçãodesenhadobancodedados-Criarapolíticadeautenticaçãodaaplicaçãocomasenhaencriptada, Política, Política-01, Política-02, highlighter_372956, highlighter_95536, Política-03, highlighter_99457, highlighter_505194, highlighter_595099, highlighter_637350, highlighter_81231, Encriptaçãodesenhadobancodedados-Pronto! -->
