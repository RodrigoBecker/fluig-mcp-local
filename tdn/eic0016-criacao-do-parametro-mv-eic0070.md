---
title: "EIC0016_Criação do Parâmetro MV_EIC0070"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=419538879"
scraped_at: "2026-03-09T05:27:40.477Z"
depth: 4
anchors: 0
child_links: 192
---

# EIC0016_Criação do Parâmetro MV_EIC0070

Criação do Parâmetro MV_EIC0070

| Linha de Produto: | Protheus |
| --- | --- |
| Segmento: | Manufatura |
| Módulo: | Easy Import Control - SIGAEIC |
| Versões | P12 |
| Ocorrência: | Implementado parâmetro MV_EIC0070 que é responsável por definir se a despesa que compõe o II (base de imposto = SIM), mas não é paga pelo importador (base de custo = NAO), deve compor os valores nos relatórios da NF Primeira e de Custo Realizado. |
| Observações: | Criação de Parâmetros no arquivo SX6 – Parâmetros:Nome da variávelMV_EIC0070 |
| Tipo | L |
| Descrição | Desconsiderar despesas base de imposto SIM e base de custo NAO do valor da mercadoria da nota fiscal de importação. |
| Valor Padrão | .T. |

**PROCEDIMENTOS PARA UTILIZAÇÃO**

**Pre-Requsito:**

- Possuir um processo de importação em fase de desembaraço.
- Possuir uma despesa que seja (base imposto = SIM, base custo = NAO) associada ao desembaraço.
- Possuir Adições geradas no desembaraço.
- Parâmetro MV_EIC0016 (rateio de despesas como acréscimo) desabilitado.
- Parâmetro MV_TEM_DI habilitado ou falso

**Sequencia 001:**

1. Acesse Atualizações > Desembaraço > Receb. Importação;

2. Selecionar o processo e emitir a NF Primeira;

3. Com o parametro habilitado (MV_EIC0070 = .T.), verifique que a despesa que é base imposto = SIM e base custo = NÃO, nao deve estar sendo contabilizada no valor da mercadoria e, por consequencia, no Total Geral;

4. Gerar também o Custo Realizado;

5. Com o parametro habilitado (MV_EIC0070 = .T.), verifique que a despesa nao consta e portanto não compõe os valores do relatório;

6. Com o parametro desabilitado (MV_EIC0070 = .F.), verifique que a despesa no relatório da NF Primeira, é contabilizada no valor da mercadoria e, por consequência, no Total Geral. Já no relatório do Custo Realizado, a despesa constará como '105-DESPESAS BASE II (SEM CUSTO)' e irá compor os valores do relatório.

**INFORMAÇÕES TÉCNICAS**

| Tabelas Utilizadas | SX6 - Parâmetros |
| --- | --- |
| Funções Envolvidas | EICDI154 - Recebimento de ImportaçãoEICDI554 - Recebimento de Importação |

****

****
