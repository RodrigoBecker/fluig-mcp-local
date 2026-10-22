---
title: "Atualização Crystal Mist (1.8.2)"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=838683488"
scraped_at: "2026-03-09T03:13:55.607Z"
depth: 2
anchors: 17
child_links: 46
---

# Atualização Crystal Mist (1.8.2)

![](/download/attachments/838683488/Crystal_Mist_1.8.2_1660x490.png?version=1&modificationDate=1716227409220&api=v2)

![](/download/attachments/838683488/espanhol.png?version=1&modificationDate=1713185775067&api=v2) ¿Habla Español? Haga [clic aquí](/pages/viewpage.action?pageId=852897830) para ver el Release Notes en Español.

![](/download/attachments/838683488/ingles.png?version=1&modificationDate=1713185774913&api=v2) Do you speak English? [Click here](/pages/viewpage.action?pageId=852898181) to view the Release Notes in English.

Release mínima para atualização da plataforma

O processo de atualização para a release 1.8.2 do Fluig exige que a plataforma esteja na release **1.7.1 ou superior**. Caso seu ambiente esteja em uma release inferior, é necessário realizar o processo de atualização para a 1.7.1 e, então, atualizar o Fluig para a 1.8.2.

Confira alguns *links* úteis:

- [Guia de instalação da plataforma](https://tdn.totvs.com/x/zAJbDw)
- [Guia de atualização da plataforma](https://tdn.totvs.com/x/CkwxE) 
- [Instalação e atualização](https://tdn.totvs.com/x/NYSbC)

Confira abaixo as novidades na atualização 1.8.2 do TOTVS Fluig Plataforma:

## Segurança nos mínimos detalhes

---

Estamos atentos às evoluções tecnológicas que nos cercam e sempre comprometidos a proporcionar o mais alto nível de segurança, proteção e desempenho à plataforma TOTVS Fluig, visando a tranquilidade dos nossos clientes na utilização dos recursos no dia a dia, bem como no tráfego de informações das suas empresas.

Por isso, atuamos fortemente na prevenção de ataques cibernéticos e na exploração de vulnerabilidades, implementando códigos de proteção e atualizando bibliotecas e serviços.

Confira alguns recursos que receberam um tratamento especial de segurança e prevenção:

- Empresas;
- Permissões;
- Usuários, Grupos e Papéis;
- Agendador de tarefas;
- Notificações;
- Documentos;
- Processos;
- Comunidades;
- Recursos sociais.

Além disso, realizamos diversas correções e implementações de segurança em APIs e interfaces da plataforma, evitando assim a manipulação indevida de dados.

A proteção é uma prioridade para nós e estamos constantemente aprimorando nossa segurança para garantir que seus dados estejam sempre protegidos.

Atualize sua plataforma e garanta ainda mais segurança para a sua empresa!

## Arquitetura

---

#### Servidor de indexação atualizado

Hoje em dia tudo muda constantemente à nossa volta, não é mesmo? As tecnologias principalmente!

E como estamos sempre preocupados em manter nossa plataforma compatível com o que há de mais moderno no mercado, atualizamos o **Servidor de indexação (Solr)** – que é responsável pelos recursos de busca – para a **versão 9.4.1**.

Essa atualização também visa a otimização dos índices para agilizar e tornar a busca mais eficiente.

Importante!

Após aplicar essa atualização no seu ambiente, é necessário fazer uma reindexação completa com a recriação do índice. Esse procedimento é imprescindível para evitar instabilidades na busca, como resultados duplicados ou não encontrados.

**COMO FAZER?**→ Para fazer a reindexação completa, acesse o **Painel de controle** **→** **Parâmetros técnicos** **→** **Indexação**, assinale as opções **Recriar o índice** e **Conteúdo** – como forma de indexação de documentos – e inicie o processo. Informações mais detalhadas podem ser obtidas em [Indexação](/pages/viewpage.action?pageId=234455757).

**NOTA:**→ Se você utiliza servidor de indexação **dedicado** ou em **alta disponibilidade**, siga o procedimento de [atualização](https://tdn.totvs.com/pages/viewpage.action?pageId=271666186#Guiadeatualiza%C3%A7%C3%A3odaplataforma-Atualiza%C3%A7%C3%A3ocombalanceamentodecarga,altadisponibilidadeetoler%C3%A2ncia%C3%A0falha-Cluster) para esses cenários antes de fazer a indexação completa. Informações mais detalhadas podem ser obtidas em [Servidor de indexação dedicado](/pages/viewpage.action?pageId=269425760) ou [Servidor de indexação em alta disponibilidade](/pages/viewpage.action?pageId=257623206).

Dica!

Acesse as [Boas práticas de segurança para o seu ambiente](/pages/viewpage.action?pageId=611010249) e saiba como deixar o servidor de indexação mais seguro.

Conheça mais sobre os recursos de busca da plataforma em [Busca](/pages/viewpage.action?pageId=233762865) e [Busca de documentos](/pages/viewpage.action?pageId=233763874).

## BPM

---

#### Habilitado campo para definir usuário substituto

**Essa melhoria foi uma sugestão enviada pela Central colaborativa!**

Anteriormente, apenas o usuário administrador podia realizar a alteração no campo "**Usuário que será substituído**". Agora, os usuários que receberam a devida permissão no Painel de Controle também poderão designar um substituto.

Esse novo recurso simplifica a gestão de substituições, garantindo que as tarefas e responsabilidades sejam transferidas de forma ágil e eficiente, sem interrupções no fluxo de trabalho. Com essa melhoria, a administração de substituições se torna mais intuitiva, facilitando a colaboração e o suporte entre os membros da equipe.

Para mais detalhes, acesse a documentação em [Substitutos](https://tdn.totvs.com/x/o4H5DQ).

Acesse a [Central colaborativa](https://centraldeatendimento.totvs.com/hc/pt-br/community/topics)**,**confira as sugestões e compartilhe suas ideias por lá também! ![(smile)](/s/5bn9pn/8804/xgjkrn/_/images/icons/emoticons/smile.svg)

- [Adicionar substituto](#)

![](/download/attachments/838683488/substitutos..png?version=1&modificationDate=1721221721970&api=v2)

#### Novo resumo da Central de Tarefas

Dê mais eficiência à gestão ativa dos processos da sua empresa. O resumo da Central de Tarefas do TOTVS Fluig foi reformulado, com gráficos intuitivos, que centralizam dados completos e detalhados de atividades e tarefas, incluindo informações de Solicitações Requisitadas por você e sob sua gerência, Tarefas no Prazo e em Atraso, Tarefas por Grupo e por Papel, Tarefas em Consenso, entre outros.

Assim, você tem uma visão mais completa e assertiva para a sua tomada de decisões. Acesse as documentações de [Central de tarefas - Resumo](https://tdn.totvs.com/x/LvLuDQ) e [Widgets - Gráfico de tarefas](https://tdn.totvs.com/pages/viewpage.action?pageId=234455977#Plataforma%E2%9D%99Widgets-Gr%C3%A1ficosdeTarefas).

- [Central de Tarefas](#)
- [Widget Gráfico de tarefas](#)
- [Modo Detalhado](#)
- [Modo Resumido](#)

![](/download/attachments/838683488/nova%20central%20de%20tarefas..png?version=1&modificationDate=1717619086910&api=v2)

![](/download/attachments/838683488/widget%20grafico%20de%20tarefas.png?version=1&modificationDate=1714676894547&api=v2)

![](/download/attachments/838683488/modo%20detalhado.png?version=1&modificationDate=1717619108207&api=v2)

![](/download/attachments/838683488/modo%20resumido.png?version=1&modificationDate=1717619345730&api=v2)

#### Recurso extra para segurança nas APIs

Pensando em garantir maior segurança nas ações realizadas dentro da plataforma, reforçamos o conceito da Personificação, possibilitando assim uma maior confiabilidade durante o manuseio de informações de outros usuários. 

Acesse a documentação completa de [Personificação](https://tdn.totvs.com/x/85TUIQ)e fique por dentro de todas as novidades.

## Portais

---

#### As cores do TOTVS Fluig Plataforma foram atualizadas!

Nesta atualização, temos uma nova cor padrão na plataforma. A partir de agora, a cor azul está aplicada aos links, ícones do menu lateral e em todo o tema. Tanto o tema Clássico, o Snowflake e o novo tema responsivo, lançado na atualização [Mist-1.8.0](https://tdn.totvs.com/pages/viewpage.action?pageId=680958031#Atualiza%C3%A7%C3%A3oMist(1.8)-Portais) foram atualizados.

Mas fique tranquilo! Você pode personalizar seu tema conforme a necessidade visual da sua empresa. 

A tela de login também foi atualizada para refletir a nova cor, inclusive no botão Acessar. Além disso, a logo também recebeu uma atualização.

- [Nova cor TOTVS Fluig](#)

![](/download/attachments/838683488/Nova%20cor%20plataforma.png?version=1&modificationDate=1716399162970&api=v2)

**Itens da Store tornou-se Store!**

O recurso que você conhecia como Itens da Store passou a se chamar Store - a página de soluções do TOTVS Fluig Plataforma que está mais moderna e intuitiva. 

Posicionamos o campo de busca na parte superior da página, proporcionando maior destaque e praticidade ao buscar uma solução. 

Novos filtros foram criados para auxiliar a encontrar as soluções com mais eficácia.

- Desenvolvedor;
- Categorias;
- Tipo.

Organizamos as categorias dividindo-as por:

- Novidades;
- Todas as soluções;
- Flows.

Dessa forma o uso de cada categoria se torna mais prática, permitindo que você encontre as soluções específicas de cada categoria com rapidez.

Confira mais detalhes do lançamento em [Atualizações (1.8.1)](https://tdn.totvs.com/pages/viewpage.action?pageId=761497686#Atualiza%C3%A7%C3%B5es(1.8.1)-230912) e como usar em [Plataforma | Store](https://tdn.totvs.com/x/frOcEw).

- [Store Fluig](#)

![](/download/attachments/838683488/GIF%20Store%20PT.gif?version=1&modificationDate=1719949886927&api=v2)

## Mobile

---

**Novo ECM - Seu parceiro na gestão de documentos mais moderno do que nunca!**

Reestruturamos toda a navegação de documentos trazendo mais organização, modernização e agilidade ao acessar seus documentos pelo My Fluig.

**Acesso rápido a todos os documentos**

A nova gestão de documentos do My Fluig permite que você encontre documentos importantes para o seu dia a dia rapidamente. Os resultados são exibidos de maneira organizada e agora os documentos são identificados através dos ícones das extensões. Além disso possuem também uma pré-visualização nos casos de imagens de vídeos.

**Crie pastas com agilidade**

Crie pastas com 2 toques. Toque no botão **Criar pasta**, crie um nome e toque em **Confirmar**. Pronto, sua pasta foi criada com pouquíssimos toques.

**Visualize documentos**

Modernizamos a visualização dos documentos e agora você pode visualizar documentos, documentos externos, artigos e imagens de forma prática e além disso, é possível ampliar ou reduzir para ver todos os detalhes com clareza.

**Demais ações em documentos aprimoradas**

- Compartilhe e salve em seu dispositivo;
- Comente e apoie facilmente;
- Defina como favorito;
- Renomeie e exclua rapidamente.

- [Novo ECM My Fluig](#)

Saiba mais

Veja todos os detalhes desta novidade em [My Fluig | O que há de novo?](https://tdn.totvs.com/pages/viewpage.action?pageId=381049863#MyFluig%7COqueh%C3%A1denovo?-Mar%C3%A7o/24)

## WCM

---

**Bibliotecas atualizadas**

Com a iniciativa de mantermos nossas bibliotecas sempre atualizadas, nessa release atualizamos algumas bibliotecas com o objetivo de garantir mais segurança na plataforma.

## Correções

---

- Correção realizada para que quando uma atividade estiver em paralelo essa informação também reflita no Analytics.
- Realizada correção para que usuários com estado bloqueado, não consigam iniciar solicitações em um processo.
- Realizada correção para corrigir erro ao definir os grupos de segurança do arquivo, para que ao alterar a segurança da pasta, os usuários e grupos foram incluídos sem nenhuma intercorrência.
- Realizado ajuste para implementar a validação, a fim de identificar o usuário autenticado na plataforma ou o usuário administrador, fazendo com que o envio da URL do documento via API ocorra corretamente ao utilizar o fluxo automático.
- Realizada correção para que tamanho do índice seja respeitado no *Oracle*, limitado a 30 caracteres.
- Realizada correção na configuração das atividades, para que não seja possível inserir _tags _e alterar a cor da fonte.
- Realizada correção ao executar o importador de dados históricos, para que os campos com valores fixo em formato de texto (String) possam ser lidos pelo importador e enviados ao analytics corretamente.
- Realizada correção para que os campos dos formulários sejam listados corretamente na aba "Descrição Principal dos Registros de Formulário " nas propriedades do documento.
- Realizado ajuste para que seja possível incluir a permissão na API de resultados do processo.
- Realizada correção no menu de Descrição principal dos registros de um formulário, para que a descrição inserida seja incluída corretamente.

- Realizada correção para que seja possível alterar o critério de aprovação da pasta pai, sem que fosse exibida a mensagem de documento pendente.

- Realizada correção na exportação de um formulário para o Fluig, informando a pasta "Meus Documentos" como destino, para que seja apresentada uma mensagem informativa ao usuário de que não é possível adicionar formulário em pasta privada.
- Realizada correção para que o botão de "Enviar imagem" seja mostrado somente quando estiver dentro de subpastas.
- Realizado ajuste para que a criação de índices na tabela documento, diminua o alto consumo na CPU.
- Realizada correção para que em situações onde a geração da lista mestra gere erro, a mensagem seja clara ao usuário, informando o motivo de não ter sido gerada.
- Realizada correção no componente de busca de documentos, para que as pastas configuradas no desenvolvimento personalizado sejam mostradas corretamente.
- Realizada correção para que o checkbox de impressora seja removido das opções de "Configuração de relatório", onde agora é possível realizar a consulta sem apresentar o erro de impressora.
- Realizada correção nas regras de formulário, para que ao configurar a ação "Validar" e voltar para a tela das regras já cadastradas, elas sejam mantidas corretamente.
- Realizada correção para que ao clicar em qualquer objeto dentro de um processo que não tenha ligação com regras de formulário, não seja apresentado o modal com requisições desnecessárias e que seja possível visualizar as regras de formulário mesmo que o processo não tenha sido salvo.
- Realizada correção para que ao publicar um anexo, o usuário consiga pesquisar pelo código e nome em todas as pastas e sub-pastas em que ele tenha permissão.
- Realizadas correções no interpretador de código responsável pelos logs adicionais da central de diagnósticos.
- Realizada correção na visualização de documentos, para que ao gerar uma nova versão, seja possível visualizá-lo corretamente.
- Corrigido o filtro por papel no aplicativo Approval para que as solicitações sejam filtradas e exibidas corretamente de acordo com o papel selecionado pelo usuário.
- Realizada correção no agendador de tarefas para sanar problemas de travamento na fila.
- Realizada correção para que o campo de usuários não seja mais apresentado ao enviar para uma atividade automática. E caso possua um mecanismo que necessite informar um usuário, o mesmo será apresentado corretamente.
- Realizada correção para sanar a vulnerabilidade no pacote LMS.
- Realizado ajuste no gráfico de tarefas a concluir da central de tarefas, para que o quadro que mostra as tarefas, não apresente nenhuma inconsistência ao mostrar o gráfico em tela.
- Realizada correção no Fluig para que ao acessar a solicitação, os campos sejam exibidos com os valores e a movimentação seja efetuada com sucesso.
- Realizada correção para que as solicitações não sejam apresentadas de forma duplicada na Central de Tarefas.
- Corrigidas as inconsistências que não permitiam utilizar a navegação de documentos.
- Realizada correção para na aba campos de filtro, todos os tipos sejam exibidos no editor web de processos, dentro do Fluig plataforma.
- Realizada correção para que ao abrir um documento do tipo PDF protegido com senha, a modal seja apresentada corretamente.
- Realizada correção para remover automaticamente os arquivos nas pastas temporárias geradas pelo Fluig no sistema operacional.
- Realizada correção na Lista Mestra, para que o histórico de aprovação em subpastas seja apresentado corretamente.
- Realizada correção no formulário, para que o botão de "enviar" seja bloqueando enquanto o formulário estiver sendo carregado.
- Realizado ajuste para que ao alterar o "código para serviço de dados" pré-definido, mostre corretamente o alterado na busca da página de Regras do Formulário.
- Realizado ajuste para que ao adicionar ou renomear um arquivo com tags <> no nome, o Fluig não imterprete como HTML.
- Realizada correção no campo zoom, para que permita consultas com maior número de caracteres.
- Realizada correção para que sejam exibidos dois cards de processos por vez na inicialização de solicitações.
- Realizado ajuste para que o cash seja limpo após o campo selecionar usuários e grupos, sendo necessário alterar o próprio componente do Style Guide.
- Realizada correção para que o botão de "Iniciar Nova Solicitação" fique posicionado corretamente, independente da resolução.
- Realizada correção para sanar lentidão na página de configuração de processos, para que seja feita uma chamada do _alert _para cada API.
- Realizada correção em Meus Documentos, para que ao acessar uma pasta, seja possível realizar um drag and drop de documentos.
- Realizado ajuste na aba "Segurança" das propriedades de documentos e pastas, permitindo realizar a inserção de novos usuários.
- Atualizada correção em documentos, para que ao copiar e colar uma pasta com arquivo que possuía segurança herdada, não fique em carregamento e impeça a inclusão da pasta.
- Realizada correção em Documentos, para que na tela de aprovação seja possível inserir uma descrição corretamente.
- Realizada correção para que a impressão de uma cópia controlada não apresente nenhuma inconsistência.
- Realizada correção para que ao adicionar o componente de anotação na edição do processo WEB e salvar, as informações sejam gravadas corretamente.
- Correção realizada no recurso de impressão de cópia controlada.
- Realizada correção para que ao visualizar o histórico de aprovação de outras versões/revisões de um documento, os aprovadores sejam exibidos corretamente.
- Corrigida inconsistência nos eventos de serviço, no parâmetro getActualThread, para que o valor atual da thread seja mostrado de forma correta.
- Realizada correção no TOTVS Fluig, para que ao adicionar um documento relacionado, seja possível selecionar um registro de formulário conforme esperado.
- Ajuste realizado para movimentar corretamente a atividade de um processo que possua gateway após a atividade de início. 
- Realizada correção para que ao adicionar um complemento em um arquivo PDF e salvar, as alterações sejam aplicadas corretamente.
- Realizada melhoria para aumentar a segurança com relação aos conteúdos XSS repassados via URL no Fluig.
- Realizada correção nos Web Services (WS): createDocument, createSimpleDocument, createSimpleDocumentPrivate, e também com a API v1 createDocument e agora ao informar um caminho no nome do arquivo, uma mensagem informando que o nome está incorreto será apresentada.
- Realizada correção no formulário, para que aceite mais caracteres no campo.
- Realizada correção para que ao utilizar a API createPrivateDocument e incluir o path do arquivo, seja apresentado um informativo ao usuário para que seja utilizado somente o nome do arquivo.
- Realizado ajuste na visualização de diagramas, não permitindo visualizar sem estar autenticado.
- Realizada correção para garantir maior segurança, onde ao ao tentar adicionar uma tag de injeção XSS nas propriedades do processo, a tag não seja executada.
- Realizada correção no método updateDescription para alterar um documento sem as permissões adequadas, onde é exibida uma mensagem ao usuário, informando que ele não possui as permissões necessárias.
- Realizada correção para que o Fluig permita buscar valores separados por espaço em campos dos formulários.
- Realizada correção no campo de busca geral do Fluig, para que ao colar o conteúdo de uma tabela do Excel, a ação de colar não seja executada, apenas o texto seja colado na função de busca.
- Realizada correção para que ao editar um registro de formulário de uma solicitação já finalizada utilizando o updateCardData, seja apresentada uma mensagem informando que "O formulário está associado a um processo finalizado e não pode ser editado".
- Realizada correção para que ao executar o job de compactar solicitações finalizadas, caso todas as versões do formulário estiverem inativadas, uma mensagem será registrada no log.

- Realizada correção para que o evento _beforetasksave _execute normalmente na transferência da solicitação.

- Realizada correção nos aplicativos My Approval e My Fluig, para que ao acessar a central de tarefas de um usuário substituído, somente as tarefas relacionadas às quais estou designado como substituto sejam exibidas.
- Realizado ajuste para que seja possível incluir um link para um documento da plataforma nas instruções do processo e atividades utilizando [WD:coddoc].
- Realizada correção para que ao tentar imprimir um arquivo que não suporta impressão, o sistema apresente o erro informativo ao usuário, indicando que o arquivo não é suportado para impressão.
- Realizada correção em Meus documentos, para que não apresente erro ao tentar criar novas pastas.
- Realizada correção no Fluig para que as todas as tentativas de execução da atividade de serviço sejam listadas no histórico.
- Realizado ajustar de responsividade da página Solicitações em resoluções como tablet e mobile.
- Realizada correção para que ao alterar a cor utilizada na configuração do documento, a marca d'água seja apresentada corretamente ao fazer o download do documento.
- Realizada correção no componente documentview, para sanar inconsistência na visualização e permitir que apresente agora o registro de formulário para visualização.
- Realizada correção no Style Guide que permite o use de tabelas e tags complementares dentro do componente popover.
- Realizada correção no Fluig para que tentar realizar a movimentação de uma tarefa em mobile, não seja apresentada nenhuma inconsistência.
- Realizada correção para que ao habilitar a impressão de cópia controlada para um documento que possui variáveis nas informações, ele seja executado e o download efetuado corretamente.
- Ajuste realizado para corrigir a consulta de um processo no monitoramento de tarefas, permitindo que ele seja exibido conforme esperado.
- Realizada correção para que a alteração do mecanismo de atribuição seja aplicada corretamente após a atualização do processo. E que ao importar o XML via Web Service, a alteração ocorra corretamente.
- Realizada correção no GED, para que seja possível realizar upload de um vídeo com mais de 20 minutos.
- Realizada correção ao adicionar um grupo nas permissões do processo.
- Realizada correção na impressão de cópia controlada de documentos enviados pelo cliente, para que sejam impressos corretamente.
- Corrigida a utilização de mais de um gateway no processo, para que o histórico apresente as informações corretamente.
- Realizado ajuste na configuração de um processo via Studio, para que seja possível configurar a atividade inicial com mecanismos por associação.
- Realizada correção na versão Silver Mist do Fluig, para que a lista mestra seja gerada corretamente.
- Realizado ajuste na mensagem de erro que gerava um NullPointerException (NPE) ao movimentar uma solicitação e informar o thread sequence incorreto.
- Realizada correção para que ao iniciar uma solicitação com o mesmo usuário e acessar a central de tarefas, apenas uma tarefa seja exibida.
- Realizada correção na central de diagnósticos, para que o uso de filtros personalizados tragam as informações corretamente.
- Corrigido acesso a tela de configuração de processos para exibir corretamente a listagem de processos.
- Realizada correção na central de tarefas, para que data de atualização dos documentos sejam exibidas corretamente.
- Realizada correção na movimentação de uma solicitação em consenso.
- Realizada correção na exclusão de fichários ou fichas de formulário, para que quando filtrado por data, nome ou código, sejam mostrados corretamente.
- Corrigida visualização dos aprovadores quando um documento está em edição, para que o addon esteja sendo utilizado.
- Realizada correção para que ao utilizar o serviço copyDocumentToUploadArea e informar o código da pasta nos parâmetros, seja apresentado o path do arquivo.
- Corrigida a exibição de widgets na Central de Diagnóstico.
- Realizada correção para impedir o usuário de alterar um documento o qual não possui permissão.
- Corrigido acesso do usuário substituto a central de tarefas, para que as movimentações nas tarefas sob minha gerência sejam realizadas corretamente.
- Realizada melhoria na utilização do Web Service _copyDocumentToUploadArea _para copiar um arquivo que não está no volume, sendo apresentada corretamente a mensagem no log informando que a pasta está vazia e nenhum documento será copiado.
- Realizado ajuste para que o histórico de uma solicitação, utilize o cash corretamente.
- Realizada correção ao copiar estrutura de pastas com arquivos com nomes contendo muitos caracteres.
- Realizada correção para que após a atualização para versão 1.8.1 do Fluig, o LMS seja exibido corretamente.
- Corrigida inconsistência onde executar a indexação com 4 milhões de registros, o processo aconteça corretamente, sendo processados 5 mil registros por vez.
- Realizada atualização no plugin do Eclipse para a versão 1.8.2, para que a importação e exportação de processos funcione corretamente.
- Corrigida inconsistência ao editar um processo BPMN 2.0 pelo editor do Fluig na web, para que seja possível editar e visualizar de forma correta.
- Realizada correção para que ao realizar o cancelamento de uma solicitação, a data de cancelamento seja apresentada corretamente.
- Realizada correção no formulário para que ao clicar em enviar, ele seja bloqueado para edição sempre que o side bar do botão enviar estiver aberto.
- Aplicada consulta de permissões de usuário para um documento específico.
- Realizada correção na busca por um processo na tela de consulta de solicitações.
- Realizado ajuste na tela de consulta de solicitações ao alterar o idioma.
- Aplicada alteração de decisão em tarefa de consenso ao acessar com usuário substituto.
- Ajuste realizado para que a API collaboration/api/v3/posts aceite todos os formatos de arquivo em anexo ao realizar uma publicação.
- Realizada correção para que o conteúdo de notícias sejam apresentados na home quando utilizado a widget Novidades e Notícias.
- Corrigido o componente Zoom para que os campos de busca dos formulários de comunidades exibam os dados corretamente.
- Correção realizada para que seja possível adicionar widgets no layout Comunicativo com usuário comum que possua permissão para editar a página.
- Correção realizada para que ao realizar uma publicação a plataforma busque outras comunidades corretamente para replicar a publicação.
- Correção realizada para que seja possível criar um artigo corretamente em uma comunidade, em que a geração de thumbnail esteja habilitada no cadastro da empresa.
- Correção realizada para que o conteúdo da aba da comunidade seja apresentado corretamente ao selecionar um arquivo para a publicação.
- Correção realizada para que apenas usuários com papel de administrador consigam realizar chamadas através da API de consulta de serviços.
- Correção realizada para que os campos de usuário e senha sejam apresentados corretamente no plugin Eclipse ao cadastrar serviço SOAP.
- Correção realizada para que o layout Comunicativo receba as corretas configurações de permissão nas widgets.
- Correção realizada para que seja possível sincronizar um dataset offline.
- Incluído status "Finalizado" ao utilizar o componente de upload do style guide Fluig e realizado ajuste na área de upload para que fique disponível para inclusão de novos arquivos.
- Correção realizada nos temas para que ao criar páginas ou comunidades, as mesmas sejam abertas corretamente.
- Correção realizada para que as widgets sejam exibidas quando o novo tema está sendo utilizado.
- Correção realizada para que seja possível localizar usuários, grupos ou papéis ao criar uma página.
- Correção realizada para que as permissões sejam apresentadas ao utilizar o layout comunicativo para criar páginas.
- Correção realizada para que seja possível acessar as propriedades do registro de formulário com anexo quando utilizado o kit intranet.
- Realizada correção no campo zoom, para que após limpar o campo, seja possível incluir novos registros.
- Ajuste realizado para que seja possível adicionar vídeos no formato MP4 corretamente.
- Correção realizada para que ao utilizar caracteres especiais com codificação diferente em imagens, os mesmos sejam normalizados com o mesma codificação aceita pela plataforma.
- Ajuste realizado para que ao editar um artigo e publica-lo em comunidade, o histórico de visualizações e data de criação sejam mantidos corretamente.
- Correção foi realizada para garantir o funcionamento correto das páginas que utilizam o widget de busca.
- Realizada correções para garantir que o componente Treeview mantenha seu comportamento esperado quando utilizado com drag and drop. 
- Ajuste realizado para que a atualização entre versões do Fluig Plataforma ocorra corretamente não ocasionando inconsistências nessa atualização.
- Realizada atualização das opções de cópia controlada no arquivo Word.
- Realizado ajuste para que imagens PNG sejam exibidas como thumbnail corretamente.
- Realizado ajuste em dataset sincronizado para que ocorra integração de usuário corretamente.
- Realizada correção para que datasets simples consumam corretamente webservice.
- Corrigida a impressão de cópia controlada de um documento contendo assinatura digital.
- Realizada correção na paginação da Central de Diagnósticos.
- Realizado ajuste no cadastro de locais, para que o campo de busca não seja mostrado.
- Realizada correção para que, ao atualizar o Fluig para a nova versão, o menu da Store seja apresentado corretamente e todos os usuários consigam acessar.
- Realizado ajuste para que as páginas sejam carregadas corretamente.
- Ajuste realizado para que o título da widget Editor de conteúdo seja exibido corretamente.
- Realizado ajuste para que a widget Editor de conteúdo venha desabilitada por padrão nas novas instalações do aplicativo My Fluig.
- Realizado ajuste para que seja possível extrair os dados de estatísticas de uso do Fluig corretamente.
- Realizada atualização no web service saveAndSendTaskByReplacement para movimentações da solicitação como substituto, para que informações sejam gravadas corretamente no histórico do processo.
- Realizada correção na validação e execução do enablefields em processos e formulários.
- Realizada correção ao utilizar a cópia controlada, para que o documento seja exibido corretamente.
- Corrigido o envio de notificações do Fluig, para que seja enviada apenas uma notificação push nos aplicativos My Fluig e My Approval.
- Realizada correção para que o relatório de cotas considere a pasta 'Meus Documentos' após configurado.
- Realizada correção no Fluig para que seja registrado o nome do usuário que fez alterações em uma solicitação.


<!-- anchors: AtualizaçãoCrystalMist(1.8.2)-Segurançanosmínimosdetalhes, AtualizaçãoCrystalMist(1.8.2)-Arquitetura, AtualizaçãoCrystalMist(1.8.2)-Servidordeindexaçãoatualizado, AtualizaçãoCrystalMist(1.8.2)-BPM, AtualizaçãoCrystalMist(1.8.2)-Habilitadocampoparadefinirusuáriosubstituto, 1, AtualizaçãoCrystalMist(1.8.2)-NovoresumodaCentraldeTarefas, detalhadoeresumido, AtualizaçãoCrystalMist(1.8.2)-RecursoextraparasegurançanasAPIs, AtualizaçãoCrystalMist(1.8.2)-Portais, AtualizaçãoCrystalMist(1.8.2)-AscoresdoTOTVSFluigPlataformaforamatualizadas!, novacorplataforma, StoreFluig, AtualizaçãoCrystalMist(1.8.2)-Mobile, sample, AtualizaçãoCrystalMist(1.8.2)-WCM, AtualizaçãoCrystalMist(1.8.2)-Correções -->
