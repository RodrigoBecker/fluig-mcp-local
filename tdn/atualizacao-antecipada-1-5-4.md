---
title: "Atualização antecipada 1.5.4"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=215483497"
scraped_at: "2026-03-09T04:24:50.021Z"
depth: 3
anchors: 19
child_links: 53
---

# Atualização antecipada 1.5.4

Este documento contém um breve descritivo acerca das implementações e correções efetuadas.

- **Implementações**: são apresentadas todas as implementações e evoluções da plataforma contidas na atualização **1.5.4**.
- **Correções:** são apresentados todos os ajustes contidos na atualização **1.5.4**. Tais ajustes compreendem aprimoramento de performance e melhorias em processos já existentes.

 Informações detalhadas podem ser obtidas no **Help Online **e aqui mesmo no **http://dev.fluig.com/**.

**Os chamados solucionados em atualizações antecipadas são acumulativos, ou seja, todas as alterações realizadas nas liberações anteriores estarão disponíveis na última atualização.**

# Índice

## Procedimentos para atualização do atualização antecipada

*Por se tratar de uma liberação emergencial são necessários alguns procedimentos diferenciados para atualização do ambiente. Vamos a eles:*

*1 - Descompacte o conteúdo do arquivo referente a atualização para uma pasta;*

*2 - Pare a execução dos serviços do **fluig**, **fluig_MemCached** e **fluig_RealTime**;*

*3 - Elimine as pastas data, log e tmp do fluig em: (<instalacao fluig>\jboss\standalone);*

*4 - Copie os arquivos descompactados anteriormente para a pasta <instalacao fluig>\jboss\apps. Substitua todos os arquivos;*

*5 - Inicie os serviços Memcached e RealTime;*

*6 - Inicie o serviço do fluig.*

*Basta aguardar o serviço do fluig ficar disponível e acessar a plataforma já atualizada.*

*Caso o seu ambiente fluig seja administrado pela nossa equipe de Cloud, você pode entrar em contato através de um chamado ou ligando para 4003-0015 e solicitar a atualização.*

## Atualização antecipada #1

**Update em Oracle**

**Atualização oficial:** fluig 1.5.5

Foram realizados ajustes para que todos os updates executados na inicialização do fluig sejam realizados com sucesso em banco de dados Oracle.

## Atualização antecipada #2

**Login pelo navegador em um dispositivo móvel**

**Atualização oficial:** fluig 1.5.5

Agora é possível utilizar o fluig pelo navegador utilizando dispositivos móveis com o sistema operacional Android. 

****

**Serviços com arquivos de binding**

**Atualização oficial:** fluig 1.5.5

Não era possível inserir serviços através do plugin do Eclipse/Studio quando o volume da empresa e o arquivo de binding estavam com endereço de rede. 

## Atualização antecipada #3

**Cache com ambientes em cluster**

**Atualização oficial:** fluig 1.5.5

Utilizando mais de um servidor fluig e um servidor para cache utilizando Redis, ao criar novas páginas ou incluir permissões em páginas ja existentes, essas alterações não estavam tendo efeito para os usuários.

**ECMCardService **

**Atualização oficial:** fluig 1.5.5

O método create do WebService ECMCardService agora considera o publisherId como dono do documento, caso nenhum ColleagueId seja informado.

## Atualização antecipada #4

**Notificação ao transferir solicitações**

**Atualização oficial:** fluig 1.5.5

Ao efetuar uma transferência de solicitação para outro usuário, o sistema estava enviando a tarefa corretamente, porém o usuário destino não estava recebendo o e-mail de responsabilidade da pendência.

## Atualização antecipada #5

**Cache com Redis**

**Atualização oficial:** fluig 1.5.5

Ao utilizar o Redis como servidor de cache, o menu de algumas páginas não era atualizado após a criação ou remoção de páginas.

## Atualização antecipada #6

**Matricular utilizando a API**

**Atualização oficial:** fluig 1.5.5

O serviço de matricular usuários em um treinamento via API não estava com o comportamento ideal.

## Atualização antecipada #7

**Acentuação nas regras de formulário**

**Atualização oficial:** fluig 1.5.5

Ao incluir regras de formulário com acentuação, os caracteres estavam sendo substituídos por códigos unicode.

## Atualização antecipada #8

**Exportar consulta de solicitações**

**Atualização oficial:** fluig 1.5.5

Incluidas as informações referente ao "Responsável" e "Conclusão" na exportação da consulta de solicitações.

**Transferência de pendências**

**Atualização oficial:** fluig 1.5.5

Corrigido comportamento da função Transferência de Pendências quando ocorre erro em alguma das solicitações pendentes a serem transferidas.

## Atualização antecipada #9

**Filtros no novo componente de zoom**

**Atualização oficial:** fluig 1.5.6

O novo componente de zoom não repassava o filterValues para o servidor e isso fazia com que o zoom não realizasse um filtro inicial conforme era no zoom antigo. Agora o zoom está repassando a variável e o filtro inicial está funcionando.

**Notificação de publicação na comunidade para usuários comuns**

**Atualização oficial:** fluig 1.5.6

Foram realizadas melhorias na rotina de notificações relacionadas a posts na comunidade, melhorando a disponibilidade das notificações para usuários comuns.

