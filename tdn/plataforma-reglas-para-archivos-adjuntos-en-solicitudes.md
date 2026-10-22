---
title: "Plataforma ❙ Reglas para archivos adjuntos en solicitudes"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=977179795"
scraped_at: "2026-03-09T05:15:13.181Z"
depth: 4
anchors: 58
child_links: 55
---

# Plataforma ❙ Reglas para archivos adjuntos en solicitudes

Consulte la documentación correcta:

Esta documentación se refiere al nuevo editor de procesos de la plataforma. Si está utilizando el editor de procesos actual, acceda a [Configurar actividad](https://tdn.totvs.com/pages/viewpage.action?pageId=292372874#Plataforma%E2%9D%99Configuraractividadesyflujos-ConfigurarActividad).

IDIOMA

# Hablando de reglas para archivos adjuntos en solicitudes...

---

Las reglas para los archivos adjuntos son condiciones o requisitos previos que pueden definirse en los componentes **Inicio** y **Actividad**, que representan etapas de un proceso. Pueden exigir, prohibir o permitir archivos adjuntos con algunas características específicas, tales como nombre de los archivos, extensiones, cantidad de archivos, entre otros, independientemente de los archivos adjuntos que ya existen en la solicitud en etapas anteriores, por ejemplo; garantizando que la etapa esté completa y dentro de los criterios exigidos para que la solicitud pueda avanzar.

Las reglas para los archivos adjuntos pueden ser:

- **Generales**: son reglas más simples y buscan exigir cantidades de archivos adjuntos.

- **Específicas**: son reglas que, combinadas con las generales, permiten exigir características específicas de los archivos adjuntos, como nombre o extensión.

- **Avanzadas**: son reglas específicas con condiciones definidas a partir de caracteres especiales, cada uno con su significado.

Nota:

Las reglas para los archivos adjuntos no son obligatorias en ningún componente. Pueden o no ser definidas de acuerdo con las necesidades específicas de cada etapa, proceso o negocio.

Si no se define ninguna regla, se permite agregar cualquier tipo y cualquier cantidad de archivos adjuntos, es decir, no se realiza ninguna validación.

¡Sugerencia!

[Haga clic aquí](https://tdn.totvs.com/pages/viewpage.action?pageId=976136505#Plataforma%E2%9D%99Actividad-Configurarreglasparaanexos) y descubra cómo configurar reglas para los archivos adjuntos en una etapa del proceso.

![](/download/attachments/977179795/regras-de-anexos.png?version=2&modificationDate=1755118183747&api=v2)

## Objetivo de las reglas

---

Las reglas tienen como objetivo agilizar la resolución de las solicitudes, ya que evitan que la solicitud sea enviada hacia adelante sin que el contenido necesario para el análisis en la próxima etapa esté faltando o sea incorrecto, por ejemplo, lo que requeriría el retorno de la solicitud para que sea ajustada.

De esta forma, las reglas ayudan a evitar retrabajos y retrasos en la resolución de las solicitudes, así como buscan facilitar el análisis de cada etapa y la comprensión de lo que se está solicitando.

## Orden de verificación de las reglas

---

En el momento de mover la solicitud a la próxima etapa, se verifican las reglas para los archivos adjuntos de la etapa actual y, si alguna de ellas no se cumple, se muestra un mensaje informando cuáles reglas han sido cumplidas y cuáles aún no.

Es necesario que **todas las reglas** sean cumplidas y **todos los archivos adjuntos** sean válidos para que la etapa pueda ser concluida y la solicitud enviada a la siguiente etapa. Cuando un archivo adjunto es considerado válido para una regla, no se verifica en las demás reglas. Por eso, existe un orden en el cual las reglas son verificadas y es importante considerarlo al crear las reglas.

El orden de verificación de las reglas para los archivos adjuntos de la etapa es:

- **1º →**Se verifican las reglas de **cantidad**, **nombre** y **extensión**. Se analizan los archivos adjuntos válidos para cada regla. Si alguna de las reglas no se cumple, se muestra el mensaje de validación y no se permite el envío a la siguiente etapa.

- **2º** **→** Se verifica si existe una regla con **cualquiera** y si hay un archivo adjunto que aún no ha cumplido con ninguna regla anterior. En caso afirmativo, el archivo adjunto se considerará válido, ya que cumple la regla con **cualquiera** (que es la última a verificarse) y se permite el envío a la siguiente etapa. De lo contrario, no existe regla con **cualquiera**, pero hay un archivo adjunto que no ha cumplido con ninguna regla anterior, se muestra el mensaje de validación y no se permite el envío a la siguiente etapa, incluso si los demás archivos adjuntos han cumplido con las reglas anteriores.
EJEMPLO 1**→**Una etapa tiene 3 reglas para los archivos adjuntos, siendo una con **cualquiera**.**→**Se han añadido 4 archivos adjuntos. Dos de ellos cumplieron con la primera regla, uno de ellos cumplió con la segunda regla y el cuarto no cumplió con ninguna de las dos reglas (que se verifican antes de la regla con **cualquiera**).**→** Como la tercera regla tiene el **cualquiera**, este cuarto archivo adjunto la cumple. En este caso, todas las reglas se han cumplido y todos los archivos adjuntos son válidos. Por lo tanto, se permite el envío a la siguiente etapa.

EJEMPLO 2**→** Una etapa tiene 2 reglas para los archivos adjuntos y ninguna de ellas utiliza el **cualquiera**.**→** Se han añadido 3 archivos adjuntos. Uno cumplió con la primera regla, otro cumplió con la segunda regla y el tercero no cumplió con ninguna de las dos reglas.**→** Como no existe ninguna regla con **cualquiera**, este tercer archivo adjunto no cumplió con ninguna regla. En este caso, no se considerará válido. Por lo tanto, no se permite el envío a la siguiente etapa.

## Regla general

---

Las reglas generales son las más simples y sirven para definir la cantidad exigida de archivos adjuntos o si el archivo adjunto puede ser de cualquier tipo y en cualquier cantidad en la etapa.

Consulta a continuación un ejemplo para cada condición disponible para la creación de reglas generales para archivos adjuntos.

→ El archivo adjunto debe ser **igual a 2**.

Es obligatorio agregar **dos** archivos adjuntos en esta etapa, no se permite agregar más.

→ El archivo adjunto debe ser **mayor que 0**.

Es obligatorio agregar **al menos un** archivo adjunto en esta etapa, siendo permitido agregar **más** de uno.

→ El archivo adjunto debe ser **mayor o igual a 1**. 

Es obligatorio agregar **al menos un** archivo adjunto en esta etapa, siendo permitido agregar **más** de uno.

→ El archivo adjunto debe ser **menor que 3**.

Se permite agregar **hasta dos** archivos adjuntos en esta etapa o dejar la etapa sin archivos adjuntos.

→ El archivo adjunto debe ser **menor o igual a 4**.

Se permite agregar **hasta cuatro** archivos adjuntos en esta etapa o dejar la etapa sin archivos adjuntos.

→ El archivo adjunto debe ser **cualquiera**. 

Se permite agregar **cualquier tipo** y **cualquier cantidad** de archivos adjuntos en esta etapa, pudiendo, inclusive, dejar la etapa sin archivos adjuntos.

ESCENARIO 1
En un proceso de **Solicitud de abono de horas** por cuestiones médicas para el área de Planilla de haberes, el solicitante debe enviar obligatoriamente el certificado médico que justifica el abono. El certificado es aceptado en cualquier formato, pudiendo ser una imagen, una foto, un documento en PDF, un archivo del tipo ZIP, en fin, no se hace ninguna exigencia con respecto al tipo de archivo. Sin embargo, solo se permite enviar un certificado por solicitud, es decir, si el solicitante tiene más de un certificado, debe abrir una solicitud para cada uno.

Por lo tanto, la regla puede definirse de la siguiente manera:

→ El archivo adjunto debe ser **igual a 1**.

Es obligatorio agregar **un** archivo adjunto de cualquier tipo. Y no se permite agregar más de uno.

****

        Your browser does not support the HTML5 video element

CENARIO 2
En un proceso de **Aprobación de presupuesto** simple, la persona responsable de la aprobación prefiere que el detalle se realice directamente en el formulario de la solicitud, para que al abrir la solicitud para analizar, el valor a aprobar ya esté evidenciado, sin necesidad de abrir un documento para ver la información.

→ En este caso, no es necesario agregar ninguna regla, solo hay que activar la opción **Prohibir archivos adjuntos**, que significa que no se permite agregar **ningún** archivo adjunto en esta etapa. El detalle del presupuesto debe agregarse al formulario de la solicitud.

****

        Your browser does not support the HTML5 video element

## Regla específica

---

Las reglas específicas deben combinarse con las reglas generales para permitir o exigir características específicas de los archivos adjuntos, tales como nombre y extensión de los archivos.

Es posible definir, por ejemplo, que solo se permite agregar archivos adjuntos con un determinado tipo de extensión o exigir que el archivo adjunto siga un estándar de nomenclatura preestablecido.

A continuación, se presentan algunos ejemplos de reglas específicas para archivos adjuntos.

→ El archivo adjunto debe ser **igual a 1** con **el nombre del archivo conteniendo** **nota** al **inicio**.

Es obligatorio agregar **un** archivo adjunto que tenga el término **nota** al inicio de su nombre.

→ El archivo adjunto debe ser **menor o igual a 2** con **la extensión igual a .zip**.

Se permite agregar hasta **dos** archivos adjuntos con la extensión**.zip** o dejar la etapa sin archivos adjuntos.

→ El archivo adjunto debe ser **igual a 1** con **el nombre y extensión conteniendo** en el nombre el término **boleta** al **inicio** y en la extensión el término **.pdf** al **final**.

Es obligatorio agregar **un** archivo adjunto que tenga el término **boleta** al **inicio** de su **nombre** y que sea un documento del tipo **PDF**.

CENARIO 1
En un proceso de **Apertura de llamado** para el área de TI, el solicitante necesita enviar al menos una imagen de la inconsistencia que está ocurriendo o del recurso para el cual está solicitando atención. Solo se aceptan imágenes que sean del tipo PNG. Si es posible, también es interesante enviar el log, pero debe ser en formato TXT y no es obligatorio.

Por lo tanto, las reglas pueden definirse de la siguiente manera:

→ El archivo adjunto debe ser **mayor o igual a 1** con **la extensión igual a .png**.

Es obligatorio agregar **al menos un** archivo adjunto que sea una imagen con la extensión **.png**. Pero, si el solicitante lo desea, puede agregar más archivos adjuntos.

→ El archivo adjunto debe ser **mayor o igual a 0** con **la extensión igual a .txt**.

Si el solicitante puede obtener el registro, puede adjuntarlo a la solicitud para facilitar el análisis. Sin embargo, no es obligatorio adjuntarlo.

→ El archivo adjunto debe ser **igual a 0** con **la extensión igual a .exe**.

Por razones de seguridad, no se permite agregar ningún archivo adjunto que tenga la extensión **.exe**.

****

        Your browser does not support the HTML5 video element

ESCENARIO 2
En un proceso de **Solicitud de pago** para el área Financiera, el solicitante debe enviar, obligatoriamente, tres documentos: la factura electrónica, la boleta para pago y un detalle de los productos o servicios adquiridos. Los documentos deben ser del tipo PDF y estar identificados por los respectivos nombres "boleta", "factura" y la factura debe estar identificada con el código **NF** al inicio del nombre.

De esta forma, las reglas pueden definirse de la siguiente manera:

→ El archivo adjunto debe ser **igual a 1** con **el nombre y extensión igual a** en el nombre el término **boleta** y en la extensión el término **pdf**.

Es obligatorio agregar **un** archivo adjunto que tenga el nombre **boleta** y que sea un documento con la extensión **.pdf**.

→ El archivo adjunto debe ser **igual a 1** con **el nombre y extensión igual a** en el nombre el término **factura** y en la extensión el término **pdf**.

Es obligatorio agregar **un** archivo adjunto que tenga el nombre **factura** y que sea un documento con la extensión **.pdf**.

→ El archivo adjunto debe ser **igual a 1** con **el nombre y extensión que contenga** en el nombre el término **NF** al **inicio** y en la extensión el término **pdf** al **final**.

Es obligatorio agregar **un** archivo adjunto con los caracteres **NF** al inicio de su nombre y con la extensión **.pdf** para identificar que es la factura. Archivos adjuntos como **NF_10355.pdf**, **NF89665.doc.pdf**, **NF-58361.pdf** serían aceptados.

****

        Your browser does not support the HTML5 video element

## Regla avanzada

---

Las reglas avanzadas se definen a partir de una expresión que puede utilizar una combinación de los siguientes caracteres:

- ***** (**asterisco**): permite dejar libre para tener o no cualquier carácter antes o después de él.
**EJEMPLOboleta* →** significa que contiene el término **boleta** al inicio del nombre, pudiendo tener o no cualquier otro carácter después del término, inclusive en la extensión, permitido por *****. Archivos adjuntos como **boleta.pdf** o **boleta-enero.png** serían aceptados.
- **|** (**pipe**): significa "o" y permite definir múltiples patrones.
**EJEMPLO*.pdf|*.doc|*.docx|*.txt** → significa que puede ser **.pdf**, **.doc**, **.docx**, o **.txt**. – extensiones permitidas por | , pudiendo tener cualquier nombre antes de la extensión, permitido por *****. Archivos adjuntos como **proceso.pdf** o **anotaciones.txt** serían aceptados.
- **!** (**exclamación**): significa "**diferente de**" o "**prohibido**" y permite bloquear un estándar.
**EJEMPLO!*.zip**→ significa diferente de **.zip** , la extensión ha sido prohibida por **!** , pudiendo tener cualquier nombre antes de la extensión, permitido por *****. Archivos adjuntos como **boleta.pdf** o **proceso.png** serían aceptados.

A continuación, consulte algunos ejemplos más de reglas avanzadas para archivos adjuntos.

→ El archivo adjunto debe ser **igual a 1** con **condición avanzada factura.pdf|nota.pdf**.

Es obligatorio agregar **un** archivo adjunto con el nombre **factura** o **nota** y con la extensión **.pdf**. No se permite agregar más de **uno**.

→ El archivo adjunto debe ser **cualquiera** con **condición avanzada !server.***.

Se permite agregar **cualquier tipo** de archivo adjunto con un nombre diferente de **server** y con cualquier extensión o dejar la etapa sin archivos adjuntos. El nombre **server** está **prohibido**.

→ El archivo adjunto debe ser **mayor o igual a 3** con **condición avanzada boleta.pdf**.

Es obligatorio agregar **al menos 3** archivos adjuntos, pudiendo agregar más, que contengan el término **boleta** en el nombre y con la extensión **.pdf**.

ESCENARIO 1
En un proceso de **Solicitud de reembolso** de viaje para el área Financiera, el solicitante puede enviar el comprobante de pago de la estadía, del transporte y de la entrada, en caso de que el viaje haya sido para un evento. Los comprobantes deben estar en PDF e identificados por el nombre.

De esta forma, las reglas pueden definirse de la siguiente manera:

→ El archivo adjunto debe ser **mayor o igual a 1** con **condición avanzada estadia.pdf|transporte.pdf|ingreso.pdf**.

Es obligatorio agregar **al menos un** archivo adjunto, pudiendo adjuntar más, que contenga el término **estadía**, **transporte** o **ingreso** en el nombre y con la extensión **.pdf**.

****

        Your browser does not support the HTML5 video element

ESCENARIO 2
En un proceso de **Solicitud de compra** de materiales de oficina para el área de Compras, el solicitante necesita enviar una foto del material solicitado para servir de referencia y facilitar a quien va a realizar la compra. Esta foto puede ser de varios tipos.

De esta forma, las reglas pueden definirse de la siguiente manera:

→ El archivo adjunto debe ser **mayor o igual a 1** con **condición avanzada .png|.jpg|.jpeg|.bmp**.

Es obligatorio agregar **al menos 1** archivo adjunto con cualquier nombre y que sea una imagen con una de las extensiones permitidas: **.png**, **.jpg**, **.jpeg** o **.bmp**.

****

        Your browser does not support the HTML5 video element

## Ejemplos de uso

---

Reunimos aquí varios escenarios en los cuales pueden aplicarse reglas para los archivos adjuntos. Los ejemplos cuentan con la regla, un mensaje de ayuda para cumplir con la regla y los resultados de acuerdo con el escenario.

Se muestran ejemplos de reglas generales, específicas y avanzadas. Haga clic en cada escenario para ver sus detalles.

[Abrir/cerrar todos los escenarios](#)

#### Exigir al menos un archivo adjunto en la etapa.

---

**REGLA**

→ El archivo adjunto debe ser **mayor que 0**.

**MENSAJE**

→ Es obligatorio agregar al menos un archivo adjunto de cualquier tipo.

| Resultados |  |  |
| --- | --- | --- |
| Ningún archivo adjunto agregado. |  | Regla no cumplida. |
| Un archivo adjunto con la extensión .pdf agregado. |  | Regla cumplida. |
| Un archivo adjunto con la extensión .zip agregado. |  | Regla cumplida. |
| Un archivo adjunto con la extensión .zip y uno con la extensión .pdf agregados. |  | Regla cumplida. |
| Un archivo adjunto con la extensión .jpg agregado. |  | Regla cumplida. |
| Un archivo adjunto con la extensión .pdf, uno con la extensión .zip y uno con la extensión .jpg agregados.. |  | Regla cumplida. |

#### Prohibir archivo adjunto en la etapa.

---

Para prohibir archivos adjuntos en una etapa, no es necesario crear ninguna regla, basta con activar la opción **Prohibir archivos adjuntos**, que determina que no se permite añadir ningún archivo djunto en la etapa.

![](/download/attachments/977179795/proibir-anexos.png?version=2&modificationDate=1755118183660&api=v2)

#### Exigir un archivo adjunto con la extensión .zip.

---

**REGLA**

→ El archivo adjunto debe ser **igual a 1** con **la extensión igual a .zip**.

**MENSAJE**

→ Es obligatorio agregar un archivo adjunto con la extensión .zip.

| Resultados |  |  |
| --- | --- | --- |
| Ningún archivo adjunto agregado. |  | Regla no cumplida. |
| Un archivo adjunto con la extensión .pdf agregado. |  | Regla no cumplida. |
| Un archivo adjunto con la extensión .zip agregado. |  | Regla cumplida. |
| Un archivo adjunto con la extensión .zip y uno con la extensión .pdf agregados. |  | Regla no cumplida. |
| Un archivo adjunto con la extensión .jpg agregado. |  | Regla no cumplida. |
| Un archivo adjunto con la extensión .pdf, uno con la extensión .zip y uno con la extensión .jpg agregados. |  | Regla no cumplida. |

#### Exigir un archivo adjunto con la extensión .zip Y un archivo adjunto con la extensión .pdf.

---

**REGLAS**

→ El archivo adjunto debe ser **igual a 1** con **la extensión igual a .zip**.
→ El archivo adjunto debe ser **igual a 1** con **la extensión igual a .pdf**.

**MENSAJES**

→ Es obligatorio agregar un archivo adjunto con la extensión .zip.
→ Es obligatorio agregar un archivo adjunto con la extensión .pdf.

| Resultados |  |  |
| --- | --- | --- |
| Ningún archivo adjunto agregado. |  | Reglas no cumplidas. |
| Un archivo adjunto con la extensión .pdf agregado. |  | Reglas no cumplidas. |
| Un archivo adjunto con la extensión .zip agregado. |  | Reglas no cumplidas. |
| Un archivo adjunto con la extensión .zip y uno con la extensión .pdf agregados. |  | Reglas cumplidas. |
| Un archivo adjunto con la extensión .jpg agregado. |  | Reglas no cumplidas. |
| Un archivo adjunto con la extensión .pdf, uno con la extensión .zip y uno con la extensión .jpg agregados. |  | Reglas no cumplidas. |

#### Exigir un archivo adjunto con la extensión .zip O .pdf.

---

**REGLA**

→ El archivo adjunto debe ser **igual a 1** con **condición avanzada .zip|.pdf**.

**MENSAJE**

→ Es obligatorio agregar un archivo adjunto con la extensión .zip o con la extensión .pdf.

| Resultados |  |  |
| --- | --- | --- |
| Ningún archivo adjunto agregado. |  | Regla no cumplida. |
| Un archivo adjunto con la extensión .pdf agregado. |  | Regla cumplida. |
| Un archivo adjunto con la extensión .zip agregado. |  | Regla cumplida. |
| Un archivo adjunto con la extensión .zip y uno con la extensión .pdf agregados. |  | Regla no cumplida. |
| Un archivo adjunto con la extensión .jpg agregado. |  | Regla no cumplida. |
| Un archivo adjunto con la extensión .pdf, uno con la extensión .zip y uno con la extensión .jpg agregados. |  | Regla no cumplida. |

#### Exigir un archivo adjunto con la extensión .zip y dejar libre para adjuntar o no otros tipos de archivos adjuntos.

---

**REGLAS**

→ El archivo adjunto debe ser **igual a 1** con **la extensión igual a .zip**.
→ El archivo adjunto debe ser **cualquiera**.

**MENSAJE**

→ Es obligatorio agregar un archivo adjunto con la extensión .zip.

| Resultados |  |  |
| --- | --- | --- |
| Ningún archivo adjunto agregado. |  | Reglas no cumplidas. |
| Un archivo adjunto con la extensión .pdf agregado. |  | Reglas no cumplidas. |
| Un archivo adjunto con la extensión .zip agregado. |  | Reglas cumplidas. |
| Un archivo adjunto con la extensión .zip y uno con la extensión .pdf agregados. |  | Reglas cumplidas. |
| Un archivo adjunto con la extensión .jpg agregado. |  | Reglas no cumplidas. |
| Un archivo adjunto con la extensión .pdf, uno con la extensión .zip y uno con la extensión .jpg agregados. |  | Reglas cumplidas. |

#### Prohibir archivo adjunto con la extensión .zip y dejar libre para adjuntar o no otros tipos de archivos adjuntos.

---

**REGLAS**

→ El archivo adjunto debe ser **igual a 0** con **la extensión igual a .zip**.
→ El archivo adjunto debe ser **cualquiera**.

**MENSAJE**

→ No se permite agregar un archivo adjunto con la extensión .zip.

| Resultados |  |  |
| --- | --- | --- |
| Ningún archivo adjunto agregado. |  | Reglas cumplidas. |
| Un archivo adjunto con la extensión .pdf agregado. |  | Reglas cumplidas. |
| Un archivo adjunto con la extensión .zip agregado. |  | Reglas no cumplidas. |
| Un archivo adjunto con la extensión .zip y uno con la extensión .pdf agregados. |  | Reglas no cumplidas. |
| Un archivo adjunto con la extensión .jpg agregado. |  | Reglas cumplidas. |
| Un archivo adjunto con la extensión .pdf, uno con la extensión .zip y uno con la extensión .jpg agregados. |  | Reglas no cumplidas. |

#### Exigir un archivo adjunto con la extensión .zip y exigir al menos otro tipo de archivo adjunto.

---

**REGLAS**

→ El archivo adjunto debe ser **igual a 1** con **la extensión igual a .zip**.
→ El archivo adjunto debe ser **mayor o igual a 1** con **la extensión diferente de .zip**.

**MENSAJES**

→ Es obligatorio agregar un archivo adjunto con la extensión .zip.
→ Es obligatorio agregar al menos un archivo adjunto con la extensión diferente de .zip.

| Resultados |  |  |
| --- | --- | --- |
| Ningún archivo adjunto agregado. |  | Reglas no cumplidas. |
| Un archivo adjunto con la extensión .pdf agregado. |  | Reglas no cumplidas. |
| Un archivo adjunto con la extensión .zip agregado. |  | Reglas no cumplidas. |
| Un archivo adjunto con la extensión .zip y uno con la extensión .pdf agregados. |  | Reglas cumplidas. |
| Un archivo adjunto con la extensión .jpg agregado. |  | Reglas no cumplidas. |
| Un archivo adjunto con la extensión .pdf, uno con la extensión .zip y uno con la extensión .jpg agregados. |  | Reglas cumplidas. |

#### Exigir uno o más archivos adjuntos del tipo imagen.

---

**REGLA**

→ El archivo adjunto debe ser **mayor o igual a 1** con **condición avanzada .png|.jpg|.gif**.

**MENSAJE**

→ Es obligatorio agregar al menos un archivo adjunto con la extensión .png, .jpg o .gif.

| Resultados |  |  |
| --- | --- | --- |
| Ningún archivo adjunto agregado. |  | Regla no cumplida. |
| Un archivo adjunto con la extensión .pdf agregado. |  | Regla no cumplida. |
| Un archivo adjunto con la extensión .zip agregado. |  | Regla no cumplida. |
| Un archivo adjunto con la extensión .zip y uno con la extensión .pdf agregados. |  | Regla no cumplida. |
| Un archivo adjunto con la extensión .jpg agregado. |  | Regla cumplida. |
| Un archivo adjunto con la extensión .pdf, uno con la extensión .zip y uno con la extensión .jpg agregados. |  | Regla no cumplida. |

#### Permitir solamente archivo adjunto del tipo imagen, pero sin hacerlo obligatorio.

---

**REGLA**

→ El archivo adjunto debe ser **mayor o igual a 0** con **condición avanzada .png|.jp*g|.gif**.

**MENSAJE**

→ Solo se permiten archivos adjuntos con las extensiones .png, .jpg, .jpeg o .gif.

| Resultados |  |  |
| --- | --- | --- |
| Ningún archivo adjunto agregado. |  | Regla cumplida. |
| Un archivo adjunto con la extensión .pdf agregado. |  | Regla no cumplida. |
| Un archivo adjunto con la extensión .zip agregado. |  | Regla no cumplida. |
| Un archivo adjunto con la extensión .zip y uno con la extensión .pdf agregados. |  | Regla no cumplida. |
| Un archivo adjunto con la extensión .jpg agregado. |  | Regla cumplida. |
| Un archivo adjunto con la extensión .pdf, uno con la extensión .zip y uno con la extensión .jpg agregados. |  | Regla no cumplida. |

#### Exigir un archivo adjunto con nombre y extensión específicos.

---

**REGLA**

→ El archivo adjunto debe ser **igual a 1** con **el nombre y extensión igual a** en el nombre el término **server** y en la extensión el término **.log**.

**MENSAJE**

→ Solo se permite un archivo adjunto con el nombre server.log.

| Resultados |  |  |
| --- | --- | --- |
| Ningún archivo adjunto agregado. |  | Regla no cumplida. |
| Un archivo adjunto server.log agregado. |  | Regla cumplida. |
| Un archivo adjunto abcserver.log agregado. |  | Regla no cumplida. |
| Un archivo adjunto server-2018.log agregado. |  | Regla no cumplida. |
| Un archivo adjunto server.txt agregado. |  | Regla no cumplida. |
| Un archivo adjunto server.log.zip agregado. |  | Regla no cumplida. |
| Un archivo adjunto server.zip agregado. |  | Regla no cumplida. |

#### Exigir un archivo adjunto con término específico al inicio del nombre y extensión específica.

---

**REGLAS**

→ El archivo adjunto debe ser **igual a**1 con **condición avanzada server*.log****.**

**MENSAJE**

→ Es obligatorio agregar un archivo adjunto con server al inicio del nombre y con la extensión .log.

| Resultados |  |  |
| --- | --- | --- |
| Ningún archivo adjunto agregado. |  | Regla no cumplida. |
| Un archivo adjunto server.log agregado. |  | Regla cumplida. |
| Un archivo adjunto abcserver.log agregado. |  | Regla no cumplida. |
| Un archivo adjunto server-2018.log agregado. |  | Regla cumplida. |
| Un archivo adjunto server.txt agregado. |  | Regla no cumplida. |
| Un archivo adjunto server.log.zip agregado. |  | Regla no cumplida. |
| Un archivo adjunto server.zip agregado. |  | Regla no cumplida. |

#### Exigir un archivo adjunto con término específico al inicio del nombre y de la extensión. 

---

**REGLA**

→ El archivo adjunto debe ser **igual a 1** con **el nombre y extensión que contengan** en el nombre el término **server**al **inicio** y en la extensión el término **.log** al **inicio**.

**MENSAJE**

→ Es obligatorio agregar un archivo adjunto con server al inicio del nombre y con .log al inicio de la extensión.

| Resultados |  |  |
| --- | --- | --- |
| Ningún archivo adjunto agregado. |  | Regla no cumplida. |
| Un archivo adjunto server.log agregado. |  | Regla cumplida. |
| Un archivo adjunto abcserver.log agregado. |  | Regla no cumplida. |
| Un archivo adjunto server-2018.log agregado. |  | Regla cumplida. |
| Un archivo adjunto server.txt agregado. |  | Regla no cumplida. |
| Un archivo adjunto server.log.zip agregado. |  | Regla cumplida. |
| Un archivo adjunto server.zip agregado. |  | Regla no cumplida. |

#### Exigir un archivo adjunto que contenga un término específico en el nombre y al inicio de la extensión.

---

**REGLA**

→ El archivo adjunto debe ser **igual a 1** con**condición avanzada *server*.log***.

**MENSAJE**

→ Es obligatorio agregar un archivo adjunto que contenga server en el nombre y .log al inicio de la extensión.

| Resultados |  |  |
| --- | --- | --- |
| Ningún archivo adjunto agregado. |  | Regla no cumplida. |
| Un archivo adjunto server.log agregado. |  | Regla cumplida. |
| Un archivo adjunto abcserver.log agregado. |  | Regla cumplida. |
| Un archivo adjunto server-2018.log agregado. |  | Regla cumplida. |
| Un archivo adjunto server.txt agregado. |  | Regla no cumplida. |
| Un archivo adjunto server.log.zip agregado. |  | Regla cumplida. |
| Un archivo adjunto server.zip agregado. |  | Regla no cumplida. |

#### Prohibir archivo adjunto con un término específico en el nombre y dejar libre para adjuntar o no otros tipos de archivos adjuntos.

---

**REGLAS**

→ El archivo adjunto debe ser **cualquiera** con **condición avanzada !*server***.

**O**

→ El archivo adjunto debe ser **igual a 0** con **condición avanzada *server***.
→ El archivo adjunto debe ser **cualquiera**.

**MENSAJE**

→ No se permite agregar un archivo adjunto que contenga server en el nombre.

| Resultados |  |  |
| --- | --- | --- |
| Ningún archivo adjunto agregado. |  | Reglas cumplidas. |
| Un archivo adjunto server.log agregado. |  | Reglas no cumplidas. |
| Un archivo adjunto abcserver.log agregado. |  | Reglas no cumplidas. |
| Un archivo adjunto server-2018.log agregado. |  | Reglas no cumplidas. |
| Un archivo adjunto server.txt agregado. |  | Reglas no cumplidas. |
| Un archivo adjunto server.log.zip agregado. |  | Reglas no cumplidas. |
| Un archivo adjunto server.zip agregado. |  | Reglas no cumplidas. |
| Un archivo adjunto boleta.pdf agregado. |  | Reglas cumplidas. |

#### Prohibir un archivo adjunto con un término específico en el nombre y exigir un archivo adjunto con otro nombre.

---

**REGLA**

→ El archivo adjunto debe ser **igual a 1** con**condición avanzada !*server***.

**MENSAJE**

→ Es obligatorio agregar un archivo adjunto que no contenga server en el nombre.

| Resultados |  |  |
| --- | --- | --- |
| Ningún archivo adjunto agregado. |  | Regla no cumplida. |
| Un archivo adjunto server.log agregado. |  | Regla no cumplida. |
| Un archivo adjunto abcserver.log agregado. |  | Regla no cumplida. |
| Un archivo adjunto server-2018.log agregado. |  | Regla no cumplida. |
| Un archivo adjunto server.txt agregado. |  | Regla no cumplida. |
| Un archivo adjunto server.log.zip agregado. |  | Regla no cumplida. |
| Un archivo adjunto server.zip agregado. |  | Regla no cumplida. |
| Un archivo adjunto boleta.pdf agregado. |  | Regla cumplida. |

#### Exigir un archivo adjunto con una extensión específica solamente si tiene un nombre específico o cualquier archivo adjunto de otra extensión.

---

**REGLA**

→ El archivo adjunto debe ser **igual a 1** con **condición avanzada server.log|!*.log**.

**MENSAJE**

→ Es obligatorio agregar un archivo adjunto con el nombre server y con la extensión .log o cualquier archivo adjunto con la extensión diferente de .log

| Resultados |  |  |
| --- | --- | --- |
| Ningún archivo adjunto agregado. |  | Regla no cumplida. |
| Un archivo adjunto server.log agregado. |  | Regla cumplida. |
| Un archivo adjunto abcserver.log agregado. |  | Regla no cumplida. |
| Un archivo adjunto server-2018.log agregado. |  | Regla cumplida. |
| Un archivo adjunto server.txt agregado. |  | Regla cumplida. |
| Un archivo adjunto server.log.zip agregado. |  | Regla cumplida. |
| Un archivo adjunto server.zip agregado. |  | Regla cumplida. |
| Un archivo adjunto boleta.pdf agregado. |  | Regla cumplida. |

#### Exigir un archivo adjunto con un término específico al inicio del nombre y una extensión específica o cualquier archivo adjunto de otra extensión.

---

**REGLA**

→ El archivo adjunto debe ser**igual a 1** con **condición avanzada server*.log|!*.log**.

**MENSAJE**

→ Es obligatorio agregar un archivo adjunto con server al inicio del nombre y con la extensión .log o cualquier archivo adjunto con una extensión diferente de .log.

| Resultados |  |  |
| --- | --- | --- |
| Ningún archivo adjunto agregado. |  | Regla no cumplida. |
| Un archivo adjunto server.log agregado. |  | Regla cumplida. |
| Un archivo adjunto abcserver.log agregado. |  | Regla no cumplida. |
| Un archivo adjunto server-2018.log agregado. |  | Regla no cumplida. |
| Un archivo adjunto server.txt agregado. |  | Regla cumplida. |
| Un archivo adjunto server.log.zip agregado. |  | Regla cumplida. |
| Un archivo adjunto server.zip agregado. |  | Regla cumplida. |
| Un archivo adjunto boleta.pdf agregado. |  | Regla cumplida. |

#### Prohibir un archivo adjunto con un término específico en el nombre y permitir cualquier archivo adjunto con una extensión específica.

---

**REGLAS**

→ El archivo adjunto debe ser **igual a 0**con **el nombre del archivo conteniendo irpf** en el **medio**.
→ El archivo adjunto debe ser **cualquiera** con **la extensión igual a .zip**.

**MENSAJES**

→ No se permite agregar un archivo adjunto que contenga irpf en el nombre.
→ Se permite agregar cualquier archivo adjunto con la extensión .zip.

| Resultados |  |  |
| --- | --- | --- |
| Ningún archivo adjunto agregado. |  | Reglas no cumplidas. |
| Un archivo adjunto declaracao-irpf.pdf agregado. |  | Reglas no cumplidas. |
| Un archivo adjunto abcserver.log agregado. |  | Reglas no cumplidas. |
| Un archivo adjunto server-2018.log agregado. |  | Reglas no cumplidas. |
| Un archivo adjunto server.txt agregado. |  | Reglas no cumplidas. |
| Un archivo adjunto server.log.zip agregado. |  | Reglas cumplidas. |
| Un archivo adjunto server.zip agregado. |  | Reglas cumplidas. |
| Un archivo adjunto irpf.zip agregado. |  | Reglas no cumplidas. |

## Dudas frecuentes

---

Consulte aquí algunas dudas frecuentes sobre archivos adjuntos en solicitudes o en etapas de las solicitudes. Haga clic en la duda para ver sus detalles.

[Abrir/cerrar todas las dudas](#)

#### ¿Qué sucede si el archivo adjunto no cumple con la regla?

---

La etapa en la que se encuentra la solicitud no puede ser concluida y, por lo tanto, la solicitud no puede enviarse a la siguiente etapa.

Todas las reglas existentes en la etapa deben ser cumplidas y todos los archivos adjuntos añadidos deben ser validados por, al menos, una regla para que pueda considerarse como etapa concluida y enviar la solicitud a la siguiente etapa.

#### ¿Qué tipos de archivos están permitidos como archivo adjunto?

---

Existe una amplia gama de extensiones de archivos que están permitidas como archivos adjuntos. Las principales extensiones que se enumeran para ser seleccionadas en la creación de reglas para los archivos adjuntos se detallan a continuación. Sin embargo, también es posible seleccionar otras más específicas.

Además, si la extensión deseada no se sugiere para selección, es posible escribirla y se considerará normalmente en la regla.

| Principales extensiones |  |  |
| --- | --- | --- |
| Documentos | .doc / .docx | Microsoft Word Document |
| .pdf | Portable Document Format |  |
| .txt | Plain Text File |  |
| .rtf | Rich Text Format |  |
| .odt | OpenDocument Text Document |  |
| Planillas | .xls / .xlsx | Microsoft Excel Spreadsheet |
| .csv | Comma-Separated Values |  |
| .ods | OpenDocument Spreadsheet |  |
| Presentaciones | .ppt / .pptx | Microsoft PowerPoint Presentation |
| .odp | OpenDocument Presentation |  |
| Imágenes | .jpg / .jpeg | JPEG Image |
| .png | Portable Network Graphics |  |
| .gif | Graphics Interchange Format |  |
| .bmp | Bitmap Image |  |
| .svg | Scalable Vector Graphics |  |
| Audio | .mp3 | MPEG Audio Layer III |
| .wav | Waveform Audio File Format |  |
| .aac | Advanced Audio Coding |  |
| .flac | Free Lossless Audio Codec |  |
| Video | .mp4 | MPEG-4 Video File |
| .avi | Audio Video Interleave |  |
| .mkv | Matroska Video File |  |
| .mov | Apple QuickTime Movie |  |
| .wmv | Windows Media Video |  |
| Archivos comprimidos | .zip | Zip Archive |
| .rar | RAR Archive |  |
| .7z | 7-Zip Archive |  |
| .tar.gz | Compressed Tarball File |  |
| Archivos ejecutables y de sistema | .exe | Windows Executable File |
| .dll | Dynamic Link Library |  |
| .sys | Windows System File |  |
| .sh | Shell Script |  |
| .bat | Batch File |  |
| Código fuente y scripts | .html / .htm | HyperText Markup Language File |
| .css | Cascading Style Sheets File |  |
| .js | JavaScript File |  |
| .py | Python Script |  |
| .java | Java Source Code File |  |
| .c / .cpp | C / C++ Source Code File |  |
| Base de datos | .sql | Structured Query Language Data File |
| .db / .sqlite | SQLite Database File |  |
| .mdb / .accdb | Microsoft Access Database |  |

#### ¿Cuál es el tamaño máximo permitido para un archivo adjunto en la solicitud?

---

Como estándar, el tamaño máximo permitido por archivo adjunto (archivo) es de **100MB**. Sin embargo, es posible personalizar este tamaño en los [Parámetros generales](/pages/viewpage.action?pageId=236430759), pudiendo disminuirse o aumentarse hasta el límite de **1GB**. Para ello:

**01.** Acceda al **Panel de control**.

**02.** En el agrupador **Parámetros técnicos**, haga clic en **Parámetros**.

**03.** En **Tamaño máximo de upload por la web (MB)**, indique el tamaño deseado por archivo en megabytes.

Nota:

Para definir un tamaño mayor que el límite de **1GB**, es necesario seguir los pasos descritos en [Cómo aumentar el límite de carga de la plataforma](/display/fluig/Como+aumentar+o+limite+de+upload+da+plataforma). Sin embargo, al definir un tamaño máximo mayor que el límite (1GB), los recursos pueden presentar inestabilidades en el momento en que se agreguen los archivos adjuntos (archivos).

#### ¿Cuál es la cantidad necesaria de archivos adjuntos para una etapa de la solicitud?

---

No existe una cantidad mínima o máxima definida. Esto depende de la etapa y del proceso en cuestión.

La pregunta que se puede hacer es: "¿qué evidencias o documentos son necesarios en cada etapa para que la solicitud sea analizada y concluida con éxito?". Esta respuesta determinará cuál es la cantidad y las reglas para los archivos adjuntos.

EJEMPLO
En la etapa **Pago** de un proceso de Solicitud de pago, el área Financiera solo efectúa pagos por **boleta bancaria**. En este caso, la boleta debe ser adjuntada por el solicitante en el momento de la apertura de la solicitud. Por lo tanto, la etapa **Solicitar pago** (que es la primera etapa del proceso) debe exigir **al menos un archivo adjunto**, que es la boleta bancaria necesaria para que el pago se efectúe cuando la solicitud llegue a la etapa **Pago**.

#### ¿Cuál es la cantidad máxima permitida de archivos adjuntos en una solicitud o en una etapa de la solicitud?

---

No hay restricción respecto a la cantidad máxima de archivos adjuntos que pueden agregarse a una solicitud (considerando todas las etapas) o en una única etapa de la solicitud.

Sin embargo, al añadir **más de 600 archivos adjuntos (archivos)** de una sola vez, se muestra un mensaje advirtiendo que pueden ocurrir inestabilidades en el recurso. Aun así, los archivos adjuntos se agregan siempre que no superen el tamaño máximo permitido por archivo definido en los [Parámetros generales](/pages/viewpage.action?pageId=236430759), que como estándar es **100MB**, pudiendo modificarse hasta el límite de **1GB**.

¡Manténgase atento!

Esta documentación es válida a partir de la actualización **Voyager (2.0)**. Si utiliza una actualización anterior, puede tener información diferente de la que ve en su plataforma.


<!-- anchors: Plataforma❙Reglasparaarchivosadjuntosensolicitudes-Hablandodereglasparaarchivosadjuntosensolicitudes..., Plataforma❙Reglasparaarchivosadjuntosensolicitudes-Objetivodelasreglas, Plataforma❙Reglasparaarchivosadjuntosensolicitudes-Ordendeverificacióndelasreglas, Plataforma❙Reglasparaarchivosadjuntosensolicitudes-Reglageneral, Plataforma❙Reglasparaarchivosadjuntosensolicitudes-Reglaespecífica, Plataforma❙Reglasparaarchivosadjuntosensolicitudes-Reglaavanzada, Plataforma❙Reglasparaarchivosadjuntosensolicitudes-Ejemplosdeuso, toggleAll-1, Plataforma❙Reglasparaarchivosadjuntosensolicitudes-@1Exigiralmenosunarchivoadjuntoenlaetapa., content_@1, Plataforma❙Reglasparaarchivosadjuntosensolicitudes-@2Prohibirarchivoadjuntoenlaetapa., content_@2, Plataforma❙Reglasparaarchivosadjuntosensolicitudes-@3Exigirunarchivoadjuntoconlaextensión.zip., content_@3, Plataforma❙Reglasparaarchivosadjuntosensolicitudes-@4Exigirunarchivoadjuntoconlaextensión.zipYunarchivoadjuntoconlaextensión.pdf., content_@4, Plataforma❙Reglasparaarchivosadjuntosensolicitudes-@5Exigirunarchivoadjuntoconlaextensión.zipO.pdf., content_@5, Plataforma❙Reglasparaarchivosadjuntosensolicitudes-@6Exigirunarchivoadjuntoconlaextensión.zipydejarlibreparaadjuntaronootrostiposdearchivosadjuntos., content_@6, Plataforma❙Reglasparaarchivosadjuntosensolicitudes-@7Prohibirarchivoadjuntoconlaextensión.zipydejarlibreparaadjuntaronootrostiposdearchivosadjuntos., content_@7, Plataforma❙Reglasparaarchivosadjuntosensolicitudes-@8Exigirunarchivoadjuntoconlaextensión.zipyexigiralmenosotrotipodearchivoadjunto., content_@8, Plataforma❙Reglasparaarchivosadjuntosensolicitudes-@9Exigirunoomásarchivosadjuntosdeltipoimagen., content_@9, Plataforma❙Reglasparaarchivosadjuntosensolicitudes-@10Permitirsolamentearchivoadjuntodeltipoimagen,perosinhacerloobligatorio., content_@10, Plataforma❙Reglasparaarchivosadjuntosensolicitudes-@11Exigirunarchivoadjuntoconnombreyextensiónespecíficos., content_@11, Plataforma❙Reglasparaarchivosadjuntosensolicitudes-@12Exigirunarchivoadjuntocontérminoespecíficoaliniciodelnombreyextensiónespecífica., content_@12, Plataforma❙Reglasparaarchivosadjuntosensolicitudes-@13Exigirunarchivoadjuntocontérminoespecíficoaliniciodelnombreydelaextensión., content_@13, Plataforma❙Reglasparaarchivosadjuntosensolicitudes-@14Exigirunarchivoadjuntoquecontengauntérminoespecíficoenelnombreyaliniciodelaextensión., content_@14, Plataforma❙Reglasparaarchivosadjuntosensolicitudes-@15Prohibirarchivoadjuntoconuntérminoespecíficoenelnombreydejarlibreparaadjuntaronootrostiposdearchivosadjuntos., content_@15, Plataforma❙Reglasparaarchivosadjuntosensolicitudes-@16Prohibirunarchivoadjuntoconuntérminoespecíficoenelnombreyexigirunarchivoadjuntoconotronombre., content_@16, Plataforma❙Reglasparaarchivosadjuntosensolicitudes-@17Exigirunarchivoadjuntoconunaextensiónespecíficasolamentesitieneunnombreespecíficoocualquierarchivoadjuntodeotraextensión., content_@17, Plataforma❙Reglasparaarchivosadjuntosensolicitudes-@18Exigirunarchivoadjuntoconuntérminoespecíficoaliniciodelnombreyunaextensiónespecíficaocualquierarchivoadjuntodeotraextensión., content_@18, Plataforma❙Reglasparaarchivosadjuntosensolicitudes-@19Prohibirunarchivoadjuntoconuntérminoespecíficoenelnombreypermitircualquierarchivoadjuntoconunaextensiónespecífica., content_@19, Plataforma❙Reglasparaarchivosadjuntosensolicitudes-Dudasfrecuentes, toggleAll-2, Plataforma❙Reglasparaarchivosadjuntosensolicitudes-@saiba-mais-1¿Quésucedesielarchivoadjuntonocumpleconlaregla?, content_@saiba-mais-1, Plataforma❙Reglasparaarchivosadjuntosensolicitudes-@saiba-mais-2¿Quétiposdearchivosestánpermitidoscomoarchivoadjunto?, content_@saiba-mais-2, Plataforma❙Reglasparaarchivosadjuntosensolicitudes-@saiba-mais-3¿Cuáleseltamañomáximopermitidoparaunarchivoadjuntoenlasolicitud?, content_@saiba-mais-3, Plataforma❙Reglasparaarchivosadjuntosensolicitudes-@saiba-mais-4¿Cuáleslacantidadnecesariadearchivosadjuntosparaunaetapadelasolicitud?, content_@saiba-mais-4, Plataforma❙Reglasparaarchivosadjuntosensolicitudes-@saiba-mais-5¿Cuáleslacantidadmáximapermitidadearchivosadjuntosenunasolicitudoenunaetapadelasolicitud?, content_@saiba-mais-5 -->
