---
title: "My Approval ❙ Notificações ❙ Como funcionam as notificações push? ❙ Android e iOS"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=1035867938"
scraped_at: "2026-03-09T04:27:25.761Z"
depth: 3
anchors: 5
child_links: 28
---

# My Approval ❙ Notificações ❙ Como funcionam as notificações push? ❙ Android e iOS

![](/download/attachments/1035867938/flaticon-bell.png?version=2&modificationDate=1769010092873&api=v2)

---

O aplicativo **My Approval** possui um sistema de notificações *push* que informa sobre novas tarefas e solicitações de aprovação. Para que essa opção esteja disponível, é necessário que o administrador tenha [habilitado](https://tdn.totvs.com/pages/viewpage.action?pageId=234455600#Plataforma%E2%9D%99Notifica%C3%A7%C3%B5es-Configurarpadr%C3%A3odenotifica%C3%A7%C3%B5esparanovosusu%C3%A1rios) o envio de notificações *push* na empresa. Uma vez habilitada para uso na empresa, cada usuário pode [habilitar ou desabilitar](https://tdn.totvs.com/pages/releaseview.action?pageId=233763976#Plataforma%E2%9D%99Configura%C3%A7%C3%A3odenotifica%C3%A7%C3%B5es-Habilitar/Desabilitarorecebimentodenotifica%C3%A7%C3%B5es) o recebimento das notificações *push* de acordo com suas preferências.

Dica!

Veja o passo a passo das ações que podem ser feitas em notificações em [Como visualizar as notificações do aplicativo?](/pages/viewpage.action?pageId=616934903)

Existem algumas diferenças no funcionamento das notificações entre os sistemas operacionais Android e iOS, que são detalhadas a seguir.

Clique no sistema operacional desejado para ver os detalhes:

- [ANDROID](#)
- [IOS](#)

### Notificações push no Android

---

A seguir, entenda o que ocorre quando uma nova notificação *push* é recebida.

**Recebimento de nova notificação**

---

Sempre que uma nova notificação é recebida, o número de notificações não lidas é exibido no ícone principal do aplicativo – **badge de notificação**– diretamente na área onde ele aparece no seu dispositivo – como na tela inicial ou agrupador de aplicativos – se o *launcher* do Android suportar este recurso.

Importante!

   - Quando um usuário que está autenticado direciona uma solicitação para si mesmo, nenhuma notificação é enviada a ele.

   - A notificação *push* – bem como o incremento do contador no ícone principal/*badge* e o contador de notificações no menu flutuante do aplicativo – é recebida e exibida **somente** quando o aplicativo **My Approval** estiver em segundo plano ou fechado. Se o aplicativo estiver aberto e em uso, nenhuma notificação será recebida.

**Acesso à tela de notificações**

---

Ao abrir o aplicativo e acessar a tela de notificações, o contador é atualizado automaticamente.

**Leitura de notificações**

---

Ao clicar em uma notificação para vê-la, o contador do menu flutuante é automaticamente atualizado, refletindo apenas as notificações ainda não lidas. As notificações não lidas são destacadas nesta tela, facilitando a diferenciação em relação às já vistas.

**Comportamento do contador no ícone principal – badge – em caso de interação com notificação agrupada ou individual**

---

O contador de notificações exibido no ícone principal do aplicativo – **badge de notificação**– reflete o número exato de tarefas pendentes na área de notificações do **Android**.

 - **Ao clicar em uma notificação agrupada na bandeja do sistema**: o contador do *badge* é zerado (desaparece) e todas as notificações do My Approval são removidas da bandeja de notificações do sistema Android, mesmo que o usuário não tenha aberto o aplicativo. O contador de notificações dentro do menu flutuante do aplicativo permanece inalterado até que o usuário acesse a tela de notificações.

 - **Ao clicar em uma notificação individual na bandeja do sistema**: somente aquela notificação específica é removida da bandeja do sistema. O contador do *badge* é zerado (desaparece) do sistema Android, mesmo que o usuário não tenha aberto o aplicativo. O contador de notificações dentro do menu flutuante do aplicativo permanece inalterado até que o usuário acesse a tela de notificações.

 - **Retorno do contador no badge**: sempre que uma nova notificação for recebida, o contador volta a ser exibido no ícone principal – *badge* – mostrando a soma total das notificações não lidas existentes na bandeja do sistema.

**Observação sobre o contador – badge – no Android**

---

Diferentemente do comportamento observado no sistema iOS, o contador exibido no ícone principal do aplicativo – **badge de notificação** – no Android **não reflete** a quantidade total de notificações não lidas dentro do menu flutuante do aplicativo **My Approval**. Em vez disso, o *badge* é sincronizado diretamente com o número de notificações pendentes visíveis na bandeja de notificações do sistema operacional Android.

Portanto, o *badge* será zerado (desaparecerá) quando todas as notificações do **My Approval** forem removidas da bandeja de notificações do sistema, por exemplo, ao clicar em uma notificação agrupada ou individual na bandeja ou ao descartá-las da bandeja, mesmo que ainda existam tarefas não lidas disponíveis dentro da tela de notificações do aplicativo.

**Permissão para receber notificações**

---

Certifique-se de que as permissões de notificação *push* estão [ativadas](https://tdn.totvs.com/pages/viewpage.action?pageId=234455600#Plataforma%E2%9D%99Notifica%C3%A7%C3%B5es-Configurarpadr%C3%A3odenotifica%C3%A7%C3%B5esparanovosusu%C3%A1rios) nas configurações do TOTVS Fluig e em seu dispositivo.

EXEMPLO DAS CONFIGURAÇÕES NO TOTVS FLUIG

![](/download/attachments/1035867938/push-ativada.png?version=1&modificationDate=1769010092433&api=v2)

**Comportamento ao negar permissão**

---

Se a permissão de notificações for negada ao ser solicitada pelo aplicativo, o **My Approval** não solicitará a permissão novamente e, consequentemente, nenhuma notificação *push* será recebida. Para reverter isso e começar a receber notificações, é necessário habilitar a permissão manualmente nas configurações do aplicativo no seu dispositivo.

EXEMPLO DAS CONFIGURAÇÕES NO ANDROID

![](/download/attachments/1035867938/permitir-notifica%C3%A7%C3%B5es.png?version=5&modificationDate=1769010092510&api=v2)

Ao acessar o aplicativo pela primeira vez ou caso as notificações não tenham sido habilitadas ainda, a permissão será solicitada.

![](/download/attachments/1035867938/notifica%C3%A7%C3%B5es-permitidas.png?version=1&modificationDate=1769010092590&api=v2)

Tela do sistema indicando as configurações de notificações habilitadas.

### Notificações push no iOS

---

A seguir, entenda o que ocorre quando uma nova notificação *push* é recebida.

**Recebimento de nova notificação**

---

Sempre que uma nova notificação é recebida, o número de notificações não lidas é exibido no ícone principal do aplicativo, diretamente na área onde ele aparece no seu dispositivo – como na tela inicial ou agrupador de aplicativos.

Importante!

Quando um usuário que está autenticado direciona uma solicitação para si mesmo, nenhuma notificação é enviada a ele.

**Acesso à tela de notificações**

---

Ao abrir o aplicativo e acessar a tela de notificações, o contador permanece o mesmo, a menos que você interaja com as notificações.

**Leitura de notificações**

---

Ao clicar em uma notificação para vê-la, o contador do menu flutuante é automaticamente atualizado, refletindo apenas as notificações ainda não lidas. As notificações não lidas são destacadas nesta tela, facilitando a diferenciação em relação às já vistas.

**Mudança na exibição do contador**

---

Depois da primeira interação com o aplicativo, o contador deixa de ser exibido no ícone principal e passa a aparecer somente no ícone localizado dentro do menu flutuante de acesso à tela de notificações. Sempre que uma nova notificação for recebida, o contador volta a ser exibido, mostrando a soma total das notificações não lidas.

EXEMPLO
Se o contador no ícone do aplicativo foi zerado, mas ainda existem **200** notificações não lidas na tela de notificações, ao receber uma nova notificação, o contador será exibido novamente, indicando **201** notificações – as **200** já existentes mais a **nova**.

O contador de notificações no aplicativo **My Approval** é zerado apenas quando **todas** as notificações disponíveis na tela de notificações são lidas. Para isso, é necessário abrir cada notificação individualmente ou **Marcar como lida** por meio do ícone de ações disponível em cada item da lista. 

**Permissão para receber notificações**

---

Certifique-se de que as permissões de notificação *push* estão [ativadas](https://tdn.totvs.com/pages/viewpage.action?pageId=234455600#Plataforma%E2%9D%99Notifica%C3%A7%C3%B5es-Configurarpadr%C3%A3odenotifica%C3%A7%C3%B5esparanovosusu%C3%A1rios) nas configurações do TOTVS Fluig e em seu dispositivo. É possível desativar notificações de erro ou de seleção de usuário durante movimentações diretamente nas configurações do aplicativo no seu dispositivo.

EXEMPLO DAS CONFIGURAÇÕES NO TOTVS FLUIG

![](/download/attachments/1035867938/push-ativada.png?version=1&modificationDate=1769010092433&api=v2)

**Exclusão de notificações**

---

Também é possível excluir notificações utilizando o ícone de ações disponível em cada item da lista. Basta clicar sobre ele e selecionar a opção **Excluir notificação**.

**Ordenação das notificações**

---

As notificações são exibidas em ordem cronológica, da mais recente para a mais antiga. As não lidas aparecem primeiro, em destaque.

**Atualização do contador após leitura**

---

O contador pode levar alguns segundos para ser atualizado após a leitura ou exclusão de notificações. Esse comportamento é normal e ocorre por sincronização com o *backend*.


<!-- anchors: notificações, notificações-1, MyApproval❙Notificações❙Comofuncionamasnotificaçõespush?❙AndroideiOS-NotificaçõespushnoAndroid, notificações-2, MyApproval❙Notificações❙Comofuncionamasnotificaçõespush?❙AndroideiOS-NotificaçõespushnoiOS -->
