---
title: "Plataforma ❙ Tarefas padrão"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=271857399"
scraped_at: "2026-03-09T05:10:32.338Z"
depth: 3
anchors: 12
child_links: 73
---

# Plataforma ❙ Tarefas padrão

# Índice

## Falando de tarefas padrão...

Algumas tarefas são padrão e vêm automaticamente configuradas na plataforma, não sendo possível cadastra-las no agendador. Essas tarefas são detalhadas a seguir, divididas por seus respectivos *cards*.

### LMS

#### Cancelar matrículas expiradas em treinamentos

Essa tarefa é responsável por cancelar as matrículas que ultrapassaram a data limite de conclusão em trilhas ou em treinamentos, restringindo o acesso indevido a eles. Ela é executada todos os dias à 00:00.

A validade das matrículas em trilhas e treinamentos é definida em [Configurações de aprendizado](/pages/viewpage.action?pageId=234458366).

#### Cancelar matrículas expiradas em turmas

Essa tarefa é responsável por cancelar as matrículas que ultrapassaram a data limite de conclusão em turmas de disciplinas, restringindo o acesso indevido a elas. Ela é executada todos os dias à 00:30.

A validade da matrícula é definida no cadastro da turma. Mais informações podem ser obtidas em [Criar turma](https://tdn.totvs.com/pages/viewpage.action?pageId=233766475#Plataforma%E2%9D%99Turma-Criarturma).

#### Finalizar avaliações expiradas

Essa tarefa é responsável por finalizar automaticamente as avaliações que foram iniciadas e fechadas e atingiram o tempo máximo permitido para execução sem terem sido finalizadas. Ela é executada todos os dias à 01:00.

Essa tarefa é válida para avaliações que não permitem que o aluno continue respondendo-as a partir do ponto em que ele parou, ou seja, se o aluno iniciou uma avaliação desse tipo e fechou a janela de execução antes de finalizá-la, o tempo para finalização da avaliação continuará sendo contado até atingir o tempo máximo permitido. Quando o tempo máximo é atingido sem que o aluno retorne para a execução da avaliação e finalize-a, ela será automaticamente finalizada por essa tarefa.

O tempo máximo de execução de uma avaliação é definido no seu cadastro. Mais informações podem ser obtidas em [Criar avaliação](https://tdn.totvs.com/pages/viewpage.action?pageId=233766578#Plataforma%E2%9D%99Avalia%C3%A7%C3%B5es.-Criaravalia%C3%A7%C3%A3o).

#### Finalizar tópicos expirados

Essa tarefa é responsável por finalizar os tópicos de turmas que ultrapassaram a data limite para execução. Ela é executada todos os dias às 02:00.

A data limite de execução de um tópico de turma é definida em seu cadastro. Mais informações podem ser obtidas em [Criar tópico](https://tdn.totvs.com/pages/viewpage.action?pageId=233766486#Plataforma%E2%9D%99T%C3%B3pico-Criart%C3%B3pico).

#### Notificar aprovação de requisição de matrícula pendente

Essa tarefa é responsável por emitir uma notificação sobre requisições de matrículas pendentes de aprovação aos responsáveis. Ela é executada todos os dias às 05:00.

Mais informações sobre a aprovação de requisições de matrícula podem ser obtidas em [Minhas pendências](/pages/viewpage.action?pageId=233766551).

#### Notificar expiração de contas

Essa tarefa é responsável por emitir uma notificação sobre a expiração de contas para os respectivos responsáveis, conforme a tolerância definida para cada conta. Ela é executada todos os dias às 02:30.

A data de expiração de uma conta é definida no seu cadastro, bem como o número de dias antes de expirar que deve ser considerado para iniciar a emissão da notificação. Mais informações podem ser obtidas em [Criar conta](https://tdn.totvs.com/pages/viewpage.action?pageId=234458369#Plataforma%E2%9D%99Contas-Criarconta).

#### Processar lista de espera

Essa tarefa é responsável por matricular os alunos que estão na lista de espera de turmas assim que novas vagas são abertas. Ela é executada aos 10 minutos de cada hora do dia, ou seja, à 00:10, à 01:10, às 02:10 e assim sucessivamente.

Mais informações podem ser obtidas em [Lista de espera](/pages/viewpage.action?pageId=233765921).

#### Processar mensagens do EAI

Essa tarefa é responsável por processar o envio e o recebimento de mensagens pendentes do servidor EAI. Ela é executada aos 20 minutos de cada hora do dia, ou seja, à 00:20, à 01:20, às 02:20 e assim sucessivamente.

Mais informações sobre a configuração do EAI podem ser obtidas em [Console EAI](/pages/viewpage.action?pageId=235600698).

#### Processar requisições de matrícula

Essa tarefa é responsável por processar as requisições de matrícula que foram aprovadas por um responsável ou automaticamente pelo sistema. Ela é executada a cada hora sempre no minuto 10. Ex: 00:10:00, 01:10:00, 02:10:00.

Importante!

A partir da atualização **1.6.5-190219**, o **LMS** não faz mais parte da plataforma para **novas instalações**.

Mas, não se preocupe: se você adquiriu a plataforma com o **LMS incluso**, entre em contato com o [Suporte Fluig](https://suporte.fluig.com/) para que você consiga utiliza-lo normalmente – mesmo após a atualização **1.6.5-190219**. Se você não lembra se o LMS está incluso ou não no seu pacote, consulte sua proposta comercial ou entre em contato com o seu ESN.


<!-- anchors: Plataforma❙Tarefaspadrão-Índice, Plataforma❙Tarefaspadrão-Falandodetarefaspadrão..., Plataforma❙Tarefaspadrão-LMS, Plataforma❙Tarefaspadrão-Cancelarmatrículasexpiradasemtreinamentos, Plataforma❙Tarefaspadrão-Cancelarmatrículasexpiradasemturmas, Plataforma❙Tarefaspadrão-Finalizaravaliaçõesexpiradas, Plataforma❙Tarefaspadrão-Finalizartópicosexpirados, Plataforma❙Tarefaspadrão-Notificaraprovaçãoderequisiçãodematrículapendente, Plataforma❙Tarefaspadrão-Notificarexpiraçãodecontas, Plataforma❙Tarefaspadrão-Processarlistadeespera, Plataforma❙Tarefaspadrão-ProcessarmensagensdoEAI, Plataforma❙Tarefaspadrão-Processarrequisiçõesdematrícula -->
