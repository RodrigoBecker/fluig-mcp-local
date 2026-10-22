---
title: "Plataforma ❙ Recursos de aprendizado e avaliações"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=274850166#Recursosdeaprendizadoeavalia%C3%A7%C3%B5es-Matr%C3%ADculas"
scraped_at: "2026-03-09T04:18:51.996Z"
depth: 3
anchors: 32
child_links: 130
---

# Plataforma ❙ Recursos de aprendizado e avaliações

# Índice

## Falando de recursos de aprendizado e avaliações...

Por meio das opções de permissão de aprendizado e avaliações existentes no Painel de Controle é possível liberar ou restringir recursos para usuários específicos, papéis ou grupos de usuários. É possível, por exemplo, ocultar recursos que por padrão são visíveis ou liberar recursos de administração para um usuário comum.

Para que um usuário tenha acesso a um recurso, é necessário que ele possua permissão para visualizar a página e o *widget* desse recurso.

**Exemplo**:
Utilizando o recurso Avisos como exemplo, seriam necessárias as permissões:

- **para visualizar a página Avisos**: ao liberar essa permissão o usuário em questão poderá visualizar o recurso Avisos no menu Aprendizado e visualizar o conteúdo (listagem de avisos existentes) desde que tenha também permissão no *widget* Avisos. Nesse exemplo, se o usuário possuir apenas permissão na página Avisos mas não possuir no *widget* Avisos, ele visualizará esse recurso no menu Aprendizado, porém, sem conteúdo, pois a página será exibida em branco.

- **para visualizar o widget Avisos**: ao liberar essa permissão o usuário em questão poderá visualizar esse *widget* em qualquer página na qual ele existir, desde que também tenha permissão para visualizar a página. Nesse exemplo, se o usuário possuir apenas permissão no *widget* Avisos mas não possuir na página Avisos, esse recurso nem aparecerá no menu Aprendizado.

- **para executar ações específicas**: ao liberar permissão em ações específicas, o usuário em questão poderá executá-las. Nesse caso, ao ativar, por exemplo, a permissão Salvar da gerência de avisos, o usuário poderá incluir e editar avisos; ao ativar a permissão Remover ele poderá remover os avisos existentes. As ações específicas podem ser efetuadas desde que o usuário também possua permissão para visualizar o *widget* e a página de avisos, pois caso contrário, não visualizará nem o recurso em si e nem as ações específicas.

**Opções de permissão em páginas e widgets**

As opções de permissão existentes para as páginas são as mesmas para cada uma delas. O mesmo ocorre com os *widgets*.

Essas permissões estão detalhadas em [Opções de permissão em páginas](/pages/viewpage.action?pageId=285640245) e [Opções de permissão em *widgets*](/pages/viewpage.action?pageId=285640267).

## Recursos de aprendizado

As páginas, os *widgets* e as permissões específicas de aprendizado são listadas a seguir.

### Menu aprendizado

| Descrição | Tipo | Nome do recurso | Opções de permissão |  |
| --- | --- | --- | --- | --- |
| Descrição | Tipo | Nome do recurso | Opções de permissão |  |
|  | Página do item Aprendizado do menu principal, onde são agrupados os recursos de aprendizado. | PAGE | Aprendizado - menu aprendizado (página) - pagelearning | Detalhadas em Opções de permissão em páginas. |

#### Meu aprendizado

| Descrição | Tipo | Nome do recurso | Opções de permissão |  |
| --- | --- | --- | --- | --- |
| Descrição | Tipo | Nome do recurso | Opções de permissão |  |
|  | Página e widget do recurso Meu aprendizado – pertencente ao item Aprendizado do menu principal – que exibem os itens nos quais o aluno está matriculado, seu histórico em turmas, trilhas e treinamentos e suas atividades extraclasse. | PAGE | Meu aprendizado - pagemyplan | Detalhadas em Opções de permissão em páginas. |
| WIDGET | Aprendizado | Detalhadas em Opções de permissão em widgets. |  |  |

#### Tarefas de aprendizado

| Descrição | Tipo | Nome do recurso | Opções de permissão |  |
| --- | --- | --- | --- | --- |
| Descrição | Tipo | Nome do recurso | Opções de permissão |  |
|  | Página e widget do recurso Tarefas de aprendizado que pertence ao item Aprendizado do menu principal. | PAGE | Tarefas de aprendizado - pagelearntasks | Detalhadas em Opções de permissão em páginas. |
| WIDGET | Tarefas de aprendizado | Detalhadas em Opções de permissão em widgets. |  |  |

#### Disciplinas e turmas

