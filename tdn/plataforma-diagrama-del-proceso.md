---
title: "Plataforma ❙ Diagrama del proceso"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=976153314"
scraped_at: "2026-03-09T05:15:02.940Z"
depth: 4
anchors: 8
child_links: 62
---

# Plataforma ❙ Diagrama del proceso

Consulte la documentación correcta:

Esta documentación se refiere al nuevo editor de procesos de la plataforma. Si está utilizando el editor de procesos actual, acceda a [Configuración del proceso](/pages/viewpage.action?pageId=268806578).

IDIOMA

# Hablando del diagrama del proceso...

---

El diagrama es la representación gráfica de todo el flujo del proceso. Está formado por los [componentes](/pages/viewpage.action?pageId=976155650) que indican el inicio del proceso, sus etapas, las direcciones en las que la solicitud puede seguir y su fin, ya sea por anulación o por la finalización de la solicitud atendida.

En este recurso, se elabora el diagrama del proceso añadiendo los componentes y los flujos. Es posible definir la disposición de cada componente con el fin de representar cada etapa por la cual puede pasar la solicitud del proceso, permitiendo así una visualización simple y una comprensión rápida y fácil de todo el proceso.

También es posible configurar cada componente de acuerdo con la necesidad de cada etapa y de cada proceso, garantizando un flujo pertinente a cada negocio.

Los componentes que permiten elaborar el diagrama del proceso se exhiben en la barra de componentes, ubicada en la parte inferior del área de elaboración. Los componentes disponibles para uso son:

![](/download/attachments/976153314/in%C3%ADcio-mini.png?version=1&modificationDate=1755031745860&api=v2)

INICIO

![](/download/attachments/976153314/atividade-mini.png?version=1&modificationDate=1755031745667&api=v2)

ACTIVIDAD

![](/download/attachments/976153314/subprocesso-mini.png?version=1&modificationDate=1755031746883&api=v2)

SUBPROCESO

![](/download/attachments/976153314/paralelo-mini.png?version=1&modificationDate=1755031745997&api=v2)

PARALELO

![](/download/attachments/976153314/join-mini.png?version=1&modificationDate=1755031745927&api=v2)

JOIN

![](/download/attachments/976153314/exclusivo-mini.png?version=1&modificationDate=1755031746670&api=v2)

EXCLUSIVO

![](/download/attachments/976153314/cancelamento-mini.png?version=1&modificationDate=1755031746070&api=v2)

CANCELACIÓN

![](/download/attachments/976153314/fim-mini.png?version=1&modificationDate=1755031745737&api=v2)

FIN

![](/download/attachments/976153314/fluxos-mini.png?version=1&modificationDate=1755031745800&api=v2)

FLUJOS

La definición sobre quién recibirá la solicitud en cada etapa a la que llega se realiza por medio de los  [mecanismos de asignación](/pages/viewpage.action?pageId=977190518). A partir de ellos, es posible determinar qué personas pueden ser responsables de la solicitud en cada etapa, así como si la etapa debe ejecutarse individualmente, es decir, por una única persona; o de forma conjunta, por más de una persona.

Los tipos de mecanismos de asignación se muestran de acuerdo con el componente, ya que algunos tipos no pueden utilizarse en determinados componentes. En el componente Inicio, por ejemplo, no se muestran los mecanismos Por grupo y Por papel, ya que no tienen sentido en el contexto del componente, que representa la apertura de una solicitud, acción que es realizada por una única persona.

![](/download/attachments/976153314/diagrama-completo.png?version=2&modificationDate=1755086392750&api=v2)

## Ver componentes disponibles

---

****

        Your browser does not support the HTML5 video element

