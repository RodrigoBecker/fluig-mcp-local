---
title: "Plataforma | Actualización 1.5.11"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=248583704"
scraped_at: "2026-03-09T04:20:38.975Z"
depth: 3
anchors: 25
child_links: 44
---

# Plataforma | Actualización 1.5.11

Vea, a continuación, las novedades en la actualización 1.5.11 de fluig:

## BPM

**Asuma múltiples tareas en Pool de una sola vez**

Usted pidió más productividad y nosotros cumplimos. Asumir la responsabilidad de solicitudes enviadas a un grupo o papel se volvió mucho más práctico con la nueva opción **Asumir en bloque** de la Central de Tareas. ¡Solo debe acceder a la pestaña de tareas en Pool para el grupo/papel deseado, seleccionar las tareas y asumirlas con un solo clic!

![](/download/attachments/248583704/Assumir%20em%20bloco.gif?version=1&modificationDate=1473703119000&api=v2)

No se olvide de los Web Services

¿Desea automatizar el procedimiento de asumir tareas? Utilice los métodos [*assumeProcessTask*](https://api.fluig.com/resource_WorkflowRest.html#path__2.0_workflows_assumeProcessTask.html) y [*assumeProcessTasks*](https://api.fluig.com/resource_WorkflowRest.html#path__2.0_workflows_assumeProcessTasks.html) disponibles en fluig API.

**Facilite la publicación de adjuntos con el nuevo Mecanismo de Asignación a Todos los Usuarios**

Para hacer que el control de Seguridad de adjuntos sea más sencillo, ponemos a disposición el nuevo mecanismo de asignación **a Todos los Usuarios**. Este mecanismo permite definir permisos generales de publicación, edición y eliminación de adjuntos en solicitudes, que se aplicarán a todos los usuarios de la plataforma de una manera mucho más práctica.

![](/download/attachments/248583704/05.png?version=1&modificationDate=1473703302000&api=v2)

Esté atento

El nuevo mecanismo de asignación a Todos los Usuarios está disponible solo para la configuración de Seguridad de adjuntos.

**Utilice las mismas configuraciones de seguridad para complementos incluidos a través de*****Web Service***

Ahora, cuando incluya complementos en solicitudes utilizando el método setTasksComments del *Web Service*[WokflowEngineService](https://tdn.totvs.com/pages/viewpage.action?pageId=73084007#Utiliza%C3%A7%C3%A3odeWebservices-ECMWorkflowEngineService), la plataforma tendrá en cuenta las mismas configuraciones de seguridad de complementos definidas en las propiedades del proceso. De esta manera, se puede permitir que más personas incluyan complementos en una solicitud a través del *Web Service*, haciendo que los procesos sean más dinámicos y de colaboración.

Recordando...

La configuración de seguridad de complementos es realizada por el proceso y el responsable de dicho proceso puede elegir lo que mejor se adapte a cada demanda en la pestaña **General** de las **Propiedades** del proceso habilitando la opción "**¿Complementar solicitudes?**". En las configuraciones existen las opciones: 

- Solicitante, responsable/s por actividad y gestor;
- Todos los participantes del proceso y gestor;
- Todos los usuarios (únicamente cuando el proceso es público).

![](/download/attachments/248583704/06.png?version=1&modificationDate=1473703363000&api=v2)

## Social

**Descubra las*****tags*****más populares con el nuevo*****wigdet*****Nube de*****Tags*** 

Para que todos los usuarios puedan estar informados sobre los asuntos que más se discuten en las comunidades, creamos un nuevo *widget:***Nube de*****Tags***. Este *widget* se incluye de forma automática en todas las nuevas comunidades que se crean a partir de esta actualización, y también se pueden agregar en las páginas personalizables de la plataforma, como por ejemplo, en la Página de Inicio.

Las *tags* con mayor popularidad se presentan en la nube en tamaños más grandes y con tonos más oscuros. ¡Haga que el uso de fluig en su empresa sea más social e interactivo a partir de esta novedad!

- [Visualización](#)
- [Configuraciones](#)
- [Guía de estilo](#)

![](/download/attachments/248583704/07.png?version=1&modificationDate=1473703415000&api=v2)

**Las nuevas comunidades, creadas a partir de esta actualización, ya contarán con el nuevo*****widget*****por defecto.  **

![](/download/attachments/248583704/20.PNG?version=3&modificationDate=1473703892000&api=v2)

**La Nube de*****Tags*****también se puede incluir en páginas de fluig, como la Página de Inicio. **

Además de estar presente como un widget por defecto, la Nube de Tags también está disponible como un nuevo componente de [fluig Style Guide](https://style.fluig.com/miscellaneous.html#tagscloud), lo que permite su uso en el desarrollo de formularios y widgets ¡y que se personalicen formatos, tamaño y colores!

![](/download/attachments/248583704/nuevo.PNG?version=1&modificationDate=1473769456000&api=v2)

Sugerencia

Para crear una *tag*, solo debe agregar un # antes de la palabra deseada. [¡Vea el video](https://www.youtube.com/watch?v=tN-SwZiauuE) en nuestro canal de YouTube! #sugerencia #fluig #tags

****

**Incluya videos de YouTube en publicaciones y véalos en todos los navegadores**

A través de la nueva API de YouTube utilizada por fluig, todos los navegadores aprobados contarán con la capacidad de reproducir videos en HTML5 directamente desde *timeline*, es decir ¡basta de videos en Flash!

![](/download/attachments/248583704/08.PNG?version=2&modificationDate=1473764035000&api=v2)

Sugerencia

Para incluir un contenido de YouTube, solo debe introducir la URL del video en el campo compartir. Fluig detectará e incluirá automáticamente *el player* del video en el momento de la publicación del *post*.

## LMS

**Conozca la evolución del Catálogo de Materias y Grupos**

El nuevo Catálogo de Materias y Grupos está diseñado para hacer que la gestión de las materias, grupos, temas e ítems de temas sea mucho más ágil y práctica, a través de una nueva imagen y con una navegación semejante a la de la estructura de carpetas y documentos de ECM.

Las nuevas páginas del Catálogo también cuentan con una búsqueda contextual, que permite buscar rápidamente un término a través de lo que se está mostrando en la pantalla.

Sugerencia

Ingrese al Help Online de fluig para obtener más información sobre los recursos del [Catálogo de Materias y Grupos](https://tdn.totvs.com/display/HF/Disciplinas+e+turmas) y de la página [Inicio](https://tdn.totvs.com/pages/viewpage.action?pageId=233765875) del menú Mi Aprendizaje.

- [Catálogo](#)
- [Materia](#)
- [Grupo](#)

![](/download/attachments/248583704/10.PNG?version=2&modificationDate=1473706020000&api=v2)

****

**Al ingresar a una materia, la información básica de la materia y todos los grupos y grupos modelo se presentan en la misma página.**

![](/download/attachments/248583704/12.PNG?version=2&modificationDate=1473708805000&api=v2)

**Los grupos presentan todos los temas e ítems de tema registrados, además de mostrar la información básica, como la situación, la cantidad de cupos y la validez.**

No se preocupe...

Toda la información y las acciones disponibles en el catálogo antiguo estarán presentes en estas nuevas páginas

¡**Páginas de Pistas y Capacitaciones con una nueva cara!**

Con el fin de mejorar la usabilidad y el rendimiento, las páginas de ejecución de pistas y capacitaciones del menú Mi Aprendizaje cuentan con un nuevo *diseño*, mucho más rápido y súper intuitivo de usar.

Al ingresar a una pista, las capacitaciones, pruebas y evaluaciones de reacción que la componen ahora se presentan en una sola pantalla, para simplificar la navegación y ofrecerle mayor claridad al alumno. Lo mismo vale también para las capacitaciones en curso, que pasan a centralizar los contenidos y las pruebas que forman parte de ellas.

![](/download/attachments/248583704/15.PNG?version=3&modificationDate=1473764161000&api=v2)

## Guía de estilo

**Su guía, ahora con mucho más estilo**

El portal de documentación de fluig Style Guide tiene una nueva imagen, más moderna, limpia y fácil de navegar, con el fin de hacer que la experiencia de uso sea más fluida y agradable para los desarrolladores de la plataforma.

Este portal también está más integrado a los otros entornos de conocimiento de fluig, con *links* disponibles en la parte superior de la página, para los portales de Documentación técnica, APIs y Ayuda de la plataforma.

![](/download/attachments/244419267/Style_Guide.gif?version=1&modificationDate=1472754821000&api=v2)

 **Ingrese a style.fluig.com y vea el nuevo portal**

## Novedades en documentación 

- A través de la documentación de [Integración fluig x Analytics](file://10.80.128.94/pages/viewpage.action%3fpageId=244921190), obtenga una visión general de los conceptos, recursos y el funcionamiento de la integración de fluig con Analytics. 

- También hemos creado una nueva documentación para aclarar el procedimiento de [creación de informes en fluig Analytics](https://tdn.totvs.com/x/KIOFDg) y actualizamos la documentación de [Datos para Informes](file://10.80.128.94/pages/viewpage.action%3fpageId=107941778), donde usted puede comprobar los detalles de los atributos de cada dataset enviado a Analytics.

- Se incluye el nuevo ítem sobre el [salto de líneas en literales](https://tdn.totvs.com/pages/viewpage.action?pageId=160105353#Tradu%C3%A7%C3%A3odeProcessos-Quebradestringslongasemtradu%C3%A7%C3%A3odeprocessos) para mejorar la visualización de expresiones que se traducen en procesos.

- Nueva recomendación sobre el uso de los eventos *beforeMovementOptions* y *beforeSendValidate* en el [desarrollo de formularios Mobile](https://tdn.totvs.com/pages/viewpage.action?pageId=146181573#Desenvolvimentodeformul%C3%A1rioMobile-Recomenda%C3%A7%C3%B5esparaprocessoscomformul%C3%A1rioMobile).

- Control de la visualización de los recursos de la página *Inicio*, a través de la definición de permisos, con la información disponible [en esta FAQ](https://tdn.totvs.com/x/gl8-Dg).

- Complementamos la documentación del recurso de Borradores en la [Guía de uso fluig Mobile](https://tdn.totvs.com/pages/viewpage.action?pageId=107940624#GuiadeUtiliza%C3%A7%C3%A3ofluig-Mobile-Rascunhos).

- Se incluye en la Guía de estilos un ejemplo de configuración para la implementación de un [*Datatable*](https://style.fluig.com/javascript.html#fluig-datatable) con un servicio REST y el parámetro *data*.

- Ejemplo de implementación de zoom en *widgets* agregando a la documentación [Cómo crear un *Widget* que busque contenido](https://tdn.totvs.com/pages/viewpage.action?pageId=185735401#ComocriarumWidgetquebusqueconte%C3%BAdo-Zoom/FilterdeDataset)
- Descripción mejorada sobre la devolución del método [UserVO getUser()](https://tdn.totvs.com/display/fluig/Layouts#Layouts-Vari%C3%A1veisDispon%C3%ADveisnoFTL) en la documentación de *Layouts*.

- Para obtener más información acerca de los permisos de *widgets*, visite la nueva página [Permisos del *widget*](https://tdn.totvs.com/pages/viewpage.action?pageId=244910403) en Help fluig.

- Ejemplo de implementación de zoom compuesto en dataset personalizado agregado a la documentación [Desarrollo de Datasets](https://tdn.totvs.com/display/fluig/Desenvolvimento+de+Datasets#DesenvolvimentodeDatasets-UtilizandozoomcompostoemDatasetcustomizado).

- Documentación correspondiente a la [Autenticación Integrada](https://tdn.totvs.com/pages/viewpage.action?pageId=162170863) y [a través de LDAP](https://tdn.totvs.com/pages/viewpage.action?pageId=73080058) complementadas con aclaraciones sobre el uso de cada tipo de autenticación.

- Nueva recomendación para el uso de los eventos de teclado en la plataforma Android en la página [Desarrollo de formulario Mobile](https://tdn.totvs.com/pages/viewpage.action?pageId=146181573#Desenvolvimentodeformul%C3%A1rioMobile-Recomenda%C3%A7%C3%B5esparaprocessoscomformul%C3%A1rioMobile).

- Documentación complementada [Datasets internos fluig](https://tdn.totvs.com/x/SgKeCQ) con información sobre el *processTask* - Tareas de las solicitudes de procesos *workflow*.

¡Importante!

Si se utiliza el campo *taskObservation* para alguna finalidad –como integraciones– en desarrollo sobre la plataforma en actualizaciones anteriores a fluig 1.5, es importante revisar esta documentación.

- Aprenda cómo identificar si un campo de tipo checkbox del formulario está marcado o no, utilizando este ejemplo del método [getCardValue](https://tdn.totvs.com/x/widbB). 

## Correcciones

En esta sesión hacemos una lista de algunos bugs que eliminamos en esta actualización que aseguran que todo funciona sin problemas en su plataforma.

**Arquitectura**

- Eliminación de la opción “¿Olvidó su contraseña?” de la página de login en entornos con autenticación LDAP.

- Visualización del botón para ampliar la ventana de visualización de la Política de Uso de la empresa

- Rendimiento mejorado de las consultas ejecutadas en la base de datos durante el acceso de los usuarios a la plataforma.

- Grafía del mensaje que se muestra después de autenticarse y que informa sobre la actualización de la plataforma.

- Marcar o desmarcar todas las notificaciones por e-mail o push en las configuraciones de notificaciones del usuario.

- Compilación del artefacto de Elucidat en la Central de Componentes para permitir la prueba de conexión de las claves de activación del mashup.

- Uso de widget desarrollado sobre la actualización 1.4.12 de la plataforma después de aplicar la actualización 1.5.9.

****

**BPM**

- Inclusión de varios archivos como adjuntos en las actividades de una solicitud utilizando el recurso de arrastrar y soltar.

- Verificación previa de los usuarios, grupos y papeles definidos en mecanismos por asociación cuando se libera una nueva versión de un proceso.

- Ajuste en la devolución del método toString de la propiedad createDate del objeto DocumentDTO para que siempre se utilice el mismo formato de hora.

- Verificación de los permisos de seguridad cuando se informa la variable WKNumProcess en la URL de acceso al formulario.

- Uso de path relativo en las bibliotecas CSS y JavaScript del editor de formularios en la plataforma web.

 Más información...

El uso del path relativo se aplicará automáticamente a los nuevos formularios creados por el editor web. En formularios preexistentes, se debe editar y guardar el formulario para aplicar esta corrección.

- Inclusión de una alerta de confirmación cuando se mueve la actividad mientras los adjuntos aún se están transfiriendo.

- Rendimiento mejorado durante la carga de la página Iniciar Solicitudes. 

- Restauración de template para el envío de los e-mails transmitidos por una actividad de tipo [Envío de mensaje](https://tdn.totvs.com/x/1oSNBw) configurado en un proceso.

- Sustitución del código de matrícula por el nombre del usuario activo como un parámetro en la búsqueda por responsables para las acciones del proceso [Lista de tareas](https://tdn.totvs.com/x/3CeDC).

- Movimiento del flujo de una solicitud, a través de la plataforma web, a una actividad de destino cuya descripción se ha definido como “Transferir”.

- Actualización del dataset processAttachment después de la eliminación de un archivo que se adjuntó a la solicitud.

- Clasificación de las categorías y procesos en orden alfabético, en la página de Inicialización de Solicitudes de fluig Mobile para Android.

- Ajuste en la devolución de consultas de dataset de formularios ([Tabla de base de datos](https://tdn.totvs.com/x/phSWDg) ) que filtren solo los registros activos y cuya cantidad supere mil registros.

- Movimiento de procesos iniciados de forma automática a través de una actividad de tipo Timer y cuya próxima tarea está configurada con el mecanismo de atribución por usuario.

- Revisión ortográfica del mensaje de notificación por actividad que se movió a través del flujo automático.

- Preservación del filtro configurado en la Central de Tareas después de moverse en bloque las solicitudes.

- Visualización del plazo de finalización de la tarea en el e-mail de notificación al responsable, cuando la fecha se asigna a través del método setDueDate en el evento afterTaskCreate.

- Eliminación de los mecanismos de atribución para un papel y para un grupo de las configuraciones de control de seguridad de adjuntos.

- Visualización de la descripción de campos de formulario que cuentan con caracteres especiales en la pestaña Formulario de las propiedades de un proceso.

- Visualización de solicitudes en el modo de visualización, sin mostrar el botón Descartar.

- Título del e-mail de tareas atrasadas enviado al gestor del proceso.

- Ajuste del método setTaskComments de hAPI, para la inclusión de datos a través de JavaScript en eventos de tipo Before.

- Se ha ajustado la visualización de la ventana de selección de responsables para que no se presente en actividades cuyo mecanismo de asignación se haya definido por campo de formulario, pero cuyo campo no se haya completado.
- Exportación de procesos después de la inclusión del script en un evento intermedio condicional.

- Ejecución del evento de procesos validateAvailableStates en todos los tipos de actividades del proceso, además de la actividad inicial.

 Más información...

Vea un [ejemplo](https://tdn.totvs.com/x/widbB) de implementación de este evento.

- Corrección en la descripción de actividades, cuando una tarea se haya configurado para enviarse a una misma actividad a través del flujo de retorno y el flujo normal.

- Grabación de información registrada en formularios vinculados a procesos, que tengan marcada la opción Registro único de formulario.

**ECM**

- Envío de notificación al usuario común que piden el download de varios documentos, advirtiéndole sobre la disponibilidad del archivo comprimido en la carpeta privada.

- Verificación de los links para download correspondiente a los documentos eliminados.

- Edición de formularios restaurados por la navegación de documentos a través del editor disponible en la plataforma web.

- Ajuste en la carga de dependencias necesarias para el uso del filtro del componente zoom de la [Guía de estilos](https://style.fluig.com/).

- Acceso a la página de reglas del editor de formularios web a través del navegador Mozilla Firefox cuando existan más de 160 reglas registradas.

- Visualización de formularios creados a través del editor web que contengan campos tipo Radio desactivados y ocultos en la misma actividad, a través de la definición de reglas.

- Ya no se abre una pestaña cuando se solicita el download de documentos visualizados a través de fluig Viewer utilizando el navegador Internet Explorer 11.

- Sustitución del ícono predeterminado por el ícono registrado en el Panel de Control cuando se publican nuevos documentos en la navegación de documentos.

- Visualización del botón Guardar habilitado solo después de que todos los datos de un formulario se cargaron al editarlo desde la navegación de documentos.

- Publicación múltiple limitada por drag and drop [para hasta 600 archivos](https://tdn.totvs.com/display/fluig/Drag+and+drop+de+documentos+e+pastas) dentro de un ZIP para que el rendimiento de la plataforma no se vea comprometido.

- Impresión de una copia controlada de documentos con marca de agua y que tienen páginas con una orientación diferente –vertical y horizontal.

- Permanencia del documento en check out cuando el check out se realizó desde fluig Connect y se efectuaron varios cambios y el documento se guardó varias veces.

- Acceso al recurso de impresión de un documento desde la carpeta en la que se encuentra, seleccionándolo, agregando la opción Más y luego, Imprimir copia controlada.

- Validación para no permitir modificar el Código para servicio de datos de campos de formulario de tipo check box después de introducir reglas de formulario en el mismo.

****

**WCM**

- Extinción del límite en el número de personas que figuran en la lista en widget Cumpleañeros cuando se activa el botón Cargar más.

- Visualización del componente [Organization Chart](https://style.fluig.com/miscellaneous.html#fluig-orgchart) de la Guía de estilos en navegadores web cuyo zoom de la página se haya definido a un valor diferente del estándar (100%).

- Visualización mejorada cuando hay un gran número de subpáginas que están debajo de la misma página principal en el menú lateral de la plataforma, a través de columnas con 8 líneas cada una.

- Corrección en la alineación de los íconos debajo de la opción “Más” en el menú lateral de la plataforma, cuando se accede a través del navegador Mozilla Firefox.

- Actualización en Widget de Slideshow corrigiendo la conexión con Instagram a través de OAuth2 para presentar las imágenes publicadas.

- Visualización y formato de la información cuando se utiliza el componente datatable en un formulario relacionado con un proceso en el que las solicitudes se moverán por fluig Mobile.

****

**Social**

- Ajuste automático en el formato de palabras y salto de línea en el editor de artículos para comunidades.

- Corrección en el recurso de cambio de la imagen de visualización de las conversaciones en fluig Messaging.

- Inclusión de personas en comunidades ocultas por moderadores que no sean administradores de la plataforma.

- Extracción de informe con las respuestas del formulario creado en una comunidad después de la actualización del entorno.

- Cambio de tamaño del logotipo personalizado de la empresa que aparece en el borde superior izquierdo de la página de fluig Messaging para web.

 Más información...

Para atualizar o logo, é necessário desativar e reativar o Messaging através da aba Colaboração do Painel de Controle. Não se preocupe, as conversas e grupos não serão perdidos com este procedimento.

- Ajuste en la visualización de los botones “Seguir” y “Pendiente” de la Central de notificaciones de acuerdo con el idioma definido para la plataforma.

- Permiso para el usuario que creó una galería en una comunidad para cambiarle el nombre o eliminarla.

- Búsqueda por e-mail en el listado de usuarios a los que se envió una invitación desde el recurso Invitación de usuarios que existe en la guía Colaboración del Panel de Control.

- Mensaje mejorado que le aparece al usuario durante el primer acceso, cuando parte del proceso de creación aún no ha sido finalizado por la plataforma.

****

**LMS**

- Verificación para evitar la vinculación de más de una matrícula a una única solicitud.

- Restringir la ejecución múltiple de una misma evaluación en una capacitación o pista.

- Visualización de contenidos SCORM y videos incluidos como ítems de tema de tipo URL, por ejemplo, links de YouTube, en pantalla completa (excepto Internet Explorer).

 Más información...

El contenido o vídeo en cuestión debe ser compatible con la visualización de pantalla completa para que sea reproducido en este formato por la plataforma.

- *Download del paquete con contenidos creados a partir de Elucidat, en entornos que cuenten con esta integración, después de la corrección de API por Elucidat.*

- Visualización de la pestaña Aprendizaje en la Central de Tareas solo cuando el usuario tiene tareas de aprendizaje pendientes.

- Ajuste del cálculo realizado en la integración con TOTVS Gestión Educativa y que determina la cantidad de [Días de validez de la matrícula](https://tdn.totvs.com/display/HF/Turma) en el grupo basado en la diferencia entre la fecha final y la fecha inicial del grupo.

****

**Identity**

- Verificación de los datos de internacionalización durante el la provisión de los usuarios en fluig Analytics a través de fluig Identity.

- Mensajes más claros en las ventanas de restablecimiento de contraseña y de aceptación de la invitación para ingresar a un nuevo contexto para mejorar el feedback y la comprensión del usuario cuando se introduce una contraseña que no cumple con los requisitos de seguridad

****

**Mobile**

- Visualización de los datos solicitados a través de API ([/api/public/ecm/dataset/search](https://api.fluig.com/resource_DatasetServiceRest.html#path__ecm_dataset_search.html)) en un [Datatable](https://style.fluig.com/javascript.html#fluig-datatable) de la Guía de estilos cuando se accede al formulario a través de fluig Mobile para Android.

El servicio [/api/public/ecm/dataset/search](https://api.fluig.com/resource_DatasetServiceRest.html#path__ecm_dataset_search.html) no cargará los datos en Modo Offline cuando la solicitud se realice a través del método POST, como se describe en la documentación de [Desarrollo de formulario Mobile](https://tdn.totvs.com/pages/viewpage.action?pageId=146181573#Desenvolvimentodeformul%C3%A1rioMobile-Recomenda%C3%A7%C3%B5esparaprocessoscomformul%C3%A1rioMobile).


<!-- anchors: Plataforma|Actualización1.5.11-BPM, Plataforma|Actualización1.5.11-Social, nuvemdetags, nuvemdetags-2116561432, nuvemdetags-465203573, nuvemdetags--1043954018, Plataforma|Actualización1.5.11-LMS, catálogo, catálogo--1789382715, catálogo-69082185, Plataforma|Actualización1.5.11-Guíadeestilo, Plataforma|Actualización1.5.11-Novedadesendocumentación, Plataforma|Actualización1.5.11-Correcciones, expander-1627620484, expander-control-1627620484, expander-content-1627620484, expander-1989996304, expander-control-1989996304, expander-content-1989996304, expander-860227597, expander-control-860227597, expander-content-860227597, expander-758593786, expander-control-758593786, expander-content-758593786 -->
