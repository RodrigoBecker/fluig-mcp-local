---
title: "Platform ❙ Define approval criteria for folder or document"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=248581188"
scraped_at: "2026-03-09T04:52:27.100Z"
depth: 3
anchors: 6
child_links: 39
---

# Platform ❙ Define approval criteria for folder or document

# Index

## Speaking of defining approval criteria for folder or document...

Content posted on the platform can be approved both by folders and by documents.

When defining criteria to include approvers in a folder, all posted content will undergo such approval, except if there are subfolders where the option ‘Inherit approvers from the parent folder?’ is unchecked.

Approval by document is only possible when this document is posted to a folder that does not have approval. In this case, the criteria are defined when the document is created. The content posted by the folder’s approver users will also require approval, since they can be both approvers and publishers, adding documents to the folder. This action is required to ensure greater assertiveness regarding posting and approving documents on the platform.

### Access approval configuration

---

**01**. Click the **Documents** menu.

**02**. Find the folder or document whose approval has to be configured.

**03**. Click the ![](/download/attachments/248581188/Barras%20horizontais2.png?version=1&modificationDate=1595510089707&api=v2)**More actions** button for the folder or document and select the **Properties** option.

**04**. Click the **Approval** tab.

### Inherit approvers from the parent folder

---

This option is only available for subfolders created within folders where approval is configured.

**01**. Go to the **Approval** tab as shown in the [Access approval configuration](#Platform❙Defineapprovalcriteriaforfolderordocument-Accessapprovalconfiguration) item.

**02**. Check the Inherit approvers from parent option. 

If the**Inherit approvers from parent** option is checked, the subfolders inherit the approval levels and their respective approvers from the parent folder. This option does not allow any additional approval configuration.

If this option is not checked, once a document is published within the subfolder, it respects the approval defined specifically for the child folder, not for the parent folder.

### Add approval level

---

You can also use the feature for approval in levels, that is, the posting of a folder or document can be configured to go through several approval levels. 

**01**. Go to the **Approval** tab as shown in the [Access approval configuration](#Platform❙Defineapprovalcriteriaforfolderordocument-Accessapprovalconfiguration) item.

**02**. In the **Add level** field, enter a description for the approval level that will be assigned to the folder or document.

**03**. Click on **Add level.**

Clicking on this option opens an area in which you can define which users can approve the documents posted in this folder.

**04. **Define the users or groups to be part of the approval level.

Click on **Collaborator** to add a user as approver of the folder or document. In the window that opens, select the user who will be defined as an approver of the folder or document and click on **Select**.

Click on **Group** to add a user group as approver of the folder or document. In the window that opens, select the user group that will be defined as an approver of the folder or document and click on **Select**.

To delete a user or user group that is already added, just select it and click on **Delete**. 

Check the document’s security settings!

The approving user must have at least reading permission for the document to be approved, otherwise the user will not be able to access the document for approval. It is important to note that document security does not require approval: if the document under approval permission is withdrawn, this rule applies immediately, blocking access to the document submitted for approval.

**05**. Define the other information for the approval level added.

**Approval Condition**
Approval condition for the items posted to the folder. The available options are:
- AND: when selected, it determines that the opinions of all approvers should be considered for the document to be published or sent to the next approval level;
- OR: when selected, it determines that only one of the approvers must consent for the document to be published or sent to the next approval level;
- Single: when selected, it determines that, when there is a list of approvers, the decision by the first user will be definitive for this entire group of approvers. That is true for both approvals and rejections. The difference between “OR” and “Unique” is that, in the OR condition, everybody has to reject. If most of the approvers reject it, but the last one approves it, the document will be approved.

This level requires a digital signature
When checked, it determines that approval of this level requires a digital signature. This option is only available if the [Digital signature](/pages/viewpage.action?pageId=268805527) feature is configured for this company.

**06**. After making the necessary changes to the properties of the folder or document, click **Confirm** to save the changes.

### Remove approval level

---

Before removing the approval level, approve all documents that are pending approval.

**01**. Go to the **Approval** tab as shown in the [Access approval configuration](#Platform❙Defineapprovalcriteriaforfolderordocument-Accessapprovalconfiguration) item.

**02**. Click the tab for the approval level to be removed.

**03**. Click the **Remove level** button, located next to **Add level**.

Please note!

This documentation is valid as of the **Lake (1.7.0) update**. If you use a previous update, it may contain information different from what you see on your platform.


<!-- anchors: Platform❙Defineapprovalcriteriaforfolderordocument-Index, Platform❙Defineapprovalcriteriaforfolderordocument-Speakingofdefiningapprovalcriteriaforfolderordocument..., Platform❙Defineapprovalcriteriaforfolderordocument-Accessapprovalconfiguration, Platform❙Defineapprovalcriteriaforfolderordocument-Inheritapproversfromtheparentfolder, Platform❙Defineapprovalcriteriaforfolderordocument-Addapprovallevel, Platform❙Defineapprovalcriteriaforfolderordocument-Removeapprovallevel -->
