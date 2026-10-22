---
title: "Atualização 1.1.4"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=108661690"
scraped_at: "2026-03-09T03:21:38.775Z"
depth: 2
anchors: 6
child_links: 36
---

# Atualização 1.1.4

Confira abaixo as novidades na atualização 1.1.4 do Fluig:

# Administração

**Gerencie dados adicionais de sua empresa**
No gerenciamento de empresas do Fluig, adicione, remova e edite dados adicionais nas empresas, de forma fácil e rápida.

![](/download/attachments/108661690/tela%20do%20WCM%20para%20adi%C3%A7%C3%A3o%20de%20par%C3%A2metros%20-%202.PNG?version=1&modificationDate=1389707367000&api=v2)

****

**Utilize papel “user” (todos os usuários do sistema) na configuração de permissões**
Nesta atualização do Fluig, o componente de busca (zoom) utilizado para a consulta dos papeis do sistema passa a exibir o papel "user", que é um papel interno do sistema e que representa todos os usuários.

****

**Compatibilidade com o Microsoft Outlook 2013**
Utilize o plugin de integração do Fluig na versão mais recente do Microsoft Outlook.

![](/download/attachments/108661690/fluig-outlook-2013.png?version=1&modificationDate=1389707407000&api=v2)

**Novos parâmetros para escalabilidade do Fluig**
Para otimizar o servidor de aplicação do Fluig, está disponível algumas recomendações de parâmetros de configuração a serem alterados. Para mais informações, [clique aqui](https://tdn.totvs.com/pages/viewpage.action?pageId=77299889#ParâmetrosdeconfiguraçãodoFluig-Recomendações).

Nota

A alteração destes parâmetros é opcional.

# API

**Web service ECMDocumentService**
Nesta atualização do Fluig, foi corrigido a atribuição correta de valor do campo "*InternalVisualizer*" na publicação de documentos via web service. Para mais informações sobre Web services disponíveis no Fluig, [clique aqui](/pages/viewpage.action?pageId=73084007).

****

**Nova forma para recuperar o link de tarefas workflow**
Para recuperar o link de uma tarefa workflow não deve mais ser utilizado a propriedade "*WDKTaskLink*". Nesta atualização do Fluig esta informação é obtida através do método *hAPI.getUserTaskLink(numAtiv)*. Para mais informações, [clique aqui](https://tdn.totvs.com/pages/viewpage.action?pageId=73082818#CustomizaçãodeWorkflow-CustomizaçãodoProcesso).

# Studio

**Novo endereço para atualizações do Fluig Studio**
Para manter o Studio atualizado com a atualização mais recente disponível, é necessário adicionar o novo Update Site na IDE utilizada (Eclipse/TDS). O endereço antigo - [http://ds.totvs.com/updates/fluig/](https://ds.totvs.com/updates/fluig/) - não está mais disponível e não será mais atualizado. Para mais informações de como adicionar o novo *Update Site*, acesse [http://update.fluig.com](https://update.fluig.com)

![](/download/attachments/108661690/image2014-1-10%2011-52-12.png?version=1&modificationDate=1389384385000&api=v2)

# BPM

**Visualize o volume de solicitações a serem convertidas**
Agora é possível visualizar, de forma paginada, o volume total de solicitações em aberto a serem convertidas após selecionar o processo workflow desejado.

****

**Visualização da aba Processos**
Visualize corretamente o conteúdo da aba “Processos” ao movimentar uma solicitação workflow através do link recebido no e-mail de acompanhamento.

****

**Validação de tamanho de dados de formulários**
Com esta atualização do Fluig, será exibido um alerta ao adicionar um volume de dados que exceda a capacidade de armazenamento disponível em um campo de formulário.

# ECM

**Mapeamento ****de campos de formulários**
Ao utilizar a opção de armazenamento de formulários "Tabela em banco de dados", a tabela será modificada de acordo as atualizações de campos realizadas no arquivo *html* publicado no Fluig

# Social

**Desabilite o chat**
Se necessário, agora é possível desabilitar o serviço de mensagens instantâneas do Fluig (chat), em cada empresa disponível no Fluig.

**Visualize o conteúdo compartilhado em publicações**
Visualize corretamente a pré-visualização do conteúdo selecionado em uma publicação - imagem, vídeo ou documentos - em um ambiente multiempresa do Fluig.

Atenção

Em um ambiente multiempresa do Fluig, é necessário apagar o conteúdo do diretório *<FLUIG>/repository/wcmdir/social/thumb/PHOTO e republicar o conteúdo - imagem, vídeo ou documentos.*


<!-- anchors: Atualização1.1.4-Administração, Atualização1.1.4-API, Atualização1.1.4-Studio, Atualização1.1.4-BPM, Atualização1.1.4-ECM, Atualização1.1.4-Social -->
