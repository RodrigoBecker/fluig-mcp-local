---
title: "Dados para Relatórios"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=107941778"
scraped_at: "2026-03-09T03:49:53.955Z"
depth: 2
anchors: 15
child_links: 51
---

# Dados para Relatórios

# Índice

# Visão Geral

No *Analytics* apenas dados do TOTVS Fluig Plataforma são enviados para análise. Dentro dele são criados *Datasets* que se referem a conjuntos de dados enviados para geração de relatórios.

# Pré-requisitos

Conhecer como é feita a criação de um relatório no Analytics e como consultar os datasets, conforme apresentado [neste link](/pages/viewpage.action?pageId=243630888). 

# BPM - Processos

Acompanhe a seguir as informações de Processo para geração dos relatórios.

## Dataset: solicitacao

**Objetivo:** possuir dados das solicitações já abertas.

| Campo | Tipo | Descrição | Exemplos de valores |
| --- | --- | --- | --- |
| Campo | Tipo | Descrição | Exemplos de valores |
| solicitacaoId | Chave | Código da solicitação | 100140035851  |
| solicitacaoVersaoProcesso | Atributo | Versão do processo que está executando | 123  |
| solicitacaoIdProcesso | Atributo | Código do processo | vendasviagens  |
| solicitacaoDescricaoProcesso | Atributo |  Descrição completa do processo | Solicitação de ViagensPedido de Venda |
| solicitacaoIdSolicitante | Atributo | Código (matricula) do usuário que solicitou o processo | nome.sobrenome |
| solicitacaoNomeSolicitante | Atributo |  Nome completo do solicitante |  Nome Sobrnome |
| solicitacaoIdResponsavel | Atributo | Código do usuário (ou identificador do pool) que é o responsável atual da atividade | nome.sobrenomepapel |
| solicitacaoNomeResponsavel | Atributo | Nome completo do usuário ou descrição do papel/grupo | Nome SobrnomeGrupo RH |
| solicitacaoStatus | Atributo | Situação da solicitação | AbertoFechadoCancelado |
| solicitacaoIdAtividade | Atributo | Código da atividade | 368  |
| solicitacaoNomeAtividade | Atributo | Descrição completa da atividade | Aprovação de Pedido |
| solicitacaoCustom0solicitacaoCustom1solicitacaoCustom2 ...solicitacaoCustom29 | Atributo | 30 campos customizado para ser preenchido via evento para servir como atributos | <qualquer valor pode ser colocado nesse campo> |
| solicitacaoFact0solicitacaoFact1solicitacaoFact2...solicitacaoFact9 | Fato | 10 campos customizado para ser preenchido via evento para servir como fatos | 2.003.5511.5822.62  |
| createDate | Data | Data de criação da solicitação | 2013-10-10 |
| updateDate | Data | Data da ultima movimentação da solicitação | 2013-10-10 |

## Dataset: solicitacaoEmAtraso

**Objetivo:** possuir uma referência a solicitações com tarefas em atraso. 

**Observação**:  Para que esse dataset seja populado é necessário cadastrar a notificação de Tarefas Atrasadas na tela Painel de Controle/Agendador de Tarefas.

| Campo | Tipo | Descrição | Exemplos de valores |
| --- | --- | --- | --- |
| Campo | Tipo | Descrição | Exemplos de valores |
| solicitacaoId | Chave | Relaciona o dataset solicitacaoEmAtraso com o Dataset de solicitação | 1001 4003 5851  |
| solicitacaoEmAtrasoPrazo | Data | Data de expiração da tarefa | 10/10/2010 |
| solicitacaoEmAtrasoHora | Fato | Hora de expiração da tarefa. | 1  10  22 |

# ECM - Documentos

Acompanhe a seguir as informações de Documentos para geração dos relatórios.

## Dataset: documento

**Objetivo:** possuir dados de visualização de documentos

