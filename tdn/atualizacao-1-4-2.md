---
title: "Atualização 1.4.2"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=173082776"
scraped_at: "2026-03-09T03:18:37.834Z"
depth: 2
anchors: 5
child_links: 41
---

# Atualização 1.4.2

Confira abaixo as novidades na atualização 1.4.2 do Fluig:

# BPM

**Exibição de formulário mais rápida**

Agora o Fluig conta com maior desempenho ao apresentar formulários do tipo Pai x Filho que contêm um número elevado de registros (600 registros, por exemplo), tornando a consulta do formulário ou a abertura do processo na próxima fase mais ágeis.

**Relatório de solicitações mais completo**

Agora, ao exportar uma consulta de solicitações com dados de atividades, é apresentado o horário de conclusão das atividades, além da data, e o responsável por elas mesmo quando o usuário inicial era um grupo/papel.

![](/download/attachments/173082776/SOCIALECMSUST-3221.png?version=1&modificationDate=1416837691000&api=v2)

****

**Ordenação de usuários na movimentação de solicitações**

Agora, os usuários apresentados na tela de seleção para o envio de uma atividade automática sem mecanismo de atribuição configurado são ordenados alfabeticamente, facilitando e agilizando a seleção.

![](/download/attachments/173082776/SOCIALECMSUST-3239.png?version=1&modificationDate=1416513316000&api=v2)

# Fluig Studio

**Formulários de acordo com o Fluig Style Guide**

Agora os formulários novos que são criados a partir do Fluig Studio contam com a formatação de acordo com o Fluig *Style Guide*.

Nota

Informações adicionais sobre o Fluig *Style Guide* podem ser obtidas em [style.fluig.com](https://style.fluig.com).

# Guia de Estilos

**Novo componente Switch Button – botão habilitar/desabilitar**

O novo componente foi criado para transformar elementos *checkbox* e *radio* em botões para habilitar e desabilitar. Basta informar apenas qual o elemento deve ser transformado. É muito útil para habilitar e desabilitar recursos e opções do Fluig. 

Nota

Informações adicionais sobre o componente podem ser obtidas em [style.fluig.com](https://style.fluig.com/javascript.html#switch-button).

![](/download/attachments/173082776/SOCIALECMSUST-3255.png?version=2&modificationDate=1416855890000&api=v2)

# Plataforma

**Help Online traduzido**

O *Help Online* do Fluig está atualizado com as novidades desta atualização e, agora, disponível em Inglês e Espanhol também

Nota

Para acessá-lo, acione Configurações - localizado no lado direito do nome de usuário - e, em seguida, acione Ajuda.

![](/download/attachments/173082776/SOCIALECMSUST-3241-2.png?version=1&modificationDate=1416514080000&api=v2)

![](/download/attachments/173082776/SOCIALECMSUST-3241-1.png?version=1&modificationDate=1416514076000&api=v2)

# Correções

Nessa sessão listamos alguns *bugs* que matamos nessa atualização que garantem que tudo corra bem na sua plataforma.

- Exibição de atividades finais na Consulta de Solicitações, *Analytics* e na exportação em XLS.

- Transferência de tarefas ente usuários utilizando consenso por meio de *Web Service*.Nota Mais informações podem ser obtidas em [Utilização de *Web Services*](/pages/viewpage.action?pageId=73084007).

- Cache de permissões para usuários, papéis, grupos e recursos deixou de ser *case-sensitive*.

- Apresentação e movimentação de tarefas de processos Ad-hoc para substitutos.

- Exibição do *status* das tarefas no histórico de solicitações.

- *Link* de direcionamento para a configuração de segurança contido na notificação recebida quando um usuário solicita permissão em um arquivo ou pasta da navegação de documentos. Nota A correção será válida apenas para novas solicitações de permissão.

- Edição do campo API de um serviço do tipo *Web Service*criado no Fluig Studio*.*

- Edição de *widgets* da página Home utilizando o Internet Explorer 11.

- Validação de caracteres durante a criação e edição de comunidades para não permitir aspas simples ou aspas duplas.

- Inicialização de solicitações de processos *workflow* que utilizam metalistas e formulários do tipo Pai x Filho.

- Publicação de formulários mobile que contêm *tags* do tipo "meta" como um campo de formulário.

- Apresentação da imagem de *zoom* após a exportação de formulários que utilizam campos do tipo Pesquisa através do Fluig Studio.

- Conversão de solicitações que possuem um número elevado de atividades.

- Publicação de pasta privada quando utilizado o limite de cota por usuário da pasta Meus Documentos.

- Visualização de relatórios BIRT no Fluig quando realizada a conversão do ECM 3.0 para o Fluig.

- Exibição das informações de anexos incluídos em processos por meio de *upload* ou da navegação de documentos.

- Compatibilidade de formulários gerados pelo Fluig Studio com o Internet Explorer 10 e 11.

- Exibição de pastas da navegação de documentos para usuários comuns com permissão de leitura. 

- *Upload* de arquivos na Navegação de Documentos utilizando o Internet Explorer 9.

- Consulta de relatórios BIRT publicados pesquisando pelo conteúdo “*” quando é utilizado o navegador Internet Explorer. 

- Exportação de eventos globais do Fluig Studio para mais de um servidor Fluig.

- Validação de datas no apontamento de horas de atividades de processos.

- Validação de caracteres especiais inseridos em formulários do Fluig, tanto para formulários de processos quanto para formulários publicados na Navegação de Documentos.

- Consulta de *dataset* de formulário utilizando uma *constraint*em um dos campos do formulário em ambientes com banco de dados Oracle.

- Utilização dos métodos do hAPI e o getValue em eventos relacionados ao evento intermediário condicional no BPMN 2.0 referentes a formulários. 

- *Constraints* do tipo MUST_NOT e SHOULD utilizadas em um *dataset* customizado em ambientes Fluig com banco de dados SQL Server.Nota Informações adicionais sobre *datasets* customizados e *constraints* MUST_NOT e SHOULD podem ser obtidas em [Customização de *Datasets*](/display/fluig/Desenvolvimento+de+Datasets).


<!-- anchors: Atualização1.4.2-BPM, Atualização1.4.2-FluigStudio, Atualização1.4.2-GuiadeEstilos, Atualização1.4.2-Plataforma, Atualização1.4.2-Correções -->
