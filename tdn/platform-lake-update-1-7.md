---
title: "Platform | Lake Update (1.7)"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=550328143"
scraped_at: "2026-03-09T05:16:54.014Z"
depth: 4
anchors: 24
child_links: 18
---

# Platform | Lake Update (1.7)

![](/download/attachments/550328143/Banner-TDN.png?version=1&modificationDate=1590665406453&api=v2)

Attention! Lake 7.0!

As you can see, we’ve changed the version number in this update! That’s because we made some major architectural changes. We try to stay ahead of every possible situation to make sure you don’t run into problems. However, there may be some incompatibility issues in customizations made to the platform, which may require more caution when updating.

Also remember that first your environment has to be updated to **Fluig 1.6.5-200318 or higher**, and then updated to **1.7.0**.

Check out the [Architecture](https://tdn.totvs.com/pages/viewpage.action?pageId=550328143#LakeUpdate(1.7.0)-Architecture) section to see the changes and read the [Checklist](https://tdn.totvs.com/x/6YXAI) we prepared with tips to ensure a smooth environment update.

Attention – MySQL 5.5

With the launch of the Lake 1.7 release, which brought many new Architecture features, the poor performance of the **MySQL 5.5** database reported on the [customer portal in 2017](https://tdn.totvs.com/x/3BPyMw#NOT%C3%8DCIAS-mysql-55-2) got worse and the standard commands for the preexisting functions in the product will not run correctly. 

 It is important to note that, as of this release, the TOTVS Fluig Platform is no longer compatible with the MySQL 5.5 database. 

Check out the news in TOTVS Fluig Platform’s 1.7.0 update:

## Platform

---

**Fluig Platform is now TOTVS Fluig Platform!**

Nowadays, everything around is us constantly changing... And we wouldn’t have it any other way here at TOTVS, right? That’s why our brand architecture was revamped to simplify product presentation, making it easier for the market to understand our portfolio.

Therefore, the Fluig Platform you know is now called **TOTVS Fluig Platform**: endless possibilities within our very own platform, with all of the power that lies behind the TOTVS brand!

This brand shift also changed the platform’s visual features to add TOTVS’s identity.

- [Platform version name](#)
- [Default logo and login image](#)
- [Name of the browser tab](#)

Check out some of the main changes:

![](/download/attachments/550328143/Nome.png?version=1&modificationDate=1591387199497&api=v2)

![](/download/attachments/550328143/Logo.png?version=1&modificationDate=1591387289827&api=v2)

![](/download/attachments/550328143/Aba.png?version=1&modificationDate=1591387380347&api=v2)

The platform’s operation remains the same, including some innovations and improvements in this release.

## Brazilian General Data Protection Regulation (LGPD)

---

**Diving deep in personal data with the LGPD**

The LGPD (Brazilian General Data Protection Regulation) governs activities surrounding personal data to ensure the security and privacy of consumers. As a software provider, TOTVS is positioned as a partner to its clients in the LGPD compliance process. 

With this scenario in mind, the **Lake update**brings new features to maintain and scale compliance with best management practices and processes related to data protection. Learn more:

**Use Policy and Consent Form **Write a complete use policy for your portal, covering all points where the portal requests user data. The use policy can be set up as a consent form: when logging in for the first time, users must accept this term before browsing through the portal. This protects the company and ensures users are aware that their data are being used.

Check out how simple it is to set up a consent form for user acceptance: 

- [1- Write a consent form](#)
- [2- Link the term to the Use Policy](#)
- [3- Select the Policy that requires consent](#)
- [That is all!](#)

Include a PDF file or create a clause in the platform featuring the consent form and all required information.

![](/download/attachments/550328143/Pol%C3%ADtica%20de%20uso.png?version=1&modificationDate=1590665405887&api=v2)

Submit a use policy for the company and link it to the form you created.

![](/download/attachments/550328143/Pol%C3%ADtica%20de%20uso%202.png?version=1&modificationDate=1590665405687&api=v2)

Do not forget to indicate that this document must be presented to users as a consent form.

![](/download/attachments/550328143/Pol%C3%ADtica%20de%20uso%203.png?version=1&modificationDate=1590665405717&api=v2)

That is all!

This ensures the term is presented to users and requires their acceptance. It is that simple!

![](/download/attachments/550328143/Termo%20de%20Consentimento%20%281%29.png?version=1&modificationDate=1590665405923&api=v2)

Attention!

- We recommend having a legal expert review the consent form before disclosing it to users.
- If the fluig environment is integrated to Identity, the consent form is registered under [Identity’s security](https://tdn.totvs.com/x/C5JvI#Dadoseprivacidade-Definirtermodeconsentimentotermo) settings.
- For more information, refer to the documents [Use Policy](https://tdn.totvs.com/x/kqIXDg) and [Consent Form](https://tdn.totvs.com/x/tFnNI).

**Manage personal data requested in the platform**

Since the fluig platform is highly customizable, most of the information stored comes from fields created by the users themselves. In order to make it easier to identify and control personal data stored, the data is now mapped in a separate list, available only to administrators. 

The Personal Data Register is here to make your life easier! Indicate the fields on your database that contain personal data. Make the register even more complete by adding classifications and justifications, such as why the data is requested and for what purposes it will be used.

See how it works:

- [List of personal data](#)
- [Add personal data](#)

The Personal Data screen lists all fields that require personal data...

![](/download/attachments/550328143/Dados%20pessoais%20%281%29.png?version=1&modificationDate=1590665406330&api=v2)

... and you can manually input the attributes required as personal data.

![](/download/attachments/550328143/Adicionar%20dado%20pessoal.png?version=1&modificationDate=1590665405750&api=v2)

Attention!

You can request personal data in forms created in advanced mode, Fluig Studio, process forms, community forms, Forms, and user register data. For more information, refer to the document [Personal Data](https://tdn.totvs.com/x/61nNI).

**Guaranteed privacy of your users**

Diving deeper into this context, what if a data owner is worried about his privacy and requests any action regarding his data? The Lake update is ready for that!

With the new Anonymize/export personal data feature, you can easily find personal data per user or type of data, and take all necessary measures, including export or anonymize data.

- When **exporting data**, the requested personal data are gathered in a JSON file to be sent to the data owner, who may also import the file into other systems, if necessary;

- In **anonymization**, the personal data undergo an irreversible treatment and will no longer be presented in the respective registers. 

See below:

- [Anonymize/export personal data](#)
- [Anonymize data](#)
- [Anonymized data](#)
- [Export data](#)
- [Exported data](#)

![](/download/attachments/550328143/anonimizar%20e%20exportar.png?version=1&modificationDate=1590665406390&api=v2)

![](/download/attachments/550328143/Anonimizar.png?version=1&modificationDate=1590665406357&api=v2)

![](/download/attachments/550328143/Anonimiza%C3%A7%C3%A3o%20antes%20e%20depois.png?version=1&modificationDate=1590665406200&api=v2)

![](/download/attachments/550328143/Exportar%20dados.png?version=1&modificationDate=1590665406423&api=v2)

![](/download/attachments/550328143/Dados%20exportados.png?version=1&modificationDate=1590665406230&api=v2)

Attention!

For more on these features, refer to the document [Anonymize and export personal data](https://tdn.totvs.com/x/ElrNI).

**Map personal data in forms**

The Lake update brings a wave of new security and protection features to your platform. Now, forms created by fluig users that contain personal data can also be mapped to ensure compliance with the LGPD. This encompasses forms created in advanced mode, in fluig Studio, process forms, community forms, and Forms.

These features include data search, anonymization and exporting, as needed, in addition to viewing log, to ensure absolute security for data owners. 

**Keep track of everything happening on the platform**As an additional features to guarantee the security of your operations, fluig offers a logging service for all changes made to the platform, in specific features such as Roles, Users, Groups, Processes, Documents, etc., and exclusive monitoring tools for all registered personal data. Refer to [Audit Events](https://tdn.totvs.com/x/WANZGg) to learn more.

![](/download/attachments/550328143/Eventos%20de%20auditoria%201.7.0.png?version=1&modificationDate=1590665405657&api=v2)

Tip

It is important to underline that TOTVS is positioned as a partner to its clients in the LGPD compliance process. We are committed to helping you through this transition, despite providing support tools and the law requiring full commitment of each company and client. 

Do you have any doubts regarding a concept or rule of the LGPD? Click [here](https://tdn.totvs.com/pages/releaseview.action?pageId=514427789) to learn more.

## Processes

---

**LGPD applied to process forms**

For either SaaS applications or local systems, we all want to ensure the security of our data travelling through the net. That is the reason for the consolidated and complete approach of the LGPD, covering all of these demands and providing users with a complete alternative to protect and treat their personal data, with the confidentiality and attention they deserve. 

Forms were always major protagonists when it comes to data, since most of them request a wide range of information, which is often personal, such as age, Individual Taxpayer Registration Number, ID number, and date of birth, among others. These data carry the weight of completely personal and non-transferable information. 

Personal data within a platform can rely on security measures where, when setting up a form within a process with specific rules, you can determine which information can or cannot be available for viewing. The **Privacy** item can be configured in all fields, except Evaluation, determining whether the field has personal data, if its content can be anonymized, and the reason and justification for requesting such information in the form. Check out the complete step-by-step process in [**Configure form**](https://tdn.totvs.com/x/IKsFE) and learn which items can be configured based on the Brazilian General Data Protection Regulation.

- [Video](#)
- [Form in process configuration](#)

![](/download/attachments/550328143/Formul%C3%A1rio%20-%20configurar%20processo.PNG?version=1&modificationDate=1590665405990&api=v2)

**New APIs to register processes and substitutes**

In order to meet clients’ needs regarding the creation, query, update and distribution of processes via API, we introduced new APIs created specifically to facilitate the workflow process registration routine. 

In addition, we implemented a logic in process APIs to consider the concept of substitute users for mobile applications. 

To learn more about these APIs, refer to [API Process Management](https://api.fluig.com/process-management/swagger-ui/#/Processes). 

![](/download/attachments/550328143/image2020-4-6_14-44-9.png?version=1&modificationDate=1590665406140&api=v2)

## Documents

---

**Advanced form in the LGPD context**

Advanced forms (i.e. created and configured through Fluig Studio) also adopt personal data security measures. The settings, in this case, are encoded directly in Studio and allow developers to add some attributes to the HTML “input” field, in order to configure the privacy of the field.

Check out below the step-by-step instructions to configure your advanced form based on LGPD regulations to protect your data, or refer to [Form creation](https://tdn.totvs.com/x/ZjASCw).

This is how the advanced form privacy configuration looks like:

- [Creation in Fluig Studio](#)
- [Form imported to fluig](#)
- [Form being completed](#)

Form created in Fluig Studio. The attributes to configure field privacy are highlighted:

![](/download/attachments/550328143/Fluig%20Studio.png?version=1&modificationDate=1590665405960&api=v2)

![](/download/attachments/550328143/Formul%C3%A1rio%20avan%C3%A7ado.png?version=1&modificationDate=1590665406110&api=v2)

![](/download/attachments/550328143/Preenchimento%20formul%C3%A1rio.png?version=1&modificationDate=1590665406080&api=v2)

**Dive deeper into fluig reports**

We updated our platform to ensure compatibility with the latest BIRT version: 4.8. BIRT is an *open source* platform that facilitates report modelling within fluig. In this version, the platform received enhancements related to the security of data and access to data, broader support to other report exporting formats (including XLS and DOCX), and streamlined integration with JavaScript libraries. Go to the [official website](https://www.eclipse.org/birt/phoenix/project/notable4.3.php) to learn more about this version. 

![](/download/attachments/550328143/Birt-logo.png?version=1&modificationDate=1590665406300&api=v2)

Refer to the technical documentation [Form creation](https://tdn.totvs.com/x/ajASCw) to learn how to prepare the environment and create the reports you want! Check out the templates we have already created for you [here](https://tdn.totvs.com/x/IaOwD)!

## Mobile

---

**Substitutes in Approval**

We implemented a mechanism in Approval that allows moving requests with substitute users. With this feature, users can select the replaced person and view their pending tasks, making it easier to access and complete tasks with even more efficiency.
Go to “Configure activities and flows” to check out the documentation. Don’t forget to check out this app’s new features in “Release Notes Approval”.

## Social

---

**New Social APIs in the Lake****update**

We are constantly brainstorming new ways to meet our client’s needs across a wide range of different operations. That is precisely why we developed new Collaboration APIs to facilitate operations in:

- [Communities](https://api.fluig.com/collaboration/swagger-ui/#/Communities): APIs were created for communities to list specific community information, list information of all communities, list users in the community, request permission to join communities, and remove community users;
- [Followers](https://api.fluig.com/collaboration/swagger-ui/#/Followers): APIs were created for followers to search all followers of a user, requests to follow specific users, and remove users from the list of followers of another user;
- [Profile pictures](https://api.fluig.com/collaboration/swagger-ui/#/Profile_picture): an API was created for profile pictures to add or edit images for specific users;
- [Users](https://api.fluig.com/collaboration/swagger-ui/#/Users): APIs were created to list information of all users, list users followed by a specific user, and list information of a single user.

![](/download/attachments/550328143/image2020-4-6_14-45-1.png?version=1&modificationDate=1590665406170&api=v2)

For more details on APIs, go to [api.fluig.com](https://api.fluig.com/)

**LGPD applied to community forms**

You can also use our features to adapt to new data protection measures in forms posted in communities.

The fields now have another configuration option: the **Privacy** item. Simply add the fields required for your form and define the Privacy item within each field’s configuration. This enhances the security of data gathered in your forms.

Do not miss this update and the opportunity to make your fluig even more flexible.

**Check out the news**

- For more details, access the [Post form in community](https://tdn.totvs.com/x/9qAXDg) help document.

![](/download/attachments/550328143/LGPD%20privacidade%20forms%20comunidade.png?version=1&modificationDate=1590665406050&api=v2)

## Architecture

---

**More security and compatibility in fluig**

Some libraries and tools were updated to enhance the fluig platform’s security, performance and stability. The platform now uses the application server **Wildfly**, **version 18**, and the run environment Java (**OpenJDK**), **version 11**. We also validate the **Oracle18c** database and **Windows Server 2019**.

![](/download/attachments/550328143/Arquitetura.png?version=1&modificationDate=1590665406483&api=v2)

![](/download/attachments/550328143/Windows-server-2019-dinahosting-1.jpg?version=1&modificationDate=1591616948963&api=v2)

**Attention!**

- Developers using the Eclipse plugin must update to a version compatible with Java 11.
- The MySQL 5.5 database is no longer compatible as of the Lake update.
- If the “domain.xml” and “host.xml” files are edited, it is important to confirm whether all changes were migrated to the new version; check all manual changes made to the files.

Refer to our documents [Portability Matrix](https://tdn.totvs.com/x/yzASCw) and [Sizing](https://tdn.totvs.com/x/zDASCw) for more information on the requirements and performance of fluig.

## WCM

---

**Architecture update in WCM – Even more security for you**

Version 1.7.0 Lake brings updated libraries (libs) to ensure even more security and stability when accessing the Fluig platform.

Check out the updated libraries:

- jQuery version 222 to **3.5.0**
- Moment version 2.9.0 to **2.24.0**
- Bootstrap version 3.3.6 to **3.4.1**

Since this update can impact page and widget development, we added a migration plugin provided by jQuey: **jquery-migrate**.

Besides helping restore behaviors lost in the previous version, this will also help identify points where code updates are required. We recommend using this plugin to make code adjustments as soon as possible, since it will be removed from Fluig’s installation in the next releases.

**Fique atento!**

Check out the following document for a complete update walkthrough: **jQuery Update - How to identify what requires updating**

**New Fluig editing menu**

The Fluig platform was fully updated with major improvements not only in terms of security, but also in usability.

The Fluig Platform menu was completely updated to facilitate user identification and use.

The features **Edit profile**, **Edit image**, **Language**, **Help** and **Logout** are now located on the right-hand side of the user profile picture, identified by the icon. This makes it easier to find and use all of the features that were previously embedded into the profile picture.

- [New menu](#)

![](/download/attachments/550328143/Novo%20menu%20Fluig%20plataforma.png?version=1&modificationDate=1590665406513&api=v2)

**Confira mais detalhes**

Mais detalhes sobre essa atualização podem ser conferidos no help: (inserir link da documentação)

## Documentation

---

- Our documentation on [**Audit Events**](https://tdn.totvs.com/x/WANZGg) was updated to detail events that will be audited in the platform. Check it out!
- Documents regarding the new features related to user privacy, grouped in [Security and Access](https://tdn.totvs.com/x/lTKAGg).
- **TOTVS Identity** now has an exclusive area for help, FAQ and technical documents. [Access here!](https://tdn.totvs.com/x/NnA9I)  
- Check out more details about the novelties and fixes made to the [fluig Mobile application](https://tdn.totvs.com/x/B1y2Fg).

A massive knowledge base at your disposal.

We are constantly improving our knowledge base in **Zendesk**. Each time you open a ticket for fluig service, search to see if there is an article with similar questions or issues that have already been mapped and solved. Suggested articles are shown after you select the ticket subject.

This helps you get back to work much faster. Go to [suporte.totvs.com](https://suporte.totvs.com) to learn more.

## Fixes

---

**WCM**

- Processing to allow the addition of more than one URL in posts.
- Adjusted the *autocomplete* component of the Style Guide, in order not to show the list of options when the field is disabled.

**BPM**

- Adjusted update scroll for the Snowflake theme, correcting content alignment on screen.
- Fixed conditional activity to correctly accept and validate the activity’s script.
- Fixed the creation of subcategories with the same name of the parent category. Processing to separate categories per structure level, solving inconsistency issues, in order to correctly load processes and show folders.
- Fixed imported libraries to automatically validate and no longer show the message, when the form uses the Style Guide.
- Adjusted to underline in red words typed incorrectly in request add-ons, indicating a spelling mistake, after the fluig update.
- Fixed situation where, within a process with a mechanism of assignment by form field, when editing and deleting the existing field to add a new field, the activity mechanism was empty and did not allow editing. Adjustment made to update the field when replaced.
- Fixed to ensure correct display of users in a certain role when viewing an activity’s data, during process startup.
- Adjustment to the search of users in Tasks to ensure the list of users is viewed correctly.
- Fixed fluig mobile to correctly display the text of the service activity add-on on the screen.
- Fixed the table FDN_PERSONALDATA related to process form fields, to ensure personal data marked as anonymous are correctly anonymized.
- Adjusted to underline in red words typed incorrectly in request add-ons, indicating a spelling mistake, after the fluig update.
- Fixed inconsistency in substitute user registration, where the system previously allowed registering identical users and dates.
- Fixed inconsistency preventing the validation or editing of substitute users during process startup.
- Fixed inconsistency when selecting an activity in pool, and after clicking to show the list of users in the group/role, the result is loaded correctly.
- Adjusted validations of service activity, enabling exporting a process with cleared version, containing the service activity without a script.
- Processing to issue a warning if the user tries to move a request to an inactive or non-existing user.
- Fixed fluig ADHOC to use a single form registration version.

**Forms**

- Fixed forms with text fields with currency or percentage mask, in order to correctly save the amount in the database with POINT, which is the correct decimal place indicator, instead of COMMA, which was being used incorrectly.
- Adjusted form fields to correctly save names.
- Adjusted the rich text field and increased field limit to 10,000 characters, with validation only applied to characters that are visible to the user.
- Adjusted forms for the rich text component to show a field character counter, as well as a screen message displayed when the character limit is exceeded.
- Adjusted the use of the Tab button to shift the focus between fields, from left to right, and subsequently down in the first field to the left, facilitating the completion of forms without having to click each field to complete it.

**Portais**

- Fixed inconsistency that prevented a correct fluig startup.
- Fix to allow deploying components with “js” files with less than 3 characters.

**Fundação**

- Fixed sorting by columns “Substitute registration” and “Substituted registration” in the Substitutes screen.
- Fixed validation of number of characters in the fields “Login” and “Registration” of the user.
- Added message with instructions to complete the code when inserting roles.
- Adjusted Approval to validate LDAP connections without using credentials.
- Added a user permission check in Linux environments, where users initiating services must be the owner of the installation folder. This validation was only made for Linux environments derived from Deban, and are now also performed in Linux environments derived from RedHat.
- Adjustment made to situations in which users are active in more than one company in Fluig. Now, user registration, user editing, user reactivation and during log in, a message will be shown to the administrator informing that the user cannot access the platform using an email already registered in another company, allowing the administrator to choose whether to continue with the procedures listed above.

**Dataset**

- Fixed API "/ecm/dataset/synchronizeDataset" to show the proper operation.

**ECM**

- Adjustment made to show commends added to the Document on the screen without having to close and reopen the comments screen.
- Fixed inconsistency when exporting access lists of all document versions, in case of documents with many hits.
- Added the fields *inheritApprovers*, *convertDocumentType*, *notificationDays*, *quota*, and *publicDocument* to the DocumentDto object.


<!-- anchors: Platform|LakeUpdate(1.7)-Platform, sample, Platform|LakeUpdate(1.7)-BrazilianGeneralDataProtectionRegulation(LGPD), Termo, Termo-1, Termo-2, Termo-3, Termo-4, dadospessoais, dadospessoais-lista1, dadospessoais-lista2, Anonimizar_Exportar, Platform|LakeUpdate(1.7)-Processes, 1, Platform|LakeUpdate(1.7)-Documents, locais, locais-studio, Platform|LakeUpdate(1.7)-Mobile, Platform|LakeUpdate(1.7)-Social, Platform|LakeUpdate(1.7)-Architecture, Platform|LakeUpdate(1.7)-WCM, sample, Platform|LakeUpdate(1.7)-Documentation, Platform|LakeUpdate(1.7)-Fixes -->
