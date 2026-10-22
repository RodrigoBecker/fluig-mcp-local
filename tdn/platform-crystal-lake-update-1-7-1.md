---
title: "Platform | Crystal Lake update (1.7.1)"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=600139941"
scraped_at: "2026-03-09T04:52:08.207Z"
depth: 3
anchors: 8
child_links: 21
---

# Platform | Crystal Lake update (1.7.1)

![](/download/attachments/600139941/Crystal%20Lake.png?version=2&modificationDate=1614864613567&api=v2)

Discontinuation of Internet Explorer

As [previously informed](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360055344913), we discontinued support for the**Internet Explorer** browser on the TOTVS Fluig platform on **3/1/2021**.

We suggest that customers who still use the Internet Explorer browser check the portability matrix and adopt one of the approved browsers to access the platform.

Check out what’s new in the 1.7.1. update of TOTVS Fluig Platform:

## Platform

---

**Learn more about permission management**Our clients asked for it, and we’ve answered... Check out the news in platform permissions!

**A whole new experience in permission management**We designed an entirely new layout, with permissions sorted by menu order, and all resource descriptions, making it much quicker and easier to set up permissions. And we’ve also added other features like searching all permissions or specific types, and filtering one or more types.

**Specific permissions by resource in the Control Panel**Admins can now clear each resource in the Control Panel individually, as needed. Each resource’s permission can be configured by specific users, groups or roles.

Check out the step-by-step instructions in the [Permissions](/pages/viewpage.action?pageId=236429985) document.

**Setting up your platform’s security is now much easier**

Do you know what HTTPS is? According to Wikipedia, HTTPS is an extension of the HTTP protocol over an additional security layer that uses the SSL/TLS protocol. This additional layer allows data to be transmitted through an encrypted connection where the server and client can be authenticated through digital certificates.

![](/download/attachments/600139941/unnamed.png?version=1&modificationDate=1614175752407&api=v2)

**Set up security with just a few clicks**These days, there’s no such thing as too much security, right? That is why setting up an HTTPS protocol is no longer a complex and manual process. The entire process is now made on screen, under the admin user’s Control Panel, in a much faster and user-friendly interface. 

![](/download/attachments/600139941/Facilitador%20https.gif?version=1&modificationDate=1614175752477&api=v2)

Bolster your environment with this protocol to give your users all of the security the HTTPS protocol has to offer.

**Learn more**

Check out the complete documentation in [Platform HTTPS Configuration](/display/fluigeng/Platform+%7C+Configure+HTTPS) and [System settings](/pages/viewpage.action?pageId=236429924).

**Personification: added security in service automation**

Personification is when a person carries out actions on behalf of someone else. The platform has services (APIs, datasets, and webservices) that allow the context user to be different from the authenticated user. For example, a user accesses the workflow API with ID “user1” and brings up the method that processes a workflow request. But this method has a parameter that informs from which user the process will be made. In this case the ID “user2” can be informed, allowing user1 to process a request assigned to user2. 
This feature is crucial to automate some processes, in the event of an integrator user that automatically processes delayed requests. 

**This is great and all... but can we make sure this doesn’t become a vulnerability? **

Don’t worry! We provided a new resource category in the Control Panel’s permission controls: **User personification**. Only users with this permission enabled can carry out actions using another user’s ID.

![](/download/attachments/600139941/Personification.png?version=1&modificationDate=1614175752440&api=v2)

**Learn more**

Check out all of the services that support this resource in the technical documentation regarding [Personificação](/pages/viewpage.action?pageId=567579891).

## Documents

---

**New recycle bin features**

**New information and custom view**The recycle bin already showed all permitted items. But it was a bit confusing to manage them, due to the lack of information regarding each item. We took note of that issue and introduced a range of useful information to this screen, such as occupied space, date of deletion, publisher and author, among several others. You can also check the total space used by items in the recycle bin. And best of all: you can set up how you view columns as you wish!

