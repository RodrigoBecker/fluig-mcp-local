---
title: "Exportando eventos globais"
url: "https://tdn.totvs.com/display/public/fluig/Exportando+eventos+globais"
scraped_at: "2026-03-09T03:52:28.343Z"
depth: 2
anchors: 3
child_links: 61
---

# Exportando eventos globais

Os eventos globais são eventos disparados durante a utilização do fluig e podem ser desenvolvidos sobre a plataforma.

O desenvolvimento de um evento é realizado por meio da criação de *scripts* na linguagem JavaScript. O código de implementação de cada *script* é armazenado no banco de dados do fluig, dispensando o uso de qualquer outro arquivo.

Atenção

Para que um usuário que não é administrador da empresa possa exportar eventos globais é necessário que ele possua a permissão "Configurar Eventos Globais". Esta permissão pode ser concedida pelo administrador através do item "Permissões" disponível no agrupador "Pessoas" do Painel de Controle do fluig.

Saiba como realizar esse procedimento [clicando aqui](https://tdn.totvs.com/pages/viewpage.action?pageId=269431799).

- [Passo 1](#)
- [Passo 2](#)

Na perspectiva Fluig, localize o arquivo desejado dentro do projeto, no caminho events/[nome_servidor]/[evento].js.

Clique com o botão direito sobre o arquivo do evento e selecione a opção **Export...**

Escolha a opção **Exportar para Servidor Fluig** e clique em **Next**.

![](/download/attachments/239019348/Screenshot%2016_06%20008.png?version=1&modificationDate=1466097224000&api=v2)

Selecione o servidor para onde o evento será exportado. Na tabela são mostrados ao usuários todos os eventos do servidor. Também é possível alternar as opções de manter, atualizar, eliminar ou criar novos eventos.

![](/download/attachments/239019348/Screenshot%2016_06%20010.png?version=1&modificationDate=1466097236000&api=v2)

Após configurar, clique em **Finish** e aguarde o término do processamento.


<!-- anchors: samples, samples-1, samples-2 -->
