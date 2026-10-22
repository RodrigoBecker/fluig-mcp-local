---
title: "Plataforma | Actualización 1.5.6"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=224132094"
scraped_at: "2026-03-09T05:39:39.966Z"
depth: 4
anchors: 20
child_links: 63
---

# Plataforma | Actualización 1.5.6

Vea, a continuación, las novedades en la actualización 1.5.6 de fluig:

## Identity

**Autoatención de recuperación y desbloqueo de contraseña**

*No más llamadas a Help Desk. Ahora sus usuarios pueden realizar el desbloqueo automático de usuarios.*

Sabemos que la mayor parte de las llamadas del área de TI de la empresa son sobre administración de contraseñas, y ahora fluig Identity le va a ayudar aún más en su día a día.

En caso de que su usuario pierda la contraseña, hemos pensado en algo muy moderno para que él confirme que es él quién está solicitando la recuperación de la contraseña. Su empresa registra varias imágenes secretas que se mostrarán a los usuarios y se configurarán sus directrices de seguridad como el número de imágenes que el usuario registrará, las imágenes que se mostrarán en la selección, el tiempo de caducidad de intentos y mucho más.

Para que él haga esto en su propio equipo, hemos creado un asistente que, una vez configurado, se integrará de forma nativa a su Windows 7 o superior y aparecerá directamente en la pantalla de autenticación de Windows un link que permite que el usuario reset su contraseña o desbloquee su usuario sin necesidad de hablar con el equipo de TI.

