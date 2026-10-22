---
title: "Atualização 1.3.5"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=152797348"
scraped_at: "2026-03-09T03:19:29.573Z"
depth: 2
anchors: 6
child_links: 36
---

# Atualização 1.3.5

Confira abaixo as novidades na atualização 1.3.5 do Fluig:

# ECM

**Visualização de registros de formulários aprimorada**

Agora é possível visualizar os registros de formulário por meio de relatórios quando, na publicação do formulário, foi utilizada a opção de armazenamento “Em uma única tabela”.

![](/download/attachments/152797348/SOCIALECMSUST-2629.png?version=1&modificationDate=1407327132000&api=v2)

# BPM

**Atribuição de campo de formulário aperfeiçoada**

Agora, mesmo quando o formulário não está no servidor, ou seja, quando é utilizada a configuração do diagrama como local, é possível definir atribuição por campo de formulário.

![](/download/attachments/152797348/SOCIALECMSUST-2577.png?version=1&modificationDate=1408383441000&api=v2)

****

**Imagem do processo com mais qualidade**

Foi aprimorada a geração da imagem do processo que é apresentada nas solicitações para garantir uma representação fiel dos artefatos que foram modelados.

![](/download/attachments/152797348/SOCIALECMSUST-2578.png?version=1&modificationDate=1407846370000&api=v2)

****

**Consulta de solicitações mais prática**

A partir de agora é possível visualizar todas as solicitações independentemente da quantidade existente, tornando a consulta mais prática e eficiente.

****

****

**Customizações mais abrangentes**

Nessa atualização é possível identificar, na implementação de eventos, se um formulário ou processo está sendo acessado por meio de um aplicativo *mobile*, possibilitando customizações específicas para estes casos. O parâmetro utilizado para esse fim é o *"WKMobile"* e o método é o *"getMobile*".

Nota

Informações adicionais podem ser obtidas em [Customização de Formulários](https://tdn.totvs.com/x/U4l8B) e [Customização de Workflow](https://tdn.totvs.com/x/widbB).

**Comunicação com o usuário mais clara**

Ao excluir uma pasta que contenha formulários associados a processos, o Fluig apresenta uma mensagem explicando o motivo e informando qual formulário está impedindo a exclusão da pasta.

![](/download/attachments/152797348/SOCIALECMSUST-2576.png?version=2&modificationDate=1408122292000&api=v2)

****

**Mais rastreabilidade em tarefas de sub processos**

Agora, o Fluig registra no histórico quando uma solicitação iniciada ou cancelada é referente a um sub processo de uma solicitação do processo pai, permitindo a rastreabilidade da tarefa pelo usuário que a recebe.

![](/download/attachments/152797348/SOCIALECMSUST-2661.png?version=1&modificationDate=1408121593000&api=v2)

# Social

**Histórico de interações em artigos**

A partir dessa atualização, na galeria de artigos de uma comunidade é possível visualizar os apoios e os comentários do artigo independentemente de sua versão, permitindo que seja mantido um histórico de interações dos usuários no artigo.

**Publicação e visualização de artigos aperfeiçoadas**

Foi otimizada a publicação de artigos em comunidades, garantindo que eles estejam acessíveis e sejam visualizados a qualquer momento.

![](/download/attachments/152797348/SOCIALECMSUST-2654.png?version=1&modificationDate=1408015326000&api=v2)

**Links mais específicos em publicações e comentários**

Agora, o Fluig aceita URLs que contenham referência a uma âncora da página em questão, gerando o *link*e direcionando para o conteúdo marcado com a âncora.

![](/download/attachments/152797348/SOCIALECMSUST-2657.png?version=1&modificationDate=1407949080000&api=v2)

****

**Criação de formulários mais segura**

Criar formulários, tanto em processos quanto em comunidades, está mais seguro. Agora o Fluig informa quando um caracter não pode ser utilizado no título do formulário, garantindo assim a integridade das informações.

 ![](/download/attachments/152797348/SOCIALECMSUST-2651.png?version=1&modificationDate=1407844790000&api=v2)

****

**Timeline com experiência de uso aperfeiçoada**

Agora a timeline do Fluig apresenta os conteúdos com mais rapidez, proporcionando ao usuário uma nova experiência de uso, com agilidade e eficiência.

**Novidade na criação de artigos**

Agora, ao publicar um artigo pertencente a um assunto que não está parametrizado como obrigatório, é possível definir se será ou não emitida notificação para os usuários que o tem como assunto de interesse, por meio do campo *“Notificar?”*, disponível na criação de artigos.

![](/download/attachments/152797348/SOCIALECMSUST-2432.png?version=1&modificationDate=1408365353000&api=v2)

# Arquitetura

**Monitor de serviços do Fluig mais dinâmico**

A partir dessa atualização, é possível alterar a porta de acesso padrão utilizada pelo monitor de usuários conectados no Fluig - parâmetro **jmxPort=<parâmetro>** -, permitindo assim, que o monitor seja utilizado em ambientes compartilhados.

Nota

Mais informações podem ser obtidas em [Monitor de Serviços Fluig](https://tdn.totvs.com/x/QCCDC).

**Configurações mais automatizadas**

Agora, se a aplicação possuir permissão de alteração na base, ela efetua automaticamente a configuração do nível de isolamento transacional do SQL Server necessário para o Fluig.

Nota

Informações adicionais podem ser obtidas em [Configuração do banco de dados SQL Server](https://tdn.totvs.com/x/NRhbB).

# Fluig Studio

**Formulários em HTML mais dinâmicos**

Agora, ao criar um formulário em HTML, é possível definir um código de campo e um nome com até 70 caracteres, tornando-os mais específicos e de acordo com sua necessidade e preferências.

# Plataforma

**Documentação sobre datasets mais completa**

Foi atualizada e complementada a documentação para implementação de *datasets*, no tópico Construindo *Datasets* Customizados, que visa facilitar e orientar sua construção e utilização. Agora a documentação conta com mais exemplos.

Nota

A documentação atualizada está disponível em [Customização de *Datasets*](https://tdn.totvs.com/x/eitbB).


<!-- anchors: Atualização1.3.5-ECM, Atualização1.3.5-BPM, Atualização1.3.5-Social, Atualização1.3.5-Arquitetura, Atualização1.3.5-FluigStudio, Atualização1.3.5-Plataforma -->
