---
title: "Atualização 1.2.3"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=140968116"
scraped_at: "2026-03-09T03:21:00.343Z"
depth: 2
anchors: 6
child_links: 39
---

# Atualização 1.2.3

Confira abaixo as novidades na atualização 1.2.3 do Fluig:

# ECM

**Edite documentos com um clique**

A opção de editar documento evoluiu. Usando a tecnologia Webdav na tela de publicação e edição de documentos basta clicar sobre o nome do arquivo enviado para edita-lo sem precisar baixar o documento e enviar novamente o documento depois de altera-lo.

![](/download/attachments/140968116/Captura.png?version=3&modificationDate=1397051689000&api=v2)

* ***Publicação de documentos com muitos anexos**

 Nesta atualização o Fluig cuida melhor dos vários documentos anexos necessários para sua publicação.

**

**Datasets de grupos e papéis mais fáceis de usar**

Agora está mais simples usar Datasets de grupos e papeis. A partir desta atualização foi evoluída a maneira de utilizar os datasets de "Grupo" e "Papel" nos resultados de zoom padrões do produto. Estes passam a considerar valores sem a necessidade de incluir a referência "PK".
Exemplo: Na passagem de parâmetros, pode ser utilizado o valor "groupId" ao invés de "groupPK.groupId" para referenciar o campo. Para mais detalhes acesse o guia [Desenvolvimento de Formulários](/pages/viewpage.action?pageId=75270483) .

# BPM

* ***Aprimoramento na Central de tarefas**

Agora as solicitações workflow que foram canceladas não são mais contabilizadas na Central de Tarefas, tornando o gráfico de pendências mais assertivo para o usuário.

![](/download/attachments/140968116/BPM%20-%20SOCIALECMSUST-1963.PNG?version=1&modificationDate=1396880621000&api=v2)

**Eventos customizados em formulários armazenados em tabela**

Dentro de Workflow agora é possível alterar um campo de formulário por meio do script de customização usando a função "hAPI.setCardValue" para formulários armazenados em tabelas.

**Formulários em comunidades**

Foram efetuadas melhorias importantes no editor de formulários garantindo assim maior estabilidade no uso.

![](/download/attachments/140968116/BPM%20-%20SOCIALECMSUST-2055-1.PNG?version=1&modificationDate=1396889656000&api=v2)

![](/download/attachments/140968116/BPM%20-%20SOCIALECMSUST-2055-2.PNG?version=1&modificationDate=1396889639000&api=v2)

**Central de tarefas com mais campos para ordenar**

Agora é possível ordenar os registros de solicitações workflow disponíveis na central de tarefas por qualquer coluna da tabela, tais como descrição, prazo, identificador, solicitante, dentre outras informações.

![](/download/attachments/140968116/BPM%20-%20SOCIALECMSUST-2084.PNG?version=1&modificationDate=1396889928000&api=v2)

**Movimentação de atividades mais rápidas**

O procedimento de assumir uma tarefa workflow está mais rápido quando o mecanismo de atribuição é definido por outra atividade ou por customização.

**Melhorias na criação de formulários**