| Campo | Tipo | Descrição | Exemplos de valores |
| --- | --- | --- | --- |
| Campo | Tipo | Descrição | Exemplos de valores |
| documentoId | Chave | Chave do documento composta pelo código e a versão | 8558_10008558_200082517_1000 |
| documentoCodigo | Atributo | Código do documento | 855882517 |
| documentoVersao | Atributo |  Versão do documento | 10002000 |
| documentoDescricao | Atributo | Descrição principal | Norma da QualidadeMelhores práticas de projetosCaso 229 - Cliente ACME  |
| documentoIdPublicador | Atributo | Código do usuário (matricula) que publicou o documento | nome.sobrenome |
| documentoNomePublicador | Atributo |  Nome completo do usuário que publicou o documento | Nome Sobrenome  |
| documentoIdAutor | Atributo | Código do usuário que elaborou o documento | nome.sobrenome |
| documentoNomeAutor | Atributo | Nome completo do usuário que elaborou o documento | Nome Sobrenome |
| documentoTipo | Atributo | Descrição do tipo de documento | DocumentoPastaFormulário  |
| documentoAssunto | Atributo | Descrição do assunto | Padrão |
| documentoIdPai | Atributo | Código da pasta/Formulário | 8871 |
| documentoDescricaoPai | Atributo | Descrição da pasta/formulário |  |
| documentoExtensao | Atributo | Extensão do arquivo principal | PDFDOCX |
| documentoDownload | Atributo | Informação se o download é permitido | truefalse |
| documentoQtAcessos | Fato | Quantidade de acessos ao documento | 153 |
| documentoTamanho | Fato | Tamanho em bytes dos arquivos | 10246370187 |
| createDate | Data | Data de criação do documento | 2013-10-10 |
| updateDate | Data | Data da ultima alteração | 2013-10-10 |

Importante!

Documentos armazenados nas pastas particulares (Meus Documentos) **não são sincronizados** com o Analytics, pois estes diretórios são de uso e visualização exclusivas do usuário autenticado.

# WCM - Portais - Hit de página

Acompanhe a seguir as informações de Hit de página para geração dos relatórios.

## Dataset: pageHit

**Objetivo:** possuir informações sobre os acessos as páginas.

| Campo | Tipo | Descrição | Exemplos de valores |
| --- | --- | --- | --- |
| Campo | Tipo | Descrição | Exemplos de valores |
| pageHitIdHit | Chave | Identificador único do hit | usuario_87979879874212111 |
| pageHitCodPagina | Atributo | Código da página | homecpaineladmincomurh |
| pageHidDescPagina | Atributo |  Descrição da página | HomePainel administraçãoComunidade RH |
| pageHitLoginHit | Atributo | Login do usuário | nome.sobrnome@empresacom  |
| pageHitHora | Atributo |  Hora do acesso | 17  |
| pageHitMinuto | Atributo | Minuto  do acesso | 30 |
| pageHitQtHit | Fato | Valor para fixo para calculo | sempre 1 |
| hitDate | Data | Data do acesso | 10/10/2013 |

# Social

Acompanhe a seguir as informações Sociais para geração dos relatórios.

## Dataset: Events

**Objetivo:** possuir eventos sociais que ocorram dentro da plataforma TOTVS Fluig. Atributo customizado que pode ser populado via API Pública.

| Campo | Tipo | Descrição | Exemplos de valores |
| --- | --- | --- | --- |
| Campo | Tipo | Descrição | Exemplos de valores |
| eventId | Chave | Código único do evento no formato {eventType}{entityID} | POST5578COMMENT158936 |
| eventType | Atributo | Tipo de evento social que ocorreu | LIKEPOSTCOMMENTDENOUNCE SHAREMENTION  |
| eventSubType | Atributo | Sub tipo de evento social que ocorreu | DEFAULT <quando não há sub tipo>LIKE_POSTLIKE_COMMENTSHARE_POSTMENTION_SHAREMENTION_POSTMENTION_COMMENT  |
| referenceId | Atributo | Código do evento raiz Ex: se é um comentário, esse código informa o Post que gerou o comentário | 3312131332772  |
| customAttr0 | Atributo | Atributo customizado que pode ser populado via API Publica |  |
| customAttr1 | Atributo | Atributo customizado que pode ser populado via API Publica |  |
| customAttr2 | Atributo | Atributo customizado que pode ser populado via API Publica |  |
| placeId | Atributo | Código da comunidade ou usuário onde foi feita a açãoJuntamente com esse campo existe um rótulo "name"  | 554 -> CIPA1122 -> Ana maria  |
| gdPost | Fato | Campo para soma | 1 <sempre será valor 1> |
| customFact0 | Fato | Fato customizado que pode ser populado via API Publica |  |
| customFact1 | Fato | Fato customizado que pode ser populado via API Publica |  |
| customFact2 | Fato | Fato customizado que pode ser populado via API Publica |  |
| createDate | Data | Data de criação do evento | 2013-10-10 |
| authorId | Chave | Código do autor que fez a açãoJuntamente com esse campo existe um rótulo "name" | 1122 -> Ana Maria3312 -> João Silva |
| placeId | Chave | Código da comunidade ou usuário onde foi feita a açãoJuntamente com esse campo existe um rótulo "name" | 554 -> CIPA1122 -> Ana maria |

