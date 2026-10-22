---
title: "Dicas e truques para criar portais no TOTVS Fluig"
url: "https://tdn.totvs.com/display/public/fluig/Dicas+e+truques+para+criar+portais+no+TOTVS+Fluig"
scraped_at: "2026-03-09T04:56:07.331Z"
depth: 3
anchors: 38
child_links: 44
---

# Dicas e truques para criar portais no TOTVS Fluig

Esta documentação foi elaborada com o objetivo de detalhar as melhores práticas, dicas e truques apresentados na sessão **“Aprimore seu código! Dicas e truques para criar portais no TOTVS Fluig”**, realizada durante o **Universo TOTVS 2025**.

O material visa apoiar desenvolvedores na criação de portais modernos, seguros e alinhados com os padrões da plataforma TOTVS Fluig. Aqui você encontrará explicações aprofundadas sobre cada dica apresentada na palestra, exemplos práticos e orientações para aplicar esses conhecimentos no seu dia a dia.

### Utilize sempre os componentes do Style Guide para o desenvolvimento de suas widgets

O Style Guide é o guia de estilos oficial do TOTVS Fluig, contendo mais de 70 componentes para uso, contando com uma documentação rica em exemplos práticos de implementação.

Sua estrutura de grid system foi projetada para tornar o layout responsivo, garantindo a melhor visualização em diferentes dispositivos e resoluções.

Além de acelerar e simplificar o desenvolvimento de recursos na plataforma, o Style Guide padroniza o layout das páginas e recursos desenvolvidos, facilitando o uso diário por diversas áreas da empresa.

O Style-Guide é utilizado pelo time de desenvolvimento do TOTVS Fluig e desta forma, está sempre em constante atualização com novas funcionalidades e componentes.

Veja um exemplo de componente contido na documentação

Observação técnica: Sempre englobar sua implementação HTML em uma div principal com a classe fluig-style-guide 

