---
title: "Platform ❙ Audit events"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=442041176"
scraped_at: "2026-03-09T04:03:54.591Z"
depth: 2
anchors: 5
child_links: 39
---

# Platform ❙ Audit events

# Speaking of audit events...

---

This feature registers platform events focused on audits. These are basically logs recording the creation, editing and deletion of business items.

Important!

A special **Audit Events** license is required to use this feature. Refer to the technical document [Eventos de auditoria](/display/fluig/Eventos+de+auditoria) to learn more about the feature and activation process.

![](/download/attachments/442041176/Audit%20Events%20165.png?version=2&modificationDate=1767376570890&api=v2)

## Search audit events

---

**01.** In the main menu, click ![](/download/attachments/442041176/%C3%ADcone-painel-de-controle.png?version=1&modificationDate=1767376444517&api=v2) **Control Panel**.

**02.** Locate the **Applications** group.

**03.** Click ![](/download/attachments/442041176/%C3%ADcone-eventos-auditoria.png?version=1&modificationDate=1767376534523&api=v2) **Audit events.**

**04**. Enter the required information in **Search Events**:

**User name**Name of the user responsible for the audited action.

**Resource**Item related to the audited action (User, Role, Group, Process, Document, etc.)

**Key**
Key based on the previously selected resource. For example: the “User” feature key will be the login; the “Group” one will be the group code; the “Process” one will be the process code, and so on.

**Period from/to**Start and end date to filter the search.

**05**. Click **Search**.

A list will be shown in the **Search Results** area containing information on the audited events filtered by the user. Click the magnifying glass icon in the **Learn More** column to open another window with details about the activity**.**

## Export data

---

**01.** Search the desired events as instructed in the item [Search audit events](#Platform❙Auditevents-buscar).

**02.** Click **Export data**.

A notification will be received with the link for download.

The export will generate a detailed list with all audit data in CSV format (compatible with electronic worksheet software such as Microsoft₢ Excel), based on the filters applied in the search. The time required to generate the data file varies depending on the number of records generated in the search, which is why this task runs in the background. After the task is completed, a notification is shown on the screen informing that the document has been generated. This notification contains the link to download the file quickly and easily. The file is saved in the authenticated user’s “My Documents” folder. 

## Delete audit data

---

It is not possible to manually delete data registered in audits. Such data is deleted automatically based on history settings and according to the [Configuration of audit events](/pages/viewpage.action?pageId=550332532) help section.

## Enable generation of audit events

---

If audit event generation is disabled for the respective company, this screen is not shown, but rather only a warning on how to enable this feature. **** **See image** 

To learn how to configure, access the [Configuration of audit events](/pages/viewpage.action?pageId=550332532) help section.

Please note!

This documentation is valid from the **Voyager (2.0)** update onwards. If you are using a previous update, it may contain information different from what you see on your platform.


<!-- anchors: Platform❙Auditevents-Speakingofauditevents..., Platform❙Auditevents-Searchauditeventsbuscar, Platform❙Auditevents-Exportdata, Platform❙Auditevents-Deleteauditdata, Platform❙Auditevents-Enablegenerationofauditevents -->
