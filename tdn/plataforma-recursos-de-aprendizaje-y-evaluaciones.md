---
title: "Plataforma ❙ Recursos de aprendizaje y evaluaciones"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=301173388"
scraped_at: "2026-03-09T05:21:26.763Z"
depth: 4
anchors: 31
child_links: 133
---

# Plataforma ❙ Recursos de aprendizaje y evaluaciones

# Índice

## Hablando de recursos de aprendizaje y evaluaciones...

A través de las opciones de permiso de aprendizaje y evaluaciones existentes en el Panel de Control, se puede liberar o restringir recursos para usuarios específicos, papeles o grupos de usuarios. Se puede, por ejemplo, ocultar recursos que por defecto son visibles o liberar recursos de administración para un usuario común.

Para que un usuario tenga acceso a un recurso, es necesario que este tenga permiso para visualizar la página y el *widget* de este recurso.

**Ejemplo**:
Utilizando el recurso Avisos, como ejemplo, serían necesarios los permisos:

- **Para visualizar la página Avisos**: al liberar este permiso, el usuario en cuestión podrá visualizar el recurso Avisos en el menú Aprendizaje y el contenido (listado de avisos existentes), siempre que tenga también permiso en el *widget* Avisos. En este ejemplo, si el usuario tiene solo permiso en la página Avisos, pero no lo tiene en el *widget* Avisos, este visualizará este recurso en el menú Aprendizaje; sin embargo, sin contenido, pues la página aparecerá en blanco.

- **Para visualizar el*****widget*****Avisos**: al liberar este permiso, el usuario en cuestión podrá visualizar este *widget* en cualquier página en la que exista, siempre que tenga también permiso para visualizar la página. En este ejemplo, si el usuario tiene solo permiso en el *widget* Avisos, pero no lo tiene en la página Avisos, este recurso no aparecerá en el menú Aprendizaje.

- **Para ejecutar acciones específicas**: al liberar permiso en acciones específicas, el usuario en cuestión podrá ejecutarlas. En ese caso, al activar, por ejemplo, el permiso Guardar de la gestión de avisos, el usuario podrá incluir y editar avisos; al activar el permiso Eliminar, este podrá eliminar los avisos existentes. Las acciones específicas se pueden hacer siempre y cuando el usuario tenga también permiso para visualizar el *widget* y la página de avisos, pues de lo contrario, no visualizará ni el recurso en sí ni las acciones específicas.

**Opciones de permisos en páginas y widgets**

Las opciones de permiso que existen para las páginas son las mismas para cada una de ellas. Lo mismo ocurre con los *widgets*.

Estos permisos están detallados en [Opciones de permisos en páginas](/pages/viewpage.action?pageId=301173405) y [Opciones de permiso en *widgets*](/pages/viewpage.action?pageId=301173411).

## Recursos de aprendizaje

Las páginas, los *widgets* y los permisos específicos de aprendizaje se listan a continuación.

### Menú aprendizaje

| Descripción | Tipo | Nombre del recurso | Opciones de permisos |  |
| --- | --- | --- | --- | --- |
| Descripción | Tipo | Nombre del recurso | Opciones de permisos |  |
|  | Página del ítem Plataforma ❙ Aprendizaje del menú principal, donde están agrupados los recursos de aprendizaje. | PAGE | Aprendizaje - menú aprendizaje (página) - pagelearning | Detalladas en Opciones de permiso en páginas. |

#### Mi aprendizaje

| Descripción | Tipo | Nombre del recurso | Opciones de permisos |  |
| --- | --- | --- | --- | --- |
| Descripción | Tipo | Nombre del recurso | Opciones de permisos |  |
|  | Página y widget del recurso Mi aprendizaje, perteneciente al ítem Aprendizaje del menú principal, que exhiben los ítems en los cuales el alumno está matriculado, su historial en grupos, rutas y capacitaciones y sus actividades extraclase. | PAGE | Mi aprendizaje - pagemyplan | Detalladas en Opciones de permiso en páginas. |
| WIDGET | Aprendizaje | Detalladas en Opciones de permiso en widgets. |  |  |

#### Tareas de aprendizaje

| Descripción | Tipo | Nombre del recurso | Opciones de permisos |  |
| --- | --- | --- | --- | --- |
| Descripción | Tipo | Nombre del recurso | Opciones de permisos |  |
|  | Página y widget del recurso Plataforma ❙ Tareas de aprendizaje, perteneciente al ítem Aprendizaje del menú principal. | PAGE | Tareas de aprendizaje - pagelearntasks | Detalladas en Opciones de permiso en páginas. |
| WIDGET | Tareas de aprendizaje | Detalladas en Opciones de permiso en widgets. |  |  |

#### Materias y grupos

