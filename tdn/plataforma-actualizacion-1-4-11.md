---
title: "Plataforma | Actualización 1.4.11"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=187826421"
scraped_at: "2026-03-09T04:25:45.624Z"
depth: 3
anchors: 4
child_links: 29
---

# Plataforma | Actualización 1.4.11

Vea a continuación las novedades en la actualización 1.4.11 de Fluig:

## Arquitectura

**¡API Pública versión 2.0!** 

Algunos métodos de la API Pública de Fluig evolucionaron para retornar datos estandarizados, incluyendo “*content *” y “*message*”. Estos métodos están disponibles en el mismo lugar en la API Pública, sin embargo están separados por la versión 2 (**v2**).

**Ejemplo:** “/wcm/version” y “/wcm/version**/v2**”.

Los métodos que poseen ahora una nueva versión son:  

- [/social/user/logged/v2](https://api.fluig.com/resource_UserServiceRest.html#path__social_user_logged_v2.html);
- [/sociable/comments/v2/{sociableId}](https://api.fluig.com/resource_SociableServiceRest.html#path__sociable_comments_v2_-sociableId-.html);
- [/ecm/sociabledocument/counter/v2/{id}/{version}](https://api.fluig.com/resource_SociableDocumentServiceRest.html#path__ecm_sociabledocument_counter_v2_-id-_-version-.html);
- [/ecm/sociabledocument/comment/v2](https://api.fluig.com/resource_SociableDocumentServiceRest.html#path__ecm_sociabledocument_comment_v2.html);
- [/ecm/sociabledocument/comment/v2/{id}/{version}](https://api.fluig.com/resource_SociableDocumentServiceRest.html#path__ecm_sociabledocument_comment_v2_-id-_-version-.html);
- [/ecm/sociabledocument/like/v2](https://api.fluig.com/resource_SociableDocumentServiceRest.html#path__ecm_sociabledocument_like_v2.html);
- [/ecm/sociabledocument/like/v2/{id}/{version}](https://api.fluig.com/resource_SociableDocumentServiceRest.html#path__ecm_sociabledocument_like_v2_-id-_-version-.html);
- [/alert/service/findAll/v2](https://api.fluig.com/resource_AlertServiceRest.html#path__alert_service_findAll_v2.html);
- [/alert/alerts/countUnread/v2](https://api.fluig.com/resource_AlertServiceRest.html#path__alert_alerts_countUnread_v2.html);
- [/social/favorite/bytype/v2/{type}](https://api.fluig.com/resource_FavoriteServiceRest.html#path__social_favorite_bytype_v2_-type-.html);
- [/social/community/communitiesOrderFavorites/v2/{alias}](https://api.fluig.com/resource_CommunityServiceRest.html#path__social_community_communitiesOrderFavorites_v2_-alias-.html);
- [/social/community/v2/{alias}](https://api.fluig.com/resource_CommunityServiceRest.html#path__social_community_v2_-alias-.html);
- [/wcm/version/v2](https://api.fluig.com/resource_WCMServiceRest.html#path__wcm_version_v2.html);
- [/relation/following/v2/{alias}](https://api.fluig.com/resource_RelationServiceRest.html#path__relation_following_v2_-alias-.html);
- [/relation/followers/v2/{alias}](https://api.fluig.com/resource_RelationServiceRest.html#path__relation_followers_v2_-alias-.html);
- [/sociable/likers/v2/{sociableId}](https://api.fluig.com/resource_SociableServiceRest.html#path__sociable_likers_v2_-sociableId-.html);
- [/social/community/participants/v2/{alias}](https://api.fluig.com/resource_CommunityServiceRest.html#path__social_community_participants_v2_-alias-.html)

Importante

Si ya emplea alguno de esos métodos, quédese tranquilo: no es necesario realizar ninguna modificación en las aplicaciones desarrolladas para Fluig, ya que los métodos originales no fueron modificados.
Usted necesitará realizar adecuaciones si desea emplear los métodos en la nueva versión de la API pública.
Pero tranquilo, los métodos antiguos continuarán funcionando - todavía no se descontinuarán. Pero recomendamos utilizar los nuevos métodos en el desarrollo de aplicaciones para Fluig.

**Agende la exclusión de archivos temporales** 

Ahora es posible definir cuándo deben ser excluidos los archivos del directorio temporal del servidor de Fluig, liberando de esa manera espacio en el disco. Para tal fin, basta crear una tarea del tipo Limpiar Archivos Temporales de Documentos, en el Programador de Tareas, y definir su periodicidad para que los archivos temporales de documentos sean excluidos.

Nota

Este recurso puede usarse cuando existe un gran volumen diario de *uploads* de documentos en la plataforma.

![](/download/attachments/185757705/SOCIALECMSUST-4204.png?version=1&modificationDate=1430743558000&api=v2)

## BPM

**Actualice el listado de tareas siempre que lo desee** 

Ahora es posible actualizar el listado de tareas exhibidas en cada pestaña de la Central de Tareas. Basta accionar la opción Actualizar, ubicada en la barra de acciones, para obtener actualizaciones de las solicitudes exhibidas. 

![](/download/attachments/185757705/SOCIALECMSUST-4195.png?version=3&modificationDate=1431346112000&api=v2)

** **

## ECM

**Obtenga detalles del documento en la copia controlada** 

Ahora es posible obtener más detalles del documento al crear una copia controlada a partir de las nuevas variables disponibles:

- *Webdesk.Revision: *revisión del documento;
- *Webdesk.Comments:*comentarios;
- *Webdesk.VersionDescription: *descripción de la versión;
- *Webdesk.Tag: tags*del documento.

Sepa más

Se puede obtener información más detallada en [Impresión de Copia Controlada](https://tdn.totvs.com/pages/viewpage.action?pageId=152802071).

** **

**Consulte la aprobación de documentos a partir de*****datasets*** 

En esta versión de Fluig es más fácil crear informes sobre aprobación de documentos. Ponemos a disposición *dataset* “*DocumentApprovalHistory*” que permite consultar el historial de aprobaciones y su respectiva información.

¿Le interesó?

Obtenga más detalles sobre el nuevo *dataset* en [*Datasets* internos Fluig](https://tdn.totvs.com/display/fluig/Datasets+internos+Fluig).

## Correcciones 

En esta sesión listamos algunos *bugs* que eliminamos en esta actualización, lo que garantiza que todo se ejecute bien en su plataforma.

- Utilización del carácter “ç” en los *tags* de las propiedades de una carpeta.

- Ejecución de tareas agendadas creadas por Fluig Studio y exportadas hacia Fluig cuando la frecuencia de ejecución sea día del mes.

- Movimiento de actividad del tipo Timer que está en ejecución después de crear una nueva versión del proceso que la contiene.

- Movimiento de *workflow* cuando se usa el componente Gateway Inclusivo y no se atiende ninguna condición.

- Definición de reglas para opciones de un campo del tipo *check box*de formularios de procesos.

- Visualización de imagen que fue insertada por *upload* en artículos publicados en comunidades.

- Movimiento de solicitud que posee flujo automático caducado.

- Exhibición de mensajes de inconsistencia cuando un usuario se autentica en la plataforma sin haberse presentado ninguna inconsistencia.

- Movimiento de solicitudes que cuentan con formulario después de rellenarlo y publicación de los datos del registro de formulario en la navegación de documentos.

- Configuración de permisos de *widgets* incluidos en páginas de comunidades.

- Exhibición de la opción Editar solamente para archivos publicados que cuentan con soporte de Fluig y pueden ser editados.

- Inclusión de galerías, imágenes y videos en comunidades por usuarios que son miembros y cuentan con permiso de grabación.

- Búsqueda por contenido de documentos que están compactados en formato .zip.


<!-- anchors: Plataforma|Actualización1.4.11-Arquitectura, Plataforma|Actualización1.4.11-BPM, Plataforma|Actualización1.4.11-ECM, Plataforma|Actualización1.4.11-Correcciones -->
