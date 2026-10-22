---
title: "Plataforma | Actualización 1.5.12"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=268585619"
scraped_at: "2026-03-09T04:22:22.501Z"
depth: 3
anchors: 12
child_links: 55
---

# Plataforma | Actualización 1.5.12

Vea a continuación las novedades en la actualización 1.5.12 de fluig:

## BPM

**Flujo de información entre el proceso principal y el proceso secundario**

Los subprocesos son excelentes en el modelado de procesos, estos crean una forma de reutilización y aislamiento de procesos que ayuda en el día a día de los desarrolladores.

![](/download/attachments/244935094/Fluig_-_platform__resource_moxtra-process_workflow_diagrams_liga_process__0_-_Eclipse_-__Users_josefaria_Documents_workspace2.png?version=1&modificationDate=1476830830000&api=v2)

Sin embargo, agregar información de formulario en subprocesos implica codificar todo este intercambio de información entre el proceso principal y el secundario.

Para hacer que su creación de procesos sea mucho más rápida y segura, ahora el administrador de fluig puede parametrizar el intercambio de información entre el formulario del proceso principal y el formulario del subproceso.

Al configurar el subproceso, visualmente el administrador relaciona los campos y la dirección en la que fluirá la información en la pestaña **Campos**: si se realiza desde el campo del formulario del proceso principal al campo del formulario del proceso secundario o viceversa.

Todo esto es muy simple, rápido y sin ninguna línea de código.

¡Manténgase informado!

