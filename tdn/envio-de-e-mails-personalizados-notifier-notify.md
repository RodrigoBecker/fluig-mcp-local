---
title: "Envio de e-mails personalizados (notifier.notify)"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=852915615"
scraped_at: "2026-03-09T04:55:03.484Z"
depth: 3
anchors: 19
child_links: 56
---

# Envio de e-mails personalizados (notifier.notify)

# Índice

# Introdução

Além dos diversos e-mails são disparados no Fluig, você pode [criar seus próprios templates de e-mail](/pages/viewpage.action?pageId=234455436) e envia-los através dos scripts de personalização pelo método **notifier.notify**

Para estes e-mails funcionarem, é necessário que tenha sido feita a [configuração de envio de e-mail](https://tdn.totvs.com/x/CAZbDw).

# Sintaxe

[?](#)

| `notifier.notify(sender, template, params, receivers, mimeType);``notifier.notify(sender, cardId, template, params, receivers, mimeType);` |
| --- |

# Parâmetros

## sender

Uma string contendo a matrícula (código do usuário) do usuário que será usado como remetente do e-mail caso não tenha sido configurado o remetente padrão na configuração de e-mail. Caso tenha sido configurado o remetente padrão, essa parâmetro será ignorado.

## cardId

O código do registro de formulário vinculado à este e-mail. Informar o código do formulário adiciona alguns parâmetros adicionais que podem ser usados nos templates de e-mail:

| Parâmetro | Descrição |
| --- | --- |
| Parâmetro | Descrição |
| WDK_CardContent | Conteúdo HTML do formulário (simula a visualização) |
| WDK_DocumentAuthor | Nome do Autor |
| WDK_DocumentComments | Comentário adicional |
| WDK_DocumentDescription | Descrição do formulário |
| WDK_DocumentIconImage | Imagem do ícone do formulário |
| WDK_DocumentNumber | Número do formulário |
| WDK_DocumentUpdatedDate | Data de atualização do formulário |
| WDK_DocumentVersion | Versão do formulário |
| WDK_DocumentViewLink | Link para acesso ao formulário |

## template

Uma string informando o código do template de e-mail que está sendo enviado. É o código usado no cadastro de template de e-mail.

## params

É um mapa de dados que permite incluir parâmetros para que sejam apresentados no e-mail. O nome dos parâmetros informados nesse mapa devem ser os mesmos que são utilizados dentro do arquivo de template.

Além dos parâmetros de uso no template, também pode ser adicionado a chave "subject" que será usado como assunto do e-mail. Caso não seja informado nada, o assunto do e-mail será "Fluig"

Por padrão, são adicionados dois parâmetros em todas as notificações e eles podem ser usados no template de e-mail:

| Parâmetro | Descrição |
| --- | --- |
| Parâmetro | Descrição |
| WDK_VirtualDir | Diretório Virtual |
| WDK_AdviceUser | Nome do colaborador remetente |

## receivers

Uma lista de strings com os códigos dos usuários para quem o e-mail será enviado ou os e-mails dos destinatários. Essa lista pode conter códigos de usuários e e-mails externos simultaneamente. 

## mimeType

Uma string que especifica o tipo de mídia do conteúdo do e-mail. Normalmente, usa-se "text/html" mas existe também a opção "text/plain".

# Exemplos

## Envio de e-mail configurando alguns parâmetros

[?](#)

| 123456789101112131415161718192021222324 | `try` `{````var` `matriculaRemetente =``"admin"``;````var` `templateCode =``"MeuTemplate"``;``` ```var` `parametros =``new` `java.util.HashMap();``` ```// Este parâmetro é obrigatório e representa o assunto do e-mail````parametros.put(``"subject"``,``"Consulte nossa documentação"``);` ```// Monta mapa com parâmetros do template````parametros.put(``"documentacao"``,``"https://tdn.totvs.com/display/fluig/"``);````parametros.put(``"descricao"``,``"Documentação Fluig"``);` ```// Monta lista de destinatários````var` `destinatarios =``new` `java.util.ArrayList();````destinatarios.add(``"matriculaUsuario"``);``// Matrícula do usuário````destinatarios.add(``"usuario@fluig.com"``);``// E-mail externo` ```//Envia e-mail````notifier.notify(matriculaRemetente, templateCode, parametros, destinatarios,``"text/html"``);` `}``catch``(e) {````log.info(e);``}` |
| --- | --- |

## Envio de e-mail informando um formulário

[?](#)

| 123456789101112131415161718 | `try` `{````var` `matriculaRemetente =``"admin"``;````var` `templateCode =``"MeuTemplate"``;````var` `codigoForm = 85;``` ```var` `parametros =``new` `java.util.HashMap();````parametros.put(``"subject"``,``"Informações sobre o cadastro"``);` ```// Monta lista de destinatários````var` `destinatarios =``new` `java.util.ArrayList();````destinatarios.add(``"matriculaUsuario"``);``// Matrícula do usuário` ```//Envia e-mail````notifier.notify(matriculaRemetente, codigoForm, templateCode, parametros, destinatarios,``"text/html"``);` `}``catch``(e) {````log.info(e);``}` |
| --- | --- |

# Pontos de atenção

## Envio de mensagens para e-mails externos

Para que o envio de e-mails externos seja concluído corretamente o servidor SMTP responsável deve estar habilitado para enviar e-mails para fora da intranet do seu servidor.

## Envio de dados de um formulário via solicitação

Pode-se usam os eventos de personalização do processo para envio de e-mails.

Porém, quando tenta enviar os dados de um formulário na primeira atividade do processo, você deve chamar a notificação no método beforeStateEntry ou afterStateEntry. Caso contrário, com o formulário ainda não foi criado na tabela de dados, esse envio não irá funcionar.


<!-- anchors: Enviodeemailspersonalizados(notifier.notify)-Índice, Enviodeemailspersonalizados(notifier.notify)-Introdução, Enviodeemailspersonalizados(notifier.notify)-Sintaxe, highlighter_727048, Enviodeemailspersonalizados(notifier.notify)-Parâmetros, Enviodeemailspersonalizados(notifier.notify)-sender, Enviodeemailspersonalizados(notifier.notify)-cardId, Enviodeemailspersonalizados(notifier.notify)-template, Enviodeemailspersonalizados(notifier.notify)-params, Enviodeemailspersonalizados(notifier.notify)-receivers, Enviodeemailspersonalizados(notifier.notify)-mimeType, Enviodeemailspersonalizados(notifier.notify)-Exemplos, Enviodeemailspersonalizados(notifier.notify)-Enviodee-mailconfigurandoalgunsparâmetros, highlighter_427379, Enviodeemailspersonalizados(notifier.notify)-Enviodee-mailinformandoumformulário, highlighter_448002, Enviodeemailspersonalizados(notifier.notify)-Pontosdeatenção, Enviodeemailspersonalizados(notifier.notify)-Enviodemensagensparae-mailsexternos, Enviodeemailspersonalizados(notifier.notify)-Enviodedadosdeumformulárioviasolicitação -->
