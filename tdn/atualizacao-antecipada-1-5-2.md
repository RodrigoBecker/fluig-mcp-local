---
title: "Atualização antecipada 1.5.2"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=205919162"
scraped_at: "2026-03-09T04:25:03.151Z"
depth: 3
anchors: 8
child_links: 45
---

# Atualização antecipada 1.5.2

Este documento contém um breve descritivo acerca das implementações e correções efetuadas.

- **Implementações**: são apresentadas todas as implementações e evoluções da plataforma contidas na atualização **1.5.2**.
- **Correções:** são apresentados todos os ajustes contidos na atualização **1.5.2**. Tais ajustes compreendem aprimoramento de performance e melhorias em processos já existentes.

 Informações detalhadas podem ser obtidas no **Help Online **e aqui mesmo no **http://dev.fluig.com/**.

**Os chamados solucionados em atualizações antecipadas são acumulativos, ou seja, todas as alterações realizadas nas liberações anteriores estarão disponíveis na última atualização.**

# Índice

## Procedimentos para atualização do atualização antecipada

*Por se tratar de uma liberação emergencial são necessários alguns procedimentos diferenciados para atualização do ambiente. Vamos a eles:*

*1 - Descompacte o conteúdo do arquivo referente a atualização para uma pasta;*

*2 - Pare a execução dos serviços do **fluig**, **fluig_MemCached** e **fluig_RealTime**;*

*3 - Elimine as pastas data, log e tmp do fluig em: (<instalacao fluig>\jboss\standalone);*

*4 - Copie os arquivos descompactados anteriormente para a pasta <instalacao fluig>\jboss\apps. Substitua todos os arquivos;*

*5 - Inicie os serviços Memcached e RealTime;*

*6 - Inicie o serviço do fluig.*

*Basta aguardar o serviço do fluig ficar disponível e acessar a plataforma já atualizada.*

*Caso o seu ambiente fluig seja administrado pela nossa equipe de Cloud, você pode entrar em contato através de um chamado ou ligando para 4003-0015 e solicitar a atualização.*

## Atualização antecipada #1

**Edição de conteúdo em anexos workflow**

**Atualização oficial:** fluig 1.5.3

Não era possível editar o conteúdo de um anexo workflow, o documento nem mesmo abria para ser editado. Esta situação foi solucionada.

**Conversão ECM para o fluig**

**Atualização oficial:** fluig 1.5.3

Foi corrigida a conversão dos dados sociais de um documento do ECM para o fluig que apresentavam erro de que o tipo do documento estava nulo.

## Atualização antecipada #2

**Impressão de cópia controlada**

**Atualização oficial:** fluig 1.5.3

Não era possível realizar impressão de cópia controlada com applet habilitado e utilizando o navegador Internet Explorer. Esta situação foi corrigida. 

**Mensagem ao iniciar um subprocesso**

**Atualização oficial:** fluig 1.5.3

Foi corrigida a notificação em solicitações que iniciavam subprocessos após uma atividade automática.

**Inicialização do fluig**

**Atualização oficial:** fluig 1.5.3

Foi alterada a ordem de deploy dos artefatos do fluig. Agora todos os artefatos padrões do fluig são iniciados por primeiro, depois são iniciados os artefatos personalizados. 
Caso as widgets personalizadas estejam falhando ai iniciar o fluig, é possível que elas estejam com conflito de bibliotecas com as que o fluig utiliza. Verifique o item “[Evitar conflito de dependências com o fluig](https://tdn.totvs.com/pages/viewpage.action?pageId=185735401#ComocriarumWidgetquebusqueconteúdo-Evitarconflitodedependênciascomofluig)” na seguinte documentação: [http://tdn.totvs.com/pages/viewpage.action?pageId=185735401](https://tdn.totvs.com/pages/viewpage.action?pageId=185735401) para ajustar as widgets com problemas.

**Execução de atividades do tipo serviço**

**Atualização oficial:** fluig 1.5.3

As atividades do tipo serviço estavam sendo executadas várias vezes durante a movimentação de uma solicitação. Esta situação foi corrigida.

**Número do subprocesso na aba de complementos**

**Atualização oficial:** fluig 1.5.3

Quando um subprocesso é finalizado o seu número não aparece mais na aba "Complementos" da solicitação pai. Esta situação foi corrigida.

## Atualização antecipada #3

**Importação de widgets via central de componentes**

**Atualização oficial:** fluig 1.5.3

Agora é possível alterar o valor da porta offset. Antes da correção não estava sendo possível realizar a importação de widgets via Central de Componentes com a porta offset modificada. 

Essa porta é configurada no arquivo standalone.xml no diretório <INSTALAÇÃO_fluig>\jboss\standalone\configuration e é utilizada para alterar as portas padrões utilizadas pelo produto.

## Atualização antecipada #4

**Edição de subprocessos**

**Atualização oficial:** fluig 1.5.3

Agora não é possível eliminar um processo que está sendo utilizado como subprocesso.

Para os casos em que o processo já foi eliminado e o subprocesso editado e informado para ele um novo processo, essa situação irá funcionar corretamente.

**Noticias Kit Intranet**

**Atualização oficial:** fluig 1.5.3

Ajustada a ordenação das notícias banco quando utilizado o banco de dados SQLServer.

**Processo configurado com mais de um subprocesso em sequência**

**Atualização oficial:** fluig 1.5.3

Quando existiam mais de um subprocesso em sequência, estavam sendo marcadas atividades como ativas incorretamente. Esta situação foi solucionada.

## Atualização antecipada #5

**Inicialização do fluig**

**Atualização oficial:** fluig 1.5.3

Correção para evitar o conflito de dependências entre artefatos personalizados ou do fluig com as do servidor de aplicações.

## Atualização antecipada #6

**Performance inicialização/movimentação de solicitações**

**Atualização oficial:** fluig 1.5.3

Foram feitas melhorias para aumentar a performance na inicialização/movimentação de solicitações quando o processo possui segurança de anexos configurada.

**Edição de usuários - mensagem de e-mails já cadastrados**

**Atualização oficial:** fluig 1.5.3

Edição de usuários quando há espaços em branco no final de campos obrigatórios em um ambiente que foi convertido do ECM 3.0 para o fluig.

**


<!-- anchors: Atualizaçãoantecipada1.5.2-Índice, Atualizaçãoantecipada1.5.2-Procedimentosparaatualizaçãodoatualizaçãoantecipada, Atualizaçãoantecipada1.5.2-Atualizaçãoantecipada#1, Atualizaçãoantecipada1.5.2-Atualizaçãoantecipada#2, Atualizaçãoantecipada1.5.2-Atualizaçãoantecipada#3, Atualizaçãoantecipada1.5.2-Atualizaçãoantecipada#4, Atualizaçãoantecipada1.5.2-Atualizaçãoantecipada#5, Atualizaçãoantecipada1.5.2-Atualizaçãoantecipada#6 -->
