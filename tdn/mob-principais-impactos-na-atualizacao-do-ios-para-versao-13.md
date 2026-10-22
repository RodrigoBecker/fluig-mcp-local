---
title: "MOB - Principais impactos na atualização do iOS para versão 13"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=521137669"
scraped_at: "2026-03-09T04:47:35.645Z"
depth: 3
anchors: 3
child_links: 37
---

# MOB - Principais impactos na atualização do iOS para versão 13

# Índice

Com a atualização do iOS para a versão 13 que foi liberada em Setembro, além de novos recursos foram realizadas grandes alterações internas no sistema operacional que podem afetar a forma como o aplicativo fluig trabalha.

Portanto, alguns recursos foram diretamente impactados e podem causar comportamentos inesperados, como os listados abaixo:

### Renderização de formulário e widget

---

O motor de renderização do componente de navegador usado pelo Fluig mobile foi alterado, causando algumas inconsistências na apresentação de formulários e páginas. Atente-se na hora do seu desenvolvimento para que sua personalização fique compatível com o browser disponível no iOS (Safari).

### Formulários de processos

---

O motor do componente do navegador usado pelo Fluig mobile para executar os códigos escritos em JavaScript nos formulários personalizados também sofreu alteração e pode apresentar as inconsistências listadas abaixo:

- Alertas, caixas de diálogo assim como outros *popups* que são chamados pelo JavaScript e que usam as funções: *alert*, *confirm* e *prompt*, precisam ser renderizadas nativamente.Essa alteração já foi feita pelo time Fluig e não afetará o código customizado.
- Os formulários personalizados que utilizam dataset, agora precisarão ter seu código escrito de forma assíncrona (com *callback*). Essa alteração é necessária e pode ser feita no código customizado do formulário através da documentação, [**Desenvolvimento de formulário mobile**](https://tdn.totvs.com/x/xY22C). 

Se você utiliza formulários contendo dataset síncrono, a alteração acima mencionada terá de ser implementada pois as chamadas síncronas não serão mais suportadas pelo iOS 13.

Caso você estiver enfrentando as situações acima reportadas, sugerimos que você faça as medidas de contorno no momento. Também estamos trabalhando para liberar a nova versão do Fluig mobile o mais rápido possível para você!

 Estamos constantemente evoluindo o aplicativo, para conferir detalhes das atualizações acesse o [My Fluig | O que há de novo?](/pages/viewpage.action?pageId=381049863).


<!-- anchors: MOBPrincipaisimpactosnaatualizaçãodoiOSparaversão13-Índice, MOBPrincipaisimpactosnaatualizaçãodoiOSparaversão13-Renderizaçãodeformulárioewidget, MOBPrincipaisimpactosnaatualizaçãodoiOSparaversão13-Formuláriosdeprocessos -->