Conozca más sobre cómo instalar este recurso en su red, consulte nuestra guía [haciendo clic aquí.](https://tdn.totvs.com/x/yoRbDQ)

Además, usted ya cuenta con 40 imágenes pre registradas para que pueda configurarlas rápidamente.

![](/download/attachments/224132094/identity01.png?version=1&modificationDate=1456162395000&api=v2)

![](/download/attachments/224132094/Identity-02.png?version=1&modificationDate=1456162404000&api=v2)

**SmartSync - Tiempo de sincronismo configurable**

¿El uso de red es un factor crítico para su empresa?

Usted pidió y nosotros lo escuchamos. Con la nueva versión 3.0.1 de SmartSync puede configurar el tiempo de sincronismo entre sus servidores LDAP, y lo mejor, puede hacerlo por dominio. De esta manera, usted reduce el consumo de banda y los recursos de su servidor y define cuál es el tiempo de actualización.

Además, también puede configurar el tiempo de verificación de datos con el servidor de fluig Identity en la nube.

![](/download/attachments/224132094/Identity-03.png?version=1&modificationDate=1456162421000&api=v2)![](/download/attachments/224132094/Identity-04.png?version=1&modificationDate=1456162421000&api=v2)

**

**Quédese tranquilo: ahora se puede cambiar el e-mail en LDAP**

*Seguridad y flexibilidad en la integración con LDAP.*

Ahora, incluso cuando cambie su e-mail en Microsoft Active Directory o en openLDAP, todas sus aplicaciones configuradas se mantienen, y su identidad en Identity está garantizada.

**![](/download/attachments/224132094/Identity-05.png?version=1&modificationDate=1456162451000&api=v2)

## Arquitectura

**Mayor facilidad en las configuraciones de la plataforma**

Ahora las configuraciones del sistema permiten editar los parámetros en pantalla, sin la necesidad de modificar directamente los archivos de configuración. Inicie sesión en fluig con el usuario “**wcmadmin**”, ingrese al **Panel de Control** > **WCM** > **Configuraciones del sistema** > pestaña **Parámetros de la plataforma** y ¡vea esta facilidad!

Observación

La modificación de algunos parámetros exige que se reinicie el servicio de fluig.

![](/download/attachments/224132094/01.PNG?version=1&modificationDate=1455618459000&api=v2)

Más información

Las siguientes documentaciones se actualizaron para contemplar las facilidades de configuración en la plataforma. Manténgase informado:

- [Parámetros de configuración de fluig](/pages/viewpage.action?pageId=77299889)
- [Múltiples Instancias](/pages/viewpage.action?pageId=113804679)
- [Usando el protocolo FTP en fluig](/pages/viewpage.action?pageId=118884864)
- [Configuraciones para el funcionamiento del chat](/pages/viewpage.action?pageId=155582855)
- [Configuración de envío de e-mail](/pages/viewpage.action?pageId=185756210)
- [Fluig en Load Balance con Apache mod_proxy en Linux](/pages/viewpage.action?pageId=73894749)
- [Configuración de Fluig Cache con Redis](/pages/viewpage.action?pageId=205917413)
- [Configurando fluig Realtime para ejecutar en load balancer](/pages/viewpage.action?pageId=200912770)
- [Configuração HTTPS para fluig das releases 1.5.6 à 1.5.13](/pages/viewpage.action?pageId=127959055)
- [Monitor de Servicios fluig](/pages/viewpage.action?pageId=142811200)

## LMS

**Nuevos datasets para mostrar la ejecución de una evaluación, detallando bloques y preguntas**

Ponemos a disposición en esta actualización nuevos *datasets* de ejecución de evaluaciones, bloques y preguntas. Vea a continuación:

- *Dataset* de preguntas ejecutadas en una evaluación: [assessmentAppQuestionDataset](https://tdn.totvs.com/display/fluig/Datasets+internos+Fluig#Datasetsinternosfluig-assessmentAppQuestionDataset-Datasetdequest%C3%B5esaplicadasemumaavalia%C3%A7%C3%A3o);
- *Dataset* de bloques en una evaluación: [assessmentAppBlockDataset](https://tdn.totvs.com/display/fluig/Datasets+internos+Fluig#Datasetsinternosfluig-assessmentAppBlockDataset-Datasetdeblocosemumaavalia%C3%A7%C3%A3o);
- *Dataset* de ejecución de evaluaciones por pista \ capacitación: [assessmentApplicationByTrack](https://tdn.totvs.com/display/fluig/Datasets+internos+Fluig#Datasetsinternosfluig-assessmentApplicationByTrack-Datasetdeexecu%C3%A7%C3%A3odeavalia%C3%A7%C3%B5esportrilha%28contendopr%C3%A9,p%C3%B3s,rea%C3%A7%C3%A3o%29) y [assessmentApplicationByTraining](https://tdn.totvs.com/display/fluig/Datasets+internos+Fluig#Datasetsinternosfluig-assessmentApplicationByTraining-Datasetdeexecu%C3%A7%C3%A3odeavalia%C3%A7%C3%B5esportreinamento%28contendopr%C3%A9teste,p%C3%B3steste,avalia%C3%A7%C3%A3oderea%C3%A7%C3%A3o%29);
- *Dataset* de ejecución de evaluaciones por grupo: [assessmentClassApplicationDataset](https://tdn.totvs.com/display/fluig/Datasets+internos+Fluig#Datasetsinternosfluig-assessmentClassApplicationDataset-Datasetdeexecu%C3%A7%C3%A3odeavalia%C3%A7%C3%B5esporturma).

Más información

Ingrese a [*Datasets* internos fluig](https://tdn.totvs.com/x/SgKeCQ) para obtener más detalles.

Información relacionada

Los siguientes *datasets* pasaron por algunas modificaciones:

- *assessmentApplicationGenericDataset –* se agregaron los siguientes campos:*“userMail”, “startDate”, “finishDate”, “requiredScore”, “assessmentApplicationId”;*
- *assessmentApplicationCatalogPreExamDataset –*campo *“assessmentId”*ahora se llama * “assessmentApplicationId”;*
- *assessmentApplicationCatalogPosExamDataset –*campo *“assessmentId”*ahora se llama *“assessmentApplicationId”;*
- *assessmentApplicationCatalogReactionExamDataset –*campo *“assessmentId”*ahora se llama*“assessmentApplicationId”.*

**Nuevos ejemplos de informes**

También creamos y ponemos a disposición algunos informes como ejemplo de uso de los nuevos *datasets*. Véalo:

- Informe de ejecuciones de evaluaciones;
- Informe de ejecuciones de evaluaciones por pista;
- Informe de ejecuciones de evaluaciones por capacitación;
- Informe de ejecuciones de evaluaciones por grupos.

![](/download/attachments/221556052/FLUIGINV-7416.PNG?version=1&modificationDate=1453799868000&api=v2)

Ejemplos de uso

Consulte ejemplos de uso [haciendo clic aquí](https://git.fluig.com/projects/SAMPLES/repos/sample-lms-reports/browse).

Más información

Para obtener más información sobre informes, ingrese a [Modelos de informes fluig](https://tdn.totvs.com/x/IaOwD).

**Defina un tiempo mínimo de visualización de contenidos SCORM**

Ahora puede definir un tiempo mínimo de visualización de un contenido SCORM en capacitaciones y grupos.

Durante la ejecución de una capacitación o ítem de tema de un grupo, si el alumno trata de poner fin a la ejecución de un contenido SCORM antes del tiempo mínimo establecido, se le informa cuánto tiempo falta todavía para llegar al tiempo mínimo de visualización. Si de todas maneras finaliza, el contenido se considera como ejecutado sin asignación de calificación – si es un contenido SCORM que tiene una evaluación integrada y que genera un puntaje.

Sugerencia

Si no desea utilizar un tiempo mínimo de visualización, sólo debe dejar el campo en blanco o completarlo con ceros.

- [Capacitaciones](#)
- [Grupos](#)
- [Advertencia](#)

![](/download/attachments/224132094/02.PNG?version=1&modificationDate=1455618485000&api=v2)

![](/download/attachments/224132094/03.PNG?version=1&modificationDate=1455618507000&api=v2)

![](/download/attachments/224132094/04.PNG?version=1&modificationDate=1455618526000&api=v2)

**Nuevos ítems para materias, carpetas y grupos en API Pública**

Ahora la gama de manejo de materias y carpetas del catálogo de materias y grupos es más grande, con nuevos ítems en [API Pública](https://api.fluig.com/).

- [Materias](https://api.fluig.com/resource_DisciplineServiceRest.html)[:  creación, edición, eliminación y movimiento (de una carpeta a otra);](https://api.fluig.com/resource_DisciplineServiceRest.html)
- [Carpetas del catálogo de materia:](https://api.fluig.com/resource_FolderDisciplineServiceRest.html)[creación, edición, eliminación y movimiento (de una carpeta a otra);](https://api.fluig.com/resource_FolderDisciplineServiceRest.html)
- [Grupos](https://api.fluig.com/resource_NormalClassServiceRest.html)[: se agregaron métodos para edición y eliminación.](https://api.fluig.com/resource_NormalClassServiceRest.html)

## ECM

**Gestión de entorno de fluig Viewer más fácil**

Para los que utilizan fluig en entorno Windows, la gestión de fluig Viewer se volvió mucho más simple: ya no es necesario tener *Internet Information Services*(IIS) instalado. Tampoco es más necesario instalar fluig Viewer en el mismo servidor de fluig, sólo debe configurar la dirección del servidor en los datos adicionales de la empresa.

Manténgase informado

Para obtener más información ingrese a [Instalación y configuración en Windows](https://tdn.totvs.com/pages/viewpage.action?pageId=200910842).

- [Informando el servidor de fluig Viewer](#)
- [Ver documentos](#)

![](/download/attachments/224132094/05.PNG?version=1&modificationDate=1455618552000&api=v2)

![](/download/attachments/224132094/06.PNG?version=1&modificationDate=1455618566000&api=v2)

**Fluig Connect y Messaging juntos para facilitar su día a día**

¿Ya se imaginó unir fluig Connect y fluig Messaging y darle incluso más agilidad a su día a día? ¡Así que disfrute, porque ya es una realidad! Ahora puede utilizar Messaging directamente de fluig Connect, iniciando conversaciones, recibiendo notificaciones de mensajes individuales, de grupo y de documentos enviados y también participar en reuniones.

- [Acceso a Messaging desde Connect](#)
- [Messaging acceso desde Connect](#)

![](/download/attachments/224132094/07.png?version=1&modificationDate=1455630197000&api=v2)

![](/download/attachments/224132094/08.png?version=1&modificationDate=1455630265000&api=v2)

Véalo:

**Descargue carpetas y archivos de una sola vez y agilice sus tareas**

¿Necesita bajar más de un archivo o carpeta de una sola vez? Quédese tranquilo, ahora eso es posible. Puede descargar varias carpetas, varios documentos de una carpeta o incluso carpetas y documentos de una sola vez.

- [Varios documentos](#)
- [Varias carpetas](#)
- [Documentos y carpetas](#)
- [Contenido descargado](#)

![](/download/attachments/224132094/09.PNG?version=1&modificationDate=1455618596000&api=v2)

![](/download/attachments/224132094/10.PNG?version=1&modificationDate=1455618608000&api=v2)

![](/download/attachments/224132094/11.PNG?version=1&modificationDate=1455618630000&api=v2)

![](/download/attachments/224132094/12.PNG?version=2&modificationDate=1455619326000&api=v2)

Manténgase informado

Cuando se termina de comprimir, se emite una notificación que informa que finalizó el *download* y el *link* para acceder al contenido.

![](/download/attachments/224132094/13.PNG?version=1&modificationDate=1455619351000&api=v2)

**Notificaciones de asunto más detalladas**

Ahora la notificación de seguimiento de tema muestra el nombre del documento que se creó o actualizó, lo que hace que sea más fácil cuando tiene muchos temas de interés.

****

** **

****

## BPM

**Encuentre un proceso específico de forma simple y rápida**

¿Necesita iniciar un proceso y no sabe en qué categoría está? No se preocupe, realice una búsqueda por el proceso que necesita rápidamente. Puede investigar por el nombre del proceso, por su categoría o, incluso por su subcategoría. ¡Listo! Ahora sólo debe iniciar su solicitud.

- [Ubicación del proceso](#)
- [Búsqueda por la subcategoría del proceso](#)

![](/download/attachments/224132094/15.PNG?version=1&modificationDate=1455619429000&api=v2)

![](/download/attachments/224132094/16.PNG?version=1&modificationDate=1455619445000&api=v2)

**Sincronización de datasets por API pública**

Ahora se puede avanzar en la sincronización de un *dataset*a través del método *dataset/synchronizeDataset/* de API Pública, sin necesidad de esperar a la siguiente ejecución definida en el Programador de Tareas.

Más detalles

Ingrese a [fluig API](https://tdn.totvs.com/display/fluig/Fluig+API) y [API Pública](https://api.fluig.com/resource_DatasetServiceRest.html#path__ecm_dataset_synchronizeDataset.html) y vea más detalles.

**Tenga una visión del escenario exacto de las solicitudes**

La Central de Tareas evolucionó para agilizar y facilitar sus actividades diarias. Ahora, las pestañas de tareas pendientes muestran el número exacto, incluso cuando ese número es alto – más de 999 tareas. Al ingresar a las pestañas **Tareas por concluir** o **Tareas en*****pool*** – **grupo o rol** – se puede ver el número de tareas atrasadas, el número de tareas pendientes dentro del plazo y el número total de tareas pendientes (atrasadas + dentro del plazo). De esta manera, se mantiene dentro del escenario real de las solicitudes en las que participa.

Además, ubicar una determinada tarea ahora es mucho más rápido y fácil. Con el nuevo campo de ubicación, se puede buscar una tarea por un valor de cualquier campo de la solicitud – sólo entre las tareas de la página actual – o buscar por el número o identificar la solicitud – en este caso, en todas las tareas pendientes, independientemente de la página en la que se encuentren. ¡Es una facilidad y mucho más!, ¿no?

- [Número exacto de tareas pendientes](#)
- [Número de tareas atrasadas, dentro del plazo y total](#)
- [Ubicación de tarea](#)

![](/download/attachments/224132094/17.PNG?version=1&modificationDate=1455619466000&api=v2)

![](/download/attachments/224132094/18.PNG?version=1&modificationDate=1455619482000&api=v2)

![](/download/attachments/224132094/19.png?version=2&modificationDate=1455633070000&api=v2)

**API para transferencia de pendientes**

Ahora se puede utilizar API Pública para transferir las tareas pendientes de un usuario a otro. Ingresando los *logins*de los usuarios se pueden transferir todas las tareas pendientes de procesos *workflow* y de documentos. Como resultado de la operación se genera un *log*de la transferencia.

Más información

Ingrese a [API pública](https://api.fluig.com) y obtenga más información al respecto.

## Social

**Guarde sus conversaciones de Messaging para consultas futuras**

Ahora puede guardar el historial de mensajes de cualquier conversación de Messaging en un archivo PDF, guardando el archivo en la carpeta Mis documentos o en cualquier otra carpeta que usted elija, dentro de la estructura de carpetas de fluig de su empresa en la que cuente con permiso de grabación.

Puede exportar todo el historial de mensajes de una conversación o si lo prefiere, sólo los mensajes enviados en un periodo determinado. También puede optar por exportar todo - textos y archivos adjuntos de la conversación - o sólo los textos. Muy bueno, ¿no?

- [Opción para guardar conversaciones](#)
- [Opciones de exportación](#)
- [Archivo generado](#)

![](/download/attachments/224132094/20.PNG?version=1&modificationDate=1455630318000&api=v2)

![](/download/attachments/224132094/21.png?version=1&modificationDate=1455630346000&api=v2)

![](/download/attachments/224132094/22.PNG?version=1&modificationDate=1455630369000&api=v2)

**¡Notificaciones de Messaging en el escritorio!**

Messaging es aún más moderno e interactivo. Ahora puede recibir notificaciones en su escritorio cuando se le envíen los nuevos mensajes de conversaciones individuales o en grupo, incluso si no tiene la ventana de Messaging abierta o tiene minimizada la plataforma. Además, también puede configurarlo para que muestre el número de mensajes no leídos en el título del navegador.

¡Importante!

Obtenga detalles sobre cómo configurar *Messaging* para disfrutar de estos nuevos recursos en **Help Online** de fluig – menú **Configuraciones** > **Ayuda** > **fluig Store**> **Messaging** >**Panel de control** > ***Messaging*** – o en Configuración fluig *Messaging*.

- [Notificación en el escritorio](#)
- [Número de mensajes no leídos en el título del navegador](#)

![](/download/attachments/224132094/23.PNG?version=1&modificationDate=1455630425000&api=v2)

![](/download/attachments/224132094/24.PNG?version=1&modificationDate=1455630409000&api=v2)

**Cree artículos más ricos en contenido con videos**

¿Qué le parece usar un video para ilustrar el contenido de su artículo? Como dice el viejo refrán, una imagen vale más que mil palabras. La creación y edición de artículos en comunidades ahora cuentan con el recurso de agregar videos para darle más vida a sus artículos y hacerlos aun más ricos en contenido. Sólo debe hacer clic, elegir el video y activar *play*. ¡Luz, cámara y acción!

- [Creación del artículo](#)
- [Visualización del artículo en la comunidad](#)
- [Artículo publicado en timeline](#)

![](/download/attachments/224132094/25.PNG?version=1&modificationDate=1455630444000&api=v2)

![](/download/attachments/224132094/26.PNG?version=1&modificationDate=1455630458000&api=v2)

![](/download/attachments/224132094/27.PNG?version=1&modificationDate=1455630480000&api=v2)

## Mobile

**Notificaciones push en fluig. ¡Ahora nativas!**

Las notificaciones *push* – que antes se solicitaban en fluig Store y se instalaban en la Central de Componentes – ahora son un recurso nativo de la plataforma. Éstas permiten realizar un seguimiento en tiempo real de lo que sucede en fluig cuando se utiliza en *smartphone* o *tablet* que operan con los sistemas iOS y Android, lo que ofrece una mayor agilidad e interactividad en las acciones del día a día.

¡Quédese tranquilo!

Si ya utiliza las notificaciones *push*, no debe preocuparse por nada, no es necesario realizar ningún procedimiento para esta novedad. ¡Sólo debe seguir usándolas!

- [Activación de las notificaciones push en la plataforma](#)
- [Recepción de notificaciones push en dispositivos móviles](#)

![](/download/attachments/224132094/28.PNG?version=1&modificationDate=1455630516000&api=v2)

![](/download/attachments/224132094/FLUIGINV-7666-2.png?version=1&modificationDate=1455630569000&api=v2)

**¿Qué le parece ver páginas en fluig Mobile?**

¡Sí, ahora puede ver páginas en sus dispositivos móviles! Sabemos que hace **mucho** que esperaba esto, ahora un mundo de posibilidades y personalizaciones llegó a sus manos. Puede hacer una infinidad de cosas con páginas en fluig Mobile [sólo no puede hacer café...].

A la página de Inicio puede ingresar a través del ítem **Inicio** del menú principal. Y a las otras páginas y subpáginas, a través del ítem **Páginas** del menú principal.

¿Está interesado?

Obtenga más detalles en[Soporte para páginas y *widgets* en la aplicación *mobile*](https://tdn.totvs.com/pages/viewpage.action?pageId=224108112).

- [Acceso a la Página de Inicio](#)
- [Acceso a otras páginas](#)
- [Visualización](#)

![](/download/attachments/224132094/FLUIGINV-3139.png?version=1&modificationDate=1455630606000&api=v2)

![](/download/attachments/224132094/FLUIGINV-3139-2.png?version=1&modificationDate=1455630630000&api=v2)

![](/download/attachments/224132094/FLUIGINV-3139-3.png?version=1&modificationDate=1455630644000&api=v2)

**Crear tareas en fluig Mobile**

¿Necesita crear y delegar tareas? ¡Puede usar fluig Mobile! Ahora puede crear y realizar un seguimiento de las tareas del proceso Hacer listas de Tareas a través de fluig Mobile y disfrutar de la facilidad de delegar las tareas en la palma de sus manos.

Observación

En la actualidad la creación de tareas está restringida sólo al inicio del proceso. ¡Pronto tendremos novedades!

![](/download/attachments/224132094/FLUIGINV-6980.png?version=1&modificationDate=1455630658000&api=v2)

****

**¡Realice anotaciones en documento de forma sencilla!**

Las anotaciones en documento nunca fueron tan fáciles. Sí, ahora puede anotar en documentos por medio de fluig Messaging. Ingrese a fluig Mobile y pulse en **Iniciar notas**. Una conversación se creará en fluig Messaging y puede hacer anotaciones en el documento y además incluir a otros usuarios para que colaboren.

![](/download/attachments/224132094/FLUIGINV-7073.png?version=2&modificationDate=1455630702000&api=v2)

**¡Personalice la vista inicial de su ventana!**

La personalización de la pantalla de inicio de fluig Mobile ahora también se puede hacer para Windows Phone. Si ya la ha configurado para Android e iOS no se preocupe, después de actualizar su aplicación fluig Mobile para Windows Phone ya estará en la pantalla de inicio personalizada.

Manténgase informado

Más información sobre este recurso puede encontrarla en [Personalización de la pantalla de inicio de fluig Mobile](https://tdn.totvs.com/pages/viewpage.action?pageId=198938892).

![](/download/attachments/224132094/FLUIGINV-7042.png?version=1&modificationDate=1455630743000&api=v2)

**Permisos en comunidades aplicadas a fluig Mobile**

¿Ya definió permiso de publicación en comunidades y le gustaría que se aplicaran a *mobile*? ¡Quédese tranquilo, su deseo se ha convertido en realidad! Ahora los permisos para publicar, comentar, apoyar y eliminar publicaciones definidas en fluig se reflejan en su *smartphone* o *tablet*.

![](/download/attachments/224132094/FLUIGINV-7033.png?version=1&modificationDate=1455630765000&api=v2)

**¡El movimiento de proceso off-line llegó a Windows Phone!**

Ponga en marcha sus actividades a través de su ventana incluso sin conexión activa. Ahora continúe con sus actividades, incluso en lugares donde no hay conexión a Internet. Se pueden:

- hacer procesos *off-line*: haciendo que las solicitudes se puedan crear incluso sin Internet;
- hacer una o más solicitudes *off-line*: antes de salir para hacer sus actividades, haga las solicitudes *off-line* para poder continuar incluso sin conexión.

**Bandeja de salida:** después de iniciar y mover las solicitudes *off-line*, éstas quedan en la bandeja de salida para sincronizar de nuevo cuando haya conexión. La opción puede ser manual o automática, según la configuración de su elección.

![](/download/attachments/224132094/FLUIGINV-7056.png?version=1&modificationDate=1455630802000&api=v2)![](/download/attachments/224132094/FLUIGINV-7056-1.png?version=1&modificationDate=1455630802000&api=v2)

## Novedades en documentación

- Actualizamos la documentación [Utilización de *Webservices*](https://tdn.totvs.com/x/ZyxbB) sobre el método “*createSimpleDocument*” y ponemos a disposición la página [Creación de documento a partir del método “*createSimpleDocument*”](https://tdn.totvs.com/x/6apYDQ) para ayudar a comprender el parámetro “*attachments”*cuando lo utiliza fluig Studio.

- Obtenga más información sobre el [Modo demostración](https://tdn.totvs.com/x/S5hbDQ) de fluig y [Cómo configurar servidor de licencia en fluig](https://tdn.totvs.com/x/XAJrD).

- Otras documentaciones actualizadas:[Datasets internos fluig](https://tdn.totvs.com/display/fluig/Datasets+internos+fluig)
- [Modelos de informes fluig](https://tdn.totvs.com/pages/viewpage.action?pageId=212902689)
- [Desarrollo de Formularios](https://tdn.totvs.com/pages/viewpage.action?pageId=75270483)
- [Desarrollo de formulario Mobile](https://tdn.totvs.com/pages/viewpage.action?pageId=146181573)
- [Guía de Uso fluig - Mobile](https://tdn.totvs.com/pages/viewpage.action?pageId=107940624)
- Configuración fluig Messaging
- [Guía de instalación fluig Connect](https://tdn.totvs.com/pages/viewpage.action?pageId=185737338)
- [Sobre fluig Connect](https://tdn.totvs.com/display/fluig/Sobre+o+fluig+Connect)
- [Sobre fluig Viewer](https://tdn.totvs.com/display/fluig/Sobre+o+fluig+Viewer)
- [Soporte para páginas y widgets en la aplicación Mobile](https://tdn.totvs.com/x/UJ5bDQ)
- [Desarrollo de widgets Mobile](https://tdn.totvs.com/x/G7RbDQ)

## Correcciones

En esta sección listamos algunos *bugs* que eliminamos en esta actualización que garantizan que todo funcione sin problemas en su plataforma.

- Eliminación de e-mail de usuarios de la lista de invitaciones enviadas por el recurso Invitación de usuarios, que se encuentra en la guía Colaboración del Panel de Control.

- Generación del número de la nueva versión de un documento que tiene revisiones al editarlo y definir que se cree una nueva versión.

- Bloqueo de la edición del contenido de un documento - por Webdav - cuando está pendiente de aprobación.

- Eliminación de un archivo del directorio de *upload* después de publicarlo desde el recurso Publicación múltiple marcando la opción “Limpiar directorio de *upload* al publicar”.

- El protocolo para el envío de notificaciones *realtime* ahora es *websocket* y ya no es *polling*. También se puede desactivar *polling*, que a menudo es necesario en entornos con muchos clientes de Internet Explorer 9, por sus inconsistencias que sobrecargan el servidor.

- Servicio de devolución de la URL utilizada por fluig Connect para recibir las notificaciones y entrega de notificaciones en entornos con AD cuando hay diferencia de *case sensitive* entre el *login* en AD y *login* en fluig.

- Envío de notificación de nueva publicación en comunidades para miembros que son usuarios regulares y tienen las configuraciones necesarias para recibir la notificación.

- Envío de e-mail de notificación de seguimiento para los demás usuarios de un *pool* cuando la tarea la asume un miembro del *pool* y tiene sin marcar la opción “Notifica responsable”.

- Restricción de visualización de registros de formulario por los miembros de la comunidad en la que el formulario está publicado en el resultado de una búsqueda realizada en toda la plataforma.

- Vista del número total de tareas pendientes en las pestañas de la Central de Tareas.

- Vista de la traducción de la fecha de un certificado que permite su generación en varios idiomas y que se asignó a una capacitación.

- Vista de formulario de proceso que tiene campos del tipo área de texto al ingresar a partir de una notificación recibida.

- Vista sólo de las publicaciones en común cuando un usuario administrador ingresa a timeline de otro usuario.

- Pérdida de la información ya ingresada al cambiar entre las pestañas Información general y Versión de una pregunta cuando algún campo obligatorio está vacío.

- Disponible *template* de página Básica (*slot* entero con 3 *slots* a la derecha) para utilizarse como *template* de *layout* personalizada en fluig Studio.

- Inclusión de alternativas para una pregunta de tipo espacio en blanco sin necesidad de mover la página para colocar el cursor en cada alternativa incluida.

- Vista de alerta que indica que los compartidos no estarán disponibles cuando se elimina un documento que se compartió desde la navegación de documentos.

- Ejecución de la tarea programada para eliminar notificaciones cuando existan usuarios inactivos que tengan las notificaciones en la empresa.

- Vista de la fecha y la hora exacta en el historial de movimiento de solicitudes en la Central de Tareas.

- Grafía del mensaje que aparece inmediatamente después de iniciar una solicitud preguntando si el usuario desea iniciar nuevas solicitudes.

- Exportación de la consulta de solicitudes cuando el volumen de solicitudes es alto – alrededor de 4000 solicitudes.

- Consulta de solicitudes determinando un intervalo de solicitudes cuando se utiliza el navegador Internet Explorer.

- Uso de *layout* estándar con pestañas – que se creó en fluig Studio y se exporta – en páginas de fluig.

- Búsqueda de usuarios por su nombre cuando se mueve una solicitud que utiliza el mecanismo de asignación por grupo o por rol.

- Revisión de contenido SCORM de capacitaciones o de ítem de tema en grupos cuando se utiliza el navegador Chrome en el sistema operativo MAC OS X.

- Uso de widget Cumpleaños – del Kit Intranet – integrado a RM cuando la base de datos es Oracle.

- Uso de las opciones de formato en el editor de textos de LMS – existente en capacitaciones, materias, evaluaciones, entre otros – cuando se utiliza el navegador Internet Explorer.

- Búsqueda por nombre y apellido del responsable que se asignará a una materia al registrarla.

- Movimiento de solicitudes por fluig Mobile cuando el proceso en cuestión posee dos formularios de tipo Principal x Secundario.

- Opciones para cambiar la cantidad de tareas que se muestran por página en la Central de Tareas.

- Uso del *zoom* que muestra los valores previamente filtrados en un formulario de proceso movido por fluig Mobile.

- Movimiento de solicitud que tiene un formulario y una actividad automática en la que el mecanismo de asignación es por campo de formulario.

- Aplicación de la acción Descartar, en el movimiento de solicitudes, antes de seleccionar un usuario de destino después de una actividad automática.

- Vista de las capacitaciones y grupos en la página de Inicio del entorno de aprendizaje cuando hay más de seis artículos en marcha.

- Búsqueda de evaluación para definirla como pre o pos prueba de una capacitación que se está registrando, cuando se utiliza la base de datos Oracle.

- Edición del nombre de la comunidad cuando es extenso – más de 40 caracteres.

- Anexo del vídeo de grabación del encuentro virtual junto con el documento que se utilizó en el encuentro después de finalizarlo.

- *Upload* de documentos que contienen acento en el nombre como se utiliza el sistema operativo Linux o MAC OS.

- Vista de los alumnos matriculados en un grupo que se basa en un grupo modelo para acceder al recurso **Puntaje manual**para asignar o ajustar el puntaje de los alumnos.

- Sincronización de documentos con fluig Connect que se publicaron en fluig y que tienen comillas simples en su nombre.

- Vista del atributo incluido en la Matriz de conocimiento del recurso Gamificación cuando el usuario autenticado aun no tiene puntos en este atributo.

- Vista de la lista de tareas pendientes que pertenecen a un *pool* por grupo cuando el nombre del grupo tiene el carácter "&".

- Uso de caracteres especiales – como o "$" - en *links* de publicaciones y comentarios en *timeline* de comunidades.

- Validación de la actualización del formulario del proceso cuando se mueve la solicitud en actividades paralelas.

- Vista de empleados activos en el *widget* Cumpleaños – del Kit Intranet – cuando está integrado a RM.

- Finalización de evaluación que tiene un tiempo máximo de ejecución que se configura cuando vence ese tiempo.

- Acceso a *timeline* de un usuario cuando la base de datos utilizada es Oracle o SQL Server, tanto en fluig como en fluig Mobile.

- Exportación de solicitudes que contienen un campo con más de 32.000 caracteres cuando está marcada la opción “Incluir datos del formulario”.

- Liberación de los contenidos y de la post prueba de una capacitación para visualizar cuando su prueba previa es obligatoria y tiene preguntas de ensayo.

- Vista inadecuada del mensaje de incompatibilidad cuando se accede a fluig con el usuario administrador de la empresa, poco después de su instalación, cuando se utiliza la base de datos Oracle.

- Movimiento de solicitud de proceso que se inició, se guardó, se actualizó y sólo después se envió a la siguiente etapa.

- Envío de *e-mail* de notificación de tema cuando el usuario pertenece a un grupo relacionado con el tema, pero el tema no es obligatorio y no es un tema de interés para el usuario.

- Autenticación por *token* al realizar la consulta de *sub-folder* por medio de *webservice ECMTokenService* y el método *getToken* informando el *token* a partir del método *getSubFolder* del *webservice ECMFolderService*.

- Validación del usuario destino de la solicitud de un proceso que se inicia se inicia a partir de un *webservice* cuando la actividad de inicio debe dirigirse a un *pool* para grupo, en el que el grupo puede ser diferente para cada solicitud, determinado por el ERP involucrado.

- Retorno del método *getDocumentId* cuando se utiliza en los eventos *afterSaveNew*y *afterProcessingem* de formulario de proceso.

- Vista del título de *widget* Editor de Contenido cuando se publica la página en la que se encuentra.

- Eliminación del mensaje que indica que el filtro se ha modificado y no se ha guardado cuando se alterna entre filtros creados en la Central de Tareas.

- Consulta de *datasets* en los formularios (*web* y *mobile*), implementación de llamadas asíncronas a *datasets*y mejora en el *log* para una fácil visualización de las inconsistencias en llamadas a *dataset.*

- Uso de “*updatehotfix*” para modificar el *e-mail* y el IDP del usuario, manteniendo la integración de este *e-mail* entre fluig e Identity.

- Cambio de “Enviar” a “Mover” en la pantalla de consulta de solicitudes de la Central de Tareas.

- Vista de documento que está en *checkout* en la Navegación de Documentos.

- El *job* de Analytics ahora se ejecuta a los 10 y a los 40 minutos, cada hora, (manteniendo el intervalo de 30 minutos en cada actualización), después de que se actualiza el *dataset* de tareas atrasadas que se envía a Analytics.Más información Vea más información sobre el envío de datos a Analytics en [Guía de Implementación Fluig Analytics.](https://tdn.totvs.com/pages/viewpage.action?pageId=107381593)

- Creación de registro de formulario utilizando el método *createCard*de API Pública.

- Montaje de *query* de *datasets* de forma exclusiva para base de datos Oracle cuando se utiliza el Kit Intranet.

- Extracción de los datos del informe de eventos por usuario del recurso Gamificación por período.

- Navegación entre las páginas del recurso Puntaje manual del grupo de una materia.

- Cambio del puerto utilizado por el Monitor de servicios fluig.Nota Obtenga más información en [Cambio de los puertos JMX Native en fluig (9999)](https://tdn.totvs.com/x/ZZ5bDQ).

- Sincronización cuando haya más de 50.000 *datasets* a partir de la opción **Sincronizar ahora** o a través de la tarea programada en el Programador de tareas.

- Inclusión de *link*en el texto de un artículo de comunidades utilizando el navegador Google Chrome.

- Procesamiento del envío de las tareas atrasadas a Analytics.

- Obtener la página que se envió a *widget* ERP *Application* por medio del siguiente comando Javascript: WCMAPI.getSessionAttribute('ERPApplication_referrer').Más detalles Obtenga más detalles en [*Widgets* Aplicación ERP y Container ERP](https://tdn.totvs.com/x/Goc3D).

- Vista del contenido de *widget*Slideshow, del Kit Intranet, si está agregado a la Página de inicio cuando se utiliza el navegador Google Chrome.

- Uso de *widgets* Mural de aviso y dirección Web juntos en una misma página.

- Movimiento de solicitudes de un proceso en el que fluig consulta un *dataset* enviando algunos campos del formulario.

- Inclusión de alternativas para preguntas de tipo multivalor manteniendo los datos que se completaron previamente.

- Uso del *dataset* de Grupos regresando a la materia a la que pertenece el grupo.

- Devolución del código creado por las APIs *NormalClass* y *Enrollment* de LMS.

- Registro del valor informado para el huso horario del usuario en LMS.

- Publicación en la navegación de documentos cuando utiliza un volumen diferente del predeterminado.

- Uso de grupos de comunidad en mecanismos de asignación por grupos de usuarios.

- Uso de comillas (“”) en el texto de *widget* Noticias del Kit Intranet.


<!-- anchors: Plataforma|Actualización1.5.6-Identity, Plataforma|Actualización1.5.6-Arquitectura, Plataforma|Actualización1.5.6-LMS, samples, Plataforma|Actualización1.5.6-ECM, samples, samples, samples, Plataforma|Actualización1.5.6-BPM, samples, samples, Plataforma|Actualización1.5.6-Social, samples, samples, samples, Plataforma|Actualización1.5.6-Mobile, samples, samples, Plataforma|Actualización1.5.6-Novedadesendocumentación, Plataforma|Actualización1.5.6-Correcciones -->
