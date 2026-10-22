---
title: "Identity | Tutorial da API SCIM REST"
url: "https://tdn.totvs.com/display/public/fluig/Identity+%7C+Tutorial+da+API+SCIM+REST"
scraped_at: "2026-03-09T05:13:25.882Z"
depth: 3
anchors: 97
child_links: 58
---

# Identity | Tutorial da API SCIM REST

# Índice

# APIs para User Experience

---

Este tutorial explica como utilizar as APIs Identity para as funcionalidades de User Experience baseadas em SCIM. APIs baseadas em SCIM são um subconjunto de APIs REST do Identity, que estão documentadas neste artigo.

Localização das APIs: [https://app.fluigidentity.com/rest/swagger-ui/index.html](https://app.fluigidentity.com/rest/swagger-ui/index.html)

## Prepare o Ambiente

Este tutorial utiliza um cliente SOAP para acessar as APIs REST do Identity. Este conjunto de instruções demonstra a configuração do cliente.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)

 - Faça o *download* do aplicativo SoapUI em [http://www.soapui.org/.](http://www.soapui.org/)

 - Abra o aplicativo SoapUI.

 - Faça o *download* do projeto teste CloudPass-Rest-soapui-project.xml.

 - Importe o projeto teste CloudPass-Rest-soapui-project.xml

![](/download/attachments/221554568/scim_1.jpeg?version=2&modificationDate=1519405008000&api=v2)

 - Clique em **File** → **Import Project**.

![](/download/attachments/221554568/scim_3.jpeg?version=2&modificationDate=1519407005000&api=v2)

 - Selecione o arquivo CloudPass-Rest-soapui-project.xml.

![](/download/attachments/221554568/scim_4.jpeg?version=2&modificationDate=1519407040000&api=v2)

## Cliente SOAP para Windows

O projeto importado possui exemplos de dados e chamadas das APIs. Para entender a estrutura da API, podemos observar a chamada Create User.

Lembre-se de definir o *endpoint* para o *sandbox* de desenvolvedores.

- [Abrir requisição](#)
- [Área de requisição](#)

 - Navegue para Users → Create User → Post e clique em Request 1 conforme a imagem abaixo:

 1. É o nome da API e seu caminho relativo

 2. É o método HTTP da API

 3. É o link da janela de requisição. Dê um duplo clique para abrir a janela de detalhes da API.

![](/download/attachments/221554568/scim_5.jpeg?version=2&modificationDate=1519407248000&api=v2)

 - Na imagem abaixo:

 1. Contém a área para parâmetros de URL.

 2. Contém a área do corpo da requisição HTTP.

 3. Contém o botão **Send request**.

![](/download/attachments/221554568/scim_6.jpeg?version=2&modificationDate=1519407747000&api=v2)

# APIs de Usuário

---

As APIs de Usuário possuem quatro funções: *Create, Get, Update e Delete*. Esta sessão irá utilizar cinco passos para demonstrar essas funções.

- Criar um novo usuário
- Obter os dados de um usuário pelo ID
- Atualizar usuário
- Remover um usuário pelo ID
- Ao tentar obter o usuário removido, a chamada retorna um erro

![](/download/attachments/221554568/scim_7.jpeg?version=2&modificationDate=1519409469000&api=v2)

## Criar um novo usuário

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)

 - Navegue para Users → Create User → POST e clique em Request 1.

![](/download/attachments/221554568/scim_8.jpeg?version=2&modificationDate=1519409790000&api=v2)

 - Insira os dados do novo usuário, e clique no botão Send.

![](/download/attachments/221554568/scim_9.jpeg?version=2&modificationDate=1519410067000&api=v2)

 - Verifique o retorno clicando na aba JSON.

![](/download/attachments/221554568/scim_10.jpeg?version=2&modificationDate=1519410109000&api=v2)

## Obter dados do usuário pelo ID

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)

 - Navegue para Users → Get User by Id → GET e clique em Request 1.

![](/download/attachments/221554568/scim_12.jpeg?version=2&modificationDate=1519410495000&api=v2)

 - Insira o valor do userId na área de parâmetros de URL.

![](/download/attachments/221554568/scim_13.jpeg?version=2&modificationDate=1519410584000&api=v2)

 - Clique no botão *Send request*, aguarde o resultado e verifique o mesmo.

![](/download/attachments/221554568/scim_14.jpeg?version=2&modificationDate=1519410645000&api=v2)

## Atualizar usuário

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)

 - Navegue para Users → Update User → PUT e clique em Request 1.

