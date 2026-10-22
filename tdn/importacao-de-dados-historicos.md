---
title: "Importação de dados históricos"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=126717843"
scraped_at: "2026-03-09T03:04:09.261Z"
depth: 1
anchors: 26
child_links: 48
---

# Importação de dados históricos

# Pré-requisitos

---

- Estar em uma atualização do TOTVS Fluig Plataforma 1.6.3 - EP 15, 1.6.4-180606 ou superior;

- Acesso ao servidor onde a plataforma TOTVS Fluig está instalada (leitura);

- Analytics habilitado e configurado. Para mais informações, [clique aqui](https://tdn.totvs.com/pages/viewpage.action?pageId=107381593#enable-analytics-steps-2);

- Java 8 instalado;

Plataforma em Cloud

Clientes cloud precisam entrar em contato com o time de Cloud informando a empresa (Produção ou homologação) código do projeto Analytics (Recebido no convite de ativação), tenant da empresa e período desejado para que seja realizado a importação dos dados.

Atenção!

Para a correta importação dos dados das solicitações de processos customizados que possuem mais de uma versão, o importador fará a verificação da existência do evento beforeSendData().

Caso o importador encontre na implementação desse evento, respectivamente, a declaração de campos ou fatos personalizados, ele criará os arquivo necessários para o envio destes dados automaticamente. O código dentro do evento deve seguir o formato abaixo:

**Exemplo de declaração de campos e fatos personalizados no evento beforeSendData**

[?](#)

| `customFields[0] = hAPI.getCardValue(``"fieldname"``);``customFacts[0] = java.lang.Double.parseDouble(hAPI.getCardValue(``"fieldname"``));` |
| --- |

Sendo que "customFields[0]" é responsável pelo envio de dados tipo texto, e "customFacts[0]" pelo envio de dados do tipo numérico.

Caso existam campos que utilizem funções específicas (*split*, por exemplo) para a definição do seu valor, o campo não será considerado nesta criação automática do arquivo.

## Consulta do dia e hora do seu último envio de dados da plataforma ao Analytics

Para a consulta do envio de dados, siga os passos abaixo:

- [Passo 1](#)
- [Passo 2](#)
- [Passo 3](#)

 - Acesse o endereço analytics.fluig.com

![](/download/attachments/126717843/login%20analytics.png?version=1&modificationDate=1528395702000&api=v2)

 - Clique sobre Manage > Solicitação

![](/download/attachments/126717843/erro%20de%20dados%20analytics%202.png?version=1&modificationDate=1528409437000&api=v2)

 - Para verificar se houve alguma interrupção no envio de dados do TOTVS Fluig Plataforma para o Analytics, procure por um intervalo de tempo onde os dados não foram sincronizados. No exemplo abaixo a última atualização foi no dia 25/05/2018 retornando no dia 07/06/2018. -Data em que este exemplo foi incluído na documentação.

![](/download/attachments/126717843/erro%20de%20dados%20analytics.png?version=1&modificationDate=1528396084000&api=v2)

# Download do importador

---

Para o processo de importação, não é preciso parar o serviço do fluig (este procedimento pode ser realizado enquanto o TOTVS Fluig Plataforma está em execução).

Primeiramente, será necessário efetuar o *download* do artefato correspondente à atualização da plataforma para o qual o importador será executado, disponível **aqui**.

Atenção!

Informamos que este importador de dados é compatível com as versões: **1.7.1** e **inferiores**.

Para as versões **1.8.0** e **superiores** o importador compatível pode ser baixado **aqui**. 

# Execução do Importador

---

Após efetuar o *download*, a importação de dados históricos pode ser realizada de duas formas. Segue abaixo:

Fique atento!

Caso o erro abaixo seja exibido na execução do importador, significa que o arquivo de validação do modo de startup do Wildfly não foi gerado e será necessário cria-lo manualmente.

java.io.FileNotFoundException: <fluig-installation>/appserver/bin/  wildfly-config (No such file or directory)

Para isso:

- Acesse a pasta <fluig-installation>/appserver/bin/
- Crie o arquivo wildfly-config, e informe se o modo de inicialização do Fluig é "domain" ou "standalone" incluindo apenas um dos dois modos de inicialização.
- Após isso, execute novamente o importador.

Observação

Não é oferecido suporte à campos pai x filho nos eventos beforeSendData, quando realizada a extração manual. 

## Execução simples (gera e envia todos os dados em modo visual)

1. Coloque o importador dentro do diretório raiz da instalação da plataforma.
2. Execute o importador com um duplo clique ou via linha de comando (substituindo <VERSION> pele versão do importador):
[?](#)
| `java -jar analytics-import-.jar` |
| --- |
3. Informe o diretório onde a plataforma está instalada, o código do tenant (empresa), o código do projeto no Analytics para onde os dados serão enviados, e o período (data inicial e final) dos dados a serem importados. O código do projeto no Analytics é o mesmo inserido na configuração da empresa, com a chave analytics.gd.project.id.
4. Clique no botão **Iniciar importação** e aguarde o processo de importação

![](/download/attachments/126717843/image2018-6-7_13-29-4.png?version=1&modificationDate=1528388945000&api=v2)

****

## Execução modo texto (gera e envia todos os dados)

---

1. Coloque o importador dentro do diretório raiz da instalação da plataforma 
2. Execute o importador informando os seguintes parâmetros na linha de comando:

[?](#)

| `java -jar analytics-import-.jar      ` |
| --- |

**Exemplo**

[?](#)

| `java -jar analytics-import-1.6-v3.jar c:\fluig 1 abc123def456ghi789jkl012mno345pq 10/01/2017 10/02/2017` |
| --- |

ATENÇÃO

O formato da data informada deverá ser **DD/MM/AAAA**

****

## Execução modo texto (somente gera dados)

---

1.Coloque o importador dentro do diretório raiz da instalação da plataforma.

2.Execute o importador informando os seguintes parâmetros na linha de comando:

[?](#)

| `java -jar analytics-import-.jar        gerar` |
| --- |

**Exemplo**

[?](#)

| ```java -jar analytics-import-1.6-v3.jar  c:\fluig 1 abc123def456ghi789jkl012mno345pq 10/01/2017 10/02/2017 gerar` |
| --- |

ATENÇÃO

O formato da data informada deverá ser **DD/MM/AAAA**

## Execução modo texto (somente enviar dados)

---

1.Coloque o importador dentro do diretório raiz da instalação da plataforma.

2.Execute o importador informando os seguintes parâmetros na linha de comando:

[?](#)

| `java -jar analytics-import-.jar       enviar` |
| --- |

**Exemplo**

[?](#)

| `java -jar analytics-import-1.6-v3.jar c:\fluig 1 abc123def456ghi789jkl012mno345pq 10/01/2017 10/02/2017 enviar` |
| --- |

ATENÇÃO

O formato da data informada deverá ser **DD/MM/AAAA**

****

## Execução modo texto (deletar dados)

---

1.Coloque o importador dentro do diretório raiz da instalação da plataforma.

2.Execute o importador informando os seguintes parâmetros na linha de comando:

[?](#)

| `java -jar analytics-import-.jar     deletar ` |
| --- |

**Exemplo**

[?](#)

| `java -jar analytics-import-1.6-v3.jar  c:\fluig 1 abc123def456ghi789jkl012mno345pq deletar dataset.solicitacao` |
| --- |

Segue datasets válidos:

- dataset.solicitacao
- dataset.documento
- dataset.pagehit
- dataset.events
- dataset.author
- dataset.place

Ao término da execução do processo de importação, será gerado um *log* no diretório onde o arquivo *analytics-import.jar* foi executado.

## Execução modo texto (executando eventos e conferindo log)

---

1.Coloque o importador dentro do diretório raiz da instalação da plataforma.

2.Execute o importador informando os seguintes parâmetros na linha de comando:

[?](#)

| `java -jar analytics-import-.jar        gerar true SCHEMA` |
| --- |

**Exemplo**

[?](#)

| ```java -jar analytics-import-1.6-v3.jar  c:\fluig 1 abc123def456ghi789jkl012mno345pq 10/01/2017 10/02/2017 gerar true SCHEMA` |
| --- |

Este recurso faz com que os eventos beforeSendData das solicitações sejam executados mapeando os campos dos formulários. Os eventos só irão simular a execução de eventos com hAPI.getCardValue("Campo") e hAPI.getCardData() e gerar logs, outros métodos não serão executados.

O parâmetro SCHEMA só é necessário em bases ORACLE, caso contrário há a possibilidade de causar erro nos importadores.

Após a execução neste modo, um log contendo quais eventos foram executados com sucesso e com erro serão exibidos, bem como o select para pesquisar cada registro que o importador utilizou para enviar dados de formulários, sendo bem mais fácil verificar o acontecimento de erros e inconsistências.


<!-- anchors: Importaçãodedadoshistóricos-Pré-requisitos, highlighter_984236, Importaçãodedadoshistóricos-ConsultadodiaehoradoseuúltimoenviodedadosdaplataformaaoAnalytics, 1, 1-1, 1-1, 1-1, Importaçãodedadoshistóricos-Downloaddoimportador, Importaçãodedadoshistóricos-ExecuçãodoImportador, Importaçãodedadoshistóricos-Execuçãosimples(geraeenviatodososdadosemmodovisual), highlighter_256066, Importaçãodedadoshistóricos-Execuçãomodotexto(geraeenviatodososdados), highlighter_314461, highlighter_30713, Importaçãodedadoshistóricos-Execuçãomodotexto(somentegeradados), highlighter_352530, highlighter_860094, Importaçãodedadoshistóricos-Execuçãomodotexto(somenteenviardados), highlighter_478876, highlighter_699230, Importaçãodedadoshistóricos-Execuçãomodotexto(deletardados), highlighter_547764, highlighter_425641, Importaçãodedadoshistóricos-Execuçãomodotexto(executandoeventoseconferindolog), highlighter_125730, highlighter_94725 -->