**01.** Con el proceso en el modo de [edición](https://tdn.totvs.com/pages/viewpage.action?pageId=236430412#Plataforma%E2%9D%99Configurarprocesos-Editarproceso), en la pestaña![](/download/attachments/976153314/diagrama.png?version=1&modificationDate=1755031746817&api=v2) **Diagrama**, encuentre la barra de componentes ![](/download/attachments/976153314/barra-de-componentes.png?version=1&modificationDate=1755031746597&api=v2) , ubicada en la parte inferior del área de elaboración.

**02.** Ve todos los componentes disponibles para usar al elaborar el diagrama del proceso.

Algunos componentes están agrupados en la barra, siendo necesario hacer clic sobre el componente que está visible para ver los demás. De esta forma:

- Haga clic sobre el componente **Fin** ![](/download/attachments/976153314/fim-mini.png?version=1&modificationDate=1755031745737&api=v2) para ver también el componente **Anulación**;

- Haga clic sobre el componente **Actividad**![](/download/attachments/976153314/atividade-mini.png?version=1&modificationDate=1755031745667&api=v2) para ver también el componente **Subproceso** ![](/download/attachments/976153314/subprocesso-mini.png?version=1&modificationDate=1755031746883&api=v2);

- Haga clic sobre el componente **Exclusivo** ![](/download/attachments/976153314/exclusivo-mini.png?version=1&modificationDate=1755031746670&api=v2) para ver también los componentes **Paralelo** ![](/download/attachments/976153314/paralelo-mini.png?version=1&modificationDate=1755031745997&api=v2)y **Join**.

## Agregar componente en el diagrama

---

****

        Your browser does not support the HTML5 video element

**01.** Con el proceso en el modo de [edición](https://tdn.totvs.com/pages/viewpage.action?pageId=236430412#Plataforma%E2%9D%99Configurarprocesos-Editarproceso), en la pestaña![](/download/attachments/976153314/diagrama.png?version=1&modificationDate=1755031746817&api=v2) **Diagrama**, encuentre el componente deseado en la barra de componentes ![](/download/attachments/976153314/barra-de-componentes.png?version=1&modificationDate=1755031746597&api=v2) , ubicada en la parte inferior del área de elaboración.

**02.** Haga clic en el componente y arrástrelo a la ubicación deseada en el diagrama del proceso.

**03.** Haga clic en **Guardar borrador,** ubicado en el lado derecho de la barra superior, para guardar los cambios realizados en el diagrama.

## Mover componente en el diagrama

---

****

        Your browser does not support the HTML5 video element

**01.** Con el proceso en el modo de [edición](https://tdn.totvs.com/pages/viewpage.action?pageId=236430412#Plataforma%E2%9D%99Configurarprocesos-Editarproceso), en la pestaña![](/download/attachments/976153314/diagrama.png?version=1&modificationDate=1755031746817&api=v2) **Diagrama**, encuentre el componente que desea mover.

**02.** Haga clic en el componente y arrástrelo a la ubicación deseada en el diagrama del proceso.

**03.** Haga clic en **Guardar borrador,** ubicado en el lado derecho de la barra superior, para guardar los cambios realizados en el diagrama.

## Agregar flujo entre componentes del diagrama

---

****

        Your browser does not support the HTML5 video element

**01.** Con el proceso en el modo de [edición](https://tdn.totvs.com/pages/viewpage.action?pageId=236430412#Plataforma%E2%9D%99Configurarprocesos-Editarproceso), en la pestaña![](/download/attachments/976153314/diagrama.png?version=1&modificationDate=1755031746817&api=v2) **Diagrama**, encuentre los componentes que se interconectarán por un flujo.

**02.** Haga clic en el componente desde el cual debe partir el flujo, es decir, el componente de origen.

**03.** Haga clic en **Línea** ![](/download/attachments/976153314/fluxos-mini.png?version=1&modificationDate=1755031745800&api=v2).

**04.** Mueva el cursor del mouse hasta el componente al cual debe dirigirse el flujo, es decir, hacia el componente de destino del flujo.

**05.** Haga clic en **Guardar borrador,** ubicado en el lado derecho de la barra superior, para guardar los cambios realizados en el diagrama.

## Crear pliegue en el flujo entre componentes del diagrama

---

****

        Your browser does not support the HTML5 video element

**01.** Con el proceso en el modo de [edición](https://tdn.totvs.com/pages/viewpage.action?pageId=236430412#Plataforma%E2%9D%99Configurarprocesos-Editarproceso), en la pestaña![](/download/attachments/976153314/diagrama.png?version=1&modificationDate=1755031746817&api=v2) **Diagrama**, encuentre el flujo para el cual desea crear un pliegue.

**02.** Haga clic en la posición del flujo donde debe hacerse el pliegue, mantenga presionado el clic y arrastre el flujo hasta formar el ángulo deseado.

**03.** Reposicione los componentes interconectados por el flujo de la forma deseada.

**04.** Haga clic en **Guardar borrador,** ubicado en el lado derecho de la barra superior, para guardar los cambios realizados en el diagrama.

## Configurar componente del diagrama

---

****

        Your browser does not support the HTML5 video element

**01.** Con el proceso en el modo de [edición](https://tdn.totvs.com/pages/viewpage.action?pageId=236430412#Plataforma%E2%9D%99Configurarprocesos-Editarproceso), en la pestaña![](/download/attachments/976153314/diagrama.png?version=1&modificationDate=1755031746817&api=v2) **Diagrama**, encuentre y haga clic en el componente que desea configurar.

Las configuraciones disponibles para el componente se muestran en el lado derecho.

**02.** Defina las configuraciones deseadas para el componente que forma parte del diagrama del proceso.

Cada componente tiene características y opciones de configuración específicas. Haga clic en cada componente para obtener detalles sobre su configuración.

![](/download/attachments/976153314/in%C3%ADcio-mini.png?version=1&modificationDate=1755031745860&api=v2)

[Inicio](/pages/viewpage.action?pageId=975770103)

![](/download/attachments/976153314/atividade-mini.png?version=1&modificationDate=1755031745667&api=v2)

[Actividad](/pages/viewpage.action?pageId=976136505)

![](/download/attachments/976153314/subprocesso-mini.png?version=1&modificationDate=1755031746883&api=v2)

[Subproceso](/pages/viewpage.action?pageId=976148180)

![](/download/attachments/976153314/paralelo-mini.png?version=1&modificationDate=1755031745997&api=v2)

[Paralelo](/pages/viewpage.action?pageId=975767552)

![](/download/attachments/976153314/join-mini.png?version=1&modificationDate=1755031745927&api=v2)

[Join](/pages/viewpage.action?pageId=975767207)

![](/download/attachments/976153314/exclusivo-mini.png?version=1&modificationDate=1755031746670&api=v2)

[Exclusivo](/pages/viewpage.action?pageId=913802155)

![](/download/attachments/976153314/cancelamento-mini.png?version=1&modificationDate=1755031746070&api=v2)

[Cancelación](/pages/viewpage.action?pageId=975766400)

![](/download/attachments/976153314/fim-mini.png?version=1&modificationDate=1755031745737&api=v2)

[Fin](/pages/viewpage.action?pageId=975765588)

![](/download/attachments/976153314/fluxos-mini.png?version=1&modificationDate=1755031745800&api=v2)

[Flujos](/pages/viewpage.action?pageId=974815001)

**03.** Haga clic en **Guardar borrador,** ubicado en el lado derecho de la barra superior, para guardar las configuraciones realizadas en el componente.

## Eliminar componente del diagrama

---

****

        Your browser does not support the HTML5 video element

**01.** Con el proceso en el modo de [edición](https://tdn.totvs.com/pages/viewpage.action?pageId=236430412#Plataforma%E2%9D%99Configurarprocesos-Editarproceso), en la pestaña![](/download/attachments/976153314/diagrama.png?version=1&modificationDate=1755031746817&api=v2) **Diagrama**, encuentre y haga clic en el componente que desea eliminar.

**02.** Haga clic en **Eliminar**![](/download/attachments/976153314/excluir.png?version=1&modificationDate=1755031745530&api=v2).

**03.** En el mensaje de confirmación que se muestra, haga clic en **Eliminar componente**.

Al eliminar un componente, todas sus configuraciones también se eliminan y no es posible restaurarlo.

Para desistir de eliminar el componente, haga clic en **Anular**.

**04.** Haga clic en **Guardar borrador,**ubicado en el lado derecho de la barra superior, para guardar los cambios realizados en el diagrama.

¡Manténgase atento!

Esta documentación es válida a partir de la actualización **Voyager (2.0)**. Si utiliza una actualización anterior, puede tener información diferente de la que ve en su plataforma.


<!-- anchors: Plataforma❙Diagramadelproceso-Hablandodeldiagramadelproceso..., Plataforma❙Diagramadelproceso-Vercomponentesdisponibles, Plataforma❙Diagramadelproceso-Agregarcomponenteeneldiagrama, Plataforma❙Diagramadelproceso-Movercomponenteeneldiagrama, Plataforma❙Diagramadelproceso-Agregarflujoentrecomponentesdeldiagrama, Plataforma❙Diagramadelproceso-Crearpliegueenelflujoentrecomponentesdeldiagrama, Plataforma❙Diagramadelproceso-Configurarcomponentedeldiagrama, Plataforma❙Diagramadelproceso-Eliminarcomponentedeldiagrama -->
