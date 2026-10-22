---
title: "Plataforma ❙ Contenidos"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=236430621"
scraped_at: "2026-03-09T05:22:01.795Z"
depth: 4
anchors: 8
child_links: 48
---

# Plataforma ❙ Contenidos

# Índice

## Hablando de contenidos...

Los contenidos son videos, imágenes, presentaciones, documentos de texto, entre otros, que se pueden utilizar en capacitaciones y grupos.

El contenido puede ser:

- **Público**: un contenido público está disponible para su uso en capacitaciones y grupos para todos los usuarios.
- **Privado**: un contenido privado solo está disponible para el usuario que realizó su registro.

Los tipos de contenido que se pueden registrar son:

- Imagen (con las extensiones gif, jpeg, bmp, jpg, png);
- Video (con las extensiones wmv**1**, avi y mp4**2** o almacenados en las plataformas YouTube, Vimeo y Kaltura y que son registrados a partir de su URL);Observaciones **1** → Actualmente la extensión vwm solo es compatible con el navegador Internet Explorer. A partir de la versión 45 de Google Chrome y la versión 55 de Mozilla Firefox se desactivó el plug-in NPAPI que genera esta visualización.**2** → Con excepción de los mp4 codificados en los formatos H.263, XVID o Dvix.
- Audio (con la extensión mp3);
- Archivo (con las extensiones txt, pdf, extensiones de Microsoft Office);
- Enlace a contenidos externos, URL, como videos, páginas, artículos, etc.
- [SCORM](/pages/viewpage.action?pageId=244446799) 1.2.

Nota

Solo los contenidos con las extensiones GIF, JPG, JPEG, BMP, PNG, WMV**1**, AVI**1**, MP4**1**, MP3, TXT y PDF y los contenidos de tipo SCORM se pueden visualizar en el propio visualizador interno. Los demás se descargan en el momento de la visualización.