[?](#)

| ```````` |
| --- |

Sua documentação oficial pode ser acessada através do link: [https://style.fluig.com](https://style.fluig.com)

### Utilize o Grid System do Style Guide para atender a responsividade do layout

Como citado anteriormente, o **Style Guide** contempla o que chamamos de **Grid System**, uma técnica de desenvolvimento que facilita a implementação de um layout **responsivo**que atenda diferentes dispositivos e resoluções mantendo a interface com uma boa visualização.

Através do uso de classes css é possível definir a largura que determinado componente irá ocupar da tela de acordo com a resolução do dispositivo em que será renderizado. Além disso, é possível detalhar a largura do componente de acordo com o dispositivo utilizado.

| col-xs (Extra Small) | < 768px  | Telefones móveis |
| --- | --- | --- |
| col-sm (Small) | ≥ 768px | Tablets e telefones grandes |
| col-md (Medium) | ≥ 992px | Computadores de mesa e laptops |
| col-lg (Large) | ≥ 1200px  | Computadores de mesa com telas grandes (monitores) |

Para maior detalhamento sobre o Grid System, consulte a documentação oficial no Style-Guide: [Fluig Style-Guide | Grid System](https://style.fluig.com/css.html#grid)

### Evite CSS customizado desnecessário e use classes helpers

O **Fluig Style Guide** oferece uma série de classes helpers pré-definidas para controle de espaçamentos, alinhamentos, cores e estruturação. Ao usar essas classes:

- Você garante que sua interface estará **alinhada ao padrão visual da TOTVS**;
- Facilita a **manutenção e evolução** do portal;
- Reduz a chance de gerar inconsistências no layout;
- Evita inflar o CSS com regras repetidas ou desnecessárias.

Ao invés de criar um CSS próprio para alinhar e espaçar elementos, use as classes helpers que já existem no Style Guide, como:

[?](#)

| `````Atenção!````Uma mensagem para o usuário!``` |
| --- |

### Caso precisar criar um arquivo CSS: Use a classe da widget como escopo no CSS

Quando você define o CSS usando a classe raiz da sua widget como escopo, você:

- **Isola o estilo da widget**, evitando que ele afete outros elementos da página ou de outras widgets;
- **Protege o layout** de ser sobrescrito por estilos globais ou de outras widgets;
- Garante que o CSS seja aplicado **apenas onde deve**.

[?](#)

| `.my-widget .header {````...``}` |
| --- |

### Utilize variáveis CSS para identidade visual

Variáveis CSS permitem:

- Manter uma **identidade visual consistente** em toda a interface;
- Fazer **alterações globais rápidas**, como mudar uma cor ou um espaçamento, ajustando apenas um valor no lugar central;
- Tornar o código CSS mais legível e fácil de dar manutenção.

[?](#)

| `.my-widget .header {````background-color: var(--fs-color-neutral-light-00);````color: var(--fs-color-neutral-dark-90);``}` |
| --- |

### Cuidado com a área de toque e com o posicionamento das ações no desenvolvimento de interfaces

Se a solução desenvolvida for utilizada frequentemente no aplicativo do TOTVS Fluig, ou até mesmo no navegador mobile, é essencial considerar cuidadosamente o posicionamento dos elementos HTML na interface durante o desenvolvimento. Ou seja, os componentes devem estar posicionados de maneira que facilite a área de clique do usuário.

Trata-se também de um quesito de acessibilidade. Se os componentes não estiverem bem posicionados, pessoas com algum tipo de deficiência ou limitação motora, podem enfrentar dificuldades ainda maiores se as áreas de toque não forem adequadas.

Além disso, um posicionamento cuidadoso das ações pode ajudar a evitar erros acidentais, garantindo que os usuários selecionem a opção desejada com facilidade.

Para informações mais detalhadas sobre o desenvolvimento mobile, consulte as documentações oficiais relacionadas ao desenvolvimento de formulários e widgets com foco no aplicativo do TOTVS Fluig.

Desenvolvimento de formulários: [Desenvolvimento de formulário mobile - TOTVS Fluig - TDN](https://tdn.totvs.com/pages/releaseview.action?pageId=146181573)

Desenvolvimento de widgets: [Desenvolvimento de widgets mobile - TOTVS Fluig - TDN](https://tdn.totvs.com/display/public/fluig/Desenvolvimento+de+widgets+mobile)

### Busque incluir os atributos de acessibilidade em seus códigos

Os atributos de **acessibilidade**no desenvolvimento de interfaces desempenham um papel crucial, pois facilitam o acesso a conteúdos digitais para pessoas com deficiências visuais, auditivas, motoras ou cognitivas.

Além disso, aprimoram a **experiência**geral do usuário, tornando o site mais navegável e compreensível para todos, incluindo idosos e pessoas com limitações temporárias.

Construir componentes e páginas com atributos de acessibilidade demonstra um **compromisso**com a inclusão e a diversidade, uma prática ética e socialmente responsável para qualquer organização e indivíduo.

Veja abaixo, alguns dos principais atributos

**role (Papel de acessibilidade)**

Define o papel de um elemento na interface de usuário.

[?](#)

| `Menu` |
| --- |

**aria-label (Etiqueta acessível)**

Fornece um rótulo a elementos interativos que não possuem um texto visível.

[?](#)

| `X` |
| --- |

**alt (Texto alternativo para imagens)**

Descrição textual das imagens para leitores de tela.

[?](#)

| `` |
| --- |

**aria-hidden (Conteúdo oculto)**

Especifica que um elemento é invisível para leitores de tela.

[?](#)

| `Este conteúdo é oculto.` |
| --- |

### Sempre faça integrações com APIs de forma assíncrona

Primeiramente, precisamos compreender a diferença entre uma requisição síncrona e assíncrona

**Síncrona:**Em uma chamada síncrona, o código é executado de maneira sequencial e linear. Isto significa que a execução da próxima linha de código só começa depois que a chamada atual é finalizada

**Assíncrona**: Em uma chamada assíncrona, o código não espera pela conclusão da chamada atual para continuar sua execução. O controle é imediatamente retornado ao thread principal, permitindo que outras operações continuem executando.

Requisições assíncronas geram benefícios tanto do lado técnico quanto ao lado da experiência do usuário.

Vamos conferir algumas vantagens em implementar chamadas assíncronas?

**Evitar Bloqueio da Interface do Usuário**

Se você fizer chamadas síncronas a uma API, o JavaScript bloqueará a execução até que a resposta da API seja recebida. Isso na prática impede o uso da aplicação, bloqueando qualquer interação, como cliques ou digitação, até que a chamada seja concluída.

**Melhor Desempenho e Experiência do Usuário**

Interações assíncronas permitem que o navegador continue a processar outras tarefas enquanto espera pela resposta da API. Isso resulta em uma experiência de usuário mais efetiva e interativa, sem travamentos ou qualquer impedimento no uso de outros recursos.

**Melhor Manipulação de Erros**

As operações assíncronas permitem um trabalho mais efetivo com possíveis erros. Promises e async/await fornecem maneiras claras e estruturadas para capturar e lidar com erros, como falhas de rede ou respostas inválidas, sem bloquear a execução do restante do código.

### Priorize integrações com Datasets de forma assíncrona

**O que é um dataset no TOTVS Fluig?**

A plataforma Fluig permite disponibilizar informações provindas de várias fontes de dados através de formas variadas de apresentação, dependendo da necessidade de cada cliente. Esse recurso é atendido pelo componente Dataset, que padroniza o acesso às informações, independente da origem dos dados.

Assim como nas chamadas para APIs, os datasets do TOTVS Fluig também devem ser consultados de forma assíncrona. Isto porque uma das responsabilidades de um dataset é retornar um conjunto de informações, que dependendo da quantidade de itens a serem retornados, pode gerar uma demora na finalização da consulta. Então porque não utilizar dos benefícios de uma chamada assíncrona quando o assunto é dataset?

Para conhecer mais sobre o desenvolvimento de datasets avançados no Fluig, consulte a documentação oficial: [Desenvolvimento de datasets avançados no TOTVS Fluig](https://tdn.totvs.com/pages/releaseview.action?pageId=412888219)

### Faça chamadas simultâneas em paralelo para não prejudicar a performance

O uso do **Promise.all** permite realizar chamadas simultâneas em paralelo, facilitando a performance no desenvolvimento web.

[?](#)

| `async callMultiple() {````const resultados = await Promise.all({````$.ajax({````url:``''````}),````$.ajax({````url:``''````})````});``}` |
| --- |

Por quais motivos devo utilizar o Promise.all?

**Redução do Tempo Total de Espera**

Quando várias requisições assíncronas são iniciadas ao mesmo tempo e executadas em paralelo, o tempo total de execução diminui, uma vez que as requisições são realizadas em conjunto, ao invés de serem executadas de maneira individual com um tempo de resposta para cada uma das chamadas. Isto tem um impacto significativo no carregamento de uma página ou na resposta de uma ação feita pelo usuário.

**Melhoria na Experiência do Usuário**

Com a execução paralela, os dados necessários para renderizar uma página ou completar uma ação do usuário são obtidos mais rapidamente. Isso proporciona uma experiência de usuário mais fluida e eficiente.

**Facilidade de Manutenção e Escalabilidade**

Chamadas em paralelo facilitam a manutenção do código, pois a lógica de tratamento de erros e o fluxo de execução ficam centralizados. Isso torna o código mais legível e escalável.

### Sempre faça tratamento de erros e melhore a experiência do usuário com exceções

O tratamento de erros é essencial no mundo da programação. O desenvolvimento de uma solução nunca deve ser projetado pensando unicamente no cenário de sucesso, ou melhor dizendo, o objetivo final de uma regra de negócio. Na prática, o funcionamento de uma aplicação se dá por meio de diversos fatores como infraestrutura, conexão de rede, conhecimento do usuário, combinação de dados, dentre outros. Todos esses elementos podem causar falhas ou cenários não esperados por quem faz o uso de um determinado recurso. 

Por este motivo, o código fonte deve possuir um tratamento de erros inteligente, identificando falhas mais comuns como a falta de informações suficientes para um processamento ou baixa conexão, até erros mais genéricos que não foram pensados durante o desenvolvimento ou que de fato não são esperados na prática.

**E na prática, como funciona…?**

Vamos analisar o código fonte abaixo

Na função processarDados verificamos se os dados recebidos como parâmetro são realmente válidos, e caso não sejam, será retornado um erro com a mensagem *Dados inválidos*.

Ao chamar a função processarDados, caso ela seja executada com sucesso será exibido um alerta com o resultado de seu processamento (função de callback then). Caso contrário, será apresentado um alerta ao usuário com uma breve descrição do erro (função de callback catch).

[?](#)

| `const processarDados = (dados) => {````return` `new` `Promise((resolve, reject) => {````if` `(!dados) {````reject(``new` `Error(``"Dados inválidos"``));````}``else` `{````// Aqui fica a lógica a ser processada````// Exemplo: processamento fictício````const resultado = dados.map(item => item * 2);````resolve(resultado);````}````});``};``// Exemplo de uso da função``const dados = [1, 2, 3, 4];` `processarDados(dados)````.then(resultado => {````alert(resultado);``// Output: [2, 4, 6, 8]````})````.``catch``(erro => {````alert(``"Ocorreu um erro:"``, erro.message);````});` |
| --- |

Desta forma, o usuário ficará ciente do que realmente ocorreu durante o uso do sistema.

### Sempre habilite “Strict mode” em seus códigos JavaScript

O Strict Mode é uma funcionalidade do JavaScript que introduz um conjunto de regras mais rígidas para o interpretador de linguagem seguir durante a execução do código. Isso ajuda a evitar erros comuns e a promover boas práticas na codificação.

Mas afinal, por que devo utilizar o Strict Mode?

**Facilidade de implementação**

Para habilitar o Strict Mode em seu código javascript, basta no início do arquivo aplicar o seguinte trecho de código

[?](#)

| `'use strict'``;` |
| --- |

**Identificação de erros silenciosos**

O strict mode ajuda a identificar e lançar erros em tempo de desenvolvimento para práticas de programação que podem levar a bugs que seriam identificados apenas na execução do código a nível de usuário, o que chamamos de erros silenciosos. Por exemplo, atribuir valores a variáveis não declaradas resultará em um erro ao invés de criar uma nova variável de maneira informal

**Melhoria da Legibilidade e Manutenção**

O strict mode promove boas práticas de desenvolvimento, como declarar variáveis antes de usá-las, o que pode melhorar a legibilidade do código e facilitar sua manutenção. 

**Preparação para o Futuro**

O strict mode desativa o uso de palavras-chave reservadas para possíveis futuras versões do JavaScript, ajudando a garantir que o código seja mais compatível com versões futuras da linguagem.

### Utilize a sempre a última versão da linguagem (ES6+)

Existem diversas vantagens no uso da última versão da linguagem Javascript. O ES6 possui diversas features que versões antigas da linguagem, como o ES5, não contemplam.

Confira abaixo algumas features de versões mais recentes da linguagem

**Novos Recursos e Sintaxe Melhorada**

**Arrow Functions:** Proporcionam uma sintaxe mais curta e clara para funções.

[?](#)

| `const soma = (a, b) => a + b;` |
| --- |

**Template Literals:** Facilitam a criação de strings complexas com interpolação de variáveis.

[?](#)

| `const nome =``"João"``;``console.log(`Olá, ${nome}!`);` |
| --- |

**Desestruturação:** Permite extrair dados de arrays ou objetos de forma mais concisa.

[?](#)

| `const [a, b] = [1, 2];``const { nome, idade } = pessoa;` |
| --- |

**Melhoria no Gerenciamento de Promises**

**Async/Await:** Facilita o trabalho com código assíncrono, tornando-o mais legível e parecido com código síncrono.

[?](#)

| `const fetchData = async () => {````try` `{````const response = await fetch(``'url'``);````const data = await response.json();````console.log(data);````}``catch` `(error) {````console.error(``'Erro:'``, error);````}``};` |
| --- |

**Desempenho e Eficiência**

**Novas APIs e Melhores Implementações:** Melhorias no motor de JavaScript dos navegadores resultam em código que executa de maneira mais eficiente.

**Melhorias de Performance:** Recursos como Map e Set oferecem implementações de alta performance para estruturas de dados comumente usadas.

**Manutenção e Escalabilidade**

**Código Mais Limpo e Legível:** Sintaxe moderna torna o código mais fácil de ler e manter.

**Segurança**

**Correções de Bugs e Vulnerabilidades:** Versões mais novas frequentemente corrigem problemas de segurança que podem estar presentes em versões anteriores da linguagem.

### Utilize WCMAPI.fireEvent para comunicação entre widgets.

É comum termos **múltiplas widgets em uma mesma página**, cada uma com funções distintas, mas que, em determinados momentos, precisam se comunicar. O "`WCMAPI.fireEvent"` foi criado exatamente para facilitar essa comunicação, de forma **desacoplada e segura**.

Diferente de manipulações diretas no DOM ou uso de variáveis globais, o "`WCMAPI.fireEvent"` permite que widgets emitam e escutem eventos personalizados, **sem gerar dependências diretas entre elas**. Isso torna a arquitetura do portal mais modular e facilita a manutenção e evolução do código.

**Como funciona?**

- Um widget pode **emitir um evento** com o `WCMAPI.fireEvent`, informando o nome do evento e um objeto de dados.
- Outra widget pode **escutar esse evento** usando o `WCMAPI.addListener`, e então reagir à informação enviada.

[?](#)

| `WCMAPI.fireEvent(``'MY_EVENT'``, { message:``'Tarefa finalizada'` `});` |
| --- |

[?](#)

| `WCMAPI.addListener(``this``,``'MY_EVENT'``, (evName, data) => {````console.log(data.message);``});` |
| --- |

### Habilite sempre o suporte ao aplicativo My Fluig pela sua widget no application.info

Ao desenvolver uma widget, é essencial conhecer o arquivo **application.info**. Este arquivo possibilita uma série de parametrizações essenciais para o funcionamento da widget. Um dos parâmetros mais comuns é o **application.mobileapp**que permite habilitar ou desabilitar o suporte da widget ao **aplicativo My Fluig.**

[?](#)

| `application.mobileapp=false` |
| --- |

Esse parâmetro faz com que no modo edição de uma página, seja exibida uma opção na widget onde o usuário pode definir se aquela widget será visível no aplicativo ou não

Conheça mais sobre o desenvolvimento de widgets e outras propriedades importantes do application info

[Desenvolvimento de widgets e Layouts](https://tdn.totvs.com/pages/releaseview.action?pageId=113803693)

[Propriedades do arquivo application.info](https://tdn.totvs.com/display/public/fluig/Arquivo+application.info)

### Segurança com DOMPurify: Proteção contra XSS

Em aplicações web  é comum exibir conteúdos fornecidos por usuários (ex.: comentários, campos de formulários, informações vindas de APIs externas). Esses conteúdos podem conter códigos maliciosos inseridos intencionalmente (ou até por descuido), que, ao serem renderizados no navegador, podem gerar ataques do tipo **XSS (Cross-Site Scripting)**.

O **DOMPurify** é uma biblioteca leve e eficiente projetada para **sanitizar HTML**, removendo qualquer elemento ou atributo potencialmente perigoso antes que ele seja inserido no DOM. Isso impede a execução de scripts não autorizados e protege seus usuários e o próprio ambiente TOTVS Fluig.

#### Enviando dados para a API (POST)

Antes de enviar dados coletados de inputs, sanitize:

[?](#)

| `// POST``saveData: async``function``() {````const dataValue = document.querySelector(``'#input-text'``).value;` ```await fetch(``''``, {````method:``'POST'``,````headers: {````'Content-Type'``:``'application/x-www-form-urlencoded'````},````body:``new` `URLSearchParams({````value: DOMPurify.sanitize(dataValue)````})````});``}` |
| --- |

#### Exibindo dados da API (GET)

Antes de exibir na página, sanitize:

[?](#)

| `// GET``getData: async``function``() {````const response = await fetch(``''``, {````method:``'GET'````});` ```const result = await response.json();` ```// dado retornado do backend sanitizado````const cleanValue = DOMPurify.sanitize(result);``}` |
| --- |


<!-- anchors: DicasetruquesparacriarportaisnoTOTVSFluig-UtilizesempreoscomponentesdoStyleGuideparaodesenvolvimentodesuaswidgets, highlighter_166543, DicasetruquesparacriarportaisnoTOTVSFluig-UtilizeoGridSystemdoStyleGuideparaatenderaresponsividadedolayout, DicasetruquesparacriarportaisnoTOTVSFluig-EviteCSScustomizadodesnecessárioeuseclasseshelpers, highlighter_190235, DicasetruquesparacriarportaisnoTOTVSFluig-CasoprecisarcriarumarquivoCSS:UseaclassedawidgetcomoescoponoCSS, highlighter_175400, DicasetruquesparacriarportaisnoTOTVSFluig-UtilizevariáveisCSSparaidentidadevisual, highlighter_849043, DicasetruquesparacriarportaisnoTOTVSFluig-Cuidadocomaáreadetoqueecomoposicionamentodasaçõesnodesenvolvimentodeinterfaces, DicasetruquesparacriarportaisnoTOTVSFluig-Busqueincluirosatributosdeacessibilidadeemseuscódigos, highlighter_964235, highlighter_394947, highlighter_850527, highlighter_993139, DicasetruquesparacriarportaisnoTOTVSFluig-SemprefaçaintegraçõescomAPIsdeformaassíncrona, DicasetruquesparacriarportaisnoTOTVSFluig-PriorizeintegraçõescomDatasetsdeformaassíncrona, DicasetruquesparacriarportaisnoTOTVSFluig-Façachamadassimultâneasemparaleloparanãoprejudicaraperformance, highlighter_335637, DicasetruquesparacriarportaisnoTOTVSFluig-Semprefaçatratamentodeerrosemelhoreaexperiênciadousuáriocomexceções, highlighter_435613, DicasetruquesparacriarportaisnoTOTVSFluig-Semprehabilite“Strictmode”emseuscódigosJavaScript, highlighter_709457, DicasetruquesparacriarportaisnoTOTVSFluig-Utilizeasempreaúltimaversãodalinguagem(ES6+), highlighter_92464, highlighter_93365, highlighter_210774, highlighter_258765, DicasetruquesparacriarportaisnoTOTVSFluig-UtilizeWCMAPI.fireEventparacomunicaçãoentrewidgets., highlighter_719198, highlighter_446427, DicasetruquesparacriarportaisnoTOTVSFluig-HabilitesempreosuporteaoaplicativoMyFluigpelasuawidgetnoapplication.info, highlighter_483427, DicasetruquesparacriarportaisnoTOTVSFluig-SegurançacomDOMPurify:ProteçãocontraXSS, DicasetruquesparacriarportaisnoTOTVSFluig-EnviandodadosparaaAPI(POST), highlighter_917776, DicasetruquesparacriarportaisnoTOTVSFluig-ExibindodadosdaAPI(GET), highlighter_335164 -->
