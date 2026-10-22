---
title: "Como o sistema compõe a data de vencimento de títulos PRE?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=397378456"
scraped_at: "2026-03-09T05:26:53.885Z"
depth: 4
anchors: 0
child_links: 192
---

# Como o sistema compõe a data de vencimento de títulos PRE?

Para compor a data de vencimento do título PRE (E2_VENCTO), o sistema irá verificar diversas informações do processo de embarque conforme abaixo:

1. Se o processo já possuir a data de entrega ou a previsão de entrega estiver preenchida, o vencimento será esta data.
2. Se o processo já possuir a data desembaraço ou a previsão de desembaraço preenchida, será esta data + lead time de trânsito (atualizações > tabelas > portos e aeroportos, Y9_LT_TRA).
3. Se o processo já possuir a data de atracação ou a previsão atracação, será esta data + lead time do desembaraço (Y9_LT_DES + lead time de entrega Y9_LT_TRA)
4. Se o processo já possuir a data de embarque ou a data prevista de embarque, a data será esta data + Transit Time (Atualizações > Cadastros > Vias de Transporte, YR_TRANS_T)

Importante

Para gerar títulos de previsão no processo de embarque e desembaraço (PRE), os parâmetros MV_EASYFIN e MV_EASYFDI devem estar ligados.

Importante

Em todos os casos acima será somado a "Qtde de Dias" da tabela de pré-cáclulo quando houver.
