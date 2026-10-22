---
title: "10660671 DMINA-11045 DT Factura Electrónica con Impuesto Local de Retención MEX"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=594170942"
scraped_at: "2026-03-09T05:31:52.465Z"
depth: 4
anchors: 10
child_links: 125
---

# 10660671 DMINA-11045 DT Factura Electrónica con Impuesto Local de Retención MEX

## 01. DATOS GENERALES

| Producto | TOTVS Backoffice |  |  |
| --- | --- | --- | --- |
| Línea de producto:  | Línea Protheus |  |  |
| Segmento: | Servicios |  |  |
| Módulo: | SIGAFAT - Facturación |  |  |
| Función: | Rutina(s) | Nombre Técnico | Fecha |
| LOCXFUNA | Funciones genéricas de localizaciones. | 13/02/2021 |  |
| FATSMEX.INI | Archivo de configuración para Generación de XML para Documentos de Salida | 11/02/2021 |  |
| FATEMEX.INI | Archivo de configuración para Generación de XML para Documentos de Entrada | 11/02/2021 |  |

País:MéxicoTicket:10660671Requisito/Story/Issue (informe el requisito vinculado):DMINA-11045

## 02. SITUACIÓN/REQUISITO

Cuando se realiza el timbrado de una Factura de Venta que contiene impuestos locales de tipo retención, se genera en el atributo **"TasadeRetencion"** a 6 decimales; sin embargo el SAT señala en el Estándar y en el Esquema del Complemento para Impuestos Locales, que el atributo **"TasadeRetencion"** debe contener solo 2 decimales, por lo tanto al timbrar dicho documento el PAC manda el siguiente error:**

- *"XML mal formado: cvc-fractionDigits-valid: Value '0.065000' has 3 fraction digits".*

## 03. SOLUCIÓN

- En la rutina **Funciones genéricas de localizaciones**"LOCXFUNA", se realizan las siguientes modificaciones: En la función **fImptosD()**, cuando son impuestos locales de tipo traslados o retención para que no realice la conversión de los porcentajes de la tasa.
- En la función **fXMLFun()**, se retiran las URL's que estaban en el nodo de complemento dentro de "ImpuestosLocales".