| Descrição | Tipo | Nome do recurso | Opções de permissão |  |
| --- | --- | --- | --- | --- |
| Descrição | Tipo | Nome do recurso | Opções de permissão |  |
|   | Página e widget do recurso Disciplinas e turmas – pertencente ao item Aprendizado do menu principal – que exibem o catálogo de disciplinas e turmas. | PAGE | Disciplinas e turmas - pagecatalogdiscipline | Detalhadas em Opções de permissão em páginas. |
| WIDGET | Disciplinas e turmas | Detalhadas em Opções de permissão em widgets. |  |  |
| Permissões específicas para as ações de gerenciamento do catálogo de disciplinas e turmas. | LMSDIS | Aprendizado - Catálogo de disciplinas e turmas | Ler: quando ativada, permite visualizar o catálogo de disciplinas e turmas. Os itens do catálogo serão exibidos conforme as permissões definidas em cada um deles, inclusive considerando as permissões definidas na pasta raiz, ou seja, se não for liberada pelo menos permissão de leitura na pasta raiz, o catálogo será exibido vazio, mesmo que a opção Ler esteja ativa.Ignorar restrições: quando ativada, permite visualizar o catálogo de disciplinas e turmas como se fosse um usuário administrador, ou seja, ignorando todas as restrições e ausência de permissões nos itens. |  |
|  | Página e widget que exibem os detalhes de uma disciplina. | PAGE | Visão da disciplina - pagedisciplineview | Detalhadas em Opções de permissão em páginas. |
| WIDGET | Visão da disciplina | Detalhadas em Opções de permissão em widgets. |  |  |
|  | Página e widget de execução de uma turma, ou seja, que exibem os tópicos da turma para os alunos que estão matriculados. | PAGE | Execução de turmas - pagelearningclass | Detalhadas em Opções de permissão em páginas. |
| WIDGET | Execução de turmas | Detalhadas em Opções de permissão em widgets. |  |  |
|  | Permissão específica para o gerenciamento da lista de espera de turmas. | LMSWAI | Aprendizado - Gerência de lista de espera | Acessar: quando ativada, permite gerenciar a lista de espera de turmas. O usuário que possui essa opção ativa está apto a ser definido como responsável por gerenciar a lista de espera da turma no cadastro da disciplina ou da turma e pode visualizar as opções Salvar – para editar a prioridade do aluno na lista – e Remover – para remover o aluno da lista – na página de gerenciamento da lista de espera das turmas pelas quais é responsável por essa atividade. |

#### Trilhas e treinamentos

| Descrição | Tipo | Nome do recurso | Opções de permissão |  |
| --- | --- | --- | --- | --- |
| Descrição | Tipo | Nome do recurso | Opções de permissão |  |
|        | Página e widget do recurso Trilhas e treinamentos – pertencente ao item Aprendizado do menu principal – que exibem o catálogo de trilhas e treinamentos. | PAGE | Trilhas e treinamentos - pagecatalogtrainingtrack | Detalhadas em Opções de permissão em páginas. |
| WIDGET | Trilhas e treinamentos | Detalhadas em Opções de permissão em widgets. |  |  |
| Permissões específicas para as ações de gerenciamento do catálogo de trilhas e treinamentos. | LMSCAT | Aprendizado - Catálogo de trilhas e treinamentos | Ler: quando ativada, permite visualizar o catálogo de trilhas e treinamentos. Os itens do catálogo serão exibidos conforme as permissões definidas em cada um deles, inclusive considerando as permissões definidas na pasta raiz, ou seja, se não for liberada pelo menos permissão de leitura na pasta raiz, o catálogo será exibido vazio, mesmo que a opção Ler esteja ativa.Ignorar restrições: quando ativada, permite visualizar o catálogo de trilhas e treinamentos como se fosse um usuário administrador, ou seja, ignorando todas as restrições e ausência de permissões nos itens.  |  |
|  | Página e widget que exibem os detalhes de uma trilha ou de um treinamento existente no catálogo.  | PAGE | Visão do Treinamento/Trilha - pagetrainingtrackview | Detalhadas em Opções de permissão em páginas. |
| WIDGET | Visão de trilhas e treinamentos | Detalhadas em Opções de permissão em widgets. |  |  |
|  | Página e widget de execução de uma trilha ou treinamento, ou seja, que exibem os itens da trilha ou do treinamento para os alunos que estão matriculados. | PAGE | Execução de trilhas e treinamentos - pagelearningtrainingtrack | Detalhadas em Opções de permissão em páginas. |
| WIDGET | Execução da trilha e treinamento | Detalhadas em Opções de permissão em widgets. |  |  |

#### Administrar

| Descrição | Tipo | Nome do recurso | Opções de permissão |  |
| --- | --- | --- | --- | --- |
| Descrição | Tipo | Nome do recurso | Opções de permissão |  |
|  | Página que agrupa os recursos do item Administrar que pertence ao item Aprendizado do menu principal. | PAGE | Administrar - app__lms__learning__admin | Detalhadas em Opções de permissão em páginas. |

##### Conteúdos

