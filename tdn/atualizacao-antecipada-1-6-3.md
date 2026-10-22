---
title: "Atualização Antecipada 1.6.3"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=322146980"
scraped_at: "2026-03-09T04:19:12.640Z"
depth: 3
anchors: 19
child_links: 51
---

# Atualização Antecipada 1.6.3

Este documento contém um breve descritivo acerca das implementações e correções efetuadas.

- **Implementações**: são apresentadas todas as implementações e evoluções da plataforma contidas na atualização **1.6.3**.
- **Correções:** são apresentados todos os ajustes contidos na atualização **1.6.3**. Tais ajustes compreendem aprimoramento de performance e melhorias em processos já existentes.

Informações detalhadas podem ser obtidas no **Help Online **e aqui mesmo no **http://dev.fluig.com/**.

**Os chamados solucionados em atualizações antecipadas são acumulativos, ou seja, todas as alterações realizadas nas liberações anteriores estarão disponíveis na última atualização.**

O que é? Como atualizar?

Para entender o processo de liberação de uma atualização antecipada e o procedimento para atualizar, acesse [Atualização fluig - Atualização antecipada (EP).](#AtualizaçãoAntecipada1.6.3-Atualiza%C3%A7%C3%A3oantecipada(EP))

## Atualização antecipada #1

**Imagens compartilhadas não eram exibidas na timeline**

**Atualização Oficial: **fluig 1.6.4****

Realizado tratamento nas configurações nos locais, para que não ocorra inconsistência nas imagens que são compartilhadas na *timeline*.

**Erro ao chamar método da API pública**

**Atualização Oficial: **fluig 1.6.4

Corrigida inconsistência na chamada do método findActiveUsersUsingFilter da API Pública quando utilizado um usuário com caracteres numéricos.

**Central de Componentes**

**Atualização Oficial: **fluig 1.6.4

Melhorada as validações de *deploy* da Central de Componentes do fluig.

**Internacionalização de arquivos JavaScript**

**Atualização Oficial: **fluig 1.6.4

Corrigida a internacionalização de arquivos JavaScript em artefatos customizados do fluig.

**Nova execução de avaliações**

**Atualização Oficial: **fluig 1.6.4

Liberada a nova execução de avaliações com um layout totalmente remodelado. Responder avaliações ficou muito mais fácil, prático e agradável.

**Nota:** Informações e documentações mais detalhadas serão divulgadas juntamente com a liberação da atualização oficial.

**Duplicação de subprocessos**

**Atualização Oficial: **fluig 1.6.4

Ao movimentar um subprocesso, o mesmo era criado duas vezes. Bloqueada a duplicação de subprocessos.

**Problema Case Sensitive Oracle**

**Atualização oficial:** fluig 1.6.4

Com banco de dados Oracle, o mapeamento de campos de formulário para o aplicativo Approval não estava funcionando corretamente, apresentando o valor "null" em vez do valor do campo do formulário.

**Monitoramento de processos sob minha gerencia**

**Atualização oficial:** fluig 1.6.4

Ao acessar a nova tela de Monitoramento de Processos Sob Minha Gerência em um ambiente Oracle, estava gerando erro na *query*, impedindo que fossem visualizados os dados dos gráficos.

**Tarefa atrasada**

**Atualização oficial:** fluig 1.6.4

Tarefas AdHoc apresentavam o cálculo de segundos incorreto, fazendo com que na central de tarefas indicasse como tarefa atrasada sendo que ainda estava no prazo. Alterada a lógica para calcular os segundos do prazo da atividade, fazendo com que o cálculo das tarefas AdHoc fiquem corretas.

**Serviços**

**Atualização oficial:** fluig 1.6.4

No Painel de Controle, a página de serviços que era exibida na aba WCM, agora é exibida na aba Gerais.

**Problema histórico Approval**

**Atualização oficial:** fluig 1.6.4

Solucionada a inconsistência da API que busca o histórico da solicitação para o Approval que não funcionava corretamente no Oracle 11. Corrigida para funcionar no Oracle 11 e demais bancos e versões.

****

**Problema ao executar updates workflow**

**Atualização oficial:** fluig 1.6.4

Encontrados alguns erros que impediam determinados updates da versão 1.6.1 de serem executados, onde um deles era ter um número de hora na atividade maior que 25. Em outro caso, um ambiente em SQL Server, onde alguns campos necessitavam estar como "datetime2" e estavam como "datetime". Foram criados novos updates na 1.6.1 para reparar estas inconsistências e rodas os updates corretamente.

**Troca para o tema Snowflake**

**Atualização oficial:** fluig 1.6.4

Em ambientes cuja troca do tema clássico para o Snowflake ultrapassava o tempo limite de transação, a mudança era interrompida e todas as páginas eram revertidas para o tema padrão. Este comportamento foi alterado para permitir a alteração gradual das páginas para o novo tema.

****

**Problemas de conexão no fluig Studio**

**Atualização oficial:** fluig 1.6.4

Correção efetuada na validação de login realizada através do fluig Studio na plataforma fluig (1.6.3) integrado com o fluig Identity.

## Atualização antecipada #2

**Padronização de APIs WCM**

**Atualização oficial:** fluig 1.6.4

Os seguintes *endpoints* foram readicionados à API da plataforma e ajustados para o novo padrão do serviço: /wcm/api/v1/pages/, /wcm/api/v1/layouts/, /wcm/api/v1/layouts/pageCode/pages/ e /wcm/api/v1/pages/pageCode/reset.

**Acesso a páginas não publicadas pelo menu lateral do Snowflake**

**Atualização oficial:** fluig 1.6.4

Corrigida inconsistência ao acessar uma subpágina ainda não publicada através do menu lateral do tema Snowflake. Nesta situação, a plataforma apresentava a mensagem "Não foi possível carregar o menu".

**Reposicionamento da página Itens da Store**

**Atualização oficial:** fluig 1.6.4

A página [Itens da Store](https://tdn.totvs.com/display/fluig/Itens+da+fluig+Store) foi movida para a aba Gerais do Painel de Controle para facilitar sua localização pelo administrador da empresa.

**Assinatura Digital**

**Atualização oficial:** fluig 1.6.4

Atualizado componente da Certisign de Assinatura Digital que permite os [navegadores homologados](/pages/viewpage.action?pageId=272410773) assinar digitalmente documentos e processos na plataforma fluig.

**Visualização de datasets**

**Atualização oficial:** fluig 1.6.4

Corrigida a visualização (via plugin fluig Studio) de datasets gerados a partir de formulários que contém um campo do tipo Zoom com múltiplos valores.

## Atualização antecipada #3

**Publicações denunciadas não apareciam na central de denúncias **

**Atualização oficial:** fluig 1.6.4

Corrigida a exibição das publicações denunciadas na página de central de denúncias no Painel de Controle. Agora ao denunciar um post ele será enviado corretamente para análise pelos administradores.

**Ajuste na busca de**** usuários para adicionar em uma comunidade**

**Atualização oficial:** fluig 1.6.4

Realizada correção na busca para adicionar usuários em uma comunidade. Antes ao digitar uma letra ou duas a busca retornava uma mensagem informando que não há nenhum usuário para exibição e a partir do terceiro caractere realizava a pesquisa. Agora a busca começa a realizar a pesquisa a partir do terceiro caractere digitado.

**Erro ao utilizar um conteúdo do tipo SCORM em um treinamento**

**Atualização oficial:** fluig 1.6.4

Corrigida inconsistência ocorrida ao utilizar um conteúdo do tipo SCORM em um treinamento assinalando a opção "Usar a pontuação para aprovação do treinamento como pontuação para aprovação no SCORM".

**Label na busca de responsáveis para uma conta**

**Atualização oficial:** fluig 1.6.4

Alterado o *label* na busca de responsáveis para uma conta, pois não é permitido escolher um grupo, apenas usuários.

**Conversão de solicitação inativando tarefas**

**Atualização oficial:** fluig 1.6.4

Corrigido o problema de quando ocorre um erro nos eventos customizados do processo na conversão de solicitação, estava inativando as tarefas.

**Erro RNC Kit Qualidade**

**Atualização oficial:** fluig 1.6.4

Ao utilizar o método wdkAddChild em um formulário que não utilizava o Style-Guide, era gerada inconsistência no retorno do método. Realizado tratamento para verificar se o Style-guide está importando corretamente no ambiente.

**Movimentação com gestor em atividade timer**

**Atualização oficial:** fluig 1.6.4

Movimentação com gestor em atividade timer Corrigida a situação onde uma solicitação estava parada em uma atividade timer, não estava sendo possível movimentar manualmente com o gestor quando a próxima atividade o mecanismo é por campo de formulário.

**Permissão de Iniciar Solicitações**

**Atualização oficial:** fluig 1.6.4

Correção realizada no envio do parâmetro que valida o permissionamento do recurso PAGE: Iniciar Solicitações.

**Indexação após alteração em segurança de pasta**

**Atualização oficial:** fluig 1.6.4

Corrigida inconsistência ao modificar a segurança de uma pasta, para que a indexação inicie logo após a alteração de segurança feita na pasta.

**Exclusão de registro de formulário**

**Atualização oficial:** fluig 1.6.4

Corrigida inconsistência ao excluir um registro filho do formulário, para que o registro também seja eliminado na base de dados e não renderize uma linha em branco.

## Atualização antecipada #4

**Termo específico da Busca**

**Atualização oficial:** fluig 1.6.4

Corrigido requisitos de termo específico no recurso de Busca do fluig.

**Script "../vcXMLRPC.js" em formulário**

**Atualização oficial:** fluig 1.6.4

Alteração realizada para que ao abrir um registro de formulário com a respectiva versão do formulário contendo o script *../vcXMLRPC.js.* O trecho de *HTML "../vcXMLRPC.js"* seja alterado para  *"/webdesk/vcXMLRPC.js"*. Assim o erro de JS não ocorre mais. 

**Compartilhamento de artigos que requerem aprovação**

**Atualização oficial:** fluig 1.6.4

Ao criar um artigo em uma pasta que requer aprovação, o mesmo ainda poderia ser compartilhado na timeline de uma comunidade. Ajustada opção de compartilhamento para que só seja possível quando o artigo for aprovado.

**Ajustado update na Atualização 1.6.3 EP3**

**Atualização oficial:** fluig 1.6.4

Correção na Atualização 1.6.3 EP3 para ambientes que utilizam o banco de dados Oracle.

**Monitoramento de processos**

**Atualização oficial:** fluig 1.6.4

Corrigidas as inconsistências com banco de dados SQL Server, que ao consultar a página de "Monitoramento de Tarefas Sob Minha Gerência", não estavam sendo apresentados os dados do filtro "Tarefas próximas do vencimento”.

**Condição da atividade automática disparando exceção**

**Atualização oficial:** fluig 1.6.4

Quando uma atividade automática disparar uma exceção em uma de suas condições, além da mensagem "Ocorreu um erro na execução das condições da atividade", será apresentada a mensagem que foi disparada na exceção.

## Atualização antecipada #5

**Acesso externo com Autenticação Integrada**

**Atualização oficial:** fluig 1.6.4

Tratamento realizado nas configurações de autenticação integrada da plataforma fazendo com que, ao identificar integração com Active Directory, redirecione para a tela de login quando ocorrer acesso de um usuário não cadastrado no fluig.

**Idioma da tela de login com Autenticação Integrada**

**Atualização oficial:** fluig 1.6.4

Corrigido a seleção de idioma na tela de login da plataforma, quando utilizado Autenticação Integrada.

**API POST /ecm/dataset/search**

**Atualização oficial:** fluig 1.6.4

Ajustado a comparação do parâmetro 'likeValue' enviado para a consulta de dataset.

**Alteração de data**

**Atualização oficial: **fluig 1.6.4

Realizada correção da inconsistência no fluxo automático, que quando enviava para uma atividade condicional, eram criados dois Jobs. 

**Atividade condicional gerando deadlock**

**Atualização oficial: **fluig 1.6.4

Quando duas ou mais atividades condicionais eram geradas ao mesmo tempo, era apresentado erro no timer(deadlock) das atividades, o que não permitia executá-las. Essa inconsistência foi corrigida.

**Problema com subprocessos com movimentação da inicial encadeados**

**Atualização oficial: **fluig 1.6.4

Solucionada a inconsistência com as atividades com subprocessos encadeadas e que movimentam para a próxima atividade automaticamente.

**Alterar limiar de verificação e estratégia de recuperação de agendamentos não executados no horário a fim de evitar falha no processamento de tarefas agendadas.**

**Atualização oficial: **fluig 1.6.4

O limiar de verificação de disparo perdido das tarefas em execução foi aumentado para cinco minutos (anteriormente um minuto) e a estratégia de recuperação de disparo perdido foi alterada com o reagendamento (o que antes era de execução imediata). Evitando assim que os jobs acumulados causem um loop no sistema e acabem dificultando a execução dos jobs agendados. Porém, os jobs agendados para um determinado horário, onde o servidor estava fora do ar, serão reagendados.

**Tópico Raiz**

**Atualização oficial: **fluig 1.6.4

Corrigida a rotina de criação do tópico raiz do catálogo de tópicos e questões para verificar a sua existência e, caso ele não exista, será criado.

**Widget Evolução**

**Atualização oficial: **fluig 1.6.4

Corrigido o *widget* Evolução para considerar apenas os pré-testes nos quais o aluno foi aprovado no cálculo da sua evolução.

**Requisição de matrícula no histórico de trilhas e treinamentos**

**Atualização oficial: **fluig 1.6.4

Por meio da opção Permitir requisições de matrícula no histórico de trilhas e treinamentos – presente nas Configurações de trilhas e treinamentos – é possível definir se será ou não permitido que os usuários solicitem uma nova matrícula para um item já finalizado a partir da sua visualização no histórico.

## Atualização antecipada #6

**Idiomas dos Templates de e-mails**

**Atualização oficial:** fluig 1.6.4

Ajustes de idioma realizado nos templates de e-mail da plataforma.

**Correção no reprodutor de vídeos publicados em comunidades**

**Atualização oficial:** fluig 1.6.4

Ao tentar assistir um vídeo publicado na timeline de uma comunidade, o mesmo não era executado se as demais publicações ainda não estivessem carregadas. Alterado comportamento do player de vídeos para que só fique disponível quando os posts também forem carregados. 

## Atualização antecipada #7

**Download de PDF criptografado**

**Atualização oficial: **fluig 1.6.4

Correção realizada na renderização de PDFs criptografados para que seja possível realizar o download.

**Atividade subprocesso não funciona no app mobile**

**Atualização oficial:** fluig 1.6.4

Ao tentar iniciar um subprocesso pelo aplicativo fluig, era gerada inconsistência na movimentação. Realizado tratamento para corrigir a conversão de valores para o modelo correto.

**Execução de avaliações**

**Atualização oficial:** fluig 1.6.4

Ajustada a exibição da página de execução de avaliações para usuários comuns.

****

## Atualização antecipada #8

**Erro ao exportar processo que utiliza segurança de anexos**

**Atualização oficial:** fluig 1.6.4

Corrigida a inconsistência apresentada ao tentar exportar para o servidor, um processo que utiliza a segurança de anexos.

**SetLikeSearch em datasets de metalista**

**Atualização oficial:** fluig 1.6.4

Implementação do *setLikeSearch* para datasets de metalista, tornando a busca por partes possível.

****

**Assinatura Digital**

**Atualização oficial:** fluig 1.6.4

Realizada correção das inconsistências ocorridas com assinatura digital no Internet Explorer - IE11 e nas versões anteriores IE9 e IE10.

**Notificações em tempo real**

**Atualização oficial:** fluig 1.6.4

Em uma empresa com tema snowflake, ao receber uma notificação o usuário não era avisado até que a página fosse recarregada. Ajustado comportamento para que as notificações apareçam em tempo real.

**Dias de validade da matrícula**

**Atualização oficial:** fluig 1.6.4

Ajustada a validação de dias de validade da matrícula em turmas para não ocorrer inconsistências ao criar uma turma com a duração de apenas uma hora.

**Mover estrutura de pastas**

**Atualização oficial:** fluig 1.6.4

 Ajustes realizados para que usuários pertencendo a grupos, consigam mover uma estrutura de pastas contendo todos os níveis dela. 

**Busca globas de documentos feito por usuários administradores**

**Atualização oficial:** fluig 1.6.4

Tratamento realizado nos filtros de segurança da busca aprimorando o retorno de resultados quando realizado por usuários administradores.

**Login personalizado em aplicações com balanceamento de carga**

**Atualização oficial:** fluig 1.6.4

Tratamento realizado na plataforma fazendo com que a tela de login personalizada seja apresentada no acesso de todos os nós quando se tem balanceamento de carga.

**Visualização de avaliações de treinamentos que foram importados**

**Atualização oficial:** fluig 1.6.4

Corrigida a visualização de avaliações – pré ou pós-teste – de treinamentos que foram importados para o catálogo.

## Atualização antecipada #9

**Idioma da tela de Painel de Controle com balanceamento de carga**

**Atualização oficial:** fluig 1.6.4

Corrigido a persistência de idioma nas telas de Painel de Controle quando utilizado mais de um ambiente com balanceamento de carga e alta disponibilidade.

**Erro ao movimentar atividade para subprocesso mobile**

**Atualização oficial:** fluig 1.6.4

Modificada a regra de negócio para sanar a inconsistência ao movimentar para subprocesso com movimentação para primeira atividade pelo mobile com usuário que possui mecanismo de destino único.

## Atualização antecipada #10

**Agendamento de avaliações para apenas algumas horas de duração**

**Atualização oficial:** fluig 1.6.4

Alterado o recurso Agendamento de avaliações para permitir criar um agendamento com apenas algumas horas de duração.

**Assinatura digital - movimentação de atividade**

**Atualização oficial:** fluig 1.6.4

Corrigidas inconsistências ao movimentar uma tarefa com mais de duas opções de certificado digital. Realizado ajuste para validar a tarefa correta no momento da movimentação com certificados.

**Lentidão na navegação de documentos**

**Atualização oficial:** fluig 1.6.4

Melhorada performance na navegação de documentos para ambientes que utilizam o banco de dados Oracle.

**Pré-requisitos de tópicos da turma**

**Atualização oficial:** fluig 1.6.4

Ajustada a associação de pré-requisitos a tópicos de turmas de disciplinas.

## Atualização antecipada #11

**Falha no update que cria a coluna HISTORY_ENROLL na tabela ELE_LOCAL_CONFIGURATION**

**Atualização oficial:** fluig 1.6.4

Efetuados ajustes no *update* de base de dados que cria a coluna HISTORY_ENROLL na tabela ELE_LOCAL_CONFIGURATION para ser executado ao efetuar a atualização da plataforma.

## Atualização antecipada #12

**Exibição dos blocos no cadastro da avaliação**

**Atualização oficial:** fluig 1.6.4

Ajustado o cadastro de avaliações para exibir todos os blocos que foram criados ou importados, permitindo que todos eles sejam configurados dentro da avaliação.

**Data inicial e final de turmas**

**Atualização oficial:** fluig 1.6.4

Corrigida a configuração da data inicial e final de turmas para considerar o horário no formato de 24 horas, permitindo assim, que uma turma tenha a duração em horas e não apenas dias.

## Atualização antecipada #13

**Visualização de arquivos mp4 na navegação de documentos**

**Atualização oficial:** fluig 1.6.4

Corrigido problema ao reproduzir arquivos mp4 na navegação de documentos.

**Herança de segurança nas propriedades de registro de formulário**

**Atualização oficial:** fluig 1.6.5

Ajustes para permitir que registro de formulário herde também o grupo de segurança de membros.

**Lentidão em loadhistory**

**Atualização oficial:** fluig 1.6.5

Ajustes realizados para sanar a inconsistência gerada nas solicitações que possuíam imagens nos complementos, ocasionando demora no carregamento do sistema.

****

**Listar Dataset no Eclipse**

**Atualização oficial:** fluig 1.6.5

Correção realizada na forma de buscar os dados de um dataset com muitos registros para que seja possível trazer esses dados no Eclipse.

**Falha de conversão de váriaveis** 

**Atualização oficial:** fluig 1.6.4

Correção da sincronização da abertura das instâncias para que não ocorra inconsistência ao utilizar uma pasta com dois níveis de aprovação.

**Marca d'água em documentos PDF**

**Atualização oficial:** fluig 1.6.4 

Ajuste realizado para tornar o recurso Marca d'água disponível para documentos PDF. 

**Duplicidade nos IDs das solicitações**

**Atualização oficial:** fluig 1.6.5

Realizada correção da inconsistência na movimentação com mecanismo automático, onde as solicitações apareciam duplicadas na central de tarefas.

**Publicação com múltiplas imagens**

**Atualização oficial:** fluig 1.6.5

Ao realizar uma publicação com múltiplas imagens, a largura do slot da timeline não era respeitada. Efetuada correção para que a formatação seja mantida.

**Publicação com palavras muito grandes. **

**Atualização oficial:** fluig 1.6.5

Ao escrever uma publicação com palavras muito grandes a largura do slot da timeline não era respeitada. Efetuado ajuste para que a formatação seja mantida.

**Painel que exibe as múltiplas imagen selecionadas**

**Atualização oficial:** fluig 1.6.5

Na criação de uma postagem com múltiplas imagens, o painel que exibe as imagens selecionadas para a publicação ultrapassava a largura do slot. Realizado ajuste para que o tamanho do slot seja respeitado.

**Serviços REST**

**Atualização oficial:** fluig 1.6.5

Correção realizada nos Serviços REST fazendo com que ao excluí-lo e posteriormente recriá-lo, utilizando o mesmo nome, não ocorra a inconsistência informando que o serviço já existe.

**Ícone de atalho do navegador **

**Atualização oficial:** fluig 1.6.5

Ajustado ícone que aparece na área de trabalho ao adicionar um atalho para o fluig a partir do navegador.

**Ir para notificações **

**Atualização oficial:** fluig 1.6.5

Ao gerar uma notificação de um documento com o nome muito grande a opção de 'ir para notificações' não aparecia. Realizado ajuste para que a mesma fique sempre visível.

**Relatórios LMS **

**Atualização oficial:** fluig 1.6.5

Efetuadas alterações na forma de geração de relatórios e adicionada a coluna Data de conclusão da avaliação no recurso Histórico de avaliações.

**Cancelar matrículas **

**Atualização oficial:** fluig 1.6.5

Criado *update* para acrescentar a opção Cancelar matrículas ao recurso LMSENC: Aprendizado – Matrículas das Permissões do Painel de Controle quando, por alguma inconsistência, essa opção não for criada automaticamente.

**Imagens em questões **

**Atualização oficial:** fluig 1.6.5

Corrigida a exibição de imagens em questões depois que elas foram editadas.

Observação:
É necessário criar uma nova versão da questão para que a correção surta efeito. Para novas questões essa inconsistência não ocorrerá mais.

**Interromper os serviços do fluig **

**Atualização oficial:** fluig 1.6.5

Efetuadas alterações para parar corretamente os *jobs* do LMS e os serviços da plataforma quando solicitada essa interrupção.

**Índice de aprovação na avaliação como 0 **

**Atualização oficial:** fluig 1.6.5

Ajustada a configuração da avaliação para não reprovar um aluno que tirou 0 em uma avaliação que possui o índice de aprovação como 0.

**Notificações de tarefas em atraso duplicadas**

**Atualização oficial:** fluig 1.6.5

Ajustado o envio de notificações e *e-mails* sobre tarefas atrasadas para não emitir as mesmas notificações mais de uma vez.

**Suporte ao aplicativo mobile**

**Atualização oficial:** fluig 1.6.5

Removida a opção ‘Suporte ao aplicativo mobile’ que era exibida ao criar um layout pelo plugin fluig no Eclipse. A opção só se aplica a criação de widgets.

## Atualização antecipada #14

**URL de acesso aos componentes no fluig Style Guide**

**Atualização oficial:** fluig 1.6.5

Efetuado ajuste na documentação do Style Guide, pois a URL para acessar os recurso dos componentes não estava adequada.

**Componente Rich Editor do fluig Style Guide**

**Atualização oficial:** fluig 1.6.5

Realizada correção no componente Rich Editor do fluig Style Guide para que o segundo parâmetro não seja obrigatório em sua instancia. 

**Inconsistência na movimentação de tarefas de processo**

**Atualização oficial:** fluig 1.6.5

Corrigida a movimentação da atividade de processo para a próxima etapa – que é uma atividade automática – depois que um evento de processo ou formulário foi disparado e ocorreu alguma inconsistência.

## Atualização antecipada #15

Clientes que utilizam o fluig Analytics

A atualização antecipada #15 corrige a situação informada no [portal de clientes](https://tdn.totvs.com/pages/viewpage.action?pageId=871502812#:~:text=Equipe%20Fluig%20Plataforma.-,05/06/2018,-Interrup%C3%A7%C3%A3o%20no%20envio), que impede a comunicação entre o fluig e o fluig Analytics.

**IMPORTANTE!****Após aplicar essa atualização**, se você tinha inserido a linha (138.219.88.208 [analytics.fluig.com](https://analytics.fluig.com/)) no *host* conforme solicitamos no [comunicado](https://suporte.totvs.com/portal/p/10098/suporte-fluig-noticias?id=803), **você deverá removê-la**. Esse procedimento deve ser efetuado antes de reiniciar os serviços do fluig.****

**Menu de opções de artigo**

**Atualização oficial:** fluig 1.6.5

Ajustada formatação do menu de opções de artigos publicados em uma comunidade, o qual não respeitava o *layout* de topo da plataforma.

**Erro ao excluir/incluir acesso ao processo para usuário substituto**

**Atualização oficial:** fluig 1.6.5

Corrigida inconsistência ao incluir ou excluir acesso ao processo para um usuário substituto. Onde a partir de 12 processos selecionados, era apresentada mensagem de erro.

****

**Modal do widget de Notícias **

**Atualização oficial:** fluig 1.6.5

Ajustado dimensionamento do modal do *widget* de Notícias para ocupar o tamanho correto na tela ao visualizar um artigo no navegador Internet Explorer.

**Mensagem de erro na movimentação de atividade para automática - "Esta tarefa já foi assumida por outro usuário"**

**Atualização oficial:** fluig 1.6.5

Corrigida a movimentação da atividade de processo para a próxima etapa – que é uma atividade automática – depois que um evento de processo ou formulário foi disparado e ocorreu alguma inconsistência.

**Consulta de através de componente zoom não retorna dados na 1.6.4**

**Atualização oficial:** fluig 1.6.5

Ao utilizar um campo zoom customizado e utilizar o filtro, não é retornado nenhum valor. Realizado ajuste para que os filtros em datasets customizados funcionem corretamente no componente zoom.

**Inclusão de grupos de usuários na comunidade **

**Atualização oficial:** fluig 1.6.5

Realizado ajuste de performance na inclusão de grupos de usuários em uma comunidade o qual impedia a inclusões de grupos acima de 200 usuários.

**Inconsistência no envio de dados do Analytics**

**Atualização oficial: **fluig 1.6.5

Efetuado ajustes para que o envio de dados para o fluig Analytics ocorra normalmente.

## Atualização antecipada #16

**Ausência de tradução em alguns recursos**

**Atualização oficial: **fluig 1.6.5

Foram aplicadas as traduções para os idiomas Inglês e Espanhol que estavam faltando nos recursos Contas, Execução de avaliações e Gerenciamento de matrículas.

**Associação de pré-requisitos à disciplina**

**Atualização oficial: **fluig 1.6.5

Efetuados ajustes no cadastro de disciplinas para que um pré-requisito que foi inserido e depois excluído não continue associado à disciplina indevidamente.

**Ajustes usuário social**

**Atualização oficial: **fluig 1.6.5

Ajustada a edição de usuário para que as informações fiquem consistente e não gere divergências na navegação da plataforma.

## Atualização antecipada #17

**Sincronização de usuários para o LMS**

**Atualização oficial: **fluig 1.6.5

Ajustada a sincronização de usuários para o LMS para emitir uma notificação quando ocorrer alguma inconsistência durante o processo.

**Inconsistência em documentos externos no visualizador interno**

**Atualização oficial:** fluig .1.6.5

Inclusão de uma mensagem de aviso sobre a especificação CORS (*Cross Origin Resource* *Sharing*), que impede a visualização de documentos externos com um endereço de documento externo que utilize o protocolo HTTP, quando o endereço de origem (da plataforma) utiliza o protocolo HTTPS.

## Atualização antecipada #18

**Tooltip removido na listagem de contas**

**Atualização oficial: **fluig 1.6.5

Removido o *tooltip* que exibia o tipo na listagem de contas por ser desnecessário, visto que o tipo da conta já é exibido na coluna Tipo.

**Inconsistência no componente Filter do Style guide**

**Atualização oficial:**fluig 1.6.5

Ajustada renderização do recurso de busca no componente Filter do fluig Style Guide.

## Atualização antecipada #19

**Inconsistência no componente Filter do Style guide**

**Atualização oficial: **fluig 1.6.5

Ajustada renderização do recurso de busca no componente Filter do fluig Style Guide.

**Timezone - Horário de verão**

**Atualização oficial: **fluig 1.6.5

Realizado ajustes nos horários, para que fiquem compatíveis com a nova definição de horário de verão no timezone América/São_Paulo, nos complementos da solicitação.

**Central de tarefas - Filtro favorito**

**Atualização oficial: **fluig 1.6.5

Corrigida inconsistência ocorrida ao selecionar um filtro de processos como favorito na central de tarefas.


<!-- anchors: AtualizaçãoAntecipada1.6.3-Atualizaçãoantecipada#1, AtualizaçãoAntecipada1.6.3-Atualizaçãoantecipada#2, AtualizaçãoAntecipada1.6.3-Atualizaçãoantecipada#3, AtualizaçãoAntecipada1.6.3-Atualizaçãoantecipada#4, AtualizaçãoAntecipada1.6.3-Atualizaçãoantecipada#5, AtualizaçãoAntecipada1.6.3-Atualizaçãoantecipada#6, AtualizaçãoAntecipada1.6.3-Atualizaçãoantecipada#7, AtualizaçãoAntecipada1.6.3-Atualizaçãoantecipada#8, AtualizaçãoAntecipada1.6.3-Atualizaçãoantecipada#9, AtualizaçãoAntecipada1.6.3-Atualizaçãoantecipada#10, AtualizaçãoAntecipada1.6.3-Atualizaçãoantecipada#11, AtualizaçãoAntecipada1.6.3-Atualizaçãoantecipada#12, AtualizaçãoAntecipada1.6.3-Atualizaçãoantecipada#13, AtualizaçãoAntecipada1.6.3-Atualizaçãoantecipada#14, AtualizaçãoAntecipada1.6.3-Atualizaçãoantecipada#15, AtualizaçãoAntecipada1.6.3-Atualizaçãoantecipada#16, AtualizaçãoAntecipada1.6.3-Atualizaçãoantecipada#17, AtualizaçãoAntecipada1.6.3-Atualizaçãoantecipada#18, AtualizaçãoAntecipada1.6.3-Atualizaçãoantecipada#19 -->
