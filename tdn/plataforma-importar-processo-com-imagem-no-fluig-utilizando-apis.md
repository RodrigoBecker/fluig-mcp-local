---
title: "Plataforma ❙ Importar processo com imagem no Fluig utilizando APIs"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=699193954"
scraped_at: "2026-03-09T05:14:50.528Z"
depth: 3
anchors: 18
child_links: 63
---

# Plataforma ❙ Importar processo com imagem no Fluig utilizando APIs

# Objetivo

---

O objetivo deste guia é demonstrar as formas de importar um processo, utilizando APIs, para que o Fluig exiba corretamente a imagem do fluxo do processo.

# Falando da imagem do processo no Fluig

---

A imagem do fluxo do processo que é exibida na movimentação de solicitações não é gerada pelo *back-end* do Fluig. Os modeladores web e do Fluig Studio, ao liberarem uma nova versão do processo enviam também a imagem no formato SVG (*Scalable Vector Graphics*).

Caso a importação de um processo seja realizado sem o envio da imagem, o Fluig exibirá a mensagem “*Não foi possível exibir o fluxo do processo*” na página de movimentação de processos. 

# Pré-requisitos

---

Para executar os passos desse guia, é necessário:

- O Fluig Plataforma deve estar na atualização 1.7.0-200608 ou superior;

