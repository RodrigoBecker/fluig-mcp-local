---
title: "Atualização 1.3.8"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=162171074"
scraped_at: "2026-03-09T03:19:09.801Z"
depth: 2
anchors: 6
child_links: 37
---

# Atualização 1.3.8

Confira abaixo as novidades na atualização 1.3.8 do Fluig:

# BPM

**Execute aplicativos em processos**

Agora é possível executar um aplicativo por meio de um *link* direto inserido nas instruções de atividades de processos.

![](/download/attachments/162171074/SOCIALECMSUST-2663.png?version=2&modificationDate=1412626633000&api=v2)

**Confiança nas instruções de processos**

Agora, ao adicionar um *link* de um documento que não existe na atividade de um processo, o Fluig informa na instrução da atividade que o documento é inválido.

![](/download/attachments/162171074/Capturar.PNG?version=1&modificationDate=1412627861000&api=v2)

**SOCIALECMSUST-2668**

**Múltiplos pai-filho em seu formulário**

Agora cada seção de múltiplos registros de formulário possui um contador próprio, facilitando a criação de novas regras ou customização dos formulários.

![](/download/attachments/162171074/SOCIALECMSUST-2668.png?version=1&modificationDate=1412685787000&api=v2)

**Mais confiabilidade em tarefas paralelas**

Sempre que os usuários tentarem encerrar atividades paralelas com dados desatualizados o Fluig interceptará essa movimentação avisando que novos dados estão disponíveis, eliminando os riscos de perda de informações ao movimentar os processos *workflow* para atividades paralelas.

Também foi otimizado o processo que permite assumir atividades paralelas que sejam de mecanismo de *pool*.

![](/download/attachments/162171074/SOCIALECMSUST-2959.png?version=1&modificationDate=1412685406000&api=v2)

**Mais agilidade para anexar documentos em processos**

Quando é utilizada a opção "Incluir anexo *upload*", da aba Anexo de processos, e confirmar a seleção dos arquivos assinalando a opção "Limpar diretório de *upload* ao publicar", esses anexos não são exibidos na janela de seleção de arquivos ao iniciar um novo processo.

**Mais espaço em campos de formulários**

Agora é possível inserir maior quantidade de dados nos campos de formulários que salvam registros em uma única tabela. Mais flexibilidade e menos limitações para o seu dia a dia.

**Movimentação de solicitações em versões anteriores do processo mais íntegra**

Foram otimizadas as validações de formulários criados a partir de um processo para permitir a movimentação de solicitações iniciadas em versões anteriores às alterações efetuadas no processo.

**Saiba de onde foi solicitado o cancelamento do processo**

Foi criada a variável “*WKIsService*” para o evento de cancelamento de processo, que indica se a solicitação do cancelamento foi efetuada por serviço ou pela interface gráfica do Fluig. Se o cancelamento da solicitação foi feito por serviço o valor dela é "*True*", caso contrário, seu valor é “*False*".

Nota

