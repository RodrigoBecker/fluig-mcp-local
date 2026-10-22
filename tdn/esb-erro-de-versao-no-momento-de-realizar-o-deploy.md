---
title: "ESB - Erro de versão no momento de realizar o deploy"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=201720494"
scraped_at: "2026-03-09T03:39:55.087Z"
depth: 2
anchors: 5
child_links: 38
---

# ESB - Erro de versão no momento de realizar o deploy

# Índice

# Plataforma

**Produto:  **ESB 12.3.5

# Ocorrência

No momento de realizar deploy do diagrama do ESB, ocorre erro do print abaixo: 

![](/download/attachments/201720494/image2015-9-3%2013%3A47%3A52.png?version=1&modificationDate=1441299380000&api=v2)

# Causa

O problema ocorre pelo fato do plugin do ESB no TOTVS Developer Studio estar em uma versão diferente do ESB Server, essa validação é realizada para não ocorrer erros de negócios, que pode variar dependendo da versão do ESB.

# Solução

Atualizar o plugin do TOTVS Developer Studio e o ESB Server para mesma versão. É sempre indicado atualizar para versão mais recente disponível no portal da TOTVS.


<!-- anchors: ESBErrodeversãonomomentoderealizarodeploy-Índice, ESBErrodeversãonomomentoderealizarodeploy-Plataforma, ESBErrodeversãonomomentoderealizarodeploy-Ocorrência, ESBErrodeversãonomomentoderealizarodeploy-Causa, ESBErrodeversãonomomentoderealizarodeploy-Solução -->
