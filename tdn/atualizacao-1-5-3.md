---
title: "Atualização 1.5.3"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=201751889"
scraped_at: "2026-03-09T03:17:13.192Z"
depth: 2
anchors: 6
child_links: 49
---

# Atualização 1.5.3

![](/download/attachments/181966041/espanhol.png?version=2&modificationDate=1422631676000&api=v2) ¿Habla Español? Haga [clic aquí](https://tdn.totvs.com/x/hAVrD) para ver el Release Notes en Español.

![](/download/attachments/181966041/ingles.png?version=2&modificationDate=1422631693000&api=v2) Do you speak English? [Click here](https://tdn.totvs.com/x/nwdrD) to view the Release Notes in English.

Confira abaixo as novidades na atualização 1.5.3 do fluig:

## Arquitetura

**Controle de versões de arquivos CSS e JS da plataforma**

Foi aprimorada a forma como a plataforma carrega seus arquivos CSS e JS. Agora é utilizado um controle de versão a fim de garantir que, ao atualizar a plataforma para uma nova versão, os arquivos CSS e JS que já estão no cache do navegador também sejam atualizados, evitando inconsistências pela utilização de versões antigas destes arquivos.

Saiba mais

Para você que é desenvolvedor da plataforma fluig também criamos uma técnica para fazer com que os seus componentes também sejam atualizados sem depender do cache do navegador. Saiba mais sobre o *Cache busting* e utilize agora em seus desenvolvimentos!

## ECM

**Caiu a conexão no meio do envio de um arquivo? Retorne os uploads de onde parou com o Connect**

Realizar *upload* de arquivos ficou mais prático e dinâmico. Com o fluig Connect agora você possui o controle de *uploads*, permitindo pausar o progresso e continuar posteriormente, no momento desejado, sem ter que esperar a finalização de um *upload* da fila de envio. Também, se por acaso a conexão cair durante o envio de arquivos, o fluig Connect vai retornar de onde parou, deixando mais rápido e barato o envio.

Procedimento de atualização

Atualizar o fluig Connect para usufruir deste novo recurso é muito simples, basta obter a mídia atualizada no [portal de clientes](https://suporte.totvs.com/download) e seguir as orientações.

Importante

Não recomendamos o uso desta ferramenta para migração de grandes volumes de dados.

![](/download/attachments/201751889/FLUIGINV-2812.png?version=2&modificationDate=1445372355000&api=v2)

## LMS

**Mais datasets de Aprendizado e Avaliações!**

Disponibilizamos nessa atualização novos *datasets* de aprendizado e avaliações, que você pode utilizar em seus formulários, portais e relatórios. Acompanhe a relação completa a seguir:

- [Execução de Avaliações de Pré-Teste](https://tdn.totvs.com/display/fluig/Datasets+internos+Fluig#DatasetsinternosFluig-assessmentApplicationCatalogPreExamDataset-ExecuçãodeAvaliaçõesdePré-Teste);
- [Execução de Avaliações de Pós-Teste](https://tdn.totvs.com/display/fluig/Datasets+internos+Fluig#DatasetsinternosFluig-assessmentApplicationCatalogPosExamDataset-ExecuçãodeAvaliaçõesdePós-Teste);
- [Execução de Avaliações de Reação](https://tdn.totvs.com/display/fluig/Datasets+internos+Fluig#DatasetsinternosFluig-assessmentApplicationCatalogReactionExamDataset-ExecuçãodeAvaliaçõesdeReação);
- [Execução de Conteúdos](https://tdn.totvs.com/display/fluig/Datasets+internos+Fluig#DatasetsinternosFluig-contentLogDataset-ExecuçãodeConteúdos);
- [Detalhes de Andamento de Trilhas](https://tdn.totvs.com/display/fluig/Datasets+internos+Fluig#DatasetsinternosFluig-enrollmentProgressDetailByTrackDataset-DetalhesdeAndamentodeTrilhas);
- [Detalhes de Andamento de Treinamentos](https://tdn.totvs.com/display/fluig/Datasets+internos+Fluig#DatasetsinternosFluig-enrollmentProgressDetailByTrainingDataset-DetalhesdeAndamentodeTreinamentos).

Mais informações

Se desejar obter mais informações sobre *datasets* internos, acesse [*Datasets* internos fluig](https://tdn.totvs.com/display/fluig/Datasets+internos+Fluig).

Exemplos de uso

Confira alguns exemplos de relatórios utilizando os novos *datasets* clicando [aqui](https://git.fluig.com/projects/SAMPLES/repos/sample-lms-reports/browse).

**Matricule vários alunos em turmas ou treinamentos por grupos!**

Grupos no fluig são ótimos e você já usa eles para muitas coisas. Vocês pediram e nós entregamos. Agora você pode matricular todas as pessoas que pertencem a um grupo em treinamentos ou turmas de uma só vez. Assim: simples e fácil!

Para isso, basta acessar o recurso **Matricular usuários** e selecionar um ou mais grupos a serem matriculados.

![](/download/attachments/201751889/FLUIGINV-2967.PNG?version=1&modificationDate=1445276152000&api=v2)

## Social

**Exporte seu histórico do Messaging**

Como você sabe, o *Messaging* não para de evoluir. Muitas vezes as conversas são tão importantes que precisam ser salvas como atas de reunião ou de acordos. Pensando nisso, agora é possível exportar o histórico de mensagens pelo método de exportação liberado na API e no SDK Javascript.

Confira mais detalhes

Acesse Componente fluig *Messaging* e confira mais detalhes sobre essa nova possibilidade.

**Busca por conteúdos privados a partir de #tags**

Agora é possível efetuar busca a partir de #tags de publicações criadas em comunidades privadas quando o usuário é um participante delas.

Importante

É necessário reindexar o conteúdo para que a busca passe a considerar as informações de publicações privadas.

![](/download/attachments/201751889/SOCIALECMSUST-4919-2.PNG?version=1&modificationDate=1445368755000&api=v2)

## WCM

**Busca de imagens para publicação**

Foi alterada a ordem de *deploy* dos artefatos do fluig para solucionar a inconsistência relacionada à busca de imagens para publicação. Agora primeiramente são iniciados todos os artefatos padrão do fluig, depois são iniciados os artefatos desenvolvidos sobre a plataforma.

Fique atento!

Caso os *widgets* desenvolvidos sobre a plataforma apresentem alguma inconsistência ao iniciar o fluig, é possível que exista conflito com as bibliotecas que o fluig utiliza. Para resolver a situação, verifique o tópico **Evitar conflito de dependências com o fluig** em [Como criar um *widget* que busque conteúdo](https://tdn.totvs.com/pages/viewpage.action?pageId=185735401).

**Novos widgets disponíveis: veja o seu ERP dentro do fluig**

O fluig conta com dois novos *widgets* que vão permitir que você visualize ERPs que utilizem a nova tecnologia Framework HTML dentro dele:

- Aplicação ERP: permite o uso de páginas completas do ERP;
- Container ERP: possibilita incluir *widgets* do ERP nas páginas do fluig, permitindo a criação de painéis ou a inclusão em páginas, podendo apresentar informações como uma comunidade, por exemplo.

Atualmente os ERPs da TOTVS ainda não liberaram essas rotinas, mas ao atualizar o fluig 1.5.3 você já estará pronto para executar rotinas do ERP diretamente do fluig!

Saiba mais

Obtenha mais informações em [*Widgets* Aplicação ERP e Container ERP](https://tdn.totvs.com/x/Goc3D).

![](/download/attachments/201751889/FLUIGINV-2725-1.png?version=3&modificationDate=1445260847000&api=v2)

![](/download/attachments/201751889/FLUIGINV-2725-2.png?version=3&modificationDate=1445363458000&api=v2)

## Correções

Nessa sessão listamos alguns *bugs* que matamos nessa atualização que garantem que tudo corra bem na sua plataforma.

- Exibição de usuários ao movimentar uma solicitação quando configurado um mecanismo de atribuição por Grupo de usuários.

- Ficou mais rápida a movimentação de solicitações na Central de tarefas.

- Visualização de publicação feita em uma comunidade na *timeline* do publicador por outros usuários que também participam da comunidade.

- Exibição do usuário que assumiu uma solicitação com mecanismo de atribuição para grupo no relatório de solicitações quando assinalada a opção “Incluir dados das atividades”.

- Importação de *widgets* a partir da Central de componentes com a porta *offset*modificada. Essa porta é configurada no arquivo “standalone.xml” – que fica no diretório <INSTALAÇÃO_FLUIG>\jboss\standalone\configuration – e é utilizada para alterar as portas padrão utilizadas pelo produto.

- Duplicação de tarefas ao criar uma nova versão e converter um processo que possui atividades com mecanismo de atribuição por *pool* de papel.

- Utilização dos *widgets* que compõem o Kit Intranet em ambientes onde o banco de dados é Oracle.

- Exibição do número dos sub processos nos complementos da solicitação depois de serem finalizados.

- Importação de processos oriundos do ECM 3.0 que possuem mecanismo de atribuição por grupos e prazo de conclusão no fluig Studio.

- Envio do e-mail de convite para usuários acessarem a plataforma.

- Exibição do número total de visualizações de um artigo considerando todas as suas versões.

- Otimizada a exibição da listagem de comunidades ao editar uma nuvem de relacionamento, tornando-a mais rápida.

- Busca por usuário ao movimentar uma solicitação de um processo que contém mecanismo de atribuição por grupos configurado.

- Impressão de cópia controlada de documentos quando se utiliza o visualizador interno e o navegador Internet Explorer na versão 11.

- Movimentação de solicitações de um processo que contém duas atividades automáticas em sequência e a atividade posterior às automáticas possui mecanismo de atribuição configurado para retornar apenas um usuário.

- Consulta de solicitações informando um intervalo de números de solicitações para ser considerado no filtro.

- Identificação de documentos como já indexados ou não ao publicá-los, ao efetuar a indexação manual a partir do Painel de Controle ou automática pelo Agendador de tarefas.

- Atualização do conteúdo de um artigo no *widget* Mural de avisos após editá-lo na comunidade onde está publicado, mesmo quando sua versão/revisão não é alterada.

- Movimentação de solicitações após uma atividade automática quando em sua execução não é apresentada a tela de seleção de usuários.

- Conversão de documentos ao realizar a migração do ECM 3.0 para o fluig 1.5.2.

- Exibição do destaque em amarelo da tarefa que está em execução no diagrama de processos que contêm mais de um sub processo em sequência.

- Verificação da matrícula do usuário ao incluir registros em um formulário através de *Web service*.

- Edição de usuários quando há espaços em branco no final de campos obrigatórios em um ambiente que foi convertido do ECM 3.0 para o fluig.

- Exclusão de palavra restrita quando ela é a única cadastrada na plataforma.

- Exibição da listagem de usuários na tela de seleção ao movimentar uma solicitação para uma atividade automática.

- Movimentação de solicitações para uma atividade automática quando o mecanismo de atribuição configurado é por campo de formulário.

- Redirecionamento do endereço “http://{servidor}:{porta}/portal/wcm” para o “http://{servidor}:{porta}/portal/p/wcm/home”, permitindo efetuar a autenticação na plataforma.

- Ordenação das notícias do Kit Intranet quando é utilizado o banco de dados SQL *Server*.

- Exibição dos aniversariantes do mês ordenados pelo dia do aniversário juntamente com sua foto do fluig – quando o usuário do RM possui perfil com foto – no Kit Intranet quando há integração com RM.

- Movimentação de solicitações após visualizar ou editar seus anexos e retorno para a Central de Tarefas após a movimentação.

- Conversão de processos do ECM para o fluig quando há uma atividade FIM entre um FORK e um JOIN.

- Validação para verificar se o serviço do *Realtime* está no ar e se a empresa utiliza a notificação, respeitando a regra original, ou seja, se a empresa não tem o parâmetro ativo, é assumido que ela usa o *Realtime*.

- Autenticação de usuários aplicativos por meio do protocolo OAuth, que agora possuem senha.Mais informações Para obter mais informações sobre o usuário aplicativo, acesse [fluig API](https://tdn.totvs.com/x/d4RXBQ).

- Movimentação de solicitações de um processo que contém um sub processo que foi excluído e substituído por outro.

- Execução do pós teste de um treinamento após visualizá-lo por completo e finalizá-lo.

- Envio de dados de processos para o Analytics quando há uma atividade automática seguida de uma atividade na qual a opção "Seleciona Colaboradores" está configurada como "Sempre" ou "Quando houver mais de uma opção", ou seja, sempre que é apresentada a seleção de colaborador responsável pela tarefa após a automática.

- Duplicidade de artefatos “monitor.war” que impedia o acesso à Home da plataforma, apresentando uma inconsistência.

- Atualização do fluig em ambientes que utilizam o protocolo HTTPS.

- Visualização do histórico de solicitações de processos que foram convertidos e que possuem sub processo.

- Exclusão de registro de formulário quando é assinalada a opção “Modificar todas as versões do evento” na exportação do formulário.

Salvar


<!-- anchors: Atualização1.5.3-Arquitetura, Atualização1.5.3-ECM, Atualização1.5.3-LMS, Atualização1.5.3-Social, Atualização1.5.3-WCM, Atualização1.5.3-Correções -->
