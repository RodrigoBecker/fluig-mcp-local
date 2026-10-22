---
title: "Personalização da tela inicial do My Fluig"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=198938892"
scraped_at: "2026-03-09T04:11:26.764Z"
depth: 2
anchors: 3
child_links: 66
---

# Personalização da tela inicial do My Fluig

# Índice

# Objetivo

O objetivo deste guia é apresentar o passo a passo necessário para personalizar a tela inicial do My Fluig.

# Configurando tela inicial do My Fluig

---

Para maior personalização do aplicativo Fluig, é possível configurar a tela inicial do aplicativo. Para realizar esta alteração realize os seguintes passos:

**01.** Efetue a autenticação no Fluig Plataforma utilizando o usuário **wcmadmin**, e então acesse **Painel de Controle  ► WCM ► Empresas**.

**02.** Selecione a empresa que deseja alterar a tela inicial do aplicativo e então clique em **Editar**.

**03.** A tela de edição de empresa será apresentada. Clique no botão **Cadastrar dados adicionais**.

**04.** A tela de dados adicionais da empresa será apresentada. No campo **Chave **informe o valor **startScreen **e no campo **Valor **informe:

- PROCESS:  Se você deseja que a tela inicial seja a inicialização de processos.
- SOCIAL: Se você deseja que a tela inicial  seja a timeline.
- DOCUMENT: Se você deseja que a tela inicial  seja a navegação de documentos.
- HOMEAPP: Define que a home do aplicativo será exibida como tela inicial.
- TASKS: Se você deseja que a tela inicial  seja a central de tarefas.
- COMMUNITY:ALIAS_DA_COMUNIDADE : Se você deseja que a tela inicial seja uma comunidade, o parâmetro ALIAS_DA_COMUNIDADE deve ser preenchido e válido para direcionar para comunidade correta.
- PAGE:IDENTIFICADOR_UNICO : Se você deseja que a tela inicial seja uma página, o parâmetro IDENTIFICADOR_UNICO deve ser preenchido e válido para direcionar para página correta.

**05.** Clique no botão **Salvar** para salvar os dados adicionais. O item **startScreen **será adicionado na listagem de dados adicionais da empresa

![](/download/attachments/198938892/startscreen.png?version=2&modificationDate=1732715632727&api=v2)

**06.** Clique no botão **Salvar** para salvar as alterações na empresa e efetivar a alteração da tela inicial do aplicativo.

Quando funciona?

A alteração terá efeito após a segunda utilização do aplicativo ou ao cadastrar a empresa novamente.

Quero voltar ao que era antes

1. A home padrão do aplicativo será definida nos casos onde o parâmetro starscreen não esteja configurado e a página home da plataforma Fluig não possua widgets com visualização suportada no mobile ativada.
2. Para que a home da plataforma seja definida como tela inicial, basta remover o parâmetro startScreen e adicionar a visualização no mobile em pelo menos uma widget que contém essa opção.
3. Caso deseje voltar a utilizar outras páginas como home no aplicativo, basta passar alguns dos parâmetros informados no **passo 04** do item **Configurar tela inicial do My Fluig**.


<!-- anchors: PersonalizaçãodatelainicialdoMyFluig-Índice, PersonalizaçãodatelainicialdoMyFluig-Objetivo, PersonalizaçãodatelainicialdoMyFluig-ConfigurandotelainicialdoMyFluig -->
