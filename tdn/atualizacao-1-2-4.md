---
title: "Atualização 1.2.4"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=142811016"
scraped_at: "2026-03-09T03:20:55.518Z"
depth: 2
anchors: 5
child_links: 40
---

# Atualização 1.2.4

Confira abaixo as novidades na atualização 1.2.4 do Fluig:

# ECM

**Execução de Aplicativos Dentro do Fluig**

A Navegação de Documentos foi evoluída para permitir a execução de aplicativos previamente cadastrados em *Painel de Controle > Documentos > Aplicativos*. Agora é possível utilizar aplicativos, executando-os a partir da Navegação de Documentos.

![](/download/attachments/142811016/SOCIALECMSUST-2122.PNG?version=2&modificationDate=1398283184000&api=v2)

* *

**Visualização de Documentos Externos**

Na Navegação de Documentos a visualização de documentos externos foi evoluída para permitir que páginas de terceiros que possuem alguma restrição de apresentação sejam abertas em uma nova janela, possibilitando, assim, a visualização de seu conteúdo.

![](/download/attachments/142811016/SOCIALECMSUST-2120.png?version=1&modificationDate=1398283218000&api=v2)

**

**Edição de Pastas**

As abas Aprovação e Propriedades Herdadas, da edição de pastas da Navegação de Documentos, foram otimizadas para considerar os níveis de aprovação e as propriedades herdadas previamente configurados mesmo após a alteração de outras informações da pasta em questão.

![](/download/attachments/142811016/image2014-4-22%2018%3A9%3A15.png?version=1&modificationDate=1398200976000&api=v2)

**Defina quem pode realizar o Download**** e Impressão de Documentos**

A funcionalidade de *download*, localizada na aba Segurança dos documentos, foi evoluída para garantir mais segurança quanto à impressão e ao *download* de documentos publicados no Fluig.

**Movimentação de Estruturas de Documentos mais rápida**

Nesta atualização, o Fluig cuida melhor dos recursos de recortar e colar documentos, aumentando o desempenho da movimentação de estruturas. Agora é possível mover grandes estruturas de diretórios mais rapidamente e com mais facilidade.

**Relatório de Cópias Controladas**

Agora está mais completo. O Relatório de Logs de Cópias Controladas foi evoluído para apresentar a impressora que foi utilizada e também a hora na qual foi efetuada a impressão, garantindo assim, maior rastreabilidade e posterior controle das cópias realizadas.

![](/download/attachments/142811016/image2014-4-22%2018%3A8%3A51.png?version=1&modificationDate=1398200952000&api=v2)

**Documentos Relacionados**

Foi otimizada a funcionalidade de documentos relacionados para efetuar as validações necessárias, utilizando regras de negócio para os eventos globais.

Nota

Foi customizada a variável “*WKListRelatedDocument*” para utilização de regras de negócio no evento “*beforeDocumentPublisher*”.

