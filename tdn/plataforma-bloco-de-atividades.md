---
title: "Plataforma ❙ Bloco de atividades"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=993699681"
scraped_at: "2026-03-09T05:06:30.810Z"
depth: 3
anchors: 5
child_links: 69
---

# Plataforma ❙ Bloco de atividades

Consulte a documentação correta:

Esta documentação refere-se ao novo editor de processos da plataforma. Caso esteja utilizando o editor de processos atual, acesse [Configurar atividades e fluxos](/pages/viewpage.action?pageId=233763197). 

# Falando de componente Bloco de atividades...

---

![](/download/attachments/993699681/componente-bloco-de-atividades.png?version=2&modificationDate=1762429480953&api=v2) O **Bloco de atividades** é um componente inovador que une – de forma simplificada e eficiente – os conceitos tradicionais de *Pool* e *Swimlane* em um único elemento visual.

Ao ser arrastado para o diagrama, o bloco de atividades já é exibido com sua estrutura completa, contemplando o *pool* – que passa a ser chamado de **Organização** – e a *swimlane* – que passa a ser chamada de **Subdivisão** – eliminando a necessidade de criar esses elementos separadamente, estando pronto para receber atividades, eventos e *gateways*.

Ainda que venha pré-configurado, o componente permite ajustar os nomes – da organização e das subdivisões – bem como adicionar ou remover subdivisões e aplicar uma cor diferente para cada uma, de acordo com a necessidade específica de modelagem de cada processo.

Esse componente permite manter a clareza visual e a organização do processo, proporcionando uma experiência de modelagem mais ágil e intuitiva, especialmente em processos complexos que envolvem múltiplas áreas ou funções.

![](/download/attachments/993699681/diagrama-completo-bloco-atividades.png?version=2&modificationDate=1762429286150&api=v2)

## Organização (Pool)

---

A Organização representa um participante principal em um processo de negócio, geralmente uma organização, um setor, um sistema, uma entidade que atua no fluxo ou pode, também, apenas representar o processo que foi modelado.

Pode ser utilizada como uma fronteira visual que delimita um processo completo ou uma parte do processo e para mostrar a interação entre diferentes participantes ou organizações.

Cada Organização contém um conjunto próprio de atividades e fluxos, podendo agrupar várias Subdivisões e representar tanto um processo interno (dentro de uma empresa) quanto processos externos (fornecedores, clientes, parceiros).

De forma geral, as Organizações são usadas para modelar processos colaborativos, onde há comunicação entre diferentes participantes.

## Subdivisão (Swimlane ou Raia)

---

A Subdivisão é uma divisão dentro da Organização e é usada para representar responsabilidades ou papéis diferentes dentro da mesma organização ou participante do processo. Ela pode representar diferentes departamentos ou setores que exercem diferentes atividades dentro de um processo.

A principal função das Subdivisões é organizar e categorizar as atividades do processo conforme os responsáveis por elas: departamentos, pessoas, sistemas, dentre outros.

De forma geral, as Subdivisões ajudam a visualizar claramente quem faz o quê no processo e facilita o entendimento do fluxo e das responsabilidades de cada de envolvido.

## Benefícios do componente unificado

---

Ao utilizar o componente Bloco de atividades, que une os conceitos de Organização (*Pool*) e Subdivisão (*Swimlane*), podemos destacar os seguintes benefícios:

- **redução no tempo de modelagem**: a unificação dos elementos facilita a construção inicial do diagrama;

- **melhor organização visual**: mantém a estrutura organizada e compreensível desde o início;

- **consistência no modelo**: garante a correta aplicação dos conceitos sem dispersão na criação dos elementos;

- **aumento da produtividade**: permite focar na modelagem das atividades e regras do processo, minimizando tarefas repetitivas.

EXEMPLO DE USO
Em um processo de **Pagamento de fornecedor**, poderíamos organizar as etapas em uma organização chamada **Gestão de pagamentos** e em quatro subdivisões chamadas **Solicitante**, **Gestão imediata**, **Financeiro** e **Contas a pagar**. Isso significa que, um solicitante irá abrir uma solicitação de pagamento que precisará passar pela aprovação do seu gestor imediato, em seguida pela aprovação do setor financeiro e, por fim, será concluída pelo setor de contas a pagar, que efetivará o pagamento ao fornecedor.

![](/download/attachments/993699681/exemplo-bloco-atividades.png?version=1&modificationDate=1760364008330&api=v2)

## Configurar componente Bloco de atividades

---

****

        Your browser does not support the HTML5 video element

**01.** No [diagrama](/pages/viewpage.action?pageId=860252119) do processo, clique no componente **Bloco de atividades** ![](/download/attachments/993699681/componente-bloco-de-atividades.png?version=2&modificationDate=1762429480953&api=v2) que deseja configurar.

**02.** Em **Organização**, insira o nome da organização ou participante do processo.

EXEMPLO DE USO
Em um processo de **Pagamento de fornecedor**, a organização pode representar todo o setor financeiro da empresa, sendo chamada de **Diretoria financeira**.

**03.** Se desejar, clique em **Cor** ![](/download/attachments/993699681/alterar-cor.png?version=1&modificationDate=1759495127420&api=v2) – localizado na parte superior – para alterar a cor de fundo da organização.

**04.** Clique em **Subdivisão** e insira um nome para a primeira subdivisão.

EXEMPLO DE USO
Se a subdivisão agrupará etapas que são executadas pela área financeira, ela pode ser chamada de **Contas a pagar**.

**05.** Se desejar, clique em **Cor** ![](/download/attachments/993699681/alterar-cor.png?version=1&modificationDate=1759495127420&api=v2) – localizado no lado direito – para alterar a cor de fundo da subdivisão.

**06.** Para adicionar mais subdivisões, clique em **Adicionar subdivisão acima** ![](/download/attachments/993699681/adicionar-acima.png?version=1&modificationDate=1759495650370&api=v2) ou **Adicionar subdivisão abaixo** ![](/download/attachments/993699681/adicionar-abaixo.png?version=1&modificationDate=1759495938017&api=v2) – localizados no lado direito de cada subdivisão.

**07.** Defina um nome e uma cor para cada subdivisão conforme desejado.

**08.** Se desejar excluir alguma subdivisão adicionada, clique em **Excluir** ![](/download/attachments/993699681/excluir.png?version=1&modificationDate=1759156833607&api=v2)– localizado no lado direito da subdivisão.

**09.** Organize as etapas do processo dentro de cada subdivisão conforme as responsabilidades.

**10.** Clique em **Salvar rascunho** – localizado no lado direito da barra superior – para salvar as configurações feitas no componente **Bloco de atividades**.

**11.** Na mensagem exibida, clique em **Ok, entendi**.

Fique atento!

Esta documentação é válida a partir da atualização **Voyager (2.0)**. Se você utiliza uma atualização anterior, ela pode conter informações diferentes das quais você vê na sua plataforma.


<!-- anchors: Plataforma❙Blocodeatividades-FalandodecomponenteBlocodeatividades..., Plataforma❙Blocodeatividades-Organização(Pool), Plataforma❙Blocodeatividades-Subdivisão(SwimlaneouRaia), Plataforma❙Blocodeatividades-Benefíciosdocomponenteunificado, Plataforma❙Blocodeatividades-ConfigurarcomponenteBlocodeatividades -->
