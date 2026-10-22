---
title: "Plataforma | Actualización Crystal Lake (1.7.1)"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=600141540"
scraped_at: "2026-03-09T04:52:03.715Z"
depth: 3
anchors: 8
child_links: 31
---

# Plataforma | Actualización Crystal Lake (1.7.1)

![](/download/attachments/600141540/Crystal%20Lake.png?version=2&modificationDate=1614864536640&api=v2)

Descontinuación de Internet Explorer

De acuerdo con la [noticia divulgada anteriormente](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360055344913), informamos que el **01/03/2021** se dio por terminado el soporte a la plataforma TOTVS Fluig con el navegador **Internet Explorer**.

Sugerimos que los clientes que aún utilizan el navegador Internet Explorer, consulten la [Plataforma | Matriz de portabilidad](/display/fluigesp/Plataforma+%7C+Matriz+de+portabilidad) y adopten uno de los navegadores aprobados para acceder a la plataforma.

Vea a continuación las novedades de la actualización 1.7.1 de TOTVS Fluig Plataforma:

## Plataforma

---

**Descubra más sobre la gestión de permisos**Nuestros clientes lo pidieron y nosotros los atendimos... ¡Vea las novedades sobre los permisos de la plataforma!

**Una nueva experiencia de control de permisos**Diseñamos un layout completamente nuevo, con permisos estructurados en orden de menú y con todas las descripciones del recurso, para que pueda configurar los permisos mucho más fácil y rápido. Y también hay recursos adicionales, como la búsqueda en todos los permisos o en un tipo específico, filtrar por uno o más tipos.

**Permisos específicos de recursos en el Panel de control**Los administradores ahora pueden liberar cada recurso del panel de control individualmente, según sea necesario. El permiso para cada recurso se puede configurar por usuario específico, grupo o papel.

Consulte el paso a paso en la documentación de [Permisos](/pages/viewpage.action?pageId=236430760).

**Facilitamos la configuración de seguridad en su plataforma**

¿Sabe lo que es HTTPS? Según el sitio web Wikipedia, HTTPS es una implementación del protocolo HTTP en una capa adicional de seguridad que utiliza el protocolo SSL/TLS. Esta capa adicional permite que los datos se transmitan a través de una conexión cifrada y que se verifique la autenticidad del servidor y del cliente a través de certificados digitales.

![](/download/attachments/600141540/unnamed.png?version=1&modificationDate=1614178095663&api=v2)

**Seguridad configurada en unos pocos clics**La seguridad nunca es demasiado hoy en día, ¿no es verdad? Por este motivo, la configuración para utilizar el protocolo HTTPS dejó de ser un proceso complejo y manual. Ahora se hace en pantalla, en el Panel de Control del usuario administrador, de una forma mucho más rápida e intuitiva. 

![](/download/attachments/600141540/Facilitador%20https.gif?version=1&modificationDate=1614178095717&api=v2)

Haga que su entorno esté disponible con este protocolo y los usuarios tendrán toda la seguridad que el protocolo HTTPS puede ofrecer.

**Conozca más**

Consulte la documentación completa en [Configuración de HTTPS de plataforma](/display/fluigesp/Plataforma+%7C+Configurar+HTTPS) y [Configuración del sistema](/pages/viewpage.action?pageId=236430717).

**Personificación: más seguridad en la automatización de servicios**

Personificación es cuando una persona realiza acciones en nombre de otra. La plataforma tiene servicios (API, dataset, webservice) que permiten que el usuario de contexto sea diferente del usuario autenticado. Por ejemplo, el usuario tiene acceso a la API de workflow con el id "user1" y llama al método que mueve una solicitud de workflow. Sin embargo, este método tiene un parámetro que informa desde qué usuario se realizará el movimiento, en cuyo caso se puede pasar el id "user2", lo que permite que user1 pueda mover una solicitud que está con el user2. 
Este recurso es esencial para automatizar algunos procesos si tiene un usuario integrador que mueve automáticamente las solicitudes retrasadas. 

**Eso es muy bonito, pero... ¿cómo asegurarse de que esto no se convierta en una vulnerabilidad? **