| Descripción | Tipo | Nombre del recurso | Opciones de permisos |  |
| --- | --- | --- | --- | --- |
| Descripción | Tipo | Nombre del recurso | Opciones de permisos |  |
|   | Página y widget del recurso Plataforma ❙ Materias y grupos, perteneciente al ítem Aprendizaje del menú principal, que exhiben el catálogo de materias y grupos. | PAGE | Materias y grupos - pagecatalogdiscipline | Detalladas en Opciones de permiso en páginas. |
| WIDGET | Materias y grupos | Detalladas en Opciones de permiso en widgets. |  |  |
| Permisos específicos para las acciones de gestión del catálogo de materias y grupos. | LMSDIS | Aprendizaje - Catálogo de materias y grupos | Leer: cuando está activada, permite visualizar el catálogo de materias y grupos. Los ítems del catálogo se mostrarán según los permisos definidos en cada uno de ellos, inclusive teniendo en cuenta los permisos definidos en la carpeta raíz, o sea, si no fuera liberado, al menos, el permiso de lectura en la carpeta raíz, el catálogo se mostrará vacío, aunque la opción Leer esté activa.Ignorar restricciones: cuando está activada, permite visualizar el catálogo de materias y grupos como si fuera un usuario administrador, es decir, ignorando todas las restricciones y ausencia de permisos en los ítems. |  |
|  | Página y widget que muestran los detalles de una materia. | PAGE | Visualización de la materia - pagedisciplineview | Detalladas en Opciones de permiso en páginas. |
| WIDGET | Visión de la materia | Detalladas en Opciones de permiso en widgets. |  |  |
|  | Página y widget de ejecución de un grupo, es decir, que muestra los temas del grupo para los alumnos que están matriculados. | PAGE | Ejecución de grupos - pagelearningclass | Detalladas en Opciones de permiso en páginas. |
| WIDGET | Ejecución de grupos | Detalladas en Opciones de permiso en widgets. |  |  |
|  | Permiso específico para la gestión de la lista de espera de grupos. | LMSWAI | Aprendizaje - Administración de lista de espera | Acceder: cuando está activada, permite administrar la lista de espera de grupos. El usuario que tiene esta opción activa está apto para ser definido como responsable de administrar la lista de espera del grupo en el registro de la materia o del grupo, y puede visualizar las opciones Guardar para editar la prioridad del alumno en la lista y Eliminar para eliminar al alumno de la lista, en la página de gestión de la lista de espera de los grupos por los que es responsable de esta actividad. |

#### Rutas y capacitaciones

| Descripción | Tipo | Nombre del recurso | Opciones de permisos |  |
| --- | --- | --- | --- | --- |
| Descripción | Tipo | Nombre del recurso | Opciones de permisos |  |
|        | Página y widget del recurso rutas y capacitaciones, perteneciente al ítem Aprendizaje del menú principal, que muestran el catálogo de rutas y capacitaciones. | PAGE | Rutas y capacitaciones - pagecatalogtrainingtrack | Detalladas en Opciones de permiso en páginas. |
| WIDGET | Rutas y capacitaciones | Detalladas en Opciones de permiso en widgets. |  |  |
| Permisos específicos para las acciones de gestión del catálogo de rutas y capacitaciones. | LMSCAT | Aprendizaje - Catálogo de rutas y capacitaciones | Leer: cuando está activada, permite visualizar el catálogo de rutas y capacitaciones. Los ítems del catálogo se mostrarán según los permisos definidos en cada uno de ellos, inclusive teniendo en cuenta los permisos definidos en la carpeta raíz, o sea, si no fuera liberado, al menos, el permiso de lectura en la carpeta raíz, el catálogo se mostrará vacío, aunque la opción Leer esté activa.Ignorar restricciones: cuando está activada, permite visualizar el catálogo de rutas y capacitaciones como si fuera un usuario administrador, es decir, ignorando todas las restricciones y ausencia de permisos en los ítems. |  |
|  | Página y widget que muestran los detalles de una ruta o de una capacitación que existe en el catálogo.  | PAGE | Visión de la capacitación/ruta - pagetrainingtrackview | Detalladas en Opciones de permiso en páginas. |
| WIDGET | Visualización de rutas y capacitaciones | Detalladas en Opciones de permiso en widgets. |  |  |
|  | Página y widget de ejecución de una ruta o capacitación, es decir, que muestran los ítems de la ruta o de la capacitación a los alumnos que están matriculados. | PAGE | Ejecución de rutas y capacitaciones - pagelearningtrainingtrack | Detalladas en Opciones de permiso en páginas. |
| WIDGET | Ejecución y ruta y capacitación | Detalladas en Opciones de permiso en widgets. |  |  |

#### Administrar

| Descripción | Tipo | Nombre del recurso | Opciones de permisos |  |
| --- | --- | --- | --- | --- |
| Descripción | Tipo | Nombre del recurso | Opciones de permisos |  |
|  | Página que agrupa los recursos del ítem Plataforma ❙ Administrar perteneciente al ítem Aprendizaje del menú principal. | PAGE | Administrar - app__lms__learning__admin | Detalladas en Opciones de permiso en páginas. |

##### Contenidos

