---
title: "Plataforma ❙ Central de Diagnósticos"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=644018092"
scraped_at: "2026-03-09T04:06:11.163Z"
depth: 2
anchors: 8
child_links: 54
---

# Plataforma ❙ Central de Diagnósticos

# Falando de central de diagnósticos...

---

O objetivo da central de diagnósticos é possibilitar aos clientes um lugar único para que seja possível visualizar e validar processos e solicitações que estejam com alguma inconsistência, ou seja, é necessário que a *solicitação ou processo criado contenham algum erro em sua movimentação*ou que os *processos apresentem alertas de práticas não recomendadas de desenvolvimento.*

Além disso, a central de diagnósticos também extrai os dados dos workflows do Fluig, permitindo que essas informações sejam facilmente visualizadas e ainda podendo ser enviadas para os times de atendimento, consultoria e desenvolvimento.

- [Central de Diagnósticos](#)
- [Central de Diagnósticos na prática](#)

![](/download/attachments/644018092/central%20de%20diagnosticos.png?version=1&modificationDate=1754592491553&api=v2)

## Acessando a central de diagnósticos

---

**01**. Navegue até o nível de menu ![](/download/attachments/644018092/process.png?version=2&modificationDate=1754588742060&api=v2)**Processos > Central de diagnósticos**.

## Estatísticas gerais

---

Na seção Estatísticas gerais é possível verificar a quantidade de solicitações e processos com algum tipo de erro ou alerta.

Para consultar o total de solicitações e processos com erro, utilize a seta no canto superior direito da tela para navegar entre os dias, deslizando para a esquerda ou para a direita ![](/download/attachments/644018092/central.png?version=1&modificationDate=1754586285327&api=v2). É possível visualizar dados de dias anteriores ou retornar ao dia atual. Também é possível aplicar um filtro clicando na seta ao lado da data e selecionando outros períodos que deseja consultar.

**01**. Clique na seta, localizada ao lado da data atual e selecione uma das opções disponíveis.

**Hoje**: mostra o total de solicitações e processos com erro ou alerta no dia atual.

**Últimos 7 dias**: mostra o total de solicitações e processos com erro ou alerta nos últimos 7 dias.

**Últimos 15 dias**: mostra o total de solicitações e processos com erro ou alerta nos últimos 15 dias.

**Últimos 30 dias**: mostra o total de solicitações e processos com erro ou alerta nos últimos 30 dias.

**Período personalizado**: Permite incluir um período de tempo para que seja exibido o total de solicitações e processos com erro ou alerta, após incluir o período, clique em **Aplicar.**

## Visualizar log diário do ambiente

---

Nesta opção, é possível visualizar o log diário do ambiente, com recursos para aplicar filtros, realizar buscas e selecionar o tipo de log que deseja consultar.

**01**. Clique no botão **Visualizar log diário do ambiente**.

**02**. Utilize o campo de busca, localizado no canto superior esquerdo para buscar palavras ou termos específicos.

**03**. Em **Filtros do log**, é possível definir algumas informações para que a busca se torne mais prática e assertiva.

**Período personalizado**

Permite definir um intervalo de tempo, em horas, para exibir apenas o trecho do log correspondente ao período selecionado. Defina o período desejado nos campo A partir de: e Até:.

**Tipo de log**

Permite selecionar quais tipos de log que devem ser exibidos entre:

- Error
- Warm
- Info
- Debug

**04.** Após definir todas as informações para o filtro, clique em **Aplicar**. 

Para remover os filtros aplicados, clique em **Limpar filtros**, no canto superior direito da tela.

## Solicitações

---

Na aba ![](/download/attachments/644018092/flaticon-diagram%20%283%29.png?version=1&modificationDate=1754587388420&api=v2)**Solicitações**, são exibidas todas as solicitações que estão em estado de erro. É possível aplicar filtros por tipo de solicitação e visualizar o diagnóstico detalhado de cada caso. A listagem apresenta informações como número da solicitação, processo, versão, responsável, data do erro, atividade e diagnóstico.

**01**. No **Filtro**, localizado ao lado do campo de busca é possível filtrar: **Por solicitação**, **Por processo**, **Por responsável**, **Por atividade** ou **Por erro**.

**02**. Em Mostrar "x" resultados, localizado na parte inferior direita, é possível definir a quantidade de solicitações que aparecerão na listagem em 10, 25, 50 ou 100 solicitações por página.

**03**. Para visualizar o diagnóstico da solicitação, clique no ícone ![](/download/attachments/644018092/flaticon-view.png?version=3&modificationDate=1649860737187&api=v2).

**04**. Uma nova tela será exibida, mostrando algumas informações do diagnóstico da solicitação, como número da solicitação, o processo ao qual ela pertence, versão, data de erro e atividade. Para ver mais detalhes, clique em **Ver detalhes e ações**.

**05**. Na página de **Diagnóstico da solicitação**, é possível visualizar informações gerais como a **Mensagem de erro**, **Log da solicitação**, **Ações** e **Acessar a central de atendimento**.

**06**. Na seção **Mensagem de erro**, é possível ter uma breve descrição do tipo de erro.

**07**. Na seção **log da solicitação**, é possível copiá-lo para a área de transferência clicando no ícone ![](/download/attachments/644018092/flaticon-copy.png?version=3&modificationDate=1649860697830&api=v2) ou ainda expandir para visualizar em tamanho maior, clicando no ícone ![](/download/attachments/644018092/flaticon-expand.png?version=1&modificationDate=1649860650830&api=v2).

**08**. Ao clicar em **Visualizar solicitação,**o usuário será direcionado diretamente para dentro da solicitação na [central de tarefas](https://tdn.totvs.com/x/AfDuDQ).

**09**. No botão **Ações**, é possível realizar movimentações relacionadas à solicitação e ao processo.

Da solicitação:

**Reenviar solicitação** - permite reenviar novamente a solicitação.

**Gerar log descritivo** - gera um log descritivo da solicitação para que seja reexecutada. 

Ao escolher esta opção, clique em **Continuar** para que a solicitação seja reexecutada.

**Download da solicitação** - permite fazer o download da solicitação.

Ao fazer o download da solicitação, os dados relacionados ao processo como formulários, logs e anexos poderão ser incluídos no arquivo de exportação.

Para dar continuidade na solicitação, será necessário selecionar se deseja exportar seus anexos ou anonimizar seus campos do formulário.

Para isso, basta clique nas opções que deseja para deixá-las em verde.

É necessário também marcar a opção de que está ciente e de acordo sobre os dados que serão expostos para o arquivo de download, referentes a solicitação em questão.

Após feito todos os passos, clique em **Realizar download**.

Um arquivo **.zip** do download será gerado com todas as informações da solicitação.

Do processo:

**Diagnóstico do processo** - ao escolher esta opção, uma nova janela será aberta, permitindo verificar o diagnóstico do processo. Mostrando ainda seus alertas de desenvolvimento, sua mensagem de alerta e o script. 

Caso deseje copiar o script para a área de transferência, clique no ícone ![](/download/attachments/644018092/flaticon-copy.png?version=3&modificationDate=1649860697830&api=v2).

**Editar scripts** - ao escolher esta opção, uma nova janela será aberta, direcionando para o editor de script. Permitindo assim a visualização e edição dos scripts do processo. 

As edições feitas nos scripts do processo geram uma nova versão que é aplicada apenas à solicitação específica. Se o erro diagnosticado for corrigido com essa edição, a nova versão do script poderá ser atualizada para todas as solicitações futuras do processo. Todas as versões podem ser consultadas e restauradas por meio do gerenciador de versões.

Para editar, basta clique na área de edição em ![](/download/attachments/644018092/flaticon-edit%20%282%29.png?version=1&modificationDate=1754588514813&api=v2)**Editar**. 

Para visualizar versões anteriores e gerenciá-las, clique em ![](/download/attachments/644018092/flaticon-restore.png?version=1&modificationDate=1754588523673&api=v2)**Versões**. 

Na **Lista de script do processo**, é possível visualizar todos os scripts contidos no processo e selecionar um a um para edição.

Para copiar o script desejado, clique no ícone ![](/download/attachments/644018092/flaticon-copy.png?version=3&modificationDate=1649860697830&api=v2).

Após finalizada as verificações e edição, clique em **Reenviar solicitação**.

**10**. É possível ainda chamar o suporte diretamente de dentro da central de diagnósticos. Clique no botão **Acessar Central de Atendimento** e será feito o direcionamento para o suporte do TOTVS Fluig.

## Processos

---

Na aba ![](/download/attachments/644018092/process.png?version=2&modificationDate=1754588742060&api=v2)**Processos**, é possível visualizar todos os processos em estado de erro ou alerta. É possível filtrar os processos pelo status e realizar buscas pelo código ou pela descrição. A lista exibe informações como código, nome do processo, versão, status de ativo, indicação de edição e diagnóstico.

**01**. No filtro, **Por Processos**, localizado ao lado direito do campo de busca, podemos filtrar **Processos com erro**,**Processos com alerta**,**Processos ativos**,**Processos inativos**,**Processos liberados**,**Processos em edição**,**Todas as versões**e**Últimas versões**.

**02**. Em Mostrar "x" resultados, localizado na parte inferior direita, é possível definir a quantidade de solicitações que aparecerão na listagem em 10, 25, 50 ou 100 solicitações por página.

**03**. Para visualizar o diagnóstico do processo, clique no ícone ![](/download/attachments/644018092/flaticon-view.png?version=3&modificationDate=1649860737187&api=v2).

**04**. Uma nova página será exibida. Em **Diagnóstico do processo**, é possível visualizar as abas de **Alertas de desenvolvimento**e **Erros em solicitações.**

Aba**Alertas de desenvolvimento**:

Contém informações de mensagem de alerta e script.

Aba**Erros em solicitações**:

Contém informações da mensagem de erro e demais informações da solicitação com erro.

Para visualizar a solicitação, clique no ícone ![](/download/attachments/644018092/flaticon-view.png?version=3&modificationDate=1649860737187&api=v2) para ser direcionado diretamente para o diagnóstico da solicitação.

## Práticas não recomendadas de desenvolvimento

---

A seguir estão listadas as práticas de desenvolvimento que classificamos na Central de Diagnóstico como não recomendadas:

- **Ao utilizar um mecanismo por usuário ou executor da atividade, é recomendável que se tenha um gestor no processo caso o usuário em questão seja desativado:**

Quando uma atividade está configurado com um mecanismo por usuário, caso este usuário seja desativado, ao movimentar a solicitação, a solicitação é movimentada para o gestor do processo. Mas, caso não haja um gestor, ocorrerá um erro. O mesmo acontece ao utilizar um mecanismo por executor da atividade e este executor seja desativado. Por isso é recomendável configurar um gestor nestes casos.

Link: [Mecanismo de atribuição](/pages/viewpage.action?pageId=270921079)

Imagem:

![](https://lh5.googleusercontent.com/proxy/8FHkUY87_gpNv22ewLFTff7NbwPgDxLdjP6OJLW7Va_wGIudvVIDXg1HWQG1E3-iXUiPT9HQx64u38B5RW0tdSMcLrBpOm2Ti8rDy0w8tV-dECxocvuv-jag4zRiAYZnLcaiqCdp1-FwGRcdRe1-SmgHrSFafVNeF1pcnfUtfey8Cph_QdrA3ejFRTPsMbOI)

- **A propriedade AutomaticTasks está descontinuada desde a versão 1.5.9 e pode parar de funcionar sem avisos:**

Esta propriedade não deve ser mais utilizada pois foi descontinuada. Para evitar problemas em futuras atualizações do fluig a propriedade deve ser removida bem como ajustado o processo para não fazer uso dela.

- **Este é um processo padrão do fluig e somente é atualizado a primeira versão. Ao criar uma nova versão, as atualizações do produto não terão efeitos sobre este processo:**

Frequentemente em nossas atualizações fazemos pequenos ajustes, correções e melhorias no processo de listar tarefas e no subprocesso adhoc. Porém, aplicamos somente na versão 1. Ao fazer modificações nesse processo você não recebe nossas modificações.

- **A atividade condicional possui um timer com menos de 3 minutos o que pode, em caso de falhas, acumular várias solicitações rodando ao mesmo tempo e em um curto período de tempo:**

Ao criar uma atividade condicional, o fluig vai executar o script conforme configurado. Caso não consiga a resposta desejada, é agendado uma re-execução. NO caso de uma integração que apresente instabilidade ou mesmo em alguma outra falha no código, esses agendamentos podem acabar se acumulando conforme aumenta o número de solicitações o que pode levar à uma massa de agendamentos excessivamente grande causando lentidão no fluig como um todo.

- **A atividade de serviço possui um timer de 1 minuto com mais de 7 tentativas o que pode, em caso de falhas, acumular várias solicitações rodando ao mesmo tempo e em um curto período de tempo:**

Ao criar uma atividade condicional, o fluig vai executar o script conforme configurado. Caso não consiga a resposta desejada, é agendado uma re-execução. NO caso de uma integração que apresente instabilidade ou mesmo em alguma outra falha no código, esses agendamentos podem acabar se acumulando dependendo da quantidade de solicitações abertas por minuto, o que pode levar à uma massa de agendamentos excessivamente grande causando lentidão no fluig como um todo.

- **O script de customização está usando as conexões internas do fluig com o banco de dados. Utilize a conexão /jdbc/AppDS**

O Fluig disponibiliza a conexão AppDS que deve ser utilizada pelas customizações no lugar do FluigDS e FluigDSRO.

Link: [Desenvolvimento de Datasets](/display/fluig/Desenvolvimento+de+Datasets)

- **Os arquivos de tradução estão referenciando uma atividade que não existe:**

Nos arquivos de tradução, constam atividades que não existes na diagramação. Isso acontece quando uma atividade foi removida normalmente. Para evitar confusões futuras, é recomendável remover essas traduções de atividades que não existem mais

- **A propriedade da atividade está diferente do que encontrado nos arquivos de tradução:**

Ao configurar um processo e gerar as traduções, o fluig ignora as propriedades da atividade e utiliza conforme configurado na tradução. Por isso gerar confusão no desenvolvedor, recomenda-se que em ao menos um idioma esteja igual a configuração que foi feita na atividade ou que escolha um idioma e remova um dos arquivos de tradução desse idioma, assim, ao tentar movimentar a solicitação neste idioma que foi removido, vai utilizar os dados conforme configurado na tela.

- **A propriedade do processo está diferente do que encontrado nos arquivos de tradução:**

Ao configurar um processo e gerar as traduções, o fluig ignora as propriedades do processo e utiliza conforme configurado na tradução. Por isso gerar confusão no desenvolvedor, recomenda-se que em ao menos um idioma esteja igual a configuração que foi feito no diagrama ou que escolha um idioma e remova um dos arquivos de tradução desse idioma, assim, ao tentar movimentar a solicitação neste idioma que foi removido, vai utilizar os dados conforme configurado na tela.

- **O script de customização está levantando um erro em um método que não vai parar a transação e não vai impedir a movimentação da solicitação:**

Levantar uma exceção no script, além de interromper a execução do script em si consegue impedir a movimentação toda da solicitação. Porém, nem todos os métodos possuem essa característica, já que as informações já foram persistidas no ponto em que o script é executado. Confira a documentação para saber quais são estes métodos.

Link: [Tratamento de exceções](/pages/viewpage.action?pageId=270921008)

- **O script de customização está conectando a um serviço durante a movimentação o que pode gerar lentidão na movimentação. Utilize a atividade de serviço:**

O Fluig possui a atividade de serviço que deve ser utilizada para realizar integrações com outros serviços de terceiros ou mesmo do próprio fluig. Como vantagem, ele oferece re-tentativas automáticas ou mesmo um fluxo de contorno para eventuais problemas de conexões ou dados. Utilizar em outro ponto do produto pode gerar lentidão na movimentação de processos. Mais sobre a atividade de serviço:

Link: [Integração assíncrona via processos workflow](/pages/viewpage.action?pageId=237397494)

Imagem:

![](https://lh6.googleusercontent.com/proxy/xMNDljMri5Nrhx5Zgc_oIPBJFuj9-t5dy3VB6qUXqC3T2UvFeFPgxVZE_RrN1SVSalpcNH9owF5LpHicTDHgh3q4fraA7Su8vaxvqYCtzLDhBFTvTidTjJIcA1dtiMVEnV5QGlbr0dcAXXc-uSA7I6yU8Q1zcEWdNZWHeFs_BMyokLOm7dU17g)

Fique atento!

Esta documentação é válida a partir da atualização **Voyager (2.0)**. Se você utiliza uma atualização anterior, ela pode conter informações diferentes das quais você vê na sua plataforma.


<!-- anchors: Plataforma❙CentraldeDiagnósticos-Falandodecentraldediagnósticos..., 1, Plataforma❙CentraldeDiagnósticos-Acessandoacentraldediagnósticos, Plataforma❙CentraldeDiagnósticos-Estatísticasgerais, Plataforma❙CentraldeDiagnósticos-Visualizarlogdiáriodoambiente, Plataforma❙CentraldeDiagnósticos-Solicitações, Plataforma❙CentraldeDiagnósticos-Processos, Plataforma❙CentraldeDiagnósticos-Práticasnãorecomendadasdedesenvolvimento -->
