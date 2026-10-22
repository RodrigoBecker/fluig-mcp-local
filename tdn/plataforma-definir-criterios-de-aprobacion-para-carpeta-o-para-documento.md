---
title: "Plataforma ❙ Definir criterios de aprobación para carpeta o para documento"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=254607423"
scraped_at: "2026-03-09T04:52:31.090Z"
depth: 3
anchors: 5
child_links: 43
---

# Plataforma ❙ Definir criterios de aprobación para carpeta o para documento

# Hablando de definir criterios de aprobación para carpeta o para documento...

---

La aprobación de contenido publicado en la plataforma se puede realizar tanto por carpetas como por documentos.

Al definir los criterios de una carpeta para que tenga aprobadores, todo el contenido que se publica en ella pasará por esta aprobación, excepto si existen subcarpetas en las que la opción '¿hereda aprobadores del principal?' no está marcada.

La aprobación por documento solo se permite cuando se publica en una carpeta que no tiene aprobación. En este caso, los criterios se definen en el momento de la creación del documento. El contenido publicado por el propio usuario aprobador de la carpeta también se someterá a su aprobación, ya que además de aprobador también puede ser publicador e incluir documentos en la carpeta. Esta acción es necesaria para garantizar una mayor asertividad con respecto a la publicación y aprobación de documentos en la plataforma.

![](/download/attachments/254607423/Aprova%C3%A7%C3%A3o%20espanhol.png?version=1&modificationDate=1583176459113&api=v2)

## Acceder a la configuración de aprobación

---

**01**. Activar el menú **Documentos**.

**02**. Buscar la carpeta o documento que contiene la aprobación configurada.

**03**. Activar el botón ![](/download/attachments/254607423/Barras%20horizontais2.png?version=1&modificationDate=1595334095370&api=v2)**Más acciones** referente a la carpeta o documento y seleccionar la opción **Propiedades**.

**04**. Activar la pestaña **Aprobación**.

## Heredar aprobadores de la carpeta principal

---

Esta opción solo está disponible para subcarpetas creadas dentro de carpetas con aprobación configurada.

**01**. Acceder a la pestaña **Aprobación** como se muestra en el ítem [Acceder a la configuración de aprobación](#Plataforma❙Definircriteriosdeaprobaciónparacarpetaoparadocumento-Accederalaconfiguracióndeaprobación).

**02**. Seleccionar la opción **Heredar aprobadores principales**.

Si la opción **Heredar los aprobadores principales** está marcada, las subcarpetas heredarán los niveles de aprobación y los respectivos aprobadores de la carpeta principal. Esta opción no permite ninguna configuración de aprobación adicional.

Si esta opción no se marca, el documento que se publique dentro de la subcarpeta respetará la aprobación definida específicamente para la subcarpeta, no la de la carpeta principal.

## Agregar nivel de aprobación

---

Se puede utilizar el recurso de aprobación por niveles, o sea, que se puede determinar que la publicación de una carpeta o documento pase por varios niveles de aprobación. 

**01**. Acceder a la pestaña **Aprobación** como se muestra en el ítem [Acceder a la configuración de aprobación](#Plataforma❙Definircriteriosdeaprobaciónparacarpetaoparadocumento-Accederalaconfiguracióndeaprobación).

**02.**En **Agregar nivel**, introduzca una descripción para el nivel de aprobación que se le otorgará a la carpeta o al documento.

**03.** Active **Agregar Nivel**.

Al activar esta opción, aparece un área en donde se pueden definir los usuarios que van a aprobar los documentos publicados en esta carpeta.

**04.** Definir los colaboradores o grupos que formarán parte del nivel de aprobación.

Active **Colaborador** para incluir un usuario con aprobador de la carpeta o del documento. En la ventana que aparece, seleccione el usuario que de designará como aprobador de la carpeta o del documento y active **Seleccionar**.

Active **Grupo** para incluir un grupo de usuarios como aprobador de la carpeta o del documento. En la ventana que aparece, seleccione el grupo de usuarios que se definirá como aprobador de la carpeta o del documento y active **Selecionar**. Se pueden visualizar los usuarios del grupo activando **Ver usuarios** en la ventana que aparece.

Para eliminar un usuario o un grupo de usuarios que está incluido, solo selecciónelo y active **Eliminar**.

¡Esté atento a las configuraciones de seguridad del documento!

Es necesario que el usuario aprobador tenga al menos el permiso de lectura en el documento que se va a aprobar, ya que de lo contrario no podrá acceder al documento para su aprobación.
Debemos recordar que la seguridad del documento no depende de la aprobación: si se retira el permiso de un documento en aprobación, esta regla se aplicará en ese mismo momento, bloqueando el acceso al documento que se envió para su aprobación.

**05.** Defina el resto de la información para el nivel de aprobación incluido.

**Condición de aprobación**
Condición de aprobación para las publicaciones realizadas en la carpeta. Las opciones disponibles son:
- Y:  cuando se selecciona, determina que deben tenerse en cuenta las opiniones de todos los aprobadores para que el documento se publique o envíe al siguiente nivel de aprobación.
- O:  cuando se selecciona, determina que basta con recibir la opinión de uno de los aprobadores para que el documento se publique o envíe al siguiente nivel de aprobación.
- Único**:** cuando se selecciona, determina que cuando existe una lista de aprobadores, la decisión del primer usuario será definitiva para todo ese grupo de aprobadores. Eso tanto para la aprobación como para la desaprobación. La diferencia entre “O” y “Única” es que, en la condición O, todos deben reprobar. Si la mayoría reprueba, pero el último aprueba, el documento se aprobará.

**Este nivel requiere firma digital**
Cuando está marcada, determina que la aprobación de este nivel debe utilizar firma digital. Esta opción solo está disponible si la el recurso [Plataforma ❙ Firma digital](/pages/viewpage.action?pageId=268805054) está configurado para esa empresa.

**06. **Después de modificar las propiedades deseadas de la carpeta o documento, active **Confirmar** para guardar los cambios.

## Eliminar el nivel de aprobación

---

Para poder eliminar el nivel de aprobación, se deben aprobar todos los documentos que estuvieran pendientes de aprobación. 

**01**. Acceder a la pestaña **Aprobación** como se muestra en el ítem [Acceder a la configuración de aprobación](#Plataforma❙Definircriteriosdeaprobaciónparacarpetaoparadocumento-Accederalaconfiguracióndeaprobación).

**02**. Activar la pestaña referente al nivel de aprobación a ser eliminado.

**03**. Activar el botón **Eliminar nivel**, situado junto a **Agregar nivel**.

¡Esté atento!

Esta documentación es válida desde la **actualización 1.6.5 - Liquid**. Si utiliza una actualización anterior, puede contener información diferente de la que usted ve en su plataforma.


<!-- anchors: Plataforma❙Definircriteriosdeaprobaciónparacarpetaoparadocumento-Hablandodedefinircriteriosdeaprobaciónparacarpetaoparadocumento..., Plataforma❙Definircriteriosdeaprobaciónparacarpetaoparadocumento-Accederalaconfiguracióndeaprobación, Plataforma❙Definircriteriosdeaprobaciónparacarpetaoparadocumento-Heredaraprobadoresdelacarpetaprincipal, Plataforma❙Definircriteriosdeaprobaciónparacarpetaoparadocumento-Agregarniveldeaprobación, Plataforma❙Definircriteriosdeaprobaciónparacarpetaoparadocumento-Eliminarelniveldeaprobación -->
