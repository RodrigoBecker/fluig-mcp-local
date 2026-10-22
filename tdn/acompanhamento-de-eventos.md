---
title: "Acompanhamento de Eventos"
url: "https://tdn.totvs.com/display/public/fluig/Acompanhamento+de+Eventos"
scraped_at: "2026-03-09T02:58:48.060Z"
depth: 0
anchors: 1
child_links: 47
---

# Acompanhamento de Eventos

A partir deste recurso é possível acompanhar a execução dos eventos pelo novo componente *loading*. Com este acompanhamento, é possível apresentar mensagens para o usuário tomar conhecimento das rotinas que estão sendo executadas quando a solicitação é encaminhada para a próxima atividade. Este também pode ser muito útil para o desenvolvedor identificar pontos de baixa performance nos desenvolvimentos realizados sob a plataforma.

Para a utilização deste recurso, basta utilizar o trecho loading.setMessage(String message) na implementação do evento, conforme exemplo no trecho de código abaixo:

[?](#)

| 123456789 | `function` `validateForm(form){````loading.setMessage(``"Validando campos de formulário"``);``` ```if``(form.getValue(``'nome'``) ==``null` `|| form.getValue(``'nome'``) ==``''``) {````throw` `"Campo nome não está preenchido"``;````}``` ```loading.setMessage(``""``);``}` |
| --- | --- |

Assim, durante a execução deste evento, a mensagem definida na sua implementação será exibida na tela para o usuário acompanhar, conforme imagem abaixo:

![](/download/attachments/73082818/image2015-3-4%2015%3A57%3A23.png?version=1&modificationDate=1425495462000&api=v2)

Atenção

- Para o correto funcionamento deste método, o serviço do Real Time deve estar iniciado.
- Se não levar um tempo considerável no processamento após a atribuição da mensagem, não é possível visualizar o carregamento e a mensagem.
- Por padrão, todos os eventos executados são informados em tela, como por exemplo: "Executando validateForms", "Executando afterStateEntry" ou "Executando createDataset", mesmo se atribuída uma mensagem usando este método.

Veja o exemplo disponível no [repositório do fluig](https://git.fluig.com/projects/SAMPLES). Utilize o arquivo **workflow-loading**.


<!-- anchors: highlighter_484486 -->
