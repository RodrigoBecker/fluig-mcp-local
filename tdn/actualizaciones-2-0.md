---
title: "Actualizaciones (2.0)"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=1013644444"
scraped_at: "2026-03-09T05:06:09.541Z"
depth: 3
anchors: 93
child_links: 38
---

# Actualizaciones (2.0)

## Ciclo de actualización

Mayor énfasis en las actualizaciones evolutivas (**Update **). 

Las liberaciones más relevantes están identificadas por un sello especial:

![](/download/attachments/1013644444/essential.png?version=1&modificationDate=1762891712973&api=v2) **Essential:** incluyen correcciones y pequeñas evoluciones de la plataforma.

![](/download/attachments/1013644444/mandatory.png?version=1&modificationDate=1762891713050&api=v2) **Mandatory:******actualizaciones que tienen correcciones críticas de emergencia.

Vea todos los detalles en: [Actualización de la plataforma](/pages/viewpage.action?pageId=181961700).

IDIOMA

Infórmese sobre todas las novedades de [My Fluig](https://tdn.totvs.com/x/B1y2Fg).

## 10 de Febrero de 2026

---

## Mejoras

### Destacado visual de la tarjeta en modo Columna  

Para mejorar la experiencia en el Centro de Tareas, hemos evolucionado el destacado visual de la tarjeta seleccionada en modo columnas. El cambio hace que la identificación de la solicitud activa sea más clara e inmediata. Con esto, usted tiene más seguridad sobre qué elemento está en foco, aumentando la fluidez de la interacción y garantizando el correcto llenado de la solicitud.

![](https://tdn.totvs.com/download/attachments/979805603/destaque%20modo%20coluna.png?version=1&modificationDate=1770738084187&api=v2&effects=border-simple,blur-border)

### Nueva logo TOTVS Fluig  

La plataforma Fluig ha ganado una nueva logo, totalmente alineada con la identidad visual de la compañía. Este cambio acompaña la evolución de la plataforma, conectando los nuevos recursos y mejoras a esta nueva fase. Resultando en una experiencia más moderna y consistente con cada actualización.

## Correcciones

- Se realizó una corrección para garantizar la actualización e integración de procesos con la plataforma Fluig después de la actualización del plugin Eclipse.  
- Se realizó un ajuste para que los informes BIRT funcionen correctamente cuando se utilizan con SQL Server.  
- Se realizaron ajustes para permitir crear una nueva revisión o versión de un documento cuando este tiene aprobador.  
- Se realizó una corrección para que sea posible acceder a los filtros del Centro de Tareas.

## 03 de Febrero de 2026

---

## Mejoras

### ¡Añada control de tiempo a sus procesos con el evento Temporizador!  

¿Quiere que sus procesos sean más predecibles, alineados con el negocio en lo que respecta al tiempo, cumpliendo plazos legales o esperando períodos de carencia acordados? ¡El evento **Temporizador** resuelve eso!  

Con él, sus procesos pueden **esperar**, **reaccionar** o **disparar** acciones automáticamente en función del **tiempo**, sin depender de intervenciones manuales. Pueden **esperar** un plazo antes de solicitar atención, **ejecutar** acciones en fechas específicas, **automatizar** rutinas recurrentes siempre a la misma hora, **monitorear** retrasos e **iniciar** acciones correctivas.  

De este modo, sus procesos dejan de ser solo secuencias de actividades y pasan a reflejar cómo funciona realmente el negocio en la línea del tiempo. ¡Intente incluir el evento Temporizador en sus procesos y lleve su automatización al siguiente nivel!

![](https://tdn.totvs.com/download/attachments/979805603/diagrama-completo-temporizador.png?version=2&modificationDate=1769799167247&api=v2&effects=border-simple,blur-border)

### Descarga de anexos directamente en la lista  

Ahora puede descargar todos los anexos de una tarea directamente desde la lista, sin necesidad de acceder a la tarea individualmente. Al hacer clic en el ícono de anexos, encontrará la opción de descarga. Esto reduce aún más los pasos y hace que la rutina de uso sea más práctica.

![](https://tdn.totvs.com/download/attachments/979805603/Download%20global%20de%20anexos.png?version=1&modificationDate=1770129496983&api=v2&effects=border-simple,blur-border)

## Correcciones

- Se realizaron ajustes para que, al hacer clic en Crear formulario en el Editor de procesos, los cambios realizados en el proceso se guarden automáticamente para que sean considerados en el formulario.
- Se aumentó la seguridad del recurso de anexos en solicitudes para evitar la explotación de vulnerabilidades.
- Se realizaron ajustes en la visualización de información en el área Temas que sigo del recurso Editar perfil.
- Se corrigió el recurso Compartir de comunidades para que no se permita compartir publicaciones de comunidades ocultas.
- Se realizó una corrección para evitar la lentitud en datasets personalizados.
- Se realizó una corrección para evitar la superposición del botón Agregar Campo sobre los campos personalizados en la pantalla de propiedades del documento.
- Se realizó una corrección para que la validación de los campos obligatorios ocurra solo en el movimiento de la actividad, sin impedir el guardado o la transferencia de la solicitud en caso de llenado parcial.

## 27 de Enero de 2026

---

### Actualización recomendada  

Se ha identificado una vulnerabilidad relacionada con la seguridad de la cuenta de usuario en la plataforma; sin embargo, el incidente ya ha sido **solucionado**, asegurando su rendimiento y seguridad. La corrección está disponible en el paquete liberado el **27/01/2026**.  
Recomendamos mantener su plataforma siempre actualizada para asegurar una experiencia continua y segura.

## Mejoras

### Control de zoom: ¡navegación más precisa y visión más accesible del diagrama del proceso!  

Ahora es aún más fácil modelar y navegar por el diagrama de sus procesos.

Con el nuevo control de zoom, puede aumentar o disminuir el tamaño del diagrama de acuerdo con su necesidad, garantizando una visión más cómoda y precisa. Y, con solo un clic, es posible regresar rápidamente a la escala del 100%, facilitando la alineación y la revisión de los elementos del proceso.

Este recurso hace que la modelación sea más fluida, accesible y eficiente – especialmente en diagramas grandes y complejos o llenos de detalles. ¡Más agilidad para el día a día es lo que queremos, ¿no es así? ¡Descúbrelo ya!

¡Consejo!

[Haga clic aquí](https://tdn.totvs.com/x/4uouOg) y descubra cuánto se puede aumentar o disminuir un diagrama.

![](https://tdn.totvs.com/download/attachments/979805603/aumentar-diminuir-diagrama.gif?version=1&modificationDate=1763407982037&api=v2)

## Correcciones

- Se corrigió el evento beforeUpdateUser, resolviendo la falla que impedía el feedback visual al utilizar la opción "Olvidé mi contraseña".  
- Se corrigió la exhibición del identificador del proceso en los resultados de búsqueda del Centro de Tareas.  
- Se corrigió la búsqueda general cuando está configurada para mostrarse en la parte superior de la plataforma, para que los términos ingresados sean considerados correctamente en la búsqueda de resultados.  
- Se realizaron ajustes en los campos de entrada libre de las configuraciones del proceso para que no ocurran inconsistencias ocasionadas por la cantidad de caracteres ingresados.  
- Se complementó el registro del TOTVS Fluig cuando se utiliza el sistema operativo Ubuntu para informar cuando no es posible exportar la imagen de un proceso por falta de paquetes de fuentes que no están instalados en el servidor.  
- Se añadió un mensaje en la búsqueda de documentos relacionados – al editar un documento – para informar cuando la búsqueda no está disponible e instruir a contactar al administrador de la plataforma.  
- Se realizó una corrección en el comportamiento del campo Fórmula para que, al configurarse como deshabilitado, no permita la edición de sus valores.  
- Se realizó una corrección para que sea posible asumir solicitudes en bloque en el Centro de Tareas.  
- Se realizó una corrección para que la validación de los campos obligatorios ocurra solo en el movimiento de la actividad, sin impedir el guardado o la transferencia de la solicitud en caso de llenado parcial.  
- Se realizó una corrección para que la configuración “Lleno” del componente de Pestañas funcione correctamente en el nuevo editor de formularios.  
- Se corrigió la situación que impedía actualizar desde versiones inferiores (1.7.1, 1.8.0 y 1.8.1) a la versión 1.8.2. La versión mínima para actualización pasa a ser la **1.8.2-260127**. Obtenga más información en la [guía de actualización](https://tdn.totvs.com/x/lgYSCw) y en la actualización [Voyager 2.0](https://tdn.totvs.com/x/75gGNw).

## 20 de Enero de 2026

---

## Mejoras

### Artículos con mayor seguridad de contenido en comunidades

A partir de ahora, los videos publicados en el recurso [Documentos](https://tdn.totvs.com/x/3KMXDg) que están insertados dentro de [Artículos](https://tdn.totvs.com/x/gaQXDg) en [Comunidades](https://tdn.totvs.com/x/4KMXDg), considerarán lo que se ha definido en la opción de **Descarga e impresión** del propio artículo. Es decir, si el artículo permite la descarga, también será posible descargar el video. De lo contrario, no se permitirá que el video insertado dentro del artículo sea descargado y, en consecuencia, la opción **Descargar** no se mostrará.

De esta manera, es posible garantizar el mismo nivel de permiso para todo el contenido que compone el artículo, proporcionando privacidad para artículos internos o que no pueden ser compartidos con quienes no tienen permiso para verlos. Después de todo, la seguridad nunca está de más, ¿verdad?

![](https://tdn.totvs.com/download/attachments/979805603/v%C3%ADdeo-artigo-comunidade.png?version=1&modificationDate=1768594590337&api=v2&effects=border-simple,blur-border)

### Personalización de filtros en la Central de tareas

Pensando en ofrecer una experiencia aún más práctica y personalizada, la Central de tareas de Fluig Voyager permite seleccionar y organizar los datos de la solicitud y los campos descriptivos del formulario al personalizar un filtro, ofreciendo total control sobre la información que desea mostrar.

Al seleccionar un proceso que contiene un formulario con campos descriptivos, es posible agregar estos campos en el filtro a crear, permitiendo filtrar información no solo de la solicitud, sino también del formulario, ampliando las posibilidades de visualización y filtrado.

En la pestaña **Mostrar datos**, es posible seleccionar qué datos de las solicitudes y qué campos descriptivos del formulario serán presentados en la lista de tareas y, además, también es posible definir el orden en que esta información aparece a través del ícono ![](/download/attachments/1013644444/animaliaicon-dots-six-vertical.png?version=1&modificationDate=1770921536923&api=v2), moviéndola hacia arriba o hacia abajo, priorizando lo que realmente importa según su necesidad, de manera simple y práctica.

Esta novedad garantiza más precisión, claridad y una navegación más eficiente en la Central de tareas.

Acceda a la documentación [Plataforma | Filtros](https://tdn.totvs.com/x/XKQXDg) y obtenga más información.

![](/download/attachments/1013644444/Dados%20da%20solicita%C3%A7%C3%A3o%20e%20ordena%C3%A7%C3%A3o%20em%20filtros%20personalizados.gif?version=1&modificationDate=1770921047360&api=v2)

### Regla de obligatoriedad dinámica para campos de formulario  

Hemos implementado la posibilidad de alternar la obligatoriedad de campos automáticamente a través de eventos, permitiendo que un campo pase de obligatorio a opcional y de opcional a obligatorio, conforme a las reglas definidas.

### Visualización del dataset en el nuevo editor de formularios  

Ahora es posible visualizar el nombre del dataset vinculado al formulario directamente en la interfaz. En la configuración del formulario dentro del editor ![](/download/attachments/1013644444/flaticon-settings.png?version=1&modificationDate=1770921156493&api=v2), se ha añadido el campo obligatorio **Dataset del formulario**. Este campo se llena automáticamente e identifica el dataset generado para almacenar los datos del formulario, facilitando consultas en procesos, widgets, informes e integraciones a través de API.

## Correcciones

- Se corrigió la creación avanzada de documentos para permitir crear correctamente un documento a partir de la copia de otro documento ya existente.
- Corrección en la renovación del token JWT, eliminando la necesidad de iniciar una nueva sesión.
- Se realizaron ajustes para permitir exportar correctamente las consultas de solicitudes.
- Se corrigió el gateway Exclusivo del diseñador clásico de procesos para que los botones de acción se muestren correctamente cuando hay muchas reglas definidas.
- Se corrigió la visualización de las curvas de los flujos del diagrama de procesos – que fueron creados a partir de Eclipse y exportados a la plataforma – después de crear un formulario y recargar la página.
- Se realizó una corrección para que sea posible editar y eliminar un servicio que contenga caracteres especiales.
- Optimización implementada para corregir la lentitud en la Central de tareas en solicitudes con alto volumen de anexos.
- Corrección en el componente de inicio condicional para permitir la apertura de solicitudes a través de trabajos programados.
- Se realizó una corrección para que sea posible actualizar informes BIRT a través del Plugin Fluig para Eclipse.
- Se realizaron ajustes para que el evento de igualdad de campos considere correctamente el valor de campos del tipo búsqueda y selección múltiple en las reglas de formulario cuando esos campos están dentro de una tabla.

## 13 de Enero de 2026 

---

## Correcciones

- Se realizaron ajustes en el recurso Documentos para permitir copiar el enlace de un documento y ver correctamente los documentos relacionados.
- Se realizaron ajustes para mostrar el nombre de los grupos al buscarlos para asociarlos a la aprobación de carpetas.
- Se realizaron ajustes en actualizaciones relacionadas con usuarios creados a partir de TOTVS Identity para que no ocurran inconsistencias al actualizar la plataforma a la 2.0.0-251209.
- Se actualizó el recurso Documentos para que los documentos con algunas propiedades específicas no queden con el contenido en blanco al ser publicados.
- Se corrigió el recurso Iniciar solicitudes para que los procesos inactivos no sean exhibidos.
- Se corrigió el enlace existente en el correo de notificación para dirigir correctamente a la solicitud después de autenticarse en la plataforma.
- Se realizaron ajustes en la eliminación de solicitudes para que no ocurra inconsistencia al eliminar muchas solicitudes de una sola vez.
- Se corrigió la actualización relacionada con el Agendador de tareas para que no ocurran inconsistencias al actualizar a la Voyager 2.0.
- Se actualizó la biblioteca okhttp para la prevención de vulnerabilidades.
- Se implementó un ajuste en el comportamiento del formulario, estandarizando su funcionamiento entre la Web y la aplicación móvil y garantizando la carga correcta de los archivos .js.
- Se realizó una corrección para que la barra de desplazamiento horizontal se muestre automáticamente siempre que el contenido de la tabla supere el ancho disponible en la pantalla.
- Se realizó una corrección para que sea posible utilizar la hAPI setCardValue en el evento afterStateEntry;
- Se realizó un ajuste para corregir el cálculo automático del campo Fórmula y el cumplimiento de las reglas definidas para el campo.
- Se realizó una corrección para que, en escenarios con campos obligatorios ocultos, la plataforma muestre un modal informativo indicando de manera clara qué campo está sin completar.

## 16 de Diciembre de 2025 

---

## Mejoras

### Filtre los resultados de datasets en su formulario con las evoluciones del campo Búsqueda

Con la evolución del campo **Búsqueda** en el nuevo formulario, ahora es posible buscar los datos de datasets dinámicos y contextualizados, como listar solo los usuarios activos de la plataforma o mostrar automáticamente las ciudades de acuerdo con el estado/prov/reg seleccionado.

Esta novedad permite aplicar filtros entre los campos y definir límites de exhibición y selección de resultados, garantizando un mejor desempeño. Además, los valores seleccionados en el campo Búsqueda pueden utilizarse para completar automáticamente otros campos.

También es posible iniciar el campo con filtros preconfigurados, dejando el formulario más eficiente e intuitivo para quienes lo respondan.

Todas estas posibilidades son configurables sin necesidad de codificación adicional. ¡Actualice su plataforma y aproveche esta evolución!

Más información

Acceda a la documentación [Plataforma | Editor de formularios](https://tdn.totvs.com/x/do8bPQ).

![](/download/attachments/1013644444/Filtras%20usu%C3%A1rios%20campo%20Pesquisa.gif?version=1&modificationDate=1766174880370&api=v2)

## Correcciones

- Se corrigió el *flujo*Solicitud de compras, para que la apertura de solicitudes funcione correctamente al utilizar la base de datos SQL Server.
- Se realizó un ajuste para que las API de consulta del nuevo formulario devuelvan correctamente el nombre del dataset asociado.
- Ajuste realizado para que las reglas del campo del formulario se presenten correctamente.
- Se realizó una corrección para que sea posible utilizar el Fluig Studio en modo demo.

##  09 de Diciembre de 2025

---

## Correcciones

- Se realizó un ajuste para garantizar que nuevos registros de formulario creados en la pestaña Adjuntos se generen correctamente.
- Se realizó un ajuste para corregir la inconsistencia de colores, donde en el Modo Claro la línea par aparecía con tonalidad del tema Oscuro y viceversa, garantizando la correcta exhibición.
- Se ajustó el *log* de la plataforma para no mostrar el mismo mensaje diversas veces y de forma inconsistente.
- Se realizó un ajuste para que la API Mobile capture el campo y realice el movimiento de la solicitud correctamente.
- Se realizó una corrección para que el evento global beforeDocumentPublisher valide correctamente también en el flujo de edición de documentos.
- Se realizó un ajuste para que la regla de ocultar pestaña se ejecute correctamente.
- Se realizó un ajuste para que el componente ECMBC.updateDocument vuelva a funcionar correctamente, garantizando el comportamiento esperado en la actualización de documentos.
- Se realizó un ajuste para que el widget Gráfico de procesos y tareas se muestre correctamente.
- Se realizó un ajuste para que la barra de desplazamiento horizontal se muestre correctamente cuando el contenido de la tabla supere el ancho disponible en la pantalla.

## 02 de Diciembre de 2025 

---

## Mejoras

### Componentes reestilizados con nuevo visual

Se actualizaron los componentes de la siguiente Guía de estilo, para reflejar el estándar visual del Animalia Design System, alineando la identidad visual de Fluig con los otros productos TOTVS. Esta evolución garantiza una mayor consistencia visual y fortalece la comunicación entre las interfaces, proporcionando una experiencia moderna y coherente.

- Accordion
- Autocomplete Tags
- Loading
- Tabs
- Breadcrumb
- Label
- Dropdown 

Más información

Acceda a la [guía de estilos](https://style.fluig.com/) de Fluig para ver más detalles.

## Correcciones

- Se realizaron ajustes para que no existan referencias al CKEditor y que DOMPurify esté actualizado con la versión correcta.
- Se realizó un ajuste para que sea posible renombrar los archivos adjuntos de la solicitud correctamente.
- Corrección realizada para que los campos del tipo input radio no inicien marcados con el primer valor disponible al utilizar formularios exportados por medio de Eclipse/Fluig Studio.
- Se corrigió la visualización de versiones de un documento para que sea posible ver el contenido de la versión anterior antes de restaurarlo.
- Se realizó un ajuste para que al utilizar el campo de Selección múltiple en un formulario de proceso sea posible mover la solicitud correctamente.

## 26 de Noviembre de 2025 

---

## Mejoras

### Consulte sus solicitudes Finalizadas y Anuladas

La consulta de solicitudes se ha vuelto aún más completa. Ahora, en la pestaña Mis solicitudes, además de consultar las solicitudes con el filtro de estatus Abiertas, también puede consultar las solicitudes que han sido **Finalizadas** y **Anuladas**.

De esta manera, es mucho más fácil controlar todo lo que ya se ha concluido, manteniendo su rutina organizada de principio a fin, brindando más control y eficiencia para acompañar cada etapa de sus solicitudes.

Más información

Acceda a la documentación [Plataforma | Visualizar mis sulicitudes](https://tdn.totvs.com/x/ZqQXDg).

![](/download/attachments/1013644444/Fechadas%20e%20canceladas%20ES.png?version=1&modificationDate=1766172992297&api=v2)

### Eliminación del plugin jQuery Migrate

Consulte la **noticia** *(en portugués)* publicada sobre la eliminación del plugin jQuery Migrate de la plataforma. Si aún no ha revisado sus códigos, este es el momento ideal para hacerlo, asegurando total compatibilidad y evitando impactos no deseados.

Consulte la documentación [Cómo identificar lo que debe actualizarse](https://tdn.totvs.com/x/zA2eI) *(en portugués)*y aprenda cómo identificar posibles puntos de ajuste.

### Títulos de formularios ahora definidos automáticamente

Ahora, los formularios creados por el nuevo editor de procesos/formularios recibirán automáticamente el nombre estándar “Formulario + Nombre del proceso”, eliminando la necesidad de definir un título manualmente, si así se desea.

## Correcciones

- Se agregó un mensaje informativo sobre la utilización del evento beforeSendData en los scripts del Editor de procesos.
- Corrección aplicada para que, al usar la opción Valor específico, el campo muestre el tipo de input correspondiente a su configuración, como moneda, numérico o texto, como ya ocurre en Definido Valor → Campo fijo.
- Se implementó la evolución de la API para permitir la modificación de la propiedad **downloadEnabled** en documentos, garantizando el ajuste de esta configuración. Haga clic aquí y consulte los detalles en la API.
- Se corrigió la función Editar perfil para que sea posible editar los datos del usuario wcmadmin correctamente.

## 

##  18 de Noviembre de 2025 

---

## Mejoras

### Creación de procesos con Inteligencia Artificial

Ahora es mucho más rápido transformar sus ideas en procesos dentro de TOTVS Fluig. La función **Configurar procesos** ha recibido una importante actualización: ¡ya puede **crear procesos completos con el apoyo de la IA**, además de seguir utilizando los templates listos!

**¿Qué ha cambiado?**
En el menú **Procesos** → [**Configurar procesos**](/pages/viewpage.action?pageId=236430412), ahora existe la nueva opción **Deje que la IA se encargue de su próximo proceso**.  
A partir de esta, solo necesita describir lo que necesita — etapas, objetivo y resultado esperado — y la IA generará automáticamente un proceso inicial para que lo ajuste como desee.  
Además, también es posible:

- Ver **sugerencias de procesos** listos para acelerar su creación.  
- Seleccionar un **ícono** para facilitar la identificación.  
- Definir **código** y **título** del proceso en el propio flujo.  
- Revisar su descripción y generar una nueva versión con IA antes de finalizar.  
- Crear el diagrama automáticamente con **Superponer diagrama**.

**¿Por qué esto es importante?**
Esta mejora **reduce todo el proceso de creación**, abrevia el retrabajo y ayuda a los equipos a poner las ideas en práctica en minutos — ideal para quienes necesitan documentar flujos rápidamente, estandarizar operaciones o prototipar nuevos procesos.

![](/download/attachments/1013644444/rn-ia-configurar-processos-es.png?version=1&modificationDate=1764010061917&api=v2)

### Bloque de actividades: ¡dos recursos en un único componente!

El [Bloque de actividades](/pages/viewpage.action?pageId=993699681) ha llegado para simplificar el modelado de procesos. Es un componente innovador que une — de forma simplificada y eficiente — los conceptos tradicionales de **Pool** y **Swimlane** en un único elemento visual, permitiendo que el modelado de los procesos sea más ágil y el diagrama más claro e intuitivo.

Con este, es posible representar al participante principal — **Organización** (Pool) — y las responsabilidades — **Subdivisiones** (Swimlanes) — involucrados en un proceso. Todo esto de forma gráfica, con nombres personalizados, colores diferenciados y un diseño moderno para dejar sus procesos mucho más bonitos y fáciles de entender. ¡Genial! ¿no?

![](/download/attachments/1013644444/rn-bloco-atividades-es.png?version=1&modificationDate=1764010195870&api=v2)

### Nuevos métodos para opciones en formularios avanzados

Se implementaron nuevos métodos para manejar las opciones “**Agregar**” y “**Papelera**” en formularios avanzados, que permiten ocultar o agregar las opciones en tablas específicas, garantizando más compatibilidad con diferentes tipos de entornos.

**Nuevos métodos** 

- **form.isHideDeleteButton**(String tableName);
- **form.isHideAddButton**(String tableName);
- **form.isHideAddButton**();
- **form.setHideDeleteButton**(String tableName, boolean hideDeleteButton);
- **form.setHideAddButton**(String tableName, boolean hideAddButton);
- **form.setHideAddButton**(boolean hideAddButton);

Además, se implementaron nuevos atributos de posición de las opciones.

- **addbuttonposition**
- **deletebuttonposition.**

Estas novedades amplían el nivel de personalización y control disponible para los desarrolladores, permitiendo ajustar el comportamiento de las opciones de manera más precisa y alineada a las necesidades de cada formulario.

Más información

Consulte más detalles en la documentación [FormController](https://tdn.totvs.com/x/GO_CJw) y [Personalización de formularios](https://tdn.totvs.com/x/OufTJw).

- [Actualizaciones menores](#)
- [Actualización 2.0 Voyager](#)

![](/download/attachments/1013644444/Antes.png?version=1&modificationDate=1764009403060&api=v2)

![](/download/attachments/1013644444/Depois200.png?version=1&modificationDate=1764009403157&api=v2)

## Correcciones

- Se realizó un ajuste para que sea posible consultar solicitudes correctamente.  
- Se realizó un ajuste para que sea posible redimensionar verticalmente campos textarea.  
- Se realizaron ajustes para que la autenticación funcione correctamente en la actualización 2.0, al utilizar Fluig Studio cuando hay integración con TOTVS Identity.  
- Se corrigió la creación y visualización de la página del Editor de procesos para que quede accesible correctamente al actualizar a Voyager (2.0).  
- Se mejoró el mensaje presentado cuando una actividad configurada con movimiento automático por plazo expirado se asigna a un papel o grupo, dejando la acción más clara.

## 

## 11 de Noviembre de 2025

---

## Correcciones

- Se realizó un ajuste para el direccionamiento correcto a la página de Política de uso para nuevos usuarios.  
- Se aplicó una corrección en la carga del widget del Acuerdo de consentimiento, que resultaba en una pantalla en blanco e impedía el login inicial de nuevos usuarios.  
- Se efectuó una corrección en los caracteres de los archivos de configuración para evitar inconsistencias al actualizar la plataforma de 1.8.2 a 2.0.0.  
- Se creó una validación de la versión de la plataforma y de aplicaciones de asociados para permitir la actualización del entorno solo cuando las versiones de ambos productos son compatibles entre sí.  
- Se realizaron ajustes para que los usuarios creados a partir de TOTVS Identity puedan acceder a la plataforma correctamente en la actualización 2.0.0.  
- Se realizaron ajustes para que la actividad que está en ejecución se muestre con un color de destaque al visualizar el diagrama del proceso a partir de una solicitud.  
- Se aplicó una corrección para ajustar la exhibición de datasets dependientes durante el deploy y restaurar el ícono informativo en el panel de control.  
- Se aplicó una corrección para que sea posible retirar documentos por la API con autenticación OAuth1 sin que ocurra el error de NullPointerException, garantizando la devolución correcta del estatus.

## 

## 04 de Noviembre de 2025

---

## Correcciones

- Se realizó un ajuste para que sea posible acceder correctamente a páginas de forma pública.
- Corrección aplicada para que sea posible visualizar las tareas en pool para grupos que tienen caracteres especiales.  
- Corrección aplicada para que sea posible incluir un grupo para permiso de visualización en las configuraciones de procesos.  
- Ajuste realizado para deshabilitar correctamente el campo de opciones móviles al eliminar el flujo entre etapas con configuración de opciones de aceptar/rechazar.  
- Se efectuaron ajustes para evitar inconsistencias en la aplicación My Approval al eliminar un flujo entre dos etapas de un proceso cuando una de estas tiene configuraciones para *mobile.*

## 

## 29 de Octubre de 2025

---

## Mejoras

### Nueva página de Iniciar solicitudes

Comprendemos la importancia de una jornada fluida y eficiente en la gestión de sus demandas. Por eso, hemos desarrollado una nueva interfaz para optimizar el punto de partida de cada solicitud. Al iniciar una solicitud, puede tener la tranquilidad de que cada paso seguirá rigurosamente las actividades y los flujos definidos en la versión vigente del proceso en el momento de la creación. Esto garantiza consistencia y previsibilidad, incluso con la publicación de nuevas versiones del proceso en el futuro.

Y para dejar su adaptación aún más simple, preparamos una guía interactiva de bienvenida en la propia página de iniciar solicitudes. Será guiado(a) por un recorrido intuitivo, con una breve descripción de qué hacer y cómo ubicarse, garantizando que aproveche al máximo todas las funcionalidades disponibles desde el primer acceso.

Esperamos que la experiencia al iniciar solicitudes adquiera una nueva vivencia, permitiendo que agilice y ofrezca aún más facilidad a su rutina.

Para consultar la documentación completa, acceda a [Iniciar solicitudes](/pages/viewpage.action?pageId=236430414) y manténgase al tanto de todos los detalles.

![](/download/attachments/1013644444/iniciar%20solicita%C3%A7%C3%B5es.png?version=2&modificationDate=1762892114670&api=v2)

## Correcciones

- Se efectuaron ajustes para que todas las columnas de la tabla FDN_ACCESSLOG se creen correctamente al actualizar la plataforma de Crystal Mist (1.8.2) a Voyager (2.0).  
- Por cuestiones de seguridad y prevención de explotación de vulnerabilidades, el puerto estándar utilizado por la plataforma para FTP se modificó de 21 a 9021.
- Se validó el comportamiento del sistema al realizar el upload con [Impresión de copia controlada](https://tdn.totvs.com/x/F5MbCQ), garantizando la correcta apertura del PDF y la consistencia de los mensajes de log en el proceso PDFHandler.  
- Se realizó un ajuste para mejorar el desempeño y reducir el tiempo de carga de la página [Configurar procesos](/pages/viewpage.action?pageId=236430412).
- Se efectuaron ajustes para permitir autenticarse correctamente en la aplicación My Fluig cuando se utiliza el protocolo LDAP o la contraseña en MD5.

## 

##  21 de Octubre de 2025

---

## Mejoras

### Novedades en el diseñador de formularios

¡El diseñador de formularios ha sido actualizado y ahora es más completo!

- [Duplicación de campos](#)
- [Selección múltiple en el campo búsqueda](#)
- [Límite de resultados campo Búsqueda](#)
- [Eventos de llenado y filtro](#)
- [Nuevas configuraciones en reglas de formulario](#)

 - **Duplicación de campos**: cree copias de campos existentes de forma rápida, incluso con las reglas ya definidas.

![](/download/attachments/1013644444/Duplicar%20campos.gif?version=1&modificationDate=1762891728547&api=v2)

 - **Selección múltiple en el campo búsqueda**: seleccione más de un registro a la vez en el campo.

![](/download/attachments/1013644444/multiplo%20registro%20campo%20pesquisa.png?version=1&modificationDate=1762891728947&api=v2)

 - **Nueva propiedad Límite de resultados en el campo búsqueda:** define el número máximo de resultados mostrados en el campo Búsqueda.

![](/download/attachments/1013644444/limite%20de%20resultados.png?version=1&modificationDate=1762891729070&api=v2)

 - **Nuevos eventos de cumplimentación y filtro en el campo Búsqueda**: al seleccionar un ítem, ahora es posible **completar automáticamente** o **filtrar otros campos** del formulario.

![](/download/attachments/1013644444/campo%20zoom.png?version=1&modificationDate=1762891729133&api=v2)

 - **Nuevas configuraciones para reglas de formularios**: nuevas configuraciones disponibles que ofrecen más posibilidades de creación de lógicas.

### Nuevo historial de versiones de formularios

A partir de esta actualización, es más fácil administrar y acompañar los cambios realizados en los formularios vinculados a procesos.  

Con el **historial de versiones**, que se puede acceder por medio del ícono![](/download/attachments/1013644444/flaticon-restore%20%281%29.png?version=1&modificationDate=1762891728273&api=v2), es posible verificar los detalles de cada versión, como fecha y hora de publicación, modificaciones realizadas y el usuario responsable de cada modificación.  

Además, también es posible visualizar **cualquier versión anterior** **** e incluso **restaurarla** ![](/download/attachments/1013644444/flaticon-restore%20%281%29.png?version=1&modificationDate=1762891728273&api=v2) si fuera necesario, garantizando más control y agilidad para sus formularios.

Más información

Acceda a la documentación [Plataforma | H](https://tdn.totvs.com/x/Q69ZP)[istorial de versiones](https://tdn.totvs.com/x/Q69ZP) para conocer más detalles.

![](/download/attachments/1013644444/Restaurar%20vers%C3%A3o%20do%20formul%C3%A1rio.png?version=1&modificationDate=1762891728480&api=v2)

## Correcciones

- Se efectuaron ajustes para que sea posible acceder a la aplicación My Approval cuando la autenticación está configurada para utilizar el protocolo LDAP.  
- Se efectuaron ajustes en la validación de permisos para que los usuarios comunes sin permiso no puedan retirar otros usuarios de grupos por medio de la API.  
- Corrección realizada para permitir la sincronización de un dataset, incluso cuando el método onsync está vacío o no definido.  
- Corrección realizada para garantizar que, al acceder a una solicitud por medio de notificaciones, el formulario se muestre correctamente.  
- Ajuste realizado para que, al crear formularios en el modelo Tablas de base de datos, la plataforma valide correctamente los nombres de los campos, evitando aquellos con caracteres que utilicen términos reservados de la base de datos.

## 

##  14 de Octubre de 2025

---

## Correcciones

- Se efectuaron ajustes de seguridad relacionados con la edición de matrícula de usuarios.  
- Se realizó un ajuste para que la función fluigAPI.getCardAPIService().create funcione correctamente.  
- Se corrigió el comportamiento del método findChildrenByCardId para garantizar la devolución adecuada de los tables id al utilizar un dataset.  
- Se ajustó el servicio createDocument vía SOAP para que, al crear un documento en nombre de otro usuario, la atribución se realice correctamente.

## 

##  07 de Octubre de 2025

---

## Mejoras

### ¡Nuevo modo de visualización en la Central de tareas!

¡El modo **Cuadro** de la Central de tareas ha recibido una nueva configuración! Ahora puede ajustar la exhibición de tareas de acuerdo con su preferencia, seleccionando entre dos layouts: **Estándar**o **Compacto**.

- El layout Estándar muestra la información de las solicitudes con más detalles y mayor énfasis visual.  
- Por otro lado, el Compacto, muestra solamente la información esencial, reduciendo la carga visual y permitiendo visualizar un mayor número de solicitudes en la lista.

Más flexibilidad y practicidad para que pueda acompañar sus tareas a su manera.

![](/download/attachments/1013644444/Modo%20de%20visualiza%C3%A7%C3%A3o.gif?version=1&modificationDate=1762891727507&api=v2)

Más información

Acceda a nuestra documentación y conozca los detalles en el ítem [Modos de visualización](https://tdn.totvs.com/x/NPLuDQ).

### Más accesibilidad en la plataforma

Se han aplicado mejoras de accesibilidad en el header y en el menú para mejorar la experiencia de los usuarios que utilizan lectores de pantalla y otras tecnologías de asistencia.

## Correcciones

- Se creó la API pública **[servidorfluig]/dataset/api/v2/datasets/synchronize/[codigodataset]** para la sincronización de datasets.  
- Se efectuaron mejoras en las rutinas de inicio de *login* para no permitir el uso de autenticaciones menos seguras.

## 

## 30 de Septiembre de 2025

---

## Correcciones

- Se corrigió la devolución de las API de inclusión de usuarios en grupos para que indiquen correctamente lo que realmente sucedió, si la acción fue exitosa o si ocurrió alguna inconsistencia.  
- Se realizó una corrección para que al utilizar la API **v2/requests/{processInstanceId}/activities** el parámetro **expand=tasks** devuelva correctamente la información de actividades vinculadas al proceso.  
- Corrección aplicada para que las consultas y flujos se ejecuten con mayor agilidad, garantizando el mismo desempeño que el entorno de producción.

## 

## 23 de Septiembre de 2025

---

## Mejoras

### Guía de primer acceso al TOTVS Fluig Plataforma

Sin duda, esta es una innovación que transformará la experiencia de los nuevos usuarios en nuestra plataforma: la Guía de primer acceso al TOTVS Fluig Plataforma, junto con una nueva Home totalmente modificada y pensada para los usuarios.  

Tener un inicio facilitado puede garantizar el máximo aprovechamiento de todas las funcionalidades. Por eso, al hacer login por primera vez, los usuarios serán guiados de manera intuitiva por medio de una guía interactiva de Primer acceso.  
Este recurso ha sido cuidadosamente desarrollado para familiarizar al usuario con las principales soluciones y funcionalidades de la plataforma, proporcionando una experiencia fluida y eficiente desde el primer contacto.  

Durante la guía de Primer acceso, el usuario tendrá una visión general de las principales soluciones disponibles, incluyendo: Automatización de flujos de trabajo, Procesos listos y soluciones con IA, Gestión de contenido empresarial, Gestión de tareas, Portales y comunidades. También será posible personalizar el perfil, ingresando datos personales, área de actuación y función, elegir el tema de la plataforma y seleccionar el template de página que mejor se adapte a su rutina de trabajo, dejando la experiencia más relevante y alineada a sus necesidades.  

Después de finalizar la guía, el usuario será recibido en la nueva Home del TOTVS Fluig Plataforma. Este nuevo layout ha sido proyectado para ser el centro de comando del usuario, conteniendo widgets esenciales y contenidos importantes que facilitan el descubrimiento de todas las posibilidades que solo el Fluig puede proporcionar. La nueva Home garantiza autonomía y agilidad, permitiendo que el usuario explore y utilice el sistema con total confianza.  

Para consultar la documentación que contiene todos los detalles, acceda a [Mi primer acceso a TOTVS Fluig](/display/fluigesp/Mi+primer+acceso+a+TOTVS+Fluig).

- [Primer acceso](#)

![](/download/attachments/1013644444/primeiros%20passos%20completo%20%281%29.gif?version=1&modificationDate=1762891717147&api=v2)

### Actividad de servicio: ¡nuevo componente del editor de procesos para facilitar integraciones!

Si necesita realizar algún tipo de integración en sus procesos, ya puede celebrar: ¡La Actividad de servicio forma parte de la paleta de componentes del [Editor de procesos](/pages/viewpage.action?pageId=964585634)! 

La principal característica de este componente es su capacidad para automatizar la ejecución de tareas. Con soporte para servicios REST y SOAP, el componente permite la ejecución directa de servicios externos, promoviendo más automatización, integración con otros sistemas y una mayor eficiencia en los procesos modelados.  

Con una configuración simplificada y soporte para parámetros, encabezados y autenticación, el componente ofrece flexibilidad y adherencia a escenarios reales de negocio. ¡Genial!, ¿verdad?

Sugerencia

Consulte la información detallada sobre el componente en [Actividad de servicio](/pages/viewpage.action?pageId=919050491).

Nota:

Los servicios disponibles para uso en el componente Actividad de servicios son aquellos que están registrados en el recurso [Servicios](/pages/viewpage.action?pageId=247924780) del Panel de control.

![](/download/attachments/1013644444/componente-atividade-servi%C3%A7o.png?version=2&modificationDate=1762892267803&api=v2)

### ¿Actividad de servicio con inconsistencias en la ejecución? ¡La captura de error identifica!

El Editor de proceso también cuenta con el evento [Captura de error](/pages/viewpage.action?pageId=990755497), que se utiliza junto con la Actividad de servicio cuando se automatiza su ejecución.  

Este evento permite el tratamiento estructurado de excepciones durante la ejecución del servicio configurado en la actividad. Con este, es posible identificar fallas en la activación de servicios externos y definir acciones correctivas o alternativas, aumentando la robustez y la confiabilidad de los flujos automatizados.  

Este evento es esencial para garantizar procesos resilientes y una mejor gestión de incidentes, evitando que una solicitud quede bloqueada debido a inconsistencias en la ejecución. ¡Más agilidad! ¿Verdad?

![](/download/attachments/1013644444/componente-captura-erro.png?version=2&modificationDate=1762892339587&api=v2)

### Organice y documente sus procesos con el componente Anotación

¡El componente [Anotación](/pages/viewpage.action?pageId=939229293) llegó para sumar y agregar información importante a sus procesos!  

Con este, es posible incluir comentarios e información adicional directamente en el diagrama del proceso. Parece simple, pero es un recurso poderoso que busca facilitar la comunicación, la comprensión y la colaboración entre equipos durante el modelado y el análisis de los procesos, dejando sus flujos más claros y documentados.  

Además, con un proceso bien documentado y con información importante a disposición, su mantenimiento futuro se vuelve mucho más fácil y rápido. ¡La información nunca está demás! ¿Verdad?

![](/download/attachments/1013644444/componente-anota%C3%A7%C3%A3o.png?version=2&modificationDate=1762892608467&api=v2)

### Si prefiere codificar, ¡consulte las condiciones avanzadas del componente Exclusivo!

Ahora es posible definir [condiciones avanzadas](https://tdn.totvs.com/pages/viewpage.action?pageId=913802155#Plataforma%E2%9D%99Exclusivo-Condi%C3%A7%C3%A3oavan%C3%A7ada) en el componente Exclusivo, que permite crear reglas a partir de la codificación, flexibilizando la creación de condiciones para personas más técnicas que saben programar y desean crear expresiones avanzadas.  

De esta manera, es posible crear reglas de decisión más complejas y dinámicas, basadas en variables del proceso, funciones personalizadas y operadores lógicos.  

Este tipo de condición se crea en una IDE incluida en el componente, que permite crear las expresiones de forma estructurada, donde también se disponen **snippets** listos con las **hAPI** de la plataforma para facilitar la creación de las condiciones. ¡Si prefiere codificar, puede comenzar!

Sugerencia

[Haga clic aquí](https://tdn.totvs.com/display/fluig/hAPI) y consulte todos los métodos que están disponibles por medio de **hAPI** y que pueden utilizarse en la creación de condiciones avanzadas.

****

### Organización automática del diagrama del proceso

¿Alguna vez pensó en organizar el diagrama de su proceso en un abrir y cerrar de ojos? Con el nuevo recurso **Organizar diagrama**, el *layout* del diagrama de los procesos se ajusta automáticamente para una disposición más limpia, alineada y visualmente organizada.  

¡Ahorre tiempo, mejore la legibilidad de los flujos y mantenga sus procesos siempre claros y bien estructurados con un solo clic!

De esta manera queda más fácil visualizar y entender sus procesos. ¡Verifique!

Nota:

Este recurso aún está en una versión beta, por lo tanto, pueden ocurrir inconsistencias.

![](/download/attachments/1013644444/organizar-diagrama.gif?version=1&modificationDate=1762891713637&api=v2)

### Deshacer y rehacer: más agilidad en el modelado del diagrama de procesos

¡Ahora puede contar con más control y seguridad en la edición de sus procesos!  

Con las nuevas acciones **Deshacer** y **Rehacer**, puede modelar el diagrama con más facilidad, corrigiendo inconsistencias rápidamente o recuperando modificaciones con agilidad.  

¡Trabaje con más confianza y flexibilidad en el modelado de sus procesos para agilizar su día a día!

![](/download/attachments/1013644444/desfazer-refazer.gif?version=1&modificationDate=1762891716417&api=v2)

## Correcciones

- Se efectuaron ajustes en la lógica de caché de updates para no generar mensajes excesivos en el *log*.

## 

## 16 de Septiembre de 2025

---

## Correcciones

- Se corrigió la actualización de la columna Última ejecución del Programador de tareas para mostrar correctamente la información de sincronización de datasets.  
- Se corrigió la API pública api/public/search/advanced para devolver los resultados correctamente al realizarse una requisición POST.

## 

## 10 de Septiembre de 2025

---

## Correcciones

- Se ajustó el recurso [Programador de tareas](/pages/viewpage.action?pageId=236430752) para que la sincronización de múltiples datasets se realice correctamente.  
- Se efectuaron ajustes en el Editor de procesos para grabar correctamente la configuración de mecanismos de atribución.  
- Se realizó un ajuste para que al incluir el componente datatable, se pueda visualizar correctamente la información de las columnas.
- Se ajustó el mensaje para indicar el límite de 15 caracteres en el registro de nuevas áreas.

## 

## 26 de Agosto de 2025

---

## Correcciones

- Se realizó un ajuste para que se presente correctamente el orden en el historial de solicitudes.  
- Se realizó un ajuste para que la notificación de nuevos participantes muestre correctamente el nombre actualizado de la comunidad.  
- Se realizó un ajuste para que la imagen de perfil de la comunidad se muestre con mejor calidad. Sin embargo, recomendamos que no contenga texto, para garantizar la legibilidad.  
- Se efectuaron ajustes para que la integración TOTVS Fluig vs. Analytics funcione correctamente.


<!-- anchors: Actualizaciones(2.0)-Ciclodeactualización, Actualizaciones(2.0)-10deFebrerode2026, Actualizaciones(2.0)-Mejoras, Actualizaciones(2.0)-DestacadovisualdelatarjetaenmodoColumna, Actualizaciones(2.0)-NuevalogoTOTVSFluig, Actualizaciones(2.0)-Correcciones, Actualizaciones(2.0)-03deFebrerode2026, Actualizaciones(2.0)-Mejoras.1, Actualizaciones(2.0)-¡AñadacontroldetiempoasusprocesosconeleventoTemporizador!, Actualizaciones(2.0)-Descargadeanexosdirectamenteenlalista, Actualizaciones(2.0)-Correcciones.1, Actualizaciones(2.0)-27deEnerode2026, Actualizaciones(2.0)-Actualizaciónrecomendada, Actualizaciones(2.0)-Mejoras.2, Actualizaciones(2.0)-Controldezoom:¡navegaciónmásprecisayvisiónmásaccesibledeldiagramadelproceso!, Actualizaciones(2.0)-Correcciones.2, Actualizaciones(2.0)-20deEnerode2026, Actualizaciones(2.0)-Mejoras.3, Actualizaciones(2.0)-Artículosconmayorseguridaddecontenidoencomunidades, Actualizaciones(2.0)-PersonalizacióndefiltrosenlaCentraldetareas, Actualizaciones(2.0)-Regladeobligatoriedaddinámicaparacamposdeformulario, Actualizaciones(2.0)-Visualizacióndeldatasetenelnuevoeditordeformularios, Actualizaciones(2.0)-Correcciones.3, Actualizaciones(2.0)-13deEnerode2026, Actualizaciones(2.0)-Correcciones.4, Actualizaciones(2.0)-16deDiciembrede2025, Actualizaciones(2.0)-Mejoras.4, Actualizaciones(2.0)-FiltrelosresultadosdedatasetsensuformularioconlasevolucionesdelcampoBúsqueda, Actualizaciones(2.0)-Correcciones.5, Actualizaciones(2.0)-09deDiciembrede2025, Actualizaciones(2.0)-Correcciones.6, Actualizaciones(2.0)-02deDiciembrede2025, Actualizaciones(2.0)-Mejoras.5, Actualizaciones(2.0)-Componentesreestilizadosconnuevovisual, Actualizaciones(2.0)-Correcciones.7, Actualizaciones(2.0)-26deNoviembrede2025, Actualizaciones(2.0)-Mejoras.6, Actualizaciones(2.0)-ConsultesussolicitudesFinalizadasyAnuladas, Actualizaciones(2.0)-EliminacióndelpluginjQueryMigrate, Actualizaciones(2.0)-Títulosdeformulariosahoradefinidosautomáticamente, Actualizaciones(2.0)-Correcciones.8, Actualizaciones(2.0)-18deNoviembrede2025, Actualizaciones(2.0)-Mejoras.7, Actualizaciones(2.0)-CreacióndeprocesosconInteligenciaArtificial, Actualizaciones(2.0)-Bloquedeactividades:¡dosrecursosenunúnicocomponente!, Actualizaciones(2.0)-Nuevosmétodosparaopcionesenformulariosavanzados, sample, Actualizaciones(2.0)-Correcciones.9, Actualizaciones(2.0)-11deNoviembrede2025, Actualizaciones(2.0)-Correcciones.10, Actualizaciones(2.0)-04deNoviembrede2025, Actualizaciones(2.0)-Correcciones.11, Actualizaciones(2.0)-29deOctubrede2025, Actualizaciones(2.0)-Mejoras.8, Actualizaciones(2.0)-NuevapáginadeIniciarsolicitudes, Actualizaciones(2.0)-Correcciones.12, Actualizaciones(2.0)-21deOctubrede2025, Actualizaciones(2.0)-Mejoras.9, Actualizaciones(2.0)-Novedadeseneldiseñadordeformularios, sample, sample-1, sample-2, sample-3, sample-4, sample-5, Actualizaciones(2.0)-Nuevohistorialdeversionesdeformularios, Actualizaciones(2.0)-Correcciones.13, Actualizaciones(2.0)-14deOctubrede2025, Actualizaciones(2.0)-Correcciones.14, Actualizaciones(2.0)-07deOctubrede2025, Actualizaciones(2.0)-Mejoras.10, Actualizaciones(2.0)-¡NuevomododevisualizaciónenlaCentraldetareas!, Actualizaciones(2.0)-Másaccesibilidadenlaplataforma, Actualizaciones(2.0)-Correcciones.15, Actualizaciones(2.0)-30deSeptiembrede2025, Actualizaciones(2.0)-Correcciones.16, Actualizaciones(2.0)-23deSeptiembrede2025, Actualizaciones(2.0)-Mejoras.11, Actualizaciones(2.0)-GuíadeprimeraccesoalTOTVSFluigPlataforma, sample, Actualizaciones(2.0)-Actividaddeservicio:¡nuevocomponentedeleditordeprocesosparafacilitarintegraciones!, Actualizaciones(2.0)-¿Actividaddeservicioconinconsistenciasenlaejecución?¡Lacapturadeerroridentifica!, Actualizaciones(2.0)-OrganiceydocumentesusprocesosconelcomponenteAnotación, Actualizaciones(2.0)-Siprefierecodificar,¡consultelascondicionesavanzadasdelcomponenteExclusivo!, Actualizaciones(2.0)-Organizaciónautomáticadeldiagramadelproceso, Actualizaciones(2.0)-Deshaceryrehacer:másagilidadenelmodeladodeldiagramadeprocesos, Actualizaciones(2.0)-Correcciones.17, Actualizaciones(2.0)-16deSeptiembrede2025, Actualizaciones(2.0)-Correcciones.18, Actualizaciones(2.0)-10deSeptiembrede2025, Actualizaciones(2.0)-Correcciones.19, Actualizaciones(2.0)-26deAgostode2025, Actualizaciones(2.0)-Correcciones.20 -->
