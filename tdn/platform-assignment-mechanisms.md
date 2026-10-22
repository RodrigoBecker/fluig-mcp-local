---
title: "Platform ❙ Assignment mechanisms"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=979796980"
scraped_at: "2026-03-09T05:16:48.207Z"
depth: 4
anchors: 40
child_links: 54
---

# Platform ❙ Assignment mechanisms

Consult the correct documentation:

This documentation refers to the new process editor of the platform. If you are using the current process editor, access [Configuring assignment mechanisms](/pages/viewpage.action?pageId=268807311). 

LANGUAGE

# Speaking of assignment mechanisms...

---

The assignment mechanisms are tools that allow defining the individuals who can possibly be in charge of a process, in accordance with the criteria that the chosen mechanism has set.

You can use the mechanisms to:

- **define the process managers**: configured within the [process](https://tdn.totvs.com/pages/viewpage.action?pageId=977200708#Platform%E2%9D%99Processeditor-Definemanagerfortheprocess) itself, it allows you to define who will have the power to represent any other person involved in the process, as well as receive follow-up notifications of requests;

- **define who can open requests for the process**: configured in the initial step of the process – [Start](/pages/viewpage.action?pageId=979501869) component, it allows you to define who can open requests for the process;

- **define the individuals responsible for each step of the process**: configured in each step of the process – [Activity](/pages/viewpage.action?pageId=979031748) component, it allows you to define who can be responsible for receiving the request when it arrives at each step of the the process.

Important!

When a step of the process has no assignment mechanism:

- **if it is the initial step**: any person with an active registration on the platform can open requests for this process;

- **if it is a common step**: when you move the request to this step, you need to select a person to receive it, and you can select any person with an active registration on the platform.

![](/download/attachments/979796980/mecanismos-de-atribui%C3%A7%C3%A3o.png?version=2&modificationDate=1756122659437&api=v2)

## Objective of the mechanisms

---

The assignment mechanisms aim to automatically direct process requests, facilitating the attribution of responsibilities.

They seek to expedite the progress of requests by assigning each step to the respective responsible parties, avoiding bottlenecks, distributing steps among groups of people, and defining clear responsibilities.

## Types of mechanisms

---

By default, there are five types of assignment mechanisms currently available for use: Any person, Specific group, Specific role, By form field, and Specific person.

The functioning of each of the mechanisms is detailed below.

### Any Person

---

This mechanism allows defining that any person with an active registration on the platform can be responsible for the steps in which it was configured; that is, any person can receive the request when it is sent to this steps, or any person can open requests for the process if it is the initial step.

When you move the request from the previous step to the step that has this mechanism configured, you need to select a person to receive it.

Note:

You cannot use this mechanism to define the process manager.

BENEFITS OF USE
It offers flexibility for simple or low-impact processes, where the requester knows to whom they should send the request.

CAUTIONS FOR USE
We do not recommend it for critical or high priority steps, due to the lack of clear responsibility, or for steps that involve confidential data.

EXAMPLE OF USE

In a **Technical Support** process for the IT area, anyone who encounters difficulties or has any issues with any tool used in the company can open a ticket, which can be for errors, permissions, questions, requesting help, etc.

In this case, we can define the assignment mechanism for this step – process [Start](/pages/viewpage.action?pageId=979501869) component – as:

| Step | Type of mechanism |
| --- | --- |
| Step | Type of mechanism |
| Open ticket | Anyone |

→ This means that anyone in the company can open a ticket to request support.

****

        Your browser does not support the HTML5 video element

### Specific Group

---

This mechanism allows defining:

- **in process management**: that only a specific group of people are the managers of the process, meaning they can represent any other person involved in the process, as well as receive follow-up notifications of requests;

- **in the process steps**: that only a specific group of people are responsible for the step in which it was configured, meaning only these people can receive the request when it is sent to this step or only these people can open requests for the process, if it is the initial step.

When you select this mechanism in process management, or in the configurations of a step, you need to specify the specific group of people.

Next, for the step, you also need to define how to execute it – whether individually or jointly.

Note:

The execution method – individual or joint – is not available for definition at the initial step of the process, not even to define the process manager, as only a single person can open the request.

#### Individual

---

A single person must execute this step; that is, only one individual from the specific group should perform this step. In this case, you also need to define whether only one person from the group should receive the request when it is moved, or whether you should send the request to everyone in the group, the first one to take it becoming responsible for executing the step:

- **Selection of one person from the group**: when you move the request from the previous step to the step that has this mechanism, and this execution method is configured, you must select one person from the group to receive it;

- **Sending to all in the group (pool)**: when you move the request from the previous step to the step that has this mechanism and this execution method is configured, it is automatically sent to everyone in the group, and the first one to take it becomes responsible for executing this step.

#### Joint

---

Several people must execute the step; that is, more than one person from the specific group should perform the step. In this case, you also need to define whether multiple people from the group should receive the request when moves, or whether to send the request to everyone in the group, so that any individuals can execute it until they reach the consensus percentage:

- **Selection of multiple people**: when you move the request from the previous step to the step that has this mechanism and this execution method is configured, you need to select more than one person from the group to receive it;

- **Assignment to all in the group**: when you move the request from the previous step to the step that has this mechanism and this execution method is configured, it is automatically sent to everyone in the group, so that any individuals can execute the step until they reach the consensus percentage.

When defining this execution method for the step, you also need to define the consensus percentage for completion:

- **Consensus for completion**: the consensus percentage that they must reach to consider the step completed; that is, the percentage of people who must take on the step and make the same decision in order to move the request to the next one. By default, the consensus is set at 100%.

BENEFITS OF USE
Recommended for processes that involve multiple departments, ensuring that any team member can take on requests and avoid bottlenecks.

CAUTIONS FOR USE
When consensus is required, it may slow down the progress of the process slightly.

EXAMPLE

In a **Supplier Payment** process, the Accounts Payable department of the company, which consists of 5 employees, executes the last step. All of the employees are capable of taking on this step and making the actual payment, but only one person must take on the request.

Thus, we can define the assignment mechanism for this step – [Activity](/pages/viewpage.action?pageId=979031748) component – as follows:

| Step | Type of mechanism | Possible responsible parties for the step | Execution method of the step | Request submission method |
| --- | --- | --- | --- | --- |
| Make Payment | Specific group | Members of the Accounts Payable group | Individual activity | Submission to all in the group (pool) |

→ This means that when you send the request to the Make Payment step, all members of the Accounts Payable group see the request as pending, and any of the individuals can take it on. As soon as one person takes on the request, they become responsible for making the payment, and the interface no longer displays the request as a pending item for the rest of the group. Therefore, the assignment mechanism facilitates the distribution of activities among the group, so when one person finishes their current activity, they can take on the next pending one, ensuring a constant flow of requests.

****

        Your browser does not support the HTML5 video element

### Specific Role

---

This mechanism allows defining:

- **in process management**: that only individuals who hold a specific role are the managers of the process, meaning they can represent any other person involved in the process, as well as receive follow-up notifications for the requests;

- **in the steps of the process**: that only individuals who hold a specific role are responsible for the step in which it was configured, meaning only these individuals can receive the request when it is sent to this step, or only these individuals can open requests for the process, if it is the initial step.

When selecting this mechanism in process management, or in the configurations of a step, you need to specify what the specific role is.

Next, for the step, you also need to define how to execute it – whether individually or jointly.

Note:

The execution method – individual or joint – is not available for definition at the initial step of the process, not even to define the process manager, as only a single person can open the request.

#### Individual

---

A single person must execute this step; that is, only one individual who holds the specific role should perform this step. In this case, you also need to define whether only one person who holds the role should receive the request when it is moved, or whether you should send the request to everyone in the group, the first one to take it becoming responsible for executing the step:

- **Selection of one person from the role**: when you move the request from the previous step to the step that has this mechanism, and this execution method is configured, you must select one person who holds the role to receive it;
- **Sending to all in the role (pool)**: when you move the request from the previous step to the step that has this mechanism and this execution method is configured, it is automatically sent to everyone who hold the role, and the first one to take it becomes responsible for executing this step.

#### Joint

---

Multiple people, meaning more than one person who holds the specific role, must execute the step. In this case, you also need to define whether multiple people who hold the role should receive the request when you move it, or whether to send the request to all everyone who hold the role so that any of them can execute it until they reach the consensus percentage:

- **Selection of multiple people**: when the request is moved from the previous step to the step that has this mechanism and this execution method configured, you need to select more than one person who holds the role to receive it;

- **Assignment to all in the role**: when you move the request from the previous step to the step that has this mechanism and this execution method configured, it is automatically sent to everyone who hold the role so that any of them can execute the step until they reach the consensus percentage.

When defining this execution method for the step, you also need to define the consensus percentage for completion:

- **Consensus for completion**: the consensus percentage that they must reach to consider the step completed, meaning the percentage of people who must take on the step and make the same decision to move the request to the next one. By default, the consensus is set at 100%.

BENEFITS OF USE
Indicated for steps that require certain skills or experience to perform the necessary action, making responsibilities clear and leveraging the expertise and skills of each function within the company.

CAUTIONS FOR USE
We recommend regularly reviewing and updating the roles so that they do not become obsolete, causing requests to be lost or directed to people who no longer hold the defined role.

EXAMPLE OF USE
In a marketing campaign launch process, the company's vice presidents need to agree with the content and approach of the campaign in order to launch it to the market. Therefore, one of the steps in the process is the Approval of the vice presidents.

Thus, we can define the assignment mechanism for this step – [Activity](/pages/viewpage.action?pageId=979031748) component – as follows:

| Step | Type of mechanism | Possible responsible parties for the step | Execution method of the step | Request submission method | Consensus |
| --- | --- | --- | --- | --- | --- |
| VPs Approval | Specific group | Members of the Vice-presidents group | Joint activity | Submission to all in the group (pool) | 80% |

→ This means that when the request goes to the VPs Approval step, all members of the Vice-presidents group see the request as pending, and any of the individuals can take it on. 80% of the group members must to take on the step and take the same action (approve it) to reach the consensus for the request to proceed. Thus, the assignment mechanism ensures that the majority of vice presidents are aware of and agree with the campaign to launch it to the market, avoiding any type of information mismatch or misunderstandings.

****

        Your browser does not support the HTML5 video element

### By Form Field

---

This mechanism allows defining that only the person indicated in a field of the request form in a previous step is responsible for the step in which it was configured, meaning that only this person receives the request when it is sent to this step.

When selecting this mechanism in the configurations of a step, you need to specify the form field from which you obtain this person.

Important!

You can use some types of fields – open for typing, combo, search – in the configuration of the mechanism. However, some may not make sense for those who will respond to the form, as the mechanism interprets only codes or IDs (user code, role code, group code, etc.), meaning the mechanism needs to receive a code as a response from the form.

EXAMPLE
The **Manager** field is of the type **Simple Text** (open for typing) and is used in the assignment mechanism. For the mechanism to interpret the person that is entered in the field to direct the request, the response in the field has to be the manager's registration code, instead of their name, which makes filling it out quite difficult.

Therefore, the simplest way to configure this mechanism is by using a selection field – combo or search – configuring a [dataset](/pages/viewpage.action?pageId=236429978) for it – standard or developed on the platform – and always selecting a **code** (ID) as **Value**. This way, the person responding to the form selects a name, but the mechanism automatically considers the registration code of that selected name to direct the request.

If the form linked to the process was not created in the new form editor and the field is of the type Search, when configuring a dataset for it, a hidden copy of the field is automatically created with the prefix **hidden_** in the **name** and **code**. Therefore, this **copy field** should be selected in the assignment mechanism.

EXAMPLE
The search field used in the assignment mechanism is the **Direct Manager**, with the **manager** code. When you configure the dataset for the field, the system automatically creates a hidden field with the name and code **hidden_manager**, and this is the field that you should select when configuring the assignment mechanism.

This does not occur when you create the form linked to the process in the new form editor.

When you move the request from the previous step to the step that has this mechanism configured, the system automatically sends it to the person listed in the form field defined in the mechanism.

Note:

You cannot use this mechanism in the initial step of the process, as it depends on a definition coming from a step prior to the step in which it is configured, not even to define the process manager.

BENEFITS OF USE
By allowing dynamic assignment of responsibility, we recommend it for steps in which responsibility varies according to the information provided throughout the process.

CAUTIONS FOR USE
Since it depends on the information contained in a field, you must construct the form well, request the information objectively, and instruct the requester to fill in the correct information so that it is useful in directing the steps.

EXAMPLE OF USE

In an **Request to access the system** process, the requester needs to enter who their manager is and why they need access to the tool they are requesting. Before being forwarded to the IT department, responsible for granting access, the request is sent to the requester's manager for approval or denial of access. The manager responsible for approval varies depending on the requester.

Thus, we can define the access approval assignment mechanism – [Activity](/pages/viewpage.action?pageId=979031748) component – as:

| Step | Type of mechanism | Person Responsible for the step |
| --- | --- | --- |
| Manager approval | By form field | Person entered in the Manager field |

→ This means that, when the request goes to the Manager approval step, the person responsible for it and who will receive the request is the one entered in the Manager field of the process form. Therefore, the assignment mechanism ensures that each request is directed directly to the responsible person, facilitating the management and approval of access requests.

****

        Your browser does not support the HTML5 video element

### Specific Person

---

This mechanism allows you to define that only a specific person be responsible for the step in which you have configured them; that is, only this person receives the request when you send it to this step, or only this person can open requests for the process, if it is the initial step.

When selecting this mechanism in step configurations, you need to specify who the specific person is.

When you move the request from the previous step to the step that has this mechanism configured, it automatically goes to the specific person defined in the mechanism.

Note:

If the specific person defined in this mechanism is inactive when the request moves to the step, the request goes to the process manager.

BENEFITS OF USE
As it targets a specific person, we recommend it for steps that deal with confidential information, critical or sensitive data, or for approvals that only one person is authorized to make.

CAUTIONS FOR USE
If the step is not critical or sensitive, defining only one responsible person can create bottlenecks and stall the request for a long time. It can overload the responsible person with tasks that you could distribute among several people, in addition to the risk of delays in the process if the person is unavailable at any period or day.

EXAMPLE

In a **Contract Approval** process, the person responsible for approving and releasing the contract signature is the director of the Contracts area of the company. Only this director can access the necessary information to approve or not approve the signing of contracts.

Thus, we can define the assignment mechanism for contract approval – [Activity](/pages/viewpage.action?pageId=979031748) component – as:

| Step | Type of mechanism | Person Responsible for the Step |
| --- | --- | --- |
| Director Approval | Director Approval | Maria da Cunha |

→ This means that when you send the request to the Director Approval step, the person responsible for it, who will receive the request, is Maria da Cunha; only she can decide on this approval. Thus, the assignment mechanism ensures that the responsibility for approving the contract is clearly defined and that only the configured person can execute this stage, ensuring the efficiency, accountability, and confidentiality of the information in the process.

****

        Your browser does not support the HTML5 video element

## Examples

---

We have gathered several scenarios here in which different assignment mechanisms can be applied. The examples include the mechanism, the scenario where it is applied, and what happens when the request moves to the step in which it was configured.

We demonstrate examples with some types of assignment mechanisms. Click each scenario to see its details.

[Open/close all examples](#)

#### Only people who are part of a group can request the purchase of equipment.

---

MECHANISM

→ **Specific group**

SCENARIO

In an **electronic equipment purchase** process, such as laptops, monitors, mice, keyboards, headphones, among others, only a few people from the Infrastructure area are cleared to request purchases for the company's Purchasing area. That is, the employee who has a need for equipment must first contact the Infrastructure area to notify them of their need. They will analyze whether they already have the requested equipment or whether they will need to purchase it. If they need to purchase it, the people who manage the equipment – purchase, exchange, inventory control, disposal, etc. – in the Infrastructure area can open a purchase request for the equipment needed.

Thus, we can define the assignment mechanism for this step – process [Start](/pages/viewpage.action?pageId=979501869) component – as:

| Step | Type of mechanism | Possible responsible parties for the step |
| --- | --- | --- |
| Request purchase of equipment | Specific role | Members of the Equipment Management group |

→ This means that only people who manage the company's electronic equipment can open requests to the Purchasing area. Therefore, the assignment mechanism ensures that only authorized individuals with the needed information to decide whether to request a purchase can open requests, thus avoiding unnecessary purchases, conflicting information, outdated inventory, among other issues.

#### The responsible party must approve the expense in accordance with its category.

---

MECHANISM

→ **By form field**

SCENARIO

In an **expense approval** process, the requester fills in some information, such as the amount, justification, and category of the expense. The approval of this expense varies according to its category (travel, equipment, marketing, hiring, etc.), meaning that depending on the category, you need to send the approval to the manager responsible for it. When the requester selects the category, the system automatically fills in the Responsible Manager field.

Thus, we can define the assignment mechanism for this step – process [Activity](/pages/viewpage.action?pageId=979031748) component – as:

| Step | Type of mechanism | Possible responsible parties for the step |
| --- | --- | --- |
| Manager approval | By form field | Person informed in the Responsible Manager field |

→ This means that when the request goes to the Manager Approval step, the person responsible for it, who will receive the request, is the one entered in the Responsible Manager field of the form, which the system automatically fills in when you select the expense category. Thus, the assignment mechanism ensures that each request is directed straight to the responsible person, facilitating the management and approval of expenses and also avoiding the hassle of having to transfer the request to another person, for example.

#### Only people who are part of management can request the opening of positions for HR

---

MECHANISM

→ **Specific role**

SCENARIO

In a **Job-Opening Request** process, only area managers can open requests when they identify the need due to increased demand, the departure of an employee, or a new strategic position in the team. This request needs to go through some approvals, such as HR, directors, and executive managers.

Thus, we can define the assignment mechanism for this step – Process [Start](/pages/viewpage.action?pageId=979501869) component – as:

| Step | Type of mechanism | Possible responsible parties for the step |
| --- | --- | --- |
| Request job opening | Specific role | People who hold the Manager role |

→ This means that only those who hold the role of people management within the company's areas can open a job-opening request. Thus, the assignment mechanism ensures that only authorized individuals who have the necessary information to open a position can submit requests.

#### The share buyback needs to be approved by 90% of the company's board members.

---

MECHANISM

→ **Specific group**

SCENARIO
In a **Share Buyback** process, the members of the company's board need to agree with the strategy that the executive team presents, as well as with the price to be paid for each share and with the value proposition that this decision brings to the company. Therefore, one of the steps of the process is the Board Approval.

Thus, we can define the assignment mechanism for this step – Process [Activity](/pages/viewpage.action?pageId=979031748) component – as:

| Step | Type of mechanism | Possible responsible parties for the step | Execution method of the step | Request submission method | Consensus |
| --- | --- | --- | --- | --- | --- |
| Council Approval | Specific group | Members of the group Advisors | Joint activity | Submission to all group members (pool) | 90% |

→ This means that when the request goes to the Council Approval step, all members of the Advisors group see the request as pending, and any of the individuals can take it on. 90% of the group members need to take on the step and take the same action (approve) to reach the consensus and move the request forward. Thus, the assignment mechanism ensures that the majority of advisors are aware of and agree with the buyback proposal in order to apply it in the market, avoiding any type of information mismatch or misunderstandings.

#### The person responsible for approving a budget varies depending on the amount.

---

MECHANISM

→ **By form field**

SCENARIO
In a **Budget Approval** process, you need to provide some data, including the total amount of the budget to be approved. The person responsible for approving this budget varies in accordance with the amount, as there are approval limits for the manager, for the executive manager, and for the director. When you enter the amount in the form, the system automatically fills in the Person Responsible for Approval field, and you must send the Approval step to this person.

Thus, we can define the assignment mechanism for this step – process [Activity](/pages/viewpage.action?pageId=979031748) component – as:

| Step | Type of mechanism | Possible responsible parties for the step |
| --- | --- | --- |
| Approval | By form field | Person indicated in the Person Responsible for Approval field |

→ This means that when the request goes to the Approval step, the person responsible for it and who receives the request is the one indicated in the Person Responsible for Approval field of the form, which the system automatically filled in when you entered the amount of the budget to be approved. Thus, the assignment mechanism ensures that each request goes directly to the responsible person, facilitating the management and approval of budgets, and also preventing managers from receiving requests outside their approval limits and having to transfer them to another responsible party.

## Frequently Asked Questions

---

Check here some frequently asked questions about the assignment mechanisms.

[Open/close all questions](#)

#### What happens if the specific person configured in the mechanism is not available?

---

The request gets stuck at that step. If the process has managers, only they are able to take action in place of the specific person.

#### Can I assign a step of the process to more than one group simultaneously?

---

No. At the moment, you cannot define more than one group as responsible for a step or for the management of a process.

#### What happens if the step is assigned to a role and no one is currently fulfilling that role?

---

The request gets stuck at that step, and no one is able to take it over unless the process has managers, as they can take over the request. For this reason, it is very important to always review and update the roles to ensure they represent the current organization of functions within the company.

#### Can I change the assignment mechanism after creating and configuring the activity/step?

---

Yes, you can. However, if the process already has a published version, this change results in a new version of the process. And, to apply for the change to the next open requests, you need to publish the process again.

Important!

Requests that were already open and in progress before the change keep the settings of the old version. Only new requests opened after the publication of the new version of the process get the changes.

#### How can I ensure that the request does not get stuck for too long at a step without being taken over?

---

There is no way to guarantee this. However, there are resources and best practices that can help prevent this from happening, such as:

- **configuring the step to notify the responsible person**: this way, when the request reaches the step, the system notifies the responsible person, who becomes aware that a task is pending under their responsibility;

- **defining at least one manager for the process**: this way, if the requester is not available at the moment the request reaches the step (for example, they are absent), the manager can take over or transfer the request to another person;

- **always reviewing groups and roles**: this ensures that they are always reflecting the current organization of the company, preventing requests from getting lost throughout the process.

#### Can I use the Any Person mechanism in steps that involve confidential data?

---

Yes, you can use it, **but we do not recommend it**. Steps that deal with confidential or critical data should be directed to authorized individuals who have access and can make decisions based on them.

#### What happens if the field used for assignment is removed from the form?

---

There are two situations that may occur in this scenario:

- **When the form belongs to the process at issue; that is, it was created for that process**: a message notifies that the assignment mechanism for a certain step does not have the specified form field and that you cannot publish the process containing this change in the form unless you change the mechanism. This happens because, when editing the process form, the system automatically generates a new version for both the form and the process, and you need to publish them in order to apply the changes to the next requests to be opened.

- **When the form already existed and was only related to the process at issue**: an inconsistency occurs when the responsible person tries to move the request from the previous step to the step that has the mechanism configured by form field, indicating that the person responsible for the next step could not be found, and that the request will not move.

Attention!

This documentation is valid from the **Voyager (2.0)** update onwards. If you are using a previous update, it may contain information different from what you see on your platform.


<!-- anchors: Platform❙Assignmentmechanisms-Speakingofassignmentmechanisms..., Platform❙Assignmentmechanisms-Objectiveofthemechanisms, Platform❙Assignmentmechanisms-Typesofmechanisms, Platform❙Assignmentmechanisms-AnyPerson, Platform❙Assignmentmechanisms-SpecificGroup, Platform❙Assignmentmechanisms-Individual, Platform❙Assignmentmechanisms-Joint, Platform❙Assignmentmechanisms-SpecificRole, Platform❙Assignmentmechanisms-Individual.1, Platform❙Assignmentmechanisms-Joint.1, Platform❙Assignmentmechanisms-ByFormField, Platform❙Assignmentmechanisms-SpecificPerson, Platform❙Assignmentmechanisms-Examples, toggleAll-1, Platform❙Assignmentmechanisms-@1Onlypeoplewhoarepartofagroupcanrequestthepurchaseofequipment., content_@1, Platform❙Assignmentmechanisms-@2Theresponsiblepartymustapprovetheexpenseinaccordancewithitscategory., content_@2, Platform❙Assignmentmechanisms-@3OnlypeoplewhoarepartofmanagementcanrequesttheopeningofpositionsforHR, content_@3, Platform❙Assignmentmechanisms-@4Thesharebuybackneedstobeapprovedby90%ofthecompany'sboardmembers., content_@4, Platform❙Assignmentmechanisms-@5Thepersonresponsibleforapprovingabudgetvariesdependingontheamount., content_@5, Platform❙Assignmentmechanisms-FrequentlyAskedQuestions, toggleAll-2, Platform❙Assignmentmechanisms-@saiba-mais-1Whathappensifthespecificpersonconfiguredinthemechanismisnotavailable?, content_@saiba-mais-1, Platform❙Assignmentmechanisms-@saiba-mais-2CanIassignastepoftheprocesstomorethanonegroupsimultaneously?, content_@saiba-mais-2, Platform❙Assignmentmechanisms-@saiba-mais-3Whathappensifthestepisassignedtoaroleandnooneiscurrentlyfulfillingthatrole?, content_@saiba-mais-3, Platform❙Assignmentmechanisms-@saiba-mais-4CanIchangetheassignmentmechanismaftercreatingandconfiguringtheactivity/step?, content_@saiba-mais-4, Platform❙Assignmentmechanisms-@saiba-mais-5HowcanIensurethattherequestdoesnotgetstuckfortoolongatastepwithoutbeingtakenover?, content_@saiba-mais-5, Platform❙Assignmentmechanisms-@saiba-mais-6CanIusetheAnyPersonmechanisminstepsthatinvolveconfidentialdata?, content_@saiba-mais-6, Platform❙Assignmentmechanisms-@saiba-mais-7Whathappensifthefieldusedforassignmentisremovedfromtheform?, content_@saiba-mais-7 -->