| Descrição | Tipo | Nome do recurso | Opções de permissão |  |
| --- | --- | --- | --- | --- |
| Descrição | Tipo | Nome do recurso | Opções de permissão |  |
|    | Página e widget do recurso Conteúdos – pertencente ao item Administrar, que por sua vez, pertence ao item Aprendizado do menu principal – que exibem os conteúdos e as ações que podem ser efetuadas sobre eles. | PAGE  | Conteúdos - app__lms__learning__contents | Detalhadas em Opções de permissão em páginas. |
| WIDGET | Conteúdos | Detalhadas em Opções de permissão em widgets. |  |  |
| Permissões específicas para as ações de gerenciamento de conteúdos. | LMSCONT | Aprendizado - Gerência de conteúdos | Ler: quando ativada, permite visualizar a lista de conteúdos existentes. Mesmo que o usuário possua permissão para visualizar a página e o widget, se esta opção não estiver ativa, ele não visualizará os registros, ou seja, o recurso será exibido como se não existisse nenhum conteúdo.Visualizar todos os conteúdos: quando ativada, permite visualizar todos os conteúdos existentes, inclusive os que foram definidos como particular. Usuários que possuem essa opção ativa podem visualizar a opção Pré-visualizar na página de conteúdos.Salvar: quando ativada, permite incluir e editar conteúdos. Usuários que possuem essa opção ativa podem visualizar as opções Novo e Editar na página de conteúdos.Remover: quando ativada, permite remover qualquer conteúdo existente. Usuários que possuem essa opção ativa podem visualizar a opção Remover na página de conteúdos. |  |

##### Certificados

| Descrição | Tipo | Nome do recurso | Opções de permissão |  |
| --- | --- | --- | --- | --- |
| Descrição | Tipo | Nome do recurso | Opções de permissão |  |
|  | Página e widget do recurso Certificados – pertencente ao item Administrar, que por sua vez, pertence ao item Aprendizado do menu principal – que exibem os certificados e as ações que podem ser efetuadas sobre eles.  | PAGE | Certificados - pagecertificates | Detalhadas em Opções de permissão em páginas. |
| WIDGET | Certificados | Detalhadas em Opções de permissão em widgets. |  |  |
| Permissões específicas para as ações de gerenciamento de certificados. | LMSCER | Aprendizado - Gerência de Certificados | Ler: quando ativada, permite visualizar a lista de certificados existentes. Mesmo que o usuário possua permissão para visualizar a página e o widget, se esta opção não estiver ativa, ele não visualizará os registros, ou seja, o recurso será exibido como se não existisse nenhum certificado.Salvar: quando ativada, permite incluir e editar certificados. Usuários que possuem essa opção ativa podem visualizar as opções Novo, Editar, Ativar/Inativar na página de certificados.Remover: quando ativada, permite excluir certificados existentes. Usuários que possuem essa opção ativa podem visualizar a opção Remover na página de certificados. |  |

##### Habilidades

| Descrição | Tipo | Nome do recurso | Opções de permissão |  |
| --- | --- | --- | --- | --- |
| Descrição | Tipo | Nome do recurso | Opções de permissão |  |
|  | Página e widget do recurso Habilidades – pertencente ao item Administrar, que por sua vez, pertence ao item Aprendizado do menu principal – que exibem as habilidades e as ações que podem ser efetuadas sobre elas. | PAGE | Habilidades - pageskills | Detalhadas em Opções de permissão em páginas. |
| WIDGET | Habilidades | Detalhadas em Opções de permissão em widgets. |  |  |
| Permissões específicas para as ações de gerenciamento de habilidades. | LMSSKL | Aprendizado - Habilidades | Ler: quando ativada, permite visualizar a lista de habilidades existentes. Mesmo que o usuário possua permissão para visualizar a página e o widget, se esta opção não estiver ativa, ele não visualizará os registros, ou seja, o recurso será exibido como se não existisse nenhuma habilidade. Salvar: quando ativada, permite incluir e editar habilidades. Usuários que possuem essa opção ativa podem visualizar as opções Novo e Editar na página de habilidades.Remover: quando ativada, permite excluir habilidades existentes. Usuários que possuem essa opção ativa podem visualizar a opção Remover na página de habilidades. |  |

##### Configurações de trilhas e treinamentos

|  | Descrição | Tipo | Nome do recurso | Opções de permissão |
| --- | --- | --- | --- | --- |
|  | Descrição | Tipo | Nome do recurso | Opções de permissão |
|  | Página e widget do recurso Configurações de trilhas e treinamentos – pertencente ao item Administrar, que por sua vez, pertence ao item Aprendizado do menu principal – que exibem as configurações disponíveis para trilhas e treinamentos. | PAGE | Configuração de trilhas e treinamentos - pagetrainingtrackconfiguration | Detalhadas em Opções de permissão em páginas. |
| WIDGET | Configurações de trilhas e treinamentos | Detalhadas em Opções de permissão em widgets. |  |  |

##### Contas

