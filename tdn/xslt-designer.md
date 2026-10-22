---
title: "XSLT Designer"
url: "https://tdn.totvs.com/display/public/fluig/XSLT+Designer"
scraped_at: "2026-03-04T03:35:35.669Z"
depth: 4
anchors: 8
child_links: 33
---

# XSLT Designer

# Índice

# Objetivo

---

O objetivo XSLT Designer é facilitar o mapeamento entre padrões de arquivos XML de entrada e saída. Trata-se de um mapeador gráfico que visa facilitar a transformação de uma mensagem XML para outro XML através de um arquivo especial cujo formato é XSL.

As mensagens XML utilizadas para integrações de sistemas possuem padrões diferentes e o *schema* (formato .XSD) também é diferente para cada sistema. Com o mapeador, é possível definir a transformação de uma mensagem de entrada adequando aos padrões exigidos pelo sistema destino.

# Criação

---

O resultado da utilização dessa ferramenta é um arquivo de transformação cuja extensão é .XSL para ser utilizado pelo componente [Transformer](https://tdn.totvs.com/display/fluig/Transformer) no Fluig ESB Editor. Para criar um arquivo XSL tem-se abaixo os procedimentos.

- Acessar o menu principal **File**, item **New** e subitem **XSL Map**.
- Aparecerá uma janela com os seguintes campos que deverão ser preenchidos

| Campo | Descrição |
| --- | --- |
| Campo | Descrição |
| Enter or select the parent folder | Deve-se selecionar o projeto e o diretório de armazenamento do arquivo que será gerado. |
| File name | Nome do arquivo de transformação com a extensão .xsl que deverá ser único em todo o projeto. |

- Após preencher as informações clicar no botão **Finish**.

Após finalizar a criação do **XSL Map** será aberta a interface do **XSLT Designer**, esta divide-se em três áreas distintas: barra de botões (superior), mapeador gráfico (centro) e painel inferior. Cada área será explanado a seguir.

### Barra de botões

Os botões estão dispostos obedecendo a ordem da tabela abaixo.

| Botão | Descrição |
| --- | --- |
| Botão | Descrição |
| Show XSLT Mapper | Exibe/retorna a visão do mapeador visual do XSLT Designer. |
| Create XSLT | Cria e exibe o mapa XSLT com base no mapeador visual. |
| Simulate XSLT Transform | Simula a transformação XSLT. Solicita ao usuário para informar um arquivo XML de entrada e executa a transformação gerando um XML conforme o leiaute de saída. |
| Change XML Input (Simulate) | Possibilita alterar o XML de entrada da simulação. |

### Painel Global Variables

O painel Global Variables permite criar variáveis globais para serem utilizadas nos atributos "select" e "value-of" dos elementos customizados no "Grid XSLT Elements". Para adicionar uma variável global tem-se abaixo os procedimentos.

- Clicar no botão **Add**, do painel **Global Variables**.
- Aparecerá uma janela com os seguintes campos que deverão ser preenchidos

| Campo | Descrição |
| --- | --- |
| Campo | Descrição |
| Name | Preencher com o nome desejado para a variável global |
| Select | Preencher com o valor que deve estar contido na variável criada |

- Após preencher as informações clicar no botão** OK**.

Ao remover uma variável global é necessário "sempre" revisar os elementos XSLT customizados que a utilizam, no "Grid XSLT Elements".

# Mapeador Gráfico

---

No painel central tem-se o mapeador gráfico utilizado para ligar os elementos estruturais entre duas estruturas, podendo ser XSD ou XML. O painel à esquerda define a estrutura origem e o painel à direito define a estrutura destino.

Para iniciar os procedimentos de mapeamento, deve-se clicar com o botão direito no painel à esquerda. Um menu com os itens abaixo permitirá a escolha entre XML e XSD.

| Item | Descrição |
| --- | --- |
| Item | Descrição |
| Abrir arquivo XSD... | Abrirá um arquivo em formato XSD para realizar o mapeamento. Nessa opção, o usuário poderá selecionar qual elemento interno do arquivo será o elemento raiz para o mapeador. |
| Abrir arquivo XML... | Abrirá um arquivo em formato XML para realizar o mapeamento. |

Após a seleção do arquivo, será criada uma estrutura de elementos (tags) copiando a estrutura existente no arquivo selecionado. O mesmo procedimento deverá ser adotado para o painel à direita, porém, selecionando o arquivo que define a estrutura destino da transformação.

Observa-se que as estruturas de origem e de destino estão carregadas e prontas para realizar o devido mapeamento. Os itens possíveis de mapeamento estão listados a seguir.

- **e** - são elementos (tags) da estrutura
- **@** - são os atributos dos elementos

Para realizar o mapeamento dos itens, deve-se clicar em um elemento/atributo no painel esquerdo e após clicar em um elemento no painel direito. Será desenhado na tela uma linha indicando que o nó do painel origem está relacionado ao nó do painel destino. Isso significa que o valor contido dentro do elemento/atributo origem será aplicado no elemento/atributo destino. É possível existir vários elementos/atributos destino para cada origem.

### Painel Inferior

O painel possui três abas distintas: **Properties**, **View** e **Errors**. A aba **Properties** permite configurar as propriedades para cada elemento/atributo de entrada. Essas propriedades se referem as ligações existentes e as operações realizadas no valor do elemento/atributo selecionado conforme listado abaixo.

- **Input XPath**: Demonstra o elemento no formato XPath do elemento selecionado.
- **Output XPath**: Lista todos os elementos/atributos de saída relacionados (ligados) ao elemento selecionado.
- **XSLT Elements**: Lista todos elementos XSLT aplicados sobre o elemento/atributo de entrada.

Ainda nessa aba, permite ao usuário adicionar operações aplicados sobre os elementos/atributos cujo resultado são direcionados ao elemento/atributo destino. Para acrescentar alguma operação de transformação sobre os nós de estrutura origem deve-se seguir os passos abaixo. Ao finalizar será adicionado um item na tabela **XSLT Elements  **indicando a operação de transformação realizada.

1. Na tabela **Output ****XPath **clicar com o botão direito sob o item desejado.
2. Selecionar o item Adicionar elementos XSLT... que abrirá uma caixa de diálogo com os seguintes campos:
| Campo | Descrição |
| --- | --- |
| Campo | Descrição |
| Operation | Identifica a operação XSLT que será realizada sobre o elemento origem. É possível uma das operações abaixo:xsl:if: É utilizado para realizar um teste de conteúdo XML origem antes de adicionar ao elemento destino.xsl:choose: Utilizado para realizar múltiplos teste de conteúdo XML origem antes de adicionar ao elemento destino. Semelhante ao xsl:if porém possibilita vários testes de conteúdo XML origem.xsl:for-each: Identifica uma ação de iteração sobre um elemento origem.xsl:value-of: Serve para extrair o valor do elemento XML origem e adicionar como valor no elemento destino.xsl:variable: Configura uma variável para realizar operações XSLT.xsl:text: Configura um texto a ser utilizado como valor no elemento/atributo destino.xsl:element: Adiciona um novo elemento abaixo do elemento destino.xsl:atribute: Adiciona um atributo com um valor especificado para o elemento destino.xsl:formatdate: Permite formatação de data em formato desejado. |
| Test | Habilitado somente em operações de condição, identifica algum elemento da estrutura origem para realizar as operações. |
| Condition | Habilitado somente em operações de condição, permite a seleção do teste a ser realizado. |
| Valor | Valor final para o elemento de saída. Esse campo poderá conter outro elemento XML de entrada. |
3. Clicar no botão **Confirmar** para adicionar a operação.

A aba **View** possibilita a visualização do resultado da transformação e da estrutura XSLT. Ao clicar no botão **Gerar** situado na barra de botões, será visualizado o resultado do mapeador em formato XSLT. Clicando no botão **Transformar** e selecionando um arquivo XML para testes, será visualizado nessa aba o resultado da transformação em formato XML.

Na aba **Errors** serão visualizados todos os erros de parser ocorridos nos processos de transformação e geração do mapa XSLT. 

### Criação de XML Schemas

Com frequência é necessário gerar XML Schemas a partir de tabelas de banco de dados.O XSLT Designer possui *wizards* para facilitar a criação de XML Schemas a partir de tabelas de bancos ou comandos SQL. Para criar um XML Schema tem-se abaixo os procedimentos.

- Acessar o menu principal **File**, item **New** e subitem **XSD from Database**.
- Aparecerá uma janela com os seguintes campos que deverão ser preenchidos

| Campo | Descrição |
| --- | --- |
| Campo | Descrição |
| Connection name | Preencher com o nome da conexão |
| Project | Indicar o nome do projeto e a pasta selecionada (valor padrão). |
| Database | Indicar o tipo do banco de dados, que pode ser escolhido: Oracle, SQL Server ou MySQL.  |
| JDBC Driver | Este campo é preenchido automaticamente com o driver JDBC utilizado para estabelecer conexão com o banco de dados.  |
| Username | Preencher nome de usuário para conexão. |
| Password | Preencher a senha de usuário para conexão. |
| Catalog Database | O campo irá carregar os Catálogos disponíveis no banco de dados. |
| Database Schema | O campo irá carregar os Esquemas disponíveis no banco de dados. |
| File Name | Nome do arquivo de Schema XML, com a extensão .xsd que deverá ser único em todo o projeto. |

- Após preencher as informações clicar no botão** Next**.
- No *wizard* seguinte, a opção **"Table"** vem selecionada como padrão. Para exibir todas as tabelas disponíveis é necessário acionar **"List Tables..."**e selecionar a tabela desejada. Se optar pela opção **"Query"** é necessário informar a instrução SQL desejada na caixa de texto, para validar a *query* informada acionar **"Validate Query..."**.
- Em seguida clicar no botão** Finish**.

Após finalizar a criação do **XML Schema**dois arquivos serão criados na pasta do projeto. Um arquivo XSD correspondendo ao XML Schema e um arquivo XML para ser utilizado como exemplo de entrada da transformação.


<!-- anchors: XSLTDesigner-Índice, XSLTDesigner-Objetivo, XSLTDesigner-Criação, XSLTDesigner-Barradebotões, XSLTDesigner-PainelGlobalVariables, XSLTDesigner-MapeadorGráfico, XSLTDesigner-PainelInferior, XSLTDesigner-CriaçãodeXMLSchemas -->
