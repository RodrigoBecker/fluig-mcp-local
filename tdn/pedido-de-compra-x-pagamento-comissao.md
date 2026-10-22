---
title: "Pedido de Compra x Pagamento Comissão"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=700980662"
scraped_at: "2026-03-09T05:32:54.567Z"
depth: 4
anchors: 9
child_links: 123
---

# Pedido de Compra x Pagamento Comissão

## 

## CONTEÚDO

1. **Visão Geral**
2. **Exemplo de utilização**
3. **Tela PLSM152****Outras Ações / Ações relacionadas******

**Tela PLSM152**
1. **Principais Campos e Parâmetros******

**Tabelas utilizadas**
****

## 01. VISÃO GERAL

Esta rotina tem como finalidade gerar pedido de compra para comissão de vendedor.

## 02. EXEMPLO DE UTILIZAÇÃO

Configuração para gerar pedido de compra para pagamento de comissão.

1. No **Plano de Saúde** acesse **Atualizações/ Comercial/ Vendedores.**
2. Inclua um novo vendedor ou clique em alterar em um vendedor existente.
3. Clique no folder **"Pagamento de Comissão".**
4. Altere o campo **"Forma Pgto" (A3_GERASE2) **para **"P - Pedido de compra" **e clique em **Salvar**.
5. Faça o processo para gerar o lote de pagamento.
6. Faça o processo de Cálculo de programação 
7. Faça o processo de Cálculo de comissão.
8. Clique em gerar pagamento de comissão

Veja como funciona na prática:

![](/download/attachments/700980662/image2022-8-24_10-32-4.png?version=1&modificationDate=1661347924377&api=v2)

---

#### Gerando Pagamento de Comissão

1. No **Plano de Saúde** acesse **Atualizações/ Comercial/ Gerar Pagamento de Comissão.**
2. Preencha os parâmetros e clique em **OK.**

Veja como funciona na prática:

![](/download/attachments/700980662/image2022-8-24_10-36-32.png?version=1&modificationDate=1661348192453&api=v2)

---

#### Identificar Código do Pedido de Compras

1. No **Plano de Saúde** acesse **Atualizações > Comercial > Consulta de Comissão.**
2. O código estará visível na coluna** Ped. compra (BXQ_PEDCOM).**

****

**Atenção**Obrigatoriamente os campos** Produto (SB1) Genérico, Cond. Gener. Ped. Compra **e** Tes. Gener. Ped. Compra **devem ser preenchidos para gerar o pedido de compra, caso contrário a mensagem abaixo será exibida por falta de informação na geração do pedido de compra.

![](https://tdn.totvs.com/download/attachments/364917646/image2018-5-28_11-50-53.png?version=1&modificationDate=1527519053000&api=v2)

## 03. TELA PLSM152

**Outras Ações / Ações relacionadas**

| Ação | Descrição |
| --- | --- |
| Ação | Descrição |
| Pesquisar | Filtro de pesquisa de acordo com a descrição ou código de lançamento. |
| Excluir | Exclusão do registro. |
| Imprimir Browse | Impressão da listagem do Browse. |

## 04. TELA PLSM152

**Principais Campos e Parâmetros**

| Campo | Descrição |
| --- | --- |
| Campo | Descrição |
| Código | Código que identifica cada um dos vendedores da empresa. |
| Nome | Indica o nome do vendedor. |
| Forma Pgto | Informe ao sistema qual a interface a ser utilizada no fechamento da comissão. |

# IMPORTANTE!

Use esse box para destacar informações relevantes e/ou de destaque.

## 05. TABELAS UTILIZADAS

-


<!-- anchors: PedidodeCompraxPagamentoComissão-CONTEÚDO, PedidodeCompraxPagamentoComissão-01.VISÃOGERAL, PedidodeCompraxPagamentoComissão-02.EXEMPLODEUTILIZAÇÃO, PedidodeCompraxPagamentoComissão-GerandoPagamentodeComissão, PedidodeCompraxPagamentoComissão-IdentificarCódigodoPedidodeCompras, PedidodeCompraxPagamentoComissão-03.TELAPLSM152, PedidodeCompraxPagamentoComissão-04.TELAPLSM152, PedidodeCompraxPagamentoComissão-IMPORTANTE!, PedidodeCompraxPagamentoComissão-05.TABELASUTILIZADAS -->
