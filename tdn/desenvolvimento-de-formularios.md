---
title: "Desenvolvimento de Formulários"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=181962950"
scraped_at: "2026-03-09T05:05:55.263Z"
depth: 3
anchors: 62
child_links: 33
---

# Desenvolvimento de Formulários

# Índice

# Declaración <!DOCTYPE> HTML

Al publicar una definición de formulario no se recomienda utilizar declaraciones:

[?](#)

| `, Ex: ` |
| --- |

La utilización de las mismas puede impactar en algunas funcionalidades de la definición de formulario, o en el Workflow utilizando el navegador Microsoft® Internet Explorer ®.

# FormController

O **formController** es el objeto que realiza la comunicación entre el formulario y la personalización de los eventos. Este objeto está disponible en cada uno de los eventos de personalización de
formularios a través de la variable **form**. La variable permite modificar los valores de los espacios de un registro de formulario y también obtener el estado de su edición, por ejemplo: si el 
está visualizando o editando el registro del formulario. Vea a continuación los métodos disponibles para la variable ***form***:

| Método | Descripción |
| --- | --- |
| Método | Descripción |
| long getCompanyId() | Devuelve el ID de la empresa |
| int getDocumentId() | Devuelve el ID del documento (registro del formulario) |
| int getVersion() | Devuelve la versión del documento (registro del formulario) |
| int getCardIndex() | Devuelve el ID del formulario |
| String getValue(String fieldName) | Obtiene el valor de espacio del formulario |
| void setValue(String fieldName, String fieldValue) | Define el valor de un espacio del formulario |
| boolean getEnabled(String fieldName) | Verifica si un espacio está habilitado |
| void setEnabled(String fieldName, boolean enabled) | Define si un espacio debe estar habilitado o no |
| String getFormMode() | Obtiene el modo de edición del formulario con probabilidad de devolver los siguientes valores:ADD: Creación del formularioMOD: Formulario en ediciónVIEW: Visualización del formularioNONE: No existe comunicación con el formulario, por ejemplo, ocurre al momento de la validación de los espacios del formulario donde no esté siendo presentado. |
| void setHidePrintLink(boolean hide) | Cuando se define con el valor true, deshabilita el botón de imprimir del formulario. |
| boolean isHidePrintLink() | Verifica si el botón para imprimir está deshabilitado. |
| Map<String, String> getChildrenFromTable(String tableName) | Devuelve un mapa que contiene los nombres y valores de los espacios hijos de una tabla padre. |
| void setHideDeleteButton(boolean hide) | Cuando se define con el valor true, deshabilita el botón de excluir registros hijos en un formulario con padre-hijo. |
| boolean isHideDeleteButton() | Verifica si la exclusión de registros hijos está deshabilitada. |
| boolean getMobile() | Verifica si se está ingresando al registro de formulario a través de un dispositivo mobile. |

# Personalización de Formularios:

La personalización de definición de formularios se realiza a través de la creación de scripts en el lenguaje JavaScript. El código de implementación de cada script se almacena en un banco de datos y dispensa el uso de otros archivos, como por ejemplo, “plugin.p”.

Los eventos de personalización para definir formularios son creados a partir del Fluig Studio. Para publicar un formulario siga los pasos según el ejemplo a continuación:

- [Paso 1](#)
- [Paso 2](#)
- [Paso 3](#)
- [Paso 4](#)

 - Para crear una definición de formulario, en la visión *Explorador de paquetes *se debe ingresar a la carpeta *forms* del proyecto Fluig, luego presionar clic con el botón derecho y en el menú ingresar *Nuevo> Definición de Formulario*. 

![](/download/attachments/75270483/image2013-9-23%2010%3A28%3A32.png?version=1&modificationDate=1379942846000&api=v2)

**Figura 1 - Nueva Definición de Formulario.**

  - En la ventana de creación de definición de formulario, basta completar el nombre deseado y luego presionar clic en finalizar

![](/download/attachments/75270483/image2013-9-23%2010%3A31%3A7.png?version=1&modificationDate=1379943001000&api=v2)

**Figura 2 - Nueva Definición de Formulario.**

****

 - Al finalizar, se creará un paquete relacionado a la definición de formulario en la carpeta *forms* y el editor de formulario quedará disponible para la edición. 

![](/download/attachments/75270483/image2013-9-23%2010%3A32%3A9.png?version=1&modificationDate=1379943063000&api=v2)

**Figura 3 - Nueva Definición de Formulario.**

**.**

****

 - A partir del editor, se desarrolla todo el contenido HTML. En el ejemplo se desarrolló un formulario simple de registro.

![](/download/attachments/75270483/image2013-9-23%2010%3A33%3A32.png?version=1&modificationDate=1379943145000&api=v2)

**Figura 4 - Nueva Definición de Formulario.**

Después de crear una definición de formulario es posible crear scripts personalizados. Los eventos para formularios se deben crear según los pasos a continuación:

- [Paso 1](#)
- [Paso 2](#)
- [Paso 3](#)
- [Paso 4](#)
- [Paso 5](#)
- [Paso 6](#)

 - Para crear un script de formulario en Fluig, en la visión *Explorador de paquetes* se debe ingresar a la carpeta *forms* del proyecyo Fluig, luego presionar clic con el botón derecho y en el menú ingresar *Nuevo > Otros*. 

![](/download/attachments/75270483/image2013-9-23%2010%3A28%3A32.png?version=1&modificationDate=1379942846000&api=v2)

****

**Figura 5 - Creación de script evento de la definición de formulario.**

  - Seleccione la opción Script Evento de definición de formulario y haga clic en el botón Avanzar.

![](/download/attachments/75270483/image2013-9-23%2010%3A41%3A20.png?version=1&modificationDate=1379943613000&api=v2)

**Figura 6 - Creación de script evento de la definición de formulario.**

****

 - En esta ventana informe los espacios pertinentes al evento que desea agregar y luego haga clic en el botón *Finalizar*.

![](/download/attachments/75270483/image2013-9-23%2010%3A41%3A52.png?version=1&modificationDate=1379943645000&api=v2)

**Figura 7 - Creación de script evento de la definición de formulario.**

****

 - En el ejemplo seleccionamos el evento *displayFields*, y relacionamos la definición de formulario *form_exemplo_fluig.*

![](/download/attachments/75270483/image2013-9-23%2010%3A43%3A23.png?version=1&modificationDate=1379943736000&api=v2)

**Figura 8 - Creación de script evento de la definición de formulario.**

 - Al finalizar estará disponible la estructura principal del método en el editor.

![](/download/attachments/75270483/image2013-9-23%2010%3A44%3A38.png?version=1&modificationDate=1379943811000&api=v2)

**Figura 9 - Creación de script evento de la definición de formulario.**

 - El evento utilizado como ejemplo - validateForm, valida el procedimiento de completos los espacios de solicitud y de usuario.El objeto formController, ha sido utilizado para verificar el valor de los espacios, a través de la sintaxis ‘form.getValue(“fieldname”)’. Al exportar la definición de formularios también se exportarán, los eventos relacionados, al servidor Fluig. 

![](/download/attachments/75270483/image2013-9-23%2010%3A45%3A56.png?version=1&modificationDate=1379943889000&api=v2)

****

**Figura 10 - Creación de script evento de la definición de formulario.**

Todos los eventos de la definición de formularios reciben la referencia al formulario. A través de esta referencia es posible ingresar a los espacios del formulario, ingresar/definir el valor de un espacio e ingresar/definir el estado de presentación del espacio. Los detalles de cada evento se presentarán en las próximas secciones de este documento.

El Fluig puede utilizar el log de ejecución en los eventos de personalización. A través de la variable *log* es posible obtener un feedback respecto a la ejecución de cada evento. Existen cuatro niveles de log:

- **error:** presentación de errores.
- **debug:** depurar la ejecución.
- **warn:** informar posible problema de ejecución.
- **info:** presentación de mensajes.

La presentación de cada uno de los tipos de log está sujeta a la configuración del servidor de la aplicación. Por ejemplo, en JBoss ®, por patrón, los mensajes de tipo info y warn se presentan en la consola del servidor y las del tipo debug, error se presentan en el archivo de log. A continuación se indica un ejemplo respecto al uso del log en script:

[?](#)

| `log.info(“Testando o log info”);` |
| --- |

Tendríamos en la consola del servidor el mensaje **“Probando el log info”**.

Es posible saber el estado de edición de un formulario mediante la variable *form* informada como parámetro para los eventos de la definición formulario. Para ingresar al estado de edición:

[?](#)

| `form.getFormMode()` |
| --- |

La llamada a la función* form.getFormMode()* devolverá una string con el modo de edición del formulario. Existen los siguientes valores para el modo de edición del formulario:

- **ADD:** indicando modo de inclusión.
- **MOD:** indicando modo de edición.
- **VIEW:** indicando modo de visualización.
- **NONE:** indicando que no hay comunicación con el formulario, por ejemplo, ocurre al momento de validar los espacios del formularios donde no está siendo presentado.

# Controles visuales

En este capítulo demostraremos como interactuar con algunos tipos de controles de formularios que poseen características especiales, como por ejemplo, completar el contenido de un ComboBox utilizando Datasets.

El Fluig, por patrón realiza la importación de la biblioteca JavaScript en todos los formularios, excepto en los casos donde el formulario ya lo realice. En estos casos el Fluig identificará que el jQueri ya está definido y no realizará la importación nuevamente. En caso el formulario utilice otra biblioteca que pueda entrar en conflicto con el jQuery, será necesario definir en el formulario la variable javascript fluigjQuery, con valor false, que el Fluig dejará de realizar dicha importación, sin embargo algunas otras funcionalidades como la máscara de espacios del Fluig, también se deshabilitarán.

### Máscara de Espacios

Muchos espacios en un formulario poseen un formato específico para su contenido, como datos, CEP, CPF entre otros. 

Para ayudar a los desarrolladores de formularios, el Fluig permite habilitar máscaras por espacio, basta informar el atributo "mask" y la máscara deseada a los objetos **input** del tipo **text**.

**Exemplo de utilização de máscaras**

[?](#)

| `` |
| --- |

Para elaborar la máscara es posible utilizar:

| Código | Descrição |
| --- | --- |
| Código | Descrição |
| 0 | Solamente Números |
| 9 | Solamente números más opcional. |
| # | Solamente números más recursivos. |
| A | Números o letras. |
| S | Solamente letras entre A-Z y a-z. |

**Outros exemplos de utilização de máscaras**

[?](#)

| `` ```Data:``"00/00/0000"````Horário:``"00:00:00"````Data e Hora:``"00/00/0000 00:00:00"````CEP:``"00000-000"````Telefone:``"0000-0000"````Telefone(ddd):``"(00) 0000-0000"``Telefone(ddd + 9ºdígitos):``"(00) 90000-0000"````Placa de carro:``"SSS 0000"````CPF:``"000.000.000-00"````CNPJ:``"00.000.000/0000-00"````IP:``"099.099.099.099"````porcentagem:``"#00.000,00%"````Valor:``"#00.000.000.000.000,00"` |
| --- |

En caso la importación de la biblioteca jQuery esté deshabilitada a través de la variable fluigjQuery, la funcionalidad de máscaras también estará deshabilitada.

### ComboBox

Generalmente es necesario popular un ComboBox de un formulario con un determinado grupo de valores.

En el Fluig esto es posible a través de la utilización de *Datasets.* Los Datasets son servicios de datos patrón disponibles por el Fluig, como por ejemplo, el servicio de “Volúmenes” del producto.

Para habilitar el Dataset en el ComboBox basta utilizar la siguiente construcción:

[?](#)

| `` |
| --- |

Donde:

- dataset es el nombre del Dataset.
- datasetkey es la clave del registro.
- datasetvalue es el valor de un determinado espacio del registro.
- addBlankLine es lo que define si el primer renglón del combo será un valor en blanco.

Ejemplo:

[?](#)

| `` |
| --- |

En el ejemplo anterior realizamos una lista en un ComboBox con todos los Volúmenes registrados en el Fluig.

En caso sea necesario ordenar los datos provenientes de un dataset interno, indicamos la creación de un dataset personalizado que ejecute el interno y ordene los datos, antes de eliminar el componente combobox.

Para utilizar un ComboBox con solamente **una opción** no se deben utilizar carácteres especiales y espacio en el *value *da tag option.

Ejemplos:

- *Forma correcta*

[?](#)

| `````Teste``` |
| --- |

- *Forma Incorrecta*

[?](#)

| `````Teste``` |
| --- |

### Zoom

Permite la consulta de entidades y otros formularios creados en el Fluig para que el usuario pueda seleccionar datos.

El acceso a este componente es realizado a partir de una llamada Javascript en el HTML de la definición de formulario.

[?](#)

| `"/webdesk/zoom.jsp?datasetId="+dataset+"&dataFields="+campos+"&resultFields="+resultFields+"$type="+"&title="+titulo` |
| --- |

Donde:

- title: es el título para la ventaja de zoom.
- datasetId: es el nombre del dataset (Built-in, CardIndex o Customized).
- dataFields: son los nombres de los espacios a presentar.
- resultFields: son los espacios que se deben devolver al registro seleccionado por el usuario.
- likeField: el nombre del espacio para filtro de datos (si es necesario)
- likeValue: el valor a usar en el filtro de datos (si es necesario)

**ATENCIÓN**: Este parámetro sólo es válido para datasets internos. Datasets personalizados no permiten utilizar filtros.

- Para obtener el registro seleccionado por el usuario debemos agregar la siguiente función JavaScript al formulario del proceso:

[?](#)

| `function setSelectedZoomItem(selectedItem) {``}` |
| --- |

Donde *selectItem* es el registro seleccionado por el usuario en la ventana de zoom.

Importante

La misma función “setSelectZoomItem” se utilizará para recibir el resultado de todas las llamadas al zoom. Así, para diferenciar cada llamada se ha creado el parámetro  *type*. Este parámetro se devuelve en *selectedItem*  y se puede utilizar para diferenciar las llamadas al zoom.

- Para ingresar un espacio del registro seleccionado:

[?](#)

| `selectedItem["fieldName"]` |
| --- |

Donde *fieldName* es el nombre del espacio de devolución que se ha definido en la llamada de zoom. Para obtener el registro componente de Zoom del Fluig se ha desarrollado para permitir que el recurso de zoom se utilice en definiciones de formularios.

Para que sea posible visualizar y rescatar información de los espacios “metadatos” del formulario, es necesario utilizar la siguiente nomenclatura:

| metadata_id | Devuelve el código de la ficha |
| --- | --- |
| medatata_version | Devuelve la versión de la ficha |
| metadata_parent_id | Devuelva el código de la carpeta Padre |
| metadata_card_index_id | Devuelva el código del fichero |
| metadata_card_index_version | Devuelva la versión del fichero |
| metadata_active | Versión activa |

La utilización de la PK en los filtros al utilizar dataset de Grupo, Papel o Colaborador es opcional, sin embargo se debe utilizar el mismo valor en la URL del zoom para obtener el valor seleccionado, según el ejemplo a continuación.

A continuación un ejemplo de código utilizado para visualizar y rescatar estos valores:

[?](#)

| `function zoomFormulario(titulo, dataset, campos, resultFields, type){````window.open("/webdesk/zoom.jsp?datasetId="+dataset+"&dataFields="+campos+````"&resultFields="+resultFields+"&type="+type+"&title="+titulo, "zoom", "status , scrollbars=no ,width=600, height=350 , top=0 , left=0");``}` |
| --- |

[?](#)

| `function setSelectedZoomItem(selectedItem) {````alert("Grupo: " + selectedItem['groupId'] + " Colaborador: "+ selectedItem['colleagueGroupPK.colleagueId']);``}``` ````  |
| --- |

Para utilizar filtros la llamada es similar al del *dataFields*.

Sigue el ejemplo a continuación:

[?](#)

| `window.open("/webdesk/zoom.jsp?datasetId=preCad&dataFields=codigo, Código, descricao, Descrição&resultFields=descricao&type=precad&filterValues=metadata_active, false","zoom" , "status, scrollbars=no, width=600, height=350, top=0, left=0");` |
| --- |

En este ejemplo, el zoom devolverá solamente las fichas inactivas.

### Zoom Externo

En situaciones donde los datos de los elementos externos al Fluig son muy voluminosos, se recomienda la construcción de una aplicación externa al Fluig que realizará el papel de zoom para el usuario. A continuación se describirá una técnica JavaScrip donde será posible llamar una aplicación externa y la misma podrá retornar el dato solicitado por el usuario a un espacio del formulario del Fluig.

El primer paso para implementar esta técnica es crear una lógica en JavaScript que abrirá una nueva ventana llamando la aplicación externa que funcionará como zoom para el formulario. Vamos a utilizar y explicar el comando* window.open* en este ejemplo:

[?](#)

| `Window.open(URL Aplicação Externa, Nome da Janela que será aberta, comandos adicionais)` |
| --- |

Donde:

- URL Aplicación Externa: Es la url de la aplicación externa que funcionará como zoom para el Fluig. Ej: [http://servidor/applications/forneczoom.asp](http://servidor-ecm/applications/forneczoom.asp).
- Nombre de la Ventana: Nombre de la ventana que utilizará el navegador del usuario como identificador. Para evitar la sobreposición del contenido en ventana, se recomienda que a cada zoom llamado por un mismo formulario se agregue un nombre diferente. Ej: “ZoomFormec”.
- Comandos Adicionales: Comandos adicionales utilizados para crear la ventana que contendrá la aplicación zoom. Ej: “width=230, height=230”.

Nota

Debido a una restricción de los navegadores, la url del programa de zoom externo al Fluig deberá estar en el mismo dominio que se encuentra el Fluig. En caso contrario no será posible atribuir al espacio del formulario el valor elegido para el zoom. Este problema ocurrirá porque los navegadores prohíben la práctica de codificación JavaScript cross-domain.

El código a continuación programará un formulario del Fluig conteniendo un espacio y un botón lateral que invocará la ventana de la aplicación externa.

[?](#)

| `````Código do Fornecedor:``````````` `````Function mostraLista() {````Window.open(“fornecedores.html”, “list”,”width=230,height=230”);````}``` |
| --- |

El segundo paso consiste en programar dentro de la aplicación externa una función JavaScript que devuelva al campo del formulario el valor elegido al usuario en la aplicación externa. Esta aplicación externa se podrá desarrollar en cualquier tecnología de desarrollo web existente en el mercado donde la misma pueda realizar la ejecución de scripts JavaScript al lado del cliente. A continuación se indica un ejemplo de una función JavaScript que informa el valor al espacio del formulario.

[?](#)

| `````function elegir(valor) {````// El siguiente renglón prueba si la ventana del formulario del fluig que abrió la ventana de zoom aún está abierta````if (window.opener && !window.opener.close) {````// establece el valor informado al espacio````window.opener.document.(id del form en el formulario fluig).(nombre del campo).value = valor;````}````// Cierra la ventana de la aplicación zoom````window.close();````}``` |
| --- |

Donde:

- Id del form en el formulario Fluig: En caso de que se haya definido algún id para el tag *<form>* en el formulario del Fluig, es interesante realizar una referencia en este comando. Se puede utilizar también la referencia de colección *forms* dentro del comando *(forms[posición])*. Ej: *ProveedorForm, forms[0]*.

- Nombre del espacio: Nombre del espacio que recibirá el valor informado a la función. Ej: *cod_proveed*.
- Valor: Datos que se informará al espacio del formulario del Fluig.

El ejemplo a continuación programará un ejemplo de zoom externo realizado enteramente en HTML con datos estáticos apenas para ilustrar. Los datos de zoom provienen de cualquier fuente sea esta interna o externa al Fluig.

[?](#)

| `````````Lista de proveedores` ```function elegir(valor) {````// Prueba de validez del Opener````if (window.opener && !window.opener.closed) {````// grabando el valor del espacio cod_fornec````window.opener.document.forms[0].cod_fornec.value = valor;````}````window.close();``}````` ```````````````````Exemplo aplicacao ECM````CodigoNASDAQ````TOTVS````TOTVSv3````RM````RM1````Datasul````Dts3````Logix````Lgx2``````````````````` |
| --- |

Para colocar un ejemplo en práctica en el el producto, se debe publicar la definición del formulario e informar el archivo del zoom externo como anexo de la definición de formulario.

[Ejemplo de Zoom.zip](https://tdn.totvs.com/download/attachments/181962950/Exemplo%20de%20Zoom.zip?version=1&modificationDate=1419961532000&api=v2)

Al hacer clic en uno de los ítems de la pantalla de zoom aparecerá la función JavaScript elección que enviará el valor al campo *cod_fornec* en el formulario do Fluig.

****

# Servicios de Datos

El Flui posee integración con dos tipos de servicios de datos, estos son: Dataset y Servicios Externos. Ambos se pueden utilizar en todos los eventos disponibles para personalizar la definición de formulario.

### Dataset

Es un servicio de datos que provee acceso a la información, independiente del origen de los datos. El Fluig provee Datasets internos que permiten el acceso a entidades, como Usuarios, Grupo de Usuarios, entre otros. Consulte el registro de Datasets del Fluig para obtener la relación completa de los Datasets disponibles y sus respectivos espacios.

Nota

Los ejemplos a continuación utilizan la función getDatasetValues, disponible solamente para los Datasets de entidad y definición de formulario (cuando se informa el número de la definición de formulario). Para utilizar los Datasets personalizados consulte la Guía de Referencia Personalización de Datasets.

En la función getDatasetValues, NO se devolverán los valores de todos los espacios por cuestiones de seguridad. Para obtener todos los datos se utiliza el DatasetFactory, ejemplificado en [Personalización de Datasets](https://tdn.totvs.com/pages/viewpage.action?pageId=181962763).

Por ejemplo, para ingresar el Dataset de usuarios del Fluig en el evento *displayFields* de una definición de formulario:

[?](#)

| `function displayFields(form,customHTML) {````// Obteniendo el usuario a través de dataset.````filter = new java.util.HashMap();````filter.put("colleaguePK.colleagueId","adm");````usuario = getDatasetValues('colleague',filter);````form.setValue('RNC_colab_abertura',usuario.get(0).get("colleagueId"));``}` |
| --- |

También se puede realizar una llamada a los Datasets dentro de la definición de formulario a través de funciones JavaScript.

El acceso a los Datasets también se puede realizar directamente en el formulario de la definición de formulario. Por ejemplo, para ingresar el Dataset de usuario e ingresar los valores en los espacios del HTML:

[?](#)

| ```````````````Prueba XMLRPC````````````function init(){````var filter = new Object();````filter["colleaguePK.colleagueId"] = "adm";````var colleagues = getDatasetValues("colleague", filter);````if(colleagues.length > 0){````document.getElementById("colleagueName").value = colleagues[0].colleagueName;````document.getElementById("colleagueId").value = colleagues[0].colleagueId;````document.getElementById("login").value = colleagues[0].login;````document.getElementById("extensionNr").value = colleagues[0].extensionNr;````document.getElementById("groupId").value = colleagues[0].groupId;````document.getElementById("mail").value = colleagues[0].mail;````}else{````alert("Ningún Usuario Encontrado");````}````}```````````````````````` Nombre del Usuario: ```````````` Matrícula del Usuario: ````````````Login del Usuario:```````````` Ramal del Usuario: ```````````` Grupo del Usuario: ```````````` Correo electrónico del Usuario: ``````````````````` |
| --- |

El Dataset para definir el formulario utiliza la misma llamada del Dataset de entidades, como en el caso del usuario. Mientras al contrario de pasar como parámetro el nombre del Dataset informaremos el número de la definición de formulario, por ejemplo:

[?](#)

| `function displayFields(form,customHTML) {````// Obteniendo el usuario a través de dataset.````filter = new java.util.HashMap();````filter.put("RNC_nr_solicitacao",new java.lang.Integer(20));````fichas = getDatasetValues(Number(676),filter);````log.info("Usuario de Apertura: "+ fichas.get(0).get("RNC_colab_abertura"));``}` |
| --- |

*Download de ejemplo de Formulario Combobox y Dataset:* [form.html](https://tdn.totvs.com/download/attachments/75270483/form.html?version=1&modificationDate=1379961445000&api=v2)*.*

### DataService

Es un servicio de datos que permite el acceso de aplicaciones de terceros a través del Fluig. Este servicio de datos soporta dos tipos de conexión, estos son: AppServer del Progress® y Web Services.

Los servicios de datos se registran y configuran a partir de la función Visualización de Servicios del Fluig Studio.

Para más información sobre el registro de los servicios, consulte: [Integración con Aplicaciones Externos](https://tdn.totvs.com/pages/viewpage.action?pageId=181962779). Y para información sobre el uso de los productos en los eventos, consulte:; [Personalización de Workflow](https://tdn.totvs.com/pages/viewpage.action?pageId=181962951).

****

# Padre Hijo

La técnica Padre X Hijo ha sido modificada y ahora la posición del tag *tablename* se realiza dentro del tag "table" en el código html.

En el nuevo modelo implementado ahora el procesador del fichero aplicará los cambios de padre hijo de la siguiente manera:

**<table tablename="prueba">** - La propriedad *tablename* determina que ahora abajo de esa tabla se implementará un sistema de padre hijo dentro de la definición de formulario. La etiqueta < table > tendrá sus barridos en la búsqueda de otros parámetros relacionados a la técnica que se explicarán más adelante en este texto. Se creará una otra <table> alrededor de la tabla principal que contendrá un botón que permite agregar nuevos hijos. Esto no ocurrirá apenas en los casos en que la propiedad *noaddbutton* también se ha informado en conjunto con la propiedad *tablename*.   

**<TR>** (primero abajo del table) - El primer tag de <TR> encontrada dentro de la tabla se visualiza como un tag que contendrá los labels de la tabla padre hijo a esta tag se agregará una columna <TD> conteniendo el ícono y la función de eliminar hijos existentes en ventana. Esta nueva columna será la primera columna a la izquierda de la tabla.

**<TR>**  (Segundo abajo del table) - La técnica padre hijo ocultará el renglón <TR> original, y transforma en su “template mestre” para crear hijos de aquellos tabla. Cada vez que se activa el botón “nuevo” todo el conjunto de espacios existentes dentro de este segundo <TR> se replicará en la ventana con los datos iniciales definidos para estos espacios.

**</table>**  - Fin del objetivo de la técnica.

La técnica también soporta nuevos atributos que se pueden pasar y utilizar para personalizar la técnica padre e hijo. Son ellas:

**noaddbutton** - Remueve el botón “agregar” de la ventana en el momento de la edición del formulario. Esto permite al desarrollador elegir donde colocará la función que creará los hijos en ventana pudiendo amarrar la llamada de la función en un link texto o una figura u otro objeto del html.

[?](#)

| `` |
| --- |

****

**nodeletebutton** - Remueve el botón “papelera” de la ventana en el momento de la edición de la ficha. Esto permite al desarrollador impedir la eliminación de los registros o definir otra forma de ejecutar la función que removerá los hijos de la tabla.

[?](#)

| ```` |
| --- |

****

**addbuttonlabel** - Determina que texto será colocado en el botón de agregar hijos de la técnica. En caso que no se indique el botón vendrá con el texto patrón (nuevo) 

[?](#)

| ```` |
| --- |

**addbuttonclass **- Permite definir que clases css será utilizada por el botón. Esa clase css deberá estar disponible en el documento html del fichero.

[?](#)

| ```` |
| --- |

****

**deleteicon** - Permite determinar que imagen funcionará como icono de la eliminación de hijos en ventana. Esta imagen deberá ser un anexo de la definición de formulario, y se deberá informar en la clase como cualquier imagen utilizada como anexo en la definición de formulario.

[?](#)

| `` |
| --- |

****

**customFnDelete** - Permite la personalización de la función que aparece al presionar clic que elimina un hijo de la table. La función personalizada deberá estar disponible en el documento html de la definición de formulario y, obligatoriamente, llamar la función patrón.

[?](#)

| `````function fnCustomDelete(oElement){````//Personalización````alert ("¡Eliminando hijo!");````// Llamada la función patrón, NO RETIRAR.````fnWdkRemoveChild(oElement);````//Personalización````alert ("¡Hijo eliminado!");``}` |
| --- |

Es posible utilizar la combinación de uno o más atributos en la misma tabla padre hijo. No obstante si se utiliza la propiedad *noaddbutton* los valores de las propiedades *addbuttonlabel* y *addbuttonclass* serán ignorados. No se generará un mensaje de error en la publicación o apersonamiento de esta definición de formulario, sin embargo en el momento de la edición del formulario la misma no presentará el botón patrón que permite registrar nuevos hijos en la definición de formulario. La propiedad *deleteicon* no se afecta por la propiedad *noaddbutton*. Ejemplo de uso combinado de parámetros:

[?](#)

| `` |
| --- |

- La técnica 2.0 Padre hijo no es compatible con la primera implementación. Definición de formularios que se han realizado con la primera técnica se deberán volver a trabajar para utilizar esta nueva técnica.

- La técnica 2.0 del padre Hijo no acepta todos los componentes html, pero acepta los principales, siendo los homologados por el producto los tipos:  *text, radio button, checkbox, select, select multiple, hidden, textarea, image *e* button. **Download de ejemplo de Formulario Padre x Hijo: form.htm.*
- Espacios de una tabla padre e hijo no estarán disponibles para utilizar como descripción de las fichas en la configuración del formulario.

### Padre Hijo Radio Button

Para utilizar los espacios radio button, además de la definición patrón del componente html, es necesario que se utilice el atributo ‘value’ para que los datos se guarden correctamente.

****

[?](#)

| `````````````Nome````Idade````Sim:````Não:``````````````````````````````````` |
| --- |

Ejemplos:** ****Formularios Padre Hijo + Eventos. **

# Traducción de formularios

Para traducir los formularios se debe utilizar la función i18n.translate(“literal_de_la_traducción”) en los puntos del archivo HTML que se deben traducir, según el ejemplo a continuación:

[?](#)

| `i18n.translate("nm_cliente")``````i18n.translate("contato_cliente")``` |
| --- |

Las literales y sus respectivos valores se informan en archivos de propiedades con la extensión .properties para cada uno de los idiomas deseados. Los idiomas soportados para la traducción son los mismos soportados por le Fluig.

- Portugués (pt_BR);
- Inglés (en_US);
- Español (es).

Los archivos que contienen las literales tienen la siguiente nomenclatura:

- **Portugués:** nombre_del_formulario_pt_BR.properties;
- **Inglés:** nombre_del_formulario_en_US.properties;
- **Español: **nombre_del_formulario_es.properties.

Los archivos de propiedades se crearán según los pasos presentados a continuación:

- [Paso 1](#)
- [Paso 2](#)
- [Paso 3](#)

 - Para generar los archivos de propiedades en la visión *Explorador de Paquetes,* se debe ingresar el archivo HTML del formulario a traducir, presionar clic con el botón derecho e ingresar a la opción *Externalizar Strings*.

![](/download/attachments/75270483/Passo1.PNG?version=1&modificationDate=1397132938000&api=v2)

**Figura 1 - Menú Contextual Externalizar Strings.**

  - Los archivos que contienen las literales son creados en la carpeta del formulario.

![](/download/attachments/75270483/Passo2.PNG?version=1&modificationDate=1397133273000&api=v2)

**Figura 2 - Archivos Properties en la Carpeta del Formulario.**

****

 - Informe los valores correspondientes a las literales para el idioma de cada archivo.

![](/download/attachments/75270483/Passo3.PNG?version=1&modificationDate=1397133358000&api=v2)

****

**Figura 3 - Edición de un Archivo Properties.**

****

Al exportar un formulario para el Fluig, los archivos de propiedades conteniendo las literales son publicados como sus anexos.
El formulario se presenta en el idioma que está configurado para el usuario corriente.


<!-- anchors: DesenvolvimentodeFormulários-Índice, DesenvolvimentodeFormulários-Declaración<!DOCTYPE>HTML, highlighter_978737, DesenvolvimentodeFormulários-FormController, DesenvolvimentodeFormulários-PersonalizacióndeFormularios:, samples, samples-1, samples-2, samples-3, samples-4, samples, samples-1, samples-2, samples-3, samples-4, samples-5, samples-6, highlighter_581000, highlighter_617002, DesenvolvimentodeFormulários-Controlesvisuales, DesenvolvimentodeFormulários-MáscaradeEspacios, highlighter_131864, highlighter_81844, DesenvolvimentodeFormulários-ComboBox, highlighter_252928, highlighter_313818, highlighter_139519, highlighter_537059, DesenvolvimentodeFormulários-Zoom, highlighter_445933, highlighter_820263, highlighter_984737, highlighter_511827, highlighter_859667, highlighter_176390, DesenvolvimentodeFormulários-ZoomExterno, highlighter_770486, highlighter_108464, highlighter_828818, highlighter_358159, DesenvolvimentodeFormulários-ServiciosdeDatos, DesenvolvimentodeFormulários-Dataset, highlighter_26208, highlighter_532299, highlighter_469160, DesenvolvimentodeFormulários-DataService, DesenvolvimentodeFormulários-PadreHijo, highlighter_687815, highlighter_717113, highlighter_423227, highlighter_328071, highlighter_494750, highlighter_429054, highlighter_405559, DesenvolvimentodeFormulários-PadreHijoRadioButton, highlighter_509419, DesenvolvimentodeFormulários-Traduccióndeformularios, highlighter_80835, samples, samples-1, samples-2, samples-3 -->
