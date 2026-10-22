---
title: "Plataforma ❙ Diagrama do processo"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=860252119"
scraped_at: "2026-03-09T04:15:22.563Z"
depth: 3
anchors: 10
child_links: 78
---

# Plataforma ❙ Diagrama do processo

Consulte a documentação correta:

Esta documentação refere-se ao novo editor de processos da plataforma. Caso esteja utilizando o editor de processos atual, acesse [Configuração do processo](/pages/viewpage.action?pageId=263784090). 

IDIOMA

# Falando de diagrama do processo...

---

O diagrama é a representação gráfica de todo o fluxo do processo. Ele é formado pelos [componentes](/pages/viewpage.action?pageId=860252098) que indicam o início do processo, suas etapas, as direções nas quais a solicitação pode seguir e seu fim, seja por cancelamento ou pela finalização da solicitação atendida.

Nesse recurso, é feita a modelagem do diagrama do processo adicionando os componentes e os fluxos. É possível definir a disposição de cada componente a fim de representar cada etapa na qual a solicitação do processo pode passar, permitindo assim, uma visualização simples e um entendimento rápido e fácil de todo o processo.

Também é possível configurar cada componente de acordo com a necessidade de cada etapa e de cada processo, garantindo um fluxo pertinente a cada negócio.

Os componentes que permitem modelar o diagrama do processo são exibidos na barra de componentes, localizada na parte inferior da área de modelagem. Os componentes disponíveis para uso são:

![](/download/attachments/860252119/in%C3%ADcio-mini.png?version=3&modificationDate=1726594860227&api=v2)

INÍCIO

![](/download/attachments/860252119/temporizador-mini.png?version=1&modificationDate=1769541874477&api=v2)

TEMPORIZADOR

![](/download/attachments/860252119/atividade-mini.png?version=3&modificationDate=1726594859373&api=v2)

ATIVIDADE

![](/download/attachments/860252119/atividade-servi%C3%A7o-mini.png?version=1&modificationDate=1741019476293&api=v2)

ATIVIDADE DE SERVIÇO

![](/download/attachments/860252119/subprocesso-mini.png?version=1&modificationDate=1742317210240&api=v2)

SUBPROCESSO

![](/download/attachments/860252119/bloco-de-atividades-mini.png?version=1&modificationDate=1760365407063&api=v2)

BLOCO DE ATIVIDADES

![](/download/attachments/860252119/paralelo-mini.png?version=3&modificationDate=1726594860617&api=v2)

PARALELO

![](/download/attachments/860252119/join-mini.png?version=3&modificationDate=1726594860427&api=v2)

JOIN

![](/download/attachments/860252119/exclusivo-mini.png?version=2&modificationDate=1739276128720&api=v2)

EXCLUSIVO

![](/download/attachments/860252119/cancelamento-mini.png?version=4&modificationDate=1726595446057&api=v2)

CANCELAMENTO

![](/download/attachments/860252119/fim-mini.png?version=3&modificationDate=1726594859807&api=v2)

FIM

![](/download/attachments/860252119/anota%C3%A7%C3%A3o-mini.png?version=2&modificationDate=1758886992957&api=v2)

ANOTAÇÃO

![](/download/attachments/860252119/fluxos-mini.png?version=3&modificationDate=1726594860000&api=v2)

FLUXOS

A definição sobre quem receberá a solicitação em cada etapa na qual ela chega é feita pelos [mecanismos de atribuição](/pages/viewpage.action?pageId=868251705). A partir deles, é possível determinar quais pessoas podem ser responsáveis pela solicitação em cada etapa, bem como se a etapa deve ser executada individualmente – por uma única pessoa – ou de forma conjunta – por mais de uma pessoa.

Os tipos de mecanismos de atribuição são exibidos de acordo com o componente, visto que alguns tipos não podem ser utilizados em determinados componentes. No componente Início, por exemplo, não são exibidos os mecanismos Por grupo e Por papel, pois eles não fazem sentido para o contexto do componente, que representa a abertura de uma solicitação, ação esta que é feita por uma única pessoa.

![](/download/attachments/860252119/diagrama-completo.png?version=9&modificationDate=1742578886100&api=v2)

## Ver componentes disponíveis

---

****

        Your browser does not support the HTML5 video element

