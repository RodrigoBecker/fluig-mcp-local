---
title: "Atualização 1.3.2"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=146966504"
scraped_at: "2026-03-09T03:19:54.546Z"
depth: 2
anchors: 5
child_links: 37
---

# Atualização 1.3.2

Confira abaixo as novidades na atualização 1.3.2 do Fluig:

# ECM

**Melhoria na publicação de documentos via WebService**

Agora é possível publicar documento via WebService em nome de outro usuário, utilizando um usuário de integração para autenticação.

Nota

Acompanhe os detalhes dos métodos *createSimpleDocument* e *createDocument* na página [Utilização de Webservices](/pages/viewpage.action?pageId=73084007).

****

**Mais eficiência na busca de registros**

A busca de registro de um zoom de formulário está mais eficaz, agora é possível criar formulários que buscam ainda mais registros garantindo performance e retornando resultados precisos.

**Customize mais!**

Agora é possível interceptar e adicionar destinatários aos emails enviados pelo Fluig através de customização, utilizando o evento global onNotify.

Nota

Veja os detalhes na página [Desenvolvimento de Eventos](/display/fluig/Desenvolvimento+de+Eventos). Customize!

# BPM

**Maior performance na movimentação de solicitações em bloco**

A capacidade de movimentação de solicitações em bloco foi aprimorada, garantindo maior performance e permitindo que grandes quantidades de solicitações sejam movimentadas de uma vez só.

![](/download/attachments/146966504/central2.png?version=1&modificationDate=1404749880000&api=v2)![](/download/attachments/146966504/central.png?version=1&modificationDate=1404749771000&api=v2)

**Alteração de solicitações workflow via webservices**

Agora é possível alterar o prazo de uma solicitação workflow configurado para um pool de recursos via *webservices*. Detalhes sobre *webservices* acesse o guia [Utilização de Webservices](/pages/viewpage.action?pageId=73084007).

**Mensagens mais claras para o usuário**

Otimizada mensagens que são apresentadas ao usuário ao responder um formulário de uma comunidade. Agora, as mensagens de validação dos campos são apresentadas de forma mais clara, indicando exatamente a inconsistência que deve ser corrigida pelo usuário para salvar o formulário com sucesso.

**Melhoria visual na modelagem de processos na web**

Mais comodidade ao verificar os componentes de modelagem de processos em monitores de resoluções menores (ex: 1024x768).

![](/download/attachments/146966504/2509.PNG?version=1&modificationDate=1404820298000&api=v2)

**Melhoria ao 'Iniciar Solicitações' no Fluig**

Foram realizadas melhorias para garantir a inicialização de solicitações mesmo em cenários mais complexos. Crie processos com formulários vinculados, adicione customizações, crie diferentes regras e inicie as solicitações com tranquilidade!

![](/download/attachments/146966504/2423.PNG?version=1&modificationDate=1404500386000&api=v2)

**Otimização de Formulários no Internet Explorer**

Interaja com todos os tipos de campos de formulários em processos workflow. Utilize campos do tipo data, text, textArea, number para compor seu formulário.

**Aprimoramos a visualização de registros de formulário**

Agora, o Fluig apresenta maior consistência na exibição dos registros de formulários criados a partir de processos workflow, que utilizam campos do tipo 'Múltiplos Registros'.

# Social

**Compartilhamento de conteúdo**

Agora quando compartilhamos conteúdo podemos fazer nossos comentários sobre o que estamos divulgando para nosso colegas mantendo o conteúdo original da publicação. Isso torna a informação mais rica deixando todos +Conectados!

![](/download/attachments/146966504/evidencia_compartilhamento.jpg?version=1&modificationDate=1404751096000&api=v2)

# WCM

**Ficou mais ágil gerenciar grupos e usuários no Fluig**

Otimizamos o relacionamento entre Usuários e Grupos! Adicione grupos a determinado usuário, consulte os grupos que o usuário participa com maior facilidade!

**Mais fluidez na criação de layouts**

Os layouts criados a partir do Fluig Studio, agora estão mais fluídos. A criação ocorre sem causar impactos visuais, permitindo utilizar layouts customizados sem preocupação! 

Nota

Você que possui layouts criados com o Fluig 1.2.X, os passos para estabilização são simples.

Atualize o Fluig Studio ([http://update.fluig.com](https://update.fluig.com)) e realize novamente a exportação do layout para o servidor Fluig.

**Otimizamos a criação de páginas**

Foi otimizado o acesso às páginas públicas criadas no Fluig. Páginas públicas são recursos que podem ser acessados dentro do Fluig mesmo sem fazer login. Crie páginas, acesse, edite, remova!

Lembre-se

Para acessar páginas públicas sem autenticação, deve-se retirar os caracteres "/p" da URL. URL's com os caracteres "/p" sempre passam pelo processo de autenticação

![](/download/attachments/146966504/2374.PNG?version=1&modificationDate=1404500383000&api=v2)

**Novidades na Indexação de Documentos**

Agora é possível realizar a indexação de documentos através do Agendador de Tarefas. Sua funcionalidade é similar a opção*"Indexação de conteúdo novo ou alterado"* existente na indexação, porém, através do Agendador de Tarefas, você poderá definir um horário específico para execução. 

![](/download/attachments/146966504/2448.PNG?version=1&modificationDate=1404500432000&api=v2)

**Otimização na edição de Páginas no Fluig**

Foram feitas melhorias para a edição de páginas criadas. Ao editar uma página, as alterações são criadas em um rascunho e apenas após publicá-la as alterações são visíveis na página pelos usuários. Durante a edição você é notificado sobre isso e caso desejar descartar um rascunho de página editada, basta acessar a opção *'Configurações > Descartar Rascunho'*.

![](/download/attachments/146966504/paginas.png?version=1&modificationDate=1404752984000&api=v2)

# Fluig Studio

**Melhorias na Modelagem de Atividades Serviço**

Agora ficou mais fácil verificar e utilizar todas as propriedades das atividades adicionadas ao editor de modelagem.

**Renomeie diagramas já criados**

Nesta atualização, a partir do Fluig Studio é possível renomear elementos já criados sem perder suas propriedades. Basta uma única ação do usuário: clique sobre o diagrama com o botão direito e em seguida em 'Recriar -> Renomear'.

![](/download/attachments/146966504/studio.png?version=2&modificationDate=1404751901000&api=v2)

**Melhorias visuais na edição de processo**

Foram realizadas melhorias referente à atividades com nomes extensos. Além disso processos modelados no Fluig Studio são facilmente exportados para o servidor do Fluig com mais segurança sem causar inconsistências.

**Criação de Webservices CXF**

Agora ficou mais completo! No cadastro de webservices do tipo CXF é possível informar o caminho do arquivo de *bind* em sua geração.

![](/download/attachments/146966504/tela%20servi%C3%A7o.png?version=1&modificationDate=1404821024000&api=v2)


<!-- anchors: Atualização1.3.2-ECM, Atualização1.3.2-BPM, Atualização1.3.2-Social, Atualização1.3.2-WCM, Atualização1.3.2-FluigStudio -->
