---
title: "Plataforma | Actualización 1.4.6"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=184780088"
scraped_at: "2026-03-09T04:26:09.675Z"
depth: 3
anchors: 3
child_links: 29
---

# Plataforma | Actualización 1.4.6

A continuación, consultar las novedades en la actualización 1.4.6 de Fluig:

## BPM

**Nuevo método para anexos en solicitudes**

Ahora usted puede anexar un documento publicado en la Navegación de Documentos a una solicitud. Para ello, basta emplear el nuevo método *attachDocument* de hAPI, el cual permite anexar documentos mediante eventos de *workflow*.

Nota

Se puede obtener información más detallada sobre el nuevo método en [Desarrollo de *Workflow*](https://tdn.totvs.com/display/fluig/Desenvolvimento+de+Workflow).

## ECM

**Nuevo evento disponible para documentos**

Ya está disponible para su utilización el nuevo evento *beforeDownloadContent* que permite ejecutar procedimientos y validaciones personalizadas antes de realizar la *descarga* de un documento.

Nota

Se puede acceder a [Desarrollo de Eventos](https://tdn.totvs.com/display/fluig/Desenvolvimento+de+Eventos) y consultar más detalles sobre la utilización del nuevo evento.

**Información sobre firma digital deshabilitada**

Ahora Fluig presenta un mensaje que informa que la firma digital está deshabilitada cuando el servidor de licencias no está configurado de acuerdo con los requisitos necesarios para su uso.

## Correcciones

En esta sesión, enumeramos algunos bugs que eliminamos en esta actualización, los cuales garantizan que todo funcione bien en su plataforma.

- Selección de actividad de destino cuando la actividad inicial direcciona directamente hacia una actividad automática con decisión basada en un campo de formulario de la solicitud.

- Movimiento de solicitudes en dispositivos móviles cuando una actividad del proceso posee un mecanismo de atribución definido mediante un campo de formulario.

- Envío de *e-mails* de acuerdo con lo que fue definido en la opción “Notificación de publicación en la comunidad” de la Central de Notificaciones.

- Utilización del método *datasets* disponible en la API pública *Dataset*.Nota Se puede obtener información adicional sobre el método “*datasets*” en la [API Pública](https://api.fluig.com/resource_DatasetServiceRest.html#path__ecm_dataset_datasets.html) de Fluig.

- Compartir contenido publicado en la Navegación de Documentos sólo en las comunidades en las que el usuario participa.

- Publicación de documentos con extensión no soportada por el visualizador interno en la carpeta Mis Documentos mediante la opción *drag and drop* (arrastrar y soltar).

- Exhibición de la cantidad de accesos a las páginas en las estadísticas presentadas en el informe de Analytics.

- Envío de *e-mail* con las estadísticas de uso cuando TLS está habilitado.

- Movimiento de solicitud que posee un formulario después de concluir una actividad mediante un dispositivo móvil

- Exclusión de los campos de descripción relacionados al formulario de un proceso cuando el proceso es excluido.

- Exportación de las tareas a concluir considerando el filtro definido por el proceso en la Central de Tareas.

- Desempeño del método “*updateCardData*” de *webservice CardService* al retornar información cuando el formulario en cuestión posee más de 600 ítems.

- Estandarización de la opción Imprimir para utilizar la impresión de copia controlada en todos los lugares en que es posible imprimir un documento.Nota Se puede obtener información adicional sobre impresión de copia controlada en la página [Utilización de Copia Controlada](https://tdn.totvs.com/pages/viewpage.action?pageId=181962728)

- Utilización de *hAPI.setCardValue()* en procesos con la actividad inicial del tipo Timer y con formulario asociado.

- Visualización de documentos relacionados que fueron migrados de ECM 3.0 hacia Fluig y que están publicados en la Navegación de Documentos.

- Movimiento de solicitudes que poseen registros de formularios relacionados.


<!-- anchors: Plataforma|Actualización1.4.6-BPM, Plataforma|Actualización1.4.6-ECM, Plataforma|Actualización1.4.6-Correcciones -->
