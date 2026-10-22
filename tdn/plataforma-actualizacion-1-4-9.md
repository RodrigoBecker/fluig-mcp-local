---
title: "Plataforma | Actualización 1.4.9"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=185750308"
scraped_at: "2026-03-09T04:25:54.763Z"
depth: 3
anchors: 4
child_links: 28
---

# Plataforma | Actualización 1.4.9

A continuación, entérese de las novedades en la actualización 1.4.9 de Fluig: 

## BPM

**Mostrar lo que está siendo realizado en la plataforma**

De acuerdo con el área de negocios, un proceso *workflow* debe cumplir con muchos requisitos - validar datos del usuario, integrar datos con ERP, sistemas legados, etc. - ¿qué mostrar para el usuario mientras esos requisitos son procesados por Fluig? Ahora, con esta versión es posible mostrar un mensaje de acuerdo con la acción que realiza Fluig, conforme a los datos informados en el formulario. Es serio.

![](/download/attachments/185750308/SOCIALECMSUST-3857.gif?version=1&modificationDate=1427811632000&api=v2)

¿Está interesado?

Obtenga los detalles de utilización en [Desarrollo de *Workflow*](https://tdn.totvs.com/pages/viewpage.action?pageId=181962951).

## ECM

**Consulte los comentarios de documentos mediante la API pública**

Los métodos “*listDocument*” y “*listDocumentWithChildren*” de la API pública utilizados para listar documentos son más completos. Ahora cuentan con el comentario del documento – atributo “*additionalComments*”. 

¿Desea obtener más información?

Acceda a la [API pública](https://api.fluig.com/resource_DocumentServiceRest.html#path__ecm_document_listDocument_-folderId-.html) y vea los métodos complementados.

## Social  

**Activación y desactivación de usuarios ahora en API Pública también ** 

Están disponibles los servicios para activar y desactivar usuarios en la API Pública de Fluig, que son muy útiles para desarrollos sobre la plataforma e integraciones con *software* de terceros para gestión de usuarios activos en la plataforma.

Se interessou?

Acceda a la [API pública](https://api.fluig.com/resource_UserServiceRest.html#path__social_user_disable_-alias-.html) de Fluig y vea esta novedad.

**Servicio para creación de sesión*****OAuth*** 

 La API pública de Fluig ahora cuenta con el servicio que hace posible la generación de una sesión *OAuth* para una aplicación a partir de otra aplicación ya autenticada. 

Quer saber mais?

Acceda a la [API pública](https://api.fluig.com/resource_WCMServiceRest.html#path__wcm_oauth_generateKeys.html) de Fluig y obtenga más detalles.

## Correcciones

 En esta sesión, enumeramos algunos bugs que eliminamos en esta actualización, los cuales garantizan que todo funcione bien en su plataforma.

- Publicación y visualización de imágenes con el formato .jpeg cuando se utiliza el visualizador interno.

- Acceso a carpetas de la navegación de documentos que fueron creadas a partir de *webservices*.

- Impresión de copia controlada de documentos que son anexos de procesos *workflow*.

- Visualización de la solicitud principal, en el área Mis Solicitudes de la Central de Tareas, cuando el proceso posee subprocesos en actividades paralelas.

- Supervisión visual en el diseño del proceso para mostrar solicitudes cuyo flujo posee subprocesos en actividades paralelas.

- Exclusión de grupo de trabajo *workflow* del registro de un usuario.

- Utilización de estilos de formatación de texto en el editor de contenido.

- Consulta mediante *datasets* en campos de formulario del tipo texto que poseen apóstrofe.

- Movimiento de la solicitud cuando el formulario posee más de una versión.

- Forma de verificación y creación de índices en bancos de datos Oracle que causan impacto en la inicialización de la plataforma.

- Búsqueda en *zooms* estándar y personalizados después de informar el contenido a ser considerado y presionar la tecla Enter.  

- Retorno de usuarios al efectuar una consulta utilizando el *dataset “colleague*” sin considerar a usuarios internos de la plataforma. 

- Movimiento de solicitudes que poseen formulario después de insertar datos duplicados en un campo que posee validación.

- Seguridad de importación y exportación de procesos, determinando que solamente los usuarios con permiso en la página de configuración de procesos pueden realizar esas acciones.

- Movimiento de solicitudes en dispositivos móviles cuando los datos de formulario Padre x Hijo son almacenados en tablas de banco de datos.

- Generación de informes BIRT que utilizan *datasets* que crean instancia de servicios.Nota Vea cómo desarrollar informes BIRT en [Desarrollo de Informes](https://tdn.totvs.com/display/fluigesp/Desarrollo+de+Informes).

- Presentación de mensaje de explicación cuando un usuario desea acceder a un contenido privado – a partir del *link* correspondiente al contenido – de una comunidad en la que no participa.

- Estandarización en el retorno de inconsistencias ocurridas con lo parámetros “*publisherID*” o “*colleagueID*” del método “*createFolder*” del *webservice* “*ECMFolderService*” cuando se utiliza en integraciones.Nota Se puede obtener más información en [Utilización de Webservices](https://tdn.totvs.com/display/fluigesp/Uso+de+Webservices).


<!-- anchors: Plataforma|Actualización1.4.9-BPM, Plataforma|Actualización1.4.9-ECM, Plataforma|Actualización1.4.9-Social, Plataforma|Actualización1.4.9-Correcciones -->
