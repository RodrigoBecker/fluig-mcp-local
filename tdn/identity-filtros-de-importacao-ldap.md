---
title: "Identity | Filtros de importação LDAP"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=221548455"
scraped_at: "2026-03-09T04:39:09.481Z"
depth: 3
anchors: 7
child_links: 34
---

# Identity | Filtros de importação LDAP

# Falando de filtros de importação LDAP...

---

Por padrão, a primeira importação total de usuários e grupos do Active Directory para o Identity é realizada após a configuração da conexão LDAP no SmartSync, quando o serviço é iniciado pela primeira vez, respeitando os filtros de importação de usuários e de importação de grupos, configurados no cadastro do AD dentro do Identity. 

Após este procedimento, o SmartSync passa a monitorar novas alterações nos usuários e grupos abrangidos pelos filtros de importação, para realizar a sincronização das edições dos mesmos para o TOTVS Identity.

Além disso, o SmartSync 5.0 irá varrer toda a base do AD automaticamente a cada 30s da última conclusão de varredura, com base nos filtros de importação, garantindo que todos os usuários e grupos foram devidamente sincronizados.

## Filtros LDAP

---

O protocolo LDAP possui um filtro com uma sintaxe própria para efetuar consultas no diretório com base no documento [RFC2254](http://www.faqs.org/rfcs/rfc2254.html).

O SmartSync é pré-configurado com um filtro que importa todos os usuários que possuam nome, sobrenome e e-mail preenchidos e grupos do Active Directory. Porém, a aplicação permite a personalização do filtro para importação de usuários e grupos, desde que a sintaxe e o filtro informados sejam válidos.

![](/download/attachments/221548455/image2023-2-14_17-38-6.png?version=1&modificationDate=1676407100740&api=v2)

A tabela abaixo apresenta os operadores mais utilizados na configuração de filtros para busca de registros em diretórios LDAP.

| Operador Lógico | Descrição |
| --- | --- |
| Operador Lógico | Descrição |
| = | Igual |
| <= | Menor ou igual |
| >= | Maior ou igual |
| & | E |
| | | Ou |
| ! | Negação |

A tabela abaixo exibe exemplos de sintaxes para buscas no diretório LDAP.

| Descrição | Sintaxe |
| --- | --- |
| Descrição | Sintaxe |
| Todos os objetos | (objectClass=*) |
| Usuários com e-mail preenchido | (&(objectClass=user)(objectClass=person)(mail=*)) |
| Grupos com uma descrição preenchida | (&(objectCategory=group)(description=*)) |
| Usuários que pertencem a um determinado grupo | (&(objectClass=user)(objectClass=person)(memberOf=CN=yourgroup,OU=yourOU,DC=yourcompany,DC=com)) |
| Busca de um um usuário especifico pelo SamAccountName | (&(objectClass=user)(objectClass=person)(sAMAccountName=seunome)) |
| Todos os usuários exceto um grupo | (&(objectCategory=person)(objectClass=user)(!(memberOf=CN=yourgroup,OU=yourOU,DC=yourcompany,DC=com))) |

IMPORTANTE!

Caso o filtro padrão do SmartSync seja modificado por um outro filtro com sintaxe incorreta ou as condições do filtro não sejam válidas, a importação dos usuários ou grupos pode não ser realizada.

IMPORTANTE!

Na propriedade memberOf, utilizar o valor distinguishedName completo, que fica na aba Attribute Editor das propriedades do grupo no Active Directory.

### Filtro de importação de usuários

---

Durante a configuração de um diretório, é possível definir os critérios da primeira importação de usuários do Active Directory para o Identity através do campo **Filtro de usuários**.

**Valor padrão do campo para filtro de usuários:**

[?](#)

| `(&(objectClass=user)(objectCategory=person))` |
| --- |

Para realizar a importação dos usuários do Active Directory para o Identity, o cadastro destes usuários deve, obrigatoriamente, possuir as propriedades abaixo preenchidas. Além disso, o filtro configurado no campo **Filtro de usuários** também é levado em consideração durante a importação de usuários.

| Propriedade | Descrição |
| --- | --- |
| Propriedade | Descrição |
| givenName | Nome do usuário |
| sn | Sobrenome do usuário |
| e-mail | E-mail do usuário |
| userAccountControl | O status do usuário deve ser ativo |
| objectGUID | Valor Global Único |

### Filtro de importação de grupos

---

Durante a configuração de um diretório, também é possível definir os critérios da primeira importação de grupos do Active Directory para o Identity através do campo **Filtro de grupos**.

**Valor padrão do campo para filtro de grupos:**

[?](#)

| `(objectCategory=group)` |
| --- |

**Valor padrão do campo para filtro de grupos:**

[?](#)

| `(&(objectClass=group)(sAMAccountName=MeuGrupo))` |
| --- |

| Propriedade | Descrição |
| --- | --- |
| Propriedade | Descrição |
| description | Descrição do grupo |
| sAMAccountName | Ldap-Display-Name |
| objectGUID | Valor Global Único |


<!-- anchors: Identity|FiltrosdeimportaçãoLDAP-FalandodefiltrosdeimportaçãoLDAP..., Identity|FiltrosdeimportaçãoLDAP-FiltrosLDAP, Identity|FiltrosdeimportaçãoLDAP-Filtrodeimportaçãodeusuários, highlighter_520424, Identity|FiltrosdeimportaçãoLDAP-Filtrodeimportaçãodegrupos, highlighter_344144, highlighter_217573 -->
