---
title: "Atualização 1.4.12"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=189307759"
scraped_at: "2026-03-09T03:17:51.462Z"
depth: 2
anchors: 4
child_links: 41
---

# Atualização 1.4.12

¿Habla Español? [Haga clic](https://tdn.totvs.com/x/dKtICw) aquí para ver el Release Notes en Español.

 Do you speak English? [Click here](https://tdn.totvs.com/x/jatICw) to view the Release Notes in English.

Confira abaixo as novidades na atualização 1.4.12 do Fluig:

## BPM

**Datas de formulários padronizadas ao utilizar navegadores diferentes**

Agora é possível utilizar mais de um navegador e manter as datas utilizadas em formulários padronizadas em um único formato. Para isso, é gerado um evento “*inputFields*” nos formulários criados a partir do Gerador de Formulário, que faz com que os campos do tipo data sejam sempre salvos com o padrão americano (YYYY-MM-DD), mantendo a compatibilidade dos dados, permitindo manipulá-los em relatórios, por exemplo.

Se interessou?

Obtenha informações mais detalhadas em [Desenvolvimento de Formulários](https://tdn.totvs.com/pages/viewpage.action?pageId=75270483).

Atenção!

Os formulários que já existem devem ser publicados novamente, pois o evento é gerado para os formulários criados pelo Gerador de Formulário após publicá-los.

## Plataforma

**Novos serviços de pesquisa na API Pública**

Estão disponíveis dois novos serviços na API Pública do Fluig:

- [/public/wcm/findPages](https://api.fluig.com/resource_WCMServiceRest.html#path__wcm_findPages.html): é a externalização da consulta de páginas editáveis do Fluig. Trata-se do mesmo serviço utilizado pelo cadastro de páginas;
- [/public/wcm/assembleMenu](https://api.fluig.com/resource_WCMServiceRest.html#path__wcm_assembleMenu.html): permite montar a estrutura de páginas obedecendo a hierarquia do cadastro.

**Novos métodos disponíveis na API Pública**

Foram criados dois novos métodos na API Pública do Fluig, em *Users*:

- [/social/follow/removeAll](https://api.fluig.com/resource_UserServiceRest.html#path__social_follow_removeAll.html): permite remover todas as pessoas que um determinado usuário está seguindo;
- [/social/follow/ceanAll](https://api.fluig.com/resource_UserServiceRest.html#path__social_follow_cleanAll.html): permite remover as todas as pessoas que todos os usuários da empresa estão seguindo.

Importante

Esses métodos podem ser executados apenas por usuários administradores do Fluig.

## WCM

**Nova opção na exportação de páginas **

Agora é possível optar entre exportar as páginas com ou sem os artefatos .WAR. Para isso, acessar o Painel de Controle, acionar a guia WCM, acionar a opção Importar e Exportar Páginas e, em seguida, a opção Exportar. Na mensagem apresentada, acionar "Sim, exportar artefatos" para confirmar a exportação das páginas juntamente com seus respectivos artefatos.

![](/download/attachments/189307759/SOCIALECMSUST-4305.png?version=2&modificationDate=1433503941000&api=v2)

## Correções 

Nessa sessão listamos alguns *bugs* que matamos nessa atualização que garantem que tudo corra bem na sua plataforma.

- Consulta de solicitação específica a partir de seu número sem considerar o filtro por data.

- Atribuição do valor de variáveis utilizadas na inicialização do Fluig ao efetuar sua atualização.

- Exibição do texto inserido para a versão/revisão ao consultar as propriedades de um documento depois de atualizar seu arquivo físico.

- Instalação do Fluig em diretórios que contenham espaços.Atenção! Não é permitida a instalação em pastas que contenham espaços em seu nome.

- Aplicação de regra para desabilitar um componente calendário de um formulário em determinada atividade de um processo ao utilizar os navegadores Mozilla Firefox e Internet Explorer.

- Exibição do botão Visualizar – da janela de consulta de solicitações – desabilitado quando são marcados os campos Incluir Dados das Atividades e Incluir Dados do Formulário.

- Exibição de campos do processo "Listar Tarefas" no aplicativo Fluig Mobile e adequação ao Fluig Style Guide.

- Emissão de notificação sobre a eliminação de um documento informando o usuário que o eliminou.

- Transferência de pendências quando os usuários envolvidos têm documentos em comum em aprovação.

- Inclusão de artigos a partir do código fonte – após acionar o botão Fonte e editar o código HTML – na Navegação de Documentos.

- Utilização de atividade inicial do tipo Timer independentemente do número de sequência do estado inicial que ela representa.

- Ajustes para aumentar o desempenho ao apresentar a janela de inicialização de solicitações, tornando-a mais rápida.

- Desconsideração de espaços em branco no início ou no final da matrícula de um usuário criado no Fluig.

- Validação do nome de um evento de processo ao exportá-lo do Fluig Studio para a Web, limitando-o em 50 caracteres.

- Movimentação de processo quando existe uma atividade automática e, na atividade posterior a ela, é necessário escolher o usuário ou grupo que irá recebê-la.

- Criação de nova revisão ao efetuar o *check in* de um documento publicado após modifica-lo e definir que deve ser criada uma nova revisão.

- Movimentação de solicitações com sub processos que possuem evento intermediário e final de sinal.

- Exibição do valor de um campo do formulário em vez da descrição padrão ao incluir um novo registro quando o formulário é armazenamento em uma única tabela e não utiliza descrição padrão.

- Execução de evento intermediário do tipo Timer quando a atividade anterior é uma paralela.

- Ajustado o retorno ao usuário que foi criado pelo Fluig Identity e está em seu primeiro acesso quando o Fluig não possui licenças disponíveis, informando o motivo pelo qual ele não consegue acessar a plataforma.

- Impressão de cópia controlada com ou sem marca d’água de um documento publicado na navegação de documentos.Nota A documentação [Ambiente de execução do Java®](https://tdn.totvs.com/pages/viewpage.action?pageId=75271469) foi atualizada para disponibilizar mais informações a respeito de *applet*, que impacta no uso da cópia controlada.
- Efetuados ajustes para não permitir salvar formulários com campos do tipo INPUT / TEXTAREA e SELECT sem o atributo *"name*".

- Foram removidos os campos "Cota (Meus Documentos)" e "Espaço Utilizado (Meus Documentos)" que estavam presentes no cadastro de usuários, pois não são mais considerados pela plataforma.

- Criação da pasta Meus Documentos para todos os usuários ao atualizar o Fluig ou efetuar a conversão do TOTVS | ECM para o Fluig.

- Retorno do nome do arquivo (*PhisicalFile*), do tamanho do arquivo (*Size*) e dos arquivos relacionados (*RelatedFiles*) ao utilizar o método “*WKDocument*” para obter informações de um documento.Nota Quando o documento não é um arquivo físico (pasta ou formulário) esses dados não são preenchidos.

- Remoção de itens da lista personalizada na configuração do *widget* Acesso Centralizado.

- *Redeploy*de componentes que possuem páginas sem a necessidade de desativá-los.Nota Obtenha informações detalhadas [aqui](https://tdn.totvs.com/display/fluig/Central+de+Componentes#CentraldeComponentes-RedeploydeComponentes).


<!-- anchors: Atualização1.4.12-BPM, Atualização1.4.12-Plataforma, Atualização1.4.12-WCM, Atualização1.4.12-Correções -->
