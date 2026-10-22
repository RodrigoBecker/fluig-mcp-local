---
title: "Platform ❙ Process diagram"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=979505413"
scraped_at: "2026-03-09T05:16:33.105Z"
depth: 4
anchors: 8
child_links: 57
---

# Platform ❙ Process diagram

Consult the correct documentation:

This documentation refers to the new process editor of the platform. If you are using the current process editor, access [Configuring processes](/pages/viewpage.action?pageId=268806840). 

LANGUAGE

# Speaking of process diagram...

---

The diagram is the graphical representation of the entire flow of the process. It contains the [components](/pages/viewpage.action?pageId=979502312) that indicate the beginning of the process, its stages, the directions in which the request can follow, and its end, either by cancellation or by the completion of the fulfilled request.

In this feature, you can model the process diagram by adding the components and the flows. You can define the arrangement of each component in order to represent each stage that the process request may go through, thus allowing for a simple visualization and a quick and easy understanding of the entire process.

You can also configure each component in accordance with the needs of each stage and each process, ensuring a flow relevant to each business.

The components bar, located at the bottom of the modeling area, displays the components that you can use to model the process diagram. The components available for use are:

![](/download/attachments/979505413/in%C3%ADcio-mini.png?version=1&modificationDate=1755891785753&api=v2)

START

![](/download/attachments/979505413/atividade-mini.png?version=1&modificationDate=1755891783680&api=v2)

ACTIVITY

![](/download/attachments/979505413/subprocesso-mini.png?version=1&modificationDate=1755891793067&api=v2)

SUBPROCESS

![](/download/attachments/979505413/paralelo-mini.png?version=1&modificationDate=1755891788173&api=v2)

PARALLEL

![](/download/attachments/979505413/join-mini.png?version=1&modificationDate=1755891785290&api=v2)

JOIN

![](/download/attachments/979505413/exclusivo-mini.png?version=1&modificationDate=1755891791710&api=v2)

EXCLUSIVE

![](/download/attachments/979505413/cancelamento-mini.png?version=1&modificationDate=1755891787227&api=v2)

CANCELLATION

![](/download/attachments/979505413/fim-mini.png?version=1&modificationDate=1755891784840&api=v2)

END

![](/download/attachments/979505413/fluxos-mini.png?version=1&modificationDate=1755891785053&api=v2)

FLOWS

The [assignment mechanisms](/pages/viewpage.action?pageId=979796980) define who will receive the request at each stage that it reaches. From them, you can determine who can be responsible for the request at each stage, as well as whether to execute the stage individually – by a single person – or jointly – by more than one person.

The display of the types of assignment mechanism reflect the component, as you cannot use some types in certain components. The Home component, for example, does not display the mechanisms By group and By role, as they do not make sense in the context of the component, which represents the opening of a request, an action performed by a single person.

![](/download/attachments/979505413/diagrama-completo.png?version=2&modificationDate=1755891782957&api=v2)

## View available components

---

****

        Your browser does not support the HTML5 video element

