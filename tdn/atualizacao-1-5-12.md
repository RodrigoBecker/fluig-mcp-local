---
title: "Atualização 1.5.12"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=244935094"
scraped_at: "2026-03-09T03:16:01.988Z"
depth: 2
anchors: 13
child_links: 72
---

# Atualização 1.5.12

![](/download/attachments/181966041/espanhol.png?version=2&modificationDate=1422631676000&api=v2) ¿Habla Español? Haga [clic aquí](https://tdn.totvs.com/pages/viewpage.action?pageId=268585619) para ver el Release Notes en Español.

![](/download/attachments/181966041/ingles.png?version=2&modificationDate=1422631693000&api=v2) Do you speak English? [Click here](https://tdn.totvs.com/display/fluigeng/Update+1.5.12) to view the Release Notes in English.

Confira abaixo as novidades na atualização 1.5.12 do fluig:

## BPM

**Fluxo de informações entre processo pai e processo filho**

Subprocessos são ótimos na modelagem de processos, eles criam uma forma de reuso e isolamento de processos que ajuda no dia a dia dos desenvolvedores.

![](/download/attachments/244935094/Fluig_-_platform__resource_moxtra-process_workflow_diagrams_liga_process__0_-_Eclipse_-__Users_josefaria_Documents_workspace2.png?version=1&modificationDate=1476830830000&api=v2)

Entretanto, adicionar informações de formulário em subprocessos envolvia codificar toda essa troca de informação entre o processo pai e filho.

Para tornar sua criação de processos muito mais rápida e segura, agora o administrador do fluig pode parametrizar a troca de informações entre o formulário do processo principal e o formulário do seu subprocesso.

Ao configurar o subprocesso, visualmente o administrador relaciona os campos e o sentido no qual a informação fluirá na aba **Campos**: se do campo do formulário do processo pai para o campo do formulário do processo filho ou vice e versa.

Tudo isso muito simples, rápido e sem nenhuma linha de código.

Fique por dentro!

Informações mais detalhadas podem ser obtidas no tópico **Configurar Sub processo** em [Configurar atividades e fluxos](https://tdn.totvs.com/display/HF/Configurar+atividades+e+fluxos).

****

****

****

**Mantenha o fluxo natural dos seus processos**

No atendimento fluig notamos diversas aplicações que os clientes utilizam e isso dá força para o fluig a cada dia evoluir para melhor atender as empresas.

Nessa atenção às necessidades dos clientes, agora no fluig é possível movimentar as solicitações *workflow* entre um processo e seus subprocessos sem interromper o fluxo do seu negócio.

Marcando a nova opção **Movimentar para próxima atividade**, quando o fluxo atingir o subprocesso, ao invés de ser direcionado para o evento inicial, ele será encaminhado diretamente para a atividade seguinte, permitindo inclusive a definição do responsável pela execução.

Dessa forma, é removido um passo adicional do processo e a experiência do usuário se torna mais fluída e desenvolvedores de processos do fluig não precisam mais codificar regras para criar essa experiência que normalmente é solicitada nos subprocessos.

- [Opção Movimentar para próxima atividade](#)
- [Movimentação da solicitação para o suprocesso](#)

![](/download/attachments/244935094/FLUIGINV-19159.png?version=1&modificationDate=1476125614000&api=v2)

**A opção "Movimentar para próxima atividade" está disponível nas configurações de atividades do tipo Subprocesso.**

![](/download/attachments/244935094/FLUIGINV-19159-2.png?version=6&modificationDate=1476902662000&api=v2)

**Primeira atividade do subprocesso exibida na seleção.**

**Mecanismos de atribuição mais poderosos**

Para o desenvolvedor de processos fluig, agora a plataforma permite consultar e realizar ações mais complexas usando a hAPI.

Isso oferece uma nova gama de possibilidades na hora de atribuir as tarefas do seu processo em sua empresa. Isso é possível utilizando a hAPI, a mesma utilizada em outros eventos *workflow*, para ter acesso a dados do formulário e do processo na hora de resolver a lista de usuários responsáveis pelas tarefas na sua empresa.

É mais informação ao seu alcance. Isso é o fluig.

Fique por dentro!

Confira mais detalhes em [Mecanismo de atribuição personalizado](https://tdn.totvs.com/pages/viewpage.action?pageId=142804157#Mecanismodeatribui%C3%A7%C3%A3opersonalizado-UtilizandohAPI).

## ECM

**Fluig Viewer na nuvem já é realidade!**

No dia a dia, interagimos com diversos documentos, dos mais variados formatos. Com o fluig, isso não é um problema, pois você consegue visualizá-los na própria plataforma sem a necessidade de aplicativos específicos nas estações de trabalho para diversos formatos de documentos. Isso tudo graças ao fluig Viewer.

Com o fluig Viewer você pode visualizar uma série de documentos de forma rápida e nativa, independente do departamento da sua empresa, o time financeiro irá conseguir ver todas as suas planilhas do Excel, o time de engenharia poderá ver seus desenhos técnicos de CAD, o time de *marketing* e *design* conseguirão ver suas imagens em alta resolução. Se você é um hospital, sem problemas, suas imagens do tipo DCM serão visualizadas facilmente. Saiba mais em [Sobre o fluig Viewer](https://tdn.totvs.com/display/fluig/Sobre+o+fluig+Viewer).

Não existe a necessidade de compra ou *upgrade* de servidores, nem equipe especializada ou treinada para fazer a utilização do serviço. Não é necessário fazer a instalação em um servidor. Basta configurar o [fluig Viewer *cloud*](https://tdn.totvs.com/pages/viewpage.action?pageId=235327464) e utilizá-lo. Por tratar-se de um serviço que já está pronto para uso, o processo de implantação é mais rápido e pode ser acessado por qualquer lugar do mundo. As atualizações são feitas nas nuvens, de maneira transparente para o usuário, e não de maneira manual como os *softwares* tradicionais.

![](/download/attachments/244935094/FLUIGINV-22103.png?version=1&modificationDate=1477338293000&api=v2)

## Social

**Edite publicações e comentários**

Digitou errado e precisa corrigir ou melhorar uma frase em uma publicação? Não se preocupe, você não terá que refazer tudo, basta editá-la!

Sim, você pediu e o fluig atendeu!

Agora, o usuário criador pode editar o conteúdo de publicações e comentários, tanto em sua *timeline* pessoal quanto na *timeline* de comunidades nas quais participa. A opção de edição é exibida na barra de ações correspondente à publicação ou comentário. A edição segue a mesma regra da criação, ou seja, permite no mínimo 2 e no máximo 600 caracteres. Ao editar o conteúdo, todos os usuários relacionados a ele são notificados por meio da Central de Notificações e o conteúdo será identificado por um ícone que exibirá a data e a hora da alteração.

Para administradores

Nas suas comunidades esse recurso pode ser desabilitado na aba de permissões. Para publicações na *timeline* pessoal não é possível desabilitá-lo.

- [Edição de publicação](#)
- [Edição de comentário](#)

![](/download/attachments/244935094/FLUIGINV-20423-1.png?version=1&modificationDate=1477396560000&api=v2)

![](/download/attachments/244935094/FLUIGINV-20423-2.png?version=1&modificationDate=1477396575000&api=v2)

## Mobile

**Recursos possantes do fluig Mobile nos formulários e widgets**

Quer usar os melhores recursos do celular nos seus desenvolvimentos no fluig?

Com o novo protocolo fluig:// é possível incluir *links* para determinadas áreas do fluig Mobile, como documentos, perfis de usuários e comunidades. Use eles dentro de formulários, *widgets* e até páginas externas. A grande vantagem deste recurso é redirecionar estes *links* para o aplicativo nativo do fluig, ao invés de carregá-los através do navegador do dispositivo móvel.

Além disso, para tornar seus desenvolvimentos ainda mais interativos, é possível incluir protocolos como tel:// e mailto://, por exemplo, para invocar os aplicativos de telefone e *e-mail* do sistema operacional do aparelho.

Tem um endereço que a pessoa precisa ir que está escrito em um formulário? Acione o Waze para traçar a melhor rota para o destino usando o recurso de geolocalização para obter as coordenadas atuais do usuário.

Saiba mais!

Saiba como implementar essa novidade na documentação sobre o [Protocolo fluig://](/pages/viewpage.action?pageId=240309710) e não deixe de conferir em nosso diretório GIT os exemplos de utilização para *e-mail*, [telefone](https://git.fluig.com/projects/SAMPLES/repos/sample-mobile-tel/browse) e [Waze](https://git.fluig.com/projects/SAMPLES/repos/sample-mobile-waze/browse).

![](/download/attachments/244935094/mobile.jpg?version=1&modificationDate=1476876299000&api=v2)

**Movimentação em bloco no fluig Mobile**

Movimente mais de uma solicitação na palma das suas mãos. Agora você pode selecionar mais de uma tarefa para movimentá-las em bloco, desde que elas atendam aos seguintes requisitos:

- mesmo processo, atividade e versão;
- enviar para um único responsável, papel ou grupo;
- enviar para mesma atividade de destino;
- não necessita de alteração no formulário.

Ficou muito mais fácil e produtivo aprovar suas solicitações de uma vez em seus dispositivos móveis.

Observação

Recurso disponível em iOS e Android.

![](/download/attachments/244935094/IMG_2996_iphone6plus_silver_portrait.png?version=1&modificationDate=1477914111000&api=v2)

**Mais espaço para o campo identificador**

Visualize mais informações do identificar do formulário.**

O identificador do formulário pode ter muita informação importante, e apenas uma linha pode ser muito pouco para mostrar tudo. Por isso, deixamos a informação disponível em até três linhas para que possa ficar visível e o usuário possa escolher a solicitação de uma forma mais rápida e assertiva.

Observação

Recurso disponível em iOS e Android.

![](/download/attachments/244935094/IMG_0454_iphone6plus_silver_portrait.png?version=1&modificationDate=1477914255000&api=v2)

**Filtre por identificador ou número da solicitação**

Encontre a solicitação digitando informações do identificador ou pelo seu número. Sim, você pediu e agora temos essas duas formas de busca! Por padrão, a busca fica habilitada somente para identificador, porém você pode mudar para número da solicitação se desejar.

Observação

Recurso disponível em iOS e Android.

![](/download/attachments/244935094/02.png?version=1&modificationDate=1477914728000&api=v2)

## Arquitetura

**Integre o fluig com o fluig Identity via API Pública de forma mais simples**

A nova versão do método [identityConfig](https://api.fluig.com/resource_WCMAdminTenantRest.html#path__admin_tenant_identityConfig_v2.html) do serviço *Tenants* foi simplificada através da diminuição dos parâmetros necessários para a integração com o fluig Identity.

Atenção

A versão anterior do método [identityConfig](https://api.fluig.com/resource_WCMAdminTenantRest.html#path__admin_tenant_identityConfig_v2.html) foi depreciada.

**Novos métodos disponíveis na API Pública**

Estão disponíveis novos métodos relacionados a algumas operações da edição de páginas na API Pública do fluig. Confira:

- [pageHistory](https://api.fluig.com/resource_PageRest.html#path__2.0_pages_pageHistory_-pageCode-.html);
- [createPageDraftFromVersion](https://api.fluig.com/resource_PageRest.html#path__2.0_pages_createPageDraftFromVersion.html);
- [reloadPageLayout](https://api.fluig.com/resource_PageRest.html#path__2.0_pages_reloadPageLayout.html);
- [publishPageDraft](https://api.fluig.com/resource_PageRest.html#path__2.0_pages_publishPageDraft.html).

## LMS

**Integração fluig LMS x TOTVS HCM**

Agora é possível usufruir da integração do fluig LMS com o TOTVS HCM por meio de mensagens - EAI2. Desta forma, você pode integrar o cadastro de treinamentos, usuários e processos do aprendizado com outros produtos.

Fique por dentro das integrações disponíveis com o TOTVS HCM:

TOTVS HCM → fluig LMS

- Usuários;
- Matrículas em treinamentos.

fluig LMS → TOTVS HCM

- Treinamentos;
- Requisições de matrículas em treinamentos;
- Notas de usuários.

Saiba mais

Confira mais informações em [Configurando integrações via EAI](https://tdn.totvs.com/pages/viewpage.action?pageId=212894462).

**Os recursos Habilidades e Avisos estão de cara nova!**

Visando mais clareza, simplicidade e performance para o usuário do fluig LMS, as telas dos recursos Habilidades e Avisos estão muito mais bonitas e modernas. Além de manter as informações já existentes, agora a janela dos recursos segue o padrão do Style Guide do fluig.

Fique por dentro!

Esses recursos são encontrados em **Aprendizado** > **Administrar** > **Habilidades** e **Aprendizado** > **Avisos**.

Para obter mais informações sobre eles, acesse o Help online de [Plataforma ❙ Habilidades](/pages/viewpage.action?pageId=233766527) e de [Plataforma ❙ Avisos](/pages/viewpage.action?pageId=233763523).

- [Habilidades](#)
- [Avisos](#)

![](/download/attachments/244935094/FLUIGINV-22093-2.PNG?version=1&modificationDate=1477400402000&api=v2)

![](/download/attachments/244935094/FLUIGINV-22093.PNG?version=1&modificationDate=1476906114000&api=v2)

## Novidades em documentação

- Procedimentos de configuração do Google Drive atualizados no manual de [edição colaborativa com Google Drive](https://tdn.totvs.com/pages/viewpage.action?pageId=219694266).

- Saiba como [implementar](https://tdn.totvs.com/pages/viewpage.action?pageId=255755875) código JavaScript em um formulário que utiliza abas de navegação ([*Navs*](https://style.fluig.com/components.html#nav)) do Style Guide.

- Incluímos informações sobre a propriedade WKManagerMode, que identifica se a solicitação está sendo movimentada pelo gestor do processo, na documentação sobre [Desenvolvimento de Workflow](https://tdn.totvs.com/display/fluig/Desenvolvimento+de+Workflow#DesenvolvimentodeWorkflow-Par%C3%A2metrosworkflowparadesenvolvimentodeformul%C3%A1riossobaplataforma).

- Adicionada orientação a respeito da manipulação do HTML de formulários através de *scripts* JavaScript na seção FormController da página [Desenvolvimento de Formulários](https://tdn.totvs.com/pages/viewpage.action?pageId=75270483#DesenvolvimentodeFormul%C3%A1rios-FormController).

- Confira a documentação atualizada sobre [Nomenclatura e Estrutura de Formulários](https://tdn.totvs.com/pages/viewpage.action?pageId=244448460).

- Orientações sobre a autenticação de usuários no fluig Mobile utilizando a [senha do Active Directory](https://tdn.totvs.com/pages/viewpage.action?pageId=266965585).

- A documentação sobre [Consumo de Banda](https://tdn.totvs.com/display/fluig/Consumo+de+Banda) foi atualizada com dados sobre as páginas de Aprendizado.

- Incluímos uma nova seção sobre como gerar o arquivo CSR na documentação de [configuração HTTPS](https://tdn.totvs.com/display/fluig/Configurar+HTTPS) do fluig.

- Relacionamos os tipos de arquivos suportados pela [Impressão de Cópia Controlada](https://tdn.totvs.com/pages/viewpage.action?pageId=152802071#Impress%C3%A3odeC%C3%B3piaControlada-Tiposdearquivossuportados) na documentação técnica desse recurso. 

Esta informação também está disponível no [Help fluig](https://tdn.totvs.com/pages/viewpage.action?pageId=235325457).

- Gostaria de saber mais sobre a configuração de serviços de componentes? Acesse a nova documentação [aqui](https://tdn.totvs.com/pages/viewpage.action?pageId=267788666) e fique por dentro de todos os detalhes.

## Correções

**BPM**

- Processos configurados com a [atividade final de cancelamento](https://tdn.totvs.com/display/fluig/Eventos+Finais+de+processo) (BPMN 2.0) estavam sendo finalizados, ao invés de cancelados quando atingiam essa tarefa. Esse comportamento foi corrigido e, sendo assim, eventos de cancelamento *before* e *after* serão executados quando o fluxo de uma solicitação for movimentado para esse tipo de atividade.

Atenção

Verifique se algum dos processos cadastrados em seu ambiente utilizam o evento citado acima, caso o cancelamento não seja o comportamento desejado, substitua-o nos respectivos *workflows*, [exporte](https://tdn.totvs.com/x/wiswDg) o processo e [converta](https://tdn.totvs.com/x/5qJSDg)as solicitações já abertas para a última versão.

Acesse a documentação [com as atividades finais de processo](https://tdn.totvs.com/x/RoSNBw) para conhecer os tipos disponíveis.

- Verificação para que sejam retornados apenas os registros de formulário ativos na consulta de dataset.

Observação

A opção “Listar apenas registros ativos” deverá estar habilitada nas propriedades do formulário.

- Ajuste no comportamento da função *focusInput* em formulários abertos através do navegador Google Chrome.

- Permitida a chamada de eventos desenvolvidos sobre a plataforma a partir de *scripts* incluídos nas atividades do tipo Serviço.

- Correção na execução do método *setCardValue* quando utilizado em eventos *afterStateEntry* e *afterTaskComplete*.

- Utilização das credenciais de um administrador, que não faça parte do *pool* de responsáveis pela tarefa, como autenticação no método *takeProcessTask* do *Web Service Workflow*.

- Inclusão de alertas no *log* da plataforma para que seja possível identificar quando os parâmetros do método *createAdHocTasks* da hAPI não foram informados.

- Verificação do mecanismo de atribuição em atividades iniciais para garantir que, caso seja definido um mecanismo, este tenha sido configurado antes da exportação do fluig Studio para o servidor.

- Acesso às tarefas do usuário substituído de acordo com a cor selecionada no gráfico da Central de Tarefas.

- Ajuste na geração da chave MD5 que permite a edição de formulários criados através do editor *web* da plataforma, pois era exibida uma mensagem informando não ser possível editar o formulário. 

Fique atento!

Caso não esteja conseguindo editar algum formulário criado através do editor *web* do fluig, após aplicar a Atualização 1.5.12, [restaure o formulário](https://tdn.totvs.com/pages/viewpage.action?pageId=233763113#Formul%C3%A1rio-Restaurarvers%C3%A3odoformul%C3%A1rio) para uma versão anterior. Se o problema persistir, acione o [Suporte fluig](https://suporte.totvs.com/portal/p/10098/suporte-fluig-home).

- Incluída a possibilidade de atualizar documentos publicados como anexos de uma solicitação através do menu Propriedades. Anteriormente este procedimento estava disponível apenas para documentos anexados via ECM.

- Foi realizado um ajuste no cadastro de Feriados do Painel de Controle para permitir que a data de um feriado corrente possa ser informada manualmente ou pelo calendário.

- A janela de seleção de data do componente *Calendar* do fluig Style Guide se sobrepunha a parte dos elementos da página de visualização de solicitações. Este comportamento foi corrigido para que o calendário não seja exibido sobre esses elementos.

- A notificação enviada para o requisitante quando uma solicitação é iniciada através do *Web Service*, que havia sido eliminada em versões anteriores, foi reimplementada.

- O método *getParentInstance* da hAPI foi corrigido para que seja possível utilizá-lo na atividade inicial do subprocesso e não apenas nas demais atividades do fluxo.

- Solucionado o envio repetido de notificações para membros de um papel quando uma tarefa expirada é movimentada automaticamente e os agendamentos de fluxo automático e tarefas expiradas estão sendo executados ao mesmo tempo.

- Habilitado o envio de notificação por *e-mail* para o solicitante nos casos em que a solicitação é iniciada via *Web Service*.

- Incluída verificação para impedir que complementos vazios – com apenas espaços e quebras de linha - sejam adicionados ao histórico de uma solicitação.

- Correção para permitir fluxos de retorno em atividades cujo mecanismo de atribuição tenha sido configurado Para um Grupo ou Para um Papel.

- Tratamento para permitir comentários em solicitações movimentadas para a atividade final de um processo através método *saveAndSendTask* do serviço *WorkflowEngineService*.

- Incluída uma mensagem informativa na página [Converter Solicitações](https://tdn.totvs.com/pages/viewpage.action?pageId=233763179), quando a versão atual do processo possuir uma tarefa em consenso e a nova versão não. A plataforma só permite converter uma tarefa em consenso para outra tarefa desse mesmo tipo.

Acesse [essa FAQ](https://tdn.totvs.com/pages/viewpage.action?pageId=240296678) e saiba mais sobre como converter solicitações no fluig.

- Correção para enviar todas as informações dos usuários para o mecanismo de atribuição customizado. A ausência de certas informações do dataset *colleague* causava inconsistências nas validações desenvolvidas.

- Devido à uma inconsistência, as atividades de um processo encerrado continuavam a enviar notificações de movimentação automática por atraso. Esse comportamento foi corrigido.

- Correção para que a plataforma diferencie processos com mecanismos de atribuição por associação configurados na atividade inicial, de forma que as regras de associação sejam aplicadas conforme foram definidas em cada processo. Anteriormente o mecanismo de um processo estava sendo aplicado aos demais com o mesmo tipo de atribuição.

- Criada uma validação para impedir que processos sejam liberados quando existe uma atividade com a descrição em branco, garantindo que, ao movimentar a solicitação, o usuário possa visualizar a descrição de uma atividade do tipo *link* para a qual a solicitação está sendo enviada.

- Inclusão de observações na solicitação independentemente dela estar ou não iniciada, ou seja, é possível incluir observações na movimentação do início para a primeira atividade, sendo que elas também serão exibidas no histórico posteriormente.

- Ajuste no retorno da variável WKCompletTask ao efetuar as ações Salvar, Transferir e Enviar a solicitação.

- Exibição de processos que possuem a categoria e a subcategoria iguais na janela de inicialização de solicitações.

- Ajuste para não permitir que dois usuários assumam ao mesmo tempo uma tarefa que está em *pool*.

Observação

Atualmente esse ajuste não contempla ambientes espelhados.

Também é possível impactar o desempenho de ambientes que utilizam com frequência o recurso para assumir tarefas simultaneamente.

- Correção no método de busca de anexos de processo para validar o diretório de volume quando a inclusão do arquivo for realizada por um substituto via aplicativo móvel. 

- Verificação da pasta de *upload* do usuário anterior à publicação de anexos ou movimentação de solicitações. Se não existir, a pasta será criada.

- Correção de inconsistência ocorrida ao acessar solicitações em versões antigas de processos cujo formulário tenha sido desatrelado.

**Arquitetura**

- Exibição das páginas de Denúncias, Palavras Restritas e Log de cópia controlada para usuários/grupos/papéis que recebam permissão para visualizá-las do administrador da plataforma.

Fique atento

É necessário que os usuários/grupos/papéis tenham permissão de visualização também nas páginas pai destes recursos.

- Apresentação dos dados de Experiências de Uso quando a plataforma estiver no idioma espanhol.

- Verificação de e-mails em branco ou duplicados na base de dados fluig, antes da ativação da integração com o fluig Identity.

- Inicialização do serviço *Realtime* após a instalação da Atualização 1.5.11 em ambientes Linux.

- Melhoradas as verificações de autenticação durante os procedimentos executados através do fluig Studio, como consulta a datasets e exportação de formulários.

- Conversão para o fluig de grupos existentes no TOTVS | ECM 3.00 que contenham vírgulas no nome.

- Correção no envio de e-mail a partir do recurso Enviar Comentários.

- Usuários desativados, mas que ainda estavam sendo exibidos nas notificações geradas pelas comunidades, devido a ações anteriores à desativação, não serão mais referenciados nos e-mails e alertas emitidos.

- Ao informar um e-mail inválido como destinatário no método *notifier.notify*, será exibida uma mensagem, tanto para o usuário como no *log,* informando que o destinatário definido não é válido e portanto não será notificado.

- Ações executadas através de métodos dos *Web Services* (como o *cancelInstance*) serão registradas no [log por usuário](https://tdn.totvs.com/display/HF/Controle+de+Log) quando esse recurso estiver habilitado, assim como já ocorre para as ações realizadas diretamente pelo navegador.

- O *download* de *logs* de usuário através da opção [Controle de *Log*](https://tdn.totvs.com/display/HF/Controle+de+Log) do Painel de Controle estava indisponível em ambientes cujo nome do arquivo de *log* não estivesse seguindo o padrão server.log. O *download* agora é feito conforme o nome definido na configuração do servidor de aplicação.

- Correção para permitir o login de usuários que possuam caracteres especiais no nome ou sobrenome cadastrado no Active Directory em ambientes configurados com [Autenticação Integrada](/pages/viewpage.action?pageId=162170863).

- Ajustes para permitir a inicialização de solicitações via WebService com usuários que também foram criados via WebService por meio de integração com TOTVS RM, pois ocorriam inconsistências quando o valor do *locale* do usuário não era enviado.

- Foi retirado o botão Remover do cadastro de campos do recurso Lista – localizado no Painel de Controle – por ser uma ação não permitida, agora é possível apenas desabilitar um campo incluído. Também foram feitos ajustes para permitir habilitar novamente um campo que foi previamente desabilitado.

- Ajustes para que a inicialização do fluig não seja impactada quando houver instabilidade no serviço de versão – [https://version.fluig.com](https://version.fluig.com/).

**LMS**

- Navegação pelas respostas durante a consulta ao histórico de uma avaliação que contenha questões do tipo correlação.

- Ajuste no carregamento da página ao visualizar o conteúdo de um item de tópico para que, caso o navegador bloqueie o pop-up, o usuário seja informado.

- Correção no cálculo da porcentagem de completude dos treinamentos realizados pelo usuário.

- Atualização por componente da página ao liberar a nova versão de uma questão, dispensando a atualização completa da página pelo navegador.

- Correção da nomenclatura no título do modal de seleção do coordenador da turma.

- Correção na publicação de imagens em questões criadas através do menu Avaliações.

- Durante a exclusão de um tópico de questões foi incluída uma validação adicional para verificar se ele não está atrelado a blocos de avaliações ou blocos avulsos, a fim de evitar erros de transação nesse procedimento.

- Ajustada a exibição das turmas das quais um usuário é responsável, para que todas elas sejam apresentadas à medida em que o botão “Mostrar mais” é acionado. Apenas uma turma adicional estava sendo trazida na paginação.

- Durante o cadastro de tópicos em turmas, era permitido definir um tópico como pré-requisito de outro tópico e realizar a mesma configuração da forma inversa, o que impedia o usuário de executar ambos. Esse comportamento foi bloqueado.

- Adicionada uma nova validação para verificar se uma avaliação cadastrada no LMS está em uso por uma turma, trilha, treinamento ou agendamento.

- Ajuste para que sejam apresentadas na Central de Tarefas as atividades de participação em sessões de eventos de aprendizado. Essa informação não era exibida para usuários cujo fuso horário definido no perfil estivesse diferente do servidor.

- Vídeos nos formatos MP4 ou AVI anexados a treinamentos não estavam sendo reproduzidos para os usuários matriculados. A correção garante a execução dos vídeos.

- Ajustados os termos em inglês para Matrícula (*Enrollment*) e Aviso (*Notice*) do menu Aprendizado.

- Correção para matricular automaticamente os alunos na fila de espera de uma turma quando a quantidade de vagas disponíveis for ampliada. Anteriormente, uma inconsistência impedia a execução desse procedimento.

- O carregamento das alternativas, tamanho das imagens em questões de múltipla escolha e os contadores de pontuação foram atualizados para evitar o travamento da barra de progresso durante a pré-visualização das avaliações.

- O cadastro de imagens como alternativas em questões do tipo Múltipla Escolha foi ajustado para evitar uma inconsistência na tela após a inclusão da primeira imagem.

- O campo “Ordem” foi incluído na página de cadastro de tópicos para que seja possível definir a disposição dos tópicos no catálogo de disciplinas e turmas, turma em andamento e nas páginas do responsável pela turma.

Consulte o [Help fluig](https://tdn.totvs.com/pages/viewpage.action?pageId=233766486) para saber mais sobre Tópicos e os campos disponíveis no cadastro.

- Exibição das trilhas e treinamentos nos quais o aluno está matriculado na sua área de aprendizado – Início. Lembrando que, se o aluno está matriculado em uma trilha, os treinamentos que pertencem a essa trilha são exibidos somente dentro da trilha e não como treinamentos separados na área de aprendizado.

**Social**

- Correção para que seja possível utilizar a menção de usuários nos comentários de uma publicação.

- Ajuste para permitir a utilização de colchetes no conteúdo das publicações.

- Correção para que a edição de dados do perfil não afete as nuvens de relacionamento do usuário.

- Correção do *widget* Nuvem de *Tags* para evitar o travamento da comunidade durante a comunicação com o servidor de indexação (Solr).

- O contador de visualizações de artigo contará os acessos realizados a partir das comunidades, e não mais apenas aqueles feitos via navegação de documentos.

- O número de participantes exibido no cabeçalho das comunidades foi corrigido para refletir o total de usuários da comunidade. O número real era apresentado apenas pelo relatório de estatísticas de uso.

- Validação do tamanho de vídeos e imagens publicados em comunidades de acordo com o limite estipulado no menu [Parâmetros](https://tdn.totvs.com/pages/viewpage.action?pageId=234455426) do Painel de Controle. Os demais tipos de publicação já levam em conta o Tamanho máximo de *upload* definido pelo administrador.

- Correção no envio de notificações de criações de formulários nas comunidades, para que sejam levadas em considerações as regras de permissão da pasta. Também foram criadas verificações adicionais para visualização de formulários e artigos acessados através de *links* de compartilhamento.

**Mobile**

- Validação para que datasets carregados via zoom dentro de uma modal sejam suportados pelo fluig Mobile para iPhone/iPad.

- Gravação de toda a estrutura do Zoom ao salvar o rascunho do formulário para que validações desenvolvidas sobre esse componente possam ser realizadas tanto na *web* quanto no aplicativo móvel. Anteriormente apenas o ID dos campos era gravado, o que impactava a usabilidade do recurso.

- Gravação das observações adicionadas às solicitações através do fluig Mobile.

- No fluig Mobile, quando os usuários tentarem acessar uma solicitação pela Central de Notificações, mas esta tiver sido cancelada, será apresentada apenas uma mensagem informando que a solicitação não está mais disponível.

- Corrigida a gravação de campos do tipo *radio* e *checkbox* em formulários Pai x Filho durante o procedimento de salvar rascunho em dispositivos móveis.

- Ajuste para repassar a variável WKMobile corretamente quando o processo passa por uma atividade automática ao utilizar o aplicativo fluig Mobile.

**WCM**

- Publicação de páginas novas ou editadas sem que seja necessário informar uma imagem como ícone.

- Ao criar *layouts* via fluig Studio, elementos padrão das páginas do fluig, como o ícone de alerta de notificações, precisavam ser incluídos manualmente. Esses recursos agora serão instanciados automaticamente no [application.info](https://tdn.totvs.com/display/fluig/Arquivo+application.info) dos *layouts*.

- Verificação de inconsistências nas páginas filhas criadas por um componente durante a inativação do mesmo para evitar que a falha interrompa o procedimento.

- O *widget* Editor de Conteúdo foi atualizado para permitir a quebra de linhas utilizando o botão *Enter*.

- Foram realizados ajustes de usabilidade no *widget* “Listar registros de Datasets” para que não seja necessário apertar botão *Enter* do teclado para filtrar pelo valor desejado e para que o campo filtro não seja exibido quando não houver uma coluna selecionada para utilizá-lo.

**ECM**

- Correção para que ao visualizar as propriedades de um documento em *checkout* e salvar sem realizar alterações, o arquivo não seja enviado para aprovação.

- Bloqueio na definição de valores em campos do tipo Data criados através do editor de formulários web quando uma regra estipular que ele deve ser desabilitado.

- Incluída mensagem no Mozilla Firefox informando que este navegador não é compatível com o recurso *Drag and Drop* de pastas, caso o usuário tente executar este procedimento.

Confira os navegadores que suportam este recurso através da documentação [*Drag and drop* de documentos](https://tdn.totvs.com/x/IAKLCQ).

- Ordenação dos registros em campos do tipo Zoom considerando o valor informado no parâmetro *standard*.

Consulte a seção Zoom da documentação de [Desenvolvimento de Formulários](https://tdn.totvs.com/pages/releaseview.action?pageId=75270483#DesenvolvimentodeFormul%C3%A1rios-Zoom) para saber mais sobre este componente e suas propriedades.

- Permanência dos campos customizados adicionados a um documento quando este é colocado em *checkout*.

- Apresentação dos registros de datasets de formulário conforme a ordenação configurada em um *widget*, em ambientes que utilizam o banco de dados Oracle.

- A opção de impressão de documentos será removida automaticamente quando o usuário não possuir permissão no recurso “ECM – Imprimir cópia controlada”. Anteriormente, caso não tivesse permissão, ao tentar utilizar a impressão o usuário era informado através de uma mensagem.

- Para evitar a expiração da sessão durante a geração de relatórios BIRT com volumes elevados de dados, o tempo de sessão foi ampliado de 30 minutos para 5 horas.

- Ao tentar remover um formulário cujo dataset foi associado a um outro formulário, o procedimento é bloqueada pela plataforma. A mensagem apresentada ao usuário nesse cenário foi ajustada para tornar mais claro o motivo do bloqueio.

- Anexos de formulários e documentos do ECM abertos em abas paralelas no navegador entravam em conflito, impedindo a visualização de um dos arquivos. A correção previne esse comportamento e permite a exibição dos arquivos em abas simultâneas.

- Correção para que os títulos das mensagens de e-mail publicadas no fluig através do *plugin* do Outlook sejam enviados por completo.

- A criação de novas versões não estava considerando os campos customizados incluídos em um documento. Este comportamento foi corrigido para que novas versões incluam os campos customizados de versões anteriores.

- O JavaScript de renderização de formulários Pai x Filho no fluig Mobile foi atualizado para suportar colunas de cabeçalho com o atributo *colspan*.

- A alteração do nome de um documento que possua aprovadores através da opção Renomear foi corrigida. Após o procedimento, o documento será enviado normalmente para aprovação.

- Ajustada a utilização do método *setEnhancedSecurityHiddenInputs* em atividades iniciais para que não ocorra a inconsistência de objeto não encontrado, que impedia a movimentação da solicitação.

- Regularização do atributo *fileurl* do método *listDocument* da fluig API para que retorne o caminho completo do documento, ao invés de nulo.

- Corrigida a inconsistência que ocasionava a mensagem “Não foi possível carregar o *Applet*” - em ambientes que cumprem o requisito do *plug-in* Java instalado no navegador - durante a impressão de cópia controlada.

Atenção

Siga os procedimentos descritos na documentação [Impressão de Cópia Controlada](/pages/viewpage.action?pageId=152802071) para utilizar esse recurso.

Informamos que o Applet não é mais suportado pelo Google Chrome desde a inativação do plugin NPAPI na versão 45. A opção Applet é operante apenas nos navegadores IE ou Firefox.

- Ajuste na renderização do componente Zoom para que os dados não se sobreponham aos de outros campos quando o formulário possuir várias colunas e o espaço em tela for reduzido.

- Correção para permitir a alteração da imagem padrão dos usuários no *widget* Aniversariantes.

- As permissões de segurança (Leitura, Gravação, Modificação ou Total) definidas para os formulários armazenados no ECM foram corrigidas para que sejam herdadas pelos registros desses formulários, caso a opção esteja habilitado. Dessa forma, usuários que possuam permissão nos formulários poderão fazer buscas pelo conteúdo dos registros através da ferramenta de pesquisa.

- Conversão de documentos que possuem aprovadores pelo conversor externo, gerando o PDF para visualização no Viewer, ao efetuar o seu *check in*.

**Identity**

- As opções de vinculação do perfil com o Facebook e Google Glass foram descontinuadas e removidas do fluig Identity.


<!-- anchors: Atualização1.5.12-BPM, BPM, BPM-1, BPM-2, Atualização1.5.12-ECM, Atualização1.5.12-Social, Ediçãodepublicação, Atualização1.5.12-Mobile, Atualização1.5.12-Arquitetura, Atualização1.5.12-LMS, BPM, Atualização1.5.12-Novidadesemdocumentação, Atualização1.5.12-Correções -->
