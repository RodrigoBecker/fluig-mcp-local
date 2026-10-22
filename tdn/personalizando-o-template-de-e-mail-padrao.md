---
title: "Personalizando o template de e-mail padrão"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=145362064"
scraped_at: "2026-03-09T04:55:11.887Z"
depth: 3
anchors: 5
child_links: 42
---

# Personalizando o template de e-mail padrão

# Índice

# Objetivo

---

O objetivo deste guia é orientar a personalização de *templates* e cabeçalhos dos *e-mails* que são enviados pelo TOTVS Fluig Plataforma.

Plataforma TOTVS Fluig em cloud

Caso a plataforma seja hospedada em cloud, para solicitar os arquivos para personalização, é preciso acionar a equipe de Cloud. Eles disponibilizam a pasta do Volume ao cliente e recebem os arquivos alterados, que serão substituídos no ambiente cloud.

# Personalização do template de e-mail

---

Todos os *templates* contidos no diretório **<volume padrão>\templates\tplmail\** podem ser personalizados, contanto que não sejam alteradas e nem removidas as tags padrões de cada *template,*conforme o do exemplo abaixo:

[?](#)

| `${PARAMETRO_DE_EMAIL!''}` |
| --- |

# Desenvolvendo o cabeçalho de e-mails

---

Para clientes que já possuem a plataforma instalada e desejam personalizar o cabeçalho dos *templates* de *e-mail*, é necessário efetuar os passos abaixo:

1. Para alterar a imagem do cabeçalho dos *e-mails*, substitua a imagem **head_background.gif** existente em: **<volume padrão>\custom\assets\** por outra imagem com o mesmo nome e extensão.

Atenção!

Ressaltamos que no processo de atualizações da plataforma as personalizações realizadas nos *templates* serão perdidas.

É de grande importância realizar um *backup* da pasta **<volume padrão>\templates\tplmail\** para que as personalizações existentes possam ser recuperadas posteriormente.


<!-- anchors: Personalizandootemplatedeemailpadrão-Índice, Personalizandootemplatedeemailpadrão-Objetivo, Personalizandootemplatedeemailpadrão-Personalizaçãodotemplatedee-mail, highlighter_953805, Personalizandootemplatedeemailpadrão-Desenvolvendoocabeçalhodee-mails -->
