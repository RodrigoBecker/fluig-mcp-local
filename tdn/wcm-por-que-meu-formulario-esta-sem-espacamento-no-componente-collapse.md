---
title: "WCM - Por que meu formulário está sem espaçamento no componente Collapse?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=551432752"
scraped_at: "2026-03-09T03:36:24.178Z"
depth: 2
anchors: 7
child_links: 46
---

# WCM - Por que meu formulário está sem espaçamento no componente Collapse?

# Índice

# Plataforma

**Produto:**TOTVS Fluig Plataforma

**Versão:** 1.6.5-200226 ou superior

# Ocorrência

Por que meu formulário está sem espaçamento no componente Collapse?

- [Formulário no TOTVS Fluig Plataforma 1.6.5-200218 ou inferior](#)
- [Formulário no TOTVS Fluig Plataforma 1.6.5-200226 ou superior](#)

![](/download/attachments/551432752/antes-v2.png?version=1&modificationDate=1591106324230&api=v2)

![](/download/attachments/551432752/depois-v2.png?version=1&modificationDate=1591106324397&api=v2)

# Causa

No Fluig Plataforma 1.6.5-200226, o Style Guide evoluiu a visualização de formulários no Mobile. Com isso, formulários criados com base no [exemplo disponível no projeto Samples](https://git.fluig.com/projects/SAMPLES/repos/style-guide/browse) precisam ser atualizados, pois uma classe ausente no exemplo deixou o formulário sem o espaçamento correto no componente Collapse.

# Solução

Adicionar a classe 'collapse-icon' no elemento <a>, localizado abaixo do componente com ID 'panel-title'. O projeto sample-component está corrigido. Compare o formulário de exemplo com o seu formulário e faça as alterações necessárias: [https://git.fluig.com/projects/SAMPLES/repos/style-guide/browse](https://git.fluig.com/projects/SAMPLES/repos/style-guide/browse)

# Observações

Essa situação ocorre apenas em formulários que foram criados com base no formulário do projeto Samples e que utilizam o componente Collapse.


<!-- anchors: WCMPorquemeuformulárioestásemespaçamentonocomponenteCollapse?-Índice, WCMPorquemeuformulárioestásemespaçamentonocomponenteCollapse?-Plataforma, WCMPorquemeuformulárioestásemespaçamentonocomponenteCollapse?-Ocorrência, sample, WCMPorquemeuformulárioestásemespaçamentonocomponenteCollapse?-Causa, WCMPorquemeuformulárioestásemespaçamentonocomponenteCollapse?-Solução, WCMPorquemeuformulárioestásemespaçamentonocomponenteCollapse?-Observações -->