| Descripción | Tipo | Nombre del recurso | Opciones de permisos |  |
| --- | --- | --- | --- | --- |
| Descripción | Tipo | Nombre del recurso | Opciones de permisos |  |
|    | Página y widget del recurso Plataforma ❙ Contenidos, perteneciente al ítem Administrar, que por su parte, pertenece al ítem Aprendizaje del menú principal, que muestran los contenidos y las acciones que se pueden efectuar sobre ellos. | PAGE  | Contenidos - Contenidos - app__lms__learning__contents | Detalladas en Opciones de permiso en páginas. |
| WIDGET | Contenidos | Detalladas en Opciones de permiso en widgets. |  |  |
| Permisos específicos para las acciones de gestión de contenidos. | LMSCONT | Aprendizaje - Administración de contenidos | Leer: cuando está activada, permite visualizar la lista de contenidos existentes. Aunque el usuario tenga permiso para visualizar la página y el widget, si esta opción no está activa, este no visualizará los registros, es decir, el recurso se mostrará como si no existiera ningún contenido.Visualizar todos los contenidos: cuando está activada, permite visualizar todos los contenidos existentes, inclusive los que fueron definidos como particular. Los usuarios que tienen esta opción activa pueden visualizar Vista previa en la página de contenidos.Guardar: cuando está activada, permite incluir y editar contenidos. Los usuarios que tienen esta opción activa pueden visualizar las opciones Nuevo y Editar en la página de contenidos.Eliminar: cuando está activada, permite eliminar cualquier contenido existente. Los usuarios que poseen esta opción activa pueden visualizar la opción Eliminar en la página de contenidos. |  |

##### Certificados

| Descripción | Tipo | Nombre del recurso | Opciones de permisos |  |
| --- | --- | --- | --- | --- |
| Descripción | Tipo | Nombre del recurso | Opciones de permisos |  |
|  | Página y widget del recurso Plataforma ❙ Certificados, perteneciente al ítem Administrar, que por su parte, pertenece al ítem Aprendizaje del menú principal, que muestran los contenidos y las acciones que se pueden efectuar sobre ellos. | PAGE | Certificados - pagecertificates | Detalladas en Opciones de permiso en páginas. |
| WIDGET | Certificados | Detalladas en Opciones de permiso en widgets. |  |  |
| Permisos específicos para las acciones de gestión del catálogo de certificados. | LMSCER | Aprendizaje - Administración de certificados | Leer: cuando está activada, permite visualizar la lista de certificados existentes. Aunque el usuario tenga permiso para visualizar la página y el widget, si esta opción no está activa, este no visualizará los registros, es decir, el recurso se mostrará como si no existiera ningún certificado.Guardar: cuando está activada, permite incluir y editar certificados. Los usuarios que tienen esta opción activa pueden visualizar las opciones Nuevo, Editar, Activar/Desactivar en la página de certificados.Eliminar: cuando está activada, permite excluir certificados existentes. Los usuarios que poseen esta opción activa pueden visualizar la opción Eliminar en la página de certificados. |  |

##### Habilidades

| Descripción | Tipo | Nombre del recurso | Opciones de permisos |  |
| --- | --- | --- | --- | --- |
| Descripción | Tipo | Nombre del recurso | Opciones de permisos |  |
|  | Página y widget del recurso Plataforma ❙ Habilidades, perteneciente al ítem Administrar, que por su parte, pertenece al ítem Aprendizaje del menú principal, que muestran las habilidades y las acciones que se pueden efectuar sobre ellos. | PAGE | Habilidades - pageskills | Detalladas en Opciones de permiso en páginas. |
| WIDGET | Habilidades | Detalladas en Opciones de permiso en widgets. |  |  |
| Permisos específicos para las acciones de gestión de habilidades. | LMSSKL | Aprendizaje - Habilidades | Leer: cuando está activada, permite visualizar la lista de habilidades existentes. Aunque el usuario tenga permiso para visualizar la página y el widget, si esta opción no está activa, este no visualizará los registros, es decir, el recurso se mostrará como si no existiera ninguna habilidad. Guardar: cuando está activada, permite incluir y editar habilidades. Los usuarios que tienen esta opción activa pueden visualizar las opciones Nuevo y Editar en la página de habilidades.Eliminar: cuando está activada, permite excluir habilidades existentes. Los usuarios que tienen esta opción activa pueden visualizar la opción Eliminar en la página de habilidades. |  |

##### Configuraciones de rutas y capacitaciones

| Descripción | Tipo | Nombre del recurso | Opciones de permisos |  |
| --- | --- | --- | --- | --- |
| Descripción | Tipo | Nombre del recurso | Opciones de permisos |  |
|  | Página y widget del recurso Configuraciones de rutas y capacitaciones, perteneciente al ítem Administrar, que por su parte, pertenece al ítem Aprendizaje del menú principal, que muestran las configuraciones disponibles para rutas y capacitaciones. | PAGE | Configuración de rutas y capacitaciones - pagetrainingtrackconfiguration | Detalladas en Opciones de permiso en páginas. |
| WIDGET | Configuraciones de rutas y capacitaciones | Detalladas en Opciones de permiso en widgets. |  |  |

