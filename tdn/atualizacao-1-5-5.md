---
title: "Atualização 1.5.5"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=213982883"
scraped_at: "2026-03-09T03:16:59.691Z"
depth: 2
anchors: 26
child_links: 47
---

# Atualização 1.5.5

![](/download/attachments/181966041/espanhol.png?version=2&modificationDate=1422631676000&api=v2) ¿Habla Español? Haga clic [aquí](https://tdn.totvs.com/x/v2RNDQ) para ver el Release Notes en Español.

![](/download/attachments/181966041/ingles.png?version=2&modificationDate=1422631693000&api=v2) Do you speak English? Click [here](https://tdn.totvs.com/x/FGdNDQ) to view the Release Notes in English.

Confira abaixo as novidades na atualização 1.5.5 do fluig:

## Identity

**O SmartSync pousou no mundo Linux**

Agora com a nova versão do SmartSync, você pode executar ele tanto no Windows quanto no Linux. E não apenas isso, agora ele também se conecta com o OpenLDAP.

![](/download/attachments/213982883/image2015-12-8%2018-7-50.png?version=1&modificationDate=1464007203000&api=v2)

![](/download/attachments/213982883/Screenshot%20from%202015-12-08%2017-00-23%20%281%29.png?version=1&modificationDate=1464007203000&api=v2)

****

**Grupos integrados com o Active Directory mais robustos**

Agora você pode:

- Controlar os grupos do seu Active Directory diretamente pelo fluig Identity.
- Provisionar e desprovisionar usuários de grupos do Active Directory diretamente pela *web*
- Identificar a origem de cada grupo
- Alterar o nome de exibição dos seus grupos

![](/download/attachments/213982883/groups_menu.png?version=2&modificationDate=1464007479000&api=v2)

- Provisionar usuários para o Active Directory respeitando seus grupos configurados no Identity

![](/download/attachments/213982883/provisionamento_ad.png?version=6&modificationDate=1464011340000&api=v2)![](/download/attachments/213982883/Screen%20Shot%202015-09-18%20at%2010.59.15.png?version=1&modificationDate=1464007203000&api=v2)

![](/download/attachments/213982883/provisionamento_ad.png?version=6&modificationDate=1464011340000&api=v2)![](/download/attachments/213982883/provisionamento_ad.png?version=6&modificationDate=1464011340000&api=v2)

- Alterar o nome de exibição dos grupos

![](/download/attachments/213982883/image2015-9-2%2015-20-11.png?version=1&modificationDate=1464007202000&api=v2)

![](/download/attachments/213982883/alterar_nome_grupo_ad.png?version=2&modificationDate=1464010651000&api=v2)

## Arquitetura

**Deixe a tela de login do fluig com a cara da sua empresa**

Com a flexibilização da tela de *login*, você pode personalizá-la completamente, tanto para o *browser* quanto para o *mobile*, de acordo com o perfil da empresa. É possível incluir o seu HTML, com .css, .js, imagens e quaisquer demais arquivos. O HTML em questão deve ser adicionado na área do logotipo do fluig e permitirá que você utilize qualquer outro elemento HTML da tela de *login* por algum JS desenvolvido e utilizado no HTML principal.

Se interessou?

Obtenha mais detalhes em [Desenvolvimento personalizado da página de *login*](https://tdn.totvs.com/x/mokPDQ).

![](/download/attachments/213982883/FLUIGINV-6077.png?version=3&modificationDate=1451985453000&api=v2)

## BPM

**Sincronização de datasets - Garanta velocidade nas suas integrações**

Os processos de negócio integrados com outros sistemas fazem a produtividade da sua empresa crescer ainda mais. Entretanto, como garantir que mesmo quando esses outros sistemas de sua empresa sofram com lentidão ou indisponibilidade seu processo possa continuar sendo utilizado e fluindo bem?

Pensando nisso criamos o conceito de **sincronização de** ***datasets***. Ele permite trazer dados disponíveis em outros sistemas, criando uma cópia (cache) delas no banco de dados utilizado pelo fluig.

Utilizando tarefas agendadas, os dados são armazenados nas tabelas do fluig, dispensando o acesso constante aos outros sistemas a cada requisição desses dados - a cada nova solicitação iniciada no fluig, por exemplo.

Com o uso da sincronização de *datasets*, o desempenho e a disponibilidade de outros sistemas não afetará mais o desempenho de execução dos processos integrados de sua empresa. Para sistemas muito utilizados, os benefícios desse recurso são tanto para o fluig como para o próprio sistema externo. É o fluig atuando na redução de gargalos de processamento dentro da sua empresa!

Agora também é possível verificar, diretamente no Painel de Controle, todos os *datsets* criados e acompanhar as sincronizações.

Comece agora a utilizar esse novo recurso e garanta melhor desempenho para suas integrações.

Mais informações

Acesse [Sincronização de *datasets*](https://tdn.totvs.com/x/xZSwD) e obtenha informações mais detalhadas.

- [Listagem de datasets](#)
- [Consulta do dataset](#)

![](/download/attachments/213982883/FLUIGINV-795.PNG?version=3&modificationDate=1452003471000&api=v2)

![](/download/attachments/213982883/FLUIGINV-795-4.PNG?version=2&modificationDate=1452003344000&api=v2)

**Mais praticidade na criação de várias solicitações com dados similares**

Sabe aquele momento que você precisa criar diversas solicitações com dados similares? Agora essa tarefa será mais fácil no fluig! Diretamente na mensagem de confirmação da criação de uma solicitação criamos uma opção chamada **Iniciar novas solicitações.**Ela faz com que você volte para o formulário para continuar preenchendo sem precisar digitar tudo de novo. Ao enviar o processo novamente ele criará uma nova solicitação.

![](/download/attachments/213982883/SOCIALECMSUST-5522.PNG?version=2&modificationDate=1451992969000&api=v2)

**Mecanismos de atribuição otimizados**

Os mecanismos de atribuição do fluig garantem que a pessoa certa receba as solicitações e eles precisam ser rápidos e seguros. Fizemos otimizações para que você tenha em mãos apenas os mecanismos mais adequados na hora de definir o gestor do seu processo ou configurar a atividade inicial e com isso evitar lentidões quando você mais precisa de desempenho.

- [Mecanismos disponíveis para atividades do tipo Início](#)
- [Mecanismos disponíveis para atividades comuns](#)
- [Mecanismos disponíveis para definir o gestor do processo](#)

![](/download/attachments/213982883/mecanismo.PNG?version=1&modificationDate=1451993182000&api=v2)

![](/download/attachments/213982883/mecanismo-2.PNG?version=1&modificationDate=1451993209000&api=v2)

![](/download/attachments/213982883/mecanismo-3.PNG?version=1&modificationDate=1452002634000&api=v2)

**Insira anexos da solicitação diretamente do formulário**

Agora, a técnica que você utiliza no fluig Mobile para adicionar anexos de solicitação diretamente do formulário – função JavaScript "showCamera('nome_do_anexo' – também está disponível na web! E o melhor: você não precisa alterar nada. Ao acionar o botão do seu formulário que utilize essa função JavaScript, o fluig exibe a aba de anexos da solicitação e já abre a janela para selecionar arquivos a serem anexados.

Mais detalhes

Você encontra mais detalhes sobre a utilização em [Desenvolvimento de formulário mobile](https://tdn.totvs.com/x/xY22C).

![](/download/attachments/213982883/FLUIGINV-5987.png?version=3&modificationDate=1452005459000&api=v2)

**Utilize o mesmo formulário na Web e no Mobile**

O editor de formulários em processos agora gera os formulários com [fluig Style Guide](https://style.fluig.com/). Além disso, utilizamos o conceito de formulário único e criamos apenas um arquivo HTML, tanto para a Web quanto para o *Mobile*, tornando-o responsivo e contando com os novos campos pai x filho, *zoom*e classificação (*rating stars*).

- [Editor de formulário de processo](#)
- [Visualização do formulário criado](#)

![](/download/attachments/213982883/FLUIGINV-5851.PNG?version=1&modificationDate=1451984147000&api=v2)

![](/download/attachments/213982883/FLUIGINV-5851-2.PNG?version=1&modificationDate=1451984174000&api=v2)

## Mobile

**Sincronização de datasets - Ela também deixa o mobile ainda melhor**

Que a computação móvel trouxe inúmeras vantagens para o mundo corporativo todo mundo já sabe. Mas como acessar dados de sistemas externos em dispositivos que não estão o tempo todo conectados com a internet?

Com a sincronização de *datasets* os dispositivos móveis agora funcionam muito melhor mesmo sem internet (*offline*).

Deixamos isso tudo muito simples, basta definir no formulário do seu processo quais são os *datasets* que ele utilizará e determinar o tipo de acesso que será feito em dispositivos móveis no Painel de Controle.

Com apenas alguns cliques seu dispositivo móvel guardará os dados dos *datasets* em um banco de dados interno do aplicativo do fluig *Mobile*, permitindo que seus usuários executem seus processos mesmo em locais onde o acesso à internet não está disponível. 

Mais informações

Acesse [Sincronização de *datasets*](https://tdn.totvs.com/x/xZSwD) e obtenha informações mais detalhadas.

- [Definições mobile](#)
- [Datasets do formulário](#)
- [Sincronização mobile](#)

![](/download/attachments/213982883/FLUIGINV-795-2.PNG?version=2&modificationDate=1451986291000&api=v2)

![](/download/attachments/213982883/FLUIGINV-795-3.PNG?version=1&modificationDate=1450345256000&api=v2)

![](/download/attachments/213982883/4-1.png?version=2&modificationDate=1452090232000&api=v2)

**Agora você pode substituir usuários pelo fluig Mobile**

Necessita substituir algum usuário durante a movimentação de uma solicitação e só tem um *smartphone* ou *tablet* nas mãos? Fique tranquilo, com apenas alguns toques você pode substituir usuários na movimentação e cancelamento de solicitações.

- [Gráfico de tarefas](#)
- [Atividades na Central de Tarefas](#)
- [Lista de usuários substituídos](#)

![](/download/attachments/213982883/FLUIGINV-6975.png?version=1&modificationDate=1452011842000&api=v2)

![](/download/attachments/213982883/FLUIGINV-6975-2.png?version=1&modificationDate=1452011868000&api=v2)

![](/download/attachments/213982883/FLUIGINV-6975-3.png?version=1&modificationDate=1452011893000&api=v2)

**As publicações ricas também chegaram ao fluig Mobile!**

A revolução na forma que você interage com artigos também chegou ao fluig Mobile. Agora você pode visualizar a publicação de artigos em dispositivos móveis com um resumo, a imagem de capa e o título com destaque mais que especial. Aumente o engajamento dos usuários com os artigos em comunidade também na palma das suas mãos!

- [Resumo do artigo na timeline da comunidade](#)
- [Visualização do artigo completo](#)

![](/download/attachments/213982883/FLUIGINV-7081.png?version=1&modificationDate=1452013277000&api=v2)

![](/download/attachments/213982883/IMG_0824_iphone6plus_silver_portrait.png?version=1&modificationDate=1452088790000&api=v2)

## ECM

**Faça download de vários documentos ao mesmo tempo**

Precisa baixar vários documentos de uma determinada pasta? Agora isso está muito mais prático, pois você pode efetuar o *download* de todos os documentos de uma pasta de uma única vez, tanto na Navegação de Documentos quanto no resultado de uma busca realizada. Para isso, basta selecionar a pasta desejada e acionar a opção **Download**, localizada no menu de contexto no lado direito da pasta.

Lembre-se!

Apenas documentos que permitem *download* serão empacotados no ZIP de *download*.

- [Navegação de Documentos](#)
- [Resultado da busca](#)
- [Compactação dos documentos](#)
- [Documentos baixados](#)

![](/download/attachments/213982883/FLUIGINV-5789.PNG?version=2&modificationDate=1451986568000&api=v2)

![](/download/attachments/213982883/FLUIGINV-5789-2.PNG?version=2&modificationDate=1451986587000&api=v2)

![](/download/attachments/213982883/FLUIGINV-5789-3.PNG?version=2&modificationDate=1451986612000&api=v2)

![](/download/attachments/213982883/FLUIGINV-5789-4.PNG?version=2&modificationDate=1451986654000&api=v2)

Faça o *download* múltiplo de vários documentos ou pasta com apenas um clique:

**Gerencie e limite o espaço disponível para publicações de documentos**

Gostaria de ter mais controle do espaço disponível para publicação de documentos? Agora é possível! Defina uma cota de armazenamento em cada pasta, inclusive na pasta particular dos usuários – Meus documentos. O espaço disponível para publicação é definido em megabytes (MB).

Fique atento!

A cota de armazenamento de publicações obedece a hierarquia de pastas, ou seja, todas as subpastas herdam o valor definido para a pasta principal.

- [Definição de cotas padrão](#)
- [Definição de cota específica para a pasta](#)
- [Espaço utilizado e disponível](#)
- [Relatório de cotas utilizadas](#)

![](/download/attachments/213982883/FLUIGINV-1550.PNG?version=2&modificationDate=1451986788000&api=v2)

![](/download/attachments/213982883/FLUIGINV-1550-2.PNG?version=1&modificationDate=1450348689000&api=v2)

![](/download/attachments/213982883/FLUIGINV-1550-3.PNG?version=2&modificationDate=1451986810000&api=v2)

![](/download/attachments/213982883/FLUIGINV-1550-4.PNG?version=2&modificationDate=1451988418000&api=v2)

Controle o volume de documentos publicados com o Controle de Cotas:

**Use o fluig Viewer em outro servidor**

Agora na edição da empresa, em Cadastros adicionais, inclua o parâmetro **internalVisualizerServer** com o endereço HTTP do local onde o fluig Viewer está instalado. Exemplo: [http://10.0.0.1](http://10.0.0.1).

Assim você pode rapidamente mudar o servidor no qual está instalado o fluig Viewer e ter mais de um ambiente fluig, por exemplo de produção e desenvolvimento, usando o mesmo serviço do fluig Viewer.

Quer mais informações sobre o fluig Viewer?

Acesse [Sobre o fluig Viewer](https://tdn.totvs.com/x/8af5Cw) e confira!

![](/download/attachments/213982883/FLUIGINV-6403.PNG?version=4&modificationDate=1452759962000&api=v2)

**Edição de documentos mais colaborativa**

Criamos o recurso de edição de documentos por meio do Google Drive. Agora, além de ter mais uma opção para editar um documento, você também pode convidar outros usuários da plataforma para editá-lo junto com você, tornando tudo mais colaborativo.

O *check-in*/*check-out* do documento é feito automa**g**icamente, a ferramenta de edição do Google Drive é exibida dentro do fluig e o documento não permanece no Google Drive após a edição, fique tranquilo. Então, basta se preocupar em editar e salvar o documento, pois o fluig se encarrega de todo o resto. Bacana, não?

Gostaria de utilizar?

Obtenha esse recurso na [fluig Store](http://www.fluigstore.com/) e usufrua de mais essa facilidade para seu dia a dia. Mais detalhes em [Edição colaborativa com Google Drive.](https://tdn.totvs.com/pages/viewpage.action?pageId=219694266)

- [Ativação da edição colaborativa](#)
- [Edição do documento](#)
- [Opção Google Drive](#)
- [Google Drive dentro do fluig](#)
- [Edição do documento por vários usuários](#)

![](/download/attachments/213982883/FLUIGINV-4145.png?version=1&modificationDate=1451294013000&api=v2)

![](/download/attachments/213982883/FLUIGINV-4145-2.png?version=1&modificationDate=1451294040000&api=v2)

![](/download/attachments/213982883/FLUIGINV-4145-3.png?version=1&modificationDate=1451294088000&api=v2)

![](/download/attachments/213982883/FLUIGINV-4145-4.png?version=1&modificationDate=1451294137000&api=v2)

![](/download/attachments/213982883/FLUIGINV-4145-4.png?version=1&modificationDate=1451294137000&api=v2)

Edite documentos com o Google Drive:

**Mais produtividade para o seu dia a dia com anotações em documentos**

Com o novo recurso de notas você pode criar anotações em seus documentos.

E mais! Você também pode convidar mais pessoas para discutir sobre o documento, verificando suas anotações e criando novas, tornando o trabalho mais colaborativo. Assim que uma pessoa é convidada, ela recebe uma notificação para participar das anotações do documento e todas as anotações no documento ficam disponíveis para consultas posteriores, sempre preservando o documento original.

- [Iniciando anotações](#)
- [Criação da nota para o documento](#)
- [Documento disponível para anotações](#)
- [Adicionando usuários](#)
- [Anotações no documento](#)

![](/download/attachments/213982883/FLUIGINV-5558.png?version=2&modificationDate=1451297869000&api=v2)

![](/download/attachments/213982883/FLUIGINV-5558-2.png?version=2&modificationDate=1451297882000&api=v2)

![](/download/attachments/213982883/FLUIGINV-5558-3.png?version=2&modificationDate=1451297907000&api=v2)

![](/download/attachments/213982883/FLUIGINV-5558-4.png?version=3&modificationDate=1451297928000&api=v2)

![](/download/attachments/213982883/FLUIGINV-5558-5.png?version=2&modificationDate=1451297949000&api=v2)

Faça anotações em documentos, anotações pessoais ou em grupo:

**Paginação no fluig Connect – mais desempenho**

Para aprimorar o desempenho, o fluig Connect agora conta com a opção **Mais**quando a estrutura de arquivos é muito grande. São listados apenas 30 registros por vez, sendo possível solicitar que sejam exibidos mais por meio dessa nova opção.

![](/download/attachments/213982883/connect.png?version=1&modificationDate=1452007558000&api=v2)

## LMS

**Crie conteúdos ricos em SCORM com o Elucidat**

Criar conteúdos que sejam atrativos para o treinamento é vital para o sucesso de sua capacitação. O fluig LMS agora possui uma integração com a ferramenta Elucidat*,*que permite trazer os conteúdos SCORMs desenvolvidos nela para que sejam utilizados em conteúdos de treinamentos e turmas.

Mas o que é Elucidat?

Elucidat é uma ferramenta totalmente Web para criação e edição de conteúdos de aprendizagem no formato SCORM. Com o Elucidat você pode desenvolver materiais ricos em imagens e conteúdos multimídia apoiado por diferentes temas pré-configurados para agilizar seu trabalho.

Como obter a integração para implantar no meu ambiente?

Para utilizar a integração com o Elucidat no seu fluig você deve adquirir esse item na [fluig Store](http://www.fluigstore.com/), com ele serão entregues os artefatos e suas chaves de acesso a uma conta no Elucidat. Adquira hoje mesmo na fluig Store!

- [Configurando a integração com Elucidat](#)
- [Importando conteúdo SCORM criado no Elucidat](#)
- [Visualizando conteúdo SCORM criado no Elucidat](#)

![](/download/attachments/213982883/elucidat.png?version=1&modificationDate=1450706348000&api=v2)

![](/download/attachments/213982883/elucidat-2.png?version=1&modificationDate=1450706395000&api=v2)

 ![](/download/attachments/213982883/eluciat-3.png?version=1&modificationDate=1450706449000&api=v2)

Crie treinamentos modernos com o Elucidat:

**Promova a interação e a disseminação de conhecimento com a Academia Social!**

Deseja disseminar conhecimento, integrar os alunos da mesma turma ou da mesma disciplina, instiga-los a compartilhar ideias, fazer perguntas e contribuir com os assuntos das aulas? Você pode fazer tudo isso e muito mais com a Academia Social! Com ela, sempre que você cria uma nova turma, automaticamente é criada uma comunidade para ela, com o coordenador da turma como administrador e os responsáveis como moderadores. Os alunos são incluídos no momento em que sua matrícula é aprovada.

Dentro da comunidade você tem tudo aquilo que você já conhece: *timeline*, documentos, artigos, imagens, vídeos e uma página exclusiva com os *widgets* que você mesmo configura.

Se desejar, também é possível ter uma comunidade para a disciplina. Neste caso, é necessário optar pela sua criação na aba **Comunidades** do cadastro de Disciplinas. Bacana, não?

Importante!

Sempre que o fluig é iniciado, é verificado se existem turmas sem comunidades e, em caso afirmativo, uma comunidade é criada para cada turma. Se a turma não tiver coordenador, então o usuário administrador da empresa é definido como **coordenador da turma** e administrador da comunidade.

- [Criação de comunidade para turma](#)
- [Criação de comunidade para disciplina](#)
- [Comunidades de turmas e disciplinas](#)

![](/download/attachments/213982883/FLUIGINV-6041-2.PNG?version=2&modificationDate=1450804702000&api=v2)

![](/download/attachments/213982883/FLUIGINV-6041.PNG?version=2&modificationDate=1450804732000&api=v2)

![](/download/attachments/213982883/FLUIGINV-6041-3.PNG?version=2&modificationDate=1452001830000&api=v2)

Crie um ambiente moderno de aprendizagem com a Academia Social:

## Social

**Nova experiência na listagem de artigos**

Modificamos completamente a listagem de artigos em comunidades e, dessa forma, revolucionamos a exibição deles nas comunidades. Agora os artigos são apresentados em forma de *cards* e esses *cards* exibem as informações mais relevantes, como a imagem de capa, a data de última atualização, o autor e a prévia do texto.

A listagem permite ordenar os artigos de diversas maneiras, exibir somente os seus artigos, somente os seus rascunhos criados, ou todos os artigos, além da busca por título do artigo.

Na listagem de artigos, é possível remover e editar cada artigo ao lado do título, para você acessar quando seu usuário tem permissão para manipular o artigo em questão.

E a listagem de artigos também ganhou a visualização rápida, onde você pode ver um artigo com um simples clique no *card*, sem a necessidade de navegar para outra página ou perder o contexto da listagem dos artigos.

A janela também foi construída com técnicas de *design* responsivo, para cair como uma luva na tela do seu dispositivo.

- [Listagem de artigos](#)
- [Busca de artigo](#)
- [Ações sobre artigo](#)
- [Visualização de artigo](#)

![](/download/attachments/213982883/FLUIGINV-7166.PNG?version=1&modificationDate=1450716850000&api=v2)

![](/download/attachments/213982883/FLUIGINV-7166-2.PNG?version=1&modificationDate=1450716869000&api=v2)

 ![](/download/attachments/213982883/FLUIGINV-7166-3.PNG?version=1&modificationDate=1450716893000&api=v2)

![](/download/attachments/213982883/FLUIGINV-7166-4.PNG?version=1&modificationDate=1450716911000&api=v2)

Interaja com artigos de forma mais intuitiva, rápida e fácil:

**Edição de permissões mais fácil e intuitiva**

Está mais simples e clara a administração das permissões em suas comunidades. Na própria tela de edição da comunidade você pode visualizar e modificar quais usuários, grupos de usuários ou até mesmo para qual papel serão atribuídas permissões específicas.

A edição de permissões disponível no Painel de Controle também foi aprimorada para tornar a administração dos recursos muito mais simples. Com o painel que exibe a edição das permissões em etapas reformulado, consultar ou aplicar permissões aos usuários está muito fácil.

- [Permissões na própria comunidade](#)
- [Permissões no Painel de Controle](#)
- [Categorias de permissões](#)
- [Opções de permissão](#)
- [Confirmação das alterações](#)

![](/download/attachments/213982883/FLUIGINV-7179.png?version=1&modificationDate=1450773912000&api=v2)

![](/download/attachments/213982883/FLUIGINV-7179-2.png?version=1&modificationDate=1450773944000&api=v2)

![](/download/attachments/213982883/FLUIGINV-7179-3.png?version=1&modificationDate=1450773999000&api=v2)

![](/download/attachments/213982883/FLUIGINV-7179-5.png?version=1&modificationDate=1450774171000&api=v2)

![](/download/attachments/213982883/FLUIGINV-7179-6.png?version=1&modificationDate=1450774279000&api=v2)

![](/download/attachments/213982883/FLUIGINV-7179-7.png?version=1&modificationDate=1450774294000&api=v2)

Gerencie permissões administrativas em uma interface simples e fácil:

**Compartilhe um artigo que já existe na timeline de uma comunidade**

Quer compartilhar um artigo que já existe com os membros da comunidade? É muito simples. Basta selecionar a opção **Publicar artigo**, no quadro de nova publicação da *timeline* e, em seguida, selecionar o artigo desejado na janela exibida. Pronto! Agora é só finalizar a publicação. Dessa forma, você ganhou agilidade e maior fomentação de conteúdo aos demais participantes da comunidade.

- [Publicação de artigo na timeline da comunidade](#)
- [Seleção de um artigo que já existe](#)
- [Finalização da publicação do artigo](#)
- [Artigo publicado na timeline da comunidade](#)
- [Visualização do artigo completo](#)

![](/download/attachments/213982883/FLUIGINV-3790.PNG?version=1&modificationDate=1451982436000&api=v2)

 ![](/download/attachments/213982883/FLUIGINV-3790-2.PNG?version=1&modificationDate=1451982471000&api=v2)

![](/download/attachments/213982883/FLUIGINV-3790-3.PNG?version=1&modificationDate=1451982505000&api=v2)

![](/download/attachments/213982883/FLUIGINV-3790-4.PNG?version=1&modificationDate=1451982551000&api=v2)

![](/download/attachments/213982883/FLUIGINV-3790-5.PNG?version=1&modificationDate=1451982593000&api=v2)

**Inclua eventos em sua agenda a partir do fluig**

Com o recurso Adicionar ao calendário você pode criar eventos – para não esquecer os compromissos – e adicionar os eventos à sua agenda preferida, seja ela o Outlook, o Google agenda ou o Calendário Apple com apenas um clique.

O recurso Adicionar ao calendário pode ser utilizado em qualquer página, aumentando o leque de possibilidades de personalização disponíveis em sua plataforma.

- [Inclusão do recurso na página](#)
- [Criação do evento](#)
- [Inclusão do evento na agenda](#)
- [Artigo publicado na timeline da comunidade](#)

![](/download/attachments/213982883/FLUIGINV-5549.png?version=2&modificationDate=1452243908000&api=v2)

![](/download/attachments/213982883/FLUIGINV-5549-2.png?version=1&modificationDate=1452243925000&api=v2)

![](/download/attachments/213982883/FLUIGINV-5549-3.png?version=1&modificationDate=1452243960000&api=v2)

![](/download/attachments/213982883/FLUIGINV-5549-4.png?version=1&modificationDate=1452243997000&api=v2)

![](/download/attachments/213982883/FLUIGINV-5549-5.png?version=1&modificationDate=1452244012000&api=v2)

Criar, divulgar e adicionar eventos à sua agenda ficou muito fácil:

## WCM

**Área de exibição maior no Acesso centralizado**

Adicionamos paginação no *widget* Acesso centralizado, tornado a área de exibição maior e permitindo a exibição de mais registros. 

![](/download/attachments/213982883/SOCIALECMSUST-5573.PNG?version=3&modificationDate=1452179615000&api=v2)

## Novidades em documentação

- Atualizada a documentação sobre alteração dos atributos “HttpOnly” e “Secure” dos *cookies* do fluig quando há a configuração de conexão segura – protocolo HTTPS. Confira em [Configurar HTTPS](https://tdn.totvs.com/x/D4CgBw).Não se preocupe Se você já utiliza o protocolo HTTPS, não é necessário alterar nada, fique tranquilo.
- [Página de login](https://tdn.totvs.com/x/mokPDQ)
- [Formulário Mobile](https://tdn.totvs.com/x/xY22C)
- [Edição com Google Drive](https://tdn.totvs.com/x/ukQYDQ)
- [Calendário](https://tdn.totvs.com/x/yUQYDQ)
- Treinamentos com Elucidat
- [Sincronização de Datasets](https://tdn.totvs.com/x/xZSwD)
- [Fluig Mobile](https://tdn.totvs.com/x/fIYtCw)
- [Temas de formulários](https://tdn.totvs.com/x/AYPCC)
- [Processamento assíncrono](https://tdn.totvs.com/x/8wPaCQ)
- [Timeline](https://tdn.totvs.com/x/TltNDQ)

## Correções

Nessa sessão listamos alguns *bugs* que matamos nessa atualização que garantem que tudo corra bem na sua plataforma.

- Notificação de cancelamento duplicada quando a solicitação possui uma atividade com mecanismo de atribuição para Papel e foi assumida pelo usuário que a cancelou.

- Exibição da opção "Requisição de matrícula pendente para responsável da conta" na configuração de notificações de aprendizado.

- Método *create* do *Webservice* *ECMCardService*considera o *publisherId* como dono do documento quando não é informado o *ColleagueId*.

- Edição de formulário que contém uma regra com acentuação na mensagem de validação.

- Validação da relação entre componentes Fork e Join na edição de diagramas no fluig Studio.

- Acesso ao fluig a partir do navegador em dispositivos móveis que utilizam o sistema operacional Android.

- Inclusão de usuários em uma comunidade a partir da opção **Adicionar usuários por grupo** sem gerar notificação para aceitar os usuários incluídos para o administrador da comunidade.

- Duplicação de grupos na aba Segurança das propriedades de um documento ao alternar entre as abas quando está definido para herdar as permissões da pasta pai.

- Exibição de mensagem explicativa quando a quantidade de usuários exceder a quantidade de licenças disponíveis e ao desativar um usuário quando o fluig está integrado ao Identity.

- Contagem do gráfico de tópicos realizados e não realizados na página da turma pela qual o usuário autenticado é responsável.

- Exibição do *favicon* em todas as páginas do fluig ao utilizar qualquer um dos navegadores homologados.

- Redirecionamento para o local anterior selecionado pelo aluno ao voltar ou finalizar um item de tópico de uma turma em andamento.

- Cadastro de usuários por um usuário que é administrador por estar em um grupo administrador, ou seja, possui permissão herdada e não direta.

- Alterada a opção Movimentar para Enviar na janela de início de solicitações.

- Envio de e-mail de notificação de pendência ao transferir uma tarefa entre usuários.

- Transferência de pendências entre usuários – quando o documento já foi aprovado pelo usuário que estava com a tarefa mas ainda está em consenso – para permitir desativar esse usuário.

- Ajuste no *Update* **1.5.4/1009** quando executado em ambientes que utilizam o banco de dados Oracle.Importante! Para clientes Oracle Depois de executar este *Update*, é necessário reiniciar o servidor fluig para que as alterações sejam efetivadas.

- Requisição de matrícula de alunos efetuadas automaticamente por meio da API [/lms/enrollment/createRequest](https://api.fluig.com/resource_EnrollmentServiceRest.html#path__lms_enrollment_createRequest.html).Obtenha mais detalhes Obtenha mais detalhes em [fluig API](https://tdn.totvs.com/x/d4RXBQ).

- Número de tarefas de correção de uma atividade extraclasse em grupo igual ao número de participantes do grupo.

- Exibição de informações adicionais e explicativas sobre habilidades nos cadastros de disciplinas, trilhas e treinamentos.

- Movimentação de solicitações de processos que foram criados no Studio e exportados para a plataforma depois que é exibida uma mensagem de validação e informado o dado solicitado na validação.

- Tema de página pública quando o tema da empresa à qual a página pertence foi alterado na plataforma.

- Criação de atividades com prazo de conclusão para o dia corrente em processos AdHoc.

- Consulta de solicitações de processos que foram cancelados quando uma das atividades paralelas já havia sido completada.

- Inclusão de serviços a partir do Studio quando o volume da empresa e o arquivo de *bind* estavam com um endereço da rede.

- Conexão do fluig Conect ao fluig quando nenhum parâmetro era informado.

- Ajustes em mensagens de inconsistências para não apresentar informações importantes da plataforma e proteção contra XSS na busca global.

- Criação de atividade do tipo Timer depois de uma atividade automática (exclusiva) precedida de um Join.

- Exibição de mensagem informando que a solicitação foi movimentada ao movimentar a solicitação após uma atividade automática com seleção manual de usuários.

- Instalação de novos componentes pela Central de Componentes quando o *offset* está configurado com um valor diferente de 0 no “standalone.xml”.

- Exclusão de notificações a partir da opção Excluir todas existente na Central de Notificações do fluig Connect.

- Acesso à Central de Notificações do fluig Connect quando há integração com o Identity sem SSO.

- Publicação de documentos por meio de *webservice* quando a autenticação é feita mais de uma vez em um ambiente fluig integrado ao Identity.

- Execução da tarefa automática de movimentação de tarefas em atraso quando o número de tarefas é elevado (mais de 2000).

- Exibição da janela para seleção do usuário em uma solicitação quando há o mecanismo de atribuição por campo de formulário seguido de duas atividades automáticas no processo.

- Visualização de solicitação que foi iniciada e transferida entre usuários pelo usuário que a recebeu.

- Execução de avaliação de reação presente em uma trilha de aprendizado.

- Exibição da lista de usuários substituídos para o usuário substituto na Central de Tarefas quando ele utiliza o fluig Mobile.Saiba mais Foi aprimorado o serviço [bpm/substituteUser/getValidSubstitutedUsers/](https://api.fluig.com/resource_SubstituteUserServiceRest.html#path__bpm_substituteUser_getValidSubstitutedUsers_-companyId-_-substituteId-.html) para o fluig Mobile.

- Importação de arquivos que possuem a extensão PDF ao integrar a plataforma fluig ao RM (GED).

- Exportação do histórico de mensagens do Messaging.

- Execução de atividades intermediárias condicionais em processos *workflow*.

- Transferência de pendências entre usuários quando o número de tarefas é elevado – mais de 40 tarefas transferidas.

- Visualização de notícias em tela cheia no *widget* Notícias do Kit intranet após acionar a opção Ver mais.

- Os serviços do Identity ganharam redundâncias de conexão, ou seja, estão mais robustos contra falhas de *hardware* e rede.

- Ocasionalmente ocorria a perda da exibição de aplicativos. Reestruturamos a rotina para que não volte a ocorrer.

- Em alguns casos, os usuários não eram ativados automaticamente e necessitavam aceitar o e-mail de convite. Agora a ativação ocorre automaticamente.

- Escalável: os ambientes do produto foram duplicados em quantidades de máquinas

- Documentação essencial do produto foi totalmente revisada

- Temos 52 FAQs saídas do forno referentes a dúvidas pontuais de implantação


<!-- anchors: Atualização1.5.5-Identity, Atualização1.5.5-Arquitetura, Atualização1.5.5-BPM, samples, samples, samples, Atualização1.5.5-Mobile, samples, samples, samples, Atualização1.5.5-ECM, samples, samples, samples, samples, Atualização1.5.5-LMS, samples, samples, Atualização1.5.5-Social, samples, samples, samples, samples, Atualização1.5.5-WCM, Atualização1.5.5-Novidadesemdocumentação, Atualização1.5.5-Correções -->
