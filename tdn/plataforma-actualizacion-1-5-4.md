---
title: "Plataforma | Actualización 1.5.4"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=215484235"
scraped_at: "2026-03-09T04:24:41.254Z"
depth: 3
anchors: 18
child_links: 42
---

# Plataforma | Actualización 1.5.4

Vea, a continuación, las novedades en la actualización 1.5.4 de fluig:

## Arquitetura

**¿Desea que fluig esté dirigido a su negocio? ¡Deje que el Asistente de implementación rápida le ayude!**

Facilitar la implementación y dejar a fluig con la apariencia de su empresa y con los componentes orientados a su segmento es sencillo. Sólo debe dejar que el Asistente de implementación rápida lo oriente. Este le sugiere una serie de recursos – tales como componentes, procesos, páginas entre otros – basados en su negocio, lo que le permite instalar fluig ya con recursos adaptados al perfil de su empresa. Además, le permite configurar el tema de fluig para dejarlo con la apariencia de su empresa, cambiando los colores y el logotipo.

¿Cómo acceder?

El Asistente de implementación rápida es exclusivo para nuevas implementaciones de fluig.

Para aprovechar las sugerencias del Asistente de implementación rápida, se necesita marcar la opción **Utilizar****asistente****de implementación rápida en el primer acceso** en el registro de la empresa.

Más detalles