- [New layout](#)
- [Calculate storage](#)
- [Manage columns](#)

![](/download/attachments/600139941/Tela%20Lixeira.png?version=1&modificationDate=1614175718107&api=v2)

![](/download/attachments/243636051/Calcular%20armazenamento.gif?version=1&modificationDate=1610994591957&api=v2)

![](/download/attachments/243636051/Gerenciar%20colunas.png?version=1&modificationDate=1612370603437&api=v2)

**Periodic cleanup**Do your users typically delete document browsing files and documents and forget to empty the recycle bin, taking up unnecessary corporate disk space? That problem is a thing of the past! We created a new task to automatically delete recycle bin items that can be scheduled as often as you’d like. 
But what if the user wants to recover a delete file? Don’t worry, you can set up a minimum period for files to be kept in the bin, ensuring they are only deleted after that period.

![](/download/attachments/600139941/Limpeza%20da%20lixeira.png?version=1&modificationDate=1614175718017&api=v2)

**Is the recycle bin full and you can’t find a document?**
Use the new search features! Users can now locate specific items in the recycle bin based on code, author or items deleted in a certain time period, parent folder code, searching for description, specific word/term in the content, and countless other possibilities!

![](/download/attachments/600139941/Filtrar%20registros%20lixeira.png?version=1&modificationDate=1614175718047&api=v2)

**Additional feature for business administrators**
To further enhance management performance, administrators can now check users with specific items in the recycle bin. But don’t panic! Administrators still can’t access the contents of these documents. They can only check the space occupied by them and delete them if necessary.

![](/download/attachments/600139941/Documentos%20dos%20usu%C3%A1rios.png?version=1&modificationDate=1614175718077&api=v2)

Got any questions? Check out the step-by-step instructions in the [Bin](/pages/viewpage.action?pageId=268568124) documentation.

**We approved Microsoft® Office 2019**

Do you use **Office 2019** to develop your documents? Then take advantage of this new feature! In the Crystal Lake release, the Content Editing (Webdav), Controlled Copying of Documents and Controlled Copying Properties Update features are approved for this version of Office.

**We have updated the indexation server**

In this release, the **indexation server (Solr) **was updated to **version 8.7.0**. This update directly impacts the platform’s search feature. Therefore, to make sure searches continue to work adequately after the update, a complete reindexation must be performed in the environment (with the option of recreating indexes). This simple procedure prevents the feature from becoming unstable, showing duplicate results or failing to locate documents. 

![](/download/attachments/600139941/solr.png?version=1&modificationDate=1614175754003&api=v2)

**Learn more**

Check out the detailed procedure in the [Indexation](/pages/viewpage.action?pageId=236430026) documentation. Learn more about this feature in the [Search](/pages/viewpage.action?pageId=236430068) and [Document search](/pages/viewpage.action?pageId=236430076) documentation.

## Social

---

**Fluig mobile New social feature and TOTVS Fluig Platform – a fully revamped experience!**

In December, we launched the new Fluig mobile Social focusing mainly on improvements to ensure a modernized user experience.

With a fully revamped and clean look, the new Fluig mobile social offers a brand new browsing experience with easier access to posts, information sharing, interaction with other users, and especially boosting posts with the new 10,000-character limit per post!

The fixed post bare makes the new posting interface much more convenient. Users can now easily post even after scrolling through several posts and interactions.

In addition, the interface also features quick access to favorited and most accessed communities with privileged access, since they are now shown above all others and displayed as favorite communities.

Just like the communities, connections also have a quick access feature, where favorite users are shown first in quick access and marked as favorites.

And one of the most requested novelties was the ability to Cancel requests, which allows cancelling requests pending acceptance, which were sent incorrectly or have been pending acceptance for a prolonged period of time. Simply click the Pending button and confirm. 

And due to popular demand, we've added one of the most voted features of the collaborative center: you can now view posts with multiple images in the mobile app timeline.

Feel free to send us any suggestions you may have! Send your comments to our [Collaboration Center](https://centraldeatendimento.totvs.com/hc/contributions/posts) so we can continue to grow and improve together!

        Your browser does not support the HTML5 video element

TOTVS Fluig Platform is also covered in the new Social. We increased the post character limit to 10,000, just like in the application, launching the feature to Post in multiple communities, making it easier to disseminate information throughout the company by reaching more users at once.

We’ve also updated the layout of the timeline, the user social card, post bar, connections, and updated the style-guide, making the platform browsing experience even smoother and more enjoyable.

And we also now have one of the most anticipated features in the platform’s Social: Cancel requests. It is not possible to revere unwanted requests or those that have been pending acceptance for a long time by simply clicking Cancel request and confirming. This feature can be used to cancel requests to join communities and follow users.

- [New character limit](#)
- [Multiple communities](#)
- [Cancel requests](#)

![](/download/attachments/600139941/Fazer%20publica%C3%A7%C3%A3o%20nova%20timeline.gif?version=1&modificationDate=1614175736947&api=v2)

![](/download/attachments/600139941/m%C3%BAltiplas%20comunidades.png?version=1&modificationDate=1614175752353&api=v2)

![](/download/attachments/600139941/Cancelar%20solicita%C3%A7%C3%B5es.PNG?version=1&modificationDate=1614175752380&api=v2)

Check out more details in the [Release notes Fluig mobile](https://tdn.totvs.com/display/fluig/Release+Notes+Fluig+mobile#ReleaseNotesFluigmobile-Melhorias) and [Fluig mobile](https://tdn.totvs.com/display/HF/Fluig+mobile) documentation.

## WCM

---

**Registration of variables for the jQuery and jQuery Migrate plugin**

One of the main highlights of this release is the improvement coming with the 1.7.0. Lake release. 

We launched two variables to control the jQuery migration plugin.

One of the variables will enable or disable the migration plugin, and the other will define a mode between development and production.

Its main value is in the plugin use modes between development and production.

In the Development mode, messages are shown in the console of the browser used, showing what is wrong with the code and helping troubleshoot problems, but this makes the console “polluted” or overcrowded.

In Production mode, messages in the browser console are not shown, which helps clear up the generation of logs, but a message is displayed warning that the plugin is in use and the respective version.

Neither mode is registered by default. The company administrator must register them as needed.

Learn more

To learn more about how to register them, read the article [How to register jQuery migration profile plugin variables](https://tdn.totvs.com/x/I-Z5IQ).

## Documentation

- Review the features released in the platform in [September](https://tdn.totvs.com/x/Ynv4Ig#Updates(1.7.0)-200915). New **watermark** configuration options and new **internal viewer** features, providing an even more complete experience in **corporate document management**. 
- The new permissions screen looks awesome, right? Also check out the settings for **permissions in APIs, webservices and datasets** launched in 1.7.0. Check out more details in the RN of the updates [Essential 1.7.0-200629](https://tdn.totvs.com/x/Ynv4Ig#Updates(1.7.0)-200629) and [Essential 1.7.0-200714](https://tdn.totvs.com/x/Ynv4Ig#Updates(1.7.0)-200714).
- Do you use the platform integrated to **TOTVS Identity**? If so, check out the [Identity release notes](/pages/viewpage.action?pageId=269064433) to learn what’s new in this system.

A massive knowledge base at your disposal.

We are constantly improving our knowledge base in **Zendesk**. Each time you open a ticket for TOTVS Fluig service, search to see if there is an article with similar questions or issues that have already been mapped and solved. Suggested articles are shown after you select the ticket subject.

This helps you get back to work much faster. Access and explore [our knowledge base](https://centraldeatendimento.fluig.com/hc/pt-br/categories/360001513691).

## Fixes

---

- Fixed API "/ecm/dataset/synchronizeDataset" to show the proper operation.
- Fix applied so that you can correctly synchronize the dataset in the 1.7.0 environment used.
- Fix applied so that there is no slowness when accessing datasets with large volume of data in Oracle databases.
- Adjustment to allow the creation of a simple dataset using the AppDS service correctly, enabling service registration.
- Adjustment made to allow the registration of services for extensive tokens, with the limit increased to 2000.
- Fix applied so that you can correctly export BIRT reports to the Fluig server.
- Fix applied so that you can correctly register a SOAP service.
- Fix applied so that the importing of historical data is processed correctly in Analytics.
- Fix to allow deploying components with “js” files with less than 3 characters.
- Adjustment made so that you can post an article containing a cover image.
- Fix applied so that when accessing the routines to configure Gamification, these are loaded correctly.
- Adjustment that solved the delay in creating pages on the platform.
- Fix applied so that the modals for viewing forms and articles are displayed correctly and allow the content to be viewed correctly.
- Fix applied so that users that do not belong to a community set to private cannot view content posted on it.
- Fix applied so that when deleting a folder in the ECM, it is no longer displayed in the platform timeline.
- Fix applied so that the “Delete Requests” feature in the Processes menu item is displayed, making the click action visible again.
- Adjustment made so that you can select and play videos from the ECM within the Content Editor widgets.
- Fix applied to properly display the Web Address widget, eliminating the issue of the widget being displayed blank.
- Adjustment made in theTimeline API so that article information is displayed in the mobile app timeline.
- Creation of [endpoint](https://api.fluig.com/latest/collaboration/swagger-ui/#/Posts/listPosts) so that you can post to multiple places, such as the timeline, and in more than one community at a time.
- Fix applied in request query to ensure all processes without State are viewed correctly.
- Adjustment applied to prevent duplicate columns and answers when exporting Forms to Excel
- Fixed security flaw in the transfer feature, allowing the user with access to the API to be able to inform users in the request and run the action even without permission.
- Adjustment applied in the REST API that creates form records, in order to correctly return messages from validateForm.
- Adjustment applied in the REST API that creates form records, in order to correctly return messages from validateForm.
- Fix applied to ensure that, when accessing a request directly via the URL and moving a process activity directly from the IE 11 browser, action buttons are automatically loaded.
- Adjustments applied to correctly display all documents of a folder when selecting it to include an attachment to a process.
- Fixed inconsistency in the assignment by form field mechanism using a colleague dataset, where an error occurred whenever a field other than colleagueId was informed in the “description” field.
- Fixed inconsistency in the Internet Explorer 11 browser that did not allow loading queries for process requests.
- Fixed information flow between a process and subprocess, ensuring the conditions of an automatic activity of the main process are validated correctly using subprocess data.
- Fixed substitute to ensure that, after including a substitute user and attempting to remake the process, the user change can be processed to normally send the request.
- Fixed request movement in blocks when there are fields related to a parent-child form, in order for the fields to be displayed correctly.
- Fixed access to forms created by Forms beta, after updating to version 1.6.5 of the platform.
- Adjustment made to Approval for IOS application to correct request history viewing issues.
- Adjustment to service activity to correctly load the activity when filling out a field with checkbox.
- Fixed inconsistency in processes containing forms with rich text, in order to correctly render rich test when using it as filter.
- Adjustment made to a process form in the web modeler to ensure it is linked and saved correctly within the process.


<!-- anchors: Platform|CrystalLakeupdate(1.7.1)-Platform, Platform|CrystalLakeupdate(1.7.1)-Documents, Lixeira, Platform|CrystalLakeupdate(1.7.1)-Social, sample, Platform|CrystalLakeupdate(1.7.1)-WCM, Platform|CrystalLakeupdate(1.7.1)-Documentation, Platform|CrystalLakeupdate(1.7.1)-Fixes -->
