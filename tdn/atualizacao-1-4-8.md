---
title: "Atualização 1.4.8"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=185730208"
scraped_at: "2026-03-09T03:18:09.143Z"
depth: 2
anchors: 5
child_links: 41
---

# Atualização 1.4.8

¿Habla Español? Haga [clic aquí](https://tdn.totvs.com/pages/viewpage.action?pageId=185740850) para ver el Release Notes en Español.

 Do you speak English? [Click here](https://tdn.totvs.com/display/fluigeng/Version+1.4.8) to view the Release Notes in English.

Confira abaixo as novidades na atualização 1.4.8 do Fluig:

## BPM

**Central de Tarefas para todos**

Agora a Central de Tarefas apresenta o gráfico de tarefas da mesma forma para todos os usuários, ou seja, todos eles visualizam as tarefas de cada tipo na mesma ordem e na mesma cor. Por exemplo, as Minhas Solicitações são apresentadas na cor verde para todos os usuários e na mesma ordem na legenda, independentemente do número de solicitações existentes de cada tipo.

![](/download/attachments/185730208/SOCIALECMSUST-3747.PNG?version=1&modificationDate=1425298450000&api=v2)

## Guia de Estilos

**Transformação de elemento checkbox em componente switch**

Agora o Guia de Estilos conta com o método “FLUIGC.switcher.initAll”, que permite transformar vários elementos *checkbox* em componente *switch*, filtrando – se necessário – por filhos de um determinado nó ou pelo nome quando o formulário é do tipo Pai x Filho.

Gostou?

Acesse o [Guia de Estilos](https://style.fluig.com/javascript.html#switch-button) e obtenha mais detalhes sobre o novo método que está disponível.

## Social

**Objeto oauthUtil em eventos de processos**

Agora é possível consumir serviços da API pública em eventos de processos e na criação de *datasets*desenvolvidos sobre a plataforma. Também foi adicionado objeto genérico para consumir API *oauth* de terceiros.

Quer saber mais?

Acesse a documentação [Consumo da API Pública em Eventos](https://tdn.totvs.com/x/hRwSCw) e obtenha mais detalhes.

## WCM

**Nova opção para criação e edição de conteúdos**

O *widget* Editor de Conteúdo apresenta uma nova opção no editor. Agora você pode também inserir códigos HTML no editor para criar ou alterar conteúdos mais elaborados e personalizados, contando com os recursos que a linguagem HTML proporciona. Para isso, basta acionar Código-fonte e inserir o código desejado.

![](/download/attachments/185730208/SOCIALECMSUST-3853.PNG?version=1&modificationDate=1424954637000&api=v2) 

## Correções

Nessa sessão listamos alguns bugs que matamos nessa atualização que garantem que tudo corra bem na sua plataforma.

- Movimentação de solicitação em dispositivos móveis quando o processo possui formulário e é utilizada a base de dados Oracle.

- Remoção de arquivos da área de *upload* depois de iniciar uma solicitação que possui anexos por meio de *webservice*.

- Visualização de arquivos que são anexos de uma solicitação enquanto ela está em andamento e também depois de finalizada.

- Alteração do nome do campo presente na tela do mecanismo de atribuição por usuário, na configuração de atividades, de “Usuário” para “Matrícula do Usuário”.

- Apresentação da mensagem de finalização da extração das estatísticas de uso, disponível na aba Gerais do Painel de Controle.

- Emissão de notificação para os usuários participantes do grupo quando uma tarefa que possui mecanismo de atribuição para grupo é enviada para a próxima etapa.

- Desbloqueio do campo Observações, da aba Observação do processo, e campos do formulário na última atividade quando é utilizado o navegador Internet Explorer nas versões 10 e 11.

- Seleção de datas no calendário presente em um campo de formulário do tipo Data no Fluig Mobile quando é utilizado o sistema operacional Android.

- Acesso a arquivos e formulários publicados e inicialização de solicitações utilizando o navegador Internet Explorer 11.

- Utilização de dados numéricos em registros de listas mestra.

- Criação de empresas – por meio da opção Empresas, localizada na guia WCM ao acessar a plataforma com o usuário “wcmadmin” – em um ambiente no qual se utiliza o idioma e as configurações regionais em Espanhol.

- Apresentação do nome do arquivo físico na mensagem que informa que o usuário não possui permissão para publicar documentos na pasta em questão.

- Visualização e *download*anexos a processos workflow quando não é utilizado o visualizador interno. 

- Publicação de documentos por meio do recurso *drag and drop* (arrastar e soltar) na navegação de documentos utilizando o navegador Mozilla Firefox. 

- Edição de registros de formulários quando é utilizado o banco de dados Oracle.

- Desconsideração de usuários inativos na validação de licenças durante a conversão do ECM para o Fluig.

- Desempenho durante a utilização da navegação de documentos, aprimorando o consumo de memória dos objetos de negócio.

- Utilização do método *uploadCardData*do *webservice* *CardService* quando a versão do registro de formulário é 1000.

- Exibição de registros ao consultar *datasets* de formulário Pai x Filho durante eventos do *workflow*.

- Formato e exibição de datas em formulários de processos *workflow* nos navegadores Mozilla Firefox, Internet Explorer e Google Chrome quando é utilizado o idioma e as configurações regionais como Português (Brasil).

- Exportação de formulários que possuem eventos do Fluig Studio para o servidor web. 

- Criação de nova revisão ao alterar documentos que estão configurados para criar uma nova revisão quando têm seu conteúdo editado.


<!-- anchors: Atualização1.4.8-BPM, Atualização1.4.8-GuiadeEstilos, Atualização1.4.8-Social, Atualização1.4.8-WCM, Atualização1.4.8-Correções -->