¡Quédese tranquilo! Proporcionamos un nuevo tipo de recurso en el control de permisos del Panel de control: **Personificación de usuarios**. Solo usuarios con este permiso activado pueden realizar acciones con el ID de otro usuario.

![](/download/attachments/600141540/Personification.png?version=1&modificationDate=1614178095690&api=v2)

**Más información**

Consulte todos los servicios que cuentan con este recurso en la documentación técnica de Personificación.

## Documentos

---

**Ampliamos los recursos de la papelera de reciclaje**

**Nueva información y visualización personalizada**!En la papelera de reciclaje ya se presentaban todos los ítems en los que usted tiene permiso. Sin embargo, su administración era confusa, por la falta de información de cada ítem. Nos dimos cuenta de esto, y trajimos a esta pantalla mucha información relevante, tal como: tamaño ocupado, fecha de exclusión, publicador y autor, entre otra información. Además puede verificar el tamaño total que ocupan los ítems de la papelera. ¡Y lo mejor de todo, puede configurar la visualización de las columnas como lo desee!

- [Nuevo layout](#)
- [Calcular almacenaje](#)
- [Administrar columnas](#)

![](/download/attachments/600141540/Tela%20Lixeira.png?version=1&modificationDate=1614178061543&api=v2)

![](/download/attachments/243636051/Calcular%20armazenamento.gif?version=1&modificationDate=1610994591957&api=v2)

![](/download/attachments/243636051/Gerenciar%20colunas.png?version=1&modificationDate=1612370603437&api=v2)

**Limpieza periódica**¿Sus usuarios siempre eliminaban los archivos y carpetas de navegación de documentos y se olvidaban de eliminarlos de la papelera de reciclaje, ocupando espacio innecesario en el volumen de la empresa? ¡Eso ya no será un problema! Creamos una nueva tarea para que los ítems de la papelera se eliminen automáticamente, lo que se puede programar con la frecuencia que desee. 
Pero, ¿qué pasa si el usuario se arrepiente de la exclusión del documento? No se preocupe, se puede informar un período mínimo en el que los documentos deben permanecer en la papelera y, a continuación, se eliminan de forma permanente.

![](/download/attachments/600141540/Limpeza%20da%20lixeira.png?version=1&modificationDate=1614178061460&api=v2)

**¿La papelera está llena y no pudo encontrar un documento?**
¡Utilice las opciones de búsqueda que se agregaron! Los usuarios ahora pueden encontrar ítems específicos en la papelera por su código, por autor, por ítems eliminados en un período determinado, código de la carpeta principal, buscar por una descripción, palabra/término específico en su contenido, en resumen, ¡hay innumerables posibilidades!

![](/download/attachments/600141540/Filtrar%20registros%20lixeira.png?version=1&modificationDate=1614178061487&api=v2)

**Recurso adicional para los administradores de la empresa**
Para mejorar aún más la gestión, los administradores ahora pueden consultar a los usuarios que tienen ítems privados en la papelera de reciclaje. ¡Pero quédese tranquilo! El administrador permanece sin acceso al contenido del documento, solo puede consultar el tamaño ocupado por los ítems y eliminarlos si es necesario. 

![](/download/attachments/600141540/Documentos%20dos%20usu%C3%A1rios.png?version=1&modificationDate=1614178061513&api=v2)

¿Tiene alguna duda? Siga el paso a paso en la documentación de la [Papelera de reciclaje](/pages/viewpage.action?pageId=268570873).

**Aprobamos Microsoft® Office 2019**

¿Usa **Office 2019** para elaborar sus documentos? ¡Aproveche la novedad! En la versión Crystal Lake, los recursos de Edición de contenido (Webdav), Copia controlada de documentos y Actualización de propiedades de copia controlada están aprobados para esta versión de Office.

**Actualizamos el servidor de indexación**

En esta release el **servidor de indexación (Solr)**se actualizó a la **versión 8.7.0**. Esta actualización afecta directamente al recurso de búsqueda de la plataforma. Por este motivo, para que la búsqueda siga funcionando correctamente después de la actualización, debe realizar la reindexación completa (con la opción de volver a crear los índices) en el entorno. Este procedimiento simple evitará que el recurso presente inestabilidades, como resultados duplicados o documentos no encontrados. 

![](/download/attachments/600141540/solr.png?version=1&modificationDate=1614178097333&api=v2)

**Conozca más**

Consulte el procedimiento detallado en la documentación de [Indexación](/pages/viewpage.action?pageId=236430821). Obtenga más información sobre el recurso en las documentaciones de [Búsqueda](/pages/viewpage.action?pageId=236430309) y [Búsqueda de documentos](/pages/viewpage.action?pageId=236430944).

## Social

---

**Nuevo social Fluig mobile y TOTVS Fluig Plataforma – ¡una experiencia totalmente modernizada!**

En diciembre lanzamos el nuevo Social de Fluig mobile donde nos centramos principalmente en mejoras que ofrecen una experiencia de uso moderna.

Con un visual totalmente renovado y *clean*, el nuevo social de Fluig mobile trajo una nueva experiencia de navegación con fácil acceso a las publicaciones, intercambio de información, interacciones con otros usuarios, y principalmente, las publicaciones más ricas con el nuevo límite de hasta ¡10 000 caracteres por publicación!

La forma de hacer posts está más práctica porque fijamos la barra de correos, por lo que facilitamos la publicación de posts para que incluso después de ver muchas publicaciones e interacciones, esta acción siga siendo fácil y práctica.

Además, también trajimos un acceso rápido a sus comunidades más accedidas y a aquellas definidas como favoritas que tienen acceso privilegiado, ya que son las primeras en presentarse, además de la indicación de que es una comunidad favorita.

Al igual que en las comunidades, las conexiones también obtuvieron un acceso rápido, donde los usuarios favoritos tienen privilegios porque además de la indicación de ser favoritos, son los primeros que se muestran en al acceso rápido.

Y una de las novedades más solicitadas fue Anular solicitudes, que permite anular las solicitudes pendientes de aceptación, que se enviaron incorrectamente o que están esperando durante mucho tiempo la aceptación. Simplemente presione el botón Pendiente y confirme la acción. 

Y en respuesta a los pedidos, agregamos uno de los recursos más votados de la central colaborativa, ahora en la timeline de la aplicación móvil se pueden ver publicaciones con múltiples imágenes.

¡Si también tiene una sugerencia para enviarnos, no lo dude! ¡Envíe su sugerencia a nuestra [Central colaborativa](https://centraldeatendimento.totvs.com/hc/contributions/posts), para que podamos evolucionar cada vez más juntos!

        Your browser does not support the HTML5 video element

Ya TOTVS Fluig Plataforma también fue considerado con el nuevo Social. Aumentamos el límite de caracteres por publicación a 10 000, así como en la aplicación, lanzamos el recurso de Publicar en múltiples comunidades, optimizando la divulgación de información en la empresa porque llegará a más usuarios a la vez.

También modernizamos el *layout* de la timeline, de la tarjeta social del usuario, la barra de publicaciones, conexiones y actualizamos la guía de estilo haciendo que la navegación en la plataforma sea más fluida y agradable.

Y uno de los recursos más esperados en el Social de la plataforma: anular solicitudes. Hace posible revertir una solicitud no deseada, o que está por mucho tiempo esperando la aceptación, simplemente haciendo clic en el botón Anular solicitud y confirmando la acción. El recurso se puede usar para anular solicitudes de participación en comunidades y seguir usuarios.

- [Nuevo límite de caracteres](#)
- [Múltiples comunidades](#)
- [Anular solicitudes](#)

![](/download/attachments/600141540/Fazer%20publica%C3%A7%C3%A3o%20nova%20timeline.gif?version=1&modificationDate=1614178080470&api=v2)

![](/download/attachments/600141540/m%C3%BAltiplas%20comunidades.png?version=1&modificationDate=1614178095607&api=v2)

![](/download/attachments/600141540/Cancelar%20solicita%C3%A7%C3%B5es.PNG?version=1&modificationDate=1614178095633&api=v2)

Consulte más detalles en el [Release notes Fluig mobile](https://tdn.totvs.com/display/fluig/Release+Notes+Fluig+mobile#ReleaseNotesFluigmobile-Melhorias) y en las documentaciones [Fluig mobile](https://tdn.totvs.com/display/HF/Fluig+mobile).

## WCM

---

**Registro de variables para el plugin jQuery y jQuery Migrate**

En esta *release* queremos reforzar la mejora que lanzamos en la *release* 1.7.0 Lake. 

Lanzamos dos variables para el control del plugin de migración de jQuery.

Una de las variables será para habilitar o inhabilitar el plugin de migración y la otra para definir un modo entre el desarrollo y la producción.

Su principal valor está en los modos de uso del plugin entre desarrollo y producción.

En el modo Desarrollo, los mensajes se muestran en la consola del navegador que se usa para mostrar lo que está equivocado en su código y ayuda a encontrar problemas, pero deja la consola "contaminada", es decir sobrecargada.

Ya en el modo Producción, los mensajes en la consola del navegador no se muestran provocando una limpieza en la generación de los *logs,* pero se muestra un mensaje advirtiendo que el plugin está en uso y qué versión es.

Ambos no vienen registrados de forma predeterminada, y es necesario que el administrador de la empresa los registre si lo considera necesario.

Conozca más

Para saber cómo registrarlas, vaya a [Cómo registrar variables del plugin de migración de jQuery](https://tdn.totvs.com/x/I-Z5IQ).

## Documentación

- Recuerde los recursos que se liberaron en la plataforma [en septiembre](https://tdn.totvs.com/x/So8GIw#Actualizaciones(1.7.0)-200915). Fueron nuevas opciones de configuración de **marca de agua**, y nuevas funciones en el **visualizador interno**, lo que garantiza una experiencia aún más completa en la **gestión de los documentos** de su empresa. 
- La nueva pantalla de permisos quedó increíble, ¿no? Aproveche para configurar el **permiso en API, web services y datasets**, que fueron configuraciones lanzadas aún en la 1.7.0. Vea más detalles en el RN de las actualizaciones [Essential 1.7.0-200629](https://tdn.totvs.com/x/So8GIw#Actualizaciones(1.7.0)-200629) y [Essential 1.7.0-200714](https://tdn.totvs.com/x/So8GIw#Actualizaciones(1.7.0)-200714).
- ¿Utiliza la plataforma integrada con **TOTVS Identity**? Consulte también las novedades de este sistema accediendo a las [release notes de Identity](/pages/viewpage.action?pageId=269064433).

Una inmensa base de conocimiento a su disposición

Estamos evolucionando constantemente nuestra base de conocimiento en **Zendesk**. Cada vez que abra una llamada para atención TOTVS Fluig, realice la búsqueda para ver si hay un artículo con preguntas o problemas similares que se hayan asignado y resuelto. Las sugerencias de artículos se presentarán en el momento en que indique el tema de la solicitud.

De esta manera, puede hacer su trabajo con más rapidez. Acceda y explore [nuestra base de conocimientos](https://centraldeatendimento.fluig.com/hc/pt-br/categories/360001513691).

## Correcciones

---

- Se realizó la corrección en la API "/ecm/dataset/synchronizeDataset" para que presente el funcionamiento correcto.
- Se realizó la corrección para que se pueda sincronizar correctamente el dataset en el entorno 1.7.0 usado.
- Se realizó la corrección para que no haya lentitud al acceder datasets con un gran volumen de datos en las bases Oracle.
- Se realizó el ajuste para que sea posible crear un dataset simple utilizando el servicio AppDS correctamente permitiendo el registro del servicio.
- Se realizó el ajuste para permitir el registro de servicios para tokens extensos, donde el límite se incrementó a 2 000.
- Se realizó la corrección para que se pueda exportar informes BIRT correctamente al servidor Fluig.
- Se realizó la corrección para que sea posible registrar un servicio del tipo SOAP correctamente.
- Se realizó la corrección para que la importación de datos históricos se procese correctamente en Analytics.
- Se realizó la corrección que permite el *deploy* de componentes con archivos "js" que tengan menos de 3 caracteres.
- Se realizó el ajuste para que se pueda publicar un artículo que contiene una imagen de portada.
- Se realizó la corrección para que, al acceder a las rutinas para configurar Gamification, se carguen correctamente.
- Se realizó el ajuste que resuelve el retardo para crear páginas en la plataforma.
- Se realizó la corrección para que los modales de visualización de formularios y artículos se muestren correctamente permitiendo que el contenido se vea correctamente.
- Se realizó la corrección para que los usuarios que no pertenecen a una comunidad establecida como privada no puedan ver el contenido que se publica en ella.
- Se realizó la corrección para que, al borrar una carpeta en el ECM, ya no se muestre en la timeline de la plataforma.
- Se realizó la corrección para que el recurso "Eliminar solicitudes" del ítem de menú Procesos se muestre haciendo que la acción de clic sea visible de nuevo.
- Se realizó el ajuste para que se puedan seleccionar y ejecutar videos desde el ECM dentro de los widgets del Editor de contenido.
- Se realizó la corrección para que el widget Dirección web se muestre correctamente, no provocando más la inconsistencia de mostrarse en blanco.
- Se realizó el ajuste en la API de [Timeline](https://wcm.fluig.com/collaboration/swagger-ui/#/Timeline/getTimeline) para que la información del artículo se muestre en la timeline de la aplicación móvil*.*
- Se creó endpoint para que se pueda publicar en múltiples lugares como la timeline y en más de una comunidad a la vez.
- Se realizó la corrección en la consulta de solicitud para que los procesos que no tienen *State* se puedan visualizados correctamente.
- Se realizó el ajuste para que no haya duplicación de columnas y respuestas en el momento de exportación de forms para Excel.
- Se corrigió la falla de seguridad en el recurso de transferencia, de modo que el usuario que tiene acceso a la API pueda informar a los usuarios en el request y realizar la acción incluso si no tiene el permiso.
- Se realizó el ajuste en la API REST que crea los registros de formulario, de modo que devuelve correctamente los mensajes del validateForm.
- Se realizó el ajuste en la API REST que crea los registros de formulario, de modo que devuelve correctamente los mensajes del validateForm.
- Se realizó corrección para que al acceder a una solicitud directamente por la URL y mover la actividad de un proceso directamente desde el navegador IE 11, los botones de acción se carguen automáticamente.
- Se realizaron los ajustes para mostrar correctamente todos los documentos de una carpeta al seleccionarlos al incluir un archivo adjunto a un proceso
- Se corrigió la inconsistencia en el mecanismo de atribución por campo de formulario mediante el dataset de colleague, cuyo error se producía cuando se informaba en el campo de descripción, un campo distinto de colleagueId.
- Se corrigió la inconsistencia en el navegador de Internet Explorer 11 que no permitía cargar la consulta de solicitudes de un proceso.
- Se corrigió el flujo de información entre un proceso y un subproceso para que las condiciones de una actividad automática en el proceso principal se validen correctamente utilizando los datos del subproceso.
- Se realizó la corrección en el sustituto para que después de haber incluido un usuario sustituto e intente rehacer el proceso para modificarlo, se permita el cambio de usuario para que el envío de la solicitud ocurra normalmente.
- Se corrigieron los movimientos de solicitudes en bloque cuando hay campos relacionados con un formulario de tipo principal-secundario para que los campos se muestren correctamente.
- Se corrigió el acceso a los formularios creados por los Forms beta, después de actualizar a la versión 1.6.5 de la plataforma.
- Se realizó un ajuste en la aplicación Approval para IOS para corregir la visualización del historial de solicitudes.
- Se ajustó la actividad de servicio, para que, al completar un campo con *checkbox*, la actividad se cargue correctamente.
- Se corrigió la inconsistencia en los procesos que contienen formulario con texto enriquecido, de modo que cuando se usa texto enriquecido como filtro, este sea representado correctamente.
- Se realizó el ajuste en el formulario de un proceso en el modelador web, para que se vincule y guarde correctamente dentro del proceso.


<!-- anchors: Plataforma|ActualizaciónCrystalLake(1.7.1)-Plataforma, Plataforma|ActualizaciónCrystalLake(1.7.1)-Documentos, Lixeira, Plataforma|ActualizaciónCrystalLake(1.7.1)-Social, sample, Plataforma|ActualizaciónCrystalLake(1.7.1)-WCM, Plataforma|ActualizaciónCrystalLake(1.7.1)-Documentación, Plataforma|ActualizaciónCrystalLake(1.7.1)-Correcciones -->
