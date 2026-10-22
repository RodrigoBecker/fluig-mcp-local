---
title: "Processo de atualização de pedido de venda no Protheus"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=624102042"
scraped_at: "2026-03-09T03:59:59.210Z"
depth: 2
anchors: 5
child_links: 52
---

# Processo de atualização de pedido de venda no Protheus

# Índice

# Processo de atualização de pedido de venda no Protheus

---

Nesse exemplo, vamos utilizar um processo de atualização de pedido de venda no Protheus com as seguintes atividades: Início → Aprovar alteração pedido → Integração → Tratar situação → Fim.

Esse processo é iniciado quando o solicitante deseja efetuar alguma alteração no pedido de venda existente no Protheus. Para isso, ele faz as alterações desejadas em um formulário. Essas alterações são posteriormente aprovadas ou não. Em caso de aprovação, ocorre a atualização efetiva do pedido de venda.

## Componentes utilizados

---

Vamos exemplificar o uso dos seguintes componentes que são utilizados nesse processo:

- desenvolvimento de processo com formulário que permite a atualização de um pedido de venda no Protheus;
- pai x filho de produtos com *zoom*;
- validação de preenchimento de valores do pai x filho com *validateForm*;
- desenvolvimento de *dataset* que consulta *webservice* SOAP do Protheus para atualizar um pedido de venda;
- criar um *template* de *e-mail*;
- envio de *e-mail* com pedido – atividade de envio de *e-mail* ou via evento *notifier.notify*.

## Diagrama

---

Esse é o diagrama do processo que estamos utilizando como exemplo:

![](/download/attachments/624102042/atualizacao_pedido_venda.png?version=2&modificationDate=1623787103407&api=v2)

## Desenvolvimento

---

Os desenvolvimentos que foram necessários para criar esse processo estão disponíveis para visualização e *download*. Desta forma, você pode baixá-los, ajustar ao seu negócio ou as suas necessidades e utilizá-los nos processos do seu dia a dia!

****

**Clique aqui** para ver e baixar o código fonte dos desenvolvimentos desse processo.

Dica!

O arquivo **README.md** – existente no repositório – contém informações técnicas mais detalhadas. Ao longo dos próprios códigos fonte também existem várias explicações para auxiliar no entendimento e na utilização desse exemplo.


<!-- anchors: ProcessodeatualizaçãodepedidodevendanoProtheus-Índice, ProcessodeatualizaçãodepedidodevendanoProtheus-ProcessodeatualizaçãodepedidodevendanoProtheus, ProcessodeatualizaçãodepedidodevendanoProtheus-Componentesutilizados, ProcessodeatualizaçãodepedidodevendanoProtheus-Diagrama, ProcessodeatualizaçãodepedidodevendanoProtheus-Desenvolvimento -->
