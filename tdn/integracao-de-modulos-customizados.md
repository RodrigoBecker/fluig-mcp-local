---
title: "Integração de Módulos Customizados"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=123602165"
scraped_at: "2026-03-09T04:57:38.466Z"
depth: 3
anchors: 4
child_links: 55
---

# Integração de Módulos Customizados

# Índice

# Objetivo

---

O objetivo deste guia é sanar dúvidas referentes a integração de módulos customizados com o TOTVS Fluig Plataforma.

# Pré-requisitos

---

Para desenvolver a integração em .NET, PHP ou outra linguagem, é necessário ter o ambiente de desenvolvimento da respectiva linguagem instalado.

# Integração de Módulos Customizados

---

Acompanhe a seguir, dois exemplos de integrações desenvolvimentos em .NET e um de integração PHP.

- Exemplo [CreateDocument.cs](/download/attachments/123602165/CreateDocument.cs?version=1&modificationDate=1392381888000&api=v2) Este exemplo envia um determinado documento via protocolo FTP para a área de *upload* do usuário, e após concluído o envio, realiza a publicação de documento através do método *createDocument* do WebService *DocumentService* enviado uma segurança customizada.

- Exemplo [WorkflowEngineService.cs](/download/attachments/123602165/WorkflowEngineService.cs?version=1&modificationDate=1392381902000&api=v2)Este exemplo realiza a movimentação de um processo workflow e incluindo anexos através do método *saveAndSendTask* do WebService *WorkflowEngineService*.

Importante

Notem que em alguns campos além de informar o valor da variável, é necessário definir a variável como *Specified*, caso contrário o valor não é enviado pela requisição WebService.

- Exemplo [getColleagueDataset.php](/download/attachments/123602165/getColleagueDataset.php?version=1&modificationDate=1392381911000&api=v2)Este é um exemplo de integração da linguagem PHP com os WebServices do Fluig Plataforma.


<!-- anchors: IntegraçãodeMódulosCustomizados-Índice, IntegraçãodeMódulosCustomizados-Objetivo, IntegraçãodeMódulosCustomizados-Pré-requisitos, IntegraçãodeMódulosCustomizados-IntegraçãodeMódulosCustomizados -->
