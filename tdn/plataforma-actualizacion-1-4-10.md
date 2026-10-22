---
title: "Plataforma | Actualización 1.4.10"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=185757681"
scraped_at: "2026-03-09T04:25:50.187Z"
depth: 3
anchors: 5
child_links: 31
---

# Plataforma | Actualización 1.4.10

A continuación, entérese de las novedades en la actualización 1.4.10 de Fluig:

## Arquitectura

**Defina el tiempo de conexión para integración** 

 Ahora, para servicios creados con API CXF para integración con sistemas externos es posible definir el tiempo que el desarrollo creado en la plataforma esperará para que el servicio responda (*timeout)* mediante la propiedad “*receive.timeout*”.

[?](#)

| `var` `properties = {};``properties[``"receive.timeout"``] =``"60000"``;``var` `serviceLocator = serviceHelper.instantiate(``'net.webservicex.Periodictable'``);``var` `service = serviceLocator.getPeriodictableSoap();``var` `customClient = serviceHelper.getCustomClient(service,``"net.webservicex.PeriodictableSoap"``, properties);``var` `result = customClient.getAtoms();` |
| --- |

Vea más detalles

Se puede obtener información más detallada sobre esta opción en [Integración con Aplicaciones Externas](https://tdn.totvs.com/pages/viewpage.action?pageId=181962779).

****

## BPM. 

**Seguimiento de alteraciones en procesos** 

 A partir de esta versión de Fluig es posible monitorear las alteraciones efectuadas por los usuarios en la configuración de procesos. Con el nuevo evento global “*afterReleaseProcessVersion*”, es posible hacer que Fluig sea aún más flexible cuando se libera una nueva versión de proceso.   

¿Está interesado?

Vea más detalles sobre el monitoreo de alteraciones en procesos en [Desarrollo de Eventos](https://tdn.totvs.com/pages/viewpage.action?pageId=181962754).

**Uso de "*****getValue*****" en*****datasets*** 

 Ahora es posible obtener el código de la empresa y el código del usuario autenticado – variables “*WKCompany”* y “*WKUser*”, respectivamente – al utilizar *datasets*desarrollados sobre la plataforma mediante el método “*getValue*”.

Obtenga más información

Acceda a la documentación [Desarrollo de Datasets](https://tdn.totvs.com/pages/viewpage.action?pageId=181962763) y vea más detalles.

**Mecanismo de atribución en procesos con gestor** 

 Para obtener una mejor velocidad en la generación de tareas para los usuarios en la Central de Tareas, las opciones de mecanismo de atribución de Gestor de Processo "Para un Grupo" y "Para un Papel" dejaron de existir para la configuración de procesos.

Importante

La configuración de un mecanismo de atribución de Gestor de Procesos por Campo de Formulario, por Grupo de Colaboradores, por Ejecutor de Actividad y Asociado puede ocasionar pérdida de performance en el uso de la Central de Tareas.

No es posible configurar procesos con mecanismo Asociado dentro de Asociado.

****

## ECM   

***Download*****de documentos en su propio formato cuando no existen anexos** 

 Ahora los documentos se mantienen en su propio formato al efectuar el *download c*uando no existe anexo relacionado a ellos. Y los documentos que poseen anexos so compactados en el formato .zip al realizar el *download*, manteniendo de esta manera todos los componentes del documento (documento principal y anexos). 

![](/download/attachments/185754144/SOCIALECMSUST-4013.png?version=1&modificationDate=1429035152000&api=v2)

## Correcciones 

En esta sesión, enumeramos algunos bugs que eliminamos en esta actualización, los cuales garantizan que todo funcione bien en su plataforma. 

- Utilización de mecanismo de atribución para una actividad del tipo Servicio en procesos. 

- Movimiento de muchas solicitudes de un proceso que posee un evento intermediario condicional.

- Exportación de solicitudes en la consulta cuando el número de solicitudes encontradas por el filtro definido es elevado.Importante Un mismo usuario no puede realizar exportaciones paralelas de la consulta de solicitudes.
- Visualización de documentos anexados a un registro de formulario.

- Exhibición de la columna Identificador en el listado generado al realizar la exportación de "Mis Solicitudes" y "Tareas por Concluir " de la Central de Tareas.

- Utilización de datos con comillas simples en tag Item del método "StartProcess" perteneciente a webservice "ECMWorkflowEngineService".Nota Se puede obtener más información en [Utilización de Webservices](https://tdn.totvs.com/display/fluigesp/Uso+de+Webservices).
- Verificación de la conexión SOAP de Fluig Studio cuando el servidor está configurado para utilizar la puerta 80. 
- Presentación del nombre del responsable por el área en las propiedades de la copia controlada del documento impreso. 
- Validación del campo “*documentTypeId*”, al crear un documento mediante *webservice,*para verificar si existe algún tipo de documento donde se informe su código. 
- Studio - Importación y exportación de procesos: solamente los usuarios con permiso para configurar procesos pueden realizar estas acciones. 
- Consumo de licencia de usuarios nombrados de Fluig por el usuario “*wcmadmin*”. 
- Envío de *e-mail* de notificación cuando un proceso emplea un *template* personalizado disponible solamente para un idioma diferente al idioma del usuario. 
- Exhibición de la opción que permite asumir una tarea que está en un *pool* para un papel a partir del *link* contenido en el *e-mail* de notificación personalizado que fue enviado a los usuarios pertenecientes al papel. 
- Permisos de edición y remoción de galerías en comunidades. 
- Mensaje de retorno al emplear el método “*getDocumentContent*”, de *webservice* “*ECMDocumentService*”, cuando sucede una inconsistencia relacionada a un “*documentID*” inválido.Nota Se puede obtener información más detallada en [Utilización de Webservices](https://tdn.totvs.com/display/fluigesp/Uso+de+Webservices).
- Impresión de copia controlada de un documento que tiene marca de agua cuando el servidor utiliza el sistema operativo Linux. 
- Conversión de solicitudes considerando los eventos desarrollados sobre la plataforma que corresponden a la nueva versión del proceso.
- Actualización del nombre de campos de formulario en la lista de reglas del formulario después de alterarlos en el editor Web.
- Visualización del contenido hacia el que los *hiperlinks* insertados en artículos publicados en la navegación de documentos direccionan.
- Creación de *layout* de página a partir del modelo que Fluig Studio ofrece y publicación de la página que emplea el *layout* personalizado.
- Cancelación de solicitudes del tipo Padre x Hijo que poseen formulario utilizando eventos de hAPI.Nota Se puede obtener más información sobre el método de cancelación de procesos en [Desarrollo de Workflow](https://tdn.totvs.com/pages/viewpage.action?pageId=181962951).
- Utilización del método “*getAvailableStatesDetail*” conjuntamente con el servicio “*ECMWorkflowEngineService*” cuando existe una actividad del tipo Servicios en el proceso.Nota Se puede obtener más información sobre el método “getAvailableStatesDetail” en [Desarrollo de Workflow](https://tdn.totvs.com/pages/viewpage.action?pageId=181962951).
- Inclusión de grupos de usuarios que poseen subgrupos en comunidades.
- Movimiento de solicitudes seguidas de inclusión de anexos cuando existen validaciones del evento “*beforeStateEntry*”.
- Exhibición de descripción larga de tareas en el proceso Ad Hoc en Fluig Web y en Fluig Mobile


<!-- anchors: Plataforma|Actualización1.4.10-Arquitectura, highlighter_960049, Plataforma|Actualización1.4.10-BPM., Plataforma|Actualización1.4.10-ECM, Plataforma|Actualización1.4.10-Correcciones -->