| Descrição | Tipo | Nome do recurso | Opções de permissão |  |
| --- | --- | --- | --- | --- |
| Descrição | Tipo | Nome do recurso | Opções de permissão |  |
|  | Página e widget do recurso Contas – pertencente ao item Administrar, que por sua vez, pertence ao item Aprendizado do menu principal – que exibem as contas e as ações que podem ser efetuadas sobre elas. | PAGE | Contas - app__lms__learning__accounts | Detalhadas em Opções de permissão em páginas. |
| WIDGET | Contas | Detalhadas em Opções de permissão em widgets. |  |  |
| Permissões específicas para as ações de gerenciamento de contas. | LMSACC | Aprendizado - Gerência de contas | Ler: quando ativada, permite visualizar as contas das quais o usuário é responsável. Usuários que possuem essa opção ativa podem visualizar a opção Extrato, que permite gerar um extrato das contas pelas quais ele é responsável.Ler tudo: quando ativada, permite visualizar todas as contas existentes, independentemente de ser ou não responsável por elas. Usuários que possuem essa opção ativa podem visualizar a opção Extrato, que permite gerar um extrato de qualquer conta. Adicionar créditos: quando ativada, permite adicionar créditos em contas do tipo Crédito independentemente de ser o responsável por elas ou não, ou seja, depende do que foi definido nas opções Ler e Ler tudo. Usuários que possuem essa opção ativa podem visualizar a opção Adicionar créditos na página de contas.Salvar: quando ativada, permite incluir e editar contas. Usuários que possuem essa opção ativa podem visualizar as opções Novo e Editar na página de contas.Inativar: quando ativada, permite inativar contas independentemente de ser o responsável por ela ou não, ou seja, depende do que foi definido nas opções Ler e Ler tudo. Usuários que possuem essa opção ativa podem visualizar a opção Inativar na página de contas. Reativar: quando ativada, permite reativar contas independentemente de ser o responsável por elas ou não, ou seja, depende do que foi definido nas opções Ler e Ler tudo. Usuários que possuem essa opção ativa podem visualizar a opção Reativar na página de contas. Remover: quando ativada, permite remover contas independentemente de ser o responsável por elas ou não, ou seja, depende do que foi definido nas opções Ler e Ler tudo. Usuários que possuem essa opção ativa podem visualizar a opção Remover na página de contas. |  |

##### Console EAI

| Descrição | Tipo | Nome do recurso | Opções de permissão |  |
| --- | --- | --- | --- | --- |
| Descrição | Tipo | Nome do recurso | Opções de permissão |  |
|  | Página e widget do recurso Console EAI –  pertencente ao item Administrar, que por sua vez, pertence ao item Aprendizado do menu principal – que exibem as configurações do console EAI. | PAGE | Console EAI - pageconsoleeai | Detalhadas em Opções de permissão em páginas. |
| WIDGET | Console EAI | Detalhadas em Opções de permissão em widgets. |  |  |
| Permissões específicas para as ações de gerenciamento de mensagens EAI. | LMSEAI | Aprendizado - EAI | Acessar: quando ativada, permite gerenciar o console EAI. Mesmo que o usuário possua permissão para visualizar a página e o widget, se esta opção não estiver ativa, ele não visualizará o console, ou seja, o recurso será exibido em branco. |  |

#### Avisos

| Descrição | Tipo | Nome do recurso | Opções de permissão |  |
| --- | --- | --- | --- | --- |
| Descrição | Tipo | Nome do recurso | Opções de permissão |  |
|   | Página e widget do recurso Avisos – pertencente ao item Aprendizado do menu principal – que exibem os avisos e as ações que podem ser efetuadas sobre eles. | PAGE | Avisos - pageadvices | Detalhadas em Opções de permissão em páginas. |
| WIDGET | Avisos | Detalhadas em Opções de permissão em widgets. |  |  |
| Permissões específicas para as ações de gerenciamento de avisos. | LMSADV | Aprendizado - Gerência de avisos | Ler: quando ativada, permite visualizar a lista de avisos existentes. Mesmo que o usuário possua permissão para visualizar a página e o widget, se esta opção não estiver ativa, ele não visualizará os registros, ou seja, o recurso será exibido como se não existisse nenhum aviso. Salvar: quando ativada, permite incluir e editar avisos. Usuários que possuem essa opção ativa podem visualizar as opções Novo e Editar na página de avisos.Remover: quando ativada, permite excluir avisos existentes. Usuários que possuem essa opção ativa podem visualizar a opção Remover na página de avisos. |  |

#### Eventos

| Descrição | Tipo | Nome do recurso | Opções de permissão |  |
| --- | --- | --- | --- | --- |
| Descrição | Tipo | Nome do recurso | Opções de permissão |  |
|  | Página e widget do recurso Eventos –  pertencente ao item Aprendizado do menu principal – que exibem os eventos e as ações que podem ser efetuadas sobre eles. | PAGE | Eventos - pageevents | Detalhadas em Opções de permissão em páginas. |
| WIDGET | Eventos | Detalhadas em Opções de permissão em widgets. |  |  |

#### Agenda

