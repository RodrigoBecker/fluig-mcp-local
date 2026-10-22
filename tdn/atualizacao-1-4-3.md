---
title: "Atualização 1.4.3"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=179701044"
scraped_at: "2026-03-09T03:18:33.229Z"
depth: 2
anchors: 4
child_links: 41
---

# Atualização 1.4.3

Confira abaixo as novidades na atualização 1.4.3 do Fluig:

# Arquitetura

**Envie e-mails customizados em seu widget e formulários Fluig**

Está disponível na API pública do Fluig o método “*customEmailSender*”, que permite enviar *e-mails* para qualquer destinatário, independentemente do usuário estar ou não no Fluig.

Nota

Mais informações sobre o novo método podem ser obtidas em [Fluig API](https://api.fluig.com/resource_AlertServiceRest.html#path__alert_customEmailSender.html).

# BPM

**Novo método na API de eventos workflow**

Foi adicionado o método “*publishWorkflowAttachment*” à API de eventos *workflow* (hAPI) para possibilitar a publicação de anexos *workflow* no GED por eventos de processo.

Nota

Mais informações sobre o novo método podem ser obtidas em [Customização de *Workflow*](https://tdn.totvs.com/pages/viewpage.action?pageId=73082818).

# Guia de Estilos

**Novo componente Calendar**

Agora está disponível o componente de calenário no Fluig Style Guide! Para utilizá-lo, basta informar o *input* que será aplicado e as configurações adicionais, se desejado. Esse componente é muito útil para selecionar datas navegando pelo dia, mês ou ano ou até mesmo selecionar uma determinada hora.

![](/download/attachments/179701044/SOCIALECMSUST-3300.png?version=1&modificationDate=1418050065000&api=v2)

**Novo componente Slider**

Esse componente foi criado para transformar elementos *input* em *Sliders*, que são componentes para definir valores ao arrastar o cursor sobre barras. Para utilizá-lo, basta informar qual *input* deve ser transformado. Esse componente é muito útil para proporcionar ao usuário um retorno visual sobre os valores escolhidos para uma determinada opção do produto.

****

# Correções

Nessa sessão listamos alguns *bugs* que matamos nessa atualização que garantem que tudo corra bem na sua plataforma.

- Visualização de arquivos que possuem a extensão ".png" em letras maiúsculas na Navegação de Documentos.

- Visualização de documentos resultantes de uma busca global realizada por um usuário Administrador quando ele não possui permissão de acesso a tais documentos.

- Consulta a formulários armazenados em tabela única utilizando mais de uma *constraint*.

- Exportação de *widget* customizado do Fluig Studio para o Fluig utilizando um usuário administrador quando há integração com o Fluig Identity.

- Busca de documentos utilizando parte do título agora considera todas as permissões existentes para os documentos na apresentação dos resultados.

- Retorno de documentos já indexados quando são utilizados os métodos do *webservice*“*ECMSearchDocumentService*”.Nota Mais informações sobre *webservices* e seus métodos podem ser obtidas em [Utilização de *Webservices*](/pages/viewpage.action?pageId=73084007).

- Registro dos *hits* e *log* de acesso de documentos que possuem a versão inicial "0.000" quando o controle manual da versão inicial está ativo.

- Atribuição de valores em campos do tipo *radio* e *checkbox*existentes dentro de um formulário filho após incluir e excluir um registro.

- Edição do nome de um usuário utilizando o método “*updateColleague*” do *webservice* “*ECMColleagueService*”.Nota Mais informações sobre *webservices* e seus métodos podem ser obtidas em [Utilização de *Webservices*](/pages/viewpage.action?pageId=73084007).

- Exportação das tarefas sob gerência do usuário quando a janela da Central de Tarefas está configurada para apresentar 100 solicitações por página.

- Apresentação da mensagem informada no “*throw*” quando o evento “*beforeTaskSave*” foi customizado e não deve salvar a atividade caso ocorra uma inconsistência.Nota Mais informações sobre esse evento podem ser obtidas em [Customização de Eventos](https://tdn.totvs.com/pages/viewpage.action?pageId=75270416).

- Método "*setCardValue*" e o *zoom* de *datasets* alterados para não considerar o nome dos campos do formulário como *case sensitive* quando é utilizado o banco de dados Oracle.

- Consultas de *datasets* de formulário do tipo Tabela Única com *constraints*vazias em campos do tipo *radiobutton*.

- Fila de exportação da pesquisa de processos em XLS como chamada assíncrona direta e redimensionamento do XLS feito apenas para as colunas principais para tornar a geração do relatório de solicitações mais rápida.


<!-- anchors: Atualização1.4.3-Arquitetura, Atualização1.4.3-BPM, Atualização1.4.3-GuiadeEstilos, Atualização1.4.3-Correções -->
