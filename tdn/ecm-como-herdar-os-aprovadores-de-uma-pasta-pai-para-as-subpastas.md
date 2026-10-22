---
title: "ECM - Como herdar os aprovadores de uma pasta pai para as subpastas?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=210047041"
scraped_at: "2026-03-09T03:32:50.927Z"
depth: 2
anchors: 5
child_links: 39
---

# ECM - Como herdar os aprovadores de uma pasta pai para as subpastas?

# Índice

# Plataforma

**Produto**: TOTVS Fluig Plataforma

# Ocorrência

Pastas criadas dentro de uma outra pasta com aprovação, não herdarão os aprovadores da pasta pai. Para atribuir os aprovadores da pasta pai, é necessário atribuí-los manualmente.

# Causa

Hoje esse é o comportamento padrão da plataforma, apenas a segurança é herdada e não os aprovadores.

# Solução

Para este caso, existem duas possibilidades:

- Editar a pasta criada, ir na aba aprovadores e selecionar a opção "Herdar aprovadores do pai". Assim as subpastas herdarão os níveis de aprovação e os respectivos aprovadores da pasta pai.

![](/download/attachments/210047041/herdar-aprova%C3%A7%C3%A3o.png?version=1&modificationDate=1515099002000&api=v2)

- Utilizar o evento beforeDocumentPublisher e copiar os aprovadores (quando existir) ao criar novas pastas.

Fique atento!

Para mais detalhes sobre aprovadores confira a documentação [Definir critérios de aprovação para pasta ou para documento](https://tdn.totvs.com/pages/viewpage.action?pageId=243008763).


<!-- anchors: ECMComoherdarosaprovadoresdeumapastapaiparaassubpastas?-Índice, ECMComoherdarosaprovadoresdeumapastapaiparaassubpastas?-Plataforma, ECMComoherdarosaprovadoresdeumapastapaiparaassubpastas?-Ocorrência, ECMComoherdarosaprovadoresdeumapastapaiparaassubpastas?-Causa, ECMComoherdarosaprovadoresdeumapastapaiparaassubpastas?-Solução -->