| Descrição | Tipo | Nome do recurso | Opções de permissão |  |
| --- | --- | --- | --- | --- |
| Descrição | Tipo | Nome do recurso | Opções de permissão |  |
|  | Página e widget do recurso Agenda – pertencente ao item Aprendizado do menu principal – que exibem a agenda e as ações que podem ser efetuadas sobre ela. | PAGE | Agenda - pageschedule | Detalhadas em Opções de permissão em páginas. |
| WIDGET | Agenda | Detalhadas em Opções de permissão em widgets. |  |  |

#### Matrículas

| Descrição | Tipo | Nome do recurso | Opções de permissão |  |
| --- | --- | --- | --- | --- |
| Descrição | Tipo | Nome do recurso | Opções de permissão |  |
|  | Página que agrupa os recursos do item Matrículas que pertence ao item Aprendizado do menu principal. | PAGE | Matrículas - app__lms__learning__enrollments | Detalhadas em Opções de permissão em páginas. |

##### Gerenciamento de matrículas

| Descrição | Tipo | Nome do recurso | Opções de permissão |  |
| --- | --- | --- | --- | --- |
| Descrição | Tipo | Nome do recurso | Opções de permissão |  |
|  | Página e widget do recurso Gerenciamento de matrículas – pertencente ao item Matrículas, que por sua vez, pertence ao item Aprendizado do menu principal – que permitem efetuar ações em matrículas. | PAGE | Gerenciamento de matrículas - app__lms__learning__enrollments__manage | Detalhadas em Opções de permissão em páginas. |
| WIDGET | Gerenciamento de matrículas | Detalhadas em Opções de permissão em widgets. |  |  |
| Permissões específicas para as ações relacionadas a matricular usuários. | LMSENC | Aprendizado - Matrículas | Cancelar matrículas em treinamentos/trilhas: quando ativada, permite cancelar a própria matrícula em treinamentos e trilhas que fazem parte do plano de aprendizado. Usuários que possuem essa opção ativa podem visualizar a opção Cancelar matrícula, tanto no próprio plano de aprendizado quanto nos itens nos quais estão matriculados e foram visualizados a partir do catálogo.Cancelar matrículas em turmas: quando ativada, permite cancelar a própria matrícula em turmas que fazem parte do plano de aprendizado. Usuários que possuem essa opção ativa podem visualizar a opção Cancelar matrícula, tanto no próprio plano de aprendizado quanto nas turmas nas quais estão matriculados e foram visualizadas a partir do catálogo.Matricular todos os usuários: quando ativada, permite matricular outros usuários em treinamentos, trilhas e turmas disponíveis no catálogo. Usuários que possuem essa opção ativa podem visualizar a opção Matricular usuários nos itens do catálogo e a aba Matricular no recurso Gerenciamento de matrículas.Cancelar matrículas: quando ativada, permite cancelar a matrícula de outros usuários em turmas, trilhas e treinamentos - individualmente ou em lote. |  |
| Permissão específica para a gestão de matriculados. | LMSENR | Aprendizado - Gerenciamento de matrículas | Administrar: quando ativada, permite gerenciar matrículas de outros usuários em trilhas, treinamentos e turmas. Usuários que possuem essa opção ativa podem visualizar a aba Gestão de matriculados e as opções Bloquear matrícula, Desbloquear matrícula e Cancelar matrícula. |  |
|  | Permissão específica para a criação de registros de matrícula por meio da API. | LMSHIS | Aprendizado - Histórico de matrículas | Criar histórico de execução de matrículas via API: quando ativada, permite que seja criado um registro de matrícula – por meio da API – para um usuário que executou uma trilha, um treinamento ou uma turma em outra plataforma de aprendizado, pelo fato desse item não estar cadastrado nos catálogos de aprendizado, permitindo assim, que o aluno tenha o seu histórico completo. |

##### Alterar status de matrícula

| Descrição | Tipo | Nome do recurso | Opções de permissão |  |
| --- | --- | --- | --- | --- |
| Descrição | Tipo | Nome do recurso | Opções de permissão |  |
|   | Página e widget do recurso Alterar status de matrículas – pertencente ao item Matrículas, que por sua vez, pertence ao item Aprendizado do menu principal – que exibem o status das matrículas e as ações que podem ser efetuadas sobre elas. | PAGE | Alterar status de matrícula - pageenrollchangestatus | Detalhadas em Opções de permissão em páginas. |
| WIDGET | Alterar status de matrícula | Detalhadas em Opções de permissão em widgets. |  |  |
| Permissão específica para o gerenciamento do status das matrículas. | LMSMEN | Aprendizado - Alteração de status de matrículas  | Situação: quando ativada, permite alterar o status das matrículas em turmas. O usuário que possui essa opção ativa está apto a ser definido como responsável por alterar o status de matrículas no cadastro da disciplina ou da turma e pode visualizar as opções Editar – para editar a pontuação do aluno –, Aprovar aluno, Reprovar aluno e Cancelar matrícula na página de alteração do status de matrículas. |  |

##### Finalizar turmas

