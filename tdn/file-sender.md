---
title: "FILE Sender"
url: "https://tdn.totvs.com/display/public/fluig/FILE+Sender"
scraped_at: "2026-03-09T04:50:51.574Z"
depth: 3
anchors: 0
child_links: 69
---

# FILE Sender

A finalidade desse componente é salvar um arquivo em um diretório especifico as informações que foram trafegadas através do Fluig ESB.

| Campo | Descrição |
| --- | --- |
| Campo | Descrição |
| Name | Inserir uma identificação para a configuração do FILE Sender. |
| Error Interval | Inserir o intervalo (em segundos) para que o sistema aguarde, caso ocorra algum erro, para efetuar novamente a verificação de novas mensagens. |
| Tries | Inserir o número de vezes que o sistema deve tentar enviar a mensagem antes de notificar o erro ao usuário. |
| Persist | Quando selecionado o Fluig ESB irá armazenar um registro referente a execução deste componente. |
| Directory | Inserir o nome do diretório no qual as informações recebidas serão gravadas. |
| File Name | Inserir o nome do arquivo no qual as informações serão gravadas. Para mais informações consulte: Opções para o campo File Name. |
| Append | Quando selecionado, indica que o conteúdo é incremental, ou seja, o conteúdo deve ser adicionado no final do arquivo caso esse já exista. |

No campo **File Name** é possível configurar como será o nome do arquivo que o Fluig ESB irá gerar. As opções de funções possíveis de serem utilizadas para o campo estão descritas abaixo.

- **Nome Original do Arquivo:** É possível definir um nome para o arquivo gerado. Caso não seja informado será assumido o nome do arquivo original. Exemplo:

| Função | Exemplo |
| --- | --- |
| Função | Exemplo |
| Somente o nome do arquivo sem extensão | ${file:name.noext} ou {file:onlyname.noext} |
| Somente a extensão do arquivo | ${file:name.ext} ou ${file:ext} |
| O nome do arquivo original | ${file:name } ou ${file:onlyname} |
| Nome como uma constante fixa | MeuArquivo.xml |

- **Tamanho do arquivo:** É possível definir como nome do arquivo o tamanho do mesmo. Exemplo: **${file:length}**  ou  **${file:size}**

- **Datas:**Insere a data do servidor no nome do arquivo. Para a formatação da data é utilizado os padrões *java.text.SimepleDateFormat.*Exemplos: Os símbolos são *case sentitive*, ou seja, deverá; ser tomado cuidado com símbolos em maiúsculo ou minúsculo
| Símbolo | Significado | Sintaxe | Exemplo |
| --- | --- | --- | --- |
| Símbolo | Significado | Sintaxe | Exemplo |
| G | Era | ${date:now:GG}  | AD |
| y | Ano | ${date:now:yy} | 12 |
| ${date:now:yyyy} | 2012 |  |  |
| M | Mês | ${date:now:M} | 6 |
| ${date:now:M} | 11 |  |  |
| ${date:now:MM} | 06 |  |  |
| ${date:now:MMM} | Jun |  |  |
| ${date:now:MMMM} | November |  |  |
| d | Dia do mês  | ${date:now:d} | 1 |
| ${date:now:d} | 01 |  |  |
| h | Hora(1-12, AM/PM) | ${date:now:h} | 8 |
| ${date:now:hh} | 08 |  |  |
| H | Hora(0-23) | ${date:now:H} | 8,17 |
| ${date:now:HH} | 08, 17 |  |  |
| k | Hora (1-24) | ${date:now:k} | 3 |
| ${date:now:kk} | 03 |  |  |
| K | Hora (0-11 AM/PM) | ${date:now:K} | 17 |
| ${date:now:KK} | 17 |  |  |
| m | Minuto | ${date:now:m} | 7, 15 |
| ${date:now:mm} | 04 |  |  |
| s | Segundos | ${date:now:s} | 15 |
| ${date:now:ss} | 15 |  |  |
| S | Milissegundos (0-999) | ${date:now:SSS} | 007 |
| E | Dia da Semana | ${date:now:EEE} | Seg |
| ${date:now:EEEE} | Segunda |  |  |
| D | Dia do Ano(1-365  ou 1-364) | ${date:now:D} | 65 |
| ${date:now:DD} | 065 |  |  |
| F | Dia da Semana no Mês (1-5) | ${date:now:F} | 3 |
| w | Semana no ano (1-53) | ${date:now:w} | 7 |
| W | Semana no mês (1-5) | ${date:now:W} | 5 |
| a | AM/PM | ${date:now:a} | AM |
| ${date:now:aa} | AM |  |  |
| z | TimeZone | ${date:now:z} | BRST |
| ${date:now:zzz} | BRST |  |  |
| ${date:now:zzzz} | Fuso horário de verão de Brasília |  |  |

É possível combinar um ou mais símbolos de data/hora para nomear o arquivo. Por exemplo se é desejável utilizar a data completa em dia mês e ano e hora em hora, minuto, segundo e milissegundo que o arquivo foi enviado, será utilizado os símbolos d, M, y, h, m, s, SSS desta forma: **${date:now:ddMMyyyy}-${date:now:hhmmssSSS}**

- **Contador**: Cria um contador para os arquivos que serão salvos no diretório de saída. Parâmetros: counter([format:x; reset:y; initial:z])

| Símbolo | Significado | Sintaxe | Exemplo |
| --- | --- | --- | --- |
| Símbolo | Significado | Sintaxe | Exemplo |
| Format | Quantos dígitos o algarismo deve receber | nome_arquivo-counter(format:0000) | teste-0001 |
| Reset | Informa se o contador deverá ser zerado ou não. Por padrão o valor é “y” (Yes). | nome_arquivo-counter(format:0000;reset:y;initial:0001) | teste-0001 |
| Initial | Qual o valor inicial para a contagem, que por padrão é 0 (zero) | nome_arquivo-counter(format:0000;reset:y;initial:0001) | teste-0001 |
| Name | Caso se deseja concatenar um nome | nome_arquivo-counter(format:0000;reset:y;initial:0001) | teste-0001 |

- **Nome de componente receptor da rota:** ${domain}

- **UniqueID da mensagem:** ${uniqueID}

- **MessageKeyId da mensagem:** ${messageIdKey}
- **Dados contidos no nos documentos trafegados pelo Fluig ESB:** É possível utilizar informações contidas nas tags XML da mensagem trafegada no ESB utilizando o componente DOCIdentifier. Exemplos:

Maiores informações favor consultar a [documentação do componente](/display/fluig/DOC+Identifier).

| Símbolo | Significado | Sintaxe | Exemplo |
| --- | --- | --- | --- |
| Símbolo | Significado | Sintaxe | Exemplo |
| From | Destino do Documento | ${from} | Datasul |
| To | Origem do Documento | ${to} | Protheus |
| documentNumber | Número do Documento | ${documentNumber} | 123456 |
| documentType | Tipo do Documento | ${documentType} | NFE |
| documentGroup | Informação de agrupamento | ${documentGroup} | EMS |

- **Quando há mais de um DOCIdentifier** é necessário incluir o nome deste. Exemplo: ${[IdentifierDocName].from}

- **Criar Estrutura de pastas:** para criar subpastas  basta utilizar o caractere barra “ / “ exemplo: backup/${date:now:yyyyMMdd}/${file:name.noext}.bak
