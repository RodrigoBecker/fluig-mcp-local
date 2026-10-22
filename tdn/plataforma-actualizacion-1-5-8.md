---
title: "Plataforma | Actualización 1.5.8"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=236587061"
scraped_at: "2026-03-09T05:39:50.014Z"
depth: 4
anchors: 12
child_links: 35
---

# Plataforma | Actualización 1.5.8

Vea a continuación las novedades en la actualización 1.5.8 de fluig:

## LMS

**Sepa qué ítems están pendientes al finalizar una capacitación**

Cuando una capacitación todavía posee ítems pendientes y un alumno intenta finalizarla, ahora se exhibe un mensaje listando cuáles son esos ítems y el tipo de cada uno, facilitando la comprensión sobre la acción que debe ser tomada.

![](/download/attachments/234606895/FLUIGMAN-1439.PNG?version=2&modificationDate=1461072156000&api=v2)

**Más usabilidad y desempeño en la pestaña Inicio del entorno de aprendizaje**

Ahora el área de inicio de aprendizaje cuenta con paneles separados – uno para grupos en marcha y otro para capacitaciones/rutas en marcha – lo que proporciona una mejor visualización y mayor desempeño en la exhibición de los ítems de aprendizaje.

![](/download/attachments/236587061/02.PNG?version=1&modificationDate=1462969318000&api=v2)

**Liberación de capacitaciones con pre-prueba pendiente de corrección**

La pre-prueba es importante para evaluar cómo está el alumno antes de la capacitación. Por eso normalmente es obligatoria antes de asistir a la capacitación, ¿pero y si en la pre-prueba hay una pregunta de ensayo? Antes sólo dejaba al alumno proseguir después de la corrección por un instructor, lo que podría tomar un tiempo.

Atendiendo a los pedidos de nuestros clientes creamos una nueva opción que hace que el alumno pueda proseguir incluso sin que se corrija su pregunta. Eso permite una mayor rapidez en la ejecución de la capacitación cuando la opción “Permitir la continuidad de la capacitación incluso si la pre-prueba no haya sido corregida” está habilitada en el registrado de la capacitación.

Manténgase informado

Cuando la pre-prueba **no es obligatoria**, el alumno también puede asistir y finalizar la capacitación sin que sea corregida.

En los dos casos – pre-prueba **obligatoria** o **no** – los ítems relacionados a la capacitación, como habilidades, certificados o que tengan esa capacitación como prerrequisito, solamente serán liberados cuando la pre-prueba sea corregida.