A criação de formulários no Fluig conta com novidades. A partir desta atualização foi criada uma técnica para ter um formulário traduzido para o idioma do usuário definido no Fluig. Para mais detalhes acesse [Tradução de Formulários](/pages/viewpage.action?pageId=75270483#DesenvolvimentodeFormulários-Traduçãodeformulários).

Também o Fluig tem novos métodos para a customização de formulários para dispositivos móveis, que permitem a consulta e a exibição de registros do tipo pai e filho. Para mais detalhes acesse [Customização de Formulários para Dispositivos Móveis](/pages/viewpage.action?pageId=75270483#DesenvolvimentodeFormulários-PaiFilhoparadispositivosmóveis).

# Social

**É sua primeira vez por aqui?**

O Fluig evoluiu a tela de boas vindas de novos usuário no sistema, agora sugere os melhores usuários para seguir na empresa.

**Validação na criação de comunidade**

Foram tratadas inconsistências na criação da comunidade caso o "alias" da comunidade já esteja em uso, impedindo que duas comunidades tenham o mesmo código. 

**Cadastro de palavras na Blacklist**

Foram efetuadas evoluções no cadastro de palavras restritas, não permitindo o cadastro de duas palavras idênticas. 

![](/download/attachments/140968116/image2014-4-8%2010%3A10%3A26.png?version=1&modificationDate=1396962630000&api=v2)

**

**Mobile: Lista de comunidades**

A listagem das comunidades foi aprimorada para que não sejam apresentadas comunidades ocultas que o usuário não tenha acesso.

**Mobile: acesso a uma publicação por notificação**

Foi ajustada a listagem das notificações do usuário para que no toque leve para seu conteúdo.

****

**Mobile: seguir um usuário pela notificação**

Em algumas situações aceitar e seguir pessoas por uma notificação no mobile não era registrada. 

**Compartilhamento de uma publicação**

Agora ao clicar num conteúdo compartilhado leva o usuário exatamente para onde o conteúdo foi gerado.

****

****

****

**Prévia dos vídeos em galerias e publicações**

Foi evoluído a prévia de vídeos do Fluig que em algumas situações não era exibido corretamente.

**Mais filtros na sua busca**

Foram evoluídos os filtros de busca por períodos. Permitindo filtrar por: última hora, último dia etc, refinando os resultados de pesquisa.

**

**Segurança em rascunho de artigo**

Foi evoluído o modelo de publicação automático de artigos, a partir desta atualização um artigo só gera uma publicação quando ele é publicado pelo usuário. Quando salvo como rascunho, ele permanece oculto até que seja finalizado.

**Melhoria no compartilhamento de comunidades**

Foram efetuadas alterações para que no compartilhamento da comunidade não exiba a própria comunidade na seleção das comunidades possíveis.

**Comunidades ocultas**

Foram efetuadas alterações para que as comunidades ocultas não sejam apresentadas no perfil dos usuários, bem como em resultados de busca.

**Solicitação para seguir usuário após rejeição**

Foi evoluída a solicitação para seguir usuários. Após ter seu pedido rejeitado o usuário pode tentar novamente solicitar seguir.

# Fluig Studio

**Criação de serviço no Fluig Studio**

Foi alterada a criação de serviços do tipo Web Service usando uma nova API de criação de serviços, a API CXF. Essa evita situações de incompatibilidade com certos serviços.

![](/download/attachments/140968116/Plugin%20-%20SOCIALECMSUST-2080-1.PNG?version=1&modificationDate=1396894736000&api=v2)

![](/download/attachments/140968116/Plugin%20-%20SOCIALECMSUST-2080-2.PNG?version=1&modificationDate=1396894895000&api=v2)

# Arquitetura

**Preferências do usuário**

As preferências do usuário agora estão mais claras. Suas subcategorias foram renomeadas para melhor compreender as informações do usuário, por meio das abas "Geral" e "Dados Adicionais". 

**Internacionalização das Widgets de páginas Fluig**

Nesta atualização é possível utilizar as widgets de páginas e visualizá-las nos idiomas português, inglês ou espanhol, acompanhando a configuração definida para o Fluig.

# API

**Web service ECMDocumentService**

Nesta atualização do Fluig foi corrigida a validação sobre o usuário publicador e/ou usuário autor na publicação de documentos via web service. Caso seja informado um usuário inativo ou inexistente será exibida uma mensagem mais clara para esta situação. Para mais informações sobre Web services disponíveis no Fluig, [clique aqui](https://tdn.totvs.com/pages/viewpage.action?pageId=73084007).


<!-- anchors: Atualização1.2.3-ECM, Atualização1.2.3-BPM, Atualização1.2.3-Social, Atualização1.2.3-FluigStudio, Atualização1.2.3-Arquitetura, Atualização1.2.3-API -->
