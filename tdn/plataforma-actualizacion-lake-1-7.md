---
title: "Plataforma | Actualización Lake (1.7)"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=550327283"
scraped_at: "2026-03-09T05:15:41.189Z"
depth: 4
anchors: 24
child_links: 29
---

# Plataforma | Actualización Lake (1.7)

![](/download/attachments/550327283/Banner-TDN.png?version=1&modificationDate=1590612870700&api=v2)

¡Lake 7.0!

¡Como puede ver en esta actualización cambiamos el número de esta versión! Lo hicimos porque tenemos cambios arquitectónicos importantes. Procuramos anticiparnos a todas las situaciones para que no tenga ningún problema, pero puede haber alguna incompatibilidad en las personalizaciones realizadas en su plataforma, requiriendo un poco más de atención en el momento de la actualización.

Recuerde también que primero se debe contar con el entorno en la actualización **Fluig 1.6.5-200318 o superior** y, a continuación, actualizarlo a **1.7.0**.

Vea en la sesión [Identity | Arquitectura](/display/fluigesp/Identity+%7C+Arquitectura) los cambios y consulte la [lista de comprobación](/pages/viewpage.action?pageId=552079940) que hemos preparado con algunos consejos sobre lo que debe ver para actualizar su entorno de forma tranquila.

Atención – MySQL 5.5