- Ter o [Fluig Studio instalado](https://tdn.totvs.com/pages/viewpage.action?pageId=73078179);

- Ser um usuário administrador;

- Obter o arquivo XML do processo;

- Obter o arquivo SVG com o fluxo do processo.

# Obtendo o arquivo XML  e o SVG do processo

---

O XML e a imagem SVG do processo ficam disponíveis na pasta “\workflow\.resources”, na workspace do Fluig Studio. Para que a imagem SVG seja gerada automaticamente a cada alteração no processo, é necessário alterar as configurações do Fluig Studio. Para isso, siga os passos a seguir:

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)
- [Passo 4](#)
- [Passo 5](#)

 - Acesse **Window**, em seguida clique na opção **Preferences**:

![](/download/attachments/699193954/Passo%201.JPG?version=2&modificationDate=1658341039727&api=v2)

 - Localize o agrupador **Fluig,** expanda as configurações de salvamento e clique em **Save**:

![](/download/attachments/699193954/Passo%202.JPG?version=2&modificationDate=1658327985583&api=v2)

 - Após concluir o passo 2, marque a opção **Automaticamente salvar para o formato SVG quando salvar o diagrama**: 

![](/download/attachments/699193954/Passo%203.JPG?version=2&modificationDate=1658328622250&api=v2)

 - Reinicie o Fluig Studio.

 - Após reiniciar o Fluig Studio, ao alterar e salvar um processo no mesmo, o arquivo SVG estará disponível na pasta **.resources**, além do arquivo XML:

![](/download/attachments/699193954/Passo%205.JPG?version=1&modificationDate=1658328799587&api=v2)

# Enviando o fluxo do processo no caso da API pública

---

A imagem do fluxo do processo pode ser enviada de duas formas utilizando API REST:

- enviar o SVG separadamente, após importação do processo (**recomendado**);

- adicionar o SVG no XML do processo (**avançado**).

Observe abaixo os passos para cada uma delas.

## Enviar o SVG separadamente (recomendado)

---

Esse método é mais simples e não requer manipulação do arquivo XML do processo. Para isso siga os passos a seguir:

**01.**Efetue a importação do processo utilizando a API [/v2/processes/import/xml](https://api.fluig.com/latest/process-management/swagger-ui/#/Processes/importNewProcess), informando corretamente os parâmetros necessários segundo o Swagger.

**02.**Após a importação com sucesso do processo desejado, envie a imagem SVG utilizando a API [/v2/processes/{processId}/process-versions/{processVersion}/diagram](https://api.fluig.com/latest/process-management/swagger-ui/#/Processes/updateProcessVersionSVG) seguindo os parâmetros detalhados no Swagger.

## Adicionar o SVG no XML do processo (avançado)

---

Nesse método, é necessário incluir o conteúdo do arquivo SVG do fluxo no XML do processo. Para isso siga os passos a seguir:

**01.** Abra o arquivo XML do processo no editor de texto de sua preferência.

**02.** Antes do fechamento da tag “ProcessDefinitionVersion”, inclua a tag “processDiagram”:

EXEMPLO

[?](#)

| ```` `````` |
| --- |

**03.** Na tag “processDiagram” deve ser informado o conteúdo do arquivo SVG. Para isso, basta abrir o arquivo SVG no editor de texto de sua preferência e copiar todo o conteúdo. 

EXEMPLO

[?](#)

| ```` ```` ``` `...``` ```` `````` |
| --- |

Importante!

Ao utilizar esse método são necessários alguns cuidados:

- realizar o [processo de escape](https://pt.wikipedia.org/wiki/Caractere_de_escape) do conteúdo do arquivo SVG antes de incluir na tag “processDiagram” do XML do processo;

- após a inclusão da tag, garantir que o arquivo XML é um XML válido (evitar tags abertas, XML mal formado, etc);

- no editor de texto utilizado, verificar se a codificação está configurada para UTF-8. Caso seja utilizada outra codificação, o processo importado não exibirá corretamente caracteres especiais, por exemplo, acentuação, etc.

# No SOAP

---

No SOAP /webdesk/ECMWorkflowEngineService?wsdl, pode ser usado um dos métodos **importProcess** (seja somente o processo ou com formulário) informando a imagem no formato SVG na tag *attachments*, marcando como anexo e como não principal.

EXEMPLO

[?](#)

| `````````true````false````svgaqui``````` |
| --- |

Importante!

O conteúdo do arquivo SVG deve ser enviado em **bytes**.

# Gerar a imagem pelo Painel de controle

---

Essa é a forma mais simples, porém, é limitada à processos que também possam ser editados pela web. É recomendada para processos antigos ou que foram migrados a partir do TOTVS ECM 3.0. ![](/plugins/servlet/confluence/placeholder/unknown-macro?name=tooltip&locale=en_US&version=2)

**01.** No menu principal, clique em ![](/download/attachments/699193954/%C3%ADcone-painel-de-controle.png?version=1&modificationDate=1750420644167&api=v2) **Painel de controle**.

**02**. Localize o agrupador **Parâmetros técnicos**.

**03**. Clique em ![](/download/attachments/699193954/%C3%ADcone-gerador-imagem-processo.png?version=1&modificationDate=1750420644840&api=v2) **Gerador de imagem de processo**.

**04.** Clique em **Gerar diagramas** para gerar a imagem do processo para solicitações em aberto que ainda não a possuem.

**05.** Na mensagem exibida, clique em **Ok**.

Acesse nossa documentação e saiba mais sobre o recurso [Gerador de imagem de processo](https://tdn.totvs.com/x/Xyg-Dg) no TOTVS Fluig.

Esta documentação é válida a partir da atualização **Voyager (2.0)**. Se você utiliza uma atualização anterior, ela pode conter informações diferentes das quais você vê na sua plataforma.


<!-- anchors: Plataforma❙ImportarprocessocomimagemnoFluigutilizandoAPIs-Objetivo, Plataforma❙ImportarprocessocomimagemnoFluigutilizandoAPIs-FalandodaimagemdoprocessonoFluig, Plataforma❙ImportarprocessocomimagemnoFluigutilizandoAPIs-Pré-requisitos, Plataforma❙ImportarprocessocomimagemnoFluigutilizandoAPIs-ObtendooarquivoXMLeoSVGdoprocesso, Passo1, Passo1-872616687, Passo1-872616688, Passo1-872616689, Passo1-872616690, Passo1-872616691, Plataforma❙ImportarprocessocomimagemnoFluigutilizandoAPIs-EnviandoofluxodoprocessonocasodaAPIpública, Plataforma❙ImportarprocessocomimagemnoFluigutilizandoAPIs-EnviaroSVGseparadamente(recomendado), Plataforma❙ImportarprocessocomimagemnoFluigutilizandoAPIs-AdicionaroSVGnoXMLdoprocesso(avançado), highlighter_677652, highlighter_783316, Plataforma❙ImportarprocessocomimagemnoFluigutilizandoAPIs-NoSOAP, highlighter_482645, Plataforma❙ImportarprocessocomimagemnoFluigutilizandoAPIs-GeraraimagempeloPaineldecontrole -->