![](/download/attachments/221554568/scim_15.jpeg?version=2&modificationDate=1519410747000&api=v2)

 - Mude o campo displayName para "jacob-update".

![](/download/attachments/221554568/scim_16.jpeg?version=2&modificationDate=1519410821000&api=v2)

 - Clique no botão Send request, aguarde o resultado e então verifique o mesmo.

![](/download/attachments/221554568/scim_17.jpeg?version=2&modificationDate=1519410866000&api=v2)

## Remover usuário pelo userId

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)

 - Navegue para Users → Delete User → DELETE e clique em Request 1.

![](/download/attachments/221554568/scim_17a.jpeg?version=3&modificationDate=1519416658000&api=v2)

 - Insira o userId.

![](/download/attachments/221554568/scim_18.jpeg?version=2&modificationDate=1519414127000&api=v2)

 - Clique no botão Send request, aguarde o resultado e verifique o mesmo.

![](/download/attachments/221554568/scim_19.jpeg?version=2&modificationDate=1519414198000&api=v2)

## Ao tentar obter um usuário removido, a chamada retorna erro

Use a chamada [GET](#Identity|TutorialdaAPISCIMREST-getuser) para o ID do usuário que acabou de ser removido (veja acima).

![](/download/attachments/221554568/scim_20.jpeg?version=2&modificationDate=1519414338000&api=v2)

# API de Recursos

---

Recursos são implementados para serem utilizados como opções de menu, mas podem ser estendidos para outras aplicações. Nesta seção nós iremos aprender como criar, listar e deletar um recurso.

Este cenário de teste segue os seguintes casos de teste.

- Criar recursos
- Obter o recurso menu1 pelo ID
- Obter todos os recursos de aplicações
- Remover o recurso menu1 pelo ID

## Criar recursos

Irá criar três recursos: menu1, menu2 e menu3 para aplicação

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)

 - Navegue para Resources → Create Resource → POST e clique em Request 1.

![](/download/attachments/221554568/ScimResources_1.jpeg?version=2&modificationDate=1519414711000&api=v2)

 - Insira os dados dos recursos menu1, menu2, menu3 e o applicationId.

![](/download/attachments/221554568/ScimResources_2.jpeg?version=2&modificationDate=1519414755000&api=v2)

 - Clique no botão Send request, aguarde o resultado e verifique o mesmo.

![](/download/attachments/221554568/ScimResources_3.jpeg?version=2&modificationDate=1519414799000&api=v2)

## Obter o recurso menu1 pelo ID

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)

 - Navegue para Resources → Get Resource → GET e clique em Request 1.

![](/download/attachments/221554568/ScimResources_4.jpeg?version=2&modificationDate=1519414889000&api=v2)

 - Insira o ID do menu1.

![](/download/attachments/221554568/ScimResources_5.jpeg?version=2&modificationDate=1519414948000&api=v2)

 - Clique no botão Send request, espere pelo resultado e verifique o mesmo.

![](/download/attachments/221554568/ScimResources_6.jpeg?version=2&modificationDate=1519414992000&api=v2)

## Obter todos os recursos de aplicações

Irá obter três recursos: menu1, menu2, menu3.

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)

 - Navegue para Resources → Get All Resources → GET e clique em Request 1.

![](/download/attachments/221554568/ScimResources_7.jpeg?version=2&modificationDate=1519416774000&api=v2)

 - Insira o applicationId.

![](/download/attachments/221554568/ScimResources_8.jpeg?version=2&modificationDate=1519416813000&api=v2)

 - Clique no botão Send request, espere pelo resultado e verifique o mesmo.

![](/download/attachments/221554568/ScimResources_9.jpeg?version=2&modificationDate=1519416876000&api=v2)

## Remover o recurso menu1 pelo ID

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)

 - Navegue para Resources → Delete by Id → DELETE e clique em Request 1.

![](/download/attachments/221554568/ScimResources_10.jpeg?version=3&modificationDate=1519417461000&api=v2)

 - Insira o ID do recurso menu1.

![](/download/attachments/221554568/ScimResources_11.jpeg?version=2&modificationDate=1519417499000&api=v2)

 - Clique no botão Send request, espere pelo resultado e verifique o mesmo.

# APIs de Papéis

---

Papéis são conexões entre usuários e direitos.

Este cenário de testes inclui o seguinte teste de caso:

- Criar dois papéis: "user" e "admin" para a empresa

