---
title: "Atualizações (1.8.1)"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=761497686#Atualiza%C3%A7%C3%B5es(1.8.1)-241010"
scraped_at: "2026-03-09T05:11:06.265Z"
depth: 3
anchors: 207
child_links: 98
---

# Atualizações (1.8.1)

## 

## Ciclo de atualização

Maior destaque para as atualizações evolutivas (**Update **). 

As liberações mais relevantes são identificadas por um selo especial:

![](/download/attachments/761497686/essential.png?version=1&modificationDate=1684244483897&api=v2) **Essential:** incluem correções e pequenas evoluções da plataforma.

![](/download/attachments/761497686/mandatory.png?version=1&modificationDate=1684244483687&api=v2) **Mandatory:**** **atualizações que possuem correções críticas emergenciais.

Veja todos os detalhes em: [Atualização da plataforma](https://tdn.totvs.com/x/2xVbB).

**oculto**

## 

##  xx de Dezembro de 2025

---

## Correções

Chamado

- Descrição

## 

## XX de Dezembro de 2024

---

## Melhoria

**FSLT-16159**

### Integração TOTVS Fluig x TOTVS iPaaS com apenas um clique!

Sim, é isso mesmo! Agora, é possível ativar a integração entre o TOTVS Fluig e o [TOTVS iPaaS](https://tdn.totvs.com/x/hypULg) na aba **Autenticação** das configurações de cada [empresa](/pages/viewpage.action?pageId=235597350), no **Painel de controle** do usuário **WCMADMIN**.

Ao ativar a integração, o iPaaS reconhece o Fluig como compatível, permitindo utilizar recursos integrados entre os dois produtos a partir de desenvolvimentos sobre a plataforma que precisem dessa integração, por exemplo. Bacana, né?

Importante!

É necessário que o TOTVS Identity esteja habilitado e [configurado](https://tdn.totvs.com/x/Tx1bB) na empresa para que a integração entre o TOTVS iPaaS e o TOTVS Fluig seja estabelecida.

![](/download/attachments/761497686/Aba%20Autentica%C3%A7%C3%A3o%20171.png?version=2&modificationDate=1733140929940&api=v2)

## 

## 24 de Novembro de 2025

---

## Correções

- Implementada a evolução da API para permitir a alteração da propriedade **downloadEnabled** em documentos, garantindo o ajuste dessa configuração. [Clique aqui](https://api.fluig.com/latest/content-management/swagger-ui/#/Documents/update) e confira os detalhes na API.

## 

##  29 de Outubro de 2025

---

### Atualização recomendada

Foi identificada uma vulnerabilidade relacionada a documentos na plataforma; no entanto, o incidente já foi **solucionado**, assegurando seu desempenho e segurança. A correção está disponível no pacote liberado em** 29/10/2025**.
Recomendamos manter sua plataforma sempre atualizada para assegurar uma experiência contínua e segura.

## 

## 22 de Abril de 2025

---

## Correções

- Realizado ajuste para que ao selecionar várias colunas no filtro personalizado, as informações da central de tarefas sejam carregadas corretamente.

## 

## 18 de Março de 2025

---

## Correções

- Realizada correção para que ao abrir um modal, não exiba a inconsistência no console.

## 

## 11 de Fevereiro de 2025

---

## Correções

- Realizado ajuste para que seja possível editar uma comunidade corretamente.
- Feitos ajustes contra a exploração de vulnerabilidades no envio de convite de usuários.
- Realizado ajuste para que o atributo style="display:none" oculte os valores corretamente no My Fluig.
- Realizado ajuste para que seja possível arquivar páginas corretamente. 

## 

## 21 de Janeiro de 2025

---

## Correções

- Realizada correção na ordenação do serviço responsável por retornar as páginas no My Fluig.

## 

## 14 de Janeiro de 2025

---

## Correções

- Realizada correção para que seja possível selecionar um usuário corretamente ao utilizar mecanismo de atribuição por usuários.
- Correção realizada para que a categoria Preferências do usuário seja apresentada nas configurações de permissões.

## 

## 17 de Dezembro de 2024

---

## Correções

- Realizada correção para que seja possível selecionar um usuário corretamente ao utilizar mecanismo de atribuição por usuários. 

## 

## 10 de Dezembro de 2024

---

## Correções

- Realizado ajuste para que seja possível instalar e iniciar corretamente o Fluig Plataforma utilizando banco de dados [SQL Server](https://tdn.totvs.com/x/ywVbDw).
- Realizado ajuste para que seja possível editar um serviço criado via painel de controle.
- Realizado ajuste para que seja possível consultar datasets corretamente via Eclipse. 

## 

##  03 de Dezembro de 2024

---

## Correções

- Feitos ajustes na validação de caracteres permitidos e não permitidos no código de [grupos](/pages/viewpage.action?pageId=234455392).
- Realizado ajuste para que seja possível exportar uma widget corretamente via Eclipse.
- Removida a opção "Deseja ativar a integração entre o Fluig No-code e Fluig Plataforma?" da aba **Autenticação** das configurações de [empresas](/pages/viewpage.action?pageId=235597350) por conta da descontinuação do [TOTVS Fluig No-Code](https://centraldeatendimento.totvs.com/hc/pt-br/articles/22927860613911-Descontinua%C3%A7%C3%A3o-TOTVS-Fluig-No-Code).
- Implementado [vinculo de datasets a componentes](https://tdn.totvs.com/x/XQ9PNQ).

## 

## 19 de Novembro de 2024

---

## Correções

- Ajustado o recurso Eventos de auditoria para exibir uma mensagem informando quando não há licença para utilização e as instruções sobre como adquirir.
- Feitos ajustes para que, ao habilitar o protocolo HTTPS na plataforma, sejam utilizadas automaticamente chaves de segurança mais atuais, aumentando a proteção contra a exploração de vulnerabilidades.
- Efetuada correção para que seja possível movimentar uma solicitação pelo aplicativo My Fluig quando ela é mantida aberta por algum tempo, sem que a sessão seja perdida.

## 

##  15 de Outubro de 2024 

---

## Melhoria

**Novos widgets para facilitar sua rotina**

Com o objetivo de melhorar a experiência do usuário e otimizar o acesso às informações essenciais, apresentamos três novos widgets que prometem transformar a rotina de navegação, a gestão de processos e o acesso fácil a recursos da plataforma. Conheça as inovações que vão facilitar o seu dia a dia!

O [Widget de Links Úteis](https://tdn.totvs.com/x/T4qEMw) foi pensado para promover um acesso acesso rápido e Intuitivo às páginas mais importantes, de forma simples e eficiente. Agora, os usuários poderão incluir links internos ou externos, garantindo uma navegação ágil e prática para páginas e sistemas essenciais à sua rotina. Esse recurso promete revolucionar a experiência de uso ao permitir que informações relevantes estejam sempre à mão, de forma intuitiva e acessível.

Já o [Widget de Processos](https://tdn.totvs.com/x/cYqEMw), veio para otimizar e controlar a gestão, facilitando o acompanhamento de solicitações. Com ele, os usuários têm uma visão completa de todos os processos aos quais têm acesso, podendo personalizar a exibição de processos favoritos ou realizar uma seleção específica conforme suas necessidades. O widget permite a busca por nome, aplicação de filtros e ordenação dos processos, garantindo uma experiência de uso personalizada e eficiente. Além disso, ao clicar em um processo, o usuário é direcionado automaticamente para a tela de início de solicitação, com a opção de copiar o link do processo ou defini-lo como favorito para acessos futuros.

E para completar o trio, o [Widget de Últimos acessos](https://tdn.totvs.com/x/y7CvMw), que tem como objetivo melhorar e facilitar o acesso e a utilidade das informações essenciais para os usuários, garantindo uma experiência mais intuitiva e eficiente, servindo como um guia na tela inicial, mostrando sempre os últimos acessos dentro da plataforma.

Esses novos widgets foram pensadas para proporcionar uma navegação mais ágil e organizada, aumentando a produtividade e facilitando o acesso a informações relevantes. Use e aproveite ao máximo essas novidades! 

- [Widget Links Úteis](#)
- [Widget Processos](#)
- [Widget Últimos acessos](#)

   Your browser does not support the HTML5 video element 

   Your browser does not support the HTML5 video element 

   Your browser does not support the HTML5 video element 

## Correções

- Feitos ajustes para que, ao atualizar a plataforma quando é utilizado o banco de dados Oracle 19c, não ocorram inconsistências relacionadas aos índices da tabela de permissões e a atualização seja concluída com sucesso.
- Feitos ajustes nas configurações do Agendador de tarefas para aumentar a segurança e evitar a exploração de vulnerabilidades.

## 10 de Outubro de 2024

---

## Correções

- Corrigida a visualização de anexos dentro da solicitação, permitindo que ao clicar na imagem, ela seja carregada corretamente.

## 

## 08 de Outubro de 2024

---

**Nova regra de versionamento para Android** 

Conforme a notícia divulgada no portal de clientes, uma nova regra de versionamento para Android foi definida. Essa regra tem por objetivo garantir aos nossos clientes suporte técnico garantido, atualizações e novidades em nosso aplicativo My Fluig.

Veja abaixo como vai funcionar:

Suportaremos sempre a versão oficial, sendo essa a **última versão liberada + 4 versões abaixo**.

A mudança entrará em vigor em **02 de Dezembro de 2024**. Dessa forma, recomendamos que os dispositivos estejam sempre atualizados com a versão mais recente do Android. [Acesse a notícia](https://tdn.totvs.com/pages/viewpage.action?pageId=871502812#:~:text=Equipe%20TOTVS%20Fluig.-,09/10/2024,-Confira%20a%20nova) e saiba mais detalhes sobre.

## Correções

- Efetuados ajustes para que o gerenciamento de permissões seja feito apenas por usuários administradores ou por usuários que possuem permissão específica para isso, não permitindo que usuários comuns faça esse gerenciamento, tanto pela interface quanto pelas APIs.

## 

##  01 de Outubro de 2024

---

## Correções

- Realizada correção na inclusão de anexos, para que ao aplicar o filtro por anexo e excluir o anexo filtrado, não sejam mais exibidos dentro do processo.
- Realizado ajuste para que ao clicar no link para documentação dentro do processo, seja direcionado corretamente para a página.
- Ajuste realizado para que seja possível visualizar páginas habilitadas no aplicativo My Fluig corretamente.

## 

## 17 de Setembro de 2024

---

## Correções

- Alterado o instalador para incluir um parâmetro automaticamente na URL de conexão ao instalar a plataforma com o banco de dados SQL Server, com o intuito de evitar baixo desempenho em algumas consultas.
- Corrigida a passagem de parâmetros para sejam retornados normalmente documentos externos ou artigos.

## 

## 10 de Setembro de 2024

---

## Correções

- Ajuste realizado para que seja possível atualizar corretamente um documento utilizando a opção Atualizar arquivo do GED. 

## 

## 03 de Setembro de 2024

---

## Correções

- Aumentada a segurança das informações de *login* armazenados no *token* JWT para evitar a exploração de vulnerabilidades.
- Corrigida a contagem de [usuários](/pages/viewpage.action?pageId=234455411) da plataforma para considerar também os usuários do tipo [Aplicativo](https://tdn.totvs.com/x/54L5DQ#Plataforma%E2%9D%99Oauthapplication-CriarUsu%C3%A1rioAplicativo(Opcional)) – que são utilizados para integrações – visto que eles também são considerados na contagem de [licenças](/display/fluig/Licenciamento+da+plataforma) quando estão ativos.
- Efetuadas correções para que o indicativo de notificações não lidas seja exibido corretamente no ícone dos aplicativos My Fluig e My Approval quando utilizados em dispositivos com o sistema operacional iOS.
- Efetuados ajustes na plataforma para que a Home seja exibida corretamente no primeiro acesso ao aplicativo My Fluig quando é utilizado um dispositivo com o sistema operacional iOS.
- Ajuste realizado na central de tarefas para que seja possível criar um filtro utilizando as colunas visíveis da solicitação corretamente.
- Realizada correção no fluxo da solicitação do processo, permitindo transferir uma atividade e salvar um anexo corretamente.
- Corrigida a movimentação da atividade utilizando a API *process-management/api/v2/requests/{idSolicitacao}/move* para que a tarefa não seja movimentada caso não seja informado o usuário ou mesmo um usuário incorreto.

## 

## 28 de Agosto de 2024

---

## Correções

- Feitos ajustes para que a verificação de exceções de *proxy* funcionem corretamente quando a plataforma está configurada para que as requisições passem pelo *proxy*.
- Feitos ajustes para aumentar a segurança na manipulação de dados da empresa e evitar possíveis explorações de vulnerabilidades.
- Realizada correção na consulta de solicitação, para que a pesquisa retorne corretamente o número da solicitação, ignorando o espaço adicionado no número.
- Realizada correção na exclusão de um comentário em um documento, para que a ação ocorra sem gerar inconsistências.

## 

## 20 de Agosto de 2024

---

## Correções

- Melhorada a obtenção de informações por meio de *logs* para facilitar a identificação de inconsistências no fluxo de criação de usuários.
- Remoção das widgets do TOTVS Fluig No-Code e remoção das abas em comunidades.
- Realizada correção na transferência de pendencia de uma atividade que contém regra de anexo.
- Correção realizada para que formulários que contenham quebra de linha, sejam salvos corretamente.
- Corrigida a consulta das APIs passando o offset.
- Realizada correção para que os nomes definidos no fluxo sejam exibidos corretamente no aplicativo My Approval durante a seleção da próxima atividade.
- Realizada correção na [edição colaborativa com Google Drive](https://tdn.totvs.com/x/ukQYDQ), para que seja possível pesquisar e adicionar um colaborador no documento.

## 

## 13 de Agosto de 2024

---

## Correções

- Descontinuado o recurso *getSummaryColleagues* e substituído pelo novo recurso *getSummarizedColleagues*, que possui mais segurança e validações que visam sanar questões de vulnerabilidades.
- Corrigida a exibição das tarefas na central de tarefas com usuário substituto.
- Realizada correção para que seja executado corretamente o importador de dados históricos com o parâmetro para deletar os registros, não gerando inconsistência.
- Criado o parâmetro **fluig.schedule.single.instance** para permitir que o [Agendador de tarefas](https://tdn.totvs.com/pages/viewpage.action?pageId=234455387) seja executado em apenas uma instância, visando resolver situações de concorrência envolvendo atividades intermediárias e *gateways* quando são utilizadas mais de uma instância do Fluig. Saiba mais em [Como executar jobs em apenas uma instância do Fluig?](https://tdn.totvs.com/x/2VtqMw)

## 

## 06 de Agosto de 2024

---

## Correções

- Corrigido o recurso [Configuração do sistema](https://tdn.totvs.com/pages/viewpage.action?pageId=235597328) do WCMADMIN para que as informações sejam salvas corretamente ou exiba uma mensagem mais clara no *log* quando ocorrer alguma inconsistência que precise ser ajustada.
- Corrigida a busca de grupos dentro de [papéis](/pages/viewpage.action?pageId=234455398) para que os usuários sejam exibidos corretamente.
- Realizada correção na [conversão de solicitação](https://tdn.totvs.com/x/a-HuDQ) em uma atividade de serviço.

## 

## 30 de Julho de 2024

---

## Correções

- Realizado ajuste para que a imagens da comunidade seja exibida corretamente para usuários administradores.
- Realizada correção no Fluig para que os documentos assinados possam ser visualizados corretamente, após publicados.
- Realizado ajuste para manter o botão de "Atividades Paralelas" mesmo quando a solicitação é movimentada pelo fluxo final.

## 

## 23 de Julho de 2024

---

## Correções

- Corrigido o gerenciamento das licenças do Fluig.
- Correção realizada para que o relatório de cotas, após ser configurado, considere a pasta Meus Documentos.
- Realizado ajuste para que seja possível habilitar ou desabilitar o processo de limpeza de notificações para novos usuários.

## 

## 16 de Julho de 2024 

---

Correção Mandatory

Foi identificada uma vulnerabilidade crítica que requer uma atenção especial em seu ambiente.
A situação corrigida encontra-se disponível a partir do pacote **Mandatory 1.8.1-240716**.

## Correção

- Aplicada correção para que usuários comuns com permissão de gerenciar acessos, consigam acessar corretamente os itens no Painel de controle.

## 

## 09 de Julho de 2024

---

## Correções

- Efetuados ajustes para aumentar a segurança no processo de troca de senha via API, tanto para usuários comuns quanto para administradores.
- Realizado ajuste para que seja possível extrair os dados de estatísticas de uso do Fluig corretamente.
- Realizada atualização no web service *saveAndSendTaskByReplacement* para movimentações da solicitação como substituto, a fim de que grave corretamente as informações no histórico do processo.
- Realizado ajuste para que a widget Editor de conteúdo venha desabilitada por padrão nas novas instalações do aplicativo My Fluig.

## 

## 02 de Julho de 2024

---

## Correções

- Realizado ajuste para que as páginas sejam carregadas corretamente.
- Ajuste realizado para que o título da widget Editor de conteúdo seja exibido corretamente.

## 

## 25 de Junho de 2024

---

## Correções

- Realizada correção na paginação da Central de Diagnósticos.
- Realizado ajuste no cadastro de locais, para ocultar o campo de busca.
- Realizada correção para que, ao atualizar o fluig para a nova versão, o menu da Store seja apresentado corretamente e todos os usuários consigam acessar.
- Efetuados ajustes para não exibir inconsistência no *log* ao atualizar a plataforma de uma versão mais antiga – 1.6.5 em diante – para a 1.8.1 quando ainda se utiliza os aplicativos Beta, que foram descontinuados.

## 

## 18 de Junho de 2024

---

## Correções

- Realizada correção para que, ao utilizar a cópia controlada, o documento seja exibido corretamente.
- Realizado ajuste na mensagem ao imprimir cópia controlada de um documento contendo bloqueio de segurança ou assinatura digital.
- Corrigido o envio de notificações da plataforma para não enviar notificações repetidas nos aplicativos My Fluig e My Approval.
- Realizada correção para que o release do Fluig seja exibido na página de login.
- Corrigida a busca da Central de ajuda para exibir os resultados corretamente quando o termo utilizado possui acentuação ou espaço.

## 

## 11 de Junho de 2024

---

## Correções

- Realizado ajuste em [dataset sincronizado](https://tdn.totvs.com/x/yovEFw) para que ocorra integração de usuário corretamente.
- Realizada correção para que datasets simples consumam corretamente um webservice.
- Efetuados ajustes para permitir a autenticação de usuários que possuem o *e-mail* com mais de 60 caracteres.
- Efetuados ajustes para que as credenciais de acesso à plataforma não sejam solicitadas várias vezes quando o navegador é fechado e aberto novamente e a sessão anterior já expirou.
- Corrigidos os eventos globais relacionados ao *login* para exibir corretamente as mensagens personalizadas em ambientes que utilizam o protocolo LDAP para autenticação.

## 

## 04 de Junho de 2024

---

## Correções

- Realizada correção para que o conteúdo de notícias sejam apresentados na home quando utilizado a widget Novidades e Notícias.
- Corrigido o recurso [Listas](/pages/viewpage.action?pageId=234455493) do Painel de controle para permitir adicionar listas com [perspectiva](/pages/viewpage.action?pageId=234455530) associada sem que ocorram inconsistências.

## 

## 28 de Maio de 2024

---

## Correções

- Feitos ajustes para aumentar a segurança na geração de *token* de usuários e de identificadores da empresa.
- Ajuste realizado para que a API collaboration/api/v3/posts aceite todos os formatos de arquivo em anexo ao realizar uma publicação.
- Realizada atualização das opções de cópia controlada no arquivo Word.
- Aplicada alteração de decisão em tarefa de consenso ao acessar com usuário substituto.
- Efetuados ajustes na validação do *token* de usuário ao utilizar *datasets* e serviços REST para inclusão de formulários a partir de uma *widget* de uma página autenticada.
- Corrigido o componente *Zoom* para que os campos de busca dos formulários de comunidades e processos exibam os dados corretamente.

## 

## 14 de Maio de 2024

---

## Correções

- Correção realizada para que seja possível denunciar comentários em artigos corretamente.
- Corrigida a grafia do campo "*Access Token* URL" do recurso *OAuth provider* do Painel de controle.
- Feitos ajustes na busca de usuários do recurso [Papéis](/pages/viewpage.action?pageId=234455398) para exibir também os resultados que estão em outras páginas quando há paginação.
- Correção realizada para que ao desabilitar a edição de um campo de formulário não seja possível sua edição via console.

## 

## 07 de Maio de 2024

---

## Correções

- Feitas correções para prevenir a exploração de vulnerabilidades na manipulação de dados de usuários, grupos e comunidades.
- Efetuada correção para prevenir vulnerabilidades em formulários quando utilizado com dataset.

## 

## 30 de Abril de 2024

---

## Correções

- Correção realizada para que o e-mail de notificação quando o documento é modificado seja enviado apenas uma vez a cada modificação.
- Documentado o componente de Step no Style Guide.
- Realizado ajuste na tela de consulta de solicitações ao alterar o idioma.
- Realizada correção na busca por um processo na tela de consulta de solicitações.

## 

## 23 de Abril de 2024

---

## Correções

- Ajuste realizado para corrigir a consulta de um processo no monitoramento de tarefas, permitindo que ele seja exibido conforme esperado.
- Realizada correção para que ao habilitar a impressão de cópia controlada para um documento que possui variáveis nas informações, ele seja executado e o download efetuado corretamente.

## 

## 16 de Abril de 2024

---

## Correções

- Corrigida inconsistência ao adicionar um grupo nas permissões do processo.
- Realizada correção na impressão de cópia controlada de documentos enviados pelo cliente, para que sejam impressos corretamente.
- Realizado ajuste para garantir maior segurança, onde ao ao tentar adicionar uma *tag*de injeção XSS nas propriedades do processo, ela seja executada corretamente.
- Correção realizada para que seja possível fazer upload de ícones quando o tema clássico está sendo utilizado.

## 

## 09 de Abril de 2024

---

## Correções

- Realizada correção para que seja possível cadastrar serviços via Webservice.
- Realizada correção para que o formulário seja aberto corretamente quando utilizado com campo zoom.
- Realizada correções para garantir que o componente Treeview mantenha seu comportamento esperado quando utilizado com**drag and drop. 
- Realizada correção para que a alteração do mecanismo de atribuição seja aplicada corretamente após a atualização do processo. E que ao importar o XML via Web Service, a alteração ocorra normalmente.
- Realizado ajuste na configuração de um processo via Studio, para que seja possível configurar a atividade inicial com mecanismos por associação.
- Realizada melhoria para aumentar a segurança com relação aos conteúdos XSS repassados via URL no Fluig.
- Atualizada a versão do Eclipse de 1.8.1.6 para 1.8.1.7.

## 

## 03 de Abril de 2024

---

## Correções

- Corrigido o *update* que atualiza as permissões de recursos para que não ocorram inconsistências em algumas bases de dados, dependendo dos registros que elas possuem.

## 

## 02 de Abril de 2024

---

## Correções

- Realizada correção na central de diagnósticos, para que o uso de filtros personalizados tragam as informações de forma correta.
- Corrigida a utilização de mais de um gateway no processo, para que o histórico apresente as informações corretamente.
- Realizado ajuste na mensagem de erro que gerava um *NullPointerException _(NPE) ao movimentar uma solicitação e informar o _thread sequence* incorreto.
- Realizada correção no GED, para que seja possível realizar upload de um vídeo com mais de 20 minutos.
- Realizada correção para que ao iniciar uma solicitação com o mesmo usuário e acessar a central de tarefas, apenas uma tarefa seja exibida.
- Realizado ajuste na visualização de diagramas, não permitindo visualizar sem estar autenticado.
- Efetuadas alterações para que seja possível liberar acesso ao recurso [Eventos de auditoria](/pages/viewpage.action?pageId=286511885) para usuários comuns pelas permissões do Painel de controle.
- Feitas correções para prevenir a exploração de vulnerabilidades na administração de usuários, locais, notificações e agendamento de tarefas.
- Efetuadas alterações para solicitar a nova senha no aplicativo My Fluig quando ela é alterada a partir da plataforma e o aplicativo é aberto novamente.
- Realizado ajuste para que imagens PNG sejam exibidas como thumbnail corretamente.
- Correção realizada para que o filtro de datasets respeite o conteúdo passado e traga somente datasets que se enquadram no filtro.

## 

## 26 de Março de 2024

---

## Correções

- Realizada correção na exclusão de fichários ou fichas de formulário, para que quando filtrado por data, nome ou código, sejam mostrados corretamente.
- Realizada correção na versão *Silver Mist* do Fluig, para que a lista mestra seja gerada corretamente.
- Correção realizada para garantir o funcionamento correto das páginas que utilizam o widget de busca.

## 

## 12 de Março de 2024

---

## Correções

- Ajuste realizado para que ao editar um artigo e publica-lo em comunidade, o histórico de visualizações e data de criação sejam mantidos corretamente.
- Realizada correção na Central de tarefas, para que a data de atualização dos documentos sejam exibidas corretamente.

## 

## 05 de Março de 2024

---

## Correções

- Efetuadas correções para que os parâmetros do *link* de primeiro acesso à plataforma não sejam perdidos em um navegador onde já exista uma sessão iniciada e um novo acesso ao *link* seja feito depois de 30 minutos.

## 

## 27 de Fevereiro de 2024

---

## Correção

- Realizada correção na inclusão de regras de formulários duplicadas.

## 

## 20 de Fevereiro de 2024

---

## Correções

- Efetuadas correções para permitir que um usuário comum possa ativar ou desativar outros usuários comuns quando possuir permissão para isso.
- Corrigido acesso do usuário substituto a central de tarefas, para que as movimentações nas tarefas sob minha gerência sejam realizadas corretamente.
- Realizada correção ao copiar estrutura de pastas com arquivos contendo nomes com muitos caracteres.

## 

## 14 de Fevereiro de 2024

---

## Correções

- Realizada correção para impedir o usuário de alterar um documento o qual não possui permissão.
- Corrigida inconsistência na abertura de um arquivo SVG contendo scripts, para que somente a imagem seja visualizada.
- Aplicada correção na consulta de permissões de usuário para um documento específico.
- Corrigida visualização dos aprovadores quando um documento está em edição.

## 

## 06 de Fevereiro de 2024

---

## Correções

- Corrigida inconsistência na execução de indexação de mais de 4 milhões de registros, para que o processo aconteça corretamente, processando mais de 5 mil registros por vez.
- Realizada melhorias no log ao copiar para área de upload um arquivo que não está no volume.
- Realizada correção no formulário, para que aceite mais caracteres no campo.

## 

## 30 de Janeiro de 2024

---

## Correções

- Ajuste realizado para que ao aplicar restrição de visualização na página Store para usuários admin a mesma reflita a restrição adicionada corretamente.
- Efetuados ajustes no gerenciamento de licenças para validar corretamente as configurações definidas.
- Realizada atualização no plugin do Eclipse para a versão 1.8.1.6, para que a importação e exportação de processos funcione corretamente.
- Realizada correção para que ao visualizar o histórico de aprovação de outras versões/revisões de um documento, os aprovadores sejam exibidos corretamente.
- Realizada correção para que algumas páginas do LMS voltem a ser exibidas corretamente no Fluig.

## 

## 26 de Janeiro de 2024

---

## Correções

- Correção realizada na validação de movimentações em solicitações. 

## 

## 23 de Janeiro de 2024

---

## Correções

- Corrigida inconsistência nos eventos de serviço, no parâmetro *getActualThread*, para que o valor atual da *thread*seja mostrada de forma correta.
- Corrigida inconsistência ao editar um processo BPMN 2.0 pelo editor do Fluig na web, para que seja possível editar e visualizar de forma correta as propriedades da aba Geral.

## 

## 16 de Janeiro de 2024

---

## Correções

- Efetuadas correções no redirecionamento de URL para permitir acessar a plataforma Fluig a partir de um navegador *mobile.*
- Realizada melhoria para aumentar a segurança com relação aos conteúdos XSS repassados via comentários no Fluig.
- Realizada correção para que ao editar um registro de formulário de uma solicitação já finalizada utilizando o *updateCardData*, seja apresentada uma mensagem informando que "O formulário está associado a um processo finalizado e não pode ser editado".
- Realizada correção para que ao adicionar o componente de anotação na edição do processo WEB e salvar, as informações sejam gravadas corretamente.
- Realizada correção para que ao visualizar um documento e adicionar um comentário contendo uma tag de script, ao salvar, o script não seja executado.
- Realizada correção no formulário para que ao clicar em enviar, ele seja bloqueado para edição sempre que o side bar do botão enviar estiver aberto.

## 

## 09 de Janeiro de 2024

---

## Correções

- Sanadas questões de segurança no cadastro de informações adicionais da plataforma, dados adicionais, comunidades e remoção de usuários.
- Correção de inconsistência na aprovação do documento após a edição e a adição da marca d'água.
- Corrigida exibição de vídeos anexados em solicitações.
- Correção de inconsistência na exibição dos registros do campo zoom. 
- Correção realizada no recurso de impressão de cópia controlada.
- Ajuste realizado para movimentar corretamente a atividade de um processo que possua gateway após a atividade de início. 
- Realizada correção nos aplicativos *My Approval*e *My Fluig*, para que ao acessar a central de tarefas de um usuário substituído, somente as tarefas relacionadas às quais estou designado como substituto sejam exibidas.
- Realizada correção para que ao criar ou alterar um documento *CreateDocument*e *UpdateDocument*seja exibido apenas o nome do arquivo.
- Realizada correção para que ao realizar o cancelamento de uma solicitação, a data de cancelamento seja apresentada corretamente.
- Realizada correção para que ao adicionar um complemento em um arquivo PDF e salvar, as alterações sejam aplicadas corretamente.
- Realizada correção para que ao utilizar a API *createPrivateDocument*e incluir o path do arquivo, seja apresentado um informativo ao usuário para que seja utilizado somente o nome do arquivo.
- Realizada correção nos Web Services (WS): *createDocument*, *createSimpleDocument*, *createSimpleDocumentPrivate*, e também com a API v1 *createDocument*e agora ao informar um caminho no nome do arquivo, uma mensagem informando que o nome está incorreto será apresentada.

## 

## 11 de Dezembro de 2023

---

## Melhoria

**Bibliotecas atualizadas**

Nessa atualização, algumas bibliotecas internas foram atualizadas com o objetivo de garantir mais segurança na plataforma.

## Correções

- Sanadas questões de segurança em conexões de usuários, perfil de usuário, links de documentação e comentários.
- Criada a API [https://api.fluig.com/latest/page-management/swagger-ui/#/Themes](https://api.fluig.com/latest/page-management/swagger-ui/#/Themes) que retorna o logo da empresa. Pode ser utilizada em produtos externos, páginas ou widgets customizadas.
- Implementada biblioteca DOMPurify para auxiliar no tratamento de vulnerabilidades pelo frontend.
- Feito tratamento para que não sejam executados *scripts* no parâmetro "errorMsg" ao chamar a URL utilizando um *payload* com códigos maliciosos, sanando vulnerabilidades e aumentando a segurança.

## 

## 05 de Dezembro de 2023

---

## Correções

- Corrigida inconsistência no processo cuja tarefa possui um mecanismo de atribuição por campo de formulário (Pool:Group:Nome_Grupo), para que ao movimentar, não apresente nenhum erro.
- Realizada correção no TOTVS Fluig, para que ao adicionar um documento relacionado, seja possível selecionar um registro de formulário conforme esperado.
- Realizada correção no campo de busca geral do Fluig, para que ao colar o conteúdo de uma tabela do Excel, a ação de colar não seja executada, apenas o texto seja colado na função de busca.

## 

##  27 de Novembro de 2023

---

Correção Mandatory

Foi identificada uma vulnerabilidade crítica que requer uma atenção especial em seu ambiente.
A situação corrigida encontra-se disponível a partir do pacote **Mandatory 1.8.1-231127**.

Saiba quais são os impactos:

- Esta situação permitia a exploração de*Cross-site scripting* pela página mobileredir. Foram realizados ajustes para sanar essa falha de segurança.

## Correções

- Ajuste realizado para que seja possível anexar um documento junto a publicação em comunidades corretamente.
- Correção realizada para que ao trocar para o tema responsivo as widgets de menu e header sejam carregadas corretamente.

## 

## 21 de Novembro de 2023 

---

## Melhoria

**Header agora conta com permissionamento!**

A partir desta atualização, disponibilizamos o recurso de permissões para o header. Agora você pode definir permissões para usuários grupos ou papéis que podem visualizar e utilizar a barra de pesquisa e o ícone de notificações da plataforma. 

Esse recurso é válido para os temas Snowflake e Novo tema - responsivo.

![](/download/attachments/761497686/Permiss%C3%B5es%20header.png?version=1&modificationDate=1700594629753&api=v2)

Dica

Confira mais detalhes nas documentações de [Permissões](https://tdn.totvs.com/x/8IL5DQ) e [Opções de permissão no header](https://tdn.totvs.com/x/qi4WM).

## Correções

- Atualizado o Apache CXF para a versão 3.6.2 para sanar algumas vulnerabilidades e aumentar a segurança. Mais informações podem ser obtidas [aqui](https://cxf.apache.org/index.html).
- Realizado ajustar de responsividade da página Solicitações em resoluções como tablet e mobile.
- Realizada correção para que ao tentar imprimir um arquivo que não suporta impressão, o sistema apresente o erro informativo ao usuário, indicando que o arquivo não é suportado para impressão.

## 

## 14 de Novembro de 2023

---

## Correções

- Realizada correção para que ao realizar a busca e filtrar por uma determinada pasta, o resultado seja exibido corretamente, trazendo apenas os documentos contidos na pasta filtrada.
- Realizada correção para que o Fluig permita buscar valores separados por espaço em campos dos formulários.
- Realizada correção no Fluig para que tentar realizar a movimentação de uma tarefa em mobile, não seja apresentada nenhuma inconsistência.
- Realizada correção na aprovação de documentos para que o comentário feito seja adicionado corretamente.

## 

## 31 de Outubro de 2023

---

## Correções

- Realizado ajuste para que seja possível incluir um link para um documento da plataforma nas instruções do processo e atividades utilizando [WD:coddoc].
- Realizada correção em Meus documentos, para que não apresente erro ao tentar criar novas pastas.
- Realizada correção para que as solicitações não sejam apresentadas de forma duplicada na Central de Tarefas.
- Realizada correção para que o evento _beforetasksave _execute normalmente na transferência da solicitação.
- Realizada correção em Meus Documentos, para que ao acessar uma pasta, seja possível realizar um drag and drop nos documentos.
- Realizada correção para que o campo de usuários não seja mais apresentado ao enviar para uma atividade automática. E caso possua um mecanismo que necessite informar um usuário, o mesmo será apresentado corretamente.
- Corrigidas as inconsistências que não permitiam utilizar a navegação de documentos.
- Realizada correção no fluig para que as todas as tentativas de execução da atividade de serviço sejam listadas no histórico.

## 

## 24 de Outubro de 2023

---

## Correções

- Realizada correção no *style guide* que permite o uso de tabelas e *tags*complementares dentro do componente *popover*.
- Ajuste realizado para que seja possível adicionar vídeos no formato MP4 corretamente.

## 

## 17 de Outubro de 2023

---

Atenção!

Informamos que as mídias liberadas entre os dias **05/09/23** a **10/10/23** estão sujeitas a apresentar inconsistências se instaladas em banco de dados Oracle. Para as novas instalações recomendamos utilizar mídias fora do intervalo mencionado.

Confira a [notícia](https://tdn.totvs.com/pages/viewpage.action?pageId=871502812#:~:text=Equipe%20TOTVS%20Fluig.-,18/10/2023,-Inconsist%C3%AAncia%20nas%20m%C3%ADdias) que divulgamos no portal do cliente.

## Correções

- Correção realizada para que ao utilizar caracteres especiais com codificação diferente em imagens, os mesmos sejam normalizados com o mesma codificação aceita pela plataforma.
- Correção realizada para que seja possível iniciar a aplicação da plataforma.
- Realizada correção para que ao alterar a cor utilizada na configuração do documento, a marca d'água seja apresentada corretamente ao fazer o download do documento.
- Realizada correção para que o botão de "Enviar imagem" seja mostrado somente quando estiver dentro de subpastas.
- Realizada correção no Fluig para que ao acessar a solicitação, os campos sejam exibidos com os valores e a movimentação seja efetuada com sucesso.

## Melhoria

**Nova validação nas regras de formulário**

Pensando em facilitar a vida dos nossos usuários, foi adicionada uma validação nas regras de formulário para impedir que sejam salvas de forma duplicada.

## 

##  10 de Outubro de 2023

---

## Correções

- Feitos ajustes em opções de [configuração](/pages/viewpage.action?pageId=233763976) de notificação de prazo de tarefas e solicitações que estavam duplicadas.
- Melhorada a mensagem de alerta ao [desativar](https://tdn.totvs.com/x/c4H5DQ#Plataforma%E2%9D%99Usu%C3%A1rios.-Ativar/desativarusu%C3%A1rio) um usuário que faz parte de um grupo que possui o papel Administrador aplicado, visto que usuários com papel Administrador não podem ser desativados, mesmo que o papel seja aplicado a partir do grupo e não diretamente ao usuário.
- Realizada correção para sanar a vulnerabilidade no pacote LMS.
- Realizada correção no agendador de tarefas para sanar problemas de travamento na fila.
- Realizada correção para remover automaticamente os arquivos nas pastas temporárias geradas pelo Fluig no sistema operacional.
- Realizada correção na Lista Mestra, para que o histórico de aprovação em subpastas seja apresentado corretamente.

## 

##  03 de Outubro de 2023

---

## Correções

- Ajustes realizados para otimizar a geração de [thumbnail](https://tdn.totvs.com/x/4gBlDw).
- Realizada correção para que ao abrir um documento do tipo PDF protegido com senha, a modal seja apresentada corretamente.
- Realizada correção para na aba campos de filtro, todos os tipos sejam exibidos no editor web de processos, dentro do Fluig plataforma.
- Realizada correção para que sejam exibidos dois cards de processos por vez na inicialização de solicitações.
- Realizado ajuste no gráfico de tarefas a concluir da central de tarefas, para que o quadro que mostra as tarefas, não apresente nenhuma inconsistência ao mostrar o gráfico em tela.
- Realizado ajuste para que ao alterar o "código para serviço de dados" pré-definido, mostre corretamente o alterado na busca da página de Regras do Formulário.

## Melhoria

Novos métodos SDK

Criado dois novos métodos no SDK do Fluig API para retornar o conteúdo do documento. Mais informações, consulte na documentação do [SDK](https://api.fluig.com/old/sdk/com/fluig/sdk/service/DocumentService.html#getDocumentContentAsBytes%28java.lang.Integer%29).

## 

## 26 de Setembro de 2023 

---

## Melhoria

**Novo método de visualização de documentos**

Agora os documentos do tipo PNG, JPG, JPEG e BMP, por padrão, não virão com a opção de visualizador interno assinalado, permitindo assim que os documentos sejam abertos e visualizados diretamente pelo visualizador padrão do navegador. 

Caso queira visualizar estas extensões via *Fluig Viewer*, será necessário assinalar a opção dentro das propriedades do documento. Acesse a [documentação](https://tdn.totvs.com/x/kRJoDg)para saber mais detalhes.

## 

##  19 de Setembro de 2023 

---

## Correções

- Correção realizada para que seja possível acessar as propriedades do registro de formulário com anexo quando utilizado o kit intranet.

## Melhoria

**Reajustada a quantidade de requisições da visualização de documentos**

Essa solução veio com o objetivo de reduzir as requisições desnecessárias que ocorriam quando um documento era visualizado várias vezes, pois a cada nova visualização o serviço era acionado para converter o documento.

## 

## 12 de Setembro de 2023 

---

## Melhorias

**Novo dataset **

Criado novo dataset Interno para trazer as informações de mecanismos de atribuição. Confira mais detalhes na documentação de [Datasets internos](https://tdn.totvs.com/x/SgKeCQ).

## Correções

- Realizada correção no formulário, para que o botão de "enviar" seja bloqueando enquanto o formulário estiver sendo carregado.

## 

##  05 de Setembro de 2023 

---

## Melhorias

**Itens da store agora é Store!**

Nessa atualização o recurso Itens da Store que você conhecia passou por mudanças e agora se chama Store - a página de soluções do TOTVS Fluig que agora está mais moderna e intuitiva.

Aprimoramos a busca por soluções reposicionando o campo de busca para a parte superior da página, proporcionando maior destaque e praticidade para você na hora de buscar por uma solução.

- [Campo de busca](#)

![](/download/attachments/761497686/Busca%20store.PNG?version=1&modificationDate=1693854435067&api=v2)

Além dos filtros já existentes, criamos novos filtros que auxiliam a encontrar as soluções de forma mais eficaz. 

Você pode acionar o filtro através do ícone ![](/download/attachments/761497686/flaticon-filter%20%281%29.png?version=1&modificationDate=1693854481307&api=v2) filtrar soluções por:

- Desenvolvedor;
- Categorias;
- Tipo.

Além disso, organizamos as categorias separando-as por Novidades, Todas as soluções e Flows. Essa divisão torna o uso de cada categoria mais prático, permitindo que você encontre soluções específicas em categorias distintas.

- [Categorias da store](#)

![](/download/attachments/761497686/Nova%20store.gif?version=1&modificationDate=1693854793007&api=v2)

Aproveite essa novidade e confira a nova página Store do TOTVS Fluig.

Confira mais detalhes no help [Store](https://tdn.totvs.com/x/frOcEw).

**Nova API para remoção de arquivos**

Pensando em facilitar a rotina do usuário, foi criada a nova API **DELETE**  [/v2/documents/uploads](http://192.168.0.21:8080/content-management/swagger-ui/#/operations/Documents/removeAllFiles) para limpar a área de upload de documentos do usuário.

## Correções

- Implementada a responsividade na central de tarefas e incluído o link do gráfico nas labels de tarefas atrasadas e tarefas no prazo.
- Efetuados ajustes na definição de permissões para que os recursos do [Painel de controle](/pages/viewpage.action?pageId=233762861) sejam exibidos corretamente para usuários comuns quando eles recebem permissão de acesso a esses recursos – tais como [Substitutos](/pages/viewpage.action?pageId=234455459) e [Expedientes](/pages/viewpage.action?pageId=233766840) – e quando o banco de dados utilizado é o Oracle.
- Realizada correção no campo zoom, para que após limpar o campo, seja possível incluir novos registros.
- Realizado ajuste para que ao adicionar ou renomear um arquivo com tags no nome, não sejam interpretadas como HTML pelo Fluig.

## 

## 29 de Agosto de 2023

---

## Correções

- Alterada a opção **Flags "HttpOnly" e "Secure" nos cookies** para que seja habilitada automaticamente ao selecionar a opção **HTTPS** como protocolo nas [Configurações do sistema](/pages/viewpage.action?pageId=235597328).
- Aumentada a segurança das URLs de redirecionamento ao acessar o Fluig Plataforma a partir do navegador de um dispositivo móvel – que direciona para o aplicativo My Fluig – e também a partir de uma página de autenticação personalizada.
- Correção realizada para que as permissões sejam apresentadas ao utilizar o layout comunicativo para criar páginas.
- Realizada correção para que o botão de "Iniciar Nova Solicitação" fique posicionado corretamente, independente da resolução.
- Realizado ajuste para que o cash seja limpo após o campo selecionar usuários e grupos, sendo necessário alterar o próprio componente do Style Guide.
- Realizada correção para sanar lentidão na página de configuração de processos, para que seja feita uma chamada do _alert _para cada API.
- Correção realizada para que seja possível localizar usuários, grupos ou papéis ao criar uma página.
- Correção realizada para que seja possível exportar corretamente projetos padrões de widgets para o Fluig via Eclipse.
- Incluído status "Finalizado" ao utilizar o componente de upload do style guide Fluig e realizado ajuste na área de upload para que fique disponível para inclusão de novos arquivos.
- Correções realizadas a fim de garantir que todos os componentes do bootstrap estejam na versão 3.4.1 e atualizado os componentes Tooltip e Popover para a versão 3.4.1-FLUIG.

## 

## 22 de Agosto de 2023

---

## Melhorias

### Nova tela de resumo da central de tarefas

A tela de resumo da Central de Tarefas está de cara nova e com novas opções para trazer mais facilidade para a sua rotina.

Agora também é possível exibir o gráfico de resumo de tarefas nas widgets, com modos de exibição **Detalhado** ou **Resumido. **

Para ficar por dentro dessa novidade e conferir todos os detalhes, acesse as documentações de [Central de tarefas - Resumo](https://tdn.totvs.com/x/LvLuDQ) e [Widgets - Gráfico de tarefas](https://tdn.totvs.com/pages/viewpage.action?pageId=234455977#Plataforma%E2%9D%99Widgets-Gr%C3%A1ficosdeTarefas).

- [Central de Tarefas](#)
- [Widget Gráfico de tarefas](#)
- [Modo Detalhado](#)
- [Modo Resumido](#)

![](/download/attachments/761497686/resumo%20de%20tarefas1.png?version=1&modificationDate=1692715511753&api=v2)

![](/download/attachments/761497686/widget%20grafico%20de%20tarefas.png?version=1&modificationDate=1692906066200&api=v2)

![](/download/attachments/761497686/detalhado.png?version=1&modificationDate=1692906482640&api=v2)

![](/download/attachments/761497686/resumido.png?version=1&modificationDate=1692906494953&api=v2)

## Correções

- Aumentada a segurança da edição de campos do recurso [Editar perfil](/pages/viewpage.action?pageId=233762774), tanto pela página quanto pela API.
- Correção realizada para que as permissões sejam apresentadas ao utilizar o layout comunicativo para criar páginas.
- Realizada correção para que o botão de "Iniciar Nova Solicitação" fique posicionado corretamente, independente da resolução.
- Correção realizada para que seja possível criar layouts utilizando o Eclipse.

## 

## 15 de Agosto de 2023

---

## Correções

- Efetuados ajustes para permitir adicionar mais de 40 usuários a um papel e não exibir usuários que estão bloqueados para seleção.
- Efetuados ajustes para bloquear alterações nas preferências do usuário via API quando o usuário que está autenticado não é o mesmo que está sendo alterado, mesmo que o autenticado seja o administrador, permitindo assim, que apenas as próprias informações de quem está autenticado sejam alteradas.
- Correção realizada para que as widgets sejam exibidas quando o novo tema está sendo utilizado.
- Realizada correção ao executar o importador de dados históricos, para que os campos com valores fixo em formato de texto (*String*) possam ser lidos pelo importador e enviados ao analytics corretamente.
- Realizada correção para que ao desmarcar a opção de PDF/A, os vídeos no formato .MP4 sejam exibidos corretamente.
- Realizada correção no campo zoom, para que permita consultas com maior número de caracteres.

## 

##  08 de Agosto de 2023

---

## Correções

- Correção de inconsistência ao consumir API de listagem de documentos na pasta.
- Efetuadas correções para permitir que os usuários se autentiquem na plataforma Fluig a partir do aplicativo My Fluig quando é utilizado o protocolo LDAP.
- Alterada a opção de notificação "Senha alterada recentemente" para "Senha recuperada recentemente", localizada na aba Gerais da [Configuração de notificações](/pages/viewpage.action?pageId=233763976), pois essa notificação somente é emitida quando é feito o processo de recuperação de senha.
- Incluídos os ícones de cada documento na tabela de documentos relacionados.
- Realizada correção na configuração das atividades, para que não seja possível inserir _tags _e alterar a cor da fonte.
- Realizada correção em documentos, para que ao copiar e colar uma pasta com arquivo que possuía segurança herdada, não fique em carregamento e impeça a inclusão da  pasta.
- Correção realizada nos temas para que ao criar páginas ou comunidades, as mesmas sejam abertas corretamente.

## 

##  01 de Agosto de 2023

---

## Correções

- Correção realizada para que a opção de desabilitar o novo tema não seja apresentada em novas instalações da plataforma.
- Correção realizada no comportamento do componente [checkbox](https://style.fluig.com/components.html#custom-checkbox-and-radio) dentro da tabela pai e filho.
- Corrigida API para possibilitar a ativação das notificações em comunidades.
- Realizada correção para que ao pesquisar um arquivo anexado na solicitação pelo nome que contenha espaço, a busca apresente o resultado correto.

## 

##  26 de Julho de 2023

---

Correção Mandatory

Foi identificada uma vulnerabilidade crítica que requer uma atenção especial em seu ambiente.
A situação corrigida encontra-se disponível a partir do pacote **Mandatory 1.8.1-230726**.

Saiba quais são os impactos:

- Esta situação permitia a alteração dos dados de acesso dos usuários pela página de Preferências. Foram realizados ajustes para sanar essa falha de segurança.

## Correções

- Correção realizada para permitir a edição de campos na página de Temas ao acessar com o usuário wcmadmin.
- Correção de inconsistência no componente de zoom, para não permitir a seleção de mais de um registro.
- Realizada correção na aprovação de documentos, para que seja possível inserir uma descrição corretamente.
- Realizada correção no menu de Descrição principal dos registros de um formulário, para que a descrição inserida seja incluída corretamente.
- Corrigido o cadastro de [Papéis](/pages/viewpage.action?pageId=234455398) para não permitir adicionar usuários bloqueados em um papel.

## 

## 18 de Julho de 2023

---

## Melhorias

### Implementada criptografia de senha no AD

Pensando em deixar a sua segurança ainda maior, foi aplicada uma atualização no sistema, que permite agora utilizar uma senha encriptada do LDAP. 

Através de uma *tag*utilizada no *domain*, será possível definir se a senha será encriptada ou não.

Para saber de todos os detalhes e como funciona esta novidade, acesse a documentação [Configuração de autenticação utilizando LDAP](https://tdn.totvs.com/x/XQVbDw). 

## Correções

- Realizada correção para que seja possível executar os comandos SQL do update em qualquer banco homologado pelo Fluig.
- Realizada correção para que seja executada a atualização da imagem docker e o sistema seja atualizado corretamente, alterando para a versão instalada.
- Realizada correção para melhorar a busca no datasets do campo zoom.
- Realizada correção na visualização de documentos, para que ao gerar uma nova versão, seja possível visualizá-lo corretamente.
- Realizada correção para que a impressão de uma cópia controlada não apresente nenhuma inconsistência.
- Realizado ajuste para que seja possível incluir a permissão ou validação na API de validação de resultados do processo.
- Realizada correção para ao editar um documento no TOTVS Fluig, o usuário seja direcionamento diretamente para o Word.
- Realizada melhoria para o controle de versão no evento global.
- Correção realizada para que ao trocar o tema para o Snowflake o mesmo seja aplicado corretamente em toda a plataforma.

## 

## 11 de Julho de 2023

---

## Melhorias

### TOTVS Flows: Sua solicitação de compra facilitada

Já imaginou otimizar e agilizar a implantação de processos na sua empresa para facilitar o dia a dia dos seus colaboradores? Bom, isso já é possível! 

Apresentamos o **TOTVS Flows - Solicitação de compra**. Com ele é possível abrir pedidos de compras de forma otimizada, podendo informar qual item será comprado, direcionando para as devidas aprovações da gestão e área de compras. Permitindo ainda, realizar o cadastro de itens e do centro de custo consumido no processo.

Tudo para trazer mais facilidade à sua rotina!

			![](https://tdn.totvs.com/download/attachments/563436139/dica.png)

**DICA!**
Depois de instalado, o *flow* **Solicitação de compra** fica disponível como um processo no recurso [Iniciar solicitações](https://tdn.totvs.com/x/VfHuDQ), com o nome e a categoria que foram definidos na instalação.

			![](https://tdn.totvs.com/download/attachments/563436139/nota.png)

**NOTA:**
O **TOTVS Flows** é uma solução paga listada no recurso [Itens da Store](https://tdn.totvs.com/x/frOcEw). Para adquiri-lo, entre em contato com o seu Executivo de Soluções de Negócio (ESN) e aproveite essa novidade!

- [Instalação - Flow de solicitação de compra](#)
- [Abertura de solicitação de compra](#)

#### Your browser does not support the HTML5 video element

#### Your browser does not support the HTML5 video element

### TOTVS Flows: Seu pedido de férias otimizado

Já imaginou otimizar e agilizar a implantação de processos na sua empresa para facilitar o dia a dia dos seus colaboradores? Bom, isso já é possível! 

Apresentamos o **TOTVS Flows - Solicitação de férias**. Que permite aos colaboradores abrir solicitação de férias de forma otimizada, onde o colaborador poderá solicitar suas férias diretamente ao seu superior imediato, enviando a solicitação para aprovação. Passando então pela validação da área de Recursos Humanos, programando o pagamento com o financeiro e assegurando toda a documentação para assinatura.

Tudo para trazer mais facilidade à sua rotina!

			![](https://tdn.totvs.com/download/attachments/563436139/dica.png)

**DICA!**
Depois de instalado, o *flow* **Solicitação de férias** fica disponível como um processo no recurso [Iniciar solicitações](https://tdn.totvs.com/x/VfHuDQ), com o nome e a categoria que foram definidos na instalação.

			![](https://tdn.totvs.com/download/attachments/563436139/nota.png)

**NOTA:**
O **TOTVS Flows** é uma solução paga listada no recurso [Itens da Store](https://tdn.totvs.com/x/frOcEw). Para adquiri-lo, entre em contato com o seu Executivo de Soluções de Negócio (ESN) e aproveite essa novidade!

- [Instalação - Flow de solicitação de férias](#)
- [Abertura de solicitação de férias](#)

#### Your browser does not support the HTML5 video element

#### Your browser does not support the HTML5 video element

### Integrar o TOTVS Fluig com TOTVS iPaaS agora é possível!

Enfim, trouxemos a você essa possibilidade incrível! Agora é possível integrar o TOTVS Fluig com o TOVS iPaaS de forma fácil e rápida.

Basta seguir o passo a passo descrito na documentação oficial e pronto. Acesse agora mesmo em [Integração do TOTVS FLUIG com TOTS iPaaS](https://tdn.totvs.com/x/xuIaLg), confira todos os detalhes e fique por dentro desta novidade.

## Correções

- Realizada correção nas regras de formulário, para que ao configurar a ação "Validar" e voltar para a tela das regras já cadastradas, elas sejam mantidas para visualização.
- Realizada correção no componente de busca de documentos, para que as pastas configuradas no desenvolvimento personalizado sejam mostradas corretamente.
- Realizada correção para que os campos dos formulários sejam listados corretamente na aba "Descrição Principal dos Registros de Formulário " nas propriedades do documento.
- Ajuste na mensagem apresentada à deixando mais clara nos casos onde o usuário tenta criar páginas com códigos (id) que já existem.
- Realizada correção nos usuários da plataforma, para que seja possível bloquear um usuário sem nenhuma restrição.
- Correção realizada para que o layout Comunicativo receba as corretas configurações de permissão nas widgets.

## 

##  27 de Junho de 2023

---

## Correções

- Corrigida a integração do TOTVS Fluig Plataforma com o TOTVS Identity para que a plataforma seja iniciada corretamente.

## 

## 20 de Junho de 2023

---

## Melhorias

### TOTVS Flows: agilize seu dia a dia com processos prontos para uso!

Já imaginou otimizar e agilizar a implantação de processos na sua empresa para facilitar o dia a dia dos seus colaboradores? Bom, isso já é possível!

Apresentamos o **TOTVS Flows**: vários processos pré-definidos e configurados prontos para uso. É isso mesmo, você só precisa instalar e começar a usar! Sem desenvolvimento, sem linhas de código, sem complicação.

O primeiro *flow* que já está disponível para uso é o [Abertura de chamado](/display/fluig/Flows+%7C+Abertura+de+chamado). Com ele, seus colaboradores podem abrir uma solicitação para qualquer área da empresa e ela será direcionada para a equipe que fará a tratativa correta da ocorrência. Tudo de forma automatizada e simples de usar. É mais facilidade que se diz, né?

			![](https://tdn.totvs.com/download/attachments/563436139/dica.png)

**DICA!**
Depois de instalado, o *flow* **Abertura de chamado** fica disponível como um processo no recurso [Iniciar solicitações](https://tdn.totvs.com/x/VfHuDQ), com o nome e a categoria que foram definidos na instalação.

			![](https://tdn.totvs.com/download/attachments/563436139/nota.png)

**NOTA:**
O **TOTVS Flows** é uma solução paga listada no recurso [Itens da Store](https://tdn.totvs.com/x/frOcEw). Para adquiri-lo, entre em contato com o seu Executivo de Soluções de Negócio (ESN) e aproveite essa novidade!

- [Instalando](#)
- [Abrindo solicitação](#)

#### Your browser does not support the HTML5 video element

#### Your browser does not support the HTML5 video element

## Correções

- Realizada correção para que em situações onde a geração da lista mestra gere erro devido ao servidor utilizar 100% da CPU e da Memória RAM, a mensagem da inconsistência deve ser clara ao usuário, informando o motivo de não ter sido gerada.
- Realizada correção para que seja possível alterar o critério de aprovação da pasta pai, sem que seja exibida a mensagem de documento pendente.
- Realizada correção para que tamanho do índice seja respeitado no Oracle, limitado a 30 caracteres.
- Foram atualizadas e excluídas algumas bibliotecas que apresentavam vulnerabilidades.
- Correção realizada para que seja possível sincronizar um dataset offline.

## 

## 06 de Junho de 2023

---

## Correções

- Realizado ajuste para que a criação de índices na tabela documento, diminua o alto consumo na CPU.
- Realizado ajuste para que quando o controle de cotas estiver ativo, ao atualizar arquivos ou criar uma nova revisão, a cota atualize corretamente o tamanho físico.

## 

## 30 de Maio de 2023

---

## Melhorias

**Criação de índices para melhoria de performance!**

A criação de índices em tabelas ML trouxe ganhos de performance para o TOTVS Fluig. 

## Correções

- Atualizada a biblioteca e suas dependências relacionadas à exportação de dados para aumentar a segurança e confiabilidade.
- Realizada correção para que o checkbox de impressora seja removido das opções de "Configuração de relatório", onde agora é possível realizar a consulta sem apresentar o erro de impressora.
- Realizada correção na API, para que no campo "descriptionLevel" seja informada a descrição do nível adicionado.
- Realizada correção para que ao clicar em qualquer objeto dentro de um processo que não tenha ligação com regras de formulário, não seja apresentado o modal com requisições desnecessárias e que seja possível visualizar as regras de formulário mesmo que o processo não tenha sido salvo.
- Realizado ajuste para implementar a validação, a fim de identificar o usuário autenticado na plataforma ou o usuário administrador, fazendo com que o envio da URL do documento via API ocorra corretamente ao utilizar o fluxo automático.

## 

## 23 de Maio de 2023

---

## Correções

- Corrigido o recurso Permissões para exibir corretamente uma página criada ao efetuar uma busca por ela.

## 

##  16 de Maio de 2023

---

## Correções

- Ajuste realizado para que o título das widgets sejam exibidos quando adicionadas dentro de slots, facilitando a rápida identificação. Exceto nos slots do layout Comunicativo para que não ocorra duplicidade nos títulos.
- Correção realizada para que o sistema faça a varredura de todos os módulos de login disponíveis dentro do domain.xml para que o processo de login no My Approval não seja afetado quando utilizado via autenticação de LDAP.
- Criado o parâmetro takeTask para que seja possível restringir uma atividade a um usuário específico.
- Correção realizada para que quando uma atividade estiver em paralelo essa informação também reflita no Analytics.
- Corregida inconsistência dos dados enviados ao Analytics para que os valores sejam exibidos corretamente.


<!-- anchors: Atualizações(1.8.1)-Ciclodeatualização, Atualizações(1.8.1)-xxdeDezembrode2025, Atualizações(1.8.1)-Correções, Atualizações(1.8.1)-XXdeDezembrode2024, Atualizações(1.8.1)-Melhoria, Atualizações(1.8.1)-IntegraçãoTOTVSFluigxTOTVSiPaaScomapenasumclique!, Atualizações(1.8.1)-24deNovembrode2025, Atualizações(1.8.1)-Correções.1, Atualizações(1.8.1)-29deOutubrode2025, Atualizações(1.8.1)-Atualizaçãorecomendada, Atualizações(1.8.1)-22deAbrilde2025, Atualizações(1.8.1)-Correções.2, Atualizações(1.8.1)-18deMarçode2025, Atualizações(1.8.1)-Correções.3, Atualizações(1.8.1)-11deFevereirode2025, Atualizações(1.8.1)-Correções.4, Atualizações(1.8.1)-21deJaneirode2025, Atualizações(1.8.1)-Correções.5, Atualizações(1.8.1)-14deJaneirode2025, Atualizações(1.8.1)-Correções.6, Atualizações(1.8.1)-17deDezembrode2024, Atualizações(1.8.1)-Correções.7, Atualizações(1.8.1)-10deDezembrode2024, Atualizações(1.8.1)-Correções.8, Atualizações(1.8.1)-03deDezembrode2024, Atualizações(1.8.1)-Correções.9, Atualizações(1.8.1)-19deNovembrode2024, Atualizações(1.8.1)-Correções.10, Atualizações(1.8.1)-15deOutubrode2024, Atualizações(1.8.1)-Melhoria.1, Widgets, Widgets--684035868, Widgets--184407625, Widgets-1114251673, Atualizações(1.8.1)-Correções.11, Atualizações(1.8.1)-10deOutubrode2024, Atualizações(1.8.1)-Correções.12, Atualizações(1.8.1)-08deOutubrode2024, Atualizações(1.8.1)-Correções.13, Atualizações(1.8.1)-01deOutubrode2024, Atualizações(1.8.1)-Correções.14, Atualizações(1.8.1)-17deSetembrode2024, Atualizações(1.8.1)-Correções.15, Atualizações(1.8.1)-10deSetembrode2024, Atualizações(1.8.1)-Correções.16, Atualizações(1.8.1)-03deSetembrode2024, Atualizações(1.8.1)-Correções.17, Atualizações(1.8.1)-28deAgostode2024, Atualizações(1.8.1)-Correções.18, Atualizações(1.8.1)-20deAgostode2024, Atualizações(1.8.1)-Correções.19, Atualizações(1.8.1)-13deAgostode2024, Atualizações(1.8.1)-Correções.20, Atualizações(1.8.1)-06deAgostode2024, Atualizações(1.8.1)-Correções.21, Atualizações(1.8.1)-30deJulhode2024, Atualizações(1.8.1)-Correções.22, Atualizações(1.8.1)-23deJulhode2024, Atualizações(1.8.1)-Correções.23, Atualizações(1.8.1)-16deJulhode2024, Atualizações(1.8.1)-Correção, Atualizações(1.8.1)-09deJulhode2024, Atualizações(1.8.1)-Correções.24, Atualizações(1.8.1)-02deJulhode2024, Atualizações(1.8.1)-Correções.25, Atualizações(1.8.1)-25deJunhode2024, Atualizações(1.8.1)-Correções.26, Atualizações(1.8.1)-18deJunhode2024, Atualizações(1.8.1)-Correções.27, Atualizações(1.8.1)-11deJunhode2024, Atualizações(1.8.1)-Correções.28, Atualizações(1.8.1)-04deJunhode2024, Atualizações(1.8.1)-Correções.29, Atualizações(1.8.1)-28deMaiode2024, Atualizações(1.8.1)-Correções.30, Atualizações(1.8.1)-14deMaiode2024, Atualizações(1.8.1)-Correções.31, Atualizações(1.8.1)-07deMaiode2024, Atualizações(1.8.1)-Correções.32, Atualizações(1.8.1)-30deAbrilde2024, Atualizações(1.8.1)-Correções.33, Atualizações(1.8.1)-23deAbrilde2024, Atualizações(1.8.1)-Correções.34, Atualizações(1.8.1)-16deAbrilde2024, Atualizações(1.8.1)-Correções.35, Atualizações(1.8.1)-09deAbrilde2024, Atualizações(1.8.1)-Correções.36, Atualizações(1.8.1)-03deAbrilde2024, Atualizações(1.8.1)-Correções.37, Atualizações(1.8.1)-02deAbrilde2024, Atualizações(1.8.1)-Correções.38, Atualizações(1.8.1)-26deMarçode2024, Atualizações(1.8.1)-Correções.39, Atualizações(1.8.1)-12deMarçode2024, Atualizações(1.8.1)-Correções.40, Atualizações(1.8.1)-05deMarçode2024, Atualizações(1.8.1)-Correções.41, Atualizações(1.8.1)-27deFevereirode2024, Atualizações(1.8.1)-Correção.1, Atualizações(1.8.1)-20deFevereirode2024, Atualizações(1.8.1)-Correções.42, Atualizações(1.8.1)-14deFevereirode2024, Atualizações(1.8.1)-Correções.43, Atualizações(1.8.1)-06deFevereirode2024, Atualizações(1.8.1)-Correções.44, Atualizações(1.8.1)-30deJaneirode2024, Atualizações(1.8.1)-Correções.45, Atualizações(1.8.1)-26deJaneirode2024, Atualizações(1.8.1)-Correções.46, Atualizações(1.8.1)-23deJaneirode2024, Atualizações(1.8.1)-Correções.47, Atualizações(1.8.1)-16deJaneirode2024, Atualizações(1.8.1)-Correções.48, Atualizações(1.8.1)-09deJaneirode2024, Atualizações(1.8.1)-Correções.49, Atualizações(1.8.1)-11deDezembrode2023, Atualizações(1.8.1)-Melhoria.2, Atualizações(1.8.1)-Correções.50, Atualizações(1.8.1)-05deDezembrode2023, Atualizações(1.8.1)-Correções.51, Atualizações(1.8.1)-27deNovembrode2023, Atualizações(1.8.1)-Correções.52, Atualizações(1.8.1)-21deNovembrode2023, Atualizações(1.8.1)-Melhoria.3, Atualizações(1.8.1)-Correções.53, Atualizações(1.8.1)-14deNovembrode2023, Atualizações(1.8.1)-Correções.54, Atualizações(1.8.1)-31deOutubrode2023, Atualizações(1.8.1)-Correções.55, Atualizações(1.8.1)-24deOutubrode2023, Atualizações(1.8.1)-Correções.56, Atualizações(1.8.1)-17deOutubrode2023, Atualizações(1.8.1)-Correções.57, Atualizações(1.8.1)-Melhoria.4, Atualizações(1.8.1)-10deOutubrode2023, Atualizações(1.8.1)-Correções.58, Atualizações(1.8.1)-03deOutubrode2023, Atualizações(1.8.1)-Correções.59, Atualizações(1.8.1)-Melhoria.5, Atualizações(1.8.1)-26deSetembrode2023, Atualizações(1.8.1)-Melhoria.6, Atualizações(1.8.1)-19deSetembrode2023, Atualizações(1.8.1)-Correções.60, Atualizações(1.8.1)-Melhoria.7, Atualizações(1.8.1)-12deSetembrode2023, Atualizações(1.8.1)-Melhorias, Atualizações(1.8.1)-Correções.61, Atualizações(1.8.1)-05deSetembrode2023, Atualizações(1.8.1)-Melhorias.1, sample, sample, Atualizações(1.8.1)-Correções.62, Atualizações(1.8.1)-29deAgostode2023, Atualizações(1.8.1)-Correções.63, Atualizações(1.8.1)-22deAgostode2023, Atualizações(1.8.1)-Melhorias.2, Atualizações(1.8.1)-Novateladeresumodacentraldetarefas, detalhadoeresumido, Atualizações(1.8.1)-Correções.64, Atualizações(1.8.1)-15deAgostode2023, Atualizações(1.8.1)-Correções.65, Atualizações(1.8.1)-08deAgostode2023, Atualizações(1.8.1)-Correções.66, Atualizações(1.8.1)-01deAgostode2023, Atualizações(1.8.1)-Correções.67, Atualizações(1.8.1)-26deJulhode2023, Atualizações(1.8.1)-Correções.68, Atualizações(1.8.1)-18deJulhode2023, Atualizações(1.8.1)-Melhorias.3, Atualizações(1.8.1)-ImplementadacriptografiadesenhanoAD, Atualizações(1.8.1)-Correções.69, Atualizações(1.8.1)-11deJulhode2023, Atualizações(1.8.1)-Melhorias.4, Atualizações(1.8.1)-TOTVSFlows:Suasolicitaçãodecomprafacilitada, Aberturadechamado, Aberturadechamado-1, Atualizações(1.8.1)-100%true5%, Aberturadechamado-2, Atualizações(1.8.1)-100%true5%.1, Atualizações(1.8.1)-TOTVSFlows:Seupedidodefériasotimizado, Aberturadechamado, Aberturadechamado-1, Atualizações(1.8.1)-100%true5%.2, Aberturadechamado-2, Atualizações(1.8.1)-100%true5%.3, Atualizações(1.8.1)-IntegraroTOTVSFluigcomTOTVSiPaaSagoraépossível!, Atualizações(1.8.1)-Correções.70, Atualizações(1.8.1)-27deJunhode2023, Atualizações(1.8.1)-Correções.71, Atualizações(1.8.1)-20deJunhode2023, Atualizações(1.8.1)-Melhorias.5, Atualizações(1.8.1)-TOTVSFlows:agilizeseudiaadiacomprocessosprontosparauso!, Aberturadechamado, Aberturadechamado-1, Atualizações(1.8.1)-100%true5%.4, Aberturadechamado-2, Atualizações(1.8.1)-100%true5%.5, Atualizações(1.8.1)-Correções.72, Atualizações(1.8.1)-06deJunhode2023, Atualizações(1.8.1)-Correções.73, Atualizações(1.8.1)-30deMaiode2023, Atualizações(1.8.1)-Melhorias.6, Atualizações(1.8.1)-Correções.74, Atualizações(1.8.1)-23deMaiode2023, Atualizações(1.8.1)-Correções.75, Atualizações(1.8.1)-16deMaiode2023, Atualizações(1.8.1)-Correções.76 -->
