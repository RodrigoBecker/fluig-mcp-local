---
title: "Platform ❙ Development container"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=444609164"
scraped_at: "2026-03-09T05:07:25.382Z"
depth: 3
anchors: 0
child_links: 32
---

# Platform ❙ Development container

![](/download/attachments/444609164/%C3%ADcone-agrupador-desenvolvimento.png?version=1&modificationDate=1767115793927&api=v2)

---

This group contains resources for platform management. ![](/plugins/servlet/confluence/placeholder/unknown-macro?name=tooltip&locale=en_US&version=2)

It consists of the following resources:

- [Adapters](https://tdn.totvs.com/x/dKIXDg): are JAVA components responsible for platform communication with the application to be run. The applications can use standard adapters, which will be released in platform and will have the regular support process or they can be adapters developed under demand for varied applications.**CommandLine** – allows the use of any application through the command line. This adapter has the standard parameter "WORKDIR", which has the same function of "Start in" in Windows shortcuts.
- **Web** – allows the use of Web applications. This adapter has the standard parameter "TARGET", which allows you to define the window where the page will be opened.

[Datasets](https://tdn.totvs.com/x/mqIXDg): are components that allow standardizing access to information from locations external to the platform, such as applications and databases. High-performance datasets have a data storage cache obtained externally, which aims to reduce the number of accesses to external data services, that is, it creates a copy of the data structure within the platform for query, enhancing the performance of the datasets developed on the platform. Therefore, the data is queried on the platform itself, preventing access to data in the external provider system in every request.
- [Operations](https://tdn.totvs.com/x/MQJZGg): enables the registration of service operations, so that users can use the operations of services in integrations.

- [Services](https://tdn.totvs.com/x/oQTHDg): Services allow you to safely access features and services outside the platform, using the authentication protocols OAuth 1, OAuth 2, and *Basic authentication**. *This feature allows you to register and configure services. For more technical and detailed information, see [REST Services client authorization](https://tdn.totvs.com/x/0Xo-Dg).

- [Servers](https://tdn.totvs.com/x/gIfCF): This feature allows you to register servers and [export pages](https://tdn.totvs.com/x/zaIXDg) from one server to another without having to download and import files. To register servers, create a specific [OAuth Key](https://tdn.totvs.com/x/z6IXDg) for servers and an [Application User](https://tdn.totvs.com/x/zqIXDg) with platform administrator permissions, both for the target server.

- [Form themes](https://tdn.totvs.com/x/cKIXDg): Form Themes are styles that can be applied to forms created in processes to customize its appearance. By using this functionality you can add and manage the form themes of processes. It is possible to define which themes are active and available for use, as well as to define a default theme to be used for all new forms created.

Please note!

This documentation is valid from the **Voyager (2.0)** update onwards. If you are using a previous update, it may contain information different from what you see on your platform.
