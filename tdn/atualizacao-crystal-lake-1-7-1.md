---
title: "Atualização Crystal Lake (1.7.1)"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=545647981"
scraped_at: "2026-03-09T03:41:06.040Z"
depth: 2
anchors: 8
child_links: 46
---

# Atualização Crystal Lake (1.7.1)

![](/download/attachments/545647981/Crystal%20Lake.png?version=2&modificationDate=1614864485670&api=v2)

Descontinuação do Internet Explorer

Conforme [notícia divulgada anteriormente](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360055344913), comunicamos que em **01/03/2021** foi encerrado o suporte à plataforma TOTVS Fluig com o navegador **Internet Explorer. **

Sugerimos aos clientes que ainda utilizam o navegador Internet Explorer, que consultem a [matriz de portabilidade](/display/fluig/Matriz+de+Portabilidade) e adotem um dos navegadores homologados para acessar a plataforma.

Confira abaixo as novidades na atualização 1.7.1 do TOTVS Fluig Plataforma:

 ¿Habla Español? Haga [clic aquí](/pages/viewpage.action?pageId=600141540) para ver el Release Notes en Español.

 Do you speak English? [Click here](/pages/viewpage.action?pageId=600139941) to view the Release Notes in English.

## Plataforma

---

**Aprofunde-se na gestão de permissões**Nossos clientes pediram e nós atendemos... Confira as novidades sobre as permissões da plataforma!

**Uma nova experiência de controle de permissões**Desenhamos um layout totalmente novo, com as permissões estruturadas por ordem de menu, e com todas as descrições do recurso, para que você possa configurar as permissões de uma forma muito mais fácil e rápida. E também há recursos adicionais, como buscar em todas as permissões ou em um tipo específico, filtrar por um ou mais tipos.

![](/download/attachments/545647981/Permiss%C3%B5es.png?version=1&modificationDate=1614282992170&api=v2)

**Permissões específicas por recurso no Painel de controle**Agora quem administra as permissões podem liberar cada recurso do painel de controle individualmente, de acordo com a necessidade. A permissão a cada recurso pode ser configurada por usuário específico, grupo ou papel.

![](/download/attachments/545647981/Painel%20de%20controle.png?version=1&modificationDate=1614283006620&api=v2)

Confira o passo a passo na documentação de [Permissões](/pages/viewpage.action?pageId=234455792).

**Facilitamos a configuração de segurança na sua plataforma**

Você sabe o que é HTTPS? De acordo com o site Wikipedia, HTTPS é uma implementação do protocolo HTTP sobre uma camada adicional de segurança que utiliza o protocolo SSL/TLS. Essa camada adicional permite que os dados sejam transmitidos por meio de uma conexão criptografada e que se verifique a autenticidade do servidor e do cliente por meio de certificados digitais.

![](/download/attachments/545647981/unnamed.png?version=1&modificationDate=1612373801557&api=v2)

**Segurança configurada em poucos cliques**Nos dias de hoje segurança nunca é demais, não é mesmo? Por esse motivo, a configuração para utilização do protocolo HTTPS deixou de ser um processo complexo e manual. Agora passa a ser feita em tela, no Painel de Controle do usuário wcmadmin, de forma muito mais rápida e intuitiva. 

![](/download/attachments/545647981/Facilitador%20https.gif?version=1&modificationDate=1612870536910&api=v2)

Disponibilize o seu ambiente com esse protocolo, e seus usuários terão toda a segurança que o protocolo HTTPS pode oferecer.

**Saiba mais**

Confira a documentação completa em [Configuração HTTPS da plataforma](/pages/viewpage.action?pageId=354472893) e [Configurações do sistema](/pages/viewpage.action?pageId=235597328).

**Personificação: mais segurança na automação dos serviços**

Personificação é quando uma pessoa executa ações em nome de outra. A plataforma possui serviços (APIs, datasets, webservices) que permitem que o usuário do contexto seja diferente do usuário autenticado. Por exemplo, o usuário acessa a API de workflow com o id "user1" e chama o método que movimenta uma solicitação workflow. Porém esse método tem um parâmetro que informa a partir de qual usuário será feita a movimentação, nesse caso pode ser passado o  id "user2", possibilitando que o user1 consiga movimentar uma solicitação que está com o user2. Esse recurso é essencial para automatizar alguns processos, no caso de ter um usuário integrador que movimenta as solicitações atrasadas automaticamente. 

