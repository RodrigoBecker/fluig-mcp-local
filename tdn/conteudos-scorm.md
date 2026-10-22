---
title: "Conteúdos SCORM"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=244446799"
scraped_at: "2026-03-09T03:03:40.179Z"
depth: 1
anchors: 12
child_links: 38
---

# Conteúdos SCORM

Importante!

A partir de **Abril de 2025**, o [suporte](https://totvscst.zendesk.com/hc/pt-br/#home) ofertado ao LMS será descontinuado. Não havendo mais evoluções após este período. O LMS não estará mais disponível para acesso nos ambientes a partir da **próxima release** do TOTVS Fluig Plataforma prevista para o primeiro semestre de 2025.

# Índice

# Objetivo

O objetivo deste guia é demonstrar o que é o SCORM e quais variáveis o TOTVS Fluig Plataforma armazena.

# Visão Geral

O SCORM (*Sharable Content Object Reference Model*) é um objeto de conteúdo que pode ser compartilhado entre sistemas de *e-learning.* Existe um conjunto de normas técnicas que definem como criar esses objetos compartilháveis. O SCORM é produzido pelo [ADL](http://www.adlnet.gov/), um grupo de pesquisa patrocinado pelo Departamento de Defesa dos Estados Unidos (DoD).

SCO: *Sharable Content Object*, ou seja, uma parte do conteúdo SCORM.

# SCORM no LMS do TOTVS Fluig Plataforma

O LMS do TOTVS Fluig Plataforma provê suporte apenas para o **SCORM 1.2**. O SCORM deve ser um arquivo compactado que contenha um arquivo XML com o nome "imsmanifest.xml", que é chamado de arquivo do "manifesto", em sua raiz. O arquivo "manifesto" contém toda informação necessária para a apresentação do conteúdo. O manifesto divide o treinamento ou o conteúdo em um ou mais SCORMs.

Os SCORMs podem ser combinados em uma estrutura de árvore que representa o treinamento ou conteúdo, conhecida como árvore de atividades. O "manifesto" contém uma estrutura no XML, representativa da árvore de atividades, assim como informações sobre como lançar cada SCORM e, opcionalmente, metadados que descrevem o treinamento ou o conteúdo e suas partes.

O cadastro do SCORM é realizado dentro do menu **Aprendizado → Administrar → Conteúdos** e pode ser feito por usuários que possuem as permissões necessárias para gerenciar conteúdos, ou seja, permissão de criação ou alteração, remoção visualização ou permissão completa.

O SCORM é apresentado dentro do espaço destinado a ele ou em tela cheia, não podendo ser aberto em uma janela separada.

A exibição do SCORM em tela cheia não é suportada pelo navegador Internet Explorer.

- [Cadastro](#)
- [Árvore](#)
- [Visualização](#)

![](/download/attachments/244446799/conteudos.png?version=6&modificationDate=1502905270000&api=v2)

**Cadastro de Conteúdos SCORM**

![](/download/attachments/244446799/arvore_scorm.PNG?version=2&modificationDate=1502971313000&api=v2)

**Visualize a árvore SCORM** **durante o cadastro**

![](/download/attachments/244446799/visualiza%C3%A7%C3%A3o_scorm.png?version=2&modificationDate=1494937846000&api=v2)**Visualização do conteúdo SCORM**

# Desenvolvimento de SCORM

O TOTVS Fluig Plataforma não dá suporte ao desenvolvimento do SCORM. Para isso, pode-se contar com empresas especializadas em desenvolvimentos de SCORM ou até mesmo desenvolver com soluções de mercado.

# Variáveis

O SCORM oferece variáveis que podem ser utilizadas no desenvolvimento dos conteúdos (SCO). O TOTVS Fluig Plataforma, contudo, armazena apenas as seguintes variáveis do SCORM:

| Variável | Valor |
| --- | --- |
| Variável | Valor |
| cmi.core.credit | Indica se o SCO será utilizado como critério de aprovação |
| cmi.core.entry | Indica se o aluno está começando a SCO pela primeira vez ou se esta retomando uma tentativa anterior |
| cmi.core.exit | Este valor indica quando o aluno está deixando o SCO. Caso configurado para cmi.exit “suspend”, irá garantir que a sessão atual seja preservada e os dados em tempo de execução não serão redefinidos na próxima vez que o SCO for lançado. Configurado para cmi.exit “” indicará que o LMS deve começar uma nova tentativa com um novo conjunto de tempo de execução de dados sobre o próximo lançamento da SCO. |
| cmi.core.lesson_status | Indica se o aluno finalizou o SCO e se foi aprovado ou não. |
| cmi.core.student_id | Código de identificação do aluno, em nome de quem o SCO foi lançado. |
| cmi.core.student_name | Nome de identificação do aluno fornecido pelo LMS. |
| cmi.core.score.raw | Indica a pontuação que o aluno obteve em qualquer avaliação dentro de um SCO. |
| cmi.launch_data | Dados fornecidos para um SCO após seu lançamento. É inicializada a partir do elemento dataFromLMS do arquivo de manifesto. |
| cmi.core.lesson_mode | Identifica um dos três modos possíveis em que a SCO pode ser apresentado ao aluno (visualizar, rever, preview). |
| cmi.student_data.mastery_score | Pontuação mínima para que o aluno seja aprovado no SCO. |
| cmi.student_data.max_time_allowed | Tempo máximo de permanência do aluno no SCO. |
| cmi.student_data.time_limit_action | Indica o que o SCO deve fazer quando for excedido max_time_allowed. |

# Testando seu SCORM

É possível testar gratuitamente seu SCORM, caso ele possua menos que 100 MB no site [SCORM Cloud](http://cloud.scorm.com).

# Referências

SCORM.com: [scorm.com](http://scorm.com/)

ADL: [adlnet.gov](https://www.adlnet.gov/)


<!-- anchors: ConteúdosSCORM-Índice, ConteúdosSCORM-Objetivo, ConteúdosSCORM-VisãoGeral, ConteúdosSCORM-SCORMnoLMSdoTOTVSFluigPlataforma, SCORM, SCORM--346242983, SCORM-1575786060, SCORM-1321632206, ConteúdosSCORM-DesenvolvimentodeSCORM, ConteúdosSCORM-Variáveis, ConteúdosSCORM-TestandoseuSCORM, ConteúdosSCORM-Referências -->
