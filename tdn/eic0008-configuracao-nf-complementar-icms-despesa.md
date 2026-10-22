---
title: "EIC0008_Configuração_NF_Complementar_ICMS_Despesa"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=269062130"
scraped_at: "2026-03-09T05:27:14.447Z"
depth: 4
anchors: 1
child_links: 192
---

# EIC0008_Configuração_NF_Complementar_ICMS_Despesa

# Assunto: Passo-a-passo de Nota Complementar de ICMS via SIGAEIC

| Produto: | Easy Import Control - SIGAEIC |
| --- | --- |
| Versões: | P11 e V12 |
| Ocorrência: | Como gerar uma NF de Complementar de ICMS para uma Despesa de Acessória |
| Ambiente: | Todos |
| Passo a passo: | Quando a despesa for complemento de ICMS, cadastrar da seguinte forma:- Base de custo = SIM- Base de imposto = NÃO- Base de ICMS = SIM- ICMS na NFT = SIM e informar o UF na aba ICMS UF.Existe um parâmetro que define se será calculado ICMS na nota complementar, o mesmo deve estar habilitado: MV_ICMSNFC.Para gerar a nota complementar, realizar o seguinte procedimento:- Acessar a rotina desembaraço -> Manutenção -> Posicionar no processo a ser gerada a nota complementar, clicar em ações relacionadas -> Despesa, informar a despesa base de custo e confirmar.- Acessar a rotina de Desembaraço -> Recebimento de Importação, posicionar no processo -> Clicar em ações relacionadas -> Complementar.  |
| Observações: | Importante, esse Passo-a-Passo é apenas para NF Complementar de ICMS com Despesa Acessória Vinculada, caso deseje apenas Gerar um Complemento de ICMS, clique aqui. |


<!-- anchors: EIC0008_Configuração_NF_Complementar_ICMS_Despesa-Assunto:Passo-a-passodeNotaComplementardeICMSviaSIGAEIC -->