| Descrição | Tipo | Nome do recurso | Opções de permissão |  |
| --- | --- | --- | --- | --- |
| Descrição | Tipo | Nome do recurso | Opções de permissão |  |
|  | Página e widget do recurso Finalizar turmas – pertencente ao item Matrículas, que por sua vez, pertence ao item Aprendizado do menu principal – que exibem as turmas que ainda não foram finalizadas e que estão sob responsabilidade do usuário autenticado. | PAGE | Finalizar turmas - pagefinishclasses | Detalhadas em Opções de permissão em páginas. |
| WIDGET | Finalizar turma | Detalhadas em Opções de permissão em widgets. |  |  |
| Permissão específica para a finalização manual de turmas. | LMSMFN | Aprendizado - Finalização manual de turmas | Acessar: quando ativada, permite finalizar turmas manualmente, ou seja, o usuário que possui essa permissão ativa está apto a ser definido como responsável por finalizar turmas manualmente no cadastro da disciplina ou da turma e pode visualizar a opção Finalizar turma na página de finalização de turmas. |  |

## Recursos de avaliações

As páginas, os *widgets* e as permissões específicas de avaliações são listadas a seguir.

### Menu avaliações

| Descrição | Tipo | Nome do recurso | Opções de permissão |  |
| --- | --- | --- | --- | --- |
| Descrição | Tipo | Nome do recurso | Opções de permissão |  |
|  | Página do item Avaliações do menu principal onde são agrupados os recursos de avaliações. | PAGE | Menu avaliações - pageassessment | Detalhadas em Opções de permissão em páginas. |

#### Avaliações

| Descrição | Tipo | Nome do recurso | Opções de permissão |  |
| --- | --- | --- | --- | --- |
| Descrição | Tipo | Nome do recurso | Opções de permissão |  |
|     | Página e widget do recurso Avaliações – pertencente ao item Avaliações do menu principal – que exibem as avaliações e as ações que podem ser efetuadas sobre elas. | PAGE | Avaliações - pageassessments | Detalhadas em Opções de permissão em páginas. |
| WIDGET | Avaliações | Detalhadas em Opções de permissão em widgets. |  |  |
| Permissões específicas para as ações de gerenciamento de avaliações. | LMSGEA | Avaliações - Gerenciamento de avaliações | Ler: quando ativada, permite visualizar a lista de avaliações existentes. Mesmo que o usuário possua permissão para visualizar a página e o widget, se esta opção não estiver ativa, ele não visualizará os registros, ou seja, o recurso será exibido como se não existisse nenhuma avaliação. Salvar: quando ativada, permite incluir e editar avaliações. Usuários que possuem essa opção ativa podem visualizar as opções Novo e Editar na página de avaliações.Remover: quando ativada, permite excluir avaliações existentes. Usuários que possuem essa opção ativa podem visualizar a opção Remover na página de avaliações. |  |

#### Blocos

| Descrição | Tipo | Nome do recurso | Opções de permissão |  |
| --- | --- | --- | --- | --- |
| Descrição | Tipo | Nome do recurso | Opções de permissão |  |
|  | Página e widget do recurso Blocos – pertencente ao item Avaliações do menu principal – que exibem os blocos de questões que podem ser reutilizados e as ações que podem ser efetuadas sobre eles. | PAGE | Blocos - pageblocks | Detalhadas em Opções de permissão em páginas. |
| WIDGET | Blocos | Detalhadas em Opções de permissão em widgets. |  |  |
| Permissões específicas para as ações de gerenciamento de blocos de questões. | LMSBLO | Avaliações - Gerência de blocos | Ler: quando ativada, permite visualizar a lista de blocos de questões existentes. Mesmo que o usuário possua permissão para visualizar a página e o widget, se esta opção não estiver ativa, ele não visualizará os registros, ou seja, o recurso será exibido como se não existisse nenhum bloco de questões. Salvar: quando ativada, permite incluir e editar blocos. Usuários que possuem essa opção ativa podem visualizar as opções Novo e Editar na página de blocos.Remover: quando ativada, permite excluir blocos existentes. Usuários que possuem essa opção ativa podem visualizar a opção Remover na página de blocos. |  |

#### Tópicos e questões

| Descrição | Tipo | Nome do recurso | Opções de permissão |  |
| --- | --- | --- | --- | --- |
| Descrição | Tipo | Nome do recurso | Opções de permissão |  |
|  | Página e widget do recurso Tópicos e questões – pertencente ao item Avaliações do menu principal – que exibem o catálogo de tópicos e questões. | PAGE | Tópicos e questões - pagecatalogquestions | Detalhadas em Opções de permissão em páginas. |
| WIDGET | Tópicos e questões | Detalhadas em Opções de permissão em widgets. |  |  |
| Permissões específicas para as ações de gerenciamento do catálogo de tópicos e questões. | LMSTOP | Avaliações - Catálogo de questões | Ler: quando ativada, permite visualizar o catálogo de tópicos e questões. Os itens do catálogo serão exibidos conforme as permissões definidas em cada um deles, inclusive considerando as permissões definidas na pasta raiz, ou seja, se não for liberada pelo menos permissão de leitura na pasta raiz, o catálogo será exibido vazio, mesmo que a opção Ler esteja ativa.Ignorar restrições: quando ativada, permite visualizar o catálogo de tópicos e questões como se fosse um usuário administrador, ou seja, ignorando todas as restrições e ausência de permissões nos itens. |  |

