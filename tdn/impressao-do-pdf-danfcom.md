---
title: "Impressão do PDF DANFCOM"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=959029069"
scraped_at: "2026-03-09T05:38:16.876Z"
depth: 4
anchors: 11
child_links: 126
---

# Impressão do PDF DANFCOM

## ÍNDICE

1. **Visão Geral**
2. **Exemplo de utilização**
3. **Importante! / Perguntas Frequentes**

## 01. VISÃO GERAL

Foi disponibilizada a impressão do PDF DANFCOM via rotina SPEDNFE, após a autorização de uma NFCOM. 

**Pré-requisito:** TSS versão 3.0 ou superior. 

Aviso

Esta melhoria foi disponibilizada para impressão em modo **RETRATO**.

## 02. EXEMPLO DE UTILIZAÇÃO

1 - Impressão PDF DANFCOM

- [Passo 1](#)
- [Passo 2](#)

**Realizar um pedido de venda e preparar o documento de saída. **

Módulo Faturamento > Atualizações > Pedidos de Venda

![](/download/attachments/959029069/image-2025-6-24_7-46-22.png?version=1&modificationDate=1750763668200&api=v2)

**Realizar a transmissão do pedido de venda gerado **

Módulo Faturamento > Atualizações > Nf-e e Nfs-e > Nf-e Sefaz (Rotina SPEDNFE)

 - Selecione a opção NFCom

![](/download/attachments/959029069/image-2025-6-24_7-50-37.png?version=1&modificationDate=1750763667993&api=v2)

 - Transmitir

![](/download/attachments/959029069/image-2025-6-24_7-54-42.png?version=1&modificationDate=1750763667917&api=v2)

 - Monitorar

![](/download/attachments/959029069/image-2025-6-24_7-55-13.png?version=1&modificationDate=1750763667837&api=v2)

![](/download/attachments/959029069/image-2025-6-24_7-55-33.png?version=1&modificationDate=1750763667760&api=v2)

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)

**Realizar a impressão do DANFCOM. **

Módulo Faturamento > Atualizações > Nf-e e Nfs-e > Nf-e Sefaz (Rotina SPEDNFE)

![](/download/attachments/959029069/image-2025-6-24_7-56-38.png?version=1&modificationDate=1750763667697&api=v2)

**Realizar a impressão do pedido de venda gerado **

Módulo Faturamento > Atualizações > Nf-e e Nfs-e > Nf-e Sefaz (Rotina SPEDNFE)

 1. Escolher o tipo de impressão sendo PDF ou SPOOL de impressão.

![](/download/attachments/959029069/image-2025-6-24_7-58-36.png?version=1&modificationDate=1750763667610&api=v2)

2. Informar os parâmetros para localizar a nota.

![](/download/attachments/959029069/image-2025-6-24_7-59-4.png?version=1&modificationDate=1750763667543&api=v2)

3 - Escolher o diretório de Impressão.

![](/download/attachments/959029069/image-2025-6-24_7-59-38.png?version=1&modificationDate=1750763667397&api=v2)

**Será gerado um arquivo .PDF com o DANFCOM filtrado.**

****

## 03. IMPORTANTE! PERGUNTAS FREQUENTES (FAQ)

- **Parâmetro MV_IMPDIR**

**     Para NFCom não será considerado, as informações do preenchimento do PDF serão coletados do XML ÚNICO e dados de autorização da NFCom.**

- **Atualização**

Para atualizar o ambiente do Protheus é necessário a atualização da última expedição contínua ou aplicação do pacote da issue DSERTSS1-19539


<!-- anchors: ImpressãodoPDFDANFCOM-ÍNDICE, ImpressãodoPDFDANFCOM-01.VISÃOGERAL, ImpressãodoPDFDANFCOM-02.EXEMPLODEUTILIZAÇÃO, danfe_ERP, danfe_ERP-danfe_erp_1, danfe_ERP-danfe_erp_2, danfe_ERP, danfe_ERP-danfe_erp_1, danfe_ERP-danfe_erp_2, danfe_ERP-danfe_erp_3, ImpressãodoPDFDANFCOM-03.IMPORTANTE!PERGUNTASFREQUENTES(FAQ) -->