Dentro del ***Generación de XML para Documentos de Salida** (FATSMEX.INI) y **Generación de XML para Documentos de Entrada**(FATEMEX.INI)*, se realiza la modificación en el nodo de "Comprobante" añadiendo las URL's requeridas para los "Impuestos Locales".

                        - [Pre condiciones](#tabs-paso1)

                        - [Pasos](#tabs-paso2)

1. Realizar un respaldo de repositorio (.rpo)
2. Aplicar un el parche correspondiente al issue ***DMINA-11045**** *
3. Actualizar el archivo ***FATSMEX.INI ***para las Facturas de Venta y actualizar el archivo ***FATSMEX.INI** *para las Notas de Crédito.Importante **Si en su ambiente ya existe un archivo FATSMEX.INI y contiene personalizaciones, es recomendable evitar su actualización; en cambio deberá editarlo y realizar las siguientes modificaciones que corresponden a la solución del presente issue:**En el nodo de** "<cfdi:Comprobante"**Agregar una nueva línea después de la línea ***(PRE) _aTotal[001] += ' xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"'***(PRE) _aTotal[001] += ' xmlns:implocal="[http://www.sat.gob.mx/implocal](http://www.sat.gob.mx/implocal)"'Cambiar la línea: (PRE) _aTotal[001] += ' xsi:schemaLocation="[http://www.sat.gob.mx/cfd/3](http://www.sat.gob.mx/cfd/3) [http://www.sat.gob.mx/sitio_internet/cfd/3/cfdv33.xsd](http://www.sat.gob.mx/sitio_internet/cfd/3/cfdv33.xsd) 'Por estas línea:(PRE) _aTotal[001] += ' xsi:schemaLocation="[http://www.sat.gob.mx/cfd/3](http://www.sat.gob.mx/cfd/3) [http://www.sat.gob.mx/sitio_internet/cfd/3/cfdv33.xsd](http://www.sat.gob.mx/sitio_internet/cfd/3/cfdv33.xsd) [http://www.sat.gob.mx/implocal](http://www.sat.gob.mx/implocal) [http://www.sat.gob.mx/sitio_internet/cfd/implocal/implocal.xsd](http://www.sat.gob.mx/sitio_internet/cfd/implocal/implocal.xsd)'**Si en su ambiente ya existe un archivo FATEMEX.INI y contiene personalizaciones, es recomendable evitar su actualización; en cambio deberá editarlo y realizar las siguientes modificaciones que corresponden a la solución del presente issue:**En el nodo de** "<cfdi:Comprobante"**Agregar una nueva línea después de la línea ***(PRE) _aTotal[001] += ' xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"'***(PRE) _aTotal[001] += ' xmlns:implocal="[http://www.sat.gob.mx/implocal](http://www.sat.gob.mx/implocal)"'Cambiar la línea: (PRE) _aTotal[001] += ' xsi:schemaLocation="[http://www.sat.gob.mx/cfd/3](http://www.sat.gob.mx/cfd/3) [http://www.sat.gob.mx/sitio_internet/cfd/3/cfdv33.xsd](http://www.sat.gob.mx/sitio_internet/cfd/3/cfdv33.xsd) "'Por estas línea:(PRE) _aTotal[001] += ' xsi:schemaLocation="[http://www.sat.gob.mx/cfd/3](http://www.sat.gob.mx/cfd/3) [http://www.sat.gob.mx/sitio_internet/cfd/3/cfdv33.xsd](http://www.sat.gob.mx/sitio_internet/cfd/3/cfdv33.xsd) [http://www.sat.gob.mx/implocal](http://www.sat.gob.mx/implocal) [http://www.sat.gob.mx/sitio_internet/cfd/implocal/implocal.xsd](http://www.sat.gob.mx/sitio_internet/cfd/implocal/implocal.xsd)"'**Nota:***Si tiene dudas de cómo realizar los cambios, consulte al área de Soporte o Servicios.*
4. Validar que se tiene activa la funcionalidad de Facturación Electrónica para México CFDI (véase la sección **05. ASUNTOS RELACIONADOS**)
5. Contar con un ***Cliente***.
6. Contar con uno o más ***Productos***.
7. Contar con una TES con IVA y retención de impuestos Locales.

1. En el módulo **Facturación** (SIGAFAT)
2. Ir al menú **Actualizaciones | Facturación | Facturaciones (MATA467N)**.
3. Incluir una nueva Factura de Salida, en donde:
- El ítem utilizar el *Tipo de Entrada/Salida* con cálculo de los impuestos IVA y retención de Impuestos Locales.
4. Una vez que se tienen informados todos los datos del documento, presionar **Grabar** para confirmar el guardado.
5. Confirmar la generación del CFDI.
6. Validar que hay haya generado con éxito el Timbre Fiscal.

## 04. INFORMACIÓN ADICIONAL

No aplica.

****

# ¡IMPORTANTE!

Se debe contar con la funcionalidad de Facturación Electrónica de modalidad CFDI 3.3, y la solución aplica para versión 12.1.17 o superior.

## 05. ASUNTOS RELACIONADOS

- En el siguiente Documento de Referencia, encontrará información sobre la implementación de la Facturación Electrónica de México CFDI 3.3 y en la sección ***6*** encontrará información sobre la generación del **Complemento otros derechos de impuestos**:[DT_Factura_Electronica_Mexico_CFDI_Version_3_3](https://tdn.totvs.com/x/cPNZE)


<!-- anchors: id-10660671DMINA11045DTFacturaElectrónicaconImpuestoLocaldeRetenciónMEX-01.DATOSGENERALES, id-10660671DMINA11045DTFacturaElectrónicaconImpuestoLocaldeRetenciónMEX-02.SITUACIÓN/REQUISITO, id-10660671DMINA11045DTFacturaElectrónicaconImpuestoLocaldeRetenciónMEX-03.SOLUCIÓN, aui-uid-0, aui-uid-1, tabs-paso1, tabs-paso2, id-10660671DMINA11045DTFacturaElectrónicaconImpuestoLocaldeRetenciónMEX-04.INFORMACIÓNADICIONAL, id-10660671DMINA11045DTFacturaElectrónicaconImpuestoLocaldeRetenciónMEX-¡IMPORTANTE!, id-10660671DMINA11045DTFacturaElectrónicaconImpuestoLocaldeRetenciónMEX-05.ASUNTOSRELACIONADOS -->
