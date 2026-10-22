---
title: "Atualização 1.3.6"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=152802533"
scraped_at: "2026-03-09T03:19:24.153Z"
depth: 2
anchors: 6
child_links: 36
---

# Atualização 1.3.6

Confira abaixo as novidades na atualização 1.3.6 do Fluig:

# ECM

**Cópia controlada com mais compatibilidade**

A habilidade de cópia controlada foi aprimorada, agora são aceitas diferentes extensões de arquivo (.doc, .docx, .xls, .xlsx), aumentando a compatibilidade e facilitando sua utilização.

![](/download/attachments/152802533/SOCIALECMSUST-2730.png?version=1&modificationDate=1409595488000&api=v2)

**Novas propriedades em documentos**

Agora é possível saber quem foram os aprovadores de um documento por meio das propriedades de cópia controlada "Fluig.LevelX.ApproverY" (onde X e Y variam de 1 a 5) que possuem os nomes dos aprovadores separados por nível de aprovação.

Também foi criada a propriedade "Fluig.User.Project", que informa o projeto configurado para o usuário.

# BPM

**Versionamento de formulários mais dinâmico**

Agora é possível escolher se as alterações feitas em formulários e eventos devem manter a versão existente do formulário ou criar uma nova versão.

![](/download/attachments/152802533/SOCIALECMSUST-2644.png?version=1&modificationDate=1409335521000&api=v2)

****

**Gestor de processo com mecanismo customizado**

Agora a opção "Minhas tarefas sob gerência" – da central de tarefas – somente é apresentada para o gestor do processo. Ao definir um mecanismo de atribuição customizado, é necessário informar a matrícula do usuário que pode visualizar a tarefa.

![](/download/attachments/152802533/SOCIALECMSUST-2616.png?version=1&modificationDate=1409320930000&api=v2)

****

**Atualização de processos e mensagem otimizadas**

Foi otimizada a atualização da montagem de processos de *workflow* para versões mais novas, evitando inconsistências de conversão e criação, e reformulada a mensagem que é apresentada ao usuário, tornando-a mais clara.

**Descrição de componentes mais clara**

Foram aprimoradas as descrições dos componentes – principalmente nos mecanismos de anotação e condicionais – no Fluig Studio, tornando a apresentação mais detalhada e limpa visualmente.

![](/download/attachments/152802533/SOCIALECMSUST-2627.png?version=3&modificationDate=1409660947000&api=v2)

**Imagem do processo com mais qualidade**

Foi aprimorada a geração da imagem do processo que é apresentada nas solicitações para garantir uma representação fiel dos artefatos que foram modelados.

![](/download/attachments/152802533/SOCIALECMSUST-2732.png?version=1&modificationDate=1409660972000&api=v2)

****

**Exportação de processo com componente Link otimizada**

A geração e edição de processos *workflow* no Fluig Studio e na Web foram aprimoradas para permitir a inclusão de nomes para os *links* entre as atividades. Agora também é possível exportar os nomes/descrições para a WEB, edita-los e importa-los novamente para o Fluig Studio.

**Download de anexos em processos mais abrangente**

A partir de agora, usuários sem o perfil de administrador também podem realizar *download*e impressão de anexos de processos *workflow*.

**Novo método no webservice de sinal**

Foi criado o método “*fireSignal*” no *webservice* para envio de sinal de processos *workflow*.

Nota

Informações adicionais podem ser obtidas em [Utilização de *Webservices*](https://tdn.totvs.com/x/ZyxbB).

**Envio de sinais em processos workflow mais eficiente**

Foi aperfeiçoado o envio de sinais em processos *workflow*, agora o sistema envia sinal depois de atividades automáticas.

# Social

**Apresentação de comunidades mais completa**

Na tela onde são apresentadas todas as comunidades, ao posicionar o mouse sobre uma comunidade agora é exibido o nome completo dela, facilitando sua identificação.

![](/download/attachments/152802533/SOCIALECMSUST-2720.png?version=1&modificationDate=1409336777000&api=v2)

****

**Aviso sobre a remoção de artigos**

Agora, quando um artigo é excluído e um usuário tenta acessá-lo por meio da publicação existente na *timeline*, o Fluig informa que ele foi removido.

![](/download/attachments/152802533/SOCIALECMSUST-2694.png?version=1&modificationDate=1409339979000&api=v2)

****

**Novos compartilhamentos em comunidades ocultas**

A partir de agora é possível compartilhar publicações e documentos de uma comunidade pública em uma comunidade oculta, bem como compartilhar em uma comunidade oculta documentos que pertencem a ela.

# Arquitetura

**Mais segurança na configuração Web Service**

Os serviços SOAP que fazem uso de permissionamento foram otimizados para oferecer mais segurança e garantir a integridade das informações.

# WCM

**Logout do Fluig personalizável** 

A partir de agora é possível customizar a URL de *logout* a ser utilizada pelo *Identity*. Foi adicionado o parâmetro “java:global/totvs/idp/logoutURL” no arquivo “standalone.xml”, que indicará para onde será feita a requisição de *logout* pelo *Identity* quando a opção "Encerrar sessão do Fluig Identity ao efetuar *logoff*" estiver marcada.

E quando o Fluig *Identity* está sendo utilizado, ao efetuar *logout*, o Fluig emite uma mensagem informando que outras sessões podem ser encerradas.

# Plataforma

**Página de ajuda mais completa e de fácil acesso**

Agora o Fluig conta com a página de ajuda mais completa e com a navegação facilitada, o que auxilia o usuário na realização de seu trabalho diário.

![](/download/attachments/152802533/SOCIALECMSUST-2737.png?version=2&modificationDate=1409169453000&api=v2)

****


<!-- anchors: Atualização1.3.6-ECM, Atualização1.3.6-BPM, Atualização1.3.6-Social, Atualização1.3.6-Arquitetura, Atualização1.3.6-WCM, Atualização1.3.6-Plataforma -->
