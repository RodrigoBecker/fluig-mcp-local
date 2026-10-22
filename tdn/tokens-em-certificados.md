---
title: "Tokens em certificados"
url: "https://tdn.totvs.com/display/public/fluig/Tokens+em+certificados"
scraped_at: "2026-03-09T03:03:44.201Z"
depth: 1
anchors: 5
child_links: 34
---

# Tokens em certificados

Importante!

A partir de **Abril de 2025**, o [suporte](https://totvscst.zendesk.com/hc/pt-br/#home) ofertado ao LMS será descontinuado. Não havendo mais evoluções após este período. O LMS não estará mais disponível para acesso nos ambientes a partir da **próxima release** do TOTVS Fluig Plataforma, prevista para o primeiro semestre de 2025.

# Índice

# Objetivo

O objetivo deste guia é apresentar todos os *tokens* que podem ser utilizados ao configurar um certificado.

# Tokens em certificados

Os certificados – que podem ser associados a trilhas, treinamentos ou disciplinas para serem emitidos pelos alunos quando eles concluem esses itens com êxito – suportam *tokens* pré-cadastrados que são substituídos pelos valores que são dinâmicos, de acordo com cada matrícula. A seguir é exibida a lista de *tokens* disponíveis para utilização:

| Objeto | Descrição | Atributos | Exemplo de utilização |
| --- | --- | --- | --- |
| Objeto | Descrição | Atributos | Exemplo de utilização |
| User | Usuário | namelastnamefullNameusernamebirthdayemail | Nome: ${user.name}Sobrenome: ${user.lastname}Nome completo: ${user.fullName}Usuário: ${user.username}Data de nascimento: ${user.birthday?date}Email: ${user.email} |
| Tenant | Empresa | namedomain | Nome: ${tenant.name}Domínio: ${tenant.domain} |
| Enrollment | Matrícula | dateEnrolldateConclusionscoreClassuserRA (quando utilizada integração com o RM)finalScore | Data de matrícula: ${enrollment.dateEnroll?date}Data de conclusão: ${enrollment.dateConclusion?date}Nota final (Turma): ${enrollment.scoreClass}Registro acadêmico: ${enrollment.userRa}Nota final (Turma/Trilha/Treinamento): ${enrollment.finalScore} |
| EnrollableItem | Treinamento/Trilha | nameworkloadobjectivecost | Nome: ${enrollableItem.name}Carga horária: ${enrollableItem.workload}Objetivo: ${enrollableItem.objective}Custo: ${enrollableItem.cost} |
| NormalClass | Turma | nameclassInitialDateclassFinalDatecost | Nome: ${normalClass.name}Data inicial: ${normalClass.classInitialDate}Data final: ${normalClass.classFinalDate}Custo: ${normalClass.cost} |
| Discipline | Disciplina | nomeobjectiveementamethodologycoordinatorworkloadscoreApprove | Nome: ${discipline.name}Objetivo: ${discipline.objective}Ementa: ${discipline.ementa}Metodologia: ${discipline.methodology}Coordenador: ${discipline.coordinator.fullName}Carga horária: ${discipline.workload}Pontuação de aprovação: ${discipline.scoreApprove} |

**Como utilizar datas?**

Existem algumas formas de utilização para as datas que podem ser exibidas nos certificados.

**Exemplo:******Data de matrícula: ${enrollment.dateEnroll**?date?string("dd-MM-yyyy")**}****Resultado: **10-12-2017**

****

**Exemplos de formatos válidos:**

- **dd-MM-yyyy**
- **dd-MM-yyyy hh:mm**
- **hh:mm**

# Exemplo de certificado utilizando tokens

A seguir é exibido um exemplo de certificado que utiliza *tokens* para composição do seu conteúdo.

**Onde e como crio um certificado?**

Você pode conferir o passo a passo para criação e configuração de um certificado no [help.fluig.com](/pages/viewpage.action?pageId=234458358).

- [Criação do certificado](#)
- [Certificado emitido pelo aluno](#)

![](/download/attachments/274004323/certificado-criacao.PNG?version=1&modificationDate=1495825122000&api=v2)

![](/download/attachments/274004323/certificado-emitido.PNG?version=2&modificationDate=1496077779000&api=v2)


<!-- anchors: Tokensemcertificados-Índice, Tokensemcertificados-Objetivo, Tokensemcertificados-Tokensemcertificados, Tokensemcertificados-Exemplodecertificadoutilizandotokens, certificados -->
