---
title: "Plataforma | Actualización 1.6"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=272145169"
scraped_at: "2026-03-09T05:15:45.085Z"
depth: 4
anchors: 7
child_links: 45
---

# Plataforma | Actualización 1.6

Vea las novedades de la actualización 1.6.0 de fluig a continuación:

Antes de actualizar...

Antes de aplicar la Actualización 1.6 en su entorno, consulte los prerrequisitos, las indicaciones y el paso a paso, disponibles en la [Guía de actualización del fluig.](https://tdn.totvs.com/pages/viewpage.action?pageId=271666186)

## Arquitectura

**WildFly y Java 8: Tecnología de punta para garantizar la fluidez de su entorno**

Para proporcionar más estabilidad, seguridad y velocidad, se actualizaron dos componentes fundamentales de la plataforma: el servidor de aplicación WildFly, ahora en la versión 10, y el entorno de ejecución Java en la versión 8. Java 8 ofrece mejoras importantes en seguridad, desempeño y estabilidad, mientras que WildFly incluye nuevas capacidades de gestión de recursos *clustering* e integración.

Además, el fluig 1.6 tiene incorporado el caché local, un sistema nuevo y efectivo de *caché* interno que reemplaza el MemCached como estándar de la plataforma.

Observación

Las instalaciones que utilizan el MemCached mantendrán este sistema de *caché* después de la actualización. El caché local ("localmap") solo será estándar en las nuevas instalaciones. Para cambiar el servidor de caché ingrese a [Configuraciones de la plataforma](https://tdn.totvs.com/x/xYfYCg).

![](/download/attachments/271409372/RFLUIG-1278.jpg?version=1&modificationDate=1487783446000&api=v2)

Imagen sin cambios. Fuente: [widefly.org](http://wildfly.org/), con licencia a través de [Creative Commons 3.0](https://creativecommons.org/licenses/by/3.0/legalcode).

¡Esté atento!

Antes de aplicar la Actualización 1.6 en su entorno, asegúrese de que la instalación actual cuenta con la Actualización 1.5.10 o superior.

****

**Reducción en el tiempo de*****boot*****: Acelerando desde el inicio**

Gracias a una serie de ajustes y mejoras, el tiempo de inicio de la plataforma se redujo sustancialmente en esta *release*, con un rendimiento aún mejor en entornos que tienen varias instancias configuradas. 

Infórmese acerca de las configuraciones de balance de carga, alta disponibilidad y *clúster*[haciendo clic aquí](https://tdn.totvs.com/pages/viewpage.action?pageId=257622931).

**Mayor estabilidad en entornos*****clúster*****con el soporte de replicación de sesiones**

Los entornos con balance de carga y/o alta disponibilidad serán aún más eficientes y estables con la implementación del *clúster* dinámico. Esta técnica permite que las sesiones de los usuarios sean replicadas en las diferentes instancias de la instalación, lo que aumenta su capacidad de recuperación en caso de que alguna de las instancias pase por una indisponibilidad.

[Haga clic aquí](https://tdn.totvs.com/pages/viewpage.action?pageId=269072543) y tenga más información sobre la configuración de la plataforma en *clúster*.

**Nuevo motor de búsqueda y configuraciones de indexación garantizan resultados más rápidos y relevantes**

Encontrar la información que necesita, cuando la necesita, es esencial para su negocio y para su día a día. Por lo tanto, hemos actualizado el motor de búsqueda de la plataforma para que sus búsquedas sean más rápidas y los resultados aún más relevantes. A partir de ahora, la búsqueda por contenido de los documentos es nativa, lo que significa que ya no es necesario marcar una opción cuando se realiza una búsqueda para que dicha búsqueda tenga en cuenta el contenido de los documentos.

Además, la página de configuraciones de [Indexación](https://tdn.totvs.com/pages/viewpage.action?pageId=236430821) ahora cuenta con más opciones para que el administrador pueda ajustar el procedimiento de acuerdo a la necesidad.

![](/download/attachments/272145169/Indexaci%C3%B3n.png?version=1&modificationDate=1489603249000&api=v2)

**Nuevas opciones de indexación disponibles en el Panel de Control**

Sugerencia

Luego de actualizar el entorno, realice una reindexación completa de los repositorios de su empresa en el fluig. Esto es necesario para que la plataforma utilice las mejoras ofrecidas por el nuevo motor de indexación y búsqueda.

## BPM

**El timer entre los intentos de una actividad de servicio garantiza más asertividad y velocidad**

La configuración de tiempo en las actividades de servicio satisface la necesidad de un recurso que proporcione versatilidad y mejor facilidad de uso, lo que elimina la posibilidad de que una sola actividad se ejecute más de una vez.
Ahora se pueden incluir en la actividad de servicio las opciones de *timer* entre las repeticiones, lo que permite configurar el tiempo entre los intentos de ejecución de una actividad de servicio (asincrónica). Junto al servidor, utilizará *el*programador de tareas interno para ejecutar la actividad después de un tiempo determinado, lo que impide ejecuciones simultáneas de una misma actividad. Donde cada actividad se llevará a cabo en 1 minuto y también se informará en el historial el próximo intento, alertando al usuario.

![](/download/attachments/272145169/Timer_espanhol.png?version=1&modificationDate=1489429049000&api=v2)

**Flujo estándar en actividades automáticas: innovación asociada a la facilidad**

El flujo estándar en actividades automáticas facilita el modelado de *gateways* automáticos, lo que permite programar el flujo de contingencia de forma más simple. La novedad que permitirá el uso del flujo estándar en las actividades automáticas se da a través de la inclusión de un flujo estándar tanto en el modelador en la Web como en Studio, para las actividades previstas con la inscripción BPM2.0.
Esto permite que el flujo reaccione a las tomas de decisiones automáticas de los *gateways* inclusivo y exclusivo, moviendo automáticamente a este flujo, si no se alcanza ninguna de las condiciones automáticas.

Más información

Consulte la documentación disponible en **Flujo estándar**[.](https://tdn.totvs.com/display/public/fluig/Fluxos#Fluxos-FluxoPadrão)

![](/download/attachments/272145169/Fluxopadrao_Espanhol.png?version=1&modificationDate=1489433488000&api=v2)

****

**Asumir tarea más accesible y evidente para todos**

El recurso 'Asumir tarea' nunca ha sido tan notable ni se destacó tanto como en esta actualización, por lo que es mucho más fácil de encontrar. En la actualidad se encuentra fuera de las pestañas de la solicitud, junto a otras opciones de la solicitud como "Enviar", "Guardar" y "Anular solicitud".

****

****

**Anule todas las solicitudes que desee, de una sola vez**

Ahora se pueden anular varias solicitudes de un modo mucho más práctico, con un solo clic, a través del nuevo recurso "Cancelar en bloque", que permite cancelar varias solicitudes a la vez y utiliza el mismo texto para la anulación. Se encuentra en la pestaña "Mis solicitudes", en la Central de Tareas. También se pueden anular varias solicitudes a través de la API Pública.

Más información

Consulte sobre la API Pública en la documentación disponible en [Consumo de API Pública](https://tdn.totvs.com/pages/viewpage.action?pageId=185736325) y [Consumo de Servicios en la API Pública y componente SDK](https://tdn.totvs.com/pages/viewpage.action?pageId=198934765)

****

****

**Mueva varios procesos al mismo tiempo**

El nuevo recurso de "Movimiento en bloque" permite que las tareas que se encuentran bajo la gestión de un determinado usuario se muevan simultáneamente. Este recurso está disponible en la Central de Tareas y se puede acceder a él a través de la pestaña de tareas bajo mi gestión, que permitirá mover los procesos del mismo tipo/versión/actividad de una sola vez a la siguiente actividad.

![](/download/attachments/272145169/Movimentarembloco_Espanhol.PNG?version=1&modificationDate=1489432045000&api=v2)

**Novedad en la creación de*****templates*****para el envío de correo electrónico personalizado en la plataforma**

Ahora se puede utilizar el método *notifier.notify* para el envío de correos electrónicos externos (que no tienen cuenta en fluig) y templates personalizados. ¡Mande notificaciones a todo el mundo!

Más información

Consulte la documentación disponible en [**Personalización de correo electrónico**](https://tdn.totvs.com/pages/viewpage.action?pageId=183730587)**.**

![](/download/attachments/271409372/notifier.notify.png?version=2&modificationDate=1488886424000&api=v2)
**Modificación en el método*****notifier.notify***

## ECM

**Firma digital simplificada**

¡Pronto ya no tendrá que preocuparse más por tener Java instalado en su ordenador para aprobar documentos (o mover las solicitudes) con firma digital! Estamos simplificando el uso de la Firma digital, a partir de ahora, si Google Chrome es su navegador favorito, ya no tiene que preocuparse por Java: ahora utilizamos una extensión para buscar su certificado digital. En otros navegadores - Internet Explorer y Firefox - aún es necesario tener Java instalado, ¡pero es por poco tiempo!

******

**Mayor flexibilidad en el uso de propiedades de Copia controlada**

Si soñaba con incluir información adicional en un documento a través de las propiedades de la copia controlada, ¡ahora su sueño es una realidad! Hemos creado nuevos eventos para darle más flexibilidad al uso de propiedades de copia controlada: cree nuevas propiedades, cambie el valor de propiedades existentes de acuerdo a sus necesidades:

- onApplyDocumentPrintProperties
- onApplyDocumentProtocolProperties
- onApplyDocumentPublishProperties

¿Le interesa? [Haga clic aquí](https://tdn.totvs.com/display/fluig/Eventos+Documentos) y vea más detalles sobre los eventos. Ah, tenemos un ejemplo disponible [aquí](https://git.fluig.com/projects/SAMPLES/repos/sample-interacting-with-copy-controlled-properties/browse).

 ¿Es nuevo por aquí?

Obtenga más información sobre las propiedades de copia controlada [aquí](https://tdn.totvs.com/x/F5MbCQ). 

## LMS

**Nuevos métodos en la API Pública**

Ahora la gama de manipulación de ítems de Aprendizaje y Evaluaciones es más amplia, con nuevos métodos disponibles en la API Pública. Vea:

- [Carpetas](https://api.fluig.com/resource_FolderServiceRest.html);
- [Rutas](https://api.fluig.com/resource_TrackServiceRest.html);
- [Capacitaciones](https://api.fluig.com/resource_TrainingServiceRest.html);
- [Contenidos](https://api.fluig.com/resource_ContentServiceRest.html);
- [Habilidades](https://api.fluig.com/resource_SkillServiceRest.html);
- [Temas de preguntas](https://api.fluig.com/resource_AssessmentTopicServiceRest.html);
- Preguntas:

- [Múltiples](https://api.fluig.com/resource_MultipleQuestionServiceRest.html);
- [Objetiva](https://api.fluig.com/resource_ObjectiveQuestionServiceRest.html);
- [Espacio en blanco/Espacio en blanco seleccionable](https://api.fluig.com/resource_LacunaQuestionServiceRest.html);
- [Escala/Valor](https://api.fluig.com/resource_ScaleQuestionServiceRest.html);
- [Correlación/Con varios valores](https://api.fluig.com/resource_CorrelationQuestionServiceRest.html);
- [Descriptiva](https://api.fluig.com/resource_EssayQuestionServiceRest.html);
- [Orden](https://api.fluig.com/resource_OrdinationServiceRest.html);

[Bloques](https://api.fluig.com/resource_BlockServiceRest.html);[Evaluaciones](https://api.fluig.com/resource_AssessmentServiceRest.html);[Matrículas](https://api.fluig.com/resource_EnrollmentServiceRest.html).
** **

## Portales

**Obtenga información sobre la plataforma de manera más simple e integrada con la nueva Central de Ayuda**

¿Tiene alguna duda sobre cómo utilizar algo en la plataforma? La nueva [Central de ayuda](https://tdn.totvs.com/display/HF/Ajuda) está aquí para hacer la búsqueda de información mucho más ágil. A través de dicha Central usted tiene acceso rápido a los videos y documentación principales que se ofrecen en los portales del [Desarrollador](https://tdn.totvs.com/display/fluigesp/Home), [Ayuda](https://tdn.totvs.com/pages/viewpage.action?pageId=236428080), [Aprendizaje](https://tdn.totvs.com/display/AF/Aprendizado+fluig+Home) y [FAQs](https://tdn.totvs.com/display/FF/FAQ+fluig+Home). ¡Y todo esto con un solo clic! Vea lo fácil que es:

![](/download/attachments/271409372/Central%20de%20Ajuda.gif?version=1&modificationDate=1488908176000&api=v2)

**Para ingresar a la Central de Ayuda, solo debe hacer clic en el ícono ****en el borde superior derecho de la página**

## Novedades en documentación

- Vea la actualización realizada en [LMS 019 - Formatos de videos compatibles](https://tdn.totvs.com/pages/viewpage.action?pageId=239036570).

- La documentación [Sincronización de Datasets](https://tdn.totvs.com/pages/viewpage.action?pageId=212899013) ha sido actualizada para aclarar la obligación de la función *defineStructure* en la configuración del dataset *offline*.

- Consulte la documentación de [Importación de datos históricos](https://tdn.totvs.com/x/k4_NBw) de fluig Analytics actualizada con nueva información sobre el funcionamiento de la versión 1.5-v3 del importador.

- Consulte la FAQ [Ubicación de los archivos en la carpeta de instalación de fluig 1.6](https://tdn.totvs.com/pages/viewpage.action?pageId=271844650) para informarse sobre dónde están almacenados los archivos más usados del sistema a partir de esta *release*.

- Vea la FAQ [Utilizando campo de formulario para definir responsables en una nueva solicitud](https://tdn.totvs.com/pages/viewpage.action?pageId=271677851) creada para informar los detalles del uso de hAPI en el mecanismo de asignación personalizado en solicitudes ya iniciadas.

## Correcciones

**BPM**

- El anexo de la solicitud no estaba disponible para la visualización de los otros usuarios, cuando el usuario que se había incluido estaba inactivo. 

- Se corrigió la inconsistencia en la búsqueda de la consulta de solicitudes, y se filtra por el número de la solicitud.

- Comportamiento que hace que sea imposible hacer un movimiento en bloques para flujos que permiten retorno.

- Las notificaciones por correo electrónico se han ajustado para que, cuando una actividad conjunta se mueva automáticamente por atraso, no se envíen notificaciones inadecuadas o duplicadas.

- Se corrigió la inconsistencia para el mecanismo de asignación por campo de formulario, lo que permite la inclusión de uno o más usuarios.****

- Ajuste en el uso de firma digital, que le permite al usuario que tiene matrícula y nombre de usuario diferentes ver los detalles de la firma sin problemas.

- Se agregó la validación para la corrección de la tarea asignada a un usuario bloqueado. Donde el administrador pueda recibir y asumir el proceso, dando continuidad al flujo.****

- Se realizó el tratamiento para ignorar la validación de solicitante y usuario al intentar anular o eliminar un subproceso.

- Las actividades de servicio con captura de errores no se liberaban por guardar el mismo diagrama más de una vez. Se ajustó para que el diagrama configure correctamente y guarde solo un diagrama a la vez.

- Al agregar un usuario a una actividad, el mismo no aparece en las propiedades de un proceso 2.0. 

- Se ajustó la actividad paralela que no detectaba *join* cuando se usaban solo enlaces de flujo, que apuntaban todos al mismo flujo de salida.

- Se ajustó la inconsistencia para mostrar al usuario que pertenece a un grupo o papel, cuando el mensaje se muestra al sustituto que inicia la solicitud.

- Registro de sustituto con el mismo usuario sustituido en diferentes períodos.

- Se ajustó la inconsistencia al iniciar una solicitud en la que el papel estaba registrado para un usuario sustituto, ese mismo sustituto no constaba en el papel y al intentar abrir la solicitud la página estaba en blanco. 

- Se ajustó la variable *WKUserComment* que no devolvía los complementos de las solicitudes ya iniciadas. 

- Se ajustó el formato del archivo de exportación en la consulta de solicitudes.

- Se corrigió la visualización de la foto del usuario en un complemento de una solicitud.

- Se corrigió la visualización del plazo de una tarea creada a través de *onDisplayTasks* en la Central de Tareas en fluig Mobile.

- Cambio realizado en la propiedad *Expired* que permite que tareas atrasadas creadas a través del evento *onDisplayTasks *se muestren en color rojo en la Central de Tareas.

- Cambio en eventos con firma digital que generaban inconsistencias, por lo que era imposible mover la tarea. Se solucionó la inconsistencia realizando la eliminación de la firma digital para firmarla de nuevo.

- Inconsistencia al informar un valor para la columna de fecha de apertura de una tarea agregada a través del evento *onDisplayTasks* se corrigió para que el campo *startDateProcess* no *WorkflowTaskVO* permita que se informe un valor para esta columna.

- Se corrigió la interacción del *join*, para que la validación solo considere finalizados *joins* sin *threads* en espera.

- Se ajustó la inconsistencia en la transferencia de actividad utilizando la variable global hAPI en el mecanismo de asignación.

**ECM**

- Se corrigió la visualización de formularios en Mobile presentando de manera correcta los estándares de la plataforma y los ajustes realizados en el mensaje que aparece al desarrollar un formulario.

- Se realizaron ajustes en la acción de efectuar lo download de informe *birt*, ya que el archivo .zip generado no presentaba contenido. Para más información ingrese a [Informe](https://tdn.totvs.com/x/cBMCE) y [realice lo download de carpeta, documento e informe](https://tdn.totvs.com/x/McgGDg). 

- Se implementó el limitador de caracteres en los campos *input* y *textarea* para que no exceda el valor de 4000 caracteres en base de datos Oracle, haciendo que sea posible guardar los formularios.

- Se aplicó el ajuste ya que después de la actualización de la versión 1.5.13 para EP2, al exportar un nuevo formulario el mismo no se carga y los formularios ya publicados en fluig dejan de funcionar.

- Ajustes en el componente Zoom, ya que después de la actualización de la versión, no estaba devolviendo datos de *datasets* de formulario.

- Corrección del nuevo Zoom que enumeraba un registro menos de la cantidad total. 

- Se corrigió la situación en la paginación de la tabla, ya que al mostrar documentos en la pestaña Central de Tareas o al intentar abrir un documento a través de la tabla, el mismo no se abría.

- Se aplicó la corrección para que los enlaces de la Central de notificaciones se abran en el navegador predeterminado del usuario y no en la misma Central. 

- Se realizó la corrección en el Connect para que el upload de archivos funcione correctamente después de reiniciar la conexión de red.** ** 

- Se realizó el ajuste en la carpeta de sincronización de Connect, ya que mover archivos de una carpeta a otra o cambiarles el nombre hace que se borren.

- Se aplicó la corrección ya que al cambiar el nombre de archivos en la carpeta de sincronización de Connect, dichos archivos estaban duplicados.

****

**LMS**

- Ajustes en la visualización del ícono de notificaciones de actividades o eventos de aprendizaje y evaluaciones recibidas en la Central de notificaciones, ya que no se mostraban.

- Visualización del nombre completo de los alumnos en todos los informes de LMS para permitir diferenciarlos cuando tienen el mismo nombre y el mismo apellido, siendo solo los nombres intermedios diferentes, ya que antes solo se mostraba el primero y el último nombre. Por ejemplo: *John Edward Steel* y *John Smith Steel*.

- Ajustes en el permiso definido en el Panel de Control > Permisos > Aprendizaje – Cambio de *estado* de matrículas para mostrar solo el botón que permite cambiar el *estado* de matrículas al usuario cuando está habilitada, ya que también se mostraba el botón **Matricular usuarios** indebidamente.

- Se incluyó una barra de progreso en el recurso **Matricular usuarios** para permitir el seguimiento del progreso de las matrículas cuando el número de alumnos que se están matriculando es alto – cerca de 4.500 alumnos – evitando que el usuario tenga la impresión de que el recurso se detuvo o se produjo algún problema debido a la demora en mostrar el resultado final de la acción.

**Arquitectura**

- Corrección para permitir la conexión con el servidor fluig a través del *plugin* fluig Studio de entornos con autenticación integrada a fluig Identity.

- Se solucionó la situación en entornos que utilizan [autenticación integrada](https://tdn.totvs.com/pages/viewpage.action?pageId=162170863), donde solo se mostraba una página en blanco para usuarios cuyo registro en Active Directory no tenía completo el campo apellido.

- Ajuste en el procedimiento de generación de contraseña durante la creación de usuarios de fluig en fluig Identity a través de la opción [Enviar usuarios](https://tdn.totvs.com/pages/viewpage.action?pageId=104661517) para permitir el registro de usuarios que tengan nombres con más de 12 caracteres.

¡Esté atento!

Si el primer nombre del usuario tiene 13 caracteres o más, la contraseña se creará usando solo los 12 primeros caracteres del nombre + @123. Por ejemplo, si el nombre del usuario es Administrador, la contraseña generada será Administrado@123.

- Se implementó el agrupamiento de correos electrónicos para permitir la reutilización de conexiones con el servidor de correo electrónico. El uso de múltiples conexiones para enviar notificaciones de tareas atrasadas, por ejemplo, podría dar lugar a la negación por parte del servidor SMTP de Google.

- Inclusión de los usuarios de integración que se muestran en la lista de usuarios en el Panel de Control en el papel admin, debido a la necesidad del permiso de administración para llevar a cabo ciertas acciones.

Aviso

En entornos integrados a fluig Identity, los usuarios de integración incluidos en el papel admin no se convertirán en administradores del contexto de la empresa en fluig Identity.

- Corrección en el filtro responsable de la invalidación de sesiones OAuth para que dichas sesiones se cierren definitivamente, evitando inconsistencias cuando se realizan varias llamadas.

- Ajuste en el procedimiento de verificación de la versión, que impedía la actualización de entornos con alta disponibilidad, cuyo directorio *repository*/*apps* es compartido entre los nodos.

La [Guía de actualización fluig](https://tdn.totvs.com/pages/viewpage.action?pageId=271666186) se actualizó con información sobre la actualización de fluig en entornos Load Balance.

- La licencia del administrador registrado durante la creación de la empresa ya no será consumida por el servidor de licencias cuando la empresa se desactive.

Consulte la FAQ [ARQ 034 - ¿Se puede eliminar o desactivar una empresa en fluig?](https://tdn.totvs.com/pages/viewpage.action?pageId=240297057) Para obtener más información acerca de la desactivación de empresas en fluig.

- Corrección en el importador de datos históricos para que si no existe el archivo TXT o FAC para un determinado proceso/versión, se verifique la existencia de evento [beforeSendData](https://tdn.totvs.com/pages/viewpage.action?pageId=126717843) para el proceso/versión y se genere un archivo TXT/FAC para que los datos no se pierdan.

- Ajuste en la ventana de selección de *widgets* que aparece en la edición de las páginas, para que se pueda cambiar de tamaño correctamente cuando haya un número mayor de *widgets* personalizadas registradas.

**Social**

- Se aplicó la corrección en las conversaciones en grupo en fluig Messaging para garantizarles a los usuarios que activan la opción Salir de la conversación, que dicha acción se lleve a cabo con éxito.

- Se restauró la visualización de mensaje a través de fluig Messaging para Android en conversaciones en las que el usuario ha recibido imágenes enviadas a través de la aplicación *web*.

- Se ajustó la confirmación de lectura de los mensajes en fluig Messaging para iPhone/iPad para que el ícono con el número de mensajes no leídos se actualice correctamente.

- Corrección en el intercambio de artículos en comunidades. Debido a una inconsistencia, los artículos compartidos no se mostraban en la *timeline *de la Página de Inicio de los participantes.

- Ajuste en la visualización del ícono de documento compartido en la conversación, para que no se superponga al texto que se muestra en el globo de mensaje.

- Corrección en el *deploy* del componente Notificaciones SMS, ya que no era posible utilizarlo con la actualización anterior de la plataforma debido a una inconsistencia en el inicio del componente.

- Mejora de la validación de los campos de formularios creados en comunidades para impedir el uso de códigos iguales para diferentes cuestiones.

- Aumento del límite de caracteres en las [publicaciones](https://tdn.totvs.com/pages/viewpage.action?pageId=236430460), de 600 a 700 caracteres. Este cambio será válido para los textos publicados en la *timeline*, incluso para aquellos acompañados por imágenes, videos, artículos o documentos, y para comentarios agregados al [compartir](https://tdn.totvs.com/display/HOE/Compartir+-AP) una publicación.

Al mencionar un usuario en una publicación (utilizando @ + nombre de usuario), el contador de caracteres considera la cantidad de caracteres del *login* del usuario mencionado, además de los caracteres del nombre.

**WCM**

- Incluidos los códigos de las páginas/*widgets* en la pantalla de [Permisos](https://tdn.totvs.com/display/HOE/Permisos) para recursos que tengan el mismo nombre, lo que facilita su identificación. También se agregaron *enlaces* para las respectivas páginas/*widgets* para que el administrador conozca la ubicación de estos recursos en la plataforma.

- Corrección en la apertura, a través de la aplicación móvil, de enlaces a las páginas internas del fluig a las cuales se ingresa desde un *widget*Editor de contenido. La página se cargará en el mismo formato de la aplicación y no como un sitio *desktop.*


<!-- anchors: Plataforma|Actualización1.6-Arquitectura, Plataforma|Actualización1.6-BPM, Plataforma|Actualización1.6-ECM, Plataforma|Actualización1.6-LMS, Plataforma|Actualización1.6-Portales, Plataforma|Actualización1.6-Novedadesendocumentación, Plataforma|Actualización1.6-Correcciones -->
