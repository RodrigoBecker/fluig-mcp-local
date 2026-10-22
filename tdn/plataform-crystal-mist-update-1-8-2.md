---
title: "Plataform | Crystal Mist update (1.8.2)"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=852898181"
scraped_at: "2026-03-09T04:15:57.339Z"
depth: 3
anchors: 15
child_links: 21
---

# Plataform | Crystal Mist update (1.8.2)

![](/download/attachments/852898181/Crystal_Mist_1.8.2_1660x490.png?version=1&modificationDate=1719404722120&api=v2)

Minimum release for platform update

The process of updating to the 1.8.2 release of Fluig requires the platform to be using the **1.7.1 release or higher**. If your environment is running an earlier version, you must update to version 1.7.1, and then update Fluig to 1.8.2.

Below are some useful links:

- [Platform Installation Guide](https://tdn.totvs.com/x/uzASCw)
- [Platform Update Guide](https://tdn.totvs.com/x/vDASCw) 
- [Installation](https://tdn.totvs.com/x/ujASCw) and [Update](https://tdn.totvs.com/x/vDASCw)

Check out what’s new in the 1.8.2 update of the TOTVS Fluig Platform:

## Security down to the last detail

---

We remain vigilant about the technological advancements surrounding us, steadfast in our commitment to ensuring the TOTVS Fluig platform delivers the utmost in security, protection, and performance. Our goal is to provide our clients with peace of mind, both in their daily use of our resources and in managing their company's information.

This dedication drives our efforts to prevent cyber attacks and address vulnerabilities, through the implementation of protective codes and continuous updates to libraries and services.

Take note of some key resources that have undergone specialized security and prevention measures:

- Companies;
- Permissions;
- Users, Groups and Roles;
- Task scheduler;
- Notifications;
- Documents;
- Processes;
- Communities;
- Social resources.

Furthermore, we have executed numerous security fixes and enhancements across APIs and platform interfaces, effectively safeguarding against any unauthorized data manipulation.

Protection is paramount to us, and we consistently enhance our security protocols to ensure your data remains shielded at all times.

Don't hesitate to update your platform, thereby ensuring even greater security for your company!

## Architecture

---

#### Updated indexing server

Nowadays, it seems like everything around us is constantly changing, right? Especially technology!

Given our dedication to ensuring our platform remains in sync with the latest market developments, we have recently updated the **Indexing Server (Solr)** – which is responsible for the search features – to **version 9.4.1**.

This update also targets index optimization to streamline and enhance the efficiency of searches.

Please note!

After applying this update to your environment, performing a complete re-indexing with index recreation is necessary. This step is vital to prevent any search instability, such as encountering duplicate results or failing to retrieve certain results.

**HOW TO DO IT?**→ To perform a complete re-indexing, navigate to **Control Panel** **→** **Technical Parameters** **→** **Indexing**, select the options for **Recreate the index** and **Content** – as the method for document indexation – and start the process. For more detailed information, refer to the documentation under [Indexation](/pages/viewpage.action?pageId=234455757).

**NOTE:**→ If you use a **dedicated** or **highly available** indexing server, follow the [upgrade](https://tdn.totvs.com/pages/viewpage.action?pageId=271666186#Guiadeatualiza%C3%A7%C3%A3odaplataforma-Atualiza%C3%A7%C3%A3ocombalanceamentodecarga,altadisponibilidadeetoler%C3%A2ncia%C3%A0falha-Cluster) procedure specific to these scenarios before initiating the full indexing. Refer to the documentation for [Dedicated indexing server](/pages/viewpage.action?pageId=269425760) or [High availability indexing server](/pages/viewpage.action?pageId=257623206).

Tip!

Explore [Good security practices for your environment](/pages/viewpage.action?pageId=611010249) to learn how to enhance the security of your indexing server.

For a better understanding of the platform's search features, read about [Search](/pages/viewpage.action?pageId=236430068) and [Document search](/pages/viewpage.action?pageId=236430076).

## BPM

---

#### New summary of the Task Central

Enhance the efficiency of actively managing your company's processes with TOTVS Fluig's redesigned Task Central summary. The new design features intuitive graphs that consolidate comprehensive and detailed data on activities and tasks. This includes information on Queries Requested by you and under your management, Tasks On Time and Overdue, Tasks By Group and Role, Tasks In Consensus, among others.

This provides you with a more comprehensive and accurate view to support your decision-making process. Access the documentation for [Task Central - Summary](https://tdn.totvs.com/x/qqAXDg) and [Widgets - Task Graph](https://tdn.totvs.com/x/UzASCw).

- [Task Central](#)
- [Task graph widget](#)
- [Detailed mode](#)
- [Summarized mode](#)

![](/download/attachments/852898181/tasks%20central.png?version=1&modificationDate=1719599828417&api=v2)

![](/download/attachments/852898181/widget.png?version=1&modificationDate=1719600107830&api=v2)

![](/download/attachments/852898181/Detailed.png?version=1&modificationDate=1719599836217&api=v2)

![](/download/attachments/852898181/Summarized.png?version=1&modificationDate=1719599845290&api=v2)

#### Extra feature for security in APIs

In our ongoing efforts to bolster security within the platform, we have emphasized the concept of Personification, aiming to enhance reliability when handling information from other users.

Access the comprehensive [Personification](https://tdn.totvs.com/x/85TUIQ) documentation to stay updated with all the latest developments.

## Portals

---

#### The TOTVS Fluig Platform colors have been updated!

In this latest update, a new default color has been introduced: blue. This color is now applied to links, side menu icons, and the entire theme across both the Classic and Snowflake themes, as well as the new responsive theme introduced in the [Mist-1.8.0](https://tdn.totvs.com/display/fluigeng/Plataform+%7C+Update+1.8+Mist#Plataform|Update1.8Mist-Portals) update.

But don't worry! Rest assured that you can still customize your theme to align with your company's visual requirements.

Furthermore, the login screen has been revamped to reflect the new color scheme, including the Login button. Additionally, the logo has also undergone an update.

- [New TOTVS Fluig color](#)

![](/download/attachments/852898181/Nova%20cor%20plataforma%20EN.png?version=1&modificationDate=1719948051613&api=v2)

**Store Items have become Store!**

The feature previously known as Store Items has been rebranded as Store - the TOTVS Fluig Platform solutions page, now boasting a modern and intuitive interface.

We have relocated the search field to the top of the page, enhancing its visibility and convenience for users searching for solutions. 

New filters have been introduced to streamline the process of finding solutions.

- Developer;
- Categories;
- Type.

We have organized the categories by:

- News;
- All solutions;
- Flows.

This enhancement makes navigating each category more practical, enabling users to quickly find specific solutions within each category.

For more details on this release, explore the [Update (1.8.1)](https://tdn.totvs.com/pages/viewpage.action?pageId=761497686#Atualiza%C3%A7%C3%B5es(1.8.1)-230912) and learn how to leverage these improvements in the [Platform | Store](https://tdn.totvs.com/x/fwUkFw) documentation.

- [Fluig Store](#)

![](/download/attachments/852898181/GIF%20Store%20ingl%C3%AAs.gif?version=1&modificationDate=1719949538067&api=v2)

## Mobile

---

**Introducing the new ECM - your partner in document management, now more modern than ever!**

We have revamped the entire document navigation system, introducing enhanced organization, modernization, and agility for accessing your documents through My Fluig.

**Quick access to all documents**

The new document management feature in My Fluig enables you to swiftly locate important documents for your daily activities. Results are presented in a well-organized manner, with documents now identified by extension icons. Additionally, for images and videos, there's a preview feature available.

**Create folders faster**

Create folders with just 2 taps. Simply tap the **Create folder** button, enter a name for your folder, and tap **Confirm**. With just a few taps, your folder is created and ready for use.

**View documents**

We have modernized document viewing, allowing you to conveniently view documents, external documents, articles, and images. Now, you can easily zoom in and out to examine all the details clearly.

**Other document actions improved**

- Share and save on your device;
- Easily comment and support;
- Set as favorite;
- Rename and delete quickly.

- [New My Fluig ECM](#)

Learn more

Learn all the details of this new feature in [My Fluig | What's new?](https://tdn.totvs.com/pages/viewpage.action?pageId=381049863#MyFluig%7COqueh%C3%A1denovo?-Mar%C3%A7o/24)

## WCM

---

**Updated libraries**

In order to ensure greater security for the platform, we have taken the initiative to keep our libraries up to date. In this release, we have updated some libraries accordingly.

## Fixes

---

- Fix applied to ensure that when an activity is running in parallel, this information is accurately reflected in Analytics.
- Fix applied to ensure that users with a blocked state are unable to initiate requests in a process.
- Fix applied to address the error encountered when defining security groups for files. Now, when changing the folder's security settings, users and groups are included seamlessly, without any complications.
- Adjustments made to implement validation, ensuring proper identification of the authenticated user on the platform or the administrator user, ensuring that the document URL is sent correctly API when using the automatic flow.
- Fix applied so that the index length is respected in *Oracle*, limited to 30 characters.
- Fix applied to the configuration of activities so that it is no longer possible to enter _tags _and change the font color.
- Fix applied when running the historical data importer, so that fields with fixed values in text format (String) can be read by the importer and sent to analytics correctly.
- Fix applied so that the form fields are listed correctly in the “Main Description of Form Records” tab in the document properties.
- Fix applied to allow including the permission in the process results API.
- Fix applied to the Main Description menu of a form's records, so that the description entered is included correctly.
- Fix applied to allow changing the approval criteria of the parent folder without displaying the pending document message.
- Fix applied to the export of a form to Fluig, specifying the "My Documents" folder as the destination. Now, when attempting to add a form to a private folder, users will receive an informative message indicating that it is not possible to do so.
- Fix applied to ensure that the "Send image" button is only displayed when inside subfolders.
- Fix applied to reduce high CPU consumption during the creation of indexes in the document table.
- Fix applied to provide clear error messages to users when the master list encounters an issue, informing them of the reason for its failure to generate.
- Fix applied to the document search component to ensure that folders configured in custom development are displayed correctly.
- Fix applied to remove the printer checkbox from the "Report configuration" options. Now, it is possible to execute the query without encountering the printer error message.
- Fix applied to the form rules to ensure that when the "Validate" action is configured and the rules that have already been registered are returned to the screen, they are maintained correctly.
- Fix applied to prevent the unnecessary display of a modal with requests when clicking on any object within a process that is not linked to form rules. Now, you can view the form rules even if the process has not been saved, without encountering this issue.
- Fix applied to enable users to search by code and name in all folders and subfolders where they have permission when publishing an attachment.
- Fix applied to the code interpreter responsible for the additional logs in the diagnostics center.
- Fix applied to ensure that documents can be viewed correctly when a new version is generated.
- Filter by role in the Approval application fixed to ensure that queries are correctly filtered and displayed according to the role selected by the user.
- Fix applied to the task scheduler to resolve issues with the queue locking up.
- Fix applied to prevent the "users" field from being displayed when sending to an automatic activity. If there's a mechanism that requires entering a user, it will now be displayed correctly.
- Fix applied to address the vulnerability in the LMS package.
- Fix applied to the task graph in the task central to ensure that completing tasks from the task center does not result in any inconsistencies in the table displaying the tasks on screen.
- Fix applied to Fluig to ensure that when accessing the request, the fields are displayed with their respective values, and the movement is carried out successfully.
- Fix applied to prevent queries from being duplicated in the Task Central.
- Inconsistencies that prevented the use of document navigation fixed.
- Fix applied to ensure that all types are displayed in the filter fields tab within the process web editor, within the Fluig platform.
- Fix applied to ensure that the modal is displayed correctly when opening a password-protected PDF document.
- Fix applied to automatically remove files from temporary folders generated by Fluig in the operating system.
- Fix applied to the Master List to ensure that the approval history in subfolders is displayed correctly.
- Form fixed to block the "send" button while it is being loaded.
- Adjustment made so that changing the predefined "code for data service" correctly displays the updated code in the search on the Form Rules page.
- Adjustment made so that when adding or renaming a file with tags (<> ) in the name, Fluig does not interpret it as HTML.
- Fix applied to the zoom field to allow queries with a greater number of characters.
- Fix applied to display two process cards at a time when initiating requests.
- Adjustment made to clear the cache after using the "select users and groups" field, requiring a modification to the Style Guide component itself.
- Fix applied to ensure that the "Start New Request" button is positioned correctly, regardless of the screen resolution.
- Fix applied to address the slowness on the process configuration page by introducing an _alert_call for each API.
- Fix applied to My Documents, enabling the drag-and-drop functionality for documents when accessing a folder.
- Adjustment made to the "Security" tab of document and folder properties, enabling the addition of new users.
- Fix updated in documents to ensure that, when copying and pasting a folder with a file that had inherited security, it does not load and prevent the folder from being included.
- Fix applied in Documents, enabling the entry of a description accurately on the approval screen.
- Fix applied to ensure that printing a controlled copy does not display any inconsistencies.
- Fix applied to the saving functionality when adding the annotation component to the WEB process edition, ensuring that information is saved correctly.
- Fix applied to the controlled copy printing feature.
- Fix applied to address an issue where the approvers are now displayed correctly when viewing the approval history of other versions/revisions of a document.
- Inconsistency fixed in service events, ensuring that the current value of the thread is displayed correctly in the getActualThread parameter.
- Fixed applied in TOTVS Fluig, allowing the selection of a form record when adding a related document as expected.
- Adjustment made to correctly move the activity of a process that has a gateway after the start activity.
- Fix applied to ensure that when adding an add-on to a PDF file and saving, the changes are applied correctly.
- Improvements made to enhance security measures against XSS content passed via URL in Fluig.
- Fix applied to the Web Services (WS) createDocument, createSimpleDocument, createSimpleDocumentPrivate, as well as with the API v1 createDocument. Now, when entering a path in the file name, a message indicating that the name is incorrect will be displayed.
- Fix applied to prevent the removal of a file from another user's recycle bin via the internal API.
- Fix applied to the form, allowing it to accept more characters in the field.
- Fix applied so that when using the createPrivateDocument API and including the file path, the user is informed to only use the file name.
- Adjustment made to the diagram visualization, now requiring authentication before allowing visualization.
- Fix applied to enhance security, preventing the execution of XSS injection tags when attempting to add them to the process properties.
- Fix applied so that in the *documentviewerurl* request, only the ID, version, and attachments are returned instead of the full file path.
- Fix applied to the updateDescription method to handle cases where users attempt to change a document without the appropriate permissions. Now, a message is displayed informing the user that they do not have the necessary permissions.
- Fix applied to open SVG files containing scripts, ensuring that only the image is displayed without executing any scripts.
- Fix applied to Fluig to enable searching for space-separated values in form fields.
- Fix applied to Fluig's general search field to prevent the paste action when pasting the contents of an Excel table. Only the text is now pasted into the search function.
- Fix applied so that when editing a form record for a request that has already been finalized using updateCardData, a message is displayed stating that "The form is associated with a finalized process and cannot be edited".
- Fix applied so that when running the job of compressing finalized inquiries, if all versions of the form are inactive, a message will be logged in the system's records.
- Fix applied to ensure that the _beforetasksave _event runs normally when the request is transferred.
- Fixed applied to both the My Approval and My Fluig applications. Now, when accessing the task center of a substituted user, only the tasks for which I am designated as a substitute are displayed
- Aduistment made to allow for the inclusion of a link to a platform document in process instructions and activities using [WD:coddoc].
- Fixed applied to display an error message informing the user when attempting to print a file that does not support printing.
- Fix applied to My Documents to prevent the occurrence of errors when attempting to create new folders.
- Fix applied to Fluig to ensure that all attempts to execute the service activity are listed in the history.
- Responsiveness of the Requests page adjusted to accommodate various resolutions, including tablet and mobile devices.
- Fix applied to ensure that when the document configuration's color is changed, the watermark displays correctly upon downloading the document.
- Fix applied to the documentview component to resolve an inconsistency in the visualization and allow it to now display the form record for visualization.
- Fixed applied to the Style Guide, allowing the use of tables and complementary tags within the popover component.
- Fix applied to Fluig to ensure that no inconsistencies appear when moving a task on mobile.
- Fix applied to ensure that controlled copy printing for documents with variable information is executed and downloaded correctly.
- Adjustment made to correct the process query in task monitoring, ensuring it is displayed as expected.
- Fix applied to ensure that changes to the assignment mechanism are correctly implemented after updating the process. And that changes are correctly applied when importing the XML via Web Service.
- Fix applied to GED to allow the upload of videos longer than 20 minutes.
- Fix applied to the process permissions when adding a group.
- Fix applied for printing controlled copies of client-sent documents to ensure they are printed correctly.
- Fix applied to address the use of multiple gateways in the process, ensuring that the history displays the information correctly.
- Adjustment made to the configuration of a process via Studio, allowing the configuration of the initial activity with associated mechanisms.
- Fix applied to the Silver Mist version of Fluig to ensure that the master list is generated correctly.
- Adjustment made to the error message that was generating a NullPointerException (NPE) when moving a request and providing an incorrect thread sequence.
- Fix applied to ensure that when starting a request with the same user and accessing the task center, only one task is displayed.
- Fix applied to the diagnostics center to ensure that custom filters correctly display the information.
- Access to the process configuration screen fixed to display the process list accurately.
- Fix applied to the task central to ensure that document update dates are displayed correctly.
- Fix applied to the handling of consensus requests.
- Fix applied to the deletion of binders or form sheets, ensuring that they are displayed correctly when filtered by date, name, or code.
- Display of approvers corrected when a document is being edited, ensuring that the addon is being used.
- Fix applied to ensure that when using the copyDocumentToUploadArea service and entering the folder code in the parameters, the file path is displayed correctly.
- Widgets display fixed in the Diagnostic Center.
- Fix applied to prevent users from modifying documents they do not have permission to access.
- Substitute user's access to the Task Central fixed to ensure that tasks under my management are handled correctly.
- Web Service _copyDocumentToUploadArea _improved to correctly display a log message indicating that the folder is empty and no document will be copied when attempting to copy a file that is not in the volume.
- Request history fixed to correctly use cash.
- Fix applied for copying folder structures containing files with long names.
- Fix applied to ensure the LMS displays correctly after updating to version 1.8.1 of Fluig.
- Inconsistency fixed in which running indexing with 4 million records now processes correctly, handling 5,000 records at a time.
- Eclipse plugin updated to version 1.8.2 to ensure that importing and exporting processes function correctly.
- Inconsistency fixed in the Fluig web editor when editing a BPMN 2.0 process, ensuring that it can now be edited and viewed correctly.
- Fix applied to ensure that the cancellation date is displayed correctly when a request is canceled.
- Form fixed to prevent editing when the sidebar of the send button is open.
- User permissions query applied for a specific document.
- Fix applied to the process search functionality on the request query screen.
- Adjustment made to the request query screen to accommodate language changes.
- Consensus task updated to reflect decision changes when accessed by a substitute user.
- Adjustment made to the collaboration/api/v3/posts API to accept all attached file formats when making a publication.
- Fix applied to ensure that news content is displayed correctly on the home page when using the News and Events widget.
- Zoom component fixed to ensure that the search fields in the community forms display data correctly.
- Fix applied to enable regular users with permissions to edit the page to add widgets to the Communicative layout.
- Fix applied so that when a post is made, the platform can accurately find other communities to replicate the post.
- Validation implemented to prevent SQLinjections of the time-based type in dataset API queries.
- Fix applied to ensure that an article can be created correctly in a community where thumbnail generation is enabled in the company's registration.
- Fix applied to ensure that the contents of the community tab are displayed correctly when selecting a file for publication.
- Fix applied to restrict access to the service query API to only users with an administrator role.
- Fix applied to ensure that the user and password fields are displayed correctly in the Eclipse plugin when registering a SOAP service.
- Fix applied to ensure that the Comunicativo layout receives the correct permission settings on widgets.
- Fix applied to enable offline dataset synchronization.
- "Finished" status included when using the Fluig style guide upload component and adjustments made to the upload area to allow adding new files.
- Fix applied to themes to ensure that pages or communities are opened correctly when created.
- Fix applied to ensure that widgets are displayed correctly when the new theme is being used.
- Fix applied to enable locating users, groups, or roles when creating a page.
- Fix applied to ensure that permissions are displayed when using the communicative layout to create pages.
- Fix applied to enable access to the properties of the form record with attachments when using the intranet kit.
- Fix applied to the zoom field, allowing new records to be included after clearing the field.
- Adjustment made to ensure that videos in MP4 format can be added correctly.
- Fix applied to normalize special characters with different encoding in images, ensuring they are encoded correctly and accepted by the platform.
- Adjustment made to ensure that the history of views and creation date are correctly maintained when editing and publishing an article in the community.
- Fix applied to ensure the correct functioning of pages that use the search widget.
- Fix applied to ensure that the Treeview component maintains its expected behavior when used with drag and drop.
- Adjustment made to ensure that the update between versions of the Fluig Platform occurs correctly and does not cause inconsistencies.
- Controlled copy options in the Word file updated.
- Adjustment made to ensure that PNG images are displayed correctly as thumbnails.


<!-- anchors: Plataform|CrystalMistupdate(1.8.2)-Securitydowntothelastdetail, Plataform|CrystalMistupdate(1.8.2)-Architecture, Plataform|CrystalMistupdate(1.8.2)-Updatedindexingserver, Plataform|CrystalMistupdate(1.8.2)-BPM, Plataform|CrystalMistupdate(1.8.2)-NewsummaryoftheTaskCentral, detalhadoeresumido, Plataform|CrystalMistupdate(1.8.2)-ExtrafeatureforsecurityinAPIs, Plataform|CrystalMistupdate(1.8.2)-Portals, Plataform|CrystalMistupdate(1.8.2)-TheTOTVSFluigPlatformcolorshavebeenupdated!, novacorplataforma, StoreFluig, Plataform|CrystalMistupdate(1.8.2)-Mobile, sample, Plataform|CrystalMistupdate(1.8.2)-WCM, Plataform|CrystalMistupdate(1.8.2)-Fixes -->