**Update 1.5.4-1008**

**Atualização oficial:** fluig 1.5.6

Foi feita uma validação no update 1008 da versão 1.5.4 para validar se a coluna "permissions" já existe antes de tentar cria-lá, evitando assim que o fluig deixe de iniciar com a falha deste update.

## Atualização antecipada #10

**Envio de notificações**

**Atualização oficial:** fluig 1.5.6

O protocolo padrão para envio de notificações realtime agora é o websocket e não mais o polling. Também é possível desabilitar o polling, o que muitas vezes é necessário em ambientes com muitos usuários que utilizam Internet Explorer 9 devido as suas inconsistências que sobrecarregam o servidor.

Importante!

Você utiliza o fluig Connect? Em caso afirmativo, se você deseja utilizar essa atualização antecipada, deve obrigatoriamente atualizar o fluig Connect para a atualização 1.5.4.10.

****

**Atualização do servidor de aplicação**

**Atualização oficial:** fluig 1.5.6

Verifique se você precisa aplicar esta atualização via instalador, consultando o log do servidor fluig.

Ao iniciar o serviço procure no log pela informação "**Iniciando JBoss EAP**", verifique se a versão informada é a versão: "**6.4.3.GA (AS 7.5.3.Final-redhat-2)"**, caso não seja, seu ambiente precisa ser atualizado.

****

**Receber notificações no Connect**

**Atualização oficial:** fluig 1.5.6

Serviço de retorno da URL utilizada pelo fluig Connect para receber as notificações e entrega de notificações em ambientes com AD quando existe diferença de case sensitive entre o login no AD e o login no fluig.

## Atualização antecipada #11

**Zoom**

**Atualização oficial:** fluig 1.5.6

O novo zoom agora pode ser construído utilizando dados dinâmicos para realização do filtro de valores.

## Atualização antecipada #12

**Notificações**

**Atualização oficial:** fluig 1.5.6

Um volume alto de notificações no sistema poderia causar timeout no processo de notificação e a rotina não era finalizada, com isso alguns usuários não eram notificados sobre ações no fluig.

## Atualização antecipada #13

**Consulta de solicitações**

**Atualização oficial:** fluig 1.5.6

Consulta de solicitações de processos que foram cancelados quando uma das atividades paralelas já havia sido completada.

## Atualização antecipada #14

**Data/timezone do servidor de aplicação**

**Atualização oficial:** fluig 1.5.6

Corrigida situação que alterava a data do servidor de aplicação e por isso algumas datas do fluig ficavam incorretas, como por exemplo, na movimentação de solicitações.

**Tarefas de aprendizado**

**Atualização oficial:** fluig 1.5.7

Ajustado para apresentar somente as tarefas de item de tópico que ainda não possuem notas. As que já foram executadas e possuem notas, não serão mais exibidas.

## Atualização antecipada #15

**Horário apresentado no histórico da solicitação com bases Oracle**

**Atualização oficial:** fluig 1.5.7

Tratamento para apresentar corretamente as datas no histórico das solicitações.

## Atualização antecipada #16

**Resposta "perdida" em uma avaliação**

**Atualização oficial:** fluig 1.5.7

Ao avançar de uma questão já respondida para outra, a resposta da questão era perdida, sendo necesssário responder a questão novamente.

## Atualização antecipada #17

**Consulta de formulários pai x filho**

**Atualização oficial:** fluig 1.5.5

Ajustada a query de consulta de formulário pai e filho para situações em que existem mais de 1000 registros e o banco de dados utilizado é Oracle.


<!-- anchors: Atualizaçãoantecipada1.5.4-Índice, Atualizaçãoantecipada1.5.4-Procedimentosparaatualizaçãodoatualizaçãoantecipada, Atualizaçãoantecipada1.5.4-Atualizaçãoantecipada#1, Atualizaçãoantecipada1.5.4-Atualizaçãoantecipada#2, Atualizaçãoantecipada1.5.4-Atualizaçãoantecipada#3, Atualizaçãoantecipada1.5.4-Atualizaçãoantecipada#4, Atualizaçãoantecipada1.5.4-Atualizaçãoantecipada#5, Atualizaçãoantecipada1.5.4-Atualizaçãoantecipada#6, Atualizaçãoantecipada1.5.4-Atualizaçãoantecipada#7, Atualizaçãoantecipada1.5.4-Atualizaçãoantecipada#8, Atualizaçãoantecipada1.5.4-Atualizaçãoantecipada#9, Atualizaçãoantecipada1.5.4-Atualizaçãoantecipada#10, Atualizaçãoantecipada1.5.4-Atualizaçãoantecipada#11, Atualizaçãoantecipada1.5.4-Atualizaçãoantecipada#12, Atualizaçãoantecipada1.5.4-Atualizaçãoantecipada#13, Atualizaçãoantecipada1.5.4-Atualizaçãoantecipada#14, Atualizaçãoantecipada1.5.4-Atualizaçãoantecipada#15, Atualizaçãoantecipada1.5.4-Atualizaçãoantecipada#16, Atualizaçãoantecipada1.5.4-Atualizaçãoantecipada#17 -->
