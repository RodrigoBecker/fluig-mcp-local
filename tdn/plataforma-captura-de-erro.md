---
title: "Plataforma ❙ Captura de erro"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=990755497"
scraped_at: "2026-03-09T05:06:41.186Z"
depth: 3
anchors: 4
child_links: 59
---

# Plataforma ❙ Captura de erro

Consulte a documentação correta:

Esta documentação refere-se ao novo editor de processos da plataforma. Caso esteja utilizando o editor de processos atual, acesse [Evento intermediário de captura de erro](https://tdn.totvs.com/pages/viewpage.action?pageId=126714787#EventosIntermedi%C3%A1rios-EventoIntermedi%C3%A1riodecapturadeerro).

# Falando de evento Captura de erro...

---

![](/download/attachments/990755497/evento-captura-de-erro.png?version=1&modificationDate=1758739509840&api=v2) O evento de **captura de erro** é utilizado para tratar exceções que podem acontecer durante a execução de uma [atividade de serviço](/pages/viewpage.action?pageId=919050491). Ele somente pode ser associado à atividade de serviço quando ela está configurada com execução **Automatizada**, sendo obrigatório neste caso.

Esse evento serve para indicar para qual atividade a solicitação deve ser movimentada se o número de tentativas da atividade de serviço for excedido sem que nenhuma das execuções tenha sido com sucesso.

Ele não pode receber fluxos e nem ter um fluxo de saída com retorno. Ele apenas pode existir anexado na atividade de serviço com um fluxo de saída comum para uma atividade qualquer de resolução da inconsistência.

Esse evento é utilizado quando:

- a atividade pode gerar uma exceção ou erro, como uma falha de integração, falha na regra de negócio, dados inconsistentes;

- deseja-se capturar esse erro e redirecionar o fluxo para um tratamento específico: *log*, atividade de execução manual, nova tentativa, notificação.

Importante!

Esse evento não pode ser utilizado de forma isolada dentro de um diagrama de processo. Ele apenas pode existir estando anexado a uma atividade de serviço com execução automatizada.

Por isso, ele não é exibido na paleta de componentes, somente é exibido quando uma atividade de serviço existente no diagrama do processo é configurada com a execução Automatizada. Neste momento, o evento de captura de erro é exibido automaticamente sobre a atividade de serviço.

****

EXEMPLO DE USO
Em um processo onde existe uma **integração com sistema externo**, o solicitante preenche alguns dados de um cliente e envia a solicitação adiante, que vai para uma atividade de serviço responsável por enviar os dados preenchidos para um sistema externo, com execução automática e com um *script* que faz um POST via REST.

Na atividade de serviço existe um evento de captura de erro.

Se a integração for feita com sucesso, o sucesso é registrado e a solicitação segue o fluxo normal.

Se ocorrer um erro, o fluxo do evento de erro é acionado quando a execução lançar uma exceção, via *throw* em JavaScript, por exemplo.

![](/download/attachments/990755497/exemplo-captura-de-erro.png?version=1&modificationDate=1758913414660&api=v2)

## Como deve ser utilizado

---

O evento de captura de erro deve ser utilizado da seguinte forma:

- Crie uma **atividade de serviço** com execução **Automática**. O evento de **captura** **de erro** aparecerá automaticamente sobre a atividade.

- Do evento de **captura de erro**, crie um fluxo para uma atividade de **tratamento de erro** – atividade de execução manual ou de notificação, por exemplo. Esse fluxo será seguido se a execução da atividade de serviço lançar uma exceção.

- No **script** da **atividade de serviço** precisa ter o tratamento das **exceções**, para sejam lançadas quando ocorrer alguma inconsistência na execução e sejam capturadas pelo evento de captura de erro.

- Crie o **fluxo normal** saindo da atividade de serviço, que será seguido se a execução for bem-sucedida.

Importante!

O erro precisa ser lançado por uma exceção para que seja capturado pelo evento. Ao ser lançada a exceção, o evento captura automaticamente o erro.

## Boas práticas na utilização

---

São consideradas boas práticas ao utilizar o evento de captura de erro:

- sempre tratar exceções no *script* para capturar erros e lançar mensagens significativas;

- encaminhar o fluxo de erro para uma tarefa manual ou de notificação para evitar que o processo fique parado sem saber o que aconteceu;

- adicionar *logs* no tratamento de erro para facilitar o diagnóstico.

## Configurar evento Captura de erro

---

**01.** No [diagrama](/pages/viewpage.action?pageId=860252119) do processo, clique no evento **Captura de erro** ![](/download/attachments/990755497/evento-captura-de-erro.png?version=1&modificationDate=1758739509840&api=v2) que deseja configurar.

**02.** Defina as informações desejadas para o evento de captura de erro.

**Título**
Nome para identificar o evento que vai capturar algum erro que pode ocorrer na execução da atividade de serviço.

**03.** Clique em **Salvar rascunho** – localizado no lado direito da barra superior – para salvar as configurações feitas no evento **Captura de erro**.

**04.** Na mensagem exibida, clique em **Ok, entendi**.

Fique atento!

Esta documentação é válida a partir da atualização **Voyager (2.0)**. Se você utiliza uma atualização anterior, ela pode conter informações diferentes das quais você vê na sua plataforma.


<!-- anchors: Plataforma❙Capturadeerro-FalandodeeventoCapturadeerro..., Plataforma❙Capturadeerro-Comodeveserutilizado, Plataforma❙Capturadeerro-Boaspráticasnautilização, Plataforma❙Capturadeerro-ConfigurareventoCapturadeerro -->
