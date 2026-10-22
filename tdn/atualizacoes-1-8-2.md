---
title: "Atualizações (1.8.2)"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=856938347"
scraped_at: "2026-03-09T04:16:49.751Z"
depth: 3
anchors: 158
child_links: 69
---

# Atualizações (1.8.2)

## Ciclo de atualização

Maior destaque para as atualizações evolutivas (**Update **). 

As liberações mais relevantes são identificadas por um selo especial:

![](/download/attachments/856938347/essential.png?version=1&modificationDate=1721148272547&api=v2) **Essential:** incluem correções e pequenas evoluções da plataforma.

![](/download/attachments/856938347/mandatory.png?version=1&modificationDate=1721148272470&api=v2) **Mandatory:**** **atualizações que possuem correções críticas emergenciais.

Veja todos os detalhes em: [Atualização da plataforma](https://tdn.totvs.com/x/2xVbB).

Saiba de todas as novidades do [My Fluig](https://tdn.totvs.com/x/B1y2Fg).

**oculto**

## 

## 24  de Fevereiro de 2026

---

## Correção

chamado

- descrição

---

## 

## XX de Dezembro de 2024

---

## Melhoria

**FSLT-16159**

### Integração TOTVS Fluig x TOTVS iPaaS com apenas um clique!

Sim, é isso mesmo! Agora, é possível ativar a integração entre o TOTVS Fluig e o [TOTVS iPaaS](https://tdn.totvs.com/x/hypULg) na aba **Autenticação** das configurações de cada [empresa](/pages/viewpage.action?pageId=235597350), no **Painel de controle** do usuário **WCMADMIN**.

Ao ativar a integração, o iPaaS reconhece o Fluig como compatível, permitindo utilizar recursos integrados entre os dois produtos a partir de desenvolvimentos sobre a plataforma que precisem dessa integração, por exemplo. Bacana, né?

Importante!

É necessário que o TOTVS Identity esteja habilitado e [configurado](https://tdn.totvs.com/x/Tx1bB) na empresa para que a integração entre o TOTVS iPaaS e o TOTVS Fluig seja estabelecida.

![](/download/attachments/856938347/Aba%20Autentica%C3%A7%C3%A3o%20171.png?version=1&modificationDate=1733140816870&api=v2)

## 

## 18 de Fevereiro de 2026

---

## Correção

- Corrigida a exibição de informações no recurso [Permissões](/pages/viewpage.action?pageId=234455792) do Painel de controle para que não fiquem sobrepostas.

## 

## 10 de Fevereiro de 2026 

---

## Melhoria

### Nova logo TOTVS Fluig

A plataforma Fluig ganhou uma nova logo, totalmente alinhada à identidade visual da companhia. Essa mudança acompanha a evolução da plataforma, conectando os novos recursos e melhorias à nova fase. Resultando em uma experiência mais moderna e consistente a cada atualização.

## 

## 03 de Fevereiro de 2026

---

## Correção

- Corrigido o recurso Compartilhar de comunidades para que não seja permitido compartilhar publicações de comunidades ocultas.

## 

## 27 de Janeiro de 2026

---

## Correção

- Corrigido o evento **`beforeUpdateUser`**, resolvendo a falha que impedia o feedback visual ao utilizar a opção "Esqueci minha senha".
- Corrigida a situação que impedia atualizar de releases inferiores (1.7.1, 1.8.0 e 1.8.1) para a release 1.8.2. A versão mínima para atualização passa a ser a **1.8.2-260127**. Para mais detalhes acesse o [guia de atualização da plataforma](https://tdn.totvs.com/x/CkwxE) e a página [Voyager 2.0](https://tdn.totvs.com/x/6HxjN).
- Adicionada mensagem na busca por documentos relacionados – ao editar um documento – para informar quando a busca não está disponível e instruir a entrar em contato com o administrador de plataforma.
- Realizada correção para que seja possível assumir solicitações em bloco na Central de tarefas.

## 

##  20 de Janeiro de 2026

---

## Melhoria

### Artigos com mais segurança de conteúdo em comunidades

A partir de agora, vídeos publicados no recurso [Documentos](https://tdn.totvs.com/x/7e-uDQ) que são inseridos dentro de [Artigos](https://tdn.totvs.com/x/p-vuDQ) em [Comunidades](https://tdn.totvs.com/x/VKVuOQ), passam a considerar o que foi definido na opção **Download e impressão** do próprio artigo. Ou seja, se o artigo permite *download*, também será possível baixar o vídeo. Caso contrário, não é permitido que o vídeo inserido dentro do artigo seja baixado e, consequentemente, a opção **Baixar** não é exibida.

Dessa forma, é possível garantir o mesmo nível de permissão para todo o conteúdo que compõe o artigo, proporcionando privacidade para artigos internos ou que não podem ser compartilhados com quem não tem permissão para vê-los. Afinal, segurança nunca é demais, não é mesmo?

![](/download/attachments/856938347/v%C3%ADdeo-artigo-comunidade-182.png?version=1&modificationDate=1768822630293&api=v2)

## Correções

- Otimização implementada para corrigir a lentidão na Central de tarefas em solicitações com alto volume de anexos.

## 

## 13 de Janeiro de 2026

---

## Correção

- Corrigida a opção Carregar arquivos nos anexos de uma solicitação para que seja possível anexar arquivos corretamente.

## 

## 16 de Dezembro de 2025

---

## Correção

- Realizado ajuste para que o método log.dir funcione corretamente no evento onNotify.
- Realizado ajuste para que a widget Gráfico de processos e tarefas seja exibida corretamente.
- Realizado ajuste para garantir o comportamento correto do método getCardAPIService().create.
- Realizada correção para que seja possível utilizar o Fluig Studio em modo demo.

## 

## 02 de Dezembro de 2025

---

## Correção

- Corrigida a exibição de versões de um documento para que seja possível ver o conteúdo da versão anterior antes de restaurá-lo.

## 

##  25 de Novembro de 2025

---

## Correções

- Realizado ajuste para que, ao utilizar o parâmetro updateMode na API Form Management – /v2/cardindex com o valor "0", a versão do formulário seja mantida, sem atualizar o formulário em si nem seus registros.
- Implementada a evolução da API para permitir a alteração da propriedade **downloadEnabled** em documentos, garantindo o ajuste dessa configuração. [Clique aqui](https://api.fluig.com/latest/content-management/swagger-ui/#/Documents/update) e confira os detalhes na API.
- Corrigido o recurso Editar perfil para que seja possível editar os dados do usuário wcmadmin corretamente.

## 

## 11 de Novembro de 2025

---

## Correção

- Correção aplicada para que seja possível remover documentos via API com autenticação OAuth1 sem ocorrer o erro de NullPointerException, garantindo o retorno correto do status.

## 

## 04 de Novembro de 2025

---

## Correção

- Ajuste realizado para desabilitar corretamente o campo de botões mobile ao remover o fluxo entre etapas com configuração de botões de aceitar/rejeitar.
- Efetuados ajustes para não ocorrer inconsistências no aplicativo My Approval ao excluir um fluxo entre duas etapas de um processo quando uma delas possui configurações para *mobile*.

## 

## 29 de Outubro de 2025 

---

### Atualização recomendada

Foi identificada uma vulnerabilidade relacionada a documentos na plataforma; no entanto, o incidente já foi **solucionado**, assegurando seu desempenho e segurança. A correção está disponível no pacote liberado em**29/10/2025**.
Recomendamos manter sua plataforma sempre atualizada para assegurar uma experiência contínua e segura.

## Correção

- Validado o comportamento do sistema ao realizar o upload com [Impressão de cópia controlada](https://tdn.totvs.com/x/F5MbCQ), garantindo a correta abertura do PDF e a consistência das mensagens de log no processo PDFHandler.
- Ajuste realizado para melhorar o desempenho e reduzir o tempo de carregamento da página [Configurar processos](https://tdn.totvs.com/x/UfHuDQ).

## 

## 21 de Outubro de 2025

---

## Correção

- Efetuados ajustes para que seja possível acessar o aplicativo My Approval quando a autenticação está configurada para utilizar o protocolo LDAP.
- Efetuados ajustes na validação de permissões para que usuários comuns sem permissão não consigam remover outros usuários de grupos por meio da API.

## 

## 14 de Outubro de 2025

---

## Correção

- Efetuados ajustes de segurança relacionados à edição de matrícula de usuários.
- Corrigido o comportamento do método findChildrenByCardId para assegurar o retorno adequado dos tables id ao utilizar um dataset.

## 

## 30 de Setembro de 2025

---

## Correção

- Corrigido o retorno das APIs de inclusão de usuários em grupos para que indiquem corretamente o que de fato aconteceu, se a ação foi bem-sucedida ou se ocorreu alguma inconsistência.
- Realizada correção para que ao utilizar a API **v2/requests/{processInstanceId}/activities** o parâmetro **expand=tasks **retorne corretamente as informações de atividades associadas ao processo.
- Correção aplicada para que consultas e fluxos sejam executados com maior agilidade, garantindo a mesma performance do ambiente de produção.

## 

## 23 de Setembro de 2025

---

## Correção

- Efetuados ajustes na lógica de *cache* de *updates* para não gerar excessivas mensagens no *log*.

## 

## 16 de Setembro de 2025

---

## Correção

- Efetuados ajustes para permitir a atualização para o pacote 1.8.2-250715 sem inconsistências em *updates*.

## 

## 09 de Setembro de 2025

---

## Correção

- Mensagem ajustada para indicar o limite de 15 caracteres no cadastro de novas áreas.

## 

## 02 de Setembro de 2025

---

## Correção

- Realizado ajuste para que ao adicionar o componente datatable, seja possível visualizar as informações das colunas corretamente.

## 

## 26 de Agosto de 2025

---

## Correção

- Ajuste realizado para que a ordenação no histórico de solicitações seja apresentado corretamente.
- Realizado ajuste para que a notificação de novos participantes exiba o nome atualizado da comunidade corretamente.
- Ajuste realizado para que a imagem de perfil da comunidade seja exibida com melhor qualidade. Recomendamos, no entanto, que não contenham texto, para garantir a legibilidade.
- Ajuste realizado para que o widget da central de tarefas na home direcione corretamente ao clicar no papel escolhido.

## 

## 12 de Agosto de 2025

---

## Correção

- Ajuste realizado para eliminar a lentidão na tela de movimentação de solicitações e garantir a exibição correta do histórico.

## 

## 05 de Agosto de 2025

---

## Correção

- Realizada correção para que os arquivos no formato .xlsx e .docx  com cópia controlada apresentaram corretamente os dados dos aprovadores.
- Ajustado o alinhamento do ícone **Gerenciar**  dos recursos de [Permissões](https://tdn.totvs.com/x/8IL5DQ) ao acessar a página em telas com tamanho reduzido.
- Realizada correção para que a widget Gráfico de Tarefas direcione corretamente para o contexto escolhido.
- Correção realizada para que seja possível consultar um dataset mesmo quando o formulário vinculado não tiver registros.

## 

## 22 de Julho de 2025

---

## Correções

- Ajuste realizado para que a mensagem de validação esperada seja apresentada de forma correta no formulário que está sendo preenchido.
- Correção realizada na definição de parâmetros no Swagger da API pública do [Process Management](https://api.fluig.com/latest/process-management/swagger-ui/).
- Correção realizada no recurso de *check-in* de documentos, para que seja possível criar nível de aprovação e atribuir um aprovador no momento de realizar o *check-in*.

## 

## 15 de Julho de 2025

---

## Correções

- Efetuados ajustes para que a comunicação com o Solr seja feita corretamente quando o endereço é configurado como uma exceção, para que seja acessado diretamente sem passar por um *proxy*.
- Ajuste de segurança implementado para garantir a integridade das informações cadastradas, evitando exibição ou alteração indevida de dados.
- Ajustes efetuados no recurso de publicação de documentos anexos via solicitação por usuário configurado com permissão. 

## 

## 08 de Julho de 2025

---

## Correções

- Corrigido o recurso [Permissões](/pages/viewpage.action?pageId=234455792) para que seja possível restaurar as permissões originais corretamente.
- Restringido o acesso ao arquivo que contém informações relacionadas à versão da plataforma.
- Efetuados ajustes para não ocorrer inconsistência nos tipos de dados dos campos do banco de dados e permitir a criação de chaves estrangeiras corretamente ao atualizar a plataforma.

## 

## 01 de Julho de 2025

---

## Correções

- Realizado ajuste para que o componente *upload-component* não seja exibido em duplicidade.
- Realizado ajuste para que a numeração de páginas seja preservada ao imprimir arquivos .docx via cópia controlada.
- Efetuados ajustes para que um usuário comum que recebeu permissão por meio de um papel possa gerenciar outros usuários corretamente.
- Correção realizada para que apenas usuários com permissão concedida possam atuar como administradores da comunidade.
- Corrigido o acesso à plataforma quando há duas empresas, uma ativa com TOTVS Identity e outra inativa, para direcionar corretamente para a empresa ativa, sem exibir a mensagem "Empresa não encontrada".

## 

## 24 de Junho de 2025

---

## Correções

- Efetuados ajustes para que um usuário comum que possui permissão possa utilizar corretamente a API *createEvent*.
- Correção realizada para que seja apresentado os níveis de permissão de grupos e usuários ao consultar um documento dentro de sua hierarquia de documentos

## 

## 17 de Junho de 2025

---

## Correções

- Correção realizada para centralizar corretamente a marca d'água em documentos do tipo A3 durante a impressão de [cópias controladas](https://tdn.totvs.com/x/F5MbCQ).
- Efetuados ajustes para que seja possível conectar-se no Eclipse com a conta Fluig ao utilizar um *e-mail* que existe duas vezes, um está ativo e o outro inativo.
- Ajuste realizado para que, ao configurar a expiração de tarefas em horas, a plataforma converta corretamente esse valor para dias.

## 

## 10 de Junho de 2025

---

## Correções

- Feitos ajustes para que a instalação ou atualização da plataforma seja feita corretamente quando é utilizada uma senha complexa com vários caracteres especiais para conexão com o banco de dados.
- Realizada correção para que seja possível gerar lista mestra de pasta que está na raiz.
- Realizada correção de label no filtro de anexos da solicitação.
- Correção realizada para que o controle de permissões funcione como esperado ocultando a opção Eliminar de usuários sem a permissão concedida.
- Correção realizada para que não seja criado pasta vazia no volume ao utilizar a API /ecm-forms/api/v2/cardindex/.
- Realizada correção para que ao editar as permissões de uma widget em uma página, a opção Por Grupo carregue a lista de usuários do grupo selecionado.

## 

## 03 de Junho de 2025

---

## Correções

- Efetuados ajustes no instalador para que a atualização de um ambiente que esteja em atualizações mais antigas seja feita corretamente.
- Incluída mensagem no recurso [Configurações do sistema](https://tdn.totvs.com/x/EO4KDg) ao configurar ou atualizar o protocolo HTTPS informando que, se o ambiente está configurado com [balanceamento de carga](https://tdn.totvs.com/display/fluig/Alta+disponibilidade+e+balanceamento+de+carga), é necessário replicar [manualmente](https://tdn.totvs.com/pages/viewpage.action?pageId=354472893#Configura%C3%A7%C3%A3oHTTPSdaplataforma-Configura%C3%A7%C3%A3odeHTTPSmanual) a configuração ou a atualização para todos os servidores do Fluig.
- Realizada atualização na plataforma para aprimorar sua performance e estabilidade.
- Realizado ajuste na exibição das datas na tela de [Consulta de Solicitações](https://tdn.totvs.com/x/WfHuDQ) em atividades paralelas.
- Implementado ajuste para impedir o registro de comentários vazios no histórico da solicitação.

## 

## 27 de Maio de 2025

---

## Correções

- Corrigido o [cadastro](/pages/viewpage.action?pageId=644720026) de serviços SOAP para permitir importar o arquivo *bind* corretamente.
- Efetuados ajustes para que os *logs* da plataforma possam ser baixados corretamente - tanto pela interface quanto pela API - depois de [configurá-los](https://centraldeatendimento.totvs.com/hc/pt-br/articles/27663739052567-Fluig-Plataforma-CON-Como-diminuir-o-tamanho-e-quantidade-do-arquivo-de-log) para serem gerados de forma diferente do padrão.
- Realizado ajuste para que a API de listar usuários funcione conforme as permissões concedidas.
- Corrigida a inconsistência ao adicionar anexos de formulário na solicitação.
- Realizada correção para que não ocorra lentidão ao definir usuários durante a movimentação de processos.

## 

## 20 de Maio de 2025

---

## Correções

- Realizado ajuste para que seja possível anexar vídeos corretamente em comunidades.
- Manutenção preventiva realizada para garantir a segurança da plataforma.
- Realizada correção para que seja possível movimentar corretamente uma atividade de subprocesso com mecanismo de atribuição.
- Corrigida a exibição da mensagem de confirmação ao adicionar ou remover usuários de um papel.

## 

## 13 de Maio de 2025

---

## Correções

- Realizado ajuste para que ao iniciar nova solicitação com base na anterior, os anexos sejam carregados corretamente na aba Formulário e a solicitação seja iniciada corretamente.
- Realizada correção para que ao movimentar um documento para *check-out*, a caixa de texto de comentário fique ativa para digitação.
- Realizado ajuste para que seja possível visualizar o relatório BIRT pelo nome original do arquivo.

## 

## 06 de Maio de 2025

---

## Correções

- Adicionada permissão de Comunidade no Painel de controle e agora é possível que um usuário comum, mesmo sem ser o administrador ou moderador, edite as informações da comunidade conforme permissão concedida.
- Realizado ajuste para garantir que apenas usuários administradores possam definir substitutos para usuários terceiros, enquanto usuários comuns definem apenas para o próprio usuário.

## 

## 29 de Abril de 2025

---

## Melhoria

### Autenticação para serviços SOAP: mais segurança e facilidade de configuração

Para tornar as requisições de serviços do tipo SOAP mais seguras e compatíveis com algumas integrações - com o TOTVS Protheus, por exemplo - agora é possível definir a utilização de autenticação e configurar os dados necessários, tudo no próprio cadastro do serviço, de forma simples e fácil, sem codificação.

Fique tranquilo!

Para utilizar as configurações de autenticação em serviços que já estão cadastrados, basta aplicar essa atualização no seu ambiente, editar os serviços desejados e adicionar os dados para a autenticação. Veja mais detalhes em [Cadastro de serviço](/pages/viewpage.action?pageId=644720026).

![](/download/attachments/856938347/autenticacao-servico-soap.png?version=5&modificationDate=1745953727207&api=v2)

## Correções

- Ajuste realizado para que não ocorra lentidão no acesso ao aplicativo e na web, quando utilizado por usuários comuns.
- Realizada correção para que seja possível exportar datasets do servidor de homologação para o servidor de produção quando utilizada a rotina Exportar na listagem de dataset.
- Realizado ajuste para que as marcas d'águas sejam carregadas corretamente ao clicar em mais opções na visualização do documento e após em Imprimir cópia controlada.

## 

## 22 de Abril de 2025

---

## Correções

- Realizado ajuste para que ao selecionar várias colunas no filtro personalizado, as informações da central de tarefas sejam carregadas corretamente.

## 

## 15 de Abril de 2025

---

## Correções

- Realizado ajuste para que ao selecionar várias colunas no filtro personalizado, as informações da central de tarefas sejam carregadas corretamente.
- Realizado ajuste para que seja possível colar conteúdo de texto em comentários de solicitações corretamente.
- Realizado ajuste para que exiba corretamente a versão do documento pendente de aprovação ao ser visualizado na Central de Tarefas > Meus Documentos.
- Realizado ajuste para que seja possível importar um formulário para o Eclipse corretamente.
- Realizado ajuste para que o WCMAPI funcione corretamente quando utilizado o componente richEditor.

## 

## 08 de Abril de 2025

---

## Correções

- Realizada correção para que as páginas com widget mobile habilitado voltam a aparecer na listagem, com dados da página pai quando aplicável.

## 

## 01 de Abril de 2025

---

## Correções

- Criado componente para [visualização de documentos](https://tdn.totvs.com/x/7822LQ).
- Corrigido problema de consulta de dataset via eventos de processos.

## 

## 25 de Março de 2025

---

## Correções

- Alterado o código de retorno de requisições de *Webservices* SOAP para permitir identificar inconsistências de autenticação, possibilitando o tratamento preventivo de vulnerabilidades.
- Realizada correção para que usuários visualizem apenas os dados das solicitações em que participaram ao consultar o dataset utilizado no formulário.
- Realizada correção para que o recurso Copiar link localizado no menu de ações ao visualizar um documento volte a copiar o link do mesmo.
- Realizado ajuste para que seja possível criar um editar um serviço REST corretamente.

## 

## 18 de Março de 2025

---

## Correções

- Realizada correção para que ao abrir um modal, não exiba a inconsistência no console.
- Realizada correção para que ao vencer uma atividade, a mesma não seja encerrada automaticamente.

## 

## 04 de Março de 2025

---

## Correções

- Realizada correção para que seja possível gerar *client* para o serviço ECMWorkflowEngineService sem que seja apresentada inconsistência no log.

## 

## 18 de Fevereiro de 2025

---

## Correções

- Realizado ajuste para recentralizar o carregamento ao enviar uma solicitação em uma aba diferente à do formulário.
- Ajuste realizado para seja possível movimentar uma solicitação abrindo um sub processo corretamente via papel de gestor do processo.
- Ajuste realizado para que ao gerar um relatório BIRT, seja possível informar parâmetros na geração, garantindo maior flexibilidade e personalização dos relatórios.
- Ajuste realizado para que seja possível rotacionar, inverter e aplicar zoom na visualização de imagens.

## 

## 11 de Fevereiro de 2025

---

## Correções

- Realizado ajuste para que seja possível arquivar páginas corretamente. 
- Realizado ajuste para que seja possível incluir somente texto nos comentários da solicitação via aba Histórico.
- Ajuste realizado para que seja possível gerar e exportar corretamente os relatórios BIRT da plataforma.

## 

## 04 de Fevereiro de 2025

---

## Correções

- Realizado ajuste para garantir que campos de comentário em documentos aceitem apenas caracteres esperados com base nos requisitos do campo de entrada.
- Realizada correção a fim de garantir que o relatório BIRT seja exportado corretamente.
- Realizado ajuste para que seja possível editar uma comunidade corretamente.
- Feitos ajustes contra a exploração de vulnerabilidades no envio de convite de usuários.
- Realizado ajuste para que o atributo style="display:none" oculte os valores corretamente no My Fluig.

## 

## 21 de Janeiro de 2025

---

## Correções

- Realizada correção para permitir a exclusão de um anexo sem afetar os demais anexos incluídos na inicialização da solicitação.
- Realizada correção na ordenação do serviço responsável por retornar as páginas no My Fluig.

## 

## 14 de Janeiro de 2025

---

## Correções

- Correção realizada para que a categoria Preferências do usuário seja apresentada nas configurações de permissões.
- Realizado ajuste para que seja possível consultar solicitações corretamente mesmo em cenários com múltiplos usuários, grupos e papéis.
- Correção realizada para que ao gerar a lista mestra e aplicar o filtro para selecionar outros tipos de documentos, o resultado seja exibido corretamente, conforme esperado.
- Corrigida a validação de personificação no *Webservice* para verificar a matrícula e não o *login* do usuário.

## 

## 17 de Dezembro de 2024

---

## Correções

- Realizada correção para que seja possível selecionar um usuário corretamente ao utilizar mecanismo de atribuição por usuários.
- Correção realizada para que o usuário com papel definido na solicitação, consiga assumi-la corretamente. 

## 

## 10 de Dezembro de 2024

---

## Correções

- Realizado ajuste para que seja possível instalar e iniciar corretamente o Fluig Plataforma utilizando banco de dados [SQL Server](https://tdn.totvs.com/x/ywVbDw).
- Realizado ajuste nas tags JDBC para que seja possível executar corretamente o importador do Analytics.
- Efetuados ajustes para exibir corretamente a lista de usuários de um papel depois de adicionar um usuário utilizando a busca para encontrá-lo.
- Realizado ajuste para permitir que os usuários assinem simultaneamente, de forma correta, em processos que utilizam assinatura eletrônica.
- Realizado ajuste para que seja possível editar um serviço criado via painel de controle.
- Realizado ajuste para que seja possível consultar datasets corretamente via Eclipse.
- Ajuste realizado para que seja possível realizar autenticação no plugin do Fluig Studio para Eclipse. Com isso, o plugin foi atualizado para a versão 1.8.2.4 e possui a dependência para as versões **1.8.1-241203** e **1.8.2-241126** do Fluig Plataforma.
- Corrigido o envio de solicitações com campo zoom sem valor preenchido. 

## 

##  03 de Dezembro de 2024

---

## Correções

- Removida a opção "Deseja ativar a integração entre o Fluig No-code e Fluig Plataforma?" da aba **Autenticação** das configurações de [empresas](/pages/viewpage.action?pageId=235597350) por conta da descontinuação do [TOTVS Fluig No-Code](https://centraldeatendimento.totvs.com/hc/pt-br/articles/22927860613911-Descontinua%C3%A7%C3%A3o-TOTVS-Fluig-No-Code).
- Realizada correção de vulnerabilidade no BIRT.
- Corrigido o comportamento do campo *checkbox*no formulário.
- Implementado [vinculo de datasets a componentes](https://tdn.totvs.com/x/XQ9PNQ).

## 

##  26 de Novembro de 2024

---

## Correções

- Feitos ajustes na validação de caracteres permitidos e não permitidos no código de [grupos](/pages/viewpage.action?pageId=234455392).
- Realizado ajuste para que seja possível exportar uma widget corretamente via Eclipse.

## 

##  19 de Novembro de 2024

---

## Correções

- Efetuada correção para que seja possível movimentar uma solicitação pelo aplicativo My Fluig quando ela é mantida aberta por algum tempo, sem que a sessão seja perdida.

## 

##  12 de Novembro de 2024

---

## Melhoria

### Atualização de dados adicionais de usuários pela API

**Essa melhoria foi uma sugestão enviada pela Central colaborativa!**

Para permitir e facilitar a atualização de dados adicionais de [usuários](/pages/viewpage.action?pageId=234455411), criamos a API ***updateUserData***.

Essa API permite que usuários comuns criem e atualizem seus próprios dados adicionais e usuários administradores criem e atualizem dados adicionais de outros usuários da mesma empresa, além dos seus próprios. Essa foi uma [sugestão de melhoria](https://centraldeatendimento.totvs.com/hc/pt-br/community/posts/4407529681047-fluig-fluig-1-6-Plataforma-Atualizar-dados-adicionais-dos-usu%C3%A1rios-por-webservice) que recebemos e entendemos que agregará ainda mais valor para a plataforma.

Acesse a [Central colaborativa](https://centraldeatendimento.totvs.com/hc/pt-br/community/topics)**,**confira as sugestões e compartilhe suas ideias por lá também! ![(smile)](/s/5bn9pn/8804/xgjkrn/_/images/icons/emoticons/smile.svg)

## Correções

- Realizada correção para que ao acessar a tarefa via consulta de solicitações, o prazo seja exibido de forma correta.
- Corrigido o comportamento de Zoom pai x filho no campo "*colleagueName*", para que não retorne estado incorreto.
- Realizada correção ao gerenciar papéis, para que a paginação exiba corretamente todos os itens, mesmo que o número de papéis for superior a cem.

## 

## 05 de Novembro de 2024

---

## Correções

- Feitos ajustes para que, ao habilitar o protocolo HTTPS na plataforma, sejam utilizadas automaticamente chaves de segurança mais atuais, aumentando a proteção contra a exploração de vulnerabilidades.
- Atualizada mensagem em tela ao[Publicar formulário em comunidade](https://tdn.totvs.com/x/pfvuDQ), para que fique claro ao usuário a necessidade em clicar na mensagem para adicionar um formulário.
- Realizada correção para que requisições via *PowerShell*exibam a mensagem de inconsistência corretamente, facilitando a identificação.

## 

## 29 de Outubro de 2024

---

## Correções

- Corrigida a exibição do agrupador Administrador das [APIs públicas](https://api.fluig.com), onde é possível obter APIs de usuários, grupos e papéis.
- Realizada correção para que a data de movimentação da solicitação seja mantida ao realizar uma alteração no formulário.
- Corrigido o carregamento de imagens em artigos nas Comunidades.

## 

## 22 de Outubro de 2024

---

## Correções

- Ajustado o recurso Eventos de auditoria para exibir uma mensagem informando quando não há licença para utilização e as instruções sobre como adquirir.
- Corrigido acesso ao chamar a API diretamente da central de tarefas.
- Realizado ajuste na segurança pra que não seja aceito o QueryParam com password. Caso ainda haja necessidade de uso, poderá ser adicionado um parâmetro no cadastro da empresa.
- Corrigido o campo *checkbox*, para que não permaneça marcado ao selecionar outros campos.

## 

##  15 de Outubro de 2024 

---

## Melhoria

### Novos widgets para facilitar sua rotina

Com o objetivo de melhorar a experiência do usuário e otimizar o acesso às informações essenciais, apresentamos três novos widgets que prometem transformar a rotina de navegação, a gestão de processos e o acesso fácil a recursos da plataforma. Conheça as inovações que vão facilitar o seu dia a dia!

O [Widget de Links Úteis](https://tdn.totvs.com/x/T4qEMw) foi pensado para promover um acesso acesso rápido e Intuitivo às páginas mais importantes, de forma simples e eficiente. Agora, os usuários poderão incluir links internos ou externos, garantindo uma navegação ágil e prática para páginas e sistemas essenciais à sua rotina. Esse recurso promete revolucionar a experiência de uso ao permitir que informações relevantes estejam sempre à mão, de forma intuitiva e acessível.

Já o [Widget de Processos](https://tdn.totvs.com/x/cYqEMw), veio para otimizar e controlar a gestão, facilitando o acompanhamento de solicitações. Com ele, os usuários têm uma visão completa de todos os processos aos quais têm acesso, podendo personalizar a exibição de processos favoritos ou realizar uma seleção específica conforme suas necessidades. O widget permite a busca por nome, aplicação de filtros e ordenação dos processos, garantindo uma experiência de uso personalizada e eficiente. Além disso, ao clicar em um processo, o usuário é direcionado automaticamente para a tela de início de solicitação, com a opção de copiar o link do processo ou defini-lo como favorito para acessos futuros.

E para completar o trio, o [Widget de Últimos acessos](https://tdn.totvs.com/x/y7CvMw), que tem como objetivo melhorar e facilitar o acesso e a utilidade das informações essenciais para os usuários, garantindo uma experiência mais intuitiva e eficiente, servindo como um guia na tela inicial, mostrando sempre os últimos acessos dentro da plataforma.

Esses novos widgets foram pensadas para proporcionar uma navegação mais ágil e organizada, aumentando a produtividade e facilitando o acesso a informações relevantes. Use e aproveite ao máximo essas novidades! 

- [Widget Links Úteis](#)
- [Widget Processos](#)
- [Widget Últimos acessos](#)

   Your browser does not support the HTML5 video element 

   Your browser does not support the HTML5 video element 

   Your browser does not support the HTML5 video element 

## Correções

- Feitos ajustes para que, ao atualizar a plataforma quando é utilizado o banco de dados Oracle 19c, não ocorram inconsistências relacionadas aos índices da tabela de permissões e a atualização seja concluída com sucesso.
- Realizada correção para facilitar a leitura e interpretação do log descritivo gerado na central de diagnóstico.
- Corrigida a visualização de anexos dentro da solicitação, permitindo que ao clicar na imagem, ela seja carregada corretamente.
- Feitos ajustes nas configurações do Agendador de tarefas para aumentar a segurança e evitar a exploração de vulnerabilidades.

## 

## 10 de Outubro de 2024

---

## Correções

- Corrigida a visualização de anexos dentro da solicitação, permitindo que ao clicar na imagem, ela seja carregada corretamente.

## 

## 08 de Outubro de 2024

---

**Nova regra de versionamento para Android** 

Conforme a notícia divulgada no portal de clientes, uma nova regra de versionamento para Android foi definida. Essa regra tem por objetivo garantir aos nossos clientes suporte técnico garantido, atualizações e novidades em nosso aplicativo My Fluig. 

Veja abaixo como vai funcionar:

Suportaremos sempre a versão oficial, sendo essa a **última versão liberada + 4 versões abaixo**.

A mudança entrará em vigor em **02 de Dezembro de 2024**. Dessa forma, recomendamos que os dispositivos estejam sempre atualizados com a versão mais recente do Android. [Acesse a notícia](https://tdn.totvs.com/pages/viewpage.action?pageId=871502812#:~:text=Equipe%20TOTVS%20Fluig.-,09/10/2024,-Confira%20a%20nova) e saiba mais detalhes sobre.

## Correções

- Realizada correção na consulta de tarefa por pool, para que o usuário que não faz parte do papel seja restringido de visualizar a tarefa.
- Corrigida a mensagem apresentada ao usuário, ao tentar visualizar documentos sem permissão.
- Efetuados ajustes para que o gerenciamento de permissões seja feito apenas por usuários administradores ou por usuários que possuem permissão específica para isso, não permitindo que usuários comuns faça esse gerenciamento, tanto pela interface quanto pelas APIs.

## 

## 01 de Outubro de 2024

---

## Correções

- Realizada correção na inclusão de anexos, para que ao aplicar o filtro por anexo e excluir o anexo filtrado, não sejam mais exibidos dentro do processo.
- Realizado ajuste para que ao clicar no link para documentação dentro do processo, seja direcionado corretamente para a página.
- Ajuste realizado para que seja possível visualizar páginas habilitadas no aplicativo My Fluig corretamente.

## 

## 17 de Setembro de 2024

---

## Correções

- Alterado o instalador para incluir um parâmetro automaticamente na URL de conexão ao instalar a plataforma com o banco de dados SQL Server, com o intuito de evitar baixo desempenho em algumas consultas.
- Corrigida a passagem de parâmetros para sejam retornados normalmente documentos externos ou artigos.

## 

## 10 de Setembro de 2024

---

## Correções

- Corrigida a busca do recurso [Substitutos](/pages/viewpage.action?pageId=234455459) para que os usuários sejam exibidos corretamente.
- Realizado ajuste para que a edição de serviços e demais exportações funcionem corretamente via plugin Eclipse.
- Ajuste realizado para que seja possível atualizar corretamente um documento utilizando a opção Atualizar arquivo do GED. 
- Ajuste realizado para que seja possível exportar uma widget via Eclipse ou central de componentes corretamente.
- Realizado ajuste para que seja possível criar serviços no TOTVS Fluig corretamente.

## 

## 03 de Setembro de 2024

---

## Correções

- Aumentada a segurança das informações de *login* armazenados no *token* JWT para evitar a exploração de vulnerabilidades.
- Corrigida a contagem de [usuários](/pages/viewpage.action?pageId=234455411) da plataforma para considerar também os usuários do tipo [Aplicativo](https://tdn.totvs.com/x/54L5DQ#Plataforma%E2%9D%99Oauthapplication-CriarUsu%C3%A1rioAplicativo(Opcional)) – que são utilizados para integrações – visto que eles também são considerados na contagem de [licenças](/display/fluig/Licenciamento+da+plataforma) quando estão ativos.
- Ajuste realizado na central de tarefas para que seja possível criar um filtro utilizando as colunas visíveis da solicitação corretamente.
- Efetuadas correções para que o indicativo de notificações não lidas seja exibido corretamente no ícone dos aplicativos My Fluig e My Approval quando utilizados em dispositivos com o sistema operacional iOS.
- Realizada correção no fluxo da solicitação do processo, permitindo transferir uma atividade e salvar um anexo corretamente.
- Corrigida a movimentação da atividade utilizando a API *process-management/api/v2/requests/{idSolicitacao}/move* para que a tarefa não seja movimentada caso não seja informado o usuário ou mesmo um usuário incorreto.

## 

## 28 de Agosto de 2024

---

## Correções

- Feitos ajustes para que a verificação de exceções de *proxy* funcionem corretamente quando a plataforma está configurada para que as requisições passem pelo *proxy*.
- Realizada correção na consulta de solicitação, para que a pesquisa retorne corretamente o número da solicitação, ignorando o espaço adicionado no número.
- Realizada correção para que, ao excluir um comentário em um documento, a ação seja feita corretamente, sem gerar inconsistências.
- Feitos ajustes para aumentar a segurança na manipulação de dados da empresa e evitar possíveis explorações de vulnerabilidades.

## 

## 20 de Agosto de 2024

---

## Correções

- Melhorada a obtenção de informações por meio de *logs* para facilitar a identificação de inconsistências no fluxo de criação de usuários.
- Remoção das widgets do TOTVS Fluig No-Code e remoção das abas em comunidades.
- Realizada correção na transferência de pendencia de uma atividade que contém regra de anexo.
- Correção realizada para que formulários que contenham quebra de linha, sejam salvos corretamente.
- Corrigida a consulta das APIs passando o offset.
- Realizada correção para que os nomes definidos no fluxo sejam exibidos corretamente no aplicativo My Approval durante a seleção da próxima atividade.
- Realizada correção na[edição colaborativa com Google Drive](https://tdn.totvs.com/x/ukQYDQ), para que seja possível pesquisar e adicionar um colaborador no documento.

## 

## 13 de Agosto de 2024

---

## Correções

- Descontinuado o recurso *getSummaryColleagues* e substituído pelo novo recurso *getSummarizedColleagues*, que possui mais segurança e validações que visam sanar questões de vulnerabilidades.
- Corrigida a exibição das tarefas na central de tarefas com usuário substituto.
- Realizada correção para que seja executado corretamente o importador de dados históricos com o parâmetro para deletar os registros, não gerando inconsistência.
- Criado o parâmetro **fluig.schedule.single.instance** para permitir que o [Agendador de tarefas](https://tdn.totvs.com/pages/viewpage.action?pageId=234455387) seja executado em apenas uma instância, visando resolver situações de concorrência envolvendo atividades intermediárias e *gateways* quando são utilizadas mais de uma instância do Fluig. Saiba mais em [Como executar jobs em apenas uma instância do Fluig?](https://tdn.totvs.com/x/2VtqMw)

## 

## 06 de Agosto de 2024

---

## Correções

- Realizada correção na conversão de uma solicitação na atividade de serviço.
- Realizada correção na importação de Eventos Globais, utilizando o plugin eclipse na versão 1.8.2.
- Corrigida a busca de grupos dentro de [papéis](/pages/viewpage.action?pageId=234455398) para que os usuários sejam exibidos corretamente.

## 

## 30 de Julho de 2024

---

## Correções

- Realizado ajuste para que a imagens da comunidade seja exibida corretamente para usuários administradores.
- Corrigido o recurso [Configuração do sistema](/pages/viewpage.action?pageId=235597328) do WCMADMIN para que as informações sejam salvas corretamente ou exiba uma mensagem mais clara no *log* quando ocorrer alguma inconsistência que precise ser ajustada.
- Realizada correção no Fluig para que os documentos assinados possam ser visualizados corretamente, após publicados.
- Realizado ajuste para manter o botão de "Atividades Paralelas" mesmo quando a solicitação é movimentada pelo fluxo final.

## 

## 23 de Julho de 2024

---

## Correções

- Correção realizada no Fluig Studio para que as requisições para o servidor não trafeguem dados sensíveis de usuários.
- Realizado ajuste para que seja possível habilitar ou desabilitar o processo de limpeza de notificações para novos usuários.


<!-- anchors: Atualizações(1.8.2)-Ciclodeatualização, Atualizações(1.8.2)-24deFevereirode2026, Atualizações(1.8.2)-Correção, Atualizações(1.8.2)-XXdeDezembrode2024, Atualizações(1.8.2)-Melhoria, Atualizações(1.8.2)-IntegraçãoTOTVSFluigxTOTVSiPaaScomapenasumclique!, Atualizações(1.8.2)-18deFevereirode2026, Atualizações(1.8.2)-Correção.1, Atualizações(1.8.2)-10deFevereirode2026, Atualizações(1.8.2)-Melhoria.1, Atualizações(1.8.2)-NovalogoTOTVSFluig, Atualizações(1.8.2)-03deFevereirode2026, Atualizações(1.8.2)-Correção.2, Atualizações(1.8.2)-27deJaneirode2026, Atualizações(1.8.2)-Correção.3, Atualizações(1.8.2)-20deJaneirode2026, Atualizações(1.8.2)-Melhoria.2, Atualizações(1.8.2)-Artigoscommaissegurançadeconteúdoemcomunidades, Atualizações(1.8.2)-Correções, Atualizações(1.8.2)-13deJaneirode2026, Atualizações(1.8.2)-Correção.4, Atualizações(1.8.2)-16deDezembrode2025, Atualizações(1.8.2)-Correção.5, Atualizações(1.8.2)-02deDezembrode2025, Atualizações(1.8.2)-Correção.6, Atualizações(1.8.2)-25deNovembrode2025, Atualizações(1.8.2)-Correções.1, Atualizações(1.8.2)-11deNovembrode2025, Atualizações(1.8.2)-Correção.7, Atualizações(1.8.2)-04deNovembrode2025, Atualizações(1.8.2)-Correção.8, Atualizações(1.8.2)-29deOutubrode2025, Atualizações(1.8.2)-Atualizaçãorecomendada, Atualizações(1.8.2)-Correção.9, Atualizações(1.8.2)-21deOutubrode2025, Atualizações(1.8.2)-Correção.10, Atualizações(1.8.2)-14deOutubrode2025, Atualizações(1.8.2)-Correção.11, Atualizações(1.8.2)-30deSetembrode2025, Atualizações(1.8.2)-Correção.12, Atualizações(1.8.2)-23deSetembrode2025, Atualizações(1.8.2)-Correção.13, Atualizações(1.8.2)-16deSetembrode2025, Atualizações(1.8.2)-Correção.14, Atualizações(1.8.2)-09deSetembrode2025, Atualizações(1.8.2)-Correção.15, Atualizações(1.8.2)-02deSetembrode2025, Atualizações(1.8.2)-Correção.16, Atualizações(1.8.2)-26deAgostode2025, Atualizações(1.8.2)-Correção.17, Atualizações(1.8.2)-12deAgostode2025, Atualizações(1.8.2)-Correção.18, Atualizações(1.8.2)-05deAgostode2025, Atualizações(1.8.2)-Correção.19, Atualizações(1.8.2)-22deJulhode2025, Atualizações(1.8.2)-Correções.2, Atualizações(1.8.2)-15deJulhode2025, Atualizações(1.8.2)-Correções.3, Atualizações(1.8.2)-08deJulhode2025, Atualizações(1.8.2)-Correções.4, Atualizações(1.8.2)-01deJulhode2025, Atualizações(1.8.2)-Correções.5, Atualizações(1.8.2)-24deJunhode2025, Atualizações(1.8.2)-Correções.6, Atualizações(1.8.2)-17deJunhode2025, Atualizações(1.8.2)-Correções.7, Atualizações(1.8.2)-10deJunhode2025, Atualizações(1.8.2)-Correções.8, Atualizações(1.8.2)-03deJunhode2025, Atualizações(1.8.2)-Correções.9, Atualizações(1.8.2)-27deMaiode2025, Atualizações(1.8.2)-Correções.10, Atualizações(1.8.2)-20deMaiode2025, Atualizações(1.8.2)-Correções.11, Atualizações(1.8.2)-13deMaiode2025, Atualizações(1.8.2)-Correções.12, Atualizações(1.8.2)-06deMaiode2025, Atualizações(1.8.2)-Correções.13, Atualizações(1.8.2)-29deAbrilde2025, Atualizações(1.8.2)-Melhoria.3, Atualizações(1.8.2)-AutenticaçãoparaserviçosSOAP:maissegurançaefacilidadedeconfiguração, Atualizações(1.8.2)-Correções.14, Atualizações(1.8.2)-22deAbrilde2025, Atualizações(1.8.2)-Correções.15, Atualizações(1.8.2)-15deAbrilde2025, Atualizações(1.8.2)-Correções.16, Atualizações(1.8.2)-08deAbrilde2025, Atualizações(1.8.2)-Correções.17, Atualizações(1.8.2)-01deAbrilde2025, Atualizações(1.8.2)-Correções.18, Atualizações(1.8.2)-25deMarçode2025, Atualizações(1.8.2)-Correções.19, Atualizações(1.8.2)-18deMarçode2025, Atualizações(1.8.2)-Correções.20, Atualizações(1.8.2)-04deMarçode2025, Atualizações(1.8.2)-Correções.21, Atualizações(1.8.2)-18deFevereirode2025, Atualizações(1.8.2)-Correções.22, Atualizações(1.8.2)-11deFevereirode2025, Atualizações(1.8.2)-Correções.23, Atualizações(1.8.2)-04deFevereirode2025, Atualizações(1.8.2)-Correções.24, Atualizações(1.8.2)-21deJaneirode2025, Atualizações(1.8.2)-Correções.25, Atualizações(1.8.2)-14deJaneirode2025, Atualizações(1.8.2)-Correções.26, Atualizações(1.8.2)-17deDezembrode2024, Atualizações(1.8.2)-Correções.27, Atualizações(1.8.2)-10deDezembrode2024, Atualizações(1.8.2)-Correções.28, Atualizações(1.8.2)-03deDezembrode2024, Atualizações(1.8.2)-Correções.29, Atualizações(1.8.2)-26deNovembrode2024, Atualizações(1.8.2)-Correções.30, Atualizações(1.8.2)-19deNovembrode2024, Atualizações(1.8.2)-Correções.31, Atualizações(1.8.2)-12deNovembrode2024, Atualizações(1.8.2)-Melhoria.4, Atualizações(1.8.2)-AtualizaçãodedadosadicionaisdeusuáriospelaAPI, Atualizações(1.8.2)-Correções.32, Atualizações(1.8.2)-05deNovembrode2024, Atualizações(1.8.2)-Correções.33, Atualizações(1.8.2)-29deOutubrode2024, Atualizações(1.8.2)-Correções.34, Atualizações(1.8.2)-22deOutubrode2024, Atualizações(1.8.2)-Correções.35, Atualizações(1.8.2)-15deOutubrode2024, Atualizações(1.8.2)-Melhoria.5, Atualizações(1.8.2)-Novoswidgetsparafacilitarsuarotina, Widgets, Widgets--684035868, Widgets--184407625, Widgets-1114251673, Atualizações(1.8.2)-Correções.36, Atualizações(1.8.2)-10deOutubrode2024, Atualizações(1.8.2)-Correções.37, Atualizações(1.8.2)-08deOutubrode2024, Atualizações(1.8.2)-Correções.38, Atualizações(1.8.2)-01deOutubrode2024, Atualizações(1.8.2)-Correções.39, Atualizações(1.8.2)-17deSetembrode2024, Atualizações(1.8.2)-Correções.40, Atualizações(1.8.2)-10deSetembrode2024, Atualizações(1.8.2)-Correções.41, Atualizações(1.8.2)-03deSetembrode2024, Atualizações(1.8.2)-Correções.42, Atualizações(1.8.2)-28deAgostode2024, Atualizações(1.8.2)-Correções.43, Atualizações(1.8.2)-20deAgostode2024, Atualizações(1.8.2)-Correções.44, Atualizações(1.8.2)-13deAgostode2024, Atualizações(1.8.2)-Correções.45, Atualizações(1.8.2)-06deAgostode2024, Atualizações(1.8.2)-Correções.46, Atualizações(1.8.2)-30deJulhode2024, Atualizações(1.8.2)-Correções.47, Atualizações(1.8.2)-23deJulhode2024, Atualizações(1.8.2)-Correções.48 -->
