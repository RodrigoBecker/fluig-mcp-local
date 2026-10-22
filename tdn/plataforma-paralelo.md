---
title: "Plataforma ❙ Paralelo"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=862123648"
scraped_at: "2026-03-09T05:17:09.677Z"
depth: 4
anchors: 2
child_links: 68
---

# Plataforma ❙ Paralelo

Consulte a documentação correta:

Esta documentação refere-se ao novo editor de processos da plataforma. Caso esteja utilizando o editor de processos atual, acesse [Configurar atividades e fluxos](/pages/viewpage.action?pageId=233763197). 

IDIOMA

# Falando de componente Paralelo...

---

![](/download/attachments/862123648/componente-paralelo.png?version=1&modificationDate=1723207837807&api=v2)O componente **Paralelo** representa o início de etapas paralelas no fluxo do processo.

Ao chegar nesse componente, a solicitação é bifurcada em várias saídas, permitindo a execução de atividades ou fluxos paralelos entre si. Nesse momento, são criadas duas ou mais atividades sem exibir a seleção de responsável. Sendo assim, se o mecanismo de atribuição de uma dessas atividades estiver definido para mais de um responsável – um grupo, por exemplo – ela é atribuída à primeira pessoa da lista de possíveis responsáveis.

No fim das etapas paralelas (atividades ou fluxos), é necessário adicionar um componente ***Join***, que indica o fim da execução paralela, voltando ao fluxo principal e único do processo. Todas as atividades e fluxos que estão depois do componente **Paralelo** e antes do componente ***Join*** são executados paralelamente.

![](/download/attachments/862123648/diagrama-completo-paralelo.png?version=5&modificationDate=1742579405140&api=v2)

EXEMPLO DE USO
Em um processo de **Organização de evento**como uma conferência, as etapas **Definir local**, **Definir palestrantes** e **Planejar logística** – como alimentação, equipamentos de áudio e vídeo e demais recursos necessários – podem ser feitas simultaneamente. Dessa forma, é necessário utilizar o componente **Paralelo** para indicar o início das etapas que serão **executadas em paralelo**.

![](/download/attachments/862123648/exemplo-paralelo.png?version=2&modificationDate=1737052333883&api=v2)

## Configurar componente Paralelo

---

****

        Your browser does not support the HTML5 video element

**01.** No [diagrama](/pages/viewpage.action?pageId=860252119) do processo, clique no componente **Paralelo** que deseja configurar.

**02.** Defina um título ou nome para o componente que representa o início de etapas paralelas no fluxo do processo.

O nome também pode ser alterado diretamente no componente, clicando sobre seu nome atual e depois em **Editar**![](/download/attachments/862123648/editar.png?version=1&modificationDate=1726489754187&api=v2)– localizado no lado direito.

EXEMPLO DE USO
Em um processo de **Desenvolvimento de software**, onde as etapas de **Back-end** e ***Front-end*** podem ser executadas simultaneamente, o componente poderia se chamar **Codificação**, indicando onde iniciam as etapas de desenvolvimento dos códigos que serão **executadas em paralelo**.

**03.** Clique em **Salvar rascunho** – localizado no lado direito da barra superior – para salvar as configurações feitas no componente **Paralelo**.

**04.** Na mensagem exibida, clique em **Ok, entendi**.

Fique atento!

Esta documentação é válida a partir da atualização** Voyager (2.0)**. Se você utiliza uma atualização anterior, ela pode conter informações diferentes das quais você vê na sua plataforma.


<!-- anchors: Plataforma❙Paralelo-FalandodecomponenteParalelo..., Plataforma❙Paralelo-ConfigurarcomponenteParalelo -->
