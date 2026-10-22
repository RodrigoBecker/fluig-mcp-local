---
title: "Plataforma ❙ Temporizador"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=1036751413"
scraped_at: "2026-03-09T05:06:26.394Z"
depth: 3
anchors: 4
child_links: 58
---

# Plataforma ❙ Temporizador

# Falando de evento Temporizador...

---

![](/download/attachments/1036751413/evento-temporizador.png?version=1&modificationDate=1769541462127&api=v2)O evento intermediário **Temporizador** representa uma pausa ou espera no meio do fluxo do processo, ou seja, representa a passagem do tempo ou a ocorrência de uma condição temporal dentro do processo.

Ele é utilizado para ritmar o fluxo sem relação direta com uma atividade, ou seja, quando o processo precisa esperar um período de tempo, atingir uma data específica ou repetir ações com base em intervalos definidos antes de continuar sua execução.

Esse evento é utilizado no fluxo do processo entre duas atividades e atua como um ponto de espera no fluxo sequencial. Quando o processo chega nesse evento, sua execução é pausada até que a condição de tempo configurada seja satisfeita. Somente após isso o fluxo segue para a próxima atividade ou evento.

Ele pode ser configurado de três formas principais:

- **Dia específico**: o processo continua em um momento exato.
EXEMPLOEsperar até **segunda** às **09:00** para abrir a tarefa de processamento.
- **Duração**: o processo aguarda um intervalo de tempo.
EXEMPLOEsperar **10 minutos** antes de tentar integrar de novo com o ERP.
- **Ciclo**: o processo dispara ações repetidamente em um intervalo definido.
EXEMPLOA cada **24 horas** ou **todo primeiro dia do mês**.

Dessa forma, enquanto a condição de tempo não é atendida, nenhuma atividade subsequente é executada. É importante ressaltar que o temporizador controla **quando** o fluxo pode continuar, mas não altera a lógica de decisão existente no fluxo.

Importante!

A tecnologia utilizada no temporizador é baseada em calendário – e não em duração contínua – e considera o tempo que foi definido como frequência, ou seja, o contador reinicia a cada 24 horas ou todo começo do mês. 

Isso significa que não é possível utilizar mais de 24 horas quando a frequência for definida por hora ou mais de 31 dias quando a frequência for definida por dia. Também significa que, ao definir a frequência por dia – por exemplo 8 dias – o contador reiniciará no dia primeiro do mês e começará a contar novamente a partir de então.

EXEMPLO
→ Em **25/03** foi configurado um temporizador **por dia**, a cada **8 dias**.
→ A contagem de**8 dias** finalizaria em **02/04**, porém, o contador será reiniciado no dia **01/04**.
→ Sendo assim, o temporizador somente liberará o fluxo do processo para seguir adiante no dia **08/04** (**8 dias** a partir do dia **01/04**, no qual o contador foi reiniciado).