##### Cuentas

| Descrição | Tipo | Nombre del recurso | Opciones de permisos |  |
| --- | --- | --- | --- | --- |
| Descrição | Tipo | Nombre del recurso | Opciones de permisos |  |
|  | Página y widget del recurso Plataforma ❙ Cuentas, perteneciente al ítem Administrar, que por su parte, pertenece al ítem Aprendizaje del menú principal, que muestran las cuentas y las acciones que se pueden efectuar sobre ellas. | PAGE | Cuentas - app__lms__learning__accounts | Detalladas en Opciones de permiso en páginas. |
| WIDGET | Cuentas | Detalladas en Opciones de permiso en widgets. |  |  |
| Permisos específicos para las acciones de gestión de cuentas. | LMSACC | Aprendizaje - Administración de cuentas | Leer: cuando está activada, permite visualizar las cuentas de las cuales el usuario es responsable. Los usuarios que tienen esta opción activa pueden visualizar la opción Resumen, que permite generar un resumen de las cuentas por las cuales este es responsable.Leer todo: cuando está activada, permite visualizar todas las cuentas existentes, independientemente de ser o no responsable de ellas. Los usuarios que tienen esta opción activa pueden visualizar la opción Resumen, que permite generar un resumen de cualquier cuenta.Agregar créditos: cuando está activada, permite agregar créditos en cuentas del tipo Crédito independientemente de ser el responsable de ellas o no, es decir, depende de lo que fue definido en las opciones Leer y Leer todo. Los usuarios que tienen esta opción activa pueden visualizar la opción Agregar créditos en la página de cuentas.Guardar: cuando está activada, permite incluir y editar cuentas. Los usuarios que tienen esta opción activa pueden visualizar las opciones Nuevo y Editar en la página de cuentas.Desactivar: cuando está activada, permite desactivar cuentas independientemente de ser el responsable de ellas o no, es decir, depende de lo que fue definido en las opciones Leer y Leer todo. Los usuarios que tienen esta opción activa pueden visualizar la opción Desactivar en la página de cuentas. Reactivar: cuando está activada, permite reactivar cuentas independientemente de ser el responsable de ellas o no, es decir, depende de lo que fue definido en las opciones Leer y Leer todo. Los usuarios que tienen esta opción activa pueden visualizar la opción Reactivar en la página de cuentas.Eliminar: cuando está activada, permite eliminar cuentas independientemente de ser el responsable de ellas o no, es decir, depende de lo que fue definido en las opciones Leer y Leer todo. Los usuarios que tienen esta opción activa pueden visualizar la opción Eliminar en la página de cuentas. |  |

#### Avisos

| Descripción | Tipo | Nombre del recurso | Opciones de permisos |  |
| --- | --- | --- | --- | --- |
| Descripción | Tipo | Nombre del recurso | Opciones de permisos |  |
|   | Página y widget del recurso Plataforma ❙ Avisos, perteneciente al ítem Aprendizaje del menú principal, que muestran los avisos y las acciones que se pueden efectuar sobre ellos. | PAGE | Avisos - pageadvices | Detalladas en Opciones de permiso en páginas. |
| WIDGET | Avisos | Detalladas en Opciones de permiso en widgets. |  |  |
| Permisos específicos para las acciones de gestión de avisos. | LMSADV | Aprendizaje - Administración de avisos | Leer: cuando está activada, permite visualizar la lista de avisos existentes. Aunque el usuario tenga permiso para visualizar la página y el widget, si esta opción no está activa, este no visualizará los registros, es decir, el recurso se mostrará como si no existiera ningún aviso. Guardar: cuando está activada, permite incluir y editar avisos. Los usuarios que tienen esta opción activa pueden visualizar las opciones Nuevo y Editar en la página de avisos.Eliminar: cuando está activada, permite excluir avisos existentes. Los usuarios que tienen esta opción activa pueden visualizar la opción Eliminar en la página de avisos. |  |

#### Eventos

| Descripción | Tipo | Nombre del recurso | Opciones de permisos |  |
| --- | --- | --- | --- | --- |
| Descripción | Tipo | Nombre del recurso | Opciones de permisos |  |
|  | Página y widget del recurso Plataforma ❙ Eventos, perteneciente al ítem Aprendizaje del menú principal, que muestran los avisos y las acciones que se pueden efectuar sobre ellos. | PAGE | Eventos - pageevents | Detalladas en Opciones de permiso en páginas. |
| WIDGET | Eventos | Detalladas en Opciones de permiso en widgets. |  |  |

#### Agenda

| Descripción | Tipo | Nombre del recurso | Opciones de permisos |  |
| --- | --- | --- | --- | --- |
| Descripción | Tipo | Nombre del recurso | Opciones de permisos |  |
|  | Página y widget del recurso Plataforma ❙ Agenda, perteneciente al ítem Aprendizaje del menú principal, que muestran la agenda y las acciones que se pueden efectuar sobre ella. | PAGE | Agenda - pageschedule | Detalladas en Opciones de permiso en páginas. |
| WIDGET | Agenda | Detalladas en Opciones de permiso en widgets. |  |  |

