---
title: "BPM 030 - Porque é exibida uma mensagem de erro ao editar um processo ou formulário no fluig?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=235336157"
scraped_at: "2026-03-09T03:53:23.890Z"
depth: 2
anchors: 4
child_links: 131
---

# BPM 030 - Porque é exibida uma mensagem de erro ao editar um processo ou formulário no fluig?

# Índice

# Plataforma

**Produto:  **fluig

**Versão: **Todas as versões

# Ocorrência

Mensagem de erro ao editar um processo ou formulário no fluig.

# Solução

Essa mensagem é padrão do produto. Processos e formulários criados e exportados através do fluig Studio/Eclipse e utilizam BPMN Estendido (BPMN 2.0) por padrão, por isso não podem ser editados no modelador web do fluig.

Isso acontece porque o BPMN 2.0 possui recursos de desenvolvimento de processos, datasets e formulários mais avançados que não estão disponíveis na web e seriam perdidos caso a edição fosse permitida.

****

**Figura 1 - Mensagem de erro.**


<!-- anchors: BPM030Porqueéexibidaumamensagemdeerroaoeditarumprocessoouformulárionofluig?-Índice, BPM030Porqueéexibidaumamensagemdeerroaoeditarumprocessoouformulárionofluig?-Plataforma, BPM030Porqueéexibidaumamensagemdeerroaoeditarumprocessoouformulárionofluig?-Ocorrência, BPM030Porqueéexibidaumamensagemdeerroaoeditarumprocessoouformulárionofluig?-Solução -->
