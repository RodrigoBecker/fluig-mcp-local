---
title: "Atualização 1.4.4"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=181144009"
scraped_at: "2026-03-09T03:18:28.448Z"
depth: 2
anchors: 7
child_links: 43
---

# Atualização 1.4.4

Confira abaixo as novidades na atualização 1.4.4 do Fluig:

## ECM

**Novo visualizador interno**

*Mais formatos compatíveis e mais recursos disponíveis ao ler um documento: esse é o novo visualizador interno do Fluig*

Nesta atualização do Fluig, o visualizador interno está melhor do que nunca. Aumentamos (e muito) a lista de documentos compatíveis, adicionamos mais recursos para serem utilizados durante a visualização de documentos e está de cara nova. Veja como ficou:

![](/download/attachments/181144009/prizm.png?version=1&modificationDate=1419885054000&api=v2)

Deseja utilizar o novo visualizador interno?

O novo visualizador interno ficou bacana, não? Se você deseja utilizá-lo (imaginamos que sim), entre em contato com o [Suporte Fluig](https://suporte.fluig.com) com o texto: "*Novo visualizador interno: EU QUERO!*

Estamos ansiosos para deixar o seu dia-a-dia ainda mais produtivo com mais essa novidade.

 Com o Novo Visualizador Interno, atualizamos a [Matriz de Portabilidade](/display/fluig/Matriz+de+Portabilidade) e o [Plataforma | Dimensionamento](/display/fluigesp/Plataforma+%7C+Dimensionamento) do Fluig. Confira! 

## Fluig Store

**Novos componentes de Mashup na Fluig Store**

Como plataforma, novos componentes podem ser adicionados no Fluig para evoluir seu dia-a-dia. Pensando nisso o Fluig criou novos componentes de Mashups com os líderes em diversas tecnologias:

- **Certificação Digital**: assine digitalmente documentos e processos para garantir a autenticidade, integridade e irretratabilidade;
- **Notificações Push**: alerte os usuários em tempo real sobre algo novo que aconteceu no Fluig através do Fluig Mobile;
- **Mensagens SMS**: mesmo se o usuário não possuir o Fluig Mobile em seu celular - ou não possuir plano de dados - ele não ficará sem os alertas do Fluig: receberá via SMS em tempo real!

Acesse agora os novos componentes da Fluig Store:

[http://store.fluig.com/departamento/mashups](https://store.fluig.com/departamento/mashups)

## Arquitetura

**Mais agilidade na edição de grupos de usuários grandes**

Agora a edição de grupos de usuários apresenta maior desempenho em grupos de milhares de usuários, o que permite adicionar usuários aos grupos com mais agilidade.

## BPM

**Acesso a registros de formulário de solicitações**

Agora a visualização de registros de formulários criados a partir de um *workflow* que não seja público considera a segurança definida na Navegação de Documentos, independentemente do usuário ter participado ou não da solicitação.

**Consulta ao dataset de um formulário mais rápida**

Criamos um novo índice no Fluig para aumentar o desempenho em consultas à *datasets* de formulários salvos em tabela de banco de dados.

Não conhece os datasets do Fluig?

[Clique aqui](/display/fluig/Desenvolvimento+de+Datasets) e conheça como utilizar datasets no Fluig

## Guia de Estilos

**Novo componente Loading**

O Guia de Estilos do Fluig agora conta com o novo componente *Loading*. Ele foi criado para apresentar uma animação ou mensagem enquanto o usuário aguarda o carregamento de um recurso em uma página. Para utilizá-lo, basta informar o elemento que será aplicado e definir as configurações adicionais, se desejado. Esse componente é bastante útil para situações em que o usuário precisa de um *feedback* de que ele deve aguardar o carregamento da página para posterior apresentação do recurso desejado.

Nota

Mais detalhes sobre o novo componente podem ser obtidos no tópico *Loading*do Guia de Estilos do Fluig.

![](/download/attachments/181144009/Loading-FluigStyleGuide.gif?version=1&modificationDate=1419615904000&api=v2)

**Novos ícones disponíveis no Guia de Estilos**

A família de ícones do Fluig disponível no Guia de Estilos conta com novos ícones, confira:

- *Pan Tool;*
- *Fit to Width;*
- *Rotate Page;*
- *Full Screen.***

Nota

Informações adicionais podem ser obtidas em [Fluig *Icons*](https://style.fluig.com/components.html#icons) do Guia de Estilo.

![](/download/attachments/181144009/SOCIALECMSUST-3379.png?version=1&modificationDate=1419338394000&api=v2)

**Documentação sobre datatable ainda melhor**

A documentação sobre *datatable* existente no Guia de Estilos foi complementada, indicando que os *templates mustache* não devem ser inseridos dentro do elemento da *datatable*.

Nota

Informações mais detalhadas podem ser obtidas no tópico *Datatable* do Guia de Estilos do Fluig.

## Social

**Novos métodos disponíveis na API pública**

Estão disponíveis na API pública *Relation*dois novos métodos: *canAccessByLogin* e *canAccessBySocialId*. Esses métodos permitem validar se usuários e comunidades podem interagr entre si quando a nuvem de relacionamento está habilitada.

Nota

Mais informações sobre os novos métodos podem ser obtidas na [API Pública](https://api.fluig.com/resource_RelationServiceRest.html) do Fluig.

## Correções

Nessa sessão listamos alguns bugs que matamos nessa atualização que garantem que tudo corra bem na sua plataforma.

- Emissão de notificações de acompanhamento de um documento quando ele pertence a um assunto de interesse do usuário e está configurado para emitir notificação.

- Exibição das *tags* ao visualizar as propriedades de um documento publicado na navegação de documentos.

- Aprovação de tarefas que foram agendadas e que fazem parte de um fluxo automático quando o prazo para conclusão está esgotado.

- *Upload* de arquivos no cadastro de *templates* de *e-mail*, localizado na aba Gerais do Painel de Controle.

- Retorno para a *timeline* depois de fechar a visualização de um documento que foi acessado a partir dela.

- Edição das regras de campos de formulários na configuração de processos.

- Publicação múltipla por meio de arquivo descritor utilizando a barra invertida ( \ ) como separador de pastas no caminho dos arquivos a serem publicados.

- Seleção da pasta destino para um formulário criado a partir da configuração de processos.

- Edição do gestor de um processo criado a partir do Fluig Studio para posterior exportação para o Fluig e visualização desse processo pelo seu gestor por meio da opção Minhas Tarefas Sob Gerência.

- Desativação de um usuário no Fluig que foi previamente inativado no Fluig Identity.

- Forma de buscar o diretório de *stubs* no momento de executar um serviço por meio de um desenvolvimento sobre a plataforma.

- Retorno de um *dataset* que pesquisa os dados de um formulário e utiliza uma *constraint* com SHOULD quando o formulário é armazenado em tabelas de banco de dados.

- *Upload* do arquivo de imagem de um ícone ao cadastrá-lo pela opção Cadastro de Ícones – localizada na aba Documentos do Painel de Controle – quando o sistema operacional utilizado pelo servidor é Linux.

- Direcionamento do *link* existente na aba Formulário de uma tarefa do processo AdHoc – quando ela está finalizada – para a aba Histórico, possibilitando visualizar o que foi realizado nas tarefas.

- Exibição de comunidades ocultas na listagem de comunidades nas quais o usuário participa na janela que permite compartilhar conteúdos.

- Geração de relatório XLS contendo os dados extraídos de formulários publicados em comunidades.

- Exibição do botão Responder de formulários publicados em comunidades quando o usuário é membro, não está marcada a opção Listar Conteúdo nas permissões do grupo para o formulário e o formulário pode ser respondido apenas uma vez.

- Agendamentos a partir dos tipos de atividades temporizadoras baseando-se por dia no Agendador de Tarefas.

- Funcionamento da Área de Transferência de arquivos da navegação de documentos.

- Literais que compõem as notificações apresentadas na tela de Configuração de Notificações.

- Publicação de anexos *workflow* em processos via *drag and drop* (arrastar e soltar).

- Apresentação da *datatable* com configuração básica quando são utilizados dados locais.

- Movimentação de solicitações que contêm formulário por usuários que possuem a matrícula extensa – mais de 50 caracteres.

- Ajuste na exibição de *widgets* para atribuição de permissão: os *widgets*Usuários, Papéis e Permissões não são exibidos como um recurso na janela Permissões, pois são exclusivos do administrador.

- Exportação de processos que contém o evento *Link* após uma atividade do tipo Exclusivo.Importante! Processos com *Links* já existentes devem ser exportados novamente para o Fluig, após atualização do servidor e do Fluig Studio.


<!-- anchors: Atualização1.4.4-ECM, Atualização1.4.4-FluigStore, Atualização1.4.4-Arquitetura, Atualização1.4.4-BPM, Atualização1.4.4-GuiadeEstilos, Atualização1.4.4-Social, Atualização1.4.4-Correções -->