## Criar dois papéis: "user" e "admin" para a empresa

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)

 - Navegue para Roles → Create Roles → POST e clique em Request 1.

![](/download/attachments/221554568/Roles_1.jpeg?version=2&modificationDate=1519646070000&api=v2)

 - Insira o valor companyId e os dados para os papéis "user" e "admin".

![](/download/attachments/221554568/Roles_2.jpeg?version=2&modificationDate=1519646137000&api=v2)

 - Clique no botão Send request, espere pelos resultados e verifique o retorno.

# APIs de Direitos

---

Direitos são como os recursos são atribuídos aos usuários.

Este cenário de testes contém os seguintes casos de teste:

- Criar o usuário "Jacob"
- Criar os recursos "menu1", "menu2", "menu3"
- Atribuir os recursos "menu1", "menu2" para o usuário "Jacob"
- Deletar todos os recursos com direitos do usuário "Jacob"

## Criar o usuário "Jacob"

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)

 - Navegue para Users → Create User → POST e clique em Request 1.

![](/download/attachments/221554568/Entitlements_1.jpeg?version=3&modificationDate=1519646306000&api=v2)

 - Insira os dados do novo usuário e clique no botão Send.

![](/download/attachments/221554568/Entitlements_2.jpeg?version=2&modificationDate=1519646348000&api=v2)

 - Aguarde os resultados e verifique os mesmos.

![](/download/attachments/221554568/Entitlements_3.jpeg?version=2&modificationDate=1519646400000&api=v2)

## Criar os recursos "menu1", "menu2", "menu3"

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)

 - Navegue para Resources → Get All Resources of Application → GET e clique em Request 1.

![](/download/attachments/221554568/Entitlements_4.jpeg?version=2&modificationDate=1519647530000&api=v2)

 - Insira os dados dos recursos menu1, menu2 e menu3 e preencha o applicationId.

![](/download/attachments/221554568/Entitlements_5.jpeg?version=2&modificationDate=1519647487000&api=v2)

 - Clique no botão Send request, espere os resultados e verifique o mesmo.

![](/download/attachments/221554568/Entitlements_6.jpeg?version=2&modificationDate=1519647604000&api=v2)

## Atribuir os recursos "menu1" e "menu2" para o usuário "Jacob"

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)

 - Navegue para Entitlements → Assign Resources to User → POST e clique em Request 1.

 - Insira o userId e o valor do ID dos recursos "menu1" e "menu2".

![](/download/attachments/221554568/Entitlements_11.jpeg?version=2&modificationDate=1519647876000&api=v2)

 - Clique no botão Send request, espere pelo resultado e verifique o mesmo.

![](/download/attachments/221554568/Entitlements_12.jpeg?version=2&modificationDate=1519648335000&api=v2)

## Deletar todos os recursos com direitos do usuário "Jacob"

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)

 - Navegue para Entitlements → Unassign all Resources to User → DELETE e clique em Request 1.

 - Insira o userId.

 - Clique no botão Send request, espere pelo resultado e verifique se o mesmo não possui nenhum direito.

# APIs de Favoritos

---

Marcações de favoritos adicionadas a recursos para o usuário.

Este cenário de teste incluí os seguintes casos de teste:

- Adicionar o recurso "menu2" como favorito do usuário "Jacob"
- Obter os favoritos do usuário "Jacob" , irá retornar "menu2"
- Remover os favoritos do usuário "Jacob"

## Adicionar o recurso "menu2" como favorito do usuário "Jacob"

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)

 - Navegue para Favorites → Add Favorites to User → POST e clique em Request 1.

![](/download/attachments/221554568/image2015-12-18%2016_14_56.png?version=1&modificationDate=1519649214000&api=v2)

 - Insira o userId e o ID do recurso "menu2" como favorito.

![](/download/attachments/221554568/image2015-12-18%2016_15_10.png?version=1&modificationDate=1519649283000&api=v2)

 - Clique no botão Send request, espere pelo resultado e verifique o mesmo.

![](/download/attachments/221554568/image2015-12-18%2016_15_22.png?version=1&modificationDate=1519649336000&api=v2)

## Obter os favoritos do usuário "Jacob", irá retornar "menu2"

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)

 - Navegue para Favorites → Get user's Favorites → GET e clique em Request 1.

![](/download/attachments/221554568/image2015-12-18%2016_15_49.png?version=1&modificationDate=1519649451000&api=v2)

 - Insira o userId.

 - Clique no botão Send request, espere pelo resultado e verifique o mesmo.