**01.** Com o processo em modo de [edição](https://tdn.totvs.com/pages/viewpage.action?pageId=233763153#Plataforma%E2%9D%99Configurarprocessos-Editarprocesso), na aba![](/download/attachments/860252119/diagrama.png?version=2&modificationDate=1742307239213&api=v2) **Diagrama**, localize a barra de componentes ![](/download/attachments/860252119/barra-de-componentes.png?version=7&modificationDate=1769542626530&api=v2) – localizada na parte inferior da área de modelagem.

**02.** Veja todos os componentes disponíveis para uso ao modelar o diagrama do processo.

Alguns componentes estão agrupados na barra, sendo necessário clicar sobre o componente que está visível para ver os demais. Dessa forma:

- clique sobre o componente **Fim** ![](/download/attachments/860252119/fim-mini.png?version=3&modificationDate=1726594859807&api=v2) para ver também o componente **Cancelamento**;

- clique sobre o componente **Atividade**![](/download/attachments/860252119/atividade-mini.png?version=3&modificationDate=1726594859373&api=v2) para ver também os componentes **Atividade de serviço** ![](/download/attachments/860252119/atividade-servi%C3%A7o-mini.png?version=1&modificationDate=1741019476293&api=v2) e **Subprocesso** ![](/download/attachments/860252119/subprocesso-mini.png?version=1&modificationDate=1742317210240&api=v2);

- clique sobre o componente **Exclusivo** ![](/download/attachments/860252119/exclusivo-mini.png?version=2&modificationDate=1739276128720&api=v2) para ver também os componentes **Paralelo** ![](/download/attachments/860252119/paralelo-mini.png?version=3&modificationDate=1726594860617&api=v2)e **Join**;

- clique sobre **Mais componentes** ![](/download/attachments/860252119/adicionar.png?version=1&modificationDate=1758906855973&api=v2) para ver o componente **Anotação** ![](/download/attachments/860252119/anota%C3%A7%C3%A3o-mini.png?version=2&modificationDate=1758886992957&api=v2).

## Adicionar componente no diagrama

---

****

        Your browser does not support the HTML5 video element

**01.** Com o processo em modo de [edição](https://tdn.totvs.com/pages/viewpage.action?pageId=233763153#Plataforma%E2%9D%99Configurarprocessos-Editarprocesso), na aba![](/download/attachments/860252119/diagrama.png?version=2&modificationDate=1742307239213&api=v2) **Diagrama**, localize o componente desejado na barra de componentes ![](/download/attachments/860252119/barra-de-componentes.png?version=7&modificationDate=1769542626530&api=v2) – localizada na parte inferior da área de modelagem.

**02.** Clique no componente e arraste-o para o local desejado no diagrama do processo.

**03.** Clique em **Salvar rascunho** – localizado no lado direito da barra superior – para salvar as alterações feitas no diagrama.

**04.** Na mensagem exibida, clique em **Ok, entendi**.

## Mover componente no diagrama

---

****

        Your browser does not support the HTML5 video element

**01.** Com o processo em modo de [edição](https://tdn.totvs.com/pages/viewpage.action?pageId=233763153#Plataforma%E2%9D%99Configurarprocessos-Editarprocesso), na aba![](/download/attachments/860252119/diagrama.png?version=2&modificationDate=1742307239213&api=v2) **Diagrama**, localize o componente que deseja mover.

**02.** Clique no componente e arraste-o para o local desejado no diagrama do processo.

**03.** Clique em **Salvar rascunho** – localizado no lado direito da barra superior – para salvar as alterações feitas no diagrama.

**04.** Na mensagem exibida, clique em **Ok, entendi**.

## Adicionar fluxo entre componentes do diagrama

---

****

        Your browser does not support the HTML5 video element

**01.** Com o processo em modo de [edição](https://tdn.totvs.com/pages/viewpage.action?pageId=233763153#Plataforma%E2%9D%99Configurarprocessos-Editarprocesso), na aba![](/download/attachments/860252119/diagrama.png?version=2&modificationDate=1742307239213&api=v2) **Diagrama**, localize os componentes que serão interligados por um fluxo.

**02.** Clique no componente de onde o fluxo deve partir, ou seja, o componente de origem.

**03.** Clique em **Linha** ![](/download/attachments/860252119/fluxos-mini.png?version=3&modificationDate=1726594860000&api=v2).

**04.** Mova o cursor do *mouse* até o componente para o qual o fluxo deve direcionar, ou seja, para o componente de destino do fluxo.

**05.** Clique em **Salvar rascunho** – localizado no lado direito da barra superior – para salvar as alterações feitas no diagrama.

**06.** Na mensagem exibida, clique em **Ok, entendi**.

## Criar dobra no fluxo entre componentes do diagrama

---

****

        Your browser does not support the HTML5 video element

**01.** Com o processo em modo de [edição](https://tdn.totvs.com/pages/viewpage.action?pageId=233763153#Plataforma%E2%9D%99Configurarprocessos-Editarprocesso), na aba![](/download/attachments/860252119/diagrama.png?version=2&modificationDate=1742307239213&api=v2) **Diagrama**, localize o fluxo para o qual deseja criar uma dobra.

**02.** Clique na posição do fluxo onde a dobra deve ser feita, mantenha o clique pressionado e arraste o fluxo até formar o ângulo desejado.

**03.** Reposicione os componentes interligados pelo fluxo da forma desejada.

**04.** Clique em **Salvar rascunho** – localizado no lado direito da barra superior – para salvar as alterações feitas no diagrama.

**05.** Na mensagem exibida, clique em **Ok, entendi**.

## Configurar componente do diagrama

---

****

        Your browser does not support the HTML5 video element

**01.** Com o processo em modo de [edição](https://tdn.totvs.com/pages/viewpage.action?pageId=233763153#Plataforma%E2%9D%99Configurarprocessos-Editarprocesso), na aba![](/download/attachments/860252119/diagrama.png?version=2&modificationDate=1742307239213&api=v2) **Diagrama**, localize e clique no componente que deseja configurar.

As configurações disponíveis para o componente são exibidas na lateral direita.

**02.** Defina as configurações desejadas para o componente que faz parte do diagrama do processo.

Cada componente ou evento possui características e opções de configuração específicas. Clique sobre cada um para obter detalhes sobre sua configuração.

![](/download/attachments/860252119/in%C3%ADcio-mini.png?version=3&modificationDate=1726594860227&api=v2)

[Início](/pages/viewpage.action?pageId=862118990)

![](/download/attachments/860252119/temporizador-mini.png?version=1&modificationDate=1769541874477&api=v2)

[Temporizador](/pages/viewpage.action?pageId=1036751413)

![](/download/attachments/860252119/atividade-mini.png?version=3&modificationDate=1726594859373&api=v2)

[Atividade](/pages/viewpage.action?pageId=862123505)

![](/download/attachments/860252119/atividade-servi%C3%A7o-mini.png?version=1&modificationDate=1741019476293&api=v2)

[Atividade de serviço](/pages/viewpage.action?pageId=919050491)

![](/download/attachments/860252119/subprocesso-mini.png?version=1&modificationDate=1742317210240&api=v2)

[Subprocesso](/pages/viewpage.action?pageId=923182939)

![](/download/attachments/860252119/bloco-de-atividades-mini.png?version=1&modificationDate=1760365407063&api=v2)

[Bloco de atividades](/pages/viewpage.action?pageId=993699681)

![](/download/attachments/860252119/paralelo-mini.png?version=3&modificationDate=1726594860617&api=v2)

[Paralelo](/pages/viewpage.action?pageId=862123648)

![](/download/attachments/860252119/join-mini.png?version=3&modificationDate=1726594860427&api=v2)

[*Join*](/pages/viewpage.action?pageId=864352238)

![](/download/attachments/860252119/exclusivo-mini.png?version=2&modificationDate=1739276128720&api=v2)

[Exclusivo](/pages/viewpage.action?pageId=913802155)

![](/download/attachments/860252119/cancelamento-mini.png?version=4&modificationDate=1726595446057&api=v2)

[Cancelamento](/pages/viewpage.action?pageId=864352358)

![](/download/attachments/860252119/fim-mini.png?version=3&modificationDate=1726594859807&api=v2)

[Fim](/pages/viewpage.action?pageId=864352301)

![](/download/attachments/860252119/anota%C3%A7%C3%A3o-mini.png?version=2&modificationDate=1758886992957&api=v2)

[Anotação](/pages/viewpage.action?pageId=939229293)

![](/download/attachments/860252119/fluxos-mini.png?version=3&modificationDate=1726594860000&api=v2)

[Fluxos](/pages/viewpage.action?pageId=864347102)

![](/download/attachments/860252119/evento-captura-de-erro.png?version=1&modificationDate=1759166873703&api=v2)

[Captura de erro](/pages/viewpage.action?pageId=990755497)

**03.** Clique em **Salvar rascunho** – localizado no lado direito da barra superior – para salvar as configurações feitas no componente.

**04.** Na mensagem exibida, clique em **Ok, entendi**.

## Excluir componente do diagrama

---

****

        Your browser does not support the HTML5 video element

**01.** Com o processo em modo de [edição](https://tdn.totvs.com/pages/viewpage.action?pageId=233763153#Plataforma%E2%9D%99Configurarprocessos-Editarprocesso), na aba![](/download/attachments/860252119/diagrama.png?version=2&modificationDate=1742307239213&api=v2) **Diagrama**, localize e clique no componente que deseja excluir.

**02.** Clique em **Excluir** ![](/download/attachments/860252119/excluir.png?version=1&modificationDate=1724789731267&api=v2).

**03.** Na mensagem de confirmação exibida, clique em **Excluir componente**.

Ao excluir um componente, todas as suas configurações também são excluídas e não é possível restaurá-lo.

Para desistir de excluir o componente, clique em **Cancelar**.

**04.** Clique em **Salvar rascunho** – localizado no lado direito da barra superior – para salvar as alterações feitas no diagrama.

**05.** Na mensagem exibida, clique em **Ok, entendi**.

## Desfazer ou refazer ações no diagrama

---

****

        Your browser does not support the HTML5 video element

**01.** Com o processo em modo de [edição](https://tdn.totvs.com/pages/viewpage.action?pageId=233763153#Plataforma%E2%9D%99Configurarprocessos-Editarprocesso), na aba![](/download/attachments/860252119/diagrama.png?version=2&modificationDate=1742307239213&api=v2) **Diagrama**, clique em **Desfazer** ![](/download/attachments/860252119/desfazer.png?version=1&modificationDate=1771249221763&api=v2) ou **Refazer** ![](/download/attachments/860252119/refazer.png?version=1&modificationDate=1771249249807&api=v2)– localizados no lado esquerdo da barra de componentes.

A cada clique feito nas opções acima, as últimas alterações feitas no diagrama do processo são desfeitas ou refeitas. As alterações contempladas pelas ações Desfazer e Refazer são:

- movimentação de componentes e fluxos no diagrama;

- inclusão de componentes e fluxos no diagrama;

- remoção de componentes e fluxos no diagrama.

Também é possível utilizar atalhos do teclado para fazer as ações:

- **Ctrl**+**z**para desfazer;

- **Ctrl**+**y** para refazer.

**02.** Clique em **Salvar rascunho** – localizado no lado direito da barra superior – para salvar as alterações feitas no diagrama.

**03.** Na mensagem exibida, clique em **Ok, entendi**.

## Aumentar ou diminuir diagrama

---

****

        Your browser does not support the HTML5 video element

**01.** Com o processo em modo de [edição](https://tdn.totvs.com/pages/viewpage.action?pageId=233763153#Plataforma%E2%9D%99Configurarprocessos-Editarprocesso), na aba![](/download/attachments/860252119/diagrama.png?version=2&modificationDate=1742307239213&api=v2) **Diagrama**, clique em **Aumentar zoom** ![](/download/attachments/860252119/aumentar-zoom.png?version=1&modificationDate=1759771532753&api=v2) ou **Diminuir zoom** ![](/download/attachments/860252119/diminuir-zoom.png?version=1&modificationDate=1759771533843&api=v2)– localizados no canto inferior esquerdo.

A cada clique feito nas opções acima, o tamanho do diagrama é aumentado ou diminuído em **10%**. O tamanho máximo que o diagrama pode chegar é **200%** e o mínimo é **40%**.

Para voltar para o tamanho original do diagrama, clique em **Restaurar zoom** ![](/download/attachments/860252119/vis%C3%A3o-100%25.png?version=1&modificationDate=1759772197110&api=v2), que restaura o tamanho do diagrama para a visão padrão em **100%**.

Também é possível utilizar atalhos do teclado para fazer as ações:

- **Ctrl**+****"**+**"****ou **Ctrl +** **mouse up****para aumentar o *zoom*;
- **Ctrl**+****"**-**"****ou **Ctrl**+ **mouse down****para diminuir o *zoom*;
- **Ctrl**+******0*** *para restaurar o tamanho do diagrama para a visão padrão em 100%.

Fique atento!

Esta documentação é válida a partir da atualização **Voyager (2.0)**. Se você utiliza uma atualização anterior, ela pode conter informações diferentes das quais você vê na sua plataforma.


<!-- anchors: Plataforma❙Diagramadoprocesso-Falandodediagramadoprocesso..., Plataforma❙Diagramadoprocesso-Vercomponentesdisponíveis, Plataforma❙Diagramadoprocesso-Adicionarcomponentenodiagrama, Plataforma❙Diagramadoprocesso-Movercomponentenodiagrama, Plataforma❙Diagramadoprocesso-Adicionarfluxoentrecomponentesdodiagrama, Plataforma❙Diagramadoprocesso-Criardobranofluxoentrecomponentesdodiagrama, Plataforma❙Diagramadoprocesso-Configurarcomponentedodiagrama, Plataforma❙Diagramadoprocesso-Excluircomponentedodiagrama, Plataforma❙Diagramadoprocesso-Desfazerourefazeraçõesnodiagrama, Plataforma❙Diagramadoprocesso-Aumentaroudiminuirdiagrama -->
