---
title: "Enviando dados e fatos do formulário"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=126717934"
scraped_at: "2026-03-09T03:49:49.343Z"
depth: 2
anchors: 10
child_links: 43
---

# Enviando dados e fatos do formulário

# Índice

# Objetivo

Esse guia visa apresentar os passos necessários de configuração para que dados e fatos de **formulários de processos** sejam enviados para o Analytics.

Atenção

Os números de acessos (hits) de registros de formulários não são enviados ao analytics.

# Pré-requisitos

- Conhecimento prévio em determinados pontos, principalmente uma visão geral sobre o TOTVS Fluig Plataforma e o card [Recurso de Analytics](/display/fluig/Recurso+de+Analytics)
- Para configurar é necessário o código do processo e os campos do formulário que serão enviados.

Atenção

O Analytics permite o envio de até 10 campos customizados para cada solicitação workflow.

# Preparando a importação de dados de formulários de processos

1. Na pasta onde está o *analytics-import.jar* crie o diretório "conf"
2. Crie o arquivo descritor (formato txt) com o código do processo dentro da pasta "conf"Ex.: RH.txt
3. Edite o arquivo descritor e inclua os campos desejados (conforme o atributo *name* do formulário) que deverão ser enviados ao Analytics

Exemplo:

**Formulário do processo workflow**

[?](#)

| ```````````````` |
| --- |

**Exemplo Arquivo Descritor - RH.txt**

[?](#)

| `NomeParticipante``CPFParticipande` |
| --- |

Neste exemplo, os dados enviados ao Analytics estarão disponíveis nos campos *solicitacaoCustom0* e *solicitacaoCustom1*.

### Importando dados de formulário entre diferentes versões do processo

Caso versões diferentes do processo possuam campos diferentes do formulário, é possível criar arquivos descritores específicos para cada versão do processo.

Para isso inclua um underline "_" e a versão ao nome do arquivo descritor (.txt).

Ex.: RH_2.txt 

Dessa forma serão mapeados somente os campos do processo "RH" na versão 2.

# Importando fatos de formulário 

Para a importação de fatos de formulário ao Analytics, é necessário seguir os passos abaixo.

1. Na pasta onde está armazenado o *analytics-import.jar* crie um diretório chamado "conf"
2. Crie o arquivo descritor no formato .fac dentro da pasta conf e use o código do processo como nomeEx.: RH.fac
3. Edite o arquivo descritor e na primeira linha informe:o formato número do fato a ser enviado
4. o caractere separador decimal
5. o caractere separador de milhar

Informe nas demais linhas do arquivo descritor os campos a serem enviados como fatos.
Exemplo:

**Exemplo Arquivo Descritor - RH.fac**

[?](#)

| `#.## , .``NomeParticipante``CPFParticipande` |
| --- |

### Importando fatos de formulário entre diferentes versões do processo

Caso versões diferentes do processo possuam fatos diferentes do formulário, é possível criar arquivos descritores específicos para cada versão do processo.

Para isso inclua um underline "_" e a versão ao nome do arquivo descritor (.fac).

Ex.: RH_2.fac

Dessa forma serão mapeados somente os fatos do processo "RH" na versão 2.


<!-- anchors: Enviandodadosefatosdoformulário-Índice, Enviandodadosefatosdoformulário-Objetivo, Enviandodadosefatosdoformulário-Pré-requisitos, Enviandodadosefatosdoformulário-Preparandoaimportaçãodedadosdeformuláriosdeprocessos, highlighter_318616, highlighter_453155, Enviandodadosefatosdoformulário-Importandodadosdeformulárioentrediferentesversõesdoprocesso, Enviandodadosefatosdoformulário-Importandofatosdeformulário, highlighter_930886, Enviandodadosefatosdoformulário-Importandofatosdeformulárioentrediferentesversõesdoprocesso -->
