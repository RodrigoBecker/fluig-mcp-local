---
title: "Atualização 1.4.9"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=185740114"
scraped_at: "2026-03-09T03:18:05.020Z"
depth: 2
anchors: 4
child_links: 43
---

# Atualização 1.4.9

¿Habla Español? Haga [clic aquí](https://tdn.totvs.com/pages/viewpage.action?pageId=185750308) para ver el Release Notes en Español.

 Do you speak English? [click here](https://tdn.totvs.com/display/fluigeng/Version+1.4.9) to view the Release Notes in English.

Confira abaixo as novidades na atualização 1.4.9 do Fluig:

## BPM

**Mostre o que está sendo feito na plataforma**

De acordo com a área de negócio, um processo *workflow* deve atender muitos requisitos - validar dados do usuário, integrar dados com o ERP, sistemas legados, etc. - e o que mostrar para o usuário enquanto esses requisitos são processados pelo Fluig? Agora, com esta atualização é possível exibir uma mensagem de acordo com a ação que o Fluig está realizando, conforme os dados informados no formulário. É sério:

![](/download/attachments/185740114/SOCIALECMSUST-3857.gif?version=2&modificationDate=1427811455000&api=v2) 

Se interessou?

Confira um projeto de exemplo [aqui](https://git.fluig.com/projects/SAMPLES/repos/workflow-loading/browse), e mais detalhes técnicos em [Desenvolvimento de *Workflow*](https://tdn.totvs.com/display/fluig/Desenvolvimento+de+Workflow#DesenvolvimentodeWorkflow-Acompanhamentodeeventos).

## ECM

**Consulte comentários de documentos pela API pública**

Os métodos “*listDocument*” e “*listDocumentWithChildren*” da API pública utilizados para listar documentos estão mais completos. Agora eles contam com o comentário do documento – atributo “*additionalComments*”.

Quer saber mais?

Acesse a [API pública](https://api.fluig.com/resource_DocumentServiceRest.html#path__ecm_document_listDocument_-folderId-.html) e confira os métodos complementados.

## Social  

**Ativação e desativação de usuários agora na API Pública também** 

Está disponível na API Pública do Fluig os serviços para ativar e desativar usuários, que são muito úteis para desenvolvimentos sobre a plataforma e integrações com *softwares* terceiros para gestão de usuários ativos na plataforma. 

Se interessou?

Acesse a [API pública](https://api.fluig.com/resource_UserServiceRest.html#path__social_user_disable_-alias-.html) do Fluig e confira essa novidade.

**Serviço para criação de sessão OAuth** 

A API pública do Fluig agora conta com o serviço que possibilita a geração de uma sessão *OAuth* para uma aplicação a partir de uma outra aplicação já autenticada. 

Quer saber mais?

Acessa a [API pública](https://api.fluig.com/resource_WCMServiceRest.html#path__wcm_oauth_generateKeys.html) do Fluig e obtenha mais detalhes.

## Correções

Nessa sessão listamos alguns *bugs* que matamos nessa atualização que garantem que tudo corra bem na sua plataforma.

- Publicação e visualização de imagens com o formato .jpeg quando é utilizado o visualizador interno.

- Acesso a pastas da navegação de documentos que foram criadas a partir de *webservices*.

- Impressão de cópia controlada de documentos que são anexos de processos *workflow*.

- Visualização da solicitação principal, na área Minhas Solicitações da Central de Tarefas, quando o processo possui subprocessos em atividades paralelas.

- Acompanhamento visual no desenho do processo para exibir solicitações cujo fluxo possui subprocessos em atividades paralelas.

- Exclusão de grupo de trabalho *workflow* do cadastro de um usuário.

- Utilização de estilos de formatação de texto no editor de conteúdo.

- Consulta por meio de *datasets* em campos de formulário do tipo texto que possuem apóstrofo.

- Movimentação da solicitação quando o formulário possui mais de uma versão.

- Forma de verificação e criação de índices em bancos de dados Oracle que impactam na inicialização da plataforma.

- Busca em *zooms* padrão e personalizados após informar o conteúdo a ser considerado e pressionar a tecla Enter.  

- Retorno de usuários ao efetuar uma consulta utilizando o *dataset “colleague*” sem considerar usuários internos da plataforma. 

- Movimentação de solicitações que possuem formulário  após inserir dados duplicados em um campo que possui validação.

- Segurança de importação e exportação de processos, determinando que somente usuários com permissão na página de configuração de processos podem realizar essas ações.

- Movimentação de solicitações em dispositivos móveis quando os dados de formulário Pai x Filho são armazenados em tabelas de banco de dados.

- Geração de relatórios BIRT que utilizam *datasets* que instanciam serviços.Nota Confira como desenvolver relatórios BIRT em [Desenvolvimento de Relatórios](https://tdn.totvs.com/pages/viewpage.action?pageId=74646056).

- Apresentação de mensagem explicativa quando um usuário deseja acessar um conteúdo privado – a partir do *link* correspondente ao conteúdo – de uma comunidade na qual ele não participa.

- Padronização no retorno de inconsistências ocorridas com os parâmetros “*publisherID*” ou “*colleagueID*” do método “*createFolder*” do *webservice* “*ECMFolderService*” quando utilizado em integrações.Nota Mais informações podem ser obtidas em [Utilização de *Webservices*](https://tdn.totvs.com/pages/viewpage.action?pageId=73084007).


<!-- anchors: Atualização1.4.9-BPM, Atualização1.4.9-ECM, Atualização1.4.9-Social, Atualização1.4.9-Correções -->
