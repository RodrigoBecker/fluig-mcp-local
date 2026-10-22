---
title: "Plataforma ❙ Recursos de permissão em APIs, datasets e webservices"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=547233188"
scraped_at: "2026-03-09T04:04:38.524Z"
depth: 2
anchors: 4
child_links: 72
---

# Plataforma ❙ Recursos de permissão em APIs, datasets e webservices

# Falando de recursos de permissão em APIs, datasets e webservices...

---

Por meio das opções de permissão pode ser configurado o controle de acesso a todas as APIs públicas, *datasets* internos e todos os *webservices powered by* TOTVS Fluig. 

As permissões aplicadas são granulares: a segurança obedece à hierarquia, mas é possível conceder permissão individualmente nos métodos, ou seja, quem tem acesso a API completa, pode ter restrição a um determinado método.

Confira em [Permissões](/pages/viewpage.action?pageId=234455792) mais detalhes sobre as permissões apresentadas abaixo.

- [Buscar recurso](#)
- [Aplicar permissão](#)

![](/download/attachments/547233188/Permiss%C3%A3o%202.png?version=3&modificationDate=1749047761290&api=v2)

![](/download/attachments/547233188/Permiss%C3%A3o%203.png?version=3&modificationDate=1749047808357&api=v2)

## Recursos para desenvolvedores

---

| Descrição | Tipo | Nome do recurso | Opções de permissão |
| --- | --- | --- | --- |
| Descrição | Tipo | Nome do recurso | Opções de permissão |
| API no modelo swagger | API | Consulte o nome da API e dos métodos individualmente em https://api.fluig.com/. | Acessar: Quando ativada, permite acessar o recurso. |
| APIs para gerenciamento de Papéis | API Pública | Papéis | Todos: Quando ativada, permite acessar todas as APIs – de criação, alteração e exclusão.Criar: Quando ativada, permite acessar as APIs de criação.Alterar: Quando ativada, permite acessar as APIs de alteração.Excluir: Quando ativada, permite acessar as APIs de exclusão. |
| API no modelo antigo | API | Consulte o nome da API e dos métodos individualmente em https://api.fluig.com/old/. | Acessar: Quando ativada, permite acessar o recurso. |
| Webservice | API | Consulte o nome do webservice e os métodos individualmente na documentação técnica de Utilização de Webservices | Acessar: Quando ativada, permite acessar o recurso. |
| Dataset | DATASET | Para consultar o nome do dataset, acesse o recurso de Datasets do Painel de controle e filtre pelo tipo Interno.Atenção: Datasets internos gerados pelo cliente (a partir de formulários) não possuem controle de permissões. | Acessar: Quando ativada, permite acessar o recurso. |

Aplicação da permissão

Caso não seja realizada nenhuma alteração nessas permissões, por padrão os recursos permanecem com acesso liberado. A partir do momento em que é configurado um grupo, papel ou usuário com a permissão, somente quem teve a permissão liberada passa a ter acesso ao recurso. Com exceção dos usuários com perfil administrador, que sempre terão acesso aos recursos.

## Exemplo de permissão granular

---

É possível configurar a permissão ao recurso principal ou a cada método do recurso. Sendo que a permissão mais granular é a que prevalece.

Por exemplo: Configuro permissão para o grupo "AB" ao *webservice* *ECMDashBoardService* e permissão aos grupos "CD" e "EF" no método *ECMDashBoardService/findMyRequests.* Os usuários do grupo "AB" terão acesso a todos os métodos do *webservice* *ECMDashBoardService*, com exceção do método *findMyRequests*, que somente os usuários dos grupos "CD" e "EF" terão acesso.

Ao acessar uma API ou *webservice* que o usuário não tem permissão, será retornado erro de permissão. ![](/plugins/servlet/confluence/placeholder/unknown-macro?name=tooltip&locale=en_US&version=2)

**oculto**

Traduções:

[Plataforma ❙ Recursos de permiso en APIs, datasets y webservices](/pages/viewpage.action?pageId=555875972)

[Platform ❙ Permission features in APIs, datasets and webservices](/pages/viewpage.action?pageId=556381329)

Fique atento!

Esta documentação é válida a partir da atualização **Voyager (2.0)**. Se você utiliza uma atualização anterior, ela pode conter informações diferentes das quais você vê na sua plataforma.


<!-- anchors: Plataforma❙RecursosdepermissãoemAPIs,datasetsewebservices-FalandoderecursosdepermissãoemAPIs,datasetsewebservices..., Permissões, Plataforma❙RecursosdepermissãoemAPIs,datasetsewebservices-Recursosparadesenvolvedores, Plataforma❙RecursosdepermissãoemAPIs,datasetsewebservices-Exemplodepermissãogranular -->
