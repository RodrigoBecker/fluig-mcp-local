---
title: "Login Único"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=185757267"
scraped_at: "2026-03-09T03:50:30.600Z"
depth: 2
anchors: 21
child_links: 47
---

# Login Único

Atenção

Esta página foi revisada para atualizações 1.6 e superiores do TOTVS Fluig Plataforma.

Caso possua uma atualização anterior escolha o tópico da versão 1.5.13 e anteriores desta página.

# Índice

# Objetivo

---

O objetivo deste documento é direcionar desenvolvedores que desejam criar *widgets* e componentes para o TOTVS Fluig Plataforma, aproveitando sua infraestrutura de autenticação.

# Single Sign-On (SSO)

---

O Single Sign-On ou login único, é um mecanismo pelo qual é possível um usuário obter acesso a múltiplos serviços autenticando-se apenas uma vez em algum destes serviços.

Na plataforma TOTVS Fluig a autenticação deve ser sempre iniciada na própria plataforma (acessando a Home e informando usuário/senha). A partir daí então, os *widgets* e componentes poderão fazer uso do SSO para confiarem na autenticação.

Uma vez autenticado, os *widgets* poderão acessar os serviços do fluig (por exemplo, API pública) diretamente, sem a necessidade de fazer uma autenticação a cada requisição (por exemplo, via OAuth).

# A partir da atualização 1.6

---

A autenticação das widgets via SSO depende de três arquivos:

- [web.xml](#)
- [jboss-web.xml](#)
- [beans.xml](#)

 - Localizado dentro da pasta **WEB-INF**, o arquivo **web.xml** deve conter o seguinte conteúdo:

  **web.xml**

[?](#)

| ``````xsi:schemaLocation``=``"http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_3_0.xsd"````version``=``"3.0"``>````````REST````````REST````REST````/api/rest/*````````````REST````user````````````````FLUIGAUTH, FORM````TOTVSTech````````/login.jsp````````````````totvstech````````````user````````````sysadmin``````` |
| --- |

 - Deve-se atentar para a tag **<security-constraint>**, que define os caminhos que irão precisar de autenticação para serem acessados (no exemplo, **<contexto-da-windget>/api/rest/***).

 - Deve-se conter pelo menos uma tag **<security-constraint>.**A quantidade desta tag pode variar conforme necessidade.

 - Localizado dentro da pasta **WEB-INF**, o arquivo**jboss-web.xml** deve conter o seguinte conteúdo:

  **jboss-web.xml**

[?](#)

| ```````/[contexto-da-widget]````false``` ```TOTVSTech````````user````totvstech````````````totvstech````totvstech````````````sysadmin````wcmadmin````````````admin````wcmadmin``````` |
| --- |

 - Deve-se atentar para a tag **<context-root>**, que define o contexto que fará parte da URL para acessar recursos estáticos (js, css, etc.) dessa widget.

 - Localizado dentro da pasta **WEB-INF**, o arquivo **beans.xml** deve conter o seguinte conteúdo:

  **beans.xml**

[?](#)

| ``````xmlns:xsi``=``"http://www.w3.org/2001/XMLSchema-instance"````xsi:schemaLocation``=``"http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/beans_1_0.xsd"``>``` |
| --- |

# Atualização 1.5.13 e Anteriores

---

A autenticação das widgets via SSO depende de quatro arquivos:

- [web.xml](#)
- [jboss-web.xml](#)
- [beans.xml](#)
- [foundation-security-authentication-smal.jar](#)

 - Localizado dentro da pasta **WEB-INF**, o arquivo **web.xml** deve conter o seguinte conteúdo:

  **web.xml**

[?](#)

| ``````xsi:schemaLocation``=``"http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_3_0.xsd"````version``=``"3.0"``>````````REST````````REST````REST````/api/rest/*````````````REST````user````````````````FORM````TOTVSTech````````/login.jsp````````````````totvstech````````````user````````````sysadmin``````` |
| --- |

 - Deve-se atentar para a tag **<security-constraint>**, que define os caminhos que irão precisar de autenticação para serem acessados (no exemplo, **<contexto-da-windget>/api/rest/***).

 - Deve-se conter pelo menos uma tag **<security-constraint>.**A quantidade desta tag pode variar conforme necessidade.

 - Localizado dentro da pasta **WEB-INF**, o arquivo**jboss-web.xml** deve conter o seguinte conteúdo:

  **jboss-web.xml**

[?](#)

| ```````/[contexto-da-widget]````false``` ```TOTVSTech````````user````totvstech````````````totvstech````totvstech````````````sysadmin````wcmadmin````````````admin````wcmadmin````````````com.totvs.technology.auth.saml.TOTVSAuthenticatorValve``````` |
| --- |

 - Deve-se atentar para a tag **<context-root>**, que define o contexto que fará parte da URL para acessar recursos estáticos (js, css, etc.) dessa widget.

 - Localizado dentro da pasta **WEB-INF**, o arquivo **beans.xml** deve conter o seguinte conteúdo:

  **beans.xml**

[?](#)

| ``````xmlns:xsi``=``"http://www.w3.org/2001/XMLSchema-instance"````xsi:schemaLocation``=``"http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/beans_1_0.xsd"``>``` |
| --- |

 - Localizado dentro da pasta **WEB-INF/lib**.

 - O arquivo pode ser obtido no endereço http://nexus.fluig.com/content/groups/public/com/fluig/foundation-security-authentication-saml/[versao-do-fluig.

 - Ou, para widgets gerenciadas pelo Maven, esse arquivo é adicionado usando a seguinte dependência:

  **foundation-security-authentication-smal.jar**

[?](#)

| `````com.fluig````foundation-security-authentication-saml````compile````[versão-do-fluig]``` |
| --- |


<!-- anchors: LoginÚnico-Índice, LoginÚnico-Objetivo, LoginÚnico-SingleSign-On(SSO), LoginÚnico-Apartirdaatualização1.6, samples1, samples1-1, highlighter_743449, samples1-2, highlighter_777089, samples1-3, highlighter_68962, LoginÚnico-Atualização1.5.13eAnteriores, samples1, samples1-1, highlighter_370478, samples1-2, highlighter_22575, samples1-3, highlighter_799907, samples1-4, highlighter_936266 -->