#### Matrículas

| Descripción | Tipo | Nombre del recurso | Opciones de permisos |  |
| --- | --- | --- | --- | --- |
| Descripción | Tipo | Nombre del recurso | Opciones de permisos |  |
|  | Página que agrupa los recursos del ítem Matrículas que pertenecen al ítem Aprendizaje del menú principal. | PAGE | Matrículas - app__lms__learning__enrollments | Detalladas en Opciones de permiso en páginas. |

##### Gestión de matrículas

| Descripción | Tipo | Nombre del recurso | Opciones de permisos |  |
| --- | --- | --- | --- | --- |
| Descripción | Tipo | Nombre del recurso | Opciones de permisos |  |
|  | Página y widget del recurso Gestión de matrículas, perteneciente al ítem Matrículas, que a su vez, pertenece al ítem Aprendizaje del menú principal, que permite realizar acciones en matrículas. | PAGE | Gestión de matrículas - app__lms__learning__enrollments__manage | Detalladas en Opciones de permiso en páginas. |
| WIDGET | Gestión de matrículas | Detalladas en Opciones de permiso en widgets. |  |  |
| Permisos específicos para las acciones relacionadas con matricular usuarios. | LMSENC | Aprendizaje - Matrículas | Anular matrículas en capacitaciones/rutas: cuando se activa, permite anular la propia matrícula en capacitaciones y rutas que son parte del plan de aprendizaje. Los usuarios que tienen esta opción activa pueden visualizar la opción Anular matrícula, tanto en el propio plan de aprendizaje como en los ítems en los que están matriculados y se visualizaron desde el catálogo.Anular matrículas en grupos: cuando se activa, permite anular la propia matrícula en grupos que son parte del plan de aprendizaje. Los usuarios que tienen esta opción activa pueden visualizar la opción Anular matrícula, tanto en el propio plan de aprendizaje como en los grupos en los que están matriculados y se visualizaron desde el catálogo.Matricular todos los usuarios: cuando se activa, permite matricular otros usuarios en capacitaciones, rutas y grupos disponibles en el catálogo. Los usuarios que tienen esta opción activa pueden visualizar la opción Matricular usuarios en los ítems del catálogo y la pestaña Plataforma ❙ Matricular en el recurso Gestión de matrículas.Anular matrículas: cuando se activa, permite anular la matrícula de otros usuarios en grupos, rutas y capacitaciones, individualmente o en lote. |  |
| Permiso específico para gestión de matriculados. | LMSENR | Aprendizaje - Gestión de matrículas | Administrar: cuando se activa, permite gestionar matrículas de otros usuarios en rutas, capacitaciones y grupos. Los usuarios que tienen esta opción activa pueden visualizar la pestaña de Gestión de matriculados y las opciones Bloquear matrícula, Desbloquear matrícula y Anular matrícula. |  |
|  | Permiso específico para crear registros de matrícula a través de la API. | LMSHIS | Aprendizaje - Historial de matrículas | Crear historial de ejecución de matrículas por API: cuando se activa, permite crear un registro de matrícula, a través de la API, para un usuario que ejecutó una ruta, una capacitación o un grupo en otra plataforma de aprendizaje, dado que este ítem no está registrado en los catálogos de aprendizaje, lo que permite que el alumno tenga su historial completo. |

##### Modificar estatus de matrículas

| Descripción | Tipo | Nombre del recurso | Opciones de permisos |  |
| --- | --- | --- | --- | --- |
| Descripción | Tipo | Nombre del recurso | Opciones de permisos |  |
|   | Página y widget del recurso Modificar estatus de matrículas, perteneciente al ítem Matrículas, que por su parte, pertenece al ítem Aprendizaje del menú principal, que muestran el estado de las matrículas y las acciones que se pueden efectuar sobre ellas. | PAGE | Modificar estatus de matrículas - pageenrollchangestatus | Detalladas en Opciones de permiso en páginas. |
| WIDGET | Modificar estatus de matrícula | Detalladas en Opciones de permiso en widgets. |  |  |
| Permiso específico para la gestión del estado de las matrículas. | LMSMEN | Aprendizaje - Modificar estatus de matrículas | Situación: cuando está activada, permite modificar el estado de las matrículas en grupos. El usuario que tiene esta opción activa está apto para ser definido como responsable de modificar el status de matrículas en el registro de la materia o del grupo y puede visualizar las opciones Editar, para editar el puntaje del alumno, Aprobar alumno, Reprobar alumno y Anular matrícula en la página de modificar status de matrículas. |  |

##### Finalizar grupos

