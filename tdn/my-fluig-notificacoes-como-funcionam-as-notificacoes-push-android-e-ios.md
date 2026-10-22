---
title: "My Fluig ❙ Notificações ❙ Como funcionam as notificações push? ❙ Android e iOS"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=1035868784"
scraped_at: "2026-03-09T04:29:13.593Z"
depth: 3
anchors: 10
child_links: 46
---

# My Fluig ❙ Notificações ❙ Como funcionam as notificações push? ❙ Android e iOS

![](/download/attachments/1035868784/flaticon-bell.png?version=1&modificationDate=1769016049570&api=v2)

---

Entenda como é o comportamento esperado das notificações *push* no aplicativo My Fluig, como é feita a notificação sobre novos eventos, atividades e interações com atividades relacionadas com o usuário autenticado ou que estejam sob sua responsabilidade.

Dica!

Veja o passo a passo das ações que podem ser feitas em notificações em [Como ver as notificações do aplicativo?](https://tdn.totvs.com/pages/viewpage.action?pageId=1035868839)

# Gatilhos de notificação push

---

As notificações *push* são emitidas sempre que ocorre um evento que exija atenção ou ação do usuário ou que esteja sob sua responsabilidade.

Importante!

Quando um usuário que está autenticado direciona uma solicitação para si mesmo, nenhuma notificação é enviada a ele, com exceção para casos onde ocorre inconsistências na movimentação do fluxo.

# Conteúdo da notificação

---

O conteúdo da notificação é conciso e fornece informações essenciais para que o usuário identifique a necessidade de interação. Em alguns dispositivos não apresenta o ícone da notificação, apenas um círculo cinza. Os dados da notificação consistem no título sendo o nome da aplicação My Fluig e a descrição sendo uma breve mensagem relacionada ao evento ocorrido.

# Comportamento e interação

---

O comportamento da notificação *push* tem algumas variações dependendo do estado do aplicativo no dispositivo móvel.

## Dispositivo bloqueado/aplicativo fechado ou em segundo plano – Android/iOS

---

- **Ação**: a notificação aparece na tela de bloqueio e/ou Central de notificações.

- **Interação**: ao tocar na notificação, o aplicativo é aberto e o usuário é direcionado para a tela relacionada à solicitação mencionada.

## Aplicativo em primeiro plano – aberto e em uso

---

- **Ação**: nenhuma notificação é recebida, o contador de notificações no menu será atualizado assim que houver uma interação com ele.

- **Interação**: o *badge* ou contagem de notificações não será atualizado, pois não haverá nova notificação na bandeja do sistema.

Importante!

A notificação *push*do sistema – e o incremento do contador no ícone principal/*badge*– é recebida e exibida somente quando o aplicativo My Fluig estiver em segundo plano ou fechado.

# Gestão e consolidação de notificações

---

Veja a seguir alguns comportamentos das notificações.

## Agrupamento e exibição – Android

---

- **Agrupamento**: notificações múltiplas do My Fluig devem ser agrupadas pelo sistema operacional (iOS/Android) para evitar poluição visual.

- **Contagem – Badge – no ícone principal – Android:**
- o ícone do aplicativo exibe um *badge* numérico que representa o número exato de tarefas pendentes **visíveis na bandeja de notificações do Android** (se o *launcher* suportar).
- **Comportamento ao tocar em agrupada**: ao tocar em uma notificação agrupada na bandeja do sistema, o contador do *badge* é zerado (desaparece) e todas as notificações do My Fluig são removidas da bandeja de notificações do sistema Android, mesmo que o aplicativo não tenha sido aberto.
- **Comportamento ao tocar em individual**: ao tocar em uma notificação individual na bandeja do sistema, somente aquela notificação específica é removida da bandeja e o contador do *badge* é zerado (desaparece).
- **Retorno do contador**: sempre que uma nova notificação for recebida, o contador volta a ser exibido no ícone principal – *badge*– mostrando a soma total das notificações pendentes existentes na bandeja.Nota: Diferentemente do iOS, o *badge* no Android é sincronizado diretamente com as notificações da bandeja do sistema, **não** refletindo a quantidade total de notificações não lidas dentro da tela de notificações do aplicativo.

## Contagem e leitura de notificações no menu

---

- **Contador no menu flutuante**: o aplicativo possui um contador interno – *badge* de contagem em menu flutuante – que representa o total de **notificações**recebidas pelo usuário dentro do aplicativo.
EXEMPLONova tarefa, cancelamento de uma tarefa, novo complemento, movimentação de uma tarefa.
- **Acesso à tela de notificações**: ao abrir o aplicativo e acessar a tela de notificações, o contador interno é atualizado automaticamente.

- **Leitura de notificações**: ao tocar em uma notificação para vê-la dentro da tela de notificações, o contador interno é automaticamente atualizado, refletindo apenas as notificações ainda não lidas. As notificações não lidas são destacadas nesta tela.

- **Impacto da interação com notificações do sistema**: o contador de notificações dentro do menu flutuante do aplicativo permanece inalterado após a remoção pela bandeja do sistema – toque em agrupada/individual – até que o usuário acesse a tela de notificações.

- **Menu de opções na tela de notificações**: na barra da tela de notificações internas do aplicativo, existem as seguintes opções de gerenciamento em lote:

- **Marcar todas como lidas**: define todas as notificações não lidas como lidas, atualizando o contador interno – *badge* – para zero, mas sem removê-las da lista.

- **Excluir todas as notificações**:****remove permanentemente todas as notificações da lista e zera o contador interno – *badge*.

# Preferências do usuário – Configurações

---

O aplicativo respeita as configurações de notificação do sistema operacional e, idealmente, oferece opções para o usuário gerenciar o que deseja receber. Inicialmente, ao abrir o aplicativo pela primeira vez, será solicitada permissão para receber notificações. Caso não seja permitido, o aplicativo não receberá notificações e será necessário habilitar manualmente nas configurações do aplicativo nas configurações do sistema operacional.

![](/download/attachments/1035868784/permitir-notifica%C3%A7%C3%B5es-myfluig.png?version=1&modificationDate=1771959395803&api=v2)

## Permissões de notificação – Android

---

- **Permissão para receber**: certifique-se de que as permissões de notificação *push* estão [ativadas](https://tdn.totvs.com/pages/viewpage.action?pageId=234455600#Plataforma%E2%9D%99Notifica%C3%A7%C3%B5es-Configurarpadr%C3%A3odenotifica%C3%A7%C3%B5esparanovosusu%C3%A1rios) nas configurações do TOTVS Fluig e em seu dispositivo.

- **Comportamento ao negar**: caso a permissão de notificações seja negada ao ser solicitada pelo aplicativo – geralmente ao acessar o aplicativo pela primeira vez – o My Fluig não solicitará a permissão novamente. Consequentemente, nenhuma notificação *push* será recebida. Para reverter isso, é necessário habilitar a permissão manualmente nas configurações do aplicativo no dispositivo.
EXEMPLO**Configurações do Android** → **Aplicativos** → **My Fluig →** **Notificações**.


<!-- anchors: MyFluig❙Notificações❙Comofuncionamasnotificaçõespush?❙AndroideiOS-Gatilhosdenotificaçãopush, MyFluig❙Notificações❙Comofuncionamasnotificaçõespush?❙AndroideiOS-Conteúdodanotificação, MyFluig❙Notificações❙Comofuncionamasnotificaçõespush?❙AndroideiOS-Comportamentoeinteração, MyFluig❙Notificações❙Comofuncionamasnotificaçõespush?❙AndroideiOS-Dispositivobloqueado/aplicativofechadoouemsegundoplano–Android/iOS, MyFluig❙Notificações❙Comofuncionamasnotificaçõespush?❙AndroideiOS-Aplicativoemprimeiroplano–abertoeemuso, MyFluig❙Notificações❙Comofuncionamasnotificaçõespush?❙AndroideiOS-Gestãoeconsolidaçãodenotificações, MyFluig❙Notificações❙Comofuncionamasnotificaçõespush?❙AndroideiOS-Agrupamentoeexibição–Android, MyFluig❙Notificações❙Comofuncionamasnotificaçõespush?❙AndroideiOS-Contagemeleituradenotificaçõesnomenu, MyFluig❙Notificações❙Comofuncionamasnotificaçõespush?❙AndroideiOS-Preferênciasdousuário–Configurações, MyFluig❙Notificações❙Comofuncionamasnotificaçõespush?❙AndroideiOS-Permissõesdenotificação–Android -->