#### Grupos de alternativas

| Descrição | Tipo | Nome do recurso | Opções de permissão |  |
| --- | --- | --- | --- | --- |
| Descrição | Tipo | Nome do recurso | Opções de permissão |  |
|  | Página e widget do recurso Grupos de alternativas – pertencente ao item Avaliações do menu principal – que exibem os grupos de alternativas e as ações que podem ser efetuadas sobre eles. | PAGE | Grupos de alternativas - pagealternativesgroups  | Detalhadas em Opções de permissão em páginas. |
| WIDGET | Grupos de alternativas  | Detalhadas em Opções de permissão em widgets. |  |  |
| Permissões específicas para as ações de gerenciamento de grupos de alternativas. | LMSALG | Avaliações - Grupo de alternativas | Ler: quando ativada, permite visualizar a lista de grupos de alternativas existentes. Mesmo que o usuário possua permissão para visualizar a página e o widget, se esta opção não estiver ativa, ele não visualizará os registros, ou seja, o recurso será exibido como se não existisse nenhum grupo de alternativa. Salvar: quando ativada, permite incluir e editar grupos de alternativas. Usuários que possuem essa opção ativa podem visualizar as opções Novo e Editar na página de grupos de alternativas.Remover: quando ativada, permite excluir grupos de alternativas existentes. Usuários que possuem essa opção ativa podem visualizar a opção Remover na página de grupos de alternativas. |  |

#### Correção de questões

| Descrição | Tipo | Nome do recurso | Opções de permissão |  |
| --- | --- | --- | --- | --- |
| Descrição | Tipo | Nome do recurso | Opções de permissão |  |
|  | Página e widget do recurso Correção de questões – pertencente ao item Avaliações do menu principal – que exibem as questões dissertativas de avaliações e as ações que podem ser efetuadas sobre elas. | PAGE | Correção de questões - pagequestioncorrection  | Detalhadas em Opções de permissão em páginas. |
| WIDGET | Corrigir questões dissertativas  | Detalhadas em Opções de permissão em widgets. |  |  |

#### Histórico de avaliações

| Descrição | Tipo | Nome do recurso | Opções de permissão |  |
| --- | --- | --- | --- | --- |
| Descrição | Tipo | Nome do recurso | Opções de permissão |  |
|  | Página e widget do recurso Histórico de avaliações – pertencente ao item Avaliações do menu principal – que exibem as aplicações de avaliações por usuário. | PAGE | Histórico de avaliações - pagehistoricalassessments | Detalhadas em Opções de permissão em páginas. |
| WIDGET | Histórico de avaliações | Detalhadas em Opções de permissão em widgets. |  |  |
| Permissão específica para visualização do histórico de aplicação de avaliações. | LMSUAHV | Avaliações - Histórico de avaliações | Visualizar o histórico de todos usuários da mesma empresa: quando ativada, permite visualizar o histórico de execução de avaliações de qualquer usuário da mesma empresa. Usuários que possuem essa opção ativa, podem efetuar uma busca por um aluno específico que seja da mesma empresa que a sua e visualizar o histórico desse aluno. |  |

#### Agendamento de avaliações

| Descrição | Tipo | Nome do recurso | Opções de permissão |  |
| --- | --- | --- | --- | --- |
| Descrição | Tipo | Nome do recurso | Opções de permissão |  |
|  | Página e widget do recurso Agendamento de avaliações – pertencente ao item Avaliações do menu principal, e que exibem as aplicações de avaliações por usuário. | PAGE | Agendamento de avaliações - pagescheduleassessments  | Detalhadas em Opções de permissão em páginas. |
| WIDGET | Agendamento de avaliações  | Detalhadas em Opções de permissão em widgets. |  |  |
| Permissões específicas para as ações de gerenciamento do agendamento da aplicação de avaliações. | LMSAS | Avaliações - Agendamento de avaliações | Ler: quando ativada, permite visualizar a lista de agendamentos de avaliações existentes. Mesmo que o usuário possua permissão para visualizar a página e o widget, se esta opção não estiver ativa, ele não visualizará os registros, ou seja, o recurso será exibido como se não existisse nenhum agendamento.Salvar: quando ativada, permite incluir e editar agendamento de avaliações. Usuários que possuem essa opção ativa podem visualizar as opções Novo e Editar na página de agendamento de avaliações.Cancelar: quando ativada, permite cancelar agendamentos de avaliações existentes. Usuários que possuem essa opção ativa podem visualizar a opção Cancelar na página de agendamento de avaliações. |  |

