---
title: "Interceptando e personalizando o e-mail padrão (onNotify)"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=852912430"
scraped_at: "2026-03-09T04:54:59.240Z"
depth: 3
anchors: 16
child_links: 51
---

# Interceptando e personalizando o e-mail padrão (onNotify)

# Índice

# Introdução

Diversos e-mails são disparados no Fluig, variando de notificações simples a alertas urgentes. O **onNotify** é um [evento global](/display/fluig/Desenvolvimento+de+Eventos) do Fluig que pode ser criado para interceptar notificações padrão do Fluig, permitindo alterações ou a geração de logs.

# Sintaxe

[?](#)

| `funcion onNotify(subject, receivers, template, params) {``}` |
| --- |

# Parâmetros

## subject

Uma lista de string que, quando adicionada algum item, modifica o assunto do e-mail para todos os destinatários. Apesar de ser uma lista, apenas o primeiro item da lista será considerado. Então, caso sejam adicionados dois assuntos, somente o primeiro item será usado.

## receivers

Uma lista de Strings com os e-mails dos destinatários. Também é possível adicionar outros e-mails, de usuários do sistema ou mesmo e-mails externos, caso seja necessário notificar uma pessoa que não tenho acesso ao sistema.

## template

Uma String contendo o código do template (ou tipo) de e-mail que está sendo enviado, permitindo que seja alterado apenas um tipo específico de e-mail. É recomendável que sempre seja verificado o código do template, para evitar que ocorram alterações em outros tipos de e-mail, que não necessitariam de personalização. Este parâmetro é fixo e alterações nele não mudaram o tipo de template a ser utilizado.

## params

É um mapa de dados que permite alterar/incluir parâmetros para que sejam apresentados no e-mail. O nome dos parâmetros informados nesse mapa devem ser os mesmos que são utilizados dentro do arquivo de template.

# Exemplos

## Alterando o Assunto quando o e-mail for do tipo "Tarefa sob sua responsabilidade em atraso"

[?](#)

| 123456 | `function` `onNotify(subject, receivers, template, params) {````if` `(template.equals(``"TPLOVERDUE_TASK_USER_RESPONSIBLE"``) !=``null``) {````log.info(``"Modificando o assunto do e-mail para 'URGENTE: Uma tarefa que você é responsável está atrasada');````subject.add("``URGENTE: Uma tarefa que você é responsável está atrasada");````}``}` |
| --- | --- |

## Adicionando um destinatário quando o e-mail for do tipo "Notificação de nova atividade sob sua gerência"

[?](#)

| 123456 | `function` `onNotify(subject, receivers, template, params) {````if` `(template.equals(``"TPLPROCESS_NEW_STATE_TO_MANAGER"``) !=``null``) {````log.info(``"Adicionando o e-mail 'usuario@dominio.com' a lista de destinatários da notificação de 'Nova atividade sob sua gerência'"``);````receivers.add(``"usuario@dominio.com"``);````}``}` |
| --- | --- |

## Adicionando um parâmetro o e-mail for do tipo "Solicitação cancelada"

[?](#)

| 123456 | `function` `onNotify(subject, receivers, template, params) {````if` `(template.equals(``"TPLPROCESS_CANCELED"``) !=``null``) {````log.info(``"Adicionando o parâmetro 'MEU_CAMPO' com o valor 'VALOR'"``);````params.put(``"MEU_CAMPO"``,``"VALOR"``);````}``}` |
| --- | --- |


<!-- anchors: Interceptandoepersonalizandooemailpadrão(onNotify)-Índice, Interceptandoepersonalizandooemailpadrão(onNotify)-Introdução, Interceptandoepersonalizandooemailpadrão(onNotify)-Sintaxe, highlighter_696183, Interceptandoepersonalizandooemailpadrão(onNotify)-Parâmetros, Interceptandoepersonalizandooemailpadrão(onNotify)-subject, Interceptandoepersonalizandooemailpadrão(onNotify)-receivers, Interceptandoepersonalizandooemailpadrão(onNotify)-template, Interceptandoepersonalizandooemailpadrão(onNotify)-params, Interceptandoepersonalizandooemailpadrão(onNotify)-Exemplos, Interceptandoepersonalizandooemailpadrão(onNotify)-AlterandooAssuntoquandooe-mailfordotipo"Tarefasobsuaresponsabilidadeematraso", highlighter_836935, Interceptandoepersonalizandooemailpadrão(onNotify)-Adicionandoumdestinatárioquandooe-mailfordotipo"Notificaçãodenovaatividadesobsuagerência", highlighter_392353, Interceptandoepersonalizandooemailpadrão(onNotify)-Adicionandoumparâmetrooe-mailfordotipo"Solicitaçãocancelada", highlighter_162134 -->
