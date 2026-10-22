---
title: "Plataforma | Actualización 1.5.10"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=244441065"
scraped_at: "2026-03-09T04:23:08.426Z"
depth: 3
anchors: 14
child_links: 55
---

# Plataforma | Actualización 1.5.10

Vea, a continuación, las novedades en la actualización 1.5.10 de fluig:

**¿Utiliza Microsoft SQL Server 2008?**

****

![](/download/attachments/244441065/SQL_Server_2008.png?version=1&modificationDate=1470056707000&api=v2)

¡Atención!

La actualización 1.5.10 de fluig no es compatible con la base de datos **Microsoft SQL Server 2008**, como se advirtió anteriormente (el [28/11/2014](https://suporte.totvs.com/portal/p/10098/suporte-fluig-noticias?id=107) y el [22/06/2016](https://suporte.totvs.com/portal/p/10098/suporte-fluig-noticias?id=349)), por lo que la inicialización de la plataforma [se bloqueará](https://tdn.totvs.com/x/r7CRDg) en las instalaciones que utilizan esta versión.

Si usted utiliza SQL Server, es necesario actualizarlo a la versión 2012 o superior, como se indica en nuestra [Matriz de Portabilidad](https://tdn.totvs.com/display/fluigesp/Matriz+de+Portabilidad).

Para más detalles, [vea el comunicado](https://suporte.totvs.com/portal/p/10098/suporte-fluig-noticias?id=367) emitido por el equipo de estrategia de producto fluig.

## Arquitectura

**Mayor practicidad y seguridad en el acceso a servicios externos**

Los desarrolladores y administradores de la plataforma ahora cuentan con una nueva opción en el Panel de Control para administrar las configuraciones de acceso y de seguridad de servicios REST, haciendo que la comunicación entre la plataforma y estos recursos sea mucho más sencilla y práctica.

Se puede configurar la autenticación de servicios externos utilizando los protocolos *Basic*, OAuth1 y OAuth2y poner a prueba la validez y la información registrada, ¡todo en un solo lugar!

![](/download/attachments/244441065/servi%C3%A7os_rest_painel_controle.png?version=1&modificationDate=1470056705000&api=v2)

Se puede configurar la autenticación de servicios externos utilizando los protocolos *Basic*, OAuth1 y OAuth2y poner a prueba la validez y la información registrada, ¡todo en un solo lugar!

- [Registrar Servicio](#)
- [Probar Servicio](#)

![](/download/attachments/244441065/cadastrar_servi%C3%A7o_REST.png?version=1&modificationDate=1470056703000&api=v2)

**Registre el*****client*****para la llamada de servicios externos.**

![](/download/attachments/244441065/testar_servi%C3%A7o.gif?version=1&modificationDate=1470056708000&api=v2)

**Después del registro, haga una prueba de comunicación con el servicio.**

Para conocer en detalle el potencial de esta novedad, acceda a la documentación que hemos preparado para usted en [Autorización para client de Servicios REST](https://tdn.totvs.com/pages/viewpage.action?pageId=239041233).

## LMS

**Mayor practicidad con matrículas automáticas en capacitaciones de pistas**

Para que el acceso a las capacitaciones sea mucho más ágil, al realizar una matrícula en una pista, el alumno será automáticamente matriculado en todas las capacitaciones que la componen.

Si alguna de estas capacitaciones tiene prerrequisitos, ¡no se preocupe! La matrícula automática solo se realizará en caso de que estos requisitos también sean parte de la pista. Cuando no sea el caso, la matrícula se llevará a cabo solo si el alumno ya cumple con los prerrequisitos.

Importante

Importante

Para no afectar al rendimiento de la plataforma, el proceso de matrícula automática se realiza de forma asíncrona, es decir, se producirá en segundo plano para que no tenga que esperar hasta el final de este procedimiento para continuar disfrutando de fluig. Cuando esté todo listo, los usuarios matriculados recibirán las notificaciones de confirmación.

## BPM

**¡Esté atento! Nuevas reglas para el uso de mensajes personalizados**

Los mensajes personalizados de confirmación, alerta o error de la [Style Guide](https://style.fluig.com/) (Guía de estilo) aceptan la inclusión de códigos HTML, pero esto no es una práctica aprobada por fluig, ya que puede causar inestabilidad en el movimiento de las solicitudes.

Para que sus movimientos fluyan bien, le recomendamos que se realice el uso del carácter **\n** para el salto de línea en los textos y que se eliminen otros códigos HTML en los mensajes personalizados, ya que **pronto** la plataforma no los interpretará en este componente.

¡Esté atento!

Por razones de seguridad, ya está planificada la eliminación de la interpretación de códigos HTML en los mensajes personalizados. Este cambio debe suceder muy pronto, por lo que le recomendamos que evalúe de antemano los cambios necesarios en sus desarrollos.

A continuación se muestra un ejemplo de cómo adaptar el salto de línea en los mensajes para el estándar recomendado:

- [Recomendado](#)
- [Sin aprobación](#)

[?](#)

| `function` `validateForm(form) {````if` `(form.getValue(``'codigo_produto'``) ==``'A8973'``) {````throw` `¡Atención! \n Este código de producto no es válido. \n Por favor, ingrese otro código.".````}``}` |
| --- |

[?](#)

| `function` `validateForm(form) {````if` `(form.getValue(``'codigo_produto'``) ==``'A8973'``) {````throw` `"¡Atención! Este código de producto no es válido. Por favor, ingrese otro código"````}``}` |
| --- |

## Style Guide

**Otra forma de utilizar autocompletar**

Consulte en nuestra [Guía de estilo](https://style.fluig.com/) un nuevo ejemplo de implementación del componente *Autocompletar* utilizando un *array*, sin la necesidad de llamadas REST al *Web Services*.

![](/download/attachments/244441065/example_autocomplete.png?version=1&modificationDate=1470056704000&api=v2)

Más información

Ingrese al componente [*Autocomplete*](https://style.fluig.com/javascript.html#fluig-autocomplete) en la Guía de estilos y obtenga información más detallada.

## Novedades en documentación

**¡Conozca el nuevo*****Help Online*****!**

La documentación de Ayuda de la plataforma ahora está en las nubes. Pero puede estar seguro, el path para acceder a ella sigue siendo el mismo: haga clic en el menú Configuraciones en la parte superior de la página, al lado del nombre del usuario, seleccione Ayuda ¡y listo!

       El sistema lo llevará al nuevo Help Online, un portal que reúne conceptos, consejos y el paso a paso de uso de los recursos de la plataforma. Para acceder a dicho portal directamente desde su navegador,

       ¡haga clic aquí!

![](/download/attachments/244441065/ajuda.gif?version=1&modificationDate=1470056701000&api=v2)

- Consulte los pasos para [iniciar los servicios de fluig](https://tdn.totvs.com/pages/viewpage.action?pageId=185730803) en entornos con el sistema operativo Linux.

Aproveche y conozca la documentación con [configuraciones sugeridas](https://tdn.totvs.com/pages/viewpage.action?pageId=242389225) para servidores Linux.

- Referencias en la Guía de Uso de fluig Studio actualizadas para el [contenido disponible](https://tdn.totvs.com/display/fluigesp/Fluig+Studio) en el Portal del Desarrollador Fluig.

- ¿Utiliza copia controlada? Infórmese acerca de las [configuraciones necesarias](https://tdn.totvs.com/pages/viewpage.action?pageId=239037566) para los casos en los que ocurra alguna inconsistencia en la impresión de los documentos.

- Consulte la nueva [Guía de Actualización fluig Studio](https://tdn.totvs.com/pages/viewpage.action?pageId=240298991), creada específicamente para guiarlo sobre cómo mantener actualizado el plugin fluig Studio.

- Complementa la información sobre [propiedades de los Objetos](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos) utilizados para [el envío y la respuesta de *Web Services*](https://tdn.totvs.com/pages/viewpage.action?pageId=73084007).

- Alerta sobre la exención de instalación de *Internet Information Services* (IIS) para utilizar el [fluig Viewer](https://tdn.totvs.com/pages/viewpage.action?pageId=200910842#Instala%C3%A7%C3%A3oeconfigura%C3%A7%C3%A3ofluigViewernoWindows-Pr%C3%A9-requisitos) en servidores Windows.

- Actualizamos los [requisitos](https://tdn.totvs.com/pages/viewpage.action?pageId=185737338#Guiadeinstala%C3%A7%C3%A3ofluigConnect-Requisitos) para la instalación y uso de fluig Connect.

- Nuevos filtros para consultar todas las versiones de la evaluación a través de los [*Datasets* de aprendizaje](https://tdn.totvs.com/display/fluig/Datasets+internos+fluig).

- Vea el detalle de las propiedades de los objetos [*Attachment*](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-Attachment) y [*ProcessAttachmentDto*](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ProcessAttachmentDto) utilizados en los métodos de Web Service*.*

- Complemento en el uso de un flujo común junto a un [Flujo Automático](https://tdn.totvs.com/display/fluig/Fluxos#Fluxos-FluxoAutom%C3%A1tico) en la configuración de procesos.

- Incluye la descripción de la variable [*WKReplacement*](https://tdn.totvs.com/pages/viewpage.action?pageId=181962951) y su funcionamiento en el evento [*displayFields*](https://tdn.totvs.com/pages/viewpage.action?pageId=243011158)*.*

- Sumados los parámetros de solicitud del [método *transfer*](https://api.fluig.com/resource_TasksRest.html#path__2.0_tasks_transfer.html) a la documentación de fluig API.

## Correcciones

En esta sesión hacemos una lista de algunos *bugs* que eliminamos en esta actualización que aseguran que todo funciona sin problemas en su plataforma.

- Ejecución de alerta de confirmación JavaScript en el evento *beforeSendValidate* en dispositivos iOS.

No deje de conocer las recomendaciones para el [desarrollo de formularios Mobile](https://tdn.totvs.com/pages/viewpage.action?pageId=181963126) y los [ejemplos de implementación](https://tdn.totvs.com/display/fluig/Desenvolvimento+de+Workflow#DesenvolvimentodeWorkflow-Eventosparavalida%C3%A7%C3%A3odeformul%C3%A1rio) del evento *beforeSendValidate*.

- Visualización de solicitudes que están finalizadas en fluig Mobile cuando el sistema operativo utilizado es Android.

- Estandarización de la nomenclatura del widget Central de Tareas con la página Resumen de tareas.

- Persistencia de la información incluida en componentes Principal x Secundario en los borradores guardados a través de fluig Mobile.

- Visualización del nombre de la cuenta en fluig Messaging cuando el nombre de la empresa es muy extenso.

- Validación del plan de suscripción de fluig Messaging en uso con fluig Connect.

**Sugerencia:**Consulte en la [Guía de instalación fluig Connect](https://tdn.totvs.com/pages/viewpage.action?pageId=185737338#Guiadeinstala%C3%A7%C3%A3ofluigConnect-ComohabilitarofluigConnectnofluig) cómo configurarlo para monitorear las conversaciones de Messaging desde *desktop*.

- Selección automática de administrador al llevar a cabo la conversión de base TOTVS | ECM 3.0.

- Ajuste en el estado de los usuarios desactivados importados a través de la conversión de TOTVS | ECM 3.0.

- Visualización de los datos de evaluaciones anónimas en datasets de prueba posterior, prueba previa y reacción.

- Envío de notificación al mover el flujo de una actividad automática a un componente *Join*.

- Mensaje mejorado al informar el código de un proceso inexistente en el método *getAvaliableStates* del *Web Service WorkflowEngineService*.

- Comportamiento del teclado virtual al mover una solicitud optimizada en dispositivos iOS.

- Visualización del botón Finalizado en la selección de herramientas de Anotación de fluig Messaging.

- Visualización del formulario al iniciar subproceso desde una solicitud principal.

- Movimiento de tarea con mecanismo de atribución por realizador de actividad después de la conversión de la solicitud.

- Inclusión del usuario en los grupos informados como parámetros en el método *createColleagueGroup* del *Web Service ColleagueGroupService*.

- Acceso a las opciones de artículos en la comunidad utilizando el navegador Internet Explorer 11.

- Grabación de las configuraciones de integración con Google *Drive* en el recurso de Edición Colaborativa del Panel de Control.

- Validación de caracteres especiales en el campo *Login* en el registro de usuarios.

- Reorganización de los recursos que se muestran en la pantalla de Permisos del Panel de Control.

- Configuración para la apertura de imágenes que se muestran en el *Banner Slideshow* en una nueva ventana.

- Estandarización del tamaño del *widget* Dirección Web con relación a los otros *widgets* estándar de la plataforma.

- Visualización en páginas públicas del tema y el logo configurados en la empresa.

- Ajuste en la visualización de los datos del individuo conectado a la plataforma en el pie de las páginas.

- Uso del *widget* Editor de Contenido en la página Home en entornos con fluig Messaging configurado.

- Reproducción de videos incluidos en artículos creados a partir de las comunidades, a través de la aplicación fluig Mobile para iPhone/iPad.

Esté atento

Conozca cómo aplicar esta corrección en artículos preexistentes accediendo a [esta FAQ](https://tdn.totvs.com/x/9-yFDg). 

- Publicación en *timeline* de comunidad que tenga el mismo ID externo, *login* o matrícula de un usuario.

- Visualización de la versión actual de un artículo al que se accede desde la página Documentos Favoritos.

- Activación de usuarios a través de la integración TOTVS RM x fluig LMS.

- Visualización de artículos en widgets a través de fluig Mobile en dispositivos que utilizan sistema operativo Android.

- Asociación automática de usuarios creados o importados en fluig Identity al grupo *EVERYONE*.

- Bloqueo de acceso a las publicaciones eliminadas desde el *link* de notificación.

- Soporte para el uso de *arrays* vacíos para *constraints* en el método *onMobileSync*.

- Publicación de *e-mails* y carpetas a través del *plug-in* de fluig para Microsoft Outlook (64 bits).

Esta corrección se aplica solo para entornos que utilizan Microsoft Office 64 bits.

- Corregidas las solicitudes adicionales de fluig Messaging que se llevaban a cabo al navegar en carpetas y documentos.

- Mensaje informativo cuando se trata de visualizar un documento y el servicio de fluig Viewer no ha iniciado en el servidor.

- Eliminación de carpetas de la navegación de documentos que contengan documentos reprobados en la Papelera de reciclaje.

- Número de solicitudes abiertas en cada actividad en la página de Conversión de Solicitudes.

- Configuración del responsable por iniciar solicitudes en procesos iniciados con el componente *Timer*.

- Ajuste en la visualización de la lista de sustitutos en la Central de Tareas para cuando exista una gran cantidad de usuarios.

- Autenticación para *download* de documentos a través de la URL: http://[servidorfluig]/webdesk/webdownload?documentId=[id_documento]&version=[versão_documento]&tenantId=[id_empresa].

- Filtro por código de la solicitud limitado a 14 caracteres en el recurso Consulta de Solicitudes.

- Consulta de solicitudes cuyo código contenga caracteres especiales debido a la conversión desde TOTVS | ECM 3.0.

- Visualización del nombre del publicador en la pestaña Detalles de los documentos visualizados por fluig Mobile para iPhone/iPad.

- Revisión de los campos obligatorios para consumo del método *updateColleaguewithDependencies* del *Web Service ECMColleagueService*.

- Visualización de la última versión aprobada de un documento al que se accede desde los resultados de búsqueda.

- Intervalo del filtro de búsqueda de solicitudes completo, por defecto, desde 0 (cero) hasta el número de solicitudes existentes.

- Exportación y visualización de diagramas de procesos que utilizan el componente *Swimlane* de tipo *Pool*.

- Uso del *Web Service ECMCustomFieldsService* para consultar los campos personalizados de documentos.

- Visualización de los miembros de un grupo desde la opción “Mostrar usuarios” en el historial de una solicitud, cuando el nombre del grupo tiene guión.

- Verificación de las configuraciones de aprobación del documento para actualización de archivos.

- Configuración para inhabilitar las alertas sonoras en la aplicación fluig Messaging para iPhone/iPad.

- Recreación de la tarea programada para los procesos que utilizan el componente Timer, cuando se elimina la última versión del proceso.

- Importación de archivos de tipo XPDL a través de fluig Studio.

- Corrección de la posición de la ventana de configuración para los campos tipo Búsqueda y Número en el editor de formularios.

- Visualización de las imágenes de perfil de los usuarios y de aplicaciones en fluig Identity.

- Reposicionamiento de la página después de que el usuario realice el soporte en fotos incluidas en las galerías de imágenes de las comunidades.

- Mensaje de alerta cuando se tratar de ver videos de YouTube a través de la aplicación fluig Mobile en conexiones lentas.

- Eliminación de la tarea programada creada por eventos intermedios cuando la solicitud se anula.

- Inicio de solicitudes de un subproceso a través de hAPI utilizando el método *startProcess*.

- Bloqueo del envío de solicitudes a un grupo no válido utilizando el mecanismo de atribución por campo de formulario.

- *Check-in* de documentos cuyos aprobadores hayan sido eliminados durante el período en *checkout*.

- Inclusión de complemento a través de hAPI utilizando el método *setTaskComments* en la actividad inicial.

- Visualización del widget Dirección *Web* en páginas publicadas sin que haya sido incluida la URL en las configuraciones.

- Exportación de solicitudes finalizadas en formato XLS en la página de Consulta de Solicitudes.

- Visualización de la lista de usuarios en el Administrador de Matrículas después de desmatricular a un alumno.

- Mensaje mejorado en caso de inconsistencia en la búsqueda de una gran cantidad de solicitudes.

- Acceso a las actividades del subproceso a través de un *link* en el historial de la solicitud principal.

- Búsqueda por usuarios en el movimiento de solicitudes cuando se utiliza un mecanismo de asignación personalizado.

- Exportación y liberación de la versión para los procesos que contengan actividades iniciales de tipo Condicional vinculadas a un flujo de entrada.

Conozca más

Entre los eventos iniciales, solo el tipo Inicial de proceso común soporta flujos de entrada. Los tipos Condicional, Señal, *Timer* y Múltiple no son compatibles con este recurso. Obtenga más información sobre cada tipo en [Eventos Iniciales](https://tdn.totvs.com/display/fluigesp/Eventos+Iniciales). 

- Visualización actualizada de las cuentas adicionales en fluig Messaging, después de eliminar una cuenta utilizando la opción Administración de cuentas.

- Grabación de los cambios realizados a través de fluig Mobile en ítems de la tabla Principal x Secundaria durante el movimiento de proceso.

- Ejecución del evento *beforeDocumentPublisher* cuando se corta y pega un documento.

- Impresión de copia controlada utilizando componentes específicos de Microsoft *Word* en entornos que no tienen Microsoft *Office* instalado.

- Devolución de los registros activos e inactivos en el filtrado de datasets con el parámetro metadata#active definido como falso.

Recomendación

Para este tipo de casos, se recomienda instalar Microsoft *Office* en el servidor de fluig o evitar guardar los documentos en formato .docx, optando por el tipo .doc.

- Filtración de *datasets* con el parámetro *metadata#active* definido como *false*.

- Uso del método hAPI.*setCardValue* en el evento *afterTaskSave* para los casos en los que el formulario Principal x Secundario tenga un segundo formulario principal y este contenga más secundarios que el primero.

- Verificación para desactivar las versiones más antiguas de formularios, en caso de que exista una versión activa más nueva.

- Ajuste en la visualización de campos de formularios que tengan configuradas reglas de visualización específicas.

- Revisión del término que se utiliza en la página de Configuración de reglas del formulario de “Usuario Conectado” para la “Matrícula del Usuario Conectado” para que quede claro qué información se completará.

- Se ha mejorado el mensaje que aparece cuando se produce inconsistencia en la autenticación a través de la aplicación [fluig Mobile en entornos HTTPS](https://tdn.totvs.com/display/fluigesp/Configurar+HTTPS) porque el certificado utilizado no es válido.

- Verificación de expresiones en blanco informadas como condiciones de actividades automáticas.

Atención

Si se agrega una expresión en blanco a las condiciones de una actividad automática, la plataforma asume “*false”* como la expresión definida.

- Exportación de los registros de solicitudes por parte de la Central de Tareas cuando los campos del formulario se utilizan como columnas de un filtro.

- Visualización de documentos en dispositivos móviles, cuando se accede a través del *widget* Documentos Populares en la aplicación fluig Mobile.

- Ajuste en la redirección de la URL generada por la opción Compartir para publicaciones realizadas por los usuarios en las comunidades.

- Se ha mejorado el mensaje de inconsistencia cuando se tratan de eliminar los mecanismos de asignación personalizados.

- Volver a la solicitud cuando se incluye un complemento en el proceso, activar el botón Enviar y Cerrar la pantalla de confirmación.

- Formato de las tareas atrasadas que se muestran en la Central de Tareas cuando se aplica un filtro personalizado.

- Se ha mejorado el mensaje que aparece en caso de acceso al ítem de tema fuera del plazo de vigencia del grupo.

- Visualización de documentos en formato PDF a través del visualizador interno de documentos de la plataforma.

- Tamaño de imágenes seleccionadas para su visualización en el *widget Slideshow* del [Kit *Intranet*](https://tdn.totvs.com/display/fluig/Kit+Intranet).

- Mejora en la visualización de la lista de sustituidos en la pantalla Resumen de Tareas, cuando existe un gran número de usuarios registrados.

- Eliminación de tabulaciones (TAB) y espacios innecesarios al principio y al final del código del proceso en el momento de la creación.

- Visualización del historial de solicitud anulada, que se haya movido a una de las actividades desde un *Fork*.

- Corrección para hacer sincrónica la acción de asumir una actividad, lo que evita que usuarios diferentes asuman la misma tarea al mismo tiempo. Este proceso puede causar una ligera lentitud, en caso de que muchas tareas se asuman rápidamente, pero es esencial para la correcta asignación de las actividades.

Atención

La corrección anterior no se aplica a las instalaciones de la plataforma en *cluster*.

- Transferencia de solicitudes en las que la actividad está configurada con mecanismo de atribución por campo de formulario y cuyo usuario destino sea un *Pool*.

- Movimiento de solicitudes acompañadas por formularios Principal x Secundario con varios registros a través de la aplicación fluig Mobile.

- Verificación de los documentos enviados para la impresión de copia controlada para asegurar la compatibilidad del recurso con el formato del documento seleccionado y ajuste en la visualización de la lista de impresoras a través de la opción Más → Imprimir copia controlada.

- Visualización de las respuestas marcadas por los alumnos en la revisión de las evaluaciones.

- Visualización de la fecha de solicitud cuando se mueven actividades a través de la aplicación fluig Mobile para iPhone/iPad.

- Visualización de un documento abierto a partir de los resultados de la búsqueda global.

- Ajuste en el número de llamadas al componente *Zoom* de la [Guía de estilo](https://style.fluig.com/) cuando se utiliza el evento *reloadZoomFilterValues*.

- Verificación de proceso activo ejecutada antes de la anulación de solicitudes.

- Visualización en la Consulta de Solicitudes del último responsable de una actividad en *Pool* o Consenso cuando se anula la solicitud.

Observación

El responsable de la actividad en *Pool* también se mostrará en fluig Analytics, mientras que para las actividades en consenso se mostrará el término “*Consensus*”.

- Consulta de *datasets* en entornos que utilizan bases de datos Oracle, sin tener en cuenta los caracteres en mayúscula.

- Uso del atributo *downloadEnabled* en la creación de carpetas através [docAPI](https://tdn.totvs.com/display/fluig/Desenvolvimento+de+Workflow#DesenvolvimentodeWorkflow-docAPI).

- Restauración a versiones anteriores de un registro de formulario a través de la navegación de documentos.

- Inclusión de mensaje que sugiere la grabación del texto informado como complemento cuando se guarda la solicitud.

- Registro de usuario en fluig Identity que utilice la dirección de e-mail informada previamente como secundaria en otro perfil, pero que no ha sido confirmada.

- Mejora en la renderización del componente *Zoom* de la Guía de estilos.

- Asignación de actividades conjuntas a través de campo de formulario para múltiples *Pools*.

Importante

No se le permitirá asignar una actividad conjunta a más de un *Pool* de usuarios.

- Administración de solicitudes y recursos informáticos al utilizar los servicios en tiempo real.

- Grabación del complemento informado a través del parámetro *comments* en el método *startProcess* del *Web ServiceWorkflowServiceEngine* y cuyo parámetro *completeTask* se defina como *false*.

- Limpieza de memoria del sistema operativo mientras el usuario corrige un problema identificado por la validación del formulario y luego trata de mover la solicitud.

- Se ha mejorado el mensaje que aparece en actividades automáticas cuando no se cumple ninguna de las condiciones registradas.

- Configuración de proceso en el que, después de *o Join*, una actividad automática es seguida por un evento final.

- Confirmación de que *hostname* configurado para la plataforma se ha agregado al archivo *hosts* del servidor. [Conozca más](https://tdn.totvs.com/pages/viewpage.action?pageId=244420208).

- Visualización del número total de mensajes no leídos en el ícono de la pestaña de Conversaciones de la aplicación fluig Messaging para el sistema operativo Android.

- [Instalación de fluig Studio](https://tdn.totvs.com/pages/viewpage.action?pageId=185730822) sin el depósito adicional de dependencias en TOTVS *Developer Studio* 11.3 y últimas versiones de Eclipse.

- Visualización de la imagen de perfil de la última persona que apoyó, comentó o compartió una publicación en el alerta de la central de notificaciones del usuario.

- Envío de notificaciones *PUSH* después de reinstalar la aplicación fluig Mobile.

- Visualización del campo Impresora en el Log de Copia Controlada cuando el entorno está configurado para no utilizar *applet* o el recurso no es compatible con el navegador.

- Restricción del intercambio de páginas *Web* a través del navegador en dispositivos móviles que utilizan el sistema operativo Android.

- Configuración del tiempo de espera de retorno del servidor durante el procedimiento de exportación de procesos desde fluig Studio. [Conozca más](https://tdn.totvs.com/display/fluig/BPM+131+-+SocketTimeOutException+ao+exportar+processos+pelo+fluig+Studio).

- Verificación para garantizar, antes de la liberación del proceso, que la actividad de destino de un flujo automático tiene, al menos, otro flujo de entrada.

- Envío de notificaciones de Aprendizaje y Evaluaciones a los usuarios registrados antes de la actualización 1.5, en entornos actualizados directamente a 1.5.6 o superior.

- Validación para evitar la desactivación de las comunidades relacionadas con las Materias o Grupos de Aprendizaje.

- Aparece un mensaje mejorado cuando se produce falta de espacio en el disco del servidor de la base de datos.

- Se corrigió la verificación de actualización de fluig Connect en entornos que tienen instalada la última actualización.

- Envío de actividad con mecanismo de atribución por campo de formulario que se haya guardado previamente con el campo del responsable que se completó.

-  Actualización del formulario principal y recreación de los registros secundarios en un formulario Principal X Secundario a través de Web Service, en caso de que el proceso tenga habilitada la opción Versión única
- de formulario.
- Visualización de los contenidos y las evaluaciones de LMS en entornos cuya dirección de acceso a la plataforma incluye el número del puerto.

- Visualización del tipo de servidor de caché en la página de Configuraciones del Sistema cuando se configura el tipo Redis o Redis Cluster.


<!-- anchors: Plataforma|Actualización1.5.10-Arquitectura, arquitectura, arquitectura-1870886633, arquitectura-404721008, Plataforma|Actualización1.5.10-LMS, Plataforma|Actualización1.5.10-BPM, HTML, HTML--1410204225, highlighter_814069, HTML-35620821, highlighter_555096, Plataforma|Actualización1.5.10-StyleGuide, Plataforma|Actualización1.5.10-Novedadesendocumentación, Plataforma|Actualización1.5.10-Correcciones -->
