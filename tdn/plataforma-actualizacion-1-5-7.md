---
title: "Plataforma | Actualización 1.5.7"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=234615730"
scraped_at: "2026-03-09T05:39:45.415Z"
depth: 4
anchors: 19
child_links: 42
---

# Plataforma | Actualización 1.5.7

Vea a continuación las novedades en la actualización 1.5.7 de fluig:

Atención

Si utiliza el****componente Edición colaborativa, Gamification, SMS**o**desarrolló un componente****utilizando la documentación de [Login único](https://tdn.totvs.com/pages/viewpage.action?pageId=185757267) o [Desarrollo de widgets y servicios del fluig](https://tdn.totvs.com/pages/viewpage.action?pageId=147818425), actualice al fluig 1.5.7 - Actualización anticipada #1 o superior.

## Identity

**Más seguridad con c*****aptcha***

Para garantizar más seguridad en su empresa, agregamos a esta nueva actualización de Identity el recurso que bloquea la automatización de formularios para las rutinas de autenticación y modificación de contraseña.

Para habilitar el recurso de *captcha *en la pantalla de autenticación, solo debe activar la opción “Habilitar seguridad por *captcha*” en las Configuraciones de la empresa, en la pestaña Seguridad.

Para restablecer la contraseña siempre es obligatorio informar el *captcha*, ya que los ataques pueden venir de otro contexto a un determinado *e-mail*. De esta manera, al informar el *e-mail* de la cuenta, es obligatorio informar el *captcha* para recibir el *e-mail* de restablecimiento de contraseña.

- [Habilitando captcha en la autenticación.](#)
- [Captcha en el restablecimiento de contraseña](#)

![](/download/attachments/234615730/identity-1.PNG?version=1&modificationDate=1459273849000&api=v2)

![](/download/attachments/234615730/identity-2.PNG?version=1&modificationDate=1459273893000&api=v2)

## BPM

**Consulte a los responsables en el proceso**

Muchas veces necesita saber por anticipado quién será el responsable en un proceso. 

Pensando en ello, y teniendo en cuenta las necesidades de nuestros clientes desde la inicialización del proceso, es posible consultar los responsables de las próximas actividades.

¡Así es, la herramienta de procesos de fluig está cada vez mejor!

Para saber quién es el responsable de una actividad solo debe hacer clic en **Detalles** en una solicitud y, luego, hacer clic en la actividad de la cual desea ver más detalles. Esto incluye tanto la inicialización como el movimiento del proceso. Si el responsable es un grupo o papel, solo debe hacer clic en el mismo para saber quiénes son las personas que pertenecen a ese grupo o papel.

- [Detalles de la actividad](#)
- [Miembros del grupo responsable](#)

![](/download/attachments/234615730/FLUIGINV-9560.PNG?version=1&modificationDate=1459272111000&api=v2)

![](/download/attachments/234615730/FLUIGINV-9560-2.PNG?version=1&modificationDate=1459272147000&api=v2)

**Sepa cuándo se inició y finalizó una solicitud**

Ahora es posible saber la fecha de inicio de una solicitud en la Central de Tareas - en la visualización de actividades - y también en la consulta de solicitudes, junto con la fecha fin cuando la solicitud está finalizada o anulada.

- [Lista de solicitudes](#)
- [Consulta de solicitudes](#)

 ![](/download/attachments/234615730/Listagem%20de%20solicita%C3%A7%C3%A3o.PNG?version=1&modificationDate=1459274026000&api=v2)

![](/download/attachments/234615730/Processos%20abertos.PNG?version=1&modificationDate=1459274442000&api=v2)

![](/download/attachments/234615730/Processos%20finalizados.PNG?version=1&modificationDate=1459274468000&api=v2)

![](/download/attachments/234615730/Processos%20cancelados.PNG?version=1&modificationDate=1459274489000&api=v2)

**Mueva múltiples solicitudes con confirmación de contraseña en una sola acción**

Ahora se pueden mover múltiples solicitudes que estén en actividades que requieren confirmación de contraseña.

Autentíquese en fluig, acceda a Central de tareas > Tareas por concluir > seleccione las solicitudes que requieren contraseña y que desea mover y, en el menú superior de la tabla, active la opción Mover en bloque, ¡y saque provecho de esta ventaja!

![](/download/attachments/234615730/FLUIGINV-9661.JPG?version=1&modificationDate=1459446306000&api=v2)

**Nuevos métodos de protección de campos de formulario**

Creamos nuevos métodos que permiten proteger los campos deshabilitados mediante *displayFields* en formularios.

Al proteger un campo deshabilitado, no se alterará su valor en el registro de formulario. Para tal fin, informe el valor “*true”* para el parámetro “*protect*” del método *setEnabled.*

También se puede utilizar el método *setEnhancedSecurityHiddenInputs* que, cuando se define como el valor “*true”*, todos los campos deshabilitados mediante el método *setEnabled* serán protegidos y sus valores no serán guardados en el registro de formulario.

Más detalles

Vea más detalles en [Desarrollo de formularios](https://tdn.totvs.com/pages/viewpage.action?pageId=75270483#DesenvolvimentodeFormulários-FormController).

## Social

**Modifique el nombre y la imagen de las conversaciones en grupo siempre que lo desee**

Ahora Messaging en la Web permite modificar la imagen y el nombre de las conversaciones en grupo.

Es el trabajo de fluig para que siempre tenga la misma experiencia, tanto en la Web como en dispositivos móviles. Muy bueno, ¿no?

- [Modificar imagen del grupo](#)
- [Modificar nombre del grupo](#)
- [Resultado](#)

![](/download/attachments/234615730/alterar%20imagem.png?version=1&modificationDate=1459278872000&api=v2)

![](/download/attachments/234615730/Alterar%20nome%20da%20conversa.png?version=1&modificationDate=1459279075000&api=v2)

  ![](/download/attachments/234615730/Resultado.png?version=1&modificationDate=1459279324000&api=v2)

****

**Desactive las notificaciones de una conversación**

Ahora puede desactivar las notificaciones *push* y en el área de trabajo de una conversación individual o en grupo siempre que lo desee. Seguirá recibiendo los mensajes enviados, pero no recibirá notificación cuando se reciben los mensajes, tanto en la Web como en Mobile.

![](/download/attachments/234615730/Parar%20de%20notificar.png?version=1&modificationDate=1459279652000&api=v2)

**Conversación y reunión vinculadas en Messaging**

Cuando inicia una reunión a partir de un grupo de conversación en Messaging, la reunión y la conversación ahora están vinculadas una a otra. En la conversación, se puede visualizar la información de la reunión, entrar en la reunión y, también, visualizar la grabación de la reunión después de que finalice.

- [Conversación y reunión vinculadas](#)
- [Información de la reunión en la conversación](#)
- [Reunión finalizada](#)
- [Grabación de la reunión](#)

![](/download/attachments/234615730/Iniciar%20uma%20reuni%C3%A3o.PNG?version=1&modificationDate=1459280524000&api=v2)

  ![](/download/attachments/234615730/Informa%C3%A7%C3%B5es%20da%20reuni%C3%A3o%20na%20conversa.PNG?version=1&modificationDate=1459280841000&api=v2)

![](/download/attachments/234615730/Reuni%C3%A3o%20encerrada.PNG?version=1&modificationDate=1459280981000&api=v2)

![](/download/attachments/234615730/Grava%C3%A7%C3%A3o%20da%20reuni%C3%A3o.PNG?version=1&modificationDate=1459281130000&api=v2)

## WCM

**¿Necesita ayuda con los*****widgets*****?**

Quédese tranquilo. Ahora los *widgets* Consulta rápida, Acceso centralizado y Analytics tienen un ícono de ayuda en su encabezado. Siempre que lo necesite, solo debe hacer clic en el ícono y podrá contar con toda la estructura de ayuda y documentación de uso de fluig para despejar sus dudas.

- [Consulta rápida](#)
- [Analytics](#)
- [Acceso centralizado](#)

![](/download/attachments/234615730/FLUIGINV-8204.PNG?version=1&modificationDate=1459441736000&api=v2)

![](/download/attachments/234615730/FLUIGINV-8204-2.png?version=1&modificationDate=1459441757000&api=v2)

![](/download/attachments/234615730/FLUIGINV-8204-3.png?version=1&modificationDate=1459441775000&api=v2)

## Mobile

**Acceda al contenido adicional de una comunidad de manera fácil y rápida**

Antes ponía en su comunidad varios *widgets* que daban acceso a más información sobre lo que estaba sucediendo en la comunidad.

En esta nueva actualización de la App de fluig puede acceder a los gráficos de indicadores de un proyecto (utilizando fluig Analytics), a la lista de cumpleaños (del Kit Intranet) o a cualquier otro contenido disponible mediante *widgets*.

Para acceder a los *widgets* de su comunidad, justo antes de las publicaciones verá una opción "Visualizar contenido adicional", al igual que en cualquier lugar de la comunidad accediendo al menú lateral para visualizar el "Contenido adicional".

No pierda tiempo, agregue nuevos recursos a sus comunidades en fluig Mobile.

 ![](/download/attachments/234615730/FLUIGINV-10875.png?version=2&modificationDate=1459443351000&api=v2)![](/download/attachments/234615730/FLUIGINV-10875-3.png?version=2&modificationDate=1459443353000&api=v2)![](/download/attachments/234615730/FLUIGINV-10875-2.png?version=2&modificationDate=1459443352000&api=v2)

**¡Messaging mucho más rápido!**

Su productividad aumentará aun más, ya que Messaging tiene un mejor desempeño. ¡Hicimos que la aplicación sea un 75% más rápida! Excelente noticia, ¿verdad? ¡Actualice a la versión 1.5.5.6 de Android y 1.5.48 de iOS y compruébelo!

![](/download/attachments/234615730/FLUIGINV-10883.png?version=1&modificationDate=1459439930000&api=v2)

**Trabaje con XMLRPC de manera única en Web y en Mobile**

¡Ya que tenemos un formulario único, nada mejor que también tener un XMLRPC único!

Ahora puede desarrollar su formulario utilizando el XMLRPC único, es decir, el esfuerzo para desarrollar para Mobile y Web es el mismo. Fantástico, ¿no?

Manténgase informado

Obtenga más información en [Desarrollo de formulario Mobile](https://tdn.totvs.com/pages/viewpage.action?pageId=146181573#DesenvolvimentodeformulárioMobile-ConsumodeDatasetsviaxmlRPC).

**Modifique la pantalla de inicio de fluig Mobile según sus necesidades**

Sabemos que cada aplicación de fluig es diferente en cada empresa. Pensando en ello, ahora tiene más opciones para configurar su pantalla de inicio en Mobile.

Puede configurar su pantalla de inicio con: 

- Central de Tareas
- Pantalla de inicialización de procesos;
- Social;
- Documentos;
- Comunidad específica;
- Página Específica.

De este modo, puede poner en la pantalla de inicio de la App una página con la agenda de eventos de la empresa, esa comunidad que está super ocupada o todos los documentos a los que más acceden los usuarios en el celular.

Observación

Si no configuró esta opción y en su *Home* hay *widgets* para Mobile, entonces la *Home* pasará a ser la pantalla de inicio de la aplicación. De lo contrario, queda igual que siempre, abriendo la Central de Tareas como pantalla de inicio en su aplicación fluig Mobile.

Más detalles

Obtenga más detalles en [Personalización de la pantalla de inicio de fluig Mobile](https://tdn.totvs.com/x/DJHbCw).

![](/download/attachments/234615730/FLUIGINV-10904.png?version=1&modificationDate=1459440008000&api=v2)

![](/download/attachments/234615730/FLUIGINV-10904-2.png?version=1&modificationDate=1459440045000&api=v2)

**Recuperación de contraseña en fluig Mobile**

¿Olvidó su contraseña y no tiene más que un dispositivo móvil en la mano? No se preocupe, ahora puede recuperar su acceso a fluig cuando hay integración activa con Identity de fluig Mobile.

![](/download/attachments/234615730/FLUIGINV-12571.png?version=1&modificationDate=1459440087000&api=v2)

## Arquitectura 

**Punto de entrada para modificar la exhibición de páginas en fluig**

Crear un punto de entrada para modificar el comportamiento para la exhibición de páginas en fluig.

Los puntos disponibles son:

- Insertar contenido inmediatamente antes de cerrar la etiqueta <head> de la página que se mostrará;
- Insertar contenido inmediatamente antes de cerrar la etiqueta <body> de la página que se mostrará;

Cuando este recurso está activo, fluig muestra uno de los dos siguientes mensajes en su *log*:

- custompagehead.ftl is enabled;
- custompage.ftl is enabled.

El mensaje que se mostrará está condicionado por el uso del código de la empresa y no por el nombre del archivo que se utiliza para la personalización.

Más información

Obtenga más detalles en [Personalización de páginas](https://tdn.totvs.com/x/woDgDQ).

## LMS

**Cálculo del puntaje de preguntas objetivas revisado**

Revisamos el cálculo del puntaje de las preguntas objetivas cuando se asignan valores para cada una de sus alternativas.

¡Sugerencia!

Comprenda el cálculo del puntaje de una pregunta objetiva.

Cuando se registran varias alternativas con valores para cada una de ellas, el puntaje final de la pregunta variará de 0 a 1, dependiendo del valor de la alternativa seleccionada. La alternativa con mayor valor representa el 100% de la pregunta (alternativa de referencia) y las otras asumen un porcentaje diferente, según la alternativa de referencia.

**Ejemplo:** si una pregunta objetiva tiene cuatro alternativas y sus respectivos valores son los siguientes:

- A1 – 10;
- A2 – 5;
- A3 – 4;
- A4 – 0.

La mayor alternativa es la alternativa A1, porque tiene el valor más grande. Si se selecciona la alternativa A2, entonces el alumno recibirá 0.5 (50%) de puntaje en la pregunta. Si selecciona la alternativa A3, recibirá 0.4, y si selecciona la A4, tendrá un puntaje 0 en la pregunta.

La única manera de responder la pregunta por completo es elegir la alternativa A1.

## fluig Studio 

**Confirmación de contraseña del servidor al exportar proceso**

Ahora se puede solicitar confirmación de contraseña para el servidor al exportar un proceso en fluig Studio. Esta confirmación tiene como objetivo garantizar, por ejemplo, que una exportación que debería realizarse para un entorno de pruebas no se envíe a un entorno de producción por error, ya que fluig Studio sugiere el mismo servidor desde el que se llevó a cabo la importación previa.

- [Opção para solicitar ou não a confirmação de senha](#)
- [Confirmação de senha na exportação](#)

![](/download/attachments/234615730/es-config.png?version=1&modificationDate=1459447006000&api=v2)

![](/download/attachments/234615730/es-use.png?version=1&modificationDate=1459447023000&api=v2)

## Novedades en documentación 

- ##  Vea la documentación Desarrollo de formularios actualizada.

- ##  Otras documentaciones actualizadas:
[Personalización de todas las páginas de la plataforma](https://tdn.totvs.com/x/woDgDQ)
- [Guía de Uso fluig - Mobile](https://tdn.totvs.com/x/EAtvBg)
- Utilizando fluig Messaging
- [Personalización de la pantalla inicial de fluig Mobile](https://tdn.totvs.com/x/DJHbCw)
- [Widgets de Experiencia de Uso](https://tdn.totvs.com/x/UADvC)
- [Widget Acceso centralizado](https://tdn.totvs.com/x/G-xbDQ)
- [Widget Analytics](https://tdn.totvs.com/x/IPxbDQ)

## Correcciones

En esta sección listamos algunos *bugs* que eliminamos en esta actualización que garantizan que todo funcione sin problemas en su plataforma.

- Exhibición de la lista de documentos de una comunidad.
- Inclusión de archivo como adjunto en un proceso *workflow*.
- Cierre de una formación de la cual el post-prueba tiene pregunta descriptiva.
- Obtención del código de proceso a partir del método *getValue("WKDef")*cuando contiene caracteres especiales o acentuación y se utiliza el banco de datos Oracle.
- Anulación de solicitudes por parte del usuario gestor – a partir de la pantalla de consulta de solicitudes – cuando éste contiene letras mayúsculas en su matrícula.
- Ordenamiento de usuarios por nombre en la gestión de matrículas de aprendizaje de LMS.
- Transferencia de solicitud por parte del gestor del proceso cuando ya fue asumida por otro usuario.
- Traducción a los idiomas inglés y español del proceso AdHoc, de la carpeta Mis documentos, botones de la pestaña Adjuntos del movimiento de solicitudes y del filtro Acciones pendientes.
- Retorno del método *getChildrenIndexes* cuando se utiliza el banco de datos Oracle.
- Acceso a la última versión de un formulario que fue modificado en la Web por el proceso al que está relacionado.
- Ejecución del evento *displayFields* cuando el formulario de proceso contiene alguna regla de permiso.
- Replicación de propiedades heredadas de una carpeta que se copia y pega en otro lugar.
- Aprobación de una nueva versión de un documento por un usuario común después de que ha aprobado la primera versión.
- Exhibición de los grupos en marcha del menú Aprendizaje, facilitando la lectura y la identificación de cada grupo.
- Inicialización de solicitudes que poseen un proceso AdHoc como actividad inicial.
- Anulación de las preguntas desde la pestaña de estadísticas de la evaluación.
- Anulación de las preguntas desde la pestaña de estadísticas de la evaluación.
- Uso del mismo adjunto de la solicitud anterior al abrir una nueva solicitud a partir del botón Iniciar nuevas solicitudes, localizado en el mensaje de confirmación de apertura que permite iniciar otras solicitudes con los datos de la anterior.
- Direccionamiento del *enlace* de acceso a un ítem de aprendizaje a partir de la Central de Tareas.
- Exhibición de barra de desplazamiento – cuando sea necesario – en la página que lista los Webservices de fluig - [seufluig]/services.
- Grabación de la respuesta anterior al alternar entre las preguntas de una evaluación que contiene preguntas de los tipos objetiva y descriptiva.
- Exportación de formulario para carpetas que posean el valor cero como propiedad del documento en su registro.
- Cierre de la visualización de un contenido de texto desde la opción Cerrar visualización en un ítem de aprendizaje.
- Importación de dos *datasets*iguales que pertenecen a formularios diferentes en componentes diferentes.
- Exhibición del mensaje de confirmación de que el servidor está actualizado cuando el administrador se identifica en la plataforma.
- Creación de usuarios desde la API Pública cuando el recurso Control de cuotas está activo.
- Exhibición de usuarios activos en los filtros de coordinadores y responsables para grupos y materias.
- Definición de días para vencimiento de documentos publicados por *drag and drop* en la navegación de documentos.
- Búsqueda de adjuntos de una solicitud sin distinguir entre letras mayúsculas y minúsculas.
- Exhibición de las fechas de matrícula y finalización en el informe Matrículas por ruta y formación.
- Retorno de un documento que fue reprobado para publicar o efectuar los ajustes necesarios.
- Exhibición de tareas de aprendizaje como pendientes incluso después de ajustar el puntaje del alumno.
- Acceso a los grupos después de incluir alumnos a través de la API Pública.
- Exhibición de las tareas de aprendizaje para el alumno al matricularlo en grupos que poseen ítems con puntaje manual.
- Exhibición de las opciones disponibles en Acciones del documento al visualizar un documento en PDF sin utilizar el visor interno en el navegador Internet Explorer.
- Grabación de la propiedad “¿Notificar?” - presente en la pestaña Información General - de documentos publicados en la navegación de documentos.
- Exhibición en negrita de los ítems de temas de un grupo en el que el alumno está matriculado que aun no fueron visualizados.
- Exhibición del botón Ver detalles, en los ítems de aprendizaje de grupos de la central de tareas, solo para los usuarios que poseen permiso para visualizar más detalles del catálogo de materias y grupos.
- Visualización de registros de formulario publicados en la navegación de documentos creados a partir de un *widget* que llama el servicio del formulario.
- Uso de dos *widgets*Acceso centralizado en una misma página.
- Importación de proceso *workflow* cuando posee un mecanismo de atribución para usuario.
- Exhibición del horario de movimiento de solicitudes en el historial cuando se utiliza el banco de datos Oracle.
- Envío de *e-mail* de notificación al solicitante en la actividad final de una solicitud cuando la actividad anterior es de tipo Automática.
- Exhibición del *enlace* en el número y en la descripción de la solicitud subrayando la pantalla de consulta de solicitudes.
- Exhibición del ícono para diferenciar las preguntas correctas y equivocadas al visualizar el desempeño en cada pregunta de una evaluación.
- Búsqueda de datos en *widgets* con *datasets*que utilizan más de un campo para filtrar los datos.
- Exhibición de los datos de *zoom* externo de formulario al filtrar por grupo de usuarios cuando el nombre del grupo posee caracteres especiales.
- Movimiento de solicitud después de completar su formulario y enviar a la próxima actividad tras la exhibición de un mensaje de validación.
- Exhibición de mensaje de tipo *Toast* al mover una solicitud que posee validaciones que presentan este tipo de mensaje.
- Protección de campos que se deshabilitan por medio de eventos de formulario.
- Exhibición de propiedades personalizadas que fueron registradas y definidas para ser mostradas en todos los documentos al visualizarlos.
- Movimiento de solicitud que contiene adjunto incluido por *upload* tras mostrar un mensaje de validación.
- Importación de procesos en fluig Studio que poseen actividades que no tienen la propiedad *stateName* en el XML de definición del proceso.
- Acceso de un *dataset* a un formulario en el momento en el que el formulario está siendo guardado.
- Uso del complemento de calendario en formularios cuando se utiliza el navegador Mozilla Firefox.
- Envío de notas de evaluaciones de fluig a TOTVS RM cuando hay integración con Identity activa.
- Exhibición de mensajes de seguimiento de eventos durante el movimiento de solicitudes.
- Visualización de procesos que contienen acentuación en su código a partir del *enlace* creado para el mismo en el navegador Internet Explorer.
- Creación de grupo y la materia cuando se define para crear también la comunidad correspondiente.
- Edición de contenidos que tienen la opción "convertir el contenido de uso privado para el usuario propietario" analizada solo por su dueño y el administrador de la empresa.
- Exhibición de grupos cerrados en la tabla de responsables del área de inicio de las actividades de aprendizaje.
- Ordenamiento de las solicitudes por la columna Plazo en la Central de Tareas.
- Movimiento de solicitudes después de que una actividad que posee mecanismo de atribución por campo de formulario sea movida por un flujo automático del programador de tareas y movimiento de tareas y por flujo automático de forma independiente.
- Permiso para cortar carpetas de la raíz de la navegación de documentos para usuarios con perfil de administrador.
- Acceso a los ítems del menú de Aprendizaje al utilizar el navegador Internet Explorer.
- Edición de formulario de proceso para inclusión de un campo de tipo caja de texto.
- Registro del movimiento de una solicitud en su historial cuando la misma está pendiente para un grupo o rol y es movida por el gestor del proceso.
- Visualización de la política de uso desde el Panel de Control después de que sea excluida de la carpeta de navegación de documentos en la que estaba publicada.
- Modificación de la configuración del servidor de fluig en Connect cuando en el servidor configurado anteriormente su uso se ha deshabilitado.
- Eliminada la opción de *download* múltiple para carpetas que están en la raíz de la navegación de documentos, ya que esta acción no está permitida.
- Ajuste en el registro de grupos para no permitir que los días de validez de las matrículas sobrepasen la fecha final definida para el grupo.
- Configuración de fluig para enviar *e-mails* cuando se utiliza un servidor para SMTP y otro para POP3.¡Atención! Si hay alguna divergencia en el envío de *e-mails* tras esta actualización, verifique la configuración para SMTP y para POP3 en el archivo “standalone.xml”. Si utiliza **el mismo** servidor para los dos protocolos, en las configuraciones es necesario informarlo para cada protocolo.Puede obtener más detalles en [Configuración de envío de *e-mail*](https://tdn.totvs.com/x/MmoSCw).

- Exhibición del *timeline* de una comunidad que contiene el carácter “**:**” (dos puntos) en su nombre.
- Tiempo de exhibición de materias y grupos cuando hay una gran cantidad de materias (más de 100) en una misma carpeta del catálogo.
- Visualización de actividades de un proceso en fluig Mobile se diferencia de las mismas actividades cuando son visualizadas en un navegador.
- Ordenamiento alfabético en la búsqueda de responsables para la próxima actividad al mover una solicitud.
- Se modificó el servicio de autenticación de Identity para que haya una dependencia de sincronización entre autenticación e indexación de datos, lo que asegura que, incluso si se produce una indisponibilidad en el servicio de indexación, experiencias de uso u otros, no habrá impacto en la autenticación de usuarios.
- Exhibición de los cumpleaños del día en el *widget* Cumpleaños del Kit Intranet cuando hay integración con TOTVS RM al utilizar el navegador Internet Explorer.
- Generación del informe de formularios de comunidades manteniendo el mismo orden de exhibición de las preguntas al responder el formulario.Observación Se mantendrá el orden de las preguntas de la primera versión del formulario.

- Exhibición de archivos que fueron adjuntados y excluidos al realizar una búsqueda en la pestaña Adjuntos de una solicitud que está siendo movida.
- Movimiento de solicitud abierta al activar la opción “Iniciar nueva solicitud”, que se presenta en la confirmación de apertura de la solicitud anterior.
- Exhibición de los nombres de las actividades de un proceso al consultar la pestaña Complementos de una solicitud.
- Edición del campo “Aprovisionamiento *Just in time*” en la pestaña Autenticación del registro de empresas.
- Edición en bloque de registros de formularios publicados en la navegación de documentos.
- Compartir publicación del *timeline* que tiene comillas simples en su contenido.
- Contenido del mensaje que se muestra al eliminar una nube de relación que contiene usuarios asociados a la misma.
- Anular matrícula de un alumno en la ruta a partir de la gestión de matrículas.
- Consulta de *datasets* de formulario desarrollados sobre la plataforma cuando se utiliza *zoom*.
- Renderización de formulario cuando un campo reciba un *string* utilizando hAPI.setValue() que representa la definición de una tabla HTML en la que en una de las columnas exista "on" al agregar el contenido del campo como “inner html” de algún elemento como un “span” o “div”.
- Performance en el catálogo de materias y grupos al utilizar la API para crear un grupo.
- Mejoras de desempeño al incluir un ítem de tema para un grupo en el entorno de aprendizaje.
- Exhibición del ícono de cargar para indicar que la exhibición de los grupos o capacitaciones está en marcha en la ventana inicial del entorno de aprendizaje.
- Posibilidad de seleccionar el número de registros para visualizar en la pantalla Puntuación manual al acceder a un grupo como responsable.


<!-- anchors: Plataforma|Actualización1.5.7-Identity, samples, Plataforma|Actualización1.5.7-BPM, samples, samples, Plataforma|Actualización1.5.7-Social, samples, samples, Plataforma|Actualización1.5.7-WCM, samples, Plataforma|Actualización1.5.7-Mobile, Plataforma|Actualización1.5.7-Arquitectura, Plataforma|Actualización1.5.7-LMS, Plataforma|Actualización1.5.7-fluigStudio, samples, Plataforma|Actualización1.5.7-Novedadesendocumentación, Plataforma|Actualización1.5.7-VealadocumentaciónDesarrollodeformulariosactualizada., Plataforma|Actualización1.5.7-Otrasdocumentacionesactualizadas:, Plataforma|Actualización1.5.7-Correcciones -->
