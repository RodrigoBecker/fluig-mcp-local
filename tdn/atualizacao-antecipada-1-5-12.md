---
title: "Atualização antecipada 1.5.12"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=268817141"
scraped_at: "2026-03-09T03:41:12.681Z"
depth: 2
anchors: 9
child_links: 43
---

# Atualização antecipada 1.5.12

Este documento contém um breve descritivo acerca das implementações e correções efetuadas.

- **Implementações**: são apresentadas todas as implementações e evoluções da plataforma contidas na atualização **1.5.12**.
- **Correções:** são apresentados todos os ajustes contidos na atualização **1.5.12**. Tais ajustes compreendem aprimoramento de performance e melhorias em processos já existentes.

 Informações detalhadas podem ser obtidas no **Help Online **e aqui mesmo no **http://dev.fluig.com/**.

**Os chamados solucionados em atualizações antecipadas são acumulativos, ou seja, todas as alterações realizadas nas liberações anteriores estarão disponíveis na última atualização.**

****

# Índice

# 

O que é? Como atualizar?

Para entender o processo de liberação de uma atualização antecipada e o procedimento para atualizar, acesse [Atualização fluig - Atualização antecipada (EP).](/pages/viewpage.action?pageId=73078235#Atualizaçãodaplataforma-Atualiza%C3%A7%C3%A3oantecipada(EP))

**

## Atualização antecipada #1

**Envio de e-mail customizado**

**Atualização oficial:** fluig 1.5.13

Agora, as notificações enviadas pela função notifier.notify serão enviadas assincronamente.

****

**Webdav com fluig em cluster**

**Atualização oficial:** fluig 1.5.13

Tratamento no webdav para ambientes em cluster com sobrecarga em uma instancia do fluig.

## Atualização antecipada #2

**Prazo de conclusão**

**Atualização oficial:** fluig 1.5.13

Foi resolvida situação que zerava o prazo de conclusão dos processos exportados pelo plugin do Eclipse. Para solucionar basta atualizar o seu plugin acessando o update site [http://update.fluig.com/](https://update.fluig.com/)

**Atividade inicial do tipo Timer**

**Atualização oficial:** fluig 1.5.13

As atividades depois de uma inicial Timer não eram encontradas por não estar passando o código de sequencia correto.

## Atualização antecipada #3

**Permissionamento de documentos no fluig mobile**

**Atualização oficial:** fluig 1.5.13

Correção no procedimento de verificação de permissões utilizado pelo aplicativo fluig Mobile para acessar a pasta privada Meus Documentos.

## Atualização antecipada #4 - Messaging

**Aproveite o fluig Messaging renovado**

Como buscamos que você tenha sempre o melhor para otimizar a sua produtividade, estamos trabalhando para atualizar o fluig Messaging de acordo com o *feedback* que recebemos.

Instalando a Atualização Antecipada #4 - Messaging no seu fluig, você e os usuários de sua empresa podem começar a usufruir das novidades que disponibilizamos nessa *release*:

- Status das Mensagens: Informa se a mensagem foi enviada, entregue e lida pelo destinatário
- Digitação: Mostra quando outra pessoa está digitando uma mensagem
- Definir imagem de um grupo: A inserção de imagem poderá ser feita durante a criação do grupo, não havendo mais a necessidade de criar o grupo e depois editá-lo
- Mais administradores: O administrador de um grupo poderá definir novos administradores
- Busca de conversas
- Silenciar conversas: desative notificações das conversas desejadas
- Mais opções de arquivos suportados
- Alertas em tempo real.

Consulte as documentações Sobre o fluig Messaging, Configuração fluig Messaging, Utilizando o fluig Messaging e Novidades de atualização do fluig Messaging para saber como começar a usar! ![(smile)](/s/5bn9pn/8804/xgjkrn/_/images/icons/emoticons/smile.svg)

Fique atento!

A partir desta atualização somente o envio de mensagens individuais e envio de mensagens em grupo estarão disponíveis no fluig Messaging - recursos de anotações em documentos e videoconferência ainda não estarão disponíveis. Não se preocupe, estamos trabalhando e em breve teremos novidades.

Possui grupos no fluig Messaging? Acesse a página Importar estrutura de conversas em grupo e saiba como replicar a estrutura desses grupos após a atualização.

Se você já possui o fluig Messaging habilitado, **será possível utilizá-lo até 15/01/2017**. Após esta data, será necessário aplicar a Atualização Antecipada #4 - Messaging (ou superior) para continuar interagindo com suas equipes de forma simples e ágil.

**Utilização do usuário autenticado em eventos globais**

**Atualização oficial:** fluig 1.5.13

Tratamento para utilização do método getNewAPIConsumerAsCurrentUser em eventos globais.

**Mensagem errônea em notificações**

**Atualização oficial: **fluig 1.5.13

A notificação de inclusão de anexos disparada pela plataforma quando o usuário adiciona um complemento em uma solicitação foi ajustada para que não seja enviada também uma notificação de inclusão de anexos desnecessária.

**Configurações de Visualização de Documentos**

**Atualização oficial:** fluig 1.5.13

Habilitada as opções 'utiliza visualizar interno' em todos os cenários e motor de renderização de PDF para situações sem fluig Viewer.

## Atualização antecipada #5

**Assinatura digital com usuário substituto**

**Atualização oficial: **fluig 1.5.13

Agora é possível utilizar assinatura digital com usuário substituto.

**Envio de notificações**

**Atualização oficial: **fluig 1.5.13

Tratamento para algumas notificações (responsável de atividade, por exemplo) que não estavam sendo enviadas.

**Ambientes com caminho do diretório "repository" alterado**

**Atualização oficial:** fluig 1.5.13

Tratamento para atualização de ambientes em que o caminho do diretório "repository" está diferente do padrão (diretório de instalação).

## Atualização antecipada #6

**Visualização dos anexos de processos pelo substituto de um usuário**

**Atualização oficial: **fluig 1.6.0

Agora no momento de resolver as permissões, é verificado se o usuário logado é um substituto, garantindo assim que as permissões sejam calculadas corretamente.

**Duplicidade de conversas no fluig Messaging**

**Atualização oficial: **fluig 1.5.13

Corrigida a situação em que ao reiniciar o fluig, as conversas do usuário são duplicadas.

**Conversas não são exibidas na listagem**

**Atualização oficial: **fluig 1.5.13

Corrigida a situação em que a listagem de conversas fica inconsistente quando o usuário cria uma conversa pelo aplicativo para Android.

## Atualização antecipada #7

**Erro ao assumir atividades de um papel como substituto.**

**Atualização oficial: **1.6.0

Corrigido problema na modelagem de processo com mecanismo de atribuição para um papel, tentando assumir com usuário substituto.

**Relatórios do LMS exibiam apenas o primeiro nome e o último nome dos usuários**

**Atualização oficial: **1.6.0

Serão exibidos os nomes completos dos usuários em todos os relatórios do LMS.

**Usuário substituto pelo mobile**

**Atualização oficial: **fluig 1.5.13

Pelo aplicativo móvel, um usuário substituto não estava conseguindo movimentar uma solicitação.

**Movimentação de solicitações com mecanismo customizado**

**Atualização oficial: **fluig 1.6.0

Não estava sendo possível avançar uma atividade onde o mecanismo da próxima atividade é customizado utilizando a função hAPI.

**Visualização de complementos da solicitação**

**Atualização oficial: **fluig 1.6.0

Quando um usuário que adicionou um anexo em uma solicitação e depois foi inativado, não estava sendo apresentado os complementos da solicitação.

**Mecanismo associativo com papéis**

**Atualização oficial: **fluig 1.6.0

Quando utilizado um mecanismo associativo com papéis, o filtro de usuário não estava funcionando

**Transferência de solicitações com mecanismo customizado**

**Atualização oficial: **fluig 1.6.0

Tratamento para resolver mecanismos de atribuição que utilize a hAPI na transferência de atividade.

**Erro ao corrigir questões dissertativas**

**Atualização oficial: **fluig 1.6.1

Alterado o recurso de correção de questões dissertativas para permitir efetuar o processo corretamente quando utilizado o banco de dados Oracle e, também, para exibir as inconsistências – caso ocorram – ao efetuar uma correção.

**Envio de Dados do fluig Analytics**

**Atualização Oficial:** fluig 1.6.1

Tratamento realizado no fluig Analytics para envio eficiente de dados para a GoodData.

**Evento Global afterCreateUser**

**Atualização Oficial:** fluig 1.6.1

Tratamento realizado no método getValue("WKUser") para retornar o valor correto (usuário logado) no evento global afterCreateUser. Desta forma retornará como valor o login do usuário responsável pela criação do usuário logado.


<!-- anchors: Atualizaçãoantecipada1.5.12-Índice, Atualizaçãoantecipada1.5.12-2, Atualizaçãoantecipada1.5.12-Atualizaçãoantecipada#1, Atualizaçãoantecipada1.5.12-Atualizaçãoantecipada#2, Atualizaçãoantecipada1.5.12-Atualizaçãoantecipada#3, Atualizaçãoantecipada1.5.12-Atualizaçãoantecipada#4-Messaging, Atualizaçãoantecipada1.5.12-Atualizaçãoantecipada#5, Atualizaçãoantecipada1.5.12-Atualizaçãoantecipada#6, Atualizaçãoantecipada1.5.12-Atualizaçãoantecipada#7 -->
