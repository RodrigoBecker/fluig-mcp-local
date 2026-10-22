---
title: "Atualização 1.4.11"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=185757705"
scraped_at: "2026-03-09T03:17:56.298Z"
depth: 2
anchors: 4
child_links: 41
---

# Atualização 1.4.11

¿Habla Español? Haga [clic aquí](https://tdn.totvs.com/pages/viewpage.action?pageId=187826421) para ver el Release Notes en Español.

 Do you speak English? [click here](https://tdn.totvs.com/display/fluigeng/Version+1.4.11) to view the Release Notes in English.

Confira abaixo as novidades na atualização 1.4.11 do Fluig:

## Arquitetura

**API Pública versão 2.0!**

Alguns métodos da API Pública do Fluig evoluíram para retornarem dados padronizados, incluindo “*content* ” e “*message*”. Esses métodos estão disponíveis no mesmo local na API Pública, porém, separados pela versão 2 (**v2**).

**Exemplo:** “/wcm/version” e “/wcm/version**/v2**”.

Os métodos que agora possuem uma nova versão são: 

- [/social/user/logged/v2](https://api.fluig.com/resource_UserServiceRest.html#path__social_user_logged_v2.html);
- [/sociable/comments/v2/{sociableId}](https://api.fluig.com/resource_SociableServiceRest.html#path__sociable_comments_v2_-sociableId-.html);
- [/ecm/sociabledocument/counter/v2/{id}/{version}](https://api.fluig.com/resource_SociableDocumentServiceRest.html#path__ecm_sociabledocument_counter_v2_-id-_-version-.html);
- [/ecm/sociabledocument/comment/v2](https://api.fluig.com/resource_SociableDocumentServiceRest.html#path__ecm_sociabledocument_comment_v2.html);
- [/ecm/sociabledocument/comment/v2/{id}/{version}](https://api.fluig.com/resource_SociableDocumentServiceRest.html#path__ecm_sociabledocument_comment_v2_-id-_-version-.html);
- [/ecm/sociabledocument/like/v2](https://api.fluig.com/resource_SociableDocumentServiceRest.html#path__ecm_sociabledocument_like_v2.html);
- [/ecm/sociabledocument/like/v2/{id}/{version}](https://api.fluig.com/resource_SociableDocumentServiceRest.html#path__ecm_sociabledocument_like_v2_-id-_-version-.html);
- [/alert/service/findAll/v2](https://api.fluig.com/resource_AlertServiceRest.html#path__alert_service_findAll_v2.html);
- [/alert/alerts/countUnread/v2](https://api.fluig.com/resource_AlertServiceRest.html#path__alert_alerts_countUnread_v2.html);
- [/social/favorite/bytype/v2/{type}](https://api.fluig.com/resource_FavoriteServiceRest.html#path__social_favorite_bytype_v2_-type-.html);
- [/social/community/communitiesOrderFavorites/v2/{alias}](https://api.fluig.com/resource_CommunityServiceRest.html#path__social_community_communitiesOrderFavorites_v2_-alias-.html);
- [/social/community/v2/{alias}](https://api.fluig.com/resource_CommunityServiceRest.html#path__social_community_v2_-alias-.html);
- [/wcm/version/v2](https://api.fluig.com/resource_WCMServiceRest.html#path__wcm_version_v2.html);
- [/relation/following/v2/{alias}](https://api.fluig.com/resource_RelationServiceRest.html#path__relation_following_v2_-alias-.html);
- [/relation/followers/v2/{alias}](https://api.fluig.com/resource_RelationServiceRest.html#path__relation_followers_v2_-alias-.html);
- [/sociable/likers/v2/{sociableId}](https://api.fluig.com/resource_SociableServiceRest.html#path__sociable_likers_v2_-sociableId-.html);
- [/social/community/participants/v2/{alias}](https://api.fluig.com/resource_CommunityServiceRest.html#path__social_community_participants_v2_-alias-.html)

Importante

Se você já utiliza algum desses métodos, fique tranquilo: não é necessário efetuar nenhuma alteração nos apps desenvolvidos para o Fluig, pois os métodos originais não foram alterados.

Você precisará efetuar adequações se desejar utilizar os métodos na nova versão da API pública.

Calma, os métodos antigos continuarão funcionando - eles ainda não serão descontinuados. Mas recomendamos utilizar os novos métodos no desenvolvimento de apps para o Fluig.

**Agende a exclusão de arquivos temporários**

Agora é possível definir quando os arquivos do diretório temporário do servidor do Fluig devem ser excluídos, liberando espaço em disco. Para isso, basta criar uma tarefa do tipo Limpar Arquivos Temporários de Documentos, no Agendador de Tarefas, e definir sua periodicidade para que os arquivos temporários de documentos sejam excluídos.

Nota

Esse recurso pode ser utilizado quando há um grande volume diário de *uploads* de documentos na plataforma.

![](/download/attachments/185757705/SOCIALECMSUST-4204.png?version=1&modificationDate=1430743558000&api=v2)

## BPM

**Atualize a listagem de tarefas sempre que desejar**

Agora é possível atualizar a listagem de tarefas exibidas em cada aba da Central de Tarefas. Basta acionar a opção Atualizar, localizado na barra de ações, para obter atualizações das solicitações exibidas.

![](/download/attachments/185757705/SOCIALECMSUST-4195.png?version=3&modificationDate=1431346112000&api=v2)

** **

## ECM

**Obtenha detalhes do documento na cópia controlada**

Agora é possível obter mais detalhes do documento ao criar cópia controlada a partir de novas variáveis disponíveis:

- *Webdesk.Revision: *revisão do documento;
- *Webdesk.**Comments:*comentários;
- *Webdesk.VersionDescription: *descrição da versão;
- *Webdesk.Tag: *tags do documento.

Saiba mais

Informações mais detalhadas podem ser obtidas em [Impressão de Cópia Controlada](https://tdn.totvs.com/pages/viewpage.action?pageId=152802071).

** **

**Consulte a aprovação de documentos a partir de datasets******

Nesta atualização do Fluig está mais fácil criar relatórios sobre aprovação de documentos. Disponibilizamos o *dataset* “*DocumentApprovalHistory*” que permite que você consulte o histórico de aprovações e suas respectivas informações.

Se interessou?

Obtenha mais detalhes sobre o novo *dataset* em [*Datasets* internos Fluig](https://tdn.totvs.com/display/fluig/Datasets+internos+Fluig).

## Correções 

Nessa sessão listamos alguns *bugs* que matamos nessa atualização que garantem que tudo corra bem na sua plataforma.

- Utilização do caractere “ç” nas *tags* das propriedades de uma pasta.

- Execução de tarefas agendadas criadas pelo Fluig Studio e exportadas para o Fluig quando a frequência de execução é dia do mês.

- Movimentação de atividade do tipo Timer que está em execução após criar uma nova versão do processo que a contém.

- Movimentação de *workflow* quando é utilizado o componente *Gateway* Inclusivo e nenhuma condição é atendida.

- Definição de regras para opções de um campo do tipo *check box* de formulários de processos.

- Visualização de imagem que foi inserida por *upload* em artigos publicados em comunidades.

- Movimentação de solicitação que possui fluxo automático expirado.

- Exibição de mensagens de inconsistência quando um usuário se autentica na plataforma sem ter ocorrido nenhuma inconsistência.

- Movimentação de solicitações que possuem formulário após preenche-lo e publicação dos dados do registro de formulário na navegação de documentos.

- Configuração de permissões de *widgets* incluídos em páginas de comunidades.

- Exibição da opção Editar somente para arquivos publicados que são suportados pelo Fluig e podem ser editados.

- Inclusão de galerias, imagens e vídeos em comunidades por usuários que são membros e possuem permissão de gravação.

- Busca por conteúdo de documentos que estão compactados no formato .zip.


<!-- anchors: Atualização1.4.11-Arquitetura, Atualização1.4.11-BPM, Atualização1.4.11-ECM, Atualização1.4.11-Correções -->
