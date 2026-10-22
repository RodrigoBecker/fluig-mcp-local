---
title: "Platform ❙ Permission features in APIs, datasets and webservices"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=556381329"
scraped_at: "2026-03-09T05:09:35.195Z"
depth: 3
anchors: 4
child_links: 55
---

# Platform ❙ Permission features in APIs, datasets and webservices

# Speaking of permission features in APIs, datasets and webservices...

---

Via the permission options you can configure access control to all public APIs, internal datasets and all webservices powered by TOTVS Fluig.

The applied permissions are granular: It’s hierarchy security, but you can grant permission individually on the methods, that is, those who have access to the full API can be restricted to a particular method.

- [Search feature](#)
- [Apply permission](#)

![](/download/attachments/556381329/Permiss%C3%A3o%202.png?version=2&modificationDate=1766433904657&api=v2)

![](/download/attachments/556381329/Permiss%C3%A3o%203.png?version=2&modificationDate=1766434064293&api=v2)

## Developer features

---

| Description | Type | Feature name | Permission options |
| --- | --- | --- | --- |
| Description | Type | Feature name | Permission options |
| API in swagger model | API | To see the name of the API and methods individually, go to https://api.fluig.com/ | Access: When enabled, it allows you to access the feature. |
| API in the old model | API | To see the name of the API and methods individually, go to https://api.fluig.com/old/ | Access: When enabled, it allows you to access the feature. |
| Webservice | API | To see the name of the API and methods individually, go to Utilização de Webservices | Access: When enabled, it allows you to access the feature. |
| Dataset | DATASET | To query the name of the dataset, go to the Datasets feature in the Control Panel and filter by internal type. Attention: Customer-generated internal datasets (from forms) have no permission control. | Access: When enabled, it allows you to access the feature. |

**oculto**

**Descrição**: Personificação é quando uma pessoa executa ações em nome de outra. A plataforma possui serviços (APIs, datasets, webservices) que permitem que o usuário do contexto seja diferente do usuário logado. Por exemplo, o usuário acessa a API de workflow com o id "user1" e chama o método que movimenta uma solicitação workflow. Porém esse método tem um parâmetro que informa a partir de qual usuário será feita a movimentação, nesse caso pode ser passado o  id "user2", possibilitando que o user1 consiga movimentar uma solicitação que está com o user2. Esse recurso é essencial para automatizar alguns processos, no caso de ter um usuário "Integrador" que movimenta as solicitações atrasadas automaticamente. 

**Tipo**: Personification

**Nome do recurso**: Personificação de usuários

**Permissão**: Personificar: Quando ativada, permite executar ações utilizando o ID de outro usuário.

## Example of granular permission

---

You can configure permission to the main feature or each feature method. The most granular permission being the one that takes precedence.

For example: I configure permission for the “AB” group on the ECMDashBoardService webservice and permission to the “CD” and “EF” groups on the ECMDashBoardService/findMyRequests method. “AB” group users will have access to all ECMDashBoardService webservice methods, except for the findMyRequests method, which only the users from the “CD” and “EF” groups will have access to.

When the user accesses an API or webservice that the he/she does not have permission on, it returns a permission error.   **See the image **

Attention!

This documentation is valid from the **Voyager (2.0)** update onwards. If you are using a previous update, it may contain information different from what you see on your platform.


<!-- anchors: Platform❙PermissionfeaturesinAPIs,datasetsandwebservices-SpeakingofpermissionfeaturesinAPIs,datasetsandwebservices..., Permissões, Platform❙PermissionfeaturesinAPIs,datasetsandwebservices-Developerfeatures, Platform❙PermissionfeaturesinAPIs,datasetsandwebservices-Exampleofgranularpermission -->
