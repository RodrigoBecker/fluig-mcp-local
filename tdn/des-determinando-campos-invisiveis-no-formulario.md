---
title: "DES - Determinando campos invisíveis no formulário"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=201735552"
scraped_at: "2026-03-09T04:45:27.033Z"
depth: 3
anchors: 11
child_links: 57
---

# DES - Determinando campos invisíveis no formulário

# Índice

# Plataforma

**Produto: **Fluig Studio

# Ocorrência

Método "setVisible=false" não executado na visualização do formulário através dos eventos de formulário (displayFields).

[?](#)

| ```````````` |
| --- |

[?](#)

| `function displayFields(form,customHTML){````form.setVisible(``"texto2"``,``false``);````form.setShowDisabledFields(``true``);``}` |
| --- |

# 

**Figura 1 - Criação de novo registro de formulário, contendo apenas o campo desejado visível para inserção.**

![](/download/attachments/201735552/Visualizacao.png?version=1&modificationDate=1442415176000&api=v2)

**Figura 2 - Visualização do formulário do novo registro inserido, exibindo também o campo que fora definido como invisível.**

# Causa

É uma característica do sistema mostrar todos os campos existentes no formulário, independente de métodos executados nos eventos. 

Estes eventos somente são considerados nas inclusões/modificações do formulário.

# Solução

Para setar a não visibilidade de determinado campo (setVisible=false), fora adequado para input type igual a "hidden" ao invés de "text" para o campo desejado. 

Desta forma, o campo permanecerá invisível para todas as etapas (inclusão/consulta e modificação).

[?](#)

| ```````````` |
| --- |

# Observações

Para o evento displayFields, existe o método setShowDisabledFields, pela qual, serve para renderizar a visualização do formulário em seu formato original com os campos desabilitados, porém este não inclui a visualização de campos invisíveis.

[?](#)

| `function displayFields(form,customHTML){````form.setShowDisabledFields(``true``);``}` |
| --- |

![](/download/attachments/201735552/TesteComShowDisabled.png?version=1&modificationDate=1442415175000&api=v2)

**Figura 3 - Visualização de formulário com o método setShowDisabledFields ativo.**

****

[?](#)

| `function displayFields(form,customHTML){` `}` |
| --- |

![](/download/attachments/201735552/TesteSemShowDisabled.png?version=1&modificationDate=1442415176000&api=v2)

**Figura 4 - Visualização de formulário sem o método setShowDisabledFields ativo.**


<!-- anchors: DESDeterminandocamposinvisíveisnoformulário-Índice, DESDeterminandocamposinvisíveisnoformulário-Plataforma, DESDeterminandocamposinvisíveisnoformulário-Ocorrência, highlighter_60938, highlighter_624628, DESDeterminandocamposinvisíveisnoformulário-Causa, DESDeterminandocamposinvisíveisnoformulário-Solução, highlighter_592468, DESDeterminandocamposinvisíveisnoformulário-Observações, highlighter_241574, highlighter_296845 -->
