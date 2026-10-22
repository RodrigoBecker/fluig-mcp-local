---
title: "Atualizações (1.7.1)"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=605859464"
scraped_at: "2026-03-09T04:52:18.852Z"
depth: 3
anchors: 184
child_links: 79
---

# Atualizações (1.7.1)

## Ciclo de atualização

---

Maior destaque para as atualizações evolutivas (**Update **). 

As liberações mais relevantes são identificadas por um selo especial:

![](/download/attachments/605859464/essential.png?version=1&modificationDate=1620404231797&api=v2) **Essential:** incluem correções e pequenas evoluções da plataforma.

![](/download/attachments/605859464/mandatory.png?version=1&modificationDate=1620404231823&api=v2) **Mandatory:**** **atualizações que possuem correções críticas emergenciais.

Veja todos os detalhes em: [Atualização da plataforma](/pages/viewpage.action?pageId=73078235).

**oculto**

## 

## 30 de Julho de 2024

---

## Correções

## 

## 23 de Julho de 2024

---

Correção Mandatory

Foi identificada uma vulnerabilidade crítica que requer uma atenção especial em seu ambiente.
A situação corrigida encontra-se disponível a partir do pacote **Mandatory 1.7.1-240723**.

## Correções

- Corrigido o gerenciamento das licenças do Fluig.

## 

## 16 de Janeiro de 2024

---

## Correções

- Efetuadas correções no redirecionamento de URL para permitir acessar a plataforma Fluig a partir de um navegador *mobile*.

## 

##  28 de Novembro de 2023

---

Correção Mandatory

Foi identificada uma vulnerabilidade crítica que requer uma atenção especial em seu ambiente.
A situação corrigida encontra-se disponível a partir do pacote **Mandatory 1.7.1-231128**.

Saiba quais são os impactos:

- Esta situação permitia a exploração de*Cross-site scripting* pela página mobileredir. Foram realizados ajustes para sanar essa falha de segurança.

## Correções

- Efetuados ajustes na definição de permissões para que os recursos do [Painel de controle](/pages/viewpage.action?pageId=233762861) sejam exibidos corretamente para usuários comuns quando eles recebem permissão de acesso a esses recursos – tais como [Substitutos](/pages/viewpage.action?pageId=234455459) e [Expedientes](/pages/viewpage.action?pageId=233766840) – e quando o banco de dados utilizado é o Oracle.

## 

## 09 de Agosto de 2023

---

## Correções

