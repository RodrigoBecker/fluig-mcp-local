---
title: "Atualização Antecipada 1.6.2"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=301183486"
scraped_at: "2026-03-09T04:20:34.343Z"
depth: 3
anchors: 13
child_links: 43
---

# Atualização Antecipada 1.6.2

Este documento contém um breve descritivo acerca das implementações e correções efetuadas.

- **Implementações**: são apresentadas todas as implementações e evoluções da plataforma contidas na atualização **1.6.2**.
- **Correções:** são apresentados todos os ajustes contidos na atualização **1.6.2**. Tais ajustes compreendem aprimoramento de performance e melhorias em processos já existentes.

Informações detalhadas podem ser obtidas no **Help Online **e aqui mesmo no **http://dev.fluig.com/**.

**Os chamados solucionados em atualizações antecipadas são acumulativos, ou seja, todas as alterações realizadas nas liberações anteriores estarão disponíveis na última atualização.**

O que é? Como atualizar?

Para entender o processo de liberação de uma atualização antecipada e o procedimento para atualizar, acesse [Atualização fluig - Atualização antecipada (EP).](/pages/viewpage.action?pageId=73078235)[.](#)

## Atualização antecipada #1

**Link do processo não encontrado**

**Atualização Oficial: **fluig 1.6.3****

Ao transferir uma atividade para um usuário e posteriormente, tentar visualizar a solicitação através da central de tarefas,  a mensagem de link do processo não era encontrada e apresentada. Adicionada validação para considerar o link no fluxo de retorno.

****

**Formulário Pai x Filho com mais de 1000 campos**

**Atualização Oficial: **fluig 1.6.3

Situação tratada para que considere as tabelas tanto do pai quanto do filho separadamente, em casos onde ocorre atualização de formulários já publicados no fluig.

**Inicialização do fluig**

**Atualização Oficial:** fluig 1.6.3

Corrigida inconsistência que impedia a inicialização do fluig quando atualizado da release 1.6.1-EP8 para a 1.6.2.

## Atualização antecipada #2

Sua empresa utiliza o Messaging para a comunicação e colaboração entre os usuários? Fique atento a esta atualização!

**Atualização das APIs do Messaging**

**Atualização Oficial:** fluig 1.6.3

As atuais APIs utilizadas para criar conta, apagar conta, gerar token de sessão e verificar a conexão do Messaging estão sendo depreciadas e esta atualização garante o funcionamento do Messaging em sua empresa após esta transição.

É fundamental que seja aplicada a Atualização 1.6.2 EP2 ou superior em sua instalação até Janeiro/2018 para que a utilização do Messaging pelos usuários não seja comprometida.

**Formulário com múltiplos Pai x Filho**

**Atualização Oficial:** fluig 1.6.3

Realizado ajuste para que ao gravar formulários que contenham vários componentes de tabela pai x filho, não sejam perdidos os dados ao movimentar solicitações.

**Evento enableFields **

**Atualização Oficial:** fluig 1.6.3

Realizado ajuste para que o método "SetEnhancedSecurityHiddenInputs" salve o valor de campos que estejam ou não habilitados pelo método "enableFields".

**Seletor ON/OFF no filtro do Zoom **

**Atualização Oficial:** fluig 1.6.3

Correção realizada para que o seletor ON/OFF do filtro do zoom respeite a área limite do filtro.

**Navegação de documentos**

**Atualização Oficial:** fluig 1.6.3

Correção da inconsistência na paginação da navegação de documentos.

**Múltiplos campos Zoom em formulário**

**Atualização Oficial:** fluig 1.6.3

Ajuste realizado para que o campo de zoom funcione corretamente em formulários onde existam mais de um campo deste tipo.

**Movimentação em bloco como substituto**

**Atualização Oficial:** fluig 1.6.3

Realizada correção que permite a movimentação em bloco com usuário substituto.

**Vencimento por campo de formulário - Fluxo automático**

**Atualização Oficial:** fluig 1.6.3

Quando o prazo de conclusão estava selecionado “por campo de formulário” e havia um fluxo automático, não era permitido liberar versão do processo, informando que não havia um prazo definido. Essa situação foi corrigida.

**Fluxo de Processo - Incorreto**

**Atualização Oficial:** fluig 1.6.3

Aplicada validação para que sejam mostrados os nomes das atividades de destino, quando as mesmas são a partir de uma atividade normal.

**Inconsistência nas abas Detalhes/Complementos/Anexos**

**Atualização Oficial: **fluig 1.6.3

Melhorias incorporadas na visualização de formulários impactaram na barra de rolagem, ocasionando dificuldades no manuseio. Realizado tratamento para que a rolagem volte ao funcionamento como anteriormente.

**Processo de atualização**

**Atualização Oficial:** fluig 1.6.3

Tratamento realizado no processo de atualização da release 1.6.2 que não permitia a inicialização do fluig em atualizações diretas da 1.5.10 para a 1.6.2.

**Widget Aplicação ERP**

**Atualização Oficial: **fluig 1.6.3

Tratamento realizado na widget padrão Aplicação ERP da Experiência de Uso 8 que gerava a mensagem "Erro no carregamento de dependências" no momento de sua inicialização.

**Tolerância de acesso - LS indisponível**

**Atualização Oficial: **fluig 1.6.3

Corrigida inconsistência que ativava o modo Demo do fluig quando identificado o Servidor de Licenças indisponível. 

****

## Atualização antecipada #3

**Login utilizando e-mail**

**Atualização Oficial: **fluig 1.6.3

Ajuste para o correto funcionamento da autenticação na plataforma ao informar o e-mail do usuário no campo de login. Para mais detalhes [clique aqui](https://tdn.totvs.com/pages/viewpage.action?pageId=235596849#Atualização1.5.9-Arquitetura).

****

**Dataset offline mobile**

**Atualização Oficial: **fluig 1.6.3

Tratamento realizado na página de apresentação dos datasets do Painel de Controle ocultando o ícone de erro apresentado ao habilitar a opção *offline mobile* no dataset do tipo *builtin*.

****

**Visualização de dataset no plugin fluig Studio**

**Atualização Oficial: **fluig 1.6.3

Tratamento realizado na listagem para visualização de datasets através do plugin fluig Studio.

**Avaliações que possuem uma imagem**

**Atualização Oficial: **fluig 1.6.3

Efetuadas alterações no cadastro de avaliações para permitir criar, editar e salvar corretamente avaliações que possuem uma imagem, pois era exibida uma mensagem de inconsistência.

**Download do arquivo ao editar conteúdo**

**Atualização Oficial: **fluig 1.6.3

Incluída a opção para efetuar o download do arquivo ao editar um conteúdo, pois não estava sendo exibida.

**Problema com scroll do formulário**

**Atualização Oficial: **fluig 1.6.3

Revertida a melhoria na página da solicitação, para que a visualização do formulário seja exibida em tamanho normal sem layout fixo, conforme anteriormente.****

## Atualização antecipada #4

**Anexos de registro de formulário - SOAP**

**Atualização Oficial: **fluig 1.6.3

Correção realizada para que os anexos de um registro de formulário criados a partir do serviço SOAP, sejam exibidos corretamente ao clicar em propriedades de documentos > ver anexos.

**Download Múltiplo**

**Atualização Oficial: **fluig 1.6.3

Realizada correção no Download Múltiplo para que ocorra corretamente o download de arquivos.

**Remoção e dessincronização de dataset**

**Atualização Oficial: **fluig 1.6.3

Tratamento para situação que não permitia desabilitar a sincronização ou remover um dataset corretamente.

**Erro RNC Kit Qualidade**

**Atualização Oficial: **fluig 1.6.3

Ao utilizar o método wdkAddChild em um formulário que não utilizava o Style Guide, era gerada inconsistência no retorno do método. Realizado tratamento para verificar se o Style Guide está importando corretamente no ambiente.

**Rotina de log de acesso**

**Atualização Oficial:** fluig 1.6.3

Reparada inconsistência na rotina de log fazendo com que os logins realizados na plataforma sejam gravados no momento do acesso.

**Complemento inserindo informação do Log**

**Atualização Oficial:** fluig 1.6.3****

As inconsistências no retorno de integração na atividade de serviço foram solucionadas.

**Erro no método hAPI.calculateDeadLineTime**

**Atualização Oficial:** fluig 1.6.3

Corrigido o método que ocasionou a parada de funcionamento, devido ao parametro ter sido adicionado e o mesmo não foi sobrecarregado.

**Erro ao acessar os catálogos**

**Atualização Oficial:** fluig 1.6.3

Foram efetuados ajustes para considerar o endereço real do servidor via *request* para que o *firewall* não bloqueie as chamadas *rest* internas ao acessar páginas do LMS.

**Upload de arquivos em conteúdos pelo navegador IE**

**Atualização Oficial:** fluig 1.6.3

Ajustado o recurso Conteúdos para permitir efetuar o *upload* de arquivos utilizando o navegador Internet Explorer.

**Ajuste no instalador via caractere para exibir corretamente mensagens de erro**

**Atualização Oficial:** fluig 1.6.3

Melhorado o detalhamento de mensagens em log tornando mais fácil o entendimento quando ocorrer impedimentos no momento da instalação/atualização da plataforma.

**Datasets offline**

**Atualização Oficial:** fluig 1.6.3

Correção na tarefa de sincronização de datasets.

****

**API de visualização de documentos**

**Atualização Oficial:** fluig 1.6.3

Correção realizada para garantir a compatibilidade das novas funcionalidades da plataforma, com as chamadas já existentes para a API de visualização de documentos.

**Inconsistências de timeout ao iniciar a plataforma**

**Atualização Oficial:** fluig 1.6.3

Aumentado o desempenho na criação de grupos da plataforma dentro do LMS e ajustada a criação para considerar grupos com mais de 120 caracteres na descrição;

**Inconsistências de grupos dentro do LMS**

**Atualização Oficial:** fluig 1.6.3

Melhorada a verificação de grupos existentes. Também ajustes para considerar mais de 1000 grupos e considerar grupos de nuvens de relacionamento, quando as nuvens estão ativadas.

## Atualização antecipada #5

**Validação de segurança de documentos para grupos com caracteres especiais**

**Atualização Oficial: **fluig 1.6.3

 Ajuste realizado para que ocorra a validação comum da segurança de documentos, pois a validação especial para grupos que continham caractere especial não estava ocorrendo. 

**Visualização de arquivos PDF**

**Atualização Oficial: **fluig 1.6.3

Realizada correção na biblioteca de arquivos PDF, pois alguns tipos de PDF não estavam sendo visualizados. 

****

**Problema no acesso dos catálogos **

**Atualização Oficial: **fluig 1.6.3

Melhorias no desempenho das rotinas de verificação de permissões nos catálogos quando eles possuem permissões atribuídas a grupos com mais de 80.000 usuários, por exemplo.

## Atualização antecipada #6

**Download múltiplo de pastas que contenham caracteres especiais**

**Atualização Oficial: **fluig 1.6.3

Feita correção pois não era possível realizar download múltiplo de documentos, onde o nome da pasta possuía caracteres especiais. Realizado tratamento para quando gerar um arquivo compactado, substituir os caracteres por traço no nome da pasta.

**Correção de grafia**

**Atualização Oficial: **fluig 1.6.3

Correção da grafia para Publicação Múltipla. 

## Atualização antecipada #7

**Exceção no uso de dataset em uma atividade de serviço**

**Atualização Oficial: **fluig 1.6.3

Feito tratamento para exibir a mensagem corretamente quando lançado uma exceção em um dataset que está sendo consumido dentro de um evento da atividade de serviço.

****

**Busca de usuários em uma atividade após uma atividade automática não retornava usuários**

**Atualização Oficial: **fluig 1.6.3

Corrigido o problema de quando há uma atividade comum após uma atividade automática, ao abrir a tela de seleção de usuário, não estava sendo realizado o filtro.

**Lentidão na Central de Tarefas no Mobile**

**Atualização Oficial: **fluig 1.6.3

A central de tarefas foi otimizada para mobile, carregando as atividades que estão em pool em um tempo muito menor. 

**Edição do usuário via integração EAI**

**Atualização Oficial: **fluig 1.6.3

Corrigida a edição de usuários por meio do EAI quando o LMS está integrado ao RM.

**Link de processo não encontrado**

**Atualização Oficial: **fluig 1.6.3

Corrigido a situação que em alguns casos quando a atividade que tem tarefa ativa tem fluxo de retorno, apresentava a mensagem "Link de processo não encontrado" ao tentar abrir a solicitação.

**Permissão de Download **

**Atualização Oficial: **fluig 1.6.3

Ajuste realizado para que verifique a permissão individual de download, além da permissão herdada.

**Ajuste alter table para envio de notificação**

**Atualização Oficial: **fluig 1.6.3

Criação de coluna para ser gravado o access_token de dispositivos mobile em envio de notificações push.

## Atualização antecipada #8

**Mensagem exibida quando não é inserido um comentário ao corrigir uma questão**

**Atualização Oficial: **fluig 1.6.3

Ajustada a mensagem que é exibida quando não é inserido um comentário ao corrigir uma questão dissertativa no recurso Correções de questões.

**Ambiente que utilizam configurações de proxy, firewall e afins**

**Atualização Oficial: **fluig 1.6.3

Foi alterada a integração entre a plataforma fluig e o card LMS de Rest para EJB para solucionar problemas em ambientes que utilizam configurações de *proxy*, *firewall* e afins.

## Atualização antecipada #9

**Sincronização de dados entre a plataforma fluig e o card LMS**

**Atualização Oficial: **fluig 1.6.3

Foram efetuadas alterações na sincronização de dados entre a plataforma fluig e o card LMS para que os recursos do LMS sejam iniciados corretamente.

**Integração entre fluig e fluig Identity**

**Atualização Oficial: **fluig 1.6.3

Tratamento realizado na integração entre o fluig e o fluig Identity para que os dados do Identity sejam atualizados corretamente na Empresa em questão.

## Atualização antecipada #10

**Matrículas em treinamentos via integração RM Viate**

**Atualização Oficial: **fluig 1.6.3

Corrigido o processo de matrículas em treinamentos quando há integração com o RM Vitae.

**Configurações de Impressão**

**Atualização Oficial: **fluig 1.6.3

 Realizado ajuste para que sejam respeitadas as configurações de permissão de impressão de cada usuário.

## Atualização antecipada #11

**Itens em tabela Pai x Filho**

**Atualização Oficial: **fluig 1.6.3

Resolvido conflito do style guide quando eram adicionados itens novos nas tabelas pai x filho.

**Datasets consumindo serviços SOAP**

**Atualização Oficial: **fluig 1.6.3

Inclusão de dependências no pom do artefato, para que seja possível utilizar datasets que consomem serviços SOAP.

**Problema case sensitive Oracle**

**Atualização oficial: **fluig 1.6.3

Com banco de dados Oracle, o mapeamento de campos de formulário para o aplicativo Approval não estava funcionando corretamente, apresentando o valor "null" em vez do valor do campo do formulário.

**Duplicação de subprocessos**

**Atualização oficial: **fluig 1.6.3

Ao movimentar um subprocesso, o mesmo era criado duas vezes. Bloqueada a duplicação de subprocessos.

****

**Transações dos catálogos**

**Atualização oficial: **fluig 1.6.3

Otimizadas as transações dos catálogos de tópicos e questões, trilhas e treinamentos e disciplinas e turmas para evitar a ocorrência de *timeout* durante algumas ações.

****

**Título e favicon na aba do navegador**

**Atualização oficial: **fluig 1.6.3

Corrigida a exibição do título e do *favicon* na aba que é aberta ao visualizar um conteúdo de um treinamento quando esses itens foram personalizados na plataforma.

**Popup com dados do usuário **

**Atualização oficial: **fluig 1.6.3

Corrigida a situação onde na timeline ao passar o mouse por cima do nome do usuário o popup com os dados extras não fica presente para consulta.

## Atualização antecipada #12

**Problema ao matricular usuários em turmas **

**Atualização oficial: **fluig 1.6.4

Corrigido a situação que impedia a rotina de matrícula em turmas de ser concluída com sucesso.

**Busca de usuários em uma atividade com mecanismo de atribuição**

**Atualização oficial: **fluig 1.6.4

Corrigido a situação para retornar os usuários de acordo com o mecanismo de atribuição quando há uma atividade automático no fluxo.

## Atualização antecipada #13

**Conversão da solicitação inativando tarefas**

**Atualização oficial: **fluig 1.6.4****

Corrigido o problema de quando ocorre um erro nos eventos customizados do processo na conversão de solicitação, estava inativando as tarefas.

****

**Problema na ordenação das atividades para montar excel**

**Atualização oficial: **fluig 1.6.4

Corrigida a situação onde uma atividade que estava em pool e era movimentada, na pesquisa da consulta no excel, mostrava que o responsável que aparecia era o pool e não o usuário que fez a movimentação. Agora a consulta passou a ser ordenada por assingDate.****

**Problemas na renderização do formulário**

**Atualização oficial: **fluig 1.6.4

 Alteração realizada para que ao abrir um registro de formulário com a respectiva versão do formulário contendo o script *../vcXMLRPC.js.* O trecho de *HTML "../vcXMLRPC.js"* seja alterado para  *"/webdesk/vcXMLRPC.js"*. Assim o erro de JS não ocorre mais. 

**Sincronização de usuários e grupos**

**Atualização oficial: **fluig 1.6.4****

Ajustada a sincronização de usuários e grupos entre a plataforma e as rotinas do LMS quando um grupo possui mais de 40 mil usuários.

**Central de tarefas listando errado**

**Atualização oficial: **fluig 1.6.4

Ao utilizar a função hAPI.setDueDate o cálculo de segundo estava incorreto,  fazendo com que na central de tarefas indicasse como tarefa atrasada sendo que ainda estava no prazo. Alterada a lógica para calcular os segundos do prazo da atividade, fazendo com que o cálculo das tarefas fiquem corretas.

**Download de PDF criptografado**

**Atualização oficial: **fluig 1.6.4

Correção realizada na renderização de PDFs criptografados para que seja possível realizar o download.

**Widget Evolução**

**Atualização oficial: **fluig 1.6.4

Corrigido o *widget* Evolução para considerar apenas os pré-testes nos quais o aluno foi aprovado no cálculo da sua evolução.


<!-- anchors: AtualizaçãoAntecipada1.6.2-Atualizaçãoantecipada#1, AtualizaçãoAntecipada1.6.2-Atualizaçãoantecipada#2, AtualizaçãoAntecipada1.6.2-Atualizaçãoantecipada#3, AtualizaçãoAntecipada1.6.2-Atualizaçãoantecipada#4, AtualizaçãoAntecipada1.6.2-Atualizaçãoantecipada#5, AtualizaçãoAntecipada1.6.2-Atualizaçãoantecipada#6, AtualizaçãoAntecipada1.6.2-Atualizaçãoantecipada#7, AtualizaçãoAntecipada1.6.2-Atualizaçãoantecipada#8, AtualizaçãoAntecipada1.6.2-Atualizaçãoantecipada#9, AtualizaçãoAntecipada1.6.2-Atualizaçãoantecipada#10, AtualizaçãoAntecipada1.6.2-Atualizaçãoantecipada#11, AtualizaçãoAntecipada1.6.2-Atualizaçãoantecipada#12, AtualizaçãoAntecipada1.6.2-Atualizaçãoantecipada#13 -->
