---
title: "Plataforma ❙ Converter solicitações"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=233763179"
scraped_at: "2026-03-09T04:06:24.261Z"
depth: 2
anchors: 2
child_links: 44
---

# Plataforma ❙ Converter solicitações

# Falando de converter solicitação...

---

A finalidade deste recurso é converter solicitações abertas em versões de processo mais antigas para versões mais novas. Isso é feito mapeando as atividades do processo da versão mais antiga para atividades da versão mais nova. Assim, a solicitação do processo antigo recebe todas as funcionalidades e atividades da versão mais nova com uma simples conversão.

Em uma aplicação correta da melhoria continua em processos de negócio, uma solicitação workflow deveria iniciar e terminar na mesma versão de um processo.

O principal motivo pelo qual é permitido o versionamento de processos é justamente oferecer a oportunidade melhoria nos processos, buscando otimizar o tempo gasto em suas tarefas ou permitir uma melhor distribuição de recursos de uma organização, tanto financeiros como humanos. Outro motivo pelo qual a plataforma oferece a conversão de solicitações workflow, é como último recurso para as situações aonde não seja possível:

- O usuário responsável por uma tarefa não conseguir movimentar a mesma para outra atividade.
- O usuário gestor do processo não conseguir movimentar a solicitação workflow.
- Do ponto de vista de negócios, o cancelamento da solicitação e inicio de uma outra não seja possível .

Ressaltando que, ao executar a conversão de solicitações, algumas regras da plataforma deverão ser consideradas, como:

- Serão executados os eventos de processos que afetam tanto a atividade origem como a atividade destino.
- O usuário que recebe a tarefa deverá ser um usuário incluso no mecanismo de atribuição definido para a tarefa destino.
- O privilégio de usuário administrador não ultrapassa as limitações impostas pelo mecanismo destino.
- Não é possível converter solicitações de processos cujo fluxo esteja pendente em uma atividade de sub processo no momento da conversão.
- Solicitações que possuem atividades configuradas como consenso só poderão ser convertidos se a nova versão também possuir essas atividades devidamente mapeadas como consenso.
- A versão do formulário da solicitação será mantida após a conversão.

A criação de versões de processos específicas para ajustes e correções técnicas que permitam a solicitação workflow não são recomendadas e devem ser evitadas ao máximo. Acesse a FAQ [BPM 097](https://tdn.totvs.com/x/WkIMEQ) e veja a lista com algumas ações que podem ser tomadas pelo desenvolvedor de processos a fim de propiciar o desenvolvimento de processos que necessitem destas manutenções constantes sem que para isso seja necessário versionar o processo com tanta frequência.

![](/download/attachments/233763179/Converter%20solicita%C3%A7%C3%A3o.png?version=1&modificationDate=1755117294430&api=v2)

Precisa de ajuda?

Acesse a central de ajuda da plataforma através do ícone ![](/download/attachments/233763179/question-off.png?version=1&modificationDate=1554386519173&api=v2), localizado no canto superior direito das páginas do menu Processos, para obter informações específicas sobre este recurso, além de*links* com documentações relacionadas. [Saiba mais](https://tdn.totvs.com/x/ZMhSDg).

## Converter solicitações

---

**01.** No menu principal, clique em ![](/download/attachments/233763179/process.png?version=1&modificationDate=1755117419560&api=v2)**Processos**.

**02.** Clique em ![](/download/attachments/233763179/flaticon-converter.png?version=1&modificationDate=1755117008647&api=v2)**Converter solicitações**.

**03.** Selecione o processo no qual deseja converter as solicitações.

**04.** Na seção **Dados do processo**, serão exibidos a versão e as solicitações abertas. Selecione a versão do processo na qual se deseja converter as solicitações.

Somente é possível converter solicitações que estejam abertas, por isso, a versão do processo selecionada deve conter solicitações abertas.

**05.**Na seção **Atividades do processo** é possível visualizar quantas atividades existem e quantas tarefas encontram-se abertas em cada atividade. Selecione a atividade do processo que deseja converter.

**06**. Clique em **Avançar** – localizado no canto superior direito da tela.

**07.** Em **Versão destino**, selecione a versão para a qual as solicitações que estão na versão origem serão convertidas.

**08.** Para cada atividade da versão origem, selecione uma atividade da versão destino.

Para cada atividade da versão antiga do processo deve ser mapeada uma atividade da versão destino. Esse mapeamento é necessário para relacionar as atividades que são iguais ou semelhantes entre as duas versões do processo.

**09.** Clique em **Avançar**, localizado no canto superior direito da janela.

**10.** Na listagem de solicitações exibida, selecionar quais delas devem ser convertidas.

**11.**Acionar **Avançar**– localizado no canto superior direito da tela.

**12.** Clique em **Converter**.

Ao converter as solicitações, todas as tarefas pendentes são finalizadas e novas tarefas são criadas para as atividades de destino. Ao término da conversão, é possível visualizar o log para verificar se o processo foi concluído com êxito.

Fique atento!

Esta documentação é válida a partir da atualização** Voyager (2.0)**. Se você utiliza uma atualização anterior, ela pode conter informações diferentes das quais você vê na sua plataforma.


<!-- anchors: Plataforma❙Convertersolicitações-Falandodeconvertersolicitação..., Plataforma❙Convertersolicitações-Convertersolicitações -->