Más detalles sobre el uso del Asistente de implementación rápida pueden encontrarse en [Primer acceso fluig](https://tdn.totvs.com/x/SGgSCw).

- [Creación de la empresa](#)
- [Asistente - Inicio](#)
- [Asistente - Sugerencias](#)
- [Asistente - Personalización del tema](#)

![](/download/attachments/215484235/01.PNG?version=1&modificationDate=1449590053000&api=v2)

![](/download/attachments/215484235/FLUIGINV-1170-2.png?version=1&modificationDate=1449656964000&api=v2)

![](/download/attachments/215484235/FLUIGINV-1170-3.png?version=1&modificationDate=1449657006000&api=v2)

![](/download/attachments/215484235/FLUIGINV-1170-4.png?version=1&modificationDate=1449657042000&api=v2)

**Aviso sobre la creación de usuarios**

Ahora, al completar los campos *Login* y Matrícula – en el Registro de usuarios – se emite un alerta solicitando que se completen con cuidado, debido a que estos campos no se pueden modificar posteriormente.

![](/download/attachments/215484235/05.PNG?version=1&modificationDate=1449590085000&api=v2)

**Autenticación más rápida**

El flujo de autenticación cuando hay una integración con fluig Identity se optimiza, reduciendo la cantidad de redirecciones, lo que permite que su acceso a fluig sea más rápido.

**Notificaciones instantáneas (en tiempo real) con alta disponibilidad**

Para dejar a su fluig con alta disponibilidad, la parte que entrega las notificaciones instantáneas está disponible para la configuración en *Load balancing*. Si desea poner este componente, active *Realtime* en *scale* junto con *redis* en el archivo de configuración, haciendo posible la comunicación entre múltiples instancias. Por lo tanto, el procesamiento se distribuye, reduciendo el cuello de botella y en consecuencia mejorando la respuesta al usuario. Y en caso de caída de un servidor, *Realtime* aún continua funcionando en otro servidor de forma transparente.

También se puede interrumpir, si no se están utilizando los servicios del *chat* de nodejs en el archivo de configuración, reduciendo así el consumo innecesario de recursos..

¿Está interesado?

Ingrese a [Configuración del fluig Realtime para ejecución en Load balancing](https://tdn.totvs.com/x/gq-5Cw) y [Configuraciones para el funcionamiento del chat](https://tdn.totvs.com/x/hwFGCQ) para ver más detalles al respecto.

## ECM

**¡Plugin de Outlook remodelado!**

Remodelamos el *plugin* de Outlook para hacerlo más moderno. Los recursos siguen siendo los mismos que ya conoce:

*Drag and drop* de archivos directo del área de trabajo*;*

*Drag and drop* de *e-mails* y carpeta de *e-mails*;

Pendencias de la Central de tareas con:

- Tareas por concluir;
- Tareas en consenso;
- Mis solicitudes;
- Mis documentos;
- Documentos por aprobar;
- Documentos en consenso;
- Documentos en *checkout*;
- Tareas en *pool* para grupos;
- Tareas en *pool* para papeles.

Más información

Acceda a [Plugin do fluig para Microsoft Outlook](/display/fluig/Plugin+do+fluig+para+Microsoft+Outlook) y obtenga información más detallada.

¡Atención!

Para utilizar el nuevo *plugin* de fluig para MS Outlook, primero asegúrese de que el anterior *plugin* no esté instalado.

- [Plugin Outlook](#)
- [Plugin Outlook - Documentos](#)
- [Plugin Outlook - Central de tareas](#)

![](/download/attachments/215484235/outlook-1.png?version=1&modificationDate=1449657076000&api=v2)

![](/download/attachments/215484235/02.png?version=1&modificationDate=1449657091000&api=v2)

![](/download/attachments/215484235/06.png?version=1&modificationDate=1449657117000&api=v2)

## Mobile

**Elegir qué verá primero**

Para mantenerse al día con sus pendencias, la pantalla inicial de fluig Mobile es la Central de tareas. Pero ahora, se puede cambiar de forma sencilla y rápida. [Haga clic aquí](https://tdn.totvs.com/x/DJHbCw) y vea lo fácil que es.

## Social

**¡Haga reuniones con videoconferencia!**

¿Me gustaría realizar una reunión con videoconferencia? ¡Ahora es posible! Al iniciar una sesión, puede utilizar la cámara de su equipo durante la reunión, activándola en el ícono que se encuentra en la barra superior de la ventana.

![](/download/attachments/215484235/SOCIALECMSUST-4931.png?version=2&modificationDate=1452183659000&api=v2)

**¿Inició una reunión y se olvidó de alguien? Invítelo durante la reunión**

¿Ha iniciado una reunión y desea invitar a otros participantes, además de los que ya invitó? ¡Sencillo! Ahora puede invitar a personas a participar en reuniones en cualquier momento, incluso cuando la reunión ya haya comenzado. ¡Aproveche y eche un vistazo para ver cómo quedó!

- [Invitando a los participantes a la reunión que comenzó](#)
- [Participantes agregados a la reunión](#)

![](/download/attachments/215484235/convidarusuarios.png?version=1&modificationDate=1449654958000&api=v2)

![](/download/attachments/215484235/usuariosadicionados.png?version=1&modificationDate=1449654977000&api=v2)

Observación

Para las reuniones iniciadas desde un documento no se le permite invitar a participantes después del inicio de la reunión.

![](/download/attachments/215484235/reuni%C3%A3odocumento.png?version=1&modificationDate=1449655013000&api=v2)

Incluya fluigers en reuniones que están en curso:

****

**Mayor flexibilidad en desarrollos sobre la plataforma**

Nuestros servicios REST para social se volvieron aún más sólidos. Ahora puede, más allá del tradicional *alias*, enviar la matrícula, el código externo o el identificador de Identity para llevar a cabo las acciones o buscar datos de un usuario. Aún más flexibilidad para sus integraciones y desarrollos.

Más información

Vea la actualización del método en [/social/user/{genericId}](https://api.fluig.com/resource_UserServiceRest.html#path__social_user_-genericId-.html).

Ejemplos de uso

****

  **Matrícula** Expand source

[expand source](#)[?](#)

| `function beforeDocumentPublisher()````{ var FLUIG_HOST ="http://SEU_FLUIG";` ```// OAuth variables````var OAUTH_APP_PUBLIC = "OAUTH_APP_PUBLIC";````var OAUTH_APP_PRIVATE = "OAUTH_APP_PRIVATE";````var OAUTH_USER_APP_PUBLIC = "OAUTH_USER_APP_PUBLIC";````var OAUTH_USER_APP_SECRET = "OAUTH_USER_APP_SECRET";` ```//matrícula````var user = getValue("WKUser");````var consumer = oauthUtil.getGenericConsumer(OAUTH_APP_PUBLIC, OAUTH_APP_PRIVATE, OAUTH_USER_APP_PUBLIC, AUTH_USER_APP_SECRET);````var data = consumer.post(FLUIG_HOST+"/api/public/social/user/"+user,jsonString);}` |
| --- |

  **Alias** Expand source

[expand source](#)[?](#)

| `function afterSocialLike(companyId, like)````{ var FLUIG_HOST ="http://SEU_FLUIG";``` ```// OAuth variables````var OAUTH_APP_PUBLIC = "OAUTH_APP_PUBLIC";````var OAUTH_APP_PRIVATE = "OAUTH_APP_PRIVATE";````var OAUTH_USER_APP_PUBLIC = "OAUTH_USER_APP_PUBLIC";````var OAUTH_USER_APP_SECRET = "OAUTH_USER_APP_SECRET";` ```//alias````var user = like.getUser();````var consumer = oauthUtil.getGenericConsumer(OAUTH_APP_PUBLIC, OAUTH_APP_PRIVATE, OAUTH_USER_APP_PUBLIC, OAUTH_USER_APP_SECRET);````var data = consumer.post(FLUIG_HOST+"/api/public/social/user/"+user,jsonString);}` |
| --- |

**Nueva forma de gestionar los permisos en las comunidades**

¿Quieres tener más control sobre la manera en que las personas utilizan las comunidades su empresa? Atendiendo a sus pedidos, perfeccionamos los permisos para las comunidades. Ahora puede definir qué personas o grupos pueden:

- Realizar publicaciones en una determinada comunidad.
- Comentar publicaciones en una determinada comunidad.
- Realizar apoyos en una determinada comunidad.
- Realizar denuncias en una determinada comunidad.
- seguir publicações em determinada comunidade.
- Compartir publicaciones en una determinada comunidad.

Todo esto es manejable en el actual panel de permisos que ya conoce. ¡Ingrese y compruébelo!

![](/download/attachments/215484235/permiss%C3%B5es.PNG?version=2&modificationDate=1449591968000&api=v2)

Vea cómo configurar permisos para acciones en comunidades:

**Crear publicaciones más ricas con artículos**

En esta actualización, trabajamos mucho para revolucionar la forma de interactuar con los artículos en comunidades. Hay muchas novedades y estamos ansiosos por contárselas:

- Hemos cambiado totalmente la forma de crear sus artículos. Puede agregar la imagen de portada en sus artículos para darle ese toque especial.
- Comparta sus artículos en comunidades y vea cómo quedó de bien la publicación, con un resumen del artículo, la imagen de portada y el título especialmente más destacado.
- Visualización rápida de artículo: ¿vio un artículo interesante compartido en una comunidad? ¡Léalo sin salir de la comunidad!
- ¿Compartió un artículo y se dio cuenta de algo que debe cambiar o la imagen de portada no quedó cómo quería? Actualice el artículo y todas las publicaciones que compartió se actualizarán al instante.

- [Creación del artículo](#)
- [Publicación del artículo](#)
- [Visualización del artículo en timeline](#)

![](/download/attachments/215484235/criarartigo.PNG?version=2&modificationDate=1449591949000&api=v2)

![](/download/attachments/215484235/publica%C3%A7aoartigo.PNG?version=1&modificationDate=1449595047000&api=v2)

![](/download/attachments/215484235/artigotimeline.PNG?version=1&modificationDate=1449592000000&api=v2)

Vea cómo aumentar la participación de los usuarios con los artículos en comunidades:

## LMS

**Busque por habilidades para buscar responsables de sus grupos y materias**

Ahora puede buscar por habilidades de los usuarios cuando sea necesario buscar responsables para relacionar con un grupo o una materia. De esta manera, es mucho más fácil buscar al usuario mejor habilitado para ser responsable de un determinado grupo o materia.

![](/download/attachments/215484235/habilidades.png?version=1&modificationDate=1449592619000&api=v2)

**¡Realice evaluaciones desde un e-mail!**

Ahora puede programar la ejecución de una evaluación de aprendizaje y enviarla a cualquier persona, informando sólo el * e-mail* de dicha persona! De esta manera, el ejecutante de la evaluación recibirá un *link* en su *e-mail* a través del cual puede acceder y realizar la evaluación. Además, al final el ejecutante podrá recibir un *e-mail* informando su *estatus* de aprobación y su calificación – cuando la evaluación permite visualizar esta información.

- [Programación para ejecución por e-mail](#)
- [E-mail para acceso a la evaluación](#)
- [Ejecución de la evaluación desde el e-mail](#)
- [E-mail de finalización de la evaluación](#)

![](/download/attachments/215484235/agendamento.PNG?version=1&modificationDate=1449655071000&api=v2)

![](/download/attachments/215484235/FLUIGINV-5231-2.png?version=1&modificationDate=1449657182000&api=v2)

![](/download/attachments/215484235/FLUIGINV-5231-3.png?version=1&modificationDate=1449657215000&api=v2)

![](/download/attachments/215484235/FLUIGINV-5231-4.png?version=1&modificationDate=1449657238000&api=v2)

Las evaluaciones con preguntas de ensayo también pueden enviar un *e-mail* con el *estatus* final del ejecutante después de que el corrector las corrija.

![](/download/attachments/215484235/FLUIGINV-5231-5.png?version=1&modificationDate=1449657260000&api=v2)

También está disponible, a través de API, el *link* de revisión de la evaluación, donde el usuario con permiso puede ver en detalles una evaluación que realizó desde el *e-mail*.

Obtenga más detalles

El método de API Pública que permite crear el *link* para revisión de la evaluación es [/lms/assessmentApplication/getFinishedApplicationId/{email}/{scheduleId}](https://tdn.totvs.com/api.fluig.com/resource_AssessmentApplicationServiceRest.html#path__lms_assessmentApplication_getFinishedApplicationId_-email-_-scheduleId-.html).

![](/download/attachments/215484235/FLUIGINV-5231-6.png?version=1&modificationDate=1449657280000&api=v2)

****

**Integraciones en fluig LMS**

En esta actualización ponemos a disposición una nueva interfaz para configuraciones de integraciones en el aprendizaje a través de mensajería, se trata de **EAI**(*Enterprise Application Integration*). Con el EAI se pueden integrar los registros y procesos de aprendizaje con otros productos. Manténgase al tanto de las integraciones disponibles:

**TOTVS RM Vitae > fluig LMS**

- Usuarios.
- Matrículas.
- Búsqueda de cursos de aprendizaje.

**fluig LMS > TOTVS RM Vitae**

- Calificaciones de usuarios.

**TOTVS RM Educacional > fluig LMS**

- Usuarios.
- Parámetros de integración (campos de materia como por ejemplo objetivo y resumen).
- Grupos.
- Materias.
- Complementos de materia (valores de los campos resumen, objetivo, bibliografía, etc.).
- Matrículas.

**fluig LMS > TOTVS RM Educacional**

- Calificaciones.
- Búsquedas de evaluaciones de TOTVS RM Educativo.

Para acceder y habilitar integraciones por **Consola EAI**debe acceder al Panel de control y dirigirse a la pestaña **Aprendizaje.**Allí está disponible la nueva opción Consola EAI, donde se pueden gestionar las integraciones de aprendizaje.

- [Consola EAI en el Panel de control](#)
- [Configuración de la Consola EAI](#)
- [Consola EAI](#)

![](/download/attachments/215484235/consolepainelcontrole.PNG?version=1&modificationDate=1449655051000&api=v2)

![](/download/attachments/215484235/eaiconfig.PNG?version=1&modificationDate=1449655116000&api=v2)

![](/download/attachments/215484235/consoleeai.png?version=1&modificationDate=1449655150000&api=v2)

Más información

Obtenga más información en [Configuración de integraciones por medio de EAI](https://tdn.totvs.com/pages/viewpage.action?pageId=212894462).

**Nuevos datasets para seguimiento de alumnos en grupos**

En esta nueva actualización, ponemos a disposición nuevos *datasets* de aprendizaje en Grupos, que puede utilizar en sus formularios, portales e informes.

Siga la lista completa a continuación:

- [Ejecución de temas de grupos](https://tdn.totvs.com/display/fluig/Datasets+internos+Fluig#DatasetsinternosFluig-enrollmentTopicDataset-Execu%C3%A7%C3%B5esemT%C3%B3picos).
- [Ejecución de ítems de temas de grupos](https://tdn.totvs.com/display/fluig/Datasets+internos+Fluig#DatasetsinternosFluig-enrollmentTopicItemDataset-Execu%C3%A7%C3%B5esemItensdeT%C3%B3picos).

Más información

Si desea obtener más información, ingrese a [*Datasets* internos fluig](https://tdn.totvs.com/display/fluig/Datasets+internos+Fluig).

Creamos y ponemos a disposición un informe como ejemplo de uso de estos dos nuevos *datasets*. En sólo un informe los dos *datasets* se utilizan para que pueda seguir el progreso de los alumnos en temas e ítems de temas de sus grupos de aprendizaje.

![](/download/attachments/215484235/FLUIGINV-3564.png?version=1&modificationDate=1449657309000&api=v2)

Ejemplo de uso

Consulte el ejemplo haciendo clic [aquí](https://git.fluig.com/projects/SAMPLES/repos/sample-lms-reports/browse).

**Nuevos métodos de API pública para aprobación y reprobación de matrículas**

Hemos creado dos nuevos métodos en nuestra API Pública que harán aún más fácil la integración de los procesos de aprendizaje con sus *widgets* personalizados. Con estos nuevos métodos que puede aprobar y reprobar las matrículas en capacitaciones, rutas y grupos, informando parámetros básicos como el identificador de requisición de la matrícula y el motivo del rechazo - sólo para el método de reprobación.

Más detalles

Consultar API Pública de fluig para obtener más información de uso de los nuevos métodos:

- Aprobación: [/lms/enrollment/approveRequest/{enrollmentRequestId}](https://tdn.totvs.com/api.fluig.com/resource_EnrollmentServiceRest.html#path__lms_enrollment_approveRequest_-enrollmentRequestId-.html);
- Reprobación: [/lms/enrollment/reproveRequest](https://tdn.totvs.com/api.fluig.com/resource_EnrollmentServiceRest.html#path__lms_enrollment_reproveRequest.html).

## Plataforma

**Actualización en API Pública**

Nuestra API Pública no deja de crecer. Y en esta actualización liberamos la posibilidad de administrar los permisos de recursos a través de nuestros servicios REST.

Verifique

Ingrese a API Pública y verifique: [*Security*](https://api.fluig.com/resource_SecurityRest.html).

Ejemplos de uso

****

  **Matrícula** Expand source

[expand source](#)[?](#)

| `function beforeDocumentPublisher() {````var FLUIG_HOST ="http://SEU_FLUIG";` ```// OAuth variables````var OAUTH_APP_PUBLIC = "OAUTH_APP_PUBLIC";````var OAUTH_APP_PRIVATE = "OAUTH_APP_PRIVATE";````var OAUTH_USER_APP_PUBLIC = "OAUTH_USER_APP_PUBLIC";````var OAUTH_USER_APP_SECRET = "OAUTH_USER_APP_SECRET";` ```//matrícula````var user = getValue("WKUser");````var consumer = oauthUtil.getGenericConsumer(OAUTH_APP_PUBLIC, OAUTH_APP_PRIVATE, OAUTH_USER_APP_PUBLIC, OAUTH_USER_APP_SECRET);````var data = consumer.post(FLUIG_HOST+"/api/public/social/user/"+user,jsonString);` |
| --- |

  **Alias** Expand source

[expand source](#)[?](#)

| `function afterSocialLike(companyId, like){````var FLUIG_HOST ="http://SEU_FLUIG";` ```// OAuth variables````var OAUTH_APP_PUBLIC = "OAUTH_APP_PUBLIC";````var OAUTH_APP_PRIVATE = "OAUTH_APP_PRIVATE";````var OAUTH_USER_APP_PUBLIC = "OAUTH_USER_APP_PUBLIC";````var OAUTH_USER_APP_SECRET = "OAUTH_USER_APP_SECRET";` ```//alias````var user = like.getUser();````var consumer = oauthUtil.getGenericConsumer(OAUTH_APP_PUBLIC, OAUTH_APP_PRIVATE, OAUTH_USER_APP_PUBLIC, OAUTH_USER_APP_SECRET);````var data = consumer.post(FLUIG_HOST+"/api/public/social/user/"+user,jsonString);` |
| --- |

## Novedades en documentación

- Vea la nueva documentación [*Datasets* ingresando a la base de datos externos](https://tdn.totvs.com/display/fluig/Datasets+acessando+banco+de+dados+externo).
- Nuevos datasets fluig LMS [Datasets internos](/display/fluig/Datasets+internos).
- ¡Messaging para todos! Guía de utilización fluig Messaging.
- Guía de estilos off-line [Desarrollo de formulario Mobile - Guía de estilos off-line.](https://tdn.totvs.com/pages/viewpage.action?pageId=146181573#Desenvolvimentodeformul%C3%A1rioMobile-Guiadeestilosoff-line)
- LMS - Integraciones vía [EAI Configurando Integraciones vía EAI](https://tdn.totvs.com/x/-oKwD).
- Asistente de implantación rápida [Asistente de implantación rápida](https://tdn.totvs.com/x/-gXYD).
- Plugin fluig para Outlook remodelado [Plugin del fluig para MS Outlook](https://tdn.totvs.com/x/9AXYD).

## Correcciones

En esta sección listamos algunos *bugs* que eliminamos en esta actualización que garantizan que todo funcione sin problemas en su plataforma.

- Visualización de la opción Editar contenido, en la pestaña Adjuntos de una solicitud, cuando el documento que se adjunta se publicó desde la opción Nuevo documento (avanzado) y su extensión no está incluida en su Descripción.

- Edición de formulario de proceso que tiene campos definidos para utilizar el Analytics.

- Visualización y movimiento de solicitudes más rápida en la Central de tareas.

- Movimiento de solicitudes a una actividad que es responsable de mover otra solicitud a la próxima actividad.

- Adjunto de archivos de tipo PDF en una solicitud que está atrasada y que se convirtió a una nueva versión que tiene un formulario diferente de la versión anterior.

- Modificación del perfil de administrador para usuario común en Identity al modificar el usuario en el Panel de control de fluig cuando existe integración activa.

- Visualización de las tareas pendientes en la Central de tareas cuando el usuario autenticado no forma parte de ningún grupo existente en la plataforma.

- Desactivación de usuario en fluig cuando hay integración con Identity.

- Uso de variables de eventos, como por ejemplo WKNumState, en formularios de procesos definidos para utilizarlos en fluig Mobile.

- Uso de variables del objeto *WorkflowProcess* dentro de mecanismo de asignación desarrollado en la plataforma.

- Visualización del ícono Favorito marcado en el recurso de favoritos de *widget* Acceso centralizado.

- Exportación de capacitaciones por usuarios que tienen matrícula numérica.

- Uso de la opción “Copiar un bloque existente” al editar las preguntas de una evaluación.

- *Download* de documentos que se publicaron en la carpeta particular del usuario – Mis documentos – cuando está seleccionada la opción "Permite *download* e impresión".

- Ejecución de las actividades de tipo servicio al iniciar una solicitud, incluso cuando la actividad de servicio no es la primera en el flujo del proceso.

- Validación de licencias en la provisión por Identity y en la creación de nuevos usuarios en el Panel de control de fluig.

- Visualización del *estatus* del proceso junto a la descripción en la ventana Conversión de solicitudes.

- Grabación de los registros de un subformulario que pertenece a un formulario de tipo Principal x Secundario.

- Visualización de *thumbnail* de imágenes con *encoded* CMYK, utilizado en imágenes generadas en la herramienta Adobe InDesign.

- Ejecución de pre o post prueba de una capacitación después de haberse ejecutado una vez.

- Desempeño de la visualización del gráfico y de los datos de cada pestaña de la Central de tareas.

- Visualización de solicitudes que no tienen ningún historial de proceso activo y orden en la ventana de Conversión de solicitudes cuando hay más de 1.500 solicitudes de un mismo proceso.

- Transferencia de tareas – que inicialmente estaban asignadas a un Pool y fueron asumidas por un usuario – entre usuarios del mismo rol.

- Visualización del nombre definido en fluig Studio en la descripción de la actividad de tipo Timer en el diagrama del proceso después de exportarlo a fluig.

- Edición de la categoría del proceso después de exportarlo de fluig Studio y publicarlo en fluig.

- Visualización de los datos de solicitudes, incluso cuando ha habido alguna inconsistencia con el mecanismo de asignación por Pool, permitiendo el movimiento por parte del gestor y la anulación por parte del solicitante.

- Extracción de datos con fluig Analytics cuando se utiliza autenticación con proxy.

- Mejoras para hacer más rápida la creación de procesos *workflow*.

- Uso de comillas dobles ("") en la descripción de campos que se deben completar obligatoriamente de formularios de procesos.

- Visualización de tareas que están dentro del plazo establecido para la finalización como atrasadas en el gráfico de la Central de tareas cuando se utiliza la base de datos Oracle.

- Se ajustó la *query* de consulta de formulario principal y secundario para situaciones en las que hay más de 1.000 registros y la base de datos utilizada es Oracle.

- Inclusión de nubes de relación en el registro de usuario en el momento de su creación.

- Otorgamiento de permiso para visualización de *widget* Nueva publicación para usuarios comunes después de que se retiró el permiso de visualización.

- Visualización de la información al colocar el *mouse* sobre el nombre de un usuario o comunidad en una *timeline*.

- Iniciar nueva sesión de reunión virtual en Messaging después de la finalización de la sesión anterior.

- Número de usuarios excedido incluso cuando todavía hay licencias disponibles, impidiendo la creación de nuevos usuarios.

- Movimiento de actividades en el modelado del diagrama de procesos para determinados puntos de la pantalla.

- Uso del nuevo estilo de *zoom* en formularios de procesos.

- Visualización de las pantallas de *zoom* al realizar cualquier procedimiento en la plataforma que las utilice cuando la variable “WCMUserLang”, correspondiente al idioma del usuario, tiene un valor no válido.

- Generación de links que contienen numeral (#) en comentarios de publicaciones.

- Visualización de los cumpleañeros del día actual en la parte superior de la lista resumida en *widget* Cumpleañeros de Kit intranet.

- Visualización de documentos duplicados en el resultado de una búsqueda realizada utilizando tag (#).

- *Timeout* alcanzado al seleccionar un proceso para que sus solicitudes se conviertan cuando hay muchas solicitudes abiertas.

- Visualización del gráfico de estadísticas de preguntas de evaluación, independientemente del tamaño de las alternativas de las preguntas.

- Visualización del tiempo transcurrido para responder la evaluación y de las preguntas ya respondidas al abrir la ventana de ejecución, después de haber iniciado la evaluación y haber cerrado la ventana.

- Visualización del mensaje informando que ya existe una nueva actualización de fluig sólo para administradores, mientras no pasen más de 30 días después del lanzamiento de la actualización.

- Bloqueo de edición de los campos Nombre y Descripción en proceso AdHoc sólo después de que se inició una actividad que le pertenece.

- Validación para no permitir que se eliminen los grupos que pertenecen a una comunidad existente en la plataforma.

- Movimiento de solicitudes de una actividad que pide la confirmación de contraseña para una actividad automática.

- Visualización de campos del tipo Principal x Secundario de formulario en fluig *Mobile*.

- Cambio de la opción **Trabajo individual** – que se encuentra en el menú **Actividades extraclase** – para **Corrección de actividades** cuando se accede a una materia como responsable.

- Exportación de capacitaciones por usuarios que no tengan permisos en el catálogo de temas y preguntas.

- Visualización del nombre completo del usuario en el resultado de una búsqueda para definir el corredor de las preguntas de ensayo de una evaluación.

- Visualización de los espacios en blanco de una pregunta de tipo Espacios en blanco cuando están alineados verticalmente.

- Visualización de las alternativas de correlación al editar una pregunta de tipo Multivalor/corrección.

- Indexación - después de editar una carpeta - de sus documentos y de documentos que todavía no han sido indexados, sin indexar procesos y artefactos sociales.

- Visualización de la fecha y hora de las acciones “Solicitud iniciada”, “Solicitud finalizada” y “Solicitud anulada” en el historial del proceso.

- Movimiento de solicitudes que contienen una actividad de tipo *Timer* después de una actividad de tipo Join.

- Movimiento de solicitudes cuando se utiliza el método “*beforeTaskSave*” que cambia la lista de usuarios en una actividad del proceso.

- Visualización de la información de anulación cuando un usuario intenta mover una solicitud que fue anulada por el gestor de procesos.

- Exportación del Informe de Conquistas por Colaborador del recurso Gamificación, guardando el archivo en la carpeta Mis documentos del usuario autenticado. Es emitida una notificación avisando sobre la conclusión de la exportación.

- Exportación de solicitudes más rápida y con *log* detallado para análisis del desempeño.

- Exhibición de los íconos que representan las conquistas del usuario en el *widget* Conquistas del recurso Gamificación.

- Salto de línea automático en la exhibición de preguntas – de todos los tipos – que tienen un texto largo como enunciado o en sus alternativas durante la ejecución de una evaluación.

- Eliminación de notificaciones más rápida a partir de la opción Eliminar todas – presente en la Central de Notificaciones – y con mayor facilidad de uso.

- Ejecución de evaluación por usuarios que no están relacionados a ningún huso horario.


<!-- anchors: Plataforma|Actualización1.5.4-Arquitetura, samples, Plataforma|Actualización1.5.4-ECM, samples, Plataforma|Actualización1.5.4-Mobile, Plataforma|Actualización1.5.4-Social, samples, highlighter_425216, highlighter_877489, samples, Plataforma|Actualización1.5.4-LMS, samples, samples, Plataforma|Actualización1.5.4-Plataforma, highlighter_552943, highlighter_893494, Plataforma|Actualización1.5.4-Novedadesendocumentación, Plataforma|Actualización1.5.4-Correcciones -->
