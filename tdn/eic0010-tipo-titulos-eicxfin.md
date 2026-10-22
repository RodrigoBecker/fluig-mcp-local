---
title: "EIC0010_Tipo_Títulos_EICxFIN"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=271187135"
scraped_at: "2026-03-09T05:27:23.344Z"
depth: 4
anchors: 4
child_links: 192
---

# EIC0010_Tipo_Títulos_EICxFIN

## 

## CONTEÚDO

1. **Visão Geral**
2. **Exemplo de utilização**
3. **Principais parâmetros******
4. **Tabelas utilizadas**

****

## 01. VISÃO GERAL

Este documento tem como objetivo explicar os procedimentos realizados no Easy Import Control (SIGAEIC) para a geração de títulos no Financeiro. Serão apresentados os tipos de títulos que são utilizados pelo módulo, as parametrizações necessárias para que haja a geração dos mesmos e possíveis cenários que podem ocorrer no sistema.

Os parâmetros definem como o sistema irá tratar as movimentações dos processos de Importação

**02. Exemplo de utilização**

         **TÍTULOS**

         São utilizados no SIGAEIC dois tipos de títulos, os provisórios e os reais. Para melhor compreensão serão apresentados todos os títulos que podem ser utilizados num processo de Importação e em que situação cada um é gerado.

        PR – Título provisório, este título é gerado na fase do PO e para pagamentos antecipados.
        PRE – Título provisório gerado na fase do embarque/desembaraço.
        PA – Título real para pagamentos antecipados do despachante ou do valor do processo.
        INV – Título real para pagamento da Invoice.
        NF – Título real para pagamento de despesas e impostos.

**03. Principais parâmetros**

****

| Parâmetro | Descrição |
| --- | --- |
| Parâmetro | Descrição |
| MV_EASY | Define se haverá ou não integração do módulo de Importação. |
| MV_EASYFIN | Define se haverá integração do módulo de Importação com o Financeiro. |
| MV_EASYFCA | Define se será gerado título provisório (PR) do câmbio quando há pagamento antecipado |
| MV_EASYFPO | Define se serão gerados títulos provisórios (PR) do valor do processo, das despesas e impostos na fase do PO |
| MV_EASYFDI | Define se serão gerados títulos provisórios (PRE) de Despesas e impostos na fase do Embarque |
| MV_PG_ANT | Define se o sistema gerará câmbio antecipados e títulos “PA” no Financeiro. |
| MV_EIC0003 | Define se o título provisório do valor antecipado do processo será ou não excluído em casos de liquidação de pagamento antecipado. (Este parâmetro não é padrão na versão P10, para criá-lo é necessário executar o update UI082956) |

# IMPORTANTE!

O parâmetro MV_EASYFPO não pode ser habilitado (S) se o MV_EASYFDI estiver desligado (F). 

# IMPORTANTE!

As provisões do EIC são apenas para provisão Financeira no fluxo de caixa e não contábil, desta forma, atualmente não são feitas as contabilizações dos mesmos. Os títulos provisórios são gerados sem que se tenha um documento efetivando a dívida, não tem invoice dos valores internacionais e não tem nota das despesas.


<!-- anchors: EIC0010_Tipo_Títulos_EICxFIN-CONTEÚDO, EIC0010_Tipo_Títulos_EICxFIN-01.VISÃOGERAL, EIC0010_Tipo_Títulos_EICxFIN-IMPORTANTE!, EIC0010_Tipo_Títulos_EICxFIN-IMPORTANTE!.1 -->
