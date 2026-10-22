---
title: "Plataforma ❙ Indexação"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=234455757"
scraped_at: "2026-03-09T04:14:46.418Z"
depth: 2
anchors: 4
child_links: 60
---

# Plataforma ❙ Indexação

# Falando de indexação...

---

Recurso que realiza a indexação dos conteúdos publicados na plataforma para que sejam apresentados pela [ferramenta de pesquisa](/pages/viewpage.action?pageId=233762865). A indexação pode ser executada manualmente através do procedimento descrito [abaixo](#Plataforma❙Indexação-basico) ou automaticamente através de um agendamento pelo [Agendador de tarefas](/pages/viewpage.action?pageId=234455387).

A indexação realizada via Agendador de tarefas inclui apenas documentos e irá considerar tanto os metadados quanto o conteúdo. A indexação manual permite ajustar o escopo do procedimento e incluir outros itens como *posts*, comentários, processos e usuários.

![](/download/attachments/234455757/indexacao.png?version=4&modificationDate=1750265711770&api=v2)

## Realizar indexação 

---

Sugerimos que esse procedimento seja realizado fora do horário de expediente, pois durante a execução da indexação pode ocorrer lentidão no ambiente.

**01.** No menu principal, clique em ![](/download/attachments/234455757/%C3%ADcone-painel-de-controle.png?version=1&modificationDate=1750265225947&api=v2) **Painel de controle**.

**02**. Localize o agrupador **Parâmetros técnicos**.

**03**. Clique em ![](/download/attachments/234455757/%C3%ADcone-indexa%C3%A7%C3%A3o.png?version=1&modificationDate=1750265080410&api=v2) **Indexação**.

**04.**Assinale os itens que devem ser considerados pela indexação.

Os tipos de conteúdos disponíveis para indexação são:

**Usuários**Indexa dados de usuários.

**Publicações****Indexa o conteúdo de [publicações](/pages/viewpage.action?pageId=233765790) na timeline de usuários e comunidades.**

**Comentários**Indexa os comentários realizados em publicações. A indexação de comentários é utilizada apenas para calcular a influência dos usuários sobre o tema pesquisado, o que garante resultados mais relevantes ao utilizar a busca por [Busca por influenciadores](/pages/viewpage.action?pageId=270894531). No entanto, o conteúdo dos comentários não é exibido nos resultados das buscas. Dependendo da quantidade, o tempo até a finalização da indexação pode aumentar. 

**Processos**Indexa metadados, como o código, descrição, instruções e palavras-chave dos processos.

**Documentos**Indexa os documentos publicados. Ao selecionar essa opção, será exibido o painel [Forma de indexação de documentos](#Plataforma❙Indexação-docs) com configurações de indexação específicas para este tipo de conteúdo.

**05.** Clique em **Indexar**.

O recurso de indexação não abrange a pasta particular de cada usuário (Meus documentos).

## Recriar o índice

---

**01.** No menu principal, clique em ![](/download/attachments/234455757/%C3%ADcone-painel-de-controle.png?version=1&modificationDate=1750265225947&api=v2) **Painel de controle**.

**02**. Localize o agrupador **Parâmetros técnicos**.

**03**. Clique em ![](/download/attachments/234455757/%C3%ADcone-indexa%C3%A7%C3%A3o.png?version=1&modificationDate=1750265080410&api=v2) **Indexação**.

**04.** Assinale a opção **Recriar o índice**.

Ao assinalar essa opção, todas as demais são assinaladas automaticamente e não podem ser alteradas, com exceção da [Forma de indexação dos documentos](#Plataforma❙Indexação-docs), que pode ser definida para considerar todo o conteúdo dos documentos ou apenas os metadados.

**05.** Clique em **Indexar**.

## Indexar documentos

---

Essa opção é apresentada quando selecionada a opção de indexação de Documentos.

**01.** No menu principal, clique em ![](/download/attachments/234455757/%C3%ADcone-painel-de-controle.png?version=1&modificationDate=1750265225947&api=v2) **Painel de controle**.

**02**. Localize o agrupador **Parâmetros técnicos**.

**03**. Clique em ![](/download/attachments/234455757/%C3%ADcone-indexa%C3%A7%C3%A3o.png?version=1&modificationDate=1750265080410&api=v2) **Indexação**.

**04**. Assinale a opção **Documentos**.

**05.**Em **Forma de indexação dos documentos**, selecione o tipo de conteúdo dos documentos que deve ser considerado na indexação.

As opções disponíveis são:

- **Conteúdo**: quando assinalada, determina que deve ser feita uma indexação considerando os metadados (título, autor, etc.) e o conteúdo dos documentos. Após a execução desse tipo de indexação, os documentos são considerados "indexados" pela plataforma;

- **Metadados**: quando assinalada, determina que deve ser feita uma indexação considerando apenas os metadados (título, autor, etc.) dos documentos. Isso torna o procedimento mais rápido, porém retorna resultados menos relevantes durante as pesquisas, devido à ausência dos conteúdos atualizados dos documentos.Após a execução da indexação de Metadados, os documentos ainda serão considerados como "não indexados" pela plataforma para que, quando uma indexação de Conteúdo for realizada, os documentos que tiveram apenas os metadados indexados também tenham seus conteúdos considerados.

**06.**Ainda em**Forma de indexação dos documentos**, selecione quais documentos devem ser considerados na indexação.

As opções disponíveis são:

- **Documentos ainda não indexados**: considera apenas os documentos marcados como "não indexados" pela plataforma, ou seja, que ainda não tiveram o conteúdo indexado;

- **Todos os documentos:**indexa a versão ativa de todos os documentos. O tempo de execução depende da quantidade de documentos.

**07.** Clique em **Indexar**.

Fique atento!

Esta documentação é válida a partir da atualização **Voyager (2.0)**. Se você utiliza uma atualização anterior, ela pode conter informações diferentes das quais você vê na sua plataforma.


<!-- anchors: Plataforma❙Indexação-Falandodeindexação..., Plataforma❙Indexação-Realizarindexaçãobasico, Plataforma❙Indexação-Recriaroíndice, Plataforma❙Indexação-Indexardocumentos -->
