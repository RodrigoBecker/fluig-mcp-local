---
title: "Plataforma ❙ Join"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=864352238"
scraped_at: "2026-03-09T05:17:14.028Z"
depth: 4
anchors: 2
child_links: 69
---

# Plataforma ❙ Join

Consulte a documentação correta:

Esta documentação refere-se ao novo editor de processos da plataforma. Caso esteja utilizando o editor de processos atual, acesse [Configurar atividades e fluxos](/pages/viewpage.action?pageId=233763197). 

IDIOMA

# Falando de componente Join...

---

![](/download/attachments/864352238/componente-join.png?version=1&modificationDate=1724699858680&api=v2) O componente ***Join*** indica o fim do paralelismo no fluxo do processo, ou seja, o fim de etapas paralelas (atividades ou fluxos), retornando para o fluxo principal e único.

Esse componente, obrigatoriamente, deve ser utilizado no final de atividades e fluxos paralelos iniciados por um componente **Paralelo**.

Quando ainda existem etapas paralelas pendentes, a solicitação permanece posicionada no componente **Join** do processo até que todas elas sejam concluídas. Quando todas as etapas paralelas (atividades ou fluxos) são concluídas, a solicitação é enviada automaticamente para a próxima etapa.

Se o componente **Join** for relacionado a uma etapa que não possui mecanismo de atribuição definido, a solicitação é enviada para a primeira pessoa encontrada na lista de pessoas com [cadastro](/pages/viewpage.action?pageId=234455411) ativo na plataforma em ordem alfabética, mesmo que essa pessoa não tenha nenhuma participação ou envolvimento no processo em questão.

EXEMPLO
Na plataforma existem as seguintes pessoas cadastradas e ativas no recurso [Usuários](/pages/viewpage.action?pageId=234455411) do Painel de controle**1**:

- Angelina Reek
- Alonso Cunha
- Francisco Vieira
- Poliana Santana
- Adelina da Costa

Neste caso, a solicitação será enviada automaticamente para a Adelina da Costa, mesmo que ela tenha sido a última pessoa a ser cadastrada na plataforma, visto que se a lista de pessoas for colocada em ordem alfabética, o seu nome será o primeiro da lista.

**1** → Os nomes listados nesse exemplo são fictícios e meramente ilustrativos.

******

EXEMPLO DE USO
Em um processo de **Organização de evento **como uma conferência, onde as etapas **Definir local**, **Definir palestrantes** e **Planejar logística** – como alimentação, equipamentos de áudio e vídeo e demais recursos necessários – foram executadas simultaneamente, é necessário utilizar o componente ***Join*** para indicar o fim das etapas **executadas em paralelo**, fazendo com que o processo retorne ao fluxo principal e siga para a próxima etapa.

![](/download/attachments/864352238/exemplo-join.png?version=2&modificationDate=1737052536833&api=v2)

## Configurar componente Join

---

****

        Your browser does not support the HTML5 video element

**01.** No [diagrama](/pages/viewpage.action?pageId=860252119) do processo, clique no componente **Join** que deseja configurar.

**02.** Defina um título ou nome para o componente que representa o fim das etapas paralelas no fluxo do processo.

O nome também pode ser alterado diretamente no componente, clicando sobre seu nome atual e depois em **Editar**![](/download/attachments/864352238/editar.png?version=1&modificationDate=1726490301047&api=v2)– localizado no lado direito.

EXEMPLO DE USO
Em um processo de **Desenvolvimento de software**, onde as etapas de **Back-end** e ***Front-end*** foram executadas simultaneamente, o componente poderia se chamar **Codificação concluída**, indicando o fim das etapas de desenvolvimento dos códigos que foram **executadas em paralelo**.

**03.** Clique em **Salvar rascunho** – localizado no lado direito da barra superior – para salvar as configurações feitas no componente ***Join***.

**04.** Na mensagem exibida, clique em **Ok, entendi**.

Fique atento!

Esta documentação é válida a partir da atualização** Voyager (2.0)**. Se você utiliza uma atualização anterior, ela pode conter informações diferentes das quais você vê na sua plataforma.


<!-- anchors: Plataforma❙Join-FalandodecomponenteJoin..., Plataforma❙Join-ConfigurarcomponenteJoin -->
