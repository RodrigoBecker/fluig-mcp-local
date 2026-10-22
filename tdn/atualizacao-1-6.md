---
title: "Atualização 1.6"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=271409372"
scraped_at: "2026-03-09T03:15:48.993Z"
depth: 2
anchors: 8
child_links: 56
---

# Atualização 1.6

![](/download/attachments/181966041/espanhol.png?version=2&modificationDate=1422631676000&api=v2) ¿Habla Español? Haga [clic aquí](https://tdn.totvs.com/x/EZs4E) para ver el Release Notes en Español.

![](/download/attachments/181966041/ingles.png?version=2&modificationDate=1422631693000&api=v2) Do you speak English? [Click here](https://tdn.totvs.com/x/Aps4E) to view the Release Notes in English.

Confira abaixo as novidades na atualização 1.6.0 do fluig:

fluig Academy

Confira no fluig Academy, o treinamento que apresenta todas as novidades da release 1.6.0, [clique aqui](https://academy.fluig.com/cursos/atualizacao-1-ponto-6-0), inscreva-se e assista.

Antes de atualizar...

Antes de aplicar a Atualização 1.6 no seu ambiente, confira os pré-requisitos, orientações e o passo a passo disponíveis no [Guia de atualização do fluig.](/pages/viewpage.action?pageId=271666186)

## Arquitetura

**WildFly e Java 8: Tecnologia de ponta para garantir a fluidez do seu ambiente**

Para proporcionar mais estabilidade, segurança e rapidez, dois componentes fundamentais da plataforma foram atualizados: o servidor de aplicação WildFly, agora na versão 10, e o ambiente de execução Java na versão 8. O Java 8 oferece melhorias importantes de segurança, desempenho e estabilidade, enquanto o WildFly inclui novas capacidades de gerenciamento de recursos, *clustering* e integração.

Além disso, o fluig 1.6 conta com o *cache* local embutido, um eficiente novo sistema interno que substitui o MemCached como o padrão da plataforma.

Observação

Instalações que utilizam o MemCached terão esse sistema de *cache* mantido após a atualização. O *cache* local ("localmap") será padrão apenas em novas instalações. Para alterar o servidor de cache, acesse as [Configurações da Plataforma](https://tdn.totvs.com/pages/viewpage.action?pageId=257623022).

![](/download/attachments/271409372/RFLUIG-1278.jpg?version=1&modificationDate=1487783446000&api=v2)

Imagem sem alterações. Fonte: [widefly.org](http://wildfly.org/), licenciado via [Creative Commons 3.0](https://creativecommons.org/licenses/by/3.0/legalcode).

Fique ligado!

Antes de aplicar a Atualização 1.6.0 em seu ambiente, certifique-se de que a instalação atual estiver na Atualização 1.5.13.

****

**Redução no tempo de boot: Pisando fundo logo na saída**

Graças a uma série de ajustes e aprimoramentos, o tempo de inicialização da plataforma foi reduzido sensivelmente nessa *release*, com desempenho ainda melhor em ambientes que possuem múltiplas instâncias configuradas. 

Informe-se sobre as configurações de balanceamento de carga, alta disponibilidade e *cluster* [clicando aqui](https://tdn.totvs.com/pages/viewpage.action?pageId=257622931).

**Mais estabilidade em ambientes cluster com o suporte à replicação de sessões**

Ambientes com balanceamento de carga e/ou alta disponibilidade ficarão ainda mais eficientes e estáveis com a implementação do *cluster* dinâmico. Essa técnica permite que as sessões dos usuários sejam replicadas nas diferentes instâncias da instalação, o que aumenta sua resiliência caso alguma das instâncias passe por uma indisponibilidade.

[Clique aqui](https://tdn.totvs.com/pages/viewpage.action?pageId=257622931) e saiba mais sobre a configuração da plataforma em *cluster*.

**Novo motor de busca e configurações de indexação garantem resultados mais rápidos e relevantes**

Encontrar a informação que você precisa, quando você precisa, é essencial para o seu negócio e para o seu dia a dia. Por isso, atualizamos o motor de busca da plataforma para deixar suas pesquisas mais rápidas e os resultados ainda mais relevantes. A partir de agora, a busca pelo conteúdo dos documentos é nativa, ou seja, não é mais necessário marcar uma opção ao realizar uma busca para que a pesquisa leve em consideração o conteúdo dos documentos.

Além disso, a página de configurações de [Indexação](/pages/viewpage.action?pageId=234455757) agora conta com mais opções para que o administrador possa ajustar o procedimento de acordo com a necessidade.

![](/download/attachments/271409372/FLUIGINV-3682.png?version=1&modificationDate=1487764271000&api=v2)

**Novas opções de indexação disponíveis no Painel de Controle**

Dica

Após atualizar o ambiente, realize uma reindexação completa dos repositórios da sua empresa no fluig. Isso é necessário para que a plataforma faça uso das melhorias oferecidas pelo novo motor de indexação e busca.

## BPM

**Timer entre as tentativas de uma atividade de serviço garantem maior assertividade e rapidez******

A configuração de tempo nas atividades de serviço, atende a necessidade de um recurso que proporcionasse versatilidade e melhor usabilidade, eliminando as chances de uma única atividade ser executada mais de uma vez.
Agora será possível incluir na atividade de serviço as opções de *timer* entre as repetições, permitindo configurar o tempo entre as tentativas de execução de uma atividade de serviço (assíncrona). Ao lado do servidor, utilizará *o*agendador de tarefas interno* *para executar a atividade após o tempo determinado, prevenindo execuções simultâneas de uma mesma atividade. Onde cada atividade será executada a cada 1 minuto e também será informado no histórico a próxima tentativa, alertando o usuário.

![](/download/attachments/271409372/MFLUIG-30021.png?version=1&modificationDate=1488897714000&api=v2)

**Fluxo padrão em atividades automáticas: inovação aliada a facilidade**

O fluxo padrão em atividades automáticas facilita a modelagem de *gateways* automáticos, permitindo a programação de fluxo de contingência de forma mais simples. A novidade que possibilitará a utilização do fluxo padrão em atividades automáticas dá-se através da inclusão de um fluxo padrão tanto no modelador na Web quanto no Studio, para atividades previstas com notação BPM2.0.
Isso permite que o fluxo reaja a tomadas de decisões automáticas dos *gateways* inclusivo e exclusivo, movendo automaticamente para este fluxo caso nenhuma das condições automáticas forem atingidas.

Maiores informações

Consulte a documentação disponível em **Fluxo Padrão**.

![](/download/attachments/271409372/%5E62F4B9A5D7C8BC30264AC287011DC0716F0D1236B5F10470E0%5Epimgpsh_fullsize_distr.png?version=1&modificationDate=1489408548000&api=v2)

****

**Assumir tarefa mais acessível e evidente para todos**

O recurso 'Assumir tarefa' nunca esteve tão perceptível e ganhou destaque nessa atualização, tornando-se muito mais fácil de ser localizado. Está agora localizado fora das abas da solicitação, junto com outras opções da solicitação como "Enviar", "Salvar" e "Cancelar solicitação". 

****

****

**Cancele quantas solicitações desejar, de uma só vez**

Agora é possível cancelar várias solicitações com muito mais praticidade, apenas com um único clique, Dado pelo novo recurso "Cancelar em bloco" que permite cancelar diversas solicitações de uma só vez e utilizando o mesmo texto para o cancelamento. Localizado na aba "Minhas solicitações", na Central de Tarefas. É possível ainda, cancelar múltiplas solicitações pela API Pública.

Maiores informações

Consulte sobre API Pública nas documentações disponíveis em [Consumo da API Pública](https://tdn.totvs.com/pages/viewpage.action?pageId=185736325) e [Consumo de Serviços na API Pública e componente SDK](https://tdn.totvs.com/pages/viewpage.action?pageId=198934765).

****

****

**Movimente inúmeros processos ao mesmo tempo******

O novo recurso de "Movimentação em bloco" permite que as tarefas que estejam sob a gerencia de determinado usuário, sejam movimentadas simultaneamente. Este recurso está disponível na Central de Tarefas e pode ser acessado na aba de tarefas sob minha gerência, que permitirá movimentar os processos do mesmo tipo/versão/atividade de uma só vez para próxima atividade.

![](/download/attachments/271409372/MovimentaremBloco.PNG?version=1&modificationDate=1487966162000&api=v2)

**Novidade na criação de templates para envio de e-mail personalizado na plataforma**

Agora é possível utilizar o método *notifier.notify* para envio de e-mails externos (que não possuem conta no fluig) e templates personalizados. Mande notificações para todo mundo!

Maiores informações

Consulte a documentação disponível em [Personalização de e-mail](https://tdn.totvs.com/pages/viewpage.action?pageId=183730587)**.**

![](/download/attachments/271409372/notifier.notify.png?version=2&modificationDate=1488886424000&api=v2)
**Alteração no método notifier.notify**

## ECM

**Assinatura Digital simplificada no Google Chrome**

Em breve você não precisará mais se preocupar em ter o Java instalado no seu computador para aprovar documentos (ou movimentar solicitações) com assinatura digital! Estamos simplificando o uso de Assinatura Digital e, a partir de agora, se o Google Chrome é o seu navegador favorito, não precisa mais se preocupar com o Java: agora utilizamos uma extensão para buscar o seu certificado digital. No outros navegadores - Internet Explorer e Firefox - ainda é necessário ter o Java instalado, mas é por pouco tempo!

**Mais flexibilidade no uso de propriedades de Cópia Controlada**

Se você sonhava em incluir informações extras em um documento através das propriedades de cópia controlada, o seu sonho agora é realidade! Criamos novos eventos para dar mais flexibilidade no uso de propriedades de cópia controlada: crie novas propriedades, altere o valor de propriedades já existentes de acordo com a sua necessidade:

- onApplyDocumentPrintProperties
- onApplyDocumentProtocolProperties
- onApplyDocumentPublishProperties

Se interessou? [Clique aqui](https://tdn.totvs.com/display/fluig/Eventos+Documentos) e veja mais detalhes sobre os eventos. Ah, temos um exemplo disponível [aqui](https://git.fluig.com/projects/SAMPLES/repos/sample-interacting-with-copy-controlled-properties/browse).

Novo por aqui?

Conheça mais sobre as propriedades de cópia controlada [aqui](/pages/viewpage.action?pageId=152802071) 

## LMS

**Novos métodos na API Pública**

Agora a gama de manipulação de itens de Aprendizado e Avaliações está maior, com novos métodos disponíveis na API Pública. Confira:

- [Pastas](https://api.fluig.com/resource_FolderServiceRest.html);
- [Trilhas](https://api.fluig.com/resource_TrackServiceRest.html);
- [Treinamentos](https://api.fluig.com/resource_TrainingServiceRest.html);
- [Conteúdos](https://api.fluig.com/resource_ContentServiceRest.html);
- [Habilidades](https://api.fluig.com/resource_SkillServiceRest.html);
- [Tópicos de questões](https://api.fluig.com/resource_AssessmentTopicServiceRest.html);
- Questões:

- [Múltipla](https://api.fluig.com/resource_MultipleQuestionServiceRest.html);
- [Objetiva](https://api.fluig.com/resource_ObjectiveQuestionServiceRest.html);
- [Lacuna/Lacuna Selecionável](https://api.fluig.com/resource_LacunaQuestionServiceRest.html);
- [Escala/Valor](https://api.fluig.com/resource_ScaleQuestionServiceRest.html);
- [Correlação/Multivalorada](https://api.fluig.com/resource_CorrelationQuestionServiceRest.html);
- [Dissertativa](https://api.fluig.com/resource_EssayQuestionServiceRest.html);
- [Ordenação](https://api.fluig.com/resource_OrdinationServiceRest.html);

[Blocos](https://api.fluig.com/resource_BlockServiceRest.html);[Avaliações](https://api.fluig.com/resource_AssessmentServiceRest.html);[Matrículas](https://api.fluig.com/resource_EnrollmentServiceRest.html).
** **

## Portais

**Obtenha conhecimento sobre a plataforma de forma mais simples e integrada com a nova Central de Ajuda**

Está em dúvida sobre como utilizar algo na plataforma? A nova [Central de Ajuda](https://tdn.totvs.com/display/HF/Ajuda) está aqui para tornar a busca pelo conhecimento muito mais ágil. Através dela você tem acesso rápido às principais documentações e vídeos oferecidos nos portais do [Desenvolvedor](https://dev.fluig.com), [Ajuda](https://help.fluig.com), [Aprendizado](https://tdn.totvs.com/display/AF/Aprendizado+fluig+Home) e [FAQs](https://tdn.totvs.com/display/FF/FAQ+fluig+Home). E tudo isso com um só clique! Veja como é fácil:

![](/download/attachments/271409372/Central%20de%20Ajuda.gif?version=1&modificationDate=1488908176000&api=v2)

**Para acessar a Central de Ajuda, basta clicar no ícone  no canto superior direito da página**

****

## Mobile

**Finalizamos o suporte fluig para Windows Phone**

Pensamos sempre em explorar e evoluir o fluig considerando tendências de mercado. Conforme notícias publicadas em [13/12](https://suporte.totvs.com/portal/p/10098/suporte-fluig-noticias?id=444) e [23/03](https://suporte.totvs.com/portal/p/10098/suporte-fluig-noticias?id=525), o *market share* do Windows Phone vem caindo significativamente, devido a isso iremos concentrar esforços nas plataformas consolidadas no mercado - Apple (iOS) e Google (Android), e finalizamos o suporte para aplicativos fluig Windows Phone.

![](/download/attachments/271409372/IDC-WP.PNG?version=1&modificationDate=1490271528000&api=v2)

Importante

O aplicativo será removido da Windows Store. Clientes que já possuem o aplicativo fluig para Windows Phone instalado poderão utilizá-lo, porém não receberão mais atualização ou suporte pela Equipe fluig **e em breve, na atualização 1.6.3, serão barrados de acessar a plataforma**.

## Novidades em Documentação

- Confira a atualização feita em [LMS 019 - Formatos de vídeos suportados](https://tdn.totvs.com/pages/viewpage.action?pageId=239036570).

- A documentação [Sincronização de Datasets](https://tdn.totvs.com/pages/viewpage.action?pageId=212899013) foi atualizada para tornar clara a obrigatoriedade da função *defineStructure* na configuração do dataset *offline*.

- Consulte a documentação de [Importação de dados históricos](https://tdn.totvs.com/x/k4_NBw) do fluig Analytics atualizada com novas informações sobre o funcionamento da versão 1.5-v3 do importador.

- Consulte a FAQ [Localização dos arquivos na pasta de instalação do fluig 1.6](https://tdn.totvs.com/pages/viewpage.action?pageId=271844650) para informar-se onde estão armazenados os arquivos mais usados do sistema a partir desta *release*.

- Confira a FAQ [Utilizando campo de formulário para definir responsáveis em uma nova solicitação](https://tdn.totvs.com/pages/viewpage.action?pageId=271677851) criada para informar detalhes do uso da hAPI no mecanismo de atribuição personalizado em solicitações já iniciadas.

## Correções

**BPM**

- O anexo da solicitação ficava indisponível para visualização dos demais usuários, quando o usuário que havia incluído, era inativado. 

- Corrigida inconsistência na busca na consulta de solicitações, filtrando pelo número da solicitação.

- Comportamento que impossibilitava fazer uma movimentação em bloco para fluxos que permitem retorno.

- As notificações por e-mail foram ajustadas para que, quando uma atividade conjunta for movimentada automaticamente por atraso, não sejam enviadas notificações indevidas ou duplicadas.

- Corrigida inconsistência para o mecanismo de atribuição por campo de formulário, permitindo a inclusão de um ou mais usuários.****

- Ajuste no uso de assinatura digital, possibilitando ao usuário que possui matrícula e login diferentes, visualizar os detalhes da assinatura sem problemas.

- Adicionada validação para correção da tarefa atribuída a um usuário bloqueado. Onde o gestor possa receber e assumir o processo, dando continuidade ao fluxo.****

- Realizado tratamento para ignorar validação de requisitante e usuário ao tentar cancelar ou eliminar um subprocesso.

- Atividades de serviço com captura de erro não eram liberadas por salvar o mesmo diagrama mais de uma vez. Ajustado para que o diagrama configure corretamente e salve apenas um diagrama por vez.

- Ao adicionar um usuário em uma atividade, o mesmo não aparecia nas propriedades de um processo 2.0. 

- Ajustada atividade paralela que nao detectava *join* quando usado apenas links de fluxo, que apontavam todos para o mesmo fluxo de saída.

- Ajustada inconsistência para mostrar ao usuário pertencente a um grupo ou papel, quando a mensagem for apresentada ao substituto que inicia a solicitação.

- Cadastro de substituto com o mesmo usuário substituído em diferentes períodos.

- Ajustada inconsistência ao iniciar uma solicitação onde o papel era cadastrado para um usuário substituto, esse mesmo substituto não constava no papel e ao tentar abrir a solicitação a página ficava em branco. 

- Ajustada variável WKUserComment que não retornava os complementos das solicitações já iniciadas. 

- Ajustado formato do arquivo na exportação na consulta de solicitações.

- Corrigida exibição da foto do usuário em um complemento de uma solicitação

- Corrigida exibição do prazo de uma tarefa criada via *onDisplayTasks* na Central de Tarefas no fluig Mobile

- Alteração realizada na propriedade *Expired* que permite que tarefas atrasadas criadas através do evento *onDisplayTasks *apresentem cor vermelha na Central de tarefas.

- Alteração em eventos com assinatura digital geravam inconsistências, impossibilitando movimentar tarefa. Solucionada inconsistência realizando a remoção da assinatura digital para assiná-la novamente.

- Inconsistência ao informar um valor para a coluna de data de abertura de uma tarefa adicionada através do evento *onDisplayTasks* foi corrigida para que o campo *startDateProcess* no *WorkflowTaskVO permita que seja informado valor para esta coluna.*

- Corrigida interação do *join*, para que a validação apenas considere concluído *joins* sem *threads* em espera.

- Ajustada inconsistência na transferência de atividade utilizando a variável global hAPI no mecanismo de atribuição.
- Central de tarefas está tentando converter valores errados para o formato data. Realizado tratamento no qual verifica se a coluna possui valor inválido para aplicação deste formato.

**ECM**

- Corrigido a exibição de formulários em Mobile apresentando de forma correta os padrões da plataforma e ajustes realizados na mensagem apresentada ao desenvolver um formulário.

- Ajustes realizado na ação de efetuar o download de relatório *birt*, pois o arquivo .zip gerado não apresentava conteúdo. Para mais informações acesse [Relatório](https://tdn.totvs.com/x/VpxyDg) e [Efetuar download de pasta, documento e relatório](https://tdn.totvs.com/x/McgGDg). 

- Implementado limitador de caracteres nos campos *input* e *textarea* para que não ultrapassem o valor de 4000 caracteres em banco de dados Oracle, tornando possível salvar formulários.

- Aplicado ajuste visto que após atualização da versão 1.5.13 para EP2, ao exportar novo formulário o mesmo não carrega e os formulário já publicados no fluig param de funcionar.

- Ajustes no componente Zoom dado que após atualização da versão, não estava retornando dados de *datasets* de formulário.

- Correção do novo Zoom que listava um registro a menos da quantidade total. 

- Corrigida a situação na paginação da tabela, pois ao exibir documentos na aba Central de tarefas ou tentar abrir um documento através da tabela, o mesmo não era aberto.

- Correção aplicada para que os links da Central de notificações sejam abertos no navegador padrão do usuário, e não na própria Central. 

- Realizada correção no Connect para que o *upload* de arquivos funcione corretamente após restabelecer a conexão de rede.

- ** ** Ajuste realizado na pasta de sincronização do Connect, visto que ao mover arquivos de uma pasta para a outra, ou renomeá-los faz com que sejam apagados.

- Aplicada correção pois ao renomear arquivos na pasta de sincronização do Connect, os mesmos eram duplicados.

**LMS**

- Ajustes na exibição do ícone de notificações de atividades ou eventos de aprendizado e avaliações recebidas na Central de Notificações, pois não estavam sendo exibidos.

- Exibição do nome completo dos alunos em todos os relatórios do LMS para permitir diferenciá-los quando eles possuem o mesmo nome e o mesmo sobrenome, sendo apenas os nomes intermediários diferentes, pois antes somente o primeiro e o último nome eram exibidos. Por exemplo: *John Edward Steel* e *John Smith Steel*.

- Ajustes na permissão definida em Painel de Controle > Permissões > Aprendizado – Alteração de *status* de matrículas para exibir apenas o botão que permite alterar o *status* de matrículas ao usuário quando está habilitada, pois também estava exibindo o botão **Matricular usuários** indevidamente.

- Incluída barra de progresso no recurso **Matricular usuários** para permitir acompanhar o andamento das matrículas quando o número de alunos que estão sendo matriculados é elevado – cerca de 4.500 alunos – evitando que o usuário tenha a impressão de que o recurso travou ou ocorreu algum problema devido à demora em exibir o resultado final da ação.

**Arquitetura**

- Correção para permitir a conexão com o servidor fluig pelo *plugin* fluig Studio de ambientes com autenticação integrada ao fluig Identity.

- Solucionada situação em ambientes que utilizam [autenticação integrada](https://tdn.totvs.com/pages/viewpage.action?pageId=162170863), onde apenas uma página em branco era exibida para usuários cujo cadastro no Active Directory não possui o campo sobrenome preenchido.

- Ajuste no procedimento de geração de senha durante a criação de usuários do fluig no fluig Identity pela opção [Enviar usuários](https://tdn.totvs.com/pages/viewpage.action?pageId=104661517) para permitir o cadastro de usuários que possuam nomes com mais de 12 caracteres.

Fique ligado!

Caso o primeiro nome do usuário possua 13 caracteres ou mais, a senha será criada usando apenas os 12 primeiros caracteres do nome + @123. Por exemplo, se o nome do usuário for Administrador, a senha gerada será Administrado@123.

- Implementado o agrupamento de e-mails para permitir o reuso de conexões ao servidor de e-mail. A utilização de múltiplas conexões, para o envio de notificações de tarefas atrasadas, por exemplo, poderia ocasionar a recusa por parte do servidor SMTP do Google.

- Inclusão dos usuários de integração exibidos na lista de usuários no Painel de Controle no papel admin, devido à necessidade da permissão de administração para executar determinadas ações.

Aviso

Em ambientes integrados ao fluig Identity, usuários de integração incluídos no papel admin não serão convertidos em administradores do contexto da empresa no fluig Identity.

- Correção no filtro responsável pela invalidação de sessões OAuth para que essas sessões sejam encerradas definitivamente, evitando inconsistências quando várias chamadas forem realizadas.

- Ajuste no procedimento verificação da versão, que impedia a atualização de ambientes com alta disponibilidade, cujo diretório *repository*/*apps* é compartilhado entre os nós.

O [Guia de atualização fluig](https://tdn.totvs.com/pages/viewpage.action?pageId=271666186) foi atualizado com informações sobre a atualização do fluig em ambientes Load Balance.

- A licença do administrador cadastrado durante a criação da empresa não será mais consumida pelo servidor de licenças quando a empresa for desativada.

Consulte a FAQ [ARQ 034 - É possível excluir ou desativar uma empresa no fluig?](https://tdn.totvs.com/pages/viewpage.action?pageId=240297057) para saber mais sobre a desativação de empresas no fluig.

- Correção no importador de dados históricos para que caso não exista o arquivo TXT ou FAC para um determinado processo/versão, seja verificada a existência de evento [beforeSendData](https://tdn.totvs.com/pages/viewpage.action?pageId=126717843) para o processo/versão e gerado um arquivo TXT/FAC para que os dados não sejam perdidos.

- Ajuste na janela de seleção de *widgets* apresentada na edição das páginas, para que ela seja redimensionada corretamente quando houver um número maior de *widgets* personalizadas cadastradas.

**Social**

- Correção aplicada às conversas em grupo no fluig Messaging para garantir aos usuários que acionem a opção Sair da conversa, que a ação seja realizada com sucesso.

- Restaurada a visualização de mensagens via fluig Messaging para Android nas conversas em que o usuário tenha recebido imagens enviadas pelo aplicativo *web*.

- Ajustada a confirmação de leitura das mensagens no fluig Messaging para iPhone/iPad para que o ícone com a quantidade de mensagens não lidas seja atualizado corretamente.

- Correção no compartilhamento de artigos em comunidades. Devido a uma inconsistência, os artigos compartilhados não estavam sendo exibidos na *timeline *da Home dos participantes.

- Ajuste na exibição do ícone de documento compartilhado na conversa, para que não se sobreponha ao texto exibido no balão da mensagem.

- Correção no *deploy* do componente [Notificações SMS](/pages/viewpage.action?pageId=181965016), pois não estava sendo possível utilizá-lo com a atualização anterior da plataforma devido a uma inconsistência na inicialização do componente.

- Aprimoramento da validação dos campos de formulários criados em comunidades para impedir a utilização de códigos iguais para diferentes questões.

- Aumento no limite de caracteres nas [publicações](https://tdn.totvs.com/pages/viewpage.action?pageId=233765790) de 600 para 700 caracteres. Essa alteração será válida para os textos publicados na *timeline*, inclusive aqueles acompanhados de imagens, vídeos, artigos ou documentos, e para [comentários](https://tdn.totvs.com/display/HF/Compartilhar) adicionados ao compartilhar uma publicação.

Ao mencionar um usuário em uma publicação (utilizando @ + nome do usuário) o contador de caracteres leva em consideração a quantidade de caracteres do login do usuário mencionado, além dos caracteres do nome.

****

**WCM**

- Incluídos os códigos das páginas/*widgets* na tela de [Permissões](https://tdn.totvs.com/x/8IL5DQ) para recursos que tenham o mesmo nome, facilitando sua identificação. Também foram adicionados *links* para as respectivas páginas/*widgets* para que o administrador tenha conhecimento sobre a localização desses recursos na plataforma.

- Correção na abertura, via aplicativo móvel, de *links* para páginas internas do fluig acessadas a partir de um *widget* Editor de Conteúdo. A página será carregada no formato próprio do aplicativo e não como um site *desktop*.

- Dispensada a necessidade de reiniciar o ambiente ao personalizar as páginas da plataforma criadas conforme a documentação [Personalização de todas as páginas da plataforma.](/pages/viewpage.action?pageId=232816834)

- Correção na troca de *layout* para que os *widgets* incluídos na página não percam as referências durante a alteração e sejam renderizados corretamente.


<!-- anchors: Atualização1.6-Arquitetura, Atualização1.6-BPM, Atualização1.6-ECM, Atualização1.6-LMS, Atualização1.6-Portais, Atualização1.6-Mobile, Atualização1.6-NovidadesemDocumentação, Atualização1.6-Correções -->
