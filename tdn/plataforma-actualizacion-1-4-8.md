---
title: "Plataforma | Actualización 1.4.8"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=185740850"
scraped_at: "2026-03-09T04:26:01.692Z"
depth: 3
anchors: 5
child_links: 28
---

# Plataforma | Actualización 1.4.8

A continuación, entérese de las novedades en la actualización 1.4.8 de Fluig:

## BPM

**Central de Tareas para todos**

Ahora la Central de Tareas muestra el gráfico de tareas del mismo modo para todos los usuarios de la red, es decir, todos visualizan las tareas de cada tipo en el mismo orden y el mismo color. Por ejemplo, Mis Solicitudes se presentan en verde para todos los usuarios y en el mismo orden en la leyenda, independientemente del número de solicitudes existentes de cada tipo.

![](/download/attachments/185740850/SOCIALECMSUST-3747.PNG?version=1&modificationDate=1426019372000&api=v2) 

## Guía de Estilos 

**Transformación de elemento*****checkbox*****en componente*****switch*** 

 Ahora la Guía de Estilos cuenta con el método “FLUIGC.switcher.initAll”, que permite transformar diversos elementos *checkbox* en componente *switch*, filtrando – si se necesita – por hijos de un determinado nudo o por nombre cuando el formulario es del tipo Padre x Hijo. 

¿Te gustó?

Acceda a la [Guía de Estilos](https://style.fluig.com/javascript.html#switch-button) y obtenga más detalles acerca del nuevo método que está disponible. 

## Social

**Objeto*****oauthUtil*****en eventos de procesos**

El objeto *oauthUtil* ahora puede ser usado en eventos de procesos y en la creación de *datasets*personalizados. También se agregó un objeto genérico para consumir la API *oauth* de terceros.

¿Desea obtener más información?

Ingrese a la documentación [Consumo de la API Pública en Eventos](https://tdn.totvs.com/x/hRwSCw) y obtenga más información.

## WCM

**Nueva opción para crear y editar contenido**

El *widget* Editor de Contenido presenta una nueva opción en el editor. Ahora también puede ingresar códigos HTML en el editor para crear o modificar contenido más elaborado y personalizado, contando con los recursos que aporta el lenguaje HTML. Para ello, solo debe activar el Código fuente e ingresar el código deseado.

![](/download/attachments/185740850/SOCIALECMSUST-3853.PNG?version=1&modificationDate=1426019396000&api=v2)

## Correcciones

En esta sesión, enumeramos algunos bugs que eliminamos en esta actualización, los cuales garantizan que todo funcione bien en su plataforma.

- Movimiento de solicitud en dispositivos móviles cuando el proceso viene con un formulario adjunto y se utiliza la base de datos Oracle.

- Eliminación de archivos del área de *carga* después de iniciar una solicitud que tiene archivos adjuntos vía *webservice*.

- Visualización de archivos adjuntos a una solicitud mientras ésta se encuentra en curso y también después de finalizada.

- Visualización de imágenes en el *widget bannerSlideShow*para usuarios que poseen una matrícula diferente de *login*.

- Alteración del nombre del campo que se encuentra en la pantalla del mecanismo de asignación por usuario, en la configuración de actividades, de "Usuario" a "Matrícula del Usuario".

- Presentación del mensaje de finalización de la obtención de estadísticas de uso, disponible en la pestaña General del Panel de Control.

- Envío de notificación a los usuarios que participan del grupo cuando una tarea que posee mecanismo de asignación a grupos se envía a la próxima etapa.

- Desbloqueo del campo Observaciones, de la pestaña Observación del proceso, y campos del formulario en la última actividad cuando se utiliza el navegador Internet Explorer en las versiones 10 y 11.

- Selección de fechas en el calendario que se encuentra en un campo de formulario del tipo Fecha en la aplicación móvil de la plataforma cuando se utiliza el sistema operativo Android.

- Acceso a archivos y formularios publicados e inicio de solicitudes utilizando la versión 11 del navegador Internet Explorer.

- Uso de datos numéricos en registros de listas principales.

- Creación de empresas, a través de la opción Empresas, la cual se encuentra en la guía WCM al ingresar en la plataforma con el usuario "wcmadmin", en un entorno en el que el idioma y las configuraciones regionales se encuentran en español.

- Presentación del nombre del archivo físico en el mensaje que indica que el usuario no tiene permiso para publicar documentos en la carpeta en cuestión.

- Visualización y *download*adjuntos a los procesos de workflow cuando no se utiliza el visualizador interno. 

- Publicación de documentos a través del recurso *drag and drop* (arrastrar y soltar) en la navegación de documentos, utilizando el navegador Mozilla Firefox. 

- Edición de registros de formularios cuando se utiliza la base de datos Oracle.

- No se consideran usuarios inactivos en la validación de licencias durante la conversión de ECM a Fluig.

- Funcionamiento durante el uso de la navegación de documentos, mejorando el consumo de memoria de los objetos de comercialización.

- Uso del método *uploadCardData*de *webservice CardService* cuando la versión del registro de formularios es 1000.

- Exhibición de registros al consultar *datasets* del formulario Padre x Hijo durante eventos de *workflow.*

- Formato y exhibición de fechas en formularios de procesos *workflow* en los navegadores Mozilla Firefox, Internet Explorer y Google Chrome cuando se utiliza el idioma y la configuración regional en portugués (Brasil).

- Exportación de formularios que poseen eventos de Fluig Studio al servidor web.

- Creación de nueva revisión al alterar documentos configurados para crear una nueva revisión cuando su contenido está editado.


<!-- anchors: Plataforma|Actualización1.4.8-BPM, Plataforma|Actualización1.4.8-GuíadeEstilos, Plataforma|Actualización1.4.8-Social, Plataforma|Actualización1.4.8-WCM, Plataforma|Actualización1.4.8-Correcciones -->