## Remover os favoritos do usuário "Jacob"

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)

 - Navegue para Favorites → Delete user's Favorites → DELETE e clique em Request 1.

 - Insira o userId.

 - Clique no botão Send request, espere o resultado e verifique o mesmo. Nenhum dado de favoritos irá aparecer.


<!-- anchors: Identity|TutorialdaAPISCIMREST-Índice, Identity|TutorialdaAPISCIMREST-APIsparaUserExperience, Identity|TutorialdaAPISCIMREST-PrepareoAmbiente, ambiente, ambiente-872616687, ambiente-872616688, ambiente-872616689, Identity|TutorialdaAPISCIMREST-ClienteSOAPparaWindows, cliente_soap, cliente_soap-1276077404, cliente_soap--520702447, Identity|TutorialdaAPISCIMREST-APIsdeUsuário, Identity|TutorialdaAPISCIMREST-Criarumnovousuário, create_user, create_user-872616687, create_user-872616688, create_user-872616689, Identity|TutorialdaAPISCIMREST-ObterdadosdousuáriopeloIDgetuser, get_user, get_user-872616687, get_user-872616688, get_user-872616689, Identity|TutorialdaAPISCIMREST-Atualizarusuário, update_user, update_user-872616687, update_user-872616688, update_user-872616689, Identity|TutorialdaAPISCIMREST-RemoverusuáriopelouserId, delete_user_by_id, delete_user_by_id-872616687, delete_user_by_id-872616688, delete_user_by_id-872616689, Identity|TutorialdaAPISCIMREST-Aotentarobterumusuárioremovido,achamadaretornaerro, Identity|TutorialdaAPISCIMREST-APIdeRecursos, Identity|TutorialdaAPISCIMREST-Criarrecursos, create_resource, create_resource-872616687, create_resource-872616688, create_resource-872616689, Identity|TutorialdaAPISCIMREST-Obterorecursomenu1peloID, get_resource, get_resource-872616687, get_resource-872616688, get_resource-872616689, Identity|TutorialdaAPISCIMREST-Obtertodososrecursosdeaplicações, get_all_resources, get_all_resources-872616687, get_all_resources-872616688, get_all_resources-872616689, Identity|TutorialdaAPISCIMREST-Removerorecursomenu1peloID, delete_by_id, delete_by_id-872616687, delete_by_id-872616688, delete_by_id-872616689, Identity|TutorialdaAPISCIMREST-APIsdePapéis, Identity|TutorialdaAPISCIMREST-Criardoispapéis:"user"e"admin"paraaempresa, create_roles, create_roles-872616687, create_roles-872616688, create_roles-872616689, Identity|TutorialdaAPISCIMREST-APIsdeDireitos, Identity|TutorialdaAPISCIMREST-Criarousuário"Jacob", create_user_jacob, create_user_jacob-872616687, create_user_jacob-872616688, create_user_jacob-872616689, Identity|TutorialdaAPISCIMREST-Criarosrecursos"menu1","menu2","menu3", create_resources_jacob, create_resources_jacob-872616687, create_resources_jacob-872616688, create_resources_jacob-872616689, Identity|TutorialdaAPISCIMREST-Atribuirosrecursos"menu1"e"menu2"paraousuário"Jacob", get_resources_of_user, get_resources_of_user-872616687, get_resources_of_user-872616688, get_resources_of_user-872616689, Identity|TutorialdaAPISCIMREST-Deletartodososrecursoscomdireitosdousuário"Jacob", unassign_all_resources, unassign_all_resources-872616687, unassign_all_resources-872616688, unassign_all_resources-872616689, Identity|TutorialdaAPISCIMREST-APIsdeFavoritos, Identity|TutorialdaAPISCIMREST-Adicionarorecurso"menu2"comofavoritodousuário"Jacob", add_favorites_to_user, add_favorites_to_user-872616687, add_favorites_to_user-872616688, add_favorites_to_user-872616689, Identity|TutorialdaAPISCIMREST-Obterosfavoritosdousuário"Jacob",iráretornar"menu2", get_user_favorites, get_user_favorites-872616687, get_user_favorites-872616688, get_user_favorites-872616689, Identity|TutorialdaAPISCIMREST-Removerosfavoritosdousuário"Jacob", delete_user_favorites, delete_user_favorites-872616687, delete_user_favorites-872616688, delete_user_favorites-872616689 -->