## Dataset: Author

**Objetivo:** possuir dados dos autores de eventos sociais com informações de seu perfil na plataforma TOTVS Fluig

| Campo | Tipo | Descrição | Exemplos de valores |
| --- | --- | --- | --- |
| Campo | Tipo | Descrição | Exemplos de valores |
| authorId | Chave | Código o autor que fez a açãoJuntamente com esse campo existe um rótulo "name" | 1122 -> Ana Maria3312 -> João Silva  |
| removed | Atributo | Informa se o autor está desativado | 0 <ativo>1 <desativado> |
| participations | Fato | Número de comunidades que o autor participa | 111 |
| followers | Fato | Número de seguidores do autor | 222 |
| followings | Fato | Número de usuários que o autor segue | 333 |
| likes | Fato | Campo não utilizado |  |
| posts | Fato | Campo não utilizado |  |
| moderations | Fato | Campo não utilizado |  |
| images | Fato | Campo não utilizado |  |
| videos | Fato | Campo não utilizado |  |

## Dataset: Place

**Objetivo:** possuir dados das comunidade onde foram feitas as ações sociais

| Campo | Tipo | Descrição | Exemplos de valores |
| --- | --- | --- | --- |
| Campo | Tipo | Descrição | Exemplos de valores |
| placeId | Chave | Código da comunidade ou usuário onde foi feita a açãoJuntamente com esse campo existe um rótulo "name"  | 554 -> CIPA1122 -> Ana maria  |
| removed | Atributo | Informa se a comunidade está desativado | 0 <ativa>1 <desativada> |
| placeType | Atributo | Informa se é uma comunidade ou é um usuário | COMMUNITYUSER  |
| hidden | Atributo |  | falsetrue |
| privateContent | Atributo |  | falsetrue  |
| requireApproval | Atributo | Necessita aprovação | falsetrue |
| members | Fato | Número de participantes na comunidade | 3044549547  |
| images | Fato | Campo não utilizado |  |
| videos | Fato | Campo não utilizado |  |
| documents | Fato | Campo não utilizado |  |
| articles | Fato | Campo não utilizado |  |

## Dataset: WatchContent

**Objetivo:** Informações sobre os conteúdos observados pelos usuários

| Campo | Tipo | Descrição | Exemplos de valores |
| --- | --- | --- | --- |
| Campo | Tipo | Descrição | Exemplos de valores |
| watchId | Chave | Código único do watch | 345 |
| wc_contentType | Atributo | Identifica o tipo de objeto a ser observado | COMMUNITYDOCUMENTPOST |
| wc_contentId | Atributo | Id do comunidade, post ou do documento que esta sendo observado | 123 |
| wc_version | Atributo | caso o objeto for um documento traz a versão do documento que esta sendo observada | 1000 |
| wc_parentType | Atributo | Campo não utilizado |  |
| wc_parentId | Atributo | caso o objeto for um documento  traz o id da pasta ou do formulário onde o documento esta publicado | 1 |
| wc_removed | Atributo | Campo não utilizado |  |
| wc_fact | Fato | Fixo 1 |  1 |
| placeId | Chave | Código da comunidade, post ou documento onde foi feita a açãoJuntamente com esse campo existe um rótulo "name" | 554 -> CIPA1122 -> Ana maria |
| authorId | Chave | Código do autor que fez a açãoJuntamente com esse campo existe um rótulo "name" | 1122 -> Ana Maria3312 -> João Silva  |
| createDate | Data | Data de criação |  2016-10-10 |


<!-- anchors: DadosparaRelatórios-Índice, DadosparaRelatórios-VisãoGeral, DadosparaRelatórios-Pré-requisitos, DadosparaRelatórios-BPM-Processos, DadosparaRelatórios-Dataset:solicitacao, DadosparaRelatórios-Dataset:solicitacaoEmAtraso, DadosparaRelatórios-ECM-Documentos, DadosparaRelatórios-Dataset:documento, DadosparaRelatórios-WCM-Portais-Hitdepágina, DadosparaRelatórios-Dataset:pageHit, DadosparaRelatórios-Social, DadosparaRelatórios-Dataset:Events, DadosparaRelatórios-Dataset:Author, DadosparaRelatórios-Dataset:Place, DadosparaRelatórios-Dataset:WatchContent -->
