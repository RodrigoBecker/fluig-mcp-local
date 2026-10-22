---
title: "Configuração de autenticação utilizando LDAP"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=257623389"
scraped_at: "2026-03-09T04:01:18.584Z"
depth: 2
anchors: 22
child_links: 83
---

# Configuração de autenticação utilizando LDAP

Fique atento!

Esta página é válida a partir da atualização **Voyager (2.0)**do TOTVS Fluig.

Se você utiliza uma atualização anterior, acesse [Como configurar autenticação utilizando LDAP da atualização **1.6 até 1.8.2**](/pages/viewpage.action?pageId=940288430).

# Objetivo

---

O objetivo deste guia é orientar o administrador sobre como configurar a plataforma para permitir acesso dos usuários através das credenciais existentes em um diretório, como o Active Directory, via protocolo LDAP (*Lightweight Directory Access Protocol*).

Uma vez realizada a configuração, os usuários deverão informar os dados de acesso do LDAP (usuário/senha) na tela de *login* para acessar a plataforma.

# Configuração

---

**01.**Edite o arquivo **standalone.xml** localizado na pasta [diretório_instalação]\appserver\standalone\configuration.

**02.**Localize e substitua o trecho abaixo:

**standalone.xml**

[?](#)

| ```````````````````````````` |
| --- |

**03.** Informe os dados de acesso à fonte de dados LDAP, conforme o tipo de validação utilizado em seu Active Diretory:

- [Com credencial encriptada](#)
- [Com credencial](#)
- [Sem credencial](#)

 - Caso seja utilizado o LDAP com necessidade de credencial, deve-se possuir as credenciais de um usuário válido e com permissão de consulta no diretório LDAP (Active Directory).

 - Os dados de acesso devem ser informados nas propriedades **java.naming,security.principal** (*login*) e **bindCredential** (senha encriptada - veja abaixo como gerar a senha encriptada), após substituir pelo trecho abaixo.

  **standalone.xml**

[?](#)

| `````````````````````:/"/>````````````@"/>``````" />````````````````"/>````"/>``````````````` |
| --- |

Importante!

O TOTVS Fluig precisa estar atualizado com os pacotes [1.8.1-230718](https://tdn.totvs.com/x/VohjLQ), [1.8.0-230718](https://tdn.totvs.com/x/3QR2KQ) ou superior para o funcionamento da senha criptografada.

**Utilização do LDAPS**

---

Se for utilizado o LDAPS – que é uma extensão do protocolo LDAP – é necessário ajustar os parâmetros **java.naming.provider.url** para **ldaps** com a porta **SSL** e o **java.naming.security.protocol** para o valor **ssl**, conforme o exemplo abaixo:

  **standalone.xml**

[?](#)

| `````````````````````:/"/>````````````@"/>``````" />````````````````"/>````"/>``````````````` |
| --- |

Importante!

Pode ser que seja necessário importar o certificado utilizado no LDAPS para o Cacerts.

**Encriptação da senha LDAP**

---

Nessa etapa, a senha LDAP é encriptada usando o método principal da classe **SecureIdentityLoginModule**, passando como parâmetro a senha em texto plano do LDAP utilizado. Para fazer a configuração, siga os passos abaixo:

- [Passo 01](#)
- [Passo 02](#)

     - Navegue até a pasta raiz de instalação, e acesse a pasta**appserver.**

**Linux**              ==> /opt/fluig/appserver

**Windows**        ==> c:\fluig\appserver

     - Gere a senha encriptada.

 **Linux** 

[?](#)

| `../jdk-64/bin/java -cp modules/system/layers/base/org/jboss/logging/main/jboss-logging-3.3.0.Final.jar:modules/system/layers/base/org/picketbox/main/picketbox-5.0.3.Final.jar org.picketbox.datasource.security.SecureIdentityLoginModule senha#do#LDAP@123!` |
| --- |

 **Windows** 

[?](#)

| `java -cp modules/system/layers/base/org/picketbox/main/picketbox-5.0.3.Final.jar org.picketbox.datasource.security.SecureIdentityLoginModule senha#do#LDAP@123!` |
| --- |

Importante!

Neste caso,**senha#do#LDAP@123!** será a senha de acesso ao LDAP e o resultado será:

**Encoded password: -73d03118655333edd11db66184fee4f35a6d08d87b9a0393**

 - Caso seja utilizado o LDAP com necessidade de credencial, deve-se possuir as credenciais de um usuário válido e com permissão de consulta no diretório LDAP (Active Directory).

 - Os dados de acesso devem ser informados nas propriedades **java.naming,security.principal** (*login*) e **java.naming,security.credentials** (senha), após substituir pelo trecho abaixo.

  **standalone.xml**

[?](#)

| `````````````````````:/"/>````````````@"/>``````"/>````````````````"/>````"/>``````````````` |
| --- |

 - Caso seja utilizado a forma de validação direta, sem necessidade credencial, substitua pelo trecho abaixo:

  **standalone.xml**

[?](#)

| `````````````````````:/"/>````````````````"/>````"/>``````````````````` |
| --- |

Dica!

Caso opte por utilizar o login combinado, ou seja, deseja permitir tanto o acesso através do login/senha do Active Directory quanto da plataforma, **altere o valor da propriedade*****loginCombinedWithDatabase para "true"**.*Assim o usuário poderá utilizar ambos os tipos de credenciais para autenticar-se na plataforma.**

## Autenticação do usuário wcmadmin após a configuração de autenticação LDAP

---

No arquivo **standalone****.xml**, quando configurada a autenticação via LDAP é informado o parâmetro:

[?](#)

| `` |
| --- |

Quando definido como *false*, este parâmetro indica que o login funciona apenas com a senha do *Active Directory* e não funcionará com a senha que há na base. Como o **wcmadmin** é um usuário apenas da plataforma, ele não existe no AD. 

Há duas formas para corrigir a situação:

**01**. Criar um usuário com o campo login do AD igual a 'wcmadmin' e senha de sua preferência, assim a plataforma irá logar o usuário wcmadmin igual aos demais usuários, através do AD.

**02**. Alterar o parâmetro *"loginCombinedWithDatabase"* no arquivo **standalone.xml** (que fica no diretório**<Diretório de instalação>\appserver\standalone\configuration**) para '*true*'. Com isso, a plataforma irá permitir o login tanto com a senha da base de dados quanto com a senha do AD. Nesse caso o usuário wcmadmin irá se logar com a senha da base de dados normalmente. Demais usuários que tentarem se logar com a senha da base de dados também conseguirão.

## Cadastro dos usuários

---

Para que o usuário consiga acessar a plataforma utilizando LDAP, seu *login* deverá ser criado na plataforma utilizando o padrão do Active Directory (AD) configurado. Por exemplo, considere o login e e-mail abaixo:

- **Login**: nome.sobrenome

- **E-mail**: [nome.sobrenome@suaempresa.com](mailto:nome.sobrenome@fluig.com)

O *login* e o *e-mail* do usuário no AD deverão ser **iguais** ao *login* e *e-mail* deste usuário cadastrados na plataforma. Não há necessidade da senha do usuário na plataforma ser igual à cadastrada no AD.

# Propriedades de busca LDAP

---

O módulo de *login* LDAP passa as propriedades para definir a busca por um determinado usuário e seus papéis para o servidor LDAP.

### Definindo pesquisa por papel (Defining Role Search)

- **Propriedade rolesCtxDN**: utiliza a configuração de pesquisa de função semelhante às configurações do *LdapExtLoginModule*, entretanto a recursão usada encontra os papéis listados dentro de um DN. Para tanto ele usa o DN fixo do contexto de pesquisa para papéis de usuário. Considere que este não é o nome distinto de onde os papéis são reais, em vez disso, este é o DN de onde os objetos que contêm os papéis de usuário (por exemplo, para o diretório *active*, este é o DN onde a conta de usuário está).

### Definindo pesquisa DN (Defining DN Search)

- **Propriedade baseCtxDN**: define o DN fixo do contexto de pesquisa para papéis de usuário. Considere que este não é o nome distinto de onde os papéis reais estão localizados, mas o DN dos objetos que contêm a localização dos papéis de usuário (isto é, para o diretório ativo, este é o DN com a conta de usuário).

Dica!

Para mais informações sobre as propriedades **rolesCtxDN** e **baseCtxDN** clique [aqui](https://access.redhat.com/documentation/en-US/JBoss_Enterprise_Application_Platform/5/html/Negotiation_User_Guide/appendix-advancedldap.html) ou confira um exemplo de uso [aqui](https://access.redhat.com/documentation/en-US/JBoss_Enterprise_Application_Platform/5/html/Negotiation_User_Guide/apas02.html).


<!-- anchors: ConfiguraçãodeautenticaçãoutilizandoLDAP-Objetivo, ConfiguraçãodeautenticaçãoutilizandoLDAP-Configuração, highlighter_283544, ldap, ldap-550414786, highlighter_500006, highlighter_192449, Encriptação, Encriptação-01, Encriptação-02, highlighter_586742, highlighter_167201, ldap-1112639015, highlighter_781376, ldap-252698381, highlighter_134997, ConfiguraçãodeautenticaçãoutilizandoLDAP-AutenticaçãodousuáriowcmadminapósaconfiguraçãodeautenticaçãoLDAP, highlighter_800757, ConfiguraçãodeautenticaçãoutilizandoLDAP-Cadastrodosusuários, ConfiguraçãodeautenticaçãoutilizandoLDAP-PropriedadesdebuscaLDAP, ConfiguraçãodeautenticaçãoutilizandoLDAP-Definindopesquisaporpapel(DefiningRoleSearch), ConfiguraçãodeautenticaçãoutilizandoLDAP-DefinindopesquisaDN(DefiningDNSearch) -->
