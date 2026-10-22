---
title: "Plataforma | Actualización Crystal Mist (1.8.2)"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=852897830"
scraped_at: "2026-03-09T04:15:52.738Z"
depth: 3
anchors: 15
child_links: 33
---

# Plataforma | Actualización Crystal Mist (1.8.2)

![](/download/attachments/852897830/Crystal_Mist_1.8.2_1660x490.png?version=1&modificationDate=1719404549550&api=v2)

Versión mínima para la actualización de la plataforma

El proceso de actualización para la versión 1.8.2 de Fluig requiere que la plataforma tenga la versión **1.7.1 o superior**. Si su entorno tiene una versión anterior, es necesario realizar el proceso de actualización a la versión 1.7.1 y, luego, actualizar Fluig a la versión 1.8.2.

Consulte algunos *enlaces* útiles:

- [Guía de instalación de la plataforma](https://tdn.totvs.com/x/bQYSCw)
- [Guía de actualización de la plataforma](https://tdn.totvs.com/x/lgYSCw) 
- [Instalación](https://tdn.totvs.com/x/QQYSCw) y [actualización](https://tdn.totvs.com/x/lgYSCw)

Consulte a continuación las novedades en la actualización 1.8.2 de la Plataforma TOTVS Fluig:

## Seguridad hasta en los mínimos detalles

---

Estamos atentos a las evoluciones tecnológicas que nos rodean y siempre comprometidos a suministrar el más alto nivel de seguridad, protección y rendimiento a la plataforma TOTVS Fluig, buscando la tranquilidad de nuestros clientes en el uso de los recursos en el día a día, así como en el tráfico de información de sus empresas.

Por ello, trabajamos en la prevención de ciberataques y en la explotación de vulnerabilidades, implementando códigos de protección y actualizando bibliotecas y servicios.

Consulte algunos de los recursos que han recibido un tratamiento especial de seguridad y prevención:

- Empresas;
- Permisos;
- Usuarios, grupos y papeles;
- Programador de tareas;
- Notificaciones;
- Documentos;
- Procesos;
- Comunidades;
- Recursos sociales.

Además, hemos realizado diversas correcciones e implementaciones de seguridad en las API e interfaces de la plataforma, evitando así la manipulación indebida de los datos.

La protección es una prioridad para nosotros, y estamos mejorando constantemente nuestra seguridad para garantizar que sus datos estén siempre protegidos.

¡Actualice su plataforma y garantice aún más seguridad para su empresa!

## Arquitectura

---

#### Servidor de indexación actualizado

Hoy en día todo cambia constantemente a nuestro alrededor, ¿no es así? ¡Especialmente las tecnologías!

Y como siempre nos preocupamos por mantener nuestra plataforma compatible con lo último del mercado, hemos actualizado el **Servidor de indexación (Solr)** – que es responsable de los recursos de búsqueda – para la **versión 9.4.1**.

Esta actualización también tiene como objetivo optimizar los índices para acelerar y hacer que la búsqueda sea más eficiente.

¡Importante!

Tras aplicar esta actualización a su entorno, deberá realizar una reindexación completa recreando el índice. Este procedimiento es esencial para evitar inestabilidades en la búsqueda, como resultados duplicados o resultados no encontrados.

**¿CÓMO HACERLO?**→ Para realizar la reindexación completa, vaya a **Panel de control** **→** **Parámetros técnicos** **→** **Indexación**, marque las opciones **Recrear el índice** y **Contenido** – como una forma de indexar documentos – e inicie el proceso. Encontrará información más detallada en [Indexación](/pages/viewpage.action?pageId=234455757).

**NOTA:**→ Si usa el servidor de indexación **dedicado** o en **alta disponibilidad**, siga el procedimiento de [actualización](https://tdn.totvs.com/pages/viewpage.action?pageId=271666186#Guiadeatualiza%C3%A7%C3%A3odaplataforma-Atualiza%C3%A7%C3%A3ocombalanceamentodecarga,altadisponibilidadeetoler%C3%A2ncia%C3%A0falha-Cluster) para estos escenarios antes de realizar la indexación completa. Puede encontrar información más detallada en [Servidor de indexación dedicado](/pages/viewpage.action?pageId=269425760) o [Servidor de indexación en alta disponibilidad](/pages/viewpage.action?pageId=257623206).

¡Sugerencia!

Acceda a las [Prácticas recomendadas de seguridad para su entorno](/pages/viewpage.action?pageId=611010249) y aprenda a hacer que su servidor de indexación sea más seguro.

Más información sobre los recursos de búsqueda de la plataforma en [Búsqueda](/pages/viewpage.action?pageId=236430309) y [Búsqueda de documentos](/pages/viewpage.action?pageId=236430944).

## BPM

---

#### Nuevo resumen de la Central de Tareas

Dé más eficiencia a la gestión activa de los procesos de su empresa. El resumen de la Central de Tareas de TOTVS Fluig ha sido rediseñado, con gráficos intuitivos que centralizan datos completos y detallados sobre actividades y tareas, incluyendo información sobre Solicitudes pedidas por usted y bajo su gestión, Tareas dentro del Plazo y Atrasadas, Tareas por grupo y por rol, Tareas en consenso, entre otras.

Así, tiene una visión más completa y asertiva para su toma de decisiones. Acceda a la documentación de la [Central de tareas - Resumen](https://tdn.totvs.com/x/3qMXDg) y [Widgets - Gráfico de tareas](https://tdn.totvs.com/x/Z4nYCg).

- [Central de tareas](#)
- [Widget Gráfico de tareas](#)
- [Modo detallado](#)
- [Modo resumido](#)

![](/download/attachments/852897830/central%20de%20tareas.png?version=1&modificationDate=1719595672900&api=v2)

![](/download/attachments/852897830/widget%20tareas.png?version=1&modificationDate=1719595178433&api=v2)

![](/download/attachments/852897830/detallado.png?version=2&modificationDate=1719595828930&api=v2)

![](/download/attachments/852897830/resumido%20%282%29.png?version=1&modificationDate=1719595868457&api=v2)

#### Recurso extra para la seguridad de las API

Con el fin de garantizar una mayor seguridad en las acciones realizadas dentro de la plataforma, hemos reforzado el concepto de Personificación, permitiendo así una mayor confiabilidad a la hora de manejar información de otros usuarios. 

Acceda a la documentación completa de [Personificación](https://tdn.totvs.com/x/85TUIQ) y manténgase al tanto de todas las novedades.

## Portales

---

#### ¡Los colores de la plataforma TOTVS Fluig han sido actualizados!

En esta actualización, hay un nuevo color predeterminado en la plataforma. Desde ahora, el color azul se aplica a los enlaces, a los íconos del menú lateral y a todo el tema. Se han actualizado tanto el tema Clásico, el Snowflake como el nuevo tema adaptable lanzado en la actualización [Mist-1.8.0](https://tdn.totvs.com/pages/viewpage.action?pageId=687750795#Plataforma|Actualizaci%C3%B3n1.8Mist-Portales).

Pero, ¡no se preocupe! Puede personalizar su tema de acuerdo con la necesidad visual de su empresa.

La pantalla de inicio de sesión también se ha actualizado para reflejar el nuevo color, incluido el botón Acceder. Además, el logotipo también ha recibido una actualización.

- [Nuevo color TOTVS Fluig](#)

![](/download/attachments/852897830/Nova%20cor%20plataforma%20ES.png?version=1&modificationDate=1719945172430&api=v2)

**¡Ítems de la Store se convirtió en Store!**

El recurso que antes conocía como Ítems de la Store ha pasado a llamarse Store: la página de soluciones de la plataforma TOTVS Fluig que ahora es más moderna e intuitiva. 

Hemos situado el campo de búsqueda en la parte superior de la página, para que resulte más destacado y práctico al buscar una solución. 

Se han creado nuevos filtros para ayudar a encontrar las soluciones de manera más eficaz.

- Desarrollador;
- Categorías;
- Tipo.

Organizamos las categorías dividiéndolas por:

- Novedades;
- Todas las soluciones;
- Flows.

De esta forma, el uso de cada categoría se vuelve más práctico, lo que le permite encontrar rápidamente las soluciones específicas de cada categoría.

Consulte más detalles del lanzamiento en [Actualización (1.8.1)](https://tdn.totvs.com/pages/viewpage.action?pageId=761497686#Atualiza%C3%A7%C3%B5es(1.8.1)-230912) y cómo usarla en [Plataforma | Store](https://tdn.totvs.com/x/rgckFw).

- [Store Fluig](#)

![](/download/attachments/852897830/GIF%20Store%20ES.gif?version=1&modificationDate=1719950301660&api=v2)

## Mobile

---

**Nuevo ECM - ¡Su aliado en la gestión de documentos más moderno que nunca!**

Reestructuramos toda la navegación de documentos, proporcionando una mayor organización, modernización y agilidad al acceder a sus documentos a través de My Fluig.

**Acceso rápido a todos los documentos**

La nueva gestión de documentos de My Fluig le permite encontrar rápidamente documentos importantes para su día a día. Los resultados se exhiben de manera organizada y ahora los documentos se identifican a través de los íconos de las extensiones. También disponen de una vista previa en los casos de las imágenes de videos.

**Cree carpetas con agilidad**

Cree carpetas con dos toques. Toque el botón **Crear carpeta**, cree un nombre y toque **Confirmar**. Listo, su carpeta ha sido creada con muy pocos toques.

**Visualice documentos**

Hemos modernizado la visualización de los documentos y ahora se pueden visualizar documentos, documentos externos, artículos e imágenes de manera práctica, y además, es posible ampliar o reducir para ver todos los detalles con claridad.

**Otras acciones en documentos mejorados**

- Comparta y guarde en su dispositivo;
- Comente y apoye fácilmente;
- Marque como favorito;
- Renombre y borre rápidamente.

- [Nuevo ECM My Fluig](#)

Conozca más

Vea todos los detalles de esta novedad en [My Fluig | ¿Qué hay de nuevo?](https://tdn.totvs.com/pages/viewpage.action?pageId=381049863#MyFluig%7COqueh%C3%A1denovo?-Mar%C3%A7o/24)

## WCM

---

**Bibliotecas actualizadas**

Con la iniciativa de mantener siempre actualizadas nuestras bibliotecas, en esta versión actualizamos algunas bibliotecas para garantizar más seguridad en la plataforma.

## Correcciones

---

- Corrección realizada para que cuando una actividad esté en paralelo, esta información también se refleje en Analytics.
- Corrección realizada para que los usuarios que posean estado bloqueado no puedan iniciar solicitudes en un proceso.
- Corrección realizada para corregir error al definir los grupos de seguridad del archivo, de manera que al cambiar la seguridad de la carpeta, los usuarios y grupos se incluyeran sin ninguna complicación.
- Ajuste realizado para aplicar la validación para identificar al usuario autenticado en la plataforma o al usuario administrador, haciendo que el envío de la URL del documento a través de API se realice correctamente al utilizar el flujo automático.
- Corrección realizada para que se respete el tamaño del índice en *Oracle*, limitado a 30 caracteres.
- Corrección realizada en la configuración de las actividades, para que no sea posible insertar tags y cambiar el color de la fuente.
- Corrección realizada al ejecutar el importador de datos históricos, para que los campos con valores fijos en formato de texto (String) puedan ser leídos por el importador y enviados a Analytics correctamente.
- Corrección realizada para que los campos de los formularios se enumeren correctamente en la pestaña “Descripción principal de los registros del formulario” en las propiedades del documento.
- Ajuste realizado para que sea posible incluir el permiso en la API de resultados del proceso.
- Corrección realizada en el menú de Descripción principal de los registros de un formulario, para que la descripción insertada se incluya correctamente.
- Corrección realizada para que sea posible cambiar el criterio de aprobación de la carpeta principal, sin que se muestre el mensaje de documento pendiente.
- Corrección realizada en la exportación de un formulario a Fluig, informando a la carpeta “Mis Documentos” como destino, para que se muestre un mensaje informativo al usuario de que no es posible agregar un formulario en una carpeta privada.
- Corrección realizada para que el botón “Enviar imagen” solo se muestre dentro de las subcarpetas.
- Ajuste realizado para que la creación de índices en la tabla de documentos reduzca el alto consumo de la CPU.
- Corrección realizada para que en situaciones en las que la generación de la lista maestra genere un error, el mensaje sea claro para el usuario, informando el motivo por el que no se ha generado.
- Corrección realizada en el componente de búsqueda de documentos, para que las carpetas configuradas en el desarrollo personalizado se muestren correctamente.
- Corrección realizada para que el checkbox de la impresora se elimine de las opciones de “Configuración del informe”, donde ahora es posible realizar la consulta sin presentar el error de la impresora.
- Corrección realizada a las reglas de formulario, para que al configurar la acción “Validar” y volver a la pantalla de las reglas ya registradas, ellas se mantengan correctamente.
- Corrección realizada para que al hacer clic en cualquier objeto dentro de un proceso que no tenga conexión con las reglas de formulario, el modal no se presente con peticiones innecesarias y que sea posible ver las reglas de formulario aunque el proceso no se haya guardado.
- Corrección realizada para que al publicar un archivo adjunto, el usuario pueda buscar el código y el nombre en todas las carpetas y subcarpetas en las que tenga permiso.
- Correcciones realizadas en el intérprete de código responsable de los logs adicionales de la central de diagnóstico.
- Corrección realizada en la visualización de documentos, para que al generar una nueva versión, sea posible visualizarla correctamente.
- Se corrigió el filtro por rol en la aplicación Approval para que las solicitudes se filtren y se exhiban correctamente de acuerdo con el rol seleccionado por el usuario.
- Corrección realizada en el programador de tareas para resolver problemas con el bloqueo en la cola.
- Corrección realizada para que el campo de usuarios ya no se exhiba al enviar a una actividad automática. Y si tiene un mecanismo que necesita informar un usuario, este se presentará correctamente.
- Corrección realizada para solucionar la vulnerabilidad en el paquete LMS.
- Ajuste realizado en el gráfico de tareas para completar en la central de tareas, para que el tablero que muestra las tareas no presente ninguna inconsistencia al mostrar el gráfico en la pantalla.
- Corrección realizada en fluig para que al acceder a la solicitud, se exhiban los campos con los valores y el movimiento se realice correctamente.
- Corrección realizada para que las solicitudes no se presenten por duplicado en la Central de tareas.
- Se han corregido las inconsistencias que no permitían usar la navegación de documentos.
- Corrección realizada para en la pestaña campos de filtro, todos los tipos sean exhibidos en el editor web de procesos, dentro de la plataforma Fluig.
- Corrección realizada para que al abrir un documento PDF protegido con contraseña, el modal se exhiba correctamente.
- Corrección realizada para eliminar automáticamente los archivos de las carpetas temporales generadas por Fluig en el sistema operativo.
- Corrección realizada en la Lista Maestra, para que el historial de aprobación en las subcarpetas se exhiba correctamente.
- Corrección realizada en el formulario, para que el botón “enviar” se bloquee mientras se carga el formulario.
- Ajuste realizado para que al cambiar el “código para servicio de datos” predefinido, se muestre correctamente el modificado en la búsqueda de la página Reglas del Formulario.
- Ajuste realizado para que al agregar o renombrar un archivo con tags <> en el nombre, fluig no lo interprete como HTML.
- Corrección realizada en el campo zoom para permitir consultas con un mayor número de caracteres.
- Corrección realizada para que se exhiban dos tarjetas de procesos a la vez al iniciar solicitudes.
- Ajuste realizado para que el cash se limpie después de que el campo seleccione usuarios y grupos, y sea necesario cambiar el componente del Style Guide.
- Corrección realizada para que el botón “Iniciar nueva solicitud” se coloque correctamente, independientemente de la resolución.
- Corrección realizada para solucionar la lentitud en la página de configuración de procesos, para que se realice una llamada desde el _alert_ para cada API.
- Corrección realizada en Mis Documentos, para que al acceder a una carpeta, sea posible realizar un arrastrar y soltar de documentos.
- Ajuste realizado en la pestaña “Seguridad” de las propiedades de documentos y carpetas, que permite la inserción de nuevos usuarios.
- Corrección actualizada en documentos, para que al copiar y pegar una carpeta con un archivo que había heredado seguridad, no se cargara e impidiera la inclusión de la carpeta.
- Corrección realizada en Documentos, para que en la pantalla de aprobación sea posible introducir una descripción correctamente.
- Corrección realizada para que la impresión de una copia controlada no presente ninguna inconsistencia.
- Corrección realizada para que al agregar el componente de anotación en la edición del proceso WEB y guardar, la información se guarde correctamente.
- Corrección realizada en el recurso de impresión de copia controlada.
- Corrección realizada para que, al visualizar el historial de aprobación de otras versiones/revisiones de un documento, los aprobadores se exhiban correctamente.
- Se corrigió la inconsistencia en los eventos de servicio, en el parámetro getActualThread, para que el valor actual del subproceso se muestre correctamente.
- Corrección realizada en TOTVS Fluig, para que al agregar un documento relacionado, sea posible seleccionar un registro de formulario según lo esperado.
- Ajuste realizado para mover correctamente la actividad de un proceso que tiene un gateway después de la actividad de inicio. 
- Corrección realizada para que al agregar un complemento a un archivo PDF y guardarlo, los cambios se apliquen correctamente.
- Mejora realizada para aumentar la seguridad de los contenidos XSS que se transmiten a través de URL en Fluig.
- Corrección realizada en los Web Services (WS): createDocument, createSimpleDocument, createSimpleDocumentPrivate, y también con la API v1 createDocument y ahora al ingresar una ruta en el nombre del archivo, se exhibirá un mensaje informando que el nombre es incorrecto.
- Corrección realizada para que no se permita eliminar un archivo de la papelera de otro usuario a través de la API interna.
- Corrección realizada en el formulario, para que acepte más caracteres en el campo.
- Corrección realizada para que, al utilizar la API createPrivateDocument e incluir la ruta del archivo, se solicite al usuario que utilice únicamente el nombre del archivo.
- Ajuste realizado en la visualización de diagramas, no permitiendo la visualización sin estar autenticado.
- Corrección realizada para garantizar una mayor seguridad, donde al intentar agregar una tag de inyección XSS en las propiedades del proceso, la tag no sea ejecutada.
- Corrección realizada para que en la requisición del *documentviewerurl* solo se devuelvan el ID, la versión y los archivos adjuntos, en lugar de la ruta de acceso completa del archivo.
- Corrección realizada al método updateDescription para cambiar un documento sin los permisos adecuados, donde se exhibe un mensaje al usuario, informando que no tiene los permisos necesarios.
- Corrección realizada en la apertura de un archivo SVG que contiene scripts, para que solo se vea la imagen.
- Corrección realizada para que Fluig permita la búsqueda de valores separados por espacios en los campos del formulario.
- Corrección realizada en el campo de búsqueda general de Fluig, para que al pegar el contenido de una tabla de Excel, no sea ejecutada la acción de pegar, solo sea pegado el texto en la función de búsqueda.
- Corrección realizada para que al editar un registro de formulario de una solicitud que ya se ha finalizado usando el updateCardData, se muestre un mensaje que indica que “El formulario está asociado a un proceso finalizado y no se puede editar”.
- Corrección realizada para que al ejecutar el job para comprimir las solicitudes finalizadas, si todas las versiones del formulario están desactivadas, se registre un mensaje en el log.
- Corrección realizada para que el evento _beforetasksave_ se ejecute normalmente en la transferencia de la solicitud.
- Corrección realizada en las aplicaciones My Approval y My Fluig para que, al acceder a la central de tareas de un usuario reemplazado, solo se exhiban las tareas relacionadas para las que se me asignan como sustituto.
- Ajuste realizado para que sea posible incluir un enlace a un documento de la plataforma en las instrucciones del proceso y las actividades utilizando [WD:coddoc].
- Corrección realizada para que al intentar imprimir un archivo que no soporta la impresión, el sistema presente el error informando al usuario, indicando que el archivo no es soportado para impresión.
- Corrección realizada en Mis Documentos, para que no presente error al intentar crear nuevas carpetas.
- Corrección realizada en fluig para que todos los intentos de ejecutar la actividad de servicio se enumeren en el historial.
- Ajuste realizado de respuesta de la página Solicitudes en resoluciones como tabletas y mobile.
- Corrección realizada para que al cambiar el color utilizado en la configuración del documento, la marca de agua se exhiba correctamente al descargar el documento.
- Corrección realizada en el componente documentview para corregir la inconsistencia en la visualización y permitir que ahora presente el registro de formulario para su visualización.
- Corrección realizada la Guía de estilo que permite el uso de tablas y tags complementarias dentro del componente popover.
- Corrección realizada en Fluig para que al intentar mover una tarea en el mobile, no se presente ninguna inconsistencia.
- Corrección realizda para que al habilitar la impresión de copia controlada para un documento que tenga variables en la información, esta se ejecute y el download se efectúe correctamente.
- Ajuste realizado para corregir la consulta de un proceso en el monitoreo de tareas, lo que permite que este se exhiba como se espera.
- Corrección realizada para que el cambio en el mecanismo de atribución se aplique correctamente después de la actualización del proceso. Y que al importar el XML a través de Web Service, el cambio se produzca correctamente.
- Corrección realizada en el GED, para que sea posible realizar el upload de un vídeo con más de 20 minutos.
- Corrección realizada al agregar un grupo en los permisos del proceso.
- Corrección realizada en la impresión de copia controlada de documentos enviados por el cliente, para que se impriman correctamente.
- Se corrigió el uso de más de una gateway en el proceso, para que el historial presente la información correctamente.
- Ajuste realizado en la configuración de un proceso vía Studio, para que sea posible configurar la actividad inicial con mecanismos por asociación.
- Corrección realizada en la versión Silver Mist de Fluig para que la lista maestra se genere correctamente.
- Ajuste realizado en el mensaje de error que generaba un NullPointerException (NPE) al mover una solicitud e informar la secuencia de subproceso incorrecta.
- Corrección realizada para que al iniciar una solicitud con el mismo usuario y acceder a la central de tareas, solo se exhiba una tarea.
- Corrección realizada en la central de diagnósticos, para que el uso de filtros personalizados traiga la información correctamente.
- Se corrigió el acceso a la pantalla de configuración de procesos para exhibir correctamente la lista de procesos.
- Corrección realizada en la central de tareas, para que la fecha de actualización de los documentos se exhiban correctamente.
- Corrección realizada en el movimiento de una solicitud en consenso.
- Corrección realizada en la exclusión de carpetas o archivos de formulario, para que al filtrarse por fecha, nombre o código, se exhiban correctamente.
- Se corrigió la visualización de los aprobadores cuando un documento está en edición, para que se use el addon.
- Corrección realizada para que al utilizar el servicio copyDocumentToUploadArea e informar el código de la carpeta en los parámetros, se muestre la ruta del archivo.
- Se corrigió la exhibición de widgets en la Central de Diagnóstico.
- Corrección realizada para evitar que el usuario cambie un documento para el que no tiene permiso.
- Se corrigió el acceso de usuario sustituto a la central de tareas, para que los movimientos en las tareas bajo mi gestión se realicen correctamente.
- Mejora realizada en el uso del servicio web _copyDocumentToUploadArea_ para copiar un archivo que no está en el volumen, y el mensaje del log muestra correctamente que la carpeta está vacía y que no se copiará ningún documento.
- Ajuste realizado para que el historial de una solicitud utilice el cash correctamente.
- Corrección realizada al copiar estructura de carpetas con archivos con nombres que contienen muchos caracteres.
- Corrección realizada para que después de la actualización a la versión 1.8.1 de Fluig, el LMS se exhiba correctamente.
- Se corrigió la inconsistencia donde ejecutar la indexación con 4 millones de registros, el proceso ocurre correctamente, procesando 5 mil registros a la vez.
- Actualización realizada en el plugin de Eclipse a la versión 1.8.2, para que la importación y exportación de procesos funcione correctamente.
- Se corrigió la inconsistencia al editar un proceso BPMN 2.0 por el editor de Fluig en la web, para que sea posible editar y visualizar correctamente.
- Corrección realizada para que al realizar la cancelación de una solicitud, la fecha de cancelación se presente correctamente.
- Corrección realizada en el formulario para que, al hacer clic en enviar, este se bloquee para su edición cada vez que la barra lateral del botón enviar esté abierto.
- Consulta aplicada de permisos de usuario para un documento específico.
- Corrección realizada en la búsqueda de un proceso en la pantalla de consulta de solicitudes.
- Ajuste realizado en la pantalla de consulta de solicitudes al cambiar el idioma.
- Aplicada modificación de decisión en tarea de consenso al acceder con un usuario sustituto.
- Ajuste realizado para que la API collaboration/api/v3/posts acepte todos los formatos de archivo adjuntos al realizar una publicación.
- Corrección realizada para que el contenido de noticias se muestre en la página de inicio cuando se utiliza el widget Novedades y Noticias.
- Se corrigió el componente Zoom para que los campos de búsqueda de los formularios de comunidades exhiban los datos correctamente.
- Corrección realizada para que sea posible agregar widgets en el layout Comunicativo con un usuario común que tenga permiso para editar la página.
- Corrección realizada para que cuando se realice una publicación la plataforma busque correctamente otras comunidades para replicar la publicación.
- Validación implementada que evita SQLinjections de tipo based time en las consultas de API de dataset.
- Corrección realizada para que sea posible crear correctamente un artículo en una comunidad, en la que se habilita la generación de thumbnail en el registro de la empresa.
- Corrección realizada para que el contenido de la pestaña de la comunidad se muestre correctamente al seleccionar un archivo para su publicación.
- Corrección realizada para que solo los usuarios con un rol de administrador puedan realizar llamadas a través de la API de consulta de servicios.
- Corrección realizada para que los campos de usuario y contraseña se presenten correctamente en el plugin Eclipse al registrar un servicio SOAP.
- Corrección realizada para que el layout Comunicativo reciba la correcta configuración de permisos en los widgets.
- Corrección realizada para hacer posible la sincronización de un dataset sin conexión.
- Se agregó el estatus “Finalizado” cuando se usa el componente de upload de la guía de estilo Fluig y se realizó ajuste en el área de upload para que esté disponible para la inclusión de nuevos archivos.
- Corrección realizada a los temas para que al crear páginas o comunidades, estas se abran correctamente.
- Corrección realizada para que los widgets se exhiban cuando se utiliza el nuevo tema.
- Corrección realizada para que sea posible buscar usuarios, grupos o roles al crear una página.
- Corrección realizada para que los permisos se muestren cuando se utiliza el layout comunicativo para crear páginas.
- Corrección realizada para que sea posible acceder a las propiedades del registro de formulario con archivo adjunto cuando se utiliza el kit de intranet.
- Corrección realizada en el campo zoom, para que después de borrar el campo, sea posible incluir nuevos registros.
- Ajuste realizado para que sea posible agregar videos en formato MP4 correctamente.
- Corrección realizada para que al utilizar caracteres especiales con codificación diferente en las imágenes, se normalicen con la misma codificación aceptada por la plataforma.
- Ajuste realizado para que al editar un artículo y publicarlo en la comunidad, el historial de visualizaciones y la fecha de creación se mantengan correctamente.
- Corrección realizada para garantizar el correcto funcionamiento de las páginas que usan el widget de búsqueda.
- Correcciones realizadas para garantizar que el componente Treeview mantenga su comportamiento esperado cuando se usa con la función de arrastrar y soltar. 
- Ajuste realizado para que la actualización entre versiones de la Plataforma Fluig se produzca correctamente, no provocando inconsistencias en esta actualización.
- Actualización realizada de las opciones de copia controlada en el archivo Word.
- Ajuste realizado para que las imágenes PNG se exhiban correctamente como thumbnail.


<!-- anchors: Plataforma|ActualizaciónCrystalMist(1.8.2)-Seguridadhastaenlosmínimosdetalles, Plataforma|ActualizaciónCrystalMist(1.8.2)-Arquitectura, Plataforma|ActualizaciónCrystalMist(1.8.2)-Servidordeindexaciónactualizado, Plataforma|ActualizaciónCrystalMist(1.8.2)-BPM, Plataforma|ActualizaciónCrystalMist(1.8.2)-NuevoresumendelaCentraldeTareas, detalhadoeresumido, Plataforma|ActualizaciónCrystalMist(1.8.2)-RecursoextraparalaseguridaddelasAPI, Plataforma|ActualizaciónCrystalMist(1.8.2)-Portales, Plataforma|ActualizaciónCrystalMist(1.8.2)-¡LoscoloresdelaplataformaTOTVSFluighansidoactualizados!, novacorplataforma, StoreFluig, Plataforma|ActualizaciónCrystalMist(1.8.2)-Mobile, sample, Plataforma|ActualizaciónCrystalMist(1.8.2)-WCM, Plataforma|ActualizaciónCrystalMist(1.8.2)-Correcciones -->
