---
title: "Alterar layouts de páginas"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=185745580"
scraped_at: "2026-03-09T05:00:58.335Z"
depth: 3
anchors: 12
child_links: 50
---

# Alterar layouts de páginas

# Índice

# Visão Geral

O objetivo deste guia é demonstrar como funciona a modificação de *layout* de uma página do TOTVS Fluig Plataforma. É possível mudar o *layout* de qualquer página editável no Fluig Plataforma, tornando a edição de páginas - e em especial a Home - mais flexível. Isso também significa que cada comunidade pode ter um *layout* completamente personalizado.

# Escolhendo um novo layout

A seguir são apresentados os passos para efetuar a alteração do *layout* de páginas.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)
- [Passo 6](#)

 - Em uma página que o usuário possua permissão de modificação, acessar o menu **Configurações** no canto superior direito e acionar **Editar Página**.![](/download/attachments/185745580/Image%2005%2004%20003.png?version=1&modificationDate=1493903378000&api=v2)

**Editar página**

****

  - Ao mudar a página para o modo de edição, acessar novamente o menu **Configurações**. Uma nova opção chamada Trocar *layout* estará disponível.

  - Acionar **Trocar layout**.

![](/download/attachments/185745580/Image%2005%2004%20004.png?version=1&modificationDate=1493903424000&api=v2)

**Trocar layout**

 - A janela para troca de *layout* será exibida trazendo o *layout* atual selecionado e o botão Aplicar *layout* desabilitado.

![](/download/attachments/185745580/Image%2005%2004%20007.png?version=1&modificationDate=1493903543000&api=v2)

**Opções de layouts**

 - Escolher o *layout* desejado e o botão Aplicar *layout* será habilitado.

 - Acionar **Aplicar layout**.

![](/download/attachments/185745580/Image%2005%2004%20005.png?version=2&modificationDate=1493903565000&api=v2)

**Aplicação da alteração de layout**

 - Aplicando a mudança, a tela de seleção de *layouts* é fechada e os *widgets* são redistribuídos na página conforme o novo *layout*.

 - Para ajustar a página da forma desejada, é possível arrastar e rearranjar os *widgets* nos demais *slots*.

![](/download/attachments/185745580/Image%2005%2004%20010.png?version=1&modificationDate=1493904396000&api=v2)

**Novo layout da página**

 - Ao publicar a página, ela será apresentada com os *widgets* renderizados obedecendo a nova ordenação.

![](/download/attachments/185745580/Image%2005%2004%20009.png?version=2&modificationDate=1493904782000&api=v2)

**Nova versão da página publicada**

# Restaurando versões com layouts diferentes

No histórico da página é possível acompanhar informações sobre os *layouts* que já foram utilizados por ela. Se desejado, é possível restaurar uma versão antiga.

![](/download/attachments/185745580/consultar_historico_pagina.gif?version=1&modificationDate=1499344733000&api=v2)

**Consulta ao histórico de alterações na página**

# Sobre o processo de troca de layout em uma página

Quando uma página tem seu *layout* alterado, a plataforma Fluig redistribui os *widgets* pelos novos *slots* obedecendo as seguintes regras:

1. Cada*widget* é analisado de forma independente obedecendo a posição em que se encontra na página e *slot*.
2. Se o novo *layout* possuir um *slot* com o mesmo nome daquele em que o *widget* estava alocado no *layout* antigo, a plataforma Fluig determinará que o *widget* deve assumir a posição do *slot* com o mesmo nome.
3. Se não houver um *slot* de mesmo nome, um outro será escolhido de forma aleatória e a página é apresentada de maneira diferente.
4. Sempre que o *widget* é inserido em seu novo *slot*(seja ele de mesmo nome ou não), será disposto na última posição possível para aquele *slot.*

**E quando há mais slots?**

A quantidade de *widgets* por *slot* diminui, uma vez que eles ficam mais espalhados, obedecendo a regra de mesmo nome citada anteriormente na regra 2.

**E quando há menos slots?**

A quantidade de *widgets* por *slot* aumenta.


<!-- anchors: Alterarlayoutsdepáginas-Índice, Alterarlayoutsdepáginas-VisãoGeral, Alterarlayoutsdepáginas-Escolhendoumnovolayout, samples, samples-1, samples-2, samples-3, samples-4, samples-5, samples-6, Alterarlayoutsdepáginas-Restaurandoversõescomlayoutsdiferentes, Alterarlayoutsdepáginas-Sobreoprocessodetrocadelayoutemumapágina -->