| Descripción | Tipo | Nombre del recurso | Opciones de permisos |  |
| --- | --- | --- | --- | --- |
| Descripción | Tipo | Nombre del recurso | Opciones de permisos |  |
|  | Página y widget del recurso Finalizar grupos, perteneciente al ítem Matrículas, que por su parte, pertenece al ítem Aprendizaje del menú principal, que exhiben los grupos que aún no fueron finalizados y que están bajo responsabilidad del usuario autenticado. | PAGE | Finalizar grupos - pagefinishclasses | Detalladas en Opciones de permiso en páginas. |
| WIDGET | Finalizar turma | Detalladas en Opciones de permiso en widgets. |  |  |
| Permiso específico para la finalización manual de grupos. | LMSMFN | Aprendizaje - Finalización manual de grupos | Acceder: cuando está activada, permite finalizar grupos manualmente, es decir, el usuario que posee este permiso activo está apto para ser definido como responsable de finalizar grupos manualmente en el registro de la materia o del grupo y puede visualizar la opción Finalizar grupo en la página de finalización de grupos. |  |

## Recursos de evaluaciones

Las páginas, los *widgets* y los permisos específicos de evaluaciones se listan a continuación.

### Menú evaluaciones

| Descripción | Tipo | Nombre del recurso | Opciones de permisos |  |
| --- | --- | --- | --- | --- |
| Descripción | Tipo | Nombre del recurso | Opciones de permisos |  |
|  | Página del ítem Plataforma ❙ Evaluaciones del menú principal, donde están agrupados los recursos de evaluaciones. | PAGE | Menú evaluaciones - pageassessment | Detalladas en Opciones de permiso en páginas. |

#### Evaluaciones

| Descripción | Tipo | Nombre del recurso | Opciones de permisos |  |
| --- | --- | --- | --- | --- |
| Descripción | Tipo | Nombre del recurso | Opciones de permisos |  |
|     | Página y widget del recurso Evaluaciones, perteneciente al ítem Evaluaciones del menú principal, que muestran las evaluaciones y las acciones que se pueden efectuar sobre ellas. | PAGE | Evaluaciones - pageassessment | Detalladas en Opciones de permiso en páginas. |
| WIDGET | Evaluaciones | Detalladas en Opciones de permiso en widgets. |  |  |
| Permisos específicos para las acciones de gestión de evaluaciones. | LMSGEA | Evaluaciones - Gestión de evaluaciones | Leer: cuando está activada, permite visualizar la lista de evaluaciones existentes. Aunque el usuario tenga permiso para visualizar la página y el widget, si esta opción no esté activa, este no visualizará los registros, es decir, el recurso se mostrará como si no existiera ninguna evaluación. Guardar: cuando está activada, permite incluir y editar evaluaciones. Los usuarios que tienen esta opción activa pueden visualizar las opciones Nuevo y Editar en la página de evaluaciones.Eliminar: cuando está activada, permite excluir evaluaciones existentes. Los usuarios que tienen esta opción activa pueden visualizar la opción Eliminar en la página de evaluaciones. |  |

#### Bloques

| Descripción | Tipo | Nombre del recurso | Opciones de permisos |  |
| --- | --- | --- | --- | --- |
| Descripción | Tipo | Nombre del recurso | Opciones de permisos |  |
|  | Página y widget del recurso Plataforma ❙ Bloques, perteneciente al ítem Evaluaciones del menú principal, que muestran los bloques de preguntas que se pueden reutilizar y las acciones que se pueden efectuar sobre ellas. | PAGE | Bloques - pageblocks | Detalladas en Opciones de permiso en páginas. |
| WIDGET | Bloques | Detalladas en Opciones de permiso en widgets. |  |  |
| Permisos específicos para las acciones de gestión de bloques de preguntas. | LMSBLO | Evaluaciones - Gestión de bloques | Leer: cuando está activada, permite visualizar la lista de bloques de preguntas existentes. Aunque el usuario tenga permiso para visualizar la página y el widget, si esta opción no está activa, este no visualizará los registros, es decir, el recurso se mostrará como si no existiera ningún bloque de preguntas. Guardar: cuando está activada, permite incluir y editar bloques. Los usuarios que tienen esta opción activa pueden visualizar las opciones Nuevo y Editar en la página de bloques.Eliminar: cuando está activada, permite excluir bloques existentes. Los usuarios que tienen esta opción activa pueden visualizar la opción Eliminar en la página de bloques. |  |

#### Temas y preguntas

| Descripción | Tipo | Nombre del recurso | Opciones de permisos |  |
| --- | --- | --- | --- | --- |
| Descripción | Tipo | Nombre del recurso | Opciones de permisos |  |
|  | Página y widget del recurso Plataforma ❙ Temas y preguntas, perteneciente al ítem Evaluaciones del menú principal, que muestran el catálogo de temas y preguntas. | PAGE | Temas y preguntas - pagecatalogquestions | Detalladas en Opciones de permiso en páginas. |
| WIDGET | Temas y preguntas | Detalladas en Opciones de permiso en widgets. |  |  |
| Permisos específicos para las acciones de gestión del catálogo del catálogo de temas y preguntas. | LMSTOP | Evaluaciones - Catálogo de preguntas | Leer: cuando está activada, permite visualizar el catálogo de temas y preguntas. Los ítems del catálogo se mostrarán según los permisos definidos en cada uno de ellos, inclusive teniendo en cuenta los permisos definidos en la carpeta raíz, o sea, si no fuera liberado, al menos, el permiso de lectura en la carpeta raíz, el catálogo se mostrará vacío, aunque la opción Leer esté activa.Ignorar restricciones: cuando está activada, permite visualizar el catálogo de temas y preguntas como si fuera un usuario administrador, es decir, ignorando todas las restricciones y ausencia de permisos en los ítems. |  |

