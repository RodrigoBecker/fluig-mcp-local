---
title: "Atualização 1.5.13"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=267801630"
scraped_at: "2026-03-09T03:15:55.435Z"
depth: 2
anchors: 15
child_links: 76
---

# Atualização 1.5.13

Confira abaixo as novidades na atualização 1.5.13 do fluig: 

**Atualizaremos o tratamento de exceção no fluig 1.6.1**

Buscando sempre a assertividade e qualidade nas atualizações do fluig, será liberada um melhoria para a release 1.6.1, prevista para junho de 2017, que prevê apresentar mensagens de erros com mais detalhes, tendo por finalidade o melhor diagnóstico de inconsistências presentes em desenvolvimentos sobre a plataforma.

Para viabilizar esta melhoria atualizaremos o tratamento de exceção**WorkflowSaveAndSendTaskException**. Portanto, se você utiliza este tratamento de exceção para mensagens de erro ou utiliza alguma mensagem de erro oriunda do servidor fluig,** **é necessário que se programe para testar processos workflow que possuem tais validações e proceder com os ajustes necessários.

## Social

**Aproveite o novo fluig Messaging**

Como buscamos que você tenha sempre o melhor para otimizar a sua produtividade, estamos trabalhando para atualizar o fluig Messaging de acordo com os pedidos que recebemos de nossos clientes.

A partir da **Atualização Antecipada #4 - Messaging** no seu fluig, você e os usuários de sua empresa podem começar a usufruir das novidades que disponibilizamos nessa *release*:

- Status das Mensagens: Informa se a mensagem foi enviada, entregue e lida pelo destinatário
- Digitação: Mostra quando outra pessoa está digitando uma mensagem
- Definir imagem de um grupo: A inserção de imagem poderá ser feita durante a criação do grupo, não havendo mais a necessidade de criar o grupo e depois editá-lo
- Mais administradores: O administrador de um grupo poderá definir novos administradores
- Busca de conversas: procure por conversas já criadas
- Silenciar conversas: desative notificações das conversas desejadas
- Mais opções de arquivos suportados
- Alertas em tempo real.

Consulte as documentações Sobre o fluig Messaging, Configuração fluig Messaging, Utilizando o fluig Messaging e Novidades de atualização do fluig Messaging para saber como começar a usar! ![(smile)](/s/5bn9pn/8804/xgjkrn/_/images/icons/emoticons/smile.svg)

Fique atento!

A partir desta atualização somente o envio de mensagens individuais e envio de mensagens em grupo estarão disponíveis no fluig Messaging - recursos de anotações em documentos e videoconferência ainda não estarão disponíveis. Não se preocupe, estamos trabalhando e em breve teremos novidades.

Possui grupos no fluig Messaging? Acesse a página Importar estrutura de conversas em grupo e saiba como replicar a estrutura desses grupos após a atualização.

Se você já possui o fluig Messaging habilitado, **será possível utilizá-lo até 15/01/2017**. Após esta data, será necessário aplicar a **Atualização Antecipada #4 - Messaging** (ou superior) para continuar interagindo com suas equipes de forma simples e ágil.

**Deseja encontrar pessoas influentes em determinados assunto na plataforma?**

Agora é possível pesquisar por determinado termo e encontrar usuários influentes sobre o assunto.

Basta fazer a busca por um termo (Ex: Treinamento) e acionar a opção Influenciadores.

Esta apresentará os usuários que mais utilizaram o termo compartilhando publicações e comentários ou criando artigos e documentos.

Saiba mais

