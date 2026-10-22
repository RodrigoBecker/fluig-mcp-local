---
title: "Atualização 1.3.3"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=147817396"
scraped_at: "2026-03-09T03:19:44.577Z"
depth: 2
anchors: 6
child_links: 38
---

# Atualização 1.3.3

Confira abaixo as novidades na atualização 1.3.3 do Fluig:

# ECM

**Contadores para pendências na Central de Tarefas**

Agora, na central de tarefas, é exibido o número de pendências não lidas e o total de pendências (por exemplo: 3/5), por categoria de pendência, melhorando sua visualização e facilitando as ações a serem tomadas.

![](/download/attachments/147817396/SOCIALECMSUST-2498.png?version=2&modificationDate=1405950236000&api=v2)

****

**Relatórios com acesso direto ao banco de dados mais eficientes**

Foi aprimorado o acesso de relatórios diretamente ao banco de dados (JDBC) para aumentar a integridade das informações.

Nota

Informações adicionais sobre a criação de relatórios (JDBC) podem ser obtidas em [Desenvolvimento de Relatórios](https://tdn.totvs.com/x/KAJzB).

**Cálculo para expiração de documentos aperfeiçoado**

A partir de agora, ao criar uma nova versão ou revisão de um documento que esteja expirado, é recalculada a data de vencimento levando em consideração a quantidade de dias para expiração definida nos Parâmetros Gerais.

![](/download/attachments/147817396/SOCIALECMSUST-2538.png?version=1&modificationDate=1405961669000&api=v2)

****

**Edição de volume com mais segurança**

A edição de volumes foi aprimorada, permitindo a atribuição de pastas para os diferentes tipos de volume e garantindo a integridade dos itens armazenados.

![](/download/attachments/147817396/SOCIALECMSUST-2560.png?version=1&modificationDate=1405954169000&api=v2)

****

**Metadados em formulários armazenados em tabela única**

Agora é possível obter propriedades adicionais (metadados) dos formulários armazenados em tabela única, utilizando o *dataset* do respectivo formulário.

# BPM

**Mais praticidade no apontamento de horas em atividades**

Está mais fácil efetuar apontamentos de horas em atividades de *workflows,*pois o processo foi aprimorado, tornando tudo mais prático.

![](/download/attachments/147817396/SOCIALECMSUST-2513.png?version=1&modificationDate=1406029655000&api=v2)

****

**Criação de formulários em um processo aprimorada**

Agora é possível criar formulários em um processo *workflow* de forma prática e eficiente, facilitando e agilizando o procedimento.

# Social

**Exibição do usuário no rodapé de comunidades**

Agora ao acessar uma comunidade, é exibido  o usuário que está utilizando o Fluig .

![](/download/attachments/147817396/SOCIALECMSUST-2447.png?version=2&modificationDate=1405950263000&api=v2)

**Controle de acesso à comunidades ocultas**

O controle de acesso ao conteúdo de comunidades ocultas está mais eficiente. Quando não está habilitado o grupo de acessos, o usuário que não possui permissão ao conteúdo consegue acessar a comunidade, mas não consegue visualizar seu conteúdo. Quando é habilitado o grupo de acessos, se o usuário não possuir permissão, é apresentada uma página informando que o acesso está negado.

![](/download/attachments/147817396/SOCIALECMSUST-2412.png?version=1&modificationDate=1406030892000&api=v2)

****

**Upload de imagens no Internet Explorer 9**

O processo de *upload* de imagens foi aperfeiçoado, agora é possível adicionar imagens em comunidades utilizando o Internet Explorer 9.

**Identificação de URLs encurtadas**

Agora na publicação de conteúdo, o Fluig gera *link* com base na validação de domínio existente, inclusive para URLs encurtadas.

# Arquitetura

**Mais precisão no cálculo do prazo de uma atividade**

Agora, o cálculo do prazo de uma atividade, quando utilizado em customizações ou integrações do Fluig, está mais preciso e consistente.

****

**Instalação em ambientes Linux automatizada**

Essa atualização conta com algumas novidades para instalações quando é utilizada uma das [versões homologadas](https://tdn.totvs.com/display/fluig/Matriz+de+Portabilidade) do sistema operacional Linux:** **

- agora o Memcached é instalado automaticamente;
- o Fluig pode ser iniciado como um serviço por meio do comando "service fluig start".

Atenção!

Para que a instalação automática do Memcached seja efetuada com sucesso, é necessário existir conexão com a internet.

A partir de agora, para o Linux, é obrigatório que a instalação do Fluig seja realizada utilizando o usuário root ou um usuário que tenha os privilégios de instalação de pacotes e alteração de serviços.

Mais informações sobre a instalação do Fluig em ambientes Linux podem ser obtidas em[Instalação Fluig (Instalador) - Linux](https://tdn.totvs.com/pages/viewpage.action?pageId=146181961).

# Fluig Studio

**Mais flexibilidade na nomenclatura de processo**

A nomenclatura dos processos está mais flexível e permitindo que seja utilizada acentuação nas palavras. Agora é possível abrir formulários no Internet Explorer durante a inicialização de um processo acentuado.

![](/download/attachments/147817396/Processo.PNG?version=1&modificationDate=1405972320000&api=v2)

# Mobile

**Atualização da Home e da timeline mais rápida**

Foram realizadas melhorias na navegação em páginas da Home e na timeline a partir de dispositivos móveis, tornando-a mais rápida e eficiente.

****

**Mais privacidade em comunidades**

O controle de acesso ao conteúdo de comunidades no mobile foi aperfeiçoado para considerar as permissões que o usuário possui ao apresentar as opções do menu, garantindo assim a privacidade das informações quando necessário.

Baixe agora!

****

****


<!-- anchors: Atualização1.3.3-ECM, Atualização1.3.3-BPM, Atualização1.3.3-Social, Atualização1.3.3-Arquitetura, Atualização1.3.3-FluigStudio, Atualização1.3.3-Mobile -->