Obtenha informações mais detalhadas na [documentação oficial](https://www.quartz-scheduler.org/documentation/quartz-2.1.7/cookbook/BiDailyTrigger) do fabricante.

![](/download/attachments/1036751413/diagrama-completo-temporizador.png?version=2&modificationDate=1769799058633&api=v2)

EXEMPLO DE USO
Em um processo de **Limite de crédito**, o cliente solicita que seu limite de crédito seja aumentado. A solicitação segue por todas as etapas necessárias e, depois da aprovação final, **aguarda 2 horas** (tempo de processamento bancário) antes de enviar a confirmação para o cliente. Ou seja, existe um temporizador entre a aprovação final e a notificação para o cliente.
Dessa forma, é possível dar uma margem de tempo para a sincronia dos dados entre os sistemas. Isso evita que o cliente seja notificado antes que a atualização seja efetivada, para que ele não acesse seu aplicativo bancário antes da efetivação e veja o limite antigo, o que pode gerar frustração ou uma tentativa de contato com o banco para verificar o ocorrido.

![](/download/attachments/1036751413/exemplo-temporizador.png?version=3&modificationDate=1769623311797&api=v2)

## Onde pode ser utilizado

---

Esse tipo de evento é amplamente utilizado em processos que dependem de tempo, tais como:

- aguardar prazos legais ou contratuais;

- criar períodos de carência ou espera;

- disparar lembretes automáticos;

- controlar SLAs (*Service Level Agreements*);

- agendar verificações periódicas;

- evitar execução imediata de atividades que precisam respeitar um intervalo mínimo.

## Benefícios do uso

---

O uso adequado do evento intermediário temporizador em processos traz diversos benefícios, dentre eles:

- **padronização do controle de tempo**: reduz dependência de controles manuais ou paralelos;

- **maior previsibilidade e confiabilidade**:****o processo passa a respeitar prazos de forma consistente e auditável;

- **automação e redução de erros manuais**: evita esquecimentos, atrasos e falhas operacionais;

- **melhoria na gestão de SLAs**: facilita o acompanhamento e cumprimento de prazos acordados, sem ação manual;

- **governança e clareza no processo**: torna explícito no diagrama onde e por que o processo precisa esperar;

- **fluxo resiliente**: espera controlada para novas tentativas e janelas de operação.

## Configurar evento Temporizador

---

****

        Your browser does not support the HTML5 video element

**01.** No [diagrama](https://tdn.totvs.com/pages/viewpage.action?pageId=860252119) do processo, clique no evento **Temporizador** ![](/download/attachments/1036751413/evento-temporizador.png?version=1&modificationDate=1769541462127&api=v2) que deseja configurar.

As configurações disponíveis são exibidas na lateral direita.

**02.** Defina as informações gerais para o evento que representa uma espera no fluxo do processo.

**Título**
Nome para identificar o evento temporizador que representa uma espera no fluxo do processo.

EXEMPLO DE USO
Em um processo de **Limite de crédito**, onde é necessário aguardar para notificar o cliente sobre a efetivação, o evento poderia receber o nome **Aguardar processamento bancário**.

**Frequência**
Condição de tempo que o temporizador deve **esperar**– antes de liberar o fluxo do processo para a próxima etapa – ou **considerar repetidas vezes** para disparar ações cíclicas dentro de um período definido. As opções disponíveis são:

- **Por minuto**: quando selecionada, determina que o tempo de espera do temporizador será por minuto. Neste caso, é necessário definir:**A cada**: quantidade de minutos que o temporizador deve esperar antes de liberar o fluxo do processo para a próxima etapa.
EXEMPLOEsperar **5 minutos** antes de tentar estabelecer a integração novamente.→ A próxima etapa seria **Integrar com o ERP**.

**Por hora**:  quando selecionada, determina que o tempo de espera do temporizador será por hora. Neste caso, é necessário definir:
- **A cada**: quantidade de horas que o temporizador deve esperar antes de liberar o fluxo do processo para a próxima etapa. 
EXEMPLOEsperar **2 horas** antes de enviar a confirmação do aumento de limite de crédito.→ A próxima etapa seria **Confirmar aumento de crédito**.

**Por dia**: quando selecionada, determina que o tempo de espera do temporizador será por dia. Neste caso, é necessário definir:
- **A cada**: quantidade de dias que o temporizador deve esperar antes de liberar o fluxo do processo para a próxima etapa.
- **Horário de execução**: horário do dia no qual o temporizador deve liberar o fluxo do processo para a próxima etapa. Será considerado o fuso horário definido no recurso [Locais](/pages/viewpage.action?pageId=286006467) do Painel de controle.
EXEMPLOEnviar uma notificação de cobrança de fatura atrasada a cada **15 dias** às **17:00**.→ A próxima etapa seria **Notificar cobrança**.

**Todos os dias úteis**: quando selecionada, determina que o temporizador deve liberar o fluxo do processo para a próxima etapa em todos os dias úteis. Neste caso, é necessário definir:
- **Horário de execução**: horário de cada dia útil no qual o temporizador deve liberar o fluxo do processo adiante para que a próxima etapa seja feita. Será considerado o fuso horário definido no recurso [Locais](/pages/viewpage.action?pageId=286006467) do Painel de controle.
EXEMPLOEsperar até às **15:00** de **todo dia útil** para incluir o horário de almoço automaticamente no ponto eletrônico.→ A próxima etapa seria **Incluir horário de almoço**.

**Por dia do mês**: quando selecionada, determina que o temporizador deve liberar o fluxo do processo para a próxima etapa a cada um ou mais dias específicos do mês. Neste caso, é necessário definir:
- **Dias do mês**: em quais dias do mês o temporizador deve liberar o fluxo do processo adiante para que a próxima etapa seja feita. É possível assinalar apenas um ou vários dias entre **1** e **31**.
- **Horário de execução**: horário de cada dia no qual o temporizador deve liberar o fluxo do processo adiante para que a próxima etapa seja feita. Será considerado o fuso horário definido no recurso [Locais](/pages/viewpage.action?pageId=286006467) do Painel de controle.
EXEMPLOEsperar até às **08:00** de todo dia **10** do mês para abrir uma solicitação de manutenção preventiva.→ A próxima etapa seria **Solicitar manutenção**.

**Por semana do mês**: quando selecionada, determina que o temporizador deve liberar o fluxo do processo para a próxima etapa a cada semana do mês. Neste caso, é necessário definir:
- **Nº**: em quais semanas do mês o temporizador deve liberar o fluxo do processo adiante para que a próxima etapa seja feita. É possível assinalar apenas uma ou mais semanas entre a **1ª**, **2ª**, **3ª**, **4ª** ou a **última** semana do mês.
- **Dias da semana**: em quais dias da semana o temporizador deve liberar o fluxo do processo adiante para que a próxima etapa seja feita. É possível assinalar apenas um ou vários dias da semana entre **Segunda-feira** e **Domingo**.
- **Horário de execução**: horário de cada dia da semana no qual o temporizador deve liberar o fluxo do processo adiante para que a próxima etapa seja feita. Será considerado o fuso horário definido no recurso [Locais](/pages/viewpage.action?pageId=286006467) do Painel de controle.
EXEMPLOEsperar até às **19:00** de **Sexta-feira** da **última semana** do mês para extrair os indicadores financeiros da área.→ A próxima etapa seria **Extrair indicadores financeiros**.

**Por dia da semana**: 
- **Dias da semana**: em quais dias da semana o temporizador deve liberar o fluxo do processo adiante para que a próxima etapa seja feita. É possível assinalar apenas um ou vários dias da semana entre **Segunda-feira** e **Domingo**.
- **Horário de execução**: horário de cada dia da semana no qual o temporizador deve liberar o fluxo do processo adiante para que a próxima etapa seja feita. Será considerado o fuso horário definido no recurso [Locais](/pages/viewpage.action?pageId=286006467) do Painel de controle.
EXEMPLOEsperar até às **14:00** de toda **Terça** e **Quinta-feira** para publicar os documentos atualizados.****→ A próxima etapa seria **Publicar documentos**.****

**03.** Clique em **Salvar rascunho** – localizado no lado direito da barra superior – para salvar as configurações feitas no componente **Temporizador**.

**04.** Na mensagem exibida, clique em **Ok, entendi**.

Fique atento!

Esta documentação é válida a partir da **atualização 2.0 – Voyager.** Se você utiliza uma atualização anterior, ela pode conter informações diferentes das quais você vê na sua plataforma.


<!-- anchors: Plataforma❙Temporizador-FalandodeeventoTemporizador..., Plataforma❙Temporizador-Ondepodeserutilizado, Plataforma❙Temporizador-Benefíciosdouso, Plataforma❙Temporizador-ConfigurareventoTemporizador -->
