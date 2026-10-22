---
title: "Checklist para la actualización Voyager (2.0)"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=1014631943"
scraped_at: "2026-03-09T05:15:24.870Z"
depth: 4
anchors: 9
child_links: 22
---

# Checklist para la actualización Voyager (2.0)

# Objetivo

---

Procuramos anticiparnos a todas las situaciones para que no se enfrente a ninguna inconsistencia; sin embargo, puede haber algunos impactos en su plataforma, que requieren atención en el momento de la actualización.  

El objetivo de este *check-list* es describir qué ítems deben observarse de forma relevante para que la actualización ocurra de manera tranquila en su empresa.

# Ítems del check-list

---

A continuación, vea los ítems que merecen atención, antes de actualizar su plataforma para la Voyager (2.0).

- ### Actualización para la Voyager (2.0)

Para aplicar la **Voyager (2.0)**, es necesario que su plataforma esté en la **actualización 1.8.2**. Si su entorno está en una actualización inferior, primero actualícelo al paquete **más reciente de 1.8.2 (como mínimo 1.8.2-250722)** y, solo después, aplique la actualización **2.0**. Consulte algunos enlaces útiles: [Guía de instalación de la plataforma](/pages/viewpage.action?pageId=257622732), [Guía de actualización de la plataforma](/pages/viewpage.action?pageId=271666186), [Instalación y actualización](/pages/viewpage.action?pageId=144409653).

- ### Base de datos MySQL

Si utiliza la base de datos **MySQL**, es **obligatorio** que esté en la versión **8.0** para aplicar la actualización **Voyager (2.0)** en su plataforma. Si fuera necesario actualizar su base de datos a la versión 8.0 de MySQL, recomendamos consultar a un especialista en base de datos, debido a la complejidad de los procedimientos. Más información en: [Configuración de base de datos MySQL](https://tdn.totvs.com/pages/viewpage.action?pageId=257623464#Configura%C3%A7%C3%A3odebancodedadosMySQL-Passoapassoparaconfigura%C3%A7%C3%A3odoMySQL).

- ### Cambio del archivo de configuraciones

A partir de la actualización Voyager (2.0), el **archivo de configuraciones** de la plataforma dejará de ser domain.xml y será **standalone.xml**. Este ítem solamente es informativo, no es necesario realizar ningún procedimiento, ya que la conversión de las configuraciones a standalone.xml se realizará automáticamente al actualizar la plataforma.

- ### Cambio de local del archivo server.log

A partir de la actualización Voyager (2.0), el archivo **server.log** se almacenará en **[directorio_instalación]\appserver\standalone\log**. Este ítem solamente es informativo; no es necesario realizar ningún procedimiento.

- ### Cambio de local de las carpetas temporales

A partir de la actualización Voyager (2.0), las carpetas temporales se almacenarán en **[directorio_instalación]\appserver\standalone**. Este ítem solamente es informativo; no es necesario realizar ningún procedimiento.

- ### Recursos de Inteligencia Artificial (IA) y Net Promoter Score (NPS)

Para el correcto funcionamiento de los recursos que utilizan **Inteligencia Artificial (IA)** y **Net Promoter Score (NPS)**, es necesario liberar el acceso **HTTPS** a la dirección [https://api-fluig.totvs.app](https://api-fluig.totvs.app) en su infraestructura de red. Más información en: [Puertos y direcciones](/pages/viewpage.action?pageId=275591571).

- ### Principales cambios de front-end a Voyager (2.0)

Recomendamos la lectura del material [Principales cambios de front-end - Fluig Voyager (2.0)](https://tdn.totvs.com/x/5oYuOg) que muestra los impactos en la plataforma con un enfoque en la modernización de bibliotecas, optimización de carga, reorganización de paths e introducción de nuevos recursos como clases helpers, variables CSS y modo oscuro en el tema responsivo.

Importante 

Se recomienda realizar una **copia de seguridad** de la base de datos y de la instalación de TOTVS Fluig antes de aplicar la actualización.

Consulte la guía de [Copia de seguridad de la aplicación Fluig](https://tdn.totvs.com/pages/viewpage.action?pageId=271666031) y la [Guía de actualización de Fluig](/pages/viewpage.action?pageId=271666186) para más detalles.

Sugerencia

Consulte nuestra documentación [Matriz de Portabilidad](/display/fluigesp/Plataforma+%7C+Matriz+de+portabilidad) e [Dimensionamiento](https://tdn.totvs.com/x/9QpbB) para obtener más información sobre los requisitos y el desempeño de TOTVS Fluig.


<!-- anchors: ChecklistparalaactualizaciónVoyager(2.0)-Objetivo, ChecklistparalaactualizaciónVoyager(2.0)-Ítemsdelcheck-list, ChecklistparalaactualizaciónVoyager(2.0)-ActualizaciónparalaVoyager(2.0), ChecklistparalaactualizaciónVoyager(2.0)-BasededatosMySQL, ChecklistparalaactualizaciónVoyager(2.0)-Cambiodelarchivodeconfiguraciones, ChecklistparalaactualizaciónVoyager(2.0)-Cambiodelocaldelarchivoserver.log, ChecklistparalaactualizaciónVoyager(2.0)-Cambiodelocaldelascarpetastemporales, ChecklistparalaactualizaciónVoyager(2.0)-RecursosdeInteligenciaArtificial(IA)yNetPromoterScore(NPS), ChecklistparalaactualizaciónVoyager(2.0)-Principalescambiosdefront-endaVoyager(2.0) -->