Puede obtener información más detallada en el tema **Configurar subproceso** en [Configurar actividades y flujos](https://tdn.totvs.com/display/HF/Configurar+atividades+e+fluxos).

****

****

****

**Mantenga el flujo natural de sus procesos**

En el servicio fluig nos dimos cuenta de que los clientes utilizan varias aplicaciones y esto le da fuerzas a fluig para que cada día evolucione para atender mejor a las empresas.

En esta atención a las necesidades de los clientes, ahora en fluig se pueden mover las solicitudes *workflow* entre un proceso y los subprocesos sin interrumpir el flujo de su negocio.

Al marcar la nueva opción **Mover a la siguiente actividad**, cuando el flujo llega al subproceso, en lugar de dirigirse al evento inicial, se dirigirá directamente a la actividad siguiente, lo que permite incluso la definición del responsable de la ejecución.

De este modo, se elimina un paso adicional del proceso, la experiencia del usuario se vuelve más fluida y los desarrolladores de procesos de fluig no necesitan más codificar reglas para crear esta experiencia que por lo general se requiere en los subprocesos.

- [Opción Mover a la siguiente actividad](#)
- [Movimiento de la solicitud al subproceso](#)

![](/download/attachments/244935094/FLUIGINV-19159.png?version=1&modificationDate=1476125614000&api=v2)

**La opción "Mover a la siguiente actividad" está disponible en las configuraciones de actividades del tipo subproceso.**

![](/download/attachments/244935094/FLUIGINV-19159-2.png?version=6&modificationDate=1476902662000&api=v2)

**La primera actividad del subproceso se muestra en la selección.  **

**Mecanismos de asignación más poderosos**

Para el desarrollador de procesos fluig, ahora la plataforma permite consultar y realizar acciones más complejas utilizando hAPI.

Esto ofrece una nueva gama de posibilidades a la hora de asignar las tareas de su proceso en su empresa. Esto es posible mediante el uso de hAPI, la misma que se utiliza en otros eventos *workflow*, para tener acceso a datos del formulario y del proceso a la hora de resolver la lista de usuarios responsables de las tareas en su empresa.

Se trata de más información a su alcance. Esto es fluig.

¡Manténgase informado!

Vea más detalles en [Mecanismo de asignación personalizado](https://tdn.totvs.com/pages/viewpage.action?pageId=142804157#Mecanismodeatribui%C3%A7%C3%A3opersonalizado-UtilizandohAPI).

## Social

**Edite publicaciones y comentarios**

Se equivocó al escribir y necesita corregir o mejorar una frase en una publicación? No se preocupe, no tendrá que rehacer todo, ¡solo debe editarla!

¡Sí, lo pidió y fluig cumplió!

Ahora, el usuario creador puede editar el contenido de publicaciones y comentarios, tanto en su *timeline* personal como en la *timeline* de comunidades en las que participa. La opción de edición aparece en la barra de acciones correspondiente a la publicación o comentario. La edición sigue la misma regla de la creación, es decir que permite como mínimo 2 y como máximo 600 caracteres. Al editar el contenido, todos los usuarios relacionados con él son notificados a través de la Central de Notificaciones y el contenido estará identificado mediante un ícono que mostrará la fecha y la hora de la modificación.

Para administradores

En sus comunidades este recurso se puede desactivar en la pestaña de permisos. Para publicaciones en la *timeline* personal no se puede desactivar.

## Mobile

**Recursos potentes de fluig Mobile en los formularios y *****widgets***

¿Quiere usar los mejores recursos del celular en sus desarrollos en fluig?

Con el nuevo protocolo fluig:// se pueden incluir *enlaces* para determinadas áreas de fluig Mobile, como documentos, perfiles de usuarios y comunidades. Utilícelos dentro de formularios, *widgets* y hasta en páginas externas.
 La gran ventaja de este recurso es redirigir estos *enlaces* a la aplicación nativa de fluig, en lugar de cargarlos a través del navegador del dispositivo móvil.

Por otra parte, para hacer que sus desarrollos sean aún más interactivos, se pueden incluir protocolos como tel:// y mailto://, por ejemplo, para activar las aplicaciones de teléfono e *e-mail* del sistema operativo del dispositivo.

¿Hay una dirección a la que la persona debe ir que está escrita en un formulario? Active Waze para trazar la mejor ruta al destino usando el recurso de geolocalización para obtener las coordenadas actuales del usuario.

¡Más información!

Aprenda cómo implementar esta novedad en la documentación sobre el [Protocolo fluig://](file://10.80.128.94/pages/viewpage.action%3fpageId=240309710) y no deje de ver en nuestro directorio GIT los ejemplos de uso para [*e-mail*](https://git.fluig.com/projects/SAMPLES/repos/sample-mobile-mail/browse), [teléfono](https://git.fluig.com/projects/SAMPLES/repos/sample-mobile-tel/browse) y [Waze](https://git.fluig.com/projects/SAMPLES/repos/sample-mobile-waze/browse).

![](/download/attachments/244935094/mobile.jpg?version=1&modificationDate=1476876299000&api=v2)

**Movimiento en bloque en fluig Mobile**

Mueva más de una solicitud en la palma de su mano. Ahora usted puede seleccionar más de una tarea para moverlas en bloque, siempre que cumplan con los siguientes requisitos:

- Mismo proceso, actividad y versión.
- Enviar a un solo responsable, papel o grupo.
- Enviar a la misma actividad de destino.
- No necesita modificación en el formulario.

Se volvió mucho más fácil y productivo aprobar sus solicitudes directamente en sus dispositivos móviles.

Observación

Recurso disponible en iOS y Android.

**/* falta imagem */**

**Más espacio para el campo identificador**

Vea más información del identificador del formulario. 

El identificador del formulario puede tener mucha información importante, y solo una línea puede ser muy poco para mostrar todo. Por eso, dejamos la información disponible en hasta tres líneas para que pueda quedar visible y el usuario pueda elegir la solicitud de una forma más rápida y precisa.

Observación

Recurso disponible en iOS y Android.

**/* falta imagem */**

**Filtre por identificador o por el número de la solicitud**

Encuentre la solicitud ingresando la información del identificador o su número. 
 Así es, ¡usted lo pidió y ahora tenemos estas dos formas de búsqueda! Por defecto, la búsqueda queda activada solo para el identificador, pero usted puede cambiar al número de la solicitud si lo desea.

Observación

Recurso disponible en iOS y Android.

**/* falta imagem */**

## Arquitectura

**Integre fluig con fluig Identity a través de API Pública de forma más simple**

La nueva versión del método [identityConfig](https://api.fluig.com/resource_WCMAdminTenantRest.html#path__admin_tenant_identityConfig_v2.html) del servicio *Tenants* fue simplificada a través de la disminución de los parámetros necesarios para la integración con fluig Identity.

Atención

La versión anterior del método [identityConfig](https://api.fluig.com/resource_WCMAdminTenantRest.html#path__admin_tenant_identityConfig_v2.html) está en desuso.

**Nuevos métodos disponibles en la API Pública**

Están disponibles nuevos métodos relacionados con algunas operaciones de la edición de páginas en la API Pública de fluig. Vea: 

- [pageHistory](https://api.fluig.com/resource_PageRest.html#path__2.0_pages_pageHistory_-pageCode-.html);
- [createPageDraftFromVersion](https://api.fluig.com/resource_PageRest.html#path__2.0_pages_createPageDraftFromVersion.html);
- [reloadPageLayout](https://api.fluig.com/resource_PageRest.html#path__2.0_pages_reloadPageLayout.html);
- [publishPageDraft](https://api.fluig.com/resource_PageRest.html#path__2.0_pages_publishPageDraft.html).

## LMS

**Integración fluig LMS x TOTVS HCM**

Ahora se puede aprovechar la integración de fluig LMS con TOTVS HCM a través de mensajes - EAI2. De esta forma, se pueden integrar los registros de capacitaciones, usuarios y procesos de aprendizaje con otros productos.

Manténgase al tanto de las integraciones disponibles con TOTVS HCM:

TOTVS HCM > fluig LMS

- Usuarios;
- Matrículas en capacitaciones.

fluig LMS > TOTVS HCM

- Capacitaciones;
- Solicitudes de matrícula en capacitaciones.
- Calificaciones de usuarios.

Más información

Obtenga más información en [Configuraciónde integraciones a través de EAI](https://tdn.totvs.com/pages/viewpage.action?pageId=212894462).

**¡Los recursos Habilidades y Avisos tienen una nueva apariencia!**

Buscando una mayor claridad, simplicidad y rendimiento para el usuario de fluig LMS los recursos Habilidades y Avisos son mucho más lindos y modernos. Además de mantener la información existente, ahora la ventana de los recursos sigue el estándar de la Guía de estilo de fluig.

¡Manténgase informado!

Estos recursos se encuentran en **Aprendizaje** > **Administrar** > **Habilidades** y **Aprendizaje** > **Avisos**.

Para obtener más información sobre ellos, acceda a la Ayuda en línea de [Habilidades](file://10.80.128.94/display/HF/Habilidades) y de [Avisos](file://10.80.128.94/display/HF/Avisos).

- [Habilidades](#)
- [Avisos](#)

![](/download/attachments/244935094/FLUIGINV-22093-2.PNG?version=1&modificationDate=1477400402000&api=v2)

![](/download/attachments/244935094/FLUIGINV-22093.PNG?version=1&modificationDate=1476906114000&api=v2)

## Novedades en documentación

- Procedimientos de configuración de Google Drive actualizados en el manual de [edición colaborativa con Google Drive](https://tdn.totvs.com/pages/viewpage.action?pageId=219694266).

- Aprenda cómo [implementar](https://tdn.totvs.com/pages/viewpage.action?pageId=255755875) código JavaScript en un formulario que utiliza pestañas de navegación ([*Navs*](https://style.fluig.com/components.html#nav)) de la Guía de estilo.

- Incluimos información sobre la propiedad WKManagerMode, que identifica si la solicitud está siendo movida por el gestor del proceso, en la documentación sobre [Desarrollo de Workflow](https://tdn.totvs.com/display/fluig/Desenvolvimento+de+Workflow#DesenvolvimentodeWorkflow-Par%C3%A2metrosworkflowparadesenvolvimentodeformul%C3%A1riossobaplataforma).

- Se ha agregado orientación sobre la manipulación de HTML de formularios a través de *scripts* JavaScript en la sección FormController de la página [Desarrollo de formularios](https://tdn.totvs.com/pages/viewpage.action?pageId=75270483#DesenvolvimentodeFormul%C3%A1rios-FormController).

- Vea la documentación actualizada sobre [Nomenclatura y Estructura de Formularios](https://tdn.totvs.com/pages/viewpage.action?pageId=244448460).

- Orientaciones sobre la autenticación de usuarios en fluig Mobile utilizando la [contraseña de Active Directory](https://tdn.totvs.com/pages/viewpage.action?pageId=266965585).

- La documentación sobre [Consumo de Banda](https://tdn.totvs.com/display/fluig/Consumo+de+Banda) fue actualizada con datos sobre las páginas de Aprendizaje.

- Hemos incluido una nueva sección sobre cómo generar el archivo CSR en la documentación de [configuración HTTPS](https://tdn.totvs.com/display/fluig/Configurar+HTTPS) de fluig.

- Relacionamos los tipos de archivos compatibles con la [Impresión de copia controlada](https://tdn.totvs.com/pages/viewpage.action?pageId=152802071#Impress%C3%A3odeC%C3%B3piaControlada-Tiposdearquivossuportados) en la documentación técnica de este recurso. 

Esta información también está disponible en [Help fluig](https://tdn.totvs.com/pages/viewpage.action?pageId=235325457).

¿Le gustaría saber más sobre la configuración de servicios de componentes? Acceda a la nueva documentación [aquí](https://tdn.totvs.com/pages/viewpage.action?pageId=267788666) y manténgase al tanto de todos los detalles.

## Correcciones

## BPM

[Los procesos configurados con la actividad final de anulación (BPMN 2.0) estaban finalizando, en lugar de anularlos cuando llegaron a esta tarea.](https://tdn.totvs.com/display/fluig/Eventos+Finais+de+processo) Este comportamiento se ha corregido y, por lo tanto, los eventos de anulación *before* (antes) y *after* (después) se ejecutarán cuando el flujo de una solicitud se mueva a este tipo de actividad.

Atención

Compruebe si alguno de los procesos registrados en su entorno utiliza el evento mencionado anteriormente, si la anulación no es el comportamiento deseado, sustitúyala en los respectivos *workflows*, [exporte](https://tdn.totvs.com/x/wiswDg) el proceso y [convierta](https://tdn.totvs.com/x/5qJSDg)las solicitudes ya abiertas a la versión más reciente.

Acceda a la documentación [con las actividades finales de proceso](https://tdn.totvs.com/x/RoSNBw) para conocer los tipos disponibles

Verificación para que se devuelvan solo los registros de formulario activos en la consulta de *dataset*.

Observación

La opción “Listar solo registros activos” deberá estar habilitada en las propiedades del formulario.

- Ajuste en el comportamiento de la función *focusInput* en formularios abiertos a través del navegador Google Chrome.

- Permitida la llamada de eventos desarrollados sobre la plataforma a partir de *scripts* incluidos en las actividades de tipo Servicio.

- Corrección en la ejecución del método *setCardValue* cuando se utiliza en eventos *afterStateEntry* y *afterTaskComplete*.

- Uso de las credenciales de un administrador, que no es parte de la*pool* de responsables de la tarea, como autenticación en el método *takeProcessTask* del *Web Service Workflow*.

- Inclusión de alertas en la *bitácora* de la plataforma para que se pueda identificar cuando no se informaron los parámetros del método *createAdHocTasks* de la hAPI.

- Verificación del mecanismo de asignación en actividades iniciales para asegurar que, en caso en que se defina un mecanismo, el mismo se haya configurado antes de la exportación de fluig Studio al servidor.

- Acceso a las tareas del usuario substituido de acuerdo con el color seleccionado en el gráfico de la Central de Tareas.

- Ajuste en la generación de la clave MD5 que permite la edición de formularios creados a través del editor *web *de la plataforma, ya que aparecía un mensaje que informaba que no se podía editar el formulario. 

¡Esté atento!

Caso não esteja conseguindo editar algum formulário criado através do editor *web* do fluig, após aplicar a Atualização 1.5.12, [restaure o formulário](https://tdn.totvs.com/pages/viewpage.action?pageId=233763113#Formul%C3%A1rio-Restaurarvers%C3%A3odoformul%C3%A1rio) para uma versão anterior. Se o problema persistir, acione o [Suporte fluig](https://suporte.totvs.com/portal/p/10098/suporte-fluig-home).

- Se incluye la posibilidad de actualizar documentos publicados como archivos adjuntos de una solicitud a través del menú Propiedades. Anteriormente este procedimiento solo estaba disponible para documentos adjuntados a través de ECM.

- Se realizó un ajuste en el registro de Feriados del Panel de Control para permitir que la fecha de un feriado actual se pueda informar de forma manual o por el calendario.

- La ventana de selección de fecha del componente *Calendar* de la Guía de estilo de fluig se superponía a parte de los elementos de la página de visualización de solicitudes. Este comportamiento se ha corregido para que el calendario no se muestre sobre estos elementos.

- La notificación enviada al solicitante cuando una solicitud se inicia a través de *Web Service*, que había sido eliminada en versiones anteriores, se reimplementó.

- El método *getParentInstance* de la hAPI se ha corregido para que se pueda utilizar en la actividad inicial del subproceso y no solo en las otras actividades del flujo.

- Se ha solucionado el envío repetido de notificaciones a miembros de un papel cuando una tarea vencida se mueve de forma automática y las programaciones de flujo automático y tareas vencidas se están ejecutando al mismo tiempo.

- Se ha activado el envío de notificación por *e-mail* al solicitante en los casos en los que la solicitud se inicia a través de *Web Service*.

- Se ha incluido la verificación para impedir que complementos vacíos – con solo espacios y salto de línea - se agreguen al historial de una solicitud

- Corrección para permitir flujos de retorno en actividades cuyo mecanismo de asignación se ha configurado Para un Grupo o Para un Papel.

- Tratamiento para permitir comentarios en solicitudes movidas a la actividad final de un proceso a través del método *saveAndSendTask *del servicio *WorkflowEngineService*.

- Se ha incluido un mensaje informativo en la página [Convertir solicitudes](https://tdn.totvs.com/pages/viewpage.action?pageId=233763179), cuando la versión actual del proceso tiene una tarea en consenso y la nueva versión no. La plataforma solo permite la conversión de una tarea en consenso a otra tarea del mismo tipo.

Acceda a [esta FAQ](https://tdn.totvs.com/pages/viewpage.action?pageId=240296678) y conozca más sobre cómo convertir solicitudes en fluig.

- Corrección para enviar toda la información de los usuarios al mecanismo de asignación personalizada. La ausencia de cierta información del *dataset* *colleague* provocaba inconsistencias en las validaciones desarrolladas.

- Debido a una inconsistencia, las actividades de un proceso cerrado continuaban enviando notificaciones de movimiento automático por retraso. Este comportamiento se ha corregido.

- Corrección para que la plataforma diferencie procesos con mecanismos de asignación por asociación configurados en la actividad inicial, de manera tal que las reglas de asociación se apliquen según se definieron en cada proceso. Anteriormente, el mecanismo de un proceso se estaba aplicando a los otros con el mismo tipo de asignación.

- Se ha creado una validación para evitar que se liberen procesos cuando existe una actividad con la descripción en blanco, lo que garantiza que, al mover la solicitud, el usuario puede visualizar la descripción de una actividad de tipo *enlace* a la que se está enviando la solicitud.

**Arquitetura**

- Visualización de las páginas de Denuncias, Palabras restringidas y Log de copia controlada para usuarios/grupos/papeles que reciban permiso para visualizarlas por parte del administrador de la plataforma.

Esté atento

Es necesario que los usuarios/grupos/papeles tengan permiso de visualización también en las páginas principales de estos recursos.

- Presentación de los datos de Experiencias de Uso cuando la plataforma está en idioma español.

- Verificación de *e-mails* en blanco o duplicados en la base de datos fluig, antes de la activación de la integración con fluig Identity.

- Inicialización del servicio *Realtime* después de la instalación de la actualización 1.5.11 en entornos Linux.

- Mejoras en las verificaciones de autenticación durante los procedimientos realizados a través de fluig Studio, como la consulta de *datasets* y la exportación de formularios.

- Conversión a fluig de grupos existentes en TOTVS | ECM 3.00 que contengan comas (,) en el nombre.

- Corrección en el envío de *e-mail* desde el recurso Enviar Comentarios.

- Usuarios desactivados, pero que aún se mostraban en las notificaciones generadas por las comunidades, debido a acciones anteriores a la desactivación, ya no se hace referencia en los *e-mails* y alertas emitidos.

- Al informar un *e-mail* no válido como destinatario en el método *notifier.notify*, se mostrará un mensaje, tanto al usuario como en la *bitácora,* informando que el destinatario definido no es válido y por lo tanto no se notificará.

- Acciones ejecutadas a través de métodos de los *Web Services* (como *cancelInstance*) se registrarán en la [bitácora por usuario](https://tdn.totvs.com/display/HF/Controle+de+Log) cuando este recurso se encuentre activado, así como ya sucedió con las acciones realizadas directamente por el navegador.

- El *download* de *bitácoras* de usuario a través de la opción [Control de *Log*](https://tdn.totvs.com/display/HF/Controle+de+Log) del Panel de Control no estaba disponible en entornos cuyo nombre del archivo de *bitácora* no estaba siguiendo el estándar server.log. El *download* (descarga) ahora se realiza según el nombre definido en la configuración de Jboss.

- Corrección para permitir el login de usuarios que tengan caracteres especiales en el nombre o en el apellido registrado en Active Directory en entornos configurados con [Autenticación Integrada](file://10.80.128.94/pages/viewpage.action%3fpageId=162170863).

- Ajustes para permitir la inicialización de solicitudes a través de WebService con los usuarios que también se crearon a través de WebService por medio de integración con TOTVS RM, porque se produjeron inconsistencias cuando no se enviaba el valor de *locale* del usuario.

- Se retiró el botón Eliminar del registro de campos del recurso Lista – que se encuentra en el Panel de Control – por ser una acción no permitida, ahora solo se puede inhabilitar un campo incluido. También se realizaron los ajustes para permitir habilitar nuevamente un campo que fue previamente desactivado.

**LMS**

- Navegación por las respuestas durante la consulta del historial de una evaluación que contenga preguntas tipo correlación.

- Ajuste en la carga de la página al visualizar el contenido de un ítem de tema para que se informe al usuario en caso de que el navegador bloquee la ventana emergente.

- Corrección en el cálculo del porcentaje completado de las capacitaciones realizadas por el usuario.

- Actualización por componente de la página al liberar la nueva versión de una pregunta, prescindiendo de la actualización completa de la página por el navegador.

- Corrección de la nomenclatura en el título del modo de selección del coordinador del grupo.

- Corrección en la publicación de imágenes en las preguntas creadas a través del menú Evaluaciones.

- Se ha incluido una validación adicional para verificar, durante la eliminación de un tema, si el mismo no está vinculado a bloques de evaluaciones o a bloques por separados, con el fin de evitar errores de transacción en este procedimiento.

- Se ha ajustado la visualización de los grupos de los que un usuario es responsable, para que todos ellos se presenten a medida que se activa el botón “Mostrar más”. Solo un grupo adicional se estaba presentando en la paginación.

- Durante el registro de temas en grupos, se le permitió definir un tema como un prerrequisito de otro tema y realizar la misma configuración de forma inversa, lo que impide que el usuario ejecute ambos. Este comportamiento ha sido bloqueado.

- Se ha agregado una nueva validación para verificar si una evaluación registrada en LMS está siendo utilizada por un grupo, una ruta, una capacitación o una programación.

- Ajuste para que se muestren en la Central de Tareas las actividades de participación en sesiones de eventos de aprendizaje. Esta información no se mostrará a los usuarios cuyo huso horario definido en el perfil sea diferente al del servidor.

- Los videos en los formatos MP4 o AVI adjuntados a las capacitaciones no se estaban reproduciendo para los usuarios matriculados. La corrección garantiza la ejecución de los videos.

- Se han ajustado los términos en inglés para Matrícula (*Enrollment*) y Aviso (*Notice*) del menú Aprendizaje.

- Corrección para matricular de forma automática a los alumnos en la lista de espera de un grupo cuando se amplía la cantidad de cupos disponibles. Anteriormente, una inconsistencia impedía la ejecución de este procedimiento.

- La carga de las alternativas, el tamaño de las imágenes en preguntas de opción múltiple y los contadores de puntaje se actualizaron para evitar el bloqueo de la barra de progreso durante la vista previa de las evaluaciones.

- El registro de imágenes como alternativas en preguntas de tipo opción múltiple se ajustó para evitar una inconsistencia en la pantalla después de la inclusión de la primera imagen.

- El campo “Orden” se incluyó en la página de registro de temas para que se pueda definir la disposición de los temas en el catálogo de materias y grupos, en el grupo en curso y en las páginas del responsable del grupo.

Consulte la [Help fluig](https://tdn.totvs.com/pages/viewpage.action?pageId=233766486) para saber más sobre los Temas y los campos disponibles en el registro.

- Visualización de las rutas y capacitaciones en las que el alumno está matriculado en su área de aprendizaje – Inicio. Recuerde que si el alumno está matriculado en una ruta, las capacitaciones que pertenecen a dicha ruta se muestran solo dentro de la ruta y no como capacitaciones separadas en el área de aprendizaje.

**Social**

- Corrección para que pueda utilizar la mención de usuarios en los comentarios de una publicación.

- Ajuste para permitir el uso de corchetes en el contenido de las publicaciones.

- Corrección para que la edición de datos del perfil no afecte las nubes de relación del usuario.

- Corrección de *widget* Nube de *Tags* para evitar el bloqueo de la comunidad durante la comunicación con el servidor de indexación (Solr).

- El contador de visualizaciones de artículo contará los accesos realizados desde las comunidades, no sólo los realizados a través de la navegación de documentos.

- El número de participantes que se muestra en el encabezado de las comunidades se ha corregido para que refleje el total de usuarios de la comunidad. El número real se muestra solo en el informe de estadísticas de uso.

- Validación del tamaño de videos e imágenes publicados en comunidades de acuerdo con el límite estipulado en el menú [Parámetros](https://tdn.totvs.com/pages/viewpage.action?pageId=234455426) del Panel de Control. Los otros tipos de publicación ya tienen en cuenta el tamaño máximo de *upload* definido por el administrador.

- Corrección en el envío de notificaciones de creaciones de formularios en las comunidades, para que se tengan en cuenta las reglas de permiso de la carpeta. También se crearon verificaciones adicionales para la visualización de formularios y artículos a los que se acceden a través de *enlaces* de compartir.

**Mobile**

- Validación para que *datasets* cargados a través de zoom dentro de una modal estén soportados por fluig Mobile para iPhone/iPad.

- Grabación de toda la estructura de Zoom cuando se guarda el borrador del formulario para que las validaciones desarrolladas sobre este componente se puedan realizar tanto en la *web* como en la aplicación móvil. Anteriormente, solo el ID de los campos se grababa, lo que impactaba en la usabilidad del recurso.

- Grabación de las observaciones agregadas a las solicitudes a través de fluig Mobile.

- En fluig Mobile, cuando los usuarios intenten acceder a una solicitud a través de la Central de Notificaciones, pero esta haya sido anulada, se mostrará solo un mensaje que informa que la solicitud ya no está disponible. 

- Se ha corregido la grabación de campos de tipo *radio* y *casilla de verificación* en formularios Principal x Secundario durante el procedimiento de guardar borrador en dispositivos móviles. 

**WCM**

- Publicación de páginas nuevas o editadas sin tener que introducir una imagen como ícono.

- Al crear *layouts* a través de fluig Studio, era necesario incluir los elementos estándar de las páginas de fluig, como el ícono de alerta de notificaciones, de forma manual. Estos recursos ahora se instancian automáticamente en [application.info](https://tdn.totvs.com/display/fluig/Arquivo+application.info) de los *layouts*.

- Verificación de inconsistencias en las páginas secundarias creadas por un componente durante la inactivación del mismo para evitar que la falla interrumpa el procedimiento.

- El *widget* Editor de Contenido se actualizó para permitir el salto de línea utilizando el botón *Enter*.

- Se han realizado ajustes de usabilidad en el *widget* “Listar registros de *Datasets*” para que no sea necesario presionar el botón *Enter *del teclado para filtrar por el valor deseado y para que el campo filtro no se muestre cuando no exista una columna seleccionada para utilizarlo.

**ECM**

- Corrección para que cuando se visualizan las propiedades de un documento en *checkout* y se guardan sin realizar ningún cambio, el archivo no se envíe para su aprobación.

- Bloqueo en la definición de valores en campos de tipo Fecha creados a través del editor de formularios web cuando una regla establece que se debe desactivar.

- Se ha incluido el mensaje en Mozilla Firefox que informa que este navegador no es compatible con el recurso *Arrastrar y soltar* de carpetas, en caso de que el usuario intente ejecutar este procedimiento.

Vea los navegadores que son compatibles con este recurso a través de la documentación de [*Arrastrar y soltar* los documentos](https://tdn.totvs.com/x/IAKLCQ).

- Orden de los registros en campos de tipo Zoom considerando el valor que se informa en el parámetro *estándar*.

Consulte a seção Zoom da documentação de [Desenvolvimento de Formulários](https://tdn.totvs.com/pages/releaseview.action?pageId=75270483#DesenvolvimentodeFormul%C3%A1rios-Zoom) para saber mais sobre este componente e suas propriedades.

- Permanencia de los campos personalizados agregados a un documento cuando este se coloca en *checkout*.

- Presentación de los registros de *datasets* de formulario de acuerdo con el orden configurado en un *widget*, en entornos que utilizan la base de datos Oracle.

- La opción de impresión de documentos se eliminará de forma automática cuando el usuario no tenga permiso en el recurso “ECM – Imprimir copia controlada”. Anteriormente, en caso de que no tuviera permiso, al intentar utilizar la impresión se informaba al usuario a través de un mensaje.

- Para evitar que caduque la sesión durante la generación de informes BIRT con grandes volúmenes de datos, el tiempo de sesión se amplió de 30 minutos a 5 horas.

- Al intentar eliminar un formulario cuyo *dataset* se asoció a otro formulario, el procedimiento está bloqueado por la plataforma. El mensaje que se presenta al usuario en este escenario se ha ajustado para hacer más claro el motivo del bloqueo.

- Los adjuntos de formularios y documentos de ECM abiertos en pestañas paralelas en el navegador entraban en conflicto, lo que impedía la visualización de uno de los archivos. La corrección previne este comportamiento y permite la visualización de los archivos en pestañas simultáneas.

- Corrección para que los títulos de los mensajes de *e-mail* publicados en fluig a través del *plugin* del Outlook se envíen totalmente.

- La creación de nuevas versiones no consideraban los campos personalizados incluidos en un documento. Este comportamiento se ha corregido para que las nuevas versiones incluyan los campos personalizados de versiones anteriores.

- JavaScript de renderización de formularios Principal x Secundario en fluig Mobile se actualizó para soportar columnas de encabezado con el atributo *colspan*.

- El cambio de nombre de un documento que tenga aprobadores a través de la opción Cambiar el nombre se ha corregido. Después del procedimiento, el documento se enviará normalmente para su aprobación.

- Se ha ajustado el uso del método *setEnhancedSecurityHiddenInputs* en actividades iniciales para que no ocurra la inconsistencia de objeto no encontrado, que impedía el movimiento de la solicitud.

- Regularización del atributo *fileurl* del método [*listDocument*](https://api.fluig.com/resource_DocumentServiceRest.html#path__ecm_document_listDocument_-folderId-.html) de fluig API para que vuelva a el path completo del documento, en lugar de nulo.

- Se ha corregido la inconsistencia que ocasionaba el mensaje “No se pudo cargar *Applet*” - en entornos que cumplan con el requisito de *plugin *Java instalado en el navegador - durante la impresión de copia controlada.

Atención

Siga los procedimientos descritos en la documentación [Impresión de copia controlada](file://10.80.128.94/pages/viewpage.action%3fpageId=152802071) para utilizar este recurso.

Recomendamos que Applet no se utilice más y que usted considere desactivar esta opción en el Panel de Control.

- Ajuste en la renderización del componente Zoom para que los datos no se superpongan a los de otros campos cuando el formulario tengan varias columnas y el espacio de la pantalla se reduzca.

- Corrección para permitir el cambio de la imagen estándar de los usuarios en el *widget* Cumpleañeros.

- Los permisos de seguridad (Lectura, Grabación, Modificación o Total) definidos para los formularios almacenados en el ECM se han corregido para que sean heredados por los registros de estos formularios, en caso en que la opción esté activada. De este modo, los usuarios que tienen permiso en los formularios podrán realizar búsquedas por el contenido de los registros a través de la herramienta de búsqueda.

- Conversión de documentos que tiene aprobadores por el convertidor externo, lo que genera el PDF para su visualización en Viewer, al realizar su *check-in*.

**Identity**

- Las opciones de vinculación del perfil con Facebook y Google Glass se han descontinuado y eliminado de fluig Identity.


<!-- anchors: Plataforma|Actualización1.5.12-BPM, BPM, BPM-1, BPM-2, Plataforma|Actualización1.5.12-Social, Plataforma|Actualización1.5.12-Mobile, Plataforma|Actualización1.5.12-Arquitectura, Plataforma|Actualización1.5.12-LMS, BPM, Plataforma|Actualización1.5.12-Novedadesendocumentación, Plataforma|Actualización1.5.12-Correcciones, Plataforma|Actualización1.5.12-BPM.1 -->
