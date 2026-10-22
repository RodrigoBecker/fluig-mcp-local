---
title: "Atualização antecipada  1.5.13"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=271395795"
scraped_at: "2026-03-09T04:22:17.583Z"
depth: 3
anchors: 15
child_links: 50
---

# Atualização antecipada  1.5.13

Este documento contém um breve descritivo acerca das implementações e correções efetuadas.

- **Implementações**: são apresentadas todas as implementações e evoluções da plataforma contidas na atualização **1.5.13**.
- **Correções:** são apresentados todos os ajustes contidos na atualização **1.5.13**. Tais ajustes compreendem aprimoramento de performance e melhorias em processos já existentes.

 Informações detalhadas podem ser obtidas no **Help Online **e aqui mesmo no **http://dev.fluig.com/**.

**Os chamados solucionados em atualizações antecipadas são acumulativos, ou seja, todas as alterações realizadas nas liberações anteriores estarão disponíveis na última atualização.**

****

# Índice

# 

O que é? Como atualizar?

Para entender o processo de liberação de uma atualização antecipada e o procedimento para atualizar, acesse [Atualização fluig - Atualização antecipada (EP).](/pages/viewpage.action?pageId=73078235#Atualizaçãodaplataforma-Atualiza%C3%A7%C3%A3oantecipada(EP))

## Atualização antecipada #1

**Correção no serviço de Stream**

**Atualização Oficial**: fluig 1.6

Correção no serviço de Stream de anexos de formulários ECM para buscar corretamente os anexos da última versão do formulário publicada.

## Atualização antecipada #2

**Movimentação de solicitações com mecanismo customizado**

**Atualização Oficial**: fluig 1.6.0

Não estava sendo possível avançar uma atividade onde o mecanismo da próxima atividade é customizado utilizando a função hAPI.

****

**Erro ao assumir atividades de um papel como substituto.**

**Atualização oficial: **1.6.0

Corrigido problema na modelagem de processo com mecanismo de atribuição para um papel, tentando assumir com usuário substituto.

****

**Movimentação de solicitações com mecanismo customizado**

**Atualização Oficial**: fluig 1.6.0

Não estava sendo possível avançar uma atividade onde o mecanismo da próxima atividade é customizado utilizando a função hAPI.

**Filtro na consulta de solicitações**

**Atualização Oficial**: fluig 1.6.0

Na consulta de solicitações, não estava funcionando o filtro pelo número da solicitação.

**Exportação para servidor com fluig Identity**

**Atualização Oficial**: fluig 1.6.0

No plugin do studio, não estava sendo possível realizar a exportação para o servidor quando tem o identity habilitado.

**Dataset de formulários**

**Atualização Oficial**: fluig 1.6.0

Datasets de formulários não estavam sendo renderizados.

## Atualização antecipada #3

**Autenticação com OAuth ou Identity**

**Atualização Oficial**: fluig 1.6.0

Ajuste na validação de sessões autenticadas via OAuth ou via Identity, evitando inconsistências quando várias chamadas forem realizadas.

**Chamadas REST com OAuth 2 não enviam informações no corpo da requisição**

**Atualização Oficial**: fluig 1.6.0

Tratamento em requisições dos tipos POST e PUT para enviar os dados corretamente.

**Inconsistência da paginação de documentos na Central de Tarefas**

**Atualização Oficial**: fluig 1.6.0

Executada correção na Central de tarefas para que a paginação seja ordenada de forma correta e permita a abertura de documentos.

**Exportação de consulta de solicitações sem dados**

**Atualização Oficial**: fluig 1.6.0

Realizado tratamento para possibilitar a publicação de documentos a partir de processos.

**Propriedade WKUserComment**

**Atualização Oficial**: fluig 1.6.0

Tratamento para retornar na variável WKUserComment todos os complementos que foram adicionados na atividade atual que está sendo salva/movimentada.

## Atualização antecipada #4

**Mecanismo associativo com papéis**

**Atualização oficial: **fluig 1.6.0

Quando utilizado um mecanismo associativo com papéis, o filtro de usuário não estava funcionando.

**Correção de avaliações com questão dissertativa com resposta em branco**

**Atualização oficial: **fluig 1.6.1

Ajuste na correção de questões dissertativas para exibir a próxima questão ao corretor mesmo quando a resposta foi deixada em branco pelo aluno que respondeu a prova.

**Template de e-mail de notificação de matrícula não traduzido para espanhol**

**Atualização oficial: **fluig 1.6.1

Foi aplicada tradução no template de e-mail de notificação que é enviado ao usuário quando ele se matricula em treinamentos, trilhas ou turmas utilizando o idioma espanhol.

**Descrição do widget Editor de Conteúdo**

**Atualização Oficial: **fluig 1.6.1

Ajustada a edição de páginas que contenham widgets do tipo Editor de Conteúdo incluídas, mas que não tenham a descrição preenchida, para que não ocorram mais inconsistências ao editá-las.

**Tamanho do token de sessão no Messaging**

**Atualização Oficial: **fluig 1.6.1

Aumento do espaço reservado em banco de dados para o armazenamento do token de sessão no fluig Messaging para evitar perda de sessão.

## Atualização antecipada #5

**Permissões específicas de documentos estão sendo perdidas ao realizar checkin**

**Atualização Oficial: **fluig 1.6.1

Alterada as permissões para buscar as permissões do documento antigo.

**Documentos relacionados em checkout**

**Atualização Oficial: **fluig 1.6.1

Realizado tratamento para que ao atualizar documentos em *checkout*, que possuem documentos relacionados, a operação seja possível.

****

**Notificação de Fluxo automático**

**Atualização Oficial: **fluig 1.6.1

As notificações por e-mail foram ajustadas para que, quando uma atividade conjunta for movida automaticamente por atraso, não sejam enviadas notificações indevidas ou duplicadas.

Quando uma atividade tem prazo de conclusão e um fluxo automático, e não está marcada a opção "Notifica responsável", estava enviando e-mail para o usuário que era responsável pela tarefa.

**Filtro personalizado**

**Atualização Oficial: **fluig 1.6.1

Corrigida inconsistência que era apresentada ao criar um novo filtro com base em um já cadastrado e que possuía campos de formulário.

****

**Complementos da solicitação**

**Atualização Oficial: **fluig 1.6.1

A data inicial de um processo agora é considerada a partir do momento que ele for salvo e quando ele for movimentado e não salvo a rotina permanece a mesma.

**Transferência de anexos da solicitação**

**Atualização Oficial:** fluig 1.6.1

Ao eliminar um anexo de um subprocesso que foi transferido do processo pai, estava removendo o documento (anexo) fisicamente, não permitindo ser mais visualizado no processo pai.

**Acesso as páginas de administração do fluig com LDAP**

**Atualização Oficial:** fluig 1.6.1

Adicionado o tratamento permitindo o acesso as páginas de administração da plataforma utilizando autenticação LDAP sem login combinado.

**Templates de E-mail**

**Atualização Oficial:** fluig 1.6.1

Adicionando o tratamento na exclusão de templates de idiomas na plataforma. Desta maneira o template com o idioma não utilizado poderá ser excluído sem afetar os demais.

**Sessão do usuário é invalidada por requisição OAuth**

**Atualização Oficial:** fluig 1.6.1

Correção no controle de sessão quando houver cabeçalhos OAuth indevidos.

**Liberação de processos**

**Atualização Oficial:** fluig 1.6.1

Ajustada a liberação de processos novos e antigos, para que a validação de tarefas abertas (Agendador de Tarefas) seja efetuada de forma mais rápida não retornando timeout para tela do usuário.

**Assumir tarefa via webservice**

**Atualização Oficial:** fluig 1.6.1

Pelo webservice, permitir assumir tarefa com usuário que não seja administrador em nome de outro usuário.

**Erro ao gerar certificado no LMS**

**Atualização Oficial:** fluig 1.6.1

Incluída uma validação no recurso Certificados para avisar ao usuário quando a frase de um *token* incluído está nula, evitando inconsistências no momento da emissão do certificado pelo aluno.

**Tempo de carregamento do Zoom de Formulários**

**Atualização Oficial:** fluig 1.6.1

Adicionando o tratamento permitindo informar o limite máximo de retorno de registros em um Zoom de formulários na consulta de Datasets.

**Erro em análise de estatísticas de avaliação**

**Atualização Oficial:** fluig 1.6.2

Feitas alterações na exibição de estatísticas da avaliação para apresentar todas as questões existentes.

**Exibição das imagens na timeline**

**Atualização Oficial:** fluig 1.6.2

Correção na exibição das imagens na *timeline* em ambiente cujos ícones padrão tenham sido alterados pelo administrador.

## Atualização antecipada #6

**Conversão de solicitação**

**Atualização Oficial:** fluig 1.6.1

Após exportar uma nova versão do processo, não era possível converter as solicitações antigas. Essa inconsistência foi corrigida.

**Widget SlideShow**

**Atualização Oficial:** fluig 1.6.2

Corrigida inconsistência na widget SlideShow com instagram que restringia sua execução para usuários com perfil User.

****

**Publicação de anexo pelo método publishWorkflowAttachment da hAPI**

**Atualização Oficial:** fluig 1.6.1

Corrigida inconsistência que impedia o usuário de publicar um anexo pelo método publishWorkflowAttachment da hAPI, informando que não possuía permissão para publicação, mesmo contendo permissão total nas pastas.

**Autenticação Integrada**

**Atualização Oficial:** fluig 1.6.0

Solucionada situação em ambientes que utilizam autenticação integrada, onde apenas uma página em branco era exibida para usuários cujo cadastro no Active Directory não possui o campo sobrenome preenchido.

**Chave única para requisição de matrícula**

**Atualização Oficial:** fluig 1.6.3

Corrigida situação que impedia o usuário de realizar ou cancelar a matrícula em um treinamento/trilha. Foram atribuídas chaves únicas no banco de dados para evitar conflitos neste tipo de requisição.

## Atualização antecipada #7

**Histórico na aba de complementos desaparece**

**Atualização Oficial:** fluig 1.6.3****

Ao consultar uma solicitação com diversos históricos de transferência, movimentações, observações ou anexos e, ao tentar converter estes históricos, era gerado erro devido a data e hora serem nulas. Realizado tratamento antes de converter data/hora para verificar se não são nulas.

****

**Upload de arquivos em ambientes HTTPS**

**Atualização Oficial:** fluig 1.6.3

Correção no *upload* de arquivos para o recurso Conteúdos em ambientes que utilizam o protocolo HTTPS.

****

## Atualização antecipada #8

**Conversão de base do ECM para o fluig**

Realizada correção na importação do ECM para converter corretamente quando a matrícula contém somente 1 caractere. 

****

## Atualização antecipada #9

**Conversão de base do ECM para o fluig**

Realizada melhoria nas validações de conversão do ECM para o fluig. 

## Atualização antecipada #10

**Conversão base LMS da 1.5 para 1.6**

Realizada a conversão do fluig versão 1.5 para 1.6 no LMS, a fim de sanar inconsistências da migração do ECM para o fluig que apresentavam erros nos *updates* do banco de dados.

## Atualização antecipada #11

**Conversão de base do ECM para TOTVS Fluig Plataforma**

Realizada melhoria nas validações de quantidade de usuários ativos e inativos em relação ao número de licenças, na conversão do ECM para o TOTVS Fluig Plataforma. 

##  Atualização antecipada #12 

Correção Mandatory

Foi identificada uma vulnerabilidade crítica que requer uma atenção especial em seu ambiente.
A situação corrigida encontra-se disponível em **Mandatory 1.5.13-EP12**.

Saiba quais são os impactos:

- Esta situação permitia a leitura de arquivos que estejam no sistema operacional. Foram realizados ajustes para sanar falha de segurança relacionada.

Para mais detalhes sobre a situação confira o **comunicado oficial** no portal de clientes.

## Atualização antecipada #13

**Replicação de documentos**

Correção de inconsistência que impedia o uso de replicação de documentos em diretórios remotos. 

**Conversão do ECM para TOTVS Fluig Plataforma**

Correção de inconsistências na conversão da base do ECM quando algum documento continha comentários com caracteres especiais como ' e $.

**Conversão do ECM para TOTVS Fluig Plataforma**

Correção de inconsistências na conversão da base do ECM quando algum usuário continha o caractere " " (espaço) antes do nome.

**Conversão do ECM para TOTVS Fluig Plataforma**

Corrigida inconsistência que permitia que usuários bloqueados no ECM, após migrar para a plataforma TOTVS Fluig, continuassem disponíveis em listas de compartilhamento como documentos e posts sociais.


<!-- anchors: Atualizaçãoantecipada1.5.13-Índice, Atualizaçãoantecipada1.5.13-2, Atualizaçãoantecipada1.5.13-Atualizaçãoantecipada#1, Atualizaçãoantecipada1.5.13-Atualizaçãoantecipada#2, Atualizaçãoantecipada1.5.13-Atualizaçãoantecipada#3, Atualizaçãoantecipada1.5.13-Atualizaçãoantecipada#4, Atualizaçãoantecipada1.5.13-Atualizaçãoantecipada#5, Atualizaçãoantecipada1.5.13-Atualizaçãoantecipada#6, Atualizaçãoantecipada1.5.13-Atualizaçãoantecipada#7, Atualizaçãoantecipada1.5.13-Atualizaçãoantecipada#8, Atualizaçãoantecipada1.5.13-Atualizaçãoantecipada#9, Atualizaçãoantecipada1.5.13-Atualizaçãoantecipada#10, Atualizaçãoantecipada1.5.13-Atualizaçãoantecipada#11, Atualizaçãoantecipada1.5.13-Atualizaçãoantecipada#12, Atualizaçãoantecipada1.5.13-Atualizaçãoantecipada#13 -->
