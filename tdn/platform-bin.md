---
title: "Platform ❙ Bin"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=268568124"
scraped_at: "2026-03-09T05:04:15.264Z"
depth: 3
anchors: 17
child_links: 37
---

# Platform ❙ Bin

# Index

## Speaking of Recycle Bin...

The bin is where all items deleted from document browsing are stored. Items are displayed to users based on their respective document browsing permissions. 

While the folder or document is in the recycle bin, it will remain in the volume and may be restored. When the folder or document is deleted from the bin, either by the user or by a schedule task, it will also be removed from the volume (permanently).

### Access bin

---

**01.** From the main menu, click **Recycle Bin**.

**02.** View the folders and documents in the bin.

### Calculate storage

---

This option is only available to the company’s admin users.

**01**. In the main menu, open the Recycle Bin.
**02**. Click the **Calculate storage** ![](/download/attachments/268568124/q-icon-hardware-outline-storage.png?version=1&modificationDate=1620386283040&api=v2) button.

A pop-up appears with the recycle bin storage data, showing the total space used and the distribution between folders, documents and personal documents of users (items excluded from the My documents folder).
**Attention**: To check the space used by a specific item in the bin, check the **Size** column. The space used by folders is shown in this column only after clicking the ![](/download/attachments/268568124/q-icon-action-outline-info.png?version=1&modificationDate=1620386326057&api=v2) button.

### Delete items permanently

---

While the folder or document is in the recycle bin, it will remain in the volume and may still be restored. If the item is permanently deleted from the bin, it is also removed from the volume (permanently).
There are three ways to permanently delete folders and documents from the recycle bin:

#### Individually

**01**. Click **Delete** ![](/download/attachments/268568124/q-icon-action-outline-trash.png?version=1&modificationDate=1620386707950&api=v2) on the right side of the folder or document to delete it.

**02**. Select **Delete** to confirm the action.

#### Selected items

**01**. Select the desired folders and documents in the check box (to the left of the name).

**02**. Click **Delete selected**.

**03**. Select **Delete** to confirm the action.

#### All items

**01**. Click **Empty recycle bin**.

**02**. The platform admin may also select the option to **Empty “User documents” folder** to delete the personal items of all users.

**03**. Select **Empty** to confirm the action.
If the [Audit events](/pages/viewpage.action?pageId=442041176) feature is enabled for the company, a justification must be entered for audit purposes.

### Restore items

---

This option is not shown for the admin regarding private user folders.

There are three ways to restore folders and documents from the recycle bin:

#### Individually

**01**. Click the **Restore ** button on the right side of the folder or document to restore it.

**02**. Press **Restore** to confirm the action.

#### Selected items

**01**. Select the desired folders and documents in the check box (to the left of the name).

**02**. Click **Restore selected**.

**03**. Press **Restore** to confirm the action.

#### All items

**01**. Click **Restore all**.

**02**. Press **Restore** to confirm the action.
If the [Audit events](/pages/viewpage.action?pageId=442041176) feature is enabled for the company, a justification must be entered for audit purposes.

With this, restored items are once again available at the source location (i.e. the document browsing location).
If the document to be restored is inside a folder in the recycle bin, the entire folder structure will be restored.

### Schedule automatic cleanup

---

This option is only available to the company’s admin users.

**01**. In the main menu, open the **Recycle Bin**.

**02**. Click **Schedule automatic cleanup**.

The recycle bin automatic cleanup uses the [Task scheduler](/pages/viewpage.action?pageId=236429977) feature in the Control Panel to schedule this procedure.

**03**. Enter the required information.

**Description**
Description of the task in the scheduler.

**Type**
Keep the **Empty recycle bin** type.

**Delete documents sent to the recycle bin for more than**
Number of days in which items must remain in the recycle bin before being deleted by the scheduled task.

**Run only after**
Time from which the task should be performed.

**Attendance**
Frequency at which the task should be performed. Available options: daily or monthly.

**04**. Click **Confirm** to schedule the task.

Upon saving, the task will be performed at the scheduled time. Items deleted from the recycle bin by the scheduled task are shown in the log for the platform admin.

### Search for items

---

**01**. In the main menu, open the **Recycle Bin**. 

**02**. Enter the term to search in the field **Search for**, as needed. 

The engine searches the term on all fields by default. For more accurate results, the search can be filtered by author, code, content (terms within the main file), description, user who posted, or parent folder code.

**03**. Enter the filter period in the **Start date** and **End date** field. 

In the field **Filter by**, the user can choose whether to consider the date of creation or the date in which the item was deleted.

**04**. Click **Search**. 

To view all records again, select **Reset filters**.

### Manage columns

---

**01**. In the main menu, open the **Recycle Bin**.

**02**. Click the ![](/download/attachments/268568124/q-icon-action-outline-settings.png?version=1&modificationDate=1620391367630&api=v2) button on the top right of the list.

**03**. Select the columns to be shown on the screen list.

After selecting the columns, this view is shown whenever the user accesses the screen. To view the default columns again, select **Restore default**.

### View contents of excluded folders

---

**01**. In the main menu, open the **Recycle Bin**.

**02**. Find the folder to be showed.

You can browse through all folders in the recycle bin and view their respective contents.
The only exception are the **User documents folders**, which are only available to admin users. The only information shown of these folders is the amount of space used in the bin by each user’s personal documents. The contents cannot be accessed.

### See item information

---

This option is not shown for the admin regarding private user folders.

**01**. In the main menu, open the **Recycle Bin**.

**02**. Click the ![](/download/attachments/268568124/q-icon-action-outline-info.png?version=1&modificationDate=1620386326057&api=v2) button on the right side of the folder or document.

This opens a pop-up with file information: description, code, size, date of deletion, user who deleted, source location, date of last modification, version and author.

Attention!

This documentation is valid as of the **Crystal Lake** (**1.7.1) update**. Previous updates may contain different information than what you see on your platform.


<!-- anchors: Platform❙Bin-Index, Platform❙Bin-SpeakingofRecycleBin..., Platform❙Bin-Accessbin, Platform❙Bin-Calculatestorage, Platform❙Bin-Deleteitemspermanently, Platform❙Bin-Individually, Platform❙Bin-Selecteditems, Platform❙Bin-Allitems, Platform❙Bin-Restoreitems, Platform❙Bin-Individually.1, Platform❙Bin-Selecteditems.1, Platform❙Bin-Allitems.1, Platform❙Bin-Scheduleautomaticcleanup, Platform❙Bin-Searchforitems, Platform❙Bin-Managecolumns, Platform❙Bin-Viewcontentsofexcludedfolders, Platform❙Bin-Seeiteminformation -->
