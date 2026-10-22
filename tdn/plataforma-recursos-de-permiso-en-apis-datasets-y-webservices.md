---
title: "Plataforma ❙ Recursos de permiso en APIs, datasets y webservices"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=555875972"
scraped_at: "2026-03-09T05:09:31.183Z"
depth: 3
anchors: 4
child_links: 59
---

# Plataforma ❙ Recursos de permiso en APIs, datasets y webservices

# Falando de recursos de permiso en APIs, datasets e webservices...

---

A través de las opciones de permisos se configura el control de acceso a todas las APIs públicas, datasets y a todos los webservices de la plataforma TOTVS Fluig. 

Los permisos aplicados son granulares: la seguridad obedece a la jerarquía, aunque se puede conceder permiso individualmente en los métodos: es decir, quien tiene acceso a la API completa puede estar restringido a un método determinado.

Estos permisos se detallan en [Permisos](/pages/viewpage.action?pageId=236430760).

- [Buscar recurso](#)
- [Aplicar permiso](#)

![](/download/attachments/555875972/Permiss%C3%A3o%202.png?version=2&modificationDate=1761134609420&api=v2)

![](/download/attachments/555875972/Permiss%C3%A3o%203.png?version=2&modificationDate=1761134625903&api=v2)

## Recursos para desarrolladores

---

| Descripción | Tipo | Nombre del recurso | Opciones de permisos |
| --- | --- | --- | --- |
| Descripción | Tipo | Nombre del recurso | Opciones de permisos |
| API en el modelo swagger | API | Consulte el nombre de la API y de los métodos de forma individual en https://api.fluig.com/ | Acceder: Cuando se activa, permite acceder al recurso. |
| API en el modelo antigo | API | Consulte el nombre de la API y de los métodos de forma individual en https://api.fluig.com/old/ | Acceder: Cuando se activa, permite acceder al recurso. |
| Webservice | API | Consulte el nombre de la API y de los métodos de forma individual en Utilização de Webservices | Acceder: Cuando se activa, permite acceder al recurso. |
| Dataset | DATASET | Para consultar el nombre del dataset, acceda al recurso Plataforma ❙ Datasets del panel de control y filtre por tipo interno. Atención: Dataset internos generados por el cliente (a partir de formularios) no tienen ningún control de permisos. | Acceder: Cuando se activa, permite acceder al recurso. |

**oculto**

**Descrição**: Personificação é quando uma pessoa executa ações em nome de outra. A plataforma possui serviços (APIs, datasets, webservices) que permitem que o usuário do contexto seja diferente do usuário logado. Por exemplo, o usuário acessa a API de workflow com o id "user1" e chama o método que movimenta uma solicitação workflow. Porém esse método tem um parâmetro que informa a partir de qual usuário será feita a movimentação, nesse caso pode ser passado o  id "user2", possibilitando que o user1 consiga movimentar uma solicitação que está com o user2. Esse recurso é essencial para automatizar alguns processos, no caso de ter um usuário "Integrador" que movimenta as solicitações atrasadas automaticamente. 

**Tipo**: Personification

**Nome do recurso**: Personificação de usuários

**Permissão**: Personificar: Quando ativada, permite executar ações utilizando o ID de outro usuário.

## Ejemplo de permiso granular

---

Se puede configurar el permiso para el recurso principal o para cada método del recurso. El permiso más granular, no obstante, es el que prevalece.

Por ejemplo: Configuro el permiso para el grupo “AB” para el webservice ECMDashBoardService y el permiso para los grupos “CD” y “EF” en el método ECMDashBoardService/findMyRequests. Los usuarios del grupo “AB” tendrán acceso a todos los métodos del webservice ECMDashBoardService, con excepción del método findMyRequests, al que solo tendrán acceso los usuarios de los grupos “CD” y “EF”.

Al acceder a una API o webservice para la cual el usuario no tiene permiso, se devuelve un error de permiso.![](/plugins/servlet/confluence/placeholder/unknown-macro?name=tooltip&locale=en_US&version=2)

**oculto**

Traduções:

Fique atento!

Esta documentación es válida a partir de la actualización **Voyager (2.0)**. Si utiliza una actualización anterior, puede contener información diferente de la que ve en su plataforma.


<!-- anchors: Plataforma❙RecursosdepermisoenAPIs,datasetsywebservices-FalandoderecursosdepermisoenAPIs,datasetsewebservices..., Permissões, Plataforma❙RecursosdepermisoenAPIs,datasetsywebservices-Recursosparadesarrolladores, Plataforma❙RecursosdepermisoenAPIs,datasetsywebservices-Ejemplodepermisogranular -->
