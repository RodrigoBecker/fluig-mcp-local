---
title: "Identity | Single Sign On via SAML"
url: "https://tdn.totvs.com/display/public/fluig/Identity+%7C+Single+Sign+On+via+SAML"
scraped_at: "2026-03-09T05:14:07.406Z"
depth: 3
anchors: 14
child_links: 40
---

# Identity | Single Sign On via SAML

# Índice

# Security Assertion Markup Language (SAML)

---

O SAML (*Security Assertion Markup Language*) é um padrão baseado em XML para a autenticação e autorização de informações entre dois parceiros confiáveis. Ele é baseado em outros padrões:

- *Extensible Markup Language* (XML)
- XML Schema
- XML Signature
- XML Encryption (apenas SAML 2.0)
- *Hypertext Transfer Protocol* (HTTP)
- SOAP

## Atores em SAML

![](/download/attachments/268796727/atores_saml.png?version=2&modificationDate=1485888794000&api=v2)

**Identity Provider (IDP) / Asserting Party**

- Autentica o usuário
- Gera o *assertion* (Isto é gerenciado pelo serviço *Single Sign On* – URL SSO)

#### Service Provider (SP) / Relying Party

- Consome o *assertion* (Isto é gerenciado pelo serviço *Assertion Consumer* – URL ACS)
- Fornece o recurso 

#### User

- Requisita acesso ao aplicativo

# SAML no Identity

---

O Identity suporta o *Single Sign On* baseado no SAML 2.0. Eles suportam os SSO SP-initiated e IDP-initiated.

### SAML - DOIS CENÁRIOS - Responsabilidades do Service Provider

#### Funcionalidades de alto nível do SP para SSO IDP - initiated

![](/download/attachments/268796727/1.png?version=1&modificationDate=1478288039000&api=v2)

****

1. Recebe a resposta SAML.
2. Verifica a assinatura.
3. Valida a resposta SAML.
4. Verifica o status da resposta, se foi uma autenticação válida ou não. Se o status for uma falha, ignora a assertion.
5. Valida o emissor. Isto exige que o IDP seja registrado com o SP.
6. Se criptografado, descriptografa a assertion.
7. Valida que a resposta possui uma assertion, declarações de autenticação e declarações de atributos.
8. Certifica-se que a assertion é valida na instância dada e é intencionada para o SP.
9. Determina a autorização dos usuários baseado nas declarações de autenticação e atributos na assertion.
10. Se autorizado, redireciona o usuário para o recurso requisitado/protegido.

#### Funcionalidades de alto nível do SP para SSO SP-initiated

****

![](/download/attachments/268796727/2.png?version=1&modificationDate=1478288039000&api=v2)

1. Gera a requisição de autenticação e envia para o IDP.
2. Recebe a resposta SAML.
3. Verifica a assinatura.
4. Valida a resposta SAML.
5. Verifica o status da resposta, se foi uma autenticação válida ou não. Se o status for uma falha, ignora a assertion.
6. Valida o emissor. Isto exige que o IDP seja registrado com o SP.
7. Descriptografa a assertion.
8. Valida que a resposta possui uma assertion, declarações de autenticação e declarações de atributos.
9. Certifica-se que a assertion é valida na instância dada e é intencionada para o SP.
10. Determina a autorização dos usuários baseado nas declarações de autenticação e atributos na assertion.
11. Se autorizado, redireciona o usuário para o recurso requisitado/protegido.

## SAML de Exemplo

#### Requisição SAML do Google Apps