**1** → Estas extensiones tienen algunas limitaciones. Más detalles sobre [¿Qué formatos de video se admite como contenido?](https://tdn.totvs.com/pages/viewpage.action?pageId=239036570) y [¿Por qué un contenido de extensión AVI no aparece en los navegadores Chrome y Firefox?](https://tdn.totvs.com/pages/viewpage.action?pageId=235569706)

SCORM 1.2 se refiere a un archivo comprimido que debe contener un archivo XML con el nombre "imsmanifest.xml", que se llama archivo de "manifiesto" en su raíz. El archivo "manifiesto" contiene toda la información necesaria para la presentación del contenido. El manifiesto divide la capacitación o el contenido en uno o más SCORM.

Los SCORM pueden combinarse en una estructura de árbol que representa la capacitación o el contenido, conocida como árbol de actividades. El "manifiesto" contiene una estructura en XML, que representa el árbol de actividades, como también información sobre cómo iniciar cada SCORM y, opcionalmente, metadatos que describen la capacitación o el contenido y sus partes.

El registro de contenidos es realizado por usuarios que tienen permisos para administrar contenidos, es decir, permiso de creación o modificación, eliminación, visualización o permiso completo.

Las acciones relacionadas con la gestión de contenidos son:

- **Crear/modificar contenido**: con este tipo de permiso, se pueden registrar nuevos contenidos, editar los propios contenidos y los contenidos definidos como públicos.
- **Administrar todos los contenidos**: con este permiso, el usuario puede crear y editar contenidos públicos o privados de otros usuarios.
- **Eliminar contenido**: el usuario que posee este tipo de permiso puede eliminar contenidos que no están en uso.
- **Visualizar contenido**: con este permiso, el usuario solo puede ver los contenidos existentes y no puede realizar ninguna acción sobre ellos.

![](/download/attachments/236430621/contenidos.PNG?version=3&modificationDate=1600712066380&api=v2)

### Ver contenido

---

**01.** En el menú principal, posicionar el *mouse* sobre **Aprendizaje**.

**02.** Activar **Administrar**.

**03.**Visualizar los contenidos existentes.

### Agregar contenido

---

**01.** Activar **Nuevo**, situado en la esquina superior izquierda de la ventana.

**02.** Ingresar la información requerida para el contenido.

**Nombre**
Nombre del contenido que se está agregando.

**Palabras clave**
Palabras clave relacionadas con el contenido. Las palabras deben estar separadas por espacios.

**Descripción**
Descripción del contenido que se está agregando.

**Pasar el contenido a uso privado para el usuario propietario**
Cuando está marcado, determina que el contenido solo está disponible para el usuario que realizó su registro.

**03.** Activar la pestaña **Upload** para incluir un contenido de la máquina local, o la pestaña **URL** para incluir un enlace a un contenido externo.

**04.**Si la pestaña activada es **Upload**, activar **Cargar archivo**.

**05.** Buscar y seleccionar el contenido deseado.

 Para eliminar un archivo que se introdujo, activar **Eliminar**.

**06.** Definir otras informaciones, si son relevantes para el contenido ingresado.

**Es un contenido SCORM**
Cuando está marcado, determina que el contenido incluido es del tipo SCORM. Actualmente, solo se puede utilizar la versión 1.2. Se puede visualizar el árbol estructural del contenido activando **Ver árbol SCORM**.

**No validar contenido SCORM**
Cuando está marcado, determina que no se validará la estructura del contenido de tipo SCORM ingresado.

¡Esté atento!

Al marcar esta opción, si el contenido introducido tiene alguna inconsistencia, no se emitirá ningún mensaje de alerta. Y si el contenido tiene inconsistencias, su visualización puede verse comprometida, lo que resulta en fallas en la ejecución de la capacitación que utilice este contenido.

Por lo tanto, para recibir una alerta cuando existan inconsistencias, esta opción no debe estar marcada.

**07.** Si la pestaña activada es **URL**, introduzca la dirección de la Web deseada.

Las URL de videos de las plataformas YouTube y Vimeo pueden introducirse en varios formatos.
**Ejemplos:**

- //[www.youtube.com/watch](https://www.youtube.com/watch)
- //[youtu.be/](https://youtu.be/)
- //[vimeo.com/channels](https://vimeo.com/channels)
- //[vimeo.com/](https://vimeo.com/)
- //[vimeo.com/originals/](https://vimeo.com/originals/)

En la plataforma Kaltura, se debe introducir la URL completa del video.
**Ejemplos:**

- [http://www.kaltura.com/p/{PARTNER_ID}/sp/{PARTNER_ID}00/embedIframeJs/uiconf_id/{UICONF_ID}/partner_id/{PARTNER_ID}?iframeembed=true&playerId={UNIQUE_OBJ_ID}&entry_id={ENTRY_ID](http://www.kaltura.com/p/{PARTNER_ID}/sp/{PARTNER_ID}00/embedIframeJs/uiconf_id/{UICONF_ID}/partner_id/{PARTNER_ID}?iframeembed=true&playerId={UNIQUE_OBJ_ID}&entry_id={ENTRY_ID)}

Observación

Los parámetros PARTNER_ID, UICONF_ID, UNIQUE_OBJ_ID son de la plataforma Kaltura.

Los videos almacenados en estas tres plataformas se muestran en su propio reproductor interno al ser visualizados en las capacitaciones. Las otras URL se muestran en una nueva pestaña.

**80.** Accionar **Guardar** o **Anular** para abandonar la inclusión del contenido, si así lo desea.

### Editar contenido

---

**01.** En la ventana Contenidos, buscar el contenido para ser editado.

**02.** Activar el ícono **Editar**, situado en el lado derecho de la línea correspondiente al contenido.

**03.** Modificar la información deseada. Se pueden obtener detalles sobre los campos que se muestran en la ruta alternativa [Agregar contenido](https://tdn.totvs.com/display/HOE/Contenidos#Contenidos-Agregarcontenido).

**04.** Activar **Guardar** o **Anular** para descartar las modificaciones realizadas, si así lo desea.

### Hacer download del contenido

---

**01.** En la ventana Contenidos, busque el contenido que se desea bajar.

**02.** Active el ícono **Editar**, situado en el lado derecho de la línea correspondiente al contenido.

**03.** Active **Download del archivo**, situado al lado del nombre del archivo correspondiente al contenido.

### Eliminar contenido

---

**01.** En la ventana Contenidos, buscar el contenido para ser eliminado.

**02.** Activar el ícono **Eliminar**, situado en el lado derecho de la línea correspondiente al contenido.

**03.** En el mensaje que aparece, activar **Sí** para confirmar la eliminación del contenido o **Anular** para abandonar la acción, si así lo desea.

### Vista previa del contenido

---

**01.** En la ventana Contenidos, buscar el contenido para ser visualizado.

**02.** Activar el ícono **Vista previa**, situado en el lado derecho de la línea correspondiente al contenido.

**03.** Visualizar el contenido seleccionado. Para cerrar la vista previa y volver a la ventana principal de contenidos, activar **Finalizar visualización**.

 Al realizar la vista previa, los archivos del paquete Office harán el *download* automáticamente, ya que no son procesados por el visualizador interno de la plataforma.

¡Esté atento!

Esta documentación es válida a partir de la actualización 1.6.3** – Snowflake**. Si utiliza una actualización anterior, puede que contenga información diferente de la que ve en su plataforma.


<!-- anchors: Plataforma❙Contenidos-Índice, Plataforma❙Contenidos-Hablandodecontenidos..., Plataforma❙Contenidos-Vercontenido, Plataforma❙Contenidos-Agregarcontenido, Plataforma❙Contenidos-Editarcontenido, Plataforma❙Contenidos-Hacerdownloaddelcontenido, Plataforma❙Contenidos-Eliminarcontenido, Plataforma❙Contenidos-Vistapreviadelcontenido -->
