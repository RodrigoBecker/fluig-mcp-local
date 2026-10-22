---
title: "Plataforma ❙ Búsqueda"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=236430309"
scraped_at: "2026-03-09T05:04:57.278Z"
depth: 3
anchors: 7
child_links: 36
---

# Plataforma ❙ Búsqueda

# Hablando de búsqueda...

---

La búsqueda permite buscar objetos sociales, documentos, carpetas, formularios, registros de formularios, personas influyentes en determinados asuntos "Influenciadores", artículos, publicaciones y personas a partir de cualquier página de la plataforma.

La misma permite que las búsquedas puedan personalizarse y suministrar criterios de búsqueda definidos por el usuario, haciendo posible restringir los lugares, tipos, tiempo sobre los recursos que están siendo buscados.

- [Campo de búsqueda](#)
- [Resultado de la búsqueda](#)

![](/download/attachments/236430309/campo-busca.png?version=1&modificationDate=1756822693790&api=v2)

![](/download/attachments/236430309/Busca%20ES.png?version=2&modificationDate=1756822728750&api=v2)

## Hacer búsqueda

---

**01.** En el menú principal, haga clic en ![](/download/attachments/236430309/%C3%ADcone-busca.png?version=1&modificationDate=1756822442143&api=v2) **Buscar**.

**02.** Ingrese el texto que desea buscar.

Se mostrará una lista de sugerencias. Se puede seleccionar una palabra de la lista o escribir cualquier palabra.

Como estándar, el indexador de la plataforma (Solr) indexa la búsqueda por hasta 15 caracteres. Esta característica se definió para no ocupar demasiado espacio en disco en el momento de la indexación.

¡Sugerencia!

Utilice estos [recursos especiales](#Plataforma❙Búsqueda-Consultarcaracterescomodines) para una búsqueda más precisa.

**03.** En el teclado, presione **ENTER**.

La pantalla de resultado de la búsqueda se mostrará con la solapa **Todo** seleccionada.

## Filtrar resultado

---

**01.** Acceder a los resultados de búsqueda presentados tal como se muestra en el ítem [Hacer búsqueda](#Plataforma❙Búsqueda-Hacerbúsqueda).

**02.** En el resultado presentado, haga clic en ![](/download/attachments/236430309/filtrar.png?version=1&modificationDate=1756823252160&api=v2) **F****iltrar**.

El área de filtros se expandirá y se mostrará una lista de filtros.

- **Filtro por período**: es posible seleccionar los siguientes filtros:**en la última hora**;
- **en el último día**;
- **en la última semana**;
- **en el último mes**;
- **en el último año**;
- **determinar un período**: informando la fecha de **comienzo** y **final** de la búsqueda. 

Para cada filtro seleccionado, un “tag” con el filtro seleccionado se muestra arriba del filtro facilitando la visión de lo que se está filtrando. Este"tag" tiene un botón para eliminar el filtro, rehaciendo la búsqueda otra vez sin filtro.

**03**. Si el filtro elegido fue Informar período, después de definir las fechas inicial y final, haga clic en **Filtrar**.

Todas las búsquedas presentan el resultado ordenado por relevancia. Se puede modificar el orden del resultado al más reciente o al más antiguo. Para ello, presione la casilla de selección del borde superior derecho de la pantalla de resultado y seleccione una opción.

## Ordenar resultados de la búsqueda

---

**01.** Acceder a los resultados de búsqueda presentados tal como se muestra en el ítem [Hacer búsqueda](#Plataforma❙Búsqueda-Hacerbúsqueda).

**02**. En el resultado mostrado, ajuste el orden como lo desee.

Las opciones de orden disponibles son: 

- **Ordenar por Relevancia**: determina que los documentos favoritos se mostrarán primero;

- **Ordenar por Más reciente**: determina que los documentos se mostrarán por la fecha de creación en forma descendente, es decir, los creados más recientemente primero;

- **Ordenar por Más antiguo**: determina que los documentos se mostrarán por la fecha de creación en forma creciente, es decir, los más antiguos primero.

## Agregar a los favoritos

---

**01.** Acceder a los resultados de búsqueda presentados tal como se muestra en el ítem [Hacer búsqueda](#Plataforma❙Búsqueda-Hacerbúsqueda).

**02**. En los resultados de búsqueda presentados, haga clic en el ícono **Favorito**![](/download/attachments/236430309/favorito.png?version=1&modificationDate=1756831802320&api=v2), que se encuentra a la derecha de la carpeta o documento deseado.

**03.** Se mostrará una ventana de confirmación indicando que la acción se realizó con éxito.

Para obtener más detalles sobre los favoritos, [hacer clic aquí](/pages/viewpage.action?pageId=236430299). 

## Consultar caracteres comodines

---

A partir de esta tabla, se listan los caracteres comodines y términos especiales que se pueden utilizar en la búsqueda de la plataforma.

| ARGUMENTO | EFECTO | EJEMPLO |
| --- | --- | --- |
| ARGUMENTO | EFECTO | EJEMPLO |
| #Hashtags | Permite efetuar la búsqueda por hashtags que contenga el tag buscado. | #saludableRetorna publicaciones que contengam la tag saludable |
| ? | Permite efectuar la búsqueda por palavras que tengan cualquier caracter em el lugar de la señal de interrogación.No puede ser usado em el comienzo de um término. | li?ónRetorna limón y libón. |
| * | Permite efectuar la búsqueda com partes de uma palavra.No puede ser usado em el comienzo de um término. | li*ónRetorna limón, libón y listón. |
| ~ Proximidad | Permite efectuar la búsqueda de documentos que tengan términos próximos. | “Intereses BACEN”~5Retorna todos los documentos donde los términos Intereses y BACEN estén hasta cinco palavras distantes uno del outro. |
| O | Permite efectuar la búsqueda em los documentos que tengan alguno de los términos especificados. | Intereses O BACENRetorna los documentos que tengan lá palavra Intereses o BACEN. |
| Y | Permite efectuar la búsqueda em los documentos que tengan todos los términos especificados. | Intereses Y BACENRetorna los documentos que tengan la palavra Intereses y BACEN. |
| + | Torna um término requerido em la búsqueda. | Intereses + BACENGarantiza que todos los documentos retornados tengan el término BACEN. |
| NOT | Excluye um término de la búsqueda. | Intereses NOT BACENRetorna los documentos que tengan el término Intereses, pero no tengan el término BACEN. |
| - | Excluye um término de la consulta. | Intereses -BACENRetorna los documentos que tengan el término Intereses, pero no tengan el término BACEN. |
| () Agrupación | Permite agrupar argumentos. | (Intereses + BACEN) O COPONRetorna todos los documentos que tengan el término Intereses (opcional) y BACEN o que tengan el término COPON. |
| “” Frase Exacta | Permite efectuar la búsqueda em los documentos que tengan la frase exacta. | “Intereses definidos por el Banco Central”Retorna solamente los documentos que tengan esa frase exacta y en esa secuencia. |

¡Atención!

Esta documentación es válida a partir de la actualización **Voyager (2.0)**. Si utiliza una actualización anterior, puede contener información diferente de la que ve en su plataforma.


<!-- anchors: Plataforma❙Búsqueda-Hablandodebúsqueda..., Busca, Plataforma❙Búsqueda-Hacerbúsqueda, Plataforma❙Búsqueda-Filtrarresultado, Plataforma❙Búsqueda-Ordenarresultadosdelabúsqueda, Plataforma❙Búsqueda-Agregaralosfavoritos, Plataforma❙Búsqueda-Consultarcaracterescomodines -->