Para mais detalhes acesse o guia de [Customização de Eventos](/display/fluig/Desenvolvimento+de+Eventos#DesenvolvimentodeEventos-BeforeDocumentPublisher) .

**Campos Customizados de Documentos**

Foram efetuadas melhorias para permitir editar os campos customizados de documentos ao utilizar um evento global.

Nota

O evento global para realizar validações dos campos customizados é o “*validateCustomMetadata*”.

Para mais detalhes acesse o guia de [Customização de Eventos](/display/fluig/Desenvolvimento+de+Eventos#DesenvolvimentodeEventos-ValidateCustomMetadata) .

# Analytics

**Novidades no Fluig Analytics**

Agora está mais fluído. A página Central de Análise, anteriormente localizada no menu Processos, foi evoluída para o Fluig Analytics, que é o módulo pelo qual é possível monitorar dados em tempo real, oferecendo indicadores que permitem criar visões gerenciais, relatórios analíticos e até projetar tendências. Informações que podem ser convertidas em estratégias, apoiando a tomada de decisões.

Importante

Mais informações sobre como habilitar o Analytics podem ser obtidas no [Guia de Implantação Fluig Analytics](https://tdn.totvs.com/pages/viewpage.action?pageId=107381593).

![](/download/attachments/142811016/SOCIALECMSUST-2176.png?version=2&modificationDate=1398280833000&api=v2)

**Envio de dados para o Fluig Analytics**

Nesta atualização, a interface de comunicação entre o Analytics e o Fluig foi otimizada para lidar com instabilidades de ambientes, dentre outras melhorias que auxiliam na identificação de informações com mais rapidez e facilidade.

# Social

**Prévia de Vídeos em Publicações e Galerias**

Foi evoluída a funcionalidade de geração das prévias de vídeos em publicações e galerias para possibilitar a visualização delas durante o *upload*.

Importante

Para que as prévias de vídeos sejam geradas corretamente, é necessário que o ambiente tenha o aplicativo de terceiro “*ffmpeg*” instalado e configurado no Fluig.

Para mais informações acesse o guia [CON 086 - Configurar e Habilitar Thumbnails](/pages/viewpage.action?pageId=113804810) .

**Notificações em Dispositivos Móveis**

Foram otimizadas as notificações emitidas na socialização de conteúdo e nas solicitações de relacionamento em dispositivos móveis.

![](/download/attachments/142811016/celular.jpg?version=1&modificationDate=1398284022000&api=v2)

**Seleção de Documentos em Publicações**

A funcionalidade de seleção de documentos no momento de efetuar uma publicação foi evoluída para redimensionar a janela apresentada de acordo com a resolução que está sendo utilizada, melhorando, assim, a visualização da janela de seleção bem como as demais funcionalidades disponíveis.

![](/download/attachments/142811016/image2014-4-22%2018-13-47.png?version=1&modificationDate=1398283828000&api=v2)

**Navegação de Galerias de Fotos e Vídeos**

Foi evoluída a navegação de galerias de fotos e vídeos para garantir maior segurança nas publicações em comunidades, verificando se o usuário possui ou não permissão para efetuar tais publicações.

**Hiperlinks em Comentários de Publicações**

Agora é possível incluir hiperlinks nos comentários efetuados nas publicações existentes. Além de direcionar para o local correspondente, o texto direcionador fica destacado no comentário, indicando a existência de um hiperlink.

![](/download/attachments/142811016/SOCIALECMSUST-2157.png?version=1&modificationDate=1398283359000&api=v2)

**Visualização de Publicações de Comunidades na Timeline Pessoal**

A partir dessa atualização, ao ingressar em uma comunidade, é possível visualizar as publicações realizadas anteriormente à data de ingresso, pois além de ser possível visualizá-las na própria comunidade, elas também são distribuídas ao longo da timeline pessoal.

![](/download/attachments/142811016/image2014-4-23%2017%3A16%3A44.png?version=1&modificationDate=1398284225000&api=v2)

**Nomenclatura de Comunidades**

A partir dessa atualização, há mais liberdade ao nomear comunidades, é possível criar comunidades com mesmo nome em empresas distintas no Fluig.

# Fluig Studio

**Criação de Fluxos**

Foi aperfeiçoada a funcionalidade de criação de fluxos para torná-los compatíveis na Web e no Fluig Studio, permitindo assim, que o desenho do fluxo seja exportado e apresentado corretamente.

**WebService de Sinais para Windows**

Foi otimizado o *WebService* de Sinal do Fluig Studio para Windows para torná-lo compatível com o servidor Fluig.

Nota

Para mais informações sobre o *WebService* de sinal, acesse a documentação oficial do BPMN 2.0, disponível em: [Configuração de Processos com Componentes Avançados (BPMN 2.0)](/pages/viewpage.action?pageId=126714181).

**Exportação de Diagramas do Fluig Studio para o servidor Fluig**

Foi aprimorado o processo de exportação de diagramas do Fluig Studio para o servidor Fluig, permitindo assim, que um diagrama previamente exportado possa ser excluído e criado novamente no Fluig utilizando seu código original.

# Arquitetura

** **

**Gerenciamento de Usuários via WebService******

Agora é possível gerenciar os usuários por meio do *WebService*, podendo ativá-los ou desativá-los sem a necessidade de acessar o Cadastro de Usuários do Fluig.

Nota

O método responsável pela ativação dos usuários a partir do *WebService ECMColleagueService* é o *"activateColleague"*.

Para mais informações acesse o guia de [Utilização de Webservices](/pages/viewpage.action?pageId=73084007#UtilizaçãodeWebservices-ECMColleagueService).


<!-- anchors: Atualização1.2.4-ECM, Atualização1.2.4-Analytics, Atualização1.2.4-Social, Atualização1.2.4-FluigStudio, Atualização1.2.4-Arquitetura -->
