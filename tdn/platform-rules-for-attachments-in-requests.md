---
title: "Platform ❙ Rules for attachments in requests"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=979805710"
scraped_at: "2026-03-09T05:16:43.242Z"
depth: 4
anchors: 58
child_links: 51
---

# Platform ❙ Rules for attachments in requests

Consult the correct documentation:

This documentation refers to the new process editor of the platform. If you are using the current process editor, access [Configure activity](https://tdn.totvs.com/pages/viewpage.action?pageId=236429448#Platform%E2%9D%99Configureactivitiesandflows-ConfigureActivity). 

LANGUAGE

# Speaking of rules for attachments in requests...

---

The rules for attachments are conditions or prerequisites that you can define in the **Start** and **Activity** components, which represent stages of a process. They can require, prohibit, or allow attachments with specific characteristics, such as file names, extensions, number of files, among others – regardless of the attachments that already exist in the request, from previous stages, for example – ensuring that the stage is complete and meets the criteria required for the request to proceed.

The rules for attachments can be:

- **general**: these are simpler rules aimed at requiring quantities of attachments;

- **specific**: these are rules that, combined with the general ones, allow for requiring specific characteristics of the attachments, such as name or extension;

- **advanced**: these are specific rules with conditions defined from special characters, each with its own meaning.

Note:

The rules for attachments are not required in any component. You may or may not set them in accordance with the specific needs of each stage, process, or business.

If no rule is set, you can add any type and any quantity of attachments, meaning that no validation is performed.

Tip!

Click [here](https://tdn.totvs.com/pages/viewpage.action?pageId=979031748#Platform%E2%9D%99Activity-Configurerulesforattachments) to learn how to configure rules for attachments in a stage of the process.

![](/download/attachments/979805710/regras-de-anexos.png?version=2&modificationDate=1756150701270&api=v2)

## Rule objectives

---

The rules aim to expedite the resolution of requests, as they prevent the forwarding of requests lacking the content required for analysis in the next step being complete or correct, for example, which would require the request to be returned for adjustments.

In this way, the rules help to avoid rework and delays in the resolution of requests, as well as aim to facilitate the analysis of each step and the understanding of what the request demands.

## Order of rule verification

---

When you move the request to the next step, the system verifies the rules for attachments of the current step, and if any of them are not met, it displays a message notifying which rules have been met and which have not.

**All rules** must be met and **all attachments** must be valid to complete the step and send the request to the next one. When an attachment is considered valid for a rule, the system does not verify it against the other rules. Therefore, there is an order for rule verification, and you must consider it when creating the rules.

The order of rule verification for the step attachments is:

- **1º →** The system verifies the rules for **quantity**, **name**, and **extension**, analyzing the attachments valid for each rule. If any of the rules are not met, it displays the validation message, preventing that it be sent to the next step.

- **2º** **→**It verifies whether a rule exists with **any**, and whether an attachment has not met any previous rules. If so, the attachment is considered valid, as it meets the rule with any (which is the last to be verified), and allowed to continue to the next step. Otherwise – there is no rule with **any**, but there is an attachment that has not met **any** previous rules – the system displays the validation message, preventing the sending to the next step, even if the other attachments have met the previous rules.
EXAMPLE 1**→**A step has 3 rules for attachments, one of which is with **any one**.**→** You add 4 attachments. Two of them met the first rule, one met the second rule, and the fourth did not meet either of the two rules (which are checked before the rule with **any one**).**→** Since the third rule has the **any one**, this fourth attachment meets it. In this case, all rules are met and all attachments are valid. Therefore, it can move to the next step.

EXAMPLE 2**→** A step has 2 rules for attachments and none of them use **any one**.**→** You add 3 attachments. One met the first rule, another met the second rule, and the third did not meet either of the two rules.**→** Since there is no rule with **any one**, this third attachment did not meet any rule. In this case, it is not considered valid. Therefore, it cannot move to the next step.

## General rule

---

General rules are the simplest. They are useful for defining the required number of attachments, as well as whether the attachment can be of any type or in any quantity at the step.

Check below an example for each condition available for creating general rules for attachments.

**→** The attachment must be **equal to 2**.

You are required to add **two** attachments at this step, and you are not allowed to add more.

**→** The attachment must be **greater than 0**.

You are required to add **at least one** attachment at this step, and you are allowed to add **more** than one.

**→** The attachment must be **greater than or equal to 1**. 

You are required to add **at least one** attachment at this step, and you are allowed to add **more** than one.

**→** The attachment must be**less than 3**.

You are allowed to add **up to two** attachments at this step or leave the step without attachments.

**→** The attachment must be **less than or equal to 4**.

You are allowed to add **up to four** attachments at this step or leave the step without attachments.

**→** The attachment must be **any one**. 

You are allowed to add **any type** and **any quantity** of attachments at this step, including leaving the step without attachments.

SCENARIO 1
In a process of **Requesting a waiver of hours** due to medical issues to the Payroll area, the requester must necessarily submit the medical certificate that justifies the waiver. The certificate is accepted in any format, which can be an image, a photo, a PDF document, a ZIP file. In short, no file type is required. However, the requester can submit only one certificate per request, meaning that if they have more than one certificate, they must open a request for each one.

Thus, the rule can be defined as follows:

→ The attachment must **equal 1**.

You are required to add **one**attachment of any type, and you are not allowed to add more than one.

****

        Your browser does not support the HTML5 video element

SCENARIO 2
In a process of **Simple budget approval**, the person responsible for the approval prefers that the details be provided directly in the request form, so that when opening the request for analysis, the amount to be approved is already evident, without the need to open a document to see the information.

→ In this case, you do not need to add any rules, just activate the option **Prohibit attachments**, which means that **no** attachments are allowed at this stage. The budget details must be added in the request form.

****

        Your browser does not support the HTML5 video element

## Specific rule

---

You need to combine specific rules with general rules to allow or require specific attachment characteristics, such as file name and extension.

You can define, for example, that the user can only add attachments with a certain type of extension, or require that the attached file follows a predetermined naming pattern.

Check below some examples of specific attachment rules.

→ The attachment must be **equal to 1** with the **file name containing the term note** at the **beginning**.

You are required to add **an** attachment that has the term **note** at the beginning of its name.

→ The attachment must be **less than or equal to 2** with **the extension equal to .zip**.

You are allowed to add up to **two** attachments with the **.zip** extension or leave the step without attachments.

→ The attachment must be **equal to 1** with **the name and extension containing** the term **boleto** at the **beginning** and the term **.pdf** at the **end**.

You are required to add **an** attachment that has the term **boleto** at the **beginning** of its **name** and that is a **PDF** document.

SCENARIO 1
In a **ticket opening process** for the IT department, the requester needs to send at least one image of the inconsistency that is occurring or of the resource for which they are requesting assistance. Only images of the PNG type are accepted. If possible, it is also interesting to send the log, but it must be in TXT format and is not required.

Thus, you can set the rules as follows:

→ The attachment must be **greater than or equal to 1** with **the extension equal to .png**.

The requester is required to add**at least one** attachment that is an image with the **.png** extension. However, if desired, they can add more attachments.

→ The attachment must be **greater than or equal to 0** with **the extension equal to .txt**.

If the requester can obtain the log, they can attach it to the request to facilitate analysis. However, they are not required to attach it.

→ The attachment must be **equal to 0** with **the extension equal to .exe**.

For security reasons, you are not allowed to add any attachment that has the **.exe** extension.

****

        Your browser does not support the HTML5 video element

SCENARIO 2
In a **payment request process** for the Finance area, the requester must submit three documents: the electronic invoice, the payment slip, and a detailed list of the products or services acquired. The documents must be in PDF format and identified by the respective names "boleto", "fatura", and the invoice must be identified with the code "NF" at the beginning of the name.

Thus, the rules can be defined as follows:

→ The attachment must be **equal to 1** with **the name and extension containing** the term **boleto** in the name and the term **pdf** in the extension.

You are required to add **an** attachment that has the name **boleto** and is a document with the **.pdf** extension.

→ The attachment must be **equal to 1** with the **name and extension containing** the term **fatura** in the name and the term **pdf** in the extension.

You are required to add **an** attachment that has the name **fatura** and is a document with the **.pdf** extension.

→ The attachment must be **equal to 1** with **the name and extension containing** the term **NF** at the **beginning** of the name and the term **pdf**at the **end** of the extension.

You are required to add **an** attachment with the characters **NF** at the beginning of its name and with the **.pdf** extension to identify it as the invoice. Attachments such as **NF_10355.pdf**, **NF89665.doc.pdf**, **NF-58361.pdf** are acceptable.

****

        Your browser does not support the HTML5 video element

## Advanced rule

---

You must set the advanced rules from an expression that can use a combination of the following characters:

- ***** (**asterisk**): allows for any characters to be present or absent before or after it.
**EXAMPLEboleto*** → means containing the term **boleto** at the beginning of the name, which may or may not have any other characters after the term, including in the extension – allowed by *. Attachments such as **boleto.pdf** or **boleto-janeiro.png** are acceptable.
- **|** (**pipe**): means "**or**" and allows defining multiple patterns.
**EXAMPLE.pdf|.doc|.docx|.txt** → means it can be **.pdf**,**.doc**, **.docx**, or **.txt** – extensions allowed by | – which may have any name before the extension – allowed by *****. Attachments such as **processo.pdf** or **anotações.txt** are acceptable.
- **!** (**exclamation**): means "**different from**" or "**prohibited**" and allows blocking a pattern.
**EXAMPLE!*.zip** → means different from **.zip** – the extension is prohibited by ! – it can have any name before the extension – allowed by *. Attachments like **boleto.pdf** or **processo.png** are acceptable.

Check out some more examples of advanced rules for attachments.

→ The attachment must be **equal to 1** with **advanced condition fatura.pdf|nota.pdf**.

You are required to add **an** attachment named **fatura** or **nota** with the **.pdf** extension. You cannot add **more** than one.

→ The attachment must be **any** with **advanced condition !server.***.

You are allowed to add **any type** of attachment with a name different from **server** and with any extension, or leave the step without attachments. The name **server** is **prohibited**.

→ The attachment must be **greater than or equal to 3** with **advanced condition boleto.pdf**.

You are required to add **at least 3** attachments, and you can add more, that contain the term **boleto** in the name and with the **.pdf** extension.

SCENARIO 1

In a travel **Reimbursement Request** process to the Finance area, the requester can submit proof of payment for the stay, transportation, and ticket if the trip was for an event. The proofs need to be in PDF and identified by name.

Thus, the rules can be defined as follows:

→ The attachment must be **greater than or equal to 1** with **advanced condition estadia.pdf|transporte.pdf|ingresso.pdf**.

You are required to add **at least one** attachment, and you can attach more, that contains the term **estadia**, **transporte**, or **ingresso** in the name and with the **.pdf** extension.

****

        Your browser does not support the HTML5 video element

SCENARIO 2

In a **Purchase Request** process for office supplies to the Purchasing area, the requester needs to submit a photo of the requested material to serve as a reference and facilitate the purchase. This photo can be of various types.

Thus, you can set the rules as follows:

→ The attachment must be **greater than or equal to 1** with **advanced condition .png|.jpg|.jpeg|.bmp**.

You are required to add **at least 1** attachment with any name that is an image with one of the allowed extensions: **.png**, **.jpg**, **.jpeg**, or **.bmp**.

****

        Your browser does not support the HTML5 video element

## Examples

---

We have gathered several scenarios here in which you can apply attachment rules. The examples include the rule, a help message to comply with the rule, and the results according to the scenario.

Examples of general, specific, and advanced rules are demonstrated. Click each scenario to see its details.

[Open/close all scenarios](#)

#### Require at least one attachment in the step.

---

**RULE**

→ The attachment must be **greater than 0**.

**MESSAGE**

→ You are required to add at least one attachment of any type.

| Results |  |  |
| --- | --- | --- |
| No attachment added. |  | Rule not met. |
| One attachment with the .pdf extension added. |  | Rule met. |
| One attachment with the .zip extension added. |  | Rule met. |
| One attachment with the .zip extension and one with the .pdf extension added. |  | Rule met. |
| One attachment with the .jpg extension added. |  | Rule met. |
| One attachment with the .pdf extension, one with the .zip extension, and one with the .jpg extension added. |  | Rule met. |

#### Prohibit attachment in the step.

---

To prohibit attachments in a step, you do not need to create any rule; just activate the option **Prohibit attachments**, which determines that no attachments are allowed in the step.

![](/download/attachments/979805710/proibir-anexos.png?version=2&modificationDate=1756233768407&api=v2)

#### Require an attachment with the .zip extension.

---

**RULE**

→ The attachment must be **equal to 1** with **the extension equal to .zip**.

**MESSAGE**

→ You are required to add an attachment with the .zip extension.

| Results |  |  |
| --- | --- | --- |
| No attachment added. |  | Rule not met. |
| One attachment with the .pdf extension added. |  | Rule not met. |
| One attachment with the .zip extension added. |  | Rule met. |
| One attachment with the .zip extension and one with the .pdf extension added. |  | Rule not met. |
| One attachment with the .jpg extension added. |  | Rule not met. |
| One attachment with the .pdf extension, one with the .zip extension, and one with the .jpg extension added. |  | Rule not met. |

#### Require an attachment with the .zip extension AND an attachment with the .pdf extension.

---

**RULES**

→ The attachment must be **equal to 1** with **the extension equal to .zip**.
→ The attachment must be **equal to 1** with **the extension equal to .pdf**.

**MESSAGES**

→ You are required to add an attachment with the .zip extension.
→ You are required to add an attachment with the .pdf extension.

| Results |  |  |
| --- | --- | --- |
| No attachment added. |  | Rules not met. |
| One attachment with the .pdf extension added. |  | Rules not met. |
| One attachment with the .zip extension added. |  | Rules not met. |
| One attachment with the .zip extension and one with the .pdf extension added. |  | Rules met. |
| One attachment with the .jpg extension added. |  | Rules not met. |
| One attachment with the .pdf extension, one with the .zip extension, and one with the .jpg extension added. |  | Rules not met. |

#### Require an attachment with the extension .zip OR .pdf.

---

**RULE**

→ The attachment must be **equal to 1** with **advanced condition .zip|.pdf**.

**MESSAGE**

→ You are required to add an attachment with the .zip or .pdf extension.

| Results |  |  |
| --- | --- | --- |
| No attachment added. |  | Rule not met. |
| One attachment with the .pdf extension added. |  | Rule met. |
| One attachment with the .zip extension added. |  | Rule met. |
| One attachment with the .zip extension and one with the .pdf extension added. |  | Rule not met. |
| One attachment with the .jpg extension added. |  | Rule not met. |
| One attachment with the .pdf extension, one with the .zip extension, and one with the .jpg extension added. |  | Rule not met. |

#### Require an attachment with the extension .zip and allow other types of attachments to be added or not.

---

**RULES**

→ The attachment must be **equal to 1** with **the extension equal to .zip**.
→ The attachment can be **any**.

**MESSAGE**

→ You are required to add an attachment with the .zip extension.

| Results |  |  |
| --- | --- | --- |
| No attachment added. |  | Rules not met. |
| One attachment with the .pdf extension added. |  | Rules not met. |
| One attachment with the .zip extension added. |  | Rules met. |
| One attachment with the .zip extension and one with the .pdf extension added. |  | Rules met. |
| One attachment with the .jpg extension added. |  | Rules not met. |
| One attachment with the .pdf extension, one with the .zip extension, and one with the .jpg extension added. |  | Rules met. |

#### Prohibit attachment with the extension .zip and allow other types of attachments to be added or not.

---

**RULES**

→ The attachment must be **equal to 0** with **the extension equal to .zip**.
→ The attachment can be **any**.

**MESSAGE**

→ You are not allowed to add an attachment with the .zip extension.

| Results |  |  |
| --- | --- | --- |
| No attachment added. |  | Rules met. |
| One attachment with the .pdf extension added. |  | Rules met. |
| One attachment with the .zip extension added. |  | Rules not met. |
| One attachment with the .zip extension and one with the .pdf extension added. |  | Rules not met. |
| One attachment with the .jpg extension added. |  | Rules met. |
| One attachment with the .pdf extension, one with the .zip extension, and one with the .jpg extension added. |  | Rules not met. |

#### Require an attachment with the extension .zip and require at least one other type of attachment.

---

**RULES**

→ The attachment must be **equal to 1** with **the extension equal to .zip**.
→ The attachment must be **greater than or equal to 1** with a **different extension from .zip**.

**MESSAGES**

→ You are required to add an attachment with the .zip extension.
→ You are required to add at least one attachment with a different extension from .zip.

| Results |  |  |
| --- | --- | --- |
| No attachment added. |  | Rules not met. |
| One attachment with the .pdf extension added. |  | Rules not met. |
| One attachment with the .zip extension added. |  | Rules not met. |
| One attachment with the .zip extension and one with the .pdf extension added. |  | Rules met. |
| One attachment with the .jpg extension added. |  | Rules not met. |
| One attachment with the .pdf extension, one with the .zip extension, and one with the .jpg extension added. |  | Rules met. |

#### Require one or more attachments of image type.

---

**RULE**

→ The attachment must be **greater than or equal to 1** with**advanced condition .png|.jpg|.gif**.

**MESSAGE**

→ You are required to add at least one attachment with the extension .png, .jpg, or .gif.

| Results |  |  |
| --- | --- | --- |
| No attachment added. |  | Rule not met. |
| One attachment with the .pdf extension added. |  | Rule not met. |
| One attachment with the .zip extension added. |  | Rule not met. |
| One attachment with the .zip extension and one with the .pdf extension added. |  | Rule not met. |
| One attachment with the .jpg extension added. |  | Rule met. |
| One attachment with the .pdf extension, one with the .zip extension, and one with the .jpg extension added. |  | Rule not met. |

#### Allow only image type attachments, but without making it required.

---

**RULE**

→ The attachment must be **greater than or equal to 0** with **advanced condition .png|.jp*g|.gif**.

**MESSAGE**

→ You are only allowed attachments with the extensions .png, .jpg, .jpeg, or .gif.

| Results |  |  |
| --- | --- | --- |
| No attachment added. |  | Rule met. |
| One attachment with the .pdf extension added. |  | Rule not met. |
| One attachment with the .zip extension added. |  | Rule not met. |
| One attachment with the .zip extension and one with the .pdf extension added. |  | Rule not met. |
| One attachment with the .jpg extension added. |  | Rule met. |
| One attachment with the .pdf extension, one with the .zip extension, and one with the .jpg extension added. |  | Rule not met. |

#### Require an attachment with specific name and extension.

---

**RULE**

→ The attachment must be **equal to 1** with the **name and extension equal** to the name containing the term **server** and the extension being **.log**.

**MESSAGE**

→ You are allowed only one attachment with the name server.log.

| Results |  |  |
| --- | --- | --- |
| No attachment added. |  | Rule not met.. |
| An attachment server.log added. |  | Rule met. |
| An attachment abcserver.log added. |  | Rule not met. |
| An attachment server-2018.log added. |  | Rule not met. |
| An attachment server.txt added. |  | Rule not met. |
| An attachment server.log.zip added. |  | Rule not met. |
| An attachment server.zip added. |  | Rule not met. |

#### Require an attachment with a specific term at the beginning of the name and a specific extension.

---

**REGRAS**

→ The attachment must be **equal to 1** with **advanced condition server*.log****.**

**MESSAGE**

→ You are required to add an attachment with server at the beginning of the name and with the extension .log..

| Results |  |  |
| --- | --- | --- |
| No attachment added. |  | Rule not met. |
| An attachment server.log added. |  | Rule met. |
| An attachment abcserver.log added. |  | Rule not met. |
| An attachment server-2018.log added. |  | Rule met. |
| An attachment server.txt added. |  | Rule not met. |
| An attachment server.log.zip added. |  | Rule not met. |
| An attachment server.zip added. |  | Rule not met. |

#### Require an attachment with a specific term at the beginning of the name and extension. 

---

**RULE**

→ The attachment must be **equal to 1** with **the name and extension containing** the term **server** at the **beginning**and the extension the term **.log** at the **beginning**.

**MESSAGE**

→ You are required to add an attachment with server at the beginning of the name and with .log at the beginning of the extension.

| Results |  |  |
| --- | --- | --- |
| No attachment added. |  | Rule not met. |
| An attachment server.log added. |  | Rule met. |
| An attachment abcserver.log added. |  | Rule not met. |
| An attachment server-2018.log added. |  | Rule met. |
| An attachment server.txt added. |  | Rule not met. |
| An attachment server.log.zip added. |  | Rule met. |
| An attachment server.zip added. |  | Rule not met. |

#### Require an attachment containing a specific term in the name and at the beginning of the extension.

---

**RULE**

→ The attachment must be **equal to 1** with **advanced condition *server*.log***.

**MESSAGE**

→  You are required to add an attachment that contains server in the name and .log at the beginning of the extension.

| Results |  |  |
| --- | --- | --- |
| No attachment added. |  | Rule not met. |
| An attachment server.log added. |  | Rule met. |
| An attachment abcserver.log added. |  | Rule met. |
| An attachment server-2018.log added. |  | Rule met. |
| An attachment server.txt added. |  | Rule not met. |
| An attachment server.log.zip added. |  | Rule met. |
| An attachment server.zip added. |  | Rule not met. |

#### Prohibit attachment with a specific term in the name and allow other types of attachments to be added or not.

---

**RULES**

→ The attachment must be **any** with **advanced condition !*server*.**

**OR**

→ The attachment must be **equal to 0** with **advanced condition *server***.
→ The attachment must be **any**.

**MESSAGE**

→ You cannot add an attachment that contains server in the name.

| Results |  |  |
| --- | --- | --- |
| No attachment added. |  | Rules met. |
| An attachment server.log added. |  | Rules not met. |
| An attachment abcserver.log added. |  | Rules not met. |
| An attachment server-2018.log added. |  | Rules not met. |
| An attachment server.txt added. |  | Rules not met. |
| An attachment server.log.zip added. |  | Rules not met. |
| An attachment server.zip added. |  | Rules not met. |
| An attachment boleto.pdf added. |  | Rules met. |

#### Prohibit attachment with specific term in the name and require an attachment with another name.

---

**RULE**

→ The attachment must be **equal to 1** with **advanced condition !*server***.

**MESSAGE**

→ You are required to add an attachment that does not contain server in the name.

| Results |  |  |
| --- | --- | --- |
| No attachment added. |  | Rule not met. |
| An attachment server.log added. |  | Rule not met. |
| An attachment abcserver.log added. |  | Rule not met. |
| An attachment server-2018.log added. |  | Rule not met. |
| An attachment server.txt added. |  | Rule not met. |
| An attachment server.log.zip added. |  | Rule not met. |
| An attachment server.zip added. |  | Rule not met. |
| An attachment boleto.pdf added. |  | Rule met. |

#### Require attachment with specific extension only if it has a specific name or any attachment of another extension.

---

**RULE**

→ The attachment must be **equal to 1** with **advanced condition server.log|!*.log**.

**MESSAGE**

→ You are required to add an attachment with the name server and with the extension .log or any attachment with a different extension from .log.

| Results |  |  |
| --- | --- | --- |
| No attachment added. |  | Rule not met. |
| An attachment server.log added. |  | Rule met. |
| An attachment abcserver.log added. |  | Rule not met. |
| An attachment server-2018.log added. |  | Rule met. |
| An attachment server.txt added. |  | Rule met. |
| An attachment server.log.zip added. |  | Rule met. |
| An attachment server.zip added. |  | Rule met. |
| An attachment boleto.pdf added. |  | Rule met. |

#### Require attachment with specific term at the beginning of the name and specific extension or any attachment of another extension.

---

**RULE**

→ The attachment must be **equal to 1** with **advanced condition server*.log|!*.log**.

**MESSAGE**

→ You are required to add an attachment with server at the beginning of the name and with the extension .log or any attachment with a different extension from .log.

| Results |  |  |
| --- | --- | --- |
| No attachment added. |  | Rule not met. |
| An attachment server.log added. |  | Rule met. |
| An attachment abcserver.log added. |  | Rule not met. |
| An attachment server-2018.log added. |  | Rule not met. |
| An attachment server.txt added. |  | Rule met. |
| An attachment server.log.zip added. |  | Rule met. |
| An attachment server.zip added. |  | Rule met. |
| An attachment boleto.pdf added. |  | Rule met. |

#### Prohibit attachment with specific term in the name and allow any attachment with specific extension.

---

**RULES**

→ The attachment must be **equal to 0**with **the file name containing irpf** in the **middle**.
→ The attachment must be **any** with **the extension equal to .zip**.

**MESSAGES**

→ You are not allowed to add an attachment that contains irpf in the name.
→ You are allowed to add any attachment with the extension .zip.

| Results |  |  |
| --- | --- | --- |
| No attachment added. |  | Rules not met. |
| An attachment declaracao-irpf.pdf added. |  | Rules not met. |
| An attachment abcserver.log added. |  | Rules not met. |
| An attachment server-2018.log added. |  | Rules not met. |
| An attachment server.txt added. |  | Rules not met. |
| An attachment server.log.zip added. |  | Rules met. |
| An attachment server.zip added. |  | Rules met. |
| An attachment irpf.zip added. |  | Rules not met. |

## Frequently asked questions

---

Check here some frequently asked questions about attachments in requests or in stages of requests. Click the question to see its details.

[Open/close all questions](#)

#### What happens if the attachment does not meet the rule?

---

You cannot complete the step in which the request is located and, consequently, the request cannot move on to the next step.

The attachment must meet all existing rules in the step, and at least one rule must validate all added attachments to complete it and send the request to the next step.

#### What types of files are allowed as attachments?

---

A wide range of file extensions is allowed as attachments. Find detailed below the main extensions listed for selection when creating rules for attachments. However, you can also select other more specific ones.

Additionally, if the desired extension is not suggested for selection, you can type it in to use it as usual in the rule.

| Main extensions |  |  |
| --- | --- | --- |
| Documents | .doc / .docx | Microsoft Word Document |
| .pdf | Portable Document Format |  |
| .txt | Plain Text File |  |
| .rtf | Rich Text Format |  |
| .odt | OpenDocument Text Document |  |
| Spreadsheets | .xls / .xlsx | Microsoft Excel Spreadsheet |
| .csv | Comma-Separated Values |  |
| .ods | OpenDocument Spreadsheet |  |
| Presentations | .ppt / .pptx | Microsoft PowerPoint Presentation |
| .odp | OpenDocument Presentation |  |
| Images | .jpg / .jpeg | JPEG Image |
| .png | Portable Network Graphics |  |
| .gif | Graphics Interchange Format |  |
| .bmp | Bitmap Image |  |
| .svg | Scalable Vector Graphics |  |
| Audio | .mp3 | MPEG Audio Layer III |
| .wav | Waveform Audio File Format |  |
| .aac | Advanced Audio Coding |  |
| .flac | Free Lossless Audio Codec |  |
| Video | .mp4 | MPEG-4 Video File |
| .avi | Audio Video Interleave |  |
| .mkv | Matroska Video File |  |
| .mov | Apple QuickTime Movie |  |
| .wmv | Windows Media Video |  |
| Compressed files | .zip | Zip Archive |
| .rar | RAR Archive |  |
| .7z | 7-Zip Archive |  |
| .tar.gz | Compressed Tarball File |  |
| Executable and system files | .exe | Windows Executable File |
| .dll | Dynamic Link Library |  |
| .sys | Windows System File |  |
| .sh | Shell Script |  |
| .bat | Batch File |  |
| Source code and scripts | .html / .htm | HyperText Markup Language File |
| .css | Cascading Style Sheets File |  |
| .js | JavaScript File |  |
| .py | Python Script |  |
| .java | Java Source Code File |  |
| .c / .cpp | C / C++ Source Code File |  |
| Database | .sql | Structured Query Language Data File |
| .db / .sqlite | SQLite Database File |  |
| .mdb / .accdb | Microsoft Access Database |  |

#### What is the maximum allowed size for an attachment in the request?

---

By default, the maximum allowed size per attachment (file) is **100MB**. However, you can customize this size in [General parameters](/pages/viewpage.action?pageId=236429984), to decrease or increase it up to a limit of **1GB**. To do this:

**01.** Access the**Control Panel**.

**02.** In the **Technical Parameters** group, click **Parameters**.

**03.** In **Maximum upload size via web (MB)**, enter the desired size per file in megabytes.

Note:

To set a size greater than the limit of **1GB**, you need to follow the steps described in [How to increase the platform's upload limit](/display/fluig/Como+aumentar+o+limite+de+upload+da+plataforma). However, when setting a maximum size greater than the limit (1GB), resources may experience instability when you add attachments (files).

#### What quantity of attachments does a step of the request require?

---

No minimum or maximum quantity is defined. This depends on the step and the process in question.

The question you can ask is: "What evidence or documents are required to successfully analyze and complete the request in each step?" This answer will guide the quantity and rules for the attachments.

EXAMPLE
In the **Payment**step of a Payment Request process, the Finance area only makes payments via **bank slip**. In this case, the requester needs to attach the slip at the time of opening the request. Therefore, the **Request Payment**stage (which is the first stage of the process) must require **at least one attachment**, which is the bank slip needed to make the payment when the request reaches the **Payment** stage.

#### What is the maximum allowed number of attachments in a request or in a step of the request?

---

There is no restriction on the maximum number of attachments that you can add to a request (considering all steps) or in a single step of the request.

However, when adding **more than 600 attachments** (files) at once, the system displays a message warning that the resource may become unstable. Even so, you can add the attachments as long as they do not exceed the maximum allowed size per file set in [General Parameters](/pages/viewpage.action?pageId=236429984), which by default is **100MB**, although you can change it up to the **1GB** limit.

Attention!

This documentation is valid from the **Voyager (2.0)** update onwards. If you are using a previous update, it may contain information different from what you see on your platform.


<!-- anchors: Platform❙Rulesforattachmentsinrequests-Speakingofrulesforattachmentsinrequests..., Platform❙Rulesforattachmentsinrequests-Ruleobjectives, Platform❙Rulesforattachmentsinrequests-Orderofruleverification, Platform❙Rulesforattachmentsinrequests-Generalrule, Platform❙Rulesforattachmentsinrequests-Specificrule, Platform❙Rulesforattachmentsinrequests-Advancedrule, Platform❙Rulesforattachmentsinrequests-Examples, toggleAll-1, Platform❙Rulesforattachmentsinrequests-@1Requireatleastoneattachmentinthestep., content_@1, Platform❙Rulesforattachmentsinrequests-@2Prohibitattachmentinthestep., content_@2, Platform❙Rulesforattachmentsinrequests-@3Requireanattachmentwiththe.zipextension., content_@3, Platform❙Rulesforattachmentsinrequests-@4Requireanattachmentwiththe.zipextensionANDanattachmentwiththe.pdfextension., content_@4, Platform❙Rulesforattachmentsinrequests-@5Requireanattachmentwiththeextension.zipOR.pdf., content_@5, Platform❙Rulesforattachmentsinrequests-@6Requireanattachmentwiththeextension.zipandallowothertypesofattachmentstobeaddedornot., content_@6, Platform❙Rulesforattachmentsinrequests-@7Prohibitattachmentwiththeextension.zipandallowothertypesofattachmentstobeaddedornot., content_@7, Platform❙Rulesforattachmentsinrequests-@8Requireanattachmentwiththeextension.zipandrequireatleastoneothertypeofattachment., content_@8, Platform❙Rulesforattachmentsinrequests-@9Requireoneormoreattachmentsofimagetype., content_@9, Platform❙Rulesforattachmentsinrequests-@10Allowonlyimagetypeattachments,butwithoutmakingitrequired., content_@10, Platform❙Rulesforattachmentsinrequests-@11Requireanattachmentwithspecificnameandextension., content_@11, Platform❙Rulesforattachmentsinrequests-@12Requireanattachmentwithaspecifictermatthebeginningofthenameandaspecificextension., content_@12, Platform❙Rulesforattachmentsinrequests-@13Requireanattachmentwithaspecifictermatthebeginningofthenameandextension., content_@13, Platform❙Rulesforattachmentsinrequests-@14Requireanattachmentcontainingaspecificterminthenameandatthebeginningoftheextension., content_@14, Platform❙Rulesforattachmentsinrequests-@15Prohibitattachmentwithaspecificterminthenameandallowothertypesofattachmentstobeaddedornot., content_@15, Platform❙Rulesforattachmentsinrequests-@16Prohibitattachmentwithspecificterminthenameandrequireanattachmentwithanothername., content_@16, Platform❙Rulesforattachmentsinrequests-@17Requireattachmentwithspecificextensiononlyifithasaspecificnameoranyattachmentofanotherextension., content_@17, Platform❙Rulesforattachmentsinrequests-@18Requireattachmentwithspecifictermatthebeginningofthenameandspecificextensionoranyattachmentofanotherextension., content_@18, Platform❙Rulesforattachmentsinrequests-@19Prohibitattachmentwithspecificterminthenameandallowanyattachmentwithspecificextension., content_@19, Platform❙Rulesforattachmentsinrequests-Frequentlyaskedquestions, toggleAll-2, Platform❙Rulesforattachmentsinrequests-@saiba-mais-1Whathappensiftheattachmentdoesnotmeettherule?, content_@saiba-mais-1, Platform❙Rulesforattachmentsinrequests-@saiba-mais-2Whattypesoffilesareallowedasattachments?, content_@saiba-mais-2, Platform❙Rulesforattachmentsinrequests-@saiba-mais-3Whatisthemaximumallowedsizeforanattachmentintherequest?, content_@saiba-mais-3, Platform❙Rulesforattachmentsinrequests-@saiba-mais-4Whatquantityofattachmentsdoesastepoftherequestrequire?, content_@saiba-mais-4, Platform❙Rulesforattachmentsinrequests-@saiba-mais-5Whatisthemaximumallowednumberofattachmentsinarequestorinastepoftherequest?, content_@saiba-mais-5 -->