Mais informações sobre a nova variável podem ser obtidas em [Customização de *Workflow*](https://tdn.totvs.com/x/widbB).

**Validação em processos mais confiável**

Foi evoluído o mecanismo de execução de eventos em processos para que não sejam apresentadas mensagens após a utilização da aba anexo.

**Mais espaço para condição de atividades automática**

Foi ampliado o campo de descrição da condição de uma atividade automática de 250 para 350 caracteres. Caso esse limite seja excedido, o Fluig apresenta uma mensagem informativa ao usuário ao publicar o processo.

**Relatório de solicitações mais confiável**

Agora, na consulta de solicitações, a geração do relatório em arquivo contendo todas as solicitações está evitando que em determinadas situação seja gerado um arquivo vazio.

**Mecanismo de atribuição customizado mais abrangente**

Não há mais limite de caracteres para o método de mecanismo de atribuição customizado, tornando sua criação mais flexível e abrangente.

**Movimentação de tarefas aperfeiçoada**

A movimentação de tarefas foi aperfeiçoada, evitando que o processamento apresentado em tela permaneça após a movimentação ser concluída.

# ECM

**Inclusão de grupos em assuntos mais prática**

Agora, no cadastro de assuntos, ao adicionar grupos é possível visualizar os usuários que pertencem a eles antes de confirmar a inclusão.

![](/download/attachments/162171074/SOCIALECMSUST-2913.png?version=1&modificationDate=1412335153000&api=v2)

**Mensagem mais clara e detalhada**

A mensagem apresentada ao desabilitar o parâmetro “Habilita Meus Documentos”, quando existe algum documento que era da pasta Meus Documentos na Lixeira, foi detalhada para facilitar o entendimento, esclarecendo os motivos pelos quais não é possível efetivar a ação.

![](/download/attachments/162171074/SOCIALECMSUST-2739.png?version=1&modificationDate=1412335595000&api=v2)

**Mais destaque para vídeos publicados**

Agora os vídeos compartilhados em uma comunidade são destacados com uma prévia que permite visualizar rapidamente o vídeo.

# Social

**Apresentação de publicações mais atual**

Agora, quando o usuário começa a participar de uma comunidade, na *widget* Últimas Publicações, as publicações são apresentadas ordenadas da mais recente para a mais antiga.

****

**Remoção de usuários utilizando a API Fluig mais segura**

Foi ajustada a API de excluir um grupo de usuários de uma comunidade utilizando o método “*removeGroups*” para evitar que usuário sem permissão possa tomar essa ação.

Importante!

Se o usuário autenticado não for o administrador do *tenant* ou o administrador da comunidade, não é possível efetivar a remoção.

Se o administrador da comunidade pertencer a algum dos grupos solicitados para remoção, também não é possível efetivar a ação, pois o administrador da comunidade não pode ser removido.

Nota

Mais informações sobre a API Fluig, [clique aqui](/pages/viewpage.action?pageId=89621623).

**Publicações mais flexíveis**

Foi aprimorado a forma do Fluig descobrir *links* nas publicações, inclusive quando existir quebra de linha.

![](/download/attachments/162171074/SOCIALECMSUST-2919.png?version=1&modificationDate=1412338528000&api=v2)

**Informações sociais disponíveis em Comunidades**

O *widget* Informações Sociais deixou de ser padrão e não está mais disponível para ser utilizado em customização de páginas. As informações sociais podem ser visualizadas acessando a opção Comunidades no menu principal do Fluig.

Nota

Os *widgets* padrão e disponíveis para utilização em customizações de páginas podem ser consultados em *Widgets*.

![](/download/attachments/162171074/SOCIALECMSUST-2944.png?version=1&modificationDate=1412336692000&api=v2)

# Arquitetura

**Utilize o Fluig em qualquer lugar**

Agora é possível utilizar mais de uma sessão do mesmo usuário em diferentes navegadores ou aplicativos. Fique tranquilo ao finalizar uma sessão, pois as outras continuam ativas, permitindo que o Fluig seja utilizado normalmente.

**Serviço do Fluig otimizado**

Agora é possível parar e reiniciar o serviço do Fluig sem a necessidade de parar processos de outros aplicativos que ficaram presos, o Fluig garante de interromper todos os serviços necessários antes de iniciar.

# WCM

**E-mails mais compatíveis**

A partir de agora o Fluig envia *e-mails* utilizando a codificação UTF-8 por padrão, tornando-os mais compatíveis nos clientes de *e-mail*.

****

**Ordenação de usuário, grupos e papéis aperfeiçoada**

As consultas dos cadastros de usuário, grupos e papéis agora consideram componentes que possibilitam a ordenação juntamente com a consulta de registros diretamente na base de dados, tornando a operação mais eficiente.

![](/download/attachments/162171074/SOCIALECMSUST-2633.png?version=2&modificationDate=1412680071000&api=v2)

****

****

**Mais clareza nos termos apresentados**

Foram efetuadas diversas evoluções nos termos utilizados no produto, das quais destacam-se:

- flexibilizada a tela de permissões e a exibição dos componentes na central de componentes, permitindo que os nomes e descrições contenham acentuação ou caracteres especiais;
- melhorada e detalhada a descrição das notificações de *workflow*.

# Fluig Studio

**Exportação de processo com sub processo mais eficiente**

A exportação de processos que possuam sub processo para o servidor está mais eficiente, tornando o procedimento rápido e prático.

****

**Mais segurança na criação de processos**

O Fluig impede a criação de processos com nomes ou caracteres exclusivos de pastas do Microsoft Windows, aumentando a compatibilidade entre sistemas operacionais e aprimorando a importação e exportação de processos nos diversos ambientes suportados pelo Fluig.

****

****


<!-- anchors: Atualização1.3.8-BPM, Atualização1.3.8-ECM, Atualização1.3.8-Social, Atualização1.3.8-Arquitetura, Atualização1.3.8-WCM, Atualização1.3.8-FluigStudio -->