**01.** With the process in [edit](https://tdn.totvs.com/pages/viewpage.action?pageId=236429375#Platform%E2%9D%99Configureprocesses-Editprocess) mode, in the![](/download/attachments/979505413/diagrama.png?version=1&modificationDate=1755891792810&api=v2) **Diagram** tab, locate the components bar ![](/download/attachments/979505413/barra-de-componentes.png?version=1&modificationDate=1755891792107&api=v2) – located at the bottom of the modeling area.

**02.** See all the components available for use when modeling the process diagram.

The bar groups some components, requiring you to click the visible component to see the others. Thus:

- click the **End** component ![](/download/attachments/979505413/fim-mini.png?version=1&modificationDate=1755891784840&api=v2) to also see the **Cancellation** component** **;

- click the **Activity** component****![](/download/attachments/979505413/atividade-mini.png?version=1&modificationDate=1755891783680&api=v2) to also see the **Subprocess** component ![](/download/attachments/979505413/subprocesso-mini.png?version=1&modificationDate=1755891793067&api=v2);

- click the **Exclusive** component ![](/download/attachments/979505413/exclusivo-mini.png?version=1&modificationDate=1755891791710&api=v2) to also see the **Paralle**l ![](/download/attachments/979505413/paralelo-mini.png?version=1&modificationDate=1755891788173&api=v2)and **Join** ****components.

## Add component to the diagram

---

****

        Your browser does not support the HTML5 video element

**01.** With the process in [edit](https://tdn.totvs.com/pages/viewpage.action?pageId=236429375#Platform%E2%9D%99Configureprocesses-Editprocess) mode, in the![](/download/attachments/979505413/diagrama.png?version=1&modificationDate=1755891792810&api=v2) **Diagram** tab, locate the desired component in the components bar ![](/download/attachments/979505413/barra-de-componentes.png?version=1&modificationDate=1755891792107&api=v2) – located at the bottom of the modeling area.

**02.** Click and drag the component to the desired location in the process diagram.

**03.** Click **Save draft** – located on the right side of the top bar – to save the changes made to the diagram.

## Move component in the diagram

---

****

        Your browser does not support the HTML5 video element

**01.** With the process in [edit](https://tdn.totvs.com/pages/viewpage.action?pageId=236429375#Platform%E2%9D%99Configureprocesses-Editprocess) mode, in the![](/download/attachments/979505413/diagrama.png?version=1&modificationDate=1755891792810&api=v2) **Diagram** tab, locate the component you want to move.

**02.** Click and drag component to the desired location in the process diagram.

**03.** Click **Save draft** – located on the right side of the top bar – to save the changes made to the diagram.

## Add flow between components in the diagram

---

****

        Your browser does not support the HTML5 video element

**01.** With the process in [edit](https://tdn.totvs.com/pages/viewpage.action?pageId=236429375#Platform%E2%9D%99Configureprocesses-Editprocess) mode, in the![](/download/attachments/979505413/diagrama.png?version=1&modificationDate=1755891792810&api=v2) **Diagram** tab, locate the components that you want to interconnect by a flow.

**02.** Click the component from which the flow should start, that is, the source component.

**03.** Click **Line** ![](/download/attachments/979505413/fluxos-mini.png?version=1&modificationDate=1755891785053&api=v2).

**04.** Move the mouse cursor to the component to which the flow should direct; that is, to the destination component of the flow.

**05.** Click **Save draft** – located on the right side of the top bar – to save the changes made to the diagram.

## Create a fold in the flow between components of the diagram

---

****

        Your browser does not support the HTML5 video element

**01.** With the process in [edit](https://tdn.totvs.com/pages/viewpage.action?pageId=236429375#Platform%E2%9D%99Configureprocesses-Editprocess) mode, in the![](/download/attachments/979505413/diagrama.png?version=1&modificationDate=1755891792810&api=v2) **Diagram** tab, locate the flow where you want to create a fold.

**02.** Click and hold on the location of the flow where you want to create the fold, and drag the flow until it forms the desired angle.

**03.** Reposition the components interconnected by the flow as desired.

**04.** Click **Save draft** – located on the right side of the top bar – to save the changes made to the diagram.

## Configure component of the diagram

---

****

        Your browser does not support the HTML5 video element

**01.** With the process in [edit](https://tdn.totvs.com/pages/viewpage.action?pageId=236429375#Platform%E2%9D%99Configureprocesses-Editprocess) mode, in the![](/download/attachments/979505413/diagrama.png?version=1&modificationDate=1755891792810&api=v2) **Diagram** tab, locate and click the component you want to configure.

The available settings for the component are displayed on the right side.

**02.** Define the desired settings for the component that is part of the process diagram.

Each component has specific characteristics and configuration options. Click each component to get details about its configuration.

![](/download/attachments/979505413/in%C3%ADcio-mini.png?version=1&modificationDate=1755891785753&api=v2)

[Start](/pages/viewpage.action?pageId=979501869)

![](/download/attachments/979505413/atividade-mini.png?version=1&modificationDate=1755891783680&api=v2)

[Activity](/pages/viewpage.action?pageId=979031748)

![](/download/attachments/979505413/subprocesso-mini.png?version=1&modificationDate=1755891793067&api=v2)

[Subprocess](/pages/viewpage.action?pageId=979019129)

![](/download/attachments/979505413/paralelo-mini.png?version=1&modificationDate=1755891788173&api=v2)

[Parallel](/pages/viewpage.action?pageId=979016814)

![](/download/attachments/979505413/join-mini.png?version=1&modificationDate=1755891785290&api=v2)

[Join](/pages/viewpage.action?pageId=979013452)

![](/download/attachments/979505413/exclusivo-mini.png?version=1&modificationDate=1755891791710&api=v2)

[Exclusive](/pages/viewpage.action?pageId=913802155)

![](/download/attachments/979505413/cancelamento-mini.png?version=1&modificationDate=1755891787227&api=v2)

[Cancellation](/pages/viewpage.action?pageId=979013184)

![](/download/attachments/979505413/fim-mini.png?version=1&modificationDate=1755891784840&api=v2)

[End](/pages/viewpage.action?pageId=979013052)

![](/download/attachments/979505413/fluxos-mini.png?version=1&modificationDate=1755891785053&api=v2)

[Flows](/pages/viewpage.action?pageId=979012217)

**03.** Click **Save draft** – located on the right side of the top bar – to save the settings made to the component.

## Delete component from the diagram

---

****

        Your browser does not support the HTML5 video element

**01.** With the process in [edit](https://tdn.totvs.com/pages/viewpage.action?pageId=236429375#Platform%E2%9D%99Configureprocesses-Editprocess) mode, in the![](/download/attachments/979505413/diagrama.png?version=1&modificationDate=1755891792810&api=v2) **Diagram** tab, locate and click the component you want to delete.

**02.** Click **Delete**![](/download/attachments/979505413/excluir.png?version=1&modificationDate=1755891783290&api=v2).

**03.** In the confirmation message displayed, click **Delete component**.

When you delete a component, you also delete all its settings, which cannot be restored.

To cancel the deletion of the component, click **Cancel**.

**04.** Click **Save draft** – located on the right side of the top bar – to save the changes made to the diagram.

Attention!

This documentation is valid from the Voyager (2.0) update onwards. If you are using a previous update, it may contain information different from what you see on your platform.


<!-- anchors: Platform❙Processdiagram-Speakingofprocessdiagram..., Platform❙Processdiagram-Viewavailablecomponents, Platform❙Processdiagram-Addcomponenttothediagram, Platform❙Processdiagram-Movecomponentinthediagram, Platform❙Processdiagram-Addflowbetweencomponentsinthediagram, Platform❙Processdiagram-Createafoldintheflowbetweencomponentsofthediagram, Platform❙Processdiagram-Configurecomponentofthediagram, Platform❙Processdiagram-Deletecomponentfromthediagram -->