**Isso é muito bacana, mas... como garantir que isso não se torne uma vulnerabilidade?** 

Fique tranquilo! Disponibilizamos no controle de permissões do Painel de controle, um novo tipo de recurso: **Personificação de usuários**. Somente usuários com essa permissão ativada podem executar ações utilizando o ID de outro usuário.

![](/download/attachments/545647981/Personification.png?version=1&modificationDate=1612470058360&api=v2)

**Saiba Mais**

Confira todos os serviços que contam esse recurso na documentação técnica de [Personificação](/pages/viewpage.action?pageId=567579891).

## Documentos

---

**Ampliamos os recursos da lixeira**

**Novas informações e visualização personalizada**Na lixeira já eram apresentados todos os itens que você tem permissão. Porém, o gerenciamento deles era confuso, pela falta de informações de cada item. Percebemos isso, e trouxemos para essa tela muitas informações relevantes, como: tamanho ocupado, data de exclusão, publicador e autor, entre outras informações. Você ainda pode verificar o tamanho total que os itens da lixeira estão ocupando. E o melhor de tudo: você pode configurar a visualização das colunas como desejar!

- [Novo layout](#)
- [Calcular armazenamento](#)
- [Gerenciar colunas](#)

![](/download/attachments/545647981/Tela%20Lixeira.png?version=2&modificationDate=1610995231943&api=v2)

![](/download/attachments/243636051/Calcular%20armazenamento.gif?version=1&modificationDate=1610994591957&api=v2)

![](/download/attachments/243636051/Gerenciar%20colunas.png?version=1&modificationDate=1612370603437&api=v2)

**Limpeza periódica**Seus usuários sempre removiam os arquivos e pastas da navegação de documentos e esqueciam de remover da lixeira, ocupando um espaço desnecessário no volume da empresa? Isso não será mais um problema! Criamos uma nova tarefa para que os itens da lixeira sejam removidos automaticamente, que pode ser agendada com a frequência desejada. 
Mas e se a pessoa se arrepender da exclusão do documento? Não se preocupe, pode ser informado um período mínimo em que os documentos devem permanecer na lixeira, para então serem excluídos definitivamente.

![](/download/attachments/545647981/Limpeza%20da%20lixeira.png?version=1&modificationDate=1610992048020&api=v2)

**A lixeira está cheia e você não encontrou um documento?**
Utilize as opções de busca que foram adicionadas! Os usuários agora conseguem localizar itens específicos na lixeira pelo seu código, pelo autor, pelos itens excluídos em determinado período, código da pasta pai, buscar por uma descrição, palavra/termo específico em seu conteúdo, enfim, são inúmeras as possibilidades!

![](/download/attachments/545647981/Filtrar%20registros%20lixeira.png?version=2&modificationDate=1610993116903&api=v2)

**Recurso adicional para quem administra a empresa**
Para melhorar ainda mais o gerenciamento, quem administra a empresa podem agora consultar os usuários que possuem itens particulares na lixeira. Mas calma lá! Administradores permanece sem acesso ao conteúdo do documento, apenas podem consultar o tamanho ocupado pelos itens e removê-los caso necessário. 

![](/download/attachments/545647981/Documentos%20dos%20usu%C3%A1rios.png?version=1&modificationDate=1610993673253&api=v2)

Ficou com alguma dúvida? Acompanhe o passo a passo na documentação de [Lixeira](/pages/viewpage.action?pageId=243636051).

**Homologamos o Microsoft® Office 2019**

Utiliza o **Office 2019**para elaboração dos seus documentos? Então aproveite a novidade! Na release Crystal Lake os recursos de Edição de Conteúdo (Webdav), Cópia Controlada de documentos e Atualização das Propriedades de Cópia Controlada estão homologados para essa versão do Office. 

**Saiba mais**

Consulte os detalhes desses recursos nas documentações de [Edição de conteúdo com Windows](/pages/viewpage.action?pageId=152802067) e [Impressão de cópia controlada](/pages/viewpage.action?pageId=152802071).

**Atualizamos o servidor de indexação**

Nesta release o **servidor de indexação (Solr) **foi atualizado para a **versão 8.7.0**. Essa atualização impacta diretamente no recurso de buscas da plataforma. Por esse motivo, para que a busca continue funcionando corretamente após a atualização, é necessário realizar a reindexação completa (com a opção de recriar os índices) no ambiente. Esse procedimento simples irá evitar que o recurso apresente instabilidades, como resultados duplicados ou documentos não encontrados. 

![](/download/attachments/545647981/solr.png?version=1&modificationDate=1613040602563&api=v2)

**Saiba mais**

Confira o procedimento detalhado na documentação de [Indexação](/pages/viewpage.action?pageId=234455757). Conheça mais sobre o recurso nas documentações de [Busca](/pages/viewpage.action?pageId=233762865) e [Busca por documentos](/pages/viewpage.action?pageId=233763874).

## Social

---

**Novo social Fluig mobile e TOTVS Fluig Plataforma – uma experiência totalmente modernizada!**

Em Dezembro lançamos o novo Social do Fluig mobile onde focamos principalmente em melhorias que oferecem uma experiência de uso moderna.

Com um visual totalmente renovado e *clean*, o novo social do Fluig mobile trouxe uma nova experiência em navegação com acesso facilitado às publicações, compartilhamentos de informações, interações com outros usuários, e principalmente, as publicações mais ricas com o novo limite de 10.000 caracteres por publicação!

A forma de fazer posts ficou mais prática pois fixamos a barra de publicações, dessa forma facilitamos a publicação de posts para que mesmo depois de ver bastante publicações e interações, essa ação ainda fique fácil e prática.

Além disso, também trouxemos o acesso rápido às suas comunidades mais acessadas e as definidas como favoritas que têm acesso privilegiado, pois são as primeiras a serem apresentadas, além da indicação que é uma comunidade favorita.

Assim como nas comunidades, as conexões também ganharam um acesso rápido, onde os usuários favoritos são privilegiados pois além da indicação de serem favoritos, são os primeiros exibidos no acesso rápido.

E uma das novidades mais pedidas foi Cancelar solicitações, que permite cancelar as solicitações pendente de aceite, que foram enviadas indevidamente ou que estão muito tempo esperando o aceite. Bastando acionar o botão Pendente e confirmar a ação. 

E atendendo a pedidos, adicionamos um dos recursos mais votados da central colaborativa, agora na timeline do aplicativo móvel será possível ver publicações com múltiplas imagens.

Se você também tem uma sugestão para nos enviar, fique a vontade! Mande sua sugestão para a nossa [Central colaborativa](https://centraldeatendimento.totvs.com/hc/contributions/posts), assim podemos evoluir cada vez mais juntos!

        Your browser does not support the HTML5 video element

Já o TOTVS Fluig Plataforma também foi contemplado com o novo Social. Aumentamos o limite de caracteres por publicação para 10.000 assim como no aplicativo, lançamos o recurso de Publicar em múltiplas comunidades, otimizando a divulgação de informações na empresa pois alcançará mais usuários de uma só vez.

Também modernizamos o layout da timeline, do card social do usuário, a barra de publicações, conexões e atualizamos o style-guide tornando a navegação na plataforma mais fluida e agradável.

E um dos recursos mais esperados no Social da plataforma: Cancelar solicitações. Tornando possível reverter uma solicitação indesejada ou que esteja muito tempo esperando o aceite bastando clicar no botão Cancelar solicitação e confirmar a ação. O recurso pode ser usado para cancelar solicitações de participação em comunidades e seguir usuários.

- [Novo limite de caracteres](#)
- [Múltiplas comunidades](#)
- [Cancelar solicitações](#)

![](/download/attachments/545647981/Fazer%20publica%C3%A7%C3%A3o%20nova%20timeline.gif?version=1&modificationDate=1612288400860&api=v2)

![](/download/attachments/545647981/m%C3%BAltiplas%20comunidades.png?version=1&modificationDate=1612288595337&api=v2)

![](/download/attachments/545647981/Cancelar%20solicita%C3%A7%C3%B5es.PNG?version=1&modificationDate=1612288684537&api=v2)

Confira mais detalhes no [Release notes Fluig mobile](https://tdn.totvs.com/display/fluig/Release+Notes+Fluig+mobile#ReleaseNotesFluigmobile-Melhorias) e nas documentações [Fluig mobile](https://tdn.totvs.com/display/HF/Fluig+mobile).

## WCM

---

**Cadastro de variáveis para o plugin jQuery e jQuery Migrate**

Nesta release queremos reforçar a melhoria que lançamos na release 1.7.0 Lake. 

Lançamos duas variáveis para o controle do plugin de migração jQuery.

Uma das variáveis será para habilitar ou desabilitar o plugin de migração e a outra para definir um modo entre desenvolvimento e produção.

Seu principal valor está nos modos de uso do plugin entre desenvolvimento e produção.

No modo Desenvolvimento são exibidas mensagens no *console* do navegador utilizado mostrando o que está errado no seu código e auxiliando no encontro de problemas, porém deixa o console "poluído" ou seja sobrecarregado.

Já no modo Produção as mensagens no *console* do navegador não são exibidas ocasionando uma limpeza na geração dos *logs,* porém uma mensagem é exibida avisando que o plugin está em uso e qual sua versão.

Ambas não vem cadastradas por padrão, sendo necessário que o administrador da empresa cadastre as mesmas caso julgue necessário.

Saiba mais

Para saber como cadastrá-las acesse [Como cadastrar variáveis do plugin de migração jQuery](https://tdn.totvs.com/x/I-Z5IQ).

## Documentações

---

- Relembre os recursos que foram liberados na plataforma [no mês de setembro](https://tdn.totvs.com/x/SGHoI#Atualiza%C3%A7%C3%B5es(1.7.0)-200915). Foram novas opções de configuração de **marca dágua**, e novas funções no **visualizador interno**, garantindo uma experiência ainda mais completa na **gestão dos documentos** da sua empresa. 
- A nova tela de permissões ficou incrível, né? Aproveite para configurar a **permissão em APIs, webservices e datasets**, que foram configurações lançadas ainda na 1.7.0. Confira mais detalhes no RN das atualizações [Essential 1.7.0-200629](https://tdn.totvs.com/x/SGHoI#Atualiza%C3%A7%C3%B5es(1.7.0)-200629) e [Essential 1.7.0-200714](https://tdn.totvs.com/x/SGHoI#Atualiza%C3%A7%C3%B5es(1.7.0)-200714).
- Utiliza a plataforma integrada ao **TOTVS Identity**? Então confira também as novidades desse sistema, acessando o [release notes do Identity](/pages/viewpage.action?pageId=269063445).

Uma imensa base de conhecimento ao seu dispor

Estamos constantemente evoluindo nossa base de conhecimento no **Zendesk**. Cada vez que você for abrir um chamado para o atendimento TOTVS Fluig, efetue a busca para ver se existe um artigo com dúvidas ou problemas semelhantes, que foram mapeados e resolvidos. As sugestões de artigo serão apresentadas no momento em que você indicar o assunto do chamado.

Dessa forma, você pode executar seu trabalho com mais agilidade. Acesse e explore [nossa base de conhecimento](https://centraldeatendimento.fluig.com/hc/pt-br/categories/360001513691).

## Correções

---

- Correção realizada na API "/ecm/dataset/synchronizeDataset" para que apresente o correto funcionamento.
- Correção realizada para que seja possível sincronizar corretamente o dataset no ambiente 1.7.0 utilizado.
- Correção realizada para que não haja lentidão ao acessar datasets com grande volume de dados em bancos Oracle.
- Ajuste realizado para que seja possível criar um dataset simples usando o serviço AppDS corretamente permitindo o cadastro do serviço.
- Correção de inconsistência para que ao realizar uma consulta de dataset utilizando o filtro MUST_NOT a busca seja feita corretamente.
- Ajuste realizado para que permita o cadastro de serviços para tokens extensos, onde foi aumentando o limite para 2000.
- Correção realizada para que seja possível exportar relatórios BIRT corretamente para o servidor Fluig.
- Correção realizada para que seja possível cadastrar um serviço do tipo SOAP corretamente.
- Correção realizada para que a importação de dados históricos seja processada corretamente no Analytics.
- Correção realizada permitindo o *deploy* de componentes com arquivos "js" que tenham menos de 3 caracteres.
- Ajuste realizado para que seja possível publicar um artigo contendo uma imagem de capa.
- Correção realizada para que ao acessar as rotinas para configurar o Gamification, as mesmas sejam carregadas corretamente.
- Ajuste realizado solucionando a demora para criar páginas na plataforma.
- Correção realizada para que as modais de visualização de formulários e artigos sejam exibidas corretamente permitindo que o conteúdo seja visualizado corretamente.
- Correção realizada para que usuários não pertencentes a uma comunidade definida como privada, não consiga visualizar o conteúdo que é postado na mesma.
- Correção realizada para que ao excluir uma pasta no ECM a mesma não seja mais apresentada na timeline da plataforma.
- Correção realizada para que o recurso "Eliminar solicitações" do item de menu Processos seja apresentado tornando a ação de clique visível novamente.
- Ajuste realizado para que seja possível selecionar e executar vídeos a partir do ECM dentro das widgets de Editor de Conteúdo.
- Correção realizada para que a widget Endereço web seja exibida corretamente, não causando mais a inconsistência de ser exibida em branco.
- Ajuste realizado na API de [Timeline](https://wcm.fluig.com/collaboration/swagger-ui/#/Timeline/getTimeline) para que as informações de artigo sejam apresentadas na timeline do aplicativo móvel.
- Criado [*endpoint*](https://api.fluig.com/latest/collaboration/swagger-ui/#/Posts/listPosts) para que seja possível a publicação em múltiplos lugares como na timeline e em mais de uma comunidade de uma só vez.
- Realizada correção na consulta de solicitações para que que os processos que não possuem State possam ser visualizados corretamente.
- Realizado ajuste para que não exista duplicação de colunas e respostas no momento da  exportação do forms para excel.
- Corrigida falha de segurança no recurso de transferência, para que o usuário que tenha acesso a API consiga informar os usuários no request e executar a ação mesmo não possuindo a permissão.
- Realizado ajuste na API REST que cria os registros de formulário, para que retorne corretamente as mensagens do validateForm.
- Realizada correção para que ao acessar uma solicitação diretamente pela URL e movimentar a atividade de um processo diretamente do navegador IE 11, os botões de ação sejam carregados automaticamente.
- Efetuados ajustes para exibir corretamente todos os documentos de uma pasta ao selecioná-la no momento de incluir um anexo a um processo
- Corrigida inconsistência no mecanismo de atribuição por campo de formulário utilizando dataset de colleague, cujo erro ocorria quando era informado no campo de descrição, um campo diferente de colleagueId.
- Corrigida inconsistência no navegador Internet Explorer 11 que não permitia carregar a consulta de solicitações de um processo.
- Corrigido o fluxo de informações entre um processo e um subprocesso para que as condições de uma atividade automática do processo principal sejam validadas corretamente utilizando dados do subprocesso.
- Realizada correção no substituto para que após ter incluído um usuário substituto e tentar refazer o processo a fim de alterá-lo, seja permitida a mudança de usuário para que o envio da solicitação ocorra normalmente.
- Corrigida a movimentação de solicitações em bloco quando há campos relacionados a um formulário do tipo pai-filho para que os campos sejam exibidos corretamente.
- Corrigido o acesso aos formulários criados pelo Forms beta, após a atualização para versão 1.6.5 da plataforma.

- Realizado um ajuste no aplicativo Approval para IOS, a fim de corrigir a visualização do histórico das solicitações.

- Ajustada a atividade de serviço, para que ao preencher um campo com *checkbox*, a atividade seja carregada corretamente.

- Corrigida inconsistência nos processos que contém formulário com texto rico, para que ao utilizar o texto rico como filtro, ele seja renderizado corretamente.
- Realizado ajuste no formulário de um processo no modelador web, para que seja vinculado e salvo corretamente dentro do processo.

- Realizado ajuste para que a resolução mínima do fluig , redimensione corretamente os resultados do filtro utilizado, mostrando todas as colunas.
- Corrigida inconsistência para que a movimentação de uma tarefa com um mecanismo de atribuição customizado ocorra corretamente.


<!-- anchors: AtualizaçãoCrystalLake(1.7.1)-Plataforma, AtualizaçãoCrystalLake(1.7.1)-Documentos, Lixeira, AtualizaçãoCrystalLake(1.7.1)-Social, sample, AtualizaçãoCrystalLake(1.7.1)-WCM, AtualizaçãoCrystalLake(1.7.1)-Documentações, AtualizaçãoCrystalLake(1.7.1)-Correções -->
