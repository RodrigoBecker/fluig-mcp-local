---
title: "Plataforma ❙ Cuentas"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=236430917"
scraped_at: "2026-03-09T05:21:30.704Z"
depth: 4
anchors: 11
child_links: 49
---

# Plataforma ❙ Cuentas

# Índice

****

## Hablando de cuentas...

Las cuentas se utilizan para controlar la matrícula de usuarios en los cursos disponibles. Pueden ser de dos tipos: Crédito o tiempo.

- **Créditos**: el control de matrícula para este tipo de cuenta es por créditos. La cuenta tiene un determinado número de créditos que se descuentan cada vez que el usuario se matricula en un curso que requiere créditos, es decir, tiene un costo de matrícula. Se puede realizar la recarga de créditos para la cuenta, como también definir un límite para esta, es decir, cuando el usuario agota todos sus créditos, pasa a utilizar el límite de la cuenta para poder matricularse en los cursos disponibles, dejando la cuenta con créditos negativos.En caso de anulación de la matrícula, los créditos se devuelven a la cuenta del usuario solo cuando aún no ha iniciado el curso. De lo contrario, no se devuelven los créditos, incluso si no ha completado el curso.Al matricularse en una ruta, el valor debitado de la cuenta del usuario es el costo de la ruta. Así, cuando se matricula en una capacitación por separado de esa misma ruta, los créditos no se debitan de nuevo.

- **Tiempo**: este tipo de cuenta le permite controlar las matrículas por el tiempo, es decir, tiene una fecha de caducidad. Durante el tiempo que la cuenta permanece activa, los usuarios vinculados a dicha cuenta se pueden matricular en cualquier ruta, capacitación o grupo.El administrador define el tiempo de caducidad de la cuenta. Si no se establece este tiempo, la cuenta permanece activa por tiempo indefinido, lo que les permite a los usuarios asociados a ella matricularse en cualquier ítem del catálogo, en cualquier momento.Cuando se utiliza este tipo de cuenta, no se realiza ningún débito al matricularse en cursos que requieren créditos, ya que el control es por tiempo y no por créditos.

Además de estos dos tipos de cuenta, también existe la cuenta estándar que utilizan todos los usuarios que no están asociados a ninguna cuenta específica.

![](/download/attachments/236430917/cuentas.PNG?version=4&modificationDate=1600713178713&api=v2)

### Ver cuentas existentes

---

**01.** En el menú principal, colocar el *mouse* sobre **Aprendizaje**.

**02.** Active **Administrar**.

**03.** Colocar el *mouse* sobre **Administrar**.

**04.** Active **Cuentas**.

**05.** Visualice todas las cuentas existentes.

La cuenta estándar se muestra en color azul y está resaltada con una estrella.

Se puede buscar una cuenta específica, desde el campo Buscar, situado en el borde superior izquierdo del Listado de cuentas, como también seleccionar la cantidad de cuentas que se deben mostrar por página: 10, 20 o 50.

****

** **

### Filtrar cuentas

---

**01.** En Filtrar por, active **Tipo**.

**02.** Seleccionar el tipo por el que desea que se filtren las cuentas.

Las opciones disponibles son:

- Todo.
- Tiempo.
- Crédito.

**03.** Luego, active **Situación**.

**04.** Seleccione la situación por la que se deben filtrar las cuentas.

Las opciones disponibles son:

- Todo.
- Activo.
- Inactivo.

**05.** Visualice las cuentas de acuerdo con los filtros definidos.

Para ver todas las cuentas de nuevo, solo debe deshacer los filtros definidos o seleccionar la opción Todo en ambos filtros.

### Crear cuenta

---

**01.** Active **Crear nueva cuenta**, situado en el borde superior derecho del cuadro Listado de cuentas.

**02.** Incluya la información solicitada.

La información solicitada es:

**Nombre**
Nombre para identificar la cuenta.

**Cuenta estándar**
Cuando está marcada, determina que la cuenta es estándar, es decir, todos los usuarios no asociados a una cuenta específica utilizan la cuenta estándar para efectuar las matrículas en ítems de los catálogos.

**La cuenta requiere aprobación de las matrículas**
Cuando está marcada, determina que las solicitudes de matrícula de los usuarios asociados a esta cuenta deben pasar la aprobación de su responsable.

**Tipo**
Manera en que la cuenta controlará las matrículas de los usuarios asociados a ella. Las opciones disponibles son:

- **Tiempo**: cuando se selecciona, determina que la cuenta tiene una fecha de caducidad y, después de caducar, sus usuarios ya no pueden efectuar las matrículas en los ítems disponibles en el catálogo.
- **Crédito**: cuando se selecciona, determina que la cuenta controlará las matrículas de sus usuarios a través de créditos, es decir, la cuenta tiene un determinado número de créditos que se pueden utilizar para efectuar las matrículas en ítems que tienen un costo de matrícula y que se descuentan a medida que las matrículas se hacen efectivas.

**Fecha de caducidad**
Fecha hasta la cual la cuenta permanecerá activa y permitirá que sus usuarios se matriculen en cualquier ítem disponible en el catálogo. Este campo solo se muestra cuando se establece que la cuenta es del tipo Tiempo.