## Widgets avulsos

| Descrição | Tipo | Nome do recurso | Opções de permissão |  |
| --- | --- | --- | --- | --- |
| Descrição | Tipo | Nome do recurso | Opções de permissão |  |
|  | Widget que exibe as trilhas e os treinamentos que o usuário inseriu em sua lista de desejos e que pode ser inserida em páginas para personalizá-las – na Home, por exemplo. | WIDGET | Lista de desejos | Detalhadas em Opções de permissão em widgets. |
|  | Widget que exibe a evolução do usuário nas turmas, trilhas e treinamentos nos quais ele está matriculado e que pode ser inserida em páginas para personalizá-las – na Home, por exemplo. | WIDGET | Evolução | Detalhadas em Opções de permissão em widgets. |
|  | Widget que exibe as conquistas que o usuário alcançou ao executar trilhas e treinamentos e participar de turmas e que pode ser inserida em páginas para personalizá-las – na Home, por exemplo. | WIDGET | Conquistas | Detalhadas em Opções de permissão em widgets. |
|  | Widget que exibe os detalhes das conquistas do usuário, bem como as habilidades conquistadas, e que pode ser inserida em páginas para personalizá-las – na Home, por exemplo. | WIDGET | Detalhes de conquistas | Detalhadas em Opções de permissão em widgets. |
|  | Widget que exibe os avisos pertinentes às turmas de disciplinas nas quais o usuário está matriculado e que pode ser inserida em páginas para personalizá-las – na Home, por exemplo. | WIDGET | Quadro de avisos | Detalhadas em Opções de permissão em widgets. |

Importante!

A partir da atualização **1.6.5-190219**, o **LMS** não faz mais parte da plataforma para **novas instalações**.

Mas, não se preocupe: se você adquiriu a plataforma com o **LMS incluso**, entre em contato com o [Suporte Fluig](https://suporte.fluig.com/) para que você consiga utiliza-lo normalmente – mesmo após a atualização **1.6.5-190219**. Se você não lembra se o LMS está incluso ou não no seu pacote, consulte sua proposta comercial ou entre em contato com o seu ESN.


<!-- anchors: Plataforma❙Recursosdeaprendizadoeavaliações-Índice, Plataforma❙Recursosdeaprendizadoeavaliações-Falandoderecursosdeaprendizadoeavaliações..., Plataforma❙Recursosdeaprendizadoeavaliações-Recursosdeaprendizado, Plataforma❙Recursosdeaprendizadoeavaliações-Menuaprendizado, Plataforma❙Recursosdeaprendizadoeavaliações-Meuaprendizado, Plataforma❙Recursosdeaprendizadoeavaliações-Tarefasdeaprendizado, Plataforma❙Recursosdeaprendizadoeavaliações-Disciplinaseturmas, Plataforma❙Recursosdeaprendizadoeavaliações-Trilhasetreinamentos, Plataforma❙Recursosdeaprendizadoeavaliações-Administrar, Plataforma❙Recursosdeaprendizadoeavaliações-Conteúdos, Plataforma❙Recursosdeaprendizadoeavaliações-Certificados, Plataforma❙Recursosdeaprendizadoeavaliações-Habilidades, Plataforma❙Recursosdeaprendizadoeavaliações-Configuraçõesdetrilhasetreinamentos, Plataforma❙Recursosdeaprendizadoeavaliações-Contas, Plataforma❙Recursosdeaprendizadoeavaliações-ConsoleEAI, Plataforma❙Recursosdeaprendizadoeavaliações-Avisos, Plataforma❙Recursosdeaprendizadoeavaliações-Eventos, Plataforma❙Recursosdeaprendizadoeavaliações-Agenda, Plataforma❙Recursosdeaprendizadoeavaliações-Matrículas, Plataforma❙Recursosdeaprendizadoeavaliações-Gerenciamentodematrículas, Plataforma❙Recursosdeaprendizadoeavaliações-Alterarstatusdematrícula, Plataforma❙Recursosdeaprendizadoeavaliações-Finalizarturmas, Plataforma❙Recursosdeaprendizadoeavaliações-Recursosdeavaliações, Plataforma❙Recursosdeaprendizadoeavaliações-Menuavaliações, Plataforma❙Recursosdeaprendizadoeavaliações-Avaliações, Plataforma❙Recursosdeaprendizadoeavaliações-Blocos, Plataforma❙Recursosdeaprendizadoeavaliações-Tópicosequestões, Plataforma❙Recursosdeaprendizadoeavaliações-Gruposdealternativas, Plataforma❙Recursosdeaprendizadoeavaliações-Correçãodequestões, Plataforma❙Recursosdeaprendizadoeavaliações-Históricodeavaliações, Plataforma❙Recursosdeaprendizadoeavaliações-Agendamentodeavaliações, Plataforma❙Recursosdeaprendizadoeavaliações-Widgetsavulsos -->
