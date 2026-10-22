---
title: "Guia de capacitação e configuração técnica para Parceiros TOTVS Fluig"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=1040995981"
scraped_at: "2026-03-09T03:22:59.921Z"
depth: 2
anchors: 14
child_links: 46
---

# Guia de capacitação e configuração técnica para Parceiros TOTVS Fluig

# Introdução e objetivo

---

Este guia reúne os pré-requisitos, conteúdos de capacitação e padrões técnicos para parceiros. O objetivo é garantir que toda solução desenvolvida seja escalável, segura e compatível com as atualizações da plataforma.

Nota:

O domínio destes conceitos fundamentais evita o retrabalho, reduz o débito técnico e assegura que o desenvolvimento sob a plataforma sejam compatíveis com as futuras atualizações do TOTVS Fluig.

## Configuração do ambiente de desenvolvimento

---

Antes de iniciar os cursos, configure sua estação de trabalho seguindo os padrões oficiais:

- **Infraestrutura e instalação:** consulte as [Especificações técnicas](/pages/viewpage.action?pageId=144409649) e o guia de [Instalação e atualização](/pages/viewpage.action?pageId=144409653) para garantir a compatibilidade de atualizações.

- **IDE recomendada:** utilize o **Eclipse** com o *plugin* **Fluig Studio** para exportação nativa de projetos. Caso prefira o **VS Code**, utilize extensões de suporte para JavaScript e JSON.

- **Banco de dados:** certifique-se de realizar a [Configuração de banco de dados](/pages/viewpage.action?pageId=145359800) seguindo as permissões de *Schema* necessárias para evitar erros de persistência.

## Acesso ao portal Fluig Academy

---

Antes de iniciar, os membros da equipe técnica devem possuir uma conta ativa no portal TOTVS Fluig Academy:

