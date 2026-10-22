---
title: "Identity | Auditoria"
url: "https://tdn.totvs.com/display/public/fluig/Identity+%7C+Auditoria"
scraped_at: "2026-03-09T05:23:32.481Z"
depth: 4
anchors: 7
child_links: 33
---

# Identity | Auditoria

# Falando de auditoria...

---

Este relatório apresenta os dados de auditoria dos eventos de criação, edição, exclusão e visualização para os recursos Aplicativos, Grupos, Papéis e Perfis de usuários.

- [Relatório de auditoria sem registros](#)
- [Registros de auditoria encontrados](#)
- [Mais detalhes do evento](#)

![](/download/attachments/550318621/Auditoria%20sem%20registros.png?version=2&modificationDate=1667221954187&api=v2)

![](/download/attachments/550318621/Auditoria%20com%20registros.png?version=2&modificationDate=1667222285700&api=v2)

![](/download/attachments/550318621/Mais%20detalhes.png?version=1&modificationDate=1599747352337&api=v2)

## Acessar relatório

---

**01.** Acionar o menu **Relatórios**.

**02.** No quadro **Auditoria**, acionar o botão **Visualizar**.

O relatório de auditoria será apresentado, trazendo por padrão os dados registrados nos últimos 30 dias. É necessário modificar o tipo de relatório e os filtros para trazer os registros desejados.

## Alterar tipo de relatório

---

**01.** Abrir o relatório conforme os passos do item [Acessar relatório](#Identity|Auditoria-Acessarrelatório).

**02**. Modificar o campo **Tipo de relatório** conforme desejado.

O relatório de auditoria pode trazer as seguintes opções de dados:

- **Aplicativos**: mostra os eventos de criação/edição/exclusão/visualização de aplicativo.
- **Grupos**: mostra os eventos de criação/edição/exclusão/visualização de grupo.
- **Perfis** **do usuário**: mostra os eventos de criação/edição/exclusão/visualização de usuário. 
- **Papéis**: apresenta os eventos de criação/exclusão/edição de papel, usuário adicionado/removido de papel, grupo adicionado/removido de papel.

## Filtrar registros

---

**01.** Abrir o relatório conforme os passos do item [Acessar relatório](#Identity|Auditoria-Acessarrelatório).

**02**. Acionar a opção **Filtrar**.

**03**. Em **Filtrar registros**, preencher os campos de filtro conforme desejado.

Os filtros disponíveis são:

**Data**A data e a hora de início e de fim que devem ser consideradas na consulta (horário de Brasília).

**Evento**
Selecionar os eventos que devem ser apresentados no relatório: criação, edição, exclusão e/ou visualização.

**Usuário**Filtrar os registros relacionados a um usuário informando o endereço de e-mail.

**04.** Acionar **Filtrar**.

## Exportar relatório

---

**01.** Abrir o relatório conforme os passos do item [Acessar relatório](#Identity|Auditoria-Acessarrelatório).

**02**. Acionar a opção **Exportar**.

**03**. Na mensagem de confirmação, acionar a opção **Enviar**.

Serão exportados em um arquivo CSV os registros exibidos na página no momento em que o botão Exportar é acionado. Um *link* com validade de 48 horas será enviado ao endereço de e-mail do administrador que solicitou o relatório para que seja feito o *download* do arquivo exportado.

Para importar os dados do relatório para o Microsoft Excel, consulte [essa documentação](https://tdn.totvs.com/x/gRKmGg).

## Consultar detalhes do evento

---

**01.** Abrir o relatório conforme os passos do item [Acessar relatório](#Identity|Auditoria-Acessarrelatório).

**02**. Localizar o evento sobre o qual deseja consultar mais detalhes.

**03**. Acionar ![](https://teste.fluigidentity.net/ui/assets/icons/view.svg)**Ver detalhes** na coluna **Ações**.

Será apresentado o detalhamento do evento, em formato JSON. É possível acionar a opção ![](https://teste.fluigidentity.net/ui/assets/icons/copy.svg)**Copiar Json** ou ![](https://teste.fluigidentity.net/ui/assets/icons/download.svg)**Baixar arquivo**, conforme necessidade.


<!-- anchors: Identity|Auditoria-Falandodeauditoria..., Auditoria, Identity|Auditoria-Acessarrelatório, Identity|Auditoria-Alterartipoderelatório, Identity|Auditoria-Filtrarregistros, Identity|Auditoria-Exportarrelatório, Identity|Auditoria-Consultardetalhesdoevento -->
