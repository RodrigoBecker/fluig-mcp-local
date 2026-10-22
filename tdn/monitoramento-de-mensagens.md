---
title: "Monitoramento de Mensagens"
url: "https://tdn.totvs.com/display/public/fluig/Monitoramento+de+Mensagens"
scraped_at: "2026-03-04T03:35:45.816Z"
depth: 4
anchors: 10
child_links: 33
---

# Monitoramento de Mensagens

# Índice

# Segurança

---

A partir da [atualização 12.3.1](#) o monitor do ESB ganha segurança de acesso via usuário e senha criptografada em MD5. As credenciais padrão são:

| Usuário | esbAdm |
| --- | --- |
| Senha | adm |

A configuração dos usuários é feita através de um arquivo XML localizado na pasta <instalação_ESB>/conf sob nome de users.xml.
O conteúdo padrão do arquivo é:

[?](#)

| `````````````````esbAdm````b09c600fddc573f117449b3723f23d64````````````````teste````b09c600fddc573f117449b3723f23d64````-->````````` |
| --- |

Para incluir um novo usuário é necessário copiar e colar o nodo XML entre as tags <esb></esb>. No exemplo abaixo são definidos dois usuários: esbAdm e testeEsb e a senha de ambos será "adm".

[?](#)

| `````````esbAdm````b09c600fddc573f117449b3723f23d64````````````testeEsb````b09c600fddc573f117449b3723f23d64``````` |
| --- |

Para alterar a senha de algum usuário é necessário modificar o conteúdo da tag <MD5password>b09c600fddc573f117449b3723f23d64</MD5password> informando uma nova senha criptografada.

No exemplo abaixo o usuário testeEsb terá a senha alterada para "teste".

[?](#)

| `````testeEsb````698dc19d489c4e4db73e28a713eab07b``` |
| --- |

Dica

A criptografia das senhas pode ser realizada em sites como o [MD5 Online](http://www.md5online.org/md5-encrypt.html).

# Interface

---

A interface possibilita ao usuário realizar operações sobre as mensagens trafegadas no Fluig ESB bem como visualizar os indicadores por meio de gráficos.

A interface do Fluig ESB Monitor está dividida em 4 seções distintas em sequência de cima para baixo: filtros, gráficos, tabela e barra de botões. A seguir, serão descritas cada uma dessas seções.

### Filtros

A área de filtros situa-se no painel superior do Fluig ESB Monitor. Trata-se de uma área para configurar parâmetros de busca de mensagens trafegadas no Fluig ESB.

Os resultados são retornados na tabela situada no painel central. O usuário pode filtrar os dados necessários para fazer a busca de suas respectivas mensagens com a ajuda dos parâmetros: Diagram e Date.

| Campo | Descrição |
| --- | --- |
| Campo | Descrição |
| Diagram | Mostra os diagramas criados no by You Studio e carregados pelo Fluig ESB. |
| Date | Contêm os campos para data e hora inicial bem como data e hora final. |

Para visualizar as mensagens oriundas do filtro configurado, clica-se no botão **Apply**situado a direita do painel.

É possível configurar outros filtros para uma busca mais detalhada acessando o link**Advanced Filter**. Ao clicar, abrirá uma tela central contendo os campos listados e descritos abaixo. Para aplicar os parâmetros, deve-se clicar em**Apply**.

| Campo | Descrição |
| --- | --- |
| Campo | Descrição |
| ID | Identificador original da mensagem. |
| UniqueID | Identificador único da mensagem. |
| Component | São os senders dos diagramas. |
| Document Type | Tipo de arquivo que vai receber a mensagem. |
| From | Nome do arquivo STD que busca a informação da origem do documento. |
| To | Nome do arquivo STD que busca a informação de destino do documento. |
| Document Number | Nome do arquivo STD que busca a informação do número do documento. Está relacionado ao tipo da mensagem.Ex.: Se a mensagem for do tipo pedido, o número do documento será o número de pedido. |
| Show Related | Quando selecionamos a opção Persist de algum componente Sender no diagrama, o monitor captura o SourceID de seu Receiver e grava na base de dados para informar o relacionamento entre as mensagens. Sendo assim, quando selecionamos a opção Show Related são mostradas as mensagens relacionadas. |
| Messages Without Out | São mensagens que não originaram outras mensagens. |

### Gráficos

Os gráficos servem para obter uma visão geral das mensagens processadas no Fluig ESB. São utilizados como indicadores para monitoramento das mensagens e captura de informações relevantes à administração do ESB. Nessa seção tem-se dois gráficos descritos abaixo:

1. **Messages by period**- Trata-se de um gráfico de linhas demonstrando as mensagens trafegadas por período. O período corresponde aos parâmetros aplicados no painel superior e inicialmente assumirá a quantidade de mensagens por data (mensagens/data). Ao clicar no gráfico, o  Fluig ESB Monitor irá assumir como filtro a data selecionada no gráfico ajustando os outros elementos da tela exibindo as mensagens da nova data. Com o novo filtro acionado, o gráfico em linha exibirá as mensagens da data selecionada por hora (mensagens/hora).
2. **Messages by status** - Trata-se de um gráfico em formato pizza demonstrando o percentual de mensagens trafegadas por status durante um determinado período. O período corresponde aos parâmetros aplicados no painel superior. Ao clicar em uma divisão do gráfico, o  Fluig ESB Monitor irá assumir como filtro o status de mensagem selecionado no gráfico ajustando os outros elementos da tela exibindo as mensagens no status selecionado. Com o novo filtro acionado, o gráfico exibirá as mensagens para o status selecionado.

### Tabela

O painel central contêm uma tabela, ou "Related Messages", possuindo como finalidade mostrar o resultado da busca filtrada em uma planilha de mensagens contendo informações detalhadas. Na parte superior da listagem contêm os botões de paginação possibilitando a navegação nas páginas da tabela. Pode-se clicar um dos números para ir diretamente a página desejada.

Os botões de setas situados nas extremidades esquerda e direita tratam-se de atalhos para a primeira página e a última página, respectivamente. Os botões de setas situados imediatamente à esquerda e direita dos números de páginas são atalhos para página anterior e próxima respectivamente.

Ainda na parte superior, tem-se uma caixa de seleção do número de resultados a serem exibidos na tabela. O usuário poderá escolher uma das opções para visualizar um maior número de mensagens na listagem.

Por padrão, são visualizados 10 (dez) mensagens na planilha.

Cada linha da tabela representa uma mensagem trafegada no Fluig ESB. As colunas disponíveis na tabela demonstram informações detalhadas para cada mensagem. As colunas estão discriminadas abaixo.

| Campo | Descrição |
| --- | --- |
| Campo | Descrição |
| ID | Número sequencial designado para cada mensagem. |
| Source ID | Código da mensagem que deu origem a mensagem atual (Mensagens Relacionadas). |
| Unique ID | Identificação única para cada mensagem. |
| Status | Status atual da mensagem. |
| From | Campo onde seu valor é designado através da propriedade Origin Document do componente DOCIdentifier no diagrama. |
| To | Campo onde seu valor é designado através da propriedade Target Document do componente DOCIdentifier no diagrama. |
| Document Type | Campo onde seu valor é designado através da propriedade Document Type do componente DOCIdentifier no diagrama. |
| Document Number | Campo onde seu valor é designado através da propriedade Document Number do componente DOCIdentifier no diagrama. |
| Diagram | Nome do Diagrama. |
| Component | Nome do componente. |
| Type | Informações sobre o tipo da mensagem. |
| Received At | Data e hora em que a mensagem foi recebida. |
| Size | Tamanho do arquivo. |

### Barra de botões

A barra de botões possibilita ao usuário algumas ações relativas ao controle de mensagens no Fluig ESB. Os botões disponíveis são:**Details, View, Reprocess, View Error**. Ainda na extremidade direita possui opções para exportação dos dados contidos na tabela. A exportação poderá ser realizada em formato das extensões .xls e .pdf. A seguir será demonstrada a funcionalidade de cada botão.

- **Details:** Exibe uma tela contendo os detalhes da mensagem selecionada. Os campos disponíveis são:
| Campo | Descrição |
| --- | --- |
| Campo | Descrição |
| ID | Número sequencial designado para cada mensagem. |
| Status | Status atual da mensagem. |
| Type | Informações sobre o tipo da mensagem. |
| Document Number | Campo onde seu valor é designado através da propriedade Document Number do componente. |
| From | Campo onde seu valor é designado através da propriedade Origin Document do componente. |
| To | Campo onde seu valor é designado através da propriedade Target Document do componente. |
| Diagram | Nome do Diagrama. |
| Component | Nome do componente.  |
| Date | Data e hora em que a mensagem foi recebida. |

- **View:**Mostra o conteúdo da mensagem trafegada no Fluig ESB com as informações contidas na tabela abaixo. Caso a mensagem esteja em formato XML, será demonstrado em modo formatado. Se a mensagem estiver mal formada, o visualizador exibe um alerta com informações sobre onde esta a má formação. Através do botão Copy to clipboard é possível copiar o conteúdo da mensagem para a área de memória do sistema operacional.
| Campo | Descrição |
| --- | --- |
| Campo | Descrição |
| Diagram |  Nome do diagrama. |
| Status | Status atual da mensagem. |
| Message | Mensagem que é processada pela transação. |

- **Reprocess:**Marca a mensagem selecionada para ser reprocessada pelo Fluig ESB. Quando uma mensagem for reprocessada o Fluig ESB reiniciará esse processo a partir do seu ponto inicial no diagrama.

- **View Error**: Em caso de erros no processamento da mensagem no Fluig ESB, a mensagem será marcada com o status de "ERROR" e essa funcionalidade permite visualizar detalhes técnicos.
- **Export:** Permite exportar a tabela em formato de planilha Excel cuja extensão é .xls facilitando o manuseio das informações. Ainda, é possível exportar a tabela em formato *Portable Document Format* cuja extensão é .pdf.


<!-- anchors: MonitoramentodeMensagens-Índice, MonitoramentodeMensagens-Segurança, highlighter_576548, highlighter_790245, highlighter_334899, MonitoramentodeMensagens-Interface, MonitoramentodeMensagens-Filtros, MonitoramentodeMensagens-Gráficos, MonitoramentodeMensagens-Tabela, MonitoramentodeMensagens-Barradebotões -->
