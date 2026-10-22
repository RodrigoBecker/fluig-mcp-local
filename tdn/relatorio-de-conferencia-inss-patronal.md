---
title: "Relatório de Conferência INSS Patronal"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=728635413"
scraped_at: "2026-03-09T05:33:21.645Z"
depth: 4
anchors: 10
child_links: 123
---

# Relatório de Conferência INSS Patronal

## 

## CONTEÚDO

1. **Visão Geral**
2. **Exemplo de utilização******
3. **Tabelas utilizadas**

****

## 01. VISÃO GERAL

Implementação de painel de conferência para a DCTFWeb. 

Objetiva mostrar ao declarante, com base nas informações transmitidas nos eventos de tabelas e periódicos, o total da base de cálculo por categoria de trabalhador, por lotação tributária e por estabelecimento. 

A partir dessas informações são apurados os créditos previdenciários e os devidos a outras entidades e fundos.

## 02. PROCEDIMENTOS PARA IMPLEMENTAÇÃO

IMPORTANTE

**Premissas importantes para uso do relatório:**

- O release do Protheus deve ser 12.1.33 ou superior
- Os encargos de terceiros, preenchidos na tabela S038, devem estar com os percentuais de cada entidade devidamente informados e calculados na folha. Como o relatório é utilizado para confrontar os valores da folha vs evento S-5011, e por este evento retornar cada código de receita separadamente, é preciso que a folha trabalhe da mesma forma. Consulte nossa [documentação](https://centraldeatendimento.totvs.com/hc/pt-br/articles/13008616340887)sobre este cadastro

- [Atualização Ambiente](#)
- [Procedimentos para Configuração](#)
- [Procedimentos para utilização](#)
- [Utilizando o relatório](#)

**1) Dicionário: **

Aplicar previamente [Pacote e Dicionário Correções Expedição Continua RH](https://suporte.totvs.com/portal/p/10098/download#000006/all/all/search/RH_EXPEDICAO_CONTINUA) (06/02/2023) , caso haja dúvidas sobre a execução do UPDDISTR consulte nossa [documentação](https://tdn.totvs.com/x/-FIMEQ).

**2) Pacotes: **

Alguns programas foram ajustados para permitir a geração dos dados para o painel de conferência, deve-se aplicar ambos os pacotes que acompanham este documento. 

Obs.: Caso o serviço Rest possua repositório separado da aplicação certificado que ambos os repositórios foram atualizados.

**3) Serviço REST: **

O uso de serviço Rest é obrigatório para uso desta funcionalidade, portanto para clientes que já utilizam o novo monitor do TAF (eSocial do Futuro) ou o middleware não é necessária ação, 

mas caso esteja configurando o serviço pela primeira vez verifique nossa [documentação](https://tdn.totvs.com/x/gkkSCw)sobre o tema.

**1) Menu**

No Configurador (SIGACFG) acesse Ambientes/Cadastro/Menú (CFGX013). Informe a nova opção de menu do SIGAGPE, conforme instruções a seguir:

**Menu**   | Miscelânea

**Submenu**  | eSocial

**Nome da Rotina** | Painel DCTFWeb

**Programa**  | GPEA960

**Módulo**  | Gestão de Pessoal

**Função** | Função Protheus

Exemplo de Configuração:

![](/download/attachments/728635413/image2023-1-23_13-50-36.png?version=1&modificationDate=1674492636867&api=v2)

**2) Parâmetro**

No Configurador (SIGACFG) acesse Ambientes/Cadastro/Parâmetros (CFGX017), procure pelo parâmetro MV_RHDCTFW e altere seu conteúdo para .T. (Verdadeiro).

![](/download/attachments/728635413/image2022-12-21_11-2-14.png?version=1&modificationDate=1671633301457&api=v2)

Realizadas as atualizações e parametrizações solicitadas seguir os passos abaixo para validação do relatório

**1) Cálculo da Folha**

Parte dos dados apresentados no relatório DCTFWEB são capturados durante cálculo de folha, portanto caso a folha já esteja processada é necessário recalcular. Os valores de encargos e percentuais RAT, FAP e RAT utilizados durante este processamento serão armazenadas na tabela RU0.

**2) Evento de Fechamento**

Os dados apresentados no relatório com origem RET são obtidos diretamente do evento S-5011, desta forma somente serão apresentados valores se houver no período selecionado um evento S-1299 enviado com sucesso.

No Gestão de Pessoal (SIGAGPE) acesse Miscelânea/eSocial/Relatório DCTFWEB (APPRH)

# Filtros

Os possíveis filtro permitidos no relatório são ‘período’ e estabelecimento (CNPJ):

**Observação:**Ao selecionar os estabelecimentos só será permitido a seleção de CNPJ`s que possuem a mesma raiz.

![](/download/attachments/728635413/image2022-12-21_11-13-25.png?version=1&modificationDate=1671633301220&api=v2)

Ao aplicar o filtro será apresentado quadro com o total de encargos apurados pela folha e pela DCTFWeb, assim como os estabelecimentos selecionados no filtro:

![](/download/attachments/728635413/image2022-12-21_11-14-19.png?version=1&modificationDate=1671633300637&api=v2)

É possível expandir cada estabelecimento e validar os valores dos encargos conforme exemplo abaixo:

![](/download/attachments/728635413/image2022-12-21_11-15-37.png?version=1&modificationDate=1671633299967&api=v2)

Ao clicar sobre o número do CNPJ do estabelecimento também é possível consultar os dados por categoria em cada Lotação (Centro de Custo), veja print abaixo:

![](/download/attachments/728635413/image2022-12-21_11-16-15.png?version=1&modificationDate=1671633299647&api=v2)

 **OBS.: Melhoria a ser liberada para o mercado até o final de janeiro/2023.**

## 03. TABELAS UTILIZADAS

- RU0


<!-- anchors: RelatóriodeConferênciaINSSPatronal-CONTEÚDO, RelatóriodeConferênciaINSSPatronal-01.VISÃOGERAL, RelatóriodeConferênciaINSSPatronal-02.PROCEDIMENTOSPARAIMPLEMENTAÇÃO, 1, 1-1, 1-2, 1-3, 1-4, RelatóriodeConferênciaINSSPatronal-Filtros, RelatóriodeConferênciaINSSPatronal-03.TABELASUTILIZADAS -->
