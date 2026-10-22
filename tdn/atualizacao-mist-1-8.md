---
title: "Atualização Mist (1.8)"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=680958031"
scraped_at: "2026-03-04T02:12:55.400Z"
depth: 3
anchors: 16
child_links: 34
---

# Atualização Mist (1.8)

![](/download/attachments/680958031/TDN_com-logo_mist_1660x490.png?version=1&modificationDate=1652280268673&api=v2)

Atualização no serviço de notificações push do Fluig

O serviço de notificações push do Fluig passou por uma atualização e por este motivo, recomendamos a atualização do TOTVS Fluig Plataforma para a **release 1.8 Mist** liberada em 01 de Setembro de 2022 ou para a [**release 1.7.1-221025 Crystal Lake**](https://tdn.totvs.com/x/iK4cJ), liberada em 25 de Outubro de 2022 para que o serviço continue funcionando corretamente. 

Para que o serviço continue em funcionamento estipulamos o prazo a seguir, então caso a atualização não feita até **01 de Fevereiro de 2023**, o serviço será interrompido, fazendo com que as notificações push não sejam mais enviadas e recebidas nos aplicativos My Fluig e My Approval. Recomendamos que a atualização seja feita o quanto antes para evitar impactos.

**O que devo fazer para manter minhas notificações push atualizadas?**

- Manter os aplicativos móveis My Fluig e My Approval atualizados com a última versão disponível nas lojas Google Play e Apple Store.

Confira a notícia que disponibilizamos no **portal de clientes**.

Versão mínima para atualização da plataforma

O processo de atualização para o Fluig 1.8.0 exige que a plataforma esteja na atualização **1.7.1 ou superior**. Caso seu ambiente esteja em uma atualização inferior, é necessário realizar o processo de atualização para a 1.7.1, e então atualizar para o Fluig 1.8.0.

Confira alguns links úteis

- [Guia de instalação da plataforma](https://tdn.totvs.com/x/zAJbDw)
- [Guia de atualização da plataforma](https://tdn.totvs.com/x/CkwxE) 
- [Instalação e atualização](https://tdn.totvs.com/x/NYSbC)

Plugin jQuery Migrate desabilitado por padrão

Nesta atualização, o plugin do jQuery Migrate está **desabilitado**. Este plugin foi desabilitado seguindo o [comunicado divulgado em maio/2021](https://suporte.totvs.com/portal/p/10098/suporte-fluig-noticias?id=1048).  

Com isso, caso você possua desenvolvimentos sob a plataforma usando recursos antigos do jQuery, podem ocorrer algumas inconsistências. Para que não ocorra nenhuma inconsistência é necessário que seu desenvolvimento esteja compatível com a versão **3.6.0**do **jQuery**. Confira os principais pontos de impactos na documentação: [Atualização jQuery - Como identificar o que precisa ser atualizado?](https://tdn.totvs.com/x/zA2eI).

O plugin não foi removido, apenas está desabilitado. Portanto, se seu código não é compatível com o jQuery 3.6.0, será possível habilitá-lo novamente por meio do Painel de Controle > WCM > Empresas, com o usuário wcmadmin.

Para mais informações sobre como ativar, consulte a documentação [Como cadastrar variáveis do plugin de migração jQuery](https://tdn.totvs.com/x/I-Z5IQ).

![](/download/attachments/680958031/espanhol.png?version=2&modificationDate=1651670984767&api=v2) ¿Habla Español? Haga [clic aquí](https://tdn.totvs.com/x/iz7_K) para ver el Release Notes en Español.

![](/download/attachments/680958031/ingles.png?version=2&modificationDate=1651671004753&api=v2) Do you speak English? [Click here](https://tdn.totvs.com/x/lj7_K) to view the Release Notes in English.

Confira abaixo as novidades na atualização 1.8.0 do TOTVS Fluig Plataforma:

## Processos

---

**Gerencie seus processos em um único lugar**

Nessa atualização do TOTVS Fluig Plataforma, trouxemos uma novidade para facilitar o monitoramento dos processos e solicitações da sua empresa: a **Central de Diagnósticos**!

Este novo recurso veio com o intuito de disponibilizar um único local para que seja possível fazer validações de processos e solicitações que estejam com alguma inconsistência. Podendo extrair os dados de processos do Fluig e facilitando a visualização dessas informações. Dessa forma você tem um controle mais eficiente desses dados e sabe exatamente quais são os pontos que necessitam de atenção. 

Sendo possível fazer a verificação dos motivos determinantes de um erro e atuando para ajustá-lo.

Na seção **Estatísticas gerais**, é possível realizar filtros de determinados períodos de tempo para saber como estão as suas solicitações e processos. 

Na guia **Solicitações** é possível verificar a listagem de solicitações e os detalhes de erro de cada solicitação que o processo possa conter acessando o ícone ![](/download/attachments/680958031/flaticon-view.png?version=3&modificationDate=1651668689247&api=v2), onde o **Diagnóstico da solicitação** é exibido contendo a mensagem de erro. Também pode ser consultado mais detalhes clicando sobre o botão **Ver detalhes e ações** onde é possível obter informações do processo, ver a mensagem de erro da solicitação, o log da solicitação, editar o script do processo e entre ações ações.

Também é possível definir os filtros abaixo:

- Por solicitação;
- Por processo;
- Por responsável;
- Por atividade;
- Por erro.

- [Editar script](#)

Acessando o **Diagnóstico da solicitação** e acionando o botão **Ver detalhes e ações**, encontramos o recurso de **Editar script**. Onde é possível editar os scripts errôneos do processo fazendo com que uma nova versão do script do seja aplicada somente na solicitação específica que foi aberta anteriormente. Também é possível tornar a versão do script padrão para as atuais e futuras solicitações referentes ao processo.

É possível encontrar todos os scripts do processo através da listagem ao lado do editor. Na guia Versões é possível voltar as versões do script caso tenha mais de uma versão publicada. Ao final do processo pode-se **Reenviar a solicitação** após feitos os ajustes necessários.

![](/download/attachments/680958031/Editor%20de%20Scripts.png?version=4&modificationDate=1653077432973&api=v2)

Já na guia **Processos** você consegue ver a listagem de processos e ,consegue identificar se estão respeitando as práticas recomendadas de desenvolvimento ou se contém erros através das *tags* identificadoras na coluna **Diagnósticos**. Clicando no ícone ![](/download/attachments/680958031/flaticon-view.png?version=3&modificationDate=1651668689247&api=v2) é possível acessar o **Diagnóstico do processo**, ver a mensagem de erro e acessar os detalhes nas guias **Alertas de desenvolvimento** e **Erros em solicitação**. Também é possível clicar no botão **Ver detalhes e ações**, que leva para o detalhamento da solicitação onde é possível tomar ações como **Ver solicitação** e mais **Ações**. 

Também é possível definir os filtros abaixo:

- Processos com erro;
- Processos com alerta;
- Processos ativos;
- Processos inativos;
- Processos liberados;
- Processos em edição;
- Todas as versões;
- Últimas versões. 

- [Estatísticas gerais - Central de diagnósticos](#)
- [Listagem de solicitações](#)
- [Diagnóstico da solicitação](#)
- [Detalhes e ações da solicitação](#)
- [Listagem de processos](#)
- [Diagnóstico do processo](#)

![](/download/attachments/680958031/central%20de%20diagnosticos1.png?version=1&modificationDate=1651668757197&api=v2)

![](/download/attachments/680958031/listagem%20solicita%C3%A7%C3%B5es.png?version=2&modificationDate=1651668828990&api=v2)

![](/download/attachments/680958031/diagnostico%20da%20solicita%C3%A7%C3%A3o.png?version=2&modificationDate=1651668874080&api=v2)

![](/download/attachments/680958031/detalhes%20e%20a%C3%A7%C3%B5es.png?version=2&modificationDate=1651668921517&api=v2)

![](/download/attachments/680958031/listagem%20processos.png?version=1&modificationDate=1651670008633&api=v2)

![](/download/attachments/680958031/diagnostico%20de%20processo1.png?version=1&modificationDate=1651670135270&api=v2)

**Visualizar log diário do ambiente**

Junto da seção Estatísticas gerais adicionamos o botão **Visualizar log diário do ambiente**, que mostra todos os logs gerados na plataforma. Nele é possível consultar os logs gerados definindo filtros através por meio da opção **Filtros de log** onde é possível filtrar por um **Período personalizado** e por **Tipo de log**. Também é possível configurá-lo através do ícone ![](/download/attachments/680958031/flaticon-settings%20%282%29.png?version=3&modificationDate=1651670192453&api=v2) selecionando as opções **Deseja ativar a quebra de linhas?** e **Deseja ativar o modo escuro?**

- [Visualizar log diário do ambiente](#)

![](/download/attachments/680958031/log%20di%C3%A1rio%201.png?version=2&modificationDate=1651670217367&api=v2)

Para mais detalhes acesse nossa documentação de [Central de diagnósticos](https://tdn.totvs.com/x/rO9iJg) e confira todas as vantagens.

## Portais

---

**Disponibilizamos um novo tema para o TOTVS Fluig Plataforma**

Pensando sempre em melhorar sua experiência de uso com o TOTVS Fluig Plataforma, nessa release trazemos uma novidade, um novo tema!

Desenvolvemos um novo tema que veio com o intuito de garantir que sua experiência seja cada vez mais agradável e bem sucedida ao acessar o TOTVS Fluig Plataforma. Sendo assim, ao habilitar este tema, os recursos que você já conhece como o **menu principal** e a **barra superior** se adaptarão ao tamanho da tela do dispositivo em que o Fluig for acessado, pois agora estão responsivos.

**Novidades no perfil do usuário e campo de buscas**

Evoluímos o perfil do usuário e suas informações e agora se encontram no lado direito da página, junto com as opções de Política de uso, Novidades, Idioma e Sair. 

Também modernizamos o campo de busca geral da plataforma, o deixando mais evidente para realizar buscas de documentos, publicações, comunidades e entre outros.

Essas mudanças visam facilitar o encontro dessas informações, uma vez que agora estão localizadas em uma área que nossos usuários estão habituados.

- [Header e perfil do usuário antes](#)
- [Header e perfil do usuário agora](#)

![](/download/attachments/680958031/header%20antigo.png?version=1&modificationDate=1651856177890&api=v2)

![](/download/attachments/680958031/header%20novo.png?version=1&modificationDate=1651856258490&api=v2)

**Pré-visualização em tempo real**

Como o novo tema veio com o intuito de tornar sua experiência mais agradável ao acessar o TOTVS Fluig Plataforma, desenvolvemos o recurso de pré-visualização para você conferir como a configuração do novo tema está ficando. Dessa forma você garante que a identidade visual do seu negócio seja refletida na plataforma.

Dividimos os esquemas de configuração em duas guias: Cores e Imagens.

Em **Cores** é possível configurar todo o esquema de cores do TOTVS Fluig Plataforma, como a cor de fundo, menu principal, menu ativo, barra superior e a cor primária de alguns links. 

Já em **Imagens** é possível definir imagens de logo, fundo da plataforma, barra superior e ícone da página, por exemplo**.**

**Não se adaptou ao tema? Compartilhe seu feedback!**

Caso você opte por não usar o novo tema no momento, é possível desabilitá-lo por meio do botão ON/OFF e voltar a utilizar o tema antigo. Ao desabilitar o tema, você poderá nos enviar como foi sua experiência, utilizando a nova ferramenta de feedback! 

É muito importante para nós saber sua opinião e os motivos por não querer utilizá-lo, pois assim podemos evoluir juntos cada vez mais.

**Fique tranquilo!**

Você poderá voltar a utilizar os temas antigos sempre que quiser e sentir necessidade, pois não haverá impactos nas suas *widgets*, páginas e conteúdos inseridos. 

- Lembramos que todo o conteúdo inserido nas *widgets* não acompanha a responsividade do novo tema. Uma vez que na pré-visualização as imagens são meramente ilustrativas apenas para demonstrar como a configuração do tema em si é aplicada em dispositivos diferentes, desconsiderando as *widgets* e conteúdos nelas inseridos.
- As novas empresas criadas no Fluig 1.8.0 utilizarão o novo tema, enquanto empresas já existentes (criadas na 1.7 ou inferior), o usuário administrador poderá alterar para o novo tema. Recomendamos avaliar e validar aplicativos e desenvolvimentos sob a plataforma que utilizem recursos do WCM (páginas e *widgets*), para verificar possíveis impactos visuais.

- [Veja o recurso na prática](#)
- [Pré-visualização na web](#)
- [Pré-visualização modo tablet](#)
- [Pré-visualização modo mobile](#)

![](/download/attachments/680958031/Novo%20tema%20responsivo2.gif?version=3&modificationDate=1651670248017&api=v2)

![](/download/attachments/680958031/novo%20tema%20%28web%29.png?version=2&modificationDate=1651670358883&api=v2)

![](/download/attachments/680958031/novo%20tema%20%28tablet%29.png?version=2&modificationDate=1651670377120&api=v2)

![](/download/attachments/680958031/novo%20tema%20%28mobile%29.png?version=2&modificationDate=1651670396087&api=v2)

**Responsividade refletida em navegadores mobile**

Ao acessar o TOTVS Fluig Plataforma por meio dos navegadores de dispositivos móveis, você verá a experiência responsiva que este novo tema proporciona. O menu principal e a barra superior, onde você encontra informações de perfil e notificações, serão adaptadas automaticamente às dimensões da tela independente do dispositivo usado.

**Vale lembrar!**

- Os itens Política de uso e Novidades agora estão localizados no perfil do usuário; 
- O Release do TOTVS Fluig Plataforma agora está localizada no menu principal;
- O rodapé foi retirado para uma visualização mais ampla;
- A página Sobre deixou de existir pois as informações da release da plataforma foram migradas para o menu principal;
- As notificações serão exibidas respeitando a dimensão da tela utilizada;

Aproveite para saber mais detalhes consultando a documentação sobre [Temas](https://tdn.totvs.com/x/HEFyK).

## Social

---

**❤️ Os queridinhos das redes sociais chegaram ao TOTVS Fluig Plataforma! 🎉🎈🚀😎**

A partir dessa atualização o uso de *emojis* na plataforma se torna oficial! E vem com o intuito de deixar o TOTVS Fluig Plataforma mais divertido e promover a interação entre os usuários e as comunidades.

Os *emojis* poderão ser adicionados às publicações da *timeline* pessoal e de comunidades, podendo acompanhar textos ou serem adicionados sozinhos na publicação. Além disso, também podem ser adicionados aos comentários feitos na plataforma.

Ao utilizar um *emoji*, este ficará na seção **Usados recentemente** para facilitar a sua localização futura, sendo exibidos na listagem de acordo com a frequência de uso. O campo de busca que existe dentro do quadro de *emojis* facilita para realizar a pesquisa de um *emoji* que deseja utilizar.

Atualizando a plataforma para a release 1.8.0 você também consegue utilizar os *emojis* no aplicativo My Fluig. Verifique se seu aplicativo está na última versão liberada na loja. ![(wink)](/s/5bn9pn/8804/xgjkrn/_/images/icons/emoticons/wink.svg) ![(big grin)](/s/5bn9pn/8804/xgjkrn/_/images/icons/emoticons/biggrin.svg)

Vale lembrar

- Atualmente usamos os emojis nativos dos navegadores, ou seja, cada navegador fica responsável pela renderização dos emojis o que pode gerar pequenas diferenças visuais.
- Os emojis que possuem seleção de cores, ou seja, que podem ter sua coloração alterada, serão renderizados na cor padrão dos emojis (amarelo) Para mais detalhes consulte [nosso artigo](https://centraldeatendimento.fluig.com/hc/pt-br/articles/6202044739863).

- [Emojis em publicação](#)
- [Emojis em comentários](#)
- [Emojis no My Fluig](#)

![](/download/attachments/680958031/Incluir%20emojis.gif?version=3&modificationDate=1651670428240&api=v2)

![](/download/attachments/680958031/emojis%20em%20coment%C3%A1rio1.png?version=1&modificationDate=1651670537600&api=v2)

![](/download/attachments/680958031/oie_transparent%20%287%29.png?version=1&modificationDate=1652274195797&api=v2)

**💩 Quer restringir o uso de algum emoji? 💩**

Agora além de cadastrar as palavras que você não quer que sejam exibidas na plataforma, você também poderá cadastrar *emojis* que considera impróprios para o uso. 🤬

Além disso, também é possível testar o conteúdo cadastrado, assim você tem certeza de que os conteúdos serão restringidos ao serem utilizados. 

Confira mais detalhes no tópico: **Palavras restritas está de cara nova - agora é Restrição de conteúdo indesejado!**

Gostou da novidade? Para saber mais detalhes acesse nossa documentação de [Publicação](https://tdn.totvs.com/x/nvvuDQ).

**Palavras restritas está de cara nova - agora é Restrição de conteúdo indesejado!**

Modernizamos o recurso de palavras restritas nessa release e agora ele se chama **Restrição de conteúdo indesejado**. Esse nome foi pensado a fim de deixar o recurso o mais claro possível.

E não foi apenas o nome do recurso que mudou, pois toda a página também foi modernizada e está de cara nova.

Com a novidade dos *emojis* que poderão ser utilizados na plataforma Fluig, você também poderá definir quais *emojis* que considera não adequados para o uso.

Dessa forma, além de incluir palavras, agora também poderá incluir os *emojis* e garantir que apenas conteúdos considerados adequados para o uso serão utilizados.

Além disso, também é possível testar a restrição definida utilizando o botão **Testar conteúdo**, assim você tem certeza de que os conteúdos serão restringidos ao serem utilizados.

- [Confira o recurso na prática](#)
- [Restrição de conteúdo indesejado](#)
- [Testar conteúdo restrito](#)

![](/download/attachments/680958031/testar%20conteudo.gif?version=3&modificationDate=1651670614640&api=v2)

![](/download/attachments/680958031/Restri%C3%A7%C3%A3o%20de%20conteudo%20indesejado.png?version=2&modificationDate=1651670736393&api=v2)

![](/download/attachments/680958031/testar%20conte%C3%BAdo%20restrito.PNG?version=3&modificationDate=1651670782487&api=v2)

Para saber mais detalhes acesse a documentação [Restrição de conteúdo indesejado](https://tdn.totvs.com/x/OIL5DQ). 

## WCM

---

**Componentes do style guide atualizados**

Nessa atualização alguns componentes do Style Guide foram reestruturados para modernizar e atender alguns critérios de acessibilidade ([WCAG](https://guia-wcag.com/)) aos componentes do TOTVS Fluig Plataforma.

Confira abaixo os componentes que foram atualizados:

| Componente | Detalhes da atualização |
| --- | --- |
| Button, Dropdown, Input e Split | Foram adicionados novos estados para que atendesse aos critérios da WCAG de identificação. -Quando esses componentes estão em destaque apresentará uma borda a fim de identificar que o componente está ativo.-Quando esses componentes estão desabilitados o componente é apresentado em um tom de cinza de fácil identificação onde o mesmo não pode ser clicado. |
| Alert | Adaptado para atender às diretrizes de acessibilidade da WCAG para que as pessoas que tenham acesso ao componente compreendam seu objetivo facilmente. |
| Upload | Criado para que seu uso em diferentes produtos seja reaproveitado e apresente as informações de forma consistente e padronizada. |
| Cards | Criado para que seu uso em diferentes produtos seja reaproveitado e apresente as informações de forma consistente e padronizada. |
| Labels | Redesenhado para que respeite as características do componente de labels facilitando a identificação e não tenha características semelhantes aos botões. |
| Progress bar | Atualizado para que atenda aos critérios do novo componente de upload fazendo com que se torne mais adaptável visualmente, sendo responsivo e apresentado em tamanhos diferentes se adequando de forma mais agradável às dimensões utilizadas. |
| Datatable | Atualizado para que aceite paginação quando utilizado um dataset no componente de datatable. |

Para conferir todos os componentes com detalhes, acesse nosso [style guide](https://style.fluig.com/).

## Arquitetura

---

**Mais segurança e desempenho no Fluig**

Algumas bibliotecas e ferramentas foram atualizadas para trazer mais segurança, desempenho e estabilidade à Plataforma Fluig. [Homologamos](https://tdn.totvs.com/x/_ApbB) o banco de dados **Oracle 19c** e os sistemas operacionais **Oracle Linux** e **Red Hat Enterprise Linux**para a versão **8.5**. 

Atualizamos também o Node.js, componente do serviço *RealTime* (notificações), para a versão **16**.

![](/download/attachments/680958031/oracle%20node%20e%20red%20hat.png?version=2&modificationDate=1651670877970&api=v2)

**Mais segurança nos cookies do TOTVS Fluig**

Com o objetivo de dar mais segurança à plataforma, habilitamos as flags HttpOnly e Secure em alguns cookies do TOTVS Fluig Plataforma. Essas flags tem o objetivo de prevenir ataques como roubo de cookies uma vez que impedem o acesso aos valores dos cookies usando o JavaScript

Essa funcionalidade só pode ser habilitada em ambientes que possuem a configuração HTTPS e além disso, a prevenção funciona independente da forma de configuração do HTTPS (Nginx, Apache ou TOTVS Fluig Plataforma)

**Confira os cookies que já permitem o uso das flags habilitadas**

- JSESSIONID
- JSESSIONIDSSO
- Jwt.token
- WCMUserLang

Para habilitar mais este recurso de segurança confira [nossa documentação](https://tdn.totvs.com/x/EO4KDg) e garanta que sua plataforma esteja protegida!

## API

---

**Atualizamos e criamos novas APIs**

Também tivemos atualizações de APIs e a criação de uma nova API. Confira abaixo as mudanças.

**ECM**

Atualizada as APIs de documentos para o novo padrão

- [Listagem de documentos](https://api.fluig.com/latest/content-management/swagger-ui/#/Pastas/getDocuments);
- [Navegação *(breadcrumb)*](https://api.fluig.com/latest/content-management/swagger-ui/#/Pastas/getBreadCrumb)*;*
- [*Upload*de documentos](https://api.fluig.com/latest/content-management/swagger-ui/#/Documents/documentUpload);
- [Edição na descrição de documentos](https://api.fluig.com/latest/content-management/swagger-ui/#/Documents/changeDescription).

**Social**

Atualizada a API de social para suportar o uso de *emojis* na plataforma e no aplicativo My Fluig. 

- [Suporte a emojis](https://api.fluig.com/latest/collaboration/swagger-ui/#/Posts/createPostInMultiplesPlaces)

**Dataset** 

Atualizada para permitir a paginação quando utilizado um *dataset* no componente de *datatable*;

- Criada [nova API que tenha suporte a paginação](https://api.fluig.com/latest/dataset/swagger-ui/). 

## Documentações

---

Confira as documentações que tiveram alterações para esta release e as novas documentações que foram feitas.

- [Plataforma | Central de diagnósticos](https://tdn.totvs.com/x/rO9iJg);
- [Plataforma | Tema responsivo](https://tdn.totvs.com/x/HEFyK);
- Todas as documentações do agrupador [Publicação](https://tdn.totvs.com/x/nvvuDQ) foram atualizadas para esta release;
- [Plataforma | Restrição de conteúdo indesejado](https://tdn.totvs.com/x/OIL5DQ);
- [Como cadastrar as variáveis do plugin de migração jQuery](https://tdn.totvs.com/x/I-Z5IQ);
- [Configurações do sistema](https://tdn.totvs.com/x/EO4KDg)

Uma imensa base de conhecimento ao seu dispor

Estamos constantemente evoluindo nossa base de conhecimento na **Central de Atendimento**. Cada vez que você for abrir um chamado para o atendimento TOTVS Fluig, efetue a busca para ver se existe um artigo com dúvidas ou problemas semelhantes, que foram mapeados e resolvidos. As sugestões de artigo serão apresentadas no momento em que você indicar o assunto do chamado.

Dessa forma, você pode executar seu trabalho com mais agilidade. Acesse e explore [nossa base de conhecimento](https://centraldeatendimento.fluig.com/hc/pt-br/categories/360001513691).

## Correções

---

- Correção realizada para que ao buscar um formulário e editar os *metadados *através da aba Segurança os dados sejam salvos corretamente.
- Realizada correção para que não seja recriado o cache do gestor caso o mesmo não seja alterado. 
- Correção de inconsistência na opção Ocultar/Exibir Árvore ao visualizar um conteúdo do tipo SCORM em [Trilhas e Treinamentos.](https://tdn.totvs.com/x/SPzuDQ)
- Ajuste realizado na plataforma para que ao incluir um vídeo na widget [Editor de conteúdo](https://tdn.totvs.com/x/Xy9nF), o mesmo seja reproduzido corretamente qdo acessado pelo aplicativo My Fluig. 
- Correção realizada para que ao salvar um processo não ocorra mais a inconsistência na leitura do XML do processo.
- Correção de inconsistência apresentada ao incluir valor na tabela pai x filho.
- Corrigida inconsistência para que a inicialização do Fluig ocorra sem lentidão.
- Ajustes realizados no contador do [total de hits](https://tdn.totvs.com/pages/viewpage.action?pageId=235325483&preview=/235325483/555271933/Propriedades%20003.png#Plataforma%E2%9D%99Visualizarpropriedadesdodocumento-Visualizaraspropriedadesdodocumento) ao visualizar as propriedades do documento.  
- Ajustes realizados reforçando segurança na plataforma.
- Ajustes realizados reforçando segurança na plataforma.
- Ajustes realizados no recurso [Política de Uso](https://tdn.totvs.com/x/UoH5DQ). O ajuste promoveu que ao clicar nas opções sem selecionar um documento, o sistema retorna a seguinte mensagem "*Selecione um documento para visualizar*".
- Corrigida inconsistência apresentada ao buscar um arquivo no **TOTVS Fluig Plataforma.**
- Corrigida inconsistência ao realizar o *upload* de um documento para que o mesmo seja apresentado na lista em tela.
- Corrigida inconsistência ao armazenar documentos a longo prazo na plataforma.
- Ajustes realizados ao utilizar o método setNotificationDays para setar os dias de notificação de um documento.
- Correção realizada para que o arquivo principal seja encontrado corretamente utilizando função do SDK UpdateFile.
- Correção realizada para que seja possível acessar o painel de controle > personalização > templates de e-mail corretamente.


<!-- anchors: AtualizaçãoMist(1.8)-Processos, sample, sample-1, 1, sample, AtualizaçãoMist(1.8)-Portais, sample, 1, AtualizaçãoMist(1.8)-Social, 1, 1, AtualizaçãoMist(1.8)-WCM, AtualizaçãoMist(1.8)-Arquitetura, AtualizaçãoMist(1.8)-API, AtualizaçãoMist(1.8)-Documentações, AtualizaçãoMist(1.8)-Correções -->