- Lembre-se de sempre manter a indexação do conteúdo em dia. Assim as informações dos Influenciadores estarão sempre atualizadas.
- Para mais informações acesse o manual de usuário deste recurso, [aqui](https://tdn.totvs.com/x/w4UlE).

****

****

** **

**Novo visual para a busca do fluig**

A busca do fluig está de novo visual. Agora ficou muito mais intuitivo encontrar resultados de busca. As abas foram substituídas por botões e é possível verificar os itens encontrados com novas opções e com mais detalhes.****

- As abas foram substituídas por botões para um melhor experiência do usuário
- Opção filtrar, agora está visível ao lado dos botões
- A imagem do perfil de usuários e comunidades foi alterada
- Agora é possível selecionar um resultado filtrado como favorito diretamente no resultado apresentado, seja um usuário, documento e comunidade.
- Ao selecionar uma opção específica de resultado, o item fica ao lado da opção 'Mais'.
- Nova opção de resultados por 'Influenciados'.

** **

****

****

## BPM

**Nova consulta de responsáveis por tarefas em pool**

A nova consulta de responsáveis, disponível para tarefas em *pool*, oferece maior facilidade e usabilidade a um recurso fundamental e muito utilizado pelos usuários.****

Agora, além do login, o nome completo dos usuários será apresentado para facilitar a identificação dos responsáveis pela atividade. Um campo de busca também foi incluído a fim de permitir a localização através do nome ou sobrenome do responsável. A lista de usuários será exibida de forma paginada e poderá ser ordenada com um clique sobre o nome da coluna (Nome ou Login).****

Para acessá-la, basta clicar na aba **Complementos** da solicitação e selecionar o botão **Ver Usuários** exibido ao lado da tarefa. 

** **

![](/download/attachments/267801630/oficial.PNG?version=1&modificationDate=1480677990000&api=v2)

****

** **

** **

**Agora ficou mais fácil editar as propriedades de um processo BPMN 2.0 pela web**

Os processos workflows feitos a partir da notação BPMN 2.0 no Studio, passam a permitir a edição de propriedades a partir do fluig na web, basta editar o processo e alterar as informações na Aba Geral. Na aba Processos é possível visualizar o desenho do processo workflow. A edição do processo BPMN 2.0 continua só sendo permitida a partir do Studio.** **

** **

![](/download/attachments/267801630/new.png?version=1&modificationDate=1481631180000&api=v2)

** **

**Mais produtividade para o desenvolvedor - Auto completar - eventos fluigAPI******

Desenvolve muito na plataforma? Feito especialmente para o desenvolvedor fluig, este novo serviço permite visualizar no studio uma lista com todos os métodos disponíveis no fluigAPI. Para isso digitando "fluigAPI." e em seguida apertando CTRL+Espaço a lista de métodos possíveis será apresentada. Por exemplo, ao usar um método com retorno (fluigAPI.*getWorkflowService*() por exemplo), o usuário poderá também listar os métodos deste retorno(como fluigAPI.*getWorkflowService*().*createObervation*()). É possível também facilmente criar os objetos que são utilizados nos métodos. Para isso, basta digitar, por exemplo, *new ProcessObservation*VO e apertar CTRL+Espaço que o *plugin* vai alterar automaticamente para *new* com.fluig.sdk.api.workflow.*ProcessObservation*VO();

** **

 ![](/download/attachments/267801630/fluigAPI.png?version=1&modificationDate=1482499097000&api=v2)

****

**Com um clique baixe todos os anexos de uma solicitação**

Facilitamos sua rotina com os anexos trazendo mais agilidade ao processo. Agora, há uma nova forma de efetuar *download* de um ou mais arquivos ao mesmo tempo, isso é possível através do botão *Download*, localizado na aba de anexos do processo.  Confira!

**Saiba mais**

Para mais detalhes, confira nossa documentação [Publicar anexos do processos](https://tdn.totvs.com/x/d-HuDQ), disponível através do [Help online](https://tdn.totvs.com/x/w4f5DQ).

![](/download/attachments/267801630/Download.PNG?version=1&modificationDate=1503056149000&api=v2)

## Arquitetura

**Seu navegador está dizendo que a conexão com o fluig não é segura? Saiba como se proteger!**

As últimas atualizações dos navegadores Google Chrome e Mozilla Firefox passaram a rotular páginas que trafegam dados como login e senha sobre o protocolo HTTP como "não seguras". Isso ocorre porque nesse tipo de protocolo as informações trafegadas não são criptografas e, por isso, podem estar sujeitas à interceptação por agentes maliciosos.

![](/download/attachments/267801630/HTTP.PNG?version=1&modificationDate=1485537818000&api=v2)

Para proteger o acesso de seus usuários ao fluig, recomendamos que seja realizada a configuração da plataforma com o protocolo HTTPS, que oferece criptografia para os dados trafegados. [Veja aqui](/pages/viewpage.action?pageId=127959055) como configurar HTTPS na sua instalação ou, caso seu ambiente esteja hospedado na nuvem, [entre em contato](https://tdn.totvs.com/pages/viewpage.action?pageId=244735411) e informe-se sobre as condições para implantação do protocolo.

**Segurança aprimorada para uma experiência ainda mais robusta e fluída**

Os recursos e serviços do fluig ganharam uma camada adicional de proteção. A plataforma agora está mais segura com permissões específicas para o uso de recursos como a consulta, criação e edição de mecanismos personalizados, datasets, eventos globais e serviços.

Nota

Caso o administrador da plataforma não alterar as permissões para determinado recurso, o mesmo só estará acessível para usuários administradores.

![](/download/attachments/267801630/MFLUIG-17.png?version=2&modificationDate=1483017499000&api=v2)

Consulte as páginas abaixo para saber como conceder essas novas permissões para aos usuários de sua empresa que realizam desenvolvimentos sobre a plataforma.

- [Como permitir que um usuário comum possa criar/editar/remover mecanismos personalizados?](https://tdn.totvs.com/pages/viewpage.action?pageId=269423844)
- [Como permitir que um usuário comum possa criar/editar/remover eventos globais?](https://tdn.totvs.com/pages/viewpage.action?pageId=269431799)
- [Como permitir que um usuário comum possa criar/editar/remover serviços?](https://tdn.totvs.com/pages/viewpage.action?pageId=269431879)
- [Como permitir que um usuário comum possa criar/editar/remover datasets?](https://tdn.totvs.com/pages/viewpage.action?pageId=269431928)

**Correção de segurança: mais confiabilidade na plataforma**

Buscando sempre a confiabilidade de informações da plataforma, fizemos uma nova verificação de permissões para execução de métodos da [API Pública](https://api.fluig.com/).

Importante

Verifique os desenvolvimentos sob a plataforma de sua empresa que fazem uso de métodos da API Pública para garantir que não foram afetados por essa atualização.

**Proteja os dados adicionais cadastrados em sua empresa**

O administrador do fluig tem acesso ao cadastro de dados adicionais da empresa serve diversos propósitos e um deles é permitir a integração da plataforma com serviços como o fluig Analytics e sistemas ERP. Para incrementar a proteção aos dados cadastrados, agora é possível ocultar os valores atribuídos às chaves na tela de cadastro clicando no botão **Exibir/Ocultar senhas**.

Isso é feito através de um novo componente, chamado [*Password*](https://style.fluig.com/javascript.html#password), que também foi disponibilizado no fluig Style Guide para que possa ser utilizado pelos desenvolvedores na criação de formulários e *widgets* para o fluig.

![](/download/attachments/267801630/MFLUIG-17.gif?version=2&modificationDate=1481115808000&api=v2)

**Utilize o botão com ícone de cadeado ao lado do campo Valor para ocultar as senhas cadastradas nos dados adicionais**

****

fluig API

Um novo método para recuperação das chaves do cadastro de dados adicionais da empresa foi disponibilizado na fluig API: [*getTenantData {keys}*](https://api.fluig.com/resource_TenantRest.html#path__2.0_tenants_create.html). Este método retorna apenas a chave específica solicitada pelo desenvolvedor e não exige permissões de administrador para ser utilizado.

Caso utilize o método *tenant* antigo, que exige privilégios administrativos e retorna todas as chaves cadastradas, recomendamos que atualize seu desenvolvimento com esta nova API.

**Habilitamos a utilização do fluig API no evento onNotify**

O fluigAPI é facilitador para o desenvolvedor de customizações dentro da plataforma e agora está habilitado também para o evento onNotify. Este evento global poderá ser utilizado para a interferência de notificações no fluig, garantindo assim que alterações ou inclusões sejam feitas e posteriormente enviadas com as devidas notificações.

Saiba mais

Para saber mais sobre o [DES 069 - Fluig API](/pages/viewpage.action?pageId=89621623) e o [evento onNotify](/display/fluig/Desenvolvimento+de+Eventos), consulte nossas documentações!

## LMS

**Mais detalhes sobre os pré-requisitos de aprendizado!**

Para matricular-se em itens de aprendizado, em alguns casos, é necessário que se cumpra alguns pré-requisitos. Confira quais são os pré-requisitos que você deve concluir para poder acessar um treinamento ou trilha.

![](/download/attachments/267801630/image2017-1-3%2017%3A34%3A20.png?version=1&modificationDate=1483475736000&api=v2)

**Novidades em matrículas de turma, treinamento e trilha**

A partir desta atualização, quando um usuário é matriculado em uma turma, treinamento e trilha, além da notificação disponível na plataforma, o usuário receberá um e-mail conforme a seguir:

![](/download/attachments/267801630/matricula_em_turma.JPG?version=1&modificationDate=1485431316000&api=v2)

## WCM

**Refinamento do histórico de alterações de páginas**

Um dos maiores aliados na criação de páginas personalizadas no fluig, o Histórico de página foi aprimorado para tornar a identificação e restauração de versões ainda mais fácil. A partir de agora, as versões serão listadas da mais recente para a mais antiga e a coluna Layout apresentará o nome do modelo utilizado.

Saiba mais sobre os [layouts](https://tdn.totvs.com/display/HF/Layout) e a [edição de páginas](https://tdn.totvs.com/pages/viewpage.action?pageId=234455936) acessando o Help fluig.

![](/download/attachments/267801630/FLUIGINV-3001.png?version=1&modificationDate=1485430020000&api=v2)

## Mobile

**Edição de publicações e comentários no fluig Mobile**

Agora você pode editar o texto de publicações e comentários, basta habilitar a edição de post na comunidade. Para editar, basta clicar na seta no canto superior direito da publicação e acionar a opção Editar. Após a edição a publicação será marcada como 'Editado'.

Nota

A opção Excluir passou a ficar vísivel no mesmo caminho da opção Editar. Nas atualizações anteriores estava localizada na parte inferior da publicação, junto às opções de Apoiar e Comentar.

![](/download/attachments/267801630/image2017-1-5%208%3A29%3A33.png?version=1&modificationDate=1483615850000&api=v2)![](/download/attachments/267801630/image2017-1-5%208%3A29%3A49.png?version=1&modificationDate=1483615866000&api=v2)

**Acesse a widget Nuvem de tags a partir do aplicativo fluig em seu dispositivo móvel**

Visualize as tags mais utilizadas da plataforma na palma de sua mão. Veja também os conteúdos das tags da widget de nuvem de acesso. A nuvens de tags é visível a partir do momento que é adicionada a respectiva widget em uma página.

![](/download/attachments/267801630/image2017-1-5%208%3A27%3A58.png?version=1&modificationDate=1483615755000&api=v2)

## Identity

**Acesse o novo Release Notes do fluig Identity e fique por dentro de tudo o que preparamos para você!**

A partir de agora o fluig Identity conta com um espaço exclusivo para a divulgação das novidades e correções liberadas em cada nova release da ferramenta, tornando mais fácil e mais ágil a comunicação com os nossos clientes.

Para acessar o Release Notes, basta clicar sobre o número da versão localizada no rodapé de cada página do fluig Identity ou diretamente através [deste link](/pages/viewpage.action?pageId=269064433).

![](/download/attachments/267801630/noticia_portal.png?version=1&modificationDate=1483098983000&api=v2)

**Clique no link disponível no rodapé das páginas do fluig Identity para acessar o Release Notes**

****

**Novidades para clientes que utilizam autenticação CAS**

Em ambientes com autenticação via fluig Identity e apenas uma empresa cadastrada no fluig, o aplicativo mobile apresentará a tela de login do fluig Identity para a inclusão das credenciais do usuário. Assim, clientes que utilizam CAS serão direcionados para essa forma de autenticação.

Saiba mais

Acesse a documentação [Autenticação CAS](/pages/viewpage.action?pageId=235337765) para conferir mais detalhes.

## Analytics

**Se você utiliza o fluig Analytics, temos um recado importante!**

Foi realizada uma atualização no processo de carga de dados para o fluig Analytics. Por isso é necessário atualizar seu fluig para a atualização 1.5.13 **até o dia 31/03**.

Caso a atualização do ambiente não for realizada, os dados da plataforma fluig não serão enviados ao fluig Analytics.

Fique atento!

Mesmo que a atualização ocorra após a data informada, os dados do período que o ambiente estiver desatualizado serão perdidos, passando a registrar os dados a partir da data de atualização para o fluig 1.5.13 ou superior.

## Novidades em Documentação

**Confira o novo Portal do Conhecimento fluig**

Os portais de conhecimento do fluig agora estão de visual novo e mais integrados, proporcionando mais agilidade e facilidade na busca por [manuais de ajuda](https://tdn.totvs.com/display/HF/Help+fluig), [FAQs](https://tdn.totvs.com/display/FF/FAQ+fluig+Home), [treinamentos](https://tdn.totvs.com/display/AF/Aprendizado+fluig+Home), [documentação técnica](https://style.fluig.com/) e de [desenvolvimento sobre a plataforma](https://dev.fluig.com/).

Navegue rapidamente entre os diferentes portais e utilize os filtros da ferramenta de busca para especificar o tipo de orientação que você procura. Você pode encontrar o que deseja sem nem precisar abrir um chamado!

- [Nova documentação](https://tdn.totvs.com/pages/viewpage.action?pageId=269439292) com orientações voltadas à criação de ambientes de homologação que simulem as mesmas condições do ambiente de produção.

- Detalhamento do método *sendNotification* da fluig API *Notifications,*inclusive com novo exemplo de implementação.

- Incluída orientação adicional a respeito da definição do publicador na criação de pastas via [docAPI](/display/fluig/docAPI) na documentação.

- Adicionados os procedimentos para efetuar o [*backup* da aplicação](https://tdn.totvs.com/pages/viewpage.action?pageId=155583247) em sistemas operacionais Linux via linha de comando.

- Documentação de Importação de dados históricos complementada com o procedimento de [importação de fatos de formulário](https://tdn.totvs.com/pages/viewpage.action?pageId=126717934).

- A documentação de [Eventos de Processos](/display/fluig/Eventos+de+Processos) foi atualizada com informações sobre os tipos de eventos executados ao liberar a versão de um processo, iniciar, salvar e enviar uma notificação.

- Adicionamos mais detalhes na documentação de Zoom. Veja todos os detalhes em [Desenvolvimento de Formulários - Zoom](/pages/viewpage.action?pageId=75270483).Verifique como bloquear zoom e habilitar, baseado em alguns campos.
- Componente Filter/ Autocomplete - Diferenças e recomendações.
- E muito mais...

## Correções

Nessa sessão listamos alguns *bugs* que matamos nessa atualização que garantem que tudo corra bem na sua plataforma.

**Arquitetura**

- Verificação prévia de índices existentes nas tabelas do banco de dados do TOTVS ECM 3.00 para evitar falhas ao tentar removê-los durante o procedimento de conversão da base para o fluig.

- Incluído botão para habilitar/desabilitar o recurso de bloqueio de *clickjacking* nos parâmetros da plataforma. [Saiba mais](https://tdn.totvs.com/pages/viewpage.action?pageId=224107046#Configura%C3%A7%C3%B5esdaPlataforma-BloqueiodeClickjackingbloqueioclickjacking).

- Correção do recurso de exportação de listas do Painel de Controle, quando utilizado o formato metalista.

- Ajuste na consulta de datasets via API pública quando utilizado o parâmetro *MUST_NOT*.

- O método *getNewAPIConsumerAsCurrentUser* do [objeto OAuthUtil](https://tdn.totvs.com/pages/releaseview.action?pageId=185736325) foi habilitado para execução nos [eventos globais](https://tdn.totvs.com/display/fluig/Desenvolvimento+de+Eventos) da plataforma.

- Correção de autenticação após redefinição de senha de usuários, evitando que inconsistência de usuário inválido ocorra. Esta situação ocorria ao trocar a senha do usuário, erros de interface eram apresentados em tela, sendo necessário limpar os dados do navegador. 

- Ajustado o processo de atualização de atualizações muito antigas do fluig que perdia configuração de banco de dados e apresentava a mensagem "Não consta no banco de dados configurações da plataforma.".

- Corrigida situação que ocasionava erro de parâmetro JSON nulo, quando realizada chamada POST em dataset.

- A widget de Edição de Conteúdo do fluig foi aprimorada para perceber quebras de linha e espaços na widget da página, sem ser necessária a alteração de fonte na widget.

- Bloqueio do botão “Excluir todas” da Central de Notificações após seu acionamento para evitar cliques equivocados que gerem processos concorrentes e inconsistências para o usuário.

- Melhorada mensagem apresentada ao usuário quando a consulta a um dataset falha devido à expiração de [tempo de espera de retorno do servidor (*timeout*)](https://tdn.totvs.com/pages/viewpage.action?pageId=172297237).

- Disponibilizado o campo *Timezone* (*getTimezone()*) no [UserEventVO](https://tdn.totvs.com/display/fluig/Desenvolvimento+de+Eventos) para retornar o fuso horário do usuário.

- Encerramento e *logout* da sessão após a execução de uma operação da API pública consumida através de um *widget* incluído em uma página pública, para evitar que ao sessão do usuário aplicativo fique presa e as requisições (*GET*) adicionais falhem.

**BPM**

- Correção para limitar a consulta de solicitações por intervalo à quantidade de solicitações existentes na plataforma, visando impedir a pesquisa por códigos inválidos que resultem em inconsistências mesmo quando existem muitas solicitações já criadas na plataforma

- A notificação de inclusão de anexos disparada pela plataforma quando o usuário adiciona um complemento em uma solicitação foi ajustada para que não seja enviada também uma notificação de inclusão de anexos desnecessária.

- O envio de e-mails customizados – realizado através do método *notifier.notify* – foi alterado para que as mensagens sejam disparadas de forma assíncrona, assim como os demais e-mails da plataforma.

- Corrigida a mensagem exibida no navegador ao usuário quando este tentar movimentar uma solicitação que outro indivíduo (gestor do processo ou substituto) já tenha movimentado de forma paralela, deixando clara essa situação de concorrência.

- Correção na visualização de histórico de solicitações em que a atividade final tenha sido criada em uma versão anterior do processo como uma atividade conjunta e posteriormente definida como final em uma versão mais recente.

- Solicitações de processos em que o evento [*checkComplementsPermission*](https://tdn.totvs.com/display/fluig/Desenvolvimento+de+Workflow#DesenvolvimentodeWorkflow-checkComplementsPermission) retornasse o valor *false* não estavam permitindo o envio do fluxo para a próxima atividade. Essa situação foi corrigida.

- Suporte a conteúdos copiados diretamente de aplicações Office (Word, Excel, PowerPoint, Outlook) no campo de complementos das solicitações, para que não seja necessário colar o conteúdo em um editor de texto antes de copiá-lo para o fluig.

- Habilitada a execução de eventos de processos do tipo *after,*com exceção do evento *afterStateEntry,* na atividade inicial de subprocessos.

- Correção para permitir que processos configurados pelo editor *web* que contenham propriedades adicionais (aba Avançado) sejam salvos e liberados para uso.

- A atividade tipo [Envio de mensagem (Email)](https://tdn.totvs.com/x/1oSNBw) foi ajustada para atribuir a tarefa subsequente ao primeiro usuário possível, caso nenhum responsável tenha sido definido.

Esse mesmo comportamento é aplicado às atividades do tipo Sinal, *Fork* e *Join*.

- Movimentação para atividades automáticas através de usuário substituto reparada em dispositivos móveis (iPhone e iPad / Android).

- O método *setTaskComments* foi removido dos eventos padrão devido à inconsistências em sua execução. Em seu lugar deverá ser utilizado o *setTaskComments* da [hAPI](https://tdn.totvs.com/display/fluig/Desenvolvimento+de+Workflow#DesenvolvimentodeWorkflow-hAPI), que foi habilitado para executar também no evento *afterStateLeave*. 

- [Novo](#)
- [Antigo](#)

[?](#)

| `function afterStateLeave(sequenceId) {````var numProcesso = getValue(``'WKNumProces'``);````var userId = getValue(``"WKUser"``);````var obs = hAPI.getCardValue(``"transportadora"``);` ```hAPI.setTaskComments(userId, numProcesso,``0``, obs);``}` |
| --- |

[?](#)

| ```function afterStateLeave(sequenceId) {````var numProcesso = getValue(``'WKNumProces'``);````var userId = getValue(``"WKUser"``);````var obs = hAPI.getCardValue(``"transportadora"``);` ```setTaskComments(userId, numProcesso,``0``, obs);``}` |
| --- |

- Exibição das informações de atividades configuradas com mecanismos de atribuição personalizados na aba Detalhes durante a execução da solicitação.

- Melhorada a rotina de deserialização de apontamentos nas atividades de uma solicitação para evitar o registro de falhas no *log* da plataforma quando não houver valor definido.

- Ajuste no procedimento de [conversão de processos](/pages/viewpage.action?pageId=233763179) para impedir que solicitações de processos cujos fluxos estejam pendentes em uma atividade de Subprocesso sejam convertidas.

- Correção na exibição de solicitações que contenham observações adicionadas antes da [atualização 1.5.8](/pages/viewpage.action?pageId=234606895) por usuários atualmente inativos na plataforma.

- O método *getUserTaskLink* foi disponibilizado novamente na hAPI, permitindo sua utilização no evento *afterTaskCreate*.

- Correção para que os prazos de conclusão das atividades do processo, que estavam sendo zerados, sejam mantidos ao exportá-los para o servidor através do *plugin* fluig Studio.

Para aplicar essa correção, é necessário atualizar o *plugin* fluig Studio. Para mais informações consulte o [Guia de atualização fluig Studio.](/pages/viewpage.action?pageId=240298991)

- Ajuste para habilitar o envio de notificações via *e-mail* referente a processos que possuam o recurso de [segurança de anexos](https://tdn.totvs.com/pages/viewpage.action?pageId=263784090) configurada.

- Correção na movimentação do fluxo para tarefas precedidas pelo componente Timer, cujo código da atividade sequente estava sendo atribuído de forma incorreta.

- Retirada a visualização da página “Configurar processos” das permissões padrão para usuários comuns (papel *user*) cadastrados em novas empresas criadas na plataforma.

Esta permissão pode ser concedida pelo administrador através do Painel de Controle. [Saiba mais](https://tdn.totvs.com/pages/viewpage.action?pageId=195301415).

- Incluída a habilidade de mover as *Swimlanes* pelos diagramas através do editor *web* de processos. A possibilidade de redimensionas as *Swimlanes* permanece disponível.

- Habilitado o filtro para qualquer campo de dataset, inclusive PK, nos campos tipo zoom de formulários criados no editor *web* ou desenvolvidos com o componente do Style Guide.

- Correção para permitir que usuários pertencentes a grupos com um espaço como último caractere do código do grupo possam assumir tarefas atribuídas para esse grupo.

- Correções para que seja possível acessar a Central de Tarefas e iniciar solicitações quando o mecanismo personalizado fizer uso da hAPI.

- Gravação dos dados e tarefas criadas no formulário do processo [Listar Tarefas](/pages/viewpage.action?pageId=233763185) (*Ad-Hoc*) ao acionar o botão Salvar, para que seja possível retornar à solicitação posteriormente e incluir novas tarefas e/ou alterar as informações cadastradas.

- Ajuste na exportação de processos desenvolvidos via fluig Studio para que a categoria e demais dados sejam mantidos.

- Corrigida a verificação do diagrama para permitir a exportação do processo, no caso de um componente *Fork* estar ligado a um componente receptor Link.

- Ao executar uma tarefa com fluxo de retorno os complementos ficarão organizados no histórico da respectiva atividade que o mesmo for incluído.

- Corrigida inconsistência para que seja possível iniciar uma solicitação via aplicativo móvel e movimentar o fluxo para uma próxima atividade em que o mecanismo de atribuição tenha sido definido por executor de atividade, sem que seja exibida uma lista de usuários em branco.

- Habilitada a ordenação crescente/decrescente de campos de formulário do tipo Data no formato "DD/MM/AAAA" e "AAAA-MM-DD" apresentados por filtros aplicados na Central de tarefas. Saiba mais sobre a aplicação de filtros através do [Help fluig](https://tdn.totvs.com/display/HF/Aplicar+filtro).

- Corrigida a utilização da assinatura digital, incluindo movimentação e assinatura de processos, por usuários substitutos.

- Fechamento da modal apresentada para exibição de documentos anexados à uma solicitação, quando utilizado o navegador Internet Explorer.

- Corrigida inconsistência que ocasionava erro na movimentação de uma atividade automática sem mecanismo, para um subprocesso com mecanismo de atribuição para um papel configurado e com a opção "Movimentar para a próxima atividade" habilitada.

- Melhoria realizada para que registros de formulários gerados a partir de um processo workflow, sejam apresentados como resultado de pesquisa de uma busca simples.

- Incluída validação em mecanismo de atribuição de atividade inicial de processo workflow exportado.

- Corrigido abertura de subprocesso *Adhoc* ao clicar em "Expandir subprocesso" no plugin fluig Design, antes ao clicar nesta opção nenhuma ação ocorria. Foi criada também a função de importar automaticamente o processo caso o mesmo não esteja na *workspace*.

**ECM**

- Permissões de *download* definidas na aba Segurança, disponível nas propriedades dos documentos, passarão a ser levadas em consideração por dispositivos móveis (Android) em ambientes com a chave *enableDocumentSecurityOnMobile* habilitada.

- Correção na conversão de arquivos Base64 publicados na plataforma através do método *createSimpleDocument*do*Web Service*[ECMDocumentService](https://tdn.totvs.com/pages/viewpage.action?pageId=73084007#Utiliza%C3%A7%C3%A3odeWebservices-ECMDocumentService).

- Aplicada tradução nos botões da janela que exibe as mensagens disparadas por comandos *throw* dos eventos *beforeMovementOptions ou beforeSendValidate*.

- Busca no componente Zoom do [*Style Guide*](https://style.fluig.com) reparada para que o valor informado no campo pelo usuário seja filtrado ao clicar no botão em formato de lupa.

- Atualização nas dependências do BIRT para permitir a execução de relatórios que incluem datasets que realizam chamadas a *web services*.

- Adequação do funcionamento do parâmetro *limit* para que ele seja aplicado apenas em campos do tipo Zoom que utilizem datasets internos da plataforma. Em datasets customizados, o limite deve ser configurado pelo desenvolvedor.

- Correção no procedimento de verificação de permissões utilizado pelo aplicativo fluig Mobile para acessar a pasta privada Meus Documentos.

- Aprimorada a verificação de permissões para visualização de registros de formulários acessados a partir da busca por usuários que não participam do processo.

- Correção para que a plataforma permita habilitar/desabilitar a visualização interna de documentos específicos, através da opção disponível nas [propriedades](https://tdn.totvs.com/pages/viewpage.action?pageId=243648184) dos documentos, em ambientes que utilizam o [fluig Viewer](/display/fluig/Sobre+o+Fluig+Viewer).

- Ajuste na gravação de dados de formulários criados a partir do editor *web* do fluig e que contenham campos do tipo Lista, onde mais de uma opção pode ser selecionada.

- Corrigida duplicidade na exibição dos filtros da [pesquisa avançada de documentos](https://tdn.totvs.com/x/IvTuDQ) quando utilizados campos customizados no filtro por metadados.

- Resolvido conflito entre os *widgets* Documentos favoritos e Processos durante a abertura de um documento listado no *widget*.

- Correção no preenchimento de um *combo*com os dados de um dataset quando este contiver apenas um registro para que seja retornada a descrição e não o código do campo.

- Com a adoção do 9º dígito por todas as regiões do Brasil, as máscaras “Telefone” e “Telefone SP” para campos do tipo Texto do editor de formulários *web* foram renomeadas para “Telefone Fixo” e “Telefone Celular”, respectivamente.

- Correção no *download,* através do navegador Mozilla Firefox, de arquivos anexados às solicitações de processos.

- Habilitada a visualização de documentos que possuam campos customizados através do aplicativo para dispositivos móveis fluig Mobile.

- Foram realizados ajustes para que seja possível realizar o download corretamente do arquivo com o nome original solucionando a inconsistência. Evitando que seja incluído o caractere + no lugar dos espaços.

- Corrigida inconsistência no método *setShowDisabledFields* para que campos do tipo Zoom sejam desabilitados durante a visualização de solicitações.

- Ajuste na visualização de documentos acessados através do link de compartilhamento.

- Correção no valor da variável '*WKCompletTask* para evitar inconsistências durante a validação de formulários com campos do tipo *checkbox*.

- Ao fazer upload de arquivos como anexos de uma solicitação ou na navegação de documentos em um momento em que a rede estiver instável ou indisponível será apresentada uma mensagem informando o usuário sobre a inconsistência.

- Ajuste na altura dos botões Confirmar e Fechar no recurso de *check-in* de documentos para que sejam exibidos corretamente em telas com resoluções menores.

- Tratamento realizado para adicionar as mascaras nos registros de formulários, que não foram salvos com a mascara para exibir corretamente as informações do campo hora.

- Ajuste realizado ao salvar imagens como anexos em registros de formulários para que sejam exibidas corretamente. 

- Corrigida inconsistência na exibição das variáveis WKDef e WKVersDef para que os valores dos mesmos sejam apresentados na visualização do formulário.

- Corrigida situação que apresentada erro de permissão durante a publicação de uma estrutura de pastas (zip) na navegação de documentos.

- Na chamada de criação do documento com docAPI, não era possível criar uma pasta e um documento em seguida, devido a validação de permissões da pasta que não era atualizada com permissão para o usuário que a publicou. Foi realizado um ajuste que irá garantir a publicação do documento mediante correta validação de segurança da pasta.

- Habilitação da visualização interna de documentos na pasta particular do usuário quando o parâmetro *oldViewer* estiver ativado.

- Restaurada a visualização das propriedades dos documentos para usuários que não possuem a permissão de inclusão de novos documentos (ECM: Novo Documento), por esta ter sido retirada pelo administrador.

- Tratamento realizado para que atributos do tipo *rows* com valor nulo não afetem a renderização de um formulário.

**Social**

- Restaurada a edição de itens da aba Atributos no Painel de Controle do componente Gamificação.

- Corrigida a situação em que as conversas do usuário são duplicadas após reiniciar os serviços do fluig.

- Ajuste na contagem de apoios em artigos compartilhados na *timeline* de comunidades para evitar duplicação dos apoiadores.

- Inclusão dos metadados nas conversas em grupo criadas através do aplicativo móvel do fluig Messaging para Android, evitando inconsistências no acesso às conversas via navegador *web*.

- Desabilitado o recurso "Sair" para conversas entre dois participantes no aplicativo fluig Messaging para Android. Esta opção estará disponível apenas para conversas em grupo.

- Substituição do reprodutor de vídeos utilizado na *timeline* para que o carregamento do vídeo extensos ocorra mais rapidamente.

- Correção na exibição de informações dos arquivos de áudio, como nome do arquivo, extensão e tamanho, enviados através do fluig Messaging para Android.

**WCM**

- Resolvido conflito na exibição de relatórios no *widget* Analytics em páginas que também possuam o *widget* Endereço Web.

- Verificação para identificar o uso de código HTML no *widget* Editor de Conteúdo e gravá-lo em uma propriedade.

- Correção na publicação da imagem de ícone no *widget* Fale Conosco da fluig Store.

- Adicionada verificação de declarações duplicadas na [lista de recursos](https://tdn.totvs.com/x/0BkSCw) para evitar inconsistências no *deploy* de *widgets* personalizadas.

**LMS**

- Correção no procedimento de cópia de tópicos que possuem pré-requisitos para que essa informação não seja copiada, visando não afetar a utilização dos tópicos colados em outras turmas.

- Apresentação das trilhas em que o usuário está matriculado na página inicial do menu de Aprendizado.

- Solucionada a inconsistência ao salvar a pontuação em uma atividade extraclasse (com ou sem anexo).

- Tamanho do nome das pastas criadas nos catálogos de Trilhas e Treinamentos e Disciplinas e Turmas limitado à quantidade de caracteres suportada pelo dicionário de dados.

- Incluído (*) ao lado do campo "Disciplinas/Turmas selecionadas" do cadastro de avisos para indicar a obrigatoriedade dessa informação.

- Ajuste na finalização de um tópico que já teve todos os seus conteúdos executados quando a disciplina está configurada com a liberação de certificados mediante o andamento dos conteúdos.

- Adicionada a informação “minutos” ao lado do período definido como carga horária de um treinamento/trilha na página Meu Aprendizado.

- Correção no contador de Atividades de Aprendizado exibido na Central de tarefas para que o número exibido reflita a quantidade de tarefas pendentes.

- Adaptação da mensagem apresentada após o usuário solicitar matrícula em treinamentos e trilhas, caso este não possua permissão para cancelar a requisição.

Saiba mais sobre a requisição de cancelamento de matrículas em [Trilhas](https://tdn.totvs.com/display/public/HF/Trilha) e [Treinamentos](https://tdn.totvs.com/x/Gv7uDQ) no Help fluig.

- Carregamento automático da página Início do menu Meu Aprendizado após a conclusão pelo usuário de treinamentos/trilhas ou turmas para que as alterações sejam refletidas sem a necessidade de atualização manual da página.

- Ajuste no tamanho da tela de apresentação de conteúdos, como textos, PDFs e vídeos para melhorar a distribuição e diminuir o espaço em branco.

- Alteração da nomenclatura utilizada nos botões para encerramento de matrículas em treinamentos, trilhas ou turmas, de “Finalizar Matrícula” para “Concluir”.

- Incluída nova mensagem ao tentar matricular um usuário para o qual já existe uma requisição de matrícula e onde a aprovação de matrícula não é necessária.

**Mobile**

- O procedimento de sincronização de datasets (Datasets *Offline*) foi alterado para que os campos do tipo String não sejam convertidos para o tipo Inteiro no Mobile. Esses campos agora serão tratados como *Text*.

- Ajuste no método *reloadZoomFilterValues* em um componente Zoom para garantir o funcionamento em solicitações movimentadas via dispositivo móvel tanto no modo *online* quanto *offline*.

- Ajuste na exibição do campo de filtros na tela Tarefas a Concluir da Central de Tarefas em dispositivos iPhone/iPad que utilizem o sistema operacional iOS 10.

- Corrigida a verificação de usuários substitutos por atividades automáticas, quando a movimentação do processo é realizada via iPhone ou iPad.

- Ajuste nos resultados retornados ao buscar pelo conteúdo do campo identificador da solicitação na tela de Tarefas a Concluir, para que não sejam exibidas solicitações duplicadas.

- Correção na visualização de documentos protegidos com senha através do aplicativo para iPhone e iPad.

- Arquivos CSS e JS armazenados em pastas separadas do formulário, mas referenciados por ele serão carregados pelo aplicativo fluig Mobile para Android, assim como já ocorre para dispositivos com o sistema operacional iOS e na plataforma *web*.

- Corrigida inconsistência ao realizar uma chamada *webservice* com requisições ?wsdl através de formulários.

- Ajustado envio de notificações Push do aplicativo fluig no dispositivo IOS. Anteriormente o envio das notificações estava ocorrendo apenas em dispositivos Android.


<!-- anchors: Atualização1.5.13-Social, Atualização1.5.13-BPM, Atualização1.5.13-Arquitetura, Atualização1.5.13-LMS, Atualização1.5.13-WCM, Atualização1.5.13-Mobile, Atualização1.5.13-Identity, Atualização1.5.13-Analytics, Atualização1.5.13-NovidadesemDocumentação, Atualização1.5.13-Correções, 1, 1-a, highlighter_670060, 1-b, highlighter_111701 -->