[?](#)

| ``````AssertionConsumerServiceURL``=``"https://www.google.com/a/domain.com/acs"````ID``=``"cknmoleiackllcefehnhjinlfiaajgggmeaffkfa"````IsPassive``=``"false"````IssueInstant``=``"2012-10-18T23:40:09Z"````ProtocolBinding``=``"urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST"````ProviderName``=``"google.com"````Version``=``"2.0"``>````google.com```````AllowCreate``=``"true"````Format``=``"urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified"``/>``` |
| --- |

****

#### Resposta SAML do Identity

- Nesse exemplo pode ser observado que os campos *Nome, Sobrenome, e-mail, ID do Usuário no Identity, ID da Empresa no Identity,*estão inseridos dentro da *tag***<saml2:AttributeStatement>.**

[?](#)

| ``````xmlns:saml2p``=``"urn:oasis:names:tc:SAML:2.0:protocol"````Destination``=``"https://www.google.com/a/totvs.com.br/acs"````ID``=``"_7ab62e86a88d4142f5b3193252f9d6e8"````InResponseTo``=``"bedkdjdmfpeeakbhcmaacedeidmhecidlpkhigbh"````IssueInstant``=``"2022-07-21T11:50:45.795Z"````Version``=``"2.0"````xmlns:xs``=``"http://www.w3.org/2001/XMLSchema"``>```````xmlns:saml2``=``"urn:oasis:names:tc:SAML:2.0:assertion"````Format``=``"urn:oasis:names:tc:SAML:2.0:nameid-format:entity"``>TotvsLabs```````````xmlns:ds``=``"http://www.w3.org/2000/09/xmldsig#"``>```````````````````````````````````xmlns:ec``=``"http://www.w3.org/2001/10/xml-exc-c14n#"````PrefixList``=``"xs"` `/>````````````````9+6FhzqbZL7vkh8OdkT1OrVhKD0=````````````HgV4uqJcqsgbWsHPou6K9x43LxHUU7Fh3Ey0DTEAnc5ZiEPfFVtRMwLXAp6AcZwf+VJCS+kLLy2qaj/inBUn0+sOYUvL7Kz7yCDnwmGlxr2nR47LghVUi0pf9Y+ntd9CF5A38DfJ0bT9TnlnR2imsDnhfS+fPd5581MMD3kzxB4=````````````MIICBjCCAW8CBgFkKLewqzANBgkqhkiG9w0AAQsFADBJMSYwJAYDVQQLEx1Ub3R2c0xhYnMgUHJp bWFyeSBDZXJ0aWZpY2F0ZTESMBAGA1UEChMJVG90dnNMYWJzMQswCQYDVQQGEwJVUzAeFw0xODA2 MjIxODE4MDRaFw0yODA2MjIxODE4MDRaMEkxJjAkBgNVBAsTHVRvdHZzTGFicyBQcmltYXJ5IENl cnRpZmljYXRlMRIwEAYDVQQKEwlUb3R2c0xhYnMxCzAJBgNVBAYTAlVTMIGfMA0GCSqGSIb3DQEB````AQUAA4GNADCBiQKBgQCSTmcVLlj7K58TlSqCG6m51mSQlH0hPN5z0T2iMs/d30f8udnm75nla2OJ ktdDu8Jm8/XcCFoMfyKnkZojZgRPaFOqWjhh9/nYCcm8wGGFko3WYqrzmKzVtiJZ1+PfQdd5yXCe ao8Gevt46Ssfh7mLWSU4c+DcB5wWr9jM4ejVeQIDAQABMA0GCSqGSIb3DQEBCwUAA4GBAGxtZ6kP p+KRw0kpoqmRfY5B8ze7EmRMKvPtuJgtc4S912UWcXpTDPA+lLfOBB8E59U4KOV/1BLb2I3dH9D4````HybsurH96bJo44NJrApyQA+XNcLy/ax+PXB5405q2+bwemtuCvYkfdhAZrK334vNcVirJ5N5rPBb P4cm2mfCu/UK```````````````````````xmlns:saml2p``=``"urn:oasis:names:tc:SAML:2.0:protocol"``>```````````````xmlns:saml2``=``"urn:oasis:names:tc:SAML:2.0:assertion"````ID``=``"_51c17234853d6d6df950b4f3e5f9095f"````IssueInstant``=``"2022-07-21T11:50:45.795Z"````Version``=``"2.0"````xmlns:xs``=``"http://www.w3.org/2001/XMLSchema"``>````TotvsLabs```````xmlns:ds``=``"http://www.w3.org/2000/09/xmldsig#"``>```````````````````````````````````xmlns:ec``=``"http://www.w3.org/2001/10/xml-exc-c14n#"````PrefixList``=``"xs"` `/>````````````````ZcXfbLyk/2FGOXZdABQt8QfBGdU=````````````QO5XUdUJGbsGlAJ17oxFFv4NrtVT4G9Nay4jVEbi3x47oySLA+52plIe51rOBVCuUVR6IvDWBXrPgDb9szEveCcy8X8oX1EXpXTBpqdP6KQ4Oqz1bBY873+3XX51iYttXxtP3fapCzK/8uzI/JXJ+DqSUc76JrkT+SpeR+aogt4=````````````MIICBjCCAW8CBgFkKLewqzANBgkqhkiG9w0BAQsFADBJMSYwJAYDVQQLEx1Ub3R2c0xhYnMgUHJp bWFyeSBDZXJ0aWZpY2F0ZTESMBAGA1UEChMJVG90dnNMYWJzMQswCQYDVQQGEwJVUzAeFw0xODA2 MjIxODE4MDRaFw0yODA2MjIxODE4MDRaMEkxJjAkBgNVBAsTHVRvdHZzTGFicyBQcmltYXJ5IENl cnRpZmljYXRlMRIwEAYDVQQKEwlUb3R2c0xhYnMxCzAJBgNVBAYTAlVTMIGfMA0GCSqGSIb3DQEB````AQUAA4GNADCBiQKBgQCSTmcVLlj7K58TlSqCG6m51mSQlH0hPN5z0T2iMs/d30f8udnm75nla2AJ ktdDu8Jm8/XcCFoMfyKnkZojZgRPaFOqWjhh9/nYCcm8wGGFko3WYqrzmKzVtiJZ1+PfQdd5yXCe ao8Gevt46Ssfh7mLWSU4c+DcB5wWr9jM4ejVeQIDAQABMA0GCSqGSIb3DQEBCwUAA4GBAGxtZ6kP p+KRw0kpoqmRfY5B8ze7EmRMKvPtuJgtc4S912UWcXpTDPA+lLfOBB8E59U4KOV/1BLb2I3dH9D4````HybsurH96bJo44NJrApyQA+XNcLy/ax+PXB5405q2+bwemtuCvYkfdhAZrK334vNcVirJ5N5rPBb P4cm2mfCu/UK````````````````````````abc@totvs.com```````````NotOnOrAfter``=``"2022-07-21T12:00:45.795Z"````Recipient``=``"https://www.google.com/a/totvs.com.br/acs"` `/>```````````````NotOnOrAfter``=``"2022-07-21T12:00:45.795Z"``>````````https://www.google.com/a/totvs.com.br/acs```````````````SessionIndex``=``"_51c17234853d6d6df950b4f3e5f9095f"``>````````urn:oasis:names:tc:SAML:2.0:ac:classes:PasswordProtectedTransport```````````````````Name``=``"companyId"````NameFormat``=``"urn:oasis:names:tc:SAML:2.0:attrname-format:unspecified"``>```````xmlns:xsi``=``"http://www.w3.org/2001/XMLSchema-instance"````xsi:type``=``"xs:string"``>ft0y84vo717g8hjx```````````````Name``=``"firstname"````NameFormat``=``"urn:oasis:names:tc:SAML:2.0:attrname-format:unspecified"``>```````xmlns:xsi``=``"http://www.w3.org/2001/XMLSchema-instance"````xsi:type``=``"xs:string"``>Name```````````````Name``=``"entitlementsChanged"````NameFormat``=``"urn:oasis:names:tc:SAML:2.0:attrname-format:unspecified"``>```````xmlns:xsi``=``"http://www.w3.org/2001/XMLSchema-instance"````xsi:type``=``"xs:string"``>false```````````````Name``=``"appsChanged"````NameFormat``=``"urn:oasis:names:tc:SAML:2.0:attrname-format:unspecified"``>```````xmlns:xsi``=``"http://www.w3.org/2001/XMLSchema-instance"````xsi:type``=``"xs:string"``>false```````````````Name``=``"userId"````NameFormat``=``"urn:oasis:names:tc:SAML:2.0:attrname-format:unspecified"``>```````xmlns:xsi``=``"http://www.w3.org/2001/XMLSchema-instance"````xsi:type``=``"xs:string"``>ywam6h95jgk32fiq1407765456714```````````````Name``=``"email"````NameFormat``=``"urn:oasis:names:tc:SAML:2.0:attrname-format:unspecified"``>```````xmlns:xsi``=``"http://www.w3.org/2001/XMLSchema-instance"````xsi:type``=``"xs:string"``>abc@totvs.com```````````````Name``=``"lastname"````NameFormat``=``"urn:oasis:names:tc:SAML:2.0:attrname-format:unspecified"``>```````xmlns:xsi``=``"http://www.w3.org/2001/XMLSchema-instance"````xsi:type``=``"xs:string"``>Silva````````````````````` |
| --- |

****


<!-- anchors: Identity|SingleSignOnviaSAML-Índice, Identity|SingleSignOnviaSAML-SecurityAssertionMarkupLanguage(SAML), Identity|SingleSignOnviaSAML-AtoresemSAML, Identity|SingleSignOnviaSAML-ServiceProvider(SP)/RelyingParty, Identity|SingleSignOnviaSAML-User, Identity|SingleSignOnviaSAML-SAMLnoIdentity, Identity|SingleSignOnviaSAML-SAML-DOISCENÁRIOS-ResponsabilidadesdoServiceProvider, Identity|SingleSignOnviaSAML-FuncionalidadesdealtoníveldoSPparaSSOIDP-initiated, Identity|SingleSignOnviaSAML-FuncionalidadesdealtoníveldoSPparaSSOSP-initiated, Identity|SingleSignOnviaSAML-SAMLdeExemplo, Identity|SingleSignOnviaSAML-RequisiçãoSAMLdoGoogleApps, highlighter_782710, Identity|SingleSignOnviaSAML-RespostaSAMLdoIdentity, highlighter_598841 -->
