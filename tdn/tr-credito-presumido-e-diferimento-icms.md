---
title: "TR-Crédito Presumido e Diferimento ICMS"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=397378743"
scraped_at: "2026-03-09T05:28:22.991Z"
depth: 4
anchors: 0
child_links: 192
---

# TR-Crédito Presumido e Diferimento ICMS

| Produto | Microsiga Protheus Easy Import Control  |
| --- | --- |
| Versão | P11 |
| Necessidade da FAQ | A FAQ tem como objetivo disponibilizar para os analistas e clientes informações importantes, que possam contribuir no entendimento e funcionamento do Crédito Presumido e Diferimento de ICMS. |
| Como configurar CFO - Crédito Presumido | Os créditos presumidos se referem a um crédito que não corresponde ao real se fosse seguido o sistema regular de créditos e débitos.O contribuinte pode optar em substituir todos os créditos, passíveis de serem apropriados em razão da entrada de mercadorias ou bem, por um determinado percentual relativo ao imposto. Exemplo:Base de cálculo: R$ 12.000,00 Alíquota aplicada: 12% ICMS = R$ 12.000,00 x 12% = R$ 1.440,00 Crédito presumido: 20% sobre o ICMS devido = R$ 288,00 Valor a recolher = R$ 1.152,00 Para a correta utilização é necessário que o CFO esteja configurado e apropriado ao item, segue abaixo exemplo de configuração:No Easy Import Control (SIGAEIC), acesse Atualizações / Tabelas / CFO;Selecione o CFO que deseja realizar a manutenção e clique no botão “Alterar”.Localize a operação que deseja alterar e preencha os campos “% Cred Pres” e “% Max Cred. PR” de acordo com o percentual de crédito presumido que deseja aplicar (conforme abaixo). |
| Como configurar CFO - Diferimento ICMS | No diferimento, os momentos de lançamento e recolhimento do imposto são adiados e a responsabilidade é transferida, ou seja, quer dizer que o imposto não será cobrado nesta operação e sim na próxima.Exemplo: Uma empresa “A” vende um produto com ICMS diferido para a empresa “B”. Nesta operação não há cobrança de ICMS. O ICMS fica diferido para a próxima operação. Quando a empresa “B” vender este mesmo produto, então será cobrado à parcela referente ao diferimento do ICMS.Exemplo:Base de cálculo: R$ 1.000,00 Alíquota aplicada: 18% Percentual de diferimento: 33.33%R$ 1.000,00 x 18% = R$ 180,00R$ 180,00 x 33,33% = R$ 59,99 (parcela diferida)R$ 180,00 – R$ 59,99 = R$ 120,01 (parcela a pagar) Para a correta utilização é necessário que o CFO esteja configurado e apropriado ao item, segue abaixo exemplo de configuração:No Easy Import Control (SIGAEIC), acesse Atualizações / Tabelas / CFO;Selecione o CFO que deseja realizar a manutenção e clique no botão “Alterar”;Para o cálculo do diferimento, é necessário que o % de diferimento esteja informado no CFO e o mínimo do ICMS a recolher no campo “% Min. ICMS Rec.” (conforme abaixo). |
| Crédito Presumido X Diferimento de ICMS | Caso a operação tenha diferimento de ICMS e também crédito presumido, os percentuais de diferimento e presumido devem estar preenchidos no mesmo CFO, e o cálculo será realizado da seguinte maneira: Vl crédito presumido (A) = ICMS devido – Vl diferimento (se houver) * (% crédito presumido/100)Vl crédito presumido (B) = base ICMS * (% max. crédito presumido/100)Vl crédito presumido = o menor valor apurado dos cálculos acima (A ou B). |