**Días para notificar antes de caducar**
Número de días antes de la caducidad de la cuenta que se considera para empezar a emitir la notificación de caducidad al responsable. La emisión de la notificación se realiza por una rutina estándar que se ejecuta periódicamente en la plataforma. Se puede obtener más información en [Notificar caducidad de cuentas](https://tdn.totvs.com/pages/viewpage.action?pageId=279593858#Tareasest%C3%A1ndar-Notificarcaducidaddecuentas).
Este campo solo se muestra cuando se establece que la cuenta es del tipo Tiempo.

**Permite que la cuenta utilice límite (saldo negativo)**Cuando está marcada, determina que la cuenta puede quedar con saldo de créditos negativo. Este campo solo se muestra cuando se define que la cuenta es del tipo Crédito.

**Valor**
Valor límite de créditos negativos que puede tener la cuenta. Este campo solo se muestra cuando se marca la opción Permitir que la cuenta utilice límite (saldo negativo) en cuentas del tipo Crédito.

**03.** En Miembros, active **Agregar** para relacionar usuarios a la cuenta.

**04.** En la que se muestra, ubicar y seleccionar al usuario que se va a asociar a la cuenta.

Se puede ubicar el usuario deseado desde el campo Buscar, ubicado en el borde superior izquierdo de la ventana, o desde la paginación de los usuarios, con las flechas ubicadas en el borde inferior derecho.

También se puede seleccionar más de un usuario a la vez.

**05.** Active **Agregar**.

Para eliminar un usuario asociado a la cuenta, solo se debe activar el ícono **Eliminar**, ubicado a la derecha de la línea que corresponde al usuario.

**06.** En responsables, active **Agregar** para definir los responsables de la cuenta.

El responsable de la cuenta es el usuario que puede modificarla, es decir, desactivar, introducir créditos, incluir usuarios, aprobar las solicitudes de matrícula, si la cuenta lo requiere, entre otras acciones.

**07.** En la ventana que aparece, busque y seleccione al usuario que será el responsable de la cuenta.

Se puede ubicar el usuario deseado desde el campo Buscar, ubicado en el borde superior izquierdo de la ventana, o desde la paginación de los usuarios, con las flechas ubicadas en el borde inferior derecho.

También se puede seleccionar más de un usuario a la vez.

**08.** Active **Agregar**.

Para eliminar un usuario asociado a la cuenta, solo se debe activar el ícono **Eliminar**, ubicado a la derecha de la línea que corresponde al usuario.

**09.** Active **Guardar** para confirmar la creación de la cuenta.

### Editar cuenta

---

**01.** En el listado de cuentas, active el ícono **Editar**, situado a la derecha de la línea de la cuenta.

**02.** Modificar la información deseada. Los detalles sobre los campos mostrados se pueden obtener en la ruta Crear cuenta.

**03.** Active **Guardar**.

### Desactivar cuentas

---

**01.** En el listado de cuentas, active el ícono **Desactivar**, situado a la derecha de la línea de la cuenta.

**02.** En el mensaje que aparece, active **Sí** para confirmar la desactivación de la cuenta.

Al desactivar una cuenta todos los usuarios miembros se desvinculan de la misma.

No se permite desactivar la cuenta estándar de la empresa.

### Active cuentas

---

**01.** En el listado de cuentas, active el ícono **Active**, situado a la derecha de la línea de la cuenta.

### Eliminar cuenta

---

**01.** En el listado de cuentas, active el ícono **Eliminar**, situado a la derecha de la línea de la cuenta.

**02.** En el mensaje que aparece, active **Sí** para confirmar la eliminación de la cuenta.

No se puede eliminar la cuenta estándar de la empresa.

Tampoco se puede eliminar una cuenta en la que se efectuó alguna transacción de crédito y/o débito. En ese caso, solo se puede desactivar.

### Agregar créditos en la cuenta

---

Solo se pueden introducir créditos en cuentas que son del tipo Crédito.

****

**01.** En el listado de cuentas, active el ícono **Agregar**, situado a la derecha de la línea de la cuenta.

**02.** Incluir la información solicitada.

**Descripción**
Descripción para identificar la inclusión de créditos en la cuenta.

**Valor**
Valor de los créditos que se van a agregar a la cuenta. 

**03.** Active **Guardar** para realizar la inclusión de créditos en la cuenta.

### Visualice el resumen de la cuenta

---

**01. **En el listado de cuentas, active el ícono **Resumen**, situado a la derecha de la línea de la cuenta.

**02.** Visualice las transacciones realizadas en la cuenta.

Se puede determinar un período, igual o menor a 30 días, para visualizar el resumen de la cuenta. Solo debe incluir las fechas deseadas y activar **Buscar**.

También se pueden exportar los datos al activar **Exportar planilla**, ubicado en el borde superior derecho del cuadro Transacciones de la cuenta.

Para volver a la pantalla principal, active **Volver**.

¡Esté atento!

Esta documentación es válida a partir de la **actualización 1.6.3 –*****Snowflake***. Si utiliza una actualización anterior, puede contener información diferente de la que ve en su plataforma.


<!-- anchors: Plataforma❙Cuentas-Índice, Plataforma❙Cuentas-Hablandodecuentas..., Plataforma❙Cuentas-Vercuentasexistentes, Plataforma❙Cuentas-Filtrarcuentas, Plataforma❙Cuentas-Crearcuenta, Plataforma❙Cuentas-Editarcuenta, Plataforma❙Cuentas-Desactivarcuentas, Plataforma❙Cuentas-Activecuentas, Plataforma❙Cuentas-Eliminarcuenta, Plataforma❙Cuentas-Agregarcréditosenlacuenta, Plataforma❙Cuentas-Visualiceelresumendelacuenta -->
