---
title: "BPM 103 - Problema na Configuração de Processos no Chrome com Windows 8 e telas não-sensíveis ao toque"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=189314500"
scraped_at: "2026-03-09T03:58:21.661Z"
depth: 2
anchors: 6
child_links: 134
---

# BPM 103 - Problema na Configuração de Processos no Chrome com Windows 8 e telas não-sensíveis ao toque

# Índice

# Plataforma

**Produto:  **Fluig

# Ocorrência

Tela de Configuração de Processos não funciona corretamente com Google Chrome no Windows 8 em computadores que **não possuem** touchscreen (telas sensíveis).

# Causa

Por padrão, o modo touchscreen do Chrome é configurado para "Automático". Porém, em computadores com Windows 8 que não possuem touchscreen, esta configuração pode interferir no funcionamento da tela de Configuração de Processos.

# Solução

- Digite na barra de endereços do Chrome > chrome://flags/#touch-events.

- Altere a opção "Ativar eventos de toque" para Desativado.

- Reinicie o Chrome.

![](/download/attachments/189314500/chrome_desativar_eventos_toque.png?version=1&modificationDate=1434380223000&api=v2)

# Observações

Lembrando que na [Matriz de Portabilidade](/display/fluig/Matriz+de+Portabilidade) é informado que computadores que**possuam telas sensíveis ao toque** e rodam Windows 8 **não são compatíveis** com Google Chrome.


<!-- anchors: BPM103ProblemanaConfiguraçãodeProcessosnoChromecomWindows8etelasnãosensíveisaotoque-Índice, BPM103ProblemanaConfiguraçãodeProcessosnoChromecomWindows8etelasnãosensíveisaotoque-Plataforma, BPM103ProblemanaConfiguraçãodeProcessosnoChromecomWindows8etelasnãosensíveisaotoque-Ocorrência, BPM103ProblemanaConfiguraçãodeProcessosnoChromecomWindows8etelasnãosensíveisaotoque-Causa, BPM103ProblemanaConfiguraçãodeProcessosnoChromecomWindows8etelasnãosensíveisaotoque-Solução, BPM103ProblemanaConfiguraçãodeProcessosnoChromecomWindows8etelasnãosensíveisaotoque-Observações -->
