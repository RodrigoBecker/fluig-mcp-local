---
title: "Guia padrão das URL's de notificações"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=546255611"
scraped_at: "2026-03-09T05:11:30.440Z"
depth: 3
anchors: 4
child_links: 69
---

# Guia padrão das URL's de notificações

# Índice

# Objetivo

---

Esse guia tem como objetivo demonstrar como é possível direcionar o usuário para uma tela do aplicativo utilizando links em determinadas seções do aplicativo Fluig Mobile.

## Como funciona

---

É possível direcionar o usuário para uma tela específica do aplicativo usando [links com padrões específicos](https://tdn.totvs.com/pages/viewpage.action?pageId=546255611#Guiapadr%C3%A3odasURL%27sdenotifica%C3%A7%C3%B5es-Padr%C3%A3odasURL%27s). Para isso, o aplicativo intercepta links das seguintes seções:

- Notificações *push*
- Central de notificações do aplicativo
- Textos de posts
- Textos de comentários
- Widgets

## Padrão das URL's

---

Ao clicar no link em uma das seções acima listadas, o aplicativo irá avaliar esse link de acordo com a tabela abaixo direcionando o usuário para a tela correspondente:

Os links são avaliados exatamente na ordem exibida na tabela abaixo e irá direcionar o usuário assim que o padrão for detectado. Verifique se não há ambiguidade de padrão na sua URL.

| Direcionado para o perfil da comunidade ou usuário | "/social/{alias}""/community/{alias}""/subject/{alias}" |
| --- | --- |
| Abre o diretório do artigo | "/articles/{alias}/{id da pasta onde está armazenado o artigo}" |
| Abre o documento do artigo | "/arcticleview/{alias}/{id do documento de artigo}" |
| Abre o diretório da enquete | "/form/{alias}/{id da pasta que está armazenada a enquete}" |
| Abre o resultado da função de busca no menu lateral esquerdo | "/searchresult?text={termo da busca}" |
| Abre o documento com a versão definida | "/ecmnavigation?app_ecm_navigation_doc={id do documento}[&app_ecm_navigation_docversion=\{versão do documento}]""pagecentraltask?app_ecm_centraltask_wdnrdocto={id do documento}[&app_ecm_centraltask_wdnrversao=\{versão do documento}]" |
| Abre a instância do processo | "/pagecentraltask?app_ecm_centraltask_processinstanceid={id da instância do processo}""/pageworkflowview?app_ecm_workflowview_detailsProcessInstanceID={id da instância do processo}" |
| Inicia um novo processo | "/pageprocessstart?app_ecm_process_id={id do processo}""/pageworkflowview?app_ecm_workflowview_processinstanceid={id do processo}""/pageworkflowview?processID={id do processo}" |
| Abre o post | "/post/{alias}/{id post}" |
| Abre widgets | Como as widgets podem ter URL's customizáveis, não existe um padrão a ser respeitado. Nesse caso, validamos se a URL definida está de acordo com a URL de uma widget que foi definida no sistema. |


<!-- anchors: GuiapadrãodasURL'sdenotificações-Índice, GuiapadrãodasURL'sdenotificações-Objetivo, GuiapadrãodasURL'sdenotificações-Comofunciona, GuiapadrãodasURL'sdenotificações-PadrãodasURL's -->
