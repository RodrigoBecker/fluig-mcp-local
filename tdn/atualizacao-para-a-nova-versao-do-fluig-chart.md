---
title: "Atualização para a nova versão do FLUIG.chart"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=808476695"
scraped_at: "2026-03-09T03:48:31.414Z"
depth: 2
anchors: 20
child_links: 55
---

# Atualização para a nova versão do FLUIG.chart

# Índice

## Objetivo

---

Este guia tem por objetivo auxiliar os usuários a seguir o passo a passo necessário para identificação dos pontos onde é necessária a revisão e atualização do código, por conta da atualização de bibliotecas que tivemos. Mais uma medida para reforçar ainda mais a segurança do Fluig.

## Identificação do que precisa ser ajustado

---

Na versão **1.8.2 do Fluig <VALIDAR>**, por conta de uma vulnerabilidade, liberamos no Style Guide uma atualização dos plugins base do componente **FLUIGC.chart**, que são o **Chart.js** e o **Gauge.js**.

Na versão **2.9.4** do **Chart.js**, algumas dessas propriedades foram alteradas ou removidas, enquanto outras ainda são suportadas com pequenas modificações. Abaixo estão as informações para cada propriedade.

**Legenda de alterações**

**Breaking Change:**Alteração significativa que pode impactar o código existente, geralmente modificando a interface da API. Pode causar problemas em casos específicos.

**Feature (Recurso):**Adição à API que normalmente não afeta o código existente. Introduz novas funcionalidades, mas há a possibilidade de interações negativas com o código existente.

**Deprecated (Descontinuado):**Recurso ou API ainda presente, mas seu uso é desencorajado. Pode ser removido em futuras atualizações de versões principais.

## Breaking changes

---

### Breaking Change: Gráfico LineBar removido. Agora utilize o gráfico Mixed.

O gráfico `**chart.lineBar(data, options)**` foi removido. Agora o gráfico `**chart.mixed(data, options)**` deve ser usado em seu lugar. Exemplo:

[?](#)

| 123 | `var` `chart = FLUIGC.chart(``'#MY_SELECTOR'``);``// call the mixed function``var` `mixedChart = chart.mixed(data, options);` |
| --- | --- |

### Breaking Change: Somente um evento para todos os gráficos.

Agora, quando você clica em alguma sessão do gráfico, todos eles emitem um mesmo evento, chamado `**fluig.chart.click**`. Os eventos abaixo foram removidos:

- line: 'fluig.chart.line.click'
- bar: 'fluig.chart.vertical.click'
- radar: 'fluig.chart.radar.click'
- polarArea: 'fluig.chart.polar.click'
- pie: 'fluig.chart.pie.click'
- doughnut: 'fluig.chart.doughnut.click'
- gauge: 'fluig.chart.gauge.click'
- donut: 'fluig.chart.donut.click'
- lineBar: 'fluig.chart.lineBar.click'
- horizontalBar: 'fluig.chart.horizontal.click'

Exemplo:

[?](#)

| 1234 | `$(``'YOUR_SELECTOR'``).on(``'fluig.chart.click'``,``function``(ev) {````// Para saber qual é o chart, pegar pelo ev.chart.config.type````console.log(ev.chart.config.type);``});` |
| --- | --- |

### Breaking change: Nova estrutura de datasets para alguns gráficos

Os gráficos `**polar**`, `**pie**` e `**doughnut**` sofreram uma modificação em sua estrutura de **datasets**. O motivo foi para equalizar a estrutura de todos os gráficos. Exemplo:

[?](#)

| 1234567891011121314151617181920 | `// Estrutura antiga``var` `dataPolarOld = [{````value: 300,````label:``'bpm'``}, {````value: 50,````label:``'ecm'``}, {````value: 100,````label:``'social'``}];` `// Estrutura nova``var` `dataPolarNew = {````labels: [``'bpm'``,``'ecm'``,``'social'``],````datasets: [{````label:``'My First Dataset'``,````data: [300, 50, 100]````}]``};` |
| --- | --- |

### Breaking change: Propriedades removidas na estrutura do dataset.

A estrutura geral de **datasets** dos gráficos mudaram. As propriedades `**fillColor**`, `**strokeColor**`, `**highlightFill**` e `**highlightStroke**` foram removidas. Agora deve ser usado as propriedades `**backgroundColor**`, `**borderColor**`, `**hoverBackgroundColor**` e `**hoverBorderColor**`. Exemplo:

[?](#)

| 1234567891011 | `var` `dataPie = {````labels: [``'bpm'``,``'ecm'``,``'social'``],````datasets: [{````label:``'My First Dataset'``,````data: [300, 50, 100],````backgroundColor: [``'#4CAF50'``,``'#8BC34A'``,``'#CDDC39'``],````hoverBackgroundColor: [``'#45A049'``,``'#7CB342'``,``'#C0CA33'``],````borderColor: [``'#4CAF50'``,``'#8BC34A'``,``'#CDDC39'``],````hoverBorderColor: [``'#45A049'``,``'#7CB342'``,``'#C0CA33'``],````}]``};` |
| --- | --- |

### Breaking change: Mudança para adicionar, remover ou atualizar dados nos gráficos.

Agora, para realizar qualquer alteração em um dado no gráfico, é necessário utilizar o código a seguir:

[?](#)

| 123456789101112131415161718 | `// Adiciona novos dados no gráfico``$(``'#btn-chart-line-add'``).on(``'click'``,``function` `(e) {````e.preventDefault();````line.addData([40, 60],``"August"``);``});` `// Adiciona atualiza os dados no gráfico``$(``'#btn-chart-line-update'``).on(``'click'``,``function` `(e) {````e.preventDefault();````line.data.datasets[0].data[2] = 50;````line.update();``});` `// Remove o último dado no gráfico``$(``'#btn-chart-line-remove'``).on(``'click'``,``function` `(e) {````e.preventDefault();````line.removeData();``});` |
| --- | --- |

### Alterações por gráfico:

#### Gráfico do tipo Line

| Propriedade | Situação | Orientação |
| --- | --- | --- |
| Propriedade | Situação | Orientação |
| scaleShowGridLines | Removida | Para controlar as linhas de grade, agora você deve usar as configurações dentro de scales. |
| scaleGridLineColor | Removida | Use as configurações dentro de scales. |
| scaleGridLineWidth | Removida | Use as configurações dentro de scales. |
| pointDot | Removida | Use point dentro de elements em dataset para controlar os pontos. |
| pointDotRadius | Removida | Use radius dentro de point em elements no nível do conjunto de dados. |
| pointDotStrokeWidth | Removida | Use borderWidth dentro de point em elements no nível do conjunto de dados. |
| pointHitDetectionRadius | Removida | Use hitRadius dentro de point em elements no nível do conjunto de dados. |
| datasetStroke | Removida | Use borderColor dentro de datasets. |
| datasetFill | Removida | Use fill dentro de datasets. |
| legendTemplate | Removida | Não existe mais a propriedade legendTemplate. A lógica para personalizar a legenda agora deve ser feita na propriedade legend. Consulte a documentação para mais detalhes. |

#### Gráfico do tipo Bar ou Horizontal Bar

| Propriedade | Situação | Orientação |
| --- | --- | --- |
| Propriedade | Situação | Orientação |
| scaleShowGridLines | Removida | Use as configurações dentro de scales para controlar as linhas de grade. |
| scaleGridLineColor | Removida | Use as configurações dentro de scales para definir a cor das linhas de grade. |
| scaleGridLineWidth | Removida | Use as configurações dentro de scales para definir a largura das linhas de grade. |
| barShowStroke | Removida | Use borderColor dentro de datasets para controlar se as barras têm uma borda. |
| barStrokeWidth | Removida | Use borderWidth dentro de datasets para controlar a largura da borda das barras. |
| barDatasetSpacing | Removida | A versão 2.9.4 usa barPercentage e categoryPercentage dentro de scales para controlar o espaçamento entre barras e conjuntos de dados. |
| legendTemplate | Removida | Não existe mais a propriedade legendTemplate. A lógica para personalizar a legenda agora deve ser feita na propriedade legend. Consulte a documentação para mais detalhes. |

#### Gráfico do tipo Radar

| Propriedade | Situação | Orientação |
| --- | --- | --- |
| Propriedade | Situação | Orientação |
| scaleShowLine | Removida | Use as configurações dentro de scales para controlar a exibição das linhas do eixo. |
| angleShowLineOut | Removida | Não está mais disponível na versão 2.9.4. Considere usar outras propriedades em scales ou gridLines para obter o efeito desejado. |
| scaleShowLabels | Removida | Use as configurações dentro de scales para controlar a exibição de rótulos. |
| angleLineColor | Removida | Use as configurações dentro de gridLines em scales para definir a cor das linhas de grade radiais. |
| pointLabelFontFamily | Removida | Use as configurações dentro de ticks em scales para configurar a família da fonte. |
| pointLabelFontStyle | Removida | Use as configurações dentro de ticks em scales para configurar o estilo da fonte. |
| pointLabelFontSize | Removida | Use as configurações dentro de ticks em scales para configurar o estilo da fonte. |
| pointLabelFontColor | Removida | Use as configurações dentro de ticks em scales para configurar a cor da fonte. |
| pointDot | Removida | Use point dentro de elements em dataset para controlar a exibição de pontos. |
| pointDotRadius | Removida | Use radius dentro de point em elements no nível do conjunto de dados. |
| pointDotStrokeWidth | Removida | Use borderWidth dentro de point em elements no nível do conjunto de dados. |
| pointHitDetectionRadius | Removida | Use hitRadius dentro de point em elements no nível do conjunto de dados. |
| datasetStroke | Removida | Use borderColor dentro de datasets. |
| datasetStrokeWidth | Removida | Use borderWidth dentro de datasets. |
| datasetFill | Removida | Use fill dentro de datasets. |
| legendTemplate | Removida | Não existe mais a propriedade legendTemplate. A lógica para personalizar a legenda agora deve ser feita na propriedade legend. Consulte a documentação para mais detalhes. |

#### Gráfico do tipo Polar

| Propriedade | Situação | Orientação |
| --- | --- | --- |
| Propriedade | Situação | Orientação |
| scaleShowLabelBackdrop | Removida | O recurso de fundo para rótulos de escala foi removido. |
| scaleBackdropColor | Removida | O fundo para rótulos de escala agora é controlado por backgroundColor em ticks dentro de scales. |
| scaleBackdropPaddingY | Removida | O preenchimento vertical para o fundo dos rótulos de escala agora é configurado por padding em ticks dentro de scales. |
| scaleBackdropPaddingX | Removida | O preenchimento horizontal para o fundo dos rótulos de escala agora é configurado por padding em ticks dentro de scales. |
| scaleShowLine | Removida | Use as configurações dentro de scales para controlar a exibição das linhas do eixo. |
| segmentShowStroke | Removida | A propriedade de controle de traçado de segmento foi removida. O controle de borda agora é feito usando borderColor dentro de datasets. |
| segmentborderColor | Removida | Use borderColor dentro de datasets para controlar a cor da borda do segmento. |
| segmentStrokeWidth | Removida | Use borderWidth dentro de datasets para controlar a largura da borda do segmento. |
| animationSteps | Removida | A animação agora é controlada por animation em options. |
| animationEasing | Removida | Use animation em options para controlar a função de easing. |
| animateRotate | Removida | Use animate em options para controlar a animação de rotação. |
| animateScale | Removida | Use animate em options para controlar a animação de escala. |
| legendTemplate | Removida | Não existe mais a propriedade legendTemplate. A lógica para personalizar a legenda agora deve ser feita na propriedade legend. Consulte a documentação para mais detalhes. |

#### Gráfico do tipo Pie e Doughnut

| Propriedade | Situação | Orientação |
| --- | --- | --- |
| Propriedade | Situação | Orientação |
| segmentShowStroke | Removida | A propriedade de controle de traçado de segmento foi removida. O controle de borda agora é feito usando borderColor dentro de datasets. |
| segmentborderColor | Removida | Use borderColor dentro de datasets para controlar a cor da borda do segmento. |
| segmentStrokeWidth | Removida | Use borderWidth dentro de datasets para controlar a largura da borda do segmento. |
| animationSteps | Removida | A animação agora é controlada por animation em options. |
| animationEasing | Removida | Use animation em options para controlar a função de easing. |
| animateRotate | Removida | Use animate em options para controlar a animação de rotação. |
| animateScale | Removida | Use animate em options para controlar a animação de escala. |
| legendTemplate | Removida | Não existe mais a propriedade legendTemplate. A lógica para personalizar a legenda agora deve ser feita na propriedade legend. Consulte a documentação para mais detalhes. |


<!-- anchors: AtualizaçãoparaanovaversãodoFLUIG.chart-Índice, AtualizaçãoparaanovaversãodoFLUIG.chart-Objetivo, AtualizaçãoparaanovaversãodoFLUIG.chart-Identificaçãodoqueprecisaserajustado, AtualizaçãoparaanovaversãodoFLUIG.chart-Breakingchanges, AtualizaçãoparaanovaversãodoFLUIG.chart-BreakingChange:GráficoLineBarremovido.AgorautilizeográficoMixed., highlighter_772714, AtualizaçãoparaanovaversãodoFLUIG.chart-BreakingChange:Somenteumeventoparatodososgráficos., highlighter_918091, AtualizaçãoparaanovaversãodoFLUIG.chart-Breakingchange:Novaestruturadedatasetsparaalgunsgráficos, highlighter_931546, AtualizaçãoparaanovaversãodoFLUIG.chart-Breakingchange:Propriedadesremovidasnaestruturadodataset., highlighter_294758, AtualizaçãoparaanovaversãodoFLUIG.chart-Breakingchange:Mudançaparaadicionar,removerouatualizardadosnosgráficos., highlighter_338086, AtualizaçãoparaanovaversãodoFLUIG.chart-Alteraçõesporgráfico:, AtualizaçãoparaanovaversãodoFLUIG.chart-GráficodotipoLine, AtualizaçãoparaanovaversãodoFLUIG.chart-GráficodotipoBarouHorizontalBar, AtualizaçãoparaanovaversãodoFLUIG.chart-GráficodotipoRadar, AtualizaçãoparaanovaversãodoFLUIG.chart-GráficodotipoPolar, AtualizaçãoparaanovaversãodoFLUIG.chart-GráficodotipoPieeDoughnut -->
