---
title: "LMS 030 - Quanto tempo leva para que uma requisição de matrícula seja efetivada?"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=267796927"
scraped_at: "2026-03-09T04:49:15.807Z"
depth: 3
anchors: 4
child_links: 69
---

# LMS 030 - Quanto tempo leva para que uma requisição de matrícula seja efetivada?

# Índice

# Plataforma

**Produto:** TOTVS Fluig Plataforma

**Card:** LMS

**Versão:**inferiores à 1.6.3 – *Snowflake*

****

# Ocorrência

Ao matricular um usuário ou grupo de usuários em determinada turma está demorando para que a turma seja exibida na aba Meu aprendizado. Qual é o tempo padrão para que uma requisição de matrícula seja efetivada?

# Solução

Ao solicitar matrícula em uma turma é iniciada uma rotina em segundo plano para realizar o cadastro dos usuários ou grupo de usuários informado. O tempo máximo de execução é de 2 minutos. O usuário recebe uma notificação quando a matrícula é efetivada.

**Saiba mais...**

As requisições de matrículas são efetivadas por uma tarefa padrão existente no Agendador de tarefas que é executada a cada 2 minutos. Para que a efetivação ocorra antes desse tempo, o administrador da plataforma precisa acessar o agendador e executar a tarefa manualmente. Assim, a turma será exibida no plano de aprendizado dos usuários matriculados assim que a tarefa for executada.

Confira mais informações em [Agendador de tarefas](/pages/viewpage.action?pageId=234455387).

Importante!

A partir da atualização **1.6.5-190219**, o **LMS** não faz mais parte da plataforma para **novas instalações**.

Mas, não se preocupe: se você adquiriu a plataforma com o **LMS incluso**, entre em contato com o [Suporte Fluig](https://suporte.fluig.com/) para que você consiga utiliza-lo normalmente – mesmo após a atualização **1.6.5-190219**. Se você não lembra se o LMS está incluso ou não no seu pacote, consulte sua proposta comercial ou entre em contato com o seu ESN.


<!-- anchors: LMS030Quantotempolevaparaqueumarequisiçãodematrículasejaefetivada?-Índice, LMS030Quantotempolevaparaqueumarequisiçãodematrículasejaefetivada?-Plataforma, LMS030Quantotempolevaparaqueumarequisiçãodematrículasejaefetivada?-Ocorrência, LMS030Quantotempolevaparaqueumarequisiçãodematrículasejaefetivada?-Solução -->
