---
title: "Atualização 1.4.10"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=185754144"
scraped_at: "2026-03-09T03:18:00.996Z"
depth: 2
anchors: 5
child_links: 39
---

# Atualização 1.4.10

¿Habla Español? Haga [clic aquí](https://tdn.totvs.com/pages/viewpage.action?pageId=185757681) para ver el Release Notes en Español.

 Do you speak English? [click here](https://tdn.totvs.com/display/fluigeng/Version+1.4.10) to view the Release Notes in English.

Confira abaixo as novidades na atualização 1.4.10 do Fluig:

## Arquitetura

**Defina o tempo de conexão para integração**

Agora, para serviços criados com API CXF para integração com sistemas externos é possível definir o tempo que o desenvolvimento criado na plataforma aguardará para o serviço responder (*timeout)* através da propriedade “*receive.timeout*”.

[?](#)

| `var` `properties = {};``properties[``"receive.timeout"``] =``"60000"``;``var` `serviceLocator = serviceHelper.instantiate(``'net.webservicex.Periodictable'``);``var` `service = serviceLocator.getPeriodictableSoap();``var` `customClient = serviceHelper.getCustomClient(service,``"net.webservicex.PeriodictableSoap"``, properties);``var` `result = customClient.getAtoms();` |
| --- |

Confira mais detalhes

Informações mais detalhadas sobre essa opção podem ser obtidas em [Integração com Aplicativos Externos](https://tdn.totvs.com/x/lCVbB).

****

## BPM

**Acompanhamento de alterações em processos**

A partir dessa atualização do Fluig é possível monitorar as alterações efetuadas pelos usuários na configuração de processos. Com o novo evento global “*afterReleaseProcessVersion*”, é possível tornar o Fluig ainda mais flexível quando uma nova versão de processo é liberada. 

Se interessou?

Confira mais detalhes sobre o monitoramento de alterações em processos em [Desenvolvimento de Eventos](https://tdn.totvs.com/x/EIl8B).

**Utilização de "getValue" em datasets**

Agora é possível obter o código da empresa e código do usuário autenticado – variáveis “*WKCompany”* e “*WKUser*”, respectivamente – ao utilizar *datasets* desenvolvidos sobre a plataforma através do método “*getValue*”.

Saiba mais

Acesse a documentação [Desenvolvimento de *Datasets*](https://tdn.totvs.com/x/eitbB) e confira mais detalhes.

**Mecanismo de atribuição em processos com gestor** 

Para melhor velocidade na geração de tarefas para os usuários na Central de Tarefas, as opções de mecanismo de atribuição de Gestor de Processo "Para um Grupo" e "Para um Papel" deixaram de existir para a configuração de processos.

Importante

A configuração de um mecanismo de atribuição de Gestor de Processos por Campo de Formulário, por Grupo de Colaboradores, por Executor da Atividade e Associado pode ocasionar perda de performance na utilização da Central de Tarefas.

Não é possível configurar processos com mecanismo Associado dentro de Associado.

****

## ECM  

**Download de documentos no seu próprio formato quando não há anexos**

Agora os documentos são mantidos no seu próprio formato ao efetuar o *download* quando não há anexo relacionado a eles. E os documentos que possuem anexos são compactados no formato .zip ao efetuar o *download*, mantendo assim todos os componentes do documento (documento principal e anexos).

![](/download/attachments/185754144/SOCIALECMSUST-4013.png?version=1&modificationDate=1429035152000&api=v2)

## Correções

Nessa sessão listamos alguns *bugs* que matamos nessa atualização que garantem que tudo corra bem na sua plataforma.

- Utilização de mecanismo de atribuição para uma atividade do tipo Serviço em processos. 

- Movimentação de muitas solicitações de um processo que possui um evento intermediário condicional.

- Exportação de solicitações na consulta quando o número de solicitações encontradas pelo filtro definido é elevado.Importante Um mesmo usuário não pode efetuar exportações paralelas da consulta de solicitações.

- Visualização de documentos anexados a um registro de formulário.

- Exibição da coluna Identificador na listagem gerada ao efetuar a exportação de "Minhas Solicitações" e "Tarefas a Concluir" da Central de Tarefas.

- Utilização de dados com aspas simples na *tag* Item do método "*StartProcess*" pertencente ao *webservice*"*ECMWorkflowEngineService*".Nota Mais informações podem ser obtidas em [Utilização de Webservices](https://tdn.totvs.com/x/ZyxbB).

- Verificação da conexão SOAP do Fluig Studio quando o servidor está configurado para utilizar a porta 80.

- Apresentação do nome do responsável pela área nas propriedades da cópia controlada do documento impresso.

- Validação do campo “*documentTypeId*”, ao criar um documento por meio de *webservice,* para verificar se existe algum tipo de documento com o código informado.

- Studio - Importação e exportação de processos: somente usuários com permissão para configurar processos podem efetuar essas ações.

- Consumo de licença  de usuários nomeados do Fluig pelo usuário “*wcmadmin*”.

- Envio de *e-mail* de notificação quando um processo utiliza um *template* personalizado disponível somente para um idioma diferente do idioma do usuário.

- Exibição da opção que permite assumir uma tarefa que está em um *pool* para um papel a partir do *link* contido no *e-mail* de notificação personalizado que foi enviado para os usuários pertencentes ao papel.

- Permissões de edição e remoção de galerias em comunidades.

- Mensagem de retorno ao utilizar o método “*getDocumentContent*”, do *webservice* “*ECMDocumentService*”, quando ocorre uma inconsistência relacionada a um “*documentID*” inválido.Nota Informações mais detalhadas podem ser obtidas em [Utilização de *Webservices*](https://tdn.totvs.com/x/ZyxbB).

- Impressão de cópia controlada de um documento que possui marca d’água quando o servidor utiliza o sistema operacional Linux. 

- Conversão de solicitações considerando os eventos desenvolvidos sobre a plataforma correspondentes à nova versão do processo.

- Atualização do nome de campos de formulário na lista de regras do formulário depois de alterá-los no editor Web.

- Visualização do conteúdo para o qual os *hiperlinks* inseridos em artigos publicados na navegação de documentos direcionam.

- Criação de *layout* de página a partir do modelo que o Fluig Studio oferece e publicação da página que utiliza o *layout* personalizado.

- Cancelamento de solicitações do tipo Pai x Filho que possuem formulário utilizando eventos da hAPI.Nota Mais informações sobre o método de cancelamento de processos podem ser obtidas em [Desenvolvimento de *Workflow*](https://tdn.totvs.com/x/widbB).

- Utilização do método “*getAvailableStatesDetail*” juntamente com o serviço “*ECMWorkflowEngineService*” quando existe uma atividade do tipo Serviço no processo.Nota Mais informações sobre o método “*getAvailableStatesDetail*” podem ser obtidas em [Desenvolvimento de *Workflow*](https://tdn.totvs.com/x/widbB).

- Inclusão de grupos de usuários que possuem subgrupos em comunidades.

- Movimentação de solicitações seguidas de inclusão de anexos quando há validações do evento “*beforeStateEntry*”.

- Exibição de descrição longa de tarefas no processo Ad Hoc no Fluig Web e no Fluig Mobile.


<!-- anchors: Atualização1.4.10-Arquitetura, highlighter_256696, Atualização1.4.10-BPM, Atualização1.4.10-ECM, Atualização1.4.10-Correções -->