#### Grupos de alternativas

| Descripción | Tipo | Nombre del recurso | Opciones de permisos |  |
| --- | --- | --- | --- | --- |
| Descripción | Tipo | Nombre del recurso | Opciones de permisos |  |
|  | Página y widget del recurso Plataforma ❙ Grupos de alternativas, perteneciente al ítem Evaluaciones del menú principal, que muestran los grupos de alternativas y las acciones que se pueden efectuar sobre ellas.. | PAGE | Grupos de alternativas - pagealternativesgroups | Detalladas en Opciones de permiso en páginas. |
| WIDGET | Grupos de alternativas | Detalladas en Opciones de permiso en widgets. |  |  |
| Permisos específicos para las acciones de gestión de grupos de alternativas. | LMSALG | Evaluaciones - Grupo de alternativas | Leer: cuando está activada, permite visualizar la lista de grupos de alternativas evaluaciones. Aunque el usuario tenga permiso para visualizar la página y el widget, si esta opción no está activa, este no visualizará los registros, es decir, el recurso se mostrará como si no existiera ningún grupo de alternativas. Guardar: cuando está activada, permite incluir y editar grupos de alternativas. Los usuarios que tienen esta opción activa pueden visualizar las opciones Nuevo y Editar en la página de grupos de alternativas.Eliminar: cuando está activada, permite eliminar grupos de alternativas existentes. Los usuarios que tienen esta opción activa pueden visualizar la opción Eliminar en la página de grupos de alternativas. |  |

#### Corrección de preguntas

| Descripción | Tipo | Nombre del recurso | Opciones de permisos |  |
| --- | --- | --- | --- | --- |
| Descripción | Tipo | Nombre del recurso | Opciones de permisos |  |
|  | Página y widget del recurso Corrección de preguntas, perteneciente al ítem Evaluaciones del menú principal, que muestran las preguntas de ensayo de evaluaciones y las acciones que se pueden efectuar sobre ellas. | PAGE | Corrección de preguntas - pagequestioncorrection | Detalladas en Opciones de permiso en páginas. |
| WIDGET | Corregir preguntas de ensayo | Detalladas en Opciones de permiso en widgets. |  |  |

#### Historial de evaluaciones

| Descripción | Tipo | Nombre del recurso | Opciones de permisos |  |
| --- | --- | --- | --- | --- |
| Descripción | Tipo | Nombre del recurso | Opciones de permisos |  |
|  | Página y widget del recurso Plataforma ❙ Historial de evaluaciones, perteneciente al ítem Evaluaciones del menú principal, que muestran las aplicaciones de evaluaciones por usuario. | PAGE | Historial de evaluaciones - pagehistoricalassessments | Detalladas en Opciones de permiso en páginas. |
| WIDGET | Historial de evaluaciones | Detalladas en Opciones de permiso en widgets. |  |  |
| Permiso específico para visualizar el historial de la aplicación de evaluaciones. | LMSUAHV | Evaluaciones - Historial de evaluaciones | Visualizar el historial de todos los usuarios de la misma empresa: cuando está activado, permite visualizar el historial de ejecución de evaluaciones de cualquier usuario de la misma empresa. Los usuarios que tienen esta opción activa pueden realizar una búsqueda de un alumno específico ya sea de la misma empresa que la suya o visualizar el historial de este alumno. |  |

#### Programación de evaluaciones

| Descripción | Tipo | Nombre del recurso | Opciones de permisos |  |
| --- | --- | --- | --- | --- |
| Descripción | Tipo | Nombre del recurso | Opciones de permisos |  |
|  | Página y widget del recurso Programación de evaluaciones, perteneciente al ítem Evaluaciones del menú principal, y que muestran las aplicaciones de evaluaciones por usuario. | PAGE | Programación de evaluaciones - pagescheduleassessments | Detalladas en Opciones de permiso en páginas. |
| WIDGET | Programación de evaluaciones | Detalladas en Opciones de permiso en widgets. |  |  |
| Permisos específicos para las acciones de gestión de la programación de la aplicación de evaluaciones. | LMSAS | Evaluaciones - Programación de evaluaciones | Leer: cuando está activada, permite visualizar la lista programación de evaluaciones existentes. Aunque el usuario tenga permiso para visualizar la página y el widget, si esta opción no está activa, este no visualizará los registros, es decir, el recurso se mostrará como si no existiera ninguna programación.Guardar: cuando está activada, permite incluir y editar programación de evaluaciones. Los usuarios que tienen esta opción activa pueden visualizar las opciones Nuevo y Editar en la página de programación de evaluaciones.Anular: cuando está activada, permite anular programaciones de evaluaciones existentes. Los usuarios que tienen esta opción activa pueden visualizar las opciones Anular en la página de programación de evaluaciones. |  |