- Correção realizada no comportamento do componente [checkbox](https://style.fluig.com/components.html#custom-checkbox-and-radio) dentro da tabela pai e filho.

## 

## 28 de Julho de 2023

---

## Correções

- Correção de inconsistência no componente de *zoom* para não permitir a seleção de mais de um registro.

## 

## 08 de Maio de 2023

---

## Correções

- Corrigido o método *getAllColleagueGroups* do *webservice* *ECMColleagueGroupService* para que o seu retorno funcione corretamente.
- Corrigido o filtro por papel no aplicativo Approval para que as solicitações sejam filtradas e exibidas corretamente de acordo com o papel selecionado pelo usuário.

## 

## 14 de Março de 2023

---

## Correções

- Realizada correção para que usuários com estado bloqueado, não consigam iniciar solicitações em um processo.
- Ajuste realizado para que a mensagem ao excluir um anexo que foi adicionado por outro usuário seja apresentada corretamente.
- Correção realizada para que seja possível desabilitar o bloqueio de Clickjacking corretamente nos parâmetros da plataforma.

## 

## 22 de Fevereiro de 2023

---

## Correções

- Correção realizada para que seja possível atualizar o arquivo ECM corretamente.

## 

## 14 de Fevereiro de 2023

---

## Correções

- Corrigido o envio das respostas de um formulário público quando é utilizado o Forms Beta integrado ao TOTVS Fluig Plataforma e o formulário é respondido por um usuário comum que está autenticado na plataforma.

## 

## 07 de Fevereiro de 2023

---

## Correções

- Ajuste realizado para que determinadas informações em log não ultrapassagem 2.000 caracteres para que não haja estouro de memória. 

## 

## 31 de Janeiro de 2023

---

## Correções

- Correção realizada para que seja possível realizar o deploy de widgets via Eclipse.

## 

## 24 de Janeiro de 2023

---

## Correções

- Criado novo evento global **validateUpload** que será executado após o upload de arquivos via API, Webservices e FTP, tendo o objetivo de auxiliar na validação de arquivos (ex: validar as extensões permitidas).

## 

## 10 de Janeiro de 2023

---

## Correções

- Efetuados ajustes no Painel de controle do WCMADMIN para permitir salvar as alterações feitas nas configurações gerais ou informar caso exista alguma inconsistência.
- Correção relacionada a permissão de APIs e Webservices.

## 

## 14 de Dezembro de 2022

---

## Correções

- Correção realizada para que não seja possível alterar arquivos indevidos.
- Melhoria das mensagens apresentadas sobre a expiração do ambiente Fluig, tornando-a mais clara para os usuários, informando que a release (versão) do Fluig está desatualizada. 

## 

## 29 de Novembro de 2022

---

## Correções

- Correção realizada para que ocorra validação nos métodos que possuem permissão para que apenas o usuário configurado consiga realizar o acesso, sendo que para usuários administradores o acesso não possui restrição.
- Ajuste realizado para que não seja possível inserir conteúdos HTML nos campos de Busca da plataforma.
- Ajuste realizado ao conceder permissão de modificação para um grupo para que seja possível fazer o *check-out* de um documento vindo de um usuário do grupo.

## 

## 22 de Novembro de 2022

---

## Correções

- Correção do comportamento do indicativo de exibição dos caracteres na tela de cadastro de dados adicionais da empresa. Agora ao apresentar o ícone de cadeado fechado os caracteres são ocultado e quando está aberto os caracteres são exibidos.
- Criado dois novos parâmetros WKCurrentMovto e WKActualThread para que os valores sejam informados corretamente. O método hAPI.getActualThread foi depreciado e no lugar recomendamos a utilização dos novos parâmetros mencionados.

## 

## 08 de Novembro de 2022

---

## Correções

- Correção realizada para que seja possível incluir mais de um registro de formulário por vez quando utilizado com banco de dados Oracle.
- Correção realizada na inconsistência apresentada ao consultar, criar formulário com mais de 1.000 registros.
- Correção realizada para que ao acessar um link a partir da home do aplicativo o mesmo abra corretamente. Melhora da performance de carregamento da home no aplicativo My Fluig para iOS.

## 

## 01 de Novembro de 2022

---

## Correções

- Correção no controle de licenças para as modalidades Intera e Corporativo.
- Correção realizada para respeitar o papel selecionado no *checkbox.*Não selecionando mais todos os papéis recém adicionados para o usuário.
- Melhoria de performance em formulários com muitas versões solucionando a inconsistência de lentidão.
- Correção realizada para que um documento seja enviado corretamente para aprovação por um usuário com permissão total na pasta.
- Correção realizada para que ao fazer o deploy do componente da Digte a home do TOTVS Fluig não seja removida.

## 

## 25 de Outubro de 2022

---

Atualização no serviço de notificações push do Fluig

O serviço de notificações push do Fluig passou por uma atualização e por este motivo, recomendamos a atualização do TOTVS Fluig Plataforma para a **release 1.7.1-221025 Crystal Lake** liberada hoje em 25 de Outubro de 2022 para que o serviço continue funcionando corretamente. 

O serviço continuará em funcionamento até o mês de Fevereiro de 2023, portanto, caso a atualização não seja feita até **01 de Fevereiro de 2023**, o serviço será interrompido, fazendo com que as notificações push não sejam mais enviadas e recebidas nos aplicativos My Fluig e My Approval. Recomendamos que a atualização seja feita o quanto antes para evitar impactos.

**O que devo fazer para manter minhas notificações push atualizadas?**

- Manter os aplicativos móveis My Fluig e My Approval atualizados com a última versão disponível nas lojas Google Play e Apple Store.

Confira a notícia que disponibilizamos no **portal de clientes**.

## Correções

- Ajuste realizado para que seja possível fazer o download da versão vigente de um documento em aprovação.

## 

## 18 de Outubro de 2022 

---

## Correções

- Ajuste realizado para que seja possível abrir documentos quando utiliza-se proxy.
- Correção realizada para que seja possível anular versões de questões no LMS corretamente.

## 

## 11 de Outubro de 2022 

---

## Correções

- Correção realizada para que seja possível encaminhar uma solicitação para um *fork* quando utilizado o mecanismo de atribuição por grupo.

## 

## 04 de Outubro de 2022 

---

## Correções

- Correção realizada para que o filtro se mantenha selecionado ao editar as propriedades de um documento na central de tarefas > [meus documentos](https://tdn.totvs.com/x/WPLuDQ).
- Corrigido o permissionamento da API getAvailableDatasets.
- Melhoria na mensagem apresentada ao tentar exportar um formulário com mais de 1.000(mil) campos. Nesse caso a mensagem informa ao usuário que é necessário uma revisão ou que modifique a [forma de armazenamento](https://tdn.totvs.com/x/phSWDg), pois o banco tem um limite de aceite de 1.000 (mil) campos.

## 

## 28 de Setembro de 2022 

---

## Correções

- Ajustes realizados para que os serviços do tipo REST do TOTVS Fluig plataforma possam ser autenticados corretamente em um servidor de [proxy](https://tdn.totvs.com/x/TwBlDw).
- Corrigida a inconsistência ao movimentar uma atividade para o gestor do processo usando o mecanismo de atribuição por grupo.

## 

## 20 de Setembro de 2022 

---

## Correções

- Corrigida inconsistência ao realizar o [convite de usuários](https://tdn.totvs.com/x/HIL5DQ)na plataforma, para que a data do convite seja apresentada corretamente.
- Corrigida inconsistência ao visualizar uma solicitação de atividades paralelas por meio do aplicativo My Fluig, para que seja demonstrado corretamente o andamento das atividades.

## 

## 13 de Setembro de 2022 

---

## Correções

- Corrigida inconsistência ao exportar um processo via Eclipse, para que o usuário consiga efetuar a exportação corretamente na plataforma.

## 

## 06 de Setembro de 2022

---

## Correções

- Corrigida inconsistência ao criar um dataset e habilitar a [sincronização](https://tdn.totvs.com/pages/viewpage.action?pageId=212899013#Sincroniza%C3%A7%C3%A3odedatasets-Configurandoasincroniza%C3%A7%C3%A3odedatasets)dos dados, para que sejam retornados corretamente ao servidor do TOTVS Fluig Plataforma.
- Ajustes realizados ao efetuar o *login*via web ou dispositivos mobile no TOTVS Fluig Plataforma, para que quando o usuário inserir credenciais inválidas não gere excesso de informações gravadas no log da aplicação.
- Ajustes realizados ao efetuar a ação de arrastar e soltar um arquivo (*drag and drop*) na navegação de documentos da plataforma, para que a mensagem no quadro "*Solte os seus arquivos aqu*i" seja apresentada corretamente ao usuário.
- Ajuste realizado para otimização de consultas que estavam impactando a performance do banco de dados.

## 

## 31 de Agosto de 2022 

---

## Correções

- Ajustes realizados para que ao movimentar uma solicitação para o início (retorno) a mesma seja realizada corretamente na plataforma e mobile.

## 

## 23 de Agosto de 2022

---

## Correções

- Realizada correção no descarte de imagens de artigos e em suas alterações em rascunhos, para que não ocorra mais comportamentos errôneos.
- Corrigida inconsistência no layout da aba detalhes e complementos da solicitação para que a página seja apresentada corretamente ao usuário.
- Corrigida inconsistência ao visualizar um arquivo no formato .zip na navegação de documentos, para que o usuário com permissão de visualização do arquivo, utilize a opção de [download](https://jiraproducao.totvs.com.br/secure/attachment/1553755/valida%C3%A7%C3%A3o.png)do documento.

## 

## 16 de Agosto de 2022

---

## Correções

- Ajustes realizados no método de sincronização do dataset para que os dados sejam atualizados corretamente, sem o acúmulo das tabelas temporárias.
- Ajustes realizados para que seja possível a visualização de todos os campos descritores na central de tarefas ao editar um formulário na plataforma.
- Ajuste realizado ao fazer *check-out* de um documento para que seja possível atualizá-lo ou fazer o *upload* do mesmo.
- Correção realizada para que ao acionar Descartar na solicitação, a mesma seja descartada corretamente.
- Corrigida inconsistência na ativação das notificações por e-mail, para que os parâmetros de notificações sejam respeitados ao alterar ou criar um novo usuário na plataforma.
- Corrigida inconsistência para que o botão cancelar seja apresentado corretamente ao criar um usuário na plataforma.
- Correção realizada para que ao consultar solicitações através do filtro "que participei" somente as solicitações em que o usuário participou sejam apresentadas. 

## 

## 09 de Agosto de 2022 

---

## Correções

- Correção realizada na API de *timeline*para que as *timelines*de comunidades sejam apresentadas corretamente em dispositivos *mobile*. 
- Ajustes realizados na página de solicitações para que o formulário da solicitação mantenha seu espaçamento correto em resoluções menores ou iguais a 1366x768.
- Inconsistência no recurso [compactar solicitações finalizadas](https://tdn.totvs.com/x/W4H5DQ) resolvida, para que guarde somente a última versão dos registros de formulários.
- Ajustes realizados ao criar um registro de formulário na plataforma via API sem enviar valor no campo inputFields, para que o mesmo funcione corretamente.
- Ajustes realizados ao efetuar um registro de formulário na plataforma, para que não seja permitido alterar valores quando o campo zoom estiver desabilitado.
- Ajuste realizado para que o SCORM dos treinamentos sejam calculados corretamente.

## 

## 02 de Agosto de 2022

---

## Correções

- Ajustes realizados nas configurações do proxy na plataforma, para que as mesmas sejam devidamente utilizadas ao executar os *webservices*quando o TOTVS Identity estiver habilitado.
- Corrigida inconsistência ao realizar a busca por documentos na lixeira, para que os mesmos sejam retornados sem a necessidade de preencher os campos data inicial e data final.
- Corrigida inconsistência ao criar um [documento externo](https://tdn.totvs.com/x/JvHuDQ) para que seja possível a utilização de uma URL do TOTVS Fluig Plataforma.
- Corrigida inconsistência ao configurar uma marca d'agua para que a mesma exiba a versão correta do documento que encontra-se em revisão.
- Ajuste realizado para que não haja a necessidade de passar a tag OauthDTO no request do objeto. Dessa forma a integração do Fluig com o Protheus passará a funcionar corretamente.
- Corrigida inconsistência ao [copiar o link](https://p23.zdusercontent.com/attachment/888110/CN7p2BC1vDiIQZnoXQLsSKUyz?token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..LwfAQ2QyGNNYqtDNM1rAqg.tjikEhHS0PaU7TeZfuZ-STGxsGjm6HSPe2f76epvkD3gtONBJsX6HUikbtklrVMbzH7pYEVzGpgLm_JjzI-q_JBmafZsGGAPBGnZTSarR05uFxASxpNNdq9yFqU-HwApq_4cEZRlxOyAk9RJg4ZHWIXz8UtPL1Kxt6vUSIhe4QcSydEaUK0NWDjWBbE75H4SuA2T_clvHZMRNe9rqcCnapvXiPEGdWO7izcFYF5hzOjH1lZBb_kyq0znE6nt5-5aT1YuXoccyUl2WXbbT4w0s1Pp50Uu5IEUnBEqEmzhIbA.DeZzcSTCfUdwh0hxm3VwMg) de um documento que está em aprovação ou revisão, para que seja gerado o link da versão ativa do documento. 
- Ajustes na página de painel de controle na plataforma. O ajuste promoveu a remoção do ícone o qual redirecionava o usuário administrador à um formulário para pesquisa de satisfação.
- Correção realizada ao visualizar documentos favoritos expirados na plataforma, para que os mesmos sejam apresentados como expirados após a data de expiração.

##  

## 27 de Julho de 2022

---

**Mais agilidade em processos**
Para deixar o seu dia a dia com BPM mais ágil, otimizamos internamente para que as consultas sejam mais rápidas, incluindo:

- Consulta de solicitações
- Busca de atividades que o usuário participou
- Central de Tarefas: listagem de tarefas em pool - grupo e papel
- Central de Tarefas: movimentação como substituto e gestor
- Central de Tarefas: filtros "que participei", "minhas solicitações", "que participei como gestor/substituto"

## Correções

- Ajuste realizado para que seja possível realizar publicações com links extensos e superiores a 255 caracteres. Foi alterado o limite máximo de caracteres da coluna link da tabela *Sociable*que antes era de 255 caracteres para 2048, para o suporte de links extensos. 
- Correção realizada na central de tarefas em [documentos a aprovar](https://tdn.totvs.com/x/XvLuDQ), para que os mesmos sigam o fluxo corretamente após o usuário aprová-los ou reprová-los. 

## 

## 19 de Julho de 2022

---

**Novidades na página "Soluções"!**

A partir de agora utilizar o menu "Soluções" para acessar os aplicativos No-Code ficou muito mais fácil e interativo. Isso porque agora é possível visualizar nossas ofertas diretamente de dentro da página. Isso facilitará ainda mais a maneira como os usuários visualizam os planos, sendo direcionados automaticamente para a TOTVS Store para concluir a compra. 

Além disso, a página de soluções conta agora com diferentes comportamentos de acordo com o perfil do usuário, deixando assim os acessos mais fluidos e com manuseio facilitado, permitindo que os usuários acessem os apps incluídos no seu plano¹. 

Lembrando que a ativação gratuita do plano Essentials está inclusa apenas para clientes que adquiram o Fluig Plataforma até junho/2022. 

Aproveite todos os benefícios e venha conhecer a página remodelada e repleta de opções para tornar a sua rotina de trabalho mais produtiva e completa.

Para cenários onde a plataforma está com Identity integrado e com o No-Code habilitado.

![](/download/attachments/605859464/solucoes%20totvs%20fluig.PNG?version=1&modificationDate=1658256618077&api=v2)

Para saber o passo a passo dessas novidades, como ativar sua oferta e criar sua conta *trial* gratuita, acesse nossas documentações completas através dos links a seguir:

[Plataforma - Soluções](https://tdn.totvs.com/x/CL-SGQ)

[Ativação da oferta TOTVS Fluig No-Code](https://tdn.totvs.com/pages/viewpage.action?pageId=578055521)

[No-Code | Criar conta gratuita](https://tdn.totvs.com/display/fluig/No-Code+%7C+Criar+conta+gratuita)

## Correções

- Correção realizada para que a indexação automática de documentos funcione corretamente, para que ao mover um documento de uma pasta para outra o mesmo seja apresentado na pasta correta. 
- Ajustes realizados na Impressão de cópia controlada, para que seja possível inserir variáveis em qualquer coluna ou planilha, em um documento aberto na ferramenta [Microsoft Excel.](https://tdn.totvs.com/pages/viewpage.action?pageId=152802071#Impress%C3%A3odec%C3%B3piacontrolada-MicrosoftExcel)

## 

## 12 de Julho de 2022

---

## Correções

- Ajustes realizados para que palavras chaves no log da [solicitação](https://tdn.totvs.com/pages/viewpage.action?pageId=644018092#Plataforma%E2%9D%99CentraldeDiagn%C3%B3sticos-Solicita%C3%A7%C3%B5es) sejam destacadas, facilitando a leitura dos erros pelos usuários.
- Ajustes realizados reforçando a segurança no TOTVS Fluig Plataforma.
- Criado método "[getRoles](https://tdn.totvs.com/pages/viewpage.action?pageId=662867789#Documenta%C3%A7%C3%A3odosWebServices-M%C3%A9todos.6)" para que sejam obtidos os papéis vinculados ao usuário na plataforma.
- Corrigida inconsistência ao acessar um documento, para que as opções de parar de notificar e notificar sejam exibidas corretamente na plataforma.
- Corrigida inconsistência na emissão da mensagem de alerta, ao copiar o link de um documento para a área de transferência.

##  

## 05 de Julho de 2022

---

## Correções

- Correção realizada ao consultar um webservice com autenticação do tipo basic para solucionar a inconsistência ao utilizar o serviço na consulta de datasets da plataforma.
- Correção realizada para que seja possível acessar a página de Operações no painel de controle e melhorada a mensagem de erro deixando mais claro para o usuário o que ocorreu.
- Ajustes realizados para que o gestor de um sub-processo consiga movimentar a solicitação normalmente na plataforma.
- Corrigida inconsistência ao criar conteúdo no LMS, para que seja possível executar o conteúdo SCORM sem interrupções em tela.
- Correção realizada para que a marca d'água seja apresentada com a pontuação correta da versão/revisão no momento da impressão.
- Correção realizada para que seja possível inserir pré-requisitos corretamente no tópico desejado.
- Correção realizada para que seja possível realizar alterações nos filtros que possuem ordenação na Central de tarefas. 

##  

## 28 de Junho de 2022

---

## Correções

- Corrigida inconsistência ao incluir um arquivo na pasta *check-out,* para que seja permitido realizar upload somente de documentos que estão em *check-out.*
- Realizado ajustes reforçando a segurança na integração da widget Analytics no TOTVS Fluig Plataforma.
- Corrigida inconsistência no [agendador de tarefas,](https://tdn.totvs.com/x/W4H5DQ) para que o último registro vinculado à um processo não seja excluído do TOTVS Fluig Plataforma.
- Corrigida inconsistência ao utilizar a opção de filtrar pelo nome dos documentos na plataforma.
- Corrigida inconsistência ao selecionar uma pasta na *widget*de *slideshow*para que os botões de ação sejam apresentados corretamente.
- Correção realizada ao solicitar participação em uma comunidade pública e privada na plataforma, para que o usuário participe somente após a confirmação da solicitação. 
- Correção realizada para que a ordenação definida na *widget*Timeline seja respeitada no My Fluig apresentando as postagens na ordem correta.
- Realizada correção para que seja possível a correta visualização, ao abrir um documento pelo GED dentro de uma atividade de serviço.
- Correção realizada ao exportar um processo na plataforma, para que ao acionar a lupa seja possível visualizar todos os usuários da atividade.
- Corrigida inconsistência apresentada ao realizar a movimentação em bloco das solicitações no TOTVS Fluig plataforma. Acesse nosso [portal de notícias](https://suporte.totvs.com/portal/p/10098/suporte-fluig-noticias?id=1056) e saiba mais.

##  

## 14 de Junho de 2022

---

## Correções

- Corrigida inconsistência para que as publicações em comunidades sejam apresentadas corretamente na *timeline*do TOTVS Fluig plataforma.
- Ajustes realizados para que ao definir um [controle de cotas](https://tdn.totvs.com/x/BbYGDg) o mesmo seja aplicado também nas páginas filhas.
- Corrigida inconsistência ao importar documentos atualizados no Fluig para que o conteúdo seja exibido corretamente na plataforma.
- Corrigida inconsistência para que seja permitido a [movimentação em bloco](https://tdn.totvs.com/pages/viewpage.action?pageId=233763380#Plataforma%E2%9D%99Tarefasaconcluir-Movimenta%C3%A7%C3%A3oemBloco) das solicitações na plataforma, com isso, os anexos serão publicados no GED mantendo corretamente o fluxo da movimentação.
- Corrigida inconsistência ao realizar o download de arquivos thumbnails quando a API Thumbnail Fluig estiver habilitada na plataforma.
- Ajustes realizados ao concluir a visualização do [item do treinamento](https://tdn.totvs.com/pages/viewpage.action?pageId=233765948#Plataforma%E2%9D%99Treinamentoemandamento-Visualizaritemdotreinamento). O ajuste promoveu a implementação da frase *"Para sair e contabilizar sua pontuação, clique em Encerrar visualização",*localizada ao lado do botão Encerrar visualização.
- Corrigida inconsistência para que o registro do valor/hora do usuário seja apresentado corretamente no TOTVS Fluig plataforma.

##  

## 07 de Junho de 2022

---

## Correções

- Corrigida inconsistência na [configuração de envio de e-mail](https://tdn.totvs.com/x/CAZbDw), para que as notificações da plataforma sejam enviadas corretamente.
- Ajustes realizados ao [adicionar filtro](/download/attachments/605859464/Adicionar%20Filtro.JPG?version=1&modificationDate=1654553377043&api=v2) na central de tarefas para que o valor limite no range seja de até 7 dígitos.
- Corrigida inconsistência para que ao realizar o check-in do documento sem acessar a aba aprovação, seja exibida a mensagem informando que o arquivo foi enviado para aprovação.
- Corrigida inconsistência para que seja possível a inclusão de valores na tabela pai x filho.
- Correção realizada para que um documento com prazo expirado, seja apresentado na cor vermelha na tela de [documentos favoritos.](https://tdn.totvs.com/x/kvDuDQ)
- Ajustes realizados na exibição do *select*, para que não ocorra duplicidade nos valores no *formdata* ao enviar dados para movimentação de uma atividade.

## 

## 31 de Maio de 2022

---

## Correções

- Corrigida inconsistência ao clicar no scroll do formulário para que o menu do componente seja exibido corretamente.
- Corrigida inconsistência de literais no painel de controle para que ao conceder permissão nas configurações do LMS, as literais sejam apresentadas corretamente traduzidas.
- Corrigida inconsistência para que seja possível realizar o upload de um novo arquivo em uma comunidade na plataforma.
- Ajustes realizados para que seja possível a correta visualização do formulário do Approval.

##  

## 25 de Maio de 2022

---

## Correções

- Ajustes realizados para que ao passar o parâmetro de herdar segurança o mesmo mantenha as informações de download e cópia controlada ao utilizar as APIs e o SOAP createDocument.
- Corrigida inconsistência para que o usuário responsável receba notificação de uma nova tarefa via fluxo automático.
- Removido ícone de imagem das anotações dos documentos na plataforma. 
- Corrigida inconsistência no filtro "reloadZoomFilterValues" em um formulário, para permitir a identificação de parâmetros em branco, indicando que o usuário não quer filtrar por algum determinado campo.
- Corrigida inconsistência ao clicar no botão voltar após movimentar uma [solicitação](https://tdn.totvs.com/pages/viewpage.action?pageId=233763157#Plataforma%E2%9D%99Iniciarsolicita%C3%A7%C3%A3o-Iniciarsolicita%C3%A7%C3%B5es)*,*para que o usuário seja redirecionado à tela de [Iniciar solicitações](https://tdn.totvs.com/x/VfHuDQ).

## 

## 17 de Maio de 2022

---

## Correções

- Correção realizada para que ao utilizar o componente FlUIGC.toast as abas, Detalhes, Complementos e Anexos do formulário não sejam bloqueadas permitindo a correta utilização do mesmo. 
- Correção realizada para que a *widget* [Editor de conteúdo](https://tdn.totvs.com/x/Xy9nF) funcione corretamente ao acionar os ícones para adicionar imagem ou vídeo do ECM. 
- Correção de inconsistência ao editar metadados para que o calendário seja exibido normalmente e as alterações sejam salvas.
- Corrigida inconsistência onde a aba de detalhes não era exibida ao editar um processo exportado do Fluig Studio utilizando o tema Clássico da plataforma.

##  

## 10 de Maio de 2022

---

## Correções

- Corrigida inconsistência ao importar e exportar formulário para o servidor do Fluig.
- Correção realizada tornando a mensagem mais clara ao criar um usuário quando a quantidade máxima já foi atingida e agora passa a ser "Quantidade máxima de usuários excedida."
- Correção realizada para que ao converter uma tarefa o registro no agendador de tarefas permaneça o mesmo, não apresentando mais tarefas duplicadas.
- Correção realizada para que seja possível movimentar os processos através do aplicativo móvel My Approval.
- Correção realizada para que ao enviar um documento para *check-out* com a opção de [segurança](https://tdn.totvs.com/x/G-HuDQ) "herda segurança do pai?" desabilitada, seja possível acessar e realizar alterações nas propriedades do documento normalmente.
- Ajuste realizado para que ao anular uma questão a mesma seja realmente anulada e esteja com o valor "anulado" na guia Situação. 
- Correção realizada para que seja possível visualizar a lista de grupos corretamente. 

## 

## 03 de Maio de 2022

---

## Correções

- Correção realizada para que seja possível acessar o painel de controle > personalização > templates de e-mail corretamente.
- Correção realizada no contador de [hits](https://tdn.totvs.com/pages/viewpage.action?pageId=235325483&preview=/235325483/555271933/Propriedades%20003.png#Plataforma%E2%9D%99Visualizarpropriedadesdodocumento-Visualizaraspropriedadesdodocumento) da plataforma.
- Correção realizada ao gerar log de erros referente a tarefas atrasadas.
- Ajustes realizados reforçando segurança no processo de redirecionamento, para que caso a URL seja de origem externa o sistema redirecionará automaticamente para a tela de login do TOTVS Fluig Plataforma.

## 

## 26 de Abril de 2022

---

## Correções

- Ajustes realizados reforçando segurança na plataforma.
- Ajustes realizados no recurso [Política de Uso](https://tdn.totvs.com/x/UoH5DQ). O ajuste promoveu que ao clicar nas opções sem selecionar um documento, o sistema retorna a seguinte mensagem "*Selecione um documento para visualizar*".
- Corrigida inconsistência apresentada ao buscar um arquivo no **TOTVS Fluig Plataforma.**
- Corrigida inconsistência ao realizar o *upload* de um documento para que o mesmo seja apresentado na lista em tela.
- Corrigida inconsistência ao armazenar documentos a longo prazo na plataforma.
- Ajustes realizados ao utilizar o método setNotificationDays para setar os dias de notificação de um documento.
- Correção realizada para que o arquivo principal seja encontrado corretamente utilizando função do SDK UpdateFile.
- Correção realizada para que ao excluir condições de uma atividade automática as demais atividades automáticas do processo não percam dados.
- Correção realizada para que ao desabilitar a permissão de imprimir os usuários ainda consigam visualizar os arquivos dentro dos anexos. 

## 

## 19 de Abril de 2022

---

## Correções

- Corrigida inconsistência para que a inicialização do Fluig ocorra sem lentidão.
- Ajustes realizados no contador do [total de hits](https://tdn.totvs.com/pages/viewpage.action?pageId=235325483&preview=/235325483/555271933/Propriedades%20003.png#Plataforma%E2%9D%99Visualizarpropriedadesdodocumento-Visualizaraspropriedadesdodocumento) ao visualizar as propriedades do documento.  
- Ajustes realizados reforçando segurança na plataforma.
- Realizada correção para que não seja recriado o cache do gestor caso o mesmo não seja alterado.

## 

## 12 de Abril de 2022

---

## Correções

- Correção realizada para que ao buscar um formulário e editar os *metadados*através da aba Segurança os dados sejam salvos corretamente.
- Correção de inconsistência na opção Ocultar/Exibir Árvore ao visualizar um conteúdo do tipo SCORM em [Trilhas e Treinamentos.](https://tdn.totvs.com/x/SPzuDQ)
- Ajuste realizado na plataforma para que ao incluir um vídeo na widget [Editor de conteúdo](https://tdn.totvs.com/x/Xy9nF), o mesmo seja reproduzido corretamente qdo acessado pelo aplicativo My Fluig. 
- Correção realizada para que ao salvar um processo não ocorra mais a inconsistência na leitura do XML do processo.
- Correção de inconsistência apresentada ao incluir valor na tabela pai x filho.
- Removido o recurso "[Área de Transferência](https://tdn.totvs.com/download/attachments/243011329/area%20de%20transferencia1.png?version=4&modificationDate=1594315106130&api=v2)" do menu da Navegação de Documentos. 

##  

## 05 de Abril de 2022

---

## Correções

- Corrigida inconsistência ao visualizar a impressão de cópia controlada. Com a correção, a [marca d' água](https://tdn.totvs.com/x/BoH5DQ) encontra-se posicionada corretamente no rodapé do documento. 

##  

## 22 de Março de 2022

---

## Correções

- Correção realizada para que os dados de um serviço SOAP venham preenchidos corretamente possibilitando sua edição através do Eclipse.
- Correção realizada para que os ícones do menu sejam exibidos corretamente quando utilizado o tema Clássico do Fluig.
- Realizada correção para que a tela de download do aplicativo My Fluig não seja exibida em casos onde exista uma página de login customizado configurada.
- Correção realizada para que as solicitações sejam apresentadas corretamente, ao [consultar solicitações](https://tdn.totvs.com/x/WfHuDQ) do gestor na plataforma.
- Corrigida inconsistência ao [configurar mecanismo de atribuição](https://tdn.totvs.com/pages/viewpage.action?pageId=265783517) para grupo na plataforma. 
- Correção de inconsistência ao[consultar solicitações](https://tdn.totvs.com/pages/viewpage.action?pageId=233763161) no **TOTVS Fluig** Plataforma. 
- Corrigida inconsistência apresentada em [documentos a aprovar](https://tdn.totvs.com/x/XvLuDQ) na Central de tarefas do usuário.

##  

## 15 de Março de 2022

---

## Correções

- Correção realizada para que as listas ordenadas ou não ordenadas sejam apresentadas corretamente nos detalhes das solicitações.
- Correção realizada para que um dataset utilizando o método findById traga os resultados passados corretamente em ambientes que utilizam o banco de dados Oracle. 
- Realizado atualização à níveis de segurança da plataforma.
- Ajustes realizados reforçando segurança na plataforma.

## 

## 08 de Março de 2022

---

## Correções

- Corrigida inconsistência para que seja apresentada a listagem dos usuários adicionados a um grupo.
- Correção realizada para que a atualização da *widget* seja realizada sem precisar reiniciar o serviço.
- Corrigida inconsistência apresentada ao [adicionar](https://tdn.totvs.com/pages/viewpage.action?pageId=235597350#Plataforma%E2%9D%99Empresas-Adicionarempresa)a primeira empresa na plataforma. 
- Correção realizada para que seja possível copiar e colar uma pasta corretamente em casos onde se utiliza um evento global como o *validateCustomMetadata*.
- Realizado atualização à níveis de segurança da plataforma.
- Ajustes realizados ao iniciar solicitações na plataforma. O ajuste promoveu a alteração do ícone do botão "Voltar".

##  

## 01 de Março de 2022

---

## Correções

- Correção realizada para que os usuários consigam visualizar os gráficos da *widget* do Analytics corretamente.
- Ajustes realizados ao buscar um documento. Com os ajustes, o sistema passa a filtrar não apenas pelo nome completo, mas também por parte do texto.
- Correção realizada para que o campo Comentários do *template* de e-mail para atividades atrasadas seja preenchido corretamente com os comentários que foram incluídos no campo. 
- Corrigida inconsistência para que um grupo removido, não seja visualizado na pasta do **TOTVS** **Fluig.**

##  

## 15 de Fevereiro de 2022

---

## Correções

- Ajustes realizados ao gerenciar permissões de um usuário existente. Com os ajustes, as permissões passam a ser exibidas em ordem alfabética. 
- Ajustes realizados ao buscar um documento na plataforma. Com o ajuste, será possível localizar o botão "Ir para a pasta", nas [ações do documento.](https://tdn.totvs.com/pages/viewpage.action?pageId=233763874)
- Correção de inconsistência apresentada ao visualizar usuários pertencentes à um grupo do **TOTVS Fluig** Plataforma.
- Correção realizada para que o botão Cancelar fique desabilitado após o clique, não havendo movimentações duplicadas nas solicitações e trazendo seu status corretamente.

##  

##  08 de Fevereiro de 2022 

---

## Correções

- Correção realizada para que as atividades de serviço sejam executadas corretamente após a movimentação por fluxo automático.
- Correção realizada para que ao consultar um [dataset sincronizado](https://tdn.totvs.com/x/xZSwD) as colunas sejam apresentadas na ordem em que o *select* foi realizado.
- Corrigida inconsistência ao editar grupo na plataforma. A correção promoveu a correta visualização dos botões "Adicionar usuário", "Adicionar papel", "Adicionar grupo" e "Remover".
- Correção de inconsistência ao realizar *check-in* de um documento. A correção promoveu a correta visualização da estrutura de [aprovação](https://tdn.totvs.com/pages/viewpage.action?pageId=243008763) na tela de documentos.
- Ajustes realizados para que os arquivos sensíveis, estejam adequados a nova implementação da regulamentação da Lei Geral de Proteção de Dados Pessoais (**LGPD** ou **LGPDP**) na organização.
- Realizada correção para que ao alterar o gestor de um processo com mecanismo customizado, ele seja efetivamente alterado no sistema.
- Correção realizada para que ao excluir um serviço via webservice o registro na base de dados seja excluído com sucesso.

##  

##  01 de Fevereiro de 2022 

---

## Correções

- Efetuada correção para que ao editar metadados de um registro de formulário pelo campo de busca do fluig, não seja apresentada inconsistência e a edição seja efetuada.
- Efetuada correção nos filtros por Processo na Consulta de Solicitações, para que traga os resultados corretos, conforme a busca realizada.
- Corrigida inconsistência que gerava lentidão para abrir uma solicitação pela Central de Tarefas ou na tela de Consultar Solicitações.
- Ajuste realizado para que seja possível importar *widgets* do [kit intranet](https://tdn.totvs.com/x/nbBICw) sem inconsistências realizando sua configuração e tendo seu uso conforme o esperado.

##  

##  25 de Janeiro de 2022 

---

## Correções

- Efetuada correção para que a pontuação de um conteúdo SCORM seja atribuída corretamente ao atingir o tempo mínimo de visualização exigido.
- Realizado ajuste no Forms, para que ao clicar no botão avançar, os registros paginados sejam mostrados corretamente.

##  

##  18 de Janeiro de 2022 

---

## Correções

- Correção realizada para os modais sejam exibidos corretamente quando abertos através do aplicativo My Fluig.
- Ajustes realizados para que o espaçamento entre linhas não fique duplicado em publicações feitas na timeline de comunidades não sendo mais possível que o usuário insira mais de duas quebras de linha. Essa melhoria foi feita para garantir que a formatação da publicação seja correspondente ao que o usuário digitou.
- Correção realizada para que o filtro funcione corretamente trazendo a quantidade de registros que foi informado ao realizar a consulta da datasets.
- Realizada correção no evento de formulário *EnableFields* para que quando utilizado numa tabela pai x filho, os campos não apareçam vazios.
- Realizada correção no plug-in do Fluig para que ao desabilitar a opção "notifica responsável" na aba de acompanhamento de uma atividade, a opção seja salva corretamente ao fechar o diagrama.

## 

##  11 de Janeiro de 2022 

---

## Correções

- Realizados ajustes para não apresentar inconsistência na consulta de solicitações quando é realizada uma conversão de versão de processo.
- Realizada correção para que ao incluir uma atribuição por grupo em um campo de formulário, sejam listados corretamente os usuários do grupo.
- Efetuados ajustes para que um processo possa ser movimentado por um usuário aplicativo utilizando as APIs da plataforma.
- Corrigida lentidão na inicialização do **TOTVS** Fluig após atualização da versão.
- Corrigida inconsistência apresentada na tela [gerenciar permissões](https://tdn.totvs.com/pages/viewpage.action?pageId=234455792#Plataforma%E2%9D%99Permiss%C3%B5es-Gerenciarpermiss%C3%B5es) ao remover um registro na tela de [papéis. ](https://tdn.totvs.com/pages/viewpage.action?pageId=234455398#Plataforma%E2%9D%99Pap%C3%A9is-Falandodepap%C3%A9is...)
- Corrigida inconsistência na tela g*erenciar dados adicionais*do **TOTVS** Fluig*.*Ao remover os dados adicionais de um [usuário](https://tdn.totvs.com/pages/viewpage.action?pageId=234455411#Plataforma%E2%9D%99Usu%C3%A1rios.-Falandodeusu%C3%A1rios...), um alerta será apresentado com a seguinte mensagem: "Alguns dados adicionais retornarão aos valores originais, pois não podem ser excluídos".
- Corrigida inconsistência ao acessar o conteúdo das pastas através do aplicativo My Fluig. 
- Corrigida inconsistência apresentada ao [emitir relatório de permissões](https://tdn.totvs.com/pages/viewpage.action?pageId=234455792#Plataforma%E2%9D%99Permiss%C3%B5es-Emitirrelat%C3%B3riodepermiss%C3%B5es) na tela [gerar relatório](https://tdn.totvs.com/download/attachments/234455792/Gerar%20relat%C3%B3rio.png?version=1&modificationDate=1622128592223&api=v2) do **TOTVS** Fluig plataforma.
- Ajustes realizados nos [Dados Pessoais](https://tdn.totvs.com/x/61nNI) do Help em inglês e espanhol do **TOTVS** Fluig. O ajuste promoveu a tradução dos dados inseridos pelo usuário na plataforma.  
- Corrigida inconsistências ao buscar [itens na lixeira](https://tdn.totvs.com/pages/viewpage.action?pageId=243636051#Plataforma%E2%9D%99Lixeira-Buscaritensnalixeira) pelo filtro [data de exclusão](https://tdn.totvs.com/pages/viewpage.action?pageId=243636051&preview=/243636051/589775958/Filtrar%20registros%20lixeira.png#Plataforma%E2%9D%99Lixeira-Buscaritensnalixeira). A correção promoveu também a inclusão de um alerta com a seguinte mensagem: "O filtro não pode ser aplicado pois a data inicial é maior que a data final".
- Corrigida inconsistência apresentada ao gerenciar permissões do [Grupo](https://tdn.totvs.com/x/YIH5DQ) no**TOTVS** Fluig Plataforma.
- Solucionada inconsistência ao tentar inserir uma data de validade dos documentos nos campos "Válido a partir de" e "Válido Até", nas [propriedades do documento](https://tdn.totvs.com/x/uMaFDg) aba informações gerais.

##  

##  22 de Dezembro de 2021 

---

Correção Mandatory

Foi identificada uma vulnerabilidade crítica que requer uma atenção especial em seu ambiente.
A situação corrigida encontra-se disponível a partir do pacote **1.7.1-211222.**

Saiba quais são os impactos:

- A situação de vulnerabilidade conhecida como **Log4Shell** foi corrigida com a atualização de versão do **Solr**, trazendo com ela a nova versão da biblioteca **log4j**. Nesta atualização foram realizados ajustes para sanar esta falha de segurança.

Para mais detalhes sobre a situação confira o **comunicado oficial** no TDN.

## Correções

- Corrigido inconsistências na ferramenta de busca **TOTVS** Fluig Plataforma. O **Solr foi atualizado para 8.11.1** e proporcionou a correção nas vulnerabilidades do **log4j**, da indexação de conteúdo de arquivos pdf e nas datas dos documentos inseridos no padrão UTC.

Importante!

Com esta atualização do **Solr** é necessário realizar a indexação dos documentos, selecionando as opções de *Conteúdo* e *Todos os documentos.* Esse procedimento simples irá evitar que o recurso apresente instabilidades, como resultados duplicados ou documentos não encontrados.

##  

##  21 de Dezembro de 2021 

---

## Correções

- Ajuste realizado para que o alerta ao editar uma página seja apresentado no idioma em que a plataforma foi definida.
- Correção realizada para que as [menções de usuários](https://tdn.totvs.com/x/tfvuDQ) em comunidades funcionem corretamente após a inserção do caractere @, trazendo os usuários pertencentes àquela comunidade.
- Corrigida inconsistência apresentada nas configurações do protocolo HTTPS do TOTVS Fluig Plataforma.
- Ajustes realizados nos campos "Versão/Revisão" e "Controle de Versão" das [Propriedades dos Documentos](https://tdn.totvs.com/pages/viewpage.action?pageId=243648184#Plataforma%E2%9D%99Propriedadesdodocumento-Controledevers%C3%A3o). Com os ajustes, não será possível realizar a troca de versão do documento em *check-out*, essa alteração deverá ser efetuada somente no *check-in*.
- Realizado ajuste na tela "Esqueci minha senha". O ajuste promoveu a criação de um *endpoint*  para que as informações confidenciais via *token* sigam os protocolos de segurança das APIs. 
- Correção de inconsistência que ocorria ao remover grupos da permissão de visualização do processo.
- Realizada correção nos filtros de processos, para que ao configurar as permissões de visualização para um grupo dentro de outro grupo, as permissões sejam validadas e funcionem corretamente.
- Realizado ajuste no método *startProcessClassic* para que não retorne nenhuma inconsistência ao ser utilizado.

##  

##  14 de Dezembro de 2021 

---

## Correções

- Corrigida a validação do tempo mínimo de execução de um conteúdo SCORM quando a pontuação é definida como automática.
- Corrigida inconsistência na tela inicial do **TOTVS Fluig .**Por padrão, a plataforma apresenta o ícone [Painel de Controle](https://tdn.totvs.com/x/LfDuDQ)ao usuário administrador. Com a correção, o ícone passou a ser apresentado para usuários com permissão. Para saber mais sobre permissões, consulte a documentação [Acessar as permissões do recurso](https://tdn.totvs.com/pages/viewpage.action?pageId=234455792#Plataforma%E2%9D%99Permiss%C3%B5es-Acessaraspermiss%C3%B5esdorecurso).
- Efetuados ajustes no recurso Contas para validar quando não há créditos ou a conta está expirada ao tentar efetivar matrículas relacionadas a ela.
- Realizada correção para sanar vulnerabilidade XSS no campo "Esqueci minha senha".
- Correção realizada para que não ocorra inconsistências ao editar páginas do [kit intranet](https://tdn.totvs.com/x/nbBICw).
- Correção realizada para que ao compartilhar um post na [comunidade](https://tdn.totvs.com/x/GIL5DQ) não ocorra inconsistências na timeline e seu conteúdo já publicado.
- Realizada correção para que ao abrir um documento pelo ged dentro de uma atividade de serviço, ele seja visualizado corretamente.
-  Realizada correção de inconsistência ao acessar o Fluig plataforma via aplicativo Identity.
- Realizada correção de inconsistência que impedia um usuário comum de adicionar outros usuários em grupos existentes.
- Ajustes na tela de [Notificações](https://tdn.totvs.com/pages/viewpage.action?pageId=234455600#Plataforma%E2%9D%99Notifica%C3%A7%C3%B5es-Falandodenotifica%C3%A7%C3%B5es...) aba Documentos do Painel de Controle. O ajuste promoveu a remoção dos itens "Reunião iniciada a partir de um documento" e "Reunião sobre um documento encerrada", pois estes recursos passaram a não existir mais no **TOTVS Fluig** plataforma.

##  

##  07 de Dezembro de 2021 

---

## Correções

- Realizada implementação de arquivo [robots.txt](https://tdn.totvs.com/x/kObRJg) possibilitando ao usuário administrador habilitar ou não que páginas públicas possam ser [indexadas](https://tdn.totvs.com/x/zYL5DQ) por ferramentas de busca. A configuração padrão, se não alterada, orientará os *crawlers* a não indexar nenhuma página.
- Realizado ajuste para que as [publicações com imagens](https://tdn.totvs.com/x/rPvuDQ) CMYK sejam realizadas corretamente e sejam visualizadas no mobile.
- Corrigido inconsistência apresentada na categoria "Outros". Com a correção, as permissões para listas passaram a ser exibidas na página inicial do **TOTVS Fluig** para usuários comuns.

##  

##  30 de Novembro de 2021 

---

## Correções

- Corrigido o campo "Pontuação mínima para aprovação" da disciplina para permitir informar a pontuação 100.
- Corrigida a visualização de conteúdos SCORM para não sobrepor informações ao habilitar as opções de controle de exibição.
- Corrigida a edição de disciplinas para que a imagem inserida na criação não seja perdida.
- Ajuste no comportamento do [redirecionamento mobile](https://tdn.totvs.com/x/4e2QGQ) para que funcione corretamente em [navegadores mobile](https://tdn.totvs.com/x/Gw0SCw).
- Realizado ajustes na aba [Informações Gerais](https://tdn.totvs.com/x/GMgGDg) da tela Alteração em bloco do TOTVS Fluig plataforma. Com os ajustes, foram inseridos novos campos a serem selecionados de acordo com a necessidade do usuário. 
- Realizada nova correção no comando hAPI.setTaskComments para que seja possível customizar mensagens nos complementos, sem falhas.
- Realizada correção de erro de *timeout* que ocorria ao solicitar [reindexação](https://tdn.totvs.com/x/zYL5DQ) em base com muitos documentos.

##  

##  23 de Novembro de 2021 

---

## Correções

- Corrigida inconsistência ao importar [certificados](https://tdn.totvs.com/x/sCYrI) na *keystore* após atualização do TOTVS Fluig Plataforma.
- Realizada correção para que ao utilizar um dataset customizado em um processo offline, o zoom traga todos os resultados corretamente, assim como acontece pela web.

## 

##  16 de Novembro de 2021 

---

## Correções

- Realizado melhoria no Painel de controle ao [Anonimizar e exportar dados pessoais](https://tdn.totvs.com/x/uOpvI) de um usuário no Fluig. A melhoria deu-se com a alteração do *pattern* de data no e-mail anonimizado.
- Ajuste realizado para que um dataset não tenha seus valores duplicados ao realizar a sincronização utilizando o banco de dados Oracle.
- Corrigida inconsistência para que ao converter um processo com uma atividade condicional a conversão seja feita corretamente para o System:auto.
- Realizada correção para que o mobile My Fluig permita que a opção de anexar imagens nos formulários, seja disponibilizada corretamente.

##  

##  10 de Novembro de 2021 

---

## Correções

- Correção realizada ao acionar o botão "Confirmar" na tela [editar ](/pages/viewpage.action?pageId=233763101)[propriedades do documento](/pages/viewpage.action?pageId=233763101) na Plataforma.
-  Ajustes realizados na tela de [resultado da busca](/pages/viewpage.action?pageId=233762865), para permanecer na mesma tela após fechar a visualização de um [documento](/pages/viewpage.action?pageId=233763874).
- Corrigida inconsistência na visualização de documentos. Com a correção, a opção "Visualizar documento" passou a ser apresentada após clicar em "[Visualizar propriedades](/pages/viewpage.action?pageId=235325435)."
- Correção realizada na API para que o redirecionamento de links customizados tenha seu comportamento adequado tanto na plataforma quanto no aplicativo My Fuig.
- Realizado ajuste para ao copiar e colar um texto de um arquivo .docx no complemento da solicitação, para que o conteúdo seja salvo corretamente.

- Realizado ajuste para que ao utilizar a hAPI.setTaskComments o solicitante consiga visualizar os complementos adicionados de forma correta.
- Corrigida inconsistência para que ao cancelar o upload de anexo, a solicitação não seja automaticamente cancelada.
- Realizada correção na utilização do campo textarea dentro de uma tabela pai x filho, para que o conteúdo seja visualizado corretamente após iniciada a solicitação.
- Corrigida a verificação de permissões para que usuários comuns não possam remover itens de trilha.

##  

##  03 de Novembro de 2021 

---

## Correções

- Correção realizada para que ao criar um artigo e visualizá-lo pela *timeline* o mesmo tenha sua visualização apresentada corretamente sem quebra de palavras.
- Realizada correção de inconsistência na edição colaborativa com Google Drive. Com a correção, convidados passar a ter permissão de editar o documento, e somente usuários com permissão de modificação ou maior podem ser convidados a editar o documento de forma colaborativa.
-  Ajustes realizados ao carregar um arquivo no Fluig. Com o ajuste, o checkbox "Criar Versão/Revisão obrigatória" passou a ser editável quando o documento for ou estiver privado (checkout).
- Corrigida inconsistência ao carregar arquivos na função "[Publicação múltipla](/pages/viewpage.action?pageId=233763122)". 
- Corrigida inconsistência que impossibilitava a aplicação do filtro de categorias na tela de adição de [permissões](/pages/viewpage.action?pageId=234455792), dentro do cadastro de usuários, grupos e papéis.

##  

##  26 de Outubro de 2021 

---

## Correções

- Corrigida inconsistência em atividades com o evento beforeTaskSave, para que seja executado corretamente.
- Realizada correção para que ao utilizar a API api/public/2.0/job/list quando existir uma tarefa de fluxo intermediário do tipo condicional, o json seja corretamente retornado.
- Realizada correção na central de tarefas, para que o indicador de solicitações mostre o número correto no menu "minhas solicitações".
- Correção realizada no arquivo package.json. Antes, ao atualizar a plataforma e ao ter o *https* ativado com um [certificado](/pages/viewpage.action?pageId=354472893) com senha, a tag passphrase era removida do arquivo, impedindo o serviço Realtime de iniciar. Com essa correção, a tag passphrase passa a ser padrão do arquivo package.json e consequentemente evitando esta remoção.

## 

##  19 de Outubro de 2021 

---

**Novo painel de Indicadores**

O novo painel de indicadores do Fluig Analytics é uma aba que sumariza as principais informações de cada módulo do seu Fluig Plataforma, assim facilitando a gestão dos indicadores.

**Novas métricas TOTVS Fluig No-Code**

Você que usa os aplicativos Forms e Tasks do TOTVS Fluig No-Code agora poderá tirar as métricas de uso e extrair relatórios com diversas informações.

- [Aba No-Code painel principal](#)
- [Visão análise detalhada](#)
- [TOP 5 funções mais utilizadas](#)
- [TOP 5 usuários que mais utilizam](#)

![](/download/attachments/605859464/no-code%20analytics.png?version=1&modificationDate=1634232926433&api=v2)

![](/download/attachments/605859464/analise%20detalhada%20no-code.png?version=1&modificationDate=1634655142017&api=v2)

![](/download/attachments/605859464/top%205%20fun%C3%A7%C3%B5es%20mais%20utilizadas.png?version=1&modificationDate=1634233353137&api=v2)

![](/download/attachments/605859464/TOP%205%20usuarios%20que%20mais%20utilizam.png?version=1&modificationDate=1634233957477&api=v2)

Isso porque liberamos no Fluig Analytics a aba No-Code onde o administrador poderá colher várias informações como algumas citadas abaixo:

- TOP 5 funções mais utilizadas;
- TOP 5 usuários que mais utilizam os aplicativos;
- Análise detalhada do No-Code;
- Aba KPIs.

Também é possível verificar quantidade de movimentações por data e tendência, a adesão dos aplicativos, a porcentagem de movimentação de cada aplicativo e entre outras informações relevantes para você saber como está sendo o aproveitamento de cada aplicativo contratado.

Veja todos os detalhes da novidade na documentação de [Relatórios Analytics 2.2.0](https://tdn.totvs.com/x/8aUPJQ).

## Correções

- Para realizar *upload* de vídeos tanto em comunidades quanto em documentos pessoais, a geração de *thumbnails* deve ser habilitada por empresa no usuário WCMADMIN. Para saber como ativar essa configuração, consulte a documentação [Habilitando Thumbnails.](/display/fluig/Configurar+e+Habilitar+Thumbnails)
- Corrigida inconsistência ao pesquisar usuários de um determinado grupo no Fluig plataforma. A correção implementou um recurso de paginação na ferramenta de edição/adição de grupos.
-  Corrigida inconsistência no permissionamento de formulários em processos que impedia que registros fossem apresentados nas buscas corretamente.
- Corrigida inconsistência ao realizar a busca por um processo, para que ao clicar na imagem ao lado do nome do processo, ele seja aberto corretamente.
- Realizado ajuste na central de tarefas, para que o indicador de solicitações mostre o número correto no menu minhas solicitações.
- Realizada correção nos detalhes da solicitação, para que seja exibido corretamente os nomes dos usuários atribuídos a solicitação.
- Correção realizada no processo de indexação dos documentos no Fluig Plataforma.

##  

##  13 de Outubro de 2021 

---

## Correções

- Correção da inconsistência ao visualizar as propriedades de um documento que esteja anexado em um processo.
- Correção da inconsistência para visualizar a página de documentos avançados.
- Correção realizada para que ao tentar excluir uma página em "Minhas páginas" a mesma seja excluída corretamente.
- Criada novas APIs públicas para navegação de documentos e pastas.
- Corrigida inconsistência no código que removia "/portal" da URL ao gravar na tabela FDN_PARAMGERAL.  Com a correção, apenas o último '/portal' da URL é removido.
- Ajuste realizado para que as abas das propriedades de um documento sejam exibidas corretamente.
- Efetuadas correções para permitir a busca por documentos com versão ativa, mesmo estando em aprovação. Com essa correção, será possível visualizar a versão ativa do documento independente de outra versão ou revisão do mesmo documento estar em aprovação.
- Realizada correção de inconsistência ao tentar editar permissões na área de [Comunidades](/pages/viewpage.action?pageId=234455576) do Fluig. 
- Ao tentar incluir uma [permissão](/pages/viewpage.action?pageId=234455792) no Painel de Controle uma falha era apresentada, com isso, foi corrigida a inconsistência na atribuição de permissão de recursos que possuíam subcategorias.
- Realizado ajuste no componente de pesquisa de formulário, para que as tradução dos textos estejam de acordo, conforme idioma selecionado pelo usuário.
- Corrigida inconsistência ao movimentar um processo do fork para uma atividade de serviço.
- Corrigida inconsistência ao utilizar um dataset customizado em um processo *offline*, para que funcione corretamente.
- Criada a versão 6 do hotfix que permite alterar o login de usuários (UpdateLogin*.jar).

##  

##  05 de Outubro de 2021 

---

## Correções

- Realizada a correção das duplicidades dos campos "Grupo de trabalho workflow", na tela de edição do usuário.
- Realizada correção no fluxo automático de um processo conectado a um link, para que a solicitação seja movimentada corretamente após o prazo.
- Realizado ajuste no webservice ECMWorkflowEngineService para que o método getActualThread valide corretamente um usuário com login e matrícula diferentes.
- Corrigido o mecanismo customizado para que atribua corretamente a atividade para o usuário correto.
- Corrigida a finalização de avaliações de treinamentos que possuem um conteúdo SCORM não obrigatório.

##  

##  28 de Setembro de 2021 

---

## Correções

- Efetuadas correções para permitir a remoção de permissões de pastas, trilhas e treinamentos no catálogo.
- Corrigida inconsistência no aplicativo My approval para que o histórico completo seja visualizado corretamente no IOS e Android.
- Realizada correção no My fluig para que ao salvar um formulário Pai x Filho como rascunho, ele seja salvo corretamente.
- Criação de *endpoint* na API de Documentos para registrar hits de acesso em documentos.

## 

##  21 de Setembro de 2021 

---

## Correções

- Correção de inconsistências na tela de Listas.
- Realizada a atualização do servidor de Indexação (Solr) para a versão 8.9.0.
- Correção realizada para que ao acessar páginas do Fluig, os indicadores de acesso no Analytics sejam apresentados corretamente.
- Realizada correção ao transferir uma atividade em pool, para que ao gerar o relatório da consulta, ela retorne corretamente os dados.

## 

##  08 de Setembro de 2021 

---

## Correções

- Correção realizada para que não seja exibida a página de download padrão no navegador do dispositivo em casos onde o Fluig já tenha uma página customizada ou de redirecionamento. Nesses casos, será exibida a página customizada diretamente.
- Realizada correção no Style Guide para deixar a formatação correta nos componentes de zoom quando possuem ícones.
- Correção realizada para realizar ações no menu de documentos em comunidades corretamente.
- Correção realizada para que ao adicionar ou remover uma *widget*, a mesma respeite a ação e seja adicionada ou removida corretamente.
- Realizada correção para que ao transferir uma solicitação com atividade de mecanismo de atribuição configurada, ela não seja enviada para consenso automaticamente.
- Realizada correção na aba anexos da solicitação, para que quando feito o download de um anexo, ele seja exibido corretamente sem fechar a tela da solicitação.
- Corrigida falha no registro do certificado que ocasionava erro na visualização de documentos.
- Criado *hotfix* que solicita apenas o período para recalcular a nota de avaliações finalizadas.

 31 de Agosto de 2021 

---

## Correções

- Efetuadas correções para permitir a remoção de eventos de aprendizado.
- Corrigida validação do campo "Download e impressão" nas configurações de segurança do documento, para permitir a alteração apenas se a opção "Herda segurança do pai?" estiver desmarcada.
- Correção realizada na mensagem emitida ao tentar cadastrar uma política de uso como termo de consentimento na plataforma, sendo que o termo de consentimento já está configurado no cadastro da empresa no TOTVS Identity.
- Ajustes realizados na tela de gerenciamento de permissões disponível no cadastro de Usuários, Grupos e Papéis, para facilitar a identificação das permissões que podem ser alteradas e aquelas que podem apenas ser visualizadas.
- Ajustes realizados na tela de gerenciamento de permissões disponível no cadastro de Usuários, Grupos e Papéis, para que os itens configurados sejam exibidos ao usuários sem precisar ter que salvar o registro.

## 

##  24 de Agosto de 2021 

---

**TOTVS Forms dentro de Comunidades**

A união de ferramentas que permitem otimizar as tarefas do dia a dia trazem aos usuários inúmeros benefícios. E foi pensando nisso e no aumento da sinergia entre as ofertas **TOTVS** **Fluig Plataforma** e **TOTVS** **Fluig No-Code**, que trouxemos o **TOTVS Forms** para dentro das Comunidades.

Agora é possível ter acesso ao **TOTVS Forms** diretamente de dentro da comunidade, para isso, basta acessar as configurações e permitir a visualização da aba **TOTVS Forms**.

A partir disso, é possível criar um formulário diretamente dentro do **TOTVS Forms **e compartilhá-lo facilmente na comunidade que desejar.

Para saber como funciona essa nova integração e seu passo a passo, acesse a documentação [Publicar TOTVS Forms em comunidade](https://tdn.totvs.com/x/Ml_JJQ).

**Fluig e NoCode o melhor dos dois mundos agora juntos!**

Nesta atualização, estamos lançando uma nova possibilidade de integração para o TOTVS Fluig Plataforma. Clientes que possuem as soluções NoCode, **TOTVS Forms** e **TOTVS Tasks** poderão integrar com a plataforma através de *widgets*.

Essa inovação veio com o objetivo de trazer uma visão facilitada para os clientes unificando as visões da plataforma e dessas soluções. 

No caso do **TOTVS Forms** poderão ser associados formulários **definidos como públicos** em suas configurações para recolher opiniões, avaliações e inscrições, por exemplo, permitindo que os colaboradores acessem os formulários diretamente através da interface da plataforma Fluig. 

Os formulários também podem ser alterados conforme a necessidade, sendo possível trocar os formulários associados a qualquer momento a partir das configurações do *widget*.

Outra solução que podemos integrar a partir de agora é o **TOTVS Tasks** que visa facilitar o gerenciamento das atividades por parte dos colaboradores que poderão associar suas listas de tarefas para que sejam exibidas na plataforma facilitando e otimizando a tomada de decisão.

No caso do TOTVS Tasks, os colaboradores definirão qual lista desejam exibir, podendo adicionar mais tarefas, e também trocar a lista a qualquer momento, realizar a busca de uma tarefa através da barra de busca ou até mesmo desassociar a lista.

Todas essas novidades que preparamos visam facilitar o acesso e a visualização das informações para que a experiência com nossos produtos seja cada vez mais fluida.

Para conseguir utilizar os widgets é necessário ter a oferta No-Code contratada, ter a integração com o TOTVS Identity habilitada e a integração entre TOTVS Fluig Plataforma e TOTVS Fluig No-Code também habilitada.

- Saiba mais sobre a oferta no [site](https://www.totvs.com/fluig/nocode/).
- Veja como habilitar as integrações na documentação [Empresas](https://tdn.totvs.com/x/Ju4KDg).

Veja todos os detalhes sobre como utilizar os widget em: [Configurar widget Formulários - TOTVS Forms](https://tdn.totvs.com/x/2NUPJQ) e [Configurar widget Lista de tarefas - TOTVS Tasks](https://tdn.totvs.com/x/C9sPJQ).

- [Widget TOTVS No-Code](#)
- [Widget TOTVS Forms - Associar formulário](#)
- [Widget TOTVS Forms - Formulário associado](#)
- [Widget TOTVS Forms publicada](#)
- [Widget TOTVS Tasks](#)
- [Widget TOTVS Tasks - Associar lista](#)
- [Widget TOTVS Tasks publicada](#)

![](/download/attachments/605859464/Incluir%20widgets.png?version=1&modificationDate=1629817370117&api=v2)

![](/download/attachments/605859464/Associar%20totvs%20forma.PNG?version=1&modificationDate=1629821256343&api=v2)

![](/download/attachments/605859464/totvs%20forms%20associado.PNG?version=1&modificationDate=1629821328770&api=v2)

![](/download/attachments/605859464/totvs%20forms%20publicado.PNG?version=1&modificationDate=1629821416000&api=v2)

![](/download/attachments/605859464/configurar%20totvs%20tasks.PNG?version=2&modificationDate=1629821509700&api=v2)

![](/download/attachments/605859464/associar%20lista%20de%20tarefa.PNG?version=1&modificationDate=1629821731887&api=v2)

![](/download/attachments/605859464/totvs%20tasks%20publicado.PNG?version=1&modificationDate=1629821774097&api=v2)

## Correções

- Corrigida inconsistência no controle de cotas que impedia a edição de pastas.
- Realizada otimização para evitar falhas em download de pastas com vários documentos e subpastas dentro. Alterado também para que os anexos sejam sempre baixados quando realizado o download em segundo plano.
- Corrigida inconsistência no cadastro de política de uso.
- Ajuste realizado para apresentar corretamente no termo de consentimento a logo cadastrada nas configurações do tema.
- Correção na validação da opção "Herda segurança do pai?" da tela de Alteração em bloco.
- Realizada a correção ao anexar arquivos no processo, para que ao utilizar o *listAttachments* os arquivos sejam enviados ao GED corretamente.
- Corrigida inconsistência para que o processo com atividade de mecanismo de atribuição por campo de formulário, permita visualizar todos os usuários nos complementos, após movimentar a atividade.
- Realizada correção nos complementos da solicitação para que os comentários adicionados nas observações sejam visualizados corretamente, após a migração ECM para Fluig.

## 

##  17 de Agosto de 2021 

---

## Correções

- Correção realizada ao tentar imprimir documentos não suportados no recurso de impressão de cópia controlada.
- Ajuste realizado nos campos de cota padrão da tela de [Controle de cotas](/pages/viewpage.action?pageId=235320837), para emitir uma mensagem ao tentar salvar o campo sem conteúdo. 
- Correção realizada para que ao desativar um usuário, o mesmo não seja exibido na listagem de usuários ativos e não seja mais exibido nas abas de conexões do aplicativo My Fluig.
- Correção realizada para que ao excluir uma tarefa através da Central de tarefas e acessar a timeline da comunidade, a mesma seja exibida normalmente.
- Corrigida inconsistência na movimentação de solicitação para que execute as etapas de serviço corretamente.
- Realizada correção na execução do ecmvoldemort.war.
- Corrigida a inconsistência na central de tarefas.

---

**Versão 2.1.0 do TOTVS Fluig Analytics**

Lançamos nesta versão algumas melhorias e correções. 

- Realizada correção referente às métricas de Documentos com Downloads, Solicitações Abertas e Solicitações fechadas, pois as métricas não apresentavam a sintaxe MAQL correta.
- Mudança na disposição dos relatórios para uma melhor leitura e entendimento das informações
- Adição dos relatórios: # Solicitações Fechadas, # Quantidade de Documentos sem Acessos, # Interações, # Média por Página

Confira essas melhorias na documentação [Relatórios Analytics 2.1.0](https://tdn.totvs.com/x/8aUPJQ).

## 

##  10 de Agosto de 2021 

---

**Tema Snowflake como padrão em novas instalações**

A partir da atualização 1.7.1-210810 as novas instalações do TOTVS Fluig Plataforma virão com o tema *Snowflake* como *default*, ou seja, como padrão. Essa melhoria foi pensada com o objetivo de oferecer uma experiência mais agradável e fluída aos nossos clientes.

## Correções

- Inclusão do formato .mov para realização de *upload* de vídeos no Fluig Plataforma.
- Correção de inconsistência na atribuição de permissões em processos, que impedia o download de anexos da solicitação.
- Correção de inconsistência que impedia a descompactação do arquivo apache-cxf.zip e não criava a pasta apache-cxf.
- Realizada correção no carregamento da pré-visualização dos processos.
- Realizada correção na central de tarefas para que ao utilizar o idioma em Espanhol, a data na coluna de abertura seja visualizado no formado correto.
- Realizada correção no comando hAPI.setTaskComments para que seja possível customizar mensagens nos complementos, sem falhas.
- Corrigida inconsistência ao extrair um relatório do registro do forms Beta, para que todos os resultados sejam trazidos corretamente.

## 

##  03 de Agosto de 2021 

---

## Correções

- Correção de inconsistência que impedia a exibição de vídeos no navegador Safari e no aplicativo My Fluig para iOS.
- Ajuste realizado para que a opção de selecionar permissão seja apresentada corretamente para todos os usuários.
- Ajustes no filtro de pesquisa da tela de Papéis, para buscar também pelo código do papel.
- Ajustes na validação dos campos matrícula e login do usuário, para permitir o uso de ponto (.), traço (-) e traço baixo (_). Os demais caracteres especiais (como "$", "&" e "%") não podem ser informados.
- Correção realizada para que, na ausência de comunicação com o servidor de licenças, além de ser notificado via modal e via central de notificações, quem administra a plataforma também receba um e-mail de aviso.
- Correção realizada para que a permissão de edição em uma *widget* seja respeitada ao ser incluída por usuários pertencentes ao grupo que contém esta permissão.
- Ajuste realizado para que um conteúdo só seja publicado em uma comunidade que possuir aprovação caso o mesmo seja de fato aprovado.
- Corrigido o campo 'tempo de execução' do relatório de consulta de solicitações para que o tempo em horas seja exibido corretamente.
- Realizada correção nos complementos da solicitação, para que ao realizar a consulta de uma observação, seja apresentada corretamente.
- Realizada correção para que a transferência de processos seja realizada corretamente.
- Correção de inconsistência ao atualizar a plataforma para a 1.7.1.

## 

##  26 de Julho de 2021 

---

**Exemplos avançados de desenvolvimento de processos**

Já precisou desenvolver um processo complexo para a sua empresa? Sentiu falta de um exemplo para facilitar essa tarefa? Então, temos uma excelente notícia!

Agora, você pode contar com o apoio de exemplos avançados com diversos cenários de negócio que elaboramos para auxiliar no desenvolvimento dos seus processos:

→ [Processo com integração com serviço remoto](/pages/viewpage.action?pageId=603096961);

→ [Processo de cadastro de fornecedor](/display/fluig/Processo+de+cadastro+de+fornecedor);

→ [Processo de atualização de pedido de venda no Protheus](/pages/viewpage.action?pageId=624102042);

→ [Processo de atendimento de chamados](/display/fluig/Processo+de+atendimento+de+chamados);

→ [Processo de cadastro de centro de custo no RM](/display/fluig/Processo+de+cadastro+de+centro+de+custo+no+RM);

→ [Processo de criação de solicitação de compra no RM](/pages/viewpage.action?pageId=606649705).

Em cada exemplo, você encontra a visão geral do processo, os arquivos fontes contendo todo o código desenvolvido e uma explicação técnica detalhada sobre eles. Assim, você pode baixá-los e utilizá-los no desenvolvimento dos seus próprios processos. Muito bacana, não é mesmo? Acesse e confira!

Importante!

Não é necessário atualizar o pacote, basta apenas utilizar os novos recursos disponíveis no *samples* do GIT.

## 

##  20 de Julho de 2021 

---

## Correções

- Ajuste realizado na API */api/public/2.0/documents/setDocumentPermissions* para exibir mensagem de erro quando a matrícula informada for inexistente.
- Efetuada correção para sanar vulnerabilidade XSS.
- Ajuste realizado na tela de Configuração do sistema, para bloquear a inserção manual dos protocolos no campo Domínio.
- Inclusão do arquivo updates.xml na pasta raiz da instalação da plataforma, para gravar a última versão atualizada.
- Incluído formato .MOV para realizar uploads e downloads na plataforma.
- Realizada correção para que ao utilizar o *hAPI.setCardValue* ao movimentar uma solicitação em bloco, essa movimentação seja realizada corretamente.

## 

##  13 de Julho de 2021 

---

## Correções

- Ajuste no recurso de exportar dados pessoais para notificar o usuário quando o processo de exportação for finalizado.
- Implementado campo de busca na tela de atribuição de permissão (botão "Gerenciar permissões") dentro do cadastro de usuários, grupos e papéis.
- Ajuste realizado para correção do cabeçalho HSTS no arquivo de configuração do Nginx.
- Aplicada tradução dos textos na tela "O que há de novo no Fluig".
- Correção realizada para que ao compartilhar uma comunidade a quantidade de membros seja igual a quantidade de participantes da mesma, não exibindo mais os participantes já removidos.
- Ajuste realizado para que seja possível remover uma página corretamente.

## 

##  06 de Julho de 2021 

---

## Correções

- Ajuste realizado para possibilitar a autenticação do mesmo usuário no My Fluig em mais de um aparelho simultaneamente.
- Correção de inconsistência verificada no cadastro de Papéis e de Grupos após incluir uma permissão e alterar o cadastro novamente.
- Correção realizada na chamada de webservice com usuário autenticado via TOTVS Identity.
- Corrigida a tabela pai x filho no Fluig para que permita incluir itens via API sem restrição de quantidade.
- Realizada correção para que a consulta de fluxos em atividades paralelas retorne corretamente os resultados.

## 

##  28 de Junho de 2021 

---

**Atualização TOTVS Fluig Analytics 2.0.0**

Totalmente integrado ao TOTVS Fluig Plataforma da sua empresa, a atualização 2.0.0 do TOTVS Fluig Analytics acabou de ser lançada, com novos *dashboards* e análises mais relevantes para administrar o seu TOTVS Fluig Plataforma! E o melhor: Todos os clientes que já possuem o TOTVS Fluig Analytics receberão automaticamente a atualização em seus ambientes.

Veja a visão dos nossos*dashboards*:

- [Dashboard de Processos](#)
- [Dashboard de Documentos](#)
- [Dashboard de Social](#)
- [Dashboard de WCM](#)

![](/download/attachments/605859464/image2021-6-14_17-29-54.png?version=1&modificationDate=1624459077593&api=v2)

![](/download/attachments/605859464/image2021-6-14_17-32-20.png?version=1&modificationDate=1624466866257&api=v2)

![](/download/attachments/605859464/image2021-6-14_17-33-41.png?version=1&modificationDate=1624466955750&api=v2)

![](/download/attachments/605859464/image2021-6-14_17-35-23.png?version=1&modificationDate=1624466955793&api=v2)

Confira algumas novidades e melhorias da atualização 2.0.0 do TOTVS Fluig Analytics:

- Análises mais relevantes para administrar seu TOTVS Fluig Plataforma.Um novo design de relatórios e um novo conceito de quais análises realmente importam para a administração do seu ambiente facilitando a tomada de decisão.

- Novos recursos: KPIs e AnalyzeOs novos recursos KPIs e Analyze foram adicionados à plataforma para utilização dos clientes, fornecendo uma interface responsiva, intuitiva e adaptável para dispositivos móveis.

- KPIs desenvolvidos no padrãoCom a adição dos novos recursos, também foram liberados quatro KPIs específicos para eles, seguindo a mesma linha de análises dos *dashboards* convencionais.

- Atualização automática de ambientesNa intenção de mantermos melhorias constantes na plataforma, foi implementado um novo sistema de atualização automática de ambientes, onde qualquer projeto TOTVS Fluig Analytics sempre estará atualizado assim que uma nova versão for lançada.

Quer saber mais detalhes?

Acesse nossa documentação sobre a [atualização 2.0.0 do TOTVS Fluig Analytics](https://tdn.totvs.com/x/8aUPJQ).

Veja nossa demo da nova versão do TOTVS Fluig Analytics:

## Correções

- Corrigida a inconsistência que impedia a criação de alguns recursos (expediente, datasets, processo ADHOC) em uma instalação.
- Ajuste realizado para sanar falha de login em dispositivos mobile.
- Realizado reforço de segurança para evitar redirecionamentos e manipulação de respostas.

## 

##  22 de Junho de 2021 

---

## Correções

- Correção de inconsistência que impedia a edição do nome da comunidade.
- Realizada correção para que o Fluig exiba corretamente todas as regras do formulário.
- Corrigida a lentidão na central de tarefas.
- Realizada correção na tradução das mensagens de erro das solicitações.
- Corrigida a inconsistência na permissão ao importar/exportar um formulário no Fluig.

## 

##  15 de Junho de 2021 

---

**Ainda mais novidades no gerenciamento de permissões**

A release [Crystal Lake](https://tdn.totvs.com/pages/viewpage.action?pageId=545647981#Atualiza%C3%A7%C3%A3oCrystalLake(1.7.1)-Plataforma) trouxe uma melhoria imensa na tela de Permissões, possibilitando uma consulta facilitada por recursos e tipos de permissão. Mas as novidades continuam! Confira o que há de novo sobre o gerenciamento de permissões:

**Permissões diretamente no cadastro**
Incluímos uma opção para gerenciar a permissão diretamente no cadastro de cada usuário, grupo e papel. Dessa forma, é possível verificar todas as permissões que tem esse usuário, por exemplo. Além disso, ao acessar o detalhamento da permissão, você verifica se esta permissão está atribuída diretamente ao usuário, ou herdada por vínculo a um grupo ou papel!
Além de consultar, você também consegue atribuir novas permissões aos usuários, grupos ou papéis, diretamente pelo cadastro. Agiliza muito!

- [Cadastro do usuário](#)
- [Lista de permissões](#)
- [Detalhes da permissão](#)

![](/download/attachments/605859464/Permiss%C3%B5es%20001.png?version=1&modificationDate=1622050331883&api=v2)

![](/download/attachments/605859464/Permiss%C3%B5es%20002.png?version=1&modificationDate=1622050331757&api=v2)

![](/download/attachments/605859464/Permiss%C3%B5es%20003.png?version=1&modificationDate=1622050331627&api=v2)

**Quer ainda mais controle das permissões liberadas?**
Seu desejo foi atendido com o relatório de permissões. Você pode gerar um relatório de todos os recursos, ou selecionar categorias específicas que devem ser apresentadas. O formato do relatório você também pode escolher, se quer em CSV ou PDF.

![](/download/attachments/605859464/Gerar%20relat%C3%B3rio.png?version=1&modificationDate=1623756444133&api=v2)

**Você se empolgou no gerenciamento das permissões e agora precisa desfazer suas ações?**
Isso se tornou muito mais fácil! É só acionar um botão, e suas permissões serão restauradas com o padrão na criação da empresa. Podem ser restauradas as permissões de um recurso específico, uma categoria ou mesmo todos os recursos da plataforma.

- [Todas as permissões](#)
- [Permissões de uma categoria](#)

![](/download/attachments/605859464/Restaurar%20padr%C3%A3o%20todas.png?version=1&modificationDate=1623756566773&api=v2)

![](/download/attachments/605859464/Restaurar%20padr%C3%A3o.png?version=1&modificationDate=1623756583107&api=v2)

**Saiba mais!**

Para mais detalhes, consulte a documentação de [Permissões](/pages/viewpage.action?pageId=234455792).

## Correções

- Realizada correção no retorno da API, para que o endpoint GET /ecm/dataset/search retorne corretamente todos os registros de um dataset interno de formulário.
- Corrigida inconsistência ao exportar relatório de consulta de solicitações avançado, para que a data apresentada seja a data da primeira conclusão de uma atividade.
- Realizada correção no parâmetro TaskUserId, para que quando usuários específicos do Fluig acessarem suas pendências pela central de tarefas, consigam aprová-las.
- Realizada correção para que ao editar um registro de formulário, as fichas criadas estejam de acordo, contendo a segurança e permissão total para o usuário criador.
- Corrigida inconsistência que ocorria no upload de arquivos com restrições atribuídas via certificado.
- Correção de vulnerabilidade na ferramenta de prevenção de *Clickjacking.*
- Correção de inconsistência que impossibilitava a atualização da plataforma em ambientes com senha do banco de dados informada por variáveis de ambiente.
- Correção de inconsistência na exportação de uma página com widget.

## 

##  01 de Junho de 2021 

---

## Correções

- Criada nova API de menu para realização de upload de imagens e vídeos para realização de posts. É possível encontrá-la em: {urlCliente}/collaboration/swagger-ui/#/Medias.
- Criada nova API para a realização de listagem de usuários ou comunidades no Social. É possível encontrá-la em: {urlCliente}/collaboration/api/v3/socials?pattern=rod&page=1&pageSize=100
- Correção de inconsistência na criação de *constraints* de dataset.
- Realizada correção para que apareça somente o nome da atividade nos complementos da solicitação.
- Realizada correção para que ao chamar o método método getAvaliableStates do webservice ECMWorkflowEngineService, retorne corretamente o código da atividade inicial do processo.

## 

##  25 de Maio de 2021 

---

## Correções

- Corrigida inconsistência que ocorria ao utilizar a API */api/public/2.0/documents/setDocumentPermissions* para alterar a permissão de uma pasta.
- Correção de inconsistência que impedia o download de documento com marca d'agua.
- Correção realizada para possibilitar a atualização em ambientes que não possuem a tag *coordinator-environment*no arquivo domain.xml.
- Corrección realizada para que al acceder a los ítems del menú Soluciones y Social, estos se muestren con todas las palabras traducidas en el idioma seleccionado.
- Realizada correção no aplicativo My Approval para que ao visualizar o formulário o campo apareça preenchido corretamente, conforme na web e no My Fluig.
- Realizada correção para que ao utilizar o Gateway Inclusivo, não seja apresentada a mensagem "Gateway Inclusivo não possui nenhuma condição verdadeira", ao mover a tarefa.
- Realizada correção para que os campos de data respeitem o padrão de formato do idioma selecionado.

## 

##  18 de Maio de 2021 

---

## Correções

- Realizado reforço de segurança para sanar vulnerabilidade em requisições de datasets.
- Correção de falha que impedia o download de pasta com mais de um arquivo sem extensão.
- Incluída validação da senha do usuário wcmadmin no momento do login e inclusão de mensagem sugerindo a troca da senha padrão.
- Ajuste realizado para que a tela de novidades do TOTVS Fluig Plataforma seja apresentado somente após o aceite do termo de consentimento.
- Inclusão de propriedade no arquivo domain.xml, para configurar se a plataforma deve iniciar somente após todos os artefatos terem sido deployados. Para saber como ativar essa configuração, consulte [esse artigo](https://centraldeatendimento.fluig.com/hc/pt-br/articles/1500010739581).
- Correção de inconsistência que impossibilitava a atualização da plataforma em ambientes com senha do banco de dados encriptada.
- Ajuste realizado no tamanho de alguns campos do banco de dados, que estavam impactando na atualização da plataforma.
- Corrigida inconsistência que permitia o download de anexos de documentos mesmo quando o usuário não tinha permissão para download/visualização.
- Corrigida falha de conexão do Connect em ambientes configurados com HTTPS. É necessário atualizar o Fluig Connect para a versão 1.7.1.1.
- Ajuste realizado para que não seja feita a validação de permissionamento em algumas chamadas internas, como exemplo as tarefas do agendador.
- Para que a publicação com imagem em anexo via API tenha o funcionamento esperado é necessário utilizar o valor socialObjectId. Este valor é retornado através da API: GET /api/public/social/community/document/{documentId}.
- Correção da inconsistência ao adicionar um serviço Webservice SOAP com autenticação BASIC.
- Corrigida a falha ao realizar a busca pelo usuário responsável, quando enviada a solicitação para a próxima atividade.
- Solucionada a inconsistência que mostrava os campos do formulário do tipo checkbox em branco, ao adicionar uma nova condição no automático via web.
- Realizada correção para que seja permitido adicionar valores em um formulário Pai x Filho, ao movimentar a solicitação via API REST.

**Atualização de segurança**

A equipe do TOTVS Fluig Plataforma, a partir das atualizações **1.6.5-210521 Liquid**, **1.7.0-210518 Lake** e **1.7.1-210518 Crystal Lake**, realizou uma atualização de segurança com o objetivo de tornar sua plataforma ainda mais segura para que você possa realizar todas as suas operações sem precisar se preocupar com ataques maliciosos.

Por isso, orientamos que a leitura da documentação [Datasets acessando banco de dados externo](https://tdn.totvs.com/x/OgFlDw) seja feita para que você possa ficar por dentro do modo correto de utilização deste procedimento.

Estamos sempre trabalhando para que a sua experiência com a gente seja cada vez mais fluída e agradável.

## 

##  11 de Maio de 2021 

---

## Correções

- Ajuste realizado para que ao adicionar uma foto rotacionada, seu upload é feito da forma correta.
- Correção de inconsistência ao executar a plataforma com o banco de dados Oracle.
- Correção de inconsistências na tradução de diversos termos da plataforma.
- Correção de inconsistência que impedia a atualização em ambientes com *load balance*.
- Correção realizada no ícone de notificação do documento, para que seja apresentado desmarcado (sem notificar).
- Correção de inconsistência na data apresentada ao criar nova pasta.
- Correção realizada para que a visualização do documento não altere o layout da pasta acessada.
- Correção de inconsistência na utilização do aplicativo OAuth, que permitia acesso a recursos não autorizados.
- Realizada correção para que ao tentar iniciar uma nova solicitação ou movimentar uma já existente, o Fluig carregue corretamente o formulário e as abas Detalhes, Complementos e Anexos.


<!-- anchors: Atualizações(1.7.1)-Ciclodeatualização, Atualizações(1.7.1)-30deJulhode2024, Atualizações(1.7.1)-Correções, Atualizações(1.7.1)-23deJulhode2024, Atualizações(1.7.1)-Correções.1, Atualizações(1.7.1)-16deJaneirode2024, Atualizações(1.7.1)-Correções.2, Atualizações(1.7.1)-28deNovembrode2023, Atualizações(1.7.1)-Correções.3, Atualizações(1.7.1)-09deAgostode2023, Atualizações(1.7.1)-Correções.4, Atualizações(1.7.1)-28deJulhode2023, Atualizações(1.7.1)-Correções.5, Atualizações(1.7.1)-08deMaiode2023, Atualizações(1.7.1)-Correções.6, Atualizações(1.7.1)-14deMarçode2023, Atualizações(1.7.1)-Correções.7, Atualizações(1.7.1)-22deFevereirode2023, Atualizações(1.7.1)-Correções.8, Atualizações(1.7.1)-14deFevereirode2023, Atualizações(1.7.1)-Correções.9, Atualizações(1.7.1)-07deFevereirode2023, Atualizações(1.7.1)-Correções.10, Atualizações(1.7.1)-31deJaneirode2023, Atualizações(1.7.1)-Correções.11, Atualizações(1.7.1)-24deJaneirode2023, Atualizações(1.7.1)-Correções.12, Atualizações(1.7.1)-10deJaneirode2023, Atualizações(1.7.1)-Correções.13, Atualizações(1.7.1)-14deDezembrode2022, Atualizações(1.7.1)-Correções.14, Atualizações(1.7.1)-29deNovembrode2022, Atualizações(1.7.1)-Correções.15, Atualizações(1.7.1)-22deNovembrode2022, Atualizações(1.7.1)-Correções.16, Atualizações(1.7.1)-08deNovembrode2022, Atualizações(1.7.1)-Correções.17, Atualizações(1.7.1)-01deNovembrode2022, Atualizações(1.7.1)-Correções.18, Atualizações(1.7.1)-25deOutubrode2022, Atualizações(1.7.1)-Correções.19, Atualizações(1.7.1)-18deOutubrode2022, Atualizações(1.7.1)-Correções.20, Atualizações(1.7.1)-11deOutubrode2022, Atualizações(1.7.1)-Correções.21, Atualizações(1.7.1)-04deOutubrode2022, Atualizações(1.7.1)-Correções.22, Atualizações(1.7.1)-28deSetembrode2022, Atualizações(1.7.1)-Correções.23, Atualizações(1.7.1)-20deSetembrode2022, Atualizações(1.7.1)-Correções.24, Atualizações(1.7.1)-13deSetembrode2022, Atualizações(1.7.1)-Correções.25, Atualizações(1.7.1)-06deSetembrode2022, Atualizações(1.7.1)-Correções.26, Atualizações(1.7.1)-31deAgostode2022, Atualizações(1.7.1)-Correções.27, Atualizações(1.7.1)-23deAgostode2022, Atualizações(1.7.1)-Correções.28, Atualizações(1.7.1)-16deAgostode2022, Atualizações(1.7.1)-Correções.29, Atualizações(1.7.1)-09deAgostode2022, Atualizações(1.7.1)-Correções.30, Atualizações(1.7.1)-02deAgostode2022, Atualizações(1.7.1)-Correções.31, Atualizações(1.7.1)-27deJulhode2022, Atualizações(1.7.1)-Correções.32, Atualizações(1.7.1)-19deJulhode2022, Atualizações(1.7.1)-Correções.33, Atualizações(1.7.1)-12deJulhode2022, Atualizações(1.7.1)-Correções.34, Atualizações(1.7.1)-05deJulhode2022, Atualizações(1.7.1)-Correções.35, Atualizações(1.7.1)-28deJunhode2022, Atualizações(1.7.1)-Correções.36, Atualizações(1.7.1)-14deJunhode2022, Atualizações(1.7.1)-Correções.37, Atualizações(1.7.1)-07deJunhode2022, Atualizações(1.7.1)-Correções.38, Atualizações(1.7.1)-31deMaiode2022, Atualizações(1.7.1)-Correções.39, Atualizações(1.7.1)-25deMaiode2022, Atualizações(1.7.1)-Correções.40, Atualizações(1.7.1)-17deMaiode2022, Atualizações(1.7.1)-Correções.41, Atualizações(1.7.1)-10deMaiode2022, Atualizações(1.7.1)-Correções.42, Atualizações(1.7.1)-03deMaiode2022, Atualizações(1.7.1)-Correções.43, Atualizações(1.7.1)-26deAbrilde2022, Atualizações(1.7.1)-Correções.44, Atualizações(1.7.1)-19deAbrilde2022, Atualizações(1.7.1)-Correções.45, Atualizações(1.7.1)-12deAbrilde2022, Atualizações(1.7.1)-Correções.46, Atualizações(1.7.1)-05deAbrilde2022, Atualizações(1.7.1)-Correções.47, Atualizações(1.7.1)-22deMarçode2022, Atualizações(1.7.1)-Correções.48, Atualizações(1.7.1)-15deMarçode2022, Atualizações(1.7.1)-Correções.49, Atualizações(1.7.1)-08deMarçode2022, Atualizações(1.7.1)-Correções.50, Atualizações(1.7.1)-01deMarçode2022, Atualizações(1.7.1)-Correções.51, Atualizações(1.7.1)-15deFevereirode2022, Atualizações(1.7.1)-Correções.52, Atualizações(1.7.1)-08deFevereirode2022, Atualizações(1.7.1)-Correções.53, Atualizações(1.7.1)-01deFevereirode2022, Atualizações(1.7.1)-Correções.54, Atualizações(1.7.1)-25deJaneirode2022, Atualizações(1.7.1)-Correções.55, Atualizações(1.7.1)-18deJaneirode2022, Atualizações(1.7.1)-Correções.56, Atualizações(1.7.1)-11deJaneirode2022, Atualizações(1.7.1)-Correções.57, Atualizações(1.7.1)-22deDezembrode2021, Atualizações(1.7.1)-Correções.58, Atualizações(1.7.1)-21deDezembrode2021, Atualizações(1.7.1)-Correções.59, Atualizações(1.7.1)-14deDezembrode2021, Atualizações(1.7.1)-Correções.60, Atualizações(1.7.1)-07deDezembrode2021, Atualizações(1.7.1)-Correções.61, Atualizações(1.7.1)-30deNovembrode2021, Atualizações(1.7.1)-Correções.62, Atualizações(1.7.1)-23deNovembrode2021, Atualizações(1.7.1)-Correções.63, Atualizações(1.7.1)-16deNovembrode2021, Atualizações(1.7.1)-Correções.64, Atualizações(1.7.1)-10deNovembrode2021, Atualizações(1.7.1)-Correções.65, Atualizações(1.7.1)-03deNovembrode2021, Atualizações(1.7.1)-Correções.66, Atualizações(1.7.1)-26deOutubrode2021, Atualizações(1.7.1)-Correções.67, Atualizações(1.7.1)-19deOutubrode2021, sample, Atualizações(1.7.1)-Correções.68, Atualizações(1.7.1)-13deOutubrode2021, Atualizações(1.7.1)-Correções.69, Atualizações(1.7.1)-05deOutubrode2021, Atualizações(1.7.1)-Correções.70, Atualizações(1.7.1)-28deSetembrode2021, Atualizações(1.7.1)-Correções.71, Atualizações(1.7.1)-21deSetembrode2021, Atualizações(1.7.1)-Correções.72, Atualizações(1.7.1)-08deSetembrode2021, Atualizações(1.7.1)-Correções.73, Atualizações(1.7.1)-Correções.74, Atualizações(1.7.1)-24deAgostode2021, sample, Atualizações(1.7.1)-Correções.75, Atualizações(1.7.1)-17deAgostode2021, Atualizações(1.7.1)-Correções.76, Atualizações(1.7.1)-10deAgostode2021, Atualizações(1.7.1)-Correções.77, Atualizações(1.7.1)-03deAgostode2021, Atualizações(1.7.1)-Correções.78, Atualizações(1.7.1)-26deJulhode2021, Atualizações(1.7.1)-20deJulhode2021, Atualizações(1.7.1)-Correções.79, Atualizações(1.7.1)-13deJulhode2021, Atualizações(1.7.1)-Correções.80, Atualizações(1.7.1)-06deJulhode2021, Atualizações(1.7.1)-Correções.81, Atualizações(1.7.1)-28deJunhode2021, sample, Atualizações(1.7.1)-Correções.82, Atualizações(1.7.1)-22deJunhode2021, Atualizações(1.7.1)-Correções.83, Atualizações(1.7.1)-15deJunhode2021, Cadastro, Restaurarpadrão, Atualizações(1.7.1)-Correções.84, Atualizações(1.7.1)-01deJunhode2021, Atualizações(1.7.1)-Correções.85, Atualizações(1.7.1)-25deMaiode2021, Atualizações(1.7.1)-Correções.86, Atualizações(1.7.1)-18deMaiode2021, Atualizações(1.7.1)-Correções.87, Atualizações(1.7.1)-11deMaiode2021, Atualizações(1.7.1)-Correções.88 -->
