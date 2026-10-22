---
title: "Plataforma | Actualización 1.5.3"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=208340356"
scraped_at: "2026-03-09T05:39:24.294Z"
depth: 4
anchors: 6
child_links: 40
---

# Plataforma | Actualización 1.5.3

Vea a continuación las novedades de la actualización 1.5.3 de fluig:

## Arquitectura

**Control de versiones de archivos CSS y JS de la plataforma**

Se perfeccionó la forma en cómo la plataforma carga sus archivos CSS y JS. Ahora se emplea un control de versión con la finalidad de garantizar que, al actualizar la plataforma hacia una nueva versión, los archivos CSS y JS que ya están en el cache del navegador también sean actualizados, evitando inconsistencias debidas a la utilización de versiones antiguas de estos archivos.

Más información

Para usted que es desarrollador de la plataforma fluig también creamos una técnica para hacer que sus componentes también se actualicen sin depender del caché del navegador. ¡Sepa más sobre [*Cache busting*](https://tdn.totvs.com/x/9EslD) y utilícelo ahora en sus desarrollos!

## ECM

**¿Se cayó la conexión a la mitad del envío de un archivo grande? Retorne los uploads de donde paró con Connect**

Realizar *upload* de grandes archivos ahora es más práctico y dinámico. Con fluig Connect ahora usted posee el control de los *uploads*, permitiendo hacer una pausa en el progreso y continuar posteriormente, en el momento que lo desee, sin tener que esperar la finalización de un *upload* de la fila de envío. Además, si la conexión cae durante el envío de grandes archivos, fluig Connect retorna  donde paró, haciendo más rápido y barato el envío de los archivos.

Procedimiento de actualización

Actualizar fluig Connect para poder emplear este nuevo recurso es muy fácil, basta obtener el soporte físico actualizado en el [portal de clientes](https://suporte.totvs.com/download) y seguir las orientaciones.

![](/download/attachments/208340356/FLUIGINV-2812.png?version=1&modificationDate=1445889196000&api=v2)

## LMS

**¡Más datasets de Aprendizaje y Evaluaciones!**

En esta nueva actualización, ponemos a disposición nuevos *datasets* de aprendizaje y evaluaciones, que puede utilizar en sus formularios, portales e informes. Vea la lista completa a continuación:

- [Ejecución de Evaluaciones de Pre-Prueba](https://tdn.totvs.com/display/fluig/Datasets+internos+Fluig#DatasetsinternosFluig-assessmentApplicationCatalogPreExamDataset-ExecuçãodeAvaliaçõesdePré-Teste);
- [Ejecución de Evaluaciones de Post-Prueba](https://tdn.totvs.com/display/fluig/Datasets+internos+Fluig#DatasetsinternosFluig-assessmentApplicationCatalogPosExamDataset-ExecuçãodeAvaliaçõesdePós-Teste);
- [Ejecución de Evaluaciones de Reacción](https://tdn.totvs.com/display/fluig/Datasets+internos+Fluig#DatasetsinternosFluig-assessmentApplicationCatalogReactionExamDataset-ExecuçãodeAvaliaçõesdeReação);
- [Ejecución de Contenido](https://tdn.totvs.com/display/fluig/Datasets+internos+Fluig#DatasetsinternosFluig-contentLogDataset-ExecuçãodeConteúdos);
- [Detalles de Progreso de Rutas](https://tdn.totvs.com/display/fluig/Datasets+internos+Fluig#DatasetsinternosFluig-enrollmentProgressDetailByTrackDataset-DetalhesdeAndamentodeTrilhas);
- [Detalles de Progreso de Entrenamiento](https://tdn.totvs.com/display/fluig/Datasets+internos+Fluig#DatasetsinternosFluig-enrollmentProgressDetailByTrainingDataset-DetalhesdeAndamentodeTreinamentos).

Más información

Para obtener más información acerca de *datasets* internos, ingrese a [*Datasets* internos fluig](https://tdn.totvs.com/display/fluig/Datasets+internos+Fluig).

Ejemplos de uso

Vea algunos ejemplos de informes utilizando los nuevos *datasets* haciendo clic [aquí](https://git.fluig.com/projects/SAMPLES/repos/sample-lms-reports/browse).

**¡Matricule varios alumnos en grupos o capacitaciones por grupos!**

 Los grupos en fluig son excelentes y usted ya los emplea para muchas cosas. Ustedes lo solicitaron y nosotros lo entregamos. Ahora usted puede matricular a todas las personas que pertenecen a un grupo en capacitaciones o grupos a la vez. Así: ¡sencillo y fácil!

Para eso, basta acceder al recurso **Matricular usuarios** y seleccionar uno o más grupos a ser matriculados.

![](/download/attachments/208340356/FLUIGINV-2967.PNG?version=1&modificationDate=1445887119000&api=v2)

## Social

** Exporte su historial de Messaging**

Como usted sabe, *Messaging* no para de evolucionar. Muchas veces las conversaciones son tan importantes que necesitan ser guardadas como actas de reunión o de acuerdos. Pensando en eso, ahora es posible exportar el historial de mensajes mediante el método de exportación liberado en API y en SDK Javascript.

Vea más detalles

Acceda al Componente fluig *Messaging* y vea más detalles sobre esa nueva posibilidad.

**Búsqueda de contenido privado a partir de #tags**

Ahora es posible efectuar búsqueda a partir de #tags de publicaciones creadas en comunidades privadas cuando el usuario es un participante de ellas.

Importante

Es necesario volver a indexar el contenido para que la búsqueda considere la información de publicaciones privadas.

![](/download/attachments/208340356/SOCIALECMSUST-4919-2.PNG?version=1&modificationDate=1445889050000&api=v2)

## WCM

**Búsqueda de imágenes para publicación**

Se alteró el orden de *deploy* de los artefactos de fluig para solucionar la inconsistencia relacionada a la búsqueda de imágenes para publicación. Ahora primero se inician todos los artefactos estándar de fluig, después se inician los artefactos desarrollados sobre la plataforma.

¡Esté atento!

En caso de que los *widgets* desarrollados sobre la plataforma presenten alguna inconsistencia al iniciar fluig, es posible que exista un conflicto con las bibliotecas que emplea fluig. Para resolver la situación, verifique el tema **Evitar conflicto de dependencias con fluig** en [Cómo crear un *widget* que busque contenido](https://tdn.totvs.com/pages/viewpage.action?pageId=185735401).

**Nuevos widgets disponibles: vea su ERP dentro de fluig**

Fluig cuenta con dos nuevos *widgets* que permitirán que usted visualice ERPs que utilicen la nueva tecnología Framework HTML dentro de él:

- Aplicación ERP: permite el uso de páginas completas de ERP;
- Container ERP: hace posible incluir *widgets* de ERP en las páginas de fluig, permitiendo la creación de paneles o la inclusión en páginas, pudiendo presentar información como una comunidad, por ejemplo.

Actualmente los ERPs de TOTVS todavía no liberaron esas rutinas, ¡pero al actualizar fluig 1.5.3 usted ya estará listo para ejecutar rutinas de ERP directamente de fluig!

Más información

Obtenga más información en [*Widgets* Aplicación ERP y Container ERP](https://tdn.totvs.com/x/Goc3D).

![](/download/attachments/208340356/FLUIGINV-2725-1.png?version=1&modificationDate=1445889079000&api=v2)

![](/download/attachments/208340356/FLUIGINV-2725-2.png?version=1&modificationDate=1445889089000&api=v2)

## Correcciones

En esta sesión hacemos una lista de algunos *bugs* que eliminamos en esta actualización para asegurar que todo funcione sin problemas en su plataforma.

- Exhibición de usuarios al mover una solicitud cuando se configura un mecanismo de atribución por Grupo de usuarios.

- Ahora es más rápido el movimiento de solicitudes en la Central de tareas.

- Visualización de publicación realizada en una comunidad en el *timeline* del publicador por otros usuarios que también participan en la comunidad.

- Exhibición del usuario que asumió una solicitud con mecanismo de atribución para grupo en el informe de solicitudes cuando está marcada la opción “Incluir datos de las actividades”.

- Importación de *widgets* a partir de la Central de componentes con la puerta *offset*modificada. Esta puerta está configurada en el archivo “standalone.xml” – que está en el directorio <INSTALAÇÃO_FLUIG>\jbos\standalone\configuration – y se utiliza para alterar las puertas estándares utilizadas por el producto.

- Duplicación de tareas al crear una nueva versión y convertir un proceso que posee actividades con mecanismo de atribución por *pool* de papel.

- Utilización de los *widgets* que componen el Kit Intranet en entornos donde el banco de datos es Oracle.

- Exhibición del número de los subprocesos en los complementos de la solicitud después de ser finalizados.

- Importación de procesos provenientes de ECM 3.0 que poseen mecanismo de atribución por grupos y plazo de conclusión en fluig Studio.

- Envío del e-mail de invitación a usuarios para que accedan a la plataforma.

- Exhibición del número total de visualizaciones de un artículo considerando todas sus versiones.

- Optimizada la exhibición del listado de comunidades al editar una nube de relación, tornándola la más rápida.

- Búsqueda por usuario al mover una solicitud de un proceso que contiene un mecanismo de atribución por grupos configurado.

- Impresión de copia controlada de documentos cuando se utiliza el visualizador interno y el navegador Internet Explorer versión 11.

- Movimiento de solicitudes de un proceso que contiene dos actividades automáticas en secuencia y la actividad posterior a las automáticas posee un mecanismo de atribución configurado para retornar sólo un usuario.

- Consulta de solicitudes informando un intervalo de números de solicitudes para ser considerado en el filtro.

- Identificação de documentos como já indexados ou não ao publicá-los, ao efetuar a indexação manual a partir do Painel de Controle ou automática pelo Agendador de tarefas.

- Actualización del contenido de un artículo en el *widget* Mural de avisos después de editarlo en la comunidad donde está publicado, incluso cuando su versión/revisión no es alterada.

- Movimiento de solicitudes después de una actividad automática cuando en su ejecución no se presenta la pantalla de selección de usuarios.

- Conversión de documentos al realizar la migración de ECM 3.0 hacia fluig 1.5.2.

- Exhibición del realce en amarillo de la tarea que está en ejecución en el diagrama de procesos que contiene más de un subproceso en secuencia.

- Verificación de la matrícula del usuario al incluir registros en un formulario mediante *Web service*.

- Edición de usuarios cuando existen espacios en blanco al final de los campos obligatorios en un entorno que fue convertido de ECM 3.0 para fluig.

- Eliminación de la palabra restringida cuando es la única registrada en la plataforma.

- Exhibición del listado de usuarios en la pantalla de selección al mover una solicitud para una actividad automática.

- Movimiento de solicitudes para una actividad automática cuando el mecanismo de atribución configurado es por campo de formulario.

- Redireccionamiento de la dirección “http://{servidor}:{porta}/portal/wcm” para o “http://{servidor}:{porta}/portal/p/wcm/home”, permitiendo realizar la autenticación en la plataforma.

- Ordenación de las noticias del Kit Intranet cuando se emplea el banco de datos SQL *Server*.

- Exhibición de quienes cumplen años en el mes, ordenados por día de cumpleaños junto con su foto de fluig – cuando el usuario de RM posee perfil con foto – en el Kit Intranet cuando hay integración con RM.

- Movimiento de solicitudes después de visualizar o editar sus anexos y retorno para la Central de Tareas después del movimiento.

- Conversión de procesos de ECM hacia fluig cuando existe una actividad FIM entre un FORK y un JOIN.

- Validación para verificar si el servicio de *Realtime* está al aire y si la empresa utiliza la notificación, respetando la regla original, o sea, si la empresa no tiene el parámetro activo, se asume que emplea *Realtime*.

- Autenticación de usuarios de aplicaciones mediante el protocolo OAuth, que ahora poseen contraseña.Más información Para obtener más información sobre el usuario de aplicación, acceda a [fluig API](https://tdn.totvs.com/x/d4RXBQ).

- Movimiento de solicitudes de un proceso que contiene un subproceso que fue eliminado y sustituido por otro.

- Ejecución de post prueba de una capacitación después de visualizarla por completo y finalizarla.

- Envío de datos de procesos hacia Analytics cuando existe una actividad automática seguida de una actividad en la que la opción "Selecciona Colaboradores" está configurada como "Siempre" o "Cuando haya más de una opción", o sea, siempre que se presenta la selección de colaborador responsable por la tarea después de la automática.

- Duplicidad de artefactos “monitor.war” que impedía el acceso a Home de la plataforma, presentando una inconsistencia.

- Actualización de fluig en entornos que utilizan el protocolo HTTPS.

- Visualización del historial de solicitudes de procesos que fueron convertidos y que tienen subproceso.

- Eliminación de registro de formulario cuando está marcada la opción "Modificar todas las versiones del evento" en la exportación del formulario.


<!-- anchors: Plataforma|Actualización1.5.3-Arquitectura, Plataforma|Actualización1.5.3-ECM, Plataforma|Actualización1.5.3-LMS, Plataforma|Actualización1.5.3-Social, Plataforma|Actualización1.5.3-WCM, Plataforma|Actualización1.5.3-Correcciones -->