## Widgets avulsos

| Descripción | Tipo | Nombre del recurso | Opciones de permisos |  |
| --- | --- | --- | --- | --- |
| Descripción | Tipo | Nombre del recurso | Opciones de permisos |  |
|  | Widget que exhibe las rutas y las capacitaciones que el usuario introdujo en su lista de deseos y que se puede introducir en páginas para personalizarlas, en Home, por ejemplo. | WIDGET | Lista de deseos | Detalladas en Opciones de permiso en widgets. |
|  | Widget que exhibe la evolución del usuario en los grupos, rutas y capacitaciones en los que está matriculado y que se puede introducir en páginas para personalizarlas, en Home, por ejemplo. | WIDGET | Evolución | Detalladas en Opciones de permiso en widgets. |
|  | Widget que exhibe los logros que el usuario alcanzó al ejecutar rutas y capacitaciones, y que participó de grupos y que se pueden introducir en páginas para personalizarlas, en Home, por ejemplo. | WIDGET | Logros | Detalladas en Opciones de permiso en widgets. |
|  | Widget que exhibe los detalles de los logros del usuario, así como las habilidades logradas y que se pueden introducir en páginas para personalizarlas, en Home, por ejemplo. | WIDGET | Detalles de logros | Detalladas en Opciones de permiso en widgets. |
|  | Widget que exhibe los avisos pertinentes a los grupos de materias, en los cuales el usuario está matriculado y que se pueden introducir en páginas para personalizarlas, en Home, por ejemplo. | WIDGET | Panel de avisos | Detalladas en Opciones de permiso en widgets. |

¡Esté atento!

Esta documentación es válida a partir de la actualización 1.6.5** – Liquid**. Si utiliza una actualización anterior, puede que contenga información diferente de la que ve en su plataforma.


<!-- anchors: Plataforma❙Recursosdeaprendizajeyevaluaciones-Índice, Plataforma❙Recursosdeaprendizajeyevaluaciones-Hablandoderecursosdeaprendizajeyevaluaciones..., Plataforma❙Recursosdeaprendizajeyevaluaciones-Recursosdeaprendizaje, Plataforma❙Recursosdeaprendizajeyevaluaciones-Menúaprendizaje, Plataforma❙Recursosdeaprendizajeyevaluaciones-Miaprendizaje, Plataforma❙Recursosdeaprendizajeyevaluaciones-Tareasdeaprendizaje, Plataforma❙Recursosdeaprendizajeyevaluaciones-Materiasygrupos, Plataforma❙Recursosdeaprendizajeyevaluaciones-Rutasycapacitaciones, Plataforma❙Recursosdeaprendizajeyevaluaciones-Administrar, Plataforma❙Recursosdeaprendizajeyevaluaciones-Contenidos, Plataforma❙Recursosdeaprendizajeyevaluaciones-Certificados, Plataforma❙Recursosdeaprendizajeyevaluaciones-Habilidades, Plataforma❙Recursosdeaprendizajeyevaluaciones-Configuracionesderutasycapacitaciones, Plataforma❙Recursosdeaprendizajeyevaluaciones-Cuentas, Plataforma❙Recursosdeaprendizajeyevaluaciones-Avisos, Plataforma❙Recursosdeaprendizajeyevaluaciones-Eventos, Plataforma❙Recursosdeaprendizajeyevaluaciones-Agenda, Plataforma❙Recursosdeaprendizajeyevaluaciones-Matrículas, Plataforma❙Recursosdeaprendizajeyevaluaciones-Gestióndematrículas, Plataforma❙Recursosdeaprendizajeyevaluaciones-Modificarestatusdematrículas, Plataforma❙Recursosdeaprendizajeyevaluaciones-Finalizargrupos, Plataforma❙Recursosdeaprendizajeyevaluaciones-Recursosdeevaluaciones, Plataforma❙Recursosdeaprendizajeyevaluaciones-Menúevaluaciones, Plataforma❙Recursosdeaprendizajeyevaluaciones-Evaluaciones, Plataforma❙Recursosdeaprendizajeyevaluaciones-Bloques, Plataforma❙Recursosdeaprendizajeyevaluaciones-Temasypreguntas, Plataforma❙Recursosdeaprendizajeyevaluaciones-Gruposdealternativas, Plataforma❙Recursosdeaprendizajeyevaluaciones-Correccióndepreguntas, Plataforma❙Recursosdeaprendizajeyevaluaciones-Historialdeevaluaciones, Plataforma❙Recursosdeaprendizajeyevaluaciones-Programacióndeevaluaciones, Plataforma❙Recursosdeaprendizajeyevaluaciones-Widgetsavulsos -->