- [Opción para liberar capacitación con pre-prueba pendiente de corrección](#)
- [Capacitación liberada](#)
- [Capacitación no liberada](#)

![](/download/attachments/234606895/FLUIGINV-9263-1.PNG?version=1&modificationDate=1461073514000&api=v2)

![](/download/attachments/236587061/04.png?version=1&modificationDate=1462969345000&api=v2)

![](/download/attachments/236587061/05.png?version=1&modificationDate=1462969380000&api=v2)

**Nuevos métodos para bloquear/desbloquear matrículas en la API Pública**

Para usted, desarrollador en la plataforma, ponemos a disposición en la [API Pública](https://api.fluig.com) de fluig los nuevos métodos que permiten bloquear y desbloquear la matrícula de un alumno, pudiendo ser utilizados cuando un alumno desea concluir, desistir o retornar a una materia o capacitación. Vea:

- Bloquear matrícula: [/lms/enrollment/block/{enrollmentId}](https://api.fluig.com/resource_EnrollmentServiceRest.html#path__lms_enrollment_block_-enrollmentId-.html);
- Desbloquear matrícula: [/lms/enrollment/unblock/{enrollmentId}](https://api.fluig.com/resource_EnrollmentServiceRest.html#path__lms_enrollment_unblock_-enrollmentId-.html).

**Matrícula por grupo de usuarios en capacitaciones, rutas y grupos**

Está disponible en la API de matrículas de LMS el nuevo método “*createGroupRequest”. *Este método permite hacer efectiva la matrícula de un grupo de usuarios en un grupo, ruta o capacitación. Se pueden obtener detalles sobre la utilización del método en la [API Pública](https://api.fluig.com/resource_EnrollmentServiceRest.html#path__lms_enrollment_createGroupRequest.html).

## Social

**Escoja si el nuevo usuario tendrá el wizard de usuario**

El *wizard* de usuario es un recurso estándar, que es el primer paso de su usuario dentro de fluig después del primer acceso a él y fue especialmente hecho para casos donde usted utiliza la *card* Social de fluig.

Ahora usted administrador puede habilitar o desactivar el *wizard*. Para tal fin, como administrador fluig acceda al **Panel de Control**, pestaña **Generales**, **Parámetros** y marque o no la opción **Habilita exhibición de*****wizard*****de primer acceso del usuario**.

![](/download/attachments/236587061/06.png?version=1&modificationDate=1462969435000&api=v2)

**Exclusión de notificaciones antiguas**

Con el objetivo de proporcionar mayor performance en la Central de Notificaciones y liberar espacio en disco, ponemos a disposición el recurso para programación de la exclusión de notificaciones. Para utilizarlo, acceda al **Panel de Control** > **Social** > **Notificaciones** y configure el período y las reglas para eliminación de notificaciones antiguas de todos los usuarios de la plataforma.

¡Atención!

Después de la actualización hacia 1.5.8, la plataforma borrará todas las notificaciones leídas por los usuarios con más de seis meses de existencia.

**Administrador, si usted no desea que esas notificaciones sean borradas, desactive el recurso.**

![](/download/attachments/236587061/07.PNG?version=1&modificationDate=1462969456000&api=v2)

**Artículos con videos en formato FLV**

Ahora, además de todos los recursos que usted ya conoce para crear contenido ricos en el formato de artículos en comunidades, usted además puede utilizar videos en el formato FLV. Fantástico, ¿verdad?

![](/download/attachments/236587061/08.PNG?version=1&modificationDate=1462969473000&api=v2)

**Más flexibilidad en la edición de la imagen del perfil**

Están disponibles los nuevos eventos *beforeSocialPictureChange* y *afterSocialPictureChange* para interceptar el intercambio de imagen de usuarios y comunidades y personalizar el comportamiento.

Vea más detalles

Acceda a la guía [Eventos de personalización social](https://tdn.totvs.com/pages/viewpage.action?pageId=172296472#EventosdePersonalizaçãoSocial-beforeSocialPictureChange) y obtenga más detalles.

**SDK: soporte a eventos sociales**

Ahora es posible consumir un servicio del componente SDK a partir de eventos de personalización social.

Más información

Obtenga más información en [Consumo de Servicios en la API Pública y en el componente SDK](https://tdn.totvs.com/x/7YDbCw).

## BPM

**Movimientos de solicitudes más dinámicos**

Muchas veces usted desea complementar esa solicitud que usted creó o que usted está supervisando, por ejemplo para citar un nuevo método de contacto, o alertar al responsable de que el proceso necesita avanzar más rápido. Ahora en fluig la comunicación en procesos es más dinámica e instantánea, siendo que independientemente de la actividad del proceso, será posible dejar su texto o agregar nuevos adjuntos en la solicitud.

Esa configuración es hecha por proceso y el responsable del proceso puede escoger el que mejor atiende cada demanda en la pestaña **General** de las **Propiedades** del proceso habilitando la opción "**¿Complementar solicitudes?**". En las configuraciones existen las opciones: 

- Solicitante, responsable(s) por actividad y gestor;
- Todos los participantes del proceso y gestor;
- Todos los usuarios (solamente cuando el proceso sea público).

No deje de confirmar en la pestaña **Supervisión** qué notificaciones serán generadas al crear un nuevo mensaje como complemento del proceso.

- [Habilitar y configurar complementos en solicitudes](#)
- [Complementos en el historial de la solicitud](#)

![](/download/attachments/236587061/09.PNG?version=1&modificationDate=1462969499000&api=v2)

![](/download/attachments/236587061/10.PNG?version=1&modificationDate=1462969509000&api=v2)

![](/download/attachments/236587061/11.PNG?version=1&modificationDate=1462969532000&api=v2)

**Exportación fácil de procesos en fluig**

Muchas veces usted desea compartir rápidamente un proceso que creó en fluig. Ahora usted administrador de fluig puede exportar procesos directamente mediante su navegador. En la ventana de configuración de procesos, basta seleccionar el proceso a ser exportado y activar la nueva opción **Exportar**. Serán exportados:

- el diseño y configuración del proceso;
- sus subprocesos (y los subprocesos de estos subprocesos);
- formularios asociados a cualquiera de estos procesos;
- todos los eventos de proceso y de formulario;
- *datasets* asociados a estos formularios informados en el registro.

Todos esos artefactos son compactados en archivo ZIP que también puede ser importado en fluig Studio: haciendo clic con el botón derecho en la navegación de proyectos, en **Importar**, opción **Importar un proceso**, donde es posible importar datos directamente en un proyecto ya existente o crear un nuevo proyecto.

Atención más ágil

En caso de que usted necesite ayuda en su proceso, ya sea para enviar a su desarrollador fluig o para enviar al área de atención de fluig, utilice este ZIP para acelerar la comprensión del proceso.

- [Selección del proceso](#)
- [Archivo generado](#)
- [Importación en fluig Studio](#)

![](/download/attachments/236587061/12.PNG?version=1&modificationDate=1462969548000&api=v2)

![](/download/attachments/236587061/13.png?version=1&modificationDate=1462969560000&api=v2)

![](/download/attachments/236587061/FLUIGINV-13380-3.PNG?version=1&modificationDate=1462969597000&api=v2)

## ECM

**¡fluig Viewer 11 disponible!**

Ya está disponible el instalador de la nueva actualización de fluig Viewer 11. Esta actualización trae mejoras significativas en la visualización de archivos de *e-mail* del tipo EML y MSG y, también, documentos de los tipos DOC, DOCX, XLS y XLSX. También se realizaron grandes evoluciones en desempeño.

¡Esté atento!

Para disfrutar de todas las novedades de fluig Viewer 11, es necesario desinstalar la versión antigua y realizar la instalación de esta nueva.

Encuentra más detalles en [Sobre fluig Viewer](https://tdn.totvs.com/x/8af5Cw).

## Arquitectura

**Log por usuario - encuentre ese error más fácilmente**

Cuanto mayor es el uso de la plataforma, más información es registrada en su *log*, lo que torna difícil saber qué usuario realizó la acción que desencadenó un error.

Para facilitar la vida del administrador de fluig, ahora es posible supervisar las acciones de usuarios específicos a partir de un archivo de *log* separado que contiene todo lo que ese usuario hizo después de su próxima autenticación. Después de habilitar es posible efectuar el *download*de este archivo de *log* en esa misma página, así como del archivo de *log* completo del servidor.

 Por eso, ahora cuando un usuario comunique que está con problemas y usted tenga dudas de lo que sucede, active esta nueva opción y supervise toda la información que le ayudará a realizar el diagnóstico de situaciones que estén perjudicando el uso de la plataforma para ese usuario. Para ver, acceda a **Panel de Control** > **Generales** > **Control de log**.

Los usuarios de la plataforma también pueden habilitar la generación de log para sí mismos, activando el recurso en el menú **Configuraciones** > **Editar perfil** > **Datos adicionales**.

Manténgase informado

Cuando el administrador habilita el *log* para el usuario, el log será creado sólo después de la próxima autenticación de ese usuario en la plataforma. Debido a eso, solicite a su usuario que realice el *logoff* y el *login* nuevamente para guardar todo lo que está sucediendo. El administrador también puede configurar el tiempo de caducidad para el *log* del usuario.

Y cuando el propio usuario habilita su *log*, es válido hasta las 23:59 del día en que se habilitó y comienza a ser generado inmediatamente después de la habilitación.

- [Log habilitado por el administrador](#)
- [Log habilitado por el usuario](#)

  ![](/download/attachments/236587061/14.PNG?version=1&modificationDate=1462969629000&api=v2)

![](/download/attachments/236587061/15.PNG?version=1&modificationDate=1462969647000&api=v2)

## Mobile

**Widgets del Kit Intranet en fluig Mobile**

Ahora usted puede visualizar los *widgets* del componente Kit Intranet en fluig Mobile, pudiendo disfrutar de la misma experiencia que ya conoce en fluig.

Más información

El Kit Intranet está disponible en [fluig Store](http://www.fluigstore.com/). Se puede obtener más información sobre él [aquí](https://tdn.totvs.com/x/nbBICw).

![](/download/attachments/236587061/FLUIGINV-14702.png?version=1&modificationDate=1462969668000&api=v2)

## Novedades en documentación

- Actualización de los prerrequisitos en [Sobre fluig Viewer](https://tdn.totvs.com/x/8af5Cw).

- Actualización de los atributos en [/wcm/location/associateUsers](https://api.fluig.com/resource_LocationServiceRest.html#path__wcm_location_associateUsers.html) y [/wcm/location/associateUsersByGroup](https://api.fluig.com/resource_LocationServiceRest.html#path__wcm_location_associateUsersByGroup.html) en la API Pública de fluig.

- Actualizadas informaciones sobre la propiedad “*AutomaticTasks*” en [Desarrollo de Workflow](https://tdn.totvs.com/x/widbB).

- Actualización de información para el *widget*Dirección Web en la página de [*Widgets*](https://tdn.totvs.com/x/jSiDC).

## Correcciones

En esta sección listamos algunos *bugs* que eliminamos en esta actualización que garantizan que todo funcione sin problemas en su plataforma.

- Exhibición del tiempo transcurrido después de la ejecución de actividades que pertenecen a procesos AdHoc en el historial de la solicitud.

- Visualización de los contenidos de capacitaciones o materias cuando el alumno tiene la matrícula bloqueada.

- Tarea en *pool*siendo asumida por dos usuarios simultáneamente.

- Utilización del método “/api/public/2.0/cards/create” cuando el usuario tiene la matrícula y el *login*diferentes.

- Exhibición de la fecha y hora en que se inició el procesamiento de sincronización de *datasets off-line*como siendo la fecha de la última sincronización, evitando que los datos modificados entre el inicio y el fin del procesamiento no sean ignorados en la próxima sincronización.

- Ordenación de materias y usuarios matriculados por su nombre en el recurso Gestión de matrículas, del menú Matrículas, en el entorno de aprendizaje.

- Utilización de la regla para desactivar un campo de formulario de un proceso en la primera actividad cuando el formulario es creado en el propio editor de fluig.

- Ejecución del evento “*beforeStateEntry*” antes de la ejecución de condición de las actividades automáticas de procesos.

- Utilización del carácter “%” en el montaje de un URL en un *zoom* de formulario.

- Ejecución de evaluaciones al utilizar el navegador Internet Explorer en versión 9.

- Exhibición de artículos compartidos en comunidades en el *timeline* de los usuarios que participan en ellas.

- Publicación de componentes – *widgets* o *layouts* – a partir de la Central de Componentes o mediante fluig Studio.

- Indisponibilidad del *timeline* de comunidades para sus miembros después de actualizar fluig hacia 1.5.7.

- Exhibición de usuarios inactivos en el *widget*Cumpleaños del Kit Intranet cuando existe integración con TOTVS RM.

- Utilización de grupos modelos en grupos de materias.

- Exhibición de datos en la *template* de *e-mail* que es enviada al usuario cuando usa el recurso “¿Olvidó su contraseña?”.

- Publicación de documentos en una carpeta que está en el tercer nivel de carpetas con aprobación y hereda la aprobación de la carpeta principal.

- Modificado el campo de “Digite un nuevo nombre para documento” hacia “Digite una nueva descripción para el documento” en la opción "Renombrar", disponible para un documento publicado en la Navegación de Documentos.

- Utilización del método “*updateCardData*” del servicio “*ECMCardService*” cuando el formulario de un proceso posee validación de datos.

- Exportación de las tareas que están en *pool* a partir de la Central de Tareas.

- Mejora de desempeño al navegar por fluig cuando se utiliza el *widget Banner slide show* del Kit Intranet.

- Posibilidad de retirar el permiso de visualización del *widget*Datos generales en la edición del perfil para usuarios comunes.

- Posibilidad de atribuir las acciones “Gestionar Grupo por usuarios" y "Gestionar Grupo por Temas" del permiso "Gestión de Grupos" a usuarios comunes.

- Utilización de campos adicionales – registrados en el Panel de Control, Aprendizaje, Campos adicionales – en ítems de temas de grupos.

- Visualización del historial de ejecución de evaluaciones al efectuar la búsqueda por un ejecutor específico.

- Utilización de los recursos de aprendizaje cuando el usuario posee un *login* que inicia con letra mayúscula y las demás son minúsculas y, al autenticarse, utiliza todas las letras mayúsculas o todas minúsculas.

- Generación del informe de respuestas de formularios que poseen preguntas idénticas publicadas en comunidades.

- Modificación del nombre de una comunidad por un moderador cuando otro moderador editó la página sin publicarla, manteniéndola como borrador pendiente.

- Exhibición de acciones sociales – apoyar y comentar – en publicaciones en el*timeline* de usuarios que se siguen.

- Asociación de desencadenador a una conquista en el recurso Gamificación.

- Utilización de grupos que poseen el carácter “/” en su nombre en la seguridad de carpetas de la navegación de documentos.

- Consumo de licencias de fluig considerando al usuario wcmAdmin indebidamente.

- Complementada la información existente en la API Pública para los siguientes servicios:[/2.0/communities/addUser/{communityId}](https://api.fluig.com/resource_CommunityRest.html);
- [/2.0/groups/addUsers/{groupCode}](https://api.fluig.com/resource_GroupRest.html#path__2.0_groups_addUsers_-groupCode-.html).

- Modificado el tiempo en que la plataforma espera después de cada letra digitada por el usuario en un campo de búsqueda antes de, efectivamente, ejecutar la búsqueda.

- Efectuación de matrícula en ítems de aprendizaje cuando hay integración con TOTVS RM.

- Verificación de matrícula activa de alumno en algún grupo de una materia.

- Emisión de notificación para los miembros al compartir un documento en una comunidad.

- Edición de contenido a partir del código-fuente HTML en el *widget* Editor de contenido.

- Definición de título para *widgets* cuando se emplea el *layout* de página con pestañas.

- Exclusión de la fecha de la última sincronización de un *dataset off-line* al eliminar sus datos.

- Utilización de *getValue* y del objeto *OAuthUtil* en los eventos *onNotify* de procesos.

- Removida la opción de *upload* de imagen local del *widget* Editor de contenido.

- Exhibición del *auto complete*al mover solicitudes de un proceso cuando se utiliza el navegador Mozilla Firefox.

- Utilización de idiomas diferentes cuando el mismo usuario accede a fluig a partir de un navegador y de la aplicación móvil simultáneamente.

- Atribución del valor “*null*” en los datos adicionales de un usuario.

- Movimiento de solicitud de un proceso en que la primera actividad está configurada con el mecanismo de atribución por campo de formulario a partir de fluig Mobile.

- Desempeño al utilizar los recursos de alumno del entorno de aprendizaje y en la ejecución de evaluaciones.

- Inicialización de solicitudes en que la segunda actividad del proceso es automática después de realizar la actualización de fluig hacia 1.5.7.

- Movimiento de solicitudes que utilizan el mecanismo de atribución por campo de formulario en fluig Mobile.

- Utilización del recurso "Olvidé mi contraseña" de fluig Identity.

- Exhibición del *layout* de la pantalla de inicialización de solicitudes al utilizar el navegador Internet Explorer 9.

- Utilización de “*getvalue*” y “*setvalue*” en eventos de formulario en la primera actividad de un proceso.

- Resolución de condiciones de actividades automáticas considerando los datos del registro de formulario cuando el proceso está configurado para ser guardado en un único registro..

- Personalización del ícono exhibido en el navegador Internet Explorer.Documentación actualizada Acceda a [Personalización de favicon](https://tdn.totvs.com/x/oBQyCw) y vea las actualizaciones.

- Inicialización de solicitudes por *Webservice* cuando el proceso posee una actividad con mecanismo de atribución para usuario, para grupo o para papel.

- Verificación de compatibilidad y disponibilidad de servidores al iniciar fluig Studio cuando la versión de fluig y de fluig Studio son diferentes.

- Exhibición de los filtros de la Central de Tareas al mover solicitudes con un usuario sustituto.

- Desempeño de las solicitudes de matrícula y posibilidad de matricular un número mayor de alumnos simultáneamente.

- Retirados los *widgets* y páginas que pertenecen al Panel de Control del listado de ítems que pueden tener permisos específicos en el recurso Permisos.

- Edición del nombre de grupos de aprendizaje cuando se utilizan más de 61 caracteres.

- Exclusión de carpetas que poseen documentos que necesitan aprobación y fueron reprobados.

- Exclusión de galerías y sus contenidos en comunidades.

- Exclusión de usuarios de AD manteniendo los datos del usuario en la lista de usuarios pendientes de aceptación o usuarios rechazados en Identity.

- Movimiento de solicitudes cuando el formulario del tipo Principal x Secundario del proceso tiene campos nulos.

- Incluida columna que exhibe las calificaciones parciales en el resultado de *dataset* “*enrollmentDataset*”.

- Envío de notificación de publicación de un documento que pertenece a un asunto de interés del usuario.

- Exportación de procesos que poseen el componente Documentos (BPMN 2.0) de fluig Studio para fluig.

- *Deploy* de artefactos múltiples veces cuando la carpeta “apps” está compartida con más de una instancia de fluig.

- Emisión de notificaciones incluso después de cerrar la sesión en fluig Mobile cuando se utiliza el sistema operativo Windows Phone versión 8.1.

- Utilización de la función “*showCamera*” en dispositivos iOS.

- Valor del campo “*Dataset*” al cambiar el formulario de un proceso a partir de fluig Studio.

- Salto de línea en textos insertados en el *widget* Editor de contenido.

- Inclusión de varios grupos definidos como obligatorios en el registro de asuntos en el Panel de Control.

- Edición de la página Home cuando posee un *widget*desarrollado sobre la plataforma.

- Movimiento de solicitud cuando la próxima actividad fue previamente definida para un usuario o un grupo sin la necesidad de seleccionar ese usuario o grupo en fluig Mobile.

- Edición de datos de un usuario que no posee una definición de idioma en su registro.

- Inicialización de solicitud cuando el proceso posee seguridad de adjunto y mecanismo Ejecutor de actividad en la primera actividad.

- Actualización de fluig de 1.4.13 hacia 1.5.0 cuando se utiliza el banco de datos SQL Server 2008 R2.

- Exhibición de las preguntas de una evaluación al consultar sus estadísticas.


<!-- anchors: Plataforma|Actualización1.5.8-LMS, Opçãoparaliberarotreinamentocompré-testependentedecorreção, Plataforma|Actualización1.5.8-Social, Plataforma|Actualización1.5.8-BPM, Opçãoparaliberarotreinamentocompré-testependentedecorreção, Opçãoparaliberarotreinamentocompré-testependentedecorreção, Plataforma|Actualización1.5.8-ECM, Plataforma|Actualización1.5.8-Arquitectura, Opçãoparaliberarotreinamentocompré-testependentedecorreção, Plataforma|Actualización1.5.8-Mobile, Plataforma|Actualización1.5.8-Novedadesendocumentación, Plataforma|Actualización1.5.8-Correcciones -->
