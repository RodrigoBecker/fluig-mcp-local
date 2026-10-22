---
title: "Plataforma ❙ Mecanismos de atribución"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=977190518"
scraped_at: "2026-03-09T05:15:18.187Z"
depth: 4
anchors: 40
child_links: 58
---

# Plataforma ❙ Mecanismos de atribución

Consulte la documentación correcta:

Esta documentación se refiere al nuevo editor de procesos de la plataforma. Si está utilizando el editor de procesos actual, acceda a [Configurar mecanismo de atribución](/pages/viewpage.action?pageId=268806763).

IDIOMA

# Hablando de mecanismos de atribución...

---

Los mecanismos de atribución son instrumentos que permiten definir las posibles personas que pueden ser responsables en un proceso, de acuerdo con los criterios establecidos por el propio mecanismo elegido.

Los mecanismos pueden ser utilizados para:

- **Definir a los gestores del proceso**: configurado en el propio [proceso](https://tdn.totvs.com/pages/viewpage.action?pageId=964585634#Plataforma%E2%9D%99Editordeproceso-Definirgestorparaelproceso), permite definir quiénes son las personas que tendrán el poder de representar a cualquier otra persona involucrada en el proceso, así como recibir notificaciones de seguimiento de las solicitudes.

- **Definir quién puede abrir solicitudes del proceso**: configurado en la etapa inicial del proceso, componente [Inicio](/pages/viewpage.action?pageId=975770103), permite definir quiénes son las personas que pueden abrir solicitudes del proceso.

- **Definir los responsables por cada etapa del proceso**: configurado en cada etapa del proceso, componente [Actividad](/pages/viewpage.action?pageId=976136505), permite definir quiénes son las personas que pueden ser responsables por recibir la solicitud cuando llegue a cada una de las etapas del proceso.

¡Importante!

Cuando no hay un mecanismo de atribución configurado en una etapa del proceso:

- **Si fuera la etapa inicial**: cualquier persona con registro activo en la plataforma puede abrir solicitudes de este proceso.

- **si fuera una etapa común**: al mover la solicitud a esta etapa, es necesario seleccionar a una persona para recibirla, siendo permitido seleccionar a cualquier persona con registro activo en la plataforma.

![](/download/attachments/977190518/mecanismos-de-atribui%C3%A7%C3%A3o.png?version=2&modificationDate=1755195831713&api=v2)

## Objetivo de los mecanismos

---

Los mecanismos de atribución tienen como principal objetivo dirigir las solicitudes de procesos de forma automatizada, facilitando la atribución de responsabilidades.

Buscan agilizar el seguimiento de las solicitudes, atribuyendo cada etapa a los respectivos responsables, evitando puntos críticos, distribuyendo las etapas entre grupos de personas y definiendo responsabilidades claras.

## Tipos de mecanismos

---

Por estándar, existen cinco tipos de mecanismos de atribución disponibles para uso actualmente: Cualquier persona, Grupo específico, Papel específico, Por campo de formulario y Persona específica.

A continuación, se detalla el funcionamiento de cada uno de los mecanismos.

### Cualquier persona

---

Este mecanismo permite definir que cualquier persona con registro activo en la plataforma puede ser la responsable de la etapa en la que fue configurado, es decir, cualquier persona puede recibir la solicitud cuando sea enviada a esa etapa o cualquier persona puede abrir solicitudes del proceso, en caso de ser la etapa inicial.

Cuando la solicitud sea movida de la etapa anterior a la etapa que tiene este mecanismo configurado, es necesario seleccionar a una persona para recibirla.

Nota:

Este mecanismo no puede ser utilizado en la definición de gestor del proceso.

BENEFICIOS DEL USO
Ofrece flexibilidad para procesos simples o de bajo impacto, donde el propio solicitante sabe a quién debe enviar la solicitud.

CUIDADOS CON EL USO
No se recomienda para etapas críticas o de alta prioridad, debido a la falta de responsabilidad clara, o para etapas que involucran datos confidenciales.

EJEMPLO DE USO
En un proceso de **Soporte técnico** para el área de TI, se permite que cualquier persona que encuentre dificultades o tenga algún problema con cualquier herramienta utilizada en la empresa abra un ticket, que puede ser de error, de permiso, de duda, solicitando ayuda, etc.

En este caso, podemos definir el mecanismo de atribución de esta etapa, componente [Inicio](/pages/viewpage.action?pageId=975770103) del proceso, como:

| Etapa | Tipo de mecanismo |
| --- | --- |
| Etapa | Tipo de mecanismo |
| Abrir ticket | Cualquier persona |

→ Significa que cualquier persona de la empresa puede abrir un ticket para solicitar soporte.

****

        Your browser does not support the HTML5 video element

### Grupo específico

---

Este mecanismo permite definir:

- **En la gestión del proceso**: que solo un grupo específico de personas son los gestores del proceso, es decir, pueden representar a cualquier otra persona involucrada en el proceso, así como recibir notificaciones de seguimiento de las solicitudes.

- **En las etapas del proceso**: que solo un grupo específico de personas son los responsables de la etapa en la que se ha configurado, es decir, solo estas personas pueden recibir la solicitud cuando se envíe a esa etapa o solo estas personas pueden abrir solicitudes del proceso, en caso de que sea la etapa inicial.

Al seleccionar este mecanismo en la gestión del proceso o en la configuración de una etapa, es necesario informar cuál es el grupo específico de personas.

A continuación, para la etapa, también es necesario definir cómo debe ser su ejecución, si será individual o conjunta.

Nota:

La forma de ejecución, individual o conjunta, no está disponible para la definición en la etapa inicial del proceso, ya que la solicitud solo puede ser abierta por una única persona, ni para la definición de gestor del proceso.

#### Individual

---

La etapa debe ser ejecutada por una única persona, es decir, solo una persona del grupo específico debe ejecutar esta etapa. En este caso, también es necesario definir si solo una persona del grupo debe recibir la solicitud cuando esta sea movida o si la solicitud debe enviarse a todas las personas del grupo y la primera que la asuma se convierte en la responsable de ejecutar la etapa:

- **Selección de una persona del grupo**: cuando se mueva la solicitud de la etapa anterior a la etapa que tiene este mecanismo y esta forma de ejecución configurados, es necesario seleccionar una persona del grupo para recibirla.

- **Envío a todos del grupo (pool)**: cuando la solicitud sea movida de la etapa anterior a la etapa que tiene este mecanismo y esta forma de ejecución configurados, será enviada automáticamente a todas las personas del grupo y la primera que la asuma se convierte en la responsable de ejecutar esta etapa.

#### Conjunta

---

La etapa debe ser ejecutada por varias personas, es decir, más de una persona del grupo específico debe ejecutar la etapa. En este caso, es necesario definir, también, si varias personas del grupo deben recibir la solicitud cuando se mueva o si la solicitud debe enviarse a todas las personas del grupo para que pueda ser ejecutada por cualquiera hasta que se alcance el porcentaje de consenso:

- **Selección de múltiples personas**: cuando la solicitud se mueva de la etapa anterior a la etapa que tiene este mecanismo y esta forma de ejecución configurados, es necesario seleccionar más de una persona del grupo para recibirla;

- **Atribución para todos del grupo**: cuando la solicitud se mueva de la etapa anterior a la etapa que tiene este mecanismo y esta forma de ejecución configurados, se enviará automáticamente a todas las personas del grupo para que la etapa pueda ser ejecutada por cualquiera, hasta que se alcance el porcentaje de consenso.

Al definir esta forma de ejecución para la etapa, es necesario definir, también, el porcentaje de consenso para la conclusión: 

- **Consenso para conclusión:** porcentaje de consenso que es necesario alcanzar para que la etapa sea considerada concluida, es decir, porcentaje de personas que deben asumir la etapa y tomar la misma decisión para que la solicitud pueda ser movida a la próxima. Por estándar, el consenso se define en el 100%.

BENEFICIOS DEL USO
Indicado para procesos que involucran varios departamentos, garantizando que cualquier integrante de los equipos pueda asumir las solicitudes y evitar puntos críticos

CUIDADOS CON EL USO
Cuando exige consenso, puede hacer que el avance del proceso sea un poco más lento.

EJEMPLO DE USO
En un proceso de **Pago a proveedores**, la última etapa es ejecutada por el área de Cuentas por pagar de la empresa, que está formada por 5 colaboradores. Todos ellos son aptos para asumir esta etapa y realizar el pago propiamente dicho, pero la solicitud debe ser asumida por solo una persona.

De esta manera, podemos definir el mecanismo de atribución de esta etapa, componente [Actividad](/pages/viewpage.action?pageId=976136505), como:

| Etapa | Tipo de mecanismo | Posibles responsables de la etapa | Forma de ejecución de la etapa | Forma de envío de la solicitud |
| --- | --- | --- | --- | --- |
| Realizar el pago | Grupo específico | Integrantes del grupo Cuentas por pagar | Actividad individual | Envío a todos del grupo (pool) |

→ Significa que, cuando la solicitud se envíe a la etapa Efectuar el pago, todas las personas del grupo Cuentas por pagar verán la solicitud como pendiente y podrá ser asumida por cualquiera de las personas. Tan pronto como una persona asuma la solicitud, se convierte en responsable de efectuar el pago y la solicitud deja de exhibirse como pendiente para el resto de las personas del grupo. Por lo tanto, el mecanismo de atribución facilita la distribución de las actividades entre el grupo, permitiendo que, cuando una persona finalice su actividad actual, pueda asumir la próxima pendiente, dando flujo constante a las solicitudes.

****

        Your browser does not support the HTML5 video element

### Papel específico

---

Este mecanismo permite definir:

- **En la gestión del proceso**: que solo las personas que ejercen un papel específico son las gestoras del proceso, es decir, pueden representar a cualquier otra persona involucrada en el proceso, así como recibir notificaciones de seguimiento de las solicitudes.

- **En las etapas del proceso**: que solo las personas que ejercen un papel específico son las responsables de la etapa en la que fue configurado, es decir, solo estas personas pueden recibir la solicitud cuando se envíe a esa etapa o solo esas personas pueden abrir solicitudes del proceso, en caso de que sea la etapa inicial.

Al seleccionar este mecanismo en la gestión del proceso o en la configuración de una etapa, es necesario informar cuál es el papel específico.

A continuación, para la etapa, también es necesario definir cómo debe ser su ejecución, si será individual o conjunta.

Nota:

La forma de ejecución, individual o conjunta, no está disponible para definición en la etapa inicial del proceso, ya que la solicitud solo puede ser abierta por una única persona, ni para la definición de gestor del proceso.

#### Individual

---

La etapa debe ser ejecutada por una única persona, es decir, solo una persona que ejerce el papel específico debe ejecutar esta etapa. En este caso, es necesario definir, también, si solo una persona que ejerce el papel debe recibir la solicitud cuando sea movida o si la solicitud debe enviarse a todas las personas que ejercen el papel y la primera que la asuma se convierte en la responsable de ejecutar la etapa:

- **Selección de una persona del papel**: cuando la solicitud sea movida de la etapa anterior a la etapa que tiene este mecanismo y esta forma de ejecución configurados, es necesario seleccionar una persona que ejerce el papel para recibirla.

- **Envío a todos del papel (pool)**: cuando la solicitud sea movida de la etapa anterior a la etapa que tiene este mecanismo y esta forma de ejecución configurados, se enviará automáticamente a todas las personas que ejercen el papel y la primera que la asuma se convierte en la responsable de ejecutar esta etapa.

#### Conjunta

---

La etapa debe ser ejecutada por varias personas, es decir, más de una persona que ejerce el papel específico debe ejecutar la etapa. En este caso, también es necesario definir si varias personas que ejercen el papel deben recibir la solicitud cuando se mueva o si la solicitud debe enviarse a todas las personas que ejercen el papel para que pueda ser ejecutada por cualquiera hasta que se alcance el porcentaje de consenso:

- **Selección de múltiples personas**: cuando la solicitud se mueva de la etapa anterior a la etapa que tiene este mecanismo y esta forma de ejecución configurados, es necesario seleccionar a más de una persona que ejerce el papel para recibirla.

- **Atribución para todos del papel**: cuando la solicitud se mueva de la etapa anterior a la etapa que tiene este mecanismo y esta forma de ejecución configurados, se enviará automáticamente a todas las personas que ejercen el papel para que la etapa pueda ser ejecutada por cualquiera hasta que se alcance el porcentaje de consenso.

Al definir esta forma de ejecución para la etapa, también es necesario definir el porcentaje de consenso para la conclusión: 

- **Consenso para la conclusión:** porcentaje de consenso que es necesario alcanzar para que la etapa sea considerada concluida, es decir, porcentaje de personas que deben asumir la etapa y tomar la misma decisión para que la solicitud pueda ser movida a la siguiente. Por estándar, el consenso se define en el 100%.

BENEFICIOS DEL USO
Indicado para etapas que requieren determinadas competencias o experiencia para ejecutar la acción necesaria, haciendo que las responsabilidades sean claras y aprovechando la experiencia y las habilidades de cada función dentro de la empresa.

CUIDADOS CON EL USO
Se recomienda revisar y actualizar regularmente los papeles para que no queden obsoletos, haciendo que las solicitudes se pierdan o sean dirigidas a personas que ya no ejercen el papel definido.

EJEMPLO DE USO
En un proceso de **Lanzamiento de campaña de marketing**, es necesario que los vicepresidentes de la empresa estén de acuerdo con el contenido y con el enfoque de la campaña para que sea lanzada al mercado. Así, una de las etapas del proceso es la Aprobación de los vicepresidentes.

De esta manera, podemos definir el mecanismo de atribución de esta etapa componente [Actividad](/pages/viewpage.action?pageId=976136505), como:

| Etapa | Tipo de mecanismo | Posibles responsables de la etapa | Forma de ejecución de la etapa | Forma de envío de la solicitud | Consenso |
| --- | --- | --- | --- | --- | --- |
| Aprobación VP | Grupo específico | Integrantes del grupo Vicepresidentes | Actividad conjunta | Envío a todos del grupo (pool) | 80% |

→ Significa que, cuando la solicitud sea enviada a la etapa Aprobación VP, todas las personas del grupo Vicepresidentes verán la solicitud como pendiente y podrá ser asumida por cualquiera de las personas. Es necesario que el 80% de las personas del grupo asuman la etapa y tomen la misma acción (aprobar) para que se alcance el consenso y la solicitud continúe adelante. De esta manera, el mecanismo de atribución garantiza que la mayoría de los vicepresidentes estén al tanto y de acuerdo con la campaña para que sea lanzada al mercado, evitando cualquier tipo de divergencia de información o malentendidos.

****

        Your browser does not support the HTML5 video element

### Por campo de formulario

---

Este mecanismo permite definir que solo la persona informada en un campo del formulario de la solicitud en alguna etapa anterior es la responsable de la etapa en la que fue configurado, es decir, solo esa persona recibe la solicitud cuando se envía a esta etapa.

Al seleccionar este mecanismo en la configuración de una etapa, es necesario informar cuál es el campo del formulario de donde se obtendrá a esta persona.

¡Importante!

Es posible utilizar algunos tipos de campo, abierto para digitación, combo, búsqueda, en la configuración del mecanismo. Sin embargo, algunos quizás no haga sentido para quién va a responder el formulario, debido a que el mecanismo interpreta solo códigos o ID (código del usuario, código del papel, código del grupo, etc.), es decir, el mecanismo necesita recibir un código como respuesta del formulario.

EJEMPLO
El campo **Gestor** es del tipo **Texto simple** (abierto para digitación) y será utilizado en el mecanismo de atribución. Para que el mecanismo pueda interpretar a la persona que será informada en el campo para dirigir la solicitud, la respuesta en el campo tendría que ser el código de matrícula del gestor, en lugar de su nombre, lo cual dificulta bastante la cumplimentación.

Por eso, la forma más simple de configurar este mecanismo es utilizando un campo de selección, combo o búsqueda, configurando un *dataset* para este, estándar o desarrollado sobre la plataforma, y seleccionando siempre un **código** (ID) como **Valor**. Así, quien responda el formulario seleccionará un nombre, pero el mecanismo automáticamente considerará el código de matrícula de este nombre seleccionado para dirigir la solicitud.

Si el formulario vinculado al proceso no se creó en el nuevo editor de formularios y el campo es del tipo Búsqueda, al configurar un dataset para este, automáticamente se crea una copia oculta del campo con el prefijo **hidden,** en el **nombre** y en el **código**. Por lo tanto, es este **campo copia** el que debe ser seleccionado en el mecanismo de atribución.

EJEMPLO
El campo de búsqueda que se utilizará en el mecanismo de atribución es el **Gestor directo**, con el código **gestor**. Al configurar el dataset para el campo, automáticamente se creará un campo oculto con nombre y código **hidden_gestor**, siendo este el campo que debe ser seleccionado al configurar el mecanismo de atribución.

Esto no ocurre si el formulario vinculado al proceso se creó en el nuevo editor de formularios.

Cuando la solicitud se mueve de la etapa anterior a la etapa que tiene este mecanismo configurado, se envía automáticamente a la persona que figura en el campo del formulario que se ha definido en el mecanismo.

Nota:

Este mecanismo no puede ser utilizado en la etapa inicial del proceso, ya que depende de una definición proveniente de una etapa anterior a la etapa en la que está configurado, ni para la definición de gestor del proceso.

BENEFICIOS DEL USO
Al permitir la atribución dinámica de responsabilidad, se recomienda para etapas donde la responsabilidad varía de acuerdo con la información proporcionada a lo largo del proceso.

CUIDADOS CON EL USO
Por depender de la información que consta en un campo, el formulario debe estar bien construido, debe solicitar la información de manera objetiva e instruir al solicitante a completar la información correcta para que sea útil en la dirección de la etapa.

EJEMPLO DE USO
En un proceso de**Solicitud de acceso al sistema**, el solicitante debe informar quién es su gestor y por qué motivo necesita el acceso a la herramienta para la cual está solicitando. Antes de ser enviada al área de TI, responsable de liberar los accesos, la solicitud será enviada al gestor del solicitante para que apruebe o no la liberación del acceso. El gestor responsable de la aprobación varía de acuerdo con el solicitante.

De esta manera, podemos definir el mecanismo de atribución de la aprobación del acceso, componente [Actividad](/pages/viewpage.action?pageId=976136505), como:

| Etapa | Tipo de mecanismo | Responsable de la etapa |
| --- | --- | --- |
| Aprobación del gestor | Por campo de formulario | Persona informada en el campo Gestor |

→ Significa que, cuando la solicitud sea enviada a la etapa Aprobación del gestor, la persona responsable de esta y que recibirá la solicitud será la que se informó en el campo Gestor del formulario del proceso. Así, el mecanismo de atribución garantiza que cada solicitud sea dirigida directamente a la persona responsable, facilitando la gestión y la aprobación de las solicitudes de acceso.

****

        Your browser does not support the HTML5 video element

### Persona específica

---

Este mecanismo permite definir que solo una persona específica es la responsable de la etapa en la que fue configurado, es decir, solo esa persona recibe la solicitud cuando se envía a esa etapa o solo esta persona puede abrir solicitudes del proceso, en caso de que sea la etapa inicial.

Al seleccionar este mecanismo en la configuración de una etapa, es necesario informar quién es la persona específica.

Cuando la solicitud se mueva de la etapa anterior a la etapa que tiene este mecanismo configurado, se envía automáticamente a la persona específica que fue definida en el mecanismo.

Nota:

Si la persona específica definida en este mecanismo estuviera inactiva cuando se mueva la solicitud a la etapa, la solicitud se envía al gestor del proceso.

BENEFICIOS DEL USO
Por dirigir a una persona específica, se recomienda para etapas que manejan información confidencial, datos críticos o confidenciales, o para aprobaciones que solo una persona está autorizada a realizar.

CUIDADOS CON EL USO
Si la etapa no es crítica ni confidencial, definir solo una persona responsable puede generar puntos críticos y hacer que la solicitud se quede parada por mucho tiempo, puede sobrecargar a la persona responsable con tareas que podrían ser distribuidas entre varias personas, además del riesgo de retrasos en el proceso si la persona no está disponible en algún período o día.

EJEMPLO DE USO
En un proceso de **Aprobación de contrato**, la persona responsable de aprobar y liberar la firma del contrato es el director del área de Contratos de la empresa. Solo este director puede tener acceso a la información necesaria para aprobar o no la firma de los contratos.

De esta manera, podemos definir el mecanismo de atribución de la aprobación del contrato, componente [Actividad](/pages/viewpage.action?pageId=976136505), como:

| Etapa | Tipo de mecanismo | Responsable de la etapa |
| --- | --- | --- |
| Aprobación del director | Persona específica | Maria da Cunha |

→ Significa que, cuando la solicitud sea enviada a la etapa Aprobación del director, la persona responsable de esta y que recibirá la solicitud es Maria da Cunha, solo ella puede decidir esta aprobación. Así, el mecanismo de atribución garantiza que la responsabilidad por la aprobación del contrato esté claramente definida y que solo la persona configurada pueda ejecutar esta etapa, garantizando eficiencia, responsabilidad y confidencialidad de la información en el proceso.

****

        Your browser does not support the HTML5 video element

## Ejemplos de uso

---

Reunimos aquí varios escenarios en los cuales pueden aplicarse los diferentes mecanismos de atribución. Los ejemplos incluyen el mecanismo, el escenario donde se aplicará y lo que sucede cuando la solicitud se mueve a la etapa en la que fue configurada.

Se muestran ejemplos con algunos tipos de mecanismos de atribución. Haz clic en cada escenario para ver sus detalles.

[Abrir/cerrar todos los ejemplos](#)

#### Solo las personas que forman parte de un grupo pueden solicitar la compra de un equipo.

---

MECANISMO

→ **Grupo específico**

ESCENARIO
En un proceso de **Compra de equipo electrónico**, como *notebooks*, monitores, *mouse*, teclados, audífonos, etc. solo algunas personas del área de Infraestructura tienen autorización para solicitar la compra para el área de Compras de la empresa. Es decir, el colaborador que tiene alguna necesidad de equipo, en primer lugar debe ponerse en contacto con el área de infraestructura para notificarles sobre su necesidad. Ellos analizarán si tienen el equipo solicitado o si será necesario comprarlo. Si es necesario comprarlo, las personas que ejercen la función de gestionar los equipos, compra, cambio, control de inventario, descarte, etc. del área de Infraestructura pueden abrir una solicitud de compra del equipo necesario.

De esta manera, podemos definir el mecanismo de atribución de esta etapa, componente [Inicio](/pages/viewpage.action?pageId=975770103) del proceso, como:

| Etapa | Tipo de mecanismo | Posibles responsables por la etapa |
| --- | --- | --- |
| Solicitar compra de equipo | Papel específico | Integrantes del grupo Gestión de equipos |

→ Significa que solo las personas que ejercen la función de gestionar los equipos electrónicos de la empresa pueden abrir solicitudes para el área de Compras. Así, el mecanismo de atribución garantiza que solo las personas autorizadas y que tienen la información necesaria para decidir si se debe solicitar una compra abran solicitudes, evitando de esta manera compras innecesarias, información desactualizada, inventario desactualizado, entre otras cuestiones.

#### La aprobación de gastos debe ser realizada por el responsable de acuerdo con su categoría.

---

MECANISMO

→ **Por campo de formulario**

ESCENARIO
En un proceso de **Aprobación de gastos**, el solicitante completa algunas informaciones, tales como el valor, la justificación y la categoría del gasto. La aprobación de este gasto varía de acuerdo con su categoría (viaje, equipo, marketing, contratación, etc.), es decir, dependiendo de la categoría, la aprobación debe enviarse al gestor responsable de esta. Cuando el solicitante selecciona la categoría, el campo Gestor responsable se completa automáticamente.

De esta manera, podemos definir el mecanismo de atribución de esta etapa, componente [Actividad](/pages/viewpage.action?pageId=976136505), como:

| Etapa | Tipo de mecanismo | Posibles responsables por la etapa |
| --- | --- | --- |
| Aprobación del gestor | Por campo de formulario | Persona informada en el campo Gestor responsable |

→ Esto significa que, cuando la solicitud sea enviada a la etapa Aprobación del gestor, la persona responsable por esta y que recibirá la solicitud será la que fue informada en el campo Gestor responsable del formulario, que se completó automáticamente al seleccionar la categoría del gasto. Así, el mecanismo de atribución garantiza que cada solicitud sea dirigida directamente a la persona responsable, facilitando la gestión y la aprobación de los gastos, así como también, evitar inconvenientes de tener que transferir la solicitud a otra persona, por ejemplo.

#### Solo las personas que forman parte de la gestión pueden solicitar la apertura de vacantes para el RRHH.

---

MECANISMO

→ **Papel específico**

ESCENARIO
En un proceso de**Solicitud de apertura de vacante**, solo los gestores de las áreas pueden abrir solicitudes cuando identifican la necesidad debido al aumento de demanda, salida de un colaborador o una nueva posición estratégica en el equipo. Esta solicitud debe pasar por algunas aprobaciones, como el RRHH, directores y gestores ejecutivos.

De esta manera, podemos definir el mecanismo de atribución de esta etapa, componente [Inicio](/pages/viewpage.action?pageId=975770103) del proceso, como:

| Etapa | Tipo de mecanismo | Posibles responsables por la etapa |
| --- | --- | --- |
| Solicitar apertura de vacante | Papel específico | Personas que ejercen el papel Gestores |

→ Significa que solo quienes ejercen el papel de gestión de personas dentro de las áreas de la empresa pueden abrir una solicitud de apertura de vacante. De esta manera, el mecanismo de atribución garantiza que solo las personas autorizadas y que tienen la información necesaria para la apertura de una vacante abran solicitudes. 

#### La recompra de acciones debe ser aprobada por el 90% de los consejeros de la empresa.

---

MECANISMO

→ **Grupo específico**

ESCENARIO
En un proceso de **Recompra de acciones**, es necesario que los miembros del consejo de la empresa estén de acuerdo con la estrategia presentada por el equipo ejecutivo, así como con el precio que se pagará por cada acción y con la propuesta de valor que esta decisión traerá para la compañía. De esta manera, una de las etapas del proceso es la Aprobación del consejo.

De esta manera, podemos definir el mecanismo de atribución de esta etapa componente [Actividad](/pages/viewpage.action?pageId=976136505), como:

| Etapa | Tipo de mecanismo | Posibles responsables por la etapa | Forma de ejecución de la etapa | Forma de envío de la solicitud | Consenso |
| --- | --- | --- | --- | --- | --- |
| Aprobación del consejo | Grupo específico | Integrantes del grupo Consejeros | Actividad conjunta | Envío para todos del grupo (pool) | 90% |

→ Significa que, cuando la solicitud sea enviada a la etapa Aprobación del consejo, todas las personas del grupo Consejeros verán la solicitud como pendiente y podrá ser asumida por cualquiera de las personas. Es necesario que el 90% de las personas del grupo asuman la etapa y tomen la misma acción (aprobar) para que se alcance el consenso y la solicitud continúe adelante. De esta manera, el mecanismo de atribución garantiza que la mayoría de los consejeros esté al tanto y de acuerdo con la propuesta de recompra para que esta se invierta en el mercado, evitando cualquier tipo de divergencia de información o malentendidos.

#### El responsable de aprobar un presupuesto varía de acuerdo con el valor.

---

MECANISMO

→ **Por campo de formulario**

ESCENARIO
En un proceso de **Aprobación de presupuesto**, es necesario informar algunos datos, entre estos, el valor total del presupuesto por aprobarse. El responsable de aprobar este presupuesto varía de acuerdo con el valor, ya que existen niveles de aprobación para el gestor, para el gestor ejecutivo y para el director. Al informarse el valor en el formulario, el campo Responsable de la aprobación se completa automáticamente y la etapa Aprobación debe enviarse a esta persona.

De esta manera, podemos definir el mecanismo de atribución de esta etapa, componente [Actividad](/pages/viewpage.action?pageId=976136505), como:

| Etapa | Tipo de mecanismo | Posibles responsables por la etapa |
| --- | --- | --- |
| Aprobación | Por campo de formulario | Persona informada en el campo Responsable de la aprobación |

→ Esto significa que, cuando la solicitud sea enviada a la etapa Aprobación, la persona responsable de esta y que recibirá la solicitud será la que se informó en el campo Responsable de la aprobación del formulario, que fue completado automáticamente al informar el valor del presupuesto por aprobarse. Así, el mecanismo de atribución garantiza que cada solicitud sea dirigida directamente a la persona responsable, facilitando la gestión y la aprobación de los presupuestos y, además, evitando que los gestores reciban solicitudes fuera de su nivel de aprobación y tengan que transferirlas a otro responsable.

## Dudas frecuentes

---

Consulte aquí algunas dudas frecuentes sobre los mecanismos de atribución.

[Abrir/cerrar todas las dudas](#)

#### ¿Qué sucede si la persona específica configurada en el mecanismo no está disponible?

---

La solicitud quedará detenida en la etapa. Si el proceso tuviera gestores, solo estos podrán realizar alguna acción en lugar de la persona específica.

#### ¿Puedo atribuir una etapa del proceso a más de un grupo simultáneamente?

---

No. En este momento no es posible definir más de un grupo como responsable de una etapa o de la gestión de un proceso.

#### ¿Qué sucede si la etapa es atribuida a un papel y ninguna persona ejerce ese papel en este momento?

---

La solicitud quedará detenida en esa etapa y nadie podrá asumirla, a menos que el proceso tenga gestores, ya que estos pueden asumir la solicitud. Por esta razón, es muy importante revisar siempre y actualizar los papeles para que representen la actual organización de las funciones dentro de la empresa.

#### ¿Es posible modificar el mecanismo de atribución después de que la actividad/etapa ha sido creada y configurada?

---

Sí, es posible. Sin embargo, si el proceso ya tiene una versión publicada, esta modificación implicará en una nueva versión del proceso. Y, para que la modificación se aplique en las próximas solicitudes abiertas, es necesario publicar el proceso nuevamente.

¡Importante!

Las solicitudes que ya estaban abiertas y en curso antes de la modificación, permanecen con las configuraciones de la versión antigua. Solo las nuevas solicitudes que se abran después de la publicación de la nueva versión del proceso tendrán las modificaciones.

#### ¿Cómo garantizar que la solicitud no quede detenida por mucho tiempo en una etapa sin ser asumida?

---

No hay forma de garantizar esto. Sin embargo, existen recursos y buenas prácticas que pueden contribuir para que esto no suceda, tales como:

- **Configurar la etapa para notificar al responsable**: de esta manera, cuando la solicitud llegue a la etapa, el responsable es notificado y se entera de que existe una solicitud pendiente bajo su responsabilidad.

- **definir por lo menos un gestor para el proceso**: de esta manera, en caso de que el solicitante no esté disponible en el momento en que la solicitud llegue a la etapa (esté ausente, por ejemplo), el gestor puede asumir o transferir la solicitud a otra persona.

- **Revisar siempre grupos y papeles**: así, se garantiza que siempre reflejen la actual organización de la empresa, evitando que las solicitudes se pierdan a lo largo del proceso.

#### ¿Es posible utilizar el mecanismo Cualquier persona en etapas que involucran datos confidenciales?

---

Sí, es posible utilizarlo, pero **no se recomienda**. Las etapas que manejan datos confidenciales o críticos deben ser dirigidas a las personas autorizadas a tener acceso y a tomar alguna decisión con base en estos.

#### ¿Qué sucede si el campo utilizado para la atribución es eliminado del formulario?

---

Existen dos situaciones que pueden ocurrir en este escenario:

- **Cuando el formulario pertenece al referido proceso, es decir, se creó para este proceso**: aparecerá un mensaje informando que el mecanismo de atribución de determinada etapa no tiene el campo de formulario informado y no será posible publicar el proceso que contenga esta modificación en el formulario, a menos que el mecanismo sea modificado. Esto ocurre porque, al editar el formulario del proceso, automáticamente se genera una nueva versión, tanto del formulario como del proceso, siendo necesario publicarlas para que las modificaciones se apliquen en las próximas solicitudes que se abrirán.

- **Cuando el formulario ya existía y solo se vinculó al referido proceso**: ocurrirá una inconsistencia cuando el responsable intente mover la solicitud de la etapa anterior a la etapa que tiene el mecanismo por campo de formulario configurado, informando que no fue posible encontrar al responsable de la próxima etapa y la solicitud no se moverá.

¡Esté atento!

Esta documentación es válida a partir de la actualización **Voyager (2.0)**. Si utiliza una actualización anterior, puede contener información diferente de la que ve en su plataforma.


<!-- anchors: Plataforma❙Mecanismosdeatribución-Hablandodemecanismosdeatribución..., Plataforma❙Mecanismosdeatribución-Objetivodelosmecanismos, Plataforma❙Mecanismosdeatribución-Tiposdemecanismos, Plataforma❙Mecanismosdeatribución-Cualquierpersona, Plataforma❙Mecanismosdeatribución-Grupoespecífico, Plataforma❙Mecanismosdeatribución-Individual, Plataforma❙Mecanismosdeatribución-Conjunta, Plataforma❙Mecanismosdeatribución-Papelespecífico, Plataforma❙Mecanismosdeatribución-Individual.1, Plataforma❙Mecanismosdeatribución-Conjunta.1, Plataforma❙Mecanismosdeatribución-Porcampodeformulario, Plataforma❙Mecanismosdeatribución-Personaespecífica, Plataforma❙Mecanismosdeatribución-Ejemplosdeuso, toggleAll-1, Plataforma❙Mecanismosdeatribución-@1Sololaspersonasqueformanpartedeungrupopuedensolicitarlacompradeunequipo., content_@1, Plataforma❙Mecanismosdeatribución-@2Laaprobacióndegastosdebeserrealizadaporelresponsabledeacuerdoconsucategoría., content_@2, Plataforma❙Mecanismosdeatribución-@3SololaspersonasqueformanpartedelagestiónpuedensolicitarlaaperturadevacantesparaelRRHH., content_@3, Plataforma❙Mecanismosdeatribución-@4Larecompradeaccionesdebeseraprobadaporel90%delosconsejerosdelaempresa., content_@4, Plataforma❙Mecanismosdeatribución-@5Elresponsabledeaprobarunpresupuestovaríadeacuerdoconelvalor., content_@5, Plataforma❙Mecanismosdeatribución-Dudasfrecuentes, toggleAll-2, Plataforma❙Mecanismosdeatribución-@saiba-mais-1¿Quésucedesilapersonaespecíficaconfiguradaenelmecanismonoestádisponible?, content_@saiba-mais-1, Plataforma❙Mecanismosdeatribución-@saiba-mais-2¿Puedoatribuirunaetapadelprocesoamásdeungruposimultáneamente?, content_@saiba-mais-2, Plataforma❙Mecanismosdeatribución-@saiba-mais-3¿Quésucedesilaetapaesatribuidaaunpapelyningunapersonaejerceesepapelenestemomento?, content_@saiba-mais-3, Plataforma❙Mecanismosdeatribución-@saiba-mais-4¿Esposiblemodificarelmecanismodeatribucióndespuésdequelaactividad/etapahasidocreadayconfigurada?, content_@saiba-mais-4, Plataforma❙Mecanismosdeatribución-@saiba-mais-5¿Cómogarantizarquelasolicitudnoquededetenidapormuchotiempoenunaetapasinserasumida?, content_@saiba-mais-5, Plataforma❙Mecanismosdeatribución-@saiba-mais-6¿EsposibleutilizarelmecanismoCualquierpersonaenetapasqueinvolucrandatosconfidenciales?, content_@saiba-mais-6, Plataforma❙Mecanismosdeatribución-@saiba-mais-7¿Quésucedesielcampoutilizadoparalaatribucióneseliminadodelformulario?, content_@saiba-mais-7 -->