- **Portal** [TOTVS Fluig Academy](https://academy.fluig.com/).

- **Primeiros passos:** realize o cadastro com seu *e-mail* e matricule-se nos cursos listados nas trilhas abaixo.

![](/download/attachments/1040995981/Projeto%20sem%20t%C3%ADtulo.gif?version=1&modificationDate=1770387215727&api=v2)

## Conteúdos de capacitação recomendados

---

A seguir, veja os conteúdos recomendados.

### Desenvolvimento de portais e widgets

---

Esta trilha foca na camada de apresentação e componentes dinâmicos. O objetivo é capacitar o desenvolvedor na criação de interfaces dinâmicas e componentes para o ambiente de portais do TOTVS Fluig.

| Curso | Descrição detalhada para o Desenvolvedor |
| --- | --- |
| Como fazer - Instalar Eclipse 2019-R9 + Fluig Studio | Guia passo a passo para configurar o ambiente de desenvolvimento oficial (IDE) e o plugin Fluig Studio. |
| Iniciando o desenvolvimento de widgets | Conceitos fundamentais sobre a estrutura de uma widget, ciclo de vida e publicação no portal. |
| Client-side: desenvolvimento com ES6+ no TOTVS Fluig | Modernização do código Client-side utilizando as novas especificações do JavaScript para maior desempenho. |
| Preferências da widget, como salvar e recuperar os dados | Aprenda a utilizar o mecanismo de persistência de dados para salvar e recuperar configurações personalizadas da widget. |
| Templates Mustache em widgets, aprenda a desenvolver | Implementação de renderização dinâmica. Aprenda a separar a estrutura HTML da lógica de dados, facilitando a manutenção. |
| Client-side: integrações eficientes com promises e async/await, incluindo datasets | Como realizar chamadas assíncronas eficientes para buscar dados internos (datasets) sem travar a interface do usuário. |

### Consumo de APIs REST

---

Capacitação voltada para a camada de integração, permitindo que o TOTVS Fluig se comunique de forma segura com ERPs, sistemas legados, etc.

| Curso | Descrição detalhada para o Desenvolvedor |
| --- | --- |
| Introdução ao swagger do TOTVS Fluig - Básico I | Como utilizar o portal interativo de APIs para explorar, testar e entender os endpoints nativos disponíveis na plataforma. |
| Consumindo a API REST do TOTVS Fluig com Postman | Guia prático de como configurar autenticação (OAuth 1.0) e realizar requisições externas para a plataforma. |

### Interface e experiência (Style guide)

---

O uso do **Style guide** não é apenas visual. É uma questão de conformidade técnica. Seguir estes padrões garante que sua interface não "quebre" em novas atualizações do TOTVS Fluig.

| Curso | Descrição detalhada para o Desenvolvedor |
| --- | --- |
| Fluig Style guide | Documentação oficial contendo a biblioteca de componentes, padrões de cores, tipografia e ícones. Item de consulta essencial antes de qualquer CSS customizado. |
| Style guide - Datatable | Criação de grades de dados com recursos de busca, paginação e seleção, mantendo o padrão visual das rotinas nativas. |
| Style guide - Filter |  Implementação de campos de busca inteligente com auto completar e filtros dinâmicos integrados a datasets. |
| Style guide - Modal |  Padronização de janelas de alerta, confirmação e formulários pop-up para melhorar a experiência do usuário. |
| Como fazer - TOTVS Fluig - Modal de seleção de documentos | Implementação técnica para abrir a estrutura de pastas de documentos e permitir que o usuário selecione arquivos de forma nativa. |
| Desenvolvendo widgets compatíveis com modo escuro | Modo escuro: certifique-se de estar desenvolvendo widgets compatíveis com modo escuro. |

### Publicação e Store

---

Para parceiros que visam a escalabilidade e a distribuição de suas soluções.

| Curso | Descrição detalhada para o Desenvolvedor |
| --- | --- |
| Adaptando seu componente para a TOTVS Store | Requisitos técnicos e boas práticas para transformar seu desenvolvimento em uma solução publicável na Store oficial. |

Dica!

Antes de iniciar a codificação de uma nova *widget*, verifique sempre se o componente já existe no **Style guide** para garantir a responsividade e compatibilidade com futuras atualizações do TOTVS Fluig.

## Manual de consulta técnica

---

*Links* diretos para a documentação técnica, padrões oficiais e resolução de problemas.

### Configuração do ambiente e infraestrutura

---

- [Especificações técnicas](https://tdn.totvs.com/pages/viewpage.action?pageId=144409649) e [Instalação e atualização](https://tdn.totvs.com/pages/viewpage.action?pageId=144409653): requisitos e guias de atualização.

- [Configuração de banco de dados](https://tdn.totvs.com/pages/viewpage.action?pageId=145359800): padrões de *Schema* e permissões.

- [Controle de *log*](https://tdn.totvs.com/display/fluig/Controle+de+Log): padronização para diagnóstico de soluções.

Padrões de desenvolvimento e Style Guide

---

- [Desenvolvimento sobre a plataforma](https://tdn.totvs.com/display/fluig/Desenvolvimento+sobre+a+plataforma): documentações reunidas referentes à desenvolvimento sobre a plataforma.

- [Portal Fluig Style Guide](https://style.fluig.com/): consulte para usar componentes nativos e CSS.

- [API JQuery](https://api.jquery.com/): documentação da biblioteca padrão utilizada no *Client-side* da plataforma.

### Arquitetura de componentes e WCM

---

- [Arquivo *application.info*](https://tdn.totvs.com/display/fluig/Arquivo+application.info): como configurar as propriedades de metadados do seu projeto.

- [Internacionalização (i18n)](https://tdn.totvs.com/pages/viewpage.action?pageId=185738869): como criar componentes multi-idioma.

- [Central de componentes](https://tdn.totvs.com/display/fluig/Central+de+componentes) e [Estrutura de páginas](https://tdn.totvs.com/pages/viewpage.action?pageId=185732957): entenda a hierarquia do portal.

- [Construção de *widgets* e *layouts*](https://tdn.totvs.com/pages/viewpage.action?pageId=113803693): guia técnico completo sobre a criação desses componentes.

- [Como criar um *widget* que busque conteúdo](https://tdn.totvs.com/pages/viewpage.action?pageId=185735401): passo a passo para *widgets* com funcionalidade de pesquisa.

- *Layouts*: documentação sobre personalização de estruturas de página.

- [Desenvolvendo *widgets* compatíveis com modo escuro](https://tdn.totvs.com/pages/viewpage.action?pageId=965446583): guia de adaptação visual para o modo escuro.

- [Closure Compiler Maven *plugin*](https://tdn.totvs.com/display/fluig/Closure+Compiler+Maven+Plugin): otimização e minificação de código.

### Workflows e processos

---

- [Desenvolvimento de *workflow*](https://tdn.totvs.com/display/fluig/Desenvolvimento+de+Workflow): melhores práticas de modelagem e eventos de processo.

- [Migração para produção (Formulário 2.0)](https://tdn.totvs.com/pages/viewpage.action?pageId=1019341119): guia de transição para o novo motor de formulários.

### Publicação, Store e suporte

---

- [*Sample-component* (Projeto base)](https://git.fluig.com/projects/SAMPLES/repos/projetos/browse/sample-component): projeto de exemplo para soluções compatíveis com a Store.

- [Erro 401 - *Unauthorized*](https://tdn.totvs.com/pages/viewpage.action?pageId=870389961): FAQ técnica sobre problemas de autenticação em exemplos de desenvolvimento.

- [FAQ da Plataforma](https://tdn.totvs.com/display/fluig/Plataforma+%7C+Perguntas+frequentes): perguntas frequentes e diretrizes.

## Dica técnica de On-boarding

---

Por onde começar?

Recomendamos que o desenvolvedor realize primeiro os cursos do portal Fluig Academy e mantenha os *links* do manual de consulta técnica salvo nos favoritos do navegador para consulta rápida durante a codificação.


<!-- anchors: GuiadecapacitaçãoeconfiguraçãotécnicaparaParceirosTOTVSFluig-Introduçãoeobjetivo, GuiadecapacitaçãoeconfiguraçãotécnicaparaParceirosTOTVSFluig-Configuraçãodoambientededesenvolvimento, GuiadecapacitaçãoeconfiguraçãotécnicaparaParceirosTOTVSFluig-AcessoaoportalFluigAcademy, GuiadecapacitaçãoeconfiguraçãotécnicaparaParceirosTOTVSFluig-Conteúdosdecapacitaçãorecomendados, GuiadecapacitaçãoeconfiguraçãotécnicaparaParceirosTOTVSFluig-Desenvolvimentodeportaisewidgets, GuiadecapacitaçãoeconfiguraçãotécnicaparaParceirosTOTVSFluig-ConsumodeAPIsREST, GuiadecapacitaçãoeconfiguraçãotécnicaparaParceirosTOTVSFluig-Interfaceeexperiência(Styleguide), GuiadecapacitaçãoeconfiguraçãotécnicaparaParceirosTOTVSFluig-PublicaçãoeStore, GuiadecapacitaçãoeconfiguraçãotécnicaparaParceirosTOTVSFluig-Manualdeconsultatécnica, GuiadecapacitaçãoeconfiguraçãotécnicaparaParceirosTOTVSFluig-Configuraçãodoambienteeinfraestrutura, GuiadecapacitaçãoeconfiguraçãotécnicaparaParceirosTOTVSFluig-ArquiteturadecomponenteseWCM, GuiadecapacitaçãoeconfiguraçãotécnicaparaParceirosTOTVSFluig-Workflowseprocessos, GuiadecapacitaçãoeconfiguraçãotécnicaparaParceirosTOTVSFluig-Publicação,Storeesuporte, GuiadecapacitaçãoeconfiguraçãotécnicaparaParceirosTOTVSFluig-DicatécnicadeOn-boarding -->