Con el lanzamiento de la release 1.7 de Fluig (Lake), que trajo muchas características nuevas en Arquitectura, el bajo rendimiento del banco **MySQL 5.5** reportado en el [portal de clientes en 2017](https://tdn.totvs.com/x/3BPyMw#NOT%C3%8DCIAS-mysql-55-2) se mejoró y la ejecución de comandos estándares de las funciones preexistentes en el producto no se realizará correctamente.

 Es importante destacar que, a partir de esta release, TOTVS Fluig Plataforma ya no es compatible con la base de datos MySQL 5.5. 

A continuación, vea las novedades de la actualización 1.7.0 de TOTVS Fluig Plataforma:

## Plataforma

---

**¡Fluig Plataforma es ahora TOTVS Fluig Plataforma!**

Hoy en día, todo lo que nos rodea está en constante evolución... Y aquí en TOTVS no sería diferente, ¿verdad? Por lo tanto, nuestra arquitectura de marca fue reformulada con el fin de simplificar la forma en la que se presentan nuestros productos, facilitando la comprensión de nuestra cartera por parte del mercado.

Con esto, el Fluig Plataforma que ya conoce ahora se llama TOTVS Fluig Plataforma: ¡muchísimas posibilidades dentro de nuestra plataforma, con toda la fuerza que representa la marca TOTVS!

Este cambio de marca trae cambios en el aspecto de la plataforma, que ahora también cuenta con la identidad de TOTVS. 

Vea los puntos donde hay cambios:

- [Nombre de la versión](#)
- [Imagen estándar del inicio de sesión y del logotipo](#)
- [Nombre y Icono en la pestaña del navegador](#)

![](/download/attachments/550327283/Nome.png?version=1&modificationDate=1591376487687&api=v2)

![](/download/attachments/550327283/Logo.png?version=1&modificationDate=1591376487740&api=v2)

![](/download/attachments/550327283/Aba.png?version=1&modificationDate=1591376487800&api=v2)

**¡Esté tranchilo!**

Todo el funcionamiento de la plataforma sigue siendo el mismo, incluso conteniendo las innovaciones y mejoras para este release.

## Ley General de Protección de Datos Personales - LGPD

---

**Aspectos del uso de datos personales de acuerdo con la LGPD**

La LGPD (Ley General de Protección de Datos) es la ley que tiene como objetivo regular las actividades en relación con los datos personales y garantizar así la seguridad y privacidad de los consumidores. Como proveedor de software, TOTVS se posiciona como socio de los clientes para ayudarlos a adaptarse a la LGPD. 

Teniendo en cuenta este escenario, ponemos a disposición en la **actualización del Lake**nuevos recursos, con el objetivo de mantener y evolucionar el grado de cumplimiento de las mejores prácticas de gestión y procesos relacionados con la protección de datos. Consulta a continuación:

**Política de uso y término de consentimiento **Escriba una política de uso lo más completa posible para su portal, en la que se cubran todas las instancias en las que el portal solicitará los datos del usuario. Esta política de uso se puede configurar como un término de consentimiento: al iniciar la sesión por primera vez, el usuario tendrá que aceptar este término antes de poder acceder al portal. Esto garantiza a la empresa que el usuario tiene conocimiento del uso de sus datos.

Vea lo sencillo que es configurar un término de consentimiento para que acepten los usuarios:

- [1- Escriba un término](#)
- [2- Vincule el término como Política de uso](#)
- [3- Seleccione la política que requiere consentimiento](#)
- [¡Listo!](#)

Incluya un archivo PDF o cree un artículo en la propia plataforma, con el término de consentimiento y toda la información necesaria.

![](/download/attachments/550327283/Pol%C3%ADtica%20de%20uso.png?version=1&modificationDate=1590612870160&api=v2)

Registre una política de uso para esa empresa y vincule el término que escribió.

![](/download/attachments/550327283/Pol%C3%ADtica%20de%20uso%202.png?version=1&modificationDate=1590612869987&api=v2)

No se olvide de indicar que este documento debe presentarse a sus usuarios como un término de consentimiento.

![](/download/attachments/550327283/Pol%C3%ADtica%20de%20uso%203.png?version=1&modificationDate=1590612870017&api=v2)

¡Listo!

Al hacer esto, se presenta el término a cada uno de sus usuarios para que lo acepten. Sencillo, ¿verdad?

![](/download/attachments/550327283/Termo%20de%20Consentimento%20%281%29.png?version=1&modificationDate=1590612870187&api=v2)

¡Atención!

- Se recomienda validar el término de consentimiento con un experto legal en su área de trabajo antes de divulgarlo a sus usuarios.
- Si el entorno de Fluig está integrado con Identity, el término de consentimiento se registra en la configuración de seguridad de identidad.
- Para obtener más información, consulte los documentos de [Política de uso](https://tdn.totvs.com/x/nKUXDg)home y [Término de consentimiento](https://tdn.totvs.com/x/8lPNI).

**Gestione los datos personales solicitados en la plataforma**

Puesto que la plataforma Fluig es altamente personalizable, gran parte de la información almacenada proviene de campos que crea el propio usuario. Para facilitar la identificación y el control de los datos personales que se almacenan, estos datos ahora se asignan a una lista independiente, disponible solo para los administradores. 

¡El registro de datos personales llegó para hacer todo más sencillo! Identifique los campos de la base de datos que contienen datos personales. Complemente este registro con clasificaciones y argumentos, tales como: para qué se solicita y para qué fines se utilizará.

Vea cómo funciona:

- [Listado de datos personales](#)
- [Agregar dato personal](#)

La pantalla de Datos personales concentra todos los campos que solicitan datos personales... 

![](/download/attachments/550327283/Dados%20pessoais%20%281%29.png?version=1&modificationDate=1590612870563&api=v2)

... Puede incluir manualmente los atributos necesarios como datos personales.

![](/download/attachments/550327283/Adicionar%20dado%20pessoal.png?version=1&modificationDate=1590612870043&api=v2)

¡Esté atento!

Los datos personales, además de los datos de registro de usuarios, pueden solicitarse en formularios creados en modo avanzado, en Fluig Studio, en formularios de proceso, en formularios de comunidad y en Forms. Para obtener más información, consulte la documentación de [Datos personales](https://tdn.totvs.com/x/8DieI).

**Garantice la privacidad de sus usuarios**

Entrando más en detalle en este contexto, ¿qué ocurre si un usuario que es titular de la información y le preocupa su privacidad solicita una acción con relación a sus datos? ¡La actualización Lake está lista para atenderlo!

Con la nueva función Anonimizar y Exportar datos personales, puede encontrar fácilmente datos personales por usuario o tipo de datos, y tomar las medidas necesarias, que pueden ser: exportar o anonimizar los datos.

- En la **exportación de datos**, los datos personales solicitados se recopilan en un archivo JSON para enviar a su titular, que incluso puede importarlos a otro sistema si así lo desea;

- En la **anonimización**, los datos personales se someten a un tratamiento irreversible, por lo que ya no se presentarán en sus respectivos registros. 

Vea a continuación:

- [Anonimizar y exportar datos personales](#)
- [Anonimizar los datos](#)
- [Datos anonimizados](#)
- [Exportar datos](#)
- [Datos exportados](#)

![](/download/attachments/550327283/anonimizar%20e%20exportar.png?version=1&modificationDate=1590612870633&api=v2)

![](/download/attachments/550327283/Anonimizar.png?version=1&modificationDate=1590612870597&api=v2)

![](/download/attachments/550327283/Anonimiza%C3%A7%C3%A3o%20antes%20e%20depois.png?version=1&modificationDate=1590612870463&api=v2)

![](/download/attachments/550327283/Exportar%20dados.png?version=1&modificationDate=1590612870667&api=v2)

![](/download/attachments/550327283/Dados%20exportados.png?version=1&modificationDate=1590612870497&api=v2)

¡Atención!

Para obtener más información sobre estos recursos, consulte el documento [Anonimizar y exportar datos personales](https://tdn.totvs.com/x/PDeeI).

**Asigne los datos personales de formularios**
¡La actualización Lake está completando su plataforma con recursos de seguridad y protección! Para facilitar el cumplimiento de la LGPD, ahora también se pueden asignar los formularios creados por los propios usuarios de Fluig y que contienen datos personales. Esto abarca formularios creados en modo avanzado, creados en Fluig Studio, formularios de proceso, formularios de comunidad y Forms.

Estos recursos se basan en la búsqueda de datos, la anonimización y la exportación según sea necesario, además del registro de visualización, para garantizar la seguridad del titular de la información. 

**Entérese de todo lo que sucede en la plataforma**Como recurso adicional para garantizar la seguridad en sus operaciones, Fluig también ofrece un servicio para registrar los cambios realizados en la plataforma en características específicas como Papeles, Usuarios, Grupos, Procesos y Documentos, entre otras, y un control dedicado de los datos de personas registradas. Para obtener más información, visite [Eventos de auditoría](https://tdn.totvs.com/x/zbxGGg).

![](/download/attachments/550327283/Eventos%20de%20auditoria%201.7.0.png?version=1&modificationDate=1590612869960&api=v2)

Sugerencia

Es importante remarcar que TOTVS se posiciona como socio de los clientes para ayudarlos a adecuarse a la LGPD. Nos comprometemos a ayudarlos en esta transición, a pesar de que nuestros productos sean herramientas de soporte y que el cumplimiento de la ley requiera especialmente el compromiso de cada empresa y cliente. 

¿Tiene pregunta sobre algún concepto o regla de la LGPD? Obtenga más información sobre el tema [en este documento](https://tdn.totvs.com/pages/releaseview.action?pageId=514427789).

## Procesos

---

**LGPD aplicada a formularios de procesos**

Ya sea para aplicaciones Saas o sistemas locales, lo que todos buscamos es que nuestros datos que viajan por la red estén seguros. Es por eso que se ha implementado la LGPD de forma completa y estricta, a fin de satisfacer estas demandas y así garantizar a los usuarios una forma mucho más completa de proteger y procesar sus datos personales, con el secreto y la atención que merecen. 

Los formularios siempre han sido elementos clave en lo que respecta a los datos, ya que muchos de ellos solicitan información variada y, casi siempre, de carácter personal, como edad, número de RCPF (Registro de Contribuyente de Persona Física), número de identidad y fecha de nacimiento, entre otros. Datos que llevan consigo el peso de una información completamente personal e intransferible. 

Los datos personales que están en la plataforma pueden contar con medidas de seguridad, en las que, al configurar el formulario de un proceso con reglas específicas, se puede definir qué información puede o no estar disponible para su visualización. En todos los campos, excepto en el de Evaluación, se puede configurar el elemento **Privacidad** para indicar si contiene datos personales, si su contenido se puede anonimizar y cuál es la razón y la justificación que se solicita en el formulario. Consulte todo el tutorial en la documentación [**Configurar formulario**](https://tdn.totvs.com/x/vqoFE), y vea qué elementos se pueden configurar de acuerdo con la Ley General de Protección de Datos.

- [Vídeo](#)
- [Formulario en la configuración del proceso](#)

![](/download/attachments/550327283/Formul%C3%A1rio%20-%20configurar%20processo.PNG?version=1&modificationDate=1590612870250&api=v2)

**Nuevas API para registro de procesos y sustitutos**

Con el objetivo de satisfacer la necesidad de los clientes de realizar operaciones de creación, consulta, actualización y distribución de procesos por medio de APA, presentamos las nuevas API creadas especialmente para facilitar la rutina de registro de procesos de flujo de trabajo. 

Y para completarlo, implementamos la lógica en las API de procesos de modo que consideren el concepto de usuario sustituto para aplicaciones móviles. 

Haga clic en [API Process Management](https://api.fluig.com/process-management/swagger-ui/#/Processes) para obtener más detalles de estas API. 

![](/download/attachments/550327283/image2020-4-6_14-44-9.png?version=1&modificationDate=1590612870400&api=v2)

## Documentos

---

**Formulario avanzado en el contexto de la LGPD**

Los formularios avanzados, es decir, los que se crean y configuran por medio de fluig Studio, también adoptan las medidas de seguridad de los datos personales. En este caso, la configuración se crea con codificación directamente en Studio, y permite al desarrollador agregar algunos atributos al campo "input" (entrada) de HTML para que se configure la privacidad del campo.

Aquí está el paso a paso de cómo configurar su formulario avanzado de acuerdo con las normas de la LGPD para la protección de datos o acceda a [Desarrollo de formularios](https://tdn.totvs.com/x/xojYCg).

Este es el aspecto de la configuración de privacidad en el formulario avanzado:

- [Desarrollo en Fluig Studio](#)
- [Formulario importado a Fluig](#)
- [Formulario que se está completando](#)

El formulario que se está desarrollando en Fluig Studio. Se resaltan los atributos de configuración de la privacidad del campo:

![](/download/attachments/550327283/Fluig%20Studio.png?version=1&modificationDate=1590612870217&api=v2)

![](/download/attachments/550327283/Formul%C3%A1rio%20avan%C3%A7ado.png?version=1&modificationDate=1590612870370&api=v2)

![](/download/attachments/550327283/Preenchimento%20formul%C3%A1rio.png?version=1&modificationDate=1590612870337&api=v2)

**Descubre más sobre los informes de Fluig**

Actualizamos nuestra plataforma para que sea compatible con la última versión de BIRT, 4.8. BIRT es una plataforma de *código abierto* que facilita el modelado de informes dentro de Fluig. En esta versión, el usuario recibió mejoras en la seguridad y el acceso a los datos, mayor compatibilidad con otros formatos de exportación de informes (incluidos XLS y DOCX) y una integración más sencilla con bibliotecas JavaScript. Obtenga más información sobre las características de esta versión en el [sitio web oficial](https://www.eclipse.org/birt/phoenix/project/notable4.3.php).  

![](/download/attachments/550327283/Birt-logo.png?version=1&modificationDate=1590612870530&api=v2)

Acceda a la documentación técnica de [Desarrollo de informes](https://tdn.totvs.com/x/yojYCg) para ver cómo preparar el entorno y crear los informes que desee. Consulte [aquí](https://tdn.totvs.com/x/IaOwD) para ver las plantillas (*templates*) que ya desarrollamos para usted.

## Mobile

---

**Substitutos en Approval**

Se implementó en la aplicación Approval un mecanismo que permite mover solicitudes con el usuario substituto. Función que permitirá al usuario seleccionar a la persona que va a substituir y visualizar sus tareas que se encuentran pendientes, facilitando así el acceso y la finalización de las tareas de forma más eficiente.

Para ver la documentación, acceda a [Configurar actividades y flujos](https://tdn.totvs.com/x/ikFtEQ). También vea las novedades de esta aplicación, accediendo a [Release Notes Approval](https://tdn.totvs.com/x/Q4-HEw).

## Social

---

**Nuevas API Sociales en la actualización Lake**

Siempre pensamos en cómo permitir a nuestros clientes satisfacer su necesidad de realizar las más diversas operaciones. Es por eso que desarrollamos nuevas API de Colaboración con el fin de facilitar estas operaciones en:

- [Comunidades](https://api.fluig.com/collaboration/swagger-ui/#/Communities): para las comunidades, se desarrollaron API a fin de indicar información específica de la comunidad y de todas las comunidades, enumerar los usuarios participantes de la comunidad, solicitar permiso para unirse a la comunidad y eliminar usuarios de la comunidad;
- [Seguidores](https://api.fluig.com/collaboration/swagger-ui/#/Followers): en este aspecto, las API están diseñadas para buscar todos los seguidores de un usuario, las solicitudes para seguir a un usuario específico y la eliminación de un usuario de la lista de seguidores de otro usuario;
- [Fotos de perfil](https://api.fluig.com/collaboration/swagger-ui/#/Profile_picture): para fotos de perfil, se desarrolló una API que permite añadir o cambiar una imagen de un usuario específico;
- [Usuarios](https://api.fluig.com/collaboration/swagger-ui/#/Users): se desarrollaron API que permiten indicar información de todos los usuarios, enumerar los usuarios que sigue un usuario específico e indicar la información de un solo usuario.

![](/download/attachments/550327283/image2020-4-6_14-45-1.png?version=1&modificationDate=1590612870433&api=v2)

Para obtener más información sobre las API, visite: [api.fluig.com](https://api.fluig.com/)

**LGPD aplicada a formularios en comunidad**

También se puede utilizar nuestros recursos para adecuarse a las nuevas medidas de protección de datos en los formularios publicados en las comunidades.

Con esto, se agregó una opción más para configurar campos: el elemento **Privacidad**. Solo basta con agregar los campos requeridos a su formulario y definir el elemento de privacidad dentro de la configuración de cada campo. De esta manera, puede garantizar aún más la seguridad de los datos que se recopilan en sus formularios.

No se pierda esta actualización y obtenga más flexibilidad para su Fluig.

**Eche un vistazo a la novedad**

- Para obtener más información, visite el tema de ayuda [Publicar el formulario en comunidad](https://tdn.totvs.com/x/gKQXDg).

![](/download/attachments/550327283/LGPD%20privacidade%20forms%20comunidade.png?version=1&modificationDate=1590612870307&api=v2)

## Arquitectura

---

**Más seguridad y compatibilidad en Fluig**

Algunas bibliotecas y herramientas se actualizaron para aportar más seguridad, rendimiento y estabilidad a la plataforma Fluig. La plataforma ahora utiliza el servidor de aplicaciones **Wildfly** en la **versión 18**y el entorno de ejecución Java (**OpenJDK**) está en la versión 11. También homologamos la base de datos **Oracle18c** y **Windows Server 2019**.

![](/download/attachments/550327283/Arquitetura.png?version=1&modificationDate=1590612870730&api=v2)

![](/download/attachments/550327283/Windows-server-2019-dinahosting-1.jpg?version=1&modificationDate=1591381720450&api=v2)

**¡Atención!**

- Los desarrolladores que utilizan el plugin Eclipse deben actualizarlo a una versión que se ejecute con Java 11.
- La base de datos MySQL 5.5 ya no es compatible con la actualización de Lake.
- Si se realizó alguna personalización en los archivos "domain.xml" y "host.xml", es importante verificar que todos los cambios se migraron a la nueva versión. Revise todo lo que se cambió manualmente en los archivos.

Consulte nuestro documento [Matriz de portabilidad](https://tdn.totvs.com/x/W4fYCg) y [Dimensionamiento](https://tdn.totvs.com/x/XIfYCg) para obtener más información sobre los requisitos y el desempeño de Fluig. 

## WCM

---

**Actualización de arquitectura en WCM – Más seguridad para usted**

En la versión 1.7.0 Lake realizamos una actualización de la biblioteca (libs) siempre pensando en aportar más seguridad y estabilidad al acceder a la plataforma Fluig.

Vea las bibliotecas actualizadas a continuación:

- jQuery de la versión 222 a la 3.5.0
- Moment de la versión 2.9.0 a la 2.24.0
- Bootstrap de la versión 3.3.6 a la 3.4.1

Debido a que esta actualización puede afectar a los desarrollos de páginas y widgets, liberamos en esta release un plugin de migración proporcionado por la propia jQuey, el **jquery-migrate**.

Además de ayudar a restaurar los comportamientos perdidos en la versión anterior, también facilitará la identificación de los puntos donde se requiere la actualización del código. Recomendamos que utilicen este plugin para realizar los ajustes del código lo antes posible, ya que en las próximas releases se eliminará de la instalación de Fluig. 

**Fique atento!**

Todos los tutoriales necesarios para identificar lo que debe actualizar están disponibles en la documentación: **actualización JQuery – Cómo identificar lo que necesita ser actualizado**.

**Nuevo menú de edición de Fluig**

La plataforma Fluig fue modernizada por completo en esta actualización, trayendo importantes mejoras no solo para la seguridad, sino también mejoras de usabilidad.

Con esto, el menú de Fluig Plataforma fue totalmente modernizado, trayendo facilidad en la identificación por parte de los usuarios y facilidad de uso también.

Las funciones**Editar perfil, Editar imagen, Idioma, Ayuda** y **Salir** se encuentran en el lado derecho de la foto de perfil del usuario, identificada por el icono. ¡De esa manera, todos los recursos que antes estaban junto con la imagen de perfil serán más fáciles de encontrar y usar!

- [Nuevo menú](#)

![](/download/attachments/550327283/Novo%20menu%20Fluig%20plataforma.png?version=1&modificationDate=1590612870763&api=v2)

## Documentación

---

- Actualizamos el documento sobre [**Eventos de auditoría**](https://tdn.totvs.com/x/zbxGGg) para proporcionar detalles de los eventos que se auditan en la plataforma. ¡Véalo!
- Documentación de nuevos recursos relacionados con la privacidad del usuario, agrupados en [Seguridad y acceso](https://tdn.totvs.com/x/YyVnGg).
- **TOTVS Identity** ahora tiene un espacio exclusivo de ayuda, preguntas frecuentes y documentación técnica. [¡Ingrese aquí!](https://tdn.totvs.com/x/NnA9I) 
- Vea en detalles las novedades y las correcciones disponibles en la aplicación [fluig Mobile](https://tdn.totvs.com/x/B1y2Fg). 

Una inmensa base de conocimiento a su disposición

Estamos evolucionando constantemente nuestra base de conocimiento en **Zendesk**. Antes de abrir una solicitud al servicio Fluig, busque para ver si hay un artículo con preguntas o problemas similares que se hayan asignado y resuelto. Las sugerencias de artículos se presentarán en el momento en que indique el tema de la solicitud.

De esta manera, puede hacer su trabajo con más rapidez. Entre a [suporte.totvs.com](https://suporte.totvs.com) para obtener más información.

## Correcciones

---

**WCM**

- Se realizó un cambio para permitir la inclusión de más de una URL en las publicaciones.
- Ajustes en el componente *autocomplete* de la Style Guide, para no mostrar la lista de opciones al resaltarse cuando el campo esté deshabilitado.

**BPM**

- Se realizó el ajuste en el desplazamiento de la actualización del tema Snowflake para corregir la alineación del contenido en pantalla.
- Se realizó la corrección en la actividad condicional, de modo que se acepte y valide correctamente la validación del script de esta actividad.****
- Se corrigió la creación de subcategorías con el mismo nombre de la categoría primaria. Se realizó un cambio para separar la categoría por nivel de estructura y así corregir incoherencias, de modo que los procesos se carguen y las carpetas se muestren correctamente.
- Se corrigieron las bibliotecas importadas para que se validen automáticamente y ya no muestren el mensaje cuando el formulario use la Style Guide.
- Se realizó un ajuste para que, después de actualizar Fluig, las palabras mal escritas en los complementos de la solicitud se subrayen en rojo, a fin de indicar el error en el idioma portugués.
- Se corrigió una situación en la que, al tener configurado un proceso con el mecanismo de atribución por campo de formulario y al editarlo y eliminar el campo existente para agregar uno nuevo, el motor de actividad quedaba vacío y no se permitía la edición. Se ajustó para que, cuando cambie el campo, este se actualice.
- Se realizó una corrección para que se muestren correctamente los usuarios de un papel al ver los datos de una actividad en el inicio de un proceso.
- Se cambió la búsqueda de usuarios en Tareas para que se vea correctamente la lista de usuarios.
- Se realizó una corrección en Fluig Mobile para que el texto del complemento de la actividad de servicios se muestre correctamente en pantalla.
- Se corrigió la tabla FDN_PERSONALDATA referente a los campos del formulario de proceso, de modo que los datos personales marcados como anónimos se anonimicen correctamente.
- Se realizó un ajuste para que, después de actualizar Fluig, las palabras mal escritas en los complementos de la solicitud se subrayen en rojo a fin de indicar el error en el idioma portugués.
- Se corrigió una incoherencia en el sistema de registro de usuarios sustitutos que permitía registrar usuarios y fechas idénticos.
- Se corrigió una incoherencia que no permitía validar o editar usuarios sustitutos al iniciar un proceso.
- Se corrigió una incoherencia que se producía al seleccionar una actividad en *pool* y al hacer clic para ver la lista de usuarios del grupo/papel, y que hacía que el resultado no se cargara correctamente.
- Se ajustaron las validaciones de actividad de servicio para que se pueda exportar un proceso con la versión liberada que contenga la actividad de servicio sin *scripts*.
- Se realizó un cambio para emitir alertas si el usuario intenta mover una solicitud a un usuario inactivo o inexistente.
- Se realizó una corrección en ADHOC de Fluig para que se utilice una única versión del registro de formulario.

**Forms**

- Se realizó una corrección en los formularios que tienen campos de texto con máscara de moneda o porcentaje, de modo que guarden correctamente el valor en la base de datos con PUNTO, que es el separador decimal correcto, en lugar de la COMA que era incorrecta.
- Se ajustaron los campos del formulario para que los nombres se guarden correctamente.
- Se ajustó el campo de texto enriquecido y se aumentó el límite del campo a 10 000 caracteres, y la validación se aplicará solo a los caracteres visibles para el usuario.
- Se ajustaron los formularios para que el componente de texto enriquecido muestre un contador de los caracteres introducidos en el campo y también un mensaje en pantalla cuando se supere el límite de caracteres.
- Se ajustó el uso de la tecla Tabulador para que, al pulsarla, el enfoque se mueva de campo a campo, de izquierda a derecha, y luego hacia abajo en el primer campo a la izquierda, lo cual permite completar formularios fácilmente sin necesidad de hacer clic en cada campo.

**Portales**

- Se corrigió una incoherencia que impedía que Fluig se iniciara correctamente.
- Se realizó la corrección que permite el deploy de componentes con archivos "js" que tengan menos de 3 caracteres.

**Fundación**

- Se realizó la corrección en la ordenación por las columnas "Matrícula del substituto" y "Matrícula del substituido" en la pantalla de Substitutos.
- Se realizó la corrección de la validación de la cantidad de caracteres en los campos "Iniciar sesión" y "Matrícula" del usuario.
- Inclusión de mensaje para orientar cómo rellenar el código en la inclusión de papel.
- Se realizó el ajuste en Approval para que haya una validación de conexión LDAP sin el uso de credenciales.
- En entornos Linux, se incluyó la verificación de permisos del usuario, donde el usuario que inicia el servicio debe ser el propietario (owner) de la carpeta de instalación. Esta validación solo se estaba realizando para entornos Linux derivados de Debian, y ahora la verificación se está haciendo en entornos Linux derivados de RedHat también.
- Se realizó el ajuste para situaciones en las que un usuario está activo en más de una empresa en Fluig. Ahora, en el registro de usuario, edición de usuario, reactivación de usuario y durante el inicio de sesión, se presentará un mensaje al administrador indicando que este usuario no podrá acceder a la plataforma utilizando un correo electrónico ya registrado en otra empresa, y queda a criterio del administrador continuar o no los procedimientos enumerados anteriormente.

**Dataset**

- Se realizó la corrección en la API "/ecm/dataset/synchronizeDataset" para que presente el funcionamiento correcto.

**ECM**

- Se realizó el ajuste para que los comentarios incluidos para el documento se muestren en pantalla sin tener que cerrar y volver a abrir la pantalla de comentarios.
- Se corrigió la inconsistencia en la exportación de la lista de acceso para todas las versiones del documento, cuando ese documento tenía muchos hits.
- Inclusión de los campos *inheritApprovers*, *convertDocumentType*, *notificationDays*, *quota* y *publicDocument* en el objeto [DocumentDto](https://tdn.totvs.com/display/fluig/Guia+de+propriedades+dos+objetos#Guiadepropriedadesdosobjetos-DocumentDto).


<!-- anchors: Plataforma|ActualizaciónLake(1.7)-Plataforma, TOTVs, Plataforma|ActualizaciónLake(1.7)-LeyGeneraldeProteccióndeDatosPersonales-LGPD, Termo, Termo-1, Termo-2, Termo-3, Termo-4, dadospessoais, dadospessoais-lista1, dadospessoais-lista2, Anonimizar_Exportar, Plataforma|ActualizaciónLake(1.7)-Procesos, 1, Plataforma|ActualizaciónLake(1.7)-Documentos, locais, locais-studio, Plataforma|ActualizaciónLake(1.7)-Mobile, Plataforma|ActualizaciónLake(1.7)-Social, Plataforma|ActualizaciónLake(1.7)-Arquitectura, Plataforma|ActualizaciónLake(1.7)-WCM, sample, Plataforma|ActualizaciónLake(1.7)-Documentación, Plataforma|ActualizaciónLake(1.7)-Correcciones -->
